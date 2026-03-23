# Rolling out a new feature

This workflow creates a boolean feature flag, wires it into your application, and progressively enables it across environments.

## 1. Create the flag

```bash filename="terminal"
vercel flags create redesigned-checkout --kind boolean \
  --description "New checkout flow with streamlined steps"
```

*Creating a boolean flag to gate the new checkout experience.*

## 2. Verify SDK keys exist

Each project gets SDK keys automatically when you create your first flag. Confirm they're in place:

```bash filename="terminal"
vercel flags sdk-keys ls
```

## 3. Pull environment variables

The `FLAGS` environment variable contains your SDK keys. Pull it into your local `.env.local`:

```bash filename="terminal"
vercel env pull
```

## 4. Install the Flags SDK

```bash filename="terminal"
pnpm add flags @flags-sdk/vercel
```

## 5. Define the flag in code

Create a flag definition using the Flags SDK. The `vercelAdapter` reads the `FLAGS` environment variable automatically:

```ts filename="flags.ts"
import { flag } from 'flags/next';
import { vercelAdapter } from '@flags-sdk/vercel';

export const redesignedCheckout = flag({
  key: 'redesigned-checkout',
  adapter: vercelAdapter(),
});
```

A new boolean flag serves `true` in development and `false` in preview and production. That lets you build against the new checkout locally while preview and production keep serving the old flow.

## 6. Use the flag in a component

```tsx filename="app/checkout/page.tsx"
import { redesignedCheckout } from '../../flags';

export default async function CheckoutPage() {
  const showRedesign = await redesignedCheckout();

  return showRedesign ? <NewCheckout /> : <OldCheckout />;
}
```

## 7. Deploy to preview

```bash filename="terminal"
vercel deploy
```

Visit the preview URL to confirm the old checkout renders. Preview still serves `false` until you enable the flag there.

## 8. Enable the flag in preview

When the preview deployment looks good, enable the flag there:

```bash filename="terminal"
vercel flags enable redesigned-checkout --environment preview \
  --message "Start preview rollout"
```

Visit the preview URL again to confirm the new checkout renders.

## 9. Deploy to production

```bash filename="terminal"
vercel deploy --prod
```

## 10. Enable the flag in production

```bash filename="terminal"
vercel flags enable redesigned-checkout --environment production \
  --message "Roll out redesigned checkout in production"
```

Visit the production URL to confirm the new checkout is live.

title: "Running an A/B test"
description: "Set up an A/B test with a feature flag, track results through Web Analytics, and clean up afterward using the Vercel CLI."
last\_updated: "2026-03-23T09:40:10.090Z"
source: "https://vercel.com/docs/flags/vercel-flags/cli/run-ab-test"
