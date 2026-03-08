# Color Picker

```tsx
"use client"

import { ColorPicker, HStack, Portal, parseColor } from "@chakra-ui/react"

export const ColorPickerBasic = () => {
  return (
    <ColorPicker.Root defaultValue={parseColor("#eb5e41")} maxW="200px">
      
      <ColorPicker.Label>Color</ColorPicker.Label>
      <ColorPicker.Control>
        
        
      </ColorPicker.Control>
      
        <ColorPicker.Positioner>
          <ColorPicker.Content>
            
            
              
              
            
          </ColorPicker.Content>
        </ColorPicker.Positioner>
      
    </ColorPicker.Root>
  )
}

```

## Usage

```jsx
import { ColorPicker } from "@chakra-ui/react"
```

```jsx
<ColorPicker.Root>
  
  
  <ColorPicker.Control>
    
    
  </ColorPicker.Control>
  <ColorPicker.Positioner>
    <ColorPicker.Content>
      
      
      
      <ColorPicker.SwatchGroup>
        <ColorPicker.SwatchTrigger>
          
        </ColorPicker.SwatchTrigger>
      </ColorPicker.SwatchGroup>
    </ColorPicker.Content>
  </ColorPicker.Positioner>
</ColorPicker.Root>
```

## Shortcuts

### ColorPicker.ChannelSlider

This component renders the slider track, thumb and transparency grid.

```tsx
```

is the same as:

```tsx
<ColorPicker.ChannelSlider>
  
  
  
</ColorPicker.ChannelSlider>
```

### ColorPicker.Sliders

This is a shortcut component for the hue and alpha sliders:

```tsx

  
  

```

### ColorPicker.Area

This component renders the color area thumb and background.

```tsx
<ColorPicker.Area>
  
  
</ColorPicker.Area>
```

is the same as:

```tsx
```

### ColorPicker.EyeDropper

This is a shortcut component for:

```tsx
<ColorPicker.EyeDropperTrigger asChild>
  
    
  
</ColorPicker.EyeDropperTrigger>
```

## Examples

### Sizes

Use the `size` prop to change the size of the color picker.

```tsx
"use client"

import {
  ColorPicker,
  For,
  HStack,
  Portal,
  Stack,
  parseColor,
} from "@chakra-ui/react"
import { LuCheck } from "react-icons/lu"

export const ColorPickerWithSizes = () => {
  return (
    
      
        {(size) => (
          <ColorPicker.Root
            key={size}
            defaultValue={parseColor("#eb5e41")}
            size={size}
          >
            
            <ColorPicker.Label>Color ({size})</ColorPicker.Label>
            <ColorPicker.Control>
              
              
            </ColorPicker.Control>
            
              <ColorPicker.Positioner>
                <ColorPicker.Content>
                  
                  
                    
                    
                  
                  <ColorPicker.SwatchGroup>
                    {swatches.map((item) => (
                      <ColorPicker.SwatchTrigger key={item} value={item}>
                        <ColorPicker.Swatch value={item} boxSize="4.5">
                          <ColorPicker.SwatchIndicator>
                            
                          </ColorPicker.SwatchIndicator>
                        </ColorPicker.Swatch>
                      </ColorPicker.SwatchTrigger>
                    ))}
                  </ColorPicker.SwatchGroup>
                </ColorPicker.Content>
              </ColorPicker.Positioner>
            
          </ColorPicker.Root>
        )}
      
    
  )
}

const swatches = ["red", "blue", "green"]

```

### Variants

Use the `variant` prop to change the visual style of the color picker. Values
can be either `outline` or `subtle`.

```tsx
"use client"

import {
  ColorPicker,
  For,
  HStack,
  Portal,
  Stack,
  parseColor,
} from "@chakra-ui/react"

export const ColorPickerWithVariants = () => {
  return (
    
      
        {(variant) => (
          <ColorPicker.Root
            key={variant}
            defaultValue={parseColor("#eb5e41")}
            maxW="200px"
            variant={variant}
          >
            
            <ColorPicker.Label>Color ({variant})</ColorPicker.Label>
            <ColorPicker.Control>
              
              
            </ColorPicker.Control>
            
              <ColorPicker.Positioner>
                <ColorPicker.Content>
                  
                  
                    
                    
                  
                </ColorPicker.Content>
              </ColorPicker.Positioner>
            
          </ColorPicker.Root>
        )}
      
    
  )
}

```

### Input Only

Combine the `ColorPicker.ValueSwatch` and the `ColorPicker.EyeDropper` on the
`InputGroup` to render a color picker that contains only an input.

