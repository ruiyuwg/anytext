## HTTP2

The Standalone adapter also supports HTTP/2.

```ts title='server.ts'
import http2 from 'http2';
import { createHTTP2Handler } from '@trpc/server/adapters/standalone';
import { appRouter } from './_app.ts';
import { createContext } from './context.ts';

const handler = createHTTP2Handler({
  router: appRouter,
  createContext,
  // basePath: '/trpc/', // optional, defaults to '/'
});

const server = http2.createSecureServer(
  {
    key: '...',
    cert: '...',
  },
  (req, res) => {
    /**
     * Handle the request however you like,
     * just call the tRPC handler when you're ready
     */
    handler(req, res);
  },
);

server.listen(3001);
```

```ts twoslash title='context.ts'
import { CreateHTTP2ContextOptions } from '@trpc/server/adapters/standalone';

export async function createContext(opts: CreateHTTP2ContextOptions) {
  opts.req;
  //    ^?
  opts.res;
  //    ^?

  opts.info;
  //    ^?
  return {};
}

export type Context = Awaited<ReturnType<typeof createContext>>;
```

tRPC is not a server on its own, and must therefore be served using other hosts, such as a simple [Node.js HTTP Server](adapters/standalone), [Express](adapters/express), or even [Next.js](adapters/nextjs). Most tRPC features are the same no matter which backend you choose. **Adapters** act as the glue between the host system and your tRPC API.

Adapters typically follow some common conventions, allowing you to set up context creation via `createContext`, and globally handle errors via `onError`, but importantly allow you to choose an appropriate host for your application.

We support many modes of hosting an API, which you will find documented here.

- For serverful APIs, you might want our [Standalone](adapters/standalone) adapter, or use the [Express](adapters/express) or [Fastify](adapters/fastify) adapters to hook into your existing APIs
- You might want a serverless solution and choose [AWS Lambda](adapters/aws-lambda), or [Fetch](adapters/fetch) for edge runtimes
- You might have a full-stack framework and want a full integration like [Next.js](adapters/nextjs), or you could use the [Fetch](adapters/fetch) adapter with Next.js, Astro, Remix, or SolidStart

For local development or serverful infrastructure, the simplest Adapter to use is the [Standalone Adapter](adapters/standalone), which can be used to run a standard Node.js HTTP Server. We recommend this when you need to get started quickly and have no existing HTTP Server to integrate with. Swapping out later is trivial if your needs change.

The `createContext` function is called for each incoming request, so here you can add contextual information about the calling user from the request object.

## Create context from request headers

```ts title='server/context.ts'
import * as trpcNext from '@trpc/server/adapters/next';
import { decodeAndVerifyJwtToken } from './somewhere/in/your/app/utils';

export async function createContext({
  req,
  res,
}: trpcNext.CreateNextContextOptions) {
  // Create your context based on the request object
  // Will be available as `ctx` in all your resolvers

  // This is just an example of something you might want to do in your ctx fn
  async function getUserFromHeader() {
    if (req.headers.authorization) {
      const user = await decodeAndVerifyJwtToken(
        req.headers.authorization.split(' ')[1],
      );
      return user;
    }
    return null;
  }
  const user = await getUserFromHeader();

  return {
    user,
  };
}
export type Context = Awaited<ReturnType<typeof createContext>>;
```

## Option 1: Authorize using resolver

```ts title='server/routers/_app.ts'
import { initTRPC, TRPCError } from '@trpc/server';
import type { Context } from '../context';

export const t = initTRPC.context<Context>().create();

const appRouter = t.router({
  // open for anyone
  hello: t.procedure
    .input(z.string().nullish())
    .query((opts) => `hello ${opts.input ?? opts.ctx.user?.name ?? 'world'}`),
  // checked in resolver
  secret: t.procedure.query((opts) => {
    if (!opts.ctx.user) {
      throw new TRPCError({ code: 'UNAUTHORIZED' });
    }
    return {
      secret: 'sauce',
    };
  }),
});
```

## Option 2: Authorize using middleware

```ts title='server/routers/_app.ts'
import { initTRPC, TRPCError } from '@trpc/server';
import type { Context } from '../context';

export const t = initTRPC.context<Context>().create();

// you can reuse this for any procedure
export const protectedProcedure = t.procedure.use(
  async function isAuthed(opts) {
    const { ctx } = opts;
    // `ctx.user` is nullable
    if (!ctx.user) {
      //     ^?
      throw new TRPCError({ code: 'UNAUTHORIZED' });
    }

    return opts.next({
      ctx: {
        // ✅ user value is known to be non-null now
        user: ctx.user,
        // ^?
      },
    });
  },
);

t.router({
  // this is accessible for everyone
  hello: t.procedure
    .input(z.string().nullish())
    .query((opts) => `hello ${opts.input ?? opts.ctx.user?.name ?? 'world'}`),
  admin: t.router({
    // this is accessible only to admins
    secret: protectedProcedure.query((opts) => {
      return {
        secret: 'sauce',
      };
    }),
  }),
});
```

The below examples uses [Vercel's edge caching](https://vercel.com/docs/edge-network/caching) to serve data to your users as fast as possible.

Always be careful with caching - especially if you handle personal information.

 \
Since batching is enabled by default, it's recommended to set your cache headers in the `responseMeta` function and make sure that there are not any concurrent calls that may include personal data - or to omit cache headers completely if there is an auth header or cookie.

 \
You can also use a [`splitLink`](../client/links/splitLink.mdx) to split your public requests and those that should be private and uncached.

## App Caching

If you turn on SSR in your app, you might discover that your app loads slowly on, for instance, Vercel, but you can actually statically render your whole app without using SSG; [read this Twitter thread](https://twitter.com/alexdotjs/status/1386274093041950722) for more insights.

### Example code

```tsx title='utils/trpc.tsx'
import { httpBatchLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';
import type { AppRouter } from '../server/routers/_app';

export const trpc = createTRPCNext<AppRouter>({
  config(config) {
    if (typeof window !== 'undefined') {
      return {
        links: [
          httpBatchLink({
            url: '/api/trpc',
          }),
        ],
      };
    }

    const url = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/trpc`
      : 'http://localhost:3000/api/trpc';

    return {
      links: {
        http: httpBatchLink({
          url,
        }),
      },
    };
  },
  ssr: true,
  responseMeta(opts) {
    const { clientErrors } = opts;

    if (clientErrors.length) {
      // propagate http first error from API calls
      return {
        status: clientErrors[0].data?.httpStatus ?? 500,
      };
    }

    // cache request for 1 day + revalidate once every second
    const ONE_DAY_IN_SECONDS = 60 * 60 * 24;
    return {
      headers: new Headers([
        [
          'cache-control',
          `s-maxage=1, stale-while-revalidate=${ONE_DAY_IN_SECONDS}`,
        ],
      ]),
    };
  },
});
```
