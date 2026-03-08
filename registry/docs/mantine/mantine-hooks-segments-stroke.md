## Segments stroke

Use `strokeWidth` prop to control the width of the stroke around each segment:

#### Example: strokeWidth

```tsx
// Demo.tsx
import { FunnelChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <FunnelChart data={data} />;
}

// data.ts
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 100, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
```

To change color of the stroke, use `strokeColor` prop. You can reference colors from [theme](https://mantine.dev/theming/theme-object) the same way as in
other components, for example, `blue`, `red.5`, `orange.7`, etc. Any valid CSS
color value is also accepted.

```tsx
import { FunnelChart } from '@mantine/charts';

function Demo() {
  return <FunnelChart data={[]} strokeColor="red.5" />;
}
```

By default, segments stroke color is the same as the background color of the body element
(`--mantine-color-body` CSS variable). If you want to change it depending on the color scheme,
define CSS variable and pass it to the `strokeColor` prop:

#### Example: strokeColor

```tsx
// Demo.tsx
import { FunnelChart } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <div className={classes.root}>
      <FunnelChart data={data} strokeColor="var(--card-bg)" />
    </div>
  );
}

// Demo.module.css
.root {
  --card-bg: light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-5));

  background-color: var(--card-bg);
  padding: var(--mantine-spacing-md);
  border-radius: var(--mantine-radius-md);
}

// data.ts
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 100, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | - | Additional elements rendered inside FunnelChart component |
| data | FunnelChartCell\[] | required | Data used to render chart |
| funnelChartProps | Omit, nextState: Readonly<...>, nextContext: any): void; }>, "ref"> | - | Props passed down to recharts FunnelChart component |
| funnelProps | Partial\<Omit\<FunnelProps, "ref">> | - | Props passed down to recharts Pie component |
| labelColor | MantineColor | - | Controls text color of all labels |
| labelsPosition | "left" | "right" | "inside" | - | Controls labels position relative to the segment |
| size | number | - | Controls chart width and height |
| strokeColor | MantineColor | - | Controls color of the segments stroke, by default depends on color scheme |
| strokeWidth | number | - | Controls width of segments stroke |
| tooltipAnimationDuration | number | - | Tooltip animation duration in ms |
| tooltipDataSource | "all" | "segment" | - | Determines which data is displayed in the tooltip. 'all' – display all values, 'segment' – display only hovered segment. |
| tooltipProps | RechartsProps | - | Props passed down to Tooltip recharts component |
| valueFormatter | (value: number) => string | - | A function to format values inside the tooltip and labels |
| withLabels | boolean | - | Determines whether each segment should have associated label |
| withTooltip | boolean | - | Determines whether the tooltip should be displayed when a section is hovered |

#### Styles API

FunnelChart component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**FunnelChart selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-FunnelChart-root | Root element |
| tooltip | .mantine-FunnelChart-tooltip | Tooltip root element |
| tooltipBody | .mantine-FunnelChart-tooltipBody | Tooltip wrapper around all items |
| tooltipItem | .mantine-FunnelChart-tooltipItem | Tooltip item representing data series |
| tooltipItemBody | .mantine-FunnelChart-tooltipItemBody | Tooltip item wrapper around item color and name |
| tooltipItemColor | .mantine-FunnelChart-tooltipItemColor | Tooltip item color |
| tooltipItemName | .mantine-FunnelChart-tooltipItemName | Tooltip item name |
| tooltipItemData | .mantine-FunnelChart-tooltipItemData | Tooltip item data |
| tooltipLabel | .mantine-FunnelChart-tooltipLabel | Label of the tooltip |

**FunnelChart CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --chart-labels-color | Controls color of the chart labels |
| root | --chart-size | Controls size of the chart |
| root | --chart-stroke-color | Controls color of the chart stroke |

### GettingStartedCharts

Package: @mantine/charts
Import: import { GettingStartedCharts } from '@mantine/charts';

## Installation

```bash
yarn add @mantine/charts recharts
```

```bash
npm install @mantine/charts recharts
```

After installation import package styles at the root of your application:

```tsx
import '@mantine/core/styles.css';
// ‼️ import charts styles after core package styles
import '@mantine/charts/styles.css';
```

## Do not forget to import styles

Followed installation instructions above but something is not working
(misplaced tooltips or no colors)?
You've fallen into the trap of not importing charts styles!
To fix the issue, import charts styles at the root of your application:

```tsx
import '@mantine/charts/styles.css';
```

## Based on recharts

Most of the components in `@mantine/charts` package are based on [recharts](https://recharts.org/) library.
If you need advanced features that are not covered in `@mantine/charts`
documentation, reference [recharts documentation](https://recharts.org/en-US/api) for more information.

### Heatmap

Package: @mantine/charts
Import: import { Heatmap } from '@mantine/charts';
Description: Heatmap chart component

## Usage

`Heatmap` is used to display data in a table where each column represents a week.
The only required prop is `data` – object where keys are dates in `YYYY-MM-DD` format and values are numbers.

`startDate` and `endDate` props are optional, they are used to define heatmap range.
If not set, heatmap will display data for the last year.

#### Example: usage

```tsx
// Demo.tsx
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <Heatmap data={data} startDate="2024-02-16" endDate="2025-02-16" />;
}

