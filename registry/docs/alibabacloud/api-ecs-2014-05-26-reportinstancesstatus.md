Reports an exception on Elastic Compute Service (ECS) instances. You can report the same exception on multiple ECS instances or on multiple disks of an ECS instance.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ReportInstancesStatus)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ReportInstancesStatus)

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

ecs:ReportInstancesStatus

get

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

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

The region ID of the instance. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

Reason

string

No

The impact of the exception on the instance. Valid values:

-   instance-hang: The instance is unavailable or cannot be connected.
-   instance-stuck-in-status: The instance is stuck in a state such as Starting or Stopping.
-   abnormal-network: The instance has a network exception.
-   abnormal-local-disk: A local disk attached to the instance has an exception.
-   abnormal-cloud-disk: A disk or a Shared Block Storage device attached to the instance has an exception.
-   others: other exception types. If the impact is not of the preceding types, you can set `Reason` to others and specify the `Description` parameter.

abnormal-local-disk

Description

string

Yes

The description of the exception.

The local disk is unavailable, the mount point is inaccessible, or files cannot be loaded.

StartTime

string

No

The start time of the instance exception. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

2017-11-30T06:32:31Z

EndTime

string

No

The end time of the instance exception. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

2017-11-31T06:32:31Z

IssueCategory

string

No

The category of the exception. This parameter is applicable only to ECS bare metal instances. Valid values:

-   hardware-cpu-error: CPU failure
-   hardware-motherboard-error: motherboard failure
-   hardware-mem-error: memory failure
-   hardware-power-error: power failure
-   hardware-disk-error: disk failure
-   hardware-networkcard-error: network interface controller (NIC) failure
-   hardware-raidcard-error: SAS/RAID card failure
-   hardware-fan-error: fan failure
-   others: other failures

hardware-cpu-error

InstanceId

array

Yes

The IDs of instances. You can specify up to 100 instance IDs in a single request.

string

Yes

The ID of instance N.

i-bp165p6xk2tmdhj0\*\*\*\*

DiskId

array

No

The IDs of disks on an instance that have the exception. You can specify up to 100 disk IDs in a single request. If you are using an ECS bare metal instance, enter the serial numbers of disks on the instance.

**Note** This parameter is required when the value of the `Reason` parameter is `abnormal-local-disk` or `abnormal-cloud-disk` or when the value of the `IssueCategory` parameter is `hardware-disk-error`.

string

No

The ID of disk N.

d-bp1aeljlfad7x6u1\*\*\*\*

Device

array

No

The device names of disks on an instance that have the exception. You can specify to 100 device names in a single request.

If you are using an ECS bare metal instance, enter the slot numbers of disks on the instance.

**Note** For ECS bare metal instances, this parameter is required when the value of the `Reason` parameter is `abnormal-local-disk` or `abnormal-cloud-disk` or when the value of the `IssueCategory` parameter is `hardware-disk-error`.

string

No

The device name of disk N.

/dev/xvdb

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

403

InvalidParameter

%s

The specified parameter is invalid.

403

InstanceIdLimitExceeded

%s

More than 100 instance IDs are specified.

403

DiskIdLimitExceeded

%s

More than 100 disk IDs are specified.

403

InvalidInstanceId.NotFound

%s

The specified instance does not exist. Check whether the InstanceId parameter is valid.

404

MissingParameter

%s

A parameter is not specified.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-20

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ReportInstancesStatus?updateTime=2025-03-20#workbench-doc-change-demo)
