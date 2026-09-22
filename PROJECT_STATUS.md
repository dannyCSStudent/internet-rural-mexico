# PROJECT_STATUS.md

# Starlink Organic Referral Machine — Project Status

**Last updated:** 2026-09-22  
**Status:** 🟡 Web MVP foundation in progress  
**Current milestone:** Build the active web MVP without backend, auth, or mobile work

## 1. Executive status

The Starlink referral account is configured for **cash rewards**. Stripe onboarding and banking/payout setup have been completed, and the Starlink referral page shows cash.

The software/marketing system itself has **not** been built yet. We are intentionally starting from scratch.

## 2. Completed

### Starlink / referral
- [x] Referral program activated
- [x] Cash reward method selected
- [x] Stripe onboarding completed
- [x] Banking/payout information submitted
- [x] Starlink referral page shows cash

### Planning
- [x] Zero-paid-advertising strategy selected
- [x] Referral funnel defined
- [x] Rural/underserved connectivity identified as initial niche
- [x] Master roadmap created
- [x] Codex identified as primary development agent
- [x] Agent instructions created
- [x] Project status file created

## 3. Not completed

### Business / brand
- [ ] Select final brand name
- [ ] Check domain availability
- [ ] Check social handles
- [ ] Define brand voice
- [ ] Define target customer in detail

### Research
- [ ] Competitor research
- [ ] Keyword research
- [ ] Search-intent research
- [ ] Community research
- [ ] First 20 content topics
- [ ] First geographic focus

### Technical
- [x] Choose final stack
- [x] Create Git repository
- [x] Initialize application
- [ ] Configure deployment
- [ ] Build MVP website

### Content / marketing
- [ ] First article
- [ ] First video
- [ ] First short
- [ ] First social post
- [x] Qualification tool (initial client-side MVP)
- [ ] Launch website
- [ ] Begin organic distribution
- [ ] First referral click
- [ ] First eligible referral

## 4. Current phase: Foundation

Immediate work:
1. Convert the active web app from starter-template content to Internet Rural México.
2. Keep API and mobile dormant during the MVP foundation.
3. Establish the locked MVP routes with foundation-level content.
4. Verify lint, type checks, build, and development startup where practical.

## 5. What we are NOT building yet

Do not build yet:
- Full admin dashboard
- Authentication
- Complex database
- CRM
- Automated social posting
- AI content generator
- Email automation
- Advanced analytics
- Mobile app
- Payment processing
- Stripe integration inside our app

Those are later-stage possibilities.

## 6. MVP definition

Initial public pages:
- Home
- Starlink Mexico guide
- Rural Internet guide
- Is Starlink right for me?
- FAQ
- About
- Disclosure
- Privacy
- Contact

Core funnel:

```text
Visitor → Useful information → Qualification → Current Starlink information → Referral CTA → Starlink
```

Initial measurement:
- Page views
- Referral CTA clicks
- Traffic source
- Content performance

Current analytics state:
- [x] Local referral-click event hook added for future analytics integration
- [ ] Production analytics provider selected
- [ ] Production analytics configured
- [ ] Real visitor or referral-click data collected

## 7. Technical direction

Preferred starting architecture:

```text
Next.js → Vercel
```

Add Supabase/database only when the MVP actually requires persistent application data.

## 8. Codex timing

Codex may work on bounded foundation tasks only. Do not proceed into advanced application features without a new explicit task.

Prerequisites now satisfied:
- [x] Initial audience is selected
- [x] Brand direction is selected
- [x] MVP requirements are approved
- [x] Stack is selected
- [x] Repository location is selected

### First Codex task

When ready, tell Codex:

> Read `AGENTS.md`, `ROADMAP.md`, and `PROJECT_STATUS.md`. We are starting this project from scratch. Do not build application features yet. Inspect the repository and environment, then initialize only the project foundation specified by the current milestone. Do not add authentication, database infrastructure, analytics, or future roadmap features. Run appropriate checks and report what you created, what passed, what failed, and the next recommended task.

## 9. Decision log

| Date | Decision |
|---|---|
| 2026-09-06 | Cash rewards selected |
| 2026-09-06 | Zero-paid-advertising strategy |
| 2026-09-06 | Independent brand |
| 2026-09-06 | Rural/underserved connectivity initial niche |
| 2026-09-07 | Codex will handle engineering |
| 2026-09-07 | Start with small web MVP |
| 2026-09-07 | Documentation before coding |
| 2026-09-22 | Initial client-side qualification tool added without database or accounts |
| 2026-09-22 | Referral CTA click emits a local browser event only; no analytics provider configured |

## 10. Current blockers

None for the web foundation. Current Starlink pricing, availability, plan details, and referral rules still require verification from official Starlink sources before publishing purchase-oriented content.

## 11. Next action

Complete Codex Task 01, then review the diff before moving to the next bounded MVP task.

## 12. Success milestones

- [x] Repository initialized
- [ ] Website MVP live
- [ ] First organic visitor
- [ ] First referral click
- [ ] First qualified lead
- [x] Initial qualification tool
- [ ] First eligible referral
- [ ] First cash reward
- [ ] Repeatable organic acquisition system

## 13. Important rule

Do not confuse **building software** with **building a business**.

Every technical feature must eventually answer:

> Does this help us attract, educate, qualify, convert, or retain the right audience?

If not, defer it.

## Turborepo Template Decision — 2026-09-15

The project will use `dannyCSStudent/business-app-starter-template` as the technical starting point.

The template already provides Turborepo + pnpm, `apps/web` (Next.js), `apps/api` (FastAPI), `apps/mobile` (Expo), shared UI/types, CI, and development tooling.

### Conversion rule

- Keep the monorepo architecture and reusable tooling.
- Make `apps/web` the only active product surface for the MVP.
- Keep `apps/api` and `apps/mobile` in the repository but do not develop them during the initial MVP unless a concrete requirement appears.
- Remove/isolate CRM-specific implementation from the active web experience and shared domain types.
- Do not introduce Supabase, authentication, analytics databases, payments, or future infrastructure merely because the template contains them.

### First Codex implementation task

Codex must first inspect the cloned template and environment, then perform only the foundation conversion described in `CODEX_TASK_01_FOUNDATION.md`. It must test and report before proceeding to any subsequent task.
