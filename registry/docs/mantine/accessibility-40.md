## Accessibility

Set aria labels for hours, minutes, seconds and am/pm inputs and clear button with corresponding props:

```tsx
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker
      hoursInputLabel="Hours"
      minutesInputLabel="Minutes"
      secondsInputLabel="Seconds"
      amPmInputLabel="AM/PM"
      clearButtonProps={{ 'aria-label': 'Clear time' }}
    />
  );
}
```

Keyboard interactions:

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| amPmInputLabel | string | - | aria-label of am/pm input |
| amPmLabels | { am: string; pm: string } | - | Labels used for am/pm values |
| amPmRef | Ref | - | A ref object to get node reference of the am/pm select |
| amPmSelectProps | React.ComponentPropsWithoutRef<"select"> | - | Props passed down to am/pm select |
| clearButtonProps | CloseButtonProps | - | Props passed down to clear button |
| clearable | boolean | - | Determines whether the clear button should be displayed |
| defaultValue | string | - | Uncontrolled component default value |
| description | React.ReactNode | - | Contents of Input.Description component. If not set, description is not displayed. |
| descriptionProps | InputDescriptionProps & DataAttributes | - | Props passed down to the Input.Description component |
| disabled | boolean | - | If set, the component becomes disabled |
| error | React.ReactNode | - | Contents of Input.Error component. If not set, error is not displayed. |
| errorProps | InputErrorProps & DataAttributes | - | Props passed down to the Input.Error component |
| form | string | - | form prop passed down to the hidden input |
| format | "12h" | "24h" | - | Time format, '24h' by default |
| hiddenInputProps | React.ComponentPropsWithoutRef<"input"> | - | Props passed down to the hidden input |
| hoursInputLabel | string | - | aria-label of hours input |
| hoursInputProps | React.ComponentPropsWithoutRef<"input"> | - | Props passed down to hours input |
| hoursPlaceholder | string | - | Hours input placeholder, |
| hoursRef | Ref | - | A ref object to get node reference of the hours input |
| hoursStep | number | - | Number by which hours are incremented/decremented |
| inputContainer | (children: ReactNode) => ReactNode | - | Input container component |
| inputSize | string | - | size attribute passed down to the input element |
| inputWrapperOrder | ("input" | "label" | "description" | "error")\[] | - | Controls order of the elements |
| label | React.ReactNode | - | Contents of Input.Label component. If not set, label is not displayed. |
| labelProps | InputLabelProps & DataAttributes | - | Props passed down to the Input.Label component |
| leftSection | React.ReactNode | - | Content section displayed on the left side of the input |
| leftSectionPointerEvents | React.CSSProperties\["pointerEvents"] | - | Sets pointer-events styles on the leftSection element |
| leftSectionProps | React.ComponentPropsWithoutRef<"div"> | - | Props passed down to the leftSection element |
| leftSectionWidth | React.CSSProperties\["width"] | - | Left section width, used to set width of the section and input padding-left, by default equals to the input height |
| max | string | - | Max possible time value in hh:mm:ss format |
| maxDropdownContentHeight | number | - | Maximum height of the content displayed in the dropdown in px |
| min | string | - | Min possible time value in hh:mm:ss format |
| minutesInputLabel | string | - | aria-label of minutes input |
| minutesInputProps | React.ComponentPropsWithoutRef<"input"> | - | Props passed down to minutes input |
| minutesPlaceholder | string | - | Minutes input placeholder, |
| minutesRef | Ref | - | A ref object to get node reference of the minutes input |
| minutesStep | number | - | Number by which minutes are incremented/decremented |
| name | string | - | name prop passed down to the hidden input |
| onBlur | (event: FocusEvent\<HTMLDivElement, Element>) => void | - | Called once when the focus is no longer on any of the inputs |
| onChange | (value: string) => void | - | Called when the value changes |
| onFocus | (event: FocusEvent\<HTMLInputElement, Element>) => void | - | Called once when one of the inputs is focused, not called when focused is shifted between hours, minutes, seconds and am/pm inputs |
| pasteSplit | TimePickerPasteSplit | - | A function to transform paste values, by default time in 24h format can be parsed on paste for example 23:34:22 |
| pointer | boolean | - | Determines whether the input should have cursor: pointer style |
| popoverProps | PopoverProps | - | Props passed down to Popover component |
| presets | TimePickerPresets | - | Time presets to display in the dropdown |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius, numbers are converted to rem |
| readOnly | boolean | - | If set, the value cannot be updated |
| required | boolean | - | Adds required attribute to the input and a red asterisk on the right side of label |
| reverseTimeControlsList | boolean | - | If set, the time controls list are reversed, |
| rightSection | React.ReactNode | - | Content section displayed on the right side of the input |
| rightSectionPointerEvents | React.CSSProperties\["pointerEvents"] | - | Sets pointer-events styles on the rightSection element |
| rightSectionProps | React.ComponentPropsWithoutRef<"div"> | - | Props passed down to the rightSection element |
| rightSectionWidth | React.CSSProperties\["width"] | - | Right section width, used to set width of the section and input padding-right, by default equals to the input height |
| scrollAreaProps | ScrollAreaProps | - | Props passed down to all underlying ScrollArea components |
| secondsInputLabel | string | - | aria-label of seconds input |
| secondsInputProps | React.ComponentPropsWithoutRef<"input"> | - | Props passed down to seconds input |
| secondsPlaceholder | string | - | Seconds input placeholder, |
| secondsRef | Ref | - | A ref object to get node reference of the seconds input |
| secondsStep | number | - | Number by which seconds are incremented/decremented |
| size | MantineSize | (string & {}) | - | Controls input height and horizontal padding |
| value | string | - | Controlled component value |
| withAsterisk | boolean | - | If set, the required asterisk is displayed next to the label. Overrides required prop. Does not add required attribute to the input. |
| withDropdown | boolean | - | Determines whether the dropdown with time controls list should be visible when the input has focus |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the error prop is set |
| withSeconds | boolean | - | Determines whether the seconds input should be displayed |
| wrapperProps | WrapperProps | - | Props passed down to the root element |

