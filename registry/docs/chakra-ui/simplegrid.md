# SimpleGrid

```tsx
import { SimpleGrid } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"

export const SimpleGridBasic = () => {
  return (
    <SimpleGrid columns={2} gap="40px">
      <Box height="20" />
      <Box height="20" />
      <Box height="20" />
      <Box height="20" />
    </SimpleGrid>
  )
}

```

## Usage

The `SimpleGrid` component allows you to create responsive grid layouts with
ease.

```jsx
import { SimpleGrid } from "@chakra-ui/react"
```

```jsx
<SimpleGrid>
  <Box />
  <Box />
</SimpleGrid>
```

## Examples

### Columns

Specify the number of columns for the grid layout using the `columns` prop.

```tsx
import { SimpleGrid } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"

export const SimpleGridWithColumns = () => (
  <SimpleGrid columns={[2, null, 3]} gap="40px">
    <Box height="20" />
    <Box height="20" />
    <Box height="20" />
    <Box height="20" />
    <Box height="20" />
  </SimpleGrid>
)

```

### Auto-responsive

Make the grid responsive and adjust automatically without passing columns, by
using the `minChildWidth` prop. This uses css grid auto-fit and minmax()
internally.

```tsx
import { SimpleGrid } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"

export const SimpleGridWithAutofit = () => (
  <SimpleGrid minChildWidth="sm" gap="40px">
    <Box height="20" />
    <Box height="20" />
    <Box height="20" />
    <Box height="20" />
    <Box height="20" />
  </SimpleGrid>
)

```

### Column Span

Specify the size of the column by using the `colSpan` prop.

```tsx
import { GridItem, SimpleGrid } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"

export const SimpleGridWithColSpan = () => (
  <SimpleGrid columns={{ base: 2, md: 4 }} gap={{ base: "24px", md: "40px" }}>
    <GridItem colSpan={{ base: 1, md: 3 }}>
      <Box height="20">Column 1</Box>
    </GridItem>
    <GridItem colSpan={{ base: 1, md: 1 }}>
      <Box height="20">Column 2</Box>
    </GridItem>
  </SimpleGrid>
)

```

### Row and Column Gap

Pass the `rowGap` and `columnGap` props to change the row and column spacing
between the grid items.

```tsx
import { SimpleGrid } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"

export const SimpleGridWithRowAndColGap = () => {
  return (
    <SimpleGrid columns={2} columnGap="2" rowGap="4">
      <Box height="20" />
      <Box height="20" />
      <Box height="20" />
      <Box height="20" />
    </SimpleGrid>
  )
}

```
