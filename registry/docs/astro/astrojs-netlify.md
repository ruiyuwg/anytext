# @astrojs/netlify

> Learn how to use the @astrojs/netlify adapter to deploy your Astro project.

This adapter allows Astro to deploy your [on-demand rendered routes and features](/en/guides/on-demand-rendering/) to [Netlify](https://www.netlify.com/), including [server islands](/en/guides/server-islands/), [actions](/en/guides/actions/), and [sessions](/en/guides/sessions/).

If you’re using Astro as a static site builder, you only need this adapter if you are using additional Netlify services that require a server (e.g. [Netlify Image CDN](#netlify-image-cdn-support)). Otherwise, you do not need an adapter to deploy your static site.

Learn how to deploy your Astro site in our [Netlify deployment guide](/en/guides/deploy/netlify/).

## Why Astro Netlify

[Section titled “Why Astro Netlify”](#why-astro-netlify)

[Netlify](https://www.netlify.com/) is a deployment platform that allows you to host your site by connecting directly to your GitHub repository. This adapter enhances the Astro build process to prepare your project for deployment through Netlify.

## Installation

[Section titled “Installation”](#installation)

Astro includes an `astro add` command to automate the setup of official integrations. If you prefer, you can [install integrations manually](#manual-install) instead.

Add the Netlify adapter to enable on-demand rendering in your Astro project with the `astro add` command. This will install `@astrojs/netlify` and make the appropriate changes to your `astro.config.mjs` file in one step.

- npm

  ```sh
  npx astro add netlify
  ```

- pnpm

  ```sh
  pnpm astro add netlify
  ```

- Yarn

  ```sh
  yarn astro add netlify
  ```

Now, you can enable [on-demand rendering per page](/en/guides/on-demand-rendering/#enabling-on-demand-rendering), or set your build output configuration to `output: 'server'` to [server-render all your pages by default](/en/guides/on-demand-rendering/#server-mode).

### Manual Install

[Section titled “Manual Install”](#manual-install)

First, install the Netlify adapter to your project’s dependencies using your preferred package manager:

- npm

  ```sh
  npm install @astrojs/netlify
  ```

- pnpm

  ```sh
  pnpm add @astrojs/netlify
  ```

- Yarn

  ```sh
  yarn add @astrojs/netlify
  ```

Then, add the adapter to your `astro.config.*` file:

astro.config.mjs

```diff
 import { defineConfig } from 'astro/config';
 +import netlify from '@astrojs/netlify';


 export default defineConfig({
    // ...
+    adapter: netlify(),
 });
```

## Usage

[Section titled “Usage”](#usage)

[Read the full deployment guide here.](/en/guides/deploy/netlify/)

Follow the instructions to [build your site locally](/en/guides/deploy/#building-your-site-locally). After building, you will have a `.netlify/` folder containing both [Netlify Functions](https://docs.netlify.com/functions/overview/) in the `.netlify/functions-internal/` folder and [Netlify Edge Functions](https://docs.netlify.com/edge-functions/overview/) in the`.netlify/edge-functions/` folder.

To deploy your site, install the [Netlify CLI](https://docs.netlify.com/cli/get-started/) and run:

```sh
netlify deploy
```

The [Netlify Blog post on Astro](https://www.netlify.com/blog/how-to-deploy-astro/) and the [Netlify Docs](https://docs.netlify.com/integrations/frameworks/astro/) provide more information on how to use this integration to deploy to Netlify.

### Running Astro middleware on Netlify Edge Functions

[Section titled “Running Astro middleware on Netlify Edge Functions”](#running-astro-middleware-on-netlify-edge-functions)

Any Astro middleware is applied to pre-rendered pages at build-time, and to on-demand-rendered pages at runtime.

To implement redirects, access control, or custom response headers for pre-rendered pages, run your middleware on Netlify Edge Functions by enabling the [`edgeMiddleware` option](/en/reference/adapter-reference/#edgemiddleware):

astro.config.mjs

```diff
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';


export default defineConfig({
  // ...
  adapter: netlify({
+    edgeMiddleware: true,
  }),
});
```

When `edgeMiddleware` is enabled, an edge function will execute your middleware code for all requests including static assets, prerendered pages, and on-demand rendered pages.

For on-demand rendered pages, the `context.locals` object is serialized using JSON and sent in a header for the serverless function, which performs the rendering. As a security measure, the serverless function will refuse to serve requests with a `403 Forbidden` response unless they come from the generated edge function.

### Accessing edge context from your site

[Section titled “Accessing edge context from your site”](#accessing-edge-context-from-your-site)

Netlify Edge Functions provide a [context object](https://docs.netlify.com/edge-functions/api/#netlify-specific-context-object) that includes metadata about the request such as a user’s IP, geolocation data, and cookies.

This can be accessed through the `Astro.locals.netlify.context` object:

```astro
---
const {
  geo: { city },
} = Astro.locals.netlify.context;
---


<h1>Hello there, friendly visitor from {city}!</h1>
```

If you’re using TypeScript, you can [get proper typings](/en/guides/typescript/#extending-global-types) by updating `src/env.d.ts` to use `NetlifyLocals`:

src/env.d.ts

```ts
type NetlifyLocals = import('@astrojs/netlify').NetlifyLocals


declare namespace App {
  interface Locals extends NetlifyLocals {
    // ...
  }
}
```

This is not available on prerendered pages.

### Netlify Image CDN support

[Section titled “Netlify Image CDN support”](#netlify-image-cdn-support)

This adapter by default uses the [Netlify Image CDN](https://docs.netlify.com/image-cdn/overview/) to transform images on-the-fly without impacting build times. It’s implemented using an [Astro Image Service](/en/reference/image-service-reference/) under the hood.

To opt out of Netlify’s Image CDN remote image optimization, use the `imageCDN` option:

astro.config.mjs

```diff
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';


export default defineConfig({
  // ...
  adapter: netlify({
+    imageCDN: false,
  }),
});
```

If you are using images hosted on another domain, you must authorize the domain or URL patterns using the [`image.domains`](/en/reference/configuration-reference/#imagedomains) or [`image.remotePatterns`](/en/reference/configuration-reference/#imageremotepatterns) configuration options:

astro.config.mjs

```diff
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';


export default defineConfig({
    // ...
    adapter: netlify(),
+    image: {
+      domains: ['example.com'],
+    },
});
```

For more information, see [the guide to authorizing remote images](/en/guides/images/#authorizing-remote-images). This is not required for images hosted on the same domain as your site.

### Static sites with the Netlify Adapter

[Section titled “Static sites with the Netlify Adapter”](#static-sites-with-the-netlify-adapter)

For static sites (`output: 'static'`) hosted on Netlify, you usually don’t need an adapter. However, some deployment features are only available through an adapter.

Static sites will need to install this adapter to use and configure Netlify’s [image service](#netlify-image-cdn-support).

If you use `redirects` configuration in your Astro config, the Netlify adapter can be used to translate this to the proper `_redirects` format.

astro.config.mjs

```js
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';


export default defineConfig({
  // ...
  adapter: netlify(),
  redirects: {
    '/blog/old-post': '/blog/new-post',
  },
});
```

Once you run `astro build` there will be a `dist/_redirects` file. Netlify will use that to properly route pages in production.

Note

You can still include a `public/_redirects` file for manual redirects. Any redirects you specify in the redirects config are appended to the end of your own.

### Sessions

[Section titled “Sessions”](#sessions)

The Astro [Sessions API](/en/guides/sessions/) allows you to easily store user data between requests. This can be used for things like user data and preferences, shopping carts, and authentication credentials. Unlike cookie storage, there are no size limits on the data, and it can be restored on different devices.

Astro automatically configures [Netlify Blobs](https://docs.netlify.com/blobs/overview/) for session storage when using the Netlify adapter. If you would prefer to use a different session storage driver, you can specify it in your Astro config. See [the `session` configuration reference](/en/reference/configuration-reference/#sessiondriver) for more details.

### Caching Pages

[Section titled “Caching Pages”](#caching-pages)

On-demand rendered pages without any dynamic content can be cached to improve performance and lower resource usage. Enabling the `cacheOnDemandPages` option in the adapter will cache all server-rendered pages for up to one year:

astro.config.mjs

```diff
export default defineConfig({
  // ...
  adapter: netlify({
+    cacheOnDemandPages: true,
  }),
});
```

This can be changed on a per-page basis by adding caching headers to your response:

pages/index.astro

```astro
---
import Layout from '../components/Layout.astro';


Astro.response.headers.set('CDN-Cache-Control', 'public, max-age=45, must-revalidate');
---


<Layout title="Astro on Netlify">
  {new Date()}
</Layout>
```

With [fine-grained cache control](https://www.netlify.com/blog/swr-and-fine-grained-cache-control/), Netlify supports standard caching headers like `CDN-Cache-Control` or `Vary`. Refer to the docs to learn about implementing e.g. time to live (TTL) or stale while revalidate (SWR) caching: <https://docs.netlify.com/platform/caching>

### Skew Protection

[Section titled “Skew Protection”](#skew-protection)

**Added in:** `@astrojs/netlify@6.6.0` New

Netlify’s skew protection ensures that users accessing your site during a deployment continue to receive content from the same deploy version. The Netlify adapter automatically configures skew protection for Astro features like actions, server islands, view transitions, and prefetch requests by injecting the current deploy ID into internal requests. This prevents version mismatches between the client and server during active deployments.

While Astro automatically adds the skew protection header for its built-in features, if you are making your own fetch requests to your site, you can include the header manually using the `DEPLOY_ID` environment variable:

```js
const response = await fetch('/api/endpoint', {
  headers: {
    'X-Netlify-Deploy-ID': import.meta.env.DEPLOY_ID,
  },
});
```

### Including or excluding files from Netlify Functions

[Section titled “Including or excluding files from Netlify Functions”](#including-or-excluding-files-from-netlify-functions)

When deploying an Astro site with on-demand rendering to Netlify, the generated functions automatically trace and include server dependencies. However, you may need to customize which files are included in your Netlify Functions.

#### `includeFiles`

[Section titled “includeFiles”](#includefiles)

**Type:** `string[]`\
**Default:** `[]`

**Added in:** `astro@5.3.0`

The `includeFiles` property allows you to explicitly specify additional files that should be bundled with your function. This is useful for files that aren’t automatically detected as dependencies, such as:

- Data files loaded using `fs` operations
- Configuration files
- Template files

Provide an array of additional files to include with file paths relative to your project’s [`root`](/en/reference/configuration-reference/#root). Absolute paths may not work as expected.

astro.config.mjs

```diff
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';


export default defineConfig({
  // ...
  adapter: netlify({
+    includeFiles: ['./my-data.json'], // relative to `root`
  }),
});
```

#### `excludeFiles`

[Section titled “excludeFiles”](#excludefiles)

**Type:** `string[]`\
**Default:** `[]`

**Added in:** `astro@5.3.0`

You can use the `excludeFiles` property to prevent specific files from being bundled that would otherwise be included. This is helpful for:

- Reducing bundle size
- Excluding large binaries
- Preventing unwanted files from being deployed

Provide an array of specific files to exclude with file paths relative to your project’s [`root`](/en/reference/configuration-reference/#root). Absolute paths may not work as expected.

astro.config.mjs

```diff
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';


export default defineConfig({
  // ...
  adapter: netlify({
+    excludeFiles: ['./src/some_big_file.jpg'], // relative to `root`
  }),
});
```

#### Using glob patterns

[Section titled “Using glob patterns”](#using-glob-patterns)

Both `includeFiles` and `excludeFiles` support [glob patterns](/en/guides/imports/#glob-patterns) for matching multiple files:

astro.config.mjs

```diff
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';


export default defineConfig({
  adapter: netlify({
    includeFiles: [
      +'./data/**/*.json'
    ],
    excludeFiles: [
      +'./node_modules/package/**/*',
      +'./src/**/*.test.js'
    ]
  }),
});
```

### Local development features

[Section titled “Local development features”](#local-development-features)

When running `astro dev`, the adapter enables several Netlify platform features to ensure the environment matches production as closely as possible. These include:

- A local [Netlify Image CDN](https://docs.netlify.com/build/image-cdn/overview/) server. This is used for [images](#netlify-image-cdn-support) by default.
- A local [Netlify Blobs](https://docs.netlify.com/build/data-and-storage/netlify-blobs/) server. This is used for [sessions](#sessions) by default
- [Redirects, rewrites](https://docs.netlify.com/manage/routing/redirects/overview/) and [headers](https://docs.netlify.com/manage/routing/headers/) from your Netlify config
- Access to [Netlify Edge Context](#accessing-edge-context-from-your-site) in on-demand pages
- [Environment variables](https://docs.netlify.com/build/environment-variables/overview/) from your Netlify site

These work best when your local site is [linked to a Netlify site](https://docs.netlify.com/api-and-cli-guides/cli-guides/get-started-with-cli/#link-and-unlink-sites) using `netlify link`.

You can enable or disable some of these features using the [`devFeatures`](#devfeatures) option in your adapter configuration. By default, all features are enabled except for environment variables.

#### `devFeatures`

[Section titled “devFeatures”](#devfeatures)

**Type:** `boolean | object`\
**Default:** `{ images: true, environmentVariables: false }`

**Added in:** `@astrojs/netlify@6.5.1`

The `devFeatures` option can be either a boolean to enable or disable all features, or an object to enable specific features.

astro.config.mjs

```diff
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';


export default defineConfig({
  // ...
  adapter: netlify({
+    devFeatures: {
      +// Enable Netlify Image CDN support in dev. Defaults to true.
+      images: false,
      +// Inject Netlify environment variables in dev. Defaults to false.
+      environmentVariables: true,
+    },
  }),
});
```

##### `devFeatures.images`

[Section titled “devFeatures.images”](#devfeaturesimages)

**Type:** `boolean`\
**Default:** `true`

**Added in:** `@astrojs/netlify@6.5.1`

Enables support for the local [Netlify Image CDN](https://docs.netlify.com/build/image-cdn/overview/) in development.

This uses a local version of the Netlify Image CDN, rather than the default Astro image service.

##### `devFeatures.environmentVariables`

[Section titled “devFeatures.environmentVariables”](#devfeaturesenvironmentvariables)

**Type:** `boolean`\
**Default:** `false`

**Added in:** `@astrojs/netlify@6.5.1`

Injects environment variables from your Netlify site into the development environment.

This allows you to use the same values in development as you would in production. See [the Netlify docs on environment variables](https://docs.netlify.com/build/environment-variables/overview/) for more information, including how to use different variables for different environments.

## Experimental features

[Section titled “Experimental features”](#experimental-features)

The following features are also available for use, but may be subject to breaking changes in future updates. Please follow the [`@astrojs/netlify` CHANGELOG](https://github.com/withastro/astro/tree/main/packages/integrations/netlify/CHANGELOG.md) carefully for updates if you are using these features in your project.

### `experimentalStaticHeaders`

[Section titled “experimentalStaticHeaders”](#experimentalstaticheaders)

**Type:** `boolean`\
**Default:** `false`

**Added in:** `@astrojs/netlify@6.4.0`

Enables specifying custom headers for prerendered pages in Netlify’s configuration.

If enabled, the adapter will save [static headers in the Framework API config file](https://docs.netlify.com/frameworks-api/#headers) when provided by Astro features, such as Content Security Policy.

For example, when [experimental Content Security Policy](/en/reference/experimental-flags/csp/) is enabled, `experimentalStaticHeaders` can be used to add the CSP `headers` to your Netlify configuration, instead of creating a `<meta>` element:

astro.config.mjs

```js
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';


export default defineConfig({
  experimental: {
    csp: true
  },
  adapter: netlify({
    experimentalStaticHeaders: true
  })
});
```

## Examples

[Section titled “Examples”](#examples)

- The [Astro Netlify Edge Starter](https://github.com/sarahetter/astro-netlify-edge-starter) provides an example and a guide in the README.

- [Browse Astro Netlify projects on GitHub](https://github.com/search?q=path%3A**%2Fastro.config.mjs+%40astrojs%2Fnetlify\&type=code) for more examples!
