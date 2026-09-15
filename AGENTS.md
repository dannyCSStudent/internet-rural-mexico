# AGENTS.md

## Project identity

This repository contains the **Starlink Organic Referral Machine**: an independent information, content, SEO, and referral platform designed to generate qualified Starlink referrals through organic traffic.

This project is **not owned by Starlink** and must never imply official Starlink employment, agency, distribution, or reseller status.

The master plan is `ROADMAP.md`. Current state is `PROJECT_STATUS.md`.

## Mission

Build the smallest useful system that can:
1. Attract people with real Internet/connectivity problems.
2. Educate them with accurate information.
3. Help them evaluate whether Starlink may fit their needs.
4. Direct eligible prospects to the user's Starlink referral link.
5. Measure organic marketing performance.
6. Improve from measured results.

**Core principle: Help first. Refer second.**

## Codex workflow

Before changing code:
1. Read `ROADMAP.md`.
2. Read `PROJECT_STATUS.md`.
3. Inspect the repository and existing conventions.
4. Identify the smallest task for the current milestone.
5. Make a short implementation plan.
6. Do not implement future phases without instruction.

After changing code:
1. Run relevant tests.
2. Run lint/type checks when available.
3. Run a production build when practical.
4. Inspect the diff.
5. Remove unnecessary changes.
6. Update project documentation when state changes.
7. Report exactly what changed and what was verified.

Never claim a check passed unless it was actually run.

## Scope discipline

Prefer simple, maintainable solutions. Build the MVP before advanced infrastructure.

Do not:
- Build unnecessary features.
- Add dependencies without a reason.
- Build a large backend before the MVP needs one.
- Fabricate analytics, testimonials, reviews, or conversion data.
- Hard-code temporary Starlink pricing as permanent truth.
- Guarantee availability, speed, uptime, or pricing.
- Create thin SEO pages that only change a location name.
- Use bots, click farms, fake traffic, or referral manipulation.
- Store credentials in source control.

## Starlink compliance

Never:
- Call the site “Official Starlink.”
- Claim to be a Starlink employee, agent, distributor, or reseller unless independently verified.
- Misrepresent referral rewards.
- Hide the referral relationship where disclosure is appropriate.
- Encourage fraudulent or duplicate referrals.

Use current Starlink sources for pricing, availability, plans, hardware, and referral rules.

Recommended disclosure:

> Este sitio es independiente de Starlink. Algunos enlaces son enlaces de referencia. Si realizas una compra elegible mediante uno de ellos, puedo recibir una recompensa de Starlink.

## Security

Never request, print, commit, or expose:
- Starlink passwords
- Stripe passwords
- Bank account numbers
- API keys/secrets
- OAuth tokens
- Authentication cookies
- Recovery codes
- Identity-document numbers
- Payment-card data

Use environment variables for secrets. Keep `.env*` out of Git except safe examples.

## Financial-account boundary

Human-controlled actions include Starlink account changes, Stripe onboarding, banking changes, tax information, payout settings, accepting terms, and financial claims. Codex must never invent business or financial information for these forms.

## Content rules

Content should be useful, honest, specific, current, and transparent about referral incentives. Avoid clickbait, fake scarcity, unverified technical claims, and copied Starlink content.

## SEO rules

Every page needs a real purpose. Use descriptive titles, headings, internal links, canonical URLs when appropriate, sitemap, robots.txt, metadata, accessibility, and structured data where appropriate. Do not use deceptive SEO.

## Analytics rules

Distinguish visitors, engagement, referral clicks, qualified leads, referrals, eligible referrals, and rewards. Never fabricate numbers.

## Architecture philosophy

Start small. The preferred initial direction is a simple web application, potentially Next.js + Vercel. Add a database or API only when the MVP needs it. Do not introduce microservices, queues, Kubernetes, or other complex infrastructure without a demonstrated need.

## Current development rule

The project is in **Foundation / Planning**. Do not begin full application development until the audience, brand direction, MVP scope, and stack are decided.

## Good Codex task

> Read `AGENTS.md`, `ROADMAP.md`, and `PROJECT_STATUS.md`. Implement only the current MVP milestone. Do not add future features. Run appropriate checks and report what changed and what passed.

## Completion report

Use:

### Changed
- ...

### Verified
- ...

### Not verified
- ...

### Next recommended task
- ...

## Source of truth

When documents disagree:
1. User's current explicit instruction
2. Current Starlink account/program information for Starlink-specific facts
3. `ROADMAP.md`
4. `PROJECT_STATUS.md`
5. `AGENTS.md`
6. Existing implementation

If a conflict affects compliance, security, money, or account eligibility, stop and flag it rather than guessing.
