/*
 * Tiny i18n renderer. No framework, no build.
 *
 * i18n: fills [data-i18n] text, [data-i18n-meta] content, [data-link] hrefs from
 *       the active locale (dotted key paths). Language persists in localStorage
 *       and honors ?lang=.
 * Lists: the "publications" list is built from content.js and hides itself when
 *        empty (so a placeholder section never shows an empty box).
 * Pages: the home renders the article index as cards; an article page carries
 *        `data-article="<slug>"` on <body> and renders that one article in full,
 *        plus `data-base="../"` so image paths stay relative to the site root.
 */
(function () {
  "use strict";

  var C = window.SITE_CONTENT;
  if (!C) return;

  var SUPPORTED = C.meta.languages;
  var DEFAULT = C.meta.defaultLang;

  // "" on the home, "../" on an article page: content.js stores asset paths as
  // "./assets/...", which only resolves from the site root.
  var BASE = document.body.getAttribute("data-base") || "";
  var ARTICLE_SLUG = document.body.getAttribute("data-article");

  function assetUrl(src) {
    return BASE ? BASE + String(src).replace(/^\.\//, "") : src;
  }

  function findArticle(dict, slug) {
    var items = (dict.articles && dict.articles.items) || [];
    for (var i = 0; i < items.length; i++) {
      if (items[i].slug === slug) return items[i];
    }
    return null;
  }

  function resolve(obj, path) {
    return path.split(".").reduce(function (acc, key) {
      return acc && acc[key] != null ? acc[key] : null;
    }, obj);
  }

  function pickLang() {
    var fromUrl = new URLSearchParams(window.location.search).get("lang");
    if (fromUrl && SUPPORTED.indexOf(fromUrl) !== -1) return fromUrl;
    var saved = localStorage.getItem("lang");
    if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;
    var browser = (navigator.language || "").slice(0, 2);
    if (SUPPORTED.indexOf(browser) !== -1) return browser;
    return DEFAULT;
  }

  function apply(lang) {
    var dict = C[lang];
    if (!dict) return;

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var val = resolve(dict, el.getAttribute("data-i18n"));
      if (val != null) el.textContent = val;
    });

    document.querySelectorAll("[data-i18n-meta]").forEach(function (el) {
      var val = resolve(dict, el.getAttribute("data-i18n-meta"));
      if (val != null) el.setAttribute("content", val);
    });
    if (dict.seo && dict.seo.title) document.title = dict.seo.title;

    document.querySelectorAll("[data-link]").forEach(function (el) {
      var href = C.links && C.links[el.getAttribute("data-link")];
      if (href) el.setAttribute("href", href);
    });

    document.querySelectorAll(".lang [data-lang]").forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
    });

    renderPublications(dict);
    renderArticleCards(dict);
    renderArticlePage(dict);
    localStorage.setItem("lang", lang);
  }

  // Build a photo gallery from content (src + localized caption).
  function renderGallery(wrap, photos) {
    if (!wrap) return;
    wrap.innerHTML = "";
    (photos || []).forEach(function (p) {
      var fig = document.createElement("figure");
      var img = document.createElement("img");
      img.src = assetUrl(p.src);
      img.alt = p.cap;
      img.loading = "lazy";
      var cap = document.createElement("figcaption");
      cap.textContent = p.cap;
      fig.appendChild(img);
      fig.appendChild(cap);
      wrap.appendChild(fig);
    });
  }

  // Home: one card per article (editorial summary + link to the full text).
  function renderArticleCards(dict) {
    var wrap = document.getElementById("articles-list");
    if (!wrap) return;
    wrap.innerHTML = "";
    var idx = dict.articles || {};
    (idx.items || []).forEach(function (it) {
      var card = document.createElement("article");
      card.className = "art-card";

      var kicker = document.createElement("p");
      kicker.className = "kicker";
      kicker.textContent = it.kicker;

      var title = document.createElement("h3");
      title.className = "art-card-title";
      title.textContent = it.cardTitle;

      var meta = document.createElement("p");
      meta.className = "art-card-meta";
      meta.textContent = it.meta;

      var summary = document.createElement("p");
      summary.className = "art-card-summary";
      summary.textContent = it.summary;

      var link = document.createElement("a");
      link.className = "art-card-link";
      link.href = BASE + it.slug + "/";
      link.textContent = idx.readMore;

      card.appendChild(kicker);
      card.appendChild(title);
      card.appendChild(meta);
      card.appendChild(summary);
      card.appendChild(link);
      wrap.appendChild(card);
    });
  }

  // Article page: Giuseppe's text in full, exactly as stored.
  function renderArticlePage(dict) {
    if (!ARTICLE_SLUG) return;
    var item = findArticle(dict, ARTICLE_SLUG);
    if (!item) return;
    var section = dict[item.source] || {};

    setText("article-kicker", item.kicker);
    setText("article-title", section.title);
    setText("article-subtitle", section.subtitle);

    var quote = document.getElementById("article-quote");
    if (quote) {
      quote.textContent = section.quote || "";
      quote.hidden = !section.quote;
    }

    renderArticle("article-body", section);
    renderGallery(document.getElementById("article-gallery"), section.photos);
    setText("article-note", section.photoNote || section.figureNote || "");

    // The article's own title wins over the site-wide one.
    document.title = item.cardTitle + " · Giuseppe Argentiero";
    document.querySelectorAll("[data-i18n-meta='seo.description']").forEach(function (el) {
      el.setAttribute("content", item.summary);
    });
  }

  function setText(id, value) {
    var el = document.getElementById(id);
    if (el) el.textContent = value || "";
  }

  // Build one of Giuseppe's verbatim texts from a blocks model:
  // { h }, { p }, { ul: [...] }, { table: { head: [...], rows: [[...]] } },
  // { figure } (a slot for a table or chart he has not sent yet).
  function renderArticle(targetId, section) {
    var wrap = document.getElementById(targetId);
    if (!wrap) return;
    wrap.innerHTML = "";
    var blocks = (section && section.article) || [];
    blocks.forEach(function (b) {
      if (b.h != null) {
        var h = document.createElement("h3");
        h.className = "case-h";
        h.textContent = b.h;
        wrap.appendChild(h);
      } else if (b.p != null) {
        var p = document.createElement("p");
        p.textContent = b.p;
        wrap.appendChild(p);
      } else if (b.ul) {
        var ul = document.createElement("ul");
        ul.className = "case-ul";
        b.ul.forEach(function (t) {
          var li = document.createElement("li");
          li.textContent = t;
          ul.appendChild(li);
        });
        wrap.appendChild(ul);
      } else if (b.figure != null) {
        var fg = document.createElement("div");
        fg.className = "case-figure";
        fg.textContent = b.figure;
        wrap.appendChild(fg);
      } else if (b.table) {
        var tbl = document.createElement("table");
        tbl.className = "case-table";
        var thead = document.createElement("thead");
        var htr = document.createElement("tr");
        (b.table.head || []).forEach(function (c) {
          var th = document.createElement("th");
          th.textContent = c;
          htr.appendChild(th);
        });
        thead.appendChild(htr);
        tbl.appendChild(thead);
        var tb = document.createElement("tbody");
        (b.table.rows || []).forEach(function (row) {
          var tr = document.createElement("tr");
          row.forEach(function (c) {
            var td = document.createElement("td");
            td.textContent = c;
            tr.appendChild(td);
          });
          tb.appendChild(tr);
        });
        tbl.appendChild(tb);
        wrap.appendChild(tbl);
      }
    });
  }

  // Build the publications timeline; hide the whole section until we have items.
  function renderPublications(dict) {
    var ul = document.getElementById("publications-list");
    var section = document.getElementById("publications");
    if (!ul) return;
    var items = (dict.publications && dict.publications.items) || [];
    if (!items.length) {
      if (section) section.hidden = true;
      return;
    }
    if (section) section.hidden = false;
    ul.innerHTML = "";
    items.forEach(function (it) {
      var li = document.createElement("li");
      var year = document.createElement("span");
      year.className = "edu-year";
      year.textContent = it.year;
      var label = document.createElement("span");
      label.className = "edu-label";
      label.textContent = it.label;
      li.appendChild(year);
      li.appendChild(label);
      ul.appendChild(li);
    });
  }

  function init() {
    var yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    // Contact email (locale-independent).
    var emailEl = document.getElementById("contact-email");
    if (emailEl && C.links && C.links.email) {
      emailEl.setAttribute("href", "mailto:" + C.links.email);
    }

    document.querySelectorAll(".lang [data-lang]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        apply(btn.getAttribute("data-lang"));
      });
    });

    apply(pickLang());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
