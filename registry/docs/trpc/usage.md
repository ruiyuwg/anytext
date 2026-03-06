## Usage

`createTRPCQueryUtils` returns an object with all the available queries you have in your routers. You use it the same way as your `trpc` client object. Once you reach a query, you'll have access to the query helpers. For example, let's say you have a `post` router with an `all` query:

```twoslash include server
// @target: esnext
// @filename: server.ts
import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const t = initTRPC.create();

const appRouter = t.router({
  post: t.router({
    all: t.procedure.query(() => {
      return {
        posts: [
          { id: 1, title: 'everlong' },
          { id: 2, title: 'After Dark' },
        ],
      };
    }),
  }),
});

export type AppRouter = typeof appRouter;
```

Now in our component, when we navigate the object `createTRPCQueryUtils` gives us and reach the `post.all` query, we'll get access to our query helpers!

```tsx title="MyPage.tsx"
import { QueryClient } from '@tanstack/react-query';
import { createTRPCQueryUtils, createTRPCReact } from '@trpc/react-query';
import { useLoaderData } from 'react-router-dom';
import type { AppRouter } from './server';

const trpc = createTRPCReact<AppRouter>();
const trpcClient = trpc.createClient({ links: [] });

const queryClient = new QueryClient();

const clientUtils = createTRPCQueryUtils({ queryClient, client: trpcClient });

// This is a react-router loader
export async function loader() {
  const allPostsData = await clientUtils.post.all.ensureData(); // Fetches data if it doesn't exist in the cache

  return {
    allPostsData,
  };
}

// This is a react component
export function Component() {
  const loaderData = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  const allPostQuery = trpc.post.all.useQuery({
    initialData: loaderData.allPostsData, // Uses the data from the loader
  });

  return (
    <div>
      {allPostQuery.data.posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
```

If you were using Remix Run or SSR you wouldn't re-use the same `queryClient` for every request. Instead, you would create a new `queryClient` for every request so that there's no cross-request data leakage.
