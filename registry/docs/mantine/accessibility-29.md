## Accessibility

TagsInput provides better accessibility support when used in forms. Make sure to associate the input with a label for better screen reader support.

To set `aria-label` on the clear button, use `clearButtonProps`. Note that it is required
only when `clearable` is set.

```tsx
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      data={[]}
      clearable
      clearButtonProps={{
        'aria-label': 'Clear input',
      }}
    />
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| acceptValueOnBlur | boolean | - | If set, the value typed in by the user but not submitted is accepted when the input is blurred |
| allowDuplicates | boolean | - | If set, duplicate tags are allowed |
| clearButtonProps | InputClearButtonProps | - | Props passed down to the clear button |
| clearable | boolean | - | If set, the clear button is displayed in the right section when the component has value |
| comboboxProps | ComboboxProps | - | Props passed down to Combobox component |
| data | ComboboxStringData | - | Data displayed in the dropdown. Values must be unique. |
| defaultDropdownOpened | boolean | - | Uncontrolled dropdown initial opened state |
| defaultSearchValue | string | - | Default search value |
| defaultValue | string\[] | - | Uncontrolled component default value |
| description | React.ReactNode | - | Contents of Input.Description component. If not set, description is not displayed. |
| descriptionProps | InputDescriptionProps & DataAttributes | - | Props passed down to the Input.Description component |
| disabled | boolean | - | Sets disabled attribute on the input element |
| dropdownOpened | boolean | - | Controlled dropdown opened state |
| error | React.ReactNode | - | Contents of Input.Error component. If not set, error is not displayed. |
| errorProps | InputErrorProps & DataAttributes | - | Props passed down to the Input.Error component |
| filter | OptionsFilter | - | Function based on which items are filtered and sorted |
| hiddenInputProps | React.ComponentPropsWithoutRef<"input"> | - | Props passed down to the hidden input |
| hiddenInputValuesDivider | string | - | Divider used to separate values in the hidden input value attribute |
| inputContainer | (children: ReactNode) => ReactNode | - | Input container component |
| inputSize | string | - | size attribute passed down to the input element |
| inputWrapperOrder | ("input" | "label" | "description" | "error")\[] | - | Controls order of the elements |
| isDuplicate | (value: string, currentValues: string\[]) => boolean | - | Custom function to determine if a tag is duplicate. Accepts tag value and array of current values. By default, checks if the tag exists case-insensitively. |
| label | React.ReactNode | - | Contents of Input.Label component. If not set, label is not displayed. |
| labelProps | InputLabelProps & DataAttributes | - | Props passed down to the Input.Label component |
| leftSection | React.ReactNode | - | Content section displayed on the left side of the input |
| leftSectionPointerEvents | React.CSSProperties\["pointerEvents"] | - | Sets pointer-events styles on the leftSection element |
| leftSectionProps | React.ComponentPropsWithoutRef<"div"> | - | Props passed down to the leftSection element |
| leftSectionWidth | React.CSSProperties\["width"] | - | Left section width, used to set width of the section and input padding-left, by default equals to the input height |
| limit | number | - | Maximum number of options displayed at a time, Infinity by default |
| maxDropdownHeight | string | number | - | max-height of the dropdown, only applicable when withScrollArea prop is true, 250 by default |
| maxTags | number | - | Maximum number of tags |
| onChange | (value: string\[]) => void | - | Called when value changes |
| onClear | () => void | - | Called when the clear button is clicked |
| onDropdownClose | () => void | - | Called when dropdown closes |
| onDropdownOpen | () => void | - | Called when dropdown opens |
| onDuplicate | (value: string) => void | - | Called when user tries to submit a duplicated tag |
| onOptionSubmit | (value: string) => void | - | Called when option is submitted from dropdown with mouse click or Enter key |
| onRemove | (value: string) => void | - | Called when tag is removed |
| onSearchChange | (value: string) => void | - | Called when search changes |
| openOnFocus | boolean | - | If set, the dropdown opens when the input receives focus |
| pointer | boolean | - | Determines whether the input should have cursor: pointer style |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius, numbers are converted to rem |
| renderOption | (input: ComboboxLikeRenderOptionInput) => ReactNode | - | A function to render content of the option, replaces the default content of the option |
| required | boolean | - | Adds required attribute to the input and a red asterisk on the right side of label |
| rightSection | React.ReactNode | - | Content section displayed on the right side of the input |
| rightSectionPointerEvents | React.CSSProperties\["pointerEvents"] | - | Sets pointer-events styles on the rightSection element |
| rightSectionProps | React.ComponentPropsWithoutRef<"div"> | - | Props passed down to the rightSection element |
| rightSectionWidth | React.CSSProperties\["width"] | - | Right section width, used to set width of the section and input padding-right, by default equals to the input height |
| scrollAreaProps | ScrollAreaProps | - | Props passed down to the underlying ScrollArea component in the dropdown |
| searchValue | string | - | Controlled search value |
| selectFirstOptionOnChange | boolean | - | If set, the first option is selected when value changes, false by default |
| selectFirstOptionOnDropdownOpen | boolean | - | If set, the first option is selected when dropdown opens, false by default |
| size | MantineSize | (string & {}) | - | Controls input height and horizontal padding |
| splitChars | string\[] | - | Characters that should trigger tags split, \[','] by default |
| value | string\[] | - | Controlled component value |
| withAsterisk | boolean | - | If set, the required asterisk is displayed next to the label. Overrides required prop. Does not add required attribute to the input. |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the error prop is set |
| withScrollArea | boolean | - | Determines whether the options should be wrapped with ScrollArea.AutoSize, true by default |
| wrapperProps | WrapperProps | - | Props passed down to the root element |

#### Styles API

TagsInput component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**TagsInput selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| wrapper | .mantine-TagsInput-wrapper | Root element of the Input |
| input | .mantine-TagsInput-input | Input element |
| section | .mantine-TagsInput-section | Left and right sections |
| root | .mantine-TagsInput-root | Root element |
| label | .mantine-TagsInput-label | Label element |
| required | .mantine-TagsInput-required | Required asterisk element, rendered inside label |
| description | .mantine-TagsInput-description | Description element |
| error | .mantine-TagsInput-error | Error element |
| pill | .mantine-TagsInput-pill | Value pill |
| inputField | .mantine-TagsInput-inputField | Input field |
| pillsList | .mantine-TagsInput-pillsList | List of pills, also contains input field |

**TagsInput data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| option | data-combobox-active | Options was activated by keyboard | - |
| option | data-combobox-disabled | Option is disabled | - |

### TextInput

Package: @mantine/core
Import: import { TextInput } from '@mantine/core';
Description: Capture string input from user

## Usage

TextInput component supports [Input](https://mantine.dev/core/input) and [Input.Wrapper](https://mantine.dev/core/input) components features and all input element props. TextInput documentation does not include all features supported by the component – see [Input](https://mantine.dev/core/input) documentation to learn about all available features.

#### Example: usage

```tsx
import { TextInput } from '@mantine/core';


