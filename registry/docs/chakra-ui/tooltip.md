# Tooltip

```tsx
import { Button } from "@chakra-ui/react"
import { Tooltip } from "@/components/ui/tooltip"

export const TooltipBasic = () => {
  return (
    <Tooltip content="This is the tooltip content">
      <Button variant="outline" size="sm">
        Hover me
      </Button>
    </Tooltip>
  )
}

```

## Setup

For ease of use, create a closed component composition for the `Tooltip`
component.

Alternatively, you can add it to your project using the following command.

```sh
npx @chakra-ui/cli snippet add tooltip
```

## Usage

```jsx
import { Tooltip } from "@/components/ui/tooltip"
```

```jsx
<Tooltip content="...">
  <button />
</Tooltip>
```

## Examples

### Arrow

Use the `showArrow` prop to show an arrow on the tooltip.

```tsx
import { Button } from "@chakra-ui/react"
import { Tooltip } from "@/components/ui/tooltip"

export const TooltipWithArrow = () => {
  return (
    <Tooltip showArrow content="This is the tooltip content">
      <Button variant="outline" size="sm">
        Hover me
      </Button>
    </Tooltip>
  )
}

```

### Placement

Use the `positioning.placement` prop to change the position of the tooltip.

```tsx
import { Button } from "@chakra-ui/react"
import { Tooltip } from "@/components/ui/tooltip"

export const TooltipWithPlacement = () => {
  return (
    <Tooltip
      content="This is the tooltip content"
      positioning={{ placement: "right-end" }}
    >
      <Button variant="outline" size="sm">
        Hover me
      </Button>
    </Tooltip>
  )
}

```

### Offset

Use the `positioning.offset` prop to change the offset of the tooltip.

```tsx
import { Button } from "@chakra-ui/react"
import { Tooltip } from "@/components/ui/tooltip"

export const TooltipWithOffset = () => {
  return (
    <Tooltip
      content="This is the tooltip content"
      positioning={{ offset: { mainAxis: 4, crossAxis: 4 } }}
    >
      <Button variant="outline" size="sm">
        Hover me
      </Button>
    </Tooltip>
  )
}

```

### Delay

Use the `openDelay` and `closeDelay` prop to change the delay of the tooltip.

```tsx
import { Button } from "@chakra-ui/react"
import { Tooltip } from "@/components/ui/tooltip"

export const TooltipWithDelay = () => {
  return (
    <Tooltip
      content="This is the tooltip content"
      openDelay={500}
      closeDelay={100}
    >
      <Button variant="outline" size="sm">
        Delay (open: 500ms, close: 100ms)
      </Button>
    </Tooltip>
  )
}

```

### Custom Background

Use the `--tooltip-bg` CSS variable to change the background color of the
tooltip.

```tsx
import { Button } from "@chakra-ui/react"
import { Tooltip } from "@/components/ui/tooltip"
import { FaBell } from "react-icons/fa"

export const TooltipWithCustomBg = () => (
  <Tooltip
    showArrow
    content="This is the tooltip content"
    contentProps={{ css: { "--tooltip-bg": "tomato" } }}
  >
    <Button variant="outline" size="sm">
      <FaBell /> 3
    </Button>
  </Tooltip>
)

```

### Controlled

Use the `open` and `onOpenChange` prop to control the visibility of the tooltip.

```tsx
"use client"

import { Button } from "@chakra-ui/react"
import { Tooltip } from "@/components/ui/tooltip"
import { useState } from "react"

export const TooltipControlled = () => {
  const [open, setOpen] = useState(false)
  return (
    <Tooltip
      content="Tooltip Content"
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
    >
      <Button size="sm">{open ? "Hide" : "Show"} tooltip</Button>
    </Tooltip>
  )
}

```

### Store

An alternative way to control the tooltip is to use the `RootProvider` component
and the `useTooltip` store hook.

This way you can access the tooltip state and methods from outside the tooltip.

