# Area Chart

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
} from "recharts"

export const AreaChartBasic = () => {
  const chart = useChart({
    data: [
      { windows: 186, mac: 80, linux: 120, month: "January" },
      { windows: 165, mac: 95, linux: 110, month: "February" },
      { windows: 190, mac: 87, linux: 125, month: "March" },
      { windows: 195, mac: 88, linux: 130, month: "May" },
      { windows: 182, mac: 98, linux: 122, month: "June" },
      { windows: 175, mac: 90, linux: 115, month: "August" },
      { windows: 180, mac: 86, linux: 124, month: "October" },
      { windows: 185, mac: 91, linux: 126, month: "November" },
    ],
    series: [
      { name: "windows", color: "teal.solid" },
      { name: "mac", color: "purple.solid" },
      { name: "linux", color: "blue.solid" },
    ],
  })

  return (
    <Chart.Root maxH="sm" chart={chart}>
      <AreaChart data={chart.data} responsive>
        <CartesianGrid stroke={chart.color("border.muted")} vertical={false} />
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey={chart.key("month")}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <Tooltip
          cursor={false}
          animationDuration={100}
          content={<Chart.Tooltip />}
        />
        <Legend content={<Chart.Legend />} />
        {chart.series.map((item) => (
          <Area
            key={item.name}
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
            fillOpacity={0.2}
            stroke={chart.color(item.color)}
            stackId="a"
          />
        ))}
      </AreaChart>
    </Chart.Root>
  )
}

```

## Usage

```tsx
import { Chart, useChart } from "@chakra-ui/charts"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
```

```tsx
<Chart.Root>
  <AreaChart>
    <CartesianGrid />
    <XAxis />
    <YAxis />
  </AreaChart>
</Chart.Root>
```

## Examples

### Value Axis

Use the `YAxis` component from `recharts` to display the y-axis.

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { Area, AreaChart, Tooltip, XAxis, YAxis } from "recharts"

export const AreaChartWithValueAxis = () => {
  const chart = useChart({
    data: [
      { windows: 186, mac: 80, linux: 120, month: "January" },
      { windows: 165, mac: 95, linux: 110, month: "February" },
      { windows: 190, mac: 87, linux: 125, month: "March" },
      { windows: 195, mac: 88, linux: 130, month: "May" },
      { windows: 182, mac: 98, linux: 122, month: "June" },
      { windows: 175, mac: 90, linux: 115, month: "August" },
      { windows: 180, mac: 86, linux: 124, month: "October" },
      { windows: 185, mac: 91, linux: 126, month: "November" },
    ],
    series: [
      { name: "windows", color: "teal.solid" },
      { name: "mac", color: "purple.solid" },
      { name: "linux", color: "orange.solid" },
    ],
  })

  return (
    <Chart.Root maxH="sm" chart={chart}>
      <AreaChart
        accessibilityLayer
        data={chart.data}
        margin={{ bottom: 24, left: 24 }}
        responsive
      >
        <XAxis
          dataKey={chart.key("month")}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
          stroke={chart.color("border")}
        />
        <YAxis stroke={chart.color("border")} />
        <Tooltip
          cursor={false}
          animationDuration={100}
          content={<Chart.Tooltip />}
        />
        {chart.series.map((item) => (
          <Area
            type="natural"
            key={item.name}
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
            fillOpacity={0.2}
            stroke={chart.color(item.color)}
            stackId="a"
          />
        ))}
      </AreaChart>
    </Chart.Root>
  )
}

```

### Dashed Area

Set the `strokeDasharray` prop to the `series` you want to display as a dashed
line.

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
} from "recharts"

