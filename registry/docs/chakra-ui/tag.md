# Tag

```tsx
import { HStack, Tag } from "@chakra-ui/react"

export const TagBasic = () => {
  return (
    <HStack>
      <Tag.Root>
        <Tag.Label>Plain Tag</Tag.Label>
      </Tag.Root>
      <Tag.Root>
        <Tag.Label>Closable Tag</Tag.Label>
        <Tag.EndElement>
          <Tag.CloseTrigger />
        </Tag.EndElement>
      </Tag.Root>
    </HStack>
  )
}

```

## Usage

```tsx
import { Tag } from "@chakra-ui/react"
```

```tsx
<Tag.Root>
  <Tag.Label>Tag here</Tag.Label>
</Tag.Root>
```

If you prefer a closed component composition, check out the
[snippet below](#closed-component).

## Examples

### Icon

Use the `Tag.StartElement` and `Tag.EndElement` components to add an icon to the
start or end of the tag

```tsx
import { HStack, Tag } from "@chakra-ui/react"
import { LuCircleUser, LuFileBadge } from "react-icons/lu"

export const TagWithIcon = () => {
  return (
    <HStack>
      <Tag.Root>
        <Tag.StartElement>
          <LuCircleUser />
        </Tag.StartElement>
        <Tag.Label>Tag 1</Tag.Label>
      </Tag.Root>
      <Tag.Root>
        <Tag.StartElement>
          <LuFileBadge />
        </Tag.StartElement>
        <Tag.Label>Top Rated</Tag.Label>
      </Tag.Root>
      <Tag.Root>
        <Tag.Label>Tag 2</Tag.Label>
        <Tag.EndElement>
          <LuCircleUser />
        </Tag.EndElement>
      </Tag.Root>
    </HStack>
  )
}

```

### Variants

Use the `variant` prop to change the appearance of the tag.

```tsx
import { For, HStack, Stack, Tag } from "@chakra-ui/react"
import { HiCheck } from "react-icons/hi"

export const TagWithVariants = () => {
  return (
    <Stack gap="8">
      <For each={["subtle", "solid", "outline", "surface"]}>
        {(variant) => (
          <HStack key={variant}>
            <Tag.Root variant={variant}>
              <Tag.Label>Gray</Tag.Label>
            </Tag.Root>
            <Tag.Root variant={variant}>
              <Tag.Label>Gray</Tag.Label>
              <Tag.EndElement>
                <Tag.CloseTrigger />
              </Tag.EndElement>
            </Tag.Root>
            <Tag.Root variant={variant}>
              <Tag.Label>Gray</Tag.Label>
              <Tag.EndElement>
                <HiCheck />
              </Tag.EndElement>
            </Tag.Root>
          </HStack>
        )}
      </For>
    </Stack>
  )
}

```

### Sizes

Use the `size` prop to change the size of the tag.

```tsx
import { For, HStack, Stack, Tag } from "@chakra-ui/react"
import { HiCheck } from "react-icons/hi"

export const TagWithSizes = () => {
  return (
    <Stack gap="8">
      <For each={["sm", "md", "lg"]}>
        {(size) => (
          <HStack key={size}>
            <Tag.Root size={size}>
              <Tag.Label>Gray</Tag.Label>
            </Tag.Root>
            <Tag.Root size={size}>
              <Tag.Label>Gray</Tag.Label>
              <Tag.EndElement>
                <Tag.CloseTrigger />
              </Tag.EndElement>
            </Tag.Root>
            <Tag.Root size={size}>
              <Tag.Label>Gray</Tag.Label>
              <Tag.EndElement>
                <HiCheck />
              </Tag.EndElement>
            </Tag.Root>
          </HStack>
        )}
      </For>
    </Stack>
  )
}

```

### Colors

Use the `colorPalette` prop to change the color of the tag.

```tsx
import { Stack, Tag, Text } from "@chakra-ui/react"
import { HiPlus } from "react-icons/hi"

export const TagWithColors = () => {
  return (
    <Stack gap="2" align="flex-start">
      {["gray","red","green","blue","teal","pink","purple","cyan","orange","yellow"].map((colorPalette) => (
        <Stack
          align="center"
          key={colorPalette}
          direction="row"
          gap="10"
          px="4"
        >
          <Text minW="8ch">{colorPalette}</Text>

          <Tag.Root size="sm" colorPalette={colorPalette}>
            <Tag.Label>Content</Tag.Label>
          </Tag.Root>
          <Tag.Root size="sm" colorPalette={colorPalette}>
            <Tag.StartElement>
              <HiPlus />
            </Tag.StartElement>
            <Tag.Label>Content</Tag.Label>
          </Tag.Root>
          <Tag.Root colorPalette={colorPalette} variant="solid">
            <Tag.Label>Content</Tag.Label>
            <Tag.EndElement>
              <Tag.CloseTrigger />
            </Tag.EndElement>
          </Tag.Root>
        </Stack>
      ))}
    </Stack>
  )
}

```

### Closable

Use the `Tag.CloseTrigger` within the `Tag.EndElement` to make the tag closable.

```tsx
import { HStack, Tag } from "@chakra-ui/react"
import { LuActivity } from "react-icons/lu"

export const TagWithClose = () => {
  return (
    <HStack>
      <Tag.Root>
        <Tag.StartElement>
          <LuActivity />
        </Tag.StartElement>
        <Tag.Label>Tag 1</Tag.Label>
        <Tag.EndElement>
          <Tag.CloseTrigger />
        </Tag.EndElement>
      </Tag.Root>
      <Tag.Root>
        <Tag.Label>Tag 2</Tag.Label>
        <Tag.EndElement>
          <Tag.CloseTrigger />
        </Tag.EndElement>
      </Tag.Root>
    </HStack>
  )
}

```

### Overflow

Use the `maxWidth` prop to control the maximum width of the tag. When the
content exceeds this width, it will be truncated with an ellipsis.

> This is particularly useful when dealing with dynamic or user-generated
> content where the length might vary.

```tsx
import { Tag } from "@chakra-ui/react"

export const TagWithOverflow = () => {
  return (
    <Tag.Root size="sm" colorPalette="blue" maxW="200px">
      <Tag.Label>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        molestias, laboriosam, quod, quia quidem quae voluptatem natus
        exercitationem autem quibusdam
      </Tag.Label>
      <Tag.EndElement>
        <Tag.CloseTrigger />
      </Tag.EndElement>
    </Tag.Root>
  )
}

```

### Avatar

The tag component has been designed to work well with the `Avatar` component.

> Note: Set the avatar size to `full` to ensure it's sized correctly.

```tsx
import { Avatar, For, HStack, Tag } from "@chakra-ui/react"

export const TagWithAvatar = () => {
  return (
    <HStack>
      <For each={["sm", "md", "lg", "xl"]}>
        {(size) => (
          <Tag.Root key={size} size={size} rounded="full">
            <Tag.StartElement>
              <Avatar.Root size="full">
                <Avatar.Image src="https://i.pravatar.cc/300?u=1" />
                <Avatar.Fallback name="John Doe" />
              </Avatar.Root>
            </Tag.StartElement>
            <Tag.Label>Emily {size}</Tag.Label>
          </Tag.Root>
        )}
      </For>
    </HStack>
  )
}

```

### Render as button

Use the `asChild` prop to render the tag as a button.

```tsx
import { Tag } from "@chakra-ui/react"
import { LuCheck } from "react-icons/lu"

export const TagAsButton = () => {
  return (
    <Tag.Root asChild variant="solid">
      <button type="submit">
        <Tag.Label>Fish </Tag.Label>
        <LuCheck />
      </button>
    </Tag.Root>
  )
}

```

### Closed Component

Here's how to setup the Tag for a closed component composition.

If you want to automatically add the closed component to your project, run the
command:

```bash
npx @chakra-ui/cli snippet add tag
```

## Props

### Root

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
| size | md | `'sm' \| 'md' \| 'lg' \| 'xl'` | The size of the component |
| variant | surface | `'subtle' \| 'solid' \| 'outline' \| 'surface'` | The variant of the component |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| unstyled | undefined | `boolean` | Whether to remove the component's style. |

## Explorer

Explore the `Tag` component parts interactively. Click on parts in the sidebar
to highlight them in the preview.
