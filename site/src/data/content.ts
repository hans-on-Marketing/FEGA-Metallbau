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
      'Sie brauchen mehr als einen Adapter? Wir entwickeln und bauen Anbaukonstruktionen aller Art – von der ersten Zeichnung bis zum geprüften, fertigen Bauteil.',
    ],
    features: [
      { t: 'Schnellwechsel-Adapter', d: 'Liebherr-kompatibel, mechanisch und hydraulisch.' },
      { t: 'Anbaukonstruktionen', d: 'Entwicklung und Bau dynamisch beanspruchbarer Bauteile.' },
      { t: 'Aufarbeitung', d: 'Defekte Adapter und Bohrungen zurück auf Soll-Maß.' },
      { t: 'Aus einem Haus', d: 'Konstruktion, Fertigung, Prüfung. Ein Lieferant, eine Verantwortung.' },
    ],
    specs: [
      ['Norm', 'DIN EN 1090-2 · EXC 3'], ['Richtlinie', 'Maschinenrichtlinie 2006/42/EG'],
      ['Werkstoffeigenschaften', 'Bruch- & Schlagfestigkeit, Ermüdungsfestigkeit'], ['Vorteil', 'Gewichtsoptimiert – weniger Verbrauch & Emission'],
    ],
    gallery: ['adapter-produkt.jpg', 'adapter-baustelle.jpg', 'adapter-bohrgeraet.jpg', 'fertigung-rahmen.jpg'],
    badges: ['DIN EN 1090-2 · EXC 3', 'Maschinenrichtlinie 2006/42/EG'],
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
    ],
    features: [
      { t: 'Geländer & Treppen', d: 'Innen und außen, Stahl verzinkt oder beschichtet.' },
      { t: 'Türen & Tore', d: 'Maßgefertigte Bauschlosserarbeiten.' },
      { t: 'Überdachung & Carports', d: 'Wetterschutz in Stahlbauweise.' },
      { t: 'Anbaubalkone', d: 'Vorgehängte Konstruktionen, statisch geprüft.' },
    ],
    specs: [
      ['Seit', '1980'], ['Region', 'Westerwald / Taunus'],
      ['Leistung', 'Fertigung & Montage aus einer Hand'], ['Zusatz', 'Anbaukonstruktionen aller Art'],
    ],
    gallery: ['metallbau-treppe-innen.jpg', 'metallbau-treppe-aussen.jpg', 'metallbau-rampe.jpg', 'metallbau-einhausung.jpg'],
    badges: ['Bauschlosserarbeiten', 'Fertigung & Montage'],
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
      { t: 'Beratung', d: 'Ersatzbeschaffung und technische Beratung, kein Verkaufsgerede.' },
    ],
    specs: [
      ['Segment', 'Handelsgesellschaft'], ['Konzessionen', 'Vertrieb von Baustellengerät'],
      ['Schwerpunkt', 'Pumpen – Verkauf & Vermietung'], ['Marken', 'Auras · Tsurumi'],
    ],
    gallery: ['adapter-rohre.jpg'],
    badges: ['Auras', 'Tsurumi'],
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
      { t: 'Hydrostatische Rüttelplatte', d: 'Leistungsstark, sofort verfügbar.' },
      { t: 'Pumpen', d: 'Von Auras und Tsurumi.' },
    ],
    specs: [
      ['Programm', 'Schnellwechsel · Anbaugeräte · Pumpen'], ['Zustand', 'Geprüft, sofort einsatzbereit'],
      ['Kompatibel', 'Verschiedene Trägergeräte'], ['Marken', 'Auras · Tsurumi'],
    ],
    gallery: ['adapter-feld.jpg', 'rohrheber.jpg'],
    badges: ['Mechanisch & hydraulisch', 'Sofort einsatzbereit'],
    cta: 'Jetzt anfragen und das passende Anbaugerät mieten.',
  },
];

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
  contact: [['Telefon', '06471/502-0'], ['Fax', '06471/521 67'], ['E-Mail', 'info@feickert-bau.de']] as [string, string][],
  register: [['Registergericht', 'Amtsgericht Limburg'], ['Handelsregister', 'HRB 3326'], ['USt-IdNr.', 'DE 200791987']] as [string, string][],
  gf: ['Dipl.-Ing. MA Rudolf Feickert', 'Dipl.-Ing. Ragnar Feickert', 'Axel Schupp'],
  sections: [
    { h: 'Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV', p: ['Die Geschäftsführung; Anschrift wie oben.'] },
    { h: 'Haftung für Inhalte', p: ['Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir für eigene Inhalte nach den allgemeinen Gesetzen verantwortlich.'] },
    { h: 'Haftung für Links', p: ['Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.'] },
    { h: 'Urheberrecht', p: ['Die auf dieser Website veröffentlichten Texte, Bilder, Grafiken und Dateien unterliegen dem Urheberrecht. Eine Vervielfältigung oder Verwendung außerhalb der Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung.'] },
  ],
};

