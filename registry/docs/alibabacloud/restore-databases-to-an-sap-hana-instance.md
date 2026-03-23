After an SAP HANA database is backed up to a Cloud Backup vault, it can be restored to several destinations: the source instance, another instance in the same vault, or an instance in a different region.

## Prerequisites

-   You have [a backup of SAP HANA](/help/en/cloud-backup/user-guide/back-up-an-sap-hana-instance#concept-f5y-cxj-ggb).
    
-   You have [configured the backup parameters](/help/en/cloud-backup/user-guide/set-backup-parameters#concept-edf-12r-ggb) for the SAP HANA instance.
    

## Precautions

Cloud Backup automatically stops the SAP HANA database during a restore. The database is inaccessible during this time.

## Restore a database to the source instance in the same region

To restore a database to the source SAP HANA instance in the same region, perform the following steps:

1.  Log on to the [Cloud Backup console](https://hbr.console.alibabacloud.com).
    
2.  In the navigation pane on the left, choose **Backup** > **SAP HANA Backup**.
    
3.  In the upper-left corner of the top menu bar, select a region.
    
4.  On the **SAP HANA Backup** page, select the **SAP HANA Instances** tab and click **Restore** next to the target instance.
    
5.  On the **Create Restore Job** tab, select the SAP HANA instance to restore as the source instance, and click **Next**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1232966671/p993655.png)
    
6.  Confirm the information for the source and destination SAP HANA instances, select the destination database, and click **Next**.
    
    **Important**
    
    During a cross-instance or enhanced restore, Cloud Backup will automatically stop the destination database instance to ensure data consistency and a successful restore.
    
    **Note**
    
    -   If the source database was accidentally deleted and cannot be found, you must create a new database with the same name in SAP HANA before you perform the restore operation.
        
    -   When **Use Backint for Catalog Backup** is enabled in the backup parameters for the target SAP HANA database, **Enhanced Recovery Mode** can be enabled. This mode allows for direct reading of the backup catalog through the Backint interface and perform a restore if the local SAP HANA instance fails.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1232966671/p993656.png)
    
7.  Select a **Restore To** option, configure the parameters, and then click **Next**.
    
    ![恢复规则](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0665417671/p35979.png)
    
    The following describes the options:
    
    **Option**
    
    **Description**
    
    **Configuration**
    
    **Latest Recovery Point**
    
    Restores the database to the most recent available state from the backup.
    
    -   **Use Differential Backup**: If enabled, the restore process will use the latest full backup plus the relevant differential/incremental and log backups. If disabled, it will use the latest full backup plus all subsequent log backups.
        
    -   **Initialize Log Area**: Select this option if you do not want to recover the log entries in the log area. Instead, the log entries will be deleted from the log area.
        
    -   **Validate Differential and Log Backups**: If you enable this option, Cloud Backup verifies that the required differential backup and log backup are available before a restore job starts. If either backup is unavailable, the restore job does not start.
        
    
    **Specified Time Point**
    
    Restores the database to a specific point in time.
    
    -   **Use Differential Backup**: Enable this option to restore the database from a differential backup or an incremental backup. If this option is disabled, Cloud Backup restores the database from a log backup.
        
    -   **Initialize Log Area**: Select this option to delete the log entries in the log area after the restore is complete.
        
    -   **Validate Differential and Log Backups**: If you enable this option, Cloud Backup verifies that the required differential and log backups are available before the restore job starts. If a required backup is unavailable, the restore job will not start.
        
    -   **Time Point**: Select a point in time to which you want to restore the database. Cloud Backup restores the database to the restore point that is closest to the specified point in time.
        
    
    **Specified Backup**
    
    Restores the database from a specific database backup.
    
    **Use Catalog**: Specifies whether to search the catalog for backups.
    
    **Note**
    
    If you do not use the catalog, you must specify a backup prefix. Cloud Backup restores the database based on the prefix.
    
    **Log Position**
    
    Restores the database to a specific log position.
    
    -   **Use Differential Backup**: Enable this option to restore the database from a differential or incremental backup. If this option is disabled, Cloud Backup uses a log backup to restore the database.
        
    -   **Initialize Log Area**: Initializes the log area. This action deletes all log entries, and they cannot be recovered.
        
    -   **Validate Differential and Log Backups**: If you enable this option, Cloud Backup verifies that the required differential and log backups are available before the restore job starts. If a differential or log backup is unavailable, Cloud Backup does not start the restore job.
        
    -   **Log Position**: The point in the log to recover to.
        
    -   **Volume ID**: The volume to restore.
        
    
8.  Select a backup version to restore and click **Create**.
    

## Restore a database to another instance in the same region

The procedure for restoring a database to another SAP HANA instance in the same region and repository is similar to that of a same-instance restore. The only differences are that you must select a different destination instance and enable the **Use Backint for Catalog Backup** option for the destination database. For more information about how to enable the **Use Backint for Catalog Backup** option, see [Configure backup parameters](/help/en/cloud-backup/user-guide/set-backup-parameters#concept-edf-12r-ggb).

**Important**

A cross-instance restore overwrites the backup catalog of the destination database. This prevents you from restoring the database to a previous backup point. It is strongly recommended to perform a full backup of the destination instance immediately after the restore is complete. This establishes a new, valid recovery baseline.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1232966671/p993684.png)

After you confirm that the source and destination instance information is correct, you must also specify the **Source Database Name**. This parameter specifies the name of the source database to restore. Set this parameter in the `Source database name@SID` format.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1232966671/p993685.png)

