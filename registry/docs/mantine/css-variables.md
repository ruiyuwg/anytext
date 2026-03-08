## CSS variables

Example of using CSS variables in styles:

```scss
.main {
  min-height: calc(100dvh - var(--app-shell-header-height));
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| aside | AppShellAsideConfiguration | - | Aside configuration, controls width, breakpoints and collapsed state. Required if you use Aside component. |
| disabled | boolean | - | If set, Navbar, Aside, Header and Footer components are hidden |
| footer | AppShellFooterConfiguration | - | Footer configuration, controls height, offset and collapsed state. Required if you use Footer component. |
| header | AppShellHeaderConfiguration | - | Header configuration, controls height, offset and collapsed state. Required if you use Header component. |
| layout | "default" | "alt" | - | Determines how Navbar/Aside are arranged relative to Header/Footer |
| mode | "fixed" | "static" | - | Determines positioning mode of all sections |
| navbar | AppShellNavbarConfiguration | - | Navbar configuration, controls width, breakpoints and collapsed state. Required if you use Navbar component. |
| offsetScrollbars | boolean | - | If set, Header and Footer components include styles to offset scrollbars. Based on react-remove-scroll. |
| padding | MantineSpacing | AppShellResponsiveSize | - | Padding of the main section. Important: use padding prop instead of p. |
| transitionDuration | number | - | Duration of all transitions in ms |
| transitionTimingFunction | TransitionTimingFunction | - | Timing function of all transitions |
| withBorder | boolean | - | If set, the associated components have a border |
| zIndex | string | number | - | z-index of all associated elements |

#### Styles API

AppShell component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**AppShell selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-AppShell-root | Root element (`AppShell` component) |
| navbar | .mantine-AppShell-navbar | `AppShell.Navbar` root element |
| header | .mantine-AppShell-header | `AppShell.Header` root element |
| main | .mantine-AppShell-main | `AppShell.Main` root element |
| aside | .mantine-AppShell-aside | `AppShell.Aside` root element |
| footer | .mantine-AppShell-footer | `AppShell.Footer` root element |
| section | .mantine-AppShell-section | `AppShell.Section` root element |

**AppShell CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --app-shell-transition-duration | Controls transition duration of all children |

**AppShell data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-resizing | User is resizing the window | - |
| root | data-layout | - | Value of the  |
| root | data-disabled | - | - |

### AspectRatio

Package: @mantine/core
Import: import { AspectRatio } from '@mantine/core';
Description: Maintain responsive consistent width/height ratio

## Usage

`AspectRatio` maintains a consistent width/height ratio.
It can be used to display images, maps, videos and other media.

#### Example: image

```tsx
import { AspectRatio } from '@mantine/core';

function Demo() {
  return (
    <AspectRatio ratio={1080 / 720} maw={300} mx="auto">
      <img
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png"
        alt="Panda"
      />
    </AspectRatio>
  );
}
```

## Map embed

#### Example: map

```tsx
import { AspectRatio } from '@mantine/core';

function Demo() {
  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.3063874233135!2d-74.04668908358428!3d40.68924937933441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25090129c363d%3A0x40c6a5770d25022b!2sStatue%20of%20Liberty%20National%20Monument!5e0!3m2!1sen!2sru!4v1644262070010!5m2!1sen!2sru"
        title="Google map"
        style={{ border: 0 }}
      />
    </AspectRatio>
  );
}
```

## Video embed

#### Example: video

```tsx
import { AspectRatio } from '@mantine/core';

function Demo() {
  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        src="https://www.youtube.com/embed/mzJ4vCjSt28"
        title="YouTube video player"
        style={{ border: 0 }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </AspectRatio>
  );
}
```

## Inside flex container

By default, `AspectRatio` does not have fixed width and height, it will take as much space as possible
in a regular container. However, when used inside a flex container, it will not stretch to fill the available space.
To make it work inside flexbox container, you need to set `width` or `flex` property.

#### Example: flex

```tsx
import { AspectRatio, Image } from '@mantine/core';

