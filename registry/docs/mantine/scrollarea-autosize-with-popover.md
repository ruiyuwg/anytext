## ScrollArea.Autosize with Popover

#### Example: autosizePopover

```tsx
import { useState, useRef } from 'react';
import { ScrollArea, Popover, TextInput, UnstyledButton, Text, Box } from '@mantine/core';

const groceries = [
  'Apples',
  'Bananas',
  'Oranges',
  'Milk',
  'Bread',
  'Eggs',
  'Chicken',
  'Beef',
  'Pasta',
  'Rice',
  'Potatoes',
  'Onions',
  'Tomatoes',
  'Cucumbers',
  'Carrots',
  'Lettuce',
  'Spinach',
  'Broccoli',
  'Cheese',
  'Yogurt',
  'Butter',
  'Sugar',
  'Salt',
  'Pepper',
  'Coffee',
  'Tea',
  'Juice',
  'Water',
  'Cookies',
  'Chocolate',
];

function Demo() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState('');
  const [opened, setOpened] = useState(false);
  const [hovered, setHovered] = useState(-1);
  const filtered = groceries.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
  const items = filtered.map((item, index) => (
    <UnstyledButton
      data-list-item
      key={item}
      display="block"
      bg={index === hovered ? 'var(--mantine-color-blue-light)' : undefined}
      w="100%"
      p={5}
    >
      {item}
    </UnstyledButton>
  ));

  return (
    <Popover width="target" opened={opened}>
      <Popover.Target>
        <TextInput
          value={query}
          onFocus={() => setOpened(true)}
          onBlur={() => setOpened(false)}
          onChange={(event) => {
            setQuery(event.currentTarget.value);
            setHovered(-1);
          }}
          onKeyDown={(event) => {
            if (event.key === 'ArrowDown') {
              event.preventDefault();
              setHovered((current) => {
                const nextIndex = current + 1 >= filtered.length ? current : current + 1;
                viewportRef.current
                  ?.querySelectorAll('[data-list-item]')
                  ?.[nextIndex]?.scrollIntoView({ block: 'nearest' });
                return nextIndex;
              });
            }

            if (event.key === 'ArrowUp') {
              event.preventDefault();
              setHovered((current) => {
                const nextIndex = current - 1 < 0 ? current : current - 1;
                viewportRef.current
                  ?.querySelectorAll('[data-list-item]')
                  ?.[nextIndex]?.scrollIntoView({ block: 'nearest' });
                return nextIndex;
              });
            }
          }}
          placeholder="Search groceries"
        />
      </Popover.Target>
      <Popover.Dropdown p={0}>
        <ScrollArea.Autosize viewportRef={viewportRef} mah={200} type="always" scrollbars="y">
          <Box px="xs" py={5}>
            {items.length > 0 ? items : <Text c="dimmed">Nothing found</Text>}
          </Box>
        </ScrollArea.Autosize>
      </Popover.Dropdown>
    </Popover>
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| offsetScrollbars | boolean | "x" | "y" | "present" | - | Determines whether scrollbars should be offset with padding on given axis |
| onBottomReached | () => void | - | Called when scrollarea is scrolled all the way to the bottom |
| onScrollPositionChange | (position: { x: number; y: number; }) => void | - | Called with current position (x and y coordinates) when viewport is scrolled |
| onTopReached | () => void | - | Called when scrollarea is scrolled all the way to the top |
| overscrollBehavior | OverscrollBehavior | - | Defines overscroll-behavior of the viewport |
| scrollHideDelay | number | - | Scroll hide delay in ms, applicable only when type is set to hover or scroll |
| scrollbarSize | string | number | - | Scrollbar size, any valid CSS value for width/height, numbers are converted to rem, default value is 0.75rem |
| scrollbars | false | "x" | "y" | "xy" | - | Axis at which scrollbars must be rendered |
| type | "auto" | "scroll" | "always" | "hover" | "never" | - | Defines scrollbars behavior, hover by default

- hover – scrollbars are visible when mouse is over the scroll area
- scroll – scrollbars are visible when the scroll area is scrolled
- always – scrollbars are always visible
- never – scrollbars are always hidden
- auto – similar to overflow: auto – scrollbars are always visible when the content is overflowing |
  | viewportProps | DetailedHTMLProps\<HTMLAttributes, HTMLDivElement> | - | Props passed down to the viewport element |
  | viewportRef | ForwardedRef | - | Assigns viewport element (scrollable container) ref |

#### Styles API

ScrollArea component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**ScrollArea selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-ScrollArea-root | Root element |
| content | .mantine-ScrollArea-content | Wraps component children |
| viewport | .mantine-ScrollArea-viewport | Main scrollable area |
| scrollbar | .mantine-ScrollArea-scrollbar | Horizontal or vertical scrollbar root |
| thumb | .mantine-ScrollArea-thumb | Scrollbar thumb |
| corner | .mantine-ScrollArea-corner | Corner between horizontal and vertical scrollbars |

**ScrollArea CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --scrollarea-scrollbar-size | Scrollbar size |

### SegmentedControl

Package: @mantine/core
Import: import { SegmentedControl } from '@mantine/core';
Description: A linear set of two or more segments

## Usage

#### Example: usage

```tsx
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl data={['React', 'Angular', 'Vue']} />;
}
```

## Controlled

```tsx
import { useState } from 'react';
import { SegmentedControl } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('react');

  return (
    <SegmentedControl
      value={value}
      onChange={setValue}
      data={[
        { label: 'React', value: 'react' },
        { label: 'Angular', value: 'ng' },
        { label: 'Vue', value: 'vue' },
        { label: 'Svelte', value: 'svelte' },
      ]}
    />
  );
}
```

## Data prop

`SegmentedControl` support two different data formats:

1. An array of strings – used when `value` and `label` are the same
2. An array of objects – used when `value` and `label` are different

```tsx
import { SegmentedControl } from '@mantine/core';

