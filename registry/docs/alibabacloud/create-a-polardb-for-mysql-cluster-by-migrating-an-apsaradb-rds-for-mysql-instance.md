PolarDB allows the seamless upgrade of an ApsaraDB RDS for MySQL instance to a PolarDB for MySQL cluster. During the upgrade process, the system automatically synchronizes the accounts, databases, IP whitelists, and necessary parameter configurations from the RDS instance to the PolarDB cluster. In addition, you have the option to retain the original database endpoints to allow your application to seamlessly connect to the PolarDB cluster without requiring any modifications to the connection settings. This process significantly reduces migration complexity and ensures a smooth transition for business operations.

You can upgrade an RDS instance to a PolarDB cluster of the **same or higher version**. Example:

-   An ApsaraDB RDS for MySQL 5.6 instance can be upgraded to a PolarDB for MySQL 5.6, 5.7, 8.0.1, or 8.0.2 cluster.
    
-   An ApsaraDB RDS for MySQL 5.7 instance can be upgraded to a PolarDB for MySQL 5.7, 8.0.1, or 8.0.2 cluster.
    
-   An ApsaraDB RDS for MySQL 8.0 instance can be upgraded to a PolarDB for MySQL 8.0.1 or 8.0.2 cluster.
    
    **Note**
    
    -   PolarDB for MySQL 8.0.1 is fully compatible with MySQL Community Edition 8.0.13 and earlier versions. PolarDB for MySQL 8.0.2 is fully compatible with MySQL Community Edition 8.0.18 and earlier versions.
        
    -   The features provided by PolarDB for MySQL 8.0.1 and 8.0.2 have some differences. For more information, see [Features in PolarDB for MySQL 5.6, 5.7, and 8.0](/help/en/polardb/polardb-for-mysql/version-comparison).
        
    

## **Migration methods**

