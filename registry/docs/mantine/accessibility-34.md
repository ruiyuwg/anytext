## Accessibility

### Aria labels

Set `ariaLabels` prop to specify `aria-label` attributes for next/previous controls:

```tsx
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <DatePicker
      ariaLabels={{
        nextDecade: 'Next decade',
        previousDecade: 'Previous decade',
        nextYear: 'Next year',
        previousYear: 'Previous year',
        nextMonth: 'Next month',
        previousMonth: 'Previous month',
        yearLevelControl: 'Change to decade view',
        monthLevelControl: 'Change to year view',
      }}
    />
  );
}
```

### Year/month control aria-label

Use `getYearControlProps`/`getMonthControlProps`/`getDayProps` to customize `aria-label` attribute:

```tsx
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <DatePicker
      getDayProps={(date) => ({
        'aria-label': `Select date ${
          date.getMonth() + 1
        }/${date.getDate()}/${date.getFullYear()}`,
      })}
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

Note that the following events will only trigger if focus is on date control.

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
| level | "month" | "year" | "decade" | - | Current displayed level (controlled) |
| locale | string | - | Dayjs locale, defaults to value defined in DatesProvider |
| maxDate | string | Date | - | Maximum possible date in YYYY-MM-DD format or Date object |
| maxLevel | "month" | "year" | "decade" | - | - |
| minDate | string | Date | - | Minimum possible date in YYYY-MM-DD format or Date object |
| monthLabelFormat | string | ((date: string) => string) | - | dayjs label format to display month label or a function that returns month label based on month value |
| monthsListFormat | string | - | dayjs format for months list |
| nextIcon | React.ReactNode | - | Change next icon |
| nextLabel | string | - | Next button aria-label |
| numberOfColumns | number | - | Number of columns displayed next to each other |
| onChange | (value: DatePickerValue\<Type, string>) => void | - | Called when value changes |
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
| presets | DatePickerPreset\[] | - | Predefined values to pick from |
| previousIcon | React.ReactNode | - | Change previous icon |
| previousLabel | string | - | Previous button aria-label |
| renderDay | (date: string) => React.ReactNode | - | Controls day value rendering |
| size | MantineSize | - | Component size |
| type | "range" | "multiple" | "default" | - | Picker type: range, multiple or default |
| value | DateValue | DatesRangeValue | DateValue\[] | - | Value for controlled component |
| weekdayFormat | string | ((date: string) => string) | - | dayjs format for weekdays names |
| weekendDays | (0 | 1 | 2 | 3 | 4 | 5 | 6)\[] | - | Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday. The default value is defined by DatesProvider. |
| withCellSpacing | boolean | - | Determines whether controls should be separated |
| withWeekNumbers | boolean | - | Determines whether week numbers should be displayed |
| yearLabelFormat | string | ((date: string) => string) | - | dayjs label format to display year label or a function that returns year label based on year value |
| yearsListFormat | string | - | dayjs format for years list |

#### Styles API

DatePicker component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**DatePicker selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| calendarHeader | .mantine-DatePicker-calendarHeader | Calendar header root element |
| calendarHeaderControl | .mantine-DatePicker-calendarHeaderControl | Previous/next calendar header controls |
| calendarHeaderControlIcon | .mantine-DatePicker-calendarHeaderControlIcon | Icon of previous/next calendar header controls |
| calendarHeaderLevel | .mantine-DatePicker-calendarHeaderLevel | Level control (changes levels when clicked, month -> year -> decade) |
| levelsGroup | .mantine-DatePicker-levelsGroup | Group of months levels |
| yearsList | .mantine-DatePicker-yearsList | Years list table element |
| yearsListRow | .mantine-DatePicker-yearsListRow | Years list row element |
| yearsListCell | .mantine-DatePicker-yearsListCell | Years list cell element |
| yearsListControl | .mantine-DatePicker-yearsListControl | Button used to pick months and years |
| monthsList | .mantine-DatePicker-monthsList | Months list table element |
| monthsListRow | .mantine-DatePicker-monthsListRow | Months list row element |
| monthsListCell | .mantine-DatePicker-monthsListCell | Months list cell element |
| monthsListControl | .mantine-DatePicker-monthsListControl | Button used to pick months and years |
| monthThead | .mantine-DatePicker-monthThead | thead element of month table |
| monthRow | .mantine-DatePicker-monthRow | tr element of month table |
| monthTbody | .mantine-DatePicker-monthTbody | tbody element of month table |
| monthCell | .mantine-DatePicker-monthCell | td element of month table |
| month | .mantine-DatePicker-month | Month table element |
| weekdaysRow | .mantine-DatePicker-weekdaysRow | Weekdays tr element |
| weekday | .mantine-DatePicker-weekday | Weekday th element |
| day | .mantine-DatePicker-day | Month day control |
| weekNumber | .mantine-DatePicker-weekNumber | Week number td element |
| datePickerRoot | .mantine-DatePicker-datePickerRoot | Date picker root element, contains calendar and presets |
| presetsList | .mantine-DatePicker-presetsList | Presets wrapper element |
| presetButton | .mantine-DatePicker-presetButton | Preset button |

**DatePickerinput selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| calendarHeader | .mantine-DatePickerinput-calendarHeader | Calendar header root element |
| calendarHeaderControl | .mantine-DatePickerinput-calendarHeaderControl | Previous/next calendar header controls |
| calendarHeaderControlIcon | .mantine-DatePickerinput-calendarHeaderControlIcon | Icon of previous/next calendar header controls |
| calendarHeaderLevel | .mantine-DatePickerinput-calendarHeaderLevel | Level control (changes levels when clicked, month -> year -> decade) |
| levelsGroup | .mantine-DatePickerinput-levelsGroup | Group of months levels |
| yearsList | .mantine-DatePickerinput-yearsList | Years list table element |
| yearsListRow | .mantine-DatePickerinput-yearsListRow | Years list row element |
| yearsListCell | .mantine-DatePickerinput-yearsListCell | Years list cell element |
| yearsListControl | .mantine-DatePickerinput-yearsListControl | Button used to pick months and years |
| monthsList | .mantine-DatePickerinput-monthsList | Months list table element |
| monthsListRow | .mantine-DatePickerinput-monthsListRow | Months list row element |
| monthsListCell | .mantine-DatePickerinput-monthsListCell | Months list cell element |
| monthsListControl | .mantine-DatePickerinput-monthsListControl | Button used to pick months and years |
| monthThead | .mantine-DatePickerinput-monthThead | thead element of month table |
| monthRow | .mantine-DatePickerinput-monthRow | tr element of month table |
| monthTbody | .mantine-DatePickerinput-monthTbody | tbody element of month table |
| monthCell | .mantine-DatePickerinput-monthCell | td element of month table |
| month | .mantine-DatePickerinput-month | Month table element |
| weekdaysRow | .mantine-DatePickerinput-weekdaysRow | Weekdays tr element |
| weekday | .mantine-DatePickerinput-weekday | Weekday th element |
| day | .mantine-DatePickerinput-day | Month day control |
| weekNumber | .mantine-DatePickerinput-weekNumber | Week number td element |
| datePickerRoot | .mantine-DatePickerinput-datePickerRoot | Date picker root element, contains calendar and presets |
| presetsList | .mantine-DatePickerinput-presetsList | Presets wrapper element |
| presetButton | .mantine-DatePickerinput-presetButton | Preset button |
| placeholder | .mantine-DatePickerinput-placeholder | Placeholder element |

### DateTimePicker

Package: @mantine/dates
Import: import { DateTimePicker } from '@mantine/dates';
Description: Capture datetime from the user

## DatePicker props

`DateTimePicker` supports most of the [DatePicker](https://mantine.dev/dates/date-picker/) props,
read through [DatePicker](https://mantine.dev/dates/date-picker/) documentation to learn about all component features that are not listed on this page.

## Usage

#### Example: usage

```tsx
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return <DateTimePicker label="Pick date and time" placeholder="Pick date and time" />;
}
```

## With seconds

#### Example: withSeconds

```tsx
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return <DateTimePicker withSeconds label="Pick date and time" placeholder="Pick date and time" />;
}
```

## Presets

Use `presets` prop to add custom date presets. Presets are displayed next to the calendar:

#### Example: presets

```tsx
import dayjs from 'dayjs';
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      label="Pick date and time"
      placeholder="Pick date and time"
      presets={[
        { value: dayjs().subtract(1, 'day').format('YYYY-MM-DD HH:mm:ss'), label: 'Yesterday' },
        { value: dayjs().format('YYYY-MM-DD HH:mm:ss'), label: 'Today' },
        { value: dayjs().add(1, 'day').format('YYYY-MM-DD HH:mm:ss'), label: 'Tomorrow' },
        { value: dayjs().add(1, 'month').format('YYYY-MM-DD HH:mm:ss'), label: 'Next month' },
        { value: dayjs().add(1, 'year').format('YYYY-MM-DD HH:mm:ss'), label: 'Next year' },
        {
          value: dayjs().subtract(1, 'month').format('YYYY-MM-DD HH:mm:ss'),
          label: 'Last month',
        },
        { value: dayjs().subtract(1, 'year').format('YYYY-MM-DD HH:mm:ss'), label: 'Last year' },
      ]}
    />
  );
}
```

## TimePicker props

You can pass props down to the underlying [TimePicker](https://mantine.dev/dates/time-picker/) component
with `timePickerProps` prop. Example of enabling dropdown and setting `12h` format
for time picker:

#### Example: timePickerProps

```tsx
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      label="Pick date and time"
      placeholder="Pick date and time"
      timePickerProps={{
        withDropdown: true,
        popoverProps: { withinPortal: false },
        format: '12h',
      }}
    />
  );
}
```

## Value format

Use `valueFormat` prop to change [dayjs format](https://day.js.org/docs/en/display/format) of value label:

#### Example: format

```tsx
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      valueFormat="DD MMM YYYY hh:mm A"
      label="Pick date and time"
      placeholder="Pick date and time"
    />
  );
}
```

## Disabled state

#### Example: disabled

```tsx
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return <DateTimePicker label="Disabled" placeholder="Pick date and time" disabled />;
}
```

## Input props

DateTimePicker component supports [Input](https://mantine.dev/core/input) and [Input.Wrapper](https://mantine.dev/core/input) components features and all button element props. DateTimePicker documentation does not include all features supported by the component – see [Input](https://mantine.dev/core/input) documentation to learn about all available features.

#### Example: configurator

```tsx
import { DateTimePicker } from '@mantine/dates';


function Demo() {
  return (
    <DateTimePicker
      
      placeholder="Input placeholder"
    />
  );
}
```

## Clearable

Set `clearable` prop to display clear button in the right section. Note that if you set `rightSection`
prop, clear button will not be displayed.

#### Example: clearable

```tsx
import dayjs from 'dayjs';
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      clearable
      defaultValue={dayjs().format('YYYY-MM-DD')}
      label="Pick date and time"
      placeholder="Pick date and time"
    />
  );
}
```

## Open picker in modal

By default, picker is rendered inside [Popover](https://mantine.dev/core/popover/).
You can change that to [Modal](https://mantine.dev/core/modal/) by setting `dropdownType="modal"`:

#### Example: modal

```tsx
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      dropdownType="modal"
      label="Pick date and time"
      placeholder="Pick date and time"
    />
  );
}
```

## Get element ref

```tsx
import { useRef } from 'react';
import { DateTimePicker } from '@mantine/core';

function Demo() {
  const ref = useRef<HTMLButtonElement>(null);
  return <DateTimePicker ref={ref} />;
}
```
