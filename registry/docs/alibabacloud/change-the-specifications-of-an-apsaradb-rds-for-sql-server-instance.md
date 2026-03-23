This topic describes how to change the specifications of an ApsaraDB RDS for SQL Server instance, including its instance type, storage capacity, and the performance level (PL) of its storage type. This helps you improve instance performance and resolve storage bottlenecks that are caused by business growth. After you change the specifications, **you do not need to manually restart the instance**. In addition, **some instances support seamless storage capacity expansion, which does not interrupt database access.**

**Note**

For more information about how to change the specifications of a serverless RDS instance, see [Change the scaling range of RCUs for a serverless ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/change-the-scaling-range-of-rcus-for-a-serverless-apsaradb-rds-for-sql-server-instance) and [Expand storage capacity](/help/en/rds/apsaradb-rds-for-sql-server/expand-storage-capacity).

## Changes

Changing the following configurations **does not change the instance endpoint**. To scale out the read capability of your database, you can [create a read-only instance](/help/en/rds/apsaradb-rds-for-sql-server/create-a-read-only-apsaradb-rds-for-sql-server-instance) and [configure read/write splitting](/help/en/rds/apsaradb-rds-for-sql-server/read-only-instances-and-read-write-splitting/) to reduce the load on the primary instance. The primary instance must be a [Cluster Edition instance](/help/en/rds/apsaradb-rds-for-sql-server/rds-cluster-edition).

**Specification item**

**Description**

Version

