# ResearchForge Issue Backlog

This document records the implementation and documentation issues identified during the ResearchForge scaffold review. It is intended to prevent duplicate investigations, preserve reproduction evidence, and give contributors a clear one-issue-at-a-time sequence. Each issue should receive an upstream GitHub issue before implementation and a focused pull request that references that issue.

## Repository Baseline

ResearchForge is currently a runnable scaffold for a four-service research platform. The planned architecture contains a Next.js frontend, an Express/TypeScript backend, a FastAPI AI service, and PostgreSQL with pgvector.[1] The top-level README states that the core product features are intentionally not implemented yet, so the issues below distinguish genuine defects from planned milestone work.[2]

## Contribution Status Overview

| ID | Area | Problem | Priority | Status | Recommended contribution |
|---|---|---|---|---|---|
| RF-001 | Workspace and CI | Bare pnpm filters match no projects but exit successfully | High | Fixed in [Issue #11](https://github.com/JanmejaiPratapTonk-123/ResearchForge/issues/11) and [PR #12](https://github.com/JanmejaiPratapTonk-123/ResearchForge/pull/12) | Keep as the reference example for reproduction and validation |
| RF-002 | Testing | Root `pnpm test` exits successfully without running tests | High | Fixed in [Issue #15](https://github.com/JanmejaiPratapTonk-123/ResearchForge/issues/15) and [PR #17](https://github.com/JanmejaiPratapTonk-123/ResearchForge/pull/17) | Retain the focused backend health smoke test and extend coverage separately |
| RF-003 | CI quality gates | CI does not run the full quality toolchain described by project documentation | Medium | Fixed in [Issue #18](https://github.com/JanmejaiPratapTonk-123/ResearchForge/issues/18) and [PR #19](https://github.com/JanmejaiPratapTonk-123/ResearchForge/pull/19) | Keep broader future quality gates separate from the implemented build and Python compilation checks |
| RF-004 | Documentation | Official guides disagree about scaffold status and available infrastructure | Medium | Fixed in [Issue #20](https://github.com/JanmejaiPratapTonk-123/ResearchForge/issues/20) and [PR #21](https://github.com/JanmejaiPratapTonk-123/ResearchForge/pull/21) | Preserve the current-versus-target distinction as the scaffold evolves |
| RF-005 | Documentation and dependencies | Finalized technology documentation does not match installed versions and packages | Medium | Fixed in [Issue #22](https://github.com/JanmejaiPratapTonk-123/ResearchForge/issues/22) and [PR #23](https://github.com/JanmejaiPratapTonk-123/ResearchForge/pull/23) | Update the dependency inventory whenever manifests or target-stack decisions change |
| RF-006 | Workspace configuration | `pnpm-workspace.yaml` contains placeholder-like `allowBuilds` values | Medium | Fixed in [Issue #24](https://github.com/JanmejaiPratapTonk-123/ResearchForge/issues/24) and [PR #25](https://github.com/JanmejaiPratapTonk-123/ResearchForge/pull/25) | Keep explicit boolean approvals and revisit the pnpm 9 pin only in a separate toolchain issue |

## RF-001 — Silent pnpm Workspace Selection Failure

The original root scripts used `pnpm --filter frontend` and `pnpm --filter backend`, while the workspace packages are named `researchforge-frontend` and `researchforge-backend`. The same selectors appeared in the CI type-check steps. pnpm printed `No projects matched the filters` and returned status `0`, creating a false-success path. The corrected implementation uses `./frontend` and `./backend` path selectors in both the root development scripts and CI workflow.

The defect was reproduced locally, the corrected TypeScript checks passed, and the change was published upstream. The authoritative records are [Issue #11](https://github.com/JanmejaiPratapTonk-123/ResearchForge/issues/11) and [PR #12](https://github.com/JanmejaiPratapTonk-123/ResearchForge/pull/12).

## RF-002 — Root Test Command Is a No-Op

The root `package.json` defines `"test": "pnpm --recursive test"`, but the frontend and backend manifests do not define test scripts, and the current scaffold contains no test files. Running `pnpm test` therefore exits with status `0` without reporting that no tests were executed. This is misleading for contributors and weakens the project’s quality gate.

### Reproduction

From the repository root, run:

```bash
pnpm test
```

The command completes successfully while the recursive runner reports no test execution. The result should be made explicit rather than presented as a passing test suite.

### Acceptance criteria

The repository must have a truthful root testing contract. The chosen approach should either add minimal smoke tests and service-level test scripts or make the root command fail clearly when no tests are configured. The CI workflow should invoke the same contract once it is available, and the documentation should explain how contributors can run it locally.

### Suggested scope for the next contribution

The safest incremental implementation is to add a small, dependency-light test for the existing backend health response and a corresponding test script, then ensure the root command reports actual execution. A broader testing framework migration should be kept separate from this issue.

## RF-003 — CI Quality Gates Are Incomplete

The CI workflow currently performs a Markdown link check, Node type-check commands, and Python dependency installation. It does not run the full set of linting, testing, API-contract, or build checks described across the finalized technology and roadmap documents. The roadmap itself marks several of these deliverables as incomplete, so this issue is partly a documentation-alignment problem and partly a future engineering task.

### Acceptance criteria

The repository should explicitly identify which checks are required at the current milestone. Every required check must execute a command that can fail when the corresponding quality gate fails. Planned checks should be labeled as planned rather than implied to be active. The workflow should avoid no-op commands and should include build or test validation only after those commands are implemented.

## RF-004 — Documentation Status Drift

The README describes the project scaffolding as complete and runnable, while `docs/DeveloperGuide.md` still describes the scaffold as in progress. The Developer Guide also documents API documentation and service tests that are not present in the current tree. `docs/DevExperience.md` describes several future directories and conventions as expected layouts even though they are not implemented in the current scaffold.

### Acceptance criteria

Documentation must distinguish current implementation from future milestone plans. Setup instructions should describe commands that work in a fresh clone, and links or endpoints should not be presented as available unless they exist. Future layouts should be labeled as proposed or milestone-specific.

## RF-005 — Technology Documentation Does Not Match Installed Dependencies

`docs/TechStack.md` describes Next.js 15 and React 19 as finalized frontend choices, while the current frontend manifest uses Next.js 14 and React 18. The same documentation describes shadcn/ui, TanStack Query, React Hook Form, Zod, and sentence-transformers as selected components, but those packages are not installed in the current scaffold manifests. The README correctly explains that the feature implementation is not yet started, so the immediate fix should clarify the distinction between target architecture and installed scaffold dependencies.

### Acceptance criteria

The documentation should include a clearly labeled “currently installed” versus “target stack” distinction, or the repository should be upgraded through a dedicated dependency-migration issue. Version claims must be checked against package manifests and the lockfile. This issue should not bundle a broad framework upgrade with unrelated documentation changes.

## RF-006 — Placeholder Build-Approval Values Need Verification

`pnpm-workspace.yaml` contained `allowBuilds` entries whose values were the literal text `set this to true or false`. Under pnpm 11, those values were parsed as strings; under pnpm 9.15.4, the CI-pinned version, the newer key was ignored. Frozen installs succeeded under both versions, establishing a reproducible configuration ambiguity rather than an install-blocking failure.

### Acceptance criteria

The issue was addressed in PR #25 by replacing all four placeholders with explicit `true` values for `@prisma/client`, `@prisma/engines`, `esbuild`, and `prisma`, together with a compatibility comment. pnpm 11 returned boolean values, pnpm 9.15.4 returned `undefined` without an error, frozen installs passed under both versions, and backend and frontend TypeScript checks passed. No runtime source or dependency version was changed.

## One-by-One Execution Order

The planned sequence has been completed: RF-001 was resolved first, followed by RF-002, RF-003, RF-004, RF-005, and version-specific RF-006 verification. Each item has a separate upstream issue and focused pull request. The six pull requests remain subject to normal maintainer review and merge decisions.

Each contribution should follow the repository workflow: open or update one issue, request assignment, create one focused branch, implement the smallest complete change, run the documented validation commands, and open a pull request that closes only that issue.[3]

## References

[1]: https://github.com/JanmejaiPratapTonk-123/ResearchForge/blob/main/docs/Architecture.md "ResearchForge Architecture"
[2]: https://github.com/JanmejaiPratapTonk-123/ResearchForge/blob/main/README.md "ResearchForge README"
[3]: https://github.com/JanmejaiPratapTonk-123/ResearchForge/blob/main/CONTRIBUTING.md "ResearchForge Contributing Guide"
[4]: https://github.com/JanmejaiPratapTonk-123/ResearchForge/blob/main/.github/workflows/ci.yml "ResearchForge CI Workflow"
[5]: https://github.com/JanmejaiPratapTonk-123/ResearchForge/blob/main/docs/TechStack.md "ResearchForge Technology Stack"
[6]: https://github.com/JanmejaiPratapTonk-123/ResearchForge/blob/main/docs/Roadmap.md "ResearchForge Roadmap"
