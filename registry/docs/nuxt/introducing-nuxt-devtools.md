# Introducing Nuxt DevTools

We announced the preview of [Nuxt DevTools](https://github.com/nuxt/devtools){rel=""nofollow""} on [Vue Amsterdam 2023](https://vuejs.amsterdam/){rel=""nofollow""}, a new tool to help you understand your Nuxt app and improve the developer experience even further. Today we released a new minor version [`v0.3.0`](https://github.com/nuxt/devtools/releases/tag/v0.3.0){rel=""nofollow""} with a bunch of updates and improvements.

![devtools-tab-overview](https://nuxt.com/assets/blog/devtools/tab-overview.png)

In this post, we will explore the reasons behind the creation of Nuxt DevTools, how it can enhance your development experience, and what you can expect in the future.

## Developer Experience

Over the recent years, there has been an increasing focus on Developer Experience (DX). Tools and frameworks have been striving to improve the DX. Along the way, Nuxt introduced many innovative features and conventions to make your day-to-day development easier and more efficient.

In Nuxt 3, we switched to [Vite](https://vitejs.dev/){rel=""nofollow""} as the default bundler for the instant hot module replacement (HMR) during developement, creating a faster feedback loop to your workflow. Additionally, we have introduced [Nitro](https://github.com/unjs/nitro){rel=""nofollow""}, a new server engine that allows you to deploy your Nuxt app to any hosting service, such as [Vercel](https://vercel.com){rel=""nofollow""}, [Netlify](https://netlify.com){rel=""nofollow""}, [Cloudflare](https://cloudflare.com){rel=""nofollow""} and [more](https://nitro.unjs.io/deploy){rel=""nofollow""} **with zero-config**.

Nuxt offers many common practices built-in:

- Write TypeScript and ESM out-of-the-box throughout your codebase.
- Build single-page applications (SPA), server-side rendering (SSR), static site generation (SSG), or [hybrid them **per routes**](https://nuxt.com/docs/guide/concepts/rendering#route-rules) - using the same codebase isomorphically without any explicit setup.
- Use several composables, like [`useState`](https://nuxt.com/docs/api/composables/use-state) and [`useAsyncData`](https://nuxt.com/docs/api/composables/use-async-data) for sharing states accessible across the server and client sides.
- Leverage SEO utilities, like [`useHead`](https://nuxt.com/docs/api/composables/use-head) and [`useSeoMeta`](https://nuxt.com/docs/getting-started/seo-meta#useseometa) to make meta-tags management a breaze.

Moreover, features such as the [layout system](https://nuxt.com/docs/guide/directory-structure/layouts), [plugins](https://nuxt.com/docs/guide/directory-structure/plugins), route [middleware](https://nuxt.com/docs/guide/directory-structure/middleware), and other tools make app creation easier and codebases more organized.

Conventions like [file-based routing](https://nuxt.com/docs/guide/directory-structure/pages) and [file-based server APIs](https://nitro.unjs.io/guide/introduction/routing){rel=""nofollow""} making the routing intuitive and effortless.

[Components auto-imports](https://nuxt.com/docs/guide/directory-structure/components) makes it easy to create shared components that are directly available in any Vue file. Unlike global components, they are code-splitted. We also introduced [composables auto-import](https://nuxt.com/docs/guide/concepts/auto-imports), where all APIs from Vue are directly available. Nuxt modules can also provide their custom composables to be auto-imported, as well as your [local composables](https://nuxt.com/docs/guide/directory-structure/composables).

Recently, we introduced client and server-only components, which can be used by adding `.client` and `.server` to the filename. All these conventions are fully typed and developers can even have type autocomplete when doing route navigation or fetching data from APIs. \**These conventions significantly reduce boilerplate code, avoid duplications, and improve productivity.*\*

When it comes to ecosystem, Nuxt has a large community of developers building modules around it, [with hundreds of high-quality modules](https://nuxt.com/modules) available. Modules allow developers to get integrations for features they want without worrying about configuration or best practices.

## The Problem

Nuxt is capable of creating a large scale application at ease, however there is one problem: **the lack of transparency**.

For every new feature and convention we introduce, we are adding a bit more abstraction to the framework.

Abstractions are great things to transfer implementation complexity and make things easier to get more focus when building. On the other hand, they can also add extra burden for users to learn and understand what's going on under the hood. Leading also to implicitness, like where a auto-imported component is from, or how many modules is using a certain component, etc. It can also make things hard to debug.

This might be considered as a trade-off of any tools, you have to learn and understand the tool to use it with efficiency. Despite improving the documentation and providing more examples, **we believe of an opportunity to improve the lack of transparency**.

## Introducing Nuxt DevTools

[Nuxt DevTools](https://github.com/nuxt/devtools){rel=""nofollow""} is a visual tool to help you understand your Nuxt app and improve the developer experience even further. It's created to provide a better transparency of Nuxt and your app, find performance bottlenecks and help you manage your app and configuration.

It is shipped as an experimental module and provide the views right inside your app. Once installed, it will add a small icon on the bottom of your app. Clicking it will open the DevTools panel.

To try it, please refer to the [installation guide](https://devtools.nuxtjs.org/guide){rel=""nofollow""}.

### Overview

Shows a quick overview of your app, including the Nuxt version, pages, components, modules, and plugins you are using. \**It also check your Nuxt version and allow you to upgrade with a single click.*\*

:video{autoplay controls autoPlay="true" poster="https://res.cloudinary.com/nuxt/video/upload/v1679922926/nuxt3/nuxt-devtools-upgrade\_dnfghq.jpg"}

### Pages

The pages tab shows your current routes and provide a quick way to navigate to them. For dynamic routes, it also provide a form to fill with each params interactively. You can also use the textbox to play and test how each route is matched.

:video{autoplay controls autoPlay="true" poster="https://res.cloudinary.com/nuxt/video/upload/v1679923373/nuxt3/nuxt-devtools-pages\_csjoh0.jpg"}

### Components

Components tab show all the components you are using in your app and where they are from. You can also search for them and go to the source code.

![nuxt-devtools-tab-components](https://nuxt.com/assets/blog/devtools/tab-components.png)

It also provides a graph view that show the relationship between components. You can filter the components to see the dependencies of a specific component. This could help to identify unintended dependencies and improve the performance and bundle size of pages.

![nuxt-devtools-components-graph](https://nuxt.com/assets/blog/devtools/tab-components-graph-all.png)

![nuxt-devtools-components-graph-filtered](https://nuxt.com/assets/blog/devtools/tab-components-graph-filtered.png)

You can also use the "Inspector" feature to inspect the DOM tree and see which component is rendering it. Click to go to your editor of the specific line. Making it much easier to make changes, without the requirement of understanding the project structure thoroughly.

![nuxt-devtools-tab-components-inspector](https://nuxt.com/assets/blog/devtools/tab-components-inspector.png)

### Imports

Imports tab shows all the auto-imports registered to Nuxt. You can see which files are importing them, and where they are from. Some entries can also provide short descriptions and documentation links.

![nuxt-devtools-tab-imports](https://nuxt.com/assets/blog/devtools/tab-imports.png)

### Modules

Modules tab shows all the modules you have installed and providing the links to their documentation and source code. You can find more modules available in [Nuxt Modules](https://nuxt.com/modules).

![nuxt-devtools-tab-modules](https://nuxt.com/assets/blog/devtools/tab-modules.png)

Recently we introduce the experimental upgrade feature, which allows you to upgrade your Nuxt or modules with ease. With the [Terminal tab](https://nuxt.com/#terminals), it shows the output of the upgrade process transparently.

![nuxt-devtools-tab-modules-upgrade](https://nuxt.com/assets/blog/devtools/tab-modules-upgrade.png)

### Assets

The assets tab that shows all your static assets and their information. You can copy the paths of the assets, or the code snippets of using them. In the future, with the integrations of [Nuxt Image](https://image.nuxtjs.org/){rel=""nofollow""}, you can even optimize images with a single click.

![nuxt-devtools-tab-assets](https://nuxt.com/assets/blog/devtools/tab-assets.png)

### Plugins

Plugins tab shows all the plugins you are using in your app. As plugins runs before the app is mounted,the time spent in each plugin should be minimal to avoid blocking the app from rendering. The time cost of each plugin provided can be helpful to find performance bottlenecks.

![nuxt-devtools-tab-plugins](https://nuxt.com/assets/blog/devtools/tab-plugins.png)

### Hooks

Hooks tab can help you to monitor the time spent in each hook from both client and server side. You can also see how many lisenters registed to each hook, and how many times they have been invoked. This can be helpful to find performance bottlenecks.

![nuxt-devtools-tab-hooks](https://nuxt.com/assets/blog/devtools/tab-hooks.png)

### App Config

You can inspect and modify the app config in DevTools, try different configurations and see the effects immediately.

![nuxt-devtools-app-config](https://nuxt.com/assets/blog/devtools/tab-app-config.png)

### Payload & Data

This tab shows the state created by [`useState`](https://nuxt.com/docs/api/composables/use-state), [`useAsyncData`](https://nuxt.com/docs/api/composables/use-async-data) and [`useFetch`](https://nuxt.com/docs/api/composables/use-fetch). It can be helpful to understand how the data is fetched and how the state is managed, or change them reactively to see it they affects your app. For `useAsyncData` and `useFetch`, you can also manually the trigger the refetch.

![nuxt-devtools-tab-payload](https://nuxt.com/assets/blog/devtools/tab-payload.png)

### Terminals

In some integrations, they might require to have subprocesses running to do certain jobs. Before DevTools, you either hide the output of the subprocess entirely and swallow the potential warnings/errors, or pipe to stdout and pollute your terminal with multiple outputs. Now you can now have the outputs in DevTools for each process and clearly isolated.

![nuxt-devtools-tab-terminals](https://nuxt.com/assets/blog/devtools/tab-terminals.png)

### Virtual Files

Virtual Files tab shows the virtual files generated by Nuxt and Nitro to support the conventions. This can be helpful for advanced debugging.

![nuxt-devtools-tab-virtual-files](https://nuxt.com/assets/blog/devtools/tab-virtual-files.png)

### Inspect

Inspect expose the [`vite-plugin-inspect`](https://github.com/antfu/vite-plugin-inspect){rel=""nofollow""} integration, allowing you to inspect transformation steps of Vite. It can be helpful to understand how each plugin is transforming your code and spot potential issues.

![nuxt-devtools-vite-plugin-inspect](https://nuxt.com/assets/blog/devtools/tab-inspect.png)

### VS Code

Thanks to [VS Code Server](https://code.visualstudio.com/docs/remote/vscode-server){rel=""nofollow""}, we are able to integrate a **full-featured** VS Code instance into DevTools. You can install extensions and sync your settings. This allows you to get closer feedback loop where you can change the code and see the result immediately without leaving the browser.

![nuxt-devtools-tab-vscode](https://nuxt.com/assets/blog/devtools/tab-vscode.png)

### Module Contributed View

With the ecosystem in mind, Nuxt DevTools to designed to be flexible and extendable. Modules could contribute their own views to DevTools, to provide interactive data and playgrounds for their integrations. The following are a few examples:

[VueUse module](https://nuxt.com/modules/vueuse) provides a search page for available composables and see their documentation.

![nuxt-devtools-tab-vueuse](https://nuxt.com/assets/blog/devtools/tab-vueuse.png)

[UnoCSS module](https://nuxt.com/modules/unocss) provides an interactive inspector to see how each module contributes to the final CSS.

![nuxt-devtools-tab-unocss](https://nuxt.com/assets/blog/devtools/tab-unocss.png)

[Nuxt Icon module](https://nuxt.com/modules/icon) provides a search engine for all icons available.

![nuxt-devtools-tab-nuxt-icon](https://nuxt.com/assets/blog/devtools/tab-icones.png)

[Nuxt Vitest module](https://nuxt.com/modules/vitest){rel=""nofollow""} provides Vitest UI for tests runing with the same pipeline as your Nuxt app.

![nuxt-devtools-tab-vitest](https://nuxt.com/assets/blog/devtools/tab-vitest.png)

### For Module Authors

With the release of `v0.3.0`, we improved the ability for module authors to contribute to the DevTools.

It includes:

- Module contributed views
- Access to client app's context and devtools' utils
- Custom RPC functions to communicate between server and client
- Subprocesses spawning and output steaming
- [`@nuxt/devtools-kit`](https://devtools.nuxtjs.org/module/utils-kit){rel=""nofollow""} - a set of utilities help you integrate your module with DevTools
- [`@nuxt/devtools-ui-kit`](https://devtools.nuxtjs.org/module/ui-kit){rel=""nofollow""} - the UI components used in DevTools, to make your module's view consistent with the rest of DevTools
- Starter template to create module with DevTools integration

Please check out the [Devtools Module Authors Guide](https://devtools.nuxtjs.org/module/guide){rel=""nofollow""} to learn more.

## What to Expect Next?

This is just the beginning of the journey. We are planning to add more features to DevTools, while exploring the ways to present the data in more intuitive and playful ways.

The goals of Nuxt DevTools are to:

- :icon{.size-5 name="lucide:blend"} Improve transparency for conventions
- :icon{.size-5 name="lucide:gauge"} Inspecting performance & analysis
- :icon{.size-5 name="lucide:swatch-book"} Interactive & playful
- :icon{.size-5 name="lucide:file-pen-line"} Personalized documentations
- :icon{.size-5 name="lucide:blocks"} Manage and scaffold apps with ease
- :icon{.size-5 name="lucide:lightbulb"} Provide insights and improvements
- :icon{.size-5 name="lucide:user-check"} Make the development experience more enjoyable

***

You can check our [Project Roadmap](https://github.com/nuxt/devtools/discussions/31){rel=""nofollow""} and share your [Ideas & Suggestions](https://github.com/nuxt/devtools/discussions/29){rel=""nofollow""}, helping us to make the DevTools better.

You can follow the latest updates by staring the [GitHub repository](https://github.com/nuxt/devtools){rel=""nofollow""}, and following [Nuxt's official Twitter](https://x.com/nuxt_js){rel=""nofollow""}.

Thank you for reading, and we are looking forward to your feedback and contributions!
