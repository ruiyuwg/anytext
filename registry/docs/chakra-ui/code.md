# Code

```tsx
import { Code } from "@chakra-ui/react"

export const CodeBasic = () => {
  return {`console.log("Hello, world!")`}
}

```

## Usage

```js
import { Code } from "@chakra-ui/react"
```

```jsx
Hello world
```

## Examples

### Sizes

Use the `size` prop to change the size of the code component.

```tsx
import { Code, Stack } from "@chakra-ui/react"

export const CodeWithSizes = () => {
  return (
    
      console.log()
      console.log()
      console.log()
      console.log()
    
  )
}

```

### Variants

Use the `variant` prop to change the appearance of the code component.

```tsx
import { Code, Stack } from "@chakra-ui/react"

export const CodeWithVariants = () => {
  return (
    
      console.log()
      console.log()
      console.log()
      console.log()
    
  )
}

```

### Colors

Use the `colorPalette` prop to change the color scheme of the component.

```tsx
import { Code, Stack, Text } from "@chakra-ui/react"

export const CodeWithColors = () => {
  return (
    
      {["gray","red","green","blue","teal","pink","purple","cyan","orange","yellow"].map((colorPalette) => (
        <Stack
          align="center"
          key={colorPalette}
          direction="row"
          gap="10"
          px="4"
          width="full"
        >
          
            {colorPalette}
          
          
            {`console.log()`}
          
          
            {`console.log()`}
          
          
            {`console.log()`}
          
          
            {`console.log()`}
          
        
      ))}
    
  )
}

```

## Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
| variant | subtle | `'solid' \| 'subtle' \| 'outline' \| 'surface' \| 'plain'` | The variant of the component |
| size | sm | `'xs' \| 'sm' \| 'md' \| 'lg'` | The size of the component |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
