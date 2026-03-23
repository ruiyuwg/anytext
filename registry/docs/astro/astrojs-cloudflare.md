# @astrojs/cloudflare

> Learn how to use the @astrojs/cloudflare adapter to deploy your Astro project.

This adapter allows Astro to deploy your [on-demand rendered routes and features](/en/guides/on-demand-rendering/) to [Cloudflare](https://www.cloudflare.com/), including [server islands](/en/guides/server-islands/), [actions](/en/guides/actions/), and [sessions](/en/guides/sessions/).

If you’re using Astro as a static site builder, you don’t need an adapter.

Learn how to deploy your Astro site in our [Cloudflare deployment guide](/en/guides/deploy/cloudflare/).

Upgrading to Astro 6?

Astro 6 requires an upgrade to v13 of this adapter. See the [Cloudflare adapter upgrade instructions for Astro 6](#upgrading-to-v13-and-astro-6) for breaking changes and migration guidance.

## Why Astro Cloudflare

[Section titled “Why Astro Cloudflare”](#why-astro-cloudflare)

Cloudflare’s [Developer Platform](https://developers.cloudflare.com/) lets you develop full-stack applications with access to resources such as storage and AI, all deployed to a global edge network. This adapter builds your Astro project for deployment through Cloudflare.

## Installation

[Section titled “Installation”](#installation)

Astro includes an `astro add` command to automate the setup of official integrations. If you prefer, you can [install integrations manually](#manual-install) instead.

Add the Cloudflare adapter to enable server-rendering in your Astro project with the `astro add` command. This will install `@astrojs/cloudflare` and make the appropriate changes to your `astro.config.mjs` file in one step.

- npm

  ```sh
  npx astro add cloudflare
  ```

- pnpm

  ```sh
  pnpm astro add cloudflare
  ```

- Yarn

  ```sh
  yarn astro add cloudflare
  ```

Now, you can enable [on-demand rendering per page](/en/guides/on-demand-rendering/#enabling-on-demand-rendering), or set your build output configuration to `output: 'server'` to [server-render all your pages by default](/en/guides/on-demand-rendering/#server-mode).

### Manual Install

[Section titled “Manual Install”](#manual-install)

1. Add the `@astrojs/cloudflare` adapter to your project’s dependencies using your preferred package manager.

   - npm

     ```sh
     npm install @astrojs/cloudflare
     ```

   - pnpm

     ```sh
     pnpm add @astrojs/cloudflare
     ```

   - Yarn

     ```sh
     yarn add @astrojs/cloudflare
     ```

2. Add the adapter to your `astro.config.mjs` file:

   astro.config.mjs

   ```diff
   import { defineConfig } from 'astro/config';
   +import cloudflare from '@astrojs/cloudflare';


   export default defineConfig({
   +  adapter: cloudflare(),
   });
   ```

3. Astro will automatically generate a default configuration, using the package.json name field or the folder name as the Worker name. You can optionally create a [Wrangler configuration file](https://developers.cloudflare.com/workers/wrangler/configuration/) if you need custom settings. This example declares Cloudflare KV bindings:

   wrangler.jsonc

   ```jsonc
   {
     "name": "my-astro-app",
     // Add your bindings here, e.g.:
     // "kv_namespaces": [{ "binding": "MY_KV", "id": "<namespace_id>" }]
   }
   ```

## Options

[Section titled “Options”](#options)

The Cloudflare adapter accepts the following options from [`@cloudflare/vite-plugin`](https://developers.cloudflare.com/workers/vite-plugin/):

- `auxiliaryWorkers`
- `configPath`
- `inspectorPort`
- `persistState`
- `remoteBindings`
- `experimental.headersAndRedirectsDevModeSupport`

It also accepts the following:

### `imageService`

[Section titled “imageService”](#imageservice)

**Type:** `'passthrough' | 'cloudflare' | 'cloudflare-binding' | 'compile' | 'custom' | { build: 'compile', runtime?: 'cloudflare-binding' | 'passthrough' }`\
**Default:** `'cloudflare-binding'`

Determines which image service is used by the adapter. The adapter will default to `cloudflare-binding` mode when an incompatible image service is configured. Otherwise, it will use the globally configured image service:

- **`cloudflare`:** Uses the [Cloudflare Image Resizing](https://developers.cloudflare.com/images/image-resizing/) service.
- **`cloudflare-binding`:** Uses the [Cloudflare Images binding](https://developers.cloudflare.com/images/transform-images/bindings/) for image transformation. The binding is automatically provisioned when you deploy.
- **`passthrough`:** Uses the existing [`noop`](/en/guides/images/#configure-no-op-passthrough-service) service.
- **`compile`:** Uses a combination of internal dependencies to transform images locally at build time for prerendered routes. The noop `passthrough` option is configured for on-demand rendered pages.
- **`custom`:** Always uses the image service configured in [Image Options](/en/reference/configuration-reference/#image-options). **This option will not check to see whether the configured image service works in Cloudflare’s `workerd` runtime.**

It is also possible to configure your image service as an object, setting both a build time and runtime service independently. Currently, `'compile'` is the only available build-time option. The supported runtime options are `'passthrough'` (default) and `'cloudflare-binding'`:

astro.config.mjs

```diff
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';


export default defineConfig({
  adapter: cloudflare({
+    imageService: { build: 'compile', runtime: 'cloudflare-binding' }
  }),
});
```

### `sessionKVBindingName`

[Section titled “sessionKVBindingName”](#sessionkvbindingname)

**Type:** `string`\
**Default:** `SESSION`

**Added in:** `@astrojs/cloudflare@12.4.0`

Sets the name of the KV binding used for session storage. By default, the KV namespace is automatically provisioned when you deploy, and is named `SESSION`. You can change this name by setting the binding manually in your wrangler config. See [Sessions](#sessions) for more information.

astro.config.mjs

```js
export default defineConfig({
  adapter: cloudflare({
    sessionKVBindingName: 'MY_SESSION_BINDING',
  }),
});
```

wrangler.jsonc

```jsonc
{
  "kv_namespaces": [
    {
      "binding": "MY_SESSION_BINDING",
    }
  ]
}
```

### `imagesBindingName`

[Section titled “imagesBindingName”](#imagesbindingname)

**Type:** `string`\
**Default:** `IMAGES`

Sets the name of the Images binding used when [`imageService`](#imageservice) is set to `cloudflare-binding`. By default, the binding is automatically provisioned with the name `IMAGES` when you deploy. You can change it by setting the binding manually in your wrangler config:

astro.config.mjs

```js
export default defineConfig({
  adapter: cloudflare({
    imageService: 'cloudflare-binding',
    imagesBindingName: 'MY_IMAGES',
  }),
});
```

wrangler.jsonc

```jsonc
{
  "images": {
    "binding": "MY_IMAGES"
  }
}
```

### `prerenderEnvironment`

[Section titled “prerenderEnvironment”](#prerenderenvironment)

**Type:** `'workerd' | 'node'`\
**Default:** `'workerd'`

**Added in:** `@astrojs/cloudflare@13.1.0` New

Controls which runtime is used for [prerendering](/en/guides/on-demand-rendering/) static pages at build time and during development.

By default, prerendered pages are built using Cloudflare’s `workerd` runtime to match the production environment as closely as possible. Set this option to `'node'` when your prerendered pages depend on Node.js APIs or NPM packages that are not compatible with `workerd`:

astro.config.mjs

```js
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';


export default defineConfig({
  adapter: cloudflare({
    prerenderEnvironment: 'node',
  }),
});
```

For example, if a prerendered page reads from the file system using `node:fs`, set `prerenderEnvironment` to `'node'`. On-demand rendered pages are unaffected by this option and always run in `workerd`.

## Cloudflare runtime

[Section titled “Cloudflare runtime”](#cloudflare-runtime)

The Cloudflare runtime gives you access to environment variables, bindings to Cloudflare resources, and other Cloudflare-specific APIs.

### Environment variables and bindings

[Section titled “Environment variables and bindings”](#environment-variables-and-bindings)

Environment variables and bindings are defined in your `wrangler.jsonc` configuration file.

Define [environment variables](https://developers.cloudflare.com/workers/configuration/environment-variables/#add-environment-variables-via-wrangler) that do not store sensitive information in `wrangler.jsonc`:

wrangler.jsonc

```jsonc
{
  "vars": {
    "MY_VARIABLE": "test",
  },
}
```

[Secrets](https://developers.cloudflare.com/workers/configuration/secrets/) are a special type of environment variable that allow you to attach encrypted text values to your Worker. They need to be defined differently to ensure they are not visible within Wrangler or Cloudflare dashboard after you set them.

To define `secrets`, add them through the [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/) rather than in your Wrangler config file:

```bash
npx wrangler secret put <KEY>
```

To set secrets for local development, add a `.dev.vars` file to the root of the Astro project:

.dev.vars

```ini
DB_PASSWORD=myPassword
```

Cloudflare environment variables and secrets can be imported from `"cloudflare:workers"`:

src/pages/index.astro

```astro
---
import { env } from 'cloudflare:workers';


const myVariable = env.MY_VARIABLE;
const myKVNamespace = env.MY_KV;
---
```

They are also compatible with the [`astro:env` API](/en/guides/environment-variables/#type-safe-environment-variables):

```js
import { MY_VARIABLE } from 'astro:env/server';
```

See the [list of all supported bindings](https://developers.cloudflare.com/workers/wrangler/api/#supported-bindings) in the Cloudflare documentation.

### The `cf` object

[Section titled “The cf object”](#the-cf-object)

The Cloudflare [`cf` object](https://developers.cloudflare.com/workers/runtime-apis/request/#incomingrequestcfproperties) contains request metadata such as geolocation information. Access it directly from the request:

src/pages/index.astro

```astro
---
const cf = Astro.request.cf;
const country = cf?.country;
---
```

### Execution context

[Section titled “Execution context”](#execution-context)

Access the Cloudflare [`ExecutionContext`](https://developers.cloudflare.com/workers/runtime-apis/context/) through `Astro.locals.cfContext`. This is useful for operations like [`waitUntil()`](https://developers.cloudflare.com/workers/runtime-apis/context/#waituntil), or accessing [Durable Object exports](https://developers.cloudflare.com/workers/runtime-apis/context/#exports) within your page.

src/pages/index.astro

```astro
---
const cfContext = Astro.locals.cfContext;
cfContext.exports.Greeter.greet('Astro');
cfContext.waitUntil(someAsyncOperation());
---
```

### Typing

[Section titled “Typing”](#typing)

`wrangler` provides a [`types`](https://developers.cloudflare.com/workers/wrangler/commands/#types) command to generate TypeScript types for your bindings. This allows you to type your environment without the need for manual type definitions.

Run `wrangler types` every time you change your configuration files (e.g. `wrangler.jsonc`, `.dev.vars`).

Note

The following example shows a script configuration to run `wrangler types` automatically before other commands:

package.json

```json
{
  "scripts": {
    "dev": "wrangler types && astro dev",
    "start": "wrangler types && astro dev",
    "build": "wrangler types && astro check && astro build",
    "preview": "wrangler types && astro preview",
    "astro": "astro"
  }
}
```

## Cloudflare Platform

[Section titled “Cloudflare Platform”](#cloudflare-platform)

### Headers

[Section titled “Headers”](#headers)

Add [custom headers](https://developers.cloudflare.com/workers/static-assets/headers/) for static assets by creating a `_headers` file in your Astro project’s `public/` folder. This file will be copied to the build output directory. Headers in `_headers` are not applied to responses generated by your Worker code.

### Assets

[Section titled “Assets”](#assets)

Assets built by Astro are all named with a hash and, therefore, can be given long cache headers. By default, Astro on Cloudflare will add such a header for these files.

### Redirects

[Section titled “Redirects”](#redirects)

Declare [custom redirects for static assets](https://developers.cloudflare.com/workers/static-assets/redirects/) by adding a `_redirects` file in your Astro project’s `public/` folder. This file will be copied to your build output directory. For dynamic routes, [configure redirects in Astro directly](/en/guides/routing/#configured-redirects) instead.

### Routes

[Section titled “Routes”](#routes)

Routing for static assets is based on the file structure in the build directory (e.g. `./dist`). If no match is found, this will fall back to the Worker for on-demand rendering. Read more about [static asset routing with Cloudflare Workers](https://developers.cloudflare.com/workers/static-assets/routing/).

## Sessions

[Section titled “Sessions”](#sessions)

The Astro [Sessions API](/en/guides/sessions/) allows you to easily store user data between requests. This can be used for things like user data and preferences, shopping carts, and authentication credentials. Unlike cookie storage, there are no size limits on the data, and it can be restored on different devices.

Astro automatically configures [Workers KV](https://developers.cloudflare.com/kv/) for session storage when using the Cloudflare adapter. Wrangler can [automatically provision](https://developers.cloudflare.com/workers/wrangler/configuration/#automatic-provisioning) the KV namespace when you deploy, so no manual setup is required. Alternatively, you can define the KV binding manually in your `wrangler.jsonc` file and set a custom binding name using the [`sessionKVBindingName`](#sessionkvbindingname) adapter option.

src/components/CartButton.astro

```astro
---
export const prerender = false; // Not needed in 'server' mode
const cart = await Astro.session?.get('cart');
---


<a href="/checkout">🛒 {cart?.length ?? 0} items</a>
```

By default, the KV binding is named `SESSION`. To use a different name, set the [`sessionKVBindingName`](#sessionkvbindingname) option in the adapter config.

Note

Writes to Cloudflare KV are [eventually consistent](https://developers.cloudflare.com/kv/concepts/how-kv-works/#consistency) between regions. This means that changes are available immediately within the same region but may take up to 60 seconds to propagate globally. This won’t affect most users as they are unlikely to switch regions between requests, but it may be a consideration for some use cases, such as VPN users.

## Cloudflare Module Imports

[Section titled “Cloudflare Module Imports”](#cloudflare-module-imports)

The Cloudflare `workerd` runtime supports imports of some [non-standard module types](https://developers.cloudflare.com/workers/wrangler/bundling/#including-non-javascript-modules). Most additional file types are also available in Astro:

- `.wasm` or `.wasm?module`: exports a [`WebAssembly.Module`](https://developer.mozilla.org/en-US/docs/WebAssembly/JavaScript_interface/Module) that can then be instantiated
- `.bin`: exports an [`ArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) of the raw binary contents of the file
- `.txt`: exports a string of the file contents

All module types export a single default value. Modules can be imported both from server-side rendered pages, or from prerendered pages for static site generation.

The following is an example of importing a Wasm module that then responds to requests by adding the request’s number parameters together.

pages/add/\[a]/\[b].js

```js
// Import the WebAssembly module
import mod from '../util/add.wasm';


// Instantiate first in order to use it
const addModule: any = new WebAssembly.Instance(mod);


export async function GET(context) {
  const a = Number.parseInt(context.params.a);
  const b = Number.parseInt(context.params.b);
  return new Response(`${addModule.exports.add(a, b)}`);
}
```

While this example is trivial, Wasm can be used to accelerate computationally intensive operations which do not involve significant I/O such as embedding an image processing library, or embedding a small pre-indexed database for search over a read-only dataset.

## Node.js compatibility

[Section titled “Node.js compatibility”](#nodejs-compatibility)

Cloudflare Workers support most Node.js runtime APIs through the `nodejs_compat` compatibility flag. This includes commonly used modules like `node:buffer`, `node:crypto`, `node:path`, and many others. See the [full list of supported Node.js APIs](https://developers.cloudflare.com/workers/runtime-apis/nodejs) in Cloudflare’s documentation.

To enable Node.js compatibility, add the `nodejs_compat` flag to your Wrangler configuration:

wrangler.jsonc

```jsonc
{
  "compatibility_flags": ["nodejs_compat"],
}
```

Then use the `node:*` import syntax in your server-side code:

src/pages/api/endpoint.js

```js
export const prerender = false; // Not needed in 'server' mode
import { Buffer } from 'node:buffer';
```

For Node.js APIs not yet supported in the Workers runtime, Wrangler can inject polyfills (requires `nodejs_compat` and a compatibility date of 2024-09-23 or later).

See the [Cloudflare documentation on Node.js compatibility](https://developers.cloudflare.com/workers/runtime-apis/nodejs/) for the complete list of supported APIs and configuration details.

## Local preview

[Section titled “Local preview”](#local-preview)

After building your project with `astro build`, use `astro preview` to test your Cloudflare Workers application locally. The preview runs using Cloudflare’s `workerd` runtime, closely mirroring production behavior.

### Meaningful error messages

[Section titled “Meaningful error messages”](#meaningful-error-messages)

By default, errors occurring while running your application in Wrangler are minified. For better debugging, add `vite.build.minify = false` to your `astro.config.mjs`:

astro.config.mjs

```diff
export default defineConfig({
  adapter: cloudflare(),
+  vite: {
+    build: {
+      minify: false,
+    },
+  },
});
```

## Upgrading to v13 and Astro 6

[Section titled “Upgrading to v13 and Astro 6”](#upgrading-to-v13-and-astro-6)

Astro 6 brings significant improvements to the Cloudflare development experience and requires `@astrojs/cloudflare` v13 or later. Now, `astro dev` uses Cloudflare’s Vite plugin and `workerd` runtime to closely mirror production behavior.

See [the Astro 6 upgrade guide](/en/guides/upgrade-to/v6/) for full instructions on upgrading Astro itself.

### Development server now uses workerd

[Section titled “Development server now uses workerd”](#development-server-now-uses-workerd)

The biggest change for Cloudflare users in Astro 6 is that `astro dev` and `astro preview` now use the Cloudflare Vite plugin to run your site using the real Workers runtime (`workerd`) instead of Node.js. This means your development environment is now a much closer replica of your production environment, with the same runtime, APIs, and behavior.

This change helps you catch issues during development that would have previously only appeared in production, and features like Durable Objects, R2 bindings, and Workers AI now work exactly as they do when deployed to Cloudflare’s platform.

This change is transparent for most projects. If your project had special configuration for `astro dev` or was relying on Node.js-specific behavior in development, adjust your code or configuration accordingly.

### New: `prerenderEnvironment` option

[Section titled “New: prerenderEnvironment option”](#new-prerenderenvironment-option)

In Astro 6, prerendered pages now run in Cloudflare’s `workerd` runtime by default during development and build. Previously, these pages always ran in Node.js.

If your prerendered pages depend on Node.js APIs (for example `node:fs`) or NPM packages that are not compatible with `workerd`, set `prerenderEnvironment: 'node'` in your Cloudflare adapter config to restore the previous behavior for prerendering.

On-demand rendered pages are not affected by this option and continue to run in `workerd`.

See [`prerenderEnvironment`](#prerenderenvironment) for configuration details.

### Some dependencies might need to be pre-compiled

[Section titled “Some dependencies might need to be pre-compiled”](#some-dependencies-might-need-to-be-pre-compiled)

The new workerd environment does not support CommonJS syntax, including Node.js specific syntax such as `require` and `module.exports`. This means that some of your project dependencies may throw errors in the development server or during the build.

If you have control over the dependency, you can create a Vite plugin and pre-compile the dependency using the `optimizeDeps.include` option.

For example, you can create a Vite plugin to pre-compile the dependency `postcss` in order to use the Expressive Code syntax highlighter:

```diff
function noExternalPlugin() {
  return {
    name: "optimize-dependencies",
    configEnvironment(environment) {
      // We're only interested in server environments
      if (environment !== 'client') {
        return {
+          optimizeDeps: {
+            include: [
              +"postcss"
              +// Or you can use this syntax if you don't depend directly on a dependency
              +// "expressive-code > postcss"
+            ]
+          }
        }
      }
    }
  }
}
```

### Changed: Wrangler entrypoint configuration

[Section titled “Changed: Wrangler entrypoint configuration”](#changed-wrangler-entrypoint-configuration)

Previously, the `main` field in your Wrangler configuration pointed to the built worker file (e.g. `dist/_worker.js/index.js`). With Astro 6, this has changed to point to a new unified entrypoint provided by the Cloudflare adapter: `@astrojs/cloudflare/entrypoints/server`.

Update your `wrangler.jsonc` to use the new entrypoint:

wrangler.jsonc

```diff
{
  -"main": "dist/_worker.js/index.js",
  +"main": "@astrojs/cloudflare/entrypoints/server",
  "name": "my-astro-app",
  // ... rest of config
}
```

This single entrypoint handles both `astro dev` and production deployments.

### Removed: `Astro.locals.runtime` API

[Section titled “Removed: Astro.locals.runtime API”](#removed-astrolocalsruntime-api)

The `Astro.locals.runtime` object has been removed in favor of direct access to Cloudflare Workers APIs. Access environment variables, the `cf` object, caches, and execution context directly through the provided interfaces.

**Accessing environment variables:**

Previously, environment variables were accessed through `Astro.locals.runtime.env`. Now import `env` directly instead:

```diff
-const { env } = Astro.locals.runtime;
+import { env } from 'cloudflare:workers';
```

**Accessing the `cf` object:**

Previously, the `cf` object was accessed through `Astro.locals.runtime.cf`. Now access it directly from the request:

```diff
-const { cf } = Astro.locals.runtime;
+const cf = Astro.request.cf;
```

**Accessing the caches API:**

Previously, the caches API was accessed through `Astro.locals.runtime.caches`. Now use the global `caches` object directly:

```diff
-const { caches } = Astro.locals.runtime;


caches.default.put(request, response);
```

**Accessing the execution context:**

The `Astro.locals.runtime.ctx` object is replaced with `Astro.locals.cfContext`, which contains the Cloudflare `ExecutionContext`:

```diff
-const ctx = Astro.locals.runtime.ctx;
+const ctx = Astro.locals.cfContext;
```

### Changed: Wrangler configuration file is now optional

[Section titled “Changed: Wrangler configuration file is now optional”](#changed-wrangler-configuration-file-is-now-optional)

The Wrangler configuration file is now optional for simple projects. If you don’t have custom configuration, such as Cloudflare bindings (KV, D1, Durable Objects, etc.), Astro will automatically generate a default configuration for you.

If your `wrangler.jsonc` only contains basic configuration like this:

```jsonc
{
  "main": "@astrojs/cloudflare/entrypoints/server",
  "compatibility_date": "2025-05-21",
  "assets": {
    "directory": "./dist",
    "binding": "ASSETS",
  },
}
```

You can safely delete this file. Astro handles this configuration automatically. Alternatively, create a minimal `wrangler.jsonc` with just your project name and other custom settings:

wrangler.jsonc

```jsonc
{
  "name": "my-astro-app",
}
```

### Changed: Custom entrypoint API

[Section titled “Changed: Custom entrypoint API”](#changed-custom-entrypoint-api)

If you were using a custom `workerEntryPoint` configuration in the adapter options, this has been removed. Instead, specify your custom entrypoint in your Wrangler configuration and create a standard Cloudflare Worker export object directly, rather than using the `createExports()` function.

1. Remove the `workerEntryPoint` option from your adapter config:

   astro.config.mjs

   ```diff
   import { defineConfig } from 'astro/config';
   import cloudflare from '@astrojs/cloudflare';


   export default defineConfig({
     adapter: cloudflare({
   -    workerEntryPoint: {
   -      path: 'src/worker.ts',
   -      namedExports: ['MyDurableObject'],
   -    },
     }),
   });
   ```

2. Specify the entrypoint in `wrangler.jsonc` instead:

   wrangler.jsonc

   ```jsonc
   {
     "main": "./src/worker.ts"
   }
   ```

3. Update your custom worker entry file to use standard Worker syntax. Import the handler from `@astrojs/cloudflare/handler` and export a standard Cloudflare Worker object, alongside any custom exports like Durable Objects:

   src/worker.ts

   ```ts
   import { handle } from '@astrojs/cloudflare/handler';
   import { DurableObject } from 'cloudflare:workers';


   export class MyDurableObject extends DurableObject {
     // ...
   }


   export default {
     async fetch(request, env, ctx) {
       await env.MY_QUEUE.send('log');
       return handle(request, env, ctx);
     },
     async queue(batch, _env) {
       let messages = JSON.stringify(batch.messages);
       console.log(`consumed from our queue: ${messages}`);
     },
   } satisfies ExportedHandler;
   ```

The manifest is now created internally by the adapter, so it does not need to be passed to your handler.

### Removed: `cloudflareModules` option

[Section titled “Removed: cloudflareModules option”](#removed-cloudflaremodules-option)

The `cloudflareModules` adapter option has been removed because it is no longer necessary. Cloudflare natively supports importing `.sql`, `.wasm`, and other module types.

Remove the `cloudflareModules` option from your Cloudflare adapter configuration if you were using it:

astro.config.mjs

```diff
import cloudflare from '@astrojs/cloudflare';


export default defineConfig({
  adapter: cloudflare({
-    cloudflareModules: true
  })
});
```

### New: `astro preview` support

[Section titled “New: astro preview support”](#new-astro-preview-support)

Use `astro preview` to test your Cloudflare Workers application locally before deploying. The preview runs using Cloudflare’s `workerd` runtime, closely mirroring production behavior. Run `astro build` followed by `astro preview` to start the preview server.

### Removed: Cloudflare Pages support

[Section titled “Removed: Cloudflare Pages support”](#removed-cloudflare-pages-support)

The Astro Cloudflare adapter no longer supports deployment on Cloudflare Pages. For the best experience and feature support, you should migrate to Cloudflare Workers.

See Cloudflare’s [migration guide from Pages to Workers](https://developers.cloudflare.com/workers/static-assets/migration-guides/migrate-from-pages/) for detailed migration instructions.

### Changed: `imageService` default

[Section titled “Changed: imageService default”](#changed-imageservice-default)

The default value of `imageService` has changed from `'compile'` to `'cloudflare-binding'` for an improved experience when working with images.

The `cloudflare-binding` service uses the [Cloudflare Images binding](https://developers.cloudflare.com/images/transform-images/bindings/) to transform images at runtime, and the binding is automatically provisioned when you deploy.

To revert to the previous behavior, where image transformation was only available on prerendered routes at build time, set `imageService: 'compile'` explicitly in your adapter config.
