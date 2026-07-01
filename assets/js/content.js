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
  links: {
    blog: "https://www.forzamassimarelativa.it/",
    email: "info@forzamassimarelativa.it",
    bodygon: "https://bodygon.com",
  },

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
        "Studio la forza e come misurarla. Ideatore del metodo FMCP e della «Forza Massima Relativa»: stimo l'1RM da una sola ripetizione, leggendo il tempo e lo spazio del movimento.",
      ctaBlog: "Il blog",
      ctaContact: "Contatti",
    },
    about: {
      kicker: "Chi sono",
      title: "Misurare la forza, non solo allenarla",
      p1: "Sono Giuseppe Argentiero, ideatore del metodo FMCP e inventore del PerfecTraining, dispositivo poi evoluto in Bodygon. Da anni mi occupo di forza, preparazione atletica e valutazione della prestazione sportiva, con l'obiettivo di rendere l'allenamento più misurabile, pratico e comprensibile.",
      p2: "Per me la forza non è soltanto una sensazione, ma una grandezza che si può osservare e misurare attraverso tempo, spazio e carico. Sul blog «Forza Massima Relativa» raccolgo e documento questo lavoro, in dialogo con la letteratura scientifica della forza.",
      bodygonLink: "Inventore del PerfecTraining, oggi evoluto in",
    },
    method: {
      kicker: "Il metodo",
      title: "La Forza Massima Relativa",
      p1: "La forza massima (1RM) si può stimare in modo affidabile da una singola ripetizione a carichi ≥ 80% del massimale, misurando il tempo della fase concentrica e lo spazio — la distanza verticale — percorso dal carico.",
      p2: "Tempo e spazio sono parametri relativi, legati alla FMCP, la Forza Massima Concentrica Potenziale: «il tempo e lo spazio hanno valori equivalenti, si influenzano a vicenda», indipendentemente dall'esercizio.",
      cta: "Approfondisci sul blog",
    },
    case: {
      kicker: "Caso pratico",
      title: "FMCP in gara: il warm-up come strumento decisionale",
      p1: "Coppa Italia FIPE di Bench Press, Mesagne (BR), 24 maggio 2026. Su un atleta Sub-Junior il modello FMCP è stato applicato in tempo reale: da una sola alzata di riscaldamento (80 kg) è stata costruita in anticipo la strategia di gara.",
      p2: "Le previsioni di tempo si sono rivelate accuratissime — un errore di appena 15 millisecondi sulla prima prova ufficiale — permettendo di scegliere i carichi, stimare lo sforzo richiesto e gestire il rischio competitivo. Risultato: 2° posto.",
      items: [
        { year: "87,5 kg", label: "1ª prova — previsto 1,317 s, reale 1,302 s (errore 15 ms)" },
        { year: "92,5 kg", label: "2ª prova — previsto 2,173 s, reale 2,040 s" },
        { year: "97,5 kg", label: "3ª prova — oltre il limite funzionale stimato, non valida" },
      ],
      tagline: "«La forza massima non è una sensazione. È una questione di tempo.»",
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
        "I study strength and how to measure it. Creator of the FMCP method and of «Forza Massima Relativa»: I estimate 1RM from a single repetition by reading the time and the space of the movement.",
      ctaBlog: "The blog",
      ctaContact: "Contact",
    },
    about: {
      kicker: "About",
      title: "Measuring strength, not just training it",
      p1: "I'm Giuseppe Argentiero, creator of the FMCP method and inventor of PerfecTraining, the device that later evolved into Bodygon. For years I've worked on strength, athletic preparation and sports-performance assessment, with one goal: to make training more measurable, practical and understandable.",
      p2: "For me strength isn't just a sensation, but a quantity that can be observed and measured through time, space and load. On the «Forza Massima Relativa» blog I gather and document this work, in dialogue with the scientific literature on strength.",
      bodygonLink: "Inventor of PerfecTraining, now evolved into",
    },
    method: {
      kicker: "The method",
      title: "Relative Maximum Strength",
      p1: "Maximum strength (1RM) can be reliably estimated from a single repetition at loads ≥ 80% of the max, by measuring the time of the concentric phase and the space — the vertical distance — the load travels.",
      p2: "Time and space are relative parameters tied to FMCP, the potential maximum concentric force: «time and space have equivalent values, they influence each other», independent of the specific exercise.",
      cta: "Read more on the blog",
    },
    case: {
      kicker: "Case study",
      title: "FMCP in competition: the warm-up as a decision tool",
      p1: "FIPE Bench Press Coppa Italia, Mesagne (Italy), 24 May 2026. On a Sub-Junior athlete the FMCP model was applied in real time: from a single warm-up lift (80 kg) the competition strategy was built in advance.",
      p2: "The time predictions proved remarkably accurate — just a 15-millisecond error on the first official attempt — making it possible to choose the loads, estimate the required effort and manage competitive risk. Result: 2nd place.",
      items: [
        { year: "87.5 kg", label: "1st attempt — predicted 1.317 s, actual 1.302 s (15 ms error)" },
        { year: "92.5 kg", label: "2nd attempt — predicted 2.173 s, actual 2.040 s" },
        { year: "97.5 kg", label: "3rd attempt — beyond the estimated functional limit, no lift" },
      ],
      tagline: "\"Maximum strength isn't a sensation. It's a matter of time.\"",
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
