/*
 * SINGLE SOURCE OF CONTENT, both locales. Italian (it) is primary; English (en)
 * mirrors it. Editing this file is how the site grows, in small reviewable diffs.
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
      title: "Giuseppe Argentiero · Forza Massima Relativa",
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
      p1: "La forza massima (1RM) si può stimare in modo affidabile da una singola ripetizione a carichi ≥ 80% del massimale, misurando il tempo della fase concentrica e lo spazio, cioè la distanza verticale percorsa dal carico.",
      p2: "Tempo e spazio sono parametri relativi, legati alla FMCP, la Forza Massima Concentrica Potenziale: «il tempo e lo spazio hanno valori equivalenti, si influenzano a vicenda», indipendentemente dall'esercizio.",
      cta: "Approfondisci sul blog",
    },
    case: {
      kicker: "Caso pratico",
      title: "FMCP in gara: il riscaldamento come strumento decisionale",
      p1: "Coppa Italia FIPE di Bench Press e Para Powerlifting, Mesagne (BR), 24 maggio 2026. Su un atleta Sub-Junior (categoria fino a 66 kg, dati anonimizzati) il modello FMCP è stato applicato in tempo reale, durante la gara, non in una rielaborazione successiva. Obiettivo della giornata: massimizzare il piazzamento con una gestione razionale del rischio.",
      p2: "Nelle gare FIPE il vincolo è il tempo: tra una prova e l'altra non c'è margine per analisi approfondite, quindi le decisioni vanno preparate prima di salire in pedana. Per questo il riscaldamento è stato usato come una finestra diagnostica della condizione neuromuscolare dell'atleta in quella specifica giornata.",
      h1: "Una sola alzata per costruire la gara",
      p3: "Dalla lettura di una singola alzata di riscaldamento a 80 kg è stata stimata la FMCP (circa 96 kg, con una tolleranza di ±2 kg) e, da lì, prevista la progressione delle prime due prove. La strategia era quindi già definita prima dell'ingresso in pedana. La prova a 85 kg, invece, era volutamente tecnica e conservativa: il suo dato non riflette la reale capacità massimale.",
      h2: "Previsioni validate al millisecondo",
      p4: "Le previsioni di tempo calcolate durante il riscaldamento sono state confrontate con i tempi reali di gara:",
      items: [
        { year: "87,5 kg", label: "1ª prova ufficiale: previsto 1,317 s, reale 1,302 s (scarto di 15 ms)" },
        { year: "92,5 kg", label: "2ª prova ufficiale: previsto 2,173 s, reale 2,040 s (prestazione anche migliore del previsto)" },
        { year: "97,5 kg", label: "3ª prova: tempo teorico oltre il limite funzionale, prova non valida" },
      ],
      h3: "Il limite funzionale",
      p5: "Il tempo previsto non serve a indovinare il risultato, ma a stimare lo sforzo richiesto: alzate che richiedono tra 2,0 e 2,5 secondi sono generalmente sostenibili per un atleta allenato, oltre quella soglia la probabilità di riuscita cala. Consolidato il 2° posto, la terza prova a 97,5 kg è stata lasciata alla scelta dell'atleta: il modello stimava un tempo teorico molto elevato, segno di un carico oltre il limite della giornata. La prova è stata infatti fallita.",
      tagline: "«La forza massima non è una sensazione. È una questione di tempo.»",
      photos: [
        { src: "./assets/img/fipe-75.jpg", cap: "Riscaldamento, 75 kg" },
        { src: "./assets/img/fipe-80.jpg", cap: "Riscaldamento, 80 kg" },
        { src: "./assets/img/fipe-85.jpg", cap: "Riscaldamento, 85 kg (prova tecnica)" },
        { src: "./assets/img/fipe-875.jpg", cap: "Prima prova ufficiale, 87,5 kg" },
        { src: "./assets/img/fipe-925.jpg", cap: "Seconda prova ufficiale, 92,5 kg" },
        { src: "./assets/img/fipe-podio.jpg", cap: "Podio, 2° posto" },
      ],
      photoNote: "Foto dalla gara. I volti dei minori e delle persone in primo piano sono oscurati per tutela della privacy.",
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
      title: "Giuseppe Argentiero · Relative Maximum Strength",
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
      p1: "Maximum strength (1RM) can be reliably estimated from a single repetition at loads ≥ 80% of the max, by measuring the time of the concentric phase and the space, that is the vertical distance the load travels.",
      p2: "Time and space are relative parameters tied to FMCP, the potential maximum concentric force: «time and space have equivalent values, they influence each other», independent of the specific exercise.",
      cta: "Read more on the blog",
    },
    case: {
      kicker: "Case study",
      title: "FMCP in competition: the warm-up as a decision tool",
      p1: "FIPE Bench Press and Para Powerlifting Coppa Italia, Mesagne (Italy), 24 May 2026. On a Sub-Junior athlete (up to 66 kg, anonymized) the FMCP model was applied in real time, during the competition, not as a later reprocessing. Goal of the day: maximize the placement through rational risk management.",
      p2: "In FIPE competitions the constraint is time: between attempts there is no room for deep analysis, so decisions must be prepared before stepping onto the platform. For this reason the warm-up was used as a diagnostic window into the athlete's neuromuscular condition on that specific day.",
      h1: "A single lift to plan the whole competition",
      p3: "From a single warm-up lift at 80 kg the FMCP was estimated (about 96 kg, with a ±2 kg tolerance) and, from there, the progression of the first two attempts was predicted. The strategy was therefore set before stepping onto the platform. The 85 kg lift, by contrast, was deliberately technical and conservative: its value does not reflect the real maximal capacity.",
      h2: "Predictions validated to the millisecond",
      p4: "The time predictions computed during the warm-up were compared with the real competition times:",
      items: [
        { year: "87.5 kg", label: "1st official attempt: predicted 1.317 s, actual 1.302 s (15 ms gap)" },
        { year: "92.5 kg", label: "2nd official attempt: predicted 2.173 s, actual 2.040 s (even better than predicted)" },
        { year: "97.5 kg", label: "3rd attempt: theoretical time beyond the functional limit, no lift" },
      ],
      h3: "The functional limit",
      p5: "The predicted time is not there to guess the result, but to estimate the required effort: lifts needing between 2.0 and 2.5 seconds are generally sustainable for a trained athlete, beyond that the odds of success drop. With 2nd place secured, the third attempt at 97.5 kg was left to the athlete's choice: the model estimated a very high theoretical time, a sign of a load beyond the day's limit. The attempt was indeed missed.",
      tagline: "\"Maximum strength isn't a sensation. It's a matter of time.\"",
      photos: [
        { src: "./assets/img/fipe-75.jpg", cap: "Warm-up, 75 kg" },
        { src: "./assets/img/fipe-80.jpg", cap: "Warm-up, 80 kg" },
        { src: "./assets/img/fipe-85.jpg", cap: "Warm-up, 85 kg (technical lift)" },
        { src: "./assets/img/fipe-875.jpg", cap: "First official attempt, 87.5 kg" },
        { src: "./assets/img/fipe-925.jpg", cap: "Second official attempt, 92.5 kg" },
        { src: "./assets/img/fipe-podio.jpg", cap: "Podium, 2nd place" },
      ],
      photoNote: "Photos from the competition. The faces of minors and of people in the foreground are obscured to protect privacy.",
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
