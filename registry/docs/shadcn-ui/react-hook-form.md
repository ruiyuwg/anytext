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

# React Hook Form

Copy Page

[Previous](/docs/forms)[Next](/docs/forms/tanstack-form)

Build forms in React using React Hook Form and Zod.

In this guide, we will take a look at building forms with React Hook Form. We'll cover building forms with the `<Field />` component, adding schema validation using Zod, error handling, accessibility, and more.

## Demo

We are going to build the following form. It has a simple text input and a textarea. On submit, we'll validate the form data and display any errors.

**Note:** For the purpose of this demo, we have intentionally disabled browser validation to show how schema validation and form errors work in React Hook Form. It is recommended to add basic browser validation in your production code.

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

This form leverages React Hook Form for performant, flexible form handling. We'll build our form using the `<Field />` component, which gives you **complete flexibility over the markup and styling**.

- Uses React Hook Form's `useForm` hook for form state management.
- `<Controller />` component for controlled inputs.
- `<Field />` components for building accessible forms.
- Client-side validation using Zod with `zodResolver`.

## Anatomy

Here's a basic example of a form using the `<Controller />` component from React Hook Form and the `<Field />` component.

Copy`<Controller   name="title"   control={form.control}   render={({ field, fieldState }) => (     <Field data-invalid={fieldState.invalid}>       <FieldLabel htmlFor={field.name}>Bug Title</FieldLabel>       <Input         {...field}         id={field.name}         aria-invalid={fieldState.invalid}         placeholder="Login button not working on mobile"         autoComplete="off"       />       <FieldDescription>         Provide a concise title for your bug report.       </FieldDescription>       {fieldState.invalid && <FieldError errors={[fieldState.error]} />}     </Field>   )} />`

## Form

### Create a form schema

We'll start by defining the shape of our form using a Zod schema.

**Note:** This example uses `zod v3` for schema validation, but you can replace it with any other Standard Schema validation library supported by React Hook Form.

form.tsx

Copy`import * as z from "zod"   const formSchema = z.object({   title: z     .string()     .min(5, "Bug title must be at least 5 characters.")     .max(32, "Bug title must be at most 32 characters."),   description: z     .string()     .min(20, "Description must be at least 20 characters.")     .max(100, "Description must be at most 100 characters."), })`

### Set up the form

Next, we'll use the `useForm` hook from React Hook Form to create our form instance. We'll also add the Zod resolver to validate the form data.

form.tsx

Copy`import { zodResolver } from "@hookform/resolvers/zod" import { useForm } from "react-hook-form" import * as z from "zod"   const formSchema = z.object({   title: z     .string()     .min(5, "Bug title must be at least 5 characters.")     .max(32, "Bug title must be at most 32 characters."),   description: z     .string()     .min(20, "Description must be at least 20 characters.")     .max(100, "Description must be at most 100 characters."), })   export function BugReportForm() {   const form = useForm<z.infer<typeof formSchema>>({     resolver: zodResolver(formSchema),     defaultValues: {       title: "",       description: "",     },   })     function onSubmit(data: z.infer<typeof formSchema>) {     // Do something with the form values.     console.log(data)   }     return (     <form onSubmit={form.handleSubmit(onSubmit)}>       {/* ... */}       {/* Build the form here */}       {/* ... */}     </form>   ) }`

### Build the form

We can now build the form using the `<Controller />` component from React Hook Form and the `<Field />` component.

Expand

form.tsx

Copy

