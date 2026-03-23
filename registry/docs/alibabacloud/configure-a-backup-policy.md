PolarDB clusters support data backup and redo log backup. Backing up data is a process of creating a backup set (snapshot) of all data on a cluster at a certain point in time. Backing up redo logs is a process of recording the new data after a backup set is created. You can configure policies for data backup and redo log backup. For example, you can specify the frequency of automatic data backups, the retention period of data backup files, the storage location, and the retention period of log backup files.

## Procedure

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
    
2.  In the upper-left corner, select the region in which the cluster is deployed.
    
3.  Find the cluster and click its ID.
    
4.  In the left-side navigation pane, choose **Settings and Management** > **Backup and Restoration**.
5.  On the Backup Policy Settings tab, click **Modify**.**Modify**
    
6.  In the **Modify** dialog box, configure the **Data Backup**, **Log Backup**, and **General** policy parameters and then click **OK**.
    
    -   **Data backup policy**
        
        -   If the storage type is PSL4 or PSL5, data backup is classified into two levels based on the storage location: level-1 backup and level-2 backup. You must set the following parameters.
            
            **Backup type**
            
            **Parameter**
            
            **Description**
            
            Level-1 Backup
            
            Backup Method
            
            You can select **Standard Backup (at specified intervals)** or **High-frequency Backup** based on your business requirements.
            
            -   **Standard Backup (at specified intervals)**: performs automatic backup once on each of the specified days of the week. You can set the backup cycle and start time based on your business requirements.
                
                **Note**
                
                -   To prevent data loss, make sure that standard backup is performed at least twice a week.
                    
                -   Backup files cannot be deleted.
                    
                
                -   **High-frequency Backup**: performs multiple automatic backups within 24 hours. This backup method increases backup frequency to speed up data restoration in PolarDB.
                    
                    You can configure the system to perform a backup once every two, three, or four hours. The first backup is created two hours after you configure the backup policy regardless of the backup frequency you specify.
                    
                    After you enable enhanced backup, all backups are retained for 24 hours. For backup files that are created earlier than the previous 24 hours, the system permanently retains only the first backup that is created after 00:00 every day and deletes the rest.
                    
                    For example, if you specify a backup frequency of **every 4 hours** at 08:00 on March 1, the system automatically creates the first backup within 4 hours from 08:00 to 12:00 on March 1. Then, the system continues to create a backup every 4 hours.
                    
                    If the current time is 16:00 on March 4, the system retains the following backups:
                    
                    -   The backups created within the last 24 hours (from 16:00 on March 3 to 16:00 on March 4).
                        
                    -   The backup created between 00:00 and 4:00 on March 3.
                        
                    -   The backup created between 00:00 and 4:00 on March 2.
                        
                    -   The backup created between 08:00 and 12:00 on March 1.
                        
                    
                    ![1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2104727161/p246255.png)
                    
                    Then, after four hours or at 20:00 on March 4, the system retains the following backups:
                    
                    -   The backups created within the last 24 hours from 20:00 on March 3 to 20:00 on March 4.
                        
                    -   The backup created between 00:00 and 4:00 on March 3.
                        
                    -   The backup created between 00:00 and 4:00 on March 2.
                        
                    -   The backup created between 08:00 and 12:00 on March 1.
                        
                    
                    ![2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2104727161/p246256.png)
                    
            
            Backup Cycle
            
            The days of the week on which automatic data backups are performed.
            
            **Note**
            
            This parameter is required only when Standard Backup is selected.
            
            Backup Start Time Range
            
            The time range within which automatic data backups are performed.
            
            **Note**
            
            This parameter is required only when Standard Backup is selected.
            
            Backup Frequency
            
            The interval at which automatic backups are performed. Valid values: **Last 24 Hours, Every 2 Hours**, **Last 24 Hours, Every 3 Hours**, or **Last 24 Hours, Every 4 Hours**.
            
            **Note**
            
            This parameter is required only when High-frequency Backup is selected.
            
            Backup Retention Period
            
            The retention period of level-1 backups.
            
            **Note**
            
            -   By default, level-1 backup is enabled and level-1 backups are retained for 7 days.
                
                -   You can specify a retention period for level-1 backups in the range of 3 to 14 days.
                    
            
            Level-2 Backup
            
            Level-2 Backup
            
            Specifies whether to enable the level-2 backup feature.
            
            **Note**
            
            By default, the level-2 backup feature is disabled. If you enable the feature, you are charged additional fees. You can delete level-2 backup files to reduce costs. For information about the billing rules for level-2 backups, see [Billing rules for backup storage that exceeds the free quota](/help/en/polardb/polardb-for-oracle/billing-rules-of-backup-storage-that-exceeds-the-free-quota).
            
            Backup Method
            
            Valid values: **Same-region Backup** and **Cross-region Backup**.
            
            **Note**
            
            -   By default, same-region backup is selected.
                
            -   If you select both Same-region Backup and Cross-region Backup, two copies of the backup data are dumped.
                
            
            Backup Cycle
            
            The days on which level-2 backup is performed.
            
            **Note**
            
            You can only select the days specified in the Backup Cycle parameter for level-1 backups.
            
            Same-region Backup and Retention
            
            The retention period of same-region level-2 backups.
            
            **Note**
            
            -   You can specify a retention period for same-region level-2 backups in the range of 30 to 7,300 days.
                
            -   If you want to retain same-region level-2 backups for a long period of time, select **Long-term Retain Backups before Cluster Deletion**. After you select this option, you cannot specify the retention period for same-region level-2 backups.
                
            
            Destination Backup Region
            
            The region in which the backup data is to be stored.
            
            Cross-region Backup and Retention
            
            The retention period of cross-region level-2 backups.
            
            **Note**
            
            -   You can specify a retention period for cross-region level-2 backups in the range of 30 to 7,300 days.
                
            -   If you want to retain cross-region level-2 backups for a long period of time, select **Long-term Retain Backups before Cluster Deletion**. After you select this option, you cannot specify the retention period for cross-region level-2 backups.
                
            
    
    -   **Log backup policy**
        
        When you configure a redo log backup policy, you must specify the retention period of redo logs.
        
        **Parameter**
        
        **Description**
        
        Backup Method
        
        Valid values: **Same-region Backup** and **Cross-region Backup**.
        
        **Note**
        
        -   By default, the log backup feature is enabled and cannot be disabled.
            
        -   Cross-region log backup can be enabled only when cross-region level-2 backup is enabled.
            
        
        Same-region Backup and Retention
        
        The retention period of same-region log backups.
        
        **Note**
        
        -   You can specify a retention period for same-region log backups in the range of 3 to 7,300 days.
            
        -   If you want to retain same-region log backups for a long period of time, select **Long-term Retain Backups before Cluster Deletion**. After you select this option, you cannot specify the retention period of same-region log backups.
            
        
        Destination Backup Region
        
        The value of the parameter is the same as the value of the Destination Backup Region parameter for level-2 backup. You do not need to specify this parameter.
        
        Cross-region Backup and Retention
        
        The retention period of cross-region log backups.
        
        **Note**
        
        -   You can specify a retention period for cross-region log backups in the range of 3 to 7,300 days.
            
        -   If you want to retain cross-region log backups for a long period of time, select **Long-term Retain Backups before Cluster Deletion**. After you select this option, you cannot specify the retention period for cross-region log backups.
            
        
    -   **General retention policy**
        
        You can configure a backup retention policy that applies when you delete a cluster.
        
        **Parameter**
        
        **Description**
        
        **When Cluster Is Deleted**
        
        The backup retention policy that applies when you delete a cluster.
        
        -   **When the cluster is deleted, the cluster data is automatically backed up, and all backup sets of the cluster are retained for a long period of time**: retains all backups when you delete a cluster.
            
        -   **When the cluster is deleted, the cluster data is automatically backed up, and the backup set is retained for a long period of time**: retains the most recent backup when you delete a cluster.
            
        -   **When the cluster is released, all backup sets of the cluster are deleted immediately**: does not retain backups when you delete a cluster.
            
        
        **Note**
        
        -   If you select **When the cluster is deleted, the cluster data is automatically backed up, and all backup sets of the cluster are retained for a long period of time.**, or **When the cluster is deleted, the cluster data is automatically backed up, and the backup set is retained for a long period of time.** policy, the system runs an automatic backup task to retain all data when you delete the PolarDB cluster.
            
        -   After you delete a cluster, level-1 backups automatically become level-2 backups. You can go to the **Cluster Recycle Bin** page to view all the retained backups. For more information, see [Restore a released cluster](/help/en/polardb/polardb-for-oracle/restore-a-released-cluster-1#task-2203574).
            
        -   If you select the cross-region backup method and select the **When the cluster is released, all backup sets of the cluster are deleted immediately** retention policy, all cross-region backup sets are deleted when you delete the cluster. If you select other policies, the configured retention policies apply.
            
        
    

## Related API operations

**Operation**

**Description**

[DescribeBackupPolicy](/help/en/polardb/polardb-for-oracle/api-describebackuppolicy-2#doc-api-polardb-DescribeBackupPolicy)

Queries the backup policies of a specified PolarDB cluster.

[ModifyBackupPolicy](/help/en/polardb/polardb-for-oracle/api-modifybackuppolicy-2#doc-api-polardb-ModifyBackupPolicy)

Modifies the backup policies of a specified PolarDB cluster.
