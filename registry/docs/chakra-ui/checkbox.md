# Checkbox

```tsx
import { Checkbox } from "@chakra-ui/react"

export const CheckboxBasic = () => {
  return (
    <Checkbox.Root>
      
      
      <Checkbox.Label>Accept terms and conditions</Checkbox.Label>
    </Checkbox.Root>
  )
}

```

## Usage

```tsx
import { Checkbox } from "@chakra-ui/react"
```

```tsx
<Checkbox.Root>
  
  <Checkbox.Control>
    
  </Checkbox.Control>
  
</Checkbox.Root>
```

:::info

If you prefer a closed component composition, check out the
[snippet below](#closed-component).

:::

## Shortcuts

The `Checkbox` component also provides a set of shortcuts for common use cases.

### CheckboxControl

This component renders the `Checkbox.Indicator` within it by default.

This works:

```tsx
<Checkbox.Control>
  
</Checkbox.Control>
```

This might be more concise, if you don't need to customize the indicator:

```tsx
```

## Examples

### Variants

Pass the `variant` prop to the `Checkbox.Root` component to change the visual
style of the checkbox.

```tsx
import { Checkbox, For, HStack, Stack, Text } from "@chakra-ui/react"

export const CheckboxWithVariants = () => {
  return (
    
      
        {(variant) => (
          
            {variant}
            <Checkbox.Root defaultChecked variant={variant}>
              
              
              <Checkbox.Label>Checkbox</Checkbox.Label>
            </Checkbox.Root>
          
        )}
      
    
  )
}

```

### Colors

Pass the `colorPalette` prop to the `Checkbox.Root` component to change the
color of the checkbox.

```tsx
import { Checkbox, For, Stack, Text } from "@chakra-ui/react"

export const CheckboxWithColors = () => {
  return (
    
      {["gray","red","green","blue","teal","pink","purple","cyan","orange","yellow"].map((colorPalette) => (
        <Stack
          align="center"
          key={colorPalette}
          direction="row"
          gap="10"
          width="full"
        >
          {colorPalette}
          
            {(variant) => (
              
                <Checkbox.Root variant={variant} colorPalette={colorPalette}>
                  
                  
                  <Checkbox.Label>Checkbox</Checkbox.Label>
                </Checkbox.Root>

                <Checkbox.Root
                  defaultChecked
                  variant={variant}
                  colorPalette={colorPalette}
                >
                  
                  
                  <Checkbox.Label>Checkbox</Checkbox.Label>
                </Checkbox.Root>
              
            )}
          
        
      ))}
    
  )
}

```

### Sizes

Pass the `size` prop to the `Checkbox.Root` component to change the size of the
checkbox.

```tsx
import { Checkbox, For, Stack } from "@chakra-ui/react"

export const CheckboxWithSizes = () => {
  return (
    
      
        {(size) => (
          <Checkbox.Root defaultChecked size={size} key={size}>
            
            
            <Checkbox.Label>Checkbox</Checkbox.Label>
          </Checkbox.Root>
        )}
      
    
  )
}

```

### States

Pass the `disabled` or `invalid` prop to the `Checkbox.Root` component to change
the visual state of the checkbox.

```tsx
import { Checkbox, Stack } from "@chakra-ui/react"

export const CheckboxWithStates = () => {
  return (
    
      <Checkbox.Root disabled>
        
        
        <Checkbox.Label>Disabled</Checkbox.Label>
      </Checkbox.Root>

      <Checkbox.Root defaultChecked disabled>
        
        
        <Checkbox.Label>Disabled</Checkbox.Label>
      </Checkbox.Root>

      <Checkbox.Root readOnly>
        
        
        <Checkbox.Label>Readonly</Checkbox.Label>
      </Checkbox.Root>

      <Checkbox.Root invalid>
        
        
        <Checkbox.Label>Invalid</Checkbox.Label>
      </Checkbox.Root>
    
  )
}

```

### Controlled

Use the `checked` and `onCheckedChange` props to control the state of the
checkbox.

```tsx
"use client"

import { Checkbox } from "@chakra-ui/react"
import { useState } from "react"

export const CheckboxControlled = () => {
  const [checked, setChecked] = useState(false)
  return (
    <Checkbox.Root
      checked={checked}
      onCheckedChange={(e) => setChecked(!!e.checked)}
    >
      
      
      <Checkbox.Label>Accept terms and conditions</Checkbox.Label>
    </Checkbox.Root>
  )
}

```

### Label Position

Here's an example of how to change the label position to the right.

```tsx
import { Checkbox } from "@chakra-ui/react"

export const CheckboxWithLabelPosition = () => {
  return (
    <Checkbox.Root>
      
      <Checkbox.Label>Accept terms and conditions</Checkbox.Label>
      
    </Checkbox.Root>
  )
}

```

### Store

An alternative way to control the checkbox is to use the `RootProvider`
component and the `useCheckbox` store hook.

This way you can access the checkbox state and methods from outside the
checkbox.

```tsx
"use client"

import { Checkbox, useCheckbox } from "@chakra-ui/react"

export const CheckboxWithStore = () => {
  const checkbox = useCheckbox()
  return (
    <Checkbox.RootProvider value={checkbox}>
      <Checkbox.Root>
        
        
        <Checkbox.Label>Accept terms and conditions</Checkbox.Label>
      </Checkbox.Root>
    </Checkbox.RootProvider>
  )
}

```

### Composition

Here's an example of how to compose a checkbox with a field component.

```tsx
"use client"

import { Button, Checkbox, Field, Input, Stack } from "@chakra-ui/react"

export const CheckboxWithForm = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        console.log(e.currentTarget.elements)
      }}
    >
      
        <Field.Root>
          <Field.Label>Username</Field.Label>
          
        </Field.Root>
        <Field.Root>
          <Field.Label>Password</Field.Label>
          
        </Field.Root>

        <Checkbox.Root mt="2" value="remember me">
          
          
          <Checkbox.Label>Remember me</Checkbox.Label>
        </Checkbox.Root>

        
          Submit
        
      
    
  )
}

```

### Hook Form

Here's an example of how to use the `Checkbox` component with the
`react-hook-form` library.

```tsx
"use client"

import { Button, Checkbox, Code, Field, HStack, Stack } from "@chakra-ui/react"
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema"
import { Controller, useController, useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  enabled: z.boolean(),
})

type FormData = z.infer

export const CheckboxWithHookForm = () => {
  const form = useForm({
    resolver: standardSchemaResolver(formSchema),
    defaultValues: { enabled: false },
  })

  const enabled = useController({
    control: form.control,
    name: "enabled",
  })

  const invalid = !!form.formState.errors.enabled

  return (
     console.log(data))}>
      
        <Controller
          control={form.control}
          name="enabled"
          render={({ field }) => (
            <Field.Root invalid={invalid} disabled={field.disabled}>
              <Checkbox.Root
                checked={field.value}
                onCheckedChange={({ checked }) => field.onChange(checked)}
              >
                
                
                <Checkbox.Label>Checkbox</Checkbox.Label>
              </Checkbox.Root>
              <Field.ErrorText>
                {form.formState.errors.enabled?.message}
              </Field.ErrorText>
            </Field.Root>
          )}
        />

        
          <Button
            size="xs"
            variant="outline"
            onClick={() => form.setValue("enabled", !enabled.field.value)}
          >
            Toggle
          
           form.reset()}>
            Reset
          
        

        
          Submit
        

        Checked: {JSON.stringify(enabled.field.value, null, 2)}
      
    
  )
}

```

### Group

Use the `CheckboxGroup` component to group multiple checkboxes together.

```tsx
import { Checkbox, CheckboxGroup, Fieldset, For } from "@chakra-ui/react"

export const CheckboxWithGroup = () => {
  return (
    <Fieldset.Root>
      
        <Fieldset.Legend fontSize="sm" mb="2">
          Select framework
        </Fieldset.Legend>
        <Fieldset.Content>
          
            {(value) => (
              <Checkbox.Root key={value} value={value}>
                
                
                <Checkbox.Label>{value}</Checkbox.Label>
              </Checkbox.Root>
            )}
          
        </Fieldset.Content>
      
    </Fieldset.Root>
  )
}

```

### Group Hook Form

Here's an example of how to use the `CheckboxGroup` component with the
`react-hook-form` library.

```tsx
"use client"

import {
  Button,
  Checkbox,
  CheckboxGroup,
  Code,
  Fieldset,
} from "@chakra-ui/react"
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema"
import { useController, useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  framework: z.array(z.string()).min(1, {
    message: "You must select at least one framework.",
  }),
})

type FormData = z.infer

const items = [
  { label: "React", value: "react" },
  { label: "Svelte", value: "svelte" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular" },
]

export const CheckboxWithGroupHookForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: standardSchemaResolver(formSchema),
  })

  const framework = useController({
    control,
    name: "framework",
    defaultValue: [],
  })

  const invalid = !!errors.framework

  return (
     console.log(data))}>
      <Fieldset.Root invalid={invalid}>
        <Fieldset.Legend>Select your framework</Fieldset.Legend>
        <CheckboxGroup
          invalid={invalid}
          value={framework.field.value}
          onValueChange={framework.field.onChange}
          name={framework.field.name}
        >
          <Fieldset.Content>
            {items.map((item) => (
              <Checkbox.Root key={item.value} value={item.value}>
                
                
                <Checkbox.Label>{item.label}</Checkbox.Label>
              </Checkbox.Root>
            ))}
          </Fieldset.Content>
        

        {errors.framework && (
          <Fieldset.ErrorText>{errors.framework.message}</Fieldset.ErrorText>
        )}

        
          Submit
        

        Values: {JSON.stringify(framework.field.value, null, 2)}
      </Fieldset.Root>
    
  )
}

```

### Custom Icon

Render a custom icon within `Checkbox.Control` to change the icon of the
checkbox.

```tsx
import { Checkbox } from "@chakra-ui/react"
import { HiOutlinePlus } from "react-icons/hi"

export const CheckboxWithCustomIcon = () => {
  return (
    <Checkbox.Root defaultChecked>
      
      <Checkbox.Control>
        
      </Checkbox.Control>
      <Checkbox.Label>With Custom Icon</Checkbox.Label>
    </Checkbox.Root>
  )
}

```

### Indeterminate

Set the `checked` prop to `indeterminate` to show the checkbox in an
indeterminate state.

```tsx
"use client"

import { Checkbox, Stack } from "@chakra-ui/react"
import { useState } from "react"

const initialValues = [
  { label: "Monday", checked: false, value: "monday" },
  { label: "Tuesday", checked: false, value: "tuesday" },
  { label: "Wednesday", checked: false, value: "wednesday" },
  { label: "Thursday", checked: false, value: "thursday" },
]

export const CheckboxIndeterminate = () => {
  const [values, setValues] = useState(initialValues)

  const allChecked = values.every((value) => value.checked)
  const indeterminate = values.some((value) => value.checked) && !allChecked

  const items = values.map((item, index) => (
    <Checkbox.Root
      ms="6"
      key={item.value}
      checked={item.checked}
      onCheckedChange={(e) => {
        setValues((current) => {
          const newValues = [...current]
          newValues[index] = { ...newValues[index], checked: !!e.checked }
          return newValues
        })
      }}
    >
      
      
      <Checkbox.Label>{item.label}</Checkbox.Label>
    </Checkbox.Root>
  ))

  return (
    
      <Checkbox.Root
        checked={indeterminate ? "indeterminate" : allChecked}
        onCheckedChange={(e) => {
          setValues((current) =>
            current.map((value) => ({ ...value, checked: !!e.checked })),
          )
        }}
      >
        
        <Checkbox.Control>
          
        </Checkbox.Control>
        <Checkbox.Label>Weekdays</Checkbox.Label>
      </Checkbox.Root>
      {items}
    
  )
}

```

### Description

Here's an example of how to add some further description to the checkbox.

```tsx
import { Box, Checkbox, Stack } from "@chakra-ui/react"

export const CheckboxWithDescription = () => {
  return (
    <Checkbox.Root gap="4" alignItems="flex-start">
      
      
      
        <Checkbox.Label>I agree to the terms and conditions</Checkbox.Label>
        
          By clicking this, you agree to our Terms and Privacy Policy.
        
      
    </Checkbox.Root>
  )
}

```

### Link

Render an anchor tag within the `Checkbox.Label` to add a link to the label.

```tsx
import { Checkbox, Link } from "@chakra-ui/react"

export const CheckboxWithLink = () => {
  return (
    <Checkbox.Root>
      
      
      <Checkbox.Label>
        I agree to the{" "}
        
          terms and conditions
        
      </Checkbox.Label>
    </Checkbox.Root>
  )
}

```

### Closed Component

Here's how to setup the Checkbox for a closed component composition.

<ExampleCode name="checkbox-closed-component" />

If you want to automatically add the closed component to your project, run the
command:

```bash
npx @chakra-ui/cli snippet add checkbox
```

Here's how to use the it

```tsx
Accept terms and conditions
```

## Guides

### CheckboxGroup + Field vs Fieldset

When working with multiple checkboxes, it's important to understand the semantic
difference between `Field` and `Fieldset`:

- **Single Checkbox**: Wrap with `Field.Root` for proper form field structure
  with labels and helper text
- **CheckboxGroup**: Wrap with `Fieldset.Root`, not `Field.Root`

A checkbox group represents a collection of related options and should be marked
up as a fieldset with a legend, not as a single field. Wrapping `CheckboxGroup`
in `Field.Root` can cause interaction issues where only the first checkbox
responds to clicks.

**✅ Correct Usage:**

```tsx
<Fieldset.Root>
  
    <Fieldset.Legend>Select framework</Fieldset.Legend>
    {/* ... checkboxes ... */}
  
</Fieldset.Root>
```

**❌ Incorrect Usage:**

```tsx
// Don't wrap CheckboxGroup with Field.Root
<Field.Root>
  {/* ... checkboxes ... */}
</Field.Root>
```

## Props

### Root

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| value | "on" | `string` | The value of checkbox input. Useful for form submission. |
| colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
| size | md | `'xs' \| 'sm' \| 'md' \| 'lg'` | The size of the component |
| variant | solid | `'outline' \| 'solid' \| 'subtle'` | The variant of the component |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| unstyled | undefined | `boolean` | Whether to remove the component's style. |
| checked | undefined | `CheckedState` | The controlled checked state of the checkbox |
| defaultChecked | undefined | `CheckedState` | The initial checked state of the checkbox when rendered.
Use when you don't need to control the checked state of the checkbox. |
| disabled | undefined | `boolean` | Whether the checkbox is disabled |
| form | undefined | `string` | The id of the form that the checkbox belongs to. |
| id | undefined | `string` | The unique identifier of the machine. |
| ids | undefined | `Partial<{ root: string; hiddenInput: string; control: string; label: string }>` | The ids of the elements in the checkbox. Useful for composition. |
| invalid | undefined | `boolean` | Whether the checkbox is invalid |
| name | undefined | `string` | The name of the input field in a checkbox.
Useful for form submission. |
| onCheckedChange | undefined | `(details: CheckedChangeDetails) => void` | The callback invoked when the checked state changes. |
| readOnly | undefined | `boolean` | Whether the checkbox is read-only |
| required | undefined | `boolean` | Whether the checkbox is required |

## Explorer

Explore the `Checkbox` component parts interactively. Click on parts in the
sidebar to highlight them in the preview.

<Explorer name="checkbox-explorer-demo" />
