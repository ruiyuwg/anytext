## Accessibility

Autocomplete provides better accessibility support when used in forms. Make sure to associate the input with a label for better screen reader support.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autoSelectOnBlur | boolean | - | If set, the highlighted option is selected when the input loses focus |
| clearButtonProps | InputClearButtonProps | - | Props passed to the clear button |
| clearable | boolean | - | If set, the clear button is displayed when the component has a value |
| comboboxProps | ComboboxProps | - | Props passed down to Combobox component |
| data | ComboboxStringData | - | Data used to display options. Values must be unique. |
| defaultDropdownOpened | boolean | - | Uncontrolled dropdown initial opened state |
| defaultValue | string | - | Default value for uncontrolled component |
| description | React.ReactNode | - | Contents of Input.Description component. If not set, description is not displayed. |
| descriptionProps | InputDescriptionProps & DataAttributes | - | Props passed down to the Input.Description component |
| disabled | boolean | - | Sets disabled attribute on the input element |
| dropdownOpened | boolean | - | Controlled dropdown opened state |
| error | React.ReactNode | - | Contents of Input.Error component. If not set, error is not displayed. |
| errorProps | InputErrorProps & DataAttributes | - | Props passed down to the Input.Error component |
| filter | OptionsFilter | - | Function based on which items are filtered and sorted |
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
| onChange | (value: string) => void | - | Called when value changes |
| onClear | () => void | - | Called when the clear button is clicked |
| onDropdownClose | () => void | - | Called when dropdown closes |
| onDropdownOpen | () => void | - | Called when dropdown opens |
| onOptionSubmit | (value: string) => void | - | Called when option is submitted from dropdown with mouse click or Enter key |
| openOnFocus | boolean | - | If set, the dropdown opens when the input receives focus |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius, numbers are converted to rem |
| renderOption | RenderAutocompleteOption | - | Function to render custom option content |
| required | boolean | - | Adds required attribute to the input and a red asterisk on the right side of label |
| rightSection | React.ReactNode | - | Content section displayed on the right side of the input |
| rightSectionPointerEvents | React.CSSProperties\["pointerEvents"] | - | Sets pointer-events styles on the rightSection element |
| rightSectionProps | React.ComponentPropsWithoutRef<"div"> | - | Props passed down to the rightSection element |
| rightSectionWidth | React.CSSProperties\["width"] | - | Right section width, used to set width of the section and input padding-right, by default equals to the input height |
| scrollAreaProps | ScrollAreaProps | - | Props passed to the underlying ScrollArea component in the dropdown |
| selectFirstOptionOnChange | boolean | - | If set, the first option is selected when value changes, false by default |
| selectFirstOptionOnDropdownOpen | boolean | - | If set, the first option is selected when dropdown opens, false by default |
| size | MantineSize | (string & {}) | - | Controls input height and horizontal padding |
| value | string | - | Controlled component value |
| withAsterisk | boolean | - | If set, the required asterisk is displayed next to the label. Overrides required prop. Does not add required attribute to the input. |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the error prop is set |
| withScrollArea | boolean | - | Determines whether the options should be wrapped with ScrollArea.AutoSize, true by default |
| wrapperProps | WrapperProps | - | Props passed down to the root element |

#### Styles API

Autocomplete component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Autocomplete selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| wrapper | .mantine-Autocomplete-wrapper | Root element of the Input |
| input | .mantine-Autocomplete-input | Input element |
| section | .mantine-Autocomplete-section | Left and right sections |
| root | .mantine-Autocomplete-root | Root element |
| label | .mantine-Autocomplete-label | Label element |
| required | .mantine-Autocomplete-required | Required asterisk element, rendered inside label |
| description | .mantine-Autocomplete-description | Description element |
| error | .mantine-Autocomplete-error | Error element |

**Autocomplete data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| option | data-combobox-selected | Option is selected | - |
| option | data-combobox-active | Options was activated by keyboard | - |
| option | data-combobox-disabled | Option is disabled | - |

### Avatar

Package: @mantine/core
Import: import { Avatar } from '@mantine/core';
Description: Display user profile image, initials or fallback icon

## Usage

#### Example: usage

```tsx
import { Avatar } from '@mantine/core';
import { IconStar } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      {/* With image */}
      <Avatar src="avatar.png" alt="it's me" />

      {/* Default placeholder */}
      <Avatar radius="xl" />

      {/* Letters with xl radius */}
      <Avatar color="cyan" radius="xl">MK</Avatar>

      {/* Custom placeholder icon */}
      <Avatar color="blue" radius="sm">
        <IconStar size={20} />
      </Avatar>
    </>
  );
}
```

## Initials

To display initials instead of the default placeholder, set `name` prop
to the name of the person, for example, `name="John Doe"`. If the name
is set, you can use `color="initials"` to generate color based on the name:

