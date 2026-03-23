Hologres supports multi-zone disaster recovery across three availability zones (AZs) in the same region. This capability extends instance availability from a single AZ to three AZs within the same region. It provides cross-AZ fault isolation to ensure your business stays online even if one AZ fails. You can use this feature to handle scenarios such as carrier network failures or compute failures in a single AZ. It improves your business’s disaster recovery capability.

## **Important Notes**

-   You can upgrade instances running Hologres V3.0.19 or later to zone-redundant storage instances only.
    
-   This service is currently available in the following regions: China (Shenzhen), China (Hangzhou), China (Shanghai), China (Beijing), **China (Hong Kong)**, **Singapore**, **Japan (Tokyo)**, **Finance Cloud (Shanghai)**, and **Finance Cloud (Hangzhou)**.
    

## **Overview of Multi-zone Disaster Recovery Based on 3 AZs**

### **Function Introduction**

Hologres multi-zone disaster recovery based on 3 AZs extends instance availability from a single AZ to three AZs within the same region. It provides cross-AZ fault isolation to keep your business online during an AZ failure. You can use it for scenarios such as carrier network failures, compute failures in a single AZ, and other similar scenarios. It improves your business’s disaster recovery capability.

Hologres supports multi-zone disaster recovery across three availability zones (AZs), which includes storage-level disaster recovery across three AZs and compute-layer high availability across multiple AZs, as described below:

-   **Zone-redundant storage disaster recovery across 3 AZs**: Also known as zone-redundant storage. It stores instance data across multiple AZs within the same region. These AZs are underlying Pangu AZs. You do not need to know the specific AZs used. If a data center in one AZ becomes unavailable, the system automatically accesses data from a replica AZ in zone-redundant storage mode. No manual switchover is needed. Data remains accessible, enabling data center-level disaster recovery within the same region.
    
-   **Multi-AZ compute high availability**: If your instance uses zone-redundant storage, you can manually switch compute nodes to a healthy AZ when a compute data center fails. This avoids compute downtime and improves compute-layer high availability—provided sufficient compute resources exist in the target AZ.
    

### **Technical Principles**

-   **Locally redundant storage**: When your instance uses locally redundant storage, it is deployed by default in one AZ within a region. If that AZ’s data center becomes unavailable, the associated data becomes inaccessible. Neither storage nor compute supports cross-AZ high availability.
    
-   **Zone-redundant storage**: When your instance uses 3-AZ zone-redundant storage (multi-zone disaster recovery), data is redundantly stored across multiple AZs within the same region. If a data center in one AZ fails, zone-redundant storage still ensures data remains accessible. It delivers data center-level disaster recovery for both storage and compute within the same region.
    

Compared with locally redundant storage, zone-redundant storage offers higher availability and improved disaster recovery switchover. Storage fees increase accordingly. For details, see [Billing overview](/help/en/hologres/product-overview/billing-overview). All other fees remain unchanged.

Multi-zone disaster recovery based on 3 AZs includes **storage disaster recovery** and **compute disaster recovery**. Their technical principles are as follows:

#### **Storage Disaster Recovery Principle**

In zone-redundant storage mode, instance data is stored across multiple AZs within the same region. The AZ where the instance resides serves as the primary zone. Other AZs are pre-deployed physical zones.

**Note**

An AZ refers to the underlying physical machine location. The system automatically selects other AZs based on your instance’s primary zone. You do not need to know which specific AZs are used.

-   When the instance’s AZ is healthy:
    
    -   Data writes: All AZs write data simultaneously. The system returns success only after all AZs complete the write. If any AZ fails, all AZs roll back the write operation. The storage system guarantees atomicity.
        
    -   Data queries: The system first reads data from the instance’s AZ.
        
-   When the instance’s AZ fails:
    
    -   Data writes: The system skips the failed AZ and writes data to another healthy AZ. It always maintains multiple replicas. Even in extreme cases, at least one AZ remains available.
        
    -   Data queries: The system automatically routes queries to the nearest replica AZ. Service continuity and availability are preserved.
        
-   After the instance’s AZ recovers:
    
    -   Data writes: The system resumes writing data to the original AZ. It asynchronously copies new data written during the outage from replica AZs to the recovered AZ.
        
    -   Data queries: The storage engine automatically routes read requests. It prioritizes data from the instance’s AZ. If that AZ lacks the latest data, it automatically reads from a replica AZ. This ensures data correctness. You do not need to track when the recovered AZ finishes copying data. Automatic routing keeps data fresh and correct.
        

In zone-redundant storage mode, the system achieves high availability and automatic disaster recovery for storage. No manual action is required to maintain business availability.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4470218671/p900319.png)

#### **Compute Disaster Recovery Principle**

Compute disaster recovery is available only for instances that use 3-AZ zone-redundant storage. Unlike storage disaster recovery—which switches AZs and routes traffic automatically—compute does not store data. When a compute data center fails, you must manually select **Switch Computing Zone** in the console to move compute nodes to a healthy AZ. This preserves compute availability.

**Note**

