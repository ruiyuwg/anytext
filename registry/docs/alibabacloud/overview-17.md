Local storage is not a high availability (HA) volume. It is suitable for storing temporary data or for applications with built-in HA. In an ACK cluster, you can use the Container Storage Interface (CSI) component to mount and use local storage volumes.

## Scenarios

Local storage can refer to various storage media. The storage medium can be an Alibaba Cloud [local disk](/help/en/ecs/user-guide/local-disks#concept-g3w-qzv-tdb) or [cloud disk](/help/en/ecs/user-guide/disks-2#concept-n1s-rzb-wdb). You can also use memory as temporary local storage.

Local storage is ideal for scenarios that require high storage I/O performance and cost-effective mass storage. However, local storage is not an HA volume. It is suitable only for storing temporary data or for applications with built-in HA.

The following methods are supported:

-   [HostPath volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-hostpath-volumes#task-1935812): Based on community standards, these volumes support the automatic creation of host folders. Pods are migratable because they are not attached to a specific node. A HostPath volume mounts a file or folder from the host node's file system into a pod.
    
-   [LocalVolume volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-local-volumes#task-1935813): Based on community standards, these volumes prevent or restrict pod migration because pods are attached to a node or set with a label. A LocalVolume volume mounts a local storage device, such as a disk, partition, or folder, into a pod.
    

## Storage specifications

Alibaba Cloud provides two types of local disks: NVMe SSD local disks and SATA HDD local disks. For more information, see [Local disks](/help/en/ecs/user-guide/local-disks#section-kdp-m2w-ydb).

For information about local disk billing, see [Elastic Block Storage billing](/help/en/ecs/block-storage-devices#section-yjy-krm-p0s).
