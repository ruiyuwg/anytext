# Quickstart

import CodeBlock from '@theme/CodeBlock';
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';

```twoslash include trpc
import { initTRPC } from '@trpc/server';

const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;
```

```twoslash include appRouter
import { z } from "zod";
import { publicProcedure, router } from "./trpc";

type User = { id: string; name: string };

export const appRouter = router({
  userList: publicProcedure
    .query(async () => {
      const users: User[] = [{ id: '1', name: 'Katt' }];
      return users;
    }),
  userById: publicProcedure
    .input(z.string())
    .query(async (opts) => {
      const { input } = opts;
      const user: User = { id: input, name: 'Katt' };
      return user;
    }),
  userCreate: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async (opts) => {
      const { input } = opts;
      const user: User = { id: '1', ...input };
      return user;
    }),
});

export type AppRouter = typeof appRouter;
```

```twoslash include server
import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { appRouter } from "./appRouter";

const server = createHTTPServer({
  router: appRouter,
});

server.listen(3000);
```

## Installation

tRPC is split between several packages, so you can install only what you need. Make sure to install the packages you want in the proper sections of your codebase. For this quickstart guide we'll keep it simple and use the vanilla client only. For framework guides, check out [usage with React](/docs/client/tanstack-react-query/setup.mdx) and [usage with Next.js](/docs/client/nextjs/overview.mdx).

- tRPC requires TypeScript >=5.7.2
- We strongly recommend using `"strict": true` in your `tsconfig.json` as we don't officially support non-strict mode.

Start off by installing the `@trpc/server` and `@trpc/client` packages:

import { InstallSnippet } from '@site/src/components/InstallSnippet';

If you use an AI coding agent, install tRPC skills for better code generation:

```bash
npx @tanstack/intent@latest install
```

## Your first tRPC API

Let's walk through the steps of building a typesafe API with tRPC. To start, this API will contain three endpoints with these TypeScript signatures:

```ts
type User = { id: string; name: string; };

userList: () => User[];
userById: (id: string) => User;
userCreate: (data: { name: string }) => User;
```

Here's the file structure we'll be building. We recommend separating tRPC initialization, router definition, and server setup into distinct files to prevent cyclic dependencies:

```
.
├── server/
│   ├── trpc.ts        # tRPC instantiation & setup
│   ├── appRouter.ts   # Your API logic and type export
│   └── index.ts       # HTTP server
└── client/
    └── index.ts       # tRPC client
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

Next, we'll initialize our main router instance, commonly referred to as `appRouter`, to which we'll later add procedures. Lastly, we need to export the type of the router which we'll later use on the client side.

```ts twoslash title='server/appRouter.ts'
// @filename: trpc.ts
// @include: trpc
// @filename: appRouter.ts
// ---cut---
import { router } from './trpc';

export const appRouter = router({
  // ...
});

export type AppRouter = typeof appRouter;
```

### 2. Add a query procedure

Use `publicProcedure.query()` to add a query procedure to the router.

The following creates a query procedure called `userList` that returns a list of users:

```ts twoslash title='server/appRouter.ts'
// @filename: trpc.ts
// @include: trpc
// @filename: appRouter.ts

type User = { id: string; name: string };

// ---cut---
import { publicProcedure, router } from './trpc';

export const appRouter = router({
  userList: publicProcedure
    .query(async () => {
      const users: User[] = [{ id: '1', name: 'Katt' }];

      return users;
    }),
});

export type AppRouter = typeof appRouter;
```

### 3. Using input parser to validate procedure inputs

To implement the `userById` procedure, we need to accept input from the client. tRPC lets you define [input parsers](../server/validators.md) to validate and parse the input. You can define your own input parser or use a validation library of your choice, like [zod](https://zod.dev), [yup](https://github.com/jquense/yup), or [superstruct](https://docs.superstructjs.org/).

You define your input parser on `publicProcedure.input()`, which can then be accessed on the resolver function as shown below:

```
 The input parser should be a function that validates and casts the input of this procedure. It should return a strongly typed value when the input is valid or throw an error if the input is invalid.
```

Throughout the remainder of this documentation, we will use `zod` as our validation library.

```ts twoslash title='server/appRouter.ts'
// @filename: trpc.ts
// @include: trpc
// @filename: appRouter.ts

type User = { id: string; name: string };

// ---cut---
import { publicProcedure, router } from './trpc';

export const appRouter = router({
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
      const user: User = { id: input, name: 'Katt' };

      return user;
    }),
});

