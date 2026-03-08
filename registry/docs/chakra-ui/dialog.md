# Dialog

```tsx
import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react"

export const DialogBasic = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        
          Open Dialog
        
      </Dialog.Trigger>
      
        
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Dialog Title</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                Cancel
              </Dialog.ActionTrigger>
              Save
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      
    </Dialog.Root>
  )
}

```

## Usage

```tsx
import { Dialog } from "@chakra-ui/react"
```

```tsx
<Dialog.Root>
  
  
  <Dialog.Positioner>
    <Dialog.Content>
      
      <Dialog.Header>
        
      </Dialog.Header>
      
      
    </Dialog.Content>
  </Dialog.Positioner>
</Dialog.Root>
```

## Examples

### Sizes

Use the `size` prop to change the size of the dialog component.

```tsx
import {
  Button,
  CloseButton,
  Dialog,
  For,
  HStack,
  Portal,
} from "@chakra-ui/react"

export const DialogWithSizes = () => {
  return (
    
      
        {(size) => (
          <Dialog.Root key={size} size={size}>
            <Dialog.Trigger asChild>
              
                Open ({size})
              
            </Dialog.Trigger>
            
              
              <Dialog.Positioner>
                <Dialog.Content>
                  <Dialog.Header>
                    <Dialog.Title>Dialog Title</Dialog.Title>
                  </Dialog.Header>
                  <Dialog.Body>
                    
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    
                  </Dialog.Body>
                  <Dialog.Footer>
                    <Dialog.ActionTrigger asChild>
                      Cancel
                    </Dialog.ActionTrigger>
                    Save
                  </Dialog.Footer>
                  <Dialog.CloseTrigger asChild>
                    
                  </Dialog.CloseTrigger>
                </Dialog.Content>
              </Dialog.Positioner>
            
          </Dialog.Root>
        )}
      
    
  )
}

```

### Cover

Use the `size="cover"` prop to make the dialog component cover the entire screen
while revealing a small portion of the page behind.

```tsx
import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react"

export const DialogWithCover = () => {
  return (
    <Dialog.Root size="cover" placement="center" motionPreset="slide-in-bottom">
      <Dialog.Trigger asChild>
        
          Open Dialog
        
      </Dialog.Trigger>
      
        
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Dialog Title</Dialog.Title>
              <Dialog.CloseTrigger asChild>
                
              </Dialog.CloseTrigger>
            </Dialog.Header>
            <Dialog.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      
    </Dialog.Root>
  )
}

```

### Fullscreen

Use the `size="full"` prop to make the dialog component take up the entire
screen.

```tsx
import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react"

export const DialogWithFullscreen = () => {
  return (
    <Dialog.Root size="full" motionPreset="slide-in-bottom">
      <Dialog.Trigger asChild>
        
          Open Dialog
        
      </Dialog.Trigger>
      
        
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Dialog Title</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                Cancel
              </Dialog.ActionTrigger>
              Save
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      
    </Dialog.Root>
  )
}

```

### Responsive Size

Use responsive values for the `size` prop to make the dialog adapt to different
screen sizes.

We recommend using exact breakpoints values instead of using a `base` to ensure
styles are properly contained.

```tsx
// ❌ Might cause a style leak between the breakpoints
<Dialog.Root size={{ base: "full", md: "lg" }}>{/* ... */}</Dialog.Root>

// Works ✅
<Dialog.Root size={{ mdDown: "full", md: "lg" }}>{/* ... */}</Dialog.Root>
```

```tsx
import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react"

export const DialogWithResponsiveSize = () => {
  return (
    <Dialog.Root size={{ mdDown: "full", md: "lg" }}>
      <Dialog.Trigger asChild>
        
          Open Dialog
        
      </Dialog.Trigger>
      
        
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Dialog Title</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                Cancel
              </Dialog.ActionTrigger>
              Save
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      
    </Dialog.Root>
  )
}

```

### Placement

Use the `placement` prop to change the placement of the dialog component.

