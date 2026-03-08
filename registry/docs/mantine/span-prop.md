## span prop

Use `span` prop as a shorthand for `component="span"`:

```tsx
import { Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text span>Same as below</Text>
      <Text component="span">Same as above</Text>
    </>
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| color | MantineColor | - | @deprecated Use c prop instead |
| gradient | MantineGradient | - | Gradient configuration, ignored when variant is not gradient |
| inherit | boolean | - | Determines whether font properties should be inherited from the parent |
| inline | boolean | - | Sets line-height to 1 for centering |
| lineClamp | number | - | Number of lines after which Text will be truncated |
| size | MantineSize | (string & {}) | - | Controls font-size and line-height |
| span | boolean | - | Shorthand for component="span" |
| truncate | TextTruncate | - | Side on which Text must be truncated, if true, text is truncated from the start |

#### Styles API

Text component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Text selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Text-root | Root element |

**Text CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --text-fz | Controls `font-size` property |
| root | --text-lh | Controls `line-height` property |
| root | --text-gradient | Text fill gradient |
| root | --text-line-clamp | Number of lines that should be visible |

**Text data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-truncate | - | Value of  |
| root | data-line-clamp | - | - |
| root | data-inline | - | - |
| root | data-inherit | - | - |

**Textinput selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| wrapper | .mantine-Textinput-wrapper | Root element of the Input |
| input | .mantine-Textinput-input | Input element |
| section | .mantine-Textinput-section | Left and right sections |
| root | .mantine-Textinput-root | Root element |
| label | .mantine-Textinput-label | Label element |
| required | .mantine-Textinput-required | Required asterisk element, rendered inside label |
| description | .mantine-Textinput-description | Description element |
| error | .mantine-Textinput-error | Error element |

**Textarea selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| wrapper | .mantine-Textarea-wrapper | Root element of the Input |
| input | .mantine-Textarea-input | Input element |
| section | .mantine-Textarea-section | Left and right sections |
| root | .mantine-Textarea-root | Root element |
| label | .mantine-Textarea-label | Label element |
| required | .mantine-Textarea-required | Required asterisk element, rendered inside label |
| description | .mantine-Textarea-description | Description element |
| error | .mantine-Textarea-error | Error element |

### Textarea

Package: @mantine/core
Import: import { Textarea } from '@mantine/core';
Description: Autosize or regular textarea

## Usage

Textarea component supports [Input](https://mantine.dev/core/input) and [Input.Wrapper](https://mantine.dev/core/input) components features and all textarea element props. Textarea documentation does not include all features supported by the component – see [Input](https://mantine.dev/core/input) documentation to learn about all available features.

#### Example: configurator

```tsx
import { Textarea } from '@mantine/core';


function Demo() {
  return (
    <Textarea
      
      placeholder="Input placeholder"
    />
  );
}
```

## Controlled

```tsx
import { useState } from 'react';
import { Textarea } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('');
  return (
    <Textarea
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
    />
  );
}
```

## Autosize

Autosize textarea uses [react-textarea-autosize](https://www.npmjs.com/package/react-textarea-autosize) package.
Textarea height will grow until maxRows are reached or indefinitely if maxRows not set.

#### Example: autosize

```tsx
import { Textarea } from '@mantine/core';

function Demo() {
  return (
    <>
      <Textarea
        placeholder="Autosize with no rows limit"
        label="Autosize with no rows limit"
        autosize
        minRows={2}
      />

      <Textarea
        label="Autosize with 4 rows max"
        placeholder="Autosize with 4 rows max"
        autosize
        minRows={2}
        maxRows={4}
      />
    </>
  );
}
```

## Enable resize

By default, [resize](https://developer.mozilla.org/en-US/docs/Web/CSS/resize) is `none`,
to enable it set `resize` prop to `vertical` or `both`:

#### Example: resize

```tsx
import { Textarea } from '@mantine/core';

function Demo() {
  return <Textarea resize="vertical" label="Disabled" placeholder="Your comment" />;
}
```

## Error state

#### Example: error

```tsx
import { Textarea } from '@mantine/core';

function Demo() {
  return (
    <>
      <Textarea label="Boolean error" placeholder="Boolean error" error />
      <Textarea
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
      />
    </>
  );
}
```

## Disabled state

#### Example: disabled

```tsx
import { Textarea } from '@mantine/core';

function Demo() {
  return <Textarea label="Disabled" placeholder="Your comment" disabled />;
}
```

#### Example: stylesApi

```tsx
import { IconAt } from '@tabler/icons-react';
import { Textarea } from '@mantine/core';

function Demo() {
  return (
    <Textarea
      label="Label"
      placeholder="Textarea"
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
import { Textarea } from '@mantine/core';

function Demo() {
  const ref = useRef<HTMLTextAreaElement>(null);
  return <Textarea ref={ref} />;
}
```
