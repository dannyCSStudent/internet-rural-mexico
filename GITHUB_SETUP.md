# GitHub Setup — Internet Rural México

## New repository

Create:

`dannyCSStudent/internet-rural-mexico`

Use the existing repository `dannyCSStudent/business-app-starter-template` as the template source.

Prefer **Use this template → Create a new repository** rather than forking. This starts the new project without carrying the template's history.

Do not initialize the new repository with another README, `.gitignore`, or license if the template already contains them.

## Local clone

```bash
mkdir -p ~/Documents/Demos
cd ~/Documents/Demos
git clone https://github.com/dannyCSStudent/internet-rural-mexico.git
cd internet-rural-mexico
```

Copy the project-control files from this bundle into the repository root:

- `AGENTS.md`
- `PROJECT_STATUS.md`
- `ROADMAP.md`
- `BRAND.md`
- `BRAND_DECISION.md`
- `MVP_REQUIREMENTS.md`
- `SEO_PLAN.md`
- `CODEX_TASK_01_FOUNDATION.md`

Do not commit secrets or local `.env` files.

## Start Codex

From the repository root:

```bash
codex
```

Give Codex the instructions in `CODEX_TASK_01_FOUNDATION.md`.

The first task is intentionally bounded. Stop and review Codex's report/diff before Task 02.
