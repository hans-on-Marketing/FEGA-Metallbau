/* Übergabe einer vorausgefüllten Anfrage vom Konfigurator an den Kontakt-Wizard.
   Im Prototyp via window.FEGA_intent gelöst; in der MPA über sessionStorage,
   da Konfigurator und Wizard auf verschiedenen Seiten leben. */

export interface FegaIntent {
  bereich?: string;
  anliegen?: string;
  fields?: Record<string, string>;
  mietdauer?: number;
  nachricht?: string;
}

const KEY = 'fega_intent';

export function setIntent(intent: FegaIntent) {
  try {
    sessionStorage.setItem(KEY, JSON.stringify(intent));
  } catch {
    /* sessionStorage nicht verfügbar — Intent entfällt */
  }
}

export function takeIntent(): FegaIntent | null {
  try {
    const raw = sessionStorage.getItem(KEY);
    if (!raw) return null;
    sessionStorage.removeItem(KEY);
    return JSON.parse(raw) as FegaIntent;
  } catch {
    return null;
  }
}
