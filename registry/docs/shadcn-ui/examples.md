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

# Examples

Copy Page

[Previous](/docs/registry/authentication)[Next](/docs/registry/mcp)

Examples of registry items: styles, components, css vars, etc.

## registry:style

### Custom style that extends shadcn/ui

The following registry item is a custom style that extends shadcn/ui. On `npx shadcn init`, it will:

- Install `@tabler/icons-react` as a dependency.
- Add the `login-01` block and `calendar` component to the project.
- Add the `editor` from a remote registry.
- Set the `font-sans` variable to `Inter, sans-serif`.
- Install a `brand` color in light and dark mode.

example-style.json

Copy`{   "$schema": "https://ui.shadcn.com/schema/registry-item.json",   "name": "example-style",   "type": "registry:style",   "dependencies": ["@tabler/icons-react"],   "registryDependencies": [     "login-01",     "calendar",     "https://example.com/r/editor.json"   ],   "cssVars": {     "theme": {       "font-sans": "Inter, sans-serif"     },     "light": {       "brand": "20 14.3% 4.1%"     },     "dark": {       "brand": "20 14.3% 4.1%"     }   } }`

### Custom style from scratch

The following registry item is a custom style that doesn't extend shadcn/ui. See the `extends: none` field.

It can be used to create a new style from scratch, i.e. custom components, css vars, dependencies, etc.

On `npx shadcn add`, the following will:

- Install `tailwind-merge` and `clsx` as dependencies.
- Add the `utils` registry item from the shadcn/ui registry.
- Add the `button`, `input`, `label`, and `select` components from a remote registry.
- Install new css vars: `main`, `bg`, `border`, `text`, `ring`.

example-style.json

Copy`{   "$schema": "https://ui.shadcn.com/schema/registry-item.json",   "extends": "none",   "name": "new-style",   "type": "registry:style",   "dependencies": ["tailwind-merge", "clsx"],   "registryDependencies": [     "utils",     "https://example.com/r/button.json",     "https://example.com/r/input.json",     "https://example.com/r/label.json",     "https://example.com/r/select.json"   ],   "cssVars": {     "theme": {       "font-sans": "Inter, sans-serif"     },     "light": {       "main": "#88aaee",       "bg": "#dfe5f2",       "border": "#000",       "text": "#000",       "ring": "#000"     },     "dark": {       "main": "#88aaee",       "bg": "#272933",       "border": "#000",       "text": "#e6e6e6",       "ring": "#fff"     }   } }`

## registry:theme

### Custom theme

example-theme.json

Copy`{   "$schema": "https://ui.shadcn.com/schema/registry-item.json",   "name": "custom-theme",   "type": "registry:theme",   "cssVars": {     "light": {       "background": "oklch(1 0 0)",       "foreground": "oklch(0.141 0.005 285.823)",       "primary": "oklch(0.546 0.245 262.881)",       "primary-foreground": "oklch(0.97 0.014 254.604)",       "ring": "oklch(0.746 0.16 232.661)",       "sidebar-primary": "oklch(0.546 0.245 262.881)",       "sidebar-primary-foreground": "oklch(0.97 0.014 254.604)",       "sidebar-ring": "oklch(0.746 0.16 232.661)"     },     "dark": {       "background": "oklch(1 0 0)",       "foreground": "oklch(0.141 0.005 285.823)",       "primary": "oklch(0.707 0.165 254.624)",       "primary-foreground": "oklch(0.97 0.014 254.604)",       "ring": "oklch(0.707 0.165 254.624)",       "sidebar-primary": "oklch(0.707 0.165 254.624)",       "sidebar-primary-foreground": "oklch(0.97 0.014 254.604)",       "sidebar-ring": "oklch(0.707 0.165 254.624)"     }   } }`

### Custom colors

The following style will init using shadcn/ui defaults and then add a custom `brand` color.

example-style.json

Copy`{   "$schema": "https://ui.shadcn.com/schema/registry-item.json",   "name": "custom-style",   "type": "registry:style",   "cssVars": {     "light": {       "brand": "oklch(0.99 0.00 0)"     },     "dark": {       "brand": "oklch(0.14 0.00 286)"     }   } }`

## registry:block

### Custom block

This block installs the `login-01` block from the shadcn/ui registry.

login-01.json

