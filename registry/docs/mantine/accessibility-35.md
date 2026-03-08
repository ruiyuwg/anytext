## Accessibility

DateTimePicker provides better accessibility support when used in forms. Make sure to associate the input with a label for better screen reader support.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| ariaLabels | CalendarAriaLabels | - | aria-label attributes for controls on different levels |
| clearButtonProps | React.ComponentPropsWithoutRef<"button"> | - | Props passed down to the clear button |
| clearable | boolean | - | If set, clear button is displayed in the rightSection when the component has value. Ignored if rightSection prop is set. |
| columnsToScroll | number | - | Number of columns to scroll with next/prev buttons, same as numberOfColumns if not set explicitly |
| date | string | Date | - | Displayed date in controlled mode |
| decadeLabelFormat | string | ((startOfDecade: string, endOfDecade: string) => ReactNode) | - | dayjs format for decade label or a function that returns decade label based on the date value |
| defaultDate | string | Date | - | Initial displayed date in uncontrolled mode |
| defaultLevel | "month" | "year" | "decade" | - | Initial displayed level in uncontrolled mode |
| defaultTimeValue | string | - | Default time value in HH:mm or HH:mm:ss format. Assigned to time when date is selected. |
| defaultValue | DateValue | - | Uncontrolled component default value |
| description | React.ReactNode | - | Contents of Input.Description component. If not set, description is not displayed. |
| descriptionProps | InputDescriptionProps & DataAttributes | - | Props passed down to the Input.Description component |
| disabled | boolean | - | Sets disabled attribute on the input element |
| dropdownType | "popover" | "modal" | - | Type of the dropdown |
| error | React.ReactNode | - | Contents of Input.Error component. If not set, error is not displayed. |
| errorProps | InputErrorProps & DataAttributes | - | Props passed down to the Input.Error component |
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
| inputContainer | (children: ReactNode) => ReactNode | - | Input container component |
| inputSize | string | - | size attribute passed down to the input element |
| inputWrapperOrder | ("input" | "label" | "description" | "error")\[] | - | Controls order of the elements |
| label | React.ReactNode | - | Contents of Input.Label component. If not set, label is not displayed. |
| labelProps | InputLabelProps & DataAttributes | - | Props passed down to the Input.Label component |
| labelSeparator | string | - | Separator between range value |
| leftSection | React.ReactNode | - | Content section displayed on the left side of the input |
| leftSectionPointerEvents | React.CSSProperties\["pointerEvents"] | - | Sets pointer-events styles on the leftSection element |
| leftSectionProps | React.ComponentPropsWithoutRef<"div"> | - | Props passed down to the leftSection element |
| leftSectionWidth | React.CSSProperties\["width"] | - | Left section width, used to set width of the section and input padding-left, by default equals to the input height |
| level | "month" | "year" | "decade" | - | Current displayed level displayed in controlled mode |
| locale | string | - | Dayjs locale, defaults to value defined in DatesProvider |
| maxDate | string | Date | - | Maximum possible date in YYYY-MM-DD format or Date object |
| maxLevel | "month" | "year" | "decade" | - | Max level that user can go up to |
| minDate | string | Date | - | Minimum possible date in YYYY-MM-DD format or Date object |
| modalProps | Partial\<Omit\<ModalProps, "children">> | - | Props passed down to Modal component |
| monthLabelFormat | string | ((date: string) => string) | - | dayjs label format to display month label or a function that returns month label based on month value |
| monthsListFormat | string | - | dayjs format for months list |
| nextIcon | React.ReactNode | - | Change next icon |
| nextLabel | string | - | Next button aria-label |
| numberOfColumns | number | - | Number of columns displayed next to each other |
| onChange | (value: string | null) => void | - | Called when value changes |
| onDateChange | (date: string) => void | - | Called when date changes |
| onDropdownClose | () => void | - | Called when the dropdown is closed |
| onLevelChange | (level: CalendarLevel) => void | - | Called when level changes |
| onMonthSelect | (date: string) => void | - | Called when user selects month |
| onNextDecade | (date: string) => void | - | Called when the next decade button is clicked |
| onNextMonth | (date: string) => void | - | Called when the next month button is clicked |
| onNextYear | (date: string) => void | - | Called when the next year button is clicked |
| onPreviousDecade | (date: string) => void | - | Called when the previous decade button is clicked |
| onPreviousMonth | (date: string) => void | - | Called when the previous month button is clicked |
| onPreviousYear | (date: string) => void | - | Called when the previous year button is clicked |
| onYearSelect | (date: string) => void | - | Called when user selects year |
| placeholder | string | - | Input placeholder |
| pointer | boolean | - | Determines whether the input should have cursor: pointer style |
| popoverProps | Partial\<Omit\<PopoverProps, "children">> | - | Props passed down to Popover component |
| presets | DatePickerPreset<"default">\[] | - | Presets values |
| previousIcon | React.ReactNode | - | Change previous icon |
| previousLabel | string | - | Previous button aria-label |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius, numbers are converted to rem |
| readOnly | boolean | - | If set, the component value cannot be changed by the user |
| renderDay | (date: string) => React.ReactNode | - | Controls day value rendering |
| required | boolean | - | Adds required attribute to the input and a red asterisk on the right side of label |
| rightSection | React.ReactNode | - | Content section displayed on the right side of the input |
| rightSectionPointerEvents | React.CSSProperties\["pointerEvents"] | - | Sets pointer-events styles on the rightSection element |
| rightSectionProps | React.ComponentPropsWithoutRef<"div"> | - | Props passed down to the rightSection element |
| rightSectionWidth | React.CSSProperties\["width"] | - | Right section width, used to set width of the section and input padding-right, by default equals to the input height |
| size | MantineSize | - | Component size |
| sortDates | boolean | - | Determines whether dates values should be sorted before onChange call, only applicable with type="multiple" |
| submitButtonProps | ActionIconProps & Omit\<DetailedHTMLProps\<ButtonHTMLAttributes, HTMLButtonElement>, "ref"> | - | Props passed down to the submit button |
| timePickerProps | Omit\<TimePickerProps, "defaultValue" | "value"> | - | Props passed down to TimePicker component |
| value | DateValue | - | Controlled component value |
| valueFormat | string | - | dayjs format for input value |
| weekdayFormat | string | ((date: string) => string) | - | dayjs format for weekdays names |
| weekendDays | (0 | 1 | 2 | 3 | 4 | 5 | 6)\[] | - | Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday. The default value is defined by DatesProvider. |
| withAsterisk | boolean | - | If set, the required asterisk is displayed next to the label. Overrides required prop. Does not add required attribute to the input. |
| withCellSpacing | boolean | - | Determines whether controls should be separated |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the error prop is set |
| withSeconds | boolean | - | Determines whether the seconds input should be displayed |
| withWeekNumbers | boolean | - | Determines whether week numbers should be displayed |
| wrapperProps | WrapperProps | - | Props passed down to the root element |
| yearLabelFormat | string | ((date: string) => string) | - | dayjs label format to display year label or a function that returns year label based on year value |
| yearsListFormat | string | - | dayjs format for years list |

