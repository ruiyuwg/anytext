# Avatar

```tsx
import { Avatar } from "@chakra-ui/react"

export const AvatarBasic = () => {
  return (
    <Avatar.Root>
      <Avatar.Fallback name="Segun Adebayo" />
      <Avatar.Image src="https://bit.ly/sage-adebayo" />
    </Avatar.Root>
  )
}

```

## Usage

```tsx
import { Avatar, AvatarGroup } from "@chakra-ui/react"
```

```tsx
<AvatarGroup>
  <Avatar.Root>
    <Avatar.Fallback />
    <Avatar.Image />
  </Avatar.Root>
</AvatarGroup>
```

If you prefer a closed component composition, check out the
[snippet below](#closed-component).

## Examples

### Sizes

Use the `size` prop to change the size of the avatar

```tsx
import { Avatar, For, HStack } from "@chakra-ui/react"

export const AvatarWithSizes = () => {
  return (
    <HStack gap="3">
      <For each={["xs", "sm", "md", "lg", "xl", "2xl"]}>
        {(size) => (
          <Avatar.Root size={size} key={size}>
            <Avatar.Fallback name="Segun Adebayo" />
            <Avatar.Image src="https://bit.ly/sage-adebayo" />
          </Avatar.Root>
        )}
      </For>
    </HStack>
  )
}

```

### Variants

Use the `variant` prop to change the variant of the avatar

```tsx
import { Avatar, For, HStack } from "@chakra-ui/react"

export const AvatarWithVariants = () => {
  return (
    <HStack gap="3">
      <For each={["solid", "outline", "subtle"]}>
        {(variant) => (
          <Avatar.Root key={variant} variant={variant}>
            <Avatar.Fallback name="Segun Adebayo" />
          </Avatar.Root>
        )}
      </For>
    </HStack>
  )
}

```

### Shape

Use the `shape` prop to change the shape of the avatar, from `rounded` to
`square`

```tsx
import { Avatar, HStack } from "@chakra-ui/react"

export const AvatarWithShape = () => {
  return (
    <HStack gap="4">
      <Avatar.Root shape="square" size="lg">
        <Avatar.Fallback name="Jane Smith" />
        <Avatar.Image src="https://i.pravatar.cc/150?img=12" />
      </Avatar.Root>
      <Avatar.Root shape="rounded" size="lg">
        <Avatar.Fallback name="Segun Adebayo" />
        <Avatar.Image src="https://bit.ly/sage-adebayo" />
      </Avatar.Root>
      <Avatar.Root shape="full" size="lg">
        <Avatar.Fallback name="Random User" />
        <Avatar.Image src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04" />
      </Avatar.Root>
    </HStack>
  )
}

```

### Colors

Use the `colorPalette` prop to change the color of the avatar

```tsx
import { Avatar, Stack, Text } from "@chakra-ui/react"

export const AvatarWithColors = () => {
  return (
    <Stack gap="2" align="flex-start">
      {["gray","red","green","blue","teal","pink","purple","cyan","orange","yellow"].map((colorPalette) => (
        <Stack key={colorPalette} align="center" direction="row" gap="10">
          <Text minW="8ch">{colorPalette}</Text>
          <Avatar.Root colorPalette={colorPalette}>
            <Avatar.Fallback name="Segun Adebayo" />
            <Avatar.Image src="https://bit.ly/sage-adebayo" />
          </Avatar.Root>
          <Avatar.Root colorPalette={colorPalette}>
            <Avatar.Fallback name="Segun Adebayo" />
          </Avatar.Root>
          <Avatar.Root colorPalette={colorPalette}>
            <Avatar.Fallback />
          </Avatar.Root>
        </Stack>
      ))}
    </Stack>
  )
}

```

### Fallback

Render `Avatar.Icon` as the fallback when the name is not provided or when the
image fails to load.

```tsx
import { Avatar, HStack } from "@chakra-ui/react"

export const AvatarWithFallback = () => {
  return (
    <HStack>
      <Avatar.Root>
        <Avatar.Fallback name="Oshigaki Kisame" />
        <Avatar.Image src="https://bit.ly/broken-link" />
      </Avatar.Root>
      <Avatar.Root colorPalette="teal">
        <Avatar.Fallback name="Sasuke Uchiha" />
        <Avatar.Image src="https://bit.ly/broken-link" />
      </Avatar.Root>
      <Avatar.Root colorPalette="red">
        <Avatar.Fallback />
        <Avatar.Image src="https://bit.ly/broken-link" />
      </Avatar.Root>
    </HStack>
  )
}

```

### Random Color

Combine the `colorPalette` prop with some custom logic to dynamically change the
color of the avatar

```tsx
import { Avatar, HStack } from "@chakra-ui/react"

const colorPalette = ["red", "blue", "green", "yellow", "purple", "orange"]

const pickPalette = (name: string) => {
  const index = name.charCodeAt(0) % colorPalette.length
  return colorPalette[index]
}

export const AvatarWithRandomColor = () => {
  return (
    <HStack>
      <Avatar.Root colorPalette={pickPalette("Shane Nelson")}>
        <Avatar.Fallback name="Shane Nelson" />
      </Avatar.Root>
      <Avatar.Root colorPalette={pickPalette("Brook Lesnar")}>
        <Avatar.Fallback name="Brook Lesnar" />
      </Avatar.Root>
      <Avatar.Root colorPalette={pickPalette("John Lennon")}>
        <Avatar.Fallback name="John Lennon" />
      </Avatar.Root>
    </HStack>
  )
}

```

### Ring

Use the `outline*` props to add a ring around the avatar

```tsx
import { Avatar, HStack, defineStyle } from "@chakra-ui/react"

const ringCss = defineStyle({
  outlineWidth: "2px",
  outlineColor: "colorPalette.500",
  outlineOffset: "2px",
  outlineStyle: "solid",
})

export const AvatarWithRing = () => {
  return (
    <HStack gap="4">
      <Avatar.Root css={ringCss} colorPalette="pink">
        <Avatar.Fallback name="Random" />
        <Avatar.Image src="https://randomuser.me/api/portraits/men/70.jpg" />
      </Avatar.Root>
      <Avatar.Root css={ringCss} colorPalette="green">
        <Avatar.Fallback name="Random" />
        <Avatar.Image src="https://randomuser.me/api/portraits/men/54.jpg" />
      </Avatar.Root>
      <Avatar.Root css={ringCss} colorPalette="blue">
        <Avatar.Fallback name="Random" />
        <Avatar.Image src="https://randomuser.me/api/portraits/men/42.jpg" />
      </Avatar.Root>
    </HStack>
  )
}

```

### Group

Use the `Group` component to group multiple avatars together

```tsx
import { Avatar, AvatarGroup } from "@chakra-ui/react"

export const AvatarWithGroup = () => {
  return (
    <AvatarGroup gap="0" spaceX="-3" size="lg">
      <Avatar.Root>
        <Avatar.Fallback name="Uchiha Sasuke" />
        <Avatar.Image src="https://cdn.myanimelist.net/r/84x124/images/characters/9/131317.webp?s=d4b03c7291407bde303bc0758047f6bd" />
      </Avatar.Root>

      <Avatar.Root>
        <Avatar.Fallback name="Baki Ani" />
        <Avatar.Image src="https://cdn.myanimelist.net/r/84x124/images/characters/7/284129.webp?s=a8998bf668767de58b33740886ca571c" />
      </Avatar.Root>

      <Avatar.Root>
        <Avatar.Fallback name="Uchiha Chan" />
        <Avatar.Image src="https://cdn.myanimelist.net/r/84x124/images/characters/9/105421.webp?s=269ff1b2bb9abe3ac1bc443d3a76e863" />
      </Avatar.Root>
      <Avatar.Root variant="solid">
        <Avatar.Fallback>+3</Avatar.Fallback>
      </Avatar.Root>
    </AvatarGroup>
  )
}

```

### Stacking

When using the `AvatarGroup` component, you can use the `stacking` prop to
change the stacking order of the avatars

```tsx
import { Avatar, AvatarGroup, Stack } from "@chakra-ui/react"

export const AvatarGroupWithStacking = () => {
  return (
    <Stack>
      <AvatarGroup size="lg" stacking="last-on-top">
        {items.map((item) => (
          <Avatar.Root key={item.name}>
            <Avatar.Fallback name={item.name} />
            <Avatar.Image src={item.src} />
          </Avatar.Root>
        ))}
        <Avatar.Root>
          <Avatar.Fallback>+3</Avatar.Fallback>
        </Avatar.Root>
      </AvatarGroup>

      <AvatarGroup size="lg" stacking="first-on-top">
        {items.map((item) => (
          <Avatar.Root key={item.name}>
            <Avatar.Fallback name={item.name} />
            <Avatar.Image src={item.src} />
          </Avatar.Root>
        ))}
        <Avatar.Root>
          <Avatar.Fallback>+3</Avatar.Fallback>
        </Avatar.Root>
      </AvatarGroup>

      <AvatarGroup size="lg" spaceX="1" borderless>
        {items.map((item) => (
          <Avatar.Root key={item.name}>
            <Avatar.Fallback name={item.name} />
            <Avatar.Image src={item.src} />
          </Avatar.Root>
        ))}
        <Avatar.Root>
          <Avatar.Fallback>+3</Avatar.Fallback>
        </Avatar.Root>
      </AvatarGroup>
    </Stack>
  )
}

const items = [
  {
    src: "https://cdn.myanimelist.net/r/84x124/images/characters/9/131317.webp?s=d4b03c7291407bde303bc0758047f6bd",
    name: "Uchiha Sasuke",
  },
  {
    src: "https://cdn.myanimelist.net/r/84x124/images/characters/7/284129.webp?s=a8998bf668767de58b33740886ca571c",
    name: "Baki Ani",
  },
  {
    src: "https://cdn.myanimelist.net/r/84x124/images/characters/9/105421.webp?s=269ff1b2bb9abe3ac1bc443d3a76e863",
    name: "Uchiha Chan",
  },
]

```

### Persona

Here's an example of how to use the `Avatar` component to display a user
persona.

```tsx
import { Avatar, HStack, Stack, Text } from "@chakra-ui/react"

export const AvatarPersona = () => {
  return (
    <Stack gap="8">
      {users.map((user) => (
        <HStack key={user.email} gap="4">
          <Avatar.Root>
            <Avatar.Fallback name={user.name} />
            <Avatar.Image src={user.avatar} />
          </Avatar.Root>
          <Stack gap="0">
            <Text fontWeight="medium">{user.name}</Text>
            <Text color="fg.muted" textStyle="sm">
              {user.email}
            </Text>
          </Stack>
        </HStack>
      ))}
    </Stack>
  )
}

const users = [
  {
    id: "1",
    name: "John Mason",
    email: "john.mason@example.com",
    avatar: "https://i.pravatar.cc/300?u=iu",
  },
  {
    id: "2",
    name: "Melissa Jones",
    email: "melissa.jones@example.com",
    avatar: "https://i.pravatar.cc/300?u=po",
  },
]

```

### Badge

Show a badge on the right corner of the avatar by composing the `Float` and
`Circle` components

```tsx
import { Avatar, Circle, Float } from "@chakra-ui/react"

export const AvatarWithBadge = () => {
  return (
    <Avatar.Root colorPalette="green" variant="subtle">
      <Avatar.Fallback name="Dari Ann" />
      <Float placement="bottom-end" offsetX="1" offsetY="1">
        <Circle
          bg="green.500"
          size="8px"
          outline="0.2em solid"
          outlineColor="bg"
        />
      </Float>
    </Avatar.Root>
  )
}

```

### Overflow

Here's an example of how to handle an overflow of avatars by composing the
`Menu` and `Avatar` components.

```tsx
import { Avatar, Group, Menu, Portal } from "@chakra-ui/react"

const names = [
  "Naruto Uzumaki",
  "Sakura Haruno",
  "Kakashi Hatake",
  "Hinata Hyuga",
  "Shikamaru Nara",
]
const maxAvatars = 3

export const AvatarWithOverflow = () => {
  const { items, overflow } = partition(names, maxAvatars)
  return (
    <Group gap="0" spaceX="2">
      {items.map((item) => (
        <Avatar.Root key={item} colorPalette={pickPalette(item)}>
          <Avatar.Fallback name={item} />
        </Avatar.Root>
      ))}
      {overflow.length > 0 && (
        <Menu.Root positioning={{ placement: "bottom" }}>
          <Menu.Trigger rounded="full" focusRing="outside">
            <Avatar.Root variant="outline">
              <Avatar.Fallback>+{overflow.length}</Avatar.Fallback>
            </Avatar.Root>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                {overflow.map((item) => (
                  <Menu.Item value={item} key={item}>
                    <Avatar.Root size="xs" colorPalette={pickPalette(item)}>
                      <Avatar.Fallback name={item} />
                    </Avatar.Root>
                    {item}
                  </Menu.Item>
                ))}
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      )}
    </Group>
  )
}

const colorPalette = ["red", "blue", "green", "yellow", "purple", "orange"]

const pickPalette = (name: string) => {
  const index = name.charCodeAt(0) % colorPalette.length
  return colorPalette[index]
}

const partition = (arr: string[], max: number) => {
  const items = []
  const overflow = []
  for (const item of arr) {
    if (items.length < max) items.push(item)
    else overflow.push(item)
  }
  return { items, overflow }
}

```

### Next.js

Here's an example of how to compose the avatar with Next.js Image.

```tsx
import { getImageProps } from "next/image"

function Demo() {
  const imageProps = getImageProps({
    src: "/image.png",
  })
  return (
    <Avatar.Root>
      <Avatar.Fallback name="Segun Adebayo" />
      <Avatar.Image {...imageProps} />
    </Avatar.Root>
  )
}
```

### Store

An alternative way to access the avatar state and methods is to use the
`RootProvider` component and the `useAvatar` store hook.

```tsx
"use client"

import { Avatar, Code, Stack, useAvatar } from "@chakra-ui/react"

export const AvatarWithStore = () => {
  const avatar = useAvatar()
  return (
    <Stack align="flex-start">
      <Avatar.RootProvider value={avatar}>
        <Avatar.Image src="https://bit.ly/sage-adebayo" />
        <Avatar.Fallback name="Segun Adebayo" />
      </Avatar.RootProvider>
      <Code>{avatar.loaded ? "loaded" : "not loaded"}</Code>
    </Stack>
  )
}

```

### Closed Component

Here's how to setup the Avatar for a closed component composition.

If you want to automatically add the closed component to your project, run the
command:

```bash
npx @chakra-ui/cli snippet add avatar
```

## Props

### Root

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
| size | md | `'full' \| '2xs' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'` | The size of the component |
| variant | subtle | `'solid' \| 'subtle' \| 'outline'` | The variant of the component |
| shape | full | `'square' \| 'rounded' \| 'full'` | The shape of the component |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| unstyled | undefined | `boolean` | Whether to remove the component's style. |
| ids | undefined | `Partial<{ root: string; image: string; fallback: string }>` | The ids of the elements in the avatar. Useful for composition. |
| onStatusChange | undefined | `(details: StatusChangeDetails) => void` | Functional called when the image loading status changes. |
| borderless | undefined | `'true' \| 'false'` | The borderless of the component |

### Fallback

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| name | undefined | `string \| undefined` | The name to derive the initials from.
If not provided, the fallback will display a generic icon. |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |

### Image

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |

## Explorer

Explore the `Avatar` component parts interactively. Click on parts in the
sidebar to highlight them in the preview.
