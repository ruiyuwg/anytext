## Custom color

By default, code color is gray, you can change it to any valid CSS color or to one
of the [theme.colors](https://mantine.dev/theming/colors):

#### Example: colors

```tsx
import { Code, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Code color="blue.9" c="white">
        React.createElement()
      </Code>
      <Code color="var(--mantine-color-blue-light)">React.createElement()</Code>
    </Group>
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| block | boolean | - | If set, code is rendered in pre |
| color | MantineColor | - | Key of theme.colors or any valid CSS color, controls background-color of the code. By default, calculated based on the color scheme. |

#### Styles API

Code component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Code selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Code-root | Root element |

**Code CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --code-bg | Controls `background-color` |

**Code data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-block | - | - |

**Codehighlight selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| codeHighlight | .mantine-Codehighlight-codeHighlight | Root element |
| showCodeButton | .mantine-Codehighlight-showCodeButton | Button that reveals full code when it is collapsed |
| pre | .mantine-Codehighlight-pre | Pre element, contains code element |
| code | .mantine-Codehighlight-code | Code element |
| control | .mantine-Codehighlight-control | Control button, copy/collapse, custom controls |
| controlTooltip | .mantine-Codehighlight-controlTooltip | Root element of control tooltip |
| controls | .mantine-Codehighlight-controls | A wrapper around controls |
| scrollarea | .mantine-Codehighlight-scrollarea | Scroll area, contains code |

**Codehighlight CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| codeHighlight | --ch-background | Background color |
| codeHighlight | --ch-max-height | Max height of code block in collapsed state |
| codeHighlight | --ch-radius | Border radius |

**Codehighlighttabs selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| codeHighlight | .mantine-Codehighlighttabs-codeHighlight | Root element of inner CodeHighlight component |
| showCodeButton | .mantine-Codehighlighttabs-showCodeButton | Button that reveals full code when it is collapsed |
| pre | .mantine-Codehighlighttabs-pre | Pre element, contains code element |
| code | .mantine-Codehighlighttabs-code | Code element |
| control | .mantine-Codehighlighttabs-control | Control button, copy/collapse, custom controls |
| controlTooltip | .mantine-Codehighlighttabs-controlTooltip | Root element of control tooltip |
| controls | .mantine-Codehighlighttabs-controls | A wrapper around controls |
| scrollarea | .mantine-Codehighlighttabs-scrollarea | Scroll area, contains code |
| root | .mantine-Codehighlighttabs-root | Root element |
| filesScrollarea | .mantine-Codehighlighttabs-filesScrollarea | Scrollarea with files list |
| files | .mantine-Codehighlighttabs-files | Files names list |
| file | .mantine-Codehighlighttabs-file | File name |
| fileIcon | .mantine-Codehighlighttabs-fileIcon | File icon |

### Collapse

Package: @mantine/core
Import: import { Collapse } from '@mantine/core';
Description: Animate presence with slide down/up transition

## Usage

#### Example: usage

```tsx
import { Button, Group, Text, Collapse, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Box maw={400} mx="auto">
      <Group justify="center" mb={5}>
        <Button onClick={toggle}>Toggle content</Button>
      </Group>

      <Collapse in={opened}>
        <Text>{/* ... content */}</Text>
      </Collapse>
    </Box>
  );
}
```

## Change transition

Set following props to control transition:

- `transitionDuration` – duration in ms
- `transitionTimingFunction` – timing function (ease, linear, etc.), defaults to `ease`
- `onTransitionEnd` – called when transition ends (both open and close)

#### Example: transition

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Button, Group, Text, Collapse, Box } from '@mantine/core';

function Demo() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Box maw={400} mx="auto">
      <Group justify="center" mb={5}>
        <Button onClick={toggle}>Toggle with linear transition</Button>
      </Group>

      <Collapse in={opened} transitionDuration={1000} transitionTimingFunction="linear">
        <Text>{/* ...content */}</Text>
      </Collapse>
    </Box>
  );
}
```

## Nested Collapse components

#### Example: nested

