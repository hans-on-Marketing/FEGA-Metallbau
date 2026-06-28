import React from 'react';
import { COMPANY } from '@/data/content';
import { withBase } from '@/lib/url';

/* FEGA — Kino-Navigation (Relaunch 2026).
   Minimalistische, sticky, blur-Bar + Fullscreen-Overlay-Menü (slide-in von rechts).
   Globale Navigation für alle Seiten. Links = echte Routen. */

const NC = {
  paper: '#FBFBFC',
  line: '#E2E2E6',
  lineMid: '#D2D2D8',
  ink: '#16161A',
  ink2: '#34343C',
  faint: '#9A9AA4',
  char: '#141417',
  blue: '#006DB6',
  blueDk: '#005A99',
  red: '#EE413E',
};
const SAIRA = "'Saira','Helvetica Neue',Helvetica,Arial,sans-serif";
const MONO = "'Spline Sans Mono','SFMono-Regular',Consolas,Menlo,monospace";
const LOGO = withBase('/fega-logo.png');

const ITEMS = [
  { label: 'Startseite', href: '/' },
  { label: 'Leistungen', href: '/leistungen/maschinenbau' },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Unternehmensgruppe', href: '/unternehmensgruppe' },
  { label: 'Referenzen', href: '/referenzen' },
  { label: 'Karriere', href: '/karriere' },
  { label: 'Ausbildung', href: '/ausbildung' },
  { label: 'Nachhaltigkeit', href: '/nachhaltigkeit' },
];

function TriBar({ height = 3 }: { height?: number }) {
  return (
    <div style={{ display: 'flex', height, width: '100%' }}>
      <div style={{ flex: 7, background: NC.ink }} />
      <div style={{ flex: 2, background: NC.blue }} />
      <div style={{ flex: 1, background: NC.red }} />
    </div>
  );
}

function PrimaryBtn({ children, href, size = 'sm', onClick }: { children: React.ReactNode; href?: string; size?: 'sm' | 'md'; onClick?: () => void }) {
  const [h, setH] = React.useState(false);
  const dims = size === 'md' ? { height: 50, padding: '0 26px', fontSize: 13.5 } : { height: 40, padding: '0 18px', fontSize: 12.5 };
  const style: React.CSSProperties = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    background: h ? NC.blueDk : NC.blue, color: '#fff', border: '1px solid ' + (h ? NC.blueDk : NC.blue),
    fontFamily: SAIRA, fontWeight: 600, letterSpacing: '0.02em', borderRadius: 0, textDecoration: 'none',
    cursor: 'pointer', whiteSpace: 'nowrap', transition: 'background .18s, border-color .18s', ...dims,
  };
  return (
    <a href={href} onClick={onClick} style={style} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>{children}</a>
  );
}

