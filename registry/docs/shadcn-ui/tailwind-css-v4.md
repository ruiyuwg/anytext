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

# Tailwind v4

Copy Page

[Previous](/docs/react-19)[Next](/docs/changelog/2023-06-new-cli)

How to use shadcn/ui with Tailwind v4 and React 19.

It’s here! Tailwind v4 and React 19. Ready for you to try out. You can start using it today.

## What's New

- The CLI can now initialize projects with Tailwind v4.
- Full support for the new `@theme` directive and `@theme inline` option.
- All components are updated for Tailwind v4 and React 19.
- We’ve removed the forwardRefs and adjusted the types.
- Every primitive now has a `data-slot` attribute for styling.
- We've fixed and cleaned up the style of the components.
- We're deprecating the `toast` component in favor of `sonner`.
- Buttons now use the default cursor.
- We're deprecating the `default` style. New projects will use `new-york`.
- HSL colors are now converted to OKLCH.

**Note: this is non-breaking. Your existing apps with Tailwind v3 and React 18 will still work. When you add new components, they'll still be in v3 and React 18 until you upgrade. Only new projects start with Tailwind v4 and React 19.**

## Try It Out

You can start using Tailwind v4 + React 19 today. See the framework specific guides below for how to get started.

\[Next.js

Next.js

]\(/docs/installation/next)\[Vite

Vite

]\(/docs/installation/vite)\[

Laravel

]\(/docs/installation/laravel)\[

React Router

]\(/docs/installation/react-router)\[Astro

Astro

]\(/docs/installation/astro)\[

TanStack Start

]\(/docs/installation/tanstack)\[Gatsby

Gatsby

]\(/docs/installation/gatsby)\[React

Manual

]\(/docs/installation/manual)

## Upgrade Your Project

