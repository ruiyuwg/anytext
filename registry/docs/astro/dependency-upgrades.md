## Dependency Upgrades

[Section titled “Dependency Upgrades”](#dependency-upgrades)

Any major upgrades to Astro’s dependencies may cause breaking changes in your project.

### Node 22

[Section titled “Node 22”](#node-22)

[Implementation PR: feat!: drop node 18 and 20 (#14427)](https://github.com/withastro/astro/pull/14427)

Node 18 reached its End of Life in March 2025 and Node 20 is scheduled to reach its End of Life in April 2026.

Astro v6.0 drops Node 18 and Node 20 support entirely so that all Astro users can take advantage of Node’s more modern features.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do)

Check that both your development environment and your deployment environment are using **Node `22.12.0` or higher**.

1. Check your local version of Node using:

   ```sh
   node -v
   ```

2. Check your [deployment environment’s](/en/guides/deploy/) own documentation to verify that they support Node 22.

   You can specify Node `22.12.0` for your Astro project either in a dashboard configuration setting or a `.nvmrc` file.

   .nvmrc

   ```bash
   22.12.0
   ```

### Vite 7.0

[Section titled “Vite 7.0”](#vite-70)

[Implementation PR: feat: update vite (#14445)](https://github.com/withastro/astro/pull/14445)

Astro v6.0 upgrades to Vite v7.0 as the development server and production bundler.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-1)

If you are using Vite-specific plugins, configuration, or APIs, check the [Vite migration guide](https://vite.dev/guide/migration) for their breaking changes and upgrade your project as needed.

Using [Astro’s `getViteConfig()` helper](/en/guides/testing/#vitest) requires at least Vitest v3.2 or v4.1 beta 5.

### Vite Environment API

[Section titled “Vite Environment API”](#vite-environment-api)

[Implementation PR: feat: integrate vite environments (#14306)](https://github.com/withastro/astro/pull/14306)

Astro v6.0 introduces significant changes to how Astro manages different runtime environments (client, server, and prerender) after an internal refactor to use [Vite’s new Environments API](https://vite.dev/guide/api-environment).

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-2)

Integration and adapter maintainers should pay special attention to changes affecting these parts of the Integration API and Adapter API (full details included below with other breaking changes to these APIs):

- [Rollup output file name config path](#changed-rollup-output-file-name-config-path-vite-config)
- [integration hooks and HMR access patterns](#changed-integration-hooks-and-hmr-access-patterns-integration-api)
- [`SSRManifest` structure](#changed-ssrmanifest-interface-structure-adapter-api)
- [generating routes with `RouteData`](#removed-routedatagenerate-adapter-api)
- [routes with percent-encoded percent signs (e.g. `%25`)](#removed-percent-encoding-in-routes)
- [`astro:ssr-manifest` virtual module](#removed-astrossr-manifest-virtual-module-integration-api)
- [`NodeApp` from `astro/app/node`](#deprecated-nodeapp-from-astroappnode-adapter-api)
- [`loadManifest()` and `loadApp()` from `astro/app/node`](#deprecated-loadmanifest-and-loadapp-from-astroappnode-adapter-api)
- [`createExports()` and `start()`](#deprecated-createexports-and-start-adapter-api)

### Zod 4

[Section titled “Zod 4”](#zod-4)

Astro v6.0 upgrades to Zod 4, a major dependency update that may require changes to custom Zod schemas in your project.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-3)

If you have custom Zod schemas in your `content.config.ts` or other configuration files, you’ll need to update them for Zod 4. Refer to the [Zod migration guide](https://zod.dev/v4/changelog) for detailed changes in the Zod API.

Notably, [many `string()` formats have been deprecated](https://zod.dev/v4/changelog#deprecates-email-etc) (e.g. `z.string().email()`, `z.string.url()`), and their APIs have been moved to the top-level `z` namespace. You may need to update how you validate form input for your Astro Actions:

src/actions/index.ts

```diff
-email: z.string().email(),
+email: z.email(),
```

Additionally, Zod has made some [changes to handling error messages](https://zod.dev/v4/changelog#error-customization) and has dropped support for a custom `errorsMap` which was useful to redefine or translate your error messages. You may need to update any custom error messages:

src/actions/index.ts

```diff
-z.string().min(5, { message: "Too short." });
+z.string().min(5, { error: "Too short." });
```

Also, if you use [`.default()` with transforms](https://zod.dev/v4/changelog#default-updates), you may need to update your schemas. In Zod 4, default values must match the output type (after transforms), not the input type. The default value short-circuits parsing when the input is `undefined`:

src/content.config.ts

```diff
import { z } from 'astro/zod';


const blog = defineCollection({
  schema: z.object({
    -// Zod 3: default matched input type (string)
    views: z.string().transform(Number).default("0"),
    +// Zod 4: default must match output type (number)
    views: z.string().transform(Number).default(0),
  })
});
```

For the old behavior where defaults are parsed, use the new `.prefault()` method.

These are only some of the many changes upgrading from Zod 3 to Zod 4. If you encounter any issues with your Zod schemas after upgrading to Astro 6, please consult the [Zod 4 changelog](https://zod.dev/v4/changelog) for complete upgrade guidance.

Additionally, a [community codemod](https://github.com/nicoespeon/zod-v3-to-v4), which can potentially automate some of these changes when migrating from Zod 3 to Zod 4, is also available.

You can ensure you’re the same version of Zod that Astro uses internally by [importing Zod from `astro/zod`](#deprecated-astroschema-and-z-from-astrocontent).

```ts
import { z } from 'astro/zod';
```

See more about [the `astro/zod` module](/en/reference/modules/astro-zod/).

### Shiki 4.0

[Section titled “Shiki 4.0”](#shiki-40)

[Implementation PR: chore(deps): update shiki to v4 (#15726)](https://github.com/withastro/astro/pull/15726)

Astro v6.0 upgrades to Shiki v4.0 for syntax highlighting.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-4)

If you are using Shiki-specific APIs, check the [Shiki migration guide](https://shiki.style/blog/v4) for their breaking changes and upgrade your project as needed.

### Official Astro integrations

[Section titled “Official Astro integrations”](#official-astro-integrations)

All of [Astro’s official server adapters](/en/guides/on-demand-rendering/#server-adapters) have also updated to a new major version to accompany the upgrade to Vite v7.0 with Vite’s Environment API as the development server and production bundler.

In particular, Astro’s Cloudflare adapter has undergone significant changes, and breaking changes to your existing Cloudflare setup are expected.

See the [Cloudflare adapter upgrade instructions](/en/guides/integrations-guide/cloudflare/#upgrading-to-v13-and-astro-6) for detailed migration guidance.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-5)

If you are using an Astro adapter for on-demand rendering or other platform-specific features, please check your specific adapter’s changelog for upgrade guidance:

- [`@astrojs/cloudflare` CHANGELOG](https://github.com/withastro/astro/blob/next/packages/integrations/cloudflare/CHANGELOG.md)
- [`@astrojs/netlify` CHANGELOG](https://github.com/withastro/astro/blob/next/packages/integrations/netlify/CHANGELOG.md)
- [`@astrojs/node` CHANGELOG](https://github.com/withastro/astro/blob/next/packages/integrations/node/CHANGELOG.md)
- [`@astrojs/vercel` CHANGELOG](https://github.com/withastro/astro/blob/next/packages/integrations/vercel/CHANGELOG.md)
