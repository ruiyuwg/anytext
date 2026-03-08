# Radiomark

```tsx
import { Radiomark, Stack } from "@chakra-ui/react"

export const RadiomarkBasic = () => {
  return (
    
      
      
      
      
    
  )
}

```

## Usage

```tsx
import { Radiomark } from "@chakra-ui/react"
```

```tsx
```

## Examples

### States

The Radiomark component supports checked and unchecked states, with optional
disabled state.

```tsx
import { HStack, Radiomark } from "@chakra-ui/react"

export const RadiomarkStates = () => {
  return (
    
      
      
      
      
    
  )
}

```

### Variants

Use the `variant` prop to change the visual style of the radiomark.

```tsx
import { For, Radiomark, Stack } from "@chakra-ui/react"

export const RadiomarkVariants = () => {
  return (
    
      
        {(variant) => }
      
    
  )
}

```

### Sizes

Use the `size` prop to change the size of the radiomark.

```tsx
import { For, HStack, Radiomark } from "@chakra-ui/react"

export const RadiomarkWithSizes = () => {
  return (
    
      
        {(size) => }
      
    
  )
}

```

### Colors

Use the `colorPalette` prop to change the color scheme of the radiomark.

```tsx
import { For, HStack, Radiomark } from "@chakra-ui/react"

export const RadiomarkWithColors = () => {
  return (
    
      
        {(colorPalette) => (
          
        )}
      
    
  )
}

```

### Filled

Use the `filled` prop with the `outline` variant to add a background color to
the radiomark.

```tsx
import { HStack, Radiomark } from "@chakra-ui/react"

export const RadiomarkWithFilled = () => {
  return (
    
      
      
      
      
    
  )
}

```

## Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
| variant | solid | `'solid' \| 'subtle' \| 'outline' \| 'inverted'` | The variant of the component |
| size | md | `'xs' \| 'sm' \| 'md' \| 'lg'` | The size of the component |
| checked | undefined | `boolean \| undefined` | Whether the checkmark is checked |
| disabled | undefined | `boolean \| undefined` | Whether the checkmark is disabled |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| filled | undefined | `'true' \| 'false'` | The filled of the component |
