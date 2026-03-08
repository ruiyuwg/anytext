# Migrate an existing project to Astro

> Some tips and tricks for converting your site to Astro.

**Ready to convert your site to Astro?** See one of our guides for migration tips.

## Migration Guides

[Section titled “Migration Guides”](#migration-guides)

- ![](/logos/create-react-app.svg)

  ### [Create React App](/en/guides/migrate-to-astro/from-create-react-app/)

- ![](/logos/docusaurus.svg)

  ### [Docusaurus](/en/guides/migrate-to-astro/from-docusaurus/)

- ![](/logos/eleventy.svg)

  ### [Eleventy](/en/guides/migrate-to-astro/from-eleventy/)

- ![](/logos/gatsby.svg)

  ### [Gatsby](/en/guides/migrate-to-astro/from-gatsby/)

- ![](/logos/gitbook.svg)

  ### [GitBook](/en/guides/migrate-to-astro/from-gitbook/)

- ![](/logos/gridsome.svg)

  ### [Gridsome](/en/guides/migrate-to-astro/from-gridsome/)

- ![](/logos/hugo.svg)

  ### [Hugo](/en/guides/migrate-to-astro/from-hugo/)

- ![](/logos/jekyll.png)

  ### [Jekyll](/en/guides/migrate-to-astro/from-jekyll/)

- ![](/logos/nextjs.svg)

  ### [Next.js](/en/guides/migrate-to-astro/from-nextjs/)

- ![](/logos/nuxtjs.svg)

  ### [NuxtJS](/en/guides/migrate-to-astro/from-nuxtjs/)

- ![](/logos/pelican.svg)

  ### [Pelican](/en/guides/migrate-to-astro/from-pelican/)

- ![](/logos/sveltekit.svg)

  ### [SvelteKit](/en/guides/migrate-to-astro/from-sveltekit/)

- ![](/logos/vuepress.png)

  ### [VuePress](/en/guides/migrate-to-astro/from-vuepress/)

- ![](/logos/wordpress.svg)

  ### [WordPress](/en/guides/migrate-to-astro/from-wordpress/)

Note that many of these pages are **stubs**: they’re collections of resources waiting for your contribution!

## Why migrate your site to Astro?

[Section titled “Why migrate your site to Astro?”](#why-migrate-your-site-to-astro)

Astro provides many benefits: performance, simplicity, and many of the features you want built right into the framework. When you do need to extend your site, Astro provides several [official and 3rd-party community integrations](https://astro.build/integrations).

Migrating may be less work than you think!

Depending on your existing project, you may be able to use your existing:

- [UI framework components](/en/guides/framework-components/) directly in Astro.

- [CSS stylesheets or libraries](/en/guides/styling/) including Tailwind.

- [Markdown/MDX files](/en/guides/markdown-content/), configured using your existing [remark and rehype plugins](/en/guides/markdown-content/#markdown-plugins).

- [Content from a CMS](/en/guides/cms/) through an integration or API.

## Which projects can I convert to Astro?

[Section titled “Which projects can I convert to Astro?”](#which-projects-can-i-convert-to-astro)

[Many existing sites can be built with Astro](/en/concepts/why-astro/). Astro is ideally suited for your existing content-based sites like blogs, landing pages, marketing sites and portfolios. Astro integrates with several popular headless CMSes, and allows you to connect eCommerce shop carts.

Astro allows you have a fully statically-generated website, a dynamic app with routes rendered on demand, or a combination of both with [complete control over your project rendering](/en/guides/on-demand-rendering/), making it a great replacement for SSGs or for sites that need to fetch some page data on the fly.

## How will my project design change?

[Section titled “How will my project design change?”](#how-will-my-project-design-change)

Depending on your existing project, you may need to think differently about:

- Designing in [Astro Islands](/en/concepts/islands/#what-is-an-island) to avoid sending unnecessary JavaScript to the browser.

- Providing client-side interactivity with [client-side `<script>` tags](/en/guides/client-side-scripts/) or [UI framework components](/en/guides/framework-components/).

- Managing [shared state](/en/recipes/sharing-state-islands/) with Nano Stores or local storage instead of app-wide hooks or wrappers.
