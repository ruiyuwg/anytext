# Border

## Border Radius

### All sides

Use the `rounded` or `borderRadius` props to apply border radius on all sides of
an element.

```jsx
<Box borderRadius="md" />
<Box rounded="md" /> // shorthand
```

| Prop                      | CSS Property    | Token Category |
| ------------------------- | --------------- | -------------- |
| `rounded`, `borderRadius` | `border-radius` | `radii`        |

### Specific sides

Use the `rounded{Left,Right,Top,Bottom}` or
`border{Left,Right,Top,Bottom}Radius` prop, to apply border radius on a specific
side of an element.

```jsx
<Box borderTopRadius="md" />
<Box roundedTop="md" /> // shorthand

<Box borderLeftRadius="md" />
<Box roundedLeft="md" /> // shorthand
```

Use the logical equivalent to make the border radius adapt based on the text
direction.

```jsx
<Box roundedStart="md" />
<Box roundedEnd="md" />
```

| Prop                                  | CSS Property                                           | Token Category |
| ------------------------------------- | ------------------------------------------------------ | -------------- |
| `roundedLeft`, `borderLeftRadius`     | `border-left-radius`                                   | `radii`        |
| `roundedRight`, `borderRightRadius`   | `border-right-radius`                                  | `radii`        |
| `roundedTop`, `borderTopRadius`       | `border-top-radius`                                    | `radii`        |
| `roundedBottom`, `borderBottomRadius` | `border-bottom-radius`                                 | `radii`        |
| `roundedStart`, `borderStartRadius`   | `border-start-start-radius`, `border-end-start-radius` | `radii`        |
| `roundedEnd`, `borderEndRadius`       | `border-start-end-radius`, `border-end-end-radius`     | `radii`        |

### Specific corners

Use the `border{Top,Bottom}{Left,Right}Radius` properties, or the shorthand
equivalent to round a specific corner.

```jsx
<Box borderTopLeftRadius="md" />
<Box roundedTopLeft="md" /> // shorthand
```

Use the logical properties to adapt based on the text direction.

```jsx
<Box borderStartStartRadius="md" />
<Box roundedStartStart="md" /> // shorthand
```

| Prop                                     | CSS Property                 | Token Category |
| ---------------------------------------- | ---------------------------- | -------------- |
| `roundedTopLeft`,`borderTopLeftRadius`   | `border-top-left-radius`     | `radii`        |
| `roundedTopRight`,`borderTopRight`       | `border-top-right-radius`    | `radii`        |
| `roundedBottomRight`,`borderBottomRight` | `border-bottom-right-radius` | `radii`        |
| `roundedBottomLeft`,`borderBottomLeft`   | `border-bottom-left-radius`  | `radii`        |

## Border Width

### All sides

Use the `borderWidth` prop to apply border width on all sides of an element.

> Chakra applies `borderStyle: solid` and a global border color by default.
> Specifying a border width is sufficient to apply the border.

```jsx
<Box borderWidth="1px" />
```

| Prop          | CSS Property   | Token Category |
| ------------- | -------------- | -------------- |
| `borderWidth` | `border-width` | `borderWidths` |

### Specific sides

Use the `border{Left|Right|Top|Bottom}Width` prop to apply border width on a
specific side of an element.

```jsx
<Box borderTopWidth="1px" />
<Box borderLeftWidth="1px" />
```

Use the logical equivalent to make the border width adapt based on the text
direction.

```jsx
<Box borderInlineStartWidth="1px" />
<Box borderInlineWidth="1px" /> // shorthand
```

| Prop                                          | CSS Property                | Token Category |
| --------------------------------------------- | --------------------------- | -------------- |
| `borderTopWidth`                              | `border-top-width`          | `borderWidths` |
| `borderLeftWidth`                             | `border-left-width`         | `borderWidths` |
| `borderRightWidth`                            | `border-right-width`        | `borderWidths` |
| `borderBottomWidth`                           | `border-bottom-width`       | `borderWidths` |
| `borderStartWidth` , `borderInlineStartWidth` | `border-{start+end}-width`  |
| `borderEndWidth` , `borderInlineEndWidth`     | `border-{start+end}-width`  |
| `borderXWidth` , `borderInlineWidth`          | `border-{left,right}-width` | `borderWidths` |
| `borderYWidth` , `borderBlockWidth`           | `border-{top,bottom}-width` | `borderWidths` |

## Border Color

### All sides

Use the `borderColor` prop to apply border color on all sides of an element.

```jsx
<Box borderColor="red.400" />

// with opacity modifier
<Box borderColor="red.400/20" />
```

### Specific sides

Use the `border{Left,Right,Top,Bottom}Color` prop to apply border color on a
specific side of an element.

```jsx
<Box borderTopColor="red.400" />
<Box borderLeftColor="red.400" />
```

Use the logical properties to adapt based on the text direction.

```jsx
<Box borderStartColor="red.400" />
<Box borderEndColor="red.400" />
```

| Prop                                          | CSS Property               | Token Category |
| --------------------------------------------- | -------------------------- | -------------- |
| `borderColor`                                 | `border-color`             | `colors`       |
| `borderTopColor`                              | `border-top-color`         | `colors`       |
| `borderLeftColor`                             | `border-left-color`        | `colors`       |
| `borderRightColor`                            | `border-right-color`       | `colors`       |
| `borderBottomColor`                           | `border-bottom-color`      | `colors`       |
| `borderStartColor` , `borderInlineStartColor` | `border-{start,end}-color` | `colors`       |
| `borderEndColor` , `borderInlineEndColor`     | `border-{start,end}-color` | `colors`       |
| `borderXColor`, `borderInlineColor`           | `border-inline-color`      | `colors`       |
| `borderYColor`, `borderBlockColor`            | `border-block-color`       | `colors`       |

