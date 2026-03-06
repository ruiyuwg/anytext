## Server Usage

When a request is handled by tRPC, it takes care of parsing the request body based on the `Content-Type` header of the request.\
If you encounter errors like `Failed to parse body as XXX`, make sure that your server (e.g., Express, Next.js) isn't parsing the request body before tRPC handles it.

```ts
// Example in express

// incorrect
const app = express();
app.use(express.json()); // this try to parse body before tRPC.
app.post('/express/hello', (req,res) => {/* ... */ }); // normal express route handler
app.use('/trpc', trpcExpress.createExpressMiddleware({ /* ... */}))// tRPC fails to parse body

// correct
const app = express();
app.use('/express', express.json()); // do it only in "/express/*" path
app.post('/express/hello', (req,res) => {/* ... */ });
app.use('/trpc', trpcExpress.createExpressMiddleware({ /* ... */}))// tRPC can parse body
```

### `FormData` Input

FormData is natively supported, and for more advanced usage you could also combine this with a library like [zod-form-data](https://www.npmjs.com/package/zod-form-data) to validate inputs in a type-safe way.

```ts twoslash
// @target: esnext
import { initTRPC } from '@trpc/server';
// ---cut---

import { z } from 'zod';

export const t = initTRPC.create();
const publicProcedure = t.procedure;

export const appRouter = t.router({
  hello: publicProcedure.input(z.instanceof(FormData)).mutation((opts) => {
    const data = opts.input;
    //    ^?
    return {
      greeting: `Hello ${data.get('name')}`,
    };
  }),
});
```

For a more advanced code sample you can see our [example project here](https://github.com/juliusmarminge/trpc-interop/blob/66aa760141030ffc421cae1a3bda9b5f1ab340b6/src/server.ts#L28-L43)

### `File` and other Binary Type Inputs

tRPC converts many octet content types to a `ReadableStream` which can be consumed in a procedure. Currently these are `Blob` `Uint8Array` and `File`.

```ts twoslash
// @target: esnext
import { initTRPC } from '@trpc/server';
// ---cut---

import { octetInputParser } from '@trpc/server/http';

export const t = initTRPC.create();
const publicProcedure = t.procedure;

export const appRouter = t.router({
  upload: publicProcedure.input(octetInputParser).mutation((opts) => {
    const data = opts.input;
    //    ^?
    return {
      valid: true,
    };
  }),
});
```

A procedure is a function which is exposed to the client, it can be one of:

- a `Query` - used to fetch data, generally does not change any data
- a `Mutation` - used to send data, often for create/update/delete purposes
- a `Subscription` - you might not need this, and we have [dedicated documentation](../server/subscriptions.md)

Procedures in tRPC are very flexible primitives to create backend functions. They use an immutable builder pattern, which means you can [create reusable base procedures](#reusable-base-procedures) that share functionality among multiple procedures.

## Writing procedures

The `t` object you create during tRPC setup returns an initial `t.procedure` which all other procedures are built on:

```ts twoslash
import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const t = initTRPC.context<{ signGuestBook: () => Promise<void> }>().create();

export const router = t.router;
export const publicProcedure = t.procedure;

const appRouter = router({
  // Queries are the best place to fetch data
  hello: publicProcedure.query(() => {
    return {
      message: 'hello world',
    };
  }),

  // Mutations are the best place to do things like updating a database
  goodbye: publicProcedure.mutation(async (opts) => {
    await opts.ctx.signGuestBook();

    return {
      message: 'goodbye!',
    };
  }),
});
```
