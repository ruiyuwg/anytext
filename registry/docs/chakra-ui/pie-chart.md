# Pie Chart

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { Pie, PieChart, Sector } from "recharts"

export const PieChartBasic = () => {
  const chart = useChart({
    data: [
      { name: "windows", value: 400, color: "blue.solid" },
      { name: "mac", value: 300, color: "orange.solid" },
      { name: "linux", value: 300, color: "pink.solid" },
      { name: "other", value: 200, color: "green.solid" },
    ],
  })

  return (
    <Chart.Root boxSize="200px" mx="auto" chart={chart}>
      <PieChart responsive>
        <Pie
          isAnimationActive={false}
          data={chart.data}
          dataKey={chart.key("value")}
          shape={(props) => (
            <Sector {...props} fill={chart.color(props.payload!.color)} />
          )}
        />
      </PieChart>
    </Chart.Root>
  )
}

```

## Usage

```tsx
import { Chart, useChart } from "@chakra-ui/charts"
import { Pie, PieChart } from "recharts"
```

```tsx
<Chart.Root>
  <PieChart>
    <Pie />
  </PieChart>
</Chart.Root>
```

## Examples

### Label inside

Render the `LabelList` from `recharts` inside the `Pie` to display the label
inside the pie chart.

```tsx
<Pie>
  <LabelList dataKey="name" position="inside" />
</Pie>
```

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { LabelList, Pie, PieChart, Sector, Tooltip } from "recharts"

export const PieChartWithLabelInside = () => {
  const chart = useChart({
    data: [
      { name: "windows", value: 400, color: "blue.solid" },
      { name: "mac", value: 300, color: "orange.solid" },
      { name: "linux", value: 300, color: "pink.solid" },
      { name: "other", value: 200, color: "green.solid" },
    ],
  })

  return (
    <Chart.Root boxSize="320px" mx="auto" chart={chart}>
      <PieChart responsive>
        <Tooltip
          cursor={false}
          animationDuration={100}
          content={<Chart.Tooltip hideLabel />}
        />
        <Pie
          isAnimationActive={false}
          data={chart.data}
          dataKey={chart.key("value")}
          shape={(props) => (
            <Sector {...props} fill={chart.color(props.payload!.color)} />
          )}
        >
          <LabelList position="inside" fill="white" stroke="none" />
        </Pie>
      </PieChart>
    </Chart.Root>
  )
}

```

### Label outside

Pass the `label` prop to the `Pie` component to display the label outside the
pie chart.

```tsx
<Pie labelLine={false} label={({ name, value }) => `${name}: ${value}`}>
  {/* ... */}
</Pie>
```

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { Pie, PieChart, Sector } from "recharts"

export const PieChartWithLabelOutside = () => {
  const chart = useChart({
    data: [
      { name: "windows", value: 400, color: "blue.solid" },
      { name: "mac", value: 300, color: "orange.solid" },
      { name: "linux", value: 300, color: "pink.solid" },
      { name: "other", value: 200, color: "green.solid" },
    ],
  })

  return (
    <Chart.Root boxSize="200px" mx="auto" chart={chart}>
      <PieChart responsive>
        <Pie
          isAnimationActive={false}
          data={chart.data}
          dataKey={chart.key("value")}
          outerRadius={100}
          innerRadius={0}
          labelLine={false}
          label={({ name, index }) => {
            const { value } = chart.data[index ?? -1]
            const percent = value / chart.getTotal("value")
            return `${name}: ${(percent * 100).toFixed(1)}%`
          }}
          shape={(props) => (
            <Sector {...props} fill={chart.color(props.payload!.color)} />
          )}
        />
      </PieChart>
    </Chart.Root>
  )
}