export default function NavKino() {
  const [scrolled, setScrolled] = React.useState(false);
  const [narrow, setNarrow] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const onResize = () => setNarrow(window.innerWidth < 720);
    onScroll(); onResize();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onResize); };
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header style={{
        position: 'sticky', top: 0, zIndex: 300,
        background: 'rgba(251,251,252,0.9)', backdropFilter: 'saturate(140%) blur(16px)', WebkitBackdropFilter: 'saturate(140%) blur(16px)',
        borderBottom: '1px solid ' + (scrolled ? NC.line : 'transparent'),
        boxShadow: scrolled ? '0 10px 30px -26px rgba(0,0,0,0.5)' : 'none',
        transition: 'border-color .25s ease, box-shadow .25s ease',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', height: 78, gap: 22 }}>
          <a href={withBase('/')} style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <img src={LOGO} alt="FEGA GmbH" style={{ height: 42, width: 'auto', display: 'block' }} />
          </a>
          {!narrow && (
            <div style={{ marginLeft: 16, fontFamily: MONO, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: NC.faint }}>
              Metallbau · Maschinenbau · Handel
            </div>
          )}
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 18 }}>
            {!narrow && (
              <a href={COMPANY.phoneHref} style={{ fontFamily: MONO, fontSize: 12.5, fontWeight: 500, letterSpacing: '0.03em', color: NC.ink2, textDecoration: 'none' }}>{COMPANY.phone}</a>
            )}
            <PrimaryBtn href={withBase('/kontakt')} size="sm">Anfrage</PrimaryBtn>
            <span style={{ width: 1, height: 20, background: NC.lineMid }} />
            <button onClick={() => setOpen(true)} aria-label="Menü öffnen" style={{ display: 'inline-flex', alignItems: 'center', gap: 11, background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: NC.ink }}>
              <span style={{ fontFamily: SAIRA, fontSize: 13.5, fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase' }}>Menü</span>
              <span style={{ display: 'inline-flex', flexDirection: 'column', gap: 4 }}>
                <span style={{ width: 24, height: 2, background: NC.ink }} />
                <span style={{ width: 24, height: 2, background: NC.ink }} />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen-Overlay */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 400, pointerEvents: open ? 'auto' : 'none' }}>
        <div onClick={() => setOpen(false)} style={{ position: 'absolute', inset: 0, background: 'rgba(10,10,12,0.5)', opacity: open ? 1 : 0, transition: 'opacity .35s ease' }} />
        <div style={{
          position: 'absolute', top: 0, right: 0, bottom: 0, width: 'min(560px,100%)', background: NC.char, color: '#fff',
          transform: open ? 'translateX(0)' : 'translateX(100%)', transition: 'transform .42s cubic-bezier(.22,.61,.36,1)',
          display: 'flex', flexDirection: 'column', overflowY: 'auto',
        }}>
          <TriBar height={3} />
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '26px clamp(28px,5vw,56px)' }}>
            <img src={LOGO} alt="FEGA" style={{ height: 38 }} />
            <button onClick={() => setOpen(false)} aria-label="Menü schließen" style={{ background: 'none', border: '1px solid rgba(255,255,255,0.24)', color: '#fff', width: 44, height: 44, cursor: 'pointer', fontSize: 18, lineHeight: 1 }}>✕</button>
          </div>
          <nav style={{ padding: '14px clamp(28px,5vw,56px) 0' }}>
            {ITEMS.map((it, i) => (
              <a key={it.href} href={withBase(it.href)}
                style={{ display: 'flex', alignItems: 'baseline', gap: 16, width: '100%', textAlign: 'left', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.10)', padding: '17px 0', color: '#fff' }}>
                <span style={{ fontFamily: MONO, fontSize: 12, color: 'rgba(255,255,255,0.4)', width: 30 }}>{String(i).padStart(2, '0')}</span>
                <span style={{ fontFamily: SAIRA, fontSize: 'clamp(24px,3.2vw,36px)', fontWeight: 600, letterSpacing: '-0.02em' }}>{it.label}</span>
              </a>
            ))}
          </nav>
          <div style={{ padding: '28px clamp(28px,5vw,56px) 40px', marginTop: 'auto' }}>
            <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.42)', marginBottom: 14 }}>Direkter Draht</div>
            <a href={COMPANY.phoneHref} style={{ display: 'block', fontFamily: SAIRA, fontSize: 24, fontWeight: 600, color: '#fff', textDecoration: 'none', letterSpacing: '-0.01em' }}>{COMPANY.phone}</a>
            <a href={'mailto:' + COMPANY.email} style={{ display: 'block', marginTop: 6, fontFamily: SAIRA, fontSize: 15, color: 'rgba(255,255,255,0.66)', textDecoration: 'none' }}>{COMPANY.email}</a>
            <div style={{ marginTop: 22 }}><PrimaryBtn href={withBase('/kontakt')} size="md">Anfrage stellen</PrimaryBtn></div>
          </div>
        </div>
      </div>
    </>
  );
}
