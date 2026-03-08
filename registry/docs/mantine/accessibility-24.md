## Accessibility

- Progress section has `role="progressbar"` attribute
- Progress section has `aria-valuenow` attribute with current value
- `aria-valuemin` and `aria-valuemax` attributes are always set to `0` and `100` as component does not support other values

Set `aria-label` attribute to label progress:

```tsx
import { Progress } from '@mantine/core';

function Demo() {
  return <Progress aria-label="Uploading progress" value={10} />;
}

function DemoCompound() {
  return (
    <Progress.Root>
      <Progress.Section aria-label="Uploading progress" value={10} />
    </Progress.Root>
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| animated | boolean | - | If set, the sections stripes are animated, striped prop is ignored |
| autoContrast | boolean | - | If set, adjusts text color based on background color for filled variant |
| color | MantineColor | - | Key of theme.colors or any valid CSS value |
| orientation | "horizontal" | "vertical" | - | Controls orientation |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius |
| size | number | MantineSize | (string & {}) | - | Controls track height |
| striped | boolean | - | If set, the section has stripes |
| transitionDuration | number | - | Controls sections width transition duration, value is specified in ms |
| value | number | required | Value of the progress |

#### Styles API

Progress component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Progress selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Progress-root | Root element |
| section | .mantine-Progress-section | `Progress.Section` root element |
| label | .mantine-Progress-label | `Progress.Label` root element |

**Progress CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --progress-radius | Controls `border-radius` of track and sections |
| root | --progress-size | Controls height of progress bar |
| root | --progress-transition-duration | Controls width `transition-duration` of progress bar |

**Progress data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| section | data-striped | - | - |
| section | data-animated | - | - |

### Radio

Package: @mantine/core
Import: import { Radio } from '@mantine/core';
Description: Wrapper for input type radio

## Usage

#### Example: configurator

```tsx
import { Radio } from '@mantine/core';


function Demo() {
  return (
    <Radio
      
    />
  );
}
```

## Controlled

```tsx
import { useState } from 'react';
import { Radio } from '@mantine/core';

function Demo() {
  const [checked, setChecked] = useState(false);
  return (
    <Radio
      checked={checked}
      onChange={(event) => setChecked(event.currentTarget.checked)}
    />
  );
}
```

## States

#### Example: states

```tsx
import { Radio, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Radio checked={false} onChange={() => {}} label="Default radio" />
      <Radio checked onChange={() => {}} label="Checked radio" />
      <Radio checked variant="outline" onChange={() => {}} label="Outline checked radio" />
      <Radio disabled label="Disabled radio" />
      <Radio disabled checked onChange={() => {}} label="Disabled checked radio" />
    </Stack>
  );
}
```

## Change icon

#### Example: icon

```tsx
import { Radio, CheckIcon } from '@mantine/core';

function Demo() {
  return (
    <Radio icon={CheckIcon} label="Custom check icon" name="check" value="check" defaultChecked />
  );
}
```

## Change icon color

#### Example: iconColor

```tsx
import { Radio } from '@mantine/core';

function Demo() {
  return (
    <Radio
      iconColor="dark.8"
      color="lime.4"
      label="Custom icon color"
      name="check"
      value="check"
      defaultChecked
    />
  );
}
```

## Disabled state

#### Example: disabled

```tsx
import { Radio, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Radio checked disabled label="React" value="react" />
      <Radio disabled label="Angular" value="nu" />
      <Radio disabled label="Svelte" value="sv" />
    </Group>
  );
}
```

## Pointer cursor

By default, radio input and label have `cursor: default` (same as native `input[type="radio"]`).
To change cursor to pointer, set `cursorType` on [theme](https://mantine.dev/theming/theme-object/):

```tsx
import { createTheme, MantineProvider, Radio } from '@mantine/core';

const theme = createTheme({
  cursorType: 'pointer',
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Radio label="Pointer cursor" />
    </MantineProvider>
  );
}
```

## Radio with tooltip

You can change target element to which tooltip is attached with `refProp`:

- If `refProp` is not set, the tooltip is attached to the checkbox input
- If `refProp="rootRef"` is set, the tooltip is attached to the root element (contains label, input and other elements)

#### Example: tooltip

```tsx
import { Tooltip, Radio } from '@mantine/core';

function Demo() {
  return (
    <>
      <Tooltip label="Radio with tooltip">
        <Radio label="Tooltip on radio only" />
      </Tooltip>

      <Tooltip label="Radio with tooltip" refProp="rootRef">
        <Radio label="Tooltip the entire element" mt="md" />
      </Tooltip>
    </>
  );
}
```

## Wrapper props

Radio supports additional props that are passed to the wrapper element for more customization options.

## Radio.Group component

#### Example: groupConfigurator

```tsx
import { Radio, Group } from '@mantine/core';


function Demo() {
  return (
    <Radio.Group
      name="favoriteFramework"
      
    >
      <Group mt="xs">
        <Radio value="react" label="React" />
        <Radio value="svelte" label="Svelte" />
        <Radio value="ng" label="Angular" />
        <Radio value="vue" label="Vue" />
      </Group>
    </Radio.Group>
  );
}
```

## Radio.Group disabled state

## Controlled Radio.Group

```tsx
import { useState } from 'react';
import { Radio } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('react');

  return (
    <Radio.Group
      value={value}
      onChange={setValue}
      name="favoriteFramework"
      label="Select your favorite framework/library"
      description="This is anonymous"
      withAsterisk
    >
      <Radio value="react" label="React" />
      <Radio value="svelte" label="Svelte" />
      <Radio value="ng" label="Angular" />
      <Radio value="vue" label="Vue" />
    </Radio.Group>
  );
}
```

## Radio.Indicator

`Radio.Indicator` looks exactly the same as `Radio` component, but it does not
have any semantic meaning, it's just a visual representation of radio state. You
can use it in any place where you need to display radio state without any interaction
related to the indicator. For example, it is useful in cards based on buttons, trees, etc.

Note that `Radio.Indicator` cannot be focused or selected with keyboard. It is not
accessible and should not be used as a replacement for `Radio` component.

#### Example: indicator

```tsx
import { Radio, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Radio.Indicator />
      <Radio.Indicator checked />
      <Radio.Indicator disabled />
      <Radio.Indicator disabled checked />
    </Group>
  );
}
```
