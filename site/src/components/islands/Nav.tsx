import React from 'react';
import { C } from '@/lib/theme';
import { NAV, SERVICES, COMPANY, SLUG } from '@/data/content';
import { withBase } from '@/lib/url';

/* Sticky-Navigation mit Full-Width-Mega-Menü + Mobile-Menü.
   Routing über echte Links; `path` = aktueller Pfad (für Active-State). */

const LOGO = withBase('/fega-logo.png');

function MiniThumb({ accent }: { accent?: string | null }) {
  return (
    <span
      style={{
        flexShrink: 0,
        width: 66,
        height: 46,
        background: 'repeating-linear-gradient(135deg,#ECECEC 0 10px,#F4F4F4 10px 20px)',
        border: '1px solid #E2E2E2',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span
        style={{
          width: 12,
          height: 12,
          border: '1.5px solid ' + (accent || '#C6C6C6'),
          transform: 'rotate(45deg)',
        }}
      ></span>
    </span>
  );
}

export default function Nav({ path = '/' }: { path?: string }) {
  const [vw, setVw] = React.useState(1280);
  const [scrolled, setScrolled] = React.useState(false);
  const [mega, setMega] = React.useState(false);
  const [mobile, setMobile] = React.useState(false);
  const closeT = React.useRef<number | null>(null);
  const narrow = vw < 980;

  React.useEffect(() => {
    const onR = () => setVw(window.innerWidth);
    onR();
    window.addEventListener('resize', onR);
    return () => window.removeEventListener('resize', onR);
  }, []);

  React.useEffect(() => {
    const on = () => setScrolled(window.scrollY > 6);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  const h = 78;
  const isActive = (href: string) => path === href || (href !== '/' && path.startsWith(href));
  const leistungenActive = path.startsWith('/leistungen');
  const openMega = () => {
    if (closeT.current) clearTimeout(closeT.current);
    setMega(true);
  };
  const closeMega = () => {
    closeT.current = window.setTimeout(() => setMega(false), 140);
  };

  const linkStyle = (active: boolean): React.CSSProperties => ({
    position: 'relative',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontFamily: C.font,
    fontSize: 14,
    fontWeight: active ? 600 : 400,
    letterSpacing: '0.005em',
    color: active ? C.n900 : C.n600,
    padding: '0 2px',
    height: h,
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    transition: 'color .15s ease',
    textDecoration: 'none',
  });
  const underline = (active: boolean) => (
    <span
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 2,
        background: active ? C.blue : 'transparent',
        transition: 'background .2s',
      }}
    ></span>
  );

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 200 }}>
      <div
        style={{
          background: '#fff',
          borderBottom: '1px solid ' + (scrolled || mega ? C.n150 : C.n100),
          boxShadow:
            scrolled && !mega
              ? '0 1px 0 rgba(0,0,0,0.04), 0 12px 28px -22px rgba(0,0,0,0.5)'
              : 'none',
          transition: 'box-shadow .25s ease, border-color .25s ease',
          position: 'relative',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', height: h, gap: 28 }}>
          <a href={withBase("/")} style={{ display: 'flex', alignItems: 'center', flexShrink: 0, marginRight: 8 }}>
            <img src={LOGO} alt="FEGA GmbH" style={{ height: 38, width: 'auto', display: 'block' }} />
          </a>

          {!narrow && (
            <nav style={{ display: 'flex', alignItems: 'stretch', gap: 26, flex: 1 }}>
              {NAV.map((item) => {
                if (item.menu) {
                  return (
                    <div key={item.id} style={{ display: 'flex' }} onMouseEnter={openMega} onMouseLeave={closeMega}>
                      <a href={withBase(item.href)} style={linkStyle(leistungenActive)}>
                        {item.label}
                        <span
                          style={{
                            display: 'inline-block',
                            transform: mega ? 'rotate(180deg)' : 'none',
                            transition: 'transform .2s',
                            fontSize: 9,
                            color: C.n400,
                            marginTop: 1,
                          }}
                        >
                          &#9660;
                        </span>
                        {underline(leistungenActive)}
                      </a>
                    </div>
                  );
                }
                const active = isActive(item.href);
                return (
                  <a key={item.id} href={withBase(item.href)} style={linkStyle(active)}>
                    {item.label}
                    {underline(active)}
                  </a>
                );
              })}
            </nav>
          )}

          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 18, flexShrink: 0 }}>
            {!narrow && (
              <a
                href={COMPANY.phoneHref}
                style={{
                  fontFamily: C.font,
                  fontSize: 13.5,
                  fontWeight: 500,
                  color: C.n700,
                  letterSpacing: '0.01em',
                  whiteSpace: 'nowrap',
                  textDecoration: 'none',
                }}
              >
                {COMPANY.phone}
              </a>
            )}
            <a href={withBase("/kontakt")} className="btn btn--primary btn--sm">
              Anfrage
            </a>
            {narrow && (
              <button
                onClick={() => setMobile((v) => !v)}
                aria-label="Menü"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 6,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 5,
                }}
              >
                {[0, 1, 2].map((i) => (
                  <span key={i} style={{ width: 22, height: 2, background: C.n900 }}></span>
                ))}
              </button>
            )}
          </div>
        </div>

        {!narrow && mega && (
          <div
            onMouseEnter={openMega}
            onMouseLeave={closeMega}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              width: '100%',
              background: '#fff',
              borderTop: '1px solid ' + C.n100,
              boxShadow: '0 34px 60px -32px rgba(0,0,0,0.42)',
              zIndex: 60,
            }}
          >
            <div className="container" style={{ paddingTop: 34, paddingBottom: 30 }}>
              <div
                style={{
                  fontFamily: C.font,
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: C.n400,
                  marginBottom: 18,
                }}
              >
                Leistungen
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(248px,1fr))', gap: 6 }}>
                {SERVICES.map((s) => (
                  <a
                    key={s.id}
                    href={withBase(SLUG[s.id])}
                    className="mega-item"
                    style={{
                      textAlign: 'left',
                      background: path === SLUG[s.id] ? C.n25 : 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '10px 12px',
                      display: 'flex',
                      gap: 14,
                      alignItems: 'center',
                      textDecoration: 'none',
                    }}
                  >
                    <MiniThumb accent={null} />
                    <span style={{ minWidth: 0 }}>
                      <span
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 8,
                          fontFamily: C.font,
                          fontSize: 15,
                          fontWeight: 500,
                          color: C.n900,
                        }}
                      >
                        {s.label}
                      </span>
                      <span
                        style={{
                          display: 'block',
                          marginTop: 2,
                          fontFamily: C.font,
                          fontSize: 11.5,
                          fontWeight: 400,
                          color: C.n500,
                          lineHeight: 1.35,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {s.kicker}
                      </span>
                    </span>
                  </a>
                ))}
              </div>

              <div
                style={{
                  marginTop: 28,
                  paddingTop: 20,
                  borderTop: '1px solid ' + C.n100,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 20,
                  flexWrap: 'wrap',
                }}
              >
                <span style={{ fontFamily: C.font, fontSize: 13.5, fontWeight: 300, color: C.n500 }}>
                  Ein Lieferant für Metallbau, Maschinenbau, Pumpentechnik und Miete —{' '}
                  <span style={{ color: C.n900, fontWeight: 500 }}>
                    Angebot in der Regel innerhalb von 24 Stunden.
                  </span>
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
                  <a
                    href={COMPANY.phoneHref}
                    style={{ fontFamily: C.font, fontSize: 14, fontWeight: 500, color: C.n800, textDecoration: 'none' }}
                  >
                    {COMPANY.phone}
                  </a>
                  <a href={withBase("/kontakt")} className="btn btn--primary btn--sm">
                    Anfrage stellen
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {narrow && mobile && (
        <div style={{ background: '#fff', borderBottom: '1px solid ' + C.n200, maxHeight: '80vh', overflowY: 'auto' }}>
          <div className="container" style={{ paddingTop: 8, paddingBottom: 24 }}>
            <MobileItem href="/" label="Startseite" active={path === '/'} />
            <div
              style={{
                padding: '16px 0 6px',
                fontFamily: C.mono,
                fontSize: 11,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: C.n400,
              }}
            >
              Leistungen
            </div>
            {SERVICES.map((s) => (
              <MobileItem key={s.id} href={SLUG[s.id]} label={s.label} sub={s.no} active={path === SLUG[s.id]} />
            ))}
            <div style={{ height: 8 }}></div>
            <MobileItem href="/ueber-uns" label="Über uns" active={path === '/ueber-uns'} />
            <MobileItem href="/unternehmensgruppe" label="Unternehmensgruppe" active={path === '/unternehmensgruppe'} />
            <MobileItem href="/referenzen" label="Referenzen" active={path === '/referenzen'} />
            <MobileItem href="/karriere" label="Karriere" active={path === '/karriere'} />
            <MobileItem href="/ausbildung" label="Ausbildung" active={path === '/ausbildung'} />
            <MobileItem href="/kontakt" label="Kontakt" active={path === '/kontakt'} />
          </div>
        </div>
      )}
    </header>
  );
}

function MobileItem({ href, label, sub, active }: { href: string; label: string; sub?: string; active: boolean }) {
  return (
    <a
      href={withBase(href)}
      style={{
        width: '100%',
        textAlign: 'left',
        background: 'none',
        border: 'none',
        borderBottom: '1px solid ' + C.n100,
        padding: '15px 0',
        cursor: 'pointer',
        fontFamily: C.font,
        fontSize: 18,
        fontWeight: active ? 600 : 400,
        color: active ? C.blue : C.n900,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        textDecoration: 'none',
      }}
    >
      {label}
      {sub && <span style={{ fontFamily: C.mono, fontSize: 11, color: C.n400, fontWeight: 400 }}>{sub}</span>}
    </a>
  );
}
