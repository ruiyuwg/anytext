# PRD: Expand Library Registry

## Introduction

Add 44 new libraries and frameworks to the anytext registry, covering the most commonly referenced tools across frontend, backend, state management, UI components, testing, mobile, AI/ML, infrastructure, and utilities. Each library uses the best available adapter (llms-full, llms-txt, github, or sitemap) based on documentation availability. This dramatically increases anytext's coverage of the libraries coding agents need most.

## Goals

- Add 44 new library sources to `packages/scraper/sources.json`
- Successfully scrape and generate registry docs for each library
- Verify docs appear in `registry/manifest.json` after scraping
- Use only existing adapters — no new adapter development required

## Adapter Summary

| Adapter | Count | Libraries |
|---------|-------|-----------|
| llms-full | 19 | Prisma, Fastify, Vue.js, OpenAI, LangChain.js, Zustand, Elysia, React Native, Expo, Resend, Mantine, Chakra UI, Nitro, Kysely, Vercel, Sanity, Strapi, Effect-TS |
| llms-txt | 6 | shadcn/ui, Supabase, Stripe, SolidJS, Angular, Docker |
| github | 12 | React Router, Radix UI, MUI, NestJS, TypeBox, Qwik, Jotai, Pinia, Mongoose, Apollo Client, Terraform, date-fns |
| sitemap | 7 | Express, Auth.js, Playwright, Redux Toolkit, Jest, Testing Library, Socket.io |

---

## User Stories — Tier 1 (High Impact)

### US-001: Add Prisma
**Description:** As a coding agent, I want Prisma ORM docs so that I can reference schema declarations, query syntax, and migration commands.

**Acceptance Criteria:**
- [ ] Add source config to `sources.json` with adapter `llms-full`, URL `https://prisma.io/docs/llms-full.txt`
- [ ] Run scraper: `node dist/index.js --library prisma`
- [ ] Docs appear in `registry/docs/prisma/` and topics listed in `registry/manifest.json`

### US-002: Add Express
**Description:** As a coding agent, I want Express.js docs so that I can reference routing, middleware, and request/response APIs.

**Acceptance Criteria:**
- [ ] Add source config to `sources.json` with adapter `sitemap`, URL `https://expressjs.com/sitemap.xml`
- [ ] Configure crawl with `include: ["/en/"]` to filter to English docs only
- [ ] Configure `contentSelector` for Express page layout
- [ ] Run scraper: `node dist/index.js --library express`
- [ ] Docs appear in `registry/docs/express/` and topics listed in `registry/manifest.json`

### US-003: Add Fastify
**Description:** As a coding agent, I want Fastify docs so that I can reference plugin APIs, lifecycle hooks, and decorators.

**Acceptance Criteria:**
- [ ] Add source config to `sources.json` with adapter `llms-full`, URL `https://fastify.dev/llms-full.txt`
- [ ] Run scraper: `node dist/index.js --library fastify`
- [ ] Docs appear in `registry/docs/fastify/` and topics listed in `registry/manifest.json`

### US-004: Add Vue.js
**Description:** As a coding agent, I want Vue.js docs so that I can reference Composition API, reactivity, and component patterns.

**Acceptance Criteria:**
- [ ] Add source config to `sources.json` with adapter `llms-full`, URL `https://vuejs.org/llms-full.txt`
- [ ] Run scraper: `node dist/index.js --library vue`
- [ ] Docs appear in `registry/docs/vue/` and topics listed in `registry/manifest.json`

### US-005: Add shadcn/ui
**Description:** As a coding agent, I want shadcn/ui docs so that I can reference component APIs, installation, and theming.

**Acceptance Criteria:**
- [ ] Add source config to `sources.json` with adapter `llms-txt`, URL `https://ui.shadcn.com/llms.txt`
- [ ] Run scraper: `node dist/index.js --library shadcn-ui`
- [ ] Docs appear in `registry/docs/shadcn-ui/` and topics listed in `registry/manifest.json`

### US-006: Add Auth.js
**Description:** As a coding agent, I want Auth.js docs so that I can reference provider configs, session handling, and adapter setup.

