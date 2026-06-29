import React from 'react';
import { C } from '@/lib/theme';
import { setIntent } from '@/lib/intent';
import { withBase } from '@/lib/url';
import { FieldLabel, Seg, Slider } from './ui';

/* Mietpark-Konfigurator — füllt eine Mietanfrage vor und springt in den
   Kontakt-Wizard (über sessionStorage-Intent). */

const TYPES = [
  { v: 'Schnellwechseladapter', sub: 'mechanisch / hydraulisch', second: { label: 'Trägergerät-Klasse', opts: ['< 10 t', '10–20 t', '20–30 t', '> 30 t'] } },
  { v: 'Rüttelplatte', sub: 'hydrostatisch', second: { label: 'Trägergerät-Klasse', opts: ['< 10 t', '10–20 t', '20–30 t', '> 30 t'] } },
  { v: 'Pumpe', sub: 'Auras / Tsurumi', second: { label: 'Marke', opts: ['Auras', 'Tsurumi'] } },
];

export default function MietparkKonfigurator() {
  const [type, setType] = React.useState('Schnellwechseladapter');
  const [second, setSecond] = React.useState('10–20 t');
  const [tage, setTage] = React.useState(14);
  const cfg = TYPES.find((x) => x.v === type)!;

  React.useEffect(() => {
    setSecond(cfg.second.opts[type === 'Pumpe' ? 0 : 1]);
  }, [type]);

  const start = () => {
    setIntent({
      bereich: 'mietpark',
      anliegen: 'Miete',
      mietdauer: tage,
      fields: { geraet: type === 'Pumpe' ? 'Pumpe (' + second + ')' : type, klasse: type === 'Pumpe' ? '' : second },
      nachricht: 'Mietanfrage: ' + type + ' · ' + second + ' · ' + tage + ' Tage.',
    });
    window.location.href = withBase('/kontakt');
  };

  return (
    <div className="container">
      <div style={{ marginBottom: 36 }}>
        <span className="overline">
          <span className="overline__bar"></span>
          <span className="overline__text">Mietpark-Konfigurator</span>
        </span>
      </div>
      <div className="mietpark-grid">
        <div style={{ background: '#fff', border: '1px solid ' + C.n150, padding: 'clamp(24px,3vw,40px)', display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div>
            <FieldLabel>1 · Gerät wählen</FieldLabel>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 10 }}>
              {TYPES.map((x) => {
                const on = type === x.v;
                return (
                  <button
                    key={x.v}
                    type="button"
                    onClick={() => setType(x.v)}
                    style={{ textAlign: 'left', cursor: 'pointer', padding: 16, background: on ? C.blue : C.n25, border: '2px solid ' + (on ? C.blue : C.n150), transition: 'all .15s' }}
                  >
                    <span style={{ display: 'block', fontFamily: C.font, fontSize: 14.5, fontWeight: 600, overflowWrap: 'break-word', color: on ? '#fff' : C.n900 }}>{x.v}</span>
                    <span style={{ display: 'block', marginTop: 5, fontFamily: C.mono, fontSize: 10.5, letterSpacing: '0.04em', color: on ? 'rgba(255,255,255,0.7)' : C.n400 }}>{x.sub}</span>
                  </button>
                );
              })}
            </div>
          </div>
          <div>
            <FieldLabel>2 · {cfg.second.label}</FieldLabel>
            <Seg value={second} onChange={setSecond} options={cfg.second.opts} />
          </div>
          <div>
            <FieldLabel>3 · Mietdauer</FieldLabel>
            <Slider value={tage} min={1} max={90} onChange={setTage} fmt={(v) => v + ' Tage'} />
          </div>
        </div>

        <div style={{ background: C.n900, color: '#fff', padding: 'clamp(24px,3vw,34px)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontFamily: C.mono, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>Ihre Auswahl</div>
          <div style={{ marginTop: 18, flex: 1 }}>
            {[['Gerät', type], [cfg.second.label, second], ['Mietdauer', tage + ' Tage']].map((r, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', gap: 14, padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <span style={{ fontFamily: C.font, fontSize: 12.5, color: 'rgba(255,255,255,0.5)' }}>{r[0]}</span>
                <span style={{ fontFamily: C.font, fontSize: 13.5, fontWeight: 500, textAlign: 'right' }}>{r[1]}</span>
              </div>
            ))}
            <div style={{ marginTop: 18, fontFamily: C.font, fontWeight: 300, fontSize: 13, lineHeight: 1.6, color: 'rgba(255,255,255,0.55)' }}>
              Geprüft, sofort einsatzbereit, mit verschiedenen Trägergeräten kompatibel. Tagessatz auf Anfrage.
            </div>
          </div>
          <button type="button" onClick={start} style={{ marginTop: 22, width: '100%', height: 50, background: C.blue, color: '#fff', border: 'none', cursor: 'pointer', fontFamily: C.font, fontSize: 14, fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', borderRadius: 2 }}>
            Anfrage starten →
          </button>
        </div>
      </div>
    </div>
  );
}
