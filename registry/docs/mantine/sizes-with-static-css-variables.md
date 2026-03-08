## Sizes with static CSS variables

Mantine components sizes are defined with CSS variables (usually on root element), for example,
[ActionIcon](https://mantine.dev/core/action-icon) component has the following CSS variables:

```css
.root {
  --ai-size-xs: 18px;
  --ai-size-sm: 22px;
  --ai-size-md: 28px;
  --ai-size-lg: 34px;
  --ai-size-xl: 44px;
}
```

You can override these values with [Styles API](https://mantine.dev/styles/styles-api) or add new sizes values:

#### Example: customSize

```tsx
// Demo.tsx
import { ActionIcon, createTheme, Group, MantineThemeProvider } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    ActionIcon: ActionIcon.extend({
      classNames: classes,
    }),
  },
});

function Demo() {
  return (
    <MantineThemeProvider theme={theme}>
      <Group justify="center">
        <ActionIcon size="xxs" aria-label="Custom xxs size">
          <IconHeart size={10} />
        </ActionIcon>

        <ActionIcon size="xxl" aria-label="Custom xxl size">
          <IconHeart size={32} />
        </ActionIcon>
      </Group>
    </MantineThemeProvider>
  );
}

// Demo.module.css
.root {
  --ai-size-xxs: 16px;
  --ai-size-xxl: 50px;
}
```

Note that some components have more than one CSS variable for size, for example,
the [Button](https://mantine.dev/core/button) component has the following CSS variables:

```css
.root {
  --button-height-xs: 30px;
  --button-height-sm: 36px;
  --button-height-md: 42px;
  --button-height-lg: 50px;
  --button-height-xl: 60px;

  --button-height-compact-xs: 22px;
  --button-height-compact-sm: 26px;
  --button-height-compact-md: 30px;
  --button-height-compact-lg: 34px;
  --button-height-compact-xl: 40px;

  --button-padding-x-xs: 14px;
  --button-padding-x-sm: 18px;
  --button-padding-x-md: 22px;
  --button-padding-x-lg: 26px;
  --button-padding-x-xl: 32px;

  --button-padding-x-compact-xs: 7px;
  --button-padding-x-compact-sm: 8px;
  --button-padding-x-compact-md: 10px;
  --button-padding-x-compact-lg: 12px;
  --button-padding-x-compact-xl: 14px;
}
```

Usually, it is more convenient to use `data-size` attribute or `vars` on [theme](https://mantine.dev/theming/theme-object)
to customize sizes in this case.

## X COMPONENTS AND FEATURES

Primary Package: @mantine/x

### Carousel

Package: @mantine/carousel
Import: import { Carousel } from '@mantine/carousel';
Description: Embla based carousel component

## Installation

```bash
yarn add embla-carousel@^8.5.2 embla-carousel-react@^8.5.2 @mantine/carousel
```

```bash
npm install embla-carousel@^8.5.2 embla-carousel-react@^8.5.2 @mantine/carousel
```

After installation import package styles at the root of your application:

```tsx
import '@mantine/core/styles.css';
// ‼️ import carousel styles after core package styles
import '@mantine/carousel/styles.css';
```

## Do not forget to import styles

Followed installation instructions above but something is not working
(Carousel slides are rendered vertically, no controls or indicators)?
You've fallen into the trap of not importing carousel styles!
To fix the issue, import carousel styles at the root of your application:

```tsx
import '@mantine/carousel/styles.css';
```

## Documentation demos

Demos on this page use a blue background color for demonstration purposes. To simplify
the demos, background color and other demo-only styles are not included in the code.
If you copy-paste demo code into your project, it will not have a blue background color.

## Usage

`@mantine/carousel` package is based on [embla carousel](https://www.embla-carousel.com/):

#### Example: usage

```tsx
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel withIndicators height={200}>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
```

## Options

#### Example: configurator

```tsx
import { Carousel } from '@mantine/carousel';


function Demo() {
  return (
    <Carousel
      slideSize="70%"
      height={200}
      
    >
      {/* ...slides */}
    </Carousel>
  );
}
```

## Embla options

You can pass configuration options directly to embla carousel with `emblaOptions` prop.
You can find embla options description in [embla options reference](https://www.embla-carousel.com/api/options/).

Example of passing `loop`, `dragFree` and `align` options:

#### Example: emblaOptions

```tsx
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel
      slideSize="70%"
      height={200}
      emblaOptions={{
        loop: ,
        dragFree: ,
        align: ''
      }}
    >
      {/* ...slides */}
    </Carousel>
  );
}
```

## Size and gap

Set `slideSize` and `slideGap` on `Carousel` component to control size and gap of every slide:

#### Example: multiple

```tsx
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel
      withIndicators
      height={200}
      slideSize="33.333333%"
      slideGap="md"
      emblaOptions={{ loop: true, align: 'start', slidesToScroll: 3 }}
    >
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
```

## Responsive styles

`slideSize` and `slideGap` props work the same way as [style props](https://mantine.dev/styles/style-props/),
you can pass an object with values for different breakpoints:

#### Example: breakpoints

```tsx
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel
      withIndicators
      height={200}
      slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
      slideGap={{ base: 0, sm: 'md' }}
      emblaOptions={{ loop: true, align: 'start' }}
    >
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
```

## Container queries

To use [container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries)
instead of media queries, set `type="container"`. With container queries, slides size and gap
will be adjusted based on the container width, not the viewport width.

Note that, when using container queries, `slideSize` and `slideGap` props cannot
reference `theme.breakpoints` values in keys. It is required to use exact px or em values.

To see how the slides size and gap changes, resize the root element of the demo
with the resize handle located at the bottom right corner of the demo:

#### Example: container

```tsx
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    // Wrapper div is added for demonstration purposes only,
    // It is not required in real projects
    <div
      style={{
        resize: 'horizontal',
        overflow: 'hidden',
        maxWidth: '100%',
        minWidth: 250,
        padding: 10,
      }}
    >
      <Carousel
        withIndicators
        height={200}
        type="container"
        slideSize={{ base: '100%', '300px': '50%', '500px': '33.333333%' }}
        slideGap={{ base: 0, '300px': 'md', '500px': 'lg' }}
        emblaOptions={{ loop: true, align: 'start' }}
      >
        <Carousel.Slide>1</Carousel.Slide>
        <Carousel.Slide>2</Carousel.Slide>
        <Carousel.Slide>3</Carousel.Slide>
        {/* ...other slides */}
      </Carousel>
    </div>
  );
}
```

## Drag free

`dragFree` will disable slides snap points – user will be able to stop dragging at any position:

#### Example: dragFree

```tsx
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel
      withIndicators
      height={200}
      emblaOptions={{ dragFree: true, align: 'start' }}
      slideGap="md"
    >
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
```

## Vertical orientation

Carousel with `orientation="vertical"` requires `height` prop to be set:

#### Example: vertical

```tsx
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel orientation="vertical" height={200} withIndicators>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
```

## Controls icons

You can replace default next/previous controls icons with any React nodes:

#### Example: icons

```tsx
import { Carousel } from '@mantine/carousel';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';

function Demo() {
  return (
    <Carousel
      height={180}
      nextControlIcon={<IconArrowRight size={16} />}
      previousControlIcon={<IconArrowLeft size={16} />}
    >
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
```

## 100% height

Set `height="100%"` to make Carousel take 100% height of the container. Note that in this case:

- container element must have `display: flex` styles
- carousel root element must have `flex: 1` styles
- container element must have fixed height

```tsx
import { Carousel } from '@mantine/carousel';

export function PercentageHeight() {
  return (
    <div style={{ height: 400, display: 'flex' }}>
      <Carousel withIndicators height="100%" flex={1}>
        <Carousel.Slide>1</Carousel.Slide>
        <Carousel.Slide>2</Carousel.Slide>
        <Carousel.Slide>3</Carousel.Slide>
      </Carousel>
    </div>
  );
}
```

## Get embla instance

You can get [embla instance](https://www.embla-carousel.com/api/methods/) with `getEmblaApi` prop.
You will be able enhance carousel with additional logic after that using embla api methods:

#### Example: progress

```tsx
import { useCallback, useEffect, useState } from 'react';
import { EmblaCarouselType } from 'embla-carousel';
import { Carousel } from '@mantine/carousel';
import { Progress } from '@mantine/core';

function Demo() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [embla, setEmbla] = useState<EmblaCarouselType | null>(null);

  const handleScroll = useCallback(() => {
    if (!embla) {
      return;
    }
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);

  useEffect(() => {
    if (embla) {
      embla.on('scroll', handleScroll);
      handleScroll();
    }
  }, [embla]);

  return (
    <>
      <Carousel
        emblaOptions={{ dragFree: true }}
        slideSize="50%"
        slideGap="md"
        height={200}
        getEmblaApi={setEmbla}
        initialSlide={2}
      >
        <Slides count={12} />
      </Carousel>
      <Progress value={scrollProgress} maw={320} size="sm" mt="xl" mx="auto" />
    </>
  );
}
```

## Embla plugins

Set `plugins` prop to enhance carousel with [embla plugins](https://www.embla-carousel.com/plugins/).
Note that plugins are not installed with `@mantine/carousel` package and you will need to
install them on your side.

Example with [autoplay plugin](https://www.embla-carousel.com/plugins/autoplay/):

```bash
yarn add embla-carousel-autoplay@^8.5.2
```

```bash
npm install embla-carousel-autoplay@^8.5.2
```

#### Example: autoplay

```tsx
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';

function Demo() {
  const autoplay = useRef(Autoplay({ delay: 1000 }));

  return (
    <Carousel
      withIndicators
      height={200}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={() => autoplay.current.play()}
    >
      <Slides count={5} />
    </Carousel>
  );
}
```

#### Example: stylesApi

```tsx
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel withIndicators height={200}>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
    </Carousel>
  );
}
```

## Indicator styles

#### Example: indicatorStyles

```tsx
// Demo.tsx
import { Carousel } from '@mantine/carousel';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Carousel withIndicators height={200} classNames={classes}>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}

// Demo.module.css
.indicator {
  width: 12px;
  height: 4px;
  transition: width 250ms ease;

  &[data-active] {
    width: 40px;
  }
}
```

## Hide inactive controls

#### Example: controlsStyles

```tsx
// Demo.tsx
import { Carousel } from '@mantine/carousel';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Carousel height={200} classNames={classes}>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}

// Demo.module.css
.control {
  &[data-inactive] {
    opacity: 0;
    cursor: default;
  }
}
```

## Show controls on hover

#### Example: controlsHover

```tsx
// Demo.tsx
import { Carousel } from '@mantine/carousel';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Carousel height={200} classNames={classes}>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}

// Demo.module.css
.controls {
  transition: opacity 150ms ease;
  opacity: 0;
}

.root {
  &:hover {
    .controls {
      opacity: 1;
    }
  }
}
```

## Example: Images carousel

#### Example: images

```tsx
import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';

const images = [
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png',
];

function Demo() {
  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} />
    </Carousel.Slide>
  ));

  return (
    <Carousel withIndicators height={200}>
      {slides}
    </Carousel>
  );
}
```
