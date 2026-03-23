PolarDB for MySQL allows you to create partial indexes in a partitioned table. You can create indexes in only one or more partitions of a partitioned table, instead of all partitions. You can create different indexes in partitions of a partitioned table to meet the query requirements for different partitions and save storage space.

## **Scenarios**

-   **Order tables or log tables**
    
    In scenarios where order tables or log tables are used, time-based range partitioned tables are usually created. However, only the latest one or two partitions are frequently queried. You can create secondary indexes only on the partitions that are frequently queried. However, native MySQL and other databases only allow you to create the same indexes on all partitions. Although this can satisfy the query requirements of hotspot partitions, high space is consumed for secondary indexes created on partitions.
    
    In the preceding scenarios, you can create partial indexes on the partitioned table. Only the required secondary indexes are created on hot partitions. This not only meets the query requirements of hot partitions, but also saves the space for secondary indexes created on partitions.
    
-   **Query and analysis of historical data**
    
    In scenarios where historical data is queried and analyzed, time-based range partitions are usually created. For new partitions, you can quickly insert data and perform simple queries. Most of the large queries for data analysis are performed on historical partitions. To meet the query and analysis requirements for historical partitions, you can create multiple secondary indexes. However, as more and more indexes are created on partitions, the data write speed is lowered.
    
    In the preceding scenarios, you can create partial indexes on the partitioned table: Create secondary indexes for simple queries on hot partitions and secondary indexes for analytical queries on historical partitions.
    
    When you create different indexes on partitions based on different business requirements, the performance of inserting data to hot partitions is ensured and the query and analysis requirements on historical partitions are also met. In addition, the space for secondary indexes created on partitions is saved to the greatest extent.
    

## **Prerequisites**

The cluster runs PolarDB for MySQL 8.0.2 whose revision version is 8.0.2.2.21 or later. To check the version of a cluster, see the "Query the engine version" section of the [Engine versions](/help/en/doc-detail/423885.html#section-7p8-757-iyh) topic.

## **Limits**

-   You cannot create partial indexes on primary keys.
    
-   You cannot create a [global secondary index (GSI)](/help/en/polardb/polardb-for-mysql/user-guide/global-secondary-index) as a partial index. However, you can create a global secondary index and a partial index in the same partitioned table.
    
-   You cannot create indexes of the FULLTEXT and SPATIAL types as partial indexes.
    
-   The optimizer can select only existing indexes on the partitioned table to be accessed.
    

## **Usage**

You can create a partial index in a partitioned table. After you create the partial index, you can modify the partial index. For information about how to create and modify a partial index, see [Create a partial index](/help/en/polardb/polardb-for-mysql/user-guide/create-a-partial-index) and [Modify a partial index](/help/en/polardb/polardb-for-mysql/user-guide/modify-a-partial-index).

**Note**

The feature of creating partial indexes in a partitioned table is in canary release. To use the feature, join DingTalk group 24490017825 to obtain technical support.