**Note**

For the remaining steps of a cross-instance restore, see [Restore a database to the source instance in the same region](#section-ddv-n6h-rx6).

## Restore an instance across backup vaults in the same region

Assume that in the same region, HANA instance e1 is backed up to backup vault v1, and HANA instance e2 is backed up to backup vault v2. This section describes how to restore data from HANA instance e1 to HANA instance e2.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4102029471/p962822.png)

1.  Log on to the [Cloud Backup console](https://hbr.console.alibabacloud.com).
    
2.  In the navigation pane on the left, choose **Backup** > **SAP HANA Backup**.
    
3.  In the upper-left corner of the top menu bar, select the region where the HANA instances reside.
    
4.  Delete the node of HANA instance e2.
    
    Click the instance ID for e2 to open the **SAP HANA Instance** page. On the **SAP HANA Nodes** tab, delete the node.
    
    **Important**
    
    Deleting a node interrupts its backup jobs. Existing backup data is not lost, but new data on the node will no longer be backed up. This action poses a risk of data loss. Before you delete the node, confirm that the node data in instance e2 is no longer needed or has been backed up.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4102029471/p963048.png)
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4102029471/p962834.png)
    
    After the node is deleted, the status of HANA instance e2 changes to **Initialization Failed**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4102029471/p963073.png)
    
5.  Register a temporary HANA instance (e3).
    
    1.  On the **SAP HANA Instances** tab, click **Register SAP HANA Instance**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4102029471/p962855.png)
        
    2.  In the **Register SAP HANA Instance** panel, select the v1 backup vault and enter the remaining parameters to complete the registration of instance e3. Then, [configure backup parameters](/help/en/cloud-backup/user-guide/set-backup-parameters). For more information, see [Register an SAP HANA instance](/help/en/cloud-backup/user-guide/register-an-sap-hana-instance#info-tok-iv5-zac).
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4102029471/p962868.png)
        
6.  Restore the data from HANA instance e1 to HANA instance e3. For more information, see [Restore a database to another instance in the same region](#section-5ox-k3g-4am).
    
7.  Delete the node of HANA instance e3.
    
    Click the instance ID of e3. On the **SAP HANA Instance** page, go to the **SAP HANA Nodes** tab and delete the node.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4102029471/p962834.png)
    
8.  Add the node of HANA instance e3 to instance e2.
    
    Click the instance ID of e2 to open the **SAP HANA Instance** page. Click **Add Node** and select the node that you deleted from instance e3 in the previous step. Cloud Backup automatically deploys a backup client on the selected node. This completes the process of restoring data from HANA instance e1 to HANA instance e2.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4102029471/p963049.png)
    

