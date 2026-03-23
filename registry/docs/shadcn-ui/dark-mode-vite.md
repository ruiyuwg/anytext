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

# Vite

Copy Page

[Previous](/docs/dark-mode/next)[Next](/docs/dark-mode/astro)

Adding dark mode to your Vite app.

## Create a theme provider

components/theme-provider.tsx

Copy`import { createContext, useContext, useEffect, useState } from "react"   type Theme = "dark" | "light" | "system"   type ThemeProviderProps = {   children: React.ReactNode   defaultTheme?: Theme   storageKey?: string }   type ThemeProviderState = {   theme: Theme   setTheme: (theme: Theme) => void }   const initialState: ThemeProviderState = {   theme: "system",   setTheme: () => null, }   const ThemeProviderContext = createContext<ThemeProviderState>(initialState)   export function ThemeProvider({   children,   defaultTheme = "system",   storageKey = "vite-ui-theme",   ...props }: ThemeProviderProps) {   const [theme, setTheme] = useState<Theme>(     () => (localStorage.getItem(storageKey) as Theme) || defaultTheme   )     useEffect(() => {     const root = window.document.documentElement       root.classList.remove("light", "dark")       if (theme === "system") {       const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")         .matches         ? "dark"         : "light"         root.classList.add(systemTheme)       return     }       root.classList.add(theme)   }, [theme])     const value = {     theme,     setTheme: (theme: Theme) => {       localStorage.setItem(storageKey, theme)       setTheme(theme)     },   }     return (     <ThemeProviderContext.Provider {...props} value={value}>       {children}     </ThemeProviderContext.Provider>   ) }   export const useTheme = () => {   const context = useContext(ThemeProviderContext)     if (context === undefined)     throw new Error("useTheme must be used within a ThemeProvider")     return context }`

## Wrap your root layout

Add the `ThemeProvider` to your root layout.

App.tsx

Copy`import { ThemeProvider } from "@/components/theme-provider"   function App() {   return (     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">       {children}     </ThemeProvider>   ) }   export default App`

## Add a mode toggle

Place a mode toggle on your site to toggle between light and dark mode.

components/mode-toggle.tsx

Copy`import { Moon, Sun } from "lucide-react"   import { Button } from "@/components/ui/button" import {   DropdownMenu,   DropdownMenuContent,   DropdownMenuItem,   DropdownMenuTrigger, } from "@/components/ui/dropdown-menu" import { useTheme } from "@/components/theme-provider"   export function ModeToggle() {   const { setTheme } = useTheme()     return (     <DropdownMenu>       <DropdownMenuTrigger asChild>         <Button variant="outline" size="icon">           <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />           <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />           <span className="sr-only">Toggle theme</span>         </Button>       </DropdownMenuTrigger>       <DropdownMenuContent align="end">         <DropdownMenuItem onClick={() => setTheme("light")}>           Light         </DropdownMenuItem>         <DropdownMenuItem onClick={() => setTheme("dark")}>           Dark         </DropdownMenuItem>         <DropdownMenuItem onClick={() => setTheme("system")}>           System         </DropdownMenuItem>       </DropdownMenuContent>     </DropdownMenu>   ) }`

[Next.js](/docs/dark-mode/next)[Astro](/docs/dark-mode/astro)

On This Page

[Create a theme provider](#create-a-theme-provider)[Wrap your root layout](#wrap-your-root-layout)[Add a mode toggle](#add-a-mode-toggle)

Deploy your shadcn/ui app on Vercel

Trusted by OpenAI, Sonos, Adobe, and more.

Vercel provides tools and infrastructure to deploy apps and features at scale.

Deploy Now[Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site\&utm_medium=web\&utm_campaign=docs_cta_deploy_now_callout)