```tsx
import {
  Button,
  CloseButton,
  Dialog,
  For,
  HStack,
  Portal,
} from "@chakra-ui/react"

export const DialogWithPlacement = () => {
  return (
    
      
        {(placement) => (
          <Dialog.Root
            key={placement}
            placement={placement}
            motionPreset="slide-in-bottom"
          >
            <Dialog.Trigger asChild>
              Open Dialog ({placement}) 
            </Dialog.Trigger>
            
              
              <Dialog.Positioner>
                <Dialog.Content>
                  <Dialog.Header>
                    <Dialog.Title>Dialog Title</Dialog.Title>
                  </Dialog.Header>
                  <Dialog.Body>
                    
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    
                  </Dialog.Body>
                  <Dialog.Footer>
                    <Dialog.ActionTrigger asChild>
                      Cancel
                    </Dialog.ActionTrigger>
                    Save
                  </Dialog.Footer>
                  <Dialog.CloseTrigger asChild>
                    
                  </Dialog.CloseTrigger>
                </Dialog.Content>
              </Dialog.Positioner>
            
          </Dialog.Root>
        )}
      
    
  )
}

```

### Controlled

Use the `open` and `onOpenChange` prop to control the visibility of the dialog
component.

```tsx
"use client"

import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react"
import { useState } from "react"
import Lorem from "react-lorem-ipsum"

export const DialogControlled = () => {
  const [open, setOpen] = useState(false)
  return (
    <Dialog.Root lazyMount open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Dialog.Trigger asChild>
        Open
      </Dialog.Trigger>
      
        
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Dialog Title</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                Cancel
              </Dialog.ActionTrigger>
              Save
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      
    </Dialog.Root>
  )
}

```

### Store

An alternative way to control the dialog is to use the `RootProvider` component
and the `useDialog` store hook.

This way you can access the dialog state and methods from outside the dialog.

```tsx
"use client"

import {
  Button,
  CloseButton,
  Dialog,
  Portal,
  useDialog,
} from "@chakra-ui/react"

export const DialogWithStore = () => {
  const dialog = useDialog()
  return (
    <Dialog.RootProvider value={dialog}>
      <Dialog.Trigger asChild>
        
          {dialog.open ? "Close" : "Open"} Dialog
        
      </Dialog.Trigger>
      
        
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Dialog Title</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                Cancel
              </Dialog.ActionTrigger>
              Save
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      
    </Dialog.RootProvider>
  )
}

```

### Context

Use the `DialogContext` component to access the dialog state and methods from
outside the dialog.

```tsx
"use client"

import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react"

export const DialogWithContext = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        
          Open Dialog
        
      </Dialog.Trigger>
      
        
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Context>
              {(store) => (
                <Dialog.Body pt="6" spaceY="3">
                  Dialog is open: {store.open ? "true" : "false"}
                  
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  
                   store.setOpen(false)}>Close
                </Dialog.Body>
              )}
            </Dialog.Context>
            <Dialog.CloseTrigger asChild>
              
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      
    </Dialog.Root>
  )
}

```

### Nested Dialogs

You can nest dialogs by using the `Dialog.Root` component inside another
`Dialog.Root` component.

```tsx
import { Button, Dialog, Portal } from "@chakra-ui/react"
import Lorem from "react-lorem-ipsum"

export const DialogNested = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        Open
      </Dialog.Trigger>
      
        
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Dialog Title</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              
            </Dialog.Body>
            <Dialog.Footer>
              Button 2

              <Dialog.Root>
                <Dialog.Trigger asChild>
                  Open Nested
                </Dialog.Trigger>
                
                  
                  <Dialog.Positioner>
                    <Dialog.Content>
                      <Dialog.Header>
                        <Dialog.Title>Dialog Title</Dialog.Title>
                      </Dialog.Header>
                      <Dialog.Body>
                        
                      </Dialog.Body>
                    </Dialog.Content>
                  </Dialog.Positioner>
                
              </Dialog.Root>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      
    </Dialog.Root>
  )
}

```

### Open From Popover

Dialogs can be triggered from within a popover. The dialog will appear above the
popover thanks to the unified z-index system.