```
"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
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
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast("You submitted the following values:", {
      description: (
        <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
          <code>{JSON.stringify(data, null, 2)}</code>
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
  }

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>Bug Report</CardTitle>
        <CardDescription>
          Help us improve by reporting bugs you encounter.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="title"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">
                    Bug Title
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="Login button not working on mobile"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="description"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-description">
                    Description
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      id="form-rhf-demo-description"
                      placeholder="I'm having an issue with the login button on mobile."
                      rows={6}
                      className="min-h-24 resize-none"
                      aria-invalid={fieldState.invalid}
                    />
                    <InputGroupAddon align="block-end">
                      <InputGroupText className="tabular-nums">
                        {field.value.length}/100 characters
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                  <FieldDescription>
                    Include steps to reproduce, expected behavior, and what
                    actually happened.
                  </FieldDescription>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit" form="form-rhf-demo">
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

When you submit the form, the `onSubmit` function will be called with the validated form data. If the form data is invalid, React Hook Form will display the errors next to each field.

## Validation

### Client-side Validation

React Hook Form validates your form data using the Zod schema. Define a schema and pass it to the `resolver` option of the `useForm` hook.

example-form.tsx

Copy`import { zodResolver } from "@hookform/resolvers/zod" import { useForm } from "react-hook-form" import * as z from "zod"   const formSchema = z.object({   title: z.string(),   description: z.string().optional(), })   export function ExampleForm() {   const form = useForm<z.infer<typeof formSchema>>({     resolver: zodResolver(formSchema),     defaultValues: {       title: "",       description: "",     },   }) }`

### Validation Modes

React Hook Form supports different validation modes.

form.tsx

Copy`const form = useForm<z.infer<typeof formSchema>>({   resolver: zodResolver(formSchema),   mode: "onChange", })`

Mode

Description

`"onChange"`

Validation triggers on every change.

`"onBlur"`

Validation triggers on blur.

`"onSubmit"`

Validation triggers on submit (default).

`"onTouched"`

Validation triggers on first blur, then on every change.

`"all"`

Validation triggers on blur and change.

## Displaying Errors

Display errors next to the field using `<FieldError />`. For styling and accessibility:

- Add the `data-invalid` prop to the `<Field />` component.
- Add the `aria-invalid` prop to the form control such as `<Input />`, `<SelectTrigger />`, `<Checkbox />`, etc.

form.tsx

Copy`<Controller   name="email"   control={form.control}   render={({ field, fieldState }) => (     <Field data-invalid={fieldState.invalid}>       <FieldLabel htmlFor={field.name}>Email</FieldLabel>       <Input         {...field}         id={field.name}         type="email"         aria-invalid={fieldState.invalid}       />       {fieldState.invalid && <FieldError errors={[fieldState.error]} />}     </Field>   )} />`

## Working with Different Field Types

### Input

- For input fields, spread the `field` object onto the `<Input />` component.
- To show errors, add the `aria-invalid` prop to the `<Input />` component and the `data-invalid` prop to the `<Field />` component.

Profile Settings

Update your profile information below.

Username

This is your public display name. Must be between 3 and 10 characters. Must only contain letters, numbers, and underscores.

ResetSave

Copy

```
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
```

View Code

For simple text inputs, spread the `field` object onto the input.

form.tsx

Copy`<Controller   name="name"   control={form.control}   render={({ field, fieldState }) => (     <Field data-invalid={fieldState.invalid}>       <FieldLabel htmlFor={field.name}>Name</FieldLabel>       <Input {...field} id={field.name} aria-invalid={fieldState.invalid} />       {fieldState.invalid && <FieldError errors={[fieldState.error]} />}     </Field>   )} />`

### Textarea

- For textarea fields, spread the `field` object onto the `<Textarea />` component.
- To show errors, add the `aria-invalid` prop to the `<Textarea />` component and the `data-invalid` prop to the `<Field />` component.

Personalization

Customize your experience by telling us more about yourself.

More about you

Tell us more about yourself. This will be used to help us personalize your experience.

ResetSave

Copy

```
"use client"

import * as React from "react"
```

View Code

For textarea fields, spread the `field` object onto the textarea.

form.tsx

Copy`<Controller   name="about"   control={form.control}   render={({ field, fieldState }) => (     <Field data-invalid={fieldState.invalid}>       <FieldLabel htmlFor="form-rhf-textarea-about">More about you</FieldLabel>       <Textarea         {...field}         id="form-rhf-textarea-about"         aria-invalid={fieldState.invalid}         placeholder="I'm a software engineer..."         className="min-h-[120px]"       />       <FieldDescription>         Tell us more about yourself. This will be used to help us personalize         your experience.       </FieldDescription>       {fieldState.invalid && <FieldError errors={[fieldState.error]} />}     </Field>   )} />`

### Select

- For select components, use `field.value` and `field.onChange` on the `<Select />` component.
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

import * as React from "react"
```

View Code

form.tsx

