# Line Chart

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts"

export const LineChartBasic = () => {
  const chart = useChart({
    data: [
      { sale: 10, month: "January" },
      { sale: 95, month: "February" },
      { sale: 87, month: "March" },
      { sale: 88, month: "May" },
      { sale: 65, month: "June" },
      { sale: 90, month: "August" },
    ],
    series: [{ name: "sale", color: "teal.solid" }],
  })

  return (
    <Chart.Root maxH="sm" chart={chart}>
      <LineChart data={chart.data} responsive>
        <CartesianGrid stroke={chart.color("border")} vertical={false} />
        <XAxis
          axisLine={false}
          dataKey={chart.key("month")}
          tickFormatter={(value) => value.slice(0, 3)}
          stroke={chart.color("border")}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tickMargin={10}
          stroke={chart.color("border")}
        />
        <Tooltip
          animationDuration={100}
          cursor={false}
          content={<Chart.Tooltip />}
        />
        {chart.series.map((item) => (
          <Line
            key={item.name}
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            stroke={chart.color(item.color)}
            strokeWidth={2}
            dot={false}
          />
        ))}
      </LineChart>
    </Chart.Root>
  )
}

```

## Usage

```tsx
import { Chart, useChart } from "@chakra-ui/charts"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
```

```tsx
<Chart.Root>
  <LineChart>
    <CartesianGrid />
    <XAxis />
    <YAxis />
    <Line />
  </LineChart>
</Chart.Root>
```

## Examples

### Axes Label

To add labels to the x and y axes, use the `Label` component from `recharts`.

```tsx
<XAxis axisLine={false} label={{ value: "X Axis", position: "bottom" }} />
<YAxis axisLine={false} label={{ value: "Y Axis", position: "left", angle: -90 }} />
```

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts"

export const LineChartAxesLabel = () => {
  const chart = useChart({
    data: [
      { Customers: 10, month: "January" },
      { Customers: 95, month: "February" },
      { Customers: 87, month: "March" },
      { Customers: 88, month: "May" },
      { Customers: 65, month: "June" },
      { Customers: 90, month: "August" },
    ],
    series: [{ name: "Customers", color: "teal.solid" }],
  })

  return (
    <Chart.Root maxH="sm" chart={chart}>
      <LineChart data={chart.data} responsive>
        <CartesianGrid stroke={chart.color("border")} vertical={false} />
        <XAxis
          axisLine={false}
          dataKey={chart.key("month")}
          tickFormatter={(value) => value.slice(0, 3)}
          stroke={chart.color("border")}
          label={{ value: "Month", position: "bottom" }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tickMargin={10}
          stroke={chart.color("border")}
          label={{ value: "Customers", position: "left", angle: -90 }}
        />
        <Tooltip
          animationDuration={100}
          cursor={false}
          content={<Chart.Tooltip />}
        />
        {chart.series.map((item) => (
          <Line
            key={item.name}
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            stroke={chart.color(item.color)}
            strokeWidth={2}
            dot={false}
          />
        ))}
      </LineChart>
    </Chart.Root>
  )
}

```

### No Dots

Set `dot` and `activeDot` to `false` to hide the dots completely.

```tsx
<Line dot={false} activeDot={false} />
```

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

export const LineChartNoDots = () => {
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
      <LineChart data={chart.data} responsive>
        <CartesianGrid stroke={chart.color("border")} vertical={false} />
        <XAxis
          axisLine={false}
          dataKey={chart.key("month")}
          tickFormatter={(value) => value.slice(0, 3)}
          stroke={chart.color("border")}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tickMargin={10}
          dataKey={chart.key("windows")}
          stroke={chart.color("border")}
        />
        <Tooltip
          animationDuration={100}
          cursor={{ stroke: chart.color("border") }}
          content={<Chart.Tooltip />}
        />
        <Legend verticalAlign="top" align="right" content={<Chart.Legend />} />
        {chart.series.map((item) => (
          <Line
            key={item.name}
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            strokeWidth={2}
            stroke={chart.color(item.color)}
            dot={false}
            activeDot={false}
          />
        ))}
      </LineChart>
    </Chart.Root>
  )
}

