Use the Hologres data source to read from and write to Hologres. This topic describes the data synchronization capabilities that DataWorks provides for Hologres.

## Limitations

Data synchronization tasks for a Hologres data source require a [Serverless resource group](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups).

### Offline read and write

-   The Hologres writer does not support writing data to Hologres foreign tables.
    
-   The Hologres data source obtains an endpoint using the following logic:
    
    -   For a Hologres instance in the same region, endpoints are obtained in the following order of priority: **any Tunnel** > **Single Tunnel** > **Public**.
        
    -   For a Hologres instance in a different region, endpoints are obtained in the following order of priority: **Public** > **Single Tunnel**.
        

### **Single-table real-time read**

-   The Hologres version must be 2.1 or later.
    
-   Incremental synchronization is not supported for Hologres partitioned tables.
    
-   Synchronization of Data Definition Language (DDL) change messages from Hologres tables is not supported.
    
-   Incremental synchronization from Hologres supports the following data types:
    
    INTEGER, BIGINT, TEXT, CHAR(n), VARCHAR(n), REAL, JSON, SERIAL, OID, INT4\[\], INT8\[\], FLOAT8\[\], BOOLEAN\[\], and TEXT\[\].
    
-   To perform real-time synchronization for a single Hologres table, you must enable Hologres Binlog for the source table. For more information, see [Subscribe to Hologres Binlog](/help/en/hologres/user-guide/subscribe-to-hologres-binary-logs).
    

### Full-database real-time write

-   Real-time data synchronization tasks do not support tables without a primary key.
    
-   During a full-database real-time synchronization from MySQL to Hologres, you can write data only to the child tables of a partitioned table, not the parent table.
    

## Supported field types

**Type**

**Offline read**

**Offline write**

**Real-time write**

UUID

Not supported

Not supported

Not supported

CHAR

Supported

Supported

Supported

NCHAR

Supported

Supported

Supported

VARCHAR

Supported

Supported

Supported

LONGVARCHAR

Supported

Supported

Supported

NVARCHAR

Supported

Supported

Supported

LONGNVARCHAR

Supported

Supported

Supported

CLOB

Supported

Supported

Supported

NCLOB

Supported

Supported

Supported

SMALLINT

Supported

Supported

Supported

TINYINT

Supported

Supported

Supported

INTEGER

Supported

Supported

Supported

BIGINT

Supported

Supported

Supported

NUMERIC

Supported

Supported

Supported

DECIMAL

Supported

Supported

Supported

FLOAT

Supported

Supported

Supported

REAL

Supported

Supported

Supported

DOUBLE

Supported

Supported

Supported

TIME

Supported

Supported

Supported

DATE

Supported

Supported

Supported

TIMESTAMP

Supported

Supported

Supported

BINARY

Supported

Supported

Supported

VARBINARY

Supported

Supported

Supported

BLOB

Supported

Supported

Supported

LONGVARBINARY

Supported

Supported

Supported

BOOLEAN

Supported

Supported

Supported

BIT

Supported

Supported

Supported

JSON

Supported

Supported

Supported

JSONB

Supported

Supported

Supported

## How it works

### Offline read

The Hologres reader uses PSQL to read data from a Hologres table, initiating multiple concurrent SELECT tasks based on the table's shard count.

-   When you create a table in Hologres, you can configure the shard count of the table by running the `CALL set_table_property('table_name', 'shard_count', 'xx')` command in the same `CREATE TABLE` transaction.
    
    By default, Hologres uses the database's shard count. The specific value depends on your instance configuration.
    
-   The SELECT statement filters data by shard using the built-in hg\_shard\_id column.
    

### Offline write

The Hologres writer obtains protocol data from the reader and uses the conflictMode parameter to handle data conflicts during the write operation.

Configure the conflictMode parameter to specify how to handle new data when a primary key conflict occurs:

**Important**

