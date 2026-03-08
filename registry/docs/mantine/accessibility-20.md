## Accessibility

To support screen readers, set close button aria-label or title with `closeButtonProps`:

```tsx
import { Notification } from '@mantine/core';

function Demo() {
  return (
    <Notification
      closeButtonProps={{ 'aria-label': 'Hide notification' }}
    />
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | - | Main notification message |
| closeButtonProps | Record\<string, any> | - | Props passed down to the close button |
| color | MantineColor | - | Controls notification line or icon color, key of theme.colors or any valid CSS color |
| icon | React.ReactNode | - | Notification icon, replaces color line |
| loaderProps | LoaderProps | - | Props passed down to the Loader component |
| loading | boolean | - | If set, the Loader component is displayed instead of the icon |
| onClose | () => void | - | Called when the close button is clicked |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius |
| title | React.ReactNode | - | Notification title, displayed above the message body |
| withBorder | boolean | - | Adds border to the root element |
| withCloseButton | boolean | - | If set, the close button is visible |

#### Styles API

Notification component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Notification selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Notification-root | Root element |
| loader | .mantine-Notification-loader | Loader component, displayed only when `loading` prop is set |
| icon | .mantine-Notification-icon | Icon component, displayed only when `icon` prop is set |
| body | .mantine-Notification-body | Notification body, contains all other elements |
| title | .mantine-Notification-title | Title element, displayed only when `title` prop is set |
| description | .mantine-Notification-description | Description displayed below the title |
| closeButton | .mantine-Notification-closeButton | Close button element |

**Notification CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --notification-radius | Controls `border-radius` |
| root | --notification-color | Controls icon color or notification line color |

**Notification data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-with-icon | - | - |
| root | data-with-border | - | - |
| description | data-with-title | - | - |

**Notifications selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Notifications-root | Notifications container, contains all notifications |
| notification | .mantine-Notifications-notification | Single notification |

**Notifications CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --notifications-container-width | Controls notifications container `max-width` |
| root | --notifications-z-index | Controls notifications container `z-index` |

### NumberFormatter

Package: @mantine/core
Import: import { NumberFormatter } from '@mantine/core';
Description: Format number with thousands/decimal separators and suffix/prefix

## Usage

Use `NumberFormatter` to format numbers. It supports the same formatting related props
as [NumberInput](https://mantine.dev/core/number-input/) component.

#### Example: usage

```tsx
import { NumberFormatter } from '@mantine/core';

function Demo() {
  return <NumberFormatter prefix="$ " value={1000000} thousandSeparator />;
}
```

## Prefix and suffix

Set `prefix` and `suffix` props to add given string to the start or end of the value:

#### Example: prefixSuffix

```tsx
import { NumberFormatter } from '@mantine/core';

function Demo() {
  return (
    <>
      <div>
        With prefix: <NumberFormatter prefix="$ " value={100} />
      </div>
      <div>
        With suffix: <NumberFormatter value={100} suffix=" RUB" />
      </div>
    </>
  );
}
```

## Thousands separator

Set `thousandSeparator` prop to separate thousands with a character. You can control
grouping logic with `thousandsGroupStyle`, it accepts: `thousand`, `lakh`, `wan`, `none` values.

#### Example: thousandsSeparator

```tsx
import { NumberFormatter } from '@mantine/core';

function Demo() {
  return (
    <>
      <div>
        With default separator: <NumberFormatter thousandSeparator value={1000000} />
      </div>
      <div>
        With custom separator:{' '}
        <NumberFormatter thousandSeparator="." decimalSeparator="," value={1000000} />
      </div>
    </>
  );
}
```

## Decimal scale

`decimalScale` prop controls the number of allowed decimal places:

#### Example: decimalScale

```tsx
import { NumberFormatter } from '@mantine/core';

