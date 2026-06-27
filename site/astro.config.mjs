// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// FEGA GmbH website — static-first Astro site with React islands
// for the interactive widgets (nav mega-menu, request wizard, configurators,
// job board, FAQ, references filter).
//
// Deploy-Ziel: GitHub Pages (Projekt-Repo) → Unterpfad /FEGA-Metallbau/.
// site = github.io-Origin (Owner kleingeschrieben), base = Repo-Name.
// Für die spätere Produktivdomain einfach site auf https://fega-metallbau.de
// und base auf '/' setzen.
export default defineConfig({
  site: 'https://hans-on-marketing.github.io',
  base: '/FEGA-Metallbau/',
  trailingSlash: 'ignore',
  integrations: [react(), sitemap({ changefreq: 'monthly', priority: 0.7 })],
  build: { format: 'directory' },
});
