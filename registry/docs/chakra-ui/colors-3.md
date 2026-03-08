# Colors

Please read the [overview](/docs/theming/customization/overview) first to learn
how to properly customize the styling engine, and get type safety.

## Tokens

To create new colors, we recommend providing `50` - `950` color values. Here's
an example of how to customize colors in Chakra UI.

```tsx title="theme.ts"
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#e6f2ff" },
          100: { value: "#e6f2ff" },
          200: { value: "#bfdeff" },
          300: { value: "#99caff" },
          // ...
          950: { value: "#001a33" },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, customConfig)
```

To use the `brand` color, you can set the value of any color related properties,
like `bg`, `borderColor`, `color`, etc. to the `brand` token.

```tsx
<Box bg="brand.100" />
```

## Semantic Tokens

### Color Palette

For new colors defined in the theme, we recommend creating these matching
semantic tokens to ensure consistency.

- `solid`: The bold fill color of the color.
- `contrast`: The text color that goes on solid color.
- `fg`: The foreground color used for text, icons, etc.
- `muted`: The muted color of the color.
- `subtle`: The subtle color of the color.
- `emphasized`: The emphasized version of the subtle color.
- `focusRing`: The focus ring color when interactive element is focused.

This is required if you intend to use the color in `colorPalette` property.

```tsx title="theme.ts"
const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          // ...
        },
      },
    },
    semanticTokens: {
      colors: {
        brand: {
          solid: { value: "{colors.brand.500}" },
          contrast: { value: "{colors.brand.100}" },
          fg: { value: "{colors.brand.700}" },
          muted: { value: "{colors.brand.100}" },
          subtle: { value: "{colors.brand.200}" },
          emphasized: { value: "{colors.brand.300}" },
          focusRing: { value: "{colors.brand.500}" },
        },
      },
    },
  },
})
```

To use the color palette in components, you can use the `colorPalette` property.

```tsx
<Button colorPalette="brand">Click me</Button>
```

Alternative, you can also use the semantic token directly.

```tsx
<Box color="brand.contrast" bg="brand.solid">
  Hello world
</Box>
```

### Custom Tokens

Here's an example of how to create custom semantic tokens.

```tsx title="theme.ts"
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const customConfig = defineConfig({
  theme: {
    semanticTokens: {
      colors: {
        "checkbox-border": {
          value: { _light: "gray.200", _dark: "gray.800" },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, customConfig)
```

Then, you can apply the `checkbox-border` token to any component.

```tsx
<Square size="4" borderColor="checkbox-border">
  <LuCheck />
</Square>
```

# Conditions

Please read the [overview](/docs/theming/customization/overview) first to learn
how to properly customize the styling engine, and get type safety.

## Example

Here's an example of how to customize conditions in Chakra UI.

```tsx title="theme.ts"
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const customConfig = defineConfig({
  conditions: {
    off: "&:is([data-state=off])",
    on: "&:is([data-state=on])",
  },
})

export const system = createSystem(defaultConfig, customConfig)
```

## Usage

Use `_off` and `_on` conditions to style elements based on the `data-state`
attribute.

```tsx title="app.tsx"
import { Box } from "@chakra-ui/react"

<Box data-state="off" _off={{ bg: "red.500" }} />
<Box data-state="on" _on={{ bg: "green.500" }} />
```

# CSS Variables

Please read the [overview](/docs/theming/customization/overview) first to learn
how to properly customize the styling engine, and get type safety.

## Variable Root

Here's an example of how to customize the selector that token CSS variables are
applied to.

```tsx title="theme.ts"
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const customConfig = defineConfig({
  cssVarsRoot: ":where(html)",
})

export const system = createSystem(defaultConfig, customConfig)
```

The emitted CSS variables will now be applied to the `html` element.

```css
:where(html) {
  --chakra-colors-gray-100: #e6f2ff;
  --chakra-colors-gray-200: #bfdeff;
  --chakra-colors-gray-300: #99caff;
}
```

## Variable Prefix

Here's an example of how to customize the prefix of the emitted CSS variables.

```tsx title="theme.ts"
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const customConfig = defineConfig({
  cssVarsPrefix: "sui",
})

export const system = createSystem(defaultConfig, customConfig)
```

The emitted CSS variables will now use the `sui` prefix.

```css
:where(html) {
  --sui-colors-gray-100: #e6f2ff;
  --sui-colors-gray-200: #bfdeff;
  --sui-colors-gray-300: #99caff;
}
```
