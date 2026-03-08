## Keyboard interactions

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| activateTabWithKeyboard | boolean | - | If set, tab is activated with arrow key press |
| allowTabDeactivation | boolean | - | If set, tab can be deactivated |
| autoContrast | boolean | - | If set, adjusts text color based on background color for pills variant |
| children | React.ReactNode | - | Tabs content |
| color | MantineColor | - | Changes colors of Tabs.Tab components when variant is pills or default, does nothing for other variants |
| defaultValue | string | null | - | Uncontrolled component default value |
| id | string | - | Base id, used to generate ids to connect labels with controls, generated randomly by default |
| inverted | boolean | - | Determines whether tabs should have inverted styles |
| keepMounted | boolean | - | If set to false, Tabs.Panel content will be unmounted when the associated tab is not active |
| loop | boolean | - | If set, arrow key presses loop though items (first to last and last to first) |
| onChange | (value: string | null) => void | - | Called when value changes |
| orientation | "horizontal" | "vertical" | - | Tabs orientation |
| placement | "left" | "right" | - | Tabs.List placement relative to Tabs.Panel, applicable only when orientation="vertical" |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius@default theme.defaultRadius |
| value | string | null | - | Controlled component value |

#### Styles API

Tabs component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Tabs selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Tabs-root | Root element (`Tabs` component) |
| list | .mantine-Tabs-list | List of tabs (`Tabs.List` component) |
| panel | .mantine-Tabs-panel | Panel with tab content (`Tabs.Panel` component) |
| tab | .mantine-Tabs-tab | Tab button (`Tabs.Tab` component) |
| tabLabel | .mantine-Tabs-tabLabel | Label of `Tabs.Tab` |
| tabSection | .mantine-Tabs-tabSection | Left and right sections of `Tabs.Tab` |

**Tabs CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --tabs-radius | Controls `Tabs.Tab` `border-radius` |

### TagsInput

Package: @mantine/core
Import: import { TagsInput } from '@mantine/core';
Description: Capture a list of values from user with free input and suggestions

## Usage

