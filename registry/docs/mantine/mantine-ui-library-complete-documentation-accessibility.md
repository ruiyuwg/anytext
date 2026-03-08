## Accessibility

To make `ActionIcon` accessible for screen readers, you need to either set `aria-label` or
use [VisuallyHidden](https://mantine.dev/core/visually-hidden) component:

```tsx
import { IconHeart } from '@tabler/icons-react';
import { ActionIcon, VisuallyHidden } from '@mantine/core';

function Demo() {
  return (
    <>
      <ActionIcon aria-label="Like post">
        <IconHeart />
      </ActionIcon>

      <ActionIcon>
        <VisuallyHidden>Like post</VisuallyHidden>
        <IconHeart />
      </ActionIcon>
    </>
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autoContrast | boolean | - | If set, adjusts text color based on background color for filled variant |
| children | React.ReactNode | - | Icon element |
| color | MantineColor | - | Key of theme.colors or any valid CSS color. |
| disabled | boolean | - | Sets disabled attribute, prevents interactions |
| gradient | MantineGradient | - | Gradient values used with variant="gradient". |
| loaderProps | LoaderProps | - | Props passed down to the Loader component. Ignored when loading prop is not set. |
| loading | boolean | - | If set, Loader component is displayed instead of the children |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius. Numbers are converted to rem. |
| size | number | MantineSize | (string & {}) | "input-xs" | "input-sm" | "input-md" | "input-lg" | "input-xl" | - | Controls width and height of the button. Numbers are converted to rem. |

#### Styles API

ActionIcon component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**ActionIcon selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-ActionIcon-root | Root element |
| loader | .mantine-ActionIcon-loader | `Loader` component, rendered inside root element when `loading` prop is set |
| icon | .mantine-ActionIcon-icon | Inner icon wrapper |

**ActionIcon CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --ai-bg | Controls `background` |
| root | --ai-hover | Controls `background` when hovered |
| root | --ai-bd | Controls `border` |
| root | --ai-color | Controls icon `color` |
| root | --ai-hover-color | Controls icon `color` when hovered |
| root | --ai-radius | Controls `border-radius` |
| root | --ai-size | Controls `width`, `height`, `min-width` and `min-height` styles |

**ActionIcon data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-disabled | - | - |

**ActionIcon.Group selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| group | .mantine-ActionIconGroup-group | Root element |

**ActionIcon.Group CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|

**ActionIcon.Group data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| group | data-orientation | - | Value of  |

### Affix

Package: @mantine/core
Import: import { Affix } from '@mantine/core';
Description: Renders children inside portal at fixed position
