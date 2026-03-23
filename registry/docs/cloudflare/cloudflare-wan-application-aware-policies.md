# Application-aware policies

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/cloudflare-wan/configuration/appliance/network-options/application-based-policies/index.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Application-aware policies

In addition to traffic policies based on network-layer attributes like IP and port ranges, Cloudflare One Appliance (formerly Magic WAN Connector) supports the ability to classify traffic based on well-known applications. Application-aware policies provide easier management and more granularity over traffic flows.

Cloudflare's implementation of application awareness leverages the intelligence of our global network, using the same categorization/classification already shared across security tools like our [Secure Web Gateway](https://developers.cloudflare.com/cloudflare-one/traffic-policies/), so IT and security teams can expect consistent behavior across routing and inspection decisions.

For details, refer to [Applications and app types](https://developers.cloudflare.com/cloudflare-one/traffic-policies/application-app-types/).

Cloudflare One Appliance's ability to classify traffic allows you to define which applications should bypass Cloudflare's security filtering, and go directly to the Internet. You can also give some applications a higher priority, and the Appliance will process them first. This is useful when your network is at capacity, for example.

For details, refer to the following pages:

- [ Breakout traffic ](https://developers.cloudflare.com/cloudflare-wan/configuration/appliance/network-options/application-based-policies/breakout-traffic/)
- [ Prioritized traffic ](https://developers.cloudflare.com/cloudflare-wan/configuration/appliance/network-options/application-based-policies/prioritized-traffic/)

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/cloudflare-wan/","name":"Cloudflare WAN"}},{"@type":"ListItem","position":3,"item":{"@id":"/cloudflare-wan/configuration/","name":"Configuration"}},{"@type":"ListItem","position":4,"item":{"@id":"/cloudflare-wan/configuration/appliance/","name":"Configure with Appliance"}},{"@type":"ListItem","position":5,"item":{"@id":"/cloudflare-wan/configuration/appliance/network-options/","name":"Network options"}},{"@type":"ListItem","position":6,"item":{"@id":"/cloudflare-wan/configuration/appliance/network-options/application-based-policies/","name":"Application-aware policies"}}]}
```
