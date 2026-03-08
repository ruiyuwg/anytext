# Presence

```tsx
"use client"

import {
  Button,
  Center,
  Presence,
  Stack,
  useDisclosure,
} from "@chakra-ui/react"

export const PresenceFade = () => {
  const { open, onToggle } = useDisclosure()
  return (
    
      
        Click Me
      
      <Presence
        present={open}
        animationName={{ _open: "fade-in", _closed: "fade-out" }}
        animationDuration="moderate"
      >
        
          Fade
        
      
    
  )
}

```

## Usage

```jsx
import { Presence } from "@chakra-ui/react"
```

```jsx

  Presence content

```

Think of `Presence` like the `AnimatePresence` component from Framer Motion,
except that it's built for CSS animations instead.

The key things to note:

- the `present` prop is a boolean that controls the presence state of the
  component.
- the `_open` condition is used to style the open state.
- the `_closed` condition is used to style the closed state.

## Examples

### Fade

Setting the animation name to `fade-in` and `fade-out`, the component will
animate the entry and exit of the element.

```tsx
"use client"

import {
  Button,
  Center,
  Presence,
  Stack,
  useDisclosure,
} from "@chakra-ui/react"

export const PresenceFade = () => {
  const { open, onToggle } = useDisclosure()
  return (
    
      
        Click Me
      
      <Presence
        present={open}
        animationName={{ _open: "fade-in", _closed: "fade-out" }}
        animationDuration="moderate"
      >
        
          Fade
        
      
    
  )
}

```

### Scale Fade

Using the animation styles `scale-fade-in` and `scale-fade-out`, the component
will animate the entry and exit of the element.

```tsx
"use client"

import {
  Button,
  Center,
  Presence,
  Stack,
  useDisclosure,
} from "@chakra-ui/react"

export const PresenceScaleFade = () => {
  const { open, onToggle } = useDisclosure()
  return (
    
      
        Click Me
      
      <Presence
        present={open}
        animationStyle={{ _open: "scale-fade-in", _closed: "scale-fade-out" }}
        animationDuration="moderate"
      >
        
          Scale Fade
        
      
    
  )
}

```

### Slide Fade

Here's an example that uses the animation names `slide-from-bottom` and
`slide-to-bottom` to animate the entry and exit of the element.

```tsx
"use client"

import {
  Button,
  Center,
  Presence,
  Stack,
  useDisclosure,
} from "@chakra-ui/react"

export const PresenceSlideFade = () => {
  const { open, onToggle } = useDisclosure()
  return (
    
      
        Click Me
      
      <Presence
        present={open}
        animationName={{
          _open: "slide-from-bottom, fade-in",
          _closed: "slide-to-bottom, fade-out",
        }}
        animationDuration="moderate"
      >
        
          Slide Fade
        
      
    
  )
}

```

### Slide

Here's an example that uses the animation names `slide-from-bottom-full` and
`slide-to-bottom-full` to animate the entry and exit of the element.

```tsx
"use client"

import {
  Button,
  Center,
  Presence,
  Stack,
  useDisclosure,
} from "@chakra-ui/react"

export const PresenceSlide = () => {
  const { open, onToggle } = useDisclosure()
  return (
    
      
        Click Me
      
      <Presence
        position="fixed"
        bottom="0"
        insetX="0"
        present={open}
        animationName={{
          _open: "slide-from-bottom-full",
          _closed: "slide-to-bottom-full",
        }}
        animationDuration="moderate"
      >
        
          Slide
        
      
    
  )
}

```

### Lazy Mount

Use the `lazyMount` prop to delay the mount of the component until it's present.

```tsx
"use client"

import {
  Alert,
  Button,
  Center,
  Presence,
  Stack,
  useDisclosure,
} from "@chakra-ui/react"

export const PresenceLazyMount = () => {
  const { open, onToggle } = useDisclosure()
  return (
    
      <Alert.Root>
        
        <Alert.Title>
          Check the DOM to see that the element not mounted initially
        </Alert.Title>
      </Alert.Root>
      
        Click Me
      
      <Presence
        lazyMount
        present={open}
        animationName={{ _open: "fade-in", _closed: "fade-out" }}
        animationDuration="moderate"
      >
        
          Fade
        
      
    
  )
}

```

### Unmount On Exit

Use the `unmountOnExit` prop to unmount the component when it's not present.

```tsx
"use client"

import {
  Alert,
  Button,
  Center,
  Presence,
  Stack,
  useDisclosure,
} from "@chakra-ui/react"

export const PresenceUnmountOnExit = () => {
  const { open, onToggle } = useDisclosure()
  return (
    
      <Alert.Root>
        
        <Alert.Title>
          Check the DOM to see that the element is removed when not present.
        </Alert.Title>
      </Alert.Root>
      
        Click Me
      
      <Presence
        unmountOnExit
        present={open}
        animationName={{ _open: "fade-in", _closed: "fade-out" }}
        animationDuration="moderate"
      >
        
          Fade
        
      
    
  )
}

```
