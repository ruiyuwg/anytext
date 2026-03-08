## app

Nuxt App configuration.

### `baseURL`

The base path of your Nuxt application.

For example:

- **Type**: `string`
- **Default:** `"/"`

**Example**:

```ts
export default defineNuxtConfig({
  app: {
    baseURL: '/prefix/',
  },
})
```

This can also be set at runtime by setting the NUXT\_APP\_BASE\_URL environment variable.

**Example**:

```bash
NUXT_APP_BASE_URL=/prefix/ node .output/server/index.mjs
```

### `buildAssetsDir`

The folder name for the built site assets, relative to `baseURL` (or `cdnURL` if set). This is set at build time and should not be customized at runtime.

- **Type**: `string`
- **Default:** `"/_nuxt/"`

### `cdnURL`

An absolute URL to serve the public folder from (production-only).

For example:

- **Type**: `string`
- **Default:** `""`

**Example**:

```ts
export default defineNuxtConfig({
  app: {
    cdnURL: 'https://mycdn.org/',
  },
})
```

This can be set to a different value at runtime by setting the `NUXT_APP_CDN_URL` environment variable.

**Example**:

```bash
NUXT_APP_CDN_URL=https://mycdn.org/ node .output/server/index.mjs
```

### `head`

Set default configuration for `<head>` on every page.

- **Type**: `object`
- **Default**

```json
{
  "meta": [
    {
      "name": "viewport",
      "content": "width=device-width, initial-scale=1"
    },
    {
      "charset": "utf-8"
    }
  ],
  "link": [],
  "style": [],
  "script": [],
  "noscript": []
}
```

**Example**:

```ts
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
      // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      script: [
      // <script src="https://myawesome-lib.js"></script>
        { src: 'https://awesome-lib.js' },
      ],
      link: [
      // <link rel="stylesheet" href="https://myawesome-lib.css">
        { rel: 'stylesheet', href: 'https://awesome-lib.css' },
      ],
      // please note that this is an area that is likely to change
      style: [
      // <style>:root { color: red }</style>
        { textContent: ':root { color: red }' },
      ],
      noscript: [
      // <noscript>JavaScript is required</noscript>
        { textContent: 'JavaScript is required' },
      ],
    },
  },
})
```

### `keepalive`

Default values for KeepAlive configuration between pages.

This can be overridden with `definePageMeta` on an individual page. Only JSON-serializable values are allowed.

- **Type**: `boolean`
- **Default:** `false`

