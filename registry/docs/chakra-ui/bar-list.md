# Bar List

```tsx
"use client"

import { BarList, type BarListData, useChart } from "@chakra-ui/charts"

export const BarListBasic = () => {
  const chart = useChart<BarListData>({
    sort: { by: "value", direction: "desc" },
    data: [
      { name: "Google", value: 1200000 },
      { name: "Direct", value: 100000 },
      { name: "Bing", value: 200000 },
      { name: "Yahoo", value: 20000 },
      { name: "ChatGPT", value: 1345000 },
      { name: "Github", value: 100000 },
      { name: "Yandex", value: 100000 },
    ],
    series: [{ name: "name", color: "teal.subtle" }],
  })

  return (
    <BarList.Root chart={chart}>
      <BarList.Content>
        <BarList.Bar />
        <BarList.Value />
      </BarList.Content>
    </BarList.Root>
  )
}

```

## Usage

```tsx
import { BarList, Chart, useChart } from "@chakra-ui/charts"
```

```tsx
<BarList.Root>
  <BarList.Content>
    <BarList.Bar />
    <BarList.Value />
  </BarList.Content>
</BarList.Root>
```

## Examples

### Sort Order

Set the `sort` key to `{ by: "value", direction: "asc" }` to sort the bars in
ascending order.

```ts
const chart = useChart<BarListData>({
  sort: { by: "value", direction: "asc" },
  // ...
})
```

```tsx
"use client"

import { BarList, type BarListData, useChart } from "@chakra-ui/charts"

export const BarListAscending = () => {
  const chart = useChart<BarListData>({
    sort: { by: "value", direction: "asc" },
    data: [
      { name: "Google", value: 1200000 },
      { name: "Direct", value: 100000 },
      { name: "Bing", value: 200000 },
      { name: "Yahoo", value: 20000 },
      { name: "ChatGPT", value: 1345000 },
      { name: "Github", value: 100000 },
      { name: "Yandex", value: 100000 },
    ],
    series: [{ name: "name", color: "teal.subtle" }],
  })

  return (
    <BarList.Root chart={chart}>
      <BarList.Content>
        <BarList.Bar />
        <BarList.Value />
      </BarList.Content>
    </BarList.Root>
  )
}

```

### Format Value

Pass the `valueFormatter` prop to the `BarList.Value` component to format the
value of the bars.

```tsx /valueFormatter={(value) => value.toLocaleString()}/
<BarList.Value valueFormatter={(value) => value.toLocaleString()} />
```

```tsx
"use client"

import { BarList, type BarListData, useChart } from "@chakra-ui/charts"

export const BarListWithFormatter = () => {
  const chart = useChart<BarListData>({
    sort: { by: "value", direction: "desc" },
    data: [
      { name: "Created", value: 120 },
      { name: "Initial Contact", value: 90 },
      { name: "Booked Demo", value: 45 },
      { name: "Closed", value: 10 },
    ],
    series: [{ name: "name", color: "pink.subtle" }],
  })

  const getPercent = (value: number) =>
    chart.getValuePercent("value", value).toFixed(0)

  return (
    <BarList.Root chart={chart}>
      <BarList.Content>
        <BarList.Bar />
        <BarList.Value
          valueFormatter={(value) => `${value} (${getPercent(value)}%)`}
        />
      </BarList.Content>
    </BarList.Root>
  )
}

```

### Labels

To add name and value labels to the bars, use the `BarList.Label` component.

```tsx
<BarList.Label title="Search Engine" flex="1">
  <BarList.Bar />
</BarList.Label>
```

