## Using your API

Now you can use your tRPC API in your app. While you can use the React Query hooks in client components just like you would in any other React app,
we can take advantage of the RSC capabilities by prefetching queries in a server component high up the tree. You may be familiar with this
concept as "render as you fetch" commonly implemented as loaders. This means the request fires as soon as possible but without suspending until
the data is needed by using the `useQuery` or `useSuspenseQuery` hooks.

This approach leverages Next.js App Router's streaming capabilities, initiating the query on the server and streaming data to the client as it becomes available.
It optimizes both the time to first byte in the browser and the data fetch time, resulting in faster page loads.
However, `greeting.data` may initially be `undefined` before the data streams in.

If you prefer to avoid this initial undefined state, you can `await` the `prefetchQuery` call.
This ensures the query on the client always has data on first render, but it comes with a tradeoff -
the page will load more slowly since the server must complete the query before sending HTML to the client.

```tsx title='app/page.tsx'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { getQueryClient, trpc } from '~/trpc/server';
import { ClientGreeting } from './client-greeting';

export default async function Home() {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.hello.queryOptions({
      /** input */
    }),
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div>...</div>
      {/** ... */}
      <ClientGreeting />
    </HydrationBoundary>
  );
}
```

```tsx title='app/client-greeting.tsx'
'use client';

// <-- hooks can only be used in client components
import { useQuery } from '@tanstack/react-query';
import { useTRPC } from '~/trpc/client';

export function ClientGreeting() {
  const trpc = useTRPC();
  const greeting = useQuery(trpc.hello.queryOptions({ text: 'world' }));
  if (!greeting.data) return <div>Loading...</div>;
  return <div>{greeting.data.greeting}</div>;
}
```

You can also create a `prefetch` and `HydrateClient` helper functions to make it a bit more consice and reusable:

```tsx title='trpc/server.tsx'
export function HydrateClient(props: { children: React.ReactNode }) {
  const queryClient = getQueryClient();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {props.children}
    </HydrationBoundary>
  );
}

export function prefetch<T extends ReturnType<TRPCQueryOptions<any>>>(
  queryOptions: T,
) {
  const queryClient = getQueryClient();
  if (queryOptions.queryKey[1]?.type === 'infinite') {
    void queryClient.prefetchInfiniteQuery(queryOptions as any);
  } else {
    void queryClient.prefetchQuery(queryOptions);
  }
}
```

Then you can use it like this:

```tsx
import { HydrateClient, prefetch, trpc } from '~/trpc/server';

function Home() {
  prefetch(
    trpc.hello.queryOptions({
      /** input */
    }),
  );

  return (
    <HydrateClient>
      <div>...</div>
      {/** ... */}
      <ClientGreeting />
    </HydrateClient>
  );
}
```

### Leveraging Suspense

You may prefer handling loading and error states using Suspense and Error Boundaries. You can do this by using the `useSuspenseQuery` hook.

```tsx title='app/page.tsx'
import { HydrateClient, prefetch, trpc } from '~/trpc/server';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ClientGreeting } from './client-greeting';

export default async function Home() {
  prefetch(trpc.hello.queryOptions());

  return (
    <HydrateClient>
      <div>...</div>
      {/** ... */}
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <ClientGreeting />
        </Suspense>
      </ErrorBoundary>
    </HydrateClient>
  );
}
```

```tsx title='app/client-greeting.tsx'
'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { trpc } from '~/trpc/client';

export function ClientGreeting() {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.hello.queryOptions());
  return <div>{data.greeting}</div>;
}
```

### Getting data in a server component

If you need access to the data in a server component, we recommend creating a server caller and using it directly. Please note that this method is detached from your query client and does not
store the data in the cache. This means that you cannot use the data in a server component and expect it to be available in the client. This is
intentional and explained in more detail in the [Advanced Server Rendering](https://tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr#data-ownership-and-revalidation)
guide.

```tsx title='trpc/server.tsx'
// ...
export const caller = appRouter.createCaller(createTRPCContext);
```

```tsx title='app/page.tsx'
import { caller } from '~/trpc/server';

export default async function Home() {
  const greeting = await caller.hello();
  //    ^? { greeting: string }

  return <div>{greeting.greeting}</div>;
}
```

If you **really** need to use the data both on the server as well as inside client components and understand the tradeoffs explained in the
[Advanced Server Rendering](https://tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr#data-ownership-and-revalidation)
guide, you can use `fetchQuery` instead of `prefetch` to have the data both on the server as well as hydrating it down to the client:

```tsx title='app/page.tsx'
import { getQueryClient, HydrateClient, trpc } from '~/trpc/server';

export default async function Home() {
  const queryClient = getQueryClient();
  const greeting = await queryClient.fetchQuery(trpc.hello.queryOptions());

  // Do something with greeting on the server

  return (
    <HydrateClient>
      <div>...</div>
      {/** ... */}
      <ClientGreeting />
    </HydrateClient>
  );
}
```

Compared to our [classic React Query Integration](/docs/client/react) this client is simpler and more TanStack Query-native, providing factories for common TanStack React Query interfaces like QueryKeys, QueryOptions, and MutationOptions. We think it's the future and recommend using this over the classic client, read the announcement post for more information about this change.

You can try this integration out on the homepage of tRPC.io: [https://trpc.io/?try=minimal-react#try-it-out](/?try=minimal-react#try-it-out)

❓ Do I have to use an integration?

No! The integration is fully optional. You can use `@tanstack/react-query` using just a [vanilla tRPC client](/docs/client/vanilla), although then you'll have to manually manage query keys and do not get the same level of DX as when using the integration package.

```ts title='utils/trpc.ts'
export const trpc = createTRPCClient<AppRouter>({
  links: [httpBatchLink({ url: 'YOUR_API_URL' })],
});
```

```tsx title='components/PostList.tsx'
function PostList() {
  const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: () => trpc.post.list.query(),
  });
  data; // Post[]

  // ...
}
```
