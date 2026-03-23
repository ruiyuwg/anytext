storage-operator provides storage features such as automatic volume expansion, online cloud disk resizing, storage resource monitoring, and data prefill (creating high-performance volumes pre-filled with data from an OSS bucket) to improve the O&M efficiency of Alibaba Cloud storage resources in ACK clusters. This topic describes how to use the storage-operator component and lists its changelog.

## Component introduction

By default, storage-operator is deployed in the cluster as a Deployment with the following features enabled.

-   Volume auto scaling: Automatically scales disk and NAS volumes.
    
    To disable this feature, add the Feature Gate `Expander=false`.
    
-   Disk configuration modification: Modifies disk configurations.
    
    To disable this feature, add the Feature Gate `DiskVolumeUpgradeControl=false`.
    
-   Stateful application migration: Migrates stateful applications across zones.
    
    To disable this feature, add the Feature Gate `ApplicationMigrationAcrossAZ=false`.
    

## Change Record

### January 2026

**Version**

**Image address**

**Changes**

**Modification Time**

**Impact**

v1.35.1

registry-{{regionID}}.ack.aliyuncs.com/acs/storage-operator:v1.35.1-4b60408

-   Added support for the VolumePopulator feature to [prefill OSS data into high-performance volumes on demand](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/prefetch-oss-data-into-high-performance-volumes-on-demand).
    

2026-01-19

Your services will not be affected by this upgrade.

### October 2025

**Version**

**Image address**

**Change Details**

**Modification Time**

**Impact**

v1.33.2

registry-{{regionID}}.ack.aliyuncs.com/acs/storage-operator:v1.33.2-f32da36

-   Changed the base image to a distroless image.
    
-   Fixed an intermittent concurrency conflict between goroutines.
    

2025-10-17

No impact on workloads.

### August 2025

**Version**

**Image address**

**Changes**

**Modification Time**

**Impact**

v1.33.1

registry-{{regionID}}.ack.aliyuncs.com/acs/storage-operator:v1.33.1-cb82bad

-   The storage-cnfs component was split into a managed cnfs-controller add-on, now available separately in the Add-ons page. For compatibility, cnfs-controller is automatically installed when you install or upgrade this component.
    
-   Removed the sub-component management model. The functionality of the former storage-auto-expander and storage-controller is now built-in and no longer requires ConfigMap-based management.
    
-   Added support for enabling or disabling individual features via Feature Gates.
    

2025-08-20

No impact on workloads.

v1.32.10

registry-{{regionID}}.ack.aliyuncs.com/acs/storage-operator:v1.32.10-aa189c8

Optimized memory usage of the storage-auto-expander component.

2025-08-08

No impact on workloads.

### May 2025

**Version**

**Image address**

**Changes**

**Modification Time**

**Impact**

v1.32.9

registry-{{regionID}}.ack.aliyuncs.com/acs/storage-operator:v1.32.9

Improved security for the storage-cnfs and storage-controller components using security-hardened mode to access metadata.

2025-05-14

No impact on workloads.

### March 2025

**Version**

**Image address**

**Changes**

**Last Modified**

**Impact**

v1.32.5

registry-{{regionID}}.ack.aliyuncs.com/acs/storage-operator:v1.32.5

Fixed an issue in the storage-cnfs component.

2025-03-31

No impact on workloads.

v1.32.4

registry-{{regionID}}.ack.aliyuncs.com/acs/storage-operator:v1.32.4

-   Deprecated the storage-monitor component. Its functionality is now handled by storage-cnfs.
    
-   The storage-cnfs component supports capacity monitoring for NAS volumes and publishes alert events on PVCs when available capacity drops below 15%.
    
-   Fixed repeated expansion attempts for NAS volumes in the storage-auto-expander component.
    

2025-03-12

No impact on workloads.

### September 2024

**Version**

**Image address**

**Changes**

**Modification Time**

**Impact of the change**

v1.31.1

registry-{{regionID}}.ack.aliyuncs.com/acs/storage-operator:v1.31.1

-   Upgraded the Alpine base image for storage-controller to version 3.18.
    
-   The storage-monitor component now supports byte-level capacity monitoring for NAS volumes.
    
