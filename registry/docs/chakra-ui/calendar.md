# Calendar

```tsx
"use client"

import { DatePicker } from "@chakra-ui/react"

export const DatePickerCalendarBasic = () => {
  return (
    <DatePicker.Root inline width="fit-content">
      <DatePicker.Content unstyled>
        <DatePicker.View view="day">
          <DatePicker.Header />
          <DatePicker.DayTable />
        </DatePicker.View>
        <DatePicker.View view="month">
          <DatePicker.Header />
          <DatePicker.MonthTable />
        </DatePicker.View>
        <DatePicker.View view="year">
          <DatePicker.Header />
          <DatePicker.YearTable />
        </DatePicker.View>
      </DatePicker.Content>
    </DatePicker.Root>
  )
}

```

## Usage

The calendar is an inline variant of the `DatePicker` component. Set the
`inline` prop on `DatePicker.Root` to render the calendar directly on the page
without the input, positioner, and content parts.

```tsx
import { DatePicker } from "@chakra-ui/react"
```

```tsx
<DatePicker.Root inline>
  <DatePicker.View view="day">
    <DatePicker.Header />
    <DatePicker.DayTable />
  </DatePicker.View>
  <DatePicker.View view="month">
    <DatePicker.Header />
    <DatePicker.MonthTable />
  </DatePicker.View>
  <DatePicker.View view="year">
    <DatePicker.Header />
    <DatePicker.YearTable />
  </DatePicker.View>
</DatePicker.Root>
```

## Examples

### Sizes

Use the `size` prop to control the calendar cell and control sizes.

```tsx
"use client"

import { Badge, DatePicker, For, Stack } from "@chakra-ui/react"

export const DatePickerCalendarWithSizes = () => {
  return (
    <Stack gap={8} direction="row" flexWrap="wrap">
      <For each={["xs", "sm", "md", "lg", "xl"]}>
        {(size) => (
          <Stack key={size} gap={2} align="flex-start">
            <Badge variant="outline" width="fit-content">
              {size}
            </Badge>
            <DatePicker.Root inline width="fit-content" size={size}>
              <DatePicker.Content unstyled>
                <DatePicker.View view="day">
                  <DatePicker.Header />
                  <DatePicker.DayTable />
                </DatePicker.View>
                <DatePicker.View view="month">
                  <DatePicker.Header />
                  <DatePicker.MonthTable />
                </DatePicker.View>
                <DatePicker.View view="year">
                  <DatePicker.Header />
                  <DatePicker.YearTable />
                </DatePicker.View>
              </DatePicker.Content>
            </DatePicker.Root>
          </Stack>
        )}
      </For>
    </Stack>
  )
}

```

### Hide Outside Days

Set the `hideOutsideDays` prop to hide dates that fall outside the current
month.

```tsx
"use client"

import { DatePicker, parseDate } from "@chakra-ui/react"

export const DatePickerCalendarHideOutsideDays = () => {
  return (
    <DatePicker.Root
      hideOutsideDays
      inline
      width="fit-content"
      defaultValue={[parseDate("2025-03-15")]}
    >
      <DatePicker.Content unstyled>
        <DatePicker.View view="day">
          <DatePicker.Header />
          <DatePicker.DayTable />
        </DatePicker.View>
        <DatePicker.View view="month">
          <DatePicker.Header />
          <DatePicker.MonthTable />
        </DatePicker.View>
        <DatePicker.View view="year">
          <DatePicker.Header />
          <DatePicker.YearTable />
        </DatePicker.View>
      </DatePicker.Content>
    </DatePicker.Root>
  )
}

```

### Controlled

Use the `value` and `onValueChange` props to control the inline calendar.

```tsx
"use client"

import { DatePicker, Stack, Text, parseDate } from "@chakra-ui/react"
import { useState } from "react"

export const DatePickerCalendarControlled = () => {
  const [value, setValue] = useState([parseDate("2025-03-15")])

  return (
    <Stack gap="4">
      <Text fontWeight="medium" textStyle="sm">
        Selected: {value[0]?.toString() || "None"}
      </Text>
      <DatePicker.Root
        value={value}
        onValueChange={(e) => setValue(e.value)}
        inline
        width="fit-content"
      >
        <DatePicker.Content unstyled>
          <DatePicker.View view="day">
            <DatePicker.Header />
            <DatePicker.DayTable />
          </DatePicker.View>
          <DatePicker.View view="month">
            <DatePicker.Header />
            <DatePicker.MonthTable />
          </DatePicker.View>
          <DatePicker.View view="year">
            <DatePicker.Header />
            <DatePicker.YearTable />
          </DatePicker.View>
        </DatePicker.Content>
      </DatePicker.Root>
    </Stack>
  )
}

```

