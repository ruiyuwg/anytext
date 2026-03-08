## Accessibility

If you use `Input` component without associated label element, set `aria-label`:

```tsx
import { Input } from '@mantine/core';

// ok – the input is labelled by the aria-label
function WithAriaLabel() {
  return <Input aria-label="Your email" />;
}

// ok – the input is labelled by the label element
function WithLabel() {
  return (
    <>
      <label htmlFor="my-email">Your email</label>
      <Input id="my-email" />
    </>
  );
}
```

When you use `Input` with `Input.Wrapper` it is required to set `id` on both components
to connect label and other elements with the input:

```tsx
import { Input } from '@mantine/core';

function Demo() {
  return (
    <Input.Wrapper label="Your email" id="your-email">
      <Input id="your-email" />
    </Input.Wrapper>
  );
}
```

You can use [use-id](https://mantine.dev/hooks/use-id) to generate unique ids:

```tsx
import { Input } from '@mantine/core';
import { useId } from '@mantine/hooks';

function Demo() {
  const id = useId();
  return (
    <Input.Wrapper label="Your email" id={id}>
      <Input id={id} />
    </Input.Wrapper>
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| disabled | boolean | - | Sets disabled attribute on the input element |
| error | React.ReactNode | - | Determines whether the input should have error styles and aria-invalid attribute |
| id | string | - | Input element id |
| inputSize | string | - | size attribute passed down to the input element |
| leftSection | React.ReactNode | - | Content section displayed on the left side of the input |
| leftSectionPointerEvents | React.CSSProperties\["pointerEvents"] | - | Sets pointer-events styles on the leftSection element |
| leftSectionProps | React.ComponentPropsWithoutRef<"div"> | - | Props passed down to the leftSection element |
| leftSectionWidth | React.CSSProperties\["width"] | - | Left section width, used to set width of the section and input padding-left, by default equals to the input height |
| multiline | boolean | - | Determines whether the input can have multiple lines, for example when component="textarea" |
| pointer | boolean | - | Determines whether the input should have cursor: pointer style |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius, numbers are converted to rem |
| required | boolean | - | Sets required attribute on the input element |
| rightSection | React.ReactNode | - | Content section displayed on the right side of the input |
| rightSectionPointerEvents | React.CSSProperties\["pointerEvents"] | - | Sets pointer-events styles on the rightSection element |
| rightSectionProps | React.ComponentPropsWithoutRef<"div"> | - | Props passed down to the rightSection element |
| rightSectionWidth | React.CSSProperties\["width"] | - | Right section width, used to set width of the section and input padding-right, by default equals to the input height |
| size | MantineSize | (string & {}) | - | Controls input height and horizontal padding |
| withAria | boolean | - | Determines whether aria- and other accessibility attributes should be added to the input |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the error prop is set |
| wrapperProps | WrapperProps | - | Props passed down to the root element of the Input component |

#### Styles API

Input component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Input selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| wrapper | .mantine-Input-wrapper | Root element of the Input |
| input | .mantine-Input-input | Input element |
| section | .mantine-Input-section | Left and right sections |

**Input CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| wrapper | --input-fz | `font-size` of the input element |
| wrapper | --input-left-section-width | `width` of the left section |
| wrapper | --input-right-section-width | `width` of the right section |
| wrapper | --input-padding-y | `padding-top` and `padding-bottom` of the input element |
| wrapper | --input-radius | `border-radius` of the input element |
| wrapper | --input-left-section-pointer-events | Controls `pointer-events` of the left section |
| wrapper | --input-right-section-pointer-events | Controls `pointer-events` of the right section |

**Inputwrapper selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Inputwrapper-root | Root element |
| label | .mantine-Inputwrapper-label | Label element |
| required | .mantine-Inputwrapper-required | Required asterisk element, rendered inside label |
| description | .mantine-Inputwrapper-description | Description element |
| error | .mantine-Inputwrapper-error | Error element |

**Inputwrapper CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| label | --input-label-size | Controls label `font-size` |
| label | --input-asterisk-color | Controls label asterisk text `color` |

**Inputbase selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| wrapper | .mantine-Inputbase-wrapper | Root element of the Input |
| input | .mantine-Inputbase-input | Input element |
| section | .mantine-Inputbase-section | Left and right sections |
| root | .mantine-Inputbase-root | Root element |
| label | .mantine-Inputbase-label | Label element |
| required | .mantine-Inputbase-required | Required asterisk element, rendered inside label |
| description | .mantine-Inputbase-description | Description element |
| error | .mantine-Inputbase-error | Error element |

### JsonInput

Package: @mantine/core
Import: import { JsonInput } from '@mantine/core';
Description: Capture json data from user

## Usage

`JsonInput` is based on [Textarea](https://mantine.dev/core/textarea/) component,
it includes json validation logic and option to format input value on blur:

#### Example: usage

```tsx
import { JsonInput } from '@mantine/core';

function Demo() {
  return (
    <JsonInput
      label="Your package.json"
      placeholder="Textarea will autosize to fit the content"
      validationError="Invalid JSON"
      formatOnBlur
      autosize
      minRows={4}
    />
  );
}
```

## Controlled

```tsx
import { useState } from 'react';
import { JsonInput } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('');
  return <JsonInput value={value} onChange={setValue} />;
}
```

## Input props

JsonInput component supports [Input](https://mantine.dev/core/input) and [Input.Wrapper](https://mantine.dev/core/input) components features and all textarea element props. JsonInput documentation does not include all features supported by the component – see [Input](https://mantine.dev/core/input) documentation to learn about all available features.

#### Example: configurator

```tsx
import { JsonInput } from '@mantine/core';


function Demo() {
  return (
    <JsonInput
      
      placeholder="Input placeholder"
    />
  );
}
```

## Disabled state

#### Example: disabled

```tsx
import { JsonInput } from '@mantine/core';

function Demo() {
  return (
    <JsonInput disabled defaultValue='{ "a": 1, "B": 2 }' label="Disabled" placeholder="Disabled" />
  );
}
```

#### Example: stylesApi

```tsx
import { IconAt } from '@tabler/icons-react';
import { JsonInput } from '@mantine/core';

function Demo() {
  return (
    <JsonInput
      label="Label"
      placeholder="JsonInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconAt size={18} />}
      autosize
      
    />
  );
}
```

## Get element ref

```tsx
import { useRef } from 'react';
import { JsonInput } from '@mantine/core';

function Demo() {
  const ref = useRef<HTMLTextAreaElement>(null);
  return <JsonInput ref={ref} />;
}
```
