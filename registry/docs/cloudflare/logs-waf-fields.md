# WAF fields

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/logs/reference/waf-fields.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# WAF fields

The Web Application Firewall (WAF) contains rules managed by Cloudflare to block requests that contain malicious content.

## WAF Action

| Value | Action          | Description                                  |
| ----- | --------------- | -------------------------------------------- |
| 0     | Unknown         | Take no other action.                        |
| 1     | Allow           | Bypass all subsequent WAF rules.             |
| 2     | Drop            | Block with an HTTP 403 response.             |
| 3     | Challenge Allow | Issue a Managed Challenge.                   |
| 4     | Challenge Drop  | Unused.                                      |
| 5     | Log             | Take no action other than logging the event. |

## Deprecated fields for internal Cloudflare use

The values of these fields are subject to change by Cloudflare at any time and are irrelevant for customer data analysis:

- WAFFlags
- WAFMatchedVar

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/logs/","name":"Logs"}},{"@type":"ListItem","position":3,"item":{"@id":"/logs/reference/","name":"Reference"}},{"@type":"ListItem","position":4,"item":{"@id":"/logs/reference/waf-fields/","name":"WAF fields"}}]}
```
