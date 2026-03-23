# Anchor heading

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/style-guide/components/anchor-heading.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Anchor heading

The `AnchorHeading` component is used `29` times on `6` pages.

See all examples of pages that use AnchorHeading

Used **29** times.

**Pages**

**Partials**

- [src/content/partials/durable-objects/api-async-kv-legacy.mdx](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/partials/durable-objects/api-async-kv-legacy.mdx)
- [src/content/partials/networking-services/analytics/overview.mdx](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/partials/networking-services/analytics/overview.mdx)
- [src/content/partials/networking-services/reference/mtu-mss.mdx](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/partials/networking-services/reference/mtu-mss.mdx)
- [src/content/partials/networking-services/reference/traffic-steering.mdx](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/partials/networking-services/reference/traffic-steering.mdx)
- [src/content/partials/workers/wrangler-commands/containers.mdx](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/partials/workers/wrangler-commands/containers.mdx)
- [src/content/partials/workers/wrangler-commands/tunnel.mdx](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/partials/workers/wrangler-commands/tunnel.mdx)

The `AnchorHeading` component defines headings. Specifically, `AnchorHeading` performs the following:

1. Generates URL fragments corresponding to headings.
2. Formats URL fragments into compatible syntax. For example, a `&` is replaced with a `-`.
3. Creates a button to copy the URL at each fragment.
4. Allows heading fragments to be defined separately from the text of the heading itself.

## How to use AnchorHeading

```

import { AnchorHeading } from "~/components";


<AnchorHeading title="How to use AnchorHeading" slug="use-anchorheading" depth={2} />


```

Markdown files (including partials) have this behavior by default, applied via rehype plugins. Therefore, the `AnchorHeading` component is usually only required when writing headings yourself inside components, or when working on non-markdown files.

To override the ID given to a heading within Markdown, add an MDX comment at the end of the line:

## foo

```

## foo {/*bar*/}

{/* HTML: <h2 id="bar">foo</h2> */}


```

Note

The `AnchorHeading` component emulates the behavior of the [rehype-slug ↗](https://github.com/rehypejs/rehype-slug) and the [rehype-autolink-headings ↗](https://github.com/rehypejs/rehype-autolink-headings). It adds an `id` based on the output of [github-slugger ↗](https://github.com/Flet/github-slugger/) to the heading, as well as adding a button to copy a link to that particular heading.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/style-guide/","name":"Style Guide"}},{"@type":"ListItem","position":3,"item":{"@id":"/style-guide/components/","name":"Components"}},{"@type":"ListItem","position":4,"item":{"@id":"/style-guide/components/anchor-heading/","name":"Anchor heading"}}]}
```
