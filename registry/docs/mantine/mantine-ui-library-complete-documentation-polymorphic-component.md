## Polymorphic component

ColorSwatch is a polymorphic component – its default root element is div, but it can be changed to any other element or component with component prop:

```tsx
import { ColorSwatch } from '@mantine/core';

function Demo() {
  return <ColorSwatch component="button" />;
}
```

**Polymorphic components with TypeScript**

Note that polymorphic components props types are different from regular components – they do not extend HTML element props of the default element. For example, ColorSwatchProps does not extend React.ComponentPropsWithoutRef<'div'> although div is the default element.

If you want to create a wrapper for a polymorphic component that is not polymorphic (does not support component prop), then your component props interface should extend HTML element props.

#### Example: component

```tsx
import { useState } from 'react';
import { ColorSwatch, CheckIcon } from '@mantine/core';

function Demo() {
  const [checked, setChecked] = useState(true);

  return (
    <ColorSwatch
      component="button"
      color="var(--mantine-color-grape-6)"
      onClick={() => setChecked((c) => !c)}
      style={{ color: '#fff', cursor: 'pointer' }}
    >
      {checked && <CheckIcon size={12} />}
    </ColorSwatch>
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | - | Content displayed inside the swatch |
| color | string | required | Valid CSS color to display |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius, numbers are converted to rem. |
| size | React.CSSProperties\["width"] | - | Controls width and height of the swatch, any valid CSS value, numbers are converted to rem. |
| withShadow | boolean | - | Determines whether the swatch should have inner box-shadow |

#### Styles API

ColorSwatch component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**ColorSwatch selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-ColorSwatch-root | Root element |
| alphaOverlay | .mantine-ColorSwatch-alphaOverlay | Overlay with checkerboard pattern |
| shadowOverlay | .mantine-ColorSwatch-shadowOverlay | Overlay with inner box-shadow |
| colorOverlay | .mantine-ColorSwatch-colorOverlay | Overlay with given color background |
| childrenOverlay | .mantine-ColorSwatch-childrenOverlay | Overlay with `children` inside |

**ColorSwatch CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --cs-radius | Controls `border-radius` of all overlays and `root` element |
| root | --cs-size | Controls `width`, `height`, `min-width` and `min-height` of the `root` element |

### Combobox

Package: @mantine/core
Import: import { Combobox } from '@mantine/core';
Description: Create custom select, autocomplete or multiselect inputs

## Examples

This page contains only a small set of examples, as the full code of the demos is long.
You can find all 50+ examples on a [separate page](https://mantine.dev/combobox?e=BasicSelect).

## Usage

`Combobox` provides a set of components and hooks to custom select, multiselect or autocomplete components.
The component is very flexible – you have full control of the rendering and logic.

#### Example: select

```tsx
import { useState } from 'react';
import { Input, InputBase, Combobox, useCombobox } from '@mantine/core';

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => combobox.toggleDropdown()}
        >
          {value || <Input.Placeholder>Pick value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
```

## useCombobox hook

`useCombobox` hook provides combobox store. The store contains the current state of the component
and handlers to update it. Created store must be passed to the `store` prop of `Combobox`:

```tsx
import { Combobox, useCombobox } from '@mantine/core';

function Demo() {
  const combobox = useCombobox();
  return (
    <Combobox store={combobox}>{/* Your implementation */}</Combobox>
  );
}
```

## useCombobox options

`useCombobox` hooks accepts an options object with the following properties:

```tsx
interface UseComboboxOptions {
  /** Default value for `dropdownOpened`, `false` by default */
  defaultOpened?: boolean;

  /** Controlled `dropdownOpened` state */
  opened?: boolean;

  /** Called when `dropdownOpened` state changes */
  onOpenedChange?(opened: boolean): void;

  /** Called when dropdown closes with event source: keyboard, mouse or unknown */
  onDropdownClose?(eventSource: ComboboxDropdownEventSource): void;

  /** Called when dropdown opens with event source: keyboard, mouse or unknown */
  onDropdownOpen?(eventSource: ComboboxDropdownEventSource): void;

  /** Determines whether arrow key presses should loop though items (first to last and last to first), `true` by default */
  loop?: boolean;

  /** `behavior` passed down to `element.scrollIntoView`, `'instant'` by default */
  scrollBehavior?: ScrollBehavior;
}
```

You can import `UseComboboxOptions` type from `@mantine/core` package:

```tsx
import type { UseComboboxOptions } from '@mantine/core';
```
