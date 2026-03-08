### With Time

Here's an example of combining date selection with a time input for datetime
picking.

```tsx
"use client"

import { Button, DatePicker, Input, Portal } from "@chakra-ui/react"
import {
  CalendarDateTime,
  DateFormatter,
  type DateValue,
  getLocalTimeZone,
} from "@internationalized/date"
import { useState } from "react"
import { LuCalendar } from "react-icons/lu"

const formatter = new DateFormatter("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  hour: "numeric",
  minute: "2-digit",
})

export const DatePickerWithTime = () => {
  const [value, setValue] = useState<CalendarDateTime[]>([
    new CalendarDateTime(2025, 1, 29, 14, 30),
  ])

  const timeValue = value[0]
    ? `${String(value[0].hour).padStart(2, "0")}:${String(value[0].minute).padStart(2, "0")}`
    : ""

  const onTimeChange = (e: React.ChangeEvent) => {
    const [hours, minutes] = e.currentTarget.value.split(":").map(Number)
    setValue((prev) => {
      const current = prev[0] ?? new CalendarDateTime(2025, 1, 1, 0, 0)
      return [current.set({ hour: hours, minute: minutes })]
    })
  }

  const onDateChange = (details: { value: DateValue[] }) => {
    const newDate = details.value[0]
    if (!newDate) return setValue([])
    const prevTime = value[0] ?? { hour: 0, minute: 0 }
    setValue([
      new CalendarDateTime(
        newDate.year,
        newDate.month,
        newDate.day,
        prevTime.hour,
        prevTime.minute,
      ),
    ])
  }

  return (
    <DatePicker.Root
      value={value}
      onValueChange={onDateChange}
      closeOnSelect={false}
      maxWidth="20rem"
    >
      <DatePicker.Label>Date and time</DatePicker.Label>
      <DatePicker.Control>
        <DatePicker.Trigger asChild unstyled>
          
            {value[0]
              ? formatter.format(value[0].toDate(getLocalTimeZone()))
              : "Select date and time"}
            
          
        </DatePicker.Trigger>
      </DatePicker.Control>
      
        <DatePicker.Positioner>
          <DatePicker.Content>
            <DatePicker.View view="day">
              
              
              
            </DatePicker.View>
          </DatePicker.Content>
        </DatePicker.Positioner>
      
    </DatePicker.Root>
  )
}

```

### Form

Here's an example of integrating with native form validation.

```tsx
"use client"

import { Button, DatePicker, Portal, Stack } from "@chakra-ui/react"
import { LuCalendar } from "react-icons/lu"

export const DatePickerForm = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        alert(JSON.stringify({ date: form.get("date") }))
      }}
    >
      
        <DatePicker.Root name="date">
          <DatePicker.Label>Appointment date</DatePicker.Label>
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

        
          Submit
        
      
    
  )
}

```