Copy`{   "$schema": "https://ui.shadcn.com/schema/registry-item.json",   "name": "login-01",   "type": "registry:block",   "description": "A simple login form.",   "registryDependencies": ["button", "card", "input", "label"],   "files": [     {       "path": "blocks/login-01/page.tsx",       "content": "import { LoginForm } ...",       "type": "registry:page",       "target": "app/login/page.tsx"     },     {       "path": "blocks/login-01/components/login-form.tsx",       "content": "...",       "type": "registry:component"     }   ] }`

### Install a block and override primitives

You can install a block from the shadcn/ui registry and override the primitives using your custom ones.

On `npx shadcn add`, the following will:

- Add the `login-01` block from the shadcn/ui registry.
- Override the `button`, `input`, and `label` primitives with the ones from the remote registry.

example-style.json

Copy`{   "$schema": "https://ui.shadcn.com/schema/registry-item.json",   "name": "custom-login",   "type": "registry:block",   "registryDependencies": [     "login-01",     "https://example.com/r/button.json",     "https://example.com/r/input.json",     "https://example.com/r/label.json"   ] }`

## registry:ui

### UI component

A `registry:ui` item is a reusable UI component. It can have dependencies, registry dependencies, and CSS variables.

button.json

Copy`{   "$schema": "https://ui.shadcn.com/schema/registry-item.json",   "name": "button",   "type": "registry:ui",   "dependencies": ["radix-ui"],   "files": [     {       "path": "ui/button.tsx",       "content": "...",       "type": "registry:ui"     }   ] }`

### UI component with CSS variables

sidebar.json

Copy`{   "$schema": "https://ui.shadcn.com/schema/registry-item.json",   "name": "sidebar",   "type": "registry:ui",   "dependencies": ["radix-ui"],   "registryDependencies": ["button", "separator", "sheet", "tooltip"],   "files": [     {       "path": "ui/sidebar.tsx",       "content": "...",       "type": "registry:ui"     }   ],   "cssVars": {     "light": {       "sidebar-background": "oklch(0.985 0 0)",       "sidebar-foreground": "oklch(0.141 0.005 285.823)",       "sidebar-border": "oklch(0.92 0.004 286.32)"     },     "dark": {       "sidebar-background": "oklch(0.141 0.005 285.823)",       "sidebar-foreground": "oklch(0.985 0 0)",       "sidebar-border": "oklch(0.274 0.006 286.033)"     }   } }`

## registry:lib

### Utility library

A `registry:lib` item is a utility library. Use it to share helper functions, constants, or other non-component code.

utils.json

Copy`{   "$schema": "https://ui.shadcn.com/schema/registry-item.json",   "name": "utils",   "type": "registry:lib",   "dependencies": ["clsx", "tailwind-merge"],   "files": [     {       "path": "lib/utils.ts",       "content": "import { clsx, type ClassValue } from \"clsx\"\nimport { twMerge } from \"tailwind-merge\"\n\nexport function cn(...inputs: ClassValue[]) {\n  return twMerge(clsx(inputs))\n}",       "type": "registry:lib"     }   ] }`

## registry:hook

### Custom hook

A `registry:hook` item is a custom React hook.

use-mobile.json

Copy`{   "$schema": "https://ui.shadcn.com/schema/registry-item.json",   "name": "use-mobile",   "type": "registry:hook",   "files": [     {       "path": "hooks/use-mobile.ts",       "content": "...",       "type": "registry:hook"     }   ] }`

### Hook with dependencies

use-debounce.json

Copy`{   "$schema": "https://ui.shadcn.com/schema/registry-item.json",   "name": "use-debounce",   "type": "registry:hook",   "dependencies": ["react"],   "files": [     {       "path": "hooks/use-debounce.ts",       "content": "...",       "type": "registry:hook"     }   ] }`

## registry:font

### Custom font

A `registry:font` item installs a Google Font. The `font` field is required and configures the font family, provider, import name, and CSS variable.

font-inter.json

Copy`{   "$schema": "https://ui.shadcn.com/schema/registry-item.json",   "name": "font-inter",   "type": "registry:font",   "font": {     "family": "'Inter Variable', sans-serif",     "provider": "google",     "import": "Inter",     "variable": "--font-sans",     "subsets": ["latin"],     "dependency": "@fontsource-variable/inter"   } }`

### Monospace font

font-jetbrains-mono.json

Copy`{   "$schema": "https://ui.shadcn.com/schema/registry-item.json",   "name": "font-jetbrains-mono",   "type": "registry:font",   "font": {     "family": "'JetBrains Mono Variable', monospace",     "provider": "google",     "import": "JetBrains_Mono",     "variable": "--font-mono",     "weight": ["400", "500", "600", "700"],     "subsets": ["latin"],     "dependency": "@fontsource-variable/jetbrains-mono"   } }`