#### Styles API

TimePicker component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**TimePicker selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| wrapper | .mantine-TimePicker-wrapper | Root element of the Input |
| input | .mantine-TimePicker-input | Input element |
| section | .mantine-TimePicker-section | Left and right sections |
| root | .mantine-TimePicker-root | Root element |
| label | .mantine-TimePicker-label | Label element |
| required | .mantine-TimePicker-required | Required asterisk element, rendered inside label |
| description | .mantine-TimePicker-description | Description element |
| error | .mantine-TimePicker-error | Error element |
| control | .mantine-TimePicker-control | Button in the dropdown which is used to select hours/minutes/seconds/am-pm |
| controlsList | .mantine-TimePicker-controlsList | List of buttons with hours/minutes/seconds/am-pm |
| controlsListGroup | .mantine-TimePicker-controlsListGroup | Group of controlsLists |
| dropdown | .mantine-TimePicker-dropdown | Popover dropdown |
| fieldsRoot | .mantine-TimePicker-fieldsRoot | A wrapper element for all fieldsGroups |
| fieldsGroup | .mantine-TimePicker-fieldsGroup | A wrapper element for hours/minutes/seconds/am-pm fields |
| field | .mantine-TimePicker-field | Hours/minutes/seconds/am-pm input field |
| presetControl | .mantine-TimePicker-presetControl | Time preset button |
| presetsGroup | .mantine-TimePicker-presetsGroup | Wraps preset controls and label |
| presetsGroupLabel | .mantine-TimePicker-presetsGroupLabel | Labels of the preset group |
| presetsRoot | .mantine-TimePicker-presetsRoot | Element wrapping all presets content |
| scrollarea | .mantine-TimePicker-scrollarea | Scroll area in the dropdown |

