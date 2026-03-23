ApsaraDB for MongoDB lets you create an instance at a specific point in time while the original instance is running, and restore backup data from that point in time to the new instance. This method is ideal for data restoration and verification.

## Instance architecture

-   Replica set instances
    
-   Sharded cluster instances
    

## Usage notes

-   To ensure the accuracy of point-in-time restores, you must enable **Log Backup**. If you disable **Log Backup**, ApsaraDB for MongoDB uses the most recent full backup for restoration because of missing oplog entries. This results in data inaccuracy. For more information, see [Automatically back up MongoDB data](/help/en/mongodb/user-guide/configure-automatic-backup-for-an-instance#concept-gs1-qrp-dgb).
    
    **Note**
    
    If the point in time that you specify is not a valid time point for log backups, point-in-time backup data cannot be restored to a new instance.
    
-   Individual databases can be restored only from physical backups and not from logical backups. If your instance runs a MongoDB version earlier than 4.0 and the total number of collections and indexes in your instance exceeds 10,000, physical backups may fail. Before you perform a physical backup, upgrade the database version of your instance to MongoDB 4.0 or later. For more information, see [Upgrade the major version of an instance](/help/en/mongodb/user-guide/upgrade-the-major-version-of-an-apsaradb-for-mongodb-instance#concept-ut5-fp4-fgb).
    
    **Important**
    
    After the database version is upgraded, the backup files of the original instance that runs a MongoDB version earlier than MongoDB 4.0 cannot be used to restore data to the new instance.
    
-   The time required for a database recovery varies based on several factors, such as the data volume, task queue length, and network conditions. You only need to wait for the status of the new instance to change to **Running**.
    
-   If the minor version of an instance expires or is not maintained, ApsaraDB for MongoDB automatically updates the minor version of the instance to the latest version when you restore backup data from the original to the new instance by point in time. This ensures the performance and stability of the instance.
    

## Billing

Creating an instance from a point in time creates a new instance and incurs fees. For more information, see [Billing Items and Pricing](/help/en/mongodb/product-overview/billable-items#concept-jww-bny-32b).

## Replica set instance

1.  Go to the [MongoDB Replica Set Instances](https://mongodb.console.alibabacloud.com/replicate/instances) page, select the resource group and region at the top of the page, and then click the ID of the target instance.
    
2.  In the navigation pane on the left of the instance details page, click **Backup and Restoration**.
    
3.  On the **Full Backup** tab, click **Create Instance by Time Point**.
    
4.  In the **Create Instance by Time Point** panel, set the following parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Select Time Point for Restoration**
    
    The point in time from which you want to restore data.
    
    **Note**
    
    -   The point in time that you select must be earlier than the current time and later than the time when the original instance was created.
        
    -   The restoration time range is the retention period of log backup files. For more information about how to set log backup, see [Configure automatic backup for an instance](/help/en/mongodb/user-guide/configure-automatic-backup-for-an-instance#concept-gs1-qrp-dgb).
        
    
    **Select Database for Restoration**
    
    -   **All Databases**: All databases in the instance are restored.
        
    -   **Partial Databases**: Only selected databases in the instance are restored.
        
        You can directly select the databases that you want to restore, or you can click **Enter Databases** to manually enter the databases that you want to restore.
        
        **Note**
        
        -   When manually entering databases, separate multiple databases with commas (,).
            
        -   If you have upgraded the database version, backup files from older versions cannot be used to restore data.
            
        -   Replica set instances that use disk only support selecting **All Databases** to restore all databases of the instance.
            
        
    
5.  Create an instance.
    
    1.  On the **Clone Instance** page, select **Product Type**.
        
        -   **ReplicaSet (Subscription)**: This is a prepaid billing method where you pay for an instance at the time of purchase. For long-term use, this billing method is more cost-effective than the pay-as-you-go billing method. You receive larger discounts for longer subscription periods.
            
        -   **Replica Set (Pay-as-you-go)**: This is a post-paid billing method where you are billed on an hourly basis. Fees are deducted from your Alibaba Cloud account based on the instance type and the maximum storage space of your instance at the time of billing. This billing method is suitable for short-term use. If you no longer need a pay-as-you-go instance, you can release the instance to reduce costs.
            
        
    2.  Configure the new instance. For more information, see [Create a replica set instance](/help/en/mongodb/create-a-replica-set-instance-1#task-hwt-zlx-p2b).
        
        **Important**
        
        The storage capacity of the new instance must be greater than or equal to that of the source instance.
        
6.  Purchase the instance.
    
    1.  Click **Buy Now**.
        
    2.  On the **Confirm Order** page, read the **Terms Of Service**.
        
    3.  Click **Pay**.
        
    4.  Complete the payment process as prompted.
        

## Sharded cluster instance

1.  Go to the [MongoDB Sharded Cluster Instances](https://mongodb.console.alibabacloud.com/sharding/instances) page. At the top of the page, select the resource group and region. Then, click the ID of the target instance.
    
2.  In the navigation pane on the left of the instance details page, click **Backup and Restoration**.
    
3.  (Optional) In the upper-right corner of the page, click **Upgrade To Cluster Backup Mode**.
    
    **Note**
    
    This step is required only for sharded cluster instances that use **cloud disks** and were created before October 18, 2023. If this button is not displayed in the upper-right corner, the database version of the instance has been upgraded.
    
4.  On the **Full Backup** tab, click **Create Instance by Time Point**.
    
5.  In the **Create Instance by Time Point** panel, set the following parameters and click **OK**.
    
    The page information of a sharded cluster instance that uses cloud disks differs from that of a sharded cluster instance that uses local disks. Select operations based on the instance category.
    
    ## Instances that use cloud disks
    
    **Configuration Items**
    
    **Description**
    
    **Recovery Model**
    
    Select **Create Instance By Time Point**.
    
    **Note**
    
    For more information about the usage and description of **Database/Collection Restoration**, see [Restore individual or multiple databases of ApsaraDB for MongoDB](/help/en/mongodb/user-guide/restore-one-or-more-databases-of-an-apsaradb-for-mongodb-instance).
    
    **Valid Time Range**
    
    The period of time during which the data of the source instance is restored to the new instance. You do not need to configure this parameter.
    
    **Select Time Point for Restoration**
    
    The point in time from which you want to restore data.
    
    **Note**
    
    -   The point in time that you select must be earlier than the current time and later than the time when the original instance was created.
        
    -   The restoration time range is the retention period of log backup files. For more information about how to set log backup, see [Configure automatic backup for an instance](/help/en/mongodb/user-guide/configure-automatic-backup-for-an-instance#concept-gs1-qrp-dgb).
        
    
    **Select Database for Restoration**
    
    By default, this parameter is set to **All Databases**.
    
    **Note**
    
    If you have upgraded the database version, the backup files of the older version cannot be used to recover data.
    
    ## Instances that use local disks
    
    **Parameter**
    
    **Description**
    
    **Select Time Point for Restoration**
    
    The point in time from which you want to restore data.
    
    **Note**
    
    -   The point in time that you select must be earlier than the current time and later than the time when the original instance was created.
        
    -   The restoration time range is the retention period of log backup files. For more information about how to set log backup, see [Configure automatic backup for an instance](/help/en/mongodb/user-guide/configure-automatic-backup-for-an-instance#concept-gs1-qrp-dgb).
        
    
    **Select Database for Restoration**
    
    Select **All Databases**.
    
    **Note**
    
    -   If you have upgraded the database version, backup files of the earlier version cannot be used to recover data.
        
    -   By default, you can restore only all databases in a sharded cluster instance that uses local disks. You do not need to execute this step.
        
    
    **Important**
    
    -   The point in time that you select must be earlier than the current time and later than the time when the original instance was created.
        
    -   To ensure that data is complete and accurate, do not select the most recent point in time (usually within the last hour) if the instance is a sharded cluster instance. Otherwise, the restoration fails.
        
    -   The recoverable time range is the log backup retention period. For more information about how to configure log backups, see [Automatically back up MongoDB data](/help/en/mongodb/user-guide/configure-automatic-backup-for-an-instance#concept-gs1-qrp-dgb).
        
    
6.  Create an instance.
    
    1.  On the **Clone Instance** page, select **Billing Method**.
        
        -   **Sharded Cluster (Subscription)**: This is a prepaid billing method where you pay for the instance at the time of purchase. For long-term use, this billing method is more cost-effective than the pay-as-you-go billing method. You receive larger discounts for longer subscription durations.
            
        -   **Sharded Cluster (Pay-as-you-go)**: This is a post-paid billing method. A bill is generated each hour, and the fees are deducted from your Alibaba Cloud account. The fees are calculated based on the instance type and the maximum storage space of the instance at the time of billing. This billing method is suitable for short-term use. If you no longer need the instance, you can release it at any time to reduce costs.
            
        
    2.  Configure the new instance. For more information, see [Create a sharded cluster instance](/help/en/mongodb/create-a-sharded-cluster-instance-1#task-g3q-hyq-w2b).
        
        **Important**
        
        -   The number of shard nodes in the new instance must be equal to that in the original instance.
            
        -   The storage capacity of each shard node in the new instance must be greater than or equal to that in the original instance.
            
        
7.  Purchase the instance.
    
    1.  Click **Buy Now**.
        
    2.  On the **Confirm Order** page, read the **Terms Of Service**.
        
    3.  Click **Pay**.
        
    4.  Complete the payment process as prompted.
        

## **FAQ**

Q: Why am I unable to find the Create Instance By Time Point tab in the ApsaraDB for MongoDB console?

A: The point-in-time creation feature is available only for ReplicaSet and sharded cluster instances, not for single-node instances.