### Serif font

font-lora.json

Copy`{   "$schema": "https://ui.shadcn.com/schema/registry-item.json",   "name": "font-lora",   "type": "registry:font",   "font": {     "family": "'Lora Variable', serif",     "provider": "google",     "import": "Lora",     "variable": "--font-serif",     "subsets": ["latin"],     "dependency": "@fontsource-variable/lora"   } }`

### Font with custom selector

Use the `selector` field to apply a font to specific CSS selectors instead of globally on `html`. This is useful for heading fonts or other targeted font applications.

font-playfair-display.json

Copy`{   "$schema": "https://ui.shadcn.com/schema/registry-item.json",   "name": "font-playfair-display",   "type": "registry:font",   "font": {     "family": "'Playfair Display Variable', serif",     "provider": "google",     "import": "Playfair_Display",     "variable": "--font-heading",     "subsets": ["latin"],     "selector": "h1, h2, h3, h4, h5, h6",     "dependency": "@fontsource-variable/playfair-display"   } }`

When `selector` is set, the font utility class (e.g. `font-heading`) is applied via CSS `@apply` on the specified selector within `@layer base`, instead of being added to the `<html>` element. The CSS variable is still injected on `<html>` so it's available globally.

## registry:base

### Custom base

A `registry:base` item is a complete design system base. It defines the full set of dependencies, CSS variables, and configuration for a project. The `config` field is unique to `registry:base` items.

The `config` field accepts the following properties (all optional):

Property

Type

Description

`style`

`string`

The style name for the base.

`iconLibrary`

`string`

The icon library to use (e.g. `lucide`).

`rsc`

`boolean`

Whether to enable React Server Components. Defaults to `false`.

`tsx`

`boolean`

Whether to use TypeScript. Defaults to `true`.

`rtl`

`boolean`

Whether to enable right-to-left support. Defaults to `false`.

`menuColor`

`"default" | "inverted" | "default-translucent" | "inverted-translucent"`

The menu color scheme. Defaults to `"default"`.

`menuAccent`

`"subtle" | "bold"`

The menu accent style. Defaults to `"subtle"`.

`tailwind.baseColor`

`string`

The base color name (e.g. `neutral`, `slate`, `zinc`).

`tailwind.css`

`string`

Path to the Tailwind CSS file.

`tailwind.prefix`

`string`

A prefix to add to all Tailwind classes.

`aliases.components`

`string`

Import alias for components.

`aliases.utils`

`string`

Import alias for utilities.

`aliases.ui`

`string`

Import alias for UI components.

`aliases.lib`

`string`

Import alias for lib.

`aliases.hooks`

`string`

Import alias for hooks.

`registries`

`Record<string, string | object>`

Custom registry URLs. Keys must start with `@`.

custom-base.json

Copy`{   "$schema": "https://ui.shadcn.com/schema/registry-item.json",   "name": "custom-base",   "type": "registry:base",   "config": {     "style": "custom-base",     "iconLibrary": "lucide",     "tailwind": {       "baseColor": "neutral"     }   },   "dependencies": [     "class-variance-authority",     "tw-animate-css",     "lucide-react"   ],   "registryDependencies": ["utils", "font-inter"],   "cssVars": {     "light": {       "background": "oklch(1 0 0)",       "foreground": "oklch(0.141 0.005 285.823)",       "primary": "oklch(0.21 0.006 285.885)",       "primary-foreground": "oklch(0.985 0 0)"     },     "dark": {       "background": "oklch(0.141 0.005 285.823)",       "foreground": "oklch(0.985 0 0)",       "primary": "oklch(0.985 0 0)",       "primary-foreground": "oklch(0.21 0.006 285.885)"     }   },   "css": {     "@import \"tw-animate-css\"": {},     "@layer base": {       "*": {         "@apply border-border outline-ring/50": {}       },       "body": {         "@apply bg-background text-foreground": {}       }     }   } }`

### Base from scratch

Use `extends: none` to create a base that doesn't extend shadcn/ui defaults.

custom-base.json

