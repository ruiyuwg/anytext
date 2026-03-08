## Feature Upgrades

[Section titled “Feature Upgrades”](#feature-upgrades)

### Upgrade images to v3

[Section titled “Upgrade images to v3”](#upgrade-images-to-v3)

`astro:assets` is no longer behind an experimental flag in Astro v3.0.

`<Image />` is now a built-in component and the previous `@astrojs/image` integration has been removed.

These and other accompanying changes to using images in Astro may cause some breaking changes when you upgrade your Astro project from an earlier version.

Please follow the instructions below as appropriate to upgrade an Astro v2.x project to v3.0.

#### Upgrade from `experimental.assets`

[Section titled “Upgrade from experimental.assets”](#upgrade-from-experimentalassets)

If you had previously enabled the experimental flag for `astro:assets`, you will need to update your project for Astro v3.0 which now includes assets features by default.

##### Remove `experimental.assets` flag

[Section titled “Remove experimental.assets flag”](#remove-experimentalassets-flag)

Remove the experimental flag:

astro.config.mjs

```diff
import { defineConfig } from 'astro/config';


export default defineConfig({
-  experimental: {
-    assets: true
-  }
});
```

If necessary, also update your `src/env.d.ts` file to replace the `astro/client-image` reference with `astro/client`:

src/env.d.ts

```diff
-/// <reference types="astro/client-image" />
+/// <reference types="astro/client" />
```

##### Remove the `~/assets` import alias

[Section titled “Remove the ~/assets import alias”](#remove-the-assets-import-alias)

This import alias is no longer included by default with `astro:assets`. If you were using this alias with experimental assets, you must convert them to relative file paths, or [create your own import aliases](/en/guides/imports/#aliases).

src/pages/posts/post-1.astro

```diff
---
-import rocket from '~/assets/rocket.png';
+import rocket from '../../assets/rocket.png';
---
```

##### Add simple asset support for Cloudflare, Deno, Vercel Edge and Netlify Edge

[Section titled “Add simple asset support for Cloudflare, Deno, Vercel Edge and Netlify Edge”](#add-simple-asset-support-for-cloudflare-deno-vercel-edge-and-netlify-edge)

Astro v3.0 allows `astro:assets` to work without errors in Cloudflare, Deno, Vercel Edge and Netlify Edge, which do not support Astro’s built-in Squoosh and Sharp image optimization. Note that Astro does not perform any image transformation and processing in these environments. However, you can still enjoy the other benefits of using `astro:assets`, including no Cumulative Layout Shift (CLS), the enforced `alt` attribute, and a consistent authoring experience.

If you previously avoided using `astro:assets` because of these constraints, you can now use them without issues. You can configure the no-op image service to explicitly opt-in to this behavior:

astro.config.mjs

```diff
import { defineConfig } from 'astro/config';


export default defineConfig({
+  image: {
+    service: {
+      entrypoint: 'astro/assets/services/noop'
+    }
+  }
});
```

#### Decide where to store your images

[Section titled “Decide where to store your images”](#decide-where-to-store-your-images)

See the Images guide to help you decide [where to store your images](/en/guides/images/#where-to-store-images). You may wish to take advantage of new options for storing your images with the added flexibility `astro:assets` brings. For example, relative images from your project `src/` can now be referenced in Markdown, MDX, and Markdoc using standard Markdown `![alt](src)` syntax.

#### Update existing `<img>` tags

[Section titled “Update existing \ tags”](#update-existing-img-tags)

Previously, importing an image would return a simple `string` with the path of the image. Now, imported image assets match the following signature:

```ts
interface ImageMetadata {
  src: string;
  width: number;
  height: number;
  format: string;
}
```

You must update the `src` attribute of any existing `<img>` tags (including any [images in UI framework components](/en/guides/images/#images-in-ui-framework-components)) and you may also update other attributes that are now available to you from the imported image.

src/components/MyComponent.astro

```diff
---
import rocket from '../images/rocket.svg';
---
<img src={rocket} width="250" height="250" alt="A rocketship in space." />


<img src={rocket.src} width={rocket.width} height={rocket.height} alt="A rocketship in space." />
```

#### Update your Markdown, MDX, and Markdoc files

[Section titled “Update your Markdown, MDX, and Markdoc files”](#update-your-markdown-mdx-and-markdoc-files)

Relative images from your project `src/` can now be referenced in Markdown, MDX, and Markdoc using standard Markdown `![alt](src)` syntax.

This allows you to move your images from the `public/` directory to your project `src/` where they will now be processed and optimized. Your existing images in `public/` and remote images are still valid but are not optimized by Astro’s build process.

src/pages/posts/post-1.md

```md
# My Markdown Page


<!-- Local images now possible! -->
![A starry night sky.](../../images/stars.png)


<!-- Keep your images next to your content! -->
![A starry night sky.](./stars.png)
```

If you require more control over your image attributes, we recommend using the `.mdx` file format, which allows you to include Astro’s `<Image />` component or a JSX `<img />` tag in addition to the Markdown syntax. Use the [MDX integration](/en/guides/integrations-guide/mdx/) to add support for MDX to Astro.

#### Remove `@astrojs/image`

[Section titled “Remove @astrojs/image”](#remove-astrojsimage)

If you were using the image integration in Astro v2.x, complete the following steps:

1. Remove the `@astrojs/image` integration.

   You must [remove the integration](/en/guides/integrations-guide/#removing-an-integration) by uninstalling and then removing it from your `astro.config.mjs` file.

   astro.config.mjs

   ```diff
   import { defineConfig } from 'astro/config';
   -import image from '@astrojs/image';


   export default defineConfig({
     integrations: [
       -image(),
     ]
   })
   ```

2. Update types (if required).

   If you had special types configured for `@astrojs/image` in `src/env.d.ts`, you may need to change them back to the default Astro types if your upgrade to v3 did not complete this step for you.

   src/env.d.ts

   ```diff
    -/// 
    +/// 
   ```

   Similarly, update `tsconfig.json` if necessary:

   tsconfig.json

   ```diff
   {
     "compilerOptions": {
       -"types": ["@astrojs/image/client"]
       +"types": ["astro/client"]
     }
   }
   ```

3. Migrate any existing `<Image />` components.

   Change all `import` statements from `@astrojs/image/components` to `astro:assets` in order to use the new built-in `<Image />` component.

   Remove any component attributes that are not [currently supported image asset properties](/en/reference/modules/astro-assets/#image-).

   For example, `aspectRatio` is no longer supported, as it is now automatically inferred from the `width` and `height` attributes.

   src/components/MyComponent.astro

   ```diff
   ---
   -import { Image } from '@astrojs/image/components';
   +import { Image } from 'astro:assets';
   import localImage from '../assets/logo.png';
   const localAlt = 'The Astro Logo';
   ---


   <Image
     src={localImage}
     width={300}
     -aspectRatio="16:9"
     alt={localAlt}
   />
   ```

4. Choose a default image service.

   [Sharp](https://github.com/lovell/sharp) is now the default image service used for `astro:assets`. If you would like to use Sharp, no configuration is required.

   If you would prefer to use [Squoosh](https://github.com/GoogleChromeLabs/squoosh) to transform your images, update your config with the following `image.service` option:

   astro.config.mjs

   ```diff
   import { defineConfig, squooshImageService } from 'astro/config';


   export default defineConfig({
   +  image: {
   +    service: squooshImageService(),
   +  },
   });
   ```

#### Update Content Collections schemas

[Section titled “Update Content Collections schemas”](#update-content-collections-schemas)

You can now declare an associated image for a content collections entry, such as a blog post’s cover image, in your frontmatter using its path relative to the current folder.

The new `image` helper for content collections lets you validate the image metadata using Zod. Learn more about [how to use images in content collections](/en/guides/images/#images-in-content-collections)

#### Navigating Image Imports in Astro v3.0

[Section titled “Navigating Image Imports in Astro v3.0”](#navigating-image-imports-in-astro-v30)

In Astro v3.0, if you have to preserve the old import behavior for images and require a string representation of the image’s URL, append `?url` to the end of your image path when importing it. For example:

src/pages/blog/MyImages.astro

```astro
---
import Sprite from '../assets/logo.svg?url';
---


<svg>
  <use xlink:href={Sprite + '#cart'} />
</svg>
```

This approach ensures you obtain the URL string. Keep in mind that during development, Astro uses a `src/` path, but upon building, it generates hashed paths like `/_astro/cat.a6737dd3.png`.

If you prefer to work directly with the image object itself, you can access the `.src` property. This approach is best for tasks like managing image dimensions for Core Web Vitals metrics and preventing CLS.

If you are transitioning into the new import behavior, combining `?url` and `.src` methods might be the right method for seamless image handling.

### Upgrade view transitions to v3

[Section titled “Upgrade view transitions to v3”](#upgrade-view-transitions-to-v3)

View transitions are no longer behind an experimental flag in Astro v3.0.

If you had **not** enabled this experimental flag in Astro 2.x, this will not cause any breaking changes to your project. The new View Transitions API has no effect on your existing code.

If you were previously using experimental view transitions, there may be some breaking changes when you upgrade your Astro project from an earlier version.

Please follow the instructions below as appropriate to upgrade **an Astro v2.x project configured with `experimental.viewTransitions: true`** to v3.0.

#### Upgrade from `experimental.viewTransitions`

[Section titled “Upgrade from experimental.viewTransitions”](#upgrade-from-experimentalviewtransitions)

If you had previously enabled the experimental flag for view transitions, you will need to update your project for Astro v3.0 which now allows view transitions by default.

##### Remove `experimental.viewTransitions` flag

[Section titled “Remove experimental.viewTransitions flag”](#remove-experimentalviewtransitions-flag)

Remove the experimental flag:

astro.config.mjs

```diff
import { defineConfig } from 'astro/config';


export default defineConfig({
-  experimental: {
-   viewTransitions: true
-  }
});
```

##### Update import source

[Section titled “Update import source”](#update-import-source)

The `<ViewTransitions />` component has been moved from `astro:components` to `astro:transitions`. Update the import source across all occurrences in your project.

src/layouts/BaseLayout.astro

```astro
---
import { ViewTransitions } from "astro:components astro:transitions"
---
<html lang="en">
  <head>
    <title>My Homepage</title>
    <ViewTransitions />
  </head>
  <body>
    <h1>Welcome to my website!</h1>
  </body>
</html>
```

#### Update `transition:animate` directives

[Section titled “Update transition:animate directives”](#update-transitionanimate-directives)

**Changed:** The `transition:animate` value `morph` has been renamed to `initial`. Also, this is no longer the default animation. If no `transition:animate` directive is specified, your animations will now default to `fade`.

1. Rename any `morph` animations to `initial`.

   src/components/MyComponent.astro

   ```astro
   ```

2. To keep any animations that were previously using `morph` by default, explicitly add `transition:animate="initial"`

   src/components/MyComponent.astro

   ```astro
   ```

3. You can safely remove any animations explicitly set to `fade`. This is now the default behavior:

   src/components/MyComponent.astro

   ```astro
   ```

**Added:** Astro also supports a new `transition:animate` value, `none`. This value can be used on a page’s `<html>` element to disable animated full-page transitions on an entire page. This will only override **default animation behavior** on page elements without an animation directive. You can still set animations on individual elements, and these specific animations will occur.

4. You may now disable all default transitions on an individual page, animating only elements that explicitly use a `transition:animate` directive:

   ```astro

     
     
       Hello world!
     

   ```

##### Update event names

[Section titled “Update event names”](#update-event-names)

The event `astro:load` has been renamed to `astro:page-load`. Rename all occurrences in your project.

src/components/MyComponent.astro

```astro
<script>
document.addEventListener('astro:load astro:page-load', runSetupLogic);
</script>
```

The event `astro:beforeload` has been renamed to `astro:after-swap`. Rename all occurrences in your project.

src/components/MyComponent.astro

```astro
<script>
document.addEventListener('astro:beforeload astro:after-swap', setDarkMode);
</script>
```

## Community Resources

[Section titled “Community Resources”](#community-resources)

Know a good resource for Astro v3.0? [Edit this page](https://github.com/withastro/docs/edit/main/src/content/docs/en/guides/upgrade-to/v3.mdx) and add a link below!

## Known Issues

[Section titled “Known Issues”](#known-issues)

There are currently no known issues.
