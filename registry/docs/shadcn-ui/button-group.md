Sections

- [Introduction](/docs)
- [Components](/docs/components)
- [Installation](/docs/installation)
- [Theming](/docs/theming)
- [CLI](/docs/cli)
- [RTL](/docs/rtl)
- [Skills](/docs/skills)
- [MCP Server](/docs/mcp)
- [Registry](/docs/registry)
- [Forms](/docs/forms)
- [Changelog](/docs/changelog)

Components

- [Accordion](/docs/components/radix/accordion)
- [Alert](/docs/components/radix/alert)
- [Alert Dialog](/docs/components/radix/alert-dialog)
- [Aspect Ratio](/docs/components/radix/aspect-ratio)
- [Avatar](/docs/components/radix/avatar)
- [Badge](/docs/components/radix/badge)
- [Breadcrumb](/docs/components/radix/breadcrumb)
- [Button](/docs/components/radix/button)
- [Button Group](/docs/components/radix/button-group)
- [Calendar](/docs/components/radix/calendar)
- [Card](/docs/components/radix/card)
- [Carousel](/docs/components/radix/carousel)
- [Chart](/docs/components/radix/chart)
- [Checkbox](/docs/components/radix/checkbox)
- [Collapsible](/docs/components/radix/collapsible)
- [Combobox](/docs/components/radix/combobox)
- [Command](/docs/components/radix/command)
- [Context Menu](/docs/components/radix/context-menu)
- [Data Table](/docs/components/radix/data-table)
- [Date Picker](/docs/components/radix/date-picker)
- [Dialog](/docs/components/radix/dialog)
- [Direction](/docs/components/radix/direction)
- [Drawer](/docs/components/radix/drawer)
- [Dropdown Menu](/docs/components/radix/dropdown-menu)
- [Empty](/docs/components/radix/empty)
- [Field](/docs/components/radix/field)
- [Hover Card](/docs/components/radix/hover-card)
- [Input](/docs/components/radix/input)
- [Input Group](/docs/components/radix/input-group)
- [Input OTP](/docs/components/radix/input-otp)
- [Item](/docs/components/radix/item)
- [Kbd](/docs/components/radix/kbd)
- [Label](/docs/components/radix/label)
- [Menubar](/docs/components/radix/menubar)
- [Native Select](/docs/components/radix/native-select)
- [Navigation Menu](/docs/components/radix/navigation-menu)
- [Pagination](/docs/components/radix/pagination)
- [Popover](/docs/components/radix/popover)
- [Progress](/docs/components/radix/progress)
- [Radio Group](/docs/components/radix/radio-group)
- [Resizable](/docs/components/radix/resizable)
- [Scroll Area](/docs/components/radix/scroll-area)
- [Select](/docs/components/radix/select)
- [Separator](/docs/components/radix/separator)
- [Sheet](/docs/components/radix/sheet)
- [Sidebar](/docs/components/radix/sidebar)
- [Skeleton](/docs/components/radix/skeleton)
- [Slider](/docs/components/radix/slider)
- [Sonner](/docs/components/radix/sonner)
- [Spinner](/docs/components/radix/spinner)
- [Switch](/docs/components/radix/switch)
- [Table](/docs/components/radix/table)
- [Tabs](/docs/components/radix/tabs)
- [Textarea](/docs/components/radix/textarea)
- [Toast](/docs/components/radix/toast)
- [Toggle](/docs/components/radix/toggle)
- [Toggle Group](/docs/components/radix/toggle-group)
- [Tooltip](/docs/components/radix/tooltip)
- [Typography](/docs/components/radix/typography)

Get Started

- [Installation](/docs/installation)
- [components.json](/docs/components-json)
- [Theming](/docs/theming)
- [Dark Mode](/docs/dark-mode)
- [CLI](/docs/cli)
- [Monorepo](/docs/monorepo)
- [Skills](/docs/skills)
- [Open in v0](/docs/v0)
- [JavaScript](/docs/javascript)
- [Figma](/docs/figma)
- [llms.txt](/llms.txt)
- [Legacy Docs](/docs/legacy)

Forms

- [React Hook Form](/docs/forms/react-hook-form)
- [TanStack Form](/docs/forms/tanstack-form)

Registry

- [Introduction](/docs/registry)
- [Getting Started](/docs/registry/getting-started)
- [Namespaces](/docs/registry/namespace)
- [Authentication](/docs/registry/authentication)
- [Examples](/docs/registry/examples)
- [MCP Server](/docs/registry/mcp)
- [Add a Registry](/docs/registry/registry-index)
- [Open in v0](/docs/registry/open-in-v0)
- [registry.json](/docs/registry/registry-json)
- [registry-item.json](/docs/registry/registry-item-json)

# Button Group

Copy Page

[Previous](/docs/components/radix/button)[Next](/docs/components/radix/calendar)

A container that groups related buttons together with consistent styling.

[Radix UI](/docs/components/radix/button-group)[Base UI](/docs/components/base/button-group)

Radix UI

ArchiveReport

Snooze

Copy

```
"use client"

import * as React from "react"
```

View Code

## Installation

CommandManual

pnpmnpmyarnbun

```
pnpm dlx shadcn@latest add button-group
```

Copy

## Usage

