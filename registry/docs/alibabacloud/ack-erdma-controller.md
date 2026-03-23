ACK eRDMA Controller manages elastic network interfaces (ENIs) for Elastic Remote Direct Memory Access (eRDMA) and enables eRDMA features for pod configurations in Container Service for Kubernetes (ACK) clusters. This topic describes the release notes for this controller.

## **Introduction**

eRDMA is an RDMA network service provided by Alibaba Cloud that delivers low latency, high throughput, and high elasticity. Developed based on the fourth-generation SHENLONG architecture and Virtual Private Cloud (VPC), eRDMA is fully compatible with the RDMA ecosystem and provides an ultra-large, inclusive network for Elastic Compute Service (ECS) instances.

ACK eRDMA Controller is a Kubernetes controller for eRDMA that provides ENI management, scheduling, and pod networking capabilities for eRDMA.

## **Usage note**

For more information about how to use ACK eRDMA Controller, see [Use eRDMA to accelerate container networking](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-erdma-in-ack-clusters).

## Change history

### July 2025

**Version**

**Modification Time**

**Description**

**Impact**

v0.2.8

July 10, 2025

-   The management of existing eRDMA devices on nodes is optimized.
    
-   The controller is prevented from being scheduled to virtual nodes.
    

This update has no impact on workloads.

### May 2025

**Version**

**Change Time**

**Description**

**Impact**

v0.2.6

May 15, 2025

-   ECS metadata access in security hardening mode is supported.
    
-   RDMA device allocation anomalies in ContainerOS environments are fixed.
    

This update has no impact on workloads.

### March 2025

**Version**

**Release date**

**Description**

**Impact**

v0.2.5

March 13, 2025

-   Pods in hostNetwork mode can use eRDMA.
    
-   Clusters running Kubernetes 1.20 are supported.
    

This update has no impact on workloads.

### February 2025

**Version**

**Release date**

**Description**

**Impact**

v0.2.4

February 19, 2025

-   Dependency on Webhooks is eliminated in the Shared Memory Communication over RDMA (SMC-R) feature.
    
-   Agent permission dependencies are minimized.
    

This update has no impact on workloads.

### December 2024

**Version**

**Change Time**

**Description**

**Impact**

v0.2.3

December 5, 2024

Permissions are authorized through [ACK roles](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ack-default-roles), eliminating the dependency on RAM Roles for Service Accounts (RRSA) authorization configurations.

This update has no impact on workloads.

### November 2024

**Version**

**Release date**

**Description**

**Impact**

v0.2.2

November 26, 2024

The routing priority configuration for ENIs of eRDMA is optimized.

This update has no impact on workloads.

v0.2.1

November 25, 2024

-   ContainerOS is supported as a node operating system.
    
-   The failure that occasionally occurs when you download and install the driver is fixed.
    

This update has no impact on workloads.

v0.1.0

November 18, 2024

ACK eRDMA Controller is released.

This update has no impact on workloads.