#### Styles API

DateTimePicker component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**DateTimePicker selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| calendarHeader | .mantine-DateTimePicker-calendarHeader | Calendar header root element |
| calendarHeaderControl | .mantine-DateTimePicker-calendarHeaderControl | Previous/next calendar header controls |
| calendarHeaderControlIcon | .mantine-DateTimePicker-calendarHeaderControlIcon | Icon of previous/next calendar header controls |
| calendarHeaderLevel | .mantine-DateTimePicker-calendarHeaderLevel | Level control (changes levels when clicked, month -> year -> decade) |
| levelsGroup | .mantine-DateTimePicker-levelsGroup | Group of months levels |
| yearsList | .mantine-DateTimePicker-yearsList | Years list table element |
| yearsListRow | .mantine-DateTimePicker-yearsListRow | Years list row element |
| yearsListCell | .mantine-DateTimePicker-yearsListCell | Years list cell element |
| yearsListControl | .mantine-DateTimePicker-yearsListControl | Button used to pick months and years |
| monthsList | .mantine-DateTimePicker-monthsList | Months list table element |
| monthsListRow | .mantine-DateTimePicker-monthsListRow | Months list row element |
| monthsListCell | .mantine-DateTimePicker-monthsListCell | Months list cell element |
| monthsListControl | .mantine-DateTimePicker-monthsListControl | Button used to pick months and years |
| monthThead | .mantine-DateTimePicker-monthThead | thead element of month table |
| monthRow | .mantine-DateTimePicker-monthRow | tr element of month table |
| monthTbody | .mantine-DateTimePicker-monthTbody | tbody element of month table |
| monthCell | .mantine-DateTimePicker-monthCell | td element of month table |
| month | .mantine-DateTimePicker-month | Month table element |
| weekdaysRow | .mantine-DateTimePicker-weekdaysRow | Weekdays tr element |
| weekday | .mantine-DateTimePicker-weekday | Weekday th element |
| day | .mantine-DateTimePicker-day | Month day control |
| weekNumber | .mantine-DateTimePicker-weekNumber | Week number td element |
| datePickerRoot | .mantine-DateTimePicker-datePickerRoot | Date picker root element, contains calendar and presets |
| presetsList | .mantine-DateTimePicker-presetsList | Presets wrapper element |
| presetButton | .mantine-DateTimePicker-presetButton | Preset button |
| placeholder | .mantine-DateTimePicker-placeholder | Placeholder element |
| timeWrapper | .mantine-DateTimePicker-timeWrapper | Wrapper around time input and submit button |
| timeInput | .mantine-DateTimePicker-timeInput | TimeInput |
| submitButton | .mantine-DateTimePicker-submitButton | Submit button |

