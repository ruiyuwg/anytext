# Bar Chart

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

export const BarChartBasic = () => {
  const chart = useChart({
    data: [
      { allocation: 60, type: "Stock" },
      { allocation: 45, type: "Crypto" },
      { allocation: 12, type: "ETF" },
      { allocation: 4, type: "Cash" },
    ],
    series: [{ name: "allocation", color: "teal.solid" }],
  })

  return (
    <Chart.Root maxH="sm" chart={chart}>
      <BarChart data={chart.data} responsive>
        <CartesianGrid stroke={chart.color("border.muted")} vertical={false} />
        <XAxis axisLine={false} tickLine={false} dataKey={chart.key("type")} />
        <YAxis
          axisLine={false}
          tickLine={false}
          domain={[0, 100]}
          tickFormatter={(value) => `${value}%`}
        />
        {chart.series.map((item) => (
          <Bar
            key={item.name}
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
          />
        ))}
      </BarChart>
    </Chart.Root>
  )
}

```

## Usage

```tsx
import { Chart, useChart } from "@chakra-ui/charts"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
```

```tsx
<Chart.Root>
  <BarChart>
    <CartesianGrid />
    <XAxis />
    <YAxis />
    <Bar />
  </BarChart>
</Chart.Root>
```

## Examples

### Bar color

Here's an example of coloring the bars based on the data.

> Use the `shape` prop on the `Bar` component to customize the fill color for
> each bar.

```tsx
<Bar
  dataKey="allocation"
  shape={(props) => <Rectangle {...props} fill="red" />}
/>
```

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { Bar, BarChart, CartesianGrid, Rectangle, XAxis, YAxis } from "recharts"

export const BarChartBarColor = () => {
  const chart = useChart({
    data: [
      { allocation: 60, type: "Stock", color: "red.solid" },
      { allocation: 45, type: "Crypto", color: "blue.solid" },
      { allocation: 12, type: "ETF", color: "green.solid" },
      { allocation: 4, type: "Cash", color: "yellow.solid" },
    ],
  })

  return (
    <Chart.Root maxH="sm" chart={chart}>
      <BarChart data={chart.data} responsive>
        <CartesianGrid stroke={chart.color("border.muted")} vertical={false} />
        <XAxis axisLine={false} tickLine={false} dataKey={chart.key("type")} />
        <YAxis
          axisLine={false}
          tickLine={false}
          domain={[0, 100]}
          tickFormatter={(value) => `${value}%`}
        />
        <Bar
          isAnimationActive={false}
          dataKey={chart.key("allocation")}
          shape={(props) => (
            <Rectangle {...props} fill={chart.color(props.payload!.color)} />
          )}
        />
      </BarChart>
    </Chart.Root>
  )
}

```

### Bar Label

Render the `LabelList` component from `recharts` to display the label of the
bar.

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  Legend,
  Tooltip,
  XAxis,
} from "recharts"

export const BarChartWithBarLabel = () => {
  const chart = useChart({
    data: [
      { windows: 186, mac: 80, linux: 120, month: "January" },
      { windows: 165, mac: 95, linux: 110, month: "February" },
      { windows: 190, mac: 87, linux: 125, month: "March" },
      { windows: 195, mac: 88, linux: 130, month: "May" },
    ],
    series: [
      { name: "windows", color: "teal.solid" },
      { name: "mac", color: "purple.solid" },
      { name: "linux", color: "blue.solid" },
    ],
  })

  return (
    <Chart.Root maxH="md" chart={chart}>
      <BarChart data={chart.data} responsive>
        <CartesianGrid stroke={chart.color("border.muted")} vertical={false} />
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey={chart.key("month")}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <Tooltip
          cursor={{ fill: chart.color("bg.muted") }}
          animationDuration={100}
          content={<Chart.Tooltip />}
        />
        <Legend content={<Chart.Legend />} />
        {chart.series.map((item) => (
          <Bar
            isAnimationActive={false}
            key={item.name}
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
            stroke={chart.color(item.color)}
            stackId={item.stackId}
          >
            <LabelList
              dataKey={chart.key(item.name)}
              position="top"
              style={{ fontWeight: "600", fill: chart.color("fg") }}
            />
          </Bar>
        ))}
      </BarChart>
    </Chart.Root>
  )
}