```

### Point Labels

Render the `LabelList` component from `recharts` inside the `Line` component to
show labels at each data point.

```tsx
<Line>
  <LabelList position="right" offset={10} />
</Line>
```

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import {
  CartesianGrid,
  LabelList,
  Line,
  LineChart,
  Tooltip,
  XAxis,
} from "recharts"

export const LineChartWithPointLabel = () => {
  const chart = useChart({
    data: [
      { name: "Jan", uv: 400 },
      { name: "Feb", uv: 300 },
      { name: "Mar", uv: 200 },
      { name: "Apr", uv: 278 },
      { name: "May", uv: 189 },
      { name: "Jun", uv: 239 },
      { name: "Jul", uv: 349 },
    ],
  })

  return (
    <Chart.Root maxH="md" chart={chart}>
      <LineChart
        data={chart.data}
        margin={{ left: 40, right: 40, top: 40 }}
        responsive
      >
        <CartesianGrid
          stroke={chart.color("border")}
          strokeDasharray="3 3"
          horizontal={false}
        />
        <XAxis
          dataKey={chart.key("name")}
          tickFormatter={(value) => value.slice(0, 3)}
          stroke={chart.color("border")}
        />
        <Tooltip
          animationDuration={100}
          cursor={{ stroke: chart.color("border") }}
          content={<Chart.Tooltip hideLabel />}
        />
        <Line
          isAnimationActive={false}
          dataKey={chart.key("uv")}
          fill={chart.color("teal.solid")}
          stroke={chart.color("teal.solid")}
          strokeWidth={2}
        >
          <LabelList
            dataKey={chart.key("uv")}
            position="right"
            offset={10}
            style={{
              fontWeight: "600",
              fill: chart.color("fg"),
            }}
          />
        </Line>
      </LineChart>
    </Chart.Root>
  )
}

```

### Gradient

Use the `Chart.Gradient` component to create a gradient. Ensure the `id` is
unique and used in the `stroke` prop of the `Line` component.

```tsx
<defs>
  <Chart.Gradient id="custom-gradient" stops={[]} />
</defs>
<Line stroke="url(#custom-gradient)" />
```

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts"

export const LineChartWithGradient = () => {
  const chart = useChart({
    data: [
      { temp: -20, month: "January" },
      { temp: -10, month: "February" },
      { temp: 0, month: "March" },
      { temp: 10, month: "May" },
      { temp: 20, month: "June" },
      { temp: 4, month: "August" },
      { temp: 40, month: "October" },
      { temp: -10, month: "November" },
    ],
    series: [{ name: "temp", color: "teal.solid" }],
  })

  return (
    <Chart.Root maxH="sm" chart={chart}>
      <LineChart data={chart.data} responsive>
        <CartesianGrid stroke={chart.color("border")} vertical={false} />
        <XAxis
          axisLine={false}
          dataKey={chart.key("month")}
          tickFormatter={(value) => value.slice(0, 3)}
          stroke={chart.color("border")}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tickMargin={10}
          dataKey={chart.key("temp")}
          stroke={chart.color("border")}
        />
        <Tooltip
          animationDuration={100}
          cursor={{ stroke: chart.color("border") }}
          content={<Chart.Tooltip hideIndicator />}
        />
        <defs>
          <Chart.Gradient
            id="lc-gradient"
            stops={[
              { offset: "0%", color: "teal.solid" },
              { offset: "20%", color: "purple.solid" },
              { offset: "40%", color: "orange.solid" },
              { offset: "75%", color: "green.solid" },
              { offset: "100%", color: "red.solid" },
            ]}
          />
        </defs>
        {chart.series.map((item) => (
          <Line
            key={item.name}
            isAnimationActive={false}
            type="natural"
            dataKey={chart.key(item.name)}
            fill="none"
            stroke="url(#lc-gradient)"
            r={2}
            dot={{
              stroke: chart.color("bg"),
              fill: chart.color("fg"),
              strokeWidth: 1,
            }}
            activeDot={{
              stroke: chart.color("bg"),
              fill: chart.color("fg"),
              strokeWidth: 1,
              r: 4,
            }}
            strokeWidth={4}
          />
        ))}
      </LineChart>
    </Chart.Root>
  )
}

