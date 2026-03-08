# Stat

```tsx
import { Stat } from "@chakra-ui/react"

export const StatBasic = () => {
  return (
    <Stat.Root>
      <Stat.Label>Unique visitors</Stat.Label>
      <Stat.ValueText>192.1k</Stat.ValueText>
    </Stat.Root>
  )
}

```

## Usage

```tsx
import { Stat } from "@chakra-ui/react"
```

```tsx
<Stat.Root>
  <Stat.Label />
  <Stat.ValueText />
  <Stat.HelpText />
  <Stat.UpIndicator />
</Stat.Root>
```

## Examples

### Format Options

Use the `FormatNumber` component within `Stat.ValueText` to format the value.

```tsx
import { FormatNumber, Stat } from "@chakra-ui/react"

export const StatWithFormatOptions = () => {
  return (
    <Stat.Root>
      <Stat.Label>Revenue</Stat.Label>
      <Stat.ValueText>
        <FormatNumber value={935.4} style="currency" currency="USD" />
      </Stat.ValueText>
    </Stat.Root>
  )
}

```

### Indicator

Here's an example of how to display a statistic with an indicator.

```tsx
import { Badge, Stat } from "@chakra-ui/react"

export const StatWithIndicator = () => {
  return (
    <Stat.Root>
      <Stat.Label>Unique visitors</Stat.Label>
      <Stat.ValueText>192.1k</Stat.ValueText>
      <Badge colorPalette="red" variant="plain" px="0">
        <Stat.DownIndicator />
        1.9%
      </Badge>
    </Stat.Root>
  )
}

```

### Info Tip

Compose the `InfoTip` and `Stat.Label` components to display an info tip.

```tsx
import { Stat } from "@chakra-ui/react"
import { InfoTip } from "@/components/ui/toggle-tip"

export const StatWithInfoTip = () => {
  return (
    <Stat.Root>
      <Stat.Label>
        Unique
        <InfoTip>Some info</InfoTip>
      </Stat.Label>
      <Stat.ValueText>192.1k</Stat.ValueText>
    </Stat.Root>
  )
}

```

### Value Unit

Here's an example of how to display a value with a unit.

```tsx
import { Stat } from "@chakra-ui/react"

export const StatWithValueUnit = () => {
  return (
    <Stat.Root>
      <Stat.Label>Time to complete</Stat.Label>
      <Stat.ValueText alignItems="baseline">
        3 <Stat.ValueUnit>hr</Stat.ValueUnit>
        20 <Stat.ValueUnit>min</Stat.ValueUnit>
      </Stat.ValueText>
    </Stat.Root>
  )
}

```

### Progress Bar

Here's an example of how to display a statistic with a progress bar.

```tsx
import { FormatNumber, Progress, Stat } from "@chakra-ui/react"

export const StatWithProgressBar = () => {
  return (
    <Stat.Root maxW="240px">
      <Stat.Label>This week</Stat.Label>
      <Stat.ValueText>
        <FormatNumber
          value={1340}
          style="currency"
          currency="USD"
          maximumFractionDigits={0}
        />
      </Stat.ValueText>
      <Stat.HelpText mb="2">+12% from last week</Stat.HelpText>
      <Progress.Root>
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
      </Progress.Root>
    </Stat.Root>
  )
}

```

### Icon

Here's an example of how to display a statistic with an icon.

```tsx
import { HStack, Icon, Stat } from "@chakra-ui/react"
import { LuDollarSign } from "react-icons/lu"

export const StatWithIcon = () => {
  return (
    <Stat.Root maxW="240px" borderWidth="1px" p="4" rounded="md">
      <HStack justify="space-between">
        <Stat.Label>Sales</Stat.Label>
        <Icon color="fg.muted">
          <LuDollarSign />
        </Icon>
      </HStack>
      <Stat.ValueText>$4.24k</Stat.ValueText>
    </Stat.Root>
  )
}

```

### Trend

Here's an example of how to display a statistic with a trend indicator.

```tsx
import { Badge, FormatNumber, HStack, Stat } from "@chakra-ui/react"

export const StatWithTrend = () => {
  return (
    <Stat.Root>
      <Stat.Label>Unique </Stat.Label>
      <HStack>
        <Stat.ValueText>
          <FormatNumber value={8456.4} style="currency" currency="USD" />
        </Stat.ValueText>
        <Badge colorPalette="green" gap="0">
          <Stat.UpIndicator />
          12%
        </Badge>
      </HStack>
      <Stat.HelpText>since last month</Stat.HelpText>
    </Stat.Root>
  )
}

```

### Closed Component

Here's how to setup the Stat for a closed component composition.

## Props

### Root

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
| size | md | `'sm' \| 'md' \| 'lg'` | The size of the component |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| unstyled | undefined | `boolean` | Whether to remove the component's style. |

## Explorer

Explore the `Stat` component parts interactively. Click on parts in the sidebar
to highlight them in the preview.
