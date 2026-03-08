# CLI Workflows

These workflows show how to compose multiple Vercel CLI commands into complete work sessions. Each workflow walks through a real task from start to finish, including the reasoning between steps.

Workflows are distributed throughout the docs, colocated with the features they use. This page links to all available workflows.

## Debugging and recovery

| Workflow                                                                                 | Description                                                                              | Entry point   |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------- |
| [Debugging production 500 errors](/docs/observability/debug-production-errors)           | Find, fix, and verify production 500 errors using logs, inspect, and preview deployments | Observability |
| [Rolling back a production deployment](/docs/deployments/rollback-production-deployment) | Recover from a bad production deployment with rollback, investigation, and redeployment  | Deployments   |
| [Debugging slow Vercel Functions](/docs/functions/debug-slow-functions)                  | Diagnose and fix slow functions using timing analysis, logs, and configuration tuning    | Functions     |
| [Diagnosing and fixing cache issues](/docs/cdn-cache/debug-cache-issues)                 | Identify and fix stale CDN cache, data cache, and build cache problems                   | CDN Cache     |

## Setup and deployment

| Workflow                                                                                                     | Description                                                                             | Entry point           |
| ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- | --------------------- |
| [Deploying a project from the CLI](/docs/projects/deploy-from-cli)                                           | Set up and deploy a project end-to-end, from linking to production with a custom domain | Projects              |
| [Setting up a custom domain](/docs/domains/set-up-custom-domain)                                             | Add a custom domain, configure DNS records, and verify SSL certificates                 | Domains               |
| [Managing environment variables across environments](/docs/environment-variables/manage-across-environments) | Add, sync, and verify environment variables across development, preview, and production | Environment Variables |
| [Promoting a preview deployment to production](/docs/deployments/promote-preview-to-production)              | Test a preview deployment and promote it to production without rebuilding               | Deployments           |
| [Performing a rolling release deployment](/docs/rolling-releases/rolling-release-deployment)                 | Gradually roll out a production deployment with traffic stages and monitoring           | Rolling Releases      |

## Content and storage management

| Workflow                                                                           | Description                                                            | Entry point |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | ----------- |
| [Managing redirects at scale](/docs/redirects/manage-redirects-at-scale)           | Add, bulk upload, version, and roll back project-level redirects       | Redirects   |
| [Managing Vercel Blob storage from the CLI](/docs/vercel-blob/manage-blob-storage) | Create blob stores, upload files, organize content, and manage storage | Vercel Blob |

## Isolated environments

| Workflow                                                                             | Description                                                                    | Entry point    |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | -------------- |
| [Running commands in a Vercel Sandbox](/docs/vercel-sandbox/run-commands-in-sandbox) | Create isolated sandbox environments to run builds, tests, and commands safely | Vercel Sandbox |

## Feature flags

| Workflow                                                                                | Description                                                                                     | Entry point  |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ------------ |
| [Rolling out a new feature](/docs/flags/vercel-flags/cli/roll-out-feature)              | Create a feature flag, wire it into your app, and progressively enable it across environments   | Vercel Flags |
| [Running an A/B test](/docs/flags/vercel-flags/cli/run-ab-test)                         | Set up an A/B test, track results through Web Analytics, and clean up afterward                 | Vercel Flags |
| [Cleaning up after a full rollout](/docs/flags/vercel-flags/cli/clean-up-after-rollout) | Audit active flags, remove a fully rolled-out flag from code, and archive it                    | Vercel Flags |
| [Setting up Flags Explorer](/docs/flags/vercel-flags/cli/set-up-flags-explorer)         | Add Flags Explorer to the Vercel Toolbar so you can override flag values on preview deployments | Vercel Flags |

## Agent quickstarts

These guides help you delegate code-generation tasks to a coding agent like Claude Code, Cursor, or Cline. Each one provides prompts you can copy into your agent to scaffold a full integration.

| Guide                                                                              | Description                                                                   | Entry point         |
| ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ------------------- |
| [AI Gateway agent quickstart](/docs/ai-gateway/agent-quickstart)                   | Set up AI Gateway with the AI SDK using prompts and cURL verification         | AI Gateway          |
| [Sign in with Vercel agent quickstart](/docs/sign-in-with-vercel/agent-quickstart) | Scaffold the full OAuth flow with PKCE, token handling, and a profile page    | Sign in with Vercel |
| [Routing Middleware agent quickstart](/docs/routing-middleware/agent-quickstart)   | Create routing middleware for redirects, auth checks, or geolocation rewrites | Routing Middleware  |

## How these workflows help AI agents

These workflows are designed as composition patterns. Each one shows a complete sequence of CLI commands with the reasoning that connects them. AI coding agents can use these patterns to:

- Learn when to reach for each Vercel CLI command
- Understand the investigation flow for common problems
- Compose commands into multi-step sessions for novel situations
- Follow the same debugging methodology that experienced Vercel users follow

title: "Getting started with AI Gateway using a coding agent"
description: "Set up AI Gateway with a coding agent like Claude Code, Cursor, or Cline using skills, prompts, and cURL verification."
last\_updated: "2026-03-08T05:03:10.095Z"
source: "https://vercel.com/docs/ai-gateway/agent-quickstart"