function Demo() {
  return (
    <TextInput
      
      placeholder="Input placeholder"
    />
  );
}
```

## Controlled

```tsx
import { useState } from 'react';
import { TextInput } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('');
  return (
    <TextInput
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
    />
  );
}
```

## Input sections

TextInput supports left and right sections to display icons, buttons or other content alongside the input.

#### Example: sections

```tsx
import { TextInput } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  const icon = <IconAt size={16} />;
  return (
    <>
      <TextInput
        leftSectionPointerEvents="none"
        leftSection={icon}
        label="Your email"
        placeholder="Your email"
      />
      <TextInput
        mt="md"
        rightSectionPointerEvents="none"
        rightSection={icon}
        label="Your email"
        placeholder="Your email"
      />
    </>
  );
}
```

## Error state

#### Example: error

```tsx
import { TextInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <TextInput label="Boolean error" placeholder="Boolean error" error />
      <TextInput
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
import { TextInput } from '@mantine/core';

function Demo() {
  return <TextInput disabled label="Disabled input" placeholder="Disabled input" />;
}
```

#### Example: stylesApi

```tsx
import { IconAt } from '@tabler/icons-react';
import { TextInput } from '@mantine/core';

function Demo() {
  return (
    <TextInput
      label="Label"
      placeholder="TextInput"
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
import { TextInput } from '@mantine/core';

function Demo() {
  const ref = useRef<HTMLInputElement>(null);
  return <TextInput ref={ref} />;
}
```
