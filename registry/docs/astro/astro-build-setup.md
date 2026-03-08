### `astro:build:setup`

[Section titled “astro:build:setup”](#astrobuildsetup)

**Previous hook:** [`astro:build:start`](#astrobuildstart)

**Next hook:** [`astro:build:ssr`](#astrobuildssr)

**When:** After the `astro:build:start` hook, runs immediately before the build.

**Why:** At this point, the Vite config for the build has been completely constructed, this is your final chance to modify it. This can be useful for example to overwrite some defaults. If you’re not sure whether you should use this hook or `astro:build:start`, use `astro:build:start` instead.

```js
'astro:build:setup'?: (options: {
  vite: vite.InlineConfig;
  pages: Map<string, PageBuildData>;
  target: 'client' | 'server';
  updateConfig: (newConfig: vite.InlineConfig) => void;
  logger: AstroIntegrationLogger;
}) => void | Promise<void>;
```

#### `vite` option

[Section titled “vite option”](#vite-option)

**Type:** [`InlineConfig`](https://vite.dev/guide/api-javascript.html#inlineconfig)

An object that allows you to access the Vite configuration used in the build.

This can be useful if you need to access configuration options in your integration:

```js
export default {
  name: 'my-integration',
  hooks: {
    'astro:build:setup': ({ vite }) => {
      const { publicDir, root } = vite;
    },
  }
}
```

#### `pages` option

[Section titled “pages option”](#pages-option)

**Type:** `Map<string, PageBuildData>`

A `Map` with a list of pages as key and [their build data](#the-pagebuilddata-object) as value.

This can be used to perform an action if a route matches a criteria:

```js
export default {
  name: 'my-integration',
  hooks: {
    'astro:build:setup': ({ pages }) => {
      pages.forEach((data) => {
        if (data.route.pattern.test("/blog")) {
          console.log(data.route.type);
        }
      });
    },
  }
}
```

##### The `PageBuildData` object

[Section titled “The PageBuildData object”](#the-pagebuilddata-object)

Describes how to build a page.

###### `PageBuildData.key`

[Section titled “PageBuildData.key”](#pagebuilddatakey)

**Type:** `string`

**Added in:** `astro@4.8.0`

Specifies a unique identifier for the page.

###### `PageBuildData.component`

[Section titled “PageBuildData.component”](#pagebuilddatacomponent)

**Type:** `string`

Specifies the source component URL.

###### `PageBuildData.route`

[Section titled “PageBuildData.route”](#pagebuilddataroute)

**Type:** [`RouteData`](#routedata)

Describes the information about the page route.

###### `PageBuildData.moduleSpecifier`

[Section titled “PageBuildData.moduleSpecifier”](#pagebuilddatamodulespecifier)

**Type:** `string`

Defines a string that can be resolved into a file path for the module.

###### `PageBuildData.styles`

[Section titled “PageBuildData.styles”](#pagebuilddatastyles)

**Type:** `Array<{ depth: number; order: number; sheet: { type: 'inline'; content: string } | { type: 'external'; src: string } }>`

**Added in:** `astro@2.4.0`

A list of styles to render on the page. Each style contains its `depth` in the components tree and its display `order` on the page, as well as an indication of whether this should be applied as an inline or external style.

#### `target` option

[Section titled “target option”](#target-option)

**Type:** `'client' | 'server'`

Builds are separated in two distinct phases: `client` and `server`. This option allow you to determine the current build phase.

This can be used to perform an action only in a specific phase:

```js
export default {
  name: 'my-integration',
  hooks: {
    'astro:build:setup': ({ target }) => {
      if (target === "server") {
        // do something in server build phase
      }
    },
  }
}
```

#### `updateConfig()` option

[Section titled “updateConfig() option”](#updateconfig-option-1)

**Type:** `(newConfig: InlineConfig) => void`

A callback function to update the [Vite](https://vite.dev/) options used in the build. Any config you provide **will be merged with the user config + other integration config updates**, so you are free to omit keys!

For example, this can be used to supply a plugin to the user’s project:

```js
import awesomeCssPlugin from 'awesome-css-vite-plugin';


export default {
  name: 'my-integration',
  hooks: {
    'astro:build:setup': ({ updateConfig }) => {
      updateConfig({
        plugins: [awesomeCssPlugin()],
      })
    }
  }
}
```
