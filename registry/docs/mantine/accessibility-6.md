## Accessibility

Set `aria-label` or `label` prop to make the checkbox accessible:

```tsx
import { Checkbox } from '@mantine/core';

// Not ok, input is not labeled
function Bad() {
  return <Checkbox />;
}

// Ok, input is labelled by aria-label
function GoodAriaLabel() {
  return <Checkbox aria-label="My checkbox" />;
}

// Ok, input is labelled by label element
function GoodLabel() {
  return <Checkbox label="My checkbox" />;
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autoContrast | boolean | - | If set, adjusts text color based on background color for filled variant |
| color | MantineColor | - | Key of theme.colors or any valid CSS color to set input background color in checked state |
| description | React.ReactNode | - | Description displayed below the label |
| error | React.ReactNode | - | Error message displayed below the label |
| icon | FC<{ indeterminate: boolean; className: string; }> | undefined | - | Icon displayed when checkbox is in checked or indeterminate state |
| iconColor | MantineColor | - | Key of theme.colors or any valid CSS color to set icon color. By default, depends on theme.autoContrast. |
| id | string | - | Unique input id |
| indeterminate | boolean | - | Indeterminate state of the checkbox. If set, checked prop is ignored. |
| label | React.ReactNode | - | label associated with the checkbox |
| labelPosition | "left" | "right" | - | Position of the label relative to the input |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius |
| rootRef | ForwardedRef | - | Root element ref |
| size | MantineSize | (string & {}) | - | Controls size of the component |
| wrapperProps | Omit\<DetailedHTMLProps\<HTMLAttributes, HTMLDivElement>, "ref"> & DataAttributes | - | Props passed down to the root element |

#### Styles API

Checkbox component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Checkbox selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Checkbox-root | Root element |
| input | .mantine-Checkbox-input | Input element (`input[type="checkbox"]`) |
| icon | .mantine-Checkbox-icon | Checkbox icon, used to display checkmark and indeterminate state icon |
| inner | .mantine-Checkbox-inner | Wrapper for `icon` and `input` |
| body | .mantine-Checkbox-body | Input body, contains all other elements |
| labelWrapper | .mantine-Checkbox-labelWrapper | Contains `label`, `description` and `error` |
| label | .mantine-Checkbox-label | Label element |
| description | .mantine-Checkbox-description | Description displayed below the label |
| error | .mantine-Checkbox-error | Error message displayed below the label |

**Checkbox CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --checkbox-color | Controls checked checkbox `background-color` |
| root | --checkbox-radius | Controls checkbox `border-radius` |
| root | --checkbox-size | Controls checkbox `width` and `height` |
| root | --checkbox-icon-color | Controls checkbox icon `color` |

**Checkbox data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-checked | - | - |
| input | data-error | - | - |
| input | data-indeterminate | - | - |
| inner | data-label-position | - | Value of  |

**Checkbox.Group selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-CheckboxGroup-root | Root element |
| label | .mantine-CheckboxGroup-label | Label element |
| required | .mantine-CheckboxGroup-required | Required asterisk element, rendered inside label |
| description | .mantine-CheckboxGroup-description | Description element |
| error | .mantine-CheckboxGroup-error | Error element |

**Checkbox.Indicator selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| indicator | .mantine-CheckboxIndicator-indicator | Root element |
| icon | .mantine-CheckboxIndicator-icon | Checkbox icon |

**Checkbox.Indicator CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| indicator | --checkbox-color | Controls checked checkbox `background-color` |
| indicator | --checkbox-radius | Controls checkbox `border-radius` |
| indicator | --checkbox-size | Controls checkbox `width` and `height` |
| indicator | --checkbox-icon-color | Controls checkbox icon `color` |

**Checkbox.Indicator data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| indicator | data-checked | - | - |
| indicator | data-disabled | - | - |

**Checkbox.Card selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| card | .mantine-CheckboxCard-card | Root element |

**Checkbox.Card CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| card | --card-radius | Controls card `border-radius` |

**Checkbox.Card data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| card | data-checked | - | - |
| card | data-with-border | - | - |

### Chip

Package: @mantine/core
Import: import { Chip } from '@mantine/core';
Description: Pick one or multiple values with inline controls

## Usage

#### Example: configurator

```tsx
import { Chip } from '@mantine/core';

function Demo() {
  return <Chip defaultChecked>Awesome chip</Chip>
}
```

## Controlled

```tsx
import { useState } from 'react';
import { Chip } from '@mantine/core';