Copy`<Controller   name="language"   control={form.control}   render={({ field, fieldState }) => (     <Field orientation="responsive" data-invalid={fieldState.invalid}>       <FieldContent>         <FieldLabel htmlFor="form-rhf-select-language">           Spoken Language         </FieldLabel>         <FieldDescription>           For best results, select the language you speak.         </FieldDescription>         {fieldState.invalid && <FieldError errors={[fieldState.error]} />}       </FieldContent>       <Select         name={field.name}         value={field.value}         onValueChange={field.onChange}       >         <SelectTrigger           id="form-rhf-select-language"           aria-invalid={fieldState.invalid}           className="min-w-[120px]"         >           <SelectValue placeholder="Select" />         </SelectTrigger>         <SelectContent position="item-aligned">           <SelectItem value="auto">Auto</SelectItem>           <SelectItem value="en">English</SelectItem>         </SelectContent>       </Select>     </Field>   )} />`

### Checkbox

- For checkbox arrays, use `field.value` and `field.onChange` with array manipulation.
- To show errors, add the `aria-invalid` prop to the `<Checkbox />` component and the `data-invalid` prop to the `<Field />` component.
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

import * as React from "react"
```

View Code

form.tsx

Copy``<Controller   name="tasks"   control={form.control}   render={({ field, fieldState }) => (     <FieldSet>       <FieldLegend variant="label">Tasks</FieldLegend>       <FieldDescription>         Get notified when tasks you&apos;ve created have updates.       </FieldDescription>       <FieldGroup data-slot="checkbox-group">         {tasks.map((task) => (           <Field             key={task.id}             orientation="horizontal"             data-invalid={fieldState.invalid}           >             <Checkbox               id={`form-rhf-checkbox-${task.id}`}               name={field.name}               aria-invalid={fieldState.invalid}               checked={field.value.includes(task.id)}               onCheckedChange={(checked) => {                 const newValue = checked                   ? [...field.value, task.id]                   : field.value.filter((value) => value !== task.id)                 field.onChange(newValue)               }}             />             <FieldLabel               htmlFor={`form-rhf-checkbox-${task.id}`}               className="font-normal"             >               {task.label}             </FieldLabel>           </Field>         ))}       </FieldGroup>       {fieldState.invalid && <FieldError errors={[fieldState.error]} />}     </FieldSet>   )} />``

### Radio Group

- For radio groups, use `field.value` and `field.onChange` on the `<RadioGroup />` component.
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

import * as React from "react"
```

View Code

form.tsx

Copy``<Controller   name="plan"   control={form.control}   render={({ field, fieldState }) => (     <FieldSet>       <FieldLegend>Plan</FieldLegend>       <FieldDescription>         You can upgrade or downgrade your plan at any time.       </FieldDescription>       <RadioGroup         name={field.name}         value={field.value}         onValueChange={field.onChange}       >         {plans.map((plan) => (           <FieldLabel key={plan.id} htmlFor={`form-rhf-radiogroup-${plan.id}`}>             <Field orientation="horizontal" data-invalid={fieldState.invalid}>               <FieldContent>                 <FieldTitle>{plan.title}</FieldTitle>                 <FieldDescription>{plan.description}</FieldDescription>               </FieldContent>               <RadioGroupItem                 value={plan.id}                 id={`form-rhf-radiogroup-${plan.id}`}                 aria-invalid={fieldState.invalid}               />             </Field>           </FieldLabel>         ))}       </RadioGroup>       {fieldState.invalid && <FieldError errors={[fieldState.error]} />}     </FieldSet>   )} />``

### Switch

- For switches, use `field.value` and `field.onChange` on the `<Switch />` component.
- To show errors, add the `aria-invalid` prop to the `<Switch />` component and the `data-invalid` prop to the `<Field />` component.

Security Settings

Manage your account security preferences.

Multi-factor authentication

Enable multi-factor authentication to secure your account.

ResetSave

Copy

```
"use client"

import * as React from "react"
```

View Code

form.tsx

Copy`<Controller   name="twoFactor"   control={form.control}   render={({ field, fieldState }) => (     <Field orientation="horizontal" data-invalid={fieldState.invalid}>       <FieldContent>         <FieldLabel htmlFor="form-rhf-switch-twoFactor">           Multi-factor authentication         </FieldLabel>         <FieldDescription>           Enable multi-factor authentication to secure your account.         </FieldDescription>         {fieldState.invalid && <FieldError errors={[fieldState.error]} />}       </FieldContent>       <Switch         id="form-rhf-switch-twoFactor"         name={field.name}         checked={field.value}         onCheckedChange={field.onChange}         aria-invalid={fieldState.invalid}       />     </Field>   )} />`

### Complex Forms

Here is an example of a more complex form with multiple fields and validation.

