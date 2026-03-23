After you use Cloud Backup to back up files from an Elastic Compute Service (ECS) instance to a backup vault, you can restore the files based on historical backup points if the files are lost or exceptions occur. You can **restore the backup files to the source ECS instance, a new ECS instance**, or **an on-premises server**.

## Prerequisites

-   ECS files are backed up. Historical recovery points are available. For more information, see [Back up files from an ECS instance](/help/en/cloud-backup/user-guide/back-up-files-from-an-ecs-instance#task-1963036).
    
-   The destination for data restoration is prepared.
    
    -   The destination can be the source ECS instance, a new ECS instance, or an on-premises server.
        
    -   If you restore files to a new ECS instance, a Cloud Backup client must be installed on the ECS instance and the **Client Status** must be **Activated** on the **ECS File Backup** page in the console. Cloud Backup can automatically install a backup client on ECS instances.
        
    -   If you restore files to an on-premises server, a Cloud Backup client must be installed on the on-premises server and the **Client Status** must be **Activated** on the **On-Premises File Backup** page in the console. You can install a Cloud Backup client for Linux or Windows on an on-premises server. For more information, see [Download and activate a Cloud Backup client for Windows](/help/en/cloud-backup/user-guide/before-you-begin-on-premises-file-backup#section-fre-74o-hau) and [Download and activate a Cloud Backup client for Linux](/help/en/cloud-backup/user-guide/before-you-begin-on-premises-file-backup#section-sik-jw8-4yq).
        

## **Usage notes**

When you restore ECS files, you cannot restore socket files or hard links.

## **Billing**

You are not charged for the restore feature.

**Important**

-   When you restore files to a new ECS instance, you must install a Cloud Backup client on the new ECS instance. In this case, a client usage fee is incurred.
    
-   When you restore files to an on-premises server, you must install a Cloud Backup client on the on-premises server. In this case, a client usage fee and an outbound traffic fee are incurred.
    

For more information, see [Billing methods and billable items](/help/en/cloud-backup/product-overview/billing-methods-and-billable-items#concept-89062-zh).

## Create a restore job

1.  Log on to the [Cloud Backup console](https://hbr.console.alibabacloud.com).
    
2.  In the left-side navigation pane, choose **Backup** > **ECS File Backup**.
    
3.  In the top navigation bar, select a region.
    
4.  On the **Backup Plans** tab, click the ![jiahao](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8359909071/p307005.png) icon to the left of the ECS instance that is backed up.
    
5.  Click an available historical backup point and then click **Restore**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5691301271/p813934.png)
    
    **Note**
    
    We recommend that you select an appropriate historical backup point. The backup data varies at different backup points.
    
6.  In the **Create Restore Job** panel, perform the following steps.
    
    1.  In the **Select Restore Items** step, configure the Restore Items parameter and click **Next**.
        
        The following table describes the valid values of the parameter.
        
        **Parameter**
        
        **Description**
        
        **Restore Items**
        
        The files or folders that you want to restore.
        
        -   **Include All Files**: All files on the client are restored.
            
        -   **Include Files**: Select the files or folders that you want to restore.
            
            You can also click **Enter Paths** to specify the files that you want to restore. In the text box, enter the paths to the files or folders that you want to restore. Cloud Backup restores files on the client based on the specified restore policy.
            
            In the text box, enter one path in each line and make sure that the first folder in each path is the lowest-level folder in the directory that is backed up. For example, if the files in folder/test/data are backed up, and you want to restore the file.txt and abc.png files in the data folder, specify the following paths:
            
            ```
            /data/file.txt
            /data/abc.png
            ```
            
        -   **Exclude Files**: Select the files or folders that you do not want to restore. Cloud Backup restores all files and folders that are not selected.
            
            You can also click **Enter Paths** to specify the files that you want to restore. In the text box, enter the paths to the files or folders that you want to restore. Cloud Backup restores files on the client based on the specified restore policy.
            
            In the text box, enter one path in each line and make sure that the first folder in each path is the lowest-level folder in the directory that is backed up. For example, if the files in folder/test/data are backed up, and you want to restore the file.txt and abc.png files in the data folder, specify the following paths:
            
            ```
            /data/file.txt
            /data/abc.png
            ```
            
        
    2.  In the **Restore Destination** step, specify a destination for data restoration and click **Next**.
        
        **Parameter**
        
        **Description**
        
        **Destination Type**
        
        Select the type of the client.
        
        -   **Backup Clients for ECS (New)**: Select this option when you restore files to the source ECS instance or a new ECS instance.
            
        -   **On-premises Client (New)**: Select this option when you restore files to an on-premises server.
            
        
        **Backup Client Name/ID**
        
        Select the name of the client.
        
    3.  In the **Destination Path** step, specify the recovery path and click **Start to Restore**.
        
        **Parameter**
        
        **Description**
        
        **Restore Path Type**
        
        -   **Specify Path**: restores files to the path that you specify.
            
        -   **Origin Path**: restores files to the path from which the files are backed up.
            
        
        **Destination Path**
        
        This parameter is required only if you set the **Restore Path Type** parameter to **Specify Path**. This parameter specifies the path to which the files are restored.
        
        **File Conflict Policy**
        
        -   **Skip This File**
            
        -   **Overwrite The File** (default)
            
        -   **Keep Latest File**
            
        
        **Virus Detection During Restoration**
        
        If you turn on this switch, Cloud Backup performs virus detection on all files to be restored during restoration. The console provides the detailed information about this feature. For more information, see [Backup point virus detection](/help/en/cloud-backup/user-guide/malicious-file-detection).
        
        **When Recovery Items Contain Detected Viruses**
        
        -   **Do not restore the virus-infected files** (You can find secure versions on the Virus Detection tab.)
            
        -   **I am aware of the risks and still want to restore all the selected items**
            
        
    
    After the restore job is created, you can view the progress of the restore job in the **Status** column on the **Restore Jobs** tab.![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3066155271/p728366.png)
    
    After the restoration progress changes to Completed (100%), you can log on to the destination ECS instance or on-premises server to view the restored ECS files.
    

## **Troubleshooting**

If the **Status** of the restore job is abnormal, you can resolve the issue based on the following instructions.

-   **Client Status**: **Not Installed**
    
    -   If no backup client is installed on an ECS instance, the ECS instance is not backed up. We recommend that you use the ECS file backup feature to back up important data.
        
    -   To back up files from ECS instances, you do not need to manually install a Cloud Backup client. When you create a backup plan for an ECS instance, Cloud Assistant automatically installs a Cloud Backup client on the ECS instance. After the client is installed, the **Client Status** is **Activated** and the version number of the client is displayed.
        
-   Status of the restore job: **Failed**
    
    -   Modify and confirm the configurations as prompted.
        
    -   Check the status of the Cloud Backup client. For more information, see [How do I troubleshoot and handle the status exceptions on a Cloud Backup client?](/help/en/cloud-backup/support/how-to-troubleshoot-and-handle-the-status-exceptions-of-an-hbr-client)
        
    -   View the client logs and locate the error code.
        
        **Note**
        
        The Cloud Backup client is installed in one of the following paths by default. The following paths are for reference only. The actual installation path may be different.
        
        -   On Windows, you can view the logs in the C:\\Program Files\\Aliyun Hybrid Backup Service Client\\logs path.
            
        -   On Linux, you can view the logs in the /opt/alibabacloud/hbrclient/logs path.
            
        
-   Status of the restore job: **Partially Completed**
    
    Download the list of files that have not been restored, confirm them one by one, resolve the issue based on the error message, and then run the restore job again.
    

## **References**

-   [Back up files from an ECS instance](/help/en/cloud-backup/user-guide/back-up-files-from-an-ecs-instance)
    
-   If you need to back up multiple ECS instances at a time for local redundancy or geo-redundancy, or if you need to quickly build and replicate an ECS test environment, we recommend that you use the ECS instance backup feature. For more information, see [Overview of the ECS instance backup feature](/help/en/cloud-backup/user-guide/ecs-server-backup-overview).
    
-   Cloud Backup provides the disk backup feature. You can create crash-consistent snapshots for all disks, including system disks and data disks. You can use these snapshots to back up or restore an entire disk. For more information, see [Back up disks](/help/en/cloud-backup/create-disk-backups).
    
-   [Back up files from an on-premises server](/help/en/cloud-backup/user-guide/on-premises-file-backup-overview)
    
-   [What is Cloud Backup?](/help/en/cloud-backup/product-overview/what-is-hbr)