```

### Formatter

Use the formatter provided from the `useChart` hook to format the value axis.

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
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts"

export const BarChartWithFormatter = () => {
  const chart = useChart({
    data: [
      { sales: 63000, month: "June" },
      { sales: 72000, month: "July" },
      { sales: 85000, month: "August" },
      { sales: 79000, month: "September" },
      { sales: 90000, month: "October" },
      { sales: 95000, month: "November" },
      { sales: 88000, month: "December" },
    ],
    series: [{ name: "sales", color: "teal.solid" }],
  })

  return (
    <Chart.Root maxH="sm" chart={chart}>
      <BarChart data={chart.data} responsive>
        <CartesianGrid stroke={chart.color("border.muted")} vertical={false} />
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey={chart.key("month")}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tickFormatter={chart.formatNumber({
            style: "currency",
            currency: "USD",
            notation: "compact",
          })}
        />
        <Tooltip
          cursor={{ fill: chart.color("bg.muted") }}
          animationDuration={0}
          content={<Chart.Tooltip />}
        />
        {chart.series.map((item) => (
          <Bar
            isAnimationActive={false}
            key={item.name}
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
          />
        ))}
      </BarChart>
    </Chart.Root>
  )
}

```

### No Gap

To remove the gap between the bars, set the `barCategoryGap` prop to `0` on the
`BarChart` component.

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis } from "recharts"

export const BarChartWithNoGap = () => {
  const chart = useChart({
    data: [
      { sales: 63000, month: "June" },
      { sales: 72000, month: "July" },
      { sales: 85000, month: "August" },
      { sales: 79000, month: "September" },
      { sales: 90000, month: "October" },
      { sales: 95000, month: "November" },
      { sales: 88000, month: "December" },
    ],
    series: [{ name: "sales", color: "teal.solid" }],
  })

  return (
    <Chart.Root maxH="md" chart={chart}>
      <BarChart barCategoryGap="0" data={chart.data} responsive>
        <CartesianGrid stroke={chart.color("border.muted")} vertical={false} />
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey={chart.key("month")}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <Tooltip
          cursor={{ fill: chart.color("bg.muted") }}
          animationDuration={100}
          content={<Chart.Tooltip />}
        />
        {chart.series.map((item) => (
          <Bar
            isAnimationActive={false}
            key={item.name}
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
            stroke={chart.color("bg")}
          />
        ))}
      </BarChart>
    </Chart.Root>
  )
}

```

### Fill With Value

Compose the `LabelList` and `shape` prop to render bars upward or downward based
on the value.

```tsx /fill={props.payload.views > 0 ? "green.solid" : "red.solid"}/
<Bar
  dataKey="views"
  shape={(props) => (
    <Rectangle
      {...props}
      fill={chart.color(props.payload.views > 0 ? "green.solid" : "red.solid")}
    />
  )}
>
  <LabelList dataKey="views" position="top" />
</Bar>
```

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { Bar, BarChart, CartesianGrid, LabelList, Rectangle } from "recharts"

export const BarChartFillWithValue = () => {
  const chart = useChart({
    data: [
      { name: "Page A", views: 400 },
      { name: "Page B", views: -300 },
      { name: "Page C", views: -200 },
      { name: "Page D", views: 278 },
      { name: "Page E", views: -189 },
      { name: "Page F", views: 239 },
      { name: "Page G", views: 349 },
    ],
    series: [{ name: "views", color: "teal.solid" }],
  })

  return (
    <Chart.Root maxH="sm" chart={chart}>
      <BarChart data={chart.data} margin={{ top: 30 }} responsive>
        <CartesianGrid stroke={chart.color("border.muted")} vertical={false} />
        {chart.series.map((item) => (
          <Bar
            isAnimationActive={false}
            key={item.name}
            radius={4}
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
            shape={(props) => (
              <Rectangle
                {...props}
                fill={chart.color(
                  props.payload.views > 0 ? "green.solid" : "red.solid",
                )}
              />
            )}
          >
            <LabelList
              position="top"
              dataKey={chart.key("views")}
              offset={10}
              style={{ fontWeight: "500" }}
            />
          </Bar>
        ))}
      </BarChart>
    </Chart.Root>
  )
}

```

