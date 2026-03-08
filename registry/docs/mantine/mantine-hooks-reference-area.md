## Reference area

Use `ReferenceArea` component from recharts to display a reference area:

#### Example: referenceArea

```tsx
// Demo.tsx
import { ReferenceArea } from 'recharts';
import { LineChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey="date"
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    >
      <ReferenceArea
        x1="Mar 23"
        x2="Mar 25"
        y1={1200}
        y2={3200}
        yAxisId="left"
        fillOpacity={0.3}
        strokeOpacity={0.9}
        fill="var(--mantine-color-gray-4)"
        stroke="var(--mantine-color-gray-6)"
        strokeWidth={1}
        label={{
          value: 'Weekend sales target',
          position: 'insideTopRight',
          fontSize: 12,
          fill: 'var(--mantine-color-bright)',
        }}
      />
    </LineChart>
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
| children | React.ReactNode | - | Additional components that are rendered inside recharts LineChart component |
| connectNulls | boolean | - | Determines whether points with null values should be connected |
| curveType | LineChartCurveType | - | Type of the curve |
| data | Record\<string, any>\[] | required | Data used to display chart |
| dataKey | string | required | Key of the data object for x-axis values |
| dotProps | MantineChartDotProps | - | Props passed down to all dots. Ignored if withDots={false} is set. |
| fillOpacity | number | - | Controls fill opacity of all lines |
| gradientStops | LineChartGradientStop\[] | - | Data used to generate gradient stops |
| gridAxis | "none" | "x" | "y" | "xy" | - | Specifies which lines should be displayed in the grid, 'x' by default |
| gridColor | MantineColor | - | Color of the grid and cursor lines, by default depends on color scheme |
| gridProps | RechartsProps | - | Props passed down to the CartesianGrid component |
| legendProps | RechartsProps | - | Props passed down to the Legend component |
| lineChartProps | Omit, nextState: Readonly<...>, nextContext: any): void; }>, "ref"> | - | Props passed down to recharts LineChart component |
| lineProps | Partial\<Omit\<Props, "ref">> | ((series: LineChartSeries) => Partial\<Omit\<Props, "ref">>) | - | Props passed down to recharts Line component |
| orientation | "horizontal" | "vertical" | - | Chart orientation, 'horizontal' by default |
| referenceLines | ChartReferenceLineProps\[] | - | Reference lines that should be displayed on the chart |
| rightYAxisLabel | string | - | A label to display next to the right y-axis |
| rightYAxisProps | RechartsProps | - | Props passed down to the YAxis recharts component rendered on the right side |
| series | LineChartSeries\[] | required | An array of objects with name and color keys. Determines which data should be consumed from the data array. |
| strokeDasharray | string | number | - | Dash array for the grid lines and cursor, '5 5' by default |
| strokeWidth | number | - | Stroke width for the chart lines |
| textColor | MantineColor | - | Color of the text displayed inside the chart, 'dimmed' by default |
| tickLine | "none" | "x" | "y" | "xy" | - | Specifies which axis should have tick line, 'y' by default |
| tooltipAnimationDuration | number | - | Tooltip position animation duration in ms, 0 by default |
| tooltipProps | RechartsProps | - | Props passed down to the Tooltip component |
| type | LineChartType | - | Controls styles of the line |
| unit | string | - | Unit displayed next to each tick in y-axis |
| valueFormatter | (value: number) => string | - | A function to format values on Y axis and inside the tooltip |
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

LineChart component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**LineChart selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-LineChart-root | Root element |
| line | .mantine-LineChart-line | Line of the chart |
| axis | .mantine-LineChart-axis | X and Y axis of the chart |
| container | .mantine-LineChart-container | Recharts ResponsiveContainer component |
| grid | .mantine-LineChart-grid | Recharts CartesianGrid component |
| legend | .mantine-LineChart-legend | Legend root element |
| legendItem | .mantine-LineChart-legendItem | Legend item representing data series |
| legendItemColor | .mantine-LineChart-legendItemColor | Legend item color |
| legendItemName | .mantine-LineChart-legendItemName | Legend item name |
| tooltip | .mantine-LineChart-tooltip | Tooltip root element |
| tooltipBody | .mantine-LineChart-tooltipBody | Tooltip wrapper around all items |
| tooltipItem | .mantine-LineChart-tooltipItem | Tooltip item representing data series |
| tooltipItemBody | .mantine-LineChart-tooltipItemBody | Tooltip item wrapper around item color and name |
| tooltipItemColor | .mantine-LineChart-tooltipItemColor | Tooltip item color |
| tooltipItemName | .mantine-LineChart-tooltipItemName | Tooltip item name |
| tooltipItemData | .mantine-LineChart-tooltipItemData | Tooltip item data |
| tooltipLabel | .mantine-LineChart-tooltipLabel | Label of the tooltip |
| referenceLine | .mantine-LineChart-referenceLine | Reference line |
| axisLabel | .mantine-LineChart-axisLabel | X and Y axis labels |

**LineChart CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --chart-grid-color | Controls color of the grid and cursor lines |
| root | --chart-text-color | Controls color of the axis labels |

### PieChart

Package: @mantine/charts
Import: import { PieChart } from '@mantine/charts';
Description: Pie chart component

## Usage

`PieChart` is based on [PieChart recharts component](https://recharts.org/en-US/api/PieChart):

#### Example: usage

```tsx
// Demo.tsx
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart data={data} />;
}

