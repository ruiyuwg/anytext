## Accessibility

DatePickerInput provides better accessibility support when used in forms. Make sure to associate the input with a label for better screen reader support.

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
| defaultLevel | "month" | "year" | "decade" | - | Initial displayed level (uncontrolled) |
| defaultValue | DateValue | DatesRangeValue | DateValue\[] | - | Default value for uncontrolled component |
| description | React.ReactNode | - | Contents of Input.Description component. If not set, description is not displayed. |
| descriptionProps | InputDescriptionProps & DataAttributes | - | Props passed down to the Input.Description component |
| disabled | boolean | - | Sets disabled attribute on the input element |
| dropdownType | "popover" | "modal" | - | Type of the dropdown |
| enableKeyboardNavigation | boolean | - | Enable enhanced keyboard navigation (Ctrl/Cmd + Arrow keys for year navigation, Ctrl/Cmd + Shift + Arrow keys for decade navigation, Y key to open year view) |
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
| level | "month" | "year" | "decade" | - | Current displayed level (controlled) |
| locale | string | - | Dayjs locale, defaults to value defined in DatesProvider |
| maxDate | string | Date | - | Maximum possible date in YYYY-MM-DD format or Date object |
| maxLevel | "month" | "year" | "decade" | - | - |
| minDate | string | Date | - | Minimum possible date in YYYY-MM-DD format or Date object |
| modalProps | Partial\<Omit\<ModalProps, "children">> | - | Props passed down to Modal component |
| monthLabelFormat | string | ((date: string) => string) | - | dayjs label format to display month label or a function that returns month label based on month value |
| monthsListFormat | string | - | dayjs format for months list |
| nextIcon | React.ReactNode | - | Change next icon |
| nextLabel | string | - | Next button aria-label |
| numberOfColumns | number | - | Number of columns displayed next to each other |
| onChange | (value: DatePickerValue\<Type, string>) => void | - | Called when value changes |
| onDateChange | (date: string) => void | - | Called when date changes |
| onDropdownClose | () => void | - | Called when the dropdown is closed |
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
| placeholder | string | - | Input placeholder |
| pointer | boolean | - | Determines whether the input should have cursor: pointer style |
| popoverProps | Partial\<Omit\<PopoverProps, "children">> | - | Props passed down to Popover component |
| presets | DatePickerPreset\[] | - | Predefined values to pick from |
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
| type | "range" | "multiple" | "default" | - | Picker type: range, multiple or default |
| value | DateValue | DatesRangeValue | DateValue\[] | - | Value for controlled component |
| valueFormat | string | - | dayjs format for input value |
| valueFormatter | DateFormatter | - | A function to format selected dates values into a string. By default, date is formatted based on the input type. |
| weekdayFormat | string | ((date: string) => string) | - | dayjs format for weekdays names |
| weekendDays | (0 | 1 | 2 | 3 | 4 | 5 | 6)\[] | - | Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday. The default value is defined by DatesProvider. |
| withAsterisk | boolean | - | If set, the required asterisk is displayed next to the label. Overrides required prop. Does not add required attribute to the input. |
| withCellSpacing | boolean | - | Determines whether controls should be separated |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the error prop is set |
| withWeekNumbers | boolean | - | Determines whether week numbers should be displayed |
| wrapperProps | WrapperProps | - | Props passed down to the root element |
| yearLabelFormat | string | ((date: string) => string) | - | dayjs label format to display year label or a function that returns year label based on year value |
| yearsListFormat | string | - | dayjs format for years list |

#### Styles API

DatePickerInput component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**DatePickerInput selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| calendarHeader | .mantine-DatePickerInput-calendarHeader | Calendar header root element |
| calendarHeaderControl | .mantine-DatePickerInput-calendarHeaderControl | Previous/next calendar header controls |
| calendarHeaderControlIcon | .mantine-DatePickerInput-calendarHeaderControlIcon | Icon of previous/next calendar header controls |
| calendarHeaderLevel | .mantine-DatePickerInput-calendarHeaderLevel | Level control (changes levels when clicked, month -> year -> decade) |
| levelsGroup | .mantine-DatePickerInput-levelsGroup | Group of months levels |
| yearsList | .mantine-DatePickerInput-yearsList | Years list table element |
| yearsListRow | .mantine-DatePickerInput-yearsListRow | Years list row element |
| yearsListCell | .mantine-DatePickerInput-yearsListCell | Years list cell element |
| yearsListControl | .mantine-DatePickerInput-yearsListControl | Button used to pick months and years |
| monthsList | .mantine-DatePickerInput-monthsList | Months list table element |
| monthsListRow | .mantine-DatePickerInput-monthsListRow | Months list row element |
| monthsListCell | .mantine-DatePickerInput-monthsListCell | Months list cell element |
| monthsListControl | .mantine-DatePickerInput-monthsListControl | Button used to pick months and years |
| monthThead | .mantine-DatePickerInput-monthThead | thead element of month table |
| monthRow | .mantine-DatePickerInput-monthRow | tr element of month table |
| monthTbody | .mantine-DatePickerInput-monthTbody | tbody element of month table |
| monthCell | .mantine-DatePickerInput-monthCell | td element of month table |
| month | .mantine-DatePickerInput-month | Month table element |
| weekdaysRow | .mantine-DatePickerInput-weekdaysRow | Weekdays tr element |
| weekday | .mantine-DatePickerInput-weekday | Weekday th element |
| day | .mantine-DatePickerInput-day | Month day control |
| weekNumber | .mantine-DatePickerInput-weekNumber | Week number td element |
| datePickerRoot | .mantine-DatePickerInput-datePickerRoot | Date picker root element, contains calendar and presets |
| presetsList | .mantine-DatePickerInput-presetsList | Presets wrapper element |
| presetButton | .mantine-DatePickerInput-presetButton | Preset button |
| placeholder | .mantine-DatePickerInput-placeholder | Placeholder element |

### DatePicker

Package: @mantine/dates
Import: import { DatePicker } from '@mantine/dates';
Description: Inline date, multiple dates and dates range picker

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
