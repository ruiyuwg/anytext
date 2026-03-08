# Close Button

```tsx
import { CloseButton } from "@chakra-ui/react"

export const CloseButtonBasic = () => {
  return 
}

```

## Usage

```jsx
import { CloseButton } from "@chakra-ui/react"
```

```jsx
```

## Examples

### Sizes

Use the `size` prop to change the size of the close button.

```tsx
import { CloseButton, For, HStack } from "@chakra-ui/react"

export const CloseButtonWithSizes = () => {
  return (
    
      
        {(size) => }
      
    
  )
}

```

### Variants

Use the `variant` prop to change the appearance of the close button.

```tsx
import { CloseButton, HStack } from "@chakra-ui/react"

export const CloseButtonWithVariants = () => {
  return (
    
      
      
      
      
    
  )
}

```

### Custom Icon

Pass the custom icon to the `children` of the `CloseButton` component.

```tsx
import { CloseButton } from "@chakra-ui/react"
import { HiX } from "react-icons/hi"

export const CloseButtonWithCustomIcon = () => {
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
| loading | false | `boolean \| undefined` | If `true`, the button will show a loading spinner. |
| loadingText | undefined | `React.ReactNode \| undefined` | The text to show while loading. |
| spinner | undefined | `React.ReactNode \| undefined` | The spinner to show while loading. |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
