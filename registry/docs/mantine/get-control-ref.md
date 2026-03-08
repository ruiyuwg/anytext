## Get control ref

```tsx
import { useRef } from 'react';
import { Spoiler } from '@mantine/core';

function Demo() {
  const spoilerControlRef = useRef<HTMLButtonElement>(null);
  return (
    <Spoiler
      controlRef={spoilerControlRef}
      hideLabel="Hide"
      showLabel="Show"
    />
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| controlRef | ForwardedRef | - | Get ref of spoiler toggle button |
| expanded | boolean | - | Controlled expanded state value |
| hideLabel | React.ReactNode | required | Label for close spoiler action |
| initialState | boolean | - | Initial spoiler state, true to wrap content in spoiler, false to show content without spoiler, opened state is updated on mount |
| maxHeight | number | - | Maximum height of the visible content, when this point is reached spoiler appears |
| onExpandedChange | (expanded: boolean) => void | - | Called when expanded state changes (when spoiler visibility is toggled by the user) |
| showLabel | React.ReactNode | required | Label for open spoiler action |
| transitionDuration | number | - | Spoiler reveal transition duration in ms, set 0 or null to turn off animation |

#### Styles API

Spoiler component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Spoiler selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Spoiler-root | Root element |
| content | .mantine-Spoiler-content | Wraps content to set max-height and transition |
| control | .mantine-Spoiler-control | Show/hide content control |

**Spoiler CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --spoiler-transition-duration | Controls transition duration |

**Spoiler data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-has-spoiler | Whether the control button is shown or not | - |

### Stack

Package: @mantine/core
Import: import { Stack } from '@mantine/core';
Description: Compose elements and components in a vertical flex container

## Usage

`Stack` is a vertical flex container. If you need a horizontal flex container, use [Group](https://mantine.dev/core/group)
component instead. If you need to have full control over flex container properties, use [Flex](https://mantine.dev/core/flex) component.

#### Example: configurator

```tsx
import { Stack, Button } from '@mantine/core';

function Demo() {
  return (
    <Stack
      h={300}
      bg="var(--mantine-color-body)"
      
    >
      <Button variant="default">1</Button>
      <Button variant="default">2</Button>
      <Button variant="default">3</Button>
    </Stack>
  );
}
```

## Browser support

Flex component uses CSS flexbox gap to add spacing between children. Flexbox gap is supported by all modern browsers, but if you need to support older browsers, use Space component instead.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| align | AlignItems | - | Controls align-items CSS property |
| gap | MantineSpacing | - | Key of theme.spacing or any valid CSS value to set gap property, numbers are converted to rem |
| justify | JustifyContent | - | Controls justify-content CSS property |

#### Styles API

Stack component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Stack selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Stack-root | Root element |

**Stack CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --stack-align | Controls `align-items` property |
| root | --stack-justify | Controls `justify-content` property |
| root | --stack-gap | Controls `gap` property |

### Stepper

Package: @mantine/core
Import: import { Stepper } from '@mantine/core';
Description: Display content divided into a steps sequence

## Usage

#### Example: usage

```tsx
import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper active={active} onStepClick={setActive}>
        <Stepper.Step label="First step" description="Create an account">
          Step 1 content: Create an account
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Verify email">
          Step 2 content: Verify email
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Get full access">
          Step 3 content: Get full access
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={prevStep}>Back</Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </>
  );
}
```
