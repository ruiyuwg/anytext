## Accessibility and usability

`SegmentedControl` uses radio inputs under the hood, it is accessible by default with no extra steps required if you have text in labels.
Component support the same keyboard events as a regular radio group.

In case you do not have text in labels (for example, when you want to use `SegmentedControl` with icons only),
use [VisuallyHidden](https://mantine.dev/core/visually-hidden) to make component accessible:

#### Example: iconsOnly

```tsx
import { SegmentedControl, VisuallyHidden } from '@mantine/core';
import { IconEye, IconCode, IconExternalLink } from '@tabler/icons-react';

function Demo() {
  const iconProps = {
    style: { display: 'block' },
    size: 20,
    stroke: 1.5,
  };

  return (
    <SegmentedControl
      data={[
        {
          value: 'preview',
          label: (
            <>
              <IconEye {...iconProps} />
              <VisuallyHidden>Preview</VisuallyHidden>
            </>
          ),
        },
        {
          value: 'code',
          label: (
            <>
              <IconCode {...iconProps} />
              <VisuallyHidden>Code</VisuallyHidden>
            </>
          ),
        },
        {
          value: 'export',
          label: (
            <>
              <IconExternalLink {...iconProps} />
              <VisuallyHidden>Export</VisuallyHidden>
            </>
          ),
        },
      ]}
    />
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autoContrast | boolean | - | If set, adjusts text color based on background color for filled variant |
| color | MantineColor | - | Key of theme.colors or any valid CSS color, changes color of indicator, by default color is based on current color scheme |
| data | (string | SegmentedControlItem)\[] | required | Data based on which controls are rendered |
| defaultValue | string | - | Uncontrolled component default value |
| disabled | boolean | - | Determines whether the component is disabled |
| fullWidth | boolean | - | Determines whether the component should take 100% width of its parent |
| name | string | - | Name of the radio group, by default random name is generated |
| onChange | (value: string) => void | - | Called when value changes |
| orientation | "horizontal" | "vertical" | - | Component orientation |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius, numbers are converted to rem |
| readOnly | boolean | - | If set to false, prevents changing the value |
| size | MantineSize | (string & {}) | - | Controls font-size, padding and height properties |
| transitionDuration | number | - | Indicator transition-duration in ms, set 0 to turn off transitions |
| transitionTimingFunction | string | - | Indicator transition-timing-function property |
| value | string | - | Controlled component value |
| withItemsBorders | boolean | - | Determines whether there should be borders between items |

#### Styles API

SegmentedControl component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**SegmentedControl selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-SegmentedControl-root | Root element |
| control | .mantine-SegmentedControl-control | Wrapper element for input and label |
| input | .mantine-SegmentedControl-input | Input element (`input[type="radio"]`), hidden by default |
| label | .mantine-SegmentedControl-label | Label element associated with input |
| indicator | .mantine-SegmentedControl-indicator | Floating indicator that moves between items |
| innerLabel | .mantine-SegmentedControl-innerLabel | Wrapper of label element children |

**SegmentedControl CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --sc-color | Control `background-color` of `indicator` |
| root | --sc-font-size | Controls `font-size` of labels |
| root | --sc-padding | Controls `padding` of control |
| root | --sc-radius | Controls `border-radius` of `indicator` and `root` elements |
| root | --sc-shadow | Controls `box-shadow` of indicator |

**SegmentedControl data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-full-width | - | - |
| root | data-with-items-border | - | - |
| root | data-disabled | Value of  | - |
| control | data-orientation | - | Value of  |

### Select

Package: @mantine/core
Import: import { Select } from '@mantine/core';
Description: Custom searchable select

## Usage

`Select` allows capturing user input based on suggestions from the list.
Unlike [Autocomplete](https://mantine.dev/core/autocomplete/), `Select` does not allow entering custom values.

#### Example: usage

```tsx
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
```

## Controlled

`Select` value must be a string, other types are not supported.
`onChange` function is called with a string value as a single argument.

```tsx
import { useState } from 'react';
import { Select } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<string | null>('');
  return <Select data={[]} value={value} onChange={setValue} />;
}
```

## onChange handler

`onChange` is called with two arguments:

- `value` - string value of the selected option
- `option` – selected option object

If you prefer object format in state, use second argument of onChange handler:

```tsx
import { useState } from 'react';
import { ComboboxItem, Select } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<ComboboxItem | null>(null);
  return (
    <Select
      data={[{ value: 'react', label: 'React library' }]}
      value={value ? value.value : null}
      onChange={(_value, option) => setValue(option)}
    />
  );
}
```

## autoSelectOnBlur

Set `autoSelectOnBlur` prop to automatically select the highlighted option when the input loses focus.
To see this feature in action: select an option with up/down arrows, then click outside the input:

#### Example: autoSelectOnBlur

```tsx
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      autoSelectOnBlur
      searchable
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
```

## Clearable

Set `clearable` prop to display the clear button in the right section. The button is not displayed
when:

- The component does not have a value
- The component is disabled
- The component is read only

#### Example: clearable

```tsx
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      defaultValue="React"
      clearable
    />
  );
}
```

## Allow deselect

`allowDeselect` prop determines whether the value should be deselected when user clicks on the selected option.
By default, `allowDeselect` is `true`:

#### Example: allowDeselect

```tsx
import { Select } from '@mantine/core';

