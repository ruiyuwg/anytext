## Reference area

Use `ReferenceArea` component from recharts to display a reference area:

#### Example: referenceArea

```tsx
// Demo.tsx
import { ReferenceArea } from 'recharts';
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    >
      <ReferenceArea
        x1="Mar 23"
        x2="Mar 25"
        y1={0}
        y2={10000}
        yAxisId="left"
        fillOpacity={0.3}
        strokeOpacity={0.9}
        fill="var(--mantine-color-gray-4)"
        stroke="var(--mantine-color-gray-6)"
        strokeWidth={1}
        label={{
          value: 'Weekend',
          position: 'insideTopRight',
          fontSize: 12,
          fill: 'var(--mantine-color-bright)',
        }}
      />
    </AreaChart>
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
| areaChartProps | Omit, nextState: Readonly<...>, nextContext: any): void; }>, "ref"> | - | Props passed down to recharts AreaChart component |
| areaProps | ((series: AreaChartSeries) => Partial\<Omit\<Props, "ref">>) | Partial\<Omit\<Props, "ref">> | - | Props passed down to recharts Area component |
| children | React.ReactNode | - | Additional components that are rendered inside recharts AreaChart component |
| connectNulls | boolean | - | If set, points with null values are connected |
| curveType | AreaChartCurveType | - | Type of the curve |
| data | ChartData | required | Data used to display chart |
| dataKey | string | required | Key of the data object for x-axis values |
| dotProps | MantineChartDotProps | - | Props passed down to all dots. Ignored if withDots={false} is set. |
| fillOpacity | number | - | Controls fill opacity of all areas |
| gridAxis | "none" | "x" | "y" | "xy" | - | Specifies which lines should be displayed in the grid, 'x' by default |
| gridColor | MantineColor | - | Color of the grid and cursor lines, by default depends on color scheme |
| gridProps | RechartsProps | - | Props passed down to the CartesianGrid component |
| legendProps | RechartsProps | - | Props passed down to the Legend component |
| orientation | "horizontal" | "vertical" | - | Chart orientation, 'horizontal' by default |
| referenceLines | ChartReferenceLineProps\[] | - | Reference lines that should be displayed on the chart |
| rightYAxisLabel | string | - | A label to display next to the right y-axis |
| rightYAxisProps | RechartsProps | - | Props passed down to the YAxis recharts component rendered on the right side |
| series | AreaChartSeries\[] | required | An array of objects with name and color keys. Determines which data should be consumed from the data array. |
| splitColors | \[MantineColor, MantineColor] | - | A tuple of colors used when type="split" is set, ignored in all other cases. A tuple may include theme colors reference or any valid CSS colors |
| splitOffset | number | - | Offset for the split gradient. By default, value is inferred from data and series if possible. Must be generated from the data array with getSplitOffset function. |
| strokeDasharray | string | number | - | Dash array for the grid lines and cursor, '5 5' by default |
| strokeWidth | number | - | Stroke width for the chart areas |
| textColor | MantineColor | - | Color of the text displayed inside the chart, 'dimmed' by default |
| tickLine | "none" | "x" | "y" | "xy" | - | Specifies which axis should have tick line, 'y' by default |
| tooltipAnimationDuration | number | - | Tooltip position animation duration in ms, 0 by default |
| tooltipProps | RechartsProps | - | Props passed down to the Tooltip component |
| type | AreaChartType | - | Controls how chart areas are positioned relative to each other |
| unit | string | - | Unit displayed next to each tick in y-axis |
| valueFormatter | (value: number) => string | - | A function to format values on Y axis and inside the tooltip |
| withDots | boolean | - | Determines whether dots should be displayed |
| withGradient | boolean | - | Determines whether the chart area should be represented with a gradient instead of the solid color |
| withLegend | boolean | - | Determines whether chart legend should be displayed, false by default |
| withPointLabels | boolean | - | If set, each point has an associated label |
| withRightYAxis | boolean | - | Determines whether additional y-axis should be displayed on the right side of the chart, false by default |
| withTooltip | boolean | - | Determines whether chart tooltip should be displayed, true by default |
| withXAxis | boolean | - | Determines whether x-axis should be displayed, true by default |
| withYAxis | boolean | - | Determines whether y-axis should be displayed, true by default |
| xAxisLabel | string | - | A label to display below the x-axis |
| xAxisProps | RechartsProps | - | Props passed down to the XAxis recharts component |
| yAxisLabel | string | - | A label to display next to the y-axis |
| yAxisProps | RechartsProps | - | Props passed down to the YAxis recharts component |

#### Styles API

AreaChart component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**AreaChart selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-AreaChart-root | Root element |
| area | .mantine-AreaChart-area | Area of the chart |
| axis | .mantine-AreaChart-axis | X and Y axis of the chart |
| container | .mantine-AreaChart-container | Recharts ResponsiveContainer component |
| grid | .mantine-AreaChart-grid | Recharts CartesianGrid component |
| legend | .mantine-AreaChart-legend | Legend root element |
| legendItem | .mantine-AreaChart-legendItem | Legend item representing data series |
| legendItemColor | .mantine-AreaChart-legendItemColor | Legend item color |
| legendItemName | .mantine-AreaChart-legendItemName | Legend item name |
| tooltip | .mantine-AreaChart-tooltip | Tooltip root element |
| tooltipBody | .mantine-AreaChart-tooltipBody | Tooltip wrapper around all items |
| tooltipItem | .mantine-AreaChart-tooltipItem | Tooltip item representing data series |
| tooltipItemBody | .mantine-AreaChart-tooltipItemBody | Tooltip item wrapper around item color and name |
| tooltipItemColor | .mantine-AreaChart-tooltipItemColor | Tooltip item color |
| tooltipItemName | .mantine-AreaChart-tooltipItemName | Tooltip item name |
| tooltipItemData | .mantine-AreaChart-tooltipItemData | Tooltip item data |
| tooltipLabel | .mantine-AreaChart-tooltipLabel | Label of the tooltip |
| referenceLine | .mantine-AreaChart-referenceLine | Reference line |
| axisLabel | .mantine-AreaChart-axisLabel | X and Y axis labels |

**AreaChart CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --chart-grid-color | Controls color of the grid and cursor lines |
| root | --chart-text-color | Controls color of the axis labels |

### BarChart

Package: @mantine/charts
Import: import { BarChart } from '@mantine/charts';
Description: Bar chart component with stacked and percent variants

## Usage

Use `BarChart` component without `type` prop to render a regular bar chart.
In a regular bar chart, each data series is plotted on its own and does
not interact with other series.

#### Example: usage

```tsx
// Demo.tsx
import { BarChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
      
    />
  );
}

