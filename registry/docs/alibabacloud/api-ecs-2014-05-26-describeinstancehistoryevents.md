Queries the system events of Elastic Compute Service (ECS) instances. When you call this operation, you can specify parameters, such as InstanceId and EventType, in the request. By default, non-active system events are queried.

## Operation description

-   You can query system events that were completed within the last 30 days. No limits apply to the time range for querying uncompleted system events.
-   If you do not specify the EventCycleStatus or InstanceEventCycleStatus parameter, only system events in the Avoidated, Executed, Canceled, or Failed state are included in the query results by default.
-   You can also specify the InstanceEventCycleStatus parameter in the request to query the system events that are in the Scheduled, Executing, or Inquiring state.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeInstanceHistoryEvents)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeInstanceHistoryEvents)

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

ecs:DescribeInstanceHistoryEvents

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

RegionId

string

Yes

The region ID of the resource. You can call [DescribeRegions](/help/en/ecs/api-regions-describeregions) to query the most recent region list.

cn-hangzhou

InstanceId

string

No

The ID of the instance. If this parameter is not specified, the system events of all instances in the specified region are queried.

i-uf678mass4zvr9n1\*\*\*\*

EventCycleStatus

string

No

The lifecycle state of the system event. This parameter takes effect only when InstanceEventCycleStatus.N is not specified. Valid values:

-   Scheduled
-   Avoided
-   Executing
-   Executed
-   Canceled
-   Failed
-   Inquiring

Executed

EventType

string

No

The type of the system event. This parameter takes effect only when InstanceEventType.N is not specified. Valid values:

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

NotBefore.Start

string

No

The earliest scheduled start time for the system event. Specify the time in the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

2017-11-30T06:32:31Z

NotBefore.End

string

No

The latest scheduled end time for the system event. Specify the time in the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

2017-12-01T06:32:31Z

EventPublishTime.Start

string

No

The beginning of the time range in which to query published system events. Specify the time in the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

2017-11-30T06:32:31Z

EventPublishTime.End

string

No

The end of the time range in which to query published system events. Specify the time in the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

2017-12-01T06:32:31Z

ImpactLevel

string

No

**Note** This parameter is not publicly available.

null

PageNumber

integer

No

**Note** This parameter is deprecated. We recommend that you specify MaxResults or NextToken for a paged query.

1

PageSize

integer

No

**Note** This parameter is deprecated. We recommend that you specify MaxResults or NextToken for a paged query.

10

ResourceType

string

No

The type of the resource. Valid values:

-   instance: ECS instance
-   ddh: dedicated host
-   managehost: physical machine in a smart hosting pool

Default value: instance.

instance

EventId

array

No

The ID of system event N. Valid values of N: 1 to 100. You can repeat this parameter to pass multiple values.

string

No

The ID of system event N. Valid values of N: 1 to 100. You can repeat this parameter to pass multiple values.

e-uf64yvznlao4jl2c\*\*\*\*

InstanceEventCycleStatus

array

No

The lifecycle state of system event N. Valid values of N: 1 to 7. You can repeat this parameter to pass multiple values. Valid values:

-   Scheduled
-   Avoided
-   Executing
-   Executed
-   Canceled
-   Failed
-   Inquiring

string

No

The lifecycle state of system event N. Valid values of N: 1 to 7. You can repeat this parameter to pass multiple values. Valid values:

-   Scheduled
-   Avoided
-   Executing
-   Executed
-   Canceled
-   Failed
-   Inquiring

Executed

InstanceEventType

array

No

The type of system event N. Valid values of N: 1 to 30. You can repeat this parameter to pass multiple values. Valid values:

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

string

No

The type of system event N. Valid values of N: 1 to 30. You can repeat this parameter to pass multiple values. Valid values:

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

ResourceId

array

No

The ID of resource N. Valid values of N: 1 to 100. You can repeat this parameter to pass multiple values. Valid values:

-   When `ResourceType` is set to instance, ResourceId.N specifies the ID of instance N.
-   When `ResourceType` is set to ddh, ResourceId.N specifies the ID of dedicated host N.
-   When `ResourceType` is set to managedhost, ResourceId.N specifies the ID of physical machine N from a smart hosting pool.

If this parameter is not specified, the system events of all resources of the type specified by `ResourceType` in the region specified by `RegionId` are queried.

