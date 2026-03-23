DataWorks API (2024-05-18) uses a structured identifier system for metadata entities across data sources. Each entity -- a database, table, or column -- has a unique ID based on its position in the hierarchy.

## Entity hierarchy

Data Map discovers and manages metadata through crawlers. Each crawler type organizes metadata into a hierarchy of up to five levels:

**Catalog > Database > Schema > Table > Column**

Not all crawler types support every level. For example, MaxCompute supports Schema, Table, and Column but not Catalog or Database. MySQL supports Database, Table, and Column but not Catalog or Schema. The supported levels determine how you construct entity IDs.

## Supported crawler types

**Identifier**

**Display name**

**Catalog**

**Database**

**Schema**

**Table**

**Column**

**Remarks**

`maxcompute`

MaxCompute

\--

\--

Yes

Yes

Yes

A default crawler identifies all metadata entities in your Alibaba Cloud account. In MaxCompute, projects correspond to the database level, but you cannot query projects through API operations. Schema support depends on whether the three-layer model is enabled for your MaxCompute project.

`dlf`

Data Lake Formation

Yes

Yes

\--

Yes

Yes

A default crawler identifies all metadata entities in your Alibaba Cloud account.

`hms`

HMS

\--

Yes

\--

Yes

Yes

Uses Hive Metastore Service (HMS) to manage metadata. Collects metadata from E-MapReduce (EMR) and CDH\_HIVE clusters.

`holo`

Hologres

\--

Yes

Yes

Yes

Yes

\-

`mysql`

MySQL

\--

Yes

\--

Yes

Yes

\-

`oracle`

Oracle

\--

Yes

Yes

Yes

Yes

\-

`postgresql`

PostgreSQL

\--

Yes

Yes

Yes

Yes

\-

`sqlserver`

SQL Server

\--

Yes

Yes

Yes

Yes

\-

`analyticdb_for_mysql`

AnalyticDB MySQL

\--

Yes

\--

Yes

Yes

Also collects metadata from `analyticdb_for_spark` data sources.

`ads`

AnalyticDB MySQL 2.0

\--

Yes

\--

Yes

Yes

\-

`hybriddb_for_postgresql`

AnalyticDB PostgreSQL

\--

Yes

Yes

Yes

Yes

\-

`ots`

OTS

\--

Yes

\--

Yes

Yes

\-

`clickhouse`

ClickHouse

\--

Yes

\--

Yes

Yes

\-

`starrocks`

StarRocks

Yes

Yes

\--

Yes

Yes

Supports catalogs. Queries metadata entities in internal catalogs only.

`lindorm_for_engine`

Lindorm

\--

Yes

\--

Yes

Yes

\-

## Entity type

The `EntityType` parameter identifies the type and level of a metadata entity. Format:

```
${CrawlerType}-${SubType}
```

-   `CrawlerType`: The crawler identifier, such as `mysql`, `maxcompute`, `dlf`, or `holo`.
    
-   `SubType`: The entity level, such as `catalog`, `database`, `schema`, `table`, or `column`.
    

For example, a MaxCompute table has the entity type `maxcompute-table`.

## Metadata entity ID

The `MetaEntityId` parameter uniquely identifies a metadata entity. It is designed for readability, uniqueness, and extensibility.

Separate each level with a colon (`:`). Use an empty string as a placeholder for unsupported levels. This keeps the number of colon-separated segments consistent across all entity types, making IDs predictable to parse and construct.

### Crawler metadata instance ID

The crawler metadata instance is the root of the entity hierarchy. Its ID format depends on whether the crawler is default or manually created.

**Default crawlers** (MaxCompute and DLF): The ID is the crawler type alone.

```
${CrawlerType}
```

**Manually created crawlers**: The ID includes the metadata source identifier.

```
${CrawlerType}:${MetaSourceId}
```

The `MetaSourceId` value depends on the connection mode:

**Mode**

**MetaSourceId value**

**Example**

Instance mode

An instance ID or cluster ID

`i-z6j3kxxx7`

URL mode

