Styling your Components

# UnoCSS

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/styling-components/uno.mdx)

[UnoCSS](https://unocss.dev/) is an on-demand utility CSS library that integrates seamlessly with Solid as a Vite plugin.

***

## [Install Vite plugin](/guides/styling-components/uno#install-vite-plugin)

To get started with UnoCSS in your Solid app:

npmpnpmyarnbundeno

```
npm i unocss -D
```

```
pnpm i unocss -D
```

```
yarn add unocss -D
```

```
bun i unocss -d
```

```
deno add npm:unocss -D
```

***

## [Import Vite plugin](/guides/styling-components/uno#import-vite-plugin)

After installation, open your `vite.config.js` or `vite.config.ts`. The default Solid Vite configuration looks like this:

```
import { defineConfig } from "vite";import solidPlugin from "vite-plugin-solid";
export default defineConfig({  plugins: [solidPlugin()],  server: {    port: 3000,  },  build: {    target: "esnext",  },});
```

Now, import `unocssPlugin` from "unocss/vite" and add it to the plugins array:

```
import { defineConfig } from "vite";import unocssPlugin from "unocss/vite";import solidPlugin from "vite-plugin-solid";
export default defineConfig({  plugins: [unocssPlugin(), solidPlugin()],  server: {    port: 3000,  },  build: {    target: "esnext",  },});
```

Ensure that `unocssPlugin` is ordered before `solidPlugin` to prevent certain edge cases.

***

## [Import UnoCSS](/guides/styling-components/uno#import-unocss)

In your root `index.jsx` or `index.tsx` file, import UnoCSS:

```
/* @refresh reload */import "uno.css"import { render } from "solid-js/web"import "./index.css"import App from "./App"
render(() => <App />, document.getElementById('root') as HTMLElement);
```

Alternatively, you can use the alias `import "virtual:uno.css"`:

```
/* @refresh reload */import "virtual:uno.css"import { render } from "solid-js/web"import "./index.css"import App from "./App"
render(() => <App />, document.getElementById('root') as HTMLElement);
```

#### [Support](/guides/styling-components/uno#support)

For additional assistance, refer to the [UnoCSS/Vite integration guide](https://unocss.dev/integrations/vite) .

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/guides/styling-components/uno.mdx\&page=https://docs.solidjs.com/guides/styling-components/uno)

On this page

1. [Overview](#_top)
2. [Install Vite plugin](#install-vite-plugin)
3. [Import Vite plugin](#import-vite-plugin)
4. [Import UnoCSS](#import-unocss)
   1. Support

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/styling-components/uno.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/guides/styling-components/uno.mdx\&page=https://docs.solidjs.com/guides/styling-components/uno)
