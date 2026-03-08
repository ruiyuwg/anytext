## Example: Table with row selection

#### Example: rowSelection

```tsx
import { useState } from 'react';
import { Table, Checkbox } from '@mantine/core';

const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

function Demo() {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const rows = elements.map((element) => (
    <Table.Tr
      key={element.name}
      bg={selectedRows.includes(element.position) ? 'var(--mantine-color-blue-light)' : undefined}
    >
      <Table.Td>
        <Checkbox
          aria-label="Select row"
          checked={selectedRows.includes(element.position)}
          onChange={(event) =>
            setSelectedRows(
              event.currentTarget.checked
                ? [...selectedRows, element.position]
                : selectedRows.filter((position) => position !== element.position)
            )
          }
        />
      </Table.Td>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th />
          <Table.Th>Element position</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Atomic mass</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| borderColor | MantineColor | - | Color of table borders, key of theme.colors or any valid CSS color |
| captionSide | "bottom" | "top" | - | Side of the Table.Caption |
| data | TableData | - | Data used to generate table, ignored if children prop is set |
| highlightOnHover | boolean | - | If set, table rows background changes to highlightOnHoverColor when hovered |
| highlightOnHoverColor | MantineColor | - | Background color of table rows when hovered, key of theme.colors or any valid CSS color |
| horizontalSpacing | MantineSpacing | - | Horizontal cells spacing, key of theme.spacing or any valid CSS value for padding, numbers are converted to rem |
| layout | TableLayout | - | Value of table-layout style |
| stickyHeader | boolean | - | If set, Table.Thead is sticky |
| stickyHeaderOffset | string | number | - | Offset from top at which Table.Thead should become sticky |
| striped | boolean | "odd" | "even" | - | If set, every odd/even row background changes to strippedColor, if set to true, then odd value will be used |
| stripedColor | MantineColor | - | Background color of striped rows, key of theme.colors or any valid CSS color |
| tabularNums | boolean | - | If set, font-variant-numeric: tabular-nums style is applied |
| verticalSpacing | MantineSpacing | - | Vertical cells spacing, key of theme.spacing or any valid CSS value for padding, numbers are converted to rem |
| withColumnBorders | boolean | - | If set, the table has borders between columns |
| withRowBorders | boolean | - | If set, the table has borders between rows |
| withTableBorder | boolean | - | If set, the table has the outer border |

#### Styles API

Table component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Table selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| table | .mantine-Table-table | Root `table` element (`Table` component) |
| thead | .mantine-Table-thead | `thead` element (`Table.Thead` component) |
| tbody | .mantine-Table-tbody | `tbody` element (`Table.Tbody` component) |
| tfoot | .mantine-Table-tfoot | `tfoot` element (`Table.Tfoot` component) |
| tr | .mantine-Table-tr | `tr` element (`Table.Tr` component) |
| th | .mantine-Table-th | `th` element (`Table.Th` component) |
| td | .mantine-Table-td | `td` element (`Table.Td` component) |
| caption | .mantine-Table-caption | `caption` element (`Table.Caption` component) |

**Table CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| table | --table-border-color | Controls `border-color` of all elements inside table |
| table | --table-layout | Controls `table-layout` of the table element, auto by default |
| table | --table-caption-side | Controls caption-side of the table element, `bottom` by default |
| table | --table-striped-color | Controls `background-color` of even/odd `Table.Tr` elements |
| table | --table-sticky-header-offset | Controls `top` offset of sticky header |

**Table data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| table | data-with-table-border | - | - |

**Tableofcontents selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Tableofcontents-root | Root element |
| control | .mantine-Tableofcontents-control | Control element |

**Tableofcontents CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --toc-bg | Background color of active control |
| root | --toc-color | Text color of active control |
| root | --toc-depth-offset | Offset between of control depending on depth |
| root | --toc-radius | Border-radius of control |
| root | --toc-size | Controls font-size and padding of all elements |

**Tableofcontents data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| control | data-active | Associated heading is currently the best match in the viewport | - |

### Tabs

Package: @mantine/core
Import: import { Tabs } from '@mantine/core';
Description: Switch between different views

## Usage

#### Example: usage

```tsx
import { Tabs } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';

