## Accessibility

ColorPicker component is accessible by default:

- Saturation, hue and alpha sliders are focusable
- When moused is used to interact with the slider, focus is moved to the slider
- All values can be changed with arrows

To make component accessible for screen readers, set `saturationLabel`, `hueLabel` and `alphaLabel`:

```tsx
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker
      saturationLabel="Saturation"
      hueLabel="Hue"
      alphaLabel="Alpha"
    />
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| alphaLabel | string | - | Alpha slider aria-label |
| defaultValue | string | - | Uncontrolled component default value |
| focusable | boolean | - | If set, interactive elements (sliders thumbs and swatches) are focusable with keyboard |
| format | ColorFormat | - | Color format |
| fullWidth | boolean | - | If set, the component takes 100% width of its container |
| hueLabel | string | - | Hue slider aria-label |
| onChange | (value: string) => void | - | Called when value changes |
| onChangeEnd | (value: string) => void | - | Called when the user stops dragging one of the sliders or changes the value with keyboard |
| onColorSwatchClick | (color: string) => void | - | Called when one of the color swatches is clicked |
| saturationLabel | string | - | Saturation slider aria-label |
| size | MantineSize | (string & {}) | - | Controls size of hue, alpha and saturation sliders |
| swatches | string\[] | - | A list of colors used to display swatches list below the color picker |
| swatchesPerRow | number | - | Number of swatches per row |
| value | string | - | Controlled component value |
| withPicker | boolean | - | Determines whether the color picker should be displayed |

#### Styles API

ColorPicker component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**ColorPicker selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| wrapper | .mantine-ColorPicker-wrapper | Root element |
| preview | .mantine-ColorPicker-preview | Color preview, displayed only when `format` supports alpha channel |
| body | .mantine-ColorPicker-body | Contains alpha/hue sliders and color preview |
| slider | .mantine-ColorPicker-slider | Alpha and hue sliders root |
| sliderOverlay | .mantine-ColorPicker-sliderOverlay | Element used to display various overlays over hue and alpha sliders |
| saturation | .mantine-ColorPicker-saturation | Saturation picker |
| saturationOverlay | .mantine-ColorPicker-saturationOverlay | Element used to display various overlays over saturation picker |
| sliders | .mantine-ColorPicker-sliders | Contains alpha and hue sliders |
| thumb | .mantine-ColorPicker-thumb | Thumb of all sliders |
| swatch | .mantine-ColorPicker-swatch | Color swatch |
| swatches | .mantine-ColorPicker-swatches | Color swatches list |

**ColorPicker CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| wrapper | --cp-body-spacing | Controls spacing between sliders and saturation |
| wrapper | --cp-preview-size | Controls size of the preview swatch |
| wrapper | --cp-width | Controls `width` of the root element |
| wrapper | --cp-swatch-size | Controls swatch `width` and `height` |
| wrapper | --cp-thumb-size | Controls thumb `width` and `height` in all sliders and saturation picker |
| wrapper | --cp-saturation-height | Controls `height` of the saturation picker |

### ColorSwatch

Package: @mantine/core
Import: import { ColorSwatch } from '@mantine/core';
Description: Displays color

## Usage

#### Example: usage

```tsx
import { ColorSwatch, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <ColorSwatch color="#009790" />
      <ColorSwatch color="rgba(234, 22, 174, 0.5)" />
      <ColorSwatch color="var(--mantine-color-orange-5)" />
    </Group>
  );
}
```

## withShadow

By default, `ColorSwatch` has an inner box-shadow to make it more visible on light backgrounds,
you can disable it by setting `withShadow={false}` prop:

#### Example: shadow

```tsx
import { ColorSwatch } from '@mantine/core';

function Demo() {
  return <ColorSwatch color="rgba(255, 255, 255, 0.7)" />;
}
```