export type AppRouter = typeof appRouter;
```

```
The input parser can be any ZodType, e.g. z.string() or z.object({}).
```

```ts twoslash title='server/appRouter.ts'
// @filename: trpc.ts
// @include: trpc
// @filename: appRouter.ts

type User = { id: string; name: string };
// ---cut---
import { publicProcedure, router } from './trpc';
import { z } from 'zod';

export const appRouter = router({
  // ...
  userById: publicProcedure
    .input(z.string())
    .query(async (opts) => {
      const { input } = opts;
      //      ^?
      const user: User = { id: input, name: 'Katt' };

      return user;
    }),
});

export type AppRouter = typeof appRouter;
```

```
The input parser can be any YupSchema, e.g. yup.string() or yup.object({}).
```

Throughout the remainder of this documentation, we will use `zod` as our validation library.

```ts twoslash title='server/appRouter.ts'
// @filename: trpc.ts
// @include: trpc
// @filename: appRouter.ts

type User = { id: string; name: string };
// ---cut---
import { publicProcedure, router } from './trpc';
import * as yup from 'yup';

export const appRouter = router({
  // ...
  userById: publicProcedure
    .input(yup.string().required())
    .query(async (opts) => {
      const { input } = opts;
      //      ^?
      const user: User = { id: input, name: 'Katt' };
 
      return user;
    }),
});

export type AppRouter = typeof appRouter;
```

```
The input parser can be any Valibot schema, e.g. v.string() or v.object({}).
```

Throughout the remainder of this documentation, we will use `zod` as our validation library.

```ts twoslash title='server/appRouter.ts'
// @filename: trpc.ts
// @include: trpc
// @filename: appRouter.ts

type User = { id: string; name: string };
// ---cut---
import { publicProcedure, router } from './trpc';
import * as v from 'valibot';

export const appRouter = router({
  // ...
  userById: publicProcedure
    .input(v.string())
    .query(async (opts) => {
      const { input } = opts;
      //      ^?
      const user: User = { id: input, name: 'Katt' };

      return user;
    }),
});

export type AppRouter = typeof appRouter;
```

### 4. Adding a mutation procedure

Similar to GraphQL, tRPC makes a distinction between Query and Mutation procedures.

The distinction between a Query and a Mutation is primarily semantic. Queries use HTTP GET and are intended for read operations, while Mutations use HTTP POST and are intended for operations that cause side effects.

Let's add a `userCreate` mutation by adding it as a new property on our router object:

```ts twoslash title='server/appRouter.ts'
// @filename: trpc.ts
// @include: trpc
// @filename: appRouter.ts
import { z } from 'zod';

type User = { id: string; name: string };
// ---cut---
import { publicProcedure, router } from './trpc';

export const appRouter = router({
  // ...
  userCreate: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async (opts) => {
      const { input } = opts;
      //      ^?
      // Create the user in your DB
      const user: User = { id: '1', ...input };

      return user;
    }),
});

export type AppRouter = typeof appRouter;
```

## Serving the API

Now that we have defined our router, we can serve it. tRPC has first-class [adapters](../server/adapters-intro.md) for many popular web servers. To keep it simple, we'll use the [`standalone`](../server/adapters/standalone.md) Node.js adapter here.

```ts twoslash title='server/index.ts'
// @filename: trpc.ts
// @include: trpc
// @filename: appRouter.ts
// @include: appRouter
// @filename: server.ts
// ---cut---
import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { appRouter } from './appRouter';

const server = createHTTPServer({
  router: appRouter,
});

server.listen(3000);
```

See the full backend code

```ts twoslash title="server/trpc.ts"
// @include: trpc
```

```ts twoslash title='server/appRouter.ts'
// @filename: trpc.ts
// @include: trpc
// @filename: appRouter.ts
// ---cut---
// @include: appRouter
```

```ts twoslash title='server/index.ts'
// @filename: trpc.ts
// @include: trpc
// @filename: appRouter.ts
// @include: appRouter
// @filename: server.ts
// ---cut---
// @include: server
```

## Using your new backend on the client

Let's now move to the client-side code and embrace the power of end-to-end typesafety. When we import the `AppRouter` type for the client to use, we have achieved full typesafety for our system without leaking any implementation details to the client.

### 1. Setup the tRPC Client

```ts twoslash title="client/index.ts"
// @target: esnext
// @filename: trpc.ts
// @include: trpc
// @filename: appRouter.ts
// @include: appRouter
// @filename: client.ts
// ---cut---
import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from './appRouter';
//     👆 **type-only** imports are stripped at build time