### Default Value

Use the `defaultValue` prop to set the initially selected date.

```tsx
"use client"

import { DatePicker, parseDate } from "@chakra-ui/react"

export const DatePickerCalendarDefaultValue = () => {
  return (
    <DatePicker.Root
      defaultValue={[parseDate("2025-03-15")]}
      inline
      width="fit-content"
    >
      <DatePicker.Content unstyled>
        <DatePicker.View view="day">
          <DatePicker.Header />
          <DatePicker.DayTable />
        </DatePicker.View>
        <DatePicker.View view="month">
          <DatePicker.Header />
          <DatePicker.MonthTable />
        </DatePicker.View>
        <DatePicker.View view="year">
          <DatePicker.Header />
          <DatePicker.YearTable />
        </DatePicker.View>
      </DatePicker.Content>
    </DatePicker.Root>
  )
}

```

### Range Selection

Set the `selectionMode` prop to `"range"` to allow selecting a date range.

```tsx
"use client"

import { DatePicker } from "@chakra-ui/react"

export const DatePickerCalendarRangeSelection = () => {
  return (
    <DatePicker.Root selectionMode="range" inline width="fit-content">
      <DatePicker.Content unstyled>
        <DatePicker.View view="day">
          <DatePicker.Header />
          <DatePicker.DayTable />
        </DatePicker.View>
        <DatePicker.View view="month">
          <DatePicker.Header />
          <DatePicker.MonthTable />
        </DatePicker.View>
        <DatePicker.View view="year">
          <DatePicker.Header />
          <DatePicker.YearTable />
        </DatePicker.View>
      </DatePicker.Content>
    </DatePicker.Root>
  )
}

```

### Multi Selection

Set the `selectionMode` prop to `"multiple"` to allow selecting multiple dates.

```tsx
"use client"

import { DatePicker } from "@chakra-ui/react"

export const DatePickerCalendarMultiSelection = () => {
  return (
    <DatePicker.Root selectionMode="multiple" inline width="fit-content">
      <DatePicker.Content unstyled>
        <DatePicker.View view="day">
          <DatePicker.Header />
          <DatePicker.DayTable />
        </DatePicker.View>
        <DatePicker.View view="month">
          <DatePicker.Header />
          <DatePicker.MonthTable />
        </DatePicker.View>
        <DatePicker.View view="year">
          <DatePicker.Header />
          <DatePicker.YearTable />
        </DatePicker.View>
      </DatePicker.Content>
    </DatePicker.Root>
  )
}

```

### Min and Max

Use the `min` and `max` props to restrict the selectable date range.

```tsx
"use client"

import { DatePicker, parseDate } from "@chakra-ui/react"

export const DatePickerCalendarMinMax = () => {
  return (
    <DatePicker.Root
      min={parseDate("2025-03-05")}
      max={parseDate("2025-03-25")}
      inline
      width="fit-content"
    >
      <DatePicker.Content unstyled>
        <DatePicker.View view="day">
          <DatePicker.Header />
          <DatePicker.DayTable />
        </DatePicker.View>
        <DatePicker.View view="month">
          <DatePicker.Header />
          <DatePicker.MonthTable />
        </DatePicker.View>
        <DatePicker.View view="year">
          <DatePicker.Header />
          <DatePicker.YearTable />
        </DatePicker.View>
      </DatePicker.Content>
    </DatePicker.Root>
  )
}

```

### Unavailable Dates

Use the `isDateUnavailable` prop to disable specific dates based on custom
logic.

```tsx
"use client"

import { DatePicker } from "@chakra-ui/react"
import { isWeekend } from "@internationalized/date"

export const DatePickerCalendarUnavailable = () => {
  return (
    <DatePicker.Root isDateUnavailable={isWeekend} inline width="fit-content">
      <DatePicker.Content unstyled>
        <DatePicker.View view="day">
          <DatePicker.Header />
          <DatePicker.DayTable />
        </DatePicker.View>
        <DatePicker.View view="month">
          <DatePicker.Header />
          <DatePicker.MonthTable />
        </DatePicker.View>
        <DatePicker.View view="year">
          <DatePicker.Header />
          <DatePicker.YearTable />
        </DatePicker.View>
      </DatePicker.Content>
    </DatePicker.Root>
  )
}

```

