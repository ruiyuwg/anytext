Queries a list of fields in a data table in Data Map.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/dataworks-public/2024-05-18/ListColumns)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/dataworks-public/2024-05-18/ListColumns)

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

dataworks:ListColumns

list

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

TableId

string

Yes

The table ID. You can refer to the return result of the ListTables operation. and the [Concepts related to metadata entities](/help/en/dataworks/developer-reference/description-of-concepts-related-to-metadata-entities).

maxcompute-column:11075xxxx::test\_project:test\_schema:test\_table

Name

string

No

The name. Fuzzy match is supported.

test\_table

Comment

string

No

The comment. Fuzzy match is supported.

test comment

SortBy

string

No

The sort field. Default value: Position. Valid values:

-   Name
-   Position

Position

Order

string

No

The sort order. Default value: Asc. Valid values:

-   Asc
-   Desc

Asc

PageNumber

integer

No

The page number. Default value: 1.

1

PageSize

integer

No

The number of records per page. Default value: 10. Maximum value: 100.

10

## Response parameters

Parameter

Type

Description

Example

object

The response.

RequestId

string

The request ID.

D1E2E5BC-xxxx-xxxx-xxxx-xxxxxx

Success

boolean

Indicates whether the request was successful.

true

PagingInfo

object

The pagination result.

TotalCount

long

The total number of records returned.

1

PageNumber

integer

The page number.

1

PageSize

integer

The number of records per page.

10

Columns

array

The columns in the table.

ColumnList

[Column](/help/en/dataworks/developer-reference/api-dataworks-public-2024-05-18-struct-column)

The column in the table.

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "D1E2E5BC-xxxx-xxxx-xxxx-xxxxxx",
  "Success": true,
  "PagingInfo": {
    "TotalCount": 1,
    "PageNumber": 1,
    "PageSize": 10,
    "Columns": [
      {
        "Id": "maxcompute-column:123456::test_project:default:test_tbl:col1",
        "Name": "col1",
        "Comment": "",
        "TableId": "maxcompute-table:123456::test_project:default:test_tbl",
        "Position": 1,
        "Type": "bigint",
        "PrimaryKey": false,
        "PartitionKey": false,
        "ForeignKey": false,
        "BusinessMetadata": {
          "Description": ""
        }
      }
    ]
  }
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/dataworks-public/2024-05-18/errorCode).
