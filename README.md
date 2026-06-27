# FEGA GmbH — Website

Website der **FEGA GmbH – Metallbau und Handelsgesellschaft** (B2B Metallbau,
Maschinenbau, Pumpentechnik, Maschinenhandel und Gerätevermietung; Region
Westerwald / Taunus).

Der eigentliche Quellcode liegt im Ordner [`site/`](./site).

## Tech-Stack

- **[Astro](https://astro.build)** — static-first, mehrseitig (eine Route pro Seite, SEO-tauglich)
- **React-Islands** für die interaktiven Teile (Anfrage-Wizard, Adapter-/Mietpark-Konfigurator, Stellen-Board, FAQ, Mega-Menü, Referenzen-Filter)
- Astro-Bildoptimierung (WebP, responsives `srcset`)
- Schrift: Barlow / Barlow Condensed

## Lokale Entwicklung

```bash
cd site
npm install
npm run dev      # http://localhost:4321/FEGA-Metallbau/
npm run build    # statischer Build nach site/dist/
npm run preview  # gebauten Build lokal ansehen
```

## Deployment (GitHub Pages)

Bei jedem Push auf `main` baut der Workflow
[`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) die Seite und
veröffentlicht sie automatisch über GitHub Pages.

**Einmalig aktivieren:** Repo → *Settings → Pages → Source = „GitHub Actions"*.

Live-URL: `https://hans-on-marketing.github.io/FEGA-Metallbau/`

Für den späteren Betrieb unter einer eigenen Domain (z. B. `fega-metallbau.de`)
in `site/astro.config.mjs` `site` auf die Domain und `base` auf `'/'` setzen.

## Offene Punkte

Offene Fragen, Annahmen und nächste Schritte (z. B. fehlende Firmendaten,
GEO-Maßnahmen) stehen in [`OFFENE-PUNKTE.md`](./OFFENE-PUNKTE.md).
