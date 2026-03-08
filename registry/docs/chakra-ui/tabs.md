# Tabs

```tsx
import { Tabs } from "@chakra-ui/react"
import { LuFolder, LuSquareCheck, LuUser } from "react-icons/lu"

export const TabsBasic = () => {
  return (
    <Tabs.Root defaultValue="members">
      <Tabs.List>
        <Tabs.Trigger value="members">
          <LuUser />
          Members
        </Tabs.Trigger>
        <Tabs.Trigger value="projects">
          <LuFolder />
          Projects
        </Tabs.Trigger>
        <Tabs.Trigger value="tasks">
          <LuSquareCheck />
          Settings
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="members">Manage your team members</Tabs.Content>
      <Tabs.Content value="projects">Manage your projects</Tabs.Content>
      <Tabs.Content value="tasks">
        Manage your tasks for freelancers
      </Tabs.Content>
    </Tabs.Root>
  )
}

```

## Usage

```jsx
import { Tabs } from "@chakra-ui/react"
```

```jsx
<Tabs.Root>
  <Tabs.List>
    <Tabs.Trigger />
    <Tabs.Indicator />
  </Tabs.List>
  <Tabs.Content />
</Tabs.Root>
```

## Examples

### Variants

Use the `variant` prop to change the visual style of the tabs.

```tsx
import { For, SimpleGrid, Tabs } from "@chakra-ui/react"
import { LuFolder, LuSquareCheck, LuUser } from "react-icons/lu"

export const TabsWithVariants = () => {
  return (
    <SimpleGrid columns={2} gap="14" width="full">
      <For each={["line", "subtle", "enclosed", "outline", "plain"]}>
        {(variant) => (
          <Tabs.Root key={variant} defaultValue="members" variant={variant}>
            <Tabs.List>
              <Tabs.Trigger value="members">
                <LuUser />
                Members
              </Tabs.Trigger>
              <Tabs.Trigger value="projects">
                <LuFolder />
                Projects
              </Tabs.Trigger>
              <Tabs.Trigger value="tasks">
                <LuSquareCheck />
                Settings
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="members">
              Manage your team members
            </Tabs.Content>
            <Tabs.Content value="projects">Manage your projects</Tabs.Content>
            <Tabs.Content value="tasks">
              Manage your tasks for freelancers
            </Tabs.Content>
          </Tabs.Root>
        )}
      </For>
    </SimpleGrid>
  )
}

```

### Lazy Mounted

Use the `lazyMount` and/or `unmountOnExit` prop to only render the tab content
when it is active. This can be useful for performance optimization.

```tsx
"use client"

import { Tabs } from "@chakra-ui/react"
import { useEffect, useState } from "react"

export const TabsLazyMounted = () => {
  return (
    <Tabs.Root lazyMount unmountOnExit defaultValue="tab-1">
      <Tabs.List>
        <Tabs.Trigger value="tab-1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger value="tab-2">Tab 2</Tabs.Trigger>
        <Tabs.Trigger value="tab-3">Tab 3</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab-1">
        Tab 1: Content <TickValue />
      </Tabs.Content>
      <Tabs.Content value="tab-2">
        Tab 2: Content <TickValue />
      </Tabs.Content>
      <Tabs.Content value="tab-3">
        Tab 3: Content <TickValue />
      </Tabs.Content>
    </Tabs.Root>
  )
}

const TickValue = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setValue((v) => v + 1)
    }, 1000)
    return () => {
      window.clearInterval(intervalId)
    }
  }, [])

  return (
    <span style={{ fontWeight: "bold", color: "tomato", padding: 4 }}>
      {value}
    </span>
  )
}

```

### Indicator

Render the `Tabs.Indicator` component to display a visual indicator of the
active tab.

