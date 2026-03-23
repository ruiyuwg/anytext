You can back up files from on-premises NAS file systems in the Cloud Backup console. This topic describes the steps required for this scenario.

The following procedure shows how to back up on-premises NAS files in the Cloud Backup console.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2218428071/0414ffffcd66o.svg)

1.  [Activate Cloud Backup](/help/en/cloud-backup/product-overview/activate-hbr#task-2259775)
    
    You are not charged for activating Cloud Backup. You are charged for the Cloud Backup client that you use to back up files and the storage usage of backup vaults. For more information, see [Billing methods and billable items](/help/en/cloud-backup/product-overview/billing-methods-and-billable-items#concept-89062-zh).
    
2.  [Install the Cloud Backup client](/help/en/cloud-backup/user-guide/before-you-begin-on-premises-nas-backup#task-1964189)
    
    A backup client is used to establish communication and control services between your on-premises server and Cloud Backup.
    
3.  [Back up on-premises NAS files](/help/en/cloud-backup/user-guide/back-up-an-on-premises-nas-file-system#task-1964190)
    
    When you create a backup plan, configure the backup vault, source path, backup cycle, and retention period. Cloud Backup starts the backup plan and continuously backs up files from the specified NAS file system.
    
    **Important**
    
    -   After you create a backup plan, the first backup job performs a full backup and subsequent backup jobs perform incremental backups.
        
    -   If the region that you select supports backup policies, you can set a backup plan only by associating it with a backup policy. Cloud Backup periodically backs up on-premises NAS files based on the backup policy.
        
    -   To view the regions that support backup policies, click **Policy Center** in the left-side navigation pane of the Cloud Backup console. For more information about how to create a backup policy, see [Create a backup policy](/help/en/cloud-backup/user-guide/manage-backup-policies#section-49a-5tg-0ij).
        
    
4.  [Restore files to an on-premises NAS file system](/help/en/cloud-backup/user-guide/restore-files-to-a-local-nas-file-system#task-1964191)
    
    If an exception occurs in an on-premises NAS file system, you can restore files to the source NAS file system or a new on-premises NAS file system based on the backup points that are created and the time when the backup points are created. You can view backed-up files at any time.
    

-   [Back up an Apsara File Storage NAS file system](/help/en/cloud-backup/user-guide/back-up-a-nas-file-system)
    
-   [Back up an Extreme NAS file system](/help/en/cloud-backup/user-guide/back-up-an-extreme-nas-file-system)
    
-   Cloud Backup provides resource plans for various backup scenarios so that you can enjoy higher discounts and minimize your costs. For more information, see [Purchase resource plans](/help/en/cloud-backup/product-overview/purchase-resource-plans).
    
-   Cloud Backup provides the data synchronization feature to help you synchronize a large number of OSS objects from the source to the destination. For more information, see [Overview of the data synchronization feature](/help/en/cloud-backup/user-guide/synchronization-of-overview).
