## Inner and outer context

In some scenarios it could make sense to split up your context into "inner" and "outer" functions.

**Inner context** is where you define context which doesn’t depend on the request, e.g. your database connection. You can use this function for integration testing or [server-side helpers](/docs/client/nextjs/server-side-helpers), where you don’t have a request object. Whatever is defined here will **always** be available in your procedures.

Putting a database client such as `prisma` on `createContextInner` is convenient and common, but large generated clients (like Prisma) can increase type-checking overhead because they become part of your context type across procedures.

If that overhead becomes noticeable, an alternative is to keep context smaller and import the client directly at call sites where needed.

**Outer context** is where you define context which depends on the request, e.g. for the user's session. Whatever is defined here is only available for procedures that are called via HTTP.

### Example for inner & outer context

```ts
import type { CreateNextContextOptions } from '@trpc/server/adapters/next';
import { getSessionFromCookie, type Session } from './auth';

/**
 * Defines your inner context shape.
 * Add fields here that the inner context brings.
 */
interface CreateInnerContextOptions extends Partial<CreateNextContextOptions> {
  session: Session | null;
}

/**
 * Inner context. Will always be available in your procedures, in contrast to the outer context.
 *
 * Also useful for:
 * - testing, so you don't have to mock Next.js' `req`/`res`
 * - tRPC's `createServerSideHelpers` where we don't have `req`/`res`
 *
 * @see https://trpc.io/docs/v11/context#inner-and-outer-context
 */
export async function createContextInner(opts?: CreateInnerContextOptions) {
  return {
    prisma,
    session: opts.session,
  };
}

/**
 * Outer context. Used in the routers and will e.g. bring `req` & `res` to the context as "not `undefined`".
 *
 * @see https://trpc.io/docs/v11/context#inner-and-outer-context
 */
export async function createContext(opts: CreateNextContextOptions) {
  const session = getSessionFromCookie(opts.req);

  const contextInner = await createContextInner({ session });

  return {
    ...contextInner,
    req: opts.req,
    res: opts.res,
  };
}

export type Context = Awaited<ReturnType<typeof createContextInner>>;

// The usage in your router is the same as the example above.
```

It is important to infer your `Context` from the **inner** context, as only what is defined there is really always available in your procedures.

If you don't want to check `req` or `res` for `undefined` in your procedures all the time, you could build a small reusable procedure for that:

```ts
export const apiProcedure = publicProcedure.use((opts) => {
  if (!opts.ctx.req || !opts.ctx.res) {
    throw new Error('You are missing `req` or `res` in your call.');
  }
  return opts.next({
    ctx: {
      // We overwrite the context with the truthy `req` & `res`, which will also overwrite the types used in your procedure.
      req: opts.ctx.req,
      res: opts.ctx.res,
    },
  });
});
```

## Limiting Batch Size

You can use the context to limit the number of requests that can be batched together.

```ts twoslash
import { TRPCError } from '@trpc/server';
import type { CreateHTTPContextOptions } from '@trpc/server/adapters/standalone';

const MAX_BATCH_SIZE = 10;

// Create a context that checks batch size
export async function createContext(opts: CreateHTTPContextOptions) {
  if (opts.info.calls.length > MAX_BATCH_SIZE) {
    throw new TRPCError({
      code: 'TOO_MANY_REQUESTS',
      message: `Batch size limit of ${MAX_BATCH_SIZE} exceeded`,
    });
  }
  return {};
}
```

This context will throw a `TOO_MANY_REQUESTS` error if a client tries to batch more than 10 requests together. You can adjust the `MAX_BATCH_SIZE` constant to match your needs.

You are able to serialize the response data & input args. The transformers need to be added both to the server and the client.

## Using [superjson](https://github.com/blitz-js/superjson)

SuperJSON allows us to transparently use, e.g., standard `Date`/`Map`/`Set`s over the wire between the server and client. That is, you can return any of these types from your API-resolver and use them in the client without having to recreate the objects from JSON.

### How to

#### 1. Install

```bash
yarn add superjson
```

#### 2. Add to your `initTRPC`

```ts title='routers/router/_app.ts'
import { initTRPC } from '@trpc/server';
import superjson from 'superjson';

export const t = initTRPC.create({
  transformer: superjson,
});
```

#### 3. Add to `httpLink()`, `wsLink()`, etc

> TypeScript will guide you to where you need to add `transformer` as soon as you've added it on the `initTRPC`-object

`createTRPCClient()`:

```ts title='src/app/_trpc/client.ts'
import { createTRPCClient } from '@trpc/client';
import type { AppRouter } from '~/server/routers/_app';
import superjson from 'superjson';

export const client = createTRPCClient<AppRouter>({
  links: [
    httpLink({
      url: 'http://localhost:3000',
      transformer: superjson,
    }),
  ],
});
```

## Using [devalue](https://github.com/Rich-Harris/devalue)

