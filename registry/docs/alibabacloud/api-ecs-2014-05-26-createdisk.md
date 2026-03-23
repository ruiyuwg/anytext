Creates a pay-as-you-go or subscription data disk.

## Operation description

-   You can enable the multi-attach (`MultiAttach`) feature when you create a disk. Before you enable the multi-attach feature, we recommend that you familiarize yourself with the feature and the limits on the feature. For more information, see [NVMe protocol](/help/en/ecs/user-guide/nvme-disks) and [Use the multi-attach feature to attach a cloud disk to multiple ECS instances](/help/en/ecs/user-guide/enable-multi-attach).
    
-   You can create disks of the following disk categories: basic disks, ultra disks, standard SSDs, Enterprise SSDs (ESSDs), ESSD Entry disks, Regional ESSDs, ESSD AutoPL disks, standard elastic ephemeral disks, and premium elastic ephemeral disks.
    
-   Before you can create a disk, you must complete real-name verification. Complete real-name verification on the [Real-name Verification](https://account-console.alibabacloud.com/#/auth/home) page in the Alibaba Cloud Management Console.
    
-   When you create disks, you may be charged for the resources used. We recommend that you familiarize yourself with the billing methods of Elastic Compute Service (ECS) resources before you create a disk. For more information, see [Billing overview](/help/en/ecs/billing-overview).
    
-   When you call this operation to create a disk, specific parameters are automatically specified.
    
    -   `DeleteAutoSnapshot` is automatically set to `true` when a disk is created. This indicates that the automatic snapshots of the disk are deleted when the disk is released. You can call the [DescribeDisks](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describedisks) operation to query the DeleteAutoSnapshot value for the disk and call the [ModifyDiskAttribute](/help/en/ecs/api-modifydiskattribute) operation to change the DeleteAutoSnapshot value for the disk.
    -   If you do not specify a performance level when you create an ESSD, the performance level of the ESSD is automatically set to PL1. To change the performance level of the ESSD, you can call the [ModifyDiskSpec](/help/en/ecs/api-modifydiskspec) operation.
    -   `Portable` is automatically set to `true` when a disk is created, which indicates that the disk is a pay-as-you-go disk.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/CreateDisk)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/CreateDisk)

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

ecs:CreateDisk

create

Disk

`acs:ecs:{#regionId}:{#accountId}:disk/*`

Disk

`acs:ecs:{#regionId}:{#accountId}:disk/{#diskId}`

Snapshot

`acs:ecs:{#regionId}:{#accountId}:snapshot/{#snapshotId}`

-   ecs:IsDiskEncrypted
-   ecs:IsDiskByokEncrypted

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

The ID of the region in which to create the disk. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

ZoneId

string

No

The ID of the zone in which to create the pay-as-you-go disk.

-   If you do not specify InstanceId, you must specify ZoneId.
-   You cannot specify both ZoneId and InstanceId in the same request.

**Note** You do not need to specify this parameter if you set DiskCategory to `cloud_regional_disk_auto` to create a Regional ESSD.

cn-hangzhou-g

SnapshotId

string

No

The ID of the snapshot to use to create the disk. Snapshots that were created on or before July 15, 2013 cannot be used to create disks.

The following limits apply to `SnapshotId` and `Size`:

-   If the size of the snapshot specified by `SnapshotId` is larger than the value of `Size`, the size of the created disk is equal to the specified snapshot size.
-   If the size of the snapshot specified by `SnapshotId` is smaller than the value of `Size`, the size of the created disk is equal to the value of `Size`.
-   You cannot create elastic ephemeral disks from snapshots.

s-bp67acfmxazb4p\*\*\*\*

DiskName

string

No

The name of the data disk. The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (\_), periods (.), and hyphens (-). The name must start with a letter.

This parameter is left empty by default.

testDiskName

Size

integer

No

The size of the data disk. Unit: GiB. This parameter is required. Valid values for different disk categories:

-   Valid values when DiskCategory is set to cloud: 5 to 2000.
    
-   Valid values when DiskCategory is set to cloud\_efficiency: 20 to 32768.
    