### GettingStartedDates

Package: @mantine/dates
Import: import { GettingStartedDates } from '@mantine/dates';

## Installation

```bash
yarn add @mantine/dates dayjs
```

```bash
npm install @mantine/dates dayjs
```

After installation import package styles at the root of your application:

```tsx
import '@mantine/core/styles.css';
// ‼️ import dates styles after core package styles
import '@mantine/dates/styles.css';
```

## Do not forget to import styles

Followed installation instructions above but something is not working
(calendars and date pickers have no styles and look broken)?
You've fallen into the trap of not importing dates styles!
To fix the issue, import dates styles at the root of your application:

```tsx
import '@mantine/dates/styles.css';
```

## Usage

After installing `@mantine/dates` package and importing styles, you can use all components from it:

## dayjs

`@mantine/dates` components use [dayjs](https://day.js.org/) under the hood for date manipulations and formatting.
dayjs is a required dependency – you cannot change it to another date library. If you want to use a different
date library in your application, you will need to install it separately.

## DatesProvider

`DatesProvider` component lets you set various settings that are shared across all
components exported from `@mantine/dates` package. `DatesProvider` supports the following settings:

- `locale` – dayjs locale, note that you also need to import corresponding locale module from dayjs. Default value is `en`.
- `firstDayOfWeek` – number from 0 to 6, where 0 is Sunday and 6 is Saturday. Default value is 1 – Monday.
- `weekendDays` – an array of numbers from 0 to 6, where 0 is Sunday and 6 is Saturday. Default value is `[0, 6]` – Saturday and Sunday.
- `consistentWeeks` – boolean, if `true` every month will have 6 weeks. Default value is `false`.

#### Example: usage

```tsx
import 'dayjs/locale/ru';
import { DatesProvider, MonthPickerInput, DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <DatesProvider settings={{ locale: 'ru', firstDayOfWeek: 0, weekendDays: [0] }}>
      <MonthPickerInput label="Pick month" placeholder="Pick month" />
      <DatePickerInput mt="md" label="Pick date" placeholder="Pick date" />
    </DatesProvider>
  );
}
```

## Consistent weeks

If you want to avoid layout shifts, set `consistentWeeks: true` in `DatesProvider` settings.
This will make sure that every month has 6 weeks, even if outside days are not in the same month.

#### Example: consistentWeeks

```tsx
import { DatePicker, DatesProvider } from '@mantine/dates';

function Demo() {
  return (
    <DatesProvider settings={{ consistentWeeks: true }}>
      <DatePicker />
    </DatesProvider>
  );
}
```

## Custom parse format

Some components like [DateInput](https://mantine.dev/dates/date-input) require [custom parse format](https://day.js.org/docs/en/plugin/custom-parse-format)
dayjs plugin. You need to extend dayjs with this plugin before using components that require it. Note that
it is usually done once in your application root file, so you don't need to do it every time you use component.

```tsx
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);
```

## Localization and server components

To add localization you must import `import 'dayjs/locale/x';` in your application (`x` is locale name)
and set `locale` either on `DatesProvider` or on each component individually.

Example of setting locale on DatesProvider:

```tsx
import 'dayjs/locale/ru';

import { DatesProvider } from '@mantine/dates';

function Demo() {
  return (
    <DatesProvider settings={{ locale: 'ru' }}>
      {/* Your app  */}
    </DatesProvider>
  );
}
```

The code above works in all environments, except Next.js app router.
If you are using Next.js app router, you must add `'use client';` to the
top of the file where you are importing `dayjs/locale/x` – locale data
is required both on client and server.

```tsx
'use client';

import 'dayjs/locale/ru';

import { DatesProvider } from '@mantine/dates';

function Demo() {
  return (
    <DatesProvider settings={{ locale: 'ru' }}>
      {/* Your app  */}
    </DatesProvider>
  );
}
```

### MiniCalendar

Package: @mantine/dates
Import: import { MiniCalendar } from '@mantine/dates';
Description: Compact calendar to display a small number of days in a row

## Usage

#### Example: usage

```tsx
import { useState } from 'react';
import { MiniCalendar } from '@mantine/dates';

function Demo() {
  const [value, onChange] = useState<string | null>('2025-04-15');
  return <MiniCalendar value={value} onChange={onChange} numberOfDays={6} />;
}
```

## Number of days

Use `numberOfDays` prop to control how many days are displayed at once.
The default value is `7`.

#### Example: numberOfDays

```tsx
import { MiniCalendar } from '@mantine/dates';

function Demo() {
  return <MiniCalendar numberOfDays={5} />;
}
```

## getDayProps

Use `getDayProps` to add custom props to days, for example, assign styles to weekends:

#### Example: getDayProps

```tsx
import dayjs from 'dayjs';
import { MiniCalendar } from '@mantine/dates';

function Demo() {
  return (
    <MiniCalendar
      numberOfDays={6}
      getDayProps={(date) => ({
        style: {
          color: [0, 6].includes(dayjs(date).day()) ? 'var(--mantine-color-red-8)' : undefined,
        },
      })}
    />
  );
}
```

## Min and max dates

Use `minDate` and `maxDate` props to limit date selection:

#### Example: minMax

```tsx
import { useState } from 'react';
import { MiniCalendar } from '@mantine/dates';

function Demo() {
  const [value, onChange] = useState<string | null>('2025-04-15');
  return (
    <MiniCalendar
      value={value}
      onChange={onChange}
      numberOfDays={6}
      defaultDate="2025-04-13"
      minDate="2025-04-14"
      maxDate="2025-04-24"
    />
  );
}
```

## Localization

You can change localization both on component level with `locale` prop and
globally with [DatesProvider](https://mantine.dev/dates/getting-started).

#### Example: locale

```tsx
import 'dayjs/locale/ru';
import { MiniCalendar } from '@mantine/dates';

function Demo() {
  return <MiniCalendar defaultDate="2025-04-15" locale="ru" numberOfDays={6} />;
}
```
