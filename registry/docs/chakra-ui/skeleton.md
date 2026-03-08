# Skeleton

```tsx
import { HStack, Skeleton, SkeletonCircle, Stack } from "@chakra-ui/react"

export const SkeletonBasic = () => {
  return (
    <HStack gap="5">
      <SkeletonCircle size="12" />
      <Stack flex="1">
        <Skeleton height="5" />
        <Skeleton height="5" width="80%" />
      </Stack>
    </HStack>
  )
}

```

## Usage

```jsx
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react"
```

```jsx
<Stack gap="6" maxW="xs">
  <HStack width="full">
    <SkeletonCircle size="10" />
    <SkeletonText noOfLines={2} />
  </HStack>
  <Skeleton height="200px" />
</Stack>
```

## Examples

### Feed

Use the `Skeleton` component to create a feed skeleton.

```tsx
import {
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@chakra-ui/react"

export const SkeletonForFeed = () => {
  return (
    <Stack gap="6" maxW="xs">
      <HStack width="full">
        <SkeletonCircle size="10" />
        <SkeletonText noOfLines={2} />
      </HStack>
      <Skeleton height="200px" />
    </Stack>
  )
}

```

### Text

Use the `SkeletonText` component to create a skeleton for text.

```tsx
import { SkeletonText } from "@chakra-ui/react"

export const SkeletonForText = () => {
  return <SkeletonText noOfLines={3} gap="4" />
}

```

### With Children

Use the `loading` prop to show the skeleton while the content is loading.

```tsx
import { Badge, HStack, Skeleton } from "@chakra-ui/react"

export const SkeletonWithChildren = () => {
  return (
    <HStack gap="4">
      <Skeleton asChild loading={true}>
        <Badge>Select</Badge>
      </Skeleton>

      <Skeleton loading={false}>
        <Badge>Select</Badge>
      </Skeleton>
    </HStack>
  )
}

```

### Variants

Use the `variant` prop to change the visual style of the Skeleton.

```tsx
import { HStack, Skeleton, Stack, Text } from "@chakra-ui/react"

export const SkeletonWithVariants = () => {
  return (
    <Stack gap="5">
      <HStack gap="5">
        <Text width="8ch">pulse</Text>
        <Skeleton flex="1" height="5" variant="pulse" />
      </HStack>
      <HStack gap="5">
        <Text width="8ch">shine</Text>
        <Skeleton flex="1" height="5" variant="shine" />
      </HStack>
    </Stack>
  )
}

```

### Content Loading

When `loading` is changed to `false`, the Skeleton component will fade in.

```tsx
"use client"

import { Button, Skeleton, Stack, Text } from "@chakra-ui/react"
import { useState } from "react"

export const SkeletonWithLoaded = () => {
  const [loading, setLoading] = useState(true)

  return (
    <Stack align="flex-start" gap="4">
      <Skeleton height="6" loading={loading}>
        <Text>Chakra UI is cool</Text>
      </Skeleton>
      <Button size="sm" onClick={() => setLoading((c) => !c)}>
        Toggle
      </Button>
    </Stack>
  )
}

```

### Start and End Color

Use the `--start-color` and `--end-color` CSS variables to change the start and
end color of the skeleton.

```tsx
import { Skeleton } from "@chakra-ui/react"

export const SkeletonWithStartEndColor = () => {
  return (
    <Skeleton
      variant="shine"
      width="full"
      height="5"
      css={{
        "--start-color": "colors.pink.500",
        "--end-color": "colors.orange.500",
      }}
    />
  )
}

```

## Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
| loading | true | `'true' \| 'false'` | The loading of the component |
| variant | pulse | `'pulse' \| 'shine' \| 'none'` | The variant of the component |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
