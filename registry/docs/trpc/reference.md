## Reference

You can check out the source code for this link on [GitHub.](https://github.com/trpc/trpc/blob/main/packages/client/src/links/wsLink)

By default, tRPC does not cancel requests on unmount. If you want to opt into this behavior, you can provide `abortOnUnmount` in your configuration callback.

### Globally

```ts twoslash title="client.ts"
// @target: esnext
// ---cut---
// @filename: utils.ts
// @noErrors
import { createTRPCNext } from '@trpc/next';

export const trpc = createTRPCNext<AppRouter>({
  config() {
    return {
      // ...
      abortOnUnmount: true,
    };
  },
});
```

### Per-request

You may also override this behavior at the request level.

```ts twoslash title="client.ts"
// @target: esnext

// ---cut---
// @filename: pages/posts/[id].tsx
// @noErrors
import { trpc } from '~/utils/trpc';

const PostViewPage: NextPageWithLayout = () => {
  const id = useRouter().query.id as string;
  const postQuery = trpc.post.byId.useQuery({ id }, { trpc: { abortOnUnmount: true } });

  return (...)
}
```

### tRPC ❤️ Next.js

Next.js makes it easy to build a client and server together in one codebase. tRPC makes it easy to share types between them, ensuring typesafety for your application's data fetching.

Our Next.js integration is built on top of our [React Query Integration](/docs/client/react) with some Next.js specific APIs, to handle both client and server side rendering.

When using the Next.js integration, you'll get the following features:

- **Server-side rendering** - You can tell tRPC to render your pages on the server, and then hydrate them on the client. This way, you'll avoid an initial loading state, although time to first byte will be blocked by the server. Read more about [Server-side rendering](/docs/client/nextjs/ssr).
- **Static site generation** - Prefetch queries on the server and generate static HTML files that are ready to be served. Read more about [Static site generation](/docs/client/nextjs/ssg).
- **Automatic Provider Wrapping** - `@trpc/next` provides a higher-order component (HOC) that wraps your app with the necessary providers so you don't have to do it yourself.

If you're using tRPC in a new project, consider using one of the example projects for reference: [tRPC Example Projects](/docs/example-apps)

The server-side helpers provides you with a set of helper functions that you can use to prefetch queries on the server. This is useful for SSG, but also for SSR if you opt not to use `ssr: true`.

Prefetching via the server-side helpers allows populating the query cache on the server, which means that these queries do not have to fetch on the client initially.

## There are 2 ways to use the server-side helpers.

### 1. Internal router

This method is used when you have direct access to your tRPC router. e.g. when developing a monolithic Next.js application.

Using the helpers makes tRPC call your procedures directly on the server, without an HTTP request, similar to [server-side calls](/docs/server/server-side-calls).
That also means that you don't have the request and response at hand like you usually do. Make sure you're instantiating the server-side helpers with a context without `req` & `res`, which are typically filled via the context creation. We recommend the concept of ["inner" and "outer" context](/docs/server/context) in that scenario.

```ts
import { createServerSideHelpers } from '@trpc/react-query/server';
import { createContext } from '~/server/context';
import superjson from 'superjson';

const helpers = createServerSideHelpers({
  router: appRouter,
  ctx: await createContext(),
  transformer: superjson, // optional - adds superjson serialization
});
```

### 2. External router

This method is used when you don't have direct access to your tRPC router. e.g. when developing a Next.js application and a standalone API hosted separately.

```ts
import { createTRPCClient } from '@trpc/client';
import { createServerSideHelpers } from '@trpc/react-query/server';
import superjson from 'superjson';

const proxyClient = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/api/trpc',
    }),
  ],
});

const helpers = createServerSideHelpers({
  client: proxyClient,
});
```

## Helpers usage

The server-side helpers methods return an object much like the tRPC client, with all of your routers as keys. However, rather than `useQuery` and `useMutation`, you get `prefetch`, `fetch`, `prefetchInfinite`, and `fetchInfinite` functions.

The primary difference between `prefetch` and `fetch` is that `fetch` acts much like a normal function call, returning the result of the query, whereas `prefetch` does not return the result and never throws - if you need that behavior, use `fetch` instead. Instead, `prefetch` will add the query to the cache, which you then dehydrate and send to the client.

```ts
return {
  props: {
    // very important - use `trpcState` as the key
    trpcState: helpers.dehydrate(),
  },
};
```

The rule of thumb is `prefetch` for queries that you know you'll need on the client, and `fetch` for queries that you want to use the result of on the server.

The functions are all wrappers around react-query functions. Please check out [their docs](https://tanstack.com/query/v5/docs/framework/react/overview) to learn more about them in detail.

For a full example, see our [E2E SSG test example](https://github.com/trpc/trpc/tree/main/examples/.test/ssg)

## Next.js Example

```tsx title='pages/posts/[id].tsx'
import { createServerSideHelpers } from '@trpc/react-query/server';
import { appRouter } from '~/server/routers/_app';
import { trpc } from '~/utils/trpc';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import superjson from 'superjson';

export async function getServerSideProps(
  context: GetServerSidePropsContext<{ id: string }>,
) {
  const helpers = createServerSideHelpers({
    router: appRouter,
    ctx: {},
    transformer: superjson,
  });
  const id = context.params?.id as string;

  /*
   * Prefetching the `post.byId` query.
   * `prefetch` does not return the result and never throws - if you need that behavior, use `fetch` instead.
   */
  await helpers.post.byId.prefetch({ id });

  // Make sure to return { props: { trpcState: helpers.dehydrate() } }
  return {
    props: {
      trpcState: helpers.dehydrate(),
      id,
    },
  };
}

export default function PostViewPage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
  const { id } = props;
  const postQuery = trpc.post.byId.useQuery({ id });
  if (postQuery.status !== 'success') {
    // won't happen since the query has been prefetched
    return <>Loading...</>;
  }
  const { data } = postQuery;
  return (
    <>
      <h1>{data.title}</h1>
      <em>Created {data.createdAt.toLocaleDateString()}</em>
      <p>{data.text}</p>
      <h2>Raw data:</h2>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </>
  );
}
```

import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';

This guide is for Next.js Pages Router. If you are using Next.js App Router with React Server components, check out [the RSC docs](/docs/client/react/server-components)

## Recommended file structure

We recommend a file structure like this one, although it is not enforced by tRPC. This is what you'll see in [our examples](/main/example-apps.mdx). The rest of this page will take you through the process of adding tRPC in to this structure.

```graphql
.
├── prisma  # <-- if prisma is added
│   └── [..]
├── src
│   ├── pages
│   │   ├── _app.tsx  # <-- add `withTRPC()`-HOC here
│   │   ├── api
│   │   │   └── trpc
│   │   │       └── [trpc].ts  # <-- tRPC HTTP handler
│   │   └── [..]
│   ├── server
│   │   ├── routers
│   │   │   ├── _app.ts  # <-- main app router
│   │   │   ├── post.ts  # <-- sub routers
│   │   │   └── [..]
│   │   ├── context.ts   # <-- create app context
│   │   └── trpc.ts      # <-- procedure helpers
│   └── utils
│       └── trpc.ts  # <-- your typesafe tRPC hooks
└── [..]
```
