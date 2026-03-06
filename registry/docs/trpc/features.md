## Features

- ✅  Well-tested and production ready.
- 🧙‍♂️  Full static typesafety & autocompletion on the client, for inputs, outputs, and errors.
- 🐎  Snappy DX - No code generation, run-time bloat, or build pipeline.
- 🍃  Light - tRPC has zero deps and a tiny client-side footprint.
- 🐻  For new and old projects - Easy to start with or add to your existing brownfield project.
- 🔋  Framework agnostic - The tRPC community has built [adapters](https://trpc.io/docs/awesome-trpc#-extensions--community-add-ons) for all of the most popular frameworks.
- 🥃  Subscriptions support - Add typesafe observability to your application.
- ⚡️  Request batching - Requests made at the same time can be automatically combined into one.
- 👀  Examples - Check out an [example](example-apps.mdx) to learn with or use as a starting point.

import CodeBlock from '@theme/CodeBlock';
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';

```twoslash include db
type User = { id: string; name: string };

// Imaginary database
const users: User[] = [];
export const db = {
  user: {
    findMany: async () => users,
    findById: async (id: string) => users.find((user) => user.id === id),
    create: async (data: { name: string }) => {
      const user = { id: String(users.length + 1), ...data };
      users.push(user);
      return user;
    },
  },
};
```

```twoslash include trpc
import { initTRPC } from '@trpc/server';

const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;
```

```twoslash include server
import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { z } from "zod";
import { db } from "./db";
import { publicProcedure, router } from "./trpc";

const appRouter = router({
  userList: publicProcedure
    .query(async () => {
      const users = await db.user.findMany();
      return users;
    }),
  userById: publicProcedure
    .input(z.string())
    .query(async (opts) => {
      const { input } = opts;
      const user = await db.user.findById(input);
      return user;
    }),
  userCreate: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async (opts) => {
      const { input } = opts;
      const user = await db.user.create(input);
      return user;
    }),
});

export type AppRouter = typeof appRouter;

const server = createHTTPServer({
  router: appRouter,
});

server.listen(3000);
```

tRPC combines concepts from [REST](https://www.sitepoint.com/rest-api/) and [GraphQL](https://graphql.org/). If you are unfamiliar with either, take a look at the key [Concepts](./concepts.mdx).

## Installation

tRPC is split between several packages, so you can install only what you need. Make sure to install the packages you want in the proper sections of your codebase. For this quickstart guide we'll keep it simple and use the vanilla client only. For framework guides, checkout [usage with React](/docs/client/tanstack-react-query/setup) and [usage with Next.js](/docs/client/nextjs/setup).

- tRPC requires TypeScript >=5.7.2
- We strongly recommend you using `"strict": true` in your `tsconfig.json` as we don't officially support non-strict mode.

Start off by installing the `@trpc/server` and `@trpc/client` packages:

import { InstallSnippet } from '@site/src/components/InstallSnippet';
