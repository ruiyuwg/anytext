# Semantic Tokens

## Overview

Semantic tokens are tokens that are designed to be used in a specific context. A
semantic token consists of the following properties:

- `value`: The value of the token or a reference to an existing token.
- `description`: An optional description of what the token can be used for.

## Defining Semantic Tokens

In most cases, the value of a semantic token references to an existing token.

> To reference a value in a semantic token, use the token reference `{}` syntax.

```js title="theme.ts"
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        red: { value: "#EE0F0F" },
      },
    },
    semanticTokens: {
      colors: {
        danger: { value: "{colors.red}" },
      },
    },
  },
})

export default createSystem(defaultConfig, config)
```

## Using Semantic Tokens

After defining semantic tokens, run the Chakra CLI to generate theme typings.
See the [CLI docs](/docs/get-started/cli#chakra-typegen) for how to run typegen
in postinstall, CI, and monorepos.

```bash
npx @chakra-ui/cli typegen ./src/theme.ts
```

This provides autocompletion for your tokens in the editor

```tsx
<Box color="danger">Hello World</Box>
```

## Conditional Token

Semantic tokens can also be changed based on the conditions like light and dark
modes.

For example, if you want a color to change automatically based on light or dark
mode.

```js title="theme.ts"
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    semanticTokens: {
      colors: {
        danger: {
          value: { base: "{colors.red}", _dark: "{colors.darkred}" },
        },
        success: {
          value: { base: "{colors.green}", _dark: "{colors.darkgreen}" },
        },
      },
    },
  },
})

export default createSystem(defaultConfig, config)
```

The conditions used in semantic tokens must be an at-rule or parent selector
[condition](/docs/styling/conditional-styles#reference).

## Semantic Token Nesting

Semantic tokens can be nested to create a hierarchy of tokens. This is useful
when you want to group tokens together.

Use the `DEFAULT` key to define the default value of a nested token.

```js title="theme.ts"
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: { value: "{colors.gray.100}" },
          primary: { value: "{colors.teal.100}" },
          secondary: { value: "{colors.gray.100}" },
        },
      },
    },
  },
})

export default createSystem(defaultConfig, config)
```

This allows the use of the `bg` token in the following ways:

```tsx
<Box bg="bg">
  <Box bg="bg.primary">Hello World</Box>
  <Box bg="bg.secondary">Hello World</Box>
</Box>
```

## Using in Recipes

Semantic tokens are available in recipe definitions. Reference them by name.

```tsx
import { defineRecipe } from "@chakra-ui/react"

const cardRecipe = defineRecipe({
  base: {
    bg: "bg.subtle", // semantic token
    color: "fg", // semantic token
    borderColor: "border",
  },
})
```

# Shadows

## Semantic Tokens

Chakra UI supports these semantic tokens out of the box.

| Shadow Token | Example                |
| ------------ | ---------------------- |
| `xs`         |     |
| `sm`         |     |
| `md`         |     |
| `lg`         |     |
| `xl`         |     |
| `2xl`        |    |
| `inner`      |  |
| `inset`      |  |

Here’s an example of how to add new shadows.

```javascript
export const system = createSystem(defaultConfig, {
    theme: {
        semanticTokens: {
            shadows: {
                custom: {
                    value: {
                        _light: "0 32px 56px 0 rgba(0, 0, 0, 0.25)",
                        _dark: "0 32px 56px 0 rgba(0, 0, 0, 0.25)",
                    },
                },
            },
        },
    },
});
```

# Sizes

## Tokens

Chakra UI supports the following size tokens out of the box.
