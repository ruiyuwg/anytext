## Gradual migration

The new and classic clients are compatible with each other and [can live together in the same application](https://github.com/juliusmarminge/trpc-interop/blob/main/src/client.tsx).
This means you can start migrating by using the new client in new parts of your application, and gradually migrate over existing usage as you see fit. Most importantly,
Query Keys are identical, which means you can use the new client and classic client together and still rely on TanStack Query's caching.

### Migrating Queries

A classic query would look like this

```tsx
import { trpc } from './trpc';

function Users() {
  const greetingQuery = trpc.greeting.useQuery({ name: 'Jerry' });

  // greetingQuery.data === 'Hello Jerry'
}
```

and changes to

```tsx
import { useQuery } from '@tanstack/react-query';
import { useTRPC } from './trpc';

function Users() {
  const trpc = useTRPC();

  const greetingQuery = useQuery(trpc.greeting.queryOptions({ name: 'Jerry' }));

  // greetingQuery.data === 'Hello Jerry'
}
```

### Migrating Invalidations and other QueryClient usages

A classic query would look like this

```tsx
import { trpc } from './trpc';

function Users() {
  const utils = trpc.useUtils();

  async function invalidateGreeting() {
    await utils.greeting.invalidate({ name: 'Jerry' });
  }
}
```

and changes to

```tsx
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useTRPC } from './trpc';

function Users() {
  const trpc = useTRPC();
  const queryClient = useQueryClient();

  async function invalidateGreeting() {
    await queryClient.invalidateQueries(
      trpc.greeting.queryFilter({ name: 'Jerry' }),
    );
  }
}
```

This is the same for any QueryClient usage, instead of using tRPC's `useUtils` you can now follow the TanStack documentation directly

### Migrating Mutations

A classic mutation might look like this

```tsx
import { trpc } from './trpc';

function Users() {
  const createUserMutation = trpc.createUser.useMutation();

  createUserMutation.mutate({ name: 'Jerry' });
}
```

and changes to

```tsx
import { useMutation } from '@tanstack/react-query';
import { useTRPC } from './trpc';

function Users() {
  const trpc = useTRPC();

  const createUserMutation = useMutation(trpc.createUser.mutationOptions());

  createUserMutation.mutate({ name: 'Jerry' });
}
```

import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';

This guide is an overview of how one may use tRPC with a React Server Components (RSC) framework such as Next.js App Router.
Be aware that RSC on its own solves a lot of the same problems tRPC was designed to solve, so you may not need tRPC at all.

There are also not a one-size-fits-all way to integrate tRPC with RSCs, so see this guide as a starting point and adjust it
to your needs and preferences.

If you're looking for how to use tRPC with Server Actions, check out [this blog post by Julius](/blog/trpc-actions).

Please read React Query's [Advanced Server Rendering](https://tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr) docs before proceeding to understand the different types of server rendering
and what footguns to avoid.
