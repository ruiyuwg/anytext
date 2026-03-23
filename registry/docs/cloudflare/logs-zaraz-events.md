# Zaraz Events

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/logs/logpush/logpush-job/datasets/zone/zaraz%5Fevents.md) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Zaraz Events

The descriptions below detail the fields available for `zaraz_events`.

## Body

Type: `object`

Zaraz incoming request body.

## EventDetails

Type: `object`

Zaraz log event details.

## EventType

Type: `string`

Zaraz log event name.

## IP

Type: `string`

Zaraz incoming request client IP address.

## RequestHeaders

Type: `object`

Zaraz incoming request headers.

## TimestampStart

Type: `int or string`

Zaraz log event timestamp.

## URL

Type: `string`

Zaraz incoming request URL.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/logs/","name":"Logs"}},{"@type":"ListItem","position":3,"item":{"@id":"/logs/logpush/","name":"Logpush"}},{"@type":"ListItem","position":4,"item":{"@id":"/logs/logpush/logpush-job/","name":"Logpush job setup"}},{"@type":"ListItem","position":5,"item":{"@id":"/logs/logpush/logpush-job/datasets/","name":"Datasets"}},{"@type":"ListItem","position":6,"item":{"@id":"/logs/logpush/logpush-job/datasets/zone/","name":"Zone-scoped datasets"}},{"@type":"ListItem","position":7,"item":{"@id":"/logs/logpush/logpush-job/datasets/zone/zaraz_events/","name":"Zaraz Events"}}]}
```
