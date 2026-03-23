Cold data refers to data in your cluster's database tables that is rarely updated or read. To lower your expenses, you can use the cold data archiving feature. This feature moves the data to the low-cost Object Storage Service (OSS), which reduces your data storage costs.

## How it works

PolarDB for MySQL supports archiving data in CSV or ORC format. The detailed mechanism is as follows:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6671343771/CAEQVBiBgICdsIqj5xkiIDczZDQxNjFlNDM3ZTQ5NjA5NzRiZWNiOWUzMjk5NTBm4793801_20241126155615.715.svg)

You can archive data manually or automatically. After archiving, the data is converted to CSV or ORC format and stored as multiple files in OSS. The original data in your PolarDB storage space is automatically deleted. This reduces your storage capacity and lowers your storage fees. Cluster nodes can then access the data in OSS over the Alibaba Cloud private network. For more information, see [Manually archive cold data](/help/en/polardb/polardb-for-mysql/user-guide/manual-archiving-of-cold-data/) and [Automatically archive cold data](/help/en/polardb/polardb-for-mysql/user-guide/data-lifecycle-management/).

**Note**

When you archive partitioned tables, if your minor engine version is less than 8.0.2.2.33, go to the [Archive partitioned tables](/help/en/polardb/polardb-for-mysql/user-guide/manage-cold-data-lifecycle-on-oss#title-xsc-b8r-m9u) topic. Then, navigate to the [Quota Center](https://quotas.console.alibabacloud.com/white-list-products/polardb/quotas), find the quota name using the **Quota ID** `polardb_mysql_hybrid_partition`, and click **Request** in the corresponding **Actions** column to enable this feature.

## Comparison of archive formats

Use the following comparison to help you choose the right format for archiving your cold data.

**Note**

-   Archiving standard tables, OSS external tables, and partitioned tables has certain limitations. Review these limitations before archiving data to avoid impacting your business.
    
-   Archived cold data is stored in the system's default Object Storage Service (OSS) bucket, not in your own. Currently, you can view the list of archived data only in the PolarDB console.
    
-   Descriptions of partitioned table archiving methods:
    
    -   **Partitioned Table Archiving**: Archives a specific partition in a partitioned table in place. The data remains in the original table, but the storage medium for that partition changes from PolarDB (hot storage) to OSS (cold storage), and the table becomes a hybrid partitioned table containing both hot and cold partitions.
        
    -   **Archive a partition to an OSS external table**: This method moves the data from a partition to a new, separate OSS external table. The original partition is then deleted from the table.
        

**Item**

**CSV**

**ORC**

**X-Engine**

**Open source format**

Yes

Yes

No

**Archiving method**

-   Manual archiving:
    
    -   [Archive standard tables](/help/en/polardb/polardb-for-mysql/user-guide/manage-cold-data-lifecycle-on-oss#title-6uc-ev1-llm)
        
    -   [Archive a partition to an OSS external table](/help/en/polardb/polardb-for-mysql/user-guide/manage-cold-data-lifecycle-on-oss#3af5b5b6f1gmv)
        
    -   [Archive partitioned tables](/help/en/polardb/polardb-for-mysql/user-guide/manage-cold-data-lifecycle-on-oss#title-xsc-b8r-m9u)
        
-   Automatic archiving:
    
    -   [Archive partitioned tables](/help/en/polardb/polardb-for-mysql/user-guide/usage-4#title-647-93p-2tq)
        

Manual archiving:

-   [Archive standard tables](/help/en/polardb/polardb-for-mysql/user-guide/manage-cold-data-lifecycle-on-oss#title-6uc-ev1-llm)
    
-   [Archive partitioned tables](/help/en/polardb/polardb-for-mysql/user-guide/manage-cold-data-lifecycle-on-oss#title-xsc-b8r-m9u)
    

-   Manual archiving:
    
    -   [Archive in X-Engine format](/help/en/polardb/polardb-for-mysql/user-guide/archive-data-to-x-engine)
        
-   Automatic archiving:
    
    -   [Archive partitioned tables in X-Engine format](/help/en/polardb/polardb-for-mysql/user-guide/archive-partitioned-tables-in-the-x-engine-format)
        

**Archiving speed**

Fast

**Note**

Only single-threaded archiving is supported.

Slow

**Note**

Only single-threaded archiving is supported.

Fast

**Note**

Data is archived to PolarStore storage space.

**Query speed**

-   Poor. Without an index and using a sequential query, the query performance is about one-fifth to one-tenth that of the InnoDB storage engine.
    
-   Faster than ORC format on row store nodes.
    

**Note**

Both single-threaded and multi-threaded data reads are supported.

-   Poor. Without an index and using a sequential query, the query performance is about one-fifth to one-tenth that of the InnoDB storage engine.
    
-   Suitable for analytical processing (AP) queries on a separate column store node.
    

**Note**

Only single-threaded data reads are supported.

-   Fast. Data is stored in PolarStore storage space. Query speed is significantly faster than for cold data in OSS, but about 30% slower than the InnoDB engine.
    
-   The row-oriented table format is suitable for transactional processing (TP) queries. The column-oriented table format is suitable for AP queries on a column store node.
    

**Transaction support**

No

No

Yes

**Indexing capability**

No

No

Yes

**How to modify archived data**

Archived tables in OSS are read-only. To modify the data, you must import it from OSS back to the PolarDB storage space.

You can perform DML operations on archived tables.

**Storage space used**

The storage space is equivalent to that of tables without indexes in the InnoDB engine.

For the same data volume, uses 45% of the storage space required by the CSV format.

Compared to the InnoDB engine, storage space can be compressed to 10% to 50% of the original size. The specific compression ratio depends on the data characteristics.

**Backup and restore**

Not supported.

**Note**

-   [Object Storage Service (OSS)](/help/en/oss/user-guide/what-is-oss) provides 99.9999999999% (twelve 9s) data durability and 99.995% data availability. The risk of losing cold data is almost non-existent.
    
-   When you perform a PolarDB backup operation, archived cold data on OSS is not backed up. Therefore, you cannot use the backup for database and table recovery, backup recovery, or point-in-time recovery.
    

Supported.

**Impact after archiving**

-   [Archive standard tables](/help/en/polardb/polardb-for-mysql/user-guide/manage-cold-data-lifecycle-on-oss#title-6uc-ev1-llm)
    
    After archiving, you can query the archived data without changing how you access the table.
    
-   [Archive a partition to an OSS external table](/help/en/polardb/polardb-for-mysql/user-guide/manage-cold-data-lifecycle-on-oss#3af5b5b6f1gmv)
    
    After archiving, you must change how you access the table to query the archived data. You must query the specified archived table.
    
-   [Archive partitioned tables](/help/en/polardb/polardb-for-mysql/user-guide/manage-cold-data-lifecycle-on-oss#title-xsc-b8r-m9u)
    
    The archived table becomes a hybrid partitioned table. For information about how to query it, see [Query hybrid partitions](/help/en/polardb/polardb-for-mysql/user-guide/create-a-hybrid-partitioned-table#title-jc4-ndh-ocz).
    

-   [Archive standard tables](/help/en/polardb/polardb-for-mysql/user-guide/manage-cold-data-lifecycle-on-oss#title-6uc-ev1-llm)
    
    After archiving, you can query the archived data without changing how you access the table.
    
-   [Archive partitioned tables](/help/en/polardb/polardb-for-mysql/user-guide/manage-cold-data-lifecycle-on-oss#title-xsc-b8r-m9u)
    
    The archived table becomes a hybrid partitioned table. For information about how to query it, see [Query hybrid partitions](/help/en/polardb/polardb-for-mysql/user-guide/create-a-hybrid-partitioned-table#title-jc4-ndh-ocz).
    

After archiving, you can query the archived data without changing how you access the table.

## Applicable scope

-   Archiving in **CSV format**
    
    -   If the product edition is Cluster Edition, the Milvus version must be one of the following:
        
        -   MySQL 8.0.1, minor version 8.0.1.1.47 or later.
            
        -   MySQL 8.0.2, revision version 8.0.2.2.10 or later.
            
    -   For the Multi-master Cluster (Limitless) Edition, the kernel version must be 8.0.1.0.13 or later.
        
-   Archiving in **ORC format**
    
    -   For the Cluster Edition, the revision version must be 8.0.2.2.30 or later.
        
    -   For the Multi-master Cluster (Limitless) Edition, the revision version must be 8.0.2.2.30 or later.
        
-   Archiving in **X-Engine format**
    
    -   Archiving standard tables:
        
        -   MySQL 8.0.1 with revision 8.0.1.1.31 or later.
            
        -   MySQL 8.0.2 with revision 8.0.2.2.12 or later.
            
    -   Archiving partitioned tables: MySQL 8.0.2 with revision 8.0.2.2.12 or later.
        
    -   Archiving as an [X-Engine column-oriented table](/help/en/polardb/polardb-for-mysql/user-guide/columnar-table-overview): MySQL 8.0.2 with revision 8.0.2.2.33 or later.
        

## Billing

Cold data is billed based on its storage capacity in OSS. The charges are as follows.

**The Chinese mainland**

**China (Hong Kong) and other regions**

USD 0.0000325 per GB-hour

USD 0.0000455 per GB-hour

For example, if you archive 100 GB of cold data for a cluster in the Chinese mainland, the hourly fee is 100 GB × USD 0.0000325 per GB-hour = USD 0.00325 per hour.

**Note**

For more information about how to view the amount of archived cold data, see [View cold data archiving information](/help/en/polardb/polardb-for-mysql/user-guide/enable-cold-data-archiving#section-xbv-s8x-687).

## How to use

-   [Enable cold data archiving](/help/en/polardb/polardb-for-mysql/user-guide/enable-cold-data-archiving)
    
-   [Archive cold data](/help/en/polardb/polardb-for-mysql/user-guide/cold-data-archiving-instructions-for-use#6bca670a09ehj)
    
    -   [Manually archive cold data](/help/en/polardb/polardb-for-mysql/user-guide/manage-cold-data-lifecycle-on-oss)
        
    -   [Automatically archive cold data](/help/en/polardb/polardb-for-mysql/user-guide/usage-4)
        
-   [Query cold data](/help/en/polardb/polardb-for-mysql/user-guide/cold-data-archiving-instructions-for-use#2b4d6f68cda36)
    

For more information, see [Usage notes](/help/en/polardb/polardb-for-mysql/user-guide/cold-data-archiving-instructions-for-use).
