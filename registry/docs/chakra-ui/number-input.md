# Number Input

```tsx
import { NumberInput } from "@chakra-ui/react"

export const NumberInputBasic = () => {
  return (
    <NumberInput.Root defaultValue="10" width="200px">
      
      
    </NumberInput.Root>
  )
}

```

## Usage

```tsx
import { NumberInput } from "@chakra-ui/react"
```

```tsx
<NumberInput.Root>
  
  
  <NumberInput.Control>
    
    
  </NumberInput.Control>
  
  
</NumberInput.Root>
```

:::info

If you prefer a closed component composition, check out the
[snippet below](#closed-component).

:::

## Shortcuts

The `NumberInput` component provides a set of shortcuts for common use cases

### NumberInputControl

This component renders the `NumberInput.IncrementTrigger` and
`NumberInput.DecrementTrigger` within it by default.

Writing this:

```tsx
```

is shorthand for writing this if you don't need to customize the triggers:

```tsx
<NumberInput.Control>
  
  
</NumberInput.Control>
```

## Examples

### Sizes

Pass the `size` prop to the `NumberInput.Root` component to change the size of
the number input.

```tsx
import { For, NumberInput, Stack } from "@chakra-ui/react"

export const NumberInputWithSizes = () => {
  return (
    
      
        {(size) => (
          <NumberInput.Root size={size} key={size} defaultValue="10">
            
            
          </NumberInput.Root>
        )}
      
    
  )
}

```

### Formatting

Pass the `formatOptions` prop to the `NumberInput.Root` component to format the
number input value. The value of this maps to `Intl.NumberFormatOptions` and is
applied based on the current locale.

```tsx
import { NumberInput, Stack } from "@chakra-ui/react"

export const NumberInputWithFormatOptions = () => {
  return (
    
      <NumberInput.Root
        defaultValue="5"
        step={0.01}
        formatOptions={{
          style: "percent",
        }}
      >
        
        
      </NumberInput.Root>

      <NumberInput.Root
        defaultValue="45"
        formatOptions={{
          style: "currency",
          currency: "EUR",
          currencyDisplay: "code",
          currencySign: "accounting",
        }}
      >
        
        
      </NumberInput.Root>

      <NumberInput.Root
        defaultValue="4"
        formatOptions={{
          style: "unit",
          unit: "inch",
          unitDisplay: "long",
        }}
      >
        
        
      </NumberInput.Root>
    
  )
}

```

### Min and Max

Pass the `min` and `max` props to the `NumberInput.Root` component to set the
minimum and maximum values of the number input.

If value entered is less than `min` or greater than `max`, the value will be
clamped to the nearest boundary on blur, or enter key press.

```tsx
import { NumberInput } from "@chakra-ui/react"

export const NumberInputWithMinMax = () => {
  return (
    <NumberInput.Root width="200px" defaultValue="10" min={5} max={50}>
      
      
    </NumberInput.Root>
  )
}

```

### Step

Pass the `step` prop to the `NumberInput.Root` component to change the increment
or decrement interval of the number input.

```tsx
import { NumberInput } from "@chakra-ui/react"

export const NumberInputWithStep = () => {
  return (
    <NumberInput.Root maxW="200px" defaultValue="2" step={3}>
      
      
    </NumberInput.Root>
  )
}

```

### Controlled

Pass the `value` and `onValueChange` props to the `NumberInput.Root` component
to control the value of the number input.

```tsx
"use client"

import { NumberInput } from "@chakra-ui/react"
import { useState } from "react"

export const NumberInputControlled = () => {
  const [value, setValue] = useState("10")
  return (
    <NumberInput.Root
      maxW="200px"
      value={value}
      onValueChange={(e) => setValue(e.value)}
    >
      
      
    </NumberInput.Root>
  )
}

```

### Mobile Stepper

Here's an example of how to compose the number input as a mobile stepper.

```tsx
import { HStack, IconButton, NumberInput } from "@chakra-ui/react"
import { LuMinus, LuPlus } from "react-icons/lu"

export const NumberInputWithStepper = () => {
  return (
    <NumberInput.Root defaultValue="3" unstyled spinOnPress={false}>
      
        <NumberInput.DecrementTrigger asChild>
          
            
          
        </NumberInput.DecrementTrigger>
        
        <NumberInput.IncrementTrigger asChild>
          
            
          
        </NumberInput.IncrementTrigger>
      
    </NumberInput.Root>
  )
}

```

### Mouse Wheel

Pass the `allowMouseWheel` prop to the `NumberInput.Root` component to enable or
disable the mouse wheel to change

```tsx
import { NumberInput } from "@chakra-ui/react"

export const NumberInputWithMouseWheel = () => {
  return (
    <NumberInput.Root defaultValue="10" width="200px" allowMouseWheel>
      
      
    </NumberInput.Root>
  )
}

```

### Disabled

Pass the `disabled` prop to the `NumberInput.Root` component to disable the
number input.

```tsx
import { NumberInput } from "@chakra-ui/react"

export const NumberInputWithDisabled = () => {
  return (
    <NumberInput.Root defaultValue="10" width="200px" disabled>
      
      
    </NumberInput.Root>
  )
}

```

### Invalid

Use the `Field` component and the `invalid` prop to indicate that the number
input is invalid.

```tsx
import { Field, NumberInput } from "@chakra-ui/react"

export const NumberInputWithInvalid = () => {
  return (
    <Field.Root invalid>
      <Field.Label>Enter Number</Field.Label>
      <NumberInput.Root defaultValue="10" width="200px">
        
        
      </NumberInput.Root>
      <Field.ErrorText>The entry is invalid</Field.ErrorText>
    </Field.Root>
  )
}

```

### Helper Text

Compose the `Field` and `Field.HelperText` components to add helper text to the
number input.

```tsx
import { Field, NumberInput } from "@chakra-ui/react"

export const NumberInputWithField = () => {
  return (
    <Field.Root>
      <Field.Label>Enter Number</Field.Label>
      <NumberInput.Root width="200px">
        
        
      </NumberInput.Root>
      <Field.HelperText>Enter a number between 1 and 10</Field.HelperText>
    </Field.Root>
  )
}

```

### Element

Here's an example of how to compose the number input with the input group
component to add an element on either the left or right.

```tsx
import { InputGroup, NumberInput } from "@chakra-ui/react"
import { LuDollarSign } from "react-icons/lu"

export const NumberInputWithElement = () => {
  return (
    <NumberInput.Root defaultValue="10" width="200px">
      
      }>
        
      
    </NumberInput.Root>
  )
}

```

### Scrubber

Use the `NumberInput.Scrubber` component to make the number input supports
scrubber interactions.

```tsx
import { InputGroup, NumberInput } from "@chakra-ui/react"
import { LuArrowRightLeft } from "react-icons/lu"

export const NumberInputWithScrubber = () => {
  return (
    <NumberInput.Root defaultValue="10" width="200px">
      
      <InputGroup
        startElementProps={{ pointerEvents: "auto" }}
        startElement={
          <NumberInput.Scrubber>
            
          </NumberInput.Scrubber>
        }
      >
        
      
    </NumberInput.Root>
  )
}

```

### Hook Form

Here is an example of how to use the `NumberInput` component with
`react-hook-form`.

```tsx
"use client"

import { Button, Field, NumberInput } from "@chakra-ui/react"
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  number: z.string({ message: "Number is required" }),
})

type FormValues = z.infer

export const NumberInputWithHookForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: standardSchemaResolver(formSchema),
  })

  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    
      <Field.Root invalid={!!errors.number}>
        <Field.Label>Number</Field.Label>
        <Controller
          name="number"
          control={control}
          render={({ field }) => (
            <NumberInput.Root
              disabled={field.disabled}
              name={field.name}
              value={field.value}
              onValueChange={({ value }) => {
                field.onChange(value)
              }}
            >
              
              
            </NumberInput.Root>
          )}
        />
        <Field.ErrorText>{errors.number?.message}</Field.ErrorText>
      </Field.Root>
      
        Submit
      
    
  )
}

```

### Closed Component

Here's how to setup the Number Input for a closed component composition.

<ExampleCode name="number-input-closed-component" />

If you want to automatically add the closed component to your project, run the
command:

```bash
npx @chakra-ui/cli snippet add number-input
```

Here's how to use the it

```tsx

  

```

## Guides

### Why use string values?

When controlling the NumberInput component, use string values instead of
converting to numbers. This preserves locale-specific formatting, especially for
currencies with different decimal and thousands separators (e.g., `1.523,30` vs
`1,523.30`).

```tsx
const [value, setValue] = useState("0")

<NumberInput.Root
  value={value}
  onValueChange={(details) => setValue(details.value)}
>
  {/* ... */}
</NumberInput.Root>
```

If you need a numeric value for form submission, use `NumberInput.Context` to
access `valueAsNumber`:

```tsx
<NumberInput.Root
  value={value}
  onValueChange={(details) => setValue(details.value)}
>
  
  <NumberInput.Context>
    {(context) => (
      
    )}
  </NumberInput.Context>
</NumberInput.Root>
```

## Props

### Root

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| allowOverflow | true | `boolean` | Whether to allow the value overflow the min/max range |
| clampValueOnBlur | true | `boolean` | Whether to clamp the value when the input loses focus (blur) |
| focusInputOnChange | true | `boolean` | Whether to focus input when the value changes |
| inputMode | "decimal" | `InputMode` | Hints at the type of data that might be entered by the user. It also determines
the type of keyboard shown to the user on mobile devices |
| locale | "en-US" | `string` | The current locale. Based on the BCP 47 definition. |
| max | Number.MAX\_SAFE\_INTEGER | `number` | The maximum value of the number input |
| min | Number.MIN\_SAFE\_INTEGER | `number` | The minimum value of the number input |
| pattern | "-?\[0-9]\*(.\[0-9]+)?" | `string` | The pattern used to check the <input> element's value against |
| spinOnPress | true | `boolean` | Whether to spin the value when the increment/decrement button is pressed |
| step | 1 | `number` | The amount to increment or decrement the value by |
| colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
| size | md | `'xs' \| 'sm' \| 'md' \| 'lg'` | The size of the component |
| variant | outline | `'outline' \| 'subtle' \| 'flushed'` | The variant of the component |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| unstyled | undefined | `boolean` | Whether to remove the component's style. |
| allowMouseWheel | undefined | `boolean` | Whether to allow mouse wheel to change the value |
| defaultValue | undefined | `string` | The initial value of the input when rendered.
Use when you don't need to control the value of the input. |
| disabled | undefined | `boolean` | Whether the number input is disabled. |
| form | undefined | `string` | The associate form of the input element. |
| formatOptions | undefined | `NumberFormatOptions` | The options to pass to the `Intl.NumberFormat` constructor |
| id | undefined | `string` | The unique identifier of the machine. |
| ids | undefined | `Partial<{\n  root: string\n  label: string\n  input: string\n  incrementTrigger: string\n  decrementTrigger: string\n  scrubber: string\n}>` | The ids of the elements in the number input. Useful for composition. |
| invalid | undefined | `boolean` | Whether the number input value is invalid. |
| name | undefined | `string` | The name attribute of the number input. Useful for form submission. |
| onFocusChange | undefined | `(details: FocusChangeDetails) => void` | Function invoked when the number input is focused |
| onValueChange | undefined | `(details: ValueChangeDetails) => void` | Function invoked when the value changes |
| onValueInvalid | undefined | `(details: ValueInvalidDetails) => void` | Function invoked when the value overflows or underflows the min/max range |
| readOnly | undefined | `boolean` | Whether the number input is readonly |
| required | undefined | `boolean` | Whether the number input is required |
| translations | undefined | `IntlTranslations` | Specifies the localized strings that identifies the accessibility elements and their states |
| value | undefined | `string` | The controlled value of the input |

## Explorer

Explore the `NumberInput` component parts interactively. Click on parts in the
sidebar to highlight them in the preview.

<Explorer name="number-input-explorer-demo" />
