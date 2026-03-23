Modifies the name, description, release behavior with ECS instance, snapshot deletion on disk removal, automatic snapshot policy feature, and performance burst feature for one or more block storage devices.

## Operation description

You can use `DiskId` to specify a block storage device and modify the attributes of the device, such as the name and description of the device and whether to release the device together with the associated instance. You can use `DiskIds.N` to specify multiple block storage devices and batch modify the attributes of the devices.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyDiskAttribute)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyDiskAttribute)

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

ecs:ModifyDiskAttribute

update

\*Disk

`acs:ecs:{#regionId}:{#accountId}:disk/{#diskId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

DiskId

string

No

The ID of the disk whose attributes you want to modify.

**Note** You can specify `DiskId` or `DiskIds.N`, but not both.

d-bp1famypsnar20bv\*\*\*\*

DiskName

string

No

The name of the disk. The name must be 2 to 128 characters in length and can contain Unicode characters under the Decimal Number category and the categories whose names contain Letter. The name can also contain colons (:), underscores (\_), periods (.), and hyphens (-).

MyDiskName

Description

string

No

The description of the disk. The description must be 2 to 256 characters in length. It cannot start with `http://` or `https://`.

TestDescription

DeleteWithInstance

boolean

No

Specifies whether to release the disk together with the associated instance. This parameter is empty by default, which indicates that the current value remains unchanged.

An error is returned if you set `DeleteWithInstance` to `false` in one of the following cases:

-   The disk is a local disk.
-   The disk is a basic disk and is not removable. If the Portable attribute of a disk is set to false, the disk is not removable.

\*\*

**Warning** If you set DeleteWithInstance to false and the instance to which the disk is attached is locked for security reasons, the DeleteWithInstance attribute of the disk is ignored and the disk is released together with the instance. If "LockReason" : "security" is displayed in the response when you query information about an instance, the instance is locked for security reasons.

false

DeleteAutoSnapshot

boolean

No

Specifies whether to delete the automatic snapshots of the disk when the disk is released. Valid values:

-   true
-   false

This parameter is empty by default, which indicates that the current value remains unchanged.

false

EnableAutoSnapshot

boolean

No

Specifies whether to enable the automatic snapshot policy feature. Valid values:

-   true: enables the automatic snapshot policy feature for the cloud disk.
-   false: disables the automatic snapshot policy feature for the cloud disk.

This parameter is empty by default, which indicates that the current value remains unchanged.

**Note** This parameter is deprecated. By default, the automatic snapshot policy feature is enabled for cloud disks. You only need to apply an automatic snapshot policy to a cloud disk before you can use the automatic snapshot policy.

true

RegionId

string

Yes

The region ID of the command. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent list of regions.

cn-hangzhou

DiskIds

array

No

The IDs of the disks whose attributes you want to modify. Valid values of N: 0 to 100.

**Note** You can specify `DiskId` or `DiskIds.N`, but not both.

string

No

The ID of disk N. Valid values of N: 0 to 100.

**Note** You can specify `DiskId` or `DiskIds.N`, but not both.

d-bp1famypsnar20bv\*\*\*\*

BurstingEnabled

boolean

No

Specifies whether to enable performance burst for the disk if the disk supports performance burst. Valid values:

-   true
-   false

**Note** An error is reported if you specify this parameter for a disk that does not support performance burst.

false

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

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

InvalidDiskName.Malformed

The specified disk name is wrongly formed.

The disk name is invalid. The name must be 2 to 128 characters in length and start with a letter. It can contain letters, digits, periods (.), underscores (\_), and hyphens (-) and cannot start with http:// or https.

400

NoAttributeToModify

No attribute to be modified in this request.

No attributes are modified.

400

IncompleteParamter

Some fields can not be null in this request.

Some required parameters are not specified.

400

InvalidRegionId.MalFormed

The specified RegionId is not valid.

The specified region does not exist.

400

MissingParameter.DiskIdOrDiskIds

Specified parameter DiskId or DiskIds is missing.

\-

400

ParameterConflict.DiskIdAndDiskIds

Specified parameter DiskId and DiskIds conflict, only one can be chosen.

\-

400

BurstingEnabledForDiskCategoryUnsupported

The specified disk category does not support bursting enabled.

\-

400

BurstingEnabledForMultiAttachDiskUnsupported

The multi attach disk does not support bursting enabled.

\-

400

BurstingEnabledForModifyingDiskUnsupported

The modifying disk does not support bursting enabled.

\-

400

InvalidBurstingEnabled.DiskSizeTooSmall

The disk size must be greater than 3 GiB to enable burst.

The disk size must be greater than 3 GiB to enable burst.

403

QuotaExceed.Snapshot

The snapshot quota exceeds.

The maximum number of snapshots has been reached. Delete snapshots that are no longer needed and try again.

403

DiskNotPortable

The specified disk is not a portable disk.

The specified disk is not removable.

403

IncorrectDiskStatus

The operation is not supported in this status.

The disk is in a state that does not support the current operation. Make sure that the disk is available and that your account has no overdue payments.

403

UserNotInTheWhiteList

The user is not in disk white list.

You are not authorized to manage the disk. Try again when you are authorized.

403

DeleteWithInstance.Conflict

The specified image is from the image market, you cannot set DeleteWithInstance attribute to false.

\-

403

DeleteWithInstance.Conflict

Multi attach disk cannot be set to DeleteWithInstance attribute.

Disks for which the multi-attach feature is enabled do not support the DeleteWithInstance attribute.

404

InvalidDiskId.NotFound

The specified disk does not exist.

The specified disk does not exist. Check whether the disk ID is correct.

404

InvalidDescription.Malformed

The specified description is wrongly formed.

The resource description is invalid. The description must be 2 to 256 characters in length and cannot start with http:// or https://.

404

InvalidInstanceId.NotFound

Specified attached instance does not exist.

The specified instance does not exist. Check whether the instance ID is correct.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-01-17

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyDiskAttribute?updateTime=2025-01-17#workbench-doc-change-demo)

2024-12-04

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyDiskAttribute?updateTime=2024-12-04#workbench-doc-change-demo)

2023-08-25

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyDiskAttribute?updateTime=2023-08-25#workbench-doc-change-demo)
