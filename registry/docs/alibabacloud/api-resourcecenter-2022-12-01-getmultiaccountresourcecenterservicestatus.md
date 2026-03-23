Queries the status of the cross-account resource search feature by using the management account of a resource directory or a delegated administrator account of Resource Center.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/GetMultiAccountResourceCenterServiceStatus)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/GetMultiAccountResourceCenterServiceStatus)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   For mandatory resource types, indicate with a prefix of \* .
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

resourcecenter:GetMultiAccountResourceCenterServiceStatus

get

\*All Resources

`*`

none

none

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

81671397-1425-51F1-A144-4799E01BEBFF

ServiceStatus

string

The status of the feature. Valid values:

-   Enabled: The feature is enabled.
-   Disabled: The feature is disabled.

Enabled

InitialStatus

string

The initialization status of the feature. Valid values:

-   Pending: The feature is being initialized.
-   Finished: The feature is initialized.

Pending

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "81671397-1425-51F1-A144-4799E01BEBFF",
  "ServiceStatus": "Enabled",
  "InitialStatus": "Pending"
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

MultiAccountServiceNotEnabled

Mulit account ResourceCenter service is not enabled.

\-

404

NotExists.ResourceDirectory

The resource directory for the account is not enabled.

No resource directory is enabled for the account.

409

InvalidParameter.Scope

The Scope is invalid.

The Scope parameter is invalid

409

NoPermission.ResourceDirectory.MemberAccount

ResourceDirectory Member Account is not authorized to perform this operation.

You are not allowed to use a member of a resource directory to perform this operation. Use the management account of the resource directory to perform the operation.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-06-02

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/GetMultiAccountResourceCenterServiceStatus?updateTime=2023-06-02#workbench-doc-change-demo)
