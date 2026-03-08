# Menu

```tsx
import { Button, Menu, Portal } from "@chakra-ui/react"

export const MenuBasic = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        
          Open
        
      </Menu.Trigger>
      
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="new-txt">New Text File</Menu.Item>
            <Menu.Item value="new-file">New File...</Menu.Item>
            <Menu.Item value="new-win">New Window</Menu.Item>
            <Menu.Item value="open-file">Open File...</Menu.Item>
            <Menu.Item value="export">Export</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      
    </Menu.Root>
  )
}

```

## Usage

```tsx
import { Menu } from "@chakra-ui/react"
```

```tsx
<Menu.Root>
  
  <Menu.Positioner>
    <Menu.Content>
      

      <Menu.ItemGroup>
        
      </Menu.ItemGroup>

      
      

      <Menu.CheckboxItem>
        
      </Menu.CheckboxItem>

      <Menu.RadioItemGroup>
        <Menu.RadioItem>
          
        </Menu.RadioItem>
      </Menu.RadioItemGroup>
    </Menu.Content>
  </Menu.Positioner>
</Menu.Root>
```

## Examples

### Controlled

Use the `open` and `onOpenChange` prop to control the visibility of the menu.

```tsx
"use client"

import { Button, Code, Menu, Portal, Stack } from "@chakra-ui/react"
import { useState } from "react"

export const MenuControlled = () => {
  const [open, setOpen] = useState(false)
  return (
    
      open: {String(open)}
      <Menu.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
        <Menu.Trigger asChild>
          
            Open
          
        </Menu.Trigger>
        
          <Menu.Positioner>
            <Menu.Content>
              <Menu.Item value="new-txt">New Text File</Menu.Item>
              <Menu.Item value="new-file">New File...</Menu.Item>
              <Menu.Item value="new-win">New Window</Menu.Item>
              <Menu.Item value="open-file">Open File...</Menu.Item>
              <Menu.Item value="export">Export</Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        
      </Menu.Root>
    
  )
}

```

### Store

An alternative way to control the menu is to use the `RootProvider` component
and the `useMenu` store hook.

This way you can access the menu state and methods from outside the menu.

```tsx
"use client"

import { Button, Code, Menu, Portal, Stack, useMenu } from "@chakra-ui/react"

export const MenuWithStore = () => {
  const menu = useMenu()
  return (
    
      open: {String(menu.api.open)}
      <Menu.RootProvider value={menu}>
        <Menu.Trigger asChild>
          
            Open
          
        </Menu.Trigger>
        
          <Menu.Positioner>
            <Menu.Content>
              <Menu.Item value="new-txt">New Text File</Menu.Item>
              <Menu.Item value="new-file">New File...</Menu.Item>
              <Menu.Item value="new-win">New Window</Menu.Item>
              <Menu.Item value="open-file">Open File...</Menu.Item>
              <Menu.Item value="export">Export</Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        
      </Menu.RootProvider>
    
  )
}

```

### Command

Use the `Menu.ItemCommand` component to display a command in the menu.

```tsx
import { Button, Menu, Portal } from "@chakra-ui/react"

export const MenuWithCommand = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        
          Open
        
      </Menu.Trigger>
      
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="new-txt-a">
              New Text File <Menu.ItemCommand>⌘E</Menu.ItemCommand>
            </Menu.Item>
            <Menu.Item value="new-file-a">
              New File... <Menu.ItemCommand>⌘N</Menu.ItemCommand>
            </Menu.Item>
            <Menu.Item value="new-win-a">
              New Window <Menu.ItemCommand>⌘W</Menu.ItemCommand>
            </Menu.Item>
            <Menu.Item value="open-file-a">
              Open File... <Menu.ItemCommand>⌘O</Menu.ItemCommand>
            </Menu.Item>
            <Menu.Item value="export-a">
              Export <Menu.ItemCommand>⌘S</Menu.ItemCommand>
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      
    </Menu.Root>
  )
}

```

### Context menu

Use the `Menu.ContextTrigger` component to create a context menu.

