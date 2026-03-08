## Disabled

Set `disabled` prop to disable all controls:

#### Example: disabled

```tsx
import { getTimeRange, TimeGrid } from '@mantine/dates';

function Demo() {
  return (
    <TimeGrid
      data={getTimeRange({ startTime: '09:00', endTime: '22:00', interval: '01:00' })}
      disabled
    />
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| allowDeselect | boolean | - | Determines whether the value can be deselected when the current active option is clicked or activated with keyboard |
| amPmLabels | { am: string; pm: string } | - | Labels used for am/pm values |
| data | string\[] | required | Time data in 24h format to be displayed in the grid, for example \['10:00', '18:30', '22:00']. Time values must be unique. |
| defaultValue | string | null | - | Uncontrolled component default value |
| disableTime | string\[] | ((time: string) => boolean) | - | Array of time values to disable |
| disabled | boolean | - | If set, all controls are disabled |
| format | "12h" | "24h" | - | Time format displayed in the grid |
| getControlProps | (time: string) => React.ComponentPropsWithoutRef<"button"> | - | A function to pass props down to control based on the time value |
| maxTime | string | - | All controls after this time are disabled |
| minTime | string | - | All controls before this time are disabled |
| onChange | (value: string | null) => void | - | Called when value changes |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius |
| simpleGridProps | SimpleGridProps | - | Props passed down to the underlying SimpleGrid component |
| size | MantineSize | - | Control font-size of controls, key of theme.fontSizes or any valid CSS value |
| value | string | null | - | Controlled component value |
| withSeconds | boolean | - | Determines whether the seconds part should be displayed |

#### Styles API

TimeGrid component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**TimeGrid selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-TimeGrid-root | Root element |
| control | .mantine-TimeGrid-control | Time grid control |
| simpleGrid | .mantine-TimeGrid-simpleGrid | SimpleGrid component root |

**TimeGrid CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --time-grid-fz | Controls `font-size` property of all controls |
| root | --time-grid-radius | Controls `border-radius` property of all controls |

**TimeGrid data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| control | data-active | Current component value is the same as control value | - |
| control | data-disabled | Component is disabled by one of the props:  | - |

### TimeInput

Package: @mantine/dates
Import: import { TimeInput } from '@mantine/dates';
Description: Capture time from the user

## Usage

TimeInput component supports [Input](https://mantine.dev/core/input) and [Input.Wrapper](https://mantine.dev/core/input) components features and all input element props. TimeInput documentation does not include all features supported by the component – see [Input](https://mantine.dev/core/input) documentation to learn about all available features.

#### Example: configurator

```tsx
import { TimeInput } from '@mantine/dates';


function Demo() {
  return (
    <TimeInput
      
    />
  );
}
```

## TimePicker component

`TimeInput` component is based on the native `input[type="time"]` element and does not support
most of advanced features like choosing time format or custom dropdown with time select. If you need
more features, use [TimePicker](https://mantine.dev/dates/time-picker) component instead.

`TimeInput` features/limitations:

- Native `input[type="time"]` element
- Native browser controls for time selection on mobile devices
- Time format depends on the user's locale
- Only native dropdown with hours/minutes/seconds, does not work in Firefox
- Mobile Safari does not provide an option to select seconds

## Controlled

```tsx
import { useState } from 'react';
import { TimeInput } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState('');
  return (
    <TimeInput
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
    />
  );
}
```

## Show browser picker

You can show browser picker by calling `showPicker` method of input element.
Note that some browsers (desktop Safari) do not support this feature and the
method will do nothing.

#### Example: picker

```tsx
import { useRef } from 'react';
import { ActionIcon } from '@mantine/core';
import { TimeInput } from '@mantine/dates';
import { IconClock } from '@tabler/icons-react';

function Demo() {
  const ref = useRef<HTMLInputElement>(null);

  const pickerControl = (
    <ActionIcon variant="subtle" color="gray" onClick={() => ref.current?.showPicker()}>
      <IconClock size={16} stroke={1.5} />
    </ActionIcon>
  );

  return (
    <TimeInput label="Click icon to show browser picker" ref={ref} rightSection={pickerControl} />
  );
}
```

## With seconds

#### Example: withSeconds

```tsx
import { TimeInput } from '@mantine/dates';

function Demo() {
  return <TimeInput withSeconds />;
}
```

## With icon

#### Example: icon

```tsx
import { IconClock } from '@tabler/icons-react';
import { TimeInput } from '@mantine/dates';

function Demo() {
  return <TimeInput leftSection={<IconClock size={16} stroke={1.5} />} />;
}
```

## Disabled state

#### Example: disabled

```tsx
import { TimeInput } from '@mantine/dates';

function Demo() {
  return <TimeInput disabled />;
}
```

## Get element ref

```tsx
import { useRef } from 'react';
import { TimeInput } from '@mantine/core';

function Demo() {
  const ref = useRef<HTMLInputElement>(null);
  return <TimeInput ref={ref} />;
}
```
