# Theme

```tsx
import { Button, Stack, Theme } from "@chakra-ui/react"

export const ThemeBasic = () => {
  return (
    <Stack align="flex-start">
      <Button variant="surface" colorPalette="teal">
        Auto Button
      </Button>
      <Theme p="4" appearance="dark" colorPalette="teal">
        <Button variant="surface">Dark Button</Button>
      </Theme>
      <Theme p="4" appearance="light" colorPalette="teal">
        <Button variant="surface">Light Button</Button>
      </Theme>
    </Stack>
  )
}

```

## Usage

```jsx
import { Theme } from "@chakra-ui/react"
```

```jsx
<Theme appearance="dark">
  <div />
</Theme>
```

## Examples

### Nested

The theme can be nested to apply different appearances to different parts of the
tree. This is useful for applying a global appearance and then overriding some
parts of it.

> Good to know: We use native CSS selectors to achieve this.

```tsx
import { Box, Button, Theme } from "@chakra-ui/react"

export const ThemeNested = () => {
  return (
    <Box>
      <Box p="8" borderWidth="1px">
        Hello Normal <Button>Click me</Button>
        <Theme appearance="dark" colorPalette="red">
          <Box p="8" borderWidth="1px">
            Hello Dark <Button>Click me</Button>
            <Theme appearance="light" colorPalette="pink">
              <Box p="8" borderWidth="1px">
                Hello Light <Button>Click me</Button>
              </Box>
            </Theme>
          </Box>
        </Theme>
      </Box>
    </Box>
  )
}

```

### Portalled

Use the `asChild` prop to force the appearance of portalled elements like the
popover and modal content.

```tsx
import { Button, Input, Popover, Portal, Text, Theme } from "@chakra-ui/react"

export const ThemeWithPortalled = () => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button size="sm" variant="outline">
          Click me
        </Button>
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content asChild>
            <Theme hasBackground={false} appearance="dark" colorPalette="teal">
              <Popover.Arrow />
              <Popover.Body spaceY="4">
                <Popover.Title fontWeight="medium">Naruto Form</Popover.Title>
                <Text>
                  Naruto is a Japanese manga series written and illustrated by
                  Masashi Kishimoto.
                </Text>
                <Input placeholder="Search" />
                <Button>Click me</Button>
              </Popover.Body>
            </Theme>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  )
}

```

### Page Specific Color Mode

To lock a page to a specific color mode (light or dark), wrap the entire page
with the `Theme` component.

You can also combine it with the `ColorModeProvider` if you use the
`useColorMode` hook.

```tsx
import { ColorModeProvider } from "@/components/ui/color-mode"
import { Theme } from "@chakra-ui/react"

export const ForcedColorMode = ({ children }) => {
  return (
    <ColorModeProvider forcedTheme="dark">
      <Theme appearance="dark">{/* Rest of the page */}</Theme>
    </ColorModeProvider>
  )
}
```
