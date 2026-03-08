## Bar overlays

#### Example: overlay

```tsx
// Demo.tsx
import { BarChart } from '@mantine/charts';
import classes from './Demo.module.css';
import { data } from './data';

function Demo() {
  const bigBarWidth = useMediaQuery('(min-width: 48em)') ? 42 : 26;
  const ratio = 0.5;
  const smallBarWidth = bigBarWidth * ratio;
  const barGap = (bigBarWidth + smallBarWidth) / -2;

  return (
    <BarChart
      h={300}
      data={overlayData}
      dataKey="index"
      barChartProps={{ barGap }}
      barProps={(data) => ({ barSize: data.name === 'you' ? bigBarWidth : smallBarWidth })}
      classNames={classes}
      series={[
        { name: 'you', color: 'var(--you-bar-color)' },
        { name: 'average', color: 'var(--average-bar-color)' },
      ]}
    />
  );
}

// Demo.module.css
.root {
  @mixin light {
    --average-bar-color: var(--mantine-color-dark-8);
    --you-bar-color: var(--mantine-color-blue-3);
  }

  @mixin dark {
    --you-bar-color: var(--mantine-color-blue-8);
    --average-bar-color: var(--mantine-color-gray-4);
  }
}

.bar {
  transform: translateX(-1.5px);
}

// data.ts
export const data = [
  { you: 5, average: 3, index: '1' },
  { you: 7, average: 9, index: '2' },
  { you: 8, average: 5, index: '3' },
  { you: 3, average: 6, index: '4' },
  { you: 2, average: 4, index: '5' },
  { you: 6, average: 8, index: '6' },
  { you: 4, average: 7, index: '7' },
  { you: 9, average: 2, index: '8' },
];
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| barChartProps | Omit, nextState: Readonly<...>, nextContext: any): void; }>, "ref"> | - | Props passed down to recharts BarChart component |
| barLabelColor | MantineColor | - | Controls color of the bar label, by default the value is determined by the chart orientation |
| barProps | ((series: BarChartSeries) => Partial\<Omit\<Props, "ref">>) | Partial\<Omit\<Props, "ref">> | - | Props passed down to recharts Bar component |
| children | React.ReactNode | - | Additional components that are rendered inside recharts BarChart component |
| cursorFill | MantineColor | - | Fill of hovered bar section, by default value is based on color scheme |
| data | Record\<string, any>\[] | required | Data used to display chart. |
| dataKey | string | required | Key of the data object for x-axis values |
| fillOpacity | number | - | Controls fill opacity of all bars |
| getBarColor | (value: number, series: BarChartSeries) => DefaultMantineColor | - | A function to assign dynamic bar color based on its value |
| gridAxis | "none" | "x" | "y" | "xy" | - | Specifies which lines should be displayed in the grid, 'x' by default |
| gridColor | MantineColor | - | Color of the grid and cursor lines, by default depends on color scheme |
| gridProps | RechartsProps | - | Props passed down to the CartesianGrid component |
| legendProps | RechartsProps | - | Props passed down to the Legend component |
| maxBarWidth | number | - | Maximum bar width in px |
| minBarSize | number | - | Sets minimum height of the bar in px |
| orientation | "horizontal" | "vertical" | - | Chart orientation, 'horizontal' by default |
| referenceLines | ChartReferenceLineProps\[] | - | Reference lines that should be displayed on the chart |
| rightYAxisLabel | string | - | A label to display next to the right y-axis |
| rightYAxisProps | RechartsProps | - | Props passed down to the YAxis recharts component rendered on the right side |
| series | BarChartSeries\[] | required | An array of objects with name and color keys. Determines which data should be consumed from the data array. |
| strokeDasharray | string | number | - | Dash array for the grid lines and cursor, '5 5' by default |
| textColor | MantineColor | - | Color of the text displayed inside the chart, 'dimmed' by default |
| tickLine | "none" | "x" | "y" | "xy" | - | Specifies which axis should have tick line, 'y' by default |
| tooltipAnimationDuration | number | - | Tooltip position animation duration in ms, 0 by default |
| tooltipProps | RechartsProps | - | Props passed down to the Tooltip component |
| type | BarChartType | - | Controls how bars are positioned relative to each other |
| unit | string | - | Unit displayed next to each tick in y-axis |
| valueFormatter | (value: number) => string | - | A function to format values on Y axis and inside the tooltip |
| valueLabelProps | ((series: BarChartSeries) => Partial\<Omit\<Props\<Record\<string, any>>, "ref">>) | Partial\<Props\<Record\<string, any>>> | - | Props passed down to recharts LabelList component |
| withBarValueLabel | boolean | - | Determines whether a label with bar value should be displayed on top of each bar, incompatible with type="stacked" and type="percent" |
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

BarChart component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**BarChart selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-BarChart-root | Root element |
| bar | .mantine-BarChart-bar | Bar of the chart |
| axis | .mantine-BarChart-axis | X and Y axis of the chart |
| container | .mantine-BarChart-container | Recharts ResponsiveContainer component |
| grid | .mantine-BarChart-grid | Recharts CartesianGrid component |
| legend | .mantine-BarChart-legend | Legend root element |
| legendItem | .mantine-BarChart-legendItem | Legend item representing data series |
| legendItemColor | .mantine-BarChart-legendItemColor | Legend item color |
| legendItemName | .mantine-BarChart-legendItemName | Legend item name |
| tooltip | .mantine-BarChart-tooltip | Tooltip root element |
| tooltipBody | .mantine-BarChart-tooltipBody | Tooltip wrapper around all items |
| tooltipItem | .mantine-BarChart-tooltipItem | Tooltip item representing data series |
| tooltipItemBody | .mantine-BarChart-tooltipItemBody | Tooltip item wrapper around item color and name |
| tooltipItemColor | .mantine-BarChart-tooltipItemColor | Tooltip item color |
| tooltipItemName | .mantine-BarChart-tooltipItemName | Tooltip item name |
| tooltipItemData | .mantine-BarChart-tooltipItemData | Tooltip item data |
| tooltipLabel | .mantine-BarChart-tooltipLabel | Label of the tooltip |
| referenceLine | .mantine-BarChart-referenceLine | Reference line |
| axisLabel | .mantine-BarChart-axisLabel | X and Y axis labels |

**BarChart CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --chart-grid-color | Controls color of the grid and cursor lines |
| root | --chart-text-color | Controls color of the axis labels |
| root | --chart-cursor-fill | Controls fill color of the cursor line |
| root | --chart-bar-label-color | Controls color of the bar labels |

### BubbleChart

Package: @mantine/charts
Import: import { BubbleChart } from '@mantine/charts';
Description: Bubble chart component

## Usage

#### Example: usage

```tsx
// Demo.tsx
import { BubbleChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BubbleChart
      h={60}
      data={data}
      range={[16, 225]}
      label="Sales/hour"
      color="lime.6"
      dataKey={{ x: 'hour', y: 'index', z: 'value' }}
    />
  );
}

