Queries a list of tables in Data Map. For data source types that do not support schemas, you can call this API operation to query a list of tables in a specific database. For data source types that support schemas, you can call this API operation to query a list of tables in a specific database, MaxCompute project, or schema. Only the basic information about tables is returned. The information about technical metadata and business metadata is not returned.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/dataworks-public/2024-05-18/ListTables)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/dataworks-public/2024-05-18/ListTables)

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

dataworks:ListTables

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

ParentMetaEntityId

string

Yes

The parent metadata entity ID. You can refer to the responses of the ListDatabases or ListSchemas operation and [Description of concepts related to metadata entities.](/help/en/dataworks/developer-reference/description-of-concepts-related-to-metadata-entities)

-   The parent metadata entity is a database: The format of `ParentMetaEntityId` is `${EntityType}:${Instance ID or encoded URL}:${Catalog Identifier}:${Database Name}`. Use an empty string (\`""\`) as a placeholder for any non-existent level.
-   The parent metadata entity is a database schema: The format of `ParentMetaEntityId` is `${EntityType}:${Instance ID or encoded URL}:${Catalog Identifier}:${Database Name}:${Schema Name}`. Use an empty string (\`""\`) as a placeholder for any non-existent level.

**Note**

-   The schema level in `ParentMetaEntityId` is supported only for database services, such as `MaxCompute (with schema enabled), Hologres, PostgreSQL, SQL Server, HybridDB for PostgreSQL, and Oracle`.
    
-   For the MaxCompute and DLF types, use an empty string as the placeholder for the instance ID. For MaxCompute, the database name is the same as the project name.
    
-   For StarRocks, the catalog identifier is the catalog name. For DLF, it is the catalog ID. Other types do not support the catalog level and you can use an empty string as a placeholder.
    

Examples of common ParentMetaEntityId formats

-   `maxcompute-project:::project_name`
-   `maxcompute-schema:::project_name:schema_name` (for MaxCompute projects with schema enabled)
-   `dlf-database::catalog_id:database_name`
-   `hms-database:instance_id::database_name`
-   `holo-schema:instance_id::database_name:schema_name`
-   `mysql-database:(instance_id|encoded_jdbc_url)::database_name`

**Note**

-   `instance_id`: The instance ID, which is required when the data source is registered in instance mode.
    
-   `encoded_jdbc_url`: The URLEncoded JDBC connection string, which is requiredwhen the data source is registered using a connection string.
    
-   `catalog_id`: The DLF catalog ID.
    
-   `project_name`: The MaxCompute project name.
    
-   `database_name`: The database name.
    
-   `schema_name`: The schema name.
    

maxcompute-schema:123456XXX::test\_project\_with\_schema:default maxcompute-project:123456XXX::test\_project\_without\_schema dlf-database:123456XXX:test\_catalog:test\_db hms-database:c-abc123xxx::test\_db holo-schema:h-abc123xxx::test\_db:test\_schema mysql-database:jdbc%3Amysql%3A%2F%2F127.0.0.1%3A3306%2Ftest\_db::test\_db

Name

string

No

The name. Supports fuzzy matching.

abc

Comment

string

No

The comment. Supports fuzzy matching.

this is a comment

TableTypes

array

No

The list of table types to query. If it's left empty, all types will be queried.

string

No

The table type. The value is related to the database type.

TABLE

SortBy

string

No

The sort field. Default value: CreateTime. Valid values:

-   CreateTime
-   ModifyTime
-   Name
-   TableType

CreateTime

Order

string

No

The order in which the tables are sorted. Default value: Asc. Valid values:

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

E25887B7-579C-54A5-9C4F-83A\*\*\*\*

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

100

PageNumber

integer

The page number.

1

PageSize

integer

The number of records per page.

10

Tables

array

The list of data tables.

Tables

[Table](/help/en/dataworks/developer-reference/api-dataworks-public-2024-05-18-struct-table)

Data table details.

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "E25887B7-579C-54A5-9C4F-83A****",
  "Success": true,
  "PagingInfo": {
    "TotalCount": 100,
    "PageNumber": 1,
    "PageSize": 10,
    "Tables": [
      {
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
    ]
  }
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/dataworks-public/2024-05-18/errorCode).
