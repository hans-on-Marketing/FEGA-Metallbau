/* ============================================================================
   FEGA — Inhalte (Quelle: fega-metallbau.de + hochgeladene PDFs).
   Tonalität: kurz, selbstbewusst, sachlich überprüfbar (B2B-Einkauf).
   Headlines/Leads/Fließtexte/Feature-Texte überarbeitet (Vorlage 2026-06).
   Specs, Normen, Marken, Jahreszahlen, Kontakt- und Rechtsdaten UNVERÄNDERT.
   Bildfelder = echte Dateinamen aus src/assets/img (Alt-Texte in lib/alt.ts).
   ========================================================================== */

import type { AccentKey } from '@/lib/theme';

export const COMPANY = {
  legal: 'FEGA GmbH',
  legalLong: 'FEGA GmbH – Metallbau und Handelsgesellschaft',
  claim: 'Was wir liefern, hält. Punkt.',
  since: 1980,
  region: 'Westerwald / Taunus',
  phone: '06471 / 502-0',
  phoneHref: 'tel:+4964715020',
  email: 'info@feickert-bau.de',
  group: 'Feickert Unternehmensgruppe',
  groupSeat: 'Weilburg / Lahn',
  operator: 'FVB Feickert Verwaltungs und Beteiligungs GmbH',
  street: 'Hermann-Stoll-Straße 1',
  zip: '35781',
  city: 'Weilburg/Lahn',
  fax: '06471/521 67',
  buyerPoints: [
    ['Ein Lieferant', 'Metallbau, Maschinenbau, Pumpen & Miete – koordiniert aus einer Hand.'],
    ['Termintreue', 'Verbindliche Liefer- und Montagetermine, planbare Standzeiten.'],
    ['Dokumentierte Qualität', 'Gefertigt nach DIN EN 1090-2 · EXC 3, geprüft nach DGUV3.'],
    ['Angebot in 24 h', 'Schnelle, belastbare Rückmeldung auf Ihre Anfrage.'],
  ] as [string, string][],
};

export interface NavItem {
  id: string;
  label: string;
  href: string;
  menu?: string[];
}

/* Slug-Map: Prototyp-Hash-IDs → echte URLs */
export const SLUG: Record<string, string> = {
  home: '/',
  maschinenbau: '/leistungen/maschinenbau',
  metallbau: '/leistungen/metallbau',
  pumpentechnik: '/leistungen/pumpentechnik',
  maschinenhandel: '/leistungen/maschinenhandel',
  mietpark: '/leistungen/mietpark',
  'ueber-uns': '/ueber-uns',
  feickert: '/unternehmensgruppe',
  referenzen: '/referenzen',
  karriere: '/karriere',
  ausbildung: '/ausbildung',
  kontakt: '/kontakt',
  impressum: '/impressum',
  datenschutz: '/datenschutz',
  agb: '/agb',
};

export const NAV: NavItem[] = [
  { id: 'home', label: 'Startseite', href: '/' },
  { id: 'leistungen', label: 'Leistungen', href: '/leistungen/maschinenbau', menu: ['maschinenbau', 'metallbau', 'pumpentechnik', 'maschinenhandel', 'mietpark'] },
  { id: 'ueber-uns', label: 'Über uns', href: '/ueber-uns' },
  { id: 'feickert', label: 'Unternehmensgruppe', href: '/unternehmensgruppe' },
  { id: 'referenzen', label: 'Referenzen', href: '/referenzen' },
  { id: 'karriere', label: 'Karriere', href: '/karriere' },
  { id: 'ausbildung', label: 'Ausbildung', href: '/ausbildung' },
];

export interface Service {
  id: string;
  label: string;
  kicker: string;
  no: string;
  accent: AccentKey;
  hero: string | null; // Dateiname oder null (Sonderfall Pumpentechnik)
  heroDark?: boolean;
  headline: string;
  lead: string;
  buyer: string;
  body: string[];
  features: { t: string; d: string }[];
  specs: [string, string][];
  gallery: string[]; // Dateinamen
  badges: string[];
  cta?: string;
  seoTitle?: string;
  seoDesc?: string;
}

