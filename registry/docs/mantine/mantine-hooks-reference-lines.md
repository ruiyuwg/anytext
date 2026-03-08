## Reference lines

Use `referenceLines` prop to render reference lines. Reference lines are always
rendered behind the chart.

#### Example: referenceLines

```tsx
// Demo.tsx
import { ScatterChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <ScatterChart
      h={350}
      data={data}
      dataKey={{ x: 'age', y: 'BMI' }}
      xAxisLabel="Age"
      yAxisLabel="BMI"
      referenceLines={[
        { y: 14, label: 'Underweight ↓', color: 'red.7' },
        { y: 19, label: 'Normal weight', color: 'teal.7' },
        { y: 30, label: 'Overweight ↑', color: 'red.7' },
      ]}
    />
  );
}

// data.ts
export const data = [
  {
    color: 'blue.5',
    name: 'Group 1',
    data: [
      { age: 25, BMI: 20 },
      { age: 30, BMI: 22 },
      { age: 35, BMI: 18 },
      { age: 40, BMI: 25 },
      { age: 45, BMI: 30 },
      { age: 28, BMI: 15 },
      { age: 22, BMI: 12 },
      { age: 50, BMI: 28 },
      { age: 32, BMI: 19 },
      { age: 48, BMI: 31 },
      { age: 26, BMI: 24 },
      { age: 38, BMI: 27 },
      { age: 42, BMI: 29 },
      { age: 29, BMI: 16 },
      { age: 34, BMI: 23 },
      { age: 44, BMI: 33 },
      { age: 23, BMI: 14 },
      { age: 37, BMI: 26 },
      { age: 49, BMI: 34 },
      { age: 27, BMI: 17 },
      { age: 41, BMI: 32 },
      { age: 31, BMI: 21 },
      { age: 46, BMI: 35 },
      { age: 24, BMI: 13 },
      { age: 33, BMI: 22 },
      { age: 39, BMI: 28 },
      { age: 47, BMI: 30 },
      { age: 36, BMI: 25 },
      { age: 43, BMI: 29 },
      { age: 21, BMI: 11 },
    ],
  },
];
```

}}
labels={{ x: 'Age', y: 'Spending' }}
/>
);
}

// data.ts
export const spendingsData = \[
{
color: 'cyan',
name: 'Average monthly spending',
data: \[
{ age: 25, average\_monthly\_spending: 1400 },
{ age: 30, average\_monthly\_spending: 2100 },
{ age: 35, average\_monthly\_spending: 1800 },
{ age: 40, average\_monthly\_spending: 2400 },
{ age: 45, average\_monthly\_spending: 2300 },
{ age: 28, average\_monthly\_spending: 1600 },
{ age: 22, average\_monthly\_spending: 1200 },
{ age: 50, average\_monthly\_spending: 3200 },
{ age: 32, average\_monthly\_spending: 1900 },
{ age: 48, average\_monthly\_spending: 2700 },
{ age: 26, average\_monthly\_spending: 1700 },
{ age: 38, average\_monthly\_spending: 2200 },
{ age: 42, average\_monthly\_spending: 2600 },
{ age: 29, average\_monthly\_spending: 1500 },
{ age: 34, average\_monthly\_spending: 2000 },
{ age: 44, average\_monthly\_spending: 2500 },
{ age: 23, average\_monthly\_spending: 1300 },
{ age: 37, average\_monthly\_spending: 2100 },
{ age: 49, average\_monthly\_spending: 2900 },
{ age: 27, average\_monthly\_spending: 1600 },
{ age: 41, average\_monthly\_spending: 2500 },
{ age: 31, average\_monthly\_spending: 1800 },
{ age: 46, average\_monthly\_spending: 2700 },
{ age: 24, average\_monthly\_spending: 1400 },
{ age: 33, average\_monthly\_spending: 2100 },
{ age: 39, average\_monthly\_spending: 2400 },
{ age: 47, average\_monthly\_spending: 2800 },
{ age: 36, average\_monthly\_spending: 2200 },
{ age: 43, average\_monthly\_spending: 2600 },
{ age: 21, average\_monthly\_spending: 1100 },
],
},
];

