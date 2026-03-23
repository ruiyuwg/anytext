This topic describes how to change the specifications of an ApsaraDB RDS for PostgreSQL instance. The specifications include the RDS edition, instance type, and storage capacity.

## Prerequisites

-   The billing method of your RDS for PostgreSQL instance is subscription or pay-as-you-go.
    
    **Note**
    
    To change the specifications of a Serverless RDS for PostgreSQL instance, see [Serverless ApsaraDB RDS for PostgreSQL instances](/help/en/rds/apsaradb-rds-for-postgresql/serverless-apsaradb-rds-for-postgresql-instances/).
    
-   Your RDS for PostgreSQL instance is in the Running state.
    
-   Your Alibaba Cloud account does not have overdue renewal orders.
    

## Configuration items

You can create read-only RDS instances to offload read requests from a primary RDS instance in your database system. This way, the read capability of your database system is increased. For more information, see [Overview of read-only ApsaraDB RDS for PostgreSQL instances](/help/en/rds/overview-of-read-only-apsaradb-rds-for-postgresql-instances#concept-rst-2z1-ygb) and [Create a read-only ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/create-a-read-only-apsaradb-rds-for-postgresql-instance#concept-gsm-zz1-ygb).

**Warning**

When you change the specifications of your RDS instance, a transient connection or instance restart may occur during the workload switchover. You cannot perform most operations that are related to databases, accounts, and network settings during the switchover. We recommend that you change the specifications of your RDS instance within the maintenance window. For more information, see [Configure a maintenance window](/help/en/rds/apsaradb-rds-for-postgresql/set-the-maintenance-window-of-an-apsaradb-rds-for-postgresql-instance#concept-xqk-jcj-wdb).

**Configuration item**

**Description**

**Impact**

RDS edition

You can upgrade an RDS instance from RDS Basic Edition to RDS High-availability Edition. For more information, see [Upgrade an ApsaraDB RDS for PostgreSQL instance from Basic Edition to High-availability Edition](/help/en/rds/apsaradb-rds-for-postgresql/upgrade-an-apsaradb-rds-for-postgresql-instance-from-basic-edition-to-high-availability-edition#task-1999514).

A transient connection occurs.

Product type

You can change the product type of your RDS instance between YiTian and standard. For more information about the differences between YiTian and standard instances, see [Product types](/help/en/rds/product-overview/product-types).

**Note**

-   If you cannot select the required product type when you change the specifications of the RDS instance, no resources are available in the zone in which the RDS instance resides.
    
    You can go to the ApsaraDB RDS buy page to view the zones that support the required product type, migrate the RDS instance to a zone that can provide the required resources, and then change the product type. For more information, see [Migrate an ApsaraDB RDS for PostgreSQL instance across zones in the same region](/help/en/rds/apsaradb-rds-for-postgresql/migrate-an-apsaradb-rds-for-postgresql-instance-across-zones-in-the-same-region#concept-zwp-gdj-wdb).
    
-   If you want to change the product type of an RDS instance, make sure that the minor engine version of the RDS instance after the change is later than or the same as the current minor engine version. If the minor engine version after the change is earlier than the current minor engine version, the product type change fails.
    
-   YiTian RDS instances do not support the [plv8](https://plv8.github.io/) and [rdkit](/help/en/rds/apsaradb-rds-for-postgresql/use-the-rdkit-plug-in#task-2448969) extensions. When you change the product type from standard to YiTian, make sure that these extensions are not used. For more information about the extensions supported by each product type, see [Extensions supported by ApsaraDB RDS for PostgreSQL](/help/en/rds/apsaradb-rds-for-postgresql/extensions-supported-by-apsaradb-rds-for-postgresql).
    

A transient connection occurs.

Storage type

You can change the storage type of your RDS instance.

-   If your RDS instance uses cloud disks, take note of the following points:
    
    -   You can upgrade the storage type of your RDS instance from **standard SSD** to Enterprise SSD (ESSD). ESSDs support the following performance levels (PLs): **PL1**, **PL2**, and **PL3**. You cannot downgrade the storage type of your RDS instance from ESSD to standard SSD.
        
    -   You can upgrade or downgrade the ESSD storage type of your RDS instance between **ESSD PL1**, **ESSD PL2**, and **ESSD PL3**.
        
    -   You can change the storage type from ESSD to **Premium ESSD** but cannot from Premium ESSD to ESSD.
        
-   If your RDS instance uses Premium Local SSDs, you cannot change the storage type of the RDS instance.
    

**Note**

For more information about the performance differences among different storage types, see [Storage types](/help/en/rds/product-overview/storage-types#concept-kpg-5wx-5db).

-   If you upgrade or downgrade the ESSD storage type of your RDS instance between **ESSD PL1**, **ESSD PL2**, and **ESSD PL3**, your business running on the instance is not interrupted.
    
-   If you change the storage type from ESSD to **Premium ESSD**, your business running on the instance is not interrupted.
    
-   If you upgrade the storage type of your RDS instance from **standard SSD** to **ESSD**, your business running on the instance is transiently interrupted.
    

Instance type

You can change the instance type of your RDS instance.

**Note**

-   You can change the instance type of an RDS instance that runs RDS High-availability Edition from a general-purpose instance type to a dedicated instance type that can provide more than 16 CPU cores. For more information, see [Instance types for primary ApsaraDB RDS for PostgreSQL instances](/help/en/rds/apsaradb-rds-for-postgresql/primary-apsaradb-rds-for-postgresql-instance-types#concept-2096578).
    
-   After you change the instance type of your RDS instance from a general-purpose instance type to a dedicated instance type, you can also change the instance type of the RDS instance to a general-purpose instance type. For more information, see [Instance types for primary ApsaraDB RDS for PostgreSQL instances](/help/en/rds/apsaradb-rds-for-postgresql/primary-apsaradb-rds-for-postgresql-instance-types#concept-2096578).
    
-   Some general-purpose instance types that are to be phased out cannot be changed. For more information, see [\[EOS/Discontinuation\] Some general-purpose instance types are no longer available for purchase for ApsaraDB RDS for PostgreSQL instances on RDS Basic Edition from January 31, 2023](/help/en/rds/apsaradb-rds-for-postgresql/some-general-purpose-instance-types-are-no-longer-available-for-purchase#concept-2256267).
    
-   You **cannot** change the instance to a [Basic Edition instance type with the YiTian architecture](/help/en/rds/apsaradb-rds-for-postgresql/primary-apsaradb-rds-for-postgresql-instance-types).
    

-   If you upgrade the instance type of your RDS instance, a transient connection occurs.
    
-   If you downgrade the instance type of your RDS instance, the primary RDS instance is restarted. After the primary RDS instance is restarted, a transient connection occurs.
    
-   When you change the instance type of your RDS instance, make sure that specific kernel parameters of the read-only RDS instance are consistent with those of the primary RDS instance. If you change the kernel parameters of the read-only RDS instance, the read-only RDS instance is restarted and a transient connection occurs.
    

Storage capacity

You can expand or reduce the storage capacity of your RDS instance.

-   Storage capacity expansion: You can expand the storage capacity of your RDS instance at a step size of 5 GB. The new storage capacity of your RDS instance cannot exceed the maximum storage capacity that is supported by the instance type of the RDS instance. For more information, see [Primary ApsaraDB RDS instance types](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types#reference-lbw-tyw-5db).
    
-   Storage capacity reduction: You can reduce the storage capacity of your RDS instance that uses cloud disks without the need to change the RDS edition or architecture of the RDS instance. The new storage capacity of your RDS instance must be greater than or equal to the minimum storage capacity that is supported by the instance type of the RDS instance. You can use the following formula to calculate the minimum storage capacity to which you can reduce your RDS instance: `min{Used storage × 1.3, Used storage + 400 GB}`. You can reduce the storage capacity at a step size of 5 GB. For more information, see [Reduce the storage capacity of an ApsaraDB RDS for PostgreSQL instance that uses cloud disks](/help/en/rds/apsaradb-rds-for-postgresql/reduce-the-storage-capacity-of-an-apsaradb-rds-for-postgresql-instance-that-uses-essds).
    
    **Example**
    
    Your RDS instance uses a PL1 ESSD that provides 2,000 GB of storage capacity. The minimum storage capacity that is supported by the instance type of the RDS instance is 20 GB.
    
    -   If 10 GB of storage is used, the value calculated by using the preceding formula is 13 GB. In this case, the minimum storage capacity to which you can reduce your RDS instance is 20 GB.
        
    -   If 500 GB of storage is used, the value calculated by using the preceding formula is 650 GB. In this case, the minimum storage capacity to which you can reduce your RDS instance is 650 GB.
        
    -   If 1,500 GB of storage is used, the value calculated by using the preceding formula is 1,900 GB. In this case, the minimum storage capacity to which you can reduce your RDS instance is 1,900 GB.
        
    

**Note**

-   If your RDS instance uses Premium Local SSDs, we recommend that you use the major version upgrade feature to upgrade the RDS instance to an instance that runs a later database engine version and uses cloud disks. You can reduce the storage capacity of your RDS instance when you upgrade the major engine version. For more information, see [Upgrade the major engine version](/help/en/rds/apsaradb-rds-for-postgresql/upgrade-the-major-engine-version-of-an-apsaradb-rds-for-postgresql-instance/#task-2039768).
    
-   If your RDS instance is created before October 10, 2022 and uses an original architecture, you must update the minor engine version to the latest version and then reduce the storage capacity of the RDS instance. For more information, see [Update the minor engine version](/help/en/rds/apsaradb-rds-for-postgresql/update-the-minor-engine-version-of-an-apsaradb-rds-for-postgresql-instance).
    
-   You can manually change the specifications of your RDS instance that uses cloud disks to adjust the storage capacity. You can also enable the automatic storage expansion feature for your RDS instance. After the feature is enabled, the system automatically expands the storage capacity to ensure stable service operations when the percentage of the remaining storage reaches the specified threshold. For more information, see [Configure automatic storage expansion for an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/configure-automatic-storage-expansion-for-an-apsaradb-rds-for-postgresql-instance#task-2220199).
    
-   If the RDS instance is being backed up, you can start a storage capacity expansion task after the backup is complete. We recommend that you expand the storage capacity of the RDS instance at the point in time other than the backup time.
    

-   If the primary RDS instance uses cloud disks, take note of the following points:
    
    -   No transient connections occur during the storage capacity expansion.
        
    -   Transient connections occur during the storage capacity reduction.
        
-   If your RDS instance uses Premium Local SSDs, a transient connection occurs.
    

## Billing rules

For more information, see [Billing rules for configuration changes](/help/en/rds/product-overview/specification-changes#concept-syv-qk2-vdb).

## Usage notes

-   If your RDS instance runs RDS Basic Edition, no secondary RDS instance is provided as hot standby. In this case, if your RDS instance unexpectedly exits, your database service may be unavailable for a long period of time. If you change the specifications or upgrade the database engine version of your RDS instance, your database service may also be unavailable for a long period of time. If you have high requirements for service availability, we recommend that you do not use RDS Basic Edition.
    
    **Note**
    
    Whether a transient connection occurs during a specification change varies based on the configuration items that you want to change. For more information, see the **Impact** column in the "Configuration items" section of [Change the specifications of an ApsaraDB RDS for PostgreSQL instance](#section-zlk-qvz-z2b).
    
-   When you change the specifications of your RDS instance, a transient connection or instance restart may occur during the workload switchover. You cannot perform most of the operations that are related to databases, accounts, and network settings during the switchover. We recommend that you change the specifications of your RDS instance within the maintenance window. For more information, see [Set the maintenance window of an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/set-the-maintenance-window-of-an-apsaradb-rds-for-postgresql-instance#concept-xqk-jcj-wdb). For more information about the impacts of configuration items, see the **Impact** column in the "Configuration items" section of [Change the specifications of an ApsaraDB RDS for PostgreSQL instance](#section-zlk-qvz-z2b).
    
-   After you change the specifications of your RDS instance, the ID and endpoints of the RDS instance remain unchanged.
    
-   After you change the specifications of your RDS instance, you do not need to manually restart the instance.
    
-   If a read-only RDS instance is attached to your primary RDS instance and you want to expand the storage capacity, make sure that the storage capacity of the read-only RDS instance is greater than or equal to that of the primary RDS instance. Otherwise, the storage capacity cannot be expanded. In this case, we recommend that you expand the storage capacity of the read-only RDS instance before you expand the storage capacity of the primary RDS instance.
    
-   If read-only RDS instances are attached to your primary RDS instance and you want to **change the storage capacity**, make sure that the storage capacity of each read-only RDS instance is greater than or equal to that of the primary RDS instance. We recommend that you change the storage capacity based on the following description:
    
    -   **Storage capacity expansion:** You must **first expand the storage capacity of the read-only RDS instances**. After the storage capacity of all read-only RDS instances is expanded, you can expand the storage capacity of the primary RDS instance.
        
    -   **Storage capacity reduction:** You must **first reduce the storage capacity of the primary RDS instance**. After the storage capacity of the primary RDS instance is reduced, you can reduce the storage capacity of the read-only RDS instances.
        
-   If read-only RDS instances that use Premium Local SSDs are attached to your primary RDS instance and you want to **change the instance specifications**, make sure that the specifications of each read-only RDS instance are greater than or equal to the specifications of the primary RDS instance. If read-only RDS instances that use cloud disks are attached to your primary RDS instance and you want to change the instance specifications, make sure that the specifications of each read-only RDS instance are greater than or equal to half the specifications of the primary RDS instance. We recommend that you change the instance specifications based on the following description:
    
    -   **Instance specification upgrade:** You must **first upgrade the specifications of the read-only RDS instances**. After the specifications of all read-only RDS instances are upgraded, you can upgrade the specifications of the primary RDS instance.
        
    -   **Instance specification downgrade:** You must **first downgrade the specifications of the primary RDS instance**. After the specifications of the primary RDS instance are downgraded, you can downgrade the specifications of the read-only RDS instances.
        
-   When you upgrade the instance type of your RDS instance, make sure that the vSwitch to which the RDS instance is connected has at least two available IP addresses. If the vSwitch does not have sufficient available IP addresses, the instance type upgrade fails. You can log on to the [Virtual Private Cloud (VPC) console](https://vpc.console.alibabacloud.com/vpc) to check the number of available IP addresses of the vSwitch. If the vSwitch does not have sufficient available IP addresses, switch your RDS instance to a different vSwitch that can provide sufficient available IP addresses before you upgrade the instance type. For more information, see [Change the vSwitch](/help/en/rds/apsaradb-rds-for-postgresql/switch-an-apsaradb-rds-for-postgresql-instance-to-a-different-vswitch).
    

## Procedure

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the **Configuration Information** section of the **Basic Information** page, click **Change Specifications**.
    
3.  (For subscription instances only) In the dialog box that appears, select a specification change method and click **Next step**.
    
    **Upgrade** or **Downgrade**: After you submit a specification change order, the new specifications immediately take effect. Both specification change methods are supported for subscription RDS instances and pay-as-you-go RDS instances.
    
    After you submit a specification change order, the system synchronizes the data of the RDS instance from the disk to a new RDS instance. Then, the system switches the information, such as the ID and endpoints, about the RDS instance over to the new RDS instance based on the specification change method that you select.
    
    **Warning**
    
    If you select **Downgrade**, the primary RDS instance is restarted during the switchover. We recommend that you change the specifications of the RDS instance within the maintenance window. For more information, see [Set the maintenance window of an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/set-the-maintenance-window-of-an-apsaradb-rds-for-postgresql-instance#concept-xqk-jcj-wdb)
    
4.  Change the specifications of the RDS instance. For more information about the configuration items whose settings can be changed, see [Change the specifications of an ApsaraDB RDS for PostgreSQL instance](#section-zlk-qvz-z2b).
    
5.  Configure the Switching Time parameter.
    
    -   **Execute Immediately**: The specification change triggers a data migration to a new RDS instance. If you select this option, the system immediately applies the specification change and switches your workloads over to the new RDS instance after the migration process is complete.
        
    -   **Switch Within Maintenance Window**: When the specification change is being applied, a transient connection or instance restart may occur and you cannot perform most of the operations that are related to databases, accounts, and network settings. If you select this option, the workloads are switched during the maintenance window that you specify. For more information, see [Set the maintenance window of an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/set-the-maintenance-window-of-an-apsaradb-rds-for-postgresql-instance#concept-xqk-jcj-wdb).
        
    
    **Note**
    
    -   If your RDS instance uses cloud disks and you only expand the storage capacity or change the ESSD storage type between different PLs, your workloads are not affected. The system immediately switch over your workloads. In this case, you do not need to select **Switch Within Maintenance Window**.
        
    -   If your RDS instance uses Premium Local SSDs, we recommend that you select **Switch Within Maintenance Window**. If the host on which your RDS instance resides can provide sufficient storage resources for storage capacity expansion, the system immediately switch over your workloads, and your workloads are not affected. If the host on which your RDS instance resides cannot provide sufficient storage resources for storage capacity expansion, the system migrates the data of your RDS instance to a new RDS instance. After the migration is complete, the system switches over your workloads to the new RDS instance during the maintenance window. Incremental synchronization is performed during the switchover.
        
    
6.  On the **Change Specifications** page, confirm the changes to the instance, read the Terms of Service, and click **Confirm Order**, and complete the payment.
    
    **Warning**
    
    -   After you submit a configuration change order, you cannot cancel it. Carefully evaluate your business requirements before you change the configurations.
        
    -   To ensure that the configuration change completes successfully, do not perform DDL operations from the time you submit the order to the time the configuration change is complete.
        
    

## FAQ

-   How do I change the storage type of my RDS instance from cloud disk to Premium Local SSD?
    
    For more information, see [How do I change the storage type of an ApsaraDB RDS instance from cloud disk to local disk?](/help/en/rds/support/how-do-i-change-the-storage-type-from-standard-ssd-to-premium-local-ssd#concept-zz4-1ks-zgb)
    
-   If I want to expand only the storage capacity of my RDS instance, do I need to migrate the data of my RDS instance to a new RDS instance?
    
    -   If your RDS instance uses cloud disks, you do not need to migrate the data of the RDS instance to a new RDS instance.
        
    -   If your RDS instance uses Premium Local SSDs, you must check storage resources of the host on which your RDS instance resides.
        
        -   If the host can provide sufficient storage resources, you do not need to migrate the data.
            
        -   If the host cannot provide sufficient storage resources, you need to migrate the data to another host that can provide sufficient storage resources.
            
    
-   How do I reduce the storage capacity of my RDS instance?
    
    -   If your RDS instance uses Premium Local SSDs, we recommend that you use the major version upgrade feature to upgrade the RDS instance to an instance that runs a later database engine version and uses cloud disks. You can reduce the storage capacity of your RDS instance when you upgrade the major engine version. For more information, see [Upgrade the major version](/help/en/rds/apsaradb-rds-for-postgresql/upgrade-the-major-engine-version-of-an-apsaradb-rds-for-postgresql-instance/#task-2039768).
        
    -   If your RDS instance uses cloud disks, follow the instructions provided in [Reduce the storage capacity of an ApsaraDB RDS for PostgreSQL instance that uses ESSDs](/help/en/rds/apsaradb-rds-for-postgresql/reduce-the-storage-capacity-of-an-apsaradb-rds-for-postgresql-instance-that-uses-essds) to reduce the storage capacity.
        
    
-   If I upgrade the CPU cores, memory, and storage capacity of an RDS instance at the same time, how long does a transient connection last?
    
    The transient connection lasts the same as the transient connection that occurs when you separately upgrade the CPU cores, memory, or storage capacity of an RDS instance. In most cases, the transient connection lasts for a few minutes. When the system switches your workloads, a transient connection may occur, or your RDS instance may be restarted. During the switchover, you cannot perform most of the operations that are related to databases, accounts, and network settings. We recommend that you change the specifications of your RDS instance within the specified maintenance window. For more information about the impacts of different configuration items, see [Configuration items](#table-7wi-aj1-kx3).
    
-   If I separately change the specifications of a read-only RDS instance, is the primary RDS instance affected?
    
    In most cases, if you separately change the specifications of a read-only RDS instance, the primary RDS instance **is not** affected. However, you must change the specifications of a read-only RDS instance based on the primary RDS instance. For more information, see [Usage notes](#section-jt4-ymc-ga5).
    

## Related APIs

**API**

**Description**

[ModifyDBInstanceSpec](/help/en/rds/api-change-instance-configuration#reference-ddv-lp2-12b)

Changes the configurations of an ApsaraDB RDS instance.