The upgrade supports two migration methods: **physical migration (physical replication)** and **logical migration (DTS data synchronization**. The system automatically selects the appropriate migration method based on the RDS instance's MySQL version, edition, and storage type. You cannot manually change the migration method. The following tables compares the two migration methods.

**Comparison item**

**Physical migration (physical replication)**

**Logical migration (DTS data synchronization)**

Source instance

ApsaraDB RDS for MySQL 5.6 and 5.7 High-availability Edition instances that use the local SSD storage type. These instances can be upgraded to PolarDB for MySQL clusters of the same version**.**

**Note**

The minor version of the ApsaraDB RDS for MySQL instances must meet the following requirements:

-   For ApsaraDB RDS for MySQL 5.6 High-availability Edition instances, the minor version must be 20190815 or later.
    
-   For ApsaraDB RDS for MySQL 5.7 High-availability Edition instances, the minor version must be 20200331 or later.
    

ApsaraDB RDS for MySQL instances except those that support physical migration. These instances can be upgraded to PolarDB for MySQL clusters of the same or different versions.

**Note**

There are no restrictions on minor versions.

Implementation method

First coplies full data from the RDS instance to the PolarDB cluster, and then maintains incremental synchronization from the RDS instance to the PolarDB cluster.

**Important**

During incremental synchronization, all non-InnoDB tables are automatically converted into InnoDB tables.

Creates a data synchronization task by using DTS. The task first synchronizes the schema and full data from the RDS instance to the PolarDB cluster, and then maintains incremental data synchronization from the RDS instance to the PolarDB cluster.

**Note**

-   The initial full data synchronization performs concurrent `INSERT` operations and causes fragmentation in the tables of the PolarDB cluster. After full data synchronization is complete, the tablespace of the PolarDB database is larger than that of the RDS instance.
    
-   During the initial full data synchronization, the overall memory usage may be high. This is because the memory buffer pool of InnoDB caches data to accelerate read and write operations. After the upgrade, you can [adjust the value](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters) of the `innodb_buffer_pool_size` parameter in the console to change the memory buffer pool size and reduce the memory usage.
    

Whether DTS is required

No.

Yes.

MySQL version migration

Only supports migration to the same version.

Supports migration to the same or a higher version.

Upgrade duration

The upgrade must be completed within 30 days. After the 30-day period expires, the system automatically stops the migration process.

The upgrade must be completed within 30 days. After the 30-day period expires, the system automatically stops the migration process.

Whether cross-region migration is supported

No.

No.

Whether incremental synchronization is supported

Yes.

Yes.

Whether newly added databases can be migrated

Yes.

No.

**Note**

To synchronize newly added databases, go to the [DTS console](https://dts.console.alibabacloud.com/sync) to modify the synchronization objects and configure the new databases in both forward and reverse tasks.

Whether schema can be migrated

Yes.

Only databases, tables, views, stored procedures, and functions can be migrated.

## Advantages

-   [Switchover with endpoints](#a3252bcf8bpy8) is supported. You can select to retain the original database endpoints, which allows the applications to connect to the PolarDB cluster without modifying any connection configurations.
    
-   No data is lost during the upgrade process.
    
-   Incremental migration is supported.
    
-   Online hot migration is supported. During the upgrade process, there is only a single brief interruption, with downtime lasting less than 10 minutes (which occurs when the business is [switched over](#3d6828a2e9elx)).
    
-   If the migration fails or the migration is no longer needed, you can [roll back the migration](/help/en/polardb/polardb-for-mysql/user-guide/migration-data-recovery-steps#title-sgl-23n-jih). The rollback can be completed within 10 minutes.
    

## **Usage notes**

### Impacts on the RDS **instance**

During the upgrade process, specific operations on the RDS instance may be restricted, and some operations may cause brief interruptions or increased load on the RDS instance.

-   During the upgrade process, you cannot modify instance parameters.
    
-   If you select **Switch without Endpoints** when performing the [switchover](#3d6828a2e9elx), your business may be interrupted for 1 to 5 minutes during the switching. If you select **Switch without Endpoints**, you must quickly modify your application's connection configuration for connecting to the PolarDB cluster.
    
-   If you use the **logical migration (DTS data synchronization)** [migration method](#c8fda47883u0h), follow these guidelines:
    
    -   Delete the triggers that are created for RDS instance. Otherwise the migration is interrupted.
        
    -   During initial full data synchronization, do not execute DDL operations that change database or table schema. Otherwise, the data synchronization task fails.
        
    -   During initial full data synchronization, the read and write resources (such as CPU and IOPS) of the RDS instance and PolarDB cluster are occupied, which may cause increased load on the RDS instance.
        

### **Prerequisites**

The source RDS instance must meet the following requirements:

-   Instance basic information:
    
    **MySQL version**
    
    **Basic Edition**
    
    **High-availability Edition**
    
    **Cluster Edition**
    
    5.6
    
    \-
    
    Local SSD
    
    \-
    
    5.7
    
    Cloud disk
    
    Local SSD, Cloud disk
    
    Cloud disk
    
    8.0
    
    Cloud disk
    
    Local SSD, Cloud disk
    
    Cloud disk
    
-   The storage engine type of data tables must be **InnoDB** or **X-Engine**.
    
-   If the [conditions](#c8fda47883u0h) for the **physical migration (physical replication)** method are not met, the **logical migration (DTS data synchronization)** method is used. Make sure that the RDS instance meets the following requirements:
    
    -   No DTS bidirectional synchronization tasks exist. If DTS bidirectional synchronization tasks exist, do not perform the upgrade. Otherwise, data inconsistency may occur during the upgrade.
        
    -   Delete the triggers that are created for RDS instance. Otherwise the migration is interrupted.
        
    -   By default, the binary logging feature is enabled for the RDS instance. Make sure that the [value of the binlog\_row\_image parameter is full](/help/en/rds/apsaradb-rds-for-mysql/modify-the-parameters-of-an-apsaradb-rds-for-mysql-instance#concept-lfl-xmn-wdb). Otherwise, an error is returned during the precheck phase and the data synchronization task cannot be started successfully.
        
    -   For DTS to reliably access the binary log files for incremental data synchronization during the migration process, the RDS instance's [binary log files](/help/en/rds/apsaradb-rds-for-mysql/view-and-delete-the-binary-log-files-of-an-apsaradb-rds-for-mysql-instance#concept-2101409) must be retained for at least 7 days. Otherwise, the synchronization task may fail. In extreme cases, data inconsistency or loss may occur. The Service Level Agreement (SLA) of DTS does not cover issues caused by setting the binlog file retention period to less than the required 7 days.
        
-   If you want to use the **physical migration (physical replication)** [migration method](#c8fda47883u0h) even when the conditions are not met, make sure that the RDS instance version meets the following conditions:
    
    -   For ApsaraDB RDS for MySQL 5.6 High-availability Edition instances, the minor version must be 20190815 or later.
        
    -   For ApsaraDB RDS for MySQL 5.7 High-availability Edition instances, the minor version must be 20200331 or later.
        
    
    **Note**
    
    -   To view the **Minor Version** of the RDS instance, go to the **[RDS console](https://rds.console.alibabacloud.com/rdsList/basic)** > **Instances** > **Basic Information** page. You can find the minor version information in the **Configuration Information** section. If it is earlier than the specified version, [update it](/help/en/rds/apsaradb-rds-for-mysql/update-the-minor-engine-version-of-an-apsaradb-rds-for-mysql-instance#concept-gnx-vgj-wdb11).
        
    -   If you use **physical migration (physical replication)**, we recommend that you set the retention period of the [binary log files](/help/en/rds/apsaradb-rds-for-mysql/view-and-delete-the-binary-log-files-of-an-apsaradb-rds-for-mysql-instance) to at least 24 hours.
        
    

### **Limits**

The upgrade by using the **logical migration (DTS data synchronization)** [migration method](#c8fda47883u0h) is subject to the following limits:

-   Data inconsistency between the source and destination databases occurs if data from other sources is written to the destination database during the data synchronization. For example, if you use DMS to execute online DDL statements while data from other sources is written to the destination database, data loss may occur in the destination database.
    
-   By default, DTS disables FOREIGN KEY constraints for the destination database in a data synchronization task. Therefore, specific operations such as the cascade and delete operations of the source database are not synchronized to the destination database.
    
-   SQL statements supported for incremental synchronization:
    
    **Operation type**
    
    **SQL statement**
    
    DML
    
    `INSERT`, `UPDATE`, `DELETE`
    
    DDL
    
    -   `ALTER TABLE`, `ALTER VIEW`
        
    -   `CREATE FUNCTION`, `CREATE INDEX`, `CREATE PROCEDURE`, `CREATE TABLE`, `CREATE VIEW`
        
    -   `DROP INDEX`, `DROP TABLE`
        
    -   `RENAME TABLE`
        
    -   `TRUNCATE TABLE`
        
    

### **Key considerations**

**Migration phase**

**Description**

Before migration

-   [(Optional) Check the whitelist configurations](/help/en/polardb/polardb-for-mysql/user-guide/upgrade-steps-for-rds-mysql-to-polardb-mysql#097444d4840s7): If the whitelists of the primary and read-only nodes of the source RDS instance are different, you must add the whitelists of the read-only nodes to the whitelists of the primary node in advance to ensure that the whitelists of the read-only nodes can be synchronized to the destination PolarDB cluster.
    
-   If you perform the upgrade by using **logical migration (DTS data synchronization)**, you need to [check whether the service-linked role for PolarDB is created (required only for logical migration)](/help/en/polardb/polardb-for-mysql/user-guide/upgrade-steps-for-rds-mysql-to-polardb-mysql#cfc464acf4u28) and [remove extra system accounts from the source ApsaraDB RDS instance (required only for logical migration)](/help/en/polardb/polardb-for-mysql/user-guide/upgrade-steps-for-rds-mysql-to-polardb-mysql#1e5bfe2125umg).
    

During migration

-   Full data synchronization during [the creation of the PolarDB cluster](/help/en/polardb/polardb-for-mysql/user-guide/upgrade-steps-for-rds-mysql-to-polardb-mysql#title-htp-gzb-xqz) takes some time. The time consumed depends on the amount of synchronized data. During this period, the destination PolarDB cluster is in the **Creating** state.
    
-   The [switchover with endpoints](/help/en/polardb/polardb-for-mysql/user-guide/upgrade-steps-for-rds-mysql-to-polardb-mysql#014f73113etmb) feature exchanges the endpoints if only both the source RDS instance and the destination PolarDB cluster have the endpoints. By default, the destination PolarDB cluster has only a private primary endpoint and a private cluster endpoint. If the RDS instance has [more than two endpoints](/help/en/rds/apsaradb-rds-for-mysql/view-and-change-the-internal-and-public-endpoints-and-port-numbers-of-an-apsaradb-rds-for-mysql-instance#concept-fbd-ypv-ydb), you must [create corresponding endpoints](/help/en/polardb/polardb-for-mysql/user-guide/apply-for-a-cluster-endpoint-or-a-primary-endpoint) on the destination PolarDB cluster if you want to exchange these endpoints.
    
-   The SSL encryption status of the endpoints must be consistent:
    
    -   If [SSL](/help/en/rds/apsaradb-rds-for-mysql/ssl-encryption/) is enabled for the endpoints of the source RDS instance and you select [switchover with endpoints](/help/en/polardb/polardb-for-mysql/user-guide/upgrade-steps-for-rds-mysql-to-polardb-mysql#014f73113etmb) to switch the endpoints, make sure that [SSL](/help/en/rds/apsaradb-rds-for-mysql/ssl-encryption/) is also enabled for the endpoints of the PolarDB cluster.
        
    -   If [SSL](/help/en/rds/apsaradb-rds-for-mysql/ssl-encryption/) is disabled for the endpoints of the source RDS instance, make sure that [SSL](/help/en/rds/apsaradb-rds-for-mysql/ssl-encryption/) is also disabled for the endpoints of the PolarDB cluster.
        
-   **Logical migration (DTS data synchronization)**:
    
    -   Do not manually release the DTS data synchronization task.
        

## **Billing**

### **Logical migration (DTS data synchronization)** method

When the **logical migration (DTS data synchronization)** method is used, you are charged for the DTS data synchronization task and the destination PolarDB cluster.

-   DTS data synchronization task:
    
    During the upgrade process, the system automatically creates a DTS data synchronization task between the RDS instance and the PolarDB cluster. For more information about the billing rules of DTS tasks, see [Billing overview](/help/en/dts/product-overview/billing-overview#concept-261679).
    
-   The destination PolarDB cluster:
    
    -   When the billing method is pay-as-you-go, you are not charged for the cluster throughout the migration process. You are charged on a pay-as-you-go basis after the following operations:
        
        -   **Migration completed** (including the [complete migration](/help/en/polardb/polardb-for-mysql/user-guide/upgrade-steps-for-rds-mysql-to-polardb-mysql#title-9jq-evw-422) operation during the upgrade process).
            
            **Note**
            
            -   The migration is complete when the synchronization link between the RDS instance and the PolarDB cluster is interrupted.
                
            -   Migration must be completed within 30 days. After the 30-day period expires, the migration feature is disabled, and both the RDS instance and the PolarDB cluster return to **read-write** status, breaking the replication relationship.
                
            
        -   **Migration stopped** (including [canceling the migration](/help/en/polardb/polardb-for-mysql/user-guide/upgrade-steps-for-rds-mysql-to-polardb-mysql#li-ugz-8vb-656) operation when precheck fails and the [canceling the migration](/help/en/polardb/polardb-for-mysql/user-guide/migration-data-recovery-steps#e0bc1199be65p) operation during the upgrade process).
            
            In this case, the PolarDB cluster is already created even if the upgrade is stopped. [Release the cluster](/help/en/polardb/polardb-for-mysql/user-guide/release-a-cluster) if you no longer need it.
            
    -   If the destination PolarDB cluster is a serverless cluster, the destination cluster starts to be billed when it enters the **Running** state.
        
    -   If the destination PolarDB cluster uses the subscription billing method, you need to complete the payment when you create the cluster.
        

### **Physical migration (physical replication)** method

If the **physical migration (physical replication)** is used, you are not charged for the data migration process in the upgrade. You are charged only for the destination PolarDB cluster.

-   If the destination PolarDB cluster uses the pay-as-you-go billing method, you are not charged for the cluster throughout the migration process. You are charged on a pay-as-you-go basis after the following operations:
    
    -   **Migration completed** (including the [complete migration](/help/en/polardb/polardb-for-mysql/user-guide/upgrade-steps-for-rds-mysql-to-polardb-mysql#title-9jq-evw-422) operation during the upgrade process).
        
        **Note**
        
        -   The migration is complete when the synchronization link between the RDS instance and the PolarDB cluster is interrupted.
            
        -   Migration must be completed within 30 days. After the 30-day period expires, the migration feature is disabled, and both the RDS instance and the PolarDB cluster return to **read-write** status,
            
        
    -   **Migration stopped** (including [canceling the migration](/help/en/polardb/polardb-for-mysql/user-guide/upgrade-steps-for-rds-mysql-to-polardb-mysql#li-ugz-8vb-656) operation when precheck fails and the [canceling the migration](/help/en/polardb/polardb-for-mysql/user-guide/migration-data-recovery-steps#e0bc1199be65p) operation during the upgrade process).
        
        In this case, the PolarDB cluster is already created even if the upgrade is stopped. [Release the cluster](/help/en/polardb/polardb-for-mysql/user-guide/release-a-cluster) if you no longer need it.
        
-   If the destination PolarDB cluster is a serverless cluster, the destination cluster starts to be billed when it enters the **Running** state.
    
-   If the destination PolarDB cluster uses the subscription billing method, you need to complete the payment when you create the cluster.
    

## **Procedure**

### **1\. Evaluate the migration**

To ensure a smooth migration process and better migration experience, PolarDB provides the [migration evaluation](/help/en/polardb/polardb-for-mysql/user-guide/migration-assessment) feature. This feature allows you to precheck the prerequisites such as the instance status, migration task dependencies, and attributes of the source instance before the upgrade. This way, you can identify the factors that may affect the migration progress and resolve the issue in advance to reduce the processing and resource costs during migration.

### **2\. Perform the upgrade**

## (Recommended) Console operations

Below is a brief description of the upgrade process. For detailed step-by-step instructions, see [Upgrade steps](/help/en/polardb/polardb-for-mysql/user-guide/upgrade-steps-for-rds-mysql-to-polardb-mysql).

1.  [(Optional) Check the whitelist configurations](/help/en/polardb/polardb-for-mysql/user-guide/upgrade-steps-for-rds-mysql-to-polardb-mysql#097444d4840s7)
    
    If the whitelists of the primary and read-only nodes of the source RDS instance are different, you must add the whitelists of the read-only nodes to the whitelists of the primary node in advance to ensure that the whitelists of the read-only nodes can be synchronized to the destination PolarDB cluster.
    
    **Note**
    
    The whitelist configuration of a PolarDB cluster applies to the entire cluster and does not support individual configuration for each node. Therefore, after migration is complete, we recommend that you review the [whitelists](/help/en/polardb/polardb-for-mysql/user-guide/configure-a-whitelist-for-a-cluster/) and [database account permissions](/help/en/polardb/polardb-for-mysql/user-guide/account-permissions) of the PolarDB cluster.
    
2.  [Create a PolarDB cluster](/help/en/polardb/polardb-for-mysql/user-guide/upgrade-steps-for-rds-mysql-to-polardb-mysql#title-htp-gzb-xqz)
    
    Go to the [PolarDB cluster buy page](https://polardb-buy.alibabacloud.com), select the **Migrate From RDS** creation method, and specify the source RDS version and instance to purchase a PolarDB cluster. After the purchase is complete, the system performs initialization, precheck, and full data synchronization operations. During this period, the cluster is in the **Creating** state. Wait until the creation is complete.
    
    **Note**
    
    During the upgrade process using **logical migration (DTS data synchronization)**, errors such as **Precheck Failure** may occur. You can address these errors based on the information in the **Error Message**. After the error is resolved, you can click **Continue Migration** to continue the upgrade process. If resolving the current error affects your online business, you can choose to click **Abandon Migration** to end the upgrade process.
    
3.  [(Optional) Add endpoints](/help/en/polardb/polardb-for-mysql/user-guide/upgrade-steps-for-rds-mysql-to-polardb-mysql#aede95dfc055k)
    
    The switchover with endpoints feature allows you to retain the original database endpoints, which enables applications to connect to the PolarDB cluster without modifying any connection configurations. However, only endpoints that exist simultaneously in both the RDS instance and the PolarDB cluster can be exchanged.
    
    1.  You can choose whether to add relevant endpoints on the PolarDB cluster based on your actual situation.
        
    2.  Check the SSL encryption status of the endpoints. The SSL encryption status of the RDS instance and PolarDB cluster endpoints must be consistent.
        
4.  [Switch over services](/help/en/polardb/polardb-for-mysql/user-guide/upgrade-steps-for-rds-mysql-to-polardb-mysql#title-vo1-frt-w5z)
    
    When the **Replication Delay** of the PolarDB cluster is less than 60 seconds, you can perform business switching. Click **Switch Over** to exchange the read-write status of the RDS instance and the PolarDB cluster (change the RDS instance to **Read-only** and the PolarDB cluster to **Read/write**), and also change the data replication direction (synchronize new data from the PolarDB cluster to the RDS instance).
    
    **Important**
    
    -   If you select **Switch****over with Endpoints** when performing switchover, carefully read the [usage notes for endpoint exchange](#99cb3f6b0dq0y). Note that your business may be interrupted for 1 to 5 minutes during the switching process.
        
    -   If data errors occur after the switchover is complete, you can [roll back](/help/en/polardb/polardb-for-mysql/user-guide/migration-data-recovery-steps#title-sgl-23n-jih) the switchover. This allows you to restore the database and data to the original state before the switchover is performed. You can then select [Cancel Migration](/help/en/polardb/polardb-for-mysql/user-guide/migration-data-recovery-steps#e0bc1199be65p) to restore the status before the migration.
        
    
5.  [(Optional) Switch over DTS tasks](/help/en/polardb/polardb-for-mysql/user-guide/upgrade-steps-for-rds-mysql-to-polardb-mysql#5b80633136g7o)
    
    If the source RDS instance is involved in a DTS task (not a one-click migration task), you can modify the source or destination database of the DTS task for a smooth switchover.
    
6.  [Complete the migration](/help/en/polardb/polardb-for-mysql/user-guide/upgrade-steps-for-rds-mysql-to-polardb-mysql#title-9jq-evw-422)
    
    When data migration is complete and the PolarDB cluster runs stably, you can click **Complete Migration** to end the upgrade process if you no longer need data synchronization.
    
7.  [Release or unsubscribe from an ApsaraDB RDS instance](/help/en/polardb/polardb-for-mysql/user-guide/upgrade-steps-for-rds-mysql-to-polardb-mysql#bc994b0b1dmvi)
    
    When your business is running stably on the PolarDB cluster and you no longer need the RDS instance, you can unsubscribe or release the RDS instance.
    

## API operations

Below is a brief description of the upgrade process. For detailed step-by-step instructions, see [Upgrade steps](/help/en/polardb/polardb-for-mysql/user-guide/upgrade-steps-for-rds-mysql-to-polardb-mysql) and related API documentation.

1.  [(Optional) Check the whitelist configurations](/help/en/polardb/polardb-for-mysql/user-guide/upgrade-steps-for-rds-mysql-to-polardb-mysql#097444d4840s7)
    
    If the whitelists of the primary and read-only nodes of the source RDS instance are different, you must add the whitelists of the read-only nodes to the whitelists of the primary node in advance to ensure that the whitelists of the read-only nodes can be synchronized to the destination PolarDB cluster.
    
    **Note**
    
    The whitelist configuration of a PolarDB cluster applies to the entire cluster and does not support individual configuration for each node. Therefore, after migration is complete, we recommend that you review the [whitelists](/help/en/polardb/polardb-for-mysql/user-guide/configure-a-whitelist-for-a-cluster/) and [database account permissions](/help/en/polardb/polardb-for-mysql/user-guide/account-permissions) of the PolarDB cluster.
    
2.  Call [CreateDBCluster](/help/en/polardb/api-polardb-2017-08-01-createdbcluster) to create a PolarDB cluster.
    
    When you call the API to create a PolarDB cluster, set SourceResourceId to the region of the source RDS instance, CreationOption to MigrationFromRDS, and SourceResourceId to the source RDS instance ID. After the call is complete, the system performs initialization, precheck, and full data synchronization operations. During this period, the cluster is in the **Creating** state. Wait until the creation is complete.
    
3.  Call [DescribeDBClusterMigration](/help/en/polardb/api-polardb-2017-08-01-describedbclustermigration) to query the PolarDB cluster status.
    
    When the return parameter MigrationStatus is RDS2POLARDB\_SYNCING, the system has completed the synchronization of full data and is performing incremental synchronization.
    
    **Note**
    
    During the upgrade process using **logical migration (DTS data synchronization)**, errors such as **Precheck Failure** (MigrationStatus is PRE\_CHECK\_FAIL) may occur. You can address these errors based on the information in the Error Message (Comment). After the error is resolved, you can click **Continue Migration** to continue the upgrade process. If resolving the current error affects your online business, you can choose to click **Abandon Migration** to end the upgrade process.
    
4.  Call [ModifyDBClusterMigration](/help/en/polardb/api-polardb-2017-08-01-modifydbclustermigration) to perform migration and switchover.
    
    When the return parameter DelayedSeconds of [DescribeDBClusterMigration](/help/en/polardb/api-polardb-2017-08-01-describedbclustermigration) is less than 60 seconds, you can perform switchover to exchange the read-write status of the RDS instance and the PolarDB cluster (change the RDS instance to **Read-only** and the PolarDB cluster to **Read/write**), and change the data replication direction (synchronize new data from the PolarDB cluster to the RDS instance).
    
    **Important**
    
    -   If you select **Switch****over with Endpoints** when performing switchover, carefully read the [usage notes for endpoint exchange](#99cb3f6b0dq0y). Note that your business may be interrupted for 1 to 5 minutes during the switching process.
        
    -   After migration switching is complete, if you find data anomalies or other issues, you can call [ModifyDBClusterMigration](/help/en/polardb/api-polardb-2017-08-01-modifydbclustermigration) to roll back the migration task to quickly restore to the pre-upgrade state. Afterward, you can still choose to call [CloseDBClusterMigration](/help/en/polardb/api-polardb-2017-08-01-closedbclustermigration) to cancel migration and restore to the state before switching.
        
    -   If data errors occur after the switchover is complete, you can call [ModifyDBClusterMigration](/help/en/polardb/polardb-for-mysql/user-guide/migration-data-recovery-steps#title-sgl-23n-jih) to roll back the switchover. This allows you to restore the database and data to the original state before the switchover is performed. You can then select [CloseDBClusterMigration](/help/en/polardb/api-polardb-2017-08-01-closedbclustermigration) to cancel the migration to restore the status before the migration.
        
    
5.  (Optional) Call [ModifyDtsJobEndpoint](/help/en/polardb/polardb-for-mysql/user-guide/upgrade-steps-for-rds-mysql-to-polardb-mysql#5b80633136g7o) to modify the source or destination instance of the DTS stask.
    
    If the source RDS instance is involved in a DTS task (not a one-click migration task), you can modify the source or destination database of the DTS task for a smooth switchover.
    
6.  Call [CloseDBClusterMigration](/help/en/polardb/api-polardb-2017-08-01-closedbclustermigration) to complete the migration.
    
    When data migration is complete and the PolarDB cluster runs stably, you can click **Complete Migration** to end the upgrade process if you no longer need data synchronization.
    
7.  [Release or unsubscribe from an ApsaraDB RDS instance](/help/en/polardb/polardb-for-mysql/user-guide/upgrade-steps-for-rds-mysql-to-polardb-mysql#bc994b0b1dmvi)
    
    When your business is running stably on the PolarDB cluster and you no longer need the RDS instance, you can unsubscribe or release the RDS instance.
    

### **3\. Adjust the backup policies**

The [backup policies](#230386e61at9v) of the RDS instance and the PolarDB cluster differ in some aspects. After migration is complete, you can [modify the backup policies](/help/en/polardb/polardb-for-mysql/user-guide/configure-backup-settings#task-2122812) in the console according to your actual situation.

## **Related information**

### **Backup policies**

The backup policies of the RDS instance and the PolarDB cluster differ in some aspects.

-   The regular backup cycle and start time remain consistent between the RDS instance and the PolarDB cluster. By default, the PolarDB cluster inherits the same backup cycle and start time from the RDS instance.
    
-   The backup retention period mappings:
    
    -   If the retention period of backup files on the RDS instance is 14 days or less, the retention period of level-1 backup files on the PolarDB cluster is the same as that on the RDS instance.
        
    -   If the retention period of backup files on the RDS instance is between 14 days (exclusive) and 30 days (inclusive), the retention period of level-1 backup files on the PolarDB cluster is fixed to 14 days. The level-2 backup feature is enabled on the PolarDB cluster and the retention period of level-2 backup files in the same region is fixed to 30 days. If the retention period of backup files on the RDS instance is longer than 30 days, the level-2 backup feature is enabled on the PolarDB cluster and the retention period of level-2 backup files in the same region is the same as that on RDS instance.
        
    -   If RDS backups are retained for a long term, the PolarDB retention period of level-1 backups is fixed to 14 days. Level -2 backups are retained for a long period of time.
        
-   If the high-frequency backup feature is enabled on the RDS instance, the high-frequency backup feature is also enabled on the PolarDB cluster by default. The retention periods of high-frequency backup files on the RDS instance and the PolarDB cluster:
    
    -   If the retention period of high-frequency backup files on the RDS instance is not longer than 120 minutes, the retention period of high-frequency backup files on the PolarDB cluster is fixed to 120 minutes.
        
    -   If the retention period of high-frequency backup files on the RDS instance is between 120 minutes (exclusive) and 180 minutes (inclusive), the retention period of high-frequency backup files on the PolarDB cluster is fixed to 180 minutes.
        
    -   If the retention period of high-frequency backup files on the RDS instance is longer than 180 minutes, the retention period of high-frequency backup files on the PolarDB cluster is fixed to 240 minutes.
        

### **Switchover with endpoints**

The one-click upgrade process supports the **address switching** feature. When selected, the system will automatically exchange the connection addresses of the RDS instance and the PolarDB cluster, allowing your applications to automatically connect to the PolarDB cluster without any configuration changes.

#### **Diagram**

The following illustrates the default connection address switching relationship between an RDS instance and a PolarDB cluster. During the actual switching process, you can adjust the connection address switching relationship in the console.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6316148471/CAEQOhiBgICL_MGEtBkiIDBlZDRmOTYwOTNmMTQ3MTY5YjVjODM5MWNkZTcyMzZm5026220_20250409135133.548.svg)

**Note**

The **read-only endpoints** of an RDS instance includes the proxy read-only point and endpoints of read-only instances.

#### **Usage notes**

-   The switchover with endpoints feature does not support IPv6 addresses.
    
-   The switchover with endpoints feature exchanges only the endpoints of the RDS instance and the PolarDB cluster and does not exchange the other configurations such as the vSwitches and virtual IP addresses.
    
-   Endpoints can be exchanged only if both the source RDS instance and the destination PolarDB cluster have the endpoints. By default, the destination PolarDB cluster has only a private primary endpoint and a private cluster endpoint. If the RDS instance has [more than two endpoints](/help/en/rds/apsaradb-rds-for-mysql/view-and-change-the-internal-and-public-endpoints-and-port-numbers-of-an-apsaradb-rds-for-mysql-instance#concept-fbd-ypv-ydb), you must [create corresponding endpoints](/help/en/polardb/polardb-for-mysql/user-guide/apply-for-a-cluster-endpoint-or-a-primary-endpoint) on the destination PolarDB cluster if you want to exchange these endpoints.
    
-   You can choose to exchange the primary endpoint of the source RDS instance with the primary endpoint or default cluster endpoint of the destination PolarDB cluster. The proxy endpoint of the RDS instance can be exchanged with the default cluster endpoint or custom endpoint of the PolarDB cluster. You can specify whether to perform endpoint switchover and select the endpoint pairs to exchange. A PolarDB cluster can have up to seven cluster endpoints. Therefore, up to seven proxy endpoints of the RDS instance can be exchanged with the cluster endpoints of the PolarDB cluster.
    
-   The **Cluster Read-only Endpoint** and **Direct Node Connection Endpoint** of an RDS Cluster Edition instance cannot be exchanged.
    
-   Before you switch private endpoints, make sure that the source RDS instance and the destination PolarDB cluster belong to the same VPC. Otherwise, the original services cannot be connected after the switchover.
    
-   After incremental synchronization is complete, the destination PolarDB cluster enters the **Running** state. Before exchanging the endpoints, you can configure parameters, add read-only nodes, and add address settings.
    
-   If you want to use Data Management (DMS) to log on to the PolarDB cluster after the endpoints are interchanged, make sure that you specify the correct cluster ID and endpoint.
    
-   After the endpoints are switched, the original endpoint entries may remain in the Domain Name System (DNS) cache before the entries expire. During this period, you may fail to connect to the PolarDB cluster, or the instance may allow only read operations. To resolve the issue, we recommend that you refresh the DNS cache.
    

## **FAQ**

### **During the upgrade, the memory usage of the** PolarDB cluster is high. Why?

During the initial full data synchronization, the memory buffer pool of InnoDB caches data to accelerate read and write operations. As a result, the overall memory usage increases.

After the upgrade, you can [adjust the value](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters) of the `innodb_buffer_pool_size` parameter in the console to change the memory buffer pool size and reduce the memory usage.
