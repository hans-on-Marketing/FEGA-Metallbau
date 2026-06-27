import React from 'react';
import { C } from '@/lib/theme';
import { COMPANY, JOBS, type Job } from '@/data/content';
import { Input } from './ui';

/* Offene Stellen — Akkordeon-Liste mit Filter + Inline-Schnellbewerbung.
   Öffnet beim Laden eine Stelle, wenn der Hash #stellen-<id> lautet.
   Bilder sind aktuell als beschriftete Platzhalter dargestellt. */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Ph({ label, ratio, dark }: { label: string; ratio: string; dark?: boolean }) {
  return (
    <div className={`ph${dark ? ' ph--dark' : ''}`} style={{ aspectRatio: ratio, display: 'block' }}>
      <div className="ph__inner">
        <div className="ph__diamond"></div>
        <div className="ph__label">{label}</div>
        <div className="ph__sub">Bildplatz</div>
      </div>
    </div>
  );
}

function QuickApply({ job, onBack }: { job: Job; onBack: () => void }) {
  const [d, setD] = React.useState({ name: '', firma: '', email: '', telefon: '', msg: '' });
  const [sent, setSent] = React.useState(false);
  const [tried, setTried] = React.useState(false);
  const emailOk = EMAIL_RE.test(d.email);
  const set = (k: string, v: string) => setD((p) => ({ ...p, [k]: v }));

  if (sent)
    return (
      <div style={{ padding: '32px 0', maxWidth: 520 }}>
        <div style={{ fontFamily: C.mono, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.blue, marginBottom: 12 }}>Bewerbung eingegangen</div>
        <p style={{ fontFamily: C.font, fontWeight: 300, fontSize: 16, color: C.n900, lineHeight: 1.65, margin: '0 0 20px' }}>
          Danke{d.name ? ', ' + d.name.split(' ')[0] : ''}. Wir melden uns zeitnah persönlich bei Ihnen.
        </p>
        <button onClick={onBack} style={{ fontFamily: C.font, fontSize: 13, color: C.n500, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          ← Zurück zur Stelle
        </button>
      </div>
    );

  return (
    <div style={{ background: '#fff', border: '1px solid ' + C.n150, padding: 'clamp(20px,3vw,32px)', marginBottom: 16, maxWidth: 820 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 22 }}>
        <div>
          <div style={{ fontFamily: C.mono, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.red, marginBottom: 6 }}>Direkt bewerben</div>
          <div style={{ fontFamily: C.font, fontSize: 17, fontWeight: 600, color: C.n900, letterSpacing: '-0.01em' }}>
            {job.title} ({job.mwd})
          </div>
        </div>
        <button onClick={onBack} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: C.font, fontSize: 22, color: C.n300, lineHeight: 1, padding: '2px 6px', flexShrink: 0 }}>
          ×
        </button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 12 }}>
        <Input label="Name *" id={'qa-n-' + job.id} value={d.name} placeholder="Ihr vollständiger Name" onChange={(e) => set('name', e.target.value)} error={tried && !d.name.trim() ? 'Pflichtfeld' : undefined} />
        <Input label="Unternehmen / Schule" id={'qa-f-' + job.id} value={d.firma} placeholder="Optional" onChange={(e) => set('firma', e.target.value)} />
        <Input label="E-Mail *" id={'qa-e-' + job.id} type="email" value={d.email} placeholder="name@mail.de" onChange={(e) => set('email', e.target.value)} error={tried && !emailOk ? 'Gültige E-Mail angeben' : undefined} />
        <Input label="Telefon" id={'qa-t-' + job.id} type="tel" value={d.telefon} placeholder="+49 …" onChange={(e) => set('telefon', e.target.value)} />
      </div>
      <div style={{ marginTop: 12 }}>
        <label style={{ display: 'block', marginBottom: 6, fontFamily: C.font, fontSize: 12, fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', color: C.n700 }}>Anschreiben</label>
        <textarea
          rows={3}
          value={d.msg}
          onChange={(e) => set('msg', e.target.value)}
          placeholder="Was bringen Sie mit? Warum FEGA?"
          style={{ width: '100%', fontFamily: C.font, fontSize: 14, fontWeight: 300, padding: '10px 12px', border: '1px solid ' + C.n200, borderRadius: 2, resize: 'vertical', outline: 'none', boxSizing: 'border-box' }}
          onFocus={(e) => (e.target.style.borderColor = C.blue)}
          onBlur={(e) => (e.target.style.borderColor = C.n200)}
        />
      </div>
      <div style={{ marginTop: 16, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
        <button
          type="button"
          className="btn btn--primary btn--md"
          onClick={() => {
            setTried(true);
            if (d.name.trim() && emailOk) setSent(true);
          }}
        >
          Bewerbung absenden
        </button>
        <span style={{ fontFamily: C.font, fontSize: 12.5, color: C.n500 }}>Vertraulich · kein Spam</span>
      </div>
    </div>
  );
}

function JobRow({ j, open, onToggle }: { j: Job; open: boolean; onToggle: () => void }) {
  const [applyOpen, setApplyOpen] = React.useState(false);
  React.useEffect(() => {
    if (!open) setApplyOpen(false);
  }, [open]);

  return (
    <div style={{ borderBottom: '1px solid ' + C.n150 }}>
      <button onClick={onToggle} style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', padding: '26px 4px', display: 'grid', gridTemplateColumns: '1fr auto', gap: 24, alignItems: 'center' }}>
        <span>
          <span style={{ display: 'block', fontFamily: C.font, fontSize: 'clamp(20px,2.2vw,28px)', fontWeight: 500, color: C.n900, letterSpacing: '-0.01em' }}>
            {j.title} <span style={{ color: C.n400, fontWeight: 400, fontSize: '0.7em' }}>({j.mwd})</span>
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginTop: 8 }}>
            <span style={{ fontFamily: C.mono, fontSize: 11.5, letterSpacing: '0.06em', textTransform: 'uppercase', color: j.type === 'Ausbildung' ? C.red : C.blue }}>{j.type}</span>
            <span style={{ width: 3, height: 3, background: C.n300, borderRadius: '50%', display: 'inline-block' }}></span>
            <span style={{ fontFamily: C.mono, fontSize: 11.5, letterSpacing: '0.04em', color: C.n400 }}>{j.ort}</span>
          </span>
        </span>
        <span style={{ fontFamily: C.font, fontSize: 26, color: open ? C.red : C.n300, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform .25s, color .2s', lineHeight: 1 }}>+</span>
      </button>

      {open && !applyOpen && (
        <div style={{ paddingBottom: 36, maxWidth: 900 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 12, marginBottom: 28 }}>
            <Ph label="Fertigung FEGA" ratio="4/3" />
            <Ph label="Werkstatt" ratio="4/3" dark />
            <div style={{ background: C.n900, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
              <div>
                <div style={{ fontFamily: C.font, fontWeight: 700, fontSize: 'clamp(26px,3.5vw,42px)', letterSpacing: '-0.02em', color: '#fff', lineHeight: 1 }}>1980</div>
                <div style={{ marginTop: 6, fontFamily: C.mono, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.38)' }}>FEGA seit</div>
              </div>
            </div>
          </div>

          <p style={{ fontFamily: C.font, fontWeight: 300, fontSize: 16.5, lineHeight: 1.7, color: C.n900, maxWidth: 700, marginBottom: 28 }}>{j.intro || j.desc}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))', gap: 'clamp(20px,3vw,44px)' }}>
            {([['Ihre Aufgaben', j.aufgaben, C.red], ['Ihr Profil', j.profil, C.red], ['Wir bieten', j.benefits, C.blue]] as [string, string[], string][]).map(
              (col, ci) =>
                col[1] && (
                  <div key={ci}>
                    <div style={{ fontFamily: C.mono, fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: col[2], marginBottom: 14 }}>{col[0]}</div>
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                      {col[1].map((it, ii) => (
                        <li key={ii} style={{ display: 'flex', gap: 10, marginBottom: 11, fontFamily: C.font, fontWeight: 300, fontSize: 14, lineHeight: 1.5, color: C.n600 }}>
                          <span style={{ width: 6, height: 6, marginTop: 6, flexShrink: 0, background: col[2] }}></span>
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
            )}
          </div>
          <div style={{ marginTop: 32, display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap' }}>
            <button type="button" className="btn btn--primary btn--md" onClick={() => setApplyOpen(true)}>
              Jetzt bewerben →
            </button>
            <span style={{ fontFamily: C.font, fontSize: 13.5, color: C.n500 }}>
              {j.type} · {j.ort}
            </span>
          </div>
        </div>
      )}

      {open && applyOpen && <QuickApply job={j} onBack={() => setApplyOpen(false)} />}
    </div>
  );
}

export default function JobBoard() {
  const [filter, setFilter] = React.useState('Alle');
  const [openId, setOpenId] = React.useState<string | null>(null);
  const types = ['Alle', ...Array.from(new Set(JOBS.map((j) => j.type)))];
  const list = filter === 'Alle' ? JOBS : JOBS.filter((j) => j.type === filter);

  React.useEffect(() => {
    const h = window.location.hash || '';
    const m = h.match(/^#stellen-(.+)$/);
    if (m && JOBS.some((j) => j.id === m[1])) {
      setOpenId(m[1]);
    }
  }, []);

  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap', marginBottom: 28 }}>
        <div>
          <span className="overline">
            <span className="overline__bar" style={{ background: C.red }}></span>
            <span className="overline__text" style={{ color: C.red }}>Offene Stellen</span>
          </span>
          <h2 style={{ marginTop: 18, fontFamily: C.font, fontSize: 'clamp(28px,3.4vw,46px)', fontWeight: 700, letterSpacing: '-0.024em', lineHeight: 1.02, color: C.n900 }}>Jetzt einsteigen.</h2>
        </div>
        <div style={{ fontFamily: C.mono, fontSize: 12, letterSpacing: '0.06em', color: C.n500 }}>
          {JOBS.length} offene Stellen · {COMPANY.region}
        </div>
      </div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 6 }}>
        {types.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            style={{ fontFamily: C.font, fontSize: 12.5, fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase', padding: '9px 18px', border: '1px solid ' + (filter === c ? C.red : C.n200), background: filter === c ? C.red : '#fff', color: filter === c ? '#fff' : C.n600, cursor: 'pointer', borderRadius: 2, transition: 'all .15s' }}
          >
            {c}
          </button>
        ))}
      </div>
      <div style={{ marginTop: 18, borderTop: '1px solid ' + C.n200 }}>
        {list.map((j) => (
          <JobRow key={j.id} j={j} open={openId === j.id} onToggle={() => setOpenId(openId === j.id ? null : j.id)} />
        ))}
      </div>
      <p style={{ marginTop: 30, fontFamily: C.font, fontWeight: 300, fontSize: 15.5, lineHeight: 1.6, color: C.n600 }}>
        Keine passende Stelle dabei? Wir freuen uns auch über Ihre Initiativbewerbung.{' '}
        <a href={'mailto:' + COMPANY.email} style={{ color: C.blue, textDecoration: 'none', fontWeight: 500 }}>
          {COMPANY.email}
        </a>
      </p>
    </div>
  );
}