```

### Dashed

Set the `strokeDasharray` prop in the `series` object to create a dashed line.

```ts /strokeDasharray: "5 5"/
const chart = useChart({
  data: [
    { windows: 186, mac: 165, month: "January" },
    //...
  ],
  series: [
    { name: "windows", color: "teal.solid", strokeDasharray: "5 5" },
    { name: "mac", color: "purple.solid" },
  ],
})
```

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts"

export const LineChartWithDashed = () => {
  const chart = useChart({
    data: [
      { windows: 186, mac: 165, month: "January" },
      { windows: 165, mac: 155, month: "February" },
      { windows: 190, mac: 175, month: "March" },
      { windows: 195, mac: 180, month: "May" },
      { windows: 182, mac: 170, month: "June" },
      { windows: 175, mac: 160, month: "August" },
      { windows: 180, mac: 165, month: "October" },
      { windows: 185, mac: 170, month: "November" },
    ],
    series: [
      { name: "windows", color: "teal.solid", strokeDasharray: "5 5" },
      { name: "mac", color: "purple.solid" },
    ],
  })

  return (
    <Chart.Root maxH="sm" chart={chart}>
      <LineChart
        data={chart.data}
        margin={{ left: 40, right: 40, top: 40 }}
        responsive
      >
        <CartesianGrid
          stroke={chart.color("border")}
          strokeDasharray="3 3"
          horizontal={false}
        />
        <XAxis
          dataKey={chart.key("month")}
          tickFormatter={(value) => value.slice(0, 3)}
          stroke={chart.color("border")}
        />
        <YAxis
          dataKey={chart.key("windows")}
          stroke={chart.color("border")}
          domain={[140, "dataMax"]}
        />
        <Tooltip
          animationDuration={100}
          cursor={{ stroke: chart.color("border") }}
          content={<Chart.Tooltip hideLabel />}
        />
        {chart.series.map((item) => (
          <Line
            key={item.name}
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            stroke={chart.color(item.color)}
            fill={chart.color(item.color)}
            dot={{ strokeDasharray: "0" }}
            strokeWidth={2}
            strokeDasharray={item.strokeDasharray}
          />
        ))}
      </LineChart>
    </Chart.Root>
  )
}

```

### Multiple

Here's an example of a line chart with multiple series.

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

export const LineChartMultiple = () => {
  const chart = useChart({
    data: [
      { mac: 10, linux: 120, month: "January" },
      { mac: 95, linux: 110, month: "February" },
      { mac: 87, linux: 125, month: "March" },
      { mac: 88, linux: 30, month: "May" },
      { mac: 98, linux: 122, month: "June" },
      { mac: 90, linux: 15, month: "August" },
    ],
    series: [
      { name: "mac", color: "purple.solid" },
      { name: "linux", color: "blue.solid" },
    ],
  })

  return (
    <Chart.Root maxH="sm" chart={chart}>
      <LineChart data={chart.data} responsive>
        <CartesianGrid stroke={chart.color("border")} vertical={false} />
        <XAxis
          axisLine={false}
          dataKey={chart.key("month")}
          tickFormatter={(value) => value.slice(0, 3)}
          stroke={chart.color("border")}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tickMargin={10}
          stroke={chart.color("border")}
        />
        <Tooltip
          animationDuration={100}
          cursor={false}
          content={<Chart.Tooltip />}
        />
        <Legend content={<Chart.Legend />} />
        {chart.series.map((item) => (
          <Line
            key={item.name}
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
            stroke={chart.color(item.color)}
            strokeWidth={2}
          />
        ))}
      </LineChart>
    </Chart.Root>
  )
}

