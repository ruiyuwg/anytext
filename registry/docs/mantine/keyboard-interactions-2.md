## Keyboard interactions

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| color | MantineColor | - | Key of theme.colors or any valid CSS color, controls color of track and thumb |
| defaultValue | number | - | Uncontrolled component default value |
| disabled | boolean | - | Disables slider |
| domain | \[number, number] | - | Domain of the slider, defines the full range of possible values |
| hiddenInputProps | React.ComponentPropsWithoutRef<"input"> | - | Props passed down to the hidden input |
| inverted | boolean | - | Determines whether track value representation should be inverted |
| label | ReactNode | ((value: number) => ReactNode) | - | Function to generate label or any react node to render instead, set to null to disable label |
| labelAlwaysOn | boolean | - | Determines whether the label should be visible when the slider is not being dragged or hovered |
| labelTransitionProps | TransitionProps | - | Props passed down to the Transition component |
| marks | { value: number; label?: ReactNode; }\[] | - | Marks displayed on the track |
| max | number | - | Maximum possible value |
| min | number | - | Minimal possible value |
| name | string | - | Hidden input name, use with uncontrolled component |
| onChange | (value: number) => void | - | Called when value changes |
| onChangeEnd | (value: number) => void | - | Called when user stops dragging slider or changes value with arrows |
| precision | number | - | Number of significant digits after the decimal point |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius, numbers are converted to rem |
| restrictToMarks | boolean | - | Determines whether the selection should be only allowed from the given marks array |
| scale | (value: number) => number | - | A transformation function to change the scale of the slider |
| showLabelOnHover | boolean | - | Determines whether the label should be displayed when the slider is hovered |
| size | number | MantineSize | (string & {}) | - | Controls size of the track |
| step | number | - | Number by which value will be incremented/decremented with thumb drag and arrows |
| thumbChildren | React.ReactNode | - | Content rendered inside thumb |
| thumbLabel | string | - | Thumb aria-label |
| thumbProps | React.ComponentPropsWithoutRef<"div"> | - | Props passed down to thumb element |
| thumbSize | string | number | - | Thumb width and height, by default value is computed based on size prop |
| value | number | - | Controlled component value |

#### Styles API

Slider component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Slider selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Slider-root | Root element |
| label | .mantine-Slider-label | Thumb label |
| thumb | .mantine-Slider-thumb | Thumb element |
| trackContainer | .mantine-Slider-trackContainer | Wraps track element |
| track | .mantine-Slider-track | Slider track |
| bar | .mantine-Slider-bar | Track filled part |
| markWrapper | .mantine-Slider-markWrapper | Contains `mark` and `markLabel` elements |
| mark | .mantine-Slider-mark | Mark displayed on track |
| markLabel | .mantine-Slider-markLabel | Label of the associated mark, displayed below track |

**Slider CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --slider-size | Controls track `height` |
| root | --slider-color | Controls filled track, thumb and marks `background` |
| root | --slider-thumb-size | Controls thumb `width` and `height` |
| root | --slider-radius | Controls `border-radius` of track and thumb |

### Space

Package: @mantine/core
Import: import { Space } from '@mantine/core';
Description: Add horizontal or vertical spacing from theme

## Usage

Use `Space` component to add horizontal or vertical spacing between elements:

#### Example: horizontal

```tsx
import { Text, Space } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text>First line</Text>
      <Space />
      <Text>Second line</Text>
    </>
  );
}
```

#### Example: vertical

```tsx
import { Text, Space } from '@mantine/core';

function Demo() {
  return (
    <div style={{ display: 'flex' }}>
      <Text>First line</Text>
      <Space />
      <Text>Second line</Text>
    </div>
  );
}
```

## Where to use

In most cases, you would want to use margin props instead of `Space` when working with Mantine components:

```tsx
import { Space, Text } from '@mantine/core';

// Space is not required as the same can be achieved with `mt` prop
function Demo() {
  return (
    <>
      <Text>First line</Text>
      <Text mt="md">Second line</Text>
    </>
  );
}
```

But when you work with regular HTML elements you do not have access to `theme.spacing` and you may want to use
`Space` component to skip direct theme subscription:

```tsx
import { Space } from '@mantine/core';

// Margin props are not available on div,
// use Space to add spacing from theme
function Demo() {
  return (
    <>
      <div>First line</div>
      <Space h="md" />
      <div>Second line</div>
    </>
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|

### Spoiler

Package: @mantine/core
Import: import { Spoiler } from '@mantine/core';
Description: Hide long sections of content under a spoiler

## Usage

Use `Spoiler` to hide long section of content.
Set `maxHeight` prop to control point at which content will be hidden under spoiler and show/hide control appears.
If the content height is less than `maxHeight`, the spoiler will just render children.

`hideLabel` and `showLabel` props are required – they are used as spoiler toggle button label in corresponding state.

#### Example: usage

```tsx
import { Spoiler } from '@mantine/core';

function Demo() {
  return (
    <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
      {/* Content here */}
    </Spoiler>
  );
}
```

## Control expanded state

To control expanded state use `expanded` and `onExpandedChange` props. Note that
`expanded` prop does not have any effect on spoiler visuals if the content height
is less than given `maxHeight`.

```tsx
import { useState } from 'react';
import { Spoiler } from '@mantine/core';

function Demo() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Spoiler
      showLabel="Show more"
      hideLabel="Hide details"
      expanded={expanded}
      onExpandedChange={setExpanded}
    >
      {/* Spoiler content */}
    </Spoiler>
  );
}
```

## Subscribe to expanded state changes

Use `onExpandedChange` to subscribe to expanded state changes:

```tsx
import { Spoiler } from '@mantine/core';

function Demo() {
  return (
    <Spoiler
      showLabel="Show more"
      hideLabel="Hide details"
      onExpandedChange={(expanded) => console.log(expanded)}
    >
      {/* Spoiler content */}
    </Spoiler>
  );
}
```

## Transition duration

Control transition duration by setting `transitionDuration` prop (transition-duration CSS property in ms).
To disable animations, set `transitionDuration={0}`:

#### Example: transitions

```tsx
import { Spoiler } from '@mantine/core';

function Demo() {
  return (
    <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide" transitionDuration={0}>
      {/* Content here */}
    </Spoiler>
  );
}
```
