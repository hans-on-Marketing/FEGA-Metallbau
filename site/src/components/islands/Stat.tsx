import React from 'react';
import { C } from '@/lib/theme';

/* Stat-Kennzahl — animiert den numerischen Wert beim Eintritt in den Viewport.
   Jahre (19xx/20xx) und reine Labels werden nicht hochgezählt. */
export default function Stat({
  v,
  l,
  color,
  onDark = false,
  sub,
}: {
  v: string;
  l: string;
  color?: string;
  onDark?: boolean;
  sub?: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [display, setDisplay] = React.useState(v);

  React.useEffect(() => {
    const str = String(v);
    const match = str.match(/^(\d+(?:[.,]\d+)?)/);
    if (!match) return;
    const raw = parseFloat(match[1].replace(',', '.'));
    if (/^(19|20)\d{2}$/.test(match[1])) return;
    const suffix = str.slice(match[0].length);
    const fmt = (n: number) =>
      Number.isInteger(raw) ? Math.round(n) + suffix : n.toFixed(1) + suffix;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const dur = 1200;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / dur, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          setDisplay(fmt(raw * ease));
          if (p < 1) requestAnimationFrame(tick);
          else setDisplay(v);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [v]);

  return (
    <div ref={ref}>
      <div
        style={{
          fontFamily: C.font,
          fontWeight: 700,
          fontSize: 'clamp(30px,3.1vw,46px)',
          letterSpacing: '-0.022em',
          lineHeight: 1,
          color: color || (onDark ? '#fff' : C.n900),
        }}
      >
        {display}
      </div>
      <div
        style={{
          marginTop: 10,
          fontFamily: C.font,
          fontSize: 13.5,
          fontWeight: 400,
          color: onDark ? 'rgba(255,255,255,0.62)' : C.n600,
          letterSpacing: '0.01em',
        }}
      >
        {l}
      </div>
      {sub && (
        <div
          style={{
            marginTop: 2,
            fontFamily: C.font,
            fontSize: 12,
            color: onDark ? 'rgba(255,255,255,0.40)' : C.n400,
          }}
        >
          {sub}
        </div>
      )}
    </div>
  );
}
