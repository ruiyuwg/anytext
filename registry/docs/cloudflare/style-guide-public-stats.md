# Public stats

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/style-guide/components/public-stats.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Public stats

The `PublicStats` component is used `16` times on `8` pages.

See all examples of pages that use PublicStats

Used **16** times.

**Pages**

- [/learning-paths/data-center-protection/concepts/benefits-magic-transit/](https://developers.cloudflare.com/learning-paths/data-center-protection/concepts/benefits-magic-transit/)-[Source](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/docs/learning-paths/data-center-protection/concepts/benefits-magic-transit.mdx)
- [/reference-architecture/architectures/cdn/](https://developers.cloudflare.com/reference-architecture/architectures/cdn/)-[Source](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/docs/reference-architecture/architectures/cdn.mdx)
- [/reference-architecture/architectures/load-balancing/](https://developers.cloudflare.com/reference-architecture/architectures/load-balancing/)-[Source](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/docs/reference-architecture/architectures/load-balancing.mdx)
- [/reference-architecture/architectures/sase/](https://developers.cloudflare.com/reference-architecture/architectures/sase/)-[Source](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/docs/reference-architecture/architectures/sase.mdx)
- [/reference-architecture/architectures/security/](https://developers.cloudflare.com/reference-architecture/architectures/security/)-[Source](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/docs/reference-architecture/architectures/security.mdx)
- [/reference-architecture/design-guides/securing-guest-wireless-networks/](https://developers.cloudflare.com/reference-architecture/design-guides/securing-guest-wireless-networks/)-[Source](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/docs/reference-architecture/design-guides/securing-guest-wireless-networks.mdx)
- [/reference-architecture/diagrams/sase/deploying-self-hosted-voip-services-for-hybrid-users/](https://developers.cloudflare.com/reference-architecture/diagrams/sase/deploying-self-hosted-voip-services-for-hybrid-users/)-[Source](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/docs/reference-architecture/diagrams/sase/deploying-self-hosted-VoIP-services-for-hybrid-users.mdx)
- [/style-guide/documentation-content-strategy/component-attributes/introduction/](https://developers.cloudflare.com/style-guide/documentation-content-strategy/component-attributes/introduction/)-[Source](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/docs/style-guide/documentation-content-strategy/component-attributes/introduction.mdx)

**Partials**

The `PublicStats` component allows you to reference specific values about Cloudflare's network without maintaining those values in multiple files.

Refer to the examples below for more information.

Cloudflare has data centers in over 330 cities.

Our network has over 405 Tbps network capacity.

Cloudflare also has over 13,000 network peers.

```

import { PublicStats } from "~/components";


Cloudflare has data centers in <PublicStats id="data_center_cities" />.


Our network has <PublicStats id="total_bandwidth" />.


Cloudflare also has <PublicStats id="network_peers" />.


```

Note

If you need more stats or to update these stats, submit a pull request to update [PublicStats.astro ↗](https://github.com/cloudflare/cloudflare-docs/blob/production/src/components/PublicStats.astro)

## Associated content types

The `PublicStats` component is commonly used on the following type of pages:

- [Overview](https://developers.cloudflare.com/style-guide/documentation-content-strategy/content-types/overview/)
- [Reference Architecture](https://developers.cloudflare.com/style-guide/documentation-content-strategy/content-types/reference-architecture/)
- [Reference Architecture Diagrams](https://developers.cloudflare.com/style-guide/documentation-content-strategy/content-types/reference-architecture-diagram/)

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/style-guide/","name":"Style Guide"}},{"@type":"ListItem","position":3,"item":{"@id":"/style-guide/components/","name":"Components"}},{"@type":"ListItem","position":4,"item":{"@id":"/style-guide/components/public-stats/","name":"Public stats"}}]}
```
