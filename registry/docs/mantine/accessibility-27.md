## Accessibility

`<Stepper.Step />` components render button element, set `aria-label` or `title` props
to make component visible for screen readers in case you do not specify `label` or `description`:

```tsx
import { Stepper } from '@mantine/core';

function Demo() {
  return (
    <Stepper active={0}>
      {/* Not ok, no label for screen reader */}
      <Stepper.Step />

      {/* Ok, label and description */}
      <Stepper.Step label="Step 1" description="Create an account" />

      {/* Ok, aria-label */}
      <Stepper.Step aria-label="Create an account" />
    </Stepper>
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| active | number | required | Index of the active step |
| allowNextStepsSelect | boolean | - | If set, next steps can be selected |
| autoContrast | boolean | - | If set, adjusts text color based on background color for filled variant |
| children | React.ReactNode | required | Stepper.Step components |
| color | MantineColor | - | Key of theme.colors or any valid CSS color, controls colors of active and progress steps |
| completedIcon | ReactNode | StepFragmentComponent | - | Step icon displayed when step is completed, check icon by default |
| contentPadding | MantineSpacing | - | Key of theme.spacing or any valid CSS value to set padding-top of the content |
| icon | ReactNode | StepFragmentComponent | - | Step icon, default value is step index + 1 |
| iconPosition | "left" | "right" | - | Icon position relative to the step body |
| iconSize | string | number | - | Controls size of the step icon, by default icon size is inferred from size prop |
| onStepClick | (stepIndex: number) => void | - | Called when step is clicked |
| orientation | "horizontal" | "vertical" | - | Stepper orientation |
| progressIcon | ReactNode | StepFragmentComponent | - | Step icon displayed when step is in progress, default value is step index + 1 |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set steps border-radius |
| size | MantineSize | - | Controls size of various Stepper elements |
| wrap | boolean | - | Determines whether steps should wrap to the next line if no space is available |

#### Styles API

Stepper component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Stepper selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Stepper-root | Root element |
| steps | .mantine-Stepper-steps | Steps controls wrapper |
| separator | .mantine-Stepper-separator | Separator line between step controls |
| verticalSeparator | .mantine-Stepper-verticalSeparator | Vertical separator line between step controls |
| content | .mantine-Stepper-content | Current step content wrapper |
| stepWrapper | .mantine-Stepper-stepWrapper | Wrapper for the step icon and separator |
| step | .mantine-Stepper-step | Step control button |
| stepIcon | .mantine-Stepper-stepIcon | Step icon wrapper |
| stepCompletedIcon | .mantine-Stepper-stepCompletedIcon | Completed step icon, rendered within stepIcon |
| stepBody | .mantine-Stepper-stepBody | Contains stepLabel and stepDescription |
| stepLabel | .mantine-Stepper-stepLabel | Step label |
| stepDescription | .mantine-Stepper-stepDescription | Step description |
| stepLoader | .mantine-Stepper-stepLoader | Step loader |

**Stepper CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --stepper-color | Controls color of the active step and separator |
| root | --stepper-icon-color | Controls `color` of the step icon |
| root | --stepper-icon-size | Controls `width` and `height` of the icons |
| root | --stepper-content-padding | Controls `padding-top` of the content |
| root | --stepper-radius | Controls `border-radius` of the step icon |
| root | --stepper-fz | Controls `font-size` of various elements |
| root | --stepper-spacing | Controls various spacings |

**Stepper data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| stepIcon | data-progress | Step is current | - |
| stepIcon | data-completed | Step is completed | - |

### Switch

Package: @mantine/core
Import: import { Switch } from '@mantine/core';
Description: Capture boolean input from user

## Usage

#### Example: configurator

```tsx
import { Switch } from '@mantine/core';


function Demo() {
  return (
    <Switch
      defaultChecked
      
    />
  );
}
```

## Controlled

```tsx
import { useState } from 'react';
import { Switch } from '@mantine/core';

