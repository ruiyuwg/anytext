Interval range partitioning is an extension of range partitioning. It allows a database to automatically create a partition when data to be inserted exceeds the range of an existing partition.

## Prerequisites

The version of the cluster must be PolarDB for MySQL 8.0.2 and the revision version of the cluster must be 8.0.2.2.0 or later. For information about how to view the kernel version of your cluster, see [Query the engine version](/help/en/doc-detail/423885.html#section-7p8-757-iyh).

## Background information

When you insert data into a range partitioned table and if the data falls beyond the range of the existing partition, the data cannot be inserted and an error is returned. When the data to be inserted exceeds the range of an interval partitioned table, the database can automatically create new partitions based on the range specified by the INTERVAL clause.

If the partition range is set to one month and the data to be inserted is two months from the current transition point (the maximum boundary value of the current partition), the partition for the month of the data and the partition for the month before that month are created. For example, you create an interval range partitioned table. The interval is one month and the current transition point is September 15, 2021. If you attempt to insert the data of December 10, 2021, the database automatically creates three partitions for the three intervals from September 15, 2021 to December 15, 2021. Then, the data is inserted into the partition for the interval that covers December 10, 2021.

## Limits

-   In interval range partitioning, COLUMNS() can specify only a single partition key, which must be a numerical or date range.
    
-   You must define at least one range partition.
    
-   The partitions for an interval range partitioned table can be created only in ascending order.
    
-   If the partition key is of the DATE type, the interval cannot be of the TIME type (HOUR, MINUTE, or SECOND). If the partition key is of the TIME type, the interval cannot be of the DATE type (YEAR, QUARTER, MONTH, WEEK, or DAY). If the partition key is of the SECOND type, the interval cannot be less than 60.
    
-   You cannot execute the INSERT SELECT or UPDATE statements to add partitions.
    
-   You cannot change the interval defined when you create a table.
    
-   Subpartitioning is supported only for [range-hash partitioned tables](/help/en/polardb/polardb-for-mysql/user-guide/range-hash).
    
-   When you execute the LOAD DATA statement to import data, you must ensure that the current range of the partitioned table can cover all data.
    
-   You cannot use triggers, stored functions, or stored procedures to insert data into an interval range partition.
    
-   The LOCK TABLES statement is not supported.
    
-   Partition keys cannot be AUTO\_INCREMENT, virtual column, generated default column, or of the STRING type.
    
-   You cannot prefix custom partitions (including those created with the table creation and DDL statements) with the \_p string.
    
-   Automatically created partitions cannot be rolled back after they are created.
    
-   When inserting data in batches, you can create up to 30 partitions at a time.
    
-   If you execute another DDL statement while executing the INSERT statement to automatically create partitions, a deadlock may be detected and therefore an error is reported.
    
-   [Interval range partitioning](#) is an extension of [range](/help/en/polardb/polardb-for-mysql/user-guide/range) partitioning. In scenarios where interval range partitioning is not applicable, use range partitioning instead.
    

## Usage

You can set the following parameters to enable or set interval range partitioning.

**Parameter**

**Description**

partition\_level\_mdl\_enabled

Interval range partitioning is implemented based on the partition level MDL feature. The advantage is that the smaller granularity of Minimum Description Length (MDL) can reduce the impact of DDL statements on DML statements. Therefore, to use interval range partitioning, you must ensure that the partition\_level\_mdl\_enabled parameter is set to ON. If this parameter is set to OFF, you cannot create an interval range partitioned table. For an existing interval range partitioned table, you can insert only the values that are within the range of the partition. If you insert a value beyond the range, an error is reported.

interval\_partitioning\_enabled

The interval\_partitioning\_enabled parameter controls the Interval range partitioning feature, while the partition\_level\_mdl\_enabled parameter controls the partition level MDL feature. Both of the parameters are required for the Interval range partitioning feature. The two parameters must be set to ON. If the interval\_partitioning\_enabled parameter is set to OFF, you cannot create an interval range partitioned table. For an existing interval range partitioned table, you can insert only the values that are within the range of the partition. If you insert a value beyond the range, an error is reported.

transaction\_isolation

The partition level MDL feature can only provide isolation at the read-committed or read-uncommitted level. Therefore, this parameter must be consistent with the isolation level of the partition level MDL feature. By default, cloud cluster uses the read-committed isolation level.
