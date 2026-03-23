# Access requests

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/logs/logpush/logpush-job/datasets/account/access%5Frequests.md) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Access requests

The descriptions below detail the fields available for `access_requests`.

## Action

Type: `string`

What type of record is this. *login* | *logout*.

## Allowed

Type: `bool`

If request was allowed or denied.

## AppDomain

Type: `string`

The domain of the Application that Access is protecting.

## AppUUID

Type: `string`

Access Application UUID.

## Connection

Type: `string`

Identity provider used for the login.

## Country

Type: `string`

Request's country of origin.

## CreatedAt

Type: `int or string`

The date and time the corresponding access request was made (for example, '2021-07-27T00:01:07Z').

## Email

Type: `string`

Email of the user who logged in.

## IPAddress

Type: `string`

The IP address of the client.

## PurposeJustificationPrompt

Type: `string`

Message prompted to the client when accessing the application.

## PurposeJustificationResponse

Type: `string`

Justification given by the client when accessing the application.

## RayID

Type: `string`

Identifier of the request.

## TemporaryAccessApprovers

Type: `array[string]`

List of approvers for this access request.

## TemporaryAccessDuration

Type: `int`

Approved duration for this access request.

## UserUID

Type: `string`

The uid of the user who logged in.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/logs/","name":"Logs"}},{"@type":"ListItem","position":3,"item":{"@id":"/logs/logpush/","name":"Logpush"}},{"@type":"ListItem","position":4,"item":{"@id":"/logs/logpush/logpush-job/","name":"Logpush job setup"}},{"@type":"ListItem","position":5,"item":{"@id":"/logs/logpush/logpush-job/datasets/","name":"Datasets"}},{"@type":"ListItem","position":6,"item":{"@id":"/logs/logpush/logpush-job/datasets/account/","name":"Account-scoped datasets"}},{"@type":"ListItem","position":7,"item":{"@id":"/logs/logpush/logpush-job/datasets/account/access_requests/","name":"Access requests"}}]}
```
