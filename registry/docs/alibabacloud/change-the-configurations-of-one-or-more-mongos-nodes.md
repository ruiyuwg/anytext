A Mongos routes client requests to the correct shard. If an increase in client traffic or the number of requests exceeds the capacity of your Mongos nodes, you can change their configurations. ApsaraDB for MongoDB sharded cluster instances allow you to change the specifications of one or more Mongos nodes.

## Billing rules

For more information, see [Configuration change fees](/help/en/mongodb/product-overview/configuration-change-fees#concept-1426323).

## Notes

-   This process may cause 1-2 brief disconnections, each lasting about 30 seconds. You can schedule the change to avoid interrupting your business.
    
-   The time required to complete the configuration change depends on factors such as network conditions, the task queue, and the amount of data. Change the configurations during off-peak hours and ensure that your application has an automatic reconnection mechanism.
    
-   If the minor version of your database is expired or is not on the maintenance list, the system automatically upgrades the minor version to the latest version during the configuration change. This ensures better performance and stability.
    

## Procedure

1.  Go to the [ApsaraDB for MongoDB sharded cluster instances](https://mongodb.console.alibabacloud.com/sharding/instances) page. At the top of the page, select a resource group and a region. Then, click the ID of the target instance.
    
2.  In the **Mongos List** section, change the configuration of one or more Mongos nodes.
    
    -   Change the configuration of one Mongos node.
        
        Find the target Mongos node. In the **Actions** column, click the ![三个点](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9769217361/p13851.png) icon. For a pay-as-you-go instance, select **Change Configurations**. For a subscription instance, select **Upgrade Configuration** or **Downgrade Configuration**.
        
    -   Change the configurations of multiple Mongos nodes
        
        1.  In the **Mongos List**, select the target Mongos nodes.
            
        2.  In the upper-left corner of the **Mongos List**, select **Batch Change** for pay-as-you-go instances. For subscription instances, select **Batch Upgrade** or **Batch Downgrade**.
            
    
3.  Set the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Specification Category**
    
    Select the specification category for the Mongos nodes.
    
    **Note**
    
    -   This parameter is required only for ApsaraDB for MongoDB sharded cluster instances that use cloud disks.
        
    -   If a category is not available for selection, it is not supported in the current zone.
        
    -   For more information about the categories and specifications of ApsaraDB for MongoDB sharded cluster instances, see [Sharded cluster instance specifications](/help/en/mongodb/product-overview/sharded-cluster-instance-types).
        
    
    **Instance Specifications**
    
    Select the specifications for the Mongos nodes.
    
    **Switchover Time**
    
    Select when the configuration change takes effect.
    
    -   **Switch Immediately after Migration**: The system applies the configuration change immediately after the task is complete.
        
    -   **Switch within Maintenance Window**: The system applies the configuration change within the specified maintenance window. You can use the current maintenance window or set a new one as needed.
        
        1.  Click **Edit** next to **Switch within Maintenance Window** to set the switch time.
            
        2.  In the **Specification Information** section, click **Edit** next to **Maintenance Window** to set the switch time. For more information, see [Set a maintenance window](/help/en/mongodb/user-guide/specify-a-maintenance-window#task-tng-h4t-j2b).
            
    
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
