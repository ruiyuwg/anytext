# Example diagram

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/dns/cname-flattening/cname-flattening-diagram.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Example diagram

With CNAME flattening, Cloudflare returns an IP address instead of the target hostname that a CNAME record points to. This process supports a few features and delivers better performance and flexibility, as mentioned in the [CNAME flattening concept page](https://developers.cloudflare.com/dns/cname-flattening/).

Consider the diagram below to have an overview of the steps that may be involved in CNAME flattening.

Note

Note that this is a simpler scenario. Cases where CNAME flattening is optional and/or the target hostname is not external to Cloudflare work differently.

## Example use case

- `domain.test` is a zone on Cloudflare and has the following CNAME record:

| Type  | Name        | Content              | TTL  |
| ----- | ----------- | -------------------- | ---- |
| CNAME | domain.test | external-origin.test | 3600 |

- `external-origin.test` is a zone on a different DNS provider and has the following A record:

| Type | Name                 | Content   | TTL  |
| ---- | -------------------- | --------- | ---- |
| A    | external-origin.test | 192.0.2.1 | 7200 |

In this case, the process to respond to queries for `domain.test` directly with the IP address can be represented by the following diagram:

flowchart BT
accTitle: CNAME flattening diagram
accDescr: Diagram of CNAME flattening process when there is a request for a domain in Cloudflare and the zone has a CNAME record at apex that points to an external A record.
A((User)) <--query for domain.test--> B\[Resolver] --> C
C\["Question:
domain.test IN A"]
subgraph Y\[Cloudflare DNS]
direction RL
D{{Look up record}} --> G\["Answer:
domain.test 3600 CNAME external-origin.test

This means that domain.test is a CNAME at the zone apex.
Forced CNAME flattening is enabled."] --- H{{Resolve external-origin.test}}
K{{Append answer with overwritten query name}} --> L\["Answer:
domain.test 7200 IN A 192.0.2.1"] --- M{Proxy status}
M --Proxied--> O\["Answer:
domain.test 300 IN A {$Cloudflare IP 1}
domain.test 300 IN A {$Cloudflare IP 2}"]
M --DNS only--> N\["Answer:
domain.test 3600 IN A 192.0.2.1"]
end

subgraph Z \[External DNS provider]
J\["Answer:
external-origin.test 7200 IN A 192.0.2.1"]
end

C --> D
H --- J --- K
O --> B
N --> B

## Aspects to consider

- If the CNAME record is proxied in Cloudflare, the answer is made up of multiple [Cloudflare IPs ↗](https://www.cloudflare.com/ips/) and its Time to Live (TTL) is set to `300`.
- If the CNAME record in Cloudflare is not proxied, the flattened answer consists of the IP address from the external DNS provider and its TTL corresponds to the lower value between the external record and the Cloudflare CNAME record.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/dns/","name":"DNS"}},{"@type":"ListItem","position":3,"item":{"@id":"/dns/cname-flattening/","name":"CNAME flattening"}},{"@type":"ListItem","position":4,"item":{"@id":"/dns/cname-flattening/cname-flattening-diagram/","name":"Example diagram"}}]}
```
