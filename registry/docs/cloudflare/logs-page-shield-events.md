# Page Shield events

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/logs/logpush/logpush-job/datasets/zone/page%5Fshield%5Fevents.md) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Page Shield events

The descriptions below detail the fields available for `page_shield_events`.

## Action

Type: `string`

The action which was taken against the violation.\
Possible values are *log* | *allow*.

## CSPDirective

Type: `string`

The violated directive in the report.

## Host

Type: `string`

The host where the resource was seen on.

## PageURL

Type: `string`

The page URL the violation was seen on.

## PolicyID

Type: `string`

The ID of the policy which was violated.

## ResourceType

Type: `string`

The resource type of the violated directive. Possible values are 'script', 'connection', or 'other' for unmonitored resource types.

## Timestamp

Type: `int or string`

The timestamp of when the report was received.

## URL

Type: `string`

The resource URL.

## URLContainsCDNCGIPath (deprecated)

Type: `bool`

Whether the resource URL contains the '/cdn-cgi/' path.

## URLHost

Type: `string`

The domain host of the URL.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/logs/","name":"Logs"}},{"@type":"ListItem","position":3,"item":{"@id":"/logs/logpush/","name":"Logpush"}},{"@type":"ListItem","position":4,"item":{"@id":"/logs/logpush/logpush-job/","name":"Logpush job setup"}},{"@type":"ListItem","position":5,"item":{"@id":"/logs/logpush/logpush-job/datasets/","name":"Datasets"}},{"@type":"ListItem","position":6,"item":{"@id":"/logs/logpush/logpush-job/datasets/zone/","name":"Zone-scoped datasets"}},{"@type":"ListItem","position":7,"item":{"@id":"/logs/logpush/logpush-job/datasets/zone/page_shield_events/","name":"Page Shield events"}}]}
```
