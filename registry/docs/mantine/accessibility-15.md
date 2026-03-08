## Accessibility

JsonInput provides better accessibility support when used in forms. Make sure to associate the input with a label for better screen reader support.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autosize | boolean | - | If set, enables textarea height growing with its content |
| defaultValue | string | - | Uncontrolled component default value |
| description | React.ReactNode | - | Contents of Input.Description component. If not set, description is not displayed. |
| descriptionProps | InputDescriptionProps & DataAttributes | - | Props passed down to the Input.Description component |
| deserialize | ((text: string, reviver?: ((this: any, key: string, value: any) => any)) => any) | undefined | - | Function to deserialize string value, used for value formatting and input JSON validation, must throw error if string cannot be processed |
| disabled | boolean | - | Sets disabled attribute on the input element |
| error | React.ReactNode | - | Contents of Input.Error component. If not set, error is not displayed. |
| errorProps | InputErrorProps & DataAttributes | - | Props passed down to the Input.Error component |
| formatOnBlur | boolean | - | Determines whether the value should be formatted on blur |
| inputContainer | (children: ReactNode) => ReactNode | - | Input container component |
| inputSize | string | - | size attribute passed down to the input element |
| inputWrapperOrder | ("input" | "label" | "description" | "error")\[] | - | Controls order of the elements |
| label | React.ReactNode | - | Contents of Input.Label component. If not set, label is not displayed. |
| labelProps | InputLabelProps & DataAttributes | - | Props passed down to the Input.Label component |
| leftSection | React.ReactNode | - | Content section displayed on the left side of the input |
| leftSectionPointerEvents | React.CSSProperties\["pointerEvents"] | - | Sets pointer-events styles on the leftSection element |
| leftSectionProps | React.ComponentPropsWithoutRef<"div"> | - | Props passed down to the leftSection element |
| leftSectionWidth | React.CSSProperties\["width"] | - | Left section width, used to set width of the section and input padding-left, by default equals to the input height |
| maxRows | number | - | Maximum rows for autosize textarea to grow, ignored if autosize prop is not set |
| minRows | number | - | Minimum rows of autosize textarea, ignored if autosize prop is not set |
| onChange | (value: string) => void | - | Called when value changes |
| pointer | boolean | - | Determines whether the input should have cursor: pointer style |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius, numbers are converted to rem |
| required | boolean | - | Adds required attribute to the input and a red asterisk on the right side of label |
| resize | Resize | - | Controls resize CSS property |
| rightSection | React.ReactNode | - | Content section displayed on the right side of the input |
| rightSectionPointerEvents | React.CSSProperties\["pointerEvents"] | - | Sets pointer-events styles on the rightSection element |
| rightSectionProps | React.ComponentPropsWithoutRef<"div"> | - | Props passed down to the rightSection element |
| rightSectionWidth | React.CSSProperties\["width"] | - | Right section width, used to set width of the section and input padding-right, by default equals to the input height |
| serialize | { (value: any, replacer?: ((this: any, key: string, value: any) => any), space?: string | number | undefined): string; (value: any, replacer?: (string | number)\[] | null | undefined, space?: string | ... 1 more ... | undefined): string; } | undefined | - | Function to serialize value into a string, used for value formatting |
| size | MantineSize | (string & {}) | - | Controls input height and horizontal padding |
| validationError | React.ReactNode | - | Error message displayed when value is not valid JSON |
| value | string | - | Controlled component value |
| withAsterisk | boolean | - | If set, the required asterisk is displayed next to the label. Overrides required prop. Does not add required attribute to the input. |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the error prop is set |
| wrapperProps | WrapperProps | - | Props passed down to the root element |

#### Styles API

JsonInput component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**JsonInput selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| wrapper | .mantine-JsonInput-wrapper | Root element of the Input |
| input | .mantine-JsonInput-input | Input element |
| section | .mantine-JsonInput-section | Left and right sections |
| root | .mantine-JsonInput-root | Root element |
| label | .mantine-JsonInput-label | Label element |
| required | .mantine-JsonInput-required | Required asterisk element, rendered inside label |
| description | .mantine-JsonInput-description | Description element |
| error | .mantine-JsonInput-error | Error element |

### Kbd

Package: @mantine/core
Import: import { Kbd } from '@mantine/core';
Description: Display keyboard key

## Usage

## Size

#### Example: size

```tsx
import { Kbd } from '@mantine/core';

function Demo() {
  return <Kbd>Shift</Kbd>;
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | number | MantineSize | (string & {}) | - | Controls font-size and padding |

#### Styles API

Kbd component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Kbd selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Kbd-root | Root element |

**Kbd CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --kbd-fz | Controls `font-size` |

### List

Package: @mantine/core
Import: import { List } from '@mantine/core';
Description: Display ordered or unordered list

## Usage

#### Example: configurator

```tsx
import { List } from '@mantine/core';

function Demo() {
  return (
    <List>
      <List.Item>Clone or download repository from GitHub</List.Item>
      <List.Item>Install dependencies with yarn</List.Item>
      <List.Item>To start development server run npm start command</List.Item>
      <List.Item>Run tests to make sure your changes do not break the build</List.Item>
      <List.Item>Submit a pull request once you are done</List.Item>
    </List>
  );
}
```

## With icons

You can replace list bullets with icon. To do so provide following props:

- `icon` on List component will be used as default icon for all list elements
- `icon` on List.Item component will override context icon from List
- `spacing` – spacing between list items from theme or any valid CSS value to set spacing, defaults to `0`
- `center` – center item content with icon
- `size` – set font size from theme

#### Example: icon

```tsx
import { List, ThemeIcon } from '@mantine/core';
import { IconCircleCheck, IconCircleDashed } from '@tabler/icons-react';

function Demo() {
  return (
    <List
      spacing="xs"
      size="sm"
      center
      icon={
        <ThemeIcon color="teal" size={24} radius="xl">
          <IconCircleCheck size={16} />
        </ThemeIcon>
      }
    >
      <List.Item>Clone or download repository from GitHub</List.Item>
      <List.Item>Install dependencies with yarn</List.Item>
      <List.Item>To start development server run npm start command</List.Item>
      <List.Item>Run tests to make sure your changes do not break the build</List.Item>
      <List.Item
        icon={
          <ThemeIcon color="blue" size={24} radius="xl">
            <IconCircleDashed size={16} />
          </ThemeIcon>
        }
      >
        Submit a pull request once you are done
      </List.Item>
    </List>
  );
}
```
