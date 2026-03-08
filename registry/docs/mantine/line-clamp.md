## Line clamp

Set `lineClamp` prop to truncate text after specified number of lines:

#### Example: lineClamp

```tsx
import { Title, Box } from '@mantine/core';

function Demo() {
  return (
    <Box maw={400}>
      <Title order={2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloremque quas dolorum. Quo
        amet earum alias consequuntur quam accusamus a quae beatae, odio, quod provident consectetur
        non repudiandae enim adipisci?
      </Title>
    </Box>
  )
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| lineClamp | number | - | Number of lines after which heading will be truncated |
| order | TitleOrder | - | Heading order (1-6), controls font-size style if size prop is not set |
| size | TitleSize | - | Changes title size, if not set, then size is controlled by order prop |
| textWrap | "wrap" | "nowrap" | "balance" | "pretty" | "stable" | - | Heading text-wrap CSS property |

#### Styles API

Title component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Title selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Title-root | Root element |

**Title CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --title-fw | Title `font-weight`, by default value from `theme.headings` |
| root | --title-fz | Title `font-size`, by default value from `theme.headings` |
| root | --title-lh | Title `line-height`, by default value from `theme.headings` |
| root | --title-line-clamp | Controls `-webkit-line-clamp` css property |
| root | --title-text-wrap | Controls `text-wrap` css property |

**Title data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-order | - | Value of the  |
| root | data-line-clamp | - | - |

### Tooltip

Package: @mantine/core
Import: import { Tooltip } from '@mantine/core';
Description: Renders tooltip at given element on mouse over or other event

## Usage

#### Example: usage

```tsx
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Tooltip">
      <Button>Button with tooltip</Button>
    </Tooltip>
  );
}
```

## Tooltip children

Tooltip requires an element or a component as a single child –
strings, fragments, numbers and multiple elements/components are not supported and **will throw error**.
Custom components must provide a prop to get root element ref,
all Mantine components support ref out of the box.

```tsx
import { Badge, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <>
      <Tooltip label="OK">
        <button>Native button – ok</button>
      </Tooltip>

      <Tooltip label="OK">
        <Badge>Mantine component – ok</Badge>
      </Tooltip>

      <Tooltip label="Throws">
        Raw string, NOT OK – will throw error
      </Tooltip>

      {/* Number, NOT OK – will throw error */}
      <Tooltip label="Throws">{2}</Tooltip>

      <Tooltip label="Throws">
        <>Fragment, NOT OK, will throw error</>
      </Tooltip>

      <Tooltip label="Throws">
        <div>More that one node</div>
        <div>NOT OK, will throw error</div>
      </Tooltip>
    </>
  );
}
```

## Tooltip target

`target` prop is an alternative to `children`. It accepts a string (selector),
an HTML element or a ref object with HTML element. Use `target` prop when you do
not render tooltip target as JSX element.

Example of using `target` prop with a string selector:

#### Example: target

```tsx
import { Button, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <>
      <Tooltip target="#hover-me" label="Tooltip over button" />
      <Button id="hover-me">Hover me to see tooltip</Button>
    </>
  );
}
```

## Required ref prop

Custom components that are rendered inside `Tooltip` are required to support `ref` prop:

```tsx
// Example of code that WILL NOT WORK
import { Tooltip } from '@mantine/core';

function MyComponent() {
  return <div>My component</div>;
}

// This will not work – MyComponent does not support ref
function Demo() {
  return (
    <Tooltip label="Does not work">
      <MyComponent />
    </Tooltip>
  );
}
```

Use `forwardRef` function to forward ref to root element:

```tsx
// Example of code that will work
import { forwardRef } from 'react';
import { Tooltip } from '@mantine/core';

const MyComponent = forwardRef<HTMLDivElement>((props, ref) => (
  <div ref={ref} {...props}>
    My component
  </div>
));

// Works correctly – ref is forwarded
function Demo() {
  return (
    <Tooltip label="Works fine">
      <MyComponent />
    </Tooltip>
  );
}
```

## Color

#### Example: configurator

```tsx
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Tooltip">
      <Button>With tooltip</Button>
    </Tooltip>
  );
}
```

## Offset

Set `offset` prop to a number to change tooltip position relative to the target element.
This way you can control tooltip offset on main axis only.

#### Example: offset

```tsx
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Tooltip" opened>
      <Button>Button with tooltip</Button>
    </Tooltip>
  );
}
```

To control offset on both axis, pass object with `mainAxis` and `crossAxis` properties:

#### Example: offsetAxis

```tsx
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip
      position="bottom"
      opened
      label="Tooltip"
      offset={{ mainAxis: , crossAxis:  }}
    >
      <Button>Button with tooltip</Button>
    </Tooltip>
  );
}
```

## Arrow

Set `withArrow` prop to add an arrow to the tooltip. Arrow is a `div` element rotated with `transform: rotate(45deg)`.

`arrowPosition` prop determines how arrow is position relative to the target element when `position` is set to `*-start` and `*-end` values on `Popover` component.
By default, the value is `center` – the arrow is positioned in the center of the target element if it is possible.

If you change `arrowPosition` to `side`, then the arrow will be positioned on the side of the target element,
and you will be able to control arrow offset with `arrowOffset` prop. Note that when `arrowPosition` is set to `center`,
`arrowOffset` prop is ignored.

#### Example: arrow

```tsx
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Tooltip" withArrow opened position="top-start">
      <Button>Button with tooltip</Button>
    </Tooltip>
  );
}
```

## Controlled

#### Example: controlled

```tsx
import { useState } from 'react';
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  const [opened, setOpened] = useState(true);

  return (
    <Tooltip label="Ctrl + J" opened={opened}>
      <Button onClick={() => setOpened((o) => !o)}>
        Toggle color scheme
      </Button>
    </Tooltip>
  );
}
```

## Change events

Events that trigger tooltip can be changed with `events` prop, it accepts an object
with the following properties that determine which events will trigger tooltip:

- `hover` – mouse hover event, `true` by default
- `focus` – focus/blur events excluding clicks on the target element, `false` by default
- `touch` – events for touchscreen devices, `false` by default

```tsx
import { Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip
      label="Tooltip"
      events={{ hover: true, focus: true, touch: false }}
    >
      <button>target</button>
    </Tooltip>
  );
}
```

## Multiline

To enable multiline mode, set `multiline` prop to enable line breaks and `w` [style prop](https://mantine.dev/styles/style-props) to set tooltip width:

#### Example: multiline

```tsx
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip
      multiline
      w={220}
      withArrow
      transitionProps={{ duration: 200 }}
      label="Use this button to save this information in your profile, after that you will be able to access it any time and share it via email."
    >
      <Button>Multiline tooltip</Button>
    </Tooltip>
  );
}
```

## Inline

Set `inline` prop to use `Tooltip` with inline elements:

#### Example: inline

```tsx
import { Tooltip, Mark, Text } from '@mantine/core';

