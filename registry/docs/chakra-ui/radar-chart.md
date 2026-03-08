# Radar Chart

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts"

export const RadarChartBasic = () => {
  const chart = useChart({
    data: [
      { windows: 110, month: "January" },
      { windows: 130, month: "February" },
      { windows: 110, month: "March" },
      { windows: 90, month: "May" },
      { windows: 75, month: "June" },
    ],
    series: [{ name: "windows", color: "teal.solid" }],
  })

  return (
    <Chart.Root maxW="sm" chart={chart} mx="auto">
      <RadarChart data={chart.data} responsive>
        <PolarGrid stroke={chart.color("border")} />
        <PolarAngleAxis dataKey={chart.key("month")} />
        <PolarRadiusAxis />
        {chart.series.map((item) => (
          <Radar
            isAnimationActive={false}
            key={item.name}
            name={item.name}
            dataKey={chart.key(item.name)}
            stroke={chart.color(item.color)}
            fill={chart.color(item.color)}
            fillOpacity={0.2}
          />
        ))}
      </RadarChart>
    </Chart.Root>
  )
}

```

## Usage

```tsx
import { Chart, useChart } from "@chakra-ui/charts"
import { Radar, RadarChart } from "recharts"
```

```tsx
<Chart.Root>
  <RadarChart>
    <Radar />
  </RadarChart>
</Chart.Root>
```

## Examples

### Lines Only

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { Legend, PolarGrid, Radar, RadarChart } from "recharts"

export const RadarChartLinesOnly = () => {
  const chart = useChart({
    data: [
      { windows: 30, mac: 100, month: "January" },
      { windows: 120, mac: 20, month: "February" },
      { windows: 45, mac: 130, month: "March" },
      { windows: 140, mac: 40, month: "May" },
      { windows: 60, mac: 50, month: "June" },
      { windows: 20, mac: 160, month: "July" },
    ],
    series: [
      { name: "windows", color: "teal.solid" },
      { name: "mac", color: "orange.solid" },
    ],
  })

  return (
    <Chart.Root maxW="sm" chart={chart} mx="auto">
      <RadarChart data={chart.data} responsive>
        <PolarGrid stroke={chart.color("border")} />
        <Legend content={<Chart.Legend />} />
        {chart.series.map((item) => (
          <Radar
            isAnimationActive={false}
            key={item.name}
            name={item.name}
            dataKey={chart.key(item.name)}
            strokeWidth={2}
            stroke={chart.color(item.color)}
            fill="none"
          />
        ))}
      </RadarChart>
    </Chart.Root>
  )
}

```

### Multiple

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { Legend, PolarGrid, Radar, RadarChart } from "recharts"

export const RadarChartMultiple = () => {
  const chart = useChart({
    data: [
      { windows: 30, mac: 100, month: "January" },
      { windows: 120, mac: 20, month: "February" },
      { windows: 45, mac: 130, month: "March" },
      { windows: 140, mac: 40, month: "May" },
      { windows: 60, mac: 50, month: "June" },
      { windows: 20, mac: 160, month: "July" },
    ],
    series: [
      { name: "windows", color: "teal.solid" },
      { name: "mac", color: "orange.solid" },
    ],
  })

  return (
    <Chart.Root maxW="sm" chart={chart} mx="auto">
      <RadarChart data={chart.data} responsive>
        <PolarGrid stroke={chart.color("border")} />
        <Legend content={<Chart.Legend />} />
        {chart.series.map((item) => (
          <Radar
            isAnimationActive={false}
            key={item.name}
            name={item.name}
            dataKey={chart.key(item.name)}
            strokeWidth={2}
            stroke={chart.color(item.color)}
            fill={chart.color(item.color)}
            fillOpacity={0.2}
          />
        ))}
      </RadarChart>
    </Chart.Root>
  )
}

```

### Point Labels

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

export const RadarChartWithPointLabel = () => {
  const chart = useChart({
    data: [
      { windows: 110, month: "January" },
      { windows: 130, month: "February" },
      { windows: 110, month: "March" },
      { windows: 90, month: "May" },
      { windows: 75, month: "June" },
    ],
    series: [{ name: "windows", color: "teal.solid" }],
  })

  return (
    <Chart.Root maxW="sm" chart={chart} mx="auto">
      <RadarChart data={chart.data} responsive>
        <PolarGrid stroke={chart.color("border")} />
        <PolarAngleAxis dataKey={chart.key("month")} tickLine={false} />
        {chart.series.map((item) => (
          <Radar
            isAnimationActive={false}
            key={item.name}
            name={item.name}
            label={{ fill: chart.color("fg") }}
            dataKey={chart.key(item.name)}
            stroke={chart.color(item.color)}
            fill={chart.color(item.color)}
            fillOpacity={0.2}
          />
        ))}
      </RadarChart>
    </Chart.Root>
  )
}

```