```tsx
import { Tabs } from "@chakra-ui/react"
import { LuFolder, LuSquareCheck, LuUser } from "react-icons/lu"

export const TabsWithIndicator = () => {
  return (
    <Tabs.Root defaultValue="members" variant="plain">
      <Tabs.List bg="bg.muted" rounded="l3" p="1">
        <Tabs.Trigger value="members">
          <LuUser />
          Members
        </Tabs.Trigger>
        <Tabs.Trigger value="projects">
          <LuFolder />
          Projects
        </Tabs.Trigger>
        <Tabs.Trigger value="tasks">
          <LuSquareCheck />
          Settings
        </Tabs.Trigger>
        <Tabs.Indicator rounded="l2" />
      </Tabs.List>
      <Tabs.Content value="members">Manage your team members</Tabs.Content>
      <Tabs.Content value="projects">Manage your projects</Tabs.Content>
      <Tabs.Content value="tasks">
        Manage your tasks for freelancers
      </Tabs.Content>
    </Tabs.Root>
  )
}

```

### Custom Indicator

Customize the indicator appearance using CSS variables like
`--tabs-indicator-bg` and `--tabs-indicator-shadow`.

```tsx
import { Tabs } from "@chakra-ui/react"

export const TabsWithCustomIndicator = () => {
  return (
    <Tabs.Root
      defaultValue="members"
      variant="plain"
      css={{
        "--tabs-indicator-bg": "colors.gray.subtle",
        "--tabs-indicator-shadow": "shadows.xs",
        "--tabs-trigger-radius": "radii.full",
      }}
    >
      <Tabs.List>
        <Tabs.Trigger value="members">Members</Tabs.Trigger>
        <Tabs.Trigger value="projects">Projects</Tabs.Trigger>
        <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Content value="members">Manage your team members</Tabs.Content>
      <Tabs.Content value="projects">Manage your projects</Tabs.Content>
      <Tabs.Content value="settings">Manage your settings</Tabs.Content>
    </Tabs.Root>
  )
}

```

### Links

Pass the `asChild` to the `Tabs.Trigger` component to render a link as a tab.
When a tab is clicked, the link will be navigated to.

```tsx
import { Link, Tabs } from "@chakra-ui/react"

export const TabsWithLinks = () => {
  return (
    <Tabs.Root defaultValue="members">
      <Tabs.List>
        <Tabs.Trigger value="members" asChild>
          <Link unstyled href="#members">
            Members
          </Link>
        </Tabs.Trigger>
        <Tabs.Trigger value="projects" asChild>
          <Link unstyled href="#projects">
            Projects
          </Link>
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="members">Manage your team members</Tabs.Content>
      <Tabs.Content value="projects">Manage your projects</Tabs.Content>
    </Tabs.Root>
  )
}

```

When using custom router links, you need to set the `navigate` prop on the
`Tabs.Root` component.

```tsx
"use client"

import { Tabs } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

const Demo = () => {
  const navigate = useNavigate()
  return (
    <Tabs.Root navigate={({ value, node }) => navigate(`/${value}`)}>
      {/* ... */}
    </Tabs.Root>
  )
}
```

### Fitted

Use the `fitted` prop to make the tabs fit the width of the container.

```tsx
import { Tabs } from "@chakra-ui/react"

export const TabsWithFitted = () => {
  return (
    <Tabs.Root variant="enclosed" maxW="md" fitted defaultValue={"tab-1"}>
      <Tabs.List>
        <Tabs.Trigger value="tab-1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger value="tab-2">Tab 2</Tabs.Trigger>
        <Tabs.Trigger value="tab-3">Tab 3</Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  )
}

```

### Controlled

Use the `value` and `onValueChange` prop to control the active tab.

```tsx
"use client"

import { Tabs } from "@chakra-ui/react"
import { useState } from "react"

export const TabsControlled = () => {
  const [value, setValue] = useState<string | null>("first")

  return (
    <Tabs.Root value={value} onValueChange={(e) => setValue(e.value)}>
      <Tabs.List>
        <Tabs.Trigger value="first">First tab</Tabs.Trigger>
        <Tabs.Trigger value="second">Second tab</Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="first">First panel</Tabs.Content>
      <Tabs.Content value="second">Second panel</Tabs.Content>
    </Tabs.Root>
  )
}

```

