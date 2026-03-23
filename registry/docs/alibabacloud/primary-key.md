Set a primary key (PK) for your table to ensure the uniqueness of each record, maintain data consistency, and simplify data management. In Hologres, a primary key has the same attributes as in a traditional database. It is the unique identifier for records in a table. A field set as a primary key must be unique and not null. You can also set multiple fields as a composite primary key. This topic describes how to set a primary key for a table in Hologres.

## Introduction

In Hologres, the system automatically maintains a primary key index file in the underlying storage layer. This file uses a row store structure to provide a high-speed key-value (KV) service. The key in the index file is the table's primary key (PK), and the value consists of the Row Identifier (RID), formerly \`unique\_id\`, and the Clustering Key. The RID is automatically generated and monotonically increases with each UPSERT operation. The primary key index file enables efficient primary key conflict detection and helps locate data files. If a table has a PK, you can use it to quickly find the RID and Clustering Key in the primary key index file. You can then use the RID and Clustering Key to locate the data file.

Setting a primary key in Hologres helps meet various demands in real-time data warehouse scenarios:

-   Supports high-performance UPSERT or DELETE operations.
    
    In addition to supporting the high-performance, append-only write features of traditional databases, Hologres uses primary keys to perform high-performance updates for full rows or specific columns. When performing a write update, the system updates records based on the primary key without a full table scan. This process achieves high-performance UPSERT operations and ensures data uniqueness.
    
