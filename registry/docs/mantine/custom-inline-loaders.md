## Custom inline loaders

To replace default loader with any custom content, set `loaderProps={{ children: <div>Your content</div> }}`.
You can put any React node inside `loaderProps.children`:

#### Example: customLoader

```tsx
import { useDisclosure } from '@mantine/hooks';
import { LoadingOverlay, Button, Group, Box } from '@mantine/core';

function Demo() {
  const [visible, { toggle }] = useDisclosure(false);

  return (
    <>
      <Box pos="relative">
        <LoadingOverlay visible={visible} loaderProps={{ children: 'Loading...' }} />
        {/* ...other content */}
      </Box>

      <Group justify="center">
        <Button onClick={toggle}>Toggle overlay</Button>
      </Group>
    </>
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| loaderProps | LoaderProps | - | Props passed down to Loader component |
| overlayProps | OverlayProps | - | Props passed down to Overlay component |
| transitionProps | TransitionProps | - | Props passed down to Transition component |
| visible | boolean | - | Determines whether the overlay should be visible |
| zIndex | string | number | - | Controls overlay z-index |

#### Styles API

LoadingOverlay component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**LoadingOverlay selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-LoadingOverlay-root | Root element |
| overlay | .mantine-LoadingOverlay-overlay | `Overlay` component |
| loader | .mantine-LoadingOverlay-loader | `Loader` component |

**LoadingOverlay CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --lo-z-index | Controls `z-index` of the overlay and loader |

### Mark

Package: @mantine/core
Import: import { Mark } from '@mantine/core';
Description: Highlight part of the text

## Usage

#### Example: usage

```tsx
import { Text, Mark } from '@mantine/core';

