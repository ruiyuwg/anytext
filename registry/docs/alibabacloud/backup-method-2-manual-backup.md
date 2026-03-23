A manual backup is a full snapshot of a PolarDB for MySQL cluster that you create on demand. Use manual backups to capture cluster state at specific points based on your business needs.

## Prerequisites

Before you begin, make sure that you have:

-   A PolarDB for MySQL cluster
    

## Procedure

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
    
2.  In the upper-left corner, select the region where your cluster is deployed.
    
3.  Find the cluster and click the cluster ID.
    
4.  In the left-side navigation pane, choose **Settings and Management** > **Backup and Restoration**.
    
5.  On the **Data Backups** tab, click **Create Backup**.
    
6.  In the dialog box, click **OK**.
    

## Limits

-   Each cluster supports a maximum of three manual backups.
    
-   Manual backup files can be deleted.
    
-   Modifying data after a snapshot is created increases the amount of snapshot backups, which increases the backup cost. Data modifications during defragmentation also increase the amount of snapshot backups.
    

## Billing

If your database has 100 GB of data and you modify 10 GB after a snapshot is created:

-   You are charged for 100 GB of data storage and 10 GB of snapshot storage.
    
-   If you retain the snapshots when you delete your database, you are charged for 100 GB of snapshot storage.
    

## API reference

**API**

**Description**

[CreateBackup](/help/en/polardb/polardb-for-mysql/api-createbackup#doc-api-polardb-CreateBackup)

Creates a full snapshot backup for a specified PolarDB cluster.

[DescribeBackups](/help/en/polardb/polardb-for-mysql/api-describebackups#doc-api-polardb-DescribeBackups)

Queries the backup information of a specified PolarDB cluster.

[DeleteBackup](/help/en/polardb/polardb-for-mysql/api-deletebackup#doc-api-polardb-DeleteBackup)

Deletes the backups of a specified PolarDB cluster.
