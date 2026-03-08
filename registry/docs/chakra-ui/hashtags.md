### Hashtags

To support hashtags in the editor, create a custom
[Tiptap node](https://tiptap.dev/docs/editor/extensions/nodes). This allows
hashtags to be parsed, rendered, and handled as structured inline content.

),
type: this.type,
getAttributes: (match) => ({
tag: match\[1].substring(trigger.length),
}),
}),
]
},

addPasteRules() {
const trigger = this.options.trigger
return \[
nodePasteRule({
find: new RegExp(`${trigger}([a-zA-Z0-9_]+)`, "g"),
type: this.type,
getAttributes: (match) => ({ tag: match\[1] }),
}),
]
},

addNodeView() {
return ReactNodeViewRenderer(HashtagComponent)
},
})

function HashtagComponent({ node }: NodeViewProps) {
const { tag } = node.attrs as HashtagAttributes
return `#${tag}`
}

function preprocessContent(content: string, trigger: string = "#"): string {
const regex = new RegExp(`${trigger}([a-zA-Z0-9_]+)`, "g")

return content.replace(regex, (\_match, tag) => {
return `<span data-type="hashtag" data-tag="${tag}">${trigger}${tag}</span>`
})
}

````

### Mentions

Here's an example of how to add mentions to the editor by creating a custom
Tiptap extension that triggers on `@` and renders a suggestion menu using the
provided menu components.

```tsx
"use client"

import Mention from "@tiptap/extension-mention"
import Subscript from "@tiptap/extension-subscript"
import Superscript from "@tiptap/extension-superscript"
import TextAlign from "@tiptap/extension-text-align"
import { TextStyle } from "@tiptap/extension-text-style"
import {
  NodeViewWrapper,
  type ReactNodeViewProps,
  ReactNodeViewRenderer,
  useEditor,
} from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { Control, RichTextEditor } from "@/components/ui/rich-text-editor"
import {
  type HashtagItem,
  type MentionItem,
  createMentionConfig,
  createSuggestionConfig,
} from "@/components/ui/rich-text-editor-menu"
import { Tag } from "@/components/ui/tag"

export const RichTextEditorWithMentions = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Subscript,
      Superscript,
      TextAlign.configure({ types: ["paragraph", "heading"] }),
      TextStyle,
      CustomMention.configure({
        HTMLAttributes: {
          class: "mention",
        },
        suggestion: createMentionConfig(MENTION_USERS),
      }),
      HashtagMention.configure({
        HTMLAttributes: {
          class: "hashtag",
        },
        suggestion: createSuggestionConfig("#", (query) =>
          HASHTAGS.filter((hashtag) =>
            hashtag.label.toLowerCase().includes(query.toLowerCase()),
          ),
        ),
      }),
    ],
    content: `<h1>Rich Text Editor with Mentions</h1><p>Type <strong>@</strong> for mentions or <strong>#</strong> for hashtags</p>`,
    shouldRerenderOnTransaction: true,
    immediatelyRender: false,
  })

  if (!editor) return null

  return (
    <RichTextEditor.Root editor={editor} borderWidth="1px" rounded="sm">
      <RichTextEditor.Toolbar>
        <RichTextEditor.ControlGroup>
          <Control.Bold />
          <Control.Italic />
          <Control.Strikethrough />
          <Control.Code />
        </RichTextEditor.ControlGroup>

        <RichTextEditor.ControlGroup>
          <Control.H1 />
          <Control.H2 />
          <Control.H3 />
        </RichTextEditor.ControlGroup>

        <RichTextEditor.ControlGroup>
          <Control.BulletList />
          <Control.OrderedList />
          <Control.Blockquote />
        </RichTextEditor.ControlGroup>

        <RichTextEditor.ControlGroup>
          <Control.Undo />
          <Control.Redo />
        </RichTextEditor.ControlGroup>
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor.Root>
  )
}

const MentionComponent = (props: ReactNodeViewProps) => {
  return (
    <NodeViewWrapper as="span">
      <Tag size="lg" colorPalette="orange" mr="1">
        @{props.node.attrs.label ?? props.node.attrs.id}
      </Tag>
    </NodeViewWrapper>
  )
}

const CustomMention = Mention.extend({
  addNodeView() {
    return ReactNodeViewRenderer(MentionComponent)
  },
})

const HashtagMention = Mention.extend({
  name: "hashtag",
  addNodeView() {
    return ReactNodeViewRenderer((props) => (
      <NodeViewWrapper as="span">
        #{props.node.attrs.label ?? props.node.attrs.id}
      </NodeViewWrapper>
    ))
  },
})

const MENTION_USERS: MentionItem[] = [
  { id: "1", label: "Alice Johnson", email: "alice@example.com" },
  { id: "2", label: "Bob Smith", email: "bob@example.com" },
  { id: "3", label: "Charlie Davis", email: "charlie@example.com" },
  { id: "4", label: "Diana Wilson", email: "diana@example.com" },
  { id: "5", label: "Ethan Brown", email: "ethan@example.com" },
  { id: "6", label: "Fiona Martinez", email: "fiona@example.com" },
  { id: "7", label: "George Anderson", email: "george@example.com" },
  { id: "8", label: "Hannah Taylor", email: "hannah@example.com" },
]

const HASHTAGS: HashtagItem[] = [
  { id: "react", label: "react", description: "React.js framework" },
  { id: "typescript", label: "typescript", description: "TypeScript language" },
  { id: "nextjs", label: "nextjs", description: "Next.js framework" },
  { id: "chakra", label: "chakra", description: "Chakra UI library" },
  { id: "javascript", label: "javascript", description: "JavaScript language" },
  { id: "css", label: "css", description: "CSS styling" },
]

````

### Emojis

Enhance your editor with [emoji suggestions](#emoji-menu) by using Tiptap's
[Emoji extension](https://www.npmjs.com/package/@tiptap/extension-emoji). Emojis
can be triggered by typing `:` or using common emoticons like `:)` or `<3`.

```tsx
"use client"

import Emoji, { emojis } from "@tiptap/extension-emoji"
import { useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { RichTextEditor } from "@/components/ui/rich-text-editor"
import { createEmojiSuggestionConfig } from "@/components/ui/rich-text-editor-menu"

export const RichTextEditorWithEmoji = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Emoji.configure({
        emojis,
        enableEmoticons: true,
        suggestion: createEmojiSuggestionConfig(emojis),
      }),
    ],
    content: `<p>Type <strong>:</strong> to insert an emoji, like :smile: or :heart:</p><p>You can also use emoticons like :) or &lt;3</p>`,
    shouldRerenderOnTransaction: true,
    immediatelyRender: false,
  })

  if (!editor) return null

  return (
    <RichTextEditor.Root editor={editor} rounded="md">
      <RichTextEditor.Content />
    </RichTextEditor.Root>
  )
}

```
