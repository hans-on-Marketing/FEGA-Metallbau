import React from 'react';
import { C } from '@/lib/theme';

/* Geteilte React-Form-Primitive für die interaktiven Inseln.
   Portiert aus den DS-Komponenten (Input/Select) und interactive.jsx
   (Seg/Slider/Check/FieldLabel) — Schrift auf Barlow (C.font) vereinheitlicht. */

export function SecBtn({
  children,
  onClick,
  onDark = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  onDark?: boolean;
}) {
  return (
    <button type="button" onClick={onClick} className={`sec-btn${onDark ? ' sec-btn--ondark' : ''}`}>
      {children}
    </button>
  );
}

export function FieldLabel({ children, req }: { children: React.ReactNode; req?: boolean }) {
  return (
    <label
      style={{
        display: 'block',
        marginBottom: 7,
        fontFamily: C.font,
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        color: C.n700,
      }}
    >
      {children}
      {req && <span style={{ color: C.blue }}> *</span>}
    </label>
  );
}

export function Input({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required = false,
}: {
  label?: string;
  id?: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
}) {
  const [focused, setFocused] = React.useState(false);
  const hasError = Boolean(error);
  const borderColor = hasError ? C.red : focused ? C.blue : C.n200;
  const boxShadow = focused
    ? hasError
      ? '0 0 0 3px rgba(238,65,62,0.25)'
      : '0 0 0 3px rgba(0,109,182,0.25)'
    : 'none';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5, width: '100%' }}>
      {label && (
        <label
          htmlFor={id}
          style={{
            fontFamily: C.font,
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: '0.04em',
            color: C.n700,
            textTransform: 'uppercase',
          }}
        >
          {label}
          {required && <span style={{ color: C.red, marginLeft: 3 }}>*</span>}
        </label>
      )}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: '100%',
          height: 40,
          fontSize: 14,
          padding: '0 12px',
          fontFamily: C.font,
          fontWeight: 300,
          background: '#fff',
          border: `1px solid ${borderColor}`,
          borderRadius: 2,
          outline: 'none',
          boxShadow,
          color: C.black,
          transition: 'border-color 150ms ease, box-shadow 150ms ease',
        }}
      />
      {error && (
        <span style={{ fontFamily: C.font, fontSize: 12, fontWeight: 300, color: C.red, lineHeight: 1.4 }}>
          {error}
        </span>
      )}
    </div>
  );
}

export function Select({
  label,
  id,
  value,
  onChange,
  options = [],
  placeholder,
  error,
}: {
  label?: string;
  id?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  placeholder?: string;
  error?: string;
}) {
  const [focused, setFocused] = React.useState(false);
  const hasError = Boolean(error);
  const borderColor = hasError ? C.red : focused ? C.blue : C.n200;
  const boxShadow = focused
    ? hasError
      ? '0 0 0 3px rgba(238,65,62,0.25)'
      : '0 0 0 3px rgba(0,109,182,0.25)'
    : 'none';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5, width: '100%' }}>
      {label && (
        <label
          htmlFor={id}
          style={{
            fontFamily: C.font,
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: '0.04em',
            color: C.n700,
            textTransform: 'uppercase',
          }}
        >
          {label}
        </label>
      )}
      <div style={{ position: 'relative' }}>
        <select
          id={id}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: '100%',
            height: 40,
            fontSize: 14,
            paddingLeft: 12,
            paddingRight: 36,
            fontFamily: C.font,
            fontWeight: 300,
            background: '#fff',
            border: `1px solid ${borderColor}`,
            borderRadius: 2,
            outline: 'none',
            boxShadow,
            color: !value ? C.n300 : C.black,
            transition: 'border-color 150ms ease, box-shadow 150ms ease',
            cursor: 'pointer',
            appearance: 'none',
          }}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <span
          style={{
            position: 'absolute',
            right: 12,
            top: '50%',
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
            color: C.n400,
            fontSize: 10,
          }}
        >
          ▼
        </span>
      </div>
      {error && (
        <span style={{ fontFamily: C.font, fontSize: 12, fontWeight: 300, color: C.red }}>{error}</span>
      )}
    </div>
  );
}

/* Segmented control — markierter Zustand komplett blau gefüllt. */
export function Seg({
  value,
  options,
  onChange,
}: {
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {options.map((o) => {
        const on = value === o;
        return (
          <button
            key={o}
            type="button"
            onClick={() => onChange(o)}
            style={{
              fontFamily: C.font,
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: '0.01em',
              padding: '12px 20px',
              cursor: 'pointer',
              borderRadius: 2,
              border: '2px solid ' + (on ? C.blue : C.n200),
              background: on ? C.blue : '#fff',
              color: on ? '#fff' : C.n600,
              transition: 'all .15s',
            }}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}

export function Slider({
  value,
  min,
  max,
  onChange,
  fmt,
}: {
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
  fmt?: (v: number) => string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
        <span style={{ fontFamily: C.font, fontWeight: 700, fontSize: 26, letterSpacing: '-0.02em', color: C.n900 }}>
          {fmt ? fmt(value) : value}
        </span>
        <span style={{ fontFamily: C.mono, fontSize: 11, color: C.n400 }}>
          {fmt ? fmt(min) : min} – {fmt ? fmt(max) : max}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{
          width: '100%',
          height: 4,
          appearance: 'none',
          WebkitAppearance: 'none',
          borderRadius: 2,
          outline: 'none',
          cursor: 'pointer',
          background: `linear-gradient(90deg,${C.blue} 0%,${C.blue} ${pct}%,${C.n150} ${pct}%,${C.n150} 100%)`,
        }}
      />
    </div>
  );
}

export function Check({
  checked,
  onChange,
  children,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  children: React.ReactNode;
}) {
  return (
    <label style={{ display: 'flex', gap: 12, alignItems: 'flex-start', cursor: 'pointer' }}>
      <span
        onClick={() => onChange(!checked)}
        style={{
          flexShrink: 0,
          width: 20,
          height: 20,
          marginTop: 1,
          border: '1.5px solid ' + (checked ? C.blue : C.n300),
          background: checked ? C.blue : '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all .15s',
        }}
      >
        {checked && (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="square">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </span>
      <span style={{ fontFamily: C.font, fontWeight: 300, fontSize: 13.5, lineHeight: 1.5, color: C.n600 }}>
        {children}
      </span>
    </label>
  );
}