export const DATENSCHUTZ = {
  draft: true,
  intro: 'Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Nachfolgend informieren wir Sie über die Verarbeitung Ihrer Daten beim Besuch dieser Website und bei der Nutzung unseres Anfrage-Konfigurators.',
  sections: [
    { h: '1. Verantwortlicher', p: ['Verantwortlich im Sinne der DSGVO ist die FVB Feickert Verwaltungs und Beteiligungs GmbH, Hermann-Stoll-Straße 1, 35781 Weilburg/Lahn, E-Mail: info@feickert-bau.de.'] },
    { h: '2. Erhebung beim Besuch der Website', p: ['Beim Aufruf unserer Website werden durch den Browser automatisch Informationen an den Server übermittelt (u. a. IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Browsertyp). Diese Daten dienen der technischen Bereitstellung und Sicherheit und werden in Server-Logfiles gespeichert.'] },
    { h: '3. Kontakt & Anfrage-Konfigurator', p: ['Wenn Sie uns über das Formular bzw. den Anfrage-Konfigurator kontaktieren, verarbeiten wir die von Ihnen angegebenen Daten (z. B. Name, Unternehmen, E-Mail, Telefon, Anliegen) ausschließlich zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b und f DSGVO.'] },
    { h: '4. Cookies', p: ['Diese Website verwendet, soweit technisch erforderlich, Cookies zur Bereitstellung grundlegender Funktionen. Nicht notwendige Cookies werden nur mit Ihrer Einwilligung gesetzt.'] },
    { h: '5. Weitergabe an Dritte', p: ['Eine Übermittlung Ihrer Daten an Dritte erfolgt nicht, es sei denn, dies ist zur Vertragserfüllung erforderlich oder Sie haben eingewilligt.'] },
    { h: '6. Speicherdauer', p: ['Wir speichern personenbezogene Daten nur so lange, wie es für die genannten Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen es vorsehen.'] },
    { h: '7. Ihre Rechte', p: ['Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch. Zudem besteht ein Beschwerderecht bei einer Aufsichtsbehörde.'] },
    { h: '8. SSL-/TLS-Verschlüsselung', p: ['Zum Schutz der Übertragung vertraulicher Inhalte nutzt diese Seite eine SSL-/TLS-Verschlüsselung.'] },
  ],
};

export const AGB = {
  draft: true,
  intro: 'Es gelten ausschließlich die nachfolgenden Allgemeinen Geschäftsbedingungen. Für die Vermietung von Geräten gelten ergänzend unsere gesonderten Mietbedingungen.',
  sections: [
    { h: '§ 1 Geltungsbereich', p: ['Diese AGB gelten für alle Lieferungen, Leistungen und Angebote der FEGA GmbH gegenüber Unternehmern. Abweichende Bedingungen des Bestellers erkennen wir nicht an, sofern wir ihnen nicht ausdrücklich schriftlich zugestimmt haben.'] },
    { h: '§ 2 Angebot und Vertragsschluss', p: ['Unsere Angebote sind freibleibend. Ein Vertrag kommt erst mit unserer schriftlichen Auftragsbestätigung oder mit Ausführung der Leistung zustande.'] },
    { h: '§ 3 Preise', p: ['Es gelten die in der Auftragsbestätigung genannten Preise zzgl. der gesetzlichen Umsatzsteuer. Sofern nichts anderes vereinbart ist, verstehen sich Preise ab Werk.'] },
    { h: '§ 4 Liefer- und Leistungszeit', p: ['Liefertermine sind nur verbindlich, wenn sie von uns schriftlich bestätigt wurden. Ereignisse höherer Gewalt verlängern angemessene Fristen.'] },
    { h: '§ 5 Zahlung', p: ['Rechnungen sind, sofern nicht anders vereinbart, innerhalb von 14 Tagen ohne Abzug zur Zahlung fällig.'] },
    { h: '§ 6 Eigentumsvorbehalt', p: ['Die gelieferte Ware bleibt bis zur vollständigen Bezahlung sämtlicher Forderungen unser Eigentum.'] },
    { h: '§ 7 Gewährleistung', p: ['Es gelten die gesetzlichen Gewährleistungsregelungen. Offensichtliche Mängel sind unverzüglich schriftlich anzuzeigen.'] },
    { h: '§ 8 Haftung', p: ['Wir haften unbeschränkt bei Vorsatz und grober Fahrlässigkeit sowie nach dem Produkthaftungsgesetz. Im Übrigen ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt.'] },
    { h: '§ 9 Schlussbestimmungen', p: ['Es gilt deutsches Recht. Gerichtsstand ist – soweit zulässig – unser Geschäftssitz. Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen unberührt.'] },
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
