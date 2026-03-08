# Use Bun with Astro

> Learn how to use Bun with your Astro site.

[Bun](https://bun.sh/) is an all-in-one JavaScript runtime & toolkit. See [Bun’s documentation](https://bun.sh/docs) for more information.

Caution

Using Bun with Astro may reveal rough edges. Some integrations may not work as expected. Consult [Bun’s official documentation for working with Astro](https://bun.sh/guides/ecosystem/astro) for details.

If you have any problems using Bun, please [open an Issue on GitHub with Bun directly](https://github.com/oven-sh/bun/issues/new/choose).

## Prerequisites

[Section titled “Prerequisites”](#prerequisites)

- Bun installed locally on your machine. See the [installation instructions](https://bun.sh/docs/installation) in Bun’s official documentation.

## Create a new Astro project with Bun

[Section titled “Create a new Astro project with Bun”](#create-a-new-astro-project-with-bun)

Create a new Astro project with Bun using the following `create-astro` command:

```bash
bun create astro my-astro-project-using-bun
```

## Install dependencies

[Section titled “Install dependencies”](#install-dependencies)

If you skipped the “Install dependencies?” step during the CLI wizard, then be sure to install your dependencies before continuing.

```bash
bun install
```

## Add Types

[Section titled “Add Types”](#add-types)

Bun publishes the [`@types/bun`](https://www.npmjs.com/package/@types/bun) package, containing the runtime types for Bun.

Install `@types/bun` using the following command:

```sh
bun add -d @types/bun
```

## CLI installation flags

[Section titled “CLI installation flags”](#cli-installation-flags)

### Using integrations

[Section titled “Using integrations”](#using-integrations)

You can also use any of the official Astro integrations with the `astro add` command:

```bash
bun astro add react
```

### Use a theme or starter template

[Section titled “Use a theme or starter template”](#use-a-theme-or-starter-template)

You can start a new Astro project based on an [official example](https://github.com/withastro/astro/tree/main/examples) or the main branch of any GitHub repository by passing a `--template` argument to the `create astro` command.

Run the following command in your terminal, substituting the official Astro starter template name, or the GitHub username and repository of the theme you want to use:

```bash
# create a new project with an official example
bun create astro@latest --template <example-name>
# create a new project based on a GitHub repository’s main branch
bun create astro@latest --template <github-username>/<github-repo>
```

## Develop and build

[Section titled “Develop and build”](#develop-and-build)

To run the development server, use following command:

```bash
bun run dev
```

### Build and preview your site

[Section titled “Build and preview your site”](#build-and-preview-your-site)

To build your site, use the following command:

```bash
bun run build
```

When the build is finished, run the appropriate preview command (e.g. `bun run preview`) in your terminal and you can view the built version of your site locally in the same browser preview window.

## Testing

[Section titled “Testing”](#testing)

Bun ships with a fast, built-in, Jest-compatible test runner through the [`bun test` command](https://bun.sh/docs/cli/test). You can also use any other [testing tools for Astro](/en/guides/testing/).

## Official Resources

[Section titled “Official Resources”](#official-resources)

- [Build an app with Astro and Bun](https://bun.sh/guides/ecosystem/astro)

## Community Resources

[Section titled “Community Resources”](#community-resources)

Using Bun with Astro? Add your blog post or video to this page!

- [Using Bun with Astro and Cloudflare Pages](https://handerson.hashnode.dev/using-bun-with-astro-and-cloudflare-pages) - blog post

# Call endpoints from the server

> Learn how to call endpoints from the server in Astro.

Endpoints can be used to serve many kinds of data. This recipe calls a server endpoint from a page’s component script to display a greeting, without requiring an additional fetch request.

## Prerequisites

[Section titled “Prerequisites”](#prerequisites)

- A project with [SSR](/en/guides/on-demand-rendering/) (output: ‘server’) enabled

## Recipe

[Section titled “Recipe”](#recipe)

1. Create an endpoint in a new file `src/pages/api/hello.ts` that returns some data:

   src/pages/api/hello.ts

   ```ts
   import type { APIRoute } from 'astro'


   export const GET: APIRoute = () => {
     return new Response(
       JSON.stringify({
         greeting: 'Hello',
       }),
     )
   }
   ```

2. On any Astro page, import the `GET()` method from the endpoint. Call it with the [`Astro` global](/en/reference/api-reference/) to provide the request context, and use the response on the page:

   src/pages/index.astro

   ```astro
   ---
   import { GET } from './api/hello.ts'


   let response = await GET(Astro)
   const data = await response.json()
   ---


   {data.greeting} world!
   ```
