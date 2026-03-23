The ack-fluid component is a distributed dataset orchestration and acceleration engine in the cloud-native AI suite. It provides features such as dataset abstraction, data access and acceleration, and data orchestration and scheduling for data-intensive applications in cloud-native environments. ack-fluid simplifies the data management process in AI production and improves data access efficiency for model training and model inference. This topic describes the basic information, usage notes, and release notes for the ack-fluid component.

## **Component introduction**

ack-fluid defines Kubernetes CustomResourceDefinitions (CRDs), such as Dataset and Runtime, that allow you to query and manage the data lifecycle in your cluster using native Kubernetes methods.

ack-fluid accelerates access to application data in your cluster by orchestrating and managing a distributed cache system. Fluid supports various distributed cache systems as runtimes, such as Alluxio, JuiceFS, JindoFS, and EFC. Fluid also supports ThinRuntime, a generic and extensible storage system implementation. ThinRuntime lets you connect to your self-managed storage systems in a low-code way and reuse the core capabilities of Fluid, such as data orchestration, management, and platform access.

ack-fluid provides standardized data access APIs. You can mount specific persistent volume claims (PVCs) to pods to access data in containers. Fluid uses the Fluid CSI plugin to mount storage systems in standard Kubernetes environments and the Fluid FUSE Sidecar plugin in serverless Kubernetes environments. This abstracts the differences in the underlying runtime environment.

For more information, see [Elastic datasets](/help/en/ack/cloud-native-ai-suite/user-guide/overview-of-fluid/).

## **Usage notes**