function Demo() {
  return (
    <>
      <Select
        label="Option can NOT be deselected"
        placeholder="Pick value"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        defaultValue="React"
        allowDeselect={false}
      />

      <Select
        label="Option can be deselected"
        description="This is default behavior, click 'React' in the dropdown"
        placeholder="Pick value"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        defaultValue="React"
        allowDeselect
        mt="md"
      />
    </>
  );
}
```

## Searchable

Set `searchable` prop to allow filtering options by user input:

#### Example: searchable

```tsx
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      searchable
    />
  );
}
```

## Controlled search value

You can control search value with `searchValue` and `onSearchChange` props:

```tsx
import { useState } from 'react';
import { Select } from '@mantine/core';

function Demo() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <Select
      searchable
      searchValue={searchValue}
      onSearchChange={setSearchValue}
      data={[]}
    />
  );
}
```

## Nothing found

Set the `nothingFoundMessage` prop to display a given message when no options match the search query
or there is no data available. If the `nothingFoundMessage` prop is not set, the `Select` dropdown will be hidden.

#### Example: nothingFound

```tsx
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      searchable
      nothingFoundMessage="Nothing found..."
    />
  );
}
```

## Checked option icon

Set `checkIconPosition` prop to `left` or `right` to control position of check icon in active option.
To remove the check icon, set `withCheckIcon={false}`. To align unchecked labels with the checked one, set `withAlignedLabels` prop.

#### Example: checkIcon

```tsx
import { Select } from '@mantine/core';


function Demo() {
  return (
    <Select
      
      data={['React', 'Angular', 'Svelte', 'Vue']}
      dropdownOpened
      pb={150}
      label="Control check icon"
      placeholder="Pick value"
      defaultValue="React"
    />
  );
}
```

## Data prop

Data that is used in Select must be an array of strings or objects with value and label properties. You can also specify additional properties that will be available in renderOption function.

## Filtering

Select provides built-in filtering functionality. You can control filtering behavior with filter prop or implement custom filtering logic.

#### Example: search

```tsx
import { Select, ComboboxItem, OptionsFilter } from '@mantine/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const splittedSearch = search.toLowerCase().trim().split(' ');
  return (options as ComboboxItem[]).filter((option) => {
    const words = option.label.toLowerCase().trim().split(' ');
    return splittedSearch.every((searchWord) => words.some((word) => word.includes(searchWord)));
  });
};

function Demo() {
  return (
    <Select
      label="Your country"
      placeholder="Pick value"
      data={['Great Britain', 'Russian Federation', 'United States']}
      filter={optionsFilter}
      searchable
    />
  );
}
```

## Sort options

By default, options are sorted by their position in the data array. You can change this behavior
with `filter` function:

#### Example: sort

```tsx
import { Select, ComboboxItem, OptionsFilter } from '@mantine/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const filtered = (options as ComboboxItem[]).filter((option) =>
    option.label.toLowerCase().trim().includes(search.toLowerCase().trim())
  );

  filtered.sort((a, b) => a.label.localeCompare(b.label));
  return filtered;
};

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['4 – React', '1 – Angular', '3 – Vue', '2 – Svelte']}
      filter={optionsFilter}
      nothingFoundMessage="Nothing found..."
      searchable
    />
  );
}
```

## Large datasets

Select can handle large datasets efficiently. Consider implementing virtualization for datasets with thousands of items to improve performance.

#### Example: limit

```tsx
import { Select } from '@mantine/core';

const largeData = Array(100_000)
  .fill(0)
  .map((_, index) => `Option ${index}`);

