id: introduction
title: React Query Integration (Classic)
sidebar\_label: Introduction
description: React Query Integration
slug: /client/react
-------------------

:::tip
These are the docs for our 'Classic' React Query integration, which (while still supported) is not the recommended way to start new tRPC projects with TanStack React Query. We recommend using the new [TanStack React Query Integration](/docs/client/tanstack-react-query/setup) instead.
:::

tRPC offers a first class integration with React. Under the hood this is simply a wrapper around the very popular [@tanstack/react-query](https://tanstack.com/query/latest), so we recommend that you familiarise yourself with React Query, as their docs go in to much greater depth on its usage.

If you are using Next.js we recommend using [our integration with that](../nextjs/introduction.mdx) instead.

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

### The tRPC React Query Integration

This library enables usage directly within React components

```tsx title='pages/IndexPage.tsx'
import { trpc } from '../utils/trpc';

export default function IndexPage() {
  const helloQuery = trpc.hello.useQuery({ name: 'Bob' });
  const goodbyeMutation = trpc.goodbye.useMutation();

  return (
    <div>
      <p>{helloQuery.data?.greeting}</p>

      <button onClick={() => goodbyeMutation.mutate()}>Say Goodbye</button>
    </div>
  );
}
```

### Differences to vanilla React Query

The wrapper abstracts some aspects of React Query for you:

- Query Keys - these are generated and managed by tRPC on your behalf, based on the procedure inputs you provide
  - If you need the query key which tRPC calculates, you can use [getQueryKey](/docs/client/react/getQueryKey)
- Type safe by default - the types you provide in your tRPC Backend also drive the types of your React Query client, providing safety throughout your React app

***

***

id: server-components
title: Set up with React Server Components
sidebar\_label: Server Components
slug: /client/react/server-components
-------------------------------------

import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';

:::tip
These are the docs for our 'Classic' React Query integration, which (while still supported) is not the recommended way to start new tRPC projects with TanStack React Query. We recommend using the new [TanStack React Query Integration](/docs/client/tanstack-react-query/server-components) instead.
:::

This guide is an overview of how one may use tRPC with a React Server Components (RSC) framework such as Next.js App Router.
Be aware that RSC on its own solves a lot of the same problems tRPC was designed to solve, so you may not need tRPC at all.

There are also not a one-size-fits-all way to integrate tRPC with RSCs, so see this guide as a starting point and adjust it
to your needs and preferences.

:::info
If you're looking for how to use tRPC with Server Actions, check out [this blog post by Julius](/blog/trpc-actions).
:::

:::caution
Please read React Query's [Advanced Server Rendering](https://tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr) docs before proceeding to understand the different types of server rendering
and what footguns to avoid.
:::