/* Fünf Leistungssäulen. accent ∈ blue|red|black. */
export const SERVICES: Service[] = [
  {
    id: 'maschinenbau', label: 'Maschinenbau', kicker: 'Produktion · Aufarbeitung', no: '01', accent: 'blue',
    seoTitle: 'Schnellwechsel-Adapter für Bagger nach EXC 3 | FEGA Maschinenbau', seoDesc: 'Schnellwechsel-Adapter und Anbaukonstruktionen für Erdbewegungsmaschinen – gefertigt nach DIN EN 1090-2 / EXC 3. Liebherr-kompatibel, mechanisch & hydraulisch.',
    hero: 'adapter-detail.jpg',
    headline: 'Adapter, die passen. Nicht ungefähr.',
    lead: 'Schnellwechsel-Adapter für Erdbewegungsmaschinen, abgestimmt auf Ihr Trägergerät und den echten Einsatz. Gefertigt nach DIN EN 1090-2 / EXC 3 – dokumentiert, reproduzierbar, prüfbar.',
    buyer: 'Für den Einkauf: gleichbleibende Qualität nach EXC 3, reproduzierbare Fertigung und ein fester Ansprechpartner – auch für Serien und Rahmenaufträge.',
    body: [
      'Gefertigt nach DIN EN 1090-2 / EXC 3 und nach Maschinenrichtlinie 2006/42/EG. Die Adapter erfüllen die aktuellen Anforderungen an Sicherheit und Bedienbarkeit – nicht auf dem Papier, sondern im Einsatz.',
      'Die Tragfähigkeit wird per FE-Berechnung durch ein externes Ingenieurbüro nachgewiesen – mit definierten Werkstoffen (S355J2 für die tragenden Bauteile, 42CrMo4 für die Bolzen). So ist jede Konstruktion rechnerisch abgesichert, bevor sie in den Einsatz geht.',
      'Sie brauchen mehr als einen Adapter? Wir entwickeln und bauen Anbaukonstruktionen aller Art – von der ersten Zeichnung bis zum geprüften, fertigen Bauteil.',
    ],
    features: [
      { t: 'Schnellwechsel-Adapter', d: 'Aufnahmeplatten und werkzeugseitige Geräteadapter, Liebherr-kompatibel (LIKUFIX & OilQuick), mechanisch und hydraulisch.' },
      { t: 'Roboter-Schweißanlage', d: 'Hochpräzise Schweißroboter mit Schwenktischen für Werkstücke bis 6.000 mm Länge und 1.200 mm Durchmesser – mit maßgeschneiderten Lehren.' },
      { t: 'Anbaukonstruktionen & Sonderbauten', d: 'Entwicklung und Bau dynamisch beanspruchbarer Bauteile aller Art.' },
      { t: 'Sandstrahlen & Regeneration', d: '30-Fuß-Sandstrahlcontainer für Teile bis 6 m und 1,5 t: strahlen, Lager erneuern, Struktur verstärken, grundieren, in RAL-Farbe lackieren.' },
      { t: 'Aufarbeitung', d: 'Defekte Adapter und Bohrungen zurück auf Soll-Maß, Hydraulikkupplungen nach Herstellervorgabe instand gesetzt.' },
      { t: 'Aus einem Haus', d: 'Konstruktion, Fertigung, Prüfung. Ein Lieferant, eine Verantwortung.' },
    ],
    specs: [
      ['Norm', 'DIN EN 1090-1/-2 · EXC 3'], ['Richtlinie', 'Maschinenrichtlinie 2006/42/EG'],
      ['Werkstoff', 'S355J2 (1.0570) · Bolzen 42CrMo4 (1.7225)'], ['Schnellwechsel', 'LIKUFIX & OilQuick verfügbar'],
      ['Schweißanlage', 'Roboter · bis 6.000 mm / Ø 1.200 mm'], ['Vorteil', 'Gewichtsoptimiert – weniger Verbrauch & Emission'],
    ],
    gallery: ['adapter-produkt.jpg', 'adapter-baustelle.jpg', 'adapter-bohrgeraet.jpg', 'fertigung-rahmen.jpg'],
    badges: ['DIN EN 1090-1/-2 · EXC 3', 'LIKUFIX & OilQuick', 'Maschinenrichtlinie 2006/42/EG'],
  },
  {
    id: 'metallbau', label: 'Metallbau', kicker: 'Geländer · Treppen · Türen · Tore · Überdachung · Carports · Anbaubalkone', no: '02', accent: 'red',
    seoTitle: 'Metallbau Westerwald: Geländer, Treppen & Überdachungen | FEGA', seoDesc: 'Metallbau aus einer Hand seit 1980: Geländer, Stahltreppen, Tore, Überdachungen und Carports – Konstruktion, Fertigung und Montage termintreu im Westerwald/Taunus.',
    hero: 'metallbau-ueberdachung.jpg',
    headline: 'Metall, das Jahrzehnte bleibt.',
    lead: 'Seit 1980 fertigen und montieren wir Metall – Geländer, Treppen, Tore, Überdachungen. Konstruktion, Fertigung und Montage aus einer Hand, termintreu auf die Baustelle.',
    buyer: 'Für den Einkauf: ein Gewerk weniger zu koordinieren – ein Ansprechpartner von der Planung bis zur montierten Anlage.',
    body: [
      'Vom Geländer über die Stahltreppe bis zur kompletten Überdachung: Wir konstruieren, fertigen und montieren. Sauber verarbeitet, langlebig, nach Termin – ohne Überraschungen.',
      'Dazu Bauschlosserarbeiten in Stahl und Edelstahl V2a, Kunstschmiedearbeiten, Brüstungen und Vergitterungen sowie Stahl- und Anlagenbau – Stege, Arbeitsbühnen, Hallen und Installationen. Im Westerwald, Taunus und Rhein-Main-Gebiet.',
    ],
    features: [
      { t: 'Geländer & Treppen', d: 'Innen und außen, Stahl verzinkt oder beschichtet.' },
      { t: 'Türen & Tore', d: 'Maßgefertigte Bauschlosserarbeiten.' },
      { t: 'Überdachung & Carports', d: 'Wetterschutz in Stahlbauweise.' },
      { t: 'Anbaubalkone', d: 'Vorgehängte Konstruktionen, statisch geprüft.' },
      { t: 'Edelstahl & Kunstschmiede', d: 'Bauschlosserarbeiten in Stahl und Edelstahl V2a, Brüstungen, Vergitterungen, Kunstschmiede.' },
      { t: 'Stahl- & Anlagenbau', d: 'Stege, Arbeitsbühnen, Hallen und Installationsarbeiten in Stahlbauweise.' },
    ],
    specs: [
      ['Seit', '1980'], ['Region', 'Westerwald · Taunus · Rhein-Main'],
      ['Werkstoffe', 'Stahl · Edelstahl V2a'], ['Leistung', 'Fertigung & Montage aus einer Hand'],
    ],
    gallery: ['metallbau-treppe-innen.jpg', 'metallbau-treppe-aussen.jpg', 'metallbau-rampe.jpg', 'metallbau-einhausung.jpg'],
    badges: ['Stahl & Edelstahl V2a', 'Kunstschmiede', 'Fertigung & Montage'],
  },
  {
    id: 'pumpentechnik', label: 'Pumpentechnik', kicker: 'Pumpenprüfung · -reparatur · -vermietung · -verkauf', no: '03', accent: 'blue',
    seoTitle: 'Pumpenprüfstand & DGUV3-Pumpenprüfung | FEGA Pumpentechnik', seoDesc: 'Pumpenprüfung, Reparatur, Vermietung und Verkauf: moderner Pumpenprüfstand seit 2016, dokumentiert nach DGUV3. Marken Auras und Tsurumi, schnelle Ersatzbeschaffung.',
    hero: null,
    headline: 'Eine Pumpe, die läuft, kostet weniger als eine, die steht.',
    lead: 'Seit 2016 betreiben wir einen modernen Pumpenprüfstand. Wir prüfen, dokumentieren, reparieren – und liefern Ersatz, wenn es schnell gehen muss.',
    buyer: 'Für den Einkauf: dokumentierte DGUV3-Prüfung, kalkulierbare Standzeiten und schnelle Ersatzbeschaffung aus einer Hand.',
    body: [
      'Wir messen und dokumentieren Durchflussmenge, Förderleistung, Förderhöhe und Stromverbrauch – Schwarz auf Weiß. Wartung und Reparatur nach Rücksprache, kein Blindflug.',
    ],
    features: [
      { t: 'Pumpenprüfung', d: 'Durchfluss, Förderleistung, Förderhöhe & Stromverbrauch nach DGUV3.' },
      { t: 'Pumpenreparatur', d: 'Instandsetzung mit dokumentiertem Ergebnis.' },
      { t: 'Vermietung & Verkauf', d: 'Ersatz da, wenn Sie ihn brauchen.' },
    ],
    specs: [
      ['Seit', '2016'], ['Prüfung', 'DGUV3'],
      ['Gemessen', 'Durchfluss · Förderhöhe · Stromverbrauch'], ['Marken', 'Auras · Tsurumi'],
    ],
    gallery: [],
    badges: ['DGUV3', 'Prüfstand seit 2016'],
  },
  {
    id: 'maschinenhandel', label: 'Maschinenhandel', kicker: 'Verkauf · Handel', no: '04', accent: 'black',
    seoTitle: 'Baustellengerät & Pumpen kaufen (Auras, Tsurumi) | FEGA', seoDesc: 'Handelsgesellschaft für Baustellengerät: leistungsstarke Pumpen von Auras und Tsurumi, Schnellwechselsysteme und Anbaugeräte. Beratung statt Katalog, kurze Beschaffungswege.',
    hero: 'handel-umschlag.jpg', heroDark: true,
    headline: 'Baustellengerät aus einer Hand.',
    lead: 'Als Handelsgesellschaft mit den nötigen Konzessionen liefern wir Baustellengerät – Schwerpunkt: leistungsstarke Pumpen von Auras und Tsurumi.',
    buyer: 'Für den Einkauf: kurze Beschaffungswege, geprüfte Markenware und Beratung statt Katalog.',
    body: [
      'Unser Schwerpunkt liegt auf Verkauf und Vermietung leistungsstarker Pumpen – ergänzt um Schnellwechselsysteme und Anbaugeräte für Erdbewegungsmaschinen. Sie sagen, was Sie brauchen, wir liefern das Passende.',
    ],
    features: [
      { t: 'Pumpen', d: 'Leistungsstarke Geräte von Auras und Tsurumi.' },
      { t: 'Schnellwechselsysteme', d: 'Adapter und Anbaugeräte, passgenau.' },
      { t: 'Schmölz SchachtFIX', d: 'Autorisierter Händler für SchachtFIX-Spezialwerkzeuge für den Tiefbau.' },
      { t: 'Beratung', d: 'Ersatzbeschaffung und technische Beratung, kein Verkaufsgerede.' },
    ],
    specs: [
      ['Segment', 'Handelsgesellschaft'], ['Konzessionen', 'Vertrieb von Baustellengerät'],
      ['Schwerpunkt', 'Pumpen – Verkauf & Vermietung'], ['Marken', 'Auras · Tsurumi · Schmölz SchachtFIX'],
    ],
    gallery: ['adapter-rohre.jpg'],
    badges: ['Auras', 'Tsurumi', 'Schmölz SchachtFIX'],
  },
  {
    id: 'mietpark', label: 'Fega Mietpark', kicker: 'Gerätevermietung · FMP', no: '05', accent: 'red',
    seoTitle: 'Schnellwechseladapter & Pumpen mieten | FEGA Mietpark', seoDesc: 'Mietpark für Schnellwechseladapter, Anbaugeräte und leistungsstarke Pumpen – geprüft, sofort einsatzbereit, mit verschiedenen Trägergeräten kompatibel. Planbare Mietkosten.',
    hero: 'mietgeraet.jpg',
    headline: 'Passgenau mieten, sofort einsatzbereit.',
    lead: 'Schnellwechselsysteme, Anbaugeräte und leistungsstarke Pumpen – geprüft, sofort verfügbar, ohne Wartezeit.',
    buyer: 'Für den Einkauf: planbare Mietkosten, sofortige Verfügbarkeit und ein Ansprechpartner für Kauf und Miete.',
    body: [
      'Ob kurzfristiger Einsatz oder Ergänzung zu Ihrem Maschinenpark: Unsere Geräte sind geprüft, sofort einsatzbereit und mit verschiedenen Trägergeräten kompatibel. Anrufen, mieten, loslegen.',
    ],
    features: [
      { t: 'Schnellwechseladapter', d: 'Mechanisch und hydraulisch.' },
      { t: 'FEGA Power Spaten', d: 'Für Baggerklasse 16–36 t · Schnittbreite 780 mm · 2.560 mm lang · ca. 625 kg. Für Grabenverbau, Kanal- und Leitungsbau, Unterfangungen und Schachtarbeiten.' },
      { t: 'Schwanenhals', d: 'Anbaugerät für den Tiefbau-Einsatz, sofort verfügbar.' },
      { t: 'Hydrostatische Rüttelplatte', d: 'Leistungsstark, sofort verfügbar.' },
      { t: 'Pumpen', d: 'Von Auras und Tsurumi.' },
    ],
    specs: [
      ['Programm', 'Schnellwechsel · Power Spaten · Schwanenhals · Pumpen'], ['Zustand', 'Geprüft, sofort einsatzbereit'],
      ['Kompatibel', 'Verschiedene Trägergeräte'], ['Marken', 'Auras · Tsurumi'],
    ],
    gallery: ['adapter-feld.jpg', 'rohrheber.jpg'],
    badges: ['FEGA Power Spaten', 'Mechanisch & hydraulisch', 'Sofort einsatzbereit'],
    cta: 'Jetzt anfragen und das passende Anbaugerät mieten.',
  },
];

/* Zertifikate & Nachweise — ausschließlich gesicherte Angaben, abgelesen aus dem
   Original-TÜV-SÜD-Zertifikat bzw. der statischen Berechnung (HFR Ingenieure). */
export const CERTIFICATES = {
  overline: 'Zertifikate & Nachweise',
  headline: 'Geprüft, dokumentiert, nachweisbar.',
  lead: 'Die Stahlbaufertigung in der Feickert-Unternehmensgruppe ist nach DIN EN 1090-2 bis zur höchsten Ausführungsklasse EXC3 zertifiziert. Die Tragfähigkeit unserer Lastaufnahme- und Adapterkonstruktionen wird zusätzlich per FE-Berechnung durch ein externes Ingenieurbüro nachgewiesen.',
  items: [
    {
      title: 'Werkseigene Produktionskontrolle nach EN 1090-2 · bis EXC3',
      desc: 'Konformität der werkseigenen Produktionskontrolle für tragende Bauteile und Bausätze für Stahltragwerke bis Ausführungsklasse EXC3.',
      rows: [
        ['Zertifikat-Nr.', '0036-CPR-1090-1.00867.TÜV SÜD.2020.003'],
        ['Prüfstelle', 'TÜV SÜD Industrie Service GmbH · Notified Body 0036'],
        ['Inhaber', 'Feickert Spezialtiefbau GmbH · Feickert-Unternehmensgruppe'],
        ['Erstausstellung', '31.07.2020'],
      ] as [string, string][],
      img: null as string | null, // Zertifikatsbild – sobald als Datei vorliegt, hier Dateiname eintragen
    },
    {
      title: 'Statischer Nachweis · FE-Berechnung',
      desc: 'Die Tragfähigkeit unserer Lastaufnahme- und Schnellwechsel-Adapterkonstruktionen wird per Finite-Elemente-Berechnung durch ein externes Ingenieurbüro für Tragwerksplanung nachgewiesen.',
      rows: [
        ['Verfahren', 'FE-/FEM-Berechnung, Nachweis im Grenzzustand der Tragfähigkeit'],
        ['Werkstoff', 'S355J2 (1.0570) · Bolzen 42CrMo4 (1.7225)'],
        ['Grundlage', 'DIN EN 1090-2 · Maschinenrichtlinie 2006/42/EG'],
      ] as [string, string][],
      img: null as string | null,
    },
  ],
  note: 'Zertifikatsinhaber ist die Feickert Spezialtiefbau GmbH als Teil der Feickert-Unternehmensgruppe – die EXC3-geprüfte Stahlbaufertigung steht damit auch FEGA-Aufträgen zur Verfügung.',
};

/* Service-Bild fürs Karten-/Kachelraster (null = Platzhalter). */
export const SVC_IMG: Record<string, string | null> = {
  maschinenbau: 'adapter-detail.jpg',
  metallbau: 'metallbau-ueberdachung.jpg',
  pumpentechnik: null,
  maschinenhandel: 'handel-umschlag.jpg',
  mietpark: 'mietgeraet.jpg',
};