```tsx
function Demo() {
  return (
    <CollapsedDemo buttonProps={{ children: 'Root collapse' }}>
      <Text mt="md" size="lg" fw={700}>
        This collapse contains another collapse
      </Text>
      <Text mt="xs">{lorem}</Text>
      <CollapsedDemo buttonProps={{ variant: 'outline', children: 'Inner collapse' }}>
        <Text mt="md" size="lg" fw={700}>
          This collapse is inside another collapse
        </Text>
        <Text mt="xs">{lorem}</Text>
      </CollapsedDemo>
    </CollapsedDemo>
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| animateOpacity | boolean | - | Determines whether opacity should be animated |
| in | boolean | required | Opened state |
| keepMounted | boolean | - | Keep element in DOM when collapsed, useful for nested collapses |
| onTransitionEnd | () => void | - | Called each time transition ends |
| transitionDuration | number | - | Transition duration in ms |
| transitionTimingFunction | string | - | Transition timing function |

### ColorInput

Package: @mantine/core
Import: import { ColorInput } from '@mantine/core';
Description: Capture color from user

## Usage

ColorInput component supports [Input](https://mantine.dev/core/input) and [Input.Wrapper](https://mantine.dev/core/input) components features and all input element props. ColorInput documentation does not include all features supported by the component – see [Input](https://mantine.dev/core/input) documentation to learn about all available features.

#### Example: usage

```tsx
import { ColorInput } from '@mantine/core';


function Demo() {
  return (
    <ColorInput
      
      placeholder="Input placeholder"
    />
  );
}
```

## Controlled

```tsx
import { useState } from 'react';
import { ColorInput } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('');
  return <ColorInput value={value} onChange={setValue} />;
}
```

## Formats

Component supports hex, hexa, rgb, rgba, hsl and hsla color formats.
Slider to change opacity is displayed only for hexa, rgba and hsla formats:

#### Example: formatsConfigurator

```tsx
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput defaultValue="#C5D899" />;
}
```

## Preserve invalid input

By default, `ColorInput` will revert the value on blur to the last known valid value.
To change this behavior and keep invalid value, set `fixOnBlur={false}`:

#### Example: fixOnBlur

```tsx
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput fixOnBlur={false} label="Value is not fixed on blur" placeholder="May contain invalid value" />;
}
```

## onChangeEnd

`onChangeEnd` is called when user stops dragging slider or changes input value.
It is useful when you need to update color only when user finished interaction with the component:

#### Example: onChangeEnd

```tsx
import { useState } from 'react';
import { ColorInput, Text } from '@mantine/core';

function Demo() {
  const [changeEndValue, setChangeEndValue] = useState('#FFFFFF');

  return (
    <>
      <Text mb="md">
        Change end value: <b>{changeEndValue}</b>
      </Text>

      <ColorInput
        label="Pick color"
        placeholder="Pick color"
        defaultValue="#FFFFFF"
        onChangeEnd={setChangeEndValue}
      />
    </>
  );
}
```

## Disable free input

To disable free input set `disallowInput` prop:

#### Example: disallowInput

```tsx
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput disallowInput />;
}
```

## With swatches

You can add any amount of predefined color swatches:

#### Example: swatches

```tsx
import { ColorInput } from '@mantine/core';

function Demo() {
  return (
    <ColorInput
      format="hex"
      swatches={[${Object.keys(DEFAULT_THEME.colors)
        .map((color) => `'${DEFAULT_THEME.colors[color][6]}'`)
        .join(', ')}]}
    />
  );
}
```

By default, there will be 7 swatches per row, you can change this with `swatchesPerRow` prop,
like in [ColorPicker](https://mantine.dev/core/color-picker/) component:

#### Example: swatchesConfigurator

```tsx
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker format="hex" swatches={[${Object.keys(DEFAULT_THEME.colors)
      .map((color) => `'${DEFAULT_THEME.colors[color][6]}'`)
      .join(', ')}]} />
  );
}
```

If you need to restrict color picking to certain colors – disable color picker and disallow free input:

#### Example: swatchesOnly

```tsx
import { ColorInput, DEFAULT_THEME } from '@mantine/core';

