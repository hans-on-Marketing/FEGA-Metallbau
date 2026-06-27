/* ============================================================================
   FEGA — Design-Vokabular (Farben + Theme), portiert aus dem Prototyp.
   Die Website ist fest auf die Design-Richtung "cinematic / dunkel / luftig"
   festgelegt (Tweaks-Umschalter entfällt in der Produktivversion).
   ========================================================================== */

export const C = {
  blue: '#006DB6',
  blueDk: '#004F96',
  blue700: '#005EA8',
  blue50: '#EEF6FC',
  red: '#EE413E',
  redDk: '#CC2D2A',
  ink: '#0A0A0A',
  black: '#111111',
  white: '#FFFFFF',
  n900: '#111111',
  n800: '#1F1F1F',
  n700: '#333333',
  n600: '#4D4D4D',
  n500: '#666666',
  n400: '#888888',
  n300: '#AAAAAA',
  n200: '#CCCCCC',
  n150: '#DDDDDD',
  n100: '#EEEEEE',
  n50: '#F5F5F5',
  n25: '#FAFAFA',
  font: "'Barlow','Helvetica Neue',Helvetica,Arial,sans-serif",
  fontDisplay: "'Barlow Condensed','Barlow',sans-serif",
  mono: "'SFMono-Regular',Consolas,'Liberation Mono',Menlo,monospace",
} as const;

export type AccentKey = 'blue' | 'red' | 'black';
export const ACCENTS: Record<AccentKey, string> = {
  blue: C.blue,
  red: C.red,
  black: C.black,
};

/* Aufgelöste Theme-Werte für direction=cinematic, hero=dunkel, density=luftig. */
export const T = {
  dir: 'cinematic',
  heroMode: 'dunkel',
  font: C.font,
  mono: C.mono,
  accent: C.blue,
  accent2: C.red,
  pageBg: C.white,
  panel: C.n50,
  panelAlt: C.n25,
  text: C.n900,
  sub: C.n600,
  faint: C.n400,
  onDark: 'rgba(255,255,255,0.96)',
  onDarkSub: 'rgba(255,255,255,0.62)',
  onDarkFaint: 'rgba(255,255,255,0.40)',
  hair: '1px solid ' + C.n100,
  hairMid: '1px solid ' + C.n200,
  hairDark: '1px solid rgba(255,255,255,0.14)',
  space: { sec: 128, secSm: 96, gap: 28, block: 76, lede: 26 },
  maxW: 1320,
  // cinematic display tuning
  display: { fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 0.97 },
  displaySize: 'clamp(52px, 7vw, 102px)',
  h2Size: 'clamp(30px, 3.8vw, 54px)',
  h2Weight: 600,
  useMono: false,
} as const;
