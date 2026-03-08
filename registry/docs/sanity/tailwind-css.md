# Tailwind CSS

[Tailwind](https://tailwindcss.com/) is a popular styling library beloved by many developers — including some who build custom apps with the Sanity App SDK. This guide demonstrates how to get up and running with Tailwind and the App SDK.

> \[!NOTE]
> This guide was written and tested with [Tailwind 4.1](https://github.com/tailwindlabs/tailwindcss/releases/tag/v4.1.0). We endeavor to keep up, but if you spot any outdated information, please let us know!

## Step 1: Prerequisites

In order to get started, we’ll presume you’ve already got a custom app initialized with the App SDK. If you don’t, [follow along with our quickstart guide](https://www.sanity.io/docs/app-sdk/sdk-quickstart)!

Once your app is initialized, you’ll need to install two Tailwind dependencies — the main [Tailwind library](https://www.npmjs.com/package/tailwindcss), and [Tailwind’s Vite plugin](https://www.npmjs.com/package/@tailwindcss/vite):

**Terminal**

```sh
npm i tailwindcss @tailwindcss/vite
```

## Step 2: Configure Tailwind’s Vite plugin

As you may know, custom apps built with the App SDK are React applications that run on [Vite](https://vite.dev/).

Given that fact, you might be tempted to follow [Tailwind’s installation guide for Vite](https://tailwindcss.com/docs/installation/using-vite), but we require a slightly different setup process to accomodate for the [auto updating](https://www.sanity.io/docs/studio/latest-version-of-sanity) nature of apps built with the SDK.

Thus, rather than setting up your own Vite config that might interfere with the core functionality of custom apps, you’ll need to extend the built in Vite config in order to register Tailwind’s Vite plugin. You can do this within the `sanity.cli.ts` file at the root of your custom app.

Use the example below to update the contents of your `sanity.cli.ts` file and register the Tailwind plugin:

**sanity.cli.ts**

```
import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  app: {
    organizationId: 'your organization ID goes here',
    entry: './src/App.tsx',
  },
  vite: async (viteConfig) => {
    const {default: tailwindcss} = await import('@tailwindcss/vite')
    return {
      ...viteConfig,
      plugins: [
        ...viteConfig.plugins,
        tailwindcss()
      ],
    }
  }
})
```

The Tailwind plugin is now configured for your app! All that’s left to do is to import Tailwind and put it to work.

## Step 3: Import Tailwind’s CSS

Within your app’s `src/App.css` (or any other CSS file you choose to make use of and import within the scope of your application), add an `@import` statement to import Tailwind’s CSS:

**App.css**

```css
@import 'tailwindcss';
/* Other styles here if you like… */
```

Be sure that the CSS file you add this `@import` statement to is itself imported within your application — likely within your `src/App.tsx` file:

**App.tsx**

```
import './App.css'
// Rest of your App.tsx here…
```

## Step 4: Start the development server

Start your custom app’s development server as usual:

**Terminal**

```sh
npm run dev
```

## Step 5: Start using Tailwind in your components

You can now use Tailwind’s CSS classes in any of your app’s React components. For further guidance on using Tailwind, refer to Tailwind’s docs. Have fun!