```tsx
"use client"

import {
  Button,
  CloseButton,
  Dialog,
  Popover,
  Portal,
  Text,
} from "@chakra-ui/react"

export const DialogOpenFromPopover = () => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        Open Popover
      </Popover.Trigger>
      
        <Popover.Positioner>
          <Popover.Content>
            
            <Popover.Body>
              <Popover.Title fontWeight="medium">Popover Title</Popover.Title>
              
                This popover contains a button that opens a dialog. The dialog
                should appear above the popover.
              
              
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      
    </Popover.Root>
  )
}

function PopoverDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        
          Open Dialog
        
      </Dialog.Trigger>
      
        
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.CloseTrigger asChild>
              
            </Dialog.CloseTrigger>
            <Dialog.Header>
              <Dialog.Title>Dialog from Popover</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              
                This dialog was opened from within a popover. It should appear
                above the popover thanks to the unified z-index system.
              
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                Cancel
              </Dialog.ActionTrigger>
              Save
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      
    </Dialog.Root>
  )
}

```

### Open From Menu

Use a controlled dialog to open it from a menu item action, like a delete
confirmation.

```tsx
"use client"

import {
  Button,
  CloseButton,
  Dialog,
  Menu,
  Portal,
  Text,
} from "@chakra-ui/react"
import { useState } from "react"
import { LuChevronDown } from "react-icons/lu"

export const DialogOpenFromMenu = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Menu.Root>
        <Menu.Trigger asChild>
          
            Actions 
          
        </Menu.Trigger>
        
          <Menu.Positioner>
            <Menu.Content>
              <Menu.Item value="edit">Edit</Menu.Item>
              <Menu.Item value="duplicate">Duplicate</Menu.Item>
              
              <Menu.Item value="delete" onClick={() => setOpen(true)}>
                Delete...
              </Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        
      </Menu.Root>

      <Dialog.Root
        role="alertdialog"
        open={open}
        size="sm"
        onOpenChange={(e) => setOpen(e.open)}
      >
        
          
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.CloseTrigger asChild>
                
              </Dialog.CloseTrigger>
              <Dialog.Header>
                <Dialog.Title>Confirm Delete</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body>
                
                  Are you sure you want to delete this item? This action cannot
                  be undone.
                
              </Dialog.Body>
              <Dialog.Footer>
                 setOpen(false)}>
                  Cancel
                
                Delete
              </Dialog.Footer>
            </Dialog.Content>
          </Dialog.Positioner>
        
      </Dialog.Root>
    </>
  )
}

```

### Initial Focus

Use the `initialFocusEl` prop to set the initial focus of the dialog component.

```tsx
"use client"

import { Button, Dialog, Field, Input, Portal, Stack } from "@chakra-ui/react"
import { useRef } from "react"

export const DialogWithInitialFocus = () => {
  const ref = useRef(null)
  return (
    <Dialog.Root initialFocusEl={() => ref.current}>
      <Dialog.Trigger asChild>
        Open
      </Dialog.Trigger>
      
        
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Dialog Header</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body pb="4">
              
                <Field.Root>
                  <Field.Label>First Name</Field.Label>
                  
                </Field.Root>
                <Field.Root>
                  <Field.Label>Last Name</Field.Label>
                  
                </Field.Root>
              
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                Cancel
              </Dialog.ActionTrigger>
              Save
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      
    </Dialog.Root>
  )
}

```

### Inside Scroll

Use the `scrollBehavior=inside` prop to change the scroll behavior of the dialog
when its content overflows.

```tsx
import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react"
import Lorem from "react-lorem-ipsum"

export const DialogWithInsideScroll = () => {
  return (
    <Dialog.Root scrollBehavior="inside" size="sm">
      <Dialog.Trigger asChild>
        Inside Scroll
      </Dialog.Trigger>
      
        
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>With Inside Scroll</Dialog.Title>
            </Dialog.Header>
            <Dialog.CloseTrigger asChild>
              
            </Dialog.CloseTrigger>
            <Dialog.Body>
              
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      
    </Dialog.Root>
  )
}

```

### Outside Scroll

Use the `scrollBehavior=outside` prop to change the scroll behavior of the
dialog when its content overflows.

