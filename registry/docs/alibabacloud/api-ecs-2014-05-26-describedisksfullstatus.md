Queries the full status information about one or more Elastic Block Storage (EBS) devices.

## Operation description

-   The full status information about an EBS device includes the lifecycle status specified by the `Status` parameter, health status specified by the `HealthStatus` parameter, and event type specified by the `EventType` parameter of the EBS device. You can filter the results based on these parameters.
-   The release time, scheduled execution time, and actual execution time of each EBS device event are identical. If you specify a period of time by using the `EventTime.Start` and `EventTime.End` parameters, all events that occurred within this period are queried. You can query events that occurred within the last seven days.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeDisksFullStatus)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeDisksFullStatus)

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

ecs:DescribeDisksFullStatus

list

Disk

`acs:ecs:{#regionId}:{#accountId}:disk/{#diskId}`

Disk

`acs:ecs:{#regionId}:{#accountId}:disk/*`

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

The region ID of the EBS device. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

Status

string

No

The lifecycle status of the EBS device. For more information, see [Disk status](/help/en/ecs/developer-reference/disk-states). Valid values:

-   In\_use: The EBS device is in use.
-   Available: The EBS device can be attached.
-   Attaching: The EBS device is being attached.
-   Detaching: The EBS device is being detached.
-   Creating: The EBS device is being created.
-   ReIniting: The EBS device is being initialized.

Available

HealthStatus

string

No

The health status of the EBS device. Valid values:

-   Impaired: The EBS device is damaged.
-   Warning: The performance of the EBS device is degraded.
-   Initializing: The EBS device is being initialized.
-   InsufficientData: The status cannot be determined due to insufficient data.
-   NotApplicable: The EBS device cannot be used.

Warning

EventType

string

No

The event type of the EBS device. Valid values:

-   Degraded: The performance of the EBS device is degraded.
-   SeverelyDegraded: The performance of the EBS device is severely degraded.
-   Stalled: The performance of the EBS device is severely affected.
-   ErrorDetected: The local disk is damaged.

Stalled

EventTime.Start

string

No

The beginning of the time range to query occurred events.

Specify the time in the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.

2018-05-06T02:43:10Z

EventTime.End

string

No

The end of the time range to query occurred events.

Specify the time in the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.

2018-05-08T02:48:52Z

PageNumber

integer

No

The page number. Pages start from page 1. The value must be a positive integer.

Default value: 1.

1

PageSize

integer

No

The number of entries per page. Valid values: 1 to 100.

Default value: 10.

10

DiskId

array

No

The ID of EBS device N. Valid values of N: 1 to 100.

string

No

The ID of EBS device N. Valid values of N: 1 to 100.

d-bp67acfmxazb4p\*\*\*\*

EventId

array

No

The ID of event N. Valid values of N: 1 to 100.

string

No

The ID of event N. Valid values of N: 1 to 100.

e-bp67acfmxazb4p\*\*\*\*

ResourceGroupId

string

No

The ID of the resource group to which the EBS device belongs. If you configure this parameter to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.

rg-aek2kkmhmhs\*\*\*\*

Tag

array<object>

No

The tags to add to the EBS device.

object

No

The tags to add to the EBS device.

Key

string

No

The key of tag N to add to the EBS device. A key-value pair consists of a key specified by the Tag.N.Key parameter and a value specified by the `Tag.N.Value` parameter. The two parameters are associated with each other. Valid values of N: 1 to 20.

Up to 1,000 resources with the specified tags can be returned in the response.

TestKey

Value

string

No

The value of tag N to add to the EBS device. A key-value pair consists of a key specified by the `Tag.N.Key` parameter and a value specified by the Tag.N.Value parameter. The two parameters are associated with each other. Valid values of N: 1 to 20.

TestValue

## Response parameters

Parameter

Type

Description

Example

object

PageSize

integer

The number of entries per page.

10

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

PageNumber

integer

The page number.

1

TotalCount

integer

The total number of EBS devices for which full status information is returned.

2

DiskFullStatusSet

array<object>

The collection of full status information of the EBS devices.

DiskFullStatusType

object

DiskId

string

The EBS device ID.

d-bp67acfmxazb4p\*\*\*\*

InstanceId

string

The instance ID.

i-bp67acfmxazb4p\*\*\*\*

Device

string

The name of the EBS device that is attached to an instance. Example: /dev/xvdb.

This parameter has a value only when the value of `Status` is `In_use`.

**Note** This parameter will be deprecated in the future. To ensure future compatibility, we recommend that you do not use this parameter.

null

DiskEventSet

array<object>

The events about the EBS device.

DiskEventType

object

EventId

string

The ID of the event.

e-bp67acfmxazb4p\*\*\*\*

EventEndTime

string

The time when the event ended.

2018-05-06T02:48:52Z

EventTime

string

The time when the event occurred.

2018-05-08T02:43:10Z

ImpactLevel

string

The impact level of the event.

100

EventType

object

The type of the event.

Name

string

The name of the event type. Valid values:

-   Degraded: The performance of the EBS device is degraded.
-   SeverelyDegraded: The performance of the EBS device is severely degraded.
-   Stalled: The performance of the EBS device is severely affected.
-   ErrorDetected: The local disk is damaged.

Stalled

Code

integer

The code of the event type.

7

Status

object

The lifecycle status of the EBS device.

Name

string

The name of the lifecycle status of the EBS device.

Available

Code

integer

The code of the lifecycle status of the EBS device.

129

HealthStatus

object

The health status of the EBS device.

Name

string

The name of the health status of the EBS device.

Impaired

Code

integer

The code of the health status of the EBS device.

128

## Examples

Sample success responses

`JSON`format

```
{
  "PageSize": 10,
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "PageNumber": 1,
  "TotalCount": 2,
  "DiskFullStatusSet": {
    "DiskFullStatusType": [
      {
        "DiskId": "d-bp67acfmxazb4p****",
        "InstanceId": "i-bp67acfmxazb4p****",
        "Device": null,
        "DiskEventSet": {
          "DiskEventType": [
            {
              "EventId": "e-bp67acfmxazb4p****",
              "EventEndTime": "2018-05-06T02:48:52Z",
              "EventTime": "2018-05-08T02:43:10Z",
              "ImpactLevel": 100,
              "EventType": {
                "Name": "Stalled",
                "Code": 7
              }
            }
          ]
        },
        "Status": {
          "Name": "Available",
          "Code": 129
        },
        "HealthStatus": {
          "Name": "Impaired",
          "Code": 128
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

DiskIdLimitExceeded

%s

More than 100 disk IDs are specified.

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

403

TooManyDiskEvent.DiskIdRequired

%s

The system cannot process this number of requests for the specified resource. Try again later.

404

MissingParameter

%s

A parameter is not specified.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-03

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeDisksFullStatus?updateTime=2024-12-03#workbench-doc-change-demo)