-   Valid values when DiskCategory is set to cloud\_ssd: 20 to 32768.
    
-   Valid values when DiskCategory is set to cloud\_essd: vary based on the `PerformanceLevel` value.
    
    -   Valid values when PerformanceLevel is set to PL0: 1 to 65536.
    -   Valid values when PerformanceLevel is set to PL1: 20 to 65536.
    -   Valid values when PerformanceLevel is set to PL2: 461 to 65536.
    -   Valid values when PerformanceLevel is set to PL3: 1261 to 65536.
-   Valid values when DiskCategory is set to cloud\_auto: 1 to 65536.
    
-   Valid values when DiskCategory is set to cloud\_essd\_entry: 10 to 32768.
    
-   Valid values when DiskCategory is set to cloud\_regional\_disk\_auto: 10 to 65536.
    
-   Valid values when DiskCategory is set to elastic\_ephemeral\_disk\_standard: 64 to 8192.
    
-   Valid values when DiskCategory is set to elastic\_ephemeral\_disk\_premium: 64 to 8192.
    

If you specify `SnapshotId`, the following limits apply to `SnapshotId` and `Size`:

-   If the size of the snapshot specified by `SnapshotId` is larger than the value of `Size`, the size of the created disk is equal to the size of the snapshot.
-   If the size of the snapshot specified by `SnapshotId` is smaller than the value of `Size`, the size of the created disk is equal to the value of `Size`.

2000

DiskCategory

string

No

The category of the data disk. Valid values for different disk categories:

-   cloud: basic disk
-   cloud\_efficiency: utra disk
-   cloud\_ssd: standard SSD
-   cloud\_essd: ESSD
-   cloud\_auto: ESSD AutoPL disk
-   cloud\_essd\_entry: ESSD Entry disk
-   cloud\_regional\_disk\_auto: Regional ESSD
-   elastic\_ephemeral\_disk\_standard: standard elastic ephemeral disk
-   elastic\_ephemeral\_disk\_premium: premium elastic ephemeral disk

Default value: cloud.

Enumerated values:

-   cloud: basic disk
-   cloud\_efficiency: ultra disk
-   cloud\_ssd: SSD
-   cloud\_auto: ESSD AutoPL disk
-   cloud\_regional\_disk\_auto: Regional ESSD
-   cloud\_essd: ESSD
-   elastic\_ephemeral\_disk\_standard: standard elastic ephemeral disk.
-   cloud\_essd: ESSD
-   elastic\_ephemeral\_disk\_premium: premium elastic ephemeral disk

cloud\_ssd

Description

string

No

The description of the disk. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.

This parameter is left empty by default.

testDescription

Encrypted

boolean

No

Specifies whether to encrypt the disk. Valid values:

-   true
-   false

Default value: false.

false

ClientToken

string

No

The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The **token** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](/help/en/ecs/developer-reference/how-to-ensure-idempotence).

123e4567-e89b-12d3-a456-426655440000

InstanceId

string

No

The ID of the subscription instance to which to attach the subscription disk.

-   If you specify an instance ID, the following parameters are ignored: ResourceGroupId, Tag.N.Key, Tag.N.Value, ClientToken, and KMSKeyId.
-   You cannot specify both ZoneId and InstanceId in a request.

This parameter is empty by default, which indicates that a pay-as-you-go disk is created in the region and zone specified by RegionId and ZoneId.

i-bp18pnlg1ds9rky4\*\*\*\*

ResourceGroupId

string

No

The ID of the resource group to which to add the disk.

rg-bp67acfmxazb4p\*\*\*\*

KMSKeyId

string

No

The ID of the Key Management Service (KMS) key that is used for the disk.

0e478b7a-4262-4802-b8cb-00d3fb40826X

PerformanceLevel

string

No

The performance level of the disk if the disk is an ESSD. Valid values:

-   PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
-   PL1: A single ESSD can deliver up to 50,000 random read/write IOPS.
-   PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
-   PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.

Default value: PL1.

For information about ESSD performance levels, see [ESSDs](/help/en/ecs/user-guide/essds) .

PL1

