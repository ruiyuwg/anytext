### `astro:build:done`

[Section titled “astro:build:done”](#astrobuilddone)

**Previous hook:** [`astro:build:generated`](#astrobuildgenerated)

**When:** After a production build (SSG or SSR) has completed.

**Why:** To access generated routes and assets for extension (ex. copy content into the generated `/assets` directory). If you plan to transform generated assets, we recommend exploring the [Vite Plugin API](https://vite.dev/guide/api-plugin.html) and [configuring via `astro:config:setup`](#updateconfig-option) instead.

```js
'astro:build:done'?: (options: {
  pages: { pathname: string }[];
  dir: URL;
  /** @deprecated Use the `assets` map and the new `astro:routes:resolved` hook */
  routes: IntegrationRouteData[];
  assets: Map<string, URL[]>;
  logger: AstroIntegrationLogger;
}) => void | Promise<void>;
```

#### `dir` option

[Section titled “dir option”](#dir-option-1)

**Type:** [`URL`](https://developer.mozilla.org/en-US/docs/Web/API/URL)

A URL path to the build output directory.

The following example uses Node’s built-in [`fileURLToPath()`](https://nodejs.org/api/url.html#urlfileurltopathurl-options) utility to compute a valid absolute path string for a file provided by the integration before writing to it:

```js
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';


export default function myIntegration() {
  return {
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const metadata = await getIntegrationMetadata();
        // Use fileURLToPath to get a valid, cross-platform absolute path string
        const outFile = fileURLToPath(new URL('./my-integration.json', dir));
        await writeFile(outFile, JSON.stringify(metadata));
      }
    }
  }
}
```

#### `routes` option

[Section titled “routes option”](#routes-option-1)

Caution

This property is deprecated since v5.0. Check the [migration guide](/en/guides/upgrade-to/v5/#deprecated-routes-on-astrobuilddone-hook-integration-api).

**Type:** [`IntegrationRouteData[]`](#integrationroutedata)

A list of all generated routes alongside their associated metadata.

You can reference the full `IntegrationRouteData` type below, but the most common properties are:

- `component` - the input file path relative to the project root
- `pathname` - the output file URL (undefined for routes using `[dynamic]` and `[...spread]` params)

#### `assets` option

[Section titled “assets option”](#assets-option)

**Type:** `Map<string, URL[]>`

**Added in:** `astro@5.0.0`

Contains URLs to output files paths, grouped by [`IntegrationResolvedRoute`](#integrationresolvedroute) `pattern` property.

#### `pages` option

[Section titled “pages option”](#pages-option-1)

**Type:** `{ pathname: string }[]`

A list of all generated pages. Each entry is an object with one property:

- `pathname` - the finalized path of the page.

### Custom hooks

[Section titled “Custom hooks”](#custom-hooks)

Custom hooks can be added to integrations by extending the `IntegrationHooks` interface through [global augmentation](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#global-augmentation).

```ts
declare global {
  namespace Astro {
    export interface IntegrationHook {
      'your:hook': (params: YourHookParameters) => Promise<void>
    }
  }
}
```

Astro reserves the `astro:` prefix for future built-in hooks. Please choose a different prefix when naming your custom hook.
