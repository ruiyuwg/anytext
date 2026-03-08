## Accessibility

If `PillsInput` is used without label prop, it will not be announced properly by screen reader:

```tsx
import { PillsInput } from '@mantine/core';

// Inaccessible input – screen reader will not announce it properly
function Demo() {
  return (
    <PillsInput>
      <PillsInput.Field />
    </PillsInput>
  );
}
```

Set `aria-label` on the `PillsInput.Field` component to make the input accessible.
In this case label will not be visible, but screen reader will announce it:

```tsx
import { PillsInput } from '@mantine/core';

// Accessible input – it has aria-label
function Demo() {
  return (
    <PillsInput>
      <PillsInput.Field aria-label="Enter tags" />
    </PillsInput>
  );
}
```

If `label` prop is set, the input will be accessible it is not required to set `aria-label`:

```tsx
import { PillsInput } from '@mantine/core';

// Accessible input – it has associated label element
function Demo() {
  return (
    <PillsInput label="Enter tags">
      <PillsInput.Field />
    </PillsInput>
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| description | React.ReactNode | - | Contents of Input.Description component. If not set, description is not displayed. |
| descriptionProps | InputDescriptionProps & DataAttributes | - | Props passed down to the Input.Description component |
| disabled | boolean | - | Sets disabled attribute on the input element |
| error | React.ReactNode | - | Contents of Input.Error component. If not set, error is not displayed. |
| errorProps | InputErrorProps & DataAttributes | - | Props passed down to the Input.Error component |
| inputContainer | (children: ReactNode) => ReactNode | - | Input container component |
| inputSize | string | - | size attribute passed down to the input element |
| inputWrapperOrder | ("input" | "label" | "description" | "error")\[] | - | Controls order of the elements |
| label | React.ReactNode | - | Contents of Input.Label component. If not set, label is not displayed. |
| labelProps | InputLabelProps & DataAttributes | - | Props passed down to the Input.Label component |
| leftSection | React.ReactNode | - | Content section displayed on the left side of the input |
| leftSectionPointerEvents | React.CSSProperties\["pointerEvents"] | - | Sets pointer-events styles on the leftSection element |
| leftSectionProps | React.ComponentPropsWithoutRef<"div"> | - | Props passed down to the leftSection element |
| leftSectionWidth | React.CSSProperties\["width"] | - | Left section width, used to set width of the section and input padding-left, by default equals to the input height |
| pointer | boolean | - | Determines whether the input should have cursor: pointer style |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius, numbers are converted to rem |
| required | boolean | - | Adds required attribute to the input and a red asterisk on the right side of label |
| rightSection | React.ReactNode | - | Content section displayed on the right side of the input |
| rightSectionPointerEvents | React.CSSProperties\["pointerEvents"] | - | Sets pointer-events styles on the rightSection element |
| rightSectionProps | React.ComponentPropsWithoutRef<"div"> | - | Props passed down to the rightSection element |
| rightSectionWidth | React.CSSProperties\["width"] | - | Right section width, used to set width of the section and input padding-right, by default equals to the input height |
| size | MantineSize | (string & {}) | - | Controls input height and horizontal padding |
| withAsterisk | boolean | - | If set, the required asterisk is displayed next to the label. Overrides required prop. Does not add required attribute to the input. |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the error prop is set |
| wrapperProps | WrapperProps | - | Props passed down to the root element |

#### Styles API

PillsInput component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**PillsInput selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| wrapper | .mantine-PillsInput-wrapper | Root element of the Input |
| input | .mantine-PillsInput-input | Input element |
| section | .mantine-PillsInput-section | Left and right sections |
| root | .mantine-PillsInput-root | Root element |
| label | .mantine-PillsInput-label | Label element |
| required | .mantine-PillsInput-required | Required asterisk element, rendered inside label |
| description | .mantine-PillsInput-description | Description element |
| error | .mantine-PillsInput-error | Error element |

**PillsInputfield selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| field | .mantine-PillsInputfield-field | Root element |

**PillsInputfield data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| field | data-type | - | Value of  |
| field | data-disabled | - | - |

### PinInput

Package: @mantine/core
Import: import { PinInput } from '@mantine/core';
Description: Capture pin code or one time password from the user

## Usage

#### Example: configurator

```tsx
import { PinInput } from '@mantine/core';

function Demo() {
  return <PinInput />
}
```

## Regex type

You can use regular expression to validate user input. Characters that do not match given expression
will be disregarded. For example, to create a `PinInput` that will accept only numbers from `0` to `3`,
set `type={/^[0-3]+/}`:

#### Example: regexp

```tsx
import { PinInput } from '@mantine/core';

function Demo() {
  return <PinInput type={/^[0-3]*$/} inputType="tel" inputMode="numeric" />;
}
```

## One time code

Some operating systems expose the last received SMS code to be used by applications like your keyboard.
If the current form input asks for this code, your keyboard adapts and proposes the code as keyboard-suggestion.
Prop `oneTimeCode` makes your input setting `autocomplete="one-time-code"` which allows using that feature.

```tsx
import { PinInput } from '@mantine/core';

function OneTimeCodeInput() {
  return <PinInput oneTimeCode />;
}
```

#### Example: stylesApi

```tsx
import { PinInput } from '@mantine/core';

function Demo() {
  return (
    <PinInput />
  );
}
```
