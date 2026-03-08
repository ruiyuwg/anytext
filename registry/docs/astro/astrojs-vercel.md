# @astrojs/vercel

> Learn how to use the @astrojs/vercel adapter to deploy your Astro project.

This adapter allows Astro to deploy your [on-demand rendered routes and features](/en/guides/on-demand-rendering/) to [Vercel](https://www.vercel.com/), including [server islands](/en/guides/server-islands/), [actions](/en/guides/actions/), and [sessions](/en/guides/sessions/).

If you’re using Astro as a static site builder, you only need this adapter if you are using additional Vercel services (e.g. [Vercel Web Analytics](https://vercel.com/docs/analytics), [Vercel Image Optimization](https://vercel.com/docs/image-optimization)). Otherwise, you do not need an adapter to deploy your static site.

Learn how to deploy your Astro site in our [Vercel deployment guide](/en/guides/deploy/vercel/).

## Why Astro Vercel?

[Section titled “Why Astro Vercel?”](#why-astro-vercel)

[Vercel](https://www.vercel.com/) is a deployment platform that allows you to host your site by connecting directly to your GitHub repository. This adapter enhances the Astro build process to prepare your project for deployment through Vercel.

## Installation

[Section titled “Installation”](#installation)

Astro includes an `astro add` command to automate the setup of official integrations. If you prefer, you can [install integrations manually](#manual-install) instead.

Add the Vercel adapter to enable on-demand rendering in your Astro project with the following `astro add` command. This will install `@astrojs/vercel` and make the appropriate changes to your `astro.config.mjs` file in one step.

- npm

  ```sh
  npx astro add vercel
  ```

- pnpm

  ```sh
  pnpm astro add vercel
  ```

- Yarn

  ```sh
  yarn astro add vercel
  ```

Now, you can enable [on-demand rendering per page](/en/guides/on-demand-rendering/#enabling-on-demand-rendering), or set your build output configuration to `output: 'server'` to [server-render all your pages by default](/en/guides/on-demand-rendering/#server-mode).

### Manual Install

[Section titled “Manual Install”](#manual-install)

First, add the `@astrojs/vercel` adapter to your project’s dependencies using your preferred package manager:

- npm

  ```sh
  npm install @astrojs/vercel
  ```

- pnpm

  ```sh
  pnpm add @astrojs/vercel
  ```

- Yarn

  ```sh
  yarn add @astrojs/vercel
  ```

Then, add the adapter to your `astro.config.*` file:

astro.config.mjs

```diff
import { defineConfig } from 'astro/config';
+import vercel from '@astrojs/vercel';


export default defineConfig({
  // ...
+  adapter: vercel(),
});
```

## Usage

[Section titled “Usage”](#usage)

Find out more about [deploying your project to Vercel](/en/guides/deploy/vercel/).

You can deploy by CLI (`vercel deploy`) or by connecting your new repo in the [Vercel Dashboard](https://vercel.com/). Alternatively, you can create a production build locally:

```sh
astro build
vercel deploy --prebuilt
```

## Configuration

[Section titled “Configuration”](#configuration)

To configure this adapter, pass an object to the `vercel()` function call in `astro.config.mjs`:

### `webAnalytics`

[Section titled “webAnalytics”](#webanalytics)

**Type:** `VercelWebAnalyticsConfig`\
**Available for:** Serverless, Static

**Added in:** `@astrojs/vercel@3.8.0`

With `@vercel/analytics@1.3.x` or earlier, you can set `webAnalytics: { enabled: true }` in your Astro config to inject Vercel’s tracking scripts into all of your pages.

For `@vercel/analytics@1.4.0` and later, use Vercel’s Analytics component to enable [Vercel Web Analytics](https://vercel.com/docs/concepts/analytics) instead.

astro.config.mjs

```diff
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';


export default defineConfig({
  // ...
  adapter: vercel({
+    webAnalytics: {
+      enabled: true,
+    },
  }),
});
```

### `imagesConfig`

[Section titled “imagesConfig”](#imagesconfig)

**Type:** `VercelImageConfig`\
**Available for:** Serverless, Static

**Added in:** `@astrojs/vercel@3.3.0`

Configuration options for [Vercel’s Image Optimization API](https://vercel.com/docs/concepts/image-optimization). See [Vercel’s image configuration documentation](https://vercel.com/docs/build-output-api/v3/configuration#images) for a complete list of supported parameters.

The `domains` and `remotePatterns` properties will automatically be filled using [the Astro corresponding `image` settings](/en/reference/configuration-reference/#image-options).

astro.config.mjs

```diff
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';


export default defineConfig({
  // ...
  output: 'static',
  adapter: vercel({
+    imagesConfig: {
+      sizes: [320, 640, 1280],
+    },
  }),
});
```

### `imageService`

[Section titled “imageService”](#imageservice)

**Type:** `boolean`\
**Available for:** Serverless, Static

**Added in:** `@astrojs/vercel@3.3.0`

When enabled, an [Image Service](/en/reference/image-service-reference/) powered by the Vercel Image Optimization API will be automatically configured and used in production. In development, the image service specified by [`devImageService`](#devimageservice) will be used instead.

astro.config.mjs

```diff
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';


export default defineConfig({
  // ...
  output: 'static',
  adapter: vercel({
+    imageService: true,
  }),
});
```

src/pages/index.astro

```astro
---
import { Image } from 'astro:assets';
import astroLogo from '../assets/logo.png';
---


<!-- This component -->
<Image src={astroLogo} alt="My super logo!" />


<!-- will become the following HTML -->
<img
  src="/_vercel/image?url=_astro/logo.hash.png&w=...&q=..."
  alt="My super logo!"
  loading="lazy"
  decoding="async"
  width="..."
  height="..."
/>
```

### `devImageService`

[Section titled “devImageService”](#devimageservice)

**Type:** `'sharp' | string`\
**Default:** `sharp`\
**Available for:** Serverless, Static

**Added in:** `@astrojs/vercel@3.8.0`

Allows you to configure which image service to use in development when [imageService](#imageservice) is enabled. This can be useful if you cannot install Sharp’s dependencies on your development machine, but using another image service like Squoosh would allow you to preview images in your dev environment. Build is unaffected and will always use Vercel’s Image Optimization.

It can also be set to any arbitrary value in order to use a custom image service instead of Astro’s built-in ones.

astro.config.mjs

```diff
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';


export default defineConfig({
  // ...
  adapter: vercel({
+    imageService: true,
+    devImageService: 'sharp',
  }),
});
```

### `isr`

[Section titled “isr”](#isr)

**Type:** `boolean | VercelISRConfig`\
**Default:** `false`\
**Available for:** Serverless

**Added in:** `@astrojs/vercel@7.2.0`

Allows your project to be deployed as an [ISR (Incremental Static Regeneration)](https://vercel.com/docs/incremental-static-regeneration) function, which caches your on-demand rendered pages in the same way as prerendered pages after first request.

To enable this feature, set `isr` to true in your Vercel adapter configuration in `astro.config.mjs`:

astro.config.mjs

```diff
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';


export default defineConfig({
  // ...
  adapter: vercel({
+    isr: true,
  }),
});
```

Note that ISR function requests do not include search params, similar to [requests](/en/reference/api-reference/#request) in static mode.

#### ISR cache invalidation

[Section titled “ISR cache invalidation”](#isr-cache-invalidation)

By default, an ISR function caches for the duration of your deployment. You can further control caching by setting an expiration time, or by excluding particular routes from caching entirely.

##### Time-based invalidation

[Section titled “Time-based invalidation”](#time-based-invalidation)

By default, when ISR is enabled, routes use [Vercel’s cache shielding](https://vercel.com/docs/incremental-static-regeneration#differences-between-isr-and-cache-control-headers) and any Cache-Control headers are ignored. Configuring an `expiration` value (in seconds) allows you to control how long routes are cached. This means Cache-Control directives set by your application are also respected.

The following example defines `expiration` to cache all pages on first request and save them for 1 day:

astro.config.mjs

```js
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';


export default defineConfig({
  // ...
  adapter: vercel({
    isr: {
      expiration: 60 * 60 * 24,
    },
  }),
});
```

##### On-demand invalidation

[Section titled “On-demand invalidation”](#on-demand-invalidation)

To programmatically invalidate cached pages, create a bypass token and provide it to the `isr` config:

astro.config.mjs

```js
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';


export default defineConfig({
    adapter: vercel({
        isr: {
            // A secret random string that you create.
            bypassToken: "005556d774a8",
        }
    })
})
```

You can then invalidate a cached page by sending a HEAD or GET request to the page URL with the `x-prerender-revalidate` header set to your bypass token. See [Vercel’s on-demand ISR documentation](https://vercel.com/docs/build-output-api/v3/features#on-demand-incremental-static-regeneration-isr) for details.

##### Draft mode

[Section titled “Draft mode”](#draft-mode)

To bypass the ISR cache and render fresh content (e.g., for previewing unpublished CMS content), use [Vercel’s Draft mode](https://vercel.com/docs/build-output-api/v3/features#draft-mode). This requires [defining a `bypassToken`](#on-demand-invalidation) in your configuration and reusing its value in your pages to [set a cookie](/en/guides/on-demand-rendering/#cookies) named `__prerender_bypass`.

##### Excluding paths from caching

[Section titled “Excluding paths from caching”](#excluding-paths-from-caching)

Use the `exclude` option to prevent specific routes from being cached by ISR. These paths will always be rendered fresh on each request:

astro.config.mjs

```js
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';


export default defineConfig({
    adapter: vercel({
        isr: {
            // Paths that will always be served fresh.
            exclude: [
                '/preview',
                '/auth/[page]',
                /^\/api\/.+/ // Regular expressions supported since @astrojs/vercel@v8.1.0
            ]
        }
    })
})
```

### `includeFiles`

[Section titled “includeFiles”](#includefiles)

**Type:** `string[]`\
**Available for:** Serverless

Use this property to force files to be bundled with your function. This is helpful when you notice missing files.

astro.config.mjs

```diff
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';


export default defineConfig({
  // ...
  adapter: vercel({
+    includeFiles: ['./my-data.json'],
  }),
});
```

### `excludeFiles`

[Section titled “excludeFiles”](#excludefiles)

**Type:** `string[]`\
**Available for:** Serverless

Use this property to exclude any files from the bundling process that would otherwise be included.

astro.config.mjs

```diff
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';


export default defineConfig({
  // ...
  adapter: vercel({
+    excludeFiles: ['./src/some_big_file.jpg'],
  }),
});
```

### `maxDuration`

[Section titled “maxDuration”](#maxduration)

**Type:** `number`\
**Available for:** Serverless

Use this property to extend or limit the maximum duration (in seconds) that Serverless Functions can run before timing out. See the [Vercel documentation](https://vercel.com/docs/functions/serverless-functions/runtimes#maxduration) for the default and maximum limit for your account plan.

astro.config.mjs

```diff
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';


export default defineConfig({
// ...
  adapter: vercel({
+    maxDuration: 60
  }),
});
```

### `skewProtection`

[Section titled “skewProtection”](#skewprotection)

**Type:** `boolean`\
**Available for:** Serverless

**Added in:** `@astrojs/vercel@7.6.0`

Use this property to enable [Vercel Skew protection](https://vercel.com/docs/deployments/skew-protection) (available with Vercel Pro and Enterprise accounts).

astro.config.mjs

```diff
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';


export default defineConfig({
// ...
  adapter: vercel({
+    skewProtection: true
  }),
});
```

### Running Astro middleware on Vercel Edge Functions

[Section titled “Running Astro middleware on Vercel Edge Functions”](#running-astro-middleware-on-vercel-edge-functions)

The `@astrojs/vercel` adapter can create an [edge function](https://vercel.com/docs/functions/edge-functions) from an Astro middleware in your code base. When `edgeMiddleware` is enabled, an edge function will execute your middleware code for all requests including static assets, prerendered pages, and on-demand rendered pages.

For on-demand rendered pages, the `context.locals` object is serialized using JSON and sent in a header for the serverless function, which performs the rendering. As a security measure, the serverless function will refuse to serve requests with a `403 Forbidden` response unless they come from the generated edge function.

This is an opt-in feature. To enable it, set `edgeMiddleware` to `true`:

astro.config.mjs

```js
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';


export default defineConfig({
  // ...
  adapter: vercel({
    edgeMiddleware: true,
  }),
});
```

The edge middleware has access to Vercel’s [`RequestContext`](https://vercel.com/docs/functions/edge-middleware/middleware-api#requestcontext) as `ctx.locals.vercel.edge`. If you’re using TypeScript, you can [get proper typings](/en/guides/typescript/#extending-global-types) by updating `src/env.d.ts` to use `EdgeLocals`:

```ts
type EdgeLocals = import('@astrojs/vercel').EdgeLocals


declare namespace App {
  interface Locals extends EdgeLocals {
    // ...
  }
}
```

### Sessions

[Section titled “Sessions”](#sessions)

The Astro [Sessions API](/en/guides/sessions/) allows you to easily store user data between requests. This can be used for things like user data and preferences, shopping carts, and authentication credentials. Unlike cookie storage, there are no size limits on the data, and it can be restored on different devices.

When using sessions on Vercel, you need to [configure a driver](/en/reference/configuration-reference/#sessiondriver) for session storage. You can install a storage provider from [the Vercel marketplace](https://vercel.com/marketplace?category=storage).

For example, if you have installed [a Redis integration](https://vercel.com/marketplace?category=storage\&search=redis) and linked a database to your site:

1. Install the `ioredis` package:

   - npm

     ```sh
     npm install ioredis
     ```

   - pnpm

     ```sh
     pnpm install ioredis
     ```

   - Yarn

     ```sh
     yarn add ioredis
     ```

2. Use [the Vercel CLI](https://vercel.com/docs/cli) to load your environment variables:

   ```sh
   vercel env pull .env.local
   ```

   This will create a `.env.local` file in your project root with the environment variables needed to connect to your Redis database when developing locally.

3. Configure the session driver:

   astro.config.mjs

   ```diff
   import { defineConfig } from 'astro/config';
   import vercel from '@astrojs/vercel';


   export default defineConfig({
     adapter: vercel(),
   +  session: {
   +    driver: 'redis',
   +    options: {
   +      url: process.env.REDIS_URL,
   +    },
   +  },
   });
   ```

## Node.js Version Support

[Section titled “Node.js Version Support”](#nodejs-version-support)

The `@astrojs/vercel` adapter supports specific Node.js versions for deploying your Astro project on Vercel. To view the supported Node.js versions on Vercel, click on the settings tab for a project and scroll down to “Node.js Version” section.

Check out the [Vercel documentation](https://vercel.com/docs/functions/serverless-functions/runtimes/node-js#default-and-available-versions) to learn more.

## Experimental features

[Section titled “Experimental features”](#experimental-features)

The following features are also available for use, but may be subject to breaking changes in future updates. Please follow the [`@astrojs/vercel` CHANGELOG](https://github.com/withastro/astro/tree/main/packages/integrations/vercel/CHANGELOG.md) carefully for updates if you are using these features in your project.

### `experimentalStaticHeaders`

[Section titled “experimentalStaticHeaders”](#experimentalstaticheaders)

**Type:** `boolean`\
**Default:** `false`\
**Available for:** Serverless

**Added in:** `@astrojs/vercel@8.2.0`

Enables specifying custom headers for prerendered pages in Vercel’s configuration.

If enabled, the adapter will save [static headers in the Vercel `vercel.json` file](https://vercel.com/docs/project-configuration#headers) when provided by Astro features, such as Content Security Policy.

For example, when [experimental Content Security Policy](/en/reference/experimental-flags/csp/) is enabled, `experimentalStaticHeaders` can be used to add the CSP `headers` to your Vercel configuration, instead of creating a `<meta>` element:

astro.config.mjs

```js
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';


export default defineConfig({
  experimental: {
    csp: true
  },
  adapter: vercel({
    experimentalStaticHeaders: true
  })
});
```
