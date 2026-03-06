## Query Invalidation

You invalidate queries via the `invalidate` helper. `invalidate` is actually a special helper given that, unlike the other helpers, it's available at every level of the router map. This means you can either run `invalidate` on a single query, a whole router, or every router if you want. We get more in detail in the sections below.

### Invalidating a single query

You can invalidate a query relating to a single procedure and even filter based
on the input passed to it to prevent unnecessary calls to the back end.

#### Example code

```tsx
import { trpc } from '../utils/trpc';

function MyComponent() {
  const utils = trpc.useUtils();

  const mutation = trpc.post.edit.useMutation({
    onSuccess(input) {
      utils.post.all.invalidate();
      utils.post.byId.invalidate({ id: input.id }); // Will not invalidate queries for other id's 👍
    },
  });

  // [...]
}
```

### Invalidating across whole routers

It is also possible to invalidate queries across an entire router rather then
just one query.

#### Example code

Backend code

```tsx title='server/routers/_app.ts'
import { initTRPC } from '@trpc/server';
import { z } from 'zod';

export const t = initTRPC.create();

export const appRouter = t.router({
  // sub Post router
  post: t.router({
    all: t.procedure.query(() => {
      return {
        posts: [
          { id: 1, title: 'everlong' },
          { id: 2, title: 'After Dark' },
        ],
      };
    }),
    byId: t.procedure
      .input(
        z.object({
          id: z.string(),
        }),
      )
      .query(({ input }) => {
        return {
          post: { id: input?.id, title: 'Look me up!' },
        };
      }),
    edit: t.procedure
      .input(z.object({ id: z.number(), title: z.string() }))
      .mutation(({ input }) => {
        return { post: { id: input.id, title: input.title } };
      }),
  }),
  // separate user router
  user: t.router({
    all: t.procedure.query(() => {
      return { users: [{ name: 'Dave Grohl' }, { name: 'Haruki Murakami' }] };
    }),
  }),
});
```

```tsx
import { trpc } from '../utils/trpc';

function MyComponent() {
  const utils = trpc.useUtils();

  const invalidateAllQueriesAcrossAllRouters = () => {
    // 1️⃣
    // All queries on all routers will be invalidated 🔥
    utils.invalidate();
  };

  const invalidateAllPostQueries = () => {
    // 2️⃣
    // All post queries will be invalidated 📭
    utils.post.invalidate();
  };

  const invalidatePostById = () => {
    // 3️⃣
    // All queries in the post router with input {id:1} invalidated 📭
    utils.post.byId.invalidate({ id: 1 });
  };

  // Example queries
  trpc.user.all.useQuery(); // Would only be validated by 1️⃣ only.
  trpc.post.all.useQuery(); // Would be invalidated by 1️⃣ & 2️⃣
  trpc.post.byId.useQuery({ id: 1 }); // Would be invalidated by 1️⃣, 2️⃣ and 3️⃣
  trpc.post.byId.useQuery({ id: 2 }); // would be invalidated by 1️⃣ and 2️⃣ but NOT 3️⃣!

  // [...]
}
```

### Invalidate full cache on every mutation

Keeping track of exactly what queries a mutation should invalidate is hard, therefore, it can be a pragmatic solution to invalidate the *full cache* as a side-effect on any mutation. Since we have request batching, this invalidation will simply refetch all queries on the page you're looking at in one single request.

We have added a feature to help with this:

```ts
export const trpc = createTRPCReact<AppRouter, SSRContext>({
  overrides: {
    useMutation: {
      /**
       * This function is called whenever a `.useMutation` succeeds
       **/
      async onSuccess(opts) {
        /**
         * @note that order here matters:
         * The order here allows route changes in `onSuccess` without
         * having a flash of content change whilst redirecting.
         **/

        // Calls the `onSuccess` defined in the `useQuery()`-options:
        await opts.originalFn();

        // Invalidate all queries in the react-query cache:
        await opts.queryClient.invalidateQueries();
      },
    },
  },
});
```

## Additional Options

Aside from the query helpers, the object `useUtils` returns also contains the following properties:

```ts
interface ProxyTRPCContextProps<TRouter extends AnyRouter, TSSRContext> {
  /**
   * The `TRPCClient`
   */
  client: TRPCClient<TRouter>;
  /**
   * The SSR context when server-side rendering
   * @default null
   */
  ssrContext?: TSSRContext | null;
  /**
   * State of SSR hydration.
   * - `false` if not using SSR.
   * - `prepass` when doing a prepass to fetch queries' data
   * - `mounting` before TRPCProvider has been rendered on the client
   * - `mounted` when the TRPCProvider has been rendered on the client
   * @default false
   */
  ssrState?: SSRState;
  /**
   * Abort loading query calls when unmounting a component - usually when navigating to a new page
   * @default false
   */
  abortOnUnmount?: boolean;
}
```

There are a few approaches to migrate over, and this library is a significant departure from the classic client, so we're not expecting anybody to do it in one shot. But you will probably want to try a combination of...

## Codemod migration

The codemod is a work in progress and we're looking for help to make it better. If you're interested in contributing to the codemod, please see [Julius' comment here](https://github.com/trpc/trpc/pull/6262#issuecomment-2651959435).

We're working on a codemod to help you migrate your existing codebase over to the new client. This is already available to try but we need your feedback and contributions to improve it. Codemods are very tricky to get right so we're looking for your help to make it as effective as possible.

Run our upgrade CLI:

```sh
npx @trpc/upgrade
```

When prompted, select the transforms `Migrate Hooks to xxxOptions API` and `Migrate context provider setup`.
