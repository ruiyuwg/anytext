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
