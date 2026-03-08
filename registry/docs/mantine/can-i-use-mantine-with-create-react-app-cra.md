# Can I use Mantine with Create React App (CRA)?

Learn how to use Mantine without postcss-preset-mantine or how to eject CRA and customize webpack.config.js and use postcss-preset-mantine

## Deprecation notice

[Create React App](https://create-react-app.dev/) was deprecated in early 2023 ([comment from maintainers](https://github.com/reactjs/react.dev/pull/5487#issuecomment-1409720741)).
It is not recommended to use it for new projects. It is recommended to use [Vite](https://vitejs.dev/) or [Next.js](https://nextjs.org/) instead.
Starting from version 7.0 some of Mantine styling features are not officially supported in Create React App.

If you want to build a single page application, use Vite instead:

- [Getting started with Vite](https://mantine.dev/guides/vite/)
- [A fully featured Vite + Mantine template](https://github.com/mantinedev/vite-template)
- [Minimal Vite + Mantine template](https://github.com/mantinedev/vite-min-template)

## Usage without postcss-preset-mantine

To compile styles as shown in documentation, [postcss-preset-mantine](https://mantine.dev/styles/postcss-preset/)
is required. Create React App does not support custom PostCSS configuration by default.

The easiest way to use Mantine with Create React App is to write styles in plain CSS without [postcss-preset-mantine](https://mantine.dev/styles/postcss-preset/).

`rem`/`em` function and CSS nesting:

```scss
// ❌ Does not work with Create React App
.demo {
  font-size: rem(16px);

  @media (min-width: em(320px)) {
    font-size: rem(32px);
  }
}

// ✅ Works with Create React App
.demo {
  font-size: calc(1rem * var(--mantine-scale));
}

@media (min-width: 20em) {
  .demo {
    font-size: calc(2rem * var(--mantine-scale));
  }
}
```

Mixins:

```scss
// ❌ Does not work with Create React App
.demo {
  @mixin light {
    color: red;
  }

  @mixin dark {
    color: blue;
  }
}

// ✅ Works with Create React App
[data-mantine-color-scheme='light'] .demo {
  color: red;
}

[data-mantine-color-scheme='dark'] .demo {
  color: blue;
}
```

`light-dark` function:

```scss
// ❌ Does not work with Create React App
.demo {
  color: light-dark(red, blue);
}

// ✅ Works with Create React App
[data-mantine-color-scheme='light'] .demo {
  color: red;
}

[data-mantine-color-scheme='dark'] .demo {
  color: blue;
}
```

## Ejecting Create React App

If you still want to use [postcss-preset-mantine](https://mantine.dev/styles/postcss-preset/) with Create React App,
you can eject your application and add custom PostCSS configuration.

1. Eject your application – `npm run eject`
2. Install dependencies – `yarn add postcss postcss-preset-mantine @mantine/core @mantine/hooks`
3. Create `postcss.config.js` file in the root of your project with the following content:

```tsx
module.exports = {
  plugins: {
    'postcss-preset-mantine': {},
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {},
    'postcss-normalize': {},
  },
};
```

4. Replace `postcss-loader` configuration in `config/webpack.config.js` with the following:

```tsx
{
  loader: require.resolve("postcss-loader"),
  options: {
    postcssOptions: {
      ident: "postcss",
    },
    sourceMap: isEnvProduction ? shouldUseSourceMap : isEnvDevelopment,
  },
}
```

5. After that follow [Vite getting started guide](https://mantine.dev/guides/vite/#installation) except for the first step
   (you already have `postcss.config.js` file)

## Ejected CRA example

You can find an example repository with ejected CRA application and full setup [here](https://github.com/rtivital/cra-mantine-7).

# Why my Carousel slides are in vertical orientation?

You forgot to import carousel styles

## Carousel component looks broken

If your [Carousel](https://mantine.dev/x/carousel/) component renders slides in vertical orientation
or has incorrect controls/indicators position, you forgot to import carousel styles.
Follow [@mantine/carousel](https://mantine.dev/x/carousel/#installation) installation
instructions to fix the issue. Import `@mantine/core` and `@mantine/carousel` styles at
the root of your application:

```tsx
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
```

## That's it! It works now!

Nice! 👍

# How can I change component color prop value depending on the color scheme?

Learn how to use CSS variables resolver to change color value depending on the color scheme

`color` prop in all components uses Mantine [CSS variables](https://mantine.dev/styles/css-variables)
to resolve color value depending on the color scheme. You can define these variables with `virtualColor` function:

#### Example: ColorSchemeColor

```tsx
import { virtualColor, createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  colors: {
    primary: virtualColor({ name: 'primary', light: 'blue', dark: 'red' }),
  },
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <YourApp />
    </MantineProvider>
  );
}
```

# Why I see color scheme flickering on page load?

Color scheme flickering is caused by incorrect usage of ColorSchemeScript

## How Mantine applies color scheme

Mantine color scheme is defined by `data-mantine-color-scheme="{value}"`
attribute on the `:root` element (usually `html`). This attribute is used by
all components to assign color scheme specific styles.

Usually, you do not need to set `data-mantine-color-scheme` attribute manually,
it is added by `ColorSchemeScript` (before hydration) and `MantineProvider`
(after the app has been mounted) components automatically.

## Flash of inaccurate color scheme

Flash of inaccurate color scheme (FART) happens when the color scheme selected
by the user is different from the color scheme value with which the application
has been initialized. FART can occur only in applications with server-side
rendering (SSR) or static site generation (SSG).

In most case, FART is caused by incorrect usage of `ColorSchemeScript` component.
For example, a common issue is a mismatch of `defaultColorScheme` values defined
on `ColorSchemeScript` and `MantineProvider`:

```tsx
import { ColorSchemeScript, MantineProvider } from '@mantine/core';

// ❌ Incorrect usage – defaultColorScheme values do not match,
// this will cause color scheme flickering
function IncorrectDemo() {
  return (
    <>
      <ColorSchemeScript defaultColorScheme="light" />
      <MantineProvider defaultColorScheme="auto">
        {/* Your app here */}
      </MantineProvider>
    </>
  );
}

// ✅ Correct usage – defaultColorScheme values match, no FART
function CorrectDemo() {
  return (
    <>
      <ColorSchemeScript defaultColorScheme="light" />
      <MantineProvider defaultColorScheme="light">
        {/* Your app here */}
      </MantineProvider>
    </>
  );
}
```
