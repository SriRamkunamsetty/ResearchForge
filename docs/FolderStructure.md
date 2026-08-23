# Folder Structure

This document explains the current repository layout and identifies which directories are reserved for future implementation milestones. Use it to decide where a contribution belongs without assuming that planned product layers already exist.

---

## Current M1.5 Repository Map

```text
ResearchForge/
├── .github/                # Issue/PR templates and CI workflows
├── ai-services/            # FastAPI scaffold; currently main.py and /health
├── assets/                 # Logos, banners, diagrams, and wireframes
├── backend/                # Express scaffold; currently /health route
├── database/               # Prisma schema and database documentation
├── docs/                   # Project guides, architecture, and roadmap
├── frontend/               # Next.js application shell
├── .gitignore
├── CHANGELOG.md
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── README.md
└── SECURITY.md
```

The current service endpoints and local ports are documented in the [Developer Guide](DeveloperGuide.md). Product features, API layers, embedding pipelines, and collaboration workflows remain future milestone work.

---

## Directory Roles and Contributor Responsibilities

| Folder | Current contents and responsibility | Future scope |
|---|---|---|
| [`docs/`](.) | Project guides, architecture notes, roadmap, and contribution documentation. | Continue documenting accepted implementation decisions. |
| [`assets/`](../assets/) | Project logos, banners, diagrams, and wireframes. | Add approved design assets for future product surfaces. |
| [`frontend/`](../frontend/) | Next.js application shell under `src/app/`, with package and styling configuration. | Add feature pages, components, hooks, and API clients through M2/M3 issues. |
| [`backend/`](../backend/) | Express application entry point and the current `/health` route. | Add routes, controllers, services, validation, authentication, and persistence layers through accepted issues. |
| [`ai-services/`](../ai-services/) | FastAPI application entry point and the current `/health` route. | Add routers, embedding models, inference, and summarization pipelines through AI-service issues. |
| [`database/`](../database/) | Prisma schema area and database documentation. | Add migrations, seed data, vector indexes, and domain models when backend features require them. |
| [`.github/`](../.github/) | Issue templates, pull-request template, workflow definitions, and repository automation. | Extend quality gates only when the relevant tools and contracts are implemented. |

---

## Planned M2/M3 Structure

The following paths are reserved for future milestone work and should not be created speculatively:

```text
frontend/src/components/       # Planned UI component system
frontend/src/hooks/            # Planned React hooks
frontend/src/lib/              # Planned API and utility modules
frontend/src/types/            # Planned frontend types
backend/src/controllers/       # Planned HTTP controllers
backend/src/services/          # Planned business-logic services
backend/src/middleware/        # Planned auth, error, and validation middleware
backend/src/schemas/           # Planned Zod schemas
ai-services/routers/           # Planned FastAPI routers
ai-services/handlers/          # Planned request handlers
ai-services/models/            # Planned embedding and inference models
packages/types/                # Planned shared TypeScript package
```

For the rationale and target-state conventions, see the [Developer Experience Guide](DevExperience.md). For runnable setup instructions, see the [Developer Guide](DeveloperGuide.md).

---

👉 **Next Step:** Ready to contribute? Check the **[docs/GettingStarted.md](GettingStarted.md)** guide.
