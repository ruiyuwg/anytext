## Accessibility

Menu follows [WAI-ARIA recommendations](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/examples/menu-button-links/):

- Dropdown element has `role="menu"` and `aria-labelledby="target-id"` attributes
- Target element has `aria-haspopup="menu"`, `aria-expanded`, `aria-controls="dropdown-id"` attributes
- Menu item has `role="menuitem"` attribute

Whilst the dropdown is unopened, the `aria-controls` attribute will be undefined

### Supported target elements

Uncontrolled Menu with `trigger="click"` (default) will be accessible only when used with `button` element or component that renders it ([Button](https://mantine.dev/core/button/), [ActionIcon](https://mantine.dev/core/action-icon/), etc.).
Other elements will not support `Space` and `Enter` key presses.

### Hover menu

Menu with `trigger="hover"` is not accessible – it cannot be accessed with keyboard, use it only if you do not care about accessibility. If you need click-hover hover and click triggers, use `trigger="click-hover"`.

### Navigation

If you are using the Menu to build a Navigation, you can use the options from the demo below to follow the [WAI-ARIA recommendations for navigation](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/).

#### Example: navigation

```tsx
import { Group, Menu } from '@mantine/core';

function Demo() {
  const menus = Array(4)
    .fill(0)
    .map((e, i) => (
      <Menu
        key={i}
        trigger="click-hover"
        loop={false}
        withinPortal={false}
        trapFocus={false}
        menuItemTabIndex={0}
      >
        {/* ... menu items */}
      </Menu>
    ));
  return <Group>{menus}</Group>;
}
```

### Keyboard interactions

If you also need to support `Tab` and `Shift + Tab` then set `menuItemTabIndex={0}`.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| arrowOffset | number | - | Arrow offset in px |
| arrowPosition | ArrowPosition | - | Arrow position |
| arrowRadius | number | - | Arrow border-radius in px |
| arrowSize | number | - | Arrow size in px |
| children | React.ReactNode | - | Menu children |
| clickOutsideEvents | string\[] | - | Events that trigger outside clicks |
| closeDelay | number | - | Close delay in ms, applicable only to trigger="hover" variant |
| closeOnClickOutside | boolean | - | If set, the dropdown is closed on outside clicks |
| closeOnEscape | boolean | - | If set, the dropdown is closed when the Escape key is pressed |
| closeOnItemClick | boolean | - | If set, the Menu is closed when one of the items is clicked |
| defaultOpened | boolean | - | Uncontrolled menu initial opened state |
| disabled | boolean | - | If set, popover dropdown will not be rendered |
| floatingStrategy | FloatingStrategy | - | Changes floating ui [position strategy](https://floating-ui.com/docs/usefloating#strategy) |
| hideDetached | boolean | - | If set, the dropdown is hidden when the element is hidden with styles or not visible on the screen |
| id | string | - | Id base to create accessibility connections |
| keepMounted | boolean | - | If set, the dropdown is not unmounted from the DOM when hidden. display: none styles are added instead. |
| loop | boolean | - | If set, arrow key presses loop though items (first to last and last to first) |
| menuItemTabIndex | 0 | -1 | - | Set the tabindex on all menu items |
| middlewares | PopoverMiddlewares | - | Floating ui middlewares to configure position handling |
| offset | number | FloatingAxesOffsets | - | Offset of the dropdown element |
| onChange | (opened: boolean) => void | - | Called when menu opened state changes |
| onClose | () => void | - | Called when Menu is closed |
| onDismiss | () => void | - | Called when the popover is dismissed by clicking outside or by pressing escape |
| onEnterTransitionEnd | () => void | - | Called when enter transition ends |
| onExitTransitionEnd | () => void | - | Called when exit transition ends |
| onOpen | () => void | - | Called when Menu is opened |
| onPositionChange | (position: FloatingPosition) => void | - | Called when dropdown position changes |
| openDelay | number | - | Open delay in ms, applicable only to trigger="hover" variant |
| opened | boolean | - | Controlled menu opened state |
| overlayProps | OverlayProps & ElementProps<"div"> | - | Props passed down to Overlay component |
| portalProps | BasePortalProps | - | Props to pass down to the Portal when withinPortal is true |
| position | FloatingPosition | - | Dropdown position relative to the target element |
| positionDependencies | any\[] | - | @deprecated : Do not use, will be removed in 9.0 |
| preventPositionChangeWhenVisible | boolean | - | Prevents popover from flipping/shifting when it the dropdown is visible |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius |
| returnFocus | boolean | - | Determines whether focus should be automatically returned to control when dropdown closes |
| shadow | MantineShadow | - | Key of theme.shadows or any other valid CSS box-shadow value |
| transitionProps | TransitionProps | - | Props passed down to the Transition component. Use to configure duration and animation type. |
| trapFocus | boolean | - | If set, focus is trapped within the menu dropdown when it is opened |
| trigger | "hover" | "click" | "click-hover" | - | Event trigger to open menu |
| width | PopoverWidth | - | Dropdown width, or 'target' to make dropdown width the same as target element |
| withArrow | boolean | - | Determines whether component should have an arrow |
| withInitialFocusPlaceholder | boolean | - | If set, focus placeholder element is added before items |
| withOverlay | boolean | - | Determines whether the overlay should be displayed when the dropdown is opened |
| withinPortal | boolean | - | Determines whether dropdown should be rendered within the Portal |
| zIndex | string | number | - | Dropdown z-index |

#### Styles API

Menu component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Menu selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| dropdown | .mantine-Menu-dropdown | Dropdown element |
| arrow | .mantine-Menu-arrow | Dropdown arrow |
| overlay | .mantine-Menu-overlay | Overlay element |
| divider | .mantine-Menu-divider | `Menu.Divider` root element |
| label | .mantine-Menu-label | `Menu.Label` root element |
| item | .mantine-Menu-item | `Menu.Item` root element |
| itemLabel | .mantine-Menu-itemLabel | Label of `Menu.Item` |
| itemSection | .mantine-Menu-itemSection | Left and right sections of `Menu.Item` |
| chevron | .mantine-Menu-chevron | Sub menu chevron |

**Menu data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| item | data-disabled | - | - |

### Modal

Package: @mantine/core
Import: import { Modal } from '@mantine/core';
Description: An accessible overlay dialog

## Usage

#### Example: usage

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication">
        {/* Modal content */}
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
```

## Center modal vertically

#### Example: centered

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication" centered>
        {/* Modal content */}
      </Modal>

      <Button variant="default" onClick={open}>
        Open centered Modal
      </Button>
    </>
  );
}
```

## Remove header

To remove header set `withCloseButton={false}`:

#### Example: header

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} withCloseButton={false}>
        Modal without header, press escape or click on overlay to close
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
```

## Change size

You can change modal width by setting `size` prop to predefined size or any valid width, for example, `55%` or `50rem`.
`Modal` width cannot exceed `100vw`.

#### Example: sizes

```tsx
function Demo() {
  const [opened, setOpened] = useState(false);
  const [size, setSize] = useState<string | number>('md');

  const buttons = SIZES.map((s) => (
    <Button
      key={s}
      variant="default"
      onClick={() => {
        setSize(s);
        setOpened(true);
      }}
    >
      {s}
    </Button>
  ));

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
        size={size}
      >
        <AuthenticationForm noPadding noShadow />
      </Modal>

      <Group justify="center">{buttons}</Group>
    </>
  );
}
```

## Size auto

`Modal` with `size="auto"` will have width to fit its content:

#### Example: sizeAuto

```tsx
import { useDisclosure, useCounter } from '@mantine/hooks';
import { Modal, Button, Group, Text, Badge } from '@mantine/core';

function Demo() {
  const [opened, { close, open }] = useDisclosure(false);
  const [count, { increment, decrement }] = useCounter(3, { min: 0 });

  const badges = Array(count)
    .fill(0)
    .map((_, index) => <Badge key={index}>Badge {index}</Badge>);

  return (
    <>
      <Modal opened={opened} onClose={close} size="auto" title="Modal size auto">
        <Text>Modal with size auto will fits its content</Text>

        <Group wrap="nowrap" mt="md">
          {badges}
        </Group>

        <Group mt="xl">
          <Button onClick={increment}>Add badge</Button>
          <Button onClick={decrement}>Remove badge</Button>
        </Group>
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
```

## Fullscreen

Fullscreen modal will take the entire screen, it is usually better to change transition to `fade`
when `fullScreen` prop is set:

#### Example: fullScreen

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="This is a fullscreen modal"
        fullScreen
        radius={0}
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
        {/* Modal content */}
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
```

To switch Modal to fullscreen on devices with small screens only use [use-media-query](https://mantine.dev/hooks/use-media-query/) hook.
`size` prop is ignored if `fullScreen` prop is set:

#### Example: fullScreenMobile

```tsx
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: ${em(800)})');

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="This is a fullscreen modal"
        fullScreen={isMobile}
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
        The Modal will be full screen only on mobile
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
```

## Customize overlay

`Modal` uses [Overlay](https://mantine.dev/core/overlay/) component, you can set any props that [Overlay](https://mantine.dev/core/overlay/)
supports with `overlayProps`:

#### Example: overlay

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Authentication"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        {/* Modal content */}
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
```

## Modal with scroll

#### Example: overflow

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  const content = Array(100)
    .fill(0)
    .map((_, index) => <p key={index}>Modal with scroll</p>);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Header is sticky">
        {content}
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
```

## Usage with ScrollArea

#### Example: scrollarea

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, ScrollArea } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  const content = Array(100)
    .fill(0)
    .map((_, index) => <p key={index}>Modal with scroll</p>);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Header is sticky"
        scrollAreaComponent={ScrollArea.Autosize}
      >
        {content}
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
```

## Change offsets

Use `xOffset`/`yOffset` to configure horizontal/vertical content offsets:

#### Example: offset

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication" yOffset="1vh" xOffset={0}>
        {/* Modal content */}
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
```

## Change transitions

`Modal` is built with [Transition](https://mantine.dev/core/transition/) component. Use `transitionProps`
prop to customize any [Transition](https://mantine.dev/core/transition/) properties:

#### Example: transitions

```tsx
import { useState } from 'react';
import { Modal, Group, Button } from '@mantine/core';

function Demo() {
  const [noTransitionOpened, setNoTransitionOpened] = useState(false);
  const [slowTransitionOpened, setSlowTransitionOpened] = useState(false);

  return (
    <>
      <Modal
        opened={slowTransitionOpened}
        onClose={() => setSlowTransitionOpened(false)}
        title="Please consider this"
        transitionProps={{ transition: 'rotate-left' }}
      >
        rotate-left transition
      </Modal>

      <Modal
        opened={noTransitionOpened}
        onClose={() => setNoTransitionOpened(false)}
        title="Please consider this"
        transitionProps={{ transition: 'fade', duration: 600, timingFunction: 'linear' }}
      >
        fade transition 600ms linear transition
      </Modal>

      <Group justify="center">
        <Button onClick={() => setSlowTransitionOpened(true)} variant="default">
          Rotate left transition
        </Button>
        <Button onClick={() => setNoTransitionOpened(true)} variant="default">
          Fade transition
        </Button>
      </Group>
    </>
  );
}
```

## onExitTransitionEnd and onEnterTransitionEnd

`onExitTransitionEnd` and `onEnterTransitionEnd` props can be used to run code after
exit/enter transition is finished. For example, this is useful when you want to clear
data after modal is closed:

#### Example: transitionEnd

```tsx
import { useState } from 'react';
import { Button, Group, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [firstOpened, firstHandlers] = useDisclosure(false);
  const [secondOpened, secondHandlers] = useDisclosure(false);
  const [modalData, setModalData] = useState({
    title: '',
    message: '',
  });

  return (
    <>
      <Modal
        opened={firstOpened}
        onClose={() => {
          firstHandlers.close();
          setModalData({ title: '', message: '' });
        }}
        title={modalData.title}
      >
        {modalData.message}
      </Modal>
      <Modal
        opened={secondOpened}
        onClose={secondHandlers.close}
        onExitTransitionEnd={() => setModalData({ title: '', message: '' })}
        title={modalData.title}
      >
        {modalData.message}
      </Modal>

      <Group>
        <Button
          onClick={() => {
            firstHandlers.open();
            setModalData({ title: 'Edit your profile', message: 'Imagine a form here' });
          }}
        >
          Clear data in onClose
        </Button>

        <Button
          onClick={() => {
            secondHandlers.open();
            setModalData({ title: 'Edit your profile', message: 'Imagine a form here' });
          }}
        >
          Clear data in onExitTransitionEnd
        </Button>
      </Group>
    </>
  );
}
```

## Initial focus

Modal uses [FocusTrap](https://mantine.dev/core/focus-trap/) to trap focus. Add `data-autofocus`
attribute to the element that should receive initial focus.

#### Example: initialFocus

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, TextInput } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Focus demo">
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

If you do not want to focus any elements when the modal is opened, use `FocusTrap.InitialFocus`
component to create a visually hidden element that will receive initial focus:

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

If you do not add `data-autofocus` attribute and do not use `FocusTrap.InitialFocus`,
modal will focus the first focusable element inside it which is usually the close button.

## Control behavior

The following props can be used to control `Modal` behavior.
In most cases, it is not recommended to turn these features off –
it will make the component less accessible.

- `trapFocus` – determines whether focus should be trapped inside modal
- `closeOnEscape` – determines whether the modal should be closed when `Escape` key is pressed
- `closeOnClickOutside` – determines whether the modal should be closed when user clicks on the overlay
- `returnFocus` – determines whether focus should be returned to the element that was focused before the modal was opened

## react-remove-scroll settings

`Modal` uses [react-remove-scroll](https://github.com/theKashey/react-remove-scroll)
package to lock scroll. You can pass props down to the `RemoveScroll` component
with `removeScrollProps`:

```tsx
import { Modal } from '@mantine/core';

function Demo() {
  return (
    <Modal
      removeScrollProps={{ allowPinchZoom: true }}
      opened
      onClose={() => {}}
    />
  );
}
```

## Change close icon

Use `closeButtonProps` to customize close button:

#### Example: closeIcon

```tsx
import { IconXboxX } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Authentication"
        closeButtonProps={{
          icon: <IconXboxX size={20} stroke={1.5} />,
        }}
      >
        {/* Modal content */}
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
```

## Compound components

You can use the following compound components to have full control over the `Modal` rendering:

- `Modal.Root` – context provider
- `Modal.Overlay` – render [Overlay](https://mantine.dev/core/overlay/)
- `Modal.Content` – main modal element, should include all modal content
- `Modal.Header` – sticky header, usually contains `Modal.Title` and `Modal.CloseButton`
- `Modal.Title` – `h2` element, `aria-labelledby` of `Modal.Content` is pointing to this element, usually is rendered inside `Modal.Header`
- `Modal.CloseButton` – close button, usually rendered inside `Modal.Header`
- `Modal.Body` – a place for main content, `aria-describedby` of `Modal.Content` is pointing to this element

#### Example: composition

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal.Root opened={opened} onClose={close}>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>Modal content</Modal.Body>
        </Modal.Content>
      </Modal.Root>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
```