function Demo() {
  return <NumberFormatter value={5 / 3} decimalScale={2} />;
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| allowNegative | boolean | - | If set, negative values are allowed |
| decimalScale | number | - | Limits the number of digits that are displayed after the decimal point |
| decimalSeparator | string | - | Character used as a decimal separator, '.' by default |
| fixedDecimalScale | boolean | - | If set, zeros are added after decimalSeparator to match given decimalScale. |
| prefix | string | - | Prefix added before the value |
| suffix | string | - | Suffix added after the value |
| thousandSeparator | string | boolean | - | A character used to separate thousands |
| thousandsGroupStyle | "none" | "thousand" | "lakh" | "wan" | - | Defines the thousand grouping style |
| value | string | number | - | Value to format |

### NumberInput

Package: @mantine/core
Import: import { NumberInput } from '@mantine/core';
Description: Capture number from user

## Usage

`NumberInput` is based on [react-number-format](https://www.npmjs.com/package/react-number-format).
It supports most of the props from the `NumericFormat` component in the original package.

NumberInput component supports [Input](https://mantine.dev/core/input) and [Input.Wrapper](https://mantine.dev/core/input) components features and all input element props. NumberInput documentation does not include all features supported by the component – see [Input](https://mantine.dev/core/input) documentation to learn about all available features.

#### Example: usage

```tsx
import { NumberInput } from '@mantine/core';


function Demo() {
  return (
    <NumberInput
      
      placeholder="Input placeholder"
    />
  );
}
```

## Controlled

```tsx
import { useState } from 'react';
import { NumberInput } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<string | number>('');
  return <NumberInput value={value} onChange={setValue} />;
}
```

## Value type

`value`, `defaultValue` and `onChange` props can be either string or number. In all cases
when `NumberInput` value can be represented as a number, `onChange` function is called
with a number (for example `55`, `1.28`, `-100`, etc.). But there are several cases when
it is not possible to represent value as a number:

- Empty state is represented as an empty string – `''`
- Numbers that are larger than `Number.MAX_SAFE_INTEGER - 1` or smaller than `Number.MIN_SAFE_INTEGER + 1` are represented as strings – `'90071992547409910'`
- Numbers that consist of only multiple zeros are represented as strings – `0.`, `0.0`, `-0.00`, etc.

## min and max

Set `min` and `max` props to limit the input value:

#### Example: minMax

```tsx
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Enter value between 10 and 20"
      placeholder="Don't enter more than 20 and less than 10"
      min={10}
      max={20}
    />
  );
}
```

## Clamp behavior

By default, the value is clamped when the input is blurred. If you set `clampBehavior="strict"`,
it will not be possible to enter value outside of min/max range. Note that this option
may cause issues if you have tight `min` and `max`, for example `min={10}` and `max={20}`.
If you need to disable value clamping entirely, set `clampBehavior="none"`.

#### Example: strictClamp

```tsx
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="You cannot enter number less than 0 or greater than 100"
      placeholder="You cannot enter number less than 0 or greater than 100"
      clampBehavior="strict"
      min={0}
      max={100}
    />
  );
}
```

## Prefix and suffix

Set `prefix` and `suffix` props to add given string to the start or end of the input value:

#### Example: prefixSuffix

```tsx
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <NumberInput
        label="With prefix"
        placeholder="Dollars"
        prefix="$"
        defaultValue={100}
        mb="md"
      />
      <NumberInput
        label="With suffix"
        placeholder="Percents"
        suffix="%"
        defaultValue={100}
        mt="md"
      />
    </>
  );
}
```

## Negative numbers

By default, negative numbers are allowed. Set `allowNegative={false}` to allow only positive numbers.

#### Example: allowNegative

```tsx
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Negative number are not allowed"
      placeholder="Do not enter negative numbers"
      allowNegative={false}
    />
  );
}
```

## Decimal numbers

By default, decimal numbers are allowed. Set `allowDecimal={false}` to allow only integers.

#### Example: allowDecimal

```tsx
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Decimals are not allowed"
      placeholder="Do not enter decimal numbers"
      allowDecimal={false}
    />
  );
}
```

## Decimal scale

`decimalScale` controls how many decimal places are allowed:

#### Example: decimalScale

```tsx
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="You can enter only 2 digits after decimal point"
      placeholder="Do not enter more that 2"
      decimalScale={2}
    />
  );
}
```

## Fixed decimal scale

Set `fixedDecimalScale` to always display fixed number of decimal places:

#### Example: fixedDecimalScale

```tsx
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Always show 2 digits after decimal point"
      placeholder="Do not enter more that 2"
      decimalScale={2}
      fixedDecimalScale
      defaultValue={2.2}
    />
  );
}
```

## Decimal separator

Set `decimalSeparator` to change decimal separator character:

#### Example: decimalSeparator

```tsx
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Custom decimal separator"
      placeholder="You can change it"
      decimalSeparator=","
      defaultValue={20.573}
    />
  );
}
```

## Thousand separator

Set `thousandSeparator` prop to separate thousands with a character. You can control
grouping logic with `thousandsGroupStyle`, it accepts: `thousand`, `lakh`, `wan`, `none` values.

#### Example: thousandsSeparator

```tsx
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <NumberInput
        label="Thousands are separated with a coma"
        placeholder="Thousands are separated with a coma"
        thousandSeparator=","
        defaultValue={1_000_000}
      />

      <NumberInput
        label="Thousands are separated with a space"
        placeholder="Thousands are separated with a space"
        thousandSeparator=" "
        defaultValue={1_000_000}
        mt="md"
      />
    </>
  );
}
```

## Input sections

NumberInput supports left and right sections to display icons, buttons or other content alongside the input.

#### Example: sections

```tsx
import { NumberInput } from '@mantine/core';
import { IconCurrencyDram } from '@tabler/icons-react';

function Demo() {
  const icon = <IconCurrencyDram size={20} stroke={1.5} />;
  return (
    <>
      <NumberInput leftSection={icon} label="With left section" placeholder="With left section" />
      <NumberInput
        rightSection={icon}
        label="With right section"
        placeholder="With right section"
        mt="md"
      />
    </>
  );
}
```

## Increment/decrement controls

By default, the right section is occupied by increment and decrement buttons.
To hide them, set `hideControls` prop. You can also use `rightSection` prop to render anything
in the right section to replace the default controls.

#### Example: rightSection

```tsx
import { NumberInput } from '@mantine/core';
import { IconChartBubble } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <NumberInput label="Hide controls" placeholder="Hide controls" hideControls />
      <NumberInput
        label="Custom right section"
        placeholder="Custom right section"
        mt="md"
        rightSection={<IconChartBubble />}
        rightSectionPointerEvents="none"
      />
    </>
  );
}
```

## Increment/decrement on hold

Set `stepHoldDelay` and `stepHoldInterval` props to define behavior when increment/decrement controls are clicked and hold:

#### Example: hold

```tsx
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <NumberInput
        label="Step on hold"
        description="Step value when clicking and holding increment/decrement buttons"
        stepHoldDelay={500}
        stepHoldInterval={100}
      />

      <NumberInput
        label="Step the value with interval function"
        description="Step value will increase incrementally when control is hold"
        stepHoldDelay={500}
        stepHoldInterval={(t) => Math.max(1000 / t ** 2, 25)}
      />
    </>
  );
}
```

## Custom increment and decrement controls

You can get a ref with `increment` and `decrement` functions to create custom controls:

#### Example: handlers

```tsx
import { useRef } from 'react';
import { NumberInput, Group, Button, NumberInputHandlers } from '@mantine/core';

function Demo() {
  const handlersRef = useRef<NumberInputHandlers>(null);
  return (
    <>
      <NumberInput
        label="Click buttons to change value"
        placeholder="Click the buttons"
        handlersRef={handlersRef}
        step={2}
        min={10}
        max={20}
        defaultValue={15}
      />

      <Group mt="md" justify="center">
        <Button onClick={() => handlersRef.current?.decrement()} variant="default">
          Decrement by 2
        </Button>

        <Button onClick={() => handlersRef.current?.increment()} variant="default">
          Increment by 2
        </Button>
      </Group>
    </>
  );
}
```

## Error state

#### Example: error

```tsx
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <NumberInput label="Boolean error" placeholder="Boolean error" error />
      <NumberInput
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
import { NumberInput } from '@mantine/core';

function Demo() {
  return <NumberInput disabled label="Disabled input" placeholder="Disabled input" />;
}
```

#### Example: stylesApi

```tsx
import { IconAt } from '@tabler/icons-react';
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Label"
      placeholder="NumberInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconAt size={18} />}
      
    />
  );
}
```

## Get element ref

```tsx
import { useRef } from 'react';
import { NumberInput } from '@mantine/core';

function Demo() {
  const ref = useRef<HTMLInputElement>(null);
  return <NumberInput ref={ref} />;
}
```
