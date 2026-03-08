# Badge

```tsx
import { Badge, Stack } from "@chakra-ui/react"

export const BadgeBasic = () => {
  return (
    <Stack direction="row">
      <Badge>Default</Badge>
      <Badge colorPalette="green">Success</Badge>
      <Badge colorPalette="red">Removed</Badge>
      <Badge colorPalette="purple">New</Badge>
    </Stack>
  )
}

```

## Usage

```jsx
import { Badge } from "@chakra-ui/react"
```

```jsx
<Badge>Badge</Badge>
```

## Examples

### Icon

Render an icon within the badge directly

```tsx
import { Badge, Stack } from "@chakra-ui/react"
import { HiAtSymbol, HiStar } from "react-icons/hi"

export const BadgeWithIcon = () => {
  return (
    <Stack align="flex-start">
      <Badge variant="solid" colorPalette="blue">
        <HiStar />
        New
      </Badge>
      <Badge variant="solid" colorPalette="green">
        New
        <HiAtSymbol />
      </Badge>
    </Stack>
  )
}

```

### Variants

Badges come in different variants

```tsx
import { Badge, Stack } from "@chakra-ui/react"

export const BadgeWithVariants = () => {
  return (
    <Stack direction="row">
      <Badge variant="outline">Outline</Badge>
      <Badge variant="solid">Solid</Badge>
      <Badge variant="subtle">Subtle</Badge>
      <Badge variant="surface">Surface</Badge>
    </Stack>
  )
}

```

### Sizes

Badges come in different sizes

```tsx
import { Badge, HStack } from "@chakra-ui/react"

export const BadgeWithSizes = () => {
  return (
    <HStack>
      <Badge size="xs">New</Badge>
      <Badge size="sm">New</Badge>
      <Badge size="md">New</Badge>
      <Badge size="lg">New</Badge>
    </HStack>
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
