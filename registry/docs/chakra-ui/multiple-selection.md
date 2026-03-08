### Multiple Selection

Set the `selectionMode` prop to `"multiple"` to allow selecting multiple dates.

```tsx
"use client"

import { DatePicker, Portal, Tag, Wrap } from "@chakra-ui/react"
import type { DateValue, WrapProps } from "@chakra-ui/react"
import { LuCalendar } from "react-icons/lu"

export const DatePickerMultiSelection = () => {
  return (
    <DatePicker.Root selectionMode="multiple" maxWidth="sm">
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

const formatWithDay = (date: DateValue) => {
  const jsDate = date.toDate("UTC")
  return jsDate.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  })
}

const DatePickerValue = () => {
  return (
    <DatePicker.ValueText placeholder="Select dates...">
      {({ value, index, remove }) => (
        <Tag.Root key={index} size="lg" variant="subtle">
          <Tag.Label>{formatWithDay(value)}</Tag.Label>
          <Tag.EndElement>
            
          </Tag.EndElement>
        </Tag.Root>
      )}
    </DatePicker.ValueText>
  )
}

const DatePickerValueContainer = (props: WrapProps) => {
  return (
    <Wrap
      gap="2"
      borderWidth="1px"
      minH="10"
      display="flex"
      alignItems="center"
      width="full"
      borderRadius="l2"
      textStyle="sm"
      py="1.5"
      ps="2.5"
      pe="8"
      {...props}
    />
  )
}

```

### Month Picker

Set the `defaultView` and `minView` props to `"month"` to restrict the picker to
month selection only.

```tsx
"use client"

import { DatePicker, Portal } from "@chakra-ui/react"
import type { DateValue } from "@chakra-ui/react"
import { CalendarDate } from "@internationalized/date"
import { LuCalendar } from "react-icons/lu"

export const DatePickerMonthPicker = () => {
  return (
    <DatePicker.Root
      format={format}
      parse={parse}
      defaultView="month"
      minView="month"
      placeholder="mm/yyyy"
      maxWidth="20rem"
    >
      <DatePicker.Label>Select month</DatePicker.Label>
      <DatePicker.Control>
        
        <DatePicker.IndicatorGroup>
          <DatePicker.Trigger>
            
          </DatePicker.Trigger>
        </DatePicker.IndicatorGroup>
      </DatePicker.Control>
      
        <DatePicker.Positioner>
          <DatePicker.Content>
            <DatePicker.View view="month">
              
              
            </DatePicker.View>
            <DatePicker.View view="year">
              
              
            </DatePicker.View>
          </DatePicker.Content>
        </DatePicker.Positioner>
      
    </DatePicker.Root>
  )
}

const format = (date: DateValue) => {
  const month = date.month.toString().padStart(2, "0")
  const year = date.year.toString()
  return `${month}/${year}`
}

const parse = (string: string) => {
  const fullRegex = /^(\d{1,2})\/(\d{4})$/
  const fullMatch = string.match(fullRegex)
  if (fullMatch) {
    const [, month, year] = fullMatch.map(Number)
    return new CalendarDate(year, month, 1)
  }
}

```

### Month Range

Set the `selectionMode` prop to `"range"` and `minView` to `"month"` to select a
month range.

```tsx
"use client"

import { DatePicker, Portal } from "@chakra-ui/react"
import type { DateValue } from "@chakra-ui/react"
import { CalendarDate } from "@internationalized/date"
import { LuCalendar } from "react-icons/lu"

export const DatePickerMonthRange = () => {
  return (
    <DatePicker.Root
      selectionMode="range"
      defaultView="month"
      minView="month"
      format={format}
      parse={parse}
      placeholder="mm/yyyy"
      maxWidth="20rem"
    >
      <DatePicker.Label>Select range</DatePicker.Label>
      <DatePicker.Control>
        
        
        <DatePicker.IndicatorGroup>
          <DatePicker.Trigger>
            
          </DatePicker.Trigger>
        </DatePicker.IndicatorGroup>
      </DatePicker.Control>
      
        <DatePicker.Positioner>
          <DatePicker.Content>
            <DatePicker.View view="month">
              
              
            </DatePicker.View>
            <DatePicker.View view="year">
              
              
            </DatePicker.View>
          </DatePicker.Content>
        </DatePicker.Positioner>
      
    </DatePicker.Root>
  )
}

const format = (date: DateValue) => {
  const month = date.month.toString().padStart(2, "0")
  const year = date.year.toString()
  return `${month}/${year}`
}

const parse = (string: string) => {
  const fullRegex = /^(\d{1,2})\/(\d{4})$/
  const fullMatch = string.match(fullRegex)
  if (fullMatch) {
    const [, month, year] = fullMatch.map(Number)
    return new CalendarDate(year, month, 1)
  }
}

```

