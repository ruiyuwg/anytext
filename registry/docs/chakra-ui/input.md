# Input

```tsx
import { Input } from "@chakra-ui/react"

export const InputBasic = () => {
  return 
}

```

## Usage

```tsx
import { Input } from "@chakra-ui/react"
```

```tsx
```

## Examples

### Variants

Use the `variant` prop to change the visual style of the input.

```tsx
import { Input, Stack } from "@chakra-ui/react"

export const InputWithVariants = () => {
  return (
    
      
      
      
    
  )
}

```

### Sizes

Use the `size` prop to change the size of the input.

```tsx
import { Input, Stack } from "@chakra-ui/react"

export const InputWithSizes = () => {
  return (
    
      
      
      
      
    
  )
}

```

### Helper Text

Pair the input with the `Field` component to add helper text.

```tsx
import { Field, Input } from "@chakra-ui/react"

export const InputWithHelperText = () => {
  return (
    <Field.Root required>
      <Field.Label>
        Email 
      </Field.Label>
      
      <Field.HelperText>We'll never share your email.</Field.HelperText>
    </Field.Root>
  )
}

```

### Error Text

Pair the input with the `Field` component to add error text.

```tsx
import { Field, Input } from "@chakra-ui/react"

export const InputWithErrorText = () => {
  return (
    <Field.Root invalid>
      <Field.Label>Email</Field.Label>
      
      <Field.ErrorText>This field is required</Field.ErrorText>
    </Field.Root>
  )
}

```

### Field

Compose the input with the `Field` component to add a label, helper text, and
error text.

```tsx
import { Field, HStack, Input } from "@chakra-ui/react"

export const InputWithField = () => {
  return (
    
      <Field.Root required>
        <Field.Label>
          Email 
        </Field.Label>
        
      </Field.Root>
      <Field.Root required>
        <Field.Label>
          Email 
        </Field.Label>
        
      </Field.Root>
    
  )
}

```

### Hook Form

Here's an example of how to integrate the input with `react-hook-form`.

```tsx
"use client"

import { Button, Field, Input, Stack } from "@chakra-ui/react"
import { useForm } from "react-hook-form"

interface FormValues {
  firstName: string
  lastName: string
}

export const InputWithHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    
      
        <Field.Root invalid={!!errors.firstName}>
          <Field.Label>First name</Field.Label>
          
          <Field.ErrorText>{errors.firstName?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.lastName}>
          <Field.Label>Last name</Field.Label>
          
          <Field.ErrorText>{errors.lastName?.message}</Field.ErrorText>
        </Field.Root>

        Submit
      
    
  )
}

```

### Element

Use the `startElement` and `endElement` on the `InputGroup` component to add an
element to the start and end of the input.

#### Start Icon

```tsx
import { Input, InputGroup } from "@chakra-ui/react"
import { LuUser } from "react-icons/lu"

export const InputWithStartIcon = () => {
  return (
    }>
      
    
  )
}

```

#### Start Text

```tsx
import { Input, InputGroup } from "@chakra-ui/react"

export const InputWithStartText = () => {
  return (
    <InputGroup
      startElement="https://"
      startElementProps={{ color: "fg.muted" }}
    >
      
    
  )
}

```

#### Start and End Text

```tsx
import { Input, InputGroup } from "@chakra-ui/react"

export const InputWithStartAndEndText = () => {
  return (
    
      
    
  )
}

```

#### Kbd

```tsx
import { Input, InputGroup, Kbd } from "@chakra-ui/react"
import { LuSearch } from "react-icons/lu"

export const InputWithKbd = () => (
  } endElement={⌘K}>
    
  
)

```

#### Select

```tsx
import { Input, InputGroup, NativeSelect } from "@chakra-ui/react"

const DomainSelect = () => (
  <NativeSelect.Root size="xs" variant="plain" width="auto" me="-1">
    <NativeSelect.Field defaultValue=".com" fontSize="sm">
      .com
      .org
      .net
    </NativeSelect.Field>
    
  </NativeSelect.Root>
)

export const InputWithSelect = () => {
  return (
    }>
      
    
  )
}

```

### Addon

Use the `InputAddon` and `Group` components to add an addon to the input.

#### Start Addon

```tsx
import { Input, InputGroup } from "@chakra-ui/react"

export const InputWithStartAddon = () => {
  return (
    
      
    
  )
}

```

#### End Addon

```tsx
import { Input, InputGroup } from "@chakra-ui/react"

export const InputWithEndAddon = () => {
  return (
    
      
    
  )
}

```

#### Start and End Addon

```tsx
import { Input, InputGroup } from "@chakra-ui/react"

export const InputWithStartAndEndAddon = () => {
  return (
    
      
    
  )
}

```

### Disabled

Use the `disabled` prop to disable the input.

```tsx
import { Input } from "@chakra-ui/react"

export const InputWithDisabled = () => {
  return 
}

```

### Button

Use the `Group` component to attach a button to the input.

```tsx
import { Button, Group, Input } from "@chakra-ui/react"

export const InputWithEndButton = () => {
  return (
    
      
      
        Submit
      
    
  )
}

```

### Focus and Error Color

Use the `--focus-color` and `--error-color` CSS custom properties to change the
color of the input when it is focused or in an error state.

```tsx
import { Field, Input, Stack } from "@chakra-ui/react"

export const InputWithFocusErrorColor = () => {
  return (
    
      <Field.Root>
        <Field.Label>focusColor=lime</Field.Label>
        
      </Field.Root>
      <Field.Root invalid>
        <Field.Label>errorColor=green</Field.Label>
        
      </Field.Root>
      <Field.Root invalid>
        <Field.Label>errorColor=blue</Field.Label>
        
      </Field.Root>

      <Field.Root invalid>
        <Field.Label>variant=outline,focusColor=error</Field.Label>
        
      </Field.Root>
      <Field.Root invalid>
        <Field.Label>variant=subtle,focusColor=error</Field.Label>
        
      </Field.Root>
      <Field.Root invalid>
        <Field.Label>variant=flushed,focusColor=error</Field.Label>
        
      </Field.Root>
    
  )
}

```

