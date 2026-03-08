# Running an A/B test

This workflow sets up an A/B test for a layout experiment, tracks results through Web Analytics, and cleans up afterward.

## 1. Create the flag

```bash filename="terminal"
vercel flags add new-pricing-layout --kind boolean \
  --description "A/B test: new pricing page layout"
```

## 2. Define the flag in code

```ts filename="flags.ts"
import { flag } from 'flags/next';
import { vercelAdapter } from '@flags-sdk/vercel';

export const newPricingLayout = flag({
  key: 'new-pricing-layout',
  adapter: vercelAdapter(),
});
```

The flag returns `false` until you configure targeting in the dashboard.

## 3. Use the flag in a component

```tsx filename="app/pricing/page.tsx"
import { newPricingLayout } from '../../flags';

export default async function PricingPage() {
  const useNewLayout = await newPricingLayout();

  return useNewLayout ? <NewPricing /> : <CurrentPricing />;
}
```

## 4. Track flag values in Web Analytics

Add the `FlagValues` component to your layout so Web Analytics can correlate page views and events with flag values automatically:

```tsx filename="app/layout.tsx"
import { Suspense } from 'react';
import { FlagValues } from 'flags/react';
import { newPricingLayout } from '../flags';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        {children}
        <Suspense fallback={null}>
          <FlagValues values={{ 'new-pricing-layout': await newPricingLayout() }} />
        </Suspense>
      </body>
    </html>
  );
}
```

See [Web Analytics integration](/docs/flags/observability/web-analytics) for more on tracking flag values.

## 5. Deploy to preview and test both variants

```bash filename="terminal"
vercel deploy
```

Visit the preview URL to confirm both layouts render correctly. If you've set up the [Flags Explorer](/docs/flags/flags-explorer), you can toggle the flag in the toolbar.

## 6. Deploy to production

```bash filename="terminal"
vercel deploy --prod
```

Enable the flag in the **Production** environment in the dashboard to start serving the new layout to users. Monitor results in Web Analytics by comparing metrics per variant.

## 7. Conclude the experiment

When you've picked a winner, clean up:

1. Remove the flag from code and keep only the winning layout
2. Archive the flag:

```bash filename="terminal"
vercel flags archive new-pricing-layout --yes
```

title: "Setting up Flags Explorer"
description: "Add the Flags Explorer to the Vercel Toolbar so you can override flag values on preview deployments without affecting other users."
last\_updated: "2026-03-08T05:03:14.521Z"
source: "https://vercel.com/docs/flags/vercel-flags/cli/set-up-flags-explorer"

# Setting up Flags Explorer

The [Flags Explorer](/docs/flags/flags-explorer) adds a panel to the [Vercel Toolbar](/docs/vercel-toolbar) that lets you override flag values on preview deployments. Make sure you've [set up the toolbar](/docs/vercel-toolbar) first. This is a one-time setup per project.

## 1. Create a Flags Discovery Endpoint

The Flags Explorer reads flag metadata from a well-known API route:

```ts filename="app/.well-known/vercel/flags/route.ts"
import { createFlagsDiscoveryEndpoint, getProviderData } from 'flags/next';
import * as flags from '../../../../flags';

export const GET = createFlagsDiscoveryEndpoint(async () => {
  return getProviderData(flags);
});
```

This endpoint uses the `FLAGS_SECRET` environment variable to authenticate requests. Make sure you've pulled it with `vercel env pull`.

## 2. Deploy to preview

```bash filename="terminal"
vercel deploy
```

## 3. Use the toolbar

Visit the preview URL. The Flags Explorer panel appears in the Vercel Toolbar. Toggle any flag to override its value for your session without affecting other users.

See [Flags Explorer](/docs/flags/flags-explorer/getting-started) for the full setup guide, including how to share overrides with teammates via URL.

title: "Archive"
description: "Archive unused feature flags and restore them when needed."
last\_updated: "2026-03-08T05:03:14.529Z"
source: "https://vercel.com/docs/flags/vercel-flags/dashboard/archive"
