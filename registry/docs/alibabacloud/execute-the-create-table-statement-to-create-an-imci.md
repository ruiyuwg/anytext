This topic describes how to create in-memory column indexes (IMCIs) when you create a table.

## Prerequisites

After you add read-only column store nodes to a cluster and configure a cluster endpoint, you can connect to the cluster by using the cluster endpoint and use SQL statements to create and manage IMCIs.

-   Read-only column store nodes are added. For more information, see [Add a read-only column store node](/help/en/polardb/polardb-for-mysql/user-guide/add-a-read-only-column-store-node#task-2175697).
    
-   A cluster endpoint is configured. Manual and automatic request distribution solutions can be used to distribute requests to row store and column store nodes. You can select a request distribution solution based on your business requirements and configure a cluster endpoint. For more information, see [Request distribution overview](/help/en/polardb/polardb-for-mysql/user-guide/request-distribution#concept-2177433).
    
-   The database cluster is connected by using the cluster endpoint. For more information, see [Connect to a cluster](/help/en/polardb/polardb-for-mysql/user-guide/connect-to-a-cluster#task-1580301).
    

## Create IMCIs

-   Use the CREATE TABLE syntax:
    
    -   When you use the CREATE TABLE statement to create a table, you can add the COLUMNAR=1 string to the COMMENT field to create an IMCI. This addition does not require changes to other parameters of the statement and does not affect other parameters.
        
    -   To add an IMCI on a single column, add the COLUMNAR=1 string to the COMMENT field of the column. To add IMCIs on all columns whose data types support the creation of IMCIs, add the string to the COMMENT field at the end of the CREATE TABLE statement.
        
        **Note**
        
        -   Starting from PolarDB for MySQL 8.0.1.1.25, you can create IMCIs on columns of the BLOB or TEXT data type.
            
        -   Starting from PolarDB for MySQL 8.0.1.1.28, you can create IMCIs on columns of the ENUM data type.
            
        -   Starting from PolarDB for MySQL 8.0.1.1.29, you can create IMCIs on partitioned tables.
            
        -   Starting from PolarDB for MySQL 8.0.1.1.30, you can create IMCIs on columns of the BIT, JSON, or Geo data type.
            
        -   You cannot create IMCIs on columns of the SET data type.
            
        
    
    Examples:
    
    ```
    CREATE TABLE t1(
      col1 INT COMMENT 'COLUMNAR=1',
      col2 DATETIME COMMENT 'COLUMNAR=1',
      col3 VARCHAR(200)
    ) ENGINE InnoDB;
    
    CREATE TABLE t2(
      col1 INT,
      col2 DATETIME,
      col3 VARCHAR(200)
    ) ENGINE InnoDB COMMENT 'COLUMNAR=1';
    ```
    
    In the preceding examples:
    
    -   IMCIs are created on the col1 and col2 columns of the `t1` table.
        
    -   IMCIs are created on all columns of the `t2` table. The data types of the col1, col2, and col3 columns support the creation of IMCIs.
        
-   Use the CREATE TABLE LIKE syntax: If you execute the CREATE TABLE LIKE statement to create a table and the source table contains an IMCI, the destination table contains the same IMCI.
    
-   Use the CREATE TABLE ... SELECT syntax: When you execute the CREATE TABLE ... SELECT statement to create a table, you can add the COLUMNAR=1 string to the COMMENT field of the table to create an IMCI on all columns of the table. However, you cannot use the CREATE TABLE ... SELECT statement to separately create an IMCI on a specific column.
    
    Examples:
    
    ```
    CREATE TABLE t3(
      col1 INT,
      col2 DATETIME,
      col3 VARCHAR(200)
    ) ENGINE InnoDB;
    
    CREATE TABLE t4 COMMENT 'COLUMNAR=1' SELECT col1, col2 FROM t3;
    ```
    
    In the preceding examples:
    
    The COMMENT 'COLUMNAR=1' string is valid for the `t4` table. This statement creates an IMCI on all columns of the `t4` table, including the col1 and col2 columns and subsequently added columns.
    

**Note**

When you add the COLUMNAR=1 string to the COMMENT field, take note of the following points: 1) COLUMNAR is not case-sensitive. 2) You do not need to use a delimiter between COLUMNAR=1 and the original part of the COMMENT field. 3) Adding COLUMNAR=1 does not affect the original part.

## View the IMCI structure of a table

-   Syntax: You can execute the SHOW CREATE TABLE <tablename> FULL statement to view the IMCI establishment information of a table.
    
-   Examples:
    
    ```
    SHOW CREATE TABLE test.t2;
    *************************** 1. row ***************************
           Table: t2
    Create Table: CREATE TABLE `t2` (
      `col1` int(11) DEFAULT NULL,
      `col2` datetime DEFAULT NULL,
      `col3` varchar(200) DEFAULT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='COLUMNAR=1'
    
    SHOW CREATE TABLE test.t2 FULL;
    *************************** 1. row ***************************
           Table: t2
    Create Table: CREATE TABLE `t2` (
      `col1` int(11) DEFAULT NULL,
      `col2` datetime DEFAULT NULL,
      `col3` varchar(200) DEFAULT NULL,
      COLUMNAR INDEX (`col1`,`col2`,`col3`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='COLUMNAR=1'
    ```
    
    In the preceding examples:
    
    -   The `SHOW CREATE TABLE <tablename>` statement displays only the setting of the COMMENT field. The IMCI establishment information is not displayed.
        
    -   To display the IMCI establishment information, you must execute the `SHOW CREATE TABLE <tablename> FULL` statement. You can find the IMCI establishment information in the COLUMNAR INDEX field.
