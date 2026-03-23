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

# TanStack Form

Copy Page

[Previous](/docs/forms/react-hook-form)[Next](/docs/installation)

Build forms in React using TanStack Form and Zod.

This guide explores how to build forms using TanStack Form. You'll learn to create forms with the `<Field />` component, implement schema validation with Zod, handle errors, and ensure accessibility.

## Demo

We'll start by building the following form. It has a simple text input and a textarea. On submit, we'll validate the form data and display any errors.

**Note:** For the purpose of this demo, we have intentionally disabled browser validation to show how schema validation and form errors work in TanStack Form. It is recommended to add basic browser validation in your production code.

Bug Report

Help us improve by reporting bugs you encounter.

Bug Title

Description

0/100 characters

Include steps to reproduce, expected behavior, and what actually happened.

ResetSubmit

Copy

```
"use client"

import * as React from "react"
```

View Code

## Approach

This form leverages TanStack Form for powerful, headless form handling. We'll build our form using the `<Field />` component, which gives you **complete flexibility over the markup and styling**.

- Uses TanStack Form's `useForm` hook for form state management.
- `form.Field` component with render prop pattern for controlled inputs.
- `<Field />` components for building accessible forms.
- Client-side validation using Zod.
- Real-time validation feedback.

## Anatomy

Here's a basic example of a form using TanStack Form with the `<Field />` component.

Copy`<form   onSubmit={(e) => {     e.preventDefault()     form.handleSubmit()   }} >   <FieldGroup>     <form.Field       name="title"       children={(field) => {         const isInvalid =           field.state.meta.isTouched && !field.state.meta.isValid         return (           <Field data-invalid={isInvalid}>             <FieldLabel htmlFor={field.name}>Bug Title</FieldLabel>             <Input               id={field.name}               name={field.name}               value={field.state.value}               onBlur={field.handleBlur}               onChange={(e) => field.handleChange(e.target.value)}               aria-invalid={isInvalid}               placeholder="Login button not working on mobile"               autoComplete="off"             />             <FieldDescription>               Provide a concise title for your bug report.             </FieldDescription>             {isInvalid && <FieldError errors={field.state.meta.errors} />}           </Field>         )       }}     />   </FieldGroup>   <Button type="submit">Submit</Button> </form>`

## Form

### Create a schema

We'll start by defining the shape of our form using a Zod schema.

**Note:** This example uses `zod v3` for schema validation. TanStack Form integrates seamlessly with Zod and other Standard Schema validation libraries through its validators API.

form.tsx

Copy`import * as z from "zod"   const formSchema = z.object({   title: z     .string()     .min(5, "Bug title must be at least 5 characters.")     .max(32, "Bug title must be at most 32 characters."),   description: z     .string()     .min(20, "Description must be at least 20 characters.")     .max(100, "Description must be at most 100 characters."), })`

### Set up the form

Use the `useForm` hook from TanStack Form to create your form instance with Zod validation.

form.tsx

Copy`import { useForm } from "@tanstack/react-form" import { toast } from "sonner" import * as z from "zod"   const formSchema = z.object({   // ... })   export function BugReportForm() {   const form = useForm({     defaultValues: {       title: "",       description: "",     },     validators: {       onSubmit: formSchema,     },     onSubmit: async ({ value }) => {       toast.success("Form submitted successfully")     },   })     return (     <form       onSubmit={(e) => {         e.preventDefault()         form.handleSubmit()       }}     >       {/* ... */}     </form>   ) }`