```tsx
"use client"

import { ColorPicker, InputGroup, parseColor } from "@chakra-ui/react"

export const ColorPickerInputOnly = () => {
  return (
    <ColorPicker.Root defaultValue={parseColor("#eb5e41")} maxW="200px">
      
      <ColorPicker.Label>Color</ColorPicker.Label>
      <ColorPicker.Control>
        <InputGroup
          startElement={}
          endElementProps={{ px: "1" }}
          endElement={}
        >
          
        
      </ColorPicker.Control>
    </ColorPicker.Root>
  )
}

```

### Swatch Only

Use the `ColorPicker.SwatchGroup` and `ColorPicker.SwatchTrigger` to render only
the color swatches.

```tsx
import { ColorPicker } from "@chakra-ui/react"

export const ColorPickerSwatchOnly = () => {
  return (
    <ColorPicker.Root alignItems="flex-start">
      
      <ColorPicker.Label>
        Color: 
      </ColorPicker.Label>
      <ColorPicker.SwatchGroup>
        {swatches.map((item) => (
          <ColorPicker.SwatchTrigger key={item} value={item}>
            <ColorPicker.Swatch value={item}>
              
            </ColorPicker.Swatch>
          </ColorPicker.SwatchTrigger>
        ))}
      </ColorPicker.SwatchGroup>
    </ColorPicker.Root>
  )
}

const swatches = ["red", "green", "blue", "purple", "orange", "pink"]

```

### Trigger Only

Compose the color picker to initially show only a trigger using the
`ColorPicker.ValueSwatch` and `ColorPicker.ValueText`.

```tsx
"use client"

import { ColorPicker, HStack, Portal, parseColor } from "@chakra-ui/react"

export const ColorPickerTriggerOnly = () => {
  return (
    <ColorPicker.Root defaultValue={parseColor("#eb5e41")} maxW="200px">
      
      <ColorPicker.Label>Color</ColorPicker.Label>
      <ColorPicker.Control>
        <ColorPicker.Trigger px="2">
          
          
        </ColorPicker.Trigger>
      </ColorPicker.Control>
      
        <ColorPicker.Positioner>
          <ColorPicker.Content>
            
            
              
              
              
            
          </ColorPicker.Content>
        </ColorPicker.Positioner>
      
    </ColorPicker.Root>
  )
}

```

### Trigger Inside Input

Compose the color picker to trigger in input using the `InputGroup` and
`ColorPickerInput`.

```tsx
"use client"

import { ColorPicker, HStack, Portal, parseColor } from "@chakra-ui/react"

export const ColorPickerTriggerOnly = () => {
  return (
    <ColorPicker.Root defaultValue={parseColor("#eb5e41")} maxW="200px">
      
      <ColorPicker.Label>Color</ColorPicker.Label>
      <ColorPicker.Control>
        <ColorPicker.Trigger px="2">
          
          
        </ColorPicker.Trigger>
      </ColorPicker.Control>
      
        <ColorPicker.Positioner>
          <ColorPicker.Content>
            
            
              
              
              
            
          </ColorPicker.Content>
        </ColorPicker.Positioner>
      
    </ColorPicker.Root>
  )
}

```

### Controlled

Use the `value` and `onValueChange` props to control the state of the color
picker.

```tsx
"use client"

import { ColorPicker, HStack, Portal, parseColor } from "@chakra-ui/react"
import { useState } from "react"

export const ColorPickerControlled = () => {
  const [color, setColor] = useState(parseColor("#eb5e41"))

  return (
    <ColorPicker.Root
      value={color}
      format="hsla"
      onValueChange={(e) => setColor(e.value)}
      maxW="200px"
    >
      
      <ColorPicker.Label>Color</ColorPicker.Label>
      <ColorPicker.Control>
        
        
      </ColorPicker.Control>
      
        <ColorPicker.Positioner>
          <ColorPicker.Content>
            
            
              
              
            
          </ColorPicker.Content>
        </ColorPicker.Positioner>
      
    </ColorPicker.Root>
  )
}

```

### Store

An alternative way to control the color picker is to use the `RootProvider`
component and the `useColorPicker` store hook.

This way you can access the color picker state and methods from outside the
color picker.

```tsx
"use client"

import {
  ColorPicker,
  HStack,
  Portal,
  parseColor,
  useColorPicker,
} from "@chakra-ui/react"

export const ColorPickerWithStore = () => {
  const colorPicker = useColorPicker({
    defaultValue: parseColor("#eb5e41"),
  })

  return (
    <ColorPicker.RootProvider value={colorPicker} maxW="200px">
      <ColorPicker.Label>Color</ColorPicker.Label>
      <ColorPicker.Control>
        
        
      </ColorPicker.Control>
      
        <ColorPicker.Positioner>
          <ColorPicker.Content>
            
            
              
              
            
          </ColorPicker.Content>
        </ColorPicker.Positioner>
      
    </ColorPicker.RootProvider>
  )
}

```

