Disks are non-shared, low-latency, and high-reliability block-level random storage. Disks are suitable for applications that require high input/output operations per second (IOPS) and low latency but do not require data sharing, such as databases. Container Service for Kubernetes (ACK) allows you to mount Enterprise SSDs (ESSDs) and ESSD AutoPL disks to pods as volumes to meet the requirements for data persistence.

## **Disk categories**

Disks are suitable for the following scenarios:

-   You want to create applications that require high disk I/O throughput and do not require data sharing. The applications can use storage services such as MySQL and Redis.
    
-   You want to write logs at high speeds.
    
-   You want to persist data in a way that is independent of the pod lifecycle.
    

ACK supports elastic ephemeral disks, ESSD-series disks, and disks of the previous generation, such as standard SSDs, ultra disks, and basic disks. The features, performance, and price of a disk varies based on its category. When you mount a disk volume, we recommend that you select a suitable disk category based on your business requirements and scenarios.

**Note**

Standard SSDs, ultra disks, and basic disks are cloud disks of the previous generation and are unavailable for purchase in specific regions and zones. We recommend that you use ESSDs at performance level 0 (PL0 ESSDs) or ESSD Entry disks instead of ultra disks and basic disks and use ESSD AutoPL disks instead of standard SSDs.

### **Features and scenarios of disk categories**

The following table describes the features and scenarios of different disk categories. For more information, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).

**Disk category**

**Feature**

**Scenario**

[ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks#concept-2156400)

-   Decouple disk capacity from disk performance.
    
-   Support the performance provision feature.
    
-   Support the performance burst feature.
    

-   All scenarios for which ESSDs are suitable.
    
-   Scenarios in which disk performance needs to be increased without the need for disk capacity extension.
    
-   Scenarios in which business workloads significantly fluctuate and disks need to burst their performance when workload spikes occur.
    

[Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks)

-   Deliver high IOPS.
    
-   Provide zone-redundant storage.
    

-   All scenarios for which ESSDs are suitable.
    
-   Multi-zone disaster recovery for databases.
    
-   Cross-zone container deployment.
    
-   Self-managed or cloud-based Software as a Service (SaaS) services.
    

[ESSDs](/help/en/ecs/user-guide/essds#concept-727754)

-   Deliver high IOPS.
    
-   Provide low latency.
    

Latency-sensitive applications or I/O-intensive business scenarios, such as:

-   Large-scale online transaction processing (OLTP) databases
    
-   NoSQL databases
    
-   Elasticsearch distributed logs
    

ESSD Entry disks

**Note**

ESSD Entry disks can be attached to only instances of [universal instance families](/help/en/ecs/user-guide/general-work-force#section-l0r-2ny-ngs) and [e economy instance families](/help/en/ecs/user-guide/shared-instance-families#dc08b68051fz1).

-   Deliver high IOPS.
    
-   Provide low latency.
    

-   Development and testing business
    
-   Used as system disks
    

[Elastic ephemeral disks](/help/en/ecs/user-guide/elastic-ephemeral-disks)

-   Deliver high performance.
    
-   Provide cost effectiveness.
    

The temporary data storage. Examples include:

-   Temporary intermediate computational results
    
-   Cached data
    
-   Transient files
    
-   Temporary storage support for high-performance tasks
    

### **Disk performance**

The performance of a disk varies based on its category. The performance metrics of disks include IOPS, throughput, and latency.

-   For more information about the performance metrics of disks, see [Performance metrics](/help/en/ecs/user-guide/block-storage-performance#section-yzi-wb6-9gc).
    
-   For more information about the performance data of different disk categories, see [Performance of cloud disks](/help/en/ecs/user-guide/block-storage-performance#section-0hu-6dh-p6f) and [Performance of elastic ephemeral disks](/help/en/ecs/user-guide/block-storage-performance#03a0ffd37fi2x).
    
-   The final performance of cloud disks is subject to the disk specification limits and Elastic Compute Service (ECS) instance type limits. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance).
    

### **Billing of cloud disks**

Cloud disks support the pay-as-you-go and subscription billing methods. However, only pay-as-you-go disks can be mounted. You can purchase [storage capacity units (SCUs)](/help/en/ecs/storage-capacity-units-1#concept-2150938) to reduce the disk cost.

-   For more information about the billing rules of cloud disks, see [Block storage devices](/help/en/ecs/block-storage-devices).
    
-   For more information about the prices of disks, see [Prices of block storage devices](https://www.alibabacloud.com/product/ecs).
    

**Note**

When you change the billing method of an ECS instance from pay-as-you-go to subscription, do not select **Switch to Subscription**. Otherwise, workloads on the instance cannot be restarted. As a result, workloads on the instance may be affected. For more information, see [Why do applications fail to restart after I change the billing method of a data disk mounted to an ECS instance from pay-as-you-go to subscription?](/help/en/ack/ack-managed-and-ack-dedicated/product-overview/resource-billing#title-at7-oz2-j6m)

## Limits

-   Disks cannot be shared. If multi-attach is not enabled for disks, each disk can be mounted to only one pod. For information about the multi-attach feature, see [Use the multi-attach and NVMe reservation features of NVMe disks](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/multi-attach-and-reservation-of-nvme-cloud-disks).
    
-   You can mount a disk only to a pod that resides in the same zone as the disk.
    
-   The ECS instance types to which a cloud disk can be attached depend on the category of the disk.
    
    When you mount a disk volume to a pod, make sure that the instance type of the ECS instance on which the pod runs supports the category of the disk that you want to mount. For more information about the matching rules between disk categories and ECS instance types, see [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb).
    

## Disk operations

**Operation**

**Description**

**References**

Mount disk volumes

-   Statically provisioned disk volumes
    
    Create a persistent volume (PV) based on an existing cloud disk and mount the PV to a persistent volume claim (PVC). Then, mount the PVC to your application. Static provisioning ensures that the PV is ready before the container is started, which is suitable for scenarios where you want to use existing cloud disks.
    
-   Dynamically provisioned disk volumes
    
    Use a StorageClass to define the cloud configurations and associate the StorageClass with a PVC. Then, mount the PVC to your application. The system automatically creates a disk and a PV, and binds the disk to the PV based on the configurations of the PVC and StorageClass. Dynamic provisioning provides a flexible and automated method for disk mounting. You do not need to create PVs in advance.
    

-   [Use a statically provisioned disk volume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-a-statically-provisioned-disk-volume#task-1426487)
    
-   [Use a dynamically provisioned disk volume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-dynamically-provisioned-disk-volumes#task-1715686)
    

Expand disk volumes

As your business and application data grow, the storage space of your disk volumes may become insufficient. In this case, you can expand your disk volumes to meet the increasing storage requirements.

[Expand disk volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/expand-a-disk-volume/)

Change the category of a cloud disk.

If the disk volume you use does not meet your requirements for performance and storage, you can change the category of the mounted disk.

Assume that you have mounted a standard SSD for your application. If your application requires a higher IOPS, you can change the category of the disk from standard SSD to ESSD.

[Change the category of a cloud disk](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/change-the-type-of-a-cloud-disk)

Use snapshots to back up data on disks

-   For a single disk
    
    ACK integrates the backup and restoration mechanism of cloud disks (snapshots) with volumes in ACK clusters, and provides the VolumeSnapshot resource to allow you to back up disk volume based on volume snapshots. You can restore data from a volume snapshot by setting the [dataSource](https://kubernetes.io/docs/concepts/storage/volume-pvc-datasource/) parameter of the PVC mounted to your application.
    
-   For multiple disks
    
    If multiple disks are mounted to your cluster, you can use the VolumeSnapshot resource to create a volume snapshot from each disk. However, the snapshots may not be created at the same time, which may cause data inconsistency among the snapshots. In this case, you can create group snapshots from the disks to manage and back up data on the disks in a unified manner. This helps you reduce the risks of data inconsistency caused by asynchronous volume creation.
    

-   [Create a snapshot of a single disk volume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-volume-snapshots-created-from-disks#task-1963934)
    
-   [Create group snapshots of multiple disk volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-group-snapshot-for-a-group-of-disk-volumes)
    

Encrypt data on disks

After you enable the disk encryption feature, the system automatically encrypts data transmitted to a disk and decrypts the data when it is read. Disk encryption is suitable for scenarios that require high security or have compliance requirements. You can protect the privacy and autonomy of your data without the need to create and maintain a key management infrastructure.

-   [Encryption overview](/help/en/ecs/user-guide/encryption-overview#concept-2383230)
    
-   [Encrypt a disk volume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/encrypt-cloud-disk-storage-volumes#task-2081545)
    

Use instant access (IA) snapshots to restore data

If data loss occurs due to an accidental ESSD deletion, you can use the IA snapshot of the ESSD to restore the data in the ESSD.

[Best practices for data security of disk volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/best-practices-for-data-security-of-disk-volumes)

## References

-   You can use the Container Storage Interface (CSI) plug-in to create, mount, and unmount volumes. For more information, see [Manage the CSI plug-in](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-the-csi-plug-in)
    
-   If you want to share storage across pods or zones, we recommend that you use [File Storage NAS (NAS)](/help/en/ack/nas-volumes-1) volumes.
    
-   If errors occur when you use disk volumes, refer to [FAQ about disk volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-disk-volumes).