function Demo() {
  return (
    <Tabs defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab value="gallery" leftSection={<IconPhoto size={12} />}>
          Gallery
        </Tabs.Tab>
        <Tabs.Tab value="messages" leftSection={<IconMessageCircle size={12} />}>
          Messages
        </Tabs.Tab>
        <Tabs.Tab value="settings" leftSection={<IconSettings size={12} />}>
          Settings
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery">
        Gallery tab content
      </Tabs.Panel>

      <Tabs.Panel value="messages">
        Messages tab content
      </Tabs.Panel>

      <Tabs.Panel value="settings">
        Settings tab content
      </Tabs.Panel>
    </Tabs>
  );
}
```

## Controlled Tabs

To control Tabs state, use `value` and `onChange` props:

```tsx
import { useState } from 'react';
import { Tabs } from '@mantine/core';

function Demo() {
  const [activeTab, setActiveTab] = useState<string | null>('first');

  return (
    <Tabs value={activeTab} onChange={setActiveTab}>
      <Tabs.List>
        <Tabs.Tab value="first">First tab</Tabs.Tab>
        <Tabs.Tab value="second">Second tab</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="first">First panel</Tabs.Panel>
      <Tabs.Panel value="second">Second panel</Tabs.Panel>
    </Tabs>
  );
}
```

## Uncontrolled Tabs

If you do not need to subscribe to Tabs state changes, use `defaultValue`:

```tsx
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="first">
      <Tabs.List>
        <Tabs.Tab value="first">First tab</Tabs.Tab>
        <Tabs.Tab value="second">Second tab</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="first">First panel</Tabs.Panel>
      <Tabs.Panel value="second">Second panel</Tabs.Panel>
    </Tabs>
  );
}
```

## Change colors

To change colors of all tabs, set `color` on `Tabs` component, to change color of the individual tab,
set `color` on `Tabs.Tab`.

#### Example: colors

```tsx
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs color="teal" defaultValue="first">
      <Tabs.List>
        <Tabs.Tab value="first">Teal tab</Tabs.Tab>
        <Tabs.Tab value="second" color="blue">
          Blue tab
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="first" pt="xs">
        First tab color is teal, it gets this value from context
      </Tabs.Panel>

      <Tabs.Panel value="second" pt="xs">
        Second tab color is blue, it gets this value from props, props have the priority and will
        override context value
      </Tabs.Panel>
    </Tabs>
  );
}
```

## Tabs position

#### Example: position

```tsx
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="first">
      <Tabs.List>
        <Tabs.Tab value="first">First tab</Tabs.Tab>
        <Tabs.Tab value="second">Second tab</Tabs.Tab>
        <Tabs.Tab value="third">Third tab</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
```

To display tab on the opposite side, set `margin-left: auto` with `ml="auto"` prop or with `className`:

#### Example: pull

```tsx
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="chat">
      <Tabs.List>
        <Tabs.Tab value="chat">Chat</Tabs.Tab>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="settings">Settings</Tabs.Tab>
        <Tabs.Tab value="account" ml="auto">
          Account
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
```

## Inverted tabs

To make tabs inverted, place `Tabs.Panel` components before `Tabs.List` and add `inverted` prop to `Tabs` component:

#### Example: inverted

```tsx
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="chat" inverted>
      <Tabs.Panel value="chat" pb="xs">Chat panel</Tabs.Panel>
      <Tabs.Panel value="gallery" pb="xs">Gallery panel</Tabs.Panel>
      <Tabs.Panel value="account" pb="xs">Account panel</Tabs.Panel>

      <Tabs.List>
        <Tabs.Tab value="chat">Chat</Tabs.Tab>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="account">Account</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
```

## Vertical tabs placement

To change placement of `Tabs.List` in vertical orientation set `placement` prop:

#### Example: placement

```tsx
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="gallery" orientation="vertical">
      <Tabs.List>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="messages">Messages</Tabs.Tab>
        <Tabs.Tab value="settings">Settings</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery">Gallery tab content</Tabs.Panel>
      <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>
      <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
    </Tabs>
  );
}
```
