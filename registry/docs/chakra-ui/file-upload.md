# File Upload

```tsx
import { Button, FileUpload } from "@chakra-ui/react"
import { HiUpload } from "react-icons/hi"

export const FileUploadBasic = () => {
  return (
    <FileUpload.Root>
      
      <FileUpload.Trigger asChild>
        
           Upload file
        
      </FileUpload.Trigger>
      
    </FileUpload.Root>
  )
}

```

## Usage

```jsx
import { FileUpload } from "@chakra-ui/react"
```

```jsx
<FileUpload.Root>
  
  
  <FileUpload.Dropzone>
    
  </FileUpload.Dropzone>
  
  <FileUpload.ItemGroup>
    <FileUpload.Item>
      
      
      
      
    </FileUpload.Item>
  </FileUpload.ItemGroup>
</FileUpload.Root>
```

## Shortcuts

The `FileUpload` component also provides a set of shortcuts for common use
cases.

### FileUploadItems

By default, the `FileUploadItems` shortcut renders the list of uploaded files.

This works:

```tsx
<FileUpload.ItemGroup>
  <FileUpload.Context>
    {({ acceptedFiles }) =>
      acceptedFiles.map((file) => (
        <FileUpload.Item key={file.name} file={file}>
          
          
          
          
        </FileUpload.Item>
      ))
    }
  </FileUpload.Context>
</FileUpload.ItemGroup>
```

This might be more concise, if you don't need to customize the file upload
items:

```tsx
<FileUpload.ItemGroup>
  
</FileUpload.ItemGroup>
```

### FileUploadList

The `FileUploadList` shortcut renders the list of uploaded files. It composes
the `FileUpload.ItemGroup` and `FileUpload.Items` components.

```tsx
```

is the same as:

```tsx
<FileUpload.ItemGroup>
  
</FileUpload.ItemGroup>
```

## Examples

### Accepted Files

Define the accepted files for upload using the `accept` prop.

```tsx
import { Button, FileUpload } from "@chakra-ui/react"
import { HiUpload } from "react-icons/hi"

export const FileUploadAcceptedFiles = () => {
  return (
    <FileUpload.Root accept={["image/png"]}>
      
      <FileUpload.Trigger asChild>
        
           Upload file
        
      </FileUpload.Trigger>
      
    </FileUpload.Root>
  )
}

```

### Multiple Files

Upload multiple files at once by using the `maxFiles` prop.

```tsx
import { Button, FileUpload } from "@chakra-ui/react"
import { HiUpload } from "react-icons/hi"

export const FileUploadMultiple = () => {
  return (
    <FileUpload.Root maxFiles={5}>
      
      <FileUpload.Trigger asChild>
        
           Upload file
        
      </FileUpload.Trigger>
      
    </FileUpload.Root>
  )
}

```

### Custom Preview

Here's an example of how to show a custom image preview for files.

```tsx
"use client"

import {
  Button,
  FileUpload,
  Float,
  useFileUploadContext,
} from "@chakra-ui/react"
import { LuFileImage, LuX } from "react-icons/lu"

const FileUploadList = () => {
  const fileUpload = useFileUploadContext()
  const files = fileUpload.acceptedFiles
  if (files.length === 0) return null
  return (
    <FileUpload.ItemGroup>
      {files.map((file) => (
        <FileUpload.Item
          w="auto"
          boxSize="20"
          p="2"
          file={file}
          key={file.name}
        >
          
          
            <FileUpload.ItemDeleteTrigger boxSize="4" layerStyle="fill.solid">
              
            </FileUpload.ItemDeleteTrigger>
          
        </FileUpload.Item>
      ))}
    </FileUpload.ItemGroup>
  )
}

export const FileUploadCustomPreview = () => {
  return (
    <FileUpload.Root accept="image/*">
      
      <FileUpload.Trigger asChild>
        
           Upload Images
        
      </FileUpload.Trigger>
      
    </FileUpload.Root>
  )
}

```

### Directory

Use the `directory` prop to allow selecting a directory instead of a file.

```tsx
import { Button, FileUpload } from "@chakra-ui/react"
import { HiUpload } from "react-icons/hi"

export const FileUploadDirectory = () => {
  return (
    <FileUpload.Root directory>
      
      <FileUpload.Trigger asChild>
        
           Upload file
        
      </FileUpload.Trigger>
      
    </FileUpload.Root>
  )
}

```

