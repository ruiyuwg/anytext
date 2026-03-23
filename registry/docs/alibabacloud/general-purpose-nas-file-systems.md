General-purpose File Storage NAS (NAS) file systems are used to store hot data that is frequently accessed. General-purpose NAS file systems are classified into Capacity NAS file systems, Premium NAS file systems, and Performance NAS file systems. This topic describes the performance metrics, supported protocols, storage classes, advanced features, and scenarios of General-purpose NAS file systems. You can select storage classes based on your business requirements. If your applications are sensitive to latency, we recommend that you use Extreme NAS file systems.

## Performance metrics

**Item**

**Capacity NAS file system**

**Premium NAS file system**

**Performance NAS file system**

Maximum throughput

The initial read and write throughput is 150 MB/s. The throughput increases by 0.15 MB/s as the storage capacity increases by 1 GiB. The maximum read throughput is 10 GB/s. The maximum write throughput is 5 GB/s.

The initial read and write throughput is 300 MB/s. The throughput increases by 0.3 MB/s as the storage capacity increases by 1 GiB. The maximum read throughput is 20 GB/s. The maximum write throughput is 5 GB/s.

The initial read and write throughput is 600 MB/s. The throughput increases by 0.6 MB/s as the storage capacity increases by 1 GiB. The maximum read throughput is 20 GB/s. The maximum write throughput is 5 GB/s.

IOPS

The maximum IOPS is 15,000.

The maximum IOPS is 30,000.

The maximum IOPS is 30,000.

Average latency for reading 4 KiB files from a single-socket server

10 ms

2 ms

2 ms

Average latency for writing 4 KiB files to a single-socket server

10 ms

2 ms

2 ms

Storage capacity

0 to 10 PiB

0 to 1 PiB

0 to 1 PiB

Scaling step size

4 KiB

4 KiB

4 KiB

Scaling method

Auto scaling

Auto scaling

Auto scaling

**Note**

-   The storage usage of a NAS file system includes the storage usage of the Standard storage class, the Infrequent Access (IA) storage class, the Archive storage class, and the recycle bin. The storage usage is calculated in binary, such as PiB, TiB, GiB, MiB, and KiB. The basic storage unit is 4 KiB. If the size of a file is less than 4 KiB, the billed storage usage of the file is rounded up to 4 KiB. If the size of a file is larger than 4 KiB, the billed storage usage is rounded up to the nearest multiple of 4 KiB.
    
