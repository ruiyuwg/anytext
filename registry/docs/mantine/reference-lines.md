## Reference lines

Use `referenceLines` prop to render reference lines. Reference lines are always
rendered behind the chart.

#### Example: referenceLines

```tsx
// Demo.tsx
import { CompositeChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <CompositeChart
      h={300}
      data={data}
      dataKey="date"
      yAxisProps={{ domain: [0, 100] }}
      referenceLines={[
        { y: 1200, label: 'Average sales', color: 'red.6' },
        { x: 'Mar 25', label: 'Report out', color: 'blue.7' },
      ]}
      maxBarWidth={30}
      series={[
        { name: 'Tomatoes', color: 'rgba(18, 120, 255, 0.2)', type: 'bar' },
        { name: 'Apples', color: 'red.8', type: 'line' },
      ]}
    />
  );
}

// data.ts
export const data = [
  {
    date: 'Mar 22',
    Apples: 2890,
    Oranges: 2338,
    Tomatoes: 2452,
  },
  {
    date: 'Mar 23',
    Apples: 2756,
    Oranges: 2103,
    Tomatoes: 2402,
  },
  {
    date: 'Mar 24',
    Apples: 3322,
    Oranges: 986,
    Tomatoes: 1821,
  },
  {
    date: 'Mar 25',
    Apples: 3470,
    Oranges: 2108,
    Tomatoes: 2809,
  },
  {
    date: 'Mar 26',
    Apples: 3129,
    Oranges: 1726,
    Tomatoes: 2290,
  },
];
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| activeDotProps | MantineChartDotProps | - | Props passed down to all active dots. Ignored if withDots={false} is set. |
| areaProps | Partial\<Omit\<Props, "ref">> | ((series: CompositeChartSeries) => Partial\<Omit\<Props, "ref">>) | - | Props passed down to recharts Area component |
| barProps | Partial\<Omit\<Props, "ref">> | ((series: CompositeChartSeries) => Partial\<Omit\<Props, "ref">>) | - | Props passed down to recharts Bar component |
| children | React.ReactNode | - | Additional components that are rendered inside recharts AreaChart component |
| composedChartProps | Omit, nextState: Readonly<...>, nextContext: any): void; }>, "ref"> | - | Props passed down to recharts AreaChart component |
| connectNulls | boolean | - | Determines whether points with null values should be connected |
| curveType | CompositeChartCurveType | - | Type of the curve |
| data | Record\<string, any>\[] | required | Data used to display chart |
| dataKey | string | required | Key of the data object for x-axis values |
| dotProps | MantineChartDotProps | - | Props passed down to all dots. Ignored if withDots={false} is set. |
| gridAxis | "none" | "x" | "y" | "xy" | - | Specifies which lines should be displayed in the grid, 'x' by default |
| gridColor | MantineColor | - | Color of the grid and cursor lines, by default depends on color scheme |
| gridProps | RechartsProps | - | Props passed down to the CartesianGrid component |
| legendProps | RechartsProps | - | Props passed down to the Legend component |
| lineProps | ((series: CompositeChartSeries) => Partial\<Omit\<Props, "ref">>) | Partial\<Omit\<Props, "ref">> | - | Props passed down to recharts Line component |
| maxBarWidth | number | - | Maximum bar width in px |
| minBarSize | number | - | Sets minimum height of the bar in px |
| referenceLines | ChartReferenceLineProps\[] | - | Reference lines that should be displayed on the chart |
| rightYAxisLabel | string | - | A label to display next to the right y-axis |
| rightYAxisProps | RechartsProps | - | Props passed down to the YAxis recharts component rendered on the right side |
| series | CompositeChartSeries\[] | required | An array of objects with name and color keys. Determines which data should be consumed from the data array. |
| strokeDasharray | string | number | - | Dash array for the grid lines and cursor, '5 5' by default |
| strokeWidth | number | - | Stroke width for the chart lines |
| textColor | MantineColor | - | Color of the text displayed inside the chart, 'dimmed' by default |
| tickLine | "none" | "x" | "y" | "xy" | - | Specifies which axis should have tick line, 'y' by default |
| tooltipAnimationDuration | number | - | Tooltip position animation duration in ms, 0 by default |
| tooltipProps | RechartsProps | - | Props passed down to the Tooltip component |
| unit | string | - | Unit displayed next to each tick in y-axis |
| valueFormatter | (value: number) => string | - | A function to format values on Y axis and inside the tooltip |
| withBarValueLabel | boolean | - | Determines whether a label with bar value should be displayed on top of each bar |
| withDots | boolean | - | Determines whether dots should be displayed |
| withLegend | boolean | - | Determines whether chart legend should be displayed, false by default |
| withPointLabels | boolean | - | Determines whether each point should have associated label |
| withRightYAxis | boolean | - | Determines whether additional y-axis should be displayed on the right side of the chart, false by default |
| withTooltip | boolean | - | Determines whether chart tooltip should be displayed, true by default |
| withXAxis | boolean | - | Determines whether x-axis should be displayed, true by default |
| withYAxis | boolean | - | Determines whether y-axis should be displayed, true by default |
| xAxisLabel | string | - | A label to display below the x-axis |
| xAxisProps | RechartsProps | - | Props passed down to the XAxis recharts component |
| yAxisLabel | string | - | A label to display next to the y-axis |
| yAxisProps | RechartsProps | - | Props passed down to the YAxis recharts component |

#### Styles API

CompositeChart component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**CompositeChart selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-CompositeChart-root | Root element |
| area | .mantine-CompositeChart-area | Area of the chart |
| line | .mantine-CompositeChart-line | Line of the chart |
| bar | .mantine-CompositeChart-bar | Bar of the chart |
| axis | .mantine-CompositeChart-axis | X and Y axis of the chart |
| container | .mantine-CompositeChart-container | Recharts ResponsiveContainer component |
| grid | .mantine-CompositeChart-grid | Recharts CartesianGrid component |
| legend | .mantine-CompositeChart-legend | Legend root element |
| legendItem | .mantine-CompositeChart-legendItem | Legend item representing data series |
| legendItemColor | .mantine-CompositeChart-legendItemColor | Legend item color |
| legendItemName | .mantine-CompositeChart-legendItemName | Legend item name |
| tooltip | .mantine-CompositeChart-tooltip | Tooltip root element |
| tooltipBody | .mantine-CompositeChart-tooltipBody | Tooltip wrapper around all items |
| tooltipItem | .mantine-CompositeChart-tooltipItem | Tooltip item representing data series |
| tooltipItemBody | .mantine-CompositeChart-tooltipItemBody | Tooltip item wrapper around item color and name |
| tooltipItemColor | .mantine-CompositeChart-tooltipItemColor | Tooltip item color |
| tooltipItemName | .mantine-CompositeChart-tooltipItemName | Tooltip item name |
| tooltipItemData | .mantine-CompositeChart-tooltipItemData | Tooltip item data |
| tooltipLabel | .mantine-CompositeChart-tooltipLabel | Label of the tooltip |
| referenceLine | .mantine-CompositeChart-referenceLine | Reference line |
| axisLabel | .mantine-CompositeChart-axisLabel | X and Y axis labels |

**CompositeChart CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --chart-grid-color | Controls color of the grid and cursor lines |
| root | --chart-text-color | Controls color of the axis labels |

### DonutChart

Package: @mantine/charts
Import: import { DonutChart } from '@mantine/charts';
Description: Donut chart component

## Usage

`DonutChart` is based on [PieChart recharts component](https://recharts.org/en-US/api/PieChart):

#### Example: usage

```tsx
// Demo.tsx
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart data={data} />;
}

