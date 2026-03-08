# Pin Input

```tsx
import { PinInput } from "@chakra-ui/react"

export const PinInputBasic = () => {
  return (
    <PinInput.Root>
      
      <PinInput.Control>
        
        
        
        
      </PinInput.Control>
    </PinInput.Root>
  )
}

```

## Usage

```tsx
import { PinInput } from "@chakra-ui/react"
```

```tsx
<PinInput.Root>
  
  <PinInput.Control>
    
  </PinInput.Control>
</PinInput.Root>
```

:::info

If you prefer a closed component composition, check out the
[snippet below](#closed-component).

:::

## Examples

### Sizes

Pass the `size` prop to the `PinInput.Root` component to change the size of the
pin input component

```tsx
import { For, PinInput, Stack } from "@chakra-ui/react"

export const PinInputWithSizes = () => {
  return (
    
      
        {(size) => (
          <PinInput.Root key={size} size={size}>
            
            <PinInput.Control>
              
              
              
              
            </PinInput.Control>
          </PinInput.Root>
        )}
      
    
  )
}

```

### One time code

Pass the `otp` prop to the `PinInput.Root` component to make the pin input
component behave like a one-time code input. This helps improve the user
experience when entering OTP codes

```tsx
import { PinInput } from "@chakra-ui/react"

export const PinInputWithOtp = () => {
  return (
    <PinInput.Root otp>
      
      <PinInput.Control>
        
        
        
        
      </PinInput.Control>
    </PinInput.Root>
  )
}

```

### Mask

Pass the `mask` prop to the `PinInput.Root` component to obscure the entered pin
code

```tsx
import { PinInput } from "@chakra-ui/react"

export const PinInputWithMask = () => {
  return (
    <PinInput.Root mask>
      
      <PinInput.Control>
        
        
        
        
      </PinInput.Control>
    </PinInput.Root>
  )
}

```

### Placeholder

Pass the `placeholder` prop to the `PinInPut.Root` component to add a
placeholder to the pin input

```tsx
import { PinInput } from "@chakra-ui/react"

export const PinInputWithPlaceholder = () => {
  return (
    <PinInput.Root placeholder="🥳">
      
      <PinInput.Control>
        
        
        
        
      </PinInput.Control>
    </PinInput.Root>
  )
}

```

### Field

Here's an example of how to compose the `Field` and the `PinInput` components

```tsx
import { Field, PinInput } from "@chakra-ui/react"

export const PinInputWithField = () => {
  return (
    <Field.Root>
      <Field.Label>Enter otp</Field.Label>
      <PinInput.Root>
        
        <PinInput.Control>
          
          
          
          
        </PinInput.Control>
      </PinInput.Root>
    </Field.Root>
  )
}

```

### Hook Form

Here's an example of how to compose the `Field` and the `PinInput` components
with `react-hook-form`

```tsx
"use client"

import { Button, Field, PinInput, Stack } from "@chakra-ui/react"
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  pin: z
    .array(z.string().min(1))
    .min(1, { message: "Pin is required" })
    .length(4, { message: "Pin must be 4 digits long" }),
})

type FormValues = z.infer

export const PinInputWithHookForm = () => {
  const { handleSubmit, control, formState } = useForm({
    resolver: standardSchemaResolver(formSchema),
  })

  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    
      
        <Field.Root invalid={!!formState.errors.pin}>
          <Controller
            control={control}
            name="pin"
            render={({ field }) => (
              <PinInput.Root
                value={field.value}
                onValueChange={(e) => field.onChange(e.value)}
              >
                
                <PinInput.Control>
                  
                  
                  
                  
                </PinInput.Control>
              </PinInput.Root>
            )}
          />
          <Field.ErrorText>{formState.errors.pin?.message}</Field.ErrorText>
        </Field.Root>
        Submit
      
    
  )
}

```

### Controlled

Pass the `value` and `onValueChange` props to the `PinInPut.Root` component to
control the value of the pin input

```tsx
"use client"

import { PinInput } from "@chakra-ui/react"
import { useState } from "react"

export const PinInputControlled = () => {
  const [value, setValue] = useState(["", "", "", ""])
  return (
    <PinInput.Root value={value} onValueChange={(e) => setValue(e.value)}>
      
      <PinInput.Control>
        
        
        
        
      </PinInput.Control>
    </PinInput.Root>
  )
}

```

### Store

An alternative way to control the pin input is to use the `RootProvider`
component and the `usePinInput` store hook.

This way you can access the pin input state and methods from outside the
component.

```tsx
"use client"

import {
  Button,
  ButtonGroup,
  PinInput,
  Stack,
  usePinInput,
} from "@chakra-ui/react"

export const PinInputWithStore = () => {
  const store = usePinInput()
  return (
    
      <PinInput.RootProvider value={store}>
        <PinInput.Control>
          
          
          
          
        </PinInput.Control>
      </PinInput.RootProvider>

      
         store.setValue(["1", "2", "3", "4"])}>
          Set value
        
         store.clearValue()}>Clear value
      
    
  )
}

```

### Attached

Pass the `attached` prop to the `PinInput.Root` component to attach the pin
input to the input field

```tsx
import { PinInput } from "@chakra-ui/react"

export const PinInputAttached = () => {
  return (
    <PinInput.Root attached>
      
      <PinInput.Control>
        
        
        
        
      </PinInput.Control>
    </PinInput.Root>
  )
}

```

### Alphanumeric

Pass the `type` prop to the `PinInput.Root` component to allow the user to enter
alphanumeric characters. Values can be either `alphanumeric`, `numeric`, or
`alphabetic`

```tsx
import { PinInput } from "@chakra-ui/react"

export const PinInputAlphanumeric = () => {
  return (
    <PinInput.Root type="alphanumeric">
      
      <PinInput.Control>
        
        
        
        
      </PinInput.Control>
    </PinInput.Root>
  )
}

```

### Closed Component

Here's how to setup the Pin input for a closed component composition.

<ExampleCode name="pin-input-closed-component" />

#### Usage

```tsx
```

## Props

### Root

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| placeholder | "○" | `string` | The placeholder text for the input |
| type | "numeric" | `'numeric' \| 'alphanumeric' \| 'alphabetic'` | The type of value the pin-input should allow |
| colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
| size | md | `'2xs' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'` | The size of the component |
| variant | outline | `'outline' \| 'subtle' \| 'flushed'` | The variant of the component |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| unstyled | undefined | `boolean` | Whether to remove the component's style. |
| autoFocus | undefined | `boolean` | Whether to auto-focus the first input. |
| blurOnComplete | undefined | `boolean` | Whether to blur the input when the value is complete |
| count | undefined | `number` | The number of inputs to render to improve SSR aria attributes.
This will be required in next major version. |
| defaultValue | undefined | `string[]` | The initial value of the the pin input when rendered.
Use when you don't need to control the value of the pin input. |
| disabled | undefined | `boolean` | Whether the inputs are disabled |
| form | undefined | `string` | The associate form of the underlying input element. |
| id | undefined | `string` | The unique identifier of the machine. |
| ids | undefined | `Partial<{\n  root: string\n  hiddenInput: string\n  label: string\n  control: string\n  input: (id: string) => string\n}>` | The ids of the elements in the pin input. Useful for composition. |
| invalid | undefined | `boolean` | Whether the pin input is in the invalid state |
| mask | undefined | `boolean` | If `true`, the input's value will be masked just like `type=password` |
| name | undefined | `string` | The name of the input element. Useful for form submission. |
| onValueChange | undefined | `(details: ValueChangeDetails) => void` | Function called on input change |
| onValueComplete | undefined | `(details: ValueChangeDetails) => void` | Function called when all inputs have valid values |
| onValueInvalid | undefined | `(details: ValueInvalidDetails) => void` | Function called when an invalid value is entered |
| otp | undefined | `boolean` | If `true`, the pin input component signals to its fields that they should
use `autocomplete="one-time-code"`. |
| pattern | undefined | `string` | The regular expression that the user-entered input value is checked against. |
| readOnly | undefined | `boolean` | Whether the pin input is in the valid state |
| required | undefined | `boolean` | Whether the pin input is required |
| selectOnFocus | undefined | `boolean` | Whether to select input value when input is focused |
| translations | undefined | `IntlTranslations` | Specifies the localized strings that identifies the accessibility elements and their states |
| value | undefined | `string[]` | The controlled value of the the pin input. |
| attached | undefined | `'true' \| 'false'` | The attached of the component |

## Explorer

Explore the `Pin Input` component parts interactively. Click on parts in the
sidebar to highlight them in the preview.

<Explorer name="pin-input-explorer-demo" />