Devalue works like superjson, but focus in performance and compact payloads, but at the cost of a less human readable body.

### How to

#### 1. Install

```bash
yarn add superjson devalue
```

#### 2. Add to `utils/trpc.ts`

Here we use `parse` and `stringify` as they [mitigate XSS](https://github.com/Rich-Harris/devalue?tab=readme-ov-file#xss-mitigation).

```ts title='utils/trpc.ts'
import { parse, stringify } from 'devalue';

// [...]

export const transformer = {
  deserialize: (object: any) => parse(object),
  serialize: (object: any) => stringify(object),
};
```

#### 3. Add to your `initTRPC`

```ts title='server/routers/_app.ts'
import { initTRPC } from '@trpc/server';
import { transformer } from '../../utils/trpc';

export const t = initTRPC.create({
  transformer,
});
```

#### 4. Add to `httpLink()`, `wsLink()`, etc

> TypeScript will guide you to where you need to add `transformer` as soon as you've added it on the `initTRPC`-object

`createTRPCClient()`:

```ts title='src/app/_trpc/client.ts'
import { createTRPCClient } from '@trpc/client';
import type { AppRouter } from '~/server/routers/_app';
import { transformer } from '../../utils/trpc';

export const client = createTRPCClient<AppRouter>({
  links: [
    httpLink({
      url: 'http://localhost:3000',
      transformer,
    }),
  ],
});
```

## Different transformers for upload and download

If a transformer should only be used for one direction or different transformers should be used for upload and download (e.g., for performance reasons), you can provide individual transformers for upload and download. Make sure you use the same combined transformer everywhere.

## `DataTransformer` interface

```ts
export interface DataTransformer {
  serialize(object: any): any;
  deserialize(object: any): any;
}

interface InputDataTransformer extends DataTransformer {
  /**
   * This function runs **on the client** before sending the data to the server.
   */
  serialize(object: any): any;
  /**
   * This function runs **on the server** to transform the data before it is passed to the resolver
   */
  deserialize(object: any): any;
}

interface OutputDataTransformer extends DataTransformer {
  /**
   * This function runs **on the server** before sending the data to the client.
   */
  serialize(object: any): any;
  /**
   * This function runs **only on the client** to transform the data sent from the server.
   */
  deserialize(object: any): any;
}

export interface CombinedDataTransformer {
  /**
   * Specify how the data sent from the client to the server should be transformed.
   */
  input: InputDataTransformer;
  /**
   * Specify how the data sent from the server to the client should be transformed.
   */
  output: OutputDataTransformer;
}
```

The error formatting in your router will be inferred all the way to your client (& React components)

## Usage example highlighted

### Adding custom formatting

```ts title='server.ts'
import { initTRPC } from '@trpc/server';

export const t = initTRPC.context<Context>().create({
  errorFormatter(opts) {
    const { shape, error } = opts;
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.code === 'BAD_REQUEST' && error.cause instanceof ZodError
            ? error.cause.flatten()
            : null,
      },
    };
  },
});
```

### Usage in React

```tsx title='components/MyComponent.tsx'
export function MyComponent() {
  const mutation = trpc.addPost.useMutation();

  useEffect(() => {
    mutation.mutate({ title: 'example' });
  }, []);

  if (mutation.error?.data?.zodError) {
    // zodError will be inferred
    return (
      <pre>Error: {JSON.stringify(mutation.error.data.zodError, null, 2)}</pre>
    );
  }
  return <>[...]</>;
}
```

## All properties sent to `errorFormatter()`

> Since `v8.x` tRPC is compliant with [JSON-RPC 2.0](https://www.jsonrpc.org/specification)

```ts
{
  error: TRPCError;
  type: ProcedureType | 'unknown';
  path: string | undefined;
  input: unknown;
  ctx: undefined | TContext;
  shape: DefaultErrorShape; // the default error shape
}
```

**`DefaultErrorShape`:**

```ts
type DefaultErrorData = {
  code: TRPC_ERROR_CODE_KEY;
  httpStatus: number;
  /**
   * Path to the procedure that threw the error
   */
  path?: string;
  /**
   * Stack trace of the error (only in development)
   */
  stack?: string;
};

interface DefaultErrorShape {
  message: string;
  code: TRPC_ERROR_CODE_NUMBER;
  data: DefaultErrorData;
}
```

Whenever an error occurs in a procedure, tRPC responds to the client with an object that includes an "error" property. This property contains all the information that you need to handle the error in the client.

Here's an example error response caused by a bad request input:

```json
{
  "id": null,
  "error": {
    "message": "\"password\" must be at least 4 characters",
    "code": -32600,
    "data": {
      "code": "BAD_REQUEST",
      "httpStatus": 400,
      "stack": "...",
      "path": "user.changepassword"
    }
  }
}
```

**Note**: the returned stack trace is only available in the development environment.