```tsx
import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react"
import Lorem from "react-lorem-ipsum"

export const DialogWithOutsideScroll = () => {
  return (
    <Dialog.Root size="sm" scrollBehavior="outside">
      <Dialog.Trigger asChild>
        Outside Scroll
      </Dialog.Trigger>
      
        
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>With Outside Scroll</Dialog.Title>
            </Dialog.Header>
            <Dialog.CloseTrigger asChild>
              
            </Dialog.CloseTrigger>
            <Dialog.Body>
              
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      
    </Dialog.Root>
  )
}

```

### Motion Preset

Use the `motionPreset` prop to change the animation of the dialog component.

```tsx
import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react"

export const DialogWithMotionPreset = () => {
  return (
    <Dialog.Root motionPreset="slide-in-bottom">
      <Dialog.Trigger asChild>
        Slide in Bottom
      </Dialog.Trigger>
      
        
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Dialog Title</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                Cancel
              </Dialog.ActionTrigger>
              Save
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      
    </Dialog.Root>
  )
}

```

### Alert Dialog

Set the `role: "alertdialog"` prop to change the dialog component to an alert
dialog.

```tsx
import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react"

export const DialogWithRole = () => {
  return (
    <Dialog.Root role="alertdialog">
      <Dialog.Trigger asChild>
        
          Open Dialog
        
      </Dialog.Trigger>
      
        
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Are you sure?</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              
                This action cannot be undone. This will permanently delete your
                account and remove your data from our systems.
              
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                Cancel
              </Dialog.ActionTrigger>
              Delete
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      
    </Dialog.Root>
  )
}

```

### Close Button Outside

Here's an example of how to customize the `Dialog.CloseTrigger` component to
position the close button outside the dialog component.

```tsx
import {
  AspectRatio,
  Button,
  CloseButton,
  Dialog,
  Portal,
} from "@chakra-ui/react"

export const DialogWithCloseOutside = () => {
  return (
    <Dialog.Root placement="center">
      <Dialog.Trigger asChild>
        
          Open Dialog
        
      </Dialog.Trigger>
      
        
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Body pt="4">
              <Dialog.Title>Dialog Title</Dialog.Title>
              <Dialog.Description mb="4">
                This is a dialog with some content and a video.
              </Dialog.Description>
              
                <iframe
                  title="naruto"
                  src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                  allowFullScreen
                />
              
            </Dialog.Body>
            <Dialog.CloseTrigger top="0" insetEnd="-12" asChild>
              
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      
    </Dialog.Root>
  )
}

```

### Non-Modal Dialog

We don't recommend using a non-modal dialog due to the accessibility concerns
they present. In event you need it, here's what you can do:

- set the `modal` prop to `false`
- set `pointerEvents` to `none` on the `Dialog.Positioner` component
- (optional)set the `closeOnInteractOutside` prop to `false`

```tsx
import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react"

export const DialogNonModal = () => {
  return (
    <Dialog.Root closeOnInteractOutside={false} modal={false}>
      <Dialog.Trigger asChild>
        
          Open Dialog
        
      </Dialog.Trigger>
      
        <Dialog.Positioner pointerEvents="none">
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Dialog Title</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                Cancel
              </Dialog.ActionTrigger>
              Save
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      
    </Dialog.Root>
  )
}

```

### DataList

Here's an example of how to compose the dialog component with the `DataList`
component.

```tsx
import {
  Avatar,
  Badge,
  Button,
  CloseButton,
  DataList,
  Dialog,
  HStack,
  Portal,
  Textarea,
  VStack,
} from "@chakra-ui/react"

export const DialogWithDatalist = () => {
  return (
    
      <Dialog.Root>
        <Dialog.Trigger asChild>
          Open Dialog
        </Dialog.Trigger>
        
          
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>Prepare Chakra V3</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body pb="8">
                <DataList.Root orientation="horizontal">
                  <DataList.Item>
                    <DataList.ItemLabel>Status</DataList.ItemLabel>
                    <DataList.ItemValue>
                      Completed
                    </DataList.ItemValue>
                  </DataList.Item>
                  <DataList.Item>
                    <DataList.ItemLabel>Assigned to</DataList.ItemLabel>
                    <DataList.ItemValue>
                      
                        <Avatar.Root size="xs">
                          
                          
                        </Avatar.Root>
                        Segun Adebayo
                      
                    </DataList.ItemValue>
                  </DataList.Item>
                  <DataList.Item>
                    <DataList.ItemLabel>Due date</DataList.ItemLabel>
                    <DataList.ItemValue>12th August 2024</DataList.ItemValue>
                  </DataList.Item>
                </DataList.Root>

                
              </Dialog.Body>
              <Dialog.CloseTrigger asChild>
                
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        
      </Dialog.Root>
    
  )
}

```

