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
