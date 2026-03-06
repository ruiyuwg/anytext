## Why is tRPC on such a high version already?

When tRPC started and had very few users and we often iterated on the API design whilst being strict with semver.

- The first 9 versions of tRPC were released in the first 8 months of the project.
- [Version 10](https://trpc.io/blog/announcing-trpc-10) which we released 14 months after v9 should be seen as the real "version 2" of tRPC where we did any fundamental changes to the API decisions. *(2 is 10 in binary, amirite?)*

We expect the API to be stable now and are planning to release codemods for any breaking changes in the future, just like we did with the v9->v10 upgrade.

id: further-reading
title: Further Reading
sidebar\_label: Further Reading
slug: /further-reading

id: rpc
title: HTTP RPC Specification
sidebar\_label: HTTP RPC Specification
slug: /rpc

id: concepts
title: Concepts
sidebar\_label: Concepts
slug: /concepts

id: example-apps
title: Example Apps
sidebar\_label: Example Apps
slug: /example-apps
description: Example apps built with tRPC

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

### Minimal (Hello world) server and client in Node.js

- [Source code](https://github.com/trpc/trpc/tree/main/examples/minimal)

### Express server and Node.js procedure calls

- [CodeSandbox](https://codesandbox.io/s/github/trpc/trpc/tree/main/examples/express-server)
- [Source code](https://github.com/trpc/trpc/tree/main/examples/express-server)

### SvelteKit with Prisma

- [CodeSandbox](https://codesandbox.io/s/github/icflorescu/trpc-sveltekit-example)
- [Source code](https://github.com/icflorescu/trpc-sveltekit-example)

### Sign-In With Ethereum Authentication With Express

```bash
git clone git@github.com:codingwithmanny/trpc-siwe-monorepo.git
```

- [Source code](https://github.com/codingwithmanny/trpc-siwe-monorepo)

id: getting-started
title: Getting Started
sidebar\_label: Getting Started
slug: /getting-started

id: introduction
title: tRPC
hide\_title: true
sidebar\_label: Introduction
slug: /
author: Alex / KATT 🐱
author\_url: https://twitter.com/alexdotjs
author\_image\_url: https://avatars1.githubusercontent.com/u/459267?s=460\&v=4

id: quickstart
title: Quickstart
sidebar\_label: Quickstart
slug: /quickstart
description: Learn how to quickly get started and setup tRPC

id: videos-and-community-resources
title: Videos and Community Resources
sidebar\_label: Videos & Community Resources
slug: /videos-and-community-resources

id: migrate-from-v10-to-v11
title: Migrate from v10 to v11
sidebar\_label: Migrate from v10 to v11
slug: /migrate-from-v10-to-v11

id: aws-lambda
title: AWS Lambda + API Gateway Adapter
sidebar\_label: AWS Lambda + API Gateway
slug: /server/adapters/aws-lambda

id: express
title: Express Adapter
sidebar\_label: Express
slug: /server/adapters/express

id: fastify
title: Fastify Adapter
sidebar\_label: Fastify
slug: /server/adapters/fastify

id: fetch
title: Fetch / Edge Runtimes Adapter
sidebar\_label: Fetch / Edge Runtimes
slug: /server/adapters/fetch

id: nextjs
title: Next.js Adapter
sidebar\_label: Next.js
slug: /server/adapters/nextjs

id: standalone
title: Standalone Adapter
sidebar\_label: Standalone
slug: /server/adapters/standalone

id: adapters-intro
title: Adapters
sidebar\_label: Adapters
slug: /server/adapters

id: authorization
title: Authorization
sidebar\_label: Authorization
slug: /server/authorization

id: caching
title: Response Caching
sidebar\_label: Response Caching
slug: /server/caching

id: context
title: Context
sidebar\_label: Context
slug: /server/context

id: data-transformers
title: Data Transformers
sidebar\_label: Data Transformers
slug: /server/data-transformers

id: error-formatting
title: Error Formatting
sidebar\_label: Error Formatting
slug: /server/error-formatting

id: error-handling
title: Error Handling
sidebar\_label: Error Handling
slug: /server/error-handling

id: merging-routers
title: Merging Routers
sidebar\_label: Merging Routers
slug: /server/merging-routers

id: metadata
title: Metadata
sidebar\_label: Metadata
slug: /server/metadata

id: middlewares
title: Middlewares
sidebar\_label: Middlewares
slug: /server/middlewares

id: non-json-content-types
title: Non-JSON Content Types
sidebar\_label: Non-JSON Inputs (FormData, File, Blob)
slug: /server/non-json-content-types

id: procedures
title: Define Procedures
sidebar\_label: Define Procedures
slug: /server/procedures

id: routers
title: Define Routers
sidebar\_label: Define Routers
slug: /server/routers

id: server-side-calls
title: Server Side Calls
sidebar\_label: Server Side Calls
slug: /server/server-side-calls

id: subscriptions
title: Subscriptions
sidebar\_label: Subscriptions
slug: /server/subscriptions

id: validators
title: Input & Output Validators
sidebar\_label: Input & Output Validators
slug: /server/validators