You're almost there!

Choose your subscription plan and billing period.

Subscription Plan

Choose your subscription plan.

Basic

For individuals and small teams

Pro

For businesses with higher demands

Billing PeriodSelect

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

Save PreferencesReset

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

React Hook Form provides a `useFieldArray` hook for managing dynamic array fields. This is useful when you need to add or remove fields dynamically.

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

### Using useFieldArray

Use the `useFieldArray` hook to manage array fields. It provides `fields`, `append`, and `remove` methods.

form.tsx

Copy`import { useFieldArray, useForm } from "react-hook-form"   export function ExampleForm() {   const form = useForm({     // ... form config   })     const { fields, append, remove } = useFieldArray({     control: form.control,     name: "emails",   }) }`

### Array Field Structure

Wrap your array fields in a `<FieldSet />` with a `<FieldLegend />` and `<FieldDescription />`.

form.tsx

Copy`<FieldSet className="gap-4">   <FieldLegend variant="label">Email Addresses</FieldLegend>   <FieldDescription>     Add up to 5 email addresses where we can contact you.   </FieldDescription>   <FieldGroup className="gap-4">{/* Array items go here */}</FieldGroup> </FieldSet>`

### Controller Pattern for Array Items

Map over the `fields` array and use `<Controller />` for each item. **Make sure to use `field.id` as the key**.

form.tsx

Copy``{   fields.map((field, index) => (     <Controller       key={field.id}       name={`emails.${index}.address`}       control={form.control}       render={({ field: controllerField, fieldState }) => (         <Field orientation="horizontal" data-invalid={fieldState.invalid}>           <FieldContent>             <InputGroup>               <InputGroupInput                 {...controllerField}                 id={`form-rhf-array-email-${index}`}                 aria-invalid={fieldState.invalid}                 placeholder="name@example.com"                 type="email"                 autoComplete="email"               />               {/* Remove button */}             </InputGroup>             {fieldState.invalid && <FieldError errors={[fieldState.error]} />}           </FieldContent>         </Field>       )}     />   )) }``

### Adding Items

Use the `append` method to add new items to the array.

form.tsx

Copy`<Button   type="button"   variant="outline"   size="sm"   onClick={() => append({ address: "" })}   disabled={fields.length >= 5} >   Add Email Address </Button>`

### Removing Items

Use the `remove` method to remove items from the array. Add the remove button conditionally.

form.tsx

Copy``{   fields.length > 1 && (     <InputGroupAddon align="inline-end">       <InputGroupButton         type="button"         variant="ghost"         size="icon-xs"         onClick={() => remove(index)}         aria-label={`Remove email ${index + 1}`}       >         <XIcon />       </InputGroupButton>     </InputGroupAddon>   ) }``

### Array Validation

Use Zod's `array` method to validate array fields.

form.tsx

Copy`const formSchema = z.object({   emails: z     .array(       z.object({         address: z.string().email("Enter a valid email address."),       })     )     .min(1, "Add at least one email address.")     .max(5, "You can add up to 5 email addresses."), })`

[Forms](/docs/forms)[TanStack Form](/docs/forms/tanstack-form)

On This Page

[Demo](#demo)[Approach](#approach)[Anatomy](#anatomy)[Form](#form)[Create a form schema](#create-a-form-schema)[Set up the form](#set-up-the-form)[Build the form](#build-the-form)[Done](#done)[Validation](#validation)[Client-side Validation](#client-side-validation)[Validation Modes](#validation-modes)[Displaying Errors](#displaying-errors)[Working with Different Field Types](#working-with-different-field-types)[Input](#input)[Textarea](#textarea)[Select](#select)[Checkbox](#checkbox)[Radio Group](#radio-group)[Switch](#switch)[Complex Forms](#complex-forms)[Resetting the Form](#resetting-the-form)[Array Fields](#array-fields)[Using useFieldArray](#using-usefieldarray)[Array Field Structure](#array-field-structure)[Controller Pattern for Array Items](#controller-pattern-for-array-items)[Adding Items](#adding-items)[Removing Items](#removing-items)[Array Validation](#array-validation)

Deploy your shadcn/ui app on Vercel

Trusted by OpenAI, Sonos, Adobe, and more.

Vercel provides tools and infrastructure to deploy apps and features at scale.

Deploy Now[Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site\&utm_medium=web\&utm_campaign=docs_cta_deploy_now_callout)
