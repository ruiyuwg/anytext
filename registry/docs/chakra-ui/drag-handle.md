### Drag Handle

To add drag-and-drop reordering, use the
[@tiptap/extension-drag-handle-react](https://www.npmjs.com/package/@tiptap/extension-drag-handle-react).
This extension enables draggable handles for each block, letting users easily
reorder content.

```tsx
"use client"

import { Box, Icon, useChakraContext } from "@chakra-ui/react"
import { DragHandle } from "@tiptap/extension-drag-handle-react"
import { useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { Control, RichTextEditor } from "@/components/ui/rich-text-editor"
import { LuGripVertical } from "react-icons/lu"

export const RichTextEditorWithDragHandle = () => {
  const { token } = useChakraContext()

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        dropcursor: { width: 2, color: token("colors.teal.solid") },
      }),
    ],
    content: `
      Hover over any paragraph to see the drag handle appear on the left.
      This is another paragraph. You can drag blocks to reorder them.
      Try adding more content and rearranging it!
      
        List items can also be dragged
        Each block has its own handle
      
      Blockquotes work too!
    `,
    shouldRerenderOnTransaction: true,
    immediatelyRender: false,
  })

  if (!editor) return null

  return (
    <RichTextEditor.Root editor={editor}>
      <RichTextEditor.Toolbar>
        <RichTextEditor.ControlGroup>
          
          
          
        </RichTextEditor.ControlGroup>

        <RichTextEditor.ControlGroup>
          
          
          
        </RichTextEditor.ControlGroup>

        <RichTextEditor.ControlGroup>
          
          
        </RichTextEditor.ControlGroup>
      </RichTextEditor.Toolbar>

      
        
          <Box
            pos="relative"
            top="-0.5"
            insetStart="-1"
            cursor="grab"
            color="fg.muted"
            opacity="0.6"
            _hover={{ opacity: 1, color: "fg" }}
            _active={{ cursor: "grabbing" }}
          >
            
              
            
          
        
        
      
    </RichTextEditor.Root>
  )
}

```
