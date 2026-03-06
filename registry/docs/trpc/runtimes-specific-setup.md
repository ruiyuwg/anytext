## Runtimes-specific setup

### Astro

```ts title='src/pages/trpc/[trpc].ts'
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import type { APIRoute } from 'astro';
import { createContext } from '../../server/context';
import { appRouter } from '../../server/router';

export const ALL: APIRoute = (opts) => {
  return fetchRequestHandler({
    endpoint: '/trpc',
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
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { createContext } from './context';
import { appRouter } from './router';

export default {
  async fetch(request: Request): Promise<Response> {
    return fetchRequestHandler({
      endpoint: '/trpc',
      req: request,
      router: appRouter,
      createContext,
    });
  },
};
```

Run `wrangler dev server.ts` and your endpoints will be available via HTTP!

| Endpoint     | HTTP URI                                                                                                       |
| ------------ | -------------------------------------------------------------------------------------------------------------- |
| `getUser`    | `GET http://localhost:8787/trpc/getUserById?input=INPUT` where `INPUT` is a URI-encoded JSON string. |
| `createUser` | `POST http://localhost:8787/trpc/createUser` with `req.body` of type `User`                          |

### Deno Oak

This assumes you have Deno installed and setup. Refer to their [getting started guide](https://deno.com/manual/getting_started/installation) for more information.

#### Update the imports in `router.ts`

```ts title='router.ts'
import { initTRPC } from 'npm:@trpc/server';
import { z } from 'npm:zod';
import { Context } from './context.ts';
```

#### Update the imports in `context.ts`

```ts title='context.ts'
import { FetchCreateContextFnOptions } from 'npm:@trpc/server/adapters/fetch';
```

#### Use `fetchRequestHandler` with Oak in `app.ts`

```ts title='app.ts'
import { Application, Router } from 'https://deno.land/x/oak/mod.ts';
import { fetchRequestHandler } from 'npm:@trpc/server/adapters/fetch';
import { createContext } from './context.ts';
import { appRouter } from './router.ts';

const app = new Application();
const router = new Router();

router.all('/trpc/(.*)', async (ctx) => {
  const res = await fetchRequestHandler({
    endpoint: '/trpc',
    req: new Request(ctx.request.url, {
      headers: ctx.request.headers,
      body:
        ctx.request.method !== 'GET' && ctx.request.method !== 'HEAD'
          ? ctx.request.body({ type: 'stream' }).value
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
import { initTRPC } from 'npm:@trpc/server';
import { z } from 'npm:zod';
import { Context } from './context.ts';
```

#### Update the imports in `context.ts`

```ts title='context.ts'
import { FetchCreateContextFnOptions } from 'npm:@trpc/server/adapters/fetch';
```

#### Create Deno Deploy Function

```ts title='server.ts'
import { fetchRequestHandler } from 'npm:@trpc/server/adapters/fetch';
import { createContext } from './context.ts';
import { appRouter } from './router.ts';

function handler(request) {
  return fetchRequestHandler({
    endpoint: '/trpc',
    req: request,
    router: appRouter,
    createContext,
  });
}

Deno.serve(handler);
```

Run `deno run --allow-net=:8000 --allow-env ./server.ts` and your endpoints will be available via HTTP!

| Endpoint     | HTTP URI                                                                                                       |
| ------------ | -------------------------------------------------------------------------------------------------------------- |
| `getUser`    | `GET http://localhost:8000/trpc/getUserById?input=INPUT` where `INPUT` is a URI-encoded JSON string. |
| `createUser` | `POST http://localhost:8000/trpc/createUser` with `req.body` of type `User`                          |

### Next.js Edge Runtime

See a full example [here](https://github.com/trpc/trpc/tree/main/examples/next-edge-runtime).

### Remix

```ts title='app/routes/trpc.$trpc.ts'
import type { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { createContext } from '~/server/context';
import { appRouter } from '~/server/router';

export const loader = async (args: LoaderFunctionArgs) => {
  return handleRequest(args);
};
export const action = async (args: ActionFunctionArgs) => {
  return handleRequest(args);
};
function handleRequest(args: LoaderFunctionArgs | ActionFunctionArgs) {
  return fetchRequestHandler({
    endpoint: '/trpc',
    req: args.request,
    router: appRouter,
    createContext,
  });
}
```

### SolidStart

```ts title='src/routes/api/trpc/[trpc].ts'
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import type { APIEvent } from 'solid-start';
import { createContext } from '../../server/context';
import { appRouter } from '../../server/router';

const handler = (event: APIEvent) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
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
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { createContext } from './context';
import { appRouter } from './router';

addEventListener('fetch', (event) => {
  return event.respondWith(
    fetchRequestHandler({
      endpoint: '/trpc',
      req: event.request,
      router: appRouter,
      createContext,
    }),
  );
});
```

Run `edge-runtime --listen server.ts --port 3000` and your endpoints will be available via HTTP!

| Endpoint     | HTTP URI                                                                                                       |
| ------------ | -------------------------------------------------------------------------------------------------------------- |
| `getUser`    | `GET http://localhost:3000/trpc/getUserById?input=INPUT` where `INPUT` is a URI-encoded JSON string. |
| `createUser` | `POST http://localhost:3000/trpc/createUser` with `req.body` of type `User`                          |

tRPC's support for Next.js is far more expansive than just an adapter. This page covers a brief summary of how to set up the adapter, but complete documentation is [available here](../../client/nextjs/introduction.mdx)

## Example app

```
  Description
  Links




  Next.js Minimal Starter
  
    
      CodeSandbox
      Source
    
  
```

## Next.js example

Serving your tRPC router in a Next.js project is straight-forward. Just create an API handler in `pages/api/trpc/[trpc].ts` as shown below:

```ts title='pages/api/trpc/[trpc].ts'
import { createNextApiHandler } from '@trpc/server/adapters/next';
import { createContext } from '../../../server/trpc/context';
import { appRouter } from '../../../server/trpc/router/_app';

// @link https://nextjs.org/docs/api-routes/introduction
export default createNextApiHandler({
  router: appRouter,
  createContext,
});
```
