The ConfigServer component stores the metadata of a sharded environment. This metadata includes the cluster's configuration information and the data distribution on each shard. If a ConfigServer cannot meet storage requirements or reaches a performance bottleneck, you can scale out its storage space or upgrade its specifications. ApsaraDB for MongoDB sharded cluster instances support configuration changes for ConfigServer components.

## **Prerequisites**

The instance must use enterprise SSDs (ESSDs).

## Billing rules

For more information, see [Configuration change fees](/help/en/mongodb/product-overview/configuration-change-fees#concept-1426323).

## **Usage notes**

-   The storage space that you select must be greater than or equal to the storage space that is already used by the ConfigServer.
    
-   During a configuration change, the instance may experience one or two transient connections, each lasting about 30 seconds. Schedule the change for a time that minimizes the impact on your services.
    
    **Important**
    
    When you change only the storage space, the system performs different operations based on the available storage resources on the host:
    
    -   Sufficient resources: The storage is scaled out on the local host without migration or a switchover. No transient connections occur. The change takes effect immediately and does not wait for a maintenance window.
        
    -   Insufficient resources: A cross-host migration and switchover are required. Transient connections occur during the process. The change takes effect at the switchover time that you specify.
        
    
-   The time required to complete a configuration change depends on various factors, such as the network, task queue, and data volume. Perform configuration changes during off-peak hours. Make sure that your application is configured to automatically reconnect to the instance.
    
-   If the minor version of your database is expired or no longer maintained, the system upgrades the minor version to the latest version by default. This ensures better performance and stability.
    

## **Procedure**

1.  Go to the [MongoDB sharded cluster instances](https://mongodb.console.alibabacloud.com/sharding/instances) page. In the top navigation bar, select a resource group and region. Then, click the ID of the target instance.
    
2.  On the **Basic Information** page, in the **Configserver List** section, perform one of the following operations:
    
    -   For a subscription instance, find the target ConfigServer, click ![三个点](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9769217361/p13851.png) in the Actions column, and select **Upgrade** or **Downgrade**.
        
    -   For a pay-as-you-go instance, find the target ConfigServer, click ![三个点](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9769217361/p13851.png) in the Actions column, and select **Change Configurations**.
        
    
3.  Set the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Category**
    
    Select a new category for the ConfigServer.
    
    **Note**
    
    -   This parameter is required only for ApsaraDB for MongoDB sharded cluster instances that use cloud disks.
        
    -   If a category is not available for selection, it is not supported in the current zone.
        
    -   For more information about the categories and specifications of ApsaraDB for MongoDB sharded cluster instances, see [Sharded cluster instance specifications](/help/en/mongodb/product-overview/sharded-cluster-instance-types).
        
    
    **Instanses**
    
    Select new specifications and storage space for the ConfigServer.
    
    **Note**
    
    The storage space that you select must be greater than or equal to the maximum storage space of the current ConfigServer. To reduce the storage space, create a new instance and migrate the data. For more information, see [Other configuration change scenarios and methods](/help/en/mongodb/user-guide/changing-the-configurations-of-an-instance/#section-akn-836-bi4).
    
    **Switchover Time**
    
    Select when the configuration change takes effect.
    
    -   **Switch Immediately After Task Completion**: The system applies the change immediately after the configuration change task is complete.
        
    -   **Switch Within Maintenance Window After Task Completion**: The change takes effect during a maintenance window. You can use the current maintenance window or set a new one based on your business needs. For more information, see [Set a maintenance window](/help/en/mongodb/user-guide/specify-a-maintenance-window#task-tng-h4t-j2b).
        
    
4.  Complete the purchase based on the billing method.
    
    -   Pay-as-you-go: Click **Pay Now**. The system automatically deducts the fee within the next hour.
        
    -   Subscription: Click **Pay Now** and complete the payment process on the **Payment** page.
        
    
    During the configuration change, the instance status is **Modifying**. When the instance status changes to **Running**, the configuration change is complete.
    

## **Related API operations**

**API**

**Description**

[Change the specifications and storage space of a node in a sharded cluster instance](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifynodespec#doc-api-Dds-ModifyNodeSpec)

Changes the configurations of a single Mongos, shard, or ConfigServer node in an ApsaraDB for MongoDB sharded cluster instance.