// data.ts
export const data = ${JSON.stringify(data, null, 2)};
```

## Data format

`Heatmap` expects data in the following format:

```tsx
export const data = {
  '2025-02-14': 2,
  '2025-02-11': 3,
  '2025-02-06': 4,
  '2025-02-05': 1,
  '2025-02-03': 2,
  '2025-02-01': 2,
  '2025-01-31': 4,
  '2025-01-30': 2,
  // ...
};
```

## With tooltip

Set `withTooltip` and `getTooltipLabel` props to display tooltip when
`Heatmap` cells are hovered. `getTooltipLabel` is called with date and value
and must return string to display in tooltip.

#### Example: tooltip

```tsx
// Demo.tsx
import dayjs from 'dayjs';
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      withTooltip
      withWeekdayLabels
      withMonthLabels
      getTooltipLabel={({ date, value }) =>
        `${dayjs(date).format('DD MMM, YYYY')} – ${value === null || value === 0 ? 'No contributions' : `${value} contribution${value > 1 ? 's' : ''}`}`
      }
    />
  );
}

// data.ts
export const data = ${JSON.stringify(data, null, 2)};
```

## Change colors

`Heatmap` colors can be changed with `colors` prop. It should be an array of any
valid CSS color values (hex, rgba, CSS variables, etc.). By default, `Heatmap`
uses 4 colors to indicate heat level, but you can pass any number of colors.

#### Example: colors

```tsx
// Demo.tsx
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      colors={[
        'var(--mantine-color-orange-4)',
        'var(--mantine-color-orange-6)',
        'var(--mantine-color-orange-7)',
        'var(--mantine-color-orange-9)',
      ]}
    />
  );
}

// data.ts
export const data = ${JSON.stringify(data, null, 2)};
```

## Colors depending on color scheme

If you want to change colors depending on the color scheme,
you should define those colors in `.css` file:

#### Example: cssColors

```tsx
// Demo.tsx
import { Heatmap } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      classNames={classes}
    />
  );
}

// Demo.module.css
.root {
  @mixin light {
    --heatmap-level-1: var(--mantine-color-blue-2);
    --heatmap-level-2: var(--mantine-color-blue-4);
    --heatmap-level-3: var(--mantine-color-blue-6);
    --heatmap-level-4: var(--mantine-color-blue-9);
  }

  @mixin dark {
    --heatmap-level-1: alpha(var(--mantine-color-orange-6), 0.35);
    --heatmap-level-2: alpha(var(--mantine-color-orange-6), 0.65);
    --heatmap-level-3: var(--mantine-color-orange-6);
    --heatmap-level-4: var(--mantine-color-yellow-4);
  }
}