### Change End

Use the `onValueChangeEnd` to listen to when the user finishes selecting a
color, rather than while they are scrubbing or dragging through the color area.

```tsx
"use client"

import {
  Code,
  ColorPicker,
  HStack,
  Portal,
  Stack,
  parseColor,
} from "@chakra-ui/react"
import { useState } from "react"

export const ColorPickerChangeEnd = () => {
  const [value, setValue] = useState(parseColor("#eb5e41"))

  return (
    
      
        onChangeEnd: {value.toString("hex")}
      
      <ColorPicker.Root
        defaultValue={value}
        onValueChangeEnd={(e) => setValue(e.value)}
      >
        
        <ColorPicker.Label>Color</ColorPicker.Label>
        <ColorPicker.Control>
          
          
        </ColorPicker.Control>
        
          <ColorPicker.Positioner>
            <ColorPicker.Content>
              
              
                
                
              
            </ColorPicker.Content>
          </ColorPicker.Positioner>
        
      </ColorPicker.Root>
    
  )
}

```

### Channel Slider

Combine the `ColorPickerChannelSliders` and the `format` prop to add the
different color channels to the color picker.

```tsx
"use client"

import {
  ColorPicker,
  For,
  Portal,
  Stack,
  getColorChannels,
  parseColor,
} from "@chakra-ui/react"

const ChannelSliders = (props: { format: ColorPicker.ColorFormat }) => {
  const channels = getColorChannels(props.format)
  return (
    <ColorPicker.View format={props.format}>
      
        {(channel) => (
          
            <ColorPicker.ChannelText minW="5ch">
              {channel}
            </ColorPicker.ChannelText>
            
          
        )}
      
    </ColorPicker.View>
  )
}

export const ColorPickerChannelSliderOnly = () => {
  return (
    <ColorPicker.Root defaultValue={parseColor("#eb5e41")} maxW="200px">
      <ColorPicker.Control>
        
      </ColorPicker.Control>
      
        <ColorPicker.Positioner>
          <ColorPicker.Content>
            
            
            
            
          </ColorPicker.Content>
        </ColorPicker.Positioner>
      
    </ColorPicker.Root>
  )
}

```

### Hook Form

Here's an example of how to integrate the color picker with `react-hook-form`.

```tsx
"use client"

import {
  Button,
  ColorPicker,
  HStack,
  Portal,
  Stack,
  parseColor,
} from "@chakra-ui/react"
import { Controller, useForm } from "react-hook-form"

interface FormValues {
  color: string
}

export const ColorPickerWithHookForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: { color: "#000000" },
  })

  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    
      
        <Controller
          name="color"
          control={control}
          render={({ field }) => (
            <ColorPicker.Root
              name={field.name}
              defaultValue={parseColor(field.value)}
              onValueChange={(e) => field.onChange(e.valueAsString)}
            >
              
              <ColorPicker.Control>
                
                
              </ColorPicker.Control>
              
                <ColorPicker.Positioner>
                  <ColorPicker.Content>
                    
                    
                      
                      
                    
                  </ColorPicker.Content>
                </ColorPicker.Positioner>
              
            </ColorPicker.Root>
          )}
        />

        Submit
      
    
  )
}

```

### Inline

Here's an example of how to display an inline version of the color picker.

```tsx
"use client"

import { ColorPicker, HStack, parseColor } from "@chakra-ui/react"

export const ColorPickerInline = () => {
  return (
    <ColorPicker.Root open defaultValue={parseColor("#000")}>
      
      <ColorPicker.Content animation="none" shadow="none" padding="0">
        
        
          
          
          
        
      </ColorPicker.Content>
    </ColorPicker.Root>
  )
}

```

### Open From Dialog

To use the color picker within a dialog, avoid portalling the
`ColorPicker.Positioner` to the document's body.

```tsx
"use client"

import {
  Button,
  CloseButton,
  ColorPicker,
  Dialog,
  HStack,
  Portal,
  parseColor,
} from "@chakra-ui/react"

export const ColorPickerOpenFromDialog = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        Open Dialog
      </Dialog.Trigger>
      
        
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.CloseTrigger asChild>
              
            </Dialog.CloseTrigger>
            <Dialog.Header>
              <Dialog.Title>Color Picker</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              
            </Dialog.Body>
            
          </Dialog.Content>
        </Dialog.Positioner>
      
    </Dialog.Root>
  )
}

const DialogColorPicker = () => {
  return (
    <ColorPicker.Root defaultValue={parseColor("#eb5e41")} maxW="200px">
      
      <ColorPicker.Label>Color</ColorPicker.Label>
      <ColorPicker.Control>
        
        
      </ColorPicker.Control>

      <ColorPicker.Positioner>
        <ColorPicker.Content>
          
          
            
            
          
        </ColorPicker.Content>
      </ColorPicker.Positioner>
    </ColorPicker.Root>
  )
}

```

