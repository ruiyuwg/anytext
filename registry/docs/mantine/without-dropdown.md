## Without dropdown

You can use `Combobox` without dropdown. To do so, use `Combobox.EventsTarget` instead
of `Combobox.Target`:

#### Example: noDropdown

```tsx
import { useState } from 'react';
import { Combobox, TextInput } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('');

  return (
    <Combobox onOptionSubmit={setValue}>
      <Combobox.EventsTarget>
        <TextInput
          placeholder="Pick value"
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
        />
      </Combobox.EventsTarget>

      <Combobox.Options mt="sm">
        <Combobox.Option value="First">First</Combobox.Option>
        <Combobox.Option value="Second">Second</Combobox.Option>
        <Combobox.Option value="Third">Third</Combobox.Option>
      </Combobox.Options>
    </Combobox>
  );
}
```

#### Example: stylesApi

```tsx
import { Combobox, TextInput, useCombobox } from '@mantine/core';

function Demo() {
  const combobox = useCombobox({ opened: true });

  return (
    <Combobox store={combobox}>
      <Combobox.Target>
        <TextInput placeholder="Pick value" />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Header>Combobox header</Combobox.Header>
        <Combobox.Search placeholder="Search input" />

        <Combobox.Options>
          <Combobox.Group label="First group">
            <Combobox.Option value="1">First</Combobox.Option>
            <Combobox.Option value="2">Second</Combobox.Option>
          </Combobox.Group>

          <Combobox.Group label="Second group">
            <Combobox.Option value="3">Third</Combobox.Option>
            <Combobox.Option value="4">Fourth</Combobox.Option>
          </Combobox.Group>

          <Combobox.Group label="Third group">
            <Combobox.Empty>Nothing found in this group...</Combobox.Empty>
          </Combobox.Group>
        </Combobox.Options>

        <Combobox.Footer>Combobox footer</Combobox.Footer>
      </Combobox.Dropdown>
    </Combobox>
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| arrowOffset | number | - | Arrow offset in px |
| arrowPosition | ArrowPosition | - | Arrow position |
| arrowRadius | number | - | Arrow border-radius in px |
| arrowSize | number | - | Arrow size in px |
| children | React.ReactNode | - | Combobox content |
| disabled | boolean | - | If set, popover dropdown will not be rendered |
| dropdownPadding | Padding | - | Controls padding of the dropdown |
| floatingStrategy | FloatingStrategy | - | Changes floating ui [position strategy](https://floating-ui.com/docs/usefloating#strategy) |
| hideDetached | boolean | - | If set, the dropdown is hidden when the element is hidden with styles or not visible on the screen |
| keepMounted | boolean | - | If set, the dropdown is not unmounted from the DOM when hidden. display: none styles are added instead. |
| middlewares | PopoverMiddlewares | - | Floating ui middlewares to configure position handling |
| offset | number | FloatingAxesOffsets | - | Offset of the dropdown element |
| onClose | () => void | - | Called when dropdown closes |
| onDismiss | () => void | - | Called when the popover is dismissed by clicking outside or by pressing escape |
| onEnterTransitionEnd | () => void | - | Called when enter transition ends |
| onExitTransitionEnd | () => void | - | Called when exit transition ends |
| onOpen | () => void | - | Called when dropdown opens |
| onOptionSubmit | (value: string, optionProps: ComboboxOptionProps) => void | - | Called when item is selected with the Enter key or by clicking it |
| onPositionChange | (position: FloatingPosition) => void | - | Called when dropdown position changes |
| overlayProps | OverlayProps & ElementProps<"div"> | - | Props passed down to Overlay component |
| portalProps | BasePortalProps | - | Props to pass down to the Portal when withinPortal is true |
| position | FloatingPosition | - | Dropdown position relative to the target element |
| positionDependencies | any\[] | - | @deprecated : Do not use, will be removed in 9.0 |
| preventPositionChangeWhenVisible | boolean | - | Prevents popover from flipping/shifting when it the dropdown is visible |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius |
| readOnly | boolean | - | Determines whether the Combobox value can be changed |
| resetSelectionOnOptionHover | boolean | - | Determines whether selection should be reset when option is hovered |
| returnFocus | boolean | - | Determines whether focus should be automatically returned to control when dropdown closes |
| shadow | MantineShadow | - | Key of theme.shadows or any other valid CSS box-shadow value |
| size | MantineSize | (string & {}) | - | Controls items font-size and padding |
| store | ComboboxStore | - | Combobox store, can be used to control combobox state |
| transitionProps | TransitionProps | - | Props passed down to the Transition component. Use to configure duration and animation type. |
| width | PopoverWidth | - | Dropdown width, or 'target' to make dropdown width the same as target element |
| withArrow | boolean | - | Determines whether component should have an arrow |
| withOverlay | boolean | - | Determines whether the overlay should be displayed when the dropdown is opened |
| withinPortal | boolean | - | Determines whether dropdown should be rendered within the Portal |
| zIndex | string | number | - | Dropdown z-index |

#### Styles API

Combobox component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Combobox selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| options | .mantine-Combobox-options | `Combobox.Options` component |
| dropdown | .mantine-Combobox-dropdown | `Combobox.Dropdown` component |
| option | .mantine-Combobox-option | `Combobox.Option` component |
| search | .mantine-Combobox-search | `Combobox.Search` input |
| empty | .mantine-Combobox-empty | `Combobox.Empty` component |
| header | .mantine-Combobox-header | `Combobox.Header` component |
| footer | .mantine-Combobox-footer | `Combobox.Footer` component |
| group | .mantine-Combobox-group | `Combobox.Group` component |
| groupLabel | .mantine-Combobox-groupLabel | Label of `Combobox.Group` component |

**Combobox CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| dropdown | --combobox-option-fz | Controls option `font-size` |
| dropdown | --combobox-option-padding | Controls option `padding` |
| dropdown | --combobox-padding | Controls dropdown `padding` |

**Combobox data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| option | data-combobox-selected | Option is selected | - |
| option | data-combobox-active | - | - |
| option | data-combobox-disabled | - | - |
| dropdown | data-hidden | - | - |

### Container

Package: @mantine/core
Import: import { Container } from '@mantine/core';
Description: Center content with padding and max-width

## Grid strategy

Starting from 8.2.0, `Container` supports `strategy="grid"` prop which enables more
features.

Differences from the default `strategy="block"`:

- Uses `display: grid` instead of `display: block`
- Does not include default inline padding
- Does not set `max-width` on the root element (uses grid template columns instead)

Features supported by `strategy="grid"`:

- Everything that is supported by `strategy="block"`
- Children with `data-breakout` attribute take the entire width of the container's parent element
- Children with `data-container` inside `data-breakout` have the same width as the main grid column

Example of using breakout feature:

#### Example: breakout

```tsx
import { Box, Container } from '@mantine/core';