```

### Legend Interaction

Adding interactivity to the chart legends make it come to life. To enable this
feature, set the `interaction` prop to `"hover"` or `"click"` in the
`Chart.Legend` component.

```tsx
<Chart.Legend interaction="hover" />
```

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { HStack, VStack } from "@chakra-ui/react"
import { LuArrowUp } from "react-icons/lu"
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

export const LineChartLegendInteraction = () => {
  const chart = useChart({
    data: [
      { mac: 10, linux: 120, month: "January" },
      { mac: 95, linux: 110, month: "February" },
      { mac: 87, linux: 125, month: "March" },
      { mac: 88, linux: 30, month: "May" },
      { mac: 98, linux: 122, month: "June" },
      { mac: 90, linux: 15, month: "August" },
    ],
    series: [
      { name: "mac", color: "teal.solid" },
      { name: "linux", color: "purple.solid" },
    ],
  })

  return (
    <Container>
      <Chart.Root maxH="sm" chart={chart}>
        <LineChart data={chart.data} responsive>
          <CartesianGrid stroke={chart.color("border")} vertical={false} />
          <XAxis
            axisLine={false}
            dataKey={chart.key("month")}
            tickFormatter={(value) => value.slice(0, 3)}
            stroke={chart.color("border")}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickMargin={10}
            stroke={chart.color("border")}
          />
          <Tooltip
            animationDuration={100}
            cursor={false}
            content={<Chart.Tooltip />}
          />
          <Legend content={<Chart.Legend interaction="hover" />} />
          {chart.series.map((item) => (
            <Line
              key={item.name}
              isAnimationActive={false}
              dataKey={chart.key(item.name)}
              stroke={chart.color(item.color)}
              strokeWidth={2}
              fill={chart.color("bg")}
              opacity={chart.getSeriesOpacity(item.name)}
            />
          ))}
        </LineChart>
      </Chart.Root>
    </Container>
  )
}

const Container = (props: React.PropsWithChildren) => {
  const { children } = props
  return (
    <VStack pos="relative" gap="4">
      {children}
      <HStack
        textStyle="xs"
        bottom="1"
        color="teal.fg"
        animation="slide-to-top 1s infinite"
      >
        Hover on "mac" <LuArrowUp />
      </HStack>
    </VStack>
  )
}

```

### Start and End Tick

By default, the chart shows the label for each tick. To show just the start and
end ticks, pass the `ticks` prop to the `XAxis` component from `recharts`.

> You can optionally pass a `label` prop to the `XAxis` component to show a
> label at the bottom of the axis.

```tsx
<XAxis
  ticks={["January", "August"]}
  label={{ value: "[January - August] Customers", position: "bottom" }}
/>
```

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

