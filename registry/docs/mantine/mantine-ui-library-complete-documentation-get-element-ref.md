## Get element ref

```tsx
import { useRef } from 'react';
import { NavLink } from '@mantine/core';

function Demo() {
  const ref = useRef<HTMLAnchorElement>(null);
  return <NavLink ref={ref} />;
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| active | boolean | - | Determines whether the link should have active styles |
| autoContrast | boolean | - | If set, adjusts text color based on background color for filled variant |
| children | React.ReactNode | - | Child NavLink components |
| childrenOffset | MantineSpacing | - | Key of theme.spacing or any valid CSS value to set collapsed links padding-left |
| color | MantineColor | - | Key of theme.colors of any valid CSS color to control active styles |
| defaultOpened | boolean | - | Uncontrolled nested items collapse initial state |
| description | React.ReactNode | - | Link description, displayed below the label |
| disableRightSectionRotation | boolean | - | If set, right section will not be rotated when collapse is opened |
| disabled | boolean | - | If set, disabled styles will be added to the root element |
| label | React.ReactNode | - | Main link label |
| leftSection | React.ReactNode | - | Section displayed on the left side of the label |
| noWrap | boolean | - | If set, label and description do not wrap to the next line |
| onChange | (opened: boolean) => void | - | Called when open state changes |
| onClick | MouseEventHandler | - | Called when the root element is clicked |
| onKeyDown | KeyboardEventHandler | - | Called on keydown of the root element |
| opened | boolean | - | Controlled nested items collapse state |
| rightSection | React.ReactNode | - | Section displayed on the right side of the label |

#### Styles API

NavLink component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**NavLink selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-NavLink-root | Root element |
| body | .mantine-NavLink-body | Contains label and description |
| section | .mantine-NavLink-section | Left and right sections |
| label | .mantine-NavLink-label | NavLink label |
| description | .mantine-NavLink-description | Dimmed description displayed below the label |
| children | .mantine-NavLink-children | Wrapper around nested links |
| chevron | .mantine-NavLink-chevron | Default chevron icon |
| collapse | .mantine-NavLink-collapse | Nested links Collapse container |

**NavLink CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --nl-bg | Controls link `background-color` |
| root | --nl-color | Controls link `color` |
| root | --nl-hover | Controls link `background-color` when hovered |

**NavLink data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-active | - | - |

### Notification

Package: @mantine/core
Import: import { Notification } from '@mantine/core';
Description: Show dynamic notifications and alerts to user, part of notifications system

## Usage

Notification is a base component for notification system.
Build your own or use [@mantine/notifications](https://mantine.dev/x/notifications/) package.

#### Example: configurator

```tsx
import { Notification } from '@mantine/core';

function Demo() {
  return (
    <Notification>
      {{children}}
    </Notification>
  );
}
```

## With icon

#### Example: icon

```tsx
import { IconX, IconCheck } from '@tabler/icons-react';
import { Notification } from '@mantine/core';

function Demo() {
  const xIcon = <IconX size={20} />;
  const checkIcon = <IconCheck size={20} />;

  return (
    <>
      <Notification icon={xIcon} color="red" title="Bummer!">
        Something went wrong
      </Notification>
      <Notification icon={checkIcon} color="teal" title="All good!" mt="md">
        Everything is fine
      </Notification>
    </>
  );
}
```

#### Example: stylesApi

```tsx
import { Notification } from '@mantine/core';

function Demo() {
  return (
    <Notification title="We notify you that">
      You are now obligated to give a star to Mantine project on GitHub
    </Notification>
  );
}
```
