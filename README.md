# Giuseppe Argentiero, Official Website

Static personal website for **Giuseppe Argentiero**, sport scientist and
author of the **"Forza Massima Relativa"** method.

- **Type**: static site, no build step, plain HTML/CSS/JS. A home page plus one
  page per article.
- **Languages**: bilingual **Italian (primary)** + English. Content lives in a
  single source file (`assets/js/content.js`) and drives both locales.
- **Articles**: the home lists them as cards (editorial summary + link); the full
  text of each one lives at `/<slug>/`, driven by `data-article="<slug>"` on the
  page's `<body>`. To add one: add an entry to `articles.items` in both locales,
  then copy an existing article folder and change that attribute.
- **Cache**: assets are linked with a `?v=YYYYMMDD` query. Bump it in every page
  whenever `content.js`, `main.js` or `styles.css` change, otherwise returning
  visitors can run a stale script for up to ten minutes (the GitHub Pages
  `max-age`).
- **Hosting**: GitHub Pages (free). Served at `https://argentierogiuseppe.github.io/`.
- **How it evolves**: content is updated from feedback Giuseppe sends to a
  Telegram bot. Updates are reviewed and pushed here as ordinary commits.
- **Status**: placeholder / pre-launch, currently `noindex`. Remove the
  `noindex` meta in `index.html` at launch.

This is the **public** repository. It is intentionally separate from the private
orchestration repository that hosts the project's memory, plans, and the Telegram
bot.
