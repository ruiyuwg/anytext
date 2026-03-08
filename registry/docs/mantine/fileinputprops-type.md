## FileInputProps type

`FileInputProps` type is a generic interface which accepts a single type argument:
`multiple` value.

```tsx
import type { FileInputProps } from '@mantine/core';

type SingleInputProps = FileInputProps<false>;
type MultipleInputProps = FileInputProps<true>;
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accept | string | - | File input accept attribute, for example, "image/png,image/jpeg" |
| capture | boolean | "user" | "environment" | - | Specifies that, optionally, a new file should be captured, and which device should be used to capture that new media of a type defined by the accept attribute. |
| clearButtonProps | React.ComponentPropsWithoutRef<"button"> | - | Props passed down to the clear button |
| clearable | boolean | - | If set, the clear button is displayed in the right section |
| defaultValue | File | File\[] | null | - | Uncontrolled component default value |
| description | React.ReactNode | - | Contents of Input.Description component. If not set, description is not displayed. |
| descriptionProps | InputDescriptionProps & DataAttributes | - | Props passed down to the Input.Description component |
| disabled | boolean | - | Sets disabled attribute on the input element |
| error | React.ReactNode | - | Contents of Input.Error component. If not set, error is not displayed. |
| errorProps | InputErrorProps & DataAttributes | - | Props passed down to the Input.Error component |
| fileInputProps | React.ComponentPropsWithoutRef<"input"> | - | Props passed down to the hidden input element which is used to capture files |
| form | string | - | Input form attribute |
| inputContainer | (children: ReactNode) => ReactNode | - | Input container component |
| inputSize | string | - | size attribute passed down to the input element |
| inputWrapperOrder | ("input" | "label" | "description" | "error")\[] | - | Controls order of the elements |
| label | React.ReactNode | - | Contents of Input.Label component. If not set, label is not displayed. |
| labelProps | InputLabelProps & DataAttributes | - | Props passed down to the Input.Label component |
| leftSection | React.ReactNode | - | Content section displayed on the left side of the input |
| leftSectionPointerEvents | React.CSSProperties\["pointerEvents"] | - | Sets pointer-events styles on the leftSection element |
| leftSectionProps | React.ComponentPropsWithoutRef<"div"> | - | Props passed down to the leftSection element |
| leftSectionWidth | React.CSSProperties\["width"] | - | Left section width, used to set width of the section and input padding-left, by default equals to the input height |
| multiple | boolean | - | If set, user can pick more than one file |
| name | string | - | Input name attribute |
| onChange | (payload: Multiple extends true ? File\[] : File | null) => void | - | Called when value changes |
| placeholder | React.ReactNode | - | Input placeholder |
| pointer | boolean | - | Determines whether the input should have cursor: pointer style |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius, numbers are converted to rem |
| readOnly | boolean | - | If set, the input value cannot be changed |
| required | boolean | - | Adds required attribute to the input and a red asterisk on the right side of label |
| resetRef | ForwardedRef<() => void> | - | Reference of the function that should be called when value changes to null or empty array |
| rightSection | React.ReactNode | - | Content section displayed on the right side of the input |
| rightSectionPointerEvents | React.CSSProperties\["pointerEvents"] | - | Sets pointer-events styles on the rightSection element |
| rightSectionProps | React.ComponentPropsWithoutRef<"div"> | - | Props passed down to the rightSection element |
| rightSectionWidth | React.CSSProperties\["width"] | - | Right section width, used to set width of the section and input padding-right, by default equals to the input height |
| size | MantineSize | (string & {}) | - | Controls input height and horizontal padding |
| value | File | File\[] | null | - | Controlled component value |
| valueComponent | FC<{ value: File | File\[] | null; }> | - | Value renderer. By default, displays file name. |
| withAsterisk | boolean | - | If set, the required asterisk is displayed next to the label. Overrides required prop. Does not add required attribute to the input. |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the error prop is set |
| wrapperProps | WrapperProps | - | Props passed down to the root element |

#### Styles API

FileInput component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**FileInput selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| wrapper | .mantine-FileInput-wrapper | Root element of the Input |
| input | .mantine-FileInput-input | Input element |
| section | .mantine-FileInput-section | Left and right sections |
| root | .mantine-FileInput-root | Root element |
| label | .mantine-FileInput-label | Label element |
| required | .mantine-FileInput-required | Required asterisk element, rendered inside label |
| description | .mantine-FileInput-description | Description element |
| error | .mantine-FileInput-error | Error element |
| placeholder | .mantine-FileInput-placeholder | Placeholder text |

### Flex

Package: @mantine/core
Import: import { Flex } from '@mantine/core';
Description: Compose elements in a flex container

## Usage

#### Example: configurator

```tsx
import { Flex, Button } from '@mantine/core';


