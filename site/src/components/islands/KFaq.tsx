import React from 'react';

/* FEGA Karriere — FAQ-Akkordeon (eine Frage offen, +/×-Toggle). */

const C = { ink: '#16161A', sub: '#5C5C66', faint2: '#B7B7C0', line: '#E2E2E6', red: '#EE413E' };
const FP = "'Saira','Helvetica Neue',Helvetica,Arial,sans-serif";

export default function KFaq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = React.useState(0);
  return (
    <div style={{ borderTop: '1px solid ' + C.line }}>
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i} style={{ borderBottom: '1px solid ' + C.line }}>
            <button onClick={() => setOpen(isOpen ? -1 : i)} style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', padding: '20px 2px', display: 'flex', justifyContent: 'space-between', gap: 18, alignItems: 'center' }}>
              <span style={{ fontFamily: FP, fontSize: 'clamp(16px,1.5vw,19px)', fontWeight: 600, letterSpacing: '-0.005em', color: C.ink }}>{f.q}</span>
              <span style={{ fontFamily: FP, fontSize: 24, color: isOpen ? C.red : C.faint2, transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'transform .25s, color .2s', lineHeight: 1, flexShrink: 0 }}>+</span>
            </button>
            {isOpen && <p style={{ padding: '0 2px 22px', maxWidth: 660, fontFamily: FP, fontSize: 15, lineHeight: 1.7, color: C.sub, margin: 0 }}>{f.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
