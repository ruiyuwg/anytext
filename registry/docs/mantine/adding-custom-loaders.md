## Adding custom loaders

`Loader` component is used in other components ([Button](https://mantine.dev/core/button), [ActionIcon](https://mantine.dev/core/action-icon), [LoadingOverlay](https://mantine.dev/core/loading-overlay), etc.).
You can change loader type with [default props](https://mantine.dev/theming/default-props) by setting `type`.
You can also add a custom CSS or SVG loader with `loaders` [default prop](https://mantine.dev/theming/default-props).

### Custom CSS only loader

Note that in order for `size` and `color` props to work with custom loaders, you need to
use `--loader-size` and `--loader-color` CSS variables in your loader styles.

#### Example: cssLoader

```tsx
import { MantineProvider, Loader } from '@mantine/core';
import { CssLoader } from './CssLoader';

const theme = createTheme({
  components: {
    Loader: Loader.extend({
      defaultProps: {
        loaders: { ...Loader.defaultLoaders, custom: CssLoader },
        type: 'custom',
      },
    }),
  },
});

function Demo() {
  return (
    <MantineThemeProvider theme={theme}>
      <Loader />
    </MantineThemeProvider>
  );
}
```

### Custom SVG loader

It is recommended to use CSS only loaders, as SVG based animations may have the following issues:

- High CPU usage – loader may look glitchy on low-end devices
- Loader animation may not start playing until js is loaded – user may see static loader

In your SVG loader, you need to use `--loader-size` and `--loader-color` variables the same
way as in CSS only custom loader in order for `size` and `color` props to work. Usually,
you would need to set `width` and `height` to `var(--loader-size)` and `fill`/`stroke` to
`var(--loader-color)`.

#### Example: customType

```tsx
import { MantineProvider, Loader } from '@mantine/core';
import { RingLoader } from './RingLoader';

const theme = createTheme({
  components: {
    Loader: Loader.extend({
      defaultProps: {
        loaders: { ...Loader.defaultLoaders, ring: RingLoader },
        type: 'ring',
      },
    }),
  },
});

function Demo() {
  return (
    <MantineThemeProvider theme={theme}>
      <Loader />
    </MantineThemeProvider>
  );
}
```
