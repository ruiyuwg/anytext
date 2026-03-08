## vite

Configuration that will be passed directly to Vite.

**See**: [Vite configuration docs](https://vite.dev/config/){rel=""nofollow""} for more information.
Please note that not all vite options are supported in Nuxt.

### `build`

#### `assetsDir`

- **Type**: `string`
- **Default:** `"_nuxt/"`

#### `emptyOutDir`

- **Type**: `boolean`
- **Default:** `false`

### `cacheDir`

- **Type**: `string`
- **Default:** `"/<rootDir>/node_modules/.cache/vite"`

### `clearScreen`

- **Type**: `boolean`
- **Default:** `true`

### `define`

- **Type**: `object`
- **Default**

```json
{
  "__VUE_PROD_HYDRATION_MISMATCH_DETAILS__": false,
  "process.dev": false,
  "import.meta.dev": false,
  "process.test": false,
  "import.meta.test": false
}
```

### `esbuild`

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

### `mode`

- **Type**: `string`
- **Default:** `"production"`

### `optimizeDeps`

#### `esbuildOptions`

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

#### `exclude`

- **Type**: `array`
- **Default**

```json
[
  "vue-demi"
]
```

### `publicDir`

### `resolve`

#### `extensions`

- **Type**: `array`
- **Default**

```json
[
  ".mjs",
  ".js",
  ".ts",
  ".jsx",
  ".tsx",
  ".json",
  ".vue"
]
```

### `root`

- **Type**: `string`
- **Default:** `"/<rootDir>"`

### `server`

#### `fs`

##### `allow`

- **Type**: `array`
- **Default**

```json
[
  "/<rootDir>/.nuxt",
  "/<rootDir>/app",
  "/<rootDir>",
  "/<workspaceDir>"
]
```

### `vue`

#### `features`

##### `propsDestructure`

- **Type**: `boolean`
- **Default:** `true`

#### `isProduction`

- **Type**: `boolean`
- **Default:** `true`

#### `script`

##### `hoistStatic`

#### `template`

##### `compilerOptions`

- **Type**: `object`

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

### `vueJsx`

- **Type**: `object`
- **Default**

```json
{
  "isCustomElement": {
    "$schema": {
      "title": "",
      "description": "",
      "tags": []
    }
  }
}
```

## vue

Vue.js config

### `compilerOptions`

Options for the Vue compiler that will be passed at build time.

**See**: [Vue documentation](https://vuejs.org/api/application#app-config-compileroptions){rel=""nofollow""}

### `config`

It is possible to pass configure the Vue app globally. Only serializable options may be set in your `nuxt.config`. All other options should be set at runtime in a Nuxt plugin.

**See**: [Vue app config documentation](https://vuejs.org/api/application#app-config){rel=""nofollow""}

### `propsDestructure`

Enable reactive destructure for `defineProps`

- **Type**: `boolean`
- **Default:** `true`

### `runtimeCompiler`

Include Vue compiler in runtime bundle.

- **Type**: `boolean`
- **Default:** `false`

### `transformAssetUrls`

#### `image`

- **Type**: `array`
- **Default**

```json
[
  "xlink:href",
  "href"
]
```

#### `img`

- **Type**: `array`
- **Default**

```json
[
  "src"
]
```

#### `source`

- **Type**: `array`
- **Default**

```json
[
  "src"
]
```

#### `use`

- **Type**: `array`
- **Default**

```json
[
  "xlink:href",
  "href"
]
```

#### `video`

- **Type**: `array`
- **Default**

```json
[
  "src",
  "poster"
]
```

## watch

The watch property lets you define patterns that will restart the Nuxt dev server when changed.

It is an array of strings or regular expressions. Strings should be either absolute paths or relative to the `srcDir` (and the `srcDir` of any layers). Regular expressions will be matched against the path relative to the project `srcDir` (and the `srcDir` of any layers).

- **Type**: `array`

## watchers

The watchers property lets you overwrite watchers configuration in your `nuxt.config`.

### `chokidar`

Options to pass directly to `chokidar`.

**See**: [chokidar](https://github.com/paulmillr/chokidar#api){rel=""nofollow""}

#### `ignoreInitial`

- **Type**: `boolean`
- **Default:** `true`

#### `ignorePermissionErrors`

- **Type**: `boolean`
- **Default:** `true`

### `rewatchOnRawEvents`

An array of event types, which, when received, will cause the watcher to restart.

### `webpack`

`watchOptions` to pass directly to webpack.

**See**: [webpack@4 watch options](https://v4.webpack.js.org/configuration/watch/#watchoptions){rel=""nofollow""}.

#### `aggregateTimeout`

- **Type**: `number`
- **Default:** `1000`
