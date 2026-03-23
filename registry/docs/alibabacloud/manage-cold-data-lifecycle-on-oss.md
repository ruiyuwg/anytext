This topic describes how to archive cold data in CSV or ORC format and how to restore data from an OSS table to PolarStore.

## Prerequisites

You must first [enable cold data archiving](/help/en/polardb/polardb-for-mysql/user-guide/enable-cold-data-archiving#section-ilh-r7f-rmi). This feature has the following cluster version requirements:

-   Archiving to **CSV format**
    
    -   For Cluster Edition clusters, one of the following kernel versions is required:
        
        -   MySQL 8.0.1 revision 8.0.1.1.47 or later.
            
        -   MySQL 8.0.2 revision 8.0.2.2.10 or later.
            
    -   For Multi-master Cluster (Limitless) Edition clusters, kernel version 8.0.1.0.13 or later is required.
        
-   Archiving to **ORC format**
    
    -   For Cluster Edition clusters, revision version 8.0.2.2.30 or later is required.
        
    -   For Multi-master Cluster (Limitless) Edition clusters, revision version 8.0.2.2.30 or later is required.
        

**Note**

When you manually archive cold data on a cluster of the following versions, the operation is not recorded in binary logs.

-   PolarDB for MySQL 8.0.1 with minor version 8.0.1.1.33 or later.
    
-   PolarDB for MySQL 8.0.2 with minor version 8.0.2.2.11.1 or later.
    

## **Usage notes**

### **Archive a standard table**

Cold data archiving is a table-level operation. When you archive a table, it becomes a read-only archived table. The engine of the archived table is the OSS engine, and its data files are stored in OSS. After the cold data archiving operation is complete, the space that the original local table occupied in PolarStore is released.

#### Syntax

## CSV format

-   Format 1:
    
    ```
    ALTER TABLE table_name ENGINE = CSV CONNECTION = 'default_oss_server';
    ```
    
-   Format 2: Your cluster must meet one of the following version requirements.
    
    -   Cluster Edition:
        
        -   MySQL 8.0.1 with revision 8.0.1.1.33 or later.
            
        -   MySQL 8.0.2 with revision 8.0.2.2.13 or later.
            
    -   Multi-master Cluster (Limitless) Edition: The revision must be 8.0.1.1.15 or later.
        
    
    ```
    ALTER TABLE table_name ENGINE = CSV STORAGE OSS;
    ```
    

## ORC format

```
ALTER TABLE table_name ENGINE = ORC STORAGE OSS;
```

**Note**

-   If a data file with the same name as the archived data file already exists in Object Storage Service (OSS), the system reports an error indicating that the file already exists. For example: `Target file for archived table exists on oss.`
    
-   If your cluster is MySQL 8.0.2 with revision 8.0.2.2.29 or later, you can use the `FORCE STORAGE OSS` option to forcibly delete OSS files. You can add the `FORCE STORAGE OSS` option to the preceding syntax to delete the corresponding OSS files when you delete the table schema. Example:
    
    ```
    DROP TABLE table_name FORCE STORAGE OSS;
    ```
    

#### Parameters

**Parameter**

**Description**

table\_name

The name of the table to archive to OSS.

#### Considerations

-   You can use the cold data archiving feature for tables that use the InnoDB engine or the X-Engine engine.
    
-   You cannot use Data Definition Language (DDL) or Data Manipulation Language (DML) statements to modify the table during cold data archiving.
    
-   The cold data archiving feature does not support archiving data files to a user-created OSS server.
    
-   When you use the cold data archiving feature for a table that uses the InnoDB engine, the table must have a primary key.
    
-   After cold data archiving is complete, the archived table in OSS is read-only and may have poor query performance. Test the query performance after data archiving to ensure that it meets your requirements.
    
-   If a table has an [In-Memory Column Index (IMCI)](/help/en/polardb/polardb-for-mysql/user-guide/imcis/), it cannot be archived in CSV format and can only be archived in ORC format.
    

#### Example

Archive the data in table `t` to OSS in **CSV** or **ORC** format.

1.  Create an InnoDB table named `t` in the `oss_test` database.
    
    ```
    CREATE TABLE t(a int, b int, c int, primary key(a)) ENGINE = INNODB;
    ```
    
2.  Insert data into table `t`.
    
    ```
    INSERT INTO t VALUES (1,2,3);
    ```
    
3.  Use the `ALTER` command to archive cold data.
    
    -   Archive in **CSV** format:
        
        ```
        ALTER TABLE t ENGINE = CSV CONNECTION = 'default_oss_server';
        ```
        
    -   Archive in ORC format:
        
        ```
        ALTER TABLE t ENGINE = ORC STORAGE OSS;
        ```
        
4.  After the archiving is complete, you can log on to the [PolarDB console](https://polardb.console.alibabacloud.com/) to view information about the databases and tables archived in OSS, or use an SQL statement to view the data in the archived table:
    
    -   To view information about databases and tables archived in OSS, log on to the [PolarDB console](https://polardb.console.alibabacloud.com/). On the page of the target cluster, go to **Settings and Management** > **Data Lifecycle** > **Data Archive (Cold Data)** to view the information.
        
    -   To view data in the archived table, use an SQL statement. You do not need to change how you access the table. For example:
        
        ```
        SELECT * FROM t;
        ```
        

### **Archive a partitioned table to an OSS external table**

**Note**

-   The PolarDB for MySQL cluster must be version 8.0.2 with minor version 8.0.2.2.25 or later.
    
-   In the console, set the cluster parameter `partition_level_mdl_enabled` to ON to enable the partition-level metadata lock (MDL) feature. For more information about how to set cluster parameters, see [Set cluster and node parameters](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters).
    
-   In the console, set the cluster parameter `loose_use_oss_meta` to ON to enable the `use_oss_meta` feature. For more information about how to set cluster parameters, see [Set cluster and node parameters](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters).
    

#### Syntax

```
CALL dbms_dlm.archive_partition2table('source_db', 'source_tb', 'source_part', 'archive_db', 'archive_table', ' oss_file_filter');
```

#### Parameters

**Parameter**

**Description**

source\_db

The name of the source table database.

source\_tb

The name of the source table.

source\_part

The partitions of the source table to be archived. You can specify multiple partitions separated by commas.

archive\_db

The name of the destination table database.

archive\_table

The name of the destination table.

oss\_file\_filter

Specifies whether to create a new FILE FILTER for the destination table. For more information, see [OSS\_FILE\_FILTER query acceleration](/help/en/polardb/polardb-for-mysql/user-guide/oss-file-filter-query-acceleration).

#### Considerations

-   If the destination OSS table for archiving does not exist, it is automatically created. To accelerate queries, an `oss_file_filter` is also automatically created on the columns specified by `oss_file_filter`. The primary key and partition key are also automatically added to the `oss_file_filter`.
    
-   If the destination OSS table exists, you must check whether the column names and column type definitions are consistent between the two tables. If they are consistent, you can archive the data. If they are not consistent, an error occurs. You can use DDL statements to make the definitions of the two tables consistent. For more information, see [DDL for cold data](/help/en/polardb/polardb-for-mysql/user-guide/introduction-to-cold-data-ddl-capability). In addition, if the destination table has an `oss_file_filter`, and its definition is different from the one in `call dbms_dlm.archive_partition2table`, the `oss_file_filter` of the destination table is used.
    
-   If the destination OSS table does not exist but a file with the same name exists in OSS, an error message is reported when you perform the archiving operation. The error message is as follows:
    
    ```
    mysql> CALL dbms_dlm.archive_partition2table('test', 'sales', 'p0', 'test', 'sales_history', 'id');
    ERROR 8181 (HY000): [Data Lifecycle Management] errmsg: Target file for archived table exists on oss, please remove it first, or use flag 'FORCE' to overwrite on existing files.
    ```
    
    If you confirm that the residual files in OSS are not needed, you can use a stored procedure to delete the data in OSS and then perform the archiving operation.
    
    ```
    -- Delete the OSS data.
    mysql> CALL dbms_oss.delete_table_file('test', 'sales_history');
    
    Query OK, 0 rows affected (0.76 sec)
    
    -- Perform the archiving operation.
    mysql> CALL dbms_dlm.archive_partition2table('test', 'sales', 'p0', 'test', 'sales_history', 'id');
    
    Query OK, 0 rows affected (4.24 sec)
    ```
    
-   The destination OSS table supports only cold data in CSV format.
    
-   After a partition is archived, the table must contain at least one InnoDB partition.
    
-   The archived data loses its partition information and cannot be directly restored. However, you can restore it using `insert select`.
    
-   You cannot archive subpartitions individually. You can archive all subpartitions under an entire first-level partition.
    
-   The following table lists the partition types supported by the partition function of PolarDB for MySQL.
    
    **First-level partition**
    
    **Second-level partition**
    
    **Archiving to an OSS external table**
    
    HASH
    
    Any type
    
    Archiving a HASH first-level partition to an OSS external table is not supported.
    
    LIST
    
    Any type
    
    Supported.
    
    RANGE
    
    Any type
    
    Supported.
    
    KEY
    
    Any type
    
    Supported.
    
    [LIST DEFAULT](/help/en/polardb/polardb-for-mysql/user-guide/list-default-hash)
    
    Any type
    
    Archiving the [DEFAULT](/help/en/polardb/polardb-for-mysql/user-guide/list-default-hash) partition is not supported.
    

#### Example

1.  Create an InnoDB partitioned table and insert data.
    
    ```
    DROP TABLE IF EXISTS `sales`;
    -- Create a partitioned table.
    CREATE TABLE `sales` (
      `id` int DEFAULT NULL,
      `name` varchar(20) DEFAULT NULL,
      `order_time` datetime NOT NULL,
      primary key (order_time)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    PARTITION BY RANGE  COLUMNS(order_time) INTERVAL(month, 1)
    (PARTITION p0 VALUES LESS THAN ('2022-01-01') ENGINE = InnoDB,
     PARTITION p1 VALUES LESS THAN ('2023-01-01 00:00:00') ENGINE = InnoDB,
     PARTITION p2 VALUES LESS THAN ('2024-01-01 00:00:00') ENGINE = InnoDB);
    
    DROP PROCEDURE IF EXISTS proc_batch_insert;
    delimiter $$
    CREATE PROCEDURE proc_batch_insert(IN begin INT, IN end INT, IN name VARCHAR(20))
      BEGIN
      SET @insert_stmt = concat('INSERT INTO ', name, ' VALUES(? , ?, ?);');
      PREPARE stmt from @insert_stmt;
      WHILE begin <= end DO
        SET @ID1 = begin;
        SET @NAME = CONCAT(begin+begin*281313, '@stiven');
        SET @TIME = from_days(begin + 738368);
        EXECUTE stmt using @ID1, @NAME, @TIME;
        SET begin = begin + 1;
        END WHILE;
      END;
    $$
    delimiter ;
    
    CALL proc_batch_insert(1, 1000, 'sales');
    ```
    
2.  Archive the p0 partition of the partitioned table to a new OSS table.
    
    1.  Run the following command to view the schema information of the sales table.
        
        ```
        -- View the status of the current InnoDB table.
        mysql> SHOW CREATE TABLE sales;
        ```
        
        The following result is returned:
        
        ```
        *************************** 1. row ***************************
               Table: sales
        Create Table: CREATE TABLE `sales` (
          `id` int(11) DEFAULT NULL,
          `name` varchar(20) DEFAULT NULL,
          `order_time` datetime NOT NULL,
          PRIMARY KEY (`order_time`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
        /*!50500 PARTITION BY RANGE  COLUMNS(order_time) */ /*!99990 800020200 INTERVAL(MONTH, 1) */
        /*!50500 (PARTITION p0 VALUES LESS THAN ('2022-01-01') ENGINE = InnoDB,
         PARTITION p1 VALUES LESS THAN ('2023-01-01 00:00:00') ENGINE = InnoDB,
         PARTITION p2 VALUES LESS THAN ('2024-01-01 00:00:00') ENGINE = InnoDB,
         PARTITION _p20240201000000 VALUES LESS THAN ('2024-02-01 00:00:00') ENGINE = InnoDB,
         PARTITION _p20240301000000 VALUES LESS THAN ('2024-03-01 00:00:00') ENGINE = InnoDB,
         PARTITION _p20240401000000 VALUES LESS THAN ('2024-04-01 00:00:00') ENGINE = InnoDB,
         PARTITION _p20240501000000 VALUES LESS THAN ('2024-05-01 00:00:00') ENGINE = InnoDB) */
        1 row in set (0.03 sec)
        ```
        
    2.  Run the following command to archive the p0 partition to the OSS table sales\_history.
        
        ```
        -- Archive the p0 partition to the OSS table sales_history and create an OSS_FILE_FILTER on the id column.
        mysql> CALL dbms_dlm.archive_partition2table('test', 'sales', 'p0', 'test', 'sales_history', 'id');
        Query OK, 0 rows affected (1.86 sec)
        ```
        
    3.  Run the following command to view the schema of the sales\_history table.
        
        ```
        SHOW CREATE TABLE sales_history;
        ```
        
        The following is returned:
        
        ```
        *************************** 1. row ***************************;
               Table: sales_history
        Create Table: CREATE TABLE `sales_history` (
          `id` int(11) DEFAULT NULL,
          `name` varchar(20) DEFAULT NULL,
         `order_time` datetime DEFAULT NULL,
          PRIMARY KEY (`order_time`)
        ) /*!99990 800020213 STORAGE OSS */ ENGINE=CSV DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci /*!99990 800020204 NULL_MARKER='NULL' */ /*!99990 800020223 OSS META=1 */ /*!99990 800020224 OSS_FILE_FILTER='id,order_time' */
        1 row in set (0.00 sec)
        ```
        
3.  Run a query on the new OSS table.
    
    **Note**
    
    You can enable the [OSS\_FILE\_FILTER query acceleration feature](/help/en/polardb/polardb-for-mysql/user-guide/oss-file-filter-query-acceleration) to accelerate queries.
    
    ```
    mysql> explain SELECT * FROM sales_history WHERE id = 100;
    +----+-------------+---------------+------------+------+---------------+------+---------+------+------+----------+-------------------------------------------------------------------------------+
    | id | select_type | table         | partitions | type | possible_keys | key  | key_len | ref  | rows | filtered | Extra                                                                         |
    +----+-------------+---------------+------------+------+---------------+------+---------+------+------+----------+-------------------------------------------------------------------------------+
    |  1 | SIMPLE      | sales_history | NULL       | ALL  | NULL          | NULL | NULL    | NULL |  152 |    10.00 | Using where; With pushed engine condition (`test`.`sales_history`.`id` = 100) |
    +----+-------------+---------------+------------+------+---------------+------+---------+------+------+----------+-------------------------------------------------------------------------------+
    1 row in set, 1 warning (0.00 sec)
    
    mysql> SELECT * FROM sales_history WHERE id = 100;
    +------+-----------------+---------------------+
    | id   | name            | order_time          |
    +------+-----------------+---------------------+
    |  100 | 28131400@stiven | 2021-11-09 00:00:00 |
    +------+-----------------+---------------------+
    1 row in set (0.24 sec)
    ```
    

### **Archive a partitioned table**

**Note**

-   The feature of archiving partitioned tables is in canary release. To use this feature, go to [Quota Center](https://quotas.console.alibabacloud.com/white-list-products/polardb/quotas), find the quota by its **Quota ID** `polardb_mysql_hybrid_partition`, and click `Request` in the Actions column to enable the feature.
    
-   You can archive partitioned tables if your PolarDB for MySQL cluster is version 8.0.2 with revision 8.0.2.2.14 or later.
    

Archiving a partitioned table means archiving its partitions. The table becomes a hybrid partitioned table after archiving, and the data files of the archived partitions are stored in OSS. After the archiving operation is complete, the space that the partitions occupied in PolarStore is automatically released.

#### Syntax

-   Archive as a file in **CSV** format:
    
    ```
    ALTER TABLE table_name CHANGE PARTITION part_name ENGINE = CSV;
    ```
    
-   Archive as a file in **ORC** format:
    
    ```
    ALTER TABLE table_name CHANGE PARTITION part_name ENGINE = ORC;
    ```
    

**Note**

-   If a data file with the same name as the archived data file already exists in OSS, the system reports an error indicating that the file already exists. For example: `Target file for archived table exists on oss.`
    
-   If your cluster is MySQL 8.0.2 with revision 8.0.2.2.29 or later, you can use the `FORCE STORAGE OSS` option to forcibly delete OSS files. You can add the `FORCE STORAGE OSS` option to the preceding three syntaxes to delete the corresponding OSS files when you delete the table schema. For example, to archive a partitioned table in CSV format, the syntax with the `FORCE STORAGE OSS` option is as follows:
    
    ```
    ALTER TABLE table_name CHANGE PARTITION part_name ENGINE = CSV FORCE STORAGE OSS;
    ```
    

#### Parameters

**Parameter**

**Description**

table\_name

The name of the table to archive to OSS.

part\_name

The name of the partition to archive to OSS.

#### Considerations

-   You can only use the cold data archiving feature for partitioned tables that use the InnoDB engine.
    
-   When you archive partitions of a partitioned table, you must keep at least one partition that uses the InnoDB engine. You cannot archive the last partition that uses the InnoDB engine.
    
-   The table becomes a hybrid partitioned table after archiving. You cannot perform DDL operations on a hybrid partitioned table. For more information about the considerations, see [Create a hybrid partition](/help/en/polardb/polardb-for-mysql/user-guide/create-a-hybrid-partitioned-table#concept-2234558).
    
-   You cannot modify the data of an archived partition.
    
-   You cannot archive subpartitions in a partitioned table.
    
-   You cannot archive the DEFAULT partition of a list default hash partitioned table.
    
-   You cannot archive HASH or KEY partitioned tables.
    
-   You cannot manually archive an entire partitioned table.
    
-   When you archive data in a partition, if a file with the same name exists in OSS, the operation fails and an error message similar to the following is reported:
    
    ```
    Target file for archived table exists on oss.
    ```
    
    You must run the following command to overwrite the existing file in OSS. Replace `table_name` and `part_name` with your actual values.
    
    ```
    ALTER TABLE table_name CHANGE PARTITION part_name ENGINE = CSV/ORC FORCE;
    ```
    

#### Example

Archive the data in the `p1` and `p2` partitions of table `t` to OSS in CSV format.

1.  Create an InnoDB table named `t` in the database.
    
    ```
    CREATE TABLE t(a int, b int, c int, primary key(a))
    PARTITION BY RANGE(a)
    (PARTITION p1 values less than(100),
     PARTITION p2 values less than(200),
     PARTITION p3 values less than MAXVALUE
    );
    ```
    
2.  Insert data into table `t`.
    
    ```
    INSERT INTO t VALUES(1,1,1);
    INSERT INTO t VALUES(10,10,10);
    INSERT INTO t VALUES(100,100,100);
    INSERT INTO t VALUES(150,150,150);
    INSERT INTO t VALUES(200,200,200);
    INSERT INTO t VALUES(1000,1000,1000);
    ```
    
3.  Run the following commands to archive the data in the `p1` and `p2` partitions to the OSS engine.
    
    -   Archive in **CSV** format:
        
        ```
        ALTER TABLE t CHANGE PARTITION p1 ENGINE = csv;
        ALTER TABLE t CHANGE PARTITION p2 ENGINE = csv;
        ```
        
    -   Archive in **ORC** format:
        
        ```
        ALTER TABLE t CHANGE PARTITION p1 ENGINE = ORC;
        ALTER TABLE t CHANGE PARTITION p2 ENGINE = ORC;
        ```
        
4.  After the archiving is complete, you can log on to the [PolarDB console](https://polardb.console.alibabacloud.com/) to view information about the databases and tables archived in OSS, or use an SQL statement to query data in the hybrid partitioned table:
    
    -   To view information about databases and tables archived in OSS, log on to the [PolarDB console](https://polardb.console.alibabacloud.com/). On the page of the target cluster, go to **Settings and Management** > **Data Lifecycle** > **Data Archive (Cold Data)** to view the information.
        
    -   For more information about querying data in a hybrid partitioned table, see [Querying hybrid partitions](/help/en/polardb/polardb-for-mysql/user-guide/create-a-hybrid-partitioned-table#section-ca2-pfj-gp3).
        

### **TDE encryption for archived data**

**Note**

-   Only manual archiving operations in CSV or ORC format are supported.
    
-   Only PolarDB for MySQL clusters of the following versions support data encryption for corresponding files in OSS during archiving:
    
    -   8.0.1 with minor version 8.0.1.1.47 or later.
        
    -   8.0.2 with minor version 8.0.2.2.27 or later.
        
-   If your cluster's minor version does not meet the requirements, you must upgrade the minor version. For more information, see [Manage minor versions](/help/en/polardb/polardb-for-mysql/user-guide/upgrade-the-cluster-version).
    

To meet your data security requirements, you can specify transparent data encryption (TDE) for files when you archive cold data to OSS. The basic principle is that you select the files to be encrypted during the archiving operation, and the OSS server then performs the encryption. For more information about encryption, see [Data encryption](/help/en/oss/user-guide/data-encryption/). After encryption, you can directly query the archived data using SQL statements in PolarDB for MySQL. The entire encryption and decryption process is completed in the background and is transparent to you. No extra operations are required.

**Syntax**

During a manual archiving operation, you can add the `ENCRYPTION="Y"` syntax to enable TDE.

```
ALTER TABLE t1 engine = CSV ENCRYPTION="Y" STORAGE OSS;
```

### **Restore data from OSS to PolarStore**

#### **Restore data from a standard archived table in OSS**

To occasionally modify cold data that is archived to OSS, you can use the `ALTER ENGINE` syntax to restore the data from OSS to PolarStore. After the data is restored to PolarStore, the cold data in OSS is deleted. After you modify the data, you can archive the table to OSS again.

##### Syntax

```
ALTER TABLE table_name ENGINE[=]engine_name;
```

##### Parameters

**Parameter**

**Description**

table\_name

The name of the OSS table to restore.

engine\_name

The engine type after restoration.

##### Considerations

When an OSS table is in a read-only state, you cannot perform modification operations, such as `INSERT`, `UPDATE`, or `DELETE`. To modify archived cold data, you must convert the OSS table into a read-write table, such as an InnoDB table. If you try to modify a read-only OSS table, the following error is reported:

```
1036 - Table 't1' is read only
```

##### Example

In the `oss_test` database, restore the OSS table `t` to PolarStore.

```
ALTER TABLE `oss_test`.`t` ENGINE = InnoDB;
```

Modify the data in the InnoDB table `t`. After you modify the data, you can archive table `t` from the InnoDB engine to OSS again. For example:

```
ALTER TABLE t ENGINE = CSV CONNECTION = 'default_oss_server';
```

or

```
ALTER TABLE t ENGINE = CSV STORAGE OSS;
```

#### **Restore data from a partitioned archived table in OSS**

To restore data from an archived partitioned table to PolarStore, you can use the **ALTER** statement to restore the data from OSS to PolarStore. After the data is restored, the cold data in OSS is deleted.

##### **Syntax**

```
ALTER TABLE table_name REORGANIZE PARTITION part_name INTO (partition_definition);
```

##### **Parameters**

**Parameter**

**Description**

table\_name

The name of the OSS table to restore.

part\_name

The name of the partition to restore.

partition\_definition

Must be consistent with the `partition_definition` of the partition to be restored.

##### **Example**

In the database, restore the data from the `p1` partition of the partitioned table `t`, which is archived in OSS, to PolarStore.

```
ALTER TABLE t REORGANIZE PARTITION p1 INTO(PARTITION p1 values less than(100));
```

### **Delete corresponding files from OSS**

**Note**

-   Only PolarDB for MySQL clusters of the following versions support deleting corresponding files from OSS:
    
    -   8.0.1 with minor version 8.0.1.1.42 or later.
        
    -   8.0.2 with minor version 8.0.2.2.23 or later.
        
-   If your cluster's minor version does not meet the requirements, you cannot delete the corresponding files from OSS. You must upgrade the minor version of your cluster. For more information, see [Manage minor versions](/help/en/polardb/polardb-for-mysql/user-guide/upgrade-the-cluster-version).
    

When you delete a table from OSS or restore it to PolarStore, the files in OSS are not deleted. After you confirm that the data is no longer needed, you can use the following syntax to delete the corresponding files from OSS:

```
CALL dbms_oss.delete_table_file('database_name', 'table_name');
```

Because the deletion of files from OSS is an asynchronous operation, the files can be completely deleted only after all nodes in the cluster no longer depend on them. The operation may be delayed when traffic is heavy. Therefore, if the preceding command fails and returns the error message `OSS files are still in use`, wait for a period of time and run the command again.
