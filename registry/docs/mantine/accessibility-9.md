## Accessibility

ColorInput provides better accessibility support when used in forms. Make sure to associate the input with a label for better screen reader support.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| closeOnColorSwatchClick | boolean | - | If set, the dropdown is closed when one of the color swatches is clicked |
| defaultValue | string | - | Uncontrolled component default value |
| description | React.ReactNode | - | Contents of Input.Description component. If not set, description is not displayed. |
| descriptionProps | InputDescriptionProps & DataAttributes | - | Props passed down to the Input.Description component |
| disabled | boolean | - | Sets disabled attribute on the input element |
| disallowInput | boolean | - | If input is not allowed, the user can only pick value with color picker and swatches |
| error | React.ReactNode | - | Contents of Input.Error component. If not set, error is not displayed. |
| errorProps | InputErrorProps & DataAttributes | - | Props passed down to the Input.Error component |
| eyeDropperButtonProps | Record\<string, any> | - | Props passed down to the eye dropper button |
| eyeDropperIcon | React.ReactNode | - | An icon to replace the default eye dropper icon |
| fixOnBlur | boolean | - | If set, the input value resets to the last known valid value when the input loses focus |
| format | ColorFormat | - | Color format |
| inputContainer | (children: ReactNode) => ReactNode | - | Input container component |
| inputSize | string | - | size attribute passed down to the input element |
| inputWrapperOrder | ("input" | "label" | "description" | "error")\[] | - | Controls order of the elements |
| label | React.ReactNode | - | Contents of Input.Label component. If not set, label is not displayed. |
| labelProps | InputLabelProps & DataAttributes | - | Props passed down to the Input.Label component |
| leftSection | React.ReactNode | - | Content section displayed on the left side of the input |
| leftSectionPointerEvents | React.CSSProperties\["pointerEvents"] | - | Sets pointer-events styles on the leftSection element |
| leftSectionProps | React.ComponentPropsWithoutRef<"div"> | - | Props passed down to the leftSection element |
| leftSectionWidth | React.CSSProperties\["width"] | - | Left section width, used to set width of the section and input padding-left, by default equals to the input height |
| onChange | (value: string) => void | - | Called when value changes |
| onChangeEnd | (value: string) => void | - | Called when the user stops dragging one of the sliders or changes the value with keyboard |
| pointer | boolean | - | Determines whether the input should have cursor: pointer style |
| popoverProps | PopoverProps | - | Props passed down to the Popover component |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius, numbers are converted to rem |
| required | boolean | - | Adds required attribute to the input and a red asterisk on the right side of label |
| rightSection | React.ReactNode | - | Content section displayed on the right side of the input |
| rightSectionPointerEvents | React.CSSProperties\["pointerEvents"] | - | Sets pointer-events styles on the rightSection element |
| rightSectionProps | React.ComponentPropsWithoutRef<"div"> | - | Props passed down to the rightSection element |
| rightSectionWidth | React.CSSProperties\["width"] | - | Right section width, used to set width of the section and input padding-right, by default equals to the input height |
| size | MantineSize | (string & {}) | - | Controls input height and horizontal padding |
| swatches | string\[] | - | A list of colors used to display swatches list below the color picker |
| swatchesPerRow | number | - | Number of swatches per row |
| value | string | - | Controlled component value |
| withAsterisk | boolean | - | If set, the required asterisk is displayed next to the label. Overrides required prop. Does not add required attribute to the input. |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the error prop is set |
| withEyeDropper | boolean | - | If set, the eye dropper button is displayed in the right section |
| withPicker | boolean | - | Determines whether the color picker should be displayed |
| withPreview | boolean | - | If set, the preview color swatch is displayed in the left section of the input |
| wrapperProps | WrapperProps | - | Props passed down to the root element |

#### Styles API

ColorInput component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**ColorInput selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| wrapper | .mantine-ColorInput-wrapper | Root element |
| input | .mantine-ColorInput-input | Input element |
| section | .mantine-ColorInput-section | Left and right sections |
| root | .mantine-ColorInput-root | Root element |
| label | .mantine-ColorInput-label | Label element |
| required | .mantine-ColorInput-required | Required asterisk element, rendered inside label |
| description | .mantine-ColorInput-description | Description element |
| error | .mantine-ColorInput-error | Error element |
| preview | .mantine-ColorInput-preview | Color preview, displayed only when `format` supports alpha channel |
| body | .mantine-ColorInput-body | Contains alpha/hue sliders and color preview |
| slider | .mantine-ColorInput-slider | Alpha and hue sliders root |
| sliderOverlay | .mantine-ColorInput-sliderOverlay | Element used to display various overlays over hue and alpha sliders |
| saturation | .mantine-ColorInput-saturation | Saturation picker |
| saturationOverlay | .mantine-ColorInput-saturationOverlay | Element used to display various overlays over saturation picker |
| sliders | .mantine-ColorInput-sliders | Contains alpha and hue sliders |
| thumb | .mantine-ColorInput-thumb | Thumb of all sliders |
| swatch | .mantine-ColorInput-swatch | Color swatch |
| swatches | .mantine-ColorInput-swatches | Color swatches list |
| dropdown | .mantine-ColorInput-dropdown | Popover dropdown |
| colorPreview | .mantine-ColorInput-colorPreview | Color swatch preview in input left section |
| eyeDropperButton | .mantine-ColorInput-eyeDropperButton | Eye dropper button |
| eyeDropperIcon | .mantine-ColorInput-eyeDropperIcon | Default eye dropper icon |