### Disabled

Pass the `disabled` prop to disable the color picker.

```tsx
"use client"

import { ColorPicker, HStack, Portal, parseColor } from "@chakra-ui/react"

export const ColorPickerWithDisabled = () => {
  return (
    <ColorPicker.Root
      disabled
      defaultValue={parseColor("#eb5e41")}
      maxW="200px"
    >
      
      <ColorPicker.Label>Color</ColorPicker.Label>
      <ColorPicker.Control>
        
        
      </ColorPicker.Control>
      
        <ColorPicker.Positioner>
          <ColorPicker.Content>
            
            
              
              
            
          </ColorPicker.Content>
        </ColorPicker.Positioner>
      
    </ColorPicker.Root>
  )
}

```

### Channel Input

Use the `ChannelFormat.Select` and `ColorPicker.ChannelInput` to create a color
picker that allows users to select their preferred channel.

```tsx
"use client"

import {
  ColorPicker,
  For,
  HStack,
  Portal,
  VStack,
  getColorChannels,
  parseColor,
} from "@chakra-ui/react"

const ChannelInputs = (props: { format: ColorPicker.ColorFormat }) => {
  const channels = getColorChannels(props.format)
  return (
    <ColorPicker.View format={props.format}>
      
        {(channel) => (
          
            <ColorPicker.ChannelInput
              channel={channel}
              px="0"
              height="7"
              textStyle="xs"
              textAlign="center"
            />
            <ColorPicker.ChannelText>
              {channel.charAt(0).toUpperCase()}
            </ColorPicker.ChannelText>
          
        )}
      
    </ColorPicker.View>
  )
}

export const ColorPickerWithChannelInput = () => {
  return (
    <ColorPicker.Root defaultValue={parseColor("#eb5e41")} maxW="200px">
      
      <ColorPicker.Label>Color</ColorPicker.Label>
      <ColorPicker.Control>
        
        
      </ColorPicker.Control>
      
        <ColorPicker.Positioner>
          <ColorPicker.Content>
            
            
              
              
            
            
            
            
          </ColorPicker.Content>
        </ColorPicker.Positioner>
      
    </ColorPicker.Root>
  )
}

```

### Fit Content

Pass the `data-fit-content` attribute to the `ColorPicker.Trigger` to make it
fit the content.

```tsx
"use client"

import { ColorPicker, HStack, Portal, parseColor } from "@chakra-ui/react"

export const ColorPickerWithFitContent = () => {
  return (
    <ColorPicker.Root defaultValue={parseColor("#eb5e41")} maxW="200px">
      
      <ColorPicker.Label>Color</ColorPicker.Label>
      <ColorPicker.Control>
        
        <ColorPicker.Trigger data-fit-content rounded="full">
          
        </ColorPicker.Trigger>
      </ColorPicker.Control>
      
        <ColorPicker.Positioner>
          <ColorPicker.Content>
            
            
              
              
            
          </ColorPicker.Content>
        </ColorPicker.Positioner>
      
    </ColorPicker.Root>
  )
}

```

### ReadOnly

Use the `readOnly` prop to make the color picker component read-only.

### Save Swatch

Here's an example of how to save a selected color as a swatch.

```tsx
"use client"

import {
  Button,
  ColorPicker,
  HStack,
  IconButton,
  Portal,
  Show,
  VStack,
  parseColor,
} from "@chakra-ui/react"
import { useState } from "react"
import { LuCheck, LuPlus, LuType } from "react-icons/lu"

export const ColorPickerWithSaveSwatch = () => {
  const [color, setColor] = useState(parseColor("#000"))
  const [view, setView] = useState<"picker" | "swatch">("swatch")
  const [swatches, setSwatches] = useState<string[]>([
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
  ])

  return (
    <ColorPicker.Root
      defaultValue={color}
      onValueChange={(e) => setColor(e.value)}
      maxW="200px"
    >
      
      <ColorPicker.Control>
        <ColorPicker.Trigger data-fit-content>
          
            
            
          
        </ColorPicker.Trigger>
      </ColorPicker.Control>

      
        <ColorPicker.Positioner>
          <ColorPicker.Content>
            
              
              
                
                
              
              <Button
                onClick={() => {
                  setSwatches((prev) => [...prev, color.toString("css")])
                  setView("swatch")
                }}
              >
                Save Swatch
              
            
            
              <ColorPicker.SwatchGroup>
                {swatches.map((swatch) => (
                  <ColorPicker.SwatchTrigger key={swatch} value={swatch}>
                    <ColorPicker.Swatch value={swatch}>
                      <ColorPicker.SwatchIndicator>
                        
                      </ColorPicker.SwatchIndicator>
                    </ColorPicker.Swatch>
                  </ColorPicker.SwatchTrigger>
                ))}
                <IconButton
                  variant="outline"
                  size="xs"
                  onClick={() => setView("picker")}
                >
                  
                
              </ColorPicker.SwatchGroup>
            
          </ColorPicker.Content>
        </ColorPicker.Positioner>
      
    </ColorPicker.Root>
  )
}

```

