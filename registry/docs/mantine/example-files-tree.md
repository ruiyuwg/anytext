## Example: files tree

#### Example: files

```tsx
import { IconFolder, IconFolderOpen } from '@tabler/icons-react';
import { Group, RenderTreeNodePayload, Tree } from '@mantine/core';
import { CssIcon, NpmIcon, TypeScriptCircleIcon } from '@mantinex/dev-icons';
import { data, dataCode } from './data';
import classes from './Demo.module.css';

interface FileIconProps {
  name: string;
  isFolder: boolean;
  expanded: boolean;
}

function FileIcon({ name, isFolder, expanded }: FileIconProps) {
  if (name.endsWith('package.json')) {
    return <NpmIcon size={14} />;
  }

  if (name.endsWith('.ts') || name.endsWith('.tsx') || name.endsWith('tsconfig.json')) {
    return <TypeScriptCircleIcon size={14} />;
  }

  if (name.endsWith('.css')) {
    return <CssIcon size={14} />;
  }

  if (isFolder) {
    return expanded ? (
      <IconFolderOpen color="var(--mantine-color-yellow-9)" size={14} stroke={2.5} />
    ) : (
      <IconFolder color="var(--mantine-color-yellow-9)" size={14} stroke={2.5} />
    );
  }

  return null;
}

function Leaf({ node, expanded, hasChildren, elementProps }: RenderTreeNodePayload) {
  return (
    <Group gap={5} {...elementProps}>
      <FileIcon name={node.value} isFolder={hasChildren} expanded={expanded} />
      <span>{node.label}</span>
    </Group>
  );
}

function Demo() {
  return (
    <Tree
      classNames={classes}
      selectOnClick
      clearSelectionOnOutsideClick
      data={data}
      renderNode={(payload) => <Leaf {...payload} />}
    />
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| allowRangeSelection | boolean | - | If set, tree nodes range can be selected with click when Shift key is pressed |
| checkOnSpace | boolean | - | If set, tree node is checked on space key press |
| clearSelectionOnOutsideClick | boolean | - | If set, selection is cleared when user clicks outside of the tree |
| data | TreeNodeData\[] | required | Data used to render nodes |
| expandOnClick | boolean | - | If set, tree node with children is expanded on click |
| expandOnSpace | boolean | - | If set, tree node with children is expanded on space key press |
| levelOffset | MantineSpacing | - | Horizontal padding of each subtree level, key of theme.spacing or any valid CSS value |
| renderNode | RenderNode | - | A function to render tree node label |
| selectOnClick | boolean | - | If set, tree node is selected on click |
| tree | UseTreeReturnType | - | Use-tree hook instance that can be used to manipulate component state |

#### Styles API

Tree component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Tree selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Tree-root | Root element |
| node | .mantine-Tree-node | Node element (li), contains label and subtree elements |
| subtree | .mantine-Tree-subtree | Subtree element (ul) |
| label | .mantine-Tree-label | Node label |

**Tree CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --level-offset | Controls offset of nested tree levels |

### Typography

Package: @mantine/core
Import: import { Typography } from '@mantine/core';
Description: Styles provider for html content

## Usage

Mantine does not include typography global styles.
Use `Typography` to add typography styles to your html content:

```tsx
import { Typography } from '@mantine/core';

function Demo() {
  return (
    <Typography>
      <div
        dangerouslySetInnerHTML={{ __html: '<p>Your html here</p>' }}
      />
    </Typography>
  );
}
```

## Example

#### Example: usage

```tsx
import { Typography } from '@mantine/core';

const html = '...html content here...';

function Demo() {
  return (
    <Typography>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Typography>
  );
}
```

## All styles demo

`Typography` includes styles for:

- paragraphs
- headings
- lists
- blockquotes
- tables
- links
- images
- hr
- kbd
- code and pre

#### Example: all

```tsx
function Demo() {
  return (
    <Typography>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Typography>
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|

#### Styles API

Typography component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Typography selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Typography-root | Root element |

### UnstyledButton

Package: @mantine/core
Import: import { UnstyledButton } from '@mantine/core';
Description: Unstyled polymorphic button

## Usage

`UnstyledButton` resets default button styles, it is used as a
base for all other button components. You can use it to as a base for custom
polymorphic buttons.

#### Example: usage

```tsx
import { UnstyledButton } from '@mantine/core';

function Demo() {
  return <UnstyledButton>Button without styles</UnstyledButton>;
}
```

## Polymorphic component

UnstyledButton is a polymorphic component – its default root element is button, but it can be changed to any other element or component with component prop:

```tsx
import { UnstyledButton } from '@mantine/core';

function Demo() {
  return <UnstyledButton component="a" />;
}
```

**Polymorphic components with TypeScript**

Note that polymorphic components props types are different from regular components – they do not extend HTML element props of the default element. For example, UnstyledButtonProps does not extend React.ComponentPropsWithoutRef<'button'> although button is the default element.

If you want to create a wrapper for a polymorphic component that is not polymorphic (does not support component prop), then your component props interface should extend HTML element props.

## Get element ref

```tsx
import { useRef } from 'react';
import { UnstyledButton } from '@mantine/core';

function Demo() {
  const ref = useRef<HTMLButtonElement>(null);
  return <UnstyledButton ref={ref} />;
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | string | number | - | Size passed from parent component, sets data-size if value is not number like |

#### Styles API

UnstyledButton component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**UnstyledButton selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-UnstyledButton-root | Root element |

### VisuallyHidden

Package: @mantine/core
Import: import { VisuallyHidden } from '@mantine/core';
Description: Hide element visually but keep it accessible for screen readers

## Usage

`VisuallyHidden` is a utility component that hides content visually but leaves it available to screen readers.

For example, it can be used with [ActionIcon](https://mantine.dev/core/action-icon) component:

```tsx
import { IconHeart } from '@tabler/icons-react';
import { ActionIcon, VisuallyHidden } from '@mantine/core';

function Demo() {
  return (
    <ActionIcon>
      <IconHeart />
      <VisuallyHidden>Like post</VisuallyHidden>
    </ActionIcon>
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|

## HOOKS COMPONENTS AND FEATURES

Primary Package: @mantine/hooks

### HooksPackage

Package: @mantine/hooks
Import: import { HooksPackage } from '@mantine/hooks';

# Mantine hooks

[![npm](https://img.shields.io/npm/dm/@mantine/hooks)](https://www.npmjs.com/package/@mantine/hooks)

[@mantine/hooks](https://www.npmjs.com/package/@mantine/hooks) package
provides more than 70 hooks to build custom components. `@mantine/hooks`
package is used internally in most of other `@mantine/*` packages –
it is required to be installed in your project to use Mantine components.

## Installation

```bash
yarn add @mantine/hooks
```

```bash
npm install @mantine/hooks
```