function Demo() {
  return (
    <Text>
      Stantler’s magnificent antlers were traded at high prices as works of art. As a result, this
      Pokémon was hunted close to extinction by those who were after the priceless antlers.{' '}
      <Tooltip inline label="Inline tooltip">
        <Mark>When visiting a junkyard</Mark>
      </Tooltip>
      , you may catch sight of it having an intense fight with Murkrow over shiny objects.Ho-Oh’s
      feathers glow in seven colors depending on the angle at which they are struck by light. These
      feathers are said to bring happiness to the bearers. This Pokémon is said to live at the foot
      of a rainbow.
    </Text>
  );
}
```

## Change transition

Tooltip is built with [Transition](https://mantine.dev/core/transition/) component, it supports `transitionProps` props:

```tsx
import { Button, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip
      label="Tooltip with custom transition"
      transitionProps={{ transition: 'skew-up', duration: 300 }}
    >
      <Button>Button with tooltip</Button>
    </Tooltip>
  );
}
```

All available premade transitions:

#### Example: transitions

```tsx
function Demo() {
  const transitions = keys(MANTINE_TRANSITIONS).map((transition) => (
    <Tooltip key={transition} label={transition} transitionProps={{ transition, duration: 300 }}>
      <Badge variant="light">{transition}</Badge>
    </Tooltip>
  ));

  return (
    <Group justify="center" style={{ cursor: 'default' }}>
      {transitions}
    </Group>
  );
}
```

## Close and open delay

You can delay tooltip open/close events by setting `openDelay` and `closeDelay` props in ms:

#### Example: delay

```tsx
import { Button, Tooltip, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Tooltip label="Opened after 500ms" openDelay={500}>
        <Button>Delay open - 500ms</Button>
      </Tooltip>
      <Tooltip label="Closes after 500ms" closeDelay={500}>
        <Button>Delay close - 500ms</Button>
      </Tooltip>
    </Group>
  );
}
```

## Tooltip delay group

`Tooltip.Group` component can be used to sync open and close delays for multiple tooltips:

#### Example: group

```tsx
import { Tooltip, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Tooltip.Group openDelay={500} closeDelay={100}>
      <Group justify="center">
        <Tooltip label="Tooltip 1">
          <Button>Button 1</Button>
        </Tooltip>
        <Tooltip label="Tooltip 2">
          <Button>Button 2</Button>
        </Tooltip>
        <Tooltip label="Tooltip 3">
          <Button>Button 3</Button>
        </Tooltip>
      </Group>
    </Tooltip.Group>
  );
}
```

## Floating tooltip

`Tooltip.Floating` component has the same API as Tooltip component but tooltip will follow mouse:

#### Example: floating

```tsx
import { Box, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip.Floating label="Floating tooltip">
      <Box p="xl" bg="var(--mantine-color-blue-light)" style={{ cursor: 'default' }}>
        Hover over the box to see tooltip
      </Box>
    </Tooltip.Floating>
  );
}
```

## Custom components with Tooltip

If you want to build a component that can be used with Tooltip use
[forwardRef](https://reactjs.org/docs/forwarding-refs.html) or other prop that will allow to get root element ref.
This logic is applied to Tooltip and Tooltip.Floating components:

```tsx
import { forwardRef } from 'react';
import { Tooltip } from '@mantine/core';

// forwardRef function will allow to get root element ref
const MyBadge = forwardRef<HTMLDivElement, { color: string }>(
  ({ color }, ref) => (
    <div ref={ref} color={color}>
      Badge
    </div>
  )
);

// other props can also be used
function MyOtherBadge({
  color,
  innerRef,
}: {
  color: string;
  innerRef?: React.ForwardedRef<HTMLDivElement>;
}) {
  return (
    <div ref={innerRef} color={color}>
      Badge
    </div>
  );
}

function Demo() {
  return (
    <>
      <Tooltip label="Can be used as is">
        <MyBadge color="red" />
      </Tooltip>

      <Tooltip label="refProp is required" refProp="innerRef">
        <MyOtherBadge color="orange" />
      </Tooltip>
    </>
  );
}
```
