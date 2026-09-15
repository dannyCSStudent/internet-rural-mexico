# Codex Task 01 — Internet Rural México Foundation

## Mission

Convert the existing `business-app-starter-template` Turborepo into the technical foundation for **Internet Rural México**. This is a controlled foundation task. Do not attempt to build the entire product.

## Read first

Before changing code, read:
- `AGENTS.md`
- `PROJECT_STATUS.md`
- `ROADMAP.md`
- `BRAND.md`
- `BRAND_DECISION.md`
- `MVP_REQUIREMENTS.md`
- `SEO_PLAN.md`

Inspect the repository structure and current git status before editing.

## Locked product decisions

Brand: Internet Rural México

Primary domain: `internetrural.mx` (confirm at registrar before purchase)

Tagline: `Internet para donde las opciones tradicionales no llegan.`

Supporting message: `Entiende tus opciones antes de gastar en Internet.`

Initial market: Tiquicheo → Michoacán → rural Mexico

Position: independent rural-connectivity information and comparison resource.

Initial monetization: eligible Starlink referrals.

## Starting architecture

- Turborepo
- pnpm
- `apps/web` — Next.js
- `apps/api` — FastAPI
- `apps/mobile` — Expo
- `packages/ui` — shared UI
- `packages/types` — shared types

For this MVP foundation:

**ACTIVE:** `apps/web` and only reusable shared packages actually needed.

**DORMANT:** `apps/api`, `apps/mobile`, Supabase infrastructure.

Do not delete dormant apps merely because they are not used yet.

## Template conversion

The source template is CRM-oriented. Identify and remove/isolate CRM-specific functionality from the active web product, including clients, tags, activity records, CRM dashboard language, CRM seed/demo content, CRM-specific routes, and CRM-specific active shared domain types.

Preserve useful generic infrastructure. Do not rewrite the entire monorepo unnecessarily.

## MVP routes

Establish:

- `/`
- `/internet-rural`
- `/starlink-mexico`
- `/starlink-es-para-mi`
- `/faq`
- `/sobre-nosotros`
- `/divulgacion`
- `/privacidad`
- `/contacto`

These may initially contain clean foundation-level content/placeholders appropriate to the brand. Do not create a large content library in this task.

## Brand system

Use:

- Deep Green `#24523A`
- Sky Blue `#2F80C0`
- Warm Sand `#E7D6B5`
- Charcoal `#1F2933`
- Off White `#F7F5EF`

Typography: Inter or Geist Sans, depending on what the existing project supports cleanly.

Visual direction: trustworthy, rural, modern, simple, mobile-first. No Starlink/SpaceX branding or imagery implying official affiliation.

## Homepage foundation

H1:
`Internet para donde las opciones tradicionales no llegan.`

Supporting:
`¿Tu Internet es lento, se cae o no tienes señal? Te ayudamos a entender tus opciones de conectividad para ranchos, fincas, casas y negocios rurales antes de gastar tu dinero.`

Primary CTA: `¿Starlink es para mí?`

Secondary CTA: `Ver opciones de Internet rural`

Visible disclosure:
`Este sitio es independiente de Starlink. Algunos enlaces son enlaces de referencia. Si realizas una compra elegible mediante uno de ellos, puedo recibir una recompensa de Starlink.`

## Do not build yet

Do NOT implement authentication, user accounts, Supabase database/migrations, API business endpoints, FastAPI business logic, payment processing, Stripe integration, analytics database, CMS, AI chatbot, automated content generation, social automation, installer marketplace, mobile product features, complex qualification backend, admin dashboard, or CRM features.

## Technical discipline

- Prefer existing dependencies.
- Do not add a dependency unless necessary.
- Do not hard-code temporary Starlink pricing.
- Do not invent testimonials, traffic, coverage, speed, availability, or customer results.
- Do not claim official Starlink affiliation.
- Keep implementation simple.
- Preserve root developer workflow where practical.

## Validation

After implementation, attempt:

```bash
pnpm install
pnpm lint
pnpm check-types
pnpm build
pnpm dev
```

If a check fails because dormant API/mobile infrastructure requires environment values intentionally excluded from this MVP, document the exact failure rather than adding fake configuration or weakening security.

## Final report

Report:
1. Files changed.
2. CRM functionality removed or isolated.
3. Brand/foundation work completed.
4. Commands/checks that passed.
5. Commands/checks that failed.
6. Exact reason for each failure.
7. Anything intentionally not changed.
8. Recommended NEXT bounded task.

Do not silently continue into the next task.
