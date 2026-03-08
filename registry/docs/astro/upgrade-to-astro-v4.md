# Upgrade to Astro v4

> How to upgrade your project to the latest version of Astro (v4.0).

This guide will help you migrate from Astro v3 to Astro v4.

Need to upgrade an older project to v3? See our [older migration guide](/en/guides/upgrade-to/v3/).

Need to see the v3 docs? Visit this [older version of the docs site (unmaintained v3.6 snapshot)](https://web.archive.org/web/20231203051122/https://docs.astro.build/en/getting-started/).

## Upgrade Astro

[Section titled “Upgrade Astro”](#upgrade-astro)

Update your project’s version of Astro and all official integrations to the latest versions using your package manager.

- npm

  ```shell
  # Upgrade Astro and official integrations together
  npx @astrojs/upgrade
  ```

- pnpm

  ```shell
  # Upgrade Astro and official integrations together
  pnpm dlx @astrojs/upgrade
  ```

- Yarn

  ```shell
  # Upgrade Astro and official integrations together
  yarn dlx @astrojs/upgrade
  ```

You can also [upgrade your Astro integrations manually](/en/guides/integrations-guide/#manual-upgrading) if needed, and you may also need to upgrade other dependencies in your project.

Need to continue?

After upgrading Astro to the latest version, you may not need to make any changes to your project at all!

But, if you notice errors or unexpected behavior, please check below for what has changed that might need updating in your project.

Astro v4.0 includes [potentially breaking changes](#breaking-changes), as well as the [removal of some previously deprecated features](#previously-deprecated-features-now-removed).

If your project doesn’t work as expected after upgrading to v4.0, check this guide for an overview of all breaking changes and instructions on how to update your codebase.

See [the changelog](https://github.com/withastro/astro/blob/main/packages/astro/CHANGELOG.md) for full release notes.

## Astro v4.0 Experimental Flags Removed

[Section titled “Astro v4.0 Experimental Flags Removed”](#astro-v40-experimental-flags-removed)

Remove the `devOverlay` experimental flag and move any `i18n` config to the top level in `astro.config.mjs`:

astro.config.mjs

```diff
import { defineConfig } from 'astro/config';


export default defineConfig({
  experimental: {
-    devOverlay: true,
-    i18n: {
-      locales: ["en", "fr", "pt-br", "es"],
-      defaultLocale: "en",
-    }
  },
+  i18n: {
+    locales: ["en", "fr", "pt-br", "es"],
+    defaultLocale: "en",
+  },
})
```

These configurations, `i18n` and the renamed `devToolbar`, are now available in Astro v4.0.

Read more about these two exciting features and more in [the v4.0 Blog post](https://astro.build/blog/astro-4/)!

## Upgrades

[Section titled “Upgrades”](#upgrades)

Any major upgrades to Astro’s dependencies may cause breaking changes in your project.

### Upgraded: Vite 5.0

[Section titled “Upgraded: Vite 5.0”](#upgraded-vite-50)

In Astro v3.0, Vite 4 was used as the development server and production bundler.

Astro v4.0 upgrades from Vite 4 to Vite 5.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do)

If you are using Vite-specific plugins, configuration, or APIs, check the [Vite migration guide](https://vite.dev/guide/migration) for their breaking changes and upgrade your project as needed. There are no breaking changes to Astro itself.

### Upgraded: unified, remark, and rehype dependencies

[Section titled “Upgraded: unified, remark, and rehype dependencies”](#upgraded-unified-remark-and-rehype-dependencies)

In Astro v3.x, unified v10 and its related compatible remark/rehype packages were used to process Markdown and MDX.

Astro v4.0 upgrades [unified to v11](https://github.com/unifiedjs/unified/releases/tag/11.0.0) and the other remark/rehype packages to the latest version.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-1)

If you used custom remark/rehype packages, update all of them to the latest version using your package manager to ensure they support unified v11. The packages you are using can be found in `astro.config.mjs`.

There should not be any significant breaking changes if you use actively updated packages, but some packages may not yet be compatible with unified v11. Visually inspect your Markdown/MDX pages before deploying to ensure your site is functioning as intended.

## Breaking Changes

[Section titled “Breaking Changes”](#breaking-changes)

The following changes are considered breaking changes in Astro. Breaking changes may or may not provide temporary backwards compatibility, and all documentation is updated to refer to only the current, supported code.

If you need to refer to the documentation for a v3.x project, you can browse this [(unmaintained) snapshot of the docs from before v4.0 was released](https://web.archive.org/web/20231203051122/https://docs.astro.build/en/getting-started/).

### Renamed: `entrypoint` (Integrations API)

[Section titled “Renamed: entrypoint (Integrations API)”](#renamed-entrypoint-integrations-api)

In Astro v3.x, the property of the `injectRoute` integrations API that specified the route entry point was named `entryPoint`.

Astro v4.0 renames this property to `entrypoint` to be consistent with other Astro APIs. The `entryPoint` property is deprecated but will continue to work and logs a warning prompting you to update your code.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-2)

If you have integrations that use the `injectRoute` API, rename the `entryPoint` property to `entrypoint`. If you’re a library author who wants to support both Astro 3 and 4, you can specify both `entryPoint` and `entrypoint`, in which case, a warning will not be logged.

```diff
injectRoute({
  pattern: '/fancy-dashboard',
-  entryPoint: '@fancy/dashboard/dashboard.astro'
+  entrypoint: '@fancy/dashboard/dashboard.astro'
});
```

### Changed: `app.render` signature in Integrations API

[Section titled “Changed: app.render signature in Integrations API”](#changed-apprender-signature-in-integrations-api)

In Astro v3.0, the `app.render()` method accepted `routeData` and `locals` as separate, optional arguments.

Astro v4.0 changes the `app.render()` signature. These two properties are now available in a single object. Both the object and these two properties are still optional.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-3)

If you are maintaining an adapter, the current signature will continue to work until the next major version. To migrate to the new signature, pass `routeData` and `locals` as properties of an object instead of as multiple independent arguments.

```diff
-app.render(request, routeData, locals)
+app.render(request, { routeData, locals })
```

### Changed: adapters must now specify supported features

[Section titled “Changed: adapters must now specify supported features”](#changed-adapters-must-now-specify-supported-features)

In Astro v3.x, adapters were not required to specify the features they support.

Astro v4.0 requires adapters to pass the `supportedAstroFeatures{}` property to specify a list of features they support. This property is no longer optional.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-4)

Adapter authors need to pass the `supportedAstroFeatures{}` option to specify a list of features they support.

my-adapter.mjs

```diff
export default function createIntegration() {
  return {
    name: '@matthewp/my-adapter',
    hooks: {
      'astro:config:done': ({ setAdapter }) => {
        setAdapter({
          name: '@matthewp/my-adapter',
          serverEntrypoint: '@matthewp/my-adapter/server.js',
+          supportedAstroFeatures: {
+              staticOutput: 'stable'
+          }
        });
      },
    },
  };
}
```

### Removed: Shiki language `path` property

[Section titled “Removed: Shiki language path property”](#removed-shiki-language-path-property)

In Astro v3.x, a Shiki language passed to `markdown.shikiConfig.langs` was automatically converted to a Shikiji-compatible language. Shikiji is the internal tooling used by Astro for syntax highlighting.

Astro v4.0 removes support for the `path` property of a Shiki language, which was confusing to configure. It is replaced by an import which can be passed to `langs` directly.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-5)

The language JSON file should be imported and passed to the option instead.

astro.config.js

```diff
 +import customLang from './custom.tmLanguage.json'


export default defineConfig({
  markdown: {
    shikiConfig: {
      langs: [
-       { path: '../../custom.tmLanguage.json' },
+       customLang,
      ],
    },
  },
})
```

## Deprecated

[Section titled “Deprecated”](#deprecated)

The following deprecated features are no longer supported and are no longer documented. Please update your project accordingly.

Some deprecated features may temporarily continue to function until they are completely removed. Others may silently have no effect, or throw an error prompting you to update your code.

### Deprecated: `handleForms` for View Transitions `submit` events

[Section titled “Deprecated: handleForms for View Transitions submit events”](#deprecated-handleforms-for-view-transitions-submit-events)

In Astro v3.x, projects using the `<ViewTransitions />` component were required to opt-in to handling `submit` events for `form` elements. This was done by passing a `handleForms` prop.

Astro v4.0 handles `submit` events for `form` elements by default when `<ViewTransitions />` are used. The `handleForms` prop has been deprecated and no longer has any effect.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-6)

Remove the `handleForms` property from your `ViewTransitions` component. It is no longer necessary.

src/pages/index.astro

```astro
---
import { ViewTransitions } from "astro:transitions";
---
<html>
  <head>
    <ViewTransitions handleForms />
  </head>
  <body>
    <!-- stuff here -->
  </body>
</html>
```

To opt out of `submit` event handling, add the `data-astro-reload` attribute to relevant `form` elements.

src/components/Form.astro

```astro
<form action="/contact" data-astro-reload>
  <!-- -->
</form>
```

## Previously deprecated features now removed

[Section titled “Previously deprecated features now removed”](#previously-deprecated-features-now-removed)

The following deprecated features have now been entirely removed from the code base and can no longer be used. Some of these features may have continued to work in your project even after deprecation. Others may have silently had no effect.

Projects now containing these removed features will be unable to build, and there will no longer be any supporting documentation prompting you to remove these features.

### Removed: returning simple objects from endpoints

[Section titled “Removed: returning simple objects from endpoints”](#removed-returning-simple-objects-from-endpoints)

In Astro v3.x, returning simple objects from endpoints was deprecated, but was still supported to maintain compatibility with Astro v2. A `ResponseWithEncoding` utility was also provided to ease the migration.

Astro v4.0 removes support for simple objects and requires endpoints to always return a `Response`. The `ResponseWithEncoding` utility is also removed in favor of a proper `Response` type.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-7)

Update your endpoints to return a `Response` object directly.

```diff
export async function GET() {
  -return { body: { "title": "Bob's blog" }};
  +return new Response(JSON.stringify({ "title": "Bob's blog" }));
}
```

To remove usage of `ResponseWithEncoding`, refactor your code to use an `ArrayBuffer` instead:

```diff
export async function GET() {
  const file = await fs.readFile('./bob.png');
  -return new ResponseWithEncoding(file.toString('binary'), undefined, 'binary');
  +return new Response(file.buffer);
}
```

### Removed: `build.split` and `build.excludeMiddleware`

[Section titled “Removed: build.split and build.excludeMiddleware”](#removed-buildsplit-and-buildexcludemiddleware)

In Astro v3.0, `build.split` and `build.excludeMiddleware` build config options were deprecated and replaced with [adapter configuration options](/en/reference/adapter-reference/#adapter-features) to perform the same tasks.

Astro v4.0 removes these properties entirely.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-8)

If you are using the deprecated `build.split` or `build.excludeMiddleware`, you must now remove them as these no longer exist.

Please see the v3 migration guide to [update these deprecated middleware properties](/en/guides/upgrade-to/v3/#deprecated-buildexcludemiddleware-and-buildsplit) with adapter configurations.

### Removed: `Astro.request.params`

[Section titled “Removed: Astro.request.params”](#removed-astrorequestparams)

In Astro v3.0, the `Astro.request.params` API was deprecated, but preserved for backwards compatibility.

Astro v4.0 removes this option entirely.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-9)

Update all occurrences to [`Astro.params`](/en/reference/api-reference/#params), which is the supported replacement.

```diff
-const { id } = Astro.request.params;
+const { id } = Astro.params;
```

### Removed: `markdown.drafts`

[Section titled “Removed: markdown.drafts”](#removed-markdowndrafts)

In Astro v3.0, using `markdown.drafts` to control the building of draft posts was deprecated.

Astro v4.0 removes this option entirely.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-10)

If you are using the deprecated `markdown.drafts`, you must now remove it as it no longer exists.

To continue to mark some pages in your project as drafts, [migrate to content collections](/en/guides/content-collections/) and manually filter out pages with the `draft: true` frontmatter property instead.

### Removed: `getHeaders()`

[Section titled “Removed: getHeaders()”](#removed-getheaders)

In Astro v3.0, the `getHeaders()` Markdown export was deprecated and replaced with `getHeadings()`.

Astro v4.0 removes this option entirely.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-11)

If you are using the deprecated `getHeaders()`, you must now remove it as it no longer exists. Replace any instances with `getHeadings()`, which is the supported replacement.

```diff
const posts = await Astro.glob('../content/blog/*.mdx');
-const firstPostHeadings = posts.at(0).getHeaders();
+const firstPostHeadings = posts.at(0).getHeadings();
```

### Removed: using `rss` in `getStaticPaths()`

[Section titled “Removed: using rss in getStaticPaths()”](#removed-using-rss-in-getstaticpaths)

In Astro v3.0, using the deprecated `rss` helper in `getStaticPaths()` would throw an error.

Astro v4.0 removes this helper entirely.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-12)

If you are using the unsupported method for generating RSS feeds, you must now use the [`@astrojs/rss` integration](/en/recipes/rss/) for a complete RSS setup.

### Removed: lowercase HTTP method names

[Section titled “Removed: lowercase HTTP method names”](#removed-lowercase-http-method-names)

In Astro v3.0, using lowercase HTTP request method names (`get`, `post`, `put`, `all`, `del`) was deprecated.

Astro v4.0 removes support for lowercase names entirely. All HTTP request methods must now be written using uppercase.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-13)

If you are using the deprecated lowercase names, you must now replace them with their uppercase equivalents.

Please see the v3 migration guide [for guidance using uppercase HTTP request methods](/en/guides/upgrade-to/v3/#changed-http-request-methods-case).

### Removed: 301 redirects when missing a `base` prefix

[Section titled “Removed: 301 redirects when missing a base prefix”](#removed-301-redirects-when-missing-a-base-prefix)

In Astro v3.x, the Astro preview server returned a 301 redirect when accessing public directory assets without a base path.

Astro v4.0 returns a 404 status without a base path prefix for public directory assets when the preview server is running, matching the behavior of the dev server.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-14)

When using the Astro preview server, all of your static asset imports and URLs from the public directory must have [the base value](/en/reference/configuration-reference/#base) prefixed to the path.

The following example shows the `src` attribute required to display an image from the public folder when `base: '/docs'` is configured:

src/pages/index.astro

```astro
// To access public/images/my-image.png:


<img src="/docs/images/my-image.png" alt="">
```

### Removed: `astro/client-image` auto-conversion

[Section titled “Removed: astro/client-image auto-conversion”](#removed-astroclient-image-auto-conversion)

In Astro v3.x, the `astro/client-image` type (used for the deprecated image integration) was removed but was auto-converted to the default Astro type `astro/client` if found in your `env.d.ts` file.

Astro v4.0 ignores `astro/client-image` and will no longer update `env.d.ts` for you automatically.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-15)

If you had types configured for `@astrojs/image` in `src/env.d.ts` and upgrading to v3.0 did not automatically convert the type for you, replace the `astro/client-image` type manually with `astro/client`.

src/env.d.ts

```diff
  -/// <reference types="astro/client-image" />
  +/// <reference types="astro/client" />
```

## Community Resources

[Section titled “Community Resources”](#community-resources)

Know a good resource for Astro v4.0? [Edit this page](https://github.com/withastro/docs/edit/main/src/content/docs/en/guides/upgrade-to/v4.mdx) and add a link below!

## Known Issues

[Section titled “Known Issues”](#known-issues)

Please check [Astro’s issues on GitHub](https://github.com/withastro/astro/issues/) for any reported issues, or to file an issue yourself.

# Upgrade to Astro v5

> How to upgrade your project to Astro v5.0.

This guide will help you migrate from Astro v4 to Astro v5.

Need to upgrade an older project to v4 first? See our [older migration guide](/en/guides/upgrade-to/v4/).

Need to see the v4 docs? Visit this [older version of the docs site (unmaintained v4.16 snapshot)](https://v4.docs.astro.build/).

## Upgrade Astro

[Section titled “Upgrade Astro”](#upgrade-astro)

Update your project’s version of Astro to the latest version using your package manager:

- npm

  ```shell
  # Upgrade Astro and official integrations together
  npx @astrojs/upgrade
  ```

- pnpm

  ```shell
  # Upgrade Astro and official integrations together
  pnpm dlx @astrojs/upgrade
  ```

- Yarn

  ```shell
  # Upgrade Astro and official integrations together
  yarn dlx @astrojs/upgrade
  ```

You can also [upgrade your Astro integrations manually](/en/guides/integrations-guide/#manual-upgrading) if needed, and you may also need to upgrade other dependencies in your project.

Need to continue?

After upgrading Astro, you may not need to make any changes to your project at all!

But, if you notice errors or unexpected behavior, please check below for what has changed that might need updating in your project.

Astro v5.0 includes [potentially breaking changes](#breaking-changes), as well as the removal and deprecation of some features.

If your project doesn’t work as expected after upgrading to v5.0, check this guide for an overview of all breaking changes and instructions on how to update your codebase.

See [the Astro changelog](https://github.com/withastro/astro/blob/main/packages/astro/CHANGELOG.md) for full release notes.

## Dependency Upgrades

[Section titled “Dependency Upgrades”](#dependency-upgrades)

Any major upgrades to Astro’s dependencies may cause breaking changes in your project.

### Vite 6.0

[Section titled “Vite 6.0”](#vite-60)

Astro v5.0 upgrades to Vite v6.0 as the development server and production bundler.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do)

If you are using Vite-specific plugins, configuration, or APIs, check the [Vite migration guide](https://vite.dev/guide/migration.html) for their breaking changes and upgrade your project as needed.

### `@astrojs/mdx`

[Section titled “@astrojs/mdx”](#astrojsmdx)

[Implementation PR: Cleanup unused JSX code (#11741)](https://github.com/withastro/astro/pull/11741)

In Astro v4.x, Astro performed internal JSX handling for the `@astrojs/mdx` integration.

Astro v5.0 moves this responsibility to handle and render JSX and MDX to the `@astrojs/mdx` package directly. This means that Astro 5.0 is no longer compatible with older versions of the MDX integration.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-1)

If your project includes `.mdx` files, you must upgrade `@astrojs/mdx` to the latest version (v4.0.0) so that your JSX can be handled properly by the integration.

If you are using an MDX server renderer with the experimental [Astro Container API](/en/reference/container-reference/) you must update the import to reflect the new location:

```diff
-import mdxRenderer from "astro/jsx/server.js";
+import mdxRenderer from "@astrojs/mdx/server.js";
```

Learn more about [using MDX in your project](/en/guides/integrations-guide/mdx/).
