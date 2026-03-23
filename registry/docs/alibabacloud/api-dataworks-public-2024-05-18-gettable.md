Queries the information about a specific table in Data Map.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/dataworks-public/2024-05-18/GetTable)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/dataworks-public/2024-05-18/GetTable)

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

dataworks:GetTable

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

The ID. You can refer to the response of the ListTables operation and the [concepts related to metadata entities.](/help/en/dataworks/developer-reference/description-of-concepts-related-to-metadata-entities)

The format: `${EntityType}:${Instance ID or escaped URL}:${Catalog identifier}:${Database name}:${Table name}`. Use empty strings as placeholders for levels that do not exist.

**Note** For the MaxCompute and DLF types, use an empty string as the placeholder for the instance ID.

**Note** The catalog identifier of the StarRocks is the catalog name, and the catalog identifier of the DLF type is the catalog ID. Other types do not support the catalog level. Use an empty string as a placeholder.

**Note** For MaxCompute, the database name refers to the MaxCompute project name. If the project has schema enabled, you must specify the schema name. Otherwise, use an empty string as the placeholder for the schema name.

Examples of common ID formats

`maxcompute-table:::project_name:[schema_name]:table_name`

`dlf-table::catalog_id:database_name::table_name`

`hms-table:instance_id::database_name::table_name`

`holo-table:instance_id::database_name:schema_name:table_name`

`mysql-table:(instance_id|encoded_jdbc_url)::database_name::table_name`

**Note**  
`instance_id`: The instance ID, required when the data source is registered in instance mode.  
`encoded_jdbc_url`: The URL-encoded JDBC connection string, which is required when the data source is registered via a connection string.  
`catalog_id`: The DLF catalog ID.  
`project_name`: The MaxCompute project name.  
`database_name`: The database name.  
`schema_name`: The schema name. For the MaxCompute type, this is required only if the project has enabled schema. Otherwise, use an empty string as a placeholder.  
`table_name`: The table name.

maxcompute-table:123456XXX::test\_project::test\_tbl dlf-table:123456XXX:test\_catalog:test\_db::test\_tbl hms-table:c-abc123xxx::test\_db::test\_tbl holo-table:h-abc123xxx::test\_db:test\_schema:test\_tbl

IncludeBusinessMetadata

boolean

No

Specifies whether to include metadata. Default: false.

true

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

7B3435F4-2D91-XXX

Success

boolean

Indicates whether the request succeeded.

true

Table

[Table](/help/en/dataworks/developer-reference/api-dataworks-public-2024-05-18-struct-table)

Detailed information about the table.

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "7B3435F4-2D91-XXX",
  "Success": true,
  "Table": {
    "Id": "maxcompute-table:123456XXX::test_project::test_tbl\ndlf-table:123456XXX:test_catalog:test_db::test_tbl\nhms-table:c-abc123xxx::test_db::test_tbl\nholo-table:h-abc123xxx::test_db:test_schema:test_tbl",
    "Name": "test_tbl",
    "Comment": "",
    "TableType": "TABLE",
    "PartitionKeys": [
      "ds"
    ],
    "ParentMetaEntityId": "maxcompute-schema:123456XXX::test_project_with_schema:default\nmaxcompute-project:123456XXX::test_project_without_schema\ndlf-database:123456XXX:test_catalog:test_db\nhms-database:c-abc123xxx::test_db\nholo-schema:h-abc123xxx::test_db:test_schema",
    "CreateTime": 1736852168000,
    "ModifyTime": 1736852168000,
    "TechnicalMetadata": {
      "Owner": "test_user",
      "Location": "oss://test-bucket/test_tbl",
      "Compressed": false,
      "InputFormat": "org.apache.hadoop.hive.ql.io.parquet.MapredParquetInputFormat",
      "OutputFormat": "org.apache.hadoop.hive.ql.io.parquet.MapredParquetOutputFormat",
      "SerializationLibrary": "org.apache.hadoop.hive.ql.io.parquet.serde.ParquetHiveSerDe",
      "Parameters": {
        "key": "{\\\"k1\\\":\\\"v1\\\"}"
      }
    },
    "BusinessMetadata": {
      "Readme": "",
      "Tags": [
        {
          "Key": "tag_key",
          "Value": "tag_value"
        }
      ],
      "Categories": [
        [
          {
            "Id": "CATEGORY.456",
            "Name": "",
            "ParentId": "CATEGORY.123"
          }
        ]
      ],
      "UpstreamTasks": [
        {
          "Id": 123456,
          "Name": "test_task"
        }
      ],
      "Extension": {
        "ProjectId": 234,
        "EnvType": "Dev",
        "ViewCount": 0,
        "ReadCount": 0,
        "FavorCount": 0
      }
    }
  }
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/dataworks-public/2024-05-18/errorCode).
