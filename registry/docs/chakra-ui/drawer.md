# Drawer

```tsx
import { Button, CloseButton, Drawer, Portal } from "@chakra-ui/react"

export const DrawerBasic = () => {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        
          Open Drawer
        
      </Drawer.Trigger>
      
        
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Drawer Title</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              
            </Drawer.Body>
            <Drawer.Footer>
              Cancel
              Save
            </Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      
    </Drawer.Root>
  )
}

```

## Usage

```tsx
import { Drawer } from "@chakra-ui/react"
```

```tsx
<Drawer.Root>
  
  
  <Drawer.Positioner>
    <Drawer.Content>
      
      <Drawer.Header>
        
      </Drawer.Header>
      
      
    </Drawer.Content>
  </Drawer.Positioner>
</Drawer.Root>
```

## Examples

### Controlled

Use the `open` and `onOpenChange` props to control the drawer component.

```tsx
"use client"

import { Button, CloseButton, Drawer, Portal } from "@chakra-ui/react"
import { useState } from "react"

export const DrawerControlled = () => {
  const [open, setOpen] = useState(false)

  return (
    <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Drawer.Trigger asChild>
        
          Open Drawer
        
      </Drawer.Trigger>
      
        
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Drawer Title</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              
            </Drawer.Body>
            <Drawer.Footer>
              Cancel
              Save
            </Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      
    </Drawer.Root>
  )
}

```

### Sizes

Use the `size` prop to change the size of the drawer component.

```tsx
import {
  Button,
  CloseButton,
  Drawer,
  For,
  HStack,
  Kbd,
  Portal,
} from "@chakra-ui/react"

export const DrawerWithSizes = () => {
  return (
    
      
        {(size) => (
          <Drawer.Root key={size} size={size}>
            <Drawer.Trigger asChild>
              
                Open ({size})
              
            </Drawer.Trigger>
            
              
              <Drawer.Positioner>
                <Drawer.Content>
                  <Drawer.Header>
                    <Drawer.Title>Drawer Title</Drawer.Title>
                  </Drawer.Header>
                  <Drawer.Body>
                    Press the esc key to close the drawer.
                  </Drawer.Body>
                  <Drawer.Footer>
                    <Drawer.ActionTrigger asChild>
                      Cancel
                    </Drawer.ActionTrigger>
                    Save
                  </Drawer.Footer>
                  <Drawer.CloseTrigger asChild>
                    
                  </Drawer.CloseTrigger>
                </Drawer.Content>
              </Drawer.Positioner>
            
          </Drawer.Root>
        )}
      
    
  )
}

```

### Context

Use the `DrawerContext` component to access the drawer state and methods from
outside the drawer.

```tsx
"use client"

import { Button, CloseButton, Drawer, Portal } from "@chakra-ui/react"

export const DrawerWithContext = () => {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        
          Open Drawer
        
      </Drawer.Trigger>
      
        
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Context>
              {(store) => (
                <Drawer.Body pt="6" spaceY="3">
                  Drawer is open: {store.open ? "true" : "false"}
                  
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  
                   store.setOpen(false)}>Close
                </Drawer.Body>
              )}
            </Drawer.Context>
            <Drawer.CloseTrigger asChild>
              
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      
    </Drawer.Root>
  )
}

```

### Offset

Use the `padding` CSS property on `Drawer.Positioner` to adjust the offset of
the drawer component.

```tsx
import { Button, CloseButton, Drawer, Portal } from "@chakra-ui/react"

export const DrawerWithOffset = () => {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        
          Open Drawer
        
      </Drawer.Trigger>
      
        
        <Drawer.Positioner padding="4">
          <Drawer.Content rounded="md">
            <Drawer.Header>
              <Drawer.Title>Drawer Title</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              
            </Drawer.Body>
            <Drawer.Footer>
              Cancel
              Save
            </Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      
    </Drawer.Root>
  )
}

```

### Placement

Use the `placement` prop to change the placement of the drawer component.

```tsx
import {
  Button,
  CloseButton,
  Drawer,
  For,
  HStack,
  Portal,
} from "@chakra-ui/react"

export const DrawerWithPlacement = () => {
  return (
    
      
        {(placement) => (
          <Drawer.Root key={placement} placement={placement}>
            <Drawer.Trigger asChild>
              
                Open ({placement})
              
            </Drawer.Trigger>
            
              
              <Drawer.Positioner>
                <Drawer.Content
                  roundedTop={placement === "bottom" ? "l3" : undefined}
                  roundedBottom={placement === "top" ? "l3" : undefined}
                >
                  <Drawer.Header>
                    <Drawer.Title>Drawer Title</Drawer.Title>
                  </Drawer.Header>
                  <Drawer.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Drawer.Body>
                  <Drawer.Footer>
                    <Drawer.ActionTrigger asChild>
                      Cancel
                    </Drawer.ActionTrigger>
                    Save
                  </Drawer.Footer>
                  <Drawer.CloseTrigger asChild>
                    
                  </Drawer.CloseTrigger>
                </Drawer.Content>
              </Drawer.Positioner>
            
          </Drawer.Root>
        )}
      
    
  )
}

```

### Initial Focus

Use the `initialFocusEl` prop to set the initial focus of the drawer component.

