## Fetch data in `getStaticProps`

```tsx title='pages/posts/[id].tsx'
import { createServerSideHelpers } from '@trpc/react-query/server';
import { prisma } from '~/server/context';
import { appRouter } from '~/server/routers/_app';
import { trpc } from '~/utils/trpc';
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import superjson from 'superjson';

export async function getStaticProps(
  context: GetStaticPropsContext<{ id: string }>,
) {
  const helpers = createServerSideHelpers({
    router: appRouter,
    ctx: {},
    transformer: superjson, // optional - adds superjson serialization
  });
  const id = context.params?.id as string;

  // prefetch `post.byId`
  await helpers.post.byId.prefetch({ id });

  return {
    props: {
      trpcState: helpers.dehydrate(),
      id,
    },
    revalidate: 1,
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await prisma.post.findMany({
    select: {
      id: true,
    },
  });

  return {
    paths: posts.map((post) => ({
      params: {
        id: post.id,
      },
    })),
    // https://nextjs.org/docs/pages/api-reference/functions/get-static-paths#fallback-blocking
    fallback: 'blocking',
  };
};

export default function PostViewPage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const { id } = props;
  const postQuery = trpc.post.byId.useQuery({ id });

  if (postQuery.status !== 'success') {
    // won't happen since we're using `fallback: "blocking"`
    return <>Loading...</>;
  }
  const { data } = postQuery;
  return (
    <>
      <h1>{data.title}</h1>
      <em>Created {data.createdAt.toLocaleDateString('en-us')}</em>

      <p>{data.text}</p>

      <h2>Raw data:</h2>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </>
  );
}
```

Note that the default behaviour of `react-query` is to refetch the data on the client-side when it mounts, so if you want to *only* fetch the data via `getStaticProps`, you need to set `refetchOnMount` and `refetchOnWindowFocus` to `false` in the query options.

This might be preferable if you want to minimize the number of requests to your API, which might be necessary if you're using a third-party rate-limited API for example.

This can be done per query:

```tsx
const data = trpc.example.useQuery(
  // if your query takes no input, make sure that you don't
  // accidentally pass the query options as the first argument
  undefined,
  { refetchOnMount: false, refetchOnWindowFocus: false },
);
```

Or globally, if every query across your app should behave the same way:

```tsx title='utils/trpc.ts'
import { httpBatchLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';
import superjson from 'superjson';
import type { AppRouter } from './api/trpc/[trpc]';
export const trpc = createTRPCNext<AppRouter>({
  config(config) {
    return {
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
      // Change options globally
      queryClientConfig: {
        defaultOptions: {
          queries: {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
          },
        },
      },
    },
  },
});
```

Be careful with this approach if your app has a mixture of static and dynamic queries.

To enable SSR just set `ssr: true` in your `createTRPCNext` config callback.

When you enable SSR, tRPC will use `getInitialProps` to prefetch all queries on the server. This results in problems [like this](https://github.com/trpc/trpc/issues/596) when you use `getServerSideProps`, and solving it is out of our hands.

 \
Alternatively, you can leave SSR disabled (the default) and use [Server-Side Helpers](server-side-helpers) to prefetch queries in `getStaticProps` or `getServerSideProps`.

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
