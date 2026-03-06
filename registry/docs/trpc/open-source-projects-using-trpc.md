## 🏁 Open-source projects using tRPC

| Description                                                                                                                                    | Link                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| [Cal.com](https://cal.com) - Scheduling infrastructure                                                                                         | https://github.com/calcom/cal.com                   |
| [Skill Recordings](https://github.com/skillrecordings/products) - Hosting courses by Matt Pocock, Kent C Dodds, Dan Abramov, and many others   | https://github.com/skillrecordings/products         |
| [SST](https://sst.dev) - A framework that makes it easy to build serverless apps.                                                              | https://github.com/serverless-stack/sst             |
| [Beam](https://planetscale.com/blog/introducing-beam) - A simple message board for your organization or project.                               | https://github.com/planetscale/beam                 |
| [Rallly](https://rallly.co) - Self-hostable doodle poll alternative.                                                                           | https://github.com/lukevella/rallly                 |
| [Hilde](http://hilde.gg) - Match-making app for games like foosball, air hockey and similar                                                    | https://github.com/nehalist/hilde                   |
| [Answer Overflow](https://www.answeroverflow.com/) - Discord bot that indexes help channel content into Google                                 | https://github.com/AnswerOverflow/AnswerOverflow    |
| [Prisma Editor](https://prisma-editor.bahumaish.app/) - Powerful tool to visualize and edit Prisma Schema                                      | https://github.com/mohammed-bahumaish/prisma-editor |
| [Saleor Apps](https://saleor.io/) - Official apps/integrations for Saleor Commerce                                                             | https://github.com/saleor/apps                      |
| [Rao Pics App](https://github.com/rao-pics/rao-pics) - Visit Photo on any device. Supported MacOS/Windows                                      | https://github.com/rao-pics/rao-pics                |
| [Tianji](https://tianji.msgbyte.com/) - All-in-One Insight Hub. Tianji = Website Analytics + Uptime Monitor + Server Status                    | https://github.com/msgbyte/tianji                   |
| [Workplacify](https://workplacify.com/) - Desk scheduling software, for hybrid and in-office teams                                             | https://workplacify.com/                            |
| [Dotfyle](https://dotfyle.com/) - Discover and share Neovim plugins                                                                            | https://dotfyle.com/                                |
| [ConvoForm](https://www.convoform.com/?utm_source=github\&utm_medium=social\&utm_campaign=trpc) - Create your own AI-Powered conversational form | https://www.convoform.com/                          |

import Content from '@site/unversioned/\_contributing.mdx';

import Content from '@site/unversioned/\_love.mdx';

import Content from '@site/unversioned/\_sponsors.mdx';

Collection of frequently asked questions with ideas on how to troubleshoot & resolve them.

Feel free to contribute to this page with improvements or create a new discussion [on GitHub](https://github.com/trpc/trpc/discussions) if you have a question that isn't answered here. Also, have look through the [GitHub Discussions](https://github.com/trpc/trpc/discussions) and our [Discord](https://trpc.io/discord) if your question isn't answered here.

## It doesn't work! I'm getting `any` everywhere

- Make sure you have no type errors in your code
- Make sure you have `"strict": true` in your `tsconfig.json`
- Make sure your `@trpc/*`-versions match in your `package.json`
- Make sure you are using the TypeScript-version required by tRPC (`>=5.7.2`)
- Make sure your editor is using the same TypeScript version as your `package.json`

### VSCode settings

Add these settings to your `.vscode/settings.json` in your project root to make sure your editor is using the same TypeScript version as your `package.json`:

```json title=".vscode/settings.json"
{
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true
}
```

We highly recommend committing this file to your repo so your colleagues also get the same experience.

## How do I make a middleware change the type of my `Context`?

See [Context Extension](/docs/server/middlewares#context-extension).

## Is tRPC production ready?

Yes. tRPC is very stable and is used by thousands of companies, even big ones like [Netflix](https://netflix.com) & [Pleo](https://pleo.io) are using tRPC in production.

## Why doesn't tRPC work in my monorepo?

This is difficult question to answer, but since tRPC doesn't have any build step, it's unlikely that the problem is on tRPC's side.

Here are some things to check:

- Make sure you have the same version of all `@trpc/*` across all your project
- Make sure you have `"strict": true` in all your `tsconfig.json`s
- Make sure you have no type errors in your app
- In the case that you have a dedicated server and client `tsconfig.json` files without a bundled server monorepo package, make sure you have `"paths": [...]` in your client `tsconfig.json` like your server `tsconfig.json`,so that the client can find the same file.

You can also have a look at our [Awesome tRPC](/docs/community/awesome-trpc)-collection to find several open-source projects that are using tRPC in a monorepo.

## Is a monorepo mandatory?

No, a monorepo is not mandatory but you will lose some of the benefits of using tRPC if you don't use it since you will lose guarantees that your client and server works together.

One way you can leverage tRPC is to publish a private npm package with the types of your backend repo and consume them in your frontend repo.

> *Related discussion: https://github.com/trpc/trpc/discussions/1860*

## Can I dynamically return a different output depending on what input I send?

No, not currently, in order for tRPC to do that automatically, we need something called "Higher kinded types" which is not yet supported in TypeScript.

> *Related discussion: https://github.com/trpc/trpc/discussions/2150*

## Can I apply a middleware to a full router?

No, but you can use [base procedures](/docs/server/procedures#reusable-base-procedures) instead, which offers more flexibility than if this was done on a per-router-level.

## Does tRPC work with Next.js 13 App Layouts & RSC?

Yes, tRPC works with Next.js 13 App Layouts & React Server Components, but we have not built any official examples of it yet.

For more information, you can read & follow [this issue](https://github.com/trpc/trpc/issues/3297) where we've referenced a few examples of it.

## Am I safe with using features marked as as `unstable_`?

**tl;dr**: Yes!

If you encounter a feature in tRPC that is marked as `unstable_` it means that the API is unstable and might change in minor version bumps, but:

- Specifics of the implementation might change in minor changes - its name and options might change
- If it exists in tRPC it's already used it in production
- We very much encourage you to use it
- If any changes are done to `unstable_`-feature, they will be included in the release notes (& you'll see type errors)
- Please report any suggestion on the API design or issues on [github.com/trpc/trpc/issues](https://github.com/trpc/trpc/issues) or in the `#🧪-unstable-experimental-features` on [our Discord](https://trpc.io/discord)

## Am I safe with using features marked as as `experimental_`?

If you encounter a feature in tRPC that is marked as `experimental_` it means that the API is unstable and is very likely to change during any bump of tRPC.

- Wide range of the feature and its usage might change
- The feature might not be well-tested
- We might drop the feature entirely
- It's up to you to read the latest docs and upgrade without a guided migration path
- Changes might not be well-documented in the release notes
- Bugs are not guaranteed to be fixed

We do, however, love input! Please report any suggestion on the API design or issues in the `#🧪-unstable-experimental-features` on [our Discord](https://trpc.io/discord).

## Is tRPC strict with semver?

Yes, tRPC is very strict with [semantic versioning](https://semver.org/) and we will never introduce breaking changes in a minor version bump.

With this, we also consider changes on `export`ed TypeScript `type`s as major changes, apart from ones marked as `@internal` in the JSDoc.

## Why is tRPC on such a high version already?

When tRPC started and had very few users and we often iterated on the API design whilst being strict with semver.

- The first 9 versions of tRPC were released in the first 8 months of the project.
- [Version 10](https://trpc.io/blog/announcing-trpc-10) which we released 14 months after v9 should be seen as the real "version 2" of tRPC where we did any fundamental changes to the API decisions. *(2 is 10 in binary, amirite?)*

We expect the API to be stable now and are planning to release codemods for any breaking changes in the future, just like we did with the v9->v10 upgrade.

***

## Anything else you want to know?

Please write a feature request on [GitHub](https://github.com/trpc/trpc/issues), write in [GitHub Discussions](https://github.com/trpc/trpc/discussions), or [Discord](https://trpc.io/discord). You're also free to suggest improvement of this page or any other page using the "Edit this page" button at the bottom of the page.

## Who is this for?

- tRPC is for full-stack typescripters. It makes it dead easy to write "endpoints", which you can safely use in your app.
- It's designed for monorepos, as you need to export/import the type definitions from/to your server.
- If you already work in a team where languages are mixed or have third-party consumers over whom you have no control, you should create a language-agnostic [GraphQL](https://graphql.org/)-API.
