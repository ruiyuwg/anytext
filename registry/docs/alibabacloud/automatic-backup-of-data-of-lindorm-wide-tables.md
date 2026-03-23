You can use the backup and restoration feature to perform full or incremental backups of Lindorm wide table data. Data is backed up to Alibaba Cloud Object Storage Service (OSS) and does not consume storage space in your Lindorm instance. After you enable this feature, the system automatically backs up wide table data based on the default full backup period. You can modify the full backup period and scope in the console. The incremental backup feature requires no setup. The system automatically backs up data that has changed since the last backup job.

## Prerequisites

The backup and restoration feature is enabled. For more information, see [Enable backup and restoration](/help/en/lindorm/user-guide/backup-and-restoration#concept-2558920).

## Billing

You are charged for backup storage usage on a pay-as-you-go basis. The unit prices are as follows:

-   Regions in China: USD 0.01857/GB/month
    
-   Asia-Pacific, Europe, and Americas: USD 0.02105/GB/month
    

## Full backup

1.  Log on to the [Lindorm console](https://lindorm.console.alibabacloud.com/cn-hangzhou/clusterhou/cluster).
    
2.  In the upper-left corner of the page, select the region where the instance is deployed.
    
3.  On the **Instances** page, click the ID of the target instance or click **View Instance Details** in the **Actions** column for the instance.
    
4.  In the navigation pane on the left, click **Wide Table Engine**.
    
5.  Click the **Backup & Recovery** tab under **Wide Table Engine**.
    
6.  In the **Full Backup** section, click **Create**.
    
7.  In the **Create** dialog box, set the backup parameters as needed.
    
    **Configuration**
    
    **Description**
    
    **Tables for Backup**
    
    Back up data of the entire database or tables in a namespace.
    
    -   Use an asterisk (\*) to back up all database data.
        
    -   The format is `default:test`. This backs up tables in the \`default\` namespace whose names start with \`test\`.
        
    
    **Full Backup Cycle (Days)**
    
    A full backup is triggered every 7 days by default. The valid range is 3 to 10 days. If the period is too short, the backup may not complete within one period. If the period is too long, it affects the data restoration time.
    
    **Perform Next Full Backup At**
    
    The time when the next full backup starts. Set the full backup time to a point during off-peak hours.
    
    **Full Backup Reserved**
    
    The number of full backup records to retain. The valid range is 3 to 12.
    
8.  Click **OK**.
    

## **Incremental backup**

After you enable the backup and restoration feature, the Lindorm instance automatically backs up incremental data to OSS. No additional configuration is required.

You can view the real-time backup status in the **Incremental Backup** section on the **Backup & Recovery** tab.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5207069071/p763369.png)

## **Related operations**

For more information about restoring backup data to the current instance, see [Restore backup data to the current instance](/help/en/lindorm/user-guide/restore-backup-data-to-the-instance-that-corresponds-to-the-original-data).
