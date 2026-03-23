This topic describes how to add a shard to an ApsaraDB for MongoDB sharded cluster instance.

## Limits

The configuration of the new shard must be greater than or equal to that of the shard with the highest configuration in the current instance.

For example, if the shard with the highest configuration in the instance has 10 GB of storage space, the new shard must have 10 GB or more of storage space.

## Billing rules

For more information, see [Upgrade/Downgrade fees](/help/en/mongodb/product-overview/configuration-change-fees#concept-1426323).

## Notes

-   If the minor version of your database has expired or is no longer maintained, the system automatically upgrades it to the latest version. This ensures better performance and stability.
    
-   Adding a shard does not affect connections on Mongos nodes. No transient disconnections occur.
    
-   A shard is typically added within 5 minutes. The time required is independent of the number of shards that you add.
    
-   After you add a shard, the balancer may immediately start to rebalance data to resolve imbalances between shards. This can increase the load and resource consumption. Monitor the instance's metrics and resource utilization. Consider setting an appropriate balancer window. For more information, see [Manage the MongoDB balancer](/help/en/mongodb/use-cases/manage-the-apsaradb-for-mongodb-balancer) and [Balancing](https://www.mongodb.com/docs/manual/reference/command/addShard/#balancing).
    

## Procedure

1.  Go to the [ApsaraDB for MongoDB sharded cluster instances](https://mongodb.console.alibabacloud.com/sharding/instances) page. In the upper-left corner, select a resource group and a region. Then, click the ID of the target instance.
    
2.  In the **Shard List** section, click **Add Shard**.
    
3.  In the **Add Shard** panel, select a **Specification Category**.
    
    **Note**
    
    -   This parameter is required only for ApsaraDB for MongoDB sharded cluster instances that use cloud disks.
        
    -   If a category is not available for selection, it is not supported in the current zone.
        
    -   For more information about the categories and specifications of ApsaraDB for MongoDB sharded cluster instances, see [Sharded cluster instance specifications](/help/en/mongodb/product-overview/sharded-cluster-instance-types).
        
    
4.  At the bottom of the **Shard List**, select the number of shards to add, and then click the **Add Shard** button on the left.
    
5.  Set the parameters for each new shard.
    
    **Parameter**
    
    **Description**
    
    **Specification**
    
    Select the specification for the shard.
    
    **Storage**
    
    Select the storage space for the shard.
    
    **Note**
    
    -   The storage space of a new shard must be greater than or equal to the largest storage space among the existing shards. For example, if the largest shard in the instance has 20 GB of storage space, you must configure 20 GB or more for the new shard. To decrease the storage space, you can create a new instance. For more information, see [Other upgrade and downgrade scenarios](/help/en/mongodb/user-guide/changing-the-configurations-of-an-instance/#section-akn-836-bi4).
        
    -   The storage space setting also applies to read-only nodes in the shard. If you add read-only nodes when you add the new shard, all nodes in the shard will have the storage space that you set.
        
    
    **Read-only**
    
    Select the number of read-only nodes to add. The value can be from 0 to 5.
    
6.  Complete the purchase based on the billing method.
    
    -   Pay-as-you-go: Click **Pay Now**. Then, the system automatically collects the amount in the next hour.
        
    -   Subscription: Click **Pay Now**. Then, the system automatically collects the amount.
        
    
    While the shard is being added, the instance status is **Adding Node**. When the instance status changes to **Running**, the shard has been successfully added.
    

## Related API operations

**Operation**

**Description**

[CreateNode](/help/en/mongodb/api-createnode#doc-api-Dds-CreateNode)

Adds a shard or mongos node to an ApsaraDB for MongoDB sharded cluster instance.
