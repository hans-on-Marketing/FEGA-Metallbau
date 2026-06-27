import React from 'react';
import { C } from '@/lib/theme';
import { COMPANY, KARRIERE } from '@/data/content';

/* FAQ-Akkordeon (Karriere). Erste Frage initial geöffnet. */
export default function FAQ() {
  const [open, setOpen] = React.useState(0);
  return (
    <div className="container">
      <div className="faq-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 'clamp(28px,5vw,72px)', alignItems: 'start' }}>
        <div>
          <span className="overline">
            <span className="overline__bar" style={{ background: C.red }}></span>
            <span className="overline__text" style={{ color: C.red }}>FAQ</span>
          </span>
          <h2 style={{ marginTop: 18, fontFamily: C.font, fontSize: 'clamp(30px,3.8vw,54px)', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.05, color: C.n900, textWrap: 'balance' }}>
            Häufige Fragen zur Bewerbung.
          </h2>
          <p style={{ marginTop: 18, maxWidth: 380, fontFamily: C.font, fontWeight: 300, fontSize: 15, lineHeight: 1.65, color: C.n600 }}>
            Noch etwas offen?{' '}
            <a href={'mailto:' + COMPANY.email} style={{ color: C.blue, textDecoration: 'none', fontWeight: 500 }}>
              Schreiben Sie uns.
            </a>
          </p>
        </div>
        <div style={{ borderTop: '1px solid ' + C.n200 }}>
          {KARRIERE.faq.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{ borderBottom: '1px solid ' + C.n150 }}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', padding: '20px 4px', display: 'flex', justifyContent: 'space-between', gap: 18, alignItems: 'center' }}>
                  <span style={{ fontFamily: C.font, fontSize: 'clamp(16px,1.5vw,19px)', fontWeight: 500, color: C.n900, letterSpacing: '-0.005em' }}>{f.q}</span>
                  <span style={{ fontFamily: C.font, fontSize: 24, color: isOpen ? C.red : C.n300, transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'transform .25s, color .2s', lineHeight: 1, flexShrink: 0 }}>+</span>
                </button>
                {isOpen && <p style={{ padding: '0 4px 22px', maxWidth: 640, fontFamily: C.font, fontWeight: 300, fontSize: 15, lineHeight: 1.7, color: C.n600, margin: 0 }}>{f.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
