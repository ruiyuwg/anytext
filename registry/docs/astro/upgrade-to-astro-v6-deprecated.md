## Deprecated

[Section titled “Deprecated”](#deprecated)

The following deprecated features are no longer supported and are no longer documented. Please update your project accordingly.

Some deprecated features may temporarily continue to function until they are completely removed. Others may silently have no effect, or throw an error prompting you to update your code.

### Deprecated: `Astro` in `getStaticPaths()`

[Section titled “Deprecated: Astro in getStaticPaths()”](#deprecated-astro-in-getstaticpaths)

[Implementation PR: feat: deprecate Astro in getStaticPaths (#14432)](https://github.com/withastro/astro/pull/14432)

In Astro 5.x, it was possible to access an `Astro` object inside `getStaticPaths()`. However, despite being typed the same as the `Astro` object accessible in the frontmatter, this object only had `site` and `generator` properties. This could lead to confusion about which `Astro` object properties were available inside `getStaticPaths()`.

Astro 6.0 deprecates this object for `getStaticPaths()` to avoid confusion and improves error handling when attempting to access `Astro` values that are unavailable. Using `Astro.site` or `Astro.generator` within `getStaticPaths()` will now log a deprecation warning, and accessing any other property will throw a specific error with a helpful message. In a future major version, this object will be removed entirely, and accessing `Astro.site` or `Astro.generator` will also throw an error.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-7)

Update your `getStaticPaths()` function if you were attempting to access any `Astro` properties inside its scope. Remove `Astro.generator` entirely, and replace all occurrences of `Astro.site` with `import.meta.env.SITE`:

src/pages/blog/\[slug].astro

```diff
---
import { getPages } from "../../../utils/data";


export async function getStaticPaths() {
-  console.log(Astro.generator);
  -return getPages(Astro.site);
  +return getPages(import.meta.env.SITE);
}
---
```

Read more about [built-in environment variables such as `import.meta.env.SITE`](/en/guides/environment-variables/#default-environment-variables) that are accessible when [using `getStaticPaths()` to dynamically generate static routes](/en/guides/routing/#static-ssg-mode).

### Deprecated: `import.meta.env.ASSETS_PREFIX`

[Section titled “Deprecated: import.meta.env.ASSETS\_PREFIX”](#deprecated-importmetaenvassets_prefix)

[Implementation PR: feat: deprecate import.meta.env.ASSETS\_PREFIX (#14461)](https://github.com/withastro/astro/pull/14461)

In Astro 5.x, it was possible to access `build.assetsPrefix` in your Astro config via the built-in environment variable `import.meta.env.ASSETS_PREFIX`. However, Astro v5.7.0 introduced the `astro:config` virtual module to expose a non-exhaustive, serializable, type-safe version of the Astro configuration which included access to `build.assetsPrefix` directly. This became the preferred way to access the prefix for Astro-generated asset links when set, although the environment variable still existed.

Astro 6.0 deprecates this variable in favor of `build.assetsPrefix` from the `astro:config/server` module.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-8)

Replace any occurrences of `import.meta.env.ASSETS_PREFIX` with the `build.assetsPrefix` import from `astro:config/server`. This is a drop-in replacement to provide the existing value, and no other changes to your code should be necessary:

```diff
import { someLogic } from "./utils"
+import { build } from "astro:config/server"


-someLogic(import.meta.env.ASSETS_PREFIX)
+someLogic(build.assetsPrefix)
```

Read more about the [`astro:config` virtual module](/en/reference/modules/astro-config/).

### Deprecated: `astro:schema` and `z` from `astro:content`

[Section titled “Deprecated: astro:schema and z from astro:content”](#deprecated-astroschema-and-z-from-astrocontent)

[Implementation PR: feat!: consolidate zod export (#14923)](https://github.com/withastro/astro/pull/14923)

In Astro 5.x, `astro:schema` was introduced as an alias of `astro/zod`. `z` was also exported from `astro:content` for convenience. However this occasionally created confusion for users who were unsure about where they should be importing from.

Astro 6.0 deprecates `astro:schema` and `z` from `astro:content` in favor of `astro/zod`.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-9)

Replace any occurrences of `astro:schema` with `astro/zod`:

```diff
-import { z } from "astro:schema"
+import { z } from "astro/zod"
```

Remove `z` from your `astro:content` imports and import `z` separately from `astro/zod` instead:

src/content.config.ts

```diff
-import { defineCollection, z } from "astro:content"
+import { defineCollection } from "astro:content"
+import { z } from "astro/zod"
```

See more about [defining collection schemas with Zod](/en/guides/content-collections/#defining-datatypes-with-zod).

### Deprecated: exposed `astro:transitions` internals

[Section titled “Deprecated: exposed astro:transitions internals”](#deprecated-exposed-astrotransitions-internals)

[Implementation PR: feat!: deprecate transitions exports (#14989)](https://github.com/withastro/astro/pull/14989)

In Astro 5.x, some internals were exported from `astro:transitions` and `astro:transitions/client` that were not meant to be exposed for public use.

Astro 6.0 removes the following functions and types as exports from the `astro:transitions` and `astro:transitions/client` virtual modules. These can no longer be imported in your project files:

- `createAnimationScope()`
- `isTransitionBeforePreparationEvent()`
- `isTransitionBeforeSwapEvent()`
- `TRANSITION_BEFORE_PREPARATION`
- `TRANSITION_AFTER_PREPARATION`
- `TRANSITION_BEFORE_SWAP`
- `TRANSITION_AFTER_SWAP`
- `TRANSITION_PAGE_LOAD`

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-10)

Remove any occurrences of `createAnimationScope()`:

```diff
-import { createAnimationScope } from 'astro:transitions';
```

Update any occurrences of the other deprecated exports:

```diff
-import {
-  isTransitionBeforePreparationEvent,
-  TRANSITION_AFTER_SWAP,
-} from 'astro:transitions/client';


-console.log(isTransitionBeforePreparationEvent(event));
+console.log(event.type === 'astro:before-preparation');


-console.log(TRANSITION_AFTER_SWAP);
+console.log('astro:after-swap');
```

Learn more about all utilities available in the [View Transitions Router API Reference](/en/reference/modules/astro-transitions/).

### Deprecated: session driver string signature

[Section titled “Deprecated: session driver string signature”](#deprecated-session-driver-string-signature)

[Implementation PR: feat(sessions): drivers (#15006)](https://github.com/withastro/astro/pull/15006)

In Astro 5.x, any [unstorage provider](https://unstorage.unjs.io/drivers) name or a custom entrypoint could be provided to define a session driver, and options were also provided directly to the `session` configuration. However, we felt that this API was limited and inconsistent with other parts of the Astro config.

Astro 6.0 deprecates the driver string signature and options in favor of a new object shape.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-11)

Update your session config to use the newly exported `sessionDrivers`:

astro.config.mjs

```diff
-import { defineConfig } from 'astro/config'
+import { defineConfig, sessionDrivers } from 'astro/config'


export default defineConfig({
  session: {
-    driver: 'redis',
-    options: {
-      url: process.env.REDIS_URL
-    },
+    driver: sessionDrivers.redis({
+      url: process.env.REDIS_URL
+    }),
    cookie: {
      secure: true
    },
    ttl: 3600
  }
})
```

Learn more about [available session drivers](/en/reference/session-driver-reference/#building-a-session-driver).

### Deprecated: `NodeApp` from `astro/app/node` (Adapter API)

[Section titled “Deprecated: NodeApp from astro/app/node (Adapter API)”](#deprecated-nodeapp-from-astroappnode-adapter-api)

[Implementation PR: feat: deprecate NodeApp (#15535)](https://github.com/withastro/astro/pull/15535)

In Astro 5.x, adapters could implement their server entrypoint using `App` for standard web requests/responses, or `NodeApp` for node requests/responses.

Astro 6.0 deprecates `NodeApp` in favor of `createApp()` and new utilities: `createRequest()` and `writeResponse()`. This allows a more consistent API while preserving the same features as before. It also deprecates the `NodeAppHeadersJson` type.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-12)

If you have built an adapter, update any usage of `NodeApp` with `createApp()`:

my-adapter/server.js

```diff
-import { NodeApp } from 'astro/app/node';


-export function createExports(manifest) {
  -const app = new NodeApp(manifest);


  -const handler = async (req, res) => {
    const response = await app.render(req);
    await NodeApp.writeResponse(response, res);
  };


  -return { handler };
-}
+import { createApp } from 'astro/app/entrypoint';
+import { createRequest, writeResponse } from 'astro/app/node';


+const app = createApp();


+export const handler = async (req, res) => {
  const request = createRequest(req);
  const response = await app.render(request);
  await writeResponse(response, res);
+}
```

Learn more about [the `astro/app/node` module](/en/reference/modules/astro-app/#imports-from-astroappnode).

### Deprecated: `loadManifest()` and `loadApp()` from `astro/app/node` (Adapter API)

[Section titled “Deprecated: loadManifest() and loadApp() from astro/app/node (Adapter API)”](#deprecated-loadmanifest-and-loadapp-from-astroappnode-adapter-api)

[Implementation PR: feat: deprecate NodeApp (#15535)](https://github.com/withastro/astro/pull/15535)

In Astro 5.x, the `astro/app/node` exposed `loadManifest()` and `loadApp()` utilities to allow loading the SSR manifest or a `NodeApp` instance from a `URL` instance. However, these were not documented and are no longer recommended usage with the v6 Adapter API.

Astro 6.0 deprecates both functions.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-13)

If you have built an adapter, remove `loadManifest()` and replace `loadApp()` by `createApp()`:

my-adapter/server.js

```diff
-import { loadManifest, loadApp, NodeApp } from 'astro/app/node';


-const manifest = await loadManifest(new URL(import.meta.url));
-const app1 = new NodeApp(loadManifest);
-const app2 = await loadApp(new URL(import.meta.url));
+import { createApp } from 'astro/app/entrypoint';


+const app = createApp();
```

Learn more about [the `astro/app/entrypoint` module](/en/reference/modules/astro-app/#imports-from-astroappentrypoint).

### Deprecated: `createExports()` and `start()` (Adapter API)

[Section titled “Deprecated: createExports() and start() (Adapter API)”](#deprecated-createexports-and-start-adapter-api)

[Implementation PR: feat: improve naming of new adapter api (#15461)](https://github.com/withastro/astro/pull/15461)

In Astro 5.x, adapters had to provide the exports required by the host in their server entrypoint using a `createExports()` function before passing them to `setAdapter()` as an `exports` list.

Astro 6.0 introduces a simpler yet more powerful way of making server entrypoints. This relies on passing a new option `entrypointResolution: "auto"` to `setAdapter()`.

However, for backwards compatibility with existing adapters, the default value of `entrypointResolution` (`"explicit"`) mimics Astro 5.x API behavior. This means that your adapters can continue to function until you can fully migrate your adapter to the `auto` value, as shown below.

Note that `entrypointResolution: "explicit"` (maintaining v5 API behavior) is considered deprecated usage, but the option has been provided so that no immediate change to your adapter is required and to allow adapter authors time to update. This option will be removed in a future major version in favor of all adapters using `entrypointResolution: "auto"`.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-14)

If you are an adapter author with a public repository and [include the `astro-adapter` keyword in your `package.json`](/en/reference/publish-to-npm/#categories), the Astro core team will attempt to make a PR to your repository directly to help you migrate your code if you have not yet followed the steps below.

If you are seeing warnings because you are using a community adapter that is not yet updated, please reach out to the adapter author directly to let them know. It is ultimately their responsibility to update their adapters. You can also let the Astro core team know in the [`#integrations` channel of our Discord](https://astro.build/chat) and we will attempt to help the adapter author upgrade.

If you have built an adapter, follow these steps to remove the legacy v5 behaviour:

1. Update your `setAdapter()`: set `entrypointResolution: "auto"`, remove `exports` and `args`

   my-adapter.mjs

   ```diff
   setAdapter({
     // ...
   +  entrypointResolution: 'auto',
   -  exports: ['handler'],
   -  args: { assets: config.build.assets }
   })
   ```

2. Update your server entrypoint to provide any required exports without `createExports()`:

   my-adapter/server.js

   ```diff
   -import { App } from 'astro/app';


   -export function createExports(manifest) {
     -const app = new App(manifest);


     -const handler = (event, context) => {
       -// ...
     };


     -return { handler };
   -}
   +import { createApp } from 'astro/app/entrypoint';


   +const app = createApp();


   +export const handler = (event, context) => {
     +// ...
   +}
   ```

3. If your adapter provides a `start()` function, update your server entrypoint to call the code directly:

   my-adapter/server.js

   ```diff
   -import { App } from 'astro/app';


   -export function start(manifest) {
     -const app = new App(manifest);


     -addEventListener('fetch', event => {
       -// ...
   -  });
   -}
   +import { createApp } from 'astro/app/entrypoint';


   +const app = createApp();


   +addEventListener('fetch', event => {
     +// ...
   +});
   ```

4. If you were relying on `args`, [create a virtual module to pass the build time configuration](/en/reference/adapter-reference/#passing-build-time-configuration) and import them from the virtual module instead:

   my-adapter/server.js

   ```diff
   -export function createExports(manifest, { assets }) {
     -// ...
   -}
   +import { assets } from 'virtual:@example/my-adapter:config';
   ```

Learn more about [the Adapter API](/en/reference/adapter-reference/).