### Horizontal

Pass the `layout="vertical"` prop to the `BarChart` component to render the bars
horizontally.

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

export const BarChartHorizontal = () => {
  const chart = useChart({
    data: [
      { windows: 186, mac: 80, linux: 120, month: "January" },
      { windows: 165, mac: 95, linux: 110, month: "February" },
      { windows: 190, mac: 87, linux: 125, month: "March" },
      { windows: 180, mac: 86, linux: 124, month: "October" },
      { windows: 185, mac: 91, linux: 126, month: "November" },
    ],
    series: [
      { name: "windows", color: "teal.solid", stackId: "a" },
      { name: "mac", color: "purple.solid", stackId: "a" },
      { name: "linux", color: "blue.solid", stackId: "a" },
    ],
  })

  return (
    <Chart.Root maxH="md" chart={chart}>
      <BarChart layout="vertical" data={chart.data} responsive>
        <CartesianGrid stroke={chart.color("border.muted")} vertical={false} />
        <XAxis type="number" axisLine={false} tickLine={false} />
        <YAxis
          type="category"
          dataKey={chart.key("month")}
          orientation="left"
          stroke={chart.color("border")}
          tickFormatter={(value) =>
            typeof value === "string" ? value.slice(0, 3) : value
          }
        />
        <Tooltip
          cursor={{ fill: chart.color("bg.muted") }}
          animationDuration={100}
          content={<Chart.Tooltip />}
        />
        <Legend content={<Chart.Legend />} />
        {chart.series.map((item) => (
          <Bar
            barSize={30}
            isAnimationActive={false}
            key={item.name}
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
            stroke={chart.color(item.color)}
            stackId={item.stackId}
          />
        ))}
      </BarChart>
    </Chart.Root>
  )
}

```

### Rounded

Pass the `radius` prop to the `Bar` component to render the bars with rounded
corners.

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

export const BarChartRounded = () => {
  const chart = useChart({
    data: [
      { allocation: 60, type: "Stock" },
      { allocation: 45, type: "Crypto" },
      { allocation: 12, type: "ETF" },
      { allocation: 4, type: "Cash" },
    ],
    series: [{ name: "allocation", color: "teal.solid" }],
  })

  return (
    <Chart.Root maxH="sm" chart={chart}>
      <BarChart data={chart.data} barSize={40} responsive>
        <CartesianGrid stroke={chart.color("border.muted")} vertical={false} />
        <XAxis axisLine={false} tickLine={false} dataKey={chart.key("type")} />
        <YAxis
          axisLine={false}
          tickLine={false}
          domain={[0, 100]}
          tickFormatter={(value) => `${value}%`}
        />
        {chart.series.map((item) => (
          <Bar
            key={item.name}
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
            radius={10}
          />
        ))}
      </BarChart>
    </Chart.Root>
  )
}

```

### Range

Passing an array of values to the `dataKey` prop will render a range bar that
indicates the lower and upper bounds of the values.

```ts /value: [10, 20]/
const chart = useChart({
  data: [
    { name: "UK", value: [10, 20] },
    // ...
  ],
})
```

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

