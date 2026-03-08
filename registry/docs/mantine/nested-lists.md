## Nested lists

Set `withPadding` prop to offset nested lists and `listStyleType` to control bullet type:

#### Example: nested

```tsx
import { List } from '@mantine/core';

function Demo() {
  return (
    <List listStyleType="disc">
      <List.Item>First order item</List.Item>
      <List.Item>First order item</List.Item>
      <List.Item>
        First order item with list
        <List withPadding listStyleType="disc">
          <List.Item>Nested item</List.Item>
          <List.Item>Nested item</List.Item>
          <List.Item>
            Nested item with list
            <List withPadding listStyleType="disc">
              <List.Item>Event more nested</List.Item>
              <List.Item>Event more nested</List.Item>
            </List>
          </List.Item>
          <List.Item>Nested item</List.Item>
        </List>
      </List.Item>
      <List.Item>First order item</List.Item>
    </List>
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| center | boolean | - | Determines whether items must be centered with their icon |
| children | React.ReactNode | - | List.Item components |
| icon | React.ReactNode | - | Icon to replace list item dot |
| listStyleType | ListStyleType | - | Controls list-style-type, by default inferred from type |
| size | MantineSize | - | Controls font-size and line-height |
| spacing | MantineSpacing | - | Key of theme.spacing or any valid CSS value to set spacing between items |
| type | "ordered" | "unordered" | - | List type |
| withPadding | boolean | - | Determines whether list items should be offset with padding |

#### Styles API

List component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**List selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-List-root | Root element |
| item | .mantine-List-item | ListItem root element |
| itemIcon | .mantine-List-itemIcon | ListItem icon |
| itemLabel | .mantine-List-itemLabel | ListItem content |
| itemWrapper | .mantine-List-itemWrapper | ListItem wrapper element, container, icon and content |

**List CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --list-fz | Controls `font-size` |
| root | --list-lh | Controls `line-height` |
| root | --list-spacing | Controls spacing between items |

**List data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-with-padding | - | - |
| item | data-centered | - | - |
| item | data-with-icon | - | - |

### Loader

Package: @mantine/core
Import: import { Loader } from '@mantine/core';
Description: Indicate loading state

## Usage

`Loader` component supports 3 types of loaders: `oval`, `bars` and `dots` by default. All
loaders are animated with CSS for better performance.

#### Example: configurator

```tsx
import { Loader } from '@mantine/core';

function Demo() {
  return <Loader />;
}
```

## Size prop

You can pass any valid CSS values and numbers to `size` prop. Numbers are treated as px, but
converted to [rem](https://mantine.dev/styles/rem). For example, `size={32}` will produce
`--loader-size: 2rem` CSS variable.

#### Example: size

```tsx
import { Loader } from '@mantine/core';

function Demo() {
  return <Loader />;
}
```
