This topic describes how to execute DDL statements to dynamically create and delete an In-Memory Column Index (IMCI) after a table is created.

## Prerequisites

After you add read-only column store nodes to a cluster and configure a cluster endpoint, you can connect to the cluster by using the cluster endpoint and use SQL statements to create and manage IMCIs.

-   Read-only column store nodes are added. For more information, see [Add a read-only column store node](/help/en/polardb/polardb-for-mysql/user-guide/add-a-read-only-column-store-node#task-2175697).
    
-   A cluster endpoint is configured. Manual and automatic request distribution solutions can be used to distribute requests to row store and column store nodes. You can select a request distribution solution based on your business requirements and configure a cluster endpoint. For more information, see [Request distribution overview](/help/en/polardb/polardb-for-mysql/user-guide/request-distribution#concept-2177433).
    
-   The database cluster is connected by using the cluster endpoint. For more information, see [Connect to a cluster](/help/en/polardb/polardb-for-mysql/user-guide/connect-to-a-cluster#task-1580301).
    

## Create an IMCI

-   Syntax:
    
    -   Add the COMMENT 'COLUMNAR=1' field to the ALTER TABLE statement to create an IMCI that is valid for the entire table.
        
    -   Add the COMMENT 'COLUMNAR=1' field to the ALTER TABLE ... MODIFY COLUMN ... statement to create an IMCI valid for a specified column.
        
        **Note**
        
        -   If a cluster is connected by using Data Management (DMS), we recommend that you do not use the lock-free schema change process to modify the **COMMENT** field.
            
        -   For PolarDB for MySQL 8.0.1.1.25 and later, IMCIs support the BLOB and TEXT data types.
            
        -   For PolarDB for MySQL 8.0.1.1.28 and later, IMCIs support the ENUM data type.
            
        -   For PolarDB for MySQL 8.0.1.1.29 and later, you can create IMCIs on partitioned tables.
            
        -   For PolarDB for MySQL 8.0.1.1.30 and later, IMCIs support the BIT, JSON, and Geo data types.
            
        -   IMCIs do not support the SET data type.
            
        -   If the table or column already has a comment, you can add `COLUMNAR=1` to the comment. We recommend that you add `COLUMNAR=1` before the comment content. For example, if the original comment is COMMENT 'abc', the final comment after you add `COLUMNAR=1` is COMMENT 'COLUMNAR=1abc'.
            
        
-   Examples:
    
    ```
    CREATE TABLE t5(
      col1 INT,
      col2 DATETIME,
      col3 VARCHAR(200)
    ) ENGINE InnoDB;
    
    -- Create an IMCI valid for a table.
    ALTER TABLE t5 COMMENT 'COLUMNAR=1';
    
    -- Create an IMCI valid for specified columns.
    ALTER TABLE t5 MODIFY COLUMN col1 INT COMMENT 'COLUMNAR=1',
                   MODIFY COLUMN col2 DATETIME COMMENT 'COLUMNAR=1';
    ```
    

## Delete an IMCI

-   Syntax:
    
    -   Add the COMMENT 'COLUMNAR=0' field to the ALTER TABLE statement to delete an IMCI that is valid for the entire table.
        
    -   Add the COMMENT 'COLUMNAR=0' field to the ALTER TABLE ... MODIFY COLUMN ... statement to delete an IMCI that is valid for a specified column.
        
        **Note**
        
        -   For PolarDB for MySQL 8.0.1.1.25 and later, IMCIs support the BLOB and TEXT data types.
            
        -   For PolarDB for MySQL 8.0.1.1.28 and later, IMCIs support the ENUM data type.
            
        -   For PolarDB for MySQL 8.0.1.1.29 and later, you can create IMCIs on partitioned tables.
            
        -   For PolarDB for MySQL 8.0.1.1.30 and later, IMCIs support the BIT, JSON, and Geo data types.
            
        -   IMCIs do not support the SET data type.
            
        -   If the table or column already has a comment, you can add `COLUMNAR=0` to the comment. We recommend that you add `COLUMNAR=0` before the comment content. For example, if the original comment is COMMENT 'abc', the final comment after you add `COLUMNAR=0` is COMMENT 'COLUMNAR=0abc'.
            
        
-   Examples:
    
    ```
    -- Create an IMCI valid for specified columns.
    CREATE TABLE t6(
      col1 INT COMMENT 'COLUMNAR=1',
      col2 DATETIME COMMENT 'COLUMNAR=1',
      col3 VARCHAR(200)
    ) ENGINE InnoDB;
    
    -- Delete an IMCI valid for specified columns.
    ALTER TABLE t6 MODIFY COLUMN col1 INT COMMENT 'COLUMNAR=0',
                   MODIFY COLUMN col2 DATETIME COMMENT 'COLUMNAR=0';
    
    -- Create an IMCI valid for a table.
    CREATE TABLE t7(
      col1 INT,
      col2 DATETIME,
      col3 VARCHAR(200)
    ) ENGINE InnoDB COMMENT 'COLUMNAR=1';
    
    -- Delete an IMCI valid for a table.
    ALTER TABLE t7 COMMENT 'COLUMNAR=0';
    ```
    

## Modify IMCI definition

-   Syntax:
    
    -   Add the COMMENT 'COLUMNAR=1' field to the ALTER TABLE ... MODIFY COLUMN ... statement to add a column to the IMCI.
        
    -   Add the COMMENT 'COLUMNAR=0' field to the ALTER TABLE ... MODIFY COLUMN ... statement to delete a column for which the IMCI is valid.
        
    
    **Note**
    
    -   For PolarDB for MySQL 8.0.1.1.25 and later, IMCIs support the BLOB and TEXT data types.
        
    -   For PolarDB for MySQL 8.0.1.1.28 and later, IMCIs support the ENUM data type.
        
    -   For PolarDB for MySQL 8.0.1.1.29 and later, you can create IMCIs on partitioned tables.
        
    -   For PolarDB for MySQL 8.0.1.1.30 and later, IMCIs support the BIT, JSON, and Geo data types.
        
    -   IMCIs do not support the SET data type.
        
    -   If the table or column already has a comment, you can add `COLUMNAR=1` or `COLUMNAR=0` to the comment. We recommend that you add `COLUMNAR=1` or `COLUMNAR=0` before the comment content. For example, if the original comment is COMMENT 'abc', the final comment after you add `COLUMNAR=1` is COMMENT 'COLUMNAR=1abc'.
        
    
-   Examples:
    
    ```
    CREATE TABLE t8(
      col1 INT COMMENT 'COLUMNAR=1',
      col2 DATETIME COMMENT 'COLUMNAR=1',
      col3 VARCHAR(200)
    ) ENGINE InnoDB;
    
    -- Add a column for which the IMCI is valid.
    ALTER TABLE t8 MODIFY COLUMN col3 VARCHAR(200) COMMENT 'COLUMNAR=1';
    
    -- Delete a column for which the IMCI is valid.
    ALTER TABLE t8 MODIFY COLUMN col2 DATETIME COMMENT 'COLUMNAR=0';
    ```
    

## Create an IMCI valid for multiple columns

Tables that contain multiple columns are often involved in the OLAP service. You can use the COMMENT field to simplify the process to create an IMCI valid for a table that contains multiple columns. By default, the IMCI is valid for all columns of supported data types in the table. You can also specify only a few columns for which the IMCI is not valid.

**Note**

-   For PolarDB for MySQL 8.0.1.1.25 and later, IMCIs support the BLOB and TEXT data types.
    
-   For PolarDB for MySQL 8.0.1.1.28 and later, IMCIs support the ENUM data type.
    
-   For PolarDB for MySQL 8.0.1.1.29 and later, you can create IMCIs on partitioned tables.
    
-   For PolarDB for MySQL 8.0.1.1.30 and later, IMCIs support the BIT, JSON, and Geo data types.
    
-   IMCIs do not support the SET data type.
    
-   If the table or column already has a comment, you can add `COLUMNAR=1` to the comment. We recommend that you add `COLUMNAR=1` before the comment content. For example, if the original comment is COMMENT 'abc', the final comment after you add `COLUMNAR=1` is COMMENT 'COLUMNAR=1abc'.
    

For example, you can execute the following statement to create a table:

```
CREATE TABLE t9(
  col1 INT, col2 INT, col3 INT,
  col4 DATETIME, col5 TIMESTAMP,
  col6 CHAR(100), col7 VARCHAR(200),
  col8 TEXT, col9 BLOB
) ENGINE InnoDB;
```

You can execute the following statement to create an IMCI valid for the table:

```
ALTER TABLE t9 COMMENT 'COLUMNAR=1', MODIFY COLUMN col7 VARCHAR(200) COMMENT 'COLUMNAR=0';
```

Sample result:

```
SHOW CREATE TABLE t9 FULL\G
*************************** 1. row ***************************
      Table: t9
Create Table: CREATE TABLE `t9` (
  `col1` int(11) DEFAULT NULL,
  `col2` int(11) DEFAULT NULL,
  `col3` int(11) DEFAULT NULL,
  `col4` datetime DEFAULT NULL,
  `col5` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `col6` char(100) DEFAULT NULL,
  `col7` varchar(200) DEFAULT NULL COMMENT 'COLUMNAR=0',
  `col8` text,
  `col9` blob,
  COLUMNAR INDEX  (`col1`,`col2`,`col3`,`col4`,`col5`,`col6`,`col8`,`col9`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT 'COLUMNAR=1'
```

In the preceding example, the IMCI is not valid for the col7 column.

However, due to the InnoDB Online DDL implementation, the `ALTER TABLE t9 COMMENT 'COLUMNAR=1', MODIFY COLUMN col7 VARCHAR(200) COMMENT 'COLUMNAR=0';` statement in the preceding example is implemented in online rebuild mode. This results in poor performance. You can try the following method:

```
-- Modify the COMMENT field for the column for which the IMCI is invalid.
ALTER TABLE t9 MODIFY COLUMN col7 VARCHAR(200) COMMENT 'COLUMNAR=0';

-- Modify the COMMENT field for the table to create the IMCI that is valid for the table.
ALTER TABLE t9 COMMENT 'COLUMNAR=1';
```

## Create an IMCI when you add columns

When you execute the ALTER TABLE ADD COLUMN statement to add columns, you can add the COMMENT 'COLUMNAR=1' field to create an IMCI valid for the columns.

**Note**

-   For PolarDB for MySQL 8.0.1.1.25 and later, IMCIs support the BLOB and TEXT data types.
    
-   For PolarDB for MySQL 8.0.1.1.28 and later, IMCIs support the ENUM data type.
    
-   For PolarDB for MySQL 8.0.1.1.29 and later, you can create IMCIs on partitioned tables.
    
-   For PolarDB for MySQL 8.0.1.1.30 and later, IMCIs support the BIT, JSON, and Geo data types.
    
-   IMCIs do not support the SET data type.
    
-   If the table or column already has a comment, you can add `COLUMNAR=1` to the comment. We recommend that you add `COLUMNAR=1` before the comment content. For example, if the original comment is COMMENT 'abc', the final comment after you add `COLUMNAR=1` is COMMENT 'COLUMNAR=1abc'.
    

For example, you can execute the following statement to create a table, and create an IMCI which is valid for the col1 and col2 columns:

```
CREATE TABLE t10(
  col1 INT COMMENT 'COLUMNAR=1',
  col2 DATETIME COMMENT 'COLUMNAR=1',
  col3 VARCHAR(200)
) ENGINE InnoDB;
```

You can execute the following statement to add the col4 column for which the IMCI is also valid to the `t10` table:

```
ALTER TABLE t10 ADD col4 DATETIME DEFAULT NOW() COMMENT 'COLUMNAR=1';
```

## **Execute INSTANT DDL statements to create and delete an IMCI**

-   For PolarDB for MySQL earlier than 8.0.1.1.42 and 8.0.2.2.23
    
    INSTANT DDL statements are not used by default when you create and delete columns on a table for which an IMCI is valid. If you use INSTANT DDL statements to create and delete columns, the structure of the IMCI must be changed and the IMCI must be rebuilt. When the IMCI is rebuilt, the IMCI still can be used normally.
    
    If you must use INSTANT DDL statements, you can use one of the following methods to enable INSTANT DDL. The execution performance of DDL statements on read-only row store nodes is not affected after INSTANT DDL is enabled.
    
    -   Execute the following statement in your database:
        
        ```
        SET imci_enable_add_column_instant_ddl = ON
        ```
        
    -   Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/). On the **Parameters** page, set the `loose_imci_enable_add_column_instant_ddl` parameter to **ON**.
        
    
    After INSTANT DDL is enabled, an IMCI is asynchronously created in the background when you create or delete columns on column store nodes. The IMCI valid for the table is temporarily unavailable until the IMCI has been created.
    
-   For PolarDB for MySQL 8.0.1.1.42 or later and 8.0.2.2.23 or later
    
    INSTANT DDL statements are used by default when you create and delete columns on a table for which an IMCI is valid. This feature is not compatible with the original rebuild mode. You must set the `imci_enable_add_column_instant_ddl` parameter to **OFF**, and make sure that the table has a primary key.
    

## View the state of an IMCI

After the IMCI feature is enabled, OLAP query requests are distributed to the read-only column store node instead of the primary node. This isolates OLAP and OLTP computing resources. Due to this isolation, the online DDL statements for creating or modifying an IMCI are optimized as **asynchronous DDL** statements. The following logic is used: After the metadata of tables and IMCIs is modified on the primary node, the modifications are synchronized to the read-only column store node by using Redo logs. The read-only column store node starts background threads to concurrently create IMCIs after the data dictionary modifications take effect.

The **asynchronous DDL** logic means that IMCIs can be queried only after they are created, although DDL statements are submitted and data dictionary modifications take effect. However, IMCIs cannot be queried before they have been created. If you perform an OLAP query immediately after the DDL statement is executed, the read-only row store node is still used. If you perform an OLAP query after the IMCI is created, the read-only column store node is used.

You can first execute the INFORMATION\_SCHEMA.IMCI\_INDEXES statement on a read-only column store node to check whether the IMCI is created.

For example, you can execute the following statement to create a table:

```
CREATE TABLE t11(
  col1 INT, col2 DATETIME, col3 VARCHAR(200)
) ENGINE InnoDB;
```

You can execute the following DDL statement to create an IMCI:

```
ALTER TABLE t11 COMMENT 'COLUMNAR=1';
```

This DDL statement is similar to an INSTANT DDL in effect and executed quickly on the primary node. In this case, assume that you immediately execute the following statement to perform a query:

```
SELECT * FROM INFORMATION_SCHEMA.IMCI_INDEXES WHERE TABLE_NAME = 't11';
```

**Note**

If you perform the query on partitioned tables, you can use fuzzy match. Examples

```
SELECT * FROM INFORMATION_SCHEMA.IMCI_INDEXES WHERE TABLE_NAME LIKE '%t1%';
```

If the STATE field in the result is RECOVERING instead of COMMITTED, the IMCI is still being created. For more information about how to view the IMCI build progress, see [View DDL execution speed and build progress for IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/view-ddl-execution-speed-and-build-progress-for-imcis#main-2280897).

```
+--------+-----------+----------+--------+---------+------+----------+--------+
|TABLE_ID|SCHEMA_NAME|TABLE_NAME|NUM_COLS|PACK_SIZE|ROW_ID|STATE     |MEM_SIZE|
+--------+-----------+----------+--------+---------+------+----------+--------+
|    xxxx| test      | t11      |       3|    65536|     0|RECOVERING|    0   |
+--------+-----------+----------+--------+---------+------+----------+--------+
```

If the STATE field is set to COMMITTED, the IMCI has been created. If you perform an OLAP query now, the read-only column store node is used.
