# How to prevent DDoS attacks

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/learning-paths/prevent-ddos-attacks/concepts/ddos-prevention.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# How to prevent DDoS attacks

Since DDoS attacks target your web servers, the way to prevent them is to reduce requests reaching those servers.

flowchart TD;
A\[Malicious device]-->|Request to application|CDN;
CDN -->|Sends remaining requests|Origin;
subgraph CDN
WAF
Cache
end
A --Prevent external connections---x Origin

Requests can come to your origin server in two ways, from your web application and from direct connections to the server itself.

***

## Reduce application requests to the origin

### Caching

A cache stores copies of frequently accessed resources (images, CSS files).

When a resource is cached - either on a user's browser or Content Delivery Network (CDN) server - requests for that resource do not have to go to your origin server. Instead, these resources are served directly by the cache.

flowchart TD;
User-->|Sends Request|Cloudflare;
Cloudflare-->B>Has cached content?];
B-->|Yes - Requested content|User;
B-->|No|Origin;
Origin-->|Requested content|User;

In the context of DDoS attacks, caching reduces the number of requests going to your origin server, which makes it harder for your server to get overwhelmed by traffic.

### Web Application Firewall (WAF)

A Web Application Firewall (WAF) creates a shield between a web app and the Internet. This shield checks incoming web requests and filters undesired traffic to help mitigate many common attacks.

flowchart TD;
User-->|Sends Request|WAF;
WAF-->|Filters Request|Application;
Application-->|Sends Request|OriginServer;
OriginServer-->|Serves Content|Application;
Application-->|Serves Content|User;

## Prevent external connections

Generally, your origin server should only accept requests coming from your web application.

This is a general best practice for security, but especially important in the context of DDoS attacks. Any traffic that bypasses your web application will also bypass any WAF or caching and has a stronger chance of overwhelming your origin.

sequenceDiagram
participant Client
participant DDoS\_Protection\_Service
participant Origin\_Server

Client->>+DDoS\_Protection\_Service: Request
Note right of DDoS\_Protection\_Service: Filtered traffic
DDoS\_Protection\_Service->>+Origin\_Server: Request
Origin\_Server-->>-DDoS\_Protection\_Service: Response
DDoS\_Protection\_Service-->>Client: Response

Client->>+Origin\_Server: Direct connection
Note over Origin\_Server: Potential DDoS Attack
Origin\_Server-->>-Client: Error response

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/learning-paths/","name":"Learning Paths"}},{"@type":"ListItem","position":3,"item":{"@id":"/learning-paths/prevent-ddos-attacks/concepts/","name":"Concepts"}},{"@type":"ListItem","position":4,"item":{"@id":"/learning-paths/prevent-ddos-attacks/concepts/ddos-prevention/","name":"How to prevent DDoS attacks"}}]}
```