// data.ts
export const data = [
  { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
];
```

## Stacked bar chart

Set `type="stacked"` to render a stacked bar chart. In this type of bar chart
stacking is applied along the vertical axis, allowing you to see the overall trend
as well as the contribution of each individual series to the total.

#### Example: stacked

```tsx
// Demo.tsx
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      type="stacked"
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}

// data.ts
export const data = [
  { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
];
```

## Mixed stacked bar chart

You can control how series are stacked by setting `stackId` property in series object:

#### Example: mixedStack

```tsx
// Demo.tsx
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      series={[
        { name: 'Smartphones', color: 'violet.6', stackId: 'a' },
        { name: 'Laptops', color: 'blue.6', stackId: 'b' },
        { name: 'Tablets', color: 'teal.6', stackId: 'b' },
      ]}
    />
  );
}

// data.ts
export const data = [
  { month: 'January', Smartphones: 1200, Laptops: 500, Tablets: 800 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 1800, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 200, Tablets: 700 },
  { month: 'June', Smartphones: 800, Laptops: 500, Tablets: 200 },
];
```

## Percent bar chart

Set `type="percent"` to render a percent bar chart. In this type of bar chart
the y-axis scale is always normalized to 100%, making it easier to compare the
contribution of each series in terms of percentages.

#### Example: percent

```tsx
// Demo.tsx
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      type="percent"
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}

// data.ts
export const data = [
  { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
];
```

## Waterfall bar chart

Set `type="waterfall"` to render a waterfall bar chart. This chart type illustrates how an
initial value is influenced by subsequent positive or negative values,
with each bar starting where the previous one ended.
Use the `color` prop inside data to color each bar individually. Note that the series color gets overwritten for this specific bar.
Use the `standalone` prop inside data to decouple the bar from the flow.

#### Example: waterfall

```tsx
// Demo.tsx
import { BarChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="item"
      type="waterfall"
      series={[{ name: 'Effective tax rate in %', color: 'blue' }]}
      withLegend
    />
  );
}

// data.ts
export const data =
[
  { item: 'TaxRate', 'Effective tax rate in %': 21, color: 'blue' },
  { item: 'Foreign inc.', 'Effective tax rate in %': -15.5, color: 'teal' },
  { item: 'Perm. diff.', 'Effective tax rate in %': -3, color: 'teal' },
  { item: 'Credits', 'Effective tax rate in %': -3, color: 'teal' },
  { item: 'Loss carryf. ', 'Effective tax rate in %': -2, color: 'teal' },
  { item: 'Law changes', 'Effective tax rate in %': 2, color: 'red' },
  { item: 'Reven. adj.', 'Effective tax rate in %': 4, color: 'red' },
  { item: 'ETR', 'Effective tax rate in %': 3.5, color: 'blue', standalone: true },
];
```