**See**: [Vue KeepAlive](https://vuejs.org/api/built-in-components#keepalive){rel=""nofollow""}

### `layoutTransition`

Default values for layout transitions.

This can be overridden with `definePageMeta` on an individual page. Only JSON-serializable values are allowed.

- **Type**: `boolean | TransitionProps`
- **Default:** `false`

**See**: [Vue Transition docs](https://vuejs.org/api/built-in-components#transition){rel=""nofollow""}

### `pageTransition`

Default values for page transitions.

This can be overridden with `definePageMeta` on an individual page. Only JSON-serializable values are allowed.

- **Type**: `boolean | TransitionProps`
- **Default:** `false`

**See**: [Vue Transition docs](https://vuejs.org/api/built-in-components#transition){rel=""nofollow""}

### `rootAttrs`

Customize Nuxt root element id.

- **Type**: `object`
- **Default**

```json
{
  "id": "__nuxt"
}
```

### `rootId`

Customize Nuxt root element id.

- **Type**: `string`
- **Default:** `"__nuxt"`

### `rootTag`

Customize Nuxt root element tag.

- **Type**: `string`
- **Default:** `"div"`

### `spaLoaderAttrs`

Customize Nuxt SPA loading template element attributes.

- **Type**: `object`
- **Default:**

```json
{
"id": "__nuxt-loader"
}
```

#### `id`

- **Type**: `string`
- **Default:** `"__nuxt-loader"`

### `spaLoaderTag`

Customize Nuxt SpaLoader element tag.

- **Type**: `string`
- **Default:** `"div"`

### `teleportAttrs`

Customize Nuxt Teleport element attributes.

- **Type**: `object`
- **Default**

```json
{
  "id": "teleports"
}
```

### `teleportId`

Customize Nuxt Teleport element id.

- **Type**: `string`
- **Default:** `"teleports"`

### `teleportTag`

Customize Nuxt Teleport element tag.

- **Type**: `string`
- **Default:** `"div"`

### `viewTransition`

Default values for view transitions.

This only has an effect when **experimental** support for View Transitions is [enabled in your nuxt.config file](https://nuxt.com/docs/4.x/getting-started/transitions#view-transitions-api-experimental).
This can be overridden with `definePageMeta` on an individual page.

- **Type**: `boolean`
- **Default:** `false`

**See**: [Nuxt View Transition API docs](https://nuxt.com/docs/4.x/getting-started/transitions#view-transitions-api-experimental){rel=""nofollow""}

## appConfig

Additional app configuration

For programmatic usage and type support, you can directly provide app config with this option. It will be merged with `app.config` file as default value.

### `nuxt`

## appId

For multi-app projects, the unique id of the Nuxt application.

Defaults to `nuxt-app`.

- **Type**: `string`
- **Default:** `"nuxt-app"`

## build

Shared build configuration.

### `analyze`

Nuxt allows visualizing your bundles and how to optimize them.

Set to `true` to enable bundle analysis, or pass an object with options: [for webpack](https://github.com/webpack/webpack-bundle-analyzer#options-for-plugin){rel=""nofollow""} or [for vite](https://github.com/btd/rollup-plugin-visualizer#options){rel=""nofollow""}.

- **Type**: `object`
- **Default**

```json
{
  "template": "treemap",
  "projectRoot": "/<rootDir>",
  "filename": "/<rootDir>/.nuxt/analyze/{name}.html"
}
```

**Example**:

```ts
export default defineNuxtConfig({
  analyze: {
    analyzerMode: 'static',
  },
})
```

### `templates`

It is recommended to use `addTemplate` from `@nuxt/kit` instead of this option.

- **Type**: `array`

**Example**:

```ts
export default defineNuxtConfig({
  build: {
    templates: [
      {
        src: '~~/modules/support/plugin.js', // `src` can be absolute or relative
        dst: 'support.js', // `dst` is relative to project `.nuxt` dir
      },
    ],
  },
})
```

### `transpile`

If you want to transpile specific dependencies with Babel, you can add them here. Each item in transpile can be a package name, a function, a string or regex object matching the dependency's file name.

You can also use a function to conditionally transpile. The function will receive an object ({ isDev, isServer, isClient, isModern, isLegacy }).

- **Type**: `array`

**Example**:

```ts
export default defineNuxtConfig({
  build: {
    transpile: [({ isLegacy }) => isLegacy && 'ky'],
  },
})
```

## buildDir

Define the directory where your built Nuxt files will be placed.

Many tools assume that `.nuxt` is a hidden directory (because it starts with a `.`). If that is a problem, you can use this option to prevent that.

- **Type**: `string`
- **Default:** `"/<rootDir>/.nuxt"`

**Example**:

```ts
export default defineNuxtConfig({
  buildDir: 'nuxt-build',
})
```

## buildId

A unique identifier matching the build. This may contain the hash of the current state of the project.

- **Type**: `string`
- **Default:** `"4a2e2d30-418f-41df-8e58-ed5df06de7fd"`

## builder

The builder to use for bundling the Vue part of your application.

Nuxt supports multiple builders for the client-side application. By default, Vite is used, but you can switch to webpack, Rspack, or even provide a custom builder implementation.

- **Type**: `'vite' | 'webpack' | 'rspack' | string | { bundle: (nuxt: Nuxt) => Promise<void> }`
- **Default:** `"@nuxt/vite-builder"`

**Using supported builders:**

```ts
export default defineNuxtConfig({
  // default - uses @nuxt/vite-builder
  // builder: 'vite',

  // uses @nuxt/webpack-builder
  // builder: 'webpack',

  // uses @nuxt/rspack-builder
  builder: 'rspack',
})
```

If you are using `webpack` or `rspack` you will need to make sure `@nuxt/webpack-builder` or `@nuxt/rspack-builder` is explicitly installed in your project.

**Using a custom builder object:**

You can provide a custom builder by passing an object with a `bundle` function:

```ts
export default defineNuxtConfig({
  builder: {
    async bundle (nuxt) {
      const entry = await resolvePath(resolve(nuxt.options.appDir, 'entry'))

      // Build client and server bundles
      await buildClient(nuxt, entry)
      if (nuxt.options.ssr) {
        await buildServer(nuxt, entry)
      }

      // ... it's a bit more complicated than that, of course!
    },
  },
})
```

**Creating a custom builder package:**

To create a custom builder as a separate package, it should export a `bundle` function. You can then specify the package name in your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  builder: 'my-custom-builder',
})
```

## compatibilityDate

Specify a compatibility date for your app.

This is used to control the behavior of presets in Nitro, Nuxt Image and other modules that may change behavior without a major version bump.
We plan to improve the tooling around this feature in the future.

## components

Configure Nuxt component auto-registration.

Any components in the directories configured here can be used throughout your pages, layouts (and other components) without needing to explicitly import them.

- **Type**: `object`
- **Default**

```json
{
  "dirs": [
    {
      "path": "~/components/global",
      "global": true
    },
    "~/components"
  ]
}
```

**See**: [`app/components/` directory documentation](https://nuxt.com/docs/4.x/directory-structure/app/components){rel=""nofollow""}

## css

You can define the CSS files/modules/libraries you want to set globally (included in every page).

Nuxt will automatically guess the file type by its extension and use the appropriate pre-processor. You will still need to install the required loader if you need to use them.

- **Type**: `array`

**Example**:

```ts
export default defineNuxtConfig({
  css: [
  // Load a Node.js module directly (here it's a Sass file).
    'bulma',
    // CSS file in the project
    '~/assets/css/main.css',
    // SCSS file in the project
    '~/assets/css/main.scss',
  ],
})
```

## debug

Set to `true` to enable debug mode.

At the moment, it prints out hook names and timings on the server, and logs hook arguments as well in the browser.
You can also set this to an object to enable specific debug options.

- **Type**: `boolean`
- **Default:** `false`

## dev

Whether Nuxt is running in development mode.

Normally, you should not need to set this.

- **Type**: `boolean`
- **Default:** `false`

## devServer

### `cors`

Set CORS options for the dev server

#### `origin`

- **Type**: `array`
- **Default**

```json
[
  {}
]
```

### `host`

Dev server listening host

### `https`

Whether to enable HTTPS.

- **Type**: `boolean`
- **Default:** `false`

**Example**:

```ts
export default defineNuxtConfig({
  devServer: {
    https: {
      key: './server.key',
      cert: './server.crt',
    },
  },
})
```

### `loadingTemplate`

Template to show a loading screen

- **Type**: `function`

### `port`

Dev server listening port

- **Type**: `number`
- **Default:** `3000`

### `url`

Listening dev server URL.

This should not be set directly as it will always be overridden by the dev server with the full URL (for module and internal use).

- **Type**: `string`
- **Default:** `"http://localhost:3000"`

## devServerHandlers

Nitro development-only server handlers.

- **Type**: `array`

**See**: [Nitro server routes documentation](https://nitro.build/guide/routing){rel=""nofollow""}

## devtools

Enable Nuxt DevTools for development.

Breaking changes for devtools might not reflect on the version of Nuxt.

**See**: [Nuxt DevTools](https://devtools.nuxt.com/){rel=""nofollow""} for more information.

## dir

Customize default directory structure used by Nuxt.

It is better to stick with defaults unless needed.

### `app`

- **Type**: `string`
- **Default:** `"app"`

### `assets`

The assets directory (aliased as `~assets` in your build).

- **Type**: `string`
- **Default:** `"app/assets"`

### `layouts`

The layouts directory, each file of which will be auto-registered as a Nuxt layout.

- **Type**: `string`
- **Default:** `"app/layouts"`

### `middleware`

The middleware directory, each file of which will be auto-registered as a Nuxt middleware.

- **Type**: `string`
- **Default:** `"app/middleware"`

### `modules`

The modules directory, each file in which will be auto-registered as a Nuxt module.

- **Type**: `string`
- **Default:** `"modules"`

### `pages`

The directory which will be processed to auto-generate your application page routes.

- **Type**: `string`
- **Default:** `"app/pages"`

### `plugins`

The plugins directory, each file of which will be auto-registered as a Nuxt plugin.

- **Type**: `string`
- **Default:** `"app/plugins"`

### `public`

The directory containing your static files, which will be directly accessible via the Nuxt server and copied across into your `dist` folder when your app is generated.

- **Type**: `string`
- **Default:** `"public"`

### `shared`

The shared directory. This directory is shared between the app and the server.

- **Type**: `string`
- **Default:** `"shared"`

## esbuild

### `options`

Configure shared esbuild options used within Nuxt and passed to other builders, such as Vite or webpack.

#### `jsxFactory`

- **Type**: `string`
- **Default:** `"h"`

#### `jsxFragment`

- **Type**: `string`
- **Default:** `"Fragment"`

#### `target`

- **Type**: `string`
- **Default:** `"esnext"`

#### `tsconfigRaw`

- **Type**: `object`

## experimental

::read-more

Learn more about Nuxt's experimental features.
::

## extends

Extend project from multiple local or remote sources.

Value should be either a string or array of strings pointing to source directories or config path relative to current config.
You can use `github:`, `gh:` `gitlab:` or `bitbucket:`

**See**: [`c12` docs on extending config layers](https://github.com/unjs/c12#extending-config-layer-from-remote-sources){rel=""nofollow""}

**See**: [`giget` documentation](https://github.com/unjs/giget){rel=""nofollow""}

## extensions

The extensions that should be resolved by the Nuxt resolver.

- **Type**: `array`
- **Default**

```json
[
  ".js",
  ".jsx",
  ".mjs",
  ".ts",
  ".tsx",
  ".vue"
]
```

## features

::read-more

Learn more about Nuxt's opt-in features.
::

## future

::read-more

Learn more about opting-in to new features that will become default in a future (possibly major) version of the framework.
::

## hooks

Hooks are listeners to Nuxt events that are typically used in modules, but are also available in `nuxt.config`.

Internally, hooks follow a naming pattern using colons (e.g., build:done).
For ease of configuration, you can also structure them as an hierarchical object in `nuxt.config` (as below).

**Example**:

```ts
import fs from 'node:fs'
import path from 'node:path'

export default defineNuxtConfig({
  hooks: {
    build: {
      done (builder) {
        const extraFilePath = path.join(
          builder.nuxt.options.buildDir,
          'extra-file',
        )
        fs.writeFileSync(extraFilePath, 'Something extra')
      },
    },
  },
})
```

## ignore

More customizable than `ignorePrefix`: all files matching glob patterns specified inside the `ignore` array will be ignored in building.

- **Type**: `array`
- **Default**

```json
[
  "**/*.stories.{js,cts,mts,ts,jsx,tsx}",
  "**/*.{spec,test}.{js,cts,mts,ts,jsx,tsx}",
  "**/*.d.{cts,mts,ts}",
  "**/*.d.vue.{cts,mts,ts}",
  "**/.{pnpm-store,vercel,netlify,output,git,cache,data}",
  "**/*.sock",
  ".nuxt/analyze",
  ".nuxt",
  "**/-*.*"
]
```

## ignoreOptions

Pass options directly to `node-ignore` (which is used by Nuxt to ignore files).

**See**: [node-ignore](https://github.com/kaelzhang/node-ignore){rel=""nofollow""}

**Example**:

```ts
export default defineNuxtConfig({
  ignoreOptions: {
    ignorecase: false,
  },
})
```

## ignorePrefix

Any file in `app/pages/`, `app/layouts/`, `app/middleware/`, and `public/` directories will be ignored during the build process if its filename starts with the prefix specified by `ignorePrefix`. This is intended to prevent certain files from being processed or served in the built application. By default, the `ignorePrefix` is set to '-', ignoring any files starting with '-'.

- **Type**: `string`
- **Default:** `"-"`

## imports

Configure how Nuxt auto-imports composables into your application.

**See**: [Nuxt documentation](https://nuxt.com/docs/4.x/directory-structure/app/composables){rel=""nofollow""}

### `dirs`

An array of custom directories that will be auto-imported. Note that this option will not override the default directories (~/composables, ~/utils).

- **Type**: `array`

**Example**:

```ts
export default defineNuxtConfig({
  imports: {
  // Auto-import pinia stores defined in `~/stores`
    dirs: ['stores'],
  },
})
```

### `global`

- **Type**: `boolean`
- **Default:** `false`

### `scan`

Whether to scan your `app/composables/` and `app/utils/` directories for composables to auto-import. Auto-imports registered by Nuxt or other modules, such as imports from `vue` or `nuxt`, will still be enabled.

- **Type**: `boolean`
- **Default:** `true`

## logLevel

Log level when building logs.

Defaults to 'silent' when running in CI or when a TTY is not available. This option is then used as 'silent' in Vite and 'none' in webpack

- **Type**: `string`
- **Default:** `"info"`

## modules

Modules are Nuxt extensions which can extend its core functionality and add endless integrations.

Each module is either a string (which can refer to a package, or be a path to a file), a tuple with the module as first string and the options as a second object, or an inline module function.
Nuxt tries to resolve each item in the modules array using node require path (in `node_modules`) and then will be resolved from project `rootDir` if `~~` alias is used.

- **Type**: `array`

::callout
**Note**: Modules are executed sequentially so the order is important. First, the modules defined in `nuxt.config.ts` are loaded. Then, modules found in the `modules/`
directory are executed, and they load in alphabetical order.
::

**Example**:

```ts
export default defineNuxtConfig({
  modules: [
  // Using package name
    '@nuxt/scripts',
    // Relative to your project rootDir
    '~~/custom-modules/awesome.js',
    // Providing options
    ['@nuxtjs/google-analytics', { ua: 'X1234567' }],
    // Inline definition
    function () {},
  ],
})
```

## modulesDir

Used to set the modules directories for path resolving (for example, webpack's `resolveLoading`, `nodeExternals` and `postcss`).

The configuration path is relative to `options.rootDir` (default is current working directory).
Setting this field may be necessary if your project is organized as a yarn workspace-styled mono-repository.

- **Type**: `array`
- **Default**

```json
[
  "/<rootDir>/node_modules"
]
```

**Example**:

```ts
export default defineNuxtConfig({
  modulesDir: ['../../node_modules'],
})
```

## nitro

Configuration for Nitro.

**See**: [Nitro configuration docs](https://nitro.build/config){rel=""nofollow""}

### `routeRules`

- **Type**: `object`

### `runtimeConfig`

- **Type**: `object`
- **Default**

```json
{
  "public": {},
  "app": {
    "buildId": "4a2e2d30-418f-41df-8e58-ed5df06de7fd",
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_"
  }
}
```