```tsx
import { Center, Menu, Portal } from "@chakra-ui/react"

export const MenuWithContextTrigger = () => {
  return (
    <Menu.Root>
      <Menu.ContextTrigger width="full">
        <Center
          height="40"
          userSelect="none"
          borderWidth="2px"
          borderStyle="dashed"
          rounded="lg"
          padding="4"
        >
          Right click here
        
      </Menu.ContextTrigger>
      
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="new-txt">New Text File</Menu.Item>
            <Menu.Item value="new-file">New File...</Menu.Item>
            <Menu.Item value="new-win">New Window</Menu.Item>
            <Menu.Item value="open-file">Open File...</Menu.Item>
            <Menu.Item value="export">Export</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      
    </Menu.Root>
  )
}

```

### Group

Use the `Menu.ItemGroup` component to group related menu items.

```tsx
import { Button, Menu, Portal } from "@chakra-ui/react"

export const MenuWithGroup = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        Edit
      </Menu.Trigger>
      
        <Menu.Positioner>
          <Menu.Content>
            <Menu.ItemGroup>
              <Menu.ItemGroupLabel>Styles</Menu.ItemGroupLabel>
              <Menu.Item value="bold">Bold</Menu.Item>
              <Menu.Item value="underline">Underline</Menu.Item>
            </Menu.ItemGroup>
            
            <Menu.ItemGroup>
              <Menu.ItemGroupLabel>Align</Menu.ItemGroupLabel>
              <Menu.Item value="left">Left</Menu.Item>
              <Menu.Item value="middle">Middle</Menu.Item>
              <Menu.Item value="right">Right</Menu.Item>
            </Menu.ItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      
    </Menu.Root>
  )
}

```

### Danger Item

Here's an example of how to style a menu item that is used to delete an item.

```tsx
import { Button, Menu, Portal } from "@chakra-ui/react"

export const MenuWithDangerItem = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        
          Open Menu
        
      </Menu.Trigger>
      
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="rename">Rename</Menu.Item>
            <Menu.Item value="export">Export</Menu.Item>
            <Menu.Item
              value="delete"
              color="fg.error"
              _hover={{ bg: "bg.error", color: "fg.error" }}
            >
              Delete...
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      
    </Menu.Root>
  )
}

```

### Submenu

Here's an example of how to create a submenu.

```tsx
import { Button, Menu, Portal } from "@chakra-ui/react"
import { LuChevronRight } from "react-icons/lu"

export const MenuWithSubmenu = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        
          Open
        
      </Menu.Trigger>
      
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="new-txt">New Text File</Menu.Item>
            <Menu.Item value="new-file">New File...</Menu.Item>
            <Menu.Root positioning={{ placement: "right-start", gutter: 2 }}>
              <Menu.TriggerItem>
                Open Recent 
              </Menu.TriggerItem>
              
                <Menu.Positioner>
                  <Menu.Content>
                    <Menu.Item value="panda">Panda</Menu.Item>
                    <Menu.Item value="ark">Ark UI</Menu.Item>
                    <Menu.Item value="chakra">Chakra v3</Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              
            </Menu.Root>
            <Menu.Item value="open-file">Open File...</Menu.Item>
            <Menu.Item value="export">Export</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      
    </Menu.Root>
  )
}

```

### Links

Pass the `asChild` prop to the `Menu.Item` component to render a link.

```tsx
import { Button, Menu, Portal } from "@chakra-ui/react"

export const MenuWithLinks = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        
          Select Anime
        
      </Menu.Trigger>
      
        <Menu.Positioner>
          <Menu.Content>
            {links.map((link) => (
              <Menu.Item key={link.href} asChild value={link.title}>
                
                  {link.title}
                
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      
    </Menu.Root>
  )
}

const links = [
  {
    title: "Naruto",
    href: "https://www.crunchyroll.com/naruto",
  },
  {
    title: "One Piece",
    href: "https://www.crunchyroll.com/one-piece",
  },
  {
    title: "Attack on Titan",
    href: "https://www.crunchyroll.com/attack-on-titan",
  },
]

```

When using custom router links, you need to set the `navigate` prop on the
`Menu.Root` component.

```tsx
"use client"

import { Menu } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

const Demo = () => {
  const navigate = useNavigate()
  return (
    <Menu.Root navigate={({ value, node }) => navigate(`/${value}`)}>
      {/* ... */}
    </Menu.Root>
  )
}
```

### Radio Items

Here's an example of how to create a menu with radio items.

