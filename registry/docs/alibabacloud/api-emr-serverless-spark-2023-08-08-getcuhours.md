Queries the number of CU-hours consumed by a queue during a specified cycle.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/emr-serverless-spark/2023-08-08/GetCuHours)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/emr-serverless-spark/2023-08-08/GetCuHours)

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

emr-serverless-spark:GetCuHours

get

\*All Resources

`*`

none

none

## Request syntax

```
GET /api/v1/workspaces/{workspaceId}/metric/cuHours/{queue} HTTP/1.1
```

## Request parameters

Parameter

Type

Required

Description

Example

workspaceId

string

Yes

The workspace ID.

w-dsa23\*\*\*\*\*

queue

string

Yes

The name of the queue.

root\_queue

startTime

string

Yes

The start time of the query time range.

2024-01-01 00:00:00

endTime

string

Yes

The end time of the query time range.

2024-01-08 00:00:00

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

requestId

string

The request ID.

DD6B1B2A-5837-5237-ABE4-FF0C8944\*\*\*\*

data

object

The returned data.

cuHours

string

The number of CU-hours consumed by a queue during a specified cycle. The value is an estimated value. Refer to your Alibaba Cloud bill for the actual number of consumed CU-hours.

{2025-01-09 00:00:00=2.033333, 2025-01-09 01:00:00=2.033333, 2025-01-09 02:00:00=2.033333, 2025-01-09 03:00:00=2.033333, 2025-01-09 04:00:00=2.033333, 2025-01-09 05:00:00=2.033333, 2025-01-09 06:00:00=2.033333, 2025-01-09 07:00:00=2.033333, 2025-01-09 08:00:00=2.033333, 2025-01-09 09:00:00=1.933333, 2025-01-09 10:00:00=2.133333, 2025-01-09 11:00:00=3.100000, 2025-01-09 12:00:00=2.900000}

## Examples

Sample success responses

`JSON`format

```
{
  "requestId": "DD6B1B2A-5837-5237-ABE4-FF0C8944****",
  "data": {
    "cuHours": "{2025-01-09 00:00:00=2.033333, 2025-01-09 01:00:00=2.033333, 2025-01-09 02:00:00=2.033333, 2025-01-09 03:00:00=2.033333, 2025-01-09 04:00:00=2.033333, 2025-01-09 05:00:00=2.033333, 2025-01-09 06:00:00=2.033333, 2025-01-09 07:00:00=2.033333, 2025-01-09 08:00:00=2.033333, 2025-01-09 09:00:00=1.933333, 2025-01-09 10:00:00=2.133333, 2025-01-09 11:00:00=3.100000, 2025-01-09 12:00:00=2.900000}"
  }
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/emr-serverless-spark/2023-08-08/errorCode).
