This topic describes how to add a mongos node to an ApsaraDB for MongoDB sharded cluster instance.

## Usage notes

-   If the minor version of a sharded cluster instance expires or is not maintained, ApsaraDB for MongoDB automatically updates the minor version of the instance to the latest version during a configuration change. This ensures that the instance can provide higher performance and higher stability.
    
    **Warning**
    
    When you update the minor version of a sharded cluster instance, the instance must be restarted to make the update take effect. We recommend that you perform a minor version update during off-peak hours or make sure that your application can automatically reconnect to the instance.
    
-   When you add a mongos node to an ApsaraDB for MongoDB sharded cluster instance, the connection to the instance is not interrupted and your business can run as expected.
    
-   In most cases, mongos nodes are added within 5 minutes. The amount of time required to add mongos nodes is independent on the number of mongos nodes that you want to add.
    

## Billing

For more information, see [Configuration change fees](/help/en/mongodb/product-overview/configuration-change-fees#concept-1426323).

## Procedure

1.  Go to the [Sharded Cluster Instances](https://mongodb.console.alibabacloud.com/sharding/instances) page. In the top navigation bar, select the region in which the instance resides. Then, find the instance and click the ID of the instance.
    
2.  In the **Mongos List** section of the instance details page, click **Add Mongos** in the upper-right corner.
    
3.  In the **Add Mongos** panel, configure the parameters described in the following table.
    
    **Parameter**
    
    **Description**
    
    **Category**
    
    The category of the mongos node that you want to add.
    
    **Note**
    
    -   This parameter is required only for ApsaraDB for MongoDB sharded cluster instances that use cloud disks.
        
    -   If a category is not available for selection, it is not supported in the current zone.
        
    -   For more information about the categories and specifications of ApsaraDB for MongoDB sharded cluster instances, see [Sharded cluster instance types](/help/en/mongodb/product-overview/sharded-cluster-instance-types).
        
    
    **Instance Specifications**
    
    The specifications of the mongos node that you want to add.
    
    **Quantity**
    
    The number of mongos nodes that you want to add.
    
    **Note**
    
    By default, a single sharded cluster instance supports up to 32 mongos nodes. If the instance contains three mongos nodes, you can add up to 29 mongos nodes to the instance.
    
4.  Perform the corresponding operations based on the selected billing method.
    
    -   Pay-as-you-go: Click **Pay Now**. Then, the system automatically collects the amount in the next hour.
        
    -   Subscription: Click **Pay Now**. Then, the system automatically collects the amount.
        
    
    When mongos nodes are being added to the sharded cluster instance, the instance is in the **Creating Node** state. Mongos nodes are added to the instance when the status of the instance changes to **Running**.
    

## Related API operations

**Operation**

**Description**

[CreateNode](/help/en/mongodb/api-createnode#doc-api-Dds-CreateNode)

Adds a shard or mongos node to an ApsaraDB for MongoDB sharded cluster instance.
