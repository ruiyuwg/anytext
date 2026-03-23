# Browser Isolation User Actions

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/logs/logpush/logpush-job/datasets/account/biso%5Fuser%5Factions.md) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Browser Isolation User Actions

The descriptions below detail the fields available for `biso_user_actions`.

## AccountID

Type: `string`

The Cloudflare account ID.

## Decision

Type: `string`

The decision applied ('allow' or 'block').

## DomainName

Type: `string`

The domain name in the URL.

## Metadata

Type: `string`

Additional information specific to a user action (JSON string).

## Timestamp

Type: `int or string`

The date and time.

## Type

Type: `string`

The user action type ('copy', 'paste', 'download', etc.).

## URL

Type: `string`

The URL of the webpage where a user action was performed.

## UserEmail

Type: `string`

The user email.

## UserID

Type: `string`

The user ID.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/logs/","name":"Logs"}},{"@type":"ListItem","position":3,"item":{"@id":"/logs/logpush/","name":"Logpush"}},{"@type":"ListItem","position":4,"item":{"@id":"/logs/logpush/logpush-job/","name":"Logpush job setup"}},{"@type":"ListItem","position":5,"item":{"@id":"/logs/logpush/logpush-job/datasets/","name":"Datasets"}},{"@type":"ListItem","position":6,"item":{"@id":"/logs/logpush/logpush-job/datasets/account/","name":"Account-scoped datasets"}},{"@type":"ListItem","position":7,"item":{"@id":"/logs/logpush/logpush-job/datasets/account/biso_user_actions/","name":"Browser Isolation User Actions"}}]}
```
