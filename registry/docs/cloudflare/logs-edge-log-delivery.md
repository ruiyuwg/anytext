# Edge Log Delivery

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/logs/logpush/logpush-job/edge-log-delivery.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Edge Log Delivery

Edge Log Delivery allows customers to send logs directly from Cloudflare’s edge to their destination of choice. You can configure the maximum interval for your log batches between 30 seconds and five minutes. However, you cannot specify a minimum interval for log batches, meaning that log files may be sent in shorter intervals than the maximum specified. Compared to Logpush, Edge Log Delivery sends logs with lower latency, more frequently, and in smaller batches.

Edge Log Delivery is only available for HTTP request logs. Refer to the [API configuration](https://developers.cloudflare.com/logs/logpush/logpush-job/api-configuration/#kind) page for steps on how to configure a job to use Edge Log Delivery.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/logs/","name":"Logs"}},{"@type":"ListItem","position":3,"item":{"@id":"/logs/logpush/","name":"Logpush"}},{"@type":"ListItem","position":4,"item":{"@id":"/logs/logpush/logpush-job/","name":"Logpush job setup"}},{"@type":"ListItem","position":5,"item":{"@id":"/logs/logpush/logpush-job/edge-log-delivery/","name":"Edge Log Delivery"}}]}
```
