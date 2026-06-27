/* Zentrale Alt-Text-Registry (Dateiname → bildbeschreibender Alt-Text).
   Reine Strings — auch von React-Islands importierbar (kein astro:assets). */

export const ALT: Record<string, string> = {
  'hero-team.jpg':
    'FEGA-Team in der Fertigungshalle neben einem roten Schweißroboter, der eine große Stahl-Förderschnecke bearbeitet',
  'adapter-detail.jpg':
    'Schnellwechsel-Adapter von FEGA im Einsatz an einem Stahl-Bohrrohr auf einer innerstädtischen Baustelle',
  'adapter-produkt.jpg':
    'Hydraulischer Schnellwechsel-Adapter von FEGA in der freigestellten Produktansicht',
  'adapter-baustelle.jpg':
    'Liebherr-Bagger mit FEGA-Adapter hebt ein rostiges Stahl-Bohrrohr auf einer Baustelle vor Hochhäusern',
  'adapter-bohrgeraet.jpg':
    'FEGA-Adapter verbindet Baggerarm und Bohrgerät beim Setzen eines Bohrrohrs im Spezialtiefbau',
  'adapter-feld.jpg':
    'Schnellwechsel-Adapter von FEGA im Feldeinsatz an einem Trägergerät',
  'adapter-rohre.jpg':
    'Liebherr-Umschlagbagger mit FEGA-Greifer beim Verladen von Betonrohren',
  'metallbau-ueberdachung.jpg':
    'Überdachung in Stahlbauweise mit blauem Lamellendach, von FEGA gefertigt und montiert',
  'metallbau-treppe-innen.jpg':
    'Innentreppe mit schwarzem Stahlgeländer und hellen Terrazzo-Stufen',
  'metallbau-treppe-aussen.jpg':
    'Verzinkte Außentreppe mit Stahlgeländer an einer hellen Gebäudefassade',
  'metallbau-rampe.jpg':
    'Barrierefreie Rampenanlage mit anthrazitfarbenem Stahlgeländer vor einem Gebäudeeingang',
  'metallbau-einhausung.jpg':
    'Eingehauste Stahlkonstruktion mit Lamellenwänden im Außenbereich, von FEGA gefertigt',
  'mietgeraet.jpg':
    'Blauer Schnellwechsel-Adapter aus dem FEGA-Mietpark, freigestellte Ansicht',
  'rohrheber.jpg': 'Hydraulischer Rohrheber aus dem FEGA-Mietpark',
  'werkstatt.jpg':
    'Blick in die FEGA-Werkstatt mit Werkzeugmaschinen, Schweißgeräten und Deckenkran',
  'fertigung-rahmen.jpg':
    'Lackierte Stahl-Anbaukonstruktion mit gebogenem Ausleger auf einem Transportrahmen in der Halle',
  'fertigung-bauteile.jpg':
    'Roh gefertigte Adapter-Bauteile aus Stahl auf Paletten in der Fertigung',
  'fertigung-detail.jpg':
    'Blank bearbeitetes Stahl-Adapterbauteil in der Detailansicht aus der Fertigung',
  'handel-umschlag.jpg':
    'Liebherr-Umschlagbagger mit Greifer hebt Betonrohre auf einem geschotterten Lagerplatz',
  'feickert-bagger.jpg':
    'Liebherr-Bagger der Feickert-Gruppe beim Verbau einer Baugrube im Tiefbau',
  'tiefbau-rohr.jpg':
    'Bagger der Feickert-Gruppe hebt ein großes Betonrohr im Kanalbau',
  'tiefbau-casing.jpg':
    'Bagger hebt ein Stahl-Bohrrohr (Casing) im Spezialtiefbau – blau eingefärbtes Motiv',
  'deutschland.jpg':
    'Weiße Umrisskarte von Deutschland als Symbol für das bundesweite Einsatzgebiet der Feickert-Gruppe',
};

export function alt(name: string | null | undefined): string {
  return (name && ALT[name]) || '';
}

/* Kurze Beschriftung für die Platzhalter-Boxen (Bilder sind aktuell deaktiviert,
   siehe USE_PHOTOS in OptImage.astro). */
export const LABEL: Record<string, string> = {
  'hero-team.jpg': 'FEGA Team an der Schweißanlage',
  'adapter-detail.jpg': 'Schnellwechsel-Adapter, Detail',
  'adapter-produkt.jpg': 'Adapter, Produktansicht',
  'adapter-baustelle.jpg': 'Adapter auf der Baustelle',
  'adapter-bohrgeraet.jpg': 'Adapter am Bohrgerät',
  'adapter-feld.jpg': 'Adapter im Feld',
  'adapter-rohre.jpg': 'Adapter / Rohre',
  'metallbau-ueberdachung.jpg': 'Überdachung in Stahlbauweise',
  'metallbau-treppe-innen.jpg': 'Treppe & Geländer, innen',
  'metallbau-treppe-aussen.jpg': 'Außentreppe mit Geländer',
  'metallbau-rampe.jpg': 'Barrierefreie Rampe',
  'metallbau-einhausung.jpg': 'Einhausung',
  'mietgeraet.jpg': 'Mietgerät',
  'rohrheber.jpg': 'Rohrheber',
  'werkstatt.jpg': 'FEGA Werkstatt',
  'fertigung-rahmen.jpg': 'Anbaukonstruktion, Rahmen',
  'fertigung-bauteile.jpg': 'Fertigung, Bauteile',
  'fertigung-detail.jpg': 'Fertigung, Detail',
  'handel-umschlag.jpg': 'Umschlag / Handel',
  'feickert-bagger.jpg': 'Feickert Tiefbau',
  'tiefbau-rohr.jpg': 'Tiefbau / Rohr',
  'tiefbau-casing.jpg': 'Tiefbau / Casing',
  'deutschland.jpg': 'Deutschland + Luxemburg',
};

export function label(name: string | null | undefined): string {
  return (name && (LABEL[name] || ALT[name])) || (name ?? 'Bild');
}
