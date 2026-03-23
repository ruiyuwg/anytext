# Inferring Types

```twoslash include server
// @module: esnext
// @filename: server.ts
// ---cut---

import { initTRPC } from '@trpc/server';
import { z } from "zod";

const t = initTRPC.create();

const appRouter = t.router({
  post: t.router({
    list: t.procedure
      .query(() => {
        // imaginary db call
        return [{ id: 1, title: 'tRPC is the best!' }];
    }),
    byId: t.procedure
      .input(z.string())
      .query((opts) => {
        // imaginary db call
        return { id: 1, title: 'tRPC is the best!' };
    }),
    create: t.procedure
      .input(z.object({ title: z.string(), text: z.string(), }))
      .mutation((opts) => {
        // imaginary db call
        return { id: 1, ...opts.input };
    }),
  }),
});

export type AppRouter = typeof appRouter;
```

It is often useful to access the types of your API within your clients. For this purpose, you are able to infer the types contained in your `AppRouter`.

`@trpc/server` exports the following helper types to assist with inferring these types from the `AppRouter` exported by your `@trpc/server` router:

- `inferRouterInputs<TRouter>`
- `inferRouterOutputs<TRouter>`

## Inferring Input & Output Types

Let's assume we have this example router:

```ts twoslash title='server.ts'
// @include: server
```

Using the helpers, we can infer the types of our router. The following example shows how to infer the types of the `post.create` procedure:

```ts twoslash title="client.ts"
// @module: esnext
// @include: server
// @filename: client.ts
// ---cut---
import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import type { AppRouter } from './server';

type RouterInput = inferRouterInputs<AppRouter>;
type RouterOutput = inferRouterOutputs<AppRouter>;

type PostCreateInput = RouterInput['post']['create'];
//   ^?
type PostCreateOutput = RouterOutput['post']['create'];
//   ^?
```

## Infer `TRPCClientError` types

It's also useful to infer the error type for your `AppRouter`

```ts twoslash title='client.ts'
// @module: esnext
// @include: server

// @filename: trpc.ts
import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "./server";

export const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000/api/trpc",
    }),
  ],
});

// @filename: client.ts
// ---cut---
import { TRPCClientError } from '@trpc/client';
import type { AppRouter } from './server';
import { trpc } from './trpc';

export function isTRPCClientError(
  cause: unknown,
): cause is TRPCClientError<AppRouter> {
  return cause instanceof TRPCClientError;
}

async function main() {
  try {
    await trpc.post.byId.query('1');
  } catch (cause) {
    if (isTRPCClientError(cause)) {
      // `cause` is now typed as your router's `TRPCClientError`
      console.log('data', cause.data);
      //                        ^?
    } else {
      // [...]
    }
  }
}

main();
```

# tRPC Client

# tRPC Client

The "Vanilla" tRPC client can be used to call your API procedures as if they are local functions, enabling a seamless development experience.

```ts twoslash
// @target: esnext
// @filename: server.ts
import { initTRPC } from '@trpc/server';
import { z } from 'zod';
const t = initTRPC.create();
const appRouter = t.router({
  getUser: t.procedure.input(z.string()).query(({ input }) => ({ id: input, name: 'Bilbo' })),
});
export type AppRouter = typeof appRouter;

// @filename: client.ts
// ---cut---
import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from './server';

const client = createTRPCClient<AppRouter>({
  links: [httpBatchLink({ url: 'http://localhost:3000' })],
});

const bilbo = await client.getUser.query('id_bilbo');
// => { id: 'id_bilbo', name: 'Bilbo' };
```

### When to use the Vanilla Client?

You are likely to use this client in two scenarios:

- With a frontend framework for which we don't have an official integration
- With a separate backend service written in TypeScript.

### When **NOT** to use the Vanilla Client?

- While you *can* use the client to call procedures from a React component, you should usually use our [TanStack React Query Integration](../tanstack-react-query/setup.mdx). It offers many additional features such as the ability to manage loading and error state, caching, and invalidation.
- We recommend you do not use this client when calling procedures of the same API instance, this is because the invocation has to pass through the network layer. For complete recommendations on invoking a procedure in the current API, you can [read more here](/docs/server/server-side-calls).
