## Keyboard interactions

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| color | MantineColor | - | Key of theme.colors or any valid CSS color, controls color of track and thumb |
| defaultValue | RangeSliderValue | - | Uncontrolled component default value |
| disabled | boolean | - | Disables slider |
| domain | \[number, number] | - | Domain of the slider, defines the full range of possible values |
| hiddenInputProps | React.ComponentPropsWithoutRef<"input"> | - | Props passed down to the hidden input |
| inverted | boolean | - | Determines whether track values representation should be inverted |
| label | ReactNode | ((value: number) => ReactNode) | - | Function to generate label or any react node to render instead, set to null to disable label |
| labelAlwaysOn | boolean | - | Determines whether the label should be visible when the slider is not being dragged or hovered |
| labelTransitionProps | TransitionProps | - | Props passed down to the Transition component |
| marks | { value: number; label?: ReactNode; }\[] | - | Marks displayed on the track |
| max | number | - | Maximum possible value |
| maxRange | number | - | Maximum range interval |
| min | number | - | Minimal possible value |
| minRange | number | - | Minimal range interval |
| name | string | - | Hidden input name, use with uncontrolled component |
| onChange | (value: RangeSliderValue) => void | - | Called when value changes |
| onChangeEnd | (value: RangeSliderValue) => void | - | Called when user stops dragging slider or changes value with arrows |
| precision | number | - | Number of significant digits after the decimal point |
| pushOnOverlap | boolean | - | Determines whether the other thumb should be pushed by the current thumb dragging when minRange/maxRange is reached |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius, numbers are converted to rem |
| restrictToMarks | boolean | - | Determines whether the selection should be only allowed from the given marks array |
| scale | (value: number) => number | - | A transformation function to change the scale of the slider |
| showLabelOnHover | boolean | - | Determines whether the label should be displayed when the slider is hovered |
| size | number | MantineSize | (string & {}) | - | Controls size of the track |
| step | number | - | Number by which value will be incremented/decremented with thumb drag and arrows |
| thumbChildren | React.ReactNode | - | Content rendered inside thumb |
| thumbFromLabel | string | - | First thumb aria-label |
| thumbProps | (index: 0 | 1) => Omit\<DetailedHTMLProps\<HTMLAttributes, HTMLDivElement>, "ref"> | - | Props passed down to thumb element based on the thumb index |
| thumbSize | string | number | - | Thumb width and height, by default value is computed based on size prop |
| thumbToLabel | string | - | Second thumb aria-label |
| value | RangeSliderValue | - | Controlled component value |

### Rating

Package: @mantine/core
Import: import { Rating } from '@mantine/core';
Description: Pick and display rating

## Usage

#### Example: configurator

```tsx
import { Rating } from '@mantine/core';

function Demo() {
  return <Rating defaultValue={2} />
}
```

## Controlled

```tsx
import { useState } from 'react';
import { Rating } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(0);
  return <Rating value={value} onChange={setValue} />;
}
```

## Read only

#### Example: readOnly

```tsx
import { Rating } from '@mantine/core';

function Demo() {
  return <Rating value={3.5} fractions={2} readOnly />;
}
```

## Fractions

#### Example: fractions

```tsx
import { Rating, Group, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Group>
        <div>Fractions: 2</div>
        <Rating fractions={2} defaultValue={1.5} />
      </Group>
      <Group>
        <div>Fractions: 3</div>
        <Rating fractions={3} defaultValue={2.33333333} />
      </Group>
      <Group>
        <div>Fractions: 4</div>
        <Rating fractions={4} defaultValue={3.75} />
      </Group>
    </Stack>
  );
}
```

## Custom symbol

#### Example: symbol

```tsx
import { Rating } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';

function Demo() {
  return <Rating emptySymbol={<IconSun size={16} />} fullSymbol={<IconMoon size={16} />} />;
}
```
