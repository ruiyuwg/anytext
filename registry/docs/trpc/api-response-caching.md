## API Response caching

Since all queries are normal HTTP `GET`s, we can use normal HTTP headers to cache responses, make the responses snappy, give your database a rest, and easily scale your API to gazillions of users.

### Using `responseMeta` to cache responses

> Assuming you're deploying your API somewhere that can handle stale-while-revalidate cache headers like Vercel.

```tsx title='server.ts'
import { initTRPC } from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';

export const createContext = async ({
  req,
  res,
}: trpcNext.CreateNextContextOptions) => {
  return {
    req,
    res,
    prisma,
  };
};

type Context = Awaited<ReturnType<typeof createContext>>;

export const t = initTRPC.context<Context>().create();

const waitFor = async (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const appRouter = t.router({
  public: t.router({
    slowQueryCached: t.procedure.query(async (opts) => {
      await waitFor(5000); // wait for 5s

      return {
        lastUpdated: new Date().toJSON(),
      };
    }),
  }),
});

// Exporting type _type_ AppRouter only exposes types that can be used for inference
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export
export type AppRouter = typeof appRouter;

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
  responseMeta(opts) {
    const { ctx, paths, errors, type } = opts;
    // assuming you have all your public routes with the keyword `public` in them
    const allPublic = paths && paths.every((path) => path.includes('public'));
    // checking that no procedures errored
    const allOk = errors.length === 0;
    // checking we're doing a query request
    const isQuery = type === 'query';

    if (ctx?.res && allPublic && allOk && isQuery) {
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
    }
    return {};
  },
});
```

Your context holds data that all of your tRPC procedures will have access to, and is a great place to put things like authentication information.

Setting up the context is done in 2 steps, defining the type during initialization and then creating the runtime context for each request.

## Defining the context type

When initializing tRPC using `initTRPC`, you should pipe `.context()` to the `initTRPC` builder function before calling `.create()`. The type `TContext` can either be inferred from a function's return type or be explicitly defined.

This will make sure your context is properly typed in your procedures and middlewares.

```ts twoslash
import * as trpc from '@trpc/server';
// ---cut---
import { initTRPC } from '@trpc/server';
import type { CreateNextContextOptions } from '@trpc/server/adapters/next';
import { getSession } from 'next-auth/react';

export const createContext = async (opts: CreateNextContextOptions) => {
  const session = await getSession({ req: opts.req });

  return {
    session,
  };
};

export type Context = Awaited<ReturnType<typeof createContext>>;
const t = initTRPC.context<Context>().create();

t.procedure.use((opts) => {
  opts.ctx;
  //    ^?

  return opts.next();
});
```

## Creating the context

The `createContext()` function must be passed to the handler that is mounting your appRouter, which may be via HTTP, a [server-side call](server-side-calls) or our [server-side helpers](/docs/client/nextjs/server-side-helpers).

`createContext()` is called for each invocation of tRPC, so batched requests will share a context.

```ts
// 1. HTTP request
import { createHTTPHandler } from '@trpc/server/adapters/standalone';
import { createContext } from './context';
import { appRouter } from './router';

const handler = createHTTPHandler({
  router: appRouter,
  createContext,
});
```

```ts
// 2. Server-side call
import { createContext } from './context';
import { createCaller } from './router';

const caller = createCaller(await createContext());
```

```ts
// 3. servers-side helpers
import { createServerSideHelpers } from '@trpc/react-query/server';
import { createContext } from './context';
import { appRouter } from './router';

const helpers = createServerSideHelpers({
  router: appRouter,
  ctx: await createContext(),
});
```

## Example code

```tsx twoslash
// -------------------------------------------------
// @filename: context.ts
// -------------------------------------------------
import type { CreateNextContextOptions } from '@trpc/server/adapters/next';
import { getSession } from 'next-auth/react';

/**
 * Creates context for an incoming request
 * @see https://trpc.io/docs/v11/context
 */
export async function createContext(opts: CreateNextContextOptions) {
  const session = await getSession({ req: opts.req });

  return {
    session,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;

// -------------------------------------------------
// @filename: trpc.ts
// -------------------------------------------------
import { initTRPC, TRPCError } from '@trpc/server';
import { Context } from './context';

const t = initTRPC.context<Context>().create();


export const router = t.router;

/**
 * Unprotected procedure
 */
export const publicProcedure = t.procedure;

/**
 * Protected procedure
 */
export const protectedProcedure = t.procedure.use(function isAuthed(opts) {
  if (!opts.ctx.session?.user?.email) {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
    });
  }
  return opts.next({
    ctx: {
      // Infers the `session` as non-nullable
      session: opts.ctx.session,
    },
  });
});
```