function Demo() {
  return (
    <Flex
      mih={50}
      bg="rgba(0, 0, 0, .3)"
      
    >
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Flex>
  );
}
```

## Supported props

## Responsive props

`Flex` component props can have responsive values the same way as other [style props](https://mantine.dev/styles/style-props/):

#### Example: responsive

```tsx
import { Flex, Button } from '@mantine/core';

function Demo() {
  return (
    <Flex
      direction={{ base: 'column', sm: 'row' }}
      gap={{ base: 'sm', sm: 'lg' }}
      justify={{ sm: 'center' }}
    >
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Flex>
  );
}
```

## Difference from Group and Stack

`Flex` component is an alternative to [Group](https://mantine.dev/core/group/) and [Stack](https://mantine.dev/core/stack/).
`Flex` is more flexible, it allows creating both horizontal and vertical flexbox layouts, but requires more configuration.
Unlike [Group](https://mantine.dev/core/group/) and [Stack](https://mantine.dev/core/stack/) `Flex` is [polymorphic](https://mantine.dev/guides/polymorphic/) and supports responsive props.

## Browser support

Flex component uses CSS flexbox gap to add spacing between children. Flexbox gap is supported by all modern browsers, but if you need to support older browsers, use Space component instead.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| align | StyleProp | - | align-items CSS property |
| columnGap | StyleProp | - | column-gap CSS property |
| direction | StyleProp | - | flex-direction CSS property |
| gap | StyleProp | - | gap CSS property |
| justify | StyleProp | - | justify-content CSS property |
| rowGap | StyleProp | - | row-gap CSS property |
| wrap | StyleProp | - | flex-wrap CSS property |

#### Styles API

Flex component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Flex selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Flex-root | Root element |

### FloatingIndicator

Package: @mantine/core
Import: import { FloatingIndicator } from '@mantine/core';
Description: Display a floating indicator over a group of elements

## Usage

`FloatingIndicator` is designed to highlight active element in a group.
It can be used to create custom segmented controls, tabs and other similar components.

`FloatingIndicator` renders an element over the `target` element. To calculate the position it is
required to pass `parent` element which has a relative position.

By default, `FloatingIndicator` does not have any visible styles. You can use `className` prop
or [Styles API](https://mantine.dev/styles/styles-api) to apply styles.

#### Example: segmented

```tsx
import { useState } from 'react';
import { FloatingIndicator, UnstyledButton } from '@mantine/core';
import classes from './Demo.module.css';

const data = ['React', 'Vue', 'Angular', 'Svelte'];

function Demo() {
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [controlsRefs, setControlsRefs] = useState<Record<string, HTMLButtonElement | null>>({});
  const [active, setActive] = useState(0);

  const setControlRef = (index: number) => (node: HTMLButtonElement) => {
    controlsRefs[index] = node;
    setControlsRefs(controlsRefs);
  };

  const controls = data.map((item, index) => (
    <UnstyledButton
      key={item}
      className={classes.control}
      ref={setControlRef(index)}
      onClick={() => setActive(index)}
      mod={{ active: active === index }}
    >
      <span className={classes.controlLabel}>{item}</span>
    </UnstyledButton>
  ));

  return (
    <div className={classes.root} ref={setRootRef}>
      {controls}

      <FloatingIndicator
        target={controlsRefs[active]}
        parent={rootRef}
        className={classes.indicator}
      />
    </div>
  );
}
```
