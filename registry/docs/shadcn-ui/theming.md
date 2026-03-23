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

# Theming

Copy Page

[Previous](/docs/components-json)[Next](/docs/dark-mode)

Using CSS Variables and color utilities for theming.

You can choose between using CSS variables (recommended) or utility classes for theming.

## CSS Variables

Copy`<div className="bg-background text-foreground" />`

To use CSS variables for theming set `tailwind.cssVariables` to `true` in your `components.json` file.

components.json

Copy`{   "style": "new-york",   "rsc": true,   "tailwind": {     "config": "",     "css": "app/globals.css",     "baseColor": "neutral",     "cssVariables": true   },   "aliases": {     "components": "@/components",     "utils": "@/lib/utils",     "ui": "@/components/ui",     "lib": "@/lib",     "hooks": "@/hooks"   },   "iconLibrary": "lucide" }`

## Convention

We use a simple `background` and `foreground` convention for colors. The `background` variable is used for the background color of the component and the `foreground` variable is used for the text color.

The `background` suffix is omitted when the variable is used for the background color of the component.

Given the following CSS variables:

Copy`--primary: oklch(0.205 0 0); --primary-foreground: oklch(0.985 0 0);`

The `background` color of the following component will be `var(--primary)` and the `foreground` color will be `var(--primary-foreground)`.

Copy`<div className="bg-primary text-primary-foreground">Hello</div>`

## List of variables

Here's the list of variables available for customization:

app/globals.css

Copy`:root {   --radius: 0.625rem;   --background: oklch(1 0 0);   --foreground: oklch(0.145 0 0);   --card: oklch(1 0 0);   --card-foreground: oklch(0.145 0 0);   --popover: oklch(1 0 0);   --popover-foreground: oklch(0.145 0 0);   --primary: oklch(0.205 0 0);   --primary-foreground: oklch(0.985 0 0);   --secondary: oklch(0.97 0 0);   --secondary-foreground: oklch(0.205 0 0);   --muted: oklch(0.97 0 0);   --muted-foreground: oklch(0.556 0 0);   --accent: oklch(0.97 0 0);   --accent-foreground: oklch(0.205 0 0);   --destructive: oklch(0.577 0.245 27.325);   --destructive-foreground: oklch(0.985 0 0);   --border: oklch(0.922 0 0);   --input: oklch(0.922 0 0);   --ring: oklch(0.708 0 0);   --chart-1: oklch(0.646 0.222 41.116);   --chart-2: oklch(0.6 0.118 184.704);   --chart-3: oklch(0.398 0.07 227.392);   --chart-4: oklch(0.828 0.189 84.429);   --chart-5: oklch(0.769 0.188 70.08);   --sidebar: oklch(0.985 0 0);   --sidebar-foreground: oklch(0.145 0 0);   --sidebar-primary: oklch(0.205 0 0);   --sidebar-primary-foreground: oklch(0.985 0 0);   --sidebar-accent: oklch(0.97 0 0);   --sidebar-accent-foreground: oklch(0.205 0 0);   --sidebar-border: oklch(0.922 0 0);   --sidebar-ring: oklch(0.708 0 0); }   .dark {   --background: oklch(0.145 0 0);   --foreground: oklch(0.985 0 0);   --card: oklch(0.205 0 0);   --card-foreground: oklch(0.985 0 0);   --popover: oklch(0.269 0 0);   --popover-foreground: oklch(0.985 0 0);   --primary: oklch(0.922 0 0);   --primary-foreground: oklch(0.205 0 0);   --secondary: oklch(0.269 0 0);   --secondary-foreground: oklch(0.985 0 0);   --muted: oklch(0.269 0 0);   --muted-foreground: oklch(0.708 0 0);   --accent: oklch(0.371 0 0);   --accent-foreground: oklch(0.985 0 0);   --destructive: oklch(0.704 0.191 22.216);   --destructive-foreground: oklch(0.985 0 0);   --border: oklch(1 0 0 / 10%);   --input: oklch(1 0 0 / 15%);   --ring: oklch(0.556 0 0);   --chart-1: oklch(0.488 0.243 264.376);   --chart-2: oklch(0.696 0.17 162.48);   --chart-3: oklch(0.769 0.188 70.08);   --chart-4: oklch(0.627 0.265 303.9);   --chart-5: oklch(0.645 0.246 16.439);   --sidebar: oklch(0.205 0 0);   --sidebar-foreground: oklch(0.985 0 0);   --sidebar-primary: oklch(0.488 0.243 264.376);   --sidebar-primary-foreground: oklch(0.985 0 0);   --sidebar-accent: oklch(0.269 0 0);   --sidebar-accent-foreground: oklch(0.985 0 0);   --sidebar-border: oklch(1 0 0 / 10%);   --sidebar-ring: oklch(0.439 0 0); }`

## Adding new colors

To add new colors, you need to add them to your CSS file under the `:root` and `dark` pseudo-classes. Then, use the `@theme inline` directive to make the colors available as CSS variables.

app/globals.css

Copy`:root {   --warning: oklch(0.84 0.16 84);   --warning-foreground: oklch(0.28 0.07 46); }   .dark {   --warning: oklch(0.41 0.11 46);   --warning-foreground: oklch(0.99 0.02 95); }   @theme inline {   --color-warning: var(--warning);   --color-warning-foreground: var(--warning-foreground); }`

You can now use the `warning` utility class in your components.

Copy`<div className="bg-warning text-warning-foreground" />`

## Other color formats

See the [Tailwind CSS documentation](https://tailwindcss.com/docs/colors) for more information on using colors in Tailwind CSS.

## Base Colors

The available base colors are: **Neutral**, **Stone**, **Zinc**, **Mauve**, **Olive**, **Mist**, and **Taupe**.

You can set the base color when initializing your project using a preset or by updating the `baseColor` field in your `components.json` file.

[components.json](/docs/components-json)[Dark Mode](/docs/dark-mode)

On This Page

[CSS Variables](#css-variables)[Convention](#convention)[List of variables](#list-of-variables)[Adding new colors](#adding-new-colors)[Other color formats](#other-color-formats)[Base Colors](#base-colors)

Deploy your shadcn/ui app on Vercel

Trusted by OpenAI, Sonos, Adobe, and more.

Vercel provides tools and infrastructure to deploy apps and features at scale.

Deploy Now[Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site\&utm_medium=web\&utm_campaign=docs_cta_deploy_now_callout)