export const ABOUT = {
  headline: 'Metall kennt keine Kompromisse.',
  lead: 'Seit 1980 bauen wir Metall, das auf der Baustelle steht, wenn es stehen soll: Metallprodukte, Geräteadapter, Anbaukonstruktionen. Normgerecht gefertigt, termingebunden geliefert, im Westerwald zu Hause.',
  paras: [
    'Seit 2019 fertigt und vertreibt unser Unternehmen Geräteadapter für diverse Erdbewegungsmaschinen unter Beachtung der DIN EN 1090-2 / EXC 3. Die Schnellwechsel-Adapter erfüllen die jüngsten technischen Anforderungen an Sicherheit und Nutzungsfreundlichkeit und die Bestimmungen der Maschinenrichtlinie 2006/42/EG.',
    'Als Handelsgesellschaft besitzen wir diverse Konzessionen zum Vertrieb von Baustellengerät. In diesem Geschäftssegment haben wir uns insbesondere auf den Verkauf und die Vermietung von Pumpen fokussiert. Seit 2016 bieten wir einen modernen Pumpenprüfstand zur Pumpenwartung und Reparatur (DGUV3).',
    'Im Umgang mit Kunden und Mitarbeitern legen wir Wert auf einen partnerschaftlichen Umgang. Als Familienbetrieb wollen wir vertrauensvolle Beziehungen, um beständig mit Freude zu arbeiten.',
  ],
  values: [
    { t: 'Fertigungsklasse EXC 3', d: 'Wir schweißen nach DIN EN 1090-2 / EXC 3: dokumentiert, reproduzierbar, prüfbar. Jedes Teil, jede Naht.' },
    { t: 'Termingebunden', d: 'Verbindliche Fertigungs- und Montagetermine. Kein Raten, keine Überraschungen auf der Baustelle.' },
    { t: 'Ein Ansprechpartner', d: 'Konstruktion, Fertigung, Montage, Prüfung. Ein Kontakt, eine Verantwortung.' },
    { t: 'Maschinenrichtlinie', d: 'Adapter nach Maschinenrichtlinie 2006/42/EG. Sicherheit ist kein Kompromiss, sie ist die Grundlage.' },
    { t: 'Der Kunde steht an erster Stelle', d: 'Metall ist unsere Leidenschaft – und partnerschaftlicher, verlässlicher Umgang die Grundlage. Als Familienbetrieb bauen wir auf langfristige Beziehungen.' },
  ],
  timeline: [
    { y: '1980', t: 'Gründung', d: 'Partner für Metallbau und Bauschlosserarbeiten in der Region.' },
    { y: '2016', t: 'Pumpenprüfstand', d: 'Moderner Prüfstand für Pumpenwartung und Reparatur (DGUV3).' },
    { y: '2019', t: 'Geräteadapter', d: 'Fertigung und Vertrieb von Schnellwechsel-Adaptern, DIN EN 1090-2 / EXC 3.' },
  ],
  stats: [
    { v: '1980', l: 'Gegründet' }, { v: '5', l: 'Leistungsbereiche' },
    { v: 'EXC 3', l: 'Fertigungsklasse' }, { v: '3', l: 'Generationen Feickert' },
  ],
};

export const GROUP = {
  name: 'Feickert Unternehmensgruppe', seat: 'Weilburg / Lahn',
  motto: 'Wir leben Bau. Seit drei Generationen.',
  lead: 'FEGA gehört zur Feickert-Unternehmensgruppe – einem der führenden mittelständischen Tiefbauunternehmen Deutschlands mit Sitz in Weilburg/Lahn.',
  paras: [
    'Feickert Bauunternehmen steht seit 1947 für Kanal- und Wasserleitungsbau sowie Spezialtiefbau im gesamten Bundesgebiet und in Luxemburg. Das Unternehmen wird in der dritten Generation zu 100 % von der Familie Feickert geführt – mit kurzen Entscheidungswegen und kontinuierlichen Investitionen in moderne Technik.',
    'Für FEGA bedeutet das: direkter Zugang zum Maschinenpark, erprobtes Tiefbau-Know-how aus dem täglichen Einsatz und die Sicherheit einer wachsenden Unternehmensgruppe im Rücken.',
  ],
  leistungen: [
    { t: 'Kanal- & Wasserleitungsbau', d: 'Planung und Bau von Kanälen, Druckleitungen und Hausanschlüssen – bundesweit.',
      points: ['Schmutz- & Regenwasserkanäle', 'Trink- & Druckwasserleitungen', 'Haus- & Grundstücksanschlüsse'] },
    { t: 'Spezialtiefbau', d: 'Verbau, Pfahlgründungen, Horizontalbohrungen und Sonderverfahren im Spezialtiefbau.',
      points: ['Verbau & Baugrubensicherung', 'Pfahl- & Tiefgründungen', 'Horizontal- & Pressbohrungen'] },
    { t: 'Allgemeiner Ingenieurbau', d: 'Stützwände, Brückenbau und konstruktiver Ingenieurbau für öffentliche und private Auftraggeber.',
      points: ['Stütz- & Winkelstützwände', 'Brücken- & Durchlassbau', 'Konstruktiver Ingenieurbau'] },
  ],
  firms: [
    { name: 'Walter Feickert GmbH', region: 'Hessen / Rhein-Main' },
    { name: 'Rudolf Feickert GmbH', region: 'Sachsen-Anhalt / Harz' },
    { name: 'Reinhard Feickert GmbH', region: 'Thüringen / Mainfranken' },
    { name: 'Feickert Spezialtiefbau GmbH', region: 'Deutschlandweit' },
    { name: 'Feilux GmbH', region: 'Luxemburg' },
  ],
  facts: [
    { v: '1947', l: 'Gegründet' }, { v: '3.', l: 'Generation' },
    { v: '95 Mio. €', l: 'Umsatz 2024' }, { v: '5', l: 'Gesellschaften' },
  ],
  competenceImgs: ['tiefbau-rohr.jpg', 'tiefbau-casing.jpg', 'feickert-bagger.jpg'],
};

export interface Job {
  id: string;
  title: string;
  mwd: string;
  type: string;
  ort: string;
  desc: string;
  company: 'FEGA' | 'Feickert';
  intro?: string;
  aufgaben?: string[];
  profil?: string[];
  benefits?: string[];
  external?: string; // externe Stellen-URL (Feickert-Gruppe)
}

export const JOBS: Job[] = [
  // ── FEGA GmbH (eigene Stellen, Du-Ansprache) ──
  {
    id: 'metallfacharbeiter', title: 'Metallfacharbeiter in der Produktion', mwd: 'm/w/d', type: 'Vollzeit', ort: 'Weilburg/Lahn', company: 'FEGA',
    desc: 'Du übernimmst Aufgaben im Stahlbau, Anbau, Austrenn- und Anpassungsarbeiten sowie Fugen- und Brennarbeiten.',
    intro: 'Als Metallfacharbeiter (m/w/d) bist du in unserer Produktion das Rückgrat der Fertigung – von der Rohstahlbearbeitung bis zum geprüften Bauteil.',
    aufgaben: ['Stahlbau- und Anbauarbeiten an Geräteadaptern und Anbaukonstruktionen', 'Austrenn- und Anpassungsarbeiten nach technischer Zeichnung', 'Fugen-, Brenn- und Schweißarbeiten', 'Sicht- und Maßkontrolle der gefertigten Teile'],
    profil: ['Abgeschlossene Ausbildung als Metallbauer, Konstruktionsmechaniker o. ä.', 'Schweißkenntnisse (MAG/WIG) von Vorteil', 'Lesen technischer Zeichnungen', 'Sorgfalt, Teamfähigkeit und Zuverlässigkeit'],
    benefits: ['Sicherer Arbeitsplatz in einer starken Unternehmensgruppe', 'Moderne Maschinen- und Geräteausstattung', 'Leistungsgerechte Vergütung', 'Kurze Wege und ein eingespieltes Team'],
  },
  {
    id: 'ausbildung-metallbauer', title: 'Ausbildung zum Metallbauer', mwd: 'm/w/d', type: 'Ausbildung', ort: 'Weilburg/Lahn', company: 'FEGA',
    desc: 'Die Tätigkeiten eines Metallbauers sind vielfältig. Du arbeitest mit verschiedensten Metallen und erschaffst Konstruktionen, die noch Jahrzehnte bestehen.',
    intro: 'Starte deine Ausbildung dort, wo Metall zu Hause ist. Du lernst das Handwerk von Grund auf – an echten Projekten und mit erfahrenen Kollegen an deiner Seite.',
    aufgaben: ['Bearbeiten und Umformen verschiedenster Metalle', 'Schweißen, Trennen, Bohren und Montieren', 'Lesen und Umsetzen technischer Zeichnungen', 'Mitarbeit an Geräteadaptern, Treppen, Geländern und Überdachungen'],
    profil: ['Mindestens Hauptschulabschluss', 'Handwerkliches Geschick und Interesse an Technik', 'Zuverlässigkeit und Lernbereitschaft', 'Freude an der Arbeit im Team'],
    benefits: ['Übernahmechancen nach erfolgreicher Ausbildung', 'Persönliche Betreuung während der gesamten Lehrzeit', 'Abwechslungsreiche, praxisnahe Ausbildung', 'Perspektive in einer wachsenden Gruppe'],
  },
  {
    id: 'schweisser-schlosser', title: 'Schweißer / Schlosser', mwd: 'm/w/d', type: 'Vollzeit', ort: 'Weilburg/Lahn', company: 'FEGA',
    desc: 'Du fertigst und montierst Stahlkonstruktionen und Anbauteile – sauber, maßhaltig und nach Norm.',
    intro: 'Du beherrschst dein Handwerk und arbeitest gerne genau? Dann verstärke unser Team in der Fertigung von Adaptern, Anbaukonstruktionen und Metallbau.',
    aufgaben: ['Schweißen von Stahlkonstruktionen (MAG/WIG)', 'Schlosser- und Montagearbeiten', 'Fertigung nach Zeichnung und Norm (DIN EN 1090-2)', 'Qualitäts- und Maßprüfung der eigenen Arbeit'],
    profil: ['Ausbildung als Schweißer, Schlosser oder Metallbauer', 'Gültige Schweißerprüfungen von Vorteil', 'Selbstständige, präzise Arbeitsweise', 'Bereitschaft zu gelegentlicher Montage vor Ort'],
    benefits: ['Unbefristete Anstellung', 'Moderne Schweiß- und Fertigungstechnik', 'Faire Bezahlung und geregelte Arbeitszeiten', 'Kollegiales Umfeld in einem Familienbetrieb'],
  },
  // ── Feickert-Unternehmensgruppe (Tiefbau) — Details & Bewerbung auf feickert-bau.de ──
  {
    id: 'feickert-facharbeiter', title: 'Facharbeiter Tiefbau', mwd: 'm/w/d', type: 'Vollzeit', ort: 'Rhein-Main-Gebiet', company: 'Feickert',
    desc: 'Schwerer Kanalbau, Wasserleitungsbau und Straßenbau im Rhein-Main-Gebiet.',
    external: 'https://www.feickert-bau.de/facharbeiter-tiefbau-35781-weilburg-hessen-m-w-d/',
  },
  {
    id: 'feickert-spezialtiefbauer', title: 'Spezialtiefbauer', mwd: 'm/w/d', type: 'Vollzeit', ort: 'Rhein-Main / Luxemburg', company: 'Feickert',
    desc: 'Einsätze im Spezialtiefbau im Rhein-Main-Gebiet oder in Luxemburg.',
    external: 'https://www.feickert-bau.de/spezialtiefbauer-35781-weilburg-hessen-m-w-d/',
  },
  {
    id: 'feickert-kanalbauer', title: 'Kanalbauer', mwd: 'm/w/d', type: 'Vollzeit', ort: 'Weilburg/Hessen', company: 'Feickert',
    desc: 'Kanal- und Wasserleitungsbau im Tiefbau.',
    external: 'https://www.feickert-bau.de/kanalbauer-35781-weilburg-hessen/',
  },
  {
    id: 'feickert-baggerfahrer', title: 'Baggerfahrer Tiefbau', mwd: 'm/w/d', type: 'Vollzeit', ort: 'Weilburg/Hessen', company: 'Feickert',
    desc: 'Bedienung von Baggern für Tiefbauarbeiten.',
    external: 'https://www.feickert-bau.de/baggerfahrer-tiefbau-35781-weilburg-hessen/',
  },
  {
    id: 'feickert-bauleiter', title: 'Bauleiter Tiefbau', mwd: 'm/w/d', type: 'Vollzeit', ort: 'Rhein-Main / Weilburg', company: 'Feickert',
    desc: 'Leitung von Baustellen im Rhein-Main-Gebiet, Büroaufgaben in Weilburg-Gaudernbach.',
    external: 'https://www.feickert-bau.de/bauleiter-tiefbau-35781-weilburg-hessen/',
  },
  {
    id: 'feickert-bauabrechner', title: 'Bauabrechner Tiefbau', mwd: 'm/w/d', type: 'Vollzeit', ort: 'Weilburg/Gaudernbach', company: 'Feickert',
    desc: 'Rechnungslegung auf Baustellen und Büroaufgaben im Tiefbau.',
    external: 'https://www.feickert-bau.de/bauabrechner-tiefbau-weilburg-hessen-m-w-d/',
  },
  {
    id: 'feickert-bauzeichner', title: 'Bauzeichner Tiefbau', mwd: 'm/w/d', type: 'Vollzeit', ort: 'Weilburg/Hessen', company: 'Feickert',
    desc: 'Erstellung technischer Zeichnungen im Tiefbau.',
    external: 'https://www.feickert-bau.de/bauzeichner-m-w-d-tiefbau-weilburg-hessen/',
  },
];

