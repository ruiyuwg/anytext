## Responsive max-width

To make `Container` `max-width` responsive, use [Styles API](https://mantine.dev/styles/styles-api) to set
`classNames`. For example, you can add `responsive` size that will make `Container`
`max-width` different depending on screen size:

#### Example: responsive

```tsx
// Demo.tsx
import cx from 'clsx';
import { MantineProvider, Container, createTheme } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Container: Container.extend({
      classNames: (_, { size }) => ({
        root: cx({ [classes.responsiveContainer]: size === 'responsive' }),
      }),
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Container size="responsive" bg="var(--mantine-color-blue-light)">
        Container with responsive size
      </Container>
    </MantineProvider>
  );
}

// Demo.module.css
.responsiveContainer {
  max-width: 300px;

  @media (min-width: em(400px)) {
    max-width: 400px;
  }

  @media (min-width: em(600px)) {
    max-width: 600px;
  }
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| fluid | boolean | - | If set, the container takes 100% width of its parent and size prop is ignored. |
| size | number | MantineSize | (string & {}) | - | max-width of the container, value is not responsive – it is the same for all screen sizes. Numbers are converted to rem. Ignored when fluid prop is set. |
| strategy | "block" | "grid" | - | Centering strategy |

#### Styles API

Container component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Container selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Container-root | Root element |

**Container CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --container-size | Controls container `max-width` |

### CopyButton

Package: @mantine/core
Import: import { CopyButton } from '@mantine/core';
Description: Copies given text to clipboard

## Usage

`CopyButton` is based on [use-clipboard](https://mantine.dev/hooks/use-clipboard/) hook.
Its children is a function that receives an object with the following properties:

- `copied` – boolean value that indicates that a given value was recently copied to the clipboard, it resets after a given timeout (defaults to 500ms)
- `copy` – function that should be called to copy given value to clipboard

#### Example: usage

```tsx
import { CopyButton, Button } from '@mantine/core';

function Demo() {
  return (
    <CopyButton value="https://mantine.dev">
      {({ copied, copy }) => (
        <Button color={copied ? 'teal' : 'blue'} onClick={copy}>
          {copied ? 'Copied url' : 'Copy url'}
        </Button>
      )}
    </CopyButton>
  );
}
```

## Security

Due to security reasons `CopyButton` component will not work in iframes and may not work with local files opened with `file://` protocol
(component will work fine with local websites that are using `http://` protocol). You can learn more about `navigator.clipboard` [here](https://web.dev/async-clipboard/).

## Timeout

You can provide a custom `copied` reset `timeout`:

#### Example: timeout

```tsx
import { ActionIcon, CopyButton, Tooltip } from '@mantine/core';
import { IconCopy, IconCheck } from '@tabler/icons-react';

function Demo() {
  return (
    <CopyButton value="https://mantine.dev" timeout={2000}>
      {({ copied, copy }) => (
        <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
          <ActionIcon color={copied ? 'teal' : 'gray'} variant="subtle" onClick={copy}>
            {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
          </ActionIcon>
        </Tooltip>
      )}
    </CopyButton>
  );
}
```

## Server components

CopyButton is not compatible with React Server Components as it uses useEffect and other client-side features. You can use it in client components only.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | (payload: { copied: boolean; copy: () => void; }) => ReactNode | required | Children callback, provides current status and copy function as an argument |
| timeout | number | - | Copied status timeout in ms |
| value | string | required | Value that is copied to the clipboard when the button is clicked |

### Dialog

Package: @mantine/core
Import: import { Dialog } from '@mantine/core';
Description: Display a fixed overlay dialog at any side of the screen

## Usage

`Dialog` is a simplified version of [Modal](https://mantine.dev/core/modal/) component.
It does not include most of accessibility and usability [Modal](https://mantine.dev/core/modal/) features:

- Focus trap is not available
- Does not close on click outside
- Does not have overlay

Use `Dialog` to attract attention with not important information or action,
for example, you can create an email subscription form:

#### Example: usage

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Dialog, Group, Button, TextInput, Text } from '@mantine/core';

function Demo() {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <>
      <Group justify="center">
        <Button onClick={toggle}>Toggle dialog</Button>
      </Group>

      <Dialog opened={opened} withCloseButton onClose={close} size="lg" radius="md">
        <Text size="sm" mb="xs" fw={500}>
          Subscribe to email newsletter
        </Text>

        <Group align="flex-end">
          <TextInput placeholder="hello@gluesticker.com" style={{ flex: 1 }} />
          <Button onClick={close}>Subscribe</Button>
        </Group>
      </Dialog>
    </>
  );
}
```

## Change position

`Dialog` is rendered in [Portal](https://mantine.dev/core/portal/) and has fixed position, set `position` prop to control dialog's position:

```tsx
import { Dialog } from '@mantine/core';

function Demo() {
  return (
    <>
      <Dialog position={{ top: 20, left: 20 }} opened>
        Dialog in top left corner
      </Dialog>
      <Dialog position={{ bottom: 20, left: 20 }} opened>
        Dialog in bottom left corner
      </Dialog>
    </>
  );
}
```
