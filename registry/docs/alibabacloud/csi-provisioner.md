You can use csi-provisioner to automatically create volumes. This topic describes csi-provisioner, including its usage notes and release notes.

## Overview

The csi-provisioner component automates the provisioning of volumes, with support for cloud disk, File Storage NAS (NAS), and Object Storage Service (OSS) file systems.

> Requires Kubernetes version 1.14 or later. To upgrade your cluster, see [Manually upgrade an ACK cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster).

## Usage notes

For more information about how to use csi-provisioner, see [Manage the csi-plugin and csi-provisioner components](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-the-csi-plug-in).

**Important**

-   To use csi-provisioner 1.22.8-8d3a569-aliyun or later, make sure that the Kubernetes version of your cluster is later than 1.20.
    
-   In csi-provisioner 1.18.8.47-906bd535-aliyun and later versions, the same image address is provided for installing csi-provisioner and csi-plugin.
    
-   In Container Service for Kubernetes (ACK) Edge clusters, csi-provisioner supports only NAS volumes.
    
-   When you upgrade csi-provisioner, make sure that csi-plugin is upgraded to the same version.
    

## Release notes

### **January 2026**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.35.1

registry-vpc.{{regionID}}.aliyuncs.com/acs/csi-plugin:v1.35.1

2026-01-19

-   New features
    
    -   OSS data pre-warming via `VolumePopulator`: Pre-loading OSS data into CPFS for Lingjun or cloud disk volumes before application startup. This significantly accelerates the initialization of data-intensive applications. See [Prefill OSS data on demand to high-performance volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/prefetch-oss-data-into-high-performance-volumes-on-demand).
        
    -   Support mounting cloud disks on Lingjun nodes.
        
-   Optimizations
    
    -   Upgraded ossfs1.0 to `v1.91.9.ack.1`.
        
    -   Upgraded ossfs2.0 to `v2.0.5.ack.1`.
        
        -   Enabled ossfs 2.0 monitoring by default.
            
        -   Memory cache mode is supported to mitigate read amplification issues during model loading. See [Best practices for OSS persistent volume performance optimization](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/best-practices-for-oss-volume-performance-tuning).
            

This upgrade has no impact on running services.

### **November 2025**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.34.3

registry-vpc.{{regionID}}.aliyuncs.com/acs/csi-plugin:v1.34.3

2025-11-30

-   New features
    
    -   New cloud disks can be created from snapshots using the `erofs` file system.
        
    -   Existing filesets can be used within CPFS for Lingjun file systems.
        
    -   Cross-zone network switching is available in CPFS for Lingjun volumes.
        
    -   Health status is monitored for OSS volume mount points.
        
-   Optimization
    
    -   Upgraded ossfs 2.0 to v2.0.4 with added support for arm64 architecture and improved monitoring metrics.
        
-   Bug fix
    
    -   An occasional segmentation fault in ossfs 1.0 caused by the underlying `libfuse2` handling empty path requests is fixed.
        

This upgrade has no impact on running services.

### **October 2025**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.26.14-e9322a6-aliyun

registry-vpc.{{regionID}}.aliyuncs.com/acs/csi-plugin:v1.26.14-e9322a6-aliyun

2025-10-17

> This version is in canary release.

Known issues are fixed.

**Important**

This is a backport version specifically for ACK clusters running Kubernetes versions 1.20, 1.22, and 1.24.

This upgrade has no impact on running services.

### **September 2025**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.34.1

registry-vpc.{{regionID}}.aliyuncs.com/acs/csi-plugin:v1.34.1

2025-09-30

-   Metrics can be exposed in ossfs 2.0.
    
-   ossfs 1.0 is upgraded to [version 1.91.8](/help/en/oss/developer-reference/version-1-91-8).
    
-   Automatic network type switching is available in Cloud Parallel File Storage (CPFS) for Lingjun volumes.
    

No impact on online services when you Install or upgrade components.

### **August 2025**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.33.4-576836c-aliyun

registry-vpc.{{regionID}}.aliyuncs.com/acs/csi-plugin:v1.33.4-576836c-aliyun

2025-08-15

-   The concurrency issue in CPFS is fixed.
    
-   ossfs 1.0 is updated to [version 1.91.7](/help/en/oss/developer-reference/version-1-91-7).
    