export const AreaChartWithDashedArea = () => {
  const chart = useChart({
    data: [
      { windows: 186, mac: 80, linux: 120, month: "January" },
      { windows: 165, mac: 95, linux: 110, month: "February" },
      { windows: 190, mac: 87, linux: 125, month: "March" },
      { windows: 195, mac: 88, linux: 130, month: "May" },
      { windows: 182, mac: 98, linux: 122, month: "June" },
      { windows: 175, mac: 90, linux: 115, month: "August" },
      { windows: 180, mac: 86, linux: 124, month: "October" },
      { windows: 185, mac: 91, linux: 126, month: "November" },
    ],
    series: [
      { name: "windows", color: "teal.solid", strokeDasharray: "5 3" },
      { name: "mac", color: "orange.solid" },
      { name: "linux", color: "blue.solid" },
    ],
  })

  return (
    <Chart.Root maxH="sm" chart={chart}>
      <AreaChart data={chart.data} responsive>
        <CartesianGrid stroke={chart.color("border.muted")} vertical={false} />
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey={chart.key("month")}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <Tooltip
          cursor={false}
          animationDuration={100}
          content={<Chart.Tooltip />}
        />
        <Legend content={<Chart.Legend />} />
        {chart.series.map((item) => (
          <Area
            key={item.name}
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
            fillOpacity={0.2}
            stroke={chart.color(item.color)}
            strokeWidth={2}
            strokeDasharray={item.strokeDasharray}
            stackId="a"
          />
        ))}
      </AreaChart>
    </Chart.Root>
  )
}

```

### Gradient Area

Use the `Chart.Gradient` component to create a gradient fill for the area.

> **Note:** The `id` of the gradient must be unique and referenced in the `fill`
> prop of the `Area` component.

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

export const AreaChartWithGradient = () => {
  const chart = useChart({
    data: [
      { windows: 186, mac: 80, linux: 120, month: "January" },
      { windows: 165, mac: 95, linux: 110, month: "February" },
      { windows: 190, mac: 87, linux: 125, month: "March" },
      { windows: 195, mac: 88, linux: 130, month: "May" },
      { windows: 182, mac: 98, linux: 122, month: "June" },
      { windows: 175, mac: 90, linux: 115, month: "August" },
      { windows: 180, mac: 86, linux: 124, month: "October" },
      { windows: 185, mac: 91, linux: 126, month: "November" },
    ],
    series: [
      { name: "windows", color: "teal.solid" },
      { name: "mac", color: "purple.solid" },
      { name: "linux", color: "blue.solid" },
    ],
  })

  return (
    <Chart.Root maxH="sm" chart={chart}>
      <AreaChart data={chart.data} responsive>
        <CartesianGrid
          stroke={chart.color("border")}
          vertical={false}
          strokeDasharray="3 3"
        />
        <XAxis
          dataKey={chart.key("month")}
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis tickLine={false} axisLine={false} />
        <Tooltip
          cursor={false}
          animationDuration={100}
          content={<Chart.Tooltip />}
        />
        <Legend content={<Chart.Legend />} />

        {chart.series.map((item) => (
          <defs key={item.name}>
            <Chart.Gradient
              id={`${item.name}-gradient`}
              stops={[
                { offset: "0%", color: item.color, opacity: 0.3 },
                { offset: "100%", color: item.color, opacity: 0.05 },
              ]}
            />
          </defs>
        ))}

        {chart.series.map((item) => (
          <Area
            key={item.name}
            type="natural"
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            fill={`url(#${item.name}-gradient)`}
            stroke={chart.color(item.color)}
            strokeWidth={2}
            stackId="a"
          />
        ))}
      </AreaChart>
    </Chart.Root>
  )
}

```

### Fill With Value

Use the `Chart.Gradient` component to create a gradient fill that changes from
one color to another based on the value.

```tsx {4-7}
<defs>
  <Chart.Gradient
    id="uv-gradient"
    stops={[
      { offset: "0%", color: "teal.solid", opacity: 1 },
      { offset: "100%", color: "red.solid", opacity: 1 },
    ]}
  />
