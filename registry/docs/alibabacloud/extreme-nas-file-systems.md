Extreme NAS is a high-performance file sharing service based on the latest network architecture and all-flash storage. The fully managed cloud storage service is integrated with the computing services of Alibaba Cloud to provide optimal computing performance for public cloud. Extreme NAS file systems feature low latency, high IOPS, and large capacity. Extreme NAS file systems are suitable for latency-sensitive Linux applications for enterprises, development and test environments for continuous integration and continuous deployment (CI/CD), and high-performance web services. This topic describes the performance metrics, supported file protocols, supported regions, and advanced features of Extreme NAS file systems.

## Performance metrics

### **After January 19, 2024**

**Note**

From January 19, 2024, the maximum throughput of advanced Extreme NAS file systems is increased to 4,000 MB/s in some regions. The maximum throughput in other regions remains unchanged. If your file system was created before January 19, 2024, the throughput of the file system is not directly upgraded. If you want to use a higher throughput, we recommend that you create an Extreme NAS file system and migrate data from the existing file system to the new file system. For more information, see [Migrate data between NAS file systems](/help/en/nas/user-guide/migrate-data-between-nas-file-systems/).

**Item**

**Advanced**

**Standard**

Maximum throughput

After the upgrade

Before the upgrade

The maximum throughput is 1,200 MB/s. The throughput increases as the storage capacity of the file system increases, as shown in the following list:

-   \[100 GiB,500 GiB): 150 MB/s
    
-   \[500 GiB,2 TiB): 300 MB/s
    
-   \[2 TiB,4 TiB): 600 MB/s
    
-   \[4 TiB,8 TiB): 900 MB/s
    
-   \[8 TiB,256 TiB): 1,200 MB/s
    

The maximum throughput is 4,000 MB/s. The throughput increases as the storage capacity of the file system increases, as shown in the following list:

**Show supported regions and zones**

-   China (Beijing): Zone H, Zone I, Zone K, and Zone L
    
-   China (Chengdu): Zone A and Zone B
    
-   China (Hangzhou): Zone I, Zone J, and Zone K
    
-   China (Shanghai): Zone B, Zone L, Zone M, and Zone N
    
-   China (Shenzhen): Zone C, Zone E, and Zone F
    
-   China (Ulanqab): Zone B and Zone C
    
-   China (Hong Kong): Zone B, Zone C, and Zone D
    
-   Singapore: Zone A, Zone B, and Zone C
    
-   US (Virginia): Zone A and Zone B
    
-   Indonesia (Jakarta): Zone B and Zone C
    
-   Germany (Frankfurt): Zone C
    
-   Japan (Tokyo): Zone C
    

-   \[100 GiB,500 GiB): 250 MB/s
    
-   \[500 GiB,1024 GiB): 500 MB/s
    
-   \[1 TiB,2 TiB): 1,000 MB/s
    
-   \[2 TiB,3 TiB): 1,500 MB/s
    
-   \[3 TiB,5 TiB): 2,000 MB/s
    
-   \[5 TiB,8 TiB): 3,000 MB/s
    
-   \[8 TiB,256 TiB): 4,000 MB/s
    

**Important**

If you create an advanced Extreme NAS file system in the China (Ulanqab) region but the expected capacity is short of inventory, the capacity available before the upgrade is used.