export const LineChartStartEndTick = () => {
  const chart = useChart({
    data: [
      { sale: 10, month: "January" },
      { sale: 95, month: "February" },
      { sale: 87, month: "March" },
      { sale: 88, month: "May" },
      { sale: 65, month: "June" },
      { sale: 90, month: "August" },
    ],
    series: [{ name: "sale", color: "teal.solid" }],
  })

  return (
    <Chart.Root maxH="sm" chart={chart}>
      <LineChart data={chart.data} responsive>
        <CartesianGrid stroke={chart.color("border")} vertical={false} />
        <XAxis
          axisLine={false}
          dataKey={chart.key("month")}
          tickFormatter={(value) => value.slice(0, 3)}
          stroke={chart.color("border")}
          ticks={[chart.data[0].month, chart.data[chart.data.length - 1].month]}
          label={{
            value: "[January - August] Customers",
            position: "bottom",
          }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tickMargin={10}
          stroke={chart.color("border")}
        />
        {chart.series.map((item) => (
          <Line
            type="natural"
            key={item.name}
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            stroke={chart.color(item.color)}
            strokeWidth={2}
            dot={false}
          />
        ))}
      </LineChart>
    </Chart.Root>
  )
}

```

### Value Formatter

To format the value axis ticks, pass the `tickFormatter` prop to the `YAxis`
component from `recharts`.

```tsx
<YAxis
  tickFormatter={chart.formatNumber({
    style: "currency",
    currency: "USD",
    notation: "compact",
  })}
/>
```

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts"

export const LineChartValueFormatter = () => {
  const chart = useChart({
    data: [
      { revenue: 10000, month: "January" },
      { revenue: 95000, month: "February" },
      { revenue: 87000, month: "March" },
      { revenue: 88000, month: "May" },
      { revenue: 65000, month: "June" },
      { revenue: 90000, month: "August" },
    ],
    series: [{ name: "revenue", color: "teal.solid" }],
  })

  return (
    <Chart.Root maxH="sm" chart={chart}>
      <LineChart data={chart.data} responsive>
        <CartesianGrid stroke={chart.color("border")} vertical={false} />
        <XAxis
          axisLine={false}
          dataKey={chart.key("month")}
          tickFormatter={(value) => value.slice(0, 3)}
          stroke={chart.color("border")}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tickMargin={10}
          stroke={chart.color("border")}
          tickFormatter={chart.formatNumber({
            style: "currency",
            currency: "USD",
            notation: "compact",
          })}
        />
        <Tooltip
          animationDuration={100}
          cursor={false}
          content={<Chart.Tooltip />}
        />
        {chart.series.map((item) => (
          <Line
            key={item.name}
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            stroke={chart.color(item.color)}
            strokeWidth={2}
            dot={false}
          />
        ))}
      </LineChart>
    </Chart.Root>
  )
}

```

### Biaxial

Use the `yAxisId` prop in the `series` object and `YAxis` component to create a
chart with two y-axes.

```tsx
<YAxis yAxisId="left" />
<YAxis yAxisId="right" orientation="right" />
```

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import {
  CartesianGrid,
  Label,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

export const LineChartBiaxial = () => {
  const chart = useChart({
    data: [
      { windows: 186, mac: 20, month: "January" },
      { windows: 165, mac: 45, month: "February" },
      { windows: 190, mac: 37, month: "March" },
      { windows: 195, mac: 28, month: "May" },
      { windows: 182, mac: 48, month: "June" },
      { windows: 175, mac: 30, month: "August" },
      { windows: 180, mac: 26, month: "October" },
      { windows: 185, mac: 41, month: "November" },
    ],
    series: [
      { name: "windows", color: "teal.solid", yAxisId: "left" },
      { name: "mac", color: "purple.solid", yAxisId: "right" },
    ],
  })

  return (
    <Chart.Root maxH="sm" chart={chart}>
      <LineChart
        data={chart.data}
        margin={{ left: 20, bottom: 20, right: 20, top: 20 }}
        responsive
      >
        <CartesianGrid stroke={chart.color("border")} vertical={false} />
        <XAxis
          axisLine={false}
          dataKey={chart.key("month")}
          tickFormatter={(value) => value.slice(0, 3)}
          stroke={chart.color("border")}
        >
          <Label value="Month" position="bottom" />
        </XAxis>
        <YAxis
          axisLine={false}
          tickLine={false}
          tickMargin={10}
          yAxisId="left"
          dataKey={chart.key("windows")}
          stroke={chart.color("border")}
        >
          <Label value="Windows" position="left" angle={-90} offset={-10} />
        </YAxis>
        <YAxis
          axisLine={false}
          tickLine={false}
          tickMargin={10}
          yAxisId="right"
          orientation="right"
          dataKey={chart.key("mac")}
          stroke={chart.color("border")}
        >
          <Label value="Mac" position="right" angle={90} offset={-10} />
        </YAxis>
        <Tooltip
          animationDuration={100}
          cursor={{ stroke: chart.color("border") }}
          content={<Chart.Tooltip />}
        />
        <Legend
          verticalAlign="top"
          align="right"
          wrapperStyle={{ marginTop: -20, marginRight: 20 }}
          content={<Chart.Legend />}
        />
        {chart.series.map((item) => (
          <Line
            yAxisId={item.yAxisId}
            key={item.name}
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
            stroke={chart.color(item.color)}
            strokeWidth={2}
          />
        ))}
      </LineChart>
    </Chart.Root>
  )
}

```

### Custom Tooltip

In event you need to customize the tooltip entirely, replace the `Chart.Tooltip`
component with your own. The basic signature of a custom tooltip looks like:

```tsx
function CustomTooltip(props: TooltipProps<string, string>) {
  const { active, payload, label } = props
  if (!active || !payload || payload.length === 0) return null

  return <Box>{/* Your custom tooltip content */}</Box>
}
```

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { Box, HStack, Stack, Text } from "@chakra-ui/react"
import type { TooltipContentProps } from "recharts"
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts"

function CustomTooltip(props: Partial<TooltipContentProps<string, string>>) {
  const { active, payload, label } = props
  if (!active || !payload || payload.length === 0) return null
  return (
    <Box w="40" rounded="sm" bg="teal.subtle" p="3">
      <HStack>
        <span>{label} Customers</span>
      </HStack>
      <Stack>
        {payload.map((item) => (
          <HStack key={item.name}>
            <Box boxSize="2" bg={item.color} />
            <Text textStyle="xl">{item.value}</Text>
          </HStack>
        ))}
      </Stack>
    </Box>
  )
}

export const LineChartCustomTooltip = () => {
  const chart = useChart({
    data: [
      { Customers: 10, month: "January" },
      { Customers: 95, month: "February" },
      { Customers: 87, month: "March" },
      { Customers: 88, month: "May" },
      { Customers: 65, month: "June" },
      { Customers: 90, month: "August" },
    ],
    series: [{ name: "Customers", color: "teal.solid" }],
  })

  return (
    <Chart.Root maxH="sm" chart={chart}>
      <LineChart data={chart.data} responsive>
        <CartesianGrid stroke={chart.color("border")} vertical={false} />
        <XAxis
          axisLine={false}
          dataKey={chart.key("month")}
          tickFormatter={(value) => value.slice(0, 3)}
          stroke={chart.color("border")}
          label={{ value: "Month", position: "bottom" }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tickMargin={10}
          stroke={chart.color("border")}
          label={{ value: "Customers", position: "left", angle: -90 }}
        />
        <Tooltip
          animationDuration={100}
          cursor={false}
          content={<CustomTooltip />}
        />
        {chart.series.map((item) => (
          <Line
            key={item.name}
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            stroke={chart.color(item.color)}
            strokeWidth={2}
            dot={false}
          />
        ))}
      </LineChart>
    </Chart.Root>
  )
}

```

### Series Label

To add a custom label to the series, set the `label` prop in the `series`
object.

```tsx /label: "Mac sales"/ /label: "Linux sales"/
const chart = useChart({
  data: [
    { mac: 10, linux: 120, month: "January" },
    //...
  ],
  series: [
    { name: "mac", label: "Mac sales", color: "purple.solid" },
    { name: "linux", label: "Linux sales", color: "blue.solid" },
  ],
})
```

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

export const LineChartWithSeriesLabel = () => {
  const chart = useChart({
    data: [
      { mac: 10, linux: 120, month: "January" },
      { mac: 95, linux: 110, month: "February" },
      { mac: 87, linux: 125, month: "March" },
      { mac: 88, linux: 30, month: "May" },
      { mac: 98, linux: 122, month: "June" },
      { mac: 90, linux: 15, month: "August" },
    ],
    series: [
      { name: "mac", label: "Mac sales", color: "purple.solid" },
      { name: "linux", label: "Linux sales", color: "blue.solid" },
    ],
  })

  return (
    <Chart.Root maxH="sm" chart={chart}>
      <LineChart data={chart.data} responsive>
        <CartesianGrid stroke={chart.color("border")} vertical={false} />
        <XAxis
          axisLine={false}
          dataKey={chart.key("month")}
          tickFormatter={(value) => value.slice(0, 3)}
          stroke={chart.color("border")}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tickMargin={10}
          stroke={chart.color("border")}
        />
        <Tooltip
          animationDuration={100}
          cursor={false}
          content={<Chart.Tooltip />}
        />
        <Legend content={<Chart.Legend />} />
        {chart.series.map((item) => (
          <Line
            key={item.name}
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            stroke={chart.color(item.color)}
            strokeWidth={2}
          />
        ))}
      </LineChart>
    </Chart.Root>
  )
}

```

### Reference Point

Use the reference components from `recharts` to highlight a specific data point.

```tsx
<ReferenceDot x="August" y={110} r={6} />
<ReferenceLine y={110} label={{ value: "Target", position: "top" }} />
```

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ReferenceDot,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

export const LineChartWithReferencePoint = () => {
  const chart = useChart({
    data: [
      { thisYear: 10, lastYear: 4, month: "January" },
      { thisYear: 95, lastYear: 50, month: "February" },
      { thisYear: 87, lastYear: 59, month: "March" },
      { thisYear: 88, lastYear: 60, month: "May" },
      { thisYear: 65, lastYear: 50, month: "June" },
      { thisYear: 90, lastYear: 50, month: "August" },
      { thisYear: null, lastYear: 89, month: "October" },
      { thisYear: null, lastYear: 120, month: "November" },
      { thisYear: null, lastYear: 80, month: "December" },
    ],
    series: [
      { name: "thisYear", color: "teal.solid", label: "This Year" },
      { name: "lastYear", color: "gray.emphasized", label: "Last Year" },
    ],
  })

  const latest = chart.data.findLast((item) => item.thisYear !== null)

  return (
    <Chart.Root maxH="sm" chart={chart}>
      <LineChart data={chart.data} responsive>
        <CartesianGrid stroke={chart.color("border")} vertical={false} />
        <XAxis
          axisLine={false}
          dataKey={chart.key("month")}
          tickFormatter={(value) => value.slice(0, 3)}
          stroke={chart.color("border")}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tickMargin={10}
          stroke={chart.color("border")}
        />
        <Tooltip
          animationDuration={100}
          cursor={false}
          content={<Chart.Tooltip />}
        />
        <ReferenceDot
          x={latest?.month}
          y={latest?.thisYear}
          r={6}
          fill={chart.color("teal.solid")}
          stroke={chart.color("bg")}
        />
        <ReferenceLine
          y={110}
          stroke={chart.color("purple.fg")}
          strokeDasharray="5 5"
          label={{
            value: "Target",
            position: "top",
            fill: chart.color("purple.fg"),
            offset: 10,
          }}
        />
        <Legend content={<Chart.Legend />} />
        {chart.series.map((item) => (
          <Line
            key={item.name}
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            stroke={chart.color(item.color)}
            strokeWidth={2}
            dot={false}
          />
        ))}
      </LineChart>
    </Chart.Root>
  )
}

```

### Value Domain

Pass the `domain` prop to the `YAxis` component to set the domain (upper and
lower bounds) of the value axis.

```tsx /domain: [0, 100]/
<YAxis domain={[0, 100]} />
```

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts"

export const LineChartWithValueDomain = () => {
  const chart = useChart({
    data: [
      { sales: 186, month: "January" },
      { sales: 190, month: "March" },
      { sales: 195, month: "May" },
      { sales: 175, month: "August" },
      { sales: 180, month: "October" },
    ],
    series: [{ name: "sales", color: "teal.solid" }],
  })

  return (
    <Chart.Root maxH="sm" chart={chart}>
      <LineChart data={chart.data} responsive>
        <CartesianGrid
          stroke={chart.color("border")}
          strokeDasharray="3 3"
          horizontal={false}
        />
        <XAxis
          dataKey={chart.key("month")}
          tickFormatter={(value) => value.slice(0, 3)}
          stroke={chart.color("border")}
        />
        <YAxis
          dataKey={chart.key("sales")}
          stroke={chart.color("border")}
          domain={[160, "dataMax + 10"]}
        />
        <Tooltip
          animationDuration={100}
          cursor={{ stroke: chart.color("border") }}
          content={<Chart.Tooltip hideLabel />}
        />
        {chart.series.map((item) => (
          <Line
            type="natural"
            key={item.name}
            connectNulls
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            stroke={chart.color(item.color)}
            fill={chart.color(item.color)}
            dot={{ strokeDasharray: "0" }}
            strokeWidth={4}
          />
        ))}
      </LineChart>
    </Chart.Root>
  )
}

```

### Connect Nulls

To connect the null values, set the `connectNulls` prop to `true` in the `Line`
component.

```tsx
<Line connectNulls />
```

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts"

export const LineChartWithNulls = () => {
  const chart = useChart({
    data: [
      { sales: 186, month: "January" },
      { sales: null, month: "February" },
      { sales: 190, month: "March" },
      { sales: 195, month: "May" },
      { sales: null, month: "June" },
      { sales: 175, month: "August" },
      { sales: 180, month: "October" },
    ],
    series: [{ name: "sales", color: "teal.solid" }],
  })

  return (
    <Chart.Root maxH="sm" chart={chart}>
      <LineChart
        data={chart.data}
        margin={{ left: 40, right: 40, top: 40 }}
        responsive
      >
        <CartesianGrid
          stroke={chart.color("border")}
          strokeDasharray="3 3"
          horizontal={false}
        />
        <XAxis
          dataKey={chart.key("month")}
          tickFormatter={(value) => value.slice(0, 3)}
          stroke={chart.color("border")}
        />
        <YAxis
          dataKey={chart.key("sales")}
          stroke={chart.color("border")}
          domain={[140, "dataMax"]}
        />
        <Tooltip
          animationDuration={100}
          cursor={{ stroke: chart.color("border") }}
          content={<Chart.Tooltip hideLabel />}
        />
        {chart.series.map((item) => (
          <Line
            key={item.name}
            connectNulls
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            stroke={chart.color(item.color)}
            fill={chart.color(item.color)}
            dot={{ strokeDasharray: "0" }}
            strokeWidth={2}
            strokeDasharray={item.strokeDasharray}
          />
        ))}
      </LineChart>
    </Chart.Root>
  )
}

```

### Composition

Here's an example of composing the `Card`, `State` and `Chart` components
together to create a stunning visualization.

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { Card, ColorSwatch, HStack, Stat } from "@chakra-ui/react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

export const LineChartComposition = () => {
  const chart = useChart({
    data: [
      { facebookAds: 20, organic: 20, googleAds: 45, month: "January" },
      { facebookAds: 35, organic: 92, googleAds: 52, month: "February" },
      { facebookAds: 48, organic: 78, googleAds: 20, month: "March" },
      { facebookAds: 65, organic: 82, googleAds: 75, month: "May" },
      { facebookAds: 72, organic: 95, googleAds: 40, month: "June" },
      { facebookAds: 85, organic: 20, googleAds: 95, month: "August" },
    ],
    series: [
      { name: "facebookAds", color: "blue.solid", label: "Facebook Ads" },
      { name: "organic", color: "green.solid", label: "Organic" },
      { name: "googleAds", color: "pink.solid", label: "Google Ads" },
    ],
  })

  return (
    <Card.Root maxW="lg">
      <Card.Header>
        <Card.Title>Customers by channel</Card.Title>
      </Card.Header>
      <Card.Body>
        <Chart.Root maxH="8rem" chart={chart}>
          <LineChart data={chart.data} responsive>
            <CartesianGrid stroke={chart.color("border")} vertical={false} />
            <XAxis
              axisLine={false}
              dataKey={chart.key("month")}
              tickFormatter={(value) => value.slice(0, 3)}
              ticks={[
                chart.data[0].month,
                chart.data[chart.data.length - 1].month,
              ]}
              stroke={chart.color("border")}
            />
            {chart.series.map((item) => (
              <Line
                key={item.name}
                isAnimationActive={false}
                dataKey={chart.key(item.name)}
                stroke={chart.color(item.color)}
                strokeWidth={2}
                dot={false}
              />
            ))}
          </LineChart>
        </Chart.Root>

        <HStack wrap="wrap" gap="2">
          {chart.series.map((item) => (
            <Stat.Root key={item.name} size="sm">
              <Stat.Label textStyle="xs">
                <ColorSwatch boxSize="2" value={chart.color(item.color)} />
                {item.label}
              </Stat.Label>
              <Stat.ValueText fontWeight="medium">
                {item.name ? chart.getTotal(item.name) : "-"}
              </Stat.ValueText>
            </Stat.Root>
          ))}
        </HStack>
      </Card.Body>
    </Card.Root>
  )
}

```

### Line Types

Recharts provides flexible support for various kinds of line charts.

Below are the different types of line charts you can create:
