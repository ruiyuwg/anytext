# Certificate pinning

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/ssl/reference/certificate-pinning.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Certificate pinning

Cloudflare does not support HTTP public key pinning (HPKP)[1](#user-content-fn-1) for Universal, Advanced, or Custom Hostname certificates.

This is because Cloudflare regularly changes the edge certificates provisioned for your domain and - if you had HPKP enabled - your domain would go offline. Additionally, [industry experts ↗](https://scotthelme.co.uk/im-giving-up-on-hpkp/) discourage using HPKP.

For a better solution to the problem that HPKP is trying to solve - preventing certificate misissuance - use [Certificate Transparency Monitoring](https://developers.cloudflare.com/ssl/edge-certificates/additional-options/certificate-transparency-monitoring/). Also consider Cloudflare's blog post on [modern alternatives to certificate pinning practices ↗](https://blog.cloudflare.com/why-certificate-pinning-is-outdated/).

To avoid downtime when pinning your certificates, use [custom certificates](https://developers.cloudflare.com/ssl/edge-certificates/custom-certificates/) and select [**user-defined** bundle method](https://developers.cloudflare.com/ssl/edge-certificates/custom-certificates/bundling-methodologies/#user-defined). This way you can control which CA, intermediate, and certificate will be used after renewal.

## Footnotes

1. Key pinning allows a host to instruct a browser to only accept certain public keys when communicating with it for a given period of time. [↩](#user-content-fnref-1)

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/ssl/","name":"SSL/TLS"}},{"@type":"ListItem","position":3,"item":{"@id":"/ssl/reference/","name":"Reference"}},{"@type":"ListItem","position":4,"item":{"@id":"/ssl/reference/certificate-pinning/","name":"Certificate pinning"}}]}
```
