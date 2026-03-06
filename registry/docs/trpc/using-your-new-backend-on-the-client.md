## Using your new backend on the client

Let's now move to the client-side code and embrace the power of end-to-end typesafety. When we import the `AppRouter` type for the client to use, we have achieved full typesafety for our system without leaking any implementation details to the client.

### 1. Setup the tRPC Client

```ts twoslash title="client/index.ts"
// @target: esnext
// @filename: db.ts
// @include: db
// @filename: trpc.ts
// @include: trpc
// @filename: server.ts
// @include: server
// @filename: client.ts
// ---cut---
import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from './server';
//     👆 **type-only** import

// Pass AppRouter as generic here. 👇 This lets the `trpc` object know
// what procedures are available on the server and their input/output types.
const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000',
    }),
  ],
});
```

Links in tRPC are similar to links in GraphQL, they let us control the data flow **before** being sent to the server. In the example above, we use the [httpBatchLink](/docs/client/links/httpBatchLink), which automatically batches up multiple calls into a single HTTP request. For more in-depth usage of links, see the [links documentation](/docs/client/links).

### 2. Querying & mutating

You now have access to your API procedures on the `trpc` object. Try it out!

```ts twoslash title="client/index.ts"
// @target: esnext
// @filename: db.ts
// @include: db
// @filename: trpc.ts
// @include: trpc
// @filename: server.ts
// @include: server
// @filename: client.ts
import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from './server';

const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000',
    }),
  ],
});

// ---cut---
// Inferred types
const user = await trpc.userById.query('1');
//    ^?

const createdUser = await trpc.userCreate.mutate({ name: 'sachinraja' });
//    ^?
```

### Full autocompletion

You can open up your Intellisense to explore your API on your frontend. You'll find all of your procedure routes waiting for you along with the methods for calling them.

```ts twoslash title="client/index.ts"
// @target: esnext
// @filename: db.ts
// @include: db
// @filename: trpc.ts
// @include: trpc
// @filename: server.ts
// @include: server
// @filename: client.ts
import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from './server';

const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000',
    }),
  ],
});

// ---cut---
// @errors: 2339
// Full autocompletion on your routes
trpc.u;
//    ^|
```

## Try it out for yourself!

import { Iframe } from '@site/src/components/Iframe';
import { searchParams } from '@site/src/utils/searchParams';
import clsx from 'clsx';

<div
  className={clsx(
    'h-[800px] w-full rounded-xl overflow-hidden z-10 relative my-0 md:my-4 lg:my-8',
  )}
>
  <Iframe
    src={
      `https://stackblitz.com/github/trpc/examples-minimal/tree/main?` +
      searchParams({
        embed: '1',
        file: [
          // Opens these side-by-side
          'src/client/index.ts',
          'src/server/index.ts',
        ],
        hideNavigation: '1',
        terminalHeight: '1',
        showSidebar: '0',
        view: 'editor',
      })
    }
    frameBorder="0"
  />

## Next steps

We highly encourage you to check out [the example apps](example-apps.mdx) to learn about how tRPC is installed in your favorite framework.

By default, tRPC will map complex types like `Date` to their JSON-equivalent *(`string` in the case of `Date`)*. If you want to retain the integrity of those types, the easiest way is to [use superjson](/docs/server/data-transformers#using-superjson) as a Data Transformer.

tRPC includes more sophisticated client-side tooling designed for React projects and Next.js.

- [Usage with Next.js](../client/nextjs/introduction.mdx)
- [Usage with Express (server-side)](/docs/server/adapters/express)
- Usage with React (client-side)
  - [React Integration (Recommended) -> `@trpc/tanstack-react-query`](../client/tanstack-react-query/setup.mdx)
  - [React Integration (Classic) -> `@trpc/react-query`](../client/react/introduction.mdx)
  - If you are unsure use `Recommended`

import { YouTubeEmbed } from '@site/src/components/YouTubeEmbed';

### Matt Pocock: Learn tRPC in 5 minutes

<YouTubeEmbed
videoId="S6rcrkbsDI0"
title="Matt Pocock: Learn tRPC in 5 minutes"
/>

### Chris Bautista: Making typesafe APIs easy with tRPC

15 minute video explaining the basics of tRPC and showing an example app.

<YouTubeEmbed
videoId="2LYM8gf184U"
title="Chris Bautista: Making typesafe APIs easy with tRPC"
/>

### How tRPC really works

20 minute video showing how data flows in tRPC and explaining some core concepts. This video uses Next.js, but the concepts apply to any implementation.

### T3: tRPC, Prisma and NextAuth Done Right

45 minute tutorial by Jack Herrington that builds an app with Next.js, tRPC, Prisma, and NextAuth.js.

<YouTubeEmbed
videoId="J1gzN1SAhyM"
title="T3: tRPC, Prisma and NextAuth Done Right"
/>

### DevTools.FM Episode 21

60 minute podcast episode with Alex, the creator of tRPC.

import { InstallSnippet } from '@site/src/components/InstallSnippet';

## Migrating from v10 to v11

For most users, the migration should be quick & straight-forward.

If the below three steps aren't enough, look through the below document for *"rarely breaking"*.

### 1. Install new versions

### 2. If you're using `transformer`s, update your links

See [transformers are moved to links](#transformers-moved) for more information.

### 3. If you're using `@trpc/react-query` update your `@tanstack/react-query`-version

See [react-query-v5](#react-query-v5) for more information.
