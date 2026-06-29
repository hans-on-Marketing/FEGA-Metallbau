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
  integrations: [
    react(),
    sitemap({
      changefreq: 'monthly',
      priority: 0.7,
      // Rechtstexte aus der Sitemap nehmen (kein Ranking-Wert, verwässern nur).
      filter: (page) => !/\/(impressum|datenschutz|agb|mietbedingungen)\/?$/.test(page),
      serialize(item) {
        if (/\/FEGA-Metallbau\/?$/.test(item.url)) {
          item.priority = 1.0; // Startseite
          item.changefreq = 'weekly';
        } else if (item.url.includes('/leistungen/')) {
          item.priority = 0.9; // Leistungsseiten
        } else if (/\/(karriere|ausbildung)\/?$/.test(item.url)) {
          item.changefreq = 'weekly'; // Stellen ändern sich häufiger
        }
        return item;
      },
    }),
  ],
  build: { format: 'directory' },
});
