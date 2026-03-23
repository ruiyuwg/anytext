If a shard has insufficient storage or reaches a performance bottleneck, you can change its specifications or storage space. With ApsaraDB for MongoDB sharded cluster instances, you can apply this configuration change to one or more shards.

## Limits

-   The storage space that you select must be greater than or equal to the storage space that is currently used by the shard.
    
-   The number of read-only nodes that you select must be greater than or equal to the maximum number of read-only nodes among the shards.
    
-   When you downgrade a subscription instance, you cannot increase the number of read-only nodes.
    

## Billing rules

For more information, see [Configuration change fees](/help/en/mongodb/product-overview/configuration-change-fees#concept-1426323).

## Precautions

-   During the configuration change, one or two transient disconnections may occur. Each disconnection lasts for about 30 seconds. To avoid business interruptions, set the effective time for the change.
    
    **Important**
    
    If you change only the storage space, the system performs different operations based on the available storage resources on the local host.
    
    -   Sufficient: The storage is scaled out on the local host without a cross-host migration or switchover. No transient disconnection occurs during this process. The task is executed immediately and you do not need to wait for the maintenance window.
        
    -   Insufficient: A cross-host migration and switchover are required. A transient disconnection occurs during this process. The task takes effect within the effective time that you set.
        
    
-   The time required to complete a configuration change depends on factors such as the network, the task queue, and the data size. We recommend that you change the configuration during off-peak hours and ensure that your application has an automatic reconnection mechanism.
    
-   If the minor version of your database is expired or no longer maintained, the system automatically upgrades the minor version to the latest version to ensure better performance and stability.
    
-   Changing the configuration of an instance with local disks takes a long time. In contrast, changing the configuration of an instance with cloud disks is faster and is usually completed within one hour. This makes cloud disks suitable for scenarios that are sensitive to the specification change duration.
    
    **Impact of the specification change duration**
    
    When you change the configuration of an instance with local disks, a time-consuming cross-physical machine migration is triggered if the host resources do not meet the new configuration requirements. If the host resources are sufficient, the configuration is changed in place. The following table describes the key factors that affect the specification change duration.
    
    **Storage class**
    
    **Cross-physical machine migration**
    
    **Influencing factor**
    
    **Additional information**
    
    Local disk
    
    No
    
    Number of databases and tables
    
    The configuration change restarts the node. The number of databases and tables affects the node startup time. Clean up unused databases and tables promptly. For more information about the impact, see [Instance stuttering or exceptions caused by too many databases or tables](/help/en/mongodb/support/what-do-i-do-if-the-slow-running-or-an-exception-occurs-on-my-instance-due-to-a-large-number-of-collections).
    
    Whether an index is being created
    
    The configuration change restarts the node. If an index is being created, it must be recreated, which increases the node startup time.
    
    Yes
    
    Full data size
    
    The size of the full data affects the duration of data migration and synchronization. The migration speed is affected by the network bandwidth (instance type).
    
    Incremental data write speed
    
    The write speed of incremental data affects the duration of the incremental synchronization process for the new node.
    
    Oplog retention period
    
    If the Oplog retention period is too short, incremental logs may be overwritten, causing the new node to fail synchronization. Ensure the retention period meets the following condition: **Retention period (h) ≥ Used data space (GB) / 10 (GB/h)**. This provides a sufficient synchronization window.
    
    Daily backup status
    
    If daily backups have no significant disk fragments and the Oplog retention period is long, some scenarios support migration using backup sets.
    
    Number of indexes
    
    The number of indexes affects the time it takes for the new node to synchronize and create indexes.
    
    Number of databases and tables
    
    The number of databases and tables affects the time it takes for the new node to synchronize databases and tables.
    
    Cloud disk
    
    No
    
    \-
    
    Configuration changes for the cloud disk storage class are based on cloud disk snapshots. The overall specification change duration is short, and you do not need to consider influencing factors.
    
    **Note**
    
    Use instances with the cloud disk architecture for scenarios that are sensitive to the specification change duration.
    

## Procedure

1.  Go to the [MongoDB sharded cluster instances](https://mongodb.console.alibabacloud.com/sharding/instances) page. At the top of the page, select a resource group and a region. Then, click the ID of the target instance.
    
2.  In the **Shard List** section, change the configuration of one or more shards as needed.
    
    -   Change the configuration of a single shard
        
        Click the ![More actions](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9769217361/p13851.png) icon in the **Actions** column of the target shard. Then, for a pay-as-you-go instance, select **Change Configuration**. For a subscription instance, select **Upgrade Configuration** or **Downgrade Configuration**.
        
    -   Change the configuration of multiple shards
        
        1.  In the **Shard List** section, select the target shards.
            
        2.  In the upper-left corner of the **Shard List**, select **Batch Change Configurations** for a pay-as-you-go instance. For a subscription instance, select **Batch Upgrade** or **Batch Downgrade** as needed.
            
    
3.  Set the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Specification Category**
    
    Select the specification category of the shard.
    
    **Note**
    
    -   This parameter applies only to instances that use cloud disks.
        
    -   If a category is not supported in the current zone, you cannot select that category.
        
    -   For more information about the categories and specifications of sharded cluster instances, see [Sharded cluster instance types](/help/en/mongodb/product-overview/sharded-cluster-instance-types).
        
    
    **Instance Specifications**
    
    Select the specifications of the shard.
    
    **Storage Capacity**
    
    Select the new storage space for the shard.
    
    **Note**
    
    -   The selected storage space must be greater than or equal to the current storage space of the corresponding shard. To decrease the storage space, you can create a new instance. For more information, see [Other configuration change scenarios and solutions](/help/en/mongodb/user-guide/changing-the-configurations-of-an-instance/#section-akn-836-bi4).
        
    -   After you change the **Storage Capacity** value of the shard, the new storage capacity that you specify applies to all nodes in the shard, including read-only nodes in the shard.
        
    
    **Read-only Nodes**
    
    Select the number of read-only nodes for the configuration change.
    
    **Switchover Time**
    
    Select the time when the configuration change takes effect.
    
    -   **Switch Immediately after Migration**: After the configuration change is complete, the system immediately performs the switchover.
        
    -   **Switch within Maintenance Window**: The switchover takes effect within the maintenance window. You can select the currently set maintenance window or set a new one as needed.
        
        1.  Click **Edit** to the right of **Switch within Maintenance Window** to set the switchover time.
            
        2.  In the **Specification Information** section, click **Edit** to the right of **Maintenance Window** to set the switchover time. For more information about how to set the time, see [Set a maintenance window](/help/en/mongodb/user-guide/specify-a-maintenance-window#task-tng-h4t-j2b).
            
    
    **Note**
    
    If you only scale out the storage space and the host of each shard has sufficient resources, the storage is scaled out locally without cross-host migration or switchover. Therefore, the task is executed and takes effect immediately. You do not need to wait for the maintenance window.
    
4.  Complete the purchase based on the billing method.
    
    -   Pay-as-you-go: Click **Pay Now**. The system automatically deducts the fee within the next hour.
        
    -   Subscription: Click **Pay Now** and complete the payment process on the **Payment** page.
        
    
    During the configuration change, the instance status is **Changing Configuration**. When the instance status changes to **Running**, the configuration change is complete.
    

## Related API operations

**API**

**Description**

[ModifyNodeSpec](/help/en/mongodb/api-modifynodespec#doc-api-Dds-ModifyNodeSpec)

Changes the configuration of a single Mongos or shard node in an ApsaraDB for MongoDB sharded cluster instance.

[ModifyNodeSpecBatch](/help/en/mongodb/api-modifynodespecbatch#doc-api-Dds-ModifyNodeSpecBatch)

Changes the configurations of multiple Mongos or shard nodes in an ApsaraDB for MongoDB sharded cluster instance.
