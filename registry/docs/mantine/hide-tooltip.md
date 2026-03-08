## Hide tooltip

To hide tooltip, set `withTooltip={false}` prop:

#### Example: noTooltip

```tsx
// Demo.tsx
import { RadialBarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <RadialBarChart data={data} dataKey="value" h={220} withTooltip={false} />;
}

// data.ts
export const data = [
  { name: '18-24', value: 31.47, color: 'blue.7' },
  { name: '25-29', value: 26.69, color: 'orange.6' },
  { name: '30-34', value: 15.69, color: 'yellow.7' },
  { name: '35-39', value: 8.22, color: 'cyan.6' },
  { name: '40-49', value: 8.63, color: 'green' },
  { name: '50+', value: 2.63, color: 'pink' },
  { name: 'unknown', value: 6.67, color: 'gray' },
];
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| barSize | number | - | Size of bars in px, 20 by default |
| data | Record\<string, any>\[] | required | Chart data |
| dataKey | string | required | Key from data object to use as data key |
| emptyBackgroundColor | string | - | Color of the empty background, by default depends on the color scheme |
| endAngle | number | - | Angle at which chart ends |
| legendProps | RechartsProps | - | Props passed down to recharts Legend component |
| radialBarChartProps | Omit, nextState: Readonly<...>, nextContext: any): void; }>, "ref"> | - | Props passed down to recharts RadarChartChart component |
| radialBarProps | Omit\<RadialBarProps, "ref"> | - | Props passed down to recharts RadialBar component |
| startAngle | number | - | Angle at which chart starts |
| tooltipProps | RechartsProps | - | Props passed down to Tooltip recharts component |
| withBackground | boolean | - | Determines whether empty bars area should be visible |
| withLabels | boolean | - | Determines whether labels should be displayed |
| withLegend | boolean | - | Determines whether the legend should be displayed |
| withTooltip | boolean | - | Determines whether the tooltip should be displayed when one of the bars is hovered |

#### Styles API

RadialBarChart component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**RadialBarChart selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-RadialBarChart-root | Root element |
| tooltip | .mantine-RadialBarChart-tooltip | Tooltip root element |
| legend | .mantine-RadialBarChart-legend | Legend root element |
| legendItem | .mantine-RadialBarChart-legendItem | Legend item representing data series |
| legendItemColor | .mantine-RadialBarChart-legendItemColor | Legend item color |
| legendItemName | .mantine-RadialBarChart-legendItemName | Legend item name |

**RadialBarChart CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --chart-empty-background | Background color of the empty space in the chart |

### ScatterChart

Package: @mantine/charts
Import: import { ScatterChart } from '@mantine/charts';
Description: Scatter chart component

## Usage

#### Example: usage

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