````


## Tooltip labels

To customize labels displayed in the tooltip, use `labels` prop:

DEMOPLACEHOLDER::ScatterChartDemos.labels::END

## Custom tooltip

Use `tooltipProps.content` to pass custom tooltip renderer to recharts [Tooltip](https://recharts.org/en-US/api/Tooltip)
component:

DEMOPLACEHOLDER::ScatterChartDemos.customTooltip::END

## Remove tooltip

To remove tooltip, set `withTooltip={false}`. It also removes the cursor line
and disables interactions with the chart.

DEMOPLACEHOLDER::ScatterChartDemos.noTooltip::END

## Tooltip animation

By default, tooltip animation is disabled. To enable it, set `tooltipAnimationDuration`
prop to a number of milliseconds to animate the tooltip position change.

DEMOPLACEHOLDER::ScatterChartDemos.tooltipAnimation::END

## Customize dots

You can use any shape as a dot by passing props to recharts [Scatter](https://recharts.org/en-US/api/Scatter)
component:

DEMOPLACEHOLDER::ScatterChartDemos.dotSize::END

## Reference lines

Use `referenceLines` prop to render reference lines. Reference lines are always
rendered behind the chart.

DEMOPLACEHOLDER::ScatterChartDemos.referenceLines::END


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| data | ScatterChartSeries[] | required | Data that is used to build the chart |
| dataKey | { x: string; y: string; } | required | Keys that should be used to retrieve data from the data array on x and y axis |
| gridAxis | "none" | "x" | "y" | "xy" | - | Specifies which lines should be displayed in the grid, 'x' by default |
| gridColor | MantineColor | - | Color of the grid and cursor lines, by default depends on color scheme |
| gridProps | RechartsProps | - | Props passed down to the CartesianGrid component |
| labels | { x?: string; y?: string | undefined; } | undefined | - | Labels that should be used instead of keys names in the tooltip |
| legendProps | RechartsProps | - | Props passed down to the Legend component |
| orientation | "horizontal" | "vertical" | - | Chart orientation, 'horizontal' by default |
| pointLabels | "x" | "y" | - | If set, displays labels next to points for the given axis |
| referenceLines | ChartReferenceLineProps[] | - | Reference lines that should be displayed on the chart |
| rightYAxisLabel | string | - | A label to display next to the right y-axis |
| rightYAxisProps | RechartsProps | - | Props passed down to the YAxis recharts component rendered on the right side |
| scatterChartProps | Omit, nextState: Readonly<...>, nextContext: any): void; }>, "ref"> | - | Props passed down to recharts ScatterChart component |
| scatterProps | Partial<Omit<Props, "ref">> | - | Props passed down to recharts Scatter component |
| strokeDasharray | string | number | - | Dash array for the grid lines and cursor, '5 5' by default |
| textColor | MantineColor | - | Color of the text displayed inside the chart, 'dimmed' by default |
| tickLine | "none" | "x" | "y" | "xy" | - | Specifies which axis should have tick line, 'y' by default |
| tooltipAnimationDuration | number | - | Tooltip position animation duration in ms, 0 by default |
| tooltipProps | RechartsProps | - | Props passed down to the Tooltip component |
| unit | { x?: string; y?: string | undefined; } | undefined | - | Units displayed after value on axis and inside the tooltip |
| valueFormatter | ((value: number) => string) | { x?: ((value: number) => string); y?: ((value: number) => string) | undefined; } | undefined | - | A function to format values on x/y axis and in the tooltip |
| withLegend | boolean | - | Determines whether chart legend should be displayed, false by default |
| withRightYAxis | boolean | - | Determines whether additional y-axis should be displayed on the right side of the chart, false by default |
| withTooltip | boolean | - | Determines whether chart tooltip should be displayed, true by default |
| withXAxis | boolean | - | Determines whether x-axis should be displayed, true by default |
| withYAxis | boolean | - | Determines whether y-axis should be displayed, true by default |
| xAxisLabel | string | - | A label to display below the x-axis |
| xAxisProps | RechartsProps | - | Props passed down to the XAxis recharts component |
| yAxisLabel | string | - | A label to display next to the y-axis |
| yAxisProps | RechartsProps | - | Props passed down to the YAxis recharts component |