-   Fixed issues in storage-auto-expander and upgraded its Alpine base image to version 3.18.
    

2024-09-26

No impact on workloads.

### July 2024

**Version**

**Image address**

**Changes**

**Modification Time**

**Impact of the change**

v1.30.2

registry-{{regionID}}.ack.aliyuncs.com/acs/storage-operator:v1.30.2

Optimized component logs.

2024-07-12

Your services will not be affected by this upgrade.

### May 2024

**Version**

**Image address**

**Change details**

**Modification Time**

**Change impact**

v1.30.1

registry-{{regionID}}.ack.aliyuncs.com/acs/storage-operator:v1.30.1

Updated dependencies and disabled older TLS versions to improve system security.

2024-05-31

No impact on workloads.

### January 2024

**Version**

**Image address**

**Changes**

**Modification Time**

**Change impact**

v1.28.2-be0cf84-aliyun

registry.cn-{{regionID}}.aliyuncs.com/acs/storage-operator:v1.28.2-be0cf84-aliyun

Fixed an issue in the storage-controller component.

2024-01-17

No impact on workloads.

### December 2023

**Version**

**Image address**

**Changes**

**Modification Time**

**Impact**

v1.28.1-4e62141-aliyun

registry.cn-{{regionID}}.aliyuncs.com/acs/storage-operator:v1.28.1-4e62141-aliyun

-   Fixed issues in the storage-monitor component.
    
-   Updated the base image to Alpine.
    

2023-12-25

No impact on workloads.

### October 2023

**Version number**

**Image address**

**Changes**

**Modification Time**

**Impact of changes**

v1.26.2-1de13b6-aliyun

registry.cn-{{regionID}}.aliyuncs.com/acs/storage-operator:v1.26.2-1de13b6-aliyun

-   Updated storage-controller to v1.26.2-639bc21-aliyun to support cross-zone migration of stateful applications using ESSD cloud disks.
    
-   Updated storage-cnfs to v1.24.39-0e24b92-aliyun to support enabling versioning for newly created OSS buckets and automatically creating associated StorageClasses for NAS volumes.
    

2023-10-25

No impact on workloads.

### July 2023

**Version**

**Image address**

**Changes**

**Modification Time**

**Impact**

v1.26.1-50a1499-aliyun

registry.cn-{{regionID}}.aliyuncs.com/acs/storage-operator:v1.26.1-50a1499-aliyun

Fixed several monitoring and snapshot issues.

2023-07-02

No impact on workloads.

### February 2023

**Version**

**Image address**

**Changes**

**Modification Time**

**Impact of the change**

v1.24.102-b1cfa3d-aliyun

registry.cn-{{regionID}}.aliyuncs.com/acs/storage-operator:v1.24.102-b1cfa3d-aliyun

Added the storage-controller component to support changing cloud disk types.

2023-02-06

No impact on workloads.

### November 2022

**Version**

**Image address**

**Changes**

**Modification Time**

**Impact**

v1.24.97-3eb7acc-aliyun

registry.cn-{{regionID}}.aliyuncs.com/acs/storage-operator:v1.24.97-3eb7acc-aliyun

-   Updated storage-snapshot-manager to v1.22.1-464f816-aliyun.
    
-   Fixed an issue where storage-snapshot-manager occasionally crashed in clusters containing virtual nodes.
    

2022-11-02

No impact on workloads.

### September 2022

**Version**

**Image address**

**Changes**

**Modification Time**

**Impact**

v1.24.95-e2d0756-aliyun

registry.cn-{{regionID}}.aliyuncs.com/acs/storage-operator:v1.24.95-e2d0756-aliyun

Updated storage-cnfs-controller to v1.24.31-262bf31-aliyun.

2022-09-27

No impact on workloads.

### August 2022

**Version**

**Image address**

**Modified content**

**Modification Time**

**Impact of the change**

v1.22.91-c4d5ab4-aliyun

registry.cn-{{regionID}}.aliyuncs.com/acs/csi-plugin:v1.22.91-c4d5ab4-aliyun

Added storage metric collection.

2022-08-25

No impact on workloads.