### Multiple Months

Use the `numOfMonths` prop to display multiple months side by side.

```tsx
"use client"

import { DatePicker, Flex } from "@chakra-ui/react"

export const DatePickerCalendarMultipleMonths = () => {
  return (
    <DatePicker.Root
      numOfMonths={2}
      selectionMode="range"
      inline
      width="fit-content"
    >
      <DatePicker.Content unstyled>
        <DatePicker.View view="day">
          <DatePicker.Header />
          <Flex gap="4">
            <DatePicker.DayTable />
            <DatePicker.DayTable offset={1} />
          </Flex>
        </DatePicker.View>
        <DatePicker.View view="month">
          <DatePicker.Header />
          <DatePicker.MonthTable />
        </DatePicker.View>
        <DatePicker.View view="year">
          <DatePicker.Header />
          <DatePicker.YearTable />
        </DatePicker.View>
      </DatePicker.Content>
    </DatePicker.Root>
  )
}

```

### Locale

Use the `locale` prop to customize for different languages and regional formats.

```tsx
"use client"

import { DatePicker } from "@chakra-ui/react"

export const DatePickerCalendarLocale = () => {
  return (
    <DatePicker.Root locale="de-DE" startOfWeek={1} inline width="fit-content">
      <DatePicker.Content unstyled>
        <DatePicker.View view="day">
          <DatePicker.Header />
          <DatePicker.DayTable />
        </DatePicker.View>
        <DatePicker.View view="month">
          <DatePicker.Header />
          <DatePicker.MonthTable />
        </DatePicker.View>
        <DatePicker.View view="year">
          <DatePicker.Header />
          <DatePicker.YearTable />
        </DatePicker.View>
      </DatePicker.Content>
    </DatePicker.Root>
  )
}

```

### Max Selected Dates

Use the `maxSelectedDates` prop with `selectionMode="multiple"` to limit the
number of dates that can be selected.

```tsx
"use client"

import { DatePicker } from "@chakra-ui/react"

export const DatePickerCalendarMaxSelected = () => {
  return (
    <DatePicker.Root
      selectionMode="multiple"
      maxSelectedDates={3}
      inline
      width="fit-content"
    >
      <DatePicker.Content unstyled>
        <DatePicker.View view="day">
          <DatePicker.Header />
          <DatePicker.DayTable />
        </DatePicker.View>
        <DatePicker.View view="month">
          <DatePicker.Header />
          <DatePicker.MonthTable />
        </DatePicker.View>
        <DatePicker.View view="year">
          <DatePicker.Header />
          <DatePicker.YearTable />
        </DatePicker.View>
      </DatePicker.Content>
    </DatePicker.Root>
  )
}

```

### Week Numbers

Use the `showWeekNumbers` prop to display ISO week numbers alongside the
calendar rows.

```tsx
"use client"

import { DatePicker } from "@chakra-ui/react"

export const DatePickerCalendarWeekNumbers = () => {
  return (
    <DatePicker.Root showWeekNumbers inline width="fit-content">
      <DatePicker.Content unstyled>
        <DatePicker.View view="day">
          <DatePicker.Header />
          <DatePicker.DayTable />
        </DatePicker.View>
        <DatePicker.View view="month">
          <DatePicker.Header />
          <DatePicker.MonthTable />
        </DatePicker.View>
        <DatePicker.View view="year">
          <DatePicker.Header />
          <DatePicker.YearTable />
        </DatePicker.View>
      </DatePicker.Content>
    </DatePicker.Root>
  )
}

```

### Booking Time Grid

Here's an example of a Calendly-style booking interface with an inline calendar
and a scrollable time slot grid.

