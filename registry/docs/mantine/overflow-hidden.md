## overflow: hidden

By default, `Grid` has `overflow: visible` style on the root element. In some cases
you might want to change it to `overflow: hidden` to prevent negative margins from
overflowing the grid container. For example, if you use `Grid` without parent container
which has padding.

```tsx
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid overflow="hidden">
      <Grid.Col span={6}>1</Grid.Col>
      <Grid.Col span={6}>2</Grid.Col>
    </Grid>
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| align | AlignItems | - | Sets align-items |
| breakpoints | GridBreakpoints | - | Breakpoints values, only used with type="container" |
| columns | number | - | Number of columns in each row |
| grow | boolean | - | If set, columns in the last row expand to fill all available space |
| gutter | StyleProp | - | Gutter between columns, key of theme.spacing or any valid CSS value |
| justify | JustifyContent | - | Sets justify-content |
| overflow | Overflow | - | Sets overflow CSS property on the root element |
| type | "media" | "container" | - | Type of queries used for responsive styles |

#### Styles API

Grid component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Grid selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| container | .mantine-Grid-container | Container element, only used with `type="container"` prop |
| root | .mantine-Grid-root | Root element |
| inner | .mantine-Grid-inner | Columns wrapper |
| col | .mantine-Grid-col | `Grid.Col` root element |

**Grid CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --grid-overflow | Controls `overflow` property |
| root | --grid-align | Controls `align-items` property |
| root | --grid-justify | Controls `justify-content` property |

### Group

Package: @mantine/core
Import: import { Group } from '@mantine/core';
Description: Compose elements and components in a horizontal flex container

## Usage

`Group` is a horizontal flex container. If you need a vertical flex container, use [Stack](https://mantine.dev/core/stack)
component instead. If you need to have full control over flex container properties, use [Flex](https://mantine.dev/core/flex) component.

#### Example: usage

```tsx
import { Group, Button } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Button variant="default">First</Button>
      <Button variant="default">Second</Button>
      <Button variant="default">Third</Button>
    </Group>
  );
}
```

## preventGrowOverflow

`preventGrowOverflow` prop allows you to control how `Group` children should behave when there is not enough
space to fit them all on one line. By default, children are not allowed to take more space than
`(1 / children.length) * 100%` of parent width (`preventGrowOverflow` is set to `true`). To change
this behavior, set `preventGrowOverflow` to `false` and children will be allowed to grow and take
as much space as they need.

#### Example: preventGrowOverflow

```tsx
import { Group, Button, Box, Text } from '@mantine/core';

function Demo() {
  return (
    <Box style={{ overflow: 'hidden' }}>
      <Box maw={500} p="md" mx="auto" bg="var(--mantine-color-blue-light)">
        <Text size="sm" mb={5}>
          preventGrowOverflow: true – each child width is always limited to 33% of parent width
          (since there are 3 children)
        </Text>

        <Group grow wrap="nowrap">
          <Button variant="default">First button</Button>
          <Button variant="default">Second button with large content</Button>
          <Button variant="default">Third button</Button>
        </Group>

        <Text size="sm" mb={5} mt="md">
          preventGrowOverflow: false – children will grow based on their content, they can take more
          than 33% of parent width
        </Text>

        <Group grow preventGrowOverflow={false} wrap="nowrap">
          <Button variant="default">First button</Button>
          <Button variant="default">Second button with large content</Button>
          <Button variant="default">Third button</Button>
        </Group>
      </Box>
    </Box>
  );
}
```

## Group children

**!important** `Group` works correctly only with React elements.
Strings, numbers, fragments may have incorrect styles if `grow` prop is set:

```tsx
// Invalid Group usage, do not do this
import { Group } from '@mantine/core';

function InvalidDemo() {
  return (
    <Group grow>
      First string
      <>
        <div>element inside fragment</div>
        <div>another inside fragment</div>
      </>
      {20}
    </Group>
  );
}
```

## Browser support

Flex component uses CSS flexbox gap to add spacing between children. Flexbox gap is supported by all modern browsers, but if you need to support older browsers, use Space component instead.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| align | AlignItems | - | Controls align-items CSS property |
| gap | MantineSpacing | - | Key of theme.spacing or any valid CSS value for gap, numbers are converted to rem |
| grow | boolean | - | Determines whether each child element should have flex-grow: 1 style |
| justify | JustifyContent | - | Controls justify-content CSS property |
| preventGrowOverflow | boolean | - | Determines whether children should take only dedicated amount of space (max-width style is set based on the number of children) |
| wrap | FlexWrap | - | Controls flex-wrap CSS property |

#### Styles API

Group component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Group selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Group-root | Root element |

**Group CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --group-align | Controls `align-items` property |
| root | --group-justify | Controls `justify-content` property |
| root | --group-gap | Controls `gap` property |
| root | --group-wrap | Controls `flex-wrap` property |

**Group data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-grow | - | - |

### Highlight

Package: @mantine/core
Import: import { Highlight } from '@mantine/core';
Description: Highlight given part of a string with mark

## Usage

Use Highlight component to highlight a substring in a given string with a mark tag.

Pass the main string as children to Highlight component and string part that should be highlighted to `highlight` prop.
If the main string does not include `highlight` part, it will be ignored.
`Highlight` ignores trailing whitespace and highlights all matched characters sequences.

#### Example: usage

```tsx
import { Highlight } from '@mantine/core';

function Demo() {
  return (
    <Highlight>
      {{children}}
    </Highlight>
  );
}
```

## Highlight multiple substrings

To highlight multiple substrings, provide an array of values:

#### Example: multiple

```tsx
import { Highlight } from '@mantine/core';

function Demo() {
  return <Highlight highlight={['this', 'that']}>Highlight this and also that</Highlight>;
}
```

## Change highlight styles

Default [Mark](https://mantine.dev/core/mark/) styles can be overwritten with `highlightStyles` prop, it accepts either a function with a subscription to theme
or an object with styles:

#### Example: styles

```tsx
import { Highlight } from '@mantine/core';

function Demo() {
  return (
    <Highlight
      ta="center"
      highlight={['highlighted', 'default']}
      highlightStyles={{
        backgroundImage:
          'linear-gradient(45deg, var(--mantine-color-cyan-5), var(--mantine-color-indigo-5))',
        fontWeight: 700,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      You can change styles of highlighted part if you do not like default styles
    </Highlight>
  );
}
```
