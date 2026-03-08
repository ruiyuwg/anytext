### Hook Form

This example demonstrates how to integrate the Combobox with React Hook Form
using the `Controller` component. The form automatically receives the item's
`value` property without needing a hidden input.

Users see "React" but the form receives "react".

```tsx
"use client"

import {
  Button,
  Combobox,
  Field,
  Portal,
  Stack,
  useFilter,
  useListCollection,
} from "@chakra-ui/react"
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  framework: z.string({ message: "Framework is required" }).min(1),
})

type FormValues = z.infer

export const ComboboxWithHookForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: standardSchemaResolver(formSchema),
  })

  const onSubmit = handleSubmit((data) => {
    console.log("Form submitted with:", data)
    alert(`Selected framework: ${data.framework}`)
  })

  const { contains } = useFilter({ sensitivity: "base" })

  const { collection, filter } = useListCollection({
    initialItems: frameworks,
    filter: contains,
  })

  const handleInputChange = (details: Combobox.InputValueChangeDetails) => {
    filter(details.inputValue)
  }

  return (
    
      
        <Field.Root invalid={!!errors.framework} width="320px">
          <Field.Label>Framework</Field.Label>
          <Controller
            control={control}
            name="framework"
            render={({ field }) => (
              <Combobox.Root
                collection={collection}
                value={field.value ? [field.value] : []}
                onValueChange={({ value }) => field.onChange(value[0] || "")}
                onInputValueChange={handleInputChange}
                onInteractOutside={() => field.onBlur()}
              >
                <Combobox.Control>
                  
                  <Combobox.IndicatorGroup>
                    
                    
                  </Combobox.IndicatorGroup>
                </Combobox.Control>

                
                  <Combobox.Positioner>
                    <Combobox.Content>
                      <Combobox.Empty>No frameworks found</Combobox.Empty>
                      {collection.items.map((item) => (
                        <Combobox.Item key={item.value} item={item}>
                          {item.label}
                          
                        </Combobox.Item>
                      ))}
                    </Combobox.Content>
                  </Combobox.Positioner>
                
              </Combobox.Root>
            )}
          />
          <Field.ErrorText>{errors.framework?.message}</Field.ErrorText>
        </Field.Root>

        
          Submit
        
      
    
  )
}

const frameworks = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular" },
  { label: "Svelte", value: "svelte" },
  { label: "Solid", value: "solid" },
  { label: "Qwik", value: "qwik" },
  { label: "Lit", value: "lit" },
  { label: "Alpine", value: "alpine" },
]

```

### Disabled State

Pass the `disabled` prop to the `Combobox.Root` to disable the entire combobox.

```tsx
"use client"

import {
  Combobox,
  Portal,
  useFilter,
  useListCollection,
} from "@chakra-ui/react"

export const ComboboxWithDisabled = () => {
  const { contains } = useFilter({ sensitivity: "base" })

  const { collection, filter } = useListCollection({
    initialItems: frameworks,
    filter: contains,
  })

  return (
    <Combobox.Root
      collection={collection}
      onInputValueChange={(e) => filter(e.inputValue)}
      disabled
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
