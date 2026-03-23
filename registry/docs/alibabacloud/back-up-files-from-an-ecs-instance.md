Use Cloud Backup to protect files on your Elastic Compute Service (ECS) instance from data loss caused by accidental deletion or viruses. Its flexible policies let you automate backups and restore data at any time.

## Prerequisites

You must activate the Cloud Backup service. While activation is free, the ECS file backup feature incurs a software usage fee and storage fee. For more information, see [ECS file backup pricing](/help/en/cloud-backup/user-guide/ecs-file-backup-overview#section-gbp-k0w-479).

## Usage notes

-   For optimal backup speed, run the Cloud Backup client on a machine that has a 64-bit dual-core CPU or higher and more than 8 GB of available memory.
    
-   The backup capacity is determined by the available system memory. For example:
    
    -   4 GB of available memory: Supports backing up to 1 million files (max 8 TB total).
        
    -   16 GB of available memory: Required for backing up folders that contain tens of millions of files or more.
        
-   When you create a backup plan or attach a backup policy for the first time, Cloud Backup automatically creates the [AliyunServiceRoleForHbrEcsBackup service-linked role](/help/en/cloud-backup/service-linked-roles-for-hbr) to obtain permissions to access related resources. A dialog box appears for role authorization. Grant the permissions as prompted.
    
-   The ECS backup client must be used with Alibaba Cloud Assistant. For ECS instances purchased before December 1, 2017, you must manually [install the Cloud Assistant Agent](/help/en/ecs/user-guide/install-the-cloud-assistant-agent#undefined).
    

## Create a backup plan to periodically back up ECS files

1.  Log on to the [Cloud Backup console](https://hbr.console.alibabacloud.com).
    
2.  In the navigation pane on the left, choose **Backup** > **ECS File Backup**.
    
3.  In the top navigation bar, select a region.
    
4.  On the **ECS File Backup** page, click the **ECS Instances** tab. Find the target instance and click **Back Up** in the **Actions** column.
    
5.  In the **Create Backup Plan** panel, configure the parameters as described in the following table and click **OK**.
    
    **Important**
    
    -   In regions that support backup policies, backup plans must be created by attaching a policy. The attached policy will govern the periodic backup of your ECS files.
        
    -   In the navigation pane on the left of the console, click **Policy Center** to view the regions that support backup policies. For more information, see [Create a backup policy](/help/en/cloud-backup/user-guide/manage-backup-policies).
        
    
    **Parameter**
    
    **Description**
    
    **Backup Folder Rule**
    
    Specify the folders to back up. Cloud Backup backs up all files and subdirectories in the specified folders.
    
    Select **All Folders** or **Specified Folders**.
    
    -   If you select **All Folders**, select whether to enable **Exclude System Folders**.
        
        -   If you enable **Exclude System Folders**, the excluded system directories for Windows and Linux are not included in the backup plan.
            
            Click the ![question mark](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2902812961/p280103.png) icon to the right of **Exclude System Folders** to view the details of the excluded system directories.
            
        -   If you do not enable **Exclude System Folders**, all directories are included in the backup plan.
            
    -   If you select **Specified Folders**, you must specify the **Source Paths**. Click **Add Folder** to add multiple backup folders.
        
        The source path rules are as follows:
        
        -   Without a wildcard character (\*), up to eight paths can be entered.
            
        -   With a wildcard character (\*), only one path can be entered. Wildcards such as `/*/*` are supported.
            
        -   Each line must be an absolute path, such as a path that starts with `/`, `\\`, `C:\`, or `D:\`.
            
        -   When you use Volume Shadow Copy Service (VSS), multiple paths, UNC paths, wildcards, and file exclusions are not supported.
            
        -   When you use UNC, VSS, wildcards, and file exclusions are not supported. If the backup source includes a UNC path, Windows ACLs are not backed up.
            
    
    **Exclude System Folders**
    
    Enable the **Exclude System Folders** option to exclude system directories from the backup.
    
    **Backup File Type**
    
    Select **All Types** or **Specified Type**.
    
    -   If you select **All Types**, all file types are backed up.
        
    -   If you select **Specified Type**, you must specify the file types to back up in the **Select File Type** box.
        
    
    **Backup Policy**
    
    Select a backup policy from the drop-down list.
    
    Cloud Backup automatically protects your data source based on a configurable backup policy. This policy offers granular control by allowing you to define settings such as the backup interval, retention period, encryption, geo-redundancy, automatic archiving, and virus scanning.
    
    If the default backup policy does not meet your backup requirements, click **Create Backup Policy** or **Edit Policy** to manage backup policies. For more information about backup policy parameters, see [Policy center](/help/en/cloud-backup/user-guide/manage-backup-policies).
    
    **Enable Bandwidth Throttling**
    
    Bandwidth throttling helps you control backup traffic during peak business hours to avoid affecting your services.
    
    To use bandwidth throttling, enable the **Enable Bandwidth Throttling** option, select a **Time Range**, enter the **Max Bandwidth (MByte/s)** that can be used for backups within the time window, and then click **Add**.
    

## **Successful backup**

-   When the scheduled backup time arrives, Cloud Backup starts and runs the backup job.
    
    **Note**
    
    The backup progress is an estimate and may not be exact. The system calculates it based on the data scanned so far, and the total data size may increase as the scan continues. Always refer to the final job status for confirmation of completion.
    
    On the **Backup Jobs** tab, if the **Status** of a backup job is **Completed**, the backup is successful.
    
    View details about the backup job, such as **Total Scan**, **Completed Backups**, **Written to Vault**, and **Backup Speed**. For more information about these metrics, see the tooltips in the Cloud Backup console.
    
    **Note**
    
    -   For backup jobs completed on or after June 1, 2025, statistics for both data volume and file count are displayed for Total Scanned at Source, Backup Completed, and Data Written to Vault. For backup jobs completed before this date, only data volume statistics are shown for these metrics.
        
    -   The job list displays only the backup jobs from the last six months. To view older jobs, export them from the [Audit Report](/help/en/cloud-backup/user-guide/create-an-audit-report-for-backups) page.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8336089471/p966226.png)
    
-   On the **Backup Plans** tab, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7986391671/p1012053.png) icon next to the target ECS instance to view the backup records and the generated backup points in the **Backup History**. These historical backup points can be used to [restore ECS files](/help/en/cloud-backup/user-guide/restore-files-to-an-ecs-instance).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8336089471/p966322.png)
    

## **Troubleshooting**

If the client or backup job **Status** is abnormal, refer to the following information.

-   **Client Status** is **Not Installed**.
    
    -   The backup client is not installed on the ECS instance. This means the ECS instance is not protected by a backup. Use this feature to back up important data.
        
    -   The backup client is installed automatically by Cloud Assistant when you create a backup plan for your ECS instance. Once the installation is complete, the **Client Status** will update to **Activated** and the version number will be displayed.
        
-   Backup status is **Failed**.
    
    -   Follow the prompts on the interface to modify the configuration and confirm that it is correct.
        
    -   Check the logs to locate the specific error code.
        
        **Note**
        
        The default installation paths for the backup client are for reference only. Use the actual installation path when you perform operations.
        
        -   Windows log path: Local Disk (C) > Program Files > Aliyun Hybrid Backup Service Client > logs
            
        -   Linux log path: /opt/alibabacloud/hbrclient/logs
            
        
-   Backup status is **Partially Completed**.
    
    Download the list of files that failed to be backed up, check each file, and resolve the errors based on the error messages. Then, run the backup job again.
    
    **Note**
    
    When using the VSS feature on Windows ECS instances, file paths in error messages may include a `shadow_ali_ids` segment. This is an internal path used for VSS snapshots and can be safely ignored. For example, a path shown as `E:\shadow_ali_ids\test` refers to the actual file path `E:\test`.
    

## **Browse and download backup files**

-   ### **Browse backup files**
    
    The **Browse** feature lets you browse backed-up files. If a virus scan was performed on the backup point that you are browsing, Cloud Backup marks any files that are infected with a virus.
    
    1.  On the **Backup Plans** tab, find the target client and click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6219293171/p787354.png).
        
    2.  In the **Backup History**, find the backup point for the desired time, click the backup point, and select **Browse**.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6219293171/p768189.png)
    
-   ### Download backup files
    
    Backed-up files cannot be downloaded directly. To download them, you must first restore them to a specific location. For example, during restoration, set **Restore Path Type** to **Specify Path** and set **Destination Path** to `/temp/path`. Create this path before you start the restore job. Otherwise, the job fails. After the restore job is complete, the files from the backup point are downloaded to this path.
    

## **Extend the retention period of a backup point**

To keep historical data from an ECS file backup for an extended period, extend the retention period of the backup point.

**Note**

-   The retention period of a backup point can only be extended. It cannot be shortened.
    
-   The retention period cannot be extended for backup points that are set to be retained permanently.
    

1.  On the **Backup Plans** tab, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7986391671/p1012055.png) icon next to the target ECS instance.
    
2.  In the **Backup History**, click the historical backup point whose retention period you want to extend. Set a specific time or select **Never Expire**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6221794471/p938383.png)
    
3.  Click **Save**.
    

After the setting is complete, view the new expiration time in the **Expires At** field.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6221794471/p938364.png)

## **Virus scan**

To prevent files that contain viruses from being restored to your production environment, the Cloud Backup service provides the **Backup Point Virus Detection** feature. This feature helps you select a clean and safe backup point for future data restoration. Click **Virus Detection** to check files for viruses. For more information, see [Backup point virus scan](/help/en/cloud-backup/user-guide/malicious-file-detection).

## **Reinstall the backup client**

**Warning**

Before you install the client, check the client installation path:

-   If a NAS folder is mounted to the installation path, you must use the `umount` command to unmount the NAS folder to prevent accidental deletion of NAS files.
    
-   If the installation path contains other important folders and files, move them to another folder to prevent accidental deletion of important files.
    

On the **ECS Instances** tab, find the target instance. In the **Actions** column, choose **⋮** > **Reinstall Client** to install the client. After the installation is complete, the client status updates to **Activated**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0134234671/p961483.png)

If the client status is abnormal, refer to the following documents for troubleshooting.

-   [Troubleshoot abnormal file backup client status](/help/en/cloud-backup/support/how-to-troubleshoot-and-handle-the-status-exceptions-of-an-hbr-client)
    
-   [How to check the running status of a Cloud Backup client](/help/en/cloud-backup/how-to-check-the-status-of-an-hbr-client)
    
-   [How to view the default installation path and logs of a Cloud Backup client](/help/en/cloud-backup/support/where-do-i-view-the-default-installation-path-and-logs-of-an-hbr-client)
    

## **Uninstall the client**

**Warning**

Before you uninstall the client, check the client installation path:

-   If a NAS folder is mounted to the installation path, you must use the `umount` command to unmount the NAS folder to prevent accidental deletion of NAS files.
    
-   If the installation path contains other important folders and files, move them to another folder to prevent accidental deletion of important files.
    

On the **ECS Instances** tab, find the target instance. In the **Actions** column, choose **⋮** > **Uninstall Client** to uninstall the backup client. After the uninstallation is complete, the client status updates to **Not Installed**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0134234671/p961485.png)

## **Delete a backup**

Delete the backup data that is generated by a backup client.

**Warning**

Deleting a backup deletes the backup data generated by the backup client and causes any running backup or restore jobs to fail. Before you delete a backup, make sure that you no longer need the backup data and that no backup or restore jobs are running.

1.  On the **Backup Plans** tab, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7986391671/p1012055.png) icon next to the target ECS instance.
    
2.  In the **Backup History**, find the backup point you want to delete, click the backup point, select **Delete**, and confirm the deletion.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1127957271/p841064.png)

## **Set alerts for backup jobs**

If the backup client or a backup or restore job has an abnormal status, configure alert notifications to be promptly notified of exceptions. On the **ECS Instances** tab, find the target instance. In the **Actions** column, choose ****⋮**** > **Alert Settings**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0134234671/p961497.png)

**Alert notification method**

**Description**

**Disabled**

No alert notifications are sent for this client.

**Same as Backup Vault**

This client uses the same alert method as the backup vault.

**Notify Alibaba Cloud Account**

Backup alert notifications for this client are sent to the Alibaba Cloud account by email.

**Custom**

Select one or more contacts or contact groups. After the configuration is complete, backup alerts for this client are sent to the selected contacts or contact groups. For more information, see [Manage alert contacts](/help/en/cloud-backup/user-guide/manage-alert-contacts#task-2121051).

## **Configure backup client parameters**

To optimize client performance, find the target instance on the **ECS Instances** tab. In the **Actions** column, choose ******⋮****** > **Client Settings**. Use the default settings.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0134234671/p961501.png)

**Client Setting**

**Description**

**Use HTTPS**

Select whether to use HTTPS for data transmission. While HTTPS enhances security through encryption, it can impact transfer performance. Changes to this setting take effect on the next backup or restore job start.

**Note**

This setting only affects data security during network transmission. Regardless of whether HTTPS is enabled, backup data is encrypted when stored in the backup vault.

**Data Network**

Select whether to transmit data over a VPC or the Internet. If your client is deployed in an Alibaba Cloud VPC or is connected to an Alibaba Cloud VPC through a leased line, select VPC as the transmission network.

**Maximum number of worker threads**

Set the maximum number of worker threads for the backup client. A larger number of threads consumes more host resources and has a greater impact on host performance. Set this parameter after evaluation.

**Maximum CPU Cores**

Set the maximum number of CPU cores that the backup client can use. A larger number of CPU cores consumes more host resources and has a greater impact on host performance. Set this parameter after evaluation.

## Restore ECS files

For more information, see [Restore ECS files](/help/en/cloud-backup/user-guide/restore-files-to-an-ecs-instance#task-1963037).

## Backup vault replication

To mitigate risks to business continuity from regional disasters or account management issues, Cloud Backup supports [cross-region](/help/en/cloud-backup/user-guide/cross-region-backup) and [cross-account replication](/help/en/cloud-backup/user-guide/vault-cross-account-replication) for general backup vaults. Once configured, data from the source vault is automatically synchronized to a replication target vault. This ensures data consistency across both locations and enables on-demand, cross-region data recovery using the target vault.

For general backup vaults storing ECS files, backup vault replication provides an effective solution for cross-region or cross-account disaster recovery. In addition, ECS file backup offers a range of enterprise-grade features, including [Cross-account backup](/help/en/cloud-backup/user-guide/back-up-data-sources-across-alibaba-cloud-accounts), [Automatic archiving](/help/en/cloud-backup/user-guide/automatic-archiving), [KMS-based encryption](/help/en/cloud-backup/user-guide/use-kms-encryption), [Immutable backup](/help/en/cloud-backup/user-guide/immutable-backup), [Backup point virus detection](/help/en/cloud-backup/user-guide/malicious-file-detection), and [Tag-based automatic resource association and backup](/help/en/cloud-backup/user-guide/tag-based-automatic-resource-association-and-backup).

## **Configure retry parameters for failed ECS file backups**

If a file backup job fails due to factors such as an unstable network, configure retry parameters.

1.  Log on to the server whose files you want to back up.
    
2.  Switch to the [default installation directory of the Cloud Backup client](/help/en/cloud-backup/support/where-do-i-view-the-default-installation-path-and-logs-of-an-hbr-client).
    
3.  In the `client` folder, create a file named `hbr.config`.
    
    **Note**
    
    The `hbr.config` file is in the same directory as the `hbrclient` and `ids` executable programs.
    
4.  Add the following parameters to the `hbr.config` file.
    
    **Parameter**
    
    **Description**
    
    retry\_times
    
    For clients of version 2.16.0 and later, this is the number of data backup retries. The default value is 30.
    
    retry\_interval
    
    For clients of version 2.16.0 and later, this is the data backup retry interval. The default value is 1000 milliseconds.
    
    skip\_error\_files
    
    Specifies whether to skip files that fail to be backed up.
    
    -   false (default): Does not skip files that fail to be backed up.
        
    -   true: Skips files that fail to be backed up.
        
    
    The following is a sample configuration of the hbr.config file:
    
    ```
    retry_times=30
    retry_interval=1000
    skip_error_files=false
    ```
    

## **References**

-   To back up ECS instances in batches, either locally or to a different region, or to quickly set up and replicate an ECS development and testing environment, use [ECS instance backup](/help/en/cloud-backup/user-guide/ecs-server-backup-overview).
    
-   Disk backup creates crash-consistent backups for all types of disks of an ECS instance, including system disks and data disks. This feature lets you back up or restore an entire disk. For more information, see [Create a disk backup](/help/en/cloud-backup/create-disk-backups).
    
-   Cloud Backup provides resource plans for various backup scenarios. These plans offer significant discounts to help you save on costs. For more information, see [Purchase resource plans](/help/en/cloud-backup/product-overview/purchase-resource-plans).
    
-   To back up MySQL, Oracle, or SQL Server databases in an ECS instance, see [Back up a MySQL database](/help/en/cloud-backup/user-guide/back-up-a-mysql-database), [Back up an Oracle database](/help/en/cloud-backup/user-guide/back-up-an-oracle-database), and [Back up an SQL Server database](/help/en/cloud-backup/user-guide/back-up-an-sql-server-database). Before you back up a database, you must register the database in the Cloud Backup console.
    
-   To back up files from a local server to the cloud, see [Back up local files](/help/en/cloud-backup/user-guide/back-up-files-on-premises-file-backup).
