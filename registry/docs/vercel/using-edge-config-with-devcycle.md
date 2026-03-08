# Using Edge Config with DevCycle

This guide will help you get started with using Vercel's DevCycle integration with Edge Config. This integration allows you to use Edge Config as a configuration source for your DevCycle feature flags.

> **🔒 Permissions Required**: The DevCycle Edge Config integration

DevCycle is a feature management platform designed for developers. DevCycle allows you to work with feature flags more naturally, where you write code, so you can deliver better features, faster.

With DevCycle and Vercel Edge Config the decision logic for your features lives with your hosted site, so you can run your feature rollouts or experiments with ultra-low latency.

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

2. A project. If you don't have one, you can run the following terminal commands to create a Next.js project:

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

- ### Set up the DevCycle integration
  Visit [the DevCycle page in the Integration Marketplace](/marketplace/devcycle) and select the **Add Integration** button. From the modal that opens:
  1. Select your Vercel team and project.
  2. Continue and log into DevCycle.
  3. Select the DevCycle Organization and Project you want to use with Vercel Edge Config.
  4. Connect your DevCycle project to an existing or new Edge Config store.
  5. Click **Finish Setup**.

- ### Install the DevCycle Edge Config package

  ````
  ```bash
  pnpm i @devcycle/vercel-edge-config @vercel/edge-config
  ```


  ```bash
  yarn i @devcycle/vercel-edge-config @vercel/edge-config
  ```


  ```bash
  npm i @devcycle/vercel-edge-config @vercel/edge-config
  ```


  ```bash
  bun i @devcycle/vercel-edge-config @vercel/edge-config
  ```
  ````