## Props

### Root

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| closeOnEscape | true | `boolean` | Whether to close the dialog when the escape key is pressed |
| closeOnInteractOutside | true | `boolean` | Whether to close the dialog when the outside is clicked |
| defaultOpen | false | `boolean` | The initial open state of the dialog when rendered.
Use when you don't need to control the open state of the dialog. |
| lazyMount | false | `boolean` | Whether to enable lazy mounting |
| modal | true | `boolean` | Whether to prevent pointer interaction outside the element and hide all content below it |
| preventScroll | true | `boolean` | Whether to prevent scrolling behind the dialog when it's opened |
| role | "dialog" | `'dialog' \| 'alertdialog'` | The dialog's role |
| skipAnimationOnMount | false | `boolean` | Whether to allow the initial presence animation. |
| trapFocus | true | `boolean` | Whether to trap focus inside the dialog when it's opened |
| unmountOnExit | false | `boolean` | Whether to unmount on exit. |
| placement | top | `'center' \| 'top' \| 'bottom'` | The placement of the component |
| scrollBehavior | outside | `'inside' \| 'outside'` | The scrollBehavior of the component |
| size | md | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'cover' \| 'full'` | The size of the component |
| motionPreset | scale | `'scale' \| 'slide-in-bottom' \| 'slide-in-top' \| 'slide-in-left' \| 'slide-in-right' \| 'none'` | The motionPreset of the component |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| unstyled | undefined | `boolean` | Whether to remove the component's style. |
| aria-label | undefined | `string` | Human readable label for the dialog, in event the dialog title is not rendered |
| finalFocusEl | undefined | `() => MaybeElement` | Element to receive focus when the dialog is closed |
| id | undefined | `string` | The unique identifier of the machine. |
| ids | undefined | `Partial<{\n  trigger: string\n  positioner: string\n  backdrop: string\n  content: string\n  closeTrigger: string\n  title: string\n  description: string\n}>` | The ids of the elements in the dialog. Useful for composition. |
| immediate | undefined | `boolean` | Whether to synchronize the present change immediately or defer it to the next frame |
| initialFocusEl | undefined | `() => MaybeElement` | Element to receive focus when the dialog is opened |
| onEscapeKeyDown | undefined | `(event: KeyboardEvent) => void` | Function called when the escape key is pressed |
| onExitComplete | undefined | `VoidFunction` | Function called when the animation ends in the closed state |
| onFocusOutside | undefined | `(event: FocusOutsideEvent) => void` | Function called when the focus is moved outside the component |
| onInteractOutside | undefined | `(event: InteractOutsideEvent) => void` | Function called when an interaction happens outside the component |
| onOpenChange | undefined | `(details: OpenChangeDetails) => void` | Function to call when the dialog's open state changes |
| onPointerDownOutside | undefined | `(event: PointerDownOutsideEvent) => void` | Function called when the pointer is pressed down outside the component |
| onRequestDismiss | undefined | `(event: LayerDismissEvent) => void` | Function called when this layer is closed due to a parent layer being closed |
| open | undefined | `boolean` | The controlled open state of the dialog |
| persistentElements | undefined | `(() => Element \| null)[]` | Returns the persistent elements that:

- should not have pointer-events disabled
- should not trigger the dismiss event |
  | present | undefined | `boolean` | Whether the node is present (controlled by the user) |
  | restoreFocus | undefined | `boolean` | Whether to restore focus to the element that had focus before the dialog was opened |