function Demo() {
  return (
    <Select
      label="100 000 options autocomplete"
      placeholder="Use limit to optimize performance"
      limit={5}
      data={largeData}
      searchable
    />
  );
}
```

## renderOption

`renderOption` callback allows you to customize option rendering. It is called with option object and
checked state. The function must return a React node.

#### Example: renderOption

```tsx
import {
  IconAlignCenter,
  IconAlignJustified,
  IconAlignLeft,
  IconAlignRight,
  IconCheck,
} from '@tabler/icons-react';
import { Group, Select, SelectProps } from '@mantine/core';

const iconProps = {
  stroke: 1.5,
  color: 'currentColor',
  opacity: 0.6,
  size: 18,
};

const icons: Record<string, React.ReactNode> = {
  left: <IconAlignLeft {...iconProps} />,
  center: <IconAlignCenter {...iconProps} />,
  right: <IconAlignRight {...iconProps} />,
  justify: <IconAlignJustified {...iconProps} />,
};

const renderSelectOption: SelectProps['renderOption'] = ({ option, checked }) => (
  <Group flex="1" gap="xs">
    {icons[option.value]}
    {option.label}
    {checked && <IconCheck style={{ marginInlineStart: 'auto' }} {...iconProps} />}
  </Group>
);

function Demo() {
  return (
    <Select
      label="Select with renderOption"
      placeholder="Select text align"
      data={[
        { value: 'left', label: 'Left' },
        { value: 'center', label: 'Center' },
        { value: 'right', label: 'Right' },
        { value: 'justify', label: 'Justify' },
      ]}
      renderOption={renderSelectOption}
    />
  );
}
```

## Scrollable dropdown

By default, the options list is wrapped with [ScrollArea.Autosize](https://mantine.dev/core/scroll-area).
You can control dropdown max-height with `maxDropdownHeight` prop if you do not change the default settings.

If you want to use native scrollbars, set `withScrollArea={false}`. Note that in this case,
you will need to change dropdown styles with [Styles API](https://mantine.dev/styles/styles-api).

#### Example: scrollArea

```tsx
import { Select } from '@mantine/core';

const data = Array(100)
  .fill(0)
  .map((_, index) => `Option ${index}`);

function Demo() {
  return (
    <>
      <Select
        label="With scroll area (default)"
        placeholder="Pick value"
        data={data}
        maxDropdownHeight={200}
      />

      <Select
        label="With native scroll"
        placeholder="Pick value"
        data={data}
        withScrollArea={false}
        styles={{ dropdown: { maxHeight: 200, overflowY: 'auto' } }}
        mt="md"
      />
    </>
  );
}
```

## Group options

#### Example: groups

```tsx
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={[
        { group: 'Frontend', items: ['React', 'Angular'] },
        { group: 'Backend', items: ['Express', 'Django'] },
      ]}
    />
  );
}
```

## Disabled options

When option is disabled, it cannot be selected and is ignored in keyboard navigation.

#### Example: disabledOptions

```tsx
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'vue', label: 'Vue', disabled: true },
        { value: 'svelte', label: 'Svelte', disabled: true },
      ]}
    />
  );
}
```

## Inside Popover

To use `Select` inside popover, you need to set `withinPortal: false`:

#### Example: withinPopover

```tsx
import { Popover, Button, Select } from '@mantine/core';

function Demo() {
  return (
    <Popover width={300} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Select
          label="Your favorite library"
          placeholder="Pick value"
          data={['React', 'Angular', 'Vue', 'Svelte']}
          comboboxProps={{ withinPortal: false }}
        />
      </Popover.Dropdown>
    </Popover>
  );
}
```

## Control dropdown opened state

You can control dropdown opened state with `dropdownOpened` prop. Additionally,
you can use `onDropdownClose` and `onDropdownOpen` to listen to dropdown opened state changes.

#### Example: dropdownOpened

```tsx
import { Select, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [dropdownOpened, { toggle }] = useDisclosure();
  return (
    <>
      <Button onClick={toggle} mb="md">
        Toggle dropdown
      </Button>

      <Select
        label="Your favorite library"
        placeholder="Pick value"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        dropdownOpened={dropdownOpened}
      />
    </>
  );
}
```

## Dropdown position

By default, the dropdown is displayed below the input if there is enough space; otherwise it is displayed above the input.
You can change this behavior by setting `position` and `middlewares` props, which are passed down to the
underlying [Popover](https://mantine.dev/core/popover) component.

Example of dropdown that is always displayed above the input:

#### Example: dropdownPosition

```tsx
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ position: 'top', middlewares: { flip: false, shift: false } }}
    />
  );
}
```

## Dropdown width

To change dropdown width, set `width` prop in `comboboxProps`. By default,
dropdown width is equal to the input width.

#### Example: dropdownWidth

```tsx
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ width: 200, position: 'bottom-start' }}
    />
  );
}
```

## Dropdown offset

To change dropdown offset, set `offset` prop in `comboboxProps`:

#### Example: dropdownOffset

```tsx
// Demo.tsx
import { Select } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      classNames={classes}
      comboboxProps={{ position: 'bottom', middlewares: { flip: false, shift: false }, offset: 0 }}
    />
  );
}

