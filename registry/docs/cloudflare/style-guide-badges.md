# Badges

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/style-guide/components/badges.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Badges

Badges are a built-in component provided by [Starlight ↗](https://starlight.astro.build/components/badges/). Use them to indicate a product is in beta, for example.

## Component

To adopt this styling in a React component, apply the `sl-badge` class to a `span` element.

Note Success Tip Caution Danger Default

```

import { Badge } from "~/components";


<Badge text="Note" variant="note" />

<Badge text="Success" variant="success" />

<Badge text="Tip" variant="tip" />

<Badge text="Caution" variant="caution" />

<Badge text="Danger" variant="danger" />

<Badge text="Default" />


```

## Sidebar

Badges can be added to the sidebar via page frontmatter.

```

---

title: Hello World

sidebar:

  badge:

    variant: tip

    text: New

---


```

If you want to add the Beta badge to a product, omit the `variant:` entry:

```

---

title: Hello World

sidebar:

  badge:

    text: Beta

---


```

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/style-guide/","name":"Style Guide"}},{"@type":"ListItem","position":3,"item":{"@id":"/style-guide/components/","name":"Components"}},{"@type":"ListItem","position":4,"item":{"@id":"/style-guide/components/badges/","name":"Badges"}}]}
```
