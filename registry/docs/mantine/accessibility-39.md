## Accessibility

TimeInput provides better accessibility support when used in forms. Make sure to associate the input with a label for better screen reader support.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| description | React.ReactNode | - | Contents of Input.Description component. If not set, description is not displayed. |
| descriptionProps | InputDescriptionProps & DataAttributes | - | Props passed down to the Input.Description component |
| disabled | boolean | - | Sets disabled attribute on the input element |
| error | React.ReactNode | - | Contents of Input.Error component. If not set, error is not displayed. |
| errorProps | InputErrorProps & DataAttributes | - | Props passed down to the Input.Error component |
| inputContainer | (children: ReactNode) => ReactNode | - | Input container component |
| inputSize | string | - | size attribute passed down to the input element |
| inputWrapperOrder | ("input" | "label" | "description" | "error")\[] | - | Controls order of the elements |
| label | React.ReactNode | - | Contents of Input.Label component. If not set, label is not displayed. |
| labelProps | InputLabelProps & DataAttributes | - | Props passed down to the Input.Label component |
| leftSection | React.ReactNode | - | Content section displayed on the left side of the input |
| leftSectionPointerEvents | React.CSSProperties\["pointerEvents"] | - | Sets pointer-events styles on the leftSection element |
| leftSectionProps | React.ComponentPropsWithoutRef<"div"> | - | Props passed down to the leftSection element |
| leftSectionWidth | React.CSSProperties\["width"] | - | Left section width, used to set width of the section and input padding-left, by default equals to the input height |
| maxTime | string | - | Maximum possible string time, if withSeconds is true, time should be in format HH:mm:ss, otherwise HH:mm |
| minTime | string | - | Minimum possible string time, if withSeconds is true, time should be in format HH:mm:ss, otherwise HH:mm |
| pointer | boolean | - | Determines whether the input should have cursor: pointer style |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius, numbers are converted to rem |
| required | boolean | - | Adds required attribute to the input and a red asterisk on the right side of label |
| rightSection | React.ReactNode | - | Content section displayed on the right side of the input |
| rightSectionPointerEvents | React.CSSProperties\["pointerEvents"] | - | Sets pointer-events styles on the rightSection element |
| rightSectionProps | React.ComponentPropsWithoutRef<"div"> | - | Props passed down to the rightSection element |
| rightSectionWidth | React.CSSProperties\["width"] | - | Right section width, used to set width of the section and input padding-right, by default equals to the input height |
| size | MantineSize | (string & {}) | - | Controls input height and horizontal padding |
| withAsterisk | boolean | - | If set, the required asterisk is displayed next to the label. Overrides required prop. Does not add required attribute to the input. |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the error prop is set |
| withSeconds | boolean | - | Determines whether seconds input should be displayed |
| wrapperProps | WrapperProps | - | Props passed down to the root element |

### TimePicker

Package: @mantine/dates
Import: import { TimePicker } from '@mantine/dates';
Description: Captures time value from the user

## Usage

