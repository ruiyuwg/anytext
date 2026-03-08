Styling your Components

# Macaron

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/styling-components/macaron.mdx)

[Macaron](https://macaron.js.org/) is compile-time CSS-in-JS library that offers type safety.

***

## [Installation](/guides/styling-components/macaron#installation)

1. Install and set up the macaron plugin for your bundler:

npmpnpmyarnbundeno

```
npm i @macaron-css/core @macaron-css/solid
```

```
pnpm i @macaron-css/core @macaron-css/solid
```

```
yarn add @macaron-css/core @macaron-css/solid
```

```
bun i @macaron-css/core @macaron-css/solid
```

```
deno add npm:@macaron-css/core @macaron-css/solid
```

2. Within your `vite.config.js` folder, add the macaron plugin prior to other plugins:

```
import { macaronVitePlugin } from "@macaron-css/vite";import { defineConfig } from "vite";
export default defineConfig({  plugins: [    macaronVitePlugin(),    // other plugins  ],});
```

***

## [Usage](/guides/styling-components/macaron#usage)

1. Import `styled` from `@macaron-css/solid` and create a styled component:

```
// button.tsximport { styled } from "@macaron-css/solid";
const Button = styled("button", {});
```

2. Add styles that will be applied to the components by default:

```
import { styled } from "@macaron-css/solid";
const Button = styled("button", {  base: {    backgroundColor: "red",    borderRadius: "10px",  },});
```

Variants can be added using the `variants` key:

```
import { styled } from "@macaron-css/solid";
const Button = styled("button", {  base: {    backgroundColor: "red",    borderRadius: "10px",  },  variants: {    color: {      violet: {        backgroundColor: "violet",      },      gray: {        backgroundColor: "gray",      },    },  },});
```

Additionally, the `defaultVariants` feature is set to `variants` by default. This can be overridden at the time of usage:

```
import { styled } from "@macaron-css/solid";
const Button = styled("button", {  base: {    backgroundColor: "red",    borderRadius: "10px",  },  variants: {    color: {      violet: {        backgroundColor: "violet",      },      gray: {        backgroundColor: "gray",      },    },  },  defaultVariants: {    color: "blue",  },});
```

These components can be used like any other Solid component, with type-safe props derived from your variants. For more information on how to use macaron, visit their [documentation](https://macaron.js.org/docs/installation/).

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/guides/styling-components/macaron.mdx\&page=https://docs.solidjs.com/guides/styling-components/macaron)

On this page

1. [Overview](#_top)
2. [Installation](#installation)
3. [Usage](#usage)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/styling-components/macaron.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/guides/styling-components/macaron.mdx\&page=https://docs.solidjs.com/guides/styling-components/macaron)
