You can change the storage type of an ApsaraDB RDS for MySQL instance from Premium Local SSD to Premium Enhanced SSD (ESSD) or standard ESSD in the console to improve elasticity.

## Prerequisites

-   Your primary ApsaraDB RDS for MySQL instance runs one of the following versions:
    
    -   ApsaraDB RDS for MySQL 8.0 or 5.7 on High-availability Edition that uses Premium Local SSDs
        
    
    **Note**
    
    ApsaraDB RDS for MySQL 5.6 instances support only Premium Local SSDs. You cannot directly change the storage type of these instances to other cloud disks. For alternative solutions, see the [FAQ](#section-b4k-6lt-tvu) section.
    
-   The minor engine version of your instance is 20201031 or later. For more information about how to upgrade the minor engine version, see [Upgrade the minor engine version](/help/en/rds/apsaradb-rds-for-mysql/update-the-minor-engine-version-of-an-apsaradb-rds-for-mysql-instance#concept-gnx-vgj-wdb11).
    
-   Your instance does not have [read-only instances](/help/en/rds/overview-of-read-only-apsaradb-rds-for-mysql-instances#concept-cst-z45-vdb) or [disaster recovery instances](/help/en/rds/apsaradb-rds-for-mysql/create-a-disaster-recovery-apsaradb-rds-for-mysql-instance#concept-bpb-gw5-vdb).
    
-   The [automatic performance scaling](/help/en/rds/apsaradb-rds-for-mysql/enable-the-automatic-scale-up-feature-for-an-apsaradb-rds-for-mysql-instance#task-2092452) feature is disabled for your instance.
    
-   The [database proxy](/help/en/rds/apsaradb-rds-for-mysql/enable-and-configure-the-dedicated-proxy-feature-for-an-apsaradb-rds-for-mysql-instance#task-2167178) feature is disabled for your instance.
    
-   Your instance uses a VPC and does not have a classic network endpoint.
    
-   Your instance does not use IPv6 or connect to multiple VPCs. This prerequisite applies only to special scenarios.
    
-   Your instance is in the Running state.
    

**Note**

If your instance does not meet the preceding prerequisites, you must create an ApsaraDB RDS instance that uses Premium ESSDs or standard ESSDs and migrate data from the original instance to the new instance. For more information, see [Migrate data between ApsaraDB RDS for MySQL instances](/help/en/rds/apsaradb-rds-for-mysql/migrate-data-between-apsaradb-rds-for-mysql-instances#concept-fxm-bhp-ydb).

## Differences between high-performance local disks and cloud disks

**Metric**

**Premium Local SSD**

**Premium performance disk**

**ESSD**

I/O performance

★★★★★

Delivers low I/O latency and high I/O performance:

-   IOPS: Varies based on the instance type.
    
-   I/O latency: 10 to 50 microseconds
    

★★★★★★

Provides the [Buffer Pool Extension (BPE) feature](/help/en/rds/apsaradb-rds-for-mysql/buffer-pool-extension-bpe), [I/O performance burst feature](/help/en/rds/apsaradb-rds-for-mysql/i-o-performance-burst), and [data archiving feature](/help/en/rds/apsaradb-rds-for-mysql/rds-mysql-data-archiving-function). The following list describes the I/O performance:

-   IOPS: Varies based on the disk specifications and instance type.
    
-   I/O latency: 100 to 200 microseconds
    

★★★★★

Delivers higher I/O performance than standard SSDs:

-   IOPS: Varies based on the disk specifications and instance type.
    
-   I/O latency: 100 to 200 microseconds
    

Configuration flexibility

★★★★

Provides various configuration options and lets you adjust the storage capacity separately. For some RDS instances that use Premium Local SSDs, the storage capacity is bound to the instance type and cannot be adjusted separately.

★★★★★

Provides various configuration options and lets you scale out or scale in the storage capacity of an RDS instance.

**Note**

Scale-in is supported only for MySQL instances that meet specific conditions. For more information, see [Overview of instance changes](/help/en/rds/apsaradb-rds-for-mysql/configuration-items-for-an-apsaradb-rds-for-mysql-instance) and [Change configuration](/help/en/rds/apsaradb-rds-for-postgresql/change-the-specifications-of-an-apsaradb-rds-for-postgresql-instance).

★★★★★

Provides various configuration options and lets you scale out or scale in the storage capacity of an RDS instance.

**Note**

Scale-in is supported only for MySQL instances that meet specific requirements. For more information, see [Overview of instance changes](/help/en/rds/apsaradb-rds-for-mysql/configuration-items-for-an-apsaradb-rds-for-mysql-instance) and [Change the specifications of an ApsaraDB RDS instance](/help/en/rds/apsaradb-rds-for-postgresql/change-the-specifications-of-an-apsaradb-rds-for-postgresql-instance).

Backup method

Physical backup using XtraBackup

Snapshot backup

Snapshot backup

Time required for backup, read-only instance creation, and instance cloning

★★★

Requires a few hours. The time varies based on the disk size.

★★★★★

Requires a few seconds.

★★★★★

Requires a few seconds.

Scale-out duration

★★★★

Requires a few hours to copy data.

★★★★★

Supports online scale-out. You can scale out the storage capacity of an RDS instance in seconds.

★★★★★

Supports online scale-out. You can scale out the storage capacity of an RDS instance in seconds.

Scale-out impact

Transient connection interruptions occur.

None.

None.

Data durability

★★★★

Hardware failures can cause data corruption. A secondary database is required. The SLA for High-availability Edition instances that use local disks is 99.995%.

★★★★★

Provides 99.9999999% data reliability and supports RDS instances that run RDS Basic Edition to reduce costs.

★★★★★

Provides 99.9999999% data reliability and supports RDS instances that run RDS Basic Edition to reduce costs.

## Billing rules

The fee for changing the storage type depends on the region where your instance is located and the selected specifications. You can view the fee during the configuration change process.

## Usage notes

-   You can change the storage type only from Premium Local SSD to Premium ESSD or standard ESSD. You cannot reverse this change.
    
-   Premium Local SSDs and ESSDs support different instance types. For some instance types, you must change the instance type when you switch from a Premium Local SSD to an ESSD. For more information about the supported instance types, see [Primary ApsaraDB RDS for MySQL instances](/help/en/rds/apsaradb-rds-for-mysql/primary-apsaradb-rds-for-mysql-instance-types#concept-2096487).
    
-   The change operation is affected by various factors and may fail. For more information, see [What factors affect the time that is required to change the specifications of an ApsaraDB RDS for MySQL instance?](/help/en/rds/support/which-factors-affect-the-time-that-is-required-to-change-the-specifications-of-my-apsaradb-rds-for-mysql-instance#concept-2068805).
    
-   The change process uses incremental data synchronization. If your application writes a large amount of data during the change, data synchronization to the target disk may lag. This may prevent the change from being completed. To ensure that the change is completed in a timely manner, we recommend that you reduce the frequency of data writes during the process.
    
-   Before changing the storage type, ensure at least 10% of disk space remains free. If the disk space is exhausted, the instance is locked. For more information, see [Resolve an RDS for MySQL instance locked due to storage exhaustion by data files](/help/en/rds/support/what-do-i-do-if-an-apsaradb-rds-for-mysql-instance-is-in-the-locked-state-because-its-storage-capacity-is-exhausted-by-data-files#concept-nlr-ddb-3gb).
    

## Impacts

-   Changing the storage type may trigger underlying data migration. After the migration is complete, the system performs a switchover of your workloads at the scheduled time. During the switchover, a transient disconnection that lasts about 15 seconds occurs. We recommend that you change the storage type during off-peak hours and make sure that your application is configured with an automatic reconnection mechanism.
    
    **Note**
    
    Changing the storage type does not change the connection address of the instance. You do not need to update your application.
    
-   After the change, backup sets that are created before the change cannot be used to restore the upgraded instance that uses Premium ESSDs or standard ESSDs. You can use only backup sets that are created after the change for restoration.
    
-   While the storage type is being changed, you cannot perform instance-level operations, such as upgrading or downgrading the instance, upgrading the database engine version, or migrating the instance across zones.
    
-   Switching from a Premium Local SSD to a Premium ESSD or standard ESSD disables the full cross-region backup feature automatically due to differences in underlying storage architectures. After the change, you must reconfigure your cross-region backup policy to ensure continued cross-region backup capability. For more information, see [Enable cross-region backup for an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/use-the-cross-region-backup-feature-of-an-apsaradb-rds-for-mysql-instance).
    

## Procedure

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the **Basic Information** section, click **Configuration Information**, then click **Change Specifications** on the right.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8879089371/p825560.png)
    
3.  On the **Change Instance Type** page, set **Storage Type** to **Premium ESSD** or **ESSD** (PL1, PL2, or PL3).
    
    In some zones, resources may be insufficient or cloud disks may be unavailable for purchase. As a result, you may be unable to set the storage type to a cloud disk. In this case, you can [migrate the instance to a zone where cloud disks are available for purchase](/help/en/rds/apsaradb-rds-for-mysql/migrate-an-apsaradb-rds-for-mysql-instance-across-zones-in-the-same-region#concept-zwp-gdj-wdb) and then upgrade the storage type to a cloud disk.
    
    **Note**
    
    -   The three enterprise SSDs have the following performance specifications:
        
        -   Performance ranking: PL3 > PL2 > PL1.
            
        -   A PL3 ESSD delivers up to 20 times the IOPS and 11 times the throughput of a PL1 ESSD.
            
        -   A PL2 ESSD delivers up to twice the IOPS and throughput of a PL1 ESSD.
            
    -   The minimum disk space for a PL1 ESSD, PL2 ESSD, and PL3 ESSD is 20 GB, 500 GB, and 1,500 GB, respectively.
        
    -   The minimum disk space of a [Premium ESSD](/help/en/doc-detail/2545946.html) is 10 GB.
        
    
4.  Optional: Select a new **instance type**.
    
    1.  First, for **Classification**, select General or Dedicated.
        
        **Classification**
        
        **Description**
        
        **Features**
        
        **General-purpose**
        
        Exclusively occupies: memory and I/O.
        
        Shared: CPU and storage.
        
        Cost-effective.
        
        **Dedicated**
        
        Exclusively uses CPU, memory, storage, and I/O resources.
        
        **Note**
        
        Dedicated host is the highest configuration of the Dedicated family. A dedicated host RDS instance exclusively uses all CPU, memory, storage, and I/O resources of its host.
        
        Better performance and stability.
        
    2.  Select a specific instance type based on the number of CPU cores and memory size.
        
        -   For test environments, we recommend that you select an instance type with one or more CPU cores.
            
        -   For production environments, we recommend that you select an instance type with four or more CPU cores.
            
        
        **Note**
        
        For more information about the supported instance types, see [Primary ApsaraDB RDS for MySQL instances](/help/en/rds/apsaradb-rds-for-mysql/primary-apsaradb-rds-for-mysql-instance-types#concept-2096487).
        
    
5.  Optional: You can increase or decrease the **storage capacity** as needed.
    
    **Note**
    
    The storage capacity of the cloud disk must be at least 1.2 times the used storage space of the original Premium Local SSD.
    
6.  Select the **Switching Time**, which is when the primary/secondary switchover occurs after the storage type upgrade is complete.
    
    -   **Execute Immediately**
        
    -   **Switch Within Maintenance Window**: The system performs the switchover within the [maintenance window](/help/en/rds/apsaradb-rds-for-mysql/set-the-maintenance-window-of-an-apsaradb-rds-for-mysql-instance#concept-xqk-jcj-wdb).
        
    
    **Note**
    
    -   The switchover causes a transient disconnection that lasts about 15 seconds. We recommend that you perform the change during off-peak hours and make sure that your application is configured with an automatic reconnection mechanism.
        
    -   If you select **Switch Within Maintenance Window**, the instance remains in the **Upgrading** state until the switchover completes. During this time, you cannot perform instance-level operations such as upgrading or downgrading the instance, upgrading the database engine version, or migrating across zones.
        
    
7.  You can read and accept the terms of service, click **Pay Now**, and complete payment.
    
    After payment, the instance status changes to **Upgrading**. When the status changes to **Running**, the upgrade is complete.
    

## FAQ

How do I change the storage type of an ApsaraDB RDS for MySQL 5.6 instance from Premium Local SSD to ESSD or Premium ESSD?

ApsaraDB RDS for MySQL 5.6 instances support only Premium Local SSDs. You cannot directly change their storage type to other cloud disks. Perform the following steps:

1.  [Upgrade the major engine version](/help/en/rds/apsaradb-rds-for-mysql/upgrade-the-major-engine-version-of-an-apsaradb-rds-for-mysql-instance).
    
    On the instance details page, navigate to the **Major Version Upgrade** page. Click **Create upgrade check report** and then click **Upgrade Instance** to upgrade the instance from MySQL 5.6 Premium Local SSD to MySQL 5.7 or 8.0 Premium Local SSD. For more information, see [Benefits of upgrading MySQL 5.6 to MySQL 5.7](/help/en/rds/apsaradb-rds-for-mysql/upgrade-the-major-engine-version-of-an-apsaradb-rds-for-mysql-instance#section-pai-q76-3ry).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4503950471/p920818.png)
    
2.  [Change the storage type](#).
    
    On the **Basic Information** page of your RDS for MySQL 5.7 or 8.0 instance, you can click **Change Specifications** to change the storage type from Premium Local SSD to cloud disk.
    

Why am I unable to select Premium ESSD or standard ESSD as the storage type?

Some zones may have insufficient resources or may temporarily stop selling cloud disks. If your instance resides in such a zone, you can [migrate the instance to a zone where cloud disks are available for purchase](/help/en/rds/apsaradb-rds-for-mysql/migrate-an-apsaradb-rds-for-mysql-instance-across-zones-in-the-same-region#concept-zwp-gdj-wdb) and then upgrade the storage type to a cloud disk.

Does changing the storage type affect online workloads?

For more information, see the [Impacts](#section-4qi-5lf-k18) section.

Do the endpoints and IP addresses of my instance change after I change the storage type?

The instance endpoints, such as rm-bpxxxxx.mysql.rds.aliyuncs.com, remain unchanged. However, the associated IP addresses may change. We recommend that you use endpoints in your application instead of IP addresses.

## Related API operations

**API**

**Description**

[ModifyDBInstanceSpec](/help/en/rds/api-change-instance-configuration#reference-ddv-lp2-12b)

Changes instance specifications.