function Demo() {
  const [checked, setChecked] = useState(false);
  return (
    <Switch
      checked={checked}
      onChange={(event) => setChecked(event.currentTarget.checked)}
    />
  );
}
```

## States

#### Example: states

```tsx
import { Switch, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Switch value="value" label="Default switch" />
      <Switch checked value="value" label="Checked switch" />
      <Switch disabled value="value" label="Disabled switch" />
      <Switch checked disabled value="value" label="Disabled checked switch" />
    </Stack>
  );
}
```

## Inner Labels

#### Example: labels

```tsx
import { Switch, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Switch size="xs" onLabel="ON" offLabel="OFF" />
      <Switch size="sm" onLabel="ON" offLabel="OFF" />
      <Switch size="md" onLabel="ON" offLabel="OFF" />
      <Switch size="lg" onLabel="ON" offLabel="OFF" />
      <Switch size="xl" onLabel="ON" offLabel="OFF" />
    </Group>
  );
}
```

## Icon labels

#### Example: iconLabels

```tsx
import { Switch } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

function Demo() {
  return (
    <Switch
      size="md"
      color="dark.4"
      onLabel={<IconSun size={16} stroke={2.5} color="var(--mantine-color-yellow-4)" />}
      offLabel={<IconMoonStars size={16} stroke={2.5} color="var(--mantine-color-blue-6)" />}
    />
  );
}
```

## Thumb icon

#### Example: thumbIcon

```tsx
import { useState } from 'react';
import { Switch } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';

function Demo() {
  const [checked, setChecked] = useState(false);

  return (
    <Switch
      checked={checked}
      onChange={(event) => setChecked(event.currentTarget.checked)}
      color="teal"
      size="md"
      label="Switch with thumb icon"
      thumbIcon={
        checked ? (
          <IconCheck size={12} color="var(--mantine-color-teal-6)" stroke={3} />
        ) : (
          <IconX size={12} color="var(--mantine-color-red-6)" stroke={3} />
        )
      }
    />
  );
}
```

## With tooltip

Set `refProp="rootRef"` on [Tooltip](https://mantine.dev/core/tooltip/) and other similar components to make them work with `Switch`:

#### Example: tooltip

```tsx
import { Switch, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Switch tooltip" refProp="rootRef">
      <Switch label="Switch with tooltip" />
    </Tooltip>
  );
}
```

## Pointer cursor

By default, switch input and label have `cursor: default` (same as native `input[type="checkbox"]`).
To change cursor to pointer, set `cursorType` on [theme](https://mantine.dev/theming/theme-object/):

```tsx
import { createTheme, MantineProvider, Switch } from '@mantine/core';

const theme = createTheme({
  cursorType: 'pointer',
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Switch label="Pointer cursor" />
    </MantineProvider>
  );
}
```

## Wrapper props

Switch supports additional props that are passed to the wrapper element for more customization options.

## Switch.Group

#### Example: groupConfigurator

```tsx
import { Switch, Group } from '@mantine/core';

function Demo() {
  return (
    <Switch.Group
      defaultValue={['react']}
      
    >
      <Group mt="xs">
        <Switch value="react" label="React" />
        <Switch value="svelte" label="Svelte" />
        <Switch value="ng" label="Angular" />
        <Switch value="vue" label="Vue" />
      </Group>
    </Switch.Group>
  );
}
```

## Switch.Group disabled

## Controlled Switch.Group

```tsx
import { useState } from 'react';
import { Switch } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<string[]>([]);

  return (
    <Switch.Group value={value} onChange={setValue}>
      <Switch value="react" label="React" />
      <Switch value="svelte" label="Svelte" />
    </Switch.Group>
  );
}
```

## Change styles based on checked state

#### Example: styles

```tsx
// Demo.module.css
.track {
  transition:
    background-color 200ms ease,
    border-color 200ms ease;

  input:checked + & {
    background-color: var(--mantine-color-lime-5);
    border-color: var(--mantine-color-lime-5);

    & > .thumb {
      background-color: var(--mantine-color-black);

      &::before {
        background-color: var(--mantine-color-lime-5);
      }
    }
  }
}

// Demo.tsx
import { Switch } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return <Switch classNames={classes} size="lg" />;
}
```

#### Example: stylesApi

```tsx
import { Switch } from '@mantine/core';

function Demo() {
  return <Switch label="Switch component" description="Switch description" error="Switch error />;
}
```

## Get input ref

```tsx
import { useRef } from 'react';
import { Switch } from '@mantine/core';

function Demo() {
  const ref = useRef<HTMLInputElement>(null);
  return <Switch ref={ref} />;
}
```
