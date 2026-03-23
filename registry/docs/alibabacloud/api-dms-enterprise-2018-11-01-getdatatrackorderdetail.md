Queries the details of a data tracking ticket.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/dms-enterprise/2018-11-01/GetDataTrackOrderDetail)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/dms-enterprise/2018-11-01/GetDataTrackOrderDetail)

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

dms:GetDataTrackOrderDetail

none

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

OrderId

long

Yes

The ID of the ticket. You can call the [ListOrders](/help/en/dms/api-listorders) operation to query the ticket ID.

4328\*\*\*\*

Tid

long

No

The ID of the tenant. You can call the [GetUserActiveTenant](/help/en/dms/api-getuseractivetenant) operation to query the tenant ID.

3\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

The response schema.

RequestId

string

The ID of the request.

283C461F-11D8-48AA-B695-DF092DA32AF3

Success

boolean

Indicates whether the request was successful. Valid values:

-   **true**: The request was successful.
-   **false**: The request failed.

true

ErrorMessage

string

The error message returned if the request failed.

UnknownError

ErrorCode

string

The error code returned if the request failed.

UnknownError

DataTrackOrderDetail

object

The details of the ticket.

DbId

long

The ID of the database.

3431\*\*\*\*

Logic

boolean

Indicates whether the database is a logical database. Valid values:

-   **true**
-   **false**

false

DatabaseSearchName

string

The name that is used to search for the database.

xxx@yyy:3306

TableNames

array

The names of the tables for which data operations are tracked.

TableNames

string

The name of a table for which data operations are tracked.

table2

TrackTypes

array

The types of data operations that are tracked.

TrackTypes

string

A type of data operation that is tracked.

UPDATE

JobStartTime

string

The start time of the time range in which data operations are tracked. The time is in the yyyy-MM-dd HH:mm:ss format.

2023-04-23 00:00:00

JobEndTime

string

The end time of the time range in which data operations are tracked. The time is in the yyyy-MM-dd HH:mm:ss format.

2023-04-23 10:00:00

SchemaName

string

The name of the database.

as\_task

JobStatus

string

The status of the data tracking task. Valid values:

-   **INIT**: The task is being initialized.
-   **LISTING**: The binary logs are being obtained.
-   **LIST\_SUCCESS**: The binary logs are successfully obtained.
-   **DOWNLOADING**: The binary logs are being downloaded.
-   **DOWNLOAD\_FAIL**: The binary logs failed to be downloaded.
-   **DOWNLOAD\_SUCCESS**: The binary logs are successfully downloaded.
-   **FILTERING**: The binary logs are being parsed.
-   **FILTER\_FAIL**: The binary logs failed to be parsed.
-   **FILTER\_SUCCESS**: The binary logs are successfully parsed.

FILTER\_SUCCESS

StatusDesc

string

The description of the task status.

searching success

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "283C461F-11D8-48AA-B695-DF092DA32AF3",
  "Success": true,
  "ErrorMessage": "UnknownError",
  "ErrorCode": "UnknownError",
  "DataTrackOrderDetail": {
    "DbId": 0,
    "Logic": false,
    "DatabaseSearchName": "xxx@yyy:3306",
    "TableNames": [
      "table2"
    ],
    "TrackTypes": [
      "UPDATE"
    ],
    "JobStartTime": "2023-04-23 00:00:00",
    "JobEndTime": "2023-04-23 10:00:00",
    "SchemaName": "as_task",
    "JobStatus": "FILTER_SUCCESS",
    "StatusDesc": "searching success"
  }
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/dms-enterprise/2018-11-01/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
