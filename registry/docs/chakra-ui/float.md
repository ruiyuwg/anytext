# Float

```tsx
import { Box, Circle, Float } from "@chakra-ui/react"

export const FloatBasic = () => (
  
    
      
        3
      
    
  
)

```

## Usage

Float requires a parent element with `position: relative` style applied.

```jsx
import { Box, Float } from "@chakra-ui/react"
```

```jsx

  
    
  

```

## Examples

### Placement

Use the `placement` prop to position the element along the edges of the
container.

```tsx
import { Box, Circle, Float, HStack, Stack } from "@chakra-ui/react"

export const FloatWithPlacements = () => (
  
    {placements.map((placement) => (
      
        {placement}
        
          
            
              3
            
          
        
      
    ))}
  
)

const placements = [
  "bottom-end",
  "bottom-start",
  "top-end",
  "top-start",
  "bottom-center",
  "top-center",
  "middle-center",
  "middle-end",
  "middle-start",
] as const

```

### Offset X

Use the `offsetX` prop to offset the element along the x-axis.

```tsx
import { Box, Circle, Float } from "@chakra-ui/react"

export const FloatWithOffsetX = () => (
  
    
      
        3
      
    
  
)

```

### Offset Y

Use the `offsetY` prop to offset the element along the y-axis.

```tsx
import { Box, Circle, Float } from "@chakra-ui/react"

export const FloatWithOffsetY = () => (
  
    
      
        3
      
    
  
)

```

### Offset

Use the `offset` prop to offset the element along both axes.

```tsx
import { Box, Circle, Float } from "@chakra-ui/react"

export const FloatWithOffset = () => (
  
    
      
        3
      
    
  
)

```

### Avatar

Here's an example of composing a `Float` component with an `Avatar` component.

```tsx
import { Avatar, Badge, Box, Float } from "@chakra-ui/react"

export const FloatWithAvatar = () => {
  return (
    
      <Avatar.Root size="lg" shape="rounded">
        
        
      </Avatar.Root>
      
        
          New
        
      
    
  )
}

```

## Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| placement | top-end | `\| ConditionalValue<\n        \| 'bottom-end'\n        \| 'bottom-start'\n        \| 'top-end'\n        \| 'top-start'\n        \| 'bottom-center'\n        \| 'top-center'\n        \| 'middle-center'\n        \| 'middle-end'\n        \| 'middle-start'\n      >\n    \| undefined` | The placement of the indicator |
| offsetX | undefined | `SystemStyleObject['left'] \| undefined` | The x offset of the indicator |
| offsetY | undefined | `SystemStyleObject['top'] \| undefined` | The y offset of the indicator |
| offset | undefined | `SystemStyleObject['top'] \| undefined` | The x and y offset of the indicator |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |

# For

```tsx
import { For } from "@chakra-ui/react"

export const ForBasic = () => {
  return (
    
      {(item, index) => {item}}
    
  )
}

```

## Usage

The `For` component is used to render a list of items in a strongly typed
manner. It is similar to the `.map()`.

```jsx
import { For } from "@chakra-ui/react"
```

```jsx
```

## Examples

### Object

Here's an example of using the `For` component to loop over an object.

```tsx
import { Box, For, Stack, Text } from "@chakra-ui/react"

export const ForWithObject = () => {
  return (
    
      <For
        each={[
          { name: "Naruto", powers: ["Shadow Clone", "Rasengan"] },
          { name: "Sasuke", powers: ["Chidori", "Sharingan"] },
          { name: "Sakura", powers: ["Healing", "Super Strength"] },
        ]}
      >
        {(item, index) => (
          
            {item.name}
            Powers: {item.powers.join(", ")}
          
        )}
      
    
  )
}

```

### Fallback

Use the `fallback` prop to render a fallback component when the array is empty
or undefined.

```tsx
import { For, Stack, VStack } from "@chakra-ui/react"
import { LuBox } from "react-icons/lu"

export const ForWithFallback = () => {
  return (
    
      <For
        each={[]}
        fallback={
          
            
            No items to show
          
        }
      >
        {(item, index) => (
          
            {item}
          
        )}
      
    
  )
}

```

## Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| each | undefined | `T[] \| readonly T[] \| undefined` | The array to iterate over |
| fallback | undefined | `React.ReactNode \| undefined` | The fallback content to render when the array is empty |

# Format Byte

```tsx
import { FormatByte, Text } from "@chakra-ui/react"

export const FormatByteBasic = () => {
  return (
    
      File size: 
    
  )
}

```

## Usage

```jsx
import { FormatByte } from "@chakra-ui/react"
```

```jsx
```

## Examples

### Sizes

The format functions works for any size of bytes.

```tsx
import { FormatByte, Stack, Text } from "@chakra-ui/react"

export const FormatByteSizes = () => {
  return (
    
      
        
      
      
        
      
      
        
      
      
        
      
    
  )
}

```

### Format Bits

Use the `unit` prop to change the byte format to bits.

```tsx
import { FormatByte, Text } from "@chakra-ui/react"

export const FormatByteWithUnit = () => {
  return (
    
      File size: 
    
  )
}

```

### Locale

Wrap the `FormatByte` component within the `LocaleProvider` to change the
locale.

```tsx
import { FormatByte, HStack, LocaleProvider, Text } from "@chakra-ui/react"

export const FormatByteWithLocale = () => {
  return (
    
      
        de-DE
        
          
        
      

      
        zh-CN
        
          
        
      
    
  )
}

```

### Unit Display

Use the `unitDisplay` prop to change the byte format to compact notation.

```tsx
import { FormatByte, Stack, Text } from "@chakra-ui/react"

export const FormatByteWithUnitDisplay = () => {
  return (
    
      
        
      
      
        
      
      
        
      
    
  )
}

```

## Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| value | undefined | `number` | The byte size to format |
| unit | undefined | `'bit' \| 'byte'` | The unit granularity to display |
| unitDisplay | undefined | `'short' \| 'long' \| 'narrow'` | The unit display |
| unitSystem | undefined | `'decimal' \| 'binary'` | The unit system to use for formatting |
