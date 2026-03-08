## webpack

### `aggressiveCodeRemoval`

Hard-replaces `typeof process`, `typeof window` and `typeof document` to tree-shake bundle.

- **Type**: `boolean`
- **Default:** `false`

### `analyze`

If you are using webpack, Nuxt uses `webpack-bundle-analyzer` to visualize your bundles and how to optimize them.

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
  webpack: {
    analyze: {
      analyzerMode: 'static',
    },
  },
})
```

### `cssSourceMap`

Enables CSS source map support (defaults to `true` in development).

- **Type**: `boolean`
- **Default:** `false`

### `devMiddleware`

See [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware){rel=""nofollow""} for available options.

#### `stats`

- **Type**: `string`
- **Default:** `"none"`

### `experiments`

Configure [webpack experiments](https://webpack.js.org/configuration/experiments/){rel=""nofollow""}

### `extractCSS`

Enables Common CSS Extraction.

Using [mini-css-extract-plugin](https://github.com/webpack/mini-css-extract-plugin){rel=""nofollow""} under the hood, your CSS will be extracted into separate files, usually one per component. This allows caching your CSS and JavaScript separately.

- **Type**: `boolean`
- **Default:** `true`

**Example**:

```ts
export default defineNuxtConfig({
  webpack: {
    extractCSS: true,
    // or
    extractCSS: {
      ignoreOrder: true,
    },
  },
})
```

If you want to extract all your CSS to a single file, there is a workaround for this.
However, note that it is not recommended to extract everything into a single file.
Extracting into multiple CSS files is better for caching and preload isolation. It
can also improve page performance by downloading and resolving only those resources
that are needed.

**Example**:

```ts
export default defineNuxtConfig({
  webpack: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
  },
})
```

### `filenames`

Customize bundle filenames.

To understand a bit more about the use of manifests, take a look at [webpack documentation](https://webpack.js.org/guides/code-splitting/){rel=""nofollow""}.

::callout
**Note**: Be careful when using non-hashed based filenames in production
as most browsers will cache the asset and not detect the changes on first load.
::

This example changes fancy chunk names to numerical ids:

**Example**:

```ts
export default defineNuxtConfig({
  webpack: {
    filenames: {
      chunk: ({ isDev }) => (isDev ? '[name].js' : '[id].[contenthash].js'),
    },
  },
})
```

#### `app`

- **Type**: `function`

#### `chunk`

- **Type**: `function`

#### `css`

- **Type**: `function`

#### `font`

- **Type**: `function`

#### `img`

- **Type**: `function`

#### `video`

- **Type**: `function`

### `friendlyErrors`

Set to `false` to disable the overlay provided by [FriendlyErrorsWebpackPlugin](https://github.com/nuxt/friendly-errors-webpack-plugin){rel=""nofollow""}.

- **Type**: `boolean`
- **Default:** `true`

### `hotMiddleware`

See [webpack-hot-middleware](https://github.com/webpack/webpack-hot-middleware){rel=""nofollow""} for available options.

### `loaders`

Customize the options of Nuxt's integrated webpack loaders.

#### `css`

See [css-loader](https://github.com/webpack/css-loader){rel=""nofollow""} for available options.

##### `esModule`

- **Type**: `boolean`
- **Default:** `false`

##### `importLoaders`

- **Type**: `number`
- **Default:** `0`

##### `url`

###### `filter`

- **Type**: `function`

#### `cssModules`

See [css-loader](https://github.com/webpack/css-loader){rel=""nofollow""} for available options.

##### `esModule`

- **Type**: `boolean`
- **Default:** `false`

##### `importLoaders`

- **Type**: `number`
- **Default:** `0`

##### `modules`

###### `localIdentName`

- **Type**: `string`
- **Default:** `"[local]_[hash:base64:5]"`

##### `url`

###### `filter`

- **Type**: `function`

#### `esbuild`

- **Type**: `object`
- **Default**

```json
{
  "target": "esnext",
  "jsxFactory": "h",
  "jsxFragment": "Fragment",
  "tsconfigRaw": {}
}
```

**See**: [esbuild loader](https://github.com/privatenumber/esbuild-loader){rel=""nofollow""}

#### `file`

**See**: [`file-loader` Options](https://github.com/webpack/file-loader#options){rel=""nofollow""}

**Default**:

```json
{ "esModule": false }
```

##### `esModule`

- **Type**: `boolean`
- **Default:** `false`

##### `limit`

- **Type**: `number`
- **Default:** `1000`

#### `fontUrl`

**See**: [`file-loader` Options](https://github.com/webpack/file-loader#options){rel=""nofollow""}

**Default**:

```json
{ "esModule": false }
```

##### `esModule`

- **Type**: `boolean`
- **Default:** `false`

##### `limit`

- **Type**: `number`
- **Default:** `1000`

#### `imgUrl`

**See**: [`file-loader` Options](https://github.com/webpack/file-loader#options){rel=""nofollow""}

**Default**:

```json
{ "esModule": false }
```

##### `esModule`

- **Type**: `boolean`
- **Default:** `false`

##### `limit`

- **Type**: `number`
- **Default:** `1000`

#### `less`

- **Default**

```json
{
  "sourceMap": false
}
```

**See**: [`less-loader` Options](https://github.com/webpack/less-loader#options){rel=""nofollow""}

#### `pugPlain`

**See**: [`pug` options](https://pugjs.org/api/reference.html#options){rel=""nofollow""}

#### `sass`

**See**: [`sass-loader` Options](https://github.com/webpack/sass-loader#options){rel=""nofollow""}

**Default**:

```json
{
  "sassOptions": {
    "indentedSyntax": true
  }
}
```

##### `sassOptions`

###### `indentedSyntax`

- **Type**: `boolean`
- **Default:** `true`

#### `scss`

- **Default**

```json
{
  "sourceMap": false
}
```

**See**: [`sass-loader` Options](https://github.com/webpack/sass-loader#options){rel=""nofollow""}

#### `stylus`

- **Default**

```json
{
  "sourceMap": false
}
```

**See**: [`stylus-loader` Options](https://github.com/webpack/stylus-loader#options){rel=""nofollow""}

#### `vue`

See [vue-loader](https://github.com/vuejs/vue-loader){rel=""nofollow""} for available options.

##### `compilerOptions`

- **Type**: `object`

##### `propsDestructure`

- **Type**: `boolean`
- **Default:** `true`

##### `transformAssetUrls`

- **Type**: `object`
- **Default**

```json
{
  "video": [
    "src",
    "poster"
  ],
  "source": [
    "src"
  ],
  "img": [
    "src"
  ],
  "image": [
    "xlink:href",
    "href"
  ],
  "use": [
    "xlink:href",
    "href"
  ]
}
```

#### `vueStyle`

- **Default**

```json
{
  "sourceMap": false
}
```

### `optimization`

Configure [webpack optimization](https://webpack.js.org/configuration/optimization/){rel=""nofollow""}.

#### `minimize`

Set minimize to `false` to disable all minimizers. (It is disabled in development by default).

- **Type**: `boolean`
- **Default:** `true`

#### `minimizer`

You can set minimizer to a customized array of plugins.

#### `runtimeChunk`

- **Type**: `string`
- **Default:** `"single"`

#### `splitChunks`

##### `automaticNameDelimiter`

- **Type**: `string`
- **Default:** `"/"`

##### `cacheGroups`

##### `chunks`

- **Type**: `string`
- **Default:** `"all"`

### `optimizeCSS`

OptimizeCSSAssets plugin options.

Defaults to true when `extractCSS` is enabled.

- **Type**: `boolean`
- **Default:** `false`

**See**: [css-minimizer-webpack-plugin documentation](https://github.com/webpack/css-minimizer-webpack-plugin){rel=""nofollow""}.

### `plugins`

Add webpack plugins.

- **Type**: `array`

**Example**:

```ts
import webpack from 'webpack'
import { version } from './package.json'