// data.ts
export const data = [
  { hour: '08:00', index: 1, value: 150 },
  { hour: '10:00', index: 1, value: 166 },
  { hour: '12:00', index: 1, value: 170 },
  { hour: '14:00', index: 1, value: 150 },
  { hour: '16:00', index: 1, value: 200 },
  { hour: '18:00', index: 1, value: 400 },
  { hour: '20:00', index: 1, value: 100 },
  { hour: '22:00', index: 1, value: 160 },
];
```

## Change color

You can reference colors from [theme](https://mantine.dev/theming/theme-object) the same way as in
other components, for example, `blue`, `red.5`, `orange.7`, etc. Any valid CSS
color value is also accepted.

#### Example: color

```tsx
// Demo.tsx
import { BubbleChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <BubbleChart
      h={60}
      data={data}
      range={[16, 225]}
      dataKey={{ x: 'hour', y: 'index', z: 'value' }}
      
    />
  );
}

// data.ts
export const data = [
  { hour: '08:00', index: 1, value: 150 },
  { hour: '10:00', index: 1, value: 166 },
  { hour: '12:00', index: 1, value: 170 },
  { hour: '14:00', index: 1, value: 150 },
  { hour: '16:00', index: 1, value: 200 },
  { hour: '18:00', index: 1, value: 400 },
  { hour: '20:00', index: 1, value: 100 },
  { hour: '22:00', index: 1, value: 160 },
];
```

## Change area color depending on color scheme

You can use CSS variables in `color` property. To define a CSS variable that
changes depending on the color scheme, use [light/dark mixins](https://mantine.dev/styles/postcss-preset/#dark-and-light-mixins)
or [light-dark function](https://mantine.dev/styles/postcss-preset/#light-dark-function). Example
of area that is dark orange in light mode and lime in dark mode:

#### Example: colorSchemeColor

```tsx
// Demo.tsx
import { BubbleChart } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <BubbleChart
      h={60}
      data={data}
      range={[16, 225]}
      label="Sales/hour"
      color="var(--scatter-color)"
      className={classes.root}
      dataKey={{ x: 'hour', y: 'index', z: 'value' }}
    />
  );
}

