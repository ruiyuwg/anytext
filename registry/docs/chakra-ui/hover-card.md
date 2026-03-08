# Hover Card

```tsx
import {
  Avatar,
  HStack,
  HoverCard,
  Icon,
  Link,
  Portal,
  Stack,
  Text,
} from "@chakra-ui/react"
import { LuChartLine } from "react-icons/lu"

export const HoverCardBasic = () => {
  return (
    <HoverCard.Root size="sm">
      <HoverCard.Trigger asChild>
        @chakra_ui
      </HoverCard.Trigger>
      
        <HoverCard.Positioner>
          <HoverCard.Content>
            
            
              <Avatar.Root>
                
                
              </Avatar.Root>
              
                
                  
                    Chakra UI
                  
                  
                    The most powerful toolkit for building modern web
                    applications.
                  
                
                
                  
                    
                  
                  2.5M Downloads
                
              
            
          </HoverCard.Content>
        </HoverCard.Positioner>
      
    </HoverCard.Root>
  )
}

```

## Usage

```jsx
import { HoverCard } from "@chakra-ui/react"
```

```jsx
<HoverCard.Root>
  
  <HoverCard.Positioner>
    <HoverCard.Content>
      <HoverCard.Arrow>
        
      </HoverCard.Arrow>
    </HoverCard.Content>
  </HoverCard.Positioner>
</HoverCard.Root>
```

## Shortcuts

The `HoverCard` provides a shortcuts for common use cases.

### Arrow

The `HoverCard.Arrow` renders the `HoverCard.ArrowTip` component within in by
default.

This works:

```jsx
<HoverCard.Arrow>
  
</HoverCard.Arrow>
```

This might be more concise, if you don't need to customize the arrow tip.

```jsx
```

## Examples

### Controlled

Use the `open` and `onOpenChange` to control the visibility of the hover card.

```tsx
"use client"

import { Box, HoverCard, Link, Portal, Strong } from "@chakra-ui/react"
import { useState } from "react"

export const HoverCardControlled = () => {
  const [open, setOpen] = useState(false)
  return (
    <HoverCard.Root size="sm" open={open} onOpenChange={(e) => setOpen(e.open)}>
      <HoverCard.Trigger asChild>
        @chakra_ui
      </HoverCard.Trigger>
      
        <HoverCard.Positioner>
          <HoverCard.Content maxWidth="240px">
            
            
              Chakra is a Sanskrit word that means disk or
              wheel, referring to energy centers in the body
            
          </HoverCard.Content>
        </HoverCard.Positioner>
      
    </HoverCard.Root>
  )
}

```

### Delays

Control the open and close delays using the `openDelay` and `closeDelay` props.

```tsx
import { Box, HoverCard, Link, Portal, Strong } from "@chakra-ui/react"

export const HoverCardWithDelay = () => {
  return (
    <HoverCard.Root size="sm" openDelay={1000} closeDelay={100}>
      <HoverCard.Trigger asChild>
        @chakra_ui
      </HoverCard.Trigger>
      
        <HoverCard.Positioner>
          <HoverCard.Content maxWidth="240px">
            
            
              Chakra is a Sanskrit word that means disk or
              wheel, referring to energy centers in the body
            
          </HoverCard.Content>
        </HoverCard.Positioner>
      
    </HoverCard.Root>
  )
}

```

### Placement

Use the `positioning.placement` prop to configure the underlying `floating-ui`
positioning logic.

```tsx
import { Box, HoverCard, Link, Portal, Strong } from "@chakra-ui/react"

export const HoverCardWithPlacement = () => {
  return (
    <HoverCard.Root size="sm" positioning={{ placement: "top" }}>
      <HoverCard.Trigger asChild>
        @chakra_ui
      </HoverCard.Trigger>
      
        <HoverCard.Positioner>
          <HoverCard.Content maxWidth="240px">
            
            
              Chakra is a Sanskrit word that means disk or
              wheel, referring to energy centers in the body
            
          </HoverCard.Content>
        </HoverCard.Positioner>
      
    </HoverCard.Root>
  )
}

```

### Disabled

Use the `disabled` prop to prevent opening the hover card on interaction.

```tsx
"use client"

import { HoverCard, Link, Portal, Stack, Text } from "@chakra-ui/react"

export const HoverCardWithDisabled = () => {
  return (
    <HoverCard.Root size="sm" disabled>
      <HoverCard.Trigger asChild>
        @chakra_ui
      </HoverCard.Trigger>
      
        <HoverCard.Positioner>
          <HoverCard.Content>
            
            
              
                Chakra UI
              
              
                The most powerful toolkit for building modern web applications.
              
            
          </HoverCard.Content>
        </HoverCard.Positioner>
      
    </HoverCard.Root>
  )
}

```

### Open From Dialog

To use the `HoverCard` within a `Dialog`, you need to avoid portalling the
`HoverCard.Positioner` to the document's body.

```diff
-
  <HoverCard.Positioner>
    <HoverCard.Content>
      {/* ... */}
    </HoverCard.Content>
  </HoverCard.Positioner>
-
```

## Accessibility

HoverCard should be used solely for supplementary information that is not
essential for understanding the context.

It is inaccessible to screen readers and cannot be activated via keyboard, so
avoid placing crucial content within it.

## Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| closeDelay | 300 | `number` | The duration from when the mouse leaves the trigger or content until the hover card closes. |
| lazyMount | false | `boolean` | Whether to enable lazy mounting |
| openDelay | 600 | `number` | The duration from when the mouse enters the trigger until the hover card opens. |
| skipAnimationOnMount | false | `boolean` | Whether to allow the initial presence animation. |
| unmountOnExit | false | `boolean` | Whether to unmount on exit. |
| colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
| size | md | `'xs' \| 'sm' \| 'md' \| 'lg'` | The size of the component |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| unstyled | undefined | `boolean` | Whether to remove the component's style. |
| defaultOpen | undefined | `boolean` | The initial open state of the hover card when rendered.
Use when you don't need to control the open state of the hover card. |
| disabled | undefined | `boolean` | Whether the hover card is disabled |
| id | undefined | `string` | The unique identifier of the machine. |
| ids | undefined | `Partial<{ trigger: string; content: string; positioner: string; arrow: string }>` | The ids of the elements in the popover. Useful for composition. |
| immediate | undefined | `boolean` | Whether to synchronize the present change immediately or defer it to the next frame |
| onExitComplete | undefined | `VoidFunction` | Function called when the animation ends in the closed state |
| onFocusOutside | undefined | `(event: FocusOutsideEvent) => void` | Function called when the focus is moved outside the component |
| onInteractOutside | undefined | `(event: InteractOutsideEvent) => void` | Function called when an interaction happens outside the component |
| onOpenChange | undefined | `(details: OpenChangeDetails) => void` | Function called when the hover card opens or closes. |
| onPointerDownOutside | undefined | `(event: PointerDownOutsideEvent) => void` | Function called when the pointer is pressed down outside the component |
| open | undefined | `boolean` | The controlled open state of the hover card |
| positioning | undefined | `PositioningOptions` | The user provided options used to position the popover content |
| present | undefined | `boolean` | Whether the node is present (controlled by the user) |

## Explorer

Explore the `Hover Card` component parts interactively. Click on parts in the
sidebar to highlight them in the preview.

<Explorer name="hover-card-explorer-demo" />
