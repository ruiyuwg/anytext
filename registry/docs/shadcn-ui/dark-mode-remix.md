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

# Remix

Copy Page

[Previous](/docs/dark-mode/astro)[Next](/docs/rtl)

Adding dark mode to your Remix app.

## Modify your tailwind.css file

Add `:root[class~="dark"]` to your tailwind.css file. This will allow you to use the `dark` class on your html element to apply dark mode styles.

app/tailwind.css

Copy`.dark, :root[class~="dark"] {   ...; }`

## Install remix-themes

Start by installing `remix-themes`:

pnpmnpmyarnbun

```
pnpm add remix-themes
```

Copy

## Create a session storage and theme session resolver

app/sessions.server.tsx

Copy`import { createThemeSessionResolver } from "remix-themes"   // You can default to 'development' if process.env.NODE_ENV is not set const isProduction = process.env.NODE_ENV === "production"   const sessionStorage = createCookieSessionStorage({   cookie: {     name: "theme",     path: "/",     httpOnly: true,     sameSite: "lax",     secrets: ["s3cr3t"],     // Set domain and secure only if in production     ...(isProduction       ? { domain: "your-production-domain.com", secure: true }       : {}),   }, })   export const themeSessionResolver = createThemeSessionResolver(sessionStorage)`

## Set up Remix Themes

Add the `ThemeProvider` to your root layout.

app/root.tsx

Copy``import clsx from "clsx" import { PreventFlashOnWrongTheme, ThemeProvider, useTheme } from "remix-themes"   import { themeSessionResolver } from "./sessions.server"   // Return the theme from the session storage using the loader export async function loader({ request }: LoaderFunctionArgs) {   const { getTheme } = await themeSessionResolver(request)   return {     theme: getTheme(),   } } // Wrap your app with ThemeProvider. // `specifiedTheme` is the stored theme in the session storage. // `themeAction` is the action name that's used to change the theme in the session storage. export default function AppWithProviders() {   const data = useLoaderData<typeof loader>()   return (     <ThemeProvider specifiedTheme={data.theme} themeAction="/action/set-theme">       <App />     </ThemeProvider>   ) }   export function App() {   const data = useLoaderData<typeof loader>()   const [theme] = useTheme()   return (     <html lang="en" className={clsx(theme)}>       <head>         <meta charSet="utf-8" />         <meta name="viewport" content="width=device-width, initial-scale=1" />         <Meta />         <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />         <Links />       </head>       <body>         <Outlet />         <ScrollRestoration />         <Scripts />         <LiveReload />       </body>     </html>   ) }``

## Add an action route

Create a file in `/routes/action.set-theme.ts`. Ensure that you pass the filename to the ThemeProvider component. This route is used to store the preferred theme in the session storage when the user changes it.

app/routes/action.set-theme.ts

Copy`import { createThemeAction } from "remix-themes"   import { themeSessionResolver } from "./sessions.server"   export const action = createThemeAction(themeSessionResolver)`

## Add a mode toggle

Place a mode toggle on your site to toggle between light and dark mode.

components/mode-toggle.tsx

Copy`import { Moon, Sun } from "lucide-react" import { Theme, useTheme } from "remix-themes"   import { Button } from "./ui/button" import {   DropdownMenu,   DropdownMenuContent,   DropdownMenuItem,   DropdownMenuTrigger, } from "./ui/dropdown-menu"   export function ModeToggle() {   const [, setTheme] = useTheme()     return (     <DropdownMenu>       <DropdownMenuTrigger asChild>         <Button variant="ghost" size="icon">           <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />           <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />           <span className="sr-only">Toggle theme</span>         </Button>       </DropdownMenuTrigger>       <DropdownMenuContent align="end">         <DropdownMenuItem onClick={() => setTheme(Theme.LIGHT)}>           Light         </DropdownMenuItem>         <DropdownMenuItem onClick={() => setTheme(Theme.DARK)}>           Dark         </DropdownMenuItem>       </DropdownMenuContent>     </DropdownMenu>   ) }`

[Astro](/docs/dark-mode/astro)[RTL](/docs/rtl)

On This Page

[Modify your tailwind.css file](#modify-your-tailwindcss-file)[Install remix-themes](#install-remix-themes)[Create a session storage and theme session resolver](#create-a-session-storage-and-theme-session-resolver)[Set up Remix Themes](#set-up-remix-themes)[Add an action route](#add-an-action-route)[Add a mode toggle](#add-a-mode-toggle)

Deploy your shadcn/ui app on Vercel

Trusted by OpenAI, Sonos, Adobe, and more.

Vercel provides tools and infrastructure to deploy apps and features at scale.

Deploy Now[Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site\&utm_medium=web\&utm_campaign=docs_cta_deploy_now_callout)