```tsx
"use client"

import {
  Box,
  Button,
  Center,
  DatePicker,
  Flex,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react"
import {
  type DateValue,
  Time,
  getLocalTimeZone,
  isToday,
  isWeekend,
} from "@internationalized/date"
import { useState } from "react"
import { LuGlobe } from "react-icons/lu"

const tz = getLocalTimeZone()

export const DatePickerWithTimeGrid = () => {
  const [selectedDate, setSelectedDate] = useState<DateValue[]>([])
  const [selectedTime, setSelectedTime] = useState<Time | null>(null)

  const date = selectedDate[0]
  const slots = date ? generateTimeSlots(date) : []
  const nativeDate = date?.toDate(tz)

  const handleDateChange = (details: { value: DateValue[] }) => {
    setSelectedDate(details.value)
    setSelectedTime(null)
  }

  const handleTimeClick = (time: Time) => {
    setSelectedTime(
      selectedTime && selectedTime.compare(time) === 0 ? null : time,
    )
  }

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      borderWidth="1px"
      rounded="xl"
      overflow="hidden"
      width="fit-content"
    >
      {/* Calendar */}
      <Box
        borderEndWidth={{ md: "1px" }}
        borderBottomWidth={{ base: "1px", md: "0" }}
      >
        <Stack gap="0" px="5" py="5">
          <Text fontWeight="semibold" textStyle="lg">
            Select a Date
          </Text>
          <Text textStyle="sm" color="fg.muted">
            Pick a day for your meeting
          </Text>
        </Stack>

        <DatePicker.Root
          inline
          value={selectedDate}
          onValueChange={handleDateChange}
          isDateUnavailable={(date) => isWeekend(date, "en-US")}
          width="fit-content"
        >
          <DatePicker.Content unstyled px="3" pb="4">
            <DatePicker.View view="day">
              <HStack justify="space-between" gap="0">
                <DatePicker.PrevTrigger />
                <DatePicker.RangeText fontWeight="medium" textStyle="sm" />
                <DatePicker.NextTrigger />
              </HStack>
              <DatePicker.DayTable />
            </DatePicker.View>
          </DatePicker.Content>
        </DatePicker.Root>

        <HStack px="5" pb="4" color="fg.muted" textStyle="xs">
          <LuGlobe />
          <span>{tz}</span>
        </HStack>
      </Box>

      {/* Time slots */}
      <Stack minW="240px" flex="1">
        {date && nativeDate ? (
          <Stack gap="0" flex="1">
            <Stack gap="0" px="5" pt="5" pb="3">
              <Text fontWeight="semibold">
                {isToday(date, tz) ? "Today" : formatWeekday(nativeDate)}
              </Text>
              <Text textStyle="sm" color="fg.muted">
                {formatMonthDay(nativeDate)}
              </Text>
            </Stack>

            <TimeGrid
              slots={slots}
              selectedTime={selectedTime}
              onTimeClick={handleTimeClick}
            />
          </Stack>
        ) : (
          <Center height="full" px="8" py="10" color="fg.muted">
            <Stack align="center" gap="1" textAlign="center">
              <Text textStyle="sm" fontWeight="medium">
                Select a date
              </Text>
              <Text textStyle="xs">Available time slots will appear here</Text>
            </Stack>
          </Center>
        )}
      </Stack>
    </Flex>
  )
}

/* --- TimeGrid component --- */

interface TimeGridProps {
  slots: Time[]
  selectedTime: Time | null
  onTimeClick: (time: Time) => void
}

const TimeGrid = (props: TimeGridProps) => {
  const { slots, selectedTime, onTimeClick } = props

  return (
    <Stack gap="2" px="4" pb="4" flex="1" overflowY="auto" maxH="380px">
      {slots.map((time) => {
        const isSelected =
          selectedTime != null && selectedTime.compare(time) === 0
        const label = formatTime(time)

        return (
          <Button
            key={label}
            variant={isSelected ? "solid" : "outline"}
            size="sm"
            rounded="lg"
            fontWeight="semibold"
            onClick={() => onTimeClick(time)}
          >
            {label}
          </Button>
        )
      })}
    </Stack>
  )
}

/* --- Utilities --- */

const generateTimeSlots = (date: DateValue): Time[] => {
  const day = date.toDate(tz).getDay()
  const slots: Time[] = []
  const start = 9
  const end = day === 5 ? 14 : 17

  for (let hour = start; hour < end; hour++) {
    slots.push(new Time(hour, 0))
    if (hour < end - 1 || day !== 5) {
      slots.push(new Time(hour, 30))
    }
  }

  // simulate some unavailable slots
  const seed = date.day + date.month
  return slots.filter((_, i) => (i + seed) % 5 !== 0)
}

const formatTime = (time: Time) =>
  `${String(time.hour).padStart(2, "0")}:${String(time.minute).padStart(2, "0")}`

const formatWeekday = (date: Date) =>
  date.toLocaleDateString("en-US", { weekday: "long" })

const formatMonthDay = (date: Date) =>
  date.toLocaleDateString("en-US", { month: "long", day: "numeric" })

```

## Props

The Calendar shares the same props and anatomy as the
[DatePicker](/docs/components/date-picker). Refer to the DatePicker docs for the
full prop reference.
