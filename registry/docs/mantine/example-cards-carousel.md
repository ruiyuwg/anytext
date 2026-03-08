## Example: Cards carousel

#### Example: cards

```tsx
// Demo.tsx
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Button, Paper, Title, useMantineTheme, Text } from '@mantine/core';
import classes from './Demo.module.css';

const data = [
  {
    image:
      'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Best forests to visit in North America',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Hawaii beaches review: better than you think',
    category: 'beach',
  },
  {
    image:
      'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Mountains at night: 12 best locations to enjoy the view',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Aurora in Norway: when to visit for best experience',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Best places to visit this winter',
    category: 'tourism',
  },
  {
    image:
      'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Active volcanos reviews: travel at your own risk',
    category: 'nature',
  },
];

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        Read article
      </Button>
    </Paper>
  );
}

function Demo() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize={{ base: '100%', sm: '50%' }}
      slideGap={{ base: 'xl', sm: 2 }}
      emblaOptions={{ align: 'start', slidesToScroll: mobile ? 1 : 2 }}
    >
      {slides}
    </Carousel>
  );
}

// Demo.module.css
.card {
  height: 440px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-size: cover;
  background-position: center;
}

.title {
  font-weight: 900;
  color: var(--mantine-color-white);
  line-height: 1.2;
  font-size: 32px;
  margin-top: var(--mantine-spacing-xs);
  cursor: default;
}

.category {
  color: var(--mantine-color-white);
  opacity: 0.7;
  font-weight: 700;
  text-transform: uppercase;
  cursor: default;
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | - | Carousel.Slide components |
| controlSize | React.CSSProperties\["width"] | - | Controls size of the next and previous controls |
| controlsOffset | MantineSpacing | - | Controls position of the next and previous controls, key of theme.spacing or any valid CSS value |
| emblaOptions | Partial | - | Options passed down to embla carousel |
| getEmblaApi | (embla: EmblaCarouselType) => void | - | Get embla API as ref |
| height | Height | - | Slides container height, required for vertical orientation |
| includeGapInSize | boolean | - | Determines whether gap between slides should be treated as part of the slide size |
| initialSlide | number | - | Index of initial slide |
| nextControlIcon | React.ReactNode | - | Icon of the next control |
| nextControlProps | React.ComponentPropsWithoutRef<"button"> | - | Props passed down to next control |
| onNextSlide | () => void | - | Called when next slide is shown |
| onPreviousSlide | () => void | - | Called when previous slider is shown |
| onSlideChange | (index: number) => void | - | Called with slide index when slide changes |
| orientation | "horizontal" | "vertical" | - | Carousel orientation |
| plugins | CreatePluginType\<LoosePluginType, {}>\[] | - | A list of embla plugins |
| previousControlIcon | React.ReactNode | - | Icon of the previous control |
| previousControlProps | React.ComponentPropsWithoutRef<"button"> | - | Props passed down to previous control |
| slideGap | StyleProp | - | Key of theme.spacing or number to set gap between slides |
| slideSize | StyleProp | - | Controls slide width based on viewport width |
| type | "media" | "container" | - | Determines type of queries used for responsive styles |
| withControls | boolean | - | Determines whether next/previous controls should be displayed |
| withIndicators | boolean | - | Determines whether indicators should be displayed |
| withKeyboardEvents | boolean | - | Determines whether arrow key should switch slides |

#### Styles API

Carousel component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Carousel selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Carousel-root | Root element |
| slide | .mantine-Carousel-slide | `Carousel.Slide` root element |
| container | .mantine-Carousel-container | Slides container |
| viewport | .mantine-Carousel-viewport | Main element, contains slides container and all controls |
| controls | .mantine-Carousel-controls | Next/previous controls container |
| control | .mantine-Carousel-control | Next/previous control |
| indicators | .mantine-Carousel-indicators | Indicators container |
| indicator | .mantine-Carousel-indicator | Indicator button |

**Carousel CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --carousel-control-size | Controls `width` and `height` of the next/previous buttons |
| root | --carousel-controls-offset | Controls offsets of the next/previous buttons |
| root | --carousel-height | Controls height of the carousel |

**Carousel data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-orientation | - | Value of  |
| root | data-include-gap-in-size | - | - |
| control | data-inactive | No previous/next slides are available | - |
| indicator | data-active | Associated slide is active | - |

### CodeHighlight

Package: @mantine/code-highlight
Import: import { CodeHighlight } from '@mantine/code-highlight';
Description: Highlight code with shiki or highlight.js

## Installation

```bash
yarn add @mantine/code-highlight
```

```bash
npm install @mantine/code-highlight
```

After installation import package styles at the root of your application:

```tsx
import '@mantine/core/styles.css';
// ‼️ import code-highlight styles after core package styles
import '@mantine/code-highlight/styles.css';
```

## Example

`CodeHighlight` component is used to display code snippets with syntax highlighting.
It provides a flexible adapter system that allows using any code highlighting library
of your choice.

Example of code highlighting with [shiki](https://shiki.matsu.io/):

```tsx
type FilterPropsRes<T extends Record<string, any>> = {
  [Key in keyof T]-?: T[Key] extends undefined ? never : T[Key];
};

export function filterProps<T extends Record<string, any>>(props: T) {
  return Object.keys(props).reduce<FilterPropsRes<T>>((acc, key: keyof T) => {
    if (props[key] !== undefined) {
      acc[key] = props[key];
    }
    return acc;
  }, {} as FilterPropsRes<T>);
}
```

#### Example: usage

```tsx
import { CodeHighlight } from '@mantine/code-highlight';

const exampleCode = `
type FilterPropsRes<T extends Record<string, any>> = {
  [Key in keyof T]-?: T[Key] extends undefined ? never : T[Key];
};

export function filterProps<T extends Record<string, any>>(props: T) {
  return Object.keys(props).reduce<FilterPropsRes<T>>((acc, key: keyof T) => {
    if (props[key] !== undefined) {
      acc[key] = props[key];
    }
    return acc;
  }, {} as FilterPropsRes<T>);
}
`;

function Demo() {
  return <CodeHighlight code={exampleCode} language="tsx" radius="md" />;
}
```

## Adapters

`@mantine/code-highlight` package does not depend on any specific code highlighting library.
You can choose one of the default adapters provided by the package or create your own.

Default adapters:

- `createShikiAdapter` – creates [shiki](https://shiki.matsu.io/) adapter
- `createHighlightJsAdapter` – creates [highlight.js](https://highlightjs.org/) adapter
- `plainTextAdapter` – does not highlight code, just displays it as plain text (used by default if no adapter provided)
