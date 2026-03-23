### `astro:build:done`

[Section titled “astro:build:done”](#astrobuilddone)

**Previous hook:** [`astro:build:generated`](#astrobuildgenerated)

**When:** After a production build (SSG or SSR) has completed.

**Why:** To access generated routes and assets for extension (ex. copy content into the generated `/assets` directory). If you plan to transform generated assets, we recommend exploring the [Vite Plugin API](https://vite.dev/guide/api-plugin.html) and [configuring via `astro:config:setup`](#updateconfig-option) instead.

```js
'astro:build:done'?: (options: {
  pages: { pathname: string }[];
  dir: URL;
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

## Astro vite environments

[Section titled “Astro vite environments”](#astro-vite-environments)

Astro inherits the environments Vite provides by default, `ssr` and `client`.

Additionally there are two other environments that Astro creates:

- `prerender` is an environment used during the `build` and it’s used to build static pages.
- `astro` is an environment used during the development, and it’s used as a “secondary” SSR environment when the Vite `ssr` environment [isn’t a runnable dev environment](https://vite.dev/guide/api-environment-frameworks#runnabledevenvironment).

Astro’s [Vite environments](https://vite.dev/guide/api-environment) allow you to optimize your integration’s Vite plugins for different environments. One of the main uses of Vite environments is the ability to run and configure your integration’s Vite plugins conditionally:

```js
resolveId(id) {
  if (id === '\0virtual:foo') {
    if (this.environment.name === 'client') {
      throw new Error('This is a server-only module');
    }
    return 'export const foo = "bar"';
  }
}
```
