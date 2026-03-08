## Polymorphic component

Paper is a polymorphic component – its default root element is div, but it can be changed to any other element or component with component prop:

```tsx
import { Paper } from '@mantine/core';

function Demo() {
  return <Paper component="button" />;
}
```

You can also use components in component prop, for example, Next.js Link:

```tsx
import Link from 'next/link';
import { Paper } from '@mantine/core';

function Demo() {
  return <Paper component={Link} href="/" />;
}
```

**Polymorphic components with TypeScript**

Note that polymorphic components props types are different from regular components – they do not extend HTML element props of the default element. For example, PaperProps does not extend React.ComponentPropsWithoutRef<'div'> although div is the default element.

If you want to create a wrapper for a polymorphic component that is not polymorphic (does not support component prop), then your component props interface should extend HTML element props.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius, numbers are converted to rem |
| shadow | MantineShadow | - | Key of theme.shadows or any valid CSS value to set box-shadow |
| withBorder | boolean | - | Adds border to the root element |

#### Styles API

Paper component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Paper selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Paper-root | Root element |

**Paper CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --paper-radius | Controls `border-radius` |
| root | --paper-shadow | Controls `box-shadow` |

**Paper data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-with-border | - | - |

### PasswordInput

Package: @mantine/core
Import: import { PasswordInput } from '@mantine/core';
Description: Capture password data from user

## Usage

PasswordInput component supports [Input](https://mantine.dev/core/input) and [Input.Wrapper](https://mantine.dev/core/input) components features and all input element props. PasswordInput documentation does not include all features supported by the component – see [Input](https://mantine.dev/core/input) documentation to learn about all available features.

#### Example: usage

```tsx
import { PasswordInput } from '@mantine/core';


function Demo() {
  return (
    <PasswordInput
      
      placeholder="Input placeholder"
    />
  );
}
```

## Controlled

```tsx
import { useState } from 'react';
import { PasswordInput } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('');
  return (
    <PasswordInput
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
    />
  );
}
```

## Controlled visibility toggle

Control visibility state with `visible` and `onVisibilityChange` props,
for example, the props can be used to sync visibility state between two inputs:

#### Example: controlledVisibility

```tsx
import { useDisclosure } from '@mantine/hooks';
import { PasswordInput, Stack } from '@mantine/core';

function Demo() {
  const [visible, { toggle }] = useDisclosure(false);
  return (
    <Stack>
      <PasswordInput
        label="Password"
        defaultValue="secret"
        visible={visible}
        onVisibilityChange={toggle}
      />
      <PasswordInput
        label="Confirm password"
        defaultValue="secret"
        visible={visible}
        onVisibilityChange={toggle}
      />
    </Stack>
  );
}
```

## Change visibility toggle icon

To change visibility toggle icon, pass a React component that accepts `reveal` prop to `visibilityToggleIcon`:

#### Example: visibilityIcon

```tsx
import { PasswordInput } from '@mantine/core';
import { IconEyeCheck, IconEyeOff } from '@tabler/icons-react';

const VisibilityToggleIcon = ({ reveal }: { reveal: boolean }) =>
  reveal ? (
    <IconEyeOff style={{ width: 'var(--psi-icon-size)', height: 'var(--psi-icon-size)' }} />
  ) : (
    <IconEyeCheck style={{ width: 'var(--psi-icon-size)', height: 'var(--psi-icon-size)' }} />
  );

function Demo() {
  return (
    <PasswordInput
      maw={320}
      mx="auto"
      label="Change visibility toggle icon"
      placeholder="Change visibility toggle icon"
      defaultValue="secret"
      visibilityToggleIcon={VisibilityToggleIcon}
    />
  );
}
```
