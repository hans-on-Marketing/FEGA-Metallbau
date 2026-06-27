# Bilder-Shotlist — FEGA Website

Stand: 27. Juni 2026 · Vorgaben für Bildgenerierung (Magnific o. ä.) und Auswahl echter Fotos.

Ziel: **eine zusammengehörige, authentische Bildserie**, die zur Seite passt – kein
generischer Stock-/KI-Look. Lieber ein echtes Werkstattfoto als ein glattes Render.

---

## 1. Look & Feel — das Wichtigste zuerst

**Stimmung:** dokumentarisch, echt, „mitten aus der Arbeit". Wie eine Reportage, nicht wie ein Katalog.

- **Authentisch statt poliert.** Echte Hände, echter Staub, echte Funken, echte Werkstatt.
  Keine sterilen Studio-Renderings, keine Hochglanz-Models.
- **Cineastisch & eher dunkel.** Tiefe Schatten, ein klarer Lichtakzent (Werkstattlicht,
  Funkenflug, Gegenlicht). Passt zum dunklen, ruhigen Look der Website.
- **Menschen bei der Arbeit**, nicht in die Kamera posierend. Blick auf das Werkstück, nicht ins Objektiv.
- **Farbwelt zurückhaltend:** Stahlgrau, Anthrazit, warmes Werkstattlicht. Die Marken-Akzente
  **Rot (#EE413E)** und **Blau (#1F4E79-ish)** kommen aus der Arbeitskleidung/Geräten, nicht aus Filtern.
- **Echtes Korn/Tiefenschärfe** erlaubt – darf nach Handwerk aussehen, nicht nach Werbung.

**Vermeiden:** Plastik-Optik, übertriebene HDR-Sättigung, generische „US-Baustelle", lächelnde
Stockfotos, Hände mit 6 Fingern, unleserliche Fake-Logos, falsche Werkzeuge.

---

## 2. Marken-Details, die ins Bild gehören (Authentizität!)

- **FEGA-Logo auf der Arbeitskleidung** (Brust/Rücken der Jacke) und **auf dem Schutzhelm**.
- Das **FEGA-Büffel-Logo** (Maskottchen) taucht in der Firmenvorstellung auf – wenn möglich dezent
  mitnehmen (Helmaufkleber, Hallentor, Banner).
- **Arbeitskleidung:** moderne Workwear (FEGA nutzt Strauss-Berufskleidung) – dunkel/anthrazit
  mit roten/blauen Akzenten. Warnschutz-Orange nur dort, wo es real ist (Baustelle/Tiefbau).
- **PSA korrekt:** Schweißerschild/-brille beim Schweißen, Gehörschutz, Sicherheitsschuhe,
  Handschuhe. Sieht echt aus und ist arbeitsschutz-konform.
- **Echte Technik im Bild:** Schnellwechsel-Adapter (LIKUFIX/OilQuick), Roboter-Schweißanlage,
  MAG/WIG-Schweißen, Liebherr-Bagger (Tiefbau/Feickert), FEGA Power Spaten.
- **„Made in Germany"** ist ein Marken-Claim von FEGA – darf als Bildaussage mitschwingen.

> Tipp für Magnific: Wenn das Logo nicht sauber generiert wird, lieber **Fläche freilassen**
> (saubere Jacke/Helm) – das echte FEGA-Logo setze ich später nicht ins Foto, aber ein
> sauberer Platz wirkt glaubwürdiger als ein verzerrtes Fake-Logo.

---

## 3. Technische Lieferung

- **Format:** JPG (oder PNG), **sRGB**, ohne sichtbares Wasserzeichen.
- **Auflösung:** quer **≥ 2000 px breit**, hoch **≥ 1400 px breit**. Lieber größer – Astro
  rechnet automatisch WebP + responsive Größen herunter.
- **Seitenverhältnis** exakt wie in der Tabelle (Bilder werden im Layout auf dieses Ratio beschnitten).
- **Dateinamen:** am besten direkt so benennen wie in Spalte „Dateiname" – dann setze ich sie
  ohne Umbenennen ein. Sonst einfach durchnummeriert schicken, ich ordne zu.
- **Ablage bei mir:** `site/src/assets/img/` + Alt-Text in `site/src/lib/alt.ts`, danach Foto-Modus an.

---

## 4. Die Shots (priorisiert)

### Priorität A — Heroes (größte Wirkung)

| # | Platz / Seite | Dateiname | Ratio | Motiv & Bildidee |
|---|---|---|---|---|
| 1 | **Startseite-Hero** | `hero-team.jpg` | 3:2 quer | Schweißer in der Halle, Funkenflug, Gegenlicht. FEGA-Logo auf Jacke/Helm. Dunkel, cineastisch. Das Schlüsselbild der Seite. |
| 2 | **Maschinenbau-Hero** | `adapter-detail.jpg` | 4:3 quer | Detail eines Schnellwechsel-Adapters, frisch gefertigt, an der Maschine oder auf dem Prüftisch. Präzision sichtbar. |
| 3 | **Metallbau-Hero** | `metallbau-ueberdachung.jpg` | 4:3 quer | Fertig montierte Stahl-Überdachung oder Treppe/Geländer, saubere Schweißnähte, im Tageslicht. |
| 4 | **Maschinenhandel-Hero** (dunkel) | `handel-umschlag.jpg` | 4:3 quer | Pumpen/Baustellengerät im Lager/Umschlag, dunkle Stimmung, Stapler/Hallentor. |
| 5 | **Mietpark-Hero** | `mietgeraet.jpg` | 4:3 quer | FEGA Power Spaten oder Adapter am Bagger im Feldeinsatz, Erdarbeiten. |
| 6 | **Ausbildung-Hero** | `ausbildung-team.jpg` | **3:4 hoch** | Junger Azubi/Schweißer in Aktion, Hochformat, FEGA-Workwear. Energiegeladen, echt. |

### Priorität B — Galerien & Belege (vertiefen die Seiten)

| # | Platz | Dateiname | Ratio | Motiv |
|---|---|---|---|---|
| 7 | Maschinenbau-Galerie | `adapter-produkt.jpg` | 4:3 | Fertiger Adapter als Produktbild (Werkstatt-Hintergrund, nicht Studio). |
| 8 | Maschinenbau-Galerie | `adapter-baustelle.jpg` | 4:3 | Adapter im echten Einsatz am Trägergerät. |
| 9 | Maschinenbau-Galerie | `adapter-bohrgeraet.jpg` | 4:3 | Adapter am Bohrgerät. |
| 10 | Maschinenbau-Galerie | `fertigung-rahmen.jpg` | 4:3 | Anbaukonstruktion/Rahmen in der Fertigung, Roboter-Schweißanlage. |
| 11 | Metallbau-Galerie | `metallbau-treppe-innen.jpg` | 4:3 | Innentreppe + Geländer. |
| 12 | Metallbau-Galerie | `metallbau-treppe-aussen.jpg` | 4:3 | Außentreppe mit Geländer. |
| 13 | Metallbau-Galerie | `metallbau-rampe.jpg` | 4:3 | Barrierefreie Rampe/Stahlkonstruktion. |
| 14 | Metallbau-Galerie | `metallbau-einhausung.jpg` | 4:3 | Einhausung/Stahlbau (Stege, Bühne, Halle). |
| 15 | Mietpark-Galerie | `adapter-feld.jpg` | 4:3 | Gerät im Feldeinsatz. |
| 16 | Mietpark-Galerie | `rohrheber.jpg` | 4:3 | Anbaugerät/Rohrheber im Einsatz. |
| 17 | Handel | `adapter-rohre.jpg` | 4:3 | Pumpen/Rohre/Material, Handelskontext. |
| 18 | Referenzen/Gruppe | `feickert-bagger.jpg` | 4:3 | Liebherr-Bagger „Feickert", Tiefbau-Einsatz. |

### Priorität C — Sonstiges

| # | Platz | Dateiname | Ratio | Motiv |
|---|---|---|---|---|
| 19 | OG-/Sharing-Bild | `og-image.jpg` | 1200×630 | Starkes Marken-Motiv (Schweißer/Funken) für Social-Vorschau. |
| 20 | **Zertifikat** | `zertifikat-en1090-exc3.jpg` | A4 hoch | Das echte TÜV-SÜD-Zertifikat als **saubere Datei** (Scan/Export, kein Foto an der Wand). |
| – | Pumpentechnik | *(optional)* | — | Aktuell bewusst gestalteter Sonder-Platzhalter „Pumpenprüfstand DGUV3". Nur ersetzen, wenn ein echtes Prüfstand-Foto vorliegt. |

---

## 5. Konsistenz-Check vor dem Abschicken

- [ ] Alle Bilder wirken wie **eine Serie** (gleiche Licht-/Farbstimmung, gleicher „Ernst").
- [ ] **FEGA-Branding** sichtbar oder sauber freigelassen (kein Fake-Logo).
- [ ] PSA korrekt (Schweißerschild, Helm, Handschuhe) – nichts Sicherheits-Falsches.
- [ ] Richtige Technik im Bild (Adapter, Roboter, Liebherr, Power Spaten – keine generischen US-Maschinen).
- [ ] Keine KI-Artefakte (Hände, Schrift, Logos, Werkzeuge geprüft).
- [ ] Seitenverhältnis passt, Auflösung groß genug.

---

## 6. Magnific-Hinweise

- **Reimagine/Style-Transfer** eignet sich super, um echte (auch einfache) FEGA-Fotos in den
  einheitlichen, cineastischen Look zu heben – das hält es authentisch und konsistent.
- **Upscale** für die Heroes (große Darstellung) auf ≥ 2000 px.
- Bei reiner Text-zu-Bild-Generierung: Prompt-Bausteine aus Abschnitt 1 + 2 übernehmen
  („documentary, real German metal workshop, welder, sparks, dark cinematic, workwear, helmet,
  shallow depth of field, no text, no logo distortion").
- Wenn du echte FEGA-Fotos hast: **die zuerst** – Magnific nur zum Veredeln/Vereinheitlichen.

---

*Wenn die Bilder da sind: einfach hier in den Chat hochladen (Reihenfolge egal). Ich lege sie ab,
schreibe Alt-Texte, schalte den Foto-Modus frei und deploye.*
