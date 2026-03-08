# DataList

```tsx
import { DataList } from "@chakra-ui/react"

const stats = [
  { label: "New Users", value: "234", diff: -12, helpText: "Till date" },
  { label: "Sales", value: "£12,340", diff: 12, helpText: "Last 30 days" },
  { label: "Revenue", value: "3,450", diff: 4.5, helpText: "Last 30 days" },
]

export const DataListBasic = () => {
  return (
    <DataList.Root orientation="horizontal">
      {stats.map((item) => (
        <DataList.Item key={item.label}>
          <DataList.ItemLabel>{item.label}</DataList.ItemLabel>
          <DataList.ItemValue>{item.value}</DataList.ItemValue>
        </DataList.Item>
      ))}
    </DataList.Root>
  )
}

```

## Usage

```tsx
import { DataList } from "@chakra-ui/react"
```

```tsx
<DataList.Root>
  {data.map((item) => (
    <DataList.Item key={item.label}>
      <DataList.ItemLabel>{item.label}</DataList.ItemLabel>
      <DataList.ItemValue>{item.value}</DataList.ItemValue>
    </DataList.Item>
  ))}
</DataList.Root>
```

:::info

If you prefer a closed component composition, check out the
[snippet below](#closed-component).

:::

## Examples

### Sizes

Use the `size` prop to change the size of the datalist component.

```tsx
import { DataList, Stack } from "@chakra-ui/react"

export const DataListWithSizes = () => {
  return (
    
      <DataList.Root size="sm">
        <DataList.Item>
          <DataList.ItemLabel>Name</DataList.ItemLabel>
          <DataList.ItemValue>John Doe</DataList.ItemValue>
        </DataList.Item>
      </DataList.Root>
      <DataList.Root size="md">
        <DataList.Item>
          <DataList.ItemLabel>Name</DataList.ItemLabel>
          <DataList.ItemValue>John Doe</DataList.ItemValue>
        </DataList.Item>
      </DataList.Root>
      <DataList.Root size="lg">
        <DataList.Item>
          <DataList.ItemLabel>Name</DataList.ItemLabel>
          <DataList.ItemValue>John Doe</DataList.ItemValue>
        </DataList.Item>
      </DataList.Root>
    
  )
}

```

### Variants

Use the `variant` prop to change the variant of the datalist component.

> Added in `v3.1.x`

```tsx
import { DataList, For, Stack } from "@chakra-ui/react"

export const DataListWithVariants = () => {
  return (
    
      
        {(variant) => (
          <DataList.Root variant={variant} key={variant}>
            {stats.map((item) => (
              <DataList.Item key={item.label}>
                <DataList.ItemLabel>{item.label}</DataList.ItemLabel>
                <DataList.ItemValue>{item.value}</DataList.ItemValue>
              </DataList.Item>
            ))}
          </DataList.Root>
        )}
      
    
  )
}

const stats = [
  { label: "New Users", value: "234", diff: -12, helpText: "Till date" },
  { label: "Sales", value: "£12,340", diff: 12, helpText: "Last 30 days" },
  { label: "Revenue", value: "3,450", diff: 4.5, helpText: "Last 30 days" },
]

```

### Orientation

Use the `orientation` prop to change the orientation of the datalist component.

```tsx
import { DataList } from "@chakra-ui/react"

const stats = [
  { label: "New Users", value: "234", diff: -12, helpText: "Till date" },
  { label: "Sales", value: "£12,340", diff: 12, helpText: "Last 30 days" },
  { label: "Revenue", value: "3,450", diff: 4.5, helpText: "Last 30 days" },
]

export const DataListVertical = () => {
  return (
    <DataList.Root>
      {stats.map((item) => (
        <DataList.Item key={item.label}>
          <DataList.ItemLabel>{item.label}</DataList.ItemLabel>
          <DataList.ItemValue>{item.value}</DataList.ItemValue>
        </DataList.Item>
      ))}
    </DataList.Root>
  )
}

```

### Info Tip

Render the `InfoTip` component within `DataList.Item` to provide additional
context to the datalist.

```tsx
import { DataList } from "@chakra-ui/react"
import { InfoTip } from "@/components/ui/toggle-tip"

const stats = [
  { label: "New Users", value: "234", diff: -12, helpText: "Till date" },
  { label: "Sales", value: "£12,340", diff: 12, helpText: "Last 30 days" },
  { label: "Revenue", value: "3,450", diff: 4.5, helpText: "Last 30 days" },
]

export const DataListWithInfo = () => {
  return (
    <DataList.Root orientation="horizontal">
      {stats.map((item) => (
        <DataList.Item key={item.label}>
          <DataList.ItemLabel>
            {item.label}
            This is some info
          </DataList.ItemLabel>
          <DataList.ItemValue>{item.value}</DataList.ItemValue>
        </DataList.Item>
      ))}
    </DataList.Root>
  )
}

```

### Separator

Use the `divideY` prop on the `DataList.Root` to add a separator between items.

```tsx
import { DataList } from "@chakra-ui/react"

export const DataListWithSeparator = () => {
  return (
    <DataList.Root orientation="horizontal" divideY="1px" maxW="md">
      {items.map((item) => (
        <DataList.Item key={item.label} pt="4">
          <DataList.ItemLabel>{item.label}</DataList.ItemLabel>
          <DataList.ItemValue>{item.value}</DataList.ItemValue>
        </DataList.Item>
      ))}
    </DataList.Root>
  )
}

const items = [
  { label: "First Name", value: "Jassie" },
  { label: "Last Name", value: "Bhatia" },
  { label: "Email", value: "jassie@jassie.dev" },
  { label: "Phone", value: "1234567890" },
  { label: "Address", value: "1234 Main St, Anytown, USA" },
]

```

### Closed Component

Here's how to setup the Data List for a closed component composition.

<ExampleCode name="data-list-closed-component" />

If you want to automatically add the closed component to your project, run the
command:

```bash
npx @chakra-ui/cli snippet add data-list
```

## Props

### Root

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
| orientation | vertical | `'horizontal' \| 'vertical'` | The orientation of the component |
| size | md | `'sm' \| 'md' \| 'lg'` | The size of the component |
| variant | subtle | `'subtle' \| 'bold'` | The variant of the component |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| unstyled | undefined | `boolean` | Whether to remove the component's style. |

## Explorer

Explore the `DataList` component parts interactively. Click on parts in the
sidebar to highlight them in the preview.

<Explorer name="data-list-basic" />

# Date Picker

```tsx
"use client"

import { DatePicker, Portal } from "@chakra-ui/react"
import { LuCalendar } from "react-icons/lu"

export const DatePickerBasic = () => {
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

## Usage

```tsx
import { DatePicker } from "@chakra-ui/react"
```

```tsx
<DatePicker.Root>
  
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
```

## Date Value

Date values are provided using objects from
[`@internationalized/date`](https://react-aria.adobe.com/internationalized/date/),
which handles timezone-safe, locale-aware date handling.

This will be replaced by the
[Temporal API](https://tc39.es/proposal-temporal/docs/) when it's widely
supported in browsers.

## Examples

### Sizes

Use the `size` prop to change the size of the date picker.

```tsx
"use client"

import { DatePicker, For, Portal, Stack } from "@chakra-ui/react"
import { LuCalendar } from "react-icons/lu"

export const DatePickerWithSizes = () => {
  return (
    
      
        {(size) => (
          <DatePicker.Root key={size} size={size}>
            <DatePicker.Label>Select date - {size}</DatePicker.Label>
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
      
    
  )
}

```

### Variants

Use the `variant` prop to change the visual style of the date picker.

```tsx
"use client"

import { DatePicker, For, Portal, Stack } from "@chakra-ui/react"
import { LuCalendar } from "react-icons/lu"

export const DatePickerWithVariants = () => {
  return (
    
      
        {(variant) => (
          <DatePicker.Root key={variant} variant={variant}>
            <DatePicker.Label>Select date - {variant}</DatePicker.Label>
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
      
    
  )
}

```

### Disabled

Use the `disabled` prop to prevent user interaction with the date picker.

```tsx
"use client"

import { DatePicker, Portal } from "@chakra-ui/react"
import { LuCalendar } from "react-icons/lu"

export const DatePickerDisabled = () => {
  return (
    <DatePicker.Root disabled maxWidth="20rem">
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

### Read Only

Use the `readOnly` prop to prevent modification while keeping the value visible.

```tsx
"use client"

import { DatePicker, Portal, parseDate } from "@chakra-ui/react"
import { LuCalendar } from "react-icons/lu"

export const DatePickerReadOnly = () => {
  return (
    <DatePicker.Root
      readOnly
      defaultValue={[parseDate("2025-03-15")]}
      maxWidth="20rem"
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
  )
}

```

### Default View

Use the `defaultView` prop to set the initial calendar view to `"day"`,
`"month"`, or `"year"`.

```tsx
"use client"

import { Badge, DatePicker, Portal, Stack } from "@chakra-ui/react"
import { LuCalendar } from "react-icons/lu"

export const DatePickerDefaultView = () => {
  return (
    
      
        Opens with month view
      
      <DatePicker.Root defaultView="month">
        <DatePicker.Label>End Date</DatePicker.Label>
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

### Default Value

Use the `defaultValue` prop to set the initially selected date.

```tsx
"use client"

import { DatePicker, Portal, parseDate } from "@chakra-ui/react"
import { LuCalendar } from "react-icons/lu"

export const DatePickerDefaultValue = () => {
  return (
    <DatePicker.Root defaultValue={[parseDate("2026-01-26")]} maxWidth="20rem">
      <DatePicker.Label>Start Date</DatePicker.Label>
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

### Controlled

Use the `value` and `onValueChange` props to control the selected date.

```tsx
"use client"

import { DatePicker, Portal, Stack, Text, parseDate } from "@chakra-ui/react"
import { useState } from "react"
import { LuCalendar } from "react-icons/lu"

export const DatePickerControlled = () => {
  const [value, setValue] = useState([parseDate("2026-01-26")])

  return (
    
      
        Selected: {value.map((d) => d.toString()).join(", ")}
      

      <DatePicker.Root value={value} onValueChange={(e) => setValue(e.value)}>
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

### Store

An alternative way to control the date picker is to use the `RootProvider`
component and the `useDatePicker` store hook.

```tsx
"use client"

import {
  DatePicker,
  Portal,
  Stack,
  Text,
  useDatePicker,
} from "@chakra-ui/react"
import { LuCalendar } from "react-icons/lu"

export const DatePickerRootProvider = () => {
  const datePicker = useDatePicker()
  return (
    
      
        Selected: {datePicker.valueAsString.join(", ") || "None"}
      

      <DatePicker.RootProvider value={datePicker}>
        <DatePicker.Label>Select range</DatePicker.Label>
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
        
      </DatePicker.RootProvider>
    
  )
}

```

### Range Selection

Set the `selectionMode` prop to `"range"` to allow selecting a start and end
date.

```tsx
"use client"

import { DatePicker, Portal } from "@chakra-ui/react"
import { LuCalendar } from "react-icons/lu"

export const DatePickerRangeSelection = () => {
  return (
    <DatePicker.Root selectionMode="range" maxWidth="20rem">
      <DatePicker.Label>Select range</DatePicker.Label>
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