function Demo() {
  return (
    <Container strategy="grid" size={500}>
      <Box bg="var(--mantine-color-indigo-light)" h={50}>
        Main content
      </Box>

      <Box data-breakout bg="var(--mantine-color-indigo-light)" mt="xs">
        <div>Breakout</div>

        <Box data-container bg="indigo" c="white" h={50}>
          <div>Container inside breakout</div>
        </Box>
      </Box>
    </Container>
  );
}
```

## Usage

`Container` centers content and limits its `max-width` to the value specified in `size` prop.
Note that the `size` prop does not make `max-width` responsive, for example,
when it set to `lg` it will always be `lg` regardless of screen size.

#### Example: usage

```tsx
import { Container } from '@mantine/core';

function Demo() {
  const demoProps = {
    bg: 'var(--mantine-color-blue-light)',
    h: 50,
    mt: 'md',
  };

  return (
    <>
      <Container {...demoProps}>Default Container</Container>

      <Container size="xs" {...demoProps}>
        xs Container
      </Container>

      <Container px={0} size={480} {...demoProps}>
        480px Container without padding
      </Container>
    </>
  );
}
```

## Fluid

Set `fluid` prop to make container fluid, it will take 100% of available width,
it is the same as setting `size="100%"`.

#### Example: fluid

```tsx
import { Container } from '@mantine/core';

function Demo() {
  return (
    <Container fluid h={50} bg="var(--mantine-color-blue-light)">
      Fluid container has 100% max-width
    </Container>
  );
}
```

## Customize sizes

You can customize existing `Container` sizes and add new ones with [CSS variables](https://mantine.dev/styles/styles-api)
on [theme](https://mantine.dev/theming/theme-object):

#### Example: sizes

```tsx
import { Container, MantineProvider, createTheme, rem } from '@mantine/core';

const CONTAINER_SIZES: Record<string, number> = {
  xxs: 300,
  xs: 400,
  sm: 500,
  md: 600,
  lg: 700,
  xl: 800,
  xxl: 900,
};

const theme = createTheme({
  components: {
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          '--container-size': fluid
            ? '100%'
            : size !== undefined && size in CONTAINER_SIZES
              ? rem(CONTAINER_SIZES[size])
              : rem(size),
        },
      }),
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Container size="xxs" bg="var(--mantine-color-blue-light)">
        Container with custom size
      </Container>
    </MantineProvider>
  );
}
```
