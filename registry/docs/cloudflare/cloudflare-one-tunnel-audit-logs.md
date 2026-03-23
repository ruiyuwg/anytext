# Tunnel audit logs

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/cloudflare-one/insights/logs/tunnel-audit-logs.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Tunnel audit logs

Audit logs for Tunnel are available in the [account section of the Cloudflare dashboard ↗](https://dash.cloudflare.com/?account=audit-log) which you can find by selecting your name or email in the upper right-hand corner of the dashboard. The following actions are logged:

| Action       | Description                                                                                         |
| ------------ | --------------------------------------------------------------------------------------------------- |
| Registered   | This is logged when Tunnel is started and connects to the Cloudflare edge.                          |
| Unregistered | This is logged when Tunnel is disconnected from the Cloudflare edge.                                |
| CNAME add    | This is logged when Tunnel registers a new DNS (CNAME or AAAA) record for the tunneled application. |

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/cloudflare-one/","name":"Cloudflare One"}},{"@type":"ListItem","position":3,"item":{"@id":"/cloudflare-one/insights/","name":"Insights"}},{"@type":"ListItem","position":4,"item":{"@id":"/cloudflare-one/insights/logs/","name":"Logs"}},{"@type":"ListItem","position":5,"item":{"@id":"/cloudflare-one/insights/logs/tunnel-audit-logs/","name":"Tunnel audit logs"}}]}
```
