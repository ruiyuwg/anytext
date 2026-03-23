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

# FAQ

Copy Page

[Previous](/docs/installation/gatsby)

Frequently asked questions about running a registry.

## Frequently asked questions

### What does a complex component look like?

Here's an example of a complex component that installs a page, two components, a hook, a format-date utils and a config file.

Copy`{   "$schema": "https://ui.shadcn.com/schema/registry-item.json",   "name": "hello-world",   "title": "Hello World",   "type": "registry:block",   "description": "A complex hello world component",   "files": [     {       "path": "registry/new-york/hello-world/page.tsx",       "type": "registry:page",       "target": "app/hello/page.tsx"     },     {       "path": "registry/new-york/hello-world/components/hello-world.tsx",       "type": "registry:component"     },     {       "path": "registry/new-york/hello-world/components/formatted-message.tsx",       "type": "registry:component"     },     {       "path": "registry/new-york/hello-world/hooks/use-hello.ts",       "type": "registry:hook"     },     {       "path": "registry/new-york/hello-world/lib/format-date.ts",       "type": "registry:lib"     },     {       "path": "registry/new-york/hello-world/hello.config.ts",       "type": "registry:file",       "target": "~/hello.config.ts"     }   ] }`

### How do I add a new Tailwind color?

To add a new color you need to add it to `cssVars` under `light` and `dark` keys.

Copy`{   "$schema": "https://ui.shadcn.com/schema/registry-item.json",   "name": "hello-world",   "title": "Hello World",   "type": "registry:block",   "description": "A complex hello world component",   "files": [     // ...   ],   "cssVars": {     "light": {       "brand-background": "oklch(0.205 0.015 18)",       "brand-accent": "oklch(0.205 0.015 18)"     },     "dark": {       "brand-background": "oklch(0.205 0.015 18)",       "brand-accent": "oklch(0.205 0.015 18)"     }   } }`

The CLI will update the project CSS file. Once updated, the new colors will be available to be used as utility classes: `bg-brand` and `text-brand-accent`.

### How do I add or override a Tailwind theme variable?

To add or override a theme variable you add it to `cssVars.theme` under the key you want to add or override.

Copy`{   "$schema": "https://ui.shadcn.com/schema/registry-item.json",   "name": "hello-world",   "title": "Hello World",   "type": "registry:block",   "description": "A complex hello world component",   "files": [     // ...   ],   "cssVars": {     "theme": {       "text-base": "3rem",       "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",       "font-heading": "Poppins, sans-serif"     }   } }`

[Gatsby](/docs/installation/gatsby)

On This Page

[Frequently asked questions](#frequently-asked-questions)[What does a complex component look like?](#what-does-a-complex-component-look-like)[How do I add a new Tailwind color?](#how-do-i-add-a-new-tailwind-color)[How do I add or override a Tailwind theme variable?](#how-do-i-add-or-override-a-tailwind-theme-variable)

Deploy your shadcn/ui app on Vercel

Trusted by OpenAI, Sonos, Adobe, and more.

Vercel provides tools and infrastructure to deploy apps and features at scale.

Deploy Now[Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site\&utm_medium=web\&utm_campaign=docs_cta_deploy_now_callout)
