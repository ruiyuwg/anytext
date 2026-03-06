## How to use tRPC with Fastify

### Install dependencies

```bash
yarn add @trpc/server fastify zod
```

> ⚠️ **Fastify version requirement**
>
> The tRPC v11 Fastify adapter requires **Fastify v5+**.
> Using Fastify v4 may cause requests to return empty responses without errors.

> [Zod](https://github.com/colinhacks/zod) isn't a required dependency, but it's used in the sample router below.

### Create the router

First of all you need a [router](/docs/server/routers) to handle your queries, mutations and subscriptions.

A sample router is given below, save it in a file named `router.ts`.

router.ts

```ts title='router.ts'
import { initTRPC } from '@trpc/server';
import { z } from 'zod';

type User = {
  id: string;
  name: string;
  bio?: string;
};

const users: Record<string, User> = {};

export const t = initTRPC.create();

export const appRouter = t.router({
  getUserById: t.procedure.input(z.string()).query((opts) => {
    return users[opts.input]; // input type is string
  }),
  createUser: t.procedure
    .input(
      z.object({
        name: z.string().min(3),
        bio: z.string().max(142).optional(),
      }),
    )
    .mutation((opts) => {
      const id = Date.now().toString();
      const user: User = { id, ...opts.input };
      users[user.id] = user;
      return user;
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
```

If your router file starts getting too big, split your router into several subrouters each implemented in its own file. Then [merge them](/docs/server/merging-routers) into a single root `appRouter`.

### Create the context

Then you need a [context](/docs/server/context) that will be created for each request.

A sample context is given below, save it in a file named `context.ts`:

context.ts

```ts title='context.ts'
import { CreateFastifyContextOptions } from '@trpc/server/adapters/fastify';

export function createContext({ req, res }: CreateFastifyContextOptions) {
  const user = { name: req.headers.username ?? 'anonymous' };

  return { req, res, user };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
```

### Create Fastify server

tRPC includes an adapter for [Fastify](https://www.fastify.io/) out of the box. This adapter lets you convert your tRPC router into a [Fastify plugin](https://www.fastify.io/docs/latest/Reference/Plugins/). In order to prevent errors during large batch requests, make sure to set the `maxParamLength` Fastify option to a suitable value, as shown.

Due to limitations in Fastify's plugin system and type inference, there might be some issues getting for example `onError` typed correctly. You can add a `satisfies FastifyTRPCPluginOptions['trpcOptions']` to help TypeScript out and get the correct types.

```ts title='server.ts'
import {
  fastifyTRPCPlugin,
  FastifyTRPCPluginOptions,
} from '@trpc/server/adapters/fastify';
import fastify from 'fastify';
import { createContext } from './context';
import { appRouter, type AppRouter } from './router';

const server = fastify({
  routerOptions: {
    maxParamLength: 5000,
  },
});

server.register(fastifyTRPCPlugin, {
  prefix: '/trpc',
  trpcOptions: {
    router: appRouter,
    createContext,
    onError({ path, error }) {
      // report to error monitoring
      console.error(`Error in tRPC handler on path '${path}':`, error);
    },
  } satisfies FastifyTRPCPluginOptions<AppRouter>['trpcOptions'],
});

(async () => {
  try {
    await server.listen({ port: 3000 });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
})();
```

Your endpoints are now available via HTTP!

| Endpoint     | HTTP URI                                                                                                       |
| ------------ | -------------------------------------------------------------------------------------------------------------- |
| `getUser`    | `GET http://localhost:3000/trpc/getUserById?input=INPUT` where `INPUT` is a URI-encoded JSON string. |
| `createUser` | `POST http://localhost:3000/trpc/createUser` with `req.body` of type `User`                          |

## Enable WebSockets

The Fastify adapter supports [WebSockets](../websockets.md) via the [@fastify/websocket](https://www.npmjs.com/package/@fastify/websocket) plugin. All you have to do in addition to the above steps is install the dependency, add some subscriptions to your router and activate the `useWSS` [option](#fastify-plugin-options) in the plugin. The minimum Fastify version required for `@fastify/websocket` is `3.11.0`.

### Install dependencies

```bash
yarn add @fastify/websocket
```

### Import and register `@fastify/websocket`

```ts
import ws from '@fastify/websocket';

server.register(ws);
```

### Add some subscriptions

Edit the `router.ts` file created in the previous steps and add the following code:

```ts title='router.ts'
import { initTRPC } from '@trpc/server';
import { observable } from '@trpc/server/observable';

const t = initTRPC.create();

export const appRouter = t.router({
  randomNumber: t.procedure.subscription(async function* () {
    while (true) {
      yield { randomNumber: Math.random() };
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }),
});
```

### Activate the `useWSS` option

```ts title='server.ts'
server.register(fastifyTRPCPlugin, {
  useWSS: true,
  // Enable heartbeat messages to keep connection open (disabled by default)
  keepAlive: {
    enabled: true,
    // server ping message interval in milliseconds
    pingMs: 30000,
    // connection is terminated if pong message is not received in this many milliseconds
    pongWaitMs: 5000,
  },
  // ...
});
```

It's alright, you can subscribe to the topic `randomNumber` and you should receive a random number every second 🚀.

## Fastify plugin options

| name        | type                     | optional | default   | description |
| ----------- | ------------------------ | -------- | --------- | ----------- |
| prefix      | `string`                 | `true`   | `"/trpc"` |             |
| useWSS      | `boolean`                | `true`   | `false`   |             |
| trpcOptions | `NodeHTTPHandlerOptions` | `false`  | `n/a`     |             |

import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';

You can create a tRPC server within any edge runtime that follow the [WinterCG](https://wintercg.org/), specifically the [Minimum Common Web Platform API](https://common-min-api.proposal.wintercg.org/) specification.

Some of these runtimes includes, but not limited to:

- Cloudflare Workers
- Deno Deploy
- Vercel Edge Runtime (& Next.js Edge Runtime)

This also makes it easy to integrate into frameworks that uses the web platform APIs to represent requests and responses, such as:

- Astro (SSR mode)
- Remix
- SolidStart

## Example apps

```
  Description
  Links




  Cloudflare Workers example
  
    
      Source
    
  


  Deno Deploy example
  
    
      Source
    
  


  Next.js Edge Runtime example
  
    
      Source
    
  


  Vercel Edge Runtime example
  
    
      Source
    
  
```

## How to use tRPC server with an edge runtime

tRPC provides a [fetch adapter](/docs/server/adapters/fetch) that uses the native [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request) and [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) APIs as input and output. The tRPC-specific code is the same across all runtimes, the only difference being how the response is returned.

tRPC includes an adapter for the native [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) out of the box. This adapter lets you convert your tRPC router into a [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request) handler that returns [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) objects.

## Required Web APIs

tRPC server uses the following Fetch APIs:

- `Request`, `Response`
- `fetch`
- `Headers`
- `URL`

If your runtime supports these APIs, you can [use tRPC server](#how-to-use-trpc-server-with-an-edge-runtime).

Fun fact: that also means you can use a tRPC server in your browser!
