# Dependency Status

> **Status: ✅ Verified against the M1.5 scaffold on upstream `main`**

This document is the installed-dependency companion to [TechStack.md](TechStack.md). `TechStack.md` records the project’s target technology decisions; this page records what is actually declared and available in the current repository. A technology may therefore appear in the target stack without appearing in the installed scaffold yet.

## Summary

| Area | Installed or declared in the current scaffold | Target-state technology decisions | Status |
|---|---|---|---|
| Frontend framework | Next.js `^14.2.4`, React `^18.3.1`, React DOM `^18.3.1` | Next.js 15 and React 19 | Target versions are not yet installed. |
| Frontend styling | Tailwind CSS `^3.4.4`, PostCSS, Autoprefixer | Tailwind CSS with shadcn/ui primitives | Tailwind is present; shadcn/ui is planned and not installed. |
| Frontend data and forms | No TanStack Query, React Hook Form, or Zod dependency | TanStack Query, React Hook Form, and Zod | Planned; add through dedicated implementation issues. |
| Frontend testing | No Vitest or React Testing Library dependency | Vitest and React Testing Library | Planned; no frontend test suite is currently configured. |
| Backend runtime | Express `^4.19.2`, CORS, dotenv | Express.js API service | Express scaffold is installed; product API layers are not implemented. |
| Backend persistence | Prisma and `@prisma/client` `^5.17.0` | Prisma ORM with PostgreSQL and pgvector | Prisma is declared; domain models and migrations remain minimal. |
| Backend security and validation | No JWT, cookie-session, Zod, or Swagger dependency | JWT in HTTP-only cookies, Zod, OpenAPI/Swagger | Target-state; not installed in the current scaffold. |
| Backend testing | No Jest dependency or configured suite on upstream `main` | Jest for backend tests | Planned; see [Issue #15](https://github.com/JanmejaiPratapTonk-123/ResearchForge/issues/15). |
| AI service runtime | Python `>=3.12`, FastAPI `>=0.111.0`, Uvicorn `>=0.30.0` | FastAPI Python microservice | Installed and runnable as a health-check scaffold. |
| AI/ML libraries | No `sentence-transformers` package | `sentence-transformers` with `all-MiniLM-L6-v2` | Planned; embedding implementation is not yet present. |
| Python development tools | Optional `pytest>=8.0.0` and `ruff>=0.4.0` in `pyproject.toml` | Pytest and Ruff | Declared as optional development targets; no feature-level test suite or lint configuration is present. |
| Package management | pnpm workspace with a root lockfile; `uv` is documented for Python | pnpm for Node and uv for Python | Both workflows are documented; Python has no committed uv lockfile yet. |

## How to Interpret the Technology Stack Document

The entries in [TechStack.md](TechStack.md) are architectural decisions and target-state choices, not a promise that every package is already installed. For example, the document lists Next.js 15 and React 19, while `frontend/package.json` currently declares Next.js 14 and React 18. It also describes TanStack Query, Zod, Jest, Pytest, and sentence-transformers as selected tools even though most of those packages are not part of the current runtime dependency graph.

Contributors should use the installed manifests as the source of truth for what can be imported today:

| Service | Manifest |
|---|---|
| Root workspace | [`package.json`](../package.json) |
| Frontend | [`frontend/package.json`](../frontend/package.json) |
| Backend | [`backend/package.json`](../backend/package.json) |
| AI service | [`ai-services/pyproject.toml`](../ai-services/pyproject.toml) and [`ai-services/requirements.txt`](../ai-services/requirements.txt) |

Do not add a target-state dependency merely to make the manifest match the architecture document. A dependency migration should have its own issue, acceptance criteria, compatibility review, and validation plan.

## Current Validation Commands

The current scaffold can be validated without installing the target-state feature libraries:

```bash
# Install the Node workspace dependencies
pnpm install

# Build the Node.js workspaces
pnpm build

# Validate Python syntax
python -m compileall -q ai-services
```

The root testing contract is tracked separately in [Issue #15](https://github.com/JanmejaiPratapTonk-123/ResearchForge/issues/15). Until that work is merged, do not infer from the target testing table that frontend, backend, or AI feature tests are already available.

## References

[1]: ../package.json "Root workspace manifest"
[2]: ../frontend/package.json "Frontend manifest"
[3]: ../backend/package.json "Backend manifest"
[4]: ../ai-services/pyproject.toml "AI-service Python project definition"
[5]: TechStack.md "ResearchForge target technology decisions"
