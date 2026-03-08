## Example: Tabs

#### Example: tabs

```tsx
// Demo.tsx
import { useState } from 'react';
import { FloatingIndicator, Tabs } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [value, setValue] = useState<string | null>('1');
  const [controlsRefs, setControlsRefs] = useState<Record<string, HTMLButtonElement | null>>({});
  const setControlRef = (val: string) => (node: HTMLButtonElement) => {
    controlsRefs[val] = node;
    setControlsRefs(controlsRefs);
  };

  return (
    <Tabs variant="none" value={value} onChange={setValue}>
      <Tabs.List ref={setRootRef} className={classes.list}>
        <Tabs.Tab value="1" ref={setControlRef('1')} className={classes.tab}>
          First tab
        </Tabs.Tab>
        <Tabs.Tab value="2" ref={setControlRef('2')} className={classes.tab}>
          Second tab
        </Tabs.Tab>
        <Tabs.Tab value="3" ref={setControlRef('3')} className={classes.tab}>
          Third tab
        </Tabs.Tab>

        <FloatingIndicator
          target={value ? controlsRefs[value] : null}
          parent={rootRef}
          className={classes.indicator}
        />
      </Tabs.List>

      <Tabs.Panel value="1">First tab content</Tabs.Panel>
      <Tabs.Panel value="2">Second tab content</Tabs.Panel>
      <Tabs.Panel value="3">Third tab content</Tabs.Panel>
    </Tabs>
  );
}

// Demo.module.css
.list {
  position: relative;
  margin-bottom: var(--mantine-spacing-md);
}

.indicator {
  background-color: var(--mantine-color-white);
  border-radius: var(--mantine-radius-md);
  border: 1px solid var(--mantine-color-gray-2);
  box-shadow: var(--mantine-shadow-sm);

  @mixin dark {
    background-color: var(--mantine-color-dark-6);
    border-color: var(--mantine-color-dark-4);
  }
}

.tab {
  z-index: 1;
  font-weight: 500;
  transition: color 100ms ease;
  color: var(--mantine-color-gray-7);

  &[data-active] {
    color: var(--mantine-color-black);
  }

  @mixin dark {
    color: var(--mantine-color-dark-1);

    &[data-active] {
      color: var(--mantine-color-white);
    }
  }
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| displayAfterTransitionEnd | boolean | - | If set, the indicator is displayed after transition ends.
Should be set if the component is used inside a container that has transform: scale(n) styles. |
| parent | HTMLElement | null | required | Parent element with relative position based on which indicator position is calculated |
| target | HTMLElement | null | required | Target element over which indicator is displayed |
| transitionDuration | string | number | - | Transition duration in ms |

#### Styles API

FloatingIndicator component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**FloatingIndicator selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-FloatingIndicator-root | Root element |

**FloatingIndicator CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --transition-duration | Controls indicator transition duration |

### FocusTrap

Package: @mantine/core
Import: import { FocusTrap } from '@mantine/core';
Description: Trap focus at child node

## Usage

FocusTrap is a component implementation of [use-focus-trap](https://mantine.dev/hooks/use-focus-trap/) hook,
it is used in all Mantine components that require focus trap ([Modal](https://mantine.dev/core/modal/), [DatePicker](https://mantine.dev/dates/date-picker/), [Popover](https://mantine.dev/core/popover/), etc.).

#### Example: usage

```tsx
import { useDisclosure } from '@mantine/hooks';
import { FocusTrap, TextInput, Button, Box } from '@mantine/core';

function Demo() {
  const [active, { toggle }] = useDisclosure(false);

  return (
    <Box maw={400} mx="auto">
      <Button onClick={toggle}>{active ? 'Deactivate' : 'Activate'} focus trap</Button>

      <FocusTrap active={active}>
        <div>
          <TextInput mt="sm" label="First input" placeholder="First input" />
          <TextInput mt="sm" label="Second input" placeholder="Second input" />
          <TextInput mt="sm" label="Third input" placeholder="Third input" />
        </div>
      </FocusTrap>
    </Box>
  );
}
```

## Initial focus

To define the element that will receive initial focus set `data-autofocus` attribute:

#### Example: initial

```tsx
import { useDisclosure } from '@mantine/hooks';
import { FocusTrap, TextInput, Button, Box } from '@mantine/core';

