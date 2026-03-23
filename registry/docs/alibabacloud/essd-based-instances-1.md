Tair offers ESSD/SSD-based instances that are compatible with core data structures and interfaces of open source Redis. These instances can provide large-capacity, low-cost, and persistent database services. This series type is suitable for warm and cold data storage scenarios that require compatibility with open source Redis, large capacity, and high access performance.

## Background information

Redis uses volatile memory as the storage medium. As your business continuously grows and data volume rapidly increases, you may encounter the following challenges:

-   The volume of accumulated data increases, but the frequency of access to the data remains low. As a result, in-memory data storage may become less cost-effective. A low-cost storage solution is required to meet the growing requirements for data iteration amidst expanding business demands.
    
-   Your database must be paired with other databases or storage solutions to address persistence issues.
    
-   The maximum storage capacity is constrained by the bottlenecks of standalone databases and the cluster size.
    

To address the preceding challenges, Alibaba Cloud provides ESSD/SSD-based instances that use [ESSDs](/help/en/ecs/user-guide/essds#concept-727754) and [local SSDs](/help/en/ecs/user-guide/local-disks) as storage mediums to ensure high data reliability. ESSD/SSD-based instances are cost-effective and can reduce up to 85% of costs compared with Redis Open-Source Edition instances. ESSD/SSD-based instances also provide a storage capacity that can reach hundreds of terabytes.

## **Features**

-   High compatibility: ESSD/SSD-based instances are compatible with most data structures and commands of Redis 6.0. For more information, see [Limits on commands supported by Tair](/help/en/redis/developer-reference/limits-on-commands-supported-by-apsaradb-for-redis-enhanced-edition).
    
-   Reduced costs: ESSD/SSD-based instances reduce up to 85% of costs compared with Redis Open-Source Edition instances.
    
-   High performance: An ESSD/SSD-based instance delivers approximately 60% of the performance of a Redis Open-Source Edition instance. For more information, see [Performance whitepaper of ESSD-based instances](/help/en/redis/support/performance-white-paper-of-essd-based-instances) and [Performance whitepaper of SSD-based instances](/help/en/redis/support/disk-ssd-performance-white-paper).
    
-   Synchronization mode: The [semi-synchronous replication mode](/help/en/redis/user-guide/modify-the-synchronization-mode-of-a-persistent-memory-optimized-instance) is additionally supported.
    
-   Storage in disks: ESSD/SSD-based instances store data in ESSDs or SSDs to ensure high data reliability. The capacity of an ESSD/SSD-based instance can reach hundreds of terabytes.
    
-   Data distribution: ESSD/SSD-based instances use the Alibaba Cloud TairDB storage engine and combine disks and memory to provide an optimal balance between data persistence and quick access to data.
    
-   Scenarios: storage of warm and cold data.
    

## **Differences between ESSD-based instances and SSD-based instances**

ESSD-based instances allow you to configure a custom storage capacity and support snapshot-based backup of cloud disks. This increases the speed of data backup and replication during migration. However, ESSD-based instances support only the standard architecture.

SSD-based instances support the standard and cluster architectures, and are more cost-effective compared with ESSD-based instances that have the same specifications.

**Item**

**ESSD-based instance**

**SSD-based instance**

Storage medium

Supports [ESSDs](/help/en/ecs/user-guide/essds#concept-727754) at performance levels 1, 2, and 3 (PL1, PL2, and PL3 ESSDs). PL3 ESSDs outperform PL2 and PL1 ESSDs.

Supports [local SSDs](/help/en/ecs/user-guide/local-disks).

Instance architecture

Supports the standard architecture.

Supports the standard and cluster architectures.

Storage capacity

Supports custom storage capacities in increments of 10 GB.

Provides fixed capacity options.

Backup and restoration

Supports snapshot-based backup of cloud disks to facilitate faster backup and restoration.

Supports physical backup of data. The backup and restoration speeds vary based on the data volume.

## Instance specifications

[ESSD/SSD-based instances](/help/en/redis/product-overview/capacity-storage-type)

## FAQ

-   What are the storage engine and database engine versions supported by ESSD/SSD-based instances?
    
    ESSD/SSD-based instances use a storage engine developed in-house by Alibaba Cloud and are compatible with Redis 6.0. For information about the commands supported by ESSD/SSD-based instances, see [Limits on commands supported by Tair](/help/en/redis/developer-reference/limits-on-commands-supported-by-apsaradb-for-redis-enhanced-edition).
