# Account-level WAF configuration

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/waf/account/index.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Account-level WAF configuration

Note

This feature requires an Enterprise plan.

The account-level Web Application Firewall (WAF) configuration allows you to define a configuration once and apply it to multiple Enterprise zones in your account.

Configure and deploy custom rulesets, rate limiting rulesets, and managed rulesets to multiple Enterprise zones, affecting all incoming traffic or only a subset (for example, all traffic to `/admin/*` URI paths in both `example.com` and `example.net`).

At the account level, WAF rules are grouped into rulesets. You can perform the following operations:

- Create and deploy [custom rulesets](https://developers.cloudflare.com/waf/account/custom-rulesets/)
- Create and deploy [rate limiting rulesets](https://developers.cloudflare.com/waf/account/rate-limiting-rulesets/)
- Deploy [managed rulesets](https://developers.cloudflare.com/waf/account/managed-rulesets/)

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/waf/","name":"WAF"}},{"@type":"ListItem","position":3,"item":{"@id":"/waf/account/","name":"Account-level WAF configuration"}}]}
```
