## With content

If you want to indicate the loading state of content that is already on page, wrap it with Skeleton
and control loading overlay visibility with `visible` prop:

#### Example: content

```tsx
import { useState } from 'react';
import { Skeleton, Button } from '@mantine/core';

function Demo() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Skeleton visible={loading}>
        Lorem ipsum dolor sit amet...
        {/* other content */}
      </Skeleton>

      <Button onClick={() => setLoading((l) => !l)}>
        Toggle Skeleton
      </Button>
    </>
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| animate | boolean | - | Enables animation |
| circle | boolean | - | If set, Skeleton width and border-radius are equal to its height |
| height | Height | - | Skeleton height, numbers are converted to rem |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius. Numbers are converted to rem. |
| visible | boolean | - | Determines whether Skeleton overlay should be displayed |
| width | React.CSSProperties\["width"] | - | Skeleton width, numbers are converted to rem, ignored when circle prop is set. |

#### Styles API

Skeleton component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Skeleton selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Skeleton-root | Root element |

**Skeleton CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --skeleton-height | Controls skeleton `height` |
| root | --skeleton-width | Controls skeleton `width` |
| root | --skeleton-radius | Controls skeleton `border-radius` |

**Skeleton data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-visible | - | - |
| root | data-animate | - | - |

### Slider

Package: @mantine/core
Import: import { Slider } from '@mantine/core';
Description: Slider component

## Usage

#### Example: configurator

```tsx
import { Slider } from '@mantine/core';


function Demo() {
  return (
    <Slider
      
      defaultValue={40}
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
import { Slider } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(40);
  return <Slider value={value} onChange={setValue} />;
}
```

## Disabled

#### Example: disabled

```tsx
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider defaultValue={60} disabled />;
}
```

## onChangeEnd

`onChangeEnd` callback is called when user the slider is stopped from being dragged or value is changed with keyboard.
You can use it as a debounced callback to avoid too frequent updates.

#### Example: changeEnd

```tsx
import { useState } from 'react';
import { Slider, Text, Box } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(50);
  const [endValue, setEndValue] = useState(50);

  return (
    <Box maw={400} mx="auto">
      <Slider value={value} onChange={setValue} onChangeEnd={setEndValue} />

      <Text mt="md" size="sm">
        onChange value: <b>{value}</b>
      </Text>
      <Text mt={5} size="sm">
        onChangeEnd value: <b>{endValue}</b>
      </Text>
    </Box>
  );
}
```

## Control label

To change label behavior and appearance, set the following props:

- `label` – formatter function, accepts value as an argument, set null to disable label, defaults to `f => f`
- `labelAlwaysOn` – if true – label will always be displayed, by default label is visible only when user is dragging
- `labelTransitionProps` – props passed down to the [Transition](https://mantine.dev/core/transition) component, can be used to customize label animation

#### Example: label

```tsx
import { Slider, Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text size="sm">No label</Text>
      <Slider defaultValue={40} label={null} />

      <Text size="sm" mt="xl">Formatted label</Text>
      <Slider defaultValue={40} label={(value) => `${value} °C`} />

      <Text size="sm" mt="xl">Label always visible</Text>
      <Slider defaultValue={40} labelAlwaysOn />

      <Text size="sm" mt="xl">Custom label transition</Text>
      <Slider
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
import { Slider, Text } from '@mantine/core';

const marks = [
  { value: 0, label: 'xs' },
  { value: 25, label: 'sm' },
  { value: 50, label: 'md' },
  { value: 75, label: 'lg' },
  { value: 100, label: 'xl' },
];

function Demo() {
  return (
    <>
      <Text>Decimal step</Text>
      <Slider
        defaultValue={0}
        min={-10}
        max={10}
        label={(value) => value.toFixed(1)}
        step={0.1}
        styles={{ markLabel: { display: 'none' } }}
      />

      <Text mt="md">Step matched with marks</Text>
      <Slider
        defaultValue={50}
        label={(val) => marks.find((mark) => mark.value === val)!.label}
        step={25}
        marks={marks}
        styles={{ markLabel: { display: 'none' } }}
      />
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
import { Slider } from '@mantine/core';

function Demo() {
  return (
    <Slider
      domain={[0, 100]}
      min={10}
      max={90}
      defaultValue={25}
      marks={[
        { value: 10, label: 'min' },
        { value: 90, label: 'max' },
      ]}
    />
  );
}
```

## Decimal values

To use `Slider` with decimal values, set `min`, `max` and `step` props:

#### Example: decimal

```tsx
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider min={0} max={1} step={0.0005} defaultValue={0.5535} />;
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
import { Slider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Slider defaultValue={40} marks={[{ value: 10 }, { value: 40 }, { value: 95 }]} mb={32} />
      <Slider
        mb={32}
        defaultValue={40}
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
import { RangeSlider, Slider, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Slider
        restrictToMarks
        defaultValue={25}
        marks={Array.from({ length: 5 }).map((_, index) => ({ value: index * 25 }))}
      />

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
    </Stack>
  );
}
```

## Thumb size

#### Example: thumbSize

```tsx
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider defaultValue={20} />;
}
```

## Thumb children

#### Example: thumbChildren

```tsx
import { Slider, RangeSlider } from '@mantine/core';
import { IconHeart, IconHeartBroken } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <Slider
        thumbChildren={<IconHeart size={16} />}
        color="red"
        label={null}
        defaultValue={40}
        thumbSize={26}
        styles={{ thumb: { borderWidth: 2, padding: 3 } }}
      />

      <RangeSlider
        mt="xl"
        styles={{ thumb: { borderWidth: 2, padding: 3 } }}
        color="red"
        label={null}
        defaultValue={[20, 60]}
        thumbSize={26}
        thumbChildren={[<IconHeart size={16} key="1" />, <IconHeartBroken size={16} key="2" />]}
      />
    </>
  );
}
```

## Scale

You can use the `scale` prop to represent the value on a different scale.

In the following demo, the value `x` represents the value `2^x`. Increasing `x` by one increases the represented value by 2 to the power of `x`.

#### Example: scale

```tsx
import { RangeSlider, Slider } from '@mantine/core';