**Acceptance Criteria:**
- [ ] Add source config to `sources.json` with adapter `sitemap`, URL `https://authjs.dev/sitemap.xml`
- [ ] Configure crawl with appropriate `contentSelector` and `maxPages` limit
- [ ] Run scraper: `node dist/index.js --library authjs`
- [ ] Docs appear in `registry/docs/authjs/` and topics listed in `registry/manifest.json`

### US-007: Add Playwright
**Description:** As a coding agent, I want Playwright docs so that I can reference selectors, assertions, and test configuration.

**Acceptance Criteria:**
- [ ] Add source config to `sources.json` with adapter `sitemap`, URL `https://playwright.dev/sitemap.xml`
- [ ] Configure crawl with `include: ["/docs/"]`, `exclude: ["/python/", "/java/", "/dotnet/"]` to filter to Node.js docs
- [ ] Run scraper: `node dist/index.js --library playwright`
- [ ] Docs appear in `registry/docs/playwright/` and topics listed in `registry/manifest.json`

### US-008: Add Supabase
**Description:** As a coding agent, I want Supabase docs so that I can reference client SDK for auth, database, storage, and edge functions.

**Acceptance Criteria:**
- [ ] Add source config to `sources.json` with adapter `llms-txt`, URL `https://supabase.com/docs/llms.txt`
- [ ] Run scraper: `node dist/index.js --library supabase`
- [ ] Docs appear in `registry/docs/supabase/` and topics listed in `registry/manifest.json`

### US-009: Add Stripe
**Description:** As a coding agent, I want Stripe docs so that I can reference payment APIs, webhook handling, and checkout flows.

**Acceptance Criteria:**
- [ ] Add source config to `sources.json` with adapter `llms-txt`, URL `https://docs.stripe.com/llms.txt`
- [ ] Run scraper: `node dist/index.js --library stripe`
- [ ] Docs appear in `registry/docs/stripe/` and topics listed in `registry/manifest.json`

### US-010: Add OpenAI SDK
**Description:** As a coding agent, I want OpenAI API docs so that I can reference chat completions, embeddings, and function calling.

**Acceptance Criteria:**
- [ ] Add source config to `sources.json` with adapter `llms-full`, URL `https://platform.openai.com/docs/llms-full.txt`
- [ ] Run scraper: `node dist/index.js --library openai`
- [ ] Docs appear in `registry/docs/openai/` and topics listed in `registry/manifest.json`

### US-011: Add LangChain.js
**Description:** As a coding agent, I want LangChain docs so that I can reference chains, agents, tools, and retrieval patterns.

**Acceptance Criteria:**
- [ ] Add source config to `sources.json` with adapter `llms-full`, URL `https://docs.langchain.com/llms-full.txt`
- [ ] Run scraper: `node dist/index.js --library langchain`
- [ ] Docs appear in `registry/docs/langchain/` and topics listed in `registry/manifest.json`

---

## User Stories — Tier 2 (Strong Value)

### US-012: Add React Router
**Description:** As a coding agent, I want React Router docs so that I can reference routing APIs, loaders, and actions.

**Acceptance Criteria:**
- [ ] Add source config to `sources.json` with adapter `github`, repo `remix-run/react-router`, docsPath `docs`
- [ ] Run scraper: `node dist/index.js --library react-router`
- [ ] Docs appear in `registry/docs/react-router/` and topics listed in `registry/manifest.json`

### US-013: Add SolidJS
**Description:** As a coding agent, I want SolidJS docs so that I can reference signals, effects, and component patterns.

**Acceptance Criteria:**
- [ ] Add source config to `sources.json` with adapter `llms-txt`, URL `https://docs.solidjs.com/llms.txt`
- [ ] Run scraper: `node dist/index.js --library solidjs`
- [ ] Docs appear in `registry/docs/solidjs/` and topics listed in `registry/manifest.json`

### US-014: Add Zustand
**Description:** As a coding agent, I want Zustand docs so that I can reference store creation, middleware, and React integration.

**Acceptance Criteria:**
- [ ] Add source config to `sources.json` with adapter `llms-full`, URL `https://zustand.docs.pmnd.rs/llms-full.txt`
- [ ] Run scraper: `node dist/index.js --library zustand`
- [ ] Docs appear in `registry/docs/zustand/` and topics listed in `registry/manifest.json`

