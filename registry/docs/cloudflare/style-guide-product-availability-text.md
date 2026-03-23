# Product availability text

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/style-guide/components/product-availability-text.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Product availability text

The `ProductAvailabilityText` component is used `2` times on `2` pages.

See all examples of pages that use ProductAvailabilityText

Used **2** times.

**Pages**

- [/rules/cloud-connector/](https://developers.cloudflare.com/rules/cloud-connector/)-[Source](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/docs/rules/cloud-connector/index.mdx)
- [/rules/trace-request/](https://developers.cloudflare.com/rules/trace-request/)-[Source](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/docs/rules/trace-request/index.mdx)

**Partials**

The `ProductAvailabilityText` component dynamically renders a product's lifecycle status (such as "Beta" or "Alpha") inline with the product name. It renders nothing for generally available (GA) products, so it is safe to leave in place as a product matures.

The `product` prop must match a file in `src/content/directory/`.

Cloud Connector (Beta) allows you to route matching traffic to a public cloud provider.

```

import { ProductAvailabilityText } from "~/components";


Cloud Connector <ProductAvailabilityText product="cloud-connector" /> allows you to route matching traffic to a public cloud provider.


```

## Props

| Prop        | Type   | Required | Default | Description                                                                                          |
| ----------- | ------ | -------- | ------- | ---------------------------------------------------------------------------------------------------- |
| product     | string | Yes      | —       | Product slug matching a file in src/content/directory/.                                              |
| parentheses | string | No       | "true"  | When "true", wraps the output in parentheses (for example, (Beta)). Set to "false" for the raw text. |

## Behavior

- If the product availability is **GA**, the component renders nothing.
- If the product or its availability data is not found, the component renders nothing (and logs a warning at build time).

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/style-guide/","name":"Style Guide"}},{"@type":"ListItem","position":3,"item":{"@id":"/style-guide/components/","name":"Components"}},{"@type":"ListItem","position":4,"item":{"@id":"/style-guide/components/product-availability-text/","name":"Product availability text"}}]}
```