function Demo() {
  return (
    <div style={{ display: 'flex' }}>
      <AspectRatio ratio={1} flex="0 0 100px">
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-6.png"
          alt="Avatar"
        />
      </AspectRatio>
    </div>
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| ratio | number | - | Aspect ratio, for example, 16 / 9, 4 / 3, 1920 / 1080 |

#### Styles API

AspectRatio component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**AspectRatio selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-AspectRatio-root | Root element |

**AspectRatio CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --ar-ratio | Aspect ratio |

### Autocomplete

Package: @mantine/core
Import: import { Autocomplete } from '@mantine/core';
Description: Autocomplete user input with any list of options

## Not a searchable select

`Autocomplete` is not a searchable select, it is a text input with suggestions.
Values are not enforced to be one of the suggestions, user can type anything.
If you need a searchable select, use [Select](https://mantine.dev/core/select) component instead.
To learn more about the differences between `Autocomplete` and `Select`, check
[help center article](https://help.mantine.dev/q/select-autocomplete-difference).

## Usage

`Autocomplete` provides user a list of suggestions based on the input,
however user is not limited to suggestions and can type anything.

#### Example: usage

```tsx
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
```

## Controlled

`Autocomplete` value must be a string, other types are not supported.
`onChange` function is called with a string value as a single argument.

```tsx
import { useState } from 'react';
import { Autocomplete } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('');
  return <Autocomplete data={[]} value={value} onChange={setValue} />;
}
```

## Select first option on change

Set the `selectFirstOptionOnChange` prop to automatically select the first option in the dropdown when the input value changes.
This feature allows users to type a value and immediately press `Enter` to select the first matching option,
without needing to press the arrow down key first.

#### Example: selectFirstOptionOnChange

```tsx
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      selectFirstOptionOnChange
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
```

## autoSelectOnBlur

Set `autoSelectOnBlur` prop to automatically select the highlighted option when the input loses focus.
To see this feature in action: select an option with up/down arrows, then click outside the input:

#### Example: autoSelectOnBlur

```tsx
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      autoSelectOnBlur
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
```

## Data prop

Data that is used in Autocomplete must be an array of strings or objects with value and label properties. You can also specify additional properties that will be available in renderOption function.

## Filtering

Autocomplete provides built-in filtering functionality. You can control filtering behavior with filter prop or implement custom filtering logic.

#### Example: search

```tsx
import { Autocomplete, ComboboxItem, OptionsFilter } from '@mantine/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const splittedSearch = search.toLowerCase().trim().split(' ');
  return (options as ComboboxItem[]).filter((option) => {
    const words = option.label.toLowerCase().trim().split(' ');
    return splittedSearch.every((searchWord) => words.some((word) => word.includes(searchWord)));
  });
};

function Demo() {
  return (
    <Autocomplete
      label="Your country"
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
import { Autocomplete, ComboboxItem, OptionsFilter } from '@mantine/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const filtered = (options as ComboboxItem[]).filter((option) =>
    option.label.toLowerCase().trim().includes(search.toLowerCase().trim())
  );

  filtered.sort((a, b) => a.label.localeCompare(b.label));
  return filtered;
};

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['4 – React', '1 – Angular', '3 – Vue', '2 – Svelte']}
      filter={optionsFilter}
    />
  );
}
```

## Large datasets

Autocomplete can handle large datasets efficiently. Consider implementing virtualization for datasets with thousands of items to improve performance.

#### Example: limit

```tsx
import { Autocomplete } from '@mantine/core';

const largeData = Array(100_000)
  .fill(0)
  .map((_, index) => `Option ${index}`);

function Demo() {
  return (
    <Autocomplete
      label="100 000 options autocomplete"
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
import { Autocomplete, AutocompleteProps, Avatar, Group, Text } from '@mantine/core';

const usersData: Record<string, { image: string; email: string }> = {
  'Emily Johnson': {
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
    email: 'emily92@gmail.com',
  },
  'Ava Rodriguez': {
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png',
    email: 'ava_rose@gmail.com',
  },
  'Olivia Chen': {
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png',
    email: 'livvy_globe@gmail.com',
  },
  'Ethan Barnes': {
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
    email: 'ethan_explorer@gmail.com',
  },
  'Mason Taylor': {
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
    email: 'mason_musician@gmail.com',
  },
};

const renderAutocompleteOption: AutocompleteProps['renderOption'] = ({ option }) => (
  <Group gap="sm">
    <Avatar src={usersData[option.value].image} size={36} radius="xl" />
    <div>
      <Text size="sm">{option.value}</Text>
      <Text size="xs" opacity={0.5}>
        {usersData[option.value].email}
      </Text>
    </div>
  </Group>
);

function Demo() {
  return (
    <Autocomplete
      data={['Emily Johnson', 'Ava Rodriguez', 'Olivia Chen', 'Ethan Barnes', 'Mason Taylor']}
      renderOption={renderAutocompleteOption}
      maxDropdownHeight={300}
      label="Employee of the month"
      placeholder="Search for employee"
    />
  );
}
```

## Nothing found message

`Autocomplete` component does not support nothing found message. It is designed to
accept any string as a value, so it does not make sense to show nothing found message.
If you want to limit user input to suggestions, you can use searchable [Select](https://mantine.dev/core/select)
component instead. To learn more about the differences between `Autocomplete` and `Select`, check
[help center article](https://help.mantine.dev/q/select-autocomplete-difference).

## Scrollable dropdown

By default, the options list is wrapped with [ScrollArea.Autosize](https://mantine.dev/core/scroll-area).
You can control dropdown max-height with `maxDropdownHeight` prop if you do not change the default settings.

If you want to use native scrollbars, set `withScrollArea={false}`. Note that in this case,
you will need to change dropdown styles with [Styles API](https://mantine.dev/styles/styles-api).

#### Example: scrollArea

```tsx
import { Autocomplete } from '@mantine/core';

const data = Array(100)
  .fill(0)
  .map((_, index) => `Option ${index}`);

function Demo() {
  return (
    <>
      <Autocomplete
        label="With scroll area (default)"
        placeholder="Pick value or enter anything"
        data={data}
        maxDropdownHeight={200}
      />

      <Autocomplete
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
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
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
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
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

To use `Autocomplete` inside popover, you need to set `withinPortal: false`:

#### Example: withinPopover

```tsx
import { Popover, Button, Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Popover width={300} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Autocomplete
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

## Clearable

Set `clearable` prop to display the clear button in the right section. The button is not displayed
when:

- The component does not have a value
- The component is disabled
- The component is read only

#### Example: clearable

```tsx
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      clearable
      defaultValue="React"
      data={['React', 'Angular']}
      label="Clearable autocomplete"
      placeholder="Clearable autocomplete"
    />
  );
}
```

## Control dropdown opened state

You can control dropdown opened state with `dropdownOpened` prop. Additionally,
you can use `onDropdownClose` and `onDropdownOpen` to listen to dropdown opened state changes.

#### Example: dropdownOpened

```tsx
import { Autocomplete, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [dropdownOpened, { toggle }] = useDisclosure();
  return (
    <>
      <Button onClick={toggle} mb="md">
        Toggle dropdown
      </Button>

      <Autocomplete
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
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
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
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
    />
  );
}
```

## Dropdown padding

#### Example: dropdownPadding

```tsx
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <>
      <Autocomplete
        label="Zero padding"
        placeholder="Pick value or enter anything"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        comboboxProps={{ dropdownPadding: 0 }}
      />
      <Autocomplete
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
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ shadow: 'md' }}
    />
  );
}
```

## Input sections

Autocomplete supports left and right sections to display icons, buttons or other content alongside the input.

#### Example: sections

```tsx
import { Autocomplete } from '@mantine/core';
import { IconComponents } from '@tabler/icons-react';

function Demo() {
  const icon = <IconComponents size={16} />;
  return (
    <>
      <Autocomplete
        data={['React', 'Angular', 'Vue']}
        leftSectionPointerEvents="none"
        leftSection={icon}
        label="Your favorite library"
        placeholder="Your favorite library"
      />
      <Autocomplete
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

Autocomplete component supports [Input](https://mantine.dev/core/input) and [Input.Wrapper](https://mantine.dev/core/input) components features and all input element props. Autocomplete documentation does not include all features supported by the component – see [Input](https://mantine.dev/core/input) documentation to learn about all available features.

#### Example: configurator

```tsx
import { Autocomplete } from '@mantine/core';


function Demo() {
  return (
    <Autocomplete
      
      placeholder="Autocomplete placeholder"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
```

## Read only

Set `readOnly` to make the input read only. When `readOnly` is set,
`Autocomplete` will not show suggestions and will not call `onChange` function.

#### Example: readOnly

```tsx
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      readOnly
    />
  );
}
```

## Disabled

Set `disabled` to disable the input. When `disabled` is set,
user cannot interact with the input and `Autocomplete` will not show suggestions.

#### Example: disabled

```tsx
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      disabled
    />
  );
}
```

## Error state

#### Example: error

```tsx
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <>
      <Autocomplete
        label="Boolean error"
        placeholder="Boolean error"
        error
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
      <Autocomplete
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
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
     
      leftSection={<IconAt size={18} stroke={1.5} />}
      label="Autocomplete"
      description="Description"
      error="Error"
      placeholder="Autocomplete"
      data={['React', 'Angular']}
    />
  );
}
```

## Get element ref

```tsx
import { useRef } from 'react';
import { Autocomplete } from '@mantine/core';

function Demo() {
  const ref = useRef<HTMLInputElement>(null);
  return <Autocomplete ref={ref} />;
}
```
