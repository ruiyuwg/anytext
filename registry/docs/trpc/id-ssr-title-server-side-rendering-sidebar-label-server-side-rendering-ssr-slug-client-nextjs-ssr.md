id: ssr
title: Server-Side Rendering
sidebar\_label: Server-Side Rendering (SSR)
slug: /client/nextjs/ssr
------------------------

To enable SSR just set `ssr: true` in your `createTRPCNext` config callback.

:::info
When you enable SSR, tRPC will use `getInitialProps` to prefetch all queries on the server. This results in problems [like this](https://github.com/trpc/trpc/issues/596) when you use `getServerSideProps`, and solving it is out of our hands.

 \
Alternatively, you can leave SSR disabled (the default) and use [Server-Side Helpers](server-side-helpers) to prefetch queries in `getStaticProps` or `getServerSideProps`.
:::

In order to execute queries properly during the server-side render step we need to add extra logic inside our `config`:

Additionally, consider [`Response Caching`](../../server/caching.md).

```tsx title='utils/trpc.ts'
import { httpBatchLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';
import { ssrPrepass } from '@trpc/next/ssrPrepass';
import superjson from 'superjson';
import type { AppRouter } from './api/trpc/[trpc]';

export const trpc = createTRPCNext<AppRouter>({
  ssr: true,
  ssrPrepass,
  config(config) {
    const { ctx } = opts;
    if (typeof window !== 'undefined') {
      // during client requests
      return {
        links: [
          httpBatchLink({
            url: '/api/trpc',
          }),
        ],
      };
    }

    return {
      links: [
        httpBatchLink({
          // The server needs to know your app's full url
          url: `${getBaseUrl()}/api/trpc`,
          /**
           * Set custom request headers on every request from tRPC
           * @see https://trpc.io/docs/v10/header
           */
          headers() {
            if (!ctx?.req?.headers) {
              return {};
            }
            // To use SSR properly, you need to forward client headers to the server
            // This is so you can pass through things like cookies when we're server-side rendering
            return {
              cookie: ctx.req.headers.cookie,
            };
          },
        }),
      ],
    };
  },
});
```

or, if you want to SSR conditional on a given request, you can pass a callback to `ssr`. This callback can return a boolean, or a Promise resolving to a boolean:

```tsx title='utils/trpc.ts'
import { httpBatchLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';
import superjson from 'superjson';
import type { AppRouter } from './api/trpc/[trpc]';

export const trpc = createTRPCNext<AppRouter>({
  config(config) {
    const { ctx } = opts;
    if (typeof window !== 'undefined') {
      // during client requests
      return {
        links: [
          httpBatchLink({
            url: '/api/trpc',
          }),
        ],
      };
    }

    return {
      links: [
        httpBatchLink({
          // The server needs to know your app's full url
          url: `${getBaseUrl()}/api/trpc`,
          /**
           * Set custom request headers on every request from tRPC
           * @see https://trpc.io/docs/v10/header
           */
          headers() {
            if (!ctx?.req?.headers) {
              return {};
            }
            // To use SSR properly, you need to forward client headers to the server
            // This is so you can pass through things like cookies when we're server-side rendering
            return {
              cookie: ctx.req.headers.cookie,
            };
          },
        }),
      ],
    };
  },
  ssr(opts) {
    // only SSR if the request is coming from a bot
    return opts.ctx?.req?.headers['user-agent']?.includes('bot');
  },
});
```

```tsx title='pages/_app.tsx'
import { trpc } from '~/utils/trpc';
import type { AppProps } from 'next/app';
import React from 'react';

const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default trpc.withTRPC(MyApp);
```

## FAQ

### Q: Why do I need to forward the client's headers to the server manually? Why doesn't tRPC automatically do that for me?

While it's rare that you wouldn't want to forward the client's headers to the server when doing SSR, you might want to add things dynamically in the headers. Therefore, tRPC doesn't want to take responsibility for header keys colliding, etc.

### Q: Why do I need to delete the `connection` header when using SSR on Node 18?

If you don't remove the `connection` header, the data fetching will fail with `TRPCClientError: fetch failed` because `connection` is a [forbidden header name](https://developer.mozilla.org/en-US/docs/Glossary/Forbidden_header_name).

### Q: Why do I still see network requests being made in the Network tab?

By default, `@tanstack/react-query` (which we use for the data fetching hooks) refetches data on mount and window refocus, even if it's already got initial data via SSR. This ensures data is always up-to-date. See the page on [SSG](ssg) if you'd like to disable this behavior.

***

***

id: starter-projects
title: Starter Projects
sidebar\_label: Starter Projects
slug: /client/nextjs/starter-projects
-------------------------------------

Get started quickly with one of the sample projects! Copy the snippet from *Quick start with `create-next-app`* in the below list to clone the project.

***

***

id: overview
title: Client Overview
sidebar\_label: Overview
slug: /client
-------------

While a tRPC API can be called using normal HTTP requests like any other REST API, you will need a **client** to benefit from tRPC's typesafety.

A client knows the procedures that are available in your API, and their inputs and outputs. It uses this information to give you autocomplete on your queries and mutations, correctly type the returned data, and show errors if you are writing requests that don't match the shape of your backend.

If you are using React, the best way to call a tRPC API is by using our [React Query Integration](./react/introduction.mdx), which in addition to typesafe API calls also offers caching, invalidation, and management of loading and error state. If you are using Next.js with the `/pages` directory, you can use our [Next.js integration](./nextjs/introduction.mdx), which adds helpers for Serverside Rendering and Static Generation in addition to the React Query Integration.

If you want to call a tRPC API from another server or from a frontend framework for which we don't have an integration, you can use the [Vanilla Client](./vanilla/introduction.md).

In addition to the React and Next.js integrations and the Vanilla Client, there are a variety of [community-built integrations for a variety of other frameworks](/docs/community/awesome-trpc#frontend-frameworks). Please note that these are not maintained by the tRPC team.

***

***

id: aborting-procedure-calls
title: Aborting Procedure Calls
sidebar\_label: Aborting Procedure Calls
slug: /client/react/aborting-procedure-calls
--------------------------------------------

By default, tRPC does not cancel requests via React Query. If you want to opt into this behaviour, you can provide `abortOnUnmount` in your configuration.

:::note
@tanstack/react-query only supports aborting queries.
:::

```twoslash include router
import { initTRPC } from '@trpc/server';
import { z } from "zod";
const t = initTRPC.create();

const appRouter = t.router({
  post: t.router({
    byId: t.procedure
      .input(z.object({ id: z.string() }))
      .query(async ({input}) => {
        return { id: input.id, title: 'Hello' };
      }),
  })
});
export type AppRouter = typeof appRouter;
```

### Globally

```ts twoslash title="client.ts"
// @target: esnext
// ---cut---
// @filename: utils.ts
// @noErrors
import { createTRPCReact } from '@trpc/react-query';

export const trpc = createTRPCReact<AppRouter>({
  abortOnUnmount: true,
});

trpc.createClient({
  // ...
});
```

### Per-request

You may also override this behaviour at the query level.

```tsx twoslash title="pages/post/[id].tsx"
// @filename: server/router.ts
// @include: router
// @filename: utils/trpc.ts
// ---cut---
import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '../server/router';

export const trpc = createTRPCReact<AppRouter>();

// @filename: pages/posts.tsx
declare const useRouter: any;
// ---cut---
import { trpc } from '../utils/trpc';

function PostViewPage() {
  const { query } = useRouter();
  const postQuery = trpc.post.byId.useQuery(
    { id: query.id },
    { trpc: { abortOnUnmount: true } }
  );

  // ...
}
```

***

***

id: createTRPCQueryUtils
title: createTRPCQueryUtils
sidebar\_label: createTRPCQueryUtils()
slug: /client/react/createTRPCQueryUtils
----------------------------------------

The use case for `createTRPCQueryUtils` is when you need to use the helpers outside of a React Component, for example in `react-router`s loaders.

Similar to `useUtils`, `createTRPCQueryUtils` is a function that gives you access to helpers that let you manage the cached data of the queries you execute via `@trpc/react-query`. These helpers are actually thin wrappers around `@tanstack/react-query`'s [`queryClient`](https://tanstack.com/query/v5/docs/reference/QueryClient) methods. If you want more in-depth information about options and usage patterns for `useUtils` helpers than what we provide here, we will link to their respective `@tanstack/react-query` docs so you can refer to them accordingly.

The difference between `useUtils` and `createTRPCQueryUtils` is that `useUtils` is a react hook that uses `useQueryClient` under the hood. This means that it is able to work better within React Components.

If you need access to the client directly, you can use the `client` object that you passed to `createTRPCQueryUtils` during creation.

:::caution

You should avoid using `createTRPCQueryUtils` in React Components. Instead, use `useUtils` which is a React hook that implements `useCallback` and `useQueryClient` under the hood.

:::