Copy`{   "$schema": "https://ui.shadcn.com/schema/registry-item.json",   "name": "my-design-system",   "extends": "none",   "type": "registry:base",   "config": {     "style": "my-design-system",     "iconLibrary": "lucide",     "tailwind": {       "baseColor": "slate"     }   },   "dependencies": ["tailwind-merge", "clsx", "tw-animate-css", "lucide-react"],   "registryDependencies": ["utils", "font-geist"],   "cssVars": {     "light": {       "background": "oklch(1 0 0)",       "foreground": "oklch(0.141 0.005 285.823)"     },     "dark": {       "background": "oklch(0.141 0.005 285.823)",       "foreground": "oklch(0.985 0 0)"     }   } }`

## Common Fields

### Author

Use the `author` field to add attribution to your registry items.

example-item.json

Copy`{   "$schema": "https://ui.shadcn.com/schema/registry-item.json",   "name": "custom-component",   "type": "registry:ui",   "author": "shadcn",   "files": [     {       "path": "ui/custom-component.tsx",       "content": "...",       "type": "registry:ui"     }   ] }`

### Dev dependencies

Use the `devDependencies` field to install packages as dev dependencies.

example-item.json

Copy`{   "$schema": "https://ui.shadcn.com/schema/registry-item.json",   "name": "custom-item",   "type": "registry:item",   "devDependencies": ["@types/mdx"],   "files": [     {       "path": "lib/mdx.ts",       "content": "...",       "type": "registry:lib"     }   ] }`

### Metadata

Use the `meta` field to attach arbitrary metadata to your registry items. This can be used to store custom data that your tools or scripts can use.

example-item.json

Copy`{   "$schema": "https://ui.shadcn.com/schema/registry-item.json",   "name": "custom-component",   "type": "registry:ui",   "meta": {     "category": "forms",     "version": "2.0.0"   },   "files": [     {       "path": "ui/custom-component.tsx",       "content": "...",       "type": "registry:ui"     }   ] }`

## CSS Variables

### Custom Theme Variables

Add custom theme variables to the `theme` object.

example-theme.json

Copy`{   "$schema": "https://ui.shadcn.com/schema/registry-item.json",   "name": "custom-theme",   "type": "registry:theme",   "cssVars": {     "theme": {       "font-heading": "Inter, sans-serif",       "shadow-card": "0 0 0 1px rgba(0, 0, 0, 0.1)"     }   } }`

### Override Tailwind CSS variables

example-theme.json

Copy`{   "$schema": "https://ui.shadcn.com/schema/registry-item.json",   "name": "custom-theme",   "type": "registry:theme",   "cssVars": {     "theme": {       "spacing": "0.2rem",       "breakpoint-sm": "640px",       "breakpoint-md": "768px",       "breakpoint-lg": "1024px",       "breakpoint-xl": "1280px",       "breakpoint-2xl": "1536px"     }   } }`

## Add custom CSS

### Base styles

example-base.json

Copy`{   "$schema": "https://ui.shadcn.com/schema/registry-item.json",   "name": "custom-style",   "type": "registry:style",   "css": {     "@layer base": {       "h1": {         "font-size": "var(--text-2xl)"       },       "h2": {         "font-size": "var(--text-xl)"       }     }   } }`

### Components

example-card.json

Copy`{   "$schema": "https://ui.shadcn.com/schema/registry-item.json",   "name": "custom-card",   "type": "registry:component",   "css": {     "@layer components": {       "card": {         "background-color": "var(--color-white)",         "border-radius": "var(--rounded-lg)",         "padding": "var(--spacing-6)",         "box-shadow": "var(--shadow-xl)"       }     }   } }`

## Add custom utilities

### Simple utility

example-component.json

Copy`{   "$schema": "https://ui.shadcn.com/schema/registry-item.json",   "name": "custom-component",   "type": "registry:component",   "css": {     "@utility content-auto": {       "content-visibility": "auto"     }   } }`

### Complex utility

example-utility.json

Copy`{   "$schema": "https://ui.shadcn.com/schema/registry-item.json",   "name": "custom-component",   "type": "registry:component",   "css": {     "@utility scrollbar-hidden": {       "scrollbar-hidden": {         "&::-webkit-scrollbar": {           "display": "none"         }       }     }   } }`

### Functional utilities

example-functional.json

Copy`{   "$schema": "https://ui.shadcn.com/schema/registry-item.json",   "name": "custom-component",   "type": "registry:component",   "css": {     "@utility tab-*": {       "tab-size": "var(--tab-size-*)"     }   } }`

## Add CSS imports

Use `@import` to add CSS imports to your registry item. The imports will be placed at the top of the CSS file.

### Basic import

example-import.json

