## optimization

Build time optimization configuration.

### `asyncTransforms`

Options passed directly to the transformer from `unctx` that preserves async context after `await`.

#### `asyncFunctions`

- **Type**: `array`
- **Default**

```json
[
  "defineNuxtPlugin",
  "defineNuxtRouteMiddleware"
]
```

#### `objectDefinitions`

##### `defineNuxtComponent`

- **Type**: `array`
- **Default**

```json
[
  "asyncData",
  "setup"
]
```

##### `defineNuxtPlugin`

- **Type**: `array`
- **Default**

```json
[
  "setup"
]
```

##### `definePageMeta`

- **Type**: `array`
- **Default**

```json
[
  "middleware",
  "validate"
]
```

### `keyedComposables`

Functions to inject a key for.

As long as the number of arguments passed to the function is less than `argumentLength`, an additional magic string will be injected as the last argument. This key is stable between SSR and client-side hydration. You will need to take steps to handle this additional key.
The key is unique based on the location of the function being invoked within the file.

::read-more

Learn more about keyed functions.
::

- **Type**: `array`
- **Default**

```json
[
  {
    "name": "callOnce",
    "argumentLength": 3,
    "source": "#app/composables/once"
  },
  {
    "name": "defineNuxtComponent",
    "argumentLength": 2,
    "source": "#app/composables/component"
  },
  {
    "name": "useState",
    "argumentLength": 2,
    "source": "#app/composables/state"
  },
  {
    "name": "useFetch",
    "argumentLength": 3,
    "source": "#app/composables/fetch"
  },
  {
    "name": "useAsyncData",
    "argumentLength": 3,
    "source": "#app/composables/asyncData"
  },
  {
    "name": "useLazyAsyncData",
    "argumentLength": 3,
    "source": "#app/composables/asyncData"
  },
  {
    "name": "useLazyFetch",
    "argumentLength": 3,
    "source": "#app/composables/fetch"
  }
]
```

### `treeShake`

Tree shake code from specific builds.

#### `composables`

Tree shake composables from the server or client builds.

**Example**:

```ts
export default defineNuxtConfig({
  optimization: {
    treeShake: {
      composables: {
        client: { vue: ['onMounted'] },
        server: { vue: ['onServerPrefetch'] },
      },
    },
  },
})
```

##### `client`

- **Type**: `object`
- **Default**

```json
{
  "vue": [
    "onRenderTracked",
    "onRenderTriggered",
    "onServerPrefetch"
  ],
  "#app": [
    "definePayloadReducer",
    "definePageMeta",
    "onPrehydrate"
  ]
}
```

##### `server`

- **Type**: `object`
- **Default**

```json
{
  "vue": [
    "onMounted",
    "onUpdated",
    "onUnmounted",
    "onBeforeMount",
    "onBeforeUpdate",
    "onBeforeUnmount",
    "onRenderTracked",
    "onRenderTriggered",
    "onActivated",
    "onDeactivated"
  ],
  "#app": [
    "definePayloadReviver",
    "definePageMeta"
  ]
}
```

## pages

Whether to use the vue-router integration in Nuxt 3. If you do not provide a value it will be enabled if you have a `app/pages/` directory in your source folder.

Additionally, you can provide a glob pattern or an array of patterns to scan only certain files for pages.

**Example**:

```ts
export default defineNuxtConfig({
  pages: {
    pattern: ['**/*/*.vue', '!**/*.spec.*'],
  },
})
```

## plugins

An array of nuxt app plugins.

Each plugin can be a string (which can be an absolute or relative path to a file). If it ends with `.client` or `.server` then it will be automatically loaded only in the appropriate context.
It can also be an object with `src` and `mode` keys.

- **Type**: `array`

::callout
**Note**: Plugins are also auto-registered from the `~/plugins` directory
and these plugins do not need to be listed in `nuxt.config` unless you
need to customize their order. All plugins are deduplicated by their src path.
::

