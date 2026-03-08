# Wrap

```tsx
import { Badge, Wrap } from "@chakra-ui/react"

export const WrapBasic = () => (
  <Wrap>
    <Badge>Badge 1</Badge>
    <Badge>Badge 2</Badge>
    <Badge>Badge 3</Badge>
  </Wrap>
)

```

## Usage

By default, `Wrap` applies `display: flex`, `flex-wrap: wrap`, and `gap: 8px` to
its children.

```tsx
import { Wrap, WrapItem } from "@chakra-ui/react"
```

```tsx
<Wrap>
  <div />
  <div />
</Wrap>
```

## Examples

### Gap or Spacing

Pass the `gap` prop to apply a consistent spacing between each child, even if it
wraps.

```tsx
import { Wrap } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"

export const WrapWithGap = () => (
  <Wrap gap="5">
    {Array.from({ length: 10 }).map((_, index) => (
      <Box key={index} h="12" w="12" />
    ))}
  </Wrap>
)

```

### Alignment

Pass the `align` prop to change the alignment of the child along the cross axis.

```tsx
import { Center, Wrap, WrapItem } from "@chakra-ui/react"

export const WrapWithAlign = () => (
  <Wrap gap="30px" align="center">
    {Array.from({ length: 5 }).map((_, index) => (
      <WrapItem key={index}>
        <Center w="180px" h="80px" bg="red.muted">
          Box {index + 1}
        </Center>
      </WrapItem>
    ))}
  </Wrap>
)

```

### Justify

Pass the `justify` prop to change the alignment of the child along the main
axis.

```tsx
import { Center, Wrap, WrapItem } from "@chakra-ui/react"

export const WrapWithJustify = () => (
  <Wrap gap="30px" justify="center">
    {Array.from({ length: 5 }).map((_, index) => (
      <WrapItem key={index}>
        <Center w="180px" h="80px" bg="red.muted">
          Box {index + 1}
        </Center>
      </WrapItem>
    ))}
  </Wrap>
)

```

### Row and Column Gap

Pass the `rowGap` and `columnGap` props to apply a consistent spacing between
the rows and columns.

```tsx
import { Wrap } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"

export const WrapWithRowColumnGap = () => (
  <Wrap rowGap={["0px", "24px"]} columnGap={["4px", "12px"]}>
    {Array.from({ length: 10 }).map((_, index) => (
      <Box key={index} w="12" h="12" />
    ))}
  </Wrap>
)

```

### Responsive

Use responsive values for the `gap`, `rowGap`, and `columnGap` props to apply
responsive spacing between each child.

```tsx
import { Wrap } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"

export const WrapResponsive = () => (
  <Wrap gap={["12px", "24px"]} justify={["center", "flex-start"]}>
    <Box h="12" w="12" />
    <Box h="12" w="12" />
    <Box h="12" w="12" />
    <Box h="12" w="12" />
    <Box h="12" w="12" />
    <Box h="12" w="12" />
    <Box h="12" w="12" />
    <Box h="12" w="12" />
    <Box h="12" w="12" />
    <Box h="12" w="12" />
    <Box h="12" w="12" />
  </Wrap>
)

```
