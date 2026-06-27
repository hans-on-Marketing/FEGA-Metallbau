# OFFENE PUNKTE — FEGA Website

Stand: 27. Juni 2026 · betrifft das Projekt in `site/`

Diese Datei sammelt fehlende Daten, getroffene Annahmen, inhaltliche
Unstimmigkeiten und die GEO-Maßnahmen außerhalb der Website. Nichts davon
blockiert den Betrieb der Seite — es sind Punkte zur Klärung/Pflege.

---

## 1. Fehlende Daten (v. a. für vollständige strukturierte Daten / Schema.org)

Wo Daten fehlten oder unsicher waren, wurde der Teil **weggelassen statt geraten**
(siehe Org-Schema in `src/layouts/BaseLayout.astro`).

- **Verifizierte Geschäftsanschrift der FEGA GmbH selbst.** Das Impressum nennt die
  *FVB Feickert Verwaltungs- und Beteiligungs GmbH* (Hermann-Stoll-Str. 1, 35781
  Weilburg/Lahn) als **Betreiberin** der Website — nicht zwingend die Betriebsstätte
  der FEGA. Ohne gesicherte FEGA-Anschrift wurde **kein** `PostalAddress`/
  `LocalBusiness`-Schema gesetzt.
- **Öffnungs-/Geschäftszeiten** → kein `openingHours` im Schema.
- **Geo-Koordinaten** (lat/long) für einen `LocalBusiness`-Eintrag.
- **Kanonische Telefonnummer** (siehe Unstimmigkeit 3) → deshalb **kein** `telephone`
  im Schema.
