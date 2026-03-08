# Color Mode

Chakra UI relies on [`next-themes`](https://github.com/pacocoursey/next-themes)
to add support for light and dark color mode.

## Setup

In most cases, you have it installed and set up by the CLI in the `Provider`
component. If not, you can install it manually.

```bash
npx @chakra-ui/cli snippet add color-mode
```

The snippet includes hooks and components that make it feel similar to Chakra
v2.

```tsx
import {
  ColorModeButton,
  DarkMode,
  LightMode,
  useColorMode,
  useColorModeValue,
} from "@/components/ui/color-mode"
```

## `useColorMode`

The `useColorMode` hook returns the current color mode and a function to toggle
the color mode.

```tsx
"use client"

import { Button } from "@chakra-ui/react"
import { useColorMode } from "@/components/ui/color-mode"

export const ColorModeBasic = () => {
  const { toggleColorMode } = useColorMode()
  return (
    <Button variant="outline" onClick={toggleColorMode}>
      Toggle Mode
    </Button>
  )
}

```

Calling `toggleColorMode` or `setColorMode` anywhere in your app tree toggles
the color mode from light or dark and vice versa.

## `useColorModeValue`

The `useColorModeValue` hook returns a value based on the current color mode.

Here's the signature:

```tsx
const result = useColorModeValue("<light-mode-value>", "<dark-mode-value>")
```

The value returned will be the value of the light mode if the color mode is
`light`, and the value of the dark mode if the color mode is `dark`.

```tsx
"use client"

import { Box, Button, Stack } from "@chakra-ui/react"
import { useColorMode, useColorModeValue } from "@/components/ui/color-mode"

export const ColorModeValue = () => {
  const { toggleColorMode } = useColorMode()

  const bg = useColorModeValue("red.500", "red.200")
  const color = useColorModeValue("white", "gray.800")

  return (
    <Stack align="flex-start" gap="4">
      <Box p="2" bg={bg} color={color}>
        This box&apos;s style will change based on the color mode.
      </Box>
      <Button variant="outline" size="sm" onClick={toggleColorMode}>
        Toggle Mode
      </Button>
    </Stack>
  )
}

```

## Hydration Mismatch

When using `useColorModeValue` or `useColorMode` in SSR, you may notice a
hydration mismatch when the page is mounted. This is because the color mode
value is computed on the server side.

To avoid this, use the `ClientOnly` component to wrap the component that uses
`useColorModeValue` and render a skeleton until mounted on the client side.

```tsx
"use client"

import { ClientOnly, IconButton, Skeleton } from "@chakra-ui/react"
import { useColorMode } from "@/components/ui/color-mode"
import { LuMoon, LuSun } from "react-icons/lu"

export const ColorModeValueFallback = () => {
  const { toggleColorMode, colorMode } = useColorMode()
  return (
    <ClientOnly fallback={<Skeleton boxSize="8" />}>
      <IconButton onClick={toggleColorMode} variant="outline" size="sm">
        {colorMode === "light" ? <LuSun /> : <LuMoon />}
      </IconButton>
    </ClientOnly>
  )
}

```

## ColorModeButton

The color mode snippet comes with the `ColorModeButton` component built-in, you
can import it to render an icon button that toggles the color mode.

It renders a skeleton on the server side and the icon on the client side.

```tsx
import { ColorModeButton } from "@/components/ui/color-mode"

export const ColorModeIconButton = () => {
  return <ColorModeButton />
}

```

## Forced Color Mode

The color mode snippet comes with the `LightMode` and `DarkMode` components
built-in, you can import it to force the color mode.

```tsx
"use client"

import { Button, HStack } from "@chakra-ui/react"
import { DarkMode, LightMode, useColorMode } from "@/components/ui/color-mode"

export const ColorModeForced = () => {
  const { toggleColorMode } = useColorMode()
  return (
    <HStack>
      <LightMode>
        <Button size="sm" variant="subtle">
          Light Mode Always
        </Button>
      </LightMode>

      <DarkMode>
        <Button size="sm" variant="subtle">
          Dark Mode Always
        </Button>
      </DarkMode>

      <Button size="sm" variant="subtle" onClick={toggleColorMode}>
        Toggle Mode
      </Button>
    </HStack>
  )
}

```

> You might need to update the `color-mode.tsx` snippet since the `LightMode`
> and `DarkMode` components were recently added to the snippet.

## Guides

### Setting Default Color Mode

To set the default color mode, update the `ColorModeProvider` in your
`components/ui/color-mode.tsx` file.

**Default to light mode:**

```tsx
export function ColorModeProvider(props: ColorModeProviderProps) {
  return (
    <ThemeProvider
      attribute="class"
      disableTransitionOnChange
      defaultTheme="light"
      {...props}
    />
  )
}
```

**Default to dark mode:**

```tsx
export function ColorModeProvider(props: ColorModeProviderProps) {
  return (
    <ThemeProvider
      attribute="class"
      disableTransitionOnChange
      defaultTheme="dark"
      {...props}
    />
  )
}
```

**Respect system preference (default):**

```tsx
export function ColorModeProvider(props: ColorModeProviderProps) {
  return (
    <ThemeProvider
      attribute="class"
      disableTransitionOnChange
      defaultTheme="system"
      {...props}
    />
  )
}
```

### Disabling System Preference

By default, the color mode respects the user's system preference. To disable
this and only use `light` or `dark` mode, set `enableSystem` to `false`.

```tsx
export function ColorModeProvider(props: ColorModeProviderProps) {
  return (
    <ThemeProvider
      attribute="class"
      disableTransitionOnChange
      defaultTheme="light"
      enableSystem={false}
      {...props}
    />
  )
}
```

### Using Custom Storage Key

The color mode is stored in `localStorage` under the key `theme`. To use a
custom key, set the `storageKey` prop.

```tsx
export function ColorModeProvider(props: ColorModeProviderProps) {
  return (
    <ThemeProvider
      attribute="class"
      disableTransitionOnChange
      storageKey="my-app-color-mode"
      {...props}
    />
  )
}
```

### Forcing a Specific Page to Light/Dark Mode

To force a specific page to render in a specific color mode, set the
`forcedTheme` prop in the provider.

```tsx
export function ColorModeProvider(props: ColorModeProviderProps) {
  return (
    <ThemeProvider
      attribute="class"
      disableTransitionOnChange
      forcedTheme="dark"
      {...props}
    />
  )
}
```

Alternatively, use the `LightMode` or `DarkMode` components to force specific
parts of your UI to render in a specific color mode.

## FAQ

### Does next-themes only work with Next.js?

No. Despite its name, `next-themes` is a general-purpose library that works with
any React framework including Vite, Remix, Gatsby, and others. The name can be
misleading, but it works great everywhere.

# Composition

## The `as` Prop

Used to change the underlying HTML element that a React component renders. It
provides a straightforward way to change the underlying element while retaining
the component's functionality.

```jsx
<Heading as="h3">Hello, world!</Heading>
```

**TypeScript:** The caveat with the `as` prop is that the types of the component
passed to the `as` prop must be compatible with the component's props. We do not
infer the underlying component's props from the `as` prop.

## The `asChild` Prop

Used to compose a component's functionality onto its child element. This
approach, inspired by
[Radix UI](https://www.radix-ui.com/primitives/docs/utilities/slot), offers
maximum flexibility.

```jsx
<Popover.Root>
  <Popover.Trigger asChild>
    <Button>Open</Button>
  </Popover.Trigger>
</Popover.Root>
```

In this example, the `asChild` prop allows the `Button` to be used as the
trigger for the popover.

## Best Practices

To avoid common pitfalls when using the `as` and `asChild` props, there are a
few best practices to consider:

- **Forward Refs:** Ensure that the underlying component forwards the ref passed
  to it properly.
- **Spread Props:** Ensure that the underlying component spreads the props
  passed to it.

```jsx
const MyComponent = React.forwardRef((props, ref) => {
  return <Box ref={ref} {...props} />
})

// with `as` prop
<MyComponent as="button" />

// with `asChild` prop
<Button asChild>
  <MyComponent> Click me </MyComponent>
</Button>
```

# Components

Here's a list of all the components available in the library.
