Changes the Key Management Service (KMS) key used by the Account-level Elastic Block Storage (EBS) Default Encryption feature in a region.

## Operation description

-   To call this operation as a Resource Access Management (RAM) user, grant the `AliyunECSFullAccess` permission to the RAM user. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).
-   Before you can call this operation in a region, make sure that the Account-level EBS Default Encryption feature is enabled in the region.
-   The first time you use a customer master key (CMK), you must use the `AliyunECSDiskEncryptDefaultRole` role to grant Elastic Compute Service (ECS) access to KMS resources. For more information, see [Grant access to KMS keys through RAM roles](/help/en/ecs/user-guide/encryption-related-permissions).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyDiskDefaultKMSKeyId)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyDiskDefaultKMSKeyId)

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

ecs:ModifyDiskDefaultKMSKeyId

update

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

RegionId

string

Yes

The region ID. You can call the [DescribeRegions](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeregions) operation to query the most recent region list.

cn-hangzhou

KMSKeyId

string

Yes

The ID of the new KMS key.

0e478b7a-4262-4802-b8cb-00d3fb40\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

Schema of Response

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidParameter.Encrypted.KmsNotEnabled

KMS must be enabled for encrypted disks.

KMS is not activated. You must activate KMS before you can encrypt disks.

400

InvalidParameter.KmsNotEnabled

Failed to perform this operation because KMS is not activated.

You need to activate KMS key management service.

403

Abs.InvalidAction.RegionNotSupport

This region does not support this action.

The operation is not supported in the region.

403

InvalidParameter.RegionIdNotExists

The specified region does not exists.

The region does not exist.

403

InvalidParameter.KMSKeyId.KMSUnauthorized

ECS service have no right to access your KMS.

ECS is not authorized to access your KMS resources.

403

InvalidOperation.KMSKeyIdNotFound

The specified KMSKeyId not found, %s.

The associated KMS encryption key cannot be found. Verify that the KMS encryption key is valid.

403

InvalidOperation.KMSServiceNotOpen

KMS service is currently not open.

The KMS service has not been enabled.

403

UserNotInTheWhiteList

The user is not in disk white list.

You are not authorized to manage the disk. Try again when you are authorized.

403

InvalidDefaultEncryption.NotFound

You have not configured default encryption setting in this region.

Cloud disk encryption by default has not been enabled for the region.

403

InvalidParameter.KMSKeyId.CMKNotEnabled

The CMK (Customer Master Key) must be in an active state.

The CMK (Customer Master Key) must be in an active state.

403

InvalidParameter.KMSKeyId.CMKUnauthorized

The CMK(Customer Master Key) lacks authorization to add tags to the ECS service.

The CMK(Customer Master Key) lacks authorization to add tags to the ECS service.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-19

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyDiskDefaultKMSKeyId?updateTime=2025-03-19#workbench-doc-change-demo)
