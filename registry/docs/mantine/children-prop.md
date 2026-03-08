## children prop

`Loader` supports `children` prop. If you pass anything to `children`, it will be rendered
instead of the loader. This is useful when you want to control `Loader` representation
in components that use `loaderProps`, for example [Button](https://mantine.dev/core/button/), [LoadingOverlay](https://mantine.dev/core/loading-overlay/), [Dropzone](https://mantine.dev/x/dropzone/).

#### Example: customLoader

```tsx
import { useDisclosure } from '@mantine/hooks';
import { LoadingOverlay, Button, Group, Box } from '@mantine/core';

function Demo() {
  const [visible, { toggle }] = useDisclosure(false);

  return (
    <>
      <Box pos="relative">
        <LoadingOverlay visible={visible} loaderProps={{ children: 'Loading...' }} />
        {/* ...other content */}
      </Box>

      <Group justify="center">
        <Button onClick={toggle}>Toggle overlay</Button>
      </Group>
    </>
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | - | Overrides default loader with given content |
| color | MantineColor | - | Key of theme.colors or any valid CSS color |
| loaders | Partial\<Record<(string & {}) | "bars" | "dots" | "oval", MantineLoaderComponent>> | - | Object of loaders components, can be customized via default props or inline. |
| size | number | MantineSize | (string & {}) | - | Controls width and height of the loader. Loader has predefined xs-xl values. Numbers are converted to rem. |
| type | (string & {}) | "bars" | "dots" | "oval" | - | Loader type, key of loaders prop |

#### Styles API

Loader component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Loader selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Loader-root | Root element |

**Loader CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --loader-color | Control loader color |

### LoadingOverlay

Package: @mantine/core
Import: import { LoadingOverlay } from '@mantine/core';
Description: An overlay with centered loader

## Usage

`LoadingOverlay` renders an overlay with a loader over the parent element with relative position.
It is usually used to indicate loading state of forms.
Note that elements under overlay are still focusable with keyboard, remember to add additional logic to handle this case.

`LoadingOverlay` rendering is controlled by `visible` prop:

#### Example: usage

```tsx
import { useDisclosure } from '@mantine/hooks';
import { LoadingOverlay, Button, Group, Box } from '@mantine/core';

function Demo() {
  const [visible, { toggle }] = useDisclosure(false);

  // Note that position: relative is required
  return (
    <>
      <Box pos="relative">
        <LoadingOverlay visible={visible} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
        {/* ...other content */}
      </Box>

      <Group justify="center">
        <Button onClick={toggle}>Toggle overlay</Button>
      </Group>
    </>
  );
}
```

## Loader props

You can pass props down to the [Loader](https://mantine.dev/core/loader) component with `loaderProps`:

#### Example: loaderProps

```tsx
import { useDisclosure } from '@mantine/hooks';
import { LoadingOverlay, Button, Group, Box } from '@mantine/core';

function Demo() {
  const [visible, { toggle }] = useDisclosure(true);

  // Note that position: relative is required
  return (
    <>
      <Box pos="relative">
        <LoadingOverlay
          visible={visible}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2 }}
          loaderProps={{ color: 'pink', type: 'bars' }}
        />
        {/* ...other content */}
      </Box>

      <Group justify="center">
        <Button onClick={toggle}>Toggle overlay</Button>
      </Group>
    </>
  );
}
```
