# Download Trigger

```tsx
import { Button, DownloadTrigger } from "@chakra-ui/react"

const data = "The quick brown fox jumps over the lazy dog"

export const DownloadTriggerBasic = () => {
  return (
    <DownloadTrigger
      data={data}
      fileName="sample.txt"
      mimeType="text/plain"
      asChild
    >
      Download txt
    
  )
}

```

## Usage

```jsx
import { DownloadTrigger } from "@chakra-ui/react"
```

```jsx
```

## Examples

### Basic

Pass the data you want to download to the `data` prop, and specify the
`fileName` and `mimeType` of the file.

```tsx
import { Button, DownloadTrigger } from "@chakra-ui/react"

const data = "The quick brown fox jumps over the lazy dog"

export const DownloadTriggerBasic = () => {
  return (
    <DownloadTrigger
      data={data}
      fileName="sample.txt"
      mimeType="text/plain"
      asChild
    >
      Download txt
    
  )
}

```

### Download SVG

Here's an example of how to download an SVG file.

```tsx
import { Button, DownloadTrigger } from "@chakra-ui/react"

const data = String.raw`

  

`

export const DownloadTriggerSvg = () => {
  return (
    <DownloadTrigger
      data={data}
      fileName="sample.svg"
      mimeType="image/svg+xml"
      asChild
    >
      Download svg
    
  )
}

```

### Promise

You can also trigger downloads from a promise that returns a `Blob`, `File`, or
`string`.

```tsx
"use client"

import { Button, DownloadTrigger } from "@chakra-ui/react"
import { LuImageDown } from "react-icons/lu"

const data = async () => {
  const res = await fetch("https://picsum.photos/200/300")
  return res.blob()
}

export const DownloadTriggerWithPromise = () => {
  return (
    <DownloadTrigger
      data={data}
      fileName="sample.jpg"
      mimeType="image/jpeg"
      asChild
    >
      
         Download
      
    
  )
}

```

### File Size

Compose the `DownloadTrigger` with the `FormatByte` component to display the
size of the file in a human-readable format.

```tsx
import { Button, DownloadTrigger, FormatByte } from "@chakra-ui/react"
import { LuDownload } from "react-icons/lu"

const data = "The quick brown fox jumps over the lazy dog"

export const DownloadTriggerWithFileSize = () => {
  return (
    <DownloadTrigger
      data={data}
      fileName="sample.txt"
      mimeType="text/plain"
      asChild
    >
      
         Download (
        )
      
    
  )
}

```

## Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| spinnerPlacement | start | `'start' \| 'end' \| undefined` | The placement of the spinner |
| colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
| size | md | `'2xs' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'` | The size of the component |
| variant | solid | `'solid' \| 'subtle' \| 'surface' \| 'outline' \| 'ghost' \| 'plain'` | The variant of the component |
| loading | false | `boolean \| undefined` | If `true`, the button will show a loading spinner. |
| loadingText | undefined | `React.ReactNode \| undefined` | The text to show while loading. |
| spinner | undefined | `React.ReactNode \| undefined` | The spinner to show while loading. |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