AdvancedFeatures

string

No

This parameter is not publicly available.

hide

StorageSetId

string

No

The ID of the storage set.

**Note** You cannot specify storage set-related parameters (`StorageSetId` and `StorageSetPartitionNumber`) and the dedicated block storage cluster-related parameter (`StorageClusterId`) at the same time. Otherwise, the operation cannot be called.

ss-bp67acfmxazb4p\*\*\*\*

EncryptAlgorithm

string

No

This parameter is not publicly available.

hide

StorageSetPartitionNumber

integer

No

The number of partitions in the storage set. The value must be greater than or equal to 2 but cannot exceed the quota obtained by calling the [DescribeAccountAttributes](/help/en/ecs/api-describeaccountattributes) operation.

Default value: 2.

3

StorageClusterId

string

No

The ID of the dedicated block storage cluster in which to create the disk. To create a disk in a specific dedicated block storage cluster, you must specify this parameter.

**Note** You can specify the storage set-related parameters (`StorageSetId` and `StorageSetPartitionNumber`) or the dedicated block storage cluster-related parameter (`StorageClusterId`), but not both. If you specify a storage set-related parameter and a dedicated block storage cluster-related parameter in a request, the request fails.

dbsc-j5e1sf2vaf5he8m2\*\*\*\*

MultiAttach

string

No

Specifies whether to enable the multi-attach feature for the disk. Valid values:

-   Disabled
-   Enabled Set the value to `Enabled` only for ESSDs.

Default value: Disabled.

**Note** Disks for which the multi-attach feature is enabled support only the pay-as-you-go billing method. When `MultiAttach` is set to Enabled, you cannot specify `InstanceId`. You can call the [AttachDisk](/help/en/ecs/api-attachdisk) operation to attach disks to instances after the disks are created. Disks for which the multi-attach feature is enabled can be attached only as data disks.

Disabled

Tag

array<object>

No

The tags to add to the disk.

object

No

The tag to add to the disk.

key

string

No

The key of tag N to add to the disk.

**Note** We recommend that you use Tag.N.Key to ensure future compatibility.

Test

Key

string

No

The key of tag N to add to the disk. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with `acs:` or `aliyun`.

TestKey

Value

string

No

