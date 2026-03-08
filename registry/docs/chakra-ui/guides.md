## Guides

### Adding controls

`RichTextEditor` ships with a set of built-in controls that can be composed
inside `RichTextEditor.ControlGroup`.

```jsx
import { Control } from "@/components/ui/rich-text-editor"
```

```jsx
<RichTextEditor.ControlGroup>
  <Control.Bold />
  <Control.Italic />
  <Control.Strike />
</RichTextEditor.ControlGroup>
```

### Customizing Content Padding

The editor uses CSS custom properties for content padding:

```tsx
<RichTextEditor.Root
  editor={editor}
  css={{
    "--content-padding-x": "spacing.8",
    "--content-padding-y": "spacing.6",
    "--content-min-height": "sizes.96",
  }}
>
  <RichTextEditor.Content />
</RichTextEditor.Root>
```

### Custom Controls

The `RichTextEditor` provides three factory functions for creating custom
controls that integrate seamlessly with the editor: `createBooleanControl`,
`createSelectControl`, and `createSwatchControl`.

**Boolean Controls**

Boolean controls toggle editor states (bold, italic, etc.) and are the most
common control type:

```tsx
import { createBooleanControl } from "@/components/ui/rich-text-editor"
import { LuSparkles } from "react-icons/lu"

export const CustomHighlight = createBooleanControl({
  label: "Highlight Important",
  icon: LuSparkles,
  command: (editor) => {
    editor
      .chain()
      .focus()
      .toggleMark("textStyle", {
        backgroundColor: "#fef08a",
        fontWeight: "bold"
      })
      .run()
  },
  getVariant: (editor) => {
    const attrs = editor.getAttributes("textStyle")
    return attrs.backgroundColor === "#fef08a" ? "subtle" : "ghost"
  },
  isDisabled: (editor) => !editor.can().toggleMark("textStyle")
})

// Use it in your toolbar
<RichTextEditor.ControlGroup>
  <CustomHighlight />
</RichTextEditor.ControlGroup>
```

**Select Controls**

Select controls provide dropdown menus for choosing between multiple options:

```tsx
import { createSelectControl } from "@/components/ui/rich-text-editor"

export const LineHeight = createSelectControl({
  label: "Line Height",
  width: "100px",
  placeholder: "Normal",
  options: [
    { value: "normal", label: "Normal" },
    { value: "1.5", label: "1.5" },
    { value: "2", label: "Double" },
    { value: "2.5", label: "2.5" },
  ],
  getValue: (editor) => {
    return editor.getAttributes("textStyle")?.lineHeight || "normal"
  },
  command: (editor, value) => {
    if (value === "normal") {
      editor.chain().focus().unsetMark("textStyle").run()
    } else {
      editor.chain().focus().setMark("textStyle", { lineHeight: value }).run()
    }
  },
  renderValue: (value, option) => {
    return <Box fontWeight="medium">{option?.label || "Normal"}</Box>
  },
})
```

**Swatch Controls**

Swatch controls provide color picker interfaces with predefined color swatches:

```tsx
import { createSwatchControl } from "@/components/ui/rich-text-editor"
import { LuPaintbrush } from "react-icons/lu"

export const BackgroundColor = createSwatchControl({
  label: "Background Color",
  icon: LuPaintbrush,
  swatches: [
    { value: "#fef3c7", color: "#fef3c7", label: "Yellow" },
    { value: "#dbeafe", color: "#dbeafe", label: "Blue" },
    { value: "#dcfce7", color: "#dcfce7", label: "Green" },
    { value: "#fce7f3", color: "#fce7f3", label: "Pink" },
  ],
  getValue: (editor) => {
    return editor.getAttributes("textStyle")?.backgroundColor || ""
  },
  command: (editor, color) => {
    editor
      .chain()
      .focus()
      .setMark("textStyle", { backgroundColor: color })
      .run()
  },
  getProps: (editor) => ({
    variant: editor.getAttributes("textStyle")?.backgroundColor
      ? "subtle"
      : "ghost",
  }),
  showRemove: true,
  onRemove: (editor) => {
    editor
      .chain()
      .focus()
      .updateAttributes("textStyle", { backgroundColor: null })
      .run()
  },
})
```