export const BarChartRange = () => {
  const chart = useChart({
    data: [
      { name: "UK", value: [10, 20] },
      { name: "US", value: [15, 25] },
      { name: "EU", value: [5, 18] },
      { name: "JP", value: [12, 30] },
    ],
  })

  return (
    <Chart.Root maxH="sm" chart={chart}>
      <BarChart
        barSize={100}
        data={chart.data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        responsive
      >
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis dataKey={chart.key("name")} axisLine={false} tickLine={false} />
        <YAxis domain={[0, "dataMax + 5"]} axisLine={false} tickLine={false} />
        <Bar
          tooltipType="none"
          dataKey={chart.key("value")}
          fill={chart.color("teal.solid")}
        />
      </BarChart>
    </Chart.Root>
  )
}

```

### Multiple

Render multiple `Bar` components to create a bar chart with multiple series.

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

export const BarChartMultiple = () => {
  const chart = useChart({
    data: [
      { type: "mobile", poor: 40, fair: 100, good: 200, excellent: 70 },
      { type: "marketing", poor: 15, fair: 40, good: 120, excellent: 90 },
      { type: "social", poor: 70, fair: 135, good: 220, excellent: 180 },
      { type: "ecommerce", poor: 175, fair: 155, good: 75, excellent: 95 },
    ],
    series: [
      { name: "poor", color: "blue.solid" },
      { name: "fair", color: "orange.solid" },
      { name: "good", color: "yellow.solid" },
      { name: "excellent", color: "green.solid" },
    ],
  })

  return (
    <Chart.Root maxH="sm" chart={chart}>
      <BarChart data={chart.data} responsive>
        <CartesianGrid stroke={chart.color("border.muted")} vertical={false} />
        <XAxis
          tickLine={false}
          dataKey={chart.key("type")}
          stroke={chart.color("border")}
        />
        <YAxis tickLine={false} stroke={chart.color("border")} />
        <Tooltip
          cursor={{ fill: chart.color("bg.muted") }}
          animationDuration={100}
          content={<Chart.Tooltip />}
        />
        <Legend
          layout="vertical"
          align="right"
          verticalAlign="top"
          wrapperStyle={{ paddingLeft: 30 }}
          content={<Chart.Legend orientation="vertical" />}
        />
        {chart.series.map((item) => (
          <Bar
            isAnimationActive={false}
            key={item.name}
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
          />
        ))}
      </BarChart>
    </Chart.Root>
  )
}

```

### Legend Position

Pass the `layout` prop to the `Legend` component from `recharts` to configure
the position of the legend.

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

export const BarChartLegendPosition = () => {
  const chart = useChart({
    data: [
      { category: "Web Server", value: 200, maxValue: 450 },
      { category: "Credit Card", value: 700, maxValue: 900 },
      { category: "Payment", value: 439, maxValue: 500 },
      { category: "API", value: 147, maxValue: 200 },
      { category: "AddToCart", value: 84, maxValue: 100 },
    ],
    series: [
      { name: "value", color: "blue.solid" },
      { name: "maxValue", color: "green.solid" },
    ],
  })

  return (
    <Chart.Root chart={chart} maxH="sm">
      <BarChart data={chart.data} responsive>
        <CartesianGrid stroke={chart.color("border.muted")} vertical={false} />
        <XAxis
          tickLine={false}
          dataKey={chart.key("category")}
          stroke={chart.color("border")}
        />
        <YAxis tickLine={false} stroke={chart.color("border")} />
        <Tooltip
          cursor={{ fill: chart.color("bg.muted") }}
          animationDuration={100}
          content={<Chart.Tooltip />}
        />
        <Legend
          layout="vertical"
          align="right"
          verticalAlign="top"
          wrapperStyle={{ paddingLeft: 30 }}
          content={<Chart.Legend orientation="vertical" />}
        />
        {chart.series.map((item) => (
          <Bar
            isAnimationActive={false}
            key={item.name}
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
          />
        ))}
      </BarChart>
    </Chart.Root>
  )
}

```

### Percent

Set the `stackOffset` prop to `expand` on the `BarChart` component to render the
bars with value normalized to 100%.

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

export const BarChartPercent = () => {
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
      { name: "windows", color: "teal.solid", stackId: "a" },
      { name: "mac", color: "purple.solid", stackId: "a" },
      { name: "linux", color: "blue.solid", stackId: "a" },
    ],
  })

  return (
    <Chart.Root maxH="md" chart={chart}>
      <BarChart stackOffset="expand" data={chart.data} responsive>
        <CartesianGrid stroke={chart.color("border.muted")} vertical={false} />
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey={chart.key("month")}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          stroke={chart.color("border.emphasized")}
          tickFormatter={chart.formatNumber({ style: "percent" })}
        />
        <Tooltip
          cursor={{ fill: chart.color("bg.muted") }}
          animationDuration={100}
          content={<Chart.Tooltip />}
        />
        <Legend content={<Chart.Legend />} />
        {chart.series.map((item) => (
          <Bar
            isAnimationActive={false}
            key={item.name}
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
            stroke={chart.color(item.color)}
            stackId={item.stackId}
          />
        ))}
      </BarChart>
    </Chart.Root>
  )
}

```

### Stacked

Render multiple `Bar` components and set their `stackId` prop to the same value
to stack them.

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis } from "recharts"

