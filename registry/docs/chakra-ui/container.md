# Container

```tsx
import { Container } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"

export const ContainerBasic = () => {
  return (
    
      
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        consectetur, tortor in lacinia eleifend, dui nisl tristique nunc.
      
    
  )
}

```

## Usage

The default `maxWidth` is `8xl` which maps to `90rem (1440px)`.

```jsx
import { Container } from "@chakra-ui/react"
```

```jsx

  

```

## Examples

### Sizes

Use the `maxWidth` prop to change the size of the container.

```tsx
import { Container, For, Stack } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"

export const ContainerWithSizes = () => {
  return (
    
      
        {(size) => (
          
            
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              consectetur, tortor in lacinia eleifend, dui nisl tristique nunc.
            
          
        )}
      
    
  )
}

```

### Fluid

Use the `fluid` prop to make the container stretch to fill the width of its
parent.

```tsx
import { Container } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"

export const ContainerWithFluid = () => {
  return (
    
      
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        consectetur, tortor in lacinia eleifend, dui nisl tristique nunc.
      
    
  )
}

```

## Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| centerContent | undefined | `'true' \| 'false'` | The centerContent of the component |
| fluid | undefined | `'true' \| 'false'` | The fluid of the component |
