## Removed

[Section titled “Removed”](#removed)

The following features have now been entirely removed from the code base and can no longer be used. Some of these features may have continued to work in your project even after deprecation. Others may have silently had no effect.

Projects now containing these removed features will be unable to build, and there will no longer be any supporting documentation prompting you to remove these features.

### Removed: legacy content collections

[Section titled “Removed: legacy content collections”](#removed-legacy-content-collections)

[Implementation PR: fix: remove legacy content collections (#14407)](https://github.com/withastro/astro/pull/14407)

In Astro 5.x, it was still possible to use [the original Content Collections API first introduced in Astro v2.0](https://astro.build/blog/introducing-content-collections/), **either through a `legacy` configuration flag or via built-in backwards compatibility**. These methods allowed you to upgrade to Astro v5 even if you were not yet ready or able to update your existing content collections to those powered by the new Content Layer API.

Astro v6.0 removes this previously deprecated Content Collections API support entirely, including the `legacy.collections` flag **and some existing backwards compatibility that was not previously behind a flag**. All content collections must now use [the Content Layer API introduced in Astro v5.0](https://astro.build/blog/content-layer-deep-dive/) that powers all content collections. **No backwards compatibility support is available.**

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-15)

If you had previously enabled the legacy flag, you must remove it.

astro.config.mjs

```diff
import { defineConfig } from 'astro/config';


export default defineConfig({
  legacy: {
-    collections: true,
  }
})
```

Additionally, if you did not upgrade your collections for Astro v5.0, ensure that your content collections are **fully updated** for the new API.

Astro v5.x included some automatic backwards compatibility to allow content collections to continue to work even if they had not been updated to use the new API. Therefore, your v5 collections may contain one or more legacy features that need updating to the newer API for v6, even if your project was previously error-free.

If you have [content collections errors](/en/reference/error-reference/#content-collection-errors) or warnings after upgrading to v6, use the following list to help you identify and upgrade any legacy features that may exist in your code.

##### If you have…

[Section titled “If you have…”](#if-you-have)

no content collections configuration file

Create `src/content.config.ts` and [define your collections](/en/guides/content-collections/#defining-build-time-content-collections) in it.

a configuration file located at `src/content/config.ts` / ([`LegacyContentConfigError`](/en/reference/errors/legacy-content-config-error/))

Rename and move this file to `src/content.config.ts`

a collection that does not define a `loader`/ ([`ContentCollectionMissingALoaderError`](/en/reference/errors/content-collection-missing-loader/))

Import [Astro’s built-in `glob()` loader](/en/guides/content-collections/#the-glob-loader) and define the `pattern` and `base` for your collection entries:

src/content.config.ts

```diff
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
+import { glob } from 'astro/loaders';


const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/data/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});
```

a collection that defines a collection type (`type: 'content'` or `type: 'data'`) / ([`ContentCollectionInvalidTypeError`](/en/reference/errors/content-collection-invalid-type/))

There are no longer different types of collections. This must be deleted from your collection definition.

src/content.config.ts

```diff
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';


const blog = defineCollection({
  // For content layer you no longer define a `type`
  type: 'content',
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/data/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});
```

legacy collection querying methods `getDataEntryById()` and `getEntryBySlug()` / ([`GetEntryDeprecationError`](/en/reference/errors/get-entry-deprecation-error/))

Replace both methods with [`getEntry()`](/en/reference/modules/astro-content/#getentry).

legacy collection querying and rendering methods that depend on a `slug` property / ([`ContentSchemaContainsSlugError`](/en/reference/errors/content-schema-contains-slug-error/))

Previously, the `id` was based on the filename, and there was a `slug` property that could be used in a URL. Now the [`CollectionEntry`](/en/reference/modules/astro-content/#collectionentry) `id` is a slug. If you need access to the filename (previously available as the `id`), use the `filePath` property. Replace instances of `slug` with `id`:

src/pages/\[slug].astro

```diff
---
export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map((post) => ({
-    params: { slug: post.slug },
+    params: { slug: post.id },
    props: post,
  }));
}
---
```

content rendered using `entry.render()`

Collection entries no longer have a `render()` method. Instead, import the `render()` function from `astro:content` and use `render(entry)`:

src/pages/index.astro

```diff
---
import { getEntry, render } from 'astro:content';


const post = await getEntry('pages', 'homepage');


-const { Content, headings } = await post.render();
+const { Content, headings } = await render(post);
---
<Content />
```

See [the Astro v5 upgrade guide](/en/guides/upgrade-to/v5/#legacy-v20-content-collections-api) for previous guidance about backwards compatibility of legacy collections in Astro v5 and full step-by-step instructions for upgrading legacy collections to the new Content Layer API.

### Removed: `<ViewTransitions />` component

[Section titled “Removed: \ component”](#removed-viewtransitions--component)

[Implementation PR: Remove deprecated ViewTransitions component (#14400)](https://github.com/withastro/astro/pull/14400)

In Astro 5.0, the `<ViewTransitions />` component was renamed to `<ClientRouter />` to clarify the role of the component. The new name makes it more clear that the features you get from Astro’s `<ClientRouter />` routing component are slightly different from the native CSS-based MPA router. However, a deprecated version of the `<ViewTransitions />` component still existed and may have functioned in Astro 5.x.

Astro 6.0 removes the `<ViewTransitions />` component entirely and it can no longer be used in your project. Update to the `<ClientRouter />` component to continue to use these features.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-16)

Replace all occurrences of the `ViewTransitions` import and component with `ClientRouter`:

src/layouts/MyLayout.astro

```diff
-import { ViewTransitions } from 'astro:transitions';
+import { ClientRouter } from 'astro:transitions';


<html>
  <head>
    ...
    -<ViewTransitions />
    +<ClientRouter />
  </head>
</html>
```

Read more about [view transitions and client-side routing in Astro](/en/guides/view-transitions/).

### Removed: `emitESMImage()`

[Section titled “Removed: emitESMImage()”](#removed-emitesmimage)

[Implementation PR: feat!: remove emitESMImage() (#14426)](https://github.com/withastro/astro/pull/14426)

In Astro 5.6.2, the `emitESMImage()` function was deprecated in favor of `emitImageMetadata()`, which removes two deprecated arguments that were not meant to be exposed for public use: `_watchMode` and `experimentalSvgEnabled`.

Astro 6.0 removes `emitESMImage()` entirely. Update to `emitImageMetadata()` to keep your current behavior.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-17)

Replace all occurrences of the `emitESMImage()` with `emitImageMetadata()` and remove unused arguments:

```diff
-import { emitESMImage } from 'astro/assets/utils';
+import { emitImageMetadata } from 'astro/assets/utils';


const imageId = '/images/photo.jpg';
-const result = await emitESMImage(imageId, false, false);
+const result = await emitImageMetadata(imageId);
```

Read more about [`emitImageMetadata()`](/en/reference/modules/astro-assets/#emitimagemetadata).

### Removed: `Astro.glob()`

[Section titled “Removed: Astro.glob()”](#removed-astroglob)

[Implementation PR: feat!: remove Astro.glob (#14421)](https://github.com/withastro/astro/pull/14421)

In Astro 5.0, `Astro.glob()` was deprecated in favor of using `getCollection()` to query your collections, and `import.meta.glob()` to query other source files in your project.

Astro 6.0 removes `Astro.glob()` entirely. Update to `import.meta.glob()` to keep your current behavior.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-18)

Replace all use of `Astro.glob()` with `import.meta.glob()`. Note that `import.meta.glob()` no longer returns a `Promise`, so you may have to update your code accordingly. You should not require any updates to your [glob patterns](/en/guides/imports/#glob-patterns).

src/pages/blog.astro

```diff
---
-const posts = await Astro.glob('./posts/*.md');
+const posts = Object.values(import.meta.glob('./posts/*.md', { eager: true }));
---


{posts.map((post) => <li><a href={post.url}>{post.frontmatter.title}</a></li>)}
```

Where appropriate, consider using [content collections](/en/guides/content-collections/) to organize your content, which has its own newer, more performant querying functions.

You may also wish to consider using glob packages from NPM, such as [`fast-glob`](https://www.npmjs.com/package/fast-glob).

Learn more about [importing files with `import.meta.glob`](/en/guides/imports/#importmetaglob).

### Removed: exposed `astro:actions` internals

[Section titled “Removed: exposed astro:actions internals”](#removed-exposed-astroactions-internals)

[Implementation PR: refactor: cleanup public actions API (#14844)](https://github.com/withastro/astro/pull/14844)

In Astro 5.x, some internals were exported from `astro:actions` that were not meant to be exposed for public use.

Astro 6.0 removes the following functions, classes and types as exports from the `astro:actions` virtual module. These can no longer be imported in your project files:

- `ACTION_ERROR_CODES`
- `ActionInputError`
- `appendForwardSlash`
- `astroCalledServerError`
- `callSafely`
- `deserializeActionResult`
- `formDataToObject`
- `getActionQueryString`
- `serializeActionResult`
- `type Actions`
- `type ActionAccept`
- `type AstroActionContext`
- `type SerializedActionResult`

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-19)

Replace all imports of `serializeActionResult()` and `deserializeActionResult()` with `getActionContext()`. These two methods are now available through `getActionContext()`:

src/middleware.ts

```diff
import { defineMiddleware } from 'astro:middleware';
-import { serializeActionResult, deserializeActionResult } from 'astro:actions';
+import { getActionContext } from 'astro:actions';


export const onRequest = defineMiddleware(async (context, next) => {
  const { serializeActionResult, deserializeActionResult } = getActionContext(context);
  // ...
});
```

Remove any occurrences of the other removed exports:

```diff
-import {
-  ACTION_ERROR_CODES,
-  ActionInputError,
-  appendForwardSlash,
-  astroCalledServerError,
-  callSafely,
-  formDataToObject,
-  getActionQueryString,
  -type Actions,
  -type ActionAccept,
  -type AstroActionContext,
  -type SerializedActionResult,
-} from 'astro:actions';
```

Learn more about all utilities available in the [Actions API Reference](/en/reference/modules/astro-actions/).

### Removed: Percent-Encoding in routes

[Section titled “Removed: Percent-Encoding in routes”](#removed-percent-encoding-in-routes)

[Implementation PR: feat: integrate vite environments (#14306)](https://github.com/withastro/astro/pull/14306)

In Astro 5.x, it was possible to include a percent-encoded percent sign (`%25`) in filenames.

Astro 6.0 removes support for the characters `%25` in filenames for security reasons. This restriction prevents encoding-based security bypasses where `%25` decodes to `%`, potentially leading to ambiguous or invalid encoding sequences.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-20)

If you have route files with `%25` in the filename, rename them to use a different character:

```diff
-src/pages/test%25file.astro
+src/pages/test-file.astro
```

### Removed: `astro:ssr-manifest` virtual module (Integration API)

[Section titled “Removed: astro:ssr-manifest virtual module (Integration API)”](#removed-astrossr-manifest-virtual-module-integration-api)

[Implementation PR: feat: integrate vite environments (#14306)](https://github.com/withastro/astro/pull/14306)

In Astro 5.x, the deprecated `astro:ssr-manifest` virtual module could still be used to access configuration values.

Astro 6.0 removes the `astro:ssr-manifest` virtual module entirely. It is no longer used by integrations or internally by Astro. The manifest is now passed directly through integration hooks and adapter APIs rather than through a virtual module. For build-specific manifest data, use the `astro:build:ssr` integration hook, which receives the manifest as a parameter.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-21)

If your integration or code imports from `astro:ssr-manifest`, use `astro:config/server` instead to access configuration values:

```diff
-import { manifest } from 'astro:ssr-manifest';
+import { srcDir, outDir, root } from 'astro:config/server';
+// Use srcDir, outDir, root, etc. for configuration values
```

Learn more about [the `astro:config` virtual module](/en/reference/modules/astro-config/).

### Removed: `RouteData.generate()` (Adapter API)

[Section titled “Removed: RouteData.generate() (Adapter API)”](#removed-routedatagenerate-adapter-api)

[Implementation PR: feat: integrate vite environments (#14306)](https://github.com/withastro/astro/pull/14306)

In Astro 5.x, routes could be generated using the `generate()` method on `RouteData`.

Astro 6.0 removes `RouteData.generate()` because route generation is now handled internally by Astro.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-22)

Remove any calls to `route.generate()` in your code. This method is no longer needed:

```diff
-const generated = route.generate(params);
```

Learn more about [the Adapter API](/en/reference/adapter-reference/).

### Removed: `routes` on `astro:build:done` hook (Integration API)

[Section titled “Removed: routes on astro:build:done hook (Integration API)”](#removed-routes-on-astrobuilddone-hook-integration-api)

[Implementation PR: feat: cleanup integration api (#14446)](https://github.com/withastro/astro/pull/14446)

In Astro 5.0, accessing `routes` on the `astro:build:done` hook was deprecated.

Astro 6.0 removes the `routes` array passed to this hook entirely. Instead, the `astro:routes:resolved` hook should be used.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-23)

Remove any instance of `routes` passed to `astro:build:done` and replace it with the new `astro:routes:resolved` hook. Access `distURL` on the newly exposed `assets` map:

my-integration.mjs

```diff
const integration = () => {
    let routes
    return {
        name: 'my-integration',
        hooks: {
            +'astro:routes:resolved': (params) => {
                +routes = params.routes
            },
            'astro:build:done': ({
                -routes
                +assets
            }) => {
                for (const route of routes) {
                    const distURL = assets.get(route.pattern)
                    if (distURL) {
                        +Object.assign(route, { distURL })
                    }
                }
                console.log(routes)
            }
        }
    }
}
```

Learn more about [the Integration API `astro:routes:resolved` hook](/en/reference/integrations-reference/#astroroutesresolved) for building integrations.

### Removed: `entryPoints` on `astro:build:ssr` hook (Integration API)

[Section titled “Removed: entryPoints on astro:build:ssr hook (Integration API)”](#removed-entrypoints-on-astrobuildssr-hook-integration-api)

[Implementation PR: feat: cleanup integration api (#14446)](https://github.com/withastro/astro/pull/14446)

In Astro 5.0, [`functionPerRoute` was deprecated](/en/guides/upgrade-to/v5/#deprecated-functionperroute-adapter-api). That meant that `entryPoints` on the `astro:build:ssr` hook was always empty.

Astro 6.0 removes the `entryPoints` map passed to this hook entirely.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-24)

Remove any instance of `entryPoints` passed to `astro:build:ssr`:

my-integration.mjs

```diff
const integration = () => {
    return {
        name: 'my-integration',
        hooks: {
            'astro:build:ssr': (params) => {
                -someLogic(params.entryPoints)
            },
        }
    }
}
```

### Removed: old `app.render()` signature (Adapter API)

[Section titled “Removed: old app.render() signature (Adapter API)”](#removed-old-apprender-signature-adapter-api)

[Implementation PR: feat: clean deprecated APIs (#14462)](https://github.com/withastro/astro/pull/14462)

In Astro 4.0, the `app.render()` signature that allowed passing `routeData` and `locals` as optional arguments was deprecated in favor of a single optional `renderOptions` argument.

Astro 6.0 removes this signature entirely. Attempting to pass these separate arguments will now cause an error in your project.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-25)

Review your `app.render` calls and pass `routeData` and `locals` as properties of an object instead of as multiple independent arguments:

my-adapter/entrypoint.ts

```diff
-app.render(request, routeData, locals)
+app.render(request, { routeData, locals })
```

Learn more about the [Adapter API](/en/reference/adapter-reference/).

### Removed: `app.setManifestData()` (Adapter API)

[Section titled “Removed: app.setManifestData() (Adapter API)”](#removed-appsetmanifestdata-adapter-api)

[Implementation PR: chore(astro)!: remove app.setManifestData() (#14758)](https://github.com/withastro/astro/pull/14758)

In Astro 5.0, the `app.setManifestData()` method was available on `App` and `NodeApp`, but is no longer used nor needed.

Astro 6.0 removes this method entirely.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-26)

Remove any call to `app.setManifestData()`. If you need to update the manifest, create a new `App` instance.

Learn more about the [Adapter API](/en/reference/adapter-reference/).

### Removed: `handleForms` prop for the `<ClientRouter />` component

[Section titled “Removed: handleForms prop for the \ component”](#removed-handleforms-prop-for-the-clientrouter--component)

[Implementation PR: feat: clean deprecated APIs (#14462)](https://github.com/withastro/astro/pull/14462)

In Astro 4.0, the `handleForms` prop of the `<ClientRouter />` component was deprecated, as it was no longer necessary to opt in to handling `submit` events for `form` elements. This functionality has been built in by default and the property, if still included in your project, silently had no impact on form submission.

Astro 6.0 removes this prop entirely and it now must be removed to avoid errors in your project.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-27)

Remove the `handleForms` property from your `<ClientRouter />` component if it exists. It has provided no additional functionality, and so removing it should not change any behavior in your project:

src/pages/index.astro

```astro
---
import { ClientRouter } from "astro:transitions";
---
<html>
  <head>
    <ClientRouter handleForms />
  </head>
  <body>
    <!-- stuff here -->
  </body>
</html>
```

Learn more about [transitions with forms](/en/guides/view-transitions/#transitions-with-forms).

### Removed: `prefetch()` `with` option

[Section titled “Removed: prefetch() with option”](#removed-prefetch-with-option)

[Implementation PR: feat: clean deprecated APIs (#14462)](https://github.com/withastro/astro/pull/14462)

In Astro 4.8.4, the `with` option of the programmatic `prefetch()` function was deprecated in favor of a more sensible default behavior that no longer required specifying the priority of prefetching for each page.

Astro 6.0 removes this option entirely and it is no longer possible to configure the priority of prefetching by passing the `with` option. Attempting to do so will now cause errors.

By default, Astro’s prefetching now uses an automatic approach that will always try to use `<link rel="prefetch>` if supported, or will fall back to `fetch()`.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-28)

Review your `prefetch()` calls and remove the `with` option if it still exists:

```diff
-prefetch('/about', { with: 'fetch' });
+prefetch('/about');
```

Learn more about [prefetching](/en/guides/prefetch/).

### Removed: `rewrite()` from Actions context

[Section titled “Removed: rewrite() from Actions context”](#removed-rewrite-from-actions-context)

[Implementation PR: feat!: remove rewrite from action context (#14477)](https://github.com/withastro/astro/pull/14477)

In Astro 5.5.6, the `ActionAPIContext.rewrite` method was deprecated because custom endpoints should be used instead of rewrites.

Astro 6.0 removes the `rewrite()` method from `ActionAPIContext` entirely and it may no longer be used.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-29)

Review your Actions handlers and remove any call to `rewrite()`:

src/actions/index.ts

```diff
import { defineAction } from 'astro:actions';
import { z } from 'astro/zod';


export const server = {
  getGreeting: defineAction({
    input: z.object({
      // ...
    }),
    handler: async (input, context) => {
      -context.rewrite('/')
      // ...
    }
  })
}
```

Learn more about [rewrites](/en/guides/routing/#rewrites).

### Removed: schema function signature (Content Loader API)

[Section titled “Removed: schema function signature (Content Loader API)”](#removed-schema-function-signature-content-loader-api)

[Implementation PR: feat: loader.createSchema() (#14759)](https://github.com/withastro/astro/pull/14759)

In Astro 5.x, a content loader could choose to define a schema as a function instead of defining a Zod schema object for validation. This is useful to dynamically generate the schema based on the configuration options or by introspecting an API.

Astro 6.0 removes this signature and introduces a new `createSchema()` property as a replacement for those who still want to dynamically define a schema in their content loader.

Providing a schema function in the old way will log a warning message that the loader’s schema is being ignored, but otherwise the loader will continue to work as if no schema had been provided. In a future major version, loaders that provide a schema function will throw an error and cannot be used.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-30)

If you are building a content loader and using a function to dynamically return a collection `schema` property, you must remove your existing function and use the new `createSchema()` property to define your schema instead.

For example, you can reproduce Astro’s previous behavior by using `zod-to-ts` directly with `createSchema()` and any previous function logic:

```diff
import type { Loader } from 'astro/loaders'
+import { createTypeAlias, zodToTs } from 'zod-to-ts'
import { getSchemaFromApi } from './utils'


function myLoader() {
  return {
    name: 'my-loader',
    load: async (context) => {
      // ...
    },
    -schema: async () => await getSchemaFromApi(),
    +createSchema: async () => {
      +const schema = await getSchemaFromApi()
      +const identifier = 'Entry'
      +const { node } = zodToTs(schema, identifier)
      +const typeAlias = createTypeAlias(node, identifier)


      +return {
+        schema,
+        types: `export ${typeAlias}`
+      }
+    }
  } satisfies Loader
}
```

Learn more about [`createSchema()`](/en/reference/content-loader-reference/#loadercreateschema) in the Content Loader API reference.

### Removed: session `test` driver

[Section titled “Removed: session test driver”](#removed-session-test-driver)

[Implementation PR: feat(sessions): drivers (#15006)](https://github.com/withastro/astro/pull/15006)

In Astro 5.x, the internal session `test` driver was exported in the Astro config types, but it was not meant to be exposed for public use.

Astro 6.0 removes the session `test` driver as it is no longer used internally to test `context.session`.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-31)

It is unlikely that you are using this internal API. If you do, you must remove any usage of the session `test` driver:

astro.config.mjs

```diff
import { defineConfig } from 'astro/config'
-import { createMockStorage } from './utils'


export default defineConfig({
  session: {
-    driver: 'test',
-    options: {
-      mockStorage: createMockStorage()
-    }
  }
})
```

Learn more about the [Session Driver API](/en/reference/session-driver-reference/).

### Removed: support for CommonJS config files

[Section titled “Removed: support for CommonJS config files”](#removed-support-for-commonjs-config-files)

[Implementation PR: Drop cjs config support (#15192)](https://github.com/withastro/astro/pull/15192)

In Astro 5.x, the Astro config file could use any of the following extensions: `.mjs`, `.js`, `.ts`, `.mts`, `.cjs` and `.cts`.

Astro 6.0 removes `.cjs` and `.cts` extensions.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-32)

If you have a `astro.config.cjs` or `astro.config.cts` file, update it to use of the supported extensions: `.mjs`, `.js`, `.ts` or `.mts`.

Learn more about the [Astro config file](/en/guides/configuring-astro/#the-astro-config-file).

### Experimental Flags

[Section titled “Experimental Flags”](#experimental-flags)

Experimental flags allow you to opt in to features while they are in early development. Astro may also use experimental flags to test breaking changes to default behavior. The following experimental flags have been removed in Astro 6.0 and are now stable, or the new default behavior.

Remove these experimental flags from your Astro config if you were previously using them:

astro.config.mjs

```diff
import { defineConfig } from 'astro/config';


export default defineConfig({
  experimental: {
-    csp: true,
-    fonts: true,
-    liveContentCollections: true,
-    preserveScriptOrder: true,
-    staticImportMetaEnv: true,
-    headingIdCompat: true,
-    failOnPrerenderConflict: true
  },
})
```

#### Experimental features now stable:

[Section titled “Experimental features now stable:”](#experimental-features-now-stable)

- `csp` (See the [`security.csp` configuration reference](/en/reference/configuration-reference/#securitycsp) to learn more about Content Security Policy.)
- `fonts` (See the updated [fonts guide](/en/guides/fonts/) to learn more about adding custom fonts to your project.)
- `liveContentCollections` (See the updated [content collections docs](/en/guides/content-collections/) to learn more about live collections.)
- `failOnPrerenderConflict` (See the new [`prerenderConflictBehavior`](/en/reference/configuration-reference/#prerenderconflictbehavior) configuration option.)

#### New default or recommended behavior:

[Section titled “New default or recommended behavior:”](#new-default-or-recommended-behavior)

- `preserveScriptOrder` (See below for breaking changes to [default `<script>` and `<style>` behavior](#changed-script-and-style-tags-are-rendered-in-the-order-they-are-defined).)
- `staticImportMetaEnv` (See below for breaking changes to [`import.meta.env`](#changed-importmetaenv-values-are-always-inlined).)
- `headingIdCompat` (See below for breaking changes to [Markdown heading ID generation](#changed-markdown-heading-id-generation).)

Read about exciting new features and more in [the v6.0 Blog post](https://astro.build/blog/astro-6-beta/).