// Pass AppRouter as a type parameter. 👇 This lets `trpc` know
// what procedures are available on the server and their input/output types.
const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000',
    }),
  ],
});
```

Links in tRPC are similar to links in GraphQL, they let us control the data flow to the server. In the example above, we use the [httpBatchLink](../client/links/httpBatchLink.md), which automatically batches up multiple calls into a single HTTP request. For more in-depth usage of links, see the [links documentation](../client/links/overview.md).

### 2. Type Inference & Autocomplete

You now have access to your API procedures on the `trpc` object. Try it out!

```ts twoslash title="client/index.ts"
// @target: esnext
// @filename: trpc.ts
// @include: trpc
// @filename: appRouter.ts
// @include: appRouter
// @filename: client.ts
import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from './appRouter';

const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000',
    }),
  ],
});

// ---cut---
// Inferred types
const user = await trpc.userById.query('1');
//    ^?

const createdUser = await trpc.userCreate.mutate({ name: 'Katt' });
//    ^?
```

You can also use your autocomplete to explore the API on your client

```ts twoslash title="client/index.ts"
// @target: esnext
// @filename: trpc.ts
// @include: trpc
// @filename: appRouter.ts
// @include: appRouter
// @filename: client.ts
import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from './appRouter';

const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000',
    }),
  ],
});

// ---cut---
// @errors: 2339
trpc.u;
//    ^|


```

## Next steps

| What's next? | Description |
|---|---|
| [Example Apps](example-apps.mdx) | Explore tRPC in your chosen framework |
| [TanStack React Query](../client/tanstack-react-query/setup.mdx) | Recommended React integration via `@trpc/tanstack-react-query` |
| [Next.js](../client/nextjs/overview.mdx) | Usage with Next.js |
| [Server Adapters](../server/adapters-intro.md) | Express, Fastify, and more |
| [Transformers](../server/data-transformers.md#using-superjson) | Use superjson to retain complex types like `Date` |

# Agent Skills

# Agent Skills

tRPC ships with [TanStack Intent](https://tanstack.com/intent/latest/docs/getting-started/quick-start-consumers) skills to help AI coding agents work with tRPC. When your agent works on a task that matches a skill mapping, the corresponding skill file is automatically loaded into context.

## Setup

### 1. Run install

The `install` command guides your agent through setup:

```bash
npx @tanstack/intent@latest install
```

This prints a prompt that instructs your AI agent to configure itself to access the skills shipped in tRPC and your other installed packages.

### 2. Use skills in your workflow

When your agent works on a task that matches a mapping, it automatically loads the corresponding `SKILL.md` into context to guide implementation.

### 3. Keep skills up-to-date

Skills version with library releases. When you update a library (e.g. `npm update @trpc/server`), the new version brings updated skills automatically. The skills are shipped with the library, so you always get the version that matches your installed code.

To see what skills are available:

```bash
npx @tanstack/intent@latest list
```

To check if any skills reference outdated source documentation:

```bash
npx @tanstack/intent@latest stale
```

### 4. Submit feedback (optional)

After using a skill, you can submit feedback to help maintainers improve it:

```bash
npx @tanstack/intent@latest meta feedback-collection
```

This prints a prompt that guides your agent to collect structured feedback about gaps, errors, and improvements.

## Learn more

For full documentation on TanStack Intent, see the [Quick Start for Consumers](https://tanstack.com/intent/latest/docs/getting-started/quick-start-consumers) guide.

# Videos and Community Resources

import { YouTubeEmbed } from '@site/src/components/YouTubeEmbed';

### tRPC in 100 Seconds

### Matt Pocock: Learn tRPC in 5 minutes

<YouTubeEmbed
videoId="S6rcrkbsDI0"
title="Matt Pocock: Learn tRPC in 5 minutes"
/>

### Chris Bautista: Making typesafe APIs easy with tRPC

15 minute video explaining the basics of tRPC and showing an example app.

<YouTubeEmbed
videoId="2LYM8gf184U"
title="Chris Bautista: Making typesafe APIs easy with tRPC"
/>

### How tRPC really works

20 minute video showing how data flows in tRPC and explaining some core concepts. This video uses Next.js, but the concepts apply to any implementation.

### T3: tRPC, Prisma and NextAuth Done Right

45 minute tutorial by Jack Herrington that builds an app with Next.js, tRPC, Prisma, and NextAuth.js.

<YouTubeEmbed
videoId="J1gzN1SAhyM"
title="T3: tRPC, Prisma and NextAuth Done Right"
/>

### DevTools.FM Episode 21

60 minute podcast episode with Alex, the creator of tRPC.
