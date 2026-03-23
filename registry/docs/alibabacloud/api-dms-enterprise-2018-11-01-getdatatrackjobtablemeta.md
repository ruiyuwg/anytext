Queries the metadata of tables involved in a data tracking task.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/dms-enterprise/2018-11-01/GetDataTrackJobTableMeta)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/dms-enterprise/2018-11-01/GetDataTrackJobTableMeta)

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

dms:GetDataTrackJobTableMeta

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

The ID of the ticket. You can call the [ListOrders](/help/en/dms/api-listorders) operation to query the ID of the ticket.

12345

Tid

long

No

The ID of the tenant. You can call the [GetUserActiveTenant](/help/en/dms/api-getuseractivetenant) operation to query the ID of the tenant.

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

TableMetaList

array<object>

The metadata of tables.

TableMeta

object

The metadata of a table.

SchemaName

string

The name of the database.

DB165

TableName

string

The name of the table.

live\_stat

Columns

array<object>

The information about columns.

Column

object

The information about a column.

ColumnName

string

The name of the column.

claimantno

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

false

Charset

string

The name of the character set.

utf8mb4

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931",
  "Success": true,
  "ErrorMessage": "UnknownError",
  "ErrorCode": "UnknownError",
  "TableMetaList": [
    {
      "SchemaName": "DB165",
      "TableName": "live_stat",
      "Columns": [
        {
          "ColumnName": "claimantno",
          "ColumnPosition": 1,
          "ColumnType": "BIGINT",
          "Fictive": false,
          "Charset": "utf8mb4"
        }
      ]
    }
  ]
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/dms-enterprise/2018-11-01/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
