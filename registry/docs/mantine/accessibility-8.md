## Accessibility

To make `CloseButton` accessible for screen readers, you need to either set `aria-label` or
use [VisuallyHidden](https://mantine.dev/core/visually-hidden) component:

```tsx
import { CloseButton, VisuallyHidden } from '@mantine/core';

function Demo() {
  return (
    <>
      <CloseButton aria-label="Close modal" />

      <CloseButton>
        <VisuallyHidden>Close modal</VisuallyHidden>
      </CloseButton>
    </>
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | - | Content rendered inside the button. For example VisuallyHidden with label for screen readers. |
| disabled | boolean | - | Sets disabled attribute, assigns disabled styles |
| icon | React.ReactNode | - | React node to replace the default close icon. If set, iconSize prop is ignored. |
| iconSize | string | number | - | X icon width and height |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius. Numbers are converted to rem. |
| size | number | MantineSize | (string & {}) | - | Controls width and height of the button. Numbers are converted to rem. |

#### Styles API

CloseButton component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**CloseButton selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-CloseButton-root | Root element |

**CloseButton CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --cb-icon-size | Controls `width` of the `X` icon |
| root | --cb-radius | Controls `border-radius` of the button |
| root | --cb-size | Controls `width` and `height` of the button |

### Code

Package: @mantine/core
Import: import { Code } from '@mantine/core';
Description: Inline and block code

## Usage

By default, Code component renders inline `code` html element:

#### Example: usage

```tsx
import { Code } from '@mantine/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}
```

## Block code

To render code in `pre` element pass `block` prop to Code component:

#### Example: block

```tsx
import { Code } from '@mantine/core';

const codeForPreviousDemo = `import { Code } from '@mantine/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}`;

function Demo() {
  return <Code block>{codeForPreviousDemo}</Code>;
}
```
