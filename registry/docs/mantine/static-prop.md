## Static prop

Set `static` prop to display a calendar that user cannot interact with.
It is useful when you want to display data with in calendar view but do
not want it to be interactive.

#### Example: isStatic

```tsx
import dayjs from 'dayjs';
import { Indicator } from '@mantine/core';
import { Calendar } from '@mantine/dates';

function Demo() {
  return (
    <Calendar
      static
      renderDay={(date) => {
        const day = dayjs(date).date();
        return (
          <Indicator size={6} color="red" offset={-2} disabled={day !== 16}>
            <div>{day}</div>
          </Indicator>
        );
      }}
    />
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| ariaLabels | CalendarAriaLabels | - | aria-label attributes for controls on different levels |
| columnsToScroll | number | - | Number of columns to scroll with next/prev buttons, same as numberOfColumns if not set explicitly |
| date | string | Date | - | Displayed date in controlled mode |
| decadeLabelFormat | string | ((startOfDecade: string, endOfDecade: string) => ReactNode) | - | dayjs format for decade label or a function that returns decade label based on the date value |
| defaultDate | string | Date | - | Initial displayed date in uncontrolled mode |
| defaultLevel | "month" | "year" | "decade" | - | Initial displayed level in uncontrolled mode |
| enableKeyboardNavigation | boolean | - | Enable enhanced keyboard navigation (Ctrl/Cmd + Arrow keys for year navigation, Ctrl/Cmd + Shift + Arrow keys for decade navigation, Y key to open year view) |
| excludeDate | (date: string) => boolean | - | Callback function to determine whether the day should be disabled |
| firstDayOfWeek | 0 | 1 | 2 | 3 | 4 | 5 | 6 | - | Number 0-6, where 0 – Sunday and 6 – Saturday. |
| getDayAriaLabel | (date: string) => string | - | Assigns aria-label to Day components based on date |
| getDayProps | (date: string) => Omit\<Partial, "classNames" | "styles" | "vars"> & DataAttributes | - | Passes props down to Day components |
| getMonthControlProps | (date: string) => Partial & DataAttributes | - | Passes props down month picker control |
| getYearControlProps | (date: string) => Partial & DataAttributes | - | Passes props down to year picker control based on date |
| headerControlsOrder | ("next" | "previous" | "level")\[] | - | Controls order |
| hideOutsideDates | boolean | - | Determines whether outside dates should be hidden |
| hideWeekdays | boolean | - | Determines whether weekdays row should be hidden |
| highlightToday | boolean | - | Determines whether today should be highlighted with a border |
| level | "month" | "year" | "decade" | - | Current displayed level displayed in controlled mode |
| locale | string | - | Dayjs locale, defaults to value defined in DatesProvider |
| maxDate | string | Date | - | Maximum possible date in YYYY-MM-DD format or Date object |
| maxLevel | "month" | "year" | "decade" | - | Max level that user can go up to (decade, year, month) |
| minDate | string | Date | - | Minimum possible date in YYYY-MM-DD format or Date object |
| minLevel | "month" | "year" | "decade" | - | Min level that user can go down to (decade, year, month) |
| monthLabelFormat | string | ((date: string) => string) | - | dayjs label format to display month label or a function that returns month label based on month value |
| monthsListFormat | string | - | dayjs format for months list |
| nextIcon | React.ReactNode | - | Change next icon |
| nextLabel | string | - | Next button aria-label |
| numberOfColumns | number | - | Number of columns displayed next to each other |
| onDateChange | (date: string) => void | - | Called when date changes |
| onLevelChange | (level: CalendarLevel) => void | - | Called when level changes |
| onMonthMouseEnter | (event: MouseEvent\<HTMLButtonElement, MouseEvent>, date: string) => void | - | Called when mouse enters month control |
| onMonthSelect | (date: string) => void | - | Called when user selects month |
| onNextDecade | (date: string) => void | - | Called when the next decade button is clicked |
| onNextMonth | (date: string) => void | - | Called when the next month button is clicked |
| onNextYear | (date: string) => void | - | Called when the next year button is clicked |
| onPreviousDecade | (date: string) => void | - | Called when the previous decade button is clicked |
| onPreviousMonth | (date: string) => void | - | Called when the previous month button is clicked |
| onPreviousYear | (date: string) => void | - | Called when the previous year button is clicked |
| onYearMouseEnter | (event: MouseEvent\<HTMLButtonElement, MouseEvent>, date: string) => void | - | Called when mouse enters year control |
| onYearSelect | (date: string) => void | - | Called when user selects year |
| previousIcon | React.ReactNode | - | Change previous icon |
| previousLabel | string | - | Previous button aria-label |
| renderDay | (date: string) => React.ReactNode | - | Controls day value rendering |
| size | MantineSize | - | Component size |
| static | boolean | - | Determines whether days should be static, static days can be used to display month if it is not expected that user will interact with the component in any way |
| weekdayFormat | string | ((date: string) => string) | - | dayjs format for weekdays names |
| weekendDays | (0 | 1 | 2 | 3 | 4 | 5 | 6)\[] | - | Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday. The default value is defined by DatesProvider. |
| withCellSpacing | boolean | - | Determines whether controls should be separated |
| withWeekNumbers | boolean | - | Determines whether week numbers should be displayed |
| yearLabelFormat | string | ((date: string) => string) | - | dayjs label format to display year label or a function that returns year label based on year value |
| yearsListFormat | string | - | dayjs format for years list |

#### Styles API

Calendar component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Calendar selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| calendarHeader | .mantine-Calendar-calendarHeader | Calendar header root element |
| calendarHeaderControl | .mantine-Calendar-calendarHeaderControl | Previous/next calendar header controls |
| calendarHeaderControlIcon | .mantine-Calendar-calendarHeaderControlIcon | Icon of previous/next calendar header controls |
| calendarHeaderLevel | .mantine-Calendar-calendarHeaderLevel | Level control (changes levels when clicked, month -> year -> decade) |
| levelsGroup | .mantine-Calendar-levelsGroup | Group of months levels |
| yearsList | .mantine-Calendar-yearsList | Years list table element |
| yearsListRow | .mantine-Calendar-yearsListRow | Years list row element |
| yearsListCell | .mantine-Calendar-yearsListCell | Years list cell element |
| yearsListControl | .mantine-Calendar-yearsListControl | Button used to pick months and years |
| monthsList | .mantine-Calendar-monthsList | Months list table element |
| monthsListRow | .mantine-Calendar-monthsListRow | Months list row element |
| monthsListCell | .mantine-Calendar-monthsListCell | Months list cell element |
| monthsListControl | .mantine-Calendar-monthsListControl | Button used to pick months and years |
| monthThead | .mantine-Calendar-monthThead | thead element of month table |
| monthRow | .mantine-Calendar-monthRow | tr element of month table |
| monthTbody | .mantine-Calendar-monthTbody | tbody element of month table |
| monthCell | .mantine-Calendar-monthCell | td element of month table |
| month | .mantine-Calendar-month | Month table element |
| weekdaysRow | .mantine-Calendar-weekdaysRow | Weekdays tr element |
| weekday | .mantine-Calendar-weekday | Weekday th element |
| day | .mantine-Calendar-day | Month day control |
| weekNumber | .mantine-Calendar-weekNumber | Week number td element |

**Calendarheader selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| calendarHeader | .mantine-Calendarheader-calendarHeader | Calendar header root element |
| calendarHeaderControl | .mantine-Calendarheader-calendarHeaderControl | Previous/next calendar header controls |
| calendarHeaderControlIcon | .mantine-Calendarheader-calendarHeaderControlIcon | Icon of previous/next calendar header controls |
| calendarHeaderLevel | .mantine-Calendarheader-calendarHeaderLevel | Level control (changes levels when clicked, month -> year -> decade) |

**Calendarheader CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| calendarHeader | --dch-control-size | Controls size of the previous/next and level controls |
| calendarHeader | --dch-fz | Controls font-size of the previous/next and level controls |

**Calendarheader data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| calendarHeaderControl | data-direction | - | - |
| calendarHeaderControl | data-disabled | Control is disabled for any reason | - |

### DateInput

Package: @mantine/dates
Import: import { DateInput } from '@mantine/dates';
Description: Free form date input

## DatePicker props

`DateInput` supports most of the [DatePicker](https://mantine.dev/dates/date-picker/) props,
read through [DatePicker](https://mantine.dev/dates/date-picker/) documentation to learn about all component features that are not listed on this page.

## Usage

#### Example: usage

```tsx
import { useState } from 'react';
import { DateInput } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <DateInput
      value={value}
      onChange={setValue}
      label="Date input"
      placeholder="Date input"
    />
  );
}
```

## Value format

Use `valueFormat` prop to change [dayjs format](https://day.js.org/docs/en/display/format) of value label.
To use some custom formats, you need to enable [custom parse format](https://day.js.org/docs/en/plugin/custom-parse-format) plugin:

```tsx
// Do this once in your application root file
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);
```

Example of using DateInput with custom format:

#### Example: format

```tsx
import { DateInput } from '@mantine/dates';