function Demo() {
  const [checked, setChecked] = useState(false);

  return (
    <Chip checked={checked} onChange={() => setChecked((v) => !v)}>
      My chip
    </Chip>
  );
}
```

## Change checked icon

#### Example: icon

```tsx
import { Chip } from '@mantine/core';
import { IconX } from '@tabler/icons-react';

function Demo() {
  return (
    <Chip
      icon={<IconX size={16} />}
      color="red"
      variant="filled"
      defaultChecked
    >
      Forbidden
    </Chip>
  );
}
```

## States

#### Example: states

```tsx
function Demo() {
  return (
    <>
      <Chip.Group multiple value={['checked', 'checked-disabled']}>
        <Group justify="center">
          <Chip value="default" variant="outline">
            Outline default
          </Chip>
          <Chip value="checked" variant="outline">
            Outline checked
          </Chip>
          <Chip value="checked-disabled" disabled variant="outline">
            Outline checked disabled
          </Chip>
        </Group>
      </Chip.Group>

      <Chip.Group multiple value={['checked', 'checked-disabled']}>
        <Group justify="center" mt="md">
          <Chip value="default" variant="light">
            Light default
          </Chip>
          <Chip value="checked" variant="light">
            Light checked
          </Chip>
          <Chip value="checked-disabled" disabled variant="light">
            Light checked disabled
          </Chip>
        </Group>
      </Chip.Group>

      <Chip.Group multiple value={['checked', 'checked-disabled']}>
        <Group justify="center" mt="md">
          <Chip value="default" variant="filled">
            Filled default
          </Chip>
          <Chip value="checked" variant="filled">
            Filled checked
          </Chip>
          <Chip value="checked-disabled" disabled variant="filled">
            Filled checked disabled
          </Chip>
        </Group>
      </Chip.Group>
    </>
  );
}
```

## Chip with tooltip

To use `Chip` with [Tooltip](https://mantine.dev/core/tooltip/) and other similar components, set `refProp="rootRef"`
on the Tooltip component:

#### Example: tooltip

```tsx
import { Tooltip, Chip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Chip tooltip" refProp="rootRef">
      <Chip defaultChecked>Chip with tooltip</Chip>
    </Tooltip>
  );
}
```

## Wrapper props

Chip supports additional props that are passed to the wrapper element for more customization options.

## Chip.Group

`Chip.Group` component manages state of child Chip components,
set `multiple` prop to allow multiple chips to be selected at a time:

#### Example: group

```tsx
import { Chip, Group } from '@mantine/core';

function Demo() {
  return (
    <>
      <Chip.Group>
        <Group justify="center">
          <Chip value="1">Single chip</Chip>
          <Chip value="2">Can be selected</Chip>
          <Chip value="3">At a time</Chip>
        </Group>
      </Chip.Group>

      <Chip.Group multiple>
        <Group justify="center" mt="md">
          <Chip value="1">Multiple chips</Chip>
          <Chip value="2">Can be selected</Chip>
          <Chip value="3">At a time</Chip>
        </Group>
      </Chip.Group>
    </>
  );
}
```

## Controlled Chip.Group

```tsx
import { useState } from 'react';
import { Chip } from '@mantine/core';

function Single() {
  // string value when multiple is false (default)
  const [value, setValue] = useState('react');

  return (
    <Chip.Group multiple={false} value={value} onChange={setValue}>
      <Chip value="react">React</Chip>
      <Chip value="ng">Angular</Chip>
      <Chip value="svelte">Svelte</Chip>
      <Chip value="vue">Vue</Chip>
    </Chip.Group>
  );
}

function Multiple() {
  // array of strings value when multiple is true
  const [value, setValue] = useState(['react']);

  return (
    <Chip.Group multiple value={value} onChange={setValue}>
      <Chip value="react">React</Chip>
      <Chip value="ng">Angular</Chip>
      <Chip value="svelte">Svelte</Chip>
      <Chip value="vue">Vue</Chip>
    </Chip.Group>
  );
}
```

## Deselect radio chip

#### Example: deselect

```tsx
import { useState } from 'react';
import { Chip, Group } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<string | null>('first');
  const handleChipClick = (event: React.MouseEvent<HTMLInputElement>) => {
    if (event.currentTarget.value === value) {
      setValue(null);
    }
  };

  return (
    <Chip.Group multiple={false} value={value} onChange={setValue}>
      <Group>
        <Chip value="first" onClick={handleChipClick}>
          First
        </Chip>
        <Chip value="second" onClick={handleChipClick}>
          Second
        </Chip>
        <Chip value="third" onClick={handleChipClick}>
          Third
        </Chip>
      </Group>
    </Chip.Group>
  );
}
```