</defs>
```

When the value is positive, it uses the first color, and when negative, it uses
the second color.

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { name: "Product A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Product B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Product C", uv: -1000, pv: 9800, amt: 2290 },
  { name: "Product D", uv: 500, pv: 3908, amt: 2000 },
  { name: "Product E", uv: -2000, pv: 4800, amt: 2181 },
  { name: "Product F", uv: -250, pv: 3800, amt: 2500 },
  { name: "Product G", uv: 3490, pv: 4300, amt: 2100 },
]

const gradientOffset = () => {
  const max = Math.max(...data.map((i) => i.uv))
  const min = Math.min(...data.map((i) => i.uv))
  if (max <= 0) return 0
  if (min >= 0) return 1
  return max / (max - min)
}

const offset = gradientOffset()

export const AreaChartFillWithValue = () => {
  const chart = useChart({
    data,
    series: [
      { name: "uv", color: "teal.solid" },
      { name: "pv", color: "purple.solid" },
    ],
  })

  return (
    <Chart.Root maxH="sm" chart={chart}>
      <AreaChart data={chart.data} responsive>
        <CartesianGrid strokeDasharray="3 3" stroke={chart.color("border")} />
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey={chart.key("name")}
          tickFormatter={(value) => value.replace("Product ", "")}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tickFormatter={chart.formatNumber({
            style: "currency",
            currency: "USD",
            currencyDisplay: "narrowSymbol",
            notation: "compact",
          })}
        />
        <Tooltip
          cursor={false}
          animationDuration={100}
          content={<Chart.Tooltip />}
        />
        <defs>
          <Chart.Gradient
            id="uv-gradient"
            stops={[
              { offset, color: "teal.solid", opacity: 1 },
              { offset, color: "red.solid", opacity: 1 },
            ]}
          />
        </defs>
        <Area
          type="monotone"
          isAnimationActive={false}
          dataKey={chart.key("uv")}
          fill="url(#uv-gradient)"
          fillOpacity={0.2}
          stroke={chart.color("gray.solid")}
        />
      </AreaChart>
    </Chart.Root>
  )
}

```

### Percent

To render the area chart as a percentage, with value normalized to 100%:

- Set the `stackId` prop on the `Area` component to the same value
- Set the `stackOffset` prop to `expand` on the `AreaChart` component
- Format the y-axis via the `tickFormatter` prop to percentage format

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

export const AreaChartPercent = () => {
  const chart = useChart({
    data: [
      { windows: 186, mac: 80, linux: 120, month: "January" },
      { windows: 165, mac: 95, linux: 110, month: "February" },
      { windows: 190, mac: 87, linux: 125, month: "March" },
      { windows: 195, mac: 88, linux: 130, month: "May" },
      { windows: 182, mac: 98, linux: 122, month: "June" },
      { windows: 175, mac: 90, linux: 115, month: "August" },
      { windows: 180, mac: 86, linux: 124, month: "October" },
      { windows: 185, mac: 91, linux: 126, month: "November" },
    ],
    series: [
      { name: "windows", color: "teal.solid" },
      { name: "mac", color: "purple.solid" },
      { name: "linux", color: "blue.solid" },
    ],
  })

  return (
    <Chart.Root maxH="sm" chart={chart}>
      <AreaChart
        accessibilityLayer
        stackOffset="expand"
        data={chart.data}
        responsive
      >
        <CartesianGrid stroke={chart.color("border")} vertical={false} />
        <XAxis
          dataKey={chart.key("month")}
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickFormatter={chart.formatNumber({ style: "percent" })}
        />
        <Tooltip
          cursor={false}
          animationDuration={100}
          content={<Chart.Tooltip />}
        />
        <Legend content={<Chart.Legend />} />
        {chart.series.map((item) => (
          <Area
            key={item.name}
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
            fillOpacity={0.2}
            stroke={chart.color(item.color)}
            stackId="a"
          />
        ))}
      </AreaChart>
    </Chart.Root>
  )
}