export interface Reference {
  img: string; // Dateiname
  cat: string;
  t: string;
}

export const REFERENCES: Reference[] = [
  { img: 'adapter-detail.jpg', cat: 'Maschinenbau', t: 'Schnellwechsel-Adapter im Einsatz' },
  { img: 'metallbau-ueberdachung.jpg', cat: 'Metallbau', t: 'Überdachung in Stahlbauweise' },
  { img: 'adapter-baustelle.jpg', cat: 'Maschinenbau', t: 'Geräteadapter am Trägergerät' },
  { img: 'metallbau-treppe-innen.jpg', cat: 'Metallbau', t: 'Treppe & Geländer, Innenausbau' },
  { img: 'fertigung-rahmen.jpg', cat: 'Maschinenbau', t: 'Anbaukonstruktion, gefertigt im Haus' },
  { img: 'metallbau-treppe-aussen.jpg', cat: 'Metallbau', t: 'Außentreppe mit Geländer' },
  { img: 'adapter-bohrgeraet.jpg', cat: 'Maschinenbau', t: 'Adapter am Bohrgerät' },
  { img: 'metallbau-rampe.jpg', cat: 'Metallbau', t: 'Barrierefreie Rampenanlage' },
  { img: 'feickert-bagger.jpg', cat: 'Feickert', t: 'Tiefbau in der Unternehmensgruppe' },
];

/* Karriere — Branchenführer-Struktur. Benefits/Ansprechpartner: Platzhalter. */
export const KARRIERE = {
  hero: {
    overline: 'Karriere bei FEGA',
    title: 'Hands-on gesucht.',
    lead: 'Schweißen, montieren, konstruieren — bei FEGA arbeitest du an Teilen, die auf echten Baustellen stehen. Kein Schreibtisch. Echte Arbeit, die Jahrzehnte hält.',
    trust: ['Familienbetrieb seit 1980', 'Teil der Feickert-Gruppe', 'Standort Weilburg/Lahn'],
  },
  facts: [
    { v: '1980', l: 'Familienbetrieb seit' },
    { v: '3', l: 'Generationen Feickert' },
    { v: '5', l: 'Einsatzbereiche' },
    { v: '30', l: 'Tage Urlaub' },
  ],
  pillars: [
    { no: '01', t: 'Moderner Maschinenpark', d: 'CNC-Brennschneiden, MAG/WIG-Schweißanlagen und digitale Messtechnik. Du arbeitest mit Technik auf der Höhe der Zeit.' },
    { no: '02', t: 'Team statt Betrieb', d: 'Direkte Wege, flache Hierarchien. Bei FEGA kennt jeder jeden — und wer Verantwortung trägt, bekommt sie auch.' },
    { no: '03', t: 'Feickert-Rückhalt', d: 'Als Teil der Feickert-Unternehmensgruppe stehen dir Stabilität und Perspektiven offen, die ein einzelner Betrieb nicht bieten kann.' },
  ],
  benefits: [
    { t: '30 Tage Urlaub', d: 'Plus Sonderurlaub zu besonderen Anlässen.' },
    { t: 'Betriebliche Altersvorsorge', d: 'Wir legen für deine Rente etwas drauf.' },
    { t: 'Weihnachts- & Urlaubsgeld', d: 'Jahressonderzahlungen, planbar und fair.' },
    { t: 'JobRad & Bike-Leasing', d: 'Dein Wunschrad günstig über die Firma.' },
    { t: 'Sicherer Arbeitsplatz', d: 'Rückhalt einer wachsenden Unternehmensgruppe.' },
    { t: 'Moderne Ausstattung', d: 'Maschinen, Werkzeug und Arbeitskleidung gestellt.' },
    { t: 'Weiterbildung', d: 'Schweißprüfungen, Lehrgänge und Qualifizierung.' },
    { t: 'Kurze Wege', d: 'Flache Hierarchien, schnelle Entscheidungen.' },
    { t: 'Mitarbeitershop & Vorteile', d: 'Vergünstigungen über Gruppe und Partner.' },
  ],
  paths: [
    { tag: 'Ausbildung', t: 'Ausbildung zum Metallbauer', d: 'Lerne das Handwerk von Grund auf — an echten Projekten, mit erfahrenen Kollegen an deiner Seite.', action: 'job', target: 'ausbildung-metallbauer', cta: 'Zur Ausbildungsstelle', featured: true },
    { tag: 'Berufserfahrene', t: 'Fachkräfte in Fertigung & Montage', d: 'Schweißer, Schlosser, Metallfacharbeiter: Bring dein Können dort ein, wo Präzision zählt.', action: 'jobs', cta: 'Offene Stellen' },
    { tag: 'Quereinstieg', t: 'Quer- & Wiedereinsteiger', d: 'Handwerkliches Geschick und Motivation? Wir lernen dich ein und qualifizieren dich weiter.', action: 'mail', cta: 'Initiativ bewerben' },
  ] as { tag: string; t: string; d: string; action: 'job' | 'jobs' | 'mail'; target?: string; cta: string; featured?: boolean }[],
  process: [
    { no: '01', t: 'Bewerbung senden', d: 'Schnellbewerbung direkt an der Stelle oder per E-Mail. Für den ersten Schritt reicht ein Lebenslauf.' },
    { no: '02', t: 'Schnelle Rückmeldung', d: 'Wir sichten deine Unterlagen und melden uns in der Regel innerhalb weniger Tage.' },
    { no: '03', t: 'Persönliches Kennenlernen', d: 'Gespräch und Rundgang durch die Fertigung — du siehst, wo und mit wem du arbeitest.' },
    { no: '04', t: 'Vertrag & Start', d: 'Passt es für beide Seiten, klären wir die Details und stimmen deinen Starttermin ab.' },
  ],
  contact: {
    name: 'Bewerbung & Personal',
    role: 'Feickert-Unternehmensgruppe · FEGA GmbH',
    note: 'Fragen vor der Bewerbung? Ruf an oder schreib kurz — wir helfen dir gern weiter.',
    phone: COMPANY.phone,
    phoneHref: COMPANY.phoneHref,
    email: 'bewerbung@feickert-bau.de',
  },
  faq: [
    { q: 'Welche Unterlagen brauche ich für die Bewerbung?', a: 'Für den ersten Schritt genügt ein Lebenslauf. Zeugnisse und Nachweise kannst du später nachreichen.' },
    { q: 'Wie schnell bekomme ich eine Rückmeldung?', a: 'In der Regel innerhalb weniger Tage. Bei hohem Aufkommen kann es etwas länger dauern — wir melden uns in jedem Fall.' },
    { q: 'Kann ich mich initiativ bewerben?', a: 'Ja. Auch ohne passende Ausschreibung freuen wir uns über deine Initiativbewerbung per E-Mail.' },
    { q: 'Bietet ihr Praktika oder Probearbeiten an?', a: 'Ja. Schnupper- und Praktikumstage sind nach Absprache möglich — gerade für Schulabgänger ein guter Einstieg.' },
    { q: 'Arbeite ich nur in der Werkstatt oder auch auf Montage?', a: 'Je nach Position. Die Fertigung findet überwiegend in Weilburg statt, Montagen gelegentlich vor Ort in der Region.' },
    { q: 'Ab wann kann ich anfangen?', a: 'Der Starttermin wird individuell abgestimmt. Ausbildungsstellen beginnen in der Regel zum 1. August.' },
  ],
};

/* Ausbildung in der Feickert-Unternehmensgruppe (Muttergesellschaft von FEGA).
   Quelle: feickert-bau.de/wir-bilden-aus/ — 1:1 übernommen, Du-Ansprache. */