### Media Capture

Use the `capture` prop to select and upload files from different environments
and media types.

> **Note:** This is
> [not fully supported](https://caniuse.com/mdn-api_htmlinputelement_capture) in
> all browsers.

```tsx
import { Button, FileUpload } from "@chakra-ui/react"
import { HiCamera } from "react-icons/hi"

export const FileUploadMediaCapture = () => {
  return (
    <FileUpload.Root capture="environment">
      
      <FileUpload.Trigger asChild>
        
           Open Camera
        
      </FileUpload.Trigger>
      
    </FileUpload.Root>
  )
}

```

### Dropzone

Drop multiple files inside the dropzone and use the `maxFiles` prop to set the
number of files that can be uploaded at once.

```tsx
import { Box, FileUpload, Icon } from "@chakra-ui/react"
import { LuUpload } from "react-icons/lu"

export const FileUploadWithDropzone = () => {
  return (
    <FileUpload.Root maxW="xl" alignItems="stretch" maxFiles={10}>
      
      <FileUpload.Dropzone>
        
          
        
        <FileUpload.DropzoneContent>
          Drag and drop files here
          .png, .jpg up to 5MB
        </FileUpload.DropzoneContent>
      </FileUpload.Dropzone>
      
    </FileUpload.Root>
  )
}

```

### Conditional Dropzone

Hide the dropzone when the maximum number of files has been reached by using
`useFileUploadContext` to access the accepted files count.

```tsx
"use client"

import { Box, FileUpload, Icon, useFileUploadContext } from "@chakra-ui/react"
import { LuUpload } from "react-icons/lu"

const MAX_FILES = 3

const ConditionalDropzone = () => {
  const fileUpload = useFileUploadContext()
  const acceptedFiles = fileUpload.acceptedFiles

  if (acceptedFiles.length >= MAX_FILES) {
    return null
  }

  return (
    <FileUpload.Dropzone>
      
        
      
      <FileUpload.DropzoneContent>
        Drag and drop files here
        
          {MAX_FILES - acceptedFiles.length} more file
          {MAX_FILES - acceptedFiles.length !== 1 ? "s" : ""} allowed
        
      </FileUpload.DropzoneContent>
    </FileUpload.Dropzone>
  )
}

export const FileUploadWithConditionalDropzone = () => {
  return (
    <FileUpload.Root maxW="xl" alignItems="stretch" maxFiles={MAX_FILES}>
      
      
      
    </FileUpload.Root>
  )
}

```

### Input

Use the `FileInput` component to create a trigger that looks like a text input.

```tsx
import { FileUpload, Input } from "@chakra-ui/react"

export const FileUploadWithInput = () => {
  return (
    <FileUpload.Root gap="1" maxWidth="300px">
      
      <FileUpload.Label>Upload file</FileUpload.Label>
      
        <FileUpload.Trigger>
          
        </FileUpload.Trigger>
      
    </FileUpload.Root>
  )
}

```

### Clearable

Here's an example of a clearable file upload input.

```tsx
import { CloseButton, FileUpload, Input, InputGroup } from "@chakra-ui/react"
import { LuFileUp } from "react-icons/lu"

export const FileUploadWithInputClear = () => {
  return (
    <FileUpload.Root gap="1" maxWidth="300px">
      
      <FileUpload.Label>Upload file</FileUpload.Label>
      <InputGroup
        startElement={}
        endElement={
          <FileUpload.ClearTrigger asChild>
            <CloseButton
              me="-1"
              size="xs"
              variant="plain"
              focusVisibleRing="inside"
              focusRingWidth="2px"
              pointerEvents="auto"
            />
          </FileUpload.ClearTrigger>
        }
      >
        
          <FileUpload.Trigger>
            
          </FileUpload.Trigger>
        
      
    </FileUpload.Root>
  )
}

```

### Pasting Files

Here's an example of handling files pasted from the clipboard.

```tsx
"use client"

import {
  FileUpload,
  Float,
  Input,
  type InputProps,
  useFileUploadContext,
} from "@chakra-ui/react"
import { HiX } from "react-icons/hi"

const FilePasteInput = (props: InputProps) => {
  const fileUpload = useFileUploadContext()
  return (
    <Input
      {...props}
      onPaste={(e) => {
        fileUpload.setClipboardFiles(e.clipboardData)
      }}
    />
  )
}

const FileImageList = () => {
  const fileUpload = useFileUploadContext()
  return (
    <FileUpload.ItemGroup display="flex" flexWrap="wrap" gap="3">
      {fileUpload.acceptedFiles.map((file) => (
        <FileUpload.Item
          p="2"
          width="auto"
          key={file.name}
          file={file}
          pos="relative"
        >
          
            <FileUpload.ItemDeleteTrigger
              p="0.5"
              rounded="l1"
              bg="bg"
              borderWidth="1px"
            >
              
            </FileUpload.ItemDeleteTrigger>
          
          <FileUpload.ItemPreviewImage
            boxSize="12"
            rounded="l1"
            objectFit="cover"
          />
        </FileUpload.Item>
      ))}
    </FileUpload.ItemGroup>
  )
}

export const FileUploadWithPasteEvent = () => {
  return (
    <FileUpload.Root maxFiles={3} accept="image/*">
      
      
      
    </FileUpload.Root>
  )
}

```

### Store

An alternative way to control the file upload is to use the `RootProvider`
component and the `useFileUpload` store hook.

This way you can access the file upload state and methods from outside the file
upload.

```tsx
"use client"

import {
  Button,
  Code,
  FileUpload,
  Stack,
  useFileUpload,
} from "@chakra-ui/react"
import { HiUpload } from "react-icons/hi"

export const FileUploadWithStore = () => {
  const fileUpload = useFileUpload({
    maxFiles: 1,
    maxFileSize: 3000,
  })

  const accepted = fileUpload.acceptedFiles.map((file) => file.name)
  const rejected = fileUpload.rejectedFiles.map((e) => e.file.name)

  return (
    
      accepted: {accepted.join(", ")}
      rejected: {rejected.join(", ")}
      <FileUpload.RootProvider value={fileUpload}>
        
        <FileUpload.Trigger asChild>
          
             Upload file
          
        </FileUpload.Trigger>
        
      </FileUpload.RootProvider>
    
  )
}

```

## Props

### Root

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| allowDrop | true | `boolean` | Whether to allow drag and drop in the dropzone element |
| locale | "en-US" | `string` | The current locale. Based on the BCP 47 definition. |
| maxFiles | 1 | `number` | The maximum number of files |
| maxFileSize | Infinity | `number` | The maximum file size in bytes |
| minFileSize | 0 | `number` | The minimum file size in bytes |
| preventDocumentDrop | true | `boolean` | Whether to prevent the drop event on the document |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| unstyled | undefined | `boolean` | Whether to remove the component's style. |
| accept | undefined | `Record<string, string[]> \| FileMimeType \| FileMimeType[]` | The accept file types |
| acceptedFiles | undefined | `File[]` | The controlled accepted files |
| capture | undefined | `'user' \| 'environment'` | The default camera to use when capturing media |
| defaultAcceptedFiles | undefined | `File[]` | The default accepted files when rendered.
Use when you don't need to control the accepted files of the input. |
| directory | undefined | `boolean` | Whether to accept directories, only works in webkit browsers |
| disabled | undefined | `boolean` | Whether the file input is disabled |
| ids | undefined | `Partial<{\n  root: string\n  dropzone: string\n  hiddenInput: string\n  trigger: string\n  label: string\n  item: (id: string) => string\n  itemName: (id: string) => string\n  itemSizeText: (id: string) => string\n  itemPreview: (id: string) => string\n}>` | The ids of the elements. Useful for composition. |
| invalid | undefined | `boolean` | Whether the file input is invalid |
| name | undefined | `string` | The name of the underlying file input |
| onFileAccept | undefined | `(details: FileAcceptDetails) => void` | Function called when the file is accepted |
| onFileChange | undefined | `(details: FileChangeDetails) => void` | Function called when the value changes, whether accepted or rejected |
| onFileReject | undefined | `(details: FileRejectDetails) => void` | Function called when the file is rejected |
| required | undefined | `boolean` | Whether the file input is required |
| transformFiles | undefined | `(files: File[]) => Promise<File[]>` | Function to transform the accepted files to apply transformations |
| translations | undefined | `IntlTranslations` | The localized messages to use. |
| validate | undefined | `(file: File, details: FileValidateDetails) => FileError[] \| null` | Function to validate a file |

## Explorer

Explore the `File Upload` component parts interactively. Click on parts in the
sidebar to highlight them in the preview.

<Explorer name="file-upload-explorer-demo" />
