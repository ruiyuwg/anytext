# How can I load fonts in Vite?

A guide to load custom fonts in Vite

## Loading local fonts

Create the following folder structure (the example with Roboto custom font):

```plaintext
Roboto/
├─ Roboto-Bold.woff2
├─ Roboto-Heavy.woff2
├─ Roboto.css
```

In `Roboto.css` file, add the following code:

```css
@font-face {
  font-family: 'Roboto';
  src: url('./Roboto-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Roboto';
  src: url('./Roboto-Heavy.woff2') format('woff2');
  font-weight: 900;
  font-style: normal;
}
```

Then import `Roboto.css` file at the root of your application and
add the font to your [theme](https://mantine.dev/theming/theme-object/):

```tsx
import {
  createTheme,
  DEFAULT_THEME,
  MantineProvider,
} from '@mantine/core';

import '@mantine/core/styles.css';
import './Roboto/Roboto.css';

const theme = createTheme({
  fontFamily: 'Roboto, sans-serif',
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: {
    // Use default theme if you want to provide default Mantine fonts as a fallback
    fontFamily: `Roboto, ${DEFAULT_THEME.fontFamily}`,
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>Your app here</MantineProvider>
  );
}
```

## Load fonts from Google Fonts

Selects fonts you want to use at [Google Fonts](https://fonts.google.com/) and copy
HTML code snippet. For example, to load [Roboto](https://fonts.google.com/specimen/Roboto)
font, the code you receive from Google Fonts will look something like this:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
  rel="stylesheet"
/>
```

Add the code to the `<head />` of your application `index.html` file
of your application. The code will look something like this:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/src/favicon.svg" />
    <meta
      name="viewport"
      content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossorigin
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
      rel="stylesheet"
    />
    <title>Vite + Mantine App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

Then add the font to your [theme](https://mantine.dev/theming/theme-object/):

```tsx
import {
  createTheme,
  DEFAULT_THEME,
  MantineProvider,
} from '@mantine/core';

import '@mantine/core/styles.css';

const theme = createTheme({
  fontFamily: 'Roboto, sans-serif',
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: {
    // Use default theme if you want to provide default Mantine fonts as a fallback
    fontFamily: `Roboto, ${DEFAULT_THEME.fontFamily}`,
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>Your app here</MantineProvider>
  );
}
```

# Can I use Mantine with Vue/Svelte/Angular/etc.?

No, Mantine is a React library and does not support other frameworks/libraries

## Can I use Mantine with Vue/Svelte/Angular?

No, Mantine is a React library and does not support other frameworks/libraries.
Maintaining a library is a lot of work, Mantine is focused on providing the
best possible experience for React developers and does not plan to support
other frameworks in the future.

## What about Preact?

Mantine does not officially support Preact. However, several community members
reported that they were able to use Mantine with Preact without any issues.

# Why VSCode cannot autoimport Text component?

It is confused by the native Text constructor

## Why Text component is not automatically imported?

VSCode cannot automatically import [Text](https://mantine.dev/core/text) component
because it confuses it with the native [Text](https://developer.mozilla.org/en-US/docs/Web/API/Text/Text) constructor
which always appears as a first type reference in the editor.

## How can I import Text component with VSCode?

To import Mantine `Text` component, you need to manually select it from the list of suggestions
(usually, it appears as the second option):

To learn more about VSCode IntelliSense and autoimport, visit the [official documentation](https://code.visualstudio.com/docs/editor/intellisense).
