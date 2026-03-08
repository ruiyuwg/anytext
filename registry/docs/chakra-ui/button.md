# Button

```tsx
import { Button } from "@chakra-ui/react"

export const ButtonBasic = () => {
  return <Button>Button</Button>
}

```

## Usage

```jsx
import { Button, ButtonGroup } from "@chakra-ui/react"
```

```jsx
<Button>Click me</Button>
```

## Examples

### Sizes

Use the `size` prop to change the size of the button.

```tsx
import { Button, HStack } from "@chakra-ui/react"

export const ButtonWithSizes = () => {
  return (
    <HStack wrap="wrap" gap="6">
      <Button size="xs">Button (xs)</Button>
      <Button size="sm">Button (sm)</Button>
      <Button size="md">Button (md)</Button>
      <Button size="lg">Button (lg)</Button>
      <Button size="xl">Button (xl)</Button>
    </HStack>
  )
}

```

### Variants

Use the `variant` prop to change the visual style of the Button.

```tsx
import { Button, HStack } from "@chakra-ui/react"

export const ButtonWithVariants = () => {
  return (
    <HStack wrap="wrap" gap="6">
      <Button variant="solid">Solid</Button>
      <Button variant="subtle">Subtle</Button>
      <Button variant="surface">Surface</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="plain">Plain</Button>
    </HStack>
  )
}

```

### Icon

Use icons within a button

```tsx
import { Button, HStack } from "@chakra-ui/react"
import { RiArrowRightLine, RiMailLine } from "react-icons/ri"

export const ButtonWithIcons = () => {
  return (
    <HStack>
      <Button colorPalette="teal" variant="solid">
        <RiMailLine /> Email
      </Button>
      <Button colorPalette="teal" variant="outline">
        Call us <RiArrowRightLine />
      </Button>
    </HStack>
  )
}

```

### Color

Use the `colorPalette` prop to change the color of the button

```tsx
import { Button, Stack, Text } from "@chakra-ui/react"

export const ButtonWithColors = () => {
  return (
    <Stack gap="2" align="flex-start">
      {["gray","red","green","blue","teal","pink","purple","cyan","orange","yellow"].map((colorPalette) => (
        <Stack align="center" key={colorPalette} direction="row" gap="10">
          <Text minW="8ch">{colorPalette}</Text>
          <Button colorPalette={colorPalette}>Button</Button>
          <Button colorPalette={colorPalette} variant="outline">
            Button
          </Button>
          <Button colorPalette={colorPalette} variant="surface">
            Button
          </Button>
          <Button colorPalette={colorPalette} variant="subtle">
            Button
          </Button>
        </Stack>
      ))}
    </Stack>
  )
}

```

### Disabled

Use the `disabled` prop to disable the button.

```tsx
import { Button } from "@chakra-ui/react"

export const ButtonWithDisabled = () => {
  return <Button disabled>Button</Button>
}

```

### Disabled Link

When using the `disabled` prop with a link, you need to prevent the default
behavior of the link and add the `data-disabled` attribute.

```tsx
"use client"

import { Button } from "@chakra-ui/react"

export const ButtonWithDisabledLink = () => {
  return (
    <Button asChild>
      <a href="#" data-disabled="" onClick={(e) => e.preventDefault()}>
        Button
      </a>
    </Button>
  )
}

```

### Loading

Pass the `loading` and `loadingText` props to the `Button` component to show a
loading spinner and add a loading text.

```tsx
import { Button, Stack } from "@chakra-ui/react"

export const ButtonWithLoading = () => {
  return (
    <Stack direction="row" gap="4" align="center">
      <Button loading>Click me</Button>
      <Button loading loadingText="Saving...">
        Click me
      </Button>
    </Stack>
  )
}

```

Here's an example of how to toggle the loading state of a button while keeping
the width of the button the same.

