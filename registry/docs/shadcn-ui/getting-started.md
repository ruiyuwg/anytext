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

# Getting Started

Copy Page

[Previous](/docs/registry)[Next](/docs/registry/namespace)

Learn how to get setup and run your own component registry.

This guide will walk you through the process of setting up your own component registry. It assumes you already have a project with components and would like to turn it into a registry.

If you're starting a new registry project, you can use the [registry template](https://github.com/shadcn-ui/registry-template) as a starting point. We have already configured it for you.

## Requirements

You are free to design and host your custom registry as you see fit. The only requirement is that your registry items must be valid JSON files that conform to the [registry-item schema specification](/docs/registry/registry-item-json).

If you'd like to see an example of a registry, we have a [template project](https://github.com/shadcn-ui/registry-template) for you to use as a starting point.

## registry.json

The `registry.json` is the entry point for the registry. It contains the registry's name, homepage, and defines all the items present in the registry.

Your registry must have this file (or JSON payload) present at the root of the registry endpoint. The registry endpoint is the URL where your registry is hosted.

The `shadcn` CLI will automatically generate this file for you when you run the `build` command.

## Add a registry.json file

Create a `registry.json` file in the root of your project. Your project can be a Next.js, Vite, Vue, Svelte, PHP or any other framework as long as it supports serving JSON over HTTP.

registry.json

Copy`{   "$schema": "https://ui.shadcn.com/schema/registry.json",   "name": "acme",   "homepage": "https://acme.com",   "items": [     // ...   ] }`

This `registry.json` file must conform to the [registry schema specification](/docs/registry/registry-json).

## Add a registry item

### Create your component

Add your first component. Here's an example of a simple `<HelloWorld />` component:

registry/new-york/hello-world/hello-world.tsx

Copy`import { Button } from "@/components/ui/button"   export function HelloWorld() {   return <Button>Hello World</Button> }`

**Note:** This example places the component in the `registry/new-york` directory. You can place it anywhere in your project as long as you set the correct path in the `registry.json` file and you follow the `registry/[NAME]` directory structure.

Copy`registry └── new-york     └── hello-world         └── hello-world.tsx`

### Add your component to the registry

To add your component to the registry, you need to add your component definition to `registry.json`.

registry.json

Copy`{   "$schema": "https://ui.shadcn.com/schema/registry.json",   "name": "acme",   "homepage": "https://acme.com",   "items": [     {       "name": "hello-world",       "type": "registry:block",       "title": "Hello World",       "description": "A simple hello world component.",       "files": [         {           "path": "registry/new-york/hello-world/hello-world.tsx",           "type": "registry:component"         }       ]     }   ] }`

You define your registry item by adding a `name`, `type`, `title`, `description` and `files`.

For every file you add, you must specify the `path` and `type` of the file. The `path` is the relative path to the file from the root of your project. The `type` is the type of the file.

You can read more about the registry item schema and file types in the [registry item schema docs](/docs/registry/registry-item-json).

## Build your registry

### Install the shadcn CLI

pnpmnpmyarnbun

```
pnpm add shadcn@latest
```

Copy

### Add a build script

Add a `registry:build` script to your `package.json` file.

package.json

Copy`{   "scripts": {     "registry:build": "shadcn build"   } }`

### Run the build script

Run the build script to generate the registry JSON files.

pnpmnpmyarnbun

```
pnpm registry:build
```

Copy

**Note:** By default, the build script will generate the registry JSON files in `public/r` e.g `public/r/hello-world.json`.

You can change the output directory by passing the `--output` option. See the [shadcn build command](/docs/cli#build) for more information.

## Serve your registry

If you're running your registry on Next.js, you can now serve your registry by running the `next` server. The command might differ for other frameworks.

pnpmnpmyarnbun

```
pnpm dev
```

Copy

Your files will now be served at `http://localhost:3000/r/[NAME].json` eg. `http://localhost:3000/r/hello-world.json`.

## Publish your registry

To make your registry available to other developers, you can publish it by deploying your project to a public URL.

## Guidelines

Here are some guidelines to follow when building components for a registry.

- Place your registry item in the `registry/[STYLE]/[NAME]` directory. I'm using `new-york` as an example. It can be anything you want as long as it's nested under the `registry` directory.
- The following properties are required for the block definition: `name`, `description`, `type` and `files`.
- It is recommended to add a proper name and description to your registry item. This helps LLMs understand the component and its purpose.
- Make sure to list all registry dependencies in `registryDependencies`. A registry dependency is the name of the component in the registry eg. `input`, `button`, `card`, etc or a URL to a registry item eg. `http://localhost:3000/r/editor.json`.
- Make sure to list all dependencies in `dependencies`. A dependency is the name of the package in the registry eg. `zod`, `sonner`, etc. To set a version, you can use the `name@version` format eg. `zod@^3.20.0`.
- **Imports should always use the `@/registry` path.** eg. `import { HelloWorld } from "@/registry/new-york/hello-world/hello-world"`
- Ideally, place your files within a registry item in `components`, `hooks`, `lib` directories.

## Install using the CLI

To install a registry item using the `shadcn` CLI, use the `add` command followed by the URL of the registry item.

pnpmnpmyarnbun

```
pnpm dlx shadcn@latest add http://localhost:3000/r/hello-world.json
```

Copy

See the [Namespaced Registries](/docs/registry/namespace) docs for more information on how to install registry items from a namespaced registry.

[Introduction](/docs/registry)[Namespaces](/docs/registry/namespace)

On This Page

[Requirements](#requirements)[registry.json](#registryjson)[Add a registry.json file](#add-a-registryjson-file)[Add a registry item](#add-a-registry-item)[Create your component](#create-your-component)[Add your component to the registry](#add-your-component-to-the-registry)[Build your registry](#build-your-registry)[Install the shadcn CLI](#install-the-shadcn-cli)[Add a build script](#add-a-build-script)[Run the build script](#run-the-build-script)[Serve your registry](#serve-your-registry)[Publish your registry](#publish-your-registry)[Guidelines](#guidelines)[Install using the CLI](#install-using-the-cli)

Deploy your shadcn/ui app on Vercel

Trusted by OpenAI, Sonos, Adobe, and more.

Vercel provides tools and infrastructure to deploy apps and features at scale.

Deploy Now[Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site\&utm_medium=web\&utm_campaign=docs_cta_deploy_now_callout)
