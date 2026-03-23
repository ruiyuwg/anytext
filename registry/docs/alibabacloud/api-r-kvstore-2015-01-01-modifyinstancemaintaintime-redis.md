Modifies the maintenance window of a Tair (Redis OSS-compatible) instance. Alibaba Cloud maintains Tair (Redis OSS-compatible) instances during the specified maintenance window.

## Operation description

You can also modify the maintenance window of an instance in the Tair (Redis OSS-compatible) console. For more information, see [Set a maintenance window](/help/en/redis/user-guide/set-a-maintenance-window).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/ModifyInstanceMaintainTime)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/ModifyInstanceMaintainTime)

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

kvstore:ModifyInstanceMaintainTime

update

\*DBInstance

`acs:kvstore:{#regionId}:{#accountId}:instance/{#instanceId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

InstanceId

string

Yes

The ID of the instance.

r-bp1zxszhcgatnx\*\*\*\*

MaintainStartTime

string

Yes

The start time of the maintenance window. The time is in the _HH:mm_Z format. The time is displayed in UTC. For example, if you want the maintenance to start at 1:00 (UTC+8), set this parameter to `17:00Z`. After you call the API operation, you can view the actual time in the Tair (Redis OSS-compatible) console. For more information, see [Set a maintenance window](/help/en/redis/user-guide/set-a-maintenance-window).

03:00Z

MaintainEndTime

string

Yes

The end time of the maintenance window. The time is in the _HH:mm_Z format. The time is displayed in UTC. For example, if you want the maintenance window to end at 2:00 (UTC+8), set this parameter to `18:00Z`.

**Note** The interval between the start time and the end time cannot be less than 1 hour.

04:00Z

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

8D0C0AFC-E9CD-47A4-8395-5C31BF9B3E76

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "8D0C0AFC-E9CD-47A4-8395-5C31BF9B3E76"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidEndTime.Format

Specified end time is not valid.

The incoming end time does not meet the specification.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/R-kvstore/2015-01-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-25

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/ModifyInstanceMaintainTime?updateTime=2025-03-25#workbench-doc-change-demo)

2023-03-02

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/ModifyInstanceMaintainTime?updateTime=2023-03-02#workbench-doc-change-demo)