```tsx
"use client"

import { Button, Checkbox, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { MdAdsClick } from "react-icons/md"

export const ButtonWithLoadingToggle = () => {
  const [loading, setLoading] = useState(false)
  return (
    <VStack gap="4">
      <Button loading={loading} onClick={() => setLoading(!loading)}>
        <MdAdsClick /> Click me
      </Button>
      <Checkbox.Root
        size="sm"
        checked={loading}
        onCheckedChange={() => setLoading(!loading)}
      >
        <Checkbox.HiddenInput />
        <Checkbox.Control />
        <Checkbox.Label>Loading</Checkbox.Label>
      </Checkbox.Root>
    </VStack>
  )
}

```

### Spinner Placement

Use the `spinnerPlacement` prop to change the placement of the spinner.

```tsx
import { Button, ButtonGroup } from "@chakra-ui/react"

export const ButtonWithSpinnerPlacement = () => {
  return (
    <ButtonGroup colorPalette="teal">
      <Button loading loadingText="Loading" spinnerPlacement="start">
        Submit
      </Button>
      <Button loading loadingText="Loading" spinnerPlacement="end">
        Continue
      </Button>
    </ButtonGroup>
  )
}

```

### Custom Spinner

Use the `spinner` prop to change the spinner.

```tsx
import { Button } from "@chakra-ui/react"
import { BeatLoader } from "react-spinners"

export const ButtonWithCustomSpinner = () => {
  return (
    <Button
      loading
      colorPalette="blue"
      spinner={<BeatLoader size={8} color="white" />}
    >
      Click me
    </Button>
  )
}

```

### Group

Use the `ButtonGroup` component to group buttons together. This component allows
you pass common recipe properties to inner buttons.

```tsx
import { Button, ButtonGroup } from "@chakra-ui/react"

export const ButtonWithGroup = () => {
  return (
    <ButtonGroup size="sm" variant="outline">
      <Button colorPalette="blue">Save</Button>
      <Button>Cancel</Button>
    </ButtonGroup>
  )
}

```

To flush the buttons, pass the `attached` prop.

```tsx
import { Button, ButtonGroup, IconButton } from "@chakra-ui/react"
import { LuChevronDown } from "react-icons/lu"

export const ButtonWithGroupFlushed = () => {
  return (
    <ButtonGroup size="sm" variant="outline" attached>
      <Button variant="outline">Button</Button>
      <IconButton variant="outline">
        <LuChevronDown />
      </IconButton>
    </ButtonGroup>
  )
}

```

### Split Menu

Combine a `Button` and `Menu` with an attached `Group` to create a split button
with a dropdown menu.

```tsx
import { Button, Group, IconButton, Menu, Portal } from "@chakra-ui/react"
import { LuChevronDown } from "react-icons/lu"

const menuItems = [
  { label: "Save as Draft", value: "draft" },
  { label: "Save & Publish", value: "publish" },
  { label: "Save & Schedule", value: "schedule" },
]

export const ButtonWithSplitMenu = () => {
  return (
    <Menu.Root positioning={{ placement: "bottom-end" }}>
      <Group attached>
        <Button variant="outline" size="sm">
          Save
        </Button>
        <Menu.Trigger asChild>
          <IconButton variant="outline" size="sm">
            <LuChevronDown />
          </IconButton>
        </Menu.Trigger>
      </Group>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {menuItems.map((item) => (
              <Menu.Item key={item.value} value={item.value}>
                {item.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

```

### Responsive Size

Use the object syntax on the `size` prop to make the button size responsive.

```tsx
import { Button } from "@chakra-ui/react"

export const ButtonWithResponsiveSize = () => {
  return (
    <Button rounded="3xl" size={{ base: "md", md: "lg" }}>
      Button
    </Button>
  )
}

```

### Radius

Use the `rounded` prop to change the radius of the button.

