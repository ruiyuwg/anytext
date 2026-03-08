## Accessibility

- Root element role set to `alert`
- `aria-describedby` set to body element id, `aria-labelledby` set to title element id if `title` is provided
- Set `closeButtonLabel` prop to make close button accessible

```tsx
import { Alert } from '@mantine/core';

function Invalid() {
  // -> not ok
  return <Alert withCloseButton />;
}

function Valid() {
  // -> ok
  return <Alert withCloseButton closeButtonLabel="Dismiss" />;
}

function AlsoValid() {
  // -> ok, without close button, closeButtonLabel is not needed
  return <Alert />;
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autoContrast | boolean | - | If set, adjusts text color based on background color for filled variant |
| closeButtonLabel | string | - | Close button aria-label |
| color | MantineColor | - | Key of theme.colors or any valid CSS color |
| icon | React.ReactNode | - | Icon displayed next to the title |
| onClose | () => void | - | Called when the close button is clicked |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius |
| title | React.ReactNode | - | Alert title |
| withCloseButton | boolean | - | Determines whether close button should be displayed |

#### Styles API

Alert component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Alert selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Alert-root | Root element |
| wrapper | .mantine-Alert-wrapper | Wrapper around `body` and `icon` |
| body | .mantine-Alert-body | Body element, contains `title` and `message` |
| title | .mantine-Alert-title | Title element, contains `label` and `icon` |
| label | .mantine-Alert-label | Title label |
| message | .mantine-Alert-message | Alert message |
| icon | .mantine-Alert-icon | Icon element |
| closeButton | .mantine-Alert-closeButton | Close button |

**Alert CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --alert-bd | Controls `border` |
| root | --alert-bg | Controls `background` |
| root | --alert-color | Controls `color` |
| root | --alert-radius | Controls `border-radius` |

**Alert data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| title | data-with-close-button | - | - |

### Anchor

Package: @mantine/core
Import: import { Anchor } from '@mantine/core';
Description: Display link with theme styles

## Usage

#### Example: usage

```tsx
import { Anchor } from '@mantine/core';

