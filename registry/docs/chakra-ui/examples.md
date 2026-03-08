## Examples

### Toggle Edit Mode

In the `useEditor` hook, assign the `editable` property to control the editor's
mode. When set to `false`, the editor will be in view-only mode.

```tsx
"use client"

import { HStack } from "@chakra-ui/react"
import { useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import {
  Control,
  RichTextEditor,
  createSelectControl,
} from "@/components/ui/rich-text-editor"
import { useState } from "react"

export const RichTextEditorWithMode = () => {
  const [editable, setEditable] = useState(true)

  const editor = useEditor({
    extensions: [StarterKit],
    content: `<p>Edit this text...</p>`,
    editable,
    shouldRerenderOnTransaction: true,
    immediatelyRender: false,
  })

  if (!editor) return null

  const handleModeChange = (newMode: string) => {
    setEditable(newMode === "edit")
    editor.setEditable(newMode === "edit")
  }

  return (
    <RichTextEditor.Root editor={editor} borderWidth="1px" rounded="md">
      
        <RichTextEditor.ControlGroup
          inert={!editable}
          opacity={!editable ? 0.5 : 1}
        >
          
          
          
          
          
        </RichTextEditor.ControlGroup>
        <RichTextEditor.ControlGroup>
          <ModePicker
            width="120px"
            currentMode={editable ? "edit" : "view"}
            onModeChange={handleModeChange}
          />
        </RichTextEditor.ControlGroup>
      

      
    </RichTextEditor.Root>
  )
}

interface ModePickerProps {
  currentMode: string
  onModeChange: (mode: string) => void
  width?: string
}

const ModePicker = (props: ModePickerProps) => {
  const { currentMode, onModeChange, ...rest } = props

  const SelectControl = createSelectControl({
    label: "Mode",
    options: [
      { value: "edit", label: "Editing" },
      { value: "view", label: "Viewing" },
    ],
    getValue: () => currentMode,
    command: (_editor, value) => {
      onModeChange(value)
    },
  })

  return 
}

```

### Controlled

In the `useEditor` hook, set the `content` and `onUpdate` properties to control
the editor's content programmatically.

```tsx
const [content, setContent] = useState("Edit here...")

const editor = useEditor({
  content,
  onUpdate({ editor }) {
    setContent(editor.getHTML())
  },
})
```

```tsx
"use client"

import { Box, Stack } from "@chakra-ui/react"
import Subscript from "@tiptap/extension-subscript"
import Superscript from "@tiptap/extension-superscript"
import TextAlign from "@tiptap/extension-text-align"
import { useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { Control, RichTextEditor } from "@/components/ui/rich-text-editor"
import { useState } from "react"

export const RichTextEditorControlled = () => {
  const [content, setContent] = useState("Edit here...")

  const editor = useEditor({
    shouldRerenderOnTransaction: true,
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({ link: { openOnClick: false } }),
      Subscript,
      Superscript,
      TextAlign.configure({ types: ["paragraph", "heading"] }),
    ],
    content,
    onUpdate({ editor }) {
      setContent(editor.getHTML())
    },
  })

  if (!editor) return null

  return (
    
      <RichTextEditor.Root editor={editor} maxHeight="2xl">
        <RichTextEditor.Toolbar>
          <RichTextEditor.ControlGroup>
            
            
            
            
            
          </RichTextEditor.ControlGroup>
        </RichTextEditor.Toolbar>

        
      </RichTextEditor.Root>

      
        <Box
          as="pre"
          textStyle="sm"
          wordWrap="break-word"
          whiteSpace="pre-wrap"
        >
          {content}
        
      
    
  )
}

```

### Placeholder

