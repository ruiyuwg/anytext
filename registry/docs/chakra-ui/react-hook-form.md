### React Hook Form

Here's an example of integrating with `react-hook-form` using the Controller
pattern.

```tsx
"use client"

import {
  Button,
  DatePicker,
  Field,
  Input,
  Portal,
  Stack,
  parseDate,
} from "@chakra-ui/react"
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema"
import { Controller, useForm } from "react-hook-form"
import { LuCalendar } from "react-icons/lu"
import { z } from "zod"

const formSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  dob: z.string().min(1, { message: "Date of birth is required" }),
})

type FormValues = z.infer

export const DatePickerWithHookForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: standardSchemaResolver(formSchema),
  })

  const onSubmit = handleSubmit((data) => alert(JSON.stringify(data)))

  return (
    
      
        <Field.Root invalid={!!errors.firstName}>
          <Field.Label>First name</Field.Label>
          
          <Field.ErrorText>{errors.firstName?.message}</Field.ErrorText>
        </Field.Root>

        <Controller
          control={control}
          name="dob"
          render={({ field }) => (
            <Field.Root invalid={!!errors.dob}>
              <DatePicker.Root
                value={field.value ? [parseDate(field.value)] : []}
                onValueChange={(e) =>
                  field.onChange(e.value[0]?.toString() ?? "")
                }
                invalid={!!errors.dob}
              >
                <DatePicker.Label>Date of birth</DatePicker.Label>
                <DatePicker.Control>
                  
                  <DatePicker.IndicatorGroup>
                    <DatePicker.Trigger>
                      
                    </DatePicker.Trigger>
                  </DatePicker.IndicatorGroup>
                </DatePicker.Control>
                
                  <DatePicker.Positioner>
                    <DatePicker.Content>
                      <DatePicker.View view="day">
                        
                        
                      </DatePicker.View>
                      <DatePicker.View view="month">
                        
                        
                      </DatePicker.View>
                      <DatePicker.View view="year">
                        
                        
                      </DatePicker.View>
                    </DatePicker.Content>
                  </DatePicker.Positioner>
                
              </DatePicker.Root>
              <Field.ErrorText>{errors.dob?.message}</Field.ErrorText>
            </Field.Root>
          )}
        />

        
          Submit
        
      
    
  )
}

```

### Fixed Weeks

Use the `fixedWeeks` prop to always display 6 weeks in the calendar, ensuring a
consistent height regardless of the month.

```tsx
"use client"

import { DatePicker, Portal } from "@chakra-ui/react"
import { LuCalendar } from "react-icons/lu"

export const DatePickerFixedWeeks = () => {
  return (
    <DatePicker.Root fixedWeeks maxWidth="20rem">
      <DatePicker.Label>Date</DatePicker.Label>
      <DatePicker.Control>
        
        <DatePicker.IndicatorGroup>
          <DatePicker.Trigger>
            
          </DatePicker.Trigger>
        </DatePicker.IndicatorGroup>
      </DatePicker.Control>
      
        <DatePicker.Positioner>
          <DatePicker.Content>
            <DatePicker.View view="day">
              
              
            </DatePicker.View>
            <DatePicker.View view="month">
              
              
            </DatePicker.View>
            <DatePicker.View view="year">
              
              
            </DatePicker.View>
          </DatePicker.Content>
        </DatePicker.Positioner>
      
    </DatePicker.Root>
  )
}

```

### Open on Click

Use the `openOnClick` prop to open the calendar when clicking the input field,
removing the need for a separate trigger button.

```tsx
"use client"

import { DatePicker, Portal } from "@chakra-ui/react"

export const DatePickerOpenOnClick = () => {
  return (
    <DatePicker.Root openOnClick maxWidth="20rem">
      <DatePicker.Label>Date</DatePicker.Label>
      <DatePicker.Control>
        
      </DatePicker.Control>
      
        <DatePicker.Positioner>
          <DatePicker.Content>
            <DatePicker.View view="day">
              
              
            </DatePicker.View>
            <DatePicker.View view="month">
              
              
            </DatePicker.View>
            <DatePicker.View view="year">
              
              
            </DatePicker.View>
          </DatePicker.Content>
        </DatePicker.Positioner>
      
    </DatePicker.Root>
  )
}

```

### Field

The `DatePicker` does not natively integrate with the `Field` component yet. Use
`Field.Context` to wire up the field state manually. Native support will be
added in a future version.

```tsx
"use client"

import { Button, DatePicker, Field, Portal, Stack } from "@chakra-ui/react"
import { useState } from "react"
import { LuCalendar } from "react-icons/lu"

export const DatePickerWithField = () => {
  const [invalid, setInvalid] = useState(false)
  const toggleInvalid = () => setInvalid((prev) => !prev)

  return (
    
      
        Toggle Invalid
      
      <Field.Root invalid={invalid}>
        <Field.Label>Date of birth</Field.Label>
        <Field.Context>
          {(ctx) => (
            <DatePicker.Root
              invalid={ctx.invalid}
              ids={{ label: () => ctx.ids.label, input: () => ctx.ids.control }}
            >
              <DatePicker.Control>
                
                <DatePicker.IndicatorGroup>
                  <DatePicker.Trigger>
                    
                  </DatePicker.Trigger>
                </DatePicker.IndicatorGroup>
              </DatePicker.Control>
              
                <DatePicker.Positioner>
                  <DatePicker.Content>
                    <DatePicker.View view="day">
                      
                      
                    </DatePicker.View>
                    <DatePicker.View view="month">
                      
                      
                    </DatePicker.View>
                    <DatePicker.View view="year">
                      
                      
                    </DatePicker.View>
                  </DatePicker.Content>
                </DatePicker.Positioner>
              
            </DatePicker.Root>
          )}
        </Field.Context>
        <Field.ErrorText>Date of birth is required</Field.ErrorText>
      </Field.Root>
    
  )
}

```
