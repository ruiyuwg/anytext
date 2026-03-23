Parameter

Type

Description

Example

object

The field.

Id

string

The ID. For more information, see [Description of concepts related to metadata entities](/help/en/dataworks/developer-reference/description-of-concepts-related-to-metadata-entities).

The format is: `${EntityType}:${Instance ID or encoded URL}:${Catalog Identifier}:${Database name}:${Schema name}:${Table Name}:${Column name}`. Use empty strings as placeholders for non-existent hierarchy levels.

**Note** For the MaxCompute and DLF types, use an empty string as the placeholder for the instance ID. For MaxCompute, the database name refers to the MaxCompute project name. If the project has schema enabled, you must specify the schema name. Otherwise, use an empty string as the placeholder for the schema name.

**Note** For StarRocks, the catalog identifier is the catalog name. For DLF, it is the catalog ID. Other types do not support the catalog level and you can use an empty string as a placeholder.

Examples of ID formats for common types are as follows:

`maxcompute-column:::project_name:[schema_name]:table_name:column_name`

`dlf-column::catalog_id:database_name::table_name:column_name`

`hms-column:instance_id::database_name::table_name:column_name`

`holo-column:instance_id::database_name:schema_name:table_name:column_name`

`mysql-column:(instance_id|encoded_jdbc_url)::database_name::table_name:column_name`

**Note**  
`instance_id`: The instance ID, required when the data source is registered in instance mode.  
`encoded_jdbc_url`: The URL-encoded JDBC connection string, which is required when the data source is registered via a connection string.  
`catalog_id`: The DLF catalog ID.  
`project_name`: The MaxCompute project name.  
`database_name`: The database name.  
`schema_name`: The schema name. For the MaxCompute type, this is required only if the project has enabled schema; otherwise, use an empty string as a placeholder.  
`table_name`: The table name.  
`column_name`: The field name.

maxcompute-column:123456::test\_project:default:test\_tbl:col1

Name

string

The name.

col1

Comment

string

The comment.

TableId

string

The table ID. You can refer to the `Table` object.

maxcompute-table:123456::test\_project:default:test\_tbl

Position

integer

The position of the field.

1

Type

string

The type.

bigint

PrimaryKey

boolean

Specifies whether the column is a primary key (only supported by MaxCompute).

false

PartitionKey

boolean

Specifies whether the column is a partition key.

false

ForeignKey

boolean

Specifies whether the column is a foreign key (only supported by MaxCompute).

false

BusinessMetadata

object

Business metadata.

Description

string

A business-level description of the field (supported only by MaxCompute, HMS (EMR clusters) and DLF.