### Filled Grid

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

export const RadarChartWithFilledGrid = () => {
  const chart = useChart({
    data: [
      { windows: 110, month: "January" },
      { windows: 130, month: "February" },
      { windows: 110, month: "March" },
      { windows: 90, month: "May" },
      { windows: 75, month: "June" },
    ],
    series: [{ name: "windows", color: "teal.solid" }],
  })

  return (
    <Chart.Root maxW="sm" chart={chart} mx="auto">
      <RadarChart data={chart.data} responsive>
        <PolarGrid
          stroke="none"
          style={{ fill: chart.color("teal.solid"), fillOpacity: 0.1 }}
        />
        <PolarAngleAxis dataKey={chart.key("month")} />
        {chart.series.map((item) => (
          <Radar
            dot={{ fillOpacity: 1 }}
            isAnimationActive={false}
            key={item.name}
            name={item.name}
            dataKey={chart.key(item.name)}
            stroke={chart.color(item.color)}
            fill={chart.color(item.color)}
            fillOpacity={0.2}
          />
        ))}
      </RadarChart>
    </Chart.Root>
  )
}

```

### Circle Grid

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts"

export const RadarChartWithCircleGrid = () => {
  const chart = useChart({
    data: [
      { windows: 120, month: "January" },
      { windows: 120, month: "February" },
      { windows: 80, month: "March" },
      { windows: 140, month: "May" },
      { windows: 60, month: "June" },
    ],
    series: [{ name: "windows", color: "teal.solid" }],
  })

  return (
    <Chart.Root maxW="sm" chart={chart} mx="auto">
      <RadarChart data={chart.data} responsive>
        <PolarGrid stroke={chart.color("border")} gridType="circle" />
        <PolarAngleAxis dataKey={chart.key("month")} />
        <PolarRadiusAxis />
        {chart.series.map((item) => (
          <Radar
            isAnimationActive={false}
            key={item.name}
            name={item.name}
            dataKey={chart.key(item.name)}
            stroke={chart.color(item.color)}
            fill={chart.color(item.color)}
            fillOpacity={0.2}
          />
        ))}
      </RadarChart>
    </Chart.Root>
  )
}

```

### Dots

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

export const RadarChartWithDots = () => {
  const chart = useChart({
    data: [
      { windows: 110, month: "January" },
      { windows: 130, month: "February" },
      { windows: 110, month: "March" },
      { windows: 90, month: "May" },
      { windows: 75, month: "June" },
    ],
    series: [{ name: "windows", color: "teal.solid" }],
  })

  return (
    <Chart.Root maxW="sm" chart={chart} mx="auto">
      <RadarChart data={chart.data} responsive>
        <PolarGrid stroke={chart.color("border")} />
        <PolarAngleAxis dataKey={chart.key("month")} />
        {chart.series.map((item) => (
          <Radar
            dot={{ fillOpacity: 1 }}
            isAnimationActive={false}
            key={item.name}
            name={item.name}
            dataKey={chart.key(item.name)}
            stroke={chart.color(item.color)}
            fill={chart.color(item.color)}
            fillOpacity={0.2}
          />
        ))}
      </RadarChart>
    </Chart.Root>
  )
}

```

### Tooltip

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, Tooltip } from "recharts"

export const RadarChartWithTooltip = () => {
  const chart = useChart({
    data: [
      { windows: 110, month: "January" },
      { windows: 130, month: "February" },
      { windows: 110, month: "March" },
      { windows: 90, month: "May" },
      { windows: 75, month: "June" },
    ],
    series: [{ name: "windows", color: "teal.solid" }],
  })

  return (
    <Chart.Root maxW="sm" chart={chart} mx="auto">
      <RadarChart data={chart.data} responsive>
        <PolarGrid stroke={chart.color("border")} />
        <PolarAngleAxis dataKey={chart.key("month")} />
        <Tooltip content={<Chart.Tooltip />} />
        {chart.series.map((item) => (
          <Radar
            isAnimationActive={false}
            key={item.name}
            name={item.name}
            dataKey={chart.key(item.name)}
            stroke={chart.color(item.color)}
            fill={chart.color(item.color)}
            fillOpacity={0.2}
          />
        ))}
      </RadarChart>
    </Chart.Root>
  )
}

```
