import React from 'react';

/* FEGA Karriere — Offene Stellen: Filter-Chips + Akkordeon + Inline-Schnellbewerbung.
   Daten kommen als Prop (aus content JOBS). Du-Ansprache. */

const C = {
  ink: '#16161A', ink2: '#34343C', sub: '#5C5C66', faint: '#9A9AA4', faint2: '#B7B7C0',
  line: '#E2E2E6', lineMid: '#D2D2D8', s1: '#F3F3F5', white: '#FFFFFF', char: '#141417',
  blue: '#006DB6', blueDk: '#005A99', red: '#EE413E',
};
const FP = "'Saira','Helvetica Neue',Helvetica,Arial,sans-serif";
const FM = "'Spline Sans Mono','SFMono-Regular',Consolas,Menlo,monospace";
const MAIL = 'bewerbung@feickert-bau.de';

export interface KJob {
  id: string; title: string; mwd: string; type: string; ort: string;
  company: 'FEGA' | 'Feickert';
  intro?: string; aufgaben?: string[]; profil?: string[]; benefits?: string[]; external?: string;
}

function Btn({ children, variant = 'primary', size = 'md', href, onClick }: { children: React.ReactNode; variant?: 'primary' | 'line'; size?: 'md' | 'sm'; href?: string; onClick?: () => void }) {
  const [h, setH] = React.useState(false);
  const dims = size === 'sm' ? { height: 40, padding: '0 18px', fontSize: 12.5 } : { height: 50, padding: '0 26px', fontSize: 13.5 };
  let v: React.CSSProperties;
  if (variant === 'primary') v = { background: h ? C.blueDk : C.blue, color: '#fff', border: '1px solid ' + (h ? C.blueDk : C.blue) };
  else v = { background: h ? C.ink : 'transparent', color: h ? '#fff' : C.ink, border: '1px solid ' + C.lineMid };
  const st: React.CSSProperties = { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 9, fontFamily: FP, fontWeight: 600, letterSpacing: '0.02em', borderRadius: 0, cursor: 'pointer', textDecoration: 'none', whiteSpace: 'nowrap', transition: 'background .18s,border-color .18s,color .18s', ...dims, ...v };
  if (href) return <a href={href} style={st} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>{children}</a>;
  return <button style={st} onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>{children}</button>;
}

function PhBox({ label, ratio, dark }: { label: string; ratio: string; dark?: boolean }) {
  return (
    <div style={{ position: 'relative', aspectRatio: ratio, background: dark ? 'repeating-linear-gradient(135deg,#161616 0 15px,#1c1c1c 15px 30px)' : 'repeating-linear-gradient(135deg,#E7E7EA 0 15px,#EFEFF1 15px 30px)', border: '1px solid ' + (dark ? '#2A2A2A' : C.line), display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 12 }}>
      <span style={{ fontFamily: FM, fontSize: 10.5, letterSpacing: '0.1em', textTransform: 'uppercase', color: dark ? 'rgba(255,255,255,0.6)' : C.faint }}>{label}</span>
    </div>
  );
}

function Field({ label, value, onChange, type = 'text', placeholder, err, full }: { label: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; type?: string; placeholder?: string; err?: string | null; full?: boolean }) {
  const [f, setF] = React.useState(false);
  return (
    <div style={{ gridColumn: full ? '1 / -1' : 'auto' }}>
      <label style={{ display: 'block', marginBottom: 6, fontFamily: FM, fontSize: 10.5, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: C.faint }}>{label}</label>
      <input type={type} value={value} placeholder={placeholder} onChange={onChange} onFocus={() => setF(true)} onBlur={() => setF(false)}
        style={{ width: '100%', boxSizing: 'border-box', fontFamily: FP, fontSize: 14.5, padding: '11px 13px', color: C.ink, background: C.white, border: '1px solid ' + (err ? C.red : f ? C.blue : C.lineMid), outline: 'none', borderRadius: 0 }} />
      {err && <div style={{ marginTop: 5, fontFamily: FM, fontSize: 10.5, color: C.red }}>{err}</div>}
    </div>
  );
}

