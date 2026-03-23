The emergency recovery feature lets you create a temporary sandbox instance from your ApsaraDB RDS for MySQL backups within minutes. Built on Copy Data Management (CDM) technology within the Data Disaster Recovery feature of Data Management Service (DMS), it restores your entire RDS instance to an isolated sandbox. Read and write operations on any sandbox instance do not affect your production data or other sandbox instances.

**Note**

-   This topic covers emergency recovery for ApsaraDB RDS for MySQL instances only. For self-managed MySQL databases, see [Use the emergency recovery feature for a self-managed MySQL database](/help/en/dbs/user-guide/restore-self-managed-mysql-dbs).
    
-   For a comparison of all data restoration methods available for ApsaraDB RDS for MySQL, see [Overview of data restoration methods](/help/en/doc-detail/157519.html#concept-2445988).
    

## Use cases

-   **Emergency data recovery:** Quickly restore accidentally deleted or corrupted data to a sandbox instance, then migrate the corrected data back to your production instance.
    
-   **Disaster recovery drills:** Validate your recovery procedures against real backup data without affecting production workloads.
    
-   **Development and testing:** Spin up an isolated copy of your production data for development, testing, or debugging.
    
-   **Query and analysis:** Run analytical queries or generate reports against a point-in-time copy of your data without impacting production performance.
    

## Prerequisites

Before you begin, make sure that the following requirements are met:

-   **Edition:** The RDS instance runs **RDS High-availability Edition**.
    
-   **Storage type:** The RDS instance uses [Premium Local SSDs](/help/en/rds/apsaradb-rds-for-mysql/storage-types-for-apsaradb-rds-for-mysql/).
    
-   **Region:** The RDS instance resides in a supported region: China (Hangzhou), China (Shanghai), China (Shenzhen), China (Heyuan), China (Chengdu), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Ulanqab), China (Hong Kong), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), Japan (Tokyo), Germany (Frankfurt), or China East 1 Finance.
    
