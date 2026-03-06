## Error codes

tRPC defines a list of error codes that each represent a different type of error and response with a different HTTP code.

| Code                   | Description                                                                                                                                                                                                                                                                                      | HTTP code |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- |
| BAD\_REQUEST            | The server cannot or will not process the request due to something that is perceived to be a client error.                                                                                                                                                                                       | 400       |
| UNAUTHORIZED           | The client request has not been completed because it lacks valid authentication credentials for the requested resource.                                                                                                                                                                          | 401       |
| PAYMENT\_REQUIRED       | The client request requires payment to access the requested resource.                                                                                                                                                                                                                            | 402       |
| FORBIDDEN              | The server was unauthorized to access a required data source, such as a REST API.                                                                                                                                                                                                                | 403       |
| NOT\_FOUND              | The server cannot find the requested resource.                                                                                                                                                                                                                                                   | 404       |
| METHOD\_NOT\_SUPPORTED   | The server knows the request method, but the target resource doesn't support this method.                                                                                                                                                                                                        | 405       |
| TIMEOUT                | The server would like to shut down this unused connection.                                                                                                                                                                                                                                       | 408       |
| CONFLICT               | The server request resource conflict with the current state of the target resource.                                                                                                                                                                                                              | 409       |
| PRECONDITION\_FAILED    | Access to the target resource has been denied.                                                                                                                                                                                                                                                   | 412       |
| PAYLOAD\_TOO\_LARGE      | Request entity is larger than limits defined by server.                                                                                                                                                                                                                                          | 413       |
| UNSUPPORTED\_MEDIA\_TYPE | The server refuses to accept the request because the payload format is in an unsupported format.                                                                                                                                                                                                 | 415       |
| UNPROCESSABLE\_CONTENT  | The server understands the request method, and the request entity is correct, but the server was unable to process it.                                                                                                                                                                           | 422       |
| PRECONDITION\_REQUIRED  | [The server cannot process the request because a required precondition header (such as `If-Match`) is missing. When a precondition header does not match the server-side state, the response should be `412 Precondition Failed`.](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/428) | 428       |
| TOO\_MANY\_REQUESTS      | The rate limit has been exceeded or too many requests are being sent to the server.                                                                                                                                                                                                              | 429       |
| CLIENT\_CLOSED\_REQUEST  | Access to the resource has been denied.                                                                                                                                                                                                                                                          | 499       |
| INTERNAL\_SERVER\_ERROR  | An unspecified error occurred.                                                                                                                                                                                                                                                                   | 500       |
| NOT\_IMPLEMENTED        | The server does not support the functionality required to fulfill the request.                                                                                                                                                                                                                   | 501       |
| BAD\_GATEWAY            | The server received an invalid response from the upstream server.                                                                                                                                                                                                                                | 502       |
| SERVICE\_UNAVAILABLE    | The server is not ready to handle the request.                                                                                                                                                                                                                                                   | 503       |
| GATEWAY\_TIMEOUT        | The server did not get a response in time from the upstream server that it needed in order to complete the request.                                                                                                                                                                              | 504       |

tRPC exposes a helper function, `getHTTPStatusCodeFromError`, to help you extract the HTTP code from the error:

```ts twoslash
import { TRPCError } from '@trpc/server';
// ---cut---
import { getHTTPStatusCodeFromError } from '@trpc/server/http';

// Example error you might get if your input validation fails
const error: TRPCError = {
  name: 'TRPCError',
  code: 'BAD_REQUEST',
  message: '"password" must be at least 4 characters',
};

if (error instanceof TRPCError) {
  const httpCode = getHTTPStatusCodeFromError(error);
  console.log(httpCode); // 400
}
```

There's a full example of how this could be used in a Next.js API endpoint in the [Server Side Calls docs](server-side-calls).

## Throwing errors

tRPC provides an error subclass, `TRPCError`, which you can use to represent an error that occurred inside a procedure.