function Demo() {
  return <DateInput valueFormat="YYYY MMM DD" label="Date input" placeholder="Date input" />;
}
```

## Date parser

Use `dateParser` prop to replace default date parser. Parser function accepts user input (string)
and must return `Date` object:

#### Example: parser

```tsx
import dayjs from 'dayjs';
import { DateInput, DateInputProps } from '@mantine/dates';

const dateParser: DateInputProps['dateParser'] = (input) => {
  if (input === 'WW2') {
    return '1939-09-01';
  }

  return dayjs(input, 'DD/MM/YYYY').format('YYYY-MM-DD');
};

function Demo() {
  return (
    <DateInput
      dateParser={dateParser}
      valueFormat="DD/MM/YYYY"
      label="Type WW2"
      placeholder="Type WW2"
    />
  );
}
```

## Allow clear

Set `clearable` prop to allow removing value from the input. Input will be cleared if
user selects the same date in dropdown or clears input value:

#### Example: clearable

```tsx
import dayjs from 'dayjs';
import { DateInput } from '@mantine/dates';

function Demo() {
  return (
    <DateInput
      clearable
      defaultValue={dayjs().format('YYYY-MM-DD')}
      label="Date input"
      placeholder="Date input"
    />
  );
}
```

## Min and max date

Set `minDate` and `maxDate` props to define min and max dates. If date that is after `maxDate`
or before `minDate` is entered, then it will be considered invalid and input value will be reverted
to last known valid date value.

#### Example: minMax

```tsx
import dayjs from 'dayjs';
import { DateInput } from '@mantine/dates';

function Demo() {
  return (
    <DateInput
      minDate={dayjs().format('YYYY-MM-DD')}
      maxDate={dayjs().add(1, 'month').format('YYYY-MM-DD')}
      label="Date input"
      placeholder="Date input"
    />
  );
}
```

## Disabled state

#### Example: disabled

```tsx
import { DateInput } from '@mantine/dates';

function Demo() {
  return <DateInput label="Disabled" placeholder="Date input" disabled />;
}
```

## Input props

DateInput component supports [Input](https://mantine.dev/core/input) and [Input.Wrapper](https://mantine.dev/core/input) components features and all input element props. DateInput documentation does not include all features supported by the component – see [Input](https://mantine.dev/core/input) documentation to learn about all available features.

#### Example: configurator

```tsx
import { DateInput } from '@mantine/dates';


function Demo() {
  return (
    <DateInput
      
      placeholder="Input placeholder"
    />
  );
}
```

## Get element ref

```tsx
import { useRef } from 'react';
import { DateInput } from '@mantine/core';

function Demo() {
  const ref = useRef<HTMLInputElement>(null);
  return <DateInput ref={ref} />;
}
```
