# Collapsible

```tsx
import { Box, Collapsible } from "@chakra-ui/react"

export const CollapsibleBasic = () => (
  <Collapsible.Root>
    <Collapsible.Trigger paddingY="3">Toggle Collapsible</Collapsible.Trigger>
    <Collapsible.Content>
      
        Chakra UI embraces this philosophy in the world of
        design and development. Just like chakras align energy in the body,
        Chakra UI aligns your design system — bringing flow, consistency, and
        peace of mind to your codebase. It helps developers focus on creating
        beautiful, accessible UIs without friction.
        
        
        Think of each component as a wheel in your app’s UI — smooth, connected,
        and full of potential. Build with harmony. Build with
        Chakra UI.
      
    </Collapsible.Content>
  </Collapsible.Root>
)

```

## Usage

```jsx
import { Collapsible } from "@chakra-ui/react"
```

```jsx
<Collapsible.Root>
  <Collapsible.Trigger>
    
  </Collapsible.Trigger>
  
</Collapsible.Root>
```

## Examples

### Initial Open

Use the `defaultOpen` prop to render the collapsible in an open state by
default.

```tsx
import { Collapsible, Stack } from "@chakra-ui/react"
import { LuChevronRight } from "react-icons/lu"
import LoremIpsum from "react-lorem-ipsum"

export const CollapsibleInitialOpen = () => (
  <Collapsible.Root defaultOpen>
    <Collapsible.Trigger
      paddingY="3"
      display="flex"
      gap="2"
      alignItems="center"
    >
      <Collapsible.Indicator
        transition="transform 0.2s"
        _open={{ transform: "rotate(90deg)" }}
      >
        
      </Collapsible.Indicator>
      Toggle
    </Collapsible.Trigger>
    <Collapsible.Content>
      
        
      
    </Collapsible.Content>
  </Collapsible.Root>
)

```

### Partial Height

Use the `collapsedHeight` prop to show a preview of the content when collapsed.

```tsx
"use client"

import { Button, Collapsible, Stack } from "@chakra-ui/react"
import { LuChevronDown } from "react-icons/lu"
import { LoremIpsum } from "react-lorem-ipsum"

export const CollapsiblePartialHeight = () => (
  <Collapsible.Root collapsedHeight="100px">
    <Collapsible.Content
      _closed={{
        shadow: "inset 0 -12px 12px -12px var(--shadow-color)",
        shadowColor: "blackAlpha.500",
      }}
    >
      
        
        
      
    </Collapsible.Content>
    <Collapsible.Trigger asChild mt="4">
      
        <Collapsible.Context>
          {(api) => (api.open ? "Show Less" : "Show More")}
        </Collapsible.Context>
        <Collapsible.Indicator
          transition="transform 0.2s"
          _open={{ transform: "rotate(180deg)" }}
        >
          
        </Collapsible.Indicator>
      
    </Collapsible.Trigger>
  </Collapsible.Root>
)

```

### Disabled

Use the `disabled` prop to prevent the collapsible from being toggled.

```tsx
import { Box, Collapsible } from "@chakra-ui/react"

export const CollapsibleWithDisabled = () => (
  <Collapsible.Root disabled>
    <Collapsible.Trigger _disabled={{ opacity: "0.5" }}>
      Toggle (Disabled)
    </Collapsible.Trigger>
    <Collapsible.Content>
      
        This content cannot be toggled because the collapsible is disabled using
        the disabled prop.
      
    </Collapsible.Content>
  </Collapsible.Root>
)

```

### Controlled

Use the `open` and `onOpenChange` props to control the collapsible state.

```tsx
"use client"

import { Box, Collapsible, Stack } from "@chakra-ui/react"
import { useState } from "react"

export const CollapsibleControlled = () => {
  const [open, setOpen] = useState(false)

  return (
    
      Status: {open ? "Open" : "Closed"}
      <Collapsible.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
        <Collapsible.Trigger paddingY="3">
          Toggle Collapsible
        </Collapsible.Trigger>
        <Collapsible.Content>
          
            This collapsible is controlled by external state. You can open and
            close it using the buttons above or by clicking the trigger.
          
        </Collapsible.Content>
      </Collapsible.Root>
    
  )
}

```

### Store

An alternative way to control the collapsible is to use the `RootProvider`
component and the `useCollapsible` store hook.

