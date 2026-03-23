If your business is in the off-peak hours or your mongos nodes or shard nodes are excessive, you can release mongos or shard nodes to reduce costs. This topic describes how to release a mongos or shard node of a sharded cluster instance.

## Usage notes

-   When you release a node from an instance, the instance is in the **Deleting Node** state. In this case, you cannot reset the password, modify the endpoint of the node, or modify parameters. We recommend that you release a node from an instance during off-peak hours.
    
-   Make sure that the node to be released is no longer needed.
    
-   If an instance contains only two mongos nodes, the nodes cannot be released from the instance.
    
-   To release a shard node from an instance, take note of the following items:
    
    -   Before you release a shard node, make sure that the ApsaraDB for MongoDB balancer is enabled. For more information, see [Manage the ApsaraDB for MongoDB balancer](/help/en/mongodb/use-cases/manage-the-apsaradb-for-mongodb-balancer).
        
    -   The following factors affect the actual time consumed to release the node: the amount of data on the shard node, balancing windows, and jumbo chunks.
        
        **Note**
        
        For more information about balancing windows and jumbo chunks, see [Balancing Windows](https://www.mongodb.com/docs/manual/tutorial/manage-sharded-cluster-balancer/#schedule-the-balancing-window) and [Jumbo Chunks](https://www.mongodb.com/docs/manual/core/sharding-data-partitioning/#indivisible-jumbo-chunks).
        
    -   Make sure that the remaining shard nodes have sufficient storage space.
        
        When the shard node is released, the data on the shard node is migrated to the remaining shard nodes. If the storage space of the remaining shard nodes is full, the instance is automatically locked to avoid data loss.
        
    -   If the `duplicated key` error is reported when the data on the shard node is migrated to the remaining shard nodes, check whether records with the same unique index field value exist.
        
        For example, different shard nodes may store two documents with different shard keys but the same primary key.
        
        **Note**
        
        The `duplicated key` error is returned when orphaned documents exist in the database. We recommend that you delete the orphaned documents before you release the shard node. For more information, see the "Preparations" section of the [Configure one-way data synchronization between ApsaraDB for MongoDB instances (sharded cluster architecture)](/help/en/mongodb/user-guide/configure-one-way-data-synchronization-between-apsaradb-for-mongodb-sharded-cluster-instance#section-ljy-zdn-fv7) topic.
        

## **Billing**

For more information, see [Configuration change fees](/help/en/mongodb/product-overview/configuration-change-fees).

## Procedure

1.  Log on to the [ApsaraDB for MongoDB conso](https://mongodb.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Sharded Cluster Instances**.
    
3.  In the upper-left corner of the page that appears, select the resource group and region to which the desired instance belongs.
    
4.  Click the ID of the instance that you want to manage or click **Manage** in the **Actions** column.
    
5.  Perform one of the following operations based on the type of the node that you want to release:
    
    -   Release a mongos node
        
        In the **Mongos List** section of the instance details page, find the node that you want to release and click the ![更多](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9769217361/p13851.png) icon in the **Actions** column. Then, select **Release**.
        
    -   Release a shard node
        
        **Important**
        
        Before you release a shard node, make sure that the remaining shard nodes have sufficient storage space.
        
        When the shard node is released, the data on the shard node is migrated to the remaining shard nodes. If the storage space of the remaining shard nodes is full, the instance is automatically locked to avoid data loss.
        
        In the **Shard List** section of the instance details page, find the node that you want to release and click the ![更多](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9769217361/p13851.png) icon in the **Actions** column. Then, select **Release**.
        
    
6.  In the **Release Node** message, click **OK**.
    
    When you release a node from an instance, the instance is in the **Deleting Node** state.
