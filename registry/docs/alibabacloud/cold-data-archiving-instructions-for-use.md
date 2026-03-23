This topic describes how to use cold data archiving. Before you begin, confirm the archiving format and verify that your cluster meets the requirements. For more information, see [Archive format comparison](#eadf73e7e3bpk) and [Applicable scope](#1214b3ad9492s).

## Scope

-   Archive in **CSV format**.
    
    -   For the Cluster Edition, you must use one of these kernel versions:
        
        -   MySQL 8.0.1, revision 8.0.1.1.47 or later.
            
        -   MySQL 8.0.2, revision 8.0.2.2.10 or later.
            
    -   For the Multi-master Cluster (Limitless) Edition, you must use kernel version 8.0.1.0.13 or later.
        
-   Archiving to the **ORC format**
    
    -   For the Cluster Edition, you must use revision 8.0.2.2.30 or later.
        
    -   For the Multi-master Cluster (Limitless) Edition, you must use revision 8.0.2.2.30 or later.
        
-   Archived as **X-Engine format**
    
    -   To archive a standard table:
        
        -   MySQL 8.0.1, revision 8.0.1.1.31 or later.
            
        -   MySQL 8.0.2, revision 8.0.2.2.12 or later.
            
    -   To archive a partitioned table: MySQL 8.0.2, revision 8.0.2.2.12 or later.
        
    -   To archive to an [X-Engine column-oriented table](/help/en/polardb/polardb-for-mysql/user-guide/columnar-table-overview): MySQL 8.0.2, revision 8.0.2.2.33 or later.
        

## **Archive Cold Data**

-   **Archive to OSS**: First, [enable cold data archiving](/help/en/polardb/polardb-for-mysql/user-guide/enable-cold-data-archiving). When archiving cold data, archive standard tables or partitioned tables as needed.
    
    -   **Standard tables**
        
        -   [Manually archive standard tables as CSV or ORC format](/help/en/polardb/polardb-for-mysql/user-guide/manage-cold-data-lifecycle-on-oss#title-6uc-ev1-llm).
            
    -   **Partitioned tables**
        
        -   Manually archive some partitioned data or archive it to OSS external tables. For more information, see [Archive partitioned tables](/help/en/polardb/polardb-for-mysql/user-guide/manage-cold-data-lifecycle-on-oss#title-xsc-b8r-m9u) or [Archive partitioned tables to OSS external tables](/help/en/polardb/polardb-for-mysql/user-guide/manage-cold-data-lifecycle-on-oss#3af5b5b6f1gmv).
            
        -   Create a DLM policy to automatically archive cold data. For more information, see [Automatically archive cold data](/help/en/polardb/polardb-for-mysql/user-guide/usage-4).
            
-   **Archive to X-Engine**: First, [enable cold data archiving](/help/en/polardb/polardb-for-mysql/user-guide/enable-cold-data-archiving) and [high-compression engine (X-Engine)](/help/en/polardb/polardb-for-mysql/user-guide/enable-x-engine). When archiving cold data, archive standard tables or partitioned tables as needed.
    
    -   **Standard tables**
        
        -   [Manually archive as X-Engine row store or column store format](/help/en/polardb/polardb-for-mysql/user-guide/archive-data-to-x-engine).
            
    -   **Partitioned tables**
        
        -   Manually archive some partitioned data to X-Engine partitions. For more information, see [Archive as X-Engine engine format](/help/en/polardb/polardb-for-mysql/user-guide/archive-data-to-x-engine).
            
        -   Create a DLM policy to automatically archive cold data. For more information, see [Archive partitioned tables as X-Engine engine format](/help/en/polardb/polardb-for-mysql/user-guide/archive-partitioned-tables-in-the-x-engine-format).
            

## **Query Cold Data**

-   **Standard tables**
    
    You can query archived data without changing the table access method, regardless of the archiving format.
    
-   **Partitioned tables**
    
    -   **Archive to OSS external tables**: Modify the table access method to query archived data. This means **querying the specified archived table**. For more information, see [Archive partitioned tables to OSS external tables](/help/en/polardb/polardb-for-mysql/user-guide/manage-cold-data-lifecycle-on-oss#3af5b5b6f1gmv).
        
    -   **Archive partitioned tables**: The archived table is a hybrid partitioned table. For more information, see [Query hybrid partitions](/help/en/polardb/polardb-for-mysql/user-guide/create-a-hybrid-partitioned-table#title-jc4-ndh-ocz).
        
        You can query partition data across different storage engines in one of the following three ways:
        
        -   Set the `hybrid_partition_query_mix_engine_enabled` parameter to **ON**. This allows queries to return data from InnoDB, X-Engine, and OSS partitions. For example:
            
            ```
            -- t1 is a hybrid partitioned table.
            SELECT * FROM t1;
            ```
            
        -   Set the `hybrid_partition_query_mix_engine_enabled` parameter to **OFF**. Queries will then return data only from InnoDB and X-Engine partitions. For example:
            
            ```
            -- t1 is a hybrid partitioned table.
            SELECT * FROM t1;
            ```
            
        -   Specify a partition name. This lets you query data from a partition that uses any type of storage engine. For example:
            
            ```
            -- t1 is a hybrid partitioned table. p1 is the partition name.
            SELECT * FROM t1 PARTITION (p1);
            ```
            
        

**Note**

Because archived cold data is stored in a single-table, multi-file format, use parallel query for query optimization when viewing cold data. For more information, see [Cold data parallel query](/help/en/polardb/polardb-for-mysql/user-guide/parallel-query-of-cold-data).

## **Modify Cold Data**

To modify cold data on OSS infrequently, use the `ALTER` syntax to import cold data from OSS back to PolarDB storage space for modification. After importing, the cold data on OSS is simultaneously deleted. After modifying the data, archive the modified table data to OSS again.

## Standard Tables

### **Syntax**

```
ALTER TABLE table_name ENGINE[=]engine_name;
```

### **Parameters**

**Parameter**

**Description**

table\_name

The name of the OSS table to import.

engine\_name

The engine type after importing.

### **Notes**

When an OSS table is read-only, it does not support modification operations (`INSERT`, `UPDATE`, and `DELETE`). To modify archived cold data, convert the OSS table to a read-write table, such as an InnoDB table. When modifying a read-only OSS table, the error message is as follows:

```
1036 - Table 't' is read only
```

### **Example**

In the `oss_test` database, import the OSS table `t` back to PolarDB storage space.

```
ALTER TABLE `oss_test`.`t` ENGINE = InnoDB;
```

Modify the data of the InnoDB table `t`. After modifying the data, archive the InnoDB engine table `t` to OSS again. For example:

```
ALTER TABLE t ENGINE = CSV CONNECTION = 'default_oss_server';
```

or

```
ALTER TABLE t ENGINE = CSV STORAGE OSS;
```

## Partitioned Tables

### **Syntax**

```
ALTER TABLE table_name REORGANIZE PARTITION part_name INTO (partition_definition);
```

### **Parameters**

**Parameter**

**Description**

table\_name

The name of the OSS table to import.

part\_name

The name of the partition to import.

partition\_definition

Keep consistent with the `partition_definition` of the partition to import.

### **Example**

In the database, import the data from partition `p1` of the partitioned table `t` archived on OSS back to PolarDB storage space.

```
ALTER TABLE t REORGANIZE PARTITION p1 INTO(PARTITION p1 values less than(100));
```

## **Delete Cold Data**

**Note**

-   Only PolarDB for MySQL clusters of the following versions support deleting corresponding files from OSS:
    
    -   8.0.1 with minor version 8.0.1.1.42 or later.
        
    -   8.0.2 with minor version 8.0.2.2.23 or later.
        
-   If your cluster's minor version does not meet the requirements, you cannot delete the corresponding files from OSS. You must upgrade the minor version of your cluster. For more information, see [Manage minor versions](/help/en/polardb/polardb-for-mysql/user-guide/upgrade-the-cluster-version).
    

After you delete tables on OSS or import them back to PolarDB storage, files on OSS are not automatically deleted. After confirming that the data is no longer in use, delete the corresponding files on OSS as follows. For more information, see [Delete corresponding files on OSS](/help/en/polardb/polardb-for-mysql/user-guide/manage-cold-data-lifecycle-on-oss#c42fa7b0f3mmq).

-   **Standard tables and OSS external tables**
    
    Use `DROP TABLE` to delete archived tables. Then, use the `CALL dbms_oss.delete_table_file('database_name', 'table_name');` command to delete corresponding files on OSS.
    
-   **Partitioned tables**
    
    Use the `CALL dbms_oss.delete_table_file('database_name', 'table_name');` command to delete corresponding files on OSS.
    

Deleting corresponding files on OSS is an asynchronous operation. Complete deletion occurs only after all nodes in the cluster no longer depend on the OSS file. Additionally, this process might experience some delay during high traffic.

### **FORCE STORAGE OSS Option**

**Note**

Only PolarDB for MySQL version 8.0.2 with a minor version of 8.0.2.2.29 or later supports the FORCE STORAGE OSS option to force delete OSS files.

-   **Standard tables and OSS external tables**
    
    ```
    DROP TABLE table_name [FORCE STORAGE OSS];
    ```
    
    **Note**
    
    The FORCE STORAGE OSS option for the DROP TABLE command provides one-click cleanup. It automatically deletes associated OSS storage files when you delete the table schema.
    
-   **Partitioned tables**
    
    ```
    ALTER TABLE table_name DROP PARTITION part_name [FORCE STORAGE OSS];
    ```
    
    **Note**
    
    The DROP PARTITION clause of the ALTER TABLE statement, combined with the FORCE STORAGE OSS option, enables synchronous deletion of partitioned table metadata and corresponding OSS storage files.
    
-   **CHANGE PARTITION ENGINE**
    
    ```
      ALTER TABLE table_name CHANGE PARTITION part_name ENGINE = CSV|ORC [FORCE STORAGE OSS]
    ```
    
    **Note**
    
    The CHANGE PARTITION ENGINE cold data archiving feature provides a force overwrite mechanism, allowing automatic replacement of files with the same name.
    

## Format Comparison

Compare the formats below to choose the best one for your cold data archiving needs.

**Note**

-   Archiving standard tables, OSS external tables, and partitioned tables has limits. Read them carefully before archiving to avoid business impact.
    
-   After archiving, cold data is stored in the system-default OSS, not your own OSS bucket. Currently, you can view archived data only in the PolarDB console.
    
-   Partitioned table archiving methods:
    
    -   **Partitioned table archiving**: This method archives a partition of a partitioned table in-place. The data remains in the original table, but changes the storage medium for the partition from PolarDB (hot storage) to OSS (cold storage), which turns the table into a hybrid partitioned table containing both hot and cold partitions.
        
    -   **Partitioned table archiving to OSS external table**: This method moves a partition’s data out of the original table and stores it in a new, independent OSS external table. The original table then loses that partition.
        

**Comparison item**

**CSV**

**ORC**

**X-Engine**

**Open-source format**

Yes

Yes

No

**Archiving method**

-   Manual archiving:
    
    -   [Archive a standard table](/help/en/polardb/polardb-for-mysql/user-guide/manage-cold-data-lifecycle-on-oss#title-6uc-ev1-llm)
        
    -   [Archive a partitioned table to an OSS external table](/help/en/polardb/polardb-for-mysql/user-guide/manage-cold-data-lifecycle-on-oss#3af5b5b6f1gmv)
        
    -   [Archive a partitioned table](/help/en/polardb/polardb-for-mysql/user-guide/manage-cold-data-lifecycle-on-oss#title-xsc-b8r-m9u)
        
-   Automatic archiving:
    
    -   [Archive a partitioned table](/help/en/polardb/polardb-for-mysql/user-guide/usage-4#title-647-93p-2tq)
        

Manual archiving:

-   [Archive a standard table](/help/en/polardb/polardb-for-mysql/user-guide/manage-cold-data-lifecycle-on-oss#title-6uc-ev1-llm)
    
-   [Archive a partitioned table](/help/en/polardb/polardb-for-mysql/user-guide/manage-cold-data-lifecycle-on-oss#title-xsc-b8r-m9u)
    

-   Manual archiving:
    
    -   [Archive to X-Engine format](/help/en/polardb/polardb-for-mysql/user-guide/archive-data-to-x-engine)
        
-   Automatic archiving:
    
    -   [Archive a partitioned table to X-Engine format](/help/en/polardb/polardb-for-mysql/user-guide/archive-partitioned-tables-in-the-x-engine-format)
        

**Archiving speed**

Fast

**Note**

Supports only single-threaded archiving.

Slow

**Note**

Supports only single-threaded archiving.

Fast

**Note**

Archives data to PolarDB storage space.

**Query speed**

-   Poor. Without indexes and using sequential queries, performance is about one-fifth to one-tenth that of the InnoDB storage engine.
    
-   Faster than ORC on row store nodes.
    

**Note**

Supports both single-threaded and multi-threaded reads.

-   Poor. Without indexes and using sequential queries, performance is about one-fifth to one-tenth that of the InnoDB storage engine.
    
-   Best for analytical processing (AP) queries on dedicated column store nodes.
    

**Note**

Supports only single-threaded reads.

-   Performance is fast, though approximately 30% slower than the InnoDB engine. This is because data is stored in the PolarDB bucket, which provides significantly faster access than OSS cold data.
    
-   Row-oriented tables suit transactional processing (TP) queries. Column-oriented tables suit AP queries on column store nodes.
    

**Transaction support**

No

No

Yes

**Index support**

No

No

Yes

**How to modify archived data**

Archived tables on OSS are read-only. To modify data, first import it back to PolarDB storage space.

You can run DML operations on archived tables.

**Storage space used**

Same as an InnoDB table without indexes.

For the same data volume, uses 45% of the storage space required by CSV files.

Compresses storage space to 10%–30% of the InnoDB engine’s usage. Actual compression depends on data characteristics.

**Backup and recovery**

Not supported.

**Note**

Backups do not include cold data already archived to OSS. So you cannot restore databases or tables, recover backups, or perform point-in-time recovery using backups.

Supported.

**Impact after archiving**

-   [Archive a standard table](/help/en/polardb/polardb-for-mysql/user-guide/manage-cold-data-lifecycle-on-oss#title-6uc-ev1-llm)
    
    After archiving, query archived data without changing how you access the table.
    
-   [Archive a partitioned table to an OSS external table](/help/en/polardb/polardb-for-mysql/user-guide/manage-cold-data-lifecycle-on-oss#3af5b5b6f1gmv)
    
    After archiving, query archived data by accessing the specific archived table.
    
-   [Archive a partitioned table](/help/en/polardb/polardb-for-mysql/user-guide/manage-cold-data-lifecycle-on-oss#title-xsc-b8r-m9u)
    
    After archiving, the table becomes a hybrid partitioned table. For query details, see [Query hybrid partitions](/help/en/polardb/polardb-for-mysql/user-guide/create-a-hybrid-partitioned-table#title-jc4-ndh-ocz).
    

-   [Archive a standard table](/help/en/polardb/polardb-for-mysql/user-guide/manage-cold-data-lifecycle-on-oss#title-6uc-ev1-llm)
    
    After archiving, query archived data without changing how you access the table.
    
-   [Archive a partitioned table](/help/en/polardb/polardb-for-mysql/user-guide/manage-cold-data-lifecycle-on-oss#title-xsc-b8r-m9u)
    
    After archiving, the table becomes a hybrid partitioned table. For query details, see [Query hybrid partitions](/help/en/polardb/polardb-for-mysql/user-guide/create-a-hybrid-partitioned-table#title-jc4-ndh-ocz).
    

After archiving, query archived data without changing how you access the table.