```tsx
"use client"

import {
  Box,
  Button,
  Collapsible,
  Icon,
  Stack,
  useCollapsible,
} from "@chakra-ui/react"
import { LuChevronDown, LuChevronRight } from "react-icons/lu"

export const CollapsibleWithStore = () => {
  const collapsible = useCollapsible()

  return (
    
      
        State: {collapsible.visible ? "Expanded" : "Collapsed"}
      

      <Button
        size="sm"
        variant="subtle"
        onClick={() => collapsible.setOpen(!collapsible.open)}
      >
        Toggle
        {collapsible.open ?  : }
      

      <Collapsible.RootProvider value={collapsible}>
        <Collapsible.Content>
          
            Using the useCollapsible hook and{" "}
            RootProvider allows you to access the collapsible store
            and control the state from anywhere in your component.
          
        </Collapsible.Content>
      </Collapsible.RootProvider>
    
  )
}

```

### Lazy Mounted

Use the `unmountOnExit` prop to make the content unmount when collapsed.

```tsx
import { Box, Collapsible } from "@chakra-ui/react"

export const CollapsibleLazyMounted = () => (
  <Collapsible.Root unmountOnExit>
    <Collapsible.Trigger paddingY="3">
      Toggle Collapse (Unmount on exit)
    </Collapsible.Trigger>
    <Collapsible.Content>
      
        If you inspect the DOM, you'll notice that the content is unmounted when
        collapsed. This is useful for performance reasons when you have a lot of
        collapsible content.
      
    </Collapsible.Content>
  </Collapsible.Root>
)

```

## Guides

### Accessing collapsible context

Use `useCollapsibleContext` to access the collapsible's state and methods from
any component inside the collapsible.

```tsx
import { useCollapsibleContext } from "@chakra-ui/react"

const CollapsibleStatus = () => {
  const collapsible = useCollapsibleContext()

  return Collapsible is {collapsible.open ? "open" : "closed"}
}

const MyCollapsible = () => (
  <Collapsible.Root>
    <Collapsible.Trigger>Toggle</Collapsible.Trigger>
    <Collapsible.Content>
      
    </Collapsible.Content>
  </Collapsible.Root>
)
```

### Closing programmatically

Use `setOpen(false)` from the context to close the collapsible programmatically.

```tsx
import { useCollapsibleContext } from "@chakra-ui/react"

const CloseButton = () => {
  const collapsible = useCollapsibleContext()

  return (
     collapsible.setOpen(false)}>
      Close Collapsible
    
  )
}

const MyCollapsible = () => (
  <Collapsible.Root>
    <Collapsible.Trigger>Toggle</Collapsible.Trigger>
    <Collapsible.Content>
      
    </Collapsible.Content>
  </Collapsible.Root>
)
```

### Content Padding

To prevent janky animations when the collapsible expands or collapses, apply
padding to the inner content element rather than directly on
`Collapsible.Content` to prevent visual stuttering as its animations.

**DO THIS:**

```tsx
<Collapsible.Root>
  <Collapsible.Trigger>Toggle</Collapsible.Trigger>
  <Collapsible.Content>
    
      {/* Content here */}
    
  </Collapsible.Content>
</Collapsible.Root>
```

**NOT THIS:**

```tsx
<Collapsible.Root>
  <Collapsible.Trigger>Toggle</Collapsible.Trigger>
  {/* ❌ Avoid applying padding directly to Content */}
  <Collapsible.Content padding="4" borderWidth="1px">
    {/* Content here */}
  </Collapsible.Content>
</Collapsible.Root>
```

## Props

### Root

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| lazyMount | false | `boolean` | Whether to enable lazy mounting |
| unmountOnExit | false | `boolean` | Whether to unmount on exit. |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| unstyled | undefined | `boolean` | Whether to remove the component's style. |
| collapsedHeight | undefined | `string \| number` | The height of the content when collapsed. |
| collapsedWidth | undefined | `string \| number` | The width of the content when collapsed. |
| defaultOpen | undefined | `boolean` | The initial open state of the collapsible when rendered.
Use when you don't need to control the open state of the collapsible. |
| disabled | undefined | `boolean` | Whether the collapsible is disabled. |
| ids | undefined | `Partial<{ root: string; content: string; trigger: string }>` | The ids of the elements in the collapsible. Useful for composition. |
| onExitComplete | undefined | `VoidFunction` | The callback invoked when the exit animation completes. |
| onOpenChange | undefined | `(details: OpenChangeDetails) => void` | The callback invoked when the open state changes. |
| open | undefined | `boolean` | The controlled open state of the collapsible. |

## Explorer

Explore the `Collapsible` component parts interactively. Click on parts in the
sidebar to highlight them in the preview.

<Explorer name="collapsible-initial-open" />
