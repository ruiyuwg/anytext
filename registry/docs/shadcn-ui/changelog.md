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

# Changelog

[RSS](/rss.xml)

Latest updates and announcements.

## March 2026 - shadcn/cli v4

We're releasing version 4 of shadcn/cli. More capable, easier to use. Built for you and your coding agents. Here's everything new.

## shadcn/skills

shadcn/skills gives coding agents the context they need to work with your components and registry correctly. It covers both Radix and Base UI primitives, updated APIs, component patterns and registry workflows. The skill also knows how to use the shadcn CLI, when to invoke it and which flags to pass. Agents make fewer mistakes and produce code that actually matches your design system.

You can ask your agent things like:

- "create a new vite monorepo"
- "find me a hero from tailark, add it to the homepage, animate the text using an animation from react-bits"
- "install and configure a sign in page from @clerk"

pnpmnpmyarnbun

```
pnpm dlx skills add shadcn/ui
```

Copy

## Introducing --preset

A preset packs your entire design system config into a short code. Colors, theme, icon library, fonts, radius. One string, everything included.

Build your preset on [shadcn/create](/create), preview it live and grab the code when you're ready.

pnpmnpmyarnbun

```
pnpm dlx shadcn@latest init --preset a1Dg5eFl
```

Copy

Use it to scaffold projects from custom config, share with your team or publish in your registry. Drop it in prompts so your agent knows where to start. Use it across Claude, Codex, v0, Replit. Take your preset with you.

## Switching presets

When you're working on a new app, it can take a few tries to find something you like so we've made switching presets really easy. Run `init --preset` in your app, and the CLI will take care of reconfiguring everything, including your components.

pnpmnpmyarnbun

```
pnpm dlx shadcn@latest init --preset ad3qkJ7
```

Copy

## Skills + Presets

Your agent knows how to use presets. Scaffold a project, switch design systems, try something new.

- "create a new next app using --preset adtk27v"
- "let's try --preset adtk27v"

## New shadcn/create

To help you build custom presets, we rebuilt [shadcn/create](/create). It now includes a library of UI components you can use to preview your presets. See how your colors, fonts and radius apply to real components before you start building.

## New --dry-run, --diff, and --view flags

Inspect what a registry will add to your project before anything gets written. Review the payload yourself or pipe it to your coding agent for a second look.

pnpmnpmyarnbun

```
pnpm dlx shadcn@latest add button --dry-run
npx shadcn@latest add button --diff
npx shadcn@latest add button --view
```

Copy

## Updating primitives

You can use the `--diff` flag to check for registry updates. Or ask your agent: "check for updates from @shadcn and merge with my local changes".

pnpmnpmyarnbun

```
pnpm dlx shadcn@latest add button --diff
```

Copy

## shadcn init --template

`shadcn init` now scaffolds full project templates for Next.js, Vite, Laravel, React Router, Astro and TanStack Start. Dark mode included for Next.js and Vite.

pnpmnpmyarnbun

```
pnpm dlx shadcn@latest init

Select a template › - Use arrow-keys. Return to submit.
❯ Next.js
  Vite
  TanStack Start
  React Router
  Astro
  Laravel
```

Copy

Use `--monorepo` to set up a monorepo.

pnpmnpmyarnbun

```
pnpm dlx shadcn@latest init -t next --monorepo
```

Copy

## shadcn init --base

Pick your primitives. Use `--base` to start a project with Radix or Base UI.

pnpmnpmyarnbun

```
pnpm dlx shadcn@latest init --base radix
```

Copy

## shadcn info

The `info` command now shows the full picture: framework, version, CSS vars, which components are installed, and where to find docs and examples for every component. Great for giving coding agents the context they need to work with your project.

pnpmnpmyarnbun

```
pnpm dlx shadcn@latest info
```

Copy

## shadcn docs

Get docs, code and examples for any UI component right from the CLI. Gives your coding agent the context to use your primitives correctly.

pnpmnpmyarnbun

```
pnpm dlx shadcn@latest docs combobox

combobox
  - docs      https://ui.shadcn.com/docs/components/radix/combobox
  - examples  https://raw.githubusercontent.com/shadcn-ui/ui/refs/heads/main/apps/v4/registry/bases/radix/examples/combobox-example.tsx
  - api       https://base-ui.com/react/components/combobox
```

