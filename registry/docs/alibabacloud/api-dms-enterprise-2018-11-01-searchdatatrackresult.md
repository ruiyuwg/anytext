Searches for the parsing result of a data tracking task.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/dms-enterprise/2018-11-01/SearchDataTrackResult)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/dms-enterprise/2018-11-01/SearchDataTrackResult)

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

dms:SearchDataTrackResult

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

420\*\*\*\*

FilterStartTime

string

No

The start time of the time range in which you want to track data operations. The time must be in the yyyy-MM-dd HH:mm:ss format.

2023-04-23 00:00:00

FilterEndTime

string

No

The end time of the time range in which you want to track data operations. The time must be in the yyyy-MM-dd HH:mm:ss format.

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

c\_payer\_name

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

The IN list used in the filter condition. This parameter takes effect only when Operator is set to IN or NOT\_IN.

string

No

A value in the IN list. This parameter takes effect only when Operator is set to IN or NOT\_IN.

1

Tid

long

No

The ID of the tenant. You can call the [GetUserActiveTenant](/help/en/dms/api-getuseractivetenant) or [ListUserTenants](/help/en/dms/api-listusertenants) operation to query the tenant ID.

62\*\*\*

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

0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931

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

TrackResult

object

The parsing result of the data tracking task.

TotalCount

long

The total number of entries returned.

109

EventList

array<object>

The details of the event logs.

Event

object

The details of an event log.

DataAfter

array

The data records after you perform data operations in the database.

DataAfter

string

A data record after you perform data operations in the database.

1

DataBefore

array

The data records before you perform data operations in the database.

DataBefore

string

A data record before you perform data operations in the database.

2

EventLength

long

The length of the event content. Unit: bytes.

4324

EventTimestamp

string

The event time.

2023-04-23 10:25:47

EventType

string

The type of the event. Valid values:

-   **WRITE\_ROWS**: indicates an INSERT operation.
-   **UPDATE\_ROWS**: indicates an UPDATE operation.
-   **DELETE\_ROWS**: indicates a DELETE operation.
-   **EXT\_WRITE\_ROWS**: indicates an INSERT operation, which is equivalent to WRITE\_ROWS.
-   **EXT\_UPDATE\_ROWS**: indicates an UPDATE operation, which is equivalent to UPDATE\_ROWS.
-   **EXT\_DELETE\_ROWS**: indicates a DELETE operation, which is equivalent to DELETE\_ROWS.

UPDATE\_ROWS

EventId

long

The ID of the event.

1

RollSQL

string

The SQL statements used to roll back the data change.

\-- Timestamp:2023-04-23 10:25:47 #1\\r\\nUPDATE \`dc\_test\`.\`tb\_chunk\_dml\` SET \`id\`=1 , \`gmt\_create\`='2021-09-30T00:00:00' , \`content\`='2023-03-30 14:51:50' , \`c1\`='2023-04-17 13:42:03' , \`c\_id\`=1 , \`c13425\`='b\\\\'' , \`c432532535\`= null , \`c1432\`= null , \`c143243253\`= null , \`c1432535\`= null , \`c43125325\`= null , \`c3425325\`= null WHERE (\`id\`=1)"

TableInfoList

array<object>

The metadata of tables for which you track data operations.

TableInfo

object

The metadata of a table for which you track data operations.

SchemaName

string

The name of the database.

prod\_eb\_vas

TableName

string

The name of the table.

import\_table\_test1

Columns

array<object>

The information about columns.

Column

object

The information about a column.

ColumnName

string

The name of the column.

basic\_platform

ColumnPosition

integer

The position of the column.

1

ColumnType

string

The data type of the column. Examples: BIGINT, INT, and VARCHAR.

BIGINT

Fictive

boolean

Indicates whether the column is a virtual column. Valid values:

-   **true**
-   **false**

true

Description

string

The description of the column.

auto-description

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931",
  "Success": true,
  "ErrorMessage": "UnknownError",
  "ErrorCode": "UnknownError",
  "TrackResult": {
    "TotalCount": 109,
    "EventList": [
      {
        "DataAfter": [
          1
        ],
        "DataBefore": [
          2
        ],
        "EventLength": 4324,
        "EventTimestamp": "2023-04-23 10:25:47",
        "EventType": "UPDATE_ROWS",
        "EventId": 1,
        "RollSQL": "-- Timestamp:2023-04-23 10:25:47 #1\\r\\nUPDATE `dc_test`.`tb_chunk_dml` SET `id`=1 , `gmt_create`='2021-09-30T00:00:00' , `content`='2023-03-30 14:51:50' , `c1`='2023-04-17 13:42:03' , `c_id`=1 , `c13425`='b\\\\'' , `c432532535`= null , `c1432`= null , `c143243253`= null , `c1432535`= null , `c43125325`= null , `c3425325`= null WHERE  (`id`=1)\""
      }
    ],
    "TableInfoList": [
      {
        "SchemaName": "prod_eb_vas",
        "TableName": "import_table_test1",
        "Columns": [
          {
            "ColumnName": "basic_platform",
            "ColumnPosition": 1,
            "ColumnType": "BIGINT",
            "Fictive": true
          }
        ],
        "Description": "auto-description"
      }
    ]
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
