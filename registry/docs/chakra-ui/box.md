# Box

```tsx
import { Box } from "@chakra-ui/react"

export const BoxBasic = () => {
  return (
    <Box background="tomato" width="100%" padding="4" color="white">
      This is the Box
    </Box>
  )
}

```

## Usage

The `Box` component provides an easy way to write styles with ease. It provides
access to design tokens and an unmatched DX when writing responsive styles.

```jsx
import { Box } from "@chakra-ui/react"
```

```jsx
<Box />
```

## Examples

### Shorthand

Use shorthand like `bg` instead of `backgroundColor`, `m` instead of `margin`,
etc.

```tsx
import { Box } from "@chakra-ui/react"

export const BoxWithShorthand = () => {
  return (
    <Box bg="tomato" w="100%" p="4" color="white">
      This is the Box
    </Box>
  )
}

```

### Pseudo Props

Use pseudo props like `_hover` to apply styles on hover, `_focus` to apply
styles on focus, etc.

```tsx
import { Box } from "@chakra-ui/react"

export const BoxWithPseudoProps = () => {
  return (
    <Box bg="tomato" w="100%" p="4" color="white" _hover={{ bg: "green" }}>
      This is the Box
    </Box>
  )
}

```

### Border

Use the `borderWidth` and `borderColor` prop to apply border styles.

> **Good to know:** Chakra applies `borderStyle: solid` globally so you don't
> have to.

```tsx
import { Box } from "@chakra-ui/react"

export const BoxWithBorder = () => {
  return (
    <Box
      p="4"
      borderWidth="1px"
      borderColor="border.disabled"
      color="fg.disabled"
    >
      Somewhat disabled box
    </Box>
  )
}

```

### As Prop

Use the `as` prop to render a different component.

> Inspect the DOM to see the rendered component.

```tsx
import { Box } from "@chakra-ui/react"

export const BoxWithAsProp = () => {
  return (
    <Box as="section" color="fg.muted">
      This is a Box rendered as a section
    </Box>
  )
}

```

### Shadow

Use the `boxShadow` or `shadow` prop to apply shadow styles.

```tsx
import { Box } from "@chakra-ui/react"

export const BoxWithShadow = () => {
  return (
    <Box bg="bg" shadow="md" borderRadius="md">
      Box with shadow
    </Box>
  )
}

```

### Composition

Here's an example of a property card built with layout primitives in Chakra.

```tsx
import { Badge, Box, HStack, Icon, Image, Text } from "@chakra-ui/react"
import { HiStar } from "react-icons/hi"

export const BoxPropertyCard = () => {
  return (
    <Box maxW="sm" borderWidth="1px">
      <Image src={data.imageUrl} alt={data.imageAlt} />

      <Box p="4" spaceY="2">
        <HStack>
          <Badge colorPalette="teal" variant="solid">
            Superhost
          </Badge>
          <HStack gap="1" fontWeight="medium">
            <Icon color="orange.400">
              <HiStar />
            </Icon>
            <Text>
              {data.rating} ({data.reviewCount})
            </Text>
          </HStack>
        </HStack>
        <Text fontWeight="medium" color="fg">
          {data.title}
        </Text>
        <HStack color="fg.muted">
          {data.formattedPrice} • {data.beds} beds
        </HStack>
      </Box>
    </Box>
  )
}

const data = {
  imageUrl: "https://bit.ly/2Z4KKcF",
  imageAlt: "Rear view of modern home with pool",
  beds: 3,
  title: "Modern home in city center in the heart of historic Los Angeles",
  formattedPrice: "$435",
  reviewCount: 34,
  rating: 4.5,
}

```

## Props

The `Box` component supports all CSS properties as props, making it easy to
style elements.
