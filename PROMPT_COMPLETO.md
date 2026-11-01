# PROMPT MASTER — GIORGIA SOCIAL STUDIO

**Obiettivo:** crea e/o migliora un sito web premium e pronto per la produzione per **Giorgia Social Studio**, studio di consulenza in comunicazione digitale di **Giorgia Piatti**. Il sito deve essere sofisticato, visivamente riconoscibile, utile ai potenziali clienti e progettato per convertire visitatori in richieste di preventivo personalizzato. **Consegna un repository completo e pronto per GitHub Pages**, non solo mockup o screenshot.

## Materiali da allegare e studiare

1. `GSS  Post.pdf` — brand identity e palette cromatica.
2. `Biglietto da visita GSS.pdf` — denominazione, ruolo, contatti.
3. `Portfolio Professionale_Piatti Giorgia.pdf` — storia, servizi, campioni di lavori, risultati.
4. Profilo ufficiale: `https://www.instagram.com/giorgiasocialstudio/`.

Estrai i materiali visivi **reali** dai PDF e ottimizzali per il web. Se Instagram non è consultabile senza accesso autenticato, non inventare post, biografia, follower, testimonianze, risultati o informazioni recenti. Integra un link al profilo ufficiale e indica chiaramente quali dati derivano dai PDF e quali eventualmente dal profilo effettivamente verificato. Non usare foto stock generiche né fotografie che simulino Giorgia.

## Identità visiva e direzione creativa

Palette campionata dal PDF: verde oliva `#5F6750` come colore principale, tortora caldo `#B2A395`, marrone naturale `#776550`, bianco caldo `#F5F5F2`. Accenti grafici sobri, fondo prevalentemente chiaro, leggibilità elevata e contrasti adeguati.

Stile: **editoriale contemporaneo, premium minimal, art direction da magazine creativo**, con tipografia serif espressiva per headline e sans leggibile per testi e UI. Griglie asimmetriche, ritmo visivo, fotografie autentiche, spazio bianco, bordi sottili, micro-interazioni controllate, animazioni leggere rispettose della modalità `prefers-reduced-motion`. Niente effetto da template economico, gradienti viola generici, animazioni invadenti, elementi decorativi senza funzione o caroselli automatici.

Tone of voice: professionale, sicuro, umano, italiano, orientato alla qualità del lavoro e ai problemi reali del cliente. Evitare claim irrealistici (ad esempio “+300% vendite garantite”).

## Identità e dati verificati

- **Brand:** Giorgia Social Studio.
- **Professionista:** Giorgia Piatti — Digital Communication Consultant.
- **Email:** `giorgiasocialstudio@gmail.com`.
- **Telefono:** `+39 379 1154 750`.
- **Instagram:** `@giorgiasocialstudio` → `https://www.instagram.com/giorgiasocialstudio/`.
- Laurea in Fashion Marketing e Comunicazione presso IED Milano nel 2022.
- Attività nella comunicazione digitale dal 2020; attività freelance Giorgia Social Studio dall'ottobre 2024.
- Ambiti documentati: moda, beauty/hair, wellness, wedding, ristorazione, activewear e progetti artigianali.
- Da portfolio, esempio Reel con **224.160 visualizzazioni** (pagina 13): indica che è un caso passato, non un risultato promesso.

## Servizi da rappresentare

1. **Social Media Management:** gestione canali, strategia, PED, copy, contenuti, performance.
2. **Content Creation:** foto, storytelling, riprese, Reel, video editing e servizi wedding.
3. **Siti Web & Landing Page:** siti vetrina, landing page, manutenzione; e-commerce con professionista esterno specializzato.
4. **Shooting & Styling:** moodboard, concept, direzione creativa, set styling e shooting con professionista esterno.
5. **Marketing & Comunicazione Integrata:** newsletter, content marketing, eventi/promozioni, attività online e offline.
6. **Consulenza & Formazione:** accompagnamento di aziende e professionisti.

La qualità e i dettagli dei contenuti devono corrispondere ai PDF allegati, senza aggiungere certificazioni, premi, loghi clienti o recensioni non forniti.

## Architettura del sito (in italiano)

