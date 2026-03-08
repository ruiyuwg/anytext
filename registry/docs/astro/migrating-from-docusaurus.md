# Migrating from Docusaurus

> Tips for migrating an existing Docusaurus project to Astro

[Docusaurus](https://Docusaurus.io) is a popular documentation website builder built on React.

## Key Similarities between Docusaurus and Astro

[Section titled “Key Similarities between Docusaurus and Astro”](#key-similarities-between-docusaurus-and-astro)

Docusaurus and Astro share some similarities that will help you migrate your project:

- Both Astro and Docusaurus are modern, JavaScript-based (Jamstack) site builders intended for [content-driven websites](/en/concepts/why-astro/#content-driven), like documentation sites.

- Both Astro and Docusaurus support [MDX pages](/en/guides/markdown-content/). You should be able to use your existing `.mdx` files with Astro.

- Both Astro and Docusaurus use [file-based routing](/en/guides/routing/) to generate page routes automatically for any MDX file located in `src/pages`. Using Astro’s file structure for your existing content and when adding new pages should feel familiar.

- Astro has an [official integration for using React components](/en/guides/integrations-guide/react/). Note that in Astro, React files **must** have a `.jsx` or `.tsx` extension.

- Astro supports [installing NPM packages](/en/guides/imports/#npm-packages), including several for React. You may be able to keep some or all of your existing React components and dependencies.

- [Astro’s JSX-like syntax](/en/basics/astro-components/#the-component-template) should feel familiar if you are used to writing React.

## Key Differences between Docusaurus and Astro

[Section titled “Key Differences between Docusaurus and Astro”](#key-differences-between-docusaurus-and-astro)

When you rebuild your Docusaurus site in Astro, you will notice some important differences:

- Docusaurus is a React-based single-page application (SPA). Astro sites are multi-page apps built using [`.astro` components](/en/basics/astro-components/), but can also support [React, Preact, Vue.js, Svelte, SolidJS, AlpineJS](/en/guides/framework-components/) and raw HTML templating.

- Docusaurus was designed to build documentation websites and has some built-in, documentation-specific website features that you would have to build yourself in Astro. Instead, Astro offers some of these features through [Starlight: an official docs theme](https://starlight.astro.build). This website was the inspiration for Starlight, and now runs on it! You can also find more [community docs themes](https://astro.build/themes?search=\&categories%5B%5D=docs) with built-in features in our Themes Showcase.

- Docusaurus sites use MDX pages for content. Astro’s docs theme uses Markdown (`.md`) files by default and does not require you to use MDX. You can optionally [install Astro’s MDX integration](/en/guides/integrations-guide/mdx/) (included in our Starlight theme by default) and use `.mdx` files in addition to standard Markdown files.

## Switch from Docusaurus to Astro

[Section titled “Switch from Docusaurus to Astro”](#switch-from-docusaurus-to-astro)

To convert a Docusaurus documentation site to Astro, start with our official [Starlight docs theme starter template](https://starlight.astro.build), or explore more community docs themes in our [theme showcase](https://astro.build/themes?search=\&categories%5B%5D=docs).

You can pass a `--template` argument to the `create astro` command to start a new Astro project with one of our official starters. Or, you can [start a new project from any existing Astro repository on GitHub](/en/install-and-setup/#install-from-the-cli-wizard).

- npm

  ```shell
  npm create astro@latest -- --template starlight
  ```

- pnpm

  ```shell
  pnpm create astro@latest --template starlight
  ```

- Yarn

  ```shell
  yarn create astro --template starlight
  ```

Astro’s MDX integration is included by default, so you can [bring your existing content files to Starlight](https://starlight.astro.build/getting-started/#add-content) right away.

You can find Astro’s docs starter, and other official templates, on [astro.new](https://astro.new). You’ll find a link to each project’s GitHub repository, as well as one-click links to open a working project in IDX, StackBlitz, CodeSandbox and Gitpod online development environments.

## Community Resources

[Section titled “Community Resources”](#community-resources)

[Speeding up documentation by 10 times (Russian) ](https://habr.com/ru/articles/880220/)

Have a resource to share?

If you found (or made!) a helpful video or blog post about converting a Docusaurus site to Astro, [add it to this list](https://github.com/withastro/docs/edit/main/src/content/docs/en/guides/migrate-to-astro/from-docusaurus.mdx)!
