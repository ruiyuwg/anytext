Disables the cross-account resource search feature by using the management account of a resource directory or a delegated administrator account of Resource Center.

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer.](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/DisableMultiAccountResourceCenter)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/DisableMultiAccountResourceCenter)

## Authorization information

There is currently no authorization information disclosed in the API.

## Request parameters

Parameter

Type

Required

Description

Example

The current API does not require request parameters

## Response parameters

Parameter

Type

Description

Example

object

The returned result.

RequestId

string

The ID of the request.

4951F920-48DB-5731-96AA-3A7C8AE617D9

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "4951F920-48DB-5731-96AA-3A7C8AE617D9"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

NoPermission

You are not authorized to perform this operation.

You are not authorized to perform the operation.

404

NotExists.ResourceDirectory

The resource directory for the account is not enabled.

No resource directory is enabled for the account.

409

NoPermission.ResourceDirectory.MemberAccount

ResourceDirectory Member Account is not authorized to perform this operation.

You are not allowed to use a member of a resource directory to perform this operation. Use the management account of the resource directory to perform the operation.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-03-21

The Error code has changed

[see changesets](https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/DisableMultiAccountResourceCenter#workbench-doc-change-demo)

Change item

Change content

Error Codes

The Error code has changed.

Error Codes 409 change

delete Error Codes: 400

delete Error Codes: 404

2023-05-24

The Error code has changed

[see changesets](https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/DisableMultiAccountResourceCenter#workbench-doc-change-demo)

Change item

Change content

Error Codes

The Error code has changed.

delete Error Codes: 400

delete Error Codes: 404

delete Error Codes: 409