-   Supports high-QPS queries based on primary keys.
    
    As described in [Table storage formats: Column-oriented, row-oriented, and hybrid row-column](/help/en/hologres/user-guide/storage-models-of-tables#task-2273270), if a table has a PK, you can quickly locate entire rows based on the primary key. This improves query performance, especially for row-oriented tables where the primary key defaults to the Clustering Key and Distribution Key. You can use the primary key to locate data files, enabling point queries with ultra-high queries per second (QPS) and millisecond-level latency. This is suitable for online application scenarios such as real-time risk control and real-time recommendations.
    

## Usage recommendations

When setting a primary key, choose fields that have business meaning. Do not use fields of the \`SERIAL\` type as the primary key. This is because \`SERIAL\` types use a table lock during writes, which degrades performance. In addition, \`SERIAL\` types can easily overflow as data grows.

## Limits

-   A primary key must be a unique and non-null column or combination of columns. You can set multiple columns as a composite primary key only using a single statement.
    
-   A composite primary key can consist of up to 32 columns.
    
-   You cannot set fields of the \`FLOAT\`, \`DOUBLE\`, \`NUMERIC\`, \`ARRAY\`, \`JSON\`, \`JSONB\`, \`DATE\`, or other complex data types as a primary key. Hologres V1.3.22 and later support using \`DATE\` type fields as a primary key. To use a \`DATE\` type field as a primary key, check your Hologres instance version and upgrade the instance if necessary. For more information, see [Instance details](/help/en/hologres/user-guide/instance-configurations#concept-2448847) and [Upgrade an instance](/help/en/hologres/user-guide/instance-upgrades#task-2148158).
    
-   Row-oriented tables and hybrid row-column tables must have a primary key. Column-oriented tables do not require a primary key.
    
-   You cannot modify a primary key. To change a primary key, you must recreate the table.
    

## Usage examples

The following examples show the syntax for Hologres V2.1 and later. If your instance is V2.0 or earlier, you must replace the \`WITH (property = 'value')\` statement in the Data Definition Language (DDL) with the \`CALL set\_table\_property\` statement. For more information, see [CREATE TABLE](/help/en/hologres/developer-reference/create-tables).

-   Create a standard column-oriented table and specify a primary key.
    
    -   Syntax for V2.1 and later:
        
        ```
        CREATE TABLE tbl_1 (
            id bigint NOT NULL,
            name text NOT NULL,
            age bigint NOT NULL,
            class text,
            reg_timestamp timestamptz NOT NULL,
            PRIMARY KEY (id)
        )
        WITH (
            orientation = 'column',
            distribution_key = 'id',
            clustering_key = 'age',
            event_time_column = 'reg_timestamp',
            bitmap_columns = 'name,class',
            dictionary_encoding_columns = 'class:auto'
        );
        ```
        
    -   Syntax for all versions:
        
        ```
        BEGIN;
        CREATE TABLE tbl_1 (
         id bigint NOT NULL,
         name text NOT NULL,
         age bigint,
         class text,
         reg_timestamp timesatmptz, 
        PRIMARY KEY (id)
        );
        CALL set_table_property('tbl_1', 'orientation', 'column');
        CALL set_table_property('tbl_1', 'distribution_key', 'id');
        CALL set_table_property('tbl_1', 'clustering_key', 'age');
        CALL set_table_property('tbl_1', 'event_time_column', 'reg_timestamp');
        CALL set_table_property('tbl_1', 'bitmap_columns', 'name,class');
        CALL set_table_property('tbl_1', 'dictionary_encoding_columns', 'class:auto');
        COMMIT;
        ```
        
    
-   Create a standard column-oriented table and specify a composite primary key of two columns.
    
    -   Syntax for V2.1 and later:
        
        ```
        CREATE TABLE tbl_1 (
            id bigint NOT NULL,
            name text NOT NULL,
            age bigint NOT NULL,
            class text NOT NULL,
            reg_timestamp timestamptz NOT NULL,
            PRIMARY KEY (id,age)
        )
        WITH (
            orientation = 'column',
            distribution_key = 'id',
            clustering_key = 'age',
            event_time_column = 'reg_timestamp',
            bitmap_columns = 'name,class',
            dictionary_encoding_columns = 'class:auto'
        );
        ```
        
    -   Syntax for all versions:
        
        ```
        BEGIN;
        CREATE TABLE tbl_2 (
         id bigint NOT NULL,
         name text NOT NULL,
         age bigint NOT NULL,
         class text NOT NULL,
         reg_timestamp timestamptz NOT NULL,
        PRIMARY KEY (id,age)
        );
        CALL set_table_property('tbl_2', 'orientation', 'column');
        CALL set_table_property('tbl_2', 'distribution_key', 'id');
        CALL set_table_property('tbl_2', 'clustering_key', 'age');
        CALL set_table_property('tbl_2', 'event_time_column', 'reg_timestamp');
        CALL set_table_property('tbl_2', 'bitmap_columns', 'name,class');
        CALL set_table_property('tbl_2', 'dictionary_encoding_columns', 'class:auto');
        COMMIT;
        ```
        
    
-   Create a row-oriented table and specify a primary key.
    
    -   Syntax for V2.1 and later:
        
        ```
        CREATE TABLE public.tbl_row (
            id text NOT NULL,
            name text NOT NULL,
            class text,
            PRIMARY KEY (id)
        )
        WITH (
            orientation = 'row',
            distribution_key = 'id',
            clustering_key = 'id'
        );
        ```
        
    -   Syntax for all versions:
        
        ```
        BEGIN;
        CREATE TABLE public.tbl_row (
            id text NOT NULL,
            name text NOT NULL,
            class text ,
        PRIMARY KEY (id)
        );
        CALL set_table_property('public.tbl_row', 'orientation', 'row');
        CALL set_table_property('public.tbl_row', 'clustering_key', 'id');
        CALL set_table_property('public.tbl_row', 'distribution_key', 'id');
        COMMIT;
        ```
        
    
-   Create a partitioned table and specify a primary key.
    
    -   Syntax for V2.1 and later:
        
        ```
        BEGIN;
        CREATE TABLE public.tbl_parent(
          a text , 
          b int, 
          c timestamp, 
          d text,
          ds text,
          PRIMARY KEY (ds,b)
          )
         PARTITION BY LIST(ds)
         WITH ( orientation = 'column');
        CREATE TABLE public.tbl_child_1 PARTITION OF public.tbl_parent FOR VALUES IN('20221207');
        CREATE TABLE public.tbl_child_2 PARTITION OF public.tbl_parent FOR VALUES IN('20221208');
        COMMIT;
        ```
        
    -   Syntax for all versions:
        
        ```
        BEGIN;
        CREATE TABLE public.tbl_parent(
          a text , 
          b int, 
          c timestamp, 
          d text,
          ds text,
          PRIMARY KEY (ds,b)
          )
          PARTITION BY LIST(ds);
        CALL set_table_property('public.tbl_parent', 'orientation', 'column');
        CREATE TABLE public.tbl_child_1 PARTITION OF public.tbl_parent FOR VALUES IN('20221207');
        CREATE TABLE public.tbl_child_2 PARTITION OF public.tbl_parent FOR VALUES IN('20221208');
        COMMIT;
        ```
        
    

## **References**

-   For guidance on setting appropriate table properties based on your query scenario, see [Scenario-based guide for table creation and optimization](/help/en/hologres/user-guide/guide-on-scenario-specific-table-creation-and-tuning).
    
-   For best practices on table creation and queries in key-value (KV) query scenarios, see [Best practices for Key/Value query scenarios](/help/en/hologres/user-guide/query-key-value-pairs).
    
-   For more information about DDL statements for Hologres internal tables, see:
    
    -   [CREATE TABLE](/help/en/hologres/developer-reference/create-tables)
        
    -   [CREATE TABLE AS](/help/en/hologres/developer-reference/create-table-as#DAS)
        
    -   [CREATE TABLE LIKE](/help/en/hologres/developer-reference/create-table-like#DAS)
        
    -   [ALTER TABLE](/help/en/hologres/developer-reference/alter-table#DAS)
        
    -   [DROP TABLE](/help/en/hologres/developer-reference/drop-table#DAS)
