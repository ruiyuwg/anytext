## Helpers

Much like `useUtils`, `createTRPCQueryUtils` gives you access to same set of helpers. The only difference is that you need to pass in the `queryClient` and `client` objects.

You can see them on the [useUtils](./useUtils.mdx#helpers)-page.

To disable queries, you can pass `skipToken` as the first argument to `useQuery` or `useInfiniteQuery`. This will prevent the query from being executed.

### Typesafe conditional queries using `skipToken`

```tsx
import { skipToken } from '@tanstack/react-query';


export function MyComponent() {

const [name, setName] = useState<string | undefined>();

const result = trpc.getUserByName.useQuery(name ? { name: name } : skipToken);

  return (
    ...
  )
}
```

We provide a getQueryKey helper that accepts a `router` or `procedure` so that you can easily provide the native function the correct query key.

```tsx
// Queries
function getQueryKey(
  procedure: AnyQueryProcedure,
  input?: DeepPartial<TInput>,
  type?: QueryType; /** @default 'any' */
): TRPCQueryKey;

// Routers
function getQueryKey(
  router: AnyRouter,
): TRPCQueryKey;

type QueryType = "query" | "infinite" | "any";
// for useQuery ──┘         │            │
// for useInfiniteQuery ────┘            │
// will match all ───────────────────────┘
```

The query type `any` will match all queries in the cache only if the `react query` method where it's used uses fuzzy matching. See [TanStack/query#5111 (comment)](https://github.com/TanStack/query/issues/5111#issuecomment-1464864361) for more context.

```tsx
import { useIsFetching, useQueryClient } from '@tanstack/react-query';
import { getQueryKey } from '@trpc/react-query';
import { trpc } from '~/utils/trpc';

function MyComponent() {
  const queryClient = useQueryClient();

  const posts = trpc.post.list.useQuery();

  // See if a query is fetching
  const postListKey = getQueryKey(trpc.post.list, undefined, 'query');
  const isFetching = useIsFetching(postListKey);

  // Set some query defaults for an entire router
  const postKey = getQueryKey(trpc.post);
  queryClient.setQueryDefaults(postKey, { staleTime: 30 * 60 * 1000 });

  // ...
}
```

## Mutations

Similarly to queries, we provide a getMutationKey for mutations. The underlying function is the same as getQueryKey (in fact, you could technically use getQueryKey for mutations as well), the only difference is in semantics.

```tsx
function getMutationKey(procedure: AnyMutationProcedure): TRPCMutationKey;
```

```twoslash include server
// @module: esnext
// @filename: server.ts
import { initTRPC } from '@trpc/server';
import { z } from "zod";

const t = initTRPC.create();

const appRouter = t.router({
  post: t.router({
    list: t.procedure
      .query(() => {
        // imaginary db call
        return [{ id: 1, title: 'tRPC is the best!' }];
    }),
    byId: t.procedure
      .input(z.string())
      .query(({ input }) => {
        // imaginary db call
        return { id: 1, title: 'tRPC is the best!' };
    }),
    create: t.procedure
      .input(z.object({ title: z.string(), text: z.string(), }))
      .mutation(({ input }) => {
        // imaginary db call
        return { id: 1, ...input };
    }),
  }),
});

export type AppRouter = typeof appRouter;
```

In addition to the type inference made available by `@trpc/server` ([see here](/docs/client/vanilla/infer-types)) this integration also provides some inference helpers for usage purely in React.

## Infer React Query options based on your router

When creating custom hooks around tRPC procedures, it's sometimes necessary to have the types of the options inferred from the router. You can do so via the `inferReactQueryProcedureOptions` helper exported from `@trpc/react-query`.

```ts twoslash title='trpc.ts'
// @module: esnext
// @include: server
// @filename: trpc.ts
// ---cut---
import {
  createTRPCReact,
  type inferReactQueryProcedureOptions,
} from '@trpc/react-query';
import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import type { AppRouter } from './server';

// infer the types for your router
export type ReactQueryOptions = inferReactQueryProcedureOptions<AppRouter>;
export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>;

export const trpc = createTRPCReact<AppRouter>();
```

```ts twoslash title='usePostCreate.ts'
// @module: esnext
// @include: server
// @filename: usePostCreate.ts
// @noErrors
// ---cut---
import {
  trpc,
  type ReactQueryOptions,
  type RouterInputs,
  type RouterOutputs,
} from './trpc';

type PostCreateOptions = ReactQueryOptions['post']['create'];

function usePostCreate(options?: PostCreateOptions) {
  const utils = trpc.useUtils();

  return trpc.post.create.useMutation({
    ...options,
    onSuccess(post) {
      // invalidate all queries on the post router
      // when a new post is created
      utils.post.invalidate();
      options?.onSuccess?.(post);
    },
  });
}
```

```ts twoslash title='usePostById.ts'
// @module: esnext
// @include: server
// @filename: usePostById.ts
// @noErrors
// ---cut---
import { ReactQueryOptions, RouterInputs, trpc } from './trpc';

type PostByIdOptions = ReactQueryOptions['post']['byId'];
type PostByIdInput = RouterInputs['post']['byId'];

function usePostById(input: PostByIdInput, options?: PostByIdOptions) {
  return trpc.post.byId.useQuery(input, options);
}
```