The URL-encoded JDBC URL or endpoint

`jdbc%3Amysql%3A%2F%2F47.0.X.X%3A3306%2Ftest_db`

**Examples:**

**Crawler type**

**Scenario**

**Crawler metadata instance ID**

MaxCompute

Default crawler

`maxcompute`

Hologres

Instance mode, instance ID `i-z6j3kxxx7`

`holo:i-z6j3kxxx7`

MySQL

URL mode, JDBC URL `jdbc:mysql://47.0.X.X:3306/test_db`

`mysql:jdbc%3Amysql%3A%2F%2F47.0.X.X%3A3306%2Ftest_db`

### Data table entity ID format

For catalog, database, schema, table, and column entities, the ID follows this format:

```
${EntityType}:${MetaSourceId}:${Catalog}:${Database}:${Schema}:${Table}:${Column}
```

Each segment maps to a specific level:

**Level**

**Segment**

**Description**

\-

`EntityType`

The entity type identifier (for example, `maxcompute-table`).

\-

`MetaSourceId`

The instance ID, cluster ID, or URL-encoded JDBC URL. For MaxCompute and DLF, use an empty string.

Catalog

`Catalog`

The catalog identifier. For StarRocks, this is the catalog name. For DLF, this is the catalog ID. For other types, use an empty string.

Database

`Database`

The database name.

Schema

`Schema`

The schema name. For types that do not support schema, use an empty string. For MaxCompute, provide the schema name when the schema model is enabled; otherwise, use an empty string.

Table

`Table`

The table name.

Column

`Column`

The column name.

Omit trailing segments for higher-level entities. For example, a table-level ID does not include the `Column` segment.

## Entity ID examples

The following examples show how to construct entity IDs for different crawler types and levels.

**Note**

Colons (`:`) separate each level. Empty strings between consecutive colons (for example, `::`) represent unsupported levels.

### MaxCompute

MaxCompute supports two modes depending on whether the three-layer model (schema model) is enabled.

#### Schema model enabled

For a project `project_name`, schema `schema_name`, table `table_name`, and column `column_name`:

**Level**

**Entity ID**

Crawler metadata instance

`maxcompute`

Project

`maxcompute-project:::project_name`

Schema

`maxcompute-schema:::project_name:schema_name`

Table

`maxcompute-table:::project_name:schema_name:table_name`

Column

`maxcompute-column:::project_name:schema_name:table_name:column_name`

The three leading colons (`:::`) before `project_name` represent empty placeholders for `MetaSourceId` (MaxCompute uses a default crawler) and `Catalog` (not supported).

#### Schema model disabled

For a project `project_name`, table `table_name`, and column `column_name`:

**Level**

**Entity ID**

Crawler metadata instance

`maxcompute`

Project

`maxcompute-project:::project_name`

Table

`maxcompute-table:::project_name::table_name`

Column

`maxcompute-column:::project_name::table_name:column_name`

When the schema model is disabled, the schema position is an empty placeholder (`::` between `project_name` and `table_name`).

### DLF

For a catalog `catalog_id`, database `database_name`, table `table_name`, and column `column_name`:

**Level**

**Entity ID**

Crawler metadata instance

`dlf`

Catalog

`dlf-catalog::catalog_id`

Database

`dlf-database::catalog_id:database_name`

Table

`dlf-table::catalog_id:database_name::table_name`

Column

`dlf-column::catalog_id:database_name::table_name:column_name`

DLF uses a default crawler, so `MetaSourceId` is an empty string (the `::` before `catalog_id`). DLF does not support the schema level, so an empty placeholder appears between `database_name` and `table_name`.

### HMS

For an EMR cluster `c-a1b2c3xxx`, database `test_db`, table `test_tbl`, and column `test_col`:

**Level**

**Entity ID**

Crawler metadata instance

`hms:c-a1b2c3xxx`

Database

`hms-database:c-a1b2c3xxx::test_db`

Table

`hms-table:c-a1b2c3xxx::test_db::test_tbl`

Column

