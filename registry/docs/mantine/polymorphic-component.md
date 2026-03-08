## Polymorphic component

Badge is a polymorphic component – its default root element is div, but it can be changed to any other element or component with component prop:

```tsx
import { Badge } from '@mantine/core';

function Demo() {
  return <Badge component="a" />;
}
```

You can also use components in component prop, for example, Next.js Link:

```tsx
import Link from 'next/link';
import { Badge } from '@mantine/core';

function Demo() {
  return <Badge component={Link} href="/" />;
}
```

**Polymorphic components with TypeScript**

Note that polymorphic components props types are different from regular components – they do not extend HTML element props of the default element. For example, BadgeProps does not extend React.ComponentPropsWithoutRef<'div'> although div is the default element.

If you want to create a wrapper for a polymorphic component that is not polymorphic (does not support component prop), then your component props interface should extend HTML element props.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autoContrast | boolean | - | If set, adjusts text color based on background color for filled variant |
| children | React.ReactNode | - | Main badge content |
| circle | boolean | - | If set, badge min-width becomes equal to its height and horizontal padding is removed |
| color | MantineColor | - | Key of theme.colors or any valid CSS color |
| fullWidth | boolean | - | Determines whether Badge should take 100% of its parent width |
| gradient | MantineGradient | - | Gradient configuration used when variant="gradient" |
| leftSection | React.ReactNode | - | Content displayed on the left side of the badge label |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius |
| rightSection | React.ReactNode | - | Content displayed on the right side of the badge label |
| size | MantineSize | (string & {}) | - | Controls font-size, height and horizontal padding |

#### Styles API

Badge component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Badge selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Badge-root | Root element |
| section | .mantine-Badge-section | Left and right sections |
| label | .mantine-Badge-label | Badge children |

**Badge CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --badge-bd | Controls `border` |
| root | --badge-bg | Controls `background` |
| root | --badge-color | Controls text `color` |
| root | --badge-dot-color | Controls dot `color`, only applicable when `variant="dot"` |
| root | --badge-fz | Controls `font-size` |
| root | --badge-height | Controls `height` |
| root | --badge-padding-x | Controls horizontal `padding` |
| root | --badge-radius | Controls `border-radius` |

**Badge data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-block | - | - |
| section | data-position | - | Section position: left or right |

### Blockquote

Package: @mantine/core
Import: import { Blockquote } from '@mantine/core';
Description: Blockquote with optional cite

## Usage

#### Example: usage

```tsx
import { Blockquote } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';

function Demo() {
  const icon = <IconInfoCircle />;
  return (
    <Blockquote cite="– Forrest Gump" icon={icon} mt="xl">
      Life is like an npm install – you never know what you are going to get.
    </Blockquote>
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| cite | React.ReactNode | - | Reference to a cited quote |
| color | MantineColor | - | Key of theme.colors or any valid CSS color |
| icon | React.ReactNode | - | Blockquote icon, displayed at the top left side |
| iconSize | string | number | - | Controls icon width and height, numbers are converted to rem |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius |

#### Styles API

Blockquote component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Blockquote selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Blockquote-root | Root element |
| icon | .mantine-Blockquote-icon | Icon element |
| cite | .mantine-Blockquote-cite | Cite element |

**Blockquote CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --bq-bd | Controls `border` |
| root | --bq-bg-dark | Controls `background-color` in dark color scheme |
| root | --bq-bg-light | Controls `background-color` in light color scheme |
| root | --bq-icon-size | Controls `width` and `height` of the icon |
| root | --bq-radius | Controls `border-radius` |

### Box

Package: @mantine/core
Import: import { Box } from '@mantine/core';
Description: Base component for all Mantine components

## Usage

`Box` component is used as a base for all other components. `Box` supports the following features:

- [component prop](https://mantine.dev/guides/polymorphic)
- [style props](https://mantine.dev/styles/style-props)
- [style prop](https://mantine.dev/styles/style)

You can use `Box` as a base for your own components or as a replacement for HTML elements:

```tsx
import { Box } from '@mantine/core';

function Demo() {
  return (
    <Box bg="red.5" my="xl" component="a" href="/">
      My component
    </Box>
  );
}
```

### Breadcrumbs

Package: @mantine/core
Import: import { Breadcrumbs } from '@mantine/core';
Description: Separates list of react nodes with given separator

## Usage

`Breadcrumbs` component accepts any number of React nodes as children
and adds a given separator (defaults to `/`) between them:

#### Example: usage

```tsx
import { Breadcrumbs, Anchor } from '@mantine/core';

const items = [
  { title: 'Mantine', href: '#' },
  { title: 'Mantine hooks', href: '#' },
  { title: 'use-id', href: '#' },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

function Demo() {
  return (
    <>
      <Breadcrumbs>{items}</Breadcrumbs>
      <Breadcrumbs separator="→" separatorMargin="md" mt="xs">
        {items}
      </Breadcrumbs>
    </>
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | required | React nodes that should be separated with separator |
| separator | React.ReactNode | - | Separator between children |
| separatorMargin | MantineSpacing | - | Controls spacing between separator and breadcrumb |

#### Styles API

Breadcrumbs component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Breadcrumbs selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Breadcrumbs-root | Root element |
| separator | .mantine-Breadcrumbs-separator | Separator between children |
| breadcrumb | .mantine-Breadcrumbs-breadcrumb | Breadcrumb item |

**Breadcrumbs CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --bc-separator-margin | Control left and right `margin` of separator |

### Burger

Package: @mantine/core
Import: import { Burger } from '@mantine/core';
Description: Open/close navigation button

## Usage

`Burger` component renders open/close menu button.
Set `opened` and `onClick` props to control component state.
If `opened` prop is set, cross will be rendered, otherwise – burger.

#### Example: usage

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Burger } from '@mantine/core';

function Demo() {
  const [opened, { toggle }] = useDisclosure();
  return <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" />;
}
```

## Change lines size

#### Example: lineWidth

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Burger } from '@mantine/core';

function Demo() {
  const [opened, { toggle }] = useDisclosure();
  return <Burger size="xl" opened={opened} onClick={toggle} aria-label="Toggle navigation" />;
}
```

## Get element ref

```tsx
import { useRef } from 'react';
import { Burger } from '@mantine/core';

function Demo() {
  const ref = useRef<HTMLButtonElement>(null);
  return <Burger ref={ref} />;
}
```