You can [upgrade the database engine version](/help/en/rds/apsaradb-rds-for-sql-server/upgrade-the-major-engine-version-and-rds-edition-of-an-apsaradb-rds-for-sql-server-instance#concept-1426110) to a later version.

Edition

You can [upgrade from RDS Basic Edition to RDS High-availability Edition or RDS Cluster Edition, or from RDS High-availability Edition to RDS Cluster Edition](/help/en/rds/apsaradb-rds-for-sql-server/upgrade-the-major-engine-version-and-rds-edition-of-an-apsaradb-rds-for-sql-server-instance).

Specifications

-   **If** the [instance family](/help/en/rds/product-overview/instance-families) **remains unchanged and you only need to change the specification code**, you can use the [Modify Configurations](#section-ky2-tnw-b2b) feature.
    
    For example, if the instance family is General-purpose, you can change the instance type from `mssql.s2.medium.s2` to `mssql.s2.large.s2`.
    
-   **To change the instance family**: You can use the [Upgrade Version](/help/en/rds/apsaradb-rds-for-sql-server/upgrade-the-major-engine-version-and-rds-edition-of-an-apsaradb-rds-for-sql-server-instance) operation to upgrade to an instance of the same or a higher-tier family, except in [some cases](/help/en/rds/apsaradb-rds-for-sql-server/upgrade-the-major-engine-version-and-rds-edition-of-an-apsaradb-rds-for-sql-server-instance#section-zlv-66l-ixv). The actual options available are displayed in the console. The instance families are ranked from low to high: Shared < General-purpose < Dedicated (downgrading from a higher-tier instance family is not supported).
    
    For example, you can change the instance family from General-purpose to Dedicated.
    
    **Note**
    
    -   If your RDS instance runs RDS High-availability Edition and uses a shared instance type, you cannot directly upgrade the RDS instance to a dedicated instance type on RDS Cluster Edition.
        
    -   If the required instance family is not displayed in the ApsaraDB RDS console, you can [create](/help/en/rds/apsaradb-rds-for-sql-server/create-an-apsaradb-rds-for-sql-server-instance-1#concept-pv1-n5z-vdb) an RDS instance that uses the required instance family and then [migrate](/help/en/rds/apsaradb-rds-for-sql-server/migrate-data-between-apsaradb-rds-for-sql-server-instances#concept-fxm-bhp-ydb) the data of the original RDS instance to the new RDS instance to upgrade the instance family.
        
    

Storage type

-   For instances that use ESSDs, you can upgrade the PL. Downgrading the PL is not supported. For example, you can upgrade from ESSD PL1 to ESSD PL2.
    
-   For instances that are not on Cluster Edition, you can upgrade the storage type from standard SSD to ESSD. You cannot downgrade the storage type from ESSD back to standard SSD.
    
    **Note**
    
    You cannot upgrade the storage type of Cluster Edition instances from standard SSD to ESSD. However, you can [create](/help/en/rds/apsaradb-rds-for-sql-server/create-an-apsaradb-rds-for-sql-server-instance-1#concept-pv1-n5z-vdb) a new instance that uses ESSDs and then [migrate](/help/en/rds/apsaradb-rds-for-sql-server/migrate-data-between-apsaradb-rds-for-sql-server-instances#concept-fxm-bhp-ydb) the data from the original instance to the new instance.
    

Storage capacity

-   You can only increase the storage capacity for all instances. **You cannot decrease the storage capacity**.
    
-   When you increase the storage space, the minimum increment is 5 GB, and the total storage space cannot exceed the current [storage space limit of the instance type](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types#reference-lbw-tyw-5db).
    

**Note**

-   If the primary instance has read-only instances, the storage capacity of a read-only instance cannot be smaller than that of the primary instance. Therefore, you must first increase the storage capacity of the read-only instances before you increase the storage capacity of the primary instance.
    
-   If the storage capacity range of the current instance type does not meet your needs, select a different instance type.
    

## Prerequisites

Your Alibaba Cloud account has no unpaid renewal orders.

## Usage notes

-   A specification change may involve a cross-host migration, for example, during a major version upgrade. This process deletes host accounts and any programs or files, such as SSIS, SSAS, or SSRS, that are deployed on the original host. Make sure that you migrate or back up your data in advance.
    
    **Important**
    
    ApsaraDB RDS for SQL Server is built on the native Microsoft SQL Server kernel and focuses on providing a stable and efficient managed database service. If your business requires features such as SSIS, SSAS, or SSRS, you need professional O&M skills to ensure business continuity.
    
-   A specification change may trigger a data migration. After the migration is complete, the system switches your workloads over at your selected switchover time. Incremental data synchronization is performed during this period. **During the switchover, a transient connection that lasts for about 30 seconds occurs**. During this period, you cannot perform most operations that are related to the database, accounts, or network. We recommend that you perform the specification change during off-peak hours and make sure that your application has an automatic reconnection mechanism.
    
-   RDS Basic Edition provides only a single database node with no secondary node for hot backup. Therefore, if the node goes down unexpectedly or undergoes a task such as a specification change or version upgrade, it may be unavailable for an extended period. If your business requires high database availability, we recommend that you do not use RDS Basic Edition. Instead, select another edition, such as High-availability Edition.
    
-   If a primary RDS instance has read-only instances, make sure that the storage capacity of each read-only instance is **greater than or equal to** the storage capacity of the primary instance when you expand the storage of the primary instance. Otherwise, the expansion fails. We recommend that you first expand the storage capacity of all read-only instances and then expand the storage capacity of the primary instance.
    

## Billing rules

For more information, see [Change instance specifications](/help/en/rds/product-overview/specification-changes#concept-syv-qk2-vdb).

## Procedure

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the **Configuration Information** section of the **Basic Information** page, click **Change Specifications**.
    
3.  (This step is required only for subscription instances.) In the dialog box, select the specification change method and click **Next step**.
    
    The following change methods are available:
    
    -   **Upgrade** or **Downgrade**: The new configuration takes effect immediately after the specifications are changed. This option is available for both subscription and pay-as-you-go instances.
        
    -   **Elastic Upgrade** (**This feature is available only to whitelisted users**): An elastic upgrade lets you increase the specifications (memory and CPU) and storage capacity of an instance to improve its performance. At the specified restore point-in-time, the instance type is automatically restored to its pre-upgrade type, but the storage capacity is not restored.
        
    
    After a change task is submitted, the system synchronizes the disk data to a new instance. It then switches information, such as the instance ID and endpoints, to the new instance based on the **Immediate Upgrade/Downgrade** setting. The instance ID and endpoints remain unchanged.
    
4.  Change the specifications of the instance. For more information, see [Changeable specification items](#section-zlk-qvz-z2b).
    
    **Important**
    
    -   Some ApsaraDB RDS for SQL Server instances support **seamless storage capacity expansion**. When you **only change the performance level (PL) of the storage type** (for example, from ESSD PL1 to PL2) or **expand the storage capacity**, your database access is not interrupted. Therefore, you do not need to set a switchover time. However, if you also change the instance type, you must configure a switchover time.
        
    -   If the **Change Specifications** page displays the **Switching Time** option even though you have not changed any specifications, this indicates that your RDS instance does not yet support seamless scale-out. You can [upgrade the major or minor engine version of your instance](/help/en/rds/apsaradb-rds-for-sql-server/upgrade-the-major-engine-version-and-rds-edition-of-an-apsaradb-rds-for-sql-server-instance#concept-1426110) and then change the specifications to enable seamless scale-out.
        
    
5.  Select when to apply the new specifications.
    
    -   **Switch Immediately After Data Migration**: A specification change triggers a data migration. If you select this option, a switchover is performed immediately after the data migration is complete.
        
    -   **Switch Within Maintenance Window**: A configuration change may cause a transient connection that lasts for approximately 30 seconds. During this period, most database, account, and network operations are unavailable. Therefore, you can schedule the switchover to occur within the [maintenance window](/help/en/rds/apsaradb-rds-for-sql-server/set-the-maintenance-window-of-an-apsaradb-rds-for-sql-server-instance#concept-xqk-jcj-wdb).
        
    
    **Note**
    
    Some instances support **seamless storage capacity expansion**. For these instances, this configuration item is not displayed and you do not need to configure a switchover time.
    
6.  Read and select Terms of Service, click **Pay Now**, in the dialog box that appears, confirm the instance information before and after the specification change, click **Continue** to complete the payment.
    
    **Warning**
    
    -   After you submit a specification change order, you cannot cancel the order. Therefore, before you submit a specification change order, we recommend that you evaluate whether the new specifications meet your business requirements.
        
    -   After you submit a specification change order, do not perform DDL operations before the specification change is applied.
        
    

## FAQ

**Does changing the performance level (PL) of the storage type cause a database access interruption?**

-   Some ApsaraDB RDS for SQL Server instances support **seamless storage capacity expansion**. When you **only change the performance level (PL) of the storage type** (for example, from ESSD PL1 to PL2) or **expand the storage capacity**, your database access is not interrupted. Therefore, you do not need to set a switchover time. However, if you also change the instance type, you must configure a switchover time.
    
-   If the **Change Specifications** page displays the **Switching Time** option even though you have not changed any specifications, this indicates that your RDS instance does not yet support seamless scale-out. You can [upgrade the major or minor engine version of your instance](/help/en/rds/apsaradb-rds-for-sql-server/upgrade-the-major-engine-version-and-rds-edition-of-an-apsaradb-rds-for-sql-server-instance#concept-1426110) and then change the specifications to enable seamless scale-out.
    

**Can the zone and version be changed?**

-   For instances that do not run SQL Server 2008 R2, you can upgrade the major database version and change the zone and vSwitch of the instance by calling the [ModifyDBInstanceSpec](/help/en/rds/apsaradb-rds-for-sql-server/api-rds-2014-08-15-modifydbinstancespec-sqlserver) API operation. You can also [upgrade the major database version](/help/en/rds/apsaradb-rds-for-sql-server/upgrade-the-major-engine-version-and-rds-edition-of-an-apsaradb-rds-for-sql-server-instance) in the ApsaraDB RDS console.
    
-   For instances that run SQL Server 2008 R2 on high-performance local disks, you can use the ApsaraDB RDS console to [upgrade the version](/help/en/rds/apsaradb-rds-for-sql-server/upgrade-an-apsaradb-rds-for-sql-server-instance-with-local-disks-from-sql-server-2008-r2-to-sql-server-2012-or-sql-server-2016#concept-t13-1wj-dhb) and change the zone at the same time.
    

**Note**

You can also [migrate the zone](/help/en/rds/apsaradb-rds-for-sql-server/migrate-an-apsaradb-rds-for-sql-server-instance-across-zones#concept-zwp-gdj-wdb) separately.

**If I only expand the storage capacity, do I need to migrate data to a new instance?**

No. You only need to perform the expansion operation and do not need to manually migrate data. When you expand the storage capacity, the system checks whether the host has sufficient storage for the expansion. If it does, the capacity is expanded directly without data migration. If not, the system automatically migrates the data to a host that has sufficient storage.

**How long does a specification change take?**

A specification change involves data migration. In most cases, a specification change is completed within 30 minutes.

**If I upgrade the CPU, memory, and disk at the same time, how long will the transient connection last?**

The duration of the transient connection is the same regardless of whether you upgrade the CPU cores, memory, and storage capacity at the same time or separately. In most cases, the transient connection lasts for only a few minutes. When the system switches your workloads, a transient connection may occur or your RDS instance may restart. During the switchover, you cannot perform most operations that are related to databases, accounts, or network settings. We recommend that you change the specifications of your RDS instance within the specified maintenance window. For more information, see [Changeable specification items](#section-zlk-qvz-z2b).

## **Related API**

[Use the ModifyDBInstanceSpec API to change the specifications and storage capacity of an RDS instance](/help/en/rds/apsaradb-rds-for-sql-server/api-rds-2014-08-15-modifydbinstancespec-sqlserver)
