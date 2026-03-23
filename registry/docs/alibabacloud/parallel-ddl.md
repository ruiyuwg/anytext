PolarDB supports the parallel Data Definition Language (DDL) feature. When database hardware resources are idle, you can use this feature to speed up DDL execution. This helps avoid blocking subsequent Data Manipulation Language (DML) operations and shortens the time window required for DDL operations.

## Applicability

To create a secondary index, your PolarDB cluster must meet one of the following version requirements:

-   PolarDB for MySQL 8.0.2 with revision version 8.0.2.1.7 or later.
    
-   PolarDB for MySQL 8.0.1 with revision version 8.0.1.1.10 or later.
    
-   PolarDB for MySQL 5.7 with revision version 5.7.1.0.7 or later.
    

To create a primary key index, your PolarDB cluster must meet one of the following version requirements:

-   PolarDB for MySQL 8.0.2 with revision version 8.0.2.2.9 or later.
    
-   PolarDB for MySQL 8.0.1 with revision version 8.0.1.1.31 or later.
    

For more information, see [Query the version number](/help/en/doc-detail/423885.html#section-7p8-757-iyh).

## Important notes

Enabling the parallel DDL feature increases the number of parallel threads. This consumes more hardware resources, such as CPU, memory, and I/O, and can affect other SQL operations that are running at the same time. We recommend that you use this feature during off-peak hours or when hardware resources are sufficient.

## Limits

The parallel DDL feature currently supports DDL operations that create primary key indexes and secondary indexes. It does not support creating full-text indexes, spatial indexes, or secondary indexes on virtual columns.

## Background information

Traditional DDL operations were designed for single-core processors and traditional hard disks. This design can result in long execution times and high latency for DDL operations on large tables. For example, a high-latency DDL operation to create a secondary index can block subsequent DML queries that depend on the new index. The development of multi-core processors provides the hardware support for parallel DDL to use more threads. The widespread use of the Solid State Disk (SSD) makes random access latency comparable to sequential access latency. This makes it especially beneficial to use parallel DDL to accelerate index creation on large tables.

## How to use

-   innodb\_polar\_parallel\_ddl\_threads
    
    You can enable the parallel DDL feature by setting the innodb\_polar\_parallel\_ddl\_threads parameter:
    
    **Parameter**
    
    **Level**
    
    **Description**
    
    innodb\_polar\_parallel\_ddl\_threads
    
    Session
    
    Controls the number of parallel threads for each DDL operation. Value range: 1 to 16. The default value is 1, which executes a single-threaded DDL.
    
    If this parameter value is not 1, parallel DDL is automatically enabled when you create a secondary index.
    
    **Note**
    
    When this parameter is set to 1, the system uses two parallel threads by default.
    
-   innodb\_parallel\_build\_primary\_index
    
    You can use the innodb\_parallel\_build\_primary\_index parameter to control whether to allow parallel DDL when you create a primary key index:
    
    **Note**
    
    To use the parallel primary key index creation feature, go to [Quota Center](https://quotas.console.alibabacloud.com/white-list-products/polardb/quotas). Find the quota with the **Quota ID** of **polardb\_mysql\_pddl\_for\_pk**, and click **Apply** in the **Actions** column to request a trial.
    
    **Parameter**
    
    **Level**
    
    **Description**
    
    innodb\_parallel\_build\_primary\_index
    
    Global
    
    Controls whether to allow parallel DDL when creating a primary key index. The valid values are as follows:
    
    -   ON: Allows parallel DDL for primary key index creation.
        
    -   OFF: Disallows parallel DDL for primary key index creation (default).
        
    
-   innodb\_polar\_use\_sample\_sort
    
    If parallel DDL alone does not meet your performance requirements, you can use the innodb\_polar\_use\_sample\_sort parameter to further optimize the sorting process during index creation.
    
    **Parameter**
    
    **Level**
    
    **Description**
    
    innodb\_polar\_use\_sample\_sort
    
    Session
    
    The switch for the sample sort optimization feature. The valid values are as follows:
    
    -   ON: Enables the sample sort optimization feature.
        
    -   OFF: Disables the sample sort optimization feature (default).
        
    
-   innodb\_polar\_use\_parallel\_bulk\_load
    
    If the preceding features still do not meet your performance requirements, you can also use the innodb\_polar\_use\_parallel\_bulk\_load parameter to further optimize the index tree creation process.
    
    **Parameter**
    
    **Level**
    
    **Description**
    
    innodb\_polar\_use\_parallel\_bulk\_load
    
    Session
    
    The switch for the parallel bulk load optimization feature. The valid values are as follows:
    
    -   ON: Enables the parallel bulk load optimization feature.
        
    -   OFF: Disables the parallel bulk load optimization feature (default).
        
    

## Performance test

-   Test environment
    
    -   A Standard Edition PolarDB for MySQL 8.0 cluster with 16 cores and 128 GB of memory.
        
    -   The cluster has 50 TB of storage space.
        
-   Test table schema
    
    Create a table named `t0` using the following statement:
    
    ```
    CREATE TABLE t0(
    a INT PRIMARY KEY,
    b INT) ENGINE=InnoDB;
    ```
    
-   Test table data
    
    Generate test data using the following statement:
    
    ```
    DELIMITER //
    CREATE PROCEDURE populate_t0()
    BEGIN
         DECLARE i int DEFAULT 1;
         WHILE (i <= $table_size) DO
                 INSERT INTO t0 VALUES (i, 1000000 * RAND());
                 SET i = i + 1;
         END WHILE;
    END //
    DELIMITER ;
    CALL populate_t0() ;
    ```
    
    **Note**
    
    -   When you run the test, replace `$table_size` with the number of records in the table, such as `1000000`.
        
    -   This test uses tables with 1,000,000, 10,000,000, 100,000,000, and 1,000,000,000 records, and a table with 1 TB of data.
        
    -   The 1 TB test table is generated using the Sysbench tool. For more information about how to use the Sysbench tool, see [Test tools](/help/en/polardb/polardb-for-mysql/oltp-performance-test#section-w3b-lrq-tdb).
        
    
-   Test method
    
    This test measures the performance improvement of creating a secondary index on the `b` field of the `INT` data type for tables of different sizes. In this test, parallel DDL is enabled, and the innodb\_polar\_parallel\_ddl\_threads parameter is set to 1, 2, 4, 8, 16, and 32 to vary the number of parallel threads.
    
-   Test results
    
    -   The following graph shows the parallel DDL speedup ratio when only the innodb\_polar\_parallel\_ddl\_threads parameter is enabled.![A](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4485337061/p184597.png)
        
    -   The following graph shows the parallel DDL speedup ratio when both the innodb\_polar\_parallel\_ddl\_threads and innodb\_polar\_use\_sample\_sort parameters are enabled.![加速效果图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1164870561/p399932.png)
        
    -   The following graph shows the parallel DDL speedup ratio when the innodb\_polar\_parallel\_ddl\_threads, innodb\_polar\_use\_sample\_sort, and innodb\_polar\_use\_parallel\_bulk\_load parameters are enabled.![B](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5708134861/p184600.png)
        

## Contact us

If you have any questions about DDL operations, please [contact technical support](/help/en/cloud-migration-guide-for-beginners/latest/contact-us).