Copy`{   "$schema": "https://ui.shadcn.com/schema/registry-item.json",   "name": "custom-import",   "type": "registry:component",   "css": {     "@import \"tailwindcss\"": {},     "@import \"./styles/base.css\"": {}   } }`

### Import with url() syntax

example-url-import.json

Copy`{   "$schema": "https://ui.shadcn.com/schema/registry-item.json",   "name": "font-import",   "type": "registry:item",   "css": {     "@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap\")": {},     "@import url('./local-styles.css')": {}   } }`

### Import with media queries

example-media-import.json

Copy`{   "$schema": "https://ui.shadcn.com/schema/registry-item.json",   "name": "responsive-import",   "type": "registry:item",   "css": {     "@import \"print-styles.css\" print": {},     "@import url(\"mobile.css\") screen and (max-width: 768px)": {}   } }`

## Add custom plugins

Use `@plugin` to add Tailwind plugins to your registry item. Plugins will be automatically placed after imports and before other content.

**Important:** When using plugins from npm packages, you must also add them to the `dependencies` array.

### Basic plugin usage

example-plugin.json

Copy`{   "$schema": "https://ui.shadcn.com/schema/registry-item.json",   "name": "custom-plugin",   "type": "registry:item",   "css": {     "@plugin \"@tailwindcss/typography\"": {},     "@plugin \"foo\"": {}   } }`

### Plugin with npm dependency

When using plugins from npm packages like `@tailwindcss/typography`, include them in the dependencies.

example-typography.json

Copy`{   "$schema": "https://ui.shadcn.com/schema/registry-item.json",   "name": "typography-component",   "type": "registry:item",   "dependencies": ["@tailwindcss/typography"],   "css": {     "@plugin \"@tailwindcss/typography\"": {},     "@layer components": {       ".prose": {         "max-width": "65ch"       }     }   } }`

### Scoped and file-based plugins

example-scoped-plugin.json

Copy`{   "$schema": "https://ui.shadcn.com/schema/registry-item.json",   "name": "scoped-plugins",   "type": "registry:component",   "css": {     "@plugin \"@headlessui/tailwindcss\"": {},     "@plugin \"tailwindcss/plugin\"": {},     "@plugin \"./custom-plugin.js\"": {}   } }`

### Multiple plugins with automatic ordering

When you add multiple plugins, they are automatically grouped together and deduplicated.

example-multiple-plugins.json

Copy`{   "$schema": "https://ui.shadcn.com/schema/registry-item.json",   "name": "multiple-plugins",   "type": "registry:item",   "dependencies": [     "@tailwindcss/typography",     "@tailwindcss/forms",     "tw-animate-css"   ],   "css": {     "@plugin \"@tailwindcss/typography\"": {},     "@plugin \"@tailwindcss/forms\"": {},     "@plugin \"tw-animate-css\"": {}   } }`

## Combined imports and plugins

When using both `@import` and `@plugin` directives, imports are placed first, followed by plugins, then other CSS content.

example-combined.json

Copy`{   "$schema": "https://ui.shadcn.com/schema/registry-item.json",   "name": "combined-example",   "type": "registry:item",   "dependencies": ["@tailwindcss/typography", "tw-animate-css"],   "css": {     "@import \"tailwindcss\"": {},     "@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap\")": {},     "@plugin \"@tailwindcss/typography\"": {},     "@plugin \"tw-animate-css\"": {},     "@layer base": {       "body": {         "font-family": "Inter, sans-serif"       }     },     "@utility content-auto": {       "content-visibility": "auto"     }   } }`

## Add custom animations

Note: you need to define both `@keyframes` in css and `theme` in cssVars to use animations.

example-component.json

Copy`{   "$schema": "https://ui.shadcn.com/schema/registry-item.json",   "name": "custom-component",   "type": "registry:component",   "cssVars": {     "theme": {       "--animate-wiggle": "wiggle 1s ease-in-out infinite"     }   },   "css": {     "@keyframes wiggle": {       "0%, 100%": {         "transform": "rotate(-3deg)"       },       "50%": {         "transform": "rotate(3deg)"       }     }   } }`

## Add environment variables

You can add environment variables using the `envVars` field.

example-item.json

Copy`{   "$schema": "https://ui.shadcn.com/schema/registry-item.json",   "name": "custom-item",   "type": "registry:item",   "envVars": {     "NEXT_PUBLIC_APP_URL": "http://localhost:4000",     "DATABASE_URL": "postgresql://postgres:postgres@localhost:5432/postgres",     "OPENAI_API_KEY": ""   } }`

