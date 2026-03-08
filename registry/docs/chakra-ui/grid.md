# Grid

```tsx
import { Grid } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"

export const GridBasic = () => {
  return (
    
      
      
      
    
  )
}

```

## Usage

```jsx
import { Grid, GridItem } from "@chakra-ui/react"
```

```jsx

  
  

```

## Examples

### Col Span

Pass `colSpan` prop to `GridItem` to span across columns.

```tsx
import { Grid, GridItem } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"

export const GridWithColSpan = () => {
  return (
    
      
        
      
      
        
      
      
        
      
    
  )
}

```

### Spanning Columns

In some layouts, you may need certain grid items to span specific amount of
columns or rows instead of an even distribution

```tsx
import { Grid, GridItem } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"

export const GridSpanningColumns = () => {
  return (
    <Grid
      h="200px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
    >
      
        rowSpan=2
      
      
        colSpan=2
      
      
        colSpan=2
      
      
        colSpan=4
      
    
  )
}

```

## Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| templateColumns | undefined | `SystemStyleObject['gridTemplateColumns'] \| undefined` | undefined |
| autoFlow | undefined | `SystemStyleObject['gridAutoFlow'] \| undefined` | undefined |
| autoRows | undefined | `SystemStyleObject['gridAutoRows'] \| undefined` | undefined |
| autoColumns | undefined | `SystemStyleObject['gridAutoColumns'] \| undefined` | undefined |
| templateRows | undefined | `SystemStyleObject['gridTemplateRows'] \| undefined` | undefined |
| templateAreas | undefined | `SystemStyleObject['gridTemplateAreas'] \| undefined` | undefined |
| column | undefined | `SystemStyleObject['gridColumn'] \| undefined` | undefined |
| row | undefined | `SystemStyleObject['gridRow'] \| undefined` | undefined |
| inline | undefined | `boolean \| undefined` | undefined |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |

# Group

```tsx
import { Group } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"

export const GroupBasic = () => {
  return (
    
      
        1
      
      
        2
      
    
  )
}

```

## Usage

```jsx
import { Group } from "@chakra-ui/react"
```

```jsx

  
  

```

## Examples

### Button

Here's an example of using the `Group` component to group buttons together.

```tsx
import { Button, Group } from "@chakra-ui/react"

export const GroupWithButton = () => {
  return (
    
      Item 1
      Item 2
    
  )
}

```

### Attached

Use the `attached` prop to attach the children together.

```tsx
import { Badge, Button, Group, Stack } from "@chakra-ui/react"

export const GroupWithAttached = () => {
  return (
    
      
        Item 1
        Item 2
      

      
        
          Commit status
        
        
          90+
        
      
    
  )
}

```

**Note:** When composing custom components and attaching them to a `Group`,
ensure you forward props.

```tsx {10} /{...props}/
export const Demo = () => {
  return (
    
      
      Two
    
  )
}

function FocusButton(props: ButtonProps) {
  return (
    
      
    
  )
}
```

### Grow

Use the `grow` prop to make the children grow to fill the available space.

```tsx
import { Button, Group } from "@chakra-ui/react"

export const GroupWithGrow = () => {
  return (
    
      First
      Second
      Third
    
  )
}

```

## Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
