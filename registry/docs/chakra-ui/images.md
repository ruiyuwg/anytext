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
