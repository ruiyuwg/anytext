This topic describes how to use cross-region backup files to restore the data of an ApsaraDB for MongoDB instance to a new instance deployed in the region where the files reside.

## **Prerequisites**

-   The instance is a replica set or sharded cluster instance.
    
-   The instance uses Enterprise SSDs (ESSDs) to store data.
    
-   The instance data is backed up across regions. For more information, see [Configure cross-region backup for an instance](/help/en/mongodb/user-guide/cross-region-backup).
    

## **Usage notes**

-   Cross-region data restoration is not supported by instances for which disk encryption is enabled.
    
-   Cross-region data restoration is supported only when all additional log backup tasks are complete or no tasks are in progress in the instance.
    

## **Procedure**

1.  Go to the [Replica Set Instances](https://mongodb.console.alibabacloud.com/replicate/instances) or [Sharded Cluster Instances](https://mongodb.console.alibabacloud.com/sharding/instances) page. In the top navigation bar, select the region in which the instance resides. Then, find the instance and click the ID of the instance.
    
2.  In the left-side navigation pane of the instance details page, click **Backup and Restoration**.
    
3.  Click the **Cross-region Backup** tab.
    
4.  Find the backup set that you want to use for data restoration and then click **Create Instance from Backup Point** in the **Actions** column.
    
5.  In the **Create Instance from Backup Point** panel, click **OK**.
    
6.  Clone a new instance. The instance cloning operations vary based on the instance architecture.
    
    ## Replica set instance
    
    1.  On the **Clone Instance** page, set **Product Type**.
        
        -   **Replica Set (Subscription)**: If you purchase a subscription instance, you must pay an upfront fee. If you want to use an instance for a long period of time, the subscription billing method is more cost-effective than the pay-as-you-go billing method. You are offered lower prices for longer subscription periods.
            
        -   **Replica Set (Pay-as-you-go)**: The system generates a bill and deducts the fee from your Alibaba Cloud account per hour. The amount is calculated based on the instance type and largest storage capacity of your instance at the time of billing. We recommend that you select the pay-as-you-go billing method for short-term usage. If you no longer require a pay-as-you-go instance, you can release it to reduce costs.
            
        
    2.  Configure the new instance. For more information, see [Create a replica set instance](/help/en/mongodb/create-a-replica-set-instance-1#task-hwt-zlx-p2b).
        
        **Important**
        
        The storage capacity of the new instance must be greater than or equal to that of the source instance.
        
    
    ## Sharded cluster instance
    
    1.  On the **Clone Instance** page, set **Product Type**.
        
        -   **Sharded Cluster (Subscription)**: If you purchase a subscription instance, you must pay an upfront fee. If you want to use an instance for a long period of time, the subscription billing method is more cost-effective than the pay-as-you-go billing method. You are offered lower prices for longer subscription periods.
            
        -   **Sharded Cluster (Subscription)**: The system generates a bill and deducts the fee from your Alibaba Cloud account per hour. The amount is calculated based on the instance type and largest storage capacity of your instance at the time of billing. We recommend that you select the pay-as-you-go billing method for short-term usage. If you no longer require a pay-as-you-go instance, you can release it to reduce costs.
            
        
    2.  Configure the new instance. For more information, see [Create a sharded cluster instance](/help/en/mongodb/create-a-sharded-cluster-instance-1#task-g3q-hyq-w2b).
        
        **Important**
        
        -   The number of shard nodes in the new instance must be greater than or equal to that in the original instance.
            
        -   The storage capacity of each shard node in the new instance must be greater than or equal to that in the original instance.
            
        
    
7.  On the payment page that appears, complete the payment.
    

## **Related API operations**

**Operation**

**Description**

[DescribeBackups](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describebackups)

Queries the backup list of an ApsaraDB for MongoDB replica set instance.

[DescribeClusterBackups](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeclusterbackups)

Queries the backup list of an ApsaraDB for MongoDB sharded cluster instance.

[CreateDBInstance](/help/en/mongodb/developer-reference/api-dds-2015-12-01-createdbinstance)

Restores the data of an ApsaraDB for MongoDB instance to a new replica set instance.

[CreateShardingDBInstance](/help/en/mongodb/developer-reference/api-dds-2015-12-01-createshardingdbinstance)

Restores the data of an ApsaraDB for MongoDB instance to a new sharded cluster instance.

[CheckRecoveryCondition](/help/en/mongodb/developer-reference/api-dds-2015-12-01-checkrecoverycondition)

Checks whether an ApsaraDB for MongoDB instance that use cloud disks meets the data restoration conditions.