### US-015: Add Redux Toolkit
**Description:** As a coding agent, I want Redux Toolkit docs so that I can reference createSlice, RTK Query, and store setup.

**Acceptance Criteria:**
- [ ] Add source config to `sources.json` with adapter `sitemap`, URL `https://redux-toolkit.js.org/sitemap.xml`
- [ ] Configure crawl with appropriate `contentSelector`
- [ ] Run scraper: `node dist/index.js --library redux-toolkit`
- [ ] Docs appear in `registry/docs/redux-toolkit/` and topics listed in `registry/manifest.json`

### US-016: Add Radix UI
**Description:** As a coding agent, I want Radix UI docs so that I can reference primitive component APIs and accessibility patterns.

**Acceptance Criteria:**
- [ ] Add source config to `sources.json` with adapter `github`, repo `radix-ui/website`, docsPath `data/primitives/docs`
- [ ] Run scraper: `node dist/index.js --library radix-ui`
- [ ] Docs appear in `registry/docs/radix-ui/` and topics listed in `registry/manifest.json`

### US-017: Add Material UI
**Description:** As a coding agent, I want MUI docs so that I can reference component props, theming, and customization.

**Acceptance Criteria:**
- [ ] Add source config to `sources.json` with adapter `github`, repo `mui/material-ui`, docsPath `docs/data/material`
- [ ] Run scraper: `node dist/index.js --library mui`
- [ ] Docs appear in `registry/docs/mui/` and topics listed in `registry/manifest.json`

### US-018: Add NestJS
**Description:** As a coding agent, I want NestJS docs so that I can reference decorators, modules, and dependency injection.

**Acceptance Criteria:**
- [ ] Add source config to `sources.json` with adapter `github`, repo `nestjs/docs.nestjs.com`, docsPath `content`
- [ ] Run scraper: `node dist/index.js --library nestjs`
- [ ] Docs appear in `registry/docs/nestjs/` and topics listed in `registry/manifest.json`

### US-019: Add Elysia
**Description:** As a coding agent, I want Elysia docs so that I can reference route handlers, plugins, and Bun integration.

**Acceptance Criteria:**
- [ ] Add source config to `sources.json` with adapter `llms-full`, URL `https://elysiajs.com/llms-full.txt`
- [ ] Run scraper: `node dist/index.js --library elysia`
- [ ] Docs appear in `registry/docs/elysia/` and topics listed in `registry/manifest.json`

### US-020: Add Jest
**Description:** As a coding agent, I want Jest docs so that I can reference matchers, mocking, and configuration.

**Acceptance Criteria:**
- [ ] Add source config to `sources.json` with adapter `sitemap`, URL `https://jestjs.io/sitemap.xml`
- [ ] Configure crawl to filter to latest version docs, exclude versioned paths
- [ ] Run scraper: `node dist/index.js --library jest`
- [ ] Docs appear in `registry/docs/jest/` and topics listed in `registry/manifest.json`

### US-021: Add Testing Library
**Description:** As a coding agent, I want Testing Library docs so that I can reference queries, user events, and framework integrations.

**Acceptance Criteria:**
- [ ] Add source config to `sources.json` with adapter `sitemap`, URL `https://testing-library.com/sitemap.xml`
- [ ] Configure crawl with appropriate `contentSelector`
- [ ] Run scraper: `node dist/index.js --library testing-library`
- [ ] Docs appear in `registry/docs/testing-library/` and topics listed in `registry/manifest.json`

### US-022: Add React Native
**Description:** As a coding agent, I want React Native docs so that I can reference core components, APIs, and platform-specific code.

**Acceptance Criteria:**
- [ ] Add source config to `sources.json` with adapter `llms-full`, URL `https://reactnative.dev/llms-full.txt`
- [ ] Run scraper: `node dist/index.js --library react-native`
- [ ] Docs appear in `registry/docs/react-native/` and topics listed in `registry/manifest.json`

### US-023: Add Expo
**Description:** As a coding agent, I want Expo docs so that I can reference SDK modules, EAS Build, and router configuration.

**Acceptance Criteria:**
- [ ] Add source config to `sources.json` with adapter `llms-full`, URL `https://docs.expo.dev/llms-full.txt`
- [ ] Run scraper: `node dist/index.js --library expo`
- [ ] Docs appear in `registry/docs/expo/` and topics listed in `registry/manifest.json`

