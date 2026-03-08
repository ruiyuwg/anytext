# Scatter Chart

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { Scatter, ScatterChart, XAxis, YAxis } from "recharts"

export const ScatterChartBasic = () => {
  const chart = useChart({
    data: [
      { temperature: 14.2, sales: 215 },
      { temperature: 16.4, sales: 325 },
      { temperature: 11.9, sales: 185 },
      { temperature: 15.2, sales: 332 },
      { temperature: 18.5, sales: 406 },
      { temperature: 22.1, sales: 522 },
      { temperature: 19.4, sales: 412 },
      { temperature: 25.1, sales: 614 },
      { temperature: 23.4, sales: 544 },
      { temperature: 18.1, sales: 421 },
      { temperature: 22.6, sales: 445 },
      { temperature: 17.2, sales: 408 },
    ],
    series: [{ name: "sales", color: "teal.solid" }],
  })

  return (
    <Chart.Root maxH="sm" chart={chart}>
      <ScatterChart responsive>
        <XAxis
          type="number"
          dataKey={chart.key("temperature")}
          stroke={chart.color("border")}
          tickFormatter={(value) => `${value}°C`}
          domain={[10, "dataMax + 3"]}
        />
        <YAxis
          type="number"
          dataKey={chart.key("sales")}
          stroke={chart.color("border")}
        />
        {chart.series.map((series, index) => (
          <Scatter
            name={series.name?.toString()}
            key={index}
            data={chart.data}
            fill={chart.color(series.color)}
            isAnimationActive={false}
          />
        ))}
      </ScatterChart>
    </Chart.Root>
  )
}

```

## Usage

```tsx
import { Chart, useChart } from "@chakra-ui/charts"
import { Scatter, ScatterChart, XAxis, YAxis } from "recharts"
```

```tsx
<Chart.Root>
  <ScatterChart>
    <XAxis />
    <YAxis />
    <Scatter />
  </ScatterChart>
</Chart.Root>
```

## Examples

### Multiple

Here's an example of a scatter chart with multiple series.

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { Scatter, ScatterChart, Tooltip, XAxis, YAxis } from "recharts"

export const ScatterChartMultiple = () => {
  const chart = useChart({
    data: [
      { x: 100, y: 200, id: "group1" },
      { x: 120, y: 100, id: "group1" },
      { x: 170, y: 300, id: "group1" },
      { x: 140, y: 250, id: "group1" },
      { x: 150, y: 400, id: "group1" },
      { x: 110, y: 280, id: "group1" },
      { x: 200, y: 260, id: "group2" },
      { x: 240, y: 290, id: "group2" },
      { x: 190, y: 290, id: "group2" },
      { x: 198, y: 250, id: "group2" },
      { x: 180, y: 280, id: "group2" },
      { x: 210, y: 220, id: "group2" },
    ],
    series: [
      { label: "Group 1", color: "blue.solid" },
      { label: "Group 2", color: "green.solid" },
    ],
  })

  const groupedData = chart.groupBy("id")

  return (
    <Chart.Root maxH="sm" chart={chart}>
      <ScatterChart
        margin={{ top: 20, right: 30, bottom: 5, left: 0 }}
        responsive
      >
        <XAxis
          type="number"
          dataKey={chart.key("x")}
          stroke={chart.color("border")}
          domain={["dataMin - 10", "dataMax + 10"]}
        />
        <YAxis
          type="number"
          dataKey={chart.key("y")}
          stroke={chart.color("border")}
        />
        <Tooltip
          cursor={{ strokeDasharray: "3 3" }}
          content={<Chart.Tooltip hideLabel />}
        />
        {chart.series.map((series, index) => (
          <Scatter
            name={series.label?.toString()}
            key={index}
            data={groupedData[index]}
            fill={chart.color(series.color)}
            isAnimationActive={false}
          />
        ))}
      </ScatterChart>
    </Chart.Root>
  )
}

```

### Legend

Render the `Chart.Legend` component to display a legend for the scatter chart.

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { Legend, Scatter, ScatterChart, XAxis, YAxis } from "recharts"

export const ScatterChartLegend = () => {
  const chart = useChart({
    data: [
      { x: 100, y: 200 },
      { x: 120, y: 100 },
      { x: 170, y: 300 },
      { x: 140, y: 250 },
      { x: 150, y: 400 },
      { x: 110, y: 280 },
    ],
    series: [{ label: "Group 1", color: "blue.solid" }],
  })

  return (
    <Chart.Root maxH="sm" chart={chart}>
      <ScatterChart
        margin={{ top: 20, right: 30, bottom: 5, left: 0 }}
        responsive
      >
        <XAxis
          type="number"
          dataKey={chart.key("x")}
          stroke={chart.color("border")}
        />
        <Legend content={<Chart.Legend />} />
        <YAxis
          type="number"
          dataKey={chart.key("y")}
          stroke={chart.color("border")}
        />

        {chart.series.map((series, index) => (
          <Scatter
            name={series.label?.toString()}
            key={index}
            data={chart.data}
            fill={chart.color(series.color)}
            isAnimationActive={false}
          />
        ))}
      </ScatterChart>
    </Chart.Root>
  )
}

