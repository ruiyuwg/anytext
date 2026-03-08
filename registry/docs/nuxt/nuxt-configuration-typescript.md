## typescript

Configuration for Nuxt's TypeScript integration.

### `builder`

Which builder types to include for your project.

By default Nuxt infers this based on your `builder` option (defaulting to 'vite') but you can either turn off builder environment types (with `false`) to handle this fully yourself, or opt for a 'shared' option.
The 'shared' option is advised for module authors, who will want to support multiple possible builders.

- **Default:** `null`

### `hoist`

Modules to generate deep aliases for within `compilerOptions.paths`. This does not yet support subpaths. It may be necessary when using Nuxt within a pnpm monorepo with `shamefully-hoist=false`.

- **Type**: `array`
- **Default**

```json
[
  "nitropack/types",
  "nitropack/runtime",
  "nitropack",
  "defu",
  "h3",
  "consola",
  "ofetch",
  "@unhead/vue",
  "@nuxt/devtools",
  "vue",
  "@vue/runtime-core",
  "@vue/compiler-sfc",
  "vue-router",
  "vue-router/auto-routes",
  "unplugin-vue-router/client",
  "@nuxt/schema",
  "nuxt"
]
```

### `includeWorkspace`

Include parent workspace in the Nuxt project. Mostly useful for themes and module authors.

- **Type**: `boolean`
- **Default:** `false`

### `shim`

Generate a `*.vue` shim.

We recommend instead letting the [official Vue extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar){rel=""nofollow""} generate accurate types for your components.
Note that you may wish to set this to `true` if you are using other libraries, such as ESLint, that are unable to understand the type of `.vue` files.

- **Type**: `boolean`
- **Default:** `false`

### `strict`

TypeScript comes with certain checks to give you more safety and analysis of your program. Once you’ve converted your codebase to TypeScript, you can start enabling these checks for greater safety. [Read More](https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html#getting-stricter-checks){rel=""nofollow""}

- **Type**: `boolean`
- **Default:** `true`

### `tsConfig`

You can extend the generated TypeScript configurations (`.nuxt/tsconfig.app.json`, `.nuxt/tsconfig.server.json`, etc.) using this option.

### `typeCheck`

Enable build-time type checking.

If set to true, this will type check in development. You can restrict this to build-time type checking by setting it to `build`. Requires to install `typescript` and `vue-tsc` as dev dependencies.

- **Type**: `boolean`
- **Default:** `false`

**See**: [Nuxt TypeScript docs](https://nuxt.com/docs/4.x/guide/concepts/typescript){rel=""nofollow""}

## unhead

An object that allows us to configure the `unhead` nuxt module.

### `legacy`

Enable the legacy compatibility mode for `unhead` module. This applies the following changes: - Disables Capo.js sorting - Adds the `DeprecationsPlugin`: supports `hid`, `vmid`, `children`, `body` - Adds the `PromisesPlugin`: supports promises as input

- **Type**: `boolean`
- **Default:** `false`

**See**: [`unhead` migration documentation](https://unhead.unjs.io/docs/typescript/head/guides/get-started/migration){rel=""nofollow""}

**Example**:

```ts
export default defineNuxtConfig({
  unhead: {
    legacy: true,
  },
})
```

### `renderSSRHeadOptions`

An object that will be passed to `renderSSRHead` to customize the output.

- **Type**: `object`
- **Default**

```json
{
  "omitLineBreaks": false
}
```

**Example**:

```ts
export default defineNuxtConfig({
  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: true,
    },
  },
})
```
