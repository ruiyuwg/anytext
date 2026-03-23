# Icons

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/style-guide/components/icons.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Icons

There are two icon components which pull from two different icon sets.

## astro-icon

The [astro-icon ↗](https://www.astroicon.dev/) package is available to use as a standalone component.

Primarily, this is used for Cloudflare product icons which are stored in `/src/icons/*.svg`.

```

import { AstroIcon } from "~/components";


<AstroIcon name="workers" class="text-5xl text-orange-400" />


```

## Starlight

The Starlight icon set is available to use in `Tab`, `Card` and other Starlight components.

```

import { StarlightIcon } from "~/components";


<StarlightIcon

  name="seti:shell"

  color="var(--sl-color-text-accent)"

  size="3rem"

/>


```

## Icon library

Optionally, you can choose a corresponding icon from Starlight’s [Icons ↗](https://starlight.astro.build/reference/icons/#all-icons) for cards or tabs.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/style-guide/","name":"Style Guide"}},{"@type":"ListItem","position":3,"item":{"@id":"/style-guide/components/","name":"Components"}},{"@type":"ListItem","position":4,"item":{"@id":"/style-guide/components/icons/","name":"Icons"}}]}
```
