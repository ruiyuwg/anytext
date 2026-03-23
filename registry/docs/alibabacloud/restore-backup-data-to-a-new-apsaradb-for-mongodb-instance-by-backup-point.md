Backup-point restore creates a new ApsaraDB for MongoDB instance from a full backup snapshot. Use this to clone production data into an isolated instance for testing, verification, or data recovery without affecting the running database.

**Important**

Backup-point restore recovers data only to the time the full backup started, not to an arbitrary point in time.

## Prerequisites

Before you begin, make sure that:

-   The source instance is a standalone instance or a replica set instance.
    
-   (Pay-as-you-go only) Your account has enough balance to cover the new instance.
    

## Usage notes

-   The new instance runs the latest kernel version, regardless of the kernel version on the original instance.
    
-   Backup-point restore is not available for backups taken before a major version upgrade. If you upgraded the major version of the original instance, only backups created after the upgrade can be restored.
    

## Billing

Creating an instance from a backup point generates a new billable instance. For pricing details, see [Billable items](/help/en/mongodb/product-overview/billable-items#concept-jww-bny-32b).

## Procedure

1.  Go to the [Replica Set Instances](https://mongodb.console.alibabacloud.com/replicate/instances) page. In the top navigation bar, select the region of the original instance, then click its instance ID.
    
2.  In the left-side navigation pane, click **Backup and Restoration**.
    
3.  On the **Full Backup** tab, find the target backup and click **Create Instance from Backup** in the Actions column.
    
    **Important**
    
    If you upgraded the major version of the original instance, backups created before the upgrade are not available for restore.
    
4.  In the **Create Instance from Backup** panel, select which databases to restore:
    
    -   **All Databases** -- Restores every database in the original instance.
        
    -   **Partial Databases** -- Restores only the databases you select.
        
        **Note**
        
        Partial database restore is available only for instances that use local disks. For more information, see [Restore the databases of an instance](/help/en/mongodb/user-guide/restore-one-or-more-databases-of-an-apsaradb-for-mongodb-instance#concept-kvp-mrg-fhb).
        
    
5.  Click **OK**.
    
6.  On the **Clone Instance** page, configure the new instance and complete the payment. For configuration details, see [Create a standalone instance](/help/en/mongodb/create-a-standalone-instance#task-hwt-zlx-p2b) or [Create a replica set instance](/help/en/mongodb/create-a-replica-set-instance-1#task-hwt-zlx-p2b).
    
    **Note**
    
    -   The following parameters are inherited from the original instance and cannot be changed on the **Clone Instance** page:
        
        Parameter
        
        Description
        
        **Region**
        
        Same region as the original instance
        
        **Engine Version**
        
        Same major version as the original instance
        
        **Storage Engine**
        
        Same storage engine as the original instance
        
        **Active-standby Nodes**
        
        Same node topology as the original instance
        
    -   Set the storage capacity of the new instance to a value equal to or greater than the original instance to make sure the restored data fits.
        
    

## Post-restore tasks

-   Configure network access (VPC, whitelist) for the new instance. These settings are not inherited from the original instance.
    
-   Update connection strings in your applications if you plan to redirect traffic to the restored instance.