### Store

An alternative way to control the tabs is to use the `RootProvider` component
and the `useTabs` store hook.

This way you can access the tabs state and methods from outside the tabs.

```tsx
"use client"

import { Code, Stack, Tabs, useTabs } from "@chakra-ui/react"
import { LuFolder, LuSquareCheck, LuUser } from "react-icons/lu"

export const TabsWithStore = () => {
  const tabs = useTabs({
    defaultValue: "members",
  })

  return (
    <Stack align="flex-start">
      <Code>selected: {tabs.value}</Code>
      <Tabs.RootProvider value={tabs}>
        <Tabs.List>
          <Tabs.Trigger value="members">
            <LuUser />
            Members
          </Tabs.Trigger>
          <Tabs.Trigger value="projects">
            <LuFolder />
            Projects
          </Tabs.Trigger>
          <Tabs.Trigger value="tasks">
            <LuSquareCheck />
            Tasks
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="members">Manage your team members</Tabs.Content>
        <Tabs.Content value="projects">Manage your projects</Tabs.Content>
        <Tabs.Content value="tasks">
          Manage your tasks for freelancers
        </Tabs.Content>
      </Tabs.RootProvider>
    </Stack>
  )
}

```

### Disabled Tab

Set the `disabled` prop on the `Tabs.Trigger` component to disable a tab.

```tsx
import { Tabs } from "@chakra-ui/react"
import { LuFolder, LuSquareCheck, LuUser } from "react-icons/lu"

export const TabsWithDisabledTab = () => {
  return (
    <Tabs.Root defaultValue="members">
      <Tabs.List>
        <Tabs.Trigger value="members">
          <LuUser />
          Members
        </Tabs.Trigger>
        <Tabs.Trigger value="projects" disabled>
          <LuFolder />
          Projects
        </Tabs.Trigger>
        <Tabs.Trigger value="tasks">
          <LuSquareCheck />
          Settings
        </Tabs.Trigger>
      </Tabs.List>
      {/* content */}
    </Tabs.Root>
  )
}

```

### Manual activation

By default, the tabs are selected when the arrow keys are pressed. Disable this
behavior by setting the `activationBehavior` prop to `manual`.

In this mode, the tabs will only be selected when clicked or the enter key is
pressed.

```tsx
import { Tabs } from "@chakra-ui/react"
import { LuFolder, LuSquareCheck, LuUser } from "react-icons/lu"

export const TabsWithManualActivation = () => {
  return (
    <Tabs.Root defaultValue="members" activationMode="manual">
      <Tabs.List>
        <Tabs.Trigger value="members">
          <LuUser />
          Members
        </Tabs.Trigger>
        <Tabs.Trigger value="projects" disabled>
          <LuFolder />
          Projects
        </Tabs.Trigger>
        <Tabs.Trigger value="tasks">
          <LuSquareCheck />
          Settings
        </Tabs.Trigger>
      </Tabs.List>
      {/* content */}
    </Tabs.Root>
  )
}

```

### Dynamic

Here's an example of how to dynamically add and remove tabs.