```tsx
"use client"

import { BarList, type BarListData, useChart } from "@chakra-ui/charts"

export const BarListWithLabel = () => {
  const chart = useChart<BarListData>({
    sort: { by: "value", direction: "desc" },
    data: [
      { name: "Google", value: 1200000 },
      { name: "Direct", value: 100000 },
      { name: "Bing", value: 200000 },
      { name: "Yahoo", value: 20000 },
      { name: "ChatGPT", value: 1345000 },
      { name: "Github", value: 100000 },
      { name: "Yandex", value: 100000 },
    ],
    series: [{ name: "name", color: "teal.subtle" }],
  })

  return (
    <BarList.Root chart={chart}>
      <BarList.Content>
        <BarList.Label title="Search Engine" flex="1">
          <BarList.Bar />
        </BarList.Label>
        <BarList.Label title="Downloads" titleAlignment="end">
          <BarList.Value />
        </BarList.Label>
      </BarList.Content>
    </BarList.Root>
  )
}

```

### Link

To make the bars render a link, pass the `label` prop to the `BarList.Bar`
component.

```tsx
<BarList.Bar
  label={({ payload }) => <a href={payload.href}>{payload.name}</a>}
/>
```

```tsx
"use client"

import { BarList, type BarListData, useChart } from "@chakra-ui/charts"

export const BarListWithLink = () => {
  const chart = useChart<BarListData>({
    sort: { by: "value", direction: "desc" },
    data: [
      { name: "Created", value: 120, href: "#" },
      { name: "Initial Contact", value: 90, href: "#" },
      { name: "Booked Demo", value: 45, href: "#" },
      { name: "Closed", value: 10, href: "#" },
    ],
    series: [{ name: "name", color: "pink.subtle" }],
  })

  return (
    <BarList.Root chart={chart}>
      <BarList.Content>
        <BarList.Bar
          label={({ payload }) => <a href={payload.href}>{payload.name}</a>}
        />
        <BarList.Value />
      </BarList.Content>
    </BarList.Root>
  )
}

```

### Tooltip

Pass the `tooltip` prop to the `BarList.Bar` component to show a tooltip when
hovering over the bar.

```tsx
"use client"

import { BarList, type BarListData, useChart } from "@chakra-ui/charts"

export const BarListWithTooltip = () => {
  const chart = useChart<BarListData>({
    sort: { by: "value", direction: "desc" },
    data: [
      { name: "Google", value: 1200000 },
      { name: "Direct", value: 100000 },
      { name: "Bing", value: 200000 },
      { name: "Yahoo", value: 20000 },
      { name: "ChatGPT", value: 1345000 },
      { name: "Github", value: 100000 },
      { name: "Yandex", value: 100000 },
    ],
    series: [{ name: "name", color: "teal.subtle", label: "Search Engine" }],
  })

  return (
    <BarList.Root chart={chart}>
      <BarList.Content>
        <BarList.Label title="Search Engine" flex="1">
          <BarList.Bar tooltip />
        </BarList.Label>
        <BarList.Label title="Downloads" titleAlignment="end">
          <BarList.Value />
        </BarList.Label>
      </BarList.Content>
    </BarList.Root>
  )
}

```

### Multiple values

Here's an example of how to render the value and percent of the bars.

```tsx
"use client"

import { BarList, type BarListData, useChart } from "@chakra-ui/charts"

export const BarListWithMultiValue = () => {
  const chart = useChart<BarListData>({
    sort: { by: "value", direction: "desc" },
    data: [
      { name: "Google", value: 1200000 },
      { name: "Direct", value: 100000 },
      { name: "Bing", value: 200000 },
      { name: "Yahoo", value: 20000 },
      { name: "ChatGPT", value: 1345000 },
      { name: "Github", value: 100000 },
      { name: "Yandex", value: 100000 },
    ],
    series: [{ name: "name", color: "teal.subtle" }],
  })

  const getPercent = (value: number) =>
    chart.getValuePercent("value", value).toFixed(2)

  return (
    <BarList.Root chart={chart}>
      <BarList.Content>
        <BarList.Label title="Search Engine" flex="1">
          <BarList.Bar />
        </BarList.Label>
        <BarList.Label title="Downloads" minW="16" titleAlignment="end">
          <BarList.Value />
        </BarList.Label>
        <BarList.Label title="%" minW="16" titleAlignment="end">
          <BarList.Value valueFormatter={(value) => `${getPercent(value)}%`} />
        </BarList.Label>
      </BarList.Content>
    </BarList.Root>
  )
}

```
