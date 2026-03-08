## Accessibility

Accordion component implement [WAI-ARIA accessibility recommendations](https://www.w3.org/TR/wai-aria-practices-1.1/examples/accordion/accordion.html).

Set `order` on `Accordion` component to wrap accordion controls with `h2`-`h6` headings.
The following example wraps controls with `h3` tags:

```tsx
import { Accordion } from '@mantine/core';

function Demo() {
  return <Accordion order={3}>{/* ...items */}</Accordion>;
}
```

Keyboard interactions:

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| chevron | React.ReactNode | - | Custom chevron icon |
| chevronIconSize | string | number | - | Size of the default chevron icon. Ignored when chevron prop is set. |
| chevronPosition | AccordionChevronPosition | - | Position of the chevron relative to the item label |
| chevronSize | string | number | - | Size of the chevron icon container |
| defaultValue | string | string\[] | null | - | Uncontrolled component default value |
| disableChevronRotation | boolean | - | If set, chevron rotation is disabled |
| loop | boolean | - | If set, arrow keys loop though items (first to last and last to first) |
| multiple | boolean | - | If set, multiple items can be opened at the same time |
| onChange | (value: AccordionValue) => void | - | Called when value changes, payload type depends on multiple prop |
| order | 2 | 3 | 4 | 5 | 6 | - | Heading order, has no effect on visuals |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius. Numbers are converted to rem. |
| transitionDuration | number | - | Transition duration in ms |
| value | string | string\[] | null | - | Controlled component value |

#### Styles API

Accordion component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Accordion selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Accordion-root | Root element |
| item | .mantine-Accordion-item | `Accordion.Item` root element |
| control | .mantine-Accordion-control | `Accordion.Control` root element |
| chevron | .mantine-Accordion-chevron | `Accordion.Control` chevron container element |
| label | .mantine-Accordion-label | `Accordion.Control` label |
| icon | .mantine-Accordion-icon | `Accordion.Control` icon |
| itemTitle | .mantine-Accordion-itemTitle | `Accordion.Control` title (h2-h6) tag |
| panel | .mantine-Accordion-panel | `Accordion.Panel` root element |
| content | .mantine-Accordion-content | Wrapper element of `Accordion.Panel` `children` |

**Accordion CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --accordion-chevron-size | Controls chevron container element `width` and `min-width` |
| root | --accordion-radius | Controls `border-radius` in various elements, depending on variant |
| root | --accordion-transition-duration | Controls all animations `transition-duration` |

### ActionIcon

Package: @mantine/core
Import: import { ActionIcon } from '@mantine/core';
Description: Icon button

## Usage

#### Example: usage

```tsx
import { ActionIcon } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon aria-label="Settings">
      <IconAdjustments style={{ width: '70%', height: '70%' }} stroke={1.5} />
    </ActionIcon>
  );
}
```

## Gradient

ActionIcon supports Mantine color format in color prop. Color can be specified as:

- Mantine color name (e.g., 'blue')
- CSS color value (e.g., '#fff', 'rgba(255, 255, 255, 0.8)')
- Gradient string (e.g., 'linear-gradient(45deg, blue, red)')

#### Example: gradient

```tsx
import { ActionIcon } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon
      variant="gradient"
      size="xl"
      aria-label="Gradient action icon"
      gradient={{ from: 'cyan', to: 'blue', deg: 90 }}
    >
      <IconHeart />
    </ActionIcon>
  );
}
```

## Size

You can use any valid CSS value in `size` prop, it is used to set `width`, `min-width`, `min-height` and `height`
properties. Note that `size` prop does not control child [icon](https://mantine.dev/guides/icons) size, you need to
set it manually on icon component. When `size` is a number, the value is treated as `px` units and
converted to [rem](https://mantine.dev/styles/rem) units.

#### Example: size

```tsx
import { ActionIcon } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon size={42} variant="default" aria-label="ActionIcon with size as a number">
      <IconHeart size={24} />
    </ActionIcon>
  );
}
```

If you want `ActionIcon` to have the same size as Mantine inputs, use `size="input-sm"` prop:

#### Example: inputSize

```tsx
import { ActionIcon, Group, TextInput } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <TextInput placeholder="sm size input" size="sm" />
      <ActionIcon size="input-sm" variant="default" aria-label="ActionIcon the same size as inputs">
        SM
      </ActionIcon>
    </Group>
  );
}
```

## Disabled state

To make `ActionIcon` disabled set `disabled` prop, this will prevent any interactions with the button
and add disabled styles. If you want the button to just look disabled but still be interactive,
set `data-disabled` prop instead. Note that disabled styles are the same for all variants.

#### Example: disabled

```tsx
import { ActionIcon, Group } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <Group justify="center">
      <ActionIcon size="xl" disabled aria-label="Disabled and not interactive">
        <IconHeart />
      </ActionIcon>

      <ActionIcon size="xl" data-disabled aria-label="Has disabled styles but still interactive">
        <IconHeart />
      </ActionIcon>
    </Group>
  );
}
```

## Disabled state when ActionIcon is link

`<a />` element does not support `disabled` attribute. To make `ActionIcon` disabled when it is
rendered as a link, set `data-disabled` attribute instead and prevent default behavior in
`onClick` event handler.

#### Example: disabledLink

```tsx
import { ActionIcon } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon
      component="a"
      href="https://mantine.dev"
      data-disabled
      size="xl"
      aria-label="Open in a new tab"
      onClick={(event) => event.preventDefault()}
    >
      <IconExternalLink />
    </ActionIcon>
  );
}
```

## Customize disabled styles

To customize disabled styles, it is recommended to use both `&:disabled` and `&[data-disabled]`
selectors:

- `&:disabled` is used to style the button when `disabled` prop is set and
  also when the button is disabled by the parent component (for example, when `disabled` prop is set on a
  `<fieldset />` element which contains `ActionIcon`).
- `&[data-disabled]` is used to style the button when it is not actually disabled but should look like
  it is (for example, `data-disabled` should be used if you need to use [Tooltip](https://mantine.dev/core/tooltip) with disabled `ActionIcon`
  or when `ActionIcon` is used as a link)

#### Example: disabledStyles

```tsx
// Demo.module.css
.button {
  &:disabled,
  &[data-disabled] {
    border-color: light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4));
    background-color: transparent;
  }
}

// Demo.tsx
import { ActionIcon } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import classes from './Demo.module.css';

function Demo() {
  return (
    <ActionIcon size="xl" className={classes.button} disabled aria-label="Disabled with styles">
      <IconHeart />
    </ActionIcon>
  );
}
```

## Disabled button with Tooltip

`onMouseLeave` event [is not triggered](https://github.com/facebook/react/issues/18753) when `ActionIcon` is disabled, so if you need to use
[Tooltip](https://mantine.dev/core/tooltip) with disabled `ActionIcon` you need to set `data-disabled` prop on `ActionIcon`
instead of `disabled`. Note that it is also required to change `onClick` event handler to
`(event) => event.preventDefault()` as `ActionIcon` is not actually disabled and will still trigger
`onClick` event.

#### Example: disabledTooltip

```tsx
import { ActionIcon, Tooltip } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <Tooltip label="Tooltip for disabled button">
      <ActionIcon size="xl" data-disabled onClick={(event) => event.preventDefault()}>
        <IconHeart />
      </ActionIcon>
    </Tooltip>
  );
}
```

## Loading state

When `loading` prop is set, `ActionIcon` will be disabled and [Loader](https://mantine.dev/core/loader) with overlay will be rendered
in the center of the button. [Loader](https://mantine.dev/core/loader) color depends on `ActionIcon` variant.

#### Example: loading

```tsx
import { ActionIcon, Group, Switch } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  const [loading, { toggle }] = useDisclosure();
  return (
    <>
      <Group>
        <ActionIcon loading={loading}>
          <IconHeart size={18} stroke={1.5} />
        </ActionIcon>
        <ActionIcon variant="light" loading={loading}>
          <IconHeart size={18} stroke={1.5} />
        </ActionIcon>
        <ActionIcon variant="outline" loading={loading}>
          <IconHeart size={18} stroke={1.5} />
        </ActionIcon>
      </Group>

      <Switch checked={loading} onChange={toggle} label="Loading state" mt="md" />
    </>
  );
}
```

## Loader props

You can customize [Loader](https://mantine.dev/core/loader) with `loaderProps` prop, it accepts all props that
[Loader](https://mantine.dev/core/loader) component has:

#### Example: loaderProps

```tsx
import { ActionIcon } from '@mantine/core';

function Demo() {
  return <ActionIcon size="xl" loading loaderProps={{ type: 'dots' }} />;
}
```

## Add custom variants

To add new `ActionIcon` variants, use [data-variant](https://mantine.dev/styles/variants-sizes) attribute.
Usually new variants are added on [theme](https://mantine.dev/theming/theme-object), this way they are
available in all `ActionIcon` components in your application.

#### Example: customVariant

```tsx
// Demo.tsx
import { Group, ActionIcon, MantineProvider, createTheme } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    ActionIcon: ActionIcon.extend({
      classNames: classes,
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group justify="center">
        <ActionIcon size="xl" variant="danger" aria-label="Danger variant">
          <IconHeart />
        </ActionIcon>
        <ActionIcon size="xl" variant="primary" aria-label="Primary variant">
          <IconHeart />
        </ActionIcon>
      </Group>
    </MantineProvider>
  );
}

// Demo.module.css
.root {
  &[data-variant='danger'] {
    background-color: var(--mantine-color-red-9);
    color: var(--mantine-color-red-0);
  }

  &[data-variant='primary'] {
    background: linear-gradient(45deg, #4b6cb7 10%, #253b67 90%);
    color: var(--mantine-color-white);
  }
}
```
