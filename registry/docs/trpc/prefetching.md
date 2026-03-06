## Prefetching

The performance of suspense queries can be improved by prefetching the query data before the Suspense component is rendered (this is sometimes called ["render-as-you-fetch"](https://tanstack.com/query/v5/docs/framework/react/guides/suspense#fetch-on-render-vs-render-as-you-fetch)).

- Prefetching and the render-as-you-fetch model are very dependent on the framework and router you are using. We recommend reading your frameworks router docs along with the [@tanstack/react-query docs](https://tanstack.com/query/v5/docs/react/guides/prefetching) to understand how to implement these patterns.
- If you are using Next.js please look at the docs on [Server-Side Helpers](/docs/client/nextjs/server-side-helpers) to implement server-side prefetching.

### Route-level prefetching

```tsx
const utils = createTRPCQueryUtils({ queryClient, client: trpcClient });

// tanstack router/ react router loader
const loader = async (params: { id: string }) =>
  utils.post.byId.ensureQueryData({ id: params.id });
```

### Component-level prefetching with `usePrefetchQuery`

```tsx
import { trpc } from '../utils/trpc';

function PostViewPage(props: { postId: string }) {
  trpc.post.byId.usePrefetchQuery({ id: props.postId });

  return (
    <Suspense>
      <PostView postId={props.postId} />
    </Suspense>
  );
}
```

### Component-level prefetching with `usePrefetchInfiniteQuery`

```tsx
import { trpc } from '../utils/trpc';

// will have to be passed to the child PostView `useSuspenseInfiniteQuery`
export const getNextPageParam = (lastPage) => lastPage.nextCursor;

function PostViewPage(props: { postId: string }) {
  trpc.post.all.usePrefetchInfiniteQuery({}, { getNextPageParam });

  return (
    <Suspense>
      <PostView postId={props.postId} />
    </Suspense>
  );
}
```

- Your procedure needs to accept a `cursor` input of any type (`string`, `number`, etc) to expose this hook.
- For more details on infinite queries read the [react-query docs](https://tanstack.com/query/v5/docs/framework/react/reference/useInfiniteQuery)
- In this example we're using Prisma - see their docs on [cursor-based pagination](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination)

## Example Procedure

```tsx title='server/routers/_app.ts'
import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import { Context } from './[trpc]';

export const t = initTRPC.create();

export const appRouter = t.router({
  infinitePosts: t.procedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).nullish(),
        cursor: z.number().nullish(), // <-- "cursor" needs to exist, but can be any type
        direction: z.enum(['forward', 'backward']), // optional, useful for bi-directional query
      }),
    )
    .query(async (opts) => {
      const { input } = opts;
      const limit = input.limit ?? 50;
      const { cursor } = input;
      const items = await prisma.post.findMany({
        take: limit + 1, // get an extra item at the end which we'll use as next cursor
        where: {
          title: {
            contains: 'Prisma' /* Optional filter */,
          },
        },
        cursor: cursor ? { myCursor: cursor } : undefined,
        orderBy: {
          myCursor: 'asc',
        },
      });
      let nextCursor: typeof cursor | undefined = undefined;
      if (items.length > limit) {
        const nextItem = items.pop();
        nextCursor = nextItem!.myCursor;
      }

      return {
        items,
        nextCursor,
      };
    }),
});
```

## Example React Component

```tsx title='components/MyComponent.tsx'
import { trpc } from '../utils/trpc';

export function MyComponent() {
  const myQuery = trpc.infinitePosts.useInfiniteQuery(
    {
      limit: 10,
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      // initialCursor: 1, // <-- optional you can pass an initialCursor
    },
  );
  // [...]
}
```