- ### Use the DevCycle integration in your code
  > For \['node']:
  > For more information on DevCycle Node SDK usage, see [DevCycle docs](https://docs.devcycle.com/sdk/server-side-sdks/node).
  > For \['nextjs', 'nextjs-app']:
  > For more information on DevCycle Next.js SDK usage, see the [DevCycle docs](https://docs.devcycle.com/sdk/client-side-sdks/nextjs).
  ```ts filename="app/index.tsx" framework=nextjs-app
  import { createClient } from '@vercel/edge-config';
  import { EdgeConfigSource } from '@devcycle/vercel-edge-config';
  import { setupDevCycle } from '@devcycle/nextjs-sdk/server';

  const edgeClient = createClient(process.env.EDGE_CONFIG ?? '');
  const edgeConfigSource = new EdgeConfigSource(edgeClient);

  export const { getVariableValue, getClientContext } = setupDevCycle({
    serverSDKKey: process.env.DEVCYCLE_SERVER_SDK_KEY ?? '',
    clientSDKKey: process.env.NEXT_PUBLIC_DEVCYCLE_CLIENT_SDK_KEY ?? '',
    userGetter: () => ({ user_id: 'test_user' }),
    options: {
      // pass the configSource option with the instance of EdgeConfigSource
      configSource: edgeConfigSource,
    },
  });
  ```
  ```js filename="app/index.jsx" framework=nextjs-app
  import { createClient } from '@vercel/edge-config';
  import { EdgeConfigSource } from '@devcycle/vercel-edge-config';
  import { setupDevCycle } from '@devcycle/nextjs-sdk/server';

  const edgeClient = createClient(process.env.EDGE_CONFIG ?? '');
  const edgeConfigSource = new EdgeConfigSource(edgeClient);

  export const { getVariableValue, getClientContext } = setupDevCycle({
    serverSDKKey: process.env.DEVCYCLE_SERVER_SDK_KEY ?? '',
    clientSDKKey: process.env.NEXT_PUBLIC_DEVCYCLE_CLIENT_SDK_KEY ?? '',
    userGetter: () => ({ user_id: 'test_user' }),
    options: {
      // pass the configSource option with the instance of EdgeConfigSource
      configSource: edgeConfigSource,
    },
  });
  ```
  ```ts filename="pages/index.tsx" framework=nextjs
  import type { GetServerSideProps } from 'next';
  import { createClient } from '@vercel/edge-config';
  import { EdgeConfigSource } from '@devcycle/vercel-edge-config';
  import { getServerSideDevCycle } from '@devcycle/nextjs-sdk/pages';

  const edgeClient = createClient(process.env.EDGE_CONFIG ?? '');
  const edgeConfigSource = new EdgeConfigSource(edgeClient);

  export const getServerSideProps: GetServerSideProps = async (context) => {
    const user = {
      user_id: 'server-user',
    };

    return {
      props: {
        ...(await getServerSideDevCycle({
          serverSDKKey: process.env.DEVCYCLE_SERVER_SDK_KEY ?? '',
          clientSDKKey: process.env.NEXT_PUBLIC_DEVCYCLE_CLIENT_SDK_KEY ?? '',
          user,
          context,
          options: {
            // pass the configSource option with the instance of EdgeConfigSource
            configSource: edgeConfigSource,
          },
        })),
      },
    };
  };
  ```
  ```js filename="pages/index.jsx" framework=nextjs
  import { createClient } from '@vercel/edge-config';
  import { EdgeConfigSource } from '@devcycle/vercel-edge-config';
  import { getServerSideDevCycle } from '@devcycle/nextjs-sdk/pages';

  const edgeClient = createClient(process.env.EDGE_CONFIG ?? '');
  const edgeConfigSource = new EdgeConfigSource(edgeClient);

  export const getServerSideProps = async (context) => {
    const user = {
      user_id: 'server-user',
    };

    return {
      props: {
        ...(await getServerSideDevCycle({
          serverSDKKey: process.env.DEVCYCLE_SERVER_SDK_KEY ?? '',
          clientSDKKey: process.env.NEXT_PUBLIC_DEVCYCLE_CLIENT_SDK_KEY ?? '',
          user,
          context,
          options: {
            // pass the configSource option with the instance of EdgeConfigSource
            configSource: edgeConfigSource,
          },
        })),
      },
    };
  };
  ```
  ```ts filename="index.tsx" framework=node
  import { createClient } from '@vercel/edge-config';
  import { EdgeConfigSource } from '@devcycle/vercel-edge-config';
  import { initializeDevCycle } from '@devcycle/nodejs-server-sdk';

  // the EDGE_CONFIG environment variable contains a connection string for a particular edge config. It is set automatically
  // when you connect an edge config to a project in Vercel.
  const edgeClient = createClient(process.env.EDGE_CONFIG);
  const edgeConfigSource = new EdgeConfigSource(edgeClient);

  const devcycleClient = initializeDevCycle(
    process.env.DEVCYCLE_SERVER_SDK_KEY,
    // pass the edgeConfigSource as the "configSource" option during SDK intialization to tell the SDK to use Edge Config
    // for retrieving its configuration
    { configSource: edgeConfigSource },
  );
  ```
  ```js filename="index.jsx" framework=node
  import { createClient } from '@vercel/edge-config';
  import { EdgeConfigSource } from '@devcycle/vercel-edge-config';
  import { initializeDevCycle } from '@devcycle/nodejs-server-sdk';

  // the EDGE_CONFIG environment variable contains a connection string for a particular edge config. It is set automatically
  // when you connect an edge config to a project in Vercel.
  const edgeClient = createClient(process.env.EDGE_CONFIG);
  const edgeConfigSource = new EdgeConfigSource(edgeClient);

  const devcycleClient = initializeDevCycle(
    process.env.DEVCYCLE_SERVER_SDK_KEY,
    // pass the edgeConfigSource as the "configSource" option during SDK intialization to tell the SDK to use Edge Config
    // for retrieving its configuration
    { configSource: edgeConfigSource },
  );
  ```

## Next steps

Now that you have the DevCycle Edge Config integration set up, you can explore the following topics to learn more:

- [Get started with Edge Config](/docs/edge-config/get-started)
- [Read with the SDK](/docs/edge-config/edge-config-sdk)
- [Use the dashboard](/docs/edge-config/edge-config-dashboard)
- [Edge Config limits](/docs/edge-config/edge-config-limits)

title: "Using Edge Config with Hypertune"
description: "Learn how to use Hypertune"
last\_updated: "2026-03-08T05:03:13.712Z"
source: "https://vercel.com/docs/edge-config/edge-config-integrations/hypertune-edge-config"
