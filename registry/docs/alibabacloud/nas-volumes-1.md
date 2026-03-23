File Storage NAS (NAS) file systems are suitable for scenarios such as big data analysis, data sharing, web applications, and log storage. You can mount NAS file systems to containers as volumes to meet requirements for data persistence and data sharing. Alibaba Cloud provides the Container Storage Interface (CSI) plug-in that allows you to directly mount NAS file systems to containers or use Container Network File System (CNFS) to manage NAS file systems.

## Select proper NAS file system types

NAS provides the following file system types: General-purpose NAS and Extreme NAS. You can select a proper NAS file system type based on your requirements for IOPS and the maximum throughput. For more information, see [Select file systems](/help/en/nas/product-overview/how-do-i-select-file-systems). For more information about the service specifications of NAS, see the following topics:

-   [Service specifications](/help/en/nas/product-overview/limits#section-kpe-4gj-0wc)
    
-   [Performance metrics of General-purpose NAS](/help/en/nas/product-overview/general-purpose-nas-file-systems#section-q3n-usr-1g6)
    
-   [Performance metrics of Extreme NAS](/help/en/nas/product-overview/extreme-nas-file-systems#section-zdu-kba-qwp)
    

### **Billing**

For more information about the billing rules of NAS, see [Billing of General-purpose NAS file systems](/help/en/nas/product-overview/billing-of-general-purpose-nas-file-systems), [Billing of Extreme NAS file systems](/help/en/nas/product-overview/billing-of-extreme-nas-file-systems), and [File Storage NAS Pricing](https://www.alibabacloud.com/zh/product/nas/pricing?spm=a2c63.p38356.0.0.62871995Psq91B).

## How to use NAS volumes

You can scale the capacity of a NAS file system. The storage capacity of a NAS file system automatically scales within a specific range when you add or remove files. NAS is a shared storage service. You can mount a NAS file system to multiple pods. You can directly mount NAS file systems to containers or [use CNFS to manage NAS file systems](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cnfs-overview/). CNFS can improve the performance of NAS file systems and allows you to implement quality of service (QoS) control. Compared with traditional shared file systems, CNFS-managed NAS file systems provide precise control of capacity quotas, recovery of accidentally deleted data, monitoring metrics about volume capacities and performance statistics, encryption algorithms, and fast read and write speeds for small-sized files. The following table describes the differences between directly mounting NAS file systems to containers and using CNFS to manage NAS file systems.

**Comparison item**

**Use CNFS to manage NAS file systems** (recommended)

**Directly mount NAS file systems to containers**

Supported NAS file system types

You can use this method to mount General-purpose NAS file systems, including Performance and Capacity NAS file systems. You cannot use this method to mount Premium or Extreme NAS file systems.

-   You can use this method to mount General-purpose NAS file systems, including Performance, Capacity, and Premium NAS file systems.
    
-   You cannot use this method to mount Extreme NAS file systems.
    

Limits on clusters and volume plug-ins

-   The cluster must be an ACK Pro cluster that runs Kubernetes 1.20 or later.
    
-   The version of the CSI plug-in must be 1.20.5-ff6490f-aliyun or later.
    
-   The version of the storage-operator component must be 1.26.2-1de13b6-aliyun or later.
    

None.

Volume expansion

By default, resource quotas are enabled to resolve issues such as insufficient volume capacity. You can monitor volume capacity using the `node_volume_capacity_bytes_used` metric. To configure alerts for volume capacity monitoring, see [Create an alert rule for a Prometheus instance](/help/en/prometheus/user-guide/create-an-alert-rule-for-a-prometheus-instance).

In case of insufficient volume capacity, you can automatically increase the capacity upper limit of a NAS volume on demand. For more information, see [Use CNFS to automatically expand NAS volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-cnfs-to-automatically-expand-nas-volumes).

You can set quotas only on the directories of General-purpose NAS file systems. Volume expansion must be performed manually. For more information, see [Expand a NAS volume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/expand-a-nas-volume).

If direct mounting is not enabled for the NAS directory, the capacity specified in the persistent volume claim (PVC) does not restrict the amount of storage the application can use. You can still use storage within the capacity limits allowed by the specifications of NAS.

Data recovery

By default, the recycle bin feature is enabled to allow you to recover accidentally deleted data.

You can directly use the recycle bin feature of NAS to recover data. For more information, see [Use the recycle bin feature to restore NAS data](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/recover-nas-file-data-using-recycle-bin-function). For more information about the billing rules and usage notes of the recycle bin feature, see [Usage notes](/help/en/nas/user-guide/recycle-bin#section-hjs-utv-aat).

You must manually [enable the recycle bin feature](/help/en/nas/user-guide/recycle-bin#section-wnj-8gx-vr5) in the [NAS console](https://nas.console.alibabacloud.com/).

Data read acceleration

You can enable the distributed caching feature of the CNFS client to improve the performance of NAS file systems. This way, the performance of small-sized file operations in NAS file systems is similar to the performance of small-sized file operations in on-premises file systems. For more information, see [Enable the distributed caching feature of the CNFS client](/help/en/ack/enable-the-distributed-caching-feature-of-the-cnfs-client#task-2232103).

**Note**

-   The operating system that you use must be Alibaba Cloud Linux 2, and the kernel version must be 4.19.91-23 to 4.19.91-26.
    
-   The CSI plug-in version that you use must be 1.22.11-abbb810e-aliyun or later.
    

Not supported.

Application data storage

You can use CNFS to manage shared and isolated NAS volumes that are mounted to applications. For more information, see [Use CNFS to manage shared NAS volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-cnfs-to-manage-shared-nas-volumes-recommended#task-2282731) or [Use CNFS to manage isolated NAS volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-cnfs-to-manage-isolated-nas-volumes-recommended#task-2282751). You can mount isolated NAS volumes managed by using CNFS in subpath or sharepath mode.

You can directly mount statically or dynamically provisioned NAS volumes to containers. For more information, see [Mount a statically provisioned NAS volume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mount-statically-provisioned-nas-volumes#task-2022002) or [Mount a dynamically provisioned NAS volume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mount-a-dynamically-provisioned-nas-volume#task-2342476). You cannot expand statically provisioned NAS volumes. You can mount dynamically provisioned NAS volumes in subpath, sharepath, or filesystem mode.

## Limits

-   The CSI plug-in does not allow you to mount NAS file systems that use the Server Message Block (SMB) protocol. We recommend that you use the CSI plug-in to mount NAS file systems that use NFSv3.
    
-   When you mount a NAS file system to clusters, the clusters must be deployed in the same virtual private cloud (VPC) as the file system.
    

## References

-   You can use the CSI plug-in to create, mount, and unmount volumes. For more information, see [Manage the CSI plug-in](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-the-csi-plug-in)
    
-   If you cannot access NAS volumes due to permission issues, see [Why does the system prompt chown: Operation not permitted when I mount a NAS volume?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-nas-volumes#section-srw-s3w-230)
    
-   If you want to ensure data security among different users and user groups, refer to [How to isolate users or user groups in NAS?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mount-a-dynamically-provisioned-nas-volume#4f71f70d654l3)
    
-   For more information about read and write access issues when you use NAS, see [FAQ about read and write access to files](/help/en/nas/user-guide/cross-mount-compatibility-faq).
    
-   If issues occur when you use NAS volumes mounted to containers, see [FAQ about NAS volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-nas-volumes).
