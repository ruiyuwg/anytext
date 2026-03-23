Queries the maintenance attributes of an instance.

## Operation description

This operation is used to query the specified maintenance policy of an instance, which contains the following maintenance attributes:

-   Maintenance window: the time period that you specify for maintenance.
-   Maintenance action: the action that you specify in response to instance shutdown.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeInstanceMaintenanceAttributes)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeInstanceMaintenanceAttributes)

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

ecs:DescribeInstanceMaintenanceAttributes

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

The region ID of the instance. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

PageNumber

long

No

The page number.

Pages start from page 1.

Default value: 1.

1

PageSize

long

No

The number of entries per page. Valid values: 1 to 100.

Default value: 10.

10

InstanceId

array

No

The instance IDs. You can specify up to 100 instance IDs.

string

No

The instance ID.

i-bp67acfmxazb4p\*\*\*\*

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

The total number of queried maintenance attributes.

100

MaintenanceAttributes

array<object>

The maintenance attributes.

MaintenanceAttribute

object

NotifyOnMaintenance

boolean

Indicates whether an event notification was sent before maintenance.

false

InstanceId

string

The instance ID.

i-bp67acfmxazb4p\*\*\*\*

MaintenanceWindows

array<object>

The maintenance windows.

MaintenanceWindow

object

EndTime

string

The end time of the maintenance window.

18:00:00

StartTime

string

The start time of the maintenance window.

02:00:00

ActionOnMaintenance

object

The attributes of the maintenance action of the instance.

DefaultValue

string

The default maintenance action.

AutoRecover

Value

string

The current maintenance action. Valid values:

-   Stop: stops the instance.
-   AutoRecover: automatically recovers the instance.
-   AutoRedeploy: redeploys the instance, which may damage the data disks attached to the instance.

Stop

SupportedValues

array

The supported maintenance actions.

SupportedValue

string

The supported maintenance action.

Stop

## Examples

Sample success responses

`JSON`format

```
{
  "PageSize": 10,
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "PageNumber": 1,
  "TotalCount": 100,
  "MaintenanceAttributes": {
    "MaintenanceAttribute": [
      {
        "NotifyOnMaintenance": false,
        "InstanceId": "i-bp67acfmxazb4p****",
        "MaintenanceWindows": {
          "MaintenanceWindow": [
            {
              "EndTime": "18:00:00",
              "StartTime": "02:00:00"
            }
          ]
        },
        "ActionOnMaintenance": {
          "DefaultValue": "AutoRecover",
          "Value": "Stop",
          "SupportedValues": {
            "SupportedValue": [
              "Stop"
            ]
          }
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

400

MissingParameter

%s

A parameter is not specified.

403

InvalidParameter

%s

The specified parameter is invalid.

403

InstanceIdLimitExceeded

%s

More than 100 instance IDs are specified.

403

OperationDenied.NotInWhiteList

%s

You are not authorized to perform this operation. Try again when you are authorized.

404

InvalidInstanceId.NotFound

The specified InstanceId does not exist.

The specified instance does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-11-24

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeInstanceMaintenanceAttributes?updateTime=2025-11-24#workbench-doc-change-demo)