**TimePicker CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| dropdown | --control-font-size | Controls `font-size` of dropdown controls |

### TimeValue

Package: @mantine/dates
Import: import { TimeValue } from '@mantine/dates';
Description: Display a formatted time value

## Usage

Use `TimeValue` component to display time in different formats:

#### Example: usage

```tsx
import { Text } from '@mantine/core';
import { TimeValue } from '@mantine/dates';

function Demo() {
  return (
    <div>
      <Text>
        24h format: <TimeValue value="18:45:34" />
      </Text>
      <Text>
        12h format: <TimeValue value="18:45:34" format="12h" />
      </Text>
    </div>
  );
}
```

## With seconds

Use `withSeconds` prop to display seconds:

#### Example: withSeconds

```tsx
import { Text } from '@mantine/core';
import { TimeValue } from '@mantine/dates';

function Demo() {
  return (
    <div>
      <Text>
        12h format: <TimeValue value="18:45:34" format="12h" withSeconds />
      </Text>
      <Text>
        24h format: <TimeValue value="18:45:34" withSeconds />
      </Text>
    </div>
  );
}
```

## AM/PM labels

Use `amPmLabels` prop to display AM/PM labels:

#### Example: amPmLabels

```tsx
import { Text } from '@mantine/core';
import { TimeValue } from '@mantine/dates';

function Demo() {
  return (
    <div>
      <Text>
        Custom AM/PM labels:{' '}
        <TimeValue value="18:45:34" format="12h" amPmLabels={{ am: 'पूर्वाह्न', pm: 'अपराह्न' }} />
      </Text>
    </div>
  );
}
```

## Date object

You can use `Date` object instead of string as `value`:

#### Example: dateObject

```tsx
import { Text } from '@mantine/core';
import { TimeValue } from '@mantine/dates';

function Demo() {
  return (
    <div>
      <Text>
        24h format: <TimeValue value={new Date(2021, 1, 1, 18, 45, 34)} />
      </Text>
      <Text>
        12h format: <TimeValue format="12h" value={new Date(2021, 1, 1, 18, 45, 34)} />
      </Text>
    </div>
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| amPmLabels | { am: string; pm: string } | - | AM/PM labels |
| format | "12h" | "24h" | - | Time format |
| value | string | Date | required | Time to format |
| withSeconds | boolean | - | Determines whether seconds should be displayed |

### YearPickerInput

Package: @mantine/dates
Import: import { YearPickerInput } from '@mantine/dates';
Description: Inline year, multiple years and years range picker

## YearPicker props

`YearPickerInput` supports most of the [YearPicker](https://mantine.dev/dates/year-picker/) props,
read through [YearPicker](https://mantine.dev/dates/year-picker/) documentation to learn about all component features that are not listed on this page.

## Usage

## Multiple dates

Set `type="multiple"` to allow user to pick multiple dates:

## Dates range

Set `type="range"` to allow user to pick dates range:

## Open picker in modal

By default, [YearPicker](https://mantine.dev/dates/year-picker/) is rendered inside [Popover](https://mantine.dev/core/popover/).
You can change that to [Modal](https://mantine.dev/core/modal/) by setting `dropdownType="modal"`:

## Value format

Use `valueFormat` prop to change [dayjs format](https://day.js.org/docs/en/display/format) of value label:

#### Example: valueFormat

```tsx
import { YearPickerInput } from '@mantine/dates';

function Demo() {
  return (
    <YearPickerInput valueFormat="YY" type="multiple" label="Pick year" placeholder="Pick year" />
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
import { YearPickerInput } from '@mantine/dates';

function Demo() {
  return (
    <YearPickerInput
      valueFormat="YY"
      type="multiple"
      label="Disabled"
      placeholder="Pick year"
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
import { YearPickerInput } from '@mantine/core';

function Demo() {
  const ref = useRef<HTMLButtonElement>(null);
  return <YearPickerInput ref={ref} />;
}
```
