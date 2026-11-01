# Giorgia Social Studio — Sito Web

Sito statico, responsive e accessibile per **Giorgia Social Studio**, tratto dai materiali forniti (palette colori, biglietto da visita, portfolio professionale). Il progetto è pronto da caricare su un repository GitHub e da pubblicare con **GitHub Pages**. Non servono Node.js, framework, database o compilazione.

## Anteprima locale

Apri `index.html` nel browser. Per una verifica completa (navigazione, form, percorsi relativi) è meglio usare un server locale, per esempio:

```bash
python -m http.server 8080
```

Poi apri `http://localhost:8080`.

## Pubblicazione con GitHub Pages

1. Crea un repository pubblico su GitHub, per esempio `giorgia-social-studio`.
2. Carica **tutti** i file contenuti in questa cartella **nella radice del repository**, lasciando la sottocartella `assets` così com'è. Assicurati che ci sia `index.html` nella radice.
3. Esegui il commit sul ramo `main`.
4. Vai su **Settings → Pages → Build and deployment**.
5. Scegli **Deploy from a branch** e come ramo `main`, cartella **/(root)**, poi salva.
6. GitHub mostrerà l'URL pubblico del sito sotto Pages (di norma `https://NOMEUTENTE.github.io/NOMEREPOSITORY/`). Verifica anche `privacy.html`, immagini e questionario.

Tutti i percorsi sono relativi e funzionano anche nei repository GitHub Pages pubblicati in una sottocartella. Per un dominio personalizzato configurare il DNS e la sezione **Custom domain** in GitHub Pages; aggiornare in seguito i meta social e un eventuale sitemap con l'URL effettivo.

## IMPORTANTISSIMO — attivazione del modulo di preventivo

**Una pagina statica GitHub Pages NON possiede un server per inviare email.** Il questionario del sito è già predisposto per usare FormSubmit, un servizio esterno:

- Destinatario configurato: **giorgiasocialstudio@gmail.com**.
- `index.html` contiene `action="https://formsubmit.co/giorgiasocialstudio@gmail.com"`.
- **La prima richiesta di prova attiva una verifica dell'indirizzo email**: la titolare deve confermare l'email ricevuta dal servizio. Finché la verifica non viene eseguita, l'inoltro dei messaggi non è operativo.
- Dopo la verifica, invia **una seconda richiesta di prova** e controlla la reale consegna, inclusa la cartella spam.
- I dati vengono inviati dal browser direttamente al servizio esterno; non esiste un database del sito e non è presente un archivio locale.
- Il modulo mostra una pagina di conferma gestita da FormSubmit dopo l'invio. Verifica anche l'esperienza da smartphone.
- **Prima di raccogliere dati reali**, esaminare la compatibilità del fornitore con i requisiti privacy applicabili, la posizione dei dati, eventuali trasferimenti internazionali e l'informativa. Se non adatto, sostituire l'endpoint con un servizio approvato o con un backend dedicato.

I contatti diretti `mailto:` e `tel:` sono disponibili **senza bisogno di FormSubmit**. Non è presente un sistema di ticketing/CRM: per una gestione strutturata dell'assistenza sarebbe necessario configurare un servizio dedicato.

### Cambiare l'email destinataria

Cerca `giorgiasocialstudio@gmail.com` in `index.html` e in `privacy.html` e sostituiscilo con l'indirizzo confermato. Ricorda di cambiare anche l'endpoint `formsubmit.co/EMAIL`. Dopo il cambio occorre una nuova verifica della casella destinataria.

## Checklist obbligatoria prima di rendere il sito pubblico

- [ ] Ottenere l'approvazione di Giorgia su testi, immagini del portfolio, denominazione e servizi offerti.
- [ ] Verificare che tutti i contenuti di clienti, modelli e brand presenti nel portfolio siano utilizzabili pubblicamente sul sito, con eventuali consensi/licenze necessari.
- [ ] Completare **privacy.html**: attualmente è una **bozza non utilizzabile come informativa definitiva**, con dati mancanti evidenziati.
- [ ] Valutare GDPR, condizioni contrattuali e titolarità dei trattamenti del fornitore del form. In alternativa, usare un fornitore scelto dalla titolare.
- [ ] Testare attivazione, inoltro e ricezione di **almeno due** email tramite il questionario.
- [ ] Confermare il numero `+39 379 1154 750` e l'email indicata sul biglietto da visita.
- [ ] Controllare grafica, collegamenti, accessibilità e leggibilità su smartphone, tablet e desktop.
- [ ] Aggiornare i meta `og:image` e canonical **solo dopo aver definito l'URL definitivo**.
- [ ] Se vengono aggiunti analytics, marketing pixel, chat o embed, rivalutare privacy/cookie banner e consensi.