```tsx
"use client"

import { Button, Menu, Portal } from "@chakra-ui/react"
import { useState } from "react"
import { HiSortAscending } from "react-icons/hi"

export const MenuWithRadioItems = () => {
  const [value, setValue] = useState("asc")
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        
           Sort
        
      </Menu.Trigger>
      
        <Menu.Positioner>
          <Menu.Content minW="10rem">
            <Menu.RadioItemGroup
              value={value}
              onValueChange={(e) => setValue(e.value)}
            >
              {items.map((item) => (
                <Menu.RadioItem key={item.value} value={item.value}>
                  {item.label}
                  
                </Menu.RadioItem>
              ))}
            </Menu.RadioItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      
    </Menu.Root>
  )
}

const items = [
  { label: "Ascending", value: "asc" },
  { label: "Descending", value: "desc" },
]

```

### Checkbox Items

Here's an example of how to create a menu with checkbox items.

```tsx
"use client"

import { Button, Menu, Portal, useCheckboxGroup } from "@chakra-ui/react"
import { HiCog } from "react-icons/hi"

export const MenuWithCheckboxItems = () => {
  const group = useCheckboxGroup({ defaultValue: ["autosave"] })
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        
           Features
        
      </Menu.Trigger>
      
        <Menu.Positioner>
          <Menu.Content>
            <Menu.ItemGroup>
              <Menu.ItemGroupLabel>Features</Menu.ItemGroupLabel>
              {items.map(({ title, value }) => (
                <Menu.CheckboxItem
                  key={value}
                  value={value}
                  checked={group.isChecked(value)}
                  onCheckedChange={() => group.toggleValue(value)}
                >
                  {title}
                  
                </Menu.CheckboxItem>
              ))}
            </Menu.ItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      
    </Menu.Root>
  )
}

const items = [
  { title: "Autosave", value: "autosave" },
  { title: "Detect Language", value: "detect-language" },
  { title: "Spellcheck", value: "spellcheck" },
]

```

### Icon and Command

Compose the menu to include icons and commands.

```tsx
import { Box, Button, Menu, Portal } from "@chakra-ui/react"
import { LuClipboardPaste, LuCopy, LuScissors } from "react-icons/lu"

export const MenuWithIconAndCommand = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        Edit
      </Menu.Trigger>
      
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="cut">
              
              Cut
              <Menu.ItemCommand>⌘X</Menu.ItemCommand>
            </Menu.Item>
            <Menu.Item value="copy">
              
              Copy
              <Menu.ItemCommand>⌘C</Menu.ItemCommand>
            </Menu.Item>
            <Menu.Item value="paste">
              
              Paste
              <Menu.ItemCommand>⌘V</Menu.ItemCommand>
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      
    </Menu.Root>
  )
}

```

### Placement

Use the `positioning.placement` prop to control the placement of the menu.

```tsx
import { Button, Menu, Portal } from "@chakra-ui/react"

export const MenuWithPlacement = () => {
  return (
    <Menu.Root positioning={{ placement: "right-start" }}>
      <Menu.Trigger asChild>
        
          Open
        
      </Menu.Trigger>
      
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="new-txt">New Text File</Menu.Item>
            <Menu.Item value="new-file">New File...</Menu.Item>
            <Menu.Item value="new-win">New Window</Menu.Item>
            <Menu.Item value="open-file">Open File...</Menu.Item>
            <Menu.Item value="export">Export</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      
    </Menu.Root>
  )
}

```

### Avatar

Here's an example that composes the `Menu` with the `Avatar` component to
display a menu underneath an avatar.

```tsx
import { Avatar, Menu, Portal } from "@chakra-ui/react"

export const MenuWithAvatar = () => {
  return (
    <Menu.Root positioning={{ placement: "right-end" }}>
      <Menu.Trigger rounded="full" focusRing="outside">
        <Avatar.Root size="sm">
          
          
        </Avatar.Root>
      </Menu.Trigger>
      
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="account">Account</Menu.Item>
            <Menu.Item value="settings">Settings</Menu.Item>
            <Menu.Item value="logout">Logout</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      
    </Menu.Root>
  )
}

```

### Anchor Point

Use the `positioning.anchorPoint` prop to control the anchor point of the menu.

