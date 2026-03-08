## Symbols for each item

#### Example: customSymbol

```tsx
import { Rating } from '@mantine/core';
import {
  IconMoodCry,
  IconMoodSad,
  IconMoodSmile,
  IconMoodHappy,
  IconMoodCrazyHappy,
} from '@tabler/icons-react';

const getIconStyle = (color?: string) => ({
  width: 24,
  height: 24,
  color: color ? `var(--mantine-color-${color}-7)` : undefined,
});

const getEmptyIcon = (value: number) => {
  const iconStyle = getIconStyle();

  switch (value) {
    case 1:
      return <IconMoodCry style={iconStyle} />;
    case 2:
      return <IconMoodSad style={iconStyle} />;
    case 3:
      return <IconMoodSmile style={iconStyle} />;
    case 4:
      return <IconMoodHappy style={iconStyle} />;
    case 5:
      return <IconMoodCrazyHappy style={iconStyle} />;
    default:
      return null;
  }
};

const getFullIcon = (value: number) => {
  switch (value) {
    case 1:
      return <IconMoodCry style={getIconStyle('red')} />;
    case 2:
      return <IconMoodSad style={getIconStyle('orange')} />;
    case 3:
      return <IconMoodSmile style={getIconStyle('yellow')} />;
    case 4:
      return <IconMoodHappy style={getIconStyle('lime')} />;
    case 5:
      return <IconMoodCrazyHappy style={getIconStyle('green')} />;
    default:
      return null;
  }
};

function Demo() {
  return <Rating emptySymbol={getEmptyIcon} fullSymbol={getFullIcon} highlightSelectedOnly />;
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| color | MantineColor | - | Key of theme.colors or any CSS color value |
| count | number | - | Number of controls |
| defaultValue | number | - | Uncontrolled component default value |
| emptySymbol | ReactNode | ((value: number) => ReactNode) | - | Icon displayed when the symbol is empty |
| fractions | number | - | Number of fractions each item can be divided into |
| fullSymbol | ReactNode | ((value: number) => ReactNode) | - | Icon displayed when the symbol is full |
| getSymbolLabel | (index: number) => string | - | A function to assign aria-label of the the control at index given in the argument. If not specified, control index is used as aria-label. |
| highlightSelectedOnly | boolean | - | If set, only the selected symbol changes to full symbol when selected |
| name | string | - | name attribute passed down to all inputs. By default, name is generated randomly. |
| onChange | (value: number) => void | - | Called when value changes |
| onHover | (value: number) => void | - | Called when one of the controls is hovered |
| readOnly | boolean | - | If set, the user cannot interact with the component |
| size | number | MantineSize | (string & {}) | - | Controls component size |
| value | number | - | Controlled component value |

#### Styles API

Rating component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Rating selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Rating-root | Root element |
| starSymbol | .mantine-Rating-starSymbol | Default star icon |
| input | .mantine-Rating-input | Item input, hidden by default |
| label | .mantine-Rating-label | Item label, used to display star icon |
| symbolBody | .mantine-Rating-symbolBody | Wrapper around star icon for centering |
| symbolGroup | .mantine-Rating-symbolGroup | Group of symbols, used to display fractions |

**Rating CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --rating-color | Controls filled star icon color |
| root | --rating-size | Controls star icon width and height |

**Rating data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| label | data-read-only | - | - |
| input | data-active | Input value is the same as component value | - |
| starSymbol | data-filled | Associated input value is less or equal to the component value | - |

### RingProgress

Package: @mantine/core
Import: import { RingProgress } from '@mantine/core';
Description: Give user feedback for status of the task with circle diagram

## Usage

Set `sections` prop to an array of:

- `value` – number between 0 and 100 – amount of space filled by segment
- `color` – segment color from theme or any other css color value

#### Example: usage

```tsx
import { RingProgress, Text } from '@mantine/core';

function Demo() {
  return (
    <RingProgress
      label={
        <Text size="xs" ta="center">
          Application data usage
        </Text>
      }
      sections={[
        { value: 40, color: 'cyan' },
        { value: 15, color: 'orange' },
        { value: 15, color: 'grape' },
      ]}
    />
  );
}
```

## Size, thickness & rounded caps

Use `size`, `thickness` & `roundCaps` props to configure RingProgress, size and thickness values:

#### Example: configurator

```tsx
import { RingProgress } from '@mantine/core';

function Demo() {
  return (
    <RingProgress
      
      sections={[
        { value: 40, color: 'cyan' },
        { value: 15, color: 'orange' },
        { value: 15, color: 'grape' },
      ]}
    />
  )
}
```

## Sections tooltips

Add `tooltip` property to section to display floating [Tooltip](https://mantine.dev/core/tooltip/) when user hovers over it:

#### Example: tooltip

```tsx
import { RingProgress, Text } from '@mantine/core';

function Demo() {
  return (
    <RingProgress
      size={170}
      thickness={16}
      label={
        <Text size="xs" ta="center" px="xs" style={{ pointerEvents: 'none' }}>
          Hover sections to see tooltips
        </Text>
      }
      sections={[
        { value: 40, color: 'cyan', tooltip: 'Documents – 40 Gb' },
        { value: 25, color: 'orange', tooltip: 'Apps – 25 Gb' },
        { value: 15, color: 'grape', tooltip: 'Other – 15 Gb' },
      ]}
    />
  );
}
```

## Root color

Use `rootColor` property to change the root color:

#### Example: rootColor

```tsx
import { RingProgress } from '@mantine/core';

function Demo() {
  return <RingProgress sections={[{ value: 40, color: 'yellow' }]} rootColor="red" />;
}
```

## Sections props

You can add any additional props to sections:

#### Example: sectionsProps

```tsx
import { useState } from 'react';
import { RingProgress, Text } from '@mantine/core';

function Demo() {
  const [hovered, setHovered] = useState(-1);
  const reset = () => setHovered(-1);
  return (
    <>
      <RingProgress
        onMouseLeave={() => setHovered(-1)}
        size={140}
        sections={[
          { value: 40, color: 'cyan', onMouseEnter: () => setHovered(0), onMouseLeave: reset },
          { value: 20, color: 'blue', onMouseEnter: () => setHovered(1), onMouseLeave: reset },
          { value: 15, color: 'indigo', onMouseEnter: () => setHovered(2), onMouseLeave: reset },
        ]}
      />
      <Text>Hovered section: {hovered === -1 ? 'none' : hovered}</Text>
    </>
  );
}
```

## Customize label

You can add any React node as label, for example [Text](https://mantine.dev/core/text/) component with some additional styles
or [ThemeIcon](https://mantine.dev/core/theme-icon/):

#### Example: label

```tsx
import { ActionIcon, RingProgress, Text, Center } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <RingProgress
        sections={[{ value: 40, color: 'blue' }]}
        label={
          <Text c="blue" fw={700} ta="center" size="xl">
            40%
          </Text>
        }
      />

      <RingProgress
        sections={[{ value: 100, color: 'teal' }]}
        label={
          <Center>
            <ActionIcon color="teal" variant="light" radius="xl" size="xl">
              <IconCheck size={22} />
            </ActionIcon>
          </Center>
        }
      />
    </>
  );
}
```
