# DNS logs

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/logs/logpush/logpush-job/datasets/zone/dns%5Flogs.md) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# DNS logs

The descriptions below detail the fields available for `dns_logs`.

## ColoCode

Type: `string`

IATA airport code of the data center that received the request.

## EDNSSubnet

Type: `string`

IPv4 or IPv6 address information corresponding to the [EDNS Client Subnet (ECS)](https://developers.cloudflare.com/glossary/?term=ecs) forwarded by recursive resolvers. Not all resolvers send this information.

## EDNSSubnetLength

Type: `int`

Size of the [EDNS Client Subnet (ECS)](https://developers.cloudflare.com/glossary/?term=ecs) in bits. For example, if the last octet of an IPv4 address is omitted (`192.0.2.x.`), the subnet length will be 24.

## QueryName

Type: `string`

Name of the query that was sent.

## QueryType

Type: `int`

Integer value of query type. For more information refer to [Query type ↗](https://www.iana.org/assignments/dns-parameters/dns-parameters.xhtml#dns-parameters-4).

## ResponseCached

Type: `bool`

Whether the response was cached or not.

## ResponseCode

Type: `int`

Integer value of response code. For more information refer to [Response code ↗](https://www.iana.org/assignments/dns-parameters/dns-parameters.xhtml#dns-parameters-6).

## SourceIP

Type: `string`

IP address of the client (IPv4 or IPv6).

## Timestamp

Type: `int or string`

Timestamp at which the query occurred.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/logs/","name":"Logs"}},{"@type":"ListItem","position":3,"item":{"@id":"/logs/logpush/","name":"Logpush"}},{"@type":"ListItem","position":4,"item":{"@id":"/logs/logpush/logpush-job/","name":"Logpush job setup"}},{"@type":"ListItem","position":5,"item":{"@id":"/logs/logpush/logpush-job/datasets/","name":"Datasets"}},{"@type":"ListItem","position":6,"item":{"@id":"/logs/logpush/logpush-job/datasets/zone/","name":"Zone-scoped datasets"}},{"@type":"ListItem","position":7,"item":{"@id":"/logs/logpush/logpush-job/datasets/zone/dns_logs/","name":"DNS logs"}}]}
```
