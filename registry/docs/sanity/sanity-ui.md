# Sanity UI

The Sanity App SDK gives you complete freedom to craft your application’s design. Whether your preferred styling solution is [Sanity UI](https://www.sanity.io/ui), [Tailwind](https://www.sanity.io/docs/app-sdk/tailwind-sdk), vanilla CSS, or something else entirely, the SDK‘s headless approach allows you to style your app with the tools your team knows best, while benefiting from powerful React hooks that unlock Sanity platform capabilities.

## Use Sanity UI in a new app

If you know you’d like to use Sanity UI as your component library of choice when creating your custom app, you can choose to initialize your app with our Sanity UI template, which implements the work shown above for you.

Just initialize your app using the `app-sanity-ui` template instead of the usual `app-quickstart` template:

**Terminal**

```sh
npx sanity@latest init --template app-sanity-ui
```

## Add Sanity UI to an existing app

First, begin by installing Sanity UI:

**Terminal**

```sh
npm install @sanity/ui styled-components
```

Then, in your custom application’s `src/App.tsx`, instantiate Sanity UI’s ThemeProvider as usual:

**App.tsx**

```tsx
// App.tsx
import {SanityApp, type SanityConfig} from '@sanity/sdk-react'

// Sanity UI
import {ThemeProvider} from '@sanity/ui'
import {buildTheme} from '@sanity/ui/theme'

import {ExampleComponent} from './ExampleComponent'

// Build the Sanity UI theme
const theme = buildTheme()

export function App() {
  // apps can access many different projects or other sources of data
  const config: SanityConfig[] = [
    {
      projectId: 'project-id',
      dataset: 'dataset-name',
    },
  ]

  return (
    <ThemeProvider theme={theme}>
      <SanityApp config={config} fallback={<div>Loading...</div>}>
        {/* add your own components here! */}
        <ExampleComponent />
      </SanityApp>
    </ThemeProvider>
  )
}

export default App
```

You can now use Sanity UI as expected within your custom application.

This approach can be used for other component libraries and styling solutions, as well — just be sure to set them up with `src/App.tsx`.

## Optional: faster styled components

We’re working to migrate Sanity UI off of styled components, but until then we recommend using our fork of the library to improve performance.

Add the corresponding package for your project’s React version to your project.

```sh
# React 18
pnpm add --save-exact styled-components@npm:@sanity/styled-components
# React 19
pnpm add --save-exact styled-components@npm:@sanity/css-in-js
```

You can read the full explanation of why we forked `styled-components`, and what benefits it offers in [the blog post](https://www.sanity.io/blog/cut-styled-components-into-pieces-this-is-our-last-resort).