// Demo.module.css
.dropdown {
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  border-color: light-dark(var(--mantine-color-gray-4), var(--mantine-color-dark-4));
  border-top: 0;
}

.input {
  transition: none;

  &[data-expanded] {
    border-color: light-dark(var(--mantine-color-gray-4), var(--mantine-color-dark-4));
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}
```

## Prevent horizontal infinite scrolling

If you experience horizontal infinite scrolling in the dropdown, set the `shift` middleware `padding` to `0`:

```tsx
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      data={['React', 'Angular', 'Vue']}
      comboboxProps={{
        middlewares: {
          shift: { padding: 0 }
        }
      }}
    />
  );
}
```

## Dropdown animation

By default, dropdown animations are disabled. To enable them, you can set `transitionProps`,
which will be passed down to the underlying [Transition](https://mantine.dev/core/transition) component.

#### Example: dropdownAnimation

```tsx
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
    />
  );
}
```

## Dropdown padding

#### Example: dropdownPadding

```tsx
import { Select } from '@mantine/core';

function Demo() {
  return (
    <>
      <Select
        label="Zero padding"
        placeholder="Pick value"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        comboboxProps={{ dropdownPadding: 0 }}
      />
      <Select
        mt="md"
        label="10px padding"
        placeholder="Pick value"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        comboboxProps={{ dropdownPadding: 10 }}
      />
    </>
  );
}
```

## Dropdown shadow

#### Example: dropdownShadow

```tsx
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ shadow: 'md' }}
    />
  );
}
```

## Input sections

Select supports left and right sections to display icons, buttons or other content alongside the input.

#### Example: sections

```tsx
import { Select } from '@mantine/core';
import { IconComponents } from '@tabler/icons-react';

function Demo() {
  const icon = <IconComponents size={16} />;
  return (
    <>
      <Select
        data={['React', 'Angular', 'Vue']}
        leftSectionPointerEvents="none"
        leftSection={icon}
        label="Your favorite library"
        placeholder="Your favorite library"
      />
      <Select
        mt="md"
        data={['React', 'Angular', 'Vue']}
        rightSectionPointerEvents="none"
        rightSection={icon}
        label="Your favorite library"
        placeholder="Your favorite library"
      />
    </>
  );
}
```

## Input props

Select component supports [Input](https://mantine.dev/core/input) and [Input.Wrapper](https://mantine.dev/core/input) components features and all input element props. Select documentation does not include all features supported by the component – see [Input](https://mantine.dev/core/input) documentation to learn about all available features.

#### Example: configurator

```tsx
import { Select } from '@mantine/core';


function Demo() {
  return (
    <Select
      
      placeholder="Select placeholder"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
```

## Read only

Set `readOnly` to make the input read only. When `readOnly` is set,
`Select` will not show suggestions and will not call `onChange` function.

#### Example: readOnly

```tsx
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      readOnly
    />
  );
}
```

## Disabled

Set `disabled` to disable the input. When `disabled` is set,
user cannot interact with the input and `Select` will not show suggestions.

#### Example: disabled

```tsx
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      disabled
    />
  );
}
```

## Error state

#### Example: error

```tsx
import { Select } from '@mantine/core';

function Demo() {
  return (
    <>
      <Select
        label="Boolean error"
        placeholder="Boolean error"
        error
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
      <Select
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
    </>
  );
}
```

#### Example: stylesApi

```tsx
import { IconAt } from '@tabler/icons-react';
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
     
      leftSection={<IconAt size={18} stroke={1.5} />}
      label="Select"
      description="Description"
      error="Error"
      placeholder="Select"
      data={['React', 'Angular']}
    />
  );
}
```

## Get element ref

```tsx
import { useRef } from 'react';
import { Select } from '@mantine/core';

function Demo() {
  const ref = useRef<HTMLInputElement>(null);
  return <Select ref={ref} />;
}
```