Copy

## registry:base and registry:font

Registries can now distribute an entire design system as a single payload using `registry:base`. Components, dependencies, CSS vars, fonts, config. One install, everything set up.

Fonts are now a first-class registry type. Install and configure them the same way you install components.

font-inter.json

Copy`{   "$schema": "https://ui.shadcn.com/schema/registry-item.json",   "name": "font-inter",   "type": "registry:font",   "font": {     "family": "'Inter Variable', sans-serif",     "provider": "google",     "import": "Inter",     "variable": "--font-sans",     "subsets": ["latin"]   } }`

pnpmnpmyarnbun

```
pnpm dlx shadcn@latest add font-inter
```

Copy

## Links

- [shadcn/skills](/skills)
- [shadcn/create](/create)
- [shadcn/cli](/cli)
- [shadcn/registry](/docs/registry)

## February 2026 - Blocks for Radix and Base UI

All [blocks](/blocks) are now available for both Radix and Base UI.

- **All blocks for both libraries** - Every block, including login, signup, sidebar and dashboard blocks, is now available in both Radix and Base UI variants.
- **Same CLI workflow** - Run `npx shadcn add` and the CLI will pull the correct block variant based on your project configuration.

If you've already set up your project with `npx shadcn create`, blocks will automatically use your chosen library. No additional configuration needed.

pnpmnpmyarnbun

```
pnpm dlx shadcn@latest add login-01
```

Copy

Browse the full collection on the [blocks](/blocks) page.

## February 2026 - Unified Radix UI Package

The `new-york` style now uses the unified `radix-ui` package instead of individual `@radix-ui/react-*` packages.

### What's Changed

When you add components using the `new-york` style, they will now import from `radix-ui` instead of separate packages:

components/ui/dialog.tsx

Copy`- import * as DialogPrimitive from "@radix-ui/react-dialog" + import { Dialog as DialogPrimitive } from "radix-ui"`

This results in a cleaner `package.json` with a single `radix-ui` dependency instead of multiple `@radix-ui/react-*` packages.

### Migrating Existing Projects

If you have an existing project using the `new-york` style, you can migrate to the new `radix-ui` package using the migrate command:

pnpmnpmyarnbun

```
pnpm dlx shadcn@latest migrate radix
```

Copy

This will update all imports in your UI components and add `radix-ui` to your dependencies.

To migrate components outside of your `ui` directory, use the `path` argument:

pnpmnpmyarnbun

```
pnpm dlx shadcn@latest migrate radix src/components/custom
```

Copy

Once complete, you can remove any unused `@radix-ui/react-*` packages from your `package.json`.