`hms-column:c-a1b2c3xxx::test_db::test_tbl:test_col`

HMS does not support catalog or schema, so empty placeholders appear in those positions.

### Hologres

For a Hologres instance `hgpostcn-cn-a1b2c3xxx`, database `test_db`, schema `test_schema`, table `test_tbl`, and column `test_col`:

**Level**

**Entity ID**

Crawler metadata instance

`holo:hgpostcn-cn-a1b2c3xxx`

Database

`holo-database:hgpostcn-cn-a1b2c3xxx::test_db`

Schema

`holo-schema:hgpostcn-cn-a1b2c3xxx::test_db:test_schema`

Table

`holo-table:hgpostcn-cn-a1b2c3xxx::test_db:test_schema:test_tbl`

Column

`holo-column:hgpostcn-cn-a1b2c3xxx::test_db:test_schema:test_tbl:test_col`

Hologres uses instance mode, so `MetaSourceId` is the instance ID. Hologres does not support catalogs, so an empty placeholder appears between `MetaSourceId` and `Database`.

### MySQL

For a MySQL data source with the JDBC URL `jdbc:mysql://47.0.X.X:3306/test_db`, database `test_db`, table `test_tbl`, and column `test_col`:

**Level**

**Entity ID**

Crawler metadata instance

`mysql:jdbc%3Amysql%3A%2F%2F47.0.X.X%3A3306%2Ftest_db`

Database

`mysql-database:jdbc%3Amysql%3A%2F%2F47.0.X.X%3A3306%2Ftest_db::test_db`

Table

`mysql-table:jdbc%3Amysql%3A%2F%2F47.0.X.X%3A3306%2Ftest_db::test_db::test_tbl`

Column

`mysql-column:jdbc%3Amysql%3A%2F%2F47.0.X.X%3A3306%2Ftest_db::test_db::test_tbl:test_col`

The `MetaSourceId` is the URL-encoded JDBC URL. MySQL does not support catalog or schema, so empty placeholders appear in those positions.

## Quick reference

The following table summarizes the entity ID pattern for each crawler type. Empty segments are shown as `(empty)`. The `MetaSourceId` format depends on how the data source is registered (instance mode or URL mode). The table shows the most common pattern for each type.

**Crawler type**

**MetaSourceId**

**Catalog**

**Schema**

**Example table ID**

`maxcompute`

(empty)

(empty)

schema\_name or (empty)

`maxcompute-table:::project::table`

`dlf`

(empty)

catalog\_id

(empty)

`dlf-table::catalog_id:db::table`

`hms`

cluster\_id

(empty)

(empty)

`hms-table:cluster_id::db::table`

`holo`

instance\_id

(empty)

schema\_name

`holo-table:instance_id::db:schema:table`

`mysql`

URL-encoded JDBC URL

(empty)

(empty)

`mysql-table:encoded_url::db::table`

`oracle`

instance\_id or URL

(empty)

schema\_name

`oracle-table:source_id::db:schema:table`

`postgresql`

instance\_id or URL

(empty)

schema\_name

`postgresql-table:source_id::db:schema:table`

`sqlserver`

instance\_id or URL

(empty)

schema\_name

`sqlserver-table:source_id::db:schema:table`

`analyticdb_for_mysql`

instance\_id

(empty)

(empty)

`analyticdb_for_mysql-table:instance_id::db::table`

`ads`

instance\_id

(empty)

(empty)

`ads-table:instance_id::db::table`

`hybriddb_for_postgresql`

instance\_id

(empty)

schema\_name

`hybriddb_for_postgresql-table:instance_id::db:schema:table`

`ots`

instance\_id

(empty)

(empty)

`ots-table:instance_id::db::table`

`clickhouse`

instance\_id or URL

(empty)

(empty)

`clickhouse-table:source_id::db::table`

`starrocks`

instance\_id

catalog\_name

(empty)

`starrocks-table:instance_id:catalog:db::table`

`lindorm_for_engine`

instance\_id

(empty)

(empty)

`lindorm_for_engine-table:instance_id::db::table`
