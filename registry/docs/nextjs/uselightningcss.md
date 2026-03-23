# useLightningcss

> This feature is currently experimental and subject to change, it is not recommended for production.

Experimental support for using [Lightning CSS](https://lightningcss.dev) with webpack. Lightning CSS is a fast CSS transformer and minifier, written in Rust.

If this option is not set, Next.js on webpack uses [PostCSS](https://postcss.org/) with [`postcss-preset-env`](https://www.npmjs.com/package/postcss-preset-env) by default.

Turbopack uses Lightning CSS by default since Next 14.2. This configuration option has no effect on Turbopack. Turbopack always uses Lightning CSS.

```ts filename="next.config.ts" switcher
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    useLightningcss: false, // default, ignored on Turbopack
  },
}

export default nextConfig
```

```js filename="next.config.js" switcher
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    useLightningcss: true, // disables PostCSS on webpack
  },
}

module.exports = nextConfig
```

## `lightningCssFeatures`

By default, Lightning CSS decides which CSS features to transpile based on your [browserslist](https://browsersl.ist/) targets. The `lightningCssFeatures` option lets you override this by forcing specific features to always be transpiled (`include`) or never be transpiled (`exclude`), regardless of browser support.

This applies to both webpack (when `useLightningcss` is enabled) and Turbopack.

```ts filename="next.config.ts" switcher
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    useLightningcss: true,
    lightningCssFeatures: {
      // Always transpile these features, even if targets support them
      include: ['light-dark', 'oklab-colors'],
      // Never transpile these features, even if targets don't support them
      exclude: ['nesting'],
    },
  },
}

export default nextConfig
```

```js filename="next.config.js" switcher
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    useLightningcss: true,
    lightningCssFeatures: {
      // Always transpile these features, even if targets support them
      include: ['light-dark', 'oklab-colors'],
      // Never transpile these features, even if targets don't support them
      exclude: ['nesting'],
    },
  },
}

module.exports = nextConfig
```

### Options

| Option    | Type       | Description                                                                |
| --------- | ---------- | -------------------------------------------------------------------------- |
| `include` | `string[]` | Features to always transpile, regardless of browser targets.               |
| `exclude` | `string[]` | Features to never transpile, even when browser targets would require them. |

### Available features

Individual features:

| Feature name                        | Description                                          |
| ----------------------------------- | ---------------------------------------------------- |
| `nesting`                           | [CSS Nesting](https://drafts.csswg.org/css-nesting/) |
| `not-selector-list`                 | `:not` with multiple selectors                       |
| `dir-selector`                      | `:dir()` selector                                    |
| `lang-selector-list`                | `:lang()` with multiple languages                    |
| `is-selector`                       | `:is()` selector                                     |
| `text-decoration-thickness-percent` | Percentage values in `text-decoration-thickness`     |
| `media-interval-syntax`             | Media query range interval syntax                    |
| `media-range-syntax`                | Media query range syntax (`width >= 600px`)          |
| `custom-media-queries`              | `@custom-media` rules                                |
| `clamp-function`                    | `clamp()` function                                   |
| `color-function`                    | `color()` function                                   |
| `oklab-colors`                      | `oklab()` and `oklch()` colors                       |
| `lab-colors`                        | `lab()` and `lch()` colors                           |
| `p3-colors`                         | Display P3 colors                                    |
| `hex-alpha-colors`                  | 4 and 8 digit hex colors with alpha                  |
| `space-separated-color-notation`    | Space-separated color notation (`rgb(0 0 0)`)        |
| `font-family-system-ui`             | `system-ui` font family                              |
| `double-position-gradients`         | Double-position gradient stops                       |
| `vendor-prefixes`                   | Vendor-prefixed properties and values                |
| `logical-properties`                | Logical properties and values                        |
| `light-dark`                        | `light-dark()` color function                        |

Composite groups (shorthand for enabling multiple features at once):

| Group name      | Includes                                                                                                                        |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `selectors`     | `nesting`, `not-selector-list`, `dir-selector`, `lang-selector-list`, `is-selector`                                             |
| `media-queries` | `media-interval-syntax`, `media-range-syntax`, `custom-media-queries`                                                           |
| `colors`        | `color-function`, `oklab-colors`, `lab-colors`, `p3-colors`, `hex-alpha-colors`, `space-separated-color-notation`, `light-dark` |

## Version History

| Version  | Changes                                                                                                                                                                                      |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `16.2.0` | `lightningCssFeatures` added.                                                                                                                                                                |
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
}

module.exports = nextConfig
```

> Important Notice: The `<ViewTransition>` Component is already available in React's Canary release channel.
> `experimental.viewTransition` is only required to enable deeper integration with Next.js features e.g. automatically
> [adding Transition types](https://react.dev/reference/react/addTransitionType) for navigations. Next.js specific transition types are not implemented yet.

## Usage

You can import the [`<ViewTransition>` Component](https://react.dev/reference/react/ViewTransition) from React in your application:

```jsx
import { ViewTransition } from 'react'
```

### Live Demo

Check out our [Next.js View Transition Demo](https://view-transition-example.vercel.app) to see this feature in action.

As this API evolves, we will update our documentation and share more examples. However, for now, we strongly advise against using this feature in production.

# webpack
