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

# Input Group

Copy Page

[Previous](/docs/components/radix/input)[Next](/docs/components/radix/input-otp)

Add addons, buttons, and helper content to inputs.

[Radix UI](/docs/components/radix/input-group)[Base UI](/docs/components/base/input-group)

Radix UI

12 results

Copy

```
import {
  InputGroup,
  InputGroupAddon,
```

View Code

## Installation

CommandManual

pnpmnpmyarnbun

```
pnpm dlx shadcn@latest add input-group
```

Copy

## Usage

Copy`import {   InputGroup,   InputGroupAddon,   InputGroupButton,   InputGroupInput,   InputGroupText,   InputGroupTextarea, } from "@/components/ui/input-group"`

Copy`<InputGroup>   <InputGroupInput placeholder="Search..." />   <InputGroupAddon>     <SearchIcon />   </InputGroupAddon> </InputGroup>`

## Align

Use the `align` prop on `InputGroupAddon` to position the addon relative to the input.

For proper focus management, `InputGroupAddon` should always be placed after `InputGroupInput` or `InputGroupTextarea` in the DOM. Use the `align` prop to visually position the addon.

### inline-start

Use `align="inline-start"` to position the addon at the start of the input. This is the default.

Input

Icon positioned at the start.

Copy

```
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import {
  InputGroup,
```

View Code

### inline-end

Use `align="inline-end"` to position the addon at the end of the input.

Input

Icon positioned at the end.

Copy

```
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import {
  InputGroup,
```

View Code

### block-start

Use `align="block-start"` to position the addon above the input.

Input

Full Name

Header positioned above the input.

Textarea

script.jsCopy

Header positioned above the textarea.

Copy

```
import {
  Field,
  FieldDescription,
```

View Code

### block-end

Use `align="block-end"` to position the addon below the input.

Input

USD

Footer positioned below the input.

Textarea

0/280Post

Footer positioned below the textarea.

Copy

```
import {
  Field,
  FieldDescription,
```

View Code

## Examples

### Icon

Copy

```
import {
  InputGroup,
  InputGroupAddon,
```

View Code

### Text

$

USD

https://

.com

@company.com

120 characters left

Copy

```
import {
  InputGroup,
  InputGroupAddon,
```

View Code

### Button

https://

Search

Copy

```
"use client"

import * as React from "react"
```

View Code

### Kbd

⌘K

Copy

```
import {
  InputGroup,
  InputGroupAddon,
```

View Code

### Dropdown

Search In...

Copy

```
import {
  DropdownMenu,
  DropdownMenuContent,
```

View Code

### Spinner

Saving...

Please wait...

Copy

```
import {
  InputGroup,
  InputGroupAddon,
```

View Code

### Textarea

Line 1, Column 1Run

script.js

Copy

```
import {
  InputGroup,
  InputGroupAddon,
```

View Code

### Custom Input

Add the `data-slot="input-group-control"` attribute to your custom input for automatic focus state handling.

Here's an example of a custom resizable textarea from a third-party library.

Submit

Copy

```
"use client"

import {
```

View Code

## RTL

To enable RTL support in shadcn/ui, see the [RTL configuration guide](/docs/rtl).

Arabic (العربية)▼Toggle

١٢ نتيجة

جاري الحفظ...

منطقة النص

٠/٢٨٠نشر

تذييل موضع أسفل منطقة النص.

Copy

```
"use client"

import * as React from "react"
```

View Code

## API Reference

### InputGroup

The main component that wraps inputs and addons.

Prop

Type

Default

`className`

`string`

Copy`<InputGroup>   <InputGroupInput />   <InputGroupAddon /> </InputGroup>`

### InputGroupAddon

Displays icons, text, buttons, or other content alongside inputs.

Focus Navigation

For proper focus navigation, the `InputGroupAddon` component should be placed after the input. Set the `align` prop to position the addon.

Prop

Type

Default

`align`

`"inline-start" | "inline-end" | "block-start" | "block-end"`

`"inline-start"`

`className`

`string`

Copy`<InputGroupAddon align="inline-end">   <SearchIcon /> </InputGroupAddon>`

**For `<InputGroupInput />`, use the `inline-start` or `inline-end` alignment. For `<InputGroupTextarea />`, use the `block-start` or `block-end` alignment.**

The `InputGroupAddon` component can have multiple `InputGroupButton` components and icons.

Copy`<InputGroupAddon>   <InputGroupButton>Button</InputGroupButton>   <InputGroupButton>Button</InputGroupButton> </InputGroupAddon>`

### InputGroupButton

Displays buttons within input groups.

Prop

Type

Default

`size`

`"xs" | "icon-xs" | "sm" | "icon-sm"`

`"xs"`

`variant`

`"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"`

`"ghost"`

`className`

`string`

Copy`<InputGroupButton>Button</InputGroupButton> <InputGroupButton size="icon-xs" aria-label="Copy">   <CopyIcon /> </InputGroupButton>`

### InputGroupInput

Replacement for `<Input />` when building input groups. This component has the input group styles pre-applied and uses the unified `data-slot="input-group-control"` for focus state handling.

Prop

Type

Default

`className`

`string`

All other props are passed through to the underlying `<Input />` component.

Copy`<InputGroup>   <InputGroupInput placeholder="Enter text..." />   <InputGroupAddon>     <SearchIcon />   </InputGroupAddon> </InputGroup>`

### InputGroupTextarea

Replacement for `<Textarea />` when building input groups. This component has the textarea group styles pre-applied and uses the unified `data-slot="input-group-control"` for focus state handling.

Prop

Type

Default

`className`

`string`

All other props are passed through to the underlying `<Textarea />` component.

Copy`<InputGroup>   <InputGroupTextarea placeholder="Enter message..." />   <InputGroupAddon align="block-end">     <InputGroupButton>Send</InputGroupButton>   </InputGroupAddon> </InputGroup>`

## Changelog

### 2025-10-06 `InputGroup`

Add the `min-w-0` class to the `InputGroup` component. See [diff](https://github.com/shadcn-ui/ui/pull/8341/files#diff-0e2ee95d0050ca4c5d82339df86c54e14a6739dc4638fdda0eec8f73aebc2da9).

[Input](/docs/components/radix/input)[Input OTP](/docs/components/radix/input-otp)

On This Page

[Installation](#installation)[Usage](#usage)[Align](#align)[inline-start](#inline-start)[inline-end](#inline-end)[block-start](#block-start)[block-end](#block-end)[Examples](#examples)[Icon](#icon)[Text](#text)[Button](#button)[Kbd](#kbd)[Dropdown](#dropdown)[Spinner](#spinner)[Textarea](#textarea)[Custom Input](#custom-input)[RTL](#rtl)[API Reference](#api-reference)[InputGroup](#inputgroup)[InputGroupAddon](#inputgroupaddon)[InputGroupButton](#inputgroupbutton)[InputGroupInput](#inputgroupinput)[InputGroupTextarea](#inputgrouptextarea)[Changelog](#changelog)[2025-10-06 `InputGroup`](#2025-10-06-inputgroup)

Deploy your shadcn/ui app on Vercel

Trusted by OpenAI, Sonos, Adobe, and more.

Vercel provides tools and infrastructure to deploy apps and features at scale.

Deploy Now[Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site\&utm_medium=web\&utm_campaign=docs_cta_deploy_now_callout)