The conflictMode parameter applies only to tables that have a primary key. For more information about the write mechanism and performance, see [Technical principles](/help/en/hologres/developer-reference/insert-on-conflict#section-xc3-izy-0dy).

-   If you set conflictMode to Replace (full row update), new data overwrites the existing data. All columns in the row are replaced. Columns that are not mapped are set to NULL.
    
-   If you set conflictMode to Update, new data overwrites the existing data. Only mapped columns are updated.
    
-   If you set conflictMode to Ignore, new data is discarded.
    

## **Add a data source**

Before you develop a synchronization task in DataWorks, you must add the required data source to DataWorks by following the instructions in [Data source management](/help/en/dataworks/user-guide/add-and-manage-data-sources/#concept-gpt-dn4-1fb). **You can view** **parameter descriptions** **in the DataWorks console to understand the meanings of the parameters when you add a data source**.

## Data synchronization tasks

### **Single-table offline**

-   Supported data sources: All data source types supported by Data Integration.
    
-   Configuration guides: [Codeless UI configuration](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-codeless-ui#task-2364386) and [Script Mode configuration](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-code-editor#task-2351029). For a complete list of parameters and a script example for Script Mode, see [Appendix: Code and parameters](#section-af1-ms9-h4g).
    

### **Single-table real-time**

-   Supported data sources: DataHub, Hologres, Kafka, and LogHub.
    
-   Configuration guide: [Configure a real-time synchronization task for a single table](/help/en/dataworks/user-guide/real-time-synchronization-task-configuration/).
    

### **Full-database offline**

-   Supported data sources: AnalyticDB for MySQL 3.0, ClickHouse, Doris, Hologres, Oracle, PolarDB, and SQL Server.
    
-   Configuration guide: [Configure a full-database offline synchronization task](/help/en/dataworks/user-guide/configure-a-database-wide-offline-synchronization-task)
    

### **Full-database real-time**

-   Supported data sources: AnalyticDB for OceanBase, MongoDB, MySQL, Oracle, PolarDB, PolarDB-X 2.0, and PostgreSQL.
    
-   Configuration guide: [Configure a real-time synchronization task for an entire database](/help/en/dataworks/user-guide/configure-a-data-synchronization-solution-in-data-integration)
    

### **Serverless full-database real-time**

-   Supported data source: MySQL.
    
-   Configuration guide: [Configure a Serverless synchronization task](/help/en/dataworks/user-guide/serverless-synchronization-task).
    

> For frequently asked questions about real-time synchronization, see [FAQ about real-time synchronization to Hologres](/help/en/dataworks/user-guide/faq-6).

## Appendix: Code and parameters

### Configure a batch synchronization task by using the code editor

If you want to configure a batch synchronization task by using the code editor, you must configure the related parameters in the script based on the unified script format requirements. For more information, see [Use the code editor](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-code-editor#task-2351029). The following information describes the parameters that you must configure for data sources when you configure a batch synchronization task by using the code editor.

### Reader script

-   Configure a non-partitioned table
    
    -   The following script shows how to read data from a non-partitioned Hologres table to memory.
        
        ```
        {
            "transform": false,
            "type": "job",
            "version": "2.0",
            "steps": [
                {
                    "stepType": "holo",
                    "parameter": {
                        "datasource": "holo_db",
                        "envType": 1,
                        "column": [ 
                            "tag",
                            "id",
                            "title",
                            "body"
                        ],
                        "where": "",
                        "table": "holo_reader_basic_src"
                    },
                    "name": "Reader",
                    "category": "reader"
                },
                {
                    "stepType": "stream",
                    "parameter": {
                        "print": false,
                        "fieldDelimiter": ","
                    },
                    "name": "Writer",
                    "category": "writer"
                }
            ],
            "setting": {
                "executeMode": null,
                "failoverEnable": null,
                "errorLimit": {
                    "record": "0"
                },
                "speed": {
                    "concurrent": 2,
                    "throttle": false
                }
            },
            "order": {
                "hops": [
                    {
                        "from": "Reader",
                        "to": "Writer"
                    }
                ]
            }
        }
        ```
        
    -   The following code shows the DDL statement for the Hologres table.
        
        ```
        begin;
        drop table if exists holo_reader_basic_src;
        create table holo_reader_basic_src(
          tag text not null, 
          id int not null, 
          title text not null, 
          body text, 
          primary key (tag, id));
          call set_table_property('holo_reader_basic_src', 'orientation', 'column');
          call set_table_property('holo_reader_basic_src', 'shard_count', '3');
        commit;
        ```
        
-   Configure a partitioned table
    
    -   The following script shows how to read data from a child table of a partitioned Hologres table to memory.
        
        **Note**
        
        Note the partition parameter configuration.
        
        ```
        {
            "transform": false,
            "type": "job",
            "version": "2.0",
            "steps": [
                {
                    "stepType": "holo",
                    "parameter": {
                        "selectedDatabase": "public",
                        "partition": "tag=foo",
                        "datasource": "holo_db",
                        "envType": 1,
                        "column": [
                            "tag",
                            "id",
                            "title",
                            "body"
                        ],
                        "tableComment": "",
                        "where": "",
                        "table": "public.holo_reader_basic_part_src"
                    },
                    "name": "Reader",
                    "category": "reader"
                },
                {
              "stepType":"stream",
              "parameter":{},
              "name":"Writer",
              "category":"writer"
            }
          ],
          "setting":{
            "errorLimit":{
              "record":"0"
            },
            "speed":{
              "throttle":true,
              "concurrent":1,
              "mbps":"12"
                }
             },
          "order":{
            "hops":[
              {
                "from":"Reader",
                "to":"Writer"
              }
            ]
          }
        }
        ```
        
    -   The following code shows the DDL statement for the Hologres table.
        
        ```
        begin;
        drop table if exists holo_reader_basic_part_src;
        create table holo_reader_basic_part_src(
          tag text not null, 
          id int not null, 
          title text not null, 
          body text, 
          primary key (tag, id))
          partition by list( tag );
          call set_table_property('holo_reader_basic_part_src', 'orientation', 'column');
          call set_table_property('holo_reader_basic_part_src', 'shard_count', '3');
        commit;
        
        create table holo_reader_basic_part_src_1583161774228 partition of holo_reader_basic_part_src for values in ('foo');
        
        # Make sure that the child table is created and data is imported.
        postgres=# \d+ holo_reader_basic_part_src
                                 Table "public.holo_reader_basic_part_src"
         Column |  Type   | Collation | Nullable | Default | Storage  | Stats target | Description 
        --------+---------+-----------+----------+---------+----------+--------------+-------------
         tag    | text    |           | not null |         | extended |              | 
         id     | integer |           | not null |         | plain    |              | 
         title  | text    |           | not null |         | extended |              | 
         body   | text    |           |          |         | extended |              | 
        Partition key: LIST (tag)
        Indexes:
            "holo_reader_basic_part_src_pkey" PRIMARY KEY, btree (tag, id)
        Partitions: holo_reader_basic_part_src_1583161774228 FOR VALUES IN ('foo')
        ```
        

### Reader script parameters

**Parameter**

**Description**

**Required**

**Default**

**database**

The name of the Hologres database.

Yes

None

**table**

The name of the Hologres table. For a partitioned table, specify the parent table name.

Yes

None

**column**

The columns to read data from. Example: `["*"]` specifies all columns.

Yes

None

**partition**

For a partitioned table, specifies the partition column and its value. Format: `column=value`.

**Important**

-   Hologres supports only list partitioning. The partition key must be a single column of the INT4 or TEXT type.
    
-   This value must match the partition configuration in the DDL statement of the table.
    
-   The corresponding child table must be created and contain imported data.
    

No

Empty. This indicates a non-partitioned table.

### Writer script

-   Configure a non-partitioned table
    
    -   The following script shows how to write data from a MySQL database to a non-partitioned Hologres table using the JDBC mode.
        
        ```
        {
            "type": "job",
            "version": "2.0",
            "steps": [
                {
                    "stepType": "mysql",
                    "parameter": {
                        "envType": 0,
                        "useSpecialSecret": false,
                        "column": [
                            "<column1>",
                            "<column2>",
                            ......,
                            "<columnN>"
                        ],
                        "tableComment": "",
                        "connection": [
                            {
                                "datasource": "<mysql_source_name>",// The name of the MySQL data source
                                "table": [
                                    "<mysql_table_name>"
                                ]
                            }
                        ],
                        "where": "",
                        "splitPk": "",
                        "encoding": "UTF-8"
                    },
                    "name": "Reader",
                    "category": "reader"
                },
                {
                    "stepType": "holo",
                    "parameter": {
                        "selectedDatabase":"public",
                        "schema": "public",
                        "maxConnectionCount": 9,
                        "truncate":true,// Cleanup rule
                        "datasource": "<holo_sink_name>",// The name of the Hologres data source
                        "conflictMode": "ignore",
                        "envType": 0,
                        "column": [
                            "<column1>",
                            "<column2>",
                            ......,
                            "<columnN>"
                        ],
                        "tableComment": "",
                        "table": "<holo_table_name>",
                        "reShuffleByDistributionKey":false
                    },
                    "name": "Writer",
                    "category": "writer"
                }
            ],
            "setting": {
                "executeMode": null,
                "errorLimit": {
                    "record": "0"
                },
                "locale": "zh_CN",
                "speed": {
                    "concurrent": 2,// Job concurrency
                    "throttle": false// Throttling
                }
            },
            "order": {
                "hops": [
                    {
                        "from": "Reader",
                        "to": "Writer"
                    }
                ]
            }
        }
        ```
        
    -   The following code shows the DDL statement for the Hologres table.
        
        ```
        begin;
        drop table if exists mysql_to_holo_test;
        create table mysql_to_holo_test(
          tag text not null,
          id int not null,
          body text not null,
          brrth date,
          primary key (tag, id));
          call set_table_property('mysql_to_holo_test', 'orientation', 'column');
          call set_table_property('mysql_to_holo_test', 'distribution_key', 'id');
          call set_table_property('mysql_to_holo_test', 'clustering_key', 'birth');
        commit;
        ```
        
-   Configure a partitioned table
    
    **Note**
    
    -   Hologres supports only list partitioning. The partition key must be a single column of the INT4 or TEXT type.
        
    -   This value must match the partition configuration in the DDL statement of the table.
        
    
    -   The following script shows how to synchronize data from a MySQL database to a child table of a partitioned Hologres table.
        
        ```
        {
          "type": "job",
          "version": "2.0",
          "steps": [
            {
              "stepType": "mysql",
              "parameter": {
                "envType": 0,
                "useSpecialSecret": false,
                "column": [
                  "<column1>",
                  "<column2>",
                    ......,
                  "<columnN>"
                ],
                "tableComment": "",
                "connection": [
                  {
                    "datasource": "<mysql_source_name>",
                    "table": [
                      "<mysql_table_name>"
                    ]
                  }
                ],
                "where": "",
                "splitPk": "<mysql_pk>",// The primary key column of the MySQL table
                "encoding": "UTF-8"
              },
              "name": "Reader",
              "category": "reader"
            },
            {
              "stepType": "holo",
              "parameter": {
                "selectedDatabase": "public",
                "maxConnectionCount": 9,
                "partition": "<partition_key>",// The partition key of the Hologres table
                "truncate": "false",
                "datasource": "<holo_sink_name>",// The name of the Hologres data source
                "conflictMode": "ignore",
                "envType": 0,
                "column": [
                  "<column1>",
                  "<column2>",
                    ......,
                  "<columnN>"
                ],
                "tableComment": "",
                "table": "<holo_table_name>",
                "reShuffleByDistributionKey":false
              },
              "name": "Writer",
              "category": "writer"
            }
          ],
          "setting": {
            "executeMode": null,
            "failoverEnable": null,
            "errorLimit": {
              "record": "0"
            },
            "speed": {
              "concurrent": 2,// Job concurrency
              "throttle": false// Throttling
            }
          },
          "order": {
            "hops": [
              {
                "from": "Reader",
                "to": "Writer"
              }
            ]
          }
        }
        ```
        
    -   The following code shows the DDL statement for the Hologres table.
        
        ```
        BEGIN;
        CREATE TABLE public.hologres_parent_table(
          a text ,
          b int,
          c timestamp,
          d text,
          ds text,
          primary key(ds,b)
          )
          PARTITION BY LIST(ds);
        CALL set_table_property('public.hologres_parent_table', 'orientation', 'column');
        CREATE TABLE public.holo_child_1 PARTITION OF public.hologres_parent_table FOR VALUES IN('20201215');
        CREATE TABLE public.holo_child_2 PARTITION OF public.hologres_parent_table FOR VALUES IN('20201216');
        CREATE TABLE public.holo_child_3 PARTITION OF public.hologres_parent_table FOR VALUES IN('20201217');
        COMMIT;
        ```
        

### Writer script parameters

**Parameter**

**Description**

**Required**

**Default**

**database**

The name of the Hologres database.

Yes

None

**table**

The name of the Hologres table. You can include the schema name in the table name. Example: `schema_name.table_name`.

Yes

None

**conflictMode**

conflictMode includes Replace, Update, or Ignore. For more information, see [Implementation principles](#section-s0a-g4o-ux9).

Yes

None

**column**

The destination columns to write to. You must include all primary key columns. Example: `["*"]` specifies all columns.

Yes

None

**partition**

For a partitioned table, specifies the partition column and its value. Format: `column=value`.

**Note**

-   Hologres supports only list partitioning. The partition key must be a single column of the INT4 or TEXT type.
    
-   This value must match the partition configuration in the DDL statement of the table.
    

No

Empty. This indicates a non-partitioned table.

**reShuffleByDistributionKey**

Enables concurrent batch writes to tables with a primary key, bypassing the default table lock. In offline tasks, this feature directs data to specific shards based on the distribution key, which improves write performance and reduces server load compared with standard JDBC writes.

**Important**

This feature is available only when you use a Serverless resource group.

No

false

**truncate**

Specifies whether to truncate the destination table before data is written to it.

-   true: Truncates the destination table.
    
    **Note**
    
    -   You can truncate only non-partitioned and statically partitioned tables. Attempting to truncate a dynamically partitioned table causes the task to fail.
        
    -   For a statically partitioned table, setting this to true truncates only the specified child table. The parent table is not affected.
        
    
-   false: Does not truncate the destination table.
    

No

false