### Swatches

Here's an example of how to combine the color picker with pre-defined swatches.

```tsx
"use client"

import { ColorPicker, HStack, Portal, parseColor } from "@chakra-ui/react"
import { LuCheck } from "react-icons/lu"

export const ColorPickerWithSwatches = () => {
  return (
    <ColorPicker.Root defaultValue={parseColor("#eb5e41")} maxW="200px">
      
      <ColorPicker.Label>Color</ColorPicker.Label>
      <ColorPicker.Control>
        
        
      </ColorPicker.Control>
      
        <ColorPicker.Positioner>
          <ColorPicker.Content>
            
            
              
              
            
            <ColorPicker.SwatchGroup>
              {swatches.map((item) => (
                <ColorPicker.SwatchTrigger key={item} value={item}>
                  <ColorPicker.Swatch boxSize="4.5" value={item}>
                    <ColorPicker.SwatchIndicator>
                      
                    </ColorPicker.SwatchIndicator>
                  </ColorPicker.Swatch>
                </ColorPicker.SwatchTrigger>
              ))}
            </ColorPicker.SwatchGroup>
          </ColorPicker.Content>
        </ColorPicker.Positioner>
      
    </ColorPicker.Root>
  )
}

// prettier-ignore
const swatches = ["#000000", "#4A5568", "#F56565", "#ED64A6", "#9F7AEA", "#6B46C1", "#4299E1", "#0BC5EA", "#00B5D8", "#38B2AC", "#48BB78", "#68D391", "#ECC94B", "#DD6B20"]

```

### Swatch and Input

Here's how to compose a swatch with an input.

```tsx
"use client"

import { ColorPicker, Portal, parseColor } from "@chakra-ui/react"
import { LuCheck } from "react-icons/lu"

export const ColorPickerWithSwatchAndInput = () => {
  return (
    <ColorPicker.Root
      size="xs"
      defaultValue={parseColor("#eb5e41")}
      maxW="200px"
    >
      
      <ColorPicker.Control>
        
      </ColorPicker.Control>
      
        <ColorPicker.Positioner>
          <ColorPicker.Content>
            <ColorPicker.SwatchGroup>
              {swatches.map((item) => (
                <ColorPicker.SwatchTrigger key={item} value={item}>
                  <ColorPicker.Swatch value={item}>
                    <ColorPicker.SwatchIndicator>
                      
                    </ColorPicker.SwatchIndicator>
                  </ColorPicker.Swatch>
                </ColorPicker.SwatchTrigger>
              ))}
            </ColorPicker.SwatchGroup>
            
          </ColorPicker.Content>
        </ColorPicker.Positioner>
      
    </ColorPicker.Root>
  )
}

const swatches = ["red", "blue", "green"]

```

### Swatch and Trigger

Here's how to compose a swatch with a trigger.

```tsx
"use client"

import { ColorPicker, Portal, parseColor } from "@chakra-ui/react"
import { LuCheck } from "react-icons/lu"

export const ColorPickerWithSwatchAndInput = () => {
  return (
    <ColorPicker.Root
      size="xs"
      defaultValue={parseColor("#eb5e41")}
      maxW="200px"
    >
      
      <ColorPicker.Control>
        
      </ColorPicker.Control>
      
        <ColorPicker.Positioner>
          <ColorPicker.Content>
            <ColorPicker.SwatchGroup>
              {swatches.map((item) => (
                <ColorPicker.SwatchTrigger key={item} value={item}>
                  <ColorPicker.Swatch value={item}>
                    <ColorPicker.SwatchIndicator>
                      
                    </ColorPicker.SwatchIndicator>
                  </ColorPicker.Swatch>
                </ColorPicker.SwatchTrigger>
              ))}
            </ColorPicker.SwatchGroup>
            
          </ColorPicker.Content>
        </ColorPicker.Positioner>
      
    </ColorPicker.Root>
  )
}

const swatches = ["red", "blue", "green"]

```

## Guide

### Getting the hex code

Use the `onValueChange` callback to get the color value. The `value` object has
a `toString()` method that accepts different format options.