We are using `onSubmit` to validate the form data here. TanStack Form supports other validation modes, which you can read about in the [documentation](https://tanstack.com/form/latest/docs/framework/react/guides/dynamic-validation).

### Build the form

We can now build the form using the `form.Field` component from TanStack Form and the `<Field />` component.

Expand

form.tsx

Copy

```
"use client"

import * as React from "react"
import { useForm } from "@tanstack/react-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"

const formSchema = z.object({
  title: z
    .string()
    .min(5, "Bug title must be at least 5 characters.")
    .max(32, "Bug title must be at most 32 characters."),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters.")
    .max(100, "Description must be at most 100 characters."),
})

export function BugReportForm() {
  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      toast("You submitted the following values:", {
        description: (
          <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
            <code>{JSON.stringify(value, null, 2)}</code>
          </pre>
        ),
        position: "bottom-right",
        classNames: {
          content: "flex flex-col gap-2",
        },
        style: {
          "--border-radius": "calc(var(--radius)  + 4px)",
        } as React.CSSProperties,
      })
    },
  })

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>Bug Report</CardTitle>
        <CardDescription>
          Help us improve by reporting bugs you encounter.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id="bug-report-form"
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
        >
          <FieldGroup>
            <form.Field
              name="title"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Bug Title</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="Login button not working on mobile"
                      autoComplete="off"
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}
            />
            <form.Field
              name="description"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Description</FieldLabel>
                    <InputGroup>
                      <InputGroupTextarea
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="I'm having an issue with the login button on mobile."
                        rows={6}
                        className="min-h-24 resize-none"
                        aria-invalid={isInvalid}
                      />
                      <InputGroupAddon align="block-end">
                        <InputGroupText className="tabular-nums">
                          {field.state.value.length}/100 characters
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                    <FieldDescription>
                      Include steps to reproduce, expected behavior, and what
                      actually happened.
                    </FieldDescription>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit" form="bug-report-form">
            Submit
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
```

Expand

### Done

That's it. You now have a fully accessible form with client-side validation.

When you submit the form, the `onSubmit` function will be called with the validated form data. If the form data is invalid, TanStack Form will display the errors next to each field.

## Validation

### Client-side Validation

TanStack Form validates your form data using the Zod schema. Validation happens in real-time as the user types.

form.tsx

Copy`import { useForm } from "@tanstack/react-form"   const formSchema = z.object({   // ... })   export function BugReportForm() {   const form = useForm({     defaultValues: {       title: "",       description: "",     },     validators: {       onSubmit: formSchema,     },     onSubmit: async ({ value }) => {       console.log(value)     },   })     return <form onSubmit={/* ... */}>{/* ... */}</form> }`

### Validation Modes

TanStack Form supports different validation strategies through the `validators` option:

Mode

Description

`"onChange"`

Validation triggers on every change.

`"onBlur"`

Validation triggers on blur.

`"onSubmit"`

Validation triggers on submit.

form.tsx

Copy`const form = useForm({   defaultValues: {     title: "",     description: "",   },   validators: {     onSubmit: formSchema,     onChange: formSchema,     onBlur: formSchema,   }, })`

## Displaying Errors

Display errors next to the field using `<FieldError />`. For styling and accessibility:

- Add the `data-invalid` prop to the `<Field />` component.
- Add the `aria-invalid` prop to the form control such as `<Input />`, `<SelectTrigger />`, `<Checkbox />`, etc.

form.tsx

Copy`<form.Field   name="email"   children={(field) => {     const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid       return (       <Field data-invalid={isInvalid}>         <FieldLabel htmlFor={field.name}>Email</FieldLabel>         <Input           id={field.name}           name={field.name}           value={field.state.value}           onBlur={field.handleBlur}           onChange={(e) => field.handleChange(e.target.value)}           type="email"           aria-invalid={isInvalid}         />         {isInvalid && <FieldError errors={field.state.meta.errors} />}       </Field>     )   }} />`

## Working with Different Field Types

### Input

- For input fields, use `field.state.value` and `field.handleChange` on the `<Input />` component.
- To show errors, add the `aria-invalid` prop to the `<Input />` component and the `data-invalid` prop to the `<Field />` component.

Profile Settings

Update your profile information below.

Username

This is your public display name. Must be between 3 and 10 characters. Must only contain letters, numbers, and underscores.

ResetSave

Copy

```
"use client"

import { useForm } from "@tanstack/react-form"
```

View Code

form.tsx

Copy`<form.Field   name="username"   children={(field) => {     const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid     return (       <Field data-invalid={isInvalid}>         <FieldLabel htmlFor="form-tanstack-input-username">Username</FieldLabel>         <Input           id="form-tanstack-input-username"           name={field.name}           value={field.state.value}           onBlur={field.handleBlur}           onChange={(e) => field.handleChange(e.target.value)}           aria-invalid={isInvalid}           placeholder="shadcn"           autoComplete="username"         />         <FieldDescription>           This is your public display name. Must be between 3 and 10 characters.           Must only contain letters, numbers, and underscores.         </FieldDescription>         {isInvalid && <FieldError errors={field.state.meta.errors} />}       </Field>     )   }} />`

### Textarea

- For textarea fields, use `field.state.value` and `field.handleChange` on the `<Textarea />` component.
- To show errors, add the `aria-invalid` prop to the `<Textarea />` component and the `data-invalid` prop to the `<Field />` component.

Personalization

Customize your experience by telling us more about yourself.

More about you

Tell us more about yourself. This will be used to help us personalize your experience.

ResetSave

Copy

```
"use client"

import { useForm } from "@tanstack/react-form"
```

View Code

form.tsx

Copy`<form.Field   name="about"   children={(field) => {     const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid     return (       <Field data-invalid={isInvalid}>         <FieldLabel htmlFor="form-tanstack-textarea-about">           More about you         </FieldLabel>         <Textarea           id="form-tanstack-textarea-about"           name={field.name}           value={field.state.value}           onBlur={field.handleBlur}           onChange={(e) => field.handleChange(e.target.value)}           aria-invalid={isInvalid}           placeholder="I'm a software engineer..."           className="min-h-[120px]"         />         <FieldDescription>           Tell us more about yourself. This will be used to help us personalize           your experience.         </FieldDescription>         {isInvalid && <FieldError errors={field.state.meta.errors} />}       </Field>     )   }} />`

### Select

- For select components, use `field.state.value` and `field.handleChange` on the `<Select />` component.
- To show errors, add the `aria-invalid` prop to the `<SelectTrigger />` component and the `data-invalid` prop to the `<Field />` component.

Language Preferences

Select your preferred spoken language.

Spoken Language

For best results, select the language you speak.

Select

ResetSave

Copy

```
"use client"

import { useForm } from "@tanstack/react-form"
```

View Code

form.tsx

Copy`<form.Field   name="language"   children={(field) => {     const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid     return (       <Field orientation="responsive" data-invalid={isInvalid}>         <FieldContent>           <FieldLabel htmlFor="form-tanstack-select-language">             Spoken Language           </FieldLabel>           <FieldDescription>             For best results, select the language you speak.           </FieldDescription>           {isInvalid && <FieldError errors={field.state.meta.errors} />}         </FieldContent>         <Select           name={field.name}           value={field.state.value}           onValueChange={field.handleChange}         >           <SelectTrigger             id="form-tanstack-select-language"             aria-invalid={isInvalid}             className="min-w-[120px]"           >             <SelectValue placeholder="Select" />           </SelectTrigger>           <SelectContent position="item-aligned">             <SelectItem value="auto">Auto</SelectItem>             <SelectItem value="en">English</SelectItem>           </SelectContent>         </Select>       </Field>     )   }} />`

### Checkbox

- For checkbox, use `field.state.value` and `field.handleChange` on the `<Checkbox />` component.
- To show errors, add the `aria-invalid` prop to the `<Checkbox />` component and the `data-invalid` prop to the `<Field />` component.
- For checkbox arrays, use `mode="array"` on the `<form.Field />` component and TanStack Form's array helpers.
- Remember to add `data-slot="checkbox-group"` to the `<FieldGroup />` component for proper styling and spacing.

Notifications

Manage your notification preferences.

Responses

Get notified for requests that take time, like research or image generation.

Push notifications

Tasks

Get notified when tasks you've created have updates.

Push notifications

Email notifications

ResetSave

Copy

```
"use client"

import { useForm } from "@tanstack/react-form"
```

View Code

form.tsx

Copy``<form.Field   name="tasks"   mode="array"   children={(field) => {     const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid     return (       <FieldSet>         <FieldLegend variant="label">Tasks</FieldLegend>         <FieldDescription>           Get notified when tasks you&apos;ve created have updates.         </FieldDescription>         <FieldGroup data-slot="checkbox-group">           {tasks.map((task) => (             <Field               key={task.id}               orientation="horizontal"               data-invalid={isInvalid}             >               <Checkbox                 id={`form-tanstack-checkbox-${task.id}`}                 name={field.name}                 aria-invalid={isInvalid}                 checked={field.state.value.includes(task.id)}                 onCheckedChange={(checked) => {                   if (checked) {                     field.pushValue(task.id)                   } else {                     const index = field.state.value.indexOf(task.id)                     if (index > -1) {                       field.removeValue(index)                     }                   }                 }}               />               <FieldLabel                 htmlFor={`form-tanstack-checkbox-${task.id}`}                 className="font-normal"               >                 {task.label}               </FieldLabel>             </Field>           ))}         </FieldGroup>         {isInvalid && <FieldError errors={field.state.meta.errors} />}       </FieldSet>     )   }} />``

### Radio Group

- For radio groups, use `field.state.value` and `field.handleChange` on the `<RadioGroup />` component.
- To show errors, add the `aria-invalid` prop to the `<RadioGroupItem />` component and the `data-invalid` prop to the `<Field />` component.

Subscription Plan

See pricing and features for each plan.

Plan

You can upgrade or downgrade your plan at any time.

Starter (100K tokens/month)

For everyday use with basic features.

Pro (1M tokens/month)

For advanced AI usage with more features.

Enterprise (Unlimited tokens)

For large teams and heavy usage.

ResetSave

Copy

```
"use client"

import { useForm } from "@tanstack/react-form"
```

View Code

form.tsx

Copy``<form.Field   name="plan"   children={(field) => {     const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid     return (       <FieldSet>         <FieldLegend>Plan</FieldLegend>         <FieldDescription>           You can upgrade or downgrade your plan at any time.         </FieldDescription>         <RadioGroup           name={field.name}           value={field.state.value}           onValueChange={field.handleChange}         >           {plans.map((plan) => (             <FieldLabel               key={plan.id}               htmlFor={`form-tanstack-radiogroup-${plan.id}`}             >               <Field orientation="horizontal" data-invalid={isInvalid}>                 <FieldContent>                   <FieldTitle>{plan.title}</FieldTitle>                   <FieldDescription>{plan.description}</FieldDescription>                 </FieldContent>                 <RadioGroupItem                   value={plan.id}                   id={`form-tanstack-radiogroup-${plan.id}`}                   aria-invalid={isInvalid}                 />               </Field>             </FieldLabel>           ))}         </RadioGroup>         {isInvalid && <FieldError errors={field.state.meta.errors} />}       </FieldSet>     )   }} />``

### Switch

- For switches, use `field.state.value` and `field.handleChange` on the `<Switch />` component.
- To show errors, add the `aria-invalid` prop to the `<Switch />` component and the `data-invalid` prop to the `<Field />` component.

Security Settings

Manage your account security preferences.

Multi-factor authentication

Enable multi-factor authentication to secure your account.

ResetSave

Copy

```
"use client"

import { useForm } from "@tanstack/react-form"
```

View Code

form.tsx

Copy`<form.Field   name="twoFactor"   children={(field) => {     const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid     return (       <Field orientation="horizontal" data-invalid={isInvalid}>         <FieldContent>           <FieldLabel htmlFor="form-tanstack-switch-twoFactor">             Multi-factor authentication           </FieldLabel>           <FieldDescription>             Enable multi-factor authentication to secure your account.           </FieldDescription>           {isInvalid && <FieldError errors={field.state.meta.errors} />}         </FieldContent>         <Switch           id="form-tanstack-switch-twoFactor"           name={field.name}           checked={field.state.value}           onCheckedChange={field.handleChange}           aria-invalid={isInvalid}         />       </Field>     )   }} />`

### Complex Forms

Here is an example of a more complex form with multiple fields and validation.

Subscription Plan

Choose your subscription plan.

Basic

For individuals and small teams

Pro

For businesses with higher demands

Billing Period

Choose how often you want to be billed.

Add-ons

Select additional features you'd like to include.

Analytics

Advanced analytics and reporting

Backup

Automated daily backups

Priority Support

24/7 premium customer support

Email Notifications

Receive email updates about your subscription

Save Preferences

Copy

```
"use client"

import * as React from "react"
```

View Code

## Resetting the Form

Use `form.reset()` to reset the form to its default values.

Copy`<Button type="button" variant="outline" onClick={() => form.reset()}>   Reset </Button>`

## Array Fields

TanStack Form provides powerful array field management with `mode="array"`. This allows you to dynamically add, remove, and update array items with full validation support.

Contact Emails

Manage your contact email addresses.

Email Addresses

Add up to 5 email addresses where we can contact you.

Add Email Address

ResetSave

Copy

```
"use client"

import * as React from "react"
```

View Code

This example demonstrates managing multiple email addresses with array fields. Users can add up to 5 email addresses, remove individual addresses, and each address is validated independently.

### Array Field Structure

Use `mode="array"` on the parent field to enable array field management.

form.tsx

Copy`<form.Field   name="emails"   mode="array"   children={(field) => {     return (       <FieldSet>         <FieldLegend variant="label">Email Addresses</FieldLegend>         <FieldDescription>           Add up to 5 email addresses where we can contact you.         </FieldDescription>         <FieldGroup>           {field.state.value.map((_, index) => (             // Nested field for each array item           ))}         </FieldGroup>       </FieldSet>     )   }} />`

### Nested Fields

Access individual array items using bracket notation: `fieldName[index].propertyName`. This example uses `InputGroup` to display the remove button inline with the input.

form.tsx

Copy``<form.Field   name={`emails[${index}].address`}   children={(subField) => {     const isSubFieldInvalid =       subField.state.meta.isTouched && !subField.state.meta.isValid     return (       <Field orientation="horizontal" data-invalid={isSubFieldInvalid}>         <FieldContent>           <InputGroup>             <InputGroupInput               id={`form-tanstack-array-email-${index}`}               name={subField.name}               value={subField.state.value}               onBlur={subField.handleBlur}               onChange={(e) => subField.handleChange(e.target.value)}               aria-invalid={isSubFieldInvalid}               placeholder="name@example.com"               type="email"             />             {field.state.value.length > 1 && (               <InputGroupAddon align="inline-end">                 <InputGroupButton                   type="button"                   variant="ghost"                   size="icon-xs"                   onClick={() => field.removeValue(index)}                   aria-label={`Remove email ${index + 1}`}                 >                   <XIcon />                 </InputGroupButton>               </InputGroupAddon>             )}           </InputGroup>           {isSubFieldInvalid && (             <FieldError errors={subField.state.meta.errors} />           )}         </FieldContent>       </Field>     )   }} />``

### Adding Items

Use `field.pushValue(item)` to add items to an array field. You can disable the button when the array reaches its maximum length.

form.tsx

Copy`<Button   type="button"   variant="outline"   size="sm"   onClick={() => field.pushValue({ address: "" })}   disabled={field.state.value.length >= 5} >   Add Email Address </Button>`

### Removing Items

Use `field.removeValue(index)` to remove items from an array field. You can conditionally show the remove button only when there's more than one item.

form.tsx

Copy``{   field.state.value.length > 1 && (     <InputGroupButton       onClick={() => field.removeValue(index)}       aria-label={`Remove email ${index + 1}`}     >       <XIcon />     </InputGroupButton>   ) }``

### Array Validation

Validate array fields using Zod's array methods.

form.tsx

Copy`const formSchema = z.object({   emails: z     .array(       z.object({         address: z.string().email("Enter a valid email address."),       })     )     .min(1, "Add at least one email address.")     .max(5, "You can add up to 5 email addresses."), })`

[React Hook Form](/docs/forms/react-hook-form)[Installation](/docs/installation)

On This Page

[Demo](#demo)[Approach](#approach)[Anatomy](#anatomy)[Form](#form)[Create a schema](#create-a-schema)[Set up the form](#set-up-the-form)[Build the form](#build-the-form)[Done](#done)[Validation](#validation)[Client-side Validation](#client-side-validation)[Validation Modes](#validation-modes)[Displaying Errors](#displaying-errors)[Working with Different Field Types](#working-with-different-field-types)[Input](#input)[Textarea](#textarea)[Select](#select)[Checkbox](#checkbox)[Radio Group](#radio-group)[Switch](#switch)[Complex Forms](#complex-forms)[Resetting the Form](#resetting-the-form)[Array Fields](#array-fields)[Array Field Structure](#array-field-structure)[Nested Fields](#nested-fields)[Adding Items](#adding-items)[Removing Items](#removing-items)[Array Validation](#array-validation)

Deploy your shadcn/ui app on Vercel

Trusted by OpenAI, Sonos, Adobe, and more.

Vercel provides tools and infrastructure to deploy apps and features at scale.

Deploy Now[Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site\&utm_medium=web\&utm_campaign=docs_cta_deploy_now_callout)
