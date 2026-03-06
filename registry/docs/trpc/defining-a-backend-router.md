## Defining a backend router

Let's walk through the steps of building a typesafe API with tRPC. To start, this API will contain three endpoints with these TypeScript signatures:

```ts
type User = { id: string; name: string; };

userList: () => User[];
userById: (id: string) => User;
userCreate: (data: { name: string }) => User;
```

### 1. Create a router instance

First, let's initialize the tRPC backend. It's good convention to do this in a separate file and export reusable helper functions instead of the entire tRPC object.

```ts twoslash title='server/trpc.ts'
import { initTRPC } from '@trpc/server';

/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.create();

/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const router = t.router;
export const publicProcedure = t.procedure;
```

Next, we'll initialize our main router instance, commonly referred to as `appRouter`, in which we'll later add procedures to. Lastly, we need to export the type of the router which we'll later use on the client side.

```ts twoslash title='server/index.ts'
// @filename: trpc.ts
// @include: trpc
// @filename: server.ts
// ---cut---
import { router } from './trpc';

const appRouter = router({
  // ...
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
```

### 2. Add a query procedure

Use `publicProcedure.query()` to add a query procedure to the router.

The following creates a query procedure called `userList` that returns a list of users from our database:

```ts twoslash title='server/index.ts'
// @filename: trpc.ts
// @include: trpc
// @filename: db.ts
// @include: db
// @filename: server.ts
// ---cut---
import { db } from './db';
import { publicProcedure, router } from './trpc';

const appRouter = router({
  userList: publicProcedure
    .query(async () => {
      // Retrieve users from a datasource, this is an imaginary database
      const users = await db.user.findMany();
      //    ^?
      return users;
    }),
});
```

### 3. Using input parser to validate procedure inputs

To implement the `userById` procedure, we need to accept input from the client. tRPC lets you define [input parsers](../server/validators.md) to validate and parse the input. You can define your own input parser or use a validation library of your choice, like [zod](https://zod.dev), [yup](https://github.com/jquense/yup), or [superstruct](https://docs.superstructjs.org/).

You define your input parser on `publicProcedure.input()`, which can then be accessed on the resolver function as shown below:

```
 The input parser should be a function that validates and casts the input of this procedure. It should return a strongly typed value when the input is valid or throw an error if the input is invalid.
```

```ts twoslash title='server/index.ts'
// @filename: trpc.ts
// @include: trpc
// @filename: db.ts
// @include: db
// @filename: server.ts
import { db } from './db';
import { publicProcedure, router } from './trpc';

// ---cut---
const appRouter = router({
  // ...
  userById: publicProcedure
    // The input is unknown at this time. A client could have sent
    // us anything so we won't assume a certain data type.
    .input((val: unknown) => {
      // If the value is of type string, return it.
      // It will now be inferred as a string.
      if (typeof val === 'string') return val;

      // Uh oh, looks like that input wasn't a string.
      // We will throw an error instead of running the procedure.
      throw new Error(`Invalid input: ${typeof val}`);
    })
    .query(async (opts) => {
      const { input } = opts;
      //      ^?
      // Retrieve the user with the given ID
      const user = await db.user.findById(input);
      //    ^?
      return user;
    }),
});
```

```
The input parser can be any ZodType, e.g. z.string() or z.object({}).
```

```ts twoslash title='server.ts'
// @filename: trpc.ts
// @include: trpc
// @filename: db.ts
// @include: db
// @filename: server.ts
import { db } from './db';
import { publicProcedure, router } from './trpc';
// ---cut---
import { z } from 'zod';

const appRouter = router({
  // ...
  userById: publicProcedure
    .input(z.string())
    .query(async (opts) => {
      const { input } = opts;
      //      ^?
      // Retrieve the user with the given ID
      const user = await db.user.findById(input);
      //    ^?
      return user;
    }),
});
```

```
The input parser can be any YupSchema, e.g. yup.string() or yup.object({}).
```

```ts twoslash title='server.ts'
// @filename: trpc.ts
// @include: trpc
// @filename: db.ts
// @include: db
// @filename: server.ts
import { db } from './db';
import { publicProcedure, router } from './trpc';
// ---cut---
import * as yup from 'yup';

const appRouter = router({
  // ...
  userById: publicProcedure
    .input(yup.string().required())
    .query(async (opts) => {
      const { input } = opts;
      //      ^?
      // Retrieve the user with the given ID
      const user = await db.user.findById(input);
      //    ^?
      return user;
    }),
});
```

```
The input parser can be any Valibot schema, e.g. v.string() or v.object({}).
```

```ts twoslash title='server.ts'
// @filename: trpc.ts
// @include: trpc
// @filename: db.ts
// @include: db
// @filename: server.ts
import { db } from './db';
import { publicProcedure, router } from './trpc';
// ---cut---
import * as v from 'valibot';

const appRouter = router({
  // ...
  userById: publicProcedure
    .input(v.string())
    .query(async (opts) => {
      const { input } = opts;
      //      ^?
      // Retrieve the user with the given ID
      const user = await db.user.findById(input);
      //    ^?
      return user;
    }),
});
```

Throughout the remaining of this documentation, we will use `zod` as our validation library.

### 4. Adding a mutation procedure

Similar to GraphQL, tRPC makes a distinction between query and mutation procedures.

The way a procedure works on the server doesn't change much between a query and a mutation. The method name is different, and the way that the client will use this procedure changes - but everything else is the same!

Let's add a `userCreate` mutation by adding it as a new property on our router object:

```ts twoslash title='server.ts'
// @filename: trpc.ts
// @include: trpc
// @filename: db.ts
// @include: db
// @filename: server.ts
import { z } from 'zod';
import { db } from './db';
import { publicProcedure, router } from './trpc';
// ---cut---

const appRouter = router({
  // ...
  userCreate: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async (opts) => {
      const { input } = opts;
      //      ^?
      // Create a new user in the database
      const user = await db.user.create(input);
      //    ^?
      return user;
    }),
});
```

## Serving the API

Now that we have defined our router, we can serve it. tRPC has many [adapters](/docs/server/adapters) so you can use any backend framework of your choice. To keep it simple, we'll use the [`standalone`](/docs/server/adapters/standalone) adapter.

```ts twoslash title='server/index.ts'
// @filename: trpc.ts
// @include: trpc
// @filename: server.ts
import { router } from './trpc';
// ---cut---
import { createHTTPServer } from '@trpc/server/adapters/standalone';

const appRouter = router({
  // ...
});

const server = createHTTPServer({
  router: appRouter,
});

server.listen(3000);
```

See the full backend code

```ts twoslash title="server/db.ts"
// @include: db
```

```ts twoslash title="server/trpc.ts"
// @include: trpc
```

```ts twoslash title='server/index.ts'
// @filename: db.ts
// @include: db
// @filename: trpc.ts
// @include: trpc
// @filename: server.ts
// ---cut---
// @include: server
```
