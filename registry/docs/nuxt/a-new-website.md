# A New Website

Nuxt.com is the main entry point when you want to learn Nuxt. With **more than 300k visitors every month**, it was time to give it a new look and feel.

## New Design

We are back to the original colors of Nuxt, with a navy background (`#020420`) and its signature shiny green (`#00DC82`).

:nuxt-img{.rounded-lg.border.border-gray-700 alt="Nuxt Website Screenshot" height="497" src="https://nuxt.com/assets/blog/website/nuxt-website.png" width="832"}

::read-more{icon="i-lucide-palette" to="https://nuxt.com/design-kit"}
Discover the **Nuxt Design Kit** as well as our **Logo History**.
::

We wanted to achieve a consistent design across all our official documentations:

::div{.grid.sm:grid-cols-2.gap-4}
:::nuxt-link
------------

class: hover:border-transparent
target: \_blank
to: https://image.nuxt.com
--------------------------

:nuxt-img{.m-0.border.rounded-md.border-gray-700 alt="Nuxt Image" height="255" src="https://nuxt.com/assets/blog/website/nuxt-image.png" width="408"}
:::

## :::nuxt-link

class: hover:border-transparent
target: \_blank
to: https://content.nuxt.com
----------------------------

:nuxt-img{.m-0.border.rounded-md.border-gray-700 alt="Nuxt Content" height="255" src="https://nuxt.com/assets/blog/website/nuxt-content.png" width="408"}
:::

## :::nuxt-link

class: hover:border-transparent
target: \_blank
to: https://devtools.nuxt.com
-----------------------------

:nuxt-img{.m-0.border.rounded-md.border-gray-700 alt="Nuxt DevTools" height="255" src="https://nuxt.com/assets/blog/website/nuxt-devtools.png" width="408"}
:::

:::nuxt-link{.hover:border-transparent target="\_blank" to="https://ui.nuxt.com"}
:nuxt-img{.m-0.border.rounded-md.border-gray-700 alt="Nuxt UI" height="255" src="https://nuxt.com/assets/blog/website/nuxt-ui.png" width="408"}
:::
::

We really love this new design and hope you do too. \**This is only the first step toward many improvements coming to the website.*\*

## Improved Navigation

From now on, you can easily jump between the five main documentation categories:

:video{.rounded.dark:border.dark:border-gray-700 controls poster="https://res.cloudinary.com/nuxt/video/upload/v1697548111/nuxt3/nuxt-website-docs-nav.jpg"}

On the right side, you can see the table of contents as well as community shortcuts: Edit this page, Chat on Discord, etc.

:video{.rounded.dark:border.dark:border-gray-700 controls poster="https://res.cloudinary.com/nuxt/video/upload/v1697549697/nuxt3/nuxt-website-docs-aside.jpg"}

## Source Code Buttons

When looking at Nuxt built-in [components](https://nuxt.com/docs/api/components), [composables](https://nuxt.com/docs/api/composables), [utils](https://nuxt.com/docs/api/utils), [commands](https://nuxt.com/docs/api/commands) and [kit utilities](https://nuxt.com/docs/api/kit), you can now jump to the source code by clicking on the :u-button\[Source]{color="gray" icon="i-simple-icons-github" size="xs"} button.

:nuxt-img{.border.rounded.border-gray-700 alt="Nuxt Source Code Button" height="343" src="https://nuxt.com/assets/blog/website/nuxt-website-source-button.png" width="818"}

::read-more{to="https://nuxt.com/docs/api/components/nuxt-link"}
Checkout an example on `<NuxtLink>` documentation page.
::

## Improved Search Feature

You may notice a new modal when hitting :kbd{value="meta"} :kbd{value="K"}. We leverage the Nuxt UI [`<CommandPalette>`](https://ui.nuxt.com/components/command-palette){rel=""nofollow""} components combined with Nuxt Content data (search & navigation) to provide a better search experience.

With the command palette, you can:

- Jump to a page
- Search in the documentation
- Search a module
- Switch the color mode

We plan to add more commands soon.

:video{.rounded.dark:border.dark:border-gray-700 controls poster="https://res.cloudinary.com/nuxt/video/upload/v1697550571/nuxt3/nuxt-website-search.jpg"}

## Migration to Nuxt UI

The new website is powered by [Nuxt UI](https://ui.nuxt.com){rel=""nofollow""}, our UI library tailored made for Nuxt and built on top of [Tailwind CSS](https://tailwindcss.com){rel=""nofollow""} & [Headless UI](https://headlessui.com/){rel=""nofollow""}.

The website also uses [Nuxt UI Pro](https://ui.nuxt.com/pro){rel=""nofollow""}, a set of premium components built on top of Nuxt UI to create beautiful & responsive Nuxt applications in minutes.

It includes components such as `<UHeader>`, `<UFooter>`, `<ULandingHero>`, `<ULandingCard>` and more.

::note
We plan to launch the full documentation of Nuxt UI Pro at the end of October. If you cannot wait and want early access, you can already [purchase a license](https://ui.nuxt.com/pro/purchase){rel=""nofollow""} now and get access to our private repository on GitHub.
::

This [migration](https://github.com/nuxt/nuxt.com/pull/1365){rel=""nofollow""} was a great opportunity to improve Nuxt UI & UI Pro and fix some bugs, as well as a difference of \[+9,004]{.text-primary} / \[-23,113]{.text-error} lines of code changed.

::read-more

Read more about **Nuxt UI**.
::

## Open Graph Images

We are big fans of having a custom image when we share a link on social media. That's why we have added OG images on all our documentation pages.

Example of the [Installation page](https://nuxt.com/docs/getting-started/installation):

![Nuxt OG Image](https://nuxt.com/__og-image__/image/docs/getting-started/introduction/og.png){.border.rounded.border-gray-700 height="630" width="1200"}

::read-more

Discover the **Nuxt OG Image** module.
::

## Available on GitHub

We are proud to announce that the website is **now open source** and available on GitHub.

::read-more

Check out `nuxt/nuxt.com` on GitHub.
::

## What's next?

This new website is the beginning of upcoming changes we are planing, some of them are:

- Team & Contributors pages
- Integrations page to showcase all the possibilities with Nuxt: Hosting, CMS, Database, etc.
- Templates page (currently [nuxt.new](https://nuxt.new){rel=""nofollow""}) to list official and community starters
- And more...

**We are looking forward to your feedback on [Twitter](https://x.com/nuxt_js){rel=""nofollow""}, [Discord](https://discord.com/invite/nuxt){rel=""nofollow""} or [GitHub](https://github.com/nuxt/nuxt.com){rel=""nofollow""}**.

Thank you for reading this blog post, and happy Nuxting 🤟
