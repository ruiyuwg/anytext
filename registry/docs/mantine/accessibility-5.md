## Accessibility

To make `Burger` accessible for screen readers, you need to either set `aria-label` or
use [VisuallyHidden](https://mantine.dev/core/visually-hidden) component:

```tsx
import { Burger, VisuallyHidden } from '@mantine/core';

function Demo() {
  return (
    <>
      <Burger aria-label="Toggle navigation" />

      <Burger>
        <VisuallyHidden>Toggle navigation</VisuallyHidden>
      </Burger>
    </>
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| color | MantineColor | - | Key of theme.colors of any valid CSS value, by default theme.white in dark color scheme and theme.black in light |
| lineSize | string | number | - | Controls height of lines, by default calculated based on size prop |
| opened | boolean | - | State of the burger, when true burger is transformed into X |
| size | number | MantineSize | (string & {}) | - | Controls burger width and height, numbers are converted to rem |
| transitionDuration | number | - | transition-duration property value in ms |
| transitionTimingFunction | string | - | transition-timing-function property value |

#### Styles API

Burger component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Burger selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Burger-root | Root element (button) |
| burger | .mantine-Burger-burger | Inner element that contains burger lines |

**Burger CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --burger-line-size | Controls height of lines |
| root | --burger-color | Controls background-color of lines |
| root | --burger-size | Controls width and height of the button |
| root | --burger-transition-duration | Controls transition-duration of lines |
| root | --burger-transition-timing-function | Controls transition-timing-function of lines |

**Burger data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| burger | data-opened | opened prop is set | - |

### Button

Package: @mantine/core
Import: import { Button } from '@mantine/core';
Description: Button component to render button or link

## Usage

#### Example: configurator

```tsx
import { Button } from '@mantine/core';

function Demo() {
  return <Button>Button</Button>;
}
```

## Full width

If `fullWidth` prop is set `Button` will take 100% of parent width:

#### Example: fullWidth

```tsx
import { Button } from '@mantine/core';

function Demo() {
  return <Button fullWidth>Full width button</Button>;
}
```

## Left and right sections

`leftSection` and `rightSection` allow adding icons or any other element to the left and right side of the button.
When a section is added, padding on the corresponding side is reduced.

Note that `leftSection` and `rightSection` are flipped in [RTL](https://mantine.dev/styles/rtl) mode
(`leftSection` is displayed on the right and `rightSection` is displayed on the left).

#### Example: sections

```tsx
import { Group, Button } from '@mantine/core';
import { IconPhoto, IconDownload, IconArrowRight } from '@tabler/icons-react';

function Demo() {
  return (
    <Group justify="center">
      <Button leftSection={<IconPhoto size={14} />} variant="default">
        Gallery
      </Button>

      <Button rightSection={<IconDownload size={14} />}>Download</Button>

      <Button
        variant="light"
        leftSection={<IconPhoto size={14} />}
        rightSection={<IconArrowRight size={14} />}
      >
        Visit gallery
      </Button>
    </Group>
  );
}
```

## Sections position

`justify` prop sets `justify-content` of `inner` element. You can use it to change the alignment of
left and right sections. For example, to spread them across the button set `justify="space-between"`.

If you need to align just one section to the side of the button set `justify` to `space-between`
and add empty `<span />` to the opposite section.

#### Example: sectionsJustify

```tsx
import { Button } from '@mantine/core';
import { IconPhoto } from '@tabler/icons-react';

function Demo() {
  const icon = <IconPhoto size={14} />;
  return (
    <>
      <Button justify="" fullWidth leftSection={icon} rightSection={icon} variant="default">
        Button label
      </Button>

      <Button justify="" fullWidth leftSection={icon} variant="default" mt="md">
        Button label
      </Button>

      <Button justify="" fullWidth rightSection={icon} variant="default" mt="md">
        Button label
      </Button>

      <Button
        justify=""
        fullWidth
        rightSection={icon}
        leftSection={<span />}
        variant="default"
        mt="md"
      >
        Button label
      </Button>
    </>
  );
}
```

## Compact size

`Button` supports `xs` – `xl` and `compact-xs` – `compact-xl` sizes. `compact` sizes have
the same font-size as `xs` – `xl` but reduced padding and height.

#### Example: compact

```tsx
import { Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Button size="md">Regular md</Button>
      <Button size="compact-md">Compact md</Button>
    </Group>
  );
}
```

## Gradient

Button supports Mantine color format in color prop. Color can be specified as:

- Mantine color name (e.g., 'blue')
- CSS color value (e.g., '#fff', 'rgba(255, 255, 255, 0.8)')
- Gradient string (e.g., 'linear-gradient(45deg, blue, red)')

#### Example: gradient

```tsx
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button
      variant="gradient"
      gradient={{ from: 'cyan', to: 'blue', deg: 90 }}
    >
      Gradient button
    </Button>
  );
}
```

## Disabled state

To make `Button` disabled, set `disabled` prop, this will prevent any interactions with the button
and add disabled styles. If you want the button to just look disabled but still be interactive,
set `data-disabled` prop instead. Note that disabled styles are the same for all variants.

#### Example: disabled

```tsx
import { Button } from '@mantine/core';