### US-024: Add Resend
**Description:** As a coding agent, I want Resend docs so that I can reference email sending APIs and React Email components.

**Acceptance Criteria:**
- [ ] Add source config to `sources.json` with adapter `llms-full`, URL `https://resend.com/docs/llms-full.txt`
- [ ] Run scraper: `node dist/index.js --library resend`
- [ ] Docs appear in `registry/docs/resend/` and topics listed in `registry/manifest.json`

### US-025: Add TypeBox
**Description:** As a coding agent, I want TypeBox docs so that I can reference schema types and JSON Schema generation.

**Acceptance Criteria:**
- [ ] Add source config to `sources.json` with adapter `github`, repo `sinclairzx81/typebox`, include `[".md"]`
- [ ] Run scraper: `node dist/index.js --library typebox`
- [ ] Docs appear in `registry/docs/typebox/` and topics listed in `registry/manifest.json`

---

## User Stories — Tier 3 (Good Coverage)

### US-026: Add Angular
**Description:** As a coding agent, I want Angular docs so that I can reference components, services, and dependency injection.

**Acceptance Criteria:**
- [ ] Add source config to `sources.json` with adapter `llms-txt`, URL `https://angular.dev/llms.txt`
- [ ] Run scraper: `node dist/index.js --library angular`
- [ ] Docs appear in `registry/docs/angular/` and topics listed in `registry/manifest.json`

### US-027: Add Qwik
**Description:** As a coding agent, I want Qwik docs so that I can reference resumability, components, and routing.

**Acceptance Criteria:**
- [ ] Add source config to `sources.json` with adapter `github`, repo `QwikDev/qwik`, docsPath `packages/docs/src/routes/docs`, include `[".mdx"]`
- [ ] Run scraper: `node dist/index.js --library qwik`
- [ ] Docs appear in `registry/docs/qwik/` and topics listed in `registry/manifest.json`

### US-028: Add Jotai
**Description:** As a coding agent, I want Jotai docs so that I can reference atom creation, derived atoms, and utilities.

**Acceptance Criteria:**
- [ ] Add source config to `sources.json` with adapter `github`, repo `pmndrs/jotai`, docsPath `docs`, include `[".mdx"]`
- [ ] Run scraper: `node dist/index.js --library jotai`
- [ ] Docs appear in `registry/docs/jotai/` and topics listed in `registry/manifest.json`

### US-029: Add Pinia
**Description:** As a coding agent, I want Pinia docs so that I can reference store definition, getters, and actions.

**Acceptance Criteria:**
- [ ] Add source config to `sources.json` with adapter `github`, repo `vuejs/pinia`, branch `v3`, docsPath `packages/docs`, include `[".md"]`
- [ ] Run scraper: `node dist/index.js --library pinia`
- [ ] Docs appear in `registry/docs/pinia/` and topics listed in `registry/manifest.json`

### US-030: Add Mantine
**Description:** As a coding agent, I want Mantine docs so that I can reference components, hooks, and theming.

**Acceptance Criteria:**
- [ ] Add source config to `sources.json` with adapter `llms-full`, URL `https://mantine.dev/llms-full.txt`
- [ ] Run scraper: `node dist/index.js --library mantine`
- [ ] Docs appear in `registry/docs/mantine/` and topics listed in `registry/manifest.json`

### US-031: Add Chakra UI
**Description:** As a coding agent, I want Chakra UI docs so that I can reference components, style props, and theming.

**Acceptance Criteria:**
- [ ] Add source config to `sources.json` with adapter `llms-full`, URL `https://chakra-ui.com/llms-full.txt`
- [ ] Run scraper: `node dist/index.js --library chakra-ui`
- [ ] Docs appear in `registry/docs/chakra-ui/` and topics listed in `registry/manifest.json`

### US-032: Add Nitro
**Description:** As a coding agent, I want Nitro docs so that I can reference server routes, storage, and deployment presets.

**Acceptance Criteria:**
- [ ] Add source config to `sources.json` with adapter `llms-full`, URL `https://nitro.build/llms-full.txt`
- [ ] Run scraper: `node dist/index.js --library nitro`
- [ ] Docs appear in `registry/docs/nitro/` and topics listed in `registry/manifest.json`

