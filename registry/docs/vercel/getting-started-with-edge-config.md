# Getting started with Edge Config

Edge Config is a distributed key-value store that allows you to store and retrieve data on Vercel's global network, close to your users. It is designed for high performance and low latency, making it ideal for use cases such as feature flags, A/B testing, and dynamic configuration.

This guide will help you create an Edge Config called `hello_world_store` at the project-level, through the Vercel [dashboard](/dashboard). A token and environment variable `EDGE_CONFIG`, that stores the connection string, will be automatically created for you. You'll update the store with a key-value data pair and read the value of `"greeting"` from a local Next.js project.

## Prerequisites

- Install the Edge Config SDK:

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

- An existing project. This quickstart uses Next.js, but you can use any supported framework with Edge Config storage

- [Install](/docs/cli#installing-vercel-cli) or [update](/docs/cli#updating-vercel-cli) to the latest version of Vercel CLI

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

- ### Create an Edge Config store

  Navigate to the [Project](/docs/projects/overview) you'd like to add an Edge Config store to. Click on [**Storage**](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fstores\&title=Go+to+Storage), then click the **Create Database** button. Select **Edge Config** and click **Continue**.

  Create a new store by typing `hello_world_store` under **Edge Config** in the dialog that opens, and click **Create**.

  > **💡 Note:** The name can only contain alphanumeric letters, "\_" and "-". It cannot exceed
  > 32 characters.

- ### Review what was created
  Once created, select `hello_world_store` to see a summary of what was created for you. Notice the following:
  - If you select **Project**, you'll see that your project was connected to the Edge Config by using an environment variable. If you go to your project's **Settings > Environment Variables**, you'll see the newly created environment variable.
  - If you select **Tokens**, you'll see a [read access token](/docs/edge-config/using-edge-config#creating-a-read-access-token). This token, along with your **EDGE CONFIG ID**, is used to create a [connection string](/docs/edge-config/using-edge-config#using-a-connection-string). This connection string is saved as the value of your `EDGE_CONFIG` environment variable. This enables you to use the SDK in your project to read the store's contents.
  > **💡 Note:** If you're creating a project at the account-level, we won't automatically
  > create a token, connection string, and environment variable until a project
  > has been connected.

- ### Add a key-value pair
  Under **Items**, add the following key-value pair and click **Save Items**:
  ```json
  {
    "greeting": "hello world"
  }
  ```
  You can see more information about what can be stored in an Edge Config in the [limits](/docs/edge-config/edge-config-limits) documentation.

- ### Connect your Vercel project

  Once you've created the store, you need to set up your project to read the contents of the store. This is detailed under **Learn how to use this in code** in the dashboard, but is described in the following steps in more detail.

  On your local machine, connect your Vercel Project. If you haven't already, install the Edge Config SDK, as mentioned in [prerequisites](#prerequisites).

- ### Pull the latest environment variables
  Using Vercel CLI, pull the latest environment variables, specifically `EDGE_CONFIG`, so that it's available to your project locally:
  ```bash filename="terminal"
  vercel env pull
  ```

- ### Create a Middleware
  Create a [Middleware](/docs/routing-middleware) for your project by creating a new file called `middleware.js` at the root of the project and if using Next.js, add the following code:
  ```ts filename="middleware.ts" framework=all
  import { NextResponse } from 'next/server';
  import { get } from '@vercel/edge-config';

  export const config = { matcher: '/welcome' };

  export async function middleware() {
    const greeting = await get('greeting');
    return NextResponse.json(greeting);
  }
  ```
  ```js filename="middleware.js" framework=all
  import { NextResponse } from 'next/server';
  import { get } from '@vercel/edge-config';

  export const config = { matcher: '/welcome' };

  export async function middleware() {
    const greeting = await get('greeting');
    return NextResponse.json(greeting);
  }
  ```
  > **💡 Note:** `NextResponse.json` requires at least Next v13.1 or enabling
  > `experimental.allowMiddlewareResponseBody` in `next.config.js`.

- ### Run your application locally
  Run your application locally and visit `localhost:3000/welcome` to see your greeting. The middleware intercepts requests to `localhost:3000/welcome` and responds with a greeting, read from your Edge Config store.

Your project is now ready to read more key-value data pairs from the `hello_world_store` Edge Config using the [SDK](/docs/edge-config/edge-config-sdk) or [Vercel REST API](/docs/edge-config/vercel-api).

> **💡 Note:** Your Edge Config uses the public internet for reads when you develop locally.
> Therefore, you will see higher response times. However, when you deploy your
> application to Vercel, the reads are optimized to happen at ultra low latency
> without any network requests.

## Next steps

Now that you've created an Edge Config store and read from it, you can explore the following:

- [Creating the Edge Config at the account level](/docs/edge-config/edge-config-dashboard#at-the-account-level)
- [Creating a read access token](/docs/edge-config/using-edge-config#creating-a-read-access-token)
- [Setting up a connection string](/docs/edge-config/using-edge-config#using-a-connection-string)
- [Learn about the `@vercel/edge-config` package](https://github.com/vercel/storage/tree/main/packages/edge-config#readme)
- [Explore the SDK](/docs/edge-config/edge-config-sdk)

title: "Vercel Edge Config"
description: "An Edge Config is a global data store that enables experimentation with feature flags, A/B testing, critical redirects, and more."
last\_updated: "2026-03-23T09:40:09.252Z"
source: "https://vercel.com/docs/edge-config"