You can derive it from the `getBoundingClientRect` of a DOM element, or use
something like `DOMRect.fromRect({ x: 0, y: 0, width: 1, height: 1 })` to create
a new rect.

```tsx
"use client"

import { Box, Button, Menu, Portal } from "@chakra-ui/react"
import { useRef } from "react"

export const MenuWithAnchorRect = () => {
  const ref = useRef(null)
  const getAnchorRect = () => ref.current!.getBoundingClientRect()

  return (
    <Menu.Root positioning={{ getAnchorRect }}>
      <Menu.Trigger asChild>
        
          Open
        
      </Menu.Trigger>
      
        Anchor
      
      
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="new-txt">New Text File</Menu.Item>
            <Menu.Item value="new-file">New File...</Menu.Item>
            <Menu.Item value="new-win">New Window</Menu.Item>
            <Menu.Item value="open-file">Open File...</Menu.Item>
            <Menu.Item value="export">Export</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      
    </Menu.Root>
  )
}

```

### Mixed Layout

Here's an example of how to create a mixed layout of menu items. In this layout,
the top horizontal menu includes common menu items.

```tsx
import { Box, Button, Group, Menu, Portal } from "@chakra-ui/react"
import {
  LuClipboard,
  LuCopy,
  LuFileSearch,
  LuMessageSquare,
  LuScissors,
  LuShare,
} from "react-icons/lu"

const horizontalMenuItems = [
  { label: "Cut", value: "cut", icon:  },
  { label: "Copy", value: "copy", icon:  },
  { label: "Paste", value: "paste", icon:  },
]

const verticalMenuItems = [
  { label: "Look Up", value: "look-up", icon:  },
  { label: "Translate", value: "translate", icon:  },
  { label: "Share", value: "share", icon:  },
]

export const MenuWithMixedLayout = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        
          Open
        
      </Menu.Trigger>
      
        <Menu.Positioner>
          <Menu.Content>
            
              {horizontalMenuItems.map((item) => (
                <Menu.Item
                  key={item.value}
                  value={item.value}
                  width="14"
                  gap="1"
                  flexDirection="column"
                  justifyContent="center"
                >
                  {item.icon}
                  {item.label}
                </Menu.Item>
              ))}
            
            {verticalMenuItems.map((item) => (
              <Menu.Item key={item.value} value={item.value}>
                {item.label}
                {item.icon}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      
    </Menu.Root>
  )
}

```

### Overflow

When you have a long list of menu items, you can set a `maxH` prop on the
`Menu.Content` to create a scrollable menu.

:::note

The content has a default `maxHeight: "var(--available-height)"`, which is the
maximum available height for the content relative to the viewport.

:::

```tsx
import { Button, Menu, Portal } from "@chakra-ui/react"

export const MenuWithOverflow = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        
          Open Menu
        
      </Menu.Trigger>
      
        <Menu.Positioner>
          <Menu.Content maxH="200px" minW="10rem">
            {menuItems.map((item) => (
              <Menu.Item key={item.value} value={item.value}>
                {item.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      
    </Menu.Root>
  )
}

const menuItems = [
  { value: "new-file", label: "New File" },
  { value: "new-folder", label: "New Folder" },
  { value: "open", label: "Open..." },
  { value: "open-recent", label: "Open Recent" },
  { value: "save", label: "Save" },
  { value: "save-as", label: "Save As..." },
  { value: "save-all", label: "Save All" },
  { value: "export", label: "Export" },
  { value: "import", label: "Import" },
  { value: "print", label: "Print" },
  { value: "share", label: "Share" },
  { value: "duplicate", label: "Duplicate" },
  { value: "rename", label: "Rename" },
  { value: "move", label: "Move To..." },
  { value: "copy", label: "Copy To..." },
  { value: "delete", label: "Delete" },
  { value: "find", label: "Find" },
  { value: "replace", label: "Replace" },
  { value: "preferences", label: "Preferences" },
  { value: "settings", label: "Settings" },
  { value: "help", label: "Help" },
  { value: "about", label: "About" },
  { value: "quit", label: "Quit" },
]

```

### Hide When Detached

When the menu is rendered in an scrolling container, set the
`positioning.hideWhenDetached` to `true` to hide the menu when the trigger is
scrolled out of view.

