# Next.js Integration

## tRPC + Next.js

Next.js makes it easy to build a client and server together in one codebase. tRPC makes it easy to share types between them, ensuring typesafety for your application's data fetching.

tRPC provides first-class support for both the **App Router** and the **Pages Router**. Choose the guide that matches your project:

## App Router

The recommended approach for new Next.js projects. Uses React Server Components, the [fetch adapter](/docs/server/adapters/fetch), and [`@trpc/tanstack-react-query`](/docs/client/tanstack-react-query).

Key features:

- **Server Components** - Prefetch data on the server and stream it to the client
- **Streaming** - Leverage Next.js streaming for optimal loading performance
- **Suspense** - Use `useSuspenseQuery` with Suspense boundaries for loading states

**[Get started with App Router →](/docs/client/nextjs/app-router-setup)**

## Pages Router

Uses `@trpc/next` which provides a higher-order component (HOC) and integrated hooks for the Pages Router data-fetching patterns.

Key features:

- **Server-side rendering** - Render pages on the server and hydrate them on the client. Read more about [SSR](/docs/client/nextjs/pages-router/ssr).
- **Static site generation** - Prefetch queries on the server and generate static HTML files. Read more about [SSG](/docs/client/nextjs/pages-router/ssg).
- **Automatic Provider Wrapping** - `@trpc/next` provides a HOC that wraps your app with the necessary providers automatically.

**[Get started with Pages Router →](/docs/client/nextjs/pages-router/setup)**

## Choosing between App Router and Pages Router

|                     | App Router                                    | Pages Router                                        |
| ------------------- | --------------------------------------------- | --------------------------------------------------- |
| **Recommended for** | New projects                                  | Existing Pages Router projects                      |
| **Data fetching**   | Server Components, `prefetchQuery`            | `getServerSideProps`, `getStaticProps`, SSR via HOC |
| **Server adapter**  | [Fetch adapter](/docs/server/adapters/fetch)  | [Next.js adapter](/docs/server/adapters/nextjs)     |
| **Client package**  | `@trpc/tanstack-react-query`                  | `@trpc/next` + `@trpc/react-query`                  |
| **Provider setup**  | Manual `QueryClientProvider` + `TRPCProvider` | Automatic via `withTRPC()` HOC                      |

If you're starting a new project, we recommend the App Router. If you have an existing Pages Router project, the Pages Router integration works well and is fully supported.

# Aborting Procedure Calls

By default, tRPC does not cancel requests on unmount. If you want to opt into this behavior, you can provide `abortOnUnmount` in your configuration callback.

### Globally

```ts twoslash title="client.ts"
// @filename: server/routers/_app.ts
import { initTRPC } from '@trpc/server';
const t = initTRPC.create();
export const appRouter = t.router({});
export type AppRouter = typeof appRouter;

// @filename: client.ts
// ---cut---
import { httpBatchLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';
import type { AppRouter } from './server/routers/_app';

export const trpc = createTRPCNext<AppRouter>({
  config() {
    return {
      links: [
        httpBatchLink({
          url: '/api/trpc',
        }),
      ],
      abortOnUnmount: true,
    };
  },
});
```

### Per-request

You may also override this behavior at the request level.

```tsx twoslash title="client.ts"
// @jsx: react-jsx
// @filename: server/routers/_app.ts
import { initTRPC } from '@trpc/server';
import { z } from 'zod';
const t = initTRPC.create();
export const appRouter = t.router({
  post: t.router({
    byId: t.procedure.input(z.object({ id: z.string() })).query(() => ({ id: '1', title: 'Hello' })),
  }),
});
export type AppRouter = typeof appRouter;

// @filename: utils/trpc.tsx
import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '../server/routers/_app';
export const trpc = createTRPCReact<AppRouter>();

// @filename: client.ts
// ---cut---
import { trpc } from './utils/trpc';
import { useRouter } from 'next/router';

function PostViewPage() {
  const id = useRouter().query.id as string;
  const postQuery = trpc.post.byId.useQuery({ id }, { trpc: { abortOnUnmount: true } });

  return null;
}
```