## Divide Width

Use the `divide{X,Y}Width` prop to apply border width between elements. It uses
the CSS selector `> * + *` to apply the `border*` properties.

```jsx
<Box divideXWidth="1px">
  <Box>1</Box>
  <Box>2</Box>
</Box>

<Box divideYWidth="1px">
  <Box>1</Box>
  <Box>2</Box>
</Box>
```

| Prop          | CSS Property                        | Token Category |
| ------------- | ----------------------------------- | -------------- |
| `divideWidth` | `border-{inline,block}-start-width` | `borderWidths` |

## Divide Color

Use the `divideColor` prop to apply border color between elements.

```jsx
<Box divideColor="red.400">
  <Box>1</Box>
  <Box>2</Box>
</Box>
```

| Prop          | CSS Property     | Token Category |
| ------------- | ---------------- | -------------- |
| `divideColor` | `--divide-color` | `colors`       |

## Divide Style

Use the `divideStyle` prop to apply border style between elements.

```jsx
<Box divideX="2px" divideStyle="dashed">
  <Box>1</Box>
  <Box>2</Box>
</Box>
```

| Prop          | CSS Property     | Token Category |
| ------------- | ---------------- | -------------- |
| `divideStyle` | `--divide-style` | `borderStyle`  |

# Display

## Display Property

```jsx
<Box display="flex" />

// responsive
<Box display={{ base: "none", md: "block" }} />
```

| Prop      | CSS Property | Token Category |
| --------- | ------------ | -------------- |
| `display` | `display`    | -              |

## Hiding Elements

### Hide From

Use the `hideFrom` prop to hide an element from a specific breakpoint.

```jsx
<Box display="flex" hideFrom="md" />
```

| Prop       | CSS Property | Token Category |
| ---------- | ------------ | -------------- |
| `hideFrom` | `display`    | `breakpoints`  |

### Hide Below

Use the `hideBelow` prop to hide an element below a specific breakpoint.

```jsx
<Box display="flex" hideBelow="md" />
```

| Prop        | CSS Property | Token Category |
| ----------- | ------------ | -------------- |
| `hideBelow` | `display`    | `breakpoints`  |

# Divide

## Divide X

Use the `divideX` prop to add a divider between elements horizontally.

```jsx
<Box divideX="2px">
  <Box>Item 1</Box>
  <Box>Item 2</Box>
</Box>
```

| Prop      | CSS Property                | Token Category |
| --------- | --------------------------- | -------------- |
| `divideX` | `border-inline-start-width` | -              |

## Divide Y

Use the `divideY` prop to add a divider between elements vertically.

```jsx
<Box divideY="2px">
  <Box>Item 1</Box>
  <Box>Item 2</Box>
</Box>
```

| Prop      | CSS Property       | Token Category |
| --------- | ------------------ | -------------- |
| `divideY` | `border-top-width` | -              |

## Divide Color

Use the `divideColor` prop to add a divider color.

```jsx
<Box divideY="2px" divideColor="red.200">
  <Box>Item 1</Box>
  <Box>Item 2</Box>
</Box>
```

| Prop          | CSS Property       | Token Category |
| ------------- | ------------------ | -------------- |
| `divideColor` | `border-top-color` | -              |

## Divide Style

Use the `divideStyle` prop to add a divider style.

```jsx
<Box divideY="2px" divideStyle="dashed">
  <Box>Item 1</Box>
  <Box>Item 2</Box>
</Box>
```

| Prop          | CSS Property   | Token Category |
| ------------- | -------------- | -------------- |
| `divideStyle` | `border-style` | -              |

# Effects

## Box Shadow

Use the `shadow` or `boxShadow` prop to apply a box shadow to an element.

```jsx
// hardcoded values
<Box shadow="12px 12px 2px 1px rgba(0, 0, 255, .2)" />

// token values
<Box shadow="lg" />
```

| Prop                   | CSS Property     | Token Category |
| ---------------------- | ---------------- | -------------- |
| `shadows`, `boxShadow` | `box-shadow`     | `shadows`      |
| `shadowColor`          | `--shadow-color` | `colors`       |

## Box Shadow Color

Use the `shadowColor` prop to set the color of a box shadow. This prop maps to
the `--shadow-color` CSS variable.

```jsx
<Box shadow="60px -16px var(--shadow-color)" shadowColor="red" />
```

| Prop          | CSS Property     | Token Category |
| ------------- | ---------------- | -------------- |
| `shadowColor` | `--shadow-color` | `colors`       |

## Opacity

Use the `opacity` prop to set the opacity of an element.

```jsx
<Box opacity="0.5" />
```

| Prop      | CSS Property | Token Category |
| --------- | ------------ | -------------- |
| `opacity` | `opacity`    | `opacity`      |

## Mix Blend Mode

Use the `mixBlendMode` prop to control how an element's content should be
blended with the background.

```jsx
<Box bg="red.400">
  <Image src="..." mixBlendMode="hard-light" />
</Box>
```

| Prop           | CSS Property     | Token Category |
| -------------- | ---------------- | -------------- |
| `mixBlendMode` | `mix-blend-mode` | -              |
