/*
 * Tiny i18n renderer. No framework, no build.
 *
 * i18n: fills [data-i18n] text, [data-i18n-meta] content, [data-link] hrefs from
 *       the active locale (dotted key paths). Language persists in localStorage
 *       and honors ?lang=.
 * Lists: the "publications" list is built from content.js and hides itself when
 *        empty (so a placeholder section never shows an empty box).
 */
(function () {
  "use strict";

  var C = window.SITE_CONTENT;
  if (!C) return;

  var SUPPORTED = C.meta.languages;
  var DEFAULT = C.meta.defaultLang;

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
    localStorage.setItem("lang", lang);
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