### Year Picker

Set the `defaultView` and `minView` props to `"year"` to restrict the picker to
year selection only.

```tsx
"use client"

import { DatePicker, Portal, parseDate } from "@chakra-ui/react"
import type { DateValue } from "@chakra-ui/react"
import { LuCalendar } from "react-icons/lu"

export const DatePickerYearPicker = () => {
  return (
    <DatePicker.Root
      format={format}
      parse={parse}
      defaultView="year"
      minView="year"
      placeholder="yyyy"
      maxWidth="20rem"
    >
      <DatePicker.Label>Select year</DatePicker.Label>
      <DatePicker.Control>
        
        <DatePicker.IndicatorGroup>
          <DatePicker.Trigger>
            
          </DatePicker.Trigger>
        </DatePicker.IndicatorGroup>
      </DatePicker.Control>
      
        <DatePicker.Positioner>
          <DatePicker.Content>
            <DatePicker.View view="year">
              
              
            </DatePicker.View>
          </DatePicker.Content>
        </DatePicker.Positioner>
      
    </DatePicker.Root>
  )
}

const format = (date: DateValue) => date.year.toString()

const parse = (string: string | undefined) => {
  if (string === "" || !string) return
  const year = Number(string)
  if (year < 100) {
    const currentYear = new Date().getFullYear()
    const currentCentury = Math.floor(currentYear / 100) * 100
    return parseDate(new Date(currentCentury + year, 0))
  }
  return parseDate(new Date(Number(string), 0))
}

```

### Year Range

Set the `selectionMode` prop to `"range"` and `minView` to `"year"` to select a
year range.

```tsx
"use client"

import { DatePicker, Portal } from "@chakra-ui/react"
import type { DateValue } from "@chakra-ui/react"
import { CalendarDate } from "@internationalized/date"
import { LuCalendar } from "react-icons/lu"

export const DatePickerYearPickerRange = () => {
  return (
    <DatePicker.Root
      selectionMode="range"
      defaultView="year"
      minView="year"
      format={format}
      parse={parse}
      placeholder="yyyy"
      maxWidth="20rem"
    >
      <DatePicker.Label>Select year range</DatePicker.Label>
      <DatePicker.Control>
        
        
        <DatePicker.IndicatorGroup>
          <DatePicker.Trigger>
            
          </DatePicker.Trigger>
        </DatePicker.IndicatorGroup>
      </DatePicker.Control>
      
        <DatePicker.Positioner>
          <DatePicker.Content>
            <DatePicker.View view="year">
              
              
            </DatePicker.View>
          </DatePicker.Content>
        </DatePicker.Positioner>
      
    </DatePicker.Root>
  )
}

const format = (date: DateValue) => date.year.toString()

const parse = (string: string) => {
  const fullRegex = /^(\d{4})$/
  const fullMatch = string.match(fullRegex)
  if (fullMatch) {
    const [, year] = fullMatch.map(Number)
    return new CalendarDate(year, 1, 1)
  }
}

```

### Min/Max

Use the `min` and `max` props to restrict date selection to a specific range.

```tsx
"use client"

import { DatePicker, Portal, parseDate } from "@chakra-ui/react"
import { LuCalendar } from "react-icons/lu"

export const DatePickerMinMax = () => {
  return (
    <DatePicker.Root
      min={parseDate("2025-03-05")}
      max={parseDate("2025-03-31")}
      maxWidth="20rem"
    >
      <DatePicker.Label>Date of creation</DatePicker.Label>
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

### Unavailable Dates

Use the `isDateUnavailable` prop to disable specific dates (e.g., weekends,
holidays).

```tsx
"use client"

import { DatePicker, Portal } from "@chakra-ui/react"
import type { DateValue } from "@chakra-ui/react"
import { LuCalendar } from "react-icons/lu"

export const DatePickerUnavailable = () => {
  return (
    <DatePicker.Root isDateUnavailable={isWeekend} maxWidth="20rem">
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

const isWeekend = (date: DateValue) => {
  const dayOfWeek = date.toDate("UTC").getDay()
  return dayOfWeek === 0 || dayOfWeek === 6
}

```
