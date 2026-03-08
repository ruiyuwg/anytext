### Presets Sidebar

Here's an example of a task-management style picker with presets sidebar and
calendar side by side.

```tsx
"use client"

import { DatePicker, Flex, HStack, Spacer, Span, Stack } from "@chakra-ui/react"
import type { DateValue } from "@chakra-ui/react"
import {
  DateFormatter,
  getLocalTimeZone,
  isSameDay,
  isToday,
  today,
} from "@internationalized/date"

export const DatePickerWithPresetsSidebar = () => {
  return (
    <DatePicker.Root inline fixedWeeks width="fit-content" borderWidth="1px">
      
        
          {presets.map((preset) => (
            <DatePicker.Context key={preset.label}>
              {(ctx) => (
                <DatePicker.PresetTrigger
                  value={[preset.value]}
                  height="10"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  px="4"
                  textStyle="sm"
                  gap="1"
                  data-selected={
                    ctx.value.length > 0 &&
                    preset.value.compare(ctx.value[0]) === 0
                      ? ""
                      : undefined
                  }
                  _selected={{
                    layerStyle: "fill.subtle",
                  }}
                >
                  {preset.label}
                  
                    {formatShortDate(preset.value, preset.value.toDate(tz))}
                  
                </DatePicker.PresetTrigger>
              )}
            </DatePicker.Context>
          ))}
        

        <DatePicker.View view="day" p="3">
          
            
            
            
            
          
          
        </DatePicker.View>
      
    </DatePicker.Root>
  )
}

const tz = getLocalTimeZone()
const now = today(tz)

const presets = [
  { label: "Today", value: now },
  { label: "Tomorrow", value: now.add({ days: 1 }) },
  { label: "Next week", value: now.add({ weeks: 1 }) },
  { label: "2 weeks", value: now.add({ weeks: 2 }) },
  { label: "4 weeks", value: now.add({ weeks: 4 }) },
]

const weekdayFormatter = new DateFormatter("en-US", { weekday: "short" })
const shortDateFormatter = new DateFormatter("en-US", {
  day: "numeric",
  month: "short",
})

const tomorrow = now.add({ days: 1 })
const formatShortDate = (value: DateValue, display: Date) => {
  if (isToday(value, tz)) return weekdayFormatter.format(display)
  if (isSameDay(value, tomorrow)) return weekdayFormatter.format(display)
  return shortDateFormatter.format(display)
}

```

### Today Button

Here's an example of adding a footer button to quickly jump to today's date.

```tsx
"use client"

import { Button, DatePicker, Portal } from "@chakra-ui/react"
import { LuCalendar } from "react-icons/lu"

export const DatePickerWithTodayButton = () => {
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
              
              
              <DatePicker.Context>
                {(api) => (
                  <Button
                    variant="subtle"
                    size="sm"
                    onClick={() => api.selectToday()}
                  >
                    Today
                  
                )}
              </DatePicker.Context>
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