function valueLabelFormat(value: number) {
  const units = ['KB', 'MB', 'GB', 'TB'];

  let unitIndex = 0;
  let scaledValue = value;

  while (scaledValue >= 1024 && unitIndex < units.length - 1) {
    unitIndex += 1;
    scaledValue /= 1024;
  }

  return `${scaledValue} ${units[unitIndex]}`;
}

const getScale = (v: number) => 2 ** v;

function Demo() {
  return (
    <>
      <Slider
        scale={getScale}
        step={1}
        min={2}
        max={30}
        labelAlwaysOn
        defaultValue={10}
        label={valueLabelFormat}
      />
      <RangeSlider
        mt={50}
        scale={getScale}
        step={1}
        min={2}
        max={30}
        labelAlwaysOn
        defaultValue={[10, 20]}
        label={valueLabelFormat}
      />
    </>
  );
}
```

## Inverted

You can invert the track with the `inverted` prop:

#### Example: inverted

```tsx
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider inverted defaultValue={80} />;
}
```

#### Example: stylesApi

```tsx
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider marks={[{ value: 20, label: '20%' }, { value: 80, label: '80%' }]} labelAlwaysOn />;
}
```

Example of using [Styles API](https://mantine.dev/styles/styles-api/) to change `Slider` styles:

#### Example: customize

```tsx
// Demo.tsx
import { Slider } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Slider
      defaultValue={40}
      size={2}
      classNames={classes}
      marks={[
        { value: 20, label: '20%' },
        { value: 50, label: '50%' },
        { value: 80, label: '80%' },
      ]}
    />
  );
}

// Demo.module.css
.track {
  &::before {
    background-color: light-dark(var(--mantine-color-blue-1), var(--mantine-color-dark-3));
  }
}

.mark {
  width: 6px;
  height: 6px;
  border-radius: 6px;
  transform: translateX(-3px) translateY(-2px);
  border-color: light-dark(var(--mantine-color-blue-1), var(--mantine-color-dark-3));

  &[data-filled] {
    border-color: var(--mantine-color-blue-6);
  }
}

.markLabel {
  font-size: var(--mantine-font-size-xs);
  margin-bottom: 5px;
  margin-top: 0;
}

.thumb {
  height: 16px;
  width: 16px;
  background-color: var(--mantine-color-white);
  border-width: 1px;
  box-shadow: var(--mantine-shadow-sm);
}
```

## Vertical slider

`Slider` does not provide vertical orientation as it is very rarely used.
If you need this feature you can build it yourself with [use-move](https://mantine.dev/hooks/use-move/) hook.
