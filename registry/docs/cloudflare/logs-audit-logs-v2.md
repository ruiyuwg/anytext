# Audit Logs V2

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/logs/logpush/logpush-job/datasets/account/audit%5Flogs%5Fv2.md) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Audit Logs V2

The descriptions below detail the fields available for `audit_logs_v2`.

## AccountID

Type: `string`

The Cloudflare account ID.

## AccountName

Type: `string`

The Cloudflare account name.

## ActionDescription

Type: `string`

Description of action taken.

## ActionResult

Type: `string`

Whether the action was successful.

## ActionTimestamp

Type: `int or string`

When the change happened.

## ActionType

Type: `string`

Type of action taken.

## ActorContext

Type: `string`

Context of the actor.

## ActorEmail

Type: `string`

Email of the actor.

## ActorID

Type: `string`

Unique identifier of the actor in Cloudflare's system.

## ActorIPAddress

Type: `string`

Physical network address of the actor.

## ActorTokenDetails

Type: `object`

Details of how the actor is authenticated.

## ActorType

Type: `string`

Type of user that started the audit trail.

## AuditLogID

Type: `string`

Unique identifier of an audit log.

## Raw

Type: `object`

Raw data.

## ResourceID

Type: `string`

Unique identifier of the resource within Cloudflare's system.

## ResourceProduct

Type: `string`

Resource product.

## ResourceRequest

Type: `object`

Resource request.

## ResourceResponse

Type: `object`

Resource response.

## ResourceScope

Type: `string`

Resource scope.

## ResourceType

Type: `string`

The type of resource that was changed.

## ResourceValue

Type: `object`

Resource value.

## ZoneID

Type: `string`

The Cloudflare zone ID.

## ZoneName

Type: `string`

The Cloudflare zone name.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/logs/","name":"Logs"}},{"@type":"ListItem","position":3,"item":{"@id":"/logs/logpush/","name":"Logpush"}},{"@type":"ListItem","position":4,"item":{"@id":"/logs/logpush/logpush-job/","name":"Logpush job setup"}},{"@type":"ListItem","position":5,"item":{"@id":"/logs/logpush/logpush-job/datasets/","name":"Datasets"}},{"@type":"ListItem","position":6,"item":{"@id":"/logs/logpush/logpush-job/datasets/account/","name":"Account-scoped datasets"}},{"@type":"ListItem","position":7,"item":{"@id":"/logs/logpush/logpush-job/datasets/account/audit_logs_v2/","name":"Audit Logs V2"}}]}
```
