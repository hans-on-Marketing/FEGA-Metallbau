import React from 'react';
import { C, ACCENTS, type AccentKey } from '@/lib/theme';
import { SERVICES } from '@/data/content';
import { takeIntent } from '@/lib/intent';
import { Input, Select, Seg, Slider, Check, FieldLabel, SecBtn } from './ui';

/* Mehrstufiger Anfrage-Konfigurator (Anliegen → Details → Kontakt).
   Liest beim Mount einen evtl. vom Konfigurator hinterlegten Intent. */

const BEREICHE: { id: string; label: string; accent: AccentKey; kicker: string }[] = [
  ...SERVICES.map((s) => ({ id: s.id, label: s.label, accent: s.accent, kicker: s.kicker })),
  { id: 'sonstiges', label: 'Sonstiges', accent: 'black', kicker: 'Allgemeine Anfrage' },
];
const bLabel = (id: string) => BEREICHE.find((b) => b.id === id)?.label || '—';

interface DetailField {
  k: string;
  label: string;
  type: 'select' | 'text';
  req?: boolean;
  opts?: string[];
  ph?: string;
}

const DETAILS: Record<string, DetailField[]> = {
  maschinenbau: [
    { k: 'art', label: 'Art der Leistung', type: 'select', req: true, opts: ['Schnellwechsel-Adapter (mechanisch)', 'Schnellwechsel-Adapter (hydraulisch)', 'Anbaukonstruktion', 'Aufarbeitung / Instandsetzung'] },
    { k: 'traeger', label: 'Trägergerät (Hersteller / Modell)', type: 'text', ph: 'z. B. Liebherr R 936' },
    { k: 'menge', label: 'Stückzahl', type: 'text', ph: 'z. B. 2' },
  ],
  metallbau: [
    { k: 'gewerk', label: 'Gewerk', type: 'select', req: true, opts: ['Geländer', 'Treppe', 'Tür', 'Tor', 'Überdachung', 'Carport', 'Anbaubalkon', 'Sonstiges'] },
    { k: 'masse', label: 'Maße / Ort', type: 'text', ph: 'z. B. 6 m, Außenbereich' },
  ],
  pumpentechnik: [
    { k: 'leistung', label: 'Leistung', type: 'select', req: true, opts: ['Pumpenprüfung (DGUV3)', 'Reparatur / Instandsetzung', 'Miete', 'Kauf'] },
    { k: 'pumpe', label: 'Pumpentyp / Anzahl', type: 'text', ph: 'z. B. Tauchpumpe, 3 Stk.' },
  ],
  maschinenhandel: [
    { k: 'produkt', label: 'Produkt', type: 'select', req: true, opts: ['Pumpe (Auras)', 'Pumpe (Tsurumi)', 'Schnellwechselsystem', 'Anbaugerät', 'Sonstiges'] },
    { k: 'kaufmiete', label: 'Kauf oder Miete', type: 'select', opts: ['Kauf', 'Miete'] },
  ],
  mietpark: [
    { k: 'geraet', label: 'Gerät', type: 'select', req: true, opts: ['Schnellwechseladapter (mechanisch)', 'Schnellwechseladapter (hydraulisch)', 'Hydrostatische Rüttelplatte', 'Pumpe (Auras)', 'Pumpe (Tsurumi)'] },
    { k: 'klasse', label: 'Trägergerät-Klasse', type: 'select', opts: ['< 10 t', '10–20 t', '20–30 t', '> 30 t'] },
  ],
  sonstiges: [],
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface WizardData {
  bereich: string;
  anliegen: string;
  fields: Record<string, string>;
  nachricht: string;
  dringend: boolean;
  mietdauer: number;
  name: string;
  firma: string;
  email: string;
  telefon: string;
  consent: boolean;
}

const EMPTY: WizardData = {
  bereich: '',
  anliegen: 'Angebot',
  fields: {},
  nachricht: '',
  dringend: false,
  mietdauer: 14,
  name: '',
  firma: '',
  email: '',
  telefon: '',
  consent: false,
};

const STEPS = ['Anliegen', 'Details', 'Kontakt'];

export default function AnfrageWizard() {
  const [step, setStep] = React.useState(0);
  const [maxReached, setMaxReached] = React.useState(0);
  const [sent, setSent] = React.useState(false);
  const [ref, setRef] = React.useState('');
  const [tried, setTried] = React.useState(false);
  const [data, setData] = React.useState<WizardData>(EMPTY);

  React.useEffect(() => {
    const intent = takeIntent();
    if (intent && intent.bereich) {
      setData((d) => ({
        ...d,
        bereich: intent.bereich!,
        anliegen: intent.anliegen || d.anliegen,
        fields: intent.fields || {},
        mietdauer: intent.mietdauer || d.mietdauer,
        nachricht: intent.nachricht || d.nachricht,
      }));
      setStep(1);
      setMaxReached(1);
    }
  }, []);

  const set = <K extends keyof WizardData>(k: K, v: WizardData[K]) => setData((d) => ({ ...d, [k]: v }));
  const setField = (k: string, v: string) => setData((d) => ({ ...d, fields: { ...d.fields, [k]: v } }));

  const accent = C.blue;
  const showMietdauer = data.bereich === 'mietpark' || data.anliegen === 'Miete';
  const reqDetail = (DETAILS[data.bereich] || []).find((f) => f.req);
  const emailOk = EMAIL_RE.test(data.email);

  const stepValid = (s: number) => {
    if (s === 0) return !!data.bereich;
    if (s === 1) return !reqDetail || !!data.fields[reqDetail.k];
    if (s === 2) return data.name.trim() && emailOk && data.consent;
    return true;
  };
  const next = () => {
    setTried(true);
    if (!stepValid(step)) return;
    setTried(false);
    const n = Math.min(step + 1, STEPS.length - 1);
    setStep(n);
    setMaxReached((m) => Math.max(m, n));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const back = () => {
    setTried(false);
    setStep((s) => Math.max(0, s - 1));
  };
  const submit = () => {
    setTried(true);
    if (!stepValid(2)) return;
    setRef('FEGA-' + new Date().getFullYear() + '-' + Math.floor(1000 + Math.random() * 9000));
    setSent(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const reset = () => {
    setSent(false);
    setStep(0);
    setMaxReached(0);
    setTried(false);
    setData(EMPTY);
  };

  if (sent) {
    return (
      <div style={{ background: C.n25, border: '1px solid ' + C.n100, padding: 'clamp(36px,5vw,72px)', textAlign: 'center' }}>
        <div style={{ width: 66, height: 66, background: C.blue, margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="square">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h2 style={{ fontFamily: C.font, fontSize: 'clamp(26px,3vw,38px)', fontWeight: 600, letterSpacing: '-0.02em', color: C.n900 }}>
          Anfrage eingegangen
        </h2>
        <p style={{ maxWidth: 440, margin: '14px auto 0', fontFamily: C.font, fontWeight: 300, fontSize: 16, lineHeight: 1.6, color: C.n600 }}>
          Vielen Dank{data.name ? ', ' + data.name.split(' ')[0] : ''}. Wir haben Ihre Anfrage zu{' '}
          <strong style={{ fontWeight: 500, color: C.n900 }}>{bLabel(data.bereich)}</strong> erhalten und melden uns
          zuverlässig zurück.
        </p>
        <div style={{ margin: '26px auto 0', display: 'inline-flex', alignItems: 'center', gap: 12, padding: '12px 20px', border: '1px solid ' + C.n200, background: '#fff' }}>
          <span style={{ fontFamily: C.mono, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.n400 }}>Referenz</span>
          <span style={{ fontFamily: C.mono, fontSize: 15, fontWeight: 600, color: C.blue, letterSpacing: '0.04em' }}>{ref}</span>
        </div>
        <div style={{ marginTop: 30 }}>
          <button
            type="button"
            onClick={reset}
            style={{ fontFamily: C.font, fontSize: 13, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: C.n600, background: 'none', border: 'none', cursor: 'pointer', boxShadow: 'inset 0 -1px 0 ' + C.n300, paddingBottom: 2 }}
          >
            Neue Anfrage stellen
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 860 }}>
      <div style={{ background: '#fff', border: '1px solid ' + C.n150, padding: 'clamp(24px,3vw,40px)' }}>
        {/* Progress */}
        <div style={{ marginBottom: 30 }}>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginBottom: 10 }}>
            {STEPS.map((s, i) => (
              <React.Fragment key={i}>
                <button
                  type="button"
                  onClick={() => {
                    if (i <= maxReached) {
                      setTried(false);
                      setStep(i);
                    }
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: i <= maxReached ? 'pointer' : 'default',
                    padding: '0 2px',
                    fontFamily: C.font,
                    fontSize: 13,
                    fontWeight: i === step ? 600 : 400,
                    color: i < step ? C.blue : i === step ? C.n900 : C.n400,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 5,
                  }}
                >
                  {i < step && (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={C.blue} strokeWidth="3" strokeLinecap="square">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                  {s}
                </button>
                {i < STEPS.length - 1 && <span style={{ flex: 1, height: 1, background: C.n200, minWidth: 20 }}></span>}
              </React.Fragment>
            ))}
            <span style={{ fontFamily: C.mono, fontSize: 11, color: C.n400, marginLeft: 4 }}>
              {step + 1}/{STEPS.length}
            </span>
          </div>
          <div style={{ height: 3, background: C.n100, borderRadius: 2 }}>
            <div style={{ height: '100%', width: (step / (STEPS.length - 1)) * 100 + '%', background: accent, borderRadius: 2, transition: 'width .35s ease' }}></div>
          </div>
          <p style={{ marginTop: 12, fontFamily: C.font, fontWeight: 300, fontSize: 13.5, color: C.n500 }}>
            {['Wählen Sie Bereich und Art Ihres Anliegens.', 'Ein paar Details — so können wir gezielt antworten.', 'Ihre Kontaktdaten, dann sind Sie fertig.'][step]}
          </p>
        </div>

        {step === 0 && (
          <div>
            <FieldLabel req>Worum geht es?</FieldLabel>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: 10, marginBottom: 8 }}>
              {BEREICHE.map((b) => {
                const on = data.bereich === b.id;
                return (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => {
                      set('bereich', b.id);
                      set('fields', {});
                    }}
                    style={{
                      textAlign: 'left',
                      cursor: 'pointer',
                      padding: '16px 18px',
                      background: on ? C.blue : C.n25,
                      border: '2px solid ' + (on ? C.blue : C.n150),
                      position: 'relative',
                      transition: 'all .15s',
                    }}
                  >
                    <span style={{ display: 'block', width: 7, height: 7, background: on ? '#fff' : C.blue, marginBottom: 11 }}></span>
                    <span style={{ display: 'block', fontFamily: C.font, fontSize: 15, fontWeight: 600, color: on ? '#fff' : C.n900 }}>{b.label}</span>
                    <span style={{ display: 'block', marginTop: 5, fontFamily: C.font, fontSize: 11.5, fontWeight: 300, lineHeight: 1.35, color: on ? 'rgba(255,255,255,0.82)' : C.n500 }}>{b.kicker}</span>
                  </button>
                );
              })}
            </div>
            {tried && !data.bereich && <div style={{ fontFamily: C.font, fontSize: 12.5, color: C.red, marginTop: 6 }}>Bitte wählen Sie einen Bereich.</div>}

            <div style={{ marginTop: 30 }}>
              <FieldLabel>Art des Anliegens</FieldLabel>
              <Seg value={data.anliegen} onChange={(v) => set('anliegen', v)} options={['Angebot', 'Beratung', 'Service', 'Miete']} />
            </div>
          </div>
        )}

        {step === 1 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {(DETAILS[data.bereich] || []).length === 0 && (
              <div style={{ fontFamily: C.font, fontWeight: 300, fontSize: 15, color: C.n600, lineHeight: 1.6 }}>
                Beschreiben Sie Ihr Anliegen einfach im Nachrichtenfeld — wir kümmern uns darum.
              </div>
            )}
            {(DETAILS[data.bereich] || []).map((f) => (
              <div key={f.k}>
                {f.type === 'select' ? (
                  <Select
                    label={f.label + (f.req ? ' *' : '')}
                    id={f.k}
                    value={data.fields[f.k] || ''}
                    onChange={(e) => setField(f.k, e.target.value)}
                    placeholder="Bitte wählen …"
                    options={f.opts || []}
                    error={tried && f.req && !data.fields[f.k] ? 'Pflichtfeld' : undefined}
                  />
                ) : (
                  <Input label={f.label} id={f.k} value={data.fields[f.k] || ''} placeholder={f.ph} onChange={(e) => setField(f.k, e.target.value)} />
                )}
              </div>
            ))}

            {showMietdauer && (
              <div style={{ paddingTop: 6 }}>
                <FieldLabel>Mietdauer</FieldLabel>
                <Slider value={data.mietdauer} min={1} max={90} onChange={(v) => set('mietdauer', v)} fmt={(v) => v + ' Tg.'} />
              </div>
            )}

            <div>
              <FieldLabel>Nachricht</FieldLabel>
              <textarea
                rows={4}
                value={data.nachricht}
                onChange={(e) => set('nachricht', e.target.value)}
                placeholder="Details zu Ihrem Projekt …"
                style={{ width: '100%', fontFamily: C.font, fontSize: 14, fontWeight: 300, padding: '11px 13px', border: '1px solid ' + C.n200, borderRadius: 2, resize: 'vertical', outline: 'none', boxSizing: 'border-box' }}
                onFocus={(e) => (e.target.style.borderColor = C.blue)}
                onBlur={(e) => (e.target.style.borderColor = C.n200)}
              />
            </div>

            <div>
              <FieldLabel>Priorität</FieldLabel>
              <Seg value={data.dringend ? 'Dringend' : 'Standard'} onChange={(v) => set('dringend', v === 'Dringend')} options={['Standard', 'Dringend']} />
            </div>
          </div>
        )}

        {step === 2 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 16 }}>
              <Input label="Name *" id="w-name" placeholder="Max Mustermann" value={data.name} onChange={(e) => set('name', e.target.value)} error={tried && !data.name.trim() ? 'Bitte ausfüllen' : undefined} />
              <Input label="Unternehmen" id="w-firma" placeholder="Firma" value={data.firma} onChange={(e) => set('firma', e.target.value)} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 16 }}>
              <Input label="E-Mail *" id="w-email" type="email" placeholder="name@firma.de" value={data.email} onChange={(e) => set('email', e.target.value)} error={tried && !emailOk ? 'Gültige E-Mail angeben' : undefined} />
              <Input label="Telefon" id="w-tel" type="tel" placeholder="+49 …" value={data.telefon} onChange={(e) => set('telefon', e.target.value)} />
            </div>
            <div style={{ marginTop: 4 }}>
              <Check checked={data.consent} onChange={(v) => set('consent', v)}>
                Ich bin einverstanden, dass meine Angaben zur Bearbeitung der Anfrage verarbeitet werden. Es erfolgt keine Weitergabe an Dritte.
              </Check>
              {tried && !data.consent && <div style={{ fontFamily: C.font, fontSize: 12.5, color: C.red, marginTop: 8, marginLeft: 32 }}>Bitte bestätigen Sie die Einwilligung.</div>}
            </div>
          </div>
        )}

        <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid ' + C.n100, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
          {step > 0 ? (
            <SecBtn onClick={back}>← Zurück</SecBtn>
          ) : (
            <span style={{ fontFamily: C.mono, fontSize: 11.5, letterSpacing: '0.06em', color: C.n400 }}>
              Schritt {step + 1} / {STEPS.length}
            </span>
          )}
          {step < 2 ? (
            <button type="button" className="btn btn--primary btn--lg" onClick={next}>
              Weiter →
            </button>
          ) : (
            <button type="button" className="btn btn--primary btn--lg" onClick={submit}>
              Anfrage senden
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
