## Use tRPC

"Using tRPC" means different things to different people. The goal of this page is to guide you to the right resources based on your goals.

### Becoming productive in an existing tRPC project

- Read the [concepts](./concepts.mdx) page.
- Become familiar with [routers](../server/routers.md), [procedures](../server/procedures.md), [context](../server/context.md), and [middleware](../server/middlewares.md).
- If you are using React, read about [useQuery](../client/react/useQuery.md), [useMutation](../client/react/useMutation.md) and [useUtils](../client/react/useUtils.mdx).

### Creating a new project

Since tRPC can live inside of many different frameworks, you will first need to decide where you want to use it.

On the backend, there are [adapters](../server/adapters-intro.md) for a range of frameworks as well as vanilla Node.js. On the frontend, you can use our [React](../client/react/introduction.mdx) or [Next.js](../client/nextjs/introduction.mdx) integrations, a [third-party integration](../community/awesome-trpc.mdx#frontend-frameworks) for a variety of other frameworks, or the [Vanilla Client](../client/vanilla/setup.mdx), which works anywhere JavaScript runs.

After choosing your stack, you can either scaffold your app using a [template](./example-apps.mdx), or start from scratch using the documentation for your chosen backend and frontend integration.

### Adding tRPC to an existing project

Adding tRPC to an existing project is not significantly different from starting a new project, so the same resources apply. The main challenge is that it can feel difficult to know how to integrate tRPC with your existing application. Here are some tips:

- You don't need to port all of your existing backend logic to tRPC. A common migration strategy is to initially only use tRPC for new endpoints, and only later migrate existing endpoints to tRPC.
- If you're not sure where to start, check the documentation for your backend [adapter](../server/adapters-intro.md) and frontend implementation, as well as the [example apps](./example-apps.mdx).
- If you are looking for some inspiration of how tRPC might look as part of a larger codebase, there are some examples in [Open-source projects using tRPC](../community/awesome-trpc.mdx#-open-source-projects-using-trpc).

## Join our Community

Join us in the [tRPC Discord](https://trpc.io/discord) to share your experiences, ask questions, and get help from the community!

End-to-end typesafe APIs made easy

```
  <img
    src="https://codecov.io/gh/trpc/trpc/branch/next/graph/badge.svg?token=KPPS918B0G"
    alt="codecov"
    className="inline-block"
  />
{' '}

  
{' '}

  <img
    src="https://img.shields.io/github/license/trpc/trpc.svg?label=license&style=flat"
    alt="GitHub License"
    className="inline-block"
  />
{' '}

  <img
    src="https://img.shields.io/github/stars/trpc/trpc.svg?label=🌟%20stars&style=flat"
    alt="GitHub Stars"
    className="inline-block"
  />
```

{/\* Commented out as code in video is out-of-date */}
{/*
Watch Video

```
Alex / KATT and Prisma's Mahmoud Abdelwahab doing a deep dive into tRPC.
```

\*/}