For example, throwing this error:

```ts title='server.ts'
import { initTRPC, TRPCError } from '@trpc/server';

const t = initTRPC.create();

const appRouter = t.router({
  hello: t.procedure.query(() => {
    throw new TRPCError({
      code: 'INTERNAL_SERVER_ERROR',
      message: 'An unexpected error occurred, please try again later.',
      // optional: pass the original error to retain stack trace
      cause: theError,
    });
  }),
});

// [...]
```

Results to the following response:

```json
{
  "id": null,
  "error": {
    "message": "An unexpected error occurred, please try again later.",
    "code": -32603,
    "data": {
      "code": "INTERNAL_SERVER_ERROR",
      "httpStatus": 500,
      "stack": "...",
      "path": "hello"
    }
  }
}
```

## Handling errors

All errors that occur in a procedure go through the `onError` method before being sent to the client. Here you can handle errors (To change errors see [error formatting](error-formatting)).

```ts title='pages/api/trpc/[trpc].ts'
export default trpcNext.createNextApiHandler({
  // ...
  onError(opts) {
    const { error, type, path, input, ctx, req } = opts;
    console.error('Error:', error);
    if (error.code === 'INTERNAL_SERVER_ERROR') {
      // send to bug reporting
    }
  },
});
```

The `onError` parameter is an object that contains all information about the error and the context it occurs in:

```ts
{
  error: TRPCError; // the original error
  type: 'query' | 'mutation' | 'subscription' | 'unknown';
  path: string | undefined; // path of the procedure that was triggered
  input: unknown;
  ctx: Context | undefined;
  req: BaseRequest; // request object
}
```

Writing all API-code in your code in the same file is not a great idea. It's easy to merge routers with other routers.

### Defining an inline sub-router

When you define an inline sub-router, you can represent your router as a plain object.

In the below example, `nested1` and `nested2` are equal:

```ts twoslash title="server/_app.ts"
// @filename: trpc.ts
import { initTRPC } from '@trpc/server';
const t = initTRPC.create();


export const middleware = t.middleware;
export const publicProcedure = t.procedure;
export const router = t.router;

// @filename: _app.ts
// ---cut---
import * as trpc from '@trpc/server';
import { publicProcedure, router } from './trpc';

const appRouter = router({
  // Shorthand plain object for creating a sub-router
  nested1: {
    proc: publicProcedure.query(() => '...'),
  },
  // Equivalent of:
  nested2: router({
    proc : publicProcedure.query(() => '...'),
  }),
});
```

## Merging with child routers

```ts twoslash title='server.ts'
// @filename: trpc.ts
import { initTRPC } from '@trpc/server';
const t = initTRPC.create();



export const router = t.router;
export const publicProcedure = t.procedure;

// @filename: routers/_app.ts
import { router } from '../trpc';
import { z } from 'zod';

import { userRouter } from './user';
import { postRouter } from './post';

const appRouter = router({
  user: userRouter, // put procedures under "user" namespace
  post: postRouter, // put procedures under "post" namespace
});

// You can then access the merged route with
// http://localhost:3000/trpc/<NAMESPACE>.<PROCEDURE>

export type AppRouter = typeof appRouter;


// @filename: routers/post.ts
import { router, publicProcedure } from '../trpc';
import { z } from 'zod';
export const postRouter = router({
  create: publicProcedure
    .input(
      z.object({
        title: z.string(),
      }),
    )
    .mutation((opts) => {
      const { input } = opts;
      //        ^?
      // [...]
    }),
  list: publicProcedure.query(() => {
    // ...
    return [];
  }),
});

// @filename: routers/user.ts
import { router, publicProcedure } from '../trpc';
import { z } from 'zod';
export const userRouter = router({
  list: publicProcedure.query(() => {
    // [..]
    return [];
  }),
});

```

## Merging with `t.mergeRouters`

