# Spacing

## Padding

### All sides

Use the `padding` prop to apply padding on all sides of an element

```jsx
// raw value
<Box padding="40px" />
<Box p="40px" /> // shorthand

// token value
<Box padding="4" />
<Box p="4" /> // shorthand
```

| Prop          | CSS Property | Token Category |
| ------------- | ------------ | -------------- |
| `p`,`padding` | `padding`    | `spacing`      |

### Specific side

Use the `padding{Left,Right,Top,Bottom}` to apply padding on one side of an
element

```jsx
<Box paddingLeft="3" />
<Box pl="3" /> // shorthand

<Box paddingTop="3" />
<Box pt="3" /> // shorthand
```

Use the `padding{Start,End}` props to apply padding on the logical axis of an
element based on the text direction.

```jsx
<div className={css({ paddingStart: '8' })} />
<div className={css({ ps: '8' })} /> // shorthand

<div className={css({ paddingEnd: '8' })} />
<div className={css({ pe: '8' })} /> // shorthand
```

| Prop                  | CSS Property           | Token Category |
| --------------------- | ---------------------- | -------------- |
| `pl`, `paddingLeft`   | `padding-left`         | `spacing`      |
| `pr`, `paddingRight`  | `padding-right`        | `spacing`      |
| `pt`, `paddingTop`    | `padding-top`          | `spacing`      |
| `pb`, `paddingBottom` | `padding-bottom`       | `spacing`      |
| `ps`, `paddingStart`  | `padding-inline-start` | `spacing`      |
| `pe`, `paddingEnd`    | `padding-inline-end`   | `spacing`      |

### Horizontal and Vertical padding

Use the `padding{X,Y}` props to apply padding on the horizontal and vertical
axis of an element

```jsx
<Box paddingX="8" />
<Box px="8" /> // shorthand

<Box paddingY="8" />
<Box py="8" /> // shorthand
```

| Prop                  | CSS Property           | Token Category |
| --------------------- | ---------------------- | -------------- |
| `p`,`padding`         | `padding`              | `spacing`      |
| `pl`, `paddingLeft`   | `padding-left`         | `spacing`      |
| `pr`, `paddingRight`  | `padding-right`        | `spacing`      |
| `pt`, `paddingTop`    | `padding-top`          | `spacing`      |
| `pb`, `paddingBottom` | `padding-bottom`       | `spacing`      |
| `px`, `paddingX`      | `padding-inline`       | `spacing`      |
| `py`, `paddingY`      | `padding-block`        | `spacing`      |
| `ps`, `paddingStart`  | `padding-inline-start` | `spacing`      |
| `pe`, `paddingEnd`    | `padding-inline-end`   | `spacing`      |

## Margin

### All sides

Use the `margin` prop to apply margin on all sides of an element

```jsx
<Box margin="5" />
<Box m="5" /> // shorthand
```

| Prop         | CSS Property | Token Category |
| ------------ | ------------ | -------------- |
| `m`,`margin` | `margin`     | `spacing`      |

### Specific side

Use the `margin{Left,Right,Top,Bottom}` to apply margin on one side of an
element

```jsx
<Box marginLeft="3" />
<Box ml="3" /> // shorthand

<Box marginTop="3" />
<Box mt="3" /> // shorthand
```

Use the `margin{Start,End}` properties to apply margin on the logical axis of an
element based on the text direction.

```jsx
<Box marginStart="8" />
<Box ms="8" /> // shorthand

<Box marginEnd="8" />
<Box me="8" /> // shorthand
```

| Prop                 | CSS Property          | Token Category |
| -------------------- | --------------------- | -------------- |
| `ml`, `marginLeft`   | `margin-left`         | `spacing`      |
| `mr`, `marginRight`  | `margin-right`        | `spacing`      |
| `mt`, `marginTop`    | `margin-top`          | `spacing`      |
| `mb`, `marginBottom` | `margin-bottom`       | `spacing`      |
| `ms`, `marginStart`  | `margin-inline-start` | `spacing`      |
| `me`, `marginEnd`    | `margin-inline-end`   | `spacing`      |

### Horizontal and Vertical margin

Use the `margin{X,Y}` properties to apply margin on the horizontal and vertical
axis of an element

