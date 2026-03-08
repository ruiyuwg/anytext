## Manual Steps

> The minimum node version required is Node.20.x

### Update Packages

Remove the unused packages: `@emotion/styled` and `framer-motion`. These
packages are no longer required in Chakra UI.

```bash
npm uninstall @emotion/styled framer-motion
```

Install updated versions of the packages: `@chakra-ui/react` and
`@emotion/react`.

```bash
npm install @chakra-ui/react@latest @emotion/react@latest
```

Next, install component snippets using the CLI snippets. Snippets provide
pre-built compositions of Chakra components to save you time and put you in
charge.

```bash
npx @chakra-ui/cli snippet add
```

### Refactor Custom Theme

Move your custom theme to a dedicated `theme.js` or `theme.ts` file. Use
`createSystem` and `defaultConfig` to configure your theme.

**Before**

```ts
import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  fonts: {
    heading: `'Figtree', sans-serif`,
    body: `'Figtree', sans-serif`,
  },
})
```

**After**

```ts {3}
import { createSystem, defaultConfig } from "@chakra-ui/react"

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: `'Figtree', sans-serif` },
        body: { value: `'Figtree', sans-serif` },
      },
    },
  },
})
```

> All token values need to be wrapped in an object with a **value** key. Learn
> more about tokens [here](/docs/theming/tokens).

### Update ChakraProvider

Update the ChakraProvider import from `@chakra-ui/react` to the one from the
snippets. Next, rename the `theme` prop to `value` to match the new system-based
theming approach.

**Before**

```tsx
import { ChakraProvider } from "@chakra-ui/react"

export const App = ({ Component }) => (
  <ChakraProvider theme={theme}>
    <Component />
  </ChakraProvider>
)
```

**After**

```tsx {1,3}
import { Provider } from "@/components/ui/provider"
import { defaultSystem } from "@chakra-ui/react"

export const App = ({ Component }) => (
  <Provider>
    <Component />
  </Provider>
)
```

```tsx {1,3}
import { ColorModeProvider } from "@/components/ui/color-mode"
import { ChakraProvider, defaultSystem } from "@chakra-ui/react"

export function Provider(props) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
```

> If you have a custom theme, replace `defaultSystem` with the custom `system`

The Provider component compose the `ChakraProvider` from Chakra and
`ThemeProvider` from `next-themes`

## Improvements

- **Performance:** Improved reconciliation performance by `4x` and re-render
  performance by `1.6x`

- **Namespaced imports:** Import components using the dot notation for more
  concise imports

  ```tsx
  import { Accordion } from "@chakra-ui/react"

  const Demo = () => {
    return (
      <Accordion.Root>
        <Accordion.Item>
          
          
        </Accordion.Item>
      </Accordion.Root>
    )
  }
  ```

- **TypeScript:** Improved IntelliSense and type inference for style props and
  tokens.

- **Polymorphism:** Loosened the `as` prop typings in favor of using the
  `asChild` prop. This pattern was inspired by Radix Primitives and Ark UI.
