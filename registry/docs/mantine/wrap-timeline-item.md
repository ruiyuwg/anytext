## Wrap Timeline.Item

`Timeline` component relies on `Timeline.Item` order. Wrapping `Timeline.Item` is not supported,
Instead you will need to use different approaches:

```tsx
import { Timeline } from '@mantine/core';

// This will not work, step children will not render
function WillNotWork() {
  return <Timeline.Item title="Nope">It will not work</Timeline.Item>;
}

// Create a separate component for children
function WillWork() {
  return <div>This will work as expected!</div>;
}

function Demo() {
  return (
    <Timeline active={1}>
      <Timeline.Item title="Regular item">First item</Timeline.Item>
      <WillNotWork />
      <Timeline.Item title="Works as expected">
        <WillWork />
      </Timeline.Item>
      <Timeline.Item title="Regular item">Third item</Timeline.Item>
    </Timeline>
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| active | number | - | Index of the active element |
| align | "left" | "right" | - | Position of content relative to the bullet |
| autoContrast | boolean | - | If set, adjusts text color based on background color for filled variant |
| bulletSize | string | number | - | Size of the bullet |
| children | React.ReactNode | - | Timeline.Item components |
| color | MantineColor | - | Key of theme.colors or any valid CSS color to control active item colors |
| lineWidth | string | number | - | Control width of the line |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius, numbers are converted to rem |
| reverseActive | boolean | - | If set, the active items direction is reversed without reversing items order |

#### Styles API

Timeline component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Timeline selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Timeline-root | Root element |
| item | .mantine-Timeline-item | Item root element |
| itemBody | .mantine-Timeline-itemBody | Item body, wraps title and content |
| itemTitle | .mantine-Timeline-itemTitle | Item title, controlled by title prop |
| itemContent | .mantine-Timeline-itemContent | Item content, controlled by children prop |
| itemBullet | .mantine-Timeline-itemBullet | Item bullet |

**Timeline CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --tl-bullet-size | Controls bullet `width` and `height` |
| root | --tl-color | Controls active bullet and line colors |
| root | --tl-icon-color | Controls icon color |
| root | --tl-line-width | Controls width of the line between bullets |
| root | --tl-radius | Controls bullet `border-radius` |

### Title

Package: @mantine/core
Import: import { Title } from '@mantine/core';
Description: h1-h6 heading

## Usage

Use Title component to render h1-h6 headings with Mantine [theme](https://mantine.dev/theming/theme-object) styles.
By default, `Title` has no margins and paddings.
You can change `font-size`, `font-weight` and `line-height` per heading with [theme.headings](https://mantine.dev/theming/typography).

Set `order` prop to render a specific element (h1-h6), default order is `1`:

#### Example: usage

```tsx
import { Title } from '@mantine/core';

function Demo() {
  return (
    <>
      <Title order={1}>This is h1 title</Title>
      <Title order={2}>This is h2 title</Title>
      <Title order={3}>This is h3 title</Title>
      <Title order={4}>This is h4 title</Title>
      <Title order={5}>This is h5 title</Title>
      <Title order={6}>This is h6 title</Title>
    </>
  );
}
```

## Size

You can change Title `size` independent of its `order`:

- If you set size to `h1`-`h6`, then component will add corresponding `font-size` and `line-height` from the [theme](https://mantine.dev/theming/theme-object/)
- If you set size to any other value, then `line-height` will be calculated based on `order` – `size` will impact only `font-size`

#### Example: size

```tsx
import { Title } from '@mantine/core';

function Demo() {
  return (
    <>
      <Title order={3} size="h1">
        H3 heading with h1 font-size
      </Title>
      <Title size="h4">H1 heading with h4 font-size</Title>
      <Title size={16}>H1 heading with 16px size</Title>
      <Title size="xs">H1 heading with xs size</Title>
    </>
  );
}
```

## Text wrap

Use `textWrap` prop to control [text-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap)
CSS property. It controls how text inside an element is wrapped.

#### Example: textWrap

```tsx
import { Title } from '@mantine/core';

function Demo() {
  return (
    <Title order={3}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatibus inventore iusto
      cum dolore molestiae perspiciatis! Totam repudiandae impedit maxime!
    </Title>
  );
}
```

You can also set `textWrap` on [theme](https://mantine.dev/theming/theme-object):

```tsx
import { createTheme, MantineProvider, Title } from '@mantine/core';

const theme = createTheme({
  headings: {
    textWrap: 'wrap',
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Title>Some very long title that should wrap</Title>
    </MantineProvider>
  );
}
```
