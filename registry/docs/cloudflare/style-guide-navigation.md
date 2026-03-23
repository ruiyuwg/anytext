# Navigation

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/style-guide/documentation-content-strategy/content-types/navigation.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Navigation

## Purpose

The purpose of a navigation page is to direct users deeper into the doc set and act as a sub-landing page for a specific area of the docs.

## content\_type

```

pcx_content_type: navigation


```

For more details, refer to [pcx\_content\_type](https://developers.cloudflare.com/style-guide/frontmatter/custom-properties/#pcx%5Fcontent%5Ftype).

## Components

[DirectoryListing](https://developers.cloudflare.com/style-guide/components/directory-listing/):

Use `<DirectoryListing />` to display the directory of a specific folder, which appears as a list of links.

## Template

```

---

weight: xx

pcx_content_type: navigation

---


import { DirectoryListing } from "~/components";


# Name of section


<DirectoryListing />


```

## Examples

[Logs: Enable destinations](https://developers.cloudflare.com/logs/logpush/logpush-job/enable-destinations/)

[Cloudflare Tunnel: Get Started](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/get-started/)

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/style-guide/","name":"Style Guide"}},{"@type":"ListItem","position":3,"item":{"@id":"/style-guide/documentation-content-strategy/","name":"Product docs content strategy"}},{"@type":"ListItem","position":4,"item":{"@id":"/style-guide/documentation-content-strategy/content-types/","name":"Content types"}},{"@type":"ListItem","position":5,"item":{"@id":"/style-guide/documentation-content-strategy/content-types/navigation/","name":"Navigation"}}]}
```