`TagsInput` provides a way to enter multiple values. It can be used with suggestions or without them.
`TagsInput` is similar to [MultiSelect](https://mantine.dev/core/multi-select), but it allows entering custom values.

#### Example: usage

```tsx
import { TagsInput } from '@mantine/core';

function Demo() {
  return <TagsInput label="Press Enter to submit a tag" placeholder="Enter tag" />;
}
```

## Controlled

`TagsInput` value must be an array of strings, other types are not supported.
`onChange` function is called with an array of strings as a single argument.

```tsx
import { useState } from 'react';
import { TagsInput } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<string[]>([]);
  return <TagsInput data={[]} value={value} onChange={setValue} />;
}
```

## Controlled search value

You can control search value with `searchValue` and `onSearchChange` props:

```tsx
import { useState } from 'react';
import { TagsInput } from '@mantine/core';

function Demo() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <TagsInput
      searchValue={searchValue}
      onSearchChange={setSearchValue}
      data={[]}
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
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Press Enter to submit a tag"
      placeholder="Enter tag"
      defaultValue={['React']}
      clearable
    />
  );
}
```

## Max selected values

You can limit the number of selected values with `maxTags` prop. This will not allow adding more values
once the limit is reached.

#### Example: maxTags

```tsx
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Press Enter to submit a tag"
      description="Add up to 3 tags"
      placeholder="Enter tag"
      maxTags={3}
      defaultValue={['first', 'second']}
    />
  );
}
```

## Accept value on blur

By default, if the user types a value and blurs the input, the value is added to the list.
You can change this behavior by setting `acceptValueOnBlur` to `false`. In this case, the value is added
only when the user presses `Enter` or clicks on a suggestion.

#### Example: acceptValueOnBlur

```tsx
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <TagsInput
        label="Value IS accepted on blur"
        placeholder="Enter text, then blur the field"
        data={['React', 'Angular', 'Svelte']}
        acceptValueOnBlur
      />
      <TagsInput
        label="Value IS NOT accepted on blur"
        placeholder="Enter text, then blur the field"
        data={['React', 'Angular', 'Svelte']}
        acceptValueOnBlur={false}
        mt="md"
      />
    </>
  );
}
```

## Allow duplicates

By default, `TagsInput` does not allow to add duplicate values, but you can change this behavior by
setting `allowDuplicates` prop. Value is considered duplicate if it is already present in the `value` array,
regardless of the case and trailing whitespace.

#### Example: allowDuplicates

```tsx
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Press Enter to submit a tag"
      placeholder="Duplicates are allowed"
      allowDuplicates
    />
  );
}
```

## isDuplicate

You can use `isDuplicate` prop to control how duplicates are detected. It is a function that
receives two arguments: tag value and current tags. The function must return `true` if the value is duplicate.

Example of using `isDuplicate` to allow using the same value with different casing:

#### Example: isDuplicate

```tsx
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Press Enter to submit a tag"
      placeholder="Enter tag"
      isDuplicate={(tagValue, currentTags) => currentTags.some((val) => val === tagValue)}
      defaultValue={['Tag', 'TAG', 'tag']}
    />
  );
}
```

## Split chars

By default, `TagsInput` splits values by comma (`,`), you can change this behavior by setting
`splitChars` prop to an array of strings. All values from `splitChars` cannot be included in the final value.
Values are also split on paste.

Example of splitting by `,`, `|` and space:

#### Example: splitChars

```tsx
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Press Enter to submit a tag"
      placeholder="Enter tag"
      splitChars={[',', ' ', '|']}
    />
  );
}
```

## With suggestions

`TagsInput` can be used with suggestions, it will render suggestions list under input and allow to select
suggestions with keyboard or mouse. Note that user is not limited to suggestions, it is still possible to
enter custom values. If you want to allow values only from suggestions, use [MultiSelect](https://mantine.dev/core/multi-select) component instead.

#### Example: data

```tsx
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Press Enter to submit a tag"
      placeholder="Pick tag from list"
      data={['React', 'Angular', 'Svelte']}
    />
  );
}
```

## Data prop

Data that is used in TagsInput must be an array of strings or objects with value and label properties. You can also specify additional properties that will be available in renderOption function.

## Filtering

TagsInput provides built-in filtering functionality. You can control filtering behavior with filter prop or implement custom filtering logic.

#### Example: search

```tsx
import { TagsInput, ComboboxItem, OptionsFilter } from '@mantine/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const splittedSearch = search.toLowerCase().trim().split(' ');
  return (options as ComboboxItem[]).filter((option) => {
    const words = option.label.toLowerCase().trim().split(' ');
    return splittedSearch.every((searchWord) => words.some((word) => word.includes(searchWord)));
  });
};

function Demo() {
  return (
    <TagsInput
      label="What countries have you visited?"
      placeholder="Pick value or enter anything"
      data={['Great Britain', 'Russian Federation', 'United States']}
      filter={optionsFilter}
    />
  );
}
```

## Sort options

By default, options are sorted by their position in the data array. You can change this behavior
with `filter` function:

#### Example: sort

```tsx
import { TagsInput, ComboboxItem, OptionsFilter } from '@mantine/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const filtered = (options as ComboboxItem[]).filter((option) =>
    option.label.toLowerCase().trim().includes(search.toLowerCase().trim())
  );

  filtered.sort((a, b) => a.label.localeCompare(b.label));
  return filtered;
};

function Demo() {
  return (
    <TagsInput
      label="Your favorite libraries"
      placeholder="Pick value or enter anything"
      data={['4 – React', '1 – Angular', '3 – Vue', '2 – Svelte']}
      filter={optionsFilter}
    />
  );
}
```

## Large datasets

TagsInput can handle large datasets efficiently. Consider implementing virtualization for datasets with thousands of items to improve performance.

#### Example: limit

```tsx
import { TagsInput } from '@mantine/core';

const largeData = Array(100_000)
  .fill(0)
  .map((_, index) => `Option ${index}`);

function Demo() {
  return (
    <TagsInput
      label="100 000 options tags input"
      placeholder="Use limit to optimize performance"
      limit={5}
      data={largeData}
    />
  );
}
```

## renderOption

`renderOption` callback allows you to customize option rendering. It is called with option object.
The function must return a React node.

#### Example: renderOption

```tsx
import { Group, TagsInput, TagsInputProps, Text } from '@mantine/core';

const data: Record<string, { emoji: string; description: string }> = {
  Apples: {
    emoji: '🍎',
    description: 'Crisp and juicy snacking delight',
  },
  Bread: {
    emoji: '🍞',
    description: 'Freshly baked daily essential',
  },
  Bananas: {
    emoji: '🍌',
    description: 'Perfect for a healthy breakfast',
  },
  Eggs: {
    emoji: '🥚',
    description: 'Versatile protein source for cooking',
  },
  Broccoli: {
    emoji: '🥦',
    description: 'Nutrient-rich green vegetable',
  },
};

const renderTagsInputOption: TagsInputProps['renderOption'] = ({ option }) => (
  <Group>
    <Text span fz={24}>
      {data[option.value].emoji}
    </Text>
    <div>
      <Text>{option.value}</Text>
      <Text size="xs" opacity={0.5}>
        {data[option.value].description}
      </Text>
    </div>
  </Group>
);

function Demo() {
  return (
    <TagsInput
      data={['Apples', 'Bread', 'Bananas', 'Eggs', 'Broccoli']}
      renderOption={renderTagsInputOption}
      label="Groceries"
      placeholder="Pick tag from list or type to add new"
      maxDropdownHeight={300}
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
import { TagsInput } from '@mantine/core';

const data = Array(100)
  .fill(0)
  .map((_, index) => `Option ${index}`);

function Demo() {
  return (
    <>
      <TagsInput
        label="With scroll area (default)"
        placeholder="Pick value or enter anything"
        data={data}
        maxDropdownHeight={200}
      />

      <TagsInput
        label="With native scroll"
        placeholder="Pick value or enter anything"
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
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Enter tags"
      placeholder="Enter tags"
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
Note that user can still enter disabled option as a value. If you want to prohibit certain values,
use controlled component and filter them out in `onChange` function.

#### Example: disabledOptions

```tsx
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Enter tags"
      placeholder="Some tags are disabled"
      data={[
        { value: 'React' },
        { value: 'Angular' },
        { value: 'Vue', disabled: true },
        { value: 'Svelte', disabled: true },
      ]}
    />
  );
}
```

## Inside Popover

To use `TagsInput` inside popover, you need to set `withinPortal: false`:

#### Example: withinPopover

```tsx
import { Popover, Button, TagsInput } from '@mantine/core';

