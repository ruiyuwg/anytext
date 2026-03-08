# Popover

```tsx
import { Button, Input, Popover, Portal, Text } from "@chakra-ui/react"

export const PopoverBasic = () => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        
          Click me
        
      </Popover.Trigger>
      
        <Popover.Positioner>
          <Popover.Content>
            
            <Popover.Body>
              <Popover.Title fontWeight="medium">Naruto Form</Popover.Title>
              
                Naruto is a Japanese manga series written and illustrated by
                Masashi Kishimoto.
              
              
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      
    </Popover.Root>
  )
}

```

## Usage

```tsx
import { Popover } from "@chakra-ui/react"
```

```tsx
<Popover.Root>
  
  <Popover.Positioner>
    <Popover.Content>
      
      <Popover.Arrow>
        
      </Popover.Arrow>
      <Popover.Body>
        
      </Popover.Body>
    </Popover.Content>
  </Popover.Positioner>
</Popover.Root>
```

## Shortcuts

The `Popover` provides a shortcuts for common use cases.

### Arrow

The `Popover.Arrow` renders the `Popover.ArrowTip` component within in by
default.

This works:

```jsx
<Popover.Arrow>
  
</Popover.Arrow>
```

This might be more concise, if you don't need to customize the arrow tip.

```jsx
```

## Examples

### Controlled

Use the `open` and `onOpenChange` to control the visibility of the popover.

```tsx
"use client"

import { Button, Popover, Portal } from "@chakra-ui/react"
import { useState } from "react"

export const PopoverControlled = () => {
  const [open, setOpen] = useState(false)
  return (
    <Popover.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Popover.Trigger asChild>
        
          Click me
        
      </Popover.Trigger>
      
        <Popover.Positioner>
          <Popover.Content>
            
            <Popover.Body>
              This is a popover with the same width as the trigger button
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      
    </Popover.Root>
  )
}

```

### Sizes

Use the `size` prop to change the size of the popover component.

```tsx
import {
  Button,
  For,
  Input,
  Popover,
  Portal,
  Stack,
  Text,
} from "@chakra-ui/react"

export const PopoverWithSizes = () => {
  return (
    
      
        {(size) => (
          <Popover.Root key={size} size={size}>
            <Popover.Trigger asChild>
              
                Click me
              
            </Popover.Trigger>
            
              <Popover.Positioner>
                <Popover.Content>
                  
                  <Popover.Body>
                    <Popover.Title fontWeight="medium">
                      Naruto Form
                    </Popover.Title>
                    
                      Naruto is a Japanese manga series written and illustrated
                      by Masashi Kishimoto.
                    
                    
                  </Popover.Body>
                </Popover.Content>
              </Popover.Positioner>
            
          </Popover.Root>
        )}
      
    
  )
}

```

### Lazy Mount

Use the `lazyMounted` and/or `unmountOnExit` prop to defer the mounting of the
popover content until it's opened.

```tsx
import { Button, Popover, Portal, Text } from "@chakra-ui/react"

export const PopoverLazyMounted = () => {
  return (
    <Popover.Root lazyMount unmountOnExit>
      <Popover.Trigger asChild>
        
          Click me
        
      </Popover.Trigger>
      
        <Popover.Positioner>
          <Popover.Content>
            
            <Popover.Body>
              <Popover.Title fontWeight="medium">Naruto Form</Popover.Title>
              
                Naruto is a Japanese manga series written and illustrated by
                Masashi Kishimoto.
              
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      
    </Popover.Root>
  )
}

```

### Placement

Use the `positioning.placement` prop to configure the underlying `floating-ui`
positioning logic.

```tsx
import { Button, Popover, Portal } from "@chakra-ui/react"

export const PopoverWithPlacement = () => {
  return (
    <Popover.Root positioning={{ placement: "bottom-end" }}>
      <Popover.Trigger asChild>
        
          Click me
        
      </Popover.Trigger>
      
        <Popover.Positioner>
          <Popover.Content>
            
            <Popover.Body>Some content</Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      
    </Popover.Root>
  )
}

```

### Offset

Use the `positioning.offset` prop to adjust the position of the popover content.

