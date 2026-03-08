# @astrojs/vue

> Learn how to use the @astrojs/vue framework integration to extend component support in your Astro project.

This **[Astro integration](/en/guides/integrations-guide/)** enables rendering and client-side hydration for your [Vue 3](https://vuejs.org/) components.

## Installation

[Section titled “Installation”](#installation)

Astro includes an `astro add` command to automate the setup of official integrations. If you prefer, you can [install integrations manually](#manual-install) instead.

To install `@astrojs/vue`, run the following from your project directory and follow the prompts:

- npm

  ```sh
  npx astro add vue
  ```

- pnpm

  ```sh
  pnpm astro add vue
  ```

- Yarn

  ```sh
  yarn astro add vue
  ```

If you run into any issues, [feel free to report them to us on GitHub](https://github.com/withastro/astro/issues) and try the manual installation steps below.

### Manual Install

[Section titled “Manual Install”](#manual-install)

First, install the `@astrojs/vue` package:

- npm

  ```sh
  npm install @astrojs/vue
  ```

- pnpm

  ```sh
  pnpm add @astrojs/vue
  ```

- Yarn

  ```sh
  yarn add @astrojs/vue
  ```

Most package managers will install associated peer dependencies as well. If you see a `Cannot find package 'vue'` (or similar) warning when you start up Astro, you’ll need to install Vue:

- npm

  ```sh
  npm install vue
  ```

- pnpm

  ```sh
  pnpm add vue
  ```

- Yarn

  ```sh
  yarn add vue
  ```

Then, apply the integration to your `astro.config.*` file using the `integrations` property:

astro.config.mjs

```diff
import { defineConfig } from 'astro/config';
+import vue from '@astrojs/vue';


export default defineConfig({
  // ...
  integrations: [vue()],
});
```

## Getting started

[Section titled “Getting started”](#getting-started)

To use your first Vue component in Astro, head to our [UI framework documentation](/en/guides/framework-components/#using-framework-components). You’ll explore:

- 📦 how framework components are loaded,
- 💧 client-side hydration options, and
- 🤝 opportunities to mix and nest frameworks together

## Troubleshooting

[Section titled “Troubleshooting”](#troubleshooting)

For help, check out the `#support` channel on [Discord](https://astro.build/chat). Our friendly Support Squad members are here to help!

You can also check our [Astro Integration Documentation](/en/guides/integrations-guide/) for more on integrations.

## Contributing

[Section titled “Contributing”](#contributing)

This package is maintained by Astro’s Core team. You’re welcome to submit an issue or PR!

## Options

[Section titled “Options”](#options)

This integration is powered by `@vitejs/plugin-vue`. To customize the Vue compiler, options can be provided to the integration. See the `@vitejs/plugin-vue` [docs](https://www.npmjs.com/package/@vitejs/plugin-vue) for more details.

astro.config.mjs

```js
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';


export default defineConfig({
  // ...
  integrations: [
    vue({
      template: {
        compilerOptions: {
          // treat any tag that starts with ion- as custom elements
          isCustomElement: (tag) => tag.startsWith('ion-'),
        },
      },
      // ...
    }),
  ],
});
```

### `appEntrypoint`

[Section titled “appEntrypoint”](#appentrypoint)

**Type:** `string`

**Added in:** `@astrojs/vue@1.2.0`

You can extend the Vue `app` instance setting the `appEntrypoint` option to a root-relative import specifier (for example, `appEntrypoint: "/src/pages/_app"`).

The default export of this file should be a function that accepts a Vue `App` instance prior to rendering, allowing the use of [custom Vue plugins](https://vuejs.org/guide/reusability/plugins.html), `app.use`, and other customizations for advanced use cases.

astro.config.mjs

```js
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';


export default defineConfig({
  // ...
  integrations: [vue({ appEntrypoint: '/src/pages/_app' })],
});
```

src/pages/\_app.ts

```ts
import type { App } from 'vue';
import i18nPlugin from 'my-vue-i18n-plugin';


export default (app: App) => {
  app.use(i18nPlugin);
};
```

### `jsx`

[Section titled “jsx”](#jsx)

**Type:** `boolean | object`

**Added in:** `@astrojs/vue@1.2.0`

You can use Vue JSX by setting `jsx: true`.

astro.config.mjs

```js
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';


export default defineConfig({
  // ...
  integrations: [vue({ jsx: true })],
});
```

This will enable rendering for both Vue and Vue JSX components. To customize the Vue JSX compiler, pass an options object instead of a boolean. See the `@vitejs/plugin-vue-jsx` [docs](https://www.npmjs.com/package/@vitejs/plugin-vue-jsx) for more details.

astro.config.mjs

```js
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';


export default defineConfig({
  // ...
  integrations: [
    vue({
      jsx: {
        // treat any tag that starts with ion- as custom elements
        isCustomElement: (tag) => tag.startsWith('ion-'),
      },
    }),
  ],
});
```

### `devtools`

[Section titled “devtools”](#devtools)

**Type:** `boolean | object`

**Added in:** `@astrojs/vue@4.2.0`

You can enable [Vue DevTools](https://devtools-next.vuejs.org/) in development by passing an object with `devtools: true` to your `vue()` integration config:

astro.config.mjs

```js
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';


export default defineConfig({
  // ...
  integrations: [vue({ devtools: true })],
});
```

#### Customizing Vue DevTools

[Section titled “Customizing Vue DevTools”](#customizing-vue-devtools)

**Added in:** `@astrojs/vue@4.3.0`

For more customization, you can instead pass options that the [Vue DevTools Vite Plugin](https://devtools-next.vuejs.org/guide/vite-plugin#options) supports. (Note: `appendTo` is not supported.)

For example, you can set `launchEditor` to your preferred editor if you are not using Visual Studio Code:

astro.config.mjs

```js
import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";


export default defineConfig({
  // ...
  integrations: [
    vue({
      devtools: { launchEditor: "webstorm" },
    }),
  ],
});
```
