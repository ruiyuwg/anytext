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

# Field

Copy Page

[Previous](/docs/components/radix/empty)[Next](/docs/components/radix/hover-card)

Combine labels, controls, and help text to compose accessible form fields and grouped inputs.

[Radix UI](/docs/components/radix/field)[Base UI](/docs/components/base/field)

Radix UI

Payment Method

All transactions are secure and encrypted

Name on Card

Card Number

Enter your 16-digit card number

MonthMM

YearYYYY

CVV

Billing Address

The billing address associated with your payment method

Same as shipping address

Comments

SubmitCancel

Copy

```
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
```

View Code

## Installation

CommandManual

pnpmnpmyarnbun

```
pnpm dlx shadcn@latest add field
```

Copy

## Usage

Copy`import {   Field,   FieldContent,   FieldDescription,   FieldError,   FieldGroup,   FieldLabel,   FieldLegend,   FieldSeparator,   FieldSet,   FieldTitle, } from "@/components/ui/field"`

Copy`<FieldSet>   <FieldLegend>Profile</FieldLegend>   <FieldDescription>This appears on invoices and emails.</FieldDescription>   <FieldGroup>     <Field>       <FieldLabel htmlFor="name">Full name</FieldLabel>       <Input id="name" autoComplete="off" placeholder="Evil Rabbit" />       <FieldDescription>This appears on invoices and emails.</FieldDescription>     </Field>     <Field>       <FieldLabel htmlFor="username">Username</FieldLabel>       <Input id="username" autoComplete="off" aria-invalid />       <FieldError>Choose another username.</FieldError>     </Field>     <Field orientation="horizontal">       <Switch id="newsletter" />       <FieldLabel htmlFor="newsletter">Subscribe to the newsletter</FieldLabel>     </Field>   </FieldGroup> </FieldSet>`

## Anatomy

The `Field` family is designed for composing accessible forms. A typical field is structured as follows:

Copy`<Field>   <FieldLabel htmlFor="input-id">Label</FieldLabel>   {/* Input, Select, Switch, etc. */}   <FieldDescription>Optional helper text.</FieldDescription>   <FieldError>Validation message.</FieldError> </Field>`

- `Field` is the core wrapper for a single field.
- `FieldContent` is a flex column that groups label and description. Not required if you have no description.
- Wrap related fields with `FieldGroup`, and use `FieldSet` with `FieldLegend` for semantic grouping.

## Form

See the [Form](/docs/forms) documentation for building forms with the `Field` component and [React Hook Form](/docs/forms/react-hook-form) or [Tanstack Form](/docs/forms/tanstack-form).

## Examples

### Input

Username

Choose a unique username for your account.

Password

Must be at least 8 characters long.

Copy

```
import {
  Field,
  FieldDescription,
```

View Code

### Textarea

Feedback

Share your thoughts about our service.

Copy

```
import {
  Field,
  FieldDescription,
```

View Code

### Select

DepartmentChoose department

Select your department or area of work.

Copy

```
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import {
  Select,
```

View Code

### Slider

Price Range

Set your budget range ($200 - 800).

Copy

```
"use client"

import * as React from "react"
```

View Code

### Fieldset

Address Information

We need your address to deliver your order.

Street Address

City

Postal Code

Copy

```
import {
  Field,
  FieldDescription,
```

View Code

### Checkbox

Show these items on the desktop

Select the items you want to show on the desktop.

Hard disks

External disks

CDs, DVDs, and iPods

Connected servers

Sync Desktop & Documents folders

Your Desktop & Documents folders are being synced with iCloud Drive. You can access them from other devices.

Copy

```
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
```

View Code

### Radio

Subscription Plan

Yearly and lifetime plans offer significant savings.

Monthly ($9.99/month)

Yearly ($99.99/year)

Lifetime ($299.99)

Copy

```
import {
  Field,
  FieldDescription,
```

View Code

### Switch

Multi-factor authentication

Copy

```
import { Field, FieldLabel } from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"
```

View Code

### Choice Card

Wrap `Field` components inside `FieldLabel` to create selectable field groups. This works with `RadioItem`, `Checkbox` and `Switch` components.

Compute Environment

Select the compute environment for your cluster.

Kubernetes

Run GPU workloads on a K8s cluster.

Virtual Machine

Access a cluster to run GPU workloads.

Copy

```
import {
  Field,
  FieldContent,
```

View Code

### Field Group

Stack `Field` components with `FieldGroup`. Add `FieldSeparator` to divide them.

Responses

Get notified when ChatGPT responds to requests that take time, like research or image generation.

Push notifications

Tasks

Get notified when tasks you've created have updates. [Manage tasks](#)

Push notifications

Email notifications

Copy

```
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
```

View Code

## RTL

To enable RTL support in shadcn/ui, see the [RTL configuration guide](/docs/rtl).

Arabic (العربية)▼Toggle

طريقة الدفع

جميع المعاملات آمنة ومشفرة

الاسم على البطاقة

رقم البطاقة

أدخل رقم البطاقة المكون من 16 رقمًا

الشهر

السنة

CVV

عنوان الفوترة

عنوان الفوترة المرتبط بطريقة الدفع الخاصة بك

نفس عنوان الشحن

تعليقات

إرسالإلغاء

Copy

```
"use client"

import { Button } from "@/examples/radix/ui-rtl/button"
```

View Code

## Responsive Layout

- **Vertical fields:** Default orientation stacks label, control, and helper text—ideal for mobile-first layouts.
- **Horizontal fields:** Set `orientation="horizontal"` on `Field` to align the label and control side-by-side. Pair with `FieldContent` to keep descriptions aligned.
- **Responsive fields:** Set `orientation="responsive"` for automatic column layouts inside container-aware parents. Apply `@container/field-group` classes on `FieldGroup` to switch orientations at specific breakpoints.