### Placeholder Style

Use the `_placeholder` prop to style the placeholder text.

```tsx
import { Input } from "@chakra-ui/react"

export const InputWithPlaceholderStyle = () => {
  return (
    <Input
      color="teal"
      placeholder="custom placeholder"
      _placeholder={{ color: "inherit" }}
    />
  )
}

```

### Floating Label

Here's an example of how to build a floating label to the input.

```tsx
"use client"

import type { InputProps } from "@chakra-ui/react"
import {
  Box,
  Field,
  Input,
  defineStyle,
  useControllableState,
} from "@chakra-ui/react"
import { useState } from "react"

export const InputWithFloatingLabel = () => {
  return (
    <Field.Root>
      
      <Field.ErrorText>This field is required</Field.ErrorText>
    </Field.Root>
  )
}

interface FloatingLabelInputProps extends InputProps {
  label: React.ReactNode
  value?: string | undefined
  defaultValue?: string | undefined
  onValueChange?: ((value: string) => void) | undefined
}

const FloatingLabelInput = (props: FloatingLabelInputProps) => {
  const { label, onValueChange, value, defaultValue = "", ...rest } = props

  const [inputState, setInputState] = useControllableState({
    defaultValue,
    onChange: onValueChange,
    value,
  })

  const [focused, setFocused] = useState(false)
  const shouldFloat = inputState.length > 0 || focused

  return (
    
      <Input
        {...rest}
        onFocus={(e) => {
          props.onFocus?.(e)
          setFocused(true)
        }}
        onBlur={(e) => {
          props.onBlur?.(e)
          setFocused(false)
        }}
        onChange={(e) => {
          props.onChange?.(e)
          setInputState(e.target.value)
        }}
        value={inputState}
        data-float={shouldFloat || undefined}
      />
      <Field.Label css={floatingStyles} data-float={shouldFloat || undefined}>
        {label}
      </Field.Label>
    
  )
}

const floatingStyles = defineStyle({
  pos: "absolute",
  bg: "bg",
  px: "0.5",
  top: "2.5",
  insetStart: "3",
  fontWeight: "normal",
  pointerEvents: "none",
  transition: "position",
  color: "fg.muted",
  "&[data-float]": {
    top: "-3",
    insetStart: "2",
    color: "fg",
  },
})

```

### Mask

Here's an example of using the `use-mask-input` library to mask the input shape.

```tsx
"use client"

import { Input } from "@chakra-ui/react"
import { withMask } from "use-mask-input"

export const InputWithMask = () => {
  return (
    
  )
}

```

### Character Counter

Here's an example of how to add a character counter to the input.

```tsx
"use client"

import { Input, InputGroup, Span } from "@chakra-ui/react"
import { useState } from "react"

const MAX_CHARACTERS = 20

export const InputWithCharacterCounter = () => {
  const [value, setValue] = useState("")
  return (
    <InputGroup
      endElement={
        
          {value.length} / {MAX_CHARACTERS}
        
      }
    >
      <Input
        placeholder="Enter your message"
        value={value}
        maxLength={MAX_CHARACTERS}
        onChange={(e) => {
          setValue(e.currentTarget.value.slice(0, MAX_CHARACTERS))
        }}
      />
    
  )
}

```

### Card Number

Here's an example of using `react-payment-inputs` to create a card number input.

```tsx
"use client"

import { Input, InputGroup } from "@chakra-ui/react"
import { LuCreditCard } from "react-icons/lu"
import { usePaymentInputs } from "react-payment-inputs"

export const InputWithCardNumber = () => {
  const { wrapperProps, getCardNumberProps } = usePaymentInputs()
  return (
    }>
      
    
  )
}

```

You can create a full card inputs for a card number, expiry date, and CVC.

```tsx
"use client"

import { Box, Group, Input, InputGroup, Show } from "@chakra-ui/react"
import { LuCreditCard } from "react-icons/lu"
import { usePaymentInputs } from "react-payment-inputs"
import cardImages, { type CardImages } from "react-payment-inputs/images"

const images = cardImages as unknown as CardImages

const CardImage = (props: ReturnType) => {
  const { meta, getCardImageProps } = props
  return (
    <Show
      when={meta.cardType}
      fallback={}
    >
      
    
  )
}

export const InputWithCardDetails = () => {
  const payment = usePaymentInputs()
  return (
    
      <InputGroup
        zIndex={{ _focusWithin: "1" }}
        endElement={}
      >
        
      
      
        
        
      
    
  )
}

```

### Clear Button

Combine the `Input` and `CloseButton` components to create a clear button. This
is useful for building search inputs.

```tsx
"use client"

import { CloseButton, Input, InputGroup } from "@chakra-ui/react"
import { useRef, useState } from "react"

export const InputWithClearButton = () => {
  const [value, setValue] = useState("Initial value")
  const inputRef = useRef(null)

  const endElement = value ? (
    <CloseButton
      size="xs"
      onClick={() => {
        setValue("")
        inputRef.current?.focus()
      }}
      me="-2"
    />
  ) : undefined

  return (
    
      <Input
        ref={inputRef}
        placeholder="Email"
        value={value}
        onChange={(e) => {
          setValue(e.currentTarget.value)
        }}
      />
    
  )
}

```

## Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
| size | md | `'2xs' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'` | The size of the component |
| variant | outline | `'outline' \| 'subtle' \| 'flushed'` | The variant of the component |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
