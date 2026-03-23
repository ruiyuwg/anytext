By default, automatic backup is enabled. PolarDB automatically backs up data based on the specified backup policy. This way, data security is ensured by periodic and scheduled backups. When a cluster is created, PolarDB automatically backs up data once a day. You can configure parameters such as the frequency of automatic backup and the retention period of backup files in the PolarDB console based on your business requirements.

## Usage notes

-   The backup files that are automatically created cannot be deleted. You can configure the retention period of automatic backup files in the **Data Backup Retention Period** section in the Backup Policy Settings dialog box.
    
-   If you modify the data of a cluster after a snapshot is created for the cluster, the snapshot size increases, which increases backup costs. If you perform defragmentation, data modifications may occur, which also increases the snapshot size.
    
    For example, if your database has 100 GB of data and you modify 10 GB of the data after a snapshot is created:
    
    -   You are charged for 100 GB of data storage and 10 GB of snapshot storage.
        
    -   If you retain the snapshots when you delete your database, you are charged for 100 GB of snapshot storage.
        
    

## Configure an automatic backup policy

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
    
2.  In the upper-left corner, select the region in which the cluster is deployed.
    
3.  Find the cluster and click its ID.
    
4.  In the left-side navigation pane, choose **Settings and Management** > **Backup and Restoration**.
5.  On the Backup Policy Settings tab, click **Modify**.
    
6.  In the **Backup Policy Settings** dialog box, configure the parameters in the **Data Backup**, **Log Backup**, and **General** sections. For more information, see [Configure backup settings](/help/en/polardb/polardb-for-mysql/user-guide/configure-backup-settings#task-2122812).
    
7.  After you configure backup settings, click **OK**.
    

## **FAQ**

After a cluster is released and deleted, level-2 backup fees are still generated. How do I delete or disable the generated level-2 backup files?

After you delete a cluster, level-1 backups automatically become level-2 backups. Retaining backups may incur fees. You can [delete a released cluster](/help/en/polardb/polardb-for-mysql/user-guide/delete-a-released-cluster) at any time to save costs. You can go to the **Cluster Recycle Bin** page to view all backups. For more information, see [Cluster recycle bin](/help/en/polardb/polardb-for-mysql/user-guide/cluster-recycle-bin/).

## Related API operations

**Operation**

**Description**

[CreateBackup](/help/en/polardb/polardb-for-mysql/api-createbackup#doc-api-polardb-CreateBackup)

Creates a full backup of a PolarDB cluster.

[DescribeBackups](/help/en/polardb/polardb-for-mysql/api-describebackups#doc-api-polardb-DescribeBackups)

Queries the backup information of a PolarDB cluster.

[DeleteBackup](/help/en/polardb/polardb-for-mysql/api-deletebackup#doc-api-polardb-DeleteBackup)

Deletes the backups of a PolarDB cluster.

[DescribeBackupPolicy](/help/en/polardb/polardb-for-mysql/api-describebackuppolicy#doc-api-polardb-DescribeBackupPolicy)

Queries the automatic backup policy of a PolarDB cluster.

[ModifyBackupPolicy](/help/en/polardb/polardb-for-mysql/api-modifybackuppolicy#doc-api-polardb-ModifyBackupPolicy)

Modifies the automatic backup policy of a PolarDB cluster.