```tsx
import { Button, Popover, Portal } from "@chakra-ui/react"

export const PopoverWithOffset = () => {
  return (
    <Popover.Root positioning={{ offset: { crossAxis: 0, mainAxis: 0 } }}>
      <Popover.Trigger asChild>
        
          Open
        
      </Popover.Trigger>
      
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Body>
              This popover has a custom offset from its trigger
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      
    </Popover.Root>
  )
}

```

### Same Width

Use the `positioning.sameWidth` prop to make the popover content the same width
as the trigger.

```tsx
import { Button, Popover, Portal } from "@chakra-ui/react"

export const PopoverWithSameWidth = () => {
  return (
    <Popover.Root positioning={{ sameWidth: true }}>
      <Popover.Trigger asChild>
        
          Click me
        
      </Popover.Trigger>
      
        <Popover.Positioner>
          <Popover.Content width="auto">
            
            <Popover.Body>
              This is a popover with the same width as the trigger button
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      
    </Popover.Root>
  )
}

```

### Nested Popover

When nesting floating elements like popover, select, menu, inside of the
popover, avoid portalling them to the document's body.

```diff
-
  <Popover.Positioner>
    <Popover.Content>
      {/* ... */}
    </Popover.Content>
  </Popover.Positioner>
-
```

```tsx
import { Button, Popover, Portal, Text } from "@chakra-ui/react"

export const PopoverNested = () => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        
          Click me
        
      </Popover.Trigger>
      
        <Popover.Positioner>
          <Popover.Content>
            
            <Popover.Body>
              
                Naruto is a Japanese manga series written and illustrated by
                Masashi Kishimoto.
              

              <Popover.Root>
                <Popover.Trigger asChild>
                  
                    Open Nested Popover
                  
                </Popover.Trigger>
                <Popover.Positioner>
                  <Popover.Content>
                    
                    <Popover.Body>Some nested popover content</Popover.Body>
                  </Popover.Content>
                </Popover.Positioner>
              </Popover.Root>
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      
    </Popover.Root>
  )
}

```

### Initial Focus

Use the `initialFocusEl` prop to set the initial focus of the popover content.

```tsx
"use client"

import { Box, Button, Group, Popover, Portal } from "@chakra-ui/react"
import { useRef } from "react"

export const PopoverWithInitialFocus = () => {
  const ref = useRef(null)
  return (
    <Popover.Root initialFocusEl={() => ref.current}>
      <Popover.Trigger asChild>
        
          Click me
        
      </Popover.Trigger>
      
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Header>Manage Your Channels</Popover.Header>
            
            <Popover.Body>
              This is a popover with the same width as the trigger button
            </Popover.Body>
            <Popover.Footer>
              
                Step 2 of 4
              
              
                
                  Prev
                
                Next
              
            </Popover.Footer>
            
          </Popover.Content>
        </Popover.Positioner>
      
    </Popover.Root>
  )
}

```

### Form

Here's an example of a popover with a form inside.

```tsx
import {
  Button,
  Field,
  Input,
  Popover,
  Portal,
  Stack,
  Textarea,
} from "@chakra-ui/react"

export const PopoverWithForm = () => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        
          Click me
        
      </Popover.Trigger>
      
        <Popover.Positioner>
          <Popover.Content>
            
            <Popover.Body>
              
                <Field.Root>
                  <Field.Label>Width</Field.Label>
                  
                </Field.Root>
                <Field.Root>
                  <Field.Label>Height</Field.Label>
                  
                </Field.Root>
                <Field.Root>
                  <Field.Label>Comments</Field.Label>
                  
                </Field.Root>
              
            </Popover.Body>
            
          </Popover.Content>
        </Popover.Positioner>
      
    </Popover.Root>
  )
}

```

### Custom Background

Use the `--popover-bg` CSS variable to change the background color of the
popover content and its arrow.

```tsx
import { Button, Input, Popover, Portal, Text } from "@chakra-ui/react"

export const PopoverWithCustomBg = () => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        
          Click me
        
      </Popover.Trigger>
      
        <Popover.Positioner>
          <Popover.Content css={{ "--popover-bg": "lightblue" }}>
            
            <Popover.Body>
              <Popover.Title fontWeight="medium">Naruto Form</Popover.Title>
              
                Naruto is a Japanese manga series written and illustrated by
                Masashi Kishimoto.
              
              
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      
    </Popover.Root>
  )
}

```

