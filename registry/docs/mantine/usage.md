## Usage

`Affix` renders a div element with a fixed position inside the [Portal](https://mantine.dev/core/portal) component.
Use it to display elements fixed at any position on the screen, for example, scroll to top button:

#### Example: usage

```tsx
import { IconArrowUp } from '@tabler/icons-react';
import { useWindowScroll } from '@mantine/hooks';
import { Affix, Button, Text, Transition } from '@mantine/core';

function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Text ta="center">Affix is located at the bottom of the screen, scroll to see it</Text>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftSection={<IconArrowUp size={16} />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| portalProps | BasePortalProps | - | Props passed down to the Portal component. Ignored when withinPortal is false. |
| position | AffixPosition | - | Affix position on screen |
| withinPortal | boolean | - | Determines whether the component is rendered within Portal |
| zIndex | React.CSSProperties\["zIndex"] | - | Root element z-index property |

#### Styles API

Affix component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Affix selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Affix-root | Root element |

**Affix CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --affix-z-index | Controls `z-index` property |
| root | --affix-top | Controls `top` property |
| root | --affix-bottom | Controls `bottom` property |
| root | --affix-left | Controls `left` property |
| root | --affix-right | Controls `right` property |

### Alert

Package: @mantine/core
Import: import { Alert } from '@mantine/core';
Description: Attract user attention with important static message

## Usage

#### Example: configurator

```tsx
import { Alert } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';

function Demo() {
  const icon = <IconInfoCircle />;
  return (
    <Alert icon={icon}>
      {{children}}
    </Alert>
  );
}
```

#### Example: stylesApi

```tsx
import { Alert } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import classes from './Demo.module.css';

function Demo() {
  const icon = <IconHeart />;

  return (
    <Alert title="Alert title" icon={icon} withCloseButton>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt corporis natus veniam quis
      cupiditate enim architecto mollitia numquam temporibus, consectetur nam laboriosam voluptates
      nemo facilis? Exercitationem aut praesentium quibusdam reiciendis.
    </Alert>
  );
}
```
