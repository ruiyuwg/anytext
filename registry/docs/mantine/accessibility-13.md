## Accessibility

`HoverCard` is ignored by screen readers and cannot be activated with keyboard, use it to display only additional information
that is not required to understand the context.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| arrowOffset | number | - | Arrow offset in px |
| arrowPosition | ArrowPosition | - | Arrow position |
| arrowRadius | number | - | Arrow border-radius in px |
| arrowSize | number | - | Arrow size in px |
| children | React.ReactNode | - | Popover.Target and Popover.Dropdown components |
| clickOutsideEvents | string\[] | - | Events that trigger outside clicks |
| closeDelay | number | - | Close delay in ms |
| closeOnClickOutside | boolean | - | Determines whether dropdown should be closed on outside clicks |
| closeOnEscape | boolean | - | Determines whether dropdown should be closed when Escape key is pressed |
| defaultOpened | boolean | - | Initial opened state for uncontrolled component |
| disabled | boolean | - | If set, popover dropdown will not be rendered |
| floatingStrategy | FloatingStrategy | - | Changes floating ui [position strategy](https://floating-ui.com/docs/usefloating#strategy) |
| hideDetached | boolean | - | If set, the dropdown is hidden when the element is hidden with styles or not visible on the screen |
| id | string | - | Id base to create accessibility connections |
| initiallyOpened | boolean | - | Initial opened state |
| keepMounted | boolean | - | If set, the dropdown is not unmounted from the DOM when hidden. display: none styles are added instead. |
| middlewares | PopoverMiddlewares | - | Floating ui middlewares to configure position handling |
| offset | number | FloatingAxesOffsets | - | Offset of the dropdown element |
| onClose | () => void | - | Called when the dropdown is closed |
| onDismiss | () => void | - | Called when the popover is dismissed by clicking outside or by pressing escape |
| onEnterTransitionEnd | () => void | - | Called when enter transition ends |
| onExitTransitionEnd | () => void | - | Called when exit transition ends |
| onOpen | () => void | - | Called when the dropdown is opened |
| onPositionChange | (position: FloatingPosition) => void | - | Called when dropdown position changes |
| openDelay | number | - | Open delay in ms |
| overlayProps | OverlayProps & ElementProps<"div"> | - | Props passed down to Overlay component |
| portalProps | BasePortalProps | - | Props to pass down to the Portal when withinPortal is true |
| position | FloatingPosition | - | Dropdown position relative to the target element |
| positionDependencies | any\[] | - | @deprecated : Do not use, will be removed in 9.0 |
| preventPositionChangeWhenVisible | boolean | - | Prevents popover from flipping/shifting when it the dropdown is visible |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius |
| returnFocus | boolean | - | Determines whether focus should be automatically returned to control when dropdown closes |
| shadow | MantineShadow | - | Key of theme.shadows or any other valid CSS box-shadow value |
| transitionProps | TransitionProps | - | Props passed down to the Transition component. Use to configure duration and animation type. |
| trapFocus | boolean | - | Determines whether focus should be trapped within dropdown |
| width | PopoverWidth | - | Dropdown width, or 'target' to make dropdown width the same as target element |
| withArrow | boolean | - | Determines whether component should have an arrow |
| withOverlay | boolean | - | Determines whether the overlay should be displayed when the dropdown is opened |
| withRoles | boolean | - | Determines whether dropdown and target elements should have accessible roles |
| withinPortal | boolean | - | Determines whether dropdown should be rendered within the Portal |
| zIndex | string | number | - | Dropdown z-index |

### Image

Package: @mantine/core
Import: import { Image } from '@mantine/core';
Description: Image with optional fallback

## Usage

`Image` is a wrapper for `img` with minimal styles. By default, the image
will take 100% of parent width. The image size can be controlled with `w`
and `h` [style props](https://mantine.dev/styles/style-props).

#### Example: usage

```tsx
import { Image } from '@mantine/core';

function Demo() {
  return (
    <Image
      radius="md"
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
    />
  );
}
```

## Image height

In most case, you will need to set image height to prevent layout jumps when
image is loading. You can do so with `h` [style props](https://mantine.dev/styles/style-props).

#### Example: height

```tsx
import { Image } from '@mantine/core';

function Demo() {
  return (
    <Image
      radius="md"
      h={200}
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-10.png"
    />
  );
}
```

## Image fit

By default the image has `object-fit: cover` style - it will
resize to cover parent element. To change this behavior, set `w="auto"` and `fit="contain"` props.

#### Example: contain

```tsx
import { Image } from '@mantine/core';

function Demo() {
  return (
    <Image
      radius="md"
      h={200}
      w="auto"
      fit="contain"
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
    />
  );
}
```

## Fallback image

Set `fallbackSrc` prop to display fallback image when image fails to load:

#### Example: fallback

```tsx
import { Image } from '@mantine/core';

function Demo() {
  return (
    <Image
      radius="md"
      src={null}
      h={200}
      fallbackSrc="https://placehold.co/600x400?text=Placeholder"
    />
  );
}
```

## Usage with Next.js Image

`Image` component is a [polymorphic component](https://mantine.dev/guides/polymorphic), its root element can be changed with `component` prop.
You can use it with `next/image` and other similar components.

```tsx
import NextImage from 'next/image';
import { Image } from '@mantine/core';
import myImage from './my-image.jpg';

function Demo() {
  return <Image component={NextImage} src={myImage} alt="My image" />;
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| fallbackSrc | string | - | Image url used as a fallback if the image cannot be loaded |
| fit | ObjectFit | - | Controls object-fit style |
| onError | (event: SyntheticEvent\<HTMLImageElement, Event>) => void | - | Called when image fails to load |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius |
| src | any | - | Image url |

#### Styles API

Image component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Image selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Image-root | Root element |

**Image CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --image-object-fit | Controls `object-fit` property |
| root | --image-radius | Controls `border-radius` property |

**Image data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-fallback | Image failed to load | - |

### Indicator

Package: @mantine/core
Import: import { Indicator } from '@mantine/core';
Description: Display element at the corner of another element

## Usage

#### Example: configurator

```tsx
import { Indicator, Avatar } from '@mantine/core';

function Demo() {
  return (
    <Indicator>
      <Avatar
        size="lg"
        radius="sm"
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
      />
    </Indicator>
  );
}
```

## Inline

When the target element has a fixed width, set `inline` prop to add `display: inline-block;` styles to
Indicator container. Alternatively, you can set width and height with `style` prop if you still want the root
element to keep `display: block`.

#### Example: inline

```tsx
import { Avatar, Indicator } from '@mantine/core';

function Demo() {
  return (
    <Indicator inline label="New" size={16}>
      <Avatar
        size="lg"
        radius="sm"
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
      />
    </Indicator>
  );
}
```

## Offset

Set `offset` to change indicator position. It is useful when Indicator component is
used with children that have border-radius:

#### Example: offset

```tsx
import { Avatar, Indicator } from '@mantine/core';

function Demo() {
  return (
    <Indicator inline size={16} offset={7} position="bottom-end" color="red" withBorder>
      <Avatar
        size="lg"
        radius="xl"
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png"
      />
    </Indicator>
  );
}
```

## Processing animation

#### Example: processing

```tsx
import { Avatar, Indicator } from '@mantine/core';

function Demo() {
  return (
    <Indicator inline processing color="red" size={12}>
      <Avatar
        size="lg"
        radius="sm"
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png"
      />
    </Indicator>
  );
}
```