```jsx
<Box marginX="8" />
<Box mx="8" /> // shorthand

<Box marginY="8" />
<Box my="8" /> // shorthand
```

| Prop            | CSS Property    | Token Category |
| --------------- | --------------- | -------------- |
| `mx`, `marginX` | `margin-inline` | `spacing`      |
| `my`, `marginY` | `margin-blolck` | `spacing`      |

## Spacing Between

Use the `space{X,Y}` props to apply spacing between elements. This approach uses
the owl selector `> * + *` to apply the spacing between the elements using
`margin*` properties.

It's recommended to use the `space` prop over the `gap` prop for spacing when
you need negative spacing.

```jsx
<Box display="flex" spaceX="8">
  <Box>Item 1</Box>
  <Box>Item 2</Box>
  <Box>Item 3</Box>
</Box>

<Box display="flex" spaceY="8">
  <Box>Item 1</Box>
  <Box>Item 2</Box>
  <Box>Item 3</Box>
</Box>
```

| Prop     | CSS Property          | Token Category |
| -------- | --------------------- | -------------- |
| `spaceX` | `margin-inline-start` | `spacing`      |
| `spaceY` | `margin-block-start`  | `spacing`      |

# SVG

## Fill

Use the `fill` prop to set the fill color of an SVG element.

```jsx
<chakra.svg fill="blue.500">
  <path d="..." />
</chakra.svg>
```

| Prop   | CSS Property | Token Category |
| ------ | ------------ | -------------- |
| `fill` | `fill`       | `colors`       |

## Stroke

Use the `stroke` prop to set the stroke color of an SVG element.

```jsx
<chakra.svg stroke="blue.500">
  <path d="..." />
</chakra.svg>
```

| Prop     | CSS Property | Token Category |
| -------- | ------------ | -------------- |
| `stroke` | `stroke`     | `colors`       |

## Stroke Width

Use the `strokeWidth` prop to set the stroke width of an SVG element.

```jsx
<chakra.svg strokeWidth="1px">
  <path d="..." />
</chakra.svg>
```

| Prop          | CSS Property   | Token Category |
| ------------- | -------------- | -------------- |
| `strokeWidth` | `stroke-width` | `borderWidths` |

# Tables

## Border Spacing

Control the border-spacing property of a table. This property applies only when
`border-collapse` is set to `separate`.

```jsx
<chakra.table borderSpacing="2" borderCollapse="separate">
  <tbody>
    <tr>
      <td>Cell 1</td>
      <td>Cell 2</td>
    </tr>
  </tbody>
</chakra.table>
```

| Prop            | CSS Property     | Token Category |
| --------------- | ---------------- | -------------- |
| `borderSpacing` | `border-spacing` | `spacing`      |

## Border Spacing X

Use the `borderSpacingX` prop to set the horizontal border-spacing property of a
table. This requires the `borderSpacing` prop to be set to `auto`.

```jsx
<chakra.table borderSpacing="auto" borderSpacingX="2" borderCollapse="separate">
  <tbody>
    <tr>
      <td>Cell 1</td>
      <td>Cell 2</td>
    </tr>
  </tbody>
</chakra.table>
```

| Prop             | CSS Property     | Token Category |
| ---------------- | ---------------- | -------------- |
| `borderSpacingX` | `border-spacing` | `spacing`      |

## Border Spacing Y

Use the `borderSpacingY` prop to set the vertical border-spacing property of a
table. This requires the `borderSpacing` prop to be set to `auto`.

```jsx
<chakra.table borderSpacing="auto" borderSpacingY="2" borderCollapse="separate">
  <tbody>
    <tr>
      <td>Cell 1</td>
      <td>Cell 2</td>
    </tr>
  </tbody>
</chakra.table>
```

| Prop             | CSS Property     | Token Category |
| ---------------- | ---------------- | -------------- |
| `borderSpacingY` | `border-spacing` | `spacing`      |

## Caption Side

Use the `captionSide` prop to set the side of the caption of a table.

```jsx
<table>
  <chakra.caption captionSide="bottom">This is a caption</chakra.caption>
  <tbody>
    <tr>
      <td>Cell 1</td>
      <td>Cell 2</td>
    </tr>
  </tbody>
</table>
```

| Prop          | CSS Property   | Token Category |
| ------------- | -------------- | -------------- |
| `captionSide` | `caption-side` | -              |
