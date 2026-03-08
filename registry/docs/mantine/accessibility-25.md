## Accessibility

Set `aria-label` or `label` prop to make the radio accessible:

```tsx
import { Radio } from '@mantine/core';

// Not ok, input is not labeled
function Bad() {
  return <Radio />;
}

// Ok, input is labelled by aria-label
function GoodAriaLabel() {
  return <Radio aria-label="My radio" />;
}

// Ok, input is labelled by label element
function GoodLabel() {
  return <Radio label="My radio" />;
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autoContrast | boolean | - | If set, adjusts text color based on background color for filled variant |
| color | MantineColor | - | Key of theme.colors or any valid CSS color to set input color in checked state |
| description | React.ReactNode | - | Description displayed below the label |
| error | React.ReactNode | - | Error displayed below the label |
| icon | FC | - | A component that replaces default check icon |
| iconColor | MantineColor | - | Key of theme.colors or any valid CSS color to set icon color, by default value depends on theme.autoContrast |
| label | React.ReactNode | - | Content of the label associated with the radio |
| labelPosition | "left" | "right" | - | Position of the label relative to the input |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius, |
| rootRef | ForwardedRef | - | Assigns ref of the root element |
| size | MantineSize | (string & {}) | - | Controls size of the component |
| wrapperProps | Omit\<DetailedHTMLProps\<HTMLAttributes, HTMLDivElement>, "ref"> & DataAttributes | - | Props passed down to the root element |

#### Styles API

Radio component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Radio selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Radio-root | Root element |
| radio | .mantine-Radio-radio | Input element (`input[type="radio"]`) |
| icon | .mantine-Radio-icon | Radio icon, used to display checked icon |
| inner | .mantine-Radio-inner | Wrapper for `icon` and `input` |
| body | .mantine-Radio-body | Input body, contains all other elements |
| labelWrapper | .mantine-Radio-labelWrapper | Contains `label`, `description` and `error` |
| label | .mantine-Radio-label | Label element |
| description | .mantine-Radio-description | Description displayed below the label |
| error | .mantine-Radio-error | Error message displayed below the label |

**Radio CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --radio-color | Controls checked radio `background-color` |
| root | --radio-radius | Controls radio `border-radius` |
| root | --radio-size | Controls radio `width` and `height` |
| root | --radio-icon-color | Controls radio icon `color` |
| root | --radio-icon-size | Controls radio icon `width` and `height` |

**Radio data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| radio | data-error | - | - |
| inner | data-label-position | - | Value of  |

**Radio.Group selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-RadioGroup-root | Root element |
| label | .mantine-RadioGroup-label | Label element |
| required | .mantine-RadioGroup-required | Required asterisk element, rendered inside label |
| description | .mantine-RadioGroup-description | Description element |
| error | .mantine-RadioGroup-error | Error element |

**Radio.Indicator selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| indicator | .mantine-RadioIndicator-indicator | Root element |
| icon | .mantine-RadioIndicator-icon | Radio icon |

**Radio.Indicator CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| indicator | --radio-color | Controls checked radio `background-color` |
| indicator | --radio-radius | Controls radio `border-radius` |
| indicator | --radio-size | Controls radio `width` and `height` |
| indicator | --radio-icon-color | Controls radio icon `color` |
| indicator | --radio-icon-size | Controls radio icon `width` and `height` |

**Radio.Indicator data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| indicator | data-checked | - | - |
| indicator | data-disabled | - | - |

**Radio.Card selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| card | .mantine-RadioCard-card | Root element |

**Radio.Card CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| card | --card-radius | Controls card `border-radius` |

**Radio.Card data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| card | data-checked | - | - |
| card | data-with-border | - | - |

### RangeSlider

Package: @mantine/core
Import: import { RangeSlider } from '@mantine/core';
Description: RangeSlider component

## Usage

#### Example: configurator

```tsx
import { RangeSlider } from '@mantine/core';


function Demo() {
  return (
    <RangeSlider
      
      defaultValue={[20, 60]}
      marks={[
        { value: 20, label: '20%' },
        { value: 50, label: '50%' },
        { value: 80, label: '80%' },
      ]}
    />
  );
}
```

## Controlled

```tsx
import { useState } from 'react';
import { RangeSlider } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<[number, number]>([20, 80]);
  return <RangeSlider value={value} onChange={setValue} />;
}
```

## Disabled

#### Example: disabled

```tsx
import { RangeSlider } from '@mantine/core';

