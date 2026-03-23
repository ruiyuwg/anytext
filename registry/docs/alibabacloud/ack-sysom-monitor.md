ack-sysom-monitor is a container monitoring component for Container Service for Kubernetes (ACK). It monitors the operating system kernel layer in ACK clusters. This topic describes the basic information, usage, and release notes for this component.

## Component introduction

SysOM (System Operation & Maintenance) is a unified O&M platform for operating systems, developed by the OpenAnolis community System O&M SIG. It helps you perform complex operating system management tasks, such as host management, system monitoring, fault diagnosis, log auditing, and security control. As the monitoring component of SysOM, ack-sysom-monitor collects and enhances metrics at the kernel layer. It has low resource consumption and uses eBPF technology to perform in-depth collection of node and container metrics. This enables it to address common issues such as system jitter, latency, resource leaks, and abnormal pod memory usage. For more information, see [SysOM kernel-layer container monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/sysom-kernel-level-container-monitoring).

The ack-sysom-monitor component also exposes monitoring metrics in the standard Prometheus format. For more information about these metrics, see [Metric description](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/sysom-kernel-level-container-monitoring#e52b97c06di0t).

## Billing of ack-sysom-monitor

After the ack-sysom-monitor component is enabled, related components automatically send monitoring metrics to Managed Service for Prometheus. These metrics are considered as [custom metrics](/help/en/arms/prometheus-monitoring/basic-metrics/). Fees are charged for custom metrics.

Before you enable this feature, we recommend that you read [Billing overview](/help/en/arms/prometheus-monitoring/product-overview/billing-overview-2) to understand the billing rules of custom metrics. The fees may vary based on the cluster size and number of applications. You can follow the steps in [View resource usage](/help/en/arms/prometheus-monitoring/product-overview/view-resource-usage) to monitor and manage resource usage.

## Usage instructions

For information about how to use the ack-sysom-monitor component, see [Enable the ack-sysom-monitor monitoring feature](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/sysom-kernel-level-container-monitoring#e3ee35c06ds5m).

## Change history

### **December 2025**

**Version number**

**Registry Address**

**Change time**

**Changes**

**Impact**

1.1.3

registry-vpc.{{.Region}}.aliyuncs.com/acs/ack-sysom-monitor:v1.1.3-9cae9e5-aliyun

December 11, 2025

-   Fixed an issue that caused the ack-sysom-monitor container to restart.
    
-   Added container-level event metrics for average CPU `load` and memory `oom` (out of memory) events.
    
-   By default, metrics for system components such as the kube-system namespace are no longer collected. This reduces the total number of metrics. You can change the configuration to enable metric collection.
    

This upgrade does not affect your services.

### **July 2025**

**Version number**

**Registry Address**

**Change time**

**Changes**

**Impact**

1.1.2

registry-vpc.{{.Region}}.aliyuncs.com/acs/ack-sysom-monitor:v1.1.2-94a45de-aliyun

July 28, 2025

-   Fixed an issue where pod cache files were missed during scans.
    
-   Fixed a security issue in the configuration.
    

This upgrade does not affect your services.

### **May 2025**

**Version number**

**Registry Address**

**Change time**

**Changes**

**Impact**

1.1.1

registry-vpc.{{.Region}}.aliyuncs.com/acs/ack-sysom-monitor:v1.1.1-9300977-aliyun

May 27, 2025

-   Added support for ACK 1.33.
    
-   Fixed an issue that caused occasional startup errors.
    

This upgrade does not affect your services.

### **October 2024**

**Version number**

**Registry Address**

**Change time**

**Changes**

**Impact of changes**

1.1.0

registry-vpc.{{.Region}}.aliyuncs.com/acs/ack-sysom-monitor:v1.1.0-6dcd0ef-aliyun

October 28, 2024

-   Fixed an issue where cgroup v2 could not detect container changes.
    
-   Fixed a startup error.
    

This upgrade does not affect your services.

### **August 2024**

**Version number**

**Registry Address**

**Change time**

**Changes**

**Impact**

1.0.9

registry-vpc.{{.Region}}.aliyuncs.com/acs/ack-sysom-monitor:v1.0.9-ce26b3a-aliyun

August 09, 2024

-   Added support for the Arm64 architecture.
    
-   Added support for cgroup v2.
    
-   Added support for GPU memory monitoring.
    
-   The Pod File Cache panel now displays node file cache and shared memory.
    

This upgrade does not affect your services.

### **May 2024**

**Version number**

**Registry Address**

**Change time**

**Changes**

**Impact**

1.0.8

registry-vpc.{{.Region}}.aliyuncs.com/acs/ack-sysom-monitor:v1.0.8-27e0d9c-aliyun

May 17, 2024

-   Added support for using a ConfigMap to control metric exposure for SysOM features by default.
    
-   Exposed data from the system namespace by default.
    
-   Pod file cache monitoring now supports monitoring the file cache usage of the root cgroup.
    
-   Fixed an issue where no data was available for memory reclaim latency on CentOS systems.
    
-   Fixed an issue that caused abnormal pod CPU utilization.
    

This upgrade does not affect your services.

### **December 2023**

**Version number**

**Registry Address**

**Change time**

**Changes**

**Impact**

1.0.7

registry-vpc.{{.Region}}.aliyuncs.com/acs/ack-sysom-monitor:v1.0.7-5d8a59d-aliyun

December 12, 2023

-   Fixed a double-free issue in PodMem.
    
-   Fixed an issue where PodMem incorrectly judged BTF files in kernel version 5.10.
    
-   Fixed a network interface card parsing failure caused by an excessive number of metric dimensions from the container network plugin.
    
-   Fixed a data loss issue in PodMem on CentOS 7.9 with kernel version 3.10. The issue was caused by a missing kpagecgroup.
    

This upgrade does not affect your services.

### **September 2023**

**Version number**

**Registry Address**

**Change time**

**Changes**

**Impact**

1.0.5

registry-vpc.{{.Region}}.aliyuncs.com/acs/ack-sysom-monitor:v1.0.6-0085be5-aliyun

September 21, 2023

Added support for OS kernel-level memory monitoring for nodes and pods.

This upgrade does not affect your services.
