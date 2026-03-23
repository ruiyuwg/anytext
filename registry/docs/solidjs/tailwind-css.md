Styling your Components

# Tailwind CSS

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/styling-components/tailwind.mdx)

note

This guide is for Tailwind CSS v4. For **Tailwind CSS v3** refer to [Tailwind CSS v3](/guides/styling-components/tailwind-v3).

[Tailwind CSS](https://tailwindcss.com/) is an on-demand utility CSS library that integrates seamlessly with Solid as a built-in PostCSS plugin.

***

## [Installation](/guides/styling-components/tailwind#installation)

1. Install Tailwind CSS as a development dependency:

npmpnpmyarnbundeno

```
npm i tailwindcss @tailwindcss/postcss postcss -D
```

```
pnpm i tailwindcss @tailwindcss/postcss postcss -D
```

```
yarn add tailwindcss @tailwindcss/postcss postcss -D
```

```
bun i tailwindcss @tailwindcss/postcss postcss -d
```

```
deno add npm:tailwindcss @tailwindcss/postcss postcss -D
```

2. Add `@tailwind/postcss` to the `plugins` in your PostCSS configuration. If you do not have a PostCSS configuration file, create a new one called `postcss.config.mjs`.

```
export default {  plugins: {    "@tailwindcss/postcss": {},  },};
```

For a deeper dive into configuration, you can check out the [Tailwind Official Documentation](https://tailwindcss.com/docs/configuration).

***

## [Import Tailwind CSS](/guides/styling-components/tailwind#import-tailwind-css)

Add an `@import` to your `src/index.css` file that imports Tailwind CSS.

```
@import "tailwindcss";
```

***

## [Import your CSS file](/guides/styling-components/tailwind#import-your-css-file)

Import your `index.css` file into the root `index.jsx` or `index.tsx` file:

```
import { render } from "solid-js/web"import App from "./App"import "./index.css"
render(() => <App />, document.getElementById('root') as HTMLElement);
```

***

## [Usage](/guides/styling-components/tailwind#usage)

With Tailwind CSS set up, you can now utilize its utility classes. For instance, if you previously had a `Card.css` file, you can replace or remove it:

```
/* src/components/Card.css *//* Remove or replace these styles with Tailwind utility classes */
```

Update your components to use Tailwind's utility classes:

```
/* src/components/Card.jsx */function Card() {  return (    <div class="grid min-h-screen place-items-center">      <div class="aspect aspect-[2] h-[160px] rounded-[16px] shadow-[0_0_0_4px_hsl(0_0%_0%_/_15%)]">        Hello, world!      </div>    </div>  );}
```

***

## [Support](/guides/styling-components/tailwind#support)

For additional assistance, refer to the [Tailwind CSS/Vite integration guide](https://tailwindcss.com/docs/guides/vite).

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/guides/styling-components/tailwind.mdx\&page=https://docs.solidjs.com/guides/styling-components/tailwind)

On this page

1. [Overview](#_top)
2. [Installation](#installation)
3. [Import Tailwind CSS](#import-tailwind-css)
4. [Import your CSS file](#import-your-css-file)
5. [Usage](#usage)
6. [Support](#support)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/guides/styling-components/tailwind.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/guides/styling-components/tailwind.mdx\&page=https://docs.solidjs.com/guides/styling-components/tailwind)