If you prefer having all procedures flat in one single namespace, you can instead use `t.mergeRouters`

```ts twoslash title='server.ts'
// @filename: trpc.ts
import { initTRPC } from '@trpc/server';
const t = initTRPC.create();


export const router = t.router;
export const publicProcedure = t.procedure;
export const mergeRouters = t.mergeRouters;

// @filename: routers/_app.ts
import { router, publicProcedure, mergeRouters } from '../trpc';
import { z } from 'zod';

import { userRouter } from './user';
import { postRouter } from './post';

const appRouter = mergeRouters(userRouter, postRouter)

export type AppRouter = typeof appRouter;

// @filename: routers/post.ts
import { router, publicProcedure } from '../trpc';
import { z } from 'zod';
export const postRouter = router({
  postCreate: publicProcedure
    .input(
      z.object({
        title: z.string(),
      }),
    )
    .mutation((opts) => {
      const { input } = opts;
      //        ^?
      // [...]
    }),
  postList: publicProcedure.query(() => {
    // ...
    return [];
  }),
});


// @filename: routers/user.ts
import { router, publicProcedure } from '../trpc';
import { z } from 'zod';
export const userRouter = router({
  userList: publicProcedure.query(() => {
    // [..]
    return [];
  }),
});

```

## Dynamically load routers

You can use the `lazy` function to dynamically load your routers. This can be useful to reduce cold starts of your application.

There's no difference in how you use the router after it's been lazy loaded vs. how you use a normal router.

**Example code of lazy loading a router:**

```ts twoslash
// @target: esnext
// @filename: trpc.ts
import { initTRPC } from '@trpc/server';
const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;

// ---cut---
// @filename: routers/_app.ts
import { lazy } from '@trpc/server';
import { router } from '../trpc';

export const appRouter = router({
  // Option 1: Short-hand lazy load the greeting router if you have exactly 1 export and it is the router
  greeting: lazy(() => import('./greeting.js')),
  // Option 2: Alternative way to lazy load if you have more than 1 export
  user: lazy(() => import('./user.js').then((m) => m.userRouter)),
});
export type AppRouter = typeof appRouter;

// ----------------------------------------------------
// @filename: routers/greeting.ts
import { router, publicProcedure } from '../trpc';
export const greetingRouter = router({
  hello: publicProcedure.query(() => 'world'),
});

// ----------------------------------------------------
// @filename: routers/user.ts
import { router, publicProcedure } from '../trpc';

export const userRouter = router({
  list: publicProcedure.query(() => ['John', 'Jane', 'Jim']),
});
```

Procedure metadata allows you to add an optional procedure specific `meta` property which will be available in all [middleware](middlewares) function parameters.

