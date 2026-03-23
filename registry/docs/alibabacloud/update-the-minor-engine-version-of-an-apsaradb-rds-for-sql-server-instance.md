This topic describes how to update the minor engine version of an ApsaraDB RDS for SQL Server instance. Minor engine version updates enhance database performance, introduce new features, and fix bugs.

For release notes, see [Release notes for minor engine versions of ApsaraDB RDS for SQL Server](/help/en/rds/apsaradb-rds-for-sql-server/release-notes-for-minor-engine-versions-of-apsaradb-rds-for-sql-server).

To update the minor engine version of an RDS instance that runs a different database engine, see:

-   [Update the minor engine version of an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/update-the-minor-engine-version-of-an-apsaradb-rds-for-mysql-instance)
    
-   [Update the minor engine version of an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/update-the-minor-engine-version-of-an-apsaradb-rds-for-postgresql-instance)
    

## Prerequisites

The RDS instance must meet the following requirements:

-   The billing method is pay-as-you-go or subscription. Serverless RDS instances are not supported. For more information, see [Serverless ApsaraDB RDS for SQL Server instances](/help/en/rds/apsaradb-rds-for-sql-server/serverless/).
    
-   The instance uses a general-purpose or dedicated instance type. Shared instance types are not supported. For more information, see [Instance families](/help/en/rds/product-overview/instance-families).
    

## Limits

You cannot update the minor engine version of the following RDS instances:

-   RDS instances that are added to Active Directory (AD) domains. For more information, see [Join an RDS SQL Server instance to a self-managed domain](/help/en/rds/apsaradb-rds-for-sql-server/connect-an-apsaradb-rds-for-sql-server-instance-to-a-self-managed-domain).
    
-   RDS instances that use Bring Your Own License (BYOL).
    
-   Serverless RDS instances. For more information, see [Overview](/help/en/doc-detail/604344.html).
    
-   RDS instances for which the Transparent Data Encryption (TDE), SSL encryption, or cloud disk encryption feature is enabled. For more information, see [Configure TDE for an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/configure-tde-for-an-apsaradb-rds-for-sql-server-instance), [Configure SSL encryption for an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/configure-ssl-encryption-for-an-apsaradb-rds-for-sql-server-instance), or [Configure the cloud disk encryption feature for an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/configure-disk-encryption-for-an-apsaradb-rds-for-sql-server-instance).
    
-   RDS instances of the classic network type. For more information, see [Change the network type of an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/change-the-network-type-of-an-apsaradb-rds-for-sql-server-instance).
    
-   RDS instances for which the snapshot backup feature is enabled. For more information, see [Enable the snapshot backup feature for an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/enable-the-snapshot-backup-feature-for-an-apsaradb-rds-for-sql-server-instance).
    

## Usage notes

### Before the update

**Warning**

Before you perform an update, we recommend that you create an RDS instance that runs the required minor engine version to test overall compatibility. For more information, see [Restore the data of an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/restore-the-data-of-an-apsaradb-rds-for-sql-server-instance).

-   In most cases, minor engine version updates do not cause compatibility issues. However, they may cause changes in functionality. We recommend that you check the SQL Server cumulative updates (CUs) released by Microsoft to verify whether the SQL Server kernel is updated.
    
-   After you update the minor engine version, you cannot roll back the minor engine version to the previous version.
    

### During the update

-   The update requires several hours to several days based on the data volume of your RDS instance.
    
-   A transient connection that lasts approximately 20 to 30 minutes occurs during the update. We recommend that you perform the update during off-peak hours. Make sure that your application is configured to automatically reconnect to your RDS instance. If the write workload is heavy during the update, a longer period of time is required to complete the update.
    

**Warning**

During the minor engine version update, **do not modify the metadata of the RDS instance**. Metadata modification may cause data inconsistency after the update. Metadata modification includes but is not limited to the following operations: database addition, database deletion, and database recovery model change.

### After the update

-   The value of the **Backup Usage** parameter on the **Basic Information** page of your RDS instance may display as 0. This is automatically corrected after the next scheduled backup completes.
    

## View the minor engine version of your RDS instance

You can use one of the following methods to view the minor engine version of your RDS instance:

-   Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/) and go to the **Basic Information** page of the RDS instance.
    
-   Connect to your RDS instance and execute the `SELECT @@VERSION` statement. For more information, see [Connect to an SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/connection-instance).
    

## Update the minor engine version of your RDS instance

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click its ID.
    
2.  In the **Configuration Information** section, click **Update Minor Engine Version**.
    
    > If you cannot find Update Minor Engine Version, the minor engine version of your RDS instance is already the latest version, or your RDS instance does not meet the requirements described in Prerequisites.
    
3.  In the dialog box that appears, configure the **Latest Version** and **Upgrade Time** parameters and click **OK**. ![Update minor engine version](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5249980261/p268046.png)
    

## Related operations

****Operation****

****Description****

[UpgradeDBInstanceKernelVersion](/help/en/rds/api-update-minor-engine-version)

Updates the minor engine version of an instance.
