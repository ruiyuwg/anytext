# DLP Forensic Copies

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/logs/logpush/logpush-job/datasets/account/dlp%5Fforensic%5Fcopies.md) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# DLP Forensic Copies

The descriptions below detail the fields available for `dlp_forensic_copies`.

## AccountID

Type: `string`

Cloudflare account ID.

## Datetime

Type: `int or string`

The date and time the corresponding HTTP request was made.

## ForensicCopyID

Type: `string`

The unique ID for this particular forensic copy.

## GatewayRequestID

Type: `string`

Cloudflare request ID, as found in Gateway logs.

## Headers

Type: `object`

String key-value pairs for a selection of HTTP headers on the associated request/response.

## Payload

Type: `string`

Captured request/response data, base64-encoded.

## Phase

Type: `string`

Phase of the HTTP request this forensic copy was captured from (that is, "request" or "response").

## TriggeredRuleID

Type: `string`

The ID of the Gateway firewall rule that triggered this forensic copy.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/logs/","name":"Logs"}},{"@type":"ListItem","position":3,"item":{"@id":"/logs/logpush/","name":"Logpush"}},{"@type":"ListItem","position":4,"item":{"@id":"/logs/logpush/logpush-job/","name":"Logpush job setup"}},{"@type":"ListItem","position":5,"item":{"@id":"/logs/logpush/logpush-job/datasets/","name":"Datasets"}},{"@type":"ListItem","position":6,"item":{"@id":"/logs/logpush/logpush-job/datasets/account/","name":"Account-scoped datasets"}},{"@type":"ListItem","position":7,"item":{"@id":"/logs/logpush/logpush-job/datasets/account/dlp_forensic_copies/","name":"DLP Forensic Copies"}}]}
```
