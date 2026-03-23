To prevent data loss or damage, we recommend that you use Cloud Backup to back up all directories and files in your Extreme NAS file system. Cloud Backup allows you to configure flexible backup policies to back up data to the cloud. You can view and restore data at any time. This topic describes how to back up the data of an Extreme NAS file system by using the on-premises NAS backup feature.

## Prerequisites

-   Cloud Backup is activated. You are not charged for activating Cloud Backup. If you use the NAS backup feature of Cloud Backup, you are charged for the storage usage of backup vaults. For more information, see [Billing of the NAS backup feature](/help/en/cloud-backup/user-guide/nas-backup-overview#section-gbp-k0w-479).
    
-   An Extreme NAS file system is created. For more information, see [Create an Extreme NAS file system in the NAS console (only NFS)](/help/en/nas/user-guide/create-a-file-system#section-idk-1yv-st6).
    
-   An Elastic Compute Service (ECS) instance is created. For more information, see [Create and manage an ECS instance by using the ECS console (express version)](/help/en/ecs/getting-started/create-and-manage-an-ecs-instance-by-using-the-ecs-console#task-2480939).
    
    The ECS instance and the mount target of the Extreme NAS file system must reside in the same virtual private cloud (VPC).
    

## Background information

-   You cannot back up Extreme NAS file systems by using the File Storage NAS backup feature of Cloud Backup. You can back up Extreme NAS file systems by using the on-premises NAS backup feature.
    
-   Backup jobs consume resources such as CPU and memory and affect the performance of your ECS instance. We recommend that you create a dedicated ECS instance to run backup tasks. You are charged for the newly created ECS instance. The fees are included into your ECS bills. For more information, see [Instance types](/help/en/ecs/instance-types#concept-1937440).
    

## Step 1: Install a Cloud Backup client

Before you back up data, you must install a Cloud Backup client on the ECS instance. For more information, see [Download and activate an Cloud Backup client for Linux](/help/en/cloud-backup/user-guide/before-you-begin-on-premises-nas-backup#section-73j-f0l-dct).

## Step 2: (Optional) Configure the Cloud Backup client

You can configure the Cloud Backup client to accelerate the execution of backup tasks. Perform the following steps:

1.  Log on to the ECS instance.
    
2.  Change the maximum number of concurrent tasks on the Cloud Backup client to 2. We recommend that you set the value to 8 or smaller. The larger the value, the more resources are consumed. We recommend that you set a reasonable value.
    
    A backup job may be divided into multiple tasks. You can use the configclustertaskfetchernum parameter to specify the maximum number of tasks that are concurrently executed on the Cloud Backup client.
    
    The default value of the configclustertaskfetchernum parameter is 1.
    
    Set the value of the configclustertaskfetchernum parameter in the hbrclient.yaml file to 2. We recommend that you do not set the parameter to a value greater than 8.
    
    ```
    configclustertaskfetchernum: 2
    ```
    
    **Note**
    
    On Linux, the hbrclient.yaml file is located at the following path: /opt/alibabacloud/hbrclient/conf.
    
3.  Restart the Cloud Backup service. Note that running tasks are affected if you restart the Cloud Backup service.
    
    Run the `systemctl restart hbrclient` command to restart the Cloud Backup service.
    

## Step 3: Create a backup plan to periodically back up the Extreme NAS file system

**Note**

After you create a backup plan, the first backup job performs a full backup and subsequent backup jobs perform incremental backups.

1.  Log on to the [Cloud Backup console](https://hbr.console.alibabacloud.com).
    
2.  In the left-side navigation pane, choose **Backup** > ****NAS Backup****.
    
3.  On the **NAS Backup** page, click **Local NAS**.
    
4.  In the top navigation bar, select a region.
    
5.  On the **Local NAS** tab, click **NAS Backup Wizard**.
    
6.  In the **Create Backup Plan** panel, perform the following steps:
    
    1.  Configure the backup source. Configure the key parameters as described in the following table and use the default settings of other parameters. Then, click **Next**.
        
        **Parameter**
        
        **Description**
        
        **Backup NAS Instance**
        
        Select **Add NAS Instance**.
        
        **NAS Type**
        
        Select **Others**.
        
        **NAS Instance Name**
        
        The name of the NAS file system that you want to back up.
        
        **NAS Network Address**
        
        The IP address or domain name of the NAS file system. You can obtain the domain name from the mount target of the Extreme NAS file system, for example, `00005*****y.cn-hangzhou.extreme.nas.aliyuncs.com`.
        
        **NAS Share Path**
        
        The shared directory of the NAS file system, for example, /share. For more information about how to query the NAS shared directory, see [How do I query the shared directories of a NAS file system?](/help/en/cloud-backup/support/how-to-query-the-shared-directories-of-a-nas-file-system#task-2253016)
        
        **Protocol Type**
        
        Select **NFS**.
        
        **Advanced Settings**
        
        Click **Set Mount Parameters**. Select vers from the drop-down list and set the value to 3 to use the NFSv3 protocol to mount the file system.
        
    2.  Configure a client group and click **Next**.
        
        1.  Set **Backup Client Group** to **Create Backup Client Group**. Specify **Client Group Name** and select the ECS instance on which you have installed the Cloud Backup client in [Step 1: Install a Cloud Backup client](#section-kx5-rn2-157).
            
        2.  Change the data network of the client group to VPC.
            
            1.  Click **Settings** in the **Actions** section of the Cloud Backup client.
                
            2.  In the **Client Settings** dialog box, set **Data Network** to VPC and click **OK**.
                
        
    3.  Configure the backup plan and click **Next**.
        
        Configure the basic parameters described in the following table. Use the default settings of other parameters.
        
        **Parameter**
        
        **Description**
        
        **Source Paths**
        
        The path to the files that you want to back up. You can specify only one path. The path cannot contain wildcards (\*).
        
        **Backup Rule**
        
        You can specify the following three backup rules:
        
        -   **Include All Files**: All files in the source path are backed up.
            
        -   **Include Files** or **Exclude Files**: You must enter the names of the files that you want to include or exclude in the **Enter Paths** field. Cloud Backup backs up files based on the specified rule.
            
            The file names that you enter in the **Enter Paths** field are subpaths relative to the source path. Cloud Backup matches the file names based on the following rules:
            
            -   If a file name that is specified in the **Enter Paths** field starts with a forward slash (/), Cloud Backup combines the relative path and the source path into a complete path. The backup rule is then applied to all the files and directories stored within the path.
                
                Example 1: If the source path is /ifs/dataset and you enter /subdir/data in the Enter Paths field, the backup rule is applied to all files and directories in /ifs/dataset/subdir/data.
                
                Example 2: If the source path is /ifs/dataset and you enter /abc\* in the Enter Paths field, the backup rule is applied to all files and directories whose names are prefixed with abc in /ifs/dataset/abc.
                
            -   If a file name that is specified in the Enter Paths field does not start with a forward slash (/), Cloud Backup uses the name as a condition to match files. The backup rule is applied to all files and directories that match the condition in the source path.
                
                Example 1: If the source path is /ifs/dataset and you enter abc\* in the Enter Paths field, the backup rule is applied to all files and directories whose names are prefixed with abc in /ifs/dataset.
                
                Example 2: If the source path is /ifs/dataset and you enter abc in the Enter Path field, the backup rule is applied to all files and directories whose names are abc in /ifs/dataset.
                
        
        **Backup Policy**
        
        Select a proper backup policy from the drop-down list.
        
        Cloud Backup automatically backs up data sources based on the backup policy that you configure. Backup policies help you flexibly manage data sources. A backup policy includes the following settings: backup vault encryption method, backup interval, retention period, cross-region replication policy, and automatic archiving of backup data.
        
        If the default backup policy does not meet your requirements, you can click **Create Backup Policy** or **Edit Policy** to create or modify a backup policy.
        
        For more information about the parameters in a backup policy, see [Manage backup policies](/help/en/cloud-backup/user-guide/manage-backup-policies).
        
    
    After the backup plan is created, you can view the NAS file system and the backup plan on the **NAS Instance** tab. Cloud Backup continuously backs up data from the Extreme NAS file system based on the backup plan.![极速型nas备份计划](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6969371961/p527317.png)
    
    ## **Backup is successful**
    
    When the backup execution time is reached, Cloud Backup runs the backup job. If the **Status** of the backup job is **Completed**, the backup job is completed on the current day.![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7568109071/p741929.png)
    
    You can view each backup record in the **Backup History** section. Later, you can restore files based on these historical backups. For more information, see [Create a restore job for a single NAS file system in the same region](/help/en/cloud-backup/user-guide/back-up-a-nas-file-system#section-yl9-iwl-g8v).
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8568109071/p741932.png)
    

## What to do next: Create a restore job

You can restore files that are backed up on a Cloud Backup client to an Extreme NAS file system. Perform the following steps:

1.  Log on to the [Cloud Backup console](https://hbr.console.alibabacloud.com).
    
2.  In the left-side navigation pane, choose **Backup** > **NAS Backup**.
    
3.  In the top navigation bar, select a region.
    
4.  On the **NAS Backup** page, click **Local NAS**.
    
5.  On the **NAS Instance** tab, click the ![jiahao](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5550891271/p324864.png) icon next to a NAS file system that is backed up.
    
    ![NAS实例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5550891271/p259088.png)
    
6.  Click an available historical backup point, and then click **Restore**.
    
    You can also click **Browse** to view all the files on the client that you can restore.
    
7.  In the **Create Restore Job** panel, perform the following steps and click **OK**.
    
    1.  Select the files that you want to restore and click **Next**.
        
        The following restore policies are supported:
        
        -   **Include All Files**: All files on the client are restored.
            
        -   **Include Files** or **Exclude Files**: You can select or enter the paths of directories or files that you want to include in or exclude from the restore job. Cloud Backup restores files on the client based on the specified restore policy.
            
            -   Select the files that you want to include in or exclude from the restore job
                
                You can select files by using one of the following two methods:
                
                -   Browse all the files that are backed up from the NAS file system and select the files that you want to include in or exclude from the restore job.
                    
                -   Enter the file names in the **Search** box and turn on **Advanced**.
                    
                    To search for files, you can specify one or more of the following conditions: **Search Type**, **Min Size**, **Max Size**, and **Modify Time**. For example, if you want to restore a file whose name is test.txt, enter test.txt in the Search box and click Search. After you click Search, the test.txt file is displayed.
                    
            -   Specify the files that you want to include in or exclude from the restore job
                
                Enter one path in each line and make sure that each path starts with the lowest-level directory in the source path that is backed up.
                
                -   Restore specific files
                    
                    For example, if you want to restore the file.txt and abc.png files in the folder/test/data directory, enter the following paths:
                    
                    ```
                    /data/file.txt
                    /data/abc.png
                    ```
                    
                -   Restore specific directories
                    
                    For example, if you want to restore all the files and subdirectories in the folder/test/data directory, enter the following path:
                    
                    ```
                    /data/
                    ```
                    
                -   Restore files or directories that match a condition containing wildcards
                    
                    For example, if you want to restore the files and subdirectories whose names are prefixed with abc in the folder/test/data directory, enter the following path:
                    
                    ```
                    /data/abc*
                    ```
                    
        
    2.  In the **Restore Destination** step, set the Destination Type parameter to **Local NAS**. Select an existing NAS file system to which you want to restore files, and then click **Next**.
        
        You can also add a new NAS file system to restore the files.
        
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
            
        
    
    After a restore job is created, you can view the job progress in the **Status** column on the **Restore Jobs** tab.