```

### Dots

Set the `dot` prop on the `Area` component to display dots that map to each data
point.

```tsx
<Area dot={{ fill: "red", fillOpacity: 1 }} activeDot={false} />
```

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

export const AreaChartWithDots = () => {
  const chart = useChart({
    data: [
      { windows: 186, mac: 80, linux: 120, month: "January" },
      { windows: 165, mac: 95, linux: 110, month: "February" },
      { windows: 190, mac: 87, linux: 125, month: "March" },
      { windows: 195, mac: 88, linux: 130, month: "May" },
      { windows: 182, mac: 98, linux: 122, month: "June" },
      { windows: 175, mac: 90, linux: 349, month: "August" },
      { windows: 180, mac: 86, linux: 400, month: "October" },
      { windows: 185, mac: 91, linux: 126, month: "November" },
    ],
    series: [
      { name: "windows", color: "teal.solid" },
      { name: "mac", color: "purple.solid" },
      { name: "linux", color: "blue.solid" },
    ],
  })

  return (
    <Chart.Root maxH="sm" chart={chart}>
      <AreaChart data={chart.data} margin={{ right: 20 }} responsive>
        <CartesianGrid stroke={chart.color("border.muted")} vertical={false} />
        <YAxis stroke={chart.color("border")} axisLine={false} />
        <XAxis
          axisLine={false}
          tick={false}
          dataKey={chart.key("month")}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <Tooltip
          cursor={false}
          animationDuration={100}
          content={<Chart.Tooltip />}
        />
        <Legend content={<Chart.Legend />} />

        {chart.series.map((item) => (
          <Area
            key={item.name}
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
            fillOpacity={0.2}
            stroke={chart.color(item.color)}
            stackId="a"
          />
        ))}

        {chart.series.map((item) => (
          <Area
            isAnimationActive={false}
            stackId="b"
            legendType="none"
            tooltipType="none"
            key={item.name}
            dataKey={chart.key(item.name)}
            dot={{ fill: chart.color(item.color), fillOpacity: 1 }}
            activeDot={false}
            fill="none"
            stroke="none"
          />
        ))}
      </AreaChart>
    </Chart.Root>
  )
}

```

### Connect Nulls

Pass the `connectNulls` prop to the `Area` component to connect data points even
when there are `null` values in between. This is useful when you want to show a
continuous line despite missing data points.

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { Box, For, Heading, SimpleGrid } from "@chakra-ui/react"
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis } from "recharts"

export const AreaChartWithNulls = () => {
  const chart = useChart({
    data: [
      { sales: 186, month: "January" },
      { sales: null, month: "February" },
      { sales: 190, month: "March" },
      { sales: 195, month: "May" },
      { sales: null, month: "June" },
      { sales: 175, month: "August" },
      { sales: 180, month: "October" },
      { sales: 185, month: "November" },
      { sales: 300, month: "December" },
    ],
    series: [{ name: "sales", color: "teal.solid" }],
  })

  return (
    <SimpleGrid gap="10" minChildWidth="400px">
      <For each={["false", "true"]}>
        {(connectNulls) => (
          <Box key={connectNulls.toString()}>
            <Heading size="md" mb="4">
              {`<Area connectNulls={${connectNulls.toString()}} />`}
            </Heading>
            <Chart.Root maxH="sm" chart={chart}>
              <AreaChart data={chart.data} responsive>
                <CartesianGrid
                  stroke={chart.color("border.muted")}
                  vertical={false}
                />
                <XAxis
                  axisLine={false}
                  tickLine={false}
                  dataKey={chart.key("month")}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <Tooltip
                  cursor={false}
                  animationDuration={100}
                  content={<Chart.Tooltip />}
                />
                {chart.series.map((item) => (
                  <Area
                    key={item.name}
                    isAnimationActive={false}
                    dataKey={chart.key(item.name)}
                    fill={chart.color(item.color)}
                    fillOpacity={0.2}
                    connectNulls={connectNulls === "true"}
                    stroke={chart.color(item.color)}
                    stackId="a"
                  />
                ))}
              </AreaChart>
            </Chart.Root>
          </Box>
        )}
      </For>
    </SimpleGrid>
  )
}

