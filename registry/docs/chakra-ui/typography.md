# Typography

## Fonts

Here's the list of available fonts.

| Font Token | Example                       |
| ---------- | ----------------------------- |
| `heading`  |  |
| `body`     |     |
| `mono`     |     |

## Font Sizes

Here's the list of available font sizes.

| Font Size Token | Value      | Example                 |
| --------------- | ---------- | ----------------------- |
| `2xs`           | `0.625rem` |  |
| `xs`            | `0.75rem`  |   |
| `sm`            | `0.875rem` |   |
| `md`            | `1rem`     |   |
| `lg`            | `1.125rem` |   |
| `xl`            | `1.25rem`  |   |
| `2xl`           | `1.5rem`   |  |
| `3xl`           | `1.875rem` |  |
| `4xl`           | `2.25rem`  |  |
| `5xl`           | `3rem`     |  |
| `6xl`           | `3.75rem`  |  |
| `7xl`           | `4.5rem`   |  |
| `8xl`           | `6rem`     |  |
| `9xl`           | `8rem`     |  |

## Font Weights

Here's the list of available font weights.

| Font Weight Token | Value | Example                          |
| ----------------- | ----- | -------------------------------- |
| `thin`            | `100` |        |
| `extralight`      | `200` |  |
| `light`           | `300` |       |
| `normal`          | `400` |      |
| `medium`          | `500` |      |
| `semibold`        | `600` |    |
| `bold`            | `700` |        |
| `extrabold`       | `800` |   |
| `black`           | `900` |       |

## Line Heights

Here's the list of available line heights.

| Line Height Token | Value   | Example                        |
| ----------------- | ------- | ------------------------------ |
| `shorter`         | `1.25`  |   |
| `short`           | `1.375` |     |
| `moderate`        | `1.5`   |  |
| `tall`            | `1.625` |      |
| `taller`          | `2`     |    |

## Letter Spacings

Here's the list of available letter spacing.

| Letter Spacing Token | Value      | Example                          |
| -------------------- | ---------- | -------------------------------- |
| `tighter`            | `-0.05em`  |  |
| `tight`              | `-0.025em` |    |
| `wide`               | `0.025em`  |     |
| `wider`              | `0.05em`   |    |
| `widest`             | `0.1em`    |   |

# Z-Index

## Tokens

Chakra UI supports the following z-index tokens out of the box.

| Z Index Token | Value        | Example                   |
| ------------- | ------------ | ------------------------- |
| `hide`        | `-1`         |      |
| `base`        | `0`          |      |
| `docked`      | `10`         |    |
| `dropdown`    | `1000`       |  |
| `sticky`      | `1100`       |    |
| `banner`      | `1200`       |    |
| `overlay`     | `1300`       |   |
| `modal`       | `1400`       |     |
| `popover`     | `1500`       |   |
| `skipNav`     | `1600`       |   |
| `toast`       | `1700`       |     |
| `tooltip`     | `1800`       |   |
| `max`         | `2147483647` |       |

# Animation

We recommend using CSS animations to animate your Chakra UI components. This
approach is performant, straightforward and provides a lot of flexibility.

You can animate both the mounting and unmounting phases of your components with
better control.

## Enter animation

When a disclosure component (popover, dialog) is open, the `data-state`
attribute is set to `open`. This maps to `data-state=open` and can be styled
with `_open` pseudo prop.

```tsx
<Box
  data-state="open"
  _open={{
    animation: "fade-in 300ms ease-out",
  }}
>
  This is open
</Box>
```

Here's an example that uses keyframes to create a fade-in animation:

```css
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

## Exit animation

When a disclosure component (popover, dialog) is closed, the `data-state`
attribute is set to `closed`. This maps to `data-state=closed` and can be styled
with `_closed` pseudo prop.

```tsx
<Box
  data-state="closed"
  _closed={{
    animation: "fadeOut 300ms ease-in",
  }}
>
  This is closed
</Box>
```

Here's an example that uses keyframes to create a fade-out animation:

```css
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
```

## Composing animations

Use the `animationName` prop to compose multiple animations together. This makes
it easy to create complex animations with multiple keyframes.

```tsx
<Box
  data-state="open"
  _open={{
    animationName: "fade-in, scale-in",
    animationDuration: "300ms",
  }}
  _closed={{
    animationName: "fade-out, scale-out",
    animationDuration: "120ms",
  }}
>
  This is a composed animation
</Box>
```