// data.ts
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 300, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
```

## Segments labels

Set `withLabels` prop to display labels next to each segment. Use `labelPosition` prop
to control the position of labels relative to the corresponding segment. Note that if
your chart has a lot of segments and `labelPosition="inside"` is set, labels might overlap.
In this case, use `labelPosition="outside`.

#### Example: withLabels

```tsx
// Demo.tsx
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart withLabels data={data} />;
}

// data.ts
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 300, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
```

## Size

Set `size` prop to control width and height of the chart. Note that if `withLabels` and `labelPosition="outside"` prop are set,
the chart height is automatically increased by 80px to make room for labels. You can override
this behavior by setting `h` and `w` [style prop](https://mantine.dev/styles/style-props).

#### Example: size

```tsx
// Demo.tsx
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart data={data} />;
}

// data.ts
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 300, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
```

## Segment color

You can reference colors from [theme](https://mantine.dev/theming/theme-object) the same way as in
other components, for example, `blue`, `red.5`, `orange.7`, etc. Any valid CSS
color value is also accepted.

#### Example: color

```tsx
import { PieChart } from '@mantine/charts';

function Demo() {
  return (
    <PieChart
      data={[
        { name: 'USA', value: 400, color: '' },
        { name: 'Other', value: 200, color: 'gray.6' },
      ]}
    />
  );
}
```

## Enable tooltip

To enable the tooltip, set `withTooltip` prop:

#### Example: tooltip

```tsx
// Demo.tsx
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart data={data} withTooltip />;
}

// data.ts
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 300, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
```

## Tooltip data source

By default, the tooltip displays data for all segments when hovered over any segment.
To display data only for the hovered segment, set `tooltipDataSource="segment"`:

#### Example: tooltipDataSource

```tsx
// Demo.tsx
import { Group, Text } from '@mantine/core';
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Group gap={50}>
      <div>
        <Text fz="xs" mb="sm" ta="center">
          Data only for hovered segment
        </Text>
        <PieChart data={data} withTooltip tooltipDataSource="segment" mx="auto" />
      </div>

      <div>
        <Text fz="xs" mb="sm" ta="center">
          Data only for all segments
        </Text>
        <PieChart data={data} withTooltip mx="auto" />
      </div>
    </Group>
  );
}

// data.ts
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 300, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
```

## Start and end angle

Use `startAngle` and `endAngle` props to control the start and end angle of the chart.
For example, to display a half-circle chart, set `startAngle={180}` and `endAngle={0}`:

#### Example: angle

```tsx
// Demo.tsx
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart data={data} startAngle={180} endAngle={0} />;
}

// data.ts
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 300, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
```

Note that even when `startAngle` and `endAngle` props are set, the chart still takes
the same amount of space as if it was a full circle.
