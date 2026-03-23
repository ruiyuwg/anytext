# NEL reports

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/logs/logpush/logpush-job/datasets/zone/nel%5Freports.md) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# NEL reports

The descriptions below detail the fields available for `nel_reports`.

## ClientIPASN

Type: `int`

Client ASN.

## ClientIPASNDescription

Type: `string`

Client ASN description.

## ClientIPCountry

Type: `string`

Client country.

## LastKnownGoodColoCode

Type: `string`

IATA airport code of colo client connected to.

## Phase

Type: `string`

The phase of connection the error occurred in; *dns* | *connection* | *application* | *unknown*.

## Timestamp

Type: `int or string`

Timestamp for error report.

## Type

Type: `string`

The type of error in the phase.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/logs/","name":"Logs"}},{"@type":"ListItem","position":3,"item":{"@id":"/logs/logpush/","name":"Logpush"}},{"@type":"ListItem","position":4,"item":{"@id":"/logs/logpush/logpush-job/","name":"Logpush job setup"}},{"@type":"ListItem","position":5,"item":{"@id":"/logs/logpush/logpush-job/datasets/","name":"Datasets"}},{"@type":"ListItem","position":6,"item":{"@id":"/logs/logpush/logpush-job/datasets/zone/","name":"Zone-scoped datasets"}},{"@type":"ListItem","position":7,"item":{"@id":"/logs/logpush/logpush-job/datasets/zone/nel_reports/","name":"NEL reports"}}]}
```