Environment variables are added to the `.env.local` or `.env` file. Existing variables are not overwritten.

**IMPORTANT:** Use `envVars` to add development or example variables. Do NOT use it to add production variables.

## Universal Items

As of `2.9.0`, you can create universal items that can be installed without framework detection or components.json.

To make an item universal i.e framework agnostic, all the files in the item must have an explicit target.

Here's an example of a registry item that installs custom Cursor rules for *python*:

.cursor/rules/custom-python.mdc

Copy`{   "$schema": "https://ui.shadcn.com/schema/registry-item.json",   "name": "python-rules",   "type": "registry:item",   "files": [     {       "path": "/path/to/your/registry/default/custom-python.mdc",       "type": "registry:file",       "target": "~/.cursor/rules/custom-python.mdc",       "content": "..."     }   ] }`

Here's another example for installing a custom ESLint config:

.eslintrc.json

Copy`{   "$schema": "https://ui.shadcn.com/schema/registry-item.json",   "name": "my-eslint-config",   "type": "registry:item",   "files": [     {       "path": "/path/to/your/registry/default/custom-eslint.json",       "type": "registry:file",       "target": "~/.eslintrc.json",       "content": "..."     }   ] }`

You can also have a universal item that installs multiple files:

my-custom-starter-template.json

Copy`{   "$schema": "https://ui.shadcn.com/schema/registry-item.json",   "name": "my-custom-starter-template",   "type": "registry:item",   "dependencies": ["better-auth"],   "files": [     {       "path": "/path/to/file-01.json",       "type": "registry:file",       "target": "~/file-01.json",       "content": "..."     },     {       "path": "/path/to/file-02.vue",       "type": "registry:file",       "target": "~/pages/file-02.vue",       "content": "..."     }   ] }`

[Authentication](/docs/registry/authentication)[MCP Server](/docs/registry/mcp)

On This Page

[registry:style](#registrystyle)[Custom style that extends shadcn/ui](#custom-style-that-extends-shadcnui)[Custom style from scratch](#custom-style-from-scratch)[registry:theme](#registrytheme)[Custom theme](#custom-theme)[Custom colors](#custom-colors)[registry:block](#registryblock)[Custom block](#custom-block)[Install a block and override primitives](#install-a-block-and-override-primitives)[registry:ui](#registryui)[UI component](#ui-component)[UI component with CSS variables](#ui-component-with-css-variables)[registry:lib](#registrylib)[Utility library](#utility-library)[registry:hook](#registryhook)[Custom hook](#custom-hook)[Hook with dependencies](#hook-with-dependencies)[registry:font](#registryfont)[Custom font](#custom-font)[Monospace font](#monospace-font)[Serif font](#serif-font)[Font with custom selector](#font-with-custom-selector)[registry:base](#registrybase)[Custom base](#custom-base)[Base from scratch](#base-from-scratch)[Common Fields](#common-fields)[Author](#author)[Dev dependencies](#dev-dependencies)[Metadata](#metadata)[CSS Variables](#css-variables)[Custom Theme Variables](#custom-theme-variables)[Override Tailwind CSS variables](#override-tailwind-css-variables)[Add custom CSS](#add-custom-css)[Base styles](#base-styles)[Components](#components)[Add custom utilities](#add-custom-utilities)[Simple utility](#simple-utility)[Complex utility](#complex-utility)[Functional utilities](#functional-utilities)[Add CSS imports](#add-css-imports)[Basic import](#basic-import)[Import with url() syntax](#import-with-url-syntax)[Import with media queries](#import-with-media-queries)[Add custom plugins](#add-custom-plugins)[Basic plugin usage](#basic-plugin-usage)[Plugin with npm dependency](#plugin-with-npm-dependency)[Scoped and file-based plugins](#scoped-and-file-based-plugins)[Multiple plugins with automatic ordering](#multiple-plugins-with-automatic-ordering)[Combined imports and plugins](#combined-imports-and-plugins)[Add custom animations](#add-custom-animations)[Add environment variables](#add-environment-variables)[Universal Items](#universal-items)

Deploy your shadcn/ui app on Vercel

Trusted by OpenAI, Sonos, Adobe, and more.

Vercel provides tools and infrastructure to deploy apps and features at scale.

Deploy Now[Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site\&utm_medium=web\&utm_campaign=docs_cta_deploy_now_callout)