export default defineNuxtConfig({
  webpack: {
    plugins: [
      // ...
      new webpack.DefinePlugin({
        'process.VERSION': version,
      }),
    ],
  },
})
```

### `postcss`

Customize PostCSS Loader. same options as [`postcss-loader` options](https://github.com/webpack/postcss-loader#options){rel=""nofollow""}

#### `postcssOptions`

##### `plugins`

- **Type**: `object`
- **Default**

```json
{
  "autoprefixer": {},
  "cssnano": {}
}
```

### `profile`

Enable the profiler in webpackbar.

It is normally enabled by CLI argument `--profile`.

- **Type**: `boolean`
- **Default:** `false`

**See**: [webpackbar](https://github.com/unjs/webpackbar#profile){rel=""nofollow""}.

### `serverURLPolyfill`

The polyfill library to load to provide URL and URLSearchParams.

Defaults to `'url'` ([see package](https://www.npmjs.com/package/url){rel=""nofollow""}).

- **Type**: `string`
- **Default:** `"url"`

### `warningIgnoreFilters`

Filters to hide build warnings.

- **Type**: `array`

## workspaceDir

Define the workspace directory of your application.

Often this is used when in a monorepo setup. Nuxt will attempt to detect your workspace directory automatically, but you can override it here.
It is normally not needed to configure this option.

- **Type**: `string`
- **Default:** `"/<workspaceDir>"`

# Nuxt API Reference

::card-group
:::card
-------

icon: i-lucide-box
title: Components
to: https://nuxt.com/docs/4.x/api/components/client-only
--------------------------------------------------------

Explore Nuxt built-in components for pages, layouts, head, and more.
:::

## :::card

icon: i-lucide-arrow-left-right
title: Composables
to: https://nuxt.com/docs/4.x/api/composables/use-app-config
------------------------------------------------------------

Discover Nuxt composable functions for data-fetching, head management and more.
:::

## :::card

icon: i-lucide-square-function
title: Utils
to: https://nuxt.com/docs/4.x/api/utils/dollarfetch
---------------------------------------------------

Learn about Nuxt utility functions for navigation, error handling and more.
:::

## :::card

icon: i-lucide-square-terminal
title: Commands
to: https://nuxt.com/docs/4.x/api/commands/add
----------------------------------------------

List of Nuxt CLI commands to init, analyze, build, and preview your application.
:::

## :::card

icon: i-lucide-package
title: Nuxt Kit
to: https://nuxt.com/docs/4.x/api/kit/modules
---------------------------------------------

Understand Nuxt Kit utilities to create modules and control Nuxt.
:::

## :::card

icon: i-lucide-brain
title: Advanced
to: https://nuxt.com/docs/4.x/api/advanced/hooks
------------------------------------------------

Go deep in Nuxt internals with Nuxt lifecycle hooks.
:::

## :::card

icon: i-lucide-cog
title: Nuxt Configuration
to: https://nuxt.com/docs/4.x/api/nuxt-config
---------------------------------------------

Explore all Nuxt configuration options to customize your application.
:::
::

# Hello World

:read-more{to="https://nuxt.com/docs/getting-started/introduction"}

::sandbox

::

# Auto Imports

Example of the auto-imports feature in Nuxt with:

- Vue components in the `components/` directory are auto-imported and can be used directly in your templates.
- Vue composables in the `composables/` directory are auto-imported and can be used directly in your templates and JS/TS files.
- JS/TS variables and functions in the `utils/` directory are auto-imported and can be used directly in your templates and JS/TS files.

:read-more{to="https://nuxt.com/docs/guide/directory-structure/components"}

:read-more{to="https://nuxt.com/docs/guide/directory-structure/composables"}

:read-more{to="https://nuxt.com/docs/guide/directory-structure/utils"}

::sandbox

::

# Data Fetching

:read-more{to="https://nuxt.com/docs/getting-started/data-fetching"}

:read-more{to="https://nuxt.com/docs/guide/directory-structure/server"}

::sandbox

::

# State Management

:read-more{to="https://nuxt.com/docs/getting-started/state-management"}

:read-more{to="https://nuxt.com/docs/api/composables/use-state"}

::sandbox

::

# Meta Tags

:read-more{to="https://nuxt.com/docs/getting-started/seo-meta"}

::sandbox

::

# Layouts

:read-more{to="https://nuxt.com/docs/getting-started/views#layouts"}

:read-more{to="https://nuxt.com/docs/guide/directory-structure/layouts"}

::sandbox

::

# Middleware

:read-more{to="https://nuxt.com/docs/guide/directory-structure/middleware"}

::sandbox

::

# Pages

:read-more{to="https://nuxt.com/docs/guide/directory-structure/pages"}

::sandbox

::

# Universal Router

::sandbox

::

# Layers

This example shows how to use the `extends` key in `nuxt.config.ts` to use the `base/` directory as a base Nuxt application, and use its components, composables or config and override them if necessary.

:read-more{to="https://nuxt.com/docs/getting-started/layers"}

::sandbox

::

# Error Handling

:read-more{to="https://nuxt.com/docs/getting-started/error-handling"}

::sandbox

::

# JSX / TSX

:read-more{icon="i-simple-icons-vuedotjs" target="\_blank" to="https://vuejs.org/guide/extras/render-function.html#jsx-tsx"}

::sandbox

::

# Locale

::callout{icon="i-ph-info-duotone"}
You can right-click to "View Page Source" and see that Nuxt renders the correct date in SSR based on the visitor's locale.
::

::sandbox

::

# Module Extend Pages

:read-more{to="https://nuxt.com/docs/guide/going-further/modules"}

::sandbox

::

# Teleport

Vue 3 provides the [`<Teleport>` component](https://vuejs.org/guide/built-ins/teleport.html){rel=""nofollow""} which allows content to be rendered elsewhere in the DOM, outside of the Vue application.

This example shows how to use the `<Teleport>` with client-side and server-side rendering.

:read-more{to="https://nuxt.com/docs/api/components/teleports"}

::sandbox

::

# Testing

:read-more{to="https://nuxt.com/docs/getting-started/testing"}

::sandbox

::

# useCookie

:read-more{to="https://nuxt.com/docs/api/composables/use-cookie"}

::sandbox

::

# Use Custom Fetch Composable

:read-more{to="https://nuxt.com/docs/guide/recipes/custom-usefetch"}

::sandbox

::

# WASM

::sandbox

::
