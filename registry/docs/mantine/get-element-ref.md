## Get element ref

```tsx
import { useRef } from 'react';
import { Button } from '@mantine/core';

function Demo() {
  const ref = useRef<HTMLButtonElement>(null);
  return <Button ref={ref} />;
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autoContrast | boolean | - | If set, adjusts text color based on background color for filled variant |
| children | React.ReactNode | - | Button content |
| color | MantineColor | - | Key of theme.colors or any valid CSS color |
| disabled | boolean | - | Sets disabled attribute, applies disabled styles |
| fullWidth | boolean | - | If set, the button takes 100% width of its parent container |
| gradient | MantineGradient | - | Gradient configuration used when variant="gradient" |
| justify | JustifyContent | - | Sets justify-content of inner element, can be used to change distribution of sections and label |
| leftSection | React.ReactNode | - | Content displayed on the left side of the button label |
| loaderProps | LoaderProps | - | Props added to the Loader component (only visible when loading prop is set) |
| loading | boolean | - | If set, the Loader component is displayed over the button |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius |
| rightSection | React.ReactNode | - | Content displayed on the right side of the button label |
| size | MantineSize | (string & {}) | "compact-xs" | "compact-sm" | "compact-md" | "compact-lg" | "compact-xl" | - | Controls button height, font-size and horizontal padding |

#### Styles API

Button component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Button selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Button-root | Root element |
| loader | .mantine-Button-loader | Loader component, displayed only when `loading` prop is set |
| inner | .mantine-Button-inner | Contains all other elements, child of the `root` element |
| section | .mantine-Button-section | Left and right sections of the button |
| label | .mantine-Button-label | Button children |

**Button CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --button-bg | Controls `background` |
| root | --button-bd | Control `border` |
| root | --button-hover | Controls `background` when hovered |
| root | --button-color | Control text `color` |
| root | --button-hover-color | Control text `color` when hovered |
| root | --button-radius | Controls `border-radius` |
| root | --button-height | Controls `height` of the button |
| root | --button-padding-x | Controls horizontal `padding` of the button |
| root | --button-fz | Controls `font-size` of the button |
| root | --button-justify | Controls `justify-content` of `inner` element |

**Button data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-disabled | - | - |

**Button.Group selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| group | .mantine-ButtonGroup-group | Root element |

**Button.Group CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| group | --button-border-width | `border-width` of child `Button` components |

**Button.Group data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| group | data-orientation | - | Value of  |

### Card

Package: @mantine/core
Import: import { Card } from '@mantine/core';
Description: Card with sections

## Usage

`Card` is a wrapper around [Paper](https://mantine.dev/core/paper/) component with some additional styles and `Card.Section`
component that allows to split card into sections. If you do not need sections, you use [Paper](https://mantine.dev/core/paper/) component instead.

#### Example: usage

```tsx
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Norway Fjord Adventures</Text>
        <Badge color="pink">On Sale</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>
  );
}
```

## Polymorphic component

Card is a [polymorphic component](https://mantine.dev/guides/polymorphic/) component, you can change its root element:

#### Example: link

```tsx
import { Card, Image, Text } from '@mantine/core';

function Demo() {
  return (
    <Card
      shadow="sm"
      padding="xl"
      component="a"
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      target="_blank"
    >
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
          h={160}
          alt="No way!"
        />
      </Card.Section>

      <Text fw={500} size="lg" mt="md">
        You&apos;ve won a million dollars in cash!
      </Text>

      <Text mt="xs" c="dimmed" size="sm">
        Please click anywhere on this card to claim your reward, this is not a fraud, trust us
      </Text>
    </Card>
  );
}
```

## Card.Section

`Card.Section` is a special component that is used to remove Card padding from its children while other elements still have horizontal spacing.
`Card.Section` works the following way:

- If component is the first child in Card, then it has negative top, left and right margins
- If it is the last child in Card, then it has negative bottom, left and right margins
- If it is in the middle then, only the left and right margins will be negative

```tsx
import { Card, Text } from '@mantine/core';

function Demo() {
  return (
    <Card padding="xl">
      {/* top, right, left margins are negative – -1 * theme.spacing.xl */}
      <Card.Section>First section</Card.Section>

      {/* Content that is not inside Card.Section will have theme.spacing.xl spacing on all sides relative to Card */}
      <Text>Some other content</Text>

      {/* right, left margins are negative – -1 * theme.spacing.xl */}
      <Card.Section>Middle section</Card.Section>

      {/* bottom, right, left margins are negative – -1 * theme.spacing.xl */}
      <Card.Section>Last section</Card.Section>
    </Card>
  );
}
```

Note that `Card` relies on mapping direct children and you cannot use fragments or other wrappers for `Card.Section`:

```tsx
import { Card } from '@mantine/core';

function Demo() {
  return (
    <Card padding="xl">
      <div>
        <Card.Section>Won't work</Card.Section>
      </div>

      <>
        <Card.Section>Won't work either</Card.Section>
      </>

      <Card.Section>Works fine</Card.Section>
    </Card>
  );
}
```

## Polymorphic Card.Section

`Card.Section` is a [polymorphic component](https://mantine.dev/guides/polymorphic/) component, you can change its root element:

#### Example: linkSection

```tsx
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section component="a" href="https://mantine.dev/">
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Norway Fjord Adventures</Text>
        <Badge color="pink">On Sale</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>
  );
}
```
