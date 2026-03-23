This topic describes how to download the unencrypted log backup files of an ApsaraDB RDS for MariaDB instance. You can use these log backup files to manage and restore the data of the RDS instance.

## Limits

A Resource Access Management (RAM) user that has only the read permissions on your RDS instance is not authorized to download backup files from the RDS instance. You can grant the required permissions to the RAM user by using the RAM console.

**Data backup file**

**Log backup file**

You cannot download the data backup files of your RDS instance. However, you can use the restoration feature to restore the data of your RDS instance to the same RDS instance or to a new RDS instance. On the **Base Backups** tab, click the **Data Backup** tab and select the backup set from which you want to restore the data of the RDS instance.

You can download the log backup files of your RDS instance.

## Procedure

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Backup and Restoration**.
    
3.  On the **Base Backups** tab, click the **Log Backup** tab.
    
4.  Click **Download** in the **Actions** column of the required log backup file.
    
    **Note**
    
    If the log backup file is used to restore the data of your RDS instance to an on-premises database, take note of the following items:
    
    -   The instance ID of the log backup file must be the same as the instance ID of the backup set that you select.
        
    -   The start time of the log backup file must be later than the end time of the backup set that you select and earlier than the point in time to which you want to restore the data of your RDS instance.
        
    
5.  In the dialog box that appears, click **Download** or copy the URL that you can use to download the backup file.
    
    -   **Internal URL**: If your virtual private cloud (VPC)-type Elastic Compute Service (ECS) instance can communicate with the RDS instance over an internal network, you can log on to your ECS instance and use the internal URL to download the log backup file. This method is faster and more secure.
        
    -   **Public URL**: If the RDS instance cannot be connected over an internal network, you can use the public URL to download the backup file.
        
    
    **Note**
    
    If you use a Linux operating system, you can run the following command to download the file:
    
    ```
    wget -c '<Download URL of the log backup file>' -O <File name>
    ```
    
    -   The -c option enables the resumable download feature.
        
    -   The -O option saves the downloaded file by using the specified name. We recommend that you use the file name contained in the download URL.
        
    -   If the URL contains more than one parameter, we recommend that you enclose the URL in a pair of single quotation marks (').
        
    
    ![数据备份](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2716559951/p68524.png)
