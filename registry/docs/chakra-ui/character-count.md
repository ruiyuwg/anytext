### Character Count

To display live character and word counts, use the
[@tiptap/extensions/character-count](https://www.npmjs.com/package/@tiptap/extensions/character-count)
extension. This is especially useful for editors with limits or word-count
requirements.

```tsx
const editor = useEditor({
  extensions: [
    // ... other extensions
    CharacterCount.configure({
      limit: 1000,
      mode: "textSize",
    }),
  ],
})
```

```tsx
"use client"

import { Box } from "@chakra-ui/react"
import Image from "@tiptap/extension-image"
import { CharacterCount } from "@tiptap/extensions/character-count"
import { useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { Control, RichTextEditor } from "@/components/ui/rich-text-editor"

export const RichTextEditorWithCharacterCount = () => {
  const editor = useEditor({
    content: `
      Dr. Stone
      Dr. Stone is a Japanese manga and anime series that follows the story of Senku Ishigami, a scientific genius who awakens thousands of years after humanity has been petrified.
      The world is in ruins, and Senku aims to rebuild civilization using the power of science.
    `,
    extensions: [
      StarterKit,
      Image,
      CharacterCount.configure({
        limit: 1000,
        mode: "textSize",
      }),
    ],
    shouldRerenderOnTransaction: true,
    immediatelyRender: false,
  })

  if (!editor) return null

  const charCount = editor.storage.characterCount.characters()
  const wordCount = editor.storage.characterCount.words()

  return (
    <RichTextEditor.Root editor={editor}>
      <RichTextEditor.Toolbar>
        <RichTextEditor.ControlGroup>
          
          
          
        </RichTextEditor.ControlGroup>

        <RichTextEditor.ControlGroup>
          
          
        </RichTextEditor.ControlGroup>
      </RichTextEditor.Toolbar>

      

      <RichTextEditor.Footer justify="flex-end" textStyle="xs">
        Characters: {charCount}
        Words: {wordCount}
      </RichTextEditor.Footer>
    </RichTextEditor.Root>
  )
}

```