-   ossfs 2.0 is updated to [V2.0.2 beta](/help/en/oss/developer-reference/release-notes-of-ossfs-2-0#5db7d692ddby7) and RRSA authentication is available on ACK.
    
-   Regional ESSD is General Availability (GA). This includes support for force-attaching disks in disaster recovery scenarios and auto-discovery of nodes that support this disk type.
    
-   The bug that caused some capacity metrics to be hidden is fixed.
    

No impact on online services when you Install or upgrade components.

### **June 2025**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.33.3-884df97-aliyun

registry-vpc.{{regionID}}.aliyuncs.com/acs/csi-plugin:v1.33.3-884df97-aliyun

2025-06-27

-   Containerized mounting of Elastic File Client (EFC) and CPFS is supported.
    
-   ossfs 2.0 to output logs to stdout is available.
    
-   ossfs 2.0 is updated to V2.0.1 beta.
    
-   Security hardening mode for instance metadata is supported.
    
-   The `zoneId` parameter in StorageClass is deprecated. Use `allowedTopologies` instead.
    

No impact on online services when you Install or upgrade components.

### May 2025

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.33.1-67e8986-aliyun

registry-vpc.{{regionID}}.aliyuncs.com/acs/csi-plugin:v1.33.1-67e8986-aliyun

2025-05-20

-   ossfs 2.0 is supported.
    
-   The default OpenAPI domain name of ECS is modified.
    

No impact on online services when you Install or upgrade components.

Faster disk mounting and unmounting in concurrent scenarios may increase cluster resource usage:

-   The throttling for the csi-provisioner client is increased from the default of 25 to 100, and the number of threads handling requests is increased from 16 to 32.
    
-   When many Persistent Volume Claims (PVCs) and Persistent Volumes (PVs) are used, the API server resource usage of the cluster will slightly increase.
    
-   When many PVCs and PVs are used, the resource usage of csi-provisioner will slightly increase.
    

**Important**

Only ACK clusters that run Kubernetes 1.26 and later support this version.

### March 2025

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.32.2-757e24b-aliyun

registry-vpc.{{regionID}}.aliyuncs.com/acs/csi-plugin:v1.32.2-757e24b-aliyun

2025-03-30

-   The issue with elastic ephemeral disks (EEDs) used for serverless computing is fixed.
    
-   The logic of modifying cloud disk types on Elastic Compute Service (ECS) nodes is optimized.
    

No impact on workloads.

**Important**

Only ACK clusters that run Kubernetes 1.26 and later support this version.

v1.26.12-b479bab-aliyun

registry-vpc.{{regionID}}.aliyuncs.com/acs/csi-plugin:v1.26.12-b479bab-aliyun

2025-03-23

-   Runtime dependency on Elastic Compute Service (ECS) metadata server is reduced.
    
-   The auto-snapshot feature during scaling is removed.
    
-   No automatic modification to OSS endpoints `vpc100-xxx`.
    
-   The number of DescribeDisks API calls is reduced when disk is mounted at the central side.
    
-   Concurrent operations on the same cloud disk is avoided.
    

No impact on workloads.

**Important**

This is a backport version specifically for ACK clusters running Kubernetes versions ranging from 1.20 to 1.24.

### January 2025

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.32.1-35c87ee-aliyun

registry-vpc.{{regionID}}.aliyuncs.com/acs/csi-plugin:v1.32.1-35c87ee-aliyun

2025-01-03

-   The API access to ECS is optimized.
    
-   Disk mounting and unmounting are accelerated.
    
-   The component image size is optimized.
    
-   The version of ossfs is upgraded to 1.91.5.
    
    -   The mount failure caused by missing root path `/` permissions when mounting non-existent subdirectories in buckets is fixed.
        
    -   The issue that mounting a bucket prefix `/` under specific policy settings may introduce unexpected results is fixed.
        
    -   The ossfs issue that files are incorrectly recognized as existing when `HeadObject` returns a 403 error code is fixed.
        
    -   The default value of `complement_stat` is set to `true` to reduce scenarios where folders are misidentified as files.
        
    -   The `free_space_ratio` parameter is added.
        

No impact on online services when you Install or upgrade components.

Faster disk mounting and unmounting in concurrent scenarios may increase cluster resource usage:

-   The throttling for the csi-provisioner client is increased from the default of 5 to 10, and the number of threads handling requests is increased from 10 to 16.
    
-   When many Persistent Volume Claims (PVCs) and Persistent Volumes (PVs) are used, the API server resource usage of the cluster will slightly increase.
    
-   When many PVCs and PVs are used, the resource usage of csi-provisioner will slightly increase.
    

**Important**

Only ACK clusters that run Kubernetes 1.26 and later support this version.

### December 2024

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.31.4-9819c8b-aliyun

registry-vpc.{{regionID}}.aliyuncs.com/acs/csi-plugin:v1.31.4-9819c8b-aliyun

2024-12-01

-   Vulnerabilities in the BaseImage and the Go version are fixed.
    
-   Validation for the FeatureGate field is added.
    
-   The issue that may occur when you expand a partition is fixed.
    
-   Snapshots during disk expansion are no longer supported.
    
-   By default, csi-provisioner uses the AliyunCSManagedCsiProvisionerRole.
    

No impact on workloads.

**Important**

Only ACK clusters that run Kubernetes 1.26 and later support this version.

### November 2024

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.26.11-b093aed-aliyun

registry-vpc.{{regionID}}.aliyuncs.com/acs/csi-plugin:v1.26.11-b093aed-aliyun

2024-11-01

-   The metrics related to NAS are fixed, and metrics at byte-precision are added.
    
-   The `forceDelete` field is added to forcibly delete disk snapshots.
    
-   The instant access feature is enabled for disk snapshots by default.
    

No impact on workloads.

**Important**

This is a backport version specifically for ACK clusters running Kubernetes versions ≥1.20 and ≤1.24.

### October 2024

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.31.3-df937b8-aliyun

registry-vpc.{{regionID}}.aliyuncs.com/acs/csi-plugin:v1.31.3-df937b8-aliyun

2024-10-30

-   The issue that OSS volumes fail to be mounted during node auto-repair is fixed.
    
-   Disk mounting and unmounting are accelerated.
    
-   The security hardening mode in the metadata server of Elastic Compute Service (ECS) is supported in CSI.
    
-   The default version of ossfs is upgraded to 1.91.4.
    
    -   The deadlock issue that occasionally occurs when disk resources are insufficient is fixed.
        
    -   The issue that custom Multipurpose Internet Mail Extensions (MIME) types are not applied correctly is fixed.
        

No impact on online services when you Install or upgrade components.

Faster disk mounting and unmounting in concurrent scenarios may increase cluster resource usage:

-   The throttling for the csi-provisioner client is increased from the default of 5 to 10, and the number of threads handling requests is increased from 10 to 16.
    
-   When many Persistent Volume Claims (PVCs) and Persistent Volumes (PVs) are used, the API server resource usage of the cluster will slightly increase.
    
-   When many PVCs and PVs are used, the resource usage of csi-provisioner will slightly increase.
    

**Important**

Only ACK clusters that run Kubernetes 1.26 and later support this version.

### September 2024

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.31.1-e749bf2-aliyun

registry-vpc.{{regionID}}.aliyuncs.com/acs/csi-plugin:v1.31.1-e749bf2-aliyun

2024-09-23

-   Mounting disks to an ECS instance is supported in ACK Lingjun clusters.
    
-   Mounting disks to an ECS instance is supported in ACK Edge clusters.
    
-   Mounting disks to an ECS instance is supported in ACK One.
    
-   The managed version of csi-provisioner is supported in ACK managed clusters.
    
-   Elastic ephemeral disks (EEDs) are supported.
    
-   Cross-regional disks are supported.
    
-   Object Storage Service (OSS) monitoring dashboard is updated.
    

No impact on workloads.

**Important**

Only ACK clusters that run Kubernetes 1.26 and later support this version.

v1.26.10-ca674a3-aliyun

registry-vpc.{{regionID}}.aliyuncs.com/acs/csi-plugin:v1.26.10-ca674a3-aliyun

2024-09-12

-   The idempotence issue that may occur during retries for disk creation is fixed.
    
-   Residual mount directories from Kubernetes versions 1.22 and earlier are automatically removed.
    

No impact on workloads.

**Important**

This is a backport version specifically for ACK clusters running Kubernetes versions ≥1.20 and ≤1.24.

### August 2024

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.30.4-c-fe12624-aliyun

registry-vpc.{{regionID}}.aliyuncs.com/acs/csi-plugin:v1.30.4-c-fe12624-aliyun

2024-08-29

-   The default version of ossfs is upgraded to 1.91, and the mounting process for OSS is optimized.
    
-   DiskParallelAttach feature can be enabled for concurrent mounting of cloud disks.
    

This upgrade optimizes the OSS mounting process. For more information, see [\[Product Changes\] Version upgrade and mounting process optimization of ossfs in CSI](/help/en/ack/product-overview/announcement-on-csi-oss-driver-upgrade).

**Important**

-   This version is dedicated to the csi-provisioner component of ACK managed clusters.
    
-   Only ACK clusters that run Kubernetes 1.26 and later support this version.
    

### July 2024

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.30.3-c-921e63a-aliyun

registry-vpc.{{regionID}}.aliyuncs.com/acs/csi-plugin:v1.30.3-c-921e63a-aliyun

2024-07-01

-   csi-provisioner component of ACK managed clusters can be used.
    
-   Ubuntu nodes can be used.
    
-   NAS file system can be mounted on Alibaba Cloud Linux 3 using Transport Layer Security (TLS) protocol.
    
-   The issue that encrypted disks occasionally fail to be formated is fixed.
    

No impact on workloads.

**Important**

-   This version is dedicated to the csi-provisioner component of ACK managed clusters.
    
-   Only ACK clusters that run Kubernetes 1.26 and later support this version.
    

v1.30.3-921e63a-aliyun

registry-vpc.{{regionID}}.aliyuncs.com/acs/csi-plugin:v1.30.3-921e63a-aliyun

2024-07-01

**Important**

If you specify `volumeMode: Filesystem` during the creation of a dynamically provisioned disk volume, you cannot use `accessModes: ReadWriteMany`. Instead, switch to `ReadWriteOnce`. If you specify the access mode as `ReadWriteMany` or `ReadOnlyMany`, you must also set the `multiAttach` parameter. For more information, see [Use dynamically provisioned disk volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-dynamically-provisioned-disk-volumes#p-eir-hhj-wps).

-   Ubuntu nodes can be used.
    
-   NAS file system can be mounted on Alibaba Cloud Linux 3 using TLS protocol.
    
-   The issue that encrypted disks occasionally fail to be formated is fixed.
    

The persistent volume claim (PVC) of the cloud disk is updated.

**Important**

Only ACK clusters that run Kubernetes 1.26 and later support this version.

v1.26.9-9942088-aliyun

registry-vpc.{{regionID}}.aliyuncs.com/acs/csi-plugin:v1.26.9-9942088-aliyun

2024-07-01

The mounting retry logic of NAS and CPFS-NFS is optimized.

No impact on workloads.

**Important**

This is a backport version specifically for ACK clusters running Kubernetes versions ≥1.20 and ≤1.24.

### May 2024

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.30.1-98960d8-aliyun

registry-vpc.{{regionID}}.aliyuncs.com/acs/csi-plugin:v1.30.1-98960d8-aliyun

2024-05-27

Feature gates can be configured to specify a new ossfs version.

No impact on workloads.

**Important**

Only ACK clusters that run Kubernetes 1.26 and later support this version.

v1.26.8-e724570-aliyun

registry-vpc.{{regionID}}.aliyuncs.com/acs/csi-plugin:v1.26.8-e724570-aliyun

2024-05-07

-   The issue that ossfs scans the mlocate directory is fixed. For more information, see [\[Component notice\] The mount targets of OSS volumes are occupied by default OS software such as mlocate during mount path scanning](/help/en/ack/product-overview/announcement-on-the-occupation-of-mount-points-caused-by-some-os-default-carrying-mlocate-and-other-software-packages-to-scan-oss-mount-paths).
    
-   The issue that a disk fails to be mounted due to kubelet upgrade is fixed.
    

No impact on workloads.

**Important**

This version is a Backport version, which supports only ACK clusters that run Kubernetes whose version is in the range of 1.20 to 1.24.

### April 2024

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.28.6-01f3845-aliyun

registry-vpc.{{regionID}}.aliyuncs.com/acs/csi-plugin:v1.28.6-01f3845-aliyun

2024-04-15

-   The role-based access control (RBAC) permissions are split. Permissions on csi-provisioner and csi-plugin are separated.
    
-   RAM Roles for Service Accounts (RRSA) authentication is supported for ossfs.
    
-   Access points are supported by NAS.
    

No impact on workloads.

**Important**

Only ACK clusters that run Kubernetes 1.26 and later support this version.

### February 2024

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.28.5-7785921-aliyun

registry-vpc.{{regionID}}.aliyuncs.com/acs/csi-plugin:v1.28.5-7785921-aliyun

2024-02-29

-   The maximum number of disks that can be mounted to a node can be automatically determined based on the type of the node.
    
-   The globalmount corruption umount logic for deploying ossfs in pods is optimized.
    

No impact on workloads.

**Important**

Only ACK clusters that run Kubernetes 1.26 and later support this version.

### January 2024

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.28.3-eb95171-aliyun

registry-vpc.{{regionID}}.aliyuncs.com/acs/csi-plugin:v1.28.3-eb95171-aliyun

2024-01-31

-   PL-0 Enterprise SSDs (ESSDs) of 1 GiB are supported.
    
-   Metrics related to the root file systems of pods can be exposed.
    

No impact on workloads.

**Important**

Only ACK clusters that run Kubernetes 1.26 and later support this version.

v1.26.7-84a34bb-aliyun

registry-vpc.{{regionID}}.aliyuncs.com/acs/csi-plugin:v1.26.7-84a34bb-aliyun

2024-01-31

-   PL0 ESSDs of 1 GiB are supported.
    
-   Metrics related to the root file systems of pods can be exposed.
    
-   ossfs can be deployed in a non-containerized way.
    

No impact on workloads.

**Important**

This version is a Backport version, which supports only ACK clusters that run Kubernetes whose version is in the range of 1.20 to 1.24.

### December 2023

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.28.2-52291d4-aliyun

registry-{{.Region}}-vpc.ack.aliyuncs.com/acs/csi-plugin:v1.28.2-52291d4-aliyun

2023-12-30

-   The default NAS setting `tcp_slot_table_entries = 128` is supported. For more information, see [How do I change the maximum number of concurrent NFS requests?](/help/en/nas/modify-the-maximum-number-of-concurrent-nfs-requests)
    
-   The issue that occurs if you run ossfs in pods is fixed.
    
-   No memory cache is allocated to the `external-resizer` pod. This reduces the memory usage of the volume plug-in.
    

No impact on workloads. The issue that the mount target of an OSS volume is occupied by software such as mlocate is fixed. For more information, see [\[Component notice\] The mount targets of OSS volumes are occupied by default OS software such as mlocate during mount path scanning](/help/en/ack/product-overview/announcement-on-the-occupation-of-mount-points-caused-by-some-os-default-carrying-mlocate-and-other-software-packages-to-scan-oss-mount-paths).

**Important**

Only ACK clusters that run Kubernetes 1.26 and later support this version.

v1.28.1-de1a873-aliyun

registry-vpc.{{regionID}}.aliyuncs.com/acs/csi-plugin:v1.28.1-de1a873-aliyun

2023-12-06

-   OSS volumes can be mounted to pods deployed on instances that support confidential computing.
    
-   The StorageClass parameter can be customized on the **Add-ons** page of the ACK console.
    
-   The disk rate limiting issue is fixed.
    

No impact on workloads.

**Important**

-   Only ACK clusters that run Kubernetes 1.26 and later support this version.
    
-   In csi-plugin 1.28.1, if you run ossfs in pods, the `/etc/mime.types` file generated on the node by using `mailcap` or `mime-support` does not take effect. If you are using the file, do not update csi-plugin to 1.28.1.
    

### November 2023

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.26.6-26b1327-aliyun

registry-vpc.{{regionID}}.aliyuncs.com/acs/csi-plugin:v1.26.6-26b1327-aliyun

2023-11-17

ossfs can be run in pods.

No impact on workloads.

**Important**

-   Only ACK clusters that run Kubernetes 1.26 and later support this version.
    
-   In csi-plugin 1.26.6, if you run ossfs in pods, the `/etc/mime.types` file generated on the node by using `mailcap` or `mime-support` does not take effect. If you are using the file, do not update csi-plugin to 1.26.6.
    

### September 2023

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.26.5-56d1e30-aliyun

registry-vpc.{{regionID}}.aliyuncs.com/acs/csi-plugin:v1.26.5-56d1e30-aliyun

2023-09-30

-   Inventory check can be skipped when you check the disk types supported by a node.
    
-   lifseaOS is supported by OSS.
    
-   Persistent volume claim (PVC) and persistent volume (PV) tags are added to disk volumes by default.
    
-   An annotation is added to specify the maximum number of disks that can be mounted to a node.
    
-   Rescheduling is supported during disk creation.
    

No impact on workloads.

### August 2023

**Important**

To update the CSI plug-in to 1.26.4, you must update csi-provisioner and csi-plugin to 1.26.4 at the same time.

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.26.4-e3de357-aliyun

registry-vpc.{{regionID}}.aliyuncs.com/acs/csi-plugin:v1.26.4-e3de357-aliyun

2023-08-31

-   The maximum number of disks that can be mounted to a node can be automatically determined under certain limits.
    
-   The OSS domain name concatenation issue is fixed.
    
-   The logic for using metric is optimized.
    

No impact on workloads.

v1.26.3-796c9dc-aliyun

registry-vpc.{{regionID}}.aliyuncs.com/acs/csi-plugin:v1.26.3-796c9dc-aliyun

2023-08-14

-   The method used to obtain credentials is updated.
    
-   Several NAS issues are fixed.
    
-   The pprof port can be specified.
    

### July 2023

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.26.2-9d15537-aliyun

registry-vpc.{{regionID}}.aliyuncs.com/acs/csi-plugin:v1.26.2-9d15537-aliyun

2023-07-15

-   The RPM Package Manager (RPM) version of alinas is updated.
    
-   Several NAS issues are fixed.
    
-   ossfs installation can be retried.
    

No impact on workloads.

### May 2023

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.26.1-e45b407-aliyun

registry-vpc.{{regionID}}.aliyuncs.com/acs/csi-plugin:v1.26.1-e45b407-aliyun

2023-05-29

The issue that encrypted disks occasionally fail to be mounted is fixed.

No impact on workloads.

### April 2023

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.24.10-7ae4421-aliyun

registry-vpc.{{regionID}}.aliyuncs.com/acs/csi-plugin:v1.24.10-7ae4421-aliyun

2023-04-12

-   Local disks of the Loopdevice type are supported.
    
-   Mounting issues related to instance types equipped with local NVMe SSDs are fixed.
    

No impact on workloads.

### March 2023

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.24.9-74f8490-aliyun

registry-vpc.{{regionID}}.aliyuncs.com/acs/csi-plugin:v1.24.9-74f8490-aliyun

2023-03-15

-   The observabilities of Container Network File System (CNFS) can be used to identify issues caused by I/O operations on NAS clients.
    
-   Cluster stability is improved and known issues are fixed.
    

No impact on workloads.

### February 2023

**Important**

If your cluster contains nodes that use CentOS 7.9 images and the xfs file system is used to persist data, do not update csi-plugin to this version or later. The kernel of CentOS 7.9 is outdated and no longer suitable for this csi-plugin version. In this case, if you update csi-plugin to this version or later, errors are reported in the pods to which the xfs file system is mounted. Other file systems are not affected.

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.24.7-48214b0-aliyun

registry-vpc.{{regionID}}.aliyuncs.com/acs/csi-plugin:v1.24.7-48214b0-aliyun

2023-02-20

-   The issue that disk resizing fails because sidecar containers are deployed by using custom images is fixed.
    
-   The issue that ESSD creation fails because multiple performance levels (PLs) are specified is fixed.
    
-   The base image is upgraded to Alinux3.
    

No impact on workloads.

### January 2023

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.24.5-39a3970-aliyun

registry-vpc.{{regionID}}.aliyuncs.com/acs/csi-plugin:v1.24.5-39a3970-aliyun

2023-01-30

Some event notifications are optimized to improve user experience.

No impact on workloads.

### December 2022

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.24.4-7371f039-aliyun

registry-vpc.{{regionID}}.aliyuncs.com/acs/csi-plugin:v1.24.4-b0a6692-aliyun

2022-12-02

-   The deletion protection feature is supported for disks.
    
-   Anolis OS is supported.
    
-   Statically provisioned OSS volumes can be mounted to ACK Lingjun managed clusters.
    
-   Hot update is supported by the CSI caching client.
    
-   The performance of continuous integration and continuous delivery (CI/CD) pipelines and data distribution is improved.
    

No impact on workloads.

### October 2022

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.24.3-55228c1-aliyun

registry.cn-{{regionID}}.aliyuncs.com/acs/csi-plugin:v1.24.3-55228c1-aliyun

2022-10-30

-   csi-plugin can be deployed on ECS Bare Metal instances that run the Kylin operating system.
    
-   Multiple `PLs` are supported.
    
-   The initialization logic is optimized.
    

No impact on workloads.

### **September 2022**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.24.2-5b34494d-aliyun

registry.cn-{{regionID}}.aliyuncs.com/acs/csi-plugin:v1.24.2-5b34494d-aliyun

2022-09-28

-   Kubernetes 1.24 is supported.
    
-   OSS bucket lifecycle management is supported by CNFS.
    
-   Observability is supported by the caching feature of CNFS.
    

No impact on workloads.

v1.24.1-5c38ee7-aliyun

registry.cn-{{regionID}}.aliyuncs.com/acs/csi-plugin:v1.24.1-5c38ee7-aliyun

2022-09-01

Kubernetes 1.24 is supported.

No impact on workloads.

### **August 2022**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.22.14-820d8870-aliyun

registry.cn-{{regionID}}.aliyuncs.com/acs/csi-plugin:v1.22.14-820d8870-aliyun

2022-08-25

-   I/O operation monitoring is supported when OSS volumes are mounted to pods.
    
-   ossfs is optimized for downloads of large files. The default block size for block downloads is changed from 5 MB to 20 MB. The number of concurrent download threads is changed from 5 to 20.
    
-   The protocol for API calls of all Alibaba Cloud services is changed from HTTP to HTTPS.
    
-   The ConfigMap used to configure canary release settings is deleted from CPFS 2.0 and alinas.
    
-   Snapshots can be created for ESSDs during disk resizing.
    

No impact on workloads.

### **July 2022**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.22.12-b797ad9-aliyun

registry.cn-{{regionID}}.aliyuncs.com/acs/csi-plugin:v1.22.12-b797ad9-aliyun

2022-07-28

-   Snapshots can be created for mountable disks.
    
-   The status of the node to which a disk is mounted can be checked after the disk is unmounted. You can determine whether to recheck the mounting status of the node based on the status.
    

No impact on workloads.

v1.22.11-abbb810e-aliyun

registry.cn-{{regionID}}.aliyuncs.com/acs/csi-plugin:v1.22.11-abbb810e-aliyun

2022-07-13

-   Disks can be mounted to Edge Node Service (ENS) nodes.
    
-   Dynamically and statically provisioned volumes that use CPFS 2.0 are supported.
    
-   The caching feature provided by the CNFS client is supported.
    
-   Statically provisioned alinas volumes are supported and TLS can be used for encrypted transmission.
    
-   Statically provisioned OSS volumes can be mounted to JindoFS.
    
-   ossfs 1.87 is released. The issue that OSS volumes fail to be mounted due to duplicate entries in concurrent processing scenarios is fixed.
    

No impact on workloads.

### **March 2022**

**Important**

To use csi-plugin 1.22.8-8d3a569-aliyun and later, make sure that the Kubernetes version of your cluster is later than 1.20.

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.22.8-8d3a569-aliyun

registry.cn-{{regionID}}.aliyuncs.com/acs/csi-plugin:v1.22.8-8d3a569-aliyun

2022-03-16

**Note**

The Kubernetes version of your ACK clusters must be later than 1.20.

-   The issue that ossfs runs with a delay of 1 second on Alibaba Cloud Linux 3 is fixed.
    
-   New features that are provided by CSI 1.22 are supported for clusters that run Kubernetes 1.22.
    
-   IOPS limits and throughput limits can be specified in cgroups for Logical Volume Manager (LVM) volumes.
    
-   NVMe disks can be expanded.
    
-   Vulnerabilities in the CentOS 7 base image are patched.
    

No impact on workloads.

### **December 2021**

**Important**

When you update the CSI plug-in, you must update csi-provisioner before you update csi-plugin.

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.20.8-ba07e52-aliyun

registry.cn-{{regionID}}.aliyuncs.com/acs/csi-plugin:v1.20.8-ba07e52-aliyun

2021-12-22

-   TLS authentication is supported by LVM.
    
-   If the quota feature is enabled for a NAS file system and the NAS file system is mounted in subpath mode, you must disable the quota feature before you can delete the PV that is used to mount the NAS file system.
    

No impact on workloads.

### **November 2021**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.20.7-aafce42-aliyun

registry.cn-{{regionID}}.aliyuncs.com/acs/csi-plugin:v1.20.7-aafce42-aliyun

2021-11-26

-   The issue that ossfs cannot synchronize data in real time is fixed.
    
-   The issue that NAS volumes fail to be mounted is fixed.
    

No impact on workloads

### **October 2021**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.20.6-2be29b1-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/csi-plugin:v1.20.6-2be29b1-aliyun

2021-10-29

Container OS images are supported.

No impact on workloads

### **September 2021**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.20.5-ff6490f-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/csi-plugin:v1.20.5-ff6490f-aliyun

2021-09-24

-   The sharepath feature of NAS is supported.
    
-   The issue that the component is frequently restarted due to the unstable etcd is fixed.
    
-   The ARM64 and AMD64 architectures are supported.
    

No impact on workloads

### **August 2021**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.18.8.51-c504ef45-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/csi-plugin:v1.18.8.51-c504ef45-aliyun

2021-08-19

-   The time parameter for the recycle bin is added to Container Network File System (CNFS).
    
-   The `API version` of CNFS is changed from `v1alpha1` to `v1beta1`.
    
-   The issue that ossfs cannot synchronize data in real time is fixed.
    
-   By default, the forcible disk detaching feature is disabled.
    

No impact on workloads

### **July 2021**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.18.8.48-cd524404-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/csi-plugin:v1.18.8.48-cd524404-aliyun

2021-07-06

-   The issue that NAS file systems cannot be expanded by using CNFS is fixed.
    
-   OSS buckets can be mounted to nodes that are deployed by using the Alibaba Cloud Linux 3 image.
    

No impact on workloads

### **June 2021**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.18.8.47-30ba5d25-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/csi-plugin:v1.18.8.47-30ba5d25-aliyun

2021-06-25

-   The `volumeCapacity` field is removed from NAS volume configurations. The `allowVolumeExpansion` field is used to specify whether to enable the quota feature.
    
-   The `selflink` field is removed from NAS volume configurations.
    

No impact on workloads

### **May 2021**

**Important**

In csi-provisioner 1.18.8.47-906bd535-aliyun and later versions, the same image address is provided for installing csi-provisioner and csi-plugin.

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.18.8.47-906bd535-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/csi-plugin:v1.18.8.47-906bd535-aliyun

2021-05-20

-   Disk partitions can be mounted.
    
-   Disk partitions can be expanded.
    

No impact on workloads

### **April 2021**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.6.0-e360c7e43-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/csi-provisioner:v1.6.0-e360c7e43-aliyun

2021-04-08

-   Kubernetes 1.20 is supported. The `metadata.selflink` field is removed.
    
-   The tag of the cluster ID is automatically added to disks.
    
-   NAS volumes can be expanded within the quota limit.
    

No impact on workloads

### **January 2021**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.6.0-b6f763a43-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/csi-provisioner:v1.6.0-b6f763a43-aliyun

2021-01-13

-   Database File System (DBFS) volumes are supported.
    
-   By default, the volume monitoring feature is enabled.
    
-   Local volumes of the QuotaPath type are supported.
    
-   The VolumeSnapshot List feature is supported.
    
-   Quota groups are supported by NAS volumes.
    
-   Custom disk types are supported.
    

No impact on workloads

### **November 2020**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.6.0-b6f763a43-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/csi-provisioner:v1.6.0-b6f763a43-aliyun

2020-11-02

-   The deployment template is updated to merge drivers into one container.
    
-   The issue that volumes used to mount subdirectories in Extreme NAS file systems fail to be created is fixed.
    
-   Kubernetes 1.18 is supported.
    
-   Labels can be added to NAS volumes when you create NAS volumes.
    

No impact on workloads

### **August 2020**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.4.0-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/csi-provisioner:v1.4.0-aliyun

2020-08-05

-   The issue that snapshots cannot be created from disks is fixed.
    
-   The issue that dynamic provisioning of NAS volumes fails due to residual data is fixed.
    
-   The check logic of BDF nodes when csi-provisioner is started is fixed.
    
-   UUIDs can no longer be used to obtain device paths.
    

No impact on workloads

### **July 2020**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.4.0-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/csi-provisioner:v1.4.0-aliyun

2020-07-13

-   Elastic Block Storage (EBS) snapshots are supported. You can use EBS snapshots to restore data to a beta version.
    
-   Extreme NAS volumes can be created and deleted.
    
-   The Config SysConfig parameter of EBS volumes is supported when you configure PVs.
    
-   The issue that block volumes are loaded twice in BDF mode is fixed.
    
-   EBS and NAS volumes are allowed to access APIs by using internal domain names.
    
-   The CPFS driver is upgraded and the dependency on the kernel is removed.
    

No impact on workloads

### **April 2020**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.4.0-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/csi-provisioner:v1.4.0-aliyun

2020-04-20

-   EBS volumes can be unmounted before you delete the volumes.
    
-   The disk creation policy is updated. Standard SSDs are created in preference to ultra disks. Ultra disks are created only if no standard SSD is available.
    
-   UUID is supported as a high-priority search option to search for devices that use EBS volumes.
    
-   The authentication management in managed Kubernetes clusters is updated.
    
-   Security Token Service (STS) is supported to connect to OSS buckets.
    
-   DuplicateMountPoint errors in EBS are fixed.
    
-   The BDF protocol is supported to bind EBS volumes after the volumes are connected.
    

No impact on workloads

### **February 2020**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.4.0-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/csi-provisioner:v1.4.0-aliyun

2020-02-18

-   Kubernetes clusters that use CSI and have no Internet access are supported.
    
-   The issues related to mount path checks in EBS are fixed.
    

No impact on workloads

### **December 2019**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v1.2.2-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/csi-provisioner:v1.2.2-aliyun

2019-12-20

-   The EBS PV name can be used as the disk ID. This feature is also supported by FlexVolume.
    
-   Mounting parameters can be configured for EBS volumes in the make file system (MKFS) stage.
    
-   Mount options can be configured to have a higher priority than the volume attributes of NAS volumes.
    
-   Mount options of OSS volumes can be validated in OSS connectors.
    
-   Subpaths of OSS buckets can be mounted as volumes.
    
-   Volume topology can be used to dynamically configure LVM.
    

No impact on workloads