```

### Reference Line

Use the `ReferenceLine` component from `recharts` to add a reference line to
your chart. A reference line is useful when you want to highlight a specific
value in the chart.

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

export const AreaChartWithReferenceLines = () => {
  const chart = useChart({
    data: [
      { windows: 186, mac: 80, linux: 120, month: "January" },
      { windows: 165, mac: 95, linux: 110, month: "February" },
      { windows: 190, mac: 87, linux: 125, month: "March" },
      { windows: 195, mac: 88, linux: 130, month: "May" },
      { windows: 182, mac: 98, linux: 122, month: "June" },
      { windows: 175, mac: 90, linux: 115, month: "August" },
      { windows: 180, mac: 86, linux: 124, month: "October" },
      { windows: 185, mac: 91, linux: 126, month: "November" },
    ],
    series: [
      { name: "windows", color: "teal.solid" },
      { name: "mac", color: "purple.solid" },
      { name: "linux", color: "blue.solid" },
    ],
  })

  return (
    <Chart.Root maxH="sm" chart={chart}>
      <AreaChart data={chart.data} responsive>
        <CartesianGrid stroke={chart.color("border.muted")} vertical={false} />
        <YAxis stroke={chart.color("border")} />
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey={chart.key("month")}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <Tooltip
          cursor={false}
          animationDuration={100}
          content={<Chart.Tooltip />}
        />
        <Legend content={<Chart.Legend />} />
        <ReferenceLine
          x="August"
          label={{
            value: "Black Friday",
            position: "insideTopRight",
            style: { fill: chart.color("red.fg"), fontWeight: "500" },
          }}
          stroke={chart.color("red.solid")}
        />
        {chart.series.map((item) => (
          <Area
            key={item.name}
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
            fillOpacity={0.2}
            stroke={chart.color(item.color)}
            stackId="a"
          />
        ))}
      </AreaChart>
    </Chart.Root>
  )
}

```

### Reference Area

Use the `ReferenceArea` component from `recharts` to add a reference area to
your chart. A reference area is useful when you want to highlight a specific
range in the chart.

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ReferenceArea,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

export const AreaChartWithReferenceArea = () => {
  const chart = useChart({
    data: [
      { windows: 186, mac: 80, linux: 120, month: "January" },
      { windows: 165, mac: 95, linux: 110, month: "February" },
      { windows: 190, mac: 87, linux: 125, month: "March" },
      { windows: 195, mac: 88, linux: 130, month: "May" },
      { windows: 182, mac: 98, linux: 122, month: "June" },
      { windows: 175, mac: 90, linux: 115, month: "August" },
      { windows: 180, mac: 86, linux: 124, month: "October" },
      { windows: 185, mac: 91, linux: 126, month: "November" },
    ],
    series: [
      { name: "windows", color: "teal.solid" },
      { name: "mac", color: "purple.solid" },
      { name: "linux", color: "blue.solid" },
    ],
  })

  return (
    <Chart.Root maxH="sm" chart={chart}>
      <AreaChart data={chart.data} responsive>
        <CartesianGrid stroke={chart.color("border.muted")} vertical={false} />
        <YAxis stroke={chart.color("border")} />
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey={chart.key("month")}
          tickFormatter={(value) => value.slice(0, 3)}
          ticks={["February", "June"]}
        />
        <Tooltip
          cursor={false}
          animationDuration={100}
          content={<Chart.Tooltip />}
        />
        <Legend content={<Chart.Legend />} />
        <ReferenceLine x="February" stroke={chart.color("red.solid")} />
        <ReferenceLine x="June" stroke={chart.color("red.solid")} />
        <ReferenceArea
          x1="February"
          x2="June"
          fill={chart.color("red.solid")}
          label={{
            position: "insideTop",
            value: "Feb - June '24",
            style: { fill: chart.color("red.fg") },
          }}
          fillOpacity={0.2}
        />
        {chart.series.map((item) => (
          <Area
            key={item.name}
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
            fillOpacity={0.2}
            stroke={chart.color(item.color)}
            stackId="a"
          />
        ))}
      </AreaChart>
    </Chart.Root>
  )
}

```

### Area Types

Recharts provides flexible support for various kinds of area charts.

Below are the different types of area charts you can create:
