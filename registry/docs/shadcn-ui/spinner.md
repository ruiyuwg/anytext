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

# Spinner

Copy Page

[Previous](/docs/components/radix/sonner)[Next](/docs/components/radix/switch)

An indicator that can be used to show a loading state.

[Radix UI](/docs/components/radix/spinner)[Base UI](/docs/components/base/spinner)

Radix UI

Processing payment...

$100.00

Copy

```
import {
  Item,
  ItemContent,
```

View Code

## Installation

CommandManual

pnpmnpmyarnbun

```
pnpm dlx shadcn@latest add spinner
```

Copy

## Usage

Copy`import { Spinner } from "@/components/ui/spinner"`

Copy`<Spinner />`

## Customization

You can replace the default spinner icon with any other icon by editing the `Spinner` component.

Copy

```
import { LoaderIcon } from "lucide-react"

import { cn } from "@/lib/utils"
```

View Code

components/ui/spinner.tsx

Copy`import { LoaderIcon } from "lucide-react"   import { cn } from "@/lib/utils"   function Spinner({ className, ...props }: React.ComponentProps<"svg">) {   return (     <LoaderIcon       role="status"       aria-label="Loading"       className={cn("size-4 animate-spin", className)}       {...props}     />   ) }   export { Spinner }`

## Examples

### Size

Use the `size-*` utility class to change the size of the spinner.

Copy

```
import { Spinner } from "@/components/ui/spinner"

export function SpinnerSize() {
```

View Code

### Button

Add a spinner to a button to indicate a loading state. Place the `<Spinner />` before the label with `data-icon="inline-start"` for a start position, or after the label with `data-icon="inline-end"` for an end position.

Loading...Please waitProcessing

Copy

```
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
```

View Code

### Badge

Add a spinner to a badge to indicate a loading state. Place the `<Spinner />` before the label with `data-icon="inline-start"` for a start position, or after the label with `data-icon="inline-end"` for an end position.

SyncingUpdatingProcessing

Copy

```
import { Badge } from "@/components/ui/badge"
import { Spinner } from "@/components/ui/spinner"
```

View Code

### Input Group

Validating...Send

Copy

```
import {
  InputGroup,
  InputGroupAddon,
```

View Code

### Empty

Processing your request

Please wait while we process your request. Do not refresh the page.

Cancel

Copy

```
import { Button } from "@/components/ui/button"
import {
  Empty,
```

View Code

## RTL

To enable RTL support in shadcn/ui, see the [RTL configuration guide](/docs/rtl).

Arabic (العربية)▼Toggle

جاري معالجة الدفع...

١٠٠.٠٠ دولار

Copy

```
"use client"

import * as React from "react"
```

View Code

[Sonner](/docs/components/radix/sonner)[Switch](/docs/components/radix/switch)

On This Page

[Installation](#installation)[Usage](#usage)[Customization](#customization)[Examples](#examples)[Size](#size)[Button](#button)[Badge](#badge)[Input Group](#input-group)[Empty](#empty)[RTL](#rtl)

Deploy your shadcn/ui app on Vercel

Trusted by OpenAI, Sonos, Adobe, and more.

Vercel provides tools and infrastructure to deploy apps and features at scale.

Deploy Now[Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site\&utm_medium=web\&utm_campaign=docs_cta_deploy_now_callout)