**Note** We recommend that you use `ResourceId.N` to specify one or more resource IDs. If you specify both `ResourceId.N` and `InstanceId`, `ResourceId.N` takes precedence by default.

string

No

The ID of resource N. Valid values of N: 1 to 100. You can repeat this parameter to pass multiple values. Valid values:

-   When `ResourceType` is set to instance, ResourceId.N specifies the ID of instance N.
-   When `ResourceType` is set to ddh, ResourceId.N specifies the ID of dedicated host N.
-   When `ResourceType` is set to managedhost, ResourceId.N specifies the ID of physical machine N from a smart hosting pool.

If this parameter is not specified, the system events of all resources of the type specified by `ResourceType` in the region specified by `RegionId` are queried.

**Note** We recommend that you use `ResourceId.N` to specify one or more resource IDs. If you specify both `ResourceId.N` and `InstanceId`, `ResourceId.N` takes precedence by default.

i-uf678mass4zvr9n1\*\*\*\*

Tag

array<object>

No

The list of tags.

object

No

The list of tags.

Key

string

No

The key of tag N of the resource.

TestKey

Value

string

No

The value of tag N of the resource.

TestValue

ResourceGroupId

string

No

The ID of the resource group to which the resource belongs.

rg-bp67acfmxazb4p\*\*\*\*

NextToken

string

No

The pagination token that is used in the next request to retrieve a new page of results. You must specify the token that is obtained from the previous query as the value of NextToken.

f1c9fa9de5752\*\*\*

MaxResults

long

No

The number of entries to return on each page. Valid values: 10 to 100.

Default values:

-   If you set a value greater than 0 and less than 10, the default value is 10.
-   If you set this parameter to a value that is greater than 100, the default value is 100.

100

## Response parameters

Parameter

Type

Description

Example

object

The queried instance system events.

PageSize

integer

The number of entries per page.

**Note**

-   If MaxResults and NextToken are used to query results by page, ignore this parameter.
    
-   This parameter will be removed in the future. We recommend that you use the NextToken and MaxResults parameters for a paged query.
    

10

RequestId

string

The ID of the request.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

PageNumber

integer

The page number.

**Note**

-   If MaxResults and NextToken are used to query results by page, ignore this parameter.
    
-   This parameter will be removed in the future. We recommend that you use the NextToken and MaxResults parameters for a paged query.
    

1

TotalCount

integer

The total number of instances.

**Note** If you specify the MaxResults and NextToken request parameters to perform a paged query, the value of the TotalCount response parameter is invalid.

2

InstanceSystemEventSet

array<object>

Details about the instance system events.

InstanceSystemEventType

object

Details about the instance system event.

EventId

string

The ID of the system event.

e-uf64yvznlao4jl2c\*\*\*\*

EventPublishTime

string

The time when the system event was published. The time follows the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.

2017-11-30T06:32:31Z

EventFinishTime

string

The time when the system event ended. The time follows the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.

2017-12-01T06:35:31Z

ResourceType

string

The type of the resource. Valid values:

-   instance: ECS instance
-   ddh: dedicated host
-   managehost: physical machine in a smart hosting pool

instance

ImpactLevel

string

The impact level of the system event.

100

NotBefore

string

The scheduled start time of the system event. The time follows the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.

2017-12-06T00:00:00Z

InstanceId

string

The ID of the instance.

i-uf678mass4zvr9n1\*\*\*\*

Reason

string

The reason why the system event occurred.

System maintenance is scheduled due to \*\*\*.

EventType

object

The type of the system event.

Name

string

The name of the system event type.

InstanceExpiration.Stop

Code

integer

The code of the system event type.

34

EventCycleStatus

object

The lifecycle status of the system event.

Name

string

The state name of the system event.

Executed

Code

integer

The state code of the system event.

0

ExtendedAttribute

object

The extended attribute of the system event.

Device

string

The device name of the local disk.

/dev/vda

DiskId

string

The ID of the local disk.

d-diskid1

InactiveDisks

array<object>

The inactive disks that were released and whose data must be cleared.

InactiveDisk

object

The inactive disk that was released and whose data must be cleared.

CreationTime

string

The time when the disk was created. The time follows the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.

2018-11-30T06:32:31Z

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

cloud\_efficiency

DeviceType

string

The type of the disk. Valid values:

-   system: system disk
-   data: data disk