#### Example: initials

```tsx
import { Avatar, Group } from '@mantine/core';

${namesCode}

function Demo() {
  const avatars = names.map((name) => <Avatar key={name} name={name} color="initials" />);
  return <Group>{avatars}</Group>;
}
```

## Allowed initials colors

By default, all colors from the default theme are allowed for initials, you can restrict them
by providing `allowedInitialsColors` prop with an array of colors. Note that the default colors
array does not include custom colors defined in the theme, you need to provide them manually
if needed.

#### Example: allowedColors

```tsx
import { Avatar, Group } from '@mantine/core';

${namesCode}

function Demo() {
  const avatars = names.map((name) => (
    <Avatar key={name} name={name} color="initials" allowedInitialsColors={['blue', 'red']} />
  ));
  return <Group>{avatars}</Group>;
}
```

## Placeholder

If the image cannot be loaded or not provided, `Avatar` will display a placeholder instead. By default,
placeholder is an icon, but it can be changed to any React node:

#### Example: placeholders

```tsx
import { Avatar } from '@mantine/core';
import { IconStar } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      {/* Default placeholder */}
      <Avatar src={null} alt="no image here" />

      {/* Default placeholder with custom color */}
      <Avatar src={null} alt="no image here" color="indigo" />

      {/* Placeholder with initials */}
      <Avatar src={null} alt="Vitaly Rtishchev" color="red">VR</Avatar>

      {/* Placeholder with custom icon */}
      <Avatar color="blue" radius="xl">
        <IconStar size={20} />
      </Avatar>
    </>
  );
}
```

## Variants

#### Example: configurator

```tsx
import { Avatar } from '@mantine/core';

function Demo() {
  return <Avatar />;
}
```

## Avatar.Group

`Avatar.Group` component combines multiple avatars into a stack:

#### Example: group

```tsx
import { Avatar } from '@mantine/core';

function Demo() {
  return (
    <Avatar.Group>
      <Avatar src="image.png" />
      <Avatar src="image.png" />
      <Avatar src="image.png" />
      <Avatar>+5</Avatar>
    </Avatar.Group>
  );
}
```

Note that you must not wrap child `Avatar` components with any additional elements,
but you can use wrap `Avatar` with components that do not render any HTML elements
in the current tree, for example [Tooltip](https://mantine.dev/core/tooltip).

```tsx
import { Avatar } from '@mantine/core';

// Will not work correctly
function Demo() {
  return (
    <Avatar.Group spacing="sm">
      <div>
        <Avatar src="image.png" radius="xl" />
      </div>
      <Avatar src="image.png" radius="xl" />
      <Avatar src="image.png" radius="xl" />
      <Avatar radius="xl">+5</Avatar>
    </Avatar.Group>
  );
}
```

Example of usage with [Tooltip](https://mantine.dev/core/tooltip/):

#### Example: groupTooltip

```tsx
import { Avatar, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip.Group openDelay={300} closeDelay={100}>
      <Avatar.Group spacing="sm">
        <Tooltip label="Salazar Troop" withArrow>
          <Avatar src="image.png" radius="xl" />
        </Tooltip>
        <Tooltip label="Bandit Crimes" withArrow>
          <Avatar src="image.png" radius="xl" />
        </Tooltip>
        <Tooltip label="Jane Rata" withArrow>
          <Avatar src="image.png" radius="xl" />
        </Tooltip>
        <Tooltip
          withArrow
          label={
            <>
              <div>John Outcast</div>
              <div>Levi Capitan</div>
            </>
          }
        >
          <Avatar radius="xl">+2</Avatar>
        </Tooltip>
      </Avatar.Group>
    </Tooltip.Group>
  );
}
```

## Polymorphic component

Avatar is a polymorphic component – its default root element is div, but it can be changed to any other element or component with component prop:

```tsx
import { Avatar } from '@mantine/core';

function Demo() {
  return <Avatar component="button" />;
}
```

You can also use components in component prop, for example, Next.js Link:

```tsx
import Link from 'next/link';
import { Avatar } from '@mantine/core';

function Demo() {
  return <Avatar component={Link} href="/" />;
}
```

**Polymorphic components with TypeScript**

Note that polymorphic components props types are different from regular components – they do not extend HTML element props of the default element. For example, AvatarProps does not extend React.ComponentPropsWithoutRef<'div'> although div is the default element.

If you want to create a wrapper for a polymorphic component that is not polymorphic (does not support component prop), then your component props interface should extend HTML element props.

Example using `Avatar` as a link:

#### Example: link

```tsx
import { Avatar } from '@mantine/core';

function Demo() {
  return (
    <Avatar
      component="a"
      href="https://github.com/rtivital"
      target="_blank"
      src="avatar.png"
      alt="it's me"
    />
  );
}
```
