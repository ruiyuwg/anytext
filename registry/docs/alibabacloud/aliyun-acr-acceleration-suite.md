This topic describes the updated features of and release notes for aliyun-acr-acceleration-suite.

## Overview

aliyun-acr-acceleration-suite is a client plug-in that enables on-demand image loading and accelerates image loading. You can deploy this component on a worker node as a DaemonSet. Container Service for Kubernetes (ACK) collaborates with Container Registry to enable accelerated images. After you deploy aliyun-acr-acceleration-suite in a cluster, the system automatically converts a source image into an accelerated image. When an image pull request is received, the system decompresses data based on your business requirements without interrupting services. In this case, the system does not have to download or decompress full data. This accelerates application deployment and enables on-demand image loading.

**Note**

Container Service for Kubernetes (ACK) managed clusters or ACK dedicated clusters of V1.16.9 or later, ACK Edge clusters, ACK Serverless clusters, or ACK Lingjun clusters of V1.26.3 or later, or Alibaba Cloud Container Compute Service (ACS) clusters. The cluster must use one of the following operating systems: Alibaba Cloud Linux 2.1903, Alibaba Cloud Linux 3.2104, Alibaba Cloud Linux 3.2104 LTS 64-bit Arm Edition, Alibaba Cloud Linux UEFI 2.1903, and CentOS 7.9.

## Usage notes

For more information about aliyun-acr-acceleration-suite, see [Load resources of a container image on demand](/help/en/acr/user-guide/load-resources-of-a-container-image-on-demand#task-1955391).

## Release notes

### March 2025

**Version**

**Image address**

**Release date**

**Description**

**Impact**

0.2.10

registry-cn-hangzhou-vpc.ack.aliyuncs.com/acs/aliyun-acr-acceleration-suite:v0.3.0.1-e2dd3e0-aliyun

2025-03-17

Containers managed by the component's webhook will not be scheduled to Lingjun node pools.

No impact on workloads

### July 2024

**Version**

**Image address**

**Release date**

**Description**

**Impact**

0.2.9

registry-cn-hangzhou-vpc.ack.aliyuncs.com/acs/aliyun-acr-acceleration-suite:v0.3.0.1-e2dd3e0-aliyun

2024-07-17

Lingjun clusters are supported.

No impact on workloads

0.2.8

registry-cn-hangzhou-vpc.ack.aliyuncs.com/acs/aliyun-acr-acceleration-suite:v0.3.0.1-e2dd3e0-aliyun

2024-07-17

Edge clusters are supported.

No impact on workloads

0.2.7

registry-cn-hangzhou-vpc.ack.aliyuncs.com/acs/aliyun-acr-acceleration-suite:v0.3.0.1-e2dd3e0-aliyun

2024-07-17

The Webhook can configure the multi-arch image as its accelerated equivalent.

No impact on workloads

### February 2024

**Version**

**Image address**

**Release date**

**Description**

**Impact**

0.2.6

registry-vpc.cn-hangzhou.aliyuncs.com/acr-toolkit/aliyun-acr-acceleration-suite:v0.3.0.0-dd959f1-aliyun

2024-02-19

-   Only the deployment template is modified and pods with high priority can be scheduled.
    

-   The component can be installed on ARM-based nodes.
    

No impact on workloads

### **September 2023**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

0.2.5

registry-vpc.cn-hangzhou.aliyuncs.com/acr-toolkit/aliyun-acr-acceleration-suite:v0.3.0.0-dd959f1-aliyun

2023-09-07

Role-based access control (RBAC) permissions are optimized.

No impact on workloads

### **August 2022**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

0.2.3

registry-vpc.cn-hangzhou.aliyuncs.com/acr-toolkit/aliyun-acr-acceleration-suite:v0.3.0.0-127f0eb-aliyun

2022-08-02

-   ACK clusters that use the containerd runtime can use the on-demand image loading feature.
    
-   ack-virtual-node and ACK Serverless clusters can use the on-demand image loading feature.
    

No impact on workloads

### **June 2022**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

0.2.2

registry-vpc.cn-hangzhou.aliyuncs.com/acr-toolkit/aliyun-acr-acceleration-suite:v0.2.0.0-b01f3302-aliyun

2022-06-08

-   The issue that ACK clusters that run Kubernetes 1.22 failed to synchronize the secrets that are used to pull images is fixed.
    
-   The update operation is no longer supported by mutating webhooks. This prevents unexpected actions.
    
-   The stability of aliyun-acr-acceleration-suite is improved.
    
    -   The `requests and limits` parameters are added to the configurations of the pods that are provisioned for aliyun-acr-acceleration-suite.
        
    -   The timeout period of webhooks is changed to 5 seconds.
        
    -   The time-to-live (TTL) for the webhook cache is changed to 60 seconds.
        

No impact on workloads

### **March 2021**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

0.2.0

registry-vpc.cn-hangzhou.aliyuncs.com/acr-toolkit/aliyun-acr-acceleration-suite:v0.2.0.0-b745758c-aliyun

2021-03-15

-   HTTP readiness and HTTP liveness probes are supported for mutating webhooks.
    
-   Labels can be added to workloads to enable on-demand image loading. The key of the label is `k8s.aliyun.com/image-accelerate-mode`. The value of the label is `on-demand`.
    
    **Note**
    
    For more information, see [Load resources of a container image on demand](/help/en/acr/user-guide/load-resources-of-a-container-image-on-demand#task-1955391).
    

No impact on workloads

### **November 2020**

**Version**

**Image address**

**Release date**

**Description**

**Impact**

0.1.0

registry.cn-hangzhou.aliyuncs.com/acs/aliyun-acr-acceleration-suite:v0.1.0.0-00e2f5e1-aliyun

2020-11-19

Management of image storage plug-ins, configuration of access to image repositories, and automatic injection of accelerated images to pods are supported.

We recommend that you install and upgrade the component during off-peak hours.