function Demo() {
  const [active, { toggle }] = useDisclosure(false);

  return (
    <Box maw={400} mx="auto">
      <Button onClick={toggle}>{active ? 'Deactivate' : 'Activate'} focus trap</Button>

      <FocusTrap active={active}>
        <div>
          <TextInput mt="sm" label="First input" placeholder="First input" />
          <TextInput mt="sm" label="Second input" placeholder="Second input" data-autofocus />
          <TextInput mt="sm" label="Third input" placeholder="Third input" />
        </div>
      </FocusTrap>
    </Box>
  );
}
```

## FocusTrap.InitialFocus

`FocusTrap.InitialFocus` is a special component that adds a visually hidden
element which will receive the focus when the focus trap is activated.
Once `FocusTrap.InitialFocus` loses focus, it is removed from the tab order.

For example, it is useful if you do not want to focus any elements inside the [Modal](https://mantine.dev/core/modal) when it is opened:

#### Example: initialFocusTrap

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, TextInput, FocusTrap } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Focus demo">
        <FocusTrap.InitialFocus />
        <TextInput label="First input" placeholder="First input" />
        <TextInput
          data-autofocus
          label="Input with initial focus"
          placeholder="It has data-autofocus attribute"
          mt="md"
        />
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
```

## Focus trapping logic

- Focus is trapped within child node if `active` prop is `true`
- When FocusTrap component is mounted or when `active` prop changes from `false` to `true` first element with `data-autofocus` attribute is focused
- If there are no elements with `data-autofocus` attribute, then the first element that supports keyboard interaction is focused
- If the target element does not have focusable elements or does not support `ref`, then the focus trap will not work
- Trap stops working when element outside of the `FocusTrap` child is focused

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| active | boolean | - | If set to false, disables focus trap |
| children | any | required | Element to trap focus at, must support ref prop |
| innerRef | ForwardedRef | - | Ref to combine with the focus trap ref |
| refProp | string | - | Prop that is used to access element ref |

### Grid

Package: @mantine/core
Import: import { Grid } from '@mantine/core';
Description: Responsive 12 columns grid system

## Usage

#### Example: usage

```tsx
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={4}>1</Grid.Col>
      <Grid.Col span={4}>2</Grid.Col>
      <Grid.Col span={4}>3</Grid.Col>
    </Grid>
  );
}
```

## Columns span

`Grid.Col` `span` prop controls the ratio of column width to the total width of the row.
By default, grid uses 12 columns layout, so `span` prop can be any number from 1 to 12.

Examples:

- `<Grid.Col span={3} />` – 3 / 12 = 25% of row width
- `<Grid.Col span={4} />` – 4 / 12 = 33% of row width
- `<Grid.Col span={6} />` – 6 / 12 = 50% of row width
- `<Grid.Col span={12} />` – 12 / 12 = 100% of row width

