## Inline code

`InlineCodeHighlight` component allows highlighting inline code snippets:

#### Example: inline

```tsx
import { Text } from '@mantine/core';
import { InlineCodeHighlight } from '@mantine/code-highlight';

function Demo() {
  return (
    <Text>
      You can highlight code inline:{' '}
      <InlineCodeHighlight
        code='<InlineCodeHighlight code="" language="tsx" />'
        language="tsx"
        withBorder
      />
      . Is that not cool?
    </Text>
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| background | MantineColor | - | Controls background color of the code. By default, the value depends on color scheme. |
| code | string | required | Code to highlight |
| codeColorScheme | (string & {}) | "dark" | "light" | - | Set to use dark or light color scheme. When using shiki adapter, you can use loaded themes here |
| collapseCodeLabel | string | - | Label for collapse button |
| controls | ReactNode\[] | - | Extra controls to display in the controls list |
| copiedLabel | string | - | Label for copy button in copied state |
| copyLabel | string | - | Label for copy button in default state |
| defaultExpanded | boolean | - | Uncontrolled expanded default state |
| expandCodeLabel | string | - | Label for expand button |
| expanded | boolean | - | Controlled expanded state |
| language | string | - | Language of the code, used for syntax highlighting |
| maxCollapsedHeight | string | number | - | Max height of collapsed state |
| onExpandedChange | (expanded: boolean) => void | - | Called when expanded state changes |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius |
| withBorder | boolean | - | Adds border to the root element |
| withCopyButton | boolean | - | Determines whether the copy button should be displayed |
| withExpandButton | boolean | - | Determines whether the expand/collapse button should be displayed |

#### Styles API

CodeHighlight component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**CodeHighlight selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| codeHighlight | .mantine-CodeHighlight-codeHighlight | Root element |
| showCodeButton | .mantine-CodeHighlight-showCodeButton | Button that reveals full code when it is collapsed |
| pre | .mantine-CodeHighlight-pre | Pre element, contains code element |
| code | .mantine-CodeHighlight-code | Code element |
| control | .mantine-CodeHighlight-control | Control button, copy/collapse, custom controls |
| controlTooltip | .mantine-CodeHighlight-controlTooltip | Root element of control tooltip |
| controls | .mantine-CodeHighlight-controls | A wrapper around controls |
| scrollarea | .mantine-CodeHighlight-scrollarea | Scroll area, contains code |

**CodeHighlight CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| codeHighlight | --ch-background | Background color |
| codeHighlight | --ch-max-height | Max height of code block in collapsed state |
| codeHighlight | --ch-radius | Border radius |

**CodeHighlight.Tabs selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| codeHighlight | .mantine-CodeHighlightTabs-codeHighlight | Root element of inner CodeHighlight component |
| showCodeButton | .mantine-CodeHighlightTabs-showCodeButton | Button that reveals full code when it is collapsed |
| pre | .mantine-CodeHighlightTabs-pre | Pre element, contains code element |
| code | .mantine-CodeHighlightTabs-code | Code element |
| control | .mantine-CodeHighlightTabs-control | Control button, copy/collapse, custom controls |
| controlTooltip | .mantine-CodeHighlightTabs-controlTooltip | Root element of control tooltip |
| controls | .mantine-CodeHighlightTabs-controls | A wrapper around controls |
| scrollarea | .mantine-CodeHighlightTabs-scrollarea | Scroll area, contains code |
| root | .mantine-CodeHighlightTabs-root | Root element |
| filesScrollarea | .mantine-CodeHighlightTabs-filesScrollarea | Scrollarea with files list |
| files | .mantine-CodeHighlightTabs-files | Files names list |
| file | .mantine-CodeHighlightTabs-file | File name |
| fileIcon | .mantine-CodeHighlightTabs-fileIcon | File icon |

### Dropzone

Package: @mantine/dropzone
Import: import { Dropzone } from '@mantine/dropzone';
Description: Capture files from user with drag and drop

## Installation

```bash
yarn add @mantine/dropzone
```

```bash
npm install @mantine/dropzone
```

After installation import package styles at the root of your application:

```tsx
import '@mantine/core/styles.css';
// ‼️ import dropzone styles after core package styles
import '@mantine/dropzone/styles.css';
```

## Usage

`Dropzone` lets you capture one or more files from user.
Component is based on [react-dropzone](https://react-dropzone.js.org/) and support all of its core features:

- Accepts/rejects files based on provided mime types
- Limits individual file size
- Renders given children and provides context based component to display elements based on current status

#### Example: usage

```tsx
import { Group, Text } from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';

