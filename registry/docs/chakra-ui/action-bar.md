# Action Bar

```tsx
"use client"

import { ActionBar, Button, Checkbox, Portal } from "@chakra-ui/react"
import { useState } from "react"
import { LuShare, LuTrash2 } from "react-icons/lu"

export const ActionBarBasic = () => {
  const [checked, setChecked] = useState(false)
  return (
    <>
      <Checkbox.Root onCheckedChange={(e) => setChecked(!!e.checked)}>
        <Checkbox.HiddenInput />
        <Checkbox.Control />
        <Checkbox.Label>Show Action bar</Checkbox.Label>
      </Checkbox.Root>
      <ActionBar.Root open={checked}>
        <Portal>
          <ActionBar.Positioner>
            <ActionBar.Content>
              <ActionBar.SelectionTrigger>
                2 selected
              </ActionBar.SelectionTrigger>
              <ActionBar.Separator />
              <Button variant="outline" size="sm">
                <LuTrash2 />
                Delete
              </Button>
              <Button variant="outline" size="sm">
                <LuShare />
                Share
              </Button>
            </ActionBar.Content>
          </ActionBar.Positioner>
        </Portal>
      </ActionBar.Root>
    </>
  )
}

```

## Usage

The action bar is designed to be controlled by table or checkbox selections. It
provides a set of actions that can be performed on the selected items.

```tsx
import { ActionBar } from "@chakra-ui/react"
```

```tsx
<ActionBar.Root>
  <ActionBar.Positioner>
    <ActionBar.Content>
      <ActionBar.CloseTrigger />
      <ActionBar.SelectionTrigger />
      <ActionBar.Separator />
    </ActionBar.Content>
  </ActionBar.Positioner>
</ActionBar.Root>
```

## Examples

### Close Trigger

Render the `ActionBar.CloseTrigger` to close the action bar, and pass the
`onOpenChange` handler to control the visibility of the action bar.

> The `open` and `onOpenChange` props control the visibility of the action bar.

```tsx
"use client"

import {
  ActionBar,
  Button,
  Checkbox,
  CloseButton,
  Portal,
} from "@chakra-ui/react"
import { useState } from "react"
import { LuShare, LuTrash2 } from "react-icons/lu"

export const ActionBarWithCloseTrigger = () => {
  const [checked, setChecked] = useState(false)
  return (
    <>
      <Checkbox.Root
        checked={checked}
        onCheckedChange={(e) => setChecked(!!e.checked)}
      >
        <Checkbox.HiddenInput />
        <Checkbox.Control />
        <Checkbox.Label>Show Action bar</Checkbox.Label>
      </Checkbox.Root>

      <ActionBar.Root
        open={checked}
        onOpenChange={(e) => setChecked(e.open)}
        closeOnInteractOutside={false}
      >
        <Portal>
          <ActionBar.Positioner>
            <ActionBar.Content>
              <ActionBar.SelectionTrigger>
                2 selected
              </ActionBar.SelectionTrigger>
              <ActionBar.Separator />
              <Button variant="outline" size="sm">
                <LuTrash2 />
                Delete
              </Button>
              <Button variant="outline" size="sm">
                <LuShare />
                Share
              </Button>
              <ActionBar.CloseTrigger asChild>
                <CloseButton size="sm" />
              </ActionBar.CloseTrigger>
            </ActionBar.Content>
          </ActionBar.Positioner>
        </Portal>
      </ActionBar.Root>
    </>
  )
}

```

### Within Dialog

Here's an example of composing the `ActionBar` and the `Dialog` to perform a
delete action on a set of selected items.

> Press the `Delete projects` button to open the dialog.

```tsx
"use client"

import { ActionBar, Button, Checkbox, Dialog, Portal } from "@chakra-ui/react"
import { useState } from "react"
import { LuSquarePlus, LuTrash2 } from "react-icons/lu"

export const ActionBarWithDialog = () => {
  const [checked, setChecked] = useState(false)
  return (
    <>
      <Checkbox.Root onCheckedChange={(e) => setChecked(!!e.checked)}>
        <Checkbox.HiddenInput />
        <Checkbox.Control />
        <Checkbox.Label>Check to select projects</Checkbox.Label>
      </Checkbox.Root>
      <ActionBar.Root open={checked}>
        <Portal>
          <ActionBar.Positioner>
            <ActionBar.Content>
              <ActionBar.SelectionTrigger>
                4 selected
              </ActionBar.SelectionTrigger>

              <ActionBar.Separator />

              <Button variant="outline" size="sm">
                <LuSquarePlus />
                Add to collection
              </Button>

              <Dialog.Root placement="center">
                <Dialog.Trigger asChild>
                  <Button variant="surface" colorPalette="red" size="sm">
                    <LuTrash2 />
                    Delete projects
                  </Button>
                </Dialog.Trigger>
                <Portal>
                  <Dialog.Backdrop />
                  <Dialog.Positioner>
                    <Dialog.Content>
                      <Dialog.Header>
                        <Dialog.Title>Delete projects</Dialog.Title>
                      </Dialog.Header>
                      <Dialog.Body>
                        <Dialog.Description>
                          Are you sure you want to delete 4 projects?
                        </Dialog.Description>
                      </Dialog.Body>
                      <Dialog.Footer>
                        <Button variant="outline">Cancel</Button>
                        <Button colorPalette="red">Delete</Button>
                      </Dialog.Footer>
                    </Dialog.Content>
                  </Dialog.Positioner>
                </Portal>
              </Dialog.Root>
            </ActionBar.Content>
          </ActionBar.Positioner>
        </Portal>
      </ActionBar.Root>
    </>
  )
}

```

