# Database Layer (`database/`)

> **Role:** Persistent data store configuration for ResearchForge.  
> **Status:** Scaffolding complete — Prisma initialized with `pgvector` extension.

---

## Purpose

The `database/` module houses the Prisma ORM configuration, schema definitions, and migration files for ResearchForge. It connects to a PostgreSQL instance with the `pgvector` extension enabled for relational, vector, and graph storage patterns.

---

## Service Responsibilities

- **Current (M1.5):** Prisma schema configuration (`prisma/schema.prisma`) targeting PostgreSQL + `pgvector`, with the initial relational model layer implemented.
- **Current model layer:** `User`, `Workspace`, `Paper`, and `PaperEmbedding`.
- **Future (M2+):** Migrations, seed data, citation relationships, annotations, and vector index tuning as application requirements become concrete.

---

## How to Run & Apply Migrations

```bash
# From the repository root
cd ..

# Validate the schema
pnpm --filter ./database validate

# Generate Prisma Client types
pnpm --filter ./database generate

# Create and apply a migration after reviewing the schema
pnpm --filter ./database exec prisma migrate dev --schema prisma/schema.prisma --name init
```

---

## Planned Contributor Issues

The initial model layer now covers the entities explicitly named by the architecture: users, papers, paper metadata, workspaces, and paper embeddings. Workspace collaboration membership remains deferred until its application contract is defined. `PaperEmbedding.embedding` is represented as `Unsupported("vector")` because Prisma ORM does not expose pgvector as a native scalar; vector writes and similarity queries should use customized SQL migrations and raw SQL. The schema intentionally does not add speculative citation, annotation, or knowledge-graph tables.

Contributors can extend the database infrastructure through focused issues such as migration review, seed data for local development, application-level repositories, and pgvector index tuning once the corresponding query patterns are implemented.
