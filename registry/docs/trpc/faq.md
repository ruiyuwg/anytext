## FAQ

### Q: Why do I need to forward the client's headers to the server manually? Why doesn't tRPC automatically do that for me?

While it's rare that you wouldn't want to forward the client's headers to the server when doing SSR, you might want to add things dynamically in the headers. Therefore, tRPC doesn't want to take responsibility for header keys colliding, etc.

### Q: Why do I need to delete the `connection` header when using SSR on Node 18?

If you don't remove the `connection` header, the data fetching will fail with `TRPCClientError: fetch failed` because `connection` is a [forbidden header name](https://developer.mozilla.org/en-US/docs/Glossary/Forbidden_header_name).

### Q: Why do I still see network requests being made in the Network tab?

By default, `@tanstack/react-query` (which we use for the data fetching hooks) refetches data on mount and window refocus, even if it's already got initial data via SSR. This ensures data is always up-to-date. See the page on [SSG](ssg) if you'd like to disable this behavior.

Get started quickly with one of the sample projects! Copy the snippet from *Quick start with `create-next-app`* in the below list to clone the project.

```
  Description
  URL
  Links




  
    Next.js starter with Prisma, E2E testing, &amp; ESLint.
    
    
      Quick start with create-next-app
      yarn create next-app --example https://github.com/trpc/trpc --example-path examples/next-prisma-starter trpc-prisma-starter
    
  
  nextjs.trpc.io
  
    
      CodeSandbox
      Source
    
  


  
    zART-stack example (zero-API, TypeScript, React).
    
    Monorepo setup with React Native, Next.js, &amp; Prisma
    
    
      Quick start with git clone
      git clone git@github.com:KATT/zart.git
    
  
  n/a
  
    
      Source
    
  


  
    Next.js TodoMVC-example with SSG & Prisma.
    
    
      Quick start with create-next-app
      yarn create next-app --example https://github.com/trpc/trpc --example-path examples/next-prisma-todomvc trpc-todo
    
  
  todomvc.trpc.io
  
    
      CodeSandbox
      Source
    
  
```

While a tRPC API can be called using normal HTTP requests like any other REST API, you will need a **client** to benefit from tRPC's typesafety.

A client knows the procedures that are available in your API, and their inputs and outputs. It uses this information to give you autocomplete on your queries and mutations, correctly type the returned data, and show errors if you are writing requests that don't match the shape of your backend.

If you are using React, the best way to call a tRPC API is by using our [React Query Integration](./react/introduction.mdx), which in addition to typesafe API calls also offers caching, invalidation, and management of loading and error state. If you are using Next.js with the `/pages` directory, you can use our [Next.js integration](./nextjs/introduction.mdx), which adds helpers for Serverside Rendering and Static Generation in addition to the React Query Integration.

If you want to call a tRPC API from another server or from a frontend framework for which we don't have an integration, you can use the [Vanilla Client](./vanilla/introduction.md).

In addition to the React and Next.js integrations and the Vanilla Client, there are a variety of [community-built integrations for a variety of other frameworks](/docs/community/awesome-trpc#frontend-frameworks). Please note that these are not maintained by the tRPC team.

By default, tRPC does not cancel requests via React Query. If you want to opt into this behaviour, you can provide `abortOnUnmount` in your configuration.

@tanstack/react-query only supports aborting queries.

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

The use case for `createTRPCQueryUtils` is when you need to use the helpers outside of a React Component, for example in `react-router`s loaders.

Similar to `useUtils`, `createTRPCQueryUtils` is a function that gives you access to helpers that let you manage the cached data of the queries you execute via `@trpc/react-query`. These helpers are actually thin wrappers around `@tanstack/react-query`'s [`queryClient`](https://tanstack.com/query/v5/docs/reference/QueryClient) methods. If you want more in-depth information about options and usage patterns for `useUtils` helpers than what we provide here, we will link to their respective `@tanstack/react-query` docs so you can refer to them accordingly.

The difference between `useUtils` and `createTRPCQueryUtils` is that `useUtils` is a react hook that uses `useQueryClient` under the hood. This means that it is able to work better within React Components.

If you need access to the client directly, you can use the `client` object that you passed to `createTRPCQueryUtils` during creation.

You should avoid using `createTRPCQueryUtils` in React Components. Instead, use `useUtils` which is a React hook that implements `useCallback` and `useQueryClient` under the hood.