#### Styles API

ScatterChart component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**ScatterChart selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-ScatterChart-root | Root element |
| scatter | .mantine-ScatterChart-scatter | recharts Scatter component |
| axis | .mantine-ScatterChart-axis | X and Y axis of the chart |
| container | .mantine-ScatterChart-container | Recharts ResponsiveContainer component |
| grid | .mantine-ScatterChart-grid | Recharts CartesianGrid component |
| legend | .mantine-ScatterChart-legend | Legend root element |
| legendItem | .mantine-ScatterChart-legendItem | Legend item representing data series |
| legendItemColor | .mantine-ScatterChart-legendItemColor | Legend item color |
| legendItemName | .mantine-ScatterChart-legendItemName | Legend item name |
| tooltip | .mantine-ScatterChart-tooltip | Tooltip root element |
| tooltipBody | .mantine-ScatterChart-tooltipBody | Tooltip wrapper around all items |
| tooltipItem | .mantine-ScatterChart-tooltipItem | Tooltip item representing data series |
| tooltipItemBody | .mantine-ScatterChart-tooltipItemBody | Tooltip item wrapper around item color and name |
| tooltipItemColor | .mantine-ScatterChart-tooltipItemColor | Tooltip item color |
| tooltipItemName | .mantine-ScatterChart-tooltipItemName | Tooltip item name |
| tooltipItemData | .mantine-ScatterChart-tooltipItemData | Tooltip item data |
| tooltipLabel | .mantine-ScatterChart-tooltipLabel | Label of the tooltip |
| referenceLine | .mantine-ScatterChart-referenceLine | Reference line |
| axisLabel | .mantine-ScatterChart-axisLabel | X and Y axis labels |

**ScatterChart CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --chart-grid-color | Controls color of the grid and cursor lines |
| root | --chart-text-color | Controls color of the axis labels |



### Sparkline
Package: @mantine/charts
Import: import { Sparkline } from '@mantine/charts';
Description: Simplified area chart to show trends

## Usage

`Sparkline` is a simplified version of [AreaChart](https://mantine.dev/charts/area-chart). It can be used
to display a single series of data in a small space.

#### Example: usage

```tsx
import { Sparkline } from '@mantine/charts';


function Demo() {
  return (
    <Sparkline
      w={200}
      h={60}
      data={[10, 20, 40, 20, 40, 10, 50]}
      
    />
  );
}
````

## Change area color depending on color scheme

You can use CSS variables in `color` property. To define a CSS variable that
changes depending on the color scheme, use [light/dark mixins](https://mantine.dev/styles/postcss-preset/#dark-and-light-mixins)
or [light-dark function](https://mantine.dev/styles/postcss-preset/#light-dark-function). Example
of area that is dark orange in light mode and lime in dark mode:

#### Example: colorSchemeColor

```tsx
// Demo.module.css
.root {
  @mixin light {
    --chart-color: var(--mantine-color-orange-8);
  }

  @mixin dark {
    --chart-color: var(--mantine-color-lime-4);
  }
}

// Demo.tsx
import { Sparkline } from '@mantine/charts';
import classes from './Demo.module.css';

function Demo() {
  return <Sparkline w={200} h={80} data={[10, 20, 40, 20, 40, 10, 50]} className={classes.root} />;
}
```
