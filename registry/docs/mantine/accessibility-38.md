## Accessibility

### Aria labels

Set `ariaLabels` prop to specify `aria-label` attributes for next/previous controls:

```tsx
import { MonthPicker } from '@mantine/dates';

function Demo() {
  return (
    <MonthPicker
      ariaLabels={{
        nextDecade: 'Next decade',
        previousDecade: 'Previous decade',
        nextYear: 'Next year',
        previousYear: 'Previous year',
        yearLevelControl: 'Change to decade view',
      }}
    />
  );
}
```

### Year/month control aria-label

Use `getYearControlProps`/`getMonthControlProps` to customize `aria-label` attribute:

```tsx
import { MonthPicker } from '@mantine/dates';

function Demo() {
  return (
    <MonthPicker
      getYearControlProps={(date) => ({
        'aria-label': `Select year ${date.getFullYear()}`,
      })}
      getMonthControlProps={(date) => ({
        'aria-label': `Select month ${date.getFullYear()}/${date.getMonth()}`,
      })}
    />
  );
}
```

### Keyboard interactions

Note that the following events will only trigger if focus is on month control.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| allowDeselect | boolean | - | Determines whether user can deselect the date by clicking on selected item, applicable only when type="default" |
| allowSingleDateInRange | boolean | - | Determines whether a single day can be selected as range, applicable only when type="range" |
| ariaLabels | CalendarAriaLabels | - | aria-label attributes for controls on different levels |
| columnsToScroll | number | - | Number of columns to scroll with next/prev buttons, same as numberOfColumns if not set explicitly |
| date | string | Date | - | Displayed date in controlled mode |
| decadeLabelFormat | string | ((startOfDecade: string, endOfDecade: string) => ReactNode) | - | dayjs format for decade label or a function that returns decade label based on the date value |
| defaultDate | string | Date | - | Initial displayed date in uncontrolled mode |
| defaultLevel | "month" | "year" | "decade" | - | Initial displayed level (uncontrolled) |
| defaultValue | DateValue | DatesRangeValue | DateValue\[] | - | Default value for uncontrolled component |
| getMonthControlProps | (date: string) => Partial & DataAttributes | - | Passes props down month picker control |
| getYearControlProps | (date: string) => Partial & DataAttributes | - | Passes props down to year picker control based on date |
| level | "month" | "year" | "decade" | - | Current displayed level (controlled) |
| locale | string | - | Dayjs locale, defaults to value defined in DatesProvider |
| maxDate | string | Date | - | Maximum possible date in YYYY-MM-DD format or Date object |
| maxLevel | "month" | "year" | "decade" | - | Max level that user can go up to |
| minDate | string | Date | - | Minimum possible date in YYYY-MM-DD format or Date object |
| monthsListFormat | string | - | dayjs format for months list |
| nextLabel | string | - | Next button aria-label |
| numberOfColumns | number | - | Number of columns displayed next to each other |
| onChange | (value: DatePickerValue\<Type, string>) => void | - | Called when value changes |
| onDateChange | (date: string) => void | - | Called when date changes |
| onLevelChange | (level: MonthPickerLevel) => void | - | Called when level changes |
| onMonthSelect | (date: string) => void | - | Called when month is selected |
| onNextDecade | (date: string) => void | - | Called when the next decade button is clicked |
| onNextYear | (date: string) => void | - | Called when the next year button is clicked |
| onPreviousDecade | (date: string) => void | - | Called when the previous decade button is clicked |
| onPreviousYear | (date: string) => void | - | Called when the previous year button is clicked |
| previousLabel | string | - | Previous button aria-label |
| size | MantineSize | - | Component size |
| type | "range" | "multiple" | "default" | - | Picker type: range, multiple or default |
| value | DateValue | DatesRangeValue | DateValue\[] | - | Value for controlled component |
| withCellSpacing | boolean | - | Determines whether controls should be separated |
| yearLabelFormat | string | ((date: string) => string) | - | dayjs label format to display year label or a function that returns year label based on year value |
| yearsListFormat | string | - | dayjs format for years list |

#### Styles API

MonthPicker component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**MonthPicker selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| calendarHeader | .mantine-MonthPicker-calendarHeader | Calendar header root element |
| calendarHeaderControl | .mantine-MonthPicker-calendarHeaderControl | Previous/next calendar header controls |
| calendarHeaderControlIcon | .mantine-MonthPicker-calendarHeaderControlIcon | Icon of previous/next calendar header controls |
| calendarHeaderLevel | .mantine-MonthPicker-calendarHeaderLevel | Level control (changes levels when clicked, month -> year -> decade) |
| levelsGroup | .mantine-MonthPicker-levelsGroup | Group of years levels |
| yearsList | .mantine-MonthPicker-yearsList | Years list table element |
| yearsListRow | .mantine-MonthPicker-yearsListRow | Years list row element |
| yearsListCell | .mantine-MonthPicker-yearsListCell | Years list cell element |
| yearsListControl | .mantine-MonthPicker-yearsListControl | Button used to pick months and years |
| monthsList | .mantine-MonthPicker-monthsList | Months list table element |
| monthsListRow | .mantine-MonthPicker-monthsListRow | Months list row element |
| monthsListCell | .mantine-MonthPicker-monthsListCell | Months list cell element |
| monthsListControl | .mantine-MonthPicker-monthsListControl | Button used to pick months and years |

