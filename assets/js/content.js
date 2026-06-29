/*
 * SINGLE SOURCE OF CONTENT, both locales. Italian (it) is primary; English (en)
 * mirrors it. Editing this file is how the site grows — small, reviewable diffs.
 * Keep the two locales structurally identical (same keys).
 *
 * Placeholder phase: we have little personal material yet (no CV, no photo).
 * As Giuseppe sends material via the Telegram bot, fill bio, credentials,
 * publications and add a portrait. See ../../memory/architecture.md.
 */
window.SITE_CONTENT = {
  meta: { defaultLang: "it", languages: ["it", "en"], domain: "giuseppeargentiero.github.io" },

  // Locale-independent.
  links: { blog: "https://www.forzamassimarelativa.it/", email: "info@forzamassimarelativa.it" },

  it: {
    seo: {
      title: "Giuseppe Argentiero — Forza Massima Relativa",
      description:
        "Giuseppe Argentiero: studio e misura della forza massima. Autore del metodo della «Forza Massima Relativa» per la stima dell'1RM dal tempo e dallo spazio del movimento.",
    },
    nav: { langLabel: "Lingua" },
    hero: {
      eyebrow: "Scienza della forza · Ricerca",
      name: "Giuseppe Argentiero",
      tagline: "Lo studio e la misura della forza massima.",
      intro:
        "Studio la forza e come misurarla. Dalla ricerca nasce la «Forza Massima Relativa»: un metodo per stimare l'1RM da una sola ripetizione, leggendo il tempo e lo spazio del movimento.",
      ctaBlog: "Il blog",
      ctaContact: "Contatti",
    },
    about: {
      kicker: "Chi sono",
      title: "Misurare la forza, non solo allenarla",
      p1: "Sono Giuseppe Argentiero. Mi occupo dello studio della forza massima e della sua misurazione: come determinarla, come leggerla nei parametri del movimento, come renderla un dato e non solo una stima.",
      p2: "Sul blog «Forza Massima Relativa» raccolgo e documento questo lavoro, mettendolo in relazione con la letteratura scientifica della forza (Henneman, Bosco, Hill, Zatsiorsky).",
    },
    method: {
      kicker: "Il metodo",
      title: "La Forza Massima Relativa",
      p1: "La forza massima (1RM) si può stimare in modo affidabile da una singola ripetizione a carichi ≥ 80% del massimale, misurando il tempo della fase concentrica e lo spazio — la distanza verticale — percorso dal carico.",
      p2: "Tempo e spazio sono parametri relativi, legati alla FMCP, la Forza Massima Concentrica Potenziale: «il tempo e lo spazio hanno valori equivalenti, si influenzano a vicenda», indipendentemente dall'esercizio.",
      cta: "Approfondisci sul blog",
    },
    publications: {
      kicker: "Pubblicazioni",
      title: "Ricerca & pubblicazioni",
      intro: "Una selezione. L'elenco completo è in aggiornamento.",
      empty: "Elenco in arrivo.",
      items: [
        { year: "2023–24", label: "Ricerca sulla forza massima pubblicata sulla rivista «Strength & Conditioning»" },
      ],
    },
    blog: {
      kicker: "Blog",
      title: "Forza Massima Relativa",
      text: "Articoli e approfondimenti sul metodo e sulla teoria della forza massima.",
      cta: "Vai al blog",
    },
    contact: {
      kicker: "Contatti",
      title: "Collaborazioni e progetti",
      text: "Per collaborazioni professionali, ricerca, formazione e progetti.",
      emailLabel: "Contattami",
    },
    footer: { note: "Sito in aggiornamento." },
  },

  en: {
    seo: {
      title: "Giuseppe Argentiero — Relative Maximum Strength",
      description:
        "Giuseppe Argentiero: the study and measurement of maximum strength. Author of the «Forza Massima Relativa» method for estimating 1RM from the time and space of the movement.",
    },
    nav: { langLabel: "Language" },
    hero: {
      eyebrow: "Strength science · Research",
      name: "Giuseppe Argentiero",
      tagline: "The study and measurement of maximum strength.",
      intro:
        "I study strength and how to measure it. From that research comes «Forza Massima Relativa»: a method to estimate 1RM from a single repetition, reading the time and the space of the movement.",
      ctaBlog: "The blog",
      ctaContact: "Contact",
    },
    about: {
      kicker: "About",
      title: "Measuring strength, not just training it",
      p1: "I'm Giuseppe Argentiero. I work on the study and measurement of maximum strength: how to determine it, how to read it in the parameters of movement, how to make it a measurement rather than just an estimate.",
      p2: "On the «Forza Massima Relativa» blog I gather and document this work, relating it to the scientific literature on strength (Henneman, Bosco, Hill, Zatsiorsky).",
    },
    method: {
      kicker: "The method",
      title: "Relative Maximum Strength",
      p1: "Maximum strength (1RM) can be reliably estimated from a single repetition at loads ≥ 80% of the max, by measuring the time of the concentric phase and the space — the vertical distance — the load travels.",
      p2: "Time and space are relative parameters tied to FMCP, the potential maximum concentric force: «time and space have equivalent values, they influence each other», independent of the specific exercise.",
      cta: "Read more on the blog",
    },
    publications: {
      kicker: "Publications",
      title: "Research & publications",
      intro: "A selection. The full list is being updated.",
      empty: "List coming soon.",
      items: [
        { year: "2023–24", label: "Research on maximum strength published in the journal «Strength & Conditioning»" },
      ],
    },
    blog: {
      kicker: "Blog",
      title: "Forza Massima Relativa",
      text: "Articles and deep-dives on the method and the theory of maximum strength.",
      cta: "Go to the blog",
    },
    contact: {
      kicker: "Contact",
      title: "Collaborations & projects",
      text: "For professional collaborations, research, education and projects.",
      emailLabel: "Get in touch",
    },
    footer: { note: "Site being updated." },
  },
};