function Demo() {
  return (
    <Popover width={300} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <TagsInput
          label="Your favorite library"
          placeholder="Pick value or enter anything"
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
import { TagsInput, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [dropdownOpened, { toggle }] = useDisclosure();
  return (
    <>
      <Button onClick={toggle} mb="md">
        Toggle dropdown
      </Button>

      <TagsInput
        label="Your favorite library"
        placeholder="Pick value or enter anything"
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
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ position: 'top', middlewares: { flip: false, shift: false } }}
    />
  );
}
```

## Dropdown animation

By default, dropdown animations are disabled. To enable them, you can set `transitionProps`,
which will be passed down to the underlying [Transition](https://mantine.dev/core/transition) component.

#### Example: dropdownAnimation

```tsx
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
    />
  );
}
```

## Dropdown width

To change dropdown width, set `width` prop in `comboboxProps`. By default,
dropdown width is equal to the input width.

#### Example: dropdownWidth

```tsx
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ width: 200, position: 'bottom-start' }}
    />
  );
}
```

## Dropdown padding

#### Example: dropdownPadding

```tsx
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <TagsInput
        label="Zero padding"
        placeholder="Pick value or enter anything"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        comboboxProps={{ dropdownPadding: 0 }}
      />
      <TagsInput
        mt="md"
        label="10px padding"
        placeholder="Pick value or enter anything"
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
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ shadow: 'md' }}
    />
  );
}
```

## Input sections

TagsInput supports left and right sections to display icons, buttons or other content alongside the input.

#### Example: sections

```tsx
import { TagsInput } from '@mantine/core';
import { IconComponents } from '@tabler/icons-react';

function Demo() {
  const icon = <IconComponents size={16} />;
  return (
    <>
      <TagsInput
        data={['React', 'Angular', 'Vue']}
        leftSectionPointerEvents="none"
        leftSection={icon}
        label="Your favorite library"
        placeholder="Your favorite library"
      />
      <TagsInput
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

TagsInput component supports [Input](https://mantine.dev/core/input) and [Input.Wrapper](https://mantine.dev/core/input) components features and all input element props. TagsInput documentation does not include all features supported by the component – see [Input](https://mantine.dev/core/input) documentation to learn about all available features.

#### Example: configurator

```tsx
import { TagsInput } from '@mantine/core';


function Demo() {
  return (
    <TagsInput
      
      placeholder="TagsInput placeholder"
      value={['First', 'Second']}
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
```

## Read only

Set `readOnly` to make the input read only. When `readOnly` is set,
`TagsInput` will not show suggestions and will not call `onChange` function.

#### Example: readOnly

```tsx
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Read only"
      placeholder="Enter tag"
      readOnly
      defaultValue={['First', 'Second']}
    />
  );
}
```

## Disabled

Set `disabled` to disable the input. When `disabled` is set,
user cannot interact with the input and `TagsInput` will not show suggestions.

#### Example: disabled

```tsx
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Disabled"
      placeholder="Enter tag"
      disabled
      defaultValue={['First', 'Second']}
    />
  );
}
```

## Error state

#### Example: error

```tsx
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <TagsInput
        label="Boolean error"
        placeholder="Boolean error"
        error
        defaultValue={['React', 'Angular']}
      />
      <TagsInput
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
        defaultValue={['React', 'Angular']}
      />
    </>
  );
}
```

#### Example: stylesApi

```tsx
import { IconAt } from '@tabler/icons-react';
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
     
      leftSection={<IconAt size={18} stroke={1.5} />}
      label="TagsInput"
      description="Description"
      error="Error"
      placeholder="TagsInput"
      defaultValue={['First', 'Second']}
      data={['React', 'Angular']}
    />
  );
}
```

## Get element ref

```tsx
import { useRef } from 'react';
import { TagsInput } from '@mantine/core';

function Demo() {
  const ref = useRef<HTMLInputElement>(null);
  return <TagsInput ref={ref} />;
}
```
