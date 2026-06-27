import React from 'react';
import { C } from '@/lib/theme';
import { setIntent } from '@/lib/intent';
import { withBase } from '@/lib/url';
import { FieldLabel, Seg } from './ui';

/* Adapter-Konfigurator (Maschinenbau-Seite) — vier Felder, Live-Spezifikation,
   springt vorausgefüllt in den Kontakt-Wizard. */

const ADAPTER_BRANDS = [
  { id: 'liebherr', label: 'Liebherr', system: 'Liebherr SW' },
  { id: 'volvo', label: 'Volvo', system: 'Volvo S-Klasse' },
  { id: 'cat', label: 'CAT / Caterpillar', system: 'CAT Standard' },
  { id: 'komatsu', label: 'Komatsu', system: 'Standard-Aufnahme' },
  { id: 'hitachi', label: 'Hitachi', system: 'Standard-Aufnahme' },
  { id: 'doosan', label: 'Doosan', system: 'Standard-Aufnahme' },
  { id: 'hyundai', label: 'Hyundai', system: 'Standard-Aufnahme' },
  { id: 'jcb', label: 'JCB', system: 'Standard-Aufnahme' },
  { id: 'takeuchi', label: 'Takeuchi', system: 'Standard-Aufnahme' },
  { id: 'wacker', label: 'Wacker Neuson', system: 'Wacker Neuson' },
  { id: 'andere', label: 'Anderer Hersteller', system: 'Auf Anfrage' },
];
const WEIGHT_CLASSES = [
  { id: 'mini', label: 'Mini', range: '< 6 t', bolzen: 'Ø 35 mm', achsabstand: '165–200 mm', note: 'Kompaktbagger' },
  { id: 'kompakt', label: 'Kompakt', range: '6–10 t', bolzen: 'Ø 50 mm', achsabstand: '210–260 mm', note: '' },
  { id: 'mittel', label: 'Mittel', range: '10–20 t', bolzen: 'Ø 60 mm', achsabstand: '300–420 mm', note: 'Häufigste Klasse' },
  { id: 'schwer', label: 'Schwer', range: '20–35 t', bolzen: 'Ø 70–80 mm', achsabstand: '420–500 mm', note: '' },
  { id: 'gross', label: 'Groß', range: '35–50 t', bolzen: 'Ø 90–100 mm', achsabstand: '500+ mm', note: 'Sonderanfertigung' },
];
const ATTACH_TYPES = ['Tieflöffel / Planierlöffel', 'Sortiergreifer / Polypgreifer', 'Hydraulikhammer / Meißel', 'Bohrgerät / Erdbohrer', 'Rüttelplatte / Verdichter', 'Anderes Anbaugerät'];

