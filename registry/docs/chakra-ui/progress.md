# Progress

```tsx
import { Progress } from "@chakra-ui/react"

export const ProgressBasic = () => {
  return (
    <Progress.Root maxW="240px">
      <Progress.Track>
        
      </Progress.Track>
    </Progress.Root>
  )
}

```

## Usage

```tsx
import { Progress } from "@chakra-ui/react"
```

```tsx
<Progress.Root>
  <Progress.Track>
    
  </Progress.Track>
  
  
</Progress.Root>
```

## Examples

### Sizes

Use the `size` prop to change the size of the progress bar.

```tsx
import { For, Progress, Stack } from "@chakra-ui/react"

export const ProgressWithSizes = () => {
  return (
    
      
        {(size) => (
          <Progress.Root key={size} size={size}>
            <Progress.Track>
              
            </Progress.Track>
          </Progress.Root>
        )}
      
    
  )
}

```

### Variants

Use the `variant` prop to change the visual style of the progress bar.

```tsx
import { Progress, Stack } from "@chakra-ui/react"

export const ProgressWithVariants = () => {
  return (
    
      <Progress.Root variant="subtle">
        <Progress.Track>
          
        </Progress.Track>
      </Progress.Root>
      <Progress.Root variant="outline">
        <Progress.Track>
          
        </Progress.Track>
      </Progress.Root>
    
  )
}

```

### Colors

Use the `colorPalette` prop to change the color of the progress bar.

```tsx
import { Progress, Stack, Text } from "@chakra-ui/react"

export const ProgressWithColors = () => {
  return (
    
      {["gray","red","green","blue","teal","pink","purple","cyan","orange","yellow"].map((colorPalette) => (
        <Stack
          align="center"
          key={colorPalette}
          direction="row"
          gap="10"
          px="4"
        >
          {colorPalette}

          <Progress.Root
            width="120px"
            defaultValue={40}
            colorPalette={colorPalette}
            variant="outline"
          >
            <Progress.Track>
              
            </Progress.Track>
          </Progress.Root>
          <Progress.Root
            width="120px"
            defaultValue={40}
            colorPalette={colorPalette}
            variant="subtle"
          >
            <Progress.Track>
              
            </Progress.Track>
          </Progress.Root>
        
      ))}
    
  )
}

```

### Inline Label

Compose the `Progress.Label` and `Progress.ValueText` components to create an
inline label for the progress bar.

```tsx
import { HStack, Progress } from "@chakra-ui/react"

export const ProgressWithInlineLabel = () => {
  return (
    <Progress.Root defaultValue={40} maxW="sm">
      
        <Progress.Label>Usage</Progress.Label>
        <Progress.Track flex="1">
          
        </Progress.Track>
        <Progress.ValueText>40%</Progress.ValueText>
      
    </Progress.Root>
  )
}

```

### Info tip

Use the `info` prop to add a tooltip to the progress bar.

```tsx
import { Progress } from "@chakra-ui/react"
import { InfoTip } from "@/components/ui/toggle-tip"

export const ProgressWithLabelInfo = () => {
  return (
    <Progress.Root maxW="240px">
      <Progress.Label mb="2">
        Uploading
        Uploading document to the server
      </Progress.Label>
      <Progress.Track>
        
      </Progress.Track>
    </Progress.Root>
  )
}

```

### Indeterminate

Set the value to `null` to show an indeterminate progress bar.

```tsx
import { Progress } from "@chakra-ui/react"

export const ProgressIndeterminate = () => {
  return (
    <Progress.Root maxW="240px" value={null}>
      <Progress.Track>
        
      </Progress.Track>
    </Progress.Root>
  )
}

```

### Stripes

Set the `striped` prop to `true` to add stripes to the progress bar.

```tsx
import { Progress } from "@chakra-ui/react"

export const ProgressWithStripes = () => {
  return (
    <Progress.Root maxW="240px" striped>
      <Progress.Track>
        
      </Progress.Track>
    </Progress.Root>
  )
}

```

### Animated Stripes

Set the `animated` prop to `true` to animate the stripes.

```tsx
import { Progress } from "@chakra-ui/react"

export const ProgressWithAnimatedStripes = () => {
  return (
    <Progress.Root maxW="240px" striped animated>
      <Progress.Track>
        
      </Progress.Track>
    </Progress.Root>
  )
}

```

### Closed Component

Here's how to create a closed component using the `Progress` component.

<ExampleCode name="progress-closed-component" />

## Props

### Root

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| defaultValue | 50 | `number` | The initial value of the progress bar when rendered.
Use when you don't need to control the value of the progress bar. |
| formatOptions | { style: "percent" } | `NumberFormatOptions` | The options to use for formatting the value. |
| locale | "en-US" | `string` | The locale to use for formatting the value. |
| max | 100 | `number` | The maximum allowed value of the progress bar. |
| min | 0 | `number` | The minimum allowed value of the progress bar. |
| orientation | "horizontal" | `'horizontal' \| 'vertical'` | The orientation of the element. |
| colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
| variant | outline | `'outline' \| 'subtle'` | The variant of the component |
| shape | rounded | `'square' \| 'rounded' \| 'full'` | The shape of the component |
| size | md | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | The size of the component |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| unstyled | undefined | `boolean` | Whether to remove the component's style. |
| id | undefined | `string` | The unique identifier of the machine. |
| ids | undefined | `Partial<{ root: string; track: string; label: string; circle: string }>` | The ids of the elements in the progress bar. Useful for composition. |
| onValueChange | undefined | `(details: ValueChangeDetails) => void` | Callback fired when the value changes. |
| translations | undefined | `IntlTranslations` | The localized messages to use. |
| value | undefined | `number` | The controlled value of the progress bar. |
| striped | undefined | `'true' \| 'false'` | The striped of the component |
| animated | undefined | `'true' \| 'false'` | The animated of the component |

## Explorer

Explore the `Progress` component parts interactively. Click on parts in the
sidebar to highlight them in the preview.

<Explorer name="progress-explorer-demo" />
