## Props

### Root

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| closeOnSelect | true | `boolean` | Whether the calendar should close after the date selection is complete.
This is ignored when the selection mode is `multiple`. |
| defaultView | "day" | `DateView` | The default view of the calendar |
| lazyMount | false | `boolean` | Whether to enable lazy mounting |
| locale | "en-US" | `string` | The locale (BCP 47 language tag) to use when formatting the date. |
| maxView | "year" | `DateView` | The maximum view of the calendar |
| minView | "day" | `DateView` | The minimum view of the calendar |
| outsideDaySelectable | false | `boolean` | Whether day outside the visible range can be selected. |
| selectionMode | "single" | `SelectionMode` | The selection mode of the calendar.

- `single` - only one date can be selected
- `multiple` - multiple dates can be selected
- `range` - a range of dates can be selected |
  | skipAnimationOnMount | false | `boolean` | Whether to allow the initial presence animation. |
  | timeZone | "UTC" | `string` | The time zone to use |
  | unmountOnExit | false | `boolean` | Whether to unmount on exit. |
  | colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
  | size | md | `'sm' \| 'md' \| 'lg'` | The size of the component |
  | as | undefined | `React.ElementType` | The underlying element to render. |
  | asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
  | unstyled | undefined | `boolean` | Whether to remove the component's style. |
  | defaultFocusedValue | undefined | `DateValue` | The initial focused date when rendered.
  Use when you don't need to control the focused date of the date picker. |
  | defaultOpen | undefined | `boolean` | The initial open state of the date picker when rendered.
  Use when you don't need to control the open state of the date picker. |
  | defaultValue | undefined | `DateValue[]` | The initial selected date(s) when rendered.
  Use when you don't need to control the selected date(s) of the date picker. |
  | disabled | undefined | `boolean` | Whether the calendar is disabled. |
  | fixedWeeks | undefined | `boolean` | Whether the calendar should have a fixed number of weeks.
  This renders the calendar with 6 weeks instead of 5 or 6. |
  | focusedValue | undefined | `DateValue` | The controlled focused date. |
  | format | undefined | `(date: DateValue, details: LocaleDetails) => string` | The format of the date to display in the input. |
  | id | undefined | `string` | The unique identifier of the machine. |
  | ids | undefined | `Partial<{ root: string; label: (index: number) => string; table: (id: string) => string; tableHeader: (id: string) => string; tableBody: (id: string) => string; tableRow: (id: string) => string; content: string; ... 10 more ...; positioner: string; }>` | The ids of the elements in the date picker. Useful for composition. |
  | immediate | undefined | `boolean` | Whether to synchronize the present change immediately or defer it to the next frame |
  | inline | undefined | `boolean` | Whether to render the date picker inline |
  | isDateUnavailable | undefined | `(date: DateValue, locale: string) => boolean` | Returns whether a date of the calendar is available. |
  | max | undefined | `DateValue` | The maximum date that can be selected. |
  | min | undefined | `DateValue` | The minimum date that can be selected. |
  | name | undefined | `string` | The `name` attribute of the input element. |
  | numOfMonths | undefined | `number` | The number of months to display. |
  | onExitComplete | undefined | `VoidFunction` | Function called when the animation ends in the closed state |
  | onFocusChange | undefined | `(details: FocusChangeDetails) => void` | Function called when the focused date changes. |
  | onOpenChange | undefined | `(details: OpenChangeDetails) => void` | Function called when the calendar opens or closes. |
  | onValueChange | undefined | `(details: ValueChangeDetails) => void` | Function called when the value changes. |
  | onViewChange | undefined | `(details: ViewChangeDetails) => void` | Function called when the view changes. |
  | open | undefined | `boolean` | The controlled open state of the date picker |
  | parse | undefined | `(value: string, details: LocaleDetails) => DateValue \| undefined` | Function to parse the date from the input back to a DateValue. |
  | placeholder | undefined | `string` | The placeholder text to display in the input. |
  | positioning | undefined | `PositioningOptions` | The user provided options used to position the date picker content |
  | present | undefined | `boolean` | Whether the node is present (controlled by the user) |
  | readOnly | undefined | `boolean` | Whether the calendar is read-only. |
  | startOfWeek | undefined | `number` | The first day of the week.
  `0` - Sunday
  `1` - Monday
  `2` - Tuesday
  `3` - Wednesday
  `4` - Thursday
  `5` - Friday
  `6` - Saturday |
  | translations | undefined | `IntlTranslations` | The localized messages to use. |
  | value | undefined | `DateValue[]` | The controlled selected date(s). |
  | view | undefined | `DateView` | The view of the calendar |

### Input

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| fixOnBlur | true | `boolean` | Whether to fix the input value on blur. |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| index | undefined | `number` | The index of the input to focus. |

### View

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| view | undefined | `DateView` | undefined |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |

### TableCell

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| value | undefined | `number \| DateValue` | undefined |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| columns | undefined | `number` | undefined |
| disabled | undefined | `boolean` | undefined |
| visibleRange | undefined | `VisibleRange` | undefined |

### PresetTrigger

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| value | undefined | `PresetTriggerValue` | undefined |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |

## Explorer

Explore the `DatePicker` component parts interactively. Click on parts in the
sidebar to highlight them in the preview.

<Explorer name="date-picker-explorer-demo" />
