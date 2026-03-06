# reactCompiler

Next.js includes support for the [React Compiler](https://react.dev/learn/react-compiler/introduction), a tool designed to improve performance by automatically optimizing component rendering. This reduces the need for manual memoization using `useMemo` and `useCallback`.

Next.js includes a custom performance optimization written in SWC that makes the React Compiler more efficient. Instead of running the compiler on every file, Next.js analyzes your project and only applies the React Compiler to relevant files. This avoids unnecessary work and leads to faster builds compared to using the Babel plugin on its own.

## How It Works

The React Compiler runs through a Babel plugin. To keep builds fast, Next.js uses a custom SWC optimization that only applies the React Compiler to relevant files—like those with JSX or React Hooks.

This avoids compiling everything and keeps the performance cost minimal. You may still see slightly slower builds compared to the default Rust-based compiler, but the impact is small and localized.

To use it, install the `babel-plugin-react-compiler`:

```bash package="pnpm"
pnpm add -D babel-plugin-react-compiler
```

```bash package="npm"
npm install -D babel-plugin-react-compiler
```

```bash package="yarn"
yarn add -D babel-plugin-react-compiler
```

```bash package="bun"
bun add -D babel-plugin-react-compiler
```

Then, add `reactCompiler` option in `next.config.js`:

```ts filename="next.config.ts" switcher
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactCompiler: true,
}

export default nextConfig
```

```js filename="next.config.js" switcher
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
}

module.exports = nextConfig
```

## Annotations

You can configure the compiler to run in "opt-in" mode as follows:

```ts filename="next.config.ts" switcher
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactCompiler: {
    compilationMode: 'annotation',
  },
}

export default nextConfig
```

```js filename="next.config.js" switcher
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: {
    compilationMode: 'annotation',
  },
}

module.exports = nextConfig
```

Then, you can annotate specific components or hooks with the `"use memo"` directive from React to opt-in:

```ts filename="app/page.tsx" switcher
export default function Page() {
  'use memo'
  // ...
}
```

```js filename="app/page.js" switcher
export default function Page() {
  'use memo'
  // ...
}
```

> **Note:** You can also use the `"use no memo"` directive from React for the opposite effect, to opt-out a component or hook.

# reactMaxHeadersLength

# reactMaxHeadersLength

During static rendering, React can emit headers that can be added to the response. These can be used to improve performance by allowing the browser to preload resources like fonts, scripts, and stylesheets. The default value is `6000`, but you can override this value by configuring the `reactMaxHeadersLength` option in `next.config.js`:

```js filename="next.config.js"
module.exports = {
  reactMaxHeadersLength: 1000,
}
```

> **Good to know**: This option is only available in App Router.

Depending on the type of proxy between the browser and the server, the headers can be truncated. For example, if you are using a reverse proxy that doesn't support long headers, you should set a lower value to ensure that the headers are not truncated.

# reactStrictMode

# reactStrictMode

> **Good to know**: Since Next.js 13.5.1, Strict Mode is `true` by default with `app` router, so the above configuration is only necessary for `pages`. You can still disable Strict Mode by setting `reactStrictMode: false`.

> **Suggested**: We strongly suggest you enable Strict Mode in your Next.js application to better prepare your application for the future of React.

React's [Strict Mode](https://react.dev/reference/react/StrictMode) is a development mode only feature for highlighting potential problems in an application. It helps to identify unsafe lifecycles, legacy API usage, and a number of other features.

The Next.js runtime is Strict Mode-compliant. To opt-in to Strict Mode, configure the following option in your `next.config.js`:

```js filename="next.config.js"
module.exports = {
  reactStrictMode: true,
}
```

If you or your team are not ready to use Strict Mode in your entire application, that's OK! You can incrementally migrate on a page-by-page basis using `<React.StrictMode>`.

# redirects
