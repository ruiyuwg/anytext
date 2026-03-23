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

# Astro

Copy Page

[Previous](/docs/dark-mode/vite)[Next](/docs/dark-mode/remix)

Adding dark mode to your astro app.

## Create an inline theme script

src/pages/index.astro

Copy`--- import '../styles/globals.css' ---   <script is:inline> 	const getThemePreference = () => { 		if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) { 			return localStorage.getItem('theme'); 		} 		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'; 	}; 	const isDark = getThemePreference() === 'dark'; 	document.documentElement.classList[isDark ? 'add' : 'remove']('dark');   	if (typeof localStorage !== 'undefined') { 		const observer = new MutationObserver(() => { 			const isDark = document.documentElement.classList.contains('dark'); 			localStorage.setItem('theme', isDark ? 'dark' : 'light'); 		}); 		observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] }); 	} </script>   <html lang="en"> 	<body>       <h1>Astro</h1> 	</body> </html>`

## Add a mode toggle

src/components/ModeToggle.tsx

Copy`import * as React from "react" import { Moon, Sun } from "lucide-react"   import { Button } from "@/components/ui/button" import {   DropdownMenu,   DropdownMenuContent,   DropdownMenuItem,   DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"   export function ModeToggle() {   const [theme, setThemeState] = React.useState<     "theme-light" | "dark" | "system"   >("theme-light")     React.useEffect(() => {     const isDarkMode = document.documentElement.classList.contains("dark")     setThemeState(isDarkMode ? "dark" : "theme-light")   }, [])     React.useEffect(() => {     const isDark =       theme === "dark" ||       (theme === "system" &&         window.matchMedia("(prefers-color-scheme: dark)").matches)     document.documentElement.classList[isDark ? "add" : "remove"]("dark")   }, [theme])     return (     <DropdownMenu>       <DropdownMenuTrigger asChild>         <Button variant="outline" size="icon">           <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />           <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />           <span className="sr-only">Toggle theme</span>         </Button>       </DropdownMenuTrigger>       <DropdownMenuContent align="end">         <DropdownMenuItem onClick={() => setThemeState("theme-light")}>           Light         </DropdownMenuItem>         <DropdownMenuItem onClick={() => setThemeState("dark")}>           Dark         </DropdownMenuItem>         <DropdownMenuItem onClick={() => setThemeState("system")}>           System         </DropdownMenuItem>       </DropdownMenuContent>     </DropdownMenu>   ) }`

## Display the mode toggle

Place a mode toggle on your site to toggle between light and dark mode.

src/pages/index.astro

Copy`--- import '../styles/globals.css' import { ModeToggle } from '@/components/ModeToggle'; ---      <html lang="en"> 	<body>       <h1>Astro</h1>       <ModeToggle client:load /> 	</body> </html>`

[Vite](/docs/dark-mode/vite)[Remix](/docs/dark-mode/remix)

On This Page

[Create an inline theme script](#create-an-inline-theme-script)[Add a mode toggle](#add-a-mode-toggle)[Display the mode toggle](#display-the-mode-toggle)

Deploy your shadcn/ui app on Vercel

Trusted by OpenAI, Sonos, Adobe, and more.

Vercel provides tools and infrastructure to deploy apps and features at scale.

Deploy Now[Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site\&utm_medium=web\&utm_campaign=docs_cta_deploy_now_callout)
