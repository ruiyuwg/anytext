## Common setup

### Install dependencies

You can skip this step if you use Deno Deploy.

import { InstallSnippet } from '@site/src/components/InstallSnippet';

> [Zod](https://github.com/colinhacks/zod) isn't a required dependency, but it's used in the sample router below.

### Create the router

First of all you need a [router](/docs/server/routers) to handle your queries, mutations and subscriptions.

A sample router is given below, save it in a file named `router.ts`.

router.ts

```ts title='router.ts'
import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import { Context } from './context';

type User = {
  id: string;
  name: string;
  bio?: string;
};

const users: Record<string, User> = {};

export const t = initTRPC.context<Context>().create();

export const appRouter = t.router({
  getUserById: t.procedure.input(z.string()).query((opts) => {
    return users[opts.input]; // input type is string
  }),
  createUser: t.procedure
    // validate input with Zod
    .input(
      z.object({
        name: z.string().min(3),
        bio: z.string().max(142).optional(),
      }),
    )
    .mutation((opts) => {
      const id = Date.now().toString();
      const user: User = { id, ...opts.input };
      users[user.id] = user;
      return user;
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
```

If your router file starts getting too big, split your router into several subrouters each implemented in its own file. Then [merge them](/docs/server/merging-routers) into a single root `appRouter`.

### Create the context

Then you need a [context](/docs/server/context) that will be created for each request.

A sample context is given below, save it in a file named `context.ts`:

context.ts

```ts title='context.ts'
import { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';

export function createContext({
  req,
  resHeaders,
}: FetchCreateContextFnOptions) {
  const user = { name: req.headers.get('username') ?? 'anonymous' };
  return { req, resHeaders, user };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
```
