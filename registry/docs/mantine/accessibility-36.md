## Accessibility

Use `nextControlProps` and `previousControlProps` to add `aria-label` and other props to navigation buttons:

```tsx
import { MiniCalendar } from '@mantine/dates';

function Demo() {
  return (
    <MiniCalendar
      nextControlProps={{ 'aria-label': 'Next range' }}
      previousControlProps={{ 'aria-label': 'Previous range' }}
    />
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| date | string | Date | - | Controlled component date value, start date of the interval |
| defaultDate | string | Date | - | Uncontrolled component default value, start date of the interval |
| getDayProps | (date: string) => Record\<string, any> | - | Props passed down to the day component |
| locale | string | - | dayjs locale used for formatting |
| maxDate | string | Date | - | Maximum date that can be selected, date object or date string in YYYY-MM-DD format |
| minDate | string | Date | - | Minimum date that can be selected, date object or date string in YYYY-MM-DD format |
| monthLabelFormat | string | - | Dayjs format string for month label |
| nextControlProps | Omit\<DetailedHTMLProps\<ButtonHTMLAttributes, HTMLButtonElement>, "ref"> & DataAttributes | - | Props passed to next control button |
| numberOfDays | number | - | Number of days to display in the calendar |
| onChange | (date: string) => void | - | Called with date in YYYY-MM-DD format when date changes |
| onDateChange | (date: string) => void | - | Called with date in YYYY-MM-DD format when date internal changes |
| onNext | () => void | - | Called when the next button is clicked |
| onPrevious | () => void | - | Called when the previous button is clicked |
| previousControlProps | Omit\<DetailedHTMLProps\<ButtonHTMLAttributes, HTMLButtonElement>, "ref"> & DataAttributes | - | Props passed to previous control button |
| size | MantineSize | - | Component size |
| value | string | Date | null | - | Selected date, controlled value |

#### Styles API

MiniCalendar component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**MiniCalendar selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-MiniCalendar-root | Root element |
| control | .mantine-MiniCalendar-control | Button in the dropdown which is used to select hours/minutes/seconds/am-pm |
| days | .mantine-MiniCalendar-days | Days container |
| day | .mantine-MiniCalendar-day | Single day element |
| dayMonth | .mantine-MiniCalendar-dayMonth | Day element in month view |
| dayNumber | .mantine-MiniCalendar-dayNumber | Day number element |

**MiniCalendar CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --mini-calendar-font-size | Controls size of all elements (based on em units) |

**MiniCalendar data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| control | disabled | Next/previous range is after  | - |
| control | direction | - | - |
| day | selected | The day matches the  | - |
| day | disabled | The day is before  | - |

### MonthPickerInput

Package: @mantine/dates
Import: import { MonthPickerInput } from '@mantine/dates';
Description: Month, multiple months and months range picker input

## MonthPicker props

`MonthPickerInput` supports most of the [MonthPicker](https://mantine.dev/dates/month-picker/) props,
read through [MonthPicker](https://mantine.dev/dates/month-picker/) documentation to learn about all component features that are not listed on this page.

## Usage

## Multiple dates

Set `type="multiple"` to allow user to pick multiple dates:

## Dates range

Set `type="range"` to allow user to pick dates range:

## Open picker in modal

By default, [MonthPicker](https://mantine.dev/dates/month-picker/) is rendered inside [Popover](https://mantine.dev/core/popover/).
You can change that to [Modal](https://mantine.dev/core/modal/) by setting `dropdownType="modal"`:

## Value format

Use `valueFormat` prop to change [dayjs format](https://day.js.org/docs/en/display/format) of value label:

#### Example: valueFormat

```tsx
import { MonthPickerInput } from '@mantine/dates';

function Demo() {
  return (
    <MonthPickerInput
      valueFormat="YYYY MMM"
      type="multiple"
      label="Pick month"
      placeholder="Pick month"
    />
  );
}
```

## Value formatter

`valueFormatter` is a more powerful alternative to `valueFormat` prop.
It allows formatting value label with a custom function.
The function is the same for all component types (`default`, `multiple` and `range`)
– you need to perform additional checks inside the function to handle different types.

Example of using a custom formatter function with `type="multiple"`:

## Clearable

Set `clearable` prop to display clear button in the right section. Note that if you set `rightSection`
prop, clear button will not be displayed.

## Disabled state

#### Example: disabled

```tsx
import { MonthPickerInput } from '@mantine/dates';

function Demo() {
  return (
    <MonthPickerInput
      valueFormat="YYYY MMM"
      type="multiple"
      label="Disabled"
      placeholder="Pick month"
      disabled
    />
  );
}
```

## Input props

MonthPickerInput component supports [Input](https://mantine.dev/core/input) and [Input.Wrapper](https://mantine.dev/core/input) components features and all button element props. MonthPickerInput documentation does not include all features supported by the component – see [Input](https://mantine.dev/core/input) documentation to learn about all available features.

## With icon

## Get element ref

```tsx
import { useRef } from 'react';
import { MonthPickerInput } from '@mantine/core';

function Demo() {
  const ref = useRef<HTMLButtonElement>(null);
  return <MonthPickerInput ref={ref} />;
}
```
