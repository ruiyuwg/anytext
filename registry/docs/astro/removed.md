## Removed

[Section titled “Removed”](#removed)

The following features have now been entirely removed from the code base and can no longer be used. Some of these features may have continued to work in your project even after deprecation. Others may have silently had no effect.

Projects now containing these removed features will be unable to build, and there will no longer be any supporting documentation prompting you to remove these features.

### Removed: The Lit integration

[Section titled “Removed: The Lit integration”](#removed-the-lit-integration)

[Implementation PR: Remove \`@astrojs/lit\` (#11680)](https://github.com/withastro/astro/pull/11680)

In Astro v4.x, [Lit](https://lit.dev/) was a core-maintained framework library through the `@astrojs/lit` package.

Astro v5.0 removes the integration and it will not receive further updates for compatibility with 5.x and above.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-5)

You can continue to use Lit for client components by adding a client-side script tag. For example:

```astro
<script>
  import "../components/MyTabs";
</script>


<my-tabs title="These are my tabs">...</my-tabs>
```

If you’re interested in maintaining a Lit integration yourself, you may wish to use the [last published version of `@astrojs/lit`](https://github.com/withastro/astro/tree/astro%404.13.0/packages/integrations/lit) as a starting point and upgrade the relevant packages.

Learn more about [Astro’s official integrations](/en/guides/integrations-guide/).

### Removed: `hybrid` rendering mode

[Section titled “Removed: hybrid rendering mode”](#removed-hybrid-rendering-mode)

[Implementation PR: Merge output:hybrid and output:static (#11824)](https://github.com/withastro/astro/pull/11824)

In Astro v4.x, Astro provided three rendering `output` rendering modes: `'static'`, `'hybrid'`, and `'server'`

Astro v5.0 merges the `output: 'hybrid'` and `output: 'static'` configurations into one single configuration (now called `'static'`) that works the same way as the previous hybrid option.

It is no longer necessary to specify `output: 'hybrid'` in your Astro config to use server-rendered pages. The new `output: 'static'` has this capability included.

Astro will now automatically allow you to opt out of prerendering in your static site with no change to your output configuration required. Any page route or endpoint can include `export const prerender = false` to be server-rendered on demand, while the rest of your site is statically generated.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-6)

If your project used hybrid rendering, you must now remove the `output: 'hybrid'` option from your Astro config as it no longer exists. However, no other changes to your project are required, and you should have no breaking changes. The previous `'hybrid'` behavior is now the default, under a new name `'static'`.

astro.config.mjs

```diff
import { defineConfig } from "astro/config";


export default defineConfig({
-  output: 'hybrid',
});
```

If you were using the `output: 'static'` (default) option, you can continue to use it as before. By default, all of your pages will continue to be prerendered and you will have a completely static site. You should have no breaking changes to your project.

An adapter is still required to deploy an Astro project with any server-rendered pages, no matter which `output` mode your project uses. Failure to include an adapter will result in a warning in development and an error at build time.

Learn more about [on-demand rendering in Astro](/en/guides/on-demand-rendering/).

### Removed: support for dynamic `prerender` values in routes

[Section titled “Removed: support for dynamic prerender values in routes”](#removed-support-for-dynamic-prerender-values-in-routes)

[Implementation PR: Merge output:hybrid and output:static (#11824)](https://github.com/withastro/astro/pull/11824)

In Astro 4.x, environment variables could be used to dynamically set the value of `prerender` exports in routes, for example `export const prerender = import.meta.env.SOME_VAR`.

Astro v5.0 removes support for dynamic values in `prerender` exports. Only the static values `true` and `false` are supported.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-7)

1. Remove any dynamic `prerender` exports in your routes:

   src/pages/blog/\[slug].astro

   ```diff
   ---
   -export const prerender = import.meta.env.SOME_VAR;
   ---
   ```

2. Use an Astro integration in your `astro.config.mjs` file to set `prerender` values that need to be dynamic in the `"astro:route:setup"` hook:

   astro.config.mjs

   ```js
   import { defineConfig } from 'astro/config';
   import { loadEnv } from 'vite';


   export default defineConfig({
     integrations: [
       {
         name: 'set-prerender',
         hooks: {
           'astro:route:setup': ({ route }) => {
             // Load environment variables from .env files (if needed)
             const { PRERENDER } = loadEnv(process.env.NODE_ENV, process.cwd(), '');
             // Find routes matching the expected filename.
             if (route.component.endsWith('/blog/[slug].astro')) {
               // Set the prerender value on routes as needed.
               route.prerender = PRERENDER;
             }
           },
         },
       }
     ],
   });
   ```

### Removed: Squoosh image service

[Section titled “Removed: Squoosh image service”](#removed-squoosh-image-service)

[Implementation PR: remove the squoosh image service (#11770)](https://github.com/withastro/astro/pull/11770)

In Astro 4.x, you could configure `image.service: squooshImageService()` to use Squoosh to transform your images instead of Sharp. However, the underlying library `libsquoosh` is no longer maintained and has memory and performance issues.

Astro 5.0 removes the Squoosh image optimization service entirely.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-8)

To switch to the built-in Sharp image service, remove the `squooshImageService` import from your Astro config. By default, you will use Sharp for `astro:assets`.

astro.config.mjs

```diff
-import { squooshImageService } from "astro/config";
import { defineConfig } from "astro/config";


export default defineConfig({
- image: {
-   service: squooshImageService()
- }
});
```

If you are using a strict package manager like `pnpm`, you may need to install the `sharp` package manually to use the Sharp image service, even though it is built into Astro by default.

If your adapter does not support Astro’s built-in Sharp image optimization, you can [configure a no-op image service](/en/guides/images/#configure-no-op-passthrough-service) to allow you to use the `<Image />` and `<Picture />` components.

Alternatively, you may wish to consider [a community-maintained Squoosh image service](https://github.com/Princesseuh/astro-image-service-squoosh) if you are unable to use the Sharp image service.

##### For adapters

[Section titled “For adapters”](#for-adapters)

If your adapter previously precised its compatibility status with Squoosh, you should now remove this information from your adapter configuration.

my-adapter.mjs

```diff
supportedAstroFeatures: {
-  assets: {
-    isSquooshCompatible: true
-  }
}
```

Read more about [configuring your default image service](/en/guides/images/#default-image-service).

### Removed: some public-facing types

[Section titled “Removed: some public-facing types”](#removed-some-public-facing-types)

[Implementation PR: Refactor/types (#11715)](https://github.com/withastro/astro/pull/11715)

In Astro v4.x, `@types/astro.ts` exposed all types publicly to users, whether or not they were still actively used or only intended for internal use.

Astro v5.0 refactors this file to remove outdated and internal types. This refactor brings improvements to your editor (e.g. faster completions, lower memory usage, and more relevant completion options). However, this refactor may cause errors in some projects that have been relying on types that are no longer available to the public.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-9)

Remove any types that now cause errors in your project as you no longer have access to them. These are mostly APIs that have previously been deprecated and removed, but may also include types that are now internal.

See the [public types exposed for use](https://github.com/withastro/astro/tree/main/packages/astro/src/types/public).

### Experimental Flags

[Section titled “Experimental Flags”](#experimental-flags)

The following experimental flags have been removed in Astro v5.0 and these features are available for use:

- `env`
- `serverIslands`

Additionally, the following experimental flags have been removed and **are now the default or recommended behavior in Astro v5.0**.

- `directRenderScript` (See below for breaking changes to [default `<script>` behavior](#script-tags-are-rendered-directly-as-declared).)
- `globalRoutePriority` (See below for breaking changes to [default route priority order](#route-priority-order-for-injected-routes-and-redirects).)
- `contentLayer` (See guidance for [upgrading existing content collections](#legacy-v20-content-collections-api) to the new, preferred Content Layer API.)

The following experimental flags have been removed and **their corresponding features are not part of Astro v5.0**.

- `contentCollectionsCache`

Remove these experimental flags if you were previously using them, and move your `env` configuration to the root of your Astro config:

astro.config.mjs

```diff
import { defineConfig } from 'astro/config';


export default defineConfig({
  experimental: {
-    directRenderScript: true,
-    globalRoutePriority: true,
-    contentLayer: true,
-    serverIslands: true,
-    contentCollectionsCache: true,
-    env: {
-      schema: {...}
-    }
  },
+  env: {
+      schema: {...}
+  }
})
```

These features are all available by default in Astro v5.0.

Read about these exciting features and more in [the v5.0 Blog post](https://astro.build/blog/astro-5/).
