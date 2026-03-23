# Using Edge Config with Statsig

This guide will help you get started with using Vercel's Statsig integration with Edge Config. This integration allows you to use Edge Config as a configuration source for your Statsig feature flags.

Statsig is a statistics engine that enables you to automate A/B testing and make data-driven decisions at scale. The Statsig integration enables you to replace hard-coded values in your application with dynamic values on the server.

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

- ### Set up the Statsig integration
  Visit [the Statsig page in the Integration Marketplace](/marketplace/statsig) and select the **Add Integration** button. Then:
  1. Select a Vercel team and Vercel project for your integration to be applied to
  2. Log into Statsig
  3. Select or create a new Edge Config to connect to Statsig
  4. Statsig will provide you with a **[Connection String](/docs/edge-config/using-edge-config#using-a-connection-string "Connection String")** and **Edge Config Item Key**. Save both, as you'll need them later in the setup

- ### Add your Environment Variables

  Navigate to [your Vercel dashboard](/dashboard), and select the project you want to use the Statsig integration with.

  Under the **Settings** tab, navigate to **Environment Variables**, and add the following variables:

  1. `EDGE_CONFIG`: Set this to the value of your Connection String
  2. `EDGE_CONFIG_ITEM_KEY`: Set this to the value of your Edge Config Item Key
     See [our Environment Variables documentation](/docs/environment-variables#creating-environment-variables) to learn more.

- ### Use the Statsig integration in your code

  Statsig's [`statsig-node-vercel`](https://www.npmjs.com/package/statsig-node-vercel) package offers an `EdgeConfigDataAdapter` class, which you can use to initialize Statsig experiments with Edge Config.

  The following example sets up a Statsig experiment with Edge Config in an [Middleware](/docs/routing-middleware) file, using the `EDGE_CONFIG_ITEM_KEY` environment variable.

  ```ts filename="middleware.ts" framework=other
  import type { VercelRequest } from '@vercel/node';
  import Statsig from 'statsig-node';
  import { createClient } from '@vercel/edge-config';
  import { EdgeConfigDataAdapter } from 'statsig-node-vercel';

  export const config = {
    matcher: '/',
  };

  const edgeConfigClient = createClient(process.env.EDGE_CONFIG!);
  const dataAdapter = new EdgeConfigDataAdapter({
    edgeConfigClient: edgeConfigClient,
    edgeConfigItemKey: process.env.EDGE_CONFIG_ITEM_KEY!,
  });

  export async function middleware(request: VercelRequest) {
    await Statsig.initialize('statsig-server-api-key-here', { dataAdapter });

    const experiment = await Statsig.getExperiment(
      { userID: 'exampleId' },
      'statsig_example_experiment',
    );
  }
  ```

  ```ts filename="middleware.ts" framework=nextjs
  import { NextResponse } from 'next/server';
  import type { NextRequest, NextFetchEvent } from 'next/server';
  import Statsig from 'statsig-node';
  import { createClient } from '@vercel/edge-config';
  import { EdgeConfigDataAdapter } from 'statsig-node-vercel';

  export const config = {
    matcher: '/',
  };

  const edgeConfigClient = createClient(process.env.EDGE_CONFIG!);
  const dataAdapter = new EdgeConfigDataAdapter({
    edgeConfigClient: edgeConfigClient,
    edgeConfigItemKey: process.env.EDGE_CONFIG_ITEM_KEY!,
  });

  export async function middleware(request: NextRequest, event: NextFetchEvent) {
    await Statsig.initialize('statsig-server-api-key-here', { dataAdapter });

    const experiment = await Statsig.getExperiment(
      { userID: 'exampleId' },
      'statsig_example_experiment',
    );

    // Do any other experiment actions here

    // Ensure that all logged events are flushed to Statsig servers before the middleware exits
    event.waitUntil(Statsig.flush());

    return NextResponse.next();
  }
  ```

  ```ts filename="middleware.ts" framework=nextjs-app
  import { NextResponse } from 'next/server';
  import type { NextRequest, NextFetchEvent } from 'next/server';
  import Statsig from 'statsig-node';
  import { createClient } from '@vercel/edge-config';
  import { EdgeConfigDataAdapter } from 'statsig-node-vercel';

  export const config = {
    matcher: '/',
  };

  const edgeConfigClient = createClient(process.env.EDGE_CONFIG!);
  const dataAdapter = new EdgeConfigDataAdapter({
    edgeConfigClient: edgeConfigClient,
    edgeConfigItemKey: process.env.EDGE_CONFIG_ITEM_KEY!,
  });

  export async function middleware(request: NextRequest, event: NextFetchEvent) {
    await Statsig.initialize('statsig-server-api-key-here', { dataAdapter });

    const experiment = await Statsig.getExperiment(
      { userID: 'exampleId' },
      'statsig_example_experiment',
    );

    // Do any other experiment actions here

    // Ensure that all logged events are flushed to Statsig servers before the middleware exits
    event.waitUntil(Statsig.flush());

    return NextResponse.next();
  }
  ```

  ```js filename="middleware.js" framework=other
  import Statsig from 'statsig-node';
  import { createClient } from '@vercel/edge-config';
  import { EdgeConfigDataAdapter } from 'statsig-node-vercel';

  export const config = {
    matcher: '/',
  };

  const edgeConfigClient = createClient(process.env.EDGE_CONFIG);
  const dataAdapter = new EdgeConfigDataAdapter({
    edgeConfigClient: edgeConfigClient,
    edgeConfigItemKey: process.env.EDGE_CONFIG_ITEM_KEY,
  });

  export async function middleware() {
    await Statsig.initialize('statsig-server-api-key-here', { dataAdapter });

    const experiment = await Statsig.getExperiment(
      { userID: 'exampleId' },
      'statsig_example_experiment',
    );
  }
  ```

  ```js filename="middleware.js" framework=nextjs
  import Statsig from 'statsig-node';
  import { createClient } from '@vercel/edge-config';
  import { EdgeConfigDataAdapter } from 'statsig-node-vercel';

  export const config = {
    matcher: '/',
  };

  const edgeConfigClient = createClient(process.env.EDGE_CONFIG);
  const dataAdapter = new EdgeConfigDataAdapter({
    edgeConfigClient: edgeConfigClient,
    edgeConfigItemKey: process.env.EDGE_CONFIG_ITEM_KEY,
  });

  export async function middleware() {
    await Statsig.initialize('statsig-server-api-key-here', { dataAdapter });

    const experiment = await Statsig.getExperiment(
      { userID: 'exampleId' },
      'statsig_example_experiment',
    );
  }
  ```

  ```js filename="middleware.js" framework=nextjs-app
  import Statsig from 'statsig-node';
  import { createClient } from '@vercel/edge-config';
  import { EdgeConfigDataAdapter } from 'statsig-node-vercel';

  export const config = {
    matcher: '/',
  };

  const edgeConfigClient = createClient(process.env.EDGE_CONFIG);
  const dataAdapter = new EdgeConfigDataAdapter({
    edgeConfigClient: edgeConfigClient,
    edgeConfigItemKey: process.env.EDGE_CONFIG_ITEM_KEY,
  });

  export async function middleware() {
    await Statsig.initialize('statsig-server-api-key-here', { dataAdapter });

    const experiment = await Statsig.getExperiment(
      { userID: 'exampleId' },
      'statsig_example_experiment',
    );
  }
  ```

## Next steps

Now that you have set up the Statsig Edge Config integration, you can explore the following topics to learn more:

- [Get started with Edge Config](/docs/edge-config/get-started)
- [Read with the SDK](/docs/edge-config/edge-config-sdk)
- [Use the dashboard](/docs/edge-config/edge-config-dashboard)
- [Edge Config limits](/docs/edge-config/edge-config-limits)

title: "Edge Config Limits and pricing"
description: "Learn about the Edge Configs limits and pricing based on account plans."
last\_updated: "2026-03-23T09:40:09.198Z"
source: "https://vercel.com/docs/edge-config/edge-config-limits"