// Demo.module.css
.root {
  @mixin light {
    --scatter-color: var(--mantine-color-orange-8);
  }

  @mixin dark {
    --scatter-color: var(--mantine-color-lime-4);
  }
}

// data.ts
export const data = [
  { hour: '08:00', index: 1, value: 150 },
  { hour: '10:00', index: 1, value: 166 },
  { hour: '12:00', index: 1, value: 170 },
  { hour: '14:00', index: 1, value: 150 },
  { hour: '16:00', index: 1, value: 200 },
  { hour: '18:00', index: 1, value: 400 },
  { hour: '20:00', index: 1, value: 100 },
  { hour: '22:00', index: 1, value: 160 },
];
```

## Remove tooltip

To remove tooltip, set `withTooltip={false}`. It also removes the cursor line
and disables interactions with the chart.

#### Example: noTooltip

```tsx
// Demo.tsx
import { BubbleChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BubbleChart
      h={60}
      data={data}
      range={[16, 225]}
      dataKey={{ x: 'hour', y: 'index', z: 'value' }}
      withTooltip={false}
    />
  );
}

// data.ts
export const data = [
  { hour: '08:00', index: 1, value: 150 },
  { hour: '10:00', index: 1, value: 166 },
  { hour: '12:00', index: 1, value: 170 },
  { hour: '14:00', index: 1, value: 150 },
  { hour: '16:00', index: 1, value: 200 },
  { hour: '18:00', index: 1, value: 400 },
  { hour: '20:00', index: 1, value: 100 },
  { hour: '22:00', index: 1, value: 160 },
];
```

## Value formatter

To format values in the tooltip, use `valueFormat` prop. It accepts
a function that takes number value as an argument and returns formatted value:

#### Example: valueFormatter

```tsx
// Demo.tsx
import { BubbleChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BubbleChart
      h={60}
      data={data}
      range={[16, 225]}
      label="Sales/hour"
      color="lime.6"
      dataKey={{ x: 'hour', y: 'index', z: 'value' }}
      valueFormatter={(value) => `${value.toFixed(2)} USD`}
    />
  );
}

// data.ts
export const data = [
  { hour: '08:00', index: 1, value: 150 },
  { hour: '10:00', index: 1, value: 166 },
  { hour: '12:00', index: 1, value: 170 },
  { hour: '14:00', index: 1, value: 150 },
  { hour: '16:00', index: 1, value: 200 },
  { hour: '18:00', index: 1, value: 400 },
  { hour: '20:00', index: 1, value: 100 },
  { hour: '22:00', index: 1, value: 160 },
];
```