`TimePicker` component is an alternative to [TimeInput](https://mantine.dev/dates/time-input) that offers more
features, it supports 24-hour and 12-hour formats, dropdown with hours, minutes and seconds, and
more.

#### Example: usage

```tsx
import { TimePicker } from '@mantine/dates';

function Demo() {
  return <TimePicker label="Enter time" />;
}
```

## Controlled

`TimePicker` component value is a string in `hh:mm:ss` or `hh:mm` 24-hour format (for example `18:34:55`, `18:34`).
Empty string is used to represent no value. `onChange` function is called only when the entered value is valid.
The input value is considered valid in the following cases:

- All inputs are empty. In this case `onChange` is called with an empty string.
- All inputs are filled. For example if `withSeconds` prop is set and the user entered `12:34:56`, `onChange` will be called with `12:34:56`. But if the user entered `12:34`, `onChange` will not be called because seconds value is missing.

```tsx
import { useState } from 'react';
import { TimePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState('');
  return <TimePicker value={value} onChange={setValue} />;
}
```

## With seconds

Set `withSeconds` prop to enable seconds input. Note that if this prop is used,
`onChange` is not called until all inputs are filled – it is not possible
to enter only hours and minutes.

#### Example: withSeconds

```tsx
import { TimePicker } from '@mantine/dates';

function Demo() {
  return <TimePicker label="Enter time" withSeconds />;
}
```

## 12-hour format

Set `format="12h"` to use 12-hour format. Note that `onChange` is called only when all inputs are filled
including am/pm input.

#### Example: format12h

```tsx
import { TimePicker } from '@mantine/dates';

function Demo() {
  return <TimePicker label="Enter time" format="12h" />;
}
```

## Change am/pm labels

To change am/pm labels use `amPmLabels` prop. Example of changing labels to Hindi:

#### Example: amPmLabels

```tsx
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker label="Enter time" format="12h" amPmLabels={{ am: 'पूर्वाह्न', pm: 'अपराह्न' }} />
  );
}
```

## Min and max values

Set `min` and `max` props to limit available time range:

#### Example: minMax

```tsx
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <>
      <TimePicker label="Enter time (24h format)" min="10:00" max="18:30" />
      <TimePicker label="Enter time (12h format)" min="10:00" max="18:30" format="12h" mt="md" />
    </>
  );
}
```

## With dropdown

Set `withDropdown` prop to display the dropdown with hours, minutes, seconds and am/pm selects.
By default, the dropdown is visible when one of the inputs is focused.

#### Example: withDropdown

```tsx
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <>
      <TimePicker label="Enter time (24h format)" withSeconds withDropdown />
      <TimePicker label="Enter time (12h format)" withSeconds withDropdown format="12h" mt="md" />
    </>
  );
}
```

## Hours/minutes/seconds step

Use `hoursStep`, `minutesStep` and `secondsStep` props to control step for each input.
These props are used to control value by which the input is incremented or decremented when
up/down arrow keys are pressed and to generate corresponding values range in the dropdown.

#### Example: steps

```tsx
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker
      label="Enter time"
      withSeconds
      withDropdown
      hoursStep={1}
      minutesStep={5}
      secondsStep={10}
    />
  );
}
```

## Control dropdown opened state

Use `popoverProps` to pass props down to the underlying [Popover](https://mantine.dev/core/popover) component:

#### Example: controlledDropdown

```tsx
import { useState } from 'react';
import { IconClock } from '@tabler/icons-react';
import { ActionIcon } from '@mantine/core';
import { TimePicker } from '@mantine/dates';

function Demo() {
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const [value, setValue] = useState('');

  return (
    <TimePicker
      withDropdown
      rightSection={
        <ActionIcon onClick={() => setDropdownOpened(true)} variant="default">
          <IconClock size={18} stroke={1.5} />
        </ActionIcon>
      }
      value={value}
      onChange={(val) => {
        setValue(val);
        if (value === '') {
          setDropdownOpened(false);
        }
      }}
      popoverProps={{
        opened: dropdownOpened,
        onChange: (_opened) => !_opened && setDropdownOpened(false),
      }}
    />
  );
}
```

## Time presets

You can define time presets with `presets` prop. Presets are displayed in the dropdown and can be selected by clicking on them.
Time values for presets should be in `hh:mm:ss` or `hh:mm` 24-hour time format. Presets
display value is generated based on `format`, `amPmLabels` and `withSeconds` props.

#### Example: presets

```tsx
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker
      label="Enter time"
      withDropdown
      presets={['12:30', '15:45', '18:00', '20:15', '22:30']}
    />
  );
}
```

## Time presets groups

To group presets use an array of objects with `label` and `values` keys:

#### Example: presetsGroups

```tsx
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker
      label="Enter time"
      withDropdown
      maxDropdownContentHeight={300}
      presets={[
        { label: 'Morning', values: ['06:00:00', '08:00:00', '10:00:00'] },
        { label: 'Afternoon', values: ['12:00:00', '14:00:00', '16:00:00'] },
        { label: 'Evening', values: ['18:00:00', '20:00:00', '22:00:00'] },
      ]}
    />
  );
}
```

## Time presets range

If you need to generate a range of time values, use `getTimeRange` function exported from
`@mantine/dates` package. The function accepts start, end time and interval in `hh:mm:ss` format.

#### Example: presetsRange

```tsx
import { getTimeRange, TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker
      label="Enter time"
      withDropdown
      presets={getTimeRange({ startTime: '06:00:00', endTime: '18:00:00', interval: '01:30:00' })}
    />
  );
}
```

## Dropdown position

By default, the dropdown is displayed below the input if there is enough space; otherwise it is displayed above the input.
You can change this behavior by setting `position` and `middlewares` props, which are passed down to the
underlying [Popover](https://mantine.dev/core/popover) component.

Example of dropdown that is always displayed above the input:

#### Example: dropdownPosition

```tsx
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker
      label="Enter time"
      withDropdown
      popoverProps={{
        position: 'top-start',
        middlewares: { flip: false, shift: false },
      }}
    />
  );
}
```

## Dropdown width

To change dropdown width, set `width` prop in `comboboxProps`. By default,
dropdown width is adjusted to fit all content. Example of dropdown width set
to the input width:

#### Example: dropdownWidth

```tsx
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker
      label="Enter time"
      withDropdown
      withSeconds
      format="12h"
      popoverProps={{
        width: 'target',
      }}
    />
  );
}
```

## Paste events

By default, `TimePicker` handles only time in 24-hour format (for example `17:33:43` or `19:22`) for paste events.
With `pasteSplit` prop you can create a custom paste time parser:

#### Example: pasteSplit

```tsx
import { Code, Text } from '@mantine/core';
import { TimePicker, TimePickerPasteSplit } from '@mantine/dates';

const re = /^(1[0-2]|0?[1-9]):[0-5][0-9](?::[0-5][0-9])?\\s?(AM|PM)$/;

const customPasteSplit: TimePickerPasteSplit = ({ time }) => {
  if (!re.test(time)) {
    return { hours: null, minutes: null, seconds: null, amPm: null };
  }

  const [hours, minutes, second] = time.split(':').map((part) => part.replace(/AM|PM/g, ''));
  const isPm = time.toLowerCase().includes('pm');

  return {
    hours: typeof hours === 'string' ? Number(hours) : null,
    minutes: typeof minutes === 'string' ? Number(minutes) : null,
    seconds: typeof second === 'string' ? Number(second) : 0,
    amPm: isPm ? 'PM' : 'AM',
  };
};

function Demo() {
  return (
    <div>
      <TimePicker label="Paste time here" format="12h" withSeconds pasteSplit={customPasteSplit} />
      <Text mt="md">
        Try pasting time in 12h format in any input. For example, try pasting <Code>12:34 PM</Code>{' '}
        or <Code>8:56:45 AM</Code>
      </Text>
    </div>
  );
}
```

## Clearable

Set `clearable` prop to display a clear button in the right section of the input.
The clear button is visible when at least one of the fields has value.

#### Example: clearable

```tsx
import { TimePicker } from '@mantine/dates';

function Demo() {
  return <TimePicker label="Enter time" clearable defaultValue="12:34:44" />;
}
```

## Disabled

#### Example: disabled

```tsx
import { TimePicker } from '@mantine/dates';

function Demo() {
  return <TimePicker label="Enter time" disabled />;
}
```

## Read only

#### Example: readOnly

```tsx
import { TimePicker } from '@mantine/dates';

function Demo() {
  return <TimePicker label="Enter time" defaultValue="12:45:33" readOnly />;
}
```

## Input props

TimePicker component supports [Input](https://mantine.dev/core/input) and [Input.Wrapper](https://mantine.dev/core/input) components features and all div element props. TimePicker documentation does not include all features supported by the component – see [Input](https://mantine.dev/core/input) documentation to learn about all available features.

#### Example: configurator

```tsx
import { TimePicker } from '@mantine/dates';


function Demo() {
  return (
    <TimePicker
      withDropdown
      
    />
  );
}
```

## Get refs of inner inputs

Use `hoursRef`, `minutesRef`, `secondsRef` and `amPmRef` props to get refs of inner inputs:

```tsx
import { useRef } from 'react';
import { TimePicker } from '@mantine/dates';

function Demo() {
  const hoursRef = useRef<HTMLInputElement>(null);
  const minutesRef = useRef<HTMLInputElement>(null);
  const secondsRef = useRef<HTMLInputElement>(null);
  const amPmRef = useRef<HTMLSelectElement>(null);

  return (
    <TimePicker
      hoursRef={hoursRef}
      minutesRef={minutesRef}
      secondsRef={secondsRef}
      amPmRef={amPmRef}
    />
  );
}
```

## onFocus and onBlur events

`onFocus` and `onBlur` events are called when the first input is focused and the last input is blurred:

```tsx
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker
      onFocus={() => console.log('Focused')}
      onBlur={() => console.log('Blurred')}
    />
  );
}
```
