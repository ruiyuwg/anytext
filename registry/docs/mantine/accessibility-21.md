## Accessibility

NumberInput provides better accessibility support when used in forms. Make sure to associate the input with a label for better screen reader support.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| allowDecimal | boolean | - | If set, decimal values are allowed |
| allowLeadingZeros | boolean | - | Determines whether leading zeros are allowed. If set to false, leading zeros are removed when the input value becomes a valid number. |
| allowNegative | boolean | - | If set, negative values are allowed |
| allowedDecimalSeparators | string\[] | - | Characters which when pressed result in a decimal separator |
| clampBehavior | "none" | "blur" | "strict" | - | Controls how value is clamped, strict – user is not allowed to enter values that are not in \[min, max] range, blur – user is allowed to enter any values, but the value is clamped when the input loses focus (default behavior), none – lifts all restrictions, \[min, max] range is applied only for controls and up/down keys |
| decimalScale | number | - | Limits the number of digits that can be entered after the decimal point |
| decimalSeparator | string | - | Character used as a decimal separator |
| defaultValue | string | number | - | Uncontrolled component default value |
| description | React.ReactNode | - | Contents of Input.Description component. If not set, description is not displayed. |
| descriptionProps | InputDescriptionProps & DataAttributes | - | Props passed down to the Input.Description component |
| disabled | boolean | - | Sets disabled attribute on the input element |
| error | React.ReactNode | - | Contents of Input.Error component. If not set, error is not displayed. |
| errorProps | InputErrorProps & DataAttributes | - | Props passed down to the Input.Error component |
| fixedDecimalScale | boolean | - | If set, 0s are added after decimalSeparator to match given decimalScale. |
| handlersRef | ForwardedRef | undefined | - | Increment/decrement handlers |
| hideControls | boolean | - | If set, the up/down controls are hidden |
| inputContainer | (children: ReactNode) => ReactNode | - | Input container component |
| inputSize | string | - | size attribute passed down to the input element |
| inputWrapperOrder | ("input" | "label" | "description" | "error")\[] | - | Controls order of the elements |
| isAllowed | (values: NumberFormatValues) => boolean | - | A function to validate the input value. If this function returns false, the onChange will not be called and the input value will not change. |
| label | React.ReactNode | - | Contents of Input.Label component. If not set, label is not displayed. |
| labelProps | InputLabelProps & DataAttributes | - | Props passed down to the Input.Label component |
| leftSection | React.ReactNode | - | Content section displayed on the left side of the input |
| leftSectionPointerEvents | React.CSSProperties\["pointerEvents"] | - | Sets pointer-events styles on the leftSection element |
| leftSectionProps | React.ComponentPropsWithoutRef<"div"> | - | Props passed down to the leftSection element |
| leftSectionWidth | React.CSSProperties\["width"] | - | Left section width, used to set width of the section and input padding-left, by default equals to the input height |
| max | number | - | Maximum possible value |
| min | number | - | Minimum possible value |
| onChange | (value: string | number) => void | - | Called when value changes |
| onValueChange | OnValueChange | - | Called when value changes with react-number-format payload |
| prefix | string | - | Prefix added before the input value |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius, numbers are converted to rem |
| required | boolean | - | Adds required attribute to the input and a red asterisk on the right side of label |
| rightSection | React.ReactNode | - | Content section displayed on the right side of the input |
| rightSectionPointerEvents | React.CSSProperties\["pointerEvents"] | - | Sets pointer-events styles on the rightSection element |
| rightSectionProps | React.ComponentPropsWithoutRef<"div"> | - | Props passed down to the rightSection element |
| rightSectionWidth | React.CSSProperties\["width"] | - | Right section width, used to set width of the section and input padding-right, by default equals to the input height |
| size | MantineSize | (string & {}) | - | Controls input height and horizontal padding |
| startValue | number | - | Value set to the input when increment/decrement buttons are clicked or up/down arrows pressed if the input is empty |
| step | number | - | Number by which value will be incremented/decremented with up/down controls and keyboard arrows |
| stepHoldDelay | number | - | Initial delay in milliseconds before stepping the value. |
| stepHoldInterval | number | ((stepCount: number) => number) | - | Delay before stepping the value. Can be a number of milliseconds or a function that receives the current step count and returns the delay in milliseconds. |
| suffix | string | - | Suffix added after the input value |
| thousandSeparator | string | boolean | - | A character used to separate thousands |
| thousandsGroupStyle | "none" | "thousand" | "lakh" | "wan" | - | Defines the thousand grouping style. |
| trimLeadingZeroesOnBlur | boolean | - | If set, leading zeros are removed on blur. For example, 00100 -> 100 |
| type | "text" | "tel" | "password" | - | Controls input type attribute |
| value | string | number | - | Controlled component value |
| valueIsNumericString | boolean | - | If value is passed as string representation of numbers (unformatted) and number is used in any format props like in prefix or suffix in numeric format and format prop in pattern format then this should be passed as true. |
| withAsterisk | boolean | - | If set, the required asterisk is displayed next to the label. Overrides required prop. Does not add required attribute to the input. |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the error prop is set |
| withKeyboardEvents | boolean | - | If set, up/down keyboard events increment/decrement value |
| wrapperProps | WrapperProps | - | Props passed down to the root element |

