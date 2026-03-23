# RSSButton

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/style-guide/components/rss-button.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# RSSButton

## Example

[ Subscribe to RSS ](https://developers.cloudflare.com/changelog/rss/workers.xml)\
[ Custom Feed ](https://developers.cloudflare.com/custom/feed.xml)

```

import { RSSButton } from "~/components";


<RSSButton changelog="Workers" />

<br />

<RSSButton href="/custom/feed.xml" text="Custom Feed" icon="external" />


```

## Props

### `text`

**type:** `string`

**default:** `"Subscribe to RSS"`

The text to display in the button.

### `icon`

**type:** [StarlightIcon ↗](https://starlight.astro.build/reference/icons/#all-icons)

**default:** `"rss"`

The icon to display next to the text. Uses Starlight's icon component.

### `changelog` or `href`

You must provide either `changelog` or `href`, but not both:

#### `changelog`

**type:** `string`

The name of the changelog to link to. This will be transformed into a lowercase, hyphen-separated string and used to construct the RSS feed URL in the format `/changelog/rss/{changelog}.xml`.

#### `href`

**type:** `string`

A custom URL to link to. Use this when you need to link to an RSS feed that doesn't follow the standard changelog URL pattern.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/style-guide/","name":"Style Guide"}},{"@type":"ListItem","position":3,"item":{"@id":"/style-guide/components/","name":"Components"}},{"@type":"ListItem","position":4,"item":{"@id":"/style-guide/components/rss-button/","name":"RSSButton"}}]}
```