function Demo() {
  return (
    <Anchor href="https://mantine.dev/" target="_blank">
      Anchor component
    </Anchor>
  );
}
```

## Underline

Use `underline` prop to configure `text-decoration` property. It accepts the following values:

- `always` - link is always underlined
- `hover` - link is underlined on hover
- `never` - link is never underlined
- `not-hover` - link is underlined when not hovered

#### Example: decoration

```tsx
import { Anchor, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Anchor href="https://mantine.dev/" target="_blank" underline="always">
        Underline always
      </Anchor>
      <Anchor href="https://mantine.dev/" target="_blank" underline="hover">
        Underline hover
      </Anchor>
      <Anchor href="https://mantine.dev/" target="_blank" underline="never">
        Underline never
      </Anchor>
      <Anchor href="https://mantine.dev/" target="_blank" underline="not-hover">
        Underline not-hover
      </Anchor>
    </Group>
  );
}
```

You can also configure `underline` prop for all `Anchor` components with [default props](https://mantine.dev/theming/default-props):

```tsx
import { Anchor, createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  components: {
    Anchor: Anchor.extend({
      defaultProps: {
        underline: 'always',
      },
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      {/* Your app here */}
    </MantineProvider>
  );
}
```

## Text props

`Anchor` components supports all [Text](https://mantine.dev/core/text) component props.
For example, you can use gradient variant:

#### Example: textProps

```tsx
import { Anchor } from '@mantine/core';

function Demo() {
  return (
    <Anchor
      variant="gradient"
      gradient={{ from: 'pink', to: 'yellow' }}
      fw={500}
      fz="lg"
      href="#text-props"
    >
      A link with pink to yellow gradient
    </Anchor>
  );
}
```

## Polymorphic component

Anchor is a polymorphic component – its default root element is a, but it can be changed to any other element or component with component prop:

```tsx
import { Anchor } from '@mantine/core';

function Demo() {
  return <Anchor component="button" />;
}
```

You can also use components in component prop, for example, Next.js Link:

```tsx
import Link from 'next/link';
import { Anchor } from '@mantine/core';

function Demo() {
  return <Anchor component={Link} href="/" />;
}
```

**Polymorphic components with TypeScript**

Note that polymorphic components props types are different from regular components – they do not extend HTML element props of the default element. For example, AnchorProps does not extend React.ComponentPropsWithoutRef<'a'> although a is the default element.

If you want to create a wrapper for a polymorphic component that is not polymorphic (does not support component prop), then your component props interface should extend HTML element props.

## Get element ref

```tsx
import { useRef } from 'react';
import { Anchor } from '@mantine/core';

function Demo() {
  const ref = useRef<HTMLAnchorElement>(null);
  return <Anchor ref={ref} />;
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| color | MantineColor | - | @deprecated Use c prop instead |
| gradient | MantineGradient | - | Gradient configuration, ignored when variant is not gradient |
| inherit | boolean | - | Determines whether font properties should be inherited from the parent |
| inline | boolean | - | Sets line-height to 1 for centering |
| lineClamp | number | - | Number of lines after which Text will be truncated |
| size | MantineSize | (string & {}) | - | Controls font-size and line-height |
| truncate | TextTruncate | - | Side on which Text must be truncated, if true, text is truncated from the start |
| underline | "always" | "hover" | "not-hover" | "never" | - | Defines when text-decoration: underline styles are applied. |

### AngleSlider

Package: @mantine/core
Import: import { AngleSlider } from '@mantine/core';
Description: Pick angle value between 0 and 360

## Usage

Use `AngleSlider` component to pick angle value between 0 and 360:

#### Example: usage

```tsx
import { AngleSlider } from '@mantine/core';

function Demo() {
  return <AngleSlider aria-label="Angle slider" />;
}
```

## Controlled

`AngleSlider` value is a number between 0 and 360.

```tsx
import { useState } from 'react';
import { AngleSlider } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(180);
  return <AngleSlider value={value} onChange={setValue} />;
}
```

## formatLabel

Use the `formatLabel` prop to change the angle label format.
It accepts a function that takes the angle value and returns a React node:

#### Example: formatLabel

```tsx
import { AngleSlider } from '@mantine/core';

function Demo() {
  return <AngleSlider aria-label="Angle slider" formatLabel={(value) => `${value}°`} />;
}
```

## Marks

Set the `marks` prop to display marks on the slider.
Mark is an object of value (required, number between 0 and 360) and label (optional, React node).
To restrict selection to marks only, set the `restrictToMarks` prop:

#### Example: marks

```tsx
import { AngleSlider, Group } from '@mantine/core';

function Demo() {
  return (
    <Group p="lg" gap={50}>
      <AngleSlider
        aria-label="Angle slider"
        formatLabel={(value) => `${value}°`}
        size={100}
        restrictToMarks
        marks={[
          { value: 0 },
          { value: 45 },
          { value: 90 },
          { value: 135 },
          { value: 180 },
          { value: 225 },
          { value: 270 },
          { value: 315 },
        ]}
      />

      <AngleSlider
        aria-label="Angle slider"
        formatLabel={(value) => `${value}°`}
        size={100}
        marks={[
          { value: 0, label: '0°' },
          { value: 45, label: '45°' },
          { value: 90, label: '90°' },
          { value: 135, label: '135°' },
          { value: 180, label: '180°' },
          { value: 225, label: '225°' },
          { value: 270, label: '270°' },
          { value: 315, label: '315°' },
        ]}
      />
    </Group>
  );
}
```

## onChangeEnd

The `onChangeEnd` callback fires when the user stops dragging the slider or changes its value with the keyboard.
Use it as a debounced callback to prevent frequent updates.

#### Example: onChangeEnd

```tsx
import { useState } from 'react';
import { AngleSlider, Text } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(0);
  const [endValue, setEndValue] = useState(0);

  return (
    <>
      <AngleSlider value={value} onChange={setValue} onChangeEnd={setEndValue} />
      <Text mt="md">Current value: {value}</Text>
      <Text>End value: {endValue}</Text>
    </>
  );
}
```

## disabled

`disabled` prop disables the component and prevents user interaction:

#### Example: disabled

```tsx
import { AngleSlider } from '@mantine/core';

function Demo() {
  return <AngleSlider aria-label="Angle slider" disabled />;
}
```

## Accessibility

To make the component accessible for screen readers, set the `aria-label` prop:

```tsx
import { AngleSlider } from '@mantine/core';

function Demo() {
  return <AngleSlider aria-label="Gradient angle" />;
}
```

Keyboard interactions when the component is focused:
