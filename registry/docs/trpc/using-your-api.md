## Using your API

Now you can use your tRPC API in your app. While you can use the React Query hooks in client components just like you would in any other React app,
we can take advantage of the RSC capabilities by prefetching queries in a server component high up the tree. You may be familiar with this
concept as "render as you fetch" commonly implemented as loaders. This means the request fires as soon as possible but without suspending until
the data is needed by using the `useQuery` or `useSuspenseQuery` hooks.

```tsx title='app/page.tsx'
import { trpc } from '~/trpc/server';
import { ClientGreeting } from './client-greeting';

export default async function Home() {
  void trpc.hello.prefetch();

  return (
    <HydrateClient>
      <div>...</div>
      {/** ... */}
      <ClientGreeting />
    </HydrateClient>
  );
}
```

```tsx title='app/client-greeting.tsx'
'use client';

// <-- hooks can only be used in client components
import { trpc } from '~/trpc/client';

export function ClientGreeting() {
  const greeting = trpc.hello.useQuery();
  if (!greeting.data) return <div>Loading...</div>;
  return <div>{greeting.data.greeting}</div>;
}
```

### Leveraging Suspense

You may prefer handling loading and error states using Suspense and Error Boundaries. You can do this by using the `useSuspenseQuery` hook.

```tsx title='app/page.tsx'
import { trpc } from '~/trpc/server';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ClientGreeting } from './client-greeting';

export default async function Home() {
  void trpc.hello.prefetch();

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

import { trpc } from '~/trpc/client';

export function ClientGreeting() {
  const [data] = trpc.hello.useSuspenseQuery();
  return <div>{data.greeting}</div>;
}
```

### Getting data in a server component

If you need access to the data in a server component, you can invoke the procedure directly instead of using `.prefetch()`, just like you use
[the normal server caller](/docs/server/server-side-calls). Please note that this method is de-attached from your query client and does not
store the data in the cache. This means that you cannot use the data in a server component and expect it to be available in the client. This is
intentional and explained in more detail in the [Advanced Server Rendering](https://tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr#data-ownership-and-revalidation)
guide.

```tsx title='app/page.tsx'
import { trpc } from '~/trpc/server';

export default async function Home() {
  // Use the caller directly without using `.prefetch()`
  const greeting = await trpc.hello();
  //    ^? { greeting: string }

  return <div>{greeting.greeting}</div>;
}
```

import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';

### 1. Install dependencies

The following dependencies should be installed

import { InstallSnippet } from '@site/src/components/InstallSnippet';

### 2. Import your `AppRouter`

```twoslash include router
// @filename: server/router.ts
import { initTRPC } from '@trpc/server';
import { z } from "zod";
const t = initTRPC.create();

const appRouter = t.router({
  getUser: t.procedure.input(z.object({ id: z.string() })).query(() => ({ name: 'foo' })),
  createUser: t.procedure.input(z.object({ name: z.string() })).mutation(() => 'bar'),
});
export type AppRouter = typeof appRouter;
```

import ImportAppRouter from '../../partials/\_import-approuter.mdx';

### 3. Create tRPC hooks

Create a set of strongly-typed React hooks from your `AppRouter` type signature with `createTRPCReact`.

```ts twoslash title='utils/trpc.ts'
// @include: router
// @filename: utils/trpc.ts
// ---cut---
import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '../server/router';

export const trpc = createTRPCReact<AppRouter>();
```

### 4. Add tRPC providers

Create a tRPC client, and wrap your application in the tRPC Provider, as below. You will also need to set up and connect React Query, which [they document in more depth](https://tanstack.com/query/latest/docs/framework/react/quick-start).

If you already use React Query in your application, you **should** re-use the `QueryClient` and `QueryClientProvider` you already have.

```tsx title='App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import React, { useState } from 'react';
import { trpc } from './utils/trpc';

export function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:3000/trpc',

          // You can pass any HTTP headers you wish here
          async headers() {
            return {
              authorization: getAuthCookie(),
            };
          },
        }),
      ],
    }),
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {/* Your app here */}
      </QueryClientProvider>
    </trpc.Provider>
  );
}
```

The reason for using `useState` in the creation of the `queryClient` and the `TRPCClient`, as opposed to declaring them outside of the component, is to ensure that each request gets a unique client when using SSR. If you use client side rendering then you can move them if you wish.

#### 5. Fetch data

You can now use the tRPC React Query integration to call queries and mutations on your API.

```tsx twoslash title='pages/IndexPage.tsx'
// @include: router
// @filename: utils/trpc.ts
// ---cut---
import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '../server/router';

export const trpc = createTRPCReact<AppRouter>();
// @filename: pages/IndexPage.tsx
import React from "react";
// ---cut---
import { trpc } from '../utils/trpc';

export default function IndexPage() {
  const userQuery = trpc.getUser.useQuery({ id: 'id_bilbo' });
  const userCreator = trpc.createUser.useMutation();

  return (
    <div>
      <p>{userQuery.data?.name}</p>

      <button onClick={() => userCreator.mutate({ name: 'Frodo' })}>
        Create Frodo
      </button>
    </div>
  );
}
```

- Ensure you're on the latest version of React
- If you use suspense with [tRPC's *automatic* SSR in Next.js](/docs/client/nextjs/ssr), the full page will crash on the server if a query fails, even if you have an `<ErrorBoundary />`