**MonthPickerinput selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| calendarHeader | .mantine-MonthPickerinput-calendarHeader | Calendar header root element |
| calendarHeaderControl | .mantine-MonthPickerinput-calendarHeaderControl | Previous/next calendar header controls |
| calendarHeaderControlIcon | .mantine-MonthPickerinput-calendarHeaderControlIcon | Icon of previous/next calendar header controls |
| calendarHeaderLevel | .mantine-MonthPickerinput-calendarHeaderLevel | Level control (changes levels when clicked, month -> year -> decade) |
| levelsGroup | .mantine-MonthPickerinput-levelsGroup | Group of years levels |
| yearsList | .mantine-MonthPickerinput-yearsList | Years list table element |
| yearsListRow | .mantine-MonthPickerinput-yearsListRow | Years list row element |
| yearsListCell | .mantine-MonthPickerinput-yearsListCell | Years list cell element |
| yearsListControl | .mantine-MonthPickerinput-yearsListControl | Button used to pick months and years |
| monthsList | .mantine-MonthPickerinput-monthsList | Months list table element |
| monthsListRow | .mantine-MonthPickerinput-monthsListRow | Months list row element |
| monthsListCell | .mantine-MonthPickerinput-monthsListCell | Months list cell element |
| monthsListControl | .mantine-MonthPickerinput-monthsListControl | Button used to pick months and years |
| placeholder | .mantine-MonthPickerinput-placeholder | Placeholder element |

### TimeGrid

Package: @mantine/dates
Import: import { TimeGrid } from '@mantine/dates';
Description: Captures time value from the user with a predefined set of options

## Usage

Use `TimeGrid` component to capture time value from the user with a
predefined set of time slots:

#### Example: usage

```tsx
import { getTimeRange, TimeGrid } from '@mantine/dates';


function Demo() {
  return (
    <TimeGrid
      data={getTimeRange({ startTime: '10:00', endTime: '21:00', interval: '01:00' })}
      simpleGridProps={{
        type: 'container',
        cols: { base: 1, '180px': 2, '320px': 3 },
        spacing: 'xs',
      }}
      
    />
  );
}
```

## Controlled

```tsx
import { useState } from 'react';
import { TimeGrid } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>('10:00');
  return <TimeGrid value={value} onChange={setValue} data={['10:00', '12: 00']} />;
}
```

## data prop

`data` prop accepts an array of time values in 24-hour format. Values
must be unique. To generate time range use `getTimeRange` function
exported from `@mantine/dates` package:

```tsx
import { TimeGrid, getTimeRange } from '@mantine/dates';

function WithArray() {
  return <TimeGrid data={['10:00', '12:00']} />
}

function WithRange() {
  // In this example we generate time range from 10:00 to 14:00 with 1 hour step:
  // ['10:00', '11:00', '12:00', '13:00', '14:00']
  return <TimeGrid data={getTimeRange({ from: '10:00', to: '14:00', step: '01:00' })} />
}
```

## Min and max time

Set `minTime` and `maxTime` props to limit available time range.
Both props accept time values in 24-hour format:

#### Example: minMax

```tsx
import { getTimeRange, TimeGrid } from '@mantine/dates';

function Demo() {
  return (
    <TimeGrid
      data={getTimeRange({ startTime: '09:00', endTime: '22:00', interval: '01:00' })}
      minTime="11:00"
      maxTime="18:00"
    />
  );
}
```

## Disable specific controls

You can disable specific time values by providing an array of disabled
values to the `disableTime` prop:

#### Example: disableTime

```tsx
import { getTimeRange, TimeGrid } from '@mantine/dates';

function Demo() {
  return (
    <TimeGrid
      data={getTimeRange({ startTime: '09:00', endTime: '11:45', interval: '00:15' })}
      disableTime={['10:45', '11:00', '11:30']}
    />
  );
}
```

## Allow deselect

Set `allowDeselect` prop to allow deselecting time value by clicking on
the control with selected value:

#### Example: allowDeselect

```tsx
import { getTimeRange, TimeGrid } from '@mantine/dates';

function Demo() {
  return (
    <TimeGrid
      data={getTimeRange({ startTime: '09:00', endTime: '12:00', interval: '01:00' })}
      defaultValue="11:00"
      allowDeselect
    />
  );
}
```

## Change AM/PM labels

#### Example: amPmLabels

```tsx
import { getTimeRange, TimeGrid } from '@mantine/dates';

function Demo() {
  return (
    <TimeGrid
      data={getTimeRange({ startTime: '09:00', endTime: '22:00', interval: '01:00' })}
      format="12h"
      amPmLabels={{ am: 'पूर्वाह्न', pm: 'अपराह्न' }}
    />
  );
}
```
