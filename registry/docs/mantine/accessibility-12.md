## Accessibility

`Drawer` component follows [WAI-ARIA recommendations](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog) on accessibility.

Set `title` props to make component accessible, will add `aria-labelledby` to the content element:

```tsx
import { Drawer } from '@mantine/core';

function Demo() {
  return <Drawer title="Drawer label" opened onClose={() => {}} />;
}
```

To set close button `aria-label` use `closeButtonProps`:

```tsx
import { Drawer } from '@mantine/core';

function Demo() {
  return (
    <Drawer
      closeButtonProps={{ 'aria-label': 'Close drawer' }}
      opened
      onClose={() => {}}
    />
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | - | Drawer content |
| closeButtonProps | ModalBaseCloseButtonProps | - | Props passed down to the close button |
| closeOnClickOutside | boolean | - | If set, the modal/drawer is closed when user clicks on the overlay |
| closeOnEscape | boolean | - | If set, onClose is called when user presses the escape key |
| id | string | - | Id used to connect modal/drawer with body and title |
| keepMounted | boolean | - | If set modal/drawer is not unmounted from the DOM when hidden. display: none styles are applied instead. |
| lockScroll | boolean | - | If set, scroll is locked when opened={true} |
| offset | string | number | - | Drawer container offset from the viewport end |
| onClose | () => void | required | Called when modal/drawer is closed |
| onEnterTransitionEnd | () => void | - | Called when enter transition ends |
| onExitTransitionEnd | () => void | - | Called when exit transition ends |
| opened | boolean | required | Controls opened state |
| overlayProps | ModalBaseOverlayProps | - | Props passed down to the Overlay component, can be used to configure opacity, background-color, styles and other properties |
| padding | MantineSpacing | - | Key of theme.spacing or any valid CSS value to set content, header and footer padding |
| portalProps | BasePortalProps | - | Props passed down to the Portal component when withinPortal is set |
| position | DrawerPosition | - | Side of the screen on which drawer will be opened |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius, numbers are converted to rem |
| removeScrollProps | RemoveScrollProps | - | Props passed down to react-remove-scroll, can be used to customize scroll lock behavior |
| returnFocus | boolean | - | If set, focus is returned to the last active element when onClose is called |
| scrollAreaComponent | ScrollAreaComponent | - | Scroll area component |
| shadow | MantineShadow | - | Key of theme.shadows or any valid CSS box-shadow value |
| size | number | MantineSize | (string & {}) | - | Controls width of the content area |
| stackId | string | - | Id of the drawer in the Drawer.Stack |
| title | React.ReactNode | - | Drawer title |
| transitionProps | TransitionProps | - | Props added to the Transition component that used to animate overlay and body, use to configure duration and animation type, { duration: 200, transition: 'fade-down' } by default |
| trapFocus | boolean | - | If set, focus is trapped within the modal/drawer |
| withCloseButton | boolean | - | If set, the close button is displayed |
| withOverlay | boolean | - | If set, the overlay is displayed |
| withinPortal | boolean | - | If set, the component is rendered inside Portal |
| zIndex | string | number | - | z-index CSS property of the root element |

#### Styles API

Drawer component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Drawer selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Drawer-root | Root element |
| inner | .mantine-Drawer-inner | Element used to center modal, has fixed position, takes entire screen |
| content | .mantine-Drawer-content | `Drawer.Content` root element |
| header | .mantine-Drawer-header | Contains title and close button |
| overlay | .mantine-Drawer-overlay | Overlay displayed under the `Drawer.Content` |
| title | .mantine-Drawer-title | Drawer title (h2 tag), displayed in the header |
| body | .mantine-Drawer-body | Drawer body, displayed after header |
| close | .mantine-Drawer-close | Close button |

**Drawer CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --drawer-offset | Controls `margin` of `Drawer.Content` |
| root | --drawer-size | Controls `width` of `Drawer.Content` |
| root | --drawer-flex | Controls `flex` property of `Drawer.Content` |
| root | --drawer-align | Controls `align-items` property of `Drawer.Content` |
| root | --drawer-justify | Controls `justify-content` property of `Drawer.Content` |
| root | --drawer-height | Controls `height` property of `Drawer.Content` |

### Fieldset

Package: @mantine/core
Import: import { Fieldset } from '@mantine/core';
Description: Group related elements in a form

## Usage

#### Example: usage

```tsx
import { Fieldset, TextInput } from '@mantine/core';

