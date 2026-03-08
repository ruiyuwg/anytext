## Filled segment transition

By default, transitions are disabled, to enable them, set `transitionDuration` prop
to a number of milliseconds:

#### Example: transitions

```tsx
import { useState } from 'react';
import { Button, RingProgress, Stack, Text } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(30);

  return (
    <Stack align="center">
      <RingProgress
        sections={[{ value, color: 'blue' }]}
        transitionDuration={250}
        label={<Text ta="center">{value}%</Text>}
      />

      <Button onClick={() => setValue(Math.floor(Math.random() * 100))}>Set random value</Button>
    </Stack>
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | React.ReactNode | - | Label displayed in the center of the ring |
| rootColor | MantineColor | - | Color of the root section, key of theme.colors or CSS color value |
| roundCaps | boolean | - | Sets whether the edges of the progress circle are rounded |
| sections | RingProgressSection\[] | required | Ring sections |
| size | number | - | Width and height of the progress ring |
| thickness | number | - | Ring thickness |
| transitionDuration | number | - | Transition duration of filled section styles changes in ms |

#### Styles API

RingProgress component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**RingProgress selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-RingProgress-root | Root element |
| svg | .mantine-RingProgress-svg | svg element |
| curve | .mantine-RingProgress-curve | circle element |
| label | .mantine-RingProgress-label | Label element |

**RingProgress CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --rp-label-offset | Label offset on the left and right sides of the ring |
| root | --rp-size | Controls `height` and `width` of svg and root elements |
| root | --rp-transition-duration | Controls transition duration of filled segments |

### ScrollArea

Package: @mantine/core
Import: import { ScrollArea } from '@mantine/core';
Description: Area with custom scrollbars

## Usage

`ScrollArea` component supports the following props:

- `type` defines scrollbars behavior:
  - `hover` – scrollbars are visible on hover
  - `scroll` – scrollbars are visible on scroll
  - `auto` – similar to `overflow: auto` – scrollbars are always visible when the content is overflowing
  - `always` – same as `auto`, but scrollbars are always visible regardless of whether the content is overflowing
  - `never` – scrollbars are always hidden
- `offsetScrollbars` – adds padding to offset scrollbars with the following options:
  - `true` – adds padding to offset both scrollbars
  - `x` – adds padding to offset horizontal scrollbar only
  - `y` – adds padding to offset vertical scrollbar only
  - `present` – adds padding only when scrollbars are visible
- `scrollbarSize` – scrollbar size, controls scrollbar and thumb width/height
- `scrollHideDelay` – delay in ms to hide scrollbars, applicable only when type is `hover` or `scroll`
- `overscrollBehavior` – controls [overscroll-behavior](https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior) of the viewport

#### Example: usage

```tsx
import { ScrollArea } from '@mantine/core';

function Demo() {
  return (
    <ScrollArea h={250}>
      {/* ... content */}
    </ScrollArea>
  );
}
```

## Horizontal scrollbars

#### Example: horizontal

```tsx
import { ScrollArea, Box } from '@mantine/core';

function Demo() {
  return (
    <ScrollArea w={300} h={200}>
      <Box w={600}>
        {/* ... content */}
      </Box>
    </ScrollArea>
  );
}
```

## Disable horizontal scrollbars

To disable horizontal scrollbars set `scrollbars="y"` prop:

#### Example: scrollbars

```tsx
import { ScrollArea, Box } from '@mantine/core';

function Demo() {
  return (
    <ScrollArea w={300} h={200} scrollbars="y">
      <Box w={600}>
        {/* ... content */}
      </Box>
    </ScrollArea>
  );
}
```

## Subscribe to scroll position changes

Set `onScrollPositionChange` function to subscribe to scroll position changes,
it will be called each time user scrolls with x and y coordinates:

#### Example: scrollPosition

```tsx
import { useState } from 'react';
import { Text, ScrollArea, Code, Box } from '@mantine/core';

function Demo() {
  const [scrollPosition, onScrollPositionChange] = useState({ x: 0, y: 0 });

  return (
    <>
      <ScrollArea
        w={300}
        h={200}
        onScrollPositionChange={onScrollPositionChange}
      >
        <Box w={600}>
          {/* ... content */}
        </Box>
      </ScrollArea>

      <Text>
        Scroll position: <Code>{`{ x: ${scrollPosition.x}, y: ${scrollPosition.y} }`}</Code>
      </Text>
    </>
  );
}
```

## Scroll to position

To programmatically scroll to any position,
get viewport element ref with `viewportRef` prop and call `scrollTo` method:

#### Example: scrollTo

```tsx
import { useRef } from 'react';
import { ScrollArea, Button, Stack, Group } from '@mantine/core';

function Demo() {
  const viewport = useRef<HTMLDivElement>(null);

  const scrollToBottom = () =>
    viewport.current!.scrollTo({ top: viewport.current!.scrollHeight, behavior: 'smooth' });

  const scrollToCenter = () =>
    viewport.current!.scrollTo({ top: viewport.current!.scrollHeight / 2, behavior: 'smooth' });

  const scrollToTop = () => viewport.current!.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <Stack align="center">
      <ScrollArea w={300} h={200} viewportRef={viewport}>
        {/* ... content */}
      </ScrollArea>

      <Group justify="center">
        <Button onClick={scrollToBottom}>Scroll to bottom</Button>
        <Button onClick={scrollToCenter}>Scroll to center</Button>
        <Button onClick={scrollToTop}>Scroll to top</Button>
      </Group>
    </Stack>
  );
}
```

## Styles API

#### Example: stylesApi

```tsx
// Demo.tsx
import { ScrollArea, Box } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <ScrollArea w={300} h={200} type="always" offsetScrollbars classNames={classes}>
      <Box w={600}>
        {/* ... content */}
      </Box>
    </ScrollArea>
  );
}

// Demo.module.css
.scrollbar {
  &,
  &:hover {
    background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6));
  }

  &[data-orientation='vertical'] .thumb {
    background-color: var(--mantine-color-red-6);
  }

  &[data-orientation='horizontal'] .thumb {
    background-color: var(--mantine-color-blue-6);
  }
}

.corner {
  background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6));
  opacity: 1;
}
```