### US-033: Add Kysely
**Description:** As a coding agent, I want Kysely docs so that I can reference query building, migrations, and type-safe SQL.

**Acceptance Criteria:**
- [ ] Add source config to `sources.json` with adapter `llms-full`, URL `https://kysely.dev/llms-full.txt`
- [ ] Run scraper: `node dist/index.js --library kysely`
- [ ] Docs appear in `registry/docs/kysely/` and topics listed in `registry/manifest.json`

### US-034: Add Mongoose
**Description:** As a coding agent, I want Mongoose docs so that I can reference schemas, models, queries, and middleware.

**Acceptance Criteria:**
- [ ] Add source config to `sources.json` with adapter `github`, repo `Automattic/mongoose`, docsPath `docs`, include `[".md"]`
- [ ] Run scraper: `node dist/index.js --library mongoose`
- [ ] Docs appear in `registry/docs/mongoose/` and topics listed in `registry/manifest.json`

### US-035: Add Apollo Client
**Description:** As a coding agent, I want Apollo Client docs so that I can reference queries, mutations, caching, and React hooks.

**Acceptance Criteria:**
- [ ] Add source config to `sources.json` with adapter `github`, repo `apollographql/apollo-client`, docsPath `docs/source`, include `[".mdx"]`
- [ ] Run scraper: `node dist/index.js --library apollo-client`
- [ ] Docs appear in `registry/docs/apollo-client/` and topics listed in `registry/manifest.json`

### US-036: Add Terraform
**Description:** As a coding agent, I want Terraform docs so that I can reference HCL syntax, providers, and resource configuration.

**Acceptance Criteria:**
- [ ] Add source config to `sources.json` with adapter `github`, repo `hashicorp/web-unified-docs`, docsPath `content/terraform-docs-common/docs`, include `[".md"]`
- [ ] Configure `maxFiles` limit to manage repo size
- [ ] Run scraper: `node dist/index.js --library terraform`
- [ ] Docs appear in `registry/docs/terraform/` and topics listed in `registry/manifest.json`

### US-037: Add Docker
**Description:** As a coding agent, I want Docker docs so that I can reference Dockerfile syntax, Compose config, and CLI commands.

**Acceptance Criteria:**
- [ ] Add source config to `sources.json` with adapter `llms-txt`, URL `https://docs.docker.com/llms.txt`
- [ ] Run scraper: `node dist/index.js --library docker`
- [ ] Docs appear in `registry/docs/docker/` and topics listed in `registry/manifest.json`

### US-038: Add Vercel
**Description:** As a coding agent, I want Vercel docs so that I can reference deployment config, serverless functions, and edge middleware.

**Acceptance Criteria:**
- [ ] Add source config to `sources.json` with adapter `llms-full`, URL `https://vercel.com/docs/llms-full.txt`
- [ ] Run scraper: `node dist/index.js --library vercel`
- [ ] Docs appear in `registry/docs/vercel/` and topics listed in `registry/manifest.json`

### US-039: Add Sanity
**Description:** As a coding agent, I want Sanity docs so that I can reference GROQ queries, schema types, and studio config.

**Acceptance Criteria:**
- [ ] Add source config to `sources.json` with adapter `llms-full`, URL `https://www.sanity.io/docs/llms-full.txt`
- [ ] Run scraper: `node dist/index.js --library sanity`
- [ ] Docs appear in `registry/docs/sanity/` and topics listed in `registry/manifest.json`

### US-040: Add Strapi
**Description:** As a coding agent, I want Strapi docs so that I can reference content types, REST/GraphQL APIs, and plugin development.

**Acceptance Criteria:**
- [ ] Add source config to `sources.json` with adapter `llms-full`, URL `https://docs.strapi.io/llms-full.txt`
- [ ] Run scraper: `node dist/index.js --library strapi`
- [ ] Docs appear in `registry/docs/strapi/` and topics listed in `registry/manifest.json`

### US-041: Add Nx
**Description:** As a coding agent, I want Nx docs so that I can reference workspace config, generators, and executors.

**Acceptance Criteria:**
- [ ] Add source config to `sources.json` with adapter `github`, repo `nrwl/nx`, docsPath `docs`, include `[".md"]`
- [ ] Run scraper: `node dist/index.js --library nx`
- [ ] Docs appear in `registry/docs/nx/` and topics listed in `registry/manifest.json`