To add a placeholder to the editor, use the
[@tiptap/extension-placeholder](https://www.npmjs.com/package/@tiptap/extension-placeholder)
extension and configure the `placeholder` property.

```tsx
const editor = useEditor({
  extensions: [
    // ... other extensions
    Placeholder.configure({
      placeholder: "Start typing your content here...",
    }),
  ],
})
```

```tsx
"use client"

import Placeholder from "@tiptap/extension-placeholder"
import { useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { Control, RichTextEditor } from "@/components/ui/rich-text-editor"

export const RichTextEditorWithPlaceholder = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Start typing your content here...",
      }),
    ],
    content: "",
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

### Autosave

Implement an autosave feature by using the editor's `onUpdate` method. This
allows you to handle content changes and save them to a server, local storage,
or any other persistence layer.

```tsx
"use client"

import { Badge, Box, HStack, Text } from "@chakra-ui/react"
import { useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { Control, RichTextEditor } from "@/components/ui/rich-text-editor"
import { useCallback, useEffect, useRef, useState } from "react"
import { LuCheck, LuCloud, LuLoader } from "react-icons/lu"

type SaveStatus = "idle" | "saving" | "saved" | "error"

export const RichTextEditorWithAutosave = () => {
  const [saveStatus, setSaveStatus] = useState("idle")
  const [lastSaved, setLastSaved] = useState(null)
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Simulate saving to server
  const saveContent = useCallback(async (content: string) => {
    setSaveStatus("saving")

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800))

    // Save to localStorage as demo
    localStorage.setItem("autosave-content", content)

    setSaveStatus("saved")
    setLastSaved(new Date())

    // Reset status after 2 seconds
    setTimeout(() => setSaveStatus("idle"), 2000)
  }, [])

  // Load saved content on mount
  const getSavedContent = () => {
    if (typeof window === "undefined") return null
    return localStorage.getItem("autosave-content")
  }

  const editor = useEditor({
    extensions: [StarterKit],
    content:
      getSavedContent() ||
      `Start typing... your content will be automatically saved.
       Try making some changes and watch the save indicator.`,
    shouldRerenderOnTransaction: true,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      // Debounce autosave
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current)
      }

      saveTimeoutRef.current = setTimeout(() => {
        saveContent(editor.getHTML())
      }, 1000) // Save after 1 second of inactivity
    },
  })

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current)
      }
    }
  }, [])

  if (!editor) return null

  const formatLastSaved = (date: Date) => {
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const seconds = Math.floor(diff / 1000)

    if (seconds < 60) return "just now"
    if (seconds < 120) return "1 minute ago"
    return `${Math.floor(seconds / 60)} minutes ago`
  }

  return (
    
      <RichTextEditor.Root editor={editor} borderWidth="1px" rounded="l2">
        <RichTextEditor.Toolbar>
          <RichTextEditor.ControlGroup>
            
            
            
          </RichTextEditor.ControlGroup>

          <RichTextEditor.ControlGroup>
            
            
          </RichTextEditor.ControlGroup>

          <RichTextEditor.ControlGroup>
            
            
          </RichTextEditor.ControlGroup>

          
            <Badge
              variant="subtle"
              colorPalette={
                saveStatus === "saving"
                  ? "yellow"
                  : saveStatus === "saved"
                    ? "green"
                    : "gray"
              }
            >
              
                {saveStatus === "saving" && (
                  
                )}
                {saveStatus === "saved" && }
                {saveStatus === "idle" && }
                
                  {saveStatus === "saving" && "Saving..."}
                  {saveStatus === "saved" && "Saved"}
                  {saveStatus === "idle" &&
                    (lastSaved
                      ? `Saved ${formatLastSaved(lastSaved)}`
                      : "Draft")}
                
              
            
          
        </RichTextEditor.Toolbar>

        
      </RichTextEditor.Root>
    
  )
}

```

### Task List

To add interactive task lists, use the
[@tiptap/extension-task-item](https://www.npmjs.com/package/@tiptap/extension-task-item)
and
[@tiptap/extension-task-list](https://www.npmjs.com/package/@tiptap/extension-task-list)
extensions and configure the `nested` property.

```tsx
"use client"

