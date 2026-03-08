# Skip Nav

```tsx
import { Box, SkipNavContent, SkipNavLink, Text } from "@chakra-ui/react"

export const SkipNavBasic = () => {
  return (
    <Box>
      <SkipNavLink>Skip to Content</SkipNavLink>

      {/* Simulated navigation */}
      <Box p="4" bg="gray.100" borderRadius="md" mb="4">
        <Text fontWeight="medium" mb="2">
          Navigation
        </Text>
        <Text fontSize="sm" color="gray.600">
          This represents a navigation area that users might want to skip over.
        </Text>
      </Box>

      {/* Main content area */}
      <SkipNavContent>
        <Box p="4" bg="blue.50" borderRadius="md">
          <Text fontWeight="medium" mb="2">
            Main Content
          </Text>
          <Text fontSize="sm">
            This is the main content area. When users press Tab and then Enter
            on the "Skip to Content" link, focus will jump directly here,
            bypassing the navigation.
          </Text>
        </Box>
      </SkipNavContent>
    </Box>
  )
}

```

## Usage

Skip Navigation link and destination container for screen readers and keyboard
users.

Per
[WebAIM.org on WCAG 2.4.1 (Bypass Blocks - Level A)](https://webaim.org/standards/wcag/checklist#sc2.4.1),
because the main content is not always the first section that the user
encounters on a page, it is strongly recommended to include a skip link for
users to be able to bypass content that is present on multiple pages. Navigation
links are the most common skipped.

> A user with a screen reader or specialized software could skip content via the
> headings or `main` region, but this is not sufficient for sighted users who
> primarily use a keyboard.

```jsx
import { SkipNavContent, SkipNavLink } from "@chakra-ui/react"
```

```jsx
<SkipNavLink>Skip to content</SkipNavLink>
<SkipNavContent />
```

## Examples

### Basic Usage

The `SkipNavLink` component ideally needs to be one of the first items a user
encounters when they begin navigating a page after load. Therefore, it is
recommended to place it as high as possible in the app.

It renders an `a` tag and automatically creates a link with an `href` attribute
that will point to `SkipNavContent`.

The `SkipNavContent` component is used as a target for the link to place
keyboard focus on the first piece of main content. It renders a `div` and can
either be a self-closing component, or wrap the main content.

```tsx
import { Box, SkipNavContent, SkipNavLink, Text } from "@chakra-ui/react"

export const SkipNavBasic = () => {
  return (
    <Box>
      <SkipNavLink>Skip to Content</SkipNavLink>

      {/* Simulated navigation */}
      <Box p="4" bg="gray.100" borderRadius="md" mb="4">
        <Text fontWeight="medium" mb="2">
          Navigation
        </Text>
        <Text fontSize="sm" color="gray.600">
          This represents a navigation area that users might want to skip over.
        </Text>
      </Box>

      {/* Main content area */}
      <SkipNavContent>
        <Box p="4" bg="blue.50" borderRadius="md">
          <Text fontWeight="medium" mb="2">
            Main Content
          </Text>
          <Text fontSize="sm">
            This is the main content area. When users press Tab and then Enter
            on the "Skip to Content" link, focus will jump directly here,
            bypassing the navigation.
          </Text>
        </Box>
      </SkipNavContent>
    </Box>
  )
}

```

### Custom ID

You can supply a custom id value using the `id` prop but you will have to use
this prop and value in both components, or they will not match.

```tsx
import { Box, SkipNavContent, SkipNavLink, Text } from "@chakra-ui/react"

export const SkipNavCustomId = () => {
  return (
    <Box>
      <SkipNavLink id="main-content">Skip to Main Content</SkipNavLink>

      {/* Simulated header and navigation */}
      <Box p="4" bg="gray.100" borderRadius="md" mb="4">
        <Text fontWeight="medium" mb="2">
          Header & Navigation
        </Text>
        <Text fontSize="sm" color="gray.600">
          This example uses a custom ID "main-content" for both components to
          ensure they match.
        </Text>
      </Box>

      {/* Main content area with custom ID */}
      <SkipNavContent id="main-content">
        <Box p="4" bg="green.50" borderRadius="md">
          <Text fontWeight="medium" mb="2">
            Main Content (Custom ID)
          </Text>
          <Text fontSize="sm">
            Both the SkipNavLink and SkipNavContent use the same custom ID
            "main-content" to ensure proper linking and focus management.
          </Text>
        </Box>
      </SkipNavContent>
    </Box>
  )
}

```

### With Main Content

The `SkipNavContent` component can wrap your main content area to ensure proper
focus management.

```tsx
import {
  Box,
  Heading,
  SkipNavContent,
  SkipNavLink,
  Text,
  VStack,
} from "@chakra-ui/react"

export const SkipNavWithContent = () => {
  return (
    <Box>
      <SkipNavLink>Skip to Content</SkipNavLink>

      {/* Simulated header with multiple navigation items */}
      <Box p="4" bg="gray.100" borderRadius="md" mb="4">
        <Text fontWeight="medium" mb="2">
          Site Header
        </Text>
        <VStack align="start" gap="1">
          <Text fontSize="sm" color="gray.600">
            • Home
          </Text>
          <Text fontSize="sm" color="gray.600">
            • About
          </Text>
          <Text fontSize="sm" color="gray.600">
            • Services
          </Text>
          <Text fontSize="sm" color="gray.600">
            • Contact
          </Text>
        </VStack>
      </Box>

      {/* SkipNavContent wrapping main content */}
      <SkipNavContent>
        <Box p="6" bg="purple.50" borderRadius="md">
          <Heading size="lg" mb="4">
            Welcome to Our Site
          </Heading>

          <VStack align="start" gap="4">
            <Text>
              This is the main content area. The SkipNavContent component wraps
              this entire section, making it the target for the skip navigation
              link.
            </Text>

            <Text>
              When keyboard users press Tab to focus the "Skip to Content" link
              and then press Enter, focus will jump directly to this content
              area, bypassing all the navigation items above.
            </Text>

            <Text fontSize="sm" color="purple.600">
              This is especially helpful for users with screen readers or those
              who navigate primarily with keyboards.
            </Text>
          </VStack>
        </Box>
      </SkipNavContent>
    </Box>
  )
}

```

## In Action

You can see these components in action on this page!

1. Place your cursor in the browser's address bar.
2. Remove any id queries from the url. (i.e. `/skip-nav#usage`)
3. Hit `Enter` to reload the page, then hit `Tab`. The Skip Nav link will appear
   in the upper left.
4. Hitting `Enter` on the link will take you to the top of the docs content.
