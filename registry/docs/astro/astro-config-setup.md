### `astro:config:setup`

[Section titled “astro:config:setup”](#astroconfigsetup)

**Next hook:** [`astro:route:setup`](#astroroutesetup)

**When:** On initialization, before either the [Vite](https://vite.dev/config/) or [Astro config](/en/reference/configuration-reference/) have resolved.

**Why:** To extend the project config. This includes updating the [Astro config](/en/reference/configuration-reference/), applying [Vite plugins](https://vite.dev/guide/api-plugin.html), adding component renderers, and injecting scripts onto the page.

```ts
'astro:config:setup'?: (options: {
  config: AstroConfig;
  command: 'dev' | 'build' | 'preview' | 'sync';
  isRestart: boolean;
  updateConfig: (newConfig: DeepPartial<AstroConfig>) => AstroConfig;
  addRenderer: (renderer: AstroRenderer) => void;
  addClientDirective: (directive: ClientDirectiveConfig) => void;
  addMiddleware: (middleware: AstroIntegrationMiddleware) => void;
  addDevToolbarApp: (entrypoint: DevToolbarAppEntry) => void;
  addWatchFile: (path: URL | string) => void;
  injectScript: (stage: InjectedScriptStage, content: string) => void;
  injectRoute: (injectedRoute: InjectedRoute) => void;
  createCodegenDir: () => URL;
  logger: AstroIntegrationLogger;
}) => void | Promise<void>;
```

#### `config` option

[Section titled “config option”](#config-option)

**Type:** `AstroConfig`

A read-only copy of the user-supplied [Astro config](/en/reference/configuration-reference/). This is resolved *before* any other integrations have run. If you need a copy of the config after all integrations have completed their config updates, [see the `astro:config:done` hook](#astroconfigdone).

#### `command` option

[Section titled “command option”](#command-option)

**Type:** `'dev' | 'build' | 'preview' | 'sync'`

- `dev` - Project is executed with `astro dev`
- `build` - Project is executed with `astro build`
- `preview` - Project is executed with `astro preview`
- `sync` - Project is executed with `astro sync`

#### `isRestart` option

[Section titled “isRestart option”](#isrestart-option)

**Type:** `boolean`

**Added in:** `astro@1.5.0`

`false` when the dev server starts, `true` when a reload is triggered. Useful to detect when this function is called more than once.

#### `updateConfig()` option

[Section titled “updateConfig() option”](#updateconfig-option)

**Type:** `(newConfig: DeepPartial<AstroConfig>) => AstroConfig;`

A callback function to update the user-supplied [Astro config](/en/reference/configuration-reference/). Any config you provide **will be merged with the user config + other integration config updates,** so you are free to omit keys!

For example, say you need to supply a [Vite](https://vite.dev/) plugin to the user’s project:

```js
import bananaCSS from '@vitejs/official-banana-css-plugin';


export default {
  name: 'banana-css-integration',
  hooks: {
    'astro:config:setup': ({ updateConfig }) => {
      updateConfig({
        vite: {
          plugins: [bananaCSS()],
        }
      })
    }
  }
}
```

#### `addRenderer()` option

[Section titled “addRenderer() option”](#addrenderer-option)

**Type:** `(renderer: AstroRenderer) => void;`\
**Examples:** [`svelte`](https://github.com/withastro/astro/blob/main/packages/integrations/svelte/src/index.ts), [`react`](https://github.com/withastro/astro/blob/main/packages/integrations/react/src/index.ts), [`preact`](https://github.com/withastro/astro/blob/main/packages/integrations/preact/src/index.ts), [`vue`](https://github.com/withastro/astro/blob/main/packages/integrations/vue/src/index.ts), [`solid`](https://github.com/withastro/astro/blob/main/packages/integrations/solid/src/index.ts)

A callback function to add a component framework renderer (i.e. React, Vue, Svelte, etc). You can browse the examples and type definition above for more advanced options, but here are the 2 main options to be aware of:

- `clientEntrypoint` - path to a file that executes on the client whenever your component is used. This is mainly for rendering or hydrating your component with JS.
- `serverEntrypoint` - path to a file that executes during server-side requests or static builds whenever your component is used. These should render components to static markup, with hooks for hydration where applicable. [React’s `renderToString` callback](https://react.dev/reference/react-dom/server/renderToString) is a classic example.

**Added in:** `astro@5.0.0`

The functions `clientEntrypoint` and `serverEntrypoint` accept a `URL`.

#### `addWatchFile()` option

[Section titled “addWatchFile() option”](#addwatchfile-option)

**Type:** `(path: URL | string) => void`

**Added in:** `astro@1.5.0`

If your integration depends on some configuration file that Vite doesn’t watch and/or needs a full dev server restart to take effect, add it with `addWatchFile()`. Whenever that file changes, the Astro dev server will be reloaded (you can check when a reload happens with [`isRestart`](#isrestart-option)).

Example usage:

```js
// Must be an absolute path!
addWatchFile('/home/user/.../my-config.json');
addWatchFile(new URL('./ec.config.mjs', config.root));
```

#### `addClientDirective()` option

[Section titled “addClientDirective() option”](#addclientdirective-option)

**Type:** `(directive: ClientDirectiveConfig) => void;`

**Added in:** `astro@2.6.0`

Adds a [custom client directive](/en/reference/directives-reference/#custom-client-directives) to be used in `.astro` files.

Note that directive entrypoints are only bundled through esbuild and should be kept small so they don’t slow down component hydration.

Example usage:

astro.config.mjs

```js
import { defineConfig } from 'astro/config';
import clickDirective from './astro-click-directive/register.js'


// https://astro.build/config
export default defineConfig({
  integrations: [
    clickDirective()
  ],
});
```

astro-click-directive/register.js

```js
/**
 * @type {() => import('astro').AstroIntegration}
 */
export default () => ({
  name: "client:click",
  hooks: {
    "astro:config:setup": ({ addClientDirective }) => {
      addClientDirective({
        name: "click",
        entrypoint: "./astro-click-directive/click.js",
      });
    },
  },
});
```

astro-click-directive/click.js

```js
/**
 * Hydrate on first click on the window
 * @type {import('astro').ClientDirective}
 */
export default (load, opts, el) => {
  window.addEventListener('click', async () => {
    const hydrate = await load()
    await hydrate()
  }, { once: true })
}
```

You can also add types for the directives in your library’s type definition file:

astro-click-directive/index.d.ts

```ts
import 'astro'
declare module 'astro' {
  interface AstroClientDirectives {
    'client:click'?: boolean
  }
}
```

#### `addDevToolbarApp()` option

[Section titled “addDevToolbarApp() option”](#adddevtoolbarapp-option)

**Type:** `(entrypoint: DevToolbarAppEntry) => void;`

**Added in:** `astro@3.4.0`

Adds a [custom dev toolbar app](/en/reference/dev-toolbar-app-reference/).

Example usage:

astro.config.mjs

```js
import { defineConfig } from 'astro/config';
import devToolbarIntegration from './astro-dev-toolbar-app/integration.js'


// https://astro.build/config
export default defineConfig({
  integrations: [
    devToolbarIntegration()
  ],
});
```

astro-dev-toolbar-app/integration.js

```js
/**
 * @type {() => import('astro').AstroIntegration}
 */
export default () => ({
  name: "dev-toolbar-app",
  hooks: {
    "astro:config:setup": ({ addDevToolbarApp }) => {
      addDevToolbarApp({
        entrypoint: "./astro-dev-toolbar-app/plugin.js",
        id: "my-plugin",
        name: "My Plugin"
      });
    },
  },
});
```

astro-dev-toolbar-app/plugin.js

```js
/**
 * @type {import('astro').DevToolbarApp}
 */
export default {
  id: "my-plugin",
  name: "My Plugin",
  icon: "<svg>...</svg>",
  init() {
    console.log("I'm a dev toolbar app!")
  },
};
```

#### `addMiddleware()` option

[Section titled “addMiddleware() option”](#addmiddleware-option)

**Type:** `(middleware: AstroIntegrationMiddleware) => void;`

**Added in:** `astro@3.5.0`

Adds [middleware](/en/guides/middleware/) to run on each request. Takes the `entrypoint` module that contains the middleware, and an `order` to specify whether it should run before (`pre`) other middleware or after (`post`).

@my-package/integration.js

```js
/**
 * @type {() => import('astro').AstroIntegration}
 */
export default () => ({
  name: "my-middleware-package",
  hooks: {
    "astro:config:setup": ({ addMiddleware }) => {
      addMiddleware({
        entrypoint: '@my-package/middleware',
        order: 'pre'
      });
    },
  },
});
```

Middleware is defined in a package with an [`onRequest()` function](/en/reference/modules/astro-middleware/#onrequest), as with user-defined middleware.

@my-package/middleware.js

```js
import { defineMiddleware } from 'astro:middleware';


export const onRequest = defineMiddleware(async (context, next) => {
  if(context.url.pathname === '/some-test-path') {
    return Response.json({
      ok: true
    });
  }


  return next();
});
```

**Added in:** `astro@5.0.0`

The function also accepts a `URL` for `entrypoint`:

@my-package/integration.js

```diff
/**
 * @type {() => import('astro').AstroIntegration}
 */
export default () => ({
  name: "my-middleware-package",
  hooks: {
    "astro:config:setup": ({ addMiddleware }) => {
      addMiddleware({
+        entrypoint: new URL('./middleware.js', import.meta.url),
        order: 'pre'
      });
    },
  },
});
```

#### `injectRoute()` option

[Section titled “injectRoute() option”](#injectroute-option)

**Type:** `({ pattern: string; entrypoint: string | URL; prerender?: boolean }) => void;`

A callback function to inject routes into an Astro project. Injected routes can be [`.astro` pages](/en/basics/astro-pages/) or [`.js` and `.ts` route handlers](/en/guides/endpoints/#static-file-endpoints).

`injectRoute()` takes an object with a `pattern` and an `entrypoint`.

- `pattern` - where the route should be output in the browser, for example `/foo/bar`. A `pattern` can use Astro’s filepath syntax for denoting dynamic routes, for example `/foo/[bar]` or `/foo/[...bar]`. Note that a file extension is **not** needed in the `pattern`.
- `entrypoint` - a bare module specifier pointing towards the `.astro` page or `.js`/`.ts` route handler that handles the route denoted in the `pattern`.
- `prerender` - a boolean to set if Astro can’t detect your `prerender` export.

##### Example usage

[Section titled “Example usage”](#example-usage)

```js
injectRoute({
  // Use Astro’s pattern syntax for dynamic routes.
  pattern: '/subfolder/[dynamic]',
  // Use relative path syntax for a local route.
  entrypoint: './src/dynamic-page.astro',
  // Use only if Astro can't detect your prerender export
  prerender: false
});
```

For an integration designed to be installed in other projects, use its package name to refer to the route entrypoint. The following example shows a package published to npm as `@fancy/dashboard` injecting a dashboard route:

```js
injectRoute({
  pattern: '/fancy-dashboard',
  entrypoint: '@fancy/dashboard/dashboard.astro'
});
```

When publishing your package (`@fancy/dashboard`, in this case) to npm, you must export `dashboard.astro` in your `package.json`:

package.json

```json
{
  "name": "@fancy/dashboard",
  // ...
  "exports": { "./dashboard.astro": "./dashboard.astro" }
}
```

**Added in:** `astro@5.0.0`

The function also accepts a `URL` for `entrypoint`:

```js
injectRoute({
  pattern: '/fancy-dashboard',
  entrypoint: new URL('./dashboard.astro', import.meta.url)
});
```

#### `injectScript()` option

[Section titled “injectScript() option”](#injectscript-option)

**Type:** `(stage: InjectedScriptStage, content: string) => void;`

A callback function to inject a string of JavaScript content onto every page.

The **`stage`** denotes how this script (the `content`) should be inserted. Some stages allow inserting scripts without modification, while others allow optimization during [Vite’s bundling step](https://vite.dev/guide/build.html):

- `"head-inline"`: Injected into a script tag in the `<head>` of every page. **Not** optimized or resolved by Vite.

- `"before-hydration"`: Imported client-side, before the hydration script runs. Optimized and resolved by Vite.

- `"page"`: Similar to `head-inline`, except that the injected snippet is handled by Vite and bundled with any other `<script>` tags defined inside of Astro components on the page. The script will be loaded with a `<script type="module">` in the final page output, optimized and resolved by Vite.

- `"page-ssr"`: Imported as a separate module in the frontmatter of every Astro page component. Because this stage imports your script, the `Astro` global is not available and your script will only be run once when the `import` is first evaluated.

  The main use for the `page-ssr` stage is injecting a CSS `import` into every page to be optimized and resolved by Vite:

  ```js
  injectScript('page-ssr', 'import "global-styles.css";');
  ```

#### `createCodegenDir()`

[Section titled “createCodegenDir()”](#createcodegendir)

**Type:** `() => URL;`

**Added in:** `astro@5.0.0`

A function that creates the `<root>/.astro/integrations/<normalized_integration_name>` folder and returns its path.

It allows you to have a dedicated folder, avoiding conflicts with another integration or Astro itself. This directory is created by calling this function so it’s safe to write files to it directly:

my-integration.ts

```ts
import { writeFileSync } from 'node:fs'


const integration = {
  name: 'my-integration',
  hooks: {
    'astro:config:setup': ({ createCodegenDir }) => {
      const codegenDir = createCodegenDir()
      writeFileSync(new URL('cache.json', codegenDir), '{}', 'utf-8')
    }
  }
}
```
