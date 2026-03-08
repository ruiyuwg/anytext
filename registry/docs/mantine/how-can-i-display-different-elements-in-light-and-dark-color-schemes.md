# How can I display different elements in light and dark color schemes?

Learn how to hide/show elements based on color scheme

## How Mantine color scheme works

Mantine color scheme is defined by `data-mantine-color-scheme="value"` attribute on the `html` element.
It can be either `light` or `dark`. `data-mantine-color-scheme` attribute is set
by `ColorSchemeScript` component before the application is initialized in server-side
rendering frameworks like Next.js, React Router, etc. and by `MantineProvider` component during the first render in
client-side frameworks like Vite.

## Can I get color scheme value in JavaScript?

If your application does not have server-side rendering, you can get color scheme value
with `useMantineColorScheme` hook:

```tsx
import { useMantineColorScheme } from '@mantine/core';

function MyComponent() {
  const { colorScheme } = useMantineColorScheme();

  // ✅ Works in Vite and other client-side bundlers/frameworks
  // ❌ Hydration mismatch in Next.js, React Router, and other server-side rendering frameworks
  return <div>Color scheme is {colorScheme}</div>;
}
```

If you have server-side rendering in your application (Next.js, React Router, etc.), you should
not rely on JavaScript to get color scheme value – conditional rendering based on color
scheme value will produce hydration mismatch. In this case, the only option is to use
styles to hide/show elements based on the color scheme value.

## lightHidden and darkHidden props

All Mantine components support `lightHidden` and `darkHidden` props that allow you to hide
components based on the color scheme value. These props are the most reliable way to render
different elements based on the color scheme value.

## Changing component styles based on color scheme

For custom components that do not have access to `lightHidden` and `darkHidden` props, you can
use `light` and `dark` mixins from [postcss-presets-mantine](https://mantine.dev/styles/postcss-preset):

```scss
.lightHidden {
  @mixin light {
    display: none;
  }
}

.darkHidden {
  @mixin dark {
    display: none;
  }
}
```

# Can I have color schemes other than light and dark?

Learn about the difference between color scheme and theme

## What is color scheme?

In context of Mantine, the color scheme is a value that impacts colors of the UI.
Mantine color scheme supports only values that are defined by browsers.
The color scheme value can either be `light`, `dark` or `auto` (same as in the user OS settings).

## I want to add a custom color scheme. Can I do that?

No, Mantine does not support custom color schemes. If you attempt to do that,
most of the components will have broken styles. Instead of applying a custom
color scheme, customize colors with [theme](https://mantine.dev/theming/theme-object/).

## How can I customize colors with theme?

You can define custom colors in the [theme object](https://mantine.dev/theming/theme-object).

```tsx
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  colors: {
    sepia: [
      '#F4ECD8',
      '#EAD8B7',
      '#DFC29A',
      '#D4AC7E',
      '#C99862',
      '#BD8447',
      '#B2702D',
      '#A55C15',
      '#924908',
      '#7A3704',
    ],
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  );
}
```

Then you can reference these values in components and `.css` files:

```scss
body {
  background-color: var(--mantine-color-sepia-0);
  color: var(--mantine-color-sepia-9);
}
```
