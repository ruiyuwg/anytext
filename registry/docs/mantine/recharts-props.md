## Recharts props

To pass props down to the underlying recharts components, use the following props:

- `radarChartProps` passed props to [RadarChart](https://recharts.org/en-US/api/RadarChart) component
- `polarGridProps` passed props to [PolarGrid](https://recharts.org/en-US/api/PolarGrid) component
- `polarAngleAxisProps` passed props to [PolarAngleAxis](https://recharts.org/en-US/api/PolarAngleAxis) component
- `polarRadiusAxisProps` passed props to [PolarRadiusAxis](https://recharts.org/en-US/api/PolarRadiusAxis) component

Example of passing props down to [PolarRadiusAxis](https://recharts.org/en-US/api/PolarRadiusAxis) component:

}}
series={\[
{ name: 'Sales January', color: 'lime.4', opacity: 0.1 },
{ name: 'Sales February', color: 'cyan.4', opacity: 0.1 },
]}
/>
);
}

// data.ts
export const data = \[
{
product: 'Apples',
'Sales January': 120,
'Sales February': 100,
},
{
product: 'Oranges',
'Sales January': 98,
'Sales February': 90,
},
{
product: 'Tomatoes',
'Sales January': 86,
'Sales February': 70,
},
{
product: 'Grapes',
'Sales January': 99,
'Sales February': 80,
},
{
product: 'Bananas',
'Sales January': 85,
'Sales February': 120,
},
{
product: 'Lemons',
'Sales January': 65,
'Sales February': 150,
},
];

````


## Legend

Set `withLegend` prop to display the legend:

#### Example: legend

```tsx
// Demo.tsx
import { RadarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <RadarChart
      h={300}
      data={data}
      dataKey="product"
      withPolarRadiusAxis
      withLegend
      series={[
        { name: 'Sales January', color: 'blue.6', opacity: 0.2 },
        { name: 'Sales February', color: 'orange.6', opacity: 0.2 },
      ]}
    />
  );
}

// data.ts
export const data = [
  {
    product: 'Apples',
    'Sales January': 120,
    'Sales February': 100,
  },
  {
    product: 'Oranges',
    'Sales January': 98,
    'Sales February': 90,
  },
  {
    product: 'Tomatoes',
    'Sales January': 86,
    'Sales February': 70,
  },
  {
    product: 'Grapes',
    'Sales January': 99,
    'Sales February': 80,
  },
  {
    product: 'Bananas',
    'Sales January': 85,
    'Sales February': 120,
  },
  {
    product: 'Lemons',
    'Sales January': 65,
    'Sales February': 150,
  },
];
````

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| activeDotProps | MantineChartDotProps | - | Props passed down to all active dots. Ignored if withDots={false} is set. |
| children | React.ReactNode | - | Additional components that are rendered inside recharts RadarChart component |
| data | Record\<string, any>\[] | required | Data used in the chart |
| dataKey | string | required | Key of the data object for axis values |
| dotProps | MantineChartDotProps | - | Props passed down to all dots. Ignored if withDots={false} is set. |
| gridColor | MantineColor | - | Controls color of the grid lines. By default, color depends on the color scheme. |
| legendProps | RechartsProps | - | Props passed down to recharts Legend component |
| polarAngleAxisProps | RechartsProps | - | Props passed down to recharts PolarAngleAxis component |
| polarGridProps | RechartsProps | - | Props passed down to recharts PolarGrid component |
| polarRadiusAxisProps | RechartsProps | - | Props passed down to recharts PolarRadiusAxis component |
| radarChartProps | Omit, nextState: Readonly<...>, nextContext: any): void; }>, "ref"> | - | Props passed down to recharts RadarChart component |
| radarProps | ((series: RadarChartSeries) => Partial\<Omit\<Props, "ref">>) | Partial\<Omit\<Props, "ref">> | - | Props passed down to recharts Radar component |
| series | RadarChartSeries\[] | required | Determines which data should be consumed from the data array. |
| textColor | MantineColor | - | Controls color of all text elements. By default, color depends on the color scheme. |
| tooltipAnimationDuration | number | - | Tooltip position animation duration in ms |
| tooltipProps | RechartsProps | - | Props passed down to recharts Tooltip component |
| withDots | boolean | - | Determines whether dots should be displayed |
| withLegend | boolean | - | Determines whether the legend should be displayed |
| withPolarAngleAxis | boolean | - | Determines whether PolarAngleAxis component should be displayed |
| withPolarGrid | boolean | - | Determines whether PolarGrid component should be displayed |
| withPolarRadiusAxis | boolean | - | Determines whether PolarRadiusAxisProps component should be displayed |
| withTooltip | boolean | - | Determines whether Tooltip component should be displayed |

#### Styles API

RadarChart component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**RadarChart selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-RadarChart-root | Root element |
| container | .mantine-RadarChart-container | Recharts ResponsiveContainer component |
| tooltip | .mantine-RadarChart-tooltip | Tooltip root element |
| tooltipBody | .mantine-RadarChart-tooltipBody | Tooltip wrapper around all items |
| tooltipItem | .mantine-RadarChart-tooltipItem | Tooltip item representing data series |
| tooltipItemBody | .mantine-RadarChart-tooltipItemBody | Tooltip item wrapper around item color and name |
| tooltipItemColor | .mantine-RadarChart-tooltipItemColor | Tooltip item color |
| tooltipItemName | .mantine-RadarChart-tooltipItemName | Tooltip item name |
| tooltipItemData | .mantine-RadarChart-tooltipItemData | Tooltip item data |
| tooltipLabel | .mantine-RadarChart-tooltipLabel | Label of the tooltip |
| legend | .mantine-RadarChart-legend | Legend root element |
| legendItem | .mantine-RadarChart-legendItem | Legend item representing data series |
| legendItemColor | .mantine-RadarChart-legendItemColor | Legend item color |
| legendItemName | .mantine-RadarChart-legendItemName | Legend item name |

**RadarChart CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --chart-grid-color | Controls color of the chart grid |
| root | --chart-text-color | Controls color of all text elements in the chart |

### RadialBarChart

Package: @mantine/charts
Import: import { RadialBarChart } from '@mantine/charts';
Description: Radial bar chart component

## Usage

`RadialBarChart` is based on [RadialBarChart recharts component](https://recharts.org/en-US/api/RadialBarChart):

#### Example: usage

```tsx
// Demo.tsx
import { RadialBarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <RadialBarChart data={data} dataKey="value" h={220} />;
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

## Change color

You can reference theme colors or use any valid CSS color in `color` property of `data`:

#### Example: color

```tsx
import { RadialBarChart } from '@mantine/charts';

const data = [
    { name: '18-24', value: 31.47, color: '' },
    { name: '25-29', value: 26.69, color: '' },
    { name: '30-34', value: 15.69, color: '' },
    { name: '35-39', value: 8.22, color: '' },
    { name: '40-49', value: 8.63, color: '' },
    { name: '50+', value: 2.63, color: '' },
    { name: 'unknown', value: 6.67, color: '' },
  ];

function Demo() {
  return <RadialBarChart data={data} dataKey="value" h={220} w={220} />;
}
```

## Legend

To show legend, set `withLegend` prop:

#### Example: legend

```tsx
// Demo.tsx
import { RadialBarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <RadialBarChart data={data} dataKey="value" h={220} withLegend />;
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

## Labels

To show labels, set `withLabels` prop:

#### Example: labels

```tsx
// Demo.tsx
import { RadialBarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <RadialBarChart data={data} dataKey="value" h={280} withLabels />;
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
