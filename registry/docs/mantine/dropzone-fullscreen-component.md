## Dropzone.FullScreen component

`Dropzone.FullScreen` lets you capture files dropped to browser window instead of specific area.
It supports the same props as `Dropzone` component.

To preview component click button and drop images to browser window:

#### Example: fullScreen

```tsx
import { useState } from 'react';
import { Group, Text, Button } from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';

function Demo() {
  const [active, setActive] = useState(false);

  return (
    <>
      <Group justify="center">
        <Button color={active ? 'red' : 'blue'} onClick={() => setActive((d) => !d)}>
          {active ? 'Deactivate' : 'Activate'} full screen dropzone
        </Button>
      </Group>

      <Dropzone.FullScreen
        active={active}
        accept={IMAGE_MIME_TYPE}
        onDrop={(files) => {
          console.log(files);
          setActive(false);
        }}
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
      </Dropzone.FullScreen>
    </>
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accept | string\[] | Accept | - | Mime types of the files that dropzone can accepts. By default, dropzone accepts all file types. |
| acceptColor | MantineColor | - | Key of theme.colors or any valid CSS color to set colors of Dropzone.Accept |
| activateOnClick | boolean | - | If false, disables click to open the native file selection dialog |
| activateOnDrag | boolean | - | If false, disables drag 'n' drop |
| activateOnKeyboard | boolean | - | If false, disables Space/Enter to open the native file selection dialog. Note that it also stops tracking the focus state. |
| autoFocus | boolean | - | Set to autofocus the root element |
| disabled | boolean | - | Determines whether files capturing should be disabled |
| dragEventsBubbling | boolean | - | If false, stops drag event propagation to parents |
| enablePointerEvents | boolean | - | Determines whether pointer events should be enabled on the inner element |
| getFilesFromEvent | (event: DropEvent) => Promise<(File | DataTransferItem)\[]> | - | Use this to provide a custom file aggregator |
| inputProps | InputHTMLAttributes | - | Props passed down to the internal Input component |
| loaderProps | LoaderProps | - | Props passed down to the Loader component |
| loading | boolean | - | Determines whether a loading overlay should be displayed over the dropzone |
| maxFiles | number | - | Maximum number of files that can be picked at once |
| maxSize | number | - | Maximum file size in bytes |
| multiple | boolean | - | Determines whether multiple files can be dropped to the dropzone or selected from file system picker |
| name | string | - | Name of the form control. Submitted with the form as part of a name/value pair. |
| onDragEnter | (event: DragEvent) => void | - | Called when the dragenter event occurs |
| onDragLeave | (event: DragEvent) => void | - | Called when the dragleave event occurs |
| onDragOver | (event: DragEvent) => void | - | Called when the dragover event occurs |
| onDrop | (files: FileWithPath\[]) => void | required | Called when valid files are dropped to the dropzone |
| onDropAny | (files: FileWithPath\[], fileRejections: FileRejection\[]) => void | - | Called when any files are dropped to the dropzone |
| onFileDialogCancel | () => void | - | Called when user closes the file selection dialog with no selection |
| onFileDialogOpen | () => void | - | Called when user opens the file selection dialog |
| onReject | (fileRejections: FileRejection\[]) => void | - | Called when dropped files do not meet file restrictions |
| openRef | ForwardedRef<() => void> | undefined | - | A ref function which when called opens the file system file picker |
| preventDropOnDocument | boolean | - | If false, allow dropped items to take over the current browser window |
| radius | MantineRadius | number | - | Key of theme.radius or any valid CSS value to set border-radius, numbers are converted to rem |
| rejectColor | MantineColor | - | Key of theme.colors or any valid CSS color to set colors of Dropzone.Reject |
| useFsAccessApi | boolean | - | Set to true to use the File System Access API to open the file picker instead of using an input type="file" click event |
| validator | (file: T) => FileError | FileError\[] | null | - | Custom validation function. It must return null if there's no errors. |

#### Styles API

Dropzone component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Dropzone selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Dropzone-root | Dropzone root element |
| inner | .mantine-Dropzone-inner | Dropzone inner element (wraps children) |

**Dropzone CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --dropzone-accept-bg | Controls `background-color` when file is accepted |
| root | --dropzone-reject-bg | Controls `background-color` when file is rejected |
| root | --dropzone-accept-color | Controls `color` when file is accepted |
| root | --dropzone-reject-color | Controls `color` when file is rejected |
| root | --dropzone-radius | Controls `border-radius` |

**Dropzone data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-accept | Files that are dragged over the dropzone are accepted | - |
| root | data-reject | Files that are dragged over the dropzone are rejected | - |
| root | data-idle | Dropzone is idle | - |
| root | data-loading | - | - |
| root | data-disabled | - | - |
| root | data-activate-on-click | - | - |

**Dropzonefullscreen selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Dropzonefullscreen-root | Dropzone root element |
| inner | .mantine-Dropzonefullscreen-inner | Dropzone inner element (wraps children) |
| fullScreen | .mantine-Dropzonefullscreen-fullScreen | Dropzone.Fullscreen root element |

### ExtensionsPackage

Package: @mantine/x
Import: import { ExtensionsPackage } from '@mantine/x';

# Mantine extensions

Extensions are packages that provide additional functionality like
new components, hooks, or other features. They are built on top of
`@mantine/hooks` and `@mantine/core` packages.

## Official extensions

Official extensions are built by the maintainers of Mantine, these extensions have `@mantine/` scope
in their package names, for example `@mantine/dates` or `@mantine/carousel`.

Official extensions list:

- [@mantine/dates](https://mantine.dev/dates/getting-started) – date and time pickers, calendars, other date-related components
- [@mantine/charts](https://mantine.dev/charts/getting-started) – charts and data visualization components based on recharts
- [@mantine/notifications](https://mantine.dev/x/notifications) – notifications system
- [@mantine/code-highlight](https://mantine.dev/x/code-highlight) – code highlight component used on Mantine websites
- [@mantine/spotlight](https://mantine.dev/x/spotlight) – control center (`Ctrl + K` search bar), can be used for search
- [@mantine/carousel](https://mantine.dev/x/carousel) – carousel component based on embla-carousel
- [@mantine/dropzone](https://mantine.dev/x/dropzone) – captures files with drag and drop, based on react-dropzone
- [@mantine/modals](https://mantine.dev/x/modals) – modals manager
- [@mantine/tiptap](https://mantine.dev/x/tiptap) – rich text editor based on tiptap
- [@mantine/nprogress](https://mantine.dev/x/nprogress) – navigation progress component
