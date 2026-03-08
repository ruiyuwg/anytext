# @astrojs/solid-js

> Learn how to use the @astrojs/solid-js framework integration to extend component support in your Astro project.

This **[Astro integration](/en/guides/integrations-guide/)** enables rendering and client-side hydration for your [SolidJS](https://www.solidjs.com/) components.

## Installation

[Section titled “Installation”](#installation)

Astro includes an `astro add` command to automate the setup of official integrations. If you prefer, you can [install integrations manually](#manual-install) instead.

To install `@astrojs/solid-js`, run the following from your project directory and follow the prompts:

- npm

  ```sh
  npx astro add solid
  ```

- pnpm

  ```sh
  pnpm astro add solid
  ```

- Yarn

  ```sh
  yarn astro add solid
  ```

If you run into any issues, [feel free to report them to us on GitHub](https://github.com/withastro/astro/issues) and try the manual installation steps below.

### Manual Install

[Section titled “Manual Install”](#manual-install)

First, install the `@astrojs/solid-js` package:

- npm

  ```sh
  npm install @astrojs/solid-js
  ```

- pnpm

  ```sh
  pnpm add @astrojs/solid-js
  ```

- Yarn

  ```sh
  yarn add @astrojs/solid-js
  ```

Most package managers will install associated peer dependencies as well. If you see a `Cannot find package 'solid-js'` (or similar) warning when you start up Astro, you’ll need to install SolidJS:

- npm

  ```sh
  npm install solid-js
  ```

- pnpm

  ```sh
  pnpm add solid-js
  ```

- Yarn

  ```sh
  yarn add solid-js
  ```

Then, apply the integration to your `astro.config.*` file using the `integrations` property:

astro.config.mjs

```diff
import { defineConfig } from 'astro/config';
+import solidJs from '@astrojs/solid-js';


export default defineConfig({
  // ...
  integrations: [solidJs()],
});
```

And add the following code to the `tsconfig.json` file.

tsconfig.json

```diff
{
  "extends": "astro/tsconfigs/strict",
  "include": [".astro/types.d.ts", "**/*"],
  "exclude": ["dist"],
  +"compilerOptions": {
    +"jsx": "preserve",
    +"jsxImportSource": "solid-js"
+  }
}
```

## Getting started

[Section titled “Getting started”](#getting-started)

To use your first SolidJS component in Astro, head to our [UI framework documentation](/en/guides/framework-components/#using-framework-components). You’ll explore:

- 📦 how framework components are loaded,
- 💧 client-side hydration options, and
- 🤝 opportunities to mix and nest frameworks together

## Configuration

[Section titled “Configuration”](#configuration)

### `devtools`

[Section titled “devtools”](#devtools)

**Type:** `boolean`

**Added in:** `@astrojs/solid-js@4.2.0`

You can enable [Solid DevTools](https://github.com/thetarnav/solid-devtools) in development by passing an object with `devtools: true` to your `solid()` integration config and adding `solid-devtools` to your project dependencies:

- npm

  ```sh
  npm install solid-devtools
  ```

- pnpm

  ```sh
  pnpm add solid-devtools
  ```

- Yarn

  ```sh
  yarn add solid-devtools
  ```

astro.config.mjs

```js
import { defineConfig } from 'astro/config';
import solid from '@astrojs/solid-js';


export default defineConfig({
  // ...
  integrations: [solid({ devtools: true })],
});
```

## Options

[Section titled “Options”](#options)

### Combining multiple JSX frameworks

[Section titled “Combining multiple JSX frameworks”](#combining-multiple-jsx-frameworks)

When you are using multiple JSX frameworks (React, Preact, Solid) in the same project, Astro needs to determine which JSX framework-specific transformations should be used for each of your components. If you have only added one JSX framework integration to your project, no extra configuration is needed.

Use the `include` (required) and `exclude` (optional) configuration options to specify which files belong to which framework. Provide an array of files and/or folders to `include` for each framework you are using. Wildcards may be used to include multiple file paths.

We recommend placing common framework components in the same folder (e.g. `/components/react/` and `/components/solid/`) to make specifying your includes easier, but this is not required:

astro.config.mjs

```js
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';
import vue from '@astrojs/vue';
import solid from '@astrojs/solid-js';


export default defineConfig({
  // Enable many frameworks to support all different kinds of components.
  // No `include` is needed if you are only using a single JSX framework!
  integrations: [
    preact({
      include: ['**/preact/*'],
    }),
    react({
      include: ['**/react/*'],
    }),
    solid({
      include: ['**/solid/*', '**/node_modules/@suid/material/**'],
    }),
  ],
});
```

## Usage

[Section titled “Usage”](#usage)

Use a SolidJS component as you would any [UI framework component](/en/guides/framework-components/).

### Suspense Boundaries

[Section titled “Suspense Boundaries”](#suspense-boundaries)

In order to support Solid Resources and Lazy Components without excessive configuration, server-only and hydrating components are automatically wrapped in top-level Suspense boundaries and rendered on the server using the [`renderToStringAsync`](https://www.solidjs.com/docs/latest/api#rendertostringasync) function. Therefore, you do not need to add a top-level Suspense boundary around async components.

For example, you can use Solid’s [`createResource`](https://www.solidjs.com/docs/latest/api#createresource) to fetch async remote data on the server. The remote data will be included in the initial server-rendered HTML from Astro:

CharacterName.tsx

```tsx
function CharacterName() {
  const [name] = createResource(() =>
    fetch('https://swapi.dev/api/people/1')
      .then((result) => result.json())
      .then((data) => data.name)
  );


  return (
    <>
      <h2>Name:</h2>
      {/* Luke Skywalker */}
      <div>{name()}</div>
    </>
  );
}
```

Similarly, Solid’s [Lazy Components](https://www.solidjs.com/docs/latest/api#lazy) will also be resolved and their HTML will be included in the initial server-rendered page.

Non-hydrating [`client:only` components](/en/reference/directives-reference/#clientonly) are not automatically wrapped in Suspense boundaries.

Feel free to add additional Suspense boundaries according to your preference.
