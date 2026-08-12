# GFB Federal Solutions

Professional website for **GFB Federal Solutions** — federal technology consulting focused on data, architecture, analytics, and AI-enabled solutions for U.S. government and defense organizations.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Deployable to Vercel

## Pages

- `/` — Home
- `/capabilities` — Service capabilities
- `/about` — Company overview and federal contractor placeholders
- `/contact` — Contact form
- `/privacy` — Privacy policy

## Configuration

Edit federal contractor placeholders and contact email in:

- [`src/lib/company.ts`](src/lib/company.ts)

Edit capability content in:

- [`src/lib/capabilities.ts`](src/lib/capabilities.ts)

Set production URL in `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://gfbfed.com
```

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Changelog

See [CHANGELOG.md](CHANGELOG.md).
