## Accessibility

YearPickerInput provides better accessibility support when used in forms. Make sure to associate the input with a label for better screen reader support.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| allowDeselect | boolean | - | Determines whether user can deselect the date by clicking on selected item, applicable only when type="default" |
| allowSingleDateInRange | boolean | - | Determines whether a single day can be selected as range, applicable only when type="range" |
| ariaLabels | CalendarAriaLabels | - | aria-label attributes for controls on different levels |
| clearButtonProps | React.ComponentPropsWithoutRef<"button"> | - | Props passed down to the clear button |
| clearable | boolean | - | If set, clear button is displayed in the rightSection when the component has value. Ignored if rightSection prop is set. |
| closeOnChange | boolean | - | Determines whether the dropdown is closed when date is selected, not applicable with type="multiple" |
| columnsToScroll | number | - | Number of columns to scroll with next/prev buttons, same as numberOfColumns if not set explicitly |
| date | string | Date | - | Displayed date in controlled mode |
| decadeLabelFormat | string | ((startOfDecade: string, endOfDecade: string) => ReactNode) | - | dayjs format for decade label or a function that returns decade label based on the date value |
| defaultDate | string | Date | - | Initial displayed date in uncontrolled mode |
| defaultValue | DateValue | DatesRangeValue | DateValue\[] | - | Default value for uncontrolled component |
| description | React.ReactNode | - | Contents of Input.Description component. If not set, description is not displayed. |
| descriptionProps | InputDescriptionProps & DataAttributes | - | Props passed down to the Input.Description component |
| disabled | boolean | - | Sets disabled attribute on the input element |
| dropdownType | "popover" | "modal" | - | Type of the dropdown |
| error | React.ReactNode | - | Contents of Input.Error component. If not set, error is not displayed. |
| errorProps | InputErrorProps & DataAttributes | - | Props passed down to the Input.Error component |
| getYearControlProps | (date: string) => Partial & DataAttributes | - | Passes props down to year picker control based on date |
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
| locale | string | - | Dayjs locale, defaults to value defined in DatesProvider |
| maxDate | string | Date | - | Maximum possible date in YYYY-MM-DD format or Date object |
| minDate | string | Date | - | Minimum possible date in YYYY-MM-DD format or Date object |
| modalProps | Partial\<Omit\<ModalProps, "children">> | - | Props passed down to Modal component |
| nextLabel | string | - | Next button aria-label |
| numberOfColumns | number | - | Number of columns displayed next to each other |
| onChange | (value: DatePickerValue\<Type, string>) => void | - | Called when value changes |
| onDateChange | (date: string) => void | - | Called when date changes |
| onDropdownClose | () => void | - | Called when the dropdown is closed |
| onNextDecade | (date: string) => void | - | Called when the next decade button is clicked |
| onPreviousDecade | (date: string) => void | - | Called when the previous decade button is clicked |
| placeholder | string | - | Input placeholder |
| pointer | boolean | - | Determines whether the input should have cursor: pointer style |
| popoverProps | Partial\<Omit\<PopoverProps, "children">> | - | Props passed down to Popover component |
| previousLabel | string | - | Previous button aria-label |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius, numbers are converted to rem |
| readOnly | boolean | - | If set, the component value cannot be changed by the user |
| required | boolean | - | Adds required attribute to the input and a red asterisk on the right side of label |
| rightSection | React.ReactNode | - | Content section displayed on the right side of the input |
| rightSectionPointerEvents | React.CSSProperties\["pointerEvents"] | - | Sets pointer-events styles on the rightSection element |
| rightSectionProps | React.ComponentPropsWithoutRef<"div"> | - | Props passed down to the rightSection element |
| rightSectionWidth | React.CSSProperties\["width"] | - | Right section width, used to set width of the section and input padding-right, by default equals to the input height |
| size | MantineSize | - | Component size |
| sortDates | boolean | - | Determines whether dates values should be sorted before onChange call, only applicable with type="multiple" |
| type | "range" | "multiple" | "default" | - | Picker type: range, multiple or default |
| value | DateValue | DatesRangeValue | DateValue\[] | - | Value for controlled component |
| valueFormat | string | - | dayjs format to display input value |
| valueFormatter | DateFormatter | - | A function to format selected dates values into a string. By default, date is formatted based on the input type. |
| withAsterisk | boolean | - | If set, the required asterisk is displayed next to the label. Overrides required prop. Does not add required attribute to the input. |
| withCellSpacing | boolean | - | Determines whether controls should be separated |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the error prop is set |
| wrapperProps | WrapperProps | - | Props passed down to the root element |
| yearsListFormat | string | - | dayjs format for years list |

#### Styles API