export function BaseDemo(props: Partial<DropzoneProps>) {
  return (
    <Dropzone
      onDrop={(files) => console.log('accepted files', files)}
      onReject={(files) => console.log('rejected files', files)}
      maxSize={5 * 1024 ** 2}
      accept={IMAGE_MIME_TYPE}
      {...props}
    >
      <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
        <Dropzone.Accept>
          <IconUpload size={52} color="var(--mantine-color-blue-6)" stroke={1.5} />
        </Dropzone.Accept>
        <Dropzone.Reject>
          <IconX size={52} color="var(--mantine-color-red-6)" stroke={1.5} />
        </Dropzone.Reject>
        <Dropzone.Idle>
          <IconPhoto size={52} color="var(--mantine-color-dimmed)" stroke={1.5} />
        </Dropzone.Idle>

        <div>
          <Text size="xl" inline>
            Drag images here or click to select files
          </Text>
          <Text size="sm" c="dimmed" inline mt={7}>
            Attach as many files as you like, each file should not exceed 5mb
          </Text>
        </div>
      </Group>
    </Dropzone>
  );
}
```

## Dropzone.Accept, Dropzone.Reject and Dropzone.Idle

`Dropzone.Accept`, `Dropzone.Reject` and `Dropzone.Idle` components are visible only when the user performs certain action:

- `Dropzone.Accept` is visible only when the user drags file that can be accepted over the dropzone
- `Dropzone.Reject` is visible only when the user drags file that cannot be accepted over the dropzone
- `Dropzone.Idle` is visible when the user does not drag anything over dropzone

## Loading state

Set `loading` prop to indicate loading state with [LoadingOverlay](https://mantine.dev/core/loading-overlay/) component.
When `loading` props is true user cannot drop or select new files (`Dropzone` becomes disabled):

#### Example: loading

```tsx
import { Dropzone } from '@mantine/dropzone';

function Demo() {
  return (
    <Dropzone loading onDrop={() => {}}>
      {/* children */}
    </Dropzone>
  );
}
```

## Disabled state

If you want to implement your own loading state you can disable `Dropzone` without `LoadingOverlay`.
Same as with `loading`, when `Dropzone` is disabled user cannot drop or select new files:

#### Example: disabled

```tsx
// Demo.tsx
import { Dropzone } from '@mantine/dropzone';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Dropzone disabled className={classes.disabled} onDrop={() => {}}>
      {/* children... */}
    </Dropzone>
  );
}

// Demo.module.css
.disabled {
  background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6));
  border-color: light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-5));
  cursor: not-allowed;

  & * {
    color: light-dark(var(--mantine-color-gray-5), var(--mantine-color-dark-3));
  }
}
```

## Open file browser manually

To open files browser from outside of component use `openRef` prop to get function that will trigger file browser:

#### Example: manual

```tsx
import { useRef } from 'react';
import { Button, Group } from '@mantine/core';
import { Dropzone } from '@mantine/dropzone';

function Demo() {
  const openRef = useRef<() => void>(null);

  return (
    <>
      <Dropzone openRef={openRef} onDrop={() => {}}>
        {/* children */}
      </Dropzone>

      <Group justify="center" mt="md">
        <Button onClick={() => openRef.current?.()}>Select files</Button>
      </Group>
    </>
  );
}
```

## Enable child pointer event

By default, Dropzone disables pointer events on its children for dragging events to work. When `activateOnClick={false}`,
clicking on any children inside Dropzone will not do anything.
However, you can set style `pointerEvents: 'all'` to make children clickable.
Note that you need to set these styles only on interactive elements, such as buttons or links.

#### Example: enableChildPointerEvent

```tsx
import { useRef } from 'react';
import { Button, Group } from '@mantine/core';
import { Dropzone } from '@mantine/dropzone';