function Demo() {
  return <Button disabled>Disabled button</Button>;
}
```

## Disabled state when Button is link

`<a />` element does not support `disabled` attribute. To make `Button` disabled when it is
rendered as a link, set `data-disabled` attribute instead and prevent default behavior in
`onClick` event handler.

#### Example: disabledLink

```tsx
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button
      component="a"
      href="https://mantine.dev"
      data-disabled
      onClick={(event) => event.preventDefault()}
    >
      Disabled link
    </Button>
  );
}
```

## Customize disabled styles

To customize disabled styles, it is recommended to use both `&:disabled` and `&[data-disabled]`
selectors:

- `&:disabled` is used to style the button when `disabled` prop is set and
  also when the button is disabled by the parent component (for example, when `disabled` prop is set on a
  `<fieldset />` element which contains `Button`).
- `&[data-disabled]` is used to style the button when it is not actually disabled but should look like
  it is (for example, `data-disabled` should be used if you need to use [Tooltip](https://mantine.dev/core/tooltip) with disabled `Button`
  or when `Button` is used as a link)

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
import { Button } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Button className={classes.button} disabled>
      Disabled with styles
    </Button>
  );
}
```

## Disabled button with Tooltip

`onMouseLeave` event [is not triggered](https://github.com/facebook/react/issues/18753) when `Button` is disabled, so if you need to use
[Tooltip](https://mantine.dev/core/tooltip) with disabled `Button` you need to set `data-disabled` prop on `Button`
instead of `disabled`. Note that it is also required to change `onClick` event handler to
`(event) => event.preventDefault()` as `Button` is not actually disabled and will still trigger
`onClick` event.

#### Example: disabledTooltip

```tsx
import { Button, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Tooltip for disabled button">
      <Button data-disabled onClick={(event) => event.preventDefault()}>
        Disabled button with tooltip
      </Button>
    </Tooltip>
  );
}
```

## Loading state

When `loading` prop is set, `Button` will be disabled and [Loader](https://mantine.dev/core/loader) with overlay will be rendered
in the center of the button. [Loader](https://mantine.dev/core/loader) color depends on `Button` variant.

#### Example: loading

```tsx
import { Button, Group, Switch } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [loading, { toggle }] = useDisclosure();
  return (
    <>
      <Group>
        <Button loading={loading}>Filled button</Button>
        <Button variant="light" loading={loading}>
          Light button
        </Button>
        <Button variant="outline" loading={loading}>
          Outline button
        </Button>
      </Group>

      <Switch checked={loading} onChange={toggle} label="Loading state" mt="md" />
    </>
  );
}
```
