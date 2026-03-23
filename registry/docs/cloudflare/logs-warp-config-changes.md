# WARP Config Changes

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/logs/logpush/logpush-job/datasets/account/warp%5Fconfig%5Fchanges.md) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# WARP Config Changes

The descriptions below detail the fields available for `warp_config_changes`.

## AccountIDFrom

Type: `string`

The Cloudflare account ID the user switched from.

## AccountIDTo

Type: `string`

The Cloudflare account ID the user switched to.

## AccountNameFrom

Type: `string`

The name of the account the user switched from.

## AccountNameTo

Type: `string`

The name of the account the user switched to.

## ConfigNameFrom

Type: `string`

The name of the config the user switched from.

## ConfigNameTo

Type: `string`

The name of the config the user switched to.

## DeviceID

Type: `string`

Physical device ID.

## DeviceRegistrationID

Type: `string`

Device registration ID.

## Hostname

Type: `string`

The device hostname.

## SerialNumber

Type: `string`

The device serial number.

## Timestamp

Type: `int or string`

Time the event was ingested.

## UserEmail

Type: `string`

The Access user email.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/logs/","name":"Logs"}},{"@type":"ListItem","position":3,"item":{"@id":"/logs/logpush/","name":"Logpush"}},{"@type":"ListItem","position":4,"item":{"@id":"/logs/logpush/logpush-job/","name":"Logpush job setup"}},{"@type":"ListItem","position":5,"item":{"@id":"/logs/logpush/logpush-job/datasets/","name":"Datasets"}},{"@type":"ListItem","position":6,"item":{"@id":"/logs/logpush/logpush-job/datasets/account/","name":"Account-scoped datasets"}},{"@type":"ListItem","position":7,"item":{"@id":"/logs/logpush/logpush-job/datasets/account/warp_config_changes/","name":"WARP Config Changes"}}]}
```
