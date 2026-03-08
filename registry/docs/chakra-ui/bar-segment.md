# Bar Segment

```tsx
"use client"

import { BarSegment, useChart } from "@chakra-ui/charts"

export const BarSegmentBasic = () => {
  const chart = useChart({
    sort: { by: "value", direction: "desc" },
    data: [
      { name: "Google", value: 500000, color: "teal.solid" },
      { name: "Direct", value: 100000, color: "blue.solid" },
      { name: "Bing", value: 200000, color: "orange.solid" },
      { name: "Yandex", value: 100000, color: "purple.solid" },
    ],
  })

  return (
    <BarSegment.Root chart={chart}>
      <BarSegment.Content>
        <BarSegment.Value />
        <BarSegment.Bar />
        <BarSegment.Label />
      </BarSegment.Content>
    </BarSegment.Root>
  )
}

```

## Usage

```tsx
import { BarSegment, Chart, useChart } from "@chakra-ui/charts"
```

```tsx
<BarSegment.Root>
  <BarSegment.Content>
    <BarSegment.Value />
    <BarSegment.Bar />
    <BarSegment.Label />
  </BarSegment.Content>
</BarSegment.Root>
```

## Examples

### Bar Size

Pass the `barSize` prop to the `BarSegment.Root` component to configure the size
of the bar.

```tsx
"use client"

import { BarSegment, useChart } from "@chakra-ui/charts"

export const BarSegmentWithBarSize = () => {
  const chart = useChart({
    sort: { by: "value", direction: "desc" },
    data: [
      { name: "Ruby", value: 450000, color: "green.solid" },
      { name: "CSS", value: 150000, color: "yellow.solid" },
      { name: "JavaScript", value: 300000, color: "orange.solid" },
      { name: "HTML", value: 175000, color: "purple.solid" },
      { name: "React", value: 225000, color: "blue.solid" },
    ],
  })

  return (
    <BarSegment.Root chart={chart} barSize="3">
      <BarSegment.Content>
        <BarSegment.Bar gap="0.5" />
      </BarSegment.Content>
      <BarSegment.Legend gap="2" textStyle="xs" showPercent />
    </BarSegment.Root>
  )
}

```

### Legend

Use the `BarSegment.Legend` component to render the legend. You can pass
`showPercent` and `showValue` to control the visibility of the percentage and
values.

```tsx
"use client"

import { BarSegment, useChart } from "@chakra-ui/charts"

export const BarSegmentWithLegend = () => {
  const chart = useChart({
    sort: { by: "value", direction: "desc" },
    data: [
      { name: "Google", value: 500000, color: "teal.solid" },
      { name: "Direct", value: 100000, color: "blue.solid" },
      { name: "Bing", value: 200000, color: "orange.solid" },
      { name: "Yandex", value: 100000, color: "purple.solid" },
    ],
  })

  return (
    <BarSegment.Root chart={chart}>
      <BarSegment.Content>
        <BarSegment.Value />
        <BarSegment.Bar />
      </BarSegment.Content>
      <BarSegment.Legend showPercent />
    </BarSegment.Root>
  )
}

```

### Tooltip

Pass the `tooltip` prop to the `BarSegment.Bar` component to show a tooltip when
hovering over the bar.

```tsx
"use client"

import { BarSegment, useChart } from "@chakra-ui/charts"

export const BarSegmentWithTooltip = () => {
  const chart = useChart({
    sort: { by: "value", direction: "desc" },
    data: [
      { name: "Google", value: 500000, color: "teal.solid" },
      { name: "Direct", value: 100000, color: "blue.solid" },
      { name: "Bing", value: 200000, color: "orange.solid" },
      { name: "Yandex", value: 100000, color: "purple.solid" },
    ],
  })

  return (
    <BarSegment.Root chart={chart}>
      <BarSegment.Content>
        <BarSegment.Bar tooltip />
      </BarSegment.Content>
      <BarSegment.Legend showPercent />
    </BarSegment.Root>
  )
}

```

### Reference

To reference a specific value on the chart, use the `BarSegment.Reference`
component.

```tsx
"use client"

import { BarSegment, useChart } from "@chakra-ui/charts"

export const BarSegmentWithReference = () => {
  const chart = useChart({
    sort: { by: "value", direction: "desc" },
    data: [
      { name: "Google", value: 500000, color: "teal.solid" },
      { name: "Direct", value: 100000, color: "blue.solid" },
      { name: "Bing", value: 200000, color: "orange.solid" },
      { name: "Yandex", value: 80000, color: "purple.solid" },
    ],
  })

  return (
    <BarSegment.Root chart={chart}>
      <BarSegment.Content>
        <BarSegment.Value />
        <BarSegment.Bar>
          <BarSegment.Reference label="Target" value={200000} />
        </BarSegment.Bar>
        <BarSegment.Label />
      </BarSegment.Content>
    </BarSegment.Root>
  )
}

```

# Cartesian Grid

This guide will show you how to customize the cartesian grid of the charts
component.

The charts component is built on top of [Recharts](https://recharts.org). For
advanced usage, refer to their documentation.

## Usage

```tsx
import { CartesianGrid } from "recharts"
```

```tsx
<CartesianGrid />
```

This will render a default grid with light gray lines on both the X and Y axes.

## Customize Stroke

Modify the appearance of the grid lines using `stroke`, `strokeDasharray`, and
`opacity`

```tsx
<CartesianGrid stroke="#ccc" strokeDasharray="3 3" opacity={0.5} />
```

| Property          | Description                                              |
| ----------------- | -------------------------------------------------------- |
| `stroke`          | Changes the grid line color (e.g., `#ddd`, `red`, etc.). |
| `strokeDasharray` | Defines the dash pattern (e.g., `5 5` for dashed lines). |
| `opacity`         | Controls grid line transparency (0 to 1).                |

## Show/Hide Grid Lines

To control whether horizontal or vertical lines are displayed:

```tsx
<CartesianGrid vertical={false} horizontal={true} />
```

- `vertical={false}` → Hides vertical grid lines
- `horizontal={false}` → Hides horizontal grid lines
- `horizontal={true}` and `vertical={true}` → Shows both (default behavior)

## Remove Grid Lines

To remove the grid completely, simply omit the `CartesianGrid` component or
explicitly hide both horizontal and vertical lines:

```tsx
<CartesianGrid horizontal={false} vertical={false} />
```
