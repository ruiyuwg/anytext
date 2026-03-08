# Import meta

## The `import.meta` object

With ES modules you can obtain some metadata from the code that imports or compiles your ES-module.
This is done through `import.meta`, which is an object that provides your code with this information.
Throughout the Nuxt documentation you may see snippets that use this already to figure out whether the
code is currently running on the client or server side.

::read-more

Read more about `import.meta`.
::

## Runtime (App) Properties

These values are statically injected and can be used for tree-shaking your runtime code.

| Property                | Type    | Description                                                                  |
| ----------------------- | ------- | ---------------------------------------------------------------------------- |
| `import.meta.client`    | boolean | True when evaluated on the client side.                                      |
| `import.meta.browser`   | boolean | True when evaluated on the client side.                                      |
| `import.meta.server`    | boolean | True when evaluated on the server side.                                      |
| `import.meta.nitro`     | boolean | True when evaluated on the server side.                                      |
| `import.meta.dev`       | boolean | True when running the Nuxt dev server.                                       |
| `import.meta.test`      | boolean | True when running in a test context.                                         |
| `import.meta.prerender` | boolean | True when rendering HTML on the server in the prerender stage of your build. |

## Builder Properties

These values are available both in modules and in your `nuxt.config`.

| Property          | Type   | Description                           |
| ----------------- | ------ | ------------------------------------- |
| `import.meta.env` | object | Equals `process.env`                  |
| `import.meta.url` | string | Resolvable path for the current file. |

## Examples

### Using `import.meta.url` to resolve files within modules

```ts [modules/my-module/index.ts]
import { createResolver } from 'nuxt/kit'

// Resolve relative from the current file
const resolver = createResolver(import.meta.url)

export default defineNuxtModule({
  meta: { name: 'myModule' },
  setup () {
    addComponent({
      name: 'MyModuleComponent',
      // Resolves to '/modules/my-module/components/MyModuleComponent.vue'
      filePath: resolver.resolve('./components/MyModuleComponent.vue'),
    })
  },
})
```

# Nuxt Configuration

::note

This file is auto-generated from Nuxt source code.
::

## alias

You can improve your DX by defining additional aliases to access custom directories within your JavaScript and CSS.

- **Type**: `object`
- **Default**

```json
{
  "~": "/<srcDir>/",
  "@": "/<srcDir>/",
  "~~": "/<rootDir>/",
  "@@": "/<rootDir>/",
  "#shared": "/<rootDir>/shared/",
  "assets": "/<srcDir>/assets/",
  "public": "/<srcDir>/public/",
  "#server": "/<srcDir>/server/",
  "#build": "/<rootDir>/.nuxt/",
  "#internal/nuxt/paths": "/<rootDir>/.nuxt/paths.mjs"
}
```

::callout
**Note**: Within a webpack context (image sources, CSS - but not JavaScript) you *must* access
your alias by prefixing it with `~`.
::

::callout
**Note**: These aliases will be automatically added to the generated `.nuxt/tsconfig.json` so you can get full
type support and path auto-complete. In case you need to extend options provided by `./.nuxt/tsconfig.json`
further, make sure to add them here or within the `typescript.tsConfig` property in `nuxt.config`.
::

**Example**:

```js
export default {
  alias: {
    'images': fileURLToPath(new URL('./assets/images', import.meta.url)),
    'style': fileURLToPath(new URL('./assets/style', import.meta.url)),
    'data': fileURLToPath(new URL('./assets/other/data', import.meta.url))
  }
}
```

## analyzeDir

The directory where Nuxt will store the generated files when running `nuxt analyze`.

If a relative path is specified, it will be relative to your `rootDir`.

- **Type**: `string`
- **Default:** `"/<rootDir>/.nuxt/analyze"`