### US-042: Add date-fns
**Description:** As a coding agent, I want date-fns docs so that I can reference date manipulation function signatures and usage.

**Acceptance Criteria:**
- [ ] Add source config to `sources.json` with adapter `github`, repo `date-fns/date-fns`, docsPath `docs`, include `[".md"]`
- [ ] Run scraper: `node dist/index.js --library date-fns`
- [ ] Docs appear in `registry/docs/date-fns/` and topics listed in `registry/manifest.json`

### US-043: Add Effect-TS
**Description:** As a coding agent, I want Effect docs so that I can reference Effect types, services, layers, and error handling.

**Acceptance Criteria:**
- [ ] Add source config to `sources.json` with adapter `llms-full`, URL `https://effect.website/llms-full.txt`
- [ ] Run scraper: `node dist/index.js --library effect`
- [ ] Docs appear in `registry/docs/effect/` and topics listed in `registry/manifest.json`

### US-044: Add Socket.io
**Description:** As a coding agent, I want Socket.io docs so that I can reference event handling, rooms, namespaces, and client/server APIs.

**Acceptance Criteria:**
- [ ] Add source config to `sources.json` with adapter `sitemap`, URL `https://socket.io/sitemap.xml`
- [ ] Configure crawl to filter to latest version, English docs only
- [ ] Run scraper: `node dist/index.js --library socketio`
- [ ] Docs appear in `registry/docs/socketio/` and topics listed in `registry/manifest.json`

---

## Functional Requirements

- FR-1: Each library must have a valid source config entry in `packages/scraper/sources.json`
- FR-2: Each source config must specify: `id`, `name`, `description`, `version`, `adapter`, and adapter-specific fields (`url`, `github`, `crawl`)
- FR-3: Sitemap-based sources must configure `contentSelector`, `include`/`exclude` URL filters, and `maxPages`
- FR-4: GitHub-based sources must configure `repo`, `docsPath`, and `include` file extensions
- FR-5: After scraping, each library must produce at least 1 topic in `registry/manifest.json`
- FR-6: All generated docs must be clean markdown (no HTML, no MDX, no JSX)
- FR-7: Source configs requiring rate limiting (large doc sets) must include `rateLimit` field

## Non-Goals

- No new adapter types — all 44 libraries must work with existing adapters
- No changes to the CLI, search, or caching logic
- No custom preprocessing rules unless absolutely necessary for clean output
- No manual doc authoring — all content is scraped from upstream sources
- No guarantee of topic count or coverage completeness — we accept what the adapter produces

## Technical Considerations

- **Large sources:** Stripe, Supabase, Docker, Angular, and Auth.js may produce hundreds of topics. Consider `maxPages`/`maxFiles` limits where appropriate.
- **Rate limiting:** Sources with aggressive rate limits (Sanity has shown 504s) should use the `rateLimit` field.
- **Redirects:** OpenAI (`platform.openai.com` → `developers.openai.com`) and LangChain (`js.langchain.com` → `docs.langchain.com`) involve redirects — verify the scraper follows them correctly.
- **Branch pinning:** Pinia docs are on branch `v3`, not `main`. The GitHub adapter must support non-default branches.
- **File format:** Nx uses `.mdoc` (Markdoc) files — verify the GitHub adapter can handle this extension or use `.md` include filter on the `docs/` directory.
- **Incremental rollout:** Libraries can be added and scraped independently. No dependency ordering between user stories.

## Success Metrics

- 44 new libraries successfully scraped and present in `registry/manifest.json`
- Each library has at least 1 topic with clean, readable markdown
- Scraper runs without errors for all new sources (`node dist/index.js` exits 0)
- Total registry grows from ~23 sources to ~67 sources

## Open Questions

- Should we set `maxPages`/`maxFiles` limits for all sitemap/github sources, or only large ones?
- For LangChain, should we filter to JS-specific docs only, or include the full cross-language content?
- Is the Nx `.mdoc` format parseable by the existing GitHub adapter, or should we skip Nx?
- Should date-fns be sourced from its limited markdown docs, or is it too thin to be useful?
- For Pinia, does the GitHub adapter support specifying a non-default branch (`v3`)?