function Demo() {
  return <RangeSlider defaultValue={[20, 60]} disabled />;
}
```

## Control label

To change label behavior and appearance, set the following props:

- `label` – formatter function, accepts value as an argument, set null to disable label, defaults to `f => f`
- `labelAlwaysOn` – if true – label will always be displayed, by default label is visible only when user is dragging
- `labelTransitionProps` – props passed down to the [Transition](https://mantine.dev/core/transition) component, can be used to customize label animation

#### Example: label

```tsx
import { RangeSlider, Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text size="sm">No label</Text>
      <RangeSlider defaultValue={[20, 60]} label={null} />

      <Text size="sm" mt="xl">Formatted label</Text>
      <RangeSlider defaultValue={[20, 60]} label={(value) => `${value} °C`} />

      <Text size="sm" mt="xl">Label always visible</Text>
      <RangeSlider defaultValue={[20, 60]} labelAlwaysOn />

      <Text size="sm" mt="xl">Custom label transition</Text>
      <RangeSlider
        defaultValue={40}
        labelTransitionProps={{
          transition: 'skew-down',
          duration: 150,
          timingFunction: 'linear',
        }}
      />
    </>
  );
}
```

## Min, max and step

#### Example: step

```tsx
import { RangeSlider, Text } from '@mantine/core';

const marks = [{ value: 0 }, { value: 25 }, { value: 50 }, { value: 75 }, { value: 100 }];

function Demo() {
  return (
    <>
      <Text>Decimal step</Text>
      <RangeSlider minRange={2} defaultValue={[0, 10]} min={-10} max={10} step={0.1} />

      <Text mt="md">Step matched with marks</Text>
      <RangeSlider defaultValue={[50, 75]} step={25} marks={marks} />
    </>
  );
}
```

## Domain

By default, `min` and `max` values define the possible range of values.
`domain` prop allows setting the possible range of values independently of the
`min` and `max` values:

#### Example: domain

```tsx
import { RangeSlider } from '@mantine/core';

function Demo() {
  return (
    <RangeSlider
      domain={[0, 100]}
      min={10}
      max={90}
      defaultValue={[25, 75]}
      marks={[
        { value: 10, label: 'min' },
        { value: 90, label: 'max' },
      ]}
    />
  );
}
```

## Decimal values

To use `RangeSlider` with decimal values, set `min`, `max` and `step` props:

#### Example: decimal

```tsx
import { RangeSlider } from '@mantine/core';

function Demo() {
  return <RangeSlider min={0} max={1} minRange={0.2} step={0.0005} defaultValue={[0.2, 0.8]} />;
}
```

## minRange

Use `minRange` prop to control minimum range between `from` and `to` values
in `RangeSlider`. The default value is `10`. The example below shows how to
use `minRange` prop to capture decimal values from the user:

#### Example: decimal

```tsx
import { RangeSlider } from '@mantine/core';

function Demo() {
  return <RangeSlider min={0} max={1} minRange={0.2} step={0.0005} defaultValue={[0.2, 0.8]} />;
}
```

## pushOnOverlap

`pushOnOverlap` prop controls whether the thumbs should push each other when they overlap.
By default, `pushOnOverlap` is `true`, if you want to disable this behavior, set it to `false`.

Example of `pushOnOverlap={false}`:

#### Example: pushOnOverlap

```tsx
import { RangeSlider } from '@mantine/core';

function Demo() {
  return <RangeSlider pushOnOverlap={false} defaultValue={[25, 65]} minRange={20} />;
}
```

## Marks

Add any number of marks to slider by setting `marks` prop to an array of objects:

```tsx
const marks = [
  { value: 20 }, // -> displays mark on slider track
  { value: 40, label: '40%' }, // -> adds mark label below slider track
];
```

Note that mark value is relative to slider value, not width:

#### Example: marks

```tsx
import { RangeSlider } from '@mantine/core';

function Demo() {
  return (
    <>
      <RangeSlider
        defaultValue={[20, 60]}
        marks={[{ value: 10 }, { value: 40 }, { value: 95 }]}
        mb={32}
      />

      <RangeSlider
        mb={32}
        defaultValue={[20, 60]}
        marks={[
          { value: 20, label: '20%' },
          { value: 50, label: '50%' },
          { value: 80, label: '80%' },
        ]}
      />
    </>
  );
}
```

## Restrict selection to marks

Set `restrictToMarks` prop to restrict slider value to marks only. Note that in
this case `step` prop is ignored:

#### Example: restrictToMarks

```tsx
import { RangeSlider } from '@mantine/core';

function Demo() {
  return (
    <RangeSlider
      restrictToMarks
      defaultValue={[5, 15]}
      marks={[
        { value: 5 },
        { value: 15 },
        { value: 25 },
        { value: 35 },
        { value: 70 },
        { value: 80 },
        { value: 90 },
      ]}
    />
  );
}
```

## Inverted

You can invert the track with the `inverted` prop:

#### Example: inverted

```tsx
import { RangeSlider } from '@mantine/core';

function Demo() {
  return <RangeSlider inverted defaultValue={[20, 60]} />;
}
```

## Accessibility

`RangeSlider` component is accessible by default:

- Thumbs are focusable
- When the user uses mouse to interact with the slider, focus is moved to the slider track, when the user presses arrows focus is moved to the thumb
- Value can be changed with arrows with step increment/decrement

To label component for screen readers, add labels to thumbs:

```tsx
import { RangeSlider } from '@mantine/core';

function Demo() {
  return (
    <RangeSlider
      thumbFromLabel="First thumb aria-label"
      thumbToLabel="Second thumb aria-label"
    />
  );
}
```