If the target AZ lacks sufficient compute resources, the switchover may fail. The system does not guarantee 100% resource availability. Submit a ticket promptly at [https://smartservice.console.alibabacloud.com/service/create-ticket?](https://smartservice.console.alibabacloud.com/service/create-ticket?) or join the Hologres user group to contact Hologres support.

### **Purchase and Use a Multi-zone Disaster Recovery Instance**

When purchasing a new instance, set **Storage Redundancy Type** to **ZRS**.

**Note**

-   Billing: You are charged at the zone-redundant storage rate. Only storage fees increase compared to standard instances. For details, see [Billing overview](/help/en/hologres/product-overview/billing-overview).
    
-   Existing instances use locally redundant storage (single-AZ storage) by default. Only instances running Hologres V3.0.19 or later can be upgraded to 3-AZ storage. For details, see [Convert a Standard Instance to a 3-AZ Multi-zone Disaster Recovery Instance](#ad7c189705kne).
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7696349371/p899824.png)

After successful purchase, go to the **Instance Details** page. Under **Storage Resources**, confirm that **Storage Redundancy Type** shows **Zone-redundant Storage (ZRS)**. If an AZ fails, follow the [Disaster Recovery Guide](#bef8e1def6iug). You can use this instance just like a locally redundant storage instance.

## **Disaster Recovery Guide**

### **Storage Disaster Recovery Guide**

If the data center in your instance’s AZ fails, Hologres sends an SMS or email notification. Hologres then performs automatic recovery as follows:

1.  Hologres automatically switches storage to a healthy AZ. No action is required from your application. Service resumes automatically.
    
2.  After the switch, data continues to be written to healthy AZs without impact from the failed AZ. Queries are automatically routed to data in the nearest AZ. No code changes are needed. If jobs failed during the outage, you can rerun them.
    
3.  You only need to focus on business operations and ensure the business returns to normal.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4470218671/p900321.png)

### **Compute Disaster Recovery Guide**

If your instance uses zone-redundant storage (multi-zone disaster recovery), Hologres supports **manual compute AZ switchover** to achieve multi-AZ compute high availability and restore service quickly.

If your instance’s compute AZ fails, Hologres sends an SMS or email notification. Perform the following steps to recover:

1.  Go to the [Hologres Management Console](https://hologram.console.alibabacloud.com/#/overview). On the **Instances** page, click your instance ID to open the **Instance Details** page.
    
2.  In the navigation pane on the left, click **Backup and Disaster Recovery**. Then select the **Zone-disaster Recovery** tab.
    
3.  In the Compute Disaster Recovery section, click **Switch Computing Zone**. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7696349371/p900310.png)
    
4.  If sufficient compute resources exist in the target AZ, select the desired **Computing Zone for Disaster Recovery** in the **Switch Computing Zone** dialog box. Click **OK** to migrate compute nodes.
    
    After migration, basic configurations—including the endpoint—remain unchanged. When the instance status is **Running**, you can rerun any failed jobs. Monitor your application until full recovery.
    

**Important**

-   Only instances with zone-redundant storage (multi-zone disaster recovery) support manual compute AZ switchover. If your instance uses locally redundant storage, see [Convert a Standard Instance to a 3-AZ Multi-zone Disaster Recovery Instance](#ad7c189705kne).
    
-   If the target AZ lacks sufficient compute resources, the switchover fails. Submit a ticket promptly at [https://smartservice.console.alibabacloud.com/service/create-ticket?](https://smartservice.console.alibabacloud.com/service/create-ticket?) or join the Hologres user group to contact Hologres support.
    
-   After manual compute AZ migration, the endpoint and network configuration remain unchanged.
    
-   No additional compute fees apply after manual compute AZ migration.
    

## Convert a Standard Instance to a 3-AZ Multi-zone Disaster Recovery Instance

If your instance uses locally redundant storage, data is stored in only one AZ within a region. If that AZ’s data center fails, the associated data becomes inaccessible.

To enable multi-zone disaster recovery, [submit a ticket](https://smartservice.console.alibabacloud.com/service/create-ticket?) or [join the Hologres user group](/help/en/hologres/support/obtain-online-support-for-hologres). A Hologres O&M engineer will perform the conversion. Note the following:

-   Only Hologres instances running V3.0.19 or later support zone-redundant storage. If your instance runs an earlier version, upgrade it using [Instance Upgrade](/help/en/hologres/user-guide/instance-upgrades#section-32k-sdy-wpv) or by joining the Hologres user group. For more help, see [How do I get more online support?](/help/en/hologres/support/obtain-online-support-for-hologres#concept-2379947).
    
-   Impact of conversion:
    
    -   During conversion, write operations pause, but read operations continue. If your jobs support automatic failover, you do not need to stop them manually.
        
    -   Conversion time depends on the number of tables. Most instances complete the conversion within 10 minutes. For an exact estimate, contact Hologres support.
        
-   After conversion, storage fees are adjusted to the zone-redundant storage rate. Expect higher storage costs. Monitor your bill closely.
