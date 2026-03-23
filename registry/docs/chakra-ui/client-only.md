# Client Only

```tsx
"use client"

import { ClientOnly, Text } from "@chakra-ui/react"

export const ClientOnlyBasic = () => {
  return (
    
      This content is rendered only on the client.
    
  )
}

```

## Usage

```jsx
import { ClientOnly, Skeleton } from "@chakra-ui/react"
```

```jsx

  

```

## Examples

### Fallback

Use the `fallback` prop to render a loading state while the client-side content
is being prepared.

```tsx
"use client"

import { ClientOnly, Skeleton, Stack, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"

function Clock() {
  const [time, setTime] = useState(() => new Date().toLocaleTimeString())

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => window.clearInterval(interval)
  }, [])

  return Current time: {time}
}

export const ClientOnlyWithFallback = () => {
  return (
    }>
      
        Client clock
        
      
    
  )
}

```

### Render Prop (Recommended)

When your component accesses browser-only APIs (like `window`, `document`, or
`localStorage`), use the render prop pattern to prevent server-side rendering
issues:

```tsx
"use client"

import { ClientOnly, Code, Skeleton, Stack, Text } from "@chakra-ui/react"

export const ClientOnlyRenderProp = () => {
  return (
    }>
      {() => (
        
          
            Current URL: {window.location.href}
          
          
            Screen width: {window.innerWidth}px
          
        
      )}
    
  )
}

```

This pattern ensures that components accessing browser APIs are only evaluated
on the client side, preventing hydration mismatches and server-side errors.

> It can also be used for rendering heavy components that are not needed on the
> server side.

### Direct Children (Use with Caution)

While you can pass components directly as children, be careful with components
that access browser APIs:

```tsx
/* ❌ This may cause server-side errors */
}>
  


/* ✅ This is safe */
}>
  {() => }

```

## Props

These props can be passed to the `ClientOnly` component.

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| fallback | undefined | `any` | The fallback content to render while the component is mounting on the client
side. |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