```tsx
"use client"

import { Button, CloseButton, Heading, Tabs, Text } from "@chakra-ui/react"
import { useState } from "react"
import { LuPlus } from "react-icons/lu"

interface Item {
  id: string
  title: string
  content: React.ReactNode
}

const items: Item[] = [
  { id: "1", title: "Tab", content: "Tab Content" },
  { id: "2", title: "Tab", content: "Tab Content" },
  { id: "3", title: "Tab", content: "Tab Content" },
  { id: "4", title: "Tab", content: "Tab Content" },
]

const uuid = () => {
  return Math.random().toString(36).substring(2, 15)
}

export const TabsWithDynamicAdd = () => {
  const [tabs, setTabs] = useState<Item[]>(items)
  const [selectedTab, setSelectedTab] = useState<string | null>(items[0].id)

  const addTab = () => {
    const newTabs = [...tabs]

    const uid = uuid()

    newTabs.push({
      id: uid,
      title: `Tab`,
      content: `Tab Body`,
    })

    setTabs(newTabs)
    setSelectedTab(newTabs[newTabs.length - 1].id)
  }

  const removeTab = (id: string) => {
    if (tabs.length > 1) {
      const newTabs = [...tabs].filter((tab) => tab.id !== id)
      setTabs(newTabs)
    }
  }

  return (
    <Tabs.Root
      value={selectedTab}
      variant="outline"
      size="sm"
      onValueChange={(e) => setSelectedTab(e.value)}
    >
      <Tabs.List flex="1 1 auto">
        {tabs.map((item) => (
          <Tabs.Trigger value={item.id} key={item.id}>
            {item.title}{" "}
            <CloseButton
              as="span"
              role="button"
              size="2xs"
              me="-2"
              onClick={(e) => {
                e.stopPropagation()
                removeTab(item.id)
              }}
            />
          </Tabs.Trigger>
        ))}
        <Button
          alignSelf="center"
          ms="2"
          size="2xs"
          variant="ghost"
          onClick={addTab}
        >
          <LuPlus /> Add Tab
        </Button>
      </Tabs.List>

      <Tabs.ContentGroup>
        {tabs.map((item) => (
          <Tabs.Content value={item.id} key={item.id}>
            <Heading size="xl" my="6">
              {item.content} {item.id}
            </Heading>
            <Text>
              Dolore ex esse laboris elit magna esse sunt. Pariatur in veniam
              Lorem est occaecat do magna nisi mollit ipsum sit adipisicing
              fugiat ex. Pariatur ullamco exercitation ea qui adipisicing. Id
              cupidatat aute id ut excepteur exercitation magna pariatur. Mollit
              irure irure reprehenderit pariatur eiusmod proident Lorem deserunt
              duis cillum mollit.
            </Text>
          </Tabs.Content>
        ))}
      </Tabs.ContentGroup>
    </Tabs.Root>
  )
}

```

### Responsive Orientation

Responsive values are not supported for the `orientation` prop because it
affects keyboard navigation and `aria-orientation` behavior, not just styling.
The orientation changes how arrow keys work (horizontal uses left/right,
vertical uses up/down).

To achieve responsive orientation, use the `useBreakpointValue` hook to change
the orientation based on the screen size.

```tsx
"use client"

import { Tabs, useBreakpointValue } from "@chakra-ui/react"

export const TabsWithResponsiveOrientation = () => {
  const orientation = useBreakpointValue<"horizontal" | "vertical">({
    base: "horizontal",
    md: "vertical",
  })

  return (
    <Tabs.Root
      variant="subtle"
      defaultValue="members"
      orientation={orientation}
    >
      <Tabs.List>
        <Tabs.Trigger value="members">Members</Tabs.Trigger>
        <Tabs.Trigger value="projects">Projects</Tabs.Trigger>
        <Tabs.Trigger value="tasks">Settings</Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="members">
        Manage your team members and their roles here.
      </Tabs.Content>

      <Tabs.Content value="projects">
        Manage your projects and their status here.
      </Tabs.Content>

      <Tabs.Content value="tasks">
        Manage your tasks and their progress here.
      </Tabs.Content>
    </Tabs.Root>
  )
}

```

### Animation

Use the `_open` and `_close` conditional props to animate the tabs.

