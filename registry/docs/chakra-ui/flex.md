# Flex

```tsx
import { Flex } from "@chakra-ui/react"

export const FlexBasic = () => {
  return (
    
      
      
      
    
  )
}

```

## Usage

```jsx
import { Flex, Spacer } from "@chakra-ui/react"
```

```jsx

  
  

```

## Examples

### Direction

Use the `direction` or `flexDirection` prop to change the direction of the flex

```tsx
import { Flex } from "@chakra-ui/react"

export const FlexWithDirection = () => {
  return (
    
      
      
      
    
  )
}

```

### Align

Use the `align` or `alignItems` prop to align the children along the cross axis.

```tsx
import { Flex } from "@chakra-ui/react"

export const FlexWithAlign = () => {
  return (
    
      
      
      
    
  )
}

```

### Justify

Use the `justify` or `justifyContent` prop to align the children along the main
axis.

```tsx
import { Flex } from "@chakra-ui/react"

export const FlexWithJustify = () => {
  return (
    
      
        
        
          flex-start
        
        
      

      
        
        
          center
        
        
      

      
        
        
          flex-end
        
        
      

      
        
        
          space-between
        
        
      
    
  )
}

```

### Order

Use the `order` prop to change the order of the children.

```tsx
import { Flex } from "@chakra-ui/react"

export const FlexWithOrder = () => {
  return (
    
      
        1
      
      
        2
      
      
        3
      
    
  )
}

```

### Auto Margin

Apply margin to a flex item to push it away from its siblings.

```tsx
import { Flex } from "@chakra-ui/react"

export const FlexWithAutoMargin = () => {
  return (
    
      
      
      
    
  )
}

```

### Spacer

Use the `Spacer` component to create flexible space between flex items. It will
expand to fill all available space, pushing items to opposite ends.

```tsx
import { Box, Flex, Spacer } from "@chakra-ui/react"

export const FlexWithSpacer = () => {
  return (
    
      
        Box 1
      
      
      
        Box 2
      
    
  )
}

```

### Wrap

Use the `wrap` or `flexWrap` prop to wrap the children when they overflow the
parent.

```tsx
import { Flex } from "@chakra-ui/react"

export const FlexWithWrap = () => {
  return (
    
      
      
      
    
  )
}

```

## Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| align | undefined | `SystemStyleObject['alignItems'] \| undefined` | undefined |
| justify | undefined | `SystemStyleObject['justifyContent'] \| undefined` | undefined |
| wrap | undefined | `SystemStyleObject['flexWrap'] \| undefined` | undefined |
| direction | undefined | `SystemStyleObject['flexDirection'] \| undefined` | undefined |
| basis | undefined | `SystemStyleObject['flexBasis'] \| undefined` | undefined |
| grow | undefined | `SystemStyleObject['flexGrow'] \| undefined` | undefined |
| shrink | undefined | `SystemStyleObject['flexShrink'] \| undefined` | undefined |
| inline | undefined | `boolean \| undefined` | undefined |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
