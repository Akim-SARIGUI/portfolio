# Portfolio — Akim Sarigui

Portfolio fullstack : **Nuxt 4** (front) + **NestJS** + **PostgreSQL** + **Prisma** (API).

## Stack

| Couche | Techno |
|--------|--------|
| Frontend | Nuxt 4, Vue 3, Vuetify 3 |
| Backend | NestJS 11 |
| ORM | Prisma 6 |
| DB | PostgreSQL 16 (Docker) |

## Prérequis

- Node.js 20+
- pnpm
- Docker

## Démarrage rapide

```bash
# 1. Base de données
docker compose up -d

# 2. Backend
cd backend
cp .env.example .env
pnpm install
pnpm prisma:migrate
pnpm prisma:seed
pnpm start:dev
# → http://localhost:3001/api

# 3. Frontend (autre terminal, racine du repo)
cp .env.example .env
pnpm install
pnpm dev
# → http://localhost:3000
```

## API

| Méthode | Route | Description |
|---------|-------|-------------|
| GET | `/api/health` | Santé |
| GET | `/api/profile` | Profil |
| GET | `/api/projects` | Projets |
| GET | `/api/experiences` | Expériences |
| GET | `/api/skills` | Compétences (groupées) |
| POST | `/api/messages` | Formulaire contact |

## Variables d'environnement

**Backend** (`backend/.env`)

- `DATABASE_URL` — Postgres (défaut port **5434**)
- `PORT` — défaut `3001`
- `CORS_ORIGIN` — défaut `http://localhost:3000`

**Frontend** (`.env`)

- `NUXT_PUBLIC_API_BASE` — défaut `http://localhost:3001/api`

## Scripts utiles (racine)

```bash
pnpm db:up
pnpm dev:api
pnpm db:seed
```
