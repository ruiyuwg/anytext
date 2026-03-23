This topic describes how to manually scale in the storage capacity of an ApsaraDB RDS for MySQL instance that uses cloud disks. This helps you reduce resource waste and lower costs. During the scale-in process, you can also downgrade the performance level (PL) of an enterprise SSD (ESSD) and the instance type to optimize your resource configuration.

## **Prerequisites**

-   Your ApsaraDB RDS for MySQL instance must meet the following requirements to scale in its storage capacity. You can view the instance information on the **Basic Information** page.
    
    -   Major engine version: 5.7 or 8.0
        
    -   Minor engine version: 20210430 or later.
        
    -   Storage type: enterprise SSD (ESSD) or premium performance disk. Standard SSDs are not supported.
        
        **Note**
        
        If your instance uses a standard SSD, you must first [upgrade it to an enterprise SSD (ESSD)](/help/en/rds/apsaradb-rds-for-mysql/upgrade-the-storage-type-of-an-apsaradb-rds-for-mysql-instance-from-standard-ssds-to-essds) before you can scale in its storage capacity.
        
    -   Instance architecture: Only the new architecture (kindcode=18) is supported.
        
        **Note**
        
        You can query the instance architecture version using the [DescribeDBInstanceAttribute](/help/en/rds/developer-reference/api-rds-2014-08-15-describedbinstanceattribute) API. If the instance uses the old architecture (kindcode=1 or 3), you must first upgrade it to the new architecture by [upgrading the minor engine version](/help/en/rds/apsaradb-rds-for-mysql/update-the-minor-engine-version-of-an-apsaradb-rds-for-mysql-instance) before you can scale in.
        
    -   The instance is running, and the [log backup feature](/help/en/rds/support/use-the-log-backup-feature) is enabled.
        
-   Your Alibaba Cloud account has no unpaid renewal orders.
    
    **Note**
    
    If you have unpaid renewal orders, go to the ApsaraDB RDS console. In the upper-right corner, hover over **Expense** and click **Orders**. On the **Orders for Services** page, pay for or cancel the orders.
    
-   When you scale in the storage capacity of a read-only instance, its primary instance must be running.
    

## **Limits**

-   **Scale-in frequency**: You can manually scale in the storage capacity up to twice per day. Avoid frequent scale-ins to prevent service disruptions.
    
-   **Scale-in conditions and formula**:
    
    -   Scale-in is supported only within the same series and architecture.
        
    -   The minimum storage capacity after a scale-in is determined by the following formula: `min{current usage × 1.3, current usage + 400 GB}`. The new capacity cannot be less than the minimum storage capacity allowed for the current instance type. You can adjust the storage capacity in 5 GB increments.
        
        **Minimum storage capacity for different cloud disk types and scale-in examples**
        
        The minimum storage capacity for each cloud disk type (ESSD and premium performance disk) is as follows:
        
        -   ESSD PL1: 20 GB
            
        -   ESSD PL2: 500 GB
            
        -   ESSD PL3: 1500 GB
            
        -   Premium performance disk: 10 GB
            
        
        **Scale-in examples**
        
        For example, assume an ApsaraDB RDS for MySQL instance uses an ESSD PL1 disk (minimum allowed storage capacity: 20 GB) and its original storage capacity is 2000 GB. The minimum storage capacity after a scale-in varies based on the used storage space:
        
        -   If 10 GB of storage is used: The value calculated using the formula is 13 GB. Because this is less than 20 GB, the minimum storage capacity that you can scale down to is 20 GB.
            
        -   If 500 GB of storage is used: The value calculated using the formula is 650 GB. The minimum storage capacity that you can scale down to is 650 GB.
            
        -   If 1500 GB of storage is used: The value calculated using the formula is 1900 GB. The minimum storage capacity that you can scale down to is 1900 GB.
            
        
-   **Primary and read-only instances**: The storage capacity of a read-only instance must be greater than or equal to that of its primary instance. You must scale in the storage capacity of the primary instance before you scale in the storage capacity of the read-only instance.
    
-   **Scale-in duration and service traffic**: The time required for a scale-in depends on the disk usage and service traffic. If your instance handles high service traffic, adjust the local log retention policy by increasing the retention period and the number of log files. This improves the efficiency and success rate of the scale-in operation.
    
