This topic describes the concepts of partitions.

## Introduction

Partitioning organizes data by grouping it into different directories based on the values in one or more specified partition key columns.

In MaxCompute, each value in a partition key column is specified as a partition. You can specify multi-level partitions with multiple partition key columns. Multi-level partitions are similar to multi-level directories in structure.

Partitioning optimizes queries by enabling partition pruning. When you specify partitions in the WHERE clause of a query, MaxCompute scans only the data in those partitions instead of the entire table. This significantly improves query performance and reduces compute costs. Appropriate design and use of partitions helps improve query performance, simplifies data management, and supports flexible data access and processing. For more information about partitioned tables, see [Overview of partitioned tables](/help/en/maxcompute/user-guide/partition-table-overview).![分区表](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3549559951/p1036.png)

## **Partition operations**

You can perform operations on partitions in an existing table, such as adding partitions and modifying partition values. For more information, see [Partition and column operations](/help/en/maxcompute/user-guide/partition-operation).

Note that certain SQL operations on partitions, such as inserting data into dynamic partitions, can be less efficient and may lead to higher costs. For example, [Insert or overwrite data into dynamic partitions (DYNAMIC PARTITION)](/help/en/maxcompute/user-guide/insert-or-overwrite-data-into-dynamic-partitions#concept-b1p-qdb-wdb).

## **Partitioned tables**

A partitioned table is one where data is physically organized into separate storage locations based on the values of one or more designated columns. For more information about partitioned tables and how to use them, see:

-   [Overview of partitioned tables](/help/en/maxcompute/user-guide/partition-table-overview)
    
-   [Automatic partitioning based on time computing functions](/help/en/maxcompute/user-guide/automatic-partition-table-based-on-time-computing-function)
    
-   [Automatic partitioning based on data write time](/help/en/maxcompute/user-guide/automatic-partition-table-based-on-data-writing-time)
    

The syntax of specific MaxCompute commands used to process partitioned and non-partitioned tables differs. For more information, see [Create and delete tables](/help/en/maxcompute/user-guide/table-creation-and-deletion), [Modify and view tables](/help/en/maxcompute/user-guide/table-modification), and [Insert or update data into a table or a static partition (INSERT INTO and INSERT OVERWRITE)](/help/en/maxcompute/user-guide/insert-or-update-data-into-a-table-or-a-static-partition).
