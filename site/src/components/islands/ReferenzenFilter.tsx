import React from 'react';
import { C } from '@/lib/theme';

/* Referenzen — Filter-Chips + Galerie. Bilder werden build-time optimiert
   von der Astro-Seite hereingereicht (serialisierbare Props). */

export interface RefItem {
  src: string;
  srcset: string;
  sizes: string;
  width: number;
  height: number;
  alt: string;
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
            <img
              src={r.src}
              srcSet={r.srcset}
              sizes={r.sizes}
              alt={r.alt}
              loading="lazy"
              decoding="async"
              style={{ display: 'block', width: '100%', height: '100%', aspectRatio: '3/2', objectFit: 'cover' }}
            />
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
