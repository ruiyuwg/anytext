Downloads the parsing result of a data tracking task.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/dms-enterprise/2018-11-01/DownloadDataTrackResult)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/dms-enterprise/2018-11-01/DownloadDataTrackResult)

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

dms:DownloadDataTrackResult

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

The ID of the ticket. You can call the [ListOrders](/help/en/dms/api-listorders) operation to obtain the ticket ID.

406\*\*\*\*

RollbackSQLType

string

Yes

The type of the SQL statement.

-   **REVERSE**: undoes or rolls back an executed SQL statement, which is equivalent to the UNDO SQL statement.
-   **FORWARD**: redoes or re-executes an SQL statement that failed to be executed, which is equivalent to the REDO SQL statement.

REVERSE

FilterStartTime

string

No

The start time of the time range in which you want to track data operations. The time must be specified in the yyyy-MM-dd HH:mm:ss format.

2023-04-23 00:00:00

FilterEndTime

string

No

The end time of the time range in which you want to track data operations. The time must be specified in the yyyy-MM-dd HH:mm:ss format.

2023-04-23 10:00:00

FilterTableList

array

No

The names of the tables for which you want to track data operations.

string

No

The name of a table for which you want to track data operations.

table2

FilterTypeList

array

No

The types of data operations that you want to track.

string

No

A type of data operation that you want to track.

UPDATE

ColumnFilter

object

No

The condition to filter columns.

ColumnName

string

No

The name of the column.

account\_name

Operator

string

No

The type of the operator used to configure the filter condition. Valid values:

-   **EQUAL**: retrieves the column whose value is equal to the specified value.
-   **NOT\_EQUAL**: retrieves the column whose value is not equal to the specified value.
-   **IN**: retrieves the column whose value is in the IN list.
-   **BETWEEN**: retrieves the column whose value is in the specified range.
-   **LESS**: retrieves the column whose value is less than the specified value.
-   **MORE**: retrieves the column whose value is greater than the specified value.
-   **NOT\_IN**: retrieves the column whose value is not in the IN list.

EQUAL

Value

string

No

The value used in the filter condition.

1

BetweenStart

string

No

The start value of the range used in the filter condition. This parameter takes effect only when Operator is set to BETWEEN.

1

BetweenEnd

string

No

The end value of the range used in the filter condition. This parameter takes effect only when Operator is set to BETWEEN.

10

InList

array

No

The IN list used in the filter condition.

string

No

This parameter takes effect only when Operator is set to IN or NOT\_IN.

1

EventIdList

array

No

The IDs of the events.

long

No

The event ID.

1

Tid

long

No

The ID of the tenant. You can call the [GetUserActiveTenant](/help/en/dms/api-getuseractivetenant) or [ListUserTenants](/help/en/dms/api-listusertenants) operation to query the tenant ID.

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

The request ID.

B43AD641-49C2-5299-9E06-1B37EC1B\*\*\*\*

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

DownloadKeyId

string

The ID of the download key, which is used to download the parsing result of the data tracking task.

e23dd7ec-a19f-4a69-8eb3-8ffd26e6\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "B43AD641-49C2-5299-9E06-1B37EC1B****",
  "Success": true,
  "ErrorMessage": "UnknownError",
  "ErrorCode": "UnknownError",
  "DownloadKeyId": "e23dd7ec-a19f-4a69-8eb3-8ffd26e6****"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/dms-enterprise/2018-11-01/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
