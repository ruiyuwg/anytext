Queries the full status information of one or more Elastic Compute Service (ECS) instances. The full status information includes the instance status and the status of instance system events. The instance status is the lifecycle status of instances. The status of instance system events is the health status of maintenance events.

## Operation description

## [](#usage-notes)[](#)Usage notes

The response includes the instance status and the instance system events that are in the Scheduled state.

You can specify a period of time to query events that occurred within the period of time.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeInstancesFullStatus)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeInstancesFullStatus)

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

ecs:DescribeInstancesFullStatus

list

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

The region ID of the instance. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

Status

string

No

The lifecycle status of the instance. Valid values:

-   Starting
-   Running
-   Stopped

Running

HealthStatus

string

No

The health status of the instance. Valid values:

-   Impaired
-   Warning: The instance performance may be degraded due to maintenance or technical issues.
-   Maintaining
-   Initializing
-   InsufficientData
-   NotApplicable

All the values are case-sensitive.

Maintaining

EventType

string

No

The type of the system event. This parameter is valid only when InstanceEventType.N is not specified. Valid values:

-   SystemMaintenance.Reboot: The instance is restarted due to system maintenance.
-   SystemFailure.Reboot: The instance is restarted due to a system failure.
-   InstanceFailure.Reboot: The instance is restarted due to an instance failure.
-   InstanceExpiration.Stop: The subscription instance is stopped due to expiration.
-   InstanceExpiration.Delete: The subscription instance is released due to expiration.
-   AccountUnbalanced.Stop: The pay-as-you-go instance is stopped due to an overdue payment.
-   AccountUnbalanced.Delete: The pay-as-you-go instance is released due to an overdue payment.

InstanceExpiration.Stop

NotBefore.Start

string

No

The beginning of the time range during which O&M tasks related to scheduled system events are executed. Specify the time in the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

2017-12-07T00:00:00Z

NotBefore.End

string

No

The end of the time range during which O&M tasks related to scheduled system events are executed. Specify the time in the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

2017-11-30T00:00:00Z

EventPublishTime.Start

string

No

The beginning of the time range during which system events are published. Specify the time in the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

2017-11-30T00:00:00Z

EventPublishTime.End

string

No

The end of the time range during which system events are published. Specify the time in the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

2017-12-07T00:00:00Z

PageNumber

integer

No

The page number. The value must be a positive integer.

Default value: 1.

1

PageSize

integer

No

The number of entries per page. Valid values: 1 to 100.

Default value: 10.

10

InstanceId

array

No

The IDs of the instances. You can specify up to 100 instance IDs in a single request.

string

No

The ID of instance N.

i-bp67acfmxazb4p\*\*\*\*

EventId

array

No

The IDs of the system events. You can specify up to 100 event IDs in a single request.

string

No

The ID of the system event.

e-bp1hygp5b04o56l0\*\*\*\*

InstanceEventType

array

No

The types of system events. You can specify up to 30 event types in a single request.

string

No

The type of the system event. Valid values:

-   SystemMaintenance.Reboot: The instance is restarted due to system maintenance.
-   SystemMaintenance.Redeploy: The instance is redeployed due to system maintenance.
-   SystemFailure.Reboot: The instance is restarted due to a system error.
-   SystemFailure.Redeploy: The instance is redeployed due to a system error.
-   SystemFailure.Delete: The instance is released due to an instance creation failure.
-   InstanceFailure.Reboot: The instance is restarted due to an instance error.
-   InstanceExpiration.Stop: The subscription instance is stopped due to expiration.
-   InstanceExpiration.Delete: The subscription instance is released due to expiration.
-   AccountUnbalanced.Stop: The pay-as-you-go instance is stopped due to an overdue payment.
-   AccountUnbalanced.Delete: The pay-as-you-go instance is released due to an overdue payment.

**Note** For more information, see [Overview](/help/en/ecs/user-guide/overview-of-ecs-system-events) . The values of this parameter are applicable only to instance system events, but not to disk system events.

SystemMaintenance.Reboot

## Response parameters

Parameter

Type

Description

Example

object

PageSize

integer

The number of entries per page.

1

RequestId

string

The ID of the request.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

PageNumber

integer

The page number.

1

TotalCount

integer

The total number of entries returned.

2

InstanceFullStatusSet

array<object>

The queried instances.

**Note** If no instances exist, this parameter is empty.

InstanceFullStatusType

object

InstanceId

string

The instance ID.

i-bp67acfmxazb4p\*\*\*\*

ScheduledSystemEventSet

array<object>

The system events that are in the Scheduled or Inquiring state.

ScheduledSystemEventType

object

EventPublishTime

string

The time when the system event was published. The time is displayed in UTC.

2017-11-30T06:32:31Z

EventId

string

The system event ID.

e-bp1hygp5b04o56l0\*\*\*\*

NotBefore

string