-   **Backup:** At least one physical backup is complete for the RDS instance. For details, see [Automatic backup](/help/en/rds/apsaradb-rds-for-mysql/enable-the-automatic-backup-feature-for-an-apsaradb-rds-for-mysql-instance#concept-l1m-xgn-ydb) or [Perform a manual backup](/help/en/rds/apsaradb-rds-for-mysql/manually-back-up-an-apsaradb-rds-for-mysql-instance).
    
-   **TDE:** Transparent Data Encryption (TDE) is disabled for the RDS instance. See [Configure TDE](/help/en/rds/apsaradb-rds-for-mysql/configure-tde-for-an-apsaradb-rds-for-mysql-instance#task-jrp-dw4-ydb).
    
-   **PrivateLink:** PrivateLink is activated. See [Activate PrivateLink](/help/en/privatelink/getting-started-overview#section-zlt-6w9-roy) or [OpenPrivateLinkService](/help/en/privatelink/developer-reference/api-privatelink-2020-04-15-openprivatelinkservice).
    

**Note**

You can check the edition, storage type, and region on the **Basic Information** page of your RDS instance.

## Restoration scope

The entire RDS instance is restored. Individual database or table restoration is not covered by this feature. For database-level and table-level restoration, see [Restore individual databases and tables of an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/restore-individual-databases-and-tables-of-an-apsaradb-rds-for-mysql-instance).

### Available recovery points

The available points in time depend on whether the log backup feature is enabled:

**Log backup status**

**Available recovery points**

Disabled

Only the exact point in time when each backup was created.

Enabled

Any point in time after the first full backup, within the log backup retention period. See [Use the log backup feature](/help/en/rds/support/use-the-log-backup-feature#task-2214457).

**Note**

Snapshots in CDM storage are created after you enable the emergency recovery feature. The recovery window starts when the emergency recovery data is ready and extends through the full backup retention period. For example, if you enable the feature at 08:00 on July 1 and the retention period for full backups is seven days, the recovery window covers up to seven days from 08:00 on July 1. Within this window, the earliest available recovery point is the time when the emergency recovery data preparation completes.

## Billing

Two billable items apply: sandbox storage and sandbox instance resources. No charges are incurred for sandbox instances until you create one.

**Billable item**

**Pricing model**

**Details**

[Sandbox storage](/help/en/dbs/product-overview/dbs-sandbox-fees#section-zem-2el-l1d)

Based on data size stored in CDM storage

Charged continuously after you enable the sandbox feature. Database Backup Service (DBS) synchronizes your instance data and generates sandbox snapshots automatically.

[Temporary sandbox instance](/help/en/dbs/product-overview/dbs-sandbox-fees#section-kbj-aba-mlq)

Hourly, based on instance specifications

Charged only while the sandbox instance exists. Release the sandbox instance when it is no longer needed to stop instance charges.

**Important**

If you enable both the emergency recovery feature and the [fast restoration feature for individual databases and tables](/help/en/rds/apsaradb-rds-for-mysql/restore-individual-databases-and-tables-of-an-apsaradb-rds-for-mysql-instance), CDM storage fees apply because both features share the Data Disaster Recovery sandbox. To stop CDM storage costs entirely, disable both features.

## Step 1: Enable the sandbox feature

Enable the sandbox feature and configure a sandbox policy before you create a sandbox instance.

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region of your RDS instance. Click the instance ID.
    
2.  In the left-side navigation pane, click **Backup and Restoration**.
    
3.  Click the **Crash Recovery** tab, then click **Enable DBS Sandbox**.
    
4.  In the **Set Sandbox Policy** dialog box, configure the following parameters:
    
    **Parameter**
    
    **Description**
    
    **Sandbox Feature**
    
    Turn on to enable the sandbox feature.
    
    **Sandbox Data Retention Period**
    
    Number of days to retain sandbox data and snapshots. Default: 7 days. Set to 0 to retain only the most recent snapshot. A longer retention period consumes more storage and increases costs. Key behaviors:  
    \- Snapshots become available as soon as they are created. The system automatically deletes expired snapshots. Only incremental data (changes since the previous snapshot) is deleted.  
    \- If the retention period does not exceed the log retention period of your RDS instance, snapshots support point-in-time recovery within their coverage window.  
      
    
5.  Click **OK**.
    

After you enable the sandbox feature, the **Sandbox instance time range** shows **Data preparing**. DBS copies the latest full backup to CDM storage and generates an initial snapshot. This process typically takes 5 to 20 minutes depending on the backup data size.

When preparation completes, the **Sandbox instance time range** displays the available time range (from the earliest backup start time to the latest backup end time). You can then proceed to create a sandbox instance.

### Sandbox instance time range states

**State**

**Displayed value**

**Meaning**

Feature disabled

**Unopened**

The sandbox feature has not been enabled.

Preparing

**Data preparing**

DBS is copying backup data to CDM storage.

Ready

A specific time range

Sandbox instances can be created within the displayed range.

## Step 2: Create a sandbox instance

Create a temporary sandbox instance and restore your data to a specific point in time. Each sandbox instance is fully isolated -- read and write operations do not affect other sandbox instances or the source database.

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region of your RDS instance. Click the instance ID.
    
2.  In the left-side navigation pane, click **Backup and Restoration**.
    
3.  Click the **Crash Recovery** tab.
    
4.  Click **Recover Sandbox Instance**. In the dialog box that appears, configure the following parameters:
    
    **Sandbox Instance Point in Time**
    
    **Parameter**
    
    **Description**
    
    **Sandbox Data Time Range**
    
    The time range within which data can be restored, from the point in time at which the first CDM snapshot was created to the current time. The actual end time depends on the latest binary log file. To check when the latest binary log was generated, go to **Backup and Restoration** > **Base Backups** > **Log Backup**.
    
    **Recovery Method**
    
    Choose one of the following:  
    \- **Recovery by Snapshot Point in Time** (recommended): Restore to the exact time of a snapshot. This is faster because no log replay is needed.  
    \- **Recovery by Custom Point in Time**: Restore to any point within the log backup retention period. Requires the log backup feature to be enabled on an RDS High-availability Edition instance. Recovery time varies based on log size. See [RDS MySQL log backups](/help/en/rds/support/use-the-log-backup-feature#task-2214457).  
      
    
    **Sandbox Instance Configurations**
    
    **Parameter**
    
    **Description**
    
    **Specifications**
    
    Instance specifications for the sandbox instance. Higher specifications deliver better query performance after recovery. Restoration speed is slightly affected. Available options:  
    \- 1 Core, 1 GB Memory  
    \- 1 Core, 2 GB Memory  
    \- 2 Cores, 4 GB Memory  
    \- 2 Cores, 8 GB Memory  
    \- 4 Cores, 8 GB Memory  
    \- 4 Cores, 16 GB Memory  
    \- 8 Cores, 16 GB Memory  
    \- 8 Cores, 32 GB Memory  
      
      
      
      
      
      
      
    
    **Region**
    
    Fixed to the same region as the source RDS instance.
    
    **Peer VPC**
    
    The virtual private cloud (VPC) for the sandbox instance. To connect from an Elastic Compute Service (ECS) instance, select the VPC where the ECS instance resides. See [Create and manage a VPC](/help/en/vpc/user-guide/create-and-manage-a-vpc).
    
    **Peer vSwitch**
    
    The vSwitch for the sandbox instance. The sandbox instance is accessible within the CIDR block of this vSwitch.
    
    **Security Group**
    
    Select an [advanced security group](/help/en/ecs/user-guide/basic-security-groups-and-advanced-security-groups) that [allows traffic over port 3306](/help/en/ecs/user-guide/create-a-security-group-1). This parameter appears only the first time you enable the emergency recovery feature for an instance.
    
    **Database Account Type**
    
    Choose one of the following:  
    \- **Use Original Database Account**: Use the existing account from the source database.  
    \- **Create Privileged Account**: Create a new privileged account with permissions on all databases in the sandbox instance. Specify the **Database Account** and **Password**. The source database account is retained alongside the new privileged account. If the privileged account username matches an existing source account, the source account is overwritten in the sandbox instance. The privileged account is created only in this sandbox instance and does not affect the source database.  
      
    
5.  Click **OK**.
    

The system runs a precheck and creates the sandbox instance. When the **Sandbox Instance Status** changes to **Complete**, the sandbox instance is ready for connections.

### Connect to the sandbox instance

The sandbox instance inherits all configurations and account credentials from the source database. Connect using either method:

-   [Use DMS to access sandbox instances](/help/en/dbs/user-guide/use-dms-to-access-sandbox-instances#task-2084101)
    
-   [Use ECS to access sandbox instances](/help/en/dbs/user-guide/use-ecs-to-access-sandbox-instances#task-2084327)
    

If you selected **Create Privileged Account**, you can also connect with the privileged account credentials.

**Note**

The client (for example, an ECS instance) must reside in the same VPC as the sandbox instance.

## What to do next

### Correct data on the original instance

After you create the sandbox instance, use Data Transmission Service (DTS) to migrate corrected data back to the original RDS instance. See [Migrate data between ApsaraDB RDS for MySQL instances](/help/en/rds/apsaradb-rds-for-mysql/migrate-data-between-apsaradb-rds-for-mysql-instances#concept-fxm-bhp-ydb).

When you create the migration task:

-   Set the sandbox instance as the source database with **Access Method** set to **Self-managed Database on ECS**.
    
-   Set the original RDS instance as the destination database with **Access Method** set to **Alibaba Cloud Instance**.
    

### Release a sandbox instance

Release a sandbox instance when it is no longer needed. Releasing a sandbox instance stops the hourly instance charges. CDM storage charges continue as long as the sandbox feature remains enabled.

1.  In the left-side navigation pane, click **Backup and Restoration**.
    
2.  On the **Crash Recovery** tab, find the sandbox instance and click **Release Sandbox Instance** in the **Actions** column.
    

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5828972471/p745540.png)

### Disable the emergency recovery feature

Disable the sandbox feature when you no longer need emergency recovery. Existing sandbox instances are not affected after the feature is disabled.

1.  In the left-side navigation pane, click **Backup and Restoration**.
    
2.  On the **Crash Recovery** tab, click **Set Sandbox Policy**.
    
3.  In the dialog box, turn off **Sandbox Feature**.
    

**Important**

The emergency recovery feature and the [fast restoration feature for individual databases and tables](/help/en/rds/apsaradb-rds-for-mysql/restore-individual-databases-and-tables-of-an-apsaradb-rds-for-mysql-instance) both rely on the Data Disaster Recovery sandbox. Disabling emergency recovery does not affect the fast restoration feature or its billing. To fully disable the sandbox and stop CDM storage charges, disable both features.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5183513071/p745536.png)
