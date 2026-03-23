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

# Gatsby

Copy Page

[Previous](/docs/forms/next)[Next](/docs/registry/faq)

Install and configure shadcn/ui for Gatsby.

**Note:** This guide is for Gatsby with Tailwind CSS v3. For new projects, we recommend using one of the other frameworks that support Tailwind CSS v4.

### Create project

Start by creating a new Gatsby project using `create-gatsby`:

Copy`npm init gatsby`

### Configure your Gatsby project to use TypeScript and Tailwind CSS

You will be asked a few questions to configure your project:

Copy`✔ What would you like to call your site? · your-app-name ✔ What would you like to name the folder where your site will be created? · your-app-name ✔ Will you be using JavaScript or TypeScript? · TypeScript ✔ Will you be using a CMS? · Choose whatever you want ✔ Would you like to install a styling system? · Tailwind CSS ✔ Would you like to install additional features with other plugins? · Choose whatever you want ✔ Shall we do this? (Y/n) · Yes`

### Edit tsconfig.json file

Add the following code to the `tsconfig.json` file to resolve paths:

Copy`{   "compilerOptions": {     // ...     "baseUrl": ".",     "paths": {       "@/*": [         "./src/*"       ]     }     // ...   } }`

### Create gatsby-node.ts file

Create a `gatsby-node.ts` file at the root of your project if it doesn’t already exist, and add the code below to the `gatsby-node` file so your app can resolve paths:

Copy`import * as path from "path"   export const onCreateWebpackConfig = ({ actions }) => {   actions.setWebpackConfig({     resolve: {       alias: {         "@/components": path.resolve(__dirname, "src/components"),         "@/lib/utils": path.resolve(__dirname, "src/lib/utils"),       },     },   }) }`

### Run the CLI

Run the `shadcn` init command to set up your project:

pnpmnpmyarnbun

```
pnpm dlx shadcn@latest init
```

Copy

### That's it

You can now start adding components to your project.

pnpmnpmyarnbun

```
pnpm dlx shadcn@latest add button
```

Copy

The command above will add the `Button` component to your project. You can then import it like this:

Copy`import { Button } from "@/components/ui/button"   export default function Home() {   return (     <div>       <Button>Click me</Button>     </div>   ) }`

[Next.js](/docs/forms/next)[FAQ](/docs/registry/faq)

On This Page

[Create project](#create-project)[Configure your Gatsby project to use TypeScript and Tailwind CSS](#configure-your-gatsby-project-to-use-typescript-and-tailwind-css)[Edit tsconfig.json file](#edit-tsconfigjson-file)[Create gatsby-node.ts file](#create-gatsby-nodets-file)[Run the CLI](#run-the-cli)[That's it](#thats-it)

Deploy your shadcn/ui app on Vercel

Trusted by OpenAI, Sonos, Adobe, and more.

Vercel provides tools and infrastructure to deploy apps and features at scale.

Deploy Now[Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site\&utm_medium=web\&utm_campaign=docs_cta_deploy_now_callout)