Profile

Fill in your profile information.

Name

Provide your full name for identification

SubmitCancel

Copy

```
import { Button } from "@/components/ui/button"
import {
  Field,
```

View Code

## Validation and Errors

- Add `data-invalid` to `Field` to switch the entire block into an error state.
- Add `aria-invalid` on the input itself for assistive technologies.
- Render `FieldError` immediately after the control or inside `FieldContent` to keep error messages aligned with the field.

Copy`<Field data-invalid>   <FieldLabel htmlFor="email">Email</FieldLabel>   <Input id="email" type="email" aria-invalid />   <FieldError>Enter a valid email address.</FieldError> </Field>`

## Accessibility

- `FieldSet` and `FieldLegend` keep related controls grouped for keyboard and assistive tech users.
- `Field` outputs `role="group"` so nested controls inherit labeling from `FieldLabel` and `FieldLegend` when combined.
- Apply `FieldSeparator` sparingly to ensure screen readers encounter clear section boundaries.

## API Reference

### FieldSet

Container that renders a semantic `fieldset` with spacing presets.

Prop

Type

Default

`className`

`string`

Copy`<FieldSet>   <FieldLegend>Delivery</FieldLegend>   <FieldGroup>{/* Fields */}</FieldGroup> </FieldSet>`

### FieldLegend

Legend element for a `FieldSet`. Switch to the `label` variant to align with label sizing.

Prop

Type

Default

`variant`

`"legend" | "label"`

`"legend"`

`className`

`string`

Copy`<FieldLegend variant="label">Notification Preferences</FieldLegend>`

The `FieldLegend` has two variants: `legend` and `label`. The `label` variant applies label sizing and alignment. Handy if you have nested `FieldSet`.

### FieldGroup

Layout wrapper that stacks `Field` components and enables container queries for responsive orientations.

Prop

Type

Default

`className`

`string`

Copy`<FieldGroup className="@container/field-group flex flex-col gap-6">   <Field>{/* ... */}</Field>   <Field>{/* ... */}</Field> </FieldGroup>`

### Field

The core wrapper for a single field. Provides orientation control, invalid state styling, and spacing.

Prop

Type

Default

`orientation`

`"vertical" | "horizontal" | "responsive"`

`"vertical"`

`className`

`string`

`data-invalid`

`boolean`

Copy`<Field orientation="horizontal">   <FieldLabel htmlFor="remember">Remember me</FieldLabel>   <Switch id="remember" /> </Field>`

### FieldContent

Flex column that groups control and descriptions when the label sits beside the control. Not required if you have no description.

Prop

Type

Default

`className`

`string`

Copy`<Field>   <Checkbox id="notifications" />   <FieldContent>     <FieldLabel htmlFor="notifications">Notifications</FieldLabel>     <FieldDescription>Email, SMS, and push options.</FieldDescription>   </FieldContent> </Field>`

### FieldLabel

Label styled for both direct inputs and nested `Field` children.

Prop

Type

Default

`className`

`string`

`asChild`

`boolean`

`false`

Copy`<FieldLabel htmlFor="email">Email</FieldLabel>`

### FieldTitle

Renders a title with label styling inside `FieldContent`.

Prop

Type

Default

`className`

`string`

Copy`<FieldContent>   <FieldTitle>Enable Touch ID</FieldTitle>   <FieldDescription>Unlock your device faster.</FieldDescription> </FieldContent>`

### FieldDescription

Helper text slot that automatically balances long lines in horizontal layouts.

Prop

Type

Default

`className`

`string`

Copy`<FieldDescription>We never share your email with anyone.</FieldDescription>`

### FieldSeparator

Visual divider to separate sections inside a `FieldGroup`. Accepts optional inline content.

Prop

Type

Default

`className`

`string`

Copy`<FieldSeparator>Or continue with</FieldSeparator>`

### FieldError

Accessible error container that accepts children or an `errors` array (e.g., from `react-hook-form`).

Prop

Type

Default

`errors`

`Array<{ message?: string } | undefined>`

`className`

`string`

Copy`<FieldError errors={errors.username} />`

When the `errors` array contains multiple messages, the component renders a list automatically.

`FieldError` also accepts issues produced by any validator that implements [Standard Schema](https://standardschema.dev/), including Zod, Valibot, and ArkType. Pass the `issues` array from the schema result directly to render a unified error list across libraries.

[Empty](/docs/components/radix/empty)[Hover Card](/docs/components/radix/hover-card)

On This Page

[Installation](#installation)[Usage](#usage)[Anatomy](#anatomy)[Form](#form)[Examples](#examples)[Input](#input)[Textarea](#textarea)[Select](#select)[Slider](#slider)[Fieldset](#fieldset)[Checkbox](#checkbox)[Radio](#radio)[Switch](#switch)[Choice Card](#choice-card)[Field Group](#field-group)[RTL](#rtl)[Responsive Layout](#responsive-layout)[Validation and Errors](#validation-and-errors)[Accessibility](#accessibility)[API Reference](#api-reference)[FieldSet](#fieldset-1)[FieldLegend](#fieldlegend)[FieldGroup](#fieldgroup)[Field](#field)[FieldContent](#fieldcontent)[FieldLabel](#fieldlabel)[FieldTitle](#fieldtitle)[FieldDescription](#fielddescription)[FieldSeparator](#fieldseparator)[FieldError](#fielderror)

Deploy your shadcn/ui app on Vercel

Trusted by OpenAI, Sonos, Adobe, and more.

Vercel provides tools and infrastructure to deploy apps and features at scale.

Deploy Now[Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site\&utm_medium=web\&utm_campaign=docs_cta_deploy_now_callout)
