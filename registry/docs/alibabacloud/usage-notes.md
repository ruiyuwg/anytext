After you create a File Storage NAS (NAS) file system, you must mount the file system as a directory on one or more compute nodes to enable shared access. NAS supports shared access with compute nodes of the following services: Elastic Compute Service (ECS), Container Service for Kubernetes (ACK), Function Compute, and Platform for AI (PAI). This topic describes the precautions and scenarios for mounting NAS file systems. Read this topic before you mount a NAS file system.

## Precautions

-   Before you mount a file system, you must [create a file system](/help/en/nas/user-guide/create-a-file-system) and [create a mount target](/help/en/nas/user-guide/manage-mount-targets#section-6xi-a3u-zkq).
    
-   You can mount a NAS file system only on a compute node that resides in the same virtual private cloud (VPC) as the mount target of the file system. The private IP address of the compute node must be authorized in a rule of the permission group that is attached to the mount target. For more information, see [Manage permission groups](/help/en/nas/user-guide/manage-a-permission-group#task-27534-zh).
    
    **Note**
    
    -   On and after November 21, 2022, classic network mount targets cannot be created for General-purpose NAS file systems. However, classic network mount targets created before November 21, 2022 can still be used to access file systems.
        
    -   If a mount target resides in the classic network, only the ECS instances in the classic network can access the mount target. The private IP address of the ECS instance must be authorized in a rule of the permission group that is attached to the mount target. You can migrate an ECS instance from the classic network to a VPC. For more information, see [Migrate ECS instances from the classic network to a VPC](/help/en/ecs/user-guide/migrate-ecs-instances-from-the-classic-network-to-a-vpc#task-2009036).
        
    
-   You can mount a General-purpose NAS file system across multiple zones. We recommend that you mount an Extreme NAS file system on an ECS instance that resides in the same zone as the file system. Otherwise, the performance of the Extreme NAS file system is degraded.
    
-   Extreme NAS file systems support only Linux operating systems and can be accessed by using only NFSv3.
    
-   To ensure compatibility and stability, we recommend that you use Network File System (NFS) file systems on Linux and Server Message Block (SMB) file systems on Windows. To prevent compatibility issues that may affect system stability, we recommend that you do not mount an SMB file system on Linux or mount an NFS file system on Windows. For more information about the compatibility issues that may occur when you mount a file system across platforms, see [FAQ about read and write access to files](/help/en/nas/user-guide/cross-mount-compatibility-faq#144906bd93500).
    

## Scenarios

### Mount NAS file systems on ECS instances

-   Linux
    
    -   [Mount an NFS file system in the NAS console](/help/en/nas/user-guide/mount-a-file-system-on-an-ecs-instance-by-using-the-nas-console#task-2095318)
        
    -   [Mount a NAS file system on multiple ECS instances at a time](/help/en/nas/user-guide/mount-a-nas-file-system-on-multiple-ecs-instances-at-the-same-time#task-2091866)
        
    
    -   [Mount an NFS file system on a Linux ECS instance](/help/en/nas/user-guide/mount-an-nfs-file-system-on-a-linux-ecs-instance#concept-hpp-dkh-cfb)
        
    -   [Mount an SMB file system on a Linux ECS instance](/help/en/nas/user-guide/mount-an-smb-file-system-on-a-linux-ecs-instance)
        
-   Windows
    
    -   [Mount an SMB file system on a Windows ECS instance](/help/en/nas/user-guide/mount-smb-protocol-file-system-on-windows-system)
        
    -   [Mount a General-purpose NFS file system on a Windows ECS instance](/help/en/nas/user-guide/mount-a-general-purpose-nfs-file-system-on-a-windows-ecs-instance#concept-67165-zh)
        

If you are unable to mount a file system on an ECS instance, you can use the scripts that are provided by NAS to troubleshoot issues. For more information, see [FAQ about troubleshooting of mount failures](/help/en/nas/user-guide/fix-mount-issues#concept-1614284).

### Mount NAS file systems on containers

To mount a file system on a container, use the methods described in [Recommended mount methods](/help/en/nas/user-guide/recommended-mount-methods/#task-2310877).

You can mount NAS file systems on ACK clusters, ACK Serverless clusters, and self-managed Kubernetes clusters. For more information, see the following topics:

-   [Mount NAS file systems on ACK](/help/en/nas/user-guide/mount-a-file-system-on-an-ack-cluster/)
    
-   [Mount NAS file systems on ASK](/help/en/nas/user-guide/mount-a-file-system-on-an-ask-cluster/)
    
-   [Mount a NAS file system on a self-managed Kubernetes cluster](/help/en/nas/mount-a-nas-file-system-on-a-self-managed-kubernetes-cluster#task-2262949)
    

### Mount a file system on a Function Compute function

You can mount a file system on a Function Compute function. For more information, see the following topics:

[Mount a file system on a Function Compute function](/help/en/nas/user-guide/use-function-compute-to-upload-or-download-files-over-the-internet)

### Mount file systems on PAI

NAS is seamlessly integrated with PAI. You can configure a NAS file system as a dataset to persistently store data during deployment and training. For more information, see [Getting started (PAI-DSW)](/help/en/nas/getting-started/untitled-document-1698216495849).

### Mount a file system across VPCs, regions, and accounts

You can use PrivateLink or Cloud Enterprise Network (CEN) to mount a file system across VPCs in the same region, or across different accounts and regions.

-   Mount a NAS file system across VPCs in the same region
    
    -   [Use PrivateLink to mount a NAS file system across VPCs in the same region](/help/en/nas/user-guide/use-privatelink-to-mount-nas-across-vpcs)
        
    -   [Use CEN to mount a NAS file system across VPCs in the same region](/help/en/nas/user-guide/mount-a-file-system-across-vpcs-in-the-same-region#task-bnk-22m-xgb)
        
-   Mount a NAS file system across accounts and regions
    
    [Use CEN to mount a NAS file system across accounts and regions](/help/en/nas/user-guide/mount-a-file-system-across-accounts-and-regions)
    

### Access a file system from a data center

If a server in your on-premises data center needs to access a NAS file system, you can use one of the following methods to mount the file system:

-   [Access a NAS file system from a data center by using VPN gateways](/help/en/nas/user-guide/access-an-apsara-file-storage-nas-file-system-from-a-local-data-center-by-using-vpn-gateway#concept-54998-zh)
    
-   [Access a NAS file system from a data center by using a NAT gateway](/help/en/nas/user-guide/access-a-nas-file-system-from-a-data-center-through-a-nat-gateway#concept-57628-zh)
    

## **References**

### **Data migration**

#### **Migrate data from an on-premises storage system to a NAS file system**

You can migrate data from an on-premises storage system to a NAS file system by using an SFTP client, the rsync tool, or the Robocopy tool. For more information, see [Migrate data from an on-premises storage system to NAS](/help/en/nas/user-guide/overview-2/#concept-2267522).

#### **Migrate data from a NAS file system to an on-premises storage system**

You can migrate data from a NAS file system to an on-premises storage system by using an SFTP client, the rsync tool, or the Robocopy tool. You can also synchronize data to Object Storage Service (OSS) and then download the data from OSS to local files. For more information, see [Migrate data from a NAS file system to an on-premises storage system](/help/en/nas/user-guide/migrate-nas-data-to-a-local).

### Unmount a file system

The following topics describe how to unmount a file system from an ECS instance:

-   [Unmount a file system in the NAS console](/help/en/nas/user-guide/unmount-a-file-system-from-a-linux-ecs-instance#task-f5r-3kk-2fb)
    
-   [Unmount a file system by running a command](/help/en/nas/user-guide/unmount-a-file-system-from-a-windows-ecs-instance#task-khy-jhy-zfb)