```

### Remove Stroke

Set the `stroke` prop to `none` to remove the stroke from the pie chart.

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { Pie, PieChart, Sector, Tooltip } from "recharts"

export const PieChartNoStroke = () => {
  const chart = useChart({
    data: [
      { name: "windows", value: 400, color: "blue.solid" },
      { name: "mac", value: 300, color: "orange.solid" },
      { name: "linux", value: 300, color: "pink.solid" },
      { name: "other", value: 200, color: "green.solid" },
    ],
  })

  return (
    <Chart.Root boxSize="200px" mx="auto" chart={chart}>
      <PieChart responsive>
        <Tooltip
          cursor={false}
          animationDuration={100}
          content={<Chart.Tooltip hideLabel />}
        />
        <Pie
          isAnimationActive={false}
          data={chart.data}
          dataKey={chart.key("value")}
          nameKey="name"
          stroke="none"
          shape={(props) => (
            <Sector {...props} fill={chart.color(props.payload!.color)} />
          )}
        />
      </PieChart>
    </Chart.Root>
  )
}

```

### Legend

Render the `Chart.Legend` component to display a legend for the pie chart.

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { Legend, Pie, PieChart, Sector } from "recharts"

export const PieChartWithLegend = () => {
  const chart = useChart({
    data: [
      { name: "windows", value: 400, color: "teal.solid" },
      { name: "mac", value: 300, color: "orange.solid" },
      { name: "linux", value: 300, color: "blue.solid" },
    ],
  })

  return (
    <Chart.Root boxSize="200px" mx="auto" chart={chart}>
      <PieChart responsive>
        <Legend content={<Chart.Legend />} />
        <Pie
          isAnimationActive={false}
          data={chart.data}
          dataKey={chart.key("value")}
          nameKey="name"
          shape={(props) => (
            <Sector {...props} fill={chart.color(props.payload!.color)} />
          )}
        />
      </PieChart>
    </Chart.Root>
  )
}

```

### Point Label

Here's an example of how to add point labels.

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { Pie, PieChart, Sector, Tooltip } from "recharts"

export const PieChartWithPointLabel = () => {
  const chart = useChart({
    data: [
      { name: "windows", value: 400, color: "blue.solid" },
      { name: "mac", value: 300, color: "orange.solid" },
      { name: "linux", value: 300, color: "pink.solid" },
      { name: "other", value: 200, color: "green.solid" },
    ],
  })

  return (
    <Chart.Root boxSize="320px" mx="auto" chart={chart}>
      <PieChart responsive>
        <Tooltip
          cursor={false}
          animationDuration={100}
          content={<Chart.Tooltip hideLabel />}
        />
        <Pie
          isAnimationActive={false}
          data={chart.data}
          dataKey={chart.key("value")}
          labelLine={{ stroke: chart.color("border.emphasized") }}
          label={{
            fill: chart.color("fg.muted"),
            style: { fontWeight: "600" },
          }}
          shape={(props) => (
            <Sector {...props} fill={chart.color(props.payload!.color)} />
          )}
        />
      </PieChart>
    </Chart.Root>
  )
}

```

### Start Angle

Set the `startAngle` and `endAngle` props to the desired start and end angles
for the pie chart.

```tsx
<Pie startAngle={180} endAngle={0}>
  {/* ... */}
</Pie>
```

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { Pie, PieChart, Sector, Tooltip } from "recharts"

export const PieChartWithStartAngle = () => {
  const chart = useChart({
    data: [
      { name: "typescript", value: 400, color: "blue.solid" },
      { name: "javascript", value: 120, color: "orange.solid" },
      { name: "python", value: 300, color: "pink.solid" },
      { name: "rust", value: 278, color: "purple.solid" },
    ],
  })

  return (
    <Chart.Root boxSize="320px" mx="auto" chart={chart}>
      <PieChart responsive>
        <Tooltip
          cursor={false}
          animationDuration={100}
          content={<Chart.Tooltip hideLabel />}
        />
        <Pie
          isAnimationActive={false}
          data={chart.data}
          dataKey={chart.key("value")}
          nameKey="name"
          startAngle={180}
          endAngle={0}
          shape={(props) => (
            <Sector {...props} fill={chart.color(props.payload!.color)} />
          )}
        />
      </PieChart>
    </Chart.Root>
  )
}

```