```tsx
import { Box, Tabs } from "@chakra-ui/react"

const items = [
  {
    title: "1",
    content: "Dolore ex esse laboris elit magna esse sunt",
  },
  {
    title: "2",
    content:
      "Pariatur in veniam Lorem est occaecat do magna nisi mollit ipsum sit adipisicing fugiat ex.",
  },
]

export const TabsWithAnimation = () => {
  return (
    <Tabs.Root defaultValue="1" width="full">
      <Tabs.List>
        {items.map((item, index) => (
          <Tabs.Trigger key={index} value={item.title}>
            Tab {item.title}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      <Box pos="relative" minH="200px" width="full">
        {items.map((item, index) => (
          <Tabs.Content
            key={index}
            value={item.title}
            position="absolute"
            inset="0"
            _open={{
              animationName: "fade-in, scale-in",
              animationDuration: "300ms",
            }}
            _closed={{
              animationName: "fade-out, scale-out",
              animationDuration: "120ms",
            }}
          >
            {item.content}
          </Tabs.Content>
        ))}
      </Box>
    </Tabs.Root>
  )
}

```

## Guide

### Styling active tab

Use the `_selected` condition to style the active tab's text and background.

```tsx
<Tabs.Trigger
  _selected={{
    bg: "blue.500",
    color: "white",
  }}
>
  Tab
</Tabs.Trigger>
```

## Props

### Root

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| activationMode | "automatic" | `'manual' \| 'automatic'` | The activation mode of the tabs. Can be `manual` or `automatic`

- `manual`: Tabs are activated when clicked or press `enter` key.
- `automatic`: Tabs are activated when receiving focus |
  | lazyMount | false | `boolean` | Whether to enable lazy mounting |
  | loopFocus | true | `boolean` | Whether the keyboard navigation will loop from last tab to first, and vice versa. |
  | orientation | "horizontal" | `'horizontal' \| 'vertical'` | The orientation of the tabs. Can be `horizontal` or `vertical`
- `horizontal`: only left and right arrow key navigation will work.
- `vertical`: only up and down arrow key navigation will work. |
  | unmountOnExit | false | `boolean` | Whether to unmount on exit. |
  | colorPalette | gray | `'gray' \| 'red' \| 'orange' \| 'yellow' \| 'green' \| 'teal' \| 'blue' \| 'cyan' \| 'purple' \| 'pink'` | The color palette of the component |
  | size | md | `'sm' \| 'md' \| 'lg'` | The size of the component |
  | variant | line | `'line' \| 'subtle' \| 'enclosed' \| 'outline' \| 'plain'` | The variant of the component |
  | as | undefined | `React.ElementType` | The underlying element to render. |
  | asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
  | unstyled | undefined | `boolean` | Whether to remove the component's style. |
  | composite | undefined | `boolean` | Whether the tab is composite |
  | defaultValue | undefined | `string` | The initial selected tab value when rendered.
  Use when you don't need to control the selected tab value. |
  | deselectable | undefined | `boolean` | Whether the active tab can be deselected when clicking on it. |
  | id | undefined | `string` | The unique identifier of the machine. |
  | ids | undefined | `Partial<{\n  root: string\n  trigger: (value: string) => string\n  list: string\n  content: (value: string) => string\n  indicator: string\n}>` | The ids of the elements in the tabs. Useful for composition. |
  | navigate | undefined | `(details: NavigateDetails) => void` | Function to navigate to the selected tab when clicking on it.
  Useful if tab triggers are anchor elements. |
  | onFocusChange | undefined | `(details: FocusChangeDetails) => void` | Callback to be called when the focused tab changes |
  | onValueChange | undefined | `(details: ValueChangeDetails) => void` | Callback to be called when the selected/active tab changes |
  | translations | undefined | `IntlTranslations` | Specifies the localized strings that identifies the accessibility elements and their states |
  | value | undefined | `string` | The controlled selected tab value |
  | fitted | undefined | `'true' \| 'false'` | The fitted of the component |
  | justify | undefined | `'start' \| 'center' \| 'end'` | The justify of the component |

### Trigger

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |

### Content

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |

## Explorer

Explore the `Tabs` component parts interactively. Click on parts in the sidebar
to highlight them in the preview.