function Demo() {
  const openRef = useRef<() => void>(null);

  return (
    <Dropzone openRef={openRef} onDrop={() => {}} activateOnClick={false}>
      <Group justify="center">
        <Button onClick={() => openRef.current?.()} style={{ pointerEvents: 'all' }}>
          Select files
        </Button>
      </Group>
    </Dropzone>
  );
}
```

## Mime types

To specify file types provide an object with the keys set to the [mime type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)
and the values as an array of file extensions. Find more examples of accepting specific file types
in the [react-dropzone documentation](https://react-dropzone.js.org/#section-accepting-specific-file-types).

```tsx
import { Dropzone } from '@mantine/dropzone';

function Demo() {
  return (
    <Dropzone
      accept={{
        'image/*': [], // All images
        'text/html': ['.html', '.htm'],
      }}
      onDrop={() => {}}
    >
      {/* children */}
    </Dropzone>
  );
}
```

You can also specify file types by providing an array of mime types to `accept` prop:

```tsx
import { Dropzone } from '@mantine/dropzone';

function Demo() {
  return (
    <Dropzone
      accept={[
        'image/png',
        'image/jpeg',
        'image/svg+xml',
        'image/gif',
      ]}
      onDrop={() => {}}
    >
      {/* children */}
    </Dropzone>
  );
}
```

To save some research time you can use `MIME_TYPES` variable exported from `@mantine/dropzone`:

```tsx
import { Dropzone, MIME_TYPES } from '@mantine/dropzone';

function Demo() {
  return (
    <Dropzone
      accept={[
        MIME_TYPES.png,
        MIME_TYPES.jpeg,
        MIME_TYPES.svg,
        MIME_TYPES.gif,
      ]}
      onDrop={() => {}}
    >
      {/* children */}
    </Dropzone>
  );
}
```

`MIME_TYPES` includes following data:

Additionally you can use grouped mime types:

```tsx
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';

function Demo() {
  return (
    <Dropzone accept={IMAGE_MIME_TYPE} onDrop={() => {}}>
      {/* children */}
    </Dropzone>
  );
}
```

## Styles API

`Dropzone` root element has the following data attributes to change styles based on current status:

- `data-loading` – when `loading` prop is `true`
- `data-accept` – when user drags files that can be accepted over the dropzone
- `data-reject` – when user drags files that cannot be accepted over the dropzone
- `data-idle` – default state – user does not drag any files over dropzone

#### Example: stylesApi

```tsx
// Demo.tsx
import { Text } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Dropzone onDrop={() => {}} accept={IMAGE_MIME_TYPE} className={classes.root}>
      <Text ta="center">Drop images here</Text>
    </Dropzone>
  );
}

// Demo.module.css
.root {
  min-height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6));

  &[data-accept] {
    color: var(--mantine-color-white);
    background-color: var(--mantine-color-blue-6);
  }

  &[data-reject] {
    color: var(--mantine-color-white);
    background-color: var(--mantine-color-red-6);
  }
}
```

## Images previews

#### Example: preview

```tsx
import { useState } from 'react';
import { Text, Image, SimpleGrid } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE, FileWithPath } from '@mantine/dropzone';

function Demo() {
  const [files, setFiles] = useState<FileWithPath[]>([]);

  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    return <Image key={index} src={imageUrl} onLoad={() => URL.revokeObjectURL(imageUrl)} />;
  });

  return (
    <div>
      <Dropzone accept={IMAGE_MIME_TYPE} onDrop={setFiles}>
        <Text ta="center">Drop images here</Text>
      </Dropzone>

      <SimpleGrid cols={{ base: 1, sm: 4 }} mt={previews.length > 0 ? 'xl' : 0}>
        {previews}
      </SimpleGrid>
    </div>
  );
}
```

## Get ref

```tsx
import { useEffect, useRef } from 'react';
import { Dropzone } from '@mantine/dropzone';

function Demo() {
  const dropzoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dropzoneRef.current?.focus();
  }, []);

  return (
    <Dropzone ref={dropzoneRef} onDrop={() => {}}>
      {/* children */}
    </Dropzone>
  );
}
```
