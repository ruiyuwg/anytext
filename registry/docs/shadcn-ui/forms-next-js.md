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

# Next.js

Copy Page

[Previous](/docs/changelog/2026-03-cli-v4)[Next](/docs/installation/gatsby)

Build forms in React using useActionState and Server Actions.

In this guide, we will take a look at building forms with Next.js using `useActionState` and Server Actions. We'll cover building forms, validation, pending states, accessibility, and more.

## Demo

We are going to build the following form with a simple text input and a textarea. On submit, we'll use a server action to validate the form data and update the form state.

Bug Report

Help us improve by reporting bugs you encounter.

Bug Title

Description

0/100 characters

Include steps to reproduce, expected behavior, and what actually happened.

Submit

Copy

```
"use client"

import * as React from "react"
```

View Code

**Note:** The examples on this page intentionally disable browser validation to show how schema validation and form errors work in server actions.

## Approach

This form leverages Next.js and React's built-in capabilities for form handling. We'll build our form using the `<Field />` component, which gives you **complete flexibility over the markup and styling**.

- Uses Next.js `<Form />` component for navigation and progressive enhancement.
- `<Field />` components for building accessible forms.
- `useActionState` for managing form state and errors.
- Handles loading states with the pending prop.
- Server Actions for handling form submissions.
- Server-side validation using Zod.

## Anatomy

Here's a basic example of a form using the `<Field />` component.

Copy`<Form action={formAction}>   <FieldGroup>     <Field data-invalid={!!formState.errors?.title?.length}>       <FieldLabel htmlFor="title">Bug Title</FieldLabel>       <Input         id="title"         name="title"         defaultValue={formState.values.title}         disabled={pending}         aria-invalid={!!formState.errors?.title?.length}         placeholder="Login button not working on mobile"         autoComplete="off"       />       <FieldDescription>         Provide a concise title for your bug report.       </FieldDescription>       {formState.errors?.title && (         <FieldError>{formState.errors.title[0]}</FieldError>       )}     </Field>   </FieldGroup>   <Button type="submit">Submit</Button> </Form>`

## Usage

### Create a form schema

We'll start by defining the shape of our form using a Zod schema in a `schema.ts` file.

**Note:** This example uses `zod v3` for schema validation, but you can replace it with any other schema validation library. Make sure your schema library conforms to the Standard Schema specification.

schema.ts

Copy`import { z } from "zod"   export const formSchema = z.object({   title: z     .string()     .min(5, "Bug title must be at least 5 characters.")     .max(32, "Bug title must be at most 32 characters."),   description: z     .string()     .min(20, "Description must be at least 20 characters.")     .max(100, "Description must be at most 100 characters."), })`

### Define the form state type

Next, we'll create a type for our form state that includes values, errors, and success status. This will be used to type the form state on the client and server.

schema.ts

Copy`import { z } from "zod"   export type FormState = {   values?: z.infer<typeof formSchema>   errors: null | Partial<Record<keyof z.infer<typeof formSchema>, string[]>>   success: boolean }`

**Important:** We define the schema and the `FormState` type in a separate file so we can import them into both the client and server components.

### Create the Server Action

A server action is a function that runs on the server and can be called from the client. We'll use it to validate the form data and update the form state.

Expand

actions.ts

Copy

```
"use server"

import { formSchema, type FormState } from "./form-next-demo-schema"

export async function demoFormAction(
  _prevState: FormState,
  formData: FormData
) {
  const values = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
  }

  const result = formSchema.safeParse(values)

  if (!result.success) {
    return {
      values,
      success: false,
      errors: result.error.flatten().fieldErrors,
    }
  }

  // Do something with the values.
  // Call your database or API here.

  return {
    values: {
      title: "",
      description: "",
    },
    errors: null,
    success: true,
  }
}
```

Expand

**Note:** We're returning `values` for error cases. This is because we want to keep the user submitted values in the form state. For success cases, we're returning empty values to reset the form.

