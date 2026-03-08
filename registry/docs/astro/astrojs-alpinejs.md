# @astrojs/alpinejs

> Learn how to use the @astrojs/alpinejs framework integration to extend component support in your Astro project.

This **[Astro integration](/en/guides/integrations-guide/)** adds [Alpine.js](https://alpinejs.dev/) to your project so that you can use Alpine.js anywhere on your page.

## Installation

[Section titled “Installation”](#installation)

Astro includes an `astro add` command to automate the setup of official integrations. If you prefer, you can [install integrations manually](#manual-install) instead.

To install `@astrojs/alpinejs`, run the following from your project directory and follow the prompts:

- npm

  ```sh
  npx astro add alpinejs
  ```

- pnpm

  ```sh
  pnpm astro add alpinejs
  ```

- Yarn

  ```sh
  yarn astro add alpinejs
  ```

If you run into any issues, [feel free to report them to us on GitHub](https://github.com/withastro/astro/issues) and try the manual installation steps below.

### Manual Install

[Section titled “Manual Install”](#manual-install)

First, install the `@astrojs/alpinejs` package.

- npm

  ```sh
  npm install @astrojs/alpinejs
  ```

- pnpm

  ```sh
  pnpm add @astrojs/alpinejs
  ```

- Yarn

  ```sh
  yarn add @astrojs/alpinejs
  ```

Most package managers will install associated peer dependencies as well. However, if you see a `Cannot find package 'alpinejs'` (or similar) warning when you start up Astro, you’ll need to manually install Alpine.js yourself:

- npm

  ```sh
  npm install alpinejs @types/alpinejs
  ```

- pnpm

  ```sh
  pnpm add alpinejs @types/alpinejs
  ```

- Yarn

  ```sh
  yarn add alpinejs @types/alpinejs
  ```

Then, apply the integration to your `astro.config.*` file using the `integrations` property:

astro.config.mjs

```diff
import { defineConfig } from 'astro/config';
+import alpinejs from '@astrojs/alpinejs';


export default defineConfig({
  // ...
  integrations: [alpinejs()],
});
```

## Configuration Options

[Section titled “Configuration Options”](#configuration-options)

### `entrypoint`

[Section titled “entrypoint”](#entrypoint)

**Type:** `string`

**Added in:** `@astrojs/alpinejs@0.4.0` New

You can extend Alpine by setting the `entrypoint` option to a root-relative import specifier (e.g. `entrypoint: "/src/entrypoint"`).

The default export of this file should be a function that accepts an Alpine instance prior to starting. This allows the use of custom directives, plugins and other customizations for advanced use cases.

astro.config.mjs

```js
import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';


export default defineConfig({
  // ...
  integrations: [alpinejs({ entrypoint: '/src/entrypoint' })],
});
```

src/entrypoint.ts

```js
import type { Alpine } from 'alpinejs'
import intersect from '@alpinejs/intersect'


export default (Alpine: Alpine) => {
    Alpine.plugin(intersect)
}
```

## Usage

[Section titled “Usage”](#usage)

Once the integration is installed, you can use [Alpine.js](https://alpinejs.dev/) directives and syntax inside any Astro component. The Alpine.js script is automatically added and enabled on every page of your website so no client directives are needed. Add plugin scripts to the page `<head>`.

The following example adds [Alpine’s Collapse plugin](https://alpinejs.dev/plugins/collapse) to expand and collapse paragraph text:

src/pages/index.astro

```diff
---
---
<html>
  <head>
    <!-- ... -->
    <script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/collapse@3.x.x/dist/cdn.min.js"></script>
  </head>
  <body>
    <!-- ... -->
    <div x-data="{ expanded: false }">
      <button @click="expanded = ! expanded">Toggle Content</button>


      <p id="foo" x-show="expanded" x-collapse>
        Lorem ipsum
      </p>
    </div>
  </body>
</html>
```

## Intellisense for TypeScript

[Section titled “Intellisense for TypeScript”](#intellisense-for-typescript)

The `@astrojs/alpine` integration adds `Alpine` to [the global window object](/en/guides/typescript/#window-and-globalthis). For IDE autocompletion, add the following to your `src/env.d.ts`:

src/env.d.ts

```ts
interface Window {
  Alpine: import('alpinejs').Alpine;
}
```

## Examples

[Section titled “Examples”](#examples)

- The [Astro Alpine.js example](https://github.com/withastro/astro/tree/main/examples/framework-alpine) shows how to use Alpine.js in an Astro project.
