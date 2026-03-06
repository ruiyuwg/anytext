## Create caller

With the `t.createCallerFactory`-function you can create a server-side caller of any router. You first call `createCallerFactory` with an argument of the router you want to call, then this returns a function where you can pass in a `Context` for the following procedure calls.

### Basic example

We create the router with a query to list posts and a mutation to add posts, and then we a call each method.

```ts twoslash
// @target: esnext
import { initTRPC } from '@trpc/server';
import { z } from 'zod';

type Context = {
  foo: string;
};

const t = initTRPC.context<Context>().create();

const publicProcedure = t.procedure;
const { createCallerFactory, router } = t;

interface Post {
  id: string;
  title: string;
}
const posts: Post[] = [
  {
    id: '1',
    title: 'Hello world',
  },
];
const appRouter = router({
  post: router({
    add: publicProcedure
      .input(
        z.object({
          title: z.string().min(2),
        }),
      )
      .mutation((opts) => {
        const post: Post = {
          ...opts.input,
          id: `${Math.random()}`,
        };
        posts.push(post);
        return post;
      }),
    list: publicProcedure.query(() => posts),
  }),
});

// 1. create a caller-function for your router
const createCaller = createCallerFactory(appRouter);

// 2. create a caller using your `Context`
const caller = createCaller({
  foo: 'bar',
});

// 3. use the caller to add and list posts
const addedPost = await caller.post.add({
  title: 'How to make server-side call in tRPC',
});

const postList = await caller.post.list();
//     ^?
```

### Example usage in an integration test

> Taken from <https://github.com/trpc/examples-next-prisma-starter/blob/main/src/server/routers/post.test.ts>

```ts
import { inferProcedureInput } from '@trpc/server';
import { createContextInner } from '../context';
import { AppRouter, createCaller } from './_app';

test('add and get post', async () => {
  const ctx = await createContextInner({});
  const caller = createCaller(ctx);

  const input: inferProcedureInput<AppRouter['post']['add']> = {
    text: 'hello test',
    title: 'hello test',
  };

  const post = await caller.post.add(input);
  const byId = await caller.post.byId({ id: post.id });

  expect(byId).toMatchObject(input);
});
```
