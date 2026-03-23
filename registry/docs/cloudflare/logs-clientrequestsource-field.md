# ClientRequestSource field

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/logs/reference/clientrequestsource.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# ClientRequestSource field

The possible values for the `ClientRequestSource` field are the following:

| Value | Request source     | Description                                                                                                                             |
| ----- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| 0     | unknown            | Should never happen.                                                                                                                    |
| 1     | eyeball            | A request from an end user. If you want to count requests made the Cloudflare Edge, the query should filter on requestSource=eyeball.   |
| 2     | purge              | A request made by Cloudflare's purge system.                                                                                            |
| 3     | alwaysOnline       | A request made by Cloudflare's Always Online crawler.                                                                                   |
| 4     | healthcheck        | A request made by Cloudflare's Health Check system.                                                                                     |
| 5     | edgeWorkerFetch    | A fetch request made from an edge Worker.                                                                                               |
| 6     | edgeWorkerCacheAPI | A cache API call made from an edge Worker.                                                                                              |
| 7     | edgeWorkerKV       | A KV call made from an edge Worker.                                                                                                     |
| 8     | imageResizing      | Requests made by Cloudflare's Image Resizing product.                                                                                   |
| 9     | orangeToOrange     | A request that comes from another orange clouded zone.                                                                                  |
| 10    | sslDetector        | A request made by Cloudflare's [SSL Detector system ↗](https://blog.cloudflare.com/ssl-tls-recommender/).                               |
| 11    | earlyHintsCache    | An [Early Hint request ↗](https://blog.cloudflare.com/early-hints/).                                                                    |
| 12    | inBrowserChallenge | An end user request caused by a Cloudflare security product (Challenges, JavaScript Detections). These requests never reach the origin. |

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/logs/","name":"Logs"}},{"@type":"ListItem","position":3,"item":{"@id":"/logs/reference/","name":"Reference"}},{"@type":"ListItem","position":4,"item":{"@id":"/logs/reference/clientrequestsource/","name":"ClientRequestSource field"}}]}
```
