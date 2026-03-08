### Presets

Render the `DatePicker.PresetTrigger` component to provide quick date selection
options.

```tsx
"use client"

import { Button, DatePicker, Flex, Portal, VStack } from "@chakra-ui/react"
import { LuCalendar } from "react-icons/lu"

export const DatePickerPresets = () => {
  return (
    <DatePicker.Root selectionMode="range" maxWidth="32rem">
      <DatePicker.Label>Select range</DatePicker.Label>
      <DatePicker.Control>
        
        
        <DatePicker.IndicatorGroup>
          <DatePicker.Trigger>
            
          </DatePicker.Trigger>
        </DatePicker.IndicatorGroup>
      </DatePicker.Control>
      
        <DatePicker.Positioner>
          <DatePicker.Content>
            
              
                <DatePicker.PresetTrigger value="last7Days" asChild>
                  
                    Last 7 days
                  
                </DatePicker.PresetTrigger>
                <DatePicker.PresetTrigger value="last30Days" asChild>
                  
                    Last 30 days
                  
                </DatePicker.PresetTrigger>
                <DatePicker.PresetTrigger value="thisMonth" asChild>
                  
                    This month
                  
                </DatePicker.PresetTrigger>
                <DatePicker.PresetTrigger value="lastMonth" asChild>
                  
                    Last month
                  
                </DatePicker.PresetTrigger>
                <DatePicker.PresetTrigger value="thisYear" asChild>
                  
                    This year
                  
                </DatePicker.PresetTrigger>
                <DatePicker.PresetTrigger value="lastYear" asChild>
                  
                    Last year
                  
                </DatePicker.PresetTrigger>
              
              
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
