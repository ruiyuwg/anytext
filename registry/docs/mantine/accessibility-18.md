## Accessibility

MultiSelect provides better accessibility support when used in forms. Make sure to associate the input with a label for better screen reader support.

To set `aria-label` on the clear button, use `clearButtonProps`. Note that it is required
only when `clearable` is set.

```tsx
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
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
| checkIconPosition | "left" | "right" | - | Position of the check icon relative to the option label |
| chevronColor | MantineColor | - | Controls color of the default chevron |
| clearButtonProps | InputClearButtonProps | - | Props passed down to the clear button |
| clearSearchOnChange | boolean | - | Clear search value when item is selected |
| clearable | boolean | - | If set, the clear button is displayed in the right section when the component has value |
| comboboxProps | ComboboxProps | - | Props passed down to Combobox component |
| data | ComboboxData | - | Data used to generate options. Values must be unique, otherwise an error will be thrown and component will not render. |
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
| hidePickedOptions | boolean | - | If set, picked options are removed from the options list |
| inputContainer | (children: ReactNode) => ReactNode | - | Input container component |
| inputSize | string | - | size attribute passed down to the input element |
| inputWrapperOrder | ("input" | "label" | "description" | "error")\[] | - | Controls order of the elements |
| label | React.ReactNode | - | Contents of Input.Label component. If not set, label is not displayed. |
| labelProps | InputLabelProps & DataAttributes | - | Props passed down to the Input.Label component |
| leftSection | React.ReactNode | - | Content section displayed on the left side of the input |
| leftSectionPointerEvents | React.CSSProperties\["pointerEvents"] | - | Sets pointer-events styles on the leftSection element |
| leftSectionProps | React.ComponentPropsWithoutRef<"div"> | - | Props passed down to the leftSection element |
| leftSectionWidth | React.CSSProperties\["width"] | - | Left section width, used to set width of the section and input padding-left, by default equals to the input height |
| limit | number | - | Maximum number of options displayed at a time, Infinity by default |
| maxDropdownHeight | string | number | - | max-height of the dropdown, only applicable when withScrollArea prop is true, 250 by default |
| maxValues | number | - | Maximum number of values, no limit if not set |
| nothingFoundMessage | React.ReactNode | - | Message displayed when no option matches the current search query while the searchable prop is set or there is no data |
| onChange | (value: string\[]) => void | - | Called when value changes |
| onClear | () => void | - | Called when the clear button is clicked |
| onDropdownClose | () => void | - | Called when dropdown closes |
| onDropdownOpen | () => void | - | Called when dropdown opens |
| onOptionSubmit | (value: string) => void | - | Called when option is submitted from dropdown with mouse click or Enter key |
| onRemove | (value: string) => void | - | Called with value of the removed item |
| onSearchChange | (value: string) => void | - | Called when search changes |
| openOnFocus | boolean | - | If set, the dropdown opens when the input receives focus |
| pointer | boolean | - | Determines whether the input should have cursor: pointer style |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius, numbers are converted to rem |
| renderOption | (item: ComboboxLikeRenderOptionInput) => ReactNode | - | A function to render content of the option, replaces the default content of the option |
| required | boolean | - | Adds required attribute to the input and a red asterisk on the right side of label |
| rightSection | React.ReactNode | - | Content section displayed on the right side of the input |
| rightSectionPointerEvents | React.CSSProperties\["pointerEvents"] | - | Sets pointer-events styles on the rightSection element |
| rightSectionProps | React.ComponentPropsWithoutRef<"div"> | - | Props passed down to the rightSection element |
| rightSectionWidth | React.CSSProperties\["width"] | - | Right section width, used to set width of the section and input padding-right, by default equals to the input height |
| scrollAreaProps | ScrollAreaProps | - | Props passed down to the underlying ScrollArea component in the dropdown |
| searchValue | string | - | Controlled search value |
| searchable | boolean | - | Allows searching |
| selectFirstOptionOnChange | boolean | - | If set, the first option is selected when value changes, false by default |
| selectFirstOptionOnDropdownOpen | boolean | - | If set, the first option is selected when dropdown opens, false by default |
| size | MantineSize | (string & {}) | - | Controls input height and horizontal padding |
| value | string\[] | - | Controlled component value |
| withAlignedLabels | boolean | - | If set, unchecked labels are aligned with checked ones |
| withAsterisk | boolean | - | If set, the required asterisk is displayed next to the label. Overrides required prop. Does not add required attribute to the input. |
| withCheckIcon | boolean | - | If set, the check icon is displayed near the selected option label |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the error prop is set |
| withScrollArea | boolean | - | Determines whether the options should be wrapped with ScrollArea.AutoSize, true by default |
| wrapperProps | WrapperProps | - | Props passed down to the root element |

#### Styles API

MultiSelect component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**MultiSelect selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| wrapper | .mantine-MultiSelect-wrapper | Root element of the Input |
| input | .mantine-MultiSelect-input | Input element |
| section | .mantine-MultiSelect-section | Left and right sections |
| root | .mantine-MultiSelect-root | Root element |
| label | .mantine-MultiSelect-label | Label element |
| required | .mantine-MultiSelect-required | Required asterisk element, rendered inside label |
| description | .mantine-MultiSelect-description | Description element |
| error | .mantine-MultiSelect-error | Error element |
| pill | .mantine-MultiSelect-pill | Value pill |
| inputField | .mantine-MultiSelect-inputField | Input field |
| pillsList | .mantine-MultiSelect-pillsList | List of pills, also contains input field |

**MultiSelect data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| option | data-combobox-selected | Option is selected | - |
| option | data-combobox-active | Options was activated by keyboard | - |
| option | data-combobox-disabled | Option is disabled | - |

### NativeSelect

Package: @mantine/core
Import: import { NativeSelect } from '@mantine/core';
Description: Native select element based on Input

## Usage

NativeSelect component supports [Input](https://mantine.dev/core/input) and [Input.Wrapper](https://mantine.dev/core/input) components features and all select element props. NativeSelect documentation does not include all features supported by the component – see [Input](https://mantine.dev/core/input) documentation to learn about all available features.

#### Example: usage

```tsx
import { NativeSelect } from '@mantine/core';

function Demo() {
  return <NativeSelect data={['React', 'Angular', 'Vue']} />;
}
```

## Controlled

```tsx
import { useState } from 'react';
import { NativeSelect } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('');

  return (
    <NativeSelect
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      data={['React', 'Angular', 'Svelte', 'Vue']}
    />
  );
}
```