export const BarChartStacked = () => {
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
      { name: "windows", color: "teal.solid", stackId: "a" },
      { name: "mac", color: "purple.solid", stackId: "a" },
      { name: "linux", color: "blue.solid", stackId: "a" },
    ],
  })

  return (
    <Chart.Root maxH="sm" chart={chart}>
      <BarChart data={chart.data} responsive>
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
          <Bar
            isAnimationActive={false}
            key={item.name}
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
            stackId={item.stackId}
          />
        ))}
      </BarChart>
    </Chart.Root>
  )
}

```

### Stacked Mix

Render multiple `Bar` components with different `stackId` props to create a bar
chart with some series stacked and some not.

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis } from "recharts"

export const BarChartStackedMix = () => {
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
      { name: "windows", color: "teal.solid", stackId: "a" },
      { name: "mac", color: "purple.solid", stackId: "b" },
      { name: "linux", color: "blue.solid", stackId: "b" },
    ],
  })

  return (
    <Chart.Root maxH="md" chart={chart}>
      <BarChart data={chart.data} responsive>
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
          <Bar
            isAnimationActive={false}
            key={item.name}
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
            stackId={item.stackId}
          />
        ))}
      </BarChart>
    </Chart.Root>
  )
}

```

### Reference Lines

Use the `ReferenceLine` component from `recharts` to make reference to a
specific value on the chart.

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import {
  Bar,
  BarChart,
  CartesianGrid,
  ReferenceArea,
  ReferenceLine,
  Tooltip,
  XAxis,
} from "recharts"

export const BarChartWithReferenceLines = () => {
  const chart = useChart({
    data: [
      { sales: 63000, month: "June" },
      { sales: 72000, month: "July" },
      { sales: 85000, month: "August" },
      { sales: 79000, month: "September" },
      { sales: 90000, month: "October" },
      { sales: 95000, month: "November" },
      { sales: 88000, month: "December" },
    ],
    series: [{ name: "sales", color: "blue.solid" }],
  })

  return (
    <Chart.Root maxH="sm" chart={chart}>
      <BarChart data={chart.data} responsive>
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
        <ReferenceArea
          y1={76000}
          y2={90000}
          fill={chart.color("red.muted")}
          fillOpacity={0.4}
          label={{
            value: "top line",
            position: "insideTopLeft",
            fill: chart.color("red.fg"),
          }}
        />
        <ReferenceLine
          y={80000}
          stroke={chart.color("red.fg")}
          strokeDasharray="3 3"
        />
        {chart.series.map((item) => (
          <Bar
            isAnimationActive={false}
            key={item.name}
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
            fillOpacity={0.64}
          />
        ))}
      </BarChart>
    </Chart.Root>
  )
}

