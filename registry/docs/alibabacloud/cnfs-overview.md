Traditional shared file systems do not support precise control of storage resource quotas, recovery of accidentally deleted data, monitoring metrics about volume capacities and performance statistics, and encryption algorithms. In addition, the latency of reading or writing small-sized files is high. To solve these issues, Container Service for Kubernetes (ACK) provides Container Network File System (CNFS) to improve the performance of File Storage NAS (NAS) and Object Storage Service (OSS) volumes and support quality of service (QoS). This topic describes the features, storage types, use scenarios, limits, and billing of CNFS.

## Features

CNFS allows ACK to create, delete, describe, mount, monitor, and scale individual file stores of Alibaba Cloud by using Kubernetes CustomResourceDefinitions (CRDs). CRDs are easy to use and can improve the performance of file stores and enhance data security. CRDs also help manage container-consistent persistent volume claims (PVCs).

**Feature**

**CNFS version**

**Enable**

Recycle bin

-   You can recover accidentally deleted files from the recycle bin. For more information about the billing rules of the recycle bin feature and the required permissions, see the [Usage notes](/help/en/nas/user-guide/recycle-bin#section-hjs-utv-aat) section of the "Recycle bin" topic.
    
-   The recycle bin can be disabled and cleared. For more information about how to disable and clear the recycle bin, see the [Related operations](/help/en/nas/user-guide/recycle-bin#section-hwl-oex-sy6) section of the "Recycle bin" topic.
    

By default, this feature is enabled. The data in the recycle bin can be retained for seven days.

Resource quotas

Storage resource quotas. You can dynamically increase the quota limits. For more information about how to use the storage resource quotas, see [Use CNFS to automatically expand NAS volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-cnfs-to-automatically-expand-nas-volumes).

By default, this feature is enabled.

Volume monitoring

This feature allows you to monitor the usage and I/O performance of volumes, including PVCs. For more information about how to use the volume monitoring feature, see [View storage monitoring information](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-csi-plugin-to-monitor-storage-resources-at-the-node-side#task-1997075).

This feature is enabled after you install Managed Service for Prometheus.

Lifecycle management

This feature allows you to manage the lifecycles of NAS file systems and OSS buckets.

By default, this feature is enabled.

Resource protection

This feature prevents users from accidentally deleting the entire file system.

By default, this feature is enabled.

Updates without service disruptions

Hot updates for volume drivers are supported.

By default, this feature is enabled.

End-to-end data acceleration

You can use the CNFS client to mount volumes to increase read speeds. For more information, see [Enable the distributed caching feature of the CNFS client](/help/en/ack/enable-the-distributed-caching-feature-of-the-cnfs-client#task-2232103).

By default, this feature is disabled. To enable this feature, you must configure specific parameters.

QoS

This feature allows you to modify the size of the local cache, the size of cached metadata, the upper limit of IOPS, and the upper limit of throughput. For more information, see [Enable the distributed caching feature of the CNFS client](/help/en/ack/enable-the-distributed-caching-feature-of-the-cnfs-client#task-2232103).

The default size of the local cache is 128 MB. By default, the size of cached metadata, IOPS, and throughput are not limited.

Some advanced CNFS features, such as the recycle bin, resource quotas, and lifecycle management, can be configured only in the [NAS console](https://nas.console.alibabacloud.com/).

## Storage types

NAS provides the following file system types: General-purpose NAS Capacity, General-purpose NAS Performance, and Extreme NAS. For more information, see [NAS types](/help/en/nas/product-overview/general-purpose-nas-file-systems#concept-61136-zh).

## **Limits**

CNFS only supports ACK Pro clusters 1.20 or later.

## Usage notes

-   CNFS simplifies the procedure of mounting NAS volumes. Compared with using PVCs, you do not need to frequently switch between the NAS console and ACK console when you use CNFS to mount a NAS volume. For more information, see [Use CNFS to manage NAS file systems](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-cnfs-to-manage-nas-file-systems#task-2083130).
    
-   You can use expansion policies to enable auto expansion for NAS volumes when the capacity usage exceeds specific thresholds. For more information, see [Use CNFS to automatically expand NAS volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-cnfs-to-automatically-expand-nas-volumes#task-2112290).
    
-   You can use the recycle bin feature of CNFS to restore accidentally deleted files. For more information, see [Use the recycle bin feature to restore NAS data](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/recover-nas-file-data-using-recycle-bin-function#task-2116190).
    

## Billing

-   For more information about the billing rules of NAS, see [NAS Billing overview](/help/en/nas/product-overview/billing-of-general-purpose-nas-file-systems#task-2567548).
    
-   For more information about the billing rules of the recycle bin feature, see the [Usage notes](/help/en/nas/user-guide/recycle-bin#section-hjs-utv-aat) section of the "Recycle bin" topic.
    
-   For more information about the billing rules of OSS, see [OSS Billing overview](/help/en/oss/billing-overview).
    

## **References**

-   For more information about how to use CNFS to manage NAS file systems, see [Manage the lifecycles of NAS file systems](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/manage-the-lifecycles-of-nas-file-systems/).
    
-   For more information about how to use CNFS to manage OSS buckets, see [Manage the lifecycle of OSS buckets](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/manage-the-lifecycle-of-oss-buckets).
