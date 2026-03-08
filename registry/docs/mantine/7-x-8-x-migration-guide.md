# 7.x → 8.x migration guide

## Global styles imports

If you used separate styles imports from `@mantine/core/styles/global.css` , you need to update imports to use new files.
Note that if you previously imported `@mantine/core/styles.css`, no changes are required – all new files are already included in `styles.css`.

7.x version import:

```tsx
// ❌ No longer includes all global styles
import '@mantine/core/styles/global.css';
```

8.x version import:

```tsx
// ✅ Import all global styles separately
import '@mantine/core/styles/baseline.css';
import '@mantine/core/styles/default-css-variables.css';
import '@mantine/core/styles/global.css';
```

If you used `@mantine/core/styles.css`, no changes are required,
the import works the same in 7.x and 8.x versions:

```tsx
// 👍 No changes needed if you used styles.css
import '@mantine/core/styles.css';
```

## Portal reuseTargetNode

`reuseTargetNode` prop of [Portal](https://mantine.dev/core/portal) component is now enabled by default.
This option improves performance by reusing the target node between portal renders, but
in some edge cases, it might cause issues with `z-index` stacking context.

If you experience issues with `z-index`, change `reuseTargetNode` prop to `false` in theme:

```tsx
import { createTheme, Portal } from '@mantine/core';

export const theme = createTheme({
  components: {
    Portal: Portal.extend({
      defaultProps: {
        // ✅ Disable reuseTargetNode by default if your application has z-index issues
        reuseTargetNode: false,
      },
    }),
  }
});
```

## Switch withThumbIndicator

[Switch](https://mantine.dev/core/switch) component default styles were updated, it now
includes checked state indicator inside the thumb. If you want to use
old styles without indicator, set `withThumbIndicator` prop to `false` in theme:

```tsx
import { createTheme, Switch } from '@mantine/core';

export const theme = createTheme({
  components: {
    Switch: Switch.extend({
      defaultProps: {
        // ✅ Disable withThumbIndicator if you want to use old styles
        withThumbIndicator: false,
      },
    }),
  }
});
```

## Date string values

`@mantine/dates` components now use date string values in `onChange` and other callbacks.
If you want to continue using `@mantine/dates` components the same way as in 7.x, you need
to convert callback values to `Date` objects:

```tsx
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

export function Demo7x() {
  const [value, setValue] = useState<Date | null>(null);
  // ⛔ 7.x – onChange is called with Date object
  return <DatePicker value={value} onChange={setValue} />
}

export function Demo8x() {
  const [value, setValue] = useState<Date | null>(null);
  // ✅ 8.x – onChange is called with string date value (for example '1994-08-21')
  // You can either
  // 1. Convert it to Date object to preserve old behavior
  // 2. Update your code to use date string values instead
  return <DatePicker value={value} onChange={val => setValue(new Date(val))} />
}
```

## DatesProvider timezone

`DatesProvider` component no longer supports `timezone` option:

```tsx
import { DatesProvider } from '@mantine/dates';

function Demo7x() {
  // ❌ timezone option is no longer supported
  return (
    <DatesProvider settings={{ timezone: 'UTC', consistentWeeks: true }}>
      App
    </DatesProvider>
  );
}

function Demo8x() {
  // ✅ Remove timezone option
  return (
    <DatesProvider settings={{ consistentWeeks: true }}>
      App
    </DatesProvider>
  );
}
```

If you need to handle timezones in your application, you can use a dedicated dates library
([dayjs](https://day.js.org/), [luxon](https://moment.github.io/luxon/#/), [date-fns](https://date-fns.org/))
to update timezone values. Example of using Mantine components with [dayjs](https://day.js.org/):

```tsx
import dayjs from 'dayjs';
import { DatePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>('2022-08-21');

  // Mantine components use strings as values, you can pass these
  // strings to a dates library of your choice to assign timezone
  const dateWithTimeZone = dayjs(value).tz("America/Toronto").toDate();

  return <DatePicker value={value} onChange={setValue} />;
}
```

## DateTimePicker timeInputProps

[DateTimePicker](https://mantine.dev/dates/date-time-picker) component no longer accepts `timeInputProps` prop,
as the underlying [TimeInput](https://mantine.dev/dates/time-input) component was replaced with [TimePicker](https://mantine.dev/dates/time-picker).
To pass props down to [TimePicker](https://mantine.dev/dates/time-picker) component, use `timePickerProps` prop instead.

7.x version:

```tsx
import { DateTimePicker } from '@mantine/dates';
import { IconClock } from '@tabler/icons-react';

function Demo() {
  return (
    <DateTimePicker
      // ❌ timeInputProps is no longer available
      timeInputProps={{
        leftSection: <IconClock size={16} stroke={1.5} />,
      }}
    />
  );
}
```

8.x version:

```tsx
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      // ✅ Use timePickerProps instead of timeInputProps
      timePickerProps={{
        leftSection: <IconClock size={16} stroke={1.5} />,
        minutesStep: 5,
        withDropdown: true,
      }}
    />
  );
}
```

## CodeHighlight usage

[@mantine/code-highlight](https://mantine.dev/x/code-highlight) package no longer depends on [highlight.js](https://highlightjs.org).
You can follow the [updated documentation](https://mantine.dev/x/code-highlight/) to set up syntax highlighting with [shiki](https://shiki.matsu.io/).

If you want to continue using [highlight.js](https://highlightjs.org/), in your application,
install `highlight.js` package:

```bash
yarn add highlight.js
```

```bash
npm install highlight.js
```

Then wrap your app with `CodeHighlightAdapterProvider` and provide `createHighlightJsAdapter` as `adapter` prop:

```tsx
import { MantineProvider } from '@mantine/core';
import { CodeHighlightAdapterProvider, createHighlightJsAdapter } from '@mantine/code-highlight';
import hljs from 'highlight.js/lib/core';
import tsLang from 'highlight.js/lib/languages/typescript';

hljs.registerLanguage('typescript', tsLang);

const highlightJsAdapter = createHighlightJsAdapter(hljs);

function App() {
  return (
    <MantineProvider>
      <CodeHighlightAdapterProvider adapter={highlightJsAdapter}>
        {/* Your app here */}
      </CodeHighlightAdapterProvider>
    </MantineProvider>
  );
}
```

Then you need to add styles of one of the highlight.js themes to your application.
You can do that by importing css file from `highlight.js` package or adding it via
CDN link to the head of your application:

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css"
/>
```

After that, you can use `CodeHighlight` component in your application the same way you did in 7.x version.

## Menu data-hovered attribute

[Menu.Item](https://mantine.dev/core/menu) no longer uses `data-hovered` attribute to indicate hovered state.
If you used `data-hovered` in your styles, you need to change it `:hover` and `:focus` selectors
instead:

```scss
// ❌ 7.x – styles with `data-hovered`,
// no longer works in 8.x
.item {
  &[data-hovered] {
    background-color: red;
  }
}

// ✅ 8.x – use styles with `:hover` and `:focus`
.item {
  &:hover,
  &:focus {
    background-color: red;
  }
}
```

## Popover hideDetached

[Popover](https://mantine.dev/core/popover) now supports `hideDetached` prop to automatically close popover when target element is removed from the DOM:

#### Example: hideDetached

```tsx
import { Box, Button, Group, Popover } from '@mantine/core';

function Demo() {
  return (
    <Box
      bd="1px solid var(--mantine-color-dimmed)"
      p="xl"
      w={{ base: 340, sm: 400 }}
      h={200}
      style={{ overflow: 'auto' }}
    >
      <Box w={1000} h={400}>
        <Group>
          <Popover width="target" position="bottom" opened>
            <Popover.Target>
              <Button>Toggle popover</Button>
            </Popover.Target>
            <Popover.Dropdown>This popover dropdown is hidden when detached</Popover.Dropdown>
          </Popover>

          <Popover width="target" position="bottom" opened hideDetached={false}>
            <Popover.Target>
              <Button>Toggle popover</Button>
            </Popover.Target>
            <Popover.Dropdown>This popover dropdown is visible when detached</Popover.Dropdown>
          </Popover>
        </Group>
      </Box>
    </Box>
  );
}
```

By default, `hideDetached` is enabled – the behavior has changed from 7.x version.
If you prefer to keep the old behavior, you can disable `hideDetached` for all components:

```tsx
import { createTheme, Popover } from '@mantine/core';

export const theme = createTheme({
  components: {
    Popover: Popover.extend({
      defaultProps: {
        // ✅ Disable hideDetached by default
        // if you want to keep the old behavior
        hideDetached: false,
      },
    }),
  }
});
```

## Carousel changes

Starting from 8.x version, [@mantine/carousel](https://mantine.dev/x/carousel) package requires
`embla-carousel` and `embla-carousel-react` packages with version 8.x.

You need to update embla dependencies:

```bash
yarn add embla-carousel@^8.5.2 embla-carousel-react@^8.5.2
```

```bash
npm install embla-carousel@^8.5.2 embla-carousel-react@^8.5.2
```

Update embla props that were previously passed to `Carousel` component
to `emblaOptions`. Full list of props:

- `loop`
- `align`
- `slidesToScroll`
- `dragFree`
- `inViewThreshold`
- `skipSnaps`
- `containScroll`
- `speed` and `draggable` props were removed – they are no longer supported by embla

```tsx
import { Carousel } from '@mantine/carousel';

// ❌ 7.x – embla options passed as props,
// no longer works in 8.x
function Demo7x() {
  return <Carousel loop dragFree align="start" />
}

// ✅ 8.x – use emblaOptions to pass options to embla
function Demo8x() {
  return <Carousel emblaOptions={{ loop: true, dragFree: true, align: 'start' }} />
}
```

`useAnimationOffsetEffect` hook was removed, it is no longer required, you need to
remove it from your code:

```tsx
// ❌ 7.x – useAnimationOffsetEffect is no longer available in 8.x
import { Carousel, Embla, useAnimationOffsetEffect } from '@mantine/carousel';

function Demo7x() {
  const [embla, setEmbla] = useState<Embla | null>(null);
  useAnimationOffsetEffect(embla, TRANSITION_DURATION);
  return <Carousel getEmblaApi={setEmbla} />;
}

// ✅ 8.x – remove useAnimationOffsetEffect entirely, it is not required
import { Carousel } from '@mantine/carousel';

function Demo8x() {
  return <Carousel />;
}
```

`Embla` type is no longer exported from `@mantine/carousel` package,
you need to change this import to reference `embla-carousel` package instead:

```tsx
// ❌ 7.x – Embla type is no longer available in 8.x
import { Carousel, Embla } from '@mantine/carousel';

function Demo7x() {
  const [embla, setEmbla] = useState<Embla | null>(null);
  return <Carousel getEmblaApi={setEmbla} />;
}

// ✅ 8.x – replace Embla type import
import { Carousel } from '@mantine/carousel';
import { EmblaCarouselType } from 'embla-carousel';

function Demo8x() {
  const [embla, setEmbla] = useState<EmblaCarouselType | null>(null);
  return <Carousel getEmblaApi={setEmbla} />;
}
```

### FunctionsReference

# Functions reference

This guides contains a list of functions exported from Mantine packages that
are not documented anywhere else.

## clamp

`clamp` function is exported from `@mantine/hooks`.
It clamps number within the inclusive lower and upper bounds.

```tsx
import { clamp } from '@mantine/hooks';

// With both min and max boundaries
clamp(10, 0, 5); // 5
clamp(100, 0, 5); // 5
clamp(-100, 0, 5); // 0

// With only min boundary
clamp(10, 0, undefined); // 10
clamp(-100, 0, undefined); // 0

// With only max boundary
clamp(0, undefined, 5); // 0
clamp(10, undefined, 5); // 5
```

## lowerFirst

`lowerFirst` function is exported from `@mantine/hooks`.
It converts first character of a string to lower case.

```tsx
import { lowerFirst } from '@mantine/hooks';

lowerFirst('Mantine'); // mantine
lowerFirst('mantine'); // mantine
```

## upperFirst

`upperFirst` function is exported from `@mantine/hooks`.
It converts first character of a string to upper case.

```tsx
import { upperFirst } from '@mantine/hooks';

upperFirst('Mantine'); // Mantine
upperFirst('mantine'); // Mantine
```

## randomId

`randomId` function is exported from `@mantine/hooks`.
It generates random id with `mantine-` prefix.

```tsx
import { randomId } from '@mantine/hooks';

randomId(); // mantine-d7h137oav
randomId(); // mantine-1q2j3j4j5
```

## range

`range` function is exported from `@mantine/hooks`.
It generates array of numbers from `start` to `end` (inclusive).

```tsx
import { range } from '@mantine/hooks';

range(0, 5); // [0, 1, 2, 3, 4, 5]
range(5, 0); // [5, 4, 3, 2, 1, 0]
```

## shallowEqual

`shallowEqual` function is exported from `@mantine/hooks`.
It performs shallow equal check of two objects.

```tsx
import { shallowEqual } from '@mantine/hooks';

shallowEqual({ a: 1 }, { a: 1 }); // true
shallowEqual({ a: 1 }, { a: 2 }); // false
```

### Gatsby
