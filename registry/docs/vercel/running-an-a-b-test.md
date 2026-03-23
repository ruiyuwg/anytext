# Running an A/B test

This workflow sets up a multi-variant layout experiment, tracks results through Web Analytics, and cleans up afterward.

## 1. Create the flag

```bash filename="terminal"
vercel flags create new-pricing-layout --kind string \
  --description "A/B test: new pricing page layout" \
  --variant control="Current layout" --variant treatment="New layout"
```

## 2. Define the flag in code

```ts filename="flags.ts"
import { flag } from 'flags/next';
import { vercelAdapter } from '@flags-sdk/vercel';

export const newPricingLayout = flag<'control' | 'treatment'>({
  key: 'new-pricing-layout',
  adapter: vercelAdapter(),
});
```

The flag returns one of the variants you created in the CLI, in this case `control` or `treatment`. If you want to rename a variant later, use `vercel flags update`.

## 3. Use the flag in a component

```tsx filename="app/pricing/page.tsx"
import { newPricingLayout } from '../../flags';

export default async function PricingPage() {
  const layoutVariant = await newPricingLayout();

  return layoutVariant === 'treatment' ? <NewPricing /> : <CurrentPricing />;
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

## 5. Deploy to preview

```bash filename="terminal"
vercel deploy
```

## 6. Test both variants in preview

Use `vercel flags set` to switch the preview environment between variants while you test:

```bash filename="terminal"
vercel flags set new-pricing-layout --environment preview --variant control \
  --message "Verify the control layout in preview"
```

```bash filename="terminal"
vercel flags set new-pricing-layout --environment preview --variant treatment \
  --message "Verify the treatment layout in preview"
```

Visit the preview URL after each change to confirm both layouts render correctly. If you've set up the [Flags Explorer](/docs/flags/flags-explorer), you can still use it for local overrides.

## 7. Open the flag and configure the experiment

Use `vercel flags open` to jump to the flag in the dashboard:

```bash filename="terminal"
vercel flags open new-pricing-layout
```

In the dashboard, configure the targeting rule that splits production traffic between the `control` and `treatment` variants.

## 8. Deploy to production

```bash filename="terminal"
vercel deploy --prod
```

## 9. Monitor the experiment

Monitor results in Web Analytics by comparing metrics for the `control` and `treatment` variants.

## 10. Conclude the experiment

When you've picked a winner, clean up:

1. Remove the flag from code and keep only the winning layout
2. Archive the flag:

```bash filename="terminal"
vercel flags archive new-pricing-layout --yes
```

title: "Setting up Flags Explorer"
description: "Add the Flags Explorer to the Vercel Toolbar so you can override flag values on preview deployments without affecting other users."
last\_updated: "2026-03-23T09:40:10.094Z"
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
last\_updated: "2026-03-23T09:40:10.108Z"
source: "https://vercel.com/docs/flags/vercel-flags/dashboard/archive"
