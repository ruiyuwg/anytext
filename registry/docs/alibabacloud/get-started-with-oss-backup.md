You can back up Standard locally redundant storage (LRS) objects from Object Storage Service (OSS) buckets in the Cloud Backup console. This topic describes the steps required for this scenario.

The following procedure shows how to back up objects from an OSS bucket in the Cloud Backup console.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8028027071/78d35414fb9el.svg)

1.  [Activate Cloud Backup](/help/en/cloud-backup/product-overview/activate-hbr#task-2259775)
    
    You are not charged for activating Cloud Backup. You are charged for the storage usage of backup vaults created in Cloud Backup. For more information, see [Billing methods and billable items](/help/en/cloud-backup/product-overview/billing-methods-and-billable-items#concept-89062-zh).
    
2.  [Back up OSS objects](/help/en/cloud-backup/user-guide/create-a-backup-plan-for-an-oss-bucket#concept-1664266)
    
    When you create a backup plan, configure the backup vault, data source, backup cycle, and retention period. Cloud Backup starts the backup plan and continuously backs up objects from the specified OSS bucket.
    
    **Important**
    
    -   You can enjoy a 30-day free backup plan. You cannot edit the source path and backup cycle for a free backup plan.
        
    -   If the region that you select supports backup policies, you can set a backup plan only by associating it with a backup policy. Cloud Backup periodically backs up OSS objects based on the backup policy.
        
    -   To view the regions that support backup policies, click **Policy Center** in the left-side navigation pane of the Cloud Backup console. For more information about how to create a backup policy, see [Create a backup policy](/help/en/cloud-backup/user-guide/manage-backup-policies#section-49a-5tg-0ij).
        
    -   After you create a backup plan, the first backup job performs a full backup and subsequent backup jobs perform incremental backups.
        
    
3.  [Restore an OSS bucket](/help/en/cloud-backup/user-guide/create-an-oss-restore-job#task-2092826)
    
    You are not charged for restoration in the same region. If a file exception occurs in an OSS bucket, you can restore **all objects** or **some objects that meet the specified conditions** based on historical backups. You can **restore the objects to the source OSS bucket for free** or **restore the objects to a new OSS bucket for free**. You are charged for the traffic and storage capacity of the remote mirror vault.
    

-   If you need to back up a large number of objects, you can use the OSS inventory feature, which significantly improves the efficiency and performance of data backup. For more information, see [Use an OSS inventory list to create a backup plan for a large amount of OSS data](/help/en/cloud-backup/user-guide/use-an-oss-inventory-list-to-create-a-backup-plan-for-a-large-amount-of-oss-data).
    
-   Cloud Backup provides resource plans for various backup scenarios so that you can enjoy higher discounts and minimize your costs. For more information, see [Purchase resource plans](/help/en/cloud-backup/product-overview/purchase-resource-plans).
    
-   Cloud Backup provides the data synchronization feature to help you synchronize a large number of OSS objects from the source to the destination. For more information, see [Overview of the data synchronization feature](/help/en/cloud-backup/user-guide/synchronization-of-overview).
    
-   For more information about Cloud Backup, see [What is Cloud Backup?](/help/en/cloud-backup/product-overview/what-is-hbr)
