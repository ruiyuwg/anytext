### Formatting & Parsing

Use the `format` and `parse` props to control how dates are displayed and
interpreted.

```tsx
"use client"
import { DatePicker, Portal } from "@chakra-ui/react"
import type { DateValue } from "@chakra-ui/react"
import { CalendarDate } from "@internationalized/date"
import { LuCalendar } from "react-icons/lu"

export const DatePickerFormatParse = () => {
  return (
    <DatePicker.Root
      format={format}
      parse={parse}
      placeholder="dd/mm/yy"
      maxWidth="20rem"
    >
      <DatePicker.Label>Label</DatePicker.Label>
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

const parse = (value: string) => {
  const fullRegex = /^(\d{1,2})\/(\d{1,2})\/(\d{2})$/
  const fullMatch = value.match(fullRegex)
  if (fullMatch) {
    const [_, day, month, year] = fullMatch.map(Number)
    try {
      return new CalendarDate(year + 2000, month, day)
    } catch {
      return undefined
    }
  }

  const partialRegex = /^(\d{1,2})\/(\d{1,2})$/
  const partialMatch = value.match(partialRegex)
  if (partialMatch) {
    const [_, day, month] = partialMatch.map(Number)
    const currentYear = new Date().getFullYear()
    try {
      return new CalendarDate(currentYear, month, day)
    } catch {
      return undefined
    }
  }

  const dayRegex = /^(\d{1,2})$/
  const dayMatch = value.match(dayRegex)
  if (dayMatch) {
    const [_, day] = dayMatch.map(Number)
    const currentYear = new Date().getFullYear()
    return new CalendarDate(currentYear, 1, day)
  }

  return undefined
}

const format = (date: DateValue) => {
  const day = date.day.toString().padStart(2, "0")
  const month = date.month.toString().padStart(2, "0")
  const year = (date.year % 100).toString().padStart(2, "0")
  return `${day}/${month}/${year}`
}

```

### Localization

Use the `locale` prop to display the calendar in different languages and
regional formats.

```tsx
"use client"

import { DatePicker, Portal } from "@chakra-ui/react"
import { LuCalendar } from "react-icons/lu"

export const DatePickerLocale = () => {
  return (
    <DatePicker.Root locale="de-DE" startOfWeek={1} maxWidth="20rem">
      <DatePicker.Label>Datum auswählen</DatePicker.Label>
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

### Button Trigger

Replace the default trigger with a styled custom button.

```tsx
"use client"

import { Button, DatePicker, Portal } from "@chakra-ui/react"
import { LuCalendar } from "react-icons/lu"

export const DatePickerWithButton = () => {
  return (
    <DatePicker.Root maxWidth="20rem">
      <DatePicker.Label>Date of birth</DatePicker.Label>
      <DatePicker.Control>
        <DatePicker.Trigger asChild unstyled>
          
            
          
        </DatePicker.Trigger>
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

### Outside Icon

Place the trigger icon outside the input field.

```tsx
"use client"

import { DatePicker, IconButton, Portal } from "@chakra-ui/react"
import { LuCalendar } from "react-icons/lu"

export const DatePickerWithOutsideIcon = () => {
  return (
    <DatePicker.Root maxWidth="20rem">
      <DatePicker.Label>Date of birth</DatePicker.Label>
      <DatePicker.Control>
        
        <DatePicker.Trigger asChild unstyled>
          
            
          
        </DatePicker.Trigger>
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

### Input Group

Integrate with InputGroup for custom input layouts with start/end elements.

```tsx
"use client"

import { DatePicker, InputGroup, Portal } from "@chakra-ui/react"
import { LuCalendar, LuChevronsUpDown } from "react-icons/lu"

export const DatePickerWithInputGroup = () => {
  return (
    <DatePicker.Root maxWidth="20rem">
      <DatePicker.Label>Date</DatePicker.Label>
      <InputGroup
        as={DatePicker.Control}
        startElement={}
        endElement={
          <DatePicker.Trigger>
            
          </DatePicker.Trigger>
        }
      >
        
      
      
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

### Clear Icon

Add a clear trigger to reset the selection.

```tsx
"use client"

import { DatePicker, Portal } from "@chakra-ui/react"
import { LuCalendar } from "react-icons/lu"

export const DatePickerWithClear = () => {
  return (
    <DatePicker.Root maxWidth="20rem">
      <DatePicker.Label>Date of birth</DatePicker.Label>
      <DatePicker.Control>
        
        <DatePicker.IndicatorGroup>
          <DatePicker.Context>
            {(context) =>
              context.value.length ? (
                
              ) : (
                <DatePicker.Trigger>
                  
                </DatePicker.Trigger>
              )
            }
          </DatePicker.Context>
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

### Placement

Use the `positioning` prop to control the placement of the calendar popover.

```tsx
"use client"

import { DatePicker, Portal } from "@chakra-ui/react"
import { LuCalendar } from "react-icons/lu"

export const DatePickerWithPlacement = () => {
  return (
    <DatePicker.Root positioning={{ placement: "top-start" }} maxWidth="20rem">
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
  )
}

```

### Header Layout

Here's an example of customizing the header layout with `RangeText` and
navigation buttons.

```tsx
"use client"

import { DatePicker, HStack, Portal, Spacer } from "@chakra-ui/react"
import { LuCalendar } from "react-icons/lu"

export const DatePickerWithHeaderLayout = () => {
  return (
    <DatePicker.Root maxWidth="20rem">
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
          </DatePicker.Content>
        </DatePicker.Positioner>
      
    </DatePicker.Root>
  )
}

```

### Month and Year Select

Render the `DatePicker.MonthSelect` and `DatePicker.YearSelect` components for
quick month/year navigation.

```tsx
"use client"

import { DatePicker, HStack, Portal } from "@chakra-ui/react"
import { LuCalendar } from "react-icons/lu"

export const DatePickerWithMonthYearSelect = () => {
  return (
    <DatePicker.Root maxWidth="20rem">
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
              <DatePicker.ViewControl>
                
                
                  
                  
                
                
              </DatePicker.ViewControl>
              
            </DatePicker.View>
          </DatePicker.Content>
        </DatePicker.Positioner>
      
    </DatePicker.Root>
  )
}

```

### Multiple Months

Use the `numOfMonths` prop to display multiple months side by side.

```tsx
"use client"

import { DatePicker, Flex } from "@chakra-ui/react"
import { LuCalendar } from "react-icons/lu"

export const DatePickerMultipleMonths = () => {
  return (
    <DatePicker.Root numOfMonths={2} maxWidth="24rem">
      <DatePicker.Label>Select months</DatePicker.Label>
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