// data.ts
export const data = ${JSON.stringify(data, null, 2)};
```

Note that in this case, you can only use 4 colors without passing `colors` prop.
If you need more colors, you should pass them manually to the component:

```tsx
import { Heatmap } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      classNames={classes}
      colors={[
        'var(--heatmap-level-1)',
        'var(--heatmap-level-2)',
        'var(--heatmap-level-3)',
        'var(--heatmap-level-4)',
        'var(--heatmap-level-5)',
        'var(--heatmap-level-6)',
      ]}
    />
  );
}
```

## Values domain

By default, `Heatmap` calculates domain based on data values, for example, for
the following data, the domain will be `[1, 4]`:

```tsx
const data = {
  '2025-02-14': 2,
  '2025-02-11': 3,
  '2025-02-06': 4,
  '2025-02-05': 1,
};
```

Based on the domain, `Heatmap` calculates colors for each rect: 1 – min heat level,
4 – max heat level. To specify domain manually, use `domain` prop. It is useful
when your data does not cover the whole range of possible values. For example,
the subset of data passed to the heatmap has values from 1 to 4, but the actual
range is from 1 to 10. In this case, you can pass `[1, 10]` to `domain` prop:

```tsx
import { Heatmap } from '@mantine/charts';

const data = {
  '2025-02-14': 2,
  '2025-02-11': 3,
  '2025-02-06': 4,
  '2025-02-05': 1,
};

function Demo() {
  return <Heatmap data={data} domain={[1, 10]} />;
}
```

## Weekdays and months labels

Set `withMonthLabels` and `withWeekdayLabels` props to display chart labels:

#### Example: labels

```tsx
// Demo.tsx
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      withMonthLabels
      withWeekdayLabels
    />
  );
}

// data.ts
export const data = ${JSON.stringify(data, null, 2)};
```

## Change labels text

To change labels, use `weekdayLabels` and `monthLabels` props.
`weekdayLabels` prop must be an array of 7 strings with weekday names starting from Sunday.
`monthLabels` prop must be an array of 12 strings with month names starting from January.

#### Example: labelsText

```tsx
// Demo.tsx
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      withMonthLabels
      withWeekdayLabels
      weekdayLabels={['Вс', 'Пн', '', 'Ср', '', 'Пт', '']}
      monthLabels={[
        'Янв',
        'Фев',
        'Мар',
        'Апр',
        'Май',
        'Июн',
        'Июл',
        'Авг',
        'Сен',
        'Окт',
        'Ноя',
        'Дек',
      ]}
    />
  );
}

// data.ts
export const data = ${JSON.stringify(data, null, 2)};
```

## Rect size, gap and radius

#### Example: rectSize

```tsx
// Demo.tsx
import { Heatmap } from '@mantine/charts';


function Demo() {
  return (
    <Heatmap
      data={data}
      withMonthLabels
      withWeekdayLabels
      startDate="2024-02-16"
      endDate="2024-04-16"
      
    />
  );
}

// data.ts
export const data = ${JSON.stringify(data, null, 2)};
```

## Pass props to rect

Use `getRectProps` to pass props to each rect. For example,
it can be used to add onClick handler to each rect:

#### Example: getRectProps

```tsx
// Demo.tsx
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      getRectProps={({ date, value }) => ({
        onClick: () => console.log({ date, value }),
      })}
    />
  );
}

// data.ts
export const data = ${JSON.stringify(data, null, 2)};
```

## Hide outside dates

#### Example: withOutsideDates

```tsx
// Demo.tsx
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2024-04-16"
      withOutsideDates={false}
      withMonthLabels
      withWeekdayLabels
      withTooltip
      getTooltipLabel={({ date, value }) => `${date} – ${value ?? 0} contributions`}
    />
  );
}

// data.ts
export const data = ${JSON.stringify(data, null, 2)};
```

## First day of week

The default first day of the week is Monday, you can change it with `firstDayOfWeek` prop:

#### Example: firstDayOfWeek

```tsx
// Demo.tsx
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2024-04-26"
      withMonthLabels
      withWeekdayLabels
      withTooltip
      firstDayOfWeek={0}
      weekdayLabels={['', 'Mon', '', 'Wed', '', 'Fri', '']}
      getTooltipLabel={({ date, value }) => `${date} – ${value ?? 0} contributions`}
    />
  );
}

// data.ts
export const data = ${JSON.stringify(data, null, 2)};
```
