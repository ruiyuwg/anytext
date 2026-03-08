# Configuration overview

> Get to know the ways you can configure and customize your new project and your development experience.

Astro is a flexible, unopinionated framework that allows you to configure your project in many different ways. This means that getting started with a new project might feel overwhelming: there is no “one best way” to set up your Astro project!

The guides in this “Configuration” section will help you familiarize yourself with the various files that allow you to configure and customize aspects of your project and development environment.

If this is your first Astro project, or if it’s been a while since you’ve set up a new project, use the following guides and reference in the documentation for assistance.

## The Astro config File

[Section titled “The Astro config File”](#the-astro-config-file)

The [Astro config file](/en/reference/configuration-reference/) is a JavaScript file included at the root of every starter project:

astro.config.mjs

```js
import { defineConfig } from "astro/config";


export default defineConfig({
  // your configuration options here...
});
```

It is only required if you have something to configure, but most projects will use this file. The `defineConfig()` helper provides automatic IntelliSense in your IDE and is where you will add all your configuration options to tell Astro how to build and render your project to HTML.

We recommend using the default file format `.mjs` in most cases, or `.ts` if you want to write TypeScript in your config file. However, `astro.config.js` and `astro.config.cjs` are also supported.

Read Astro’s [configuration reference](/en/reference/configuration-reference/) for a full overview of all supported configuration options.

## The TypeScript config File

[Section titled “The TypeScript config File”](#the-typescript-config-file)

Every Astro starter project includes a `tsconfig.json` file in your project. Astro’s [component script](/en/basics/astro-components/#the-component-script) is Typescript, which provides Astro’s editor tooling and allows you to optionally add syntax to your JavaScript for type checking of your own project code.

Use the `tsconfig.json` file to configure the TypeScript template that will perform type checks on your code, configure TypeScript plugins, set import aliases, and more.

Read Astro’s [TypeScript guide](/en/guides/typescript/) for a full overview of TypeScript options and Astro’s built-in utility types.

## Development Experience

[Section titled “Development Experience”](#development-experience)

While you work in development mode, you can take advantage of your code editor and other tools to improve the Astro developer experience.

Astro provides its own official VS Code extension and is compatible with several other popular editor tools. Astro also provides a customizable toolbar that displays in your browser preview while the dev server is running. You can install and even build your own toolbar apps for additional functionality.

Read Astro’s guides to [editor setup options](/en/editor-setup/) and [using the dev toolbar](/en/guides/dev-toolbar/) to learn how to customize your development experience.

## Common new project tasks

[Section titled “Common new project tasks”](#common-new-project-tasks)

Here are some first steps you might choose to take with a new Astro project.

### Add your deployment domain

[Section titled “Add your deployment domain”](#add-your-deployment-domain)

For generating your sitemap and creating canonical URLs, configure your deployment URL in the [`site`](/en/reference/configuration-reference/#site) option. If you are deploying to a path (e.g. `www.example.com/docs`), you can also configure a [`base`](/en/reference/configuration-reference/#base) for the root of your project.

Additionally, different deployment hosts may have different behavior regarding trailing slashes at the end of your URLs. (e.g. `example.com/about` vs `example.com/about/`). Once your site is deployed, you may need to configure your [`trailingSlash`](/en/reference/configuration-reference/#trailingslash) preference.

astro.config.mjs

```js
import { defineConfig } from "astro/config";


export default defineConfig({
  site: "https://www.example.com",
  base: "/docs",
  trailingSlash: "always",
});
```

### Add site metadata

[Section titled “Add site metadata”](#add-site-metadata)

Astro does not use its configuration file for common SEO or meta data, only for information required to build your project code and render it to HTML.

Instead, this information is added to your page `<head>` using standard HTML `<link>` and `<meta>` tags, just as if you were writing plain HTML pages.

One common pattern for Astro sites is to create a `<Head />` [`.astro` component](/en/basics/astro-components/) that can be added to a common [layout component](/en/basics/layouts/) so it can apply to all your pages.

src/components/MainLayout.astro

```astro
---
import Head from "./Head.astro";


const { ...props } = Astro.props;
---
<html>
  <head>
    <meta charset="utf-8">
    <Head />
    <!-- Additional head elements -->
  </head>
  <body>
    <!-- Page content goes here -->
  </body>
</html>
```

Because `Head.astro` is just a regular Astro component, you can import files and receive props passed from other components, such as a specific page title.

src/components/Head.astro

```astro
---
import Favicon from "../assets/Favicon.astro";
import SomeOtherTags from "./SomeOtherTags.astro";


const { title = "My Astro Website", ...props } = Astro.props;
---
<link rel="sitemap" href="/sitemap-index.xml">
<title>{title}</title>
<meta name="description" content="Welcome to my new Astro site!">


<!-- Web analytics -->
<script data-goatcounter="https://my-account.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>


<!-- Open Graph tags -->
<meta property="og:title" content="My New Astro Website" />
<meta property="og:type" content="website" />
<meta property="og:url" content="http://www.example.com/" />
<meta property="og:description" content="Welcome to my new Astro site!" />
<meta property="og:image" content="https://www.example.com/_astro/seo-banner.BZD7kegZ.webp">
<meta property="og:image:alt" content="">


<SomeOtherTags />


<Favicon />
```

# Astro Courses

> Learn Astro with out-of-this-world courses and tutorials.

Want to get started learning Astro with a course or tutorial?

You can learn the basics of Astro with our [official docs Build a Blog tutorial](/en/tutorial/0-introduction/), or explore our collection of recommended Astro educational content.

## Education Partners

[Section titled “Education Partners”](#education-partners)

Support Astro while you learn

Use Astro’s affiliate links for discounts with our education partners and some of your purchase goes directly back to funding development of the Astro open source project!

Learn Astro from trusted Astro educators, with video lessons, interactive challenges, and projects!

[Learn Astro with Coding in Public ](https://learnastro.dev/?code=ASTRO_PROMO)A premium interactive course with 150+ video lessons that teaches you how to use Astro’s built-in tooling and features.

[Learn Astro with James Q Quick ](https://scrimba.com/intro-to-astro-c00ar0fi5u?via=astro)Build your first Astro site with 35 interactive Scrimba lessons, with video and IDE merged into one unique learning platform.

## Community learning resources

[Section titled “Community learning resources”](#community-learning-resources)

Learn from your fellow astronauts with curated collections of guides, articles, and blog posts.

[Astro Tips ](https://astro-tips.dev/)Advanced, unusual, experimental, and community-written recipes, tutorials, and quick tips.

[Astro Support Squid ](https://get.supportsquid.ink/)An open, public Astro support forum and knowledge base outside of the Astro Discord.
