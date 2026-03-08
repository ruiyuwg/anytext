## Reinitialize

By default, `TableOfContents` does not track changes in the DOM. If you want
to update headings data after the parent component has mounted, you can use
`reinitializeRef` to get reinitialize function from [use-scroll-spy](https://mantine.dev/hooks/use-scroll-spy) hook:

```tsx
import { useRef, useLayoutEffect } from 'react';
import { TableOfContents } from '@mantine/core';

function Demo({ dependency }) {
  const reinitializeRef = useRef(() => {});

  useLayoutEffect(() => {
    reinitializeRef.current();
  }, [dependency]);

  return <TableOfContents reinitializeRef={reinitializeRef} />;
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autoContrast | boolean | - | If set, adjusts text color based on background color for filled variant |
| color | MantineColor | - | Key of theme.colors or any valid CSS color value |
| depthOffset | string | number | - | Controls padding on the left side of control, multiplied by (depth - minDepthToOffset), 20px by default |
| getControlProps | (payload: TableOfContentsGetControlPropsPayload) => UnstyledButtonProps & ElementProps<"button"> & Record<...> | - | A function to pass props down to controls, accepts values from use-scroll-spy hook as an argument and active state. |
| initialData | InitialTableOfContentsData\[] | - | Data used to render content until actual values are retrieved from the DOM |
| minDepthToOffset | number | - | Minimum depth value that requires offset, 1 by default |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius@default theme.defaultRadius |
| reinitializeRef | RefObject<() => void> | - | A function to reinitialize headings from use-scroll-spy hook |
| scrollSpyOptions | UseScrollSpyOptions | - | Options passed down to use-scroll-spy hook |
| size | number | MantineSize | (string & {}) | - | Controls font-size and padding of all elements |

#### Styles API

TableOfContents component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**TableOfContents selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-TableOfContents-root | Root element |
| control | .mantine-TableOfContents-control | Control element |

**TableOfContents CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --toc-bg | Background color of active control |
| root | --toc-color | Text color of active control |
| root | --toc-depth-offset | Offset between of control depending on depth |
| root | --toc-radius | Border-radius of control |
| root | --toc-size | Controls font-size and padding of all elements |

**TableOfContents data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| control | data-active | Associated heading is currently the best match in the viewport | - |

### Table

Package: @mantine/core
Import: import { Table } from '@mantine/core';
Description: Render table with theme styles

## Usage

Table data for all examples:

```tsx
const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];
```

#### Example: usage

```tsx
import { Table } from '@mantine/core';

function Demo() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
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

## data prop

You can use `data` prop to automatically generate table rows from array of React nodes.
`data` prop accepts an object with the following properties:

- `head` – an array of React nodes (`React.ReactNode[]`) to render `Table.Th` in `Table.Thead`
- `foot` – an array of React nodes (`React.ReactNode[]`) to render `Table.Th` in `Table.Tfoot`
- `body` - an array of arrays of React nodes (`React.ReactNode[][]`) to render `Table.Td` in `Table.Tbody`
- `caption` – a React node to render `Table.Caption`

#### Example: data

```tsx
import { Table, TableData } from '@mantine/core';

const tableData: TableData = {
  caption: 'Some elements from periodic table',
  head: ['Element position', 'Atomic mass', 'Symbol', 'Element name'],
  body: [
    [6, 12.011, 'C', 'Carbon'],
    [7, 14.007, 'N', 'Nitrogen'],
    [39, 88.906, 'Y', 'Yttrium'],
    [56, 137.33, 'Ba', 'Barium'],
    [58, 140.12, 'Ce', 'Cerium'],
  ],
};

function Demo() {
  return <Table data={tableData} />;
}
```

## Sticky header

Set `stickyHeader` to make table header sticky. To customize top position of the header use `stickyHeaderOffset` prop:
it is useful when you have a fixed header in your application. For example, Mantine documentation website has a fixed
header with 60px height:

#### Example: stickyHeader

```tsx
import { Table } from '@mantine/core';

const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

function Demo() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table stickyHeader stickyHeaderOffset={60}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Element position</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Atomic mass</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
      <Table.Caption>Scroll page to see sticky thead</Table.Caption>
    </Table>
  );
}
```

## Spacing

To control spacing use `horizontalSpacing` and `verticalSpacing` props. Both props support spacing from `theme.spacing` and any valid CSS value to set cell padding:

#### Example: spacingConfigurator

```tsx
import { Table } from '@mantine/core';

function Demo() {
  return (
    <Table>
      {/* {...rows} */}
    </Table>
  );
}
```

## Caption and tfoot

Table support tfoot and caption elements. Set `captionSide` prop (top or bottom) to change caption position.

#### Example: captions

```tsx
import { Table } from '@mantine/core';

function Demo() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  const ths = (
    <Table.Tr>
      <Table.Th>Element position</Table.Th>
      <Table.Th>Element name</Table.Th>
      <Table.Th>Symbol</Table.Th>
      <Table.Th>Atomic mass</Table.Th>
    </Table.Tr>
  );

  return (
    <Table captionSide="bottom">
      <Table.Caption>Some elements from periodic table</Table.Caption>
      <Table.Thead>{ths}</Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
      <Table.Tfoot>{ths}</Table.Tfoot>
    </Table>
  );
}
```

## Striped and rows hover

#### Example: configurator

```tsx
import { Table } from '@mantine/core';

function Demo() {
  return (
    <Table>
      {/* {...rows} */}
    </Table>
  );
}
```
