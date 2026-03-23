# Actions

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/load-balancing/additional-options/load-balancing-rules/actions.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Actions

Add **actions** to customize how your load balancer responds to certain HTTP requests.

Each load balancing rule includes one or more actions.

## Supported Actions

This table lists the actions available for Load Balancing rules. For a walkthrough, refer to [Create Load Balancing rules](https://developers.cloudflare.com/load-balancing/additional-options/load-balancing-rules/create-rules/).

| Action           | Options             | Description                                                                                                                                                                                             |
| ---------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| *Fixed response* | *N/A*               | Respond to the request with an HTTP status code and an optional message.                                                                                                                                |
| *Override*       | *Session affinity*  | Set the [session affinity](https://developers.cloudflare.com/load-balancing/understand-basics/session-affinity/) for the request. You can customize cookie behavior and session time-to-live (TTL).     |
| *Override*       | *Load balancer TTL* | Customize the load balancer session time-to-live (TTL).                                                                                                                                                 |
| *Override*       | *Steering policy*   | Update the [steering policy](https://developers.cloudflare.com/load-balancing/understand-basics/traffic-steering/steering-policies/) associated with your load balancer.                                |
| *Override*       | *Fallback pool*     | Update the [fallback pools](https://developers.cloudflare.com/load-balancing/understand-basics/traffic-steering/steering-policies/standard-options/#off---failover) associated with your load balancer. |
| *Override*       | *Pools*             | Update the [pools](https://developers.cloudflare.com/load-balancing/pools/) associated with your load balancer.                                                                                         |
| *Override*       | *Region pools*      | Update the [region pools](https://developers.cloudflare.com/load-balancing/understand-basics/traffic-steering/steering-policies/geo-steering/) associated with your load balancer.                      |
| *Override*       | *Terminates*        | Stop processing Load Balancing rules and apply the current load balancing logic to the request.                                                                                                         |

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/load-balancing/","name":"Load Balancing"}},{"@type":"ListItem","position":3,"item":{"@id":"/load-balancing/additional-options/","name":"Additional configuration"}},{"@type":"ListItem","position":4,"item":{"@id":"/load-balancing/additional-options/load-balancing-rules/","name":"Custom load balancing rules"}},{"@type":"ListItem","position":5,"item":{"@id":"/load-balancing/additional-options/load-balancing-rules/actions/","name":"Actions"}}]}
```
