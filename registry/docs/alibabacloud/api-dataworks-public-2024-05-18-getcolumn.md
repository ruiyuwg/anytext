Queries the information about a specific field of a table in Data Map.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/dataworks-public/2024-05-18/GetColumn)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/dataworks-public/2024-05-18/GetColumn)

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

dataworks:GetColumn

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

Id

string

Yes

The ID. You can refer to the response of the ListColumns operation and the [description of concepts related to metadata entities.](/help/en/dataworks/developer-reference/description-of-concepts-related-to-metadata-entities)

The format: `${EntityType}:${Instance ID or escaped URL}:${Catalog identifier}:${Database name}:${Schema name}:${Table name}:${Column name}`. Use empty strings as placeholders for levels that do not exist.

**Note** For the MaxCompute and DLF types, use an empty string as the placeholder for the instance ID. For MaxCompute, the database name refers to the MaxCompute project name. If the project has schema enabled, you must specify the schema name. Otherwise, use an empty string as the placeholder for the schema name.

**Note** The catalog identifier of the StarRocks is the catalog name, and the catalog identifier of the DLF type is the catalog ID. Other types do not support catalog levels. Use empty strings as placeholders.

Examples of common ID formats

`maxcompute-column:::project_name:[schema_name]:table_name:column_name`

`dlf-column::catalog_id:database_name::table_name:column_name`

`hms-column:instance_id::database_name::table_name:column_name`

`holo-column:instance_id::database_name:schema_name:table_name:column_name`

`mysql-column:(instance_id|encoded_jdbc_url)::database_name::table_name:column_name`

**Note**  
`instance_id`: the ID of the instance, which is required when the data source is registered in instance mode.  
`encoded_jdbc_url`: The URL-encoded JDBC connection string, which is required when the data source is registered via a connection string.  
`catalog_id`: The DLF catalog ID.  
`project_name`: The MaxCompute project name.  
`database_name`: The database name.  
`schema_name`: The schema name. For the MaxCompute type, this is required only if the project has enabled schema; otherwise, use an empty string as a placeholder.  
`table_name`: The table name.  
`column_name`: The field name.

maxcompute-column:11075xxxx::test\_project:test\_schema:test\_table:test\_column

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

Indicates whether the request succeeded.

true

Column

[Column](/help/en/dataworks/developer-reference/api-dataworks-public-2024-05-18-struct-column)

The columns in the table.

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "D1E2E5BC-xxxx-xxxx-xxxx-xxxxxx",
  "Success": true,
  "Column": {
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
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/dataworks-public/2024-05-18/errorCode).