export const AUSBILDUNG = {
  overline: 'Ausbildung in der Feickert-Gruppe',
  title: 'Die Ausbildung bei Feickert',
  parentNote:
    'FEGA ist Teil der Feickert-Unternehmensgruppe – unserer Muttergesellschaft. Über die Gruppe stehen dir an mehreren Standorten zusätzliche Ausbildungswege im Bau offen, weit über den Metallbau hinaus.',
  lead:
    'Eine gute Ausbildung ist ein wichtiger Baustein für deine berufliche Zukunft. Über drei Jahre lernst du sowohl in der Schule die Theorie als auch in einem unserer Betriebe die Praxis deines Handwerks. Damit legen wir den Grundstein für deine berufliche Entwicklung.',
  steps: [
    {
      no: 'Schritt 1',
      t: 'Im Praktikum lernen wir uns kennen',
      d: 'Der Start in eine Ausbildung gelingt am besten, wenn du vorher etwas vom Unternehmensalltag gesehen hast. In einem Praktikum kannst du dein neues Berufsziel genauer kennenlernen – wir lernen dich kennen und du uns.',
    },
    {
      no: 'Schritt 2',
      t: 'In der Ausbildung wirst du Teil des Teams',
      d: 'Starte deinen Weg auf dem Bau, lerne neue Techniken und Geräte kennen und arbeite in einem Umfeld, in dem es auf deine Leistung ankommt. Jeder Einzelne ist wichtig und trägt seinen Teil zum Ganzen bei – das gilt auch für unsere Auszubildenden.',
    },
  ],
  standorte: [
    { region: 'Feickert Hessen', gaenge: ['Baugeräteführer', 'Maurer', 'Kanalbauer', 'Rohrleitungsbauer', 'Spezialtiefbauer', 'Straßenbauer', 'Industriekauffrau/Industriekaufmann', 'Fachinformatiker – Fachrichtung Systemintegration'] },
    { region: 'Feickert Sachsen-Anhalt', gaenge: ['Baugeräteführer', 'Kanalbauer', 'Rohrleitungsbauer', 'Straßenbauer'] },
    { region: 'Feickert Thüringen', gaenge: ['Baugeräteführer', 'Kanalbauer', 'Maurer', 'Rohrleitungsbauer', 'Straßenbauer'] },
  ],
  dual: {
    title: 'Noch ein Schritt? Duales Studium',
    lead: 'Umfassende Ausbildung, verbunden mit einer langfristigen beruflichen Perspektive. Im Bereich des Dualen Studiums bieten wir zwei Varianten an:',
    variants: [
      {
        t: 'a) Ausbildungsvergütung, verbunden mit dem Studiengang Bauingenieur (Bachelor/Master)',
        points: [
          'Dreijährige Berufsausbildung zum Baufacharbeiter in Ausbildungszentren und Berufsschulen (z. B. BBZ Frankfurt, BBZ Magdeburg, BBZ Weimar – je nach Kapazität des BBZ) sowie in einem der Unternehmen der Feickert-Gruppe',
          'Parallel dazu Vorlesungen in kooperierenden Universitäten (z. B. Goethe-Universität Frankfurt, Universität Kassel, Hochschule Magdeburg-Stendal, Fachhochschule Erfurt)',
          'Nach Abschluss der Gesellenprüfung ein Hochschulstudium bis zum Erreichen des Bachelors',
          'Ausbildungsvergütung nach Tarifvertrag (Stand 2023): 1. Lehrjahr 935 EUR · 2. Lehrjahr 1230 EUR · 3. Lehrjahr 1495 EUR · 4. Lehrjahr 1580 EUR',
        ],
      },
      {
        t: 'b) Studienkredit für den Studiengang Bauingenieur (Bachelor/Master)',
        points: [
          'Monatliche Förderung zur Studienunterstützung an einer beliebigen Universität/FH',
          'Praktikum im Unternehmen während des Studiums',
          'Unterstützung mit 1580 EUR pro Monat (bei Abbruch ohne Verschulden der Firma keine Rückzahlung der Unterstützungsleistungen)',
        ],
      },
    ],
  },
  contacts: [
    { region: 'Hessen', name: 'Andre Schilbock', email: 'andre.schilbock@feickert-bau.de', phone: '06471/502169' },
    { region: 'Sachsen-Anhalt', name: 'Susanne Hunold', email: 'susanne.hunold@feickert-bau.de', phone: '034743/96470' },
    { region: 'Thüringen', name: 'Lars Erbach', email: 'lars.erbach@feickert-bau.de', phone: '036200/634610' },
  ],
  applyUrl: 'https://www.feickert-bau.de/wir-bilden-aus/',
};

/* Ansprechpartner / Team — aus der FEGA-Firmenvorstellung (öffentlich). */
export const TEAM = {
  overline: 'Ansprechpartner',
  title: 'Ihr direkter Draht zu FEGA.',
  lead: 'Kein Callcenter, keine Warteschleife: Sprechen Sie direkt mit den Menschen, die Ihr Anliegen bearbeiten.',
  members: [
    { name: 'Axel Schupp', role: 'Geschäftsführung', email: 'axel.schupp@feickert-bau.de' },
    { name: 'Chris Wettstein', role: 'Produktionsleiter Maschinenbau', email: 'chris.wettstein@feickert-bau.de' },
    { name: 'Patrick Störzel', role: 'Innendienst Maschinenbau', email: 'patrick.stoerzel@feickert-bau.de' },
    { name: 'Oliver Schäfer', role: 'Konstruktion & Entwicklung', email: 'oliver.schaefer@feickert-bau.de' },
    { name: 'Muhammed Akyol', role: 'Technischer Leiter Metallbau', email: 'muhammed.akyol@feickert-bau.de' },
    { name: 'Eberhard Börner', role: 'Metallbau · Planung & Konstruktion', email: 'eberhard.boerner@feickert-bau.de' },
    { name: 'Kim Winkler', role: 'Elektromeister', email: 'kim-dennis.winkler@feickert-bau.de' },
  ],
};

export interface LegalLink {
  label: string;
  page?: string;
  href?: string;
}

export const LEGAL: LegalLink[] = [
  { label: 'Impressum', page: 'impressum' },
  { label: 'Datenschutz', page: 'datenschutz' },
  { label: 'AGB', page: 'agb' },
  { label: 'Mietbedingungen', href: 'https://fega-metallbau.de/wp-content/uploads/2024/04/FEGA-Mietbedingungen.pdf' },
];

export const IMPRESSUM = {
  entity: 'FVB Feickert Verwaltungs und Beteiligungs GmbH',
  note: 'Betreiberin dieser Website im Rahmen der Feickert-Unternehmensgruppe.',
  address: ['Hermann-Stoll-Straße 1', '35781 Weilburg/Lahn', 'Deutschland'],
  contact: [['Telefon', '06471/5 02-0'], ['Fax', '06471/5 21 67']] as [string, string][],
  register: [['Registergericht', 'Amtsgericht Limburg'], ['Handelsregister', 'Weilburg Nr. HRB 3326'], ['USt-IdNr.', 'DE 200791987']] as [string, string][],
  gf: ['Dipl.-Ing. MA Rudolf Feickert', 'Dipl.-Ing. Ragnar Feickert', 'Axel Schupp'],
  sections: [
    { h: 'Urheberrecht', p: [
      'Copyright by FVB Feickert Verwaltungs und Beteiligungs GmbH 2016.',
      'Alle Rechte vorbehalten. Die auf der Website verwendeten Texte, Bilder, Grafiken, Dateien usw. unterliegen dem Urheberrecht und anderen Gesetzen zum Schutz des geistigen Eigentums. Ihre Weitergabe, Veränderung, gewerbliche Nutzung oder Verwendung in anderen Websites oder Medien ist nicht gestattet.',
    ] },
    { h: 'Hinweis gemäß Teledienstgesetz', p: [
      'Für Websites Dritter, auf die der Herausgeber durch sogenannte Links verweist, tragen die jeweiligen Anbieter die Verantwortung. Der Herausgeber ist für den Inhalt solcher Sites Dritter nicht verantwortlich. Des weiteren kann die Website des Herausgebers ohne dessen Wissen von anderen Websites mittels sogenannter Links angelinkt werden. Der Herausgeber übernimmt keine Verantwortung für Darstellungen, Inhalt oder irgendeine Verbindung zur Parteigliederung des Herausgebers in Websites Dritter.',
      'Für fremde Inhalte ist der Herausgeber nur dann verantwortlich, wenn er von ihnen (d.h. auch von einem rechtswidrigen oder strafbaren Inhalt) positive Kenntnis hat und es dem Herausgeber technisch möglich und zumutbar ist, deren Nutzung zu verhindern. Der Herausgeber ist nach dem Teledienstgesetz jedoch nicht verpflichtet, die fremden Inhalte ständig zu überprüfen.',
    ] },
  ],
};