```tsx
import { Box, Center, Flex, Menu, Portal, Text } from "@chakra-ui/react"

export const MenuWithHideWhenDetached = () => {
  return (
    
      <Flex
        w="300px"
        h="full"
        overflowX="auto"
        gapX="6"
        p="4"
        borderWidth="1px"
        bg="bg.subtle"
      >
        {[...Array(6).keys()].map((x) => (
          
            Item{x}
          
        ))}
        
          <Menu.Root positioning={{ hideWhenDetached: true }}>
            <Menu.Trigger asChild>
              
                Menu
              
            </Menu.Trigger>
            
              <Menu.Positioner>
                <Menu.Content>
                  <Menu.Item value="new-txt">New Text File</Menu.Item>
                  <Menu.Item value="new-file">New File...</Menu.Item>
                  <Menu.Item value="new-win">New Window</Menu.Item>
                  <Menu.Item value="open-file">Open File...</Menu.Item>
                  <Menu.Item value="export">Export</Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            
          </Menu.Root>
        
      
    
  )
}

```

### Open From Dialog

To use the `Menu` within a `Dialog`, you need to avoid portalling the
`Menu.Positioner` to the document's body.

```diff
-
  <Menu.Positioner>
    <Menu.Content>
      {/* ... */}
    </Menu.Content>
  </Menu.Positioner>
-
```

If you have set `scrollBehavior="inside"` on the `Dialog`, you need to:

- Set the menu positioning to `fixed` to avoid the menu from being clipped by
  the dialog.
- Set `hideWhenDetached` to `true` to hide the menu when the trigger is scrolled
  out of view.

```tsx
<Menu.Root positioning={{ strategy: "fixed", hideWhenDetached: true }}>
  {/* ... */}
</Menu.Root>
```

```tsx
"use client"

import { Button, Dialog, Menu, Portal } from "@chakra-ui/react"
import Lorem from "react-lorem-ipsum"

export const MenuOpenFromDialog = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        
          Open
        
      </Dialog.Trigger>
      
        
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Welcome to the menu</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body spaceY="4">
              
              
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      
    </Dialog.Root>
  )
}

const DialogMenu = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        
          Menu
        
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.Item value="new-txt">New Text File</Menu.Item>
          <Menu.Item value="new-file">New File...</Menu.Item>
          <Menu.Item value="new-win">New Window</Menu.Item>
          <Menu.Item value="open-file">Open File...</Menu.Item>
          <Menu.Item value="export">Export</Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  )
}

```

### Open from Dialog (Nested)

When a `Menu` item opens a `Dialog` that contains another `Menu`, use
`createOverlay` to avoid unexpected close behavior caused by event bubbling.

```tsx
"use client"

import { Button, Dialog, Menu, Portal, createOverlay } from "@chakra-ui/react"

interface DialogProps {
  title: string
  description?: string
  content?: React.ReactNode
}

const dialog = createOverlay((props) => {
  const { title, description, content, ...rest } = props
  return (
    <Dialog.Root {...rest}>
      
        
        <Dialog.Positioner>
          <Dialog.Content>
            {title && (
              <Dialog.Header>
                <Dialog.Title>{title}</Dialog.Title>
              </Dialog.Header>
            )}
            <Dialog.Body spaceY="4">
              {description && (
                <Dialog.Description>{description}</Dialog.Description>
              )}
              {content}
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      
    </Dialog.Root>
  )
})

export const OverlayWithMenuItem = () => {
  return (
    <>
      
      <Menu.Root>
        <Menu.Trigger asChild>
          
            Menu
          
        </Menu.Trigger>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item
              value="more"
              onClick={() =>
                dialog.open("more", {
                  title: "Welcome",
                  description: "Choose an action from the menu below.",
                  content: ,
                })
              }
            >
              Show More
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    </>
  )
}

const ActionsMenu = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        
          More Actions
        
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.Item value="new-txt">New Text File</Menu.Item>
          <Menu.Item value="new-file">New File...</Menu.Item>
          <Menu.Item value="new-win">New Window</Menu.Item>
          <Menu.Item value="open-file">Open File...</Menu.Item>
          <Menu.Item value="export">Export</Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  )
}

```

## Guide

### Styling highlighted items

