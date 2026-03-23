# Information architecture

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/style-guide/documentation-content-strategy/information-architecture.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Information architecture

The information architecture (IA) of the Cloudflare developer documentation follows a consistent pattern. Product documentation always includes an [Overview](https://developers.cloudflare.com/style-guide/documentation-content-strategy/content-types/overview/) and [Get started](https://developers.cloudflare.com/style-guide/documentation-content-strategy/content-types/get-started/) page. Including other content types depends on the product, how it is used, and what content users need to be successful.

## Developer Platform information architecture

At launch, Cloudflare Developer Platform products are recommended to include the following high-level sections. The following is a recommended guideline based on standard user journey flow (Learn, Get started, Configure, Test, Deploy, Asses, Maintain, etc.) and is intended to serve as a helpful reference to the documentation writer and collaborators. Depending on the product and as products mature, the IA may grow out of this structure or differ from this structure based on what you can do with the product. For an example of a more mature product that differs from this IA, refer to the [Cloudflare Stream documentation](https://developers.cloudflare.com/stream/).

- [Overview](https://developers.cloudflare.com/style-guide/documentation-content-strategy/content-types/overview/)
- [Get started](https://developers.cloudflare.com/style-guide/documentation-content-strategy/content-types/get-started/)
- [Configuration](https://developers.cloudflare.com/style-guide/documentation-content-strategy/content-types/configuration/) - Steps that come after getting started, including features (like Cron Triggers and Smart Placement for Workers) or the delta between getting started and your desired state. As a product matures, content in **Configuration** might expand into its own top-level sections.
- Observability - Information about testing, metrics, analytics, local development, etc. Alternative title: **Testing & Observability**.
- [Reference](https://developers.cloudflare.com/style-guide/documentation-content-strategy/content-types/reference/)
- [Concepts](https://developers.cloudflare.com/style-guide/documentation-content-strategy/content-types/concept/)
- Platform - Section unique to Developer Platform products that includes Pricing, Limits, Storage options, Changelog, Betas, and Known issues pages.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/style-guide/","name":"Style Guide"}},{"@type":"ListItem","position":3,"item":{"@id":"/style-guide/documentation-content-strategy/","name":"Product docs content strategy"}},{"@type":"ListItem","position":4,"item":{"@id":"/style-guide/documentation-content-strategy/information-architecture/","name":"Information architecture"}}]}
```