function Demo() {
  return (
    <Text>
      Highlight <Mark>this chunk</Mark> of the text
    </Text>
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| color | MantineColor | - | Key of theme.colors or any valid CSS color |

#### Styles API

Mark component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Mark selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Mark-root | Root element |

**Mark CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --mark-bg-dark | Controls `background-color` in dark color scheme |
| root | --mark-bg-light | Controls `background-color` for light color scheme |

### Menu

Package: @mantine/core
Import: import { Menu } from '@mantine/core';
Description: Combine a list of secondary actions into single interactive area

## Usage

#### Example: usage

```tsx
import { Menu, Button, Text } from '@mantine/core';
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
} from '@tabler/icons-react';

function Demo() {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button>Toggle menu</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item leftSection={<IconSettings size={14} />}>
          Settings
        </Menu.Item>
        <Menu.Item leftSection={<IconMessageCircle size={14} />}>
          Messages
        </Menu.Item>
        <Menu.Item leftSection={<IconPhoto size={14} />}>
          Gallery
        </Menu.Item>
        <Menu.Item
          leftSection={<IconSearch size={14} />}
          rightSection={
            <Text size="xs" c="dimmed">
              ⌘K
            </Text>
          }
        >
          Search
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item
          leftSection={<IconArrowsLeftRight size={14} />}
        >
          Transfer my data
        </Menu.Item>
        <Menu.Item
          color="red"
          leftSection={<IconTrash size={14} />}
        >
          Delete my account
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
```

## Submenus

#### Example: sub

```tsx
import { Button, Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu width={200} position="bottom-start">
      <Menu.Target>
        <Button>Toggle Menu</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item>Dashboard</Menu.Item>

        <Menu.Sub openDelay={120} closeDelay={150}>
          <Menu.Sub.Target>
            <Menu.Sub.Item>Products</Menu.Sub.Item>
          </Menu.Sub.Target>

          <Menu.Sub.Dropdown>
            <Menu.Item>All products</Menu.Item>
            <Menu.Item>Categories</Menu.Item>
            <Menu.Item>Tags</Menu.Item>
            <Menu.Item>Attributes</Menu.Item>
            <Menu.Item>Shipping classes</Menu.Item>
          </Menu.Sub.Dropdown>
        </Menu.Sub>

        <Menu.Sub>
          <Menu.Sub.Target>
            <Menu.Sub.Item>Orders</Menu.Sub.Item>
          </Menu.Sub.Target>

          <Menu.Sub.Dropdown>
            <Menu.Item>Open</Menu.Item>
            <Menu.Item>Completed</Menu.Item>
            <Menu.Item>Cancelled</Menu.Item>
          </Menu.Sub.Dropdown>
        </Menu.Sub>

        <Menu.Sub>
          <Menu.Sub.Target>
            <Menu.Sub.Item>Settings</Menu.Sub.Item>
          </Menu.Sub.Target>

          <Menu.Sub.Dropdown>
            <Menu.Item>Profile</Menu.Item>
            <Menu.Item>Security</Menu.Item>
            <Menu.Item>Notifications</Menu.Item>
          </Menu.Sub.Dropdown>
        </Menu.Sub>
      </Menu.Dropdown>
    </Menu>
  );
}
```

## Controlled

Dropdown opened state can be controlled with `opened` and `onChange` props:

```tsx
import { useState } from 'react';
import { Menu } from '@mantine/core';

function Demo() {
  const [opened, setOpened] = useState(false);
  return (
    <Menu opened={opened} onChange={setOpened}>
      {/* Menu content */}
    </Menu>
  );
}
```

## Show menu on hover

Set `trigger="hover"` to reveal dropdown when hovers over menu target and dropdown.
`closeDelay` and `openDelay` props can be used to control open and close delay in ms.
Note that:

- If you set `closeDelay={0}` then menu will close before user will reach dropdown, set `offset={0}` to remove space between target element and dropdown.
- Menu with `trigger="hover"` is not accessible – users that navigate with keyboard will not be able to use it. If you need click-hover hover and click triggers, use `trigger="click-hover"`.

#### Example: hover

```tsx
import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu trigger="hover" openDelay={100} closeDelay={400}>
      {/* ... menu items */}
    </Menu>
  );
}
```

To make `Menu` that is revealed on hover accessible on all devices, use `trigger="click-hover"` instead.
The dropdown will be revealed on hover on desktop and on click on mobile devices.

#### Example: clickHover

```tsx
import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu trigger="click-hover" openDelay={100} closeDelay={400}>
      {/* ... menu items */}
    </Menu>
  );
}
```

## Disabled items

#### Example: disabled

```tsx
import { Menu, Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

function Demo() {
  return (
    <Menu>
      <Menu.Target>
        <Button>Toggle menu</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          leftSection={<IconSearch size={14} />}
          disabled
        >
          Search
        </Menu.Item>

        {/* Other items ... */}
      </Menu.Dropdown>
    </Menu>
  );
}
```

## Dropdown position

#### Example: positionConfigurator

```tsx
import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu>
      {/* Menu items */}
    </Menu>
  );
}
```

## Transitions

Menu dropdown can be animated with any of premade transitions from [Transition](https://mantine.dev/core/transition/) component:

#### Example: transitions

```tsx
import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu transitionProps={{ transition: 'rotate-right', duration: 150 }}>
      {/* Menu content */}
    </Menu>
  );
}
```

## Custom component as Menu.Item

By default, `Menu.Item` renders as button element, to change that set `component` prop:

#### Example: component

```tsx
import { Menu, Button } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';

function Demo() {
  return (
    <Menu width={200} shadow="md">
      <Menu.Target>
        <Button>Toggle menu</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item component="a" href="https://mantine.dev">
          Mantine website
        </Menu.Item>
        <Menu.Item
          leftSection={<IconExternalLink size={14} />}
          component="a"
          href="https://mantine.dev"
          target="_blank"
        >
          External link
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
```

Note that the component you pass to `component` prop should allow spreading props to its root element:

```tsx
import { Menu } from '@mantine/core';

// ❌ Will not work with Menu.Item
function IncorrectItem() {
  return <button type="button">My custom Menu item</button>;
}

// ✅ Will work correctly with Menu.Item
const CorrectItem = forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<'button'>
>((props, ref) => (
  <button type="button" {...props} ref={ref}>
    My custom Menu item
  </button>
));

function Demo() {
  // ❌ Will not work
  const incorrect = <Menu.Item component={IncorrectItem} />;

  // ✅ Will work
  const correct = <Menu.Item component={CorrectItem} />;
}
```

## Custom component as target

#### Example: customControl

```tsx
import { forwardRef } from 'react';
import { IconChevronRight } from '@tabler/icons-react';
import { Group, Avatar, Text, Menu, UnstyledButton } from '@mantine/core';

interface UserButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  image: string;
  name: string;
  email: string;
  icon?: React.ReactNode;
}

const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(
  ({ image, name, email, icon, ...others }: UserButtonProps, ref) => (
    <UnstyledButton
      ref={ref}
      style={{
        padding: 'var(--mantine-spacing-md)',
        color: 'var(--mantine-color-text)',
        borderRadius: 'var(--mantine-radius-sm)',
      }}
      {...others}
    >
      <Group>
        <Avatar src={image} radius="xl" />

        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            {name}
          </Text>

          <Text c="dimmed" size="xs">
            {email}
          </Text>
        </div>

        {icon || <IconChevronRight size={16} />}
      </Group>
    </UnstyledButton>
  )
);

function Demo() {
  return (
    <Menu withArrow>
      <Menu.Target>
        <UserButton
          image="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
          name="Harriette Spoonlicker"
          email="hspoonlicker@outlook.com"
        />
      </Menu.Target>
      {/* ... menu items */}
    </Menu>
  );
}
```

#### Example: stylesApi

```tsx
import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu {...props} opened withArrow position="left">
      {/* ... menu items */}
    </Menu>
  );
}
```

## Target component

The target element determines where the Menu will be positioned relative to.
