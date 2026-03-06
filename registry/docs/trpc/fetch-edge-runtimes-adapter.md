# Fetch / Edge Runtimes Adapter

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

## Common setup

### Install dependencies

You can skip this step if you use Deno Deploy.

import { InstallSnippet } from '@site/src/components/InstallSnippet';

> [Zod](https://github.com/colinhacks/zod) isn't a required dependency, but it's used in the sample router below.

### Create the router

First of all you need a [router](/docs/server/routers) to handle your queries, mutations and subscriptions.

A sample router is given below, save it in a file named `router.ts`.

router.ts

```ts title='router.ts'
import { initTRPC } from "@trpc/server";
import { z } from "zod";
import { Context } from "./context";

type User = {
  id: string;
  name: string;
  bio?: string;
};

const users: Record<string, User> = {};

export const t = initTRPC.context<Context>().create();

export const appRouter = t.router({
  getUserById: t.procedure.input(z.string()).query((opts) => {
    return users[opts.input]; // input type is string
  }),
  createUser: t.procedure
    // validate input with Zod
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
import { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";

export function createContext({
  req,
  resHeaders,
}: FetchCreateContextFnOptions) {
  const user = { name: req.headers.get("username") ?? "anonymous" };
  return { req, resHeaders, user };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
```

## Runtimes-specific setup

### Astro

```ts title='src/pages/trpc/[trpc].ts'
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import type { APIRoute } from "astro";
import { createContext } from "../../server/context";
import { appRouter } from "../../server/router";

export const ALL: APIRoute = (opts) => {
  return fetchRequestHandler({
    endpoint: "/trpc",
    req: opts.request,
    router: appRouter,
    createContext,
  });
};
```

### Cloudflare Worker

You need the [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/) to run Cloudflare Workers.

#### Create Cloudflare Worker

```ts title='server.ts'
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { createContext } from "./context";
import { appRouter } from "./router";

export default {
  async fetch(request: Request): Promise<Response> {
    return fetchRequestHandler({
      endpoint: "/trpc",
      req: request,
      router: appRouter,
      createContext,
    });
  },
};
```

Run `wrangler dev server.ts` and your endpoints will be available via HTTP!

| Endpoint     | HTTP URI                                                                                             |
| ------------ | ---------------------------------------------------------------------------------------------------- |
| `getUser`    | `GET http://localhost:8787/trpc/getUserById?input=INPUT` where `INPUT` is a URI-encoded JSON string. |
| `createUser` | `POST http://localhost:8787/trpc/createUser` with `req.body` of type `User`                          |

### Deno Oak

This assumes you have Deno installed and setup. Refer to their [getting started guide](https://deno.com/manual/getting_started/installation) for more information.

#### Update the imports in `router.ts`

```ts title='router.ts'
import { initTRPC } from "npm:@trpc/server";
import { z } from "npm:zod";
import { Context } from "./context.ts";
```

#### Update the imports in `context.ts`

```ts title='context.ts'
import { FetchCreateContextFnOptions } from "npm:@trpc/server/adapters/fetch";
```

#### Use `fetchRequestHandler` with Oak in `app.ts`

```ts title='app.ts'
import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { fetchRequestHandler } from "npm:@trpc/server/adapters/fetch";
import { createContext } from "./context.ts";
import { appRouter } from "./router.ts";

const app = new Application();
const router = new Router();

router.all("/trpc/(.*)", async (ctx) => {
  const res = await fetchRequestHandler({
    endpoint: "/trpc",
    req: new Request(ctx.request.url, {
      headers: ctx.request.headers,
      body:
        ctx.request.method !== "GET" && ctx.request.method !== "HEAD"
          ? ctx.request.body({ type: "stream" }).value
          : void 0,
      method: ctx.request.method,
    }),
    router: appRouter,
    createContext,
  });

  ctx.response.status = res.status;
  ctx.response.headers = res.headers;
  ctx.response.body = res.body;
});

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 3000 });
```

### Deno Deploy

This assumes you have Deno installed and setup. Refer to their [getting started guide](https://deno.com/manual/getting_started/installation) for more information.

See our example [Deno Deploy app](https://github.com/trpc/trpc/tree/main/examples/deno-deploy) for a working example.

#### Update the imports in `router.ts`

```ts title='router.ts'
import { initTRPC } from "npm:@trpc/server";
import { z } from "npm:zod";
import { Context } from "./context.ts";
```

#### Update the imports in `context.ts`

```ts title='context.ts'
import { FetchCreateContextFnOptions } from "npm:@trpc/server/adapters/fetch";
```

#### Create Deno Deploy Function

```ts title='server.ts'
import { fetchRequestHandler } from "npm:@trpc/server/adapters/fetch";
import { createContext } from "./context.ts";
import { appRouter } from "./router.ts";

function handler(request) {
  return fetchRequestHandler({
    endpoint: "/trpc",
    req: request,
    router: appRouter,
    createContext,
  });
}

Deno.serve(handler);
```

Run `deno run --allow-net=:8000 --allow-env ./server.ts` and your endpoints will be available via HTTP!

| Endpoint     | HTTP URI                                                                                             |
| ------------ | ---------------------------------------------------------------------------------------------------- |
| `getUser`    | `GET http://localhost:8000/trpc/getUserById?input=INPUT` where `INPUT` is a URI-encoded JSON string. |
| `createUser` | `POST http://localhost:8000/trpc/createUser` with `req.body` of type `User`                          |

### Next.js Edge Runtime

See a full example [here](https://github.com/trpc/trpc/tree/main/examples/next-edge-runtime).

### Remix

```ts title='app/routes/trpc.$trpc.ts'
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { createContext } from "~/server/context";
import { appRouter } from "~/server/router";

export const loader = async (args: LoaderFunctionArgs) => {
  return handleRequest(args);
};
export const action = async (args: ActionFunctionArgs) => {
  return handleRequest(args);
};
function handleRequest(args: LoaderFunctionArgs | ActionFunctionArgs) {
  return fetchRequestHandler({
    endpoint: "/trpc",
    req: args.request,
    router: appRouter,
    createContext,
  });
}
```

### SolidStart

```ts title='src/routes/api/trpc/[trpc].ts'
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import type { APIEvent } from "solid-start";
import { createContext } from "../../server/context";
import { appRouter } from "../../server/router";

const handler = (event: APIEvent) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req: event.request,
    router: appRouter,
    createContext,
  });
export { handler as GET, handler as POST };
```

### Vercel Edge Runtime

See the official [Vercel Edge Runtime documentation](https://edge-runtime.vercel.app/getting-started) for more information.

See our example [Vercel Edge Runtime app](https://github.com/trpc/trpc/tree/main/examples/vercel-edge-runtime) for a working example.

#### Install dependencies

```sh
npm install -g edge-runtime
```

```sh
yarn global add edge-runtime
```

```sh
pnpm add -g edge-runtime
```

```sh
bun add -g edge-runtime
```

#### Create Edge Runtime Function

```ts title='server.ts'
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { createContext } from "./context";
import { appRouter } from "./router";

addEventListener("fetch", (event) => {
  return event.respondWith(
    fetchRequestHandler({
      endpoint: "/trpc",
      req: event.request,
      router: appRouter,
      createContext,
    }),
  );
});
```

Run `edge-runtime --listen server.ts --port 3000` and your endpoints will be available via HTTP!

| Endpoint     | HTTP URI                                                                                             |
| ------------ | ---------------------------------------------------------------------------------------------------- |
| `getUser`    | `GET http://localhost:3000/trpc/getUserById?input=INPUT` where `INPUT` is a URI-encoded JSON string. |
| `createUser` | `POST http://localhost:3000/trpc/createUser` with `req.body` of type `User`                          |
