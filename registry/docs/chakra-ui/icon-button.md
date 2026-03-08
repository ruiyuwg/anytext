# Icon Button

```tsx
import { IconButton } from "@chakra-ui/react"
import { LuSearch } from "react-icons/lu"

export const IconButtonBasic = () => {
  return (
    
      
    
  )
}

```

## Usage

```jsx
import { IconButton } from "@chakra-ui/react"
```

```jsx

  

```

## Examples

### Sizes

Use the `size` prop to change the size of the button.

```tsx
import { For, HStack, IconButton, Text, VStack } from "@chakra-ui/react"
import { LuPhone } from "react-icons/lu"

export const IconButtonWithSizes = () => {
  return (
    
      
        {(size) => (
          
            <IconButton
              aria-label="Search database"
              variant="outline"
              size={size}
            >
              
            
            {size}
          
        )}
      
    
  )
}

```

### Variants

Use the `variant` prop to change its visual style

```tsx
import { For, HStack, IconButton, Text, VStack } from "@chakra-ui/react"
import { LuVoicemail } from "react-icons/lu"

export const IconButtonWithVariants = () => {
  return (
    
      
        {(variant) => (
          
            <IconButton
              aria-label="Call support"
              key={variant}
              variant={variant}
            >
              
            
            {variant}
          
        )}
      
    
  )
}

```

### Color

Use the `colorPalette` prop to change the color of the button

```tsx
import { For, HStack, IconButton } from "@chakra-ui/react"
import { LuSearch } from "react-icons/lu"

export const IconButtonWithColors = () => {
  return (
    
      
        {(c) => (
          
            
          
        )}
      
    
  )
}

```

### Rounded

Set `rounded="full"` to make the button fully rounded

```tsx
import { IconButton } from "@chakra-ui/react"
import { LuVoicemail } from "react-icons/lu"

export const IconButtonRounded = () => {
  return (
    
      
    
  )
}

```

## Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| spinnerPlacement | start | `'start' \| 'end' \| undefined` | The placement of the spinner |
| colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
| size | md | `'2xs' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'` | The size of the component |
| variant | solid | `'solid' \| 'subtle' \| 'surface' \| 'outline' \| 'ghost' \| 'plain'` | The variant of the component |
| spinner | undefined | `React.ReactNode \| undefined` | The spinner to show while loading. |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |

# Icon

```tsx
import { Icon } from "@chakra-ui/react"
import { HiHeart } from "react-icons/hi"

export const IconBasic = () => (
  
    
  
)

```

## Usage

```jsx
import { Icon } from "@chakra-ui/react"
```

```jsx
```

:::warning

Chakra doesn't provide any icons out of the box. Use popular icon libraries like
[react-icons](https://react-icons.github.io/react-icons/) or
[lucide-react](https://lucide.dev/react/)

:::

## Examples

### React Icons

Integrate with popular react icon libraries like `react-icons`

```tsx
import { Icon } from "@chakra-ui/react"
import { Md3dRotation } from "react-icons/md"

export const IconWithReactIcon = () => (
  
    
  
)

```

### Custom svg

Use the `asChild` prop to render custom svg icons within the `Icon` component

```tsx
import { Icon } from "@chakra-ui/react"

export const IconWithCustomSvg = () => {
  return (
    
      
        
          
          
        
      
    
  )
}

```

### Create Icon

Use the `createIcon` utility to create custom icons

```tsx
"use client"

import { createIcon } from "@chakra-ui/react"

const HeartIcon = createIcon({
  displayName: "HeartIcon",
  path: (
    <>
      
      <path
        fill="currentColor"
        d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
      />
    </>
  ),
})

export const IconWithCreateIcon = () => {
  return 
}

```
