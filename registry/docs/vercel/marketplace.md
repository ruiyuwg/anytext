# Marketplace

When you connect a feature flag provider through the [Vercel Marketplace](https://vercel.com/marketplace?category=experimentation), you get deep platform integration with Vercel. Your flags and experiments will automatically appear in **Flags** in your dashboard sidebar, where you can see all your flags in one place.

You can keep using your existing provider while you use Vercel's developer tools. Once you connect your provider, your flags work automatically with the [Flags dashboard](#flags-dashboard), [Flags Explorer](/docs/flags/flags-explorer/getting-started), and [observability](/docs/flags/observability). You can integrate flags into your code using your provider's SDK or the [Flags SDK](/docs/flags/flags-sdk-reference) for framework-native patterns and type-safety.

## Available providers

You can find popular feature flag and experimentation platforms in the Vercel Marketplace:

### Native Integrations

Native integrations are purchased through the Marketplace, let you sign in with your Vercel account, show flags directly in the Vercel dashboard, and sync flag values to Edge Config for faster reads.

- [Statsig](/marketplace/statsig)
- [Hypertune](/marketplace/hypertune)
- [PostHog](/marketplace/posthog)
- [GrowthBook](/marketplace/growthbook)

[Browse all experimentation integrations](/marketplace?category=experimentation)

### External Integrations

External integrations allow syncing feature flags of third-party providers to Edge Config faster reads but are billed through the provider. Feature Flags from external integrations do not appear in the Vercel dashboard.

- [LaunchDarkly](/marketplace/launchdarkly)

[Browse all experimentation integrations](/marketplace?category=experimentation)

## Flags dashboard

Once you connect a native integration, all your flags appear in the **Flags** section in your project sidebar. Use this dashboard to view and manage every flag in your project.

- **Unified overview**: See every flag, its current status, and which provider manages it in one list.
- **Source of truth**: You can view marketplace flags in the Vercel Dashboard, but you manage their configuration in your provider's dashboard to keep it as the source of truth.
- **Direct editing**: Click any flag to jump directly to your provider's dashboard. You'll be signed in automatically with your Vercel account.

## Edge Config sync

Native integrations and external integrations can sync flag values to [Edge Config](/docs/storage/edge-config) for microsecond reads at the edge. This eliminates the network hop to your provider's API during flag evaluation.

See these integration guides for setup instructions:

- [Using Edge Config with LaunchDarkly](/docs/edge-config/edge-config-integrations/launchdarkly-edge-config)
- [Using Edge Config with Statsig](/docs/edge-config/edge-config-integrations/statsig-edge-config)
- [Using Edge Config with Hypertune](/docs/edge-config/edge-config-integrations/hypertune-edge-config)

## Platform integration

Marketplace providers work directly with Vercel's developer tools without requiring extra configuration in your codebase:

- **Flags Explorer**: View and override your flags during development using the [Vercel Toolbar](/docs/flags/flags-explorer/getting-started).
- **Observability**: Track flag evaluations in [Runtime Logs and Web Analytics](/docs/flags/observability) to help you debug and analyze your features.

## Codebase integration

You have multiple options for using marketplace flags in your application code:

- **Use your provider's SDK**: You can continue using the SDK provided by your chosen provider.
- **Use the Flags SDK**: Alternatively, you can use the [Flags SDK](/docs/flags/flags-sdk-reference) for framework-native patterns and type-safety in Next.js and SvelteKit.

No matter which SDK you choose, you still get deep Vercel platform integration once you connect your provider through the Marketplace.

## Get started

To integrate a marketplace provider with your Vercel project:

1. **Install the integration**: Choose your provider in the [Marketplace](https://vercel.com/marketplace?category=experimentation) and follow the steps to connect it to your project.
2. **View your flags**: Check **Flags** in your project sidebar overview to see your flags automatically synced from your provider.
3. **Use the Toolbar**: Open the [Vercel Toolbar](/docs/flags/flags-explorer/getting-started) in your preview or local environment to interact with your flags.

title: "Observability"
description: "Track feature flag evaluations and analyze their impact with Web Analytics."
last\_updated: "2026-03-23T09:40:10.004Z"
source: "https://vercel.com/docs/flags/observability"

# Observability

Feature flags play a crucial role in the software development lifecycle, enabling safe feature rollouts, experimentation, and A/B testing. When you integrate your feature flags with the Vercel platform, you can improve your application by using Vercel's observability features.

## Why track flag evaluations?

Tracking which flags are evaluated and when gives you insights into:

- How features perform in production
- Which user segments see which features
- The correlation between flags and application metrics
- Issues related to specific flag configurations

## Observability options

## How it works

The observability integration works by reporting flag values as your application evaluates them:

1. When your code evaluates a flag, call `reportValue(flagKey, flagValue)`
2. Vercel captures these evaluations and associates them with the request or event
3. View the data in the Web Analytics dashboard

If you're using the Flags SDK, flag reporting happens automatically—no manual instrumentation required.

## Next steps

- [Integrate flags with Web Analytics](/docs/flags/observability/web-analytics)
- [Learn about the Flags SDK](/docs/flags/flags-sdk-reference)

title: "Integrate flags with Vercel Web Analytics"
description: "Learn how to tag your page views and custom events with feature flags"
last\_updated: "2026-03-23T09:40:10.012Z"
source: "https://vercel.com/docs/flags/observability/web-analytics"
