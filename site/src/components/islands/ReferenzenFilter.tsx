import React from 'react';
import { C } from '@/lib/theme';

/* Referenzen — Filter-Chips + Galerie aus beschrifteten Platzhaltern.
   (Echte Fotos sind aktuell deaktiviert; Labels kommen von der Astro-Seite.) */

export interface RefItem {
  label: string;
  cat: string;
  t: string;
}

export default function ReferenzenFilter({ items }: { items: RefItem[] }) {
  const cats = ['Alle', 'Maschinenbau', 'Metallbau', 'Feickert'];
  const [f, setF] = React.useState('Alle');
  const list = f === 'Alle' ? items : items.filter((r) => r.cat === f);

  return (
    <div className="container">
      <div style={{ marginBottom: 32, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setF(c)}
            style={{ fontFamily: C.font, fontSize: 12.5, fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', padding: '9px 18px', border: '1px solid ' + (f === c ? C.blue : C.n200), background: f === c ? C.blue : '#fff', color: f === c ? '#fff' : C.n600, cursor: 'pointer', borderRadius: 2, transition: 'all .15s' }}
          >
            {c}
          </button>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 20 }}>
        {list.map((r) => (
          <div key={r.t} style={{ background: '#fff' }}>
            <div className="ph" style={{ aspectRatio: '3/2' }}>
              <div className="ph__inner">
                <div className="ph__diamond"></div>
                <div className="ph__label">{r.label}</div>
                <div className="ph__sub">Bildplatz</div>
              </div>
            </div>
            <div style={{ paddingTop: 16 }}>
              <div style={{ fontFamily: C.mono, fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: r.cat === 'Metallbau' ? C.red : C.blue }}>{r.cat}</div>
              <div style={{ marginTop: 6, fontFamily: C.font, fontSize: 17, fontWeight: 400, color: C.n900 }}>{r.t}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
