The metrics-server component is used to collect monitoring metrics. You can use metrics-server to collect monitoring metrics from your cluster. This topic introduces metrics-server, and describes the usage notes and release notes for metrics-server.

## Introduction

The metrics-server component is a monitoring tool that Container Service for Kubernetes (ACK) develops based on open source Metrics Server. You can use metrics-server to collect monitoring metrics from your cluster, monitor basic resources that are used in your cluster, and configure Horizontal Pod Autoscaler (HPA) to work based on the collected metrics. You can call the Metrics API to retrieve monitoring metrics.

For more information about open source Metrics Server, see [Kubernetes Metrics Server](https://github.com/kubernetes-sigs/metrics-server).

## Usage notes

You can use metrics-server to collect monitoring metrics about the basic resources that are used by the pods in your cluster. For more information, see [Monitor basic resources](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/monitor-basic-resources#task-1180854).

## Release notes

### **January 2024**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v0.3.9.7-85b3699-aliyun

registry.{REGION}.aliyuncs.com/acs/metrics-server:v0.3.9.7-85b3699-aliyun

January 2024

-   The monitoring performance for large-scale clusters is optimized.
    
-   The scaling mechanism of the Horizontal Pod Autoscaler (HPA) is optimized to ensure that the scaling operations are stable even during rolling updates. You must configure the `--enable-hpa-rolling-update-skipped=true` parameter. For more information, see [FAQ about auto scaling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling).
    

No impact on workloads.

### **June 2023**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v0.3.9.5-1e8461a-aliyun

registry.{REGION}.aliyuncs.com/acs/metrics-server:v0.3.9.5-1e8461a-aliyun

June 2023

-   The security of the metrics-server component is improved.
    
-   The log output mechanism is optimized to reduce unnecessary log generation.
    

No impact on workloads.

### **May 2023**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v0.3.9.4-ff225cd-aliyun

registry.{REGION}.aliyuncs.com/acs/metrics-server:v0.3.9.4-ff225cd-aliyun

May 2023

This image version is compatible with ACK clusters that run Kubernetes 1.26.

No impact on workloads.

### **March 2023**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v0.3.9.3-ff225cd-aliyun

registry.{REGION}.aliyuncs.com/acs/metrics-server:v0.3.9.3-ff225cd-aliyun

March 2023

The issue that metrics are not collected from virtual nodes in ACK Edge clusters is fixed.

No impact on workloads.

v0.3.9.3-628a248-aliyun

registry.{REGION}.aliyuncs.com/acs/metrics-server:v0.3.9.3-628a248-aliyun

February 2023

The issue that CPU metrics spike when the collection of monitoring data is interrupted is fixed.

No impact on workloads.

### **July 2022**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v0.3.9-d554015-aliyun

registry.{REGION}.aliyuncs.com/acs/metrics-server:v0.3.9-d554015-aliyun

July 2022

-   Vulnerabilities in the component image are patched.
    
-   This image version is compatible with ACK clusters that run Kubernetes 1.22.
    

No impact on workloads.

### **May 2022**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v0.3.8.7-307cf45-aliyun

registry.{REGION}.aliyuncs.com/acs/metrics-server:v0.3.8.5-307cf45-aliyun

May 2022

This image version is compatible with ACK clusters that run Kubernetes 1.22.

No impact on workloads.

### **February 2022**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v0.3.8.6-307cf45-aliyun

registry.{REGION}.aliyuncs.com/acs/metrics-server:v0.3.8.5-307cf45-aliyun

February 2022

This image version is compatible with ACK clusters that run Kubernetes 1.22 and earlier.

No impact on workloads.

### **May 2021**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v0.3.8.5-307cf45-aliyun

registry.{REGION}.aliyuncs.com/acs/metrics-server:v0.3.8.5-307cf45-aliyun

May 2021

-   This image version is compatible with ACK clusters that run Kubernetes 1.20 and earlier.
    
-   Monitoring of basic resources used by pods is supported by the latest version of CloudMonitor.
    

No impact on workloads.

### **April 2021**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

v0.2.2-b4bf266-aliyun

registry.{REGION}.aliyuncs.com/acs/metrics-server:v0.2.2-b4bf266-aliyun

April 2021

-   Metric collection from Windows nodes and Linux nodes is supported.
    
-   The following scaling periods are supported: 15 seconds, 20 seconds, 30 seconds, and 60 seconds.
    
-   The issue that HPA adds excess pods during rolling updates of applications is fixed.
    

We recommend that you update the component to the latest version.

## References

For more information about the problems you may encounter when you use the metrics-server component, see [FAQ about metrics-server](/help/en/ack/faq-about-components#task-2101364).