function Demo() {
  return (
    <ColorInput
      placeholder="Pick color"
      label="Your favorite color"
      disallowInput
      withPicker={false}
      swatches={[
        ...DEFAULT_THEME.colors.red,
        ...DEFAULT_THEME.colors.green,
        ...DEFAULT_THEME.colors.blue,
      ]}
    />
  );
}
```

## Close dropdown on color swatch click

To close the dropdown when one of the color swatches is clicked, set `closeOnColorSwatchClick` prop:

#### Example: closeOnColorSwatchClick

```tsx
import { ColorInput, DEFAULT_THEME } from '@mantine/core';

function Demo() {
  return (
    <ColorInput
      closeOnColorSwatchClick
      label="Dropdown is closed when color swatch is clicked"
      placeholder="Click color swatch"
      swatches={[
        ...DEFAULT_THEME.colors.red,
        ...DEFAULT_THEME.colors.green,
        ...DEFAULT_THEME.colors.blue,
      ]}
    />
  );
}
```

## Hide dropdown

To hide dropdown, set `withPicker={false}`:

#### Example: withPicker

```tsx
import { ColorInput } from '@mantine/core';

function Demo() {
  return (
    <ColorInput withPicker={false} pointer label="Without dropdown" placeholder="Enter value" />
  );
}
```

## Eye dropper

By default, if [EyeDropper API](https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper_API)
is available, eye dropper icon will be displayed at the right section of the input.
To disable it, set `withEyeDropper={false}`:

#### Example: noEyeDropper

```tsx
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput withEyeDropper={false} label="Without eye dropper" placeholder="Not fun" />;
}
```

## Change eye dropper icon

You can replace eye dropper icon with any React node using `eyeDropperIcon` prop:

#### Example: eyeDropperIcon

```tsx
import { ColorInput } from '@mantine/core';
import { IconFocus2 } from '@tabler/icons-react';

function Demo() {
  return (
    <ColorInput
      eyeDropperIcon={<IconFocus2 size={18} stroke={1.5} />}
      label="With custom eye dropper icon"
      placeholder="Pick color"
    />
  );
}
```

## Input sections

ColorInput supports left and right sections to display icons, buttons or other content alongside the input.

Note that by default, `ColorPicker` has color preview in the left section and eye dropper button
in the right section. You can replace these elements with any React node using `leftSection`
and `rightSection` props:

#### Example: sections

```tsx
import { ColorInput } from '@mantine/core';
import { IconColorPicker } from '@tabler/icons-react';

function Demo() {
  const icon = <IconColorPicker size={18} stroke={1.5} />;

  return (
    <>
      <ColorInput
        label="With custom left section"
        placeholder="Replaces color swatch"
        leftSection={icon}
        withEyeDropper={false}
      />
      <ColorInput
        label="With custom right section"
        placeholder="Replaces eye dropper"
        rightSection={icon}
        mt="md"
      />
    </>
  );
}
```

## Error state

#### Example: error

```tsx
import { ColorInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <ColorInput label="Boolean error" placeholder="Boolean error" error />
      <ColorInput
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
      />
    </>
  );
}
```

## Disabled state

#### Example: disabled

```tsx
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput disabled label="Disabled input" placeholder="Disabled input" />;
}
```

## Read only

#### Example: readOnly

```tsx
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput readOnly label="Cannot modify value" defaultValue="#F0FCFE" />;
}
```

#### Example: stylesApi

```tsx
import { ColorInput } from '@mantine/core';

function Demo() {
  return (
    <ColorInput
      label="Label"
      placeholder="ColorInput"
      description="Description"
      error="Error"
      withAsterisk
      swatches={['#000', '#fff', '#f00', '#0f0', '#00f']}
      format="rgba"
      
    />
  );
}
```

## Get element ref

```tsx
import { useRef } from 'react';
import { ColorInput } from '@mantine/core';

function Demo() {
  const ref = useRef<HTMLInputElement>(null);
  return <ColorInput ref={ref} />;
}
```
