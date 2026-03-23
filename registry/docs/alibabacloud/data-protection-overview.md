OSS provides multilayer data protection for various scenarios to ensure data durability and reliability. It uses multilayer erasure coding and cross-region replication to provide disaster recovery at the device, data center, and region levels. Versioning and scheduled backups help protect against data loss from accidental deletion or software bugs. Checksums detect and automatically repair data transmission and storage errors in real time. A redundant design with multiple storage nodes ensures seamless recovery from hardware failures and reduces the risk of data corruption.

## Zone-redundant storage

OSS uses a multi-zone data redundancy mechanism for regions that have three or more zones. Your data is stored redundantly across at least three zones within the same region. If a zone becomes unavailable, you can still access your data. For regions that have two zones, OSS uses a dual-zone data redundancy mechanism. Your data is stored redundantly across both zones within the same region. If a zone becomes unavailable, you can still access your data.

ZRS supports the following storage classes: Standard, Infrequent Access (IA), and Archive. Dual-zone ZRS is available only for the Standard storage class. The following table describes the differences between the storage classes.

**Storage class**

**Region**

**Data durability**

**Service availability**

**Minimum billable size**

**Minimum storage duration**

**Data retrieval fees**

**Data access**

**Image processing**

Standard

China (Hangzhou), China (Shanghai), China (Beijing), China (Zhangjiakou), China (Ulanqab), China (Shenzhen), China (Hong Kong), Japan (Tokyo), Singapore, Indonesia (Jakarta), Germany (Frankfurt)

99.9999999999% (twelve 9's)

99.995%

N/A

N/A

N/A

Real-time access with a latency of only milliseconds

Supported

Malaysia (Kuala Lumpur)①

99.99%

Infrequent Access (IA)

China (Hangzhou), China (Shanghai), China (Beijing), China (Zhangjiakou), China (Ulanqab), China (Shenzhen), China (Hong Kong), Japan (Tokyo), Singapore, Indonesia (Jakarta), Germany (Frankfurt)

99.50%

64 KB

30 days

Based on the size (GB) of retrieved data

Real-time access with a latency of only milliseconds

Archive

64 KB

60 days

Based on the size (GB) of restored data or retrieved Archive data for real-time access

A one-minute restoration process required if real-time access of Archive objects is not enabled Real-time access with a latency of only milliseconds if real-time access of Archive objects is enabled

## Cross-region replication

[Cross-region replication](/help/en/oss/user-guide/cross-region-replication-overview/#concept-zjp-31z-5db) (CRR) automatically and asynchronously copies objects in near real-time across buckets in different OSS data centers (regions). CRR meets the requirements for cross-region disaster recovery and user data replication. Objects in the destination bucket are exact replicas of the objects in the source bucket. They have the same object names, version information, metadata, and content, such as creation time, owner, user-defined metadata, and Object ACLs. CRR supports the replication of unencrypted objects and objects that are encrypted on the server side using SSE-KMS or SSE-OSS.

CRR can meet the following business needs:

-   Compliance requirements: Although OSS creates multiple replicas of each object on physical disks by default, some compliance requirements mandate that a copy of the data be stored at a significant distance. You can use cross-region replication to copy data between distant OSS data centers to meet these requirements.
    
-   Minimized latency: If your customers are in two geographic locations, you can maintain object replicas in the OSS data centers that are closer to your users to minimize latency when they access objects.
    
-   Data backup and disaster recovery: If you have high requirements for data security and availability, you can explicitly maintain a copy of all written data in another data center. This helps you prepare for major disasters, such as earthquakes or tsunamis, that could destroy an OSS data center. You can then activate the backup data in the other OSS data center.
    
-   Data replication: To migrate data from one OSS data center to another for business reasons, you can use data replication.
    
-   Operational reasons: If you have compute clusters in two different data centers that analyze the same set of objects, you can choose to maintain object replicas in two different regions.
    

After you enable a cross-region replication task, you can [use replication time control (RTC)](/help/en/oss/user-guide/rtc) to replicate most objects that you upload to the source bucket within seconds and 99.99% of objects within 10 minutes. RTC also provides near real-time monitoring of data replication and lets you view various metrics for the replication task.

## **Versioning**

OSS provides the [versioning](/help/en/oss/user-guide/overview-78/#concept-jdg-4rx-bgb) feature for buckets to protect your data from being accidentally deleted. After you enable versioning, when an object is overwritten or deleted, it is stored as a previous version. If an object is accidentally overwritten or deleted, you can restore it to any of its previous versions.

-   Once enabled, versioning applies to all objects in the bucket. Each update or modification to an object is assigned a unique version ID.
    
-   You can perform operations such as uploading, listing, downloading, deleting, and restoring objects in a versioning-enabled bucket.
    
-   You can suspend versioning to stop accumulating new versions of an object. You can still manage previous versions by specifying their version IDs.
    
-   OSS charges for each version. You can use lifecycle rules to automatically delete expired versions or delete markers to optimize storage costs.
    

## **Scheduled backup**

The [Scheduled backup](/help/en/oss/user-guide/configure-scheduled-backup) feature provides flexible and efficient backup policy configuration. This feature lets you customize data backup plans based on your business needs and implement automated, scheduled snapshot protection for your data in the cloud. With its precise backup and fast recovery capabilities, you can effectively handle data risk scenarios, such as accidental deletion, logic errors, and disaster events, to ensure business continuity and data reliability.

-   Policy customization
    
    -   You can select backup cycles (hourly, daily, weekly, or monthly) and coverage (an entire bucket or a specified prefix) on demand to meet diverse data backup management needs.
        
    -   The incremental backup mechanism reduces storage costs and improves backup efficiency.
        
-   Precise recovery capabilities
    
    -   You can restore data to any previous version from a backup snapshot with a single click. This feature supports full restoration for large-scale data loss scenarios or the rollback of specific files.
        
    -   Rapid data recovery capabilities significantly reduce the risk of business downtime.
        

## **Retention policy (WORM)**

OSS [retention policies](/help/en/oss/user-guide/oss-retention-policies) include the Write Once, Read Many (WORM) feature, which lets you store and use data in a way that prevents it from being deleted or modified. To prevent any user, including resource owners, from modifying or deleting objects in an OSS bucket within a specific period, you can configure a retention policy for the bucket. Before the specified retention period ends, you can only upload objects to or read objects from the bucket. You can modify or delete objects only after the retention period ends.