// data.ts
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 100, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
```

## Segments labels

Set `withLabels` prop to display labels next to each segment:

#### Example: withLabels

```tsx
// Demo.tsx
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart withLabels data={data} />;
}

// data.ts
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 100, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
```

## Size and thickness

Set `size` prop to control width and height of the chart. Note that if `withLabels` prop is set,
the chart height is automatically increased by 80px to make room for labels. You can override
this behavior by setting `h` [style prop](https://mantine.dev/styles/style-props).

#### Example: size

```tsx
// Demo.tsx
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart data={data} />;
}

// data.ts
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 100, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
```

## Padding angle

Use `paddingAngle` prop to control the space between segments:

#### Example: paddingAngle

```tsx
// Demo.tsx
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart data={data} />;
}

// data.ts
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 100, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
```

## Segment color

You can reference colors from [theme](https://mantine.dev/theming/theme-object) the same way as in
other components, for example, `blue`, `red.5`, `orange.7`, etc. Any valid CSS
color value is also accepted.

#### Example: color

```tsx
import { DonutChart } from '@mantine/charts';

function Demo() {
  return (
    <DonutChart
      data={[
        { name: 'USA', value: 400, color: '' },
        { name: 'Other', value: 200, color: 'gray.6' },
      ]}
    />
  );
}
```

## Tooltip data source

By default, the tooltip displays data for all segments when hovered over any segment.
To display data only for the hovered segment, set `tooltipDataSource="segment"`:

#### Example: tooltipDataSource

```tsx
// Demo.tsx
import { Group, Text } from '@mantine/core';
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Group gap={50}>
      <div>
        <Text fz="xs" mb="sm" ta="center">
          Data only for hovered segment
        </Text>
        <DonutChart data={data} tooltipDataSource="segment" mx="auto" />
      </div>

      <div>
        <Text fz="xs" mb="sm" ta="center">
          Data only for all segments
        </Text>
        <DonutChart data={data} mx="auto" />
      </div>
    </Group>
  );
}

// data.ts
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 100, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
```

## Without tooltip

To remove the tooltip, set `withTooltip={false}`:

#### Example: noTooltip

```tsx
// Demo.tsx
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart data={data} withTooltip={false} />;
}

// data.ts
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 100, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
```

## Chart label

To display a label in the center of the chart, use `chartLabel` prop.
It accepts a string or a number:

#### Example: chartLabel

```tsx
// Demo.tsx
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart data={data} chartLabel="Users by country" />;
}

// data.ts
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 100, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
```

## Start and end angle

Use `startAngle` and `endAngle` props to control the start and end angle of the chart.
For example, to display a half-circle chart, set `startAngle={180}` and `endAngle={0}`:

#### Example: angle

```tsx
// Demo.tsx
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart data={data} startAngle={180} endAngle={0} />;
}

// data.ts
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 100, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
```

Note that even when `startAngle` and `endAngle` props are set, the chart still takes
the same amount of space as if it was a full circle.
