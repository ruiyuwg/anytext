As your business data grows, storing all data—including less frequently accessed warm and cold data—in standard InnoDB tables increases storage costs. However, archiving this data to external storage removes online read, write, and analytical capabilities. PolarDB for MySQL offers data tiering using X-Engine. You can convert an entire table or specific partitions to use the high-compression X-Engine, enabling hybrid storage of InnoDB (hot data) and X-Engine (warm/cold data) in the same table. This reduces storage costs without sacrificing online access. Data in X-Engine still supports DML writes and online DDL schema changes.

## How it works

PolarDB for MySQL allows different partitions in a single partitioned table to use different storage engines. It works as follows:

-   **Data tiering**: Keep frequently accessed “hot” data partitions in InnoDB for optimal read and write performance. Migrate less frequently accessed “warm” or “cold” data partitions to X-Engine.
    
-   **Smart routing**: When you query the table, PolarDB automatically routes requests to the correct partition and its storage engine based on query conditions. This process is transparent to the application layer.
    
-   **High compression ratio**: X-Engine uses advanced compression algorithms and an optional [column store](/help/en/polardb/polardb-for-mysql/user-guide/columnar-table-overview) format to achieve extremely high data compression ratios. This significantly reduces physical disk space usage and lowers costs.
    

## Applicability

Before using this feature, ensure your PolarDB for MySQL cluster meets the following version requirements.

-   Archiving standard tables:
    
    -   MySQL 8.0.1 with revision 8.0.1.1.31 or later.
        
    -   MySQL 8.0.2 with revision 8.0.2.2.12 or later.
        
-   Archiving partitioned tables: MySQL 8.0.2 with revision 8.0.2.2.12 or later.
    
-   Archiving to [X-Engine column-oriented tables](/help/en/polardb/polardb-for-mysql/user-guide/columnar-table-overview): MySQL 8.0.2 with revision 8.0.2.2.33 or later.
    

## Preparations

Complete the following steps before archiving data.

1.  [Enable the high-compression engine (X-Engine)](/help/en/polardb/polardb-for-mysql/user-guide/enable-x-engine): This makes X-Engine available as a storage engine option for tables or partitions.
    
2.  [**Enable hybrid partitioning**](/help/en/polardb/polardb-for-mysql/user-guide/create-a-hybrid-partitioned-table): For clusters with minor engine versions earlier than 8.0.2.2.33, go to the [Quota Center](https://quotas.console.alibabacloud.com/white-list-products/polardb/quotas). Find the quota with the **Quota ID** `polardb_mysql_hybrid_partition` and click Request in the corresponding **Operation** column to enable the feature.
    

## **Archive standard tables**

Convert an entire non-partitioned table from InnoDB to X-Engine, including its data and storage engine.

#### **Syntax**

```
ALTER TABLE table_name ENGINE=engine_name[ TABLE_FORMAT=COLUMN];
```

#### **Parameter description**

**Parameter**

**Parameter description**

table\_name

Name of the table to archive to X-Engine.

engine\_name

Name of the storage engine.

-   XEngine: Archive to X-Engine format.
    
-   InnoDB: Revert to InnoDB engine.
    

TABLE\_FORMAT

X-Engine data storage format (optional).

-   ROW (default): Row-oriented table.
    
-   COLUMN: Column-oriented table.
    

#### **Examples**

-   Archive standard table `t1` to an X-Engine row-oriented table:
    
    ```
    ALTER TABLE t1 ENGINE=XEngine;
    ```
    
-   Archive standard table `t1` to an X-Engine column-oriented table:
    
    ```
    ALTER TABLE t1 ENGINE=XEngine TABLE_FORMAT=COLUMN;
    ```
    
-   Revert standard table `t1` back to InnoDB engine:
    
    ```
    ALTER TABLE t1 ENGINE=InnoDB;
    ```
    

## **Archive partitioned tables**

## **Archive specific partitions**

Archive specific partitions (typically older partitions storing cold data) in a partitioned table to X-Engine. This enables hot and cold data tiering, resulting in a hybrid partitioned table.

#### **Syntax**

```
ALTER TABLE table_name CHANGE PARTITION part_name ENGINE = XEngine[ TABLE_FORMAT=COLUMN];
```

#### **Parameter description**

**Parameter**

**Parameter description**

table\_name

Name of the table to archive to X-Engine.

part\_name

Name of the partition to archive to X-Engine.

TABLE\_FORMAT

X-Engine data storage format (optional).

-   ROW (default): Row store.
    
-   COLUMN: Column-oriented table.
    

#### **Examples**

-   Archive partition `p1` of partitioned table `t1` to X-Engine row store format:
    
    ```
    ALTER TABLE t1 CHANGE PARTITION p1 ENGINE = XEngine;
    ```
    
-   Archive partition `p1` of partitioned table `t1` to X-Engine column-oriented table:
    
    ```
    ALTER TABLE t1 CHANGE PARTITION p1 ENGINE = XEngine TABLE_FORMAT=COLUMN;
    ```
    

## Revert to InnoDB engine

#### **Syntax**

```
ALTER TABLE table_name REORGANIZE PARTITION part_name INTO (partition_definition);
```

#### **Parameter description**

**Parameter**

**Parameter description**

table\_name

Name of the hybrid partitioned table.

part\_name

Name of the partition to revert to InnoDB engine.

partition\_definition

Must match the original `partition_definition` of the partition being reverted.

**Note**

The ENGINE clause in the partition definition is optional. If omitted, the default engine is InnoDB—the same as the table’s engine. If specified as `ENGINE=InnoDB`, the InnoDB engine is used.

#### **Example**

Revert data in partition `p1` of partitioned table `t1`, archived in X-Engine, back to the InnoDB engine.

```
ALTER TABLE t1 REORGANIZE PARTITION p1 INTO(PARTITION p1 VALUES LESS THAN(100));
```

## Going live

-   **Best practices**: To balance cost and query performance, archive only warm or cold data with low access frequency to X-Engine. For write-intensive data with high compression potential, such as logs or instrumentation data, use the X-Engine column store format (`TABLE_FORMAT=COLUMN`).
    
-   **Risk mitigation**: Data migration (`ALTER TABLE`) is resource-intensive. Although it runs online, execute it during off-peak hours to avoid performance fluctuations on production workloads.
    
-   **Monitoring and alerting**: During archiving, use the `SHOW FULL PROCESSLIST;` command to track Data Definition Language (DDL) progress. Also, monitor key metrics in the console, such as CPU usage, Input/Output Operations Per Second (IOPS), and disk space.
