## Enter and exit delay

Use `enterDelay` and `exitDelay` props to delay transition start. Values are in milliseconds:

#### Example: delay

```tsx
import { useState } from 'react';
import { Button, Flex, Paper, Transition } from '@mantine/core';

export function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <Flex maw={200} pos="relative" justify="center" m="auto">
      <Button onClick={() => setOpened(true)}>Open dropdown</Button>

      <Transition mounted={opened} transition="pop" enterDelay={500} exitDelay={300}>
        {(transitionStyle) => (
          <Paper
            shadow="md"
            p="xl"
            h={120}
            pos="absolute"
            inset={0}
            bottom="auto"
            onClick={() => setOpened(false)}
            style={{ ...transitionStyle, zIndex: 1 }}
          >
            Click to close
          </Paper>
        )}
      </Transition>
    </Flex>
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | (styles: CSSProperties) => Element | required | Render function with transition styles argument |
| duration | number | - | Transition duration in ms |
| enterDelay | number | - | Delay in ms before enter transition starts |
| exitDelay | number | - | Delay in ms before exit transition starts |
| exitDuration | number | - | Exit transition duration in ms |
| keepMounted | boolean | - | If set, the element is not unmounted from the DOM when hidden, display: none styles are applied instead |
| mounted | boolean | required | Determines whether component should be mounted to the DOM |
| onEnter | () => void | - | Called when enter transition starts |
| onEntered | () => void | - | Called when enter transition ends |
| onExit | () => void | - | Called when exit transition starts |
| onExited | () => void | - | Called when exit transition ends |
| timingFunction | string | - | Transition timing function |
| transition | MantineTransition | - | Transition name or object |

### Tree

Package: @mantine/core
Import: import { Tree } from '@mantine/core';
Description: Display a Tree structure

## Usage

`Tree` component is used to display hierarchical data. `Tree` component
has minimal styling by default, you can customize styles with [Styles API](https://mantine.dev/styles/styles-api).

#### Example: usage

```tsx
import { Tree } from '@mantine/core';
import { data } from './data';

function Demo() {
  return <Tree data={data} />;
}
```

## Data prop

Data passed to the `data` prop should follow these rules:

- Data must be a stable reference (memoized)
- Data must be an array
- Each item in the array represents a node in the tree
- Each node must be an object with `value` and `label` keys
- Each node can have `children` key with an array of child nodes
- The `value` of each node must be unique

Valid data example:

```tsx
// ✅ Valid data, all values are unique
const data = [
  {
    value: 'src',
    label: 'src',
    children: [
      { value: 'src/components', label: 'components' },
      { value: 'src/hooks', label: 'hooks' },
    ],
  },
  { value: 'package.json', label: 'package.json' },
];
```

Invalid data example:

```tsx
// ❌ Invalid data, values are not unique (components is used twice)
const data = [
  {
    value: 'src',
    label: 'src',
    children: [{ value: 'components', label: 'components' }],
  },
  { value: 'components', label: 'components' },
];
```

## Data type

You can import `TreeNodeData` type to define data type for your tree:

```tsx
import { TreeNodeData } from '@mantine/core';

const data: TreeNodeData[] = [
  {
    value: 'src',
    label: 'src',
    children: [
      { value: 'src/components', label: 'components' },
      { value: 'src/hooks', label: 'hooks' },
    ],
  },
  { value: 'package.json', label: 'package.json' },
];
```

## renderNode

Use `renderNode` prop to customize node rendering.
`renderNode` function receives an object with the following properties as a single argument:

```tsx
export interface RenderTreeNodePayload {
  /** Node level in the tree */
  level: number;

  /** `true` if the node is expanded, applicable only for nodes with `children` */
  expanded: boolean;

  /** `true` if the node has non-empty `children` array */
  hasChildren: boolean;

  /** `true` if the node is selected */
  selected: boolean;

  /** Node data from the `data` prop of `Tree` */
  node: TreeNodeData;

  /** Tree controller instance, return value of `useTree` hook */
  tree: TreeController;

  /** Props to spread into the root node element */
  elementProps: {
    className: string;
    style: React.CSSProperties;
    onClick: (event: React.MouseEvent) => void;
    'data-selected': boolean | undefined;
    'data-value': string;
    'data-hovered': boolean | undefined;
  };
}
```

#### Example: renderNode

```tsx
import { IconChevronDown } from '@tabler/icons-react';
import { Group, Tree } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <Tree
      data={data}
      levelOffset={23}
      renderNode={({ node, expanded, hasChildren, elementProps }) => (
        <Group gap={5} {...elementProps}>
          {hasChildren && (
            <IconChevronDown
              size={18}
              style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
            />
          )}

          <span>{node.label}</span>
        </Group>
      )}
    />
  );
}
```