The scheduled time at which to execute the O&M task related to the system event. The time is displayed in UTC.

2017-12-07T00:00:00Z

ImpactLevel

string

The impact level of the system event.

**Note** If the user is not in a whitelist, this parameter is empty.

100

Reason

string

The reason why the system event was scheduled.

**Note** If the exception cause is not detected, this parameter is empty.

A simulated event.

EventCycleStatus

object

The state of the system event.

Name

string

The name of the system event state.

Scheduled

Code

integer

The code of the system event state.

24

EventType

object

The type of the system event.

Name

string

The name of the system event type.

SystemMaintenance.Reboot

Code

integer

The code of the system event type.

1

ExtendedAttribute

object

The extended attributes of system events generated for instances that have local disks attached.

The return values vary based on the system event type.

If the system event type is not one of the following types, this parameter is empty:

-   SystemMaintenance.StopAndRepair
-   SystemMaintenance.CleanInactiveDisks
-   SecurityPunish.Locked
-   SecurityPunish.WebsiteBanned
-   SystemUpgrade.Migrate
-   SystemMaintenance.RebootAndIsolateErrorDisk
-   SystemMaintenance.RebootAndReInitErrorDisk
-   SystemMaintenance.ReInitErrorDisk
-   SystemMaintenance.IsolateErrorDisk

Device

string

The device name of the local disk.

/dev/vdb

DiskId

string

The ID of the local disk.

d-bp67acfmxazb4p\*\*\*\*

InactiveDisks

array<object>

The inactive disks that have been released and must be cleared.

InactiveDisk

object

CreationTime

string

The time when the disk was created. The time follows the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.

2018-07-27T13:53:25Z

DeviceSize

string

The size of the disk. Unit: GiB.

80

DeviceCategory

string

The category of the disk. Valid values:

-   cloud: basic disk
-   cloud\_efficiency: ultra disk
-   cloud\_ssd: standard SSD
-   cloud\_essd: Enterprise SSD (ESSD)
-   local\_ssd\_pro: I/O-intensive local disk
-   local\_hdd\_pro: throughput-intensive local disk
-   ephemeral: retired local disk
-   ephemeral\_ssd: retired local SSD

cloud\_ssd

DeviceType

string

The type of the disk. Valid values:

-   system
-   data

system

ReleaseTime

string

The time when the disk was released. The time follows the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.

2019-07-27T13:53:25Z

Status

object

The lifecycle state of the instance.

Name

string

The name of the instance lifecycle state.

Running

Code

integer

The code of the instance lifecycle state.

1

HealthStatus

object

The health state of the instance.

Name

string

The name of the health state.

Warning

Code

integer

The code of the health state.

64

## Examples

Sample success responses

`JSON`format

```
{
  "PageSize": 1,
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "PageNumber": 1,
  "TotalCount": 2,
  "InstanceFullStatusSet": {
    "InstanceFullStatusType": [
      {
        "InstanceId": "i-bp67acfmxazb4p****",
        "ScheduledSystemEventSet": {
          "ScheduledSystemEventType": [
            {
              "EventPublishTime": "2017-11-30T06:32:31Z",
              "EventId": "e-bp1hygp5b04o56l0****",
              "NotBefore": "2017-12-07T00:00:00Z",
              "ImpactLevel": 100,
              "Reason": "A simulated event.",
              "EventCycleStatus": {
                "Name": "Scheduled",
                "Code": 24
              },
              "EventType": {
                "Name": "SystemMaintenance.Reboot",
                "Code": 1
              },
              "ExtendedAttribute": {
                "Device": "/dev/vdb",
                "DiskId": "d-bp67acfmxazb4p****",
                "InactiveDisks": {
                  "InactiveDisk": [
                    {
                      "CreationTime": "2018-07-27T13:53:25Z",
                      "DeviceSize": 80,
                      "DeviceCategory": "cloud_ssd",
                      "DeviceType": "system",
                      "ReleaseTime": "2019-07-27T13:53:25Z"
                    }
                  ]
                }
              }
            }
          ]
        },
        "Status": {
          "Name": "Running",
          "Code": 1
        },
        "HealthStatus": {
          "Name": "Warning",
          "Code": 64
        }
      }
    ]
  }
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

InvalidParameter.TimeEndBeforeStart

%s

The specified parameter is invalid. Make sure that the end time is later than the start time.

403

OperationDenied.NotInWhiteList

%s

You are not authorized to perform this operation. Try again when you are authorized.

403

InstanceIdLimitExceeded

%s

More than 100 instance IDs are specified.

403

EventIdLimitExceeded

%s

More than 100 simulated event IDs are specified.

404

MissingParameter

%s

A parameter is not specified.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-05

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeInstancesFullStatus?updateTime=2024-12-05#workbench-doc-change-demo)

2024-12-03

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeInstancesFullStatus?updateTime=2024-12-03#workbench-doc-change-demo)