```

### Trend Line

Here's an example that shows a trend line on the chart using the least squares
regression method.

To show the trend line, we're using the `Scatter` component from the `recharts`
library.

```tsx
<Scatter data={trendLine} shape={() => <Fragment />} />
```

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { Fragment, useMemo } from "react"
import { Scatter, ScatterChart, XAxis, YAxis } from "recharts"

export const ScatterChartTrendLine = () => {
  const chart = useChart({
    data: [
      { temperature: 14.2, sales: 215 },
      { temperature: 16.4, sales: 325 },
      { temperature: 11.9, sales: 185 },
      { temperature: 15.2, sales: 332 },
      { temperature: 18.5, sales: 406 },
      { temperature: 22.1, sales: 522 },
      { temperature: 19.4, sales: 412 },
      { temperature: 25.1, sales: 614 },
      { temperature: 23.4, sales: 544 },
      { temperature: 18.1, sales: 421 },
      { temperature: 22.6, sales: 445 },
      { temperature: 17.2, sales: 408 },
    ],
    series: [{ name: "sales", color: "teal.solid" }],
  })

  const trendLine = useMemo(() => getTrendLine(chart.data), [chart.data])

  return (
    <Chart.Root maxH="sm" chart={chart}>
      <ScatterChart
        margin={{ top: 20, right: 30, bottom: 5, left: 0 }}
        responsive
      >
        <XAxis
          type="number"
          dataKey={chart.key("temperature")}
          stroke={chart.color("border")}
          domain={[10, "dataMax + 3"]}
        />
        <YAxis
          type="number"
          dataKey={chart.key("sales")}
          stroke={chart.color("border")}
        />
        <Scatter
          isAnimationActive={false}
          line={{ stroke: chart.color("red.solid") }}
          data={trendLine}
          stroke="none"
          strokeWidth={2}
          shape={() => <Fragment />}
        />
        {chart.series.map((series, index) => (
          <Scatter
            name={series.label?.toString()}
            key={index}
            data={chart.data}
            fill={chart.color(series.color)}
            isAnimationActive={false}
          />
        ))}
      </ScatterChart>
    </Chart.Root>
  )
}

interface Item {
  temperature: number
  sales: number
}

function getTrendLine(data: Item[]): [Item, Item] {
  // Calculate means
  const meanX =
    data.reduce((sum, item) => sum + item.temperature, 0) / data.length
  const meanY = data.reduce((sum, item) => sum + item.sales, 0) / data.length

  // Calculate slope using least squares method
  const numerator = data.reduce((sum, item) => {
    return sum + (item.temperature - meanX) * (item.sales - meanY)
  }, 0)

  const denominator = data.reduce((sum, item) => {
    return sum + Math.pow(item.temperature - meanX, 2)
  }, 0)

  const slope = numerator / denominator
  const intercept = meanY - slope * meanX

  // Get min and max x values to draw line endpoints
  const minX = Math.min(...data.map((item) => item.temperature))
  const maxX = Math.max(...data.map((item) => item.temperature))

  // Return two points that define the trend line
  return [
    { temperature: minX, sales: slope * minX + intercept },
    { temperature: maxX, sales: slope * maxX + intercept },
  ]
}

```

### Connect Dots

To draw a line between the dots, pass the `line` prop to the `Scatter`
component.

```tsx
<Scatter line={{ stroke: "red" }} />
```

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { Scatter, ScatterChart, XAxis, YAxis } from "recharts"

export const ScatterChartConnectDots = () => {
  const chart = useChart({
    data: [
      { x: 40, y: 200 },
      { x: 120, y: 100 },
      { x: 170, y: 300 },
      { x: 140, y: 250 },
      { x: 150, y: 400 },
      { x: 110, y: 280 },
    ],
    series: [{ label: "Group 1", color: "teal.solid" }],
  })

  return (
    <Chart.Root maxH="sm" chart={chart}>
      <ScatterChart
        margin={{ top: 20, right: 30, bottom: 5, left: 0 }}
        responsive
      >
        <XAxis
          type="number"
          dataKey={chart.key("x")}
          stroke={chart.color("border")}
        />
        <YAxis
          type="number"
          dataKey={chart.key("y")}
          stroke={chart.color("border")}
        />

        {chart.series.map((series, index) => (
          <Scatter
            line={{ stroke: chart.color("border"), strokeWidth: 2 }}
            name={series.label?.toString()}
            key={index}
            data={chart.data}
            fill={chart.color(series.color)}
            isAnimationActive={false}
          />
        ))}
      </ScatterChart>
    </Chart.Root>
  )
}

```