### Open From Dialog

To use the `Popover` within a `Dialog`, you need to avoid portalling the
`Popover.Positioner` to the document's body.

```diff
-
  <Popover.Positioner>
    <Popover.Content>
      {/* ... */}
    </Popover.Content>
  </Popover.Positioner>
-
```

If you have set `scrollBehavior="inside"` on the `Dialog`, you need to:

- Set the popover positioning to `fixed` to avoid the popover from being clipped
  by the dialog.
- Set `hideWhenDetached` to `true` to hide the popover when the trigger is
  scrolled out of view.

```tsx
<Popover.Root positioning={{ strategy: "fixed", hideWhenDetached: true }}>
  {/* ... */}
</Popover.Root>
```

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

export const PopoverOpenFromDialog = () => {
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
              <Dialog.Title>Popover in Dialog</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              
            </Dialog.Body>
            
          </Dialog.Content>
        </Dialog.Positioner>
      
    </Dialog.Root>
  )
}

function DialogPopover() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        
          Click me
        
      </Popover.Trigger>
      <Popover.Positioner>
        <Popover.Content>
          
          <Popover.Body>
            <Popover.Title fontWeight="medium">Naruto Form</Popover.Title>
            
              Naruto is a Japanese manga series written and illustrated by
              Masashi Kishimoto.
            
          </Popover.Body>
        </Popover.Content>
      </Popover.Positioner>
    </Popover.Root>
  )
}

```

## Guide

### Accessing popover context

Use `usePopoverContext` to access the popover's state and methods from any
component inside the popover.

```tsx
import { usePopoverContext } from "@chakra-ui/react"

const PopoverStatus = () => {
  const popover = usePopoverContext()

  return Popover is {popover.open ? "open" : "closed"}
}

const MyPopover = () => (
  <Popover.Root>
    <Popover.Trigger>Open</Popover.Trigger>
    <Popover.Positioner>
      <Popover.Content>
        
      </Popover.Content>
    </Popover.Positioner>
  </Popover.Root>
)
```

### Closing programmatically

Use `setOpen(false)` from the context to close the popover programmatically.

```tsx
import { usePopoverContext } from "@chakra-ui/react"

const CloseButton = () => {
  const popover = usePopoverContext()

  return  popover.setOpen(false)}>Close Popover
}

const MyPopover = () => (
  <Popover.Root>
    <Popover.Trigger>Open</Popover.Trigger>
    <Popover.Positioner>
      <Popover.Content>
        
      </Popover.Content>
    </Popover.Positioner>
  </Popover.Root>
)
```

### Positioning based on ref

Use `positioning.getAnchorRect()` to position the popover based on a custom
element ref.

```tsx
import { useRef } from "react"

const MyPopover = () => {
  const anchorRef = useRef(null)

  return (
    <>
      Anchor Element

      <Popover.Root
        positioning={{
          getAnchorRect() {
            return anchorRef.current?.getBoundingClientRect()
          },
        }}
      >
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Body>
              This popover is anchored to the div above
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Popover.Root>
    </>
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

## Explorer

Explore the `Popover` component parts interactively. Click on parts in the
sidebar to highlight them in the preview.

<Explorer name="popover-explorer-demo" />

# Portal

## Usage

The `Portal` uses the `ReactDOM.createPortal` API to render an element at the
end of `document.body` or specific container.

```jsx
import { Portal } from "@chakra-ui/react"
```

```jsx

  Portal content

```

## Examples

### Custom Container

Use the `container` prop to render the portal in a custom container.

```jsx
import { Portal } from "@chakra-ui/react"

const Demo = () => {
  const containerRef = React.useRef()
  return (
    <>
      
        Portal content
      
      
    </>
  )
}
```

### Disabled

Use the `disabled` prop to disable the portal. This will render the children in
the same DOM hierarchy.

```jsx
import { Portal } from "@chakra-ui/react"

const Demo = () => {
  return (
    
      Will render the content in place
    
  )
}
```

## Server Rendering

During SSR, the `Portal` component directly renders its content. If you run into
any mismatch warnings, we recommended conditionally rendering the `Portal`
component only on the client-side.

## Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| container | undefined | `RefObject<HTMLElement \| null>` | undefined |
| disabled | undefined | `boolean` | undefined |