The value of tag N to add to the disk. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`.

TestValue

value

string

No

The value of tag N to add to the disk.

**Note** We recommend that you use Tag.N.Value to ensure future compatibility.

Test

Arn

array<object>

No

**Note** This parameter is not publicly available.

object

No

**Note** This parameter is not publicly available.

RoleType

string

No

**Note** This parameter is not publicly available.

hide

Rolearn

string

No

**Note** This parameter is not publicly available.

hide

AssumeRoleFor

long

No

**Note** This parameter is not publicly available.

1000000000

ProvisionedIops

long

No

Specifies the read/write IOPS that is provisioned for the ESSD AutoPL disk. Valid value:

-   Capacity (GiB) <= 3: not configurable
-   Capacity (GiB) >= 4: \[0, min{(1,000

IOPS/GiB × Capacity - Baseline IOPS), 50,000}\]

Baseline performance: max{min{1,800 + 50 × Capacity, 50,000}, 3,000}

**Note** This parameter is available only if you set `DiskCategory` to `cloud_auto`. For more information, see [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks).

40000

BurstingEnabled

boolean

No

Specifies whether to enable the performance burst feature. Valid values:

-   true
-   false

**Note** This parameter is available only if you set `DiskCategory` to `cloud_auto`. For more information, see [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks).

false

## Response parameters

Parameter

Type

Description

Example

object

DiskId

string

The disk ID.

d-bp131n0q38u3a4zi\*\*\*\*

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3\*\*\*\*

OrderId

string

The order ID.

**Note** The order ID is returned only when you create a subscription disk.

20413515388\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "DiskId": "d-bp131n0q38u3a4zi****",
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3****",
  "OrderId": "20413515388****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidSize.ValueNotSupported

The specified parameter Size is not valid.

The specified Size parameter is invalid.

400

InvalidDiskName.Malformed

The specified disk name is wrongly formed.

The disk name is invalid. The name must be 2 to 128 characters in length and start with a letter. It can contain letters, digits, periods (.), underscores (\_), and hyphens (-) and cannot start with http:// or https.

400

InvalidDescription.Malformed

The specified description is wrongly formed.

The resource description is invalid. The description must be 2 to 256 characters in length and cannot start with http:// or https://.

400

MissingParameter

The input parameter either "SnapshotId" or "Size" should be specified.

You must specify at least one of SnapshotId and Size in the parameter.

400

InvalidDiskCategory.NotSupported

The specified disk category is not support.

The specified disk category is not supported.

400

Account.Arrearage

Your account has an outstanding payment.

Your account has overdue payments.

400

InvalidDiskCategory.ValueNotSupported

The specified parameter "DiskCategory" is not valid.

The specified cloud disk type DiskCategory is invalid.

400

InvalidParameter.Conflict

%s

The specified parameter is invalid. Check whether parameter conflicts exist. %s is a variable. An error message is dynamically returned based on call conditions.

400

OperationDenied

The specified Zone is not available or not authorized.

The specified zone is unavailable or you are not authorized to access it.

400

InvalidDiskSize.NotSupported

The specified parameter size is not valid.

\-

400

InvalidDiskSizeOrCategory

The specified disk category or size is invalid.

The specified disk category or size is invalid.

400

InvalidParameter.EncryptedIllegal

The specified parameter Encrypted must be true when kmsKeyId is not empty.

The encryption feature is not enabled after a Key Management Service (KMS) key ID is specified.

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

InvalidParameter.Arns

The specified Arns is not valid.

The Arns parameter is invalid. Please check and pass it again.

400

MissingParameter

The input parameter ZoneId that is mandatory for processing this request is not supplied.

The request did not specify an Availability Zone (ZoneId).

400

InvalidPerformanceLevel.Malformed

The specified parameter PerformanceLevel is not valid.

The specified PerformanceLevel parameter is invalid.

400

InvalidDiskCategory.ConflictSnapshotCategory

The specified disk category conflict with snapshot category.

\-

400

InvalidEncrypted.NotMatchEncryptAlgorithm

The specified parameter Encrypted must be true when EncryptAlgorithm is not empty.

\-

400

InvalidEncrypted.NotMatchKmsKeyId

The specified parameter Encrypted must be true when KmsKeyId is not empty.

\-

400

InvalidEncryptAlgorithm.NotMatchSnapshot

The specified parameter EncryptAlgorithm is different from the encrypt algorithm of the snapshot.

\-

400

InvalidKmsKeyId.NotMatchSnapshot

The specified parameter KmsKeyId is different from the KmsKeyId of the snapshot.

\-

400

InvalidEncryptAlgorithm

The specified parameter EncryptAlgorithm is not valid.

\-

400

InvalidPerformanceLevel.ValueNotSupported

The current ZoneId does not support PL0 of cloud\_essd.

\-

400

InvalidKMSKeyId.NotSymmetric

The specified parameter KmsKeyId must be symmetric.

The KMSKey used for encryption must be a symmetric encryption key.

400

InvalidStorageSetId.NotFound

The specified storage set does not exist.

\-

400

InvalidStorageClusterId.StatusNotSupport

The current status of the dedicated storage cluster cannot create a cloud disk yet.

\-

400

InvalidStorageClusterId.ConflictWithStorageSetId

The specified StorageClusterId is in conflict with storageSetId.

\-

400

InvalidStorageClusterId.ConflictWithInstanceId

The specified StorageClusterId is in conflict with instanceId.

\-

400

InvalidStorageClusterId.CategoryNotMatch

The current dedicated storage cluster cannot create this category of disk.

\-

400

InvalidStorageClusterId.PerformanceLevelNotMatch

The current dedicated storage cluster cannot create this performance level of disk.

\-

400

InvalidStorageClusterId.CapacityNotEnough

The remaining capacity of the current dedicated storage cluster is less than the size of disk.

The remaining capacity of the dedicated block storage cluster to which the disk belongs is insufficient.

400

InvalidCloudBoxZone.EncryptedNotSupported

The cloud box zone does not support creating encrypted disks.

\-

400

InvalidInstance.NotFoundSystemDisk

The specified instance has no system disk.

The specified instance does not have a system disk. Make sure that the instance has a system disk. You can call the DescribeInstances operation to query the details of the instance.

400

ProvisionedIopsForDiskCategoryUnsupported

The specified disk category does not support provisioned iops.

\-

400

InvalidProvisionedIops.LimitExceed

The provisioned iops exceeds the limit.

The filled ProvisionedIops parameter exceeds the limit.

400

BurstingEnabledForDiskCategoryUnsupported

The specified disk category does not support bursting enabled.

\-

400

BurstingEnabledForMultiAttachDiskUnsupported

The multi attach disk does not support bursting enabled.

\-

400

ProvisionedIopsForDiskCategoryRequired

The provisioned iops is required for this disk category.

\-

400

NotSupportSnapshotEncrypted.RegionId

The specified region does not support creating encrypted disks with native snapshot encrypt.

\-

400

NotSupportSnapshotEncrypted.ZoneId

The specified zone does not support creating encrypted disks with native snapshot encrypt.

\-

400

NotSupportSnapshotEncrypted.ShareImage

Shared snapshot creating encrypted disks with native snapshot encrypt is not supported.

When you create encrypted disks based on a shared image, only the encryption key provided by the shared image can be used for these disks and you cannot specify encryption keys for the disks.

400

NotSupport.SnapshotEncryptedAlgorithmConflict

Changing encrypt algorithm with encrypted snapshot is not supported.

\-

400

QuotaExceed.DiskCapacity

The used capacity of disk type has exceeded the quota in the zone, %s.

The capacity of disks that belong to the specified disk category exceeds the quota limit for the zone.

400

InsufficientBalance.AgentAccount

The account balance is insufficient. Please contact your channel partner to recharge in time.

The account balance is insufficient. Contact your customer service representative to add funds to the account in a timely manner.

400

InvalidParam.EncryptedMismatch

Creating encrypted disks with shared encrypted snapshots requires replacing encryption keys.

\-

400

InvalidAccountStatus.NotEnoughBalance

Your account does not have enough balance, please contact your partner to increase your account balance.

\-

400

InvalidParameter.KmsNotEnabled

Failed to perform this operation because KMS is not activated.

You need to activate KMS key management service.

400

InvalidParameter.Encrypted.KmsNotEnable

Failed to perform this operation because KMS is not activated.

You need to activate KMS key escrow service.

400

InvalidParam.EncryptedMismatch

Creating encrypted disks with shared encrypted image requires replacing encryption keys.

You must change the encryption key to create a cloud disk after sharing an encrypted image.

400

InvalidZoneId.DiskCategoryUnsupported

The specified disk category does not support setting the ZoneId.

The specified disk category does not support setting the ZoneId.

400

InvalidStorageSetId.DiskCategoryUnsupported

The specified disk category does not support setting the StorageSetId.

The specified disk category does not support setting the StorageSetId.

400

InvalidStorageClusterId.DiskCategoryUnsupported

The specified disk category does not support setting the StorageClusterId.

The specified disk category does not support setting the StorageClusterId.

400

InvalidParameter.Encrypted

Creating non-encrypted disks with encrypted snapshots is not supported.

Creating a non-encrypted disk with an encrypted snapshot is not supported.

400

EncryptedOption.Conflict

Disk encryption attributes conflict.

Disk encryption attributes conflict.

400

InvalidDataDiskCategory.NotSupported

Specified disk category is not supported.

The specified disk category is not supported.

400

InvalidBurstingEnabled.DiskSizeTooSmall

The disk size must be greater than 3 GiB to enable burst.

The disk size must be greater than 3 GiB to enable burst.

400

OperationDenied.RiskIssue

Your action is denied by risk issue, please contact customer service.

\-

400

InvalidDiskSize.ExceedsMultiAttachLimit

The specified disk size exceeds the maximum limit 65536 for enabling multi-attach.

The specified disk size exceeds the maximum limit 65536 for enabling multi-attach.

403

InstanceDiskCategoryLimitExceed

The total size of specified disk category in an instance exceeds.

The total size of disks of the specified category exceeds the maximum capacity allowed for an instance.

403

InvalidSnapshot.NotReady

The specified snapshot creation is not completed yet.

The specified snapshot is not created.

403

InvalidSnapshot.TooOld

This operation is forbidden because the specified snapshot is created before 2013-07-15.

The disk cannot be re-initialized because the snapshot used to create the disk was created before July 15, 2013.

403

InvalidSnapshot.TooLarge

The capacity of snapshot exceeds 2000GB.

The snapshot size exceeds 2,000 GB.

403

OperationDenied

The specified snapshot is not allowed to create disk.

The specified snapshot cannot be used to create disks.

403

QuotaExceed.PortableCloudDisk

The quota of portable cloud disk exceeds.

The maximum number of removable disks has been reached.

403

InvalidDiskCategory.ValueUnauthorized

The disk category is not authorized.

You need permission to operate this disk category.

403

InvalidSnapshotId.NotReady

The specified snapshot has not completed yet.

The specified snapshot is being created.

403

InvalidSnapshotId.NotDataDiskSnapshot

The specified snapshot is system disk snapshot.

The specified snapshot is a system disk snapshot.

403

InvalidDiskSize.TooSmall

Specified disk size is less than the size of snapshot.

The specified disk size is smaller than the snapshot size.

403

OperationDenied

The type of the disk does not support the operation.

The disk category does not support the specified operation.

403

InvalidDiskSize.NotSupported

Disk size is not supported.

The disk size is invalid.

403

InvalidAccountStatus.NotEnoughBalance

Your account does not have enough balance.

Your account balance is insufficient. Add funds to your account and try again.

403

InvalidAccountStatus.SnapshotServiceUnavailable

Snapshot service has not been opened yet.

The operation is not supported while the snapshot service is not activated.

403

InvalidPayMethod

The specified pay method is not valid.

The specified payment method is invalid.

403

InvalidDiskCategory.NotSupported

The specified disk category is not supported.

The specified disk category does not support this operation.

403

InvalidDiskSize.NotSupported

The specified disk size is not supported.

\-

403

UserNotInTheWhiteList

The user is not in disk white list.

You are not authorized to manage the disk. Try again when you are authorized.

403

QuotaExceed.PostPaidDisk

Living postPaid disks quota exceeded.

\-

403

InvalidRegion.NotSupport

The specified region does not support byok.

The bring your own key (BYOK) feature is not supported in the region.

403

UserNotInTheWhiteList

The user is not in byok white list.

You are not authorized to use the bring your own key (BYOK) feature. Try again when you are authorized.

403

InvalidParameter.KMSKeyId.KMSUnauthorized

ECS service have no right to access your KMS.

ECS is not authorized to access your KMS resources.

403

SecurityRisk.3DVerification

We have detected a security risk with your default credit or debit card. Please proceed with verification via the link in your email.

\-

403

InvalidParameter.AdvancedFeatures

The specified parameter AdvancedFeatures is not valid.

\-

403

UserNotInTheWhiteList

The user is not in Arns white list.

The user is not in the Arn related parameter action list.

403

InvalidInstanceChargeType.ValueNotSupported

The InstanceChargeType does not support this action.

\-

403

InvalidStatus.Upgrading

The instance is upgrading; please try again later.

The instance is being upgraded. Try again later.

403

InvalidParam.ZoneIdAndInstanceId.Conflict

The specified parameter 'ZoneId' and 'InstanceId' are not blank at the same time.

\-

403

OperationDenied.PerformanceLevelNotMatch

The specified PerformanceLevel and Size do not match.

\-

403

InvalidStorageSetName.Malformed

Specified parameter StorageSetName is not valid.

\-

403

InvalidDescription.Malformed

Specified parameter Description is not valid.

\-

403

InvalidMaxPartitionNumber.Malformed

Specified parameter MaxPartitionNumber is not valid.

\-

403

InvalidParameter.StorageSetPartitionNumber

Specified parameter StorageSetPartitionNumber is not valid.

\-

403

InvalidParameter.StorageSetId

Specified parameter StorageSetId is not valid.

\-

403

InvalidParameter.StorageSetZoneId

Specified parameter StorageSetZoneId is not valid.

\-

403

QuotaExceed.Tags

%s

The number of specified tags exceeds the upper limit. %s is a variable. An error message is dynamically returned based on call conditions.

403

QuotaExceeded.PostpaidDataDiskCapacity

The quota of postpaid data disk capacity exceeds.

The used capacity of the pay-as-you-go disk reaches the quota limit.

403

InvalidRegionId.NotSupportEncryptAlgorithm

The current region does not support creating encrypted disks with EncryptAlgorithm.

\-

403

InvalidDiskSize.TooSmall

Specified disk size is too small when choosing PL0 of cloud\_essd.

\-

403

OperationDenied.SnapshotNotAllowed

The specified snapshot is not allowed to create disk.

The specified snapshot cannot be used to create disks.

403

LastTokenProcessing

The last token request is processing.

A token request is being processed. Try again later.

403

InvalidParameter.MultiAttach

The specified param MultiAttach is not valid.

The specified MultiAttach parameter is invalid.

403

InvalidParameter.MultiAttachAndInstanceIdConflict

The parameter MultiAttach and InstanceId are conflict.

The MultiAttach and InstanceId parameters cannot be both specified.

403

InvalidParameter.DiskCategoryAndMultiAttachConflict

The specified disk category does not support multi attach set.

The MultiAttach parameter is not supported by Shared Block Storage devices.

403

InvalidParameter.DiskCategoryAndMultiAttachNotMatch

The specified disk category does not support multi attach enabled.

The specified disk category does not support the multi-attach feature.

403

OperationDenied.ZoneNotSupportMultiAttachDisk

The specified zone does support multi attach disk.

Disks for which the multi-attach feature is enabled cannot be created in the specified zone.

403

UserNotInTheWhiteList

User is not in multi attach disk white list, apply through the work order.

\-

403

InvalidAccountStatus.CouponAmountNotEnough

Your coupon balance is insufficient or has expired.

Your coupon balance is insufficient or your coupons have expired.

403

InvalidOperation.CreateFromSnapshotUnsupported

The elastic ephemeral disk cannot be created from snapshot.

The elastic ephemeral disk cannot be created from snapshot.

403

NotSupportSnapshotEncrypted.DiskCategory

The specified disk category does not support creating encrypted system disks or creating encrypted data disks from snapshots. Check the DiskCategory or Encrypted parameter, or check your account for default encryption settings.

This disk type does not support creating encrypted system disks or creating encrypted data disks in snapshot mode. Please check the disk type and encryption parameters you entered, or check whether you have configured the default encryption configuration for account cloud disks.

403

InvalidDiskCategory.ValueUnauthorized

The specified DiskCategory is not authorized.

The disk type is unauthorized.

403

InvalidParameter.DataEncryptedKeyCreateFailed

Create kms data encrypted key fail. If you need further assistance, you can contact the KMS Technical Support.

Failed to create a data key using the KMS master key. Please contact the KMS attendant for further troubleshooting.

403

Zone.NotOnSale

The resource in the specified zone is no longer available for sale. Please try other regions and zones.

\-

403

RegionUnauthorized

You are not authorized to perform the operation in the specified region.

You are not authorized to perform the operation in the specified region.

403

InvalidDataDiskCategory.ValueNotSupported

The specified Category of Data Disk is not valid.

The specified data disk type is not supported.

403

InvalidParameter.EncryptedNotSupported

The current disk category does not support encryption. If encryption is required, please switch to a different disk category.

The current disk category does not support encryption. If encryption is required, please switch to a different disk category.

403

InvalidDataDiskSize.ValueNotSupported

The specified disk size is beyond the permitted range, or the snapshot capacity exceeds the size limit for the specified disk category.

The specified disk size is beyond the permitted range, or the snapshot capacity exceeds the size limit for the specified disk category.

403

InvalidParameter.KMSKeyId.CMKNotEnabled

The CMK (Customer Master Key) must be in an active state.

The CMK (Customer Master Key) must be in an active state.

403

InvalidParameter.KMSKeyId.CMKUnauthorized

The CMK(Customer Master Key) lacks authorization to add tags to the ECS service.

The CMK(Customer Master Key) lacks authorization to add tags to the ECS service.

403

InvalidEncrypted.NotMatchSnapshot

The specified parameter Encrypted must be set to true when creating disks with encrypted snapshots.

When you create a disk using an encrypted snapshot, the specified parameter Encrypted must be set to true.

403

InvalidEncrypted.NotMatchDiskDefaultEncryption

Enabling disk default encryption prevents the creation of non-encrypted disks.

After the default encryption of the cloud disk account is enabled, an unencrypted disk cannot be created.

404

InvalidRegionId.NotFound

The specified RegionId does not exist.

The specified region ID does not exist.

404

InvalidZoneId.NotFound

The specified zone does not exist.

The specified zone ID does not exist.

404

InvalidSnapshotId.NotFound

The specified SnapshotId does not exist.

The specified snapshot ID does not exist.

404

InvalidResourceGroup.NotFound

The ResourceGroup provided does not exist in our records.

The specified resource group does not exist.

404

InvalidRegionId.NotFound

The RegionId provided does not exist in our records.

The RegionId provided does not exist

404

InvalidParameter.KMSKeyId.NotFound

The specified KMSKeyId does not exist.

The specified KMSKeyId parameter does not exist.

404

InvalidInstanceId.NotFound

The InstanceId provided does not exist in our records.

The specified instance does not exist. Check whether the instance ID is correct.

404

InvalidInstanceId.NotFound

The specified InstanceId does not exist.

The specified instance does not exist.

404

InvalidStorageClusterId.NotExist

The specified StorageClusterId does not exist in current region.

\-

500

InternalError

The request processing has failed due to some unknown error.

An internal error has occurred. Try again later.

500

InternalError

The request processing has failed due to some unknown error, exception or failure.

An internal error has occurred. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2026-01-13

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateDisk?updateTime=2026-01-13#workbench-doc-change-demo)

2025-12-29

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateDisk?updateTime=2025-12-29#workbench-doc-change-demo)

2025-12-25

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateDisk?updateTime=2025-12-25#workbench-doc-change-demo)

2025-10-17

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateDisk?updateTime=2025-10-17#workbench-doc-change-demo)

2025-05-22

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateDisk?updateTime=2025-05-22#workbench-doc-change-demo)

2025-05-08

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateDisk?updateTime=2025-05-08#workbench-doc-change-demo)

2025-03-19

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateDisk?updateTime=2025-03-19#workbench-doc-change-demo)

2025-02-27

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateDisk?updateTime=2025-02-27#workbench-doc-change-demo)

2025-01-17

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateDisk?updateTime=2025-01-17#workbench-doc-change-demo)

2024-12-30

API Description Update. The API operation is not deprecated.. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateDisk?updateTime=2024-12-30#workbench-doc-change-demo)

2024-12-09

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateDisk?updateTime=2024-12-09#workbench-doc-change-demo)

2024-07-12

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateDisk?updateTime=2024-07-12#workbench-doc-change-demo)

2024-06-27

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateDisk?updateTime=2024-06-27#workbench-doc-change-demo)

2024-05-08

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateDisk?updateTime=2024-05-08#workbench-doc-change-demo)

2024-03-21

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateDisk?updateTime=2024-03-21#workbench-doc-change-demo)

2024-01-15

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateDisk?updateTime=2024-01-15#workbench-doc-change-demo)

2023-11-24

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateDisk?updateTime=2023-11-24#workbench-doc-change-demo)

2023-11-21

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateDisk?updateTime=2023-11-21#workbench-doc-change-demo)

2023-10-09

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateDisk?updateTime=2023-10-09#workbench-doc-change-demo)

2023-08-29

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateDisk?updateTime=2023-08-29#workbench-doc-change-demo)