function QuickApply({ job, onBack }: { job: KJob; onBack: () => void }) {
  const [d, setD] = React.useState({ name: '', email: '', tel: '', msg: '' });
  const [sent, setSent] = React.useState(false);
  const [tried, setTried] = React.useState(false);
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email);
  const set = (k: string, val: string) => setD((p) => ({ ...p, [k]: val }));
  if (sent) return (
    <div style={{ padding: '26px clamp(16px,2vw,28px) 38px', maxWidth: 560 }}>
      <div style={{ fontFamily: FM, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.blue, marginBottom: 12 }}>Bewerbung eingegangen</div>
      <p style={{ fontFamily: FP, fontSize: 16, color: C.ink, lineHeight: 1.65, margin: '0 0 20px' }}>Danke{d.name ? ', ' + d.name.split(' ')[0] : ''}. Wir melden uns zeitnah persönlich bei dir.</p>
      <button onClick={onBack} style={{ fontFamily: FP, fontSize: 13.5, color: C.sub, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>← Zurück zur Stelle</button>
    </div>
  );
  return (
    <div style={{ padding: '4px clamp(16px,2vw,28px) 36px' }}>
      <div style={{ background: C.s1, border: '1px solid ' + C.line, padding: 'clamp(20px,2.5vw,30px)', maxWidth: 760 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 20 }}>
          <div>
            <div style={{ fontFamily: FM, fontSize: 10.5, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.red, marginBottom: 6 }}>Direkt bewerben</div>
            <div style={{ fontFamily: FP, fontSize: 17, fontWeight: 600, letterSpacing: '-0.01em', color: C.ink }}>{job.title} ({job.mwd})</div>
          </div>
          <button onClick={onBack} aria-label="Schließen" style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: FP, fontSize: 24, color: C.faint2, lineHeight: 1, padding: '0 4px' }}>×</button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 14 }}>
          <Field label="Name *" value={d.name} placeholder="Dein vollständiger Name" onChange={(e) => set('name', e.target.value)} err={tried && !d.name.trim() ? 'Pflichtfeld' : null} />
          <Field label="E-Mail *" type="email" value={d.email} placeholder="name@mail.de" onChange={(e) => set('email', e.target.value)} err={tried && !emailOk ? 'Gültige E-Mail angeben' : null} />
          <Field label="Telefon" type="tel" value={d.tel} placeholder="+49 …" onChange={(e) => set('tel', e.target.value)} />
        </div>
        <div style={{ marginTop: 14 }}>
          <label style={{ display: 'block', marginBottom: 6, fontFamily: FM, fontSize: 10.5, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: C.faint }}>Anschreiben</label>
          <textarea rows={3} value={d.msg} onChange={(e) => set('msg', e.target.value)} placeholder="Was bringst du mit? Warum FEGA?"
            style={{ width: '100%', boxSizing: 'border-box', fontFamily: FP, fontSize: 14.5, padding: '11px 13px', color: C.ink, background: C.white, border: '1px solid ' + C.lineMid, resize: 'vertical', outline: 'none', borderRadius: 0 }} />
        </div>
        <div style={{ marginTop: 16, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
          <Btn variant="primary" size="md" onClick={() => { setTried(true); if (d.name.trim() && emailOk) setSent(true); }}>Bewerbung absenden</Btn>
          <span style={{ fontFamily: FP, fontSize: 12.5, color: C.sub }}>Vertraulich · kein Spam</span>
        </div>
      </div>
    </div>
  );
}