**ColorInput CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| colorPreview | --ci-preview-size | Controls `width` and `height` of color preview |

### ColorPicker

Package: @mantine/core
Import: import { ColorPicker } from '@mantine/core';
Description: Pick colors in hex(a), rgb(a), hsl(a) and hsv(a) formats

## Usage

#### Example: usage

```tsx
import { useState } from 'react';
import { ColorPicker, Text } from '@mantine/core';

function Demo() {
  const [value, onChange] = useState('rgba(47, 119, 150, 0.7)');

  return (
    <>
      <ColorPicker format="rgba" value={value} onChange={onChange} />
      <Text>{value}</Text>
    </>
  );
}
```

## Color format

`ColorPicker` supports hex, hexa, rgb, rgba, hsl and hsla color formats.
Slider to change opacity and color preview are displayed only for hexa, rgba and hsla formats:

#### Example: formatsConfigurator

```tsx
import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker />;
}
```

## With swatches

You can add predefined color swatches with `swatches` prop:

#### Example: swatches

```tsx
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker
      format="hex"
      swatches={[${Object.keys(DEFAULT_THEME.colors)
        .map((color) => `'${DEFAULT_THEME.colors[color][6]}'`)
        .join(', ')}]}
    />
  );
}
```

By default, `ColorPicker` will display 7 swatches per row, you can configure it with `swatchesPerRow` prop:

#### Example: swatchesConfigurator

```tsx
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker format="hex" swatches={[${Object.keys(DEFAULT_THEME.colors)
      .map((color) => `'${DEFAULT_THEME.colors[color][6]}'`)
      .join(', ')}]} />
  );
}
```

To display swatches without picker set `withPicker={false}` and `fullWidth` props:

#### Example: swatchesOnly

```tsx
import { useState } from 'react';
import { DEFAULT_THEME, ColorPicker, Text } from '@mantine/core';

function Demo() {
  const [value, onChange] = useState('#fff');

  return (
    <>
      <ColorPicker
        format="hex"
        value={value}
        onChange={onChange}
        withPicker={false}
        fullWidth
        swatches={[
          ...DEFAULT_THEME.colors.red.slice(0, 7),
          ...DEFAULT_THEME.colors.green.slice(0, 7),
          ...DEFAULT_THEME.colors.blue.slice(0, 7),
        ]}
      />

      <Text>{value}</Text>
    </>
  );
}
```

## Size

`ColorPicker` has 5 predefined sizes: `xs`, `sm`, `md`, `lg` and `xl`:

#### Example: sizeConfigurator

```tsx
import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker />;
}
```

## fullWidth

Set `fullWidth` prop to stretch component to 100% of parent width. In this case the picker will not
have fixed width, but you can still use `size` prop to control sizes of sliders.

#### Example: fullWidth

```tsx
import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker fullWidth size="lg" format="rgba" />;
}
```

#### Example: stylesApi

```tsx
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker format="rgba" size="lg" swatches={['#25262b', '#868e96', '#fa5252', '#e64980', '#be4bdb', '#7950f2', '#4c6ef5']} />
  );
}
```

## HueSlider component

#### Example: hueSlider

```tsx
import { useState } from 'react';
import { HueSlider, Text } from '@mantine/core';

function Demo() {
  const [value, onChange] = useState(250);

  return (
    <>
      <Text>Hue value: {value}</Text>
      <HueSlider value={value} onChange={onChange} />
    </>
  );
}
```

## AlphaSlider component

#### Example: alphaSlider

```tsx
import { useState } from 'react';
import { AlphaSlider, Text } from '@mantine/core';

function Demo() {
  const [value, onChange] = useState(0.55);

  return (
    <>
      <Text>Alpha value: {value}</Text>
      <AlphaSlider color="#1c7ed6" value={value} onChange={onChange} />
    </>
  );
}
```
