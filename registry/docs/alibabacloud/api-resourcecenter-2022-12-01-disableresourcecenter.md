Deactivates the Resource Center service.

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer.](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/DisableResourceCenter)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/DisableResourceCenter)

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

D170D58E-6256-5344-8F5E-922EC9ECB7EA

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "D170D58E-6256-5344-8F5E-922EC9ECB7EA"
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

400

ServiceNotEnabled

ResourceCenter Service is not enabled.

The Resource Meta Center (RMC) service is not activated.

400

DiscoveryInProgress

A discovery task is in progress. Please wait for a while and check the result again.

The system is finding the related resource. Wait a few minutes and try again.

400

DependencyViolation.ResourceGroup

Unable to disable resource center while associate transfer is enabled.

The Transfer Associated Resources feature is enabled and cannot be disabled.

400

DependencyViolation.Config

ResourceCenter cannot be disabled, because the Config has been enabled.

Resource Center cannot be deactivated because the Cloud Config service is activated for the current account.

404

NotExists.Account

The specified account does not exist.

The specified account does not exist.

409

DisableConflict.MultiAccount

ResourceDirectory management account or delegated administrator account has enabled multi account ResourceCenter, you cannot disable ResourceCenter.

You cannot deactivate Resource Center because the cross-account resource search feature is enabled by using the management account of the resource directory or a delegated administrator account of Resource Center.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-03-21

The Error code has changed

[see changesets](https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/DisableResourceCenter#workbench-doc-change-demo)

Change item

Change content

Error Codes

The Error code has changed.

Error Codes 409 change

delete Error Codes: 400

delete Error Codes: 404

2023-05-10

The Error code has changed

[see changesets](https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/DisableResourceCenter#workbench-doc-change-demo)

Change item

Change content

Error Codes

The Error code has changed.

delete Error Codes: 400

delete Error Codes: 404

Added Error Codes: 409

2023-03-08

The Error code has changed

[see changesets](https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/DisableResourceCenter#workbench-doc-change-demo)

Change item

Change content

Error Codes

The Error code has changed.

Error Codes 400 change

delete Error Codes: 404