```

### Histogram

For those mathematics wiz, you can compose the barchart to create a histogram.

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts"

export const BarChartHistogram = () => {
  const chart = useChart({ data })
  return (
    <Chart.Root maxH="sm" chart={chart}>
      <BarChart
        data={chart.data}
        margin={{ top: 20, right: 20, bottom: 20, left: 40 }}
        responsive
      >
        <CartesianGrid strokeDasharray="3 3" stroke={chart.color("border")} />
        <XAxis
          dataKey="from"
          ticks={ticks}
          label={{ value: "Value Range", position: "insideBottom", offset: -5 }}
        />
        <YAxis
          label={{ value: "Frequency", angle: -90, position: "insideLeft" }}
        />
        <Tooltip
          formatter={(value) => [`${value}`, "Frequency"]}
          labelFormatter={(label) => {
            const bin = data.find((item) => item.from === Number(label))
            return bin ? `Range: ${bin.from}-${bin.to}` : ""
          }}
        />
        <Bar
          dataKey="value"
          fill={chart.color("teal.solid")}
          name="Frequency"
        />
      </BarChart>
    </Chart.Root>
  )
}

const data = [
  { from: 0, to: 10, value: 0 },
  { from: 10, to: 20, value: 10 },
  { from: 20, to: 30, value: 30 },
  { from: 30, to: 40, value: 50 },
  { from: 40, to: 50, value: 100 },
  { from: 50, to: 60, value: 200 },
  { from: 60, to: 70, value: 120 },
  { from: 70, to: 80, value: 220 },
  { from: 80, to: 90, value: 300 },
  { from: 90, to: 100, value: 320 },
  { from: 100, to: 110, value: 400 },
  { from: 110, to: 120, value: 470 },
  { from: 120, to: 130, value: 570 },
  { from: 130, to: 140, value: 810 },
  { from: 140, to: 150, value: 720 },
  { from: 150, to: 160, value: 810 },
  { from: 160, to: 170, value: 750 },
  { from: 170, to: 180, value: 810 },
  { from: 180, to: 190, value: 700 },
  { from: 190, to: 200, value: 530 },
  { from: 200, to: 210, value: 380 },
  { from: 210, to: 220, value: 410 },
  { from: 220, to: 230, value: 250 },
  { from: 230, to: 240, value: 170 },
  { from: 240, to: 250, value: 120 },
  { from: 250, to: 260, value: 100 },
  { from: 260, to: 270, value: 90 },
  { from: 270, to: 280, value: 120 },
  { from: 280, to: 290, value: 70 },
  { from: 290, to: 300, value: 55 },
  { from: 300, to: 310, value: 40 },
  { from: 310, to: 320, value: 20 },
  { from: 320, to: 330, value: 0 },
]

const ticks = Array.from({ length: 12 }, (_, i) => i * 30)

```

### Avatar Ticks

Here's an example of rendering images as the `XAxis` tick by leveraging svg
`foreignObject`.

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { Bar, BarChart, XAxis, YAxis } from "recharts"

const data = [
  { name: "Alice", value: 400, avatar: "https://i.pravatar.cc/50?img=1" },
  { name: "Bob", value: 300, avatar: "https://i.pravatar.cc/50?img=2" },
  { name: "Charlie", value: 200, avatar: "https://i.pravatar.cc/50?img=5" },
  { name: "David", value: 278, avatar: "https://i.pravatar.cc/50?img=4" },
]

interface AvatarTickProps {
  x: number
  y: number
  index: number
}

const AvatarTicks = (props: Partial<AvatarTickProps>) => {
  const { x, y, index } = props as AvatarTickProps
  const avatarUrl = data[index].avatar
  return (
    <foreignObject x={x - 15} y={y} width={50} height={50}>
      <img
        src={avatarUrl}
        alt="avatar"
        style={{ width: 30, height: 30, borderRadius: "50%" }}
      />
    </foreignObject>
  )
}

export const BarChartWithAvatarTicks = () => {
  const chart = useChart({
    data,
    series: [{ name: "value", color: "teal.solid" }],
  })
  return (
    <Chart.Root maxH="sm" chart={chart}>
      <BarChart data={chart.data} margin={{ bottom: 20 }} responsive>
        <XAxis
          dataKey="name"
          tick={<AvatarTicks />}
          stroke={chart.color("border.emphasized")}
        />
        <YAxis stroke={chart.color("border.emphasized")} />
        {chart.series.map((item) => (
          <Bar
            key={item.name}
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
          />
        ))}
      </BarChart>
    </Chart.Root>
  )
}

