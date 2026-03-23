Queries historical events of an instance.

## Operation description

### [](#supported-database-engines)[](#)Supported database engines

-   MySQL
-   PostgreSQL
-   SQL Server
-   MariaDB

### [](#references)[](#)References

**Note** Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.

-   [Historical events of an ApsaraDB RDS for MySQL instance](/help/en/rds/view-the-event-history-of-an-apsaradb-rds-instance-3)
-   [Historical events of an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/view-the-event-history-of-an-apsaradb-rds-instance)
-   [Historical events of an ApsaraDB RDS for SQL Server instance](/help/en/rds/view-the-event-history-of-an-apsaradb-rds-instance-1)
-   [Historical events of an ApsaraDB RDS for MariaDB instance](/help/en/rds/view-the-event-history-of-an-apsaradb-rds-instance-2)

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeEvents)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeEvents)

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

rds:DescribeEvents

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

The region ID. You can call the DescribeRegions operation to query the most recent region list.

cn-hangzhou

StartTime

string

No

The start of the time range to query. Specify the time in the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time must be in UTC.

2019-06-11T15:00:00Z

EndTime

string

No

The end of the time range to query. The end time must be later than the start time. Specify the time in the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time must be in UTC.

2019-06-12T15:00:00Z

PageSize

integer

No

The number of entries per page. Valid values:

-   **30**
-   **50**
-   **100**

Default value: **30**.

30

PageNumber

integer

No

The page number. Pages start from page 1.

Default value: **1**.

1

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

PageNumber

integer

The page number.

1

RequestId

string

The request ID.

A103039D-B1B2-4C57-B989-7D7C0DA95426

PageSize

integer

The number of entries per page.

30

TotalRecordCount

integer

The total number of entries returned.

40

EventItems

array<object>

The events.

EventItems

object

EventName

string

The event name.

ModifySecurityIPList

EventTime

string

The time when the event occurred.

2019-08-20T01:08:22Z

EventUserType

string

The type of the user who executed the event.

SYSTEM

EventRecordTime

string

The time when the event was recorded. The time is slightly later than the time the event occurred.

2019-08-20T01:12:49Z

CallerUid

long

The ID of the user who executed the event.

22973492\*\*\*\*\*\*\*\*\*\*

RegionId

string

The region ID.

cn-hangzhou

EventId

integer

The event ID.

11000053

EventType

string

The event type.

NetworkManagement

ResourceType

string

The type of the resource associated with the event. Only instances are supported for this parameter.

instance

EventPayload

string

The request or context parameters of the event.

{\\"Domain\\": \\"rds-inc-share.aliyuncs.com\\", \\"Api\\": \\"ReleaseInstancePublicConnection\\"}

EventReason

string

The source of the event.

FROM\_USER

ResourceName

string

The name of the resource associated with the event. Only instance IDs are supported for this parameter.

rm-bp1z3065m9976ix8a

## Examples

Sample success responses

`JSON`format

```
{
  "PageNumber": 1,
  "RequestId": "A103039D-B1B2-4C57-B989-7D7C0DA95426",
  "PageSize": 30,
  "TotalRecordCount": 40,
  "EventItems": {
    "EventItems": [
      {
        "EventName": "ModifySecurityIPList",
        "EventTime": "2019-08-20T01:08:22Z",
        "EventUserType": "SYSTEM",
        "EventRecordTime": "2019-08-20T01:12:49Z",
        "CallerUid": 0,
        "RegionId": "cn-hangzhou",
        "EventId": 11000053,
        "EventType": "NetworkManagement",
        "ResourceType": "instance",
        "EventPayload": "{\\\"Domain\\\": \\\"rds-inc-share.aliyuncs.com\\\", \\\"Api\\\": \\\"ReleaseInstancePublicConnection\\\"}",
        "EventReason": "FROM_USER",
        "ResourceName": "rm-bp1z3065m9976ix8a"
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

InvalidStartTime.Format

Specified start time is not valid.

The start time is invalid.

400

InvalidParameterCombination

The end time must be greater than the start time

The end time must be later than the start time.

400

RegionNotSupport

The region is not supported.

The operation failed. The operation is not supported in the region.

404

InvalidRegion.NotFound

Specified Region does not exist in the RDS

The region ID is invalid.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Rds/2014-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-11-20

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeEvents?updateTime=2024-11-20#workbench-doc-change-demo)

2022-10-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeEvents?updateTime=2022-10-28#workbench-doc-change-demo)
