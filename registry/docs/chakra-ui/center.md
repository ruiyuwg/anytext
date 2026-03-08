# Center

```tsx
import { Box, Center } from "@chakra-ui/react"

export const CenterBasic = () => {
  return (
    
      This will be centered
    
  )
}

```

## Usage

```jsx
import { Center, Circle, Square } from "@chakra-ui/react"
```

```jsx

  This is the Center

```

## Examples

### Icon

Center can be used to create frames around icons or numbers.

```tsx
import { Box, Center, HStack } from "@chakra-ui/react"
import { LuPhone } from "react-icons/lu"

export const CenterWithIcons = () => {
  return (
    
      
        
      

      
        
          1
        
      
    
  )
}

```

### Center with Inline

Use the `inline` prop to make `Center` behave like an inline element
(`display: inline-flex`) instead of a block-level element (`display: flex`).
This makes `Center` only take up as much width as its content needs, allowing it
to fit inside links, buttons, or other inline contexts without breaking the
layout.

```tsx
import { Box, Center, Link } from "@chakra-ui/react"
import { LuArrowRight } from "react-icons/lu"

export const CenterWithInline = () => {
  return (
    
      
        Visit Chakra UI
        
      
    
  )
}

```

### Square

`Square` centers its child within a fixed-size container of equal width and
height. It accepts a `size` prop that sets both width and height to the same
value.

```tsx
import { Square } from "@chakra-ui/react"
import { LuPhoneForwarded } from "react-icons/lu"

export const CenterWithSquare = () => {
  return (
    
      
    
  )
}

```

### Circle

`Circle` extends `Square` by adding `borderRadius="9999px"` to create a perfect
circle. Like `Square`, it accepts a `size` prop that sets both width and height
to the same value.

```tsx
import { Circle } from "@chakra-ui/react"
import { LuPhoneForwarded } from "react-icons/lu"

export const CenterWithCircle = () => {
  return (
    
      
    
  )
}

```

## Props

### Center

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |

### Square

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |

### Circle

`Circle` extends `Square` and accepts all the same props. The only difference is
that `Circle` applies `borderRadius="9999px"`.

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