- Hero editoriale con fotografia originale di Giorgia, posizionamento chiaro e CTA principale **“Richiedi un preventivo”**.
- Sezione **Lo Studio / Chi sono**: biografia reale, formazione e approccio.
- **Servizi**: schede descrittive, ciascuna con CTA diretta al modulo e servizio preselezionato.
- **Portfolio**: gallery responsive basata su immagini originali del PDF, filtri per settore e visualizzazione di dettaglio. Fotografico, non generico.
- **Risultati**: casi reali tratti dal portfolio, senza promesse e senza metriche inventate.
- **Metodo**: ascolto e analisi → strategia → creazione → ottimizzazione.
- **Preventivo personalizzato**: questionario multi-step.
- **FAQ**: domande su servizi, processi, preventivi, assistenza.
- **Contatti/assistenza**: indirizzo email cliccabile, pulsante telefono, link Instagram, CTA preventivo.
- Footer con link alla privacy e dettagli essenziali.

## Requisiti del questionario preventivi

Creare un modulo chiaro e agevole, adatto da smartphone, accessibile via tastiera e lettori di schermo, con progressione in **quattro passaggi**: 

1. **Attività:** ragione/nome commerciale, settore, dimensione, sito, social attuali.
2. **Servizi e obiettivi:** selezione multipla dei sei servizi reali e campo obiettivi.
3. **Esigenze:** canali social di interesse, volume di contenuti, tempistiche, budget *orientativo indicato dall'utente* e note.
4. **Contatto:** referente, email, telefono facoltativo, checkbox presa visione dell'informativa, riepilogo finale e invio.

Validare i campi obbligatori e obbligare alla scelta di almeno un servizio; non consentire invii che omettono step; non memorizzare i dati nei browser in modo persistente. Le fasce di budget **non sono tariffe del brand**: servono soltanto a comprenderne le esigenze. Non generare un “prezzo finale” senza listino ufficiale. L'output dev'essere **una richiesta dettagliata**, da trasformare in proposta da parte di Giorgia.

Se la destinazione è **GitHub Pages**, evidenziare che GitHub Pages non esegue codice server-side: per un invio email reale servirà un provider esterno validato dalla titolare (come FormSubmit con verifica iniziale dell'email, oppure soluzione alternativa approvata). Non simulare la riuscita dell'invio. Permettere comunque sempre il contatto diretto email/telefono. Inserire una checklist di verifica del modulo e delle ricevute.

## Requisiti di qualità

- Responsive perfetto su mobile 360 px, tablet e desktop.
- HTML semantico, form con label e indicazione campi obbligatori, menu mobile accessibile, modal con tastiera, visibile stato di focus, contrasto WCAG AA dove possibile.
- Prestazioni: immagini WebP ottimizzate, lazy load sotto la piega, dimensioni immagini dichiarate, nessuna dipendenza superflua o font remoti obbligatori.
- SEO: title e meta description reali, Open Graph base, JSON-LD coerente, intestazioni logiche, alt descrittivi.
- Privacy: nessun pixel/cookie di tracking preinstallato; pagina informativa chiaramente marcata come **bozza** finché mancano dati del titolare, conservazione e valutazione del form provider. Non dichiarare conformità GDPR senza verifica.
- Sicurezza: nessuna API key privata nel repository, sanificazione del contenuto dinamico, link esterni `rel="noopener noreferrer"`.
- Nessuna dipendenza runtime da Instagram per mostrare il portfolio: le immagini sono ospitate localmente.

## Requisiti di consegna

Fornisci una cartella completa, comprimibile in ZIP, così strutturata:

```text
/index.html
/privacy.html
/404.html
/robots.txt
/.nojekyll
/assets/style.css
/assets/script.js
/assets/favicon.svg
/assets/*.webp
/README.md
/PROMPT_COMPLETO.md
```

Ogni file deve contenere codice reale e funzionante. Usa link e percorsi **relativi** (`./assets/...`) per supportare GitHub Pages anche quando l'URL del sito contiene il nome del repository. Inserisci nel README le istruzioni di pubblicazione (GitHub → Settings → Pages → main / root), le necessarie verifiche privacy, l'attivazione del provider di form e le parti da personalizzare. Testa visualizzazione desktop/mobile, interazioni, filtri portfolio, modale, controlli form, link, disponibilità delle immagini e assenza di errori JS. Non limitarti a descrivere il sito: **genera i file del progetto**.