```tsx
"use client"

import { Button, HStack, Tooltip, useTooltip } from "@chakra-ui/react"

export const TooltipWithStore = () => {
  const tooltip = useTooltip()
  const toggleOpen = () => tooltip.setOpen(!tooltip.open)
  return (
    <HStack>
      <Button size="sm" variant="subtle" onClick={toggleOpen}>
        Toggle
      </Button>
      <Tooltip.RootProvider value={tooltip}>
        <Tooltip.Trigger asChild>
          <Button variant="outline">Tooltip Target</Button>
        </Tooltip.Trigger>
        <Tooltip.Positioner>
          <Tooltip.Content>This is the tooltip content</Tooltip.Content>
        </Tooltip.Positioner>
      </Tooltip.RootProvider>
    </HStack>
  )
}

```

### Interactive

Use the `interactive` prop to keep the tooltip open when interacting with its
content.

```tsx
import { Button } from "@chakra-ui/react"
import { Tooltip } from "@/components/ui/tooltip"

export const TooltipWithInteractive = () => {
  return (
    <Tooltip content="This is the tooltip content" interactive>
      <Button variant="outline" size="sm">
        Hover me
      </Button>
    </Tooltip>
  )
}

```

### Disabled

Use the `disabled` prop to disable the tooltip. When disabled, the tooltip will
not be shown.

```tsx
import { Button } from "@chakra-ui/react"
import { Tooltip } from "@/components/ui/tooltip"

export const TooltipWithDisabled = () => {
  return (
    <Tooltip content="This is the tooltip content" disabled>
      <Button variant="outline" size="sm">
        Hover me
      </Button>
    </Tooltip>
  )
}

```

### With Avatar

Here's an example of how to use the `Tooltip` component with an `Avatar`
component.

```tsx
import { Avatar } from "@chakra-ui/react"
import { Tooltip } from "@/components/ui/tooltip"
import { useId } from "react"

export const TooltipWithAvatar = () => {
  const id = useId()
  return (
    <Tooltip ids={{ trigger: id }} content="Segun Adebayo is online">
      <Avatar.Root ids={{ root: id }}>
        <Avatar.Image src="https://bit.ly/sage-adebayo" />
        <Avatar.Fallback name="Segun Adebayo" />
      </Avatar.Root>
    </Tooltip>
  )
}

```

### With Checkbox

Here's an example of how to use the `Tooltip` component with a `Checkbox`
component.

```tsx
import { Checkbox } from "@chakra-ui/react"
import { Tooltip } from "@/components/ui/tooltip"
import { useId } from "react"

export const TooltipWithCheckbox = () => {
  const id = useId()
  return (
    <Tooltip ids={{ trigger: id }} content="This is the tooltip content">
      <Checkbox.Root ids={{ root: id }}>
        <Checkbox.HiddenInput />
        <Checkbox.Control />
        <Checkbox.Label>Welcome</Checkbox.Label>
      </Checkbox.Root>
    </Tooltip>
  )
}

```

### With MenuItem

Here's an example of how to use the `Tooltip` with a `MenuItem` component.

```tsx
import { Button, Menu, Portal, Show } from "@chakra-ui/react"
import { Tooltip } from "@/components/ui/tooltip"

export const TooltipWithMenuItem = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Open
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <MenuItem value="new-txt" title="This is the tooltip content">
              Open tooltip
            </MenuItem>
            <MenuItem value="new-file">New File...</MenuItem>
            <MenuItem value="new-win">New Window</MenuItem>
            <MenuItem value="export">Export</MenuItem>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

const MenuItem = (props: Menu.ItemProps) => {
  const { value, title, ...rest } = props
  return (
    <Show when={title} fallback={<Menu.Item value={value} {...rest} />}>
      <Tooltip
        ids={{ trigger: value }}
        openDelay={200}
        closeDelay={0}
        positioning={{ placement: "right" }}
        content={title}
      >
        <Menu.Item value={value} {...rest} />
      </Tooltip>
    </Show>
  )
}

```

### With MenuTrigger

Here's an example of how to use the `Tooltip` with a `MenuTrigger` component.