The ack-fluid component supports only ACK Pro clusters, ACK Serverless Pro clusters, and ACK Edge Pro clusters that run Kubernetes 1.18 or later. For more information about how to install and use the ack-fluid component, see [Accelerate data access](https://www.alibabacloud.com/help/en/container-service-for-kubernetes/latest/data-acceleration).

## **Release notes**

### **April 2024**

**Version**

**Change Details**

**Modification Time**

**Impact**

v1.0.8

Fluid now supports dynamic dataset mounting. The mount targets of datasets for all PVs and PVCs referenced in a container can be automatically updated and dynamically mounted.

April 25, 2024

No impact on workloads.

### **February 2024**

**Version**

**Changes**

**Modification Time**

**Impact**

v1.0.7

-   JindoRuntime is upgraded to use JindoCache as the default cache engine.
    
-   Supports FUSE client affinity scheduling semantics.
    
-   Fixed an issue where the default read-only permission of a dataset was not passed to the ThinRuntime client.
    
-   Supports automatic enabling of control plane components based on the cluster resource type.
    
-   Enhanced the security of Fluid components.
    

February 4, 2024

No impact on workloads.

### **December 2023**

**Version**

**What's changed**

**Modification Time**

**Impact**

v1.0.6

-   Data operations now support setting resource requests and limits.
    
-   Supports custom configuration of multi-level affinity scheduling policies.
    
-   JindoRuntime now supports accelerated data access for PVs and hostPath volumes.
    

December 14, 2023

No impact on workloads.

### **November 2023**

**Version**

**Changes**

**Change Time**

**Impact**

v1.0.5

-   Fixed an issue with mount point propagation in the Fluid CSI plugin.
    
-   Supports multi-level affinity scheduling policies.
    
-   JindoRuntime now supports persistent storage for Master component metadata.
    
-   JuiceFSRuntime now supports dynamic updates for FUSE components.
    
-   Data operations now support a scheduled reclamation feature.
    
-   Pods for automatic CRD upgrade jobs can be reclaimed on a schedule.
    
-   Fixed an issue with redundant mounting of AccessKey pairs and tokens in the JindoFSx cache engine.
    
-   Fixed an issue where the Alluxio cache engine failed to parse sharedOptions.
    

November 17, 2023

No impact on workloads.

### **September 2023**

**Version**

**Description**

**Modification Time**

**Impact**

v1.0.4

-   Fixed bugs related to the Fluid CSI plugin.
    
-   Supports configuring the FUSE sidecar to start in non-blocking mode.
    
-   Supports dynamic updates for JuiceFSRuntime configurations.
    
-   Supports deployment in ACK LINGJUN Cluster environments.
    

September 18, 2023

No impact on workloads.

### **August 2023**

**Version**

**Description of changes**

**Modification Time**

**Impact**

v1.0.3

-   Added support for the FUSE sidecar privileged mount mode.
    
-   Fixed an out-of-memory (OOM) issue in the JuiceFSRuntime controller.
    
-   Fixed issues related to the FUSE auto-recovery feature.
    
-   Fixed an issue where runtime resources remained after an upgrade.
    

August 18, 2023

No impact on workloads.

### **July 2023**

**Version**

**Change History**

**Modification Time**

**Impact**

v1.0.2

-   The Helm backend storage driver (HELM\_DRIVER) is switched to ConfigMap mode to further limit the Role-Based Access Control (RBAC) permissions of the Fluid control plane components.
    
-   Added support for ThinRuntime to connect to third-party storage systems. ConfigMaps are used to store parameter information.
    
-   Added support for using local disks of ECI instances as the cache storage medium.
    
-   Added support for scheduled DataLoad cache prefetching jobs.
    

July 18, 2023

-   Changing the Helm backend storage driver may leave behind some Helm-related Secret resources.
    
-   If a cluster uses ThinRuntime to interface with third-party storage systems, newly created ThinRuntime clients may fail to run as normal due to compatibility issues after ack-fluid is updated to 1.0.2 or later. For more information, see [Fluid](https://github.com/fluid-cloudnative/fluid/blob/master/docs/zh/samples/thinruntime.md).
    
    **Note**
    
    ThinRuntime client services that are already running are not affected by the component upgrade.
    

### **June 2023**

**Version**

**Description**

**Modification Time**

**Impact**

v1.0.1

-   Added support for anti-affinity scheduling constraints for ARM64 nodes.
    
-   Added support for configuring automatic CRD upgrades.
    
-   Fixed an issue where the Fluid CSI plugin left residual HostPath mount targets.
    
-   Fixed a compatibility issue with Kubernetes versions earlier than 1.21.
    

June 19, 2023

No impact on workloads.

v1.0.0

-   JuiceFSRuntime now supports scheduled DataMigrate jobs.
    
-   Fixed a volume injection issue in the EFCRuntime FUSE sidecar mode.
    
-   Optimized the Dataset status update logic to accelerate application pod startup.
    
-   Added detailed error message output when a runtime deployment fails.
    

June 7, 2023

No impact on workloads.

### May 2023

**Version**

**Changes**

**Modification Time**

**Impact**

v0.9.10

-   Increased the resources for control plane components in ACK Serverless environments.
    
-   Added support for the EFCRuntime controller component.
    

May 9, 2023

No impact on workloads.

### April 2023

**Version**

**Changes**

**Modification Time**

**Impact**

v0.9.9

-   JindoRuntime now supports environment variable configuration.
    
-   The JuiceFSRuntime controller now supports configuration of the controller concurrency.
    
-   JuiceFSRuntime now supports subdirectory quota configuration.
    
-   Fixed an issue of inconsistent path handling between DataMigrate and DataLoad.
    
-   Optimized the binding time for Fluid PVCs and PVs.
    

April 25, 2023

No impact on workloads.

v0.9.8

-   DataMigrate now supports using PVCs as data sources.
    
-   JindoRuntime now supports setting container image information.
    
-   Added support for mounting subpaths of dataset PVCs.
    
-   Added support for monitoring Fluid control plane components.
    

April 18, 2023

No impact on workloads.

v0.9.7

-   Enhanced the security of Fluid components.
    
-   Fixed bugs related to Alluxio component template rendering.
    

April 6, 2023

-   This upgrade includes security vulnerability fixes.
    
-   No impact on workloads.
    

### March 2023

**Version**

**Changes**

**Modification Time**

**Impact**

v0.9.6

-   Added support for DataMigrate data migration.
    
-   DataLoad now supports configurable node affinity scheduling.
    
-   Optimized the Fluid CSI mounting logic.
    

March 22, 2023

No impact on workloads.