- **Offizielle Social-Media-Profile der FEGA GmbH.** Die im Footer verlinkten
  Facebook/YouTube/Instagram-Profile gehören der Feickert-Gruppe („FeickertBau"),
  nicht eindeutig der FEGA → deshalb **kein** `sameAs` im Schema.
- **Echtes Foto + echter Name der Karriere-Ansprechpartner/in.** Aktuell Platzhalter
  („Sabine Wagner" + Platzhalterbild auf `/karriere`).
- **Foto für Pumpentechnik.** Im Bildordner existiert kein Pumpen-/Prüfstand-Foto →
  dort bewusst weiterhin der gestaltete Platzhalter (Service-Karte/-Kachel
  „Pumpenprüfstand"). Sobald ein Foto vorliegt: in `src/assets/img/` ablegen,
  Dateinamen in `SVC_IMG` + `content.ts` (Service `hero`) eintragen, Alt-Text in
  `src/lib/alt.ts` ergänzen.
- **Domain/Site-URL.** Angenommen `https://fega-metallbau.de` (aus dem Bundle). Wirkt
  auf `canonical`, Open Graph, Sitemap und robots.txt — bitte bestätigen
  (`site` in `astro.config.mjs` + die `Sitemap:`-Zeile in `public/robots.txt`).
- **Gebrandetes OG-Sharing-Bild.** Aktuell wird `hero-team.jpg` als
  `public/og-image.jpg` verwendet. Bei Bedarf durch ein dediziertes
  Vorschaubild (1200×630) ersetzen.

---

## 2. Getroffene Annahmen

- **Hero-Headline Startseite = neuer Claim** „Was wir liefern, hält. Punkt." Die
  Vorlage änderte `COMPANY.claim`; die bisherige Hero-Headline war wortgleich der
  *alte* Claim, daher konsequent mitgezogen. Falls die große Startseiten-Headline
  abweichen soll, bitte melden.
- **Alt-Texte** wurden durch visuelle Sichtung jedes Bildes + Dateinamen formuliert
  (bildinhalt-beschreibend, B2B-Kontext). Zentral pflegbar in `src/lib/alt.ts`.
- **„Über uns"-Fotostreifen** (Fertigung / Schweißen / Montage / Qualitätskontrolle)
  den vorhandenen Motiven zugeordnet: `fertigung-bauteile`, `hero-team`
  (Schweißzelle), `adapter-baustelle` (Montage/Einsatz), `fertigung-detail` (Bauteil/
  QS). Bei Bedarf umsortieren.
- **Mega-Menü-Mini-Thumbnails** bewusst als dekorative Streifenflächen belassen (wie
  im Original-Prototyp) — kann auf Wunsch auf echte Service-Fotos umgestellt werden.
- **Organization-Schema** statt `LocalBusiness` gewählt (gesicherte Anschrift/Zeiten
  fehlen). Enthalten sind nur publizierte, gesicherte Felder (Name, URL, Logo,
  Claim, E-Mail, Region, Leistungen, Muttergesellschaft).
- **Stand-Datum im Footer** = Build-Zeitpunkt (aktualisiert sich bei jedem Deploy
  automatisch).

---

## 3. Inhaltliche Unstimmigkeiten (inkl. „ZU PRÜFEN" aus der Textvorlage)

Kontakt-, Impressums-, Datenschutz- und AGB-Inhalte sowie alle Specs/Normen wurden
gemäß Auftrag **nicht verändert** — die folgenden Punkte sind nur dokumentiert:

1. **Jahres-Konsistenz.** Unternehmen/Metallbau „seit 1980", Pumpenprüfstand „seit
   2016", Geräteadapter-Fertigung „seit 2019" (About-Text/Timeline, Marke
   „Seit 2019 · Geräteadapter" auf der Startseite). Inhaltlich stimmig — bitte
   bestätigen, dass **2019** das korrekte Startjahr der Adapter-Fertigung ist.
2. **Maschinenbau-Spec „Werkstoff".** Der Wert „Bruch- & Schlagfestigkeit,
   Ermüdungsfestigkeit" beschreibt **Eigenschaften**, keinen Werkstoff. Unverändert
   übernommen. Bitte den tatsächlichen Werkstoff (z. B. konkrete Stahlgüte) nennen,
   dann wird das Spec-Feld korrigiert. (`SERVICES[0].specs` in `content.ts`)
3. **Telefonnummer uneinheitlich.** Anzeige „06471-5020" vs. Link-Ziel
   `tel:00496471502156` (= +49 6471 502156) vs. Impressum „06471/502-0". Drei
   Varianten — unverändert gelassen. Bitte die **kanonische** Nummer festlegen; sie
   wird auch für `telephone` im Schema benötigt.
4. **E-Mail** `info@feickert-bau.de` ist eine **Gruppen-Adresse**, nicht
   FEGA-spezifisch. Unverändert. Bitte prüfen, ob eine FEGA-eigene Adresse gewünscht
   ist.
5. **Impressum/Register – Register-Nummer.** Das Impressum nennt **HRB 3326**, das ist
   die Nummer der **FVB Feickert Verwaltungs und Beteiligungs GmbH** (Betreiberin der
   Website). Die FEGA GmbH selbst ist unter einer **anderen** HRB-Nummer eingetragen.
   Der jetzige Impressumstext ist 1:1 von der Live-Seite übernommen und damit korrekt
   für die Betreiberin — falls ein eigenständiges FEGA-Impressum gewünscht ist, bitte
   die FEGA-Registernummer nennen.
6. **Datenschutz & AGB sind jetzt die echten Texte von der Live-Seite** (Datenschutz-
   erklärung Wortlaut fega-metallbau.de; AGB Stand 02.2024 aus der Original-PDF). Die
   „Entwurf"-Kennzeichnung ist entfernt. Inhaltlicher Hinweis: Die Datenschutzerklärung
   referenziert noch das veraltete **EU-US Privacy Shield** und Dienste wie **AddThis** —
   das ist der aktuelle Stand der Live-Seite, sollte aber bei Gelegenheit
   datenschutzrechtlich aktualisiert werden.
7. **Karriere: Benefits & Ansprechpartner/in** sind als Platzhalter markiert (mit HR
   abstimmen, bevor sie live gehen).

---

## 4. GEO-Maßnahmen außerhalb der Website (vom Kunden anzugehen)

On-Page ist umgesetzt (siehe unten). Den größten Hebel für KI-/Lokal-Sichtbarkeit
bringen diese **Off-Page**-Schritte:

- [ ] **Google Business Profile** anlegen/pflegen: korrekte Adresse, Öffnungszeiten,
      Kategorie (Metallbau/Schlosserei/Maschinenbau), Fotos, Leistungen, Telefon.
      → stärkster lokaler GEO-Hebel.
- [ ] **Bing Places for Business** analog anlegen.
- [ ] **Brancheneinträge mit konsistentem NAP** (Name/Adresse/Telefon identisch):
      Das Örtliche, Gelbe Seiten, 11880, „Wer liefert was" (wlw), Europages (B2B),
      IHK-/HWK-Verzeichnis, regionale Verzeichnisse Westerwald/Taunus.
- [ ] **Backlink/Verknüpfung von feickert-bau.de** auf die FEGA-Seite (stärkt
      Autorität und die Gruppen-Zugehörigkeit).
- [ ] **Google Search Console** und **Bing Webmaster Tools** einrichten, die Sitemap
      `https://fega-metallbau.de/sitemap-index.xml` einreichen, Indexierung prüfen.
- [ ] **Google-Rezensionen** aktiv einholen (Sichtbarkeit + Vertrauen).
- [ ] **Kernfakten konsistent extern nennen** (DIN EN 1090-2 / EXC 3, Marken
      Auras/Tsurumi, Liebherr-Kompatibilität, Region, Feickert-Gruppe) — erhöht die
      KI-Zitierfähigkeit über Profile hinweg.
- [ ] Optional: **OpenStreetMap** / **Apple Business Connect** ergänzen.
- [ ] Optional: **LocalBusiness-Schema** nachrüsten, sobald Adresse, Öffnungszeiten
      und Telefon final geklärt sind (siehe Abschnitt 1).

---

## Bereits on-site umgesetzt (zur Info)

**Inhalte/Bilder:** überarbeitete Texte (Claim, Service-Headlines/Leads/Body/
Features, About) 1:1 aus der Vorlage übernommen; echte Fotos aus `img/` statt
Platzhalter, jeweils mit bildbeschreibendem Alt-Text; Astro-Bildoptimierung
(WebP, responsives `srcset`/`sizes`, `loading="lazy"`, Heroes `eager`+
`fetchpriority="high"`).

**Technisches SEO:** pro Seite eigener Title + eindeutige Description; Open-Graph-
und Twitter-Card-Tags inkl. `og:image`; `canonical` je Seite; genau **eine H1** pro
Seite; `sitemap-index.xml` (@astrojs/sitemap); `robots.txt` mit ausdrücklich
erlaubten KI-Crawlern (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-Web,
anthropic-ai, PerplexityBot, Perplexity-User, Google-Extended); responsives Layout
in allen Abschnitten.

**GEO On-Page:** jeder Hauptabschnitt öffnet mit einer klaren, in sich
geschlossenen Aussage (Headline + Lead) vor den Details; harte Fakten (Normen,
Jahre, Marken, Specs) bleiben prominent in Spec-Listen, Badges und Leads;
sichtbares „Stand"-Datum im Footer; Organization-Schema (nur gesicherte Daten).

---

## 5. Deployment (GitHub Pages)

Eingerichtet für GitHub Pages auf dem **Projekt-Repo** `hans-on-Marketing/FEGA-Metallbau`:

- Workflow `.github/workflows/deploy.yml` (baut `site/` und deployt automatisch
  bei jedem Push auf `main`).
- `astro.config.mjs`: `site = https://hans-on-marketing.github.io`,
  `base = /FEGA-Metallbau/` (Owner im Host **kleingeschrieben**, Repo-Name im Pfad).
- **Live-URL nach Aktivierung:** `https://hans-on-marketing.github.io/FEGA-Metallbau/`
- **Zu tun durch dich:** Push über die Web-Oberfläche → im Repo
  *Settings → Pages → Source = „GitHub Actions"* einschalten (einmalig).
  Voraussetzung für privates Repo: GitHub **Pro/Team**.

**Wichtig für später (Produktivdomain):** Diese Pages-URL ist ideal als
**Vorschau/Staging**. Auf einem Projekt-Unterpfad (`…/FEGA-Metallbau/`) liegt die
`robots.txt` nicht im Host-Root – Crawler lesen `…github.io/robots.txt`, nicht den
Unterpfad. Für den echten Live-Betrieb unter **fega-metallbau.de**:
`site = https://fega-metallbau.de`, `base = '/'` setzen (dann greifen `robots.txt`,
`canonical` und `og:image` ohne Unterpfad). Alternativ eine Custom Domain in den
Pages-Settings hinterlegen.

---

## Changelog 27.06.2026 (erledigt / präzisiert)

- **Telefonnummer vereinheitlicht:** verifiziert über feickert-bau.de + FEGA-Prospekt →
  einheitlich **06471 / 502-0** (Anzeige) bzw. `tel:+4964715020` (Link). Damit sind
  Anzeige, Klick-Ziel und Impressum konsistent. (Punkt 3 erledigt.)
- **Werkstoff geklärt und eingetragen (Punkt 2 erledigt):** Aus der statischen FE-Berechnung
  (HFR Ingenieure, Projekt 2022798a, „Baustoffe") verifiziert: tragende Bauteile aus
  **S355J2 (Werkstoff-Nr. 1.0570)**, Bolzen aus **42CrMo4 (1.7225)**. Die Maschinenbau-Spec
  zeigt jetzt `Werkstoff: S355J2 (1.0570) · Bolzen 42CrMo4 (1.7225)`.
- **Zertifikate & Nachweise (neu):** Auf der Maschinenbau-Seite (`#zertifikate`) ergänzt:
  EN-1090-2-/EXC3-Zertifikat (TÜV SÜD, Nr. 0036-CPR-1090-1.00867.TÜV SÜD.2020.003) sowie der
  Hinweis auf den externen FE-Statiknachweis. **Wichtig/ehrlich beschriftet:** Zertifikats-
  inhaber ist die **Feickert Spezialtiefbau GmbH** (Schwesterfirma, gleiche Adresse), nicht
  die FEGA GmbH selbst — so auch auf der Seite ausgewiesen. **Offen:** (a) das eigentliche
  Zertifikats**bild** als Datei (kam nur inline im Chat an) → sobald als JPG/PNG vorhanden,
  in `site/public/` ablegen + Dateinamen in `CERTIFICATES.items[0].img` eintragen; (b)
  nächstes Überwachungsaudit war 30.07.2024 — bitte bestätigen, dass das Zertifikat aktuell
  noch gültig ist (ggf. neuere Fassung nachreichen).
- **Karriere-Ansprechpartnerin:** Platzhalter „Sabine Wagner" entfernt → echter
  Bewerbungskanal **bewerbung@feickert-bau.de** (Rolle „Bewerbung & Personal").
  (GF-Blocker erledigt.)
- **Karriere-Seite auf Du-Ansprache** umgestellt; **alle Feickert-Tiefbau-Stellen**
  ergänzt (verlinkt zu feickert-bau.de).
- **SEO erweitert:** JobPosting-Schema (FEGA-Stellen), FAQPage-Schema (Karriere),
  Service-Schema (Leistungsseiten), keyword-stärkere Leistungs-Titles/Descriptions.
- **Responsive:** Konfigurator-Grids (Adapter/Mietpark), Job-Board-Bildraster und
  Wizard-Felder brechen jetzt auf Mobil sauber um; Ergebnis-Spalte nicht mehr sticky.
- **Echte Rechtstexte eingepflegt:** Datenschutz (voller Wortlaut der Live-Seite,
  §§ 1–8), AGB (Original-PDF Stand 02.2024, Ziffern 1–9) und Impressum (FVB Feickert,
  HRB 3326, Urheberrecht + Teledienstgesetz-Hinweis) ersetzen die bisherigen
  Mustertexte; „Entwurf"-Banner entfernt. Die **AGB-PDF** liegt unter
  `site/public/FEGA-AGB.pdf` und ist auf der AGB-Seite als Download verlinkt.
- **Feickert-Ausbildung integriert:** Neue Sektion auf `/karriere` (`#ausbildung-feickert`),
  klar als **Muttergesellschaft** ausgewiesen — Ausbildungsgänge der Standorte Hessen,
  Sachsen-Anhalt, Thüringen, Duales Studium (beide Varianten inkl. Vergütung) und die drei
  Bundesland-Ansprechpartner (Schilbock/Hunold/Erbach). Quelle: feickert-bau.de/wir-bilden-aus.
- **Inhalte aus der Firmenvorstellung-PDF übernommen** (per Recherche-Agent, nur belastbare
  Fakten): Maschinenbau → Roboter-Schweißanlage (bis 6.000 mm / Ø 1.200 mm), Sandstrahlen &
  Regeneration (bis 6 m / 1,5 t), LIKUFIX **& OilQuick**, Aufnahmeplatten/Sonderbauten, Norm
  präzisiert auf DIN EN 1090-**1/-2**. Metallbau → Edelstahl V2a, Kunstschmiede, Stahl-/Anlagenbau
  (Stege, Bühnen, Hallen), Region zusätzlich Rhein-Main. Maschinenhandel → Schmölz SchachtFIX
  (autorisierter Händler). Mietpark → **FEGA Power Spaten** (16–36 t, 780 mm, 2.560 mm, ~625 kg)
  und Schwanenhals. Über uns → Leitbild „Der Kunde steht an erster Stelle / Metall ist unsere
  Leidenschaft". Kontakt → **echte Ansprechpartner/Team** (7 Personen mit Funktion + E-Mail).
  Bewusst **weggelassen** (unsicher/heikel): Kran-Traglast „6,3t" (nur vom Foto), Änderung des
  Firmen-Rechtsnamens, exakte Hausadresse im Impressum.
- **Noch ungenutzte PDF-Bilder** (für später, falls echte Fotos gewünscht): Schweißer-Cover,
  Roboteranlage/Werkstatt (S. 24), Geräteadapter-Produktfotos (S. 14/16), Power Spaten im
  Einsatz (S. 28), Metallbau-Referenzen (S. 18), Pumpen (S. 20), SchachtFIX-Baustelle (S. 26),
  Deutschland-Standortkarte (S. 17). Aktuell weiterhin Platzhalter (Foto-Toggle in OptImage).
- **Zertifikate:** Die gelieferte AGB-PDF enthält **keine** Zertifikatsabbildungen —
  nur den FEGA-Briefkopf (Anschrift/Tel./E-Mail). Für eine „Zertifikate/Nachweise"-
  Sektion müssten die Zertifikate (z. B. EN-1090-Werkszeugnis, DGUV3) **separat** als
  Bild/PDF bereitgestellt werden. **Offen.**
