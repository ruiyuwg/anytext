Manually back up the data of a PolarDB for Oracle cluster at any time to make sure that your data is reliable.

**Important**

Each cluster supports a maximum of three manual backups. Deleted manual backups cannot be restored. Back up critical data before you delete any backup.

## Procedure

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Clusters**.
    
3.  In the upper-left corner, select the region where your cluster is deployed.
    
4.  Find the cluster and click its ID.
    
5.  In the left-side navigation pane, choose **Settings and Management** > **Backup and Restoration**.
    
6.  On the **Data Backups** tab, click **Create Backup**.
    
7.  In the **Create Backup** message, click **OK**.
    

## API operations

**Operation**

**Description**

[CreateBackup](/help/en/polardb/polardb-for-oracle/api-createbackup-2#doc-api-polardb-CreateBackup)

Creates a full snapshot backup of a PolarDB cluster.

[DescribeBackups](/help/en/polardb/polardb-for-oracle/api-describebackups-2#doc-api-polardb-DescribeBackups)

Queries the backup information of a PolarDB cluster.

[DeleteBackup](/help/en/polardb/polardb-for-oracle/api-deletebackup-2#doc-api-polardb-DeleteBackup)

Deletes the backups of a PolarDB cluster.