See the [migrate radix documentation](/docs/cli#migrate-radix) for more details.

## January 2026 - RTL Support

shadcn/ui now has first-class support for right-to-left (RTL) layouts. Your components automatically adapt for languages like Arabic, Hebrew, and Persian.

**This works with the [shadcn/ui components](/docs/components) as well as any component distributed on the shadcn registry.**

Arabic (العربية)▼Toggle

تم الدفع بنجاح

تمت معالجة دفعتك البالغة 29.99 دولارًا. تم إرسال إيصال إلى عنوان بريدك الإلكتروني.

ميزة جديدة متاحة

لقد أضفنا دعم الوضع الداكن. يمكنك تفعيله في إعدادات حسابك.

Copy

```
"use client"

import * as React from "react"
```

View Code

### Our approach to RTL

Traditionally, component libraries that support RTL ship with logical classes baked in. This means everyone has to work with classes like `ms-4` and `start-2`, even if they're only building for LTR layouts.

We took a different approach. The shadcn CLI transforms classes at install time, so you only see logical classes when you actually need them. If you're not building for RTL, you work with familiar classes like `ml-4` and `left-2`. When you enable RTL, the CLI handles the conversion for you.

**You don't have to learn RTL until you need it.**

### How it works

When you add components with `rtl: true` set in your `components.json`, the CLI automatically converts physical CSS classes like `ml-4` and `text-left` to their logical equivalents like `ms-4` and `text-start`.

- Physical positioning classes like `left-*` and `right-*` become `start-*` and `end-*`.
- Margin and padding classes like `ml-*` and `pr-*` become `ms-*` and `pe-*`.
- Text alignment classes like `text-left` become `text-start`.
- Directional props are updated to use logical values.
- Supported icons are automatically flipped using `rtl:rotate-180`.
- Animations like `slide-in-from-left` become `slide-in-from-start`.

### RTL examples for every component

We've added RTL examples for every component. You'll find live previews and code on each [component page](/docs/components).

Arabic (العربية)▼Toggle

تسجيل الدخول إلى حسابك

أدخل بريدك الإلكتروني أدناه لتسجيل الدخول إلى حسابك

إنشاء حساب

البريد الإلكتروني

كلمة المرور[نسيت كلمة المرور؟](#)

تسجيل الدخولتسجيل الدخول باستخدام Google

Copy

```
"use client"

import * as React from "react"
```

View Code

### CLI updates

**New projects**: Use the `--rtl` flag with `init` or `create` to enable RTL from the start.

pnpmnpmyarnbun

```
pnpm dlx shadcn@latest init --rtl
```

Copy

pnpmnpmyarnbun

```
pnpm dlx shadcn@latest create --rtl
```

Copy

**Existing projects**: Migrate your components with the `migrate rtl` command.

pnpmnpmyarnbun

```
pnpm dlx shadcn@latest migrate rtl
```

Copy

This transforms all components in your `ui` directory to use logical classes. You can also pass a specific path or glob pattern.

## Try it out

Click the link below to open a Next.js project with RTL support in v0.

[![Open in v0](https://v0.app/chat-static/button.svg)](https://v0.app/chat/api/open?url=https://github.com/shadcn-ui/next-template-rtl)

### Links

- [RTL Documentation](/docs/rtl)
- [Font Recommendations](/docs/rtl#font-recommendations)
- [Animations](/docs/rtl#animations)
- [Migrating Existing Components](/docs/rtl#migrating-existing-components)
- [Next.js Setup](/docs/rtl/next)
- [Vite Setup](/docs/rtl/vite)
- [TanStack Start Setup](/docs/rtl/start)

## January 2026 - Inline Start and End Styles

We've updated the styles for Base UI components to support `inline-start` and `inline-end` side values. The following components now support these values:

- Tooltip
- Popover
- Combobox
- Context Menu
- Dropdown Menu
- Hover Card
- Menubar
- Select

### What Changed

We added new Tailwind classes to handle the logical side values:

Copy`<PopoverPrimitive.Popup   className={cn(     "... data-[side=bottom]:slide-in-from-top-2     data-[side=left]:slide-in-from-right-2     data-[side=right]:slide-in-from-left-2     data-[side=top]:slide-in-from-bottom-2 +   data-[side=inline-start]:slide-in-from-right-2 +   data-[side=inline-end]:slide-in-from-left-2 ...",     className   )} />`

### Usage

Copy`<Popover>   <PopoverTrigger>Open</PopoverTrigger>   <PopoverContent side="inline-start">     {/* Opens on the left in LTR, right in RTL */}   </PopoverContent> </Popover>`

### LLM Prompt

Ask your LLM to update your components by running the following prompt:

Copy``Add inline-start and inline-end support to my shadcn/ui components. Add the following Tailwind classes to each component:   | File | Component | Add Classes | |------|-----------|-------------| | tooltip.tsx | TooltipContent | `data-[side=inline-start]:slide-in-from-right-2 data-[side=inline-end]:slide-in-from-left-2` | | tooltip.tsx | TooltipArrow | `data-[side=inline-start]:top-1/2! data-[side=inline-start]:-right-1 data-[side=inline-start]:-translate-y-1/2 data-[side=inline-end]:top-1/2! data-[side=inline-end]:-left-1 data-[side=inline-end]:-translate-y-1/2` | | popover.tsx | PopoverContent | `data-[side=inline-start]:slide-in-from-right-2 data-[side=inline-end]:slide-in-from-left-2` | | hover-card.tsx | HoverCardContent | `data-[side=inline-start]:slide-in-from-right-2 data-[side=inline-end]:slide-in-from-left-2` | | select.tsx | SelectContent | `data-[side=inline-start]:slide-in-from-right-2 data-[side=inline-end]:slide-in-from-left-2 data-[align-trigger=true]:animate-none` and add `data-align-trigger={alignItemWithTrigger}` attribute | | combobox.tsx | ComboboxContent | `data-[side=inline-start]:slide-in-from-right-2 data-[side=inline-end]:slide-in-from-left-2` | | dropdown-menu.tsx | DropdownMenuContent | `data-[side=inline-start]:slide-in-from-right-2 data-[side=inline-end]:slide-in-from-left-2` | | context-menu.tsx | ContextMenuContent | `data-[side=inline-start]:slide-in-from-right-2 data-[side=inline-end]:slide-in-from-left-2` | | menubar.tsx | MenubarContent | `data-[side=inline-start]:slide-in-from-right-2 data-[side=inline-end]:slide-in-from-left-2` |   Add these classes next to the existing `data-[side=top]`, `data-[side=bottom]`, `data-[side=left]`, `data-[side=right]` classes.``

## More Updates

[January 2026Base UI Documentation](/docs/changelog/2026-01-base-ui)[December 2025npx shadcn create](/docs/changelog/2025-12-shadcn-create)[October 2025Registry Directory](/docs/changelog/2025-10-registry-directory)[October 2025New Components](/docs/changelog/2025-10-new-components)[September 2025Registry Index](/docs/changelog/2025-09-registry-index)[August 2025shadcn CLI 3.0 and MCP Server](/docs/changelog/2025-08-cli-3-mcp)[July 2025Universal Registry Items](/docs/changelog/2025-07-universal-registry)[July 2025Local File Support](/docs/changelog/2025-07-local-file-support)[June 2025radix-ui Migration](/docs/changelog/2025-06-radix-ui)[June 2025Calendar Component](/docs/changelog/2025-06-calendar)[May 2025New Site](/docs/changelog/2025-05-new-site)[April 2025MCP](/docs/changelog/2025-04-mcp)[April 2025shadcn 2.5.0](/docs/changelog/2025-04-shadcn-2-5)[April 2025Cross-framework Route Support](/docs/changelog/2025-04-cross-framework)[February 2025Tailwind v4](/docs/changelog/2025-02-tailwind-v4)[February 2025Updated Registry Schema](/docs/changelog/2025-02-registry-schema)[January 2025Blocks Community](/docs/changelog/2025-01-blocks)[December 2024Monorepo Support](/docs/changelog/2024-12-monorepo)[November 2024Icons](/docs/changelog/2024-11-icons)[October 2024React 19](/docs/changelog/2024-10-react-19)[October 2024Sidebar](/docs/changelog/2024-10-sidebar)[August 2024npx shadcn init](/docs/changelog/2024-08-npx-shadcn-init)[April 2024Lift Mode](/docs/changelog/2024-04-lift-mode)[March 2024Introducing Blocks](/docs/changelog/2024-03-blocks)[March 2024Breadcrumb and Input OTP](/docs/changelog/2024-03-breadcrumb-otp)[December 2023New Components](/docs/changelog/2023-12-new-components)[July 2023JavaScript](/docs/changelog/2023-07-javascript)[June 2023New CLI, Styles and more](/docs/changelog/2023-06-new-cli)

On This Page

[March 2026 - shadcn/cli v4](/docs/changelog/2026-03-cli-v4)[February 2026 - Blocks for Radix and Base UI](/docs/changelog/2026-02-blocks)[February 2026 - Unified Radix UI Package](/docs/changelog/2026-02-radix-ui)[January 2026 - RTL Support](/docs/changelog/2026-01-rtl)[January 2026 - Inline Start and End Styles](/docs/changelog/2026-01-inline-side-styles)[More Updates](#more-updates)

Deploy your shadcn/ui app on Vercel

Trusted by OpenAI, Sonos, Adobe, and more.

Vercel provides tools and infrastructure to deploy apps and features at scale.

Deploy Now[Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site\&utm_medium=web\&utm_campaign=docs_cta_deploy_now_callout)
