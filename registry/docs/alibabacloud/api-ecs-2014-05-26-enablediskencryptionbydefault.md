Enables the Account-level Elastic Block Storage (EBS) Default Encryption feature in a region.

## Operation description

**Note** The Account-level EBS Default Encryption feature is available only in specific regions and to specific users. To use the feature, [submit a ticket](https://smartservice.console.alibabacloud.com/service/create-ticket-intl).

-   **Precautions**
    
    -   To enable the Account-level EBS Default Encryption feature as a Resource Access Management (RAM) user, grant the `AliyunECSFullAccess` permission to the RAM user. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).
    -   Before you can enable the Account-level EBS Default Encryption feature in a region, you must [activate Key Management Service (KMS)](/help/en/kms/key-management-service/getting-started/purchase-and-enable-a-kms-instance) in the region.
    -   After you enable the Account-level EBS Default Encryption feature in a region, you can purchase only encrypted cloud disks in the region. For more information, see the [Limits](/help/en/ecs/user-guide/encryption-overview#50de175230erj) section of the "Encrypt cloud disks" topic.
-   **Considerations**
    
    -   After you enable the Account-level EBS Default Encryption feature in a region, new pay-as-you-go and subscription cloud disks in the region must be encrypted. You can use the KMS key configured for the feature or specify other KMS keys to encrypt the cloud disks.
    -   The first time you enable the Account-level EBS Default Encryption feature in a region, the service key in the region is automatically used to encrypt EBS resources.
-   **Suggestions**
    
    -   You can call the [DescribeDiskEncryptionByDefaultStatus](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describediskencryptionbydefaultstatus) operation to query whether the Account-level EBS Default Encryption feature is enabled in a region and the [DescribeDiskDefaultKMSKeyId](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describediskdefaultkmskeyid) operation to query the ID of the KMS key used by the feature in a region.
    -   You can call the [ModifyDiskDefaultKMSKeyId](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifydiskdefaultkmskeyid) or [ResetDiskDefaultKMSKeyId](/help/en/ecs/developer-reference/api-ecs-2014-05-26-resetdiskdefaultkmskeyid) operation to change or reset the KMS key used by the Account-level EBS Default Encryption feature in a region.
    -   You can call the [DisableDiskEncryptionByDefault](/help/en/ecs/developer-reference/api-ecs-2014-05-26-disablediskencryptionbydefault) operation to disable the Account-level EBS Default Encryption feature in a region.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/EnableDiskEncryptionByDefault)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/EnableDiskEncryptionByDefault)

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

ecs:EnableDiskEncryptionByDefault

none

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

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

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

InvalidOperation.DefaultEncryptionAlreadyEnabled

The specified region is already default encryption settings.

The region has enabled cloud disk encryption by default.

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

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/EnableDiskEncryptionByDefault?updateTime=2025-03-19#workbench-doc-change-demo)

2024-12-02

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/EnableDiskEncryptionByDefault?updateTime=2024-12-02#workbench-doc-change-demo)
