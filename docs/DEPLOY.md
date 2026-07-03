# Deployment Guide

## Prerequisites

- Node.js 20+ (22+ recommended for latest Astro tooling)
- Vercel account
- Web3Forms access key from [web3forms.com](https://web3forms.com)

## Local development

```bash
cp .env.example .env
# Add your PUBLIC_WEB3FORMS_KEY to .env

npm install
npm run dev
```

Site runs at `http://localhost:4321`.

## Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `PUBLIC_WEB3FORMS_KEY` | Yes (for form) | Web3Forms access key. Without it, contact page shows mailto fallback. |

## Build

```bash
npm run build
npm run preview
```

Verify all 21 routes build:

- `/` (homepage)
- `/actors`, `/professionals`, `/organizations`
- 12 service pages under `/[audience]/[slug]`
- `/about`, `/credits`, `/success-stories`, `/contact`, `/privacy`

## Deploy to Vercel

1. Push repo to GitHub
2. Import project in [Vercel](https://vercel.com/new)
3. Framework preset: **Astro** (auto-detected)
4. Build command: `npm run build`
5. Output directory: `dist`
6. Add environment variable:
   - `PUBLIC_WEB3FORMS_KEY` = your Web3Forms key
7. Deploy

## Custom domain

1. In Vercel project → Settings → Domains
2. Add `www.audreylecrone.com` and `audreylecrone.com`
3. Update DNS per Vercel instructions
4. Confirm `site` in `astro.config.mjs` matches production URL

## Post-deploy checklist

- [ ] Contact form submits successfully
- [ ] Sitemap at `/sitemap-index.xml`
- [ ] All placeholder images documented in `docs/ASSETS.md`
- [ ] Lighthouse mobile score 90+ (run in Chrome DevTools)
- [ ] No horizontal scroll at 320px viewport

## Email

Form submissions deliver to `americanaccentcoaching@gmail.com` via Web3Forms. Configure Web3Forms dashboard to use this destination email.
