# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### Lab1 Website (`artifacts/lab1-website`)
- **Type**: react-vite, frontend-only (no backend needed)
- **Preview path**: `/`
- **Purpose**: Premium SaaS website for Lab1, a healthcare AI infrastructure company in the DACH/European market
- **Pages**: Landing (`/`), Platform (`/platform`), Use Cases (`/use-cases`), About (`/about`), Contact (`/contact`)
- **Design**: Dark premium aesthetic, deep navy background, icy teal accent (#00D4AA), Space Grotesk + Inter fonts
- **Key features**: Canvas particle animation hero, animated data silo infographic, DAC architecture flow diagram, scroll-triggered animations (framer-motion), market stats section, 5 vertical use cases

### API Server (`artifacts/api-server`)
- **Type**: Express API
- **Preview path**: `/api`
- **Purpose**: Shared backend (not used by Lab1 Website which is purely static)