-   For more information about IOPS, see [What is IOPS?](/help/en/nas/user-guide/faq-about-the-performance-of-nas-file-systems#section-lo1-aga-iwi)
    
-   Average latency: the average latency calculated based on the number of read or write operations within 1 second.
    
-   The maximum throughput of General-purpose NAS file systems has additional limits in some regions. For more information, see [Limits on throughput](/help/en/nas/product-overview/limits#af830bb0f5pun).
    

## Supported protocols

**Protocol type**

**Capacity NAS file system**

**Premium NAS file system**

**Performance NAS file system**

Network File System (NFS)

NFSv3 and NFSv4.0 are supported.

Server Message Block (SMB)

SMB 2.0 and later are supported.

## Storage classes

General-purpose NAS file systems provide the following storage classes designed for low-cost storage: Standard, IA, and Archive.

-   Standard storage class: provides highly reliable, highly available, and high-performance file storage services for storing frequently accessed hot data. After a file system is created, data is stored in the Standard storage class before data can be dumped to the IA or Archive storage class based on a lifecycle policy. For more information about the Standard storage class, see [General-purpose NAS file systems](#).
    
-   IA storage class: provides file storage services with high durability and low storage costs. Data can be accessed in real time. You are charged for the read and write traffic when you access IA data. The IA storage class is suitable for storing data that is accessed 1 to 3 times each month on average.
    
-   Archive storage class: provides file storage services with high durability and low storage costs. Data can be accessed in real time. You are charged for the read and write traffic when you access Archive data. The Archive storage class is suitable for long-term storage of data that is accessed once or twice each quarter on average in scenarios such as data auditing and data archiving.
    

For more information, see [Storage classes of General-purpose NAS file systems](/help/en/nas/product-overview/file-system-storage-type).

## Supported operating systems

Linux and Windows operating systems are supported. To ensure the optimal performance of NAS file systems, use the recommended kernel versions or later versions. For more information about the recommended kernel images for NAS, see [Recommended kernel images](/help/en/nas/recommended-kernel-images#concept-2371649).

We recommend that you use NFS file systems for Linux and containers. We recommend that you use SMB file systems for Windows. Compatibility issues may occur in cross-platform mounting scenarios. For more information, see [FAQ about file read, write, and access](/help/en/nas/user-guide/cross-mount-compatibility-faq#task-2287129).

## Advanced features

The following table describes the advanced features that are supported by General-purpose NAS file systems.

**Category**

**Scenario**

**Description**

**References**

Access control

RAM-based access control

Resource Access Management (RAM) is a service provided by Alibaba Cloud to manage access permissions on resources. RAM policies are user-based authorization policies. You can configure RAM policies to manage your users, such as employees, systems, and applications, and manage user permissions on your resources. For example, you can configure a RAM policy to grant users only the read permissions on a specific file system.

[Perform access control based on RAM policies](/help/en/nas/user-guide/perform-access-control-based-on-ram-policies#task-960740)

ACL-based access control

NAS supports SMB access control lists (ACLs) and NFS ACLs. You can select an appropriate ACL type to control resources.

-   [NAS SMB ACL](/help/en/nas/user-guide/overview-of-the-smb-acl-feature#task-2475611)
    
-   [NAS NFS ACL](/help/en/nas/user-guide/overview#concept-2338504)
    

Data security

Data encryption

NAS supports server-side encryption and encryption in transit. You can select an appropriate method to encrypt your data and store the data in NAS.

-   [Server-side encryption](/help/en/nas/user-guide/server-side-encryption#task-2349639)
    
-   [Encryption in transit for NFS file systems](/help/en/nas/user-guide/encryption-in-transit-for-nfs-file-systems#task-2046916)
    
-   [Encryption in transit for SMB file systems](/help/en/nas/user-guide/in-transit-encryption-of-smb-file-systems#task-2071093)
    

Restoration of data that is accidentally deleted

NAS supports the recycle bin feature. After the recycle bin feature is enabled, deleted files or directories are automatically transferred to the recycle bin and completely deleted after the specified retention period.

[Recycle bin](/help/en/nas/user-guide/recycle-bin#task-2067898)

Data management

Lifecycle management

NAS supports the lifecycle management feature. After the lifecycle management feature is enabled, the files that meet the specified lifecycle policy are automatically dumped to the IA or Archive storage class.

-   [Lifecycle management](/help/en/nas/user-guide/ia-storage-media/#task-1946547)
    
-   [Manage lifecycle policies](/help/en/nas/user-guide/manage-a-lifecycle-policy#task-2507341)
    

Data backup

NAS allows you to use Cloud Backup to back up files in NAS file systems at regular intervals and restore files if data is lost or damaged.

[Back up a General-purpose NAS file system](/help/en/nas/user-guide/back-up-files-from-a-general-purpose-nas-file-system#task-73045-zh)

Data migration

NAS allows you to migrate data from an on-premises storage system to NAS or from NAS to other storage media.

-   [Migrate data from an on-premises storage system to NAS](/help/en/nas/user-guide/overview-2/#concept-2263391)
    
-   [Migrate data between a NAS file system and an OSS bucket](/help/en/nas/user-guide/migrate-data-between-a-nas-file-system-and-an-oss-bucket#concept-2263392)
    
-   [Migrate data between NAS file systems](/help/en/nas/user-guide/migrate-data-by-using-data-transport#concept-2263395)
    

Quota management

Directory quota creation

You can use the quota management feature to manage the directory quotas of General-purpose NAS file systems. For example, you can create, modify, or delete directory quotas.

[Manage directory quotas](/help/en/nas/user-guide/manage-directory-quotas#task-2333199)

## Scenarios

General-purpose NAS file systems provide benefits such as large capacity, high cost-effectiveness, and elastic scalability.

-   Performance NAS file systems are suitable for latency-sensitive file sharing workloads that require low latency, such as Linux or Windows applications for enterprises, container persistent volumes (PVs), web content management, and genetic computing.
    
-   Premium NAS file systems are suitable for latency-sensitive file sharing workloads that require low latency, such as container data persistence, AI training data storage, manufacturing simulation, and genetic computing.
    
-   Capacity NAS file systems are suitable for cost-sensitive file sharing workloads that require moderate latency, such as database backup, log storage, Windows user directory, and Linux home directory.
    

For more information about the scenarios for NAS, see [Scenarios](/help/en/nas/product-overview/scenarios#concept-27521-zh).

## Pricing of General-purpose NAS file systems

For more information about the billing rules of General-purpose NAS file systems, see [Billing of General-purpose NAS file systems](/help/en/nas/product-overview/billing-of-general-purpose-nas-file-systems#task-2567548). For more information about the prices of NAS file systems, see [File Storage NAS Pricing](https://www.alibabacloud.com/product/nas/pricing).

For billing FAQ about General-purpose NAS file systems, see [Billing FAQ](/help/en/nas/product-overview/billing-faq#task-1935085).

## Supported regions and zones

General-purpose NAS file systems supports three storage classes: Capacity, Premium, and Performance. The following table lists the regions and zones supported by each storage class.

### Capacity NAS file system

**Region**

**Zone**

China (Hangzhou)

-   Hangzhou Zone F
    
-   Hangzhou Zone K
    

China (Shanghai)

-   Shanghai Zone H
    
-   Shanghai Zone L
    
-   Shanghai Zone M
    
-   Shanghai Zone B
    

China (Qingdao)

Qingdao Zone C

China (Beijing)

-   Beijing Zone H
    
-   Beijing Zone L
    

China (Zhangjiakou)

Zhangjiakou Zone C

China (Hohhot)

Hohhot Zone A

China (Shenzhen)

-   Shenzhen Zone A
    
-   Shenzhen Zone D
    
-   Shenzhen Zone E
    

China (Chengdu)

Chengdu Zone A

China (Hong Kong)

Hong Kong Zone B

Philippines (Manila)

Manila Zone A

Thailand (Bangkok)

Bangkok Zone A

US (Virginia)

Virginia Zone B

US (Silicon Valley)

Silicon Valley Zone B

UK (London)

London Zone A

Germany (Frankfurt)

Frankfurt Zone A

Japan (Tokyo)

-   Tokyo Zone A
    
-   Tokyo Zone B
    

Indonesia (Jakarta)

Jakarta Zone A

Malaysia (Kuala Lumpur)

Kuala Lumpur Zone A

Singapore

-   Singapore Zone A
    
-   Singapore Zone C
    

SAU (Riyadh - Partner Region)

Riyadh - Partner Region Zone A

## **Premium NAS file system**

**Region**

**Zone**

China (Hangzhou)

-   Hangzhou Zone G
    
-   Hangzhou Zone F
    

China (Shanghai)

-   Shanghai Zone L
    
-   Shanghai Zone B
    
-   Shanghai Zone E
    

China (Beijing)

-   Beijing Zone E
    
-   Beijing Zone H
    

China (Hohhot)

Hohhot Zone A

China (Shenzhen)

-   Shenzhen Zone A
    
-   Shenzhen Zone D
    
-   Shenzhen Zone B
    
-   Shenzhen Zone E
    

China (Chengdu)

Chengdu Zone A

China (Hong Kong)

-   Hong Kong Zone B
    
-   Hong Kong Zone D
    

US (Virginia)

Virginia Zone A

US (Silicon Valley)

Silicon Valley Zone B

UK (London)

London Zone A

Germany (Frankfurt)

Frankfurt Zone A

Japan (Tokyo)

-   Tokyo Zone A
    
-   Tokyo Zone B
    

Malaysia (Kuala Lumpur)

Kuala Lumpur Zone A

South Korea (Seoul)

Seoul Zone A

Singapore

-   Singapore Zone A
    
-   Singapore Zone C
    

### Performance NAS file system

**Region**

**Zone**

China (Hangzhou)

-   Hangzhou Zone G
    
-   Hangzhou Zone F
    

China (Shanghai)

-   Shanghai Zone L
    
-   Shanghai Zone B
    
-   Shanghai Zone E
    

China (Beijing)

-   Beijing Zone E
    
-   Beijing Zone H
    

China (Hohhot)

Hohhot Zone A

China (Shenzhen)

-   Shenzhen Zone A
    
-   Shenzhen Zone D
    
-   Shenzhen Zone B
    
-   Shenzhen Zone E
    

China (Chengdu)

Chengdu Zone A

China (Hong Kong)

-   Hong Kong Zone B
    
-   Hong Kong Zone D
    

US (Virginia)

Virginia Zone A

US (Silicon Valley)

Silicon Valley Zone B

UK (London)

London Zone A

Germany (Frankfurt)

Frankfurt Zone A

Japan (Tokyo)

-   Tokyo Zone A
    
-   Tokyo Zone B
    

Malaysia (Kuala Lumpur)

Kuala Lumpur Zone A

South Korea (Seoul)

Seoul Zone A

Singapore

-   Singapore Zone A
    
-   Singapore Zone C
