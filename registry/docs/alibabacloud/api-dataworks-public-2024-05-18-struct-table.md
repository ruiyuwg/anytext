Parameter

Type

Description

Example

object

The information about a data table object.

Id

string

The table ID. For more information, see [Concepts related to metadata entities](/help/en/dataworks/developer-reference/description-of-concepts-related-to-metadata-entities).

The common format of this parameter is `${Entity type}:${Instance ID or escaped URL}:${Catalog identifier}:${Database name}:${Schema name}:${Table name}`. If a level does not exist, specify an empty string as a placeholder.

**Note** For MaxCompute and DLF tables, specify an empty string at the Instance ID level as a placeholder. For MaxCompute tables, specify a MaxCompute project name at the Database name level. If the three-layer model is enabled for your MaxCompute project, you must specify a schema name at the Schema name level. Otherwise, you can specify an empty string at the Schema name level as a placeholder.

**Note** For StarRocks tables, specify a catalog name at the Catalog identifier level. For DLF tables, specify a catalog ID at the Catalog identifier level. Other types of tables do not support the Catalog identifier level, and you can specify an empty string as a placeholder.

You can configure this parameter in one of the following formats based on your table type:

`maxcompute-table:::project_name:[schema_name]:table_name`

`dlf-table::catalog_id:database_name::table_name`

`hms-table:instance_id::database_name::table_name`

`holo-table:instance_id::database_name:schema_name:table_name`

`mysql-table:(instance_id|encoded_jdbc_url)::database_name::table_name`

**Note**  
`instance_id`: the ID of an instance. If the related data source is added to DataWorks in Alibaba Cloud instance mode, you must configure this parameter.  
`encoded_jdbc_url`: the JDBC connection string that is URL-encoded. If the related data source is added to DataWorks in connection string mode, you must configure this parameter.  
`catalog_id`: the ID of a DLF catalog.  
`project_name`: the name of a MaxCompute project.  
`database_name`: the name of a database.  
`schema_name`: the name of a schema. For a MaxCompute table, this parameter is required only if the three-layer model is enabled for the MaxCompute project to which the table belongs. If the schema feature is not enabled for the MaxCompute project, specify an empty string for this parameter as a placeholder.  
`table_name`: the name of a table.

maxcompute-table:123456XXX::test\_project::test\_tbl dlf-table:123456XXX:test\_catalog:test\_db::test\_tbl hms-table:c-abc123xxx::test\_db::test\_tbl holo-table:h-abc123xxx::test\_db:test\_schema:test\_tbl

Name

string

The table name.

test\_tbl

Comment

string

The comments.

TableType

string

The table type. The value of this parameter is related to the type of metadata crawler.

TABLE

PartitionKeys

array

The partition keys. If the table is a non-partitioned table, leave this parameter empty.

string

The partition key.

ds

ParentMetaEntityId

string

The ID of a parent metadata entity. For more information, see [Concepts related to metadata entities](/help/en/dataworks/developer-reference/description-of-concepts-related-to-metadata-entities).

-   For data source types that support schemas, such as `MaxCompute, Hologres, PostgreSQL, SQL Server, HybridDB for PostgreSQL, and Oracle`, the `ParentMetaEntityId` parameter specifies the schema of the database to which the table belongs. In this case, the common format of this parameter is `${Entity type}:${Instance ID or escaped URL}:${Catalog identifier}:${Database name}:${Schema name}`. If a level does not exist, leave the level empty. For a MaxCompute data table, you must make sure that the three-layer model is enabled for the MaxCompute project to which the table belongs.
-   For other data source types that do not support schemas, the `ParentMetaEntityId` parameter specifies the database to which the table belongs. In this case, the common format of this parameter is `${Entity type}:${Instance ID or escaped URL}:${Catalog identifier}:${Database name}`. If a level does not exist, leave the level empty.

**Note** For MaxCompute and DLF tables, specify an empty string at the Instance ID level as a placeholder. For MaxCompute tables, specify a MaxCompute project name at the Database name level.

**Note** For StarRocks tables, specify a catalog name at the Catalog identifier level. For DLF tables, specify a catalog ID at the Catalog identifier level. Other types of tables do not support the Catalog identifier level, and you can specify an empty string as a placeholder.

You can configure this parameter in one of the following formats based on your table type:

`maxcompute-project:::project_name`

`maxcompute-schema:::project_name:schema_name` (Three-layer model enabled for the MaxCompute project)

`dlf-database::catalog_id:database_name`

`hms-database:instance_id::database_name`

`holo-schema:instance_id::database_name:schema_name`

`mysql-database:(instance_id|encoded_jdbc_url)::database_name`

**Note**  
`instance_id`: the ID of an instance. If the related data source is added to DataWorks in Alibaba Cloud instance mode, you must configure this parameter.  
`encoded_jdbc_url`: the JDBC connection string that is URL-encoded. If the related data source is added to DataWorks in connection string mode, you must configure this parameter.  
`catalog_id`: the ID of a DLF catalog.  
`project_name`: the name of a MaxCompute project.  
`database_name`: the name of a database.  
`schema_name`: the name of a schema.

maxcompute-schema:123456XXX::test\_project\_with\_schema:default maxcompute-project:123456XXX::test\_project\_without\_schema dlf-database:123456XXX:test\_catalog:test\_db hms-database:c-abc123xxx::test\_db holo-schema:h-abc123xxx::test\_db:test\_schema

CreateTime

long

The creation time. This value is a UNIX timestamp. Unit: milliseconds.

1736852168000

ModifyTime

long

The modification time. This value is a UNIX timestamp. Unit: milliseconds.

1736852168000

TechnicalMetadata

object

The technical metadata.

Owner

string

The table owner.

test\_user

Location

string

The storage location of the table.

oss://test-bucket/test\_tbl

Compressed

boolean

Specifies whether the table is a compressed table. Valid values: true and false.

false

InputFormat

string

The input format.

org.apache.hadoop.hive.ql.io.parquet.MapredParquetInputFormat

OutputFormat

string

The output format.

org.apache.hadoop.hive.ql.io.parquet.MapredParquetOutputFormat

SerializationLibrary

string

The implementation class of SerDe.

org.apache.hadoop.hive.ql.io.parquet.serde.ParquetHiveSerDe

Parameters

object

The information about parameters.

string

The information about the parameter.

{\\"k1\\":\\"v1\\"}

BusinessMetadata

object

The information about the business metadata that is related to DataWorks, including the usage notes, tags, categories, ancestor tasks, and extended information.

Readme

string

The usage notes.

Tags

array<object>

The tags.

object

The information about the tag.

Key

string

The tag key. You cannot leave this parameter empty.

tag\_key

Value

string

The tag value. You can leave this parameter empty.

tag\_value

Categories

array

The categories.

Category

array<object>

The levels of a category. The category can be a single category or a multi-level category.

object

The information about the category.

Id

string

The category ID.

CATEGORY.456

Name

string

The category name.

ParentId

string

The parent category ID. You can leave this parameter empty.

CATEGORY.123

UpstreamTasks

array<object>

The ancestor tasks.

object

The ancestor task.

Id

long

The ancestor task ID.

123456

Name

string

The ancestor task name.

test\_task

Extension

object

The extended information. Only MaxCompute tables supports this parameter.

ProjectId

long

The DataWorks workspace ID.

234

EnvType

string

The type of the environment. Valid values:

-   Prod
-   Dev

Dev

ViewCount

long

The number of times the table is viewed.

0

ReadCount

long

The number of times the table is read.

0

FavorCount

long

The number of times the table is added to favorites.

0