**Important:** Before upgrading, please read the [Tailwind v4 Compatibility Docs](https://tailwindcss.com/docs/compatibility) and make sure your project is ready for the upgrade. Tailwind v4 uses bleeding-edge browser features and is designed for modern browsers.

One of the major advantages of using `shadcn/ui` is that the code you end up with is exactly what you'd write yourself. There are no hidden abstractions.

This means when a dependency has a new release, you can just follow the official upgrade paths.

Here's how to upgrade your existing projects (full docs are on the way):

### 1. Follow the Tailwind v4 Upgrade Guide

- Upgrade to Tailwind v4 by following the official upgrade guide: <https://tailwindcss.com/docs/upgrade-guide>
- Use the `@tailwindcss/upgrade@next` codemod to remove deprecated utility classes and update tailwind config.

### 2. Update your CSS variables

The codemod will migrate your CSS variables as references under the `@theme` directive.

Copy`@layer base {   :root {     --background: 0 0% 100%;     --foreground: 0 0% 3.9%;   } }   @theme {   --color-background: hsl(var(--background));   --color-foreground: hsl(var(--foreground)); }`

This works. But to make it easier to work with colors and other variables, we'll need to move the `hsl` wrappers and use `@theme inline`.

Here's how you do it:

1. Move `:root` and `.dark` out of the `@layer` base.
2. Wrap the color values in `hsl()`
3. Add the `inline` option to `@theme` i.e `@theme inline`
4. Remove the `hsl()` wrappers from `@theme`

Copy`:root {   --background: hsl(0 0% 100%); // <-- Wrap in hsl   --foreground: hsl(0 0% 3.9%); }   .dark {   --background: hsl(0 0% 3.9%); // <-- Wrap in hsl   --foreground: hsl(0 0% 98%); }   @theme inline {   --color-background: var(--background); // <-- Remove hsl   --color-foreground: var(--foreground); }`

This change makes it much simpler to access your theme variables in both utility classes and outside of CSS, e.g. using color values in JavaScript.

### 3. Update colors for charts

Now that the theme colors come with `hsl()`, you can remove the wrapper in your `chartConfig`:

Copy`const chartConfig = {   desktop: {     label: "Desktop", -    color: "hsl(var(--chart-1))", +    color: "var(--chart-1)",   },   mobile: {     label: "Mobile", -   color: "hsl(var(--chart-2))", +   color: "var(--chart-2)",   }, } satisfies ChartConfig`

### 4. Use new `size-*` utility

The new `size-*` utility (added in Tailwind v3.4), is now fully supported by `tailwind-merge`. You can replace `w-* h-*` with the new `size-*` utility:

Copy`- w-4 h-4 + size-4`

### 5. Update your dependencies

Copy`pnpm up "@radix-ui/*" cmdk lucide-react recharts tailwind-merge clsx --latest`

### 6. Remove forwardRef

You can use the `remove-forward-ref` codemod to migrate your `forwardRef` to props or manually update the primitives.

For the codemod, see <https://github.com/reactjs/react-codemod#remove-forward-ref>.

If you want to do it manually, here's how to do it step by step:

1. Replace `React.forwardRef<...>` with `React.ComponentProps<...>`
2. Remove `ref={ref}` from the component.
3. Add a `data-slot` attribute. This will come in handy for styling with Tailwind.
4. You can optionally convert to a named function and remove the `displayName`.

#### Before

Copy`const AccordionItem = React.forwardRef<   React.ElementRef<typeof AccordionPrimitive.Item>,   React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> >(({ className, ...props }, ref) => (   <AccordionPrimitive.Item     ref={ref}     className={cn("border-b last:border-b-0", className)}     {...props}   /> )) AccordionItem.displayName = "AccordionItem"`

#### After

Copy`function AccordionItem({   className,   ...props }: React.ComponentProps<typeof AccordionPrimitive.Item>) {   return (     <AccordionPrimitive.Item       data-slot="accordion-item"       className={cn("border-b last:border-b-0", className)}       {...props}     />   ) }`

## Changelog

### March 19, 2025 - Deprecate `tailwindcss-animate`

We've deprecated `tailwindcss-animate` in favor of `tw-animate-css`.

New projects will have `tw-animate-css` installed by default.

For existing projects, follow the steps below to migrate.

1. Remove `tailwindcss-animate` from your dependencies.
2. Remove the `@plugin 'tailwindcss-animate'` from your globals.css file.
3. Install `tw-animate-css` as a dev dependency.
4. Add the `@import "tw-animate-css"` to your globals.css file.

Copy`- @plugin 'tailwindcss-animate'; + @import "tw-animate-css";`

### March 12, 2025 - New Dark Mode Colors

We've revisited the dark mode colors and updated them to be more accessible.

If you're running an existing Tailwind v4 project (**not an upgraded one**[1](#user-content-fn-1)), you can update your components to use the new dark mode colors by re-adding your components using the CLI[2](#user-content-fn-2).

### Commit any changes

**The CLI will overwrite your existing components.** We recommend committing any changes you've made to your components before running the CLI.

Copy`git add . git commit -m "..."`

### Update components

pnpmnpmyarnbun

```
pnpm dlx shadcn@latest add --all --overwrite
```

Copy

### Update colors

Update the dark mode colors in your `globals.css` file to new OKLCH colors. See the [Base Colors](/docs/theming#base-colors) reference for a list of colors.

### Review changes

Review and re-apply any changes you made to your components.

## Footnotes

1. Upgraded projects are not affected by this change. You can continue using the old dark mode colors. [↩](#user-content-fnref-1)

2. Updating your components will overwrite your existing components. [↩](#user-content-fnref-2)

[Next.js 15 + React 19](/docs/react-19)[June 2023 - New CLI, Styles and more](/docs/changelog/2023-06-new-cli)

On This Page

[What's New](#whats-new)[Try It Out](#try-it-out)[Upgrade Your Project](#upgrade-your-project)[1. Follow the Tailwind v4 Upgrade Guide](#1-follow-the-tailwind-v4-upgrade-guide)[2. Update your CSS variables](#2-update-your-css-variables)[3. Update colors for charts](#3-update-colors-for-charts)[4. Use new `size-*` utility](#4-use-new-size--utility)[5. Update your dependencies](#5-update-your-dependencies)[6. Remove forwardRef](#6-remove-forwardref)[Before](#before)[After](#after)[Changelog](#changelog)[March 19, 2025 - Deprecate `tailwindcss-animate`](#march-19-2025---deprecate-tailwindcss-animate)[March 12, 2025 - New Dark Mode Colors](#march-12-2025---new-dark-mode-colors)[Footnotes](#footnote-label)

Deploy your shadcn/ui app on Vercel

Trusted by OpenAI, Sonos, Adobe, and more.

Vercel provides tools and infrastructure to deploy apps and features at scale.

Deploy Now[Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site\&utm_medium=web\&utm_campaign=docs_cta_deploy_now_callout)
