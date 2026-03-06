# Tailwind CSS

This guide will walk you through how to install [Tailwind CSS v3](https://v3.tailwindcss.com/) in your Next.js application.

> **Good to know:** For the latest Tailwind 4 setup, see the [Tailwind CSS setup instructions](/docs/app/getting-started/css#tailwind-css).

## Installing Tailwind v3

Install Tailwind CSS and its peer dependencies, then run the `init` command to generate both `tailwind.config.js` and `postcss.config.js` files:

```bash package="pnpm"
pnpm add -D tailwindcss@^3 postcss autoprefixer
npx tailwindcss init -p
```

```bash package="npm"
npm install -D tailwindcss@^3 postcss autoprefixer
npx tailwindcss init -p
```

```bash package="yarn"
yarn add -D tailwindcss@^3 postcss autoprefixer
npx tailwindcss init -p
```

```bash package="bun"
bun add -D tailwindcss@^3 postcss autoprefixer
bunx tailwindcss init -p
```

## Configuring Tailwind v3

Configure your template paths in your `tailwind.config.js` file:

```js filename="tailwind.config.js"
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add the Tailwind directives to your global CSS file:

```css filename="styles/globals.css"
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Import the CSS file in your `pages/_app.js` file:

```jsx filename="pages/_app.js"
import '@/styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
```

## Using classes

After installing Tailwind CSS and adding the global styles, you can use Tailwind's utility classes in your application.

```tsx filename="pages/index.tsx" switcher
export default function Page() {
  return <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
}
```

```jsx filename="pages/index.js" switcher
export default function Page() {
  return <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
}
```

## Usage with Turbopack

As of Next.js 13.1, Tailwind CSS and PostCSS are supported with [Turbopack](https://turbo.build/pack/docs/features/css#tailwind-css).

# Testing

# Testing

In React and Next.js, there are a few different types of tests you can write, each with its own purpose and use cases. This page provides an overview of types and commonly used tools you can use to test your application.

## Types of tests

- **Unit Testing** involves testing individual units (or blocks of code) in isolation. In React, a unit can be a single function, hook, or component.
- **Component Testing** is a more focused version of unit testing where the primary subject of the tests is React components. This may involve testing how components are rendered, their interaction with props, and their behavior in response to user events.
- **Integration Testing** involves testing how multiple units work together. This can be a combination of components, hooks, and functions.
- **End-to-End (E2E) Testing** involves testing user flows in an environment that simulates real user scenarios, like the browser. This means testing specific tasks (e.g. signup flow) in a production-like environment.
- **Snapshot Testing** involves capturing the rendered output of a component and saving it to a snapshot file. When tests run, the current rendered output of the component is compared against the saved snapshot. Changes in the snapshot are used to indicate unexpected changes in behavior.

## Guides

See the guides below to learn how to set up Next.js with these commonly used testing tools:

- [Cypress](/docs/pages/guides/testing/cypress)
- [Jest](/docs/pages/guides/testing/jest)
- [Playwright](/docs/pages/guides/testing/playwright)
- [Vitest](/docs/pages/guides/testing/vitest)

# Cypress