function Demo() {
  return (
    <Fieldset legend="Personal information">
      <TextInput label="Your name" placeholder="Your name" />
      <TextInput label="Email" placeholder="Email" mt="md" />
    </Fieldset>
  );
}
```

## Disabled

Set `disabled` prop to disable all inputs and buttons inside the fieldset:

#### Example: disabled

```tsx
import { Fieldset, TextInput, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Fieldset legend="Personal information" disabled>
      <TextInput label="Your name" placeholder="Your name" />
      <TextInput label="Email" placeholder="Email" mt="md" />

      <Group justify="flex-end" mt="md">
        <Button>Submit</Button>
      </Group>
    </Fieldset>
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| legend | React.ReactNode | - | Fieldset legend |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius |

#### Styles API

Fieldset component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Fieldset selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Fieldset-root | Root element |
| legend | .mantine-Fieldset-legend | Legend element |

**Fieldset CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --fieldset-radius | Controls `border-radius` |

### FileButton

Package: @mantine/core
Import: import { FileButton } from '@mantine/core';
Description: Open file picker with a button click

## Usage

#### Example: usage

```tsx
import { useState } from 'react';
import { FileButton, Button, Group, Text } from '@mantine/core';

function Demo() {
  const [file, setFile] = useState<File | null>(null);
  return (
    <>
      <Group justify="center">
        <FileButton onChange={setFile} accept="image/png,image/jpeg">
          {(props) => <Button {...props}>Upload image</Button>}
        </FileButton>
      </Group>

      {file && (
        <Text size="sm" ta="center" mt="sm">
          Picked file: {file.name}
        </Text>
      )}
    </>
  );
}
```

## Multiple files

Set `multiple` prop to allow picking multiple files:

#### Example: multiple

```tsx
import { useState } from 'react';
import { FileButton, Button, Group, Text } from '@mantine/core';

function Demo() {
  const [files, setFiles] = useState<File[]>([]);
  return (
    <>
      <Group justify="center">
        <FileButton onChange={setFiles} accept="image/png,image/jpeg" multiple>
          {(props) => <Button {...props}>Upload image</Button>}
        </FileButton>
      </Group>

      {files.length > 0 && (
        <Text size="sm" mt="sm">
          Picked files:
        </Text>
      )}

      <ul>
        {files.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    </>
  );
}
```

## Reset file

`resetRef` should be used to fix issue with stale value on hidden input element as input type file cannot be controlled.
Call `resetRef` when user selection is cleared:

#### Example: reset

```tsx
import { useState, useRef } from 'react';
import { FileButton, Button, Group, Text } from '@mantine/core';

function Demo() {
  const [file, setFile] = useState<File | null>(null);
  const resetRef = useRef<() => void>(null);

  const clearFile = () => {
    setFile(null);
    resetRef.current?.();
  };

  return (
    <>
      <Group justify="center">
        <FileButton resetRef={resetRef} onChange={setFile} accept="image/png,image/jpeg">
          {(props) => <Button {...props}>Upload image</Button>}
        </FileButton>
        <Button disabled={!file} color="red" onClick={clearFile}>
          Reset
        </Button>
      </Group>

      {file && (
        <Text size="sm" ta="center" mt="sm">
          Picked file: {file.name}
        </Text>
      )}
    </>
  );
}
```

## Server components

FileButton is not compatible with React Server Components as it uses useEffect and other client-side features. You can use it in client components only.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accept | string | - | File input accept attribute, for example, "image/png,image/jpeg" |
| capture | boolean | "user" | "environment" | - | Specifies that, optionally, a new file should be captured, and which device should be used to capture that new media of a type defined by the accept attribute. |
| children | (props: { onClick: () => void; }) => ReactNode | required | Function that receives button props and returns react node that should be rendered |
| disabled | boolean | - | Disables file picker |
| form | string | - | Input form attribute |
| inputProps | React.ComponentPropsWithoutRef<"input"> | - | Passes down props to the input element used to capture files |
| multiple | boolean | - | If set, user can pick more than one file |
| name | string | - | Input name attribute |
| onChange | (payload: Multiple extends true ? File\[] : File | null) => void | required | Called when files are picked |
| resetRef | ForwardedRef<() => void> | - | Reference of the function that should be called when value changes to null or empty array |

### FileInput

Package: @mantine/core
Import: import { FileInput } from '@mantine/core';
Description: Capture files from user

## Usage

FileInput component supports [Input](https://mantine.dev/core/input) and [Input.Wrapper](https://mantine.dev/core/input) components features and all input element props. FileInput documentation does not include all features supported by the component – see [Input](https://mantine.dev/core/input) documentation to learn about all available features.

#### Example: usage

```tsx
import { FileInput } from '@mantine/core';


function Demo() {
  return (
    <FileInput
      
      placeholder="Input placeholder"
    />
  );
}
```

## Controlled

When `multiple` is `false`:

```tsx
import { useState } from 'react';
import { FileInput } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<File | null>(null);
  return <FileInput value={value} onChange={setValue} />;
}
```

When `multiple` is `true`:

```tsx
import { useState } from 'react';
import { FileInput } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<File[]>([]);
  return <FileInput multiple value={value} onChange={setValue} />;
}
```

## Multiple

Set `multiple` to allow user to pick more than one file:

#### Example: multiple

```tsx
import { FileInput } from '@mantine/core';

function Demo() {
  return <FileInput label="Upload files" placeholder="Upload files" multiple />;
}
```

## Accept

Set `accept` prop to restrict files selection to specific mime types:

#### Example: accept

```tsx
import { FileInput } from '@mantine/core';

function Demo() {
  return (
    <FileInput accept="image/png,image/jpeg" label="Upload files" placeholder="Upload files" />
  );
}
```

## Clearable

Set `clearable` prop to display clear button in the right section of the input
when file is selected. Note that if you define custom right section, clear button
will not be rendered.

#### Example: clearable

```tsx
import { FileInput } from '@mantine/core';

function Demo() {
  return <FileInput clearable label="Upload files" placeholder="Upload files" />;
}
```

## Custom value component

#### Example: valueComponent

```tsx
import { FileInput, FileInputProps, Pill } from '@mantine/core';

const ValueComponent: FileInputProps['valueComponent'] = ({ value }) => {
  if (value === null) {
    return null;
  }

  if (Array.isArray(value)) {
    return (
      <Pill.Group>
        {value.map((file, index) => (
          <Pill key={index}>{file.name}</Pill>
        ))}
      </Pill.Group>
    );
  }

  return <Pill>{value.name}</Pill>;
};

function Demo() {
  return (
    <FileInput
      label="Upload files"
      placeholder="Upload files"
      multiple
      valueComponent={ValueComponent}
    />
  );
}
```

## Error state

#### Example: error

```tsx
import { FileInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <FileInput label="Boolean error" placeholder="Boolean error" error />
      <FileInput
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
import { FileInput } from '@mantine/core';

function Demo() {
  return <FileInput disabled label="Disabled input" placeholder="Disabled input" />;
}
```

## Input sections

FileInput supports left and right sections to display icons, buttons or other content alongside the input.

#### Example: sections

```tsx
import { FileInput } from '@mantine/core';
import { IconFileCv } from '@tabler/icons-react';

function Demo() {
  const icon = <IconFileCv size={18} stroke={1.5} />;

  return (
    <>
      <FileInput
        leftSection={icon}
        label="Attach your CV"
        placeholder="Your CV"
        leftSectionPointerEvents="none"
      />
      <FileInput
        rightSection={icon}
        label="Attach your CV"
        placeholder="Your CV"
        rightSectionPointerEvents="none"
        mt="md"
      />
    </>
  );
}
```

#### Example: stylesApi

```tsx
import { IconAt } from '@tabler/icons-react';
import { FileInput } from '@mantine/core';

function Demo() {
  return (
    <FileInput
      label="Label"
      placeholder="FileInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconAt size={18} />}
      
    />
  );
}
```

## Get element ref

```tsx
import { useRef } from 'react';
import { FileInput } from '@mantine/core';

function Demo() {
  const ref = useRef<HTMLButtonElement>(null);
  return <FileInput ref={ref} />;
}
```

## Accessibility

FileInput provides better accessibility support when used in forms. Make sure to associate the input with a label for better screen reader support.