export const DATENSCHUTZ = {
  intro: 'Im Folgenden informieren wir über die Erhebung personenbezogener Daten bei Nutzung unserer Website und zur Teilnahme an unserem Bewerbungsverfahren. Personenbezogene Daten sind alle Daten, die auf Sie persönlich beziehbar sind, z. B. Name, Adresse, E-Mail-Adressen, Nutzerverhalten.',
  sections: [
    { h: '§ 1 Allgemeines und Verantwortlicher', p: [
      'Verantwortlicher gem. Art. 4 Abs. 7 EU-Datenschutz-Grundverordnung (DS-GVO) ist die FVB Feickert Verwaltungs und Beteiligungs GmbH, Hermann-Stoll-Straße 1, 35781 Weilburg/Lahn, Tel.: 06471/5 02-0, Fax: 06471/5 21, vertreten durch die Geschäftsführer Dipl. Ing. MA Rudolf Feickert; Dipl. Ing. Ragnar Feickert.',
      'Unseren Datenschutzbeauftragten, Herrn Rechtsanwalt Jörn Menzel, erreichen Sie unter Jörn Menzel Datenschutzkonzepte, Badstr. 1, 57072 Siegen, Tel.: 0271/56038, Fax: 0271/20838, oder dsb@dsgvo-konzepte.de.',
      'Bei Ihrer Kontaktaufnahme mit uns per E-Mail oder über ein Kontaktformular werden die von Ihnen mitgeteilten Daten (Ihre E-Mail-Adresse, ggf. Ihr Name und Ihre Telefonnummer) von uns gespeichert, um Ihre Fragen zu beantworten. Die in diesem Zusammenhang anfallenden Daten löschen wir, nachdem die Speicherung nicht mehr erforderlich ist, oder schränken die Verarbeitung ein, falls gesetzliche Aufbewahrungspflichten bestehen.',
      'Falls wir für einzelne Funktionen unseres Angebots auf beauftragte Dienstleister zurückgreifen oder Ihre Daten für werbliche Zwecke nutzen möchten, werden wir Sie untenstehend im Detail über die jeweiligen Vorgänge informieren. Dabei nennen wir auch die festgelegten Kriterien der Speicherdauer.',
    ] },
    { h: '§ 2 Ihre Rechte', p: [
      'Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten: Recht auf Auskunft, Recht auf Berichtigung oder Löschung, Recht auf Einschränkung der Verarbeitung, Recht auf Widerspruch gegen die Verarbeitung sowie Recht auf Datenübertragbarkeit.',
      'Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.',
    ] },
    { h: '§ 3 Erhebung personenbezogener Daten bei Besuch unserer Website', p: [
      'Bei der bloß informatorischen Nutzung der Website, also wenn Sie sich nicht registrieren oder uns anderweitig Informationen übermitteln, erheben wir nur die personenbezogenen Daten, die Ihr Browser an unseren Server übermittelt. Wenn Sie unsere Website betrachten möchten, erheben wir die folgenden Daten, die für uns technisch erforderlich sind, um Ihnen unsere Website anzuzeigen und die Stabilität und Sicherheit zu gewährleisten (Rechtsgrundlage ist Art. 6 Abs. 1 S. 1 lit. f DS-GVO): IP-Adresse, Datum und Uhrzeit der Anfrage, Zeitzonendifferenz zur Greenwich Mean Time (GMT), Inhalt der Anforderung (konkrete Seite), Zugriffsstatus/HTTP-Statuscode, jeweils übertragene Datenmenge, Website von der die Anforderung kommt, Browser, Betriebssystem und dessen Oberfläche, Sprache und Version der Browsersoftware.',
      'Zusätzlich zu den zuvor genannten Daten werden bei Ihrer Nutzung unserer Website Cookies auf Ihrem Rechner gespeichert. Bei Cookies handelt es sich um kleine Textdateien, die auf Ihrer Festplatte dem von Ihnen verwendeten Browser zugeordnet gespeichert werden und durch welche der Stelle, die den Cookie setzt (hier durch uns), bestimmte Informationen zufließen. Cookies können keine Programme ausführen oder Viren auf Ihren Computer übertragen. Sie dienen dazu, das Internetangebot insgesamt nutzerfreundlicher und effektiver zu machen.',
      'Einsatz von Cookies: Diese Website nutzt transiente und persistente Cookies. Transiente Cookies werden automatisiert gelöscht, wenn Sie den Browser schließen. Dazu zählen insbesondere die Session-Cookies. Diese speichern eine sogenannte Session-ID, mit welcher sich verschiedene Anfragen Ihres Browsers der gemeinsamen Sitzung zuordnen lassen. Persistente Cookies werden automatisiert nach einer vorgegebenen Dauer gelöscht, die sich je nach Cookie unterscheiden kann. Sie können die Cookies in den Sicherheitseinstellungen Ihres Browsers jederzeit löschen.',
      'Sie können Ihre Browser-Einstellung entsprechend Ihren Wünschen konfigurieren und z. B. die Annahme von Third-Party-Cookies oder allen Cookies ablehnen. Wir weisen Sie darauf hin, dass Sie eventuell nicht alle Funktionen dieser Website nutzen können. Die genutzten Flash-Cookies werden nicht durch Ihren Browser erfasst, sondern durch Ihr Flash-Plug-in. Weiterhin nutzen wir HTML5 storage objects, die auf Ihrem Endgerät abgelegt werden. Die Nutzung von HTML5 storage objects können Sie verhindern, indem Sie in Ihrem Browser den privaten Modus einsetzen.',
    ] },
    { h: '§ 4 Weitere Funktionen und Angebote unserer Website', p: [
      'Neben der rein informatorischen Nutzung unserer Website bieten wir verschiedene Leistungen an, die Sie bei Interesse nutzen können. Dazu müssen Sie in der Regel weitere personenbezogene Daten angeben, die wir zur Erbringung der jeweiligen Leistung nutzen und für die die zuvor genannten Grundsätze zur Datenverarbeitung gelten. Teilweise bedienen wir uns zur Verarbeitung Ihrer Daten externer Dienstleister. Diese wurden von uns sorgfältig ausgewählt und beauftragt, sind an unsere Weisungen gebunden und werden regelmäßig kontrolliert.',
      'Diese Seite verwendet zur Darstellung der Schrift sogenannte Webfonts, die von Google bereitgestellt werden (http://www.google.com/webfonts/). Dazu lädt beim Aufrufen unserer Seite Ihr Browser die benötigte Webfont in Ihren Browsercache. Wenn Ihr Browser diese Funktion nicht unterstützt, wird eine Standardschrift von Ihrem Computer zur Anzeige genutzt. Weitergehende Informationen zu Google Webfonts finden Sie unter https://developers.google.com/fonts/faq und zum Datenschutz bei Google unter http://www.google.com/intl/de-DE/policies/privacy/.',
    ] },
    { h: '§ 5 Widerspruch oder Widerruf gegen die Verarbeitung Ihrer Daten', p: [
      'Falls Sie eine Einwilligung zur Verarbeitung Ihrer Daten erteilt haben, können Sie diese jederzeit widerrufen. Ein solcher Widerruf beeinflusst die Zulässigkeit der Verarbeitung Ihrer personenbezogenen Daten, nachdem Sie ihn gegenüber uns ausgesprochen haben.',
      'Soweit wir die Verarbeitung Ihrer personenbezogenen Daten auf die Interessenabwägung stützen, können Sie Widerspruch gegen die Verarbeitung einlegen. Bei Ausübung eines solchen Widerspruchs bitten wir um Darlegung der Gründe, weshalb wir Ihre personenbezogenen Daten nicht wie von uns durchgeführt verarbeiten sollten. Im Falle Ihres begründeten Widerspruchs prüfen wir die Sachlage und werden entweder die Datenverarbeitung einstellen bzw. anpassen oder Ihnen unsere zwingenden schutzwürdigen Gründe aufzeigen, aufgrund derer wir die Verarbeitung fortführen.',
      'Selbstverständlich können Sie der Verarbeitung Ihrer personenbezogenen Daten für Zwecke der Werbung und Datenanalyse jederzeit widersprechen. Über Ihren Werbewiderspruch können Sie uns unter folgenden Kontaktdaten informieren: FVB Feickert Verwaltungs und Beteiligungs GmbH, Hermann-Stoll-Straße 1, 35781 Weilburg/Lahn, Tel.: 06471/5 02-0, Fax: 06471/5 21.',
    ] },
    { h: '§ 6 Social Media', p: [
      'Wir setzen derzeit folgende Social-Media-Plug-ins ein: Facebook, LinkedIn. Wir nutzen dabei die sog. Zwei-Klick-Lösung. Das heißt, wenn Sie unsere Seite besuchen, werden zunächst grundsätzlich keine personenbezogenen Daten an die Anbieter der Plug-ins weitergegeben. Nur wenn Sie auf das markierte Feld klicken und es dadurch aktivieren, erhält der Plug-in-Anbieter die Information, dass Sie die entsprechende Website unseres Online-Angebots aufgerufen haben. Rechtsgrundlage für die Nutzung der Plug-ins ist Art. 6 Abs. 1 S. 1 lit. f DS-GVO.',
      'Adressen der Plug-in-Anbieter: Facebook Inc., 1601 S California Ave, Palo Alto, California 94304, USA (http://www.facebook.com/policy.php); LinkedIn Corporation, 2029 Stierlin Court, Mountain View, California 94043, USA (http://www.linkedin.com/legal/privacy-policy).',
      'AddThis-Bookmarking: Unsere Webseiten enthalten zudem AddThis-Plug-ins, die das Setzen von Bookmarks bzw. das Teilen von Inhalten ermöglichen. Über diese Plug-ins baut Ihr Internetbrowser eine direkte Verbindung mit den Servern von AddThis auf. Wenn Sie nicht an diesem Verfahren teilnehmen möchten, können Sie der Datenerhebung jederzeit durch Setzen eines Opt-out-Cookies widersprechen: http://www.addthis.com/privacy/opt-out. Anbieter: AddThis LLC, 1595 Spring Hill Road, Suite 300, Vienna, VA 22182, USA.',
      'Einbindung von YouTube-Videos: Wir haben YouTube-Videos im „erweiterten Datenschutz-Modus“ eingebunden, d. h. es werden keine Daten über Sie an YouTube übertragen, wenn Sie die Videos nicht abspielen. Erst wenn Sie ein Video abspielen, erhält YouTube die unter § 3 genannten Daten. Weitere Informationen: https://www.google.de/intl/de/policies/privacy.',
      'Einbindung von Google Maps: Auf dieser Webseite nutzen wir das Angebot von Google Maps, um Ihnen interaktive Karten direkt in der Website anzuzeigen. Durch den Besuch erhält Google die unter § 3 genannten Daten. Weitere Informationen: http://www.google.de/intl/de/policies/privacy.',
    ] },
    { h: '§ 7 Web Analytics – Google Analytics', p: [
      'Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. („Google“). Google Analytics verwendet sog. „Cookies“, Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.',
      'Diese Website verwendet Google Analytics mit der Erweiterung „_anonymizeIp()“. Dadurch werden IP-Adressen gekürzt weiterverarbeitet, eine Personenbeziehbarkeit kann damit ausgeschlossen werden. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.',
      'Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; darüber hinaus können Sie die Erfassung der durch das Cookie erzeugten Daten an Google verhindern, indem Sie das unter http://tools.google.com/dlpage/gaoptout?hl=de verfügbare Browser-Plug-in herunterladen und installieren. Rechtsgrundlage für die Nutzung von Google Analytics ist Art. 6 Abs. 1 S. 1 lit. f DS-GVO.',
    ] },
    { h: '§ 8 Teilnahme an unserem Bewerbungsverfahren', p: [
      'Wenn Sie sich über unser Stellenportal um eine Stelle in unserem Unternehmen bewerben, möchten wir Sie nachfolgend über den Umgang mit Ihren Daten und Ihre Rechte informieren. Für die Datenverarbeitung ist die FVB Feickert Verwaltungs und Beteiligungs GmbH, Hermann-Stoll-Straße 1, 35781 Weilburg/Lahn, verantwortlich. Wir verarbeiten und speichern die Daten, welche Sie im Rahmen des Bewerbungsverfahrens an uns übermitteln.',
      'Die Verarbeitung und Speicherung dient der Durchführung des Bewerbungsverfahrens und der Prüfung Ihrer Eignung für die ausgeschriebene Stelle sowie ggf. für andere offene Stellen in unserem Unternehmen. Rechtsgrundlage für die Datenverarbeitung ist § 26 BDSG.',
      'Wir speichern Ihre Daten für die Dauer von 6 Monaten, sofern Sie zustimmen, in unserem Bewerberpool für 2 Jahre. Anschließend werden die Daten gelöscht. Für den Fall, dass wir Sie für die ausgeschriebene Stelle auswählen, übernehmen wir Ihre Bewerbungsdaten in unsere Personalverwaltung. Die Datenverarbeitung erfolgt ausschließlich in Rechenzentren in der Bundesrepublik Deutschland.',
    ] },
  ],
};

