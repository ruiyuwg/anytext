## Helpers

### `getInfiniteData()`

This helper gets the currently cached data from an existing infinite query

```tsx title='components/MyComponent.tsx'
import { trpc } from '../utils/trpc';

export function MyComponent() {
  const utils = trpc.useUtils();

  const myMutation = trpc.infinitePosts.add.useMutation({
    async onMutate(opts) {
      await utils.infinitePosts.cancel();
      const allPosts = utils.infinitePosts.getInfiniteData({ limit: 10 });
      // [...]
    },
  });
}
```

### `setInfiniteData()`

This helper allows you to update a query's cached data

```tsx title='components/MyComponent.tsx'
import { trpc } from '../utils/trpc';

export function MyComponent() {
  const utils = trpc.useUtils();

  const myMutation = trpc.infinitePosts.delete.useMutation({
    async onMutate(opts) {
      await utils.infinitePosts.cancel();

      utils.infinitePosts.setInfiniteData({ limit: 10 }, (data) => {
        if (!data) {
          return {
            pages: [],
            pageParams: [],
          };
        }

        return {
          ...data,
          pages: data.pages.map((page) => ({
            ...page,
            items: page.items.filter((item) => item.status === 'published'),
          })),
        };
      });
    },
  });

  // [...]
}
```

The hooks provided by `@trpc/react-query` are a thin wrapper around @tanstack/react-query. For in-depth information about options and usage patterns, refer to their docs on [mutations](https://tanstack.com/query/v5/docs/framework/react/guides/mutations).

Works like react-query's mutations - [see their docs](https://tanstack.com/query/v5/docs/framework/react/guides/mutations).

### Example

Backend code

```tsx title='server/routers/_app.ts'
import { initTRPC } from '@trpc/server';
import { z } from 'zod';

export const t = initTRPC.create();

export const appRouter = t.router({
  // Create procedure at path 'login'
  // The syntax is identical to creating queries
  login: t.procedure
    // using zod schema to validate and infer input values
    .input(
      z.object({
        name: z.string(),
      }),
    )
    .mutation((opts) => {
      // Here some login stuff would happen
      return {
        user: {
          name: opts.input.name,
          role: 'ADMIN',
        },
      };
    }),
});
```

```tsx
import { trpc } from '../utils/trpc';

export function MyComponent() {
  const mutation = trpc.login.useMutation();

  const handleLogin = () => {
    const name = 'John Doe';

    mutation.mutate({ name });
  };

  return (
    <div>
      <h1>Login Form</h1>
      <button onClick={handleLogin} disabled={mutation.isPending}>
        Login
      </button>

      {mutation.error && <p>Something went wrong! {mutation.error.message}</p>}
    </div>
  );
}
```

The `useQueries` hook can be used to fetch a variable number of queries at the same time using only one hook call.

The main use case for such a hook is to be able to fetch a number of queries, usually of the same type. For example if you fetch a list of todo ids, you can then map over them in a useQueries hook calling a byId endpoint that would fetch the details of each todo.

While fetching multiple types in a `useQueries` hook is possible, there is not much of an advantage compared to using multiple `useQuery` calls unless you use the `suspense` option as that `useQueries` can trigger suspense in parallel while multiple `useQuery` calls would waterfall.