data

ReleaseTime

string

The time when the disk was released. The time follows the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.

2019-11-30T06:32:31Z

HostType

string

The type of the host. Valid values:

-   ddh: dedicated host
-   managehost: physical machine in a smart hosting pool

ddh

HostId

string

The ID of the host.

dh-bp1ewce1gk3iwv2\*\*\*\*

MigrationOptions

array

The migration solution of the instance. Valid value: MigrationPlan. Instances can be migrated only by using migration plans.

MigrationOption

string

The migration solution of the instance. Valid value: MigrationPlan. Instances can be migrated only by using migration plans.

MigrationPlan

OnlineRepairPolicy

string

The online repair policy for the damaged disk. Valid value: IsolateOnly, which indicates that damaged disks are isolated but not repaired.

IsolateOnly

Rack

string

The rack number of the cloud box.

A01

PunishType

string

The type of the penalty.

ecs\_message\_alert

PunishDomain

string

The illegal domain name.

1228.test.com

PunishUrl

string

The illegal URL.

http://1228.test.com/1

Code

string

The code of the security violation.

PR111

CanAccept

string

Indicates whether the event can be handled.

true

ResponseResult

string

The response result of the event. Valid values:

-   true: The event was handled.
-   false: The event failed to be handled.

true

ReasonCode

string

The reason code category for the system event.

VPCMigrationEcs

NextToken

string

A pagination token. It can be used in the next request to retrieve a new page of results.

**Note** If the NextToken parameter is not returned when you use the MaxResults and NextToken parameters to perform a paged query, no more data is returned.

f1c9fa9de5752\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "PageSize": 10,
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "PageNumber": 1,
  "TotalCount": 2,
  "InstanceSystemEventSet": {
    "InstanceSystemEventType": [
      {
        "EventId": "e-uf64yvznlao4jl2c****",
        "EventPublishTime": "2017-11-30T06:32:31Z",
        "EventFinishTime": "2017-12-01T06:35:31Z",
        "ResourceType": "instance",
        "ImpactLevel": 100,
        "NotBefore": "2017-12-06T00:00:00Z",
        "InstanceId": "i-uf678mass4zvr9n1****",
        "Reason": "System maintenance is scheduled due to ***.",
        "EventType": {
          "Name": "InstanceExpiration.Stop",
          "Code": 34
        },
        "EventCycleStatus": {
          "Name": "Executed",
          "Code": 0
        },
        "ExtendedAttribute": {
          "Device": "/dev/vda",
          "DiskId": "d-diskid1",
          "InactiveDisks": {
            "InactiveDisk": [
              {
                "CreationTime": "2018-11-30T06:32:31Z",
                "DeviceSize": 80,
                "DeviceCategory": "cloud_efficiency",
                "DeviceType": "data",
                "ReleaseTime": "2019-11-30T06:32:31Z"
              }
            ]
          },
          "HostType": "ddh",
          "HostId": "dh-bp1ewce1gk3iwv2****",
          "MigrationOptions": {
            "MigrationOption": [
              "MigrationPlan"
            ]
          },
          "OnlineRepairPolicy": "IsolateOnly",
          "Rack": "A01",
          "PunishType": "ecs_message_alert",
          "PunishDomain": "1228.test.com",
          "PunishUrl": "http://1228.test.com/1",
          "Code": "PR111",
          "CanAccept": true,
          "ResponseResult": true
        },
        "ReasonCode": "VPCMigrationEcs"
      }
    ]
  },
  "NextToken": "f1c9fa9de5752***"
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

EventIdLimitExceeded

%s

More than 100 simulated event IDs are specified.

403

InvalidParameter.TimeEndBeforeStart

%s

The specified parameter is invalid. Make sure that the end time is later than the start time.

403

OperationDenied.NotInWhiteList

%s

You are not authorized to perform this operation. Try again when you are authorized.

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

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeInstanceHistoryEvents?updateTime=2025-03-20#workbench-doc-change-demo)

2024-11-13

The Error code has changed. The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeInstanceHistoryEvents?updateTime=2024-11-13#workbench-doc-change-demo)

2024-08-12

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeInstanceHistoryEvents?updateTime=2024-08-12#workbench-doc-change-demo)

2023-07-13

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeInstanceHistoryEvents?updateTime=2023-07-13#workbench-doc-change-demo)
