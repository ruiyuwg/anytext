Copies a standard or encrypted snapshot from one region to another.

## Operation description

When you call this operation, take note of the following item:

-   New snapshots (snapshot copies) cannot be used to roll back the disks for which source snapshots (copied snapshots) were created.
-   Local snapshots cannot be copied.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/CopySnapshot)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/CopySnapshot)

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

ecs:CopySnapshot

create

\*Snapshot

`acs:ecs:{#regionId}:{#accountId}:snapshot/{#snapshotId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

ResourceGroupId

string

No

This parameter is not publicly available.

rg-bp67acfmxazb4p\*\*\*\*

Tag

array<object>

No

The tag key and value of the new snapshot.

object

No

The tag key and value of the new snapshot.

Key

string

No

The key of tag N to add to the new snapshot. The tag key cannot be an empty string. It can be up to 128 characters in length and cannot start with acs: or aliyun. It cannot contain http:// or https://.

TestKey

Value

string

No

The value of tag N to add to the new snapshot. The tag value can be an empty string. It can be up to 128 characters in length and cannot start with acs: or aliyun. It cannot contain http:// or https://.

TestValue

RegionId

string

Yes

The region ID of the source snapshot. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-chengdu

DestinationRegionId

string

Yes

The ID of the destination region to which to copy the source snapshot.

us-east-1

SnapshotId

string

Yes

The ID of the source snapshot.

s-bp67acfmxazb4p\*\*\*\*

DestinationSnapshotName

string

Yes

The name of the new snapshot. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with http:// or https://. The name can contain letters, digits, colons (:), underscores (\_), periods (.), and hyphens (-).

This parameter is left empty by default.

CopySnapshotDemo

DestinationSnapshotDescription

string

Yes

The description of the new snapshot. The description must be 2 to 256 characters in length and cannot start with http:// or https://.

This parameter is empty by default.

CopySnapshotDemo

RetentionDays

integer

No

The retention period of the new snapshot. Unit: days. The new snapshot is automatically released when its retention period ends. Valid values: 1 to 65536.

This parameter is empty by default, which indicates that the snapshot is not automatically released.

60

Encrypted

boolean

No

Specifies whether to encrypt the new snapshot. Valid values:

-   true
-   false

Default value: false.

false

KMSKeyId

string

No

The ID of the customer master key (CMK) in Key Management Service (KMS) in the destination region.

0e478b7a-4262-4802-b8cb-00d3fb40\*\*\*\*

Arn

array<object>

No

**Note** This parameter is currently in invitational preview and unavailable for public use.

object

No

RoleType

string

No

**Note** This parameter is not publicly available.

null

Rolearn

string

No

**Note** This parameter is not publicly available.

null

AssumeRoleFor

long

No

**Note** This parameter is not publicly available.

0

DestinationStorageLocationArn

string

No

**Note** This parameter is not publicly available.

null

ClientToken

string

No

The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](/help/en/ecs/developer-reference/how-to-ensure-idempotence).

123e4567-e89b-12d3-a456-426655440000

## Response parameters

Parameter

Type

Description

Example

object

SnapshotId

string

The ID of the new snapshot.

s-bp17441ohwka0yui\*\*\*\*

RequestId

string

The request ID.

C8B26B44-0189-443E-9816-D951F596\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "SnapshotId": "s-bp17441ohwka0yui****",
  "RequestId": "C8B26B44-0189-443E-9816-D951F596****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

Duplicate.TagKey

The Tag.N.Key contain duplicate key.

The specified tag key already exists. Tag keys must be unique.

400

InvalidTagKey.Malformed

The specified Tag.n.Key is not valid.

The specified Tag.N.Key parameter is invalid.

400

InvalidTagValue.Malformed

The specified Tag.n.Value is not valid.

The specified tag value is invalid.

400

InvalidRegionId.MalFormed

The specified RegionId is not valid.

The specified region does not exist.

400

InvalidParameter.Arns

The specified Arns is not valid.

The Arns parameter is invalid. Please check and pass it again.

403

InvalidSnapshotId.EncryptedNotSupport

The specified snapshot with encrypted does not support copy.

\-

403

InvalidSnapshotId.NotFound

The specified snapshot is not exists.

The specified source snapshot does not exist.

403

InvalidSnapshotCategory.NotSupportCopy

The specified snapshot's category does not support copy.

\-

403

InvalidUser.NotInWhiteList

The user is not in the white list of copying snapshot.

You are not authorized to perform the operation.

403

InvalidAccountStatus.NotEnoughBalance

Your account does not have enough balance.

Your account balance is insufficient. Add funds to your account and try again.

403

InvalidAccountStatus.SnapshotServiceUnavailable

Snapshot service has not been opened yet.

The operation is not supported while the snapshot service is not activated.

403

InvalidSnapshotId.NotReady

The specified snapshot has not completed yet.

The specified snapshot is being created.

403

InvalidOperation.Unauthorized

The specified operation is unauthorized.

\-

403

InvalidOperation.UnfinishedCrossRegionCopy

This disk has unfinished cross-region copy snapshots in the target region.

The disk also has unfinished cross-region snapshot copies.

403

InvalidOperation.NotSupportCopyInSameRegion

Copying snapshot in the same region is not supported.

the source and destination regions of the snapshot cannot be the same.

403

InvalidSnapshotName.Malformed

The specified SnapshotName is wrongly formed.

The format of the specified snapshot name is invalid.

403

InvalidDescription.Malformed

The specified description is wrongly formed.

The resource description is invalid. The description must be 2 to 256 characters in length and cannot start with http:// or https://.

403

InvalidRetentionDays.Malformed

The specified RetentionDays is not valid.

The specified RetentionDays parameter is invalid.

403

InvalidRegionId.NotSupportedEncryptedSnapshotCopy

The specified region not support copy encrypted snapshot.

\-

403

InvalidRegion.NotSupport

The specified region does not support byok.

The bring your own key (BYOK) feature is not supported in the region.

403

InvalidRegionId.NotSupportEncryptAlgorithm

The current region does not support creating encrypted disks with EncryptAlgorithm.

\-

403

InvalidRegionId.NotExists

Region not exists.

\-

403

InvalidEncryptAlgorithm

The specified parameter EncryptAlgorithm is not valid.

\-

403

InvalidEncrypted.NotMatchKmsKeyId

The specified parameter Encrypted must be true when KmsKeyId is not empty.

\-

403

InvalidEncrypted.NotMatchEncryptAlgorithm

The specified parameter Encrypted must be true when EncryptAlgorithm is not empty.

\-

403

InvalidEncrypted.NotSupportDecrypt

Encrypted snapshot not support copy to decrypt snapshot.

\-

403

InvalidSnapshotCategory.NotSupportCrossRegionCopy

The specified snapshot is not support cross region copy.

\-

403

InvalidSnapshotCategory.NotSupportEncryptedCopy

The specified snapshot is not support encrypted copy.

\-

403

InvalidParameter.KmsNotEnabled

The specified operation need enable KMS.

The current operation requires opening KMS

403

InvalidParameter.DataEncryptedKeyCreateFailed

Create kms data encrypted key fail. If you need further assistance, you can contact the KMS Technical Support.

Failed to create a data key using the KMS master key. Please contact the KMS attendant for further troubleshooting.

403

InvalidParameter.KMSKeyId.NotFound

The specified KMSKeyId does not exist.

The specified KMSKeyId parameter does not exist.

403

InvalidParameter.KMSKeyId.KMSUnauthorized

ECS service have no right to access your KMS.

ECS is not authorized to access your KMS resources.

403

InvalidKMSKeyId.NotSymmetric

The specified parameter KmsKeyId must be symmetric.

The KMSKey used for encryption must be a symmetric encryption key.

403

InvalidEncrypted.NotMatchKmsKeyId

The specified parameter Encrypted must be true when kmsKeyId is not null.

\-

403

QuotaExceed.SnapshotQuota

The quota is insufficient, please contact your channel partner to increase the quota.

The quota is insufficient. Contact your channel partner to request a quota increase.

403

InvalidOperation.UnfinishedEncryptedSnapshotCopy

This disk has unfinished encrypted copy snapshots in the target region.

The cloud disk has unfinished encrypted snapshot copy tasks.

403

InvalidParameterDestinationStorageLocationArn.Unauthorized

The operation has failed due to lack of permission for the specified "DestinationStorageLocationArn". Please use a resource with appropriate permission for the operation.

\-

403

InvalidParameterDestinationStorageLocationArn.RegionNotMatch

The region information in the specified parameter "DestinationStorageLocationArn" is inconsistent with "DestinationRegionId". Please use the correct information for the operation.

\-

403

InvalidSnapshot.StorageLocationNotSupported

The storage location of the current snapshot does not support this operation.

\-

403

InvalidSnapshot.EncryptedNotSupported

The current operation does not support the use of encrypted snapshots.

\-

403

InvalidParameterDestinationStorageLocationArn.Malformed

The specified DestinationStorageLocationArn is wrongly formed.

\-

403

OperationDenied.NonCompliantDestinationRegion

The copy operation to the destination region is not in compliance with regulations.

The target region does not meet the security compliance requirements.

403

OperationDenied.SnapshotCategoryNotSupportCopy

The specified category of snapshot not support copy.

The specified snapshot type does not support copying.

403

InvalidParameter.KMSKeyId.CMKNotEnabled

The CMK (Customer Master Key) must be in an active state.

The CMK (Customer Master Key) must be in an active state.

403

InvalidParameter.KMSKeyId.CMKUnauthorized

The CMK(Customer Master Key) lacks authorization to add tags to the ECS service.

The CMK(Customer Master Key) lacks authorization to add tags to the ECS service.

409

InvalidOperation.Conflict

Request was denied due to conflict with a previous request, please try again later.

\-

500

InternalError

The request processing has failed due to some unknown error, exception or failure.

An internal error has occurred. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-21

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CopySnapshot?updateTime=2025-03-21#workbench-doc-change-demo)

2025-03-19

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CopySnapshot?updateTime=2025-03-19#workbench-doc-change-demo)

2025-01-21

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CopySnapshot?updateTime=2025-01-21#workbench-doc-change-demo)

2024-12-10

API Description Update. The API operation is not deprecated.. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CopySnapshot?updateTime=2024-12-10#workbench-doc-change-demo)

2024-11-27

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CopySnapshot?updateTime=2024-11-27#workbench-doc-change-demo)

2024-06-27

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CopySnapshot?updateTime=2024-06-27#workbench-doc-change-demo)

2023-12-18

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CopySnapshot?updateTime=2023-12-18#workbench-doc-change-demo)

2023-08-02

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CopySnapshot?updateTime=2023-08-02#workbench-doc-change-demo)

2023-06-19

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CopySnapshot?updateTime=2023-06-19#workbench-doc-change-demo)

2023-03-01

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CopySnapshot?updateTime=2023-03-01#workbench-doc-change-demo)