```tsx
"use client"

import {
  Button,
  CloseButton,
  Drawer,
  Input,
  Portal,
  Stack,
} from "@chakra-ui/react"
import { useRef } from "react"

export const DrawerWithInitialFocus = () => {
  const ref = useRef(null)
  return (
    <Drawer.Root initialFocusEl={() => ref.current}>
      <Drawer.Trigger asChild>
        
          Open Drawer
        
      </Drawer.Trigger>
      
        
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Drawer Title</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              
              
                
                
              
            </Drawer.Body>
            <Drawer.Footer>
              Cancel
              Save
            </Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      
    </Drawer.Root>
  )
}

```

### Custom Container

Here's an example of how to render the drawer component in a custom container.

Consider setting `closeOnInteractOutside` to `false` to prevent the drawer from
closing when interacting outside the drawer.

```tsx
"use client"

import {
  Button,
  CloseButton,
  Drawer,
  Portal,
  Stack,
  type StackProps,
  Text,
} from "@chakra-ui/react"
import { forwardRef, useRef } from "react"

const DrawerContainer = forwardRef<HTMLDivElement, StackProps>(
  function DrawerContainer(props, ref) {
    return (
      <Stack
        pos="relative"
        overflow="hidden"
        align="flex-start"
        p="8"
        minH="400px"
        layerStyle="fill.subtle"
        outline="2px solid gray"
        ref={ref}
        {...props}
      />
    )
  },
)

export const DrawerWithCustomContainer = () => {
  const portalRef = useRef(null)
  return (
    <Drawer.Root closeOnInteractOutside={false}>
      
        Render drawer here
        <Drawer.Trigger asChild>
          
            Open Drawer
          
        </Drawer.Trigger>
      
      
        
        <Drawer.Positioner pos="absolute" boxSize="full">
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Drawer Title</Drawer.Title>
              <Drawer.CloseTrigger asChild>
                
              </Drawer.CloseTrigger>
            </Drawer.Header>
            <Drawer.Body>
              
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              
            </Drawer.Body>
            <Drawer.Footer>
              Cancel
              Save
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      
    </Drawer.Root>
  )
}

```

### Header Actions

Here's an example of rendering actions in the header of the drawer component.

```tsx
import {
  Button,
  ButtonGroup,
  CloseButton,
  Drawer,
  Portal,
} from "@chakra-ui/react"

export const DrawerWithHeaderActions = () => {
  return (
    <Drawer.Root size="md">
      <Drawer.Trigger asChild>
        
          Open Drawer
        
      </Drawer.Trigger>
      
        
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.CloseTrigger asChild pos="initial">
                
              </Drawer.CloseTrigger>
              <Drawer.Title flex="1">Drawer Title</Drawer.Title>
              
                Cancel
                Save
              
            </Drawer.Header>
            <Drawer.Body>
              
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      
    </Drawer.Root>
  )
}

```

### Drawer with conditional variants

Here is an example of how to change variants based on the different breakpoints.

This example uses the `mdDown` breakpoint to change the drawer's placement on
smaller screens. This approach is recommended because both conditions are
translated into CSS media queries, which helps avoid base style merging issues.

If you really want to use the base condition instead, you’ll also need to define
corresponding sizes. For example:
`<Drawer.Root placement={{ base: "bottom", md: "end" }} size={{ base: "xs", md: "md" }}>`

```tsx
import {
  Button,
  CloseButton,
  Drawer,
  Kbd,
  Portal,
  Text,
} from "@chakra-ui/react"

export const DrawerWithConditionalVariants = () => {
  return (
    <>
      Open drawer and resize screen to mobile size
      <Drawer.Root placement={{ mdDown: "bottom", md: "end" }}>
        <Drawer.Trigger asChild>
          
            Open Drawer
          
        </Drawer.Trigger>
        
          
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>Drawer Title</Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>
                Press the esc key to close the drawer.
              </Drawer.Body>
              <Drawer.Footer>
                <Drawer.ActionTrigger asChild>
                  Cancel
                </Drawer.ActionTrigger>
                Save
              </Drawer.Footer>
              <Drawer.CloseTrigger asChild>
                
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        
      </Drawer.Root>
    </>
  )
}

```

### Non-Modal Drawer

We don't recommend using a non-modal drawer due to the accessibility concerns
they present. In event you need it, here's what you can do:

- set the `modal` prop to `false`
- set `pointerEvents` to `none` on the `Drawer.Positioner` component
- (optional)set the `closeOnInteractOutside` prop to `false`

```tsx
import { Button, CloseButton, Drawer, Portal } from "@chakra-ui/react"

export const DrawerNonModal = () => {
  return (
    <Drawer.Root closeOnInteractOutside={false} modal={false}>
      <Drawer.Trigger asChild>
        
          Open Drawer
        
      </Drawer.Trigger>
      
        <Drawer.Positioner pointerEvents="none">
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Drawer Title</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              
            </Drawer.Body>
            <Drawer.Footer>
              <Drawer.ActionTrigger asChild>
                Cancel
              </Drawer.ActionTrigger>
              Save
            </Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      
    </Drawer.Root>
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
| colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
| size | xs | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | The size of the component |
| placement | end | `'start' \| 'end' \| 'top' \| 'bottom'` | The placement of the component |
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
  | contained | undefined | `'true' \| 'false'` | The contained of the component |
