# How can I load fonts in Next.js?

A guide to load custom fonts in Next.js with CSS and next/font package

## Loading fonts with next/font package

To load fonts with the [next/font](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts)
package, create the following folder structure (the example with Roboto custom font):

```plaintext
Roboto/
├─ Roboto-Bold.woff2
├─ Roboto-Heavy.woff2
├─ Roboto.ts
```

In `Roboto.ts` file, add the following code:

```tsx
import localFont from 'next/font/local';

export const roboto = localFont({
  src: [
    {
      path: './Roboto-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Roboto-Heavy.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
});
```

Then add the font to your [theme](https://mantine.dev/theming/theme-object/):

```tsx
import '@mantine/core/styles.css';

import {
  createTheme,
  DEFAULT_THEME,
  MantineProvider,
} from '@mantine/core';
import { roboto } from './Roboto';

const theme = createTheme({
  fontFamily: roboto.style.fontFamily,
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: {
    // Use default theme if you want to provide default Mantine fonts as a fallback
    fontFamily: `${roboto.style.fontFamily}, ${DEFAULT_THEME.fontFamily}`,
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>Your app here</MantineProvider>
  );
}
```

## Loading fonts without next/font package

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

Add the code to the [head](https://nextjs.org/docs/pages/api-reference/components/head)
of your application and add the font to your [theme](https://mantine.dev/theming/theme-object/):

```tsx
import '@mantine/core/styles.css';

import {
  createTheme,
  DEFAULT_THEME,
  MantineProvider,
} from '@mantine/core';

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

Alternatively, you can download fonts from Google Fonts and load them with
[next/font](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts)
package to have Next.js fonts optimization feature.

# Why my screen is completely empty after I

You have used Notifications component incorrectly

## Notifications component

A common error of using [@mantine/notifications](https://mantine.dev/x/notifications/) package
is to wrap your application with `Notifications` component:

```tsx
// ❌ This is incorrect
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

function Demo() {
  return (
    <MantineProvider>
      <Notifications>
        <App />
      </Notifications>
    </MantineProvider>
  );
}
```

## How to fix

`Notifications` component does not support `children` prop, if you put your application
inside it, it will not be rendered. Instead, you should render `Notifications` component
as a sibling to your application:

```tsx
// ✅ This is correct
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

function Demo() {
  return (
    <MantineProvider>
      <Notifications />
      <App />
    </MantineProvider>
  );
}
```

# Why my notifications are displayed at a wrong position?

Because you did not import styles

If your notifications have incorrect position on the screen and look like this:

It means that you did not import styles for `@mantine/notifications` package like
it is described in [installation](https://mantine.dev/x/notifications/#installation)
instructions.

Add styles import to your application:

```bash
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
```

# Is there a comparison with other libraries?

Comparison with other libraries is not provided, you are trusted to make your own decision based on documentation examples

## Do you have a comparison with other libraries?

No, we don't provide a comparison with other libraries, because:

- Mantine changes rapidly – new features and improvements are added constantly
- Other libraries change over time as well, so any comparison will be outdated soon
- Maintaining a fair comparison is hard, it requires deep knowledge of all libraries and their features

## How should I decide which library to use?

Go through the documentation and examples of each library, try to build something with them,
and decide which one fits your needs better.
Mantine, as well as other libraries, provides a lot of examples and documentation,
so you can make an informed decision based on that.

# It is not possible to pinch to zoom when Modal is opened. What should I do?

Use removeScrollProps to configure react-remove-scroll options

[Modal](https://mantine.dev/core/modal) and [Drawer](https://mantine.dev/core/drawer) components use [react-remove-scroll](https://github.com/theKashey/react-remove-scroll)
to lock scroll when they are opened. By default, `react-remove-scroll` will lock scroll and prevent pinch to zoom on mobile devices.
To change various scroll lock options, you can use `removeScrollProps` prop:

```tsx
import { Modal } from '@mantine/core';

function Demo() {
  return (
    <Modal
      removeScrollProps={{
        allowPinchZoom: true, // Allow pinch to zoom on mobile devices
      }}
    >
      {/* Modal content */}
    </Modal>
  );
}
```

# Why I cannot use one polymorphic component in component prop of another polymorphic component?

Learn how polymorphic components types work

## What is polymorphic component?

A polymorphic component is a component which root element can be changed with component prop.
All polymorphic components have a default element which is used when component prop is not provided.
For example, the `Button` component default element is `button` and it can be changed to
`a` or any other element or component:

```tsx
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button component="a" href="https://mantine.dev/" target="_blank">
      Mantine website
    </Button>
  );
}
```

## Polymorphic components types

Polymorphic components types are defined by the type of the root element
which is not known until the component is used.

Example:

```tsx
import { Box } from '@mantine/core';

// MyBox component props types are now known
// Types will be assigned only when MyBox is used
const MyBox = Box;

function Demo() {
  // MyBox props type can be determined based on
  // `component` prop or its absence
  // In this case MyBox props type contain
  // React.ComponentProps<'div'>
  return <MyBox>Hello</MyBox>;
}

function Demo2() {
  // In this case MyBox props type contain
  // React.ComponentProps<'a'>
  return <MyBox component="a" href="https://mantine.dev/" />;
}
```

## Why I cannot use one polymorphic component in component prop of another polymorphic component?

When you use one polymorphic component in `component` prop of another polymorphic component,
types cannot be inferred correctly because the type of the root element is not known until the component is used.

```tsx
import { Box, Button } from '@mantine/core';

function Demo() {
  // Types cannot be inferred correctly
  return <Box component={Button} />;
}
```
