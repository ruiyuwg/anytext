# Nuxt Directory Structure

Nuxt applications have a specific directory structure that is used to organize the code. This structure is designed to be easy to understand and to be used in a consistent way.

## Root Directory

The root directory of a Nuxt application is the directory that contains the `nuxt.config.ts` file. This file is used to configure the Nuxt application.

## App Directory

The following directories are related to the universal Nuxt application:

- [`assets/`](https://nuxt.com/docs/3.x/directory-structure/assets): website's assets that the build tool (Vite or webpack) will process
- [`components/`](https://nuxt.com/docs/3.x/directory-structure/components): Vue components of the application
- [`composables/`](https://nuxt.com/docs/3.x/directory-structure/composables): add your Vue composables
- [`layouts/`](https://nuxt.com/docs/3.x/directory-structure/layouts): Vue components that wrap around your pages and avoid re-rendering between pages
- [`middleware/`](https://nuxt.com/docs/3.x/directory-structure/middleware): run code before navigating to a particular route
- [`pages/`](https://nuxt.com/docs/3.x/directory-structure/pages): file-based routing to create routes within your web application
- [`plugins/`](https://nuxt.com/docs/3.x/directory-structure/plugins): use Vue plugins and more at the creation of your Nuxt application
- [`utils/`](https://nuxt.com/docs/3.x/directory-structure/utils): add functions throughout your application that can be used in your components, composables, and pages.

This directory also includes specific files:

- [`app.config.ts`](https://nuxt.com/docs/3.x/directory-structure/app-config): a reactive configuration within your application
- [`app.vue`](https://nuxt.com/docs/3.x/directory-structure/app): the root component of your Nuxt application
- [`error.vue`](https://nuxt.com/docs/3.x/directory-structure/error): the error page of your Nuxt application

## Public Directory

The [`public/`](https://nuxt.com/docs/3.x/directory-structure/public) directory is the directory that contains the public files of the Nuxt application. Files contained within this directory are served at the root and are not modified by the build process.

This is suitable for files that have to keep their names (e.g. `robots.txt`) *or* likely won't change (e.g. `favicon.ico`).

## Server Directory

The [`server/`](https://nuxt.com/docs/3.x/directory-structure/server) directory is the directory that contains the server-side code of the Nuxt application. It contains the following subdirectories:

- [`api/`](https://nuxt.com/docs/3.x/directory-structure/server#server-routes): contains the API routes of the application.
- [`routes/`](https://nuxt.com/docs/3.x/directory-structure/server#server-routes): contains the server routes of the application (e.g. dynamic `/sitemap.xml`).
- [`middleware/`](https://nuxt.com/docs/3.x/directory-structure/server#server-middleware): run code before a server route is processed
- [`plugins/`](https://nuxt.com/docs/3.x/directory-structure/server#server-plugins): use plugins and more at the creation of the Nuxt server
- [`utils/`](https://nuxt.com/docs/3.x/directory-structure/server#server-utilities): add functions throughout your application that can be used in your server code.

## Shared Directory

The [`shared/`](https://nuxt.com/docs/3.x/directory-structure/shared) directory is the directory that contains the shared code of the Nuxt application and Nuxt server. This code can be used in both the Vue app and the Nitro server.

## Content Directory

The [`content/`](https://nuxt.com/docs/3.x/directory-structure/content) directory is enabled by the [Nuxt Content](https://content.nuxt.com){rel=""nofollow""} module. It is used to create a file-based CMS for your application using Markdown files.

## Modules Directory

The [`modules/`](https://nuxt.com/docs/3.x/directory-structure/modules) directory is the directory that contains the local modules of the Nuxt application. Modules are used to extend the functionality of the Nuxt application.

## Layers Directory

The [`layers/`](https://nuxt.com/docs/3.x/directory-structure/layers) directory allows you to organize and share reusable code, components, composables, and configurations. Layers within this directory are automatically registered in your project.

## Nuxt Files

- [`nuxt.config.ts`](https://nuxt.com/docs/3.x/directory-structure/nuxt-config) file is the main configuration file for the Nuxt application.
- [`.nuxtrc`](https://nuxt.com/docs/3.x/directory-structure/nuxtrc) file is another syntax for configuring the Nuxt application (useful for global configurations).
- [`.nuxtignore`](https://nuxt.com/docs/3.x/directory-structure/nuxtignore) file is used to ignore files in the root directory during the build phase.

# Nuxt Guide

::card-group{.sm:grid-cols-1}
:::card
-------

icon: i-lucide-medal
title: Key Concepts
to: https://nuxt.com/docs/3.x/guide/concepts
--------------------------------------------

Discover the main concepts behind Nuxt, from auto-import, hybrid rendering to its TypeScript support.
:::

## :::card

icon: i-lucide-square-check
title: Best Practices
to: https://nuxt.com/docs/3.x/guide/best-practices
--------------------------------------------------

Learn about best practices when developing with Nuxt.
:::

## :::card

icon: i-lucide-box
title: Module Author Guide
to: https://nuxt.com/docs/3.x/guide/modules
-------------------------------------------

Learn how to create Nuxt modules to integrate, enhance or extend any Nuxt application.
:::

## :::card

icon: i-lucide-book-open
title: Recipes
to: https://nuxt.com/docs/3.x/guide/recipes
-------------------------------------------

Find solutions to common problems and learn how to implement them in your Nuxt project.
:::

## :::card

icon: i-lucide-star
title: Going Further
to: https://nuxt.com/docs/3.x/guide/going-further
-------------------------------------------------

Master Nuxt with advanced concepts like experimental features, hooks, and more.
:::
::