Copy`import {   ButtonGroup,   ButtonGroupSeparator,   ButtonGroupText, } from "@/components/ui/button-group"`

Copy`<ButtonGroup>   <Button>Button 1</Button>   <Button>Button 2</Button> </ButtonGroup>`

## Accessibility

- The `ButtonGroup` component has the `role` attribute set to `group`.
- Use Tab to navigate between the buttons in the group.
- Use `aria-label` or `aria-labelledby` to label the button group.

Copy`<ButtonGroup aria-label="Button group">   <Button>Button 1</Button>   <Button>Button 2</Button> </ButtonGroup>`

## ButtonGroup vs ToggleGroup

- Use the `ButtonGroup` component when you want to group buttons that perform an action.
- Use the `ToggleGroup` component when you want to group buttons that toggle a state.

## Examples

### Orientation

Set the `orientation` prop to change the button group layout.

Copy

```
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { MinusIcon, PlusIcon } from "lucide-react"
```

View Code

### Size

Control the size of buttons using the `size` prop on individual buttons.

SmallButtonGroup

DefaultButtonGroup

LargeButtonGroup

Copy

```
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { PlusIcon } from "lucide-react"
```

View Code

### Nested

Nest `<ButtonGroup>` components to create button groups with spacing.

Copy

```
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"
```

View Code

### Separator

The `ButtonGroupSeparator` component visually divides buttons within a group.

Buttons with variant `outline` do not need a separator since they have a border. For other variants, a separator is recommended to improve the visual hierarchy.

Copy

Paste

Copy

```
import { Button } from "@/components/ui/button"
import {
  ButtonGroup,
```

View Code

### Split

Create a split button group by adding two buttons separated by a `ButtonGroupSeparator`.

Button

Copy

```
import { Button } from "@/components/ui/button"
import {
  ButtonGroup,
```

View Code

### Input

Wrap an `Input` component with buttons.

Copy

```
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"
```

View Code

### Input Group

Wrap an `InputGroup` component to create complex input layouts.

Copy

```
"use client"

import * as React from "react"
```

View Code

### Dropdown Menu

Create a split button group with a `DropdownMenu` component.

Follow

Copy

```
"use client"

import { Button } from "@/components/ui/button"
```

View Code

### Select

Pair with a `Select` component.

$

Copy

```
"use client"

import * as React from "react"
```

View Code

### Popover

Use with a `Popover` component.

Copilot

Copy

```
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
```

View Code

## RTL

To enable RTL support in shadcn/ui, see the [RTL configuration guide](/docs/rtl).

Arabic (العربية)▼Toggle

أرشفةتقرير

تأجيل

Copy

```
"use client"

import * as React from "react"
```

View Code

## API Reference

### ButtonGroup

The `ButtonGroup` component is a container that groups related buttons together with consistent styling.

Prop

Type

Default

`orientation`

`"horizontal" | "vertical"`

`"horizontal"`

Copy`<ButtonGroup>   <Button>Button 1</Button>   <Button>Button 2</Button> </ButtonGroup>`

Nest multiple button groups to create complex layouts with spacing. See the [nested](#nested) example for more details.

Copy`<ButtonGroup>   <ButtonGroup />   <ButtonGroup /> </ButtonGroup>`

### ButtonGroupSeparator

The `ButtonGroupSeparator` component visually divides buttons within a group.

Prop

Type

Default

`orientation`

`"horizontal" | "vertical"`

`"vertical"`

Copy`<ButtonGroup>   <Button>Button 1</Button>   <ButtonGroupSeparator />   <Button>Button 2</Button> </ButtonGroup>`

### ButtonGroupText

Use this component to display text within a button group.

Prop

Type

Default

`asChild`

`boolean`

`false`

Copy`<ButtonGroup>   <ButtonGroupText>Text</ButtonGroupText>   <Button>Button</Button> </ButtonGroup>`

Use the `asChild` prop to render a custom component as the text, for example a label.

Copy`import { ButtonGroupText } from "@/components/ui/button-group" import { Label } from "@/components/ui/label"   export function ButtonGroupTextDemo() {   return (     <ButtonGroup>       <ButtonGroupText asChild>         <Label htmlFor="name">Text</Label>       </ButtonGroupText>       <Input placeholder="Type something here..." id="name" />     </ButtonGroup>   ) }`

[Button](/docs/components/radix/button)[Calendar](/docs/components/radix/calendar)

On This Page

[Installation](#installation)[Usage](#usage)[Accessibility](#accessibility)[ButtonGroup vs ToggleGroup](#buttongroup-vs-togglegroup)[Examples](#examples)[Orientation](#orientation)[Size](#size)[Nested](#nested)[Separator](#separator)[Split](#split)[Input](#input)[Input Group](#input-group)[Dropdown Menu](#dropdown-menu)[Select](#select)[Popover](#popover)[RTL](#rtl)[API Reference](#api-reference)[ButtonGroup](#buttongroup)[ButtonGroupSeparator](#buttongroupseparator)[ButtonGroupText](#buttongrouptext)

Deploy your shadcn/ui app on Vercel

Trusted by OpenAI, Sonos, Adobe, and more.

Vercel provides tools and infrastructure to deploy apps and features at scale.

Deploy Now[Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site\&utm_medium=web\&utm_campaign=docs_cta_deploy_now_callout)
