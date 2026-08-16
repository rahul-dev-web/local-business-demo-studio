# Local Business Demo Studio

A sales-focused showcase platform for presenting polished website demos to local and small businesses.

## Stack

- Next.js 15 + React 19
- TypeScript
- App Router
- Tailwind CSS
- Lucide icons
- Responsive-first architecture
- Repository abstraction for personalized demos
- Supabase-ready business profile schema
- Dynamic sitemap, robots policy, favicon and web manifest

## Demo industries

Restaurant, Salon, Gym, Clinic, Coaching, Hotel, Bakery, Retail, Automobile, and Real Estate.

## Routes

- `/` — studio demo hub
- `/restaurant`, `/salon`, `/gym`, `/clinic`, `/coaching` — primary industry demos
- `/hotel`, `/bakery`, `/retail`, `/automobile`, `/real-estate` — additional industry demos
- `/client/[business]` — personalized client previews

## Development

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run lint
npm run build
```

## CI

GitHub Actions runs linting and a production build on pushes and pull requests targeting `main`.

## Data architecture

Personalized demos currently use the local data adapter through `DemoRepository`. The repository contract and `supabase/schema.sql` are prepared for a future Supabase-backed implementation without coupling the page layer to the database.

## Branch policy

This project intentionally uses a **single `main` branch** during the initial build and sales-demo development phase.
