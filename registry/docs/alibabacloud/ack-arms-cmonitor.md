ack-arms-cmonitor is a monitoring component provided by the Application Real-Time Monitoring Service (ARMS) extended Berkeley Packet Filter (eBPF) edition for Container Service for Kubernetes (ACK) clusters. This topic describes the basic information, usage notes, and release notes for ack-arms-cmonitor.

## Introduction

Alibaba Cloud Application Monitoring eBPF is an all-in-one observability service developed for Kubernetes clusters. Alibaba Cloud Application Monitoring eBPF provides IT developers and O&M engineers with a comprehensive observability solution that can be used to monitor Kubernetes clusters in terms of metrics, traces, logs, and events.

The ack-arms-cmonitor component, developed based on the eBPF technology, can run sandboxed applications securely within Linux without changing the kernel source code or loading kernel modules.

## Usage notes

-   To use the ack-arms-cmonitor component, you must activate the Alibaba Cloud Application Monitoring eBPF. For more information about the free and paid features of the service, see [What is Alibaba Cloud Application Monitoring eBPF?](/help/en/arms/application-monitoring-ebpf/product-overview/what-is-alibaba-cloud-application-monitoring-ebpf-version)
    
-   The ack-arms-cmonitor component is only applicable to Elastic Compute Service (ECS) instances deployed in ACK clusters. It cannot monitor applications running on elastic container instances.
    
-   You can adjust the amount of resources occupied by the ack-arms-cmonitor component on the installation page. By default, the component occupies 0.5 vCPU and 500 MB of memory on each ECS instance.
    

## Release notes

### **April 2024**

**Version**

**Release date**

**Description**

**Impact**

4.1.2

2024-04-02

-   The memory issue of the OTel collector in large-scale computing scenarios is fixed.
    
-   MySQL protocol parsing is supported by default.
    
-   The number of TCP connections is increased and TCP status monitoring is supported.
    

This update has no negative impact on workloads.

We recommend that you update the component to the latest version.

### **February 2024**

**Version**

**Release date**

**Description**

**Impact**

4.1.1

2024-02-27

-   Remote configuration update is supported.
    
-   The length of HTTP headers and request body can be configured.
    
-   Slow request time can be configured.
    
-   The issue that the agent consumes excessive CPU and memory resources is fixed.
    

This update has no negative impact on workloads.

We recommend that you update the component to the latest version.

### January 2024

**Version**

**Release date**

**Description**

**Impact**

4.1.0

2024-01-31

-   Application diagnostics are supported.
    
-   Network monitoring is supported.
    
-   The issue that partial of the cluster topology is not displayed is fixed.
    
-   The component can be installed and used in ACK Edge clusters.
    

This update has no negative impact on workloads.

We recommend that you update the component to the latest version.

### **December 2023**

**Version**

**Release date**

**Description**

**Impact**

4.0.2

2023-12-25

-   The issue that the agent distributes traffic unevenly is fixed.
    
-   The out of memory (OOM) error of the cmonitor-agent component is fixed.
    
-   The size of data sent by a span is reduced.
    

This update has no negative impact on workloads.

We recommend that you update the component to the latest version.

4.0.1

2023-12-15

-   The issue that the CPU and memory statistics cannot be obtained on the Application Overview page is fixed.
    
-   The issue that monitoring data cannot be obtained is fixed.
    

This update has no negative impact on workloads.

We recommend that you update the component to the latest version.

### October 2023

**Version**

**Release date**

**Description**

**Impact**

4.0.0

2023-10-19

-   The component performance is optimized based on the new agent version.
    
-   The console is developed on top of Alibaba Cloud ARMS 4.0, which offers an optimized user experience.
    
-   Kubernetes Monitoring is updated to Application Monitoring eBPF.
    

**Note**

Make sure that [ARMS is activated](/help/en/arms/getting-started/activate-arms). If ARMS is not activated, you cannot query data. The feature is in public preview and is free of charge.

-   The metric data in the new and old versions is incompatible. After the update, you can view the data of the previous version on the **Kubernetes Monitoring** page in the [ARMS console](https://arms-ap-southeast-1.console.aliyun.com/#/home).
    
-   Alerts configured in the old version do not take effect in the new version. You must reconfigure them based on the new metrics.
    

### **February 2023**

**Version**

**Release date**

**Description**

**Impact**

v1.1.7

2023-02-22

The performance and stability of the component are improved to reduce the risks of OOM errors.

This update has no negative impact on workloads.

We recommend that you update the component to the latest version.

### **August 2022**

**Version**

**Release date**

**Description**

**Impact**

v1.1.5

2022-08-29

-   Protocol parsing is supported by MongoDB, Cassandra, PostgreSQL, and RocketMQ.
    
-   By default, topology metrics are disabled to reduce the risks of OOM errors.
    

This update has no negative impact on workloads.

We recommend that you update the component to the latest version.

### **July 2022**

**Version**

**Release date**

**Description**

**Impact**

v1.1.4

2022-07-29

-   The probe architecture is upgraded to support uprobes and finer-grained event filtering.
    
-   Container packet capturing is supported.
    
-   Metrics for sockets of container-level new TCP connections are supported.
    

This update has no negative impact on workloads.

We recommend that you update the component to the latest version.

### **May 2022**

**Version**

**Release date**

**Description**

**Impact**

v1.1.3

2022-05-23

Helm hooks are added to resolve update issues.

This update has no negative impact on workloads.

We recommend that you update the component to the latest version.

v1.1.2

2022-05-17

matchLabels is updated to resolve update issues.

This update has no negative impact on workloads.

We recommend that you update the component to the latest version.

### **April 2022**

**Version**

**Release date**

**Description**

**Impact**

v1.1.1

2022-04-11

The feature that allows you to describe the topologyKey in a Service to enable topology-aware pod scheduling is deprecated. This improves the compatibility.

This update has no negative impact on workloads.

We recommend that you update the component to the latest version.

v1.1.0

2022-04-08

-   The ack-arms-cmonitor component is no longer reliant on the Managed Service for Prometheus agent. This improves stability.
    
-   The default sampling rate for error and slow requests is reduced to improve stability.
    

This update has no negative impact on workloads.

We recommend that you update the component to the latest version.

### **December 2021**

**Version**

**Release date**

**Description**

**Impact**

v1.0.0

2021-12-02

Custom AccessKey IDs and AccessKey secrets are supported.

This update has no negative impact on workloads.

We recommend that you update the component to the latest version.

### **November 2021**

**Version**

**Release date**

**Description**

**Impact**

v0.4.0

2021-11-30

-   The permissions to read Secrets globally are revoked. Only ARMS tokens can be read by ack-arms-cmonitor.
    
-   The hostIPC configuration is removed.
    

This update has no negative impact on workloads.

We recommend that you update the component to the latest version.

v0.3.0

2021-11-10

-   The ARMS Addon Token feature is supported.
    
-   The ClusterId and region\_id environment variables are optimized.
    

This update has no negative impact on workloads.

We recommend that you update the component to the latest version.

### **September 2021**

**Version**

**Release date**

**Description**

**Impact**

v0.2.0

2021-09-16

-   Domain Name System (DNS), Cassandra, and the S3 protocol are supported.
    
-   The user\_id and region\_id environment variables are added.
    

This update has no negative impact on workloads.

We recommend that you update the component to the latest version.

### **June 2021**

**Version**

**Release date**

**Description**

**Impact**

v0.1.0

2021-06-15

The first version is released.

This update has no negative impact on workloads.

We recommend that you update the component to the latest version.
