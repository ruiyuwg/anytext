# React 19 and Sanity

Support for [React 19](https://react.dev/blog/2024/04/25/react-19) in Sanity Studio and most official plugins are completed. Active development of Sanity Studio itself is tested and deployed on React 19. Support in the wider ecosystem is being worked on. Progress can be tracked on [this page](https://arewereact19yet.sanity.build/). Most internal projects at Sanity are also deployed to React 19 in production.

## When is it safe to use React 19 in production?

It depends on the plugins you use. Our release strategy is to:

1. Update upstream libraries that Sanity Studio depends on with React 19 support (`@sanity/ui`, `react-rx`, and others).
2. Release a new version of Sanity Studio that adds React 19 to its `peerDependencies` and [passes the build test](https://arewereact19yet.sanity.build/package/sanity).
3. Release new versions of official plugins that adds React 19 to its `peerDependencies.`
4. Update `@sanity/plugin-kit` with support for React 19, and provide docs for plugin authors for how to test, verify and release a new version.
5. Help third party plugin authors with upgrading their plugins to add React 19.

Step 1 and 2 is done, it means it's generally safe to use React 19 in production, and if a library is marked as passing [on the tracker](https://arewereact19yet.sanity.build/) it means we've manually verified it works. Step 3 is in progress.

## How can I prepare for React 19 today?

Make sure you’ve upgraded to **React 18.3** or later, and that you don’t have any deprecation warnings logged to your console when running `sanity dev` .

Also ensure you have `reactStrictMode` [enabled](https://www.sanity.io/docs/cli-reference/cli-config) and don’t have strict mode related warnings either.

## How can I test React 19?

Depending on your package manager you may get peer dependency errors or warnings that prevent you from being able to test 19. Here’s how you can configure your package manager to let you test 19 today:

### npm

Version v10 is recommended.

Start by adding these overrides to your `package.json` :

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "sanity": "^3.43.0",
  },
  "packageManager": "npm@10.5.2",
  "overrides": {
    "react": "$react",
    "react-dom": "$react-dom"
  }
}

```

Run `npm install` and you shouldn’t see any errors. Next, upgrade `react` and `react-dom` :

```sh
npm i react@latest react-dom@latest --save-exact

```

### pnpm

Version v9 is recommended.

Start by adding an `overrides` field that ensures you don't get both v18 and v19 of react installed:

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "sanity": "^3.43.0",
  },
  "packageManager": "pnpm@9.0.4",
  "pnpm": {
    "pnpm": {
      "peerDependencyRules": {
        "allowAny": [
          "react",
          "react-dom"
        ]
      }
    }
  }
}

```

Then run:

```sh
pnpm up react@latest react-dom@latest

```

### Bun

v1 or later is recommended.

```sh
bun add react@latest react-dom@latest

```

### Yarn

v1 is recommended.

```sh
yarn add react@latest react-dom@latest

```
