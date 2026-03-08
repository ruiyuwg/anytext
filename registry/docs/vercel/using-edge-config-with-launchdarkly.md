# Using Edge Config with LaunchDarkly

This guide will help you get started with using Vercel's LaunchDarkly integration with Edge Config. This integration allows you to use Edge Config as a configuration source for your LaunchDarkly feature flags.

[LaunchDarkly](https://docs.launchdarkly.com/home) allows you to enable and disable feature flags dynamically, decoupling feature rollouts from deployments. The LaunchDarkly Edge Config integration enables you to evaluate flags in the region closest to the user without making network calls to LaunchDarkly.

> **💡 Note:** The LaunchDarkly Edge Config integration is only available to **Enterprise**
> LaunchDarkly customers. However, you **do not** need to have a Vercel
> [Enterprise](/docs/plans/enterprise) account.

## Prerequisites

Before using this integration, you should have:

1. The latest version of Vercel CLI. To check your version, use `vercel --version`. To [install](/docs/cli#installing-vercel-cli) or update Vercel CLI, use:

   ````
   ```bash
   pnpm i vercel
   ```


   ```bash
   yarn i vercel
   ```


   ```bash
   npm i vercel
   ```


   ```bash
   bun i vercel
   ```
   ````

2. A project. If you don't have one, you can run the following terminal commands to create a Next project:

   ```bash
   pnpm i 
   ```

   ```bash
   yarn i 
   ```

   ```bash
   npm i 
   ```

   ```bash
   bun i 
   ```

3. A Vercel project. If you don't have one, see [Creating a Project](/docs/projects/overview#creating-a-project)

4. An Edge Config. If you don't have one, follow [the Edge Config quickstart](/docs/edge-config/get-started)

5. The Edge Config SDK:

   ````
   ```bash
   pnpm i @vercel/edge-config
   ```


   ```bash
   yarn i @vercel/edge-config
   ```


   ```bash
   npm i @vercel/edge-config
   ```


   ```bash
   bun i @vercel/edge-config
   ```
   ````

- ### Set up the LaunchDarkly integration
  Visit [the LaunchDarkly page in the Integration Marketplace](/marketplace/launchdarkly) and select the **Add Integration** button. From the Integration dialog:
  1. Select a Vercel team and project to connect the integration to
  2. Log into LaunchDarkly
  3. Select the **Authorize** button to allow the integration to access your LaunchDarkly account data
  4. Name the integration, and select an existing Edge Config or create a new one

- ### Get your client-side ID
  To use the integration, you'll need your client-side ID from LaunchDarkly. Here's how to add it to your project:
  1. [Go to the settings page of your LaunchDarkly dashboard](https://app.launchdarkly.com/settings/projects).
  2. Select the LaunchDarkly project your integration is connected to
  3. On the next page, copy the Client-side ID under the environment your integration is connected to (for example, Test or Production)
     Now, you must add the value to your project as an Environment Variable:
  4. Navigate to [your Vercel dashboard](/dashboard) and select the project you want to use LaunchDarkly with
  5. Under the **Settings** tab, navigate to **Environment Variables**, and create an `LD_CLIENT_SIDE_ID` variable with the value of your client-side ID
     [See our Environment Variables docs to learn more](/docs/environment-variables#creating-environment-variables).

- ### Use the LaunchDarkly integration in your code
  Open your project's code on your local machine and do the following:
  1. Install LaunchDarkly's Vercel Server SDK:

     ```bash
     pnpm i @launchdarkly/vercel-server-sdk
     ```

     ```bash
     yarn i @launchdarkly/vercel-server-sdk
     ```

     ```bash
     npm i @launchdarkly/vercel-server-sdk
     ```

     ```bash
     bun i @launchdarkly/vercel-server-sdk
     ```

  2. Use [Vercel CLI](/docs/cli#installing-vercel-cli) to pull your Vercel project's environment variables:

     ```bash
     vercel env pull
     ```

  3. Finally, create a  file at the root of your project. This file will configure a Middleware that redirects your site visitors from `/homepage` to `/new-homepage` based on a feature flag fetched from LaunchDarkly:

     ```ts filename="middleware.ts" framework=all
     import { init } from '@launchdarkly/vercel-server-sdk';
     import { createClient } from '@vercel/edge-config';

     const edgeConfigClient = createClient(process.env.EDGE_CONFIG!);
     const launchDarklyClient = init('YOUR CLIENT-SIDE ID', edgeConfigClient);

     export const config = {
       // Only run the middleware on the dashboard route
       matcher: '/homepage',
     };

     export default function middleware(request: Request): Response {
       await launchDarklyClient.initFromServerIfNeeded();
       const launchDarklyContext = { kind: 'org', key: 'my-org-key' };
       const showExperimentalHomepage = await launchDarklyClient.variation(
         'experimental-homepage',
         launchDarklyContext,
         true,
       );

       if (showExperimentalHomepage) {
         const url = new URL(request.url);
         url.pathname = '/new-homepage';
         return Response.redirect(url);
       }
     }
     ```

     ```js filename="middleware.js" framework=all
     import { init } from '@launchdarkly/vercel-server-sdk'
     import { createClient } from '@vercel/edge-config'

     const edgeConfigClient = createClient(process.env.EDGE_CONFIG);
     const launchDarklyClient = init("YOUR CLIENT-SIDE ID", edgeConfigClient);

     export const config = {
       // Only run the middleware on the dashboard route
       matcher: '/homepage',
     };

     export default function middleware(request) {
       await launchDarklyClient.initFromServerIfNeeded();
       const launchDarklyContext = { kind: 'org', key: 'my-org-key' };
       const showExperimentalHomepage = await launchDarklyClient.variation(
         'experimental-homepage',
         launchDarklyContext,
         true
       );

       if(showExperimentalHomepage) {
         const url = new URL(request.url);
         url.pathname = '/new-homepage';
         return Response.redirect(url);
       }
     }
     ```

## Next steps

Now that you have set up the LaunchDarkly Edge Config integration, you can explore the following topics to learn more:

- [Get started with Edge Config](/docs/edge-config/get-started)
- [Read with the SDK](/docs/edge-config/edge-config-sdk)
- [Use the dashboard](/docs/edge-config/edge-config-dashboard)
- [Edge Config limits](/docs/edge-config/edge-config-limits)

title: "Using Edge Config with an integration"
description: "Learn how to use Edge Config with popular A/B testing and feature flag service integrations."
last\_updated: "2026-03-08T05:03:13.726Z"
source: "https://vercel.com/docs/edge-config/edge-config-integrations"

# Using Edge Config with an integration

> **🔒 Permissions Required**: Edge Config integrations

Vercel has partnered with A/B testing and feature flag services such as LaunchDarkly and Statsig to make it easier to integrate Edge Config into your workflow. These integrations sync feature flag definitions into Edge Config, allowing you to evaluate flags in the region closest to the user without making network calls to your preferred service provider.

To see these integrations in action, explore a template:

You can get started with any of these Edge Config integrations by following the quickstart:

- **[LaunchDarkly](/docs/edge-config/integrations/launchdarkly-edge-config)**
- **[Statsig](/docs/edge-config/integrations/statsig-edge-config)**
- **[Hypertune](/docs/edge-config/integrations/hypertune-edge-config)**
- **[Split](/docs/edge-config/integrations/split-edge-config)**
- **[DevCycle](/docs/edge-config/integrations/devcycle-edge-config)**

## More resources

- [Quickstart](/docs/edge-config/get-started)
- [Read with the SDK](/docs/edge-config/edge-config-sdk)
- [Use the Dashboard](/docs/edge-config/edge-config-dashboard)
- [Manage with the API](/docs/edge-config/vercel-api)
- [Edge Config Limits](/docs/edge-config/edge-config-limits)

title: "Using Edge Config with Split"
description: "Learn how to use Edge Config with Vercel"
last\_updated: "2026-03-08T05:03:13.776Z"
source: "https://vercel.com/docs/edge-config/edge-config-integrations/split-edge-config"
