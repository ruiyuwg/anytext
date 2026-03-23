Deletes an auto provisioning group. When you call this operation, you can specify AutoProvisioningGroupId and TerminateInstances in the request.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DeleteAutoProvisioningGroup)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DeleteAutoProvisioningGroup)

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

ecs:DeleteAutoProvisioningGroup

delete

\*AutoProvisioningGroup

`acs:ecs:{#regionId}:{#accountId}:autoprovisioninggroup/{#autoprovisioninggroupId}`

none

-   ram:CreateServiceLinkedRole

## Request parameters

Parameter

Type

Required

Description

Example

RegionId

string

Yes

The region ID of the auto provisioning group.

cn-hangzhou

AutoProvisioningGroupId

string

Yes

The ID of the auto provisioning group.

apg-bpuf6jel2bbl62wh13\*\*\*\*

TerminateInstances

boolean

No

Specifies whether to release instances in the auto provisioning group. Valid values:

-   true
-   false

**Note** By default, this parameter inherits the value of `TerminateInstances` that you specified when you call the `CreateAutoProvisioningGroup` operation to create an auto provisioning group. You can also change the value of `TerminateInstances` when you call the DeleteAutoProvisioningGroup operation to delete the auto provisioning group.

true

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

B48A12CD-1295-4A38-A8F0-0E92C937\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "B48A12CD-1295-4A38-A8F0-0E92C937****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

MissingParameter.InstanceType

The specified parameter "TerminateInstances" should be not empty.

\-

400

MissingParameter

The specified parameter "AutoProvisioningGroupId" should not be null.

Elastic Supply Group Id(AutoProvisioningGroupId) must be filled in.

400

NoPermission

%s

\-

403

Forbidden.RAM

User not authorized to operate on the specified resource, or this API doesn't support RAM.

\-

403

AutoProvisioningGroup.Unauthorized

Unauthorized to operate current action.

\-

403

AutoProvisioningGroup.IncorrectStatus

Current status of AutoProvisioningGroup does not support curren action.

\-

404

InvalidAutoProvisioningGroupId.NotFound

The specified AutoProvisioningGroupId does not exist.

The specified elastic supply group does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-12-27

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DeleteAutoProvisioningGroup?updateTime=2023-12-27#workbench-doc-change-demo)
