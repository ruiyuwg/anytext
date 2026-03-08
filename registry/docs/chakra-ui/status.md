# Status

```tsx
import { HStack, Status } from "@chakra-ui/react"

export const StatusBasic = () => {
  return (
    <HStack gap="6">
      <Status.Root colorPalette="red">
        <Status.Indicator />
      </Status.Root>
      <Status.Root colorPalette="blue">
        <Status.Indicator />
      </Status.Root>
      <Status.Root colorPalette="orange">
        <Status.Indicator />
      </Status.Root>
      <Status.Root colorPalette="green">
        <Status.Indicator />
      </Status.Root>
    </HStack>
  )
}

```

## Usage

```tsx
import { Status } from "@chakra-ui/react"
```

```tsx
<Status.Root>
  <Status.Indicator />
</Status.Root>
```

If you prefer a closed component composition, check out the
[snippet below](#closed-component).

## Examples

### Label

Render the label within the `Status.Root` component.

```tsx
import { HStack, Status } from "@chakra-ui/react"

export const StatusWithLabel = () => {
  return (
    <HStack gap="6">
      <Status.Root colorPalette="red">
        <Status.Indicator />
        Error
      </Status.Root>
      <Status.Root colorPalette="blue">
        <Status.Indicator />
        Info
      </Status.Root>
      <Status.Root colorPalette="orange">
        <Status.Indicator />
        Warning
      </Status.Root>
      <Status.Root colorPalette="green">
        <Status.Indicator />
        Success
      </Status.Root>
    </HStack>
  )
}

```

### Sizes

Use the `size` prop to change the size of the status component.

```tsx
import { For, HStack, Stack, Status } from "@chakra-ui/react"

export const StatusWithSizes = () => {
  return (
    <Stack gap="2" align="flex-start">
      <For each={["sm", "md", "lg"]}>
        {(size) => (
          <HStack key={size} gap="10" px="4">
            <Status.Root size={size} width="100px" colorPalette="orange">
              <Status.Indicator />
              In Review
            </Status.Root>
            <Status.Root size={size} width="100px" colorPalette="red">
              <Status.Indicator />
              Error
            </Status.Root>
            <Status.Root size={size} width="100px" colorPalette="green">
              <Status.Indicator />
              Approved
            </Status.Root>
          </HStack>
        )}
      </For>
    </Stack>
  )
}

```

### Closed Component

Here's how to setup the Status for a closed component composition.

If you want to automatically add the closed component to your project, run the
command:

```bash
npx @chakra-ui/cli snippet add status
```

## Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
| size | md | `'sm' \| 'md' \| 'lg'` | The size of the component |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| unstyled | undefined | `boolean` | Whether to remove the component's style. |

## Explorer

Explore the `Status` component parts interactively. Click on parts in the
sidebar to highlight them in the preview.
