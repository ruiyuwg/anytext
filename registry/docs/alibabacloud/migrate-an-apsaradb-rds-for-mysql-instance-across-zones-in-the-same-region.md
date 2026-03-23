This topic describes how to migrate an ApsaraDB RDS for MySQL instance across zones in the same region. The time that is required to complete the migration varies based on the amount of data that needs to be migrated. In most cases, the migration can be complete within hours.

## Prerequisites

-   The RDS instance meets the following requirements:
    
    -   The RDS instance runs RDS High-availability Edition or RDS Basic Edition. Serverless RDS instances are not supported.
        
    -   The RDS instance does not use a phased-out instance type. For more information, see [Instance types for standard primary ApsaraDB RDS for MySQL instances (original x86 architecture)](/help/en/rds/apsaradb-rds-for-mysql/primary-apsaradb-rds-for-mysql-instance-types#section-exw-oe8-kzg). For more information about how to change the instance type, see [Change instance specifications](/help/en/rds/apsaradb-rds-for-mysql/change-the-specifications-of-an-apsaradb-rds-for-mysql-instance#concept-efl-pln-wdb).
        
    -   The RDS instance is in the Running state.
        
        **Note**
        
        If the RDS instance has read-only RDS instances, make sure that the read-only RDS instances are in the Running state. Otherwise, the `OperationDenied.MasterDBlnstancestate` error message is displayed when you migrate the RDS instance to another zone.
        
-   If the RDS instance uses cloud disks, the minor engine version of the RDS instance is 20201031 or later. For more information about how to update the minor engine version, see [Update the minor engine version](/help/en/rds/apsaradb-rds-for-mysql/update-the-minor-engine-version-of-an-apsaradb-rds-for-mysql-instance#concept-gnx-vgj-wdb11).
    
-   The region in which the RDS instance resides consists of multiple zones. For more information about the regions and zones of Alibaba Cloud, see [Regions and zones](/help/en/cloud-migration-guide-for-beginners/latest/regions-and-zones#concept-2459516).
    
-   The shared database proxy is disabled for the RDS instance.
    
    **Note**
    
    -   You can perform the following operation to check whether the shared data proxy is enabled for the RDS instance: On the **Database Proxy** page of the RDS instance, check whether the **Read/Write Splitting (Shared)** tab is displayed. If the tab is displayed, the shared database proxy is enabled for the RDS instance.
        
    -   Shared database proxies are no longer maintained from April 1, 2021. If you still use a shared database proxy, we recommend that you upgrade the shared database proxy to a dedicated database proxy. For example, see [Upgrade the database proxy from a shared database proxy to a dedicated database proxy](/help/en/rds/apsaradb-rds-for-mysql/upgrade-the-database-proxy-of-an-apsaradb-rds-for-mysql-instance-from-a-shared-proxy-to-a-dedicated-proxy).
        
    -   If you use a dedicated database proxy or a general-purpose database proxy, cross-zone migration is not affected.
        
    

For more information about how to migrate an RDS instance that runs a different database engine across zones in the same region, see the following topics:

-   [Migrate an ApsaraDB RDS for PostgreSQL instance across zones in the same region](/help/en/rds/apsaradb-rds-for-postgresql/migrate-an-apsaradb-rds-for-postgresql-instance-across-zones-in-the-same-region#concept-zwp-gdj-wdb)
    
-   [Migrate an ApsaraDB RDS for SQL Server instance across zones in the same region](/help/en/rds/apsaradb-rds-for-sql-server/migrate-an-apsaradb-rds-for-sql-server-instance-across-zones#concept-zwp-gdj-wdb)
    

## Billing rules

You are not charged for the cross-zone migration. This applies even if you migrate your RDS instance from one zone to multiple zones.

## Usage notes

-   **You can migrate your RDS instance only to a zone that resides in the same region as the source zone.** If you want to migrate your RDS instance to a zone that resides in a different region from the source zone, you can [create an RDS instance](/help/en/rds/apsaradb-rds-for-mysql/create-an-apsaradb-rds-for-mysql-instance-1) in the destination region and zone, use DTS to [migrate the data from the original RDS instance to the new RDS instance](/help/en/rds/apsaradb-rds-for-mysql/migrate-data-between-apsaradb-rds-for-mysql-instances), confirm that your workloads run as expected, and then [release the original RDS instance](/help/en/rds/apsaradb-rds-for-mysql/release-or-unsubscribe-from-an-instance).
    
-   **Instance switchover**: During the cross-zone migration, an instance switchover may be triggered. As a result, the endpoint of the primary RDS instance and the database proxy endpoint become unavailable for a short period of time. Make sure that your application is configured to automatically reconnect to your RDS instance. If the application is not configured to automatically reconnect to the RDS instance, you must manually connect the application to the RDS instance. For more information, see [Impacts of an instance switchover](/help/en/rds/apsaradb-rds-for-mysql/untitled-document-1701914031929). The following list describes the scenarios in which an instance switchover is triggered:
    
    -   If the **destination zone of the primary RDS instance** is different from the **current zone of the primary RDS instance**, the primary RDS instance is changed during the cross-zone migration.
        
    -   If the **destination zone of the primary RDS instance** is different from the **current network zone of the primary RDS instance**, the primary RDS instance is changed during the cross-zone migration.
        
-   **VIP change**: If an instance switchover occurs during the cross-zone migration, the virtual IP address (VIP) of your RDS instance is changed while the endpoint of the RDS instance remains unchanged. We recommend that you use an endpoint rather than an IP address of your RDS instance to connect your application to your RDS instance.
    
    -   If your RDS instance is attached to a PolarDB-X 1.0 instance, VIP changes may affect the connectivity between the RDS instance and the PolarDB-X 1.0 instance. We recommend that you fix connectivity issues at the earliest opportunity. For more information, see [Fix database shard connections](/help/en/polardb/polardb-for-xscale/user-guide/fix-database-shard-connections#multiTask294).
        
    -   After the migration, you must immediately delete the cached Domain Name System (DNS) records from the database client. If the database client runs on a JVM, we recommend that you set the time-to-live (TTL) in the JVM configuration to 60 seconds or less. In this case, if the virtual IP address that is bound to the in-use endpoint of your RDS instance changes, your application can query the related DNS records again to obtain the new virtual IP address. Then, your application can connect to the new virtual IP address.
        
        **Note**
        
        For more information about how to set the TTL in the JVM configuration, see [Class InetAddress](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/net/InetAddress.html).
        
-   **Interruption of DTS tasks**: If the RDS instance has an ongoing Data Transmission Service (DTS) task, you must restart the task after the cross-zone migration is complete. For more information, see [What is DTS?](/help/en/dts/product-overview/what-is-dts#concept-26592-zh)
    
-   **Recreation of tables**: A table is recreated when you perform the cross-zone migration. As a result, the creation time of the table is changed, and the value of the CREATE\_TIME field in the INFORMATION\_SCHEMA table is changed.
    
-   If the resource inventory in the zone to which you want to migrate your RDS instance is insufficient, the migration may fail.
    
-   During the cross-zone migration, you cannot change only the vSwitch. For more information about how to change the vSwitch of an RDS instance, see [Change the VPC and vSwitch](/help/en/rds/apsaradb-rds-for-mysql/change-the-vpc-and-vswitch-for-an-apsaradb-rds-for-mysql-instance).
    
-   If your RDS instance uses Premium Enterprise SSDs (ESSDs) and you enable the [Buffer Pool Extension (BPE)](/help/en/rds/apsaradb-rds-for-mysql/buffer-pool-extension-bpe) feature for the instance, you cannot migrate the RDS instance to a zone that does not support the BPE feature. For more information about the regions and zones that support the BPE feature, see [Applicable scope](/help/en/rds/apsaradb-rds-for-mysql/buffer-pool-extension-bpe#01cb7d50b3kuu).
    
    You can disable the BPE feature and then migrate your RDS instance aross zones.
    

## Procedure

1.  Log on to the ApsaraDB RDS console and go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the instance ID.
    
2.  On the **Basic Information** page, click **Migrate Data Across Zones** in the upper-right corner.
    
    **Note**
    
    If **Migrate Data Across Zones** is not displayed, you must check whether your RDS instance meets the prerequisites.
    
3.  In the **Migrate Instance Across Zones** dialog box, configure the Destination Zone parameter, select a vSwitch, and configure the Switching Time parameter. Then, click **Yes**.
    
    **Important**
    
    Make sure that a virtual private cloud (VPC) and at least a vSwitch are available in the destination zone. Otherwise, the instance cannot be migrated to the destination zone. In this case, [create a vSwitch](/help/en/vpc/user-guide/create-and-manage-vswitch#section-ts9-t3s-8vw) in the destination zone first.
    
    **Migration scenario**
    
    **Description**
    
    Migration from one zone to another zone
    
    The **primary** and **secondary** RDS instances reside in the same destination zone.
    
    For example, the primary RDS instance and the secondary RDS instance reside in `Singapore Zone C`, and you migrate the instances to `Singapore Zone A`.
    
    Migration from one zone to multiple zones
    
    The **primary** and **secondary** RDS instances reside in different destination zones.
    
    For example, the primary RDS instance and the secondary RDS instance reside in `Singapore Zone C`, and you migrate the primary RDS instance to `Singapore Zone B` and the secondary RDS instance to Singapore Zone A.
    
    **Note**
    
    -   After the cross-zone migration, the primary and secondary RDS instances reside in different zones to achieve cross-zone disaster recovery (DR).
        
    -   The multi-zone deployment method delivers higher disaster recovery capabilities than the single-zone deployment method. If you select the single-zone deployment method, your database system can withstand server and rack failures. If you select the multi-zone deployment method, your database system can withstand data center failures.
        
    -   If your database system contains primary and secondary RDS instances, we recommend that you migrate your RDS instance to multiple zones to implement cross-zone DR.
        
    
    Migration from multiple zones to one zone
    
    The **primary** and **secondary** RDS instances reside in the same destination zone.
    
    For example, the primary RDS instance resides in `Singapore Zone B`, the secondary RDS instance resides in Singapore Zone A, and you migrate the RDS instances to `Singapore Zone C`.
    
    **Note**
    
    If you select the single-zone deployment method, your database system cannot achieve cross-zone DR. We recommend that you migrate the RDS instances to different zones.
    
    Migration from one zone to multiple zones
    
    The **primary** and **secondary** RDS instances reside in different destination zones.
    
    For example, the primary RDS instance resides in `Singapore Zone B, the secondary RDS instance resides in Singapore Zone C`, and you migrate the primary RDS instances to `Singapore Zone A and the secondary RDS instance to Singapore Zone B`.
    
    **Important**
    
    -   After the cross-zone migration, the system switches your workloads based on the value of the Switching Time parameter. You can set the Switching Time parameter to **Switch Immediately** or **Switch Within Maintenance Window**. If the vSwitch of the RDS instance is changed during the switchover, the RDS instance is connected over new connections. Make sure that your application is configured to automatically reconnect to the RDS instance. Otherwise, you must manually reconnect your application to the RDS instance.
        
    -   If the DNS records cached on the database client are not immediately updated after the migration, some workloads may be switched over to the destination primary zone 10 minutes later. As a result, the RDS instance encounters another instance switchover. Make sure that your application is configured to automatically reconnect to the RDS instance. Otherwise, you must manually reconnect your application to the RDS instance.
        
    -   For more information about the impacts of an instance switchover, see [Impacts of an instance switchover](/help/en/rds/apsaradb-rds-for-mysql/untitled-document-1701914031929).
        
    
4.  In the **Migrate Instance Across Zones** dialog box, confirm the zone information before and after the migration and click **OK**.
    

## Related operations

**Operation**

**Description**

[MigrateToOtherZone](/help/en/rds/api-migrate-an-instance-across-zones#doc-api-Rds-MigrateToOtherZone)

Migrates an instance across zones.

## FAQ

-   If data is written to my RDS instance during cross-zone migration, is original data on the RDS instance affected after the workload switchover? Is the newly written data retained?
    
    Original data is not affected, and the newly written data is retained.
    
    **Important**
    
    An instance switchover occurs during the migration. Make sure that your application is configured to automatically reconnect to the RDS instance. Otherwise, you must manually reconnect your application to the RDS instance. For more information about the impacts of an instance switchover, see [Impacts of an instance switchover](/help/en/rds/apsaradb-rds-for-mysql/untitled-document-1701914031929).
    
-   What factors affect the time that is required for cross-zone migration?
    
    If the RDS instance uses Premium Local SSDs, the time that is required for cross-zone migration varies based on the amount of data on your RDS instance. If a large amount of data exists on the RDS instance, several hours are required. If the RDS instance uses cloud disks, up to one hour is required.
