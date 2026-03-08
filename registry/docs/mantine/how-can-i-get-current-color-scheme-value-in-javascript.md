# How can I get current color scheme value in JavaScript?

How to use useMantineColorScheme and useComputedColorScheme hooks to get current color scheme value in JavaScript

## Get color scheme value in component

To get color scheme value in component use `useMantineColorScheme` hook:

```tsx
import { useMantineColorScheme } from '@mantine/core';

function Demo() {
  // colorScheme is `'dark' | 'light' | 'auto'`
  const { colorScheme } = useMantineColorScheme();
}
```

If you want to get computed color scheme, use `useComputedColorScheme` hook instead.
It will resolve `auto` value to `dark` or `light` based on user preferences:

```tsx
import { useComputedColorScheme } from '@mantine/core';

function Demo() {
  // colorScheme is `'dark' | 'light'`
  const colorScheme = useComputedColorScheme();
}
```

Note that both hooks are using `localStorage` to store color scheme value.
It is not possible to get color scheme value on the server side – the value
will always fallback to `light` during SSR.

## Get color scheme value outside of component

To get color scheme value outside of component, create an utility function
that will parse color scheme value from `data-mantine-color-scheme` attribute:

```tsx
import { MantineColorScheme } from '@mantine/core';

export function getColorScheme() {
  return document.documentElement.getAttribute(
    'data-mantine-color-scheme'
  ) as MantineColorScheme;
}
```

Then use it in any place of your application:

```tsx
import { getColorScheme } from './getColorScheme';

const colorScheme = getColorScheme();
```

Note that this approach will not work on the server side.

## I want to hide/show some elements based on color scheme value

Using the approaches described above to get color scheme value is not compatible with SSR.
For example, if you want to conditionally render some elements based on color scheme value,
you will get hydration mismatch or other error:

```tsx
import { useComputedColorScheme } from '@mantine/core';
import { getColorScheme } from './getColorScheme';

// ❌ Not compatible with SSR
function Demo() {
  const colorScheme = useComputedColorScheme();

  return (
    <div>
      {colorScheme === 'dark' && <div>Dark mode</div>}
      {getColorScheme() === 'light' && <div>Light mode</div>}
    </div>
  );
}
```

Instead of relying on JavaScript code to hide/show elements,
render both elements and hide them with styles based on color scheme value
using `data-mantine-color-scheme` attribute. All Mantine components have
`lightHidden` and `darkHidden` props that hide element based on color scheme value.
You can also use [light/dark mixins](https://mantine.dev/theming/color-schemes/#color-scheme-value-caveats)
or `light-dark` function from [postcss-preset-mantine](https://mantine.dev/styles/postcss-preset/)
to hide elements based on color scheme value.

#### Example: HideShowColorScheme

```tsx
import { Button } from '@mantine/core';

function Demo() {
  return (
    <>
      <Button color="cyan" lightHidden>
        Visible in dark color scheme only
      </Button>

      <Button color="pink" darkHidden>
        Visible in light color scheme only
      </Button>
    </>
  );
}
```

# How can I lock scroll in my application?

Use react-remove-scroll library to lock scroll in your application

Mantine components use [react-remove-scroll](https://github.com/theKashey/react-remove-scroll)
library to lock scroll. You can use it in your application to lock scroll. For your
convenience, `@mantine/core` package exports `RemoveScroll` component:

```tsx
import { RemoveScroll } from '@mantine/core';

function App() {
  return (
    <RemoveScroll>
      <div>Content</div>
    </RemoveScroll>
  );
}
```

The component supports all props that are supported by `react-remove-scroll` library,
you can find the full list of props in the [official documentation](https://github.com/theKashey/react-remove-scroll).

# How to prevent Modal from closing?

Learn how to prevent Modal from closing when user clicks outside of it or presses Escape key

[Modal](https://mantine.dev/core/modal/) and [Drawer](https://mantine.dev/core/drawer/) components
opened state is controlled by `opened` prop. You can use it to prevent modal from closing by setting
it to `true`. For example, it can be useful if you have an async operation inside the modal and want to
prevent user from closing it before the operation is finished:

#### Example: ModalDoNotClose

```tsx
import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Button, Modal } from '@mantine/core';

function operation() {
  return new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });
}

function Demo() {
  const [opened, { open, close }] = useDisclosure();
  const [loading, setLoading] = useState(false);

  const performOperation = () => {
    setLoading(true);
    operation().then(() => setLoading(false));
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={loading ? () => {} : close}
        withCloseButton={!loading}
        title="Modal with async operation"
      >
        <Button loading={loading} onClick={performOperation} fullWidth>
          Perform heavy operation
        </Button>
      </Modal>
      <Button onClick={open}>Open modal</Button>
    </>
  );
}
```
