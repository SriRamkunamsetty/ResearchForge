# Developer Experience Guide

> **Status: ✅ Active — M1.5 runnable scaffold baseline**
> This document separates the files and conventions available in the current repository from target-state architecture planned for later milestones.

Following the conventions below keeps contributions consistent without implying that future product layers already exist.

---

## Table of Contents

- [Current Scaffold Structure](#current-scaffold-structure)
- [Naming Conventions](#naming-conventions)
- [Target-State Code Organization](#target-state-code-organization)
  - [Frontend](#frontend)
  - [Backend API](#backend-api)
  - [AI Service](#ai-service)
- [Target-State State Management](#target-state-state-management)
- [Target-State API Organization](#target-state-api-organization)
- [Environment Variable Strategy](#environment-variable-strategy)
- [Target-State Shared Types](#target-state-shared-types)
- [Target-State Reusable Components](#target-state-reusable-components)

---

## Current Scaffold Structure

The M1.5 repository is a runnable baseline rather than the complete product architecture. The currently implemented service entry points are:

```text
ResearchForge/
├── .github/                # Issue/PR templates and CI workflows
├── ai-services/
│   ├── main.py             # FastAPI application with /health
│   ├── pyproject.toml
│   ├── requirements.txt
│   └── .env.example
├── assets/                 # Logos, banners, and design assets
├── backend/
│   ├── src/
│   │   ├── index.ts        # Express listener entry point
│   │   └── routes/
│   │       └── health.ts   # /health route
│   ├── package.json
│   └── .env.example
├── database/
│   ├── prisma/schema.prisma
│   └── README.md
├── docs/                   # Project documentation
├── frontend/
│   ├── src/app/            # Next.js application shell
│   ├── package.json
│   └── .env.example
├── docker-compose.yml
├── pnpm-workspace.yaml
└── README.md
```

The `controllers/`, `services/`, `middleware/`, `schemas/`, feature-specific frontend folders, AI routers, embedding models, and shared packages described below are **target-state structure**. Contributors should create them only when an accepted milestone issue requires them.

---

## Naming Conventions

Consistent naming reduces cognitive load for contributors reading unfamiliar code.

| Scope | Convention | Example |
|---|---|---|
| React components | `PascalCase.tsx` | `PaperCard.tsx` |
| Utility files | `kebab-case.ts` | `format-date.ts` |
| API route files | `kebab-case.ts` | `papers.routes.ts` |
| Test files | `[filename].test.ts` | `papers.routes.test.ts` |
| Python modules | `snake_case.py` | `embed_handler.py` |
| Directories | `kebab-case/` | `components/search-results/` |
| Functions and variables | `camelCase` in TypeScript; `snake_case` in Python | `fetchPapers`, `fetch_papers` |
| TypeScript types/interfaces | `PascalCase` | `PaperMetadata` |
| Constants | `UPPER_SNAKE_CASE` | `MAX_RESULTS` |
| Environment variables | `UPPER_SNAKE_CASE` | `DATABASE_URL` |

---

## Target-State Code Organization

The sections below describe the intended product architecture. They are guidance for future M2/M3 implementation work, not a claim that the directories already exist.

### Frontend

The target frontend structure is feature-oriented:

```text
frontend/src/
├── app/                    # Next.js App Router route segments
│   ├── (auth)/             # Planned authentication routes
│   ├── search/             # Planned search interface
│   ├── papers/[id]/        # Planned paper detail route
│   └── workspace/          # Planned collaboration route
├── components/
│   ├── ui/                 # Planned shadcn/ui primitives
│   ├── search/             # Planned search components
│   ├── papers/             # Planned paper components
│   └── layout/             # Planned navigation and layout components
├── hooks/                  # Planned custom React hooks
├── lib/                    # Planned API and utility modules
└── types/                  # Planned frontend-specific types
```

### Backend API

The target backend uses a layered route → controller → service → repository architecture:

```text
backend/src/
├── routes/                 # Express route definitions
├── controllers/            # HTTP request/response handling
├── services/               # Business logic and orchestration
├── middleware/             # Auth, errors, and request validation
├── schemas/                # Planned Zod request/response schemas
└── lib/                    # Planned Prisma and AI-service clients
```

Controllers should not contain business logic, and services should not depend on Express request or response objects. These rules become active when the corresponding layers are introduced by a milestone contribution.

### AI Service

The target AI-service structure uses a router → handler → model pattern:

```text
ai-services/
├── routers/                # Planned FastAPI routers
├── handlers/               # Planned request validation and formatting
├── models/                 # Planned embedding and inference models
└── main.py                 # Current FastAPI entry point and /health route
```

Embedding, inference, summarization, and ingestion endpoints are future functionality. The current `main.py` only provides the scaffold application and health endpoint.

---

## Target-State State Management

The planned MVP state model uses TanStack Query for server state, React Context for authentication, React Hook Form for forms, and `useState` for transient UI state. These packages and feature flows are not all installed or implemented in the current scaffold.

| State Type | Planned Tool | Scope | Example |
|---|---|---|---|
| Server state | TanStack Query | Cached API data | Papers and search results |
| Auth state | React Context | Global | User session |
| Form state | React Hook Form | Local | Search or paper submission form |
| Transient UI state | `useState` | Local | Modal or selected tab |

Do not introduce Zustand or Redux without an accepted milestone requirement.

---

## Target-State API Organization

The planned backend API is a versioned JSON REST API. The following values are design targets, not currently available endpoints:

| Convention | Target value |
|---|---|
| Base path | `/api/v1/` |
| Format | JSON |
| Documentation | `/api/docs` after Swagger/OpenAPI is implemented |
| Authentication | JWT in an HTTP-only cookie |

The current backend exposes only the scaffold health route at `/health`. Standard response envelopes, Zod validation, authentication middleware, and API documentation should be added only through dedicated implementation issues.

---

## Environment Variable Strategy

Each service manages its own environment variables independently.

| Service | File | Client-side prefix |
|---|---|---|
| Frontend | `.env.local` | `NEXT_PUBLIC_` |
| Backend | `.env` | None; server-only |
| AI Service | `.env` | None; server-only |

Never commit environment files. Every variable used in code should be documented in the relevant `.env.example`, and future implementations should validate configuration at startup.

---

## Target-State Shared Types

During the scaffold phase, frontend and backend types remain local to their services. A future M2+ contribution may create a `packages/types/` workspace package, export types inferred from backend schemas, and allow the frontend to consume those shared types. That package does not exist in the current repository.

---

## Target-State Reusable Components

When the frontend component system is introduced, it may use the following three-tier model:

| Tier | Target location | Description |
|---|---|---|
| Primitive | `frontend/src/components/ui/` | shadcn/ui primitives |
| Composite | `frontend/src/components/[feature]/` | Feature components built from primitives |
| Page | `frontend/src/app/[route]/page.tsx` | Route-level composition |

Tailwind utility classes are the intended styling approach. These conventions should guide future component work but do not imply that the target directories or shadcn/ui package are already present.

---

👉 **Next Step:** See the current local development setup in **[docs/DeveloperGuide.md](DeveloperGuide.md)**.
