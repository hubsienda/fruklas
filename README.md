# FRUKLAS corporate website

First-phase rebuild of the FRUKLAS S.L. corporate site.

## Stack

- Astro
- TypeScript
- Tailwind CSS
- Static generation

## Commands

```bash
npm install
npm run dev
npm run build
```

## Content architecture

Spanish is the implemented language in phase 1 and lives under `/es/`. The locale registry already reserves `en`, `fr`, `it`, and `de` without inventing untranslated content.

Reusable company details and navigation live under `src/data/`. Product-category data is isolated so it can later migrate to Astro content collections, JSON, YAML, or a lightweight remote content source without changing page components.

The supplied Google Photos references are retained in `src/data/site.ts` as source notes only. Images are not hotlinked or scraped.

## Canonical URLs

Set `PUBLIC_SITE_URL` in the deployment environment to emit absolute canonical and Open Graph URLs. This avoids assuming a production hostname.

## Deliberately deferred

- final commercial copy;
- full product catalogue and product photography;
- certifications not yet supplied;
- translations for English, French, Italian and German;
- legal-page content;
- CMS or remote content source;
- sitemap until the production hostname is confirmed.
