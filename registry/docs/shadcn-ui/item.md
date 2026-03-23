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

# Item

Copy Page

[Previous](/docs/components/radix/input-otp)[Next](/docs/components/radix/kbd)

A versatile component for displaying content with media, title, description, and actions.

[Radix UI](/docs/components/radix/item)[Base UI](/docs/components/base/item)

Radix UI

Basic Item

A simple item with title and description.

Action

\[

Your profile has been verified.

]\(#)

Copy

```
import { Button } from "@/components/ui/button"
import {
  Item,
```

View Code

The `Item` component is a straightforward flex container that can house nearly any type of content. Use it to display a title, description, and actions. Group it with the `ItemGroup` component to create a list of items.

## Installation

CommandManual

pnpmnpmyarnbun

```
pnpm dlx shadcn@latest add item
```

Copy

## Usage

Copy`import {   Item,   ItemActions,   ItemContent,   ItemDescription,   ItemMedia,   ItemTitle, } from "@/components/ui/item"`

Copy`<Item>   <ItemMedia variant="icon">     <Icon />   </ItemMedia>   <ItemContent>     <ItemTitle>Title</ItemTitle>     <ItemDescription>Description</ItemDescription>   </ItemContent>   <ItemActions>     <Button>Action</Button>   </ItemActions> </Item>`

## Item vs Field

Use `Field` if you need to display a form input such as a checkbox, input, radio, or select.

If you only need to display content such as a title, description, and actions, use `Item`.

## Variant

Use the `variant` prop to change the visual style of the item.

Default Variant

Transparent background with no border.

Outline Variant

Outlined style with a visible border.

Muted Variant

Muted background for secondary content.

Copy

```
import {
  Item,
  ItemContent,
```

View Code

## Size

Use the `size` prop to change the size of the item. Available sizes are `default`, `sm`, and `xs`.

Default Size

The standard size for most use cases.

Small Size

A compact size for dense layouts.

Extra Small Size

The most compact size available.

Copy

```
import {
  Item,
  ItemContent,
```

View Code

## Examples

### Icon

Use `ItemMedia` with `variant="icon"` to display an icon.

Security Alert

New login detected from unknown device.

Review

Copy

```
import { Button } from "@/components/ui/button"
import {
  Item,
```

View Code

### Avatar

You can use `ItemMedia` with `variant="avatar"` to display an avatar.

ER

Evil Rabbit

Last seen 5 months ago

CNLRER

No Team Members

Invite your team to collaborate on this project.

Invite

Copy

```
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
```

View Code

### Image

Use `ItemMedia` with `variant="image"` to display an image.

\[

![Midnight City Lights](/_next/image?url=https%3A%2F%2Favatar.vercel.sh%2FMidnight%20City%20Lights\&w=64\&q=75)

Midnight City Lights - Electric Nights

Neon Dreams

3:45

]\(#)\[

![Coffee Shop Conversations](/_next/image?url=https%3A%2F%2Favatar.vercel.sh%2FCoffee%20Shop%20Conversations\&w=64\&q=75)

Coffee Shop Conversations - Urban Stories

The Morning Brew

4:05

]\(#)\[

![Digital Rain](/_next/image?url=https%3A%2F%2Favatar.vercel.sh%2FDigital%20Rain\&w=64\&q=75)

Digital Rain - Binary Beats

Cyber Symphony

3:30

]\(#)

Copy

```
import Image from "next/image"
import {
  Item,
```

View Code

### Group

Use `ItemGroup` to group related items together.

s

shadcn

shadcn@vercel.com

m

maxleiter

maxleiter@vercel.com

e

evilrabbit

evilrabbit@vercel.com

Copy

```
import * as React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
```

View Code

### Header

Use `ItemHeader` to add a header above the item content.

![v0-1.5-sm](/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1650804068570-7fb2e3dbf888%3Fq%3D80%26w%3D640%26auto%3Dformat%26fit%3Dcrop\&w=256\&q=75)

v0-1.5-sm

Everyday tasks and UI generation.

![v0-1.5-lg](/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1610280777472-54133d004c8c%3Fq%3D80%26w%3D640%26auto%3Dformat%26fit%3Dcrop\&w=256\&q=75)

v0-1.5-lg

Advanced thinking or reasoning.

![v0-2.0-mini](/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1602146057681-08560aee8cde%3Fq%3D80%26w%3D640%26auto%3Dformat%26fit%3Dcrop\&w=256\&q=75)

v0-2.0-mini

Open Source model for everyone.

Copy

```
import Image from "next/image"
import {
  Item,
```

View Code

### Link

Use the `asChild` prop to render the item as a link. The hover and focus states will be applied to the anchor element.

\[

Visit our documentation

Learn how to get started with our components.

]\(#)\[

External resource

Opens in a new tab with security attributes.

]\(#)

Copy

```
import {
  Item,
  ItemActions,
```

View Code

Copy`<Item asChild>   <a href="/dashboard">     <ItemMedia variant="icon">       <HomeIcon />     </ItemMedia>     <ItemContent>       <ItemTitle>Dashboard</ItemTitle>       <ItemDescription>Overview of your account and activity.</ItemDescription>     </ItemContent>   </a> </Item>`

### Dropdown

Select

Copy

```
"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
```

View Code

## RTL

To enable RTL support in shadcn/ui, see the [RTL configuration guide](/docs/rtl).

Arabic (العربية)▼Toggle

عنصر أساسي

عنصر بسيط يحتوي على عنوان ووصف.

إجراء

\[

تم التحقق من ملفك الشخصي.

]\(#)

Copy

```
"use client"

import * as React from "react"
```

View Code

## API Reference

### Item

The main component for displaying content with media, title, description, and actions.

Prop

Type

Default

`variant`

`"default" | "outline" | "muted"`

`"default"`

`size`

`"default" | "sm" | "xs"`

`"default"`

`asChild`

`boolean`

`false`

### ItemGroup

A container that groups related items together with consistent styling.

Copy`<ItemGroup>   <Item />   <Item /> </ItemGroup>`

### ItemSeparator

A separator between items in a group.

Copy`<ItemGroup>   <Item />   <ItemSeparator />   <Item /> </ItemGroup>`

### ItemMedia

Use `ItemMedia` to display media content such as icons, images, or avatars.

Prop

Type

Default

`variant`

`"default" | "icon" | "image"`

`"default"`

Copy`<ItemMedia variant="icon">   <Icon /> </ItemMedia>`

Copy`<ItemMedia variant="image">   <img src="..." alt="..." /> </ItemMedia>`

### ItemContent

Wraps the title and description of the item.

Copy`<ItemContent>   <ItemTitle>Title</ItemTitle>   <ItemDescription>Description</ItemDescription> </ItemContent>`

### ItemTitle

Displays the title of the item.

Copy`<ItemTitle>Item Title</ItemTitle>`

### ItemDescription

Displays the description of the item.

Copy`<ItemDescription>Item description</ItemDescription>`

### ItemActions

Container for action buttons or other interactive elements.

Copy`<ItemActions>   <Button>Action</Button> </ItemActions>`

### ItemHeader

Displays a header above the item content.

Copy`<Item>   <ItemHeader>Header</ItemHeader>   <ItemContent>...</ItemContent> </Item>`

### ItemFooter

Displays a footer below the item content.

Copy`<Item>   <ItemContent>...</ItemContent>   <ItemFooter>Footer</ItemFooter> </Item>`

[Input OTP](/docs/components/radix/input-otp)[Kbd](/docs/components/radix/kbd)

On This Page

[Installation](#installation)[Usage](#usage)[Item vs Field](#item-vs-field)[Variant](#variant)[Size](#size)[Examples](#examples)[Icon](#icon)[Avatar](#avatar)[Image](#image)[Group](#group)[Header](#header)[Link](#link)[Dropdown](#dropdown)[RTL](#rtl)[API Reference](#api-reference)[Item](#item)[ItemGroup](#itemgroup)[ItemSeparator](#itemseparator)[ItemMedia](#itemmedia)[ItemContent](#itemcontent)[ItemTitle](#itemtitle)[ItemDescription](#itemdescription)[ItemActions](#itemactions)[ItemHeader](#itemheader)[ItemFooter](#itemfooter)

Deploy your shadcn/ui app on Vercel

Trusted by OpenAI, Sonos, Adobe, and more.

Vercel provides tools and infrastructure to deploy apps and features at scale.

Deploy Now[Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site\&utm_medium=web\&utm_campaign=docs_cta_deploy_now_callout)
