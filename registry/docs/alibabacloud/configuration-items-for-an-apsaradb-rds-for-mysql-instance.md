This topic describes the configuration items for an ApsaraDB RDS for MySQL instance.

## **Computing and storage**

### **Instance type**

**Description**

**Change method**

You can change the instance type for all instances.

**Note**

Some legacy instance types cannot be changed directly. In this case, perform the following steps to change the instance type:

1.  [Create a new instance](/help/en/rds/create-an-apsaradb-rds-for-mysql-instance#concept-wzp-ncf-vdb) and select the destination instance type.
    
2.  [Migrate data from the original instance to the new instance](/help/en/rds/apsaradb-rds-for-mysql/migrate-data-between-apsaradb-rds-for-mysql-instances#concept-fxm-bhp-ydb)
    
3.  [Release the original instance](/help/en/rds/apsaradb-rds-for-mysql/release-or-unsubscribe-from-an-instance#concept-r1p-jgj-wdb)
    

[Change configurations](/help/en/rds/apsaradb-rds-for-mysql/change-the-specifications-of-an-apsaradb-rds-for-mysql-instance#concept-efl-pln-wdb)

[Configure automatic performance scaling](/help/en/rds/apsaradb-rds-for-mysql/enable-the-automatic-scale-up-feature-for-an-apsaradb-rds-for-mysql-instance#task-2092452)

### **Storage type**

**Description**

**Change method**

The following storage type changes are supported:

-   For an instance that runs MySQL 8.0 or 5.7 on High-availability Edition or Basic Edition with standard SSDs, you can change the storage type to enterprise SSD (ESSD).
    
-   For an instance that runs MySQL 8.0 or 5.7 on High-availability Edition with premium local disks, you can change the storage type to ESSD.
    
-   When you upgrade a MySQL 5.7 instance from Basic Edition with standard SSDs to High-availability Edition, you can also change the storage type to premium local disks.
    
-   For an instance that uses an ESSD with at least 40 GB of storage, you can change the storage type to premium performance disk.
    
-   For Basic Edition, you can change the storage type from PL0 ESSD to PL1 ESSD, but not from PL1 ESSD to PL0 ESSD.
    
-   For nodes of High-availability Edition and Cluster Edition instances, you can switch the storage type between PL1, PL2, and PL3 ESSDs.
    

[Upgrade from standard SSD to ESSD](/help/en/rds/apsaradb-rds-for-mysql/upgrade-the-storage-type-of-an-apsaradb-rds-for-mysql-instance-from-standard-ssds-to-essds#task-2117848)

[Change from premium local disk to cloud disk](/help/en/rds/apsaradb-rds-for-mysql/change-the-storage-type-from-local-ssd-to-essd#task-2117848)

[Upgrade from Basic Edition to High-availability Edition](/help/en/rds/apsaradb-rds-for-mysql/upgrade-an-apsaradb-rds-for-mysql-instance-from-basic-edition-to-high-availability-edition#task-2326701)

[Change from ESSD to premium performance disk](/help/en/rds/apsaradb-rds-for-mysql/essd-changed-to-universal-cloud-disk)

### **Storage capacity**

**Operation type**

**Description**

**Change method**

Scale-out

Increase the storage capacity by at least 5 GB. The new capacity cannot exceed the maximum storage capacity of the current instance type. For more information, see [Primary instance types](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types#reference-lbw-tyw-5db).

**Note**

For instances that use cloud disks and are not Basic Edition, you can increase the storage capacity online. In most cases, this operation does not cause transient connections.

[Change configurations](/help/en/rds/apsaradb-rds-for-mysql/change-the-specifications-of-an-apsaradb-rds-for-mysql-instance#concept-efl-pln-wdb)

[Configure automatic storage expansion](/help/en/rds/apsaradb-rds-for-mysql/configure-automatic-storage-expansion-for-an-apsaradb-rds-for-mysql-instance#task-2559889)

Scale-in

-   Premium local disks: For High-availability Edition instances that use local disks, you can reduce the storage capacity.
    
-   Cloud disks: For Basic Edition, High-availability Edition, and Cluster Edition instances, you can reduce the storage capacity within the same edition and architecture. The minimum storage capacity to which you can reduce is calculated using the formula `min{Used storage × 1.3, Used storage + 400 GB}`. The new capacity cannot be smaller than the minimum storage capacity supported by the current instance type. The storage capacity can be adjusted in 5 GB increments.
    
    **Note**
    
    -   For Cluster Edition instances that use cloud disks, storage capacity reduction is currently supported only in the Singapore region. This feature is being rolled out to other regions. For the latest information, see the change configuration page.
        
    -   Currently, you can reduce the storage capacity only for instances that run RDS for MySQL 5.7 or 8.0 with a minor engine version of 20210430 or later.
        
    
    Examples of storage capacity reduction
    
    Assume an instance uses a PL1 ESSD with 2,000 GB of storage. The minimum storage capacity for the instance type is 20 GB. The range to which you can reduce the storage capacity varies based on the storage usage:
    
    -   If 10 GB of storage is used, the value calculated by the formula is `min{10 × 1.3, 10 + 400} = 13 GB`. Because 13 GB is less than 20 GB, the minimum capacity to which you can reduce is 20 GB.
        
    -   If 500 GB of storage is used, the value calculated by the formula is `min{500 × 1.3, 500 + 400} = 650 GB`. The minimum capacity to which you can reduce is 650 GB.
        
    -   If 1,500 GB of storage is used, the value calculated by the formula is `min{1500 × 1.3, 1500 + 400} = 1900 GB`. The minimum capacity to which you can reduce is 1,900 GB.
        
    

Premium local disks: [Change configurations](/help/en/rds/apsaradb-rds-for-mysql/change-the-specifications-of-an-apsaradb-rds-for-mysql-instance#concept-efl-pln-wdb)

Cloud disks: [Reduce the capacity of an ESSD](/help/en/rds/support/reduce-the-storage-capacity-of-an-apsaradb-rds-for-mysql-instance-that-uses-essds#main-2272489)

**Note**

-   The storage capacity of a read-only instance must be greater than or equal to the storage capacity of its primary instance.
    
-   If the storage capacity range of the current instance type does not meet your requirements, you can select another instance type.
    

## **Region and zone**

**Configuration item**

**Description**

**Change method**

Region

You cannot change the region of an instance after it is created. To deploy your database service in a different region, create an instance in the destination region. Then, migrate data using Data Transmission Service (DTS). After the migration, modify the endpoint in your application. After you confirm that your business runs as expected, [release the original instance](/help/en/rds/apsaradb-rds-for-mysql/release-or-unsubscribe-from-an-instance#concept-r1p-jgj-wdb).

[Migrate data](/help/en/rds/apsaradb-rds-for-mysql/migrate-data-between-apsaradb-rds-for-mysql-instances#concept-fxm-bhp-ydb)

Zone

You can migrate an instance to another zone in the same region. After the migration, all properties, configurations, and endpoints of the instance remain unchanged.

When you upgrade an RDS for MySQL 5.7 instance from High-availability Edition to RDS Enterprise Edition (formerly Finance Edition), you must change the zone of the instance.

**Note**

-   You cannot migrate a Cluster Edition instance across zones.
    
-   Migrating an instance across zones requires data migration. The more data you have, the longer the migration takes.
    

[Migrate an instance across zones](/help/en/rds/apsaradb-rds-for-mysql/migrate-an-apsaradb-rds-for-mysql-instance-across-zones-in-the-same-region#concept-zwp-gdj-wdb)

## **RDS edition and product type**

**Configuration item**

**Description**

**Change method**

Product Series

Only the following RDS edition changes are supported:

-   MySQL 5.6 RDS Enterprise Edition: Change to High-availability Edition.
    
-   MySQL 8.0 and 5.7 Basic Edition: Change to High-availability Edition.
    
-   MySQL 8.0 and 5.7 High-availability Edition: Change to Cluster Edition.
    

**Note**

Changes to the RDS edition are not supported in other scenarios. To change the RDS edition in other scenarios, perform the following steps:

1.  [Create a new instance](/help/en/rds/create-an-apsaradb-rds-for-mysql-instance#concept-wzp-ncf-vdb) and select the destination edition.
    
2.  [Migrate data from the original instance to the new instance](/help/en/rds/apsaradb-rds-for-mysql/migrate-data-between-apsaradb-rds-for-mysql-instances#concept-fxm-bhp-ydb)
    
3.  [Release the original instance](/help/en/rds/apsaradb-rds-for-mysql/release-or-unsubscribe-from-an-instance#concept-r1p-jgj-wdb)
    

[Change from RDS Enterprise Edition to High-availability Edition for MySQL 5.6](/help/en/rds/apsaradb-rds-for-mysql/change-the-specifications-of-an-apsaradb-rds-for-mysql-instance#concept-efl-pln-wdb)

[Upgrade from Basic Edition to High-availability Edition](/help/en/rds/apsaradb-rds-for-mysql/upgrade-an-apsaradb-rds-for-mysql-instance-from-basic-edition-to-high-availability-edition#task-2326701)

[Upgrade from High-availability Edition to Cluster Edition](/help/en/rds/apsaradb-rds-for-mysql/upgrade-an-apsaradb-rds-for-mysql-instance-from-rds-high-availability-edition-to-rds-cluster-edition#main-2272489)

[Product type](/help/en/rds/product-overview/product-types)

-   High-availability and Cluster editions: You can switch between Standard Edition and Yitian Edition.
    
-   Basic Edition: You can only change from Yitian Edition to Standard Edition.
    

**Note**

-   If you cannot select the destination product type during the change, resources for that type may not be available for purchase in the instance's current zone.
    
    You can go to the instance purchase page to view the available zones for the target type, use the [Migrate Zone](/help/en/rds/apsaradb-rds-for-mysql/migrate-an-apsaradb-rds-for-mysql-instance-across-zones-in-the-same-region) feature to migrate the current instance to a target zone, and then change the configuration.
    
-   If you change the product type, ensure that the new minor engine version is the same as or later than the current minor engine version. You cannot change the product type if the new minor engine version is earlier than the current one.
    

[Change configurations](/help/en/rds/apsaradb-rds-for-mysql/change-the-specifications-of-an-apsaradb-rds-for-mysql-instance#concept-efl-pln-wdb)

## **Networking**

**Configuration item**

**Description**

**Change method**

VPC and vSwitch

For some instances, you can switch the VPC and vSwitch.

[Switch the VPC and vSwitch](/help/en/rds/apsaradb-rds-for-mysql/change-the-vpc-and-vswitch-for-an-apsaradb-rds-for-mysql-instance#task-2134447)

## **Primary and secondary instances**

**Configuration item**

**Description**

**Change method**

Primary/secondary relationship

You can perform automatic or manual primary/secondary failovers. After a failover, the original primary instance becomes the secondary instance.

[Manage primary/secondary failovers](/help/en/rds/apsaradb-rds-for-mysql/switch-workloads-over-between-primary-and-secondary-apsaradb-rds-for-mysql-instances#task-ftz-42j-wdb)

Data replication mode

Change the data replication mode between the primary and secondary instances to improve database availability.

[Query and change the data replication mode](/help/en/rds/apsaradb-rds-for-mysql/change-the-data-replication-mode-of-an-apsaradb-rds-for-mysql-instance#concept-dq5-xfj-wdb)

## **Instance parameters**

**Description**

**Change method**

Modify some parameters of your instance to better meet your business needs.

[Set instance parameters](/help/en/rds/apsaradb-rds-for-mysql/modify-the-parameters-of-an-apsaradb-rds-for-mysql-instance#concept-lfl-xmn-wdb) or [Use a parameter template](/help/en/rds/apsaradb-rds-for-mysql/use-a-parameter-template-to-configure-the-parameters-of-apsaradb-rds-for-mysql-instances#task-1715439)

## Database engine version

**Description**

**Change method**

The following major version upgrades are supported in the console:

-   RDS for MySQL 5.7 → RDS for MySQL 8.0
    
-   RDS for MySQL 5.6 → RDS for MySQL 5.7
    
-   RDS for MySQL 5.5 → RDS for MySQL 5.6
    

**Note**

You cannot skip major versions during an upgrade. For example, you cannot directly upgrade from RDS for MySQL 5.5 to RDS for MySQL 8.0.

[Upgrade the database engine version](/help/en/rds/apsaradb-rds-for-mysql/upgrade-the-major-engine-version-of-an-apsaradb-rds-for-mysql-instance#concept-gnx-vgj-wdb)

## **Maintenance window**

**Description**

**Change method**

Change the maintenance window of your instance.

[Set a maintenance window](/help/en/rds/apsaradb-rds-for-mysql/set-the-maintenance-window-of-an-apsaradb-rds-for-mysql-instance#concept-xqk-jcj-wdb)

## **Billing method**

**Description**

**Change method**

You can switch the billing method of an instance between pay-as-you-go and subscription.

[Change from pay-as-you-go to subscription](/help/en/rds/apsaradb-rds-for-mysql/change-the-billing-method-of-an-apsaradb-rds-for-mysql-instance-from-pay-as-you-go-to-subscription#concept-gtz-lbj-wdb)

[Change from subscription to pay-as-you-go](/help/en/rds/apsaradb-rds-for-mysql/change-the-billing-method-of-an-apsaradb-rds-for-mysql-instance-from-subscription-to-pay-as-you-go#task-2441126)