function JobRow({ j, open, onToggle }: { j: KJob; open: boolean; onToggle: () => void }) {
  const [apply, setApply] = React.useState(false);
  React.useEffect(() => { if (!open) setApply(false); }, [open]);
  const detailed = !!(j.aufgaben && j.aufgaben.length);
  const coLabel = j.company === 'FEGA' ? 'FEGA' : 'Feickert-Gruppe';
  return (
    <div style={{ borderBottom: '1px solid ' + C.line }}>
      <button onClick={onToggle} style={{ width: '100%', textAlign: 'left', background: open ? C.s1 : 'transparent', border: 'none', cursor: 'pointer', padding: '24px clamp(16px,2vw,28px)', display: 'grid', gridTemplateColumns: '1fr auto', gap: 20, alignItems: 'center', transition: 'background .15s' }}>
        <span>
          <span style={{ display: 'block', fontFamily: FP, fontSize: 'clamp(18px,2vw,26px)', fontWeight: 600, letterSpacing: '-0.012em', color: C.ink }}>
            {j.title} <span style={{ color: C.faint, fontWeight: 400, fontSize: '0.66em' }}>({j.mwd})</span>
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginTop: 9, flexWrap: 'wrap' }}>
            <span style={{ fontFamily: FM, fontSize: 10.5, letterSpacing: '0.06em', textTransform: 'uppercase', color: j.type === 'Ausbildung' ? C.red : C.blue }}>{j.type}</span>
            <span style={{ width: 3, height: 3, background: C.faint2, borderRadius: '50%' }}></span>
            <span style={{ fontFamily: FM, fontSize: 10.5, letterSpacing: '0.04em', color: C.faint }}>{j.ort}</span>
            <span style={{ fontFamily: FM, fontSize: 9.5, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: j.company === 'FEGA' ? C.blue : C.sub, border: '1px solid ' + C.lineMid, padding: '3px 7px' }}>{coLabel}</span>
          </span>
        </span>
        <span style={{ fontFamily: FP, fontSize: 26, color: open ? C.red : C.faint2, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform .25s, color .2s', lineHeight: 1 }}>+</span>
      </button>
      {open && !apply && (
        <div style={{ padding: '4px clamp(16px,2vw,28px) 34px' }}>
          {detailed ? (
            <>
              <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 12, marginBottom: 26, maxWidth: 620 }}>
                <PhBox label="Fertigung FEGA" ratio="4/3" />
                <div style={{ background: C.char, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
                  <div><div style={{ fontFamily: FP, fontWeight: 700, fontSize: 'clamp(26px,3.4vw,40px)', letterSpacing: '-0.03em', color: '#fff', lineHeight: 0.95 }}>1980</div><div style={{ marginTop: 6, fontFamily: FM, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>FEGA seit</div></div>
                </div>
              </div>
              {j.intro && <p style={{ fontFamily: FP, fontSize: 16, lineHeight: 1.68, color: C.ink2, maxWidth: 680, marginBottom: 26 }}>{j.intro}</p>}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))', gap: 'clamp(20px,3vw,40px)' }}>
                {([['Deine Aufgaben', j.aufgaben, C.red], ['Dein Profil', j.profil, C.red], ['Wir bieten', j.benefits, C.blue]] as [string, string[] | undefined, string][]).map((col, ci) => (
                  <div key={ci}>
                    <div style={{ fontFamily: FM, fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: col[2], marginBottom: 14 }}>{col[0]}</div>
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                      {(col[1] || []).map((it, ii) => (
                        <li key={ii} style={{ display: 'flex', gap: 10, marginBottom: 11, fontFamily: FP, fontSize: 14, lineHeight: 1.5, color: C.sub }}>
                          <span style={{ width: 6, height: 6, marginTop: 6, flexShrink: 0, background: col[2] }}></span>{it}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 30, display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap' }}>
                <Btn variant="primary" size="md" onClick={() => setApply(true)}>Jetzt bewerben</Btn>
                <span style={{ fontFamily: FP, fontSize: 13.5, color: C.sub }}>{j.type} · {j.ort}</span>
              </div>
            </>
          ) : (
            <div style={{ maxWidth: 680 }}>
              <p style={{ fontFamily: FP, fontSize: 16, lineHeight: 1.68, color: C.ink2, marginBottom: 22 }}>
                Stelle innerhalb der <strong style={{ fontWeight: 600 }}>Feickert-Unternehmensgruppe</strong> — Kanal- &amp; Wasserleitungsbau, Spezialtiefbau und Ingenieurbau in {j.ort}. Über den Metallbau hinaus stehen dir damit zusätzliche Wege in der Gruppe offen.
              </p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
                {j.external
                  ? <Btn variant="primary" size="md" href={j.external}>Stelle bei Feickert ansehen</Btn>
                  : <Btn variant="primary" size="md" href={'mailto:' + MAIL}>Bei der Gruppe bewerben</Btn>}
                <span style={{ fontFamily: FM, fontSize: 11.5, letterSpacing: '0.05em', color: C.faint }}>Feickert-Gruppe · {j.ort}</span>
              </div>
            </div>
          )}
        </div>
      )}
      {open && apply && <QuickApply job={j} onBack={() => setApply(false)} />}
    </div>
  );
}

export default function KJobs({ jobs }: { jobs: KJob[] }) {
  const [openId, setOpenId] = React.useState<string | null>(null);
  const [filter, setFilter] = React.useState<'Alle' | 'FEGA' | 'Feickert-Gruppe'>('Alle');
  const filters: Array<'Alle' | 'FEGA' | 'Feickert-Gruppe'> = ['Alle', 'FEGA', 'Feickert-Gruppe'];
  const list = filter === 'Alle' ? jobs : jobs.filter((j) => (filter === 'FEGA' ? j.company === 'FEGA' : j.company === 'Feickert'));
  return (
    <div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {filters.map((c) => (
          <button key={c} onClick={() => { setFilter(c); setOpenId(null); }} style={{ fontFamily: FP, fontSize: 12.5, fontWeight: 500, letterSpacing: '0.03em', padding: '9px 18px', border: '1px solid ' + (filter === c ? C.ink : C.lineMid), background: filter === c ? C.ink : C.white, color: filter === c ? '#fff' : C.sub, cursor: 'pointer', transition: 'all .15s' }}>{c}</button>
        ))}
      </div>
      <div style={{ marginTop: 18, background: C.white, border: '1px solid ' + C.line, borderTop: '2px solid ' + C.ink }}>
        {list.map((j) => <JobRow key={j.id} j={j} open={openId === j.id} onToggle={() => setOpenId(openId === j.id ? null : j.id)} />)}
      </div>
      <p style={{ marginTop: 26, fontFamily: FP, fontSize: 15.5, lineHeight: 1.6, color: C.sub }}>
        Keine passende Stelle dabei? Wir freuen uns auch über deine Initiativbewerbung. <a href={'mailto:' + MAIL} style={{ color: C.blue, textDecoration: 'none', fontWeight: 600 }}>{MAIL}</a>
      </p>
    </div>
  );
}