```tsx
"use client"

import { Button, Menu, Portal } from "@chakra-ui/react"
import { Tooltip } from "@/components/ui/tooltip"
import { useId } from "react"

export const TooltipWithMenuTrigger = () => {
  const triggerId = useId()
  return (
    <Menu.Root ids={{ trigger: triggerId }}>
      <Tooltip
        ids={{ trigger: triggerId }}
        positioning={{ placement: "top" }}
        content="Tooltip content"
      >
        <Menu.Trigger asChild>
          <Button variant="outline" size="sm">
            Open
          </Button>
        </Menu.Trigger>
      </Tooltip>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="new-txt">Open tooltip</Menu.Item>
            <Menu.Item value="new-file">New File...</Menu.Item>
            <Menu.Item value="new-win">New Window</Menu.Item>
            <Menu.Item value="export">Export</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

```

### With Switch

Here's an example of how to wrap `Tooltip` around a `Switch` component.

```tsx
import { Switch } from "@chakra-ui/react"
import { Tooltip } from "@/components/ui/tooltip"
import { useId } from "react"

export const TooltipWithSwitch = () => {
  const id = useId()
  return (
    <Tooltip ids={{ trigger: id }} content="This is the tooltip content">
      <Switch.Root ids={{ root: id }}>
        <Switch.HiddenInput />
        <Switch.Control />
        <Switch.Label>Toggle</Switch.Label>
      </Switch.Root>
    </Tooltip>
  )
}

```

### With Tabs

Here's an example of how to wrap `Tooltip` around a `Tabs` component.

```tsx
import { Tabs } from "@chakra-ui/react"
import { Tooltip } from "@/components/ui/tooltip"
import { LuFolder, LuSquareCheck, LuUser } from "react-icons/lu"

export const TooltipWithTab = () => {
  return (
    <Tabs.Root defaultValue="members">
      <Tabs.List>
        <Tooltip
          positioning={{ placement: "top" }}
          ids={{ trigger: "members" }}
          content="This is the tooltip content"
        >
          {/* TODO: Remove this once Zag.js is fixed */}
          <span>
            <Tabs.Trigger value="members">
              <LuUser />
              Members
            </Tabs.Trigger>
          </span>
        </Tooltip>
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

## Props

### Root

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| closeDelay | 150 | `number` | The close delay of the tooltip. |
| closeOnClick | true | `boolean` | Whether the tooltip should close on click |
| closeOnEscape | true | `boolean` | Whether to close the tooltip when the Escape key is pressed. |
| closeOnPointerDown | true | `boolean` | Whether to close the tooltip on pointerdown. |
| closeOnScroll | true | `boolean` | Whether the tooltip should close on scroll |
| interactive | false | `boolean` | Whether the tooltip's content is interactive.
In this mode, the tooltip will remain open when user hovers over the content. |
| lazyMount | false | `boolean` | Whether to enable lazy mounting |
| openDelay | 400 | `number` | The open delay of the tooltip. |
| skipAnimationOnMount | false | `boolean` | Whether to allow the initial presence animation. |
| unmountOnExit | false | `boolean` | Whether to unmount on exit. |
| as | undefined | `React.ElementType` | The underlying element to render. |
| asChild | undefined | `boolean` | Use the provided child element as the default rendered element, combining their props and behavior. |
| unstyled | undefined | `boolean` | Whether to remove the component's style. |
| aria-label | undefined | `string` | Custom label for the tooltip. |
| defaultOpen | undefined | `boolean` | The initial open state of the tooltip when rendered.
Use when you don't need to control the open state of the tooltip. |
| disabled | undefined | `boolean` | Whether the tooltip is disabled |
| id | undefined | `string` | The unique identifier of the machine. |
| ids | undefined | `Partial<{ trigger: string; content: string; arrow: string; positioner: string }>` | The ids of the elements in the tooltip. Useful for composition. |
| immediate | undefined | `boolean` | Whether to synchronize the present change immediately or defer it to the next frame |
| onExitComplete | undefined | `VoidFunction` | Function called when the animation ends in the closed state |
| onOpenChange | undefined | `(details: OpenChangeDetails) => void` | Function called when the tooltip is opened. |
| open | undefined | `boolean` | The controlled open state of the tooltip |
| positioning | undefined | `PositioningOptions` | The user provided options used to position the popover content |
| present | undefined | `boolean` | Whether the node is present (controlled by the user) |

## Explorer

Explore the `Tooltip` component parts interactively. Click on parts in the
sidebar to highlight them in the preview.