export const AGB = {
  stand: 'Stand 02.2024',
  pdf: 'https://fega-metallbau.de/wp-content/uploads/2024/04/FEGA-AGB.pdf',
  intro: 'Allgemeine Geschäftsbedingungen der FEGA Metallbau und Handelsgesellschaft mbH, Hermann-Stoll-Straße 1, 35781 Weilburg, Deutschland (Stand 02.2024). Für Lieferungen und sonstige Leistungen von FEGA sowie für Zahlungen an FEGA gelten ausschließlich nachstehende Bedingungen. FEGA akzeptiert keine Allgemeinen Geschäftsbedingungen des Bestellers.',
  sections: [
    { h: '1. Preise und Zahlungsbedingungen', p: [
      '1.1 Die Preise gelten, sofern nichts Abweichendes vereinbart ist. Für Werk- oder Dienstleistungen (insbesondere Mieten, Montagen, Reparaturen, Wartungen oder ähnliche Leistungen) werden die bei FEGA geltenden Stundensätze und Preise berechnet. Reise- und Wartezeiten sind Arbeitszeiten. Für Nacht-, Sonn- und Feiertagsstunden werden die bei FEGA geltenden Zuschläge berechnet. Reisekosten, Tagesspesen sowie Übernachtungsgelder werden gesondert in Rechnung gestellt.',
      '1.2 Zahlungen sind spesen- und gebührenfrei innerhalb der vereinbarten Zahlungsfristen zu leisten.',
      '1.3 Der Besteller wird jeden Betrag ungekürzt und ohne Abzug von z. B. Quellensteuern zahlen. Sollte der Abzug von Quellensteuer aufgrund gesetzlicher Regelungen im Sitzland des Bestellers erforderlich sein, wird der Besteller die zusätzlichen Beträge zahlen, die erforderlich sind, damit FEGA den ungeschmälerten Rechnungsbetrag erhält.',
      '1.4 Bei Überschreitungen der Zahlungsfrist berechnet FEGA – ohne dass es besonderer Inverzugsetzung bedarf – Zinsen von 9 %-Punkten über dem jeweiligen Basiszins nach § 288 BGB, zuzüglich Kosten der Mahnung, mindestens aber jährlich 10 % der ausstehenden Gesamtforderung. Weitere Verzugsfolgen sind hierdurch nicht ausgeschlossen.',
    ] },
    { h: '2. Liefer- oder Leistungsfristen, Mitwirkungspflichten', p: [
      '2.1 Liefer- oder Leistungsfristen werden durch unvorhergesehene, außerhalb des Einflussbereichs von FEGA liegende Hindernisse jedweder Art, insbesondere durch Betriebsstörungen, Arbeitskämpfe, Pandemien, Verzögerungen in der Anlieferung wesentlicher Rohstoffe oder Bauteile und dergleichen, soweit diese Hindernisse für die Fristüberschreitung ursächlich sind, entsprechend verlängert. Solche Hindernisse heben auch während eines von FEGA zu vertretenden Verzuges für ihre Dauer dessen Folgen auf. FEGA ist berechtigt, bei Eintritt solcher Hindernisse vom Vertrag ganz oder teilweise zurückzutreten. In diesem Fall erstattet FEGA erbrachte Gegenleistungen unverzüglich. Weitergehende Schadenersatzansprüche des Bestellers sind ausgeschlossen.',
      '2.2 FEGA ist zu Teillieferungen oder -leistungen berechtigt.',
      '2.3 Die Einhaltung der Liefer- oder Leistungsfrist setzt die Erfüllung der Vertragspflichten des Bestellers voraus.',
      '2.4 Bei Werk- oder Dienstleistungen (vgl. Ziffer 1.1) hat der Besteller FEGA die erforderlichen Arbeitskräfte sowie die notwendigen Geräte und Hilfsstoffe (z. B. Hebezeuge, elektrische Energie usw.) rechtzeitig und kostenlos zur Verfügung zu stellen. Dies gilt bei Lieferungen auch dann, wenn die Werk- oder Dienstleistung im Preis inbegriffen oder für die Lieferung ein Pauschalpreis vereinbart ist. Ein etwa erforderlicher Unterbau ist schon vor Eintreffen der FEGA-Monteure fertig zu stellen. Überdies hat der Besteller die zum Schutz von Personen und Sachen notwendigen Sicherheitsmaßnahmen zu treffen. Für die zur Verfügung gestellten Arbeitskräfte, Geräte und Hilfsstoffe übernimmt FEGA keine Haftung.',
    ] },
    { h: '3. Gefahrenübergang', p: [
      'Bei einem eventuell vereinbarten Versand geht die Gefahr mit Übergabe der Ware an den Frachtführer bzw. Transporter über.',
    ] },
    { h: '4. Eigentumsvorbehalt', p: [
      '4.1 FEGA behält sich bis zur vollständigen Bezahlung aller Forderungen, die FEGA aus oder im Zusammenhang mit dem Vertrag gegen den Besteller zustehen, das Eigentum am Liefergegenstand vor. Der Besteller ist verpflichtet, die Vorbehaltsware pfleglich zu behandeln und auf eigene Kosten angemessen gegen jedweden Schaden, einschließlich Maschinenbruch und Diebstahl, zum Neuwert zu versichern. Auf Verlangen von FEGA ist hierüber ein Nachweis zu erbringen. Der Besteller tritt schon jetzt seine Ansprüche aus diesem Versicherungsvertrag für den Zeitraum bis zum Eigentumsübergang an FEGA ab. FEGA nimmt diese Abtretung an. Sofern Wartungs- und Inspektionsarbeiten erforderlich sind, hat der Besteller diese auf eigene Kosten regelmäßig durch fach- und sachkundiges Personal sowie unter Verwendung von Originalteilen durchzuführen und nachzuweisen.',
      '4.2 Ist der Eigentumsvorbehalt nach dem Recht, in dessen Bereich sich die Ware befindet, nicht wirksam, so gilt eine dem Eigentumsvorbehalt in diesem Bereich entsprechende Sicherung als vereinbart. Ist für die Entstehung solcher Rechte die Mitwirkung des Bestellers notwendig, so hat er alle Maßnahmen zu treffen, die zur Begründung und Erhaltung solcher Rechte notwendig sind.',
      '4.3 Der Besteller tritt seine Forderungen und sonstigen Rechte aus der Weiterveräußerung, der Vermietung und Verpachtung sowie aus Leasinggeschäften schon direkt an FEGA ab. FEGA nimmt diese Abtretung an. Dies gilt auch dann, wenn der Liefergegenstand zuvor mit anderen Sachen verbunden oder verarbeitet worden ist. Soweit der Wert der abgetretenen Forderungen die besicherte Forderung um mehr als 20 % übersteigt, hat FEGA auf Verlangen des Bestellers die abgetretene Forderung anteilig freizugeben. Der Besteller ist nur soweit berechtigt, die Forderungen einzuziehen und die sonstigen Rechte geltend zu machen, als er seinen Zahlungsverpflichtungen gegenüber FEGA nachkommt bzw. nicht zahlungsunfähig ist.',
    ] },
    { h: '5. Haftung', p: [
      'Für Schäden, die nicht am Liefergegenstand bzw. Gegenstand der Montage selbst entstanden sind, haftet FEGA – aus welchen Rechtsgründen auch immer – nur: 5.1.1 bei Vorsatz; 5.1.2 bei grober Fahrlässigkeit unserer Organe und leitenden Angestellten (hier begrenzt auf den vertragstypischen, vernünftigerweise vorhersehbaren Schaden); 5.1.3 bei schuldhafter Verletzung von Leben, Körper, Gesundheit; 5.1.4 bei Mängeln, die arglistig verschwiegen oder deren Abwesenheit garantiert wurde; 5.1.5 bei Mängeln des Liefergegenstandes, soweit nach dem Produkthaftungsgesetz für Personen- oder Sachschäden an privat genutzten Gegenständen gehaftet wird; 5.1.6 für schuldhafte Verletzung wesentlicher Vertragspflichten haftet FEGA, auch bei grober Fahrlässigkeit nicht leitender Angestellter und bei leichter Fahrlässigkeit, in letzterem Fall begrenzt auf den vertragstypischen, vernünftigerweise vorhersehbaren Schaden.',
      '5.2 Soweit FEGA wegen Verzugs haftet, ist die Haftung gleichfalls beschränkt auf den vertragstypischen, vernünftigerweise vorhersehbaren Schaden, soweit keine schuldhafte Verletzung von Leben, Körper oder Gesundheit vorliegt.',
      '5.3 Weitere Ansprüche als die vorstehend geregelten sind ausgeschlossen.',
    ] },
    { h: '6. Verzug, Abnahme, Gewährleistung, Schadenersatz', p: [
      'Werden von FEGA übernommene Pflichten verletzt, so stehen dem Besteller ausschließlich folgende Rechtsbehelfe zu:',
      '6.1 Bei Überschreitung vereinbarter oder nach Ziffer 2 verlängerter Fristen um mehr als acht Wochen ist der Besteller berechtigt, unter Festsetzung einer zumindest 14-tägigen Nachfrist mittels eingeschriebenem Brief vom Vertrag zurückzutreten. Schadenersatzansprüche des Bestellers sind in diesem Falle ausgeschlossen.',
      '6.2 Liefergegenstände oder erbrachte Leistungen sind unverzüglich zu untersuchen und Mängel unverzüglich, spätestens binnen 48 Stunden ab Übergabe des Liefergegenstandes bzw. ab Abschluss der Leistung zu rügen. Verborgene Mängel sind unverzüglich nach ihrer Entdeckung, jedoch spätestens vor Ablauf der gesetzlichen Mängelhaftungsfrist zu rügen. Die Rüge hat unter Bekanntgabe des festgestellten Mangels, der Nummer und des Datums der Lieferdokumente bzw. der Rechnung sowie der Begleitumstände zu erfolgen. Erfolgt die Rüge nicht in Übereinstimmung mit den vorstehenden Bedingungen, gilt der Liefergegenstand oder die erbrachte Leistung als vom Besteller genehmigt. Die durch unberechtigte oder bedingungswidrige Mängelrügen verursachten Kosten sind FEGA zu ersetzen.',
      '6.3 FEGA bietet dem Besteller ausschließlich dafür Gewähr, dass der Liefergegenstand oder die erbrachte Leistung keinen Mangel in Material und Herstellung infolge einer vor dem Zeitpunkt des Gefahrenübergangs (vgl. Ziffer 3) liegenden Ursache aufweist. Unbeschadet der Bestimmungen von Ziffer 6.2 haftet FEGA nur für vom Besteller nachgewiesene Mängel, die – soweit neue Liefergegenstände betroffen sind – innerhalb von 12 Monaten ab der Übergabe bzw. innerhalb von 2000 Betriebsstunden (je nachdem, was zuerst erreicht wird), oder die – soweit Leistungen betroffen sind – innerhalb von 12 Monaten ab dem Abschluss der Leistung geltend gemacht werden. Für Ersatzteile (ausgenommen Verschleißteile) beträgt die Verjährungsfrist 6 Monate oder 1000 Betriebsstunden (je nachdem, was zuerst erreicht wird).',
      '6.4 Bei Lieferung gebrauchter Waren sind – vorbehaltlich gesetzlicher Vorschriften oder anderweitiger Vereinbarungen – jegliche Sachmängelansprüche ausgeschlossen.',
      '6.5 Die Verjährungsfrist beginnt zum Zeitpunkt der Übergabe, spätestens jedoch 30 Tage nach Meldung der Abnahme-/Versandbereitschaft.',
      '6.6 Hat FEGA für einen Mangel zu haften, kann FEGA nach eigener Wahl entweder den mangelhaften Gegenstand nachbessern oder gegen einen mangelfreien Gegenstand austauschen oder die mangelhafte Leistung nachbessern („Nacherfüllung“). Bei endgültigem Fehlschlagen der Nacherfüllung hat FEGA auf Verlangen des Bestellers den Kaufpreis bzw. die Vergütung zu mindern oder, sofern der Mangel derart gravierend ist, dass dem Besteller die wesentlichen Vorteile der Lieferung oder Leistung entgehen, dem Besteller das Recht zu erteilen, vom Vertrag zurückzutreten. Weitere Rechtsbehelfe stehen dem Besteller nicht zu. Ausgetauschte Teile gehen in das Eigentum von FEGA über. Die Kosten einer vom Besteller oder einem Dritten vorgenommenen Mängelbeseitigung werden von FEGA nicht erstattet.',
      '6.7 Durch die Nacherfüllung wird die ursprüngliche Verjährungsfrist (vgl. Ziffer 6.3) nicht verlängert.',
      '6.8 Bei Geltendmachung von Mängelansprüchen hat der Besteller die ausgetauschten Teile an FEGA auf eigene Kosten einzusenden und das Vorliegen folgender Umstände nachzuweisen: 6.8.1 ausschließliche Verwendung von FEGA-Originalteilen; 6.8.2 Verwendung von Anbauteilen am Liefergegenstand nur nach vorheriger schriftlicher Zustimmung von FEGA; 6.8.3 Vornahme von Änderungen und Reparaturen nur durch autorisiertes Personal; 6.8.4 Service und Wartung durch einen FEGA-Fachmonteur gemäß den in der Betriebsanleitung angeführten Vorschriften. Kommt der Besteller seinen vorstehenden Pflichten nicht nach, so entfallen seine Mängelansprüche.',
      '6.9 Ausgeschlossen sind ferner Mängelansprüche für: 6.9.1 gebrauchte Gegenstände; 6.9.2 üblichen, einsatzbedingten Verschleiß oder Beschädigung des Liefergegenstandes; 6.9.3 übliche Wartungs-, Verschleiß- und Service-Reparaturen sowie hierfür benötigte Betriebs-, Hilfsstoffe und Ersatzteile; 6.9.4 unsachgemäße Bedienung oder Behandlung, unsachgemäßen Einsatz sowie Gewaltschäden; 6.9.5 Folgen der Verwendung von ungeeigneten Betriebsmitteln; 6.9.6 Folgen von ungeeigneten oder von FEGA nicht freigegebenen Anbauteilen oder Umbauten; 6.9.7 Beschädigungen oder Zerstörungen durch Dritte oder durch höhere Gewalt; 6.9.8 eine Vergrößerung des Schadens durch Inbetriebnahme vor Abschluss einer Reparatur bzw. weiteren Betrieb trotz eingetretenen Schadens; 6.9.9 Beschädigungen durch nicht von FEGA durchgeführte Reparaturen oder Reparaturversuche; 6.9.10 Verstöße gegen ausländische gewerbliche Schutz- oder Urheberrechte; 6.9.11 fehlende Übereinstimmung des Liefergegenstandes mit ausländischen Vorschriften oder fehlende kundenspezifische Umbauten, die von FEGA nicht ausdrücklich schriftlich zugesagt wurden; 6.9.12 Abweichungen des Liefergegenstandes innerhalb üblicher Toleranzen; 6.9.13 nicht von FEGA gelieferte Teile oder erbrachte Leistungen.',
      '6.10 Liegen die Voraussetzungen eines Nacherfüllungsanspruches vor, hat der Besteller FEGA zur Nacherfüllung eine Frist von mindestens 14 Tagen zu gewähren. Diese Frist wird angemessen verlängert, wenn dies die Betriebsverhältnisse von FEGA erfordern. Wird die Nacherfüllung auf Wunsch von FEGA beim Besteller vorgenommen, so hat dieser FEGA den hierfür erforderlichen Zugang zum Liefergegenstand zu gewähren.',
      '6.11 Wurde der Liefergegenstand vom Besteller oder einem Dritten an einen anderen Ort als den Erfüllungsort verbracht, trägt FEGA lediglich jene Kosten der Mängelbeseitigung, die am Erfüllungsort anfallen würden.',
      '6.12 Sollte der Liefergegenstand (oder Teile davon) nachweislich inländische Schutz- oder Urheberrechte Dritter verletzen und dem Besteller dadurch die Verwendung unmöglich gemacht oder maßgeblich erschwert werden, wird FEGA nach eigener Wahl entweder dem Besteller das Recht verschaffen, den Liefergegenstand frei von Ansprüchen Dritter zu verwenden, oder den rechtsverletzenden Gegenstand innerhalb angemessener Frist ersetzen. Die Bestimmungen der Ziffer 6.3 gelten entsprechend.',
      '6.13 Zugesicherte Eigenschaften sind nur bei ausdrücklicher schriftlicher Zusicherung durch FEGA gegeben. Im Falle des Fehlens zugesicherter Eigenschaften gelten die Bestimmungen der Ziffer 6 entsprechend.',
      '6.14 FEGA haftet dem Besteller gegenüber nicht für Folgen der zweckentfremdeten oder unüblichen Nutzung des Liefergegenstandes sowie für Folgen der von FEGA nicht schriftlich erlaubten Abänderung desselben. Der Besteller wird FEGA von sämtlichen Ansprüchen Dritter freistellen und schadlos halten, die sich direkt oder indirekt aufgrund einer solchen unüblichen oder zweckentfremdeten Nutzung bzw. aus dessen unerlaubter Abänderung ergeben.',
      '6.15 Alle weiteren Ansprüche des Bestellers, vor allem Ansprüche auf Ersatz von Schäden jedweder Art wie z. B. entgangener Gewinn, Rückwirkungsschäden oder Betriebsunterbrechung, sind ausgeschlossen.',
      '6.16 Wurde der Liefergegenstand von FEGA aufgrund von Konstruktionsangaben, Zeichnungen oder Modellen des Bestellers angefertigt, haftet FEGA nicht für die Richtigkeit der Konstruktion, sondern nur dafür, dass die Ausführungen den Angaben des Bestellers entsprechend erfolgt sind.',
      '6.17 Sofern FEGA bei Fertigung und Lieferung nach den vom Besteller überlassenen Zeichnungen, Mustern, Modellen oder sonstigen Unterlagen von Dritten in Anspruch genommen wird, übernimmt der Besteller die Abwehr solcher Ansprüche auf eigene Kosten und stellt FEGA von sämtlichen Ansprüchen sowie den daraus resultierenden Folgeschäden vollständig frei.',
    ] },
    { h: '7. Rücksendungen', p: [
      'Bei Rückgabe/Rücknahme von Ersatzteilen behalten wir uns vor, eine Gebühr zur Wiedereinlagerung von bis zu 20 % des Nettoverkaufspreises in Abrechnung zu bringen. Generell ist Voraussetzung für eine Rücknahme, dass es sich um Standardserienteile handelt, die Teile ungebraucht sind, keine Beschädigungen aufweisen, keine Verunreinigungen erfahren haben und das Auslieferdatum nicht länger als sechs Monate zurückliegt.',
    ] },
    { h: '8. Erfüllungsort, Gerichtsstand, anzuwendendes Recht', p: [
      '8.1 Erfüllungsort ist, sofern nichts Abweichendes vereinbart ist, der Sitz von FEGA bzw. bei Werk- oder Dienstleistungen der Ort, an dem die Leistung zu erbringen ist.',
      '8.2 Auf alle Rechtsbeziehungen zwischen dem Besteller und FEGA ist das deutsche Recht anzuwenden. Bestimmungen des deutschen Kollisionsrechts finden keine Anwendung, soweit sie auf anderes als deutsches materielles Recht verweisen. Die Geltung des Übereinkommens der Vereinten Nationen über Verträge über den internationalen Warenkauf (CISG) ist ausgeschlossen.',
      '8.3 Ausschließlicher Gerichtsstand ist das für den Sitz von FEGA zuständige Gericht. FEGA ist jedoch berechtigt, Klagen aus dem Vertrag auch bei jenem Gericht anzubringen, das nach den für den Staat, in dem der Besteller seinen Geschäfts- oder Wohnsitz bzw. verwertbares Vermögen hat, maßgeblichen Rechtsvorschriften hierfür sachlich und örtlich zuständig ist.',
      '8.4 Diese Bestimmungen gelten auch, wenn der Besteller seinen Geschäfts- oder Wohnsitz im Ausland hat.',
    ] },
    { h: '9. Allgemeine Bestimmungen', p: [
      '9.1 Unsere Produkte werden dem Besteller für seinen Gewerbebetrieb verkauft. Ein Weiterverkauf an Verbraucher (§ 13 BGB) ist unzulässig. Der Besteller verpflichtet sich, im Falle einer Weitergabe der Produkte diese Verpflichtung auch seinem Vertragspartner aufzuerlegen. Er stellt uns von allen Ansprüchen von Verbrauchern frei, die an unsere Produkte durch ihn gekommen sein könnten.',
      '9.2 Der Besteller darf seine Rechte aus dem Vertrag nur nach schriftlicher Zustimmung von FEGA abtreten.',
      '9.3 Abweichende Vereinbarungen oder Ergänzungen des Vertrages sind für FEGA nur dann verbindlich, wenn FEGA diesen schriftlich zugestimmt hat.',
    ] },
  ],
};

export const PORTAL = {
  intern: [
    { label: 'Intranet', href: 'https://intranet.feickert-bau.de/' },
    { label: 'Lernplattform', href: 'https://unterweisung.tuv.com/feickert-bau' },
    { label: 'Mitarbeitershop', href: 'https://myshop.strauss.com/feickert/login' },
  ],
  partner: [
    { label: 'Portal Kundenbewertung', href: 'https://www.feickert-bau.de/kundenbewertungen/' },
    { label: 'Downloadbereich', href: 'https://www.feickert-bau.de/downloads/' },
    { label: 'Aktuelles', href: 'https://www.feickert-bau.de/aktuelles/' },
  ],
};
