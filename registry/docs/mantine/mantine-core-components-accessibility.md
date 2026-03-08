## Accessibility

PasswordInput provides better accessibility support when used in forms. Make sure to associate the input with a label for better screen reader support.

To set `aria-label` on the visibility toggle button, use `visibilityToggleButtonProps` prop:

```tsx
import { PasswordInput } from '@mantine/core';

function Demo() {
  return (
    <PasswordInput
      label="Password"
      visibilityToggleButtonProps={{
        'aria-label': 'Toggle password visibility',
      }}
    />
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| defaultVisible | boolean | - | If set, the input value is visible by default |
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
| onVisibilityChange | (visible: boolean) => void | - | Called when visibility changes |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius, numbers are converted to rem |
| required | boolean | - | Adds required attribute to the input and a red asterisk on the right side of label |
| rightSection | React.ReactNode | - | Content section displayed on the right side of the input |
| rightSectionPointerEvents | React.CSSProperties\["pointerEvents"] | - | Sets pointer-events styles on the rightSection element |
| rightSectionProps | React.ComponentPropsWithoutRef<"div"> | - | Props passed down to the rightSection element |
| rightSectionWidth | React.CSSProperties\["width"] | - | Right section width, used to set width of the section and input padding-right, by default equals to the input height |
| size | MantineSize | (string & {}) | - | Controls input height and horizontal padding |
| visibilityToggleButtonProps | Record\<string, any> | - | Props passed down to the visibility toggle button |
| visibilityToggleIcon | FC<{ reveal: boolean; }> | - | A component to replace the visibility toggle icon |
| visible | boolean | - | If set, the input value is visible visible |
| withAsterisk | boolean | - | If set, the required asterisk is displayed next to the label. Overrides required prop. Does not add required attribute to the input. |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the error prop is set |
| wrapperProps | WrapperProps | - | Props passed down to the root element |

#### Styles API

PasswordInput component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**PasswordInput selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| wrapper | .mantine-PasswordInput-wrapper | Root element of the Input |
| input | .mantine-PasswordInput-input | Input element |
| section | .mantine-PasswordInput-section | Left and right sections |
| root | .mantine-PasswordInput-root | Root element |
| label | .mantine-PasswordInput-label | Label element |
| required | .mantine-PasswordInput-required | Required asterisk element, rendered inside label |
| description | .mantine-PasswordInput-description | Description element |
| error | .mantine-PasswordInput-error | Error element |
| innerInput | .mantine-PasswordInput-innerInput | Actual input element |
| visibilityToggle | .mantine-PasswordInput-visibilityToggle | Visibility toggle button |

**PasswordInput CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --psi-button-size | Controls visibility toggle button `width` and `height` |
| root | --psi-icon-size | Controls visibility toggle icon `width` and `height` |

### Pill

Package: @mantine/core
Import: import { Pill } from '@mantine/core';
Description: Removable and non-removable tags

## Usage

#### Example: usage

```tsx
import { Pill } from '@mantine/core';

function Demo() {
  return <Pill>React</Pill>;
}
```