`span` prop also supports object syntax to change column width based on viewport width,
it accepts `xs`, `sm`, `md`, `lg` and `xl` keys and values from 1 to 12. The syntax
is the same as in [style props](https://mantine.dev/styles/style-props).

In the following example `span={{ base: 12, md: 6, lg: 3 }}`:

- `base` – 12 / 12 = 100% of row width when viewport width is less than `md` breakpoint
- `md` – 6 / 12 = 50% of row width when viewport width is between `md` and `lg` breakpoints
- `lg` – 3 / 12 = 25% of row width when viewport width is greater than `lg` breakpoint

#### Example: responsive

```tsx
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>1</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>2</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>3</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>4</Grid.Col>
    </Grid>
  );
}
```

## Gutter

Set `gutter` prop to control spacing between columns. The prop works the same
way as [style props](https://mantine.dev/styles/style-props) – you can reference `theme.spacing` values
with `xs`, `sm`, `md`, `lg` and `xl` strings and use object syntax to change gutter
based on viewport width:

#### Example: gutter

```tsx
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>
      <Grid.Col span={4}>1</Grid.Col>
      <Grid.Col span={4}>2</Grid.Col>
      <Grid.Col span={4}>3</Grid.Col>
    </Grid>
  );
}
```

## Grow

If `grow` prop is set, column will grow to fill the remaining space in the row:

#### Example: growConfigurator

```tsx
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={4}>1</Grid.Col>
      <Grid.Col span={4}>2</Grid.Col>
      <Grid.Col span={4}>3</Grid.Col>
      <Grid.Col span={4}>4</Grid.Col>
      <Grid.Col span={4}>5</Grid.Col>
    </Grid>
  );
}
```

## Column offset

Set `offset` prop on `Grid.Col` component to add gaps to the grid. `offset` prop
supports the same syntax as `span` prop: a number from 1 to 12 or an object with `xs`, `sm`, `md`, `lg` and `xl` keys and values from 1 to 12.

#### Example: offset

```tsx
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={3}>1</Grid.Col>
      <Grid.Col span={3}>2</Grid.Col>
      <Grid.Col span={3} offset={3}>3</Grid.Col>
    </Grid>
  );
}
```

## Order

Set the `order` prop on `Grid.Col` component to change the order of columns. `order` prop
supports the same syntax as `span` prop: a number from 1 to 12 or an object with `xs`, `sm`, `md`, `lg` and `xl` keys and values from 1 to 12.

#### Example: order

```tsx
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={3} order={{ base: 2, sm: 1, lg: 3 }}>2</Grid.Col>
      <Grid.Col span={3} order={{ base: 3, sm: 2, lg: 2 }}>3</Grid.Col>
      <Grid.Col span={3} order={{ base: 1, sm: 3, lg: 1 }}>1</Grid.Col>
    </Grid>
  );
}
```

## Multiple rows

Once columns `span` and `offset` sum exceeds `columns` prop (12 by default),
columns are moved to the next row:

#### Example: rows

```tsx
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={4}>1</Grid.Col>
      <Grid.Col span={4}>2</Grid.Col>
      <Grid.Col span={4}>3</Grid.Col>
      <Grid.Col span={4}>4</Grid.Col>
    </Grid>
  );
}
```

## Justify and align

You can control `justify-content` and `align-items` CSS properties with `justify` and `align` props on `Grid` component:

#### Example: flexConfigurator

```tsx
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={3} h={80}>1</Grid.Col>
      <Grid.Col span={3} h={120}>2</Grid.Col>
      <Grid.Col span={3} h={100}>3</Grid.Col>
    </Grid>
  );
}
```

## Auto sized columns

All columns in a row with `span="auto"` grow as much as they can to fill the row.
In the following example, the second column takes up 50% of the row while the other two columns automatically resize to fill the remaining space:

#### Example: auto

```tsx
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span="auto">1</Grid.Col>
      <Grid.Col span={6}>2</Grid.Col>
      <Grid.Col span="auto">3</Grid.Col>
    </Grid>
  );
}
```

## Fit column content

If you set `span="content"`, the column's size will automatically adjust to match the width of its content:

#### Example: content

```tsx
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span="content">fit content</Grid.Col>
      <Grid.Col span={6}>2</Grid.Col>
    </Grid>
  );
}
```

## Change columns count

By default, grid uses 12 columns layout, you can change it by setting `columns` prop on `Grid` component.
Note that in this case, columns span and offset will be calculated relative to this value.

In the following example, first column takes 50% with 12 span (12/24), second and third take 25% (6/24):

#### Example: columns

```tsx
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid columns={24}>
      <Grid.Col span={12}>1</Grid.Col>
      <Grid.Col span={6}>2</Grid.Col>
      <Grid.Col span={6}>3</Grid.Col>
    </Grid>
  );
}
```

## Container queries

To use [container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries)
instead of media queries, set `type="container"`. With container queries, all responsive values
are adjusted based on the container width, not the viewport width.

Note that, when using container queries, it is also required to set `breakpoints` prop
to the exact container width values.

To see how the grid changes, resize the root element of the demo
with the resize handle located at the bottom right corner of the demo:

#### Example: container

```tsx
import { Grid } from '@mantine/core';

function Demo() {
  return (
    // Wrapper div is added for demonstration purposes only.
    // It is not required in real projects.
    <div style={{ resize: 'horizontal', overflow: 'hidden', maxWidth: '100%' }}>
      <Grid
        type="container"
        breakpoints={{ xs: '100px', sm: '200px', md: '300px', lg: '400px', xl: '500px' }}
      >
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>1</Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>2</Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>3</Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>4</Grid.Col>
      </Grid>
    </div>
  );
}
```