```tsx
<ColorPicker.Root
  onValueChange={(details) => {
    console.log(details.value.toString("hex")) // "#ff0000"
    console.log(details.value.toString("hexa")) // "#ff0000ff" (with alpha)
    console.log(details.value.toString("rgb")) // "rgb(255, 0, 0)"
    console.log(details.value.toString("css")) // CSS color string
  }}
>
  {/* ... */}
</ColorPicker.Root>
```

You can also access it from the store:

```tsx
const picker = useColorPicker() // or useColorPickerContext()
const hexValue = picker.value.toString("hex") // "#ff0000"
```

The same `toString()` method is available when using `parseColor`:

```tsx
import { parseColor } from "@chakra-ui/react"

const color = parseColor("#ff0000")
console.log(color.toString("hex")) // "#ff0000"
console.log(color.toString("rgba")) // "rgba(255, 0, 0, 1)"
```

## Props

### Root

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| closeOnSelect | false | `boolean` | Whether to close the color picker when a swatch is selected |
| defaultFormat | "rgba" | `ColorFormat` | The initial color format when rendered.
Use when you don't need to control the color format of the color picker. |
| defaultValue | #000000 | `Color` | The initial color value when rendered.
Use when you don't need to control the color value of the color picker. |
| lazyMount | false | `boolean` | Whether to enable lazy mounting |
| openAutoFocus | true | `boolean` | Whether to auto focus the color picker when it is opened |
| skipAnimationOnMount | false | `boolean` | Whether to allow the initial presence animation. |
| unmountOnExit | false | `boolean` | Whether to unmount on exit. |
| colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
| size | md | `'2xs' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'` | The size of the component |
| variant | outline | `'outline' \| 'subtle'` | The variant of the component |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| unstyled | undefined | `boolean` | Whether to remove the component's style. |
| defaultOpen | undefined | `boolean` | The initial open state of the color picker when rendered.
Use when you don't need to control the open state of the color picker. |
| disabled | undefined | `boolean` | Whether the color picker is disabled |
| format | undefined | `ColorFormat` | The controlled color format to use |
| id | undefined | `string` | The unique identifier of the machine. |
| ids | undefined | `Partial<{ root: string; control: string; trigger: string; label: string; input: string; hiddenInput: string; content: string; area: string; areaGradient: string; positioner: string; formatSelect: string; areaThumb: string; channelInput: (id: string) => string; channelSliderTrack: (id: ColorChannel) => string; channe...` | The ids of the elements in the color picker. Useful for composition. |
| immediate | undefined | `boolean` | Whether to synchronize the present change immediately or defer it to the next frame |
| initialFocusEl | undefined | `() => HTMLElement \| null` | The initial focus element when the color picker is opened. |
| inline | undefined | `boolean` | Whether to render the color picker inline |
| invalid | undefined | `boolean` | Whether the color picker is invalid |
| name | undefined | `string` | The name for the form input |
| onExitComplete | undefined | `VoidFunction` | Function called when the animation ends in the closed state |
| onFocusOutside | undefined | `(event: FocusOutsideEvent) => void` | Function called when the focus is moved outside the component |
| onFormatChange | undefined | `(details: FormatChangeDetails) => void` | Function called when the color format changes |
| onInteractOutside | undefined | `(event: InteractOutsideEvent) => void` | Function called when an interaction happens outside the component |
| onOpenChange | undefined | `(details: OpenChangeDetails) => void` | Handler that is called when the user opens or closes the color picker. |
| onPointerDownOutside | undefined | `(event: PointerDownOutsideEvent) => void` | Function called when the pointer is pressed down outside the component |
| onValueChange | undefined | `(details: ValueChangeDetails) => void` | Handler that is called when the value changes, as the user drags. |
| onValueChangeEnd | undefined | `(details: ValueChangeDetails) => void` | Handler that is called when the user stops dragging. |
| open | undefined | `boolean` | The controlled open state of the color picker |
| positioning | undefined | `PositioningOptions` | The positioning options for the color picker |
| present | undefined | `boolean` | Whether the node is present (controlled by the user) |
| readOnly | undefined | `boolean` | Whether the color picker is read-only |
| required | undefined | `boolean` | Whether the color picker is required |
| value | undefined | `Color` | The controlled color value of the color picker |

## Explorer

Explore the `Color Picker` component parts interactively. Click on parts in the
sidebar to highlight them in the preview.

<Explorer name="color-picker-explorer-demo" />

# Color Swatch

```tsx
import { ColorSwatch } from "@chakra-ui/react"

export const ColorSwatchBasic = () => {
  return 
}

```

## Usage

```tsx
import { ColorSwatch } from "@chakra-ui/react"
```

```tsx
```

## Examples

### Sizes

Use the `size` prop to change the size of the color swatch.

