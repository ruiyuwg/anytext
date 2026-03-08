## Accessibility

`Dialog` is not accessible and most likely will not be announced by screen reader,
make sure you do not put any important information. In most cases it would be better
to select [Modal](https://mantine.dev/core/modal/), [Drawer](https://mantine.dev/core/drawer/) or [Notifications](https://mantine.dev/x/notifications/).

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | - | Dialog content |
| keepMounted | boolean | - | If set, dialog is not unmounted from the DOM when hidden, display: none styles are applied instead |
| onClose | () => void | - | Called when the close button is clicked |
| opened | boolean | required | Opened state |
| portalProps | BasePortalProps | - | Props passed down to the Portal component. Ignored when withinPortal is false. |
| position | AffixPosition | - | Affix position on screen |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius, numbers are converted to rem |
| shadow | MantineShadow | - | Key of theme.shadows or any valid CSS value to set box-shadow |
| size | number | MantineSize | (string & {}) | - | Controls width of the dialog |
| transitionProps | TransitionProps | - | Props passed down to the underlying Transition component |
| withBorder | boolean | - | Adds border to the root element |
| withCloseButton | boolean | - | If set, the close button is displayed |
| withinPortal | boolean | - | Determines whether the component is rendered within Portal |
| zIndex | React.CSSProperties\["zIndex"] | - | Root element z-index property |

#### Styles API

Dialog component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Dialog selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Dialog-root | Root element |
| closeButton | .mantine-Dialog-closeButton | Close button |

**Dialog CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --dialog-size | Controls `width` of the dialog |

### Divider

Package: @mantine/core
Import: import { Divider } from '@mantine/core';
Description: Horizontal line with optional label or vertical divider

## Usage

#### Example: usage

```tsx
import { Text, Divider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea,
        perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur
        aliquid commodi atque sunt officiis natus?
      </Text>

      <Divider my="md" />

      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea,
        perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur
        aliquid commodi atque sunt officiis natus?
      </Text>

      <Divider my="md" />

      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea,
        perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur
        aliquid commodi atque sunt officiis natus?
      </Text>
    </>
  );
}
```

## Variants

#### Example: variants

```tsx
import { Divider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Divider my="sm" />
      <Divider my="sm" variant="dashed" />
      <Divider my="sm" variant="dotted" />
    </>
  );
}
```

## With label

#### Example: labels

```tsx
import { Divider, Box, Anchor } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <Divider my="xs" label="Label on the left" labelPosition="left" />
      <Divider my="xs" label="Label in the center" labelPosition="center" />
      <Divider my="xs" label="Label on the right" labelPosition="right" />
      <Divider
        my="xs"
        variant="dashed"
        labelPosition="center"
        label={
          <>
            <IconSearch size={12} />
            <Box ml={5}>Search results</Box>
          </>
        }
      />
      <Divider
        my="xs"
        label={
          <Anchor href="https://mantine.dev" target="_blank" inherit>
            Link label
          </Anchor>
        }
      />
    </>
  );
}
```

## Sizes

#### Example: sizes

```tsx
import { Divider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Divider size="xs" />
      <Divider size="sm" />
      <Divider size="md" />
      <Divider size="lg" />
      <Divider size="xl" />
      <Divider size={10} />
    </>
  );
}
```