For more information about how to view the throughput of a file system, see [How do I view the throughput of an Extreme NAS file system?](/help/en/nas/user-guide/faq-about-basic-management-features#72759ada03k3t)

The maximum throughput is 1,200 MB/s. The throughput increases as the storage capacity of the file system increases, as shown in the following list:

**Show supported regions and zones**

-   China (Beijing): Zone F and Zone G
    
-   China (Hangzhou): Zone G and Zone H
    
-   China (Qingdao): Zone C
    
-   China (Zhangjiakou): Zone A, Zone B, and Zone C
    
-   China (Hohhot): Zone A and Zone B
    
-   China (Shenzhen): Zone D
    
-   China (Shanghai): Zone E, Zone F, and Zone G
    
-   China (Ulanqab): Zone A
    
-   US (Silicon Valley): Zone B
    
-   Germany (Frankfurt): Zone B
    
-   UK (London): Zone A and Zone B
    

-   \[100 GiB,500 GiB): 150 MB/s
    
-   \[500 GiB,2 TiB): 300 MB/s
    
-   \[2 TiB,4 TiB): 600 MB/s
    
-   \[4 TiB,8 TiB): 900 MB/s
    
-   \[8 TiB,256 TiB): 1,200 MB/s
    

IOPS

The IOPS increases as the storage capacity of the file system increases. If the I/O size is 4 KiB, you can use the following formulas to calculate the read and write IOPS:

-   Read IOPS = min{5000 + 50 × Capacity (GiB),200000}
    
-   Write IOPS = min{2500 + 25 × Capacity (GiB),100000}
    

The IOPS increases as the storage capacity of the file system increases. If the I/O size is 4 KiB, you can use the following formulas to calculate the read and write IOPS:

-   Read IOPS = min{7000 + 30 × Capacity (GiB),200000}
    
-   Write IOPS = min{3500 + 15 × Capacity (GiB),100000}
    

Average latency for writing 4 KiB files to a single-socket server

0.3 ms

1.2 ms

Storage capacity

100 GiB to 256 TiB

100 GiB to 256 TiB

Scaling step size

1 GiB

1 GiB

Scaling method

Manual scaling

Manual scaling

### **May 20, 2020 to January 18, 2024**

The following table describes the performance metrics of Extreme NAS file systems that were created between May 20, 2020 and January 18, 2024.

If you want to use a higher throughput, we recommend that you create an advanced Extreme NAS file system in a supported region or zone and migrate data from the existing file system to the new file system. For more information, see [Data Migration](/help/en/nas/user-guide/usage-notes-2/#concept-vr4-rgj-kfb).

**Item**

**Advanced**

**Standard**

Maximum throughput

The maximum throughput is 1,200 MB/s. The throughput increases as the storage capacity of the file system increases, as shown in the following list:

-   \[100 GiB,500 GiB): 150 MB/s
    
-   \[500 GiB,2 TiB): 300 MB/s
    
-   \[2 TiB,4 TiB): 600 MB/s
    
-   \[4 TiB,8 TiB): 900 MB/s
    
-   \[8 TiB,256 TiB): 1,200 MB/s
    

The maximum throughput is 1,200 MB/s. The throughput varies with the storage capacity, as shown in the following list:

-   \[100 GiB,500 GiB): 150 MB/s
    
-   \[500 GiB,2 TiB): 300 MB/s
    
-   \[2 TiB,4 TiB): 600 MB/s
    
-   \[4 TiB,8 TiB): 900 MB/s
    
-   \[8 TiB,256 TiB): 1,200 MB/s
    

IOPS

The IOPS increases as the storage capacity of the file system increases. If the I/O size is 4 KiB, you can use the following formulas to calculate the read and write IOPS:

-   Read IOPS = min{5000 + 50 × Capacity (GiB),200000}
    
-   Write IOPS = min{2500 + 25 × Capacity (GiB),100000}
    

The IOPS increases as the storage capacity of the file system increases. If the I/O size is 4 KiB, you can use the following formulas to calculate the read and write IOPS:

-   Read IOPS = min{7000 + 30 × Capacity (GiB),200000}
    
-   Write IOPS = min{3500 + 15 × Capacity (GiB),100000}
    

Average latency for writing 4 KiB files to a single-socket server

0.3 ms

1.2 ms

Storage capacity

100 GiB to 256 TiB

100 GiB to 256 TiB

Scaling step size

1 GiB

1 GiB

Scaling method

Manual scaling

Manual scaling

### **Before May 20, 2020**

Extreme NAS file systems have been upgraded since May 20, 2020. The following table describes the performance metrics of Extreme NAS file systems that were created before May 20, 2020. We recommend that you create another Extreme NAS file system and migrate data to the new file system. For more information, see [Usage notes](/help/en/nas/user-guide/usage-notes-2/#concept-vr4-rgj-kfb).

**Item**

**Advanced**

**(**File systems created before May 20, 2020**)**

**Standard**

**(**File systems created before May 20, 2020**)**

Maximum throughput

The throughput does not change along with the storage capacity. Minimum throughput: 0.15 GB/s. Maximum throughput: 0.3 GB/s.

The throughput does not change along with the storage capacity. Minimum throughput: 0.15 GB/s. Maximum throughput: 0.3 GB/s.

IOPS

The IOPS increases as the storage capacity of the file system increases. If the I/O size is 4 KiB, you can use the following formulas to calculate the read and write IOPS:

-   Read IOPS = min{1000 + 50 × Capacity (GiB),45000}
    
-   Write IOPS = min{1000 + 50 × Capacity (GiB),30000}
    

The IOPS increases as the storage capacity of the file system increases. If the I/O size is 4 KiB, you can use the following formulas to calculate the read and write IOPS:

-   Read IOPS = min{1000 + 30 × Capacity (GiB),20000}
    
-   Write IOPS = min{1000 + 30 × Capacity (GiB),10000}
    

Average latency for writing 4 KiB files to a single-socket server

0.3 ms

1.2 ms

Maximum capacity

32 TiB

32 TiB

Minimum capacity

100 GiB

100 GiB

Scaling step size

1 GiB

1 GiB

Scaling method

Manual scaling

Manual scaling

**Note**

-   Average latency: the average latency calculated based on the number of read or write operations within 1 second.
    
-   Storage capacity: The storage capacity of a NAS file system is calculated in binary, such as PiB, TiB, GiB, MiB, and KiB. The basic storage unit is 4 KiB. If the size of a file is less than 4 KiB, the billed storage usage of the file is rounded up to 4 KiB. If the size of a file is larger than 4 KiB, the billed storage usage is rounded up to the nearest multiple of 4 KiB.
    

## Supported protocols

Extreme NAS file systems support only NFSv3.

## Supported operating systems

Extreme NAS file systems support only Linux operating systems. To ensure the optimal performance of file systems, use the recommended kernel versions or later versions. For more information, see [Recommended kernel images](/help/en/nas/recommended-kernel-images#concept-2371649).

## Advanced features

The following table describes the advanced features that are supported by Extreme NAS file systems.

**Category**

**Scenario**

**Description**

**References**

Access control

RAM-based access control

Resource Access Management (RAM) is a service provided by Alibaba Cloud to manage access permissions on resources. RAM policies are user-based authorization policies. You can configure RAM policies to manage your users, such as employees, systems, and applications, and manage user permissions on your resources. For example, you can configure a RAM policy to grant users only the read permissions on a specific file system.

[Perform access control based on RAM policies](/help/en/nas/user-guide/perform-access-control-based-on-ram-policies#task-960740)

Data security

Data encryption

Extreme NAS file systems support server-side encryption. Server-side encryption uses the industry-standard AES-256 algorithm to generate keys. These keys are used to protect static data in file systems. To prevent against unauthorized data access, server-side encryption uses the envelope encryption mechanism.

[Server-side encryption](/help/en/nas/user-guide/server-side-encryption#task-2349639)

Data management

Snapshots

Advanced Extreme NAS file systems support the snapshot feature. You can use the snapshot feature to restore data from a snapshot of a specified point in time to an existing file system. You can also restore data across zones.

[Manage snapshots](/help/en/nas/user-guide/manage-snapshots#task-2071424)

Data backup

NAS allows you to use Cloud Backup to back up files in NAS file systems at regular intervals and restore files when data is lost or damaged.

[Back up an Extreme NAS file system](/help/en/nas/user-guide/back-up-an-extreme-nas-file-system#task-2273682)

Data migration

NAS allows you to migrate data from an on-premises storage system to NAS or from NAS to other storage media.

-   [Migrate data from an on-premises storage system to NAS](/help/en/nas/user-guide/overview-2/#concept-2263391)
    
-   [Migrate data between a NAS file system and an OSS bucket](/help/en/nas/user-guide/migrate-data-between-a-nas-file-system-and-an-oss-bucket#concept-2263392)
    
-   [Migrate data between NAS file systems](/help/en/nas/user-guide/migrate-data-by-using-data-transport#concept-2263395)
    

## Scenarios

Extreme NAS file systems provide benefits such as low latency, high IOPS, and high capacity. Extreme NAS file systems are suitable for latency-sensitive Linux applications for enterprises, development and test environments for continuous integration and continuous deployment (CI/CD), and high-performance web services.

**Note**

-   Advanced Extreme NAS file systems are unavailable in some zones due to infrastructure constraints. In this case, you can select the standard storage class instead. For more information about the regions supported by each storage class, see [Supported regions and zones](#41fe3f30f3tn9).
    
-   We recommend that you create an Extreme NAS file system in the zone where your business data resides.
    
-   You cannot change the storage class of an Extreme NAS file system from standard to advanced.
    

## Pricing of Extreme NAS file systems

For more information about the billing rules of Extreme NAS file systems, see [Billing of Extreme NAS file systems](/help/en/nas/product-overview/billing-of-extreme-nas-file-systems#task-2567605). For more information about the prices of NAS file systems, see [File Storage NAS Pricing](https://www.alibabacloud.com/zh/product/nas/pricing).

For billing FAQ about Extreme NAS file systems, see [Billing FAQ](/help/en/nas/product-overview/billing-faq#task-1935085).

## Supported regions and zones

Extreme NAS provides two storage classes: standard and advanced. The following table lists the regions and zones supported by each storage class.

### **Advanced**

From January 19, 2024, the maximum throughput of advanced Extreme NAS file systems is increased to 4,000 MB/s in some regions. The maximum throughput in other regions is still 1,200 MB/s. The following tables list the regions and zones that are supported by the two throughput types.

-   4,000 MB/s
    
    **Region**
    
    **Zone**
    
    China (Hangzhou)
    
    -   Hangzhou Zone I
        
    -   Hangzhou Zone J
        
    -   Hangzhou Zone K
        
    
    China (Shanghai)
    
    -   Shanghai Zone B
        
    -   Shanghai Zone L
        
    -   Shanghai Zone M
        
    -   Shanghai Zone N
        
    
    China (Beijing)
    
    -   Beijing Zone H
        
    -   Beijing Zone I
        
    -   Beijing Zone K
        
    -   Beijing Zone L
        
    
    China (Ulanqab)
    
    -   Ulanqab Zone B
        
    -   Ulanqab Zone C
        
    
    China (Shenzhen)
    
    -   Shenzhen Zone C
        
    -   Shenzhen Zone E
        
    -   Shenzhen Zone F
        
    
    China (Chengdu)
    
    -   Chengdu Zone A
        
    -   Chengdu Zone B
        
    
    China (Hong Kong)
    
    -   Hong Kong Zone B
        
    -   Hong Kong Zone C
        
    -   Hong Kong Zone D
        
    
    Singapore
    
    -   Singapore Zone A
        
    -   Singapore Zone B
        
    -   Singapore Zone C
        
    
    Indonesia (Jakarta)
    
    -   Jakarta Zone B
        
    -   Jakarta Zone C
        
    
    Japan (Tokyo)
    
    Tokyo Zone C
    
    US (Virginia)
    
    -   Virginia Zone A
        
    -   Virginia Zone B
        
    
    Germany (Frankfurt)
    
    Frankfurt Zone C
    
-   1,200 MB/s
    
    **Region**
    
    **Zone**
    
    China (Hangzhou)
    
    -   Hangzhou Zone G
        
    -   Hangzhou Zone H
        
    
    China (Shanghai)
    
    -   Shanghai Zone E
        
    -   Shanghai Zone F
        
    -   Shanghai Zone G
        
    
    China (Qingdao)
    
    Qingdao Zone C
    
    China (Beijing)
    
    -   Beijing Zone F
        
    -   Beijing Zone G
        
    
    China (Zhangjiakou)
    
    -   Zhangjiakou Zone A
        
    -   Zhangjiakou Zone B
        
    -   Zhangjiakou Zone C
        
    
    China (Hohhot)
    
    -   Hohhot Zone A
        
    -   Hohhot Zone B
        
    
    China (Ulanqab)
    
    Ulanqab Zone A
    
    China (Shenzhen)
    
    Shenzhen Zone D
    
    US (Silicon Valley)
    
    Silicon Valley Zone B
    
    Germany (Frankfurt)
    
    Frankfurt Zone B
    
    UK (London)
    
    -   London Zone A
        
    -   London Zone B
        
    

### **Standard**

**Region**

**Zone**

China (Hangzhou)

-   Hangzhou Zone B
    
-   Hangzhou Zone E
    
-   Hangzhou Zone F
    

China (Shanghai)

-   Shanghai Zone A
    
-   Shanghai Zone C
    
-   Shanghai Zone D
    

China (Qingdao)

Qingdao Zone B

China (Beijing)

-   Beijing Zone A
    
-   Beijing Zone B
    
-   Beijing Zone C
    
-   Beijing Zone D
    
-   Beijing Zone E
    

China (Shenzhen)

-   Shenzhen Zone A
    
-   Shenzhen Zone B
    

Malaysia (Kuala Lumpur)

-   Kuala Lumpur Zone A
    
-   Kuala Lumpur Zone B
    

Indonesia (Jakarta)

Jakarta Zone A

Japan (Tokyo)

-   Tokyo Zone A
    
-   Tokyo Zone B
    

US (Silicon Valley)

Silicon Valley Zone A

Germany (Frankfurt)

Frankfurt Zone A

## **Suggestions**

### **Scenario 1**

**Issue**: A large number of clients concurrently create and delete files in the same directory of an Extreme NAS file system. The performance deteriorates when files in the directory are accessed.

**Suggestion**: We recommend that you set the number of clients that can concurrently create and delete files in the same directory of an Extreme NAS file system to 10 or less.

### **Scenario 2**

**Issue**: After a large number of files are stored in an Extreme NAS file system, the latency of accessing files in a large directory that stores a large number of files increases. In extreme cases, it is mistakenly considered as no I/O response.

**Suggestion**: If the number of files in a single Extreme NAS file system exceeds 20 million, we recommend that you store no more than 10,000 files or subdirectories in a single directory.
