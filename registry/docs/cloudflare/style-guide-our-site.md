# Our site

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/style-guide/how-we-docs/our-site.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Our site

We use a variety of tools to make our docs site work. You could use these tools to build up your own docs site and - in most cases - do so for free or starting on a free tier.

## Content management system

Our content lives in a public GitHub repository, [cloudflare-docs ↗](https://github.com/cloudflare/cloudflare-docs).

GitHub offers a generous [free tier ↗](https://github.com/pricing).

## Search

We use [Algolia ↗](https://www.algolia.com/) as our search provider.

If you have open-source docs, you can be part of the free [DocSearch program ↗](https://docsearch.algolia.com/).

## Site framework

We use [Starlight ↗](https://starlight.astro.build/) for our docs, which is a free, custom documentation theme supported by [Astro ↗](https://astro.build/).

Astro's [component overrides ↗](https://starlight.astro.build/guides/overriding-components/) and [plugins ↗](https://starlight.astro.build/resources/plugins/) system were a big part of us [choosing this framework ↗](https://blog.cloudflare.com/open-source-all-the-way-down-upgrading-our-developer-documentation/) and have exponentially increased our [site's capabilities](https://developers.cloudflare.com/style-guide/components/) (without much extra work).

## Builds

We use [GitHub Actions ↗](https://github.com/features/actions) to build our site, which is then [hosted](#hosting) on Cloudflare.

We are moving to [Workers CI/CD](https://developers.cloudflare.com/workers/ci-cd/), which currently runs in the background.

Both of these options include a free tier.

## Hosting

We host our content using [Cloudflare Workers](https://developers.cloudflare.com/workers/static-assets/), specifically using their built in values for [Astro sites](https://developers.cloudflare.com/workers/framework-guides/web-apps/astro/)

Workers offers a generous [free tier](https://developers.cloudflare.com/workers/platform/pricing/).

## Analytics

We send analytics to multiple destinations using [Cloudflare Zaraz](https://developers.cloudflare.com/zaraz/), which has a generous [free tier](https://developers.cloudflare.com/zaraz/pricing-info/).

Note

If you want to opt out of analytics tracking, use the icon at the bottom of your screen.

![Opt out of analytics with the icon at the bottom of your screen](https://developers.cloudflare.com/_astro/privacy-opt-out.Cthj3AFl_hVM54.webp)

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/style-guide/","name":"Style Guide"}},{"@type":"ListItem","position":3,"item":{"@id":"/style-guide/how-we-docs/","name":"How we docs"}},{"@type":"ListItem","position":4,"item":{"@id":"/style-guide/how-we-docs/our-site/","name":"Our site"}}]}
```
