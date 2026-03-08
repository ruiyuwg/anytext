# Radio

```tsx
import { HStack, RadioGroup } from "@chakra-ui/react"

export const RadioBasic = () => {
  return (
    <RadioGroup.Root defaultValue="1">
      
        {items.map((item) => (
          <RadioGroup.Item key={item.value} value={item.value}>
            
            
            <RadioGroup.ItemText>{item.label}</RadioGroup.ItemText>
          </RadioGroup.Item>
        ))}
      
    </RadioGroup.Root>
  )
}

const items = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
  { label: "Option 3", value: "3" },
]

```

## Usage

```tsx
import { RadioGroup } from "@chakra-ui/react"
```

```tsx
<RadioGroup.Root>
  <RadioGroup.Item>
    
    
    
  </RadioGroup.Item>
</RadioGroup.Root>
```

:::info

If you prefer a closed component composition, check out the
[snippet below](#closed-component).

:::

## Examples

### Controlled

Pass the `value` and `onValueChange` props to the `RadioGroup.Root` component to
control the selected radio button.

```tsx
"use client"

import { HStack, RadioGroup } from "@chakra-ui/react"
import { useState } from "react"

export const RadioControlled = () => {
  const [value, setValue] = useState(null)
  return (
    <RadioGroup.Root value={value} onValueChange={(e) => setValue(e.value)}>
      
        {items.map((item) => (
          <RadioGroup.Item key={item.value} value={item.value}>
            
            
            <RadioGroup.ItemText>{item.label}</RadioGroup.ItemText>
          </RadioGroup.Item>
        ))}
      
    </RadioGroup.Root>
  )
}

const items = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
  { label: "Option 3", value: "3" },
]

```

### Colors

Pass the `colorPalette` prop to the `RadioGroup.Root` component to change the
color scheme of the component.

```tsx
import { HStack, RadioGroup, Stack, Text } from "@chakra-ui/react"

export const RadioWithColors = () => {
  return (
    
      {["gray","red","green","blue","teal","pink","purple","cyan","orange","yellow"].map((colorPalette) => (
        
          {colorPalette}

          <RadioGroup.Root
            colorPalette={colorPalette}
            defaultValue="react"
            spaceX="8"
          >
            {items.map((item) => (
              <RadioGroup.Item key={item.value} value={item.value}>
                
                
                <RadioGroup.ItemText>{item.label}</RadioGroup.ItemText>
              </RadioGroup.Item>
            ))}
          </RadioGroup.Root>
        
      ))}
    
  )
}

const items = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Solid", value: "solid" },
]

```

### Sizes

Pass the `size` prop to the `RadioGroup.Root` component to change the size of
the radio component.

```tsx
import { For, HStack, RadioGroup } from "@chakra-ui/react"

export const RadioWithSizes = () => {
  return (
    
      
        {(size) => (
          <RadioGroup.Root size={size} key={size}>
            <RadioGroup.Item value="react">
              
              
              <RadioGroup.ItemText>Radio ({size})</RadioGroup.ItemText>
            </RadioGroup.Item>
          </RadioGroup.Root>
        )}
      
    
  )
}

```

### Variants

Pass the `variant` prop to the `RadioGroup.Root` component to change the
appearance of the radio component.

```tsx
import { For, HStack, RadioGroup, Stack } from "@chakra-ui/react"

export const RadioWithVariants = () => {
  return (
    
      
        {(variant) => (
          <RadioGroup.Root
            key={variant}
            variant={variant}
            defaultValue="react"
            colorPalette="teal"
          >
            
              <RadioGroup.Item value="react" minW="120px">
                
                
                <RadioGroup.ItemText>React ({variant})</RadioGroup.ItemText>
              </RadioGroup.Item>

              <RadioGroup.Item value="vue">
                
                
                <RadioGroup.ItemText>Vue ({variant})</RadioGroup.ItemText>
              </RadioGroup.Item>
            
          </RadioGroup.Root>
        )}
      
    
  )
}

```

### Disabled

Pass the `disabled` prop to the `RadioGroup.Item` component to make the radio
disabled.

```tsx
import { HStack, RadioGroup } from "@chakra-ui/react"

export const RadioDisabled = () => {
  return (
    <RadioGroup.Root defaultValue="2">
      
        {items.map((item) => (
          <RadioGroup.Item
            key={item.value}
            value={item.value}
            disabled={item.disabled}
          >
            
            
            <RadioGroup.ItemText>{item.label}</RadioGroup.ItemText>
          </RadioGroup.Item>
        ))}
      
    </RadioGroup.Root>
  )
}

const items = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2", disabled: true },
  { label: "Option 3", value: "3" },
]

```

### Hook Form

Use the `Controller` component from `react-hook-form` to control the radio group
within a form

```tsx
"use client"

import { Button, Fieldset, HStack, RadioGroup } from "@chakra-ui/react"
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"

const items = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
]

const formSchema = z.object({
  value: z.string({ message: "Value is required" }),
})

type FormValues = z.infer

export const RadioWithHookForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: standardSchemaResolver(formSchema),
  })

  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    
      <Fieldset.Root invalid={!!errors.value}>
        <Fieldset.Legend>Select value</Fieldset.Legend>
        <Controller
          name="value"
          control={control}
          render={({ field }) => (
            <RadioGroup.Root
              name={field.name}
              value={field.value}
              onValueChange={({ value }) => {
                field.onChange(value)
              }}
            >
              
                {items.map((item) => (
                  <RadioGroup.Item key={item.value} value={item.value}>
                    
                    
                    <RadioGroup.ItemText>{item.label}</RadioGroup.ItemText>
                  </RadioGroup.Item>
                ))}
              
            </RadioGroup.Root>
          )}
        />

        {errors.value && (
          <Fieldset.ErrorText>{errors.value?.message}</Fieldset.ErrorText>
        )}

        
          Submit
        
      </Fieldset.Root>
    
  )
}

```

### Closed Component

Here's how to setup the Radio for a closed component composition.

<ExampleCode name="radio-closed-component" />

If you want to automatically add the closed component to your project, run the
command:

```bash
npx @chakra-ui/cli snippet add radio
```

Here's how to use it:

```tsx

  

```

## Props

### Root

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
| variant | solid | `'outline' \| 'subtle' \| 'solid'` | The variant of the component |
| size | md | `'xs' \| 'sm' \| 'md' \| 'lg'` | The size of the component |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| unstyled | undefined | `boolean` | Whether to remove the component's style. |
| defaultValue | undefined | `string` | The initial value of the checked radio when rendered.
Use when you don't need to control the value of the radio group. |
| disabled | undefined | `boolean` | If `true`, the radio group will be disabled |
| form | undefined | `string` | The associate form of the underlying input. |
| id | undefined | `string` | The unique identifier of the machine. |
| ids | undefined | `Partial<{\n  root: string\n  label: string\n  indicator: string\n  item: (value: string) => string\n  itemLabel: (value: string) => string\n  itemControl: (value: string) => string\n  itemHiddenInput: (value: string) => string\n}>` | The ids of the elements in the radio. Useful for composition. |
| name | undefined | `string` | The name of the input fields in the radio
(Useful for form submission). |
| onValueChange | undefined | `(details: ValueChangeDetails) => void` | Function called once a radio is checked |
| orientation | undefined | `'horizontal' \| 'vertical'` | Orientation of the radio group |
| readOnly | undefined | `boolean` | Whether the checkbox is read-only |
| value | undefined | `string` | The controlled value of the radio group |
