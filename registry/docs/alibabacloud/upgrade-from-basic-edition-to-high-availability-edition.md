The features that are provided by different SQL Server versions for each RDS edition are different. You can upgrade the major engine version and RDS edition of your ApsaraDB RDS for SQL Server instance based on your business requirements to obtain improved performance and extended features. For example, you can upgrade the major engine version of an RDS instance from SQL Server 2019 SE to SQL Server 2022 SE and upgrade the RDS edition from RDS Basic Edition to RDS High-availability Edition.

## Background information

ApsaraDB RDS for SQL Server is available in three editions which provide differentiated features and capabilities. [The features that are provided by different SQL Server versions on each RDS edition](/help/en/rds/apsaradb-rds-for-sql-server/features-of-apsaradb-rds-instances-that-run-different-sql-server-versions-and-rds-editions#concept-mvj-jkb-wdb) vary.

-   In [RDS Basic Edition](/help/en/rds/apsaradb-rds-for-mysql/rds-basic-edition#concept-nyq-cvw-5db), your RDS instance does not have a secondary RDS instance as a hot standby. If your RDS instance unexpectedly exists or you perform operations such as changing the specifications or upgrading the major engine version of your RDS instance, your database service becomes unavailable for a long period of time.
    
-   In [RDS High-availability Edition](/help/en/rds/apsaradb-rds-for-mysql/rds-high-availability-edition#concept-1443745), an HA architecture consists of a primary RDS instance and a secondary RDS instance is adopted. Data in the primary RDS instance is synchronized to the secondary RDS instance in [semi-synchronous or asynchronous](/help/en/rds/apsaradb-rds-for-sql-server/view-the-data-replication-mode-of-an-apsaradb-rds-for-sql-server-instance) mode. If the primary RDS instance fails, your workloads are automatically switched over to the secondary RDS instance.
    
-   [RDS Cluster Edition](/help/en/rds/apsaradb-rds-for-mysql/rds-cluster-edition#concept-vcs-h1c-5fb) uses the Always On architecture of native SQL Server and supports compute-storage separation. RDS Cluster Edition allows you to create one or more [read-only RDS instances](/help/en/rds/apsaradb-rds-for-sql-server/create-a-read-only-apsaradb-rds-for-sql-server-instance#concept-ghp-wq5-vdb) to implement read/write splitting. This way, you can use RDS to process a large number of read requests.
    

## Usage notes

-   After the upgrade, you cannot roll back the major engine version, RDS edition, or instance type of your RDS instance to the original configuration. The following table describes the upgrade rules.
    
    **Upgrade rules**
    
    **Item**
    
    **Upgrade rule**
    
    Major engine version
    
    -   Upgrade from an SQL Server SE version to an SQL Server EE version
        
    -   Upgrade from an SQL Server SE version to an SQL Server EE (Always On) version
        
    -   Upgrade from an SQL Server Web version to an SQL Server SE version
        
    -   Upgrade from an SQL Server Web version to an SQL Server EE version
        
    -   Upgrade from an SQL Server Web version to an SQL Server EE (Always On) version
        
    
    **Note**
    
    If your RDS instance runs an SQL Server Web version, you must upgrade the SQL Server Web version to an SQL Server SE version and then to an SQL Server EE version or an SQL Server EE (Always On) version.
    
    RDS edition
    
    You can upgrade the RDS edition to a later RDS edition. The following RDS editions are sorted in ascending order: RDS Basic Edition, RDS High-availability Edition, and RDS Cluster Edition. You cannot downgrade the RDS edition.
    
    [Instance family](/help/en/rds/product-overview/instance-families) or instance type
    
    You can upgrade the instance type to an instance type that belongs to the same instance family or that belongs to a higher instance family. The information displayed in the ApsaraDB RDS console shall prevail.
    
    The following instance families are sorted in ascending order: shared instance family, general-purpose instance family, and dedicated instance family. You cannot downgrade the instance family.
    
    **Note**
    
    -   If your RDS instance runs RDS High-availability Edition and uses a shared instance type, you cannot directly upgrade the RDS instance to a dedicated instance type on RDS Cluster Edition.
        
    -   If the required instance family is not displayed in the ApsaraDB RDS console, you can [create](/help/en/rds/apsaradb-rds-for-sql-server/create-an-apsaradb-rds-for-sql-server-instance-1#concept-pv1-n5z-vdb) an RDS instance that uses the required instance family and then [migrate](/help/en/rds/apsaradb-rds-for-sql-server/migrate-data-between-apsaradb-rds-for-sql-server-instances#concept-fxm-bhp-ydb) the data of the original RDS instance to the new RDS instance to upgrade the instance family.
        
    
    **Warning**
    
    -   Before you perform the upgrade, we recommend that you [purchase a pay-as-you-go or serverless RDS instance that has the required specifications](/help/en/rds/apsaradb-rds-for-sql-server/create-an-apsaradb-rds-for-sql-server-instance). This way, you can use the new RDS instance to test the compatibility with your workloads.
        
    -   During the major engine version upgrade, **we recommend that you do not modify metadata of your RDS instance**. Otherwise, data inconsistency issues may occur after the upgrade. For example, we recommend that you do not create databases, delete databases, or modify the recovery models of databases.
        
    

## Limits

You cannot upgrade the major engine versions of the following RDS instances:

-   RDS instances that are added to Active Directory (AD) domains. For more information, see [Join an RDS SQL Server instance to a self-managed domain](/help/en/rds/apsaradb-rds-for-sql-server/connect-an-apsaradb-rds-for-sql-server-instance-to-a-self-managed-domain).
    
-   Serverless RDS instances. For more information, see [Overview](/help/en/doc-detail/604344.html).
    
-   RDS instances of the classic network type. For more information, see [Change the network type](/help/en/rds/apsaradb-rds-for-sql-server/change-the-network-type-of-an-apsaradb-rds-for-sql-server-instance).
    
-   Read-only RDS instances and primary RDS instances that have read-only RDS instances and run RDS Cluster Edition. For more information, see [Create a read-only ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/create-a-read-only-apsaradb-rds-for-sql-server-instance).
    

## Impacts

-   If you start an upgrade task on your RDS instance, you cannot cancel the upgrade task. After the upgrade is complete, your RDS instance cannot be rolled back to the earlier major engine version.
    
-   The settings of your RDS instance, such as the instance name, port, tags, and database accounts, remain unchanged after the upgrade.
    
-   The period of time that is required to complete the upgrade varies based on the data volume of your RDS instance. For more information, see [FAQ](#section-f5j-4ao-ey6).
    
-   In most cases, the upgrade requires workload switchover, which may cause your RDS instance to be unavailable for approximately 20 minutes. Make sure that your application is configured to automatically reconnect to your RDS instance. For more information, see [FAQ](#section-f5j-4ao-ey6).
    
-   The upgrade changes the virtual IP address (VIP) of your RDS instance. To ensure business continuity, we recommend that you use [the endpoint of the RDS instance](/help/en/rds/apsaradb-rds-for-sql-server/apply-for-or-release-a-public-endpoint-for-an-apsaradb-rds-for-sql-server-instance) instead of the IP address to connect your application to the instance.
    
-   After the upgrade, we recommend that you immediately delete the cached DNS records from the database client. If the database client runs on a Java virtual machine (JVM), we recommend that you set the time-to-live (TTL) in the JVM configuration to 60 seconds or less. This way, if the VIP that is bound to the in-use endpoint of your RDS instance changes, your application can query the related DNS records to obtain the new VIP. Then, your application can connect to the new VIP.
    
    **Note**
    
    The following TTL-setting methods are provided for reference:
    
    -   For all JVM-based applications, set the networkaddress.cache.ttl parameter in the $JAVA\_HOME/jre/lib/security/java.security file to 60.
        
    -   For local applications, configure the `networkaddress.cache.ttl java.security.Security.setProperty("networkaddress.cache.ttl" , "60");` setting in the initialization code of local applications. The configuration must be completed before you call the `InetAddress.getByName()` function for the first time to establish a network connection.
        
    
-   If your RDS instance has an ongoing Data Transmission Service (DTS) task, you must re-configure and start the DTS task after the upgrade is complete. For more information, see [What is Data Transmission Service (DTS)?](/help/en/dts/product-overview/what-is-dts#concept-26592-zh)
    

## Billing rules

For more information about the fees for the upgrade, see [Change instance specifications](/help/en/rds/product-overview/specification-changes#concept-syv-qk2-vdb).

## Procedure

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the **Configuration Information** section of the **Basic Information** page, click **Upgrade Version**. In the dialog box that appears, click **OK**.
    
    **Note**
    
    If **Upgrade Version** is not displayed, you must check whether the RDS instance meets the [upgrade requirements](#section-zlv-66l-ixv).
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3753923961/p705568.png)
    
3.  On the **Upgrade Engine Version** page, configure the following parameters. For more information about other parameter settings, see [Procedure](/help/en/rds/apsaradb-rds-for-sql-server/create-an-apsaradb-rds-for-sql-server-instance-1#f1d83650eab2c).
    
    **Note**
    
    When you upgrade the major engine versions of some RDS instances, some major engine versions and RDS editions may be unavailable. For more information, see the "Usage notes" and "Limits" sections in this topic.
    
    **Parameter**
    
    **Description**
    
    **Upgrade To**
    
    Select the major engine version to which you want to upgrade. The options for the **Edition** and **Instance Type** parameters vary based on the value of this parameter. For more information, see [Upgrade rules](#section-4ny-vzm-g48).
    
    **Edition**
    
    Select the [RDS edition to which you want to upgrade](/help/en/rds/apsaradb-rds-for-sql-server/product-editions/).
    
    -   **Basic Edition**: The database system consists of only a primary RDS instance. Computing is decoupled from storage.
        
    -   **High-availability Edition**: The database system consists of a primary RDS instance and a secondary RDS instance. These instances work in high availability mode to achieve balanced performance in all aspects.
        
    -   **Cluster Edition**: The database system consists of a primary RDS instance and multiple secondary RDS instances. These instances work in high availability mode. The secondary RDS instances are accessible.
        
    
    **Note**
    
    For more information about RDS editions, see [Overview](/help/en/rds/overview-11#concept-t5k-fkv-tdb).
    
    **Instance Type**
    
    [Each instance type](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types#reference-lbw-tyw-5db) supports a specified number of cores, memory capacity, maximum number of connections, and maximum IOPS.
    
    **Switching Time**
    
    -   **Switch Immediately After Data Migration**: After the migration is complete, workloads are immediately switched over.
        
    -   **Switch Within Maintenance Window**: After the migration is complete, workloads are switched over during the specified maintenance window.
        
    
4.  Read and select Terms of Service and click **Confirm Order**.
    
    The status of the original RDS instance changes to **Upgrading Version**. If the status of the original RDS instance changes to **Running**, the upgrade is complete. The time that is required to complete the upgrade varies based on the amount of data.
    

## FAQ

Can I change the configuration such as the instance type of my RDS instance during the major engine version upgrade of the RDS instance?

No, you cannot change the configuration such as the specifications of an RDS instance during the major engine version upgrade of the RDS instance. You can change the configuration only after the major engine version is upgraded.

Can the major engine version of an RDS instance be automatically upgraded?

No, the major engine version of an RDS instance cannot be automatically upgraded.

How long does it take to upgrade the major engine version?

## Estimated time

The following table describes the estimated time required to upgrade the major engine version of an instance. The speeds of data backup and restoration are estimated based on the size of uncompressed data.

**Note**

Backup compression is not supported for RDS instances that run SQL Server Web. This may reduce the speeds of data backup and restoration to less than 100 GB per hour.

**Operation**

**Required**

**Estimated time**

**Description**

Create and configure an RDS instance

Yes

10 to 15 minutes

The time required varies based on the RDS edition and instance type of the new RDS instance that runs the required major engine version.

Back up full data

Optional

200 GB per hour

-   If no full backups are performed on the RDS instance within 36 hours, a full backup is performed during the upgrade process to balance the time required for data restoration from incremental transaction log backups and full backups.
    
    We recommend that you perform a full backup before the major engine version upgrade or initiate a restoration task within 36 hours after the system completes the full backup. This reduces the total amount of time required for the upgrade. For more information, see [Back up an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/back-up-an-apsaradb-rds-for-sql-server-instance).
    
-   The backup speed may vary based on the region and time period.
    
-   To obtain more accurate information about backup and restoration performance, refer to the data volume and time for the last upgrade.
    

Restore a full backup on the destination RDS instance

Yes

200 GB per hour

None.

Back up incremental transaction logs on the source RDS instance

Yes

200 GB per hour

Before and after an incremental log backup, it may require another 2 minutes to perform operations such as backup preparation, closure, and resource allocation.

Apply an incremental transaction log backup file to the destination RDS instance

Yes

200 GB per hour

Before and after an incremental log backup, it may require another 2 minutes to perform operations such as backup consistency verification.

Restore a database

Yes

Within 2 minutes

-   Resource consumption: Applying an incremental transaction log is a resource-intensive operation. If a large number of transaction logs are generated for an RDS instance that has small specifications, such as 2 CPU cores and 4 GB of memory, the data restoration speeds decreases.
    
-   Accelerated Database Recovery option: The Accelerated Database Recovery option is supported for RDS instances that run SQL Server 2019 or later. This reduces the time for database restoration. You can evaluate whether to enable the option based on **official Microsoft** documentation.
    

Switch workloads to the new RDS instance and migrate network connections

Yes

10 minutes

None.

## Example

Test instance: The RDS instance has 4 CPU cores and 8 GB of memory, and the volume of data on the RDS instance is 600 GB.

-   Time required to create and configure an RDS instance: approximately 12 minutes.
    
-   Time required to back up full data: approximately 3 hours. The time required is calculated by using the following calculation: Time required = 600 GB/200 GB per hour = 3 hours.
    
-   Time required to restore a full backup on the destination RDS instance: approximately 3 hours. The time required is calculated by using the following calculation: Time required = 600 GB/200 GB per hour = 3 hours.
    
-   Time required to back up incremental transaction logs on the source RDS instance: approximately 5 minutes. The time required is calculated by using the following calculation: Time required = 10 GB/200 GB per hour + Time loss of 2 minutes = 5 minutes.
    
-   Time required to apply an incremental transaction log backup file to the destination RDS instance: approximately 5 minutes. The time required is calculated by using the following calculation: Time required = 10 GB/200 GB per hour + Time loss of 2 minutes = 5 minutes.
    
-   Time required to restore a database: within 2 minutes
    
-   Time required to switch workloads to the new RDS instance and migrate network connections: approximately 10 minutes.
    

In this example, if no full backups are performed on the RDS instance within 36 hours, the total duration is estimated to be approximately 6 hours and 34 minutes. If a full backup is performed on the RDS instance within 36 hours, the duration is estimated to be approximately 3 hours and 34 minutes.

## Upgrade suggestions

-   Maintenance window: We recommend that you upgrade the major engine version during off-peak hours to minimize the impacts on your workloads.
    
-   Long-running transactions: During the upgrade, we recommend that you do not perform long-running transactions, such as creating or rebuilding indexes and archiving data. This helps prevents the time that is required to **restore a database** from being prolonged.
    

How do I configure the switching time when I upgrade the major engine version of an RDS instance across time zones?

-   Scenario: You reside in the UAE (Dubai) region and use India Standard Time (IST, UTC+5:30) for an RDS instance that resides in the Singapore region. Your time zone is Gulf Standard Time (GST, UTC+4). In this case, it is important to determine the switching time when you upgrade the major engine version of the RDS instance to avoid service interruptions.
    
-   Purpose: You plan to perform an upgrade at 02:00 on May 11, 2024, UTC+5:30.
    
-   Solution: Convert times zones. The time zone of the RDS instance is UTC+5:30. Your time zone is UTC+4, which is also the time zone of your browser. You do not need to consider the region in which the RDS instance resides. In the example, May 11, 2024, 02:00 UTC+5:30 can be converted to May 11, 2024, 00:30 UTC+4. You must log on to the ApsaraDB RDS console and configure the switching time of the RDS instance at 00:30 on May 11, 2024.
    
-   The following list describes how to convert time zones:
    
    1.  Convert the IST time May 11, 2024, 02:00 to the Coordinated Universal Time (UTC) time. IST is 5 hours and 30 minutes ahead of UTC. Therefore, the result is May 10, 2024, 20:30 UTC.
        
    2.  Convert the UTC time May 10, 2024, 20:30 to the GST time. UTC is 4 hours behind GST. Therefore, the result is May 11, 2024, 00:30, GST.
        

## Reference

You can also upgrade the major engine version by using API. For more information, see [ModifyDBInstanceSpec](/help/en/rds/apsaradb-rds-for-sql-server/api-rds-2014-08-15-modifydbinstancespec-sqlserver).