## Restore a database to an instance in another region

A backup vault is a cloud-based storage repository in Cloud Backup that stores backup data. For disaster recovery purposes, use a replication destination backup vault to restore an SAP HANA database across regions.

Before you use a replication destination backup vault to restore an SAP HANA database across regions, you must [create a replication destination backup vault](/help/en/cloud-backup/user-guide/manage-storage-vaults/#ae18962079rdd) and configure [cross-region backup](/help/en/cloud-backup/user-guide/cross-region-backup#task-2498338).

To restore a database to an SAP HANA instance in another region, perform the following steps:

1.  Log on to the [Cloud Backup console](https://hbr.console.alibabacloud.com).
    
2.  In the navigation pane on the left, select **Backup** > **SAP HANA Backup**.
    
3.  Select the region where the replication destination backup vault is located.
    
4.  On the **SAP HANA Instances** tab, install a backup client on the specified SAP HANA instance.
    
    **Note**
    
    For the Backup Vault parameter, select the replication destination backup vault that you created. The name of a replication destination backup vault contains \[COPY\]. For more information about other parameters for installing a backup client, see [Register an SAP HANA instance](/help/en/cloud-backup/user-guide/register-an-sap-hana-instance#task-2466475).
    
5.  In the **Actions** column for the SAP HANA instance that you want to restore, click **Restore**.
    
    The remaining steps are similar to those for a [cross-instance restore in the same region](#section-5ox-k3g-4am).
    

## Restore a database to another database in the same instance

Use SAP HANA Studio to restore a database to another database within the same SAP HANA instance.

1.  Open SAP HANA Studio and connect to the destination SAP HANA instance.
    
2.  Right-click the destination database instance and choose **Backup and Recovery** > **Recover Tenant Database**.
    
    ![Tenant](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1839002961/p378624.png)
    
3.  Select TenantDB.
    
    ![choose](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1839002961/p378631.png)
    
4.  In the **Specify Recovery Type** window, click **Recover the database to a specific data backup**.
    
5.  In the **Specify Backup Location** window, configure the following parameters.
    
    -   Select **Recover using the backup catalog**.
        
    -   Select **Search for the backup catalog in Backint only**.
        
    -   Select **Backint System Copy**.
        
    -   In the **Source System** field, enter `_DBNAME@SID_`.
        
        DBNAME is the name of the source database. SID is the ID of the current database instance.
        
    
6.  Follow the wizard to stop the database and select the backup to restore.
    
    **Important**
    
    If you cannot find the required backup in the Backups list, the **Use Backint for Catalog Backup** option is not enabled. To enable the **Use Backint for Catalog Backup** option, see [Configure backup parameters](/help/en/cloud-backup/user-guide/set-backup-parameters#concept-edf-12r-ggb).
    
    ![backups](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1839002961/p378630.png)
    
7.  Confirm the restore settings and click **Finish**.
    

## Restore an SAP HANA database using a prefix

Restore an SAP HANA instance using a prefix in the following scenarios:

-   If an SAP HANA database instance is stopped, Cloud Backup cannot retrieve historical backups from the catalog. As a result, you cannot restore the SAP HANA instance.
    
-   After you restore an SAP HANA database to another instance, Cloud Backup cannot restore the database from its previous backups because the catalog is overwritten.
    

1.  Obtain the prefix of a historical backup from the catalog.
    
    1.  Log on to the SAP HANA instance using the Secure Shell (SSH) protocol.
        
    2.  Run the following command to obtain the prefix of a historical backup.
        
        Replace {SID}, {InstanceNumber}, {hostname}, and {DBNAME} with the parameters of your SAP HANA instance.
        
        ```
        cat /usr/sap/{SID}/HDB{InstanceNumber}/{hostname}/trace/DB_{DBNAME}/backup.log  | grep COMPLETE_DATA_BACKUP
        ```
        
        For example, run the `cat /usr/sap/HXE/HDB90/yzs-hana-daily/trace/DB_HXE/backup.log | grep COMPLETE_DATA_BACKUP` command to obtain the prefix.
        
        ```
        2022-06-02T20:38:51+08:00  P0007269      181246cfc22 INFO    BACKUP   command: BACKUP DATA FOR HXE USING BACKINT ('/usr/sap/HXE/SYS/global/hdb/backint/DB_HXE/COMPLETE_DATA_BACKUP_2022_06_02_20_38') ASYNCHRONOUS
        2022-06-02T20:38:51+08:00  P0007269      181246cfc22 INFO    BACKUP   to  backint: /usr/sap/HXE/SYS/global/hdb/backint/DB_HXE/COMPLETE_DATA_BACKUP_2022_06_02_20_38_databackup_0_1
        2022-06-02T20:38:51+08:00  P0007269      181246cfc22 INFO    BACKUP   to  backint: /usr/sap/HXE/SYS/global/hdb/backint/DB_HXE/COMPLETE_DATA_BACKUP_2022_06_02_20_38_databackup_2_1
        2022-06-02T21:38:51+08:00  P0007269      18124a3ea82 INFO    BACKUP   command: BACKUP DATA FOR HXE USING BACKINT ('/usr/sap/HXE/SYS/global/hdb/backint/DB_HXE/COMPLETE_DATA_BACKUP_2022_06_02_21_38') ASYNCHRONOUS
        2022-06-02T21:38:51+08:00  P0007269      18124a3ea82 INFO    BACKUP   to  backint: /usr/sap/HXE/SYS/global/hdb/backint/DB_HXE/COMPLETE_DATA_BACKUP_2022_06_02_21_38_databackup_0_1
        2022-06-02T21:38:51+08:00  P0007269      18124a3ea82 INFO    BACKUP   to  backint: /usr/sap/HXE/SYS/global/hdb/backint/DB_HXE/COMPLETE_DATA_BACKUP_2022_06_02_21_38_databackup_2_1
        ```
        
        The prefix is the `COMPLETE_DATA_BACKUP_2022_06_02_20_38` part.
        
2.  In the Cloud Backup console, create a restore job using a prefix.
    
    1.  Log on to the [Cloud Backup console](https://hbr.console.alibabacloud.com).
        
    2.  In the left navigation pane, select **Backup** > **SAP HANA Backup**.
        
    3.  In the upper-left corner of the top menu bar, select a region.
        
    4.  On the **SAP HANA Backup** page, click **Restore** for the target instance.
        
    5.  On the **Create Restore Job** tab, select the SAP HANA source instance to restore, and click **Next**.
        
        ![备份](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1839002961/p302442.png)
        
    6.  Confirm the information for the source and destination SAP HANA instances, select the database to restore, and click **Next**.
        
        ![选择数据库](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1839002961/p525207.png)
        
    7.  In the Restore Rule step, configure the following parameters and click **Next**.
        
        ![指定备份](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9453340271/p525209.png)
        
        **Parameter**
        
        **Description**
        
        **Configuration**
        
        **Restore To**
        
        Configure the recovery method.
        
        Select **Specified Backup**.
        
        **Use Catalog**
        
        Specifies whether to find the backup from the catalog.
        
        Turn off the **Use Catalog** switch.
        
        **Backup Prefix**
        
        The prefix of a backup. Cloud Backup finds the backup based on the specified prefix and restores the backup.
        
        Set this parameter to the prefix that you obtained in [Step 1](#step-o02-ruh-sx3). Example: `COMPLETE_DATA_BACKUP_2022_06_02_20_38`.
        
3.  Select a backup version to restore and click **Create**.
    

## More operations

View the status of restore jobs or cancel jobs that are in progress.

1.  In the navigation pane on the left, select **Backup** > **SAP HANA Backup**.
    
2.  On the **SAP HANA Backup** page, click **Restore Jobs**.
    
3.  In the list of restore jobs, view the status of each job.
    
4.  To cancel a restore job that is in progress, click **Cancel** on the right of the restore job.
