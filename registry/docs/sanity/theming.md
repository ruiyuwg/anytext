# Theming

## Theming in Sanity Studio

### Using `buildLegacyTheme`

The top-level `theme` config property allows you to customize the color palette of the studio. You can create your own themes using the `buildLegacyTheme` helper function exported from the `sanity` package.

```javascript
import {buildLegacyTheme, defineConfig} from 'sanity'

const props = {
  '--my-white': '#fff',
  '--my-black': '#1a1a1a',
  '--my-blue': '#4285f4',
  '--my-red': '#db4437',
  '--my-yellow': '#f4b400',
  '--my-green': '#0f9d58',
}

export const myTheme = buildLegacyTheme({
  /* Base theme colors */
  '--black': props['--my-black'],
  '--white': props['--my-white'],

  '--gray': '#666',
  '--gray-base': '#666',

  '--component-bg': props['--my-white'],
  '--component-text-color': props['--my-black'],

  /* Brand */
  '--brand-primary': props['--my-blue'],

  // Default button
  '--default-button-color': '#666',
  '--default-button-primary-color': props['--my-blue'],
  '--default-button-success-color': props['--my-green'],
  '--default-button-warning-color': props['--my-yellow'],
  '--default-button-danger-color': props['--my-red'],

  /* State */
  '--state-info-color': props['--my-blue'],
  '--state-success-color': props['--my-green'],
  '--state-warning-color': props['--my-yellow'],
  '--state-danger-color': props['--my-red'],

  /* Navbar */
  '--main-navigation-color': props['--my-black'],
  '--main-navigation-color--inverted': props['--my-white'],

  '--focus-color': props['--my-blue'],
})

export default defineConfig({
  // rest of config...,

  theme: myTheme,
})
```

### Using the Themer app

A potentially quicker and easier way to go about creating themes for your studio is to use [Themer](https://themer.sanity.build/). This web app was created in-house at Sanity and will let you visually create a custom palette that you can then export for your own use.

![Screenshot of web app that lets you define custom color palettes for the Sanity Studio ](https://cdn.sanity.io/images/3do82whm/next/72e1d2538c81f25fc18a4a5ba148e9047d74e73b-1402x939.png)