### July 2022

**Version**

**Image address**

**Changes**

**Modification Time**

**Impact**

v1.22.86-041b094-aliyun

registry.cn-{{regionID}}.aliyuncs.com/acs/csi-plugin:v1.22.86-041b094-aliyun

-   Added support for the File Storage NAS client acceleration feature, which is disabled by default. For more information, see [Enable distributed caching for CNFS NAS clients](/help/en/ack/enable-the-distributed-caching-feature-of-the-cnfs-client#task-2232103).
    
-   Fixed an array-index out of bounds error in the auto-expansion component when disk usage exceeds 100%.
    

2022-07-13

No impact on workloads.

### May 2022

**Version**

**Image address**

**Changes**

**Modification Time**

**Impact of the change**

v1.22.8-aa22537-aliyun

registry.cn-{{region}}.aliyuncs.com/acs/storage-operator:v1.22.8-aa22537-aliyun

Modified cloud disk snapshot YAML files.

2022-05-13

No impact on workloads.

### April 2022

**Version**

**Image address**

**Changes**

**Modification Time**

**Impacts**

v1.22.0.75-5bc07f7-aliyun

registry.cn-{{region}}.aliyuncs.com/acs/storage-operator:v1.22.0.75-5bc07f7-aliyun

Added support for advanced cloud disk snapshot features.

2022-04-14

No impact on workloads.

### March 2022

**Version**

**Image address**

**Changes**

**Modified Time**

**Impact**

v1.18.8.68-9078250-aliyun

registry.cn-{{regionID}}.aliyuncs.com/acs/storage-operator:v1.18.8.68-9078250-aliyun

Patched security vulnerabilities in the CentOS 7 base image.

2022-03-16

No impact on workloads.

### December 2021

**Version**

**Image address**

**Changes**

**Modification Time**

**Impact**

v1.18.8.67-c1aef60-aliyun

registry.cn-{{regionID}}.aliyuncs.com/acs/storage-operator:v1.18.8.67-c1aef60-aliyun

Fixed slow quota activation and automatic expansion failures for NAS file systems.

2021-12-22

No impact on workloads.

### September 2021

**Version**

**Image address**

**Change details**

**Modification Time**

**Impact of changes**

v1.18.8.60-a5ba617-aliyun

registry-vpc.${region}.aliyuncs.com/acs/storage-operator:v1.18.8.60-a5ba617-aliyun

-   Enabled Quota by default for CNFS-managed NAS to support automatic expansion.
    
-   Fixed pod scheduling to unavailable nodes.
    
-   Allowed pod scheduling to Linux nodes and non-virtual nodes.
    
-   Fixed an issue where CNFS status could not be updated.
    

2021-09-24

No impact on workloads.

### August 2021

**Version**

**Image address**

**Changes**

**Last Modified**

**Impact**

v1.18.8.55-e398ce5-aliyun

registry-vpc.${region}.aliyuncs.com/acs/storage-operator:v1.18.8.55-e398ce5-aliyun

-   Added support for CNFS to create Capacity NAS file systems by default.
    
-   Set the archiveOnDelete parameter to false in the StorageClass automatically created by CNFS. This deletes the subdirectory mounted by a PV when the PV is deleted.
    
-   Fixed excessive CPU usage in storage-monitor.
    

2021-08-16

No impact on workloads.

### June 2021

**Version**

**Image address**

**Changes**

**Modification Time**

**Impact**

v1.18.8.37-c63030b-aliyun

registry-vpc.${region}.aliyuncs.com/acs/storage-operator:v1.18.8.37-c63030b-aliyun

-   Added support for automatic expansion.
    
-   Added support for CNFS.
    

2021-06-25

No impact on workloads.

### March 2021

**Version**

**Image address**

**Changes**

**Modification Time**

**Impact of changes**

v1.18.8.28-18cca7b-aliyun

registry-vpc.${region}.aliyuncs.com/acs/storage-operator:v1.18.8.28-18cca7b-aliyun

New features:

-   Added support for batch snapshots.
    
-   Added support for scheduled snapshots.
    
-   Added support for cluster monitoring.
    

2021-03-25

No impact on workloads.
