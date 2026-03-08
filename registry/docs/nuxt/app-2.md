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
    baseURL: '/prefix/'
  }
})
```

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
    cdnURL: 'https://mycdn.org/'
  }
})
```

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

```js
app: {
  head: {
    meta: [
      // <meta name="viewport" content="width=device-width, initial-scale=1">
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    script: [
      // <script src="https://myawesome-lib.js"></script>
      { src: 'https://awesome-lib.js' }
    ],
    link: [
      // <link rel="stylesheet" href="https://myawesome-lib.css">
      { rel: 'stylesheet', href: 'https://awesome-lib.css' }
    ],
    // please note that this is an area that is likely to change
    style: [
      // <style>:root { color: red }</style>
      { textContent: ':root { color: red }' }
    ],
    noscript: [
      // <noscript>JavaScript is required</noscript>
      { textContent: 'JavaScript is required' }
    ]
  }
}
```

### `keepalive`

Default values for KeepAlive configuration between pages.

This can be overridden with `definePageMeta` on an individual page. Only JSON-serializable values are allowed.

- **Type**: `boolean`
- **Default:** `false`

**See**: [Vue KeepAlive](https://vuejs.org/api/built-in-components.html#keepalive){rel=""nofollow""}

### `layoutTransition`

Default values for layout transitions.

This can be overridden with `definePageMeta` on an individual page. Only JSON-serializable values are allowed.

- **Type**: `boolean`
- **Default:** `false`

**See**: [Vue Transition docs](https://vuejs.org/api/built-in-components.html#transition){rel=""nofollow""}

### `pageTransition`

Default values for page transitions.

This can be overridden with `definePageMeta` on an individual page. Only JSON-serializable values are allowed.

- **Type**: `boolean`
- **Default:** `false`

**See**: [Vue Transition docs](https://vuejs.org/api/built-in-components.html#transition){rel=""nofollow""}

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

Customize Nuxt Nuxt SpaLoader element attributes.

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

This only has an effect when **experimental** support for View Transitions is [enabled in your nuxt.config file](https://nuxt.com/docs/getting-started/transitions#view-transitions-api-experimental).
This can be overridden with `definePageMeta` on an individual page.

- **Type**: `boolean`
- **Default:** `false`

**See**: [Nuxt View Transition API docs](https://nuxt.com/docs/getting-started/transitions#view-transitions-api-experimental){rel=""nofollow""}

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

Set to `true` to enable bundle analysis, or pass an object with options: [for webpack](https://github.com/webpack-contrib/webpack-bundle-analyzer#options-for-plugin){rel=""nofollow""} or [for vite](https://github.com/btd/rollup-plugin-visualizer#options){rel=""nofollow""}.

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

```js
analyze: {
  analyzerMode: 'static'
}
```

### `templates`

It is recommended to use `addTemplate` from `@nuxt/kit` instead of this option.

- **Type**: `array`

**Example**:

```js
templates: [
  {
    src: '~/modules/support/plugin.js', // `src` can be absolute or relative
    dst: 'support.js', // `dst` is relative to project `.nuxt` dir
  }
]
```

### `transpile`

If you want to transpile specific dependencies with Babel, you can add them here. Each item in transpile can be a package name, a function, a string or regex object matching the dependency's file name.

You can also use a function to conditionally transpile. The function will receive an object ({ isDev, isServer, isClient, isModern, isLegacy }).

- **Type**: `array`

**Example**:

```js
transpile: [({ isLegacy }) => isLegacy && 'ky']
```

## buildDir

Define the directory where your built Nuxt files will be placed.

Many tools assume that `.nuxt` is a hidden directory (because it starts with a `.`). If that is a problem, you can use this option to prevent that.

- **Type**: `string`
- **Default:** `"/<rootDir>/.nuxt"`

**Example**:

```js
export default {
  buildDir: 'nuxt-build'
}
```

## buildId

A unique identifier matching the build. This may contain the hash of the current state of the project.

- **Type**: `string`
- **Default:** `"f90f6a12-4673-4481-a5f5-514e21c7a35b"`

## builder

The builder to use for bundling the Vue part of your application.

- **Type**: `string`
- **Default:** `"@nuxt/vite-builder"`

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

**See**: [`components/` directory documentation](https://nuxt.com/docs/guide/directory-structure/components){rel=""nofollow""}

## css

You can define the CSS files/modules/libraries you want to set globally (included in every page).

Nuxt will automatically guess the file type by its extension and use the appropriate pre-processor. You will still need to install the required loader if you need to use them.

- **Type**: `array`

**Example**:

```js
css: [
  // Load a Node.js module directly (here it's a Sass file).
  'bulma',
  // CSS file in the project
  '~/assets/css/main.css',
  // SCSS file in the project
  '~/assets/css/main.scss'
]
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
      cert: './server.crt'
    }
  }
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
- **Default:** `"assets"`

### `layouts`

The layouts directory, each file of which will be auto-registered as a Nuxt layout.

- **Type**: `string`
- **Default:** `"layouts"`

### `middleware`

The middleware directory, each file of which will be auto-registered as a Nuxt middleware.

- **Type**: `string`
- **Default:** `"middleware"`

### `modules`

The modules directory, each file in which will be auto-registered as a Nuxt module.

- **Type**: `string`
- **Default:** `"modules"`

### `pages`

The directory which will be processed to auto-generate your application page routes.

- **Type**: `string`
- **Default:** `"pages"`

### `plugins`

The plugins directory, each file of which will be auto-registered as a Nuxt plugin.

- **Type**: `string`
- **Default:** `"plugins"`

### `public`

The directory containing your static files, which will be directly accessible via the Nuxt server and copied across into your `dist` folder when your app is generated.

- **Type**: `string`
- **Default:** `"public"`

### `shared`

The shared directory. This directory is shared between the app and the server.

- **Type**: `string`
- **Default:** `"shared"`

### `static`

- **Type**: `string`
- **Default:** `"public"`

## esbuild

### `options`

Configure shared esbuild options used within Nuxt and passed to other builders, such as Vite or Webpack.

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
