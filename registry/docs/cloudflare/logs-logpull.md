# Logpull

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/logs/logpull/index.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Logpull

Cloudflare Logpull is a REST API for consuming request logs over HTTP. These logs contain data related to the connecting client, the request path through the Cloudflare network, and the response from the origin web server. This data is useful for enriching existing logs on an origin server. Logpull is available to customers on the Enterprise plan.

Warning

Logpull is considered a legacy feature and we recommend using [Logpush](https://developers.cloudflare.com/logs/logpush/) or [Logs Engine](https://developers.cloudflare.com/logs/r2-log-retrieval/) instead for better performance and functionality.

Review the following content to learn more about Logpull.

- [ Understanding the basics ](https://developers.cloudflare.com/logs/logpull/understanding-the-basics/)
- [ Enabling log retention ](https://developers.cloudflare.com/logs/logpull/enabling-log-retention/)
- [ Requesting logs ](https://developers.cloudflare.com/logs/logpull/requesting-logs/)
- [ Additional details ](https://developers.cloudflare.com/logs/logpull/additional-details/)

## Availability

| Free         | Pro | Business | Enterprise |     |
| ------------ | --- | -------- | ---------- | --- |
| Availability | No  | No       | No         | Yes |

### Limitation

Logpull is unavailable when the Customer Metadata Boundary (CMB) is set outside the US region. Specifically, it does not work when CMB is restricted to the EU-only setting. For more details, refer to the [Cloudflare Data Localization](https://developers.cloudflare.com/data-localization/) documentation.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/logs/","name":"Logs"}},{"@type":"ListItem","position":3,"item":{"@id":"/logs/logpull/","name":"Logpull"}}]}
```
