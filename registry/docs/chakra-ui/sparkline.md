# Sparkline

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { Area, AreaChart } from "recharts"

export const SparklineBasic = () => {
  const chart = useChart({
    data: [
      { value: 10 },
      { value: 16 },
      { value: 19 },
      { value: 15 },
      { value: 12 },
      { value: 15 },
      { value: 10 },
      { value: 18 },
    ],
    series: [{ name: "value", color: "teal.solid" }],
  })

  return (
    <Chart.Root width="28" height="12" chart={chart}>
      <AreaChart data={chart.data} responsive>
        {chart.series.map((item) => (
          <Area
            key={item.name}
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
            fillOpacity={0.2}
            stroke={chart.color(item.color)}
            strokeWidth={2}
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
import { Area, AreaChart } from "recharts"
```

```tsx
<Chart.Root>
  <AreaChart>
    <Area />
  </AreaChart>
</Chart.Root>
```

## Examples

### Bar Chart

Sparklines can be made with bar charts.

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { Bar, BarChart, Rectangle } from "recharts"

export const SparklineBarChart = () => {
  const chart = useChart({
    data: [
      { value: 10, fill: "teal.solid" },
      { value: 16, fill: "green.solid" },
      { value: 19, fill: "teal.solid" },
      { value: 15, fill: "green.solid" },
      { value: 12, fill: "teal.solid" },
      { value: 15, fill: "teal.solid" },
      { value: 10, fill: "teal.solid" },
      { value: 18, fill: "teal.solid" },
    ],
  })

  return (
    <Chart.Root width="28" height="12" chart={chart}>
      <BarChart data={chart.data} barSize={8} responsive>
        <Bar
          isAnimationActive={false}
          dataKey={chart.key("value")}
          fill={chart.color("teal.solid")}
          stroke=""
          shape={(props) => (
            <Rectangle {...props} fill={chart.color(props.payload!.fill)} />
          )}
        />
      </BarChart>
    </Chart.Root>
  )
}

```

### Line Chart

Sparklines can also be made with line charts.

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { Line, LineChart } from "recharts"

export const SparklineLineChart = () => {
  const chart = useChart({
    data: [
      { value: 10 },
      { value: 16 },
      { value: 19 },
      { value: 15 },
      { value: 12 },
      { value: 15 },
      { value: 10 },
      { value: 18 },
    ],
    series: [{ name: "value", color: "teal.solid" }],
  })

  return (
    <Chart.Root width="28" height="12" chart={chart}>
      <LineChart data={chart.data} responsive>
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

### Stock

Here's a composition of a sparkline that shows stock prices.

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import {
  Badge,
  Box,
  Card,
  FormatNumber,
  Span,
  Stack,
  Stat,
} from "@chakra-ui/react"
import { Area, AreaChart } from "recharts"

export const SparklineCompositionStock = () => {
  const chart = useChart({
    data: [
      { date: "2023-01", value: 145.43 },
      { date: "2023-02", value: 151.73 },
      { date: "2023-03", value: 157.65 },
      { date: "2023-04", value: 169.68 },
      { date: "2023-05", value: 173.75 },
      { date: "2023-06", value: 186.68 },
      { date: "2023-07", value: 181.99 },
      { date: "2023-08", value: 189.46 },
    ],
    series: [{ name: "value", color: "green.solid" }],
  })

  const closing = chart.data[chart.data.length - 1]
  const opening = chart.data[0]
  const trend = (closing.value - opening.value) / opening.value

  return (
    <Card.Root maxW="sm" size="sm">
      <Card.Body flexDirection="row" alignItems="center">
        <Stack gap="0" flex="1">
          <Box fontWeight="semibold" textStyle="sm">
            AMZN
          </Box>
          <Box textStyle="xs" color="fg.muted">
            Amazon Inc.
          </Box>
        </Stack>

        <Chart.Root width="28" height="12" chart={chart}>
          <AreaChart data={chart.data} responsive>
            <defs>
              <Chart.Gradient
                id="sp-gradient"
                stops={[
                  { offset: 0, color: "green.solid", opacity: 0.8 },
                  { offset: 1, color: "green.solid", opacity: 0.2 },
                ]}
              />
            </defs>
            {chart.series.map((item) => (
              <Area
                key={item.name}
                isAnimationActive={false}
                dataKey={chart.key(item.name)}
                fill={`url(#sp-gradient)`}
                fillOpacity={0.2}
                stroke={chart.color(item.color)}
                strokeWidth={2}
              />
            ))}
          </AreaChart>
        </Chart.Root>

        <Stat.Root size="sm" alignItems="flex-end">
          <Span fontWeight="medium">
            <FormatNumber
              value={closing.value}
              style="currency"
              currency="USD"
            />
          </Span>
          <Badge colorPalette={trend > 0 ? "green" : "red"} gap="0">
            <Stat.UpIndicator />
            <FormatNumber
              value={trend}
              style="percent"
              maximumFractionDigits={2}
            />
          </Badge>
        </Stat.Root>
      </Card.Body>
    </Card.Root>
  )
}

```

### Stat

Here's a composition of a sparkline that shows a SaaS dashboard stat.

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { Card, Stat } from "@chakra-ui/react"
import { LuGlobe } from "react-icons/lu"
import { Area, AreaChart } from "recharts"

export const SparklineCompositionStat = () => {
  return (
    <Card.Root maxW="sm" size="sm" overflow="hidden">
      <Card.Body>
        <Stat.Root>
          <Stat.Label>
            <LuGlobe /> Unique visitors
          </Stat.Label>
          <Stat.ValueText>192.1k</Stat.ValueText>
        </Stat.Root>
      </Card.Body>
      <SparkLine />
    </Card.Root>
  )
}

const SparkLine = () => {
  const chart = useChart({
    data: [
      { value: 10 },
      { value: 16 },
      { value: 19 },
      { value: 15 },
      { value: 12 },
      { value: 15 },
    ],
    series: [{ color: "teal.solid" }],
  })

  return (
    <Chart.Root height="10" chart={chart}>
      <AreaChart
        data={chart.data}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        responsive
      >
        {chart.series.map((item) => (
          <Area
            key={item.name}
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
            fillOpacity={0.2}
            stroke={chart.color(item.color)}
            strokeWidth={2}
          />
        ))}
      </AreaChart>
    </Chart.Root>
  )
}

```

### Gradient

Use the `Chart.Gradient` component to create a gradient fill.

```tsx {4-7}
<defs>
  <Chart.Gradient
    id="custom-gradient"
    stops={[
      { offset: "0%", color: "teal.solid", opacity: 1 },
      { offset: "100%", color: "teal.solid", opacity: 0.01 },
    ]}
  />
</defs>
```

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { Area, AreaChart } from "recharts"

export const SparklineWithGradient = () => {
  const chart = useChart({
    data: [
      { value: 10 },
      { value: 16 },
      { value: 19 },
      { value: 15 },
      { value: 12 },
      { value: 15 },
      { value: 10 },
      { value: 18 },
    ],
    series: [{ name: "value", color: "teal.solid" }],
  })

  return (
    <Chart.Root width="28" height="12" chart={chart}>
      <AreaChart accessibilityLayer data={chart.data} responsive>
        {chart.series.map((item) => (
          <defs key={item.name}>
            <Chart.Gradient
              id={`${item.name}-gradient`}
              stops={[
                { offset: "0%", color: item.color, opacity: 1 },
                { offset: "100%", color: item.color, opacity: 0.01 },
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
          />
        ))}
      </AreaChart>
    </Chart.Root>
  )
}

```

### Reference

To reference a specific value on the sparkline, use the `Reference` component
from `recharts`.

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { Line, LineChart, ReferenceLine } from "recharts"

export const SparklineWithReference = () => {
  const chart = useChart({
    data: [
      { value: 10 },
      { value: 16 },
      { value: 19 },
      { value: 15 },
      { value: 12 },
      { value: 15 },
      { value: 10 },
      { value: 18 },
    ],
    series: [{ name: "value", color: "teal.solid" }],
  })

  return (
    <Chart.Root maxW="200px" chart={chart}>
      <LineChart data={chart.data} responsive>
        {chart.series.map((item) => (
          <Line
            key={item.name}
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            dot={false}
            stroke={chart.color(item.color)}
            strokeWidth={2}
          />
        ))}
        <ReferenceLine
          y={chart.getMin("value")}
          stroke={chart.color("border.emphasized")}
          strokeDasharray="4 4"
          label={{
            value: chart.getMin("value"),
            position: "left",
            fill: chart.color("fg.muted"),
          }}
        />
        <ReferenceLine
          y={chart.getMax("value")}
          stroke={chart.color("border.emphasized")}
          strokeDasharray="4 4"
          label={{
            value: chart.getMax("value"),
            position: "right",
            fill: chart.color("fg.muted"),
          }}
        />
      </LineChart>
    </Chart.Root>
  )
}

```

### Interaction

Here's an example that mimics the NPM download stats.

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { Box, Flex, FormatNumber, HStack, Text } from "@chakra-ui/react"
import { useState } from "react"
import { LuDownload } from "react-icons/lu"
import { Area, AreaChart, Tooltip } from "recharts"
import type { CategoricalChartFunc } from "recharts/types/chart/types"

export const SparklineWithInteraction = () => {
  const chart = useChart({
    data: [
      { value: 125000 },
      { value: 158000 },
      { value: 189000 },
      { value: 210000 },
      { value: 105000 },
      { value: 278000 },
      { value: 310000 },
      { value: 345000 },
    ],
    series: [{ name: "value", color: "teal.solid" }],
  })

  const lastIndex = chart.data.length - 1
  const lastValue = chart.data[lastIndex].value
  const [value, setValue] = useState(lastValue)

  const onMouseMove: CategoricalChartFunc = (state) => {
    const index = state.activeTooltipIndex ?? lastIndex
    const { value = lastValue } = chart.data[index as number]
    setValue(value)
  }

  const onMouseLeave = () => {
    setValue(lastValue)
  }

  return (
    <Flex align="flex-end" maxW="sm">
      <Box flex="1" fontWeight="medium">
        <HStack textStyle="sm" color="fg.muted">
          <LuDownload /> Weekly Downloads
        </HStack>
        <Text textStyle="xl" mt="2">
          <FormatNumber value={value} />
        </Text>
      </Box>
      <Chart.Root width="full" height="12" flex="1" chart={chart}>
        <AreaChart
          data={chart.data}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          responsive
        >
          <Tooltip
            cursor={{ stroke: chart.color("teal.solid"), strokeWidth: 2 }}
            content={() => null}
          />
          {chart.series.map((item) => (
            <Area
              activeDot={{ stroke: chart.color("bg") }}
              key={item.name}
              isAnimationActive={false}
              dataKey={chart.key(item.name)}
              fill={chart.color(item.color)}
              fillOpacity={0.2}
              stroke={chart.color(item.color)}
              strokeWidth={2}
            />
          ))}
        </AreaChart>
      </Chart.Root>
    </Flex>
  )
}

```

### Composition

Here's a composition that shows a sparkline for a stock price.

```tsx
"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import {
  Badge,
  Box,
  Card,
  FormatNumber,
  Span,
  Stack,
  Stat,
} from "@chakra-ui/react"
import { Area, AreaChart } from "recharts"

export const SparklineCompositionStock = () => {
  const chart = useChart({
    data: [
      { date: "2023-01", value: 145.43 },
      { date: "2023-02", value: 151.73 },
      { date: "2023-03", value: 157.65 },
      { date: "2023-04", value: 169.68 },
      { date: "2023-05", value: 173.75 },
      { date: "2023-06", value: 186.68 },
      { date: "2023-07", value: 181.99 },
      { date: "2023-08", value: 189.46 },
    ],
    series: [{ name: "value", color: "green.solid" }],
  })

  const closing = chart.data[chart.data.length - 1]
  const opening = chart.data[0]
  const trend = (closing.value - opening.value) / opening.value

  return (
    <Card.Root maxW="sm" size="sm">
      <Card.Body flexDirection="row" alignItems="center">
        <Stack gap="0" flex="1">
          <Box fontWeight="semibold" textStyle="sm">
            AMZN
          </Box>
          <Box textStyle="xs" color="fg.muted">
            Amazon Inc.
          </Box>
        </Stack>

        <Chart.Root width="28" height="12" chart={chart}>
          <AreaChart data={chart.data} responsive>
            <defs>
              <Chart.Gradient
                id="sp-gradient"
                stops={[
                  { offset: 0, color: "green.solid", opacity: 0.8 },
                  { offset: 1, color: "green.solid", opacity: 0.2 },
                ]}
              />
            </defs>
            {chart.series.map((item) => (
              <Area
                key={item.name}
                isAnimationActive={false}
                dataKey={chart.key(item.name)}
                fill={`url(#sp-gradient)`}
                fillOpacity={0.2}
                stroke={chart.color(item.color)}
                strokeWidth={2}
              />
            ))}
          </AreaChart>
        </Chart.Root>

        <Stat.Root size="sm" alignItems="flex-end">
          <Span fontWeight="medium">
            <FormatNumber
              value={closing.value}
              style="currency"
              currency="USD"
            />
          </Span>
          <Badge colorPalette={trend > 0 ? "green" : "red"} gap="0">
            <Stat.UpIndicator />
            <FormatNumber
              value={trend}
              style="percent"
              maximumFractionDigits={2}
            />
          </Badge>
        </Stat.Root>
      </Card.Body>
    </Card.Root>
  )
}

```

# Tooltip

The charts component is built on top of [Recharts](https://recharts.org), so you
can use all the customization options that Recharts provides.
