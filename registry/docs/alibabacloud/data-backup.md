The ApsaraDB for OceanBase console allows you to back up the data of OceanBase cluster instances with high availability and high performance.

## Backup modes

ApsaraDB for OceanBase supports two backup modes:

-   Scheduled backup
    
    The system automatically backs up data on a regular basis based on the preset backup scheduling strategy. You can specify to start a full backup at a fixed point in time by week or month. You can also specify to back up logs together with data and periodically clear expired backup data. After you create a backup strategy, the system automatically schedules a backup on a regular basis.
    
-   Manual backup
    
    You can manually initiate a physical backup or logical backup. You can initiate a physical backup for a cluster instance only when it is not undergoing a data backup.
    

## View data backup information

1.  Log on to the [ApsaraDB for OceanBase console](https://oceanbase.console.alibabacloud.com).
    
2.  In the left-side navigation pane, click **Instances**.
    
3.  In the instance list, click the name of the target cluster instance to go to the **Cluster Instance Workspace** page.
    
4.  In the left-side navigation pane, choose **Backup and Restore** > **Data Backup** to view the data backup list.
    
    -   The **Data Backup** tab displays the information about all executed backup tasks in the following fields: **Backup Set ID**, **Backup Object**, **Backup Method**, **Backup Type**, **Restorable Time Point**, **Started At**, **Ended At**, **Backup Duration**, **File Size**, **Execution Method**, **Validity**, **Status**, and **Operation**.
        
    -   You can sort the backup records by start time or file size as needed.![3](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4822435861/p476734.png)
        
    -   You can hover over a table object to view the tenant, database, restorable time point, and table name of the logical backup.
        
    -   You can restore, delete, or download a backup set in the **Operation** column.
        
        **Note**
        
        -   To download a backup set, you must contact OceanBase Technical Support to add your account to the allowlist.
            
        -   At present, you cannot download the backup sets of a serverless instance.
            
        -   If any action is not supported, the corresponding button is grayed out. For example, you cannot delete a physical backup set, or restore, delete, and download the backup set of an ongoing backup.
            
        

## **Restore a backup set**

Click the More icon (**...**) in the **Operation** column and then select **Restore** to go to the backup and restore page. For more information, see [Initiate a restore](/help/en/apsaradb-for-oceanbase/latest/initiate-a-recovery-task).

## **Delete a backup set**

When a logical backup set is no longer required, you can delete it to lower your storage costs.

**Note**

At present, you cannot delete a physical backup set.

1.  Click the More icon (**...**) in the **Operation** column and then select **Delete**.
    
2.  Click **OK** to delete the backup set.
    

## Download a backup set

In addition to data backup, OceanBase Database also packages and compresses backup files, and converts the files so that users can download them.

**Note**

The time required for compression and conversion depends on the size of backup files. A larger size requires longer time. For example, backup files of 150 GB in size require about 4 hours for compression and conversion. The time value provided here is for your reference only.

To download backup files, make sure that:

-   Your account has been added to the allowlist for the backup set download feature. You can contact OceanBase Technical Support to add your account to the allowlist.
    
-   The backup is completed, and the backup set contains full data.
    

Perform the following steps:

1.  Click **Download** in the **Operation** column.
    
    ![数据备份3](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8235426661/p490216.png)
    
2.  In the window that appears, confirm the full backup set download information and then click **Generate Download Link** to enter the downloadable file generation phase.
    
3.  Click **View Download URL** in the **Operation** column to view the information about the full backup set to be downloaded as well as the intranet and Internet download URLs. You can copy the intranet download URL to transfer the files over the internal network, or copy the Internet download URL to download the files through the Internet. The download URLs are valid for one hour. If the download URLs expire, click Refresh to generate new URLs.
    
    ![数据备份4](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7732526661/p490218.png)
    
    **Note**
    
    -   Traffic fees are incurred if you download the backup set by using the Internet download URL. A limited-time free trial is currently available.
        
    -   You can download a logical backup set only by using the intranet download URL.
        
    -   Keep the download URLs confidential to ensure data security.
        
    -   At present, you cannot download log backup sets.
        
    
4.  Download the backup set by using a tool that supports resumable transmission or a command. Here are some examples:
    
    -   Download the backup set from the intranet by using the wget command:
        
        ```
        wget http://****.oss-cn-hangzhou-internal.aliyuncs.com/****
        ```
        
    -   Download the backup set from the Internet by using the curl command:
        
        ```
        curl -O http://****.oss-cn-hangzhou.aliyuncs.com/****
        ```