-   **Binary log requirements**: If an instance generates binary logs at a high rate, you must ensure that sufficient logs are retained locally to perform a scale-in. For more information about how to enable log backup, see [Modify RDS backup policy](/help/en/rds/apsaradb-rds-for-mysql/enable-the-automatic-backup-feature-for-an-apsaradb-rds-for-mysql-instance#87397dc0ee6q5).
    
-   **Backup jobs**: A scale-in operation may cancel a running backup job. We recommend that you start the scale-in after the current backup is complete.
    

## **Impacts**

A manual storage scale-in causes a transient connection that lasts for about 15 seconds. During the transient connection, you cannot perform most operations related to databases, accounts, or networks. We recommend that you perform the scale-in operation during off-peak hours and ensure that your application is configured with an automatic reconnection mechanism.

## **Billing**

For information about billing changes, see [Billing rules for upgrades/downgrades](/help/en/rds/product-overview/specification-changes).

## **Procedure**

## Pay-as-you-go and subscription instances

1.  Go to the [RDS instance list](https://rds.console.alibabacloud.com/rdsList/basic), select a region at the top, and click the target instance ID.
    
2.  In the **Configuration Information** section, click **Change Specifications**.
    
3.  (This step is required only for subscription instances.) In the dialog box that appears, click **Downgrade**, and then click **Next**.
    
4.  Set the following parameters for the scale-in.
    
    **Parameter**
    
    **Description**
    
    **Storage Type**
    
    Select a storage type as needed. This parameter is optional.
    
    **Instance Type**
    
    Select an instance type as needed. This parameter is optional.
    
    **Storage Capacity**
    
    Move the slider or click the minus icon to decrease the storage capacity.
    
    **Note**
    
    The minimum storage capacity after a scale-in must meet the formula `min{current usage × 1.3, current usage + 400 GB}`. The new capacity cannot be smaller than the minimum storage capacity allowed for the current instance type. The storage capacity can be adjusted in 5 GB increments.
    
    **Switching Time**
    
    Select a switchover time as needed:
    
    -   **Switch Immediately After Data Migration**: The migration starts immediately. The migration process does not affect your instance. The switchover is performed after the migration is complete and causes a transient connection.
        
    -   **Switch Within Maintenance Window**: The migration starts immediately, and the migration process does not affect the instance. However, the switchover is not performed until the [maintenance window](/help/en/rds/apsaradb-rds-for-mysql/set-the-maintenance-window-of-an-apsaradb-rds-for-mysql-instance). The switchover will cause a transient connection.
        
    
5.  Read and select the Terms of Service. Click **Confirm Order**. In the dialog box that appears, confirm the instance information before and after the change. Click **Continue**and complete the payment.
    

## Serverless instances

1.  Go to the [RDS instance list](https://rds.console.alibabacloud.com/rdsList/basic), select a region at the top, and then click the target instance ID.
    
2.  On the **Basic Information** page of the instance, in the **Instance Resources** section, click **Modify** to the right of **Storage Capacity**.
    
3.  In the panel that appears, click the minus icon to decrease the storage capacity. Click **OK**. In the dialog box that appears, click **Confirm**.
    

**Note**

A scale-in operation requires data copying and takes several minutes, which is longer than a scale-out operation. During the scale-in or scale-out process, the instance status is **Upgrading**. After the process is complete, the instance status changes to **Running**.

## **FAQ**

-   **Q: How long does the transient connection last during a manual storage scale-in for an ApsaraDB RDS for MySQL instance that uses a cloud disk?**
    
    A: The operation causes a transient connection that lasts for about 15 seconds. During the transient connection, you cannot perform most operations related to databases, accounts, or networks. We recommend that you perform the scale-in operation during off-peak hours and ensure that your application is configured with an automatic reconnection mechanism.
    
-   **Q: How do I scale in the storage capacity of an ApsaraDB RDS for MySQL instance that uses a standard SSD?**
    
    A: You cannot scale in the storage capacity of instances that use standard SSDs. In addition, [Standard SSDs are discontinued](/help/en/rds/apsaradb-rds-for-mysql/end-of-sale-for-the-standard-ssd-storage-type-for-specific-database-engines-in-apsaradb-rds). You must upgrade the standard SSD to an enterprise SSD (ESSD) and then follow the instructions in this topic to scale in the storage capacity.
    

## **References**

-   You can [modify other instance configurations](/help/en/rds/apsaradb-rds-for-mysql/change-the-specifications-of-an-apsaradb-rds-for-mysql-instance).
    
-   You can use the [ModifyDBInstanceSpec](/help/en/rds/api-change-instance-configuration) API to scale in the storage capacity of a disk. Set the **DBInstanceStorage** parameter to the target storage capacity and configure other parameters as needed.
    
-   To scale in the storage capacity of an instance that uses a high-performance local disk, see [Change configuration](/help/en/rds/apsaradb-rds-for-mysql/change-the-specifications-of-an-apsaradb-rds-for-mysql-instance).
