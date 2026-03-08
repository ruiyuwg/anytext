## Accessibility

Select provides better accessibility support when used in forms. Make sure to associate the input with a label for better screen reader support.

To set `aria-label` on the clear button, use `clearButtonProps`. Note that it is required
only when `clearable` is set.

```tsx
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
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
| allowDeselect | boolean | - | If set, it becomes possible to deselect value by clicking on the selected option |
| autoSelectOnBlur | boolean | - | If set, the highlighted option is selected when the input loses focus |
| checkIconPosition | "left" | "right" | - | Position of the check icon relative to the option label |
| chevronColor | MantineColor | - | Controls color of the default chevron, by default depends on the color scheme |
| clearButtonProps | InputClearButtonProps | - | Props passed down to the clear button |
| clearable | boolean | - | If set, the clear button is displayed in the right section when the component has value |
| comboboxProps | ComboboxProps | - | Props passed down to Combobox component |
| data | ComboboxData | - | Data used to generate options. Values must be unique, otherwise an error will be thrown and component will not render. |
| defaultDropdownOpened | boolean | - | Uncontrolled dropdown initial opened state |
| defaultSearchValue | string | - | Default search value |
| defaultValue | string | null | - | Uncontrolled component default value |
| description | React.ReactNode | - | Contents of Input.Description component. If not set, description is not displayed. |
| descriptionProps | InputDescriptionProps & DataAttributes | - | Props passed down to the Input.Description component |
| disabled | boolean | - | Sets disabled attribute on the input element |
| dropdownOpened | boolean | - | Controlled dropdown opened state |
| error | React.ReactNode | - | Contents of Input.Error component. If not set, error is not displayed. |
| errorProps | InputErrorProps & DataAttributes | - | Props passed down to the Input.Error component |
| filter | OptionsFilter | - | Function based on which items are filtered and sorted |
| hiddenInputProps | React.ComponentPropsWithoutRef<"input"> | - | Props passed down to the hidden input |
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
| nothingFoundMessage | React.ReactNode | - | Message displayed when no option matches the current search query when the searchable prop is set or there is no data |
| onChange | (value: string | null, option: ComboboxItem) => void | - | Called when value changes |
| onClear | () => void | - | Called when the clear button is clicked |
| onDropdownClose | () => void | - | Called when dropdown closes |
| onDropdownOpen | () => void | - | Called when dropdown opens |
| onOptionSubmit | (value: string) => void | - | Called when option is submitted from dropdown with mouse click or Enter key |
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
| searchable | boolean | - | Determines whether the select should be searchable |
| selectFirstOptionOnChange | boolean | - | If set, the first option is selected when value changes, false by default |
| selectFirstOptionOnDropdownOpen | boolean | - | If set, the first option is selected when dropdown opens, false by default |
| size | MantineSize | (string & {}) | - | Controls input height and horizontal padding |
| value | string | null | - | Controlled component value |
| withAlignedLabels | boolean | - | If set, unchecked labels are aligned with the checked one |
| withAsterisk | boolean | - | If set, the required asterisk is displayed next to the label. Overrides required prop. Does not add required attribute to the input. |
| withCheckIcon | boolean | - | If set, the check icon is displayed near the selected option label |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the error prop is set |
| withScrollArea | boolean | - | Determines whether the options should be wrapped with ScrollArea.AutoSize, true by default |
| wrapperProps | WrapperProps | - | Props passed down to the root element |

#### Styles API

Select component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Select selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| wrapper | .mantine-Select-wrapper | Root element of the Input |
| input | .mantine-Select-input | Input element |
| section | .mantine-Select-section | Left and right sections |
| root | .mantine-Select-root | Root element |
| label | .mantine-Select-label | Label element |
| required | .mantine-Select-required | Required asterisk element, rendered inside label |
| description | .mantine-Select-description | Description element |
| error | .mantine-Select-error | Error element |

**Select data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| option | data-combobox-selected | Option is selected | - |
| option | data-combobox-active | Options was activated by keyboard | - |
| option | data-combobox-disabled | Option is disabled | - |

### SemiCircleProgress

Package: @mantine/core
Import: import { SemiCircleProgress } from '@mantine/core';
Description: Represent progress with semi circle diagram

## Usage

#### Example: usage

```tsx
import { SemiCircleProgress } from '@mantine/core';


function Demo() {
  return (
    <SemiCircleProgress
      
      label="Label"
    />
  );
}
```

## Change empty segment color

Use `emptySegmentColor` prop to change color of empty segment,
it accepts key of `theme.colors` or any valid CSS color value:

#### Example: emptySegmentColor

```tsx
import { SemiCircleProgress } from '@mantine/core';

function Demo() {
  return <SemiCircleProgress value={30} emptySegmentColor="var(--mantine-color-dimmed)" />;
}
```

## Change label position

By default, the label is displayed at the bottom of the component,
you can change its position to `center` by using `labelPosition` prop:

#### Example: labelPosition

```tsx
import { SemiCircleProgress } from '@mantine/core';

function Demo() {
  return (
    <>
      <SemiCircleProgress value={30} label="Bottom" mb="xl" />
      <SemiCircleProgress value={30} label="Center" labelPosition="center" />
    </>
  );
}
```