### Placement

Use the `placement` prop to control the position of the action bar. The action
bar supports three placement options: `bottom` (default), `bottom-start`, and
`bottom-end`.

```tsx
"use client"

import {
  ActionBar,
  Button,
  Portal,
  SegmentGroup,
  Text,
  VStack,
} from "@chakra-ui/react"
import { useState } from "react"
import { LuShare, LuTrash2 } from "react-icons/lu"

export const ActionBarPlacement = () => {
  const [placement, setPlacement] = useState<
    "bottom" | "bottom-start" | "bottom-end"
  >("bottom")
  const [open, setOpen] = useState(false)

  return (
    <VStack gap="6" align="flex-start">
      <VStack gap="3" align="flex-start">
        <Text fontWeight="medium">Placement:</Text>
        <SegmentGroup.Root
          size="sm"
          value={placement}
          onValueChange={(e) =>
            setPlacement(e.value as "bottom" | "bottom-start" | "bottom-end")
          }
        >
          <SegmentGroup.Indicator />
          <SegmentGroup.Items
            items={[
              { value: "bottom-start", label: "Bottom Start" },
              { value: "bottom", label: "Bottom" },
              { value: "bottom-end", label: "Bottom End" },
            ]}
          />
        </SegmentGroup.Root>
      </VStack>

      <Button onClick={() => setOpen(!open)}>
        {open ? "Hide" : "Show"} Action Bar
      </Button>

      <ActionBar.Root open={open} placement={placement}>
        <Portal>
          <ActionBar.Positioner>
            <ActionBar.Content>
              <ActionBar.SelectionTrigger>
                3 selected
              </ActionBar.SelectionTrigger>
              <ActionBar.Separator />
              <Button variant="outline" size="sm">
                <LuTrash2 />
                Delete
              </Button>
              <Button variant="outline" size="sm">
                <LuShare />
                Share
              </Button>
            </ActionBar.Content>
          </ActionBar.Positioner>
        </Portal>
      </ActionBar.Root>
    </VStack>
  )
}

```

## Props

### Root

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| autoFocus | true | `boolean` | Whether to automatically set focus on the first focusable
content within the popover when opened. |
| closeOnEscape | true | `boolean` | Whether to close the popover when the escape key is pressed. |
| closeOnInteractOutside | true | `boolean` | Whether to close the popover when the user clicks outside of the popover. |
| lazyMount | false | `boolean` | Whether to enable lazy mounting |
| modal | false | `boolean` | Whether the popover should be modal. When set to `true`:

- interaction with outside elements will be disabled
- only popover content will be visible to screen readers
- scrolling is blocked
- focus is trapped within the popover |
  | portalled | true | `boolean` | Whether the popover is portalled. This will proxy the tabbing behavior regardless of the DOM position
  of the popover content. |
  | skipAnimationOnMount | false | `boolean` | Whether to allow the initial presence animation. |
  | unmountOnExit | false | `boolean` | Whether to unmount on exit. |
  | size | md | `'xs' \| 'sm' \| 'md' \| 'lg'` | The size of the component |
  | as | undefined | `React.ElementType` | The underlying element to render. |
  | asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
  | unstyled | undefined | `boolean` | Whether to remove the component's style. |
  | defaultOpen | undefined | `boolean` | The initial open state of the popover when rendered.
  Use when you don't need to control the open state of the popover. |
  | id | undefined | `string` | The unique identifier of the machine. |
  | ids | undefined | `Partial<{\n  anchor: string\n  trigger: string\n  content: string\n  title: string\n  description: string\n  closeTrigger: string\n  positioner: string\n  arrow: string\n}>` | The ids of the elements in the popover. Useful for composition. |
  | immediate | undefined | `boolean` | Whether to synchronize the present change immediately or defer it to the next frame |
  | initialFocusEl | undefined | `() => HTMLElement \| null` | The element to focus on when the popover is opened. |
  | onEscapeKeyDown | undefined | `(event: KeyboardEvent) => void` | Function called when the escape key is pressed |
  | onExitComplete | undefined | `VoidFunction` | Function called when the animation ends in the closed state |
  | onFocusOutside | undefined | `(event: FocusOutsideEvent) => void` | Function called when the focus is moved outside the component |
  | onInteractOutside | undefined | `(event: InteractOutsideEvent) => void` | Function called when an interaction happens outside the component |
  | onOpenChange | undefined | `(details: OpenChangeDetails) => void` | Function invoked when the popover opens or closes |
  | onPointerDownOutside | undefined | `(event: PointerDownOutsideEvent) => void` | Function called when the pointer is pressed down outside the component |
  | onRequestDismiss | undefined | `(event: LayerDismissEvent) => void` | Function called when this layer is closed due to a parent layer being closed |
  | open | undefined | `boolean` | The controlled open state of the popover |
  | persistentElements | undefined | `(() => Element \| null)[]` | Returns the persistent elements that:
- should not have pointer-events disabled
- should not trigger the dismiss event |
  | positioning | undefined | `PositioningOptions` | The user provided options used to position the popover content |
  | present | undefined | `boolean` | Whether the node is present (controlled by the user) |