```tsx
import { HStack } from "@chakra-ui/react"
import { ColorSwatch } from "@chakra-ui/react"
import { For } from "@chakra-ui/react"

export const ColorSwatchWithSizes = () => {
  return (
    
      
        {(size) => }
      
    
  )
}

```

### Alpha

Here's an example of how to create a color swatch with an alpha channel.

```tsx
import { ColorSwatch, HStack } from "@chakra-ui/react"

export const ColorSwatchWithAlpha = () => {
  return (
    
      {colors.map((color) => (
        
      ))}
    
  )
}

const colors = [
  "rgba(255, 0, 0, 0.5)",
  "rgba(0, 0, 255, 0.7)",
  "rgba(0, 255, 0, 0.4)",
  "rgba(255, 192, 203, 0.6)",
]

```

### With Badge

Here's an example of how to compose the `ColorSwatch` with a `Badge`.

```tsx
import { Badge, ColorSwatch } from "@chakra-ui/react"

export const ColorSwatchWithBadge = () => {
  return (
    
      
      #bada55
    
  )
}

```

### Mixed Colors

Use the `ColorSwatchMix` to create a color swatch that contains multiple colors,
but retains the size of a single color swatch.

```tsx
import { ColorSwatchMix, HStack } from "@chakra-ui/react"

export const ColorSwatchMixed = () => {
  return (
    
      
      
      <ColorSwatchMix
        size="lg"
        items={["lightgreen", "green", "darkgreen", "black"]}
      />
    
  )
}

```

### Palette

Here's an example of composing multiple swatches to create a palette.

```tsx
import { ColorSwatch, Group } from "@chakra-ui/react"

export const ColorSwatchPalette = () => {
  return (
    
      {swatches.map((color) => (
        
      ))}
    
  )
}

const swatches = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"]

```

# Combobox

```tsx
"use client"

import {
  Combobox,
  Portal,
  useFilter,
  useListCollection,
} from "@chakra-ui/react"

export const ComboboxBasic = () => {
  const { contains } = useFilter({ sensitivity: "base" })

  const { collection, filter } = useListCollection({
    initialItems: frameworks,
    filter: contains,
  })

  return (
    <Combobox.Root
      collection={collection}
      onInputValueChange={(e) => filter(e.inputValue)}
      width="320px"
    >
      <Combobox.Label>Select framework</Combobox.Label>
      <Combobox.Control>
        
        <Combobox.IndicatorGroup>
          
          
        </Combobox.IndicatorGroup>
      </Combobox.Control>
      
        <Combobox.Positioner>
          <Combobox.Content>
            <Combobox.Empty>No items found</Combobox.Empty>
            {collection.items.map((item) => (
              <Combobox.Item item={item} key={item.value}>
                {item.label}
                
              </Combobox.Item>
            ))}
          </Combobox.Content>
        </Combobox.Positioner>
      
    </Combobox.Root>
  )
}

const frameworks = [
  { label: "React", value: "react" },
  { label: "Solid", value: "solid" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular" },
  { label: "Svelte", value: "svelte" },
  { label: "Preact", value: "preact" },
  { label: "Qwik", value: "qwik" },
  { label: "Lit", value: "lit" },
  { label: "Alpine.js", value: "alpinejs" },
  { label: "Ember", value: "ember" },
  { label: "Next.js", value: "nextjs" },
]

```

## Usage

```tsx
import { Combobox } from "@chakra-ui/react"
```

```tsx
<Combobox.Root>
  

  <Combobox.Control>
    
    <Combobox.IndicatorGroup>
      
      
    </Combobox.IndicatorGroup>
  </Combobox.Control>

  <Combobox.Positioner>
    <Combobox.Content>
      
      

      <Combobox.ItemGroup>
        
        
      </Combobox.ItemGroup>
    </Combobox.Content>
  </Combobox.Positioner>
</Combobox.Root>
```

To setup combobox, you need to import the following hooks:

