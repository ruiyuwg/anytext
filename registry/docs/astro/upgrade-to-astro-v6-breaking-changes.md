## Breaking Changes

[Section titled “Breaking Changes”](#breaking-changes)

The following changes are considered breaking changes in Astro v6.0. Breaking changes may or may not provide temporary backwards compatibility. If you were using these features, you may have to update your code as recommended in each entry.

### Changed: endpoints with a file extension cannot be accessed with a trailing slash

[Section titled “Changed: endpoints with a file extension cannot be accessed with a trailing slash”](#changed-endpoints-with-a-file-extension-cannot-be-accessed-with-a-trailing-slash)

[Implementation PR: feat!: trailing slash never for endpoints with file extension (#14457)](https://github.com/withastro/astro/pull/14457)

In Astro v5.0, custom endpoints whose URL ended in a file extension (e.g. `/src/pages/sitemap.xml.ts` ) could be accessed with a trailing slash (`/sitemap.xml/`) or without (`/sitemap.xml`), regardless of the value configured for `build.trailingSlash`.

In Astro v6.0, these endpoints can only be accessed without a trailing slash. This is true regardless of your `build.trailingSlash` configuration.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-36)

Review your links to your custom endpoints that include a file extension in the URL and remove any trailing slashes:

src/pages/index.astro

```diff
<a href="/sitemap.xml/">Sitemap</a>
<a href="/sitemap.xml">Sitemap</a>
```

Learn more about [custom endpoints](/en/guides/endpoints/).

### Changed: `import.meta.env` values are always inlined

[Section titled “Changed: import.meta.env values are always inlined”](#changed-importmetaenv-values-are-always-inlined)

[Implementation PR: feat: stabilize static import meta env (#14485)](https://github.com/withastro/astro/pull/14485)

In Astro 5.13, the `experimental.staticImportMetaEnv` flag was introduced to update the behavior when accessing `import.meta.env` directly to align with [Vite’s handling of environment variables](https://vite.dev/guide/env-and-mode.html#env-variables) and ensures that `import.meta.env` values are always inlined.

In Astro 5.x, non-public environment variables were replaced by a reference to `process.env`. Additionally, Astro could also convert the value type of your environment variables used through `import.meta.env`, which could prevent access to some values such as the strings `"true"` (which was converted to a boolean value), and `"1"` (which was converted to a number).

Astro 6 removes this experimental flag and makes this the new default behavior in Astro: `import.meta.env` values are always inlined and never coerced.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-37)

If you were previously using this experimental feature, you must [remove this experimental flag from your configuration](#experimental-flags) as it no longer exists.

If you were relying on coercion, you may need to update your project code to apply it manually:

src/components/MyComponent.astro

```diff
-const enabled: boolean = import.meta.env.ENABLED;
+const enabled: boolean = import.meta.env.ENABLED === "true";
```

If you were relying on the transformation into `process.env`, you may need to update your project code to apply it manually:

src/components/MyComponent.astro

```diff
-const enabled: boolean = import.meta.env.DB_PASSWORD;
+const enabled: boolean = process.env.DB_PASSWORD;
```

You may also need to update types:

src/env.d.ts

```diff
interface ImportMetaEnv {
  readonly PUBLIC_POKEAPI: string;
  -readonly DB_PASSWORD: string;
  -readonly ENABLED: boolean;
  +readonly ENABLED: string;
}


interface ImportMeta {
  readonly env: ImportMetaEnv;
}


+namespace NodeJS {
  +interface ProcessEnv {
+    DB_PASSWORD: string;
+  }
+}
```

If you need more control over environment variables in Astro, we recommend you use `astro:env`.

Learn more about [environment variables](/en/guides/environment-variables/) in Astro, including `astro:env`.

### Changed: Cropping by default in default image service

[Section titled “Changed: Cropping by default in default image service”](#changed-cropping-by-default-in-default-image-service)

[Implementation PR: feat(assets): Always allow cropping and never upscale (#14629)](https://github.com/withastro/astro/pull/14629)

In Astro 5.0, the default image service would only apply cropping when the `fit` option was provided.

Astro 6.0 applies cropping by default without requiring setting the `fit` option.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-38)

No changes are needed to your existing cropped images as the `fit` property is still valid. However, if you were previously setting `fit` to `contain` (its default value) in order to crop your images, you may now remove this option and still achieve the same cropping behavior by specifying `width` and `height` alone:

src/components/MyImage.astro

```diff
---
import { Image } from 'astro:assets';
import myImage from '../assets/photo.jpg';
---
-<Image src={myImage} width={400} height={300} fit="contain" />
+<Image src={myImage} width={400} height={300} />
```

### Changed: Never upscale images in default image service

[Section titled “Changed: Never upscale images in default image service”](#changed-never-upscale-images-in-default-image-service)

[Implementation PR: feat(assets): Always allow cropping and never upscale (#14629)](https://github.com/withastro/astro/pull/14629)

In Astro 5.x, the default image service would upscale images when the requested dimensions were larger than the source image.

Astro 6.0 removes this behavior: the default image service never upscales images.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-39)

Review your images and update dimensions as needed. If you do need to upscale images, you may consider upscaling the images manually or using a custom image service that supports upscaling.

### Changed: SVG rasterization

[Section titled “Changed: SVG rasterization”](#changed-svg-rasterization)

[Implementation PR: add support for SVG rasterization (#15180)](https://github.com/withastro/astro/pull/15180)

In Astro v5.x, Astro’s default Sharp image service was unable to convert SVG files to raster files (e.g. PNG, WebP). This meant that the `<Image />` component would ignore any value set for `format` when optimizing and transforming SVG files.

Astro 6.0 now supports SVG rasterization. This is subject to [many limitations](https://github.com/lovell/sharp/issues?q=is%3Aissue%20state%3Aopen%20svg), for instance, SVGs with embedded fonts might not be converted properly. However, when the `format` property is set, the image service will now attempt to convert SVG images.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-40)

If you were previously relying on the fact that the image service would automatically skip converting SVGs, you must now check the format of your images beforehand to avoid converting SVGs to raster images:

```diff
-<Image src={imageThatMightBeAnSvg} format="avif" alt="example" />


+<Image
  +src={imageThatMightBeAnSvg}
  +format={imageThatMightBeAnSvg.format === "svg" ? "svg" : "avif"}
  +alt="example"
+/>
```

Learn more about [the `format` image property](/en/reference/modules/astro-assets/#format)

### Changed: `getImage()` throws when called on the client

[Section titled “Changed: getImage() throws when called on the client”](#changed-getimage-throws-when-called-on-the-client)

[Implementation PR: feat: disallow getImage on the client (#15800)](https://github.com/withastro/astro/pull/15800)

In Astro 5.x, calling `getImage()` from `astro:assets` on the client would silently fail or produce incorrect results.

Astro 6.0 throws a runtime error when `getImage()` is called on the client.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-41)

Call `getImage()` on the server and pass the resulting `src` to the client instead:

src/components/ClientImage.astro

```astro
---
import { getImage } from "astro:assets";
import myBackground from "../background.png";


const optimizedBackground = await getImage({ src: myBackground, format: "avif" });
---


<div id="background" data-src={optimizedBackground.src}></div>


<script>
  const src = document.getElementById("background").dataset.src;
  // use src client-side as needed
</script>
```

See [generating images with `getImage()`](/en/guides/images/#generating-images-with-getimage) for a full example.

### Changed: Markdown heading ID generation

[Section titled “Changed: Markdown heading ID generation”](#changed-markdown-heading-id-generation)

[Implementation PR: feat!: stabilize experimental.headingIdCompat (#14494)](https://github.com/withastro/astro/pull/14494)

In Astro 5.x, an additional default processing step to Markdown stripped trailing hyphens from the end of IDs for section headings ending in special characters. This provided a cleaner `id` value, but could lead to incompatibilities rendering your Markdown across platforms.

In Astro 5.5, the `experimental.headingIdCompat` flag was introduced to allow you to make the IDs generated by Astro for Markdown headings compatible with common platforms like GitHub and npm, using the popular [`github-slugger`](https://github.com/Flet/github-slugger) package.

Astro 6.0 removes this experimental flag and makes this the new default behavior in Astro: trailing hyphens from the end of IDs for headings ending in special characters are no longer removed.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-42)

If you have manual links to headings, you may need to update the anchor link value with a new trailing hyphen. For example, the following Markdown heading:

```md
## `<Picture />`
```

will now generate the following HTML with a trailing hyphen in the heading `id`:

```html
<h2 id="picture-"><code>&lt;Picture /&gt;</code></h2>
```

and must now be linked to as:

```markdown
See [the Picture component](/en/guides/images/#picture-) for more details.
```

If you were previously using the experimental feature to enforce trailing hyphens, you must [remove this experimental flag from your configuration](#experimental-flags) as it no longer exists.

If you were previously using the `rehypeHeadingIds` plugin directly to enforce compatibility, remove the `headingIdCompat` option as it no longer exists:

astro.config.mjs

```diff
import { defineConfig } from 'astro/config';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import { otherPluginThatReliesOnHeadingIDs } from 'some/plugin/source';


export default defineConfig({
  markdown: {
    rehypePlugins: [
-      [rehypeHeadingIds, { headingIdCompat: true }],
+      [rehypeHeadingIds],
      otherPluginThatReliesOnHeadingIDs,
    ],
  },
});
```

If you want to keep the old ID generation for backward compatibility reasons, you can create a custom rehype plugin that will generate headings IDs like Astro 5.x. This will allow you to continue to use your existing anchor links without adding trailing hyphens.

Create a custom rehype plugin to strip trailing hyphens

1. Install required dependencies:

   - npm

     ```sh
     npm i github-slugger hast-util-heading-rank unist-util-visit hast-util-to-string
     ```

   - pnpm

     ```sh
     pnpm add github-slugger hast-util-heading-rank unist-util-visit hast-util-to-string
     ```

   - Yarn

     ```sh
     yarn add github-slugger hast-util-heading-rank unist-util-visit hast-util-to-string
     ```

2. Create a custom rehype plugin that will generate headings IDs like Astro v5:

   plugins/rehype-slug.mjs

   ```js
   import GithubSlugger from 'github-slugger';
   import { headingRank } from 'hast-util-heading-rank';
   import { visit } from 'unist-util-visit';
   import { toString } from 'hast-util-to-string';


   const slugs = new GithubSlugger();


   export function rehypeSlug() {
     /**
      * @param {import('hast').Root} tree
      */
     return (tree) => {
       slugs.reset();
       visit(tree, 'element', (node) => {
         if (headingRank(node) && !node.properties.id) {
           let slug = slugs.slug(toString(node));
           // Strip trailing hyphens like in Astro v5 and below:
           if (slug.endsWith('-')) slug = slug.slice(0, -1);
           node.properties.id = slug;
         }
       });
     };
   }
   ```

3. Add the custom plugin to your Markdown configuration in `astro.config.mjs`:

   astro.config.mjs

   ```diff
   import { defineConfig } from 'astro/config';
   +import { rehypeSlug } from './plugins/rehype-slug';


   export default defineConfig({
     markdown: {
       rehypePlugins: [rehypeSlug],
     },
   });
   ```

Learn more about [Heading IDs](/en/guides/markdown-content/#heading-ids).

### Changed: `getStaticPaths()` cannot return `params` of type number

[Section titled “Changed: getStaticPaths() cannot return params of type number”](#changed-getstaticpaths-cannot-return-params-of-type-number)

[Implementation PR: fix!: disallow number in getStaticPaths params (#14586)](https://github.com/withastro/astro/pull/14586)

In Astro 5.x, `getStaticPaths()` could return `params` of type number, which would always be stringified by Astro. However, that could be confusing because it conflicted with `Astro.params` types.

Astro 6.0 removes this behavior: `getStaticPaths()` must now return string or undefined `params` values.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-43)

Review your dynamic routes using `getStaticPaths()` and convert any number params to strings:

src/pages/post/\[id]/\[label].astro

```diff
---
export function getStaticPaths() {
  return [
    {
      params: {
-        id: 1,
+        id: "1",
        label: "foo",
      }
    },
    {
      params: {
-        id: 2,
+        id: "2",
        label: "bar",
      }
    },
  ]
}
---
```

Learn more about [dynamic SSG routes with `getStaticPaths()`](/en/guides/routing/#static-ssg-mode).

### Changed: Astro components cannot be rendered in Vitest client environments (Container API)

[Section titled “Changed: Astro components cannot be rendered in Vitest client environments (Container API)”](#changed-astro-components-cannot-be-rendered-in-vitest-client-environments-container-api)

[Implementation PR: feat: remove Vitest workaround for client environment (#14895)](https://github.com/withastro/astro/pull/14895)

In Astro 5.x, rendering an Astro component on the client was forbidden. However we temporarily allowed this behavoir in Vitest client environments such as `jsdom` or `happy-dom` using the [experimental Container API](/en/reference/container-reference/).

Astro 6.0 removes the ability to render Astro components in Vitest client environments: tests that render Astro components must now run in a server environment like `node`.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-44)

If you use Vitest to run tests that render Astro components in client environments like `jsdom` or `happy-dom`, update your Vitest config to use the `node` environment for these:

vitest.config.ts

```diff
import { defineConfig } from 'vitest/config';


export default defineConfig({
  test: {
-    environment: 'jsdom',
+    environment: 'node',
  },
});
```

Learn more about [testing Astro components](/en/guides/testing/).

### Changed: Rollup output file name config path (Vite config)

[Section titled “Changed: Rollup output file name config path (Vite config)”](#changed-rollup-output-file-name-config-path-vite-config)

[Implementation PR: feat: integrate vite environments (#14306)](https://github.com/withastro/astro/pull/14306)

In Astro 5.x, custom Rollup output file name options for client assets could be configured at `vite.build.rollupOptions.output`.

Astro 6.0 scopes client build output configuration to Vite’s client environment. If you customize `entryFileNames`, `chunkFileNames`, or `assetFileNames` for client assets, use `vite.environments.client.build.rollupOptions.output`.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-45)

Move your config from `vite.build.rollupOptions.output` to `vite.environments.client.build.rollupOptions.output`:

astro.config.mjs

```js
export default defineConfig({
  vite: {
    environments: {
      client: {
        build: {
          rollupOptions: {
            output: {
              entryFileNames: 'js/[name]-[hash].js',
            },
          },
        },
      },
    },
  },
});
```

### Changed: Integration hooks and HMR access patterns (Integration API)

[Section titled “Changed: Integration hooks and HMR access patterns (Integration API)”](#changed-integration-hooks-and-hmr-access-patterns-integration-api)

[Implementation PR: feat: integrate vite environments (#14306)](https://github.com/withastro/astro/pull/14306)

In Astro 5.x, Astro relied on certain patterns for integration hooks and HMR access that were incompatible with or could be improved by integrating Vite’s Environment API.

Astro 6.0 uses Vite’s new Environment API for build configuration and dev server interactions. This primarily enables dev mode in runtimes like workerd, but means that some integration hooks and HMR access patterns have changed.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-46)

**For integrations using `astro:build:setup`:**

The hook is now called once with all environments configured (`ssr`, `client`, `prerender`), instead of being called separately for each build target. Remove the `target` parameter and use `vite.environments` to configure specific environments:

my-integration.mjs

```diff
{
  hooks: {
    -'astro:build:setup': ({ target, vite }) => {
      -if (target === 'client') {
-        vite.build.minify = false;
-      }
-    }
    +'astro:build:setup': ({ vite }) => {
+      vite.environments.client.build.minify = false;
+    }
  }
}
```

**For dev toolbar and integration code accessing HMR:**

Replace `server.hot.send()` with `server.environments.client.hot.send()`:

```diff
-server.hot.send(event)
+server.environments.client.hot.send(event)
```

Learn more about the [Vite Environment API](https://vite.dev/guide/api-environment) and Astro [integration hooks](/en/reference/integrations-reference/#astrobuildsetup).

### Changed: `SSRManifest` interface structure (Adapter API)

[Section titled “Changed: SSRManifest interface structure (Adapter API)”](#changed-ssrmanifest-interface-structure-adapter-api)

[Implementation PR: feat: integrate vite environments (#14306)](https://github.com/withastro/astro/pull/14306)

In Astro 5.x, path properties of the `SSRManifest` interface like `srcDir`, `outDir`, `cacheDir`, `publicDir`, `buildClientDir`, and `buildServerDir` were URL strings.

Astro 6.0 changes the form of these path properties to `URL` objects instead of URL strings. With this change, several new properties are now available on the manifest, and others have been updated or removed.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-47)

If you were treating these path properties as strings, you will now need to handle the `URL` object. For example, you will now need to access the `href` property of the `URL` object:

```diff
// To retrieve the same format (e.g., "file:///path/to/src"), make the following change:
-const srcPath = manifest.srcDir;
+const srcPath = manifest.srcDir.href;
```

If you were accessing the `hrefRoot` property, you will need to remove it, as it is no longer available on the manifest.

Update any use of `serverIslandMappings` and `sessionDriver`. These are now async methods:

```diff
-const mappings = manifest.serverIslandMappings;
-const driver = manifest.sessionDriver;
+const mappings = await manifest.serverIslandMappings?.();
+const driver = await manifest.sessionDriver?.();
```

Learn more about [the Adapter API](/en/reference/adapter-reference/).

### Changed: schema types are inferred instead of generated (Content Loader API)

[Section titled “Changed: schema types are inferred instead of generated (Content Loader API)”](#changed-schema-types-are-inferred-instead-of-generated-content-loader-api)

[Implementation PR: feat: loader.createSchema() (#14759)](https://github.com/withastro/astro/pull/14759)

In Astro 5.x, the types for content collections were generated using `zod-to-ts` when provided by a content loader and not defined by a user-provided schema.

Astro 6.0 removes this behavior: types are no longer generated using `zod-to-ts`. Instead, types are inferred.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-48)

If you are providing a `schema` in a content loader, you must use the [TypeScript’ `satisfies` operator](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html#the-satisfies-operator):

```diff
import type { Loader } from 'astro/loaders'


-function myLoader(): Loader {
+function myLoader() {
  return {
    name: 'my-loader',
    load: async (context) => {
      // ...
    },
    schema: z.object({/* ... */})
-  }
+  } satisfies Loader
}
```

Learn more about [defining loader schema types](/en/reference/content-loader-reference/#the-loader-object).

## Known Issues

[Section titled “Known Issues”](#known-issues)

Please check [Astro’s issues on GitHub](https://github.com/withastro/astro/issues/) for any reported issues, or to file an issue yourself.