#### Styles API

NumberInput component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**NumberInput selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| wrapper | .mantine-NumberInput-wrapper | Root element of the Input |
| input | .mantine-NumberInput-input | Input element |
| section | .mantine-NumberInput-section | Left and right sections |
| root | .mantine-NumberInput-root | Root element |
| label | .mantine-NumberInput-label | Label element |
| required | .mantine-NumberInput-required | Required asterisk element, rendered inside label |
| description | .mantine-NumberInput-description | Description element |
| error | .mantine-NumberInput-error | Error element |
| controls | .mantine-NumberInput-controls | Increment and decrement buttons wrapper |
| control | .mantine-NumberInput-control | Increment and decrement buttons |

**NumberInput CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| controls | --ni-chevron-size | Controls `width` and `height` of the default chevron icon |

**NumberInput data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| control | data-direction | - | - |

### Overlay

Package: @mantine/core
Import: import { Overlay } from '@mantine/core';
Description: Overlays parent element with div element with any color and opacity

## Usage

`Overlay` takes 100% of width and height of parent container or viewport if `fixed` prop is set.
Set `color` and `backgroundOpacity` props to change `Overlay` background-color. Note that `backgroundOpacity` prop
does not change CSS opacity property, it changes background-color. For example, if you set
`color="#000"` and `backgroundOpacity={0.85}` background-color will be `rgba(0, 0, 0, 0.85)`:

#### Example: usage

```tsx
import { useState } from 'react';
import { Button, Overlay, AspectRatio } from '@mantine/core';

function Demo() {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <AspectRatio ratio={16 / 9} maw={400} mx="auto" pos="relative">
        <img
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png"
          alt="Demo"
        />
        {visible && <Overlay color="#000" backgroundOpacity={0.85} />}
      </AspectRatio>
      <Button onClick={() => setVisible((v) => !v)} fullWidth maw={200} mx="auto" mt="xl">
        Toggle overlay
      </Button>
    </>
  );
}
```

## Gradient

Set `gradient` prop to use background-image instead of background-color. When `gradient` prop is set,
`color` and `backgroundOpacity` props are ignored.

#### Example: gradient

```tsx
import { useState } from 'react';
import { Button, Overlay, AspectRatio } from '@mantine/core';

function Demo() {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <AspectRatio ratio={16 / 9} maw={400} mx="auto" pos="relative">
        <img
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
          alt="Demo"
        />
        {visible && (
          <Overlay
            gradient="linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)"
            opacity={0.85}
          />
        )}
      </AspectRatio>
      <Button onClick={() => setVisible((v) => !v)} fullWidth maw={200} mx="auto" mt="xl">
        Toggle overlay
      </Button>
    </>
  );
}
```

## Blur

Set `blur` prop to add `backdrop-filter: blur({value})` styles.
Note that `backdrop-filter` [is not supported in all browsers](https://caniuse.com/css-backdrop-filter).

#### Example: blur

```tsx
import { Overlay, AspectRatio } from '@mantine/core';

function Demo() {
  return (
    <AspectRatio ratio={16 / 9} maw={400} mx="auto" pos="relative">
      <img
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png"
        alt="Demo"
      />
      <Overlay color="#000" backgroundOpacity={0.35} />
    </AspectRatio>
  );
}
```
