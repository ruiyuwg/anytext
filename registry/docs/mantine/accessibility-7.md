## Accessibility

`Chip` and `Chip.Group` components are accessible by default – they are built with native radio/checkbox inputs,
all keyboard events work the same as with native controls.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autoContrast | boolean | - | If set, adjusts text color based on background color for filled variant |
| checked | boolean | - | Checked state for controlled component |
| children | React.ReactNode | required | label element associated with the input |
| color | MantineColor | - | Controls components colors based on variant prop. Key of theme.colors or any valid CSS color. |
| defaultChecked | boolean | - | Default checked state for uncontrolled component |
| icon | React.ReactNode | - | Any element or component to replace default icon |
| id | string | - | Unique input id |
| onChange | (checked: boolean) => void | - | Calls when checked state changes |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius |
| rootRef | ForwardedRef | - | Assigns ref of the root element |
| size | MantineSize | - | Controls various properties related to component size |
| type | "checkbox" | "radio" | - | Chip input type |
| wrapperProps | Omit\<DetailedHTMLProps\<HTMLAttributes, HTMLDivElement>, "ref"> & DataAttributes | - | Props passed down to the root element |

#### Styles API

Chip component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Chip selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Chip-root | Root element |
| checkIcon | .mantine-Chip-checkIcon | Check icon, visible when checked prop is true |
| iconWrapper | .mantine-Chip-iconWrapper | Wraps `checkIcon` for alignment |
| input | .mantine-Chip-input | Input element, hidden by default |
| label | .mantine-Chip-label | Input label, used as a chip body |

**Chip CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --chip-fz | Controls `font-size` |
| root | --chip-size | Controls `height` |
| root | --chip-icon-size | Controls width and height of the icon |
| root | --chip-padding | Controls horizontal padding when chip is not checked |
| root | --chip-checked-padding | Controls horizontal padding when chip is checked |
| root | --chip-radius | Controls `border-radius` |
| root | --chip-bg | Controls `background-color` when chip is checked |
| root | --chip-hover | Controls `background-color` when chip is checked and hovered |
| root | --chip-color | Controls `color` when chip is checked |
| root | --chip-bd | Controls border when chip is checked |
| root | --chip-spacing | Controls spacing between check icon and label |

**Chip data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| label | data-checked | Chip is checked | - |
| label | data-disabled | - | - |

### CloseButton

Package: @mantine/core
Import: import { CloseButton } from '@mantine/core';
Description: Button with close icon

## Usage

`CloseButton` renders a button with `X` icon inside. It is used in other Mantine components like [Drawer](https://mantine.dev/core/drawer) or [Modal](https://mantine.dev/core/modal).

#### Example: usage

```tsx
import { CloseButton } from '@mantine/core';

function Demo() {
  return <CloseButton />;
}
```

## Change icon

You can change icon by passing any react node to the `icon` prop.
It is useful when `CloseButton` is used as a part of other components,
for example, in [Drawer](https://mantine.dev/core/drawer) or [Modal](https://mantine.dev/core/modal).
Note that if you use `icon` prop, `iconSize` prop is ignored –
you will have to set icon size manually.

#### Example: icon

```tsx
import { IconXboxX } from '@tabler/icons-react';
import { CloseButton } from '@mantine/core';

function Demo() {
  return <CloseButton icon={<IconXboxX size={18} stroke={1.5} />} />;
}
```
