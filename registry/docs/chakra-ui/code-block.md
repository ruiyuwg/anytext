# Code Block

```tsx
"use client"

import { CodeBlock, createShikiAdapter } from "@chakra-ui/react"
import type { HighlighterGeneric } from "shiki"

const file = {
  code: `

  Hello, world!

`,
  language: "html",
  title: "index.html",
}

export const CodeBlockBasic = () => {
  return (
    <CodeBlock.AdapterProvider value={shikiAdapter}>
      <CodeBlock.Root code={file.code} language={file.language}>
        <CodeBlock.Content>
          <CodeBlock.Code>
            
          </CodeBlock.Code>
        </CodeBlock.Content>
      </CodeBlock.Root>
    </CodeBlock.AdapterProvider>
  )
}

const shikiAdapter = createShikiAdapter<HighlighterGeneric<any, any>>({
  async load() {
    const { createHighlighter } = await import("shiki")
    return createHighlighter({
      langs: ["tsx", "scss", "html", "bash", "json"],
      themes: ["github-dark"],
    })
  },
  theme: "github-dark",
})

```

## Usage

```js
import { CodeBlock } from "@chakra-ui/react"
```

```jsx
<CodeBlock.AdapterProvider>
  <CodeBlock.Root>
    <CodeBlock.Header>
      
      <CodeBlock.Control>
        
        
      </CodeBlock.Control>
    </CodeBlock.Header>
    <CodeBlock.Content>
      <CodeBlock.Code>
        
      </CodeBlock.Code>
    </CodeBlock.Content>
  </CodeBlock.Root>
</CodeBlock.AdapterProvider>
```

## Adapters