function ArrayOfStrings() {
  return (
    <SegmentedControl data={['React', 'Angular', 'Svelte', 'Vue']} />
  );
}

function ArrayOfObjects() {
  return (
    <SegmentedControl
      data={[
        { value: 'React', label: 'React' },
        { value: 'Angular', label: 'Angular' },
        { value: 'Svelte', label: 'Svelte' },
        { value: 'Vue', label: 'Vue' },
      ]}
    />
  );
}
```

## Disabled

To disable `SegmentedControl` item, use array of objects `data` format and set `disabled: true`
on the item that you want to disable. To disable the entire component, use `disabled` prop.

#### Example: disabled

```tsx
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return (
    <Stack align="center">
      <div>
        <Text size="sm" fw={500} mb={3}>
          Disabled control
        </Text>
        <SegmentedControl
          disabled
          data={[
            {
              value: 'preview',
              label: 'Preview',
            },
            {
              value: 'code',
              label: 'Code',
            },
            {
              value: 'export',
              label: 'Export',
            },
          ]}
        />
      </div>

      <div>
        <Text size="sm" fw={500} mb={3}>
          Disabled option
        </Text>
        <SegmentedControl
          data={[
            {
              value: 'preview',
              label: 'Preview',
              disabled: true,
            },
            {
              value: 'code',
              label: 'Code',
            },
            {
              value: 'export',
              label: 'Export',
            },
          ]}
        />
      </div>
    </Stack>
  );
}
```

## React node as label

You can use any React node as label:

#### Example: labels

```tsx
import { Center, SegmentedControl } from '@mantine/core';
import { IconEye, IconCode, IconExternalLink } from '@tabler/icons-react';

function Demo() {
  return (
    <SegmentedControl
      data={[
        {
          value: 'preview',
          label: (
            <Center style={{ gap: 10 }}>
              <IconEye size={16} />
              <span>Preview</span>
            </Center>
          ),
        },
        {
          value: 'code',
          label: (
            <Center style={{ gap: 10 }}>
              <IconCode size={16} />
              <span>Code</span>
            </Center>
          ),
        },
        {
          value: 'export',
          label: (
            <Center style={{ gap: 10 }}>
              <IconExternalLink size={16} />
              <span>Export</span>
            </Center>
          ),
        },
      ]}
    />
  );
}
```

## Color

By default, `SegmentedControl` uses `theme.white` with shadow in light color scheme and `var(--mantine-color-dark-6)` background color for indicator.
Set `color` prop to change indicator `background-color`:

#### Example: configurator

```tsx
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl data={['React', 'Angular', 'Vue', 'Svelte']} />;
}
```

## Transitions

Change transition properties with:

- `transitionDuration` – all transitions duration in ms, `200` by default
- `transitionTimingFunction` – all transitions timing function, `ease` by default

#### Example: transitions

```tsx
import { SegmentedControl, Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text size="sm" fw={500} mt={3}>
        No transitions
      </Text>
      <SegmentedControl data={['React', 'Angular', 'Vue', 'Svelte']} transitionDuration={0} />

      <Text size="sm" fw={500} mt="md">
        500ms linear transition
      </Text>
      <SegmentedControl
        data={['React', 'Angular', 'Vue', 'Svelte']}
        transitionDuration={500}
        transitionTimingFunction="linear"
      />
    </>
  );
}
```

## readOnly

Set `readOnly` prop to prevent value from being changed:

#### Example: readOnly

```tsx
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl readOnly defaultValue="Angular" data={['React', 'Angular', 'Vue']} />;
}
```

#### Example: stylesApi

```tsx
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl data={['React', 'Angular', 'Vue']} />;
}
```
