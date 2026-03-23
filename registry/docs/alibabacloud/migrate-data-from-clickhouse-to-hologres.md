This topic describes how to migrate database tables and data from a self-managed ClickHouse instance to Hologres, a real-time data warehouse, for data development.

## Prerequisites

-   Activate Hologres. For more information, see [Purchase a Hologres instance](/help/en/hologres/getting-started/purchase-a-hologres-instance#task-1918224).
    
-   Have a ClickHouse instance and install the ClickHouse client tool. To install it, click [ClickHouse-Client](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20230427/hnmg/clickhouse-client.zip). For installation and usage details, see [Getting Started](https://clickhouse.com/docs/).
    
-   Use a PSQL client to connect to your Hologres instance. For more information, see [PSQL client](/help/en/hologres/user-guide/use-the-postgresql-client-to-connect-to-hologres#task-1928661).
    

## Background information

ClickHouse is a column-oriented DBMS designed for online analytical processing (OLAP). Hologres is a fully managed interactive analytics service developed by Alibaba Cloud that supports sub-second response times and high queries per second (QPS). You can migrate tables and data from ClickHouse to Hologres for a better data development experience.

The following table compares features of Hologres and ClickHouse.

**Category**

**Criteria**

**ClickHouse**

**Hologres**

Product

Purpose

Network traffic analysis

General-purpose real-time data warehouse: data analytics and online services.

Write

Storage

Column store

Column store and row store.

Write visibility

Second-level (requires client-side batching for batch processing; distributed table writes depend on shard replication completion)

Millisecond-level (adaptive write batching; data is immediately queryable after write)

Write performance

High

Very high

Detail storage

Supported

Supported

Primary key

Not a true database primary key (no uniqueness constraint; used only for indexing and aggregation)

Standard database primary key with uniqueness constraint support.

Updatable

Incomplete and limited (does not support high-QPS updates based on primary keys).

Fully supported (supports high-QPS updates based on primary keys).

Real-time write

Append

-   Append
    
-   insert or ignore
    
-   insert or replace
    
-   update
    

Index

-   primary key
    
-   minmax
    
-   ngram
    
-   token
    
-   bloom filter
    

-   bitmap
    
-   dictionary
    
-   segment
    
-   primary
    
-   clustering
    

**Note**

Automatically creates minmax, bloom filter, ngram, and other indexes transparently to users.

Query

Optimizer

RBO (Rule-Based Optimizer)

CBO (Cost-Based Optimizer)

Federated query

Supported (engine supports HDFS and Kafka)

Supported (FDW reads MaxCompute and Hive directly)

Pre-aggregation

Supported (via MergeTree)

Supported (via stored procedures and scheduled jobs)

High-QPS point query

Not supported

Supported, with QPS exceeding tens of millions.

Complex single-table query

Good performance

Good performance

Multi-table JOIN

Poor performance

Good performance

SQL syntax

Custom syntax

PostgreSQL-compatible with richer functionality.

WINDOW FUNCTION

Not supported

Supported

Transaction

ACID

No (does not guarantee immediate queryability after write; eventual consistency)

Limited support (supports DDL transactions, single-row transactions, and snapshot-based visibility)

Copy

Disaster recovery and backup

Implemented via Replication (remote ZooKeeper + ClickHouse)

Logical replication via Binlog; physical replication via underlying mechanisms.

Advanced features

Binlog

None

Provides Binlog

Vector search

Supported in ClickHouse 22.8 and later

Supported

Spatial data

Not supported

Supported

Security management

Custom permissions

PostgreSQL-compatible permission model, rich access control, IP allowlists, and data masking.

Storage-compute separation

Not separated; limited by single-node capacity

Separated; nearly unlimited storage capacity.

Availability

Manual failover handling

Automatic failover recovery

O&M

Complex (manual shard distribution maintenance)

Fully managed

Ecosystem

Data ingestion

Kafka, Flink, Spark, ...

Flink, Spark, JDBC, DataX, …

BI tools

Supports integration with a limited number of BI tools (Tableau, Superset, ...)

PostgreSQL ecosystem compatible; supports integration with 100+ mainstream BI tools.

## Data type mapping

The following table shows the data type mapping between ClickHouse and Hologres.

**Category**

**ClickHouse**

**Hologres**

Date

Date

Date

DateTime

TIMESTAMPTZ

DateTime(timezone)

TIMESTAMPTZ

DateTime64

TIMESTAMPTZ

Value

Int8

Single-byte INT not supported; use SMALLINT instead.

Int16

SMALLINT

Int32

INT

Int64

BIGINT

UInt8

INT

UInt16

INT

UInt32

BIGINT

UInt64

BIGINT

Float32

FLOAT

Float64

DOUBLE PRECISION

Decimal(P, S)

DECIMAL

Decimal32(S)

DECIMAL

Decimal64(S)

DECIMAL

Decimal128(S)

DECIMAL

Boolean

Not available; use UInt8 instead.

BOOLEAN

Character

String

TEXT

FixString(N)

Not available; use TEXT instead.

LowCardinality

Not available; automatically optimized or set using the `call set_table_properties('x', 'dictionary_encoding_columns', 'col');` command.

Binary

Not available; use String or FixString(N).

BIT(n), VARBIT(n), BYTEA, CHAR(n), and other data types.

Other

UUID

UUID

Enum

Not supported; use TEXT instead.

Nested, Tuple, Array

Array

## Metadata migration

Metadata migration primarily refers to migrating DDL statements for table creation.

1.  In the ClickHouse client, run the following command to list databases in the source ClickHouse instance.
    
    **Note**
    
    The system database appears in the results but does not need to be migrated. Filter it out.
    
    ```
    clickhouse-client --host="<host>" --port="<port>" --user="<username>" --password="<password>" --query="SHOW databases"  > database.list;
    ```
    
    Parameter descriptions are as follows.
    
    **Parameter**
    
    **Description**
    
    host
    
    Address of the source ClickHouse instance.
    
    port
    
    Port of the source ClickHouse instance.
    
    username
    
    Account for logging on to the source ClickHouse instance, with DML read/write and settings permissions, and DDL permissions.
    
    password
    
    Password for the account used to log on to the source ClickHouse instance.
    
2.  In the ClickHouse client, run the following command to list tables in the source ClickHouse instance.
    
    **Note**
    
    Tables starting with .inner. are internal tables for materialized views and do not need to be migrated. Filter them out.
    
    ```
    clickhouse-client --host="<host>" --port="<port>" --user="<username>" --password="<password>" --query="SHOW tables from <database_name>" > table.list;
    ```
    
    Parameter descriptions are as follows.
    
    **Parameter**
    
    **Description**
    
    host
    
    Address of the source ClickHouse instance.
    
    port
    
    Port of the source ClickHouse instance.
    
    username
    
    Account for logging on to the source ClickHouse instance, with DML read/write and settings permissions, and DDL permissions.
    
    password
    
    Password for the account used to log on to the source ClickHouse instance.
    
    database\_name
    
    Name of the database containing the tables to migrate in the source ClickHouse instance.
    
    You can also run the following command to query all database and table names in the source ClickHouse instance.
    
    ```
    select distinct database, name from system.tables where database != 'system';
    ```
    
3.  In the ClickHouse client, run the following command to export the DDL for table creation from the source ClickHouse instance.
    
    ```
    clickhouse-client --host="<host>" --port="<port>" --user="<username>" --password="<password>" --query="SHOW CREATE TABLE <database_name>.<table_name>"  > table.sql;
    ```
    
    You can also query the system.tables metadata table directly.
    
    ```
    SELECT * FROM system.tables
    where database = '<database_name>' and engine != 'Distributed';
    ```
    
    Field conversion rules for system.tables are as follows.
    
    **Field**
    
    **Description**
    
    database
    
    ClickHouse databases map to schemas in Hologres (PostgreSQL syntax). For example, the ClickHouse command `create database "<database_name>";` maps to the Hologres command `create schema "<schema_name>";`.
    
    name
    
    Table name; no changes needed.
    
    engine
    
    Hologres has no concept of Distributed tables or distinction between Local and Distributed tables. All tables are single tables with distributed storage and querying. Therefore, filter out tables where `engine='Distributed'`.
    
    is\_temporary
    
    Temporary tables do not need to be migrated. Hologres does not currently support temporary tables.
    
    -   data\_paths
        
    -   metadata\_path
        
    -   metadata\_modification\_time
        
    
    Ignore.
    
    -   dependencies\_database
        
    -   dependencies\_table
        
    
    Dependencies are a common consideration for views and materialized views. In Hologres, views with dependencies must be created before their base tables. Note that Hologres does not currently support materialized views.
    
    create\_table\_query
    
    DDL for the source ClickHouse table; convert to Hologres DDL (PostgreSQL syntax).
    
    engine\_full
    
    Detailed engine information; ignore.
    
    partition\_key
    
    Maps to the partition key column in Hologres. If the ClickHouse partition\_key is col1, add `partition by list (col1);` to the Hologres table creation statement.
    
    sorting\_key
    
    Maps to Segment Key and Clustering Key indexes in Hologres.
    
    primary\_key
    
    Primary key; maps to the Primary Key clause in Hologres DDL syntax.
    
    sampling\_key
    
    Hologres DDL does not support sampling.
    
    storage\_policy
    
    Storage policy; ignore.
    
4.  Convert the source ClickHouse DDL to Hologres syntax (compatible with PostgreSQL SQL standard).
    
    Convert DDL based on the field conversion rules for system.tables and the [Data type mapping](#section-hr7-8g1-07x). Examples follow.
    
    -   Convert the DDL for a table named lineitem from ClickHouse to Hologres.
        
        -   The DDL to create the table in the ClickHouse instance is as follows.
            
            ```
            -- lineitem on ClickHouse
            CREATE TABLE lineitem_local ON CLUSTER default(
              l_orderkey            UInt64,
              l_partkey             UInt32,
              l_suppkey             UInt32,
              l_linenumber          UInt32,
              l_quantity            decimal(15,2),
              l_extendedprice       decimal(15,2),
              l_discount            decimal(15,2),
              l_tax                 decimal(15,2),
              l_returnflag          LowCardinality(String),
              l_linestatus          LowCardinality(String),
              l_shipdate            Date,
              l_commitdate          Date,
              l_receiptdate         Date,
              l_shipinstruct        LowCardinality(String),
              l_shipmode            LowCardinality(String),
              l_comment             LowCardinality(String)
            ) ENGINE = MergeTree
            PARTITION BY toYear(l_shipdate)
            ORDER BY (l_orderkey, l_linenumber);
            
            CREATE TABLE lineitem on cluster default as lineitem_local ENGINE = Distributed(default, default, lineitem_local, l_orderkey);
            ```
            
        -   The DDL for creating the table in the transformed Hologres instance is as follows.
            
            ```
            -- lineitem on Hologres
            -- create a table group with 32 shards
            CALL hg_create_table_group ('lineitem_tg', 32);
            BEGIN;
            CREATE TABLE LINEITEM
            (
                L_ORDERKEY      BIGINT         NOT NULL,
                L_PARTKEY       INT         NOT NULL,
                L_SUPPKEY       INT         NOT NULL,
                L_LINENUMBER    INT         NOT NULL,
                L_QUANTITY      DECIMAL(15,2) NOT NULL,
                L_EXTENDEDPRICE DECIMAL(15,2) NOT NULL,
                L_DISCOUNT      DECIMAL(15,2) NOT NULL,
                L_TAX           DECIMAL(15,2) NOT NULL,
                L_RETURNFLAG    TEXT        NOT NULL,
                L_LINESTATUS    TEXT        NOT NULL,
                L_SHIPDATE      TIMESTAMPTZ NOT NULL,
                L_COMMITDATE    TIMESTAMPTZ NOT NULL,
                L_RECEIPTDATE   TIMESTAMPTZ NOT NULL,
                L_SHIPINSTRUCT  TEXT        NOT NULL,
                L_SHIPMODE      TEXT        NOT NULL,
                L_COMMENT       TEXT        NOT NULL,
                PRIMARY KEY (L_ORDERKEY,L_LINENUMBER)
            );
            CALL set_table_property('LINEITEM', 'clustering_key', 'L_SHIPDATE,L_ORDERKEY');
            CALL set_table_property('LINEITEM', 'segment_key', 'L_SHIPDATE');
            CALL set_table_property('LINEITEM', 'table_group', 'lineitem_tg');
            CALL set_table_property('LINEITEM', 'distribution_key', 'L_ORDERKEY');
            -- columns with LowCardinality
            CALL set_table_property('LINEITEM', 'bitmap_columns', 'L_RETURNFLAG,L_LINESTATUS,L_SHIPINSTRUCT,L_SHIPMODE,L_COMMENT');
            -- columns with LowCardinality
            CALL set_table_property('LINEITEM', 'dictionary_encoding_columns', 'L_RETURNFLAG,L_LINESTATUS,L_SHIPINSTRUCT,L_SHIPMODE,L_COMMENT');
            CALL set_table_property('LINEITEM', 'time_to_live_in_seconds', '31536000');
            COMMIT;
            ```
            
    -   Convert the DDL for a table named customer from ClickHouse to Hologres.
        
        -   The following DDL statement creates a table in the ClickHouse instance.
            
            ```
            -- customer on ClickHouse
            CREATE TABLE customer_local ON CLUSTER default(
              c_custkey             UInt32,
              c_name                String,
              c_address             String,
              c_nationkey           UInt32,
              c_phone               LowCardinality(String),
              c_acctbal             decimal(15,2),
              c_mktsegment          LowCardinality(String),
              c_comment             LowCardinality(String)
            ) ENGINE = MergeTree
            ORDER BY (c_custkey);
            
            CREATE TABLE customer on cluster default as customer_local
            ENGINE = Distributed(default, default, customer_local, c_custkey);
            ```
            
        -   The DDL to create the table in the Hologres instance after the transformation is as follows.
            
            ```
            -- customer on Hologres
            BEGIN;
            CREATE TABLE CUSTOMER (
                C_CUSTKEY    INT    NOT NULL PRIMARY KEY,
                C_NAME       TEXT   NOT NULL,
                C_ADDRESS    TEXT   NOT NULL,
                C_NATIONKEY  INT    NOT NULL,
                C_PHONE      TEXT   NOT NULL,
                C_ACCTBAL    DECIMAL(15,2) NOT NULL,
                C_MKTSEGMENT TEXT   NOT NULL,
                C_COMMENT    TEXT   NOT NULL
            );
            CALL set_table_property('CUSTOMER', 'distribution_key', 'C_CUSTKEY');
            CALL set_table_property('CUSTOMER', 'table_group', 'lineitem_tg');
            CALL set_table_property('CUSTOMER', 'bitmap_columns', 'C_CUSTKEY,C_NATIONKEY,C_NAME,C_ADDRESS,C_PHONE,C_MKTSEGMENT,C_COMMENT');
            CALL set_table_property('CUSTOMER', 'dictionary_encoding_columns', 'C_NAME,C_ADDRESS,C_PHONE,C_MKTSEGMENT,C_COMMENT');
            CALL set_table_property('CUSTOMER', 'time_to_live_in_seconds', '31536000');
            COMMIT;
            ```
            
    
5.  In the PSQL client, run the following command to import the converted DDL into the target Hologres instance.
    
    ```
    PGUSER="<username>" PGPASSWORD="<password>" psql -h "<host>" -p "<port>" -d "<database_name>" -f table.sql;
    ```
    

## Data migration

You can migrate data from a source ClickHouse instance to Hologres using one of the following three methods.

-   (Recommended) Export data from the source instance to a file, then use the `COPY statement` (via JDBC or PSQL) to import the file into the target Hologres instance.
    
-   Write a Flink or Spark job to read data from the source instance and write it to the target Hologres instance. For more information, see [Import data using Spark](/help/en/hologres/write-data-from-apache-spark-to-hologres#task-1937575).
    
-   Use DataWorks Data Integration or DataX to read data from the source instance and write it to the target Hologres instance. For more information, see [Data Integration](/help/en/dataworks/user-guide/overview-of-data-integration/#concept-dr3-k2v-42b).
    

To export data from the source instance to a file and then import it into the target Hologres instance, follow these steps.

1.  In the ClickHouse client, run the following command to export data from the source instance to a local CSV file.
    
    ```
    clickhouse-client --host="<host>" --port="<port>" --user="<username>" --password="<password>"  --query="select * from <database_name>.<table_name> FORMAT CSV"  > table.csv;
    ```
    
    Parameter descriptions are as follows.
    
    **Parameter**
    
    **Description**
    
    host
    
    Address of the source ClickHouse instance.
    
    port
    
    Port of the source ClickHouse instance.
    
    username
    
    Account for logging on to the source ClickHouse instance, with DML read/write and settings permissions, and DDL permissions.
    
    password
    
    Password for the account used to log on to the source ClickHouse instance.
    
    database\_name
    
    Name of the database containing the tables to migrate in the source ClickHouse instance.
    
    table\_name
    
    Name of the table to migrate from the source ClickHouse instance.
    
2.  In the PSQL client, run the following command to import the local CSV file into the Hologres instance.
    
    ```
    PGUSER="<username>" PGPASSWORD="<password>" psql -h "<host>" -p "<port>" -d "<database_name>" -c "COPY <schema_name>.<table_name> FROM STDIN (FORMAT 'csv')" < table.csv;
    ```
    
    Parameter descriptions are as follows.
    
    **Parameter**
    
    **Description**
    
    username
    
    Account for logging on to the target Hologres instance, with DML read/write and settings permissions, and DDL permissions. Typically, this is the AccessKey ID of your Alibaba Cloud account. You can obtain it from [AccessKey Management](https://usercenter2-intl.console.alibabacloud.com/?spm=5176.2020520153.nav-right.dak.3bcf415dCWGUBj#/manage/ak).
    
    password
    
    Password for the account used to log on to the target Hologres instance. Typically, this is the AccessKey secret of your Alibaba Cloud account. You can obtain it from [AccessKey Management](https://usercenter2-intl.console.alibabacloud.com/?spm=5176.2020520153.nav-right.dak.3bcf415dCWGUBj#/manage/ak).
    
    host
    
    Server address of the Hologres instance.
    
    You can log on to the [Management Console](https://hologram.console.alibabacloud.com/#/instance), go to the instance details page, and find it under **Network Information**.
    
    port
    
    Port of the Hologres instance.
    
    You can log on to the [Management Console](https://hologram.console.alibabacloud.com/#/instance), go to the instance details page, and find it under **Network Information**.
    
    database\_name
    
    Name of the database in the Hologres instance to which you are migrating data.
    
    schema\_name
    
    Name of the schema in the Hologres instance to which you are migrating data. Defaults to public if not specified.
    
    table\_name
    
    Name of the table in the Hologres instance to which you are migrating data.
    
3.  Query the imported data in Hologres to verify that the data was imported successfully.
    

## **Offline full-database synchronization from ClickHouse**

You can use the DataWorks Data Integration solution to synchronize an entire ClickHouse database to Hologres offline. For more information, see [Synchronize an entire ClickHouse database to Hologres offline](/help/en/dataworks/user-guide/the-whole-clickhouse-library-is-synchronized-to-hologres-offline).

## Query statement migration

Hologres uses PostgreSQL syntax for queries, while ClickHouse uses its own syntax, which is partially ANSI SQL-compatible. The two are generally similar but differ in details. Therefore, you must migrate query statements. Common migrations involve scalar functions, window functions, and other function names.

Key differences between ClickHouse and Hologres SQL include the following.

-   In ClickHouse, column names enclosed in `''` must be replaced with `""` in Hologres.
    
-   In ClickHouse, use `SELECT X FROM <database_name>.<table_name>`. In Hologres, use `SELECT X FROM <schema_name>.<table_name>`.
    
-   Expression differences mainly involve functions. The following table lists functions that differ between the two systems (functions not listed are identical).
    
    **ClickHouse**
    
    **Hologres**
    
    toYear(expr)
    
    to\_char(expr, 'YYYY')
    
    toInt32(expr)
    
    CAST(expr as INTEGER)
    
    -   uniq()
        
    -   uniqCombined()
        
    -   uniqCombined64()
        
    -   uniqHLL12()
        
    
    approx\_count\_distinct()
    
    uniqExact()
    
    count(distinct x)
    
    quantile(level) (expr)
    
    approx\_percentile(level) WITHIN GROUP(ORDER BY expr)
    
    quantileExact(level) (expr)
    
    percentile\_cont (level) WITHIN GROUP(ORDER BY expr)
    

You can migrate query statements using the following methods.

-   Regular expression replacement
    
    Use regular expressions to replace fixed patterns in ClickHouse syntax (such as function names, identifiers, and expressions) with Hologres syntax. For example, replace `''` with `""`.
    
-   ClickHouse Extension
    
    Hologres provides a ClickHouse Extension that supports some ClickHouse functions without conversion, such as `toUInt32()`.
    

The following examples show how to migrate TPC-H queries from ClickHouse to Hologres.

-   Example 1.
    
    -   ClickHouse query:
        
        ```
        -- Q1 on ClickHouse
        select
          l_returnflag,
          l_linestatus,
          sum(l_quantity) as sum_qty,
          sum(l_extendedprice) as sum_base_price,
          sum(l_extendedprice * (1 - l_discount)) as sum_disc_price,
          sum(l_extendedprice * (1 - l_discount) * (1 + l_tax)) as sum_charge,
          avg(l_quantity) as avg_qty,
          avg(l_extendedprice) as avg_price,
          avg(l_discount) as avg_disc,
          count(*) as count_order
        from
          lineitem
        where
          l_shipdate <= date '1998-12-01' - interval '90' day
        group by
          l_returnflag,
          l_linestatus
        order by
          l_returnflag,
          l_linestatus;
        ```
        
    -   Converted Hologres query:
        
        ```
        -- Q1 on Hologres
        select
          l_returnflag,
          l_linestatus,
          sum(l_quantity) as sum_qty,
          sum(l_extendedprice) as sum_base_price,
          sum(l_extendedprice * (1 - l_discount)) as sum_disc_price,
          sum(l_extendedprice * (1 - l_discount) * (1 + l_tax)) as sum_charge,
          avg(l_quantity) as avg_qty,
          avg(l_extendedprice) as avg_price,
          avg(l_discount) as avg_disc,
          count(*) as count_order
        from
          lineitem
        where
          l_shipdate <= date '1998-12-01' - interval '90' day
        group by
          l_returnflag,
          l_linestatus
        order by
          l_returnflag,
          l_linestatus;
        ```
        
-   Example 2.
    
    -   Querying data on a ClickHouse instance.
        
        ```
        -- Q4 on ClickHouse
        select
          o_orderpriority,
          count(*) as order_count
        from
          orders
        where
          o_orderdate >= date '1993-07-01'
          and o_orderdate < date '1993-07-01' + interval '3' month
          and o_orderdate in (
            select
              o_orderdate
            from
              lineitem,
              orders
            where
              l_orderkey = o_orderkey
              and l_commitdate < l_receiptdate
          )
        group by
          o_orderpriority
        order by
          o_orderpriority;
        ```
        
    -   Converted Hologres query:
        
        ```
        -- Q4 on Hologres
        select
          o_orderpriority,
          count(*) as order_count
        from
          orders
        where
          o_orderdate >= date '1993-07-01'
          and o_orderdate < date '1993-07-01' + interval '3' month
          and exists (
            select
              *
            from
              lineitem
            where
              l_orderkey = o_orderkey
              and l_commitdate < l_receiptdate
          )
        group by
          o_orderpriority
        order by
          o_orderpriority;
        ```
        
-   Example 3.
    
    -   ClickHouse query:
        
        ```
        -- Q11 on ClickHouse
        select
          ps_partkey,
          sum(ps_supplycost * ps_availqty) as value
        from
          partsupp,
          supplier,
          nation
        where
          ps_suppkey = s_suppkey
          and s_nationkey = n_nationkey
          and n_name = 'GERMANY'
        group by
          ps_partkey having
            sum(ps_supplycost * ps_availqty) > (
              select
                sum(ps_supplycost * ps_availqty) * toDecimal32(0.0000010000,9)
              from
                partsupp,
                supplier,
                nation
              where
                ps_suppkey = s_suppkey
                and s_nationkey = n_nationkey
                and n_name = 'GERMANY'
            )
        order by
          value desc
          limit 100;
        ```
        
    -   Converted Hologres query:
        
        ```
        -- Q11 on Hologres
        select
          ps_partkey,
          sum(ps_supplycost * ps_availqty) as value
        from
          partsupp,
          supplier,
          nation
        where
          ps_suppkey = s_suppkey
          and s_nationkey = n_nationkey
          and n_name = 'GERMANY'
        group by
          ps_partkey having
            sum(ps_supplycost * ps_availqty) > (
              select
                sum(ps_supplycost * ps_availqty) * 0.0000010000
              from
                partsupp,
                supplier,
                nation
              where
                ps_suppkey = s_suppkey
                and s_nationkey = n_nationkey
                and n_name = 'GERMANY'
            )
        order by
          value desc
          limit 100;
        ```
        

## Function compatibility

Hologres and ClickHouse share many basic functions with identical syntax. For other ClickHouse functions, Hologres supports either the same function or a semantically equivalent alternative. For details on function compatibility, see [ClickHouse-compatible functions](/help/en/hologres/developer-reference/supported-clickhouse-functions#main-2298341).
