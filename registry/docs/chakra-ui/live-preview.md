### Live Preview

Use the editor's `getHTML()` method to retrieve content and display it in a
read-only panel.

```tsx
"use client"

import { Splitter } from "@chakra-ui/react"
import Subscript from "@tiptap/extension-subscript"
import Superscript from "@tiptap/extension-superscript"
import TextAlign from "@tiptap/extension-text-align"
import { useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { Prose } from "@/components/ui/prose"
import { Control, RichTextEditor } from "@/components/ui/rich-text-editor"

export const RichTextEditorWithPreview = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({ link: { openOnClick: false } }),
      Subscript,
      Superscript,
      TextAlign.configure({ types: ["paragraph", "heading"] }),
    ],
    content: `
        Edit here...
        Tip: Try selecting this sentence.
        Example Subheading
        Here's a paragraph with italic, underline, and bold text.
        Code snippets can be inline or block-level.
        
        Item one
        Item two
        Item three
        
        
        First numbered item
        Second numbered item
        
        This is a blockquote example.
    `,
    shouldRerenderOnTransaction: true,
    immediatelyRender: false,
  })

  if (!editor) return null

  return (
    <Splitter.Root panels={[{ id: "editor" }, { id: "preview" }]} minH="60">
      <Splitter.Panel id="editor">
        <RichTextEditor.Root
          editor={editor}
          css={{ "--content-min-height": "520px" }}
        >
          <RichTextEditor.Toolbar>
            <RichTextEditor.ControlGroup>
              
              
              
              
              
            </RichTextEditor.ControlGroup>
            <RichTextEditor.ControlGroup>
              
              
              
              
            </RichTextEditor.ControlGroup>
            <RichTextEditor.ControlGroup>
              
              
            </RichTextEditor.ControlGroup>
          </RichTextEditor.Toolbar>

          
        </RichTextEditor.Root>
      </Splitter.Panel>

      
      <Splitter.Panel id="preview" px="8" py="2">
        <Prose
          width="full"
          size="lg"
          color="fg"
          dangerouslySetInnerHTML={{ __html: editor.getHTML() }}
        />
      </Splitter.Panel>
    </Splitter.Root>
  )
}

```

### Text Highlight

To add text highlighting, use the
[@tiptap/extension-highlight](https://www.npmjs.com/package/@tiptap/extension-highlight)
extension and configure the `multicolor` property. This allows users to pick or
cycle through highlight colors via the `<Control.Highlight />` component.

```tsx
"use client"

import Highlight from "@tiptap/extension-highlight"
import { useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { Control, RichTextEditor } from "@/components/ui/rich-text-editor"

export const RichTextEditorWithHighlight = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight.configure({
        multicolor: true,
      }),
    ],
    content: `
      This is a basic example of implementing text highlighting using the Tiptap editor.
      Select some text and click the highlight button to apply a highlight color.
    `,
    shouldRerenderOnTransaction: true,
    immediatelyRender: false,
  })

  if (!editor) return null

  return (
    <RichTextEditor.Root editor={editor} borderWidth="1px" rounded="l2">
      <RichTextEditor.Toolbar>
        <RichTextEditor.ControlGroup>
          
          
          
          
        </RichTextEditor.ControlGroup>

        <RichTextEditor.ControlGroup>
          
        </RichTextEditor.ControlGroup>

        <RichTextEditor.ControlGroup>
          
          
        </RichTextEditor.ControlGroup>
      </RichTextEditor.Toolbar>

      
    </RichTextEditor.Root>
  )
}

```

### Bubble Menu

Use the `BubbleMenu` component from Tiptap with any existing controls. The menu
will appear above any text selection, providing contextual formatting options.

```tsx
"use client"

import { useEditor } from "@tiptap/react"
import { BubbleMenu } from "@tiptap/react/menus"
import StarterKit from "@tiptap/starter-kit"
import { Control, RichTextEditor } from "@/components/ui/rich-text-editor"

export const RichTextEditorWithBubbleMenu = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: sampleContent,
    shouldRerenderOnTransaction: true,
    immediatelyRender: false,
  })

  if (!editor) return null

  return (
    <RichTextEditor.Root editor={editor} borderWidth="1px" rounded="lg">
      {editor && (
        
          <RichTextEditor.Toolbar variant="floating">
            <RichTextEditor.ControlGroup>
              
              
              
              
            </RichTextEditor.ControlGroup>

            <RichTextEditor.ControlGroup>
              
              
            </RichTextEditor.ControlGroup>

            <RichTextEditor.ControlGroup>
              
              
            </RichTextEditor.ControlGroup>
          </RichTextEditor.Toolbar>
        
      )}
      
    </RichTextEditor.Root>
  )
}

const sampleContent = `
  Select some text in this paragraph to see the bubble menu!
  The Bold, Italic, Underline, and Strikethrough controls will appear. You can also change the block type here.
  
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  
  
    Try selecting text within this list item.
    Use the list buttons to switch between bullet and ordered lists.
  
`

```
