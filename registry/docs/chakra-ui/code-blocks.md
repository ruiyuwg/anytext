### Code Blocks

Add syntax-highlighted code blocks using
[@tiptap/extension-code-block-lowlight](https://www.npmjs.com/package/@tiptap/extension-code-block-lowlight)
and `lowlight` to highlight your favorite languages.

```tsx
"use client"

import { HStack } from "@chakra-ui/react"
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight"
import { useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { Control, RichTextEditor } from "@/components/ui/rich-text-editor"
import css from "highlight.js/lib/languages/css"
import js from "highlight.js/lib/languages/javascript"
import ts from "highlight.js/lib/languages/typescript"
import html from "highlight.js/lib/languages/xml"
import { all, createLowlight } from "lowlight"

const lowlight = createLowlight(all)
lowlight.register("html", html)
lowlight.register("css", css)
lowlight.register("js", js)
lowlight.register("ts", ts)

export const RichTextEditorWithCode = () => {
  const editor = useEditor({
    extensions: [StarterKit, CodeBlockLowlight.configure({ lowlight })],
    content: `That’s a boring paragraph followed by a fenced code block:
${code}
Press Command/Ctrl + Enter to leave the fenced code block and continue typing in boring paragraphs.`,
    shouldRerenderOnTransaction: true,
    immediatelyRender: false,
  })

  if (!editor) return null

  return (
    <RichTextEditor.Root
      editor={editor}
      border="1px solid"
      borderColor="border"
      rounded="md"
    >
      
        <RichTextEditor.ControlGroup>
          
          
          
        </RichTextEditor.ControlGroup>
      
      
    </RichTextEditor.Root>
  )
}

// Escape HTML so it can be safely injected
function escapeHtml(unsafe: string) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

const code = escapeHtml(`
async function fetchTodos() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
  const data = await response.json()
  return data
}

async function showTodos() {
  const todos = await fetchTodos()
  todos.forEach(todo => console.log(\`\${todo.id}: \${todo.title} [\${todo.completed ? '✅' : '❌'}]\`))
}

showTodos()
`)

```
