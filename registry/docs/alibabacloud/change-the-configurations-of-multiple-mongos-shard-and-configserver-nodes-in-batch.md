The ApsaraDB for MongoDB sharded cluster architecture consists of three components: Mongos, shard, and Configserver. You can change the configuration of these components to meet the performance requirements of your sharded cluster instance.

You can simultaneously change the configurations of multiple components and nodes for an ApsaraDB for MongoDB sharded cluster instance. The changes can include the following:

-   The specifications and storage space of one or more shards.
    
-   The specifications of one or more Mongos nodes.
    
-   The specifications and storage space of the Configserver.
    

When you change the configurations of a sharded cluster instance, you can use a combination of General-purpose and Dedicated specifications. For instances that use cloud disks, you can also change the specification class for all selected components in a single click. This lets you quickly switch between General-purpose and Dedicated specifications.

## Billing rules

For more information, see [Configuration change fees](/help/en/mongodb/product-overview/configuration-change-fees#concept-1426323).

## **Notes**

-   The new storage space must be greater than or equal to the space currently used by the component.
    
-   Instances that use local disks do not support changing the configuration of the Configserver.
    
-   You cannot change the number of read-only nodes for a shard. To do so, go to the configuration change page for the shard. For more information, see [Change shard configurations](/help/en/mongodb/user-guide/change-the-configurations-of-one-or-more-shard-nodes).
    
-   During the configuration change, one or two transient connections may occur. Each transient connection lasts for approximately 30 seconds. We recommend that you schedule the change during off-peak hours to avoid affecting your services.
    
    **Important**
    
    If you only change the storage capacity of the ConfigServer component, ApsaraDB for MongoDB performs different operations based on whether your host has sufficient storage resources:
    
    -   If your host has sufficient storage resources, ApsaraDB for MongoDB scales up the storage capacity of your host without the need for cross-host migrations or failovers. Transient disconnections do not occur during the scale-up process. The scale-up task is immediately executed to completion. You do not need to wait for the maintenance window.
        
    -   If your host does not have sufficient storage resources, cross-host migrations and failovers are required. Transient disconnections may occur during the scale-up process. The scale-up task is executed during the specified maintenance window.
        
    
-   Time required to complete a configuration change depends on various factors, such as network, task queue, and the number of nodes. We recommend that you perform a configuration change during off-peak hours and make sure that your applications can automatically reconnect to the instance.
    
-   If the minor version of the sharded cluster instance expires or is not maintained, ApsaraDB for MongoDB automatically updates the minor version of the instance to the latest version during a configuration change. This ensures that the sharded cluster instance can provide high performance and stability.
    

## **Procedure**

1.  Go to the [ApsaraDB for MongoDB Sharded Cluster Instances](https://mongodb.console.alibabacloud.com/sharding/instances) page. Select a resource group and a region. Then, click the ID of the target instance.
    
2.  In the **Mongos List**, **Shard List**, and **ConfigServer List** sections on the **Basic Information** page, do the following.
    
    -   For subscription instances, select the target components or nodes, and click **Batch Upgrade** or **Batch Downgrade** at the bottom of the page.
        
    -   For pay-as-you-go instances, select the target components or nodes, and then click **Batch Change Configuration** at the bottom of the page.
        
    
3.  Set the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Specification Class**
    
    Select the target specification class. The following specification classes are supported:
    
    -   Dedicated: Only Dedicated specifications are displayed for Mongos, shard, and Configserver nodes.
        
    -   General-purpose: Only General-purpose specifications are displayed for Mongos, shard, and Configserver nodes.
        
    -   Mixed Deployment: Both Dedicated and General-purpose specifications are displayed for Mongos, shard, and Configserver nodes.
        
    
    **Note**
    
    -   This parameter is required only for ApsaraDB for MongoDB sharded cluster instances that use cloud disks.
        
    -   If a category is not available for selection, it is not supported in the current zone.
        
    -   For more information about the categories and specifications of ApsaraDB for MongoDB sharded cluster instances, see [Sharded cluster instance specifications](/help/en/mongodb/product-overview/sharded-cluster-instance-types).
        
    
    **Instance List**
    
    -   **Mongos List**: Select the new **Specifications**.
        
    -   **Shard List**: Select the new **Specifications** and **Storage Space**.
        
    -   **ConfigServer List**: Select the new **Specifications** and **Storage Space**.
        
    
    The Mongos List and Shard List provide the **Sync Node Configuration** feature. If you have many nodes, you can configure one node and then synchronize its configuration to other nodes of the same type. The procedure is as follows:
    
    1.  Configure the **Specifications** and **Storage Space** for one node as needed. Then, click **Sync Node Configuration** on the right side of the node.
        
    2.  For a shard component, you must **Select Configurations To Sync**. Select **Specifications** or **Storage**, and then click **Next**.
        
    3.  Select the nodes to which you want to synchronize the configuration, and then click **Next**.
        
    4.  Confirm that the synchronization result is correct, and then click **OK**.
        
    
    **Note**
    
    **The new storage space must be greater than or equal to the maximum storage space of the current node.** To decrease the storage space, create a new instance and migrate the data. For more information, see [Other configuration change scenarios and solutions](/help/en/mongodb/user-guide/changing-the-configurations-of-an-instance/#section-akn-836-bi4).
    
    **Switchover Time**
    
    Select when you want the configuration change to take effect.
    
    -   **Switch Immediately After Task Is Complete**: The system applies the change immediately after the configuration is complete.
        
    -   **Switch Within Maintenance Window After Task Is Complete**: The change takes effect during the maintenance window. You can use the current maintenance window or set a new one as needed. For more information about maintenance windows, see [Set a maintenance window](/help/en/mongodb/user-guide/specify-a-maintenance-window#task-tng-h4t-j2b).
        
    
4.  Read the **Terms of Service**.
    
5.  Perform the corresponding operations based on the selected billing method.
    
    -   Pay-as-you-go: Click **Pay Now**. Then, the system automatically collects the amount in the next hour.
        
    -   Subscription: Click **Pay Now**. On the **Purchase** page, complete the payment process.
        
    
    When the configuration change is being applied, the instance status is **Changing Configuration**. If the instance status changes to **running**, the configuration change is complete.
    

## **Related API operations**

**API operation**

**Description**

[ModifyNodeSpecBatch](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifynodespecbatch#doc-api-Dds-ModifyNodeSpecBatch)

Changes the configurations of multiple nodes for a MongoDB sharded cluster instance. The nodes can belong to different components.