YearPickerInput component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**YearPickerInput selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| calendarHeader | .mantine-YearPickerInput-calendarHeader | Calendar header root element |
| calendarHeaderControl | .mantine-YearPickerInput-calendarHeaderControl | Previous/next calendar header controls |
| calendarHeaderControlIcon | .mantine-YearPickerInput-calendarHeaderControlIcon | Icon of previous/next calendar header controls |
| calendarHeaderLevel | .mantine-YearPickerInput-calendarHeaderLevel | Level control (changes levels when clicked, month -> year -> decade) |
| levelsGroup | .mantine-YearPickerInput-levelsGroup | Group of decades levels |
| yearsList | .mantine-YearPickerInput-yearsList | Years list table element |
| yearsListRow | .mantine-YearPickerInput-yearsListRow | Years list row element |
| yearsListCell | .mantine-YearPickerInput-yearsListCell | Years list cell element |
| yearsListControl | .mantine-YearPickerInput-yearsListControl | Button used to pick months and years |
| placeholder | .mantine-YearPickerInput-placeholder | Placeholder element |

### YearPicker

Package: @mantine/dates
Import: import { YearPicker } from '@mantine/dates';
Description: Inline year, multiple years and years range picker

## Usage

## Allow deselect

Set `allowDeselect` to allow user to deselect current selected date by clicking on it.
`allowDeselect` is disregarded when `type` prop is `range` or `multiple`. When date is
deselected `onChange` is called with `null`.

## Multiple dates

Set `type="multiple"` to allow user to pick multiple dates:

## Dates range

Set `type="range"` to allow user to pick dates range:

## Single date in range

By default, it is not allowed to select single date as range – when user clicks the same date second time it is deselected.
To change this behavior set `allowSingleDateInRange` prop. `allowSingleDateInRange` is ignored when
`type` prop is not `range`.

## Default date

Use `defaultDate` prop to set date value that will be used to determine which decade should be displayed initially.
For example to display `2040 – 2049` decade set `defaultDate={new Date(2040, 1)}`. If value is not specified,
then `defaultDate` will use `new Date()`. Month, day, minutes and seconds are ignored in provided date object, only year is used –
you can specify any date value.

Note that if you set `date` prop, then `defaultDate` value will be ignored.

#### Example: defaultDate

```tsx
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <YearPicker defaultDate="2040-02-01" value={value} onChange={setValue} />;
}
```

## Controlled date

Set `date`, and `onDateChange` props to make currently displayed decade controlled.
By doing so, you can customize date picking experience, for example, when user selects first date in range,
you can add 20 years to current date value:

#### Example: controlledDate

```tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[string | null, string | null]>([null, null]);
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  const handleChange = (val: [string | null, string | null]) => {
    if (val[0] !== null && val[1] === null) {
      setDate((current) => dayjs(current).add(20, 'year').format('YYYY-MM-DD'));
    }

    setValue(val);
  };

  return (
    <YearPicker
      date={date}
      onDateChange={setDate}
      type="range"
      value={value}
      onChange={handleChange}
    />
  );
}
```

## Min and max date

Set `minDate` and `maxDate` props to define min and max dates. If previous/next page is not available
then corresponding control will be disabled.

#### Example: minMax

```tsx
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <YearPicker
      value={value}
      onChange={setValue}
      minDate="2021-02-01"
      maxDate="2028-02-01"
    />
  );
}
```

## Add props to year control

You can add props to year controls with `getYearControlProps` function. It accepts year date as single argument,
props returned from the function will be added to year control. For example, it can be used to disable specific
control or add styles:

#### Example: controlProps

```tsx
import dayjs from 'dayjs';
import { useState } from 'react';
import { YearPicker, YearPickerProps } from '@mantine/dates';

const getYearControlProps: YearPickerProps['getYearControlProps'] = (date) => {
  if (dayjs(date).year() === new Date().getFullYear()) {
    return {
      style: {
        color: 'var(--mantine-color-blue-filled)',
        fontWeight: 700,
      },
    };
  }

  if (dayjs(date).year() === new Date().getFullYear() + 1) {
    return { disabled: true };
  }

  return {};
};

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <YearPicker value={value} onChange={setValue} getYearControlProps={getYearControlProps} />;
}
```

## Number of columns

Set `numberOfColumns` prop to define number of pickers that will be rendered side by side:

## Size

## Change year controls format

Use `yearsListFormat` to change [dayjs format](https://day.js.org/docs/en/display/format) of year control:

#### Example: yearsListFormat

```tsx
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <YearPicker yearsListFormat="YY" value={value} onChange={setValue} />;
}
```

## Change decade label format

Use `decadeLabelFormat` to change [dayjs format](https://day.js.org/docs/en/display/format) of decade label:

#### Example: decadeLabelFormat

```tsx
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <YearPicker decadeLabelFormat="YY" value={value} onChange={setValue} />;
}
```
