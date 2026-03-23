# Getting Started with Vercel Flags

This guide walks you through creating a feature flag in the Vercel Dashboard and evaluating it in your application. By the end you'll have a working flag that you can toggle from the dashboard.

## Prerequisites

- A [Next.js](/docs/frameworks/nextjs) project connected to Vercel.

- [Vercel CLI](/docs/cli) installed.

- ### Create a flag in the dashboard
  1. Go to your [Vercel Dashboard](https://vercel.com/dashboard).
  2. Open **Flags** in the sidebar for your project.
  3. Create a new flag named `marketing-banner`.
  4. Leave the **Type** set to **Boolean** and configure the environment settings to be **on** for Development and **off** for Preview and Production.

- ### Pull environment variables
  When you create your first flag, Vercel provisions [SDK Keys](/docs/flags/vercel-flags/dashboard/sdk-keys) for each environment and stores them in a `FLAGS` environment variable on your project. Pull them into your local `.env.local` file:
  ```bash filename="terminal"
  vercel env pull
  ```
  If your project isn't linked yet, run `vercel link` first.

- ### Install the required packages

- ### Evaluate the flag in your application
  Toggle the flag off for the **Development** environment in the Vercel Dashboard, then press **Review and save** and leave a message for the change. Reload the page to see the change.

- ### Add targeting with the identify function
  Now that your flag is working, you can add an `identify` function to pass user and team context for [targeting rules](/docs/flags/vercel-flags/dashboard/entities). This lets you roll out flags to specific users, plans, or teams from the dashboard.

## Built-in resilience

When you deploy to Vercel, the build process fetches your latest flag definitions once at build time and bundles them into the deployment. This guarantees every function uses the same snapshot during the build, and provides a runtime fallback if the Vercel Flags service is temporarily unreachable. Definitions are only fetched when your project has at least one environment variable containing an SDK key for Vercel Flags.

Learn more about [embedded definitions](/docs/flags/vercel-flags/sdks/core#embedded-definitions).

## Next steps

Your flag is working. Here's what to explore next:

- **[Entities and targeting](/docs/flags/vercel-flags/dashboard/entities)**: Define user attributes and create rules to show flags to specific groups.
- **[Segments](/docs/flags/vercel-flags/dashboard/segments)**: Build reusable audience groups like "Beta Testers" or "Internal Team."
- **[Flags Explorer](/docs/flags/flags-explorer/getting-started)**: Override flags in the Vercel Toolbar during development without affecting other users.
- **[Drafts](/docs/flags/vercel-flags/dashboard/drafts)**: Define flags in code first, then promote them in the dashboard when you're ready.
- **[Observability](/docs/flags/observability)**: Track flag evaluations in Runtime Logs and Web Analytics.
- **[Managing flags](/docs/flags/vercel-flags/dashboard)**: Configure rules, environments, and flag lifecycles in the dashboard.

title: "Using the Core Library"
description: "Use the Vercel Flags core evaluation library directly for custom setups."
last\_updated: "2026-03-23T09:40:10.248Z"
source: "https://vercel.com/docs/flags/vercel-flags/sdks/core"
