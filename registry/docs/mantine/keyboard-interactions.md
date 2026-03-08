## Keyboard interactions

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| arrowOffset | number | - | Arrow offset in px |
| arrowPosition | ArrowPosition | - | Arrow position |
| arrowRadius | number | - | Arrow border-radius in px |
| arrowSize | number | - | Arrow size in px |
| children | React.ReactNode | - | Popover.Target and Popover.Dropdown components |
| clickOutsideEvents | string\[] | - | Events that trigger outside clicks |
| closeOnClickOutside | boolean | - | Determines whether dropdown should be closed on outside clicks |
| closeOnEscape | boolean | - | Determines whether dropdown should be closed when Escape key is pressed |
| defaultOpened | boolean | - | Initial opened state for uncontrolled component |
| disabled | boolean | - | If set, popover dropdown will not be rendered |
| floatingStrategy | FloatingStrategy | - | Changes floating ui [position strategy](https://floating-ui.com/docs/usefloating#strategy) |
| hideDetached | boolean | - | If set, the dropdown is hidden when the element is hidden with styles or not visible on the screen |
| id | string | - | Id base to create accessibility connections |
| keepMounted | boolean | - | If set, the dropdown is not unmounted from the DOM when hidden. display: none styles are added instead. |
| middlewares | PopoverMiddlewares | - | Floating ui middlewares to configure position handling |
| offset | number | FloatingAxesOffsets | - | Offset of the dropdown element |
| onChange | (opened: boolean) => void | - | Called with current state when dropdown opens or closes |
| onClose | () => void | - | Called when dropdown closes |
| onDismiss | () => void | - | Called when the popover is dismissed by clicking outside or by pressing escape |
| onEnterTransitionEnd | () => void | - | Called when enter transition ends |
| onExitTransitionEnd | () => void | - | Called when exit transition ends |
| onOpen | () => void | - | Called when dropdown opens |
| onPositionChange | (position: FloatingPosition) => void | - | Called when dropdown position changes |
| opened | boolean | - | Controlled dropdown opened state |
| overlayProps | OverlayProps & ElementProps<"div"> | - | Props passed down to Overlay component |
| portalProps | BasePortalProps | - | Props to pass down to the Portal when withinPortal is true |
| position | FloatingPosition | - | Dropdown position relative to the target element |
| positionDependencies | any\[] | - | @deprecated : Do not use, will be removed in 9.0 |
| preventPositionChangeWhenVisible | boolean | - | Prevents popover from flipping/shifting when it the dropdown is visible |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius |
| returnFocus | boolean | - | Determines whether focus should be automatically returned to control when dropdown closes |
| shadow | MantineShadow | - | Key of theme.shadows or any other valid CSS box-shadow value |
| transitionProps | TransitionProps | - | Props passed down to the Transition component. Use to configure duration and animation type. |
| trapFocus | boolean | - | Determines whether focus should be trapped within dropdown |
| width | PopoverWidth | - | Dropdown width, or 'target' to make dropdown width the same as target element |
| withArrow | boolean | - | Determines whether component should have an arrow |
| withOverlay | boolean | - | Determines whether the overlay should be displayed when the dropdown is opened |
| withRoles | boolean | - | Determines whether dropdown and target elements should have accessible roles |
| withinPortal | boolean | - | Determines whether dropdown should be rendered within the Portal |
| zIndex | string | number | - | Dropdown z-index |

#### Styles API

Popover component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Popover selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| dropdown | .mantine-Popover-dropdown | Dropdown element |
| arrow | .mantine-Popover-arrow | Dropdown arrow |
| overlay | .mantine-Popover-overlay | Overlay element |

**Popover CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| dropdown | --popover-radius | Controls dropdown border-radius |
| dropdown | --popover-shadow | Controls dropdown box-shadow |

**Popover data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| dropdown | data-position | - | Value of floating ui dropdown position |

### Portal

Package: @mantine/core
Import: import { Portal } from '@mantine/core';
Description: Renders component outside of parent element tree

## Usage

Portal is a wrapper component for [ReactDOM.createPortal](https://reactjs.org/docs/portals.html) API.
Render any component or element at the end of `document.body` or at a given element. [Modal](https://mantine.dev/core/modal/) and [Drawer](https://mantine.dev/core/drawer/) components are wrapped in Portal by default.

Use Portal to render a component or an element at a different place (defaults to the end of `document.body`).
Portal is useful when you want to prevent parent styles from interfering with children,
usually all these styles are related to `position` and `z-index` properties
and portals are used for components with fixed position, for example, modals.

```tsx
import { useState } from 'react';
import { Portal } from '@mantine/core';

function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <main style={{ position: 'relative', zIndex: 1 }}>
      {opened && (
        <Portal>
          <div>Your modal content</div>
        </Portal>
      )}

      <button onClick={() => setOpened(true)} type="button">
        Open modal
      </button>
    </main>
  );
}
```

In the example above, the div element is rendered outside of parent main (before closing body tag),
but still receives `opened` and `onClose` props. The element will not be affected by parent z-index.

## Reuse target node

By default, Portal reuses the same target node for all instances (`reuseTargetNode={true}`).
To create a new target node for each instance, set `reuseTargetNode={false}`. In the following
example, all three paragraphs will be rendered in the same target node:

```tsx
import { Portal } from '@mantine/core';

function Demo() {
  return (
    <>
      <Portal reuseTargetNode>
        <p>First</p>
      </Portal>

      <Portal reuseTargetNode>
        <p>Second</p>
      </Portal>

      <Portal reuseTargetNode>
        <p>Third</p>
      </Portal>
    </>
  );
}
```

## Specify target DOM node

You can specify dom node where portal will be rendered by passing `target` prop:

```tsx
import { Portal } from '@mantine/core';

const container = document.createElement('div');
document.body.appendChild(container);

function Demo() {
  return <Portal target={container}>My portal</Portal>;
}
```

Alternatively, you can specify selector to render portal in existing element:

```tsx
import { Portal } from '@mantine/core';

function Demo() {
  return <Portal target="#portal-container">My portal</Portal>;
}
```

If you don't specify the target element, new one will be created and appended to the `document.body` for each Portal component.

## Server side rendering

`createPortal` is not supported during server side rendering.
All components inside Portal are rendered only after the application was mounted to the dom.

## OptionalPortal component

`OptionalPortal` component lets you configure whether children should be rendered in `Portal`.
It accepts the same props as the `Portal` component:

```tsx
import { OptionalPortal } from '@mantine/core';

function Demo() {
  return (
    <>
      <OptionalPortal withinPortal>
        This text is rendered in Portal
      </OptionalPortal>
      <OptionalPortal withinPortal={false}>
        This text is rendered as regular child
      </OptionalPortal>
    </>
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | required | Portal children, for example, custom modal or popover |
| reuseTargetNode | boolean | - | If set, all portals are rendered in the same DOM node |
| target | string | HTMLElement | - | Element inside which portal should be created, by default a new div element is created and appended to the document.body |

### Progress

Package: @mantine/core
Import: import { Progress } from '@mantine/core';
Description: Give user feedback for status of the task

## Usage

#### Example: usage

```tsx
import { Progress } from '@mantine/core';

function Demo() {
  return <Progress />;
}
```

## Compound components

#### Example: compound

```tsx
import { Progress } from '@mantine/core';

function Demo() {
  return (
    <Progress.Root size="xl">
      <Progress.Section value={35} color="cyan">
        <Progress.Label>Documents</Progress.Label>
      </Progress.Section>
      <Progress.Section value={28} color="pink">
        <Progress.Label>Photos</Progress.Label>
      </Progress.Section>
      <Progress.Section value={15} color="orange">
        <Progress.Label>Other</Progress.Label>
      </Progress.Section>
    </Progress.Root>
  );
}
```

## Vertical orientation

#### Example: vertical

```tsx
import { Progress } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Progress value={80} orientation="vertical" h={200} />
      <Progress value={60} color="orange" size="xl" orientation="vertical" h={200} animated />

      <Progress.Root size="xl" autoContrast orientation="vertical" h={200}>
        <Progress.Section value={40} color="lime.4">
          <Progress.Label>Documents</Progress.Label>
        </Progress.Section>
        <Progress.Section value={20} color="yellow.4">
          <Progress.Label>Apps</Progress.Label>
        </Progress.Section>
        <Progress.Section value={20} color="cyan.7">
          <Progress.Label>Other</Progress.Label>
        </Progress.Section>
      </Progress.Root>
    </Group>
  );
}
```

## With tooltips

#### Example: tooltips

```tsx
import { Progress, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Progress.Root size={40}>
      <Tooltip label="Documents – 33Gb">
        <Progress.Section value={33} color="cyan">
          <Progress.Label>Documents</Progress.Label>
        </Progress.Section>
      </Tooltip>

      <Tooltip label="Photos – 28Gb">
        <Progress.Section value={28} color="pink">
          <Progress.Label>Photos</Progress.Label>
        </Progress.Section>
      </Tooltip>

      <Tooltip label="Other – 15Gb">
        <Progress.Section value={15} color="orange">
          <Progress.Label>Other</Progress.Label>
        </Progress.Section>
      </Tooltip>
    </Progress.Root>
  );
}
```

## Section width transition

Set `transitionDuration` to a number of ms to enable width transition:

#### Example: transition

```tsx
import { useState } from 'react';
import { Button, Progress } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(50);
  return (
    <>
      <Progress value={value} size="lg" transitionDuration={200} />
      <Button onClick={() => setValue(Math.random() * 100)} mt="md">
        Set random value
      </Button>
    </>
  );
}
```