export default function AdapterKonfigurator() {
  const [brand, setBrand] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const [typ, setTyp] = React.useState('mechanisch');
  const [attachment, setAttachment] = React.useState('');
  const sw = WEIGHT_CLASSES.find((w) => w.id === weight);
  const sb = ADAPTER_BRANDS.find((b) => b.id === brand);
  const configured = brand && weight && attachment;

  const startRequest = () => {
    if (!configured) return;
    setIntent({
      bereich: 'maschinenbau',
      anliegen: 'Angebot',
      fields: { art: 'Schnellwechsel-Adapter (' + typ + ')', traeger: (sb ? sb.label : '') + (sw ? ' · ' + sw.range : ''), menge: '' },
      nachricht: 'Adapter-Konfigurator: ' + (sb ? sb.label : '') + ' · ' + (sw ? sw.range : '') + ' · ' + typ + ' · Anbaugerät: ' + attachment,
    });
    window.location.href = withBase('/kontakt');
  };

  return (
    <div className="container">
      <div style={{ marginBottom: 40 }}>
        <span className="overline">
          <span className="overline__bar"></span>
          <span className="overline__text">Adapter-Konfigurator</span>
        </span>
        <h2 style={{ marginTop: 16, fontFamily: C.font, fontSize: 'clamp(26px,3vw,40px)', fontWeight: 700, letterSpacing: '-0.022em', color: C.n900 }}>Finden Sie Ihren Adapter.</h2>
        <p style={{ marginTop: 12, maxWidth: 560, fontFamily: C.font, fontWeight: 300, fontSize: 16, lineHeight: 1.65, color: C.n600 }}>
          Wählen Sie Trägermarke, Gewichtsklasse und Adapter-Typ — Fertigung nach DIN EN 1090-2 / EXC 3.
        </p>
      </div>
      <div style={{ background: '#fff', border: '1px solid ' + C.n150, padding: 'clamp(24px,3vw,40px)' }}>
        <div className="adapter-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 0.75fr', gap: 'clamp(24px,3vw,48px)', alignItems: 'start' }}>
          {/* Left: controls */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            <div>
              <FieldLabel req>1 · Trägermarke</FieldLabel>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(110px,1fr))', gap: 7 }}>
                {ADAPTER_BRANDS.map((b) => {
                  const on = brand === b.id;
                  return (
                    <button key={b.id} type="button" onClick={() => setBrand(b.id)} style={{ textAlign: 'left', cursor: 'pointer', padding: '10px 12px', background: on ? C.blue : C.n25, border: '2px solid ' + (on ? C.blue : C.n150), fontFamily: C.font, fontSize: 13, fontWeight: on ? 600 : 400, color: on ? '#fff' : C.n600, transition: 'all .12s' }}>
                      {b.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <FieldLabel req>2 · Einsatzgewicht</FieldLabel>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                {WEIGHT_CLASSES.map((w) => {
                  const on = weight === w.id;
                  return (
                    <button key={w.id} type="button" onClick={() => setWeight(w.id)} style={{ textAlign: 'left', cursor: 'pointer', padding: '12px 15px', background: on ? C.blue : C.n25, border: '2px solid ' + (on ? C.blue : C.n150), display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'all .12s' }}>
                      <span>
                        <span style={{ fontFamily: C.font, fontSize: 14, fontWeight: 600, color: on ? '#fff' : C.n700 }}>{w.label}</span>
                        <span style={{ fontFamily: C.font, fontSize: 13, color: on ? 'rgba(255,255,255,0.78)' : C.n500, marginLeft: 10 }}>{w.range}</span>
                      </span>
                      {w.note && <span style={{ fontFamily: C.mono, fontSize: 10, letterSpacing: '0.05em', color: on ? '#fff' : C.blue }}>{w.note}</span>}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <FieldLabel req>3 · Verriegelung</FieldLabel>
              <Seg value={typ} onChange={setTyp} options={['mechanisch', 'hydraulisch']} />
              <p style={{ marginTop: 8, fontFamily: C.font, fontSize: 12.5, color: C.n500, lineHeight: 1.5 }}>
                {typ === 'hydraulisch' ? 'Hydraulisch verriegelt — Anbaugerätewechsel ohne Aussteigen.' : 'Mechanisch verriegelt — robust, wartungsarm, bewährt.'}
              </p>
            </div>

            <div>
              <FieldLabel req>4 · Anbaugerät</FieldLabel>
              <Seg value={attachment} onChange={setAttachment} options={ATTACH_TYPES} />
            </div>
          </div>

          {/* Right: result */}
          <div style={{ background: C.n900, color: '#fff', padding: 'clamp(22px,3vw,34px)', position: 'sticky', top: 90 }}>
            <div style={{ fontFamily: C.mono, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.42)', marginBottom: 20 }}>Ihre Konfiguration</div>
            {!configured ? (
              <p style={{ fontFamily: C.font, fontWeight: 300, fontSize: 14, color: 'rgba(255,255,255,0.38)', lineHeight: 1.65 }}>
                Füllen Sie links die vier Felder aus — Ihre Adapter-Spezifikation erscheint hier.
              </p>
            ) : (
              <div>
                {[
                  ['Trägermarke', sb ? sb.label : '—'],
                  ['Aufnahme-System', sb ? sb.system : '—'],
                  ['Einsatzgewicht', sw ? sw.range : '—'],
                  ['Bolzen', sw ? sw.bolzen : '—'],
                  ['Achsabstand', sw ? sw.achsabstand : '—'],
                  ['Verriegelung', typ.charAt(0).toUpperCase() + typ.slice(1)],
                  ['Anbaugerät', attachment],
                  ['Norm', 'DIN EN 1090-2 · EXC 3'],
                ].map((r, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', gap: 12, padding: '9px 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    <span style={{ fontFamily: C.font, fontSize: 11.5, color: 'rgba(255,255,255,0.42)', flexShrink: 0 }}>{r[0]}</span>
                    <span style={{ fontFamily: C.font, fontSize: 12.5, fontWeight: 500, color: '#fff', textAlign: 'right' }}>{r[1]}</span>
                  </div>
                ))}
                <p style={{ marginTop: 16, fontFamily: C.font, fontSize: 12.5, color: 'rgba(255,255,255,0.5)', lineHeight: 1.55 }}>
                  {weight === 'gross' ? 'Großmaschinen-Adapter werden individuell projektiert — Anfrage genügt.' : 'Fertigung nach Norm. Angebot in der Regel innerhalb von 24 h.'}
                </p>
              </div>
            )}
            <button
              type="button"
              onClick={startRequest}
              style={{
                marginTop: 22,
                width: '100%',
                height: 50,
                background: configured ? C.blue : 'rgba(255,255,255,0.10)',
                color: configured ? '#fff' : 'rgba(255,255,255,0.3)',
                border: 'none',
                cursor: configured ? 'pointer' : 'default',
                fontFamily: C.font,
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                borderRadius: 2,
                transition: 'all .2s',
              }}
            >
              {configured ? 'Anfrage starten →' : 'Konfiguration ausfüllen'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
