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

# Next.js 15 + React 19

Copy Page

[Previous](/docs/new)[Next](/docs/tailwind-v4)

Using shadcn/ui with Next.js 15 and React 19.

**Update:** We have added full support for React 19 and Tailwind v4 in the `latest` release. **This guide might be outdated. Proceed with caution.**

## TL;DR

If you're using `npm`, you can install shadcn/ui dependencies with a flag. The `shadcn` CLI will prompt you to select a flag when you run it. No flags required for pnpm, bun, or yarn.

See [Upgrade Status](#upgrade-status) for the status of React 19 support for each package.

## What's happening?

React 19 is now [rc](https://www.npmjs.com/package/react?activeTab=versions) and is [tested and supported in the latest Next.js 15 release](https://nextjs.org/blog/next-15#react-19).

To support React 19, package maintainers will need to test and update their packages to include React 19 as a peer dependency. This is [already](https://github.com/radix-ui/primitives/pull/2952) [in](https://github.com/pacocoursey/cmdk/pull/318) [progress](https://github.com/emilkowalski/vaul/pull/498).

Copy`"peerDependencies": { -  "react": "^16.8 || ^17.0 || ^18.0", +  "react": "^16.8 || ^17.0 || ^18.0 || ^19.0", -  "react-dom": "^16.8 || ^17.0 || ^18.0" +  "react-dom": "^16.8 || ^17.0 || ^18.0 || ^19.0" },`

You can check if a package lists React 19 as a peer dependency by running `npm info <package> peerDependencies`.

In the meantime, if you are installing a package that **does not** list React 19 as a peer dependency, you will see an error message like this:

Copy`npm error code ERESOLVE npm error ERESOLVE unable to resolve dependency tree npm error npm error While resolving: my-app@0.1.0 npm error Found: react@19.0.0-rc-69d4b800-20241021 npm error node_modules/react npm error   react@"19.0.0-rc-69d4b800-20241021" from the root project`

**Note:** This is npm only. PNPM and Bun will only show a silent warning.

## How to fix this

### Solution 1: `--force` or `--legacy-peer-deps`

You can force install a package with the `--force` or the `--legacy-peer-deps` flag.

Copy`npm i <package> --force   npm i <package> --legacy-peer-deps`

This will install the package and ignore the peer dependency warnings.

###

What do the `--force` and `--legacy-peer-deps` flag do?

### Solution 2: Use React 18

You can downgrade `react` and `react-dom` to version 18, which is compatible with the package you are installing and upgrade when the dependency is updated.

Copy`npm i react@18 react-dom@18`

Whichever solution you choose, make sure you test your app thoroughly to ensure there are no regressions.

## Using shadcn/ui on Next.js 15

### Using pnpm, bun, or yarn

Follow the instructions in the [installation guide](/docs/installation/next) to install shadcn/ui. No flags are needed.

### Using npm

When you run `npx shadcn@latest init -d`, you will be prompted to select an option to resolve the peer dependency issues.

Copy`It looks like you are using React 19. Some packages may fail to install due to peer dependency issues (see https://ui.shadcn.com/react-19).   ? How would you like to proceed? › - Use arrow-keys. Return to submit. ❯   Use --force     Use --legacy-peer-deps`

You can then run the command with the flag you choose.

## Adding components

The process for adding components is the same as above. Select a flag to resolve the peer dependency issues.

**Remember to always test your app after installing new dependencies.**

## Upgrade Status

To make it easy for you to track the progress of the upgrade, here is a table with the React 19 support status for the shadcn/ui dependencies.

- ✅ - Works with React 19 using npm, pnpm, and bun.
- 🚧 - Works with React 19 using pnpm and bun. Requires flag for npm. PR is in progress.

Package

Status

Note

[radix-ui](https://www.npmjs.com/package/@radix-ui/react-icons)

✅

[lucide-react](https://www.npmjs.com/package/lucide-react)

✅

[class-variance-authority](https://www.npmjs.com/package/class-variance-authority)

✅

Does not list React 19 as a peer dependency.

[tailwindcss-animate](https://www.npmjs.com/package/tailwindcss-animate)

✅

Does not list React 19 as a peer dependency.

[embla-carousel-react](https://www.npmjs.com/package/embla-carousel-react)

✅

[recharts](https://www.npmjs.com/package/recharts)

✅

See note [below](#recharts)

[react-hook-form](https://www.npmjs.com/package/react-hook-form)

✅

[react-resizable-panels](https://www.npmjs.com/package/react-resizable-panels)

✅

[sonner](https://www.npmjs.com/package/sonner)

✅

[react-day-picker](https://www.npmjs.com/package/react-day-picker)

✅

Works with flag for npm. Work to upgrade to v9 in progress.

[input-otp](https://www.npmjs.com/package/input-otp)

✅

[vaul](https://www.npmjs.com/package/vaul)

✅

[@radix-ui/react-icons](https://www.npmjs.com/package/@radix-ui/react-icons)

✅

See [PR #194](https://github.com/radix-ui/icons/pull/194)

[cmdk](https://www.npmjs.com/package/cmdk)

✅

If you have any questions, please [open an issue](https://github.com/shadcn/ui/issues) on GitHub.

## Recharts

To use recharts with React 19, you will need to override the `react-is` dependency.

### Add the following to your `package.json`

package.json

Copy`"overrides": {   "react-is": "^19.0.0-rc-69d4b800-20241021" }`

Note: the `react-is` version needs to match the version of React 19 you are using. The above is an example.

### Run `npm install --legacy-peer-deps`

[Your project is ready!](/docs/new)[Tailwind v4](/docs/tailwind-v4)

On This Page

[TL;DR](#tldr)[What's happening?](#whats-happening)[How to fix this](#how-to-fix-this)[Solution 1: `--force` or `--legacy-peer-deps`](#solution-1---force-or---legacy-peer-deps)[Solution 2: Use React 18](#solution-2-use-react-18)[Using shadcn/ui on Next.js 15](#using-shadcnui-on-nextjs-15)[Using pnpm, bun, or yarn](#using-pnpm-bun-or-yarn)[Using npm](#using-npm)[Adding components](#adding-components)[Upgrade Status](#upgrade-status)[Recharts](#recharts)

Deploy your shadcn/ui app on Vercel

Trusted by OpenAI, Sonos, Adobe, and more.

Vercel provides tools and infrastructure to deploy apps and features at scale.

Deploy Now[Deploy to Vercel](https://vercel.com/new?utm_source=shadcn_site\&utm_medium=web\&utm_campaign=docs_cta_deploy_now_callout)