Use metadata together with [`trpc-openapi`](https://github.com/jlalmes/trpc-openapi) if you want to expose REST-compatible endpoints for your application.

## Create router with typed metadata

```tsx
import { initTRPC } from '@trpc/server';

// [...]

interface Meta {
  authRequired: boolean;
}

export const t = initTRPC.context<Context>().meta<Meta>().create();

export const appRouter = t.router({
  // [...]
});
```

## Example with per route authentication settings

```tsx title='server.ts'
import { initTRPC } from '@trpc/server';

// [...]

interface Meta {
  authRequired: boolean;
}

export const t = initTRPC.context<Context>().meta<Meta>().create();

export const authedProcedure = t.procedure.use(async (opts) => {
  const { meta, next, ctx } = opts;
  // only check authorization if enabled
  if (meta?.authRequired && !ctx.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }
  return next();
});

export const appRouter = t.router({
  hello: authedProcedure.meta({ authRequired: false }).query(() => {
    return {
      greeting: 'hello world',
    };
  }),
  protectedHello: authedProcedure.meta({ authRequired: true }).query(() => {
    return {
      greeting: 'hello-world',
    };
  }),
});
```

## Default meta, chaining, and shallow merging

You can set default values for your meta type, and if you chain meta on top of a base procedure it will be shallow merged.

```tsx
import { initTRPC } from '@trpc/server';

interface Meta {
  authRequired: boolean;
  role?: 'user' | 'admin'
}

export const t = initTRPC
  .context<Context>()
  .meta<Meta>()
  .create({
    // Set a default value
    defaultMeta: { authRequired: false }
  });

const publicProcedure = t.procedure
// ^ Default Meta: { authRequired: false }

const authProcedure = publicProcedure
  .use(authMiddleware)
  .meta({
    authRequired: true;
    role: 'user'
  });
// ^ Meta: { authRequired: true, role: 'user' }

const adminProcedure = authProcedure
  .meta({
    role: 'admin'
  });
// ^ Meta: { authRequired: true, role: 'admin' }
```

You are able to add middleware(s) to a procedure with the `t.procedure.use()` method. The middleware(s) will wrap the invocation of the procedure and must pass through its return value.

## Authorization

In the example below, any call to a `adminProcedure` will ensure that the user is an "admin" before executing.

```twoslash include admin
import { TRPCError, initTRPC } from '@trpc/server';

interface Context {
  user?: {
    id: string;
    isAdmin: boolean;
    // [..]
  };
}

const t = initTRPC.context<Context>().create();
export const publicProcedure = t.procedure;
export const router = t.router;

export const adminProcedure = publicProcedure.use(async (opts) => {
  const { ctx } = opts;
  if (!ctx.user?.isAdmin) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }
  return opts.next({
    ctx: {
      user: ctx.user,
    },
  });
});
```

```ts twoslash
// @include: admin
```

```ts twoslash
// @filename: trpc.ts
// @include: admin
// @filename: _app.ts
// ---cut---
import { adminProcedure, publicProcedure, router } from './trpc';

const adminRouter = router({
  secretPlace: adminProcedure.query(() => 'a key'),
});

export const appRouter = router({
  foo: publicProcedure.query(() => 'bar'),
  admin: adminRouter,
});
```

See [Error Handling](error-handling.md) to learn more about the `TRPCError` thrown in the above example.

## Logging

In the example below timings for queries are logged automatically.

```twoslash include trpclogger
import { initTRPC } from '@trpc/server';
const t = initTRPC.create();


export const publicProcedure = t.procedure;
export const router = t.router;

declare function logMock(...args: any[]): void;
// ---cut---

export const loggedProcedure = publicProcedure.use(async (opts) => {
  const start = Date.now();

  const result = await opts.next();

  const durationMs = Date.now() - start;
  const meta = { path: opts.path, type: opts.type, durationMs };

  result.ok
    ? console.log('OK request timing:', meta)
    : console.error('Non-OK request timing', meta);

  return result;
});
```

```ts twoslash
// @include: trpclogger
```

```ts twoslash
// @filename: trpc.ts
// @include: trpclogger
// @filename: _app.ts
// ---cut---
import { loggedProcedure, router } from './trpc';

export const appRouter = router({
  foo: loggedProcedure.query(() => 'bar'),
  abc: loggedProcedure.query(() => 'def'),
});
```

## Context Extension

"Context Extension" enables middlewares to dynamically add and override keys on a base procedure's context in a typesafe manner.

Below we have an example of a middleware that changes properties of a context, the changes are then available to all chained consumers, such as other middlewares and procedures:

```ts twoslash
// @target: esnext
import { initTRPC, TRPCError } from '@trpc/server';

const t = initTRPC.context<Context>().create();
const publicProcedure = t.procedure;
const router = t.router;

// ---cut---

type Context = {
  // user is nullable
  user?: {
    id: string;
  };
};

const protectedProcedure = publicProcedure.use(async function isAuthed(opts) {
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
});

protectedProcedure.query((opts) => {
  const { ctx } = opts;
  return ctx.user;
  //     ^?
});
```
