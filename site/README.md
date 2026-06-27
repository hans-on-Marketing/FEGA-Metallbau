# FEGA GmbH — Website

Produktive Umsetzung der Design-Vorlage aus dem Claude-Design-Bundle
(`../project/ui_kits/website-2026/`). Mehrseitige Marketing-Website der
**FEGA GmbH – Metallbau und Handelsgesellschaft** (B2B, Region Westerwald / Taunus).

## Stack

- **[Astro](https://astro.build)** — static-first, mehrseitig (ein echter Pfad pro Seite, SEO-tauglich)
- **React-Islands** für die interaktiven Teile (`client:load` / `client:visible`) — der Rest ist statisches HTML/CSS
- Keine Laufzeit-CSS-Bibliothek; Design-Tokens als CSS-Custom-Properties + scoped Component-Styles
- Schrift: **Barlow** / **Barlow Condensed** (Google Fonts)

## Befehle

```bash
npm install      # Abhängigkeiten
npm run dev      # Dev-Server  → http://localhost:4321
npm run build    # Produktions-Build nach ./dist
npm run preview  # gebauten Build lokal ansehen
```

## Designentscheidungen (mit dem Auftraggeber abgestimmt)

1. **Eine Design-Richtung.** Der Prototyp bot einen „Tweaks"-Umschalter
   (cinematic / editorial / signal × Hero hell/dunkel × Dichte). Die
   Produktivseite ist fest auf **cinematic / dunkel / luftig** festgelegt;
   der Umschalter und die übrigen Varianten entfallen.
2. **Beschriftete Platzhalter statt Fotos.** Wie im letzten Design-Stand
   sind echte Fotos bewusst durch beschriftete Streifen-Platzhalter ersetzt
   (`Placeholder`-Komponente). Zum Einbinden echter Bilder genügt es, die
   `Placeholder`-Aufrufe durch `<img>` zu ersetzen.

## Struktur

```
src/
  data/content.ts        Alle Inhalte/Texte (Unternehmen, Leistungen, Jobs, Recht …)
  lib/
    theme.ts             Farb-/Theme-Konstanten (C, ACCENTS, T) für die Islands
    intent.ts            Konfigurator → Wizard-Übergabe via sessionStorage
  styles/global.css      Tokens, Reset, gemeinsame Klassen (Buttons, Overline, …)
  layouts/BaseLayout.astro   <head>, Nav, Footer
  components/            Astro-Primitive (Container, Section, SectionHead, …)
    islands/             React-Islands (interaktiv)
  pages/                 Eine Datei pro Route
```

### Routen

| Pfad | Inhalt |
| --- | --- |
| `/` | Startseite |
| `/leistungen/{maschinenbau,metallbau,pumpentechnik,maschinenhandel,mietpark}` | Leistungs-Detailseiten (data-driven) |
| `/ueber-uns` | Über uns |
| `/unternehmensgruppe` | Unternehmensgruppe Feickert |
| `/referenzen` | Referenzen (Filter) |
| `/karriere` | Karriere (Stellenboard, Bewerbung, FAQ) |
| `/kontakt` | Anfrage-Wizard |
| `/impressum`, `/datenschutz`, `/agb` | Rechtsseiten |

### Interaktive Islands

- `Nav` — Sticky-Navigation mit Mega-Menü, Mobile-Menü, Scroll-Schatten
- `AnfrageWizard` — dreistufiger Anfrage-Konfigurator (`/kontakt`)
- `AdapterKonfigurator` / `MietparkKonfigurator` — füllen den Wizard vorausgefüllt
  über einen `sessionStorage`-Intent
- `JobBoard` — Stellen-Akkordeon mit Inline-Schnellbewerbung
  (öffnet eine Stelle automatisch beim Hash `#stellen-<jobid>`)
- `FAQ`, `ReferenzenFilter`, `Stat` (Zahl zählt beim Scrollen hoch)

## Hinweise

- Formular-Absenden ist als Prototyp simuliert (keine Backend-Anbindung).
- Inhalte stammen aus dem Design-Bundle (Quelle: fega-metallbau.de + PDFs);
  Benefits und Ansprechpartner auf der Karriere-Seite sind als Platzhalter
  markiert und vor Live-Gang mit HR abzustimmen.