```tsx
import { Button, ButtonGroup, Stack, Text } from "@chakra-ui/react"

export const ButtonWithRadius = () => {
  return (
    <Stack gap="8">
      <Stack>
        <Text textStyle="sm">Semantic Radius</Text>
        <ButtonGroup variant="subtle">
          <Button rounded="l1">Rounded l1</Button>
          <Button rounded="l2">Rounded l2</Button>
          <Button rounded="l3">Rounded l3</Button>
        </ButtonGroup>
      </Stack>

      <Stack>
        <Text textStyle="sm">Core Radius</Text>
        <ButtonGroup variant="subtle">
          <Button rounded="sm">Rounded sm</Button>
          <Button rounded="md">Rounded md</Button>
          <Button rounded="lg">Rounded lg</Button>
          <Button rounded="xl">Rounded xl</Button>
          <Button rounded="2xl">Rounded 2xl</Button>
          <Button rounded="full">Rounded full</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  )
}

```

### As Link

Use the `asChild` prop to render a button as a link.

```tsx
import { Button } from "@chakra-ui/react"

export const ButtonAsLink = () => {
  return (
    <Button asChild>
      <a href="#">Button</a>
    </Button>
  )
}

```

### Ref

Here's how to access the underlying element reference

```tsx
const Demo = () => {
  const ref = useRef<HTMLButtonElement | null>(null)
  return <Button ref={ref}>Click me</Button>
}
```

## Customization

After customizing the recipe, run the CLI typegen command to regenerate the
types. See the [CLI docs](/docs/get-started/cli#chakra-typegen) for how to run
typegen in postinstall, CI, and monorepos.

```bash
npx @chakra-ui/cli typegen
```

### Adding a new variant

Use the `defineRecipe` function to add a new variant to the button. In this
example, we add a `pill` variant that respects the `colorPalette` prop.

```tsx title="components/ui/provider.tsx"
import { createSystem, defaultConfig, defineRecipe } from "@chakra-ui/react"

const buttonRecipe = defineRecipe({
  variants: {
    variant: {
      pill: {
        borderRadius: "full",
        px: "6",
        bg: "colorPalette.solid",
        color: "colorPalette.contrast",
        _hover: {
          bg: "colorPalette.solid/90",
        },
      },
    },
  },
})

const system = createSystem(defaultConfig, {
  theme: {
    recipes: { button: buttonRecipe },
  },
})
```

Then use the `pill` variant in your button:

```tsx
<Button variant="pill" colorPalette="blue">
  Pill Button
</Button>
```

### Adding a new size

Use the `defineRecipe` function to add a new size to the button.

```tsx title="components/ui/provider.tsx"
import { createSystem, defaultConfig, defineRecipe } from "@chakra-ui/react"

const buttonRecipe = defineRecipe({
  variants: {
    size: {
      xxl: {
        h: "16",
        minW: "16",
        textStyle: "xl",
        px: "8",
      },
    },
  },
})

const system = createSystem(defaultConfig, {
  theme: {
    recipes: { button: buttonRecipe },
  },
})
```

Then use the `xxl` size in your button:

```tsx
<Button size="xxl">XXL Button</Button>
```

### Changing the default variant

Use the `defaultVariants` property to change the default size or variant.

```tsx title="components/ui/provider.tsx"
import { createSystem, defaultConfig, defineRecipe } from "@chakra-ui/react"

const buttonRecipe = defineRecipe({
  defaultVariants: {
    size: "lg",
    variant: "outline",
  },
})

const system = createSystem(defaultConfig, {
  theme: {
    recipes: { button: buttonRecipe },
  },
})
```

## Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| spinnerPlacement | start | `'start' \| 'end' \| undefined` | The placement of the spinner |
| colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
| size | md | `'2xs' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'` | The size of the component |
| variant | solid | `'solid' \| 'subtle' \| 'surface' \| 'outline' \| 'ghost' \| 'plain'` | The variant of the component |
| loading | false | `boolean \| undefined` | If `true`, the button will show a loading spinner. |
| loadingText | undefined | `React.ReactNode \| undefined` | The text to show while loading. |
| spinner | undefined | `React.ReactNode \| undefined` | The spinner to show while loading. |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