**See**: [`app/plugins/` directory documentation](https://nuxt.com/docs/4.x/directory-structure/app/plugins){rel=""nofollow""}

**Example**:

```ts
export default defineNuxtConfig({
  plugins: [
    '~/custom-plugins/foo.client.js', // only in client side
    '~/custom-plugins/bar.server.js', // only in server side
    '~/custom-plugins/baz.js', // both client & server
    { src: '~/custom-plugins/both-sides.js' },
    { src: '~/custom-plugins/client-only.js', mode: 'client' }, // only on client side
    { src: '~/custom-plugins/server-only.js', mode: 'server' }, // only on server side
  ],
})
```

## postcss

### `order`

A strategy for ordering PostCSS plugins.

- **Type**: `function`

### `plugins`

Options for configuring PostCSS plugins.

**See**: [PostCSS docs](https://postcss.org/){rel=""nofollow""}

#### `autoprefixer`

Plugin to parse CSS and add vendor prefixes to CSS rules.

**See**: [`autoprefixer`](https://github.com/postcss/autoprefixer){rel=""nofollow""}

#### `cssnano`

- **Type**: `object`

**See**: [`cssnano` configuration options](https://cssnano.github.io/cssnano/docs/config-file/#configuration-options){rel=""nofollow""}

## rootDir

Define the root directory of your application.

This property can be overwritten (for example, running `nuxt ./my-app/` will set the `rootDir` to the absolute path of `./my-app/` from the current/working directory.
It is normally not needed to configure this option.

- **Type**: `string`
- **Default:** `"/<rootDir>"`

## routeRules

Global route options applied to matching server routes.

**Experimental**: This is an experimental feature and API may change in the future.

**See**: [Nitro route rules documentation](https://nitro.build/config#routerules){rel=""nofollow""}

## router

### `options`

Additional router options passed to `vue-router`. On top of the options for `vue-router`, Nuxt offers additional options to customize the router (see below).

::callout
**Note**: Only JSON serializable options should be passed by Nuxt config.
For more control, you can use an `router.options.ts` file.
::

**See**: [Vue Router documentation](https://router.vuejs.org/api/interfaces/routeroptions){rel=""nofollow""}

#### `hashMode`

You can enable hash history in SPA mode. In this mode, router uses a hash character (#) before the actual URL that is internally passed. When enabled, the **URL is never sent to the server** and **SSR is not supported**.

- **Type**: `boolean`
- **Default:** `false`

**Default**: false

#### `scrollBehaviorType`

Customize the scroll behavior for hash links.

- **Type**: `string`
- **Default:** `"auto"`

**Default**: 'auto'

## runtimeConfig

Runtime config allows passing dynamic config and environment variables to the Nuxt app context.

The value of this object is accessible from server only using `useRuntimeConfig`.
It mainly should hold *private* configuration which is not exposed on the frontend. This could include a reference to your API secret tokens.
Anything under `public` and `app` will be exposed to the frontend as well.
Values are automatically replaced by matching env variables at runtime, e.g. setting an environment variable `NUXT_API_KEY=my-api-key NUXT_PUBLIC_BASE_URL=/foo/` would overwrite the two values in the example below.

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
  }
}
```

**Example**:

```ts
export default defineNuxtConfig({
  runtimeConfig: {
    apiKey: '', // Default to an empty string, automatically set at runtime using process.env.NUXT_API_KEY
    public: {
      baseURL: '', // Exposed to the frontend as well.
    },
  },
})
```

## server

Configuration for Nuxt's server builder.

### `builder`

Specify the server builder to use for bundling the server part of your application.

By default, Nuxt uses `@nuxt/nitro-server`, which provides standalone Nitro integration. This architecture allows for different Nitro integration patterns, such as using Nitro as a Vite plugin (with the Vite Environment API).

- **Type**: `string | { bundle: (nuxt: Nuxt) => Promise<void> }`
- **Default:** `"@nuxt/nitro-server"`

::callout{type="warning"}
This option is intended for internal use and the API is not finalized. Please open an issue before relying on the current implementation.
::

## serverDir

Define the server directory of your Nuxt application, where Nitro routes, middleware and plugins are kept.

If a relative path is specified, it will be relative to your `rootDir`.

- **Type**: `string`
- **Default:** `"/<rootDir>/server"`

## serverHandlers

Nitro server handlers.

Each handler accepts the following options:

- handler: The path to the file defining the handler. - route: The route under which the handler is available. This follows the conventions of [rou3](https://github.com/h3js/rou3){rel=""nofollow""}. - method: The HTTP method of requests that should be handled. - middleware: Specifies whether it is a middleware handler. - lazy: Specifies whether to use lazy loading to import the handler.
- **Type**: `array`

**See**: [`server/` directory documentation](https://nuxt.com/docs/4.x/directory-structure/server){rel=""nofollow""}

::callout
**Note**: Files from `server/api`, `server/middleware` and `server/routes` will be automatically registered by Nuxt.
::

**Example**:

```ts
export default defineNuxtConfig({
  serverHandlers: [
    { route: '/path/foo/**:name', handler: '#server/foohandler.ts' },
  ],
})
```

## sourcemap

Configures whether and how sourcemaps are generated for server and/or client bundles.

If set to a single boolean, that value applies to both server and client. Additionally, the `'hidden'` option is also available for both server and client.
Available options for both client and server: - `true`: Generates sourcemaps and includes source references in the final bundle. - `false`: Does not generate any sourcemaps. - `'hidden'`: Generates sourcemaps but does not include references in the final bundle.

- **Type**: `object`
- **Default**

```json
{
  "server": true,
  "client": false
}
```

## spaLoadingTemplate

Boolean or a path to an HTML file with the contents of which will be inserted into any HTML page rendered with `ssr: false`.

- If it is unset, it will use `~/spa-loading-template.html` file in one of your layers, if it exists. - If it is false, no SPA loading indicator will be loaded. - If true, Nuxt will look for `~/spa-loading-template.html` file in one of your layers, or a
  default Nuxt image will be used.
  Some good sources for spinners are [SpinKit](https://github.com/tobiasahlin/SpinKit){rel=""nofollow""} or [SVG Spinners](https://icones.js.org/collection/svg-spinners){rel=""nofollow""}.
- **Default:** `null`

**Example**: ~/spa-loading-template.html

```html
<!-- https://github.com/barelyhuman/snips/blob/dev/pages/css-loader.md -->
<div class="loader"></div>
<style>
.loader {
  display: block;
  position: fixed;
  z-index: 1031;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 18px;
  height: 18px;
  box-sizing: border-box;
  border: solid 2px transparent;
  border-top-color: #000;
  border-left-color: #000;
  border-bottom-color: #efefef;
  border-right-color: #efefef;
  border-radius: 50%;
  -webkit-animation: loader 400ms linear infinite;
  animation: loader 400ms linear infinite;
}

@-webkit-keyframes loader {
  0% {
    -webkit-transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    -webkit-transform: translate(-50%, -50%) rotate(360deg);
  }
}
@keyframes loader {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
```

## srcDir

Define the source directory of your Nuxt application.

If a relative path is specified, it will be relative to the `rootDir`.

- **Type**: `string`
- **Default:** `"app"` (Nuxt 4), `"."` (Nuxt 3 with `compatibilityMode: 3`)

**Example**:

```ts
export default defineNuxtConfig({
  srcDir: 'app/',
})
```

This expects the following folder structure:

```bash
-| app/
---| assets/
---| components/
---| composables/
---| layouts/
---| middleware/
---| pages/
---| plugins/
---| utils/
---| app.config.ts
---| app.vue
---| error.vue
-| server/
-| shared/
-| public/
-| modules/
-| layers/
-| nuxt.config.ts
-| package.json
```

## ssr

Whether to enable rendering of HTML - either dynamically (in server mode) or at generate time. If set to `false` generated pages will have no content.

- **Type**: `boolean`
- **Default:** `true`

## telemetry

Manually disable nuxt telemetry.

**See**: [Nuxt Telemetry](https://github.com/nuxt/telemetry){rel=""nofollow""} for more information.

## test

Whether your app is being unit tested.

- **Type**: `boolean`
- **Default:** `false`

## theme

Extend project from a local or remote source.

Value should be a string pointing to source directory or config path relative to current config.
You can use `github:`, `gitlab:`, `bitbucket:` or `https://` to extend from a remote git repository.

- **Type**: `string`