- `useListCollection`: Used to manage the
  [list collection](https://ark-ui.com/docs/collections/list-collection) in the
  combobox, providing helpful methods for filtering and mutating the list.

- `useFilter`: Used to provide the filtering logic for the combobox based on
  [`Intl.Collator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator)
  APIs.

## Examples

### Basic

The basic combobox provides a searchable dropdown with single selection.

```tsx
"use client"

import {
  Combobox,
  Portal,
  useFilter,
  useListCollection,
} from "@chakra-ui/react"

export const ComboboxBasic = () => {
  const { contains } = useFilter({ sensitivity: "base" })

  const { collection, filter } = useListCollection({
    initialItems: frameworks,
    filter: contains,
  })

  return (
    <Combobox.Root
      collection={collection}
      onInputValueChange={(e) => filter(e.inputValue)}
      width="320px"
    >
      <Combobox.Label>Select framework</Combobox.Label>
      <Combobox.Control>
        
        <Combobox.IndicatorGroup>
          
          
        </Combobox.IndicatorGroup>
      </Combobox.Control>
      
        <Combobox.Positioner>
          <Combobox.Content>
            <Combobox.Empty>No items found</Combobox.Empty>
            {collection.items.map((item) => (
              <Combobox.Item item={item} key={item.value}>
                {item.label}
                
              </Combobox.Item>
            ))}
          </Combobox.Content>
        </Combobox.Positioner>
      
    </Combobox.Root>
  )
}

const frameworks = [
  { label: "React", value: "react" },
  { label: "Solid", value: "solid" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular" },
  { label: "Svelte", value: "svelte" },
  { label: "Preact", value: "preact" },
  { label: "Qwik", value: "qwik" },
  { label: "Lit", value: "lit" },
  { label: "Alpine.js", value: "alpinejs" },
  { label: "Ember", value: "ember" },
  { label: "Next.js", value: "nextjs" },
]

```

### Sizes

Pass the `size` prop to the `Combobox.Root` to change the size of the combobox.

```tsx
"use client"

import {
  Combobox,
  Portal,
  Stack,
  useFilter,
  useListCollection,
} from "@chakra-ui/react"

export const ComboboxWithSizes = () => {
  return (
    
      
      
      
      
    
  )
}

const ComboboxDemo = (props: Omit<Combobox.RootProps, "collection">) => {
  const { contains } = useFilter({ sensitivity: "base" })

  const { collection, filter } = useListCollection({
    initialItems: frameworks,
    filter: contains,
  })

  return (
    <Combobox.Root
      {...props}
      onInputValueChange={(e) => filter(e.inputValue)}
      collection={collection}
    >
      <Combobox.Label>
        Select framework ({props.size?.toString()})
      </Combobox.Label>
      <Combobox.Control>
        
        <Combobox.IndicatorGroup>
          
          
        </Combobox.IndicatorGroup>
      </Combobox.Control>
      
        <Combobox.Positioner>
          <Combobox.Content>
            <Combobox.Empty>No items found</Combobox.Empty>
            {collection.items.map((item) => (
              <Combobox.Item item={item} key={item.value}>
                {item.label}
                
              </Combobox.Item>
            ))}
          </Combobox.Content>
        </Combobox.Positioner>
      
    </Combobox.Root>
  )
}

const frameworks = [
  { label: "React", value: "react" },
  { label: "Solid", value: "solid" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular" },
  { label: "Svelte", value: "svelte" },
  { label: "Preact", value: "preact" },
  { label: "Qwik", value: "qwik" },
  { label: "Lit", value: "lit" },
  { label: "Alpine.js", value: "alpinejs" },
  { label: "Ember", value: "ember" },
  { label: "Next.js", value: "nextjs" },
]

```

### Variants

Pass the `variant` prop to the `Combobox.Root` to change the appearance of the
combobox.

```tsx
"use client"

import {
  Combobox,
  Portal,
  Stack,
  useFilter,
  useListCollection,
} from "@chakra-ui/react"

export const ComboboxWithVariants = () => {
  return (
    
      
      
      
    
  )
}

const ComboboxDemo = (props: Omit<Combobox.RootProps, "collection">) => {
  const { contains } = useFilter({ sensitivity: "base" })

  const { collection, filter } = useListCollection({
    initialItems: frameworks,
    filter: contains,
  })

  return (
    <Combobox.Root
      {...props}
      onInputValueChange={(e) => filter(e.inputValue)}
      collection={collection}
    >
      <Combobox.Label>
        Select framework ({props.variant?.toString()})
      </Combobox.Label>
      <Combobox.Control>
        
        <Combobox.IndicatorGroup>
          
          
        </Combobox.IndicatorGroup>
      </Combobox.Control>
      
        <Combobox.Positioner>
          <Combobox.Content>
            <Combobox.Empty>No items found</Combobox.Empty>
            {collection.items.map((item) => (
              <Combobox.Item item={item} key={item.value}>
                {item.label}
                
              </Combobox.Item>
            ))}
          </Combobox.Content>
        </Combobox.Positioner>
      
    </Combobox.Root>
  )
}

const frameworks = [
  { label: "React", value: "react" },
  { label: "Solid", value: "solid" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular" },
  { label: "Svelte", value: "svelte" },
  { label: "Preact", value: "preact" },
  { label: "Qwik", value: "qwik" },
  { label: "Lit", value: "lit" },
  { label: "Alpine.js", value: "alpinejs" },
  { label: "Ember", value: "ember" },
  { label: "Next.js", value: "nextjs" },
]

```