import { HStack } from "@chakra-ui/react"
import TaskItem from "@tiptap/extension-task-item"
import TaskList from "@tiptap/extension-task-list"
import { useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import {
  RichTextEditor,
  createBooleanControl,
} from "@/components/ui/rich-text-editor"
import { LuArrowLeft, LuArrowRight, LuListChecks, LuPlus } from "react-icons/lu"

export const RichTextEditorWithTask = () => {
  const editor = useEditor({
    extensions: [StarterKit, TaskList, TaskItem.configure({ nested: true })],
    content: `
      Project Tasks
      Use the toolbar to manage your tasks:
      
        Write introduction
        Set up editor
        Add toolbar controls
      
      Keep adding tasks to track your progress!
    `,
    shouldRerenderOnTransaction: true,
    immediatelyRender: false,
  })

  if (!editor) return null

  return (
    <RichTextEditor.Root editor={editor} borderWidth="1px" rounded="md">
      
        <RichTextEditor.ControlGroup>
          
          
          
          
        </RichTextEditor.ControlGroup>
      
      
    </RichTextEditor.Root>
  )
}

const ToggleTaskList = createBooleanControl({
  label: "Toggle Task List",
  icon: LuListChecks,
  command: (editor) => editor.chain().focus().toggleTaskList().run(),
  getVariant: (editor) => (editor.isActive("taskList") ? "subtle" : "ghost"),
})

const IndentTask = createBooleanControl({
  label: "Indent Task",
  icon: LuArrowRight,
  command: (editor) => editor.chain().focus().sinkListItem("taskItem").run(),
  getVariant: (editor) => (editor.isActive("taskItem") ? "subtle" : "ghost"),
})

const OutdentTask = createBooleanControl({
  label: "Outdent Task",
  icon: LuArrowLeft,
  command: (editor) => editor.chain().focus().liftListItem("taskItem").run(),
  getVariant: (editor) => (editor.isActive("taskItem") ? "subtle" : "ghost"),
})

const AddTask = createBooleanControl({
  label: "Add Task",
  icon: LuPlus,
  command: (editor) =>
    editor
      .chain()
      .focus()
      .insertContent(
        `<li data-type="taskItem" data-checked="false">New task</li>`,
      )
      .run(),
  getVariant: (editor) => (editor.isActive("taskItem") ? "subtle" : "ghost"),
})

```

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

### Images

To add images, use the
[@tiptap/extension-image](https://www.npmjs.com/package/@tiptap/extension-image)
extension. This lets you embed image URLs, upload files, or integrate a custom
media service.

```tsx
"use client"

import {
  Box,
  Button,
  Dialog,
  FileUpload,
  Icon,
  Input,
  Portal,
  Tabs,
} from "@chakra-ui/react"
import Image from "@tiptap/extension-image"
import { useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import {
  Control,
  RichTextEditor,
  useRichTextEditorContext,
} from "@/components/ui/rich-text-editor"
import { useState } from "react"
import { LuImage, LuLink, LuUpload } from "react-icons/lu"

export const RichTextEditorWithImage = () => {
  const editor = useEditor({
    content: `
      Jiraiya Sensei
      
      Jiraiya is a legendary ninja from the Naruto series, known for his wisdom, humor, and mentorship of Naruto Uzumaki.
      Famed as one of the "Legendary Sannin," Jiraiya travels the world gathering knowledge and inspiring future generations.
    `,
    extensions: [StarterKit, Image],
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

      
    </RichTextEditor.Root>
  )
}

function InsertImageControl() {
  const { editor } = useRichTextEditorContext()
  const [open, setOpen] = useState(false)
  const [files, setFiles] = useState<File[]>([])

  if (!editor) return null

  return (
    <>
      <Control.ButtonControl
        icon={}
        label="Insert Image"
        onClick={() => setOpen(true)}
        variant="ghost"
      />

      <Dialog.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
        
          
          <Dialog.Positioner>
            <Dialog.Content maxW="lg">
              <Dialog.Header>
                <Dialog.Title>Insert Image</Dialog.Title>
              </Dialog.Header>

              <Dialog.Body>
                <Tabs.Root defaultValue="url">
                  <Tabs.List>
                    <Tabs.Trigger value="url">
                       Embed URL
                    </Tabs.Trigger>
                    <Tabs.Trigger value="upload">
                       Upload File
                    </Tabs.Trigger>
                  </Tabs.List>

                  <Tabs.Content value="url">
                    
                      <Input
                        placeholder="Enter image URL"
                        id="image-url-input"
                      />
                      <Button
                        onClick={() => {
                          const url = (
                            document.getElementById(
                              "image-url-input",
                            ) as HTMLInputElement
                          ).value
                          if (url)
                            editor.chain().focus().setImage({ src: url }).run()
                          setOpen(false)
                        }}
                      >
                        Insert
                      
                    
                  </Tabs.Content>

                  <Tabs.Content value="upload">
                    <FileUpload.Root
                      maxW="xl"
                      alignItems="stretch"
                      maxFiles={1}
                      accept="image/*"
                      onFileAccept={(accepted) => {
                        const uploaded = accepted.files ?? []
                        setFiles(uploaded)

                        if (uploaded[0]) {
                          const url = URL.createObjectURL(uploaded[0])
                          editor.chain().focus().setImage({ src: url }).run()
                          setOpen(false)
                        }
                      }}
                    >
                      
                      <FileUpload.Dropzone>
                        
                          
                        
                        <FileUpload.DropzoneContent>
                          Drag and drop a file here
                          .png, .jpg up to 5MB
                        </FileUpload.DropzoneContent>
                      </FileUpload.Dropzone>

                      
                    </FileUpload.Root>
                  </Tabs.Content>
                </Tabs.Root>
              </Dialog.Body>

              <Dialog.Footer mt="4">
                 setOpen(false)}>
                  Cancel
                
              </Dialog.Footer>
            </Dialog.Content>
          </Dialog.Positioner>
        
      </Dialog.Root>
    </>
  )
}

```

### Hashtags

To support hashtags in the editor, create a custom
[Tiptap node](https://tiptap.dev/docs/editor/extensions/nodes). This allows
hashtags to be parsed, rendered, and handled as structured inline content.

````tsx
"use client"

import {
  Node,
  mergeAttributes,
  nodeInputRule,
  nodePasteRule,
} from "@tiptap/core"
import {
  type NodeViewProps,
  ReactNodeViewRenderer,
  useEditor,
} from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { RichTextEditor } from "@/components/ui/rich-text-editor"

export const RichTextEditorWithHashtags = () => {
  const initialContent = `<p>Type #chakra or #react and press space, it becomes a tag. Try pasting: #tiptap #awesome</p>`
  const preprocessedContent = preprocessContent(initialContent, "#")

  const editor = useEditor({
    extensions: [StarterKit, Hashtag],
    content: preprocessedContent,
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
      
    </RichTextEditor.Root>
  )
}

interface HashtagOptions {
  trigger: string
}
interface HashtagAttributes {
  tag: string
}

const Hashtag = Node.create({
  name: "hashtag",
  inline: true,
  group: "inline",
  atom: true,

  addOptions() {
    return { trigger: "#" }
  },

  addAttributes() {
    return {
      tag: {
        default: "",
        parseHTML: (element) => element.getAttribute("data-tag"),
        renderHTML: (attributes) => {
          return { "data-tag": attributes.tag }
        },
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: "span[data-type='hashtag']",
        getAttrs: (element) => {
          if (typeof element === "string") return false
          return {
            tag: element.getAttribute("data-tag") || "",
          }
        },
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "span",
      mergeAttributes(HTMLAttributes, {
        "data-type": "hashtag",
        "data-tag": HTMLAttributes.tag,
      }),
      `${this.options.trigger}${HTMLAttributes.tag}`,
    ]
  },

  addInputRules() {
    const trigger = this.options.trigger
    return [
      nodeInputRule({
        find: new RegExp(`(${trigger}[a-zA-Z0-9_]+)\\s```tsx
"use client"

import Subscript from "@tiptap/extension-subscript"
import Superscript from "@tiptap/extension-superscript"
import TextAlign from "@tiptap/extension-text-align"
import { TextStyleKit } from "@tiptap/extension-text-style"
import { useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { Control, RichTextEditor } from "@/components/ui/rich-text-editor"

export const RichTextEditorBasic = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({ link: { openOnClick: false } }),
      Subscript,
      Superscript,
      TextAlign.configure({ types: ["paragraph", "heading"] }),
      TextStyleKit,
    ],
    content: `<h1>Welcome to Chakra UI + Tiptap!</h1><p>Edit using the toolbar below...</p>`,
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

      
    </RichTextEditor.Root>
  )
}

````

## Getting Started

::::steps

### Add the snippet

The rich text editor is exposed as a snippet that can be added to your project.

```bash
npx @chakra-ui/cli snippet add rich-text-editor
```

### Tiptap StarterKit

To get started with the core editor features, install the
[Tiptap StarterKit](https://tiptap.dev/docs/editor/extensions/functionality/starterkit).

```bash
npm i @tiptap/starter-kit
```

### Additional extensions

Tiptap provides a rich set of additional extensions for adding additional
features to the editor. The most commonly used additional extensions you can
install are:

- Subscript: `@tiptap/extension-subscript`
- Superscript: `@tiptap/extension-superscript`
- Text Align: `@tiptap/extension-text-align`
- Text Style: `@tiptap/extension-text-style`

```bash
npm i @tiptap/extension-subscript @tiptap/extension-superscript @tiptap/extension-text-align @tiptap/extension-text-style
```

::::

## Usage

```tsx
import { Control, RichTextEditor } from "@/components/ui/rich-text-editor"
import { useEditor } from "@tiptap/react"
```

```tsx
<RichTextEditor.Root editor={editor}>
  <RichTextEditor.Toolbar>
    <RichTextEditor.ControlGroup>
      
      
      
    </RichTextEditor.ControlGroup>
  </RichTextEditor.Toolbar>
  
</RichTextEditor.Root>
```

## Examples

### Toggle Edit Mode

In the `useEditor` hook, assign the `editable` property to control the editor's
mode. When set to `false`, the editor will be in view-only mode.

```tsx
"use client"

import { HStack } from "@chakra-ui/react"
import { useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import {
  Control,
  RichTextEditor,
  createSelectControl,
} from "@/components/ui/rich-text-editor"
import { useState } from "react"

export const RichTextEditorWithMode = () => {
  const [editable, setEditable] = useState(true)

  const editor = useEditor({
    extensions: [StarterKit],
    content: `<p>Edit this text...</p>`,
    editable,
    shouldRerenderOnTransaction: true,
    immediatelyRender: false,
  })

  if (!editor) return null

  const handleModeChange = (newMode: string) => {
    setEditable(newMode === "edit")
    editor.setEditable(newMode === "edit")
  }

  return (
    <RichTextEditor.Root editor={editor} borderWidth="1px" rounded="md">
      
        <RichTextEditor.ControlGroup
          inert={!editable}
          opacity={!editable ? 0.5 : 1}
        >
          
          
          
          
          
        </RichTextEditor.ControlGroup>
        <RichTextEditor.ControlGroup>
          <ModePicker
            width="120px"
            currentMode={editable ? "edit" : "view"}
            onModeChange={handleModeChange}
          />
        </RichTextEditor.ControlGroup>
      

      
    </RichTextEditor.Root>
  )
}

interface ModePickerProps {
  currentMode: string
  onModeChange: (mode: string) => void
  width?: string
}

const ModePicker = (props: ModePickerProps) => {
  const { currentMode, onModeChange, ...rest } = props

  const SelectControl = createSelectControl({
    label: "Mode",
    options: [
      { value: "edit", label: "Editing" },
      { value: "view", label: "Viewing" },
    ],
    getValue: () => currentMode,
    command: (_editor, value) => {
      onModeChange(value)
    },
  })

  return 
}

```

### Controlled

In the `useEditor` hook, set the `content` and `onUpdate` properties to control
the editor's content programmatically.

```tsx
const [content, setContent] = useState("Edit here...")

const editor = useEditor({
  content,
  onUpdate({ editor }) {
    setContent(editor.getHTML())
  },
})
```

```tsx
"use client"

import { Box, Stack } from "@chakra-ui/react"
import Subscript from "@tiptap/extension-subscript"
import Superscript from "@tiptap/extension-superscript"
import TextAlign from "@tiptap/extension-text-align"
import { useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { Control, RichTextEditor } from "@/components/ui/rich-text-editor"
import { useState } from "react"

export const RichTextEditorControlled = () => {
  const [content, setContent] = useState("Edit here...")

  const editor = useEditor({
    shouldRerenderOnTransaction: true,
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({ link: { openOnClick: false } }),
      Subscript,
      Superscript,
      TextAlign.configure({ types: ["paragraph", "heading"] }),
    ],
    content,
    onUpdate({ editor }) {
      setContent(editor.getHTML())
    },
  })

  if (!editor) return null

  return (
    
      <RichTextEditor.Root editor={editor} maxHeight="2xl">
        <RichTextEditor.Toolbar>
          <RichTextEditor.ControlGroup>
            
            
            
            
            
          </RichTextEditor.ControlGroup>
        </RichTextEditor.Toolbar>

        
      </RichTextEditor.Root>

      
        <Box
          as="pre"
          textStyle="sm"
          wordWrap="break-word"
          whiteSpace="pre-wrap"
        >
          {content}
        
      
    
  )
}

```

### Placeholder

To add a placeholder to the editor, use the
[@tiptap/extension-placeholder](https://www.npmjs.com/package/@tiptap/extension-placeholder)
extension and configure the `placeholder` property.

```tsx
const editor = useEditor({
  extensions: [
    // ... other extensions
    Placeholder.configure({
      placeholder: "Start typing your content here...",
    }),
  ],
})
```

```tsx
"use client"

import Placeholder from "@tiptap/extension-placeholder"
import { useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { Control, RichTextEditor } from "@/components/ui/rich-text-editor"

export const RichTextEditorWithPlaceholder = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Start typing your content here...",
      }),
    ],
    content: "",
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