The CodeBlock component works for [Shiki](https://shiki.style/) and
[Highlight.js](https://highlightjs.org/) highlighting engines.

> The docs assumes **Shiki** by default.

To setup the code block component, you need to:

- Configure your preferred adapter (**Shiki** or **Highlight.js**).
- Provide the adapter to the `CodeBlock.AdapterProvider` at the top level.
- Render the `CodeBlock.Root` component within the `CodeBlock.AdapterProvider`.

### Shiki

Install the `shiki` package.

```bash
npm install shiki
```

Then, create the shiki adapter that dynamically loads the shiki highlighter for
the selected languages.

```tsx
import type { HighlighterGeneric } from "shiki"
import { createShikiAdapter } from "@chakra-ui/react"

const shikiAdapter = createShikiAdapter<HighlighterGeneric<any, any>>({
  async load() {
    const { createHighlighter } = await import("shiki")
    return createHighlighter({
      langs: ["tsx", "json"],
      themes: ["github-dark", "github-light"],
    })
  },
})

<CodeBlock.AdapterProvider value={shikiAdapter}>
  {/* ... */}
</CodeBlock.AdapterProvider>
```

### Highlight.js

Install the `highlight.js` package.

```bash
npm install highlight.js
```

Then, create the highlight.js adapter that dynamically loads the selected
languages.

```tsx
import { createHighlightJsAdapter } from "@chakra-ui/react"
import hljs from "highlight.js/lib/core"

const highlightJsAdapter = createHighlightJsAdapter({
  async load() {
    const languages = {
      tsx: () => import("highlight.js/lib/languages/typescript"),
      html: () => import("highlight.js/lib/languages/xml"),
    }
    await Promise.all(
      Object.entries(languages).map(async ([language, file]) => {
        const { default: langModule } = await file()
        hljs.registerLanguage(language, langModule)
      }),
    )
    return hljs
  },
})
```

## Examples

### Sizes

Use the `size` prop to change the size of the code block component.

```tsx
"use client"

import { CodeBlock, For, Stack, createShikiAdapter } from "@chakra-ui/react"
import type { HighlighterGeneric } from "shiki"

const file = {
  code: `

  Hello, world!

`,
  language: "html",
  title: "index.html",
}

export const CodeBlockWithSizes = () => {
  return (
    <CodeBlock.AdapterProvider value={shikiAdapter}>
      
        
          {(size) => (
            <CodeBlock.Root
              key={size}
              code={file.code}
              language={file.language}
              size={size}
            >
              <CodeBlock.Header>
                <CodeBlock.Title>(size={size})</CodeBlock.Title>
              </CodeBlock.Header>
              <CodeBlock.Content>
                <CodeBlock.Code>
                  
                </CodeBlock.Code>
              </CodeBlock.Content>
            </CodeBlock.Root>
          )}
        
      
    </CodeBlock.AdapterProvider>
  )
}

const shikiAdapter = createShikiAdapter<HighlighterGeneric<any, any>>({
  async load() {
    const { createHighlighter } = await import("shiki")
    return createHighlighter({
      langs: ["tsx", "scss", "html", "bash", "json"],
      themes: ["github-dark"],
    })
  },
  theme: "github-dark",
})

```

### Title

Render the `CodeBlock.Title` component within the `CodeBlock.Header` component
to add a title to the code block component.

```tsx
"use client"

import { CodeBlock, Icon, createShikiAdapter } from "@chakra-ui/react"
import { FaHtml5 } from "react-icons/fa"
import type { HighlighterGeneric } from "shiki"

const file = {
  code: `

  Hello, world!

`,
  language: "html",
  title: "index.html",
}

export const CodeBlockWithTitle = () => {
  return (
    <CodeBlock.AdapterProvider value={shikiAdapter}>
      <CodeBlock.Root code={file.code} language={file.language}>
        <CodeBlock.Header>
          <CodeBlock.Title>
            
            {file.title}
          </CodeBlock.Title>
        </CodeBlock.Header>
        <CodeBlock.Content>
          <CodeBlock.Code>
            
          </CodeBlock.Code>
        </CodeBlock.Content>
      </CodeBlock.Root>
    </CodeBlock.AdapterProvider>
  )
}

const shikiAdapter = createShikiAdapter<HighlighterGeneric<any, any>>({
  async load() {
    const { createHighlighter } = await import("shiki")
    return createHighlighter({
      langs: ["tsx", "scss", "html", "bash", "json"],
      themes: ["github-dark"],
    })
  },
  theme: "github-dark",
})

```

### Copy button

Use the `copyButton` prop to add a copy button to the code block component.

```tsx
"use client"

import { CodeBlock, IconButton, createShikiAdapter } from "@chakra-ui/react"
import type { HighlighterGeneric } from "shiki"

const file = {
  code: `

  Hello, world!

`,
  language: "html",
  title: "index.html",
}

export const CodeBlockWithCopyButton = () => {
  return (
    <CodeBlock.AdapterProvider value={shikiAdapter}>
      <CodeBlock.Root code={file.code} language={file.language}>
        <CodeBlock.Header>
          <CodeBlock.Title>{file.title}</CodeBlock.Title>
          <CodeBlock.CopyTrigger asChild>
            
              
            
          </CodeBlock.CopyTrigger>
        </CodeBlock.Header>
        <CodeBlock.Content>
          <CodeBlock.Code>
            
          </CodeBlock.Code>
        </CodeBlock.Content>
      </CodeBlock.Root>
    </CodeBlock.AdapterProvider>
  )
}

const shikiAdapter = createShikiAdapter<HighlighterGeneric<any, any>>({
  async load() {
    const { createHighlighter } = await import("shiki")
    return createHighlighter({
      langs: ["tsx", "scss", "html", "bash", "json"],
      themes: ["github-dark"],
    })
  },
  theme: "github-dark",
})

```

### Line numbers

Line numbers make it easier to reference specific lines of code. Pass the
`meta.showLineNumbers` prop to show line numbers in the code block component.

```tsx
"use client"

import { CodeBlock, createShikiAdapter } from "@chakra-ui/react"
import type { HighlighterGeneric } from "shiki"

const file = {
  code: `

  Hello, world!

`,
  language: "html",
  title: "index.html",
}

export const CodeBlockWithLineNumbers = () => {
  return (
    <CodeBlock.AdapterProvider value={shikiAdapter}>
      <CodeBlock.Root
        code={file.code}
        language={file.language}
        meta={{ showLineNumbers: true }}
      >
        <CodeBlock.Content>
          <CodeBlock.Code>
            
          </CodeBlock.Code>
        </CodeBlock.Content>
      </CodeBlock.Root>
    </CodeBlock.AdapterProvider>
  )
}

const shikiAdapter = createShikiAdapter<HighlighterGeneric<any, any>>({
  async load() {
    const { createHighlighter } = await import("shiki")
    return createHighlighter({
      langs: ["tsx", "scss", "html", "bash", "json"],
      themes: ["github-dark"],
    })
  },
  theme: "github-dark",
})

```

### Line highlighting

Pass the `meta.highlightLines` prop to the `CodeBlock.Root` component to
highlight specific lines of code. The prop accepts an array of line numbers.

```tsx
"use client"

import { CodeBlock, createShikiAdapter } from "@chakra-ui/react"
import type { HighlighterGeneric } from "shiki"

const file = {
  code: `

  Hello, world!

`,
  language: "html",
  title: "index.html",
}

export const CodeBlockWithLineHighlight = () => {
  return (
    <CodeBlock.AdapterProvider value={shikiAdapter}>
      <CodeBlock.Root
        code={file.code}
        language={file.language}
        meta={{ highlightLines: [2, 1] }}
      >
        <CodeBlock.Content>
          <CodeBlock.Code>
            
          </CodeBlock.Code>
        </CodeBlock.Content>
      </CodeBlock.Root>
    </CodeBlock.AdapterProvider>
  )
}

const shikiAdapter = createShikiAdapter<HighlighterGeneric<any, any>>({
  async load() {
    const { createHighlighter } = await import("shiki")
    return createHighlighter({
      langs: ["tsx", "scss", "html", "bash", "json"],
      themes: ["github-dark"],
    })
  },
  theme: "github-dark",
})

```

### Line focus

Pass the `meta.focusedLineNumbers` prop to the `CodeBlock.Root` component to
focus specific lines of code. The prop accepts an array of line numbers. The
line numbers.

```tsx
"use client"

import { CodeBlock, createShikiAdapter } from "@chakra-ui/react"
import type { HighlighterGeneric } from "shiki"

const file = {
  code: `
const greeting = "Hello, World!"

function sayHello() {
  console.log(greeting);
}

sayHello()
`,
  language: "tsx",
  title: "index.tsx",
}

export const CodeBlockWithLineFocus = () => {
  return (
    <CodeBlock.AdapterProvider value={shikiAdapter}>
      <CodeBlock.Root
        code={file.code}
        language={file.language}
        meta={{ focusedLineNumbers: [3, 7] }}
      >
        <CodeBlock.Content>
          <CodeBlock.Code>
            
          </CodeBlock.Code>
        </CodeBlock.Content>
      </CodeBlock.Root>
    </CodeBlock.AdapterProvider>
  )
}

const shikiAdapter = createShikiAdapter<HighlighterGeneric<any, any>>({
  async load() {
    const { createHighlighter } = await import("shiki")
    return createHighlighter({
      langs: ["tsx", "scss", "html", "bash", "json"],
      themes: ["github-dark"],
    })
  },
  theme: "github-dark",
})

```

### Diff

Diffs are useful for highlighting source code changes. Use the
`meta.addedLineNumbers` and `meta.removedLineNumbers` props to add line numbers
to the code block component.

> The prop accepts an array of line numbers. The line numbers are 1-based.

```tsx
"use client"

import { CodeBlock, createShikiAdapter } from "@chakra-ui/react"
import type { HighlighterGeneric } from "shiki"

const file = {
  code: `
const greeting = "Hello, World!"; 
function sayHello() {
  console.log("Hello, World!"); 
  console.log(greeting); 
}
sayHello();
`,
  language: "tsx",
  title: "index.tsx",
}

export const CodeBlockWithDiff = () => {
  return (
    <CodeBlock.AdapterProvider value={shikiAdapter}>
      <CodeBlock.Root
        code={file.code}
        language={file.language}
        meta={{
          showLineNumbers: true,
          addedLineNumbers: [4],
          removedLineNumbers: [3],
        }}
      >
        <CodeBlock.Content>
          <CodeBlock.Code>
            
          </CodeBlock.Code>
        </CodeBlock.Content>
      </CodeBlock.Root>
    </CodeBlock.AdapterProvider>
  )
}

const shikiAdapter = createShikiAdapter<HighlighterGeneric<any, any>>({
  async load() {
    const { createHighlighter } = await import("shiki")
    return createHighlighter({
      langs: ["tsx", "scss", "html", "bash", "json"],
      themes: ["github-dark"],
    })
  },
  theme: "github-dark",
})

```

### Max lines

Use the `meta.maxLines` prop to limit the number of lines in the code block
component. By default, the code block component will expand to fit the content.

```tsx
"use client"

import { CodeBlock, IconButton, createShikiAdapter } from "@chakra-ui/react"
import type { HighlighterGeneric } from "shiki"

export const CodeBlockWithMaxLines = () => {
  return (
    <CodeBlock.AdapterProvider value={shikiAdapter}>
      <CodeBlock.Root code={file.code} language={file.language} maxLines={10}>
        <CodeBlock.Header>
          <CodeBlock.Title>{file.title}</CodeBlock.Title>
          <CodeBlock.Control>
            <CodeBlock.CollapseTrigger asChild>
              
                
              
            </CodeBlock.CollapseTrigger>
            <CodeBlock.CopyTrigger asChild>
              
                
              
            </CodeBlock.CopyTrigger>
          </CodeBlock.Control>
        </CodeBlock.Header>
        <CodeBlock.Content>
          <CodeBlock.Code>
            
          </CodeBlock.Code>

          <CodeBlock.Overlay>
            <CodeBlock.CollapseTrigger>
              
            </CodeBlock.CollapseTrigger>
          </CodeBlock.Overlay>
        </CodeBlock.Content>
      </CodeBlock.Root>
    </CodeBlock.AdapterProvider>
  )
}

const shikiAdapter = createShikiAdapter<HighlighterGeneric<any, any>>({
  async load() {
    const { createHighlighter } = await import("shiki")
    return createHighlighter({
      langs: ["tsx", "scss", "html", "bash", "json"],
      themes: ["github-dark"],
    })
  },
  theme: "github-dark",
})

const file = {
  code: `import * as React from 'react';
import { CodeBlock } from '@chakra-ui/react';

const Example = () => {
  const code = \`
{
  "name": "My App",
  "version": "1.0.0",
  "description": "A simple web application",
  "main": "index.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "build": "webpack --mode production",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.18.2",
    "react": "^18.2.0",
    "axios": "^1.4.0"
  },
  "author": "Developer",
  "license": "MIT"
}
  \`

  return (
    <CodeBlock.Root language="json" code={code}>
      <CodeBlock.Header>
        <CodeBlock.Title>{file.title}</CodeBlock.Title>
      </CodeBlock.Header>
    </CodeBlock.Root>
  );
};

export default Example;
`,
  language: "tsx",
  title: "index.tsx",
}

```

### Language switcher

Here's an example that re-creates an API endpoint request component by composing
the `CodeBlock` and `Select` components.

```tsx
"use client"

import {
  Badge,
  CodeBlock,
  HStack,
  Icon,
  IconButton,
  Select,
  Span,
  createListCollection,
  createShikiAdapter,
  useSelect,
} from "@chakra-ui/react"
import { IoLogoJavascript, IoLogoPython } from "react-icons/io5"
import type { HighlighterGeneric } from "shiki"

export const CodeBlockWithLanguageSwitcher = () => {
  const select = useSelect({
    positioning: { strategy: "fixed" },
    defaultValue: [files[0].value],
    collection,
  })

  const selectedFile = select.selectedItems[0]

  return (
    <CodeBlock.AdapterProvider value={shikiAdapter}>
      <CodeBlock.Root
        code={selectedFile.code}
        language={selectedFile.language}
        size="lg"
      >
        <CodeBlock.Header>
          
            
              POST
            
            /v1/search
          
          <CodeBlock.Control>
            
            <CodeBlock.CopyTrigger asChild>
              
                
              
            </CodeBlock.CopyTrigger>
          </CodeBlock.Control>
        </CodeBlock.Header>
        <CodeBlock.Content>
          <CodeBlock.Code fontSize="xs">
            
          </CodeBlock.Code>
        </CodeBlock.Content>
      </CodeBlock.Root>
    </CodeBlock.AdapterProvider>
  )
}

function LanguageSwitcher(props: Select.RootProviderProps) {
  const { value: select } = props
  return (
    <Select.RootProvider size="xs" variant="subtle" {...props}>
      <Select.Control>
        <Select.Trigger>
          
          
        </Select.Trigger>
      </Select.Control>
      <Select.Positioner>
        <Select.Content>
          {select.collection.items.map((item) => (
            <Select.Item item={item} key={item.value}>
              {item.icon}
              <Select.ItemText>{item.value}</Select.ItemText>
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Positioner>
    </Select.RootProvider>
  )
}

const shikiAdapter = createShikiAdapter<HighlighterGeneric<any, any>>({
  async load() {
    const { createHighlighter } = await import("shiki")
    return createHighlighter({
      langs: ["python", "typescript"],
      themes: ["github-dark"],
    })
  },
  theme: "github-dark",
})

interface CodeFile {
  value: string
  code: string
  language: string
  title: string
  icon: React.ReactElement
}

const files: CodeFile[] = [
  {
    value: "python",
    code: `
from github import Github

# Create a Github instance using an access token
g = Github("YOUR_ACCESS_TOKEN")

# Get a repository
repo = g.get_repo("octocat/Hello-World")

# Get repository information
print(f"Repository: {repo.name}")
print(f"Description: {repo.description}")
print(f"Stars: {repo.stargazers_count}")

# List issues
issues = repo.get_issues(state='open')
for issue in issues:
    print(f"Issue #{issue.number}: {issue.title}")
`,
    language: "python",
    title: "python.py",
    icon: ,
  },
  {
    value: "typescript",
    code: `
import { Octokit } from "@octokit/rest";

// Create an Octokit instance
const octokit = new Octokit({
  auth: "YOUR_ACCESS_TOKEN",
});

// Get repository information
const { data: repo } = await octokit.rest.repos.get({
  owner: "octocat",
  repo: "Hello-World",
});

console.log(\`Repository: \${repo.name}\`);
console.log(\`Description: \${repo.description}\`);
console.log(\`Stars: \${repo.stargazers_count}\`);

// List issues
const { data: issues } = await octokit.rest.issues.listForRepo({
  owner: "octocat",
  repo: "Hello-World",
  state: "open",
});

issues.forEach((issue) => {
  console.log(\`Issue #\${issue.number}: \${issue.title}\`);
});
    `,
    language: "typescript",
    title: "typescript.ts",
    icon: ,
  },
]

const collection = createListCollection({
  items: files,
  itemToString: (item) => item.value,
  itemToValue: (item) => item.value,
})

```

### Floating copy button

Here's an example that adds a floating copy button to the code block component.

```tsx
"use client"

import {
  CodeBlock,
  Float,
  IconButton,
  createShikiAdapter,
} from "@chakra-ui/react"
import type { HighlighterGeneric } from "shiki"

const file = {
  code: `

  Hello, world!

`,
  language: "html",
  title: "index.html",
}

export const CodeBlockWithFloatingCopyButton = () => {
  return (
    <CodeBlock.AdapterProvider value={shikiAdapter}>
      <CodeBlock.Root code={file.code} language={file.language}>
        <CodeBlock.Content>
          
            <CodeBlock.CopyTrigger asChild>
              
                
              
            </CodeBlock.CopyTrigger>
          
          <CodeBlock.Code>
            
          </CodeBlock.Code>
        </CodeBlock.Content>
      </CodeBlock.Root>
    </CodeBlock.AdapterProvider>
  )
}

const shikiAdapter = createShikiAdapter<HighlighterGeneric<any, any>>({
  async load() {
    const { createHighlighter } = await import("shiki")
    return createHighlighter({
      langs: ["tsx", "scss", "html", "bash", "json"],
      themes: ["github-dark"],
    })
  },
  theme: "github-dark",
})

```

### Tabs

Here's an example that composes the `CodeBlock` component with the `Tabs`
component to create a code block with tabs.

```tsx
"use client"

import {
  CodeBlock,
  IconButton,
  Tabs,
  createShikiAdapter,
  useTabs,
} from "@chakra-ui/react"
import type { HighlighterGeneric } from "shiki"

export const CodeBlockWithTabs = () => {
  const tabs = useTabs({
    defaultValue: "python",
  })

  const activeTab =
    files.find((file) => file.language === tabs.value) || files[0]

  const otherTabs = files.filter((file) => file.language !== tabs.value)

  return (
    <CodeBlock.AdapterProvider value={shikiAdapter}>
      <Tabs.RootProvider value={tabs} size="sm" variant="line">
        <CodeBlock.Root code={activeTab.code} language={activeTab.language}>
          <CodeBlock.Header borderBottomWidth="1px">
            <Tabs.List w="full" border="0" ms="-1">
              {files.map((file) => (
                <Tabs.Trigger
                  colorPalette="teal"
                  key={file.language}
                  value={file.language}
                  textStyle="xs"
                >
                  {file.title}
                </Tabs.Trigger>
              ))}
            </Tabs.List>
            <CodeBlock.CopyTrigger asChild>
              
                
              
            </CodeBlock.CopyTrigger>
          </CodeBlock.Header>
          <CodeBlock.Content>
            {otherTabs.map((file) => (
              
            ))}
            <Tabs.Content pt="1" value={activeTab.language}>
              <CodeBlock.Code>
                
              </CodeBlock.Code>
            </Tabs.Content>
          </CodeBlock.Content>
        </CodeBlock.Root>
      </Tabs.RootProvider>
    </CodeBlock.AdapterProvider>
  )
}

const shikiAdapter = createShikiAdapter<HighlighterGeneric<any, any>>({
  async load() {
    const { createHighlighter } = await import("shiki")
    return createHighlighter({
      langs: ["python", "typescript", "java"],
      themes: ["github-dark"],
    })
  },
  theme: "github-dark",
})

const files = [
  { title: "Python", language: "python", code: "print('Hello, World!')" },
  {
    title: "TypeScript",
    language: "typescript",
    code: "console.log('Hello, World!')",
  },
  {
    title: "Java",
    language: "java",
    code: "System.out.println('Hello, World!');",
  },
]

```

### Tabs sync

Here's an example that automatically syncs all code blocks that share the same
storage key. Useful for package manager or framework specific code blocks in a
documentation site.

```tsx
"use client"

import {
  CodeBlock,
  IconButton,
  Stack,
  Tabs,
  createShikiAdapter,
  useTabs,
} from "@chakra-ui/react"
import { useEffect } from "react"
import type { HighlighterGeneric } from "shiki"

const files = [
  { title: "npm", language: "bash", code: "npm install @chakra-ui/react" },
  {
    title: "yarn",
    language: "bash",
    code: "yarn add @chakra-ui/react",
  },
  {
    title: "bun",
    language: "bash",
    code: "bun install @chakra-ui/react",
  },
]

export const CodeBlockWithTabsSync = () => {
  return (
    <CodeBlock.AdapterProvider value={shikiAdapter}>
      
        
        
      
    </CodeBlock.AdapterProvider>
  )
}

const shikiAdapter = createShikiAdapter<HighlighterGeneric<any, any>>({
  async load() {
    const { createHighlighter } = await import("shiki")
    return createHighlighter({
      langs: ["bash"],
      themes: ["github-dark"],
    })
  },
  theme: "github-dark",
})

const CodeTabs = () => {
  const tabs = useTabsSync({
    defaultValue: files[0].title,
    storageKey: "code-tabs-sync",
  })

  const activeTab = files.find((file) => file.title === tabs.value) || files[0]
  const otherTabs = files.filter((file) => file.title !== tabs.value)

  return (
    <Tabs.RootProvider value={tabs} size="sm" variant="line">
      <CodeBlock.Root code={activeTab.code} language={activeTab.language}>
        <CodeBlock.Header borderBottomWidth="1px">
          <Tabs.List w="full" border="0" ms="-1">
            {files.map((file) => (
              <Tabs.Trigger
                colorPalette="teal"
                key={file.title}
                value={file.title}
                textStyle="xs"
              >
                {file.title}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          <CodeBlock.CopyTrigger asChild>
            
              
            
          </CodeBlock.CopyTrigger>
        </CodeBlock.Header>
        <CodeBlock.Content>
          {otherTabs.map((file) => (
            
          ))}
          <Tabs.Content pt="1" value={activeTab.title}>
            <CodeBlock.Code>
              
            </CodeBlock.Code>
          </Tabs.Content>
        </CodeBlock.Content>
      </CodeBlock.Root>
    </Tabs.RootProvider>
  )
}

function useTabsSync(props: { defaultValue: string; storageKey: string }) {
  const { defaultValue, storageKey } = props

  const tabs = useTabs({
    defaultValue,
    onValueChange(details) {
      if (details.value) {
        localStorage.setItem(storageKey, details.value)
        dispatchEvent(
          new StorageEvent("storage", {
            key: storageKey,
            newValue: details.value,
          }),
        )
      }
    },
  })

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      requestAnimationFrame(() => {
        if (e.key === storageKey && e.newValue) {
          tabs.setValue(e.newValue)
        }
      })
    }
    window.addEventListener("storage", handleStorageChange)
    return () => window.removeEventListener("storage", handleStorageChange)
  }, [storageKey, tabs])

  return tabs
}

```

### Themes

Use the `meta.colorScheme` prop to add a theme to the code block component. In
this example, the colorScheme is set to color mode from the `useColorMode` hook.

```tsx
"use client"

import { ClientOnly, CodeBlock, createShikiAdapter } from "@chakra-ui/react"
import { useColorMode } from "@/components/ui/color-mode"
import type { HighlighterGeneric } from "shiki"

const file = {
  code: `

  Hello, world!

`,
  language: "html",
  title: "index.html",
}

export const CodeBlockWithThemes = () => {
  const { colorMode } = useColorMode()

  return (
    <CodeBlock.AdapterProvider value={shikiAdapter}>
      Loading...}>
        {() => (
          <CodeBlock.Root
            code={file.code}
            language={file.language}
            meta={{ colorScheme: colorMode }}
          >
            <CodeBlock.Content bg="bg">
              <CodeBlock.Code>
                
              </CodeBlock.Code>
            </CodeBlock.Content>
          </CodeBlock.Root>
        )}
      
    </CodeBlock.AdapterProvider>
  )
}

const shikiAdapter = createShikiAdapter<HighlighterGeneric<any, any>>({
  async load() {
    const { createHighlighter } = await import("shiki")
    return createHighlighter({
      langs: ["tsx", "scss", "html", "bash", "json"],
      themes: ["github-dark", "github-light"],
    })
  },
  theme: {
    light: "github-light",
    dark: "github-dark",
  },
})

```

### Wrap overflow

Use the `meta.wordWrap` prop to wrap the code block component.

```tsx
"use client"

import { CodeBlock, IconButton, createShikiAdapter } from "@chakra-ui/react"
import type { HighlighterGeneric } from "shiki"

const file = {
  code: `
const greeting = "Hello, World! I am a long line of text that will wrap to the next line."

function sayHello() {
  console.log(greeting)
}

sayHello()
`,
  language: "tsx",
  title: "index.tsx",
}

export const CodeBlockWithWordWrap = () => {
  return (
    <CodeBlock.AdapterProvider value={shikiAdapter}>
      <CodeBlock.Root
        maxW="md"
        code={file.code}
        language={file.language}
        meta={{ wordWrap: true }}
      >
        <CodeBlock.Header>
          <CodeBlock.Title>{file.title}</CodeBlock.Title>
          <CodeBlock.CopyTrigger asChild>
            
              
            
          </CodeBlock.CopyTrigger>
        </CodeBlock.Header>
        <CodeBlock.Content>
          <CodeBlock.Code>
            
          </CodeBlock.Code>
        </CodeBlock.Content>
      </CodeBlock.Root>
    </CodeBlock.AdapterProvider>
  )
}

const shikiAdapter = createShikiAdapter<HighlighterGeneric<any, any>>({
  async load() {
    const { createHighlighter } = await import("shiki")
    return createHighlighter({
      langs: ["tsx", "scss", "html", "bash", "json"],
      themes: ["github-dark"],
    })
  },
  theme: "github-dark",
})

```

### Line numbers with word wrap

You can combine line numbers with word wrapping by setting both
`meta.showLineNumbers` and `meta.wordWrap` to `true`. The line numbers will
properly align with wrapped text.

```tsx
"use client"

import { CodeBlock, IconButton, createShikiAdapter } from "@chakra-ui/react"
import type { HighlighterGeneric } from "shiki"

export const CodeBlockWithLineNumbersWordWrap = () => {
  return (
    <CodeBlock.AdapterProvider value={shikiAdapter}>
      <CodeBlock.Root
        maxW="md"
        code={file.code}
        language={file.language}
        meta={{ showLineNumbers: true, wordWrap: true }}
      >
        <CodeBlock.Header>
          <CodeBlock.Title>{file.title}</CodeBlock.Title>
          <CodeBlock.CopyTrigger asChild>
            
              
            
          </CodeBlock.CopyTrigger>
        </CodeBlock.Header>
        <CodeBlock.Content>
          <CodeBlock.Code>
            
          </CodeBlock.Code>
        </CodeBlock.Content>
      </CodeBlock.Root>
    </CodeBlock.AdapterProvider>
  )
}

const shikiAdapter = createShikiAdapter<HighlighterGeneric<any, any>>({
  async load() {
    const { createHighlighter } = await import("shiki")
    return createHighlighter({
      langs: ["javascript", "bash", "json"],
      themes: ["github-dark"],
    })
  },
  theme: "github-dark",
})

const file = {
  code: `total 121M
  drwxr-xr-x   3 root root 4.0K Sep 11  2022  ..
  -rw-r--r--   1 ali  ali   220 Sep 11  2022  .bash_logout
  drwxr-xr-x   2 ali  ali  4.0K Sep 11  2022  Templates
  drwxr-xr-x   2 ali  ali  4.0K Sep 11  2022  Public
  -rw-r--r--   1 ali  ali     0 Sep 11  2022  .sudo_as_admin_successful
  drwx------   3 ali  ali  4.0K Sep 11  2022  .pki
  drwx------   3 ali  ali  4.0K Sep 11  2022  .gnome
  -rw-r--r--   1 ali  ali    10 Sep 13  2022  .shell.pre-oh-my-zsh
  drwxrwxr-x   3 ali  ali  4.0K Sep 26  2022  v2ray
  -rw-r--r--   1 root root  12K Sep 26  2022  .profile.swp
  drwxrwxrwx   4 ali  ali  4.0K Sep 28  2022  .sonarlint
  drwxrwxr-x   3 ali  ali  4.0K Sep 28  2022  .eclipse
  drwxrwxr-x   8 ali  ali  4.0K Oct  4  2022  zsh-syntax-highlighting
  drwxrwxr-x   2 ali  ali  4.0K Oct  5  2022  .dart
  drwxrwxr-x   4 ali  ali  4.0K Oct  5  2022  .dartServer
  drwxrwxrwx   2 ali  ali  4.0K Oct  7  2022  .quicktype-vscode
  -rw-rw-r--   1 ali  ali   38K Oct 31  2022  .zcompdump-ali-laptop-5.8.1.ali-laptop.5060
  drwxrwxr-x   3 ali  ali  4.0K Nov 16  2022  .swt
  drwx------   3 ali  ali  4.0K Nov 17  2022  .nv
  drwxrwxr-x  15 ali  ali  4.0K Nov 18  2022  .gvm
  drwxrwxr-x   2 ali  ali  4.0K Nov 27  2022  .docker-esopmoc
  drwxrwxr-x   3 ali  ali  4.0K Dec  5  2022  .ipython
  drwx------   7 ali  ali  4.0K Dec  5  2022  .local
  drwxrwxr-x   2 ali  ali  4.0K Dec  5  2022  .jupyter
  drwxr-xr-x   4 ali  ali  4.0K Dec 11  2022  .anydesk
  drwxrwxr-x   3 ali  ali  4.0K Feb 18  2023  .dotnet
  drwxrwxr-x   3 ali  ali  4.0K Feb 19  2023  .degit
  drwxrwxr-x   3 ali  ali  4.0K Feb 26  2023  .cargo
  -rw-rw-r--   1 ali  ali    21 Feb 26  2023  .zshenv
  drwxrwxr-x   6 ali  ali  4.0K Feb 26  2023  .rustup
  drwxrwxr-x   2 ali  ali  4.0K Apr  8  2023  .ipynb_checkpoints
  drwxr-xr-x   8 ali  ali  4.0K Apr 20  2023  my_folder
  drwx------   3 ali  ali  4.0K May  5  2023  .vmware
  drwxrwxr-x  15 ali  ali  4.0K May  7  2023  .openshot_qt
  drwxrwxr-x   3 ali  ali  4.0K May 10  2023  .parallel
  drwxrwxr-x   2 ali  ali  4.0K May 16  2023  .simplelocalize
  -rw-rw-r--   1 ali  ali  5.7K May 21  2023  .v8flags.9.4.146.26-node.26.86318e52f5ed4801abe1d13d509443de.json
  drwxrwxrwx 105 ali  ali  4.0K Sep  5 10:27 `,
  language: "bash",
  title: "terminal-output.txt",
}

```

### Highlight.js

Here's an example that uses highlight.js to highlight the code block.

```tsx
"use client"

import { CodeBlock, createHighlightJsAdapter } from "@chakra-ui/react"
import hljs from "highlight.js/lib/core"

const file = {
  code: `

  Hello, world!

`,
  language: "html",
  title: "index.html",
}

export const CodeBlockWithHighlightJs = () => {
  return (
    <CodeBlock.AdapterProvider value={highlightJsAdapter}>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css"
      />
      <CodeBlock.Root code={file.code} language={file.language}>
        <CodeBlock.Header>
          <CodeBlock.Title>{file.title}</CodeBlock.Title>
        </CodeBlock.Header>
        <CodeBlock.Content>
          <CodeBlock.Code>
            
          </CodeBlock.Code>
        </CodeBlock.Content>
      </CodeBlock.Root>
    </CodeBlock.AdapterProvider>
  )
}

const highlightJsAdapter = createHighlightJsAdapter({
  async load() {
    const languages = {
      tsx: () => import("highlight.js/lib/languages/typescript"),
      html: () => import("highlight.js/lib/languages/xml"),
    }
    await Promise.all(
      Object.entries(languages).map(async ([language, file]) => {
        const { default: langModule } = await file()
        hljs.registerLanguage(language, langModule)
      }),
    )
    return hljs
  },
})

```

### Plain text

The code block falls back to a plain text by default. To create a plain text
code block, remove the use of `CodeBlock.AdapterProvider`.

```tsx
"use client"

import { CodeBlock, Float, IconButton, Span } from "@chakra-ui/react"

const file = {
  code: "npm install @chakra-ui/react",
  language: "bash",
  title: "npm install @chakra-ui/react",
}

export const CodeBlockPlainText = () => {
  return (
    <CodeBlock.Root
      code={file.code}
      language={file.language}
      display="inline-flex"
    >
      <CodeBlock.Content>
        
          <CodeBlock.CopyTrigger asChild>
            
              
            
          </CodeBlock.CopyTrigger>
        
        <CodeBlock.Code pe="10">
          
            $
          
          
        </CodeBlock.Code>
      </CodeBlock.Content>
    </CodeBlock.Root>
  )
}

```

## Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
| variant | subtle | `'solid' \| 'subtle' \| 'outline' \| 'surface' \| 'plain'` | The variant of the component |
| size | sm | `'xs' \| 'sm' \| 'md' \| 'lg'` | The size of the component |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