## Contenuti e fonti

| Fonte fornita | Utilizzo |
|---|---|
| `GSS  Post.pdf` | Palette brand identity campionata dal file: `#5F6750`, `#B2A395`, `#776550`, `#F5F5F2` |
| `Biglietto da visita GSS.pdf` | Nome, ruolo, email, telefono e Instagram |
| `Portfolio Professionale_Piatti Giorgia.pdf` | Biografia, formazione, servizi, settori, esempi visivi e uno screenshot di insight di Reel |
| `https://www.instagram.com/giorgiasocialstudio/` | Link al profilo ufficiale. Il feed Instagram non era accessibile automaticamente: **non sono stati inventati o copiati nuovi post, follower o statistiche**. |

Le immagini `assets/*.webp` sono state estratte e ottimizzate dai PDF originali. Non sono stati utilizzati stock, fotografie di sconosciuti o feed Instagram di terzi.

### Asset principali e pagine del portfolio originale

- `giorgia-ritratto.webp`: pag. 2; `giorgia-al-lavoro.webp`: pag. 3; `content-lago.webp`: pag. 4.
- Moda: pag. 16; Activewear: pag. 19; Wellness: pag. 21; Food: pag. 23.
- Wedding: pagg. 25 e 28; Beauty: pag. 26; Sartoria: pag. 20.
- Screenshot Reel `224.160` visualizzazioni: pag. 13 (esempio storico, non garanzia).

## Struttura del progetto

```text
Giorgia-Social-Studio-GitHub/
├── index.html              Pagina principale / sito completo
├── privacy.html            Modello di informativa da completare
├── 404.html                Pagina non trovata
├── robots.txt
├── .nojekyll                Pubblicazione GitHub Pages senza Jekyll
├── README.md               Questa guida
├── PROMPT_COMPLETO.md      Prompt riutilizzabile per ulteriori sviluppi
└── assets/
    ├── style.css           Design responsive
    ├── script.js           Menu, filtri, popup, questionario
    ├── favicon.svg
    └── *.webp              Fotografie e screenshot dal portfolio
```

## Modifiche rapide

- **Palette:** in alto nel file `assets/style.css`, nella sezione `:root`.
- **Testi:** `index.html`; portfolio nei pulsanti con attributi `data-title`, `data-description` e relativi `img`.
- **Servizi:** cerca `services-grid`; aggiorna anche le scelte checkbox del questionario.
- **Form:** i 4 passaggi sono in `index.html`; la validazione e la composizione del riepilogo sono in `assets/script.js`.
- **Foto:** sostituisci i WebP conservando gli stessi nomi oppure aggiorna i relativi percorsi HTML.
- **Nessun listino:** le fasce economiche richieste nel modulo riguardano **il budget che il potenziale cliente intende allocare**, non i prezzi applicati dallo studio.

## Cosa funziona già

- Navigazione e menu mobile, filtri portfolio, apertura di dettagli dei progetti, responsive desktop/tablet/mobile.
- Link telefono, email e Instagram.
- Questionario preventivo multi-step (azienda, servizi, canali, budget, contatto), campi obbligatori, riepilogo, invio POST esterno dopo attivazione del servizio.
- Marcatura semantica, focus keyboard, preferenze reduced-motion, link skip, SEO di base, nessun font remoto, immagini WebP compresse.

## Cosa non è incluso

- Account utente, chat live, CRM, area riservata, pannello di gestione richieste o listino automatico.
- Calcolo di un prezzo commerciale: non esistono tariffe o costi ufficiali nei file forniti.
- Sincronizzazione con il feed Instagram in tempo reale: richiederebbe autorizzazione/API di Meta e relativa configurazione.
- Verifica legale/GDPR e approvazione dei diritti sulle immagini: competono alla titolare prima della pubblicazione.

© Giorgia Social Studio. Sito realizzato per uso del brand su materiali forniti dal committente.