Use the `_highlighted` prop to style menu items when they are hovered or focused
with keyboard navigation.

```tsx
<Menu.Item _highlighted={{ bg: "blue.500", color: "white" }}>
  Custom highlighted item
</Menu.Item>
```

### Styling open state

Use the `_open` prop to style the menu trigger when the menu is open.

```tsx
<Menu.Trigger asChild>
  Menu
</Menu.Trigger>
```

## Props

### Root

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| closeOnSelect | true | `boolean` | Whether to close the menu when an option is selected |
| composite | true | `boolean` | Whether the menu is a composed with other composite widgets like a combobox or tabs |
| lazyMount | false | `boolean` | Whether to enable lazy mounting |
| loopFocus | false | `boolean` | Whether to loop the keyboard navigation. |
| skipAnimationOnMount | false | `boolean` | Whether to allow the initial presence animation. |
| typeahead | true | `boolean` | Whether the pressing printable characters should trigger typeahead navigation |
| unmountOnExit | false | `boolean` | Whether to unmount on exit. |
| variant | subtle | `'subtle' \| 'solid'` | The variant of the component |
| size | md | `'sm' \| 'md'` | The size of the component |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| unstyled | undefined | `boolean` | Whether to remove the component's style. |
| anchorPoint | undefined | `Point` | The positioning point for the menu. Can be set by the context menu trigger or the button trigger. |
| aria-label | undefined | `string` | The accessibility label for the menu |
| defaultHighlightedValue | undefined | `string` | The initial highlighted value of the menu item when rendered.
Use when you don't need to control the highlighted value of the menu item. |
| defaultOpen | undefined | `boolean` | The initial open state of the menu when rendered.
Use when you don't need to control the open state of the menu. |
| highlightedValue | undefined | `string` | The controlled highlighted value of the menu item. |
| id | undefined | `string` | The unique identifier of the machine. |
| ids | undefined | `Partial<{\n  trigger: string\n  contextTrigger: string\n  content: string\n  groupLabel: (id: string) => string\n  group: (id: string) => string\n  positioner: string\n  arrow: string\n}>` | The ids of the elements in the menu. Useful for composition. |
| immediate | undefined | `boolean` | Whether to synchronize the present change immediately or defer it to the next frame |
| navigate | undefined | `(details: NavigateDetails) => void` | Function to navigate to the selected item if it's an anchor element |
| onEscapeKeyDown | undefined | `(event: KeyboardEvent) => void` | Function called when the escape key is pressed |
| onExitComplete | undefined | `VoidFunction` | Function called when the animation ends in the closed state |
| onFocusOutside | undefined | `(event: FocusOutsideEvent) => void` | Function called when the focus is moved outside the component |
| onHighlightChange | undefined | `(details: HighlightChangeDetails) => void` | Function called when the highlighted menu item changes. |
| onInteractOutside | undefined | `(event: InteractOutsideEvent) => void` | Function called when an interaction happens outside the component |
| onOpenChange | undefined | `(details: OpenChangeDetails) => void` | Function called when the menu opens or closes |
| onPointerDownOutside | undefined | `(event: PointerDownOutsideEvent) => void` | Function called when the pointer is pressed down outside the component |
| onRequestDismiss | undefined | `(event: LayerDismissEvent) => void` | Function called when this layer is closed due to a parent layer being closed |
| onSelect | undefined | `(details: SelectionDetails) => void` | Function called when a menu item is selected. |
| open | undefined | `boolean` | The controlled open state of the menu |
| positioning | undefined | `PositioningOptions` | The options used to dynamically position the menu |
| present | undefined | `boolean` | Whether the node is present (controlled by the user) |

### Item

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| value | undefined | `string` | The unique value of the menu item option. |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| closeOnSelect | undefined | `boolean` | Whether the menu should be closed when the option is selected. |
| disabled | undefined | `boolean` | Whether the menu item is disabled |
| onSelect | undefined | `VoidFunction` | The function to call when the item is selected |
| valueText | undefined | `string` | The textual value of the option. Used in typeahead navigation of the menu.
If not provided, the text content of the menu item will be used. |

## Explorer

Explore the `Menu` component parts interactively. Click on parts in the sidebar
to highlight them in the preview.

<Explorer name="menu-explorer-demo" />
