## `router.createCaller()`

With the `router.createCaller({})` function (first argument is `Context`) we retrieve an instance of `RouterCaller`.

### Input query example

We create the router with an input query, and then we call the asynchronous `greeting` procedure to get the result.

```ts twoslash
// @target: esnext
import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const t = initTRPC.create();

const router = t.router({
  // Create procedure at path 'greeting'
  greeting: t.procedure
    .input(z.object({ name: z.string() }))
    .query((opts) => `Hello ${opts.input.name}`),
});

const caller = router.createCaller({});
const result = await caller.greeting({ name: 'tRPC' });
//     ^?
```

### Mutation example

We create the router with a mutation, and then we call the asynchronous `post` procedure to get the result.

```ts twoslash
// @target: esnext
import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const posts = ['One', 'Two', 'Three'];

const t = initTRPC.create();
const router = t.router({
  post: t.router({
    add: t.procedure.input(z.string()).mutation((opts) => {
      posts.push(opts.input);
      return posts;
    }),
  }),
});

const caller = router.createCaller({});
const result = await caller.post.add('Four');
//     ^?
```

### Context with middleware example

We create a middleware to check the context before executing the `secret` procedure. Below are two examples: the former fails because the context doesn't fit the middleware logic, and the latter works correctly.

Middlewares are performed before any procedure(s) are called.

```ts twoslash
// @target: esnext
import { initTRPC, TRPCError } from '@trpc/server';

type Context = {
  user?: {
    id: string;
  };
};
const t = initTRPC.context<Context>().create();

const protectedProcedure = t.procedure.use((opts) => {
  const { ctx } = opts;
  if (!ctx.user) {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
      message: 'You are not authorized',
    });
  }

  return opts.next({
    ctx: {
      // Infers that the `user` is non-nullable
      user: ctx.user,
    },
  });
});

const router = t.router({
  secret: protectedProcedure.query((opts) => opts.ctx.user),
});

{
  // ❌ this will return an error because there isn't the right context param
  const caller = router.createCaller({});

  const result = await caller.secret();
}

{
  // ✅ this will work because user property is present inside context param
  const authorizedCaller = router.createCaller({
    user: {
      id: 'KATT',
    },
  });
  const result = await authorizedCaller.secret();
  //     ^?
}
```

### Example for a Next.js API endpoint

This example shows how to use the caller in a Next.js API endpoint. tRPC creates API endpoints for you already, so this file is only meant to show
how to call a procedure from another, custom endpoint.

```ts twoslash
// @noErrors
// ---cut---
import { TRPCError } from '@trpc/server';
import { getHTTPStatusCodeFromError } from '@trpc/server/http';
import { appRouter } from '~/server/routers/_app';
import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  data?: {
    postTitle: string;
  };
  error?: {
    message: string;
  };
};

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) => {
  /** We want to simulate an error, so we pick a post ID that does not exist in the database. */
  const postId = `this-id-does-not-exist-${Math.random()}`;

  const caller = appRouter.createCaller({});

  try {
    // the server-side call
    const postResult = await caller.post.byId({ id: postId });

    res.status(200).json({ data: { postTitle: postResult.title } });
  } catch (cause) {
    // If this a tRPC error, we can extract additional information.
    if (cause instanceof TRPCError) {
      // We can get the specific HTTP status code coming from tRPC (e.g. 404 for `NOT_FOUND`).
      const httpStatusCode = getHTTPStatusCodeFromError(cause);

      res.status(httpStatusCode).json({ error: { message: cause.message } });
      return;
    }

    // This is not a tRPC error, so we don't have specific information.
    res.status(500).json({
      error: { message: `Error while accessing post with ID ${postId}` },
    });
  }
};
```

### Error handling

The `createFactoryCaller` and the `createCaller` function can take an error handler through the `onError` option. This can be used to throw errors that are not wrapped in a TRPCError, or respond to errors in some other way. Any handler passed to createCallerFactory will be called before the handler passed to createCaller.
The handler is called with the same arguments as an error formatter would be, except for the shape field:

```ts
{
  ctx: unknown; // The request context
  error: TRPCError; // The TRPCError that was thrown
  path: string | undefined; // The path of the procedure that threw the error
  input: unknown; // The input that was passed to the procedure
  type: 'query' | 'mutation' | 'subscription' | 'unknown'; // The type of the procedure that threw the error
}
```

```ts twoslash
// @target: esnext
import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const t = initTRPC
  .context<{
    foo?: 'bar';
  }>()
  .create();

const router = t.router({
  greeting: t.procedure.input(z.object({ name: z.string() })).query((opts) => {
    if (opts.input.name === 'invalid') {
      throw new Error('Invalid name');
    }

    return `Hello ${opts.input.name}`;
  }),
});

const caller = router.createCaller(
  {
    /* context */
  },
  {
    onError: (opts) => {
      console.error('An error occurred:', opts.error);
    },
  },
);

// The following will log "An error occurred: Error: Invalid name", and then throw a plain error
//  with the message "This is a custom error"
await caller.greeting({ name: 'invalid' });
```

## Introduction

Subscriptions are a type of real-time event stream between the client and server. Use subscriptions when you need to push real-time updates to the client.

With tRPC's subscriptions, the client establishes and maintains a persistent connection to the server plus automatically attempts to reconnect and recover gracefully if disconnected with the help of [`tracked()`](#tracked) events.

## WebSockets or Server-sent Events?

You can either use WebSockets or [Server-sent Events](https://en.wikipedia.org/wiki/Server-sent_events) (SSE) to setup real-time subscriptions in tRPC.

- For WebSockets, see [the WebSockets page](./websockets.md)
- For SSE, see the [httpSubscriptionLink](../client/links/httpSubscriptionLink.md)

If you are unsure which one to use, we recommend using SSE for subscriptions as it's easier to setup and don't require setting up a WebSocket server.

## Reference projects

| Type       | Example Type                            | Link                                                                                                                       |
| ---------- | --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| WebSockets | Bare-minimum Node.js WebSockets example | [/examples/standalone-server](https://github.com/trpc/trpc/tree/main/examples/standalone-server)                           |
| SSE        | Full-stack SSE implementation           | [github.com/trpc/examples-next-sse-chat](https://github.com/trpc/examples-next-sse-chat)                                   |
| WebSockets | Full-stack WebSockets implementation    | [github.com/trpc/examples-next-prisma-websockets-starter](https://github.com/trpc/examples-next-prisma-starter-websockets) |

## Basic example

For a full example, see [our full-stack SSE example](https://github.com/trpc/examples-next-sse-chat).

```ts title="server.ts"
import { initTRPC } from '@trpc/server';

const t = initTRPC.create();

const ee = new EventEmitter();

export const appRouter = router({
  onPostAdd: publicProcedure.subscription(async function* (opts) {
    // listen for new events
    for await (const [data] of on(ee, 'add', {
      // Passing the AbortSignal from the request automatically cancels the event emitter when the request is aborted
      signal: opts.signal,
    })) {
      const post = data as Post;
      yield post;
    }
  }),
});
```
