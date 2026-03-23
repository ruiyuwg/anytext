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

# Empty

Copy Page

[Previous](/docs/components/radix/dropdown-menu)[Next](/docs/components/radix/field)

Use the Empty component to display an empty state.

[Radix UI](/docs/components/radix/empty)[Base UI](/docs/components/base/empty)

Radix UI

No Projects Yet

You haven't created any projects yet. Get started by creating your first project.

Create ProjectImport Project

[Learn More](#)

Copy

```
import { Button } from "@/components/ui/button"
import {
  Empty,
```

View Code

## Installation

CommandManual

pnpmnpmyarnbun

```
pnpm dlx shadcn@latest add empty
```

Copy

## Usage

Copy`import {   Empty,   EmptyContent,   EmptyDescription,   EmptyHeader,   EmptyMedia,   EmptyTitle, } from "@/components/ui/empty"`

Copy`<Empty>   <EmptyHeader>     <EmptyMedia variant="icon">       <Icon />     </EmptyMedia>     <EmptyTitle>No data</EmptyTitle>     <EmptyDescription>No data found</EmptyDescription>   </EmptyHeader>   <EmptyContent>     <Button>Add data</Button>   </EmptyContent> </Empty>`

## Examples

### Outline

Use the `border` utility class to create an outline empty state.

Cloud Storage Empty

Upload files to your cloud storage to access them anywhere.

Upload Files

Copy

```
import { Button } from "@/components/ui/button"
import {
  Empty,
```

View Code

### Background

Use the `bg-*` and `bg-gradient-*` utilities to add a background to the empty state.

No Notifications

You're all caught up. New notifications will appear here.

Refresh

Copy

```
import { Button } from "@/components/ui/button"
import {
  Empty,
```

View Code

### Avatar

Use the `EmptyMedia` component to display an avatar in the empty state.

LR

User Offline

This user is currently offline. You can leave a message to notify them or try again later.

Leave Message

Copy

```
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
```

View Code

### Avatar Group

Use the `EmptyMedia` component to display an avatar group in the empty state.

CNLRER

No Team Members

Invite your team to collaborate on this project.

Invite Members

Copy

```
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
```

View Code

### InputGroup

You can add an `InputGroup` component to the `EmptyContent` component.

404 - Not Found

The page you're looking for doesn't exist. Try searching for what you need below.

/

Need help? [Contact support](#)

Copy

```
import {
  Empty,
  EmptyContent,
```

View Code

## RTL

To enable RTL support in shadcn/ui, see the [RTL configuration guide](/docs/rtl).

Arabic (العربية)▼Toggle

لا توجد مشاريع بعد

لم تقم بإنشاء أي مشاريع بعد. ابدأ بإنشاء مشروعك الأول.

إنشاء مشروعاستيراد مشروع

[تعرف على المزيد](#)

Copy

```
"use client"

import * as React from "react"
```

View Code

## API Reference

### Empty

The main component of the empty state. Wraps the `EmptyHeader` and `EmptyContent` components.

Prop

Type

Default

`className`

`string`

Copy`<Empty>   <EmptyHeader />   <EmptyContent /> </Empty>`

### EmptyHeader

The `EmptyHeader` component wraps the empty media, title, and description.

Prop

Type

Default

`className`

`string`

Copy`<EmptyHeader>   <EmptyMedia />   <EmptyTitle />   <EmptyDescription /> </EmptyHeader>`

### EmptyMedia

Use the `EmptyMedia` component to display the media of the empty state such as an icon or an image. You can also use it to display other components such as an avatar.

Prop

Type

Default

`variant`

`"default" | "icon"`

`default`

`className`

`string`

Copy`<EmptyMedia variant="icon">   <Icon /> </EmptyMedia>`

Copy`<EmptyMedia>   <Avatar>     <AvatarImage src="..." />     <AvatarFallback>CN</AvatarFallback>   </Avatar> </EmptyMedia>`

### EmptyTitle

Use the `EmptyTitle` component to display the title of the empty state.

Prop

Type

Default

`className`

`string`

Copy`<EmptyTitle>No data</EmptyTitle>`

### EmptyDescription

Use the `EmptyDescription` component to display the description of the empty state.

Prop

Type

Default

`className`

`string`

Copy`<EmptyDescription>You do not have any notifications.</EmptyDescription>`

### EmptyContent

Use the `EmptyContent` component to display the content of the empty state such as a button, input or a link.

Prop

Type

Default

`className`

`string`

Copy`<EmptyContent>   <Button>Add Project</Button> </EmptyContent>`

[Dropdown Menu](/docs/components/radix/dropdown-menu)[Field](/docs/components/radix/field)

On This Page

[Installation](#installation)[Usage](#usage)[Examples](#examples)[Outline](#outline)[Background](#background)[Avatar](#avatar)[Avatar Group](#avatar-group)[InputGroup](#inputgroup)[RTL](#rtl)[API Reference](#api-reference)[Empty](#empty)[EmptyHeader](#emptyheader)[EmptyMedia](#emptymedia)[EmptyTitle](#emptytitle)[EmptyDescription](#emptydescription)[EmptyContent](#emptycontent)

Deploy your shadcn/ui app on Vercel

Trusted by OpenAI, Sonos, Adobe, and more.

Vercel provides tools and infrastructure to deploy apps and features at scale.

Deploy Now[Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site\&utm_medium=web\&utm_campaign=docs_cta_deploy_now_callout)