```

### Candlestick

Combine the bar chart with the `ErrorBar` and `Bar` components to create a
candlestick chart.

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import {
  Bar,
  BarChart,
  CartesianGrid,
  ErrorBar,
  Rectangle,
  XAxis,
  YAxis,
} from "recharts"

export const BarChartCandlestick = () => {
  const chart = useChart({
    data,
    series: [{ name: "open_close", color: "teal.solid" }],
  })

  return (
    <Chart.Root maxH="md" chart={chart}>
      <BarChart data={chart.data} responsive>
        <CartesianGrid stroke={chart.color("border.muted")} />
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey={chart.key("date")}
          tickFormatter={chart.formatDate({ month: "short", day: "2-digit" })}
        />
        <YAxis
          orientation="right"
          axisLine={false}
          tickLine={false}
          domain={["dataMin - 0.5", "dataMax + 0.5"]}
          tickFormatter={chart.formatNumber({ maximumFractionDigits: 1 })}
        />
        <Bar
          isAnimationActive={false}
          barSize={40}
          dataKey={chart.key("open_close")}
          fill={chart.color("teal.solid")}
          shape={(props) => {
            const entry = props.payload
            const fill =
              entry?.open_close[0] > entry?.open_close[1]
                ? chart.color("red.solid")
                : chart.color("green.solid")
            return <Rectangle {...props} fill={fill} />
          }}
        >
          <ErrorBar
            dataKey={(obj) => [
              obj.open_close[0] - obj.high_low[0],
              obj.high_low[1] - obj.open_close[1],
            ]}
            width={2}
            stroke={chart.color("fg")}
          />
        </Bar>
      </BarChart>
    </Chart.Root>
  )
}

const data = [
  {
    date: "2024-01-01",
    open_close: [185.96, 185.64],
    high_low: [186.74, 185.19],
  },
  {
    date: "2024-01-02",
    open_close: [184.22, 185.14],
    high_low: [185.15, 182.73],
  },
  {
    date: "2024-01-03",
    open_close: [184.22, 181.42],
    high_low: [184.26, 181.12],
  },
  {
    date: "2024-01-04",
    open_close: [181.99, 182.68],
    high_low: [183.0872, 181.59],
  },
  {
    date: "2024-01-05",
    open_close: [182.15, 185.56],
    high_low: [185.66, 181.5],
  },
  {
    date: "2024-01-08",
    open_close: [184.51, 185.8],
    high_low: [186.01, 183.98],
  },
  {
    date: "2024-01-09",
    open_close: [186.19, 185.64],
    high_low: [187.05, 184.74],
  },
  {
    date: "2024-01-10",
    open_close: [186.09, 186.19],
    high_low: [187.3499, 185.36],
  },
  {
    date: "2024-01-11",
    open_close: [186.54, 185.59],
    high_low: [187.05, 185.08],
  },
  {
    date: "2024-01-12",
    open_close: [185.34, 185.92],
    high_low: [186.565, 184.455],
  },
]

```

### Composition

Here's an example of composing the `BarChart`, `Card` and `SegmentGroup`
components.

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { Card, SegmentGroup } from "@chakra-ui/react"
import * as React from "react"
import { Bar, BarChart, XAxis } from "recharts"

type CurrentKey = "windows" | "mac" | "linux"

export const BarChartComposition = () => {
  const [currentKey, setCurrentKey] = React.useState<CurrentKey>("windows")

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

  const totals = chart.data.reduce(
    (acc, item) => {
      return {
        windows: acc.windows + item.windows,
        mac: acc.mac + item.mac,
        linux: acc.linux + item.linux,
      }
    },
    { windows: 0, mac: 0, linux: 0 },
  )

  const series = chart.getSeries({ name: currentKey })

  const formatNumber = chart.formatNumber({
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })

  return (
    <Card.Root maxW="md">
      <Card.Header alignItems="flex-start">
        <Card.Title>OS Downloads</Card.Title>
        <SegmentGroup.Root
          size="xs"
          value={currentKey}
          onValueChange={(e) => setCurrentKey(e.value as CurrentKey)}
        >
          <SegmentGroup.Indicator />
          <SegmentGroup.Items
            items={[
              {
                value: "windows",
                label: `Windows (${formatNumber(totals.windows)})`,
              },
              { value: "mac", label: `Mac (${formatNumber(totals.mac)})` },
              {
                value: "linux",
                label: `Linux (${formatNumber(totals.linux)})`,
              },
            ]}
          />
        </SegmentGroup.Root>
      </Card.Header>
      <Card.Body>
        <Chart.Root height="10rem" chart={chart}>
          <BarChart data={chart.data} responsive>
            <XAxis
              axisLine={false}
              tickLine={false}
              dataKey={chart.key("month")}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <Bar
              dataKey={chart.key(currentKey)}
              fill={chart.color(series?.color)}
            />
          </BarChart>
        </Chart.Root>
      </Card.Body>
    </Card.Root>
  )
}

```
