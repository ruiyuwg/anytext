To prevent data loss or damage, regularly back up your General-purpose NAS file system using Cloud Backup. Cloud Backup provides flexible policies for creating cloud-based backups, which can be viewed and restored at any time. This topic describes how to use Cloud Backup to back up files from a General-purpose NAS file system.

## Prerequisites

-   A General-purpose NAS file system is created. For more information, see [Create a file system](/help/en/nas/user-guide/create-a-file-system#task-27530-zh).
    
-   Cloud Backup is activated and the AliyunServiceRoleForHbrNasBackup service-linked role is assigned to Cloud Backup.
    
    If you use the file backup feature for the first time, you must activate Cloud Backup and assign the AliyunServiceRoleForHbrNasBackup service-linked role to Cloud Backup.
    

## Background information

File Storage NAS (NAS) can work with Cloud Backup. Cloud Backup uses an efficient backup mechanism that scans files in General-purpose NAS file systems. This eliminates the need to create snapshots for NAS file systems. You can configure backup policies to generate multiple replicas of data. If data is lost or damaged, use these replicas to restore files at the earliest opportunity.

-   General-purpose NFS and SMB file systems can be backed up without being mounted on a client.
    
-   Cloud Backup does not support the access control list (ACL) feature of SMB file systems. If the ACL feature is enabled for your SMB file system, Cloud Backup cannot back up the ACL configurations. For more information, see [Overview of File Storage NAS SMB ACL](/help/en/nas/user-guide/overview-of-the-smb-acl-feature#task-2475611).
    
-   If a backup fails because of permission issues on an SMB file system, [grant the Cloud Backup client permissions to read the files](/help/en/cloud-backup/user-guide/grant-the-hbr-client-the-permissions-to-read-data-from-an-smb-file-system-in-nas#task-2043299) and then [back up the file system using an ECS file backup client](/help/en/cloud-backup/user-guide/back-up-nas-files-use-the-hbr-client-for-ecs-file-backup-to-back-up-smb-file-systems).
    
-   The recycle bin feature is also available. If you enable the recycle bin feature, the files or directories that you delete are dumped to the recycle bin. The files or directories are permanently deleted from the recycle bin after a specified retention period. You can restore the files or directories from the recycle bin within the retention period that you specify. For more information, see [Recycle bin](/help/en/nas/user-guide/recycle-bin).
    

## Billing

Your first NAS backup plan includes a 30-day free trial. When the trial period expires, you can renew or suspend the backup plan. For more information, see [Billing methods and billable items](/help/en/cloud-backup/product-overview/billing-methods-and-billable-items#concept-89062-zh).

## **Usage notes**

-   The first time you create a backup plan or associate a backup plan with a backup policy, Cloud Backup automatically creates a [service-linked role for Cloud Backup](/help/en/cloud-backup/service-linked-roles-for-hbr) named AliyunServiceRoleForHbrNasBackup. This role is used to obtain permissions to access related resources. In the dialog box that appears, grant the role as prompted.
    
-   During a NAS backup or restore job, the maximum length of a file name is 248 bytes. If a file name exceeds this limit, the file cannot be backed up or restored. The job is then marked as partially completed.
    
-   When you restore NAS files, you cannot restore socket files or hard links.
    

## Back up files

1.  Log on to the [NAS console](https://nas.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Data Service** > **File Backup (Cloud Backup Service)**.
    
3.  In the top navigation bar, select a region.
    
4.  On the **File Backup** page, click the **Backup Plans** tab and click **Create Backup Plan**.
    
5.  In the **Create Backup Plan** panel, configure the following parameters to create a backup plan, and then click **OK**.
    
    1.  Configure basic settings.
        
        **Important**
        
        -   **About the free trial plan**
            
            The [30-day free trial](/help/en/cloud-backup/product-overview/30-day-free-trial-instructions) is enabled by default, allowing you to quickly test the features. However, the trial has limitations, such as the inability to edit the source path or backup cycle, and each free backup plan uses a separate vault. Once you upgrade to a paid plan, you cannot change the backup vault. If you want to back up all your data to a single vault, click **Switch to Paid Plan** to unlock all features.
            
        -   **About the disaster recovery capability of backup vaults**
            
            If your backup vault is locally redundant, a message will be displayed: "The backup vault in your current region is a locally redundant storage backup vault." [Switch to the paid plan](/help/en/cloud-backup/product-overview/30-day-free-trial-instructions) to enable cross-region backup replication. This protects your data from a single data center failure. Alternatively, choose a zone-redundant backup vault from the following supported regions: China (Hangzhou), China (Shanghai), China (Beijing), China (Zhangjiakou), China (Ulanqab), China (Shenzhen), China (Hong Kong), Japan (Tokyo), Singapore, Indonesia (Jakarta), and Germany (Frankfurt).
            
        
        **Parameter**
        
        **Description**
        
        **File System**
        
        Select the NAS file system that you want to back up.
        
        **Pay After Trial Ends**
        
        Choose whether to automatically convert the plan to a paid subscription after the free trial ends.
        
        **Plan Name**
        
        Enter a name for the backup plan. If you do not configure this parameter, a random name is specified.
        
        **Start Time**
        
        Specify the exact time (down to the second) for the first backup job to start.
        
    2.  **Optional.** To configure a fine-grained backup plan, click **Switch to Paid Plan** to enable advanced settings, and then configure the parameters. The following table describes the parameters.
        
        **Parameter**
        
        **Description**
        
        **Source Paths**
        
        Enter a path, for example, `/nas/folder`.
        
        **Backup Rule**
        
        Configure the rule to back up files. Only files that match the rule are backed up.
        
        -   **Include All Files**: Backs up all files.
            
        -   **Include Files** or **Exclude Files**: Manually enter a list of files. Files are backed up based on the specified rule.
            
        
        **Backup Policy**
        
        Select a backup policy from the drop-down list.
        
        Cloud Backup automatically backs up data sources based on the backup policy that you configure. A backup policy includes settings such as the backup vault encryption method, backup interval, retention period, cross-region replication policy, automatic data archiving, and virus detection for backup points. This helps you flexibly manage data sources.
        
        If the default backup policy does not meet your requirements, click **Create Policy** or **Edit Policy** to manage backup policies.
        
        For more information about the parameters in a backup policy, see [Policy center](/help/en/cloud-backup/user-guide/manage-backup-policies).
        
        **Note**
        
        -   On the **Backup Jobs** tab, view the status of the backup jobs, the data size of the backup files, and other details.
            
        -   If the job status does not update, click the **Refresh** button in the upper-right corner of the page.
            
        

## Restore files

To restore backup data from a backup vault to a NAS file system in the same region as the backup vault, perform the following steps:

1.  Log on to the [NAS console](https://nas.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Data Service** **\>** **File Backup (Cloud Backup Service)**.
    
3.  In the top navigation bar, select a region.
    
4.  On the **File Backup** page, click the **Restore Jobs** tab, and then click **Create Restore Job**.
    
5.  In the **Create Restore Job** panel, configure the following settings.
    
    1.  Select a backup and click **Next**.
        
        **Parameter**
        
        **Description**
        
        **Source Vault**
        
        Select the backup vault that stores the backup data of the source NAS file system.
        
        **Source File System**
        
        Select a backed-up NAS file system as the source for restoration.
        
        ****Please select which backup to restore****
        
        From the list of backups, select the backup that you want to restore.
        
    2.  On the **Select Restore Items** tab, select **Restore Items** and click **Next**.
        
        **Parameter**
        
        **Description**
        
        **Restore Items**
        
        Select the items to restore.
        
        -   Include All Files: Restores all files in the selected source NAS instance.
            
        -   Include Files: Select the folders or files that you want to restore. You can also manually enter a list of files in the **Enter Paths** box to restore specific files from the selected NAS instance.
            
        -   Exclude Files: Select the folders or files that you do not want to restore. You can also manually enter a list of files that you do not want to restore in the **Enter Paths** box. All files in the remaining paths are restored.
            
        
        Enter one path per line in the file list. Each line must start with the last folder of the source path. For example, if the source path is /test/data and you want to restore file.txt and abc in the data folder, enter the paths in the following format.
        
        ```
        /data/file.txt
        /data/abc
        ```
        
    3.  On the **Restore Destination** tab, select a **File System** in the region and click **Next**.
        
    4.  On the **Destination Path** tab, configure the restore path and click **Create**.
        
        **Parameter**
        
        **Description**
        
        **Restore Path Type**
        
        Select the type of restore path.
        
        -   Specify Path: Specify a new path to restore the files to.
            
        -   Origin Path: Restore files to the path from which they were backed up.
            
        
        **Destination Path**
        
        This parameter is required only if you set **Restore Path Type** to Specify Path. It specifies the destination path for the restored file system. For example, restore the file system to /nas/abc.
        
        **File Conflict Policy**
        
        -   Skip the file.
            
        -   Overwrite the existing file.
            
        -   Compare the update times and keep the newer version.
            
        
        **Virus Detection During Restoration**
        
        If you enable this option, Cloud Backup scans all files for viruses before restoring them. For more information, see the console or [Backup point virus detection](/help/en/cloud-backup/user-guide/malicious-file-detection).
        
        **When Recovery Items Contain Detected Viruses**
        
        -   **Do not restore the virus-infected files** (find secure versions on the Virus Detection page.)
            
        -   **I am aware of the risks and still want to restore all the selected items**
            
        
    
    After the restore job is created, view its progress in the **Status** column on the **Restore Jobs** tab.
    

## Related operations

**Category**

**Description**

Operations related to backup plans

-   Modify a backup plan: Reset the backup interval, retention policy, and source path of the backup plan based on your business requirements.
    
-   Delete a backup plan: If you no longer need a backup plan, delete it. After you delete the backup plan, Cloud Backup no longer runs backup jobs for the backup plan but retains the backup data.
    
-   Suspend a backup plan: Suspend a scheduled backup plan. To resume a suspended backup plan, find the backup plan and choose **More** > **Resume Plan** in the Actions column.
    
-   View backup history: View all the backup records of the file system or the backup records in the last three months.
    

Operations related to backup jobs

-   Query a backup job: Query the details of all backup jobs in the last three months. The details include the job status, data size, and progress.
    
-   Cancel a backup job: Cancel a pending or running backup job. If you cancel the backup job, all the files backed up by the job are removed from the backup vault. If you still need to back up the files, run the backup job again.
    

Operations related to restore jobs

-   Query a restore job: Query the status, data size, and progress of restore jobs.
    
-   Cancel a restore job: Cancel a running restore job. After you cancel a restore job, the restored files of the job are saved in a specified directory. The remaining files of the job are no longer restored.
    

Delete the the Cloud Backup mount target

Cloud Backup creates a dedicated, system-managed mount target when a backup plan is configured for a NAS file system. This mount target cannot be deleted directly from the NAS console. The only way to remove this mount target is to delete all associated backup plans, after which the system automatically unmounts and removes the target. Deleting backup plans will terminate any active backup or restore jobs for that file system, so ensure no critical operations are running before proceeding.

## FAQ

-   [How is the free-trial period for backing up NAS files calculated?](/help/en/nas/user-guide/faq-about-advanced-management-features#section-b2x-4bv-ka1)
    
-   [Does NAS support the inotify subsystem?](/help/en/nas/user-guide/faq-about-advanced-management-features#section-pf5-9bm-ygg)
    
-   [FAQ about advanced management features](/help/en/nas/user-guide/faq-about-advanced-management-features#section-a9x-4ta-3kb)
    

## **References**

-   [Back up an Extreme NAS file system](/help/en/nas/user-guide/back-up-an-extreme-nas-file-system)
    
-   [Recycle bin](/help/en/nas/user-guide/recycle-bin)
    
-   [Snapshots](/help/en/nas/user-guide/manage-snapshots)
