# Focus Ring

The focus ring is used to identify the currently focused element on your page.
While this is important for accessibility, styling every component to have a
focus ring can be tedious.

Chakra UI provides the `focusRing` and `focusVisibleRing` style props to style
focus ring with ease. The value of the `focusRing` prop can be "outside",
"inside", or "mixed".

## Focus Ring

This focus ring maps to the `&:is(:focus, [data-focus])` CSS selector.

Here's how to style a button from scratch with a focus ring:

```tsx
<chakra.button px="4" py="2" focusRing="outside">
  Click me
</chakra.button>
```

## Focus Visible Ring

This focus ring maps to the `&:is(:focus-visible, [data-focus-visible])` CSS
selector.

```tsx
<chakra.button px="4" py="2" focusVisibleRing="outside">
  Click me
</chakra.button>
```

### Difference between Focus Ring and Focus Visible Ring

The Focus Visible Ring functions similarly to the Focus Ring, but with a key
difference: it only applies focus indicator styles when an element receives
keyboard focus.

This ensures that the focus ring is visible only when navigating via keyboard,
improving accessibility without affecting mouse interactions.

## Built-in Focus Ring

Here's a preview of the supported focus ring.

```tsx
import { Center, For, Stack } from "@chakra-ui/react"

export const TokensFocusRing = () => {
  return (
    <Stack gap="4">
      <For each={["inside", "outside", "mixed"]}>
        {(focusRing) => (
          <Center
            h="20"
            bg="bg"
            borderWidth="1px"
            focusRing={focusRing}
            data-focus
          >
            {focusRing}
          </Center>
        )}
      </For>
    </Stack>
  )
}

```

## Customization

### Ring Color

There are three ways to customize the focus ring color:

**1. Per component** - Use the `focusRingColor` prop:

```tsx
<Button focusRingColor="red.500">Click me</Button>
```

**2. Globally** - Set it in global CSS:

```tsx title="theme.ts"
const config = defineConfig({
  globalCss: {
    "*": {
      focusRingColor: "red.500 !important",
    },
  },
})

export const system = createSystem(defaultConfig, config)
```

**3. Per color palette** - Define semantic tokens for each palette:

```tsx title="theme.ts"
const config = defineConfig({
  theme: {
    semanticTokens: {
      colors: {
        gray: {
          focusRing: { value: "blue.500" },
        },
        blue: {
          focusRing: { value: "blue.400" },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)
```

### Ring Width

To change the focus ring width for a specific component, you can use the
`focusRingWidth` prop.

```tsx
<Button focusRingWidth="2px">Click me</Button>
```

### Ring Style

To change the focus ring style for a specific component, you can use the
`focusRingStyle` prop.

```tsx
<Button focusRingStyle="dashed">Click me</Button>
```

# Layer Styles

## Overview

Layer styles allow you to define visual properties. The common properties are:

- Color or text color
- Background color
- Border width and border color
- Box shadow
- Opacity

## Defining layer styles

Layer styles are defined using the `defineLayerStyles` function.

```js title="layer-styles.ts"
import { defineLayerStyles } from "@chakra-ui/react"

const layerStyles = defineLayerStyles({
  container: {
    description: "container styles",
    value: {
      background: "gray.50",
      border: "2px solid",
      borderColor: "gray.500",
    },
  },
})
```

## Built-in layer styles

Chakra UI provides a set of built-in layer styles.

## Updating the theme

To use the layer styles, update the `theme` object with the `layerStyles`
property.

```js title="theme.ts"
import { createSystem, defineConfig } from "@chakra-ui/react"
import { layerStyles } from "./layer-styles"

const config = defineConfig({
  theme: {
    layerStyles,
  },
})

export default createSystem(defaultConfig, config)
```

After updating the theme, run the `typegen` command to generate the typings. See
the [CLI docs](/docs/get-started/cli#chakra-typegen) for how to run typegen in
postinstall, CI, and monorepos.

```bash
npx @chakra-ui/cli typegen
```

## Using layer styles

Now you can use `layerStyle` property in your components.

```jsx
<Box layerStyle="container">This is inside a container style</Box>
```

# Styling

## Concepts

After installing Chakra UI, follow these guidelines to learn the key concepts:

- [Chakra Factory](/docs/styling/chakra-factory)
- [Responsive Design](/docs/styling/responsive-design)
- [CSS Variables](/docs/styling/css-variables)
- [Dark Mode](/docs/styling/dark-mode)
- [Color Opacity Modifier](/docs/styling/color-opacity-modifier)
- [Conditional Styles](/docs/styling/conditional-styles)
- [Virtual Color](/docs/styling/virtual-color)

## Compositions

After understanding the concepts, learn how to use these compositions to avoid
repeating styles:

- [Text Styles](/docs/styling/text-styles)
- [Layer Styles](/docs/styling/layer-styles)
- [Animation Styles](/docs/styling/animation-styles)
- [Focus Ring](/docs/styling/focus-ring)

## Style Props

Style props are the most fundamental way to style your components in Chakra UI.
They are basically css styles as props.
[Learn more about style props](/docs/styling/style-props/background)
