You can use File Storage NAS (NAS) volumes in Container Service for Kubernetes (ACK) clusters. This topic describes the use scenarios of NAS volumes and provides usage notes for NAS volumes.

**Important**

ContainerOS is not supported. We recommend that you upgrade from FlexVolume to Container Storage Interface (CSI) first, then upgrade the operating system of nodes. For more information, see [Upgrade from FlexVolume to CSI](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/upgrade-from-flexvolume-to-csi/).

## Prerequisites

A NAS file system is created and a mount target is added to the file system in the [NAS console](https://nas.console.alibabacloud.com/). The mount target of the NAS file system and your cluster are deployed in the same virtual private cloud (VPC).

The mount target is in the following format: `055f84ad83-ixxxx.cn-hangzhou.nas.aliyuncs.com`.

## Background information

You can mount NAS file systems to an ACK cluster by using the following methods:

-   Mount as statically provisioned volumes
    
-   Mount as dynamically provisioned volumes
    

## Use scenarios

We recommend that you mount NAS file systems to Elastic Compute Service (ECS) instances that are deployed in the same zone as the NAS file systems. If you mount NAS file systems to Elastic Compute Service (ECS) instances that are deployed in a different zone, the performance of the NAS file systems is degraded.

-   Statically provisioned NAS volumes
    
    NAS provides shared storage services. You can mount NAS file systems as statically provisioned volumes to meet the requirements of diverse scenarios.
    
-   Dynamically provisioned NAS volumes
    
    You can mount NAS file systems as dynamically provisioned volumes when you want to use multiple NAS subdirectories for different applications.
    
    You can also mount NAS file systems as dynamically provisioned volumes when you use StatefulSets to deploy applications and want each pod to use a separate NAS volume.
    

## Recommended mount methods

We recommend that you mount NAS file systems by using the following methods:

-   Recommended volume plug-in
    
    We recommend that you use FlexVolume to mount NAS file systems.
    
    FlexVolume is installed by default when you create an ACK cluster in the console. You must make sure that FlexVolume is updated to the latest version. For more information, see [Upgrade the components](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-flexvolume#section-csv-gvs-vdb).
    
-   Recommended mount methods
    
    -   Mount file systems as statically provisioned volumes. For more information, see [Mount a statically provisioned NAS volume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mount-a-statically-provisioned-nas-volume-2#task-1715570).
        
    -   Mount file systems as dynamically provisioned volumes. For more information, see [Mount a dynamically provisioned NAS volume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/mount-a-dynamically-provisioned-nas-volume-1#task-1732190).
        
-   Not recommended mounting methods
    
    You can mount file systems by using the FlexVolume volume driver that is provided by Alibaba Cloud. You cannot mount file systems by using the Network File System (NFS) driver that is provided by Kubernetes.
    

## Considerations

-   File Storage NAS is a shared storage service. A persistent volume claim (PVC) that is used to mount a NAS file system can be shared among pods.
    
-   Do not delete the mount target if the related NAS file system is still mounted. Otherwise, the operating system hang may occur.
    
-   After a mount target is created, wait until the **status** of the mount target changes to **Available**.
    
-   We recommend that you use the NFSv3 file sharing protocol.
    
-   We recommend that you update FlexVolume to the latest version before you use NAS volumes.
    
-   Extreme NAS file systems support only NFSv3. You must specify the `nolock` parameter when you mount Extreme NAS file systems.
    
-   To use dynamically provisioned NAS volumes in ACK clusters that use FlexVolume, you must install the alicloud-nas-controller component. For more information, see [Install the components](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-flexvolume#section-z0o-me6-wey).
