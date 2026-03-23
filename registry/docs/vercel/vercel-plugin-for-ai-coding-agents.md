# Vercel Plugin for AI Coding Agents

The Vercel plugin turns any supported AI coding agent into a Vercel expert. It pre-loads agents with a relational knowledge graph of the entire Vercel ecosystem and automatically injects the right guidance at the right time based on what you're working on.

## What the plugin provides

The plugin includes four main components that work together to enhance your AI coding agent:

| Component               | Description                                                                                                                                    |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **Ecosystem graph**     | A relational knowledge graph covering every Vercel product, library, CLI, API, and service, with decision matrices and cross-product workflows |
| **34 skills**           | Deep-dive guidance for specific Vercel products, injected automatically when relevant                                                          |
| **3 specialist agents** | Purpose-built agents for deployment, performance optimization, and AI architecture                                                             |
| **5 slash commands**    | Quick actions for deploying, managing environment variables, bootstrapping projects, and more                                                  |

## Supported tools

| Tool                                                          | Status      |
| ------------------------------------------------------------- | ----------- |
| [Claude Code](https://docs.anthropic.com/en/docs/claude-code) | Supported   |
| [Cursor](https://www.cursor.com)                              | Supported   |
| [OpenAI Codex](https://openai.com/index/codex/)               | Coming soon |

## Prerequisites

- One of the supported AI coding tools listed above
- Node.js 18+

## Installation

Install the plugin with a single command:

```bash
npx plugins add vercel/vercel-plugin
```

The plugin activates automatically after installation. There are no additional setup steps or commands to learn.

## How it works

After installing, the plugin detects what you're working on from your tool calls, file paths, and project configuration, then injects the right expertise at the right time. You use your AI agent as you normally would and the plugin handles the rest.

### Automatic context injection

The plugin uses lifecycle hooks that run during your session:

- **Session start**: Injects the ecosystem graph into every session, giving the agent baseline knowledge of the full Vercel platform
- **Pre-tool-use skill injection**: When the agent reads, edits, or writes files, the plugin matches file paths and commands against skill patterns and injects relevant guidance
- **Prompt signal matching**: When you type a prompt, the plugin scores it against skill-specific signals and injects matching skills
- **Post-write validation**: After the agent writes or edits a file, the plugin checks for deprecated patterns like sunset packages or renamed APIs and provides fix instructions

### Skill injection

Skills are the core of the plugin's expertise. Each skill covers a specific Vercel product or feature in depth. The plugin injects up to three skills per tool call, prioritized by relevance, and deduplicates across the session so the same skill is never injected twice.

For example:

- Editing a `next.config.ts` file triggers the **nextjs** skill
- Running `vercel deploy` triggers the **deployments-cicd** skill
- Working with `useChat` or `streamText` triggers the **ai-sdk** skill

## Available skills

The plugin includes 34 skills covering the full Vercel ecosystem:

| Skill                 | Covers                                                                                             |
| --------------------- | -------------------------------------------------------------------------------------------------- |
| `nextjs`              | App Router, Server Components, Server Actions, Cache Components, routing, rendering strategies     |
| `ai-sdk`              | AI SDK v6: text/object generation, streaming, tool calling, agents, MCP, providers, embeddings     |
| `ai-gateway`          | Unified model API, provider routing, failover, cost tracking, 100+ models                          |
| `ai-elements`         | Pre-built React components for AI interfaces: chat UIs, tool call rendering, streaming responses   |
| `workflow`            | Workflow DevKit: durable execution, DurableAgent, steps, Worlds, pause/resume                      |
| `chat-sdk`            | Multi-platform chat bots: Slack, Telegram, Teams, Discord, Google Chat, GitHub, Linear             |
| `vercel-cli`          | All CLI commands: deploy, env, dev, domains, cache management, MCP integration, marketplace        |
| `vercel-functions`    | Serverless, Edge, Fluid Compute, streaming, Cron Jobs, configuration                               |
| `vercel-storage`      | Blob, Edge Config, Neon Postgres, Upstash Redis, migration from sunset packages                    |
| `shadcn`              | shadcn/ui: CLI, component installation, custom registries, theming, Tailwind CSS integration       |
| `turborepo`           | Monorepo orchestration, caching, remote caching, `--affected`, pruned subsets                      |
| `turbopack`           | Next.js bundler, HMR, configuration, Turbopack vs Webpack                                          |
| `deployments-cicd`    | Deployment and CI/CD: deploy, promote, rollback, `--prebuilt`, CI workflow files                   |
| `vercel-firewall`     | DDoS, WAF, rate limiting, bot filter, custom rules                                                 |
| `vercel-flags`        | Feature flags, Flags Explorer, gradual rollouts, A/B testing, provider adapters                    |
| `vercel-queues`       | Durable event streaming, topics, consumer groups, retries, delayed delivery                        |
| `routing-middleware`  | Request interception before cache, rewrites, redirects, personalization                            |
| `runtime-cache`       | Ephemeral per-region key-value cache, tag-based invalidation                                       |
| `auth`                | Authentication integrations: Clerk, Descope, Auth0 setup for Next.js with Marketplace provisioning |
| `bootstrap`           | Project bootstrapping orchestrator: linking, env provisioning, db setup, first-run commands        |
| `cms`                 | Headless CMS integrations: Sanity, Contentful, DatoCMS, Storyblok, Builder.io, Visual Editing      |
| `cron-jobs`           | Vercel Cron Jobs configuration, scheduling, and best practices                                     |
| `email`               | Email sending: Resend with React Email templates, domain verification, transactional emails        |
| `env-vars`            | Environment variable management: `.env` files, `vercel env` commands, OIDC tokens                  |
| `marketplace`         | Integration discovery, installation, auto-provisioned environment variables, unified billing       |
| `observability`       | Web Analytics, Speed Insights, runtime logs, Log Drains, OpenTelemetry, monitoring                 |
| `payments`            | Stripe payments: Marketplace setup, checkout sessions, webhooks, subscription billing              |
| `agent-browser`       | Browser automation CLI: dev server verification, page interaction, screenshots, form filling       |
| `vercel-agent`        | AI-powered code review, incident investigation, SDK installation, PR analysis                      |
| `vercel-api`          | Vercel MCP Server and REST API: projects, deployments, env vars, domains, logs                     |
| `vercel-sandbox`      | Ephemeral Firecracker microVMs for running untrusted/AI-generated code safely                      |
| `sign-in-with-vercel` | OAuth 2.0/OIDC identity provider, user authentication via Vercel accounts                          |
| `v0-dev`              | AI code generation, agentic intelligence, GitHub integration                                       |
| `json-render`         | AI chat response rendering: UIMessage parts, tool call displays, streaming states                  |

## Specialist agents

The plugin includes three specialist agents that you can invoke for focused tasks:

| Agent                   | Expertise                                                                       |
| ----------------------- | ------------------------------------------------------------------------------- |
| `deployment-expert`     | CI/CD pipelines, deploy strategies, troubleshooting, environment variables      |
| `performance-optimizer` | Core Web Vitals, rendering strategies, caching, asset optimization              |
| `ai-architect`          | AI application design, model selection, streaming architecture, MCP integration |

## Slash commands

Invoke commands directly within your AI coding agent:

| Command                      | Purpose                                                           |
| ---------------------------- | ----------------------------------------------------------------- |
| `/vercel-plugin:bootstrap`   | Bootstrap a project with linking, env provisioning, and db setup  |
| `/vercel-plugin:deploy`      | Deploy to Vercel (preview or production)                          |
| `/vercel-plugin:env`         | Manage environment variables (list, pull, add, remove, diff)      |
| `/vercel-plugin:status`      | View project status, recent deployments, and environment overview |
| `/vercel-plugin:marketplace` | Discover and install Vercel Marketplace integrations              |

To deploy to production, pass `prod` as an argument: `/vercel-plugin:deploy prod`

## Debugging

If the plugin isn't injecting skills when expected, enable debug logging by setting the `VERCEL_PLUGIN_LOG_LEVEL` environment variable:

```bash
export VERCEL_PLUGIN_LOG_LEVEL=debug
```

Available log levels:

| Level     | Description                                 |
| --------- | ------------------------------------------- |
| `off`     | No logging (default)                        |
| `summary` | High-level injection summaries              |
| `debug`   | Detailed matching and dedup information     |
| `trace`   | Full pipeline traces with timing breakdowns |

You can also use the built-in doctor command to diagnose issues:

```bash
npx vercel-plugin doctor
```

This validates manifest parity, checks hook timeouts, and verifies dedup health.

## Reporting issues

If a skill gives incorrect advice or injection doesn't fire when expected, file an issue on [GitHub](https://github.com/vercel/vercel-plugin/issues). Include:

- What you were building
- What the plugin injected (or didn't). Enable debug logs with `VERCEL_PLUGIN_LOG_LEVEL=debug`
- What was wrong about it

title: "CLI Workflows"
description: "End-to-end workflows that show how to compose Vercel CLI commands into complete debugging, deployment, and recovery sessions."
last\_updated: "2026-03-23T09:40:03.752Z"
source: "https://vercel.com/docs/agent-resources/workflows"
