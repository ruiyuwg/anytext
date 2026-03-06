id: example-apps
title: Example Apps
sidebar\_label: Example Apps
slug: /example-apps
description: Example apps built with tRPC
-----------------------------------------

import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';

:::note
Although it is possible to install the examples using any of listed package managers, the examples are all configured
to use [pnpm](https://pnpm.io) as the script runner, so make sure to [install](https://pnpm.io/installation) it first.

If you wish to use `npm` or `yarn`, make sure to update the relevant `package.json` `scripts` entries in generated example.
:::

***

### Next.js starter with Prisma, E2E testing, and ESLint (Recommended)

```bash
npx create-next-app --example https://github.com/trpc/trpc --example-path examples/next-prisma-starter trpc-prisma-starter
```

```sh
yarn create next-app --example https://github.com/trpc/trpc --example-path examples/next-prisma-starter trpc-prisma-starter
```

```sh
pnpx create-next-app --example https://github.com/trpc/trpc --example-path examples/next-prisma-starter trpc-prisma-starter
```

```sh
bunx create-next-app --example https://github.com/trpc/trpc --example-path examples/next-prisma-starter trpc-prisma-starter
```

```sh
deno init --npm next-app --example https://github.com/trpc/trpc --example-path examples/next-prisma-starter trpc-prisma-starter
```

- Example deploy: [nextjs.trpc.io](https://nextjs.trpc.io)
- [Source code](https://github.com/trpc/examples-next-prisma-starter)

***

### create-t3-turbo - T3 Stack with Expo and Turborepo

```bash
git clone git@github.com:t3-oss/create-t3-turbo.git
```

- [Source code](https://github.com/t3-oss/create-t3-turbo)

***

### Next.js starter with Prisma, E2E testing, ESLint, next-auth, WebSockets, and subscriptions

```bash
npx create-next-app --example https://github.com/trpc/trpc --example-path examples/next-prisma-websockets-starter trpc-prisma-websockets-starter
```

```sh
yarn create next-app --example https://github.com/trpc/trpc --example-path examples/next-prisma-websockets-starter trpc-prisma-websockets-starter
```

```sh
pnpx create-next-app --example https://github.com/trpc/trpc --example-path examples/next-prisma-websockets-starter trpc-prisma-websockets-starter
```

```sh
bunx create-next-app --example https://github.com/trpc/trpc --example-path examples/next-prisma-websockets-starter trpc-prisma-websockets-starter
```

```sh
deno init --npm create-next-app --example https://github.com/trpc/trpc --example-path examples/next-prisma-websockets-starter trpc-prisma-websockets-starter
```

- Example deploy: [websockets.trpc.io](https://websockets.trpc.io)
- [CodeSandbox](https://codesandbox.io/s/github/trpc/trpc/tree/main/examples/next-prisma-websockets-starter?file=/src/pages/index.tsx)
- [Source code](https://github.com/trpc/examples-next-prisma-websockets-starter)

***

### Next.js Todo MVC example with SSG and Prisma

```bash
npx create-next-app --example https://github.com/trpc/trpc --example-path examples/next-prisma-todomvc trpc-todo
```

```sh
yarn create next-app --example https://github.com/trpc/trpc --example-path examples/next-prisma-todomvc trpc-todo
```

```sh
pnpx create-next-app --example https://github.com/trpc/trpc --example-path examples/next-prisma-todomvc trpc-todo
```

```sh
bunx create-next-app --example https://github.com/trpc/trpc --example-path examples/next-prisma-todomvc trpc-todo
```

```sh
deno init --npm next-app --example https://github.com/trpc/trpc --example-path examples/next-prisma-todomvc trpc-todo
```

- Example deploy: [todomvc.trpc.io](https://todomvc.trpc.io)
- [CodeSandbox](https://codesandbox.io/s/github/trpc/trpc/tree/main/examples/next-prisma-todomvc?file=/pages/%5Bfilter%5D.tsx)
- [Source code](https://github.com/trpc/examples-next-prisma-todomvc)

***

### Minimal (Hello world) server and client in Node.js

- [Source code](https://github.com/trpc/trpc/tree/main/examples/minimal)

***

### Vanilla standalone server and Node.js procedure calls

- [CodeSandbox](https://codesandbox.io/s/github/trpc/trpc/tree/main/examples/standalone-server)
- [Source code](https://github.com/trpc/trpc/tree/main/examples/standalone-server)

***

### Express server and Node.js procedure calls

- [CodeSandbox](https://codesandbox.io/s/github/trpc/trpc/tree/main/examples/express-server)
- [Source code](https://github.com/trpc/trpc/tree/main/examples/express-server)

***

### Fastify server with WebSockets and Node.js procedure calls

- [CodeSandbox](https://codesandbox.io/s/github/trpc/trpc/tree/main/examples/fastify-server)
- [Source code](https://github.com/trpc/trpc/tree/main/examples/fastify-server)

***

### SvelteKit with Prisma

- [CodeSandbox](https://codesandbox.io/s/github/icflorescu/trpc-sveltekit-example)
- [Source code](https://github.com/icflorescu/trpc-sveltekit-example)

***

### TanStack Start (Alpha)

- [Source code](https://github.com/trpc/trpc/tree/main/examples/tanstack-start)

***

### Sign-In With Ethereum Authentication With Express

```bash
git clone git@github.com:codingwithmanny/trpc-siwe-monorepo.git
```

- [Source code](https://github.com/codingwithmanny/trpc-siwe-monorepo)

***

### Separate backend & frontend repositories

- [Source code - BE repo (Express.js)](https://github.com/mkosir/trpc-api-boilerplate)
- [Source code - FE repo (Vite)](https://github.com/mkosir/trpc-fe-boilerplate-vite)

***

***

id: getting-started
title: Getting Started
sidebar\_label: Getting Started
slug: /getting-started
----------------------

## A quick look at tRPC

For a quick video overview of tRPC's concepts, check out the videos below:

- [tRPC in 100 seconds](https://www.youtube.com/watch?v=0DyAyLdVW0I)
- [tRPC in 5 minutes](https://www.youtube.com/watch?v=S6rcrkbsDI0)
- [tRPC in 15 minutes](https://www.youtube.com/watch?v=2LYM8gf184U)

## Give tRPC a try

The fastest way to try tRPC is in an online REPL. Here are some options you can try out:

- [Minimal Example](https://stackblitz.com/github/trpc/trpc/tree/main/examples/minimal?file=server%2Findex.ts\&file=client%2Findex.ts\&view=editor) - a minimal Node.js http server, and a client that calls a function on the server and logs the request to the console.
- [Minimal Next.js Example](https://stackblitz.com/github/trpc/trpc/tree/main/examples/next-minimal-starter?file=src%2Fpages%2Fapi%2Ftrpc%2F[trpc].ts\&file=src%2Fpages%2Findex.tsx) - the smallest possible Next.js app that uses tRPC. It has a single endpoint that returns a string, and a page that calls that endpoint and displays the result.

If you prefer to get started in your local environment, you can use one of our [example apps](./example-apps.mdx) as a starter project that you can experiment with locally.
