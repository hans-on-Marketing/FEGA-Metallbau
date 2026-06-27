/* Pfad-Helfer für Deploys unter einem Unterpfad (z. B. GitHub Pages:
   https://<user>.github.io/<repo>/). Stellt internen Links/Assets den
   konfigurierten `base`-Pfad (import.meta.env.BASE_URL) voran.
   Externe Links, Anker, mailto: und tel: bleiben unverändert.
   Funktioniert in .astro-Dateien und in Client-Islands (Vite injiziert BASE_URL). */

const BASE = import.meta.env.BASE_URL; // z. B. '/' oder '/FEGA-Metallbau/'

export function withBase(p?: string | null): string {
  if (!p) return p ?? '';
  if (/^(https?:|mailto:|tel:|#|\/\/)/.test(p)) return p;
  const b = BASE.replace(/\/$/, '');
  return p.startsWith('/') ? b + p : b + '/' + p;
}
