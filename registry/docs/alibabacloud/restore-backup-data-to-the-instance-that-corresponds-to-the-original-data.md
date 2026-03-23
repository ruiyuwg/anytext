The data backup and restoration feature can minimize the loss caused by accidental operations performed on databases. This topic describes how to restore an instance using its backup data.

## Prerequisites

-   A Lindorm instance is created and the backup and restoration feature is enabled for the instance. For more information, see [Enable backup and restoration](/help/en/lindorm/user-guide/backup-and-restoration#concept-2558920).
    
-   Data in the Lindorm instance has been backed up. For more information, see [Automatic backup of data in Lindorm wide tables](/help/en/lindorm/user-guide/automatic-backup-of-data-of-lindorm-wide-tables#task-2141711).
    

## **Usage notes**

-   This feature is **not supported** in the new version of Lindorm or in Lindorm standalone instances.
    
-   Data restoration involves writing backup data to a table. Therefore, if you are restoring data to the same table, you should first delete its existing data before you execute the restore job.
    

## Procedure

1.  Log on to the [Lindorm console](https://lindorm.console.alibabacloud.com/cn-hangzhou/clusterhou/cluster).
    
2.  In the upper-left corner of the page, select the region where the instance is deployed.
    
3.  On the **Instances** page, click the ID of the target instance or click **View Instance Details** in the **Actions** column for the instance.
    
4.  In the navigation pane on the left, click **Wide Table Engine**.
    
5.  Click the **Backup & Recovery** tab.
    
6.  In the **Full Backup** section, click **Initiate Data Recovery**.
    
7.  In the **Recovery** dialog box, configure the data restoration parameters based on your business needs.
    
    **Configuration**
    
    **Description**
    
    **Cluster for Recovery**
    
    Select the name of the target instance for data restoration.
    
    **Important**
    
    The backup data generated for a Lindorm instance cannot be restored to the instance after the instance is upgraded to a later version.
    
    **Point in Time**
    
    Specify a point in time to which you want to restore backup data.
    
    **Full Database Recovery**
    
    Set Full Database Restore to **Yes**.
    
    **Tables for Recovery**
    
    If you set Full Database Restore to **No**, specify the tables to restore. Enter one namespace and table per line. Asterisks (\*) are not supported.
    
    -   To restore a table, use the `namespace:table` format. Example: `default:testTable`.
        
    -   To restore data to a different table, use the `namespace:table/namespace:table2` format. Example: `default:testTable/default:testTable2`.
        
    
8.  Click **OK**. On the **Recovery List** tab, you can click **Details** in the **Actions** column to view the data recovery progress.
    

## FAQ

-   What is the most recent point in time to which I can restore data?
    
    If no pending tasks exist, the most recent point in time varies based on the cycle in which the system backs up write-ahead logs (WAL) to Object Storage Service (OSS). By default, the system backs up WAL data at an interval of 30 seconds or performs a backup operation for each 30 MB of WAL data. If a failure occurs, you may fail to restore the data that is written to a Lindorm instance within the 30-second period before the present time.
    
-   How long does recovery take?
    
    It depends on the data volume and bandwidth limits.
    
    -   Full data restoration: Backup data can be read from OSS at a speed up to 1 GB/s. Each Lindorm Tunnel Service (LTS) node can write backup data to a Lindorm instance at a speed of 100 MB/s.
        
    -   The write speed for incremental data restoration is 30 to 40 MB/s per node to the destination Lindorm cluster and 100 MB/s per node to LTS.
        
    
-   Can I restore backup data to a single table?
    
    Yes, you can restore backup data to a single table. If a table with the same name already exists, you can restore the backup data to another table.
