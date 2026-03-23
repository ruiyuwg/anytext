You can modify a partial index on the partitioned table: add, rebuild, and delete a secondary index on partitions.

## **Syntax**

-   Add a partial index on partitions.
    
    ```
    ALTER TABLE table_name ALTET INDEX index_name
      ADD PARTITION partition_name0[, ...];
    ```
    
-   Rebuild a partial index on partitions.
    
    ```
    ALTER TABLE table_name ALTET INDEX index_name
      REBUILD PARTITION partition_name0[, ...];
    ```
    
-   Delete a partial index on partitions.
    
    ```
    ALTER TABLE table_name ALTET INDEX index_name
      DROP PARTITION partition_name0[, ...];
    ```
    

## **Parameters**

**Parameter**

**Description**

table\_name

The name of the partitioned table.

index\_name

The name of the index.

partition\_name0

The name of the partition or subpartition.

**Note**

You can specify multiple partitions or subpartitions. Separate multiple partitions or subpartition names with commas (,).

## **Examples**

-   Modify a partial index on a partition.
    
    -   Add a partial index named `o_ind_amou` on the `orders_202212` partition of the `orders` partitioned table.
        
        ```
        ALTER TABLE orders ALTER INDEX o_ind_amou ADD PARTITION orders_202212;
        ```
        
    -   Rebuild the `o_ind_amou` partial index on the `orders_202203`, `orders_202204`, and `orders_202205` partitions of the `orders` partitioned table.
        
        ```
        ALTER TABLE orders ALTER INDEX o_ind_amou REBUILD PARTITION orders_202203, orders_202204, orders_202205;
        ```
        
    -   Delete the `o_ind_amou` partial index from the `orders_202201` and `orders_202202` partitions of the `orders` partitioned table.
        
        ```
        ALTER TABLE orders ALTER INDEX o_ind_amou DROP PARTITION orders_202201, orders_202202;
        ```
        
-   Modify a partial index on a subpartition.
    
    -   Add a partial index named `ind_date` on the `p0_3` and `p0_4` subpartitions in the `tenants` partitioned table.
        
        ```
        ALTER TABLE tenants ALTER INDEX ind_date ADD partition p0_3, p0_4;
        ```
        
    -   Rebuild the `ind_date` partial index on the `p0_1` and `p1_1` subpartitions in `tenants` partitioned table.
        
        ```
        ALTER TABLE tenants ALTER INDEX ind_date REBUILD PARTITION p0_1,p1_1;
        ```
        
    -   Delete the `ind_date` partial index from the `p1_1` subpartition in the `tenants` partitioned table.
        
        ```
        ALTER TABLE tenants ALTER INDEX ind_date DROP PARTITION p1_1;
        ```