### Build the form

We can now build the form using the `<Field />` component. We'll use the `useActionState` hook to manage the form state, server action, and pending state.

Expand

form.tsx

Copy

```
"use client"

import * as React from "react"
import Form from "next/form"
import { toast } from "sonner"

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
import { Spinner } from "@/components/ui/spinner"

import { demoFormAction } from "./form-next-demo-action"
import { type FormState } from "./form-next-demo-schema"

export function FormNextDemo() {
  const [formState, formAction, pending] = React.useActionState<
    FormState,
    FormData
  >(demoFormAction, {
    values: {
      title: "",
      description: "",
    },
    errors: null,
    success: false,
  })
  const [descriptionLength, setDescriptionLength] = React.useState(0)

  React.useEffect(() => {
    if (formState.success) {
      toast("Thank you for your feedback", {
        description: "We'll review your report and get back to you soon.",
      })
    }
  }, [formState.success])

  React.useEffect(() => {
    setDescriptionLength(formState.values.description.length)
  }, [formState.values.description])

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Bug Report</CardTitle>
        <CardDescription>
          Help us improve by reporting bugs you encounter.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form action={formAction} id="bug-report-form">
          <FieldGroup>
            <Field data-invalid={!!formState.errors?.title?.length}>
              <FieldLabel htmlFor="title">Bug Title</FieldLabel>
              <Input
                id="title"
                name="title"
                defaultValue={formState.values.title}
                disabled={pending}
                aria-invalid={!!formState.errors?.title?.length}
                placeholder="Login button not working on mobile"
                autoComplete="off"
              />
              {formState.errors?.title && (
                <FieldError>{formState.errors.title[0]}</FieldError>
              )}
            </Field>
            <Field data-invalid={!!formState.errors?.description?.length}>
              <FieldLabel htmlFor="description">Description</FieldLabel>
              <InputGroup>
                <InputGroupTextarea
                  id="description"
                  name="description"
                  defaultValue={formState.values.description}
                  placeholder="I'm having an issue with the login button on mobile."
                  rows={6}
                  className="min-h-24 resize-none"
                  disabled={pending}
                  aria-invalid={!!formState.errors?.description?.length}
                  onChange={(e) => setDescriptionLength(e.target.value.length)}
                />
                <InputGroupAddon align="block-end">
                  <InputGroupText className="tabular-nums">
                    {descriptionLength}/100 characters
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
              <FieldDescription>
                Include steps to reproduce, expected behavior, and what actually
                happened.
              </FieldDescription>
              {formState.errors?.description && (
                <FieldError>{formState.errors.description[0]}</FieldError>
              )}
            </Field>
          </FieldGroup>
        </Form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="submit" disabled={pending} form="bug-report-form">
            {pending && <Spinner />}
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

That's it. You now have a fully accessible form with client and server-side validation.

When you submit the form, the `formAction` function will be called on the server. The server action will validate the form data and update the form state.

If the form data is invalid, the server action will return the errors to the client. If the form data is valid, the server action will return the success status and update the form state.

## Pending States

Use the `pending` prop from `useActionState` to show loading indicators and disable form inputs.

Copy`"use client"   import * as React from "react" import Form from "next/form"   import { Spinner } from "@/components/ui/spinner"   import { bugReportFormAction } from "./actions"   export function BugReportForm() {   const [formState, formAction, pending] = React.useActionState(     bugReportFormAction,     {       errors: null,       success: false,     }   )     return (     <Form action={formAction}>       <FieldGroup>         <Field data-disabled={pending}>           <FieldLabel htmlFor="name">Name</FieldLabel>           <Input id="name" name="name" disabled={pending} />         </Field>         <Field>           <Button type="submit" disabled={pending}>             {pending && <Spinner />} Submit           </Button>         </Field>       </FieldGroup>     </Form>   ) }`

## Disabled States

### Submit Button

To disable the submit button, use the `pending` prop on the button's `disabled` prop.

Copy`<Button type="submit" disabled={pending}>   {pending && <Spinner />} Submit </Button>`

### Field

To apply a disabled state and styling to a `<Field />` component, use the `data-disabled` prop on the `<Field />` component.

Copy`<Field data-disabled={pending}>   <FieldLabel htmlFor="name">Name</FieldLabel>   <Input id="name" name="name" disabled={pending} /> </Field>`

## Validation

### Server-side Validation

Use `safeParse()` on your schema in your server action to validate the form data.

actions.ts

Copy`"use server"   export async function bugReportFormAction(   _prevState: FormState,   formData: FormData ) {   const values = {     title: formData.get("title") as string,     description: formData.get("description") as string,   }     const result = formSchema.safeParse(values)     if (!result.success) {     return {       values,       success: false,       errors: result.error.flatten().fieldErrors,     }   }     return {     errors: null,     success: true,   } }`

### Business Logic Validation

You can add additional custom validation logic in your server action.

Make sure to return the values on validation errors. This is to ensure that the form state maintains the user's input.

actions.ts

Copy`"use server"   export async function bugReportFormAction(   _prevState: FormState,   formData: FormData ) {   const values = {     title: formData.get("title") as string,     description: formData.get("description") as string,   }     const result = formSchema.safeParse(values)     if (!result.success) {     return {       values,       success: false,       errors: result.error.flatten().fieldErrors,     }   }     // Check if email already exists in database.   const existingUser = await db.user.findUnique({     where: { email: result.data.email },   })     if (existingUser) {     return {       values,       success: false,       errors: {         email: ["This email is already registered"],       },     }   }     return {     errors: null,     success: true,   } }`

## Displaying Errors

Display errors next to the field using `<FieldError />`. Make sure to add the `data-invalid` prop to the `<Field />` component and `aria-invalid` prop to the input.

Copy`<Field data-invalid={!!formState.errors?.email?.length}>   <FieldLabel htmlFor="email">Email</FieldLabel>   <Input     id="email"     name="email"     type="email"     aria-invalid={!!formState.errors?.email?.length}   />   {formState.errors?.email && (     <FieldError>{formState.errors.email[0]}</FieldError>   )} </Field>`

## Resetting the Form

When you submit a form with a server action, React will automatically reset the form state to the initial values.

### Reset on Success

To reset the form on success, you can omit the `values` from the server action and React will automatically reset the form state to the initial values. This is standard React behavior.

actions.ts

Copy`export async function demoFormAction(   _prevState: FormState,   formData: FormData ) {   const values = {     title: formData.get("title") as string,     description: formData.get("description") as string,   }     // Validation.   if (!result.success) {     return {       values,       success: false,       errors: result.error.flatten().fieldErrors,     }   }     // Business logic.   callYourDatabaseOrAPI(values)     // Omit the values on success to reset the form state.   return {     errors: null,     success: true,   } }`

### Preserve on Validation Errors

To prevent the form from being reset on failure, you can return the values in the server action. This is to ensure that the form state maintains the user's input.

actions.ts

Copy`export async function demoFormAction(   _prevState: FormState,   formData: FormData ) {   const values = {     title: formData.get("title") as string,     description: formData.get("description") as string,   }     // Validation.   if (!result.success) {     return {       // Return the values on validation errors.       values,       success: false,       errors: result.error.flatten().fieldErrors,     }   } }`

## Complex Forms

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

### Schema

Expand

schema.ts

Copy

```
import { z } from "zod"

export const formSchema = z.object({
  plan: z
    .string({
      required_error: "Please select a subscription plan",
    })
    .min(1, "Please select a subscription plan")
    .refine((value) => value === "basic" || value === "pro", {
      message: "Invalid plan selection. Please choose Basic or Pro",
    }),
  billingPeriod: z
    .string({
      required_error: "Please select a billing period",
    })
    .min(1, "Please select a billing period"),
  addons: z
    .array(z.string())
    .min(1, "Please select at least one add-on")
    .max(3, "You can select up to 3 add-ons")
    .refine(
      (value) => value.every((addon) => addons.some((a) => a.id === addon)),
      {
        message: "You selected an invalid add-on",
      }
    ),
  emailNotifications: z.boolean(),
})

export type FormState = {
  values: z.infer<typeof formSchema>
  errors: null | Partial<Record<keyof z.infer<typeof formSchema>, string[]>>
  success: boolean
}

export const addons = [
  {
    id: "analytics",
    title: "Analytics",
    description: "Advanced analytics and reporting",
  },
  {
    id: "backup",
    title: "Backup",
    description: "Automated daily backups",
  },
  {
    id: "support",
    title: "Priority Support",
    description: "24/7 premium customer support",
  },
] as const
```

Expand

### Form

Expand

form.tsx

Copy

```
"use client"

import * as React from "react"
import Form from "next/form"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Spinner } from "@/components/ui/spinner"
import { Switch } from "@/components/ui/switch"

import { complexFormAction } from "./form-next-complex-action"
import { addons, type FormState } from "./form-next-complex-schema"

export function FormNextComplex() {
  const [formState, formAction, pending] = React.useActionState<
    FormState,
    FormData
  >(complexFormAction, {
    values: {
      plan: "basic",
      billingPeriod: "monthly",
      addons: [],
      emailNotifications: false,
    },
    errors: null,
    success: false,
  })

  React.useEffect(() => {
    if (formState.success) {
      toast.success("Preferences saved", {
        description: "Your subscription plan has been updated.",
      })
    }
  }, [formState.success])

  return (
    <Card className="w-full max-w-sm">
      <CardContent>
        <Form action={formAction} id="subscription-form">
          <FieldGroup>
            <FieldSet data-invalid={!!formState.errors?.plan?.length}>
              <FieldLegend>Subscription Plan</FieldLegend>
              <FieldDescription>
                Choose your subscription plan.
              </FieldDescription>
              <RadioGroup
                name="plan"
                defaultValue={formState.values.plan}
                disabled={pending}
                aria-invalid={!!formState.errors?.plan?.length}
              >
                <FieldLabel htmlFor="basic">
                  <Field orientation="horizontal">
                    <FieldContent>
                      <FieldTitle>Basic</FieldTitle>
                      <FieldDescription>
                        For individuals and small teams
                      </FieldDescription>
                    </FieldContent>
                    <RadioGroupItem value="basic" id="basic" />
                  </Field>
                </FieldLabel>
                <FieldLabel htmlFor="pro">
                  <Field orientation="horizontal">
                    <FieldContent>
                      <FieldTitle>Pro</FieldTitle>
                      <FieldDescription>
                        For businesses with higher demands
                      </FieldDescription>
                    </FieldContent>
                    <RadioGroupItem value="pro" id="pro" />
                  </Field>
                </FieldLabel>
              </RadioGroup>
              {formState.errors?.plan && (
                <FieldError>{formState.errors.plan[0]}</FieldError>
              )}
            </FieldSet>
            <FieldSeparator />
            <Field data-invalid={!!formState.errors?.billingPeriod?.length}>
              <FieldLabel htmlFor="billingPeriod">Billing Period</FieldLabel>
              <Select
                name="billingPeriod"
                defaultValue={formState.values.billingPeriod}
                disabled={pending}
                aria-invalid={!!formState.errors?.billingPeriod?.length}
              >
                <SelectTrigger id="billingPeriod">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="yearly">Yearly</SelectItem>
                </SelectContent>
              </Select>
              <FieldDescription>
                Choose how often you want to be billed.
              </FieldDescription>
              {formState.errors?.billingPeriod && (
                <FieldError>{formState.errors.billingPeriod[0]}</FieldError>
              )}
            </Field>
            <FieldSeparator />
            <FieldSet>
              <FieldLegend>Add-ons</FieldLegend>
              <FieldDescription>
                Select additional features you&apos;d like to include.
              </FieldDescription>
              <FieldGroup data-slot="checkbox-group">
                {addons.map((addon) => (
                  <Field
                    key={addon.id}
                    orientation="horizontal"
                    data-invalid={!!formState.errors?.addons?.length}
                  >
                    <Checkbox
                      id={addon.id}
                      name="addons"
                      value={addon.id}
                      defaultChecked={formState.values.addons.includes(
                        addon.id
                      )}
                      disabled={pending}
                      aria-invalid={!!formState.errors?.addons?.length}
                    />
                    <FieldContent>
                      <FieldLabel htmlFor={addon.id}>{addon.title}</FieldLabel>
                      <FieldDescription>{addon.description}</FieldDescription>
                    </FieldContent>
                  </Field>
                ))}
              </FieldGroup>
              {formState.errors?.addons && (
                <FieldError>{formState.errors.addons[0]}</FieldError>
              )}
            </FieldSet>
            <FieldSeparator />
            <Field orientation="horizontal">
              <FieldContent>
                <FieldLabel htmlFor="emailNotifications">
                  Email Notifications
                </FieldLabel>
                <FieldDescription>
                  Receive email updates about your subscription
                </FieldDescription>
              </FieldContent>
              <Switch
                id="emailNotifications"
                name="emailNotifications"
                defaultChecked={formState.values.emailNotifications}
                disabled={pending}
                aria-invalid={!!formState.errors?.emailNotifications?.length}
              />
            </Field>
          </FieldGroup>
        </Form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal" className="justify-end">
          <Button type="submit" disabled={pending} form="subscription-form">
            {pending && <Spinner />}
            Save Preferences
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
```

Expand

### Server Action

Expand

actions.ts

Copy

```
"use server"

import { formSchema, type FormState } from "./form-next-complex-schema"

export async function complexFormAction(
  _prevState: FormState,
  formData: FormData
) {
  // Sleep for 1 second
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const values = {
    plan: formData.get("plan") as FormState["values"]["plan"],
    billingPeriod: formData.get("billingPeriod") as string,
    addons: formData.getAll("addons") as string[],
    emailNotifications: formData.get("emailNotifications") === "on",
  }

  const result = formSchema.safeParse(values)

  if (!result.success) {
    return {
      values,
      success: false,
      errors: result.error.flatten().fieldErrors,
    }
  }

  // Do something with the values.
  // Call your database or API here.

  return {
    values,
    errors: null,
    success: true,
  }
}
```

Expand

[March 2026 - shadcn/cli v4](/docs/changelog/2026-03-cli-v4)[Gatsby](/docs/installation/gatsby)

On This Page

[Demo](#demo)[Approach](#approach)[Anatomy](#anatomy)[Usage](#usage)[Create a form schema](#create-a-form-schema)[Define the form state type](#define-the-form-state-type)[Create the Server Action](#create-the-server-action)[Build the form](#build-the-form)[Done](#done)[Pending States](#pending-states)[Disabled States](#disabled-states)[Submit Button](#submit-button)[Field](#field)[Validation](#validation)[Server-side Validation](#server-side-validation)[Business Logic Validation](#business-logic-validation)[Displaying Errors](#displaying-errors)[Resetting the Form](#resetting-the-form)[Reset on Success](#reset-on-success)[Preserve on Validation Errors](#preserve-on-validation-errors)[Complex Forms](#complex-forms)[Schema](#schema)[Form](#form)[Server Action](#server-action)

Deploy your shadcn/ui app on Vercel

Trusted by OpenAI, Sonos, Adobe, and more.

Vercel provides tools and infrastructure to deploy apps and features at scale.

Deploy Now[Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site\&utm_medium=web\&utm_campaign=docs_cta_deploy_now_callout)
