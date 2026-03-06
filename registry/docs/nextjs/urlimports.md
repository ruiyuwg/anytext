# urlImports

> This feature is currently experimental and subject to change, it is not recommended for production.

URL imports are an experimental feature that allows you to import modules directly from external servers (instead of from the local disk).

> **Warning**: Only use domains that you trust to download and execute on your machine. Please exercise discretion, and caution until the feature is flagged as stable.

To opt-in, add the allowed URL prefixes inside `next.config.js`:

```js filename="next.config.js"
module.exports = {
  experimental: {
    urlImports: ["https://example.com/assets/", "https://cdn.skypack.dev"],
  },
};
```

Then, you can import modules directly from URLs:

```js
import { a, b, c } from "https://example.com/assets/some/module.js";
```

URL Imports can be used everywhere normal package imports can be used.

## Security Model

This feature is being designed with **security as the top priority**. To start, we added an experimental flag forcing you to explicitly allow the domains you accept URL imports from. We're working to take this further by limiting URL imports to execute in the browser sandbox using the [Edge Runtime](/docs/app/api-reference/edge).

## Lockfile

When using URL imports, Next.js will create a `next.lock` directory containing a lockfile and fetched assets.
This directory **must be committed to Git**, not ignored by `.gitignore`.

- When running `next dev`, Next.js will download and add all newly discovered URL Imports to your lockfile.
- When running `next build`, Next.js will use only the lockfile to build the application for production.

Typically, no network requests are needed and any outdated lockfile will cause the build to fail.
One exception is resources that respond with `Cache-Control: no-cache`.
These resources will have a `no-cache` entry in the lockfile and will always be fetched from the network on each build.

## Examples

### Skypack

```js
import confetti from "https://cdn.skypack.dev/canvas-confetti";
import { useEffect } from "react";

export default () => {
  useEffect(() => {
    confetti();
  });
  return <p>Hello</p>;
};
```

### Static Image Imports

```js
import Image from "next/image";
import logo from "https://example.com/assets/logo.png";

export default () => (
  <div>
    <Image src={logo} placeholder="blur" />
  </div>
);
```

### URLs in CSS

```css
.className {
  background: url("https://example.com/assets/hero.jpg");
}
```

### Asset Imports

```js
const logo = new URL("https://example.com/assets/file.txt", import.meta.url);

console.log(logo.pathname);

// prints "/_next/static/media/file.a9727b5d.txt"
```

# useLightningcss

# useLightningcss

> This feature is currently experimental and subject to change, it is not recommended for production.

Experimental support for using [Lightning CSS](https://lightningcss.dev) with webpack. Lightning CSS is a fast CSS transformer and minifier, written in Rust.

If this option is not set, Next.js on webpack uses [PostCSS](https://postcss.org/) with [`postcss-preset-env`](https://www.npmjs.com/package/postcss-preset-env) by default.

Turbopack uses Lightning CSS by default since Next 14.2. This configuration option has no effect on Turbopack. Turbopack always uses Lightning CSS.

```ts filename="next.config.ts" switcher
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    useLightningcss: false, // default, ignored on Turbopack
  },
};

export default nextConfig;
```

```js filename="next.config.js" switcher
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    useLightningcss: true, // disables PostCSS on webpack
  },
};

module.exports = nextConfig;
```

## Version History

| Version  | Changes                                                                                                                                                                                      |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `15.1.0` | Support for `useSwcCss` was removed from Turbopack.                                                                                                                                          |
| `14.2.0` | Turbopack's default CSS processor was changed from `@swc/css` to Lightning CSS. `useLightningcss` became ignored on Turbopack, and a legacy `experimental.turbo.useSwcCss` option was added. |

# viewTransition

# viewTransition

> This feature is currently experimental and subject to change, it is not recommended for production.

`viewTransition` is an experimental flag that enables the new [View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API) in React. This API allows you to leverage the native View Transitions browser API to create seamless transitions between UI states.

To enable this feature, you need to set the `viewTransition` property to `true` in your `next.config.js` file.

```js filename="next.config.js"
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    viewTransition: true,
  },
};

module.exports = nextConfig;
```

> Important Notice: The `<ViewTransition>` Component is already available in React's Canary release channel.
> `experimental.viewTransition` is only required to enable deeper integration with Next.js features e.g. automatically
> [adding Transition types](https://react.dev/reference/react/addTransitionType) for navigations. Next.js specific transition types are not implemented yet.

## Usage

You can import the [`<ViewTransition>` Component](https://react.dev/reference/react/ViewTransition) from React in your application:

```jsx
import { ViewTransition } from "react";
```

### Live Demo

Check out our [Next.js View Transition Demo](https://view-transition-example.vercel.app) to see this feature in action.

As this API evolves, we will update our documentation and share more examples. However, for now, we strongly advise against using this feature in production.

# webpack
