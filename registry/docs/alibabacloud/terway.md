Terway is Alibaba Cloud's open-source Container Network Interface (CNI) plugin based on a virtual private cloud (VPC). It supports Kubernetes-standard network policies to define access policies between containers. You can use the Terway network component to enable network communication within Kubernetes clusters. This topic describes Terway component information, usage instructions, and release notes.

## Introduction

Terway is a CNI plugin developed by ACK. It builds networks based on Alibaba Cloud's Elastic Network Interfaces (ENIs), fully utilizing cloud resources. Terway supports eBPF to accelerate network traffic and reduce latency. It also supports Kubernetes-standard network policies to define access policies between containers.

In a Terway network plugin, each Pod has its own network stack and IP address. Pods within the same ECS instance communicate directly through internal forwarding. Pods across different ECS instances communicate via messages directly forwarded through the VPC's ENIs. Because it does not require tunneling technologies such as VxLAN to encapsulate messages, Terway mode networks offer high communication performance.

### **Supported Kubernetes versions**

**Terway Version**

**Kubernetes versions**

≥ v1.10

≥ Kubernetes 1.31

v1.9

≥ Kubernetes 1.30

v1.8

≥ Kubernetes 1.24

## Usage Notes

For more information about how to use Terway, see [Work with Terway](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-terway#task-1797447).

## Release Notes

### March 2026

**Version**

**Registry Address**

**Change Time**

**Changes**

**Impact of changes**

v1.16.8

registry-cn-hangzhou.ack.aliyuncs.com/acs/terway:v1.16.8

2026-03-02

**Note**

This version is currently in phased release.

-   Fixed an issue where data plane configuration checks in IPVLAN mode caused excessive resource consumption.
    
-   Fixed a Node Map leak issue in DatapathV2 mode.
    
-   Fixed an issue where Lingjun network interface controllers (NICs) could not be deleted after creation failed.
    
-   Symmetric routing is adapted for nftables.
    

-   This upgrade has no negative impact on workloads.
    

### January 2026

**Version**

**Registry Address**

**Modified Time**

**Changes**

**Impact**

v1.16.7

registry-cn-hangzhou.ack.aliyuncs.com/acs/terway:v1.16.7

2026-01-14

-   Fixed a potential `device or resource busy` issue in exclusive ENI mode for Lingjun nodes.
    

-   This upgrade has no negative impact on workloads.
    

v1.16.6

registry-cn-hangzhou.ack.aliyuncs.com/acs/terway:v1.16.6

2026-01-05

-   Fixed an issue where Trunk-type Pod security groups did not take effect when Kube Proxy Replacement was enabled on nodes.
    
-   Upgraded Cilium to v1.16.18.
    
-   Optimized the handling of evicted Pods.
    
-   Optimized network interface controller (NIC) topology handling for Lingjun nodes.
    

-   This upgrade has no negative impact on workloads.
    
-   Cilium-related CRDs are updated during the upgrade. If your cluster is large, kube-apiserver load may increase temporarily. Monitor kube-apiserver resource usage.
    

v1.16.5

registry-cn-hangzhou.ack.aliyuncs.com/acs/terway:v1.16.5

2026-01-04

-   Optimized the shared ENI mount process.
    
-   Fixed a naming conflict issue for multiple network interface controllers (NICs) in exclusive ENI mode.
    

This upgrade has no negative impact on workloads.

### December 2025

**Version**

**Registry Address**

**Change Time**

**Changes**

**Impact**

v1.16.4

registry-cn-hangzhou.ack.aliyuncs.com/acs/terway:v1.16.4

2025-12-09

-   Fixed an issue with Trunk-type Pods in Alibaba Cloud Linux 4.
    
-   Internal communication IP changes in exclusive ENI mode.
    

[\[Product change\] Internal communication IP change for Terway exclusive ENI mode](/help/en/ack/product-overview/product-change-announcement-on-ip-change-of-terway-exclusive-eni-mode-internal-communication).

This upgrade has no negative impact on workloads.

### November 2025

**Version**

**Registry Address**

**Modification Time**

**Changes**

**Impact**

v1.16.2

registry-cn-hangzhou.ack.aliyuncs.com/acs/terway:v1.16.2

2025-11-21

-   Fixed a Hairpin access issue in IPVLAN.
    
-   Adapted for ECS idempotence error codes.
    
-   Optimized IP Rule synchronization timing.
    
-   Optimized IP allocation efficiency for exclusive Pods.
    
-   Shared ENI mode is adapted for new Lingjun instance types.
    

This upgrade has no negative impact on workloads.

v1.9.18

registry-cn-hangzhou.ack.aliyuncs.com/acs/terway:v1.9.18

2025-11-12

-   Adapted for Alibaba Cloud Linux 4.
    

This upgrade has no negative impact on workloads.

### October 2025

**Version**

**Registry Address**

**Modification Time**

**Changes**

**Impact**

v1.16.1

registry-cn-hangzhou.ack.aliyuncs.com/acs/terway:v1.16.1

2025-10-24

-   Fixed an issue with Lingjun nodes using Virtual Functions (VFs).
    

This upgrade has no negative impact on workloads.

v1.16.0

registry-cn-hangzhou.ack.aliyuncs.com/acs/terway:v1.16.0

2025-10-13

-   Optimized TerwayControlplane startup speed.
    
-   Supports configuring idle IP reclamation policies.
    

This upgrade has no negative impact on workloads.

### September 2025

**Version**

**Registry Address**

**Change Time**

**What's Changed**

**Impact**

v1.15.3

registry-cn-hangzhou.ack.aliyuncs.com/acs/terway:v1.15.3

2025-09-16

-   Fixed an issue with Lingjun topology configuration.
    
-   Adapted for Alibaba Cloud Linux 4.
    

This upgrade has no negative impact on workloads.

v1.15.2

registry-cn-hangzhou.ack.aliyuncs.com/acs/terway:v1.15.2

2025-09-10

-   Adapted for Lingjun topology configuration.
    

This upgrade has no negative impact on workloads.

### August 2025

**Version**

**Registry Address**

**Modification Time**

**Changes**

**Impact**

v1.15.1

registry-cn-hangzhou.ack.aliyuncs.com/acs/terway:v1.15.1

2025-08-29

Adapted for Lingjun high-density instance types.

This upgrade has no negative impact on workloads.

v1.15.0

registry-cn-hangzhou.ack.aliyuncs.com/acs/terway:v1.15.0

2025-08-11

-   Upgraded Cilium to version 1.16.12.
    
-   Supports symmetric routing configuration.
    
-   Supports configurable IP reclamation periods.
    
-   Fixed an issue where IPv6 routes were repeatedly added.
    

This upgrade has no negative impact on workloads.

### July 2025

**Version**

**Registry Address**

**Modification Time**

**Modifications**

**Change impact**

v1.9.17

registry-cn-hangzhou.ack.aliyuncs.com/acs/terway:v1.9.17

2025-07-15

ContainerOS 3.5 is supported.

This upgrade has no negative impact on workloads.

v1.8.18

registry-cn-hangzhou.ack.aliyuncs.com/acs/terway:v1.8.18

2025-07-15

ContainerOS 3.5 is supported.

This upgrade has no negative impact on workloads.

v1.14.5

registry-cn-hangzhou.ack.aliyuncs.com/acs/terway:v1.14.5

2025-07-10

-   Removed socat dependency from health checks.
    
-   Fixed an issue with repeated updates to PodENI resources.
    
-   Exclusive ENI supports node-level network configuration.
    

This upgrade has no negative impact on workloads.

### June 2025

**Version**

**Registry Address**

**Change Time**

**Changes**

**Change Impact**

v1.14.4

registry-cn-hangzhou.ack.aliyuncs.com/acs/terway:v1.14.4

2025-06-11

-   Adapted for hybrid cloud node pools.
    
-   Supports upgrading ACK Pro to version 1.31 or later, adding Lingjun nodes, and using exclusive ENI network mode.
    

This upgrade has no negative impact on workloads.

v1.14.3

registry-cn-hangzhou.ack.aliyuncs.com/acs/terway:v1.14.3

2025-06-06

-   Fixed an issue that might cause Service access failures.
    
-   Supports creating new ACK Pro clusters of version 1.31 or later, adding Lingjun nodes, and using exclusive ENI network mode.
    

This upgrade has no negative impact on workloads.

v1.9.16

registry-cn-hangzhou.ack.aliyuncs.com/acs/terway:v1.9.16

2025-06-06

ECS instance metadata can be accessed in security hardening mode.

This upgrade has no negative impact on workloads.

v1.14.2

registry-cn-hangzhou.ack.aliyuncs.com/acs/terway:v1.14.2

2025-06-04

Fixed an issue where container health checks failed when using network policies.

This upgrade has no negative impact on workloads.

### May 2025

**Version**

**Registry Address**

**Modification Time**

**Change description**

**Impact**

v1.14.1

registry-cn-hangzhou.ack.aliyuncs.com/acs/terway:v1.14.1

2025-05-21

Fixed the LENI quota calculation issue.

This upgrade has no negative impact on workloads.

### April 2025

**Version**

**Registry Address**

**Modification Time**

**Content Changes**

**Impact**

v1.14.0

registry-cn-hangzhou.ack.aliyuncs.com/acs/terway:v1.14.0

2025-04-28

-   Upgraded Cilium to version 1.16.
    
-   Supports hardened mode for ECS metadata access.
    
-   Fixed an issue where IP addresses could not be allocated in exclusive ENI mode.
    

-   For DatapathV2 clusters, Cilium disables the Prometheus port 9962 by default. To use it, follow the instructions in [Customize Terway Configuration Parameters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/terway-configuration-parameters).
    
-   For DatapathV2 clusters, access to LoadBalancer Services is rejected if no Endpoint exists.
    
-   Cilium-related CRDs are updated during cluster upgrades. If your cluster is large, kube-apiserver load may increase temporarily. Monitor kube-apiserver resource usage.
    
-   This upgrade has no negative impact on workloads.
    

v1.13.7

registry-cn-hangzhou.ack.aliyuncs.com/acs/terway:v1.13.7

2025-04-07

Fixed an issue where vSwitch configurations did not take effect.

This upgrade has no negative impact on workloads.

### March 2025

**Version**

**Registry Address**

**Modification Time**

**Change Details**

**Impact of Changes**

v1.9.15

registry-cn-hangzhou.ack.aliyuncs.com/acs/terway:v1.9.15

2025-03-31

Fixed a potential update failure issue.

This upgrade has no negative impact on workloads.

v1.13.6

registry-cn-hangzhou.ack.aliyuncs.com/acs/terway:v1.13.6

2025-03-17

-   Adjusted the Elastic Network Interface (ENI) security group limit to 10.
    
-   ENIs disable source/destination IP verification for ECS instances by default.
    
-   Supports managing ACK Lingjun nodes.
    
-   Supports PodNetworking configurations without selectors.
    
-   Pods with exclusive node ENIs can evenly use multiple physical network interface controllers (NICs) on the node.
    
-   Fixed an issue where resource update conflicts affected IP allocation.
    

This upgrade has no negative impact on workloads.

v1.9.14

registry-cn-hangzhou.ack.aliyuncs.com/acs/terway:v1.9.14

2025-03-17

ENIs disable source/destination IP verification for ECS instances by default.

This upgrade has no negative impact on workloads.

v1.8.17

registry-cn-hangzhou.ack.aliyuncs.com/acs/terway:v1.8.17

2025-03-17

ENIs disable source/destination IP verification for ECS instances by default.

This upgrade has no negative impact on workloads.

v1.13.5

registry-cn-hangzhou.ack.aliyuncs.com/acs/terway:v1.13.5

2025-03-12

Fixed a potential misconfiguration issue in Trunk-type Pod gateways.

This upgrade has no negative impact on workloads.

### February 2025

**version number**

**Registry Address**

**Change Time**

**Changes**

**Impact**

v1.13.4

registry-cn-hangzhou.ack.aliyuncs.com/acs/terway:v1.13.4

2025-02-20

Fixed a data collection issue in Hubble.

This upgrade has no negative impact on workloads.

### January 2025

**Version**

**Registry Address**

**Change Time**

**Changes**

**Impact**

v1.13.3

registry-cn-hangzhou.ack.aliyuncs.com/acs/terway:v1.13.3

2025-01-22

-   Optimized the validation logic for instances that do not support Trunk.
    
-   Cilium Kubernetes Client queries per second (QPS) can be configured.
    
-   Fixed the connection issue that occasionally occurs in hairpin mode.
    
-   Fixed an issue where Pod IP addresses might be released under certain circumstances.
    
-   Optimized the Pod IP allocation mechanism, fixing tail latency issues during the assignment process.
    

This upgrade has no negative impact on workloads.

v1.9.13

registry-cn-hangzhou.ack.aliyuncs.com/acs/terway:v1.9.13

2025-01-22

-   Cilium Kubernetes Client queries per second (QPS) can be configured.
    
-   Fixed the connection issue that occasionally occurs in hairpin mode.
    
-   Fixed an issue where Pod IP addresses might be released under certain circumstances.
    
-   Optimized the Pod IP allocation mechanism, fixing tail latency issues during the assignment process.
    

This upgrade has no negative impact on workloads.

v1.8.16

registry-cn-hangzhou.ack.aliyuncs.com/acs/terway:v1.8.16

2025-01-22

-   Cilium Kubernetes Client queries per second (QPS) can be configured.
    
-   Fixed the connection issue that occasionally occurs in hairpin mode.
    
-   Fixed an issue where Pod IP addresses might be released under certain circumstances.
    
-   Optimized the Pod IP allocation mechanism, fixing tail latency issues during the assignment process.
    

This upgrade has no negative impact on workloads.

### December 2024

**Version**

**Registry Address**

**Last Modified**

**What's changed**

**Impact**

v1.13.2

registry-cn-hangzhou.ack.aliyuncs.com/acs/terway:v1.13.2

2024-12-30

-   Fixed the leak issue introduced by traffic control.
    
-   Fixed the missing IP rule issue.
    
-   Fixed an issue where tasks continuously retry when a vSwitch does not have sufficient IP addresses.
    

This upgrade has no negative impact on workloads.

v1.13.1

registry-cn-hangzhou.ack.aliyuncs.com/acs/terway:v1.13.1

2024-12-18

-   Fixed the inconsistent status issue that occurs when an ENI fails to be associated.
    
-   Reduced Role-Based Access Control (RBAC) permissions of Terway.
    

This upgrade has no negative impact on workloads.

v1.9.12

registry-cn-hangzhou.ack.aliyuncs.com/acs/terway:v1.9.12

2024-12-11

Fixed the resource contention issue with the [ACK eRDMA Controller](/help/en/ack/product-overview/ack-erdma-controller).

This upgrade has no negative impact on workloads.

v1.8.15

registry-cn-hangzhou.ack.aliyuncs.com/acs/terway:v1.8.15

2024-12-11

Fixed the resource contention issue with the [ACK eRDMA Controller](/help/en/ack/product-overview/ack-erdma-controller).

This upgrade has no negative impact on workloads.

v1.13.0

registry-cn-hangzhou.ack.aliyuncs.com/acs/terway:v1.13.0

2024-12-04

-   Fixed an issue where Trunk mode might not work.
    
-   Ingress Quality of Service (QoS) is supported in DatapathV2 mode.
    
-   IPVLAN mode is deprecated. The data plane switches to DatapathV2 after a node restart.
    

This upgrade has no negative impact on workloads.

### November 2024

**Version**

**Registry Address**

**Modification Time**

**Changes**

**Impact**

v1.12.1

registry-cn-hangzhou.ack.aliyuncs.com/acs/terway:v1.12.1

2024-11-22

Fixed an issue where health checks might fail in IPVLAN mode.

This upgrade has no negative impact on workloads.

v1.12.0

registry-cn-hangzhou.ack.aliyuncs.com/acs/terway:v1.12.0

2024-11-15

-   Fixed an issue where PodENI configurations might be overwritten in exclusive ENI mode.
    
-   Fixed an issue where the ENI whitelist failed to take effect.
    
-   Terway DaemonSet no longer participates in leader election.
    

This upgrade has no negative impact on workloads.

ACK dedicated cluster upgrades Terway to this version, terway-controlplane is installed by default.

v1.9.10

registry-cn-hangzhou.ack.aliyuncs.com/acs/terway:v1.9.10

2024-11-15

Fixed an issue where the ENI whitelist failed to take effect.

This upgrade has no negative impact on workloads.

v1.8.14

registry-cn-hangzhou.ack.aliyuncs.com/acs/terway:v1.8.14

2024-11-15

Fixed an issue where the ENI whitelist failed to take effect.

This upgrade has no negative impact on workloads.

v1.11.4

registry-cn-hangzhou.ack.aliyuncs.com/acs/terway:v1.11.4

2024-11-07

Fixed an issue where NetworkPolicy could not handle ClusterIP.

This upgrade has no negative impact on workloads.

v1.9.9

registry-cn-hangzhou.ack.aliyuncs.com/acs/terway:v1.9.9

2024-11-07

Fixed an issue where NetworkPolicy could not handle ClusterIP.

This upgrade has no negative impact on workloads.

### October 2024

**Version**

**Registry Address**

**Modification Time**

**Changes**

**Impact**

v1.11.3

registry-cn-hangzhou.ack.aliyuncs.com/acs/terway:v1.11.3

2024-10-28

Fixed an issue where deleting the CNI might affect existing Pods.

This upgrade has no negative impact on workloads.

v1.9.8

registry-cn-hangzhou.ack.aliyuncs.com/acs/terway:v1.9.8

2024-10-17

Fixed an issue where NetworkPolicy could not handle external IP addresses.

This upgrade has no negative impact on workloads.

v1.11.2

registry-cn-hangzhou.ack.aliyuncs.com/acs/terway:v1.11.2

2024-10-15

Fixed an issue where NetworkPolicy could not handle external IP addresses.

This upgrade has no negative impact on workloads.

### September 2024

**Version**

**Registry Address**

**Change Time**

**Changes**

**Change Impact**

v1.11.1

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.11.1

2024-09-23

Fixed an issue where `max-available-ip` was incorrectly calculated.

This upgrade has no negative impact on workloads.

v1.11.0

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.11.0

2024-09-13

-   Node pools that run in Terway ENI exclusive mode can be created.
    
-   Added an alert for inconsistent IP data.
    
-   Optimized the synchronization logic for creating network interface controllers (NICs) to reduce errors caused by unready NICs.
    

This upgrade has no negative impact on workloads.

v1.9.7

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.9.7

2024-09-13

-   Added an alert for inconsistent IP data.
    
-   Optimized the synchronization logic for creating network interface controllers (NICs) to reduce errors caused by unready NICs.
    

This upgrade has no negative impact on workloads.

v1.8.13

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.8.13

2024-09-13

-   Added an alert for inconsistent IP data.
    
-   Optimized the synchronization logic for creating network interface controllers (NICs) to reduce errors caused by unready NICs.
    

This upgrade has no negative impact on workloads.

### August 2024

**Version**

**Registry Address**

**Modification Time**

**What's New**

**Change impact**

v1.10.0

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.10.0

2024-08-29

Terway 1.10.0 and later versions support only Kubernetes 1.31 and later versions.

-   This upgrade has no negative impact on workloads.
    
-   Trunk ENI feature is enabled by default for newly created ACK managed clusters.
    
-   When you upgrade Terway in an ACK managed cluster to this version, terway-controlplane is installed by default.
    

v1.8.12

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.8.12

2024-08-29

-   Fixed an issue where you could not create more ENIs if the vSwitch did not have sufficient IP addresses.
    
-   Metadata access timeout errors are recorded in logs instead of Kubernetes events.
    

This upgrade has no negative impact on workloads.

v1.8.11

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.8.11

2024-08-12

Fixed an issue where you could not create more ENIs if the vSwitch did not have sufficient IP addresses.

This upgrade has no negative impact on workloads.

### July 2024

**Version**

**Registry Address**

**Modification Time**

**Changes**

**Change Impact**

v1.9.6

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.9.6

2024-07-25

-   Fixed an issue where you could not create more ENIs if the vSwitch did not have sufficient IP addresses.
    
-   Optimized kube-apiserver load in DatapathV2 and IPVLAN modes.
    
-   Metadata access timeout errors are recorded in logs and not exposed to Kubernetes events.
    
-   Supports managing IP resource usage on the Add-ons page in the ACK console.
    
-   Shared Memory Communications over Remote Direct Memory Access (SMC-R) mode is supported.
    

If your cluster is large, kube-apiserver load may increase temporarily during the upgrade. Monitor kube-apiserver resource usage.

### June 2024

**Version**

**Registry Address**

**Modification Time**

**Changes**

**Impact**

v1.9.4

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.9.4

2024-06-27

ACK NetworkPolicy is supported.

This upgrade has no negative impact on workloads.

v1.8.9

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.8.9

2024-06-06

Fixed an issue where duplicate IP addresses were allocated.

This upgrade has no negative impact on workloads.

### May 2024

**Version**

**Registry Address**

**Modification Time**

**Changes**

**Impact**

v1.9.3

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.9.3

2024-05-29

Optimized how CNI handles the `No such file or directory` exception.

This upgrade has no negative impact on workloads.

v1.9.2

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.9.2

2024-05-16

-   Terway 1.9.2 and later versions support only Kubernetes 1.30 and later versions.
    
-   Fixed an issue where custom sysctl configurations were overwritten.
    
-   Optimized Device Plugin startup time.
    
-   Network policies for newly created clusters are implemented using eBPF. This feature requires a kernel version of 4.19 or later.
    

-   CentOS and Alibaba Cloud Linux 2 are no longer supported as operating systems for node pools. For more information, see [\[Product Update\] End of Maintenance for Alibaba Cloud Linux 2 and CentOS 7](/help/en/ack/product-overview/announcement-on-stopping-maintenance-of-alibaba-cloud-linux-2-and-centos-7).
    
-   This upgrade has no negative impact on workloads.
    

v1.8.8

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.8.8

2024-05-16

-   Fixed an issue where custom sysctl configurations were overwritten.
    
-   Optimized Device Plugin startup time.
    

This upgrade has no negative impact on workloads.

v1.8.6

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.8.6

2024-05-07

-   Fixed a bandwidth limit issue in DatapathV2 mode.
    
-   Fixed an issue where outbound security group rules did not take effect in Trunk mode.
    
-   Fixed an issue where a route from a node to a Pod might not be deleted.
    

This upgrade has no negative impact on workloads.

### April 2024

**Version**

**Registry Address**

**Modification Time**

**Change Details**

**Impact**

v1.8.4

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.8.4

2024-04-22

-   Fixed an issue where IP resource pools failed to be prefetched.
    
-   Improved the idempotence of operations for creating network interface controllers and allocating IP addresses, mitigating resource leakage.
    
-   Adjusted the CNI configuration sequence to ensure that Pods on new nodes are scheduled only after the CNI starts and runs normally.
    

This upgrade has no negative impact on workloads.

v1.8.3

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.8.3

2024-04-10

-   Red Hat 9.3 is supported.
    
-   Fixed an issue where the vSwitch selection policy did not take effect.
    
-   Fixed an eRDMA quota calculation issue.
    
-   Fixed an issue where the system was excessively sensitive when detecting invalid resource events.
    
-   Fixed a Hubble data collection issue.
    
-   Fixed a data forwarding issue in DatapathV2 mode.
    

This upgrade has no negative impact on workloads.

### March 2024

**Version**

**Registry Address**

**Change Time**

**Changes**

**Impact**

v1.8.0

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.8.0

2024-03-18

-   DatapathV2 is supported.
    
-   The alibaba-addon-secret of registered clusters is supported.
    

If you select DatapathV2 or IPVLAN when you create a cluster, DatapathV2 is enabled.

v1.7.4

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.7.4

2024-03-18

Fixed an issue where tokens might not be updated.

This upgrade has no negative impact on workloads.

v1.7.3

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.7.3

2024-03-11

-   LINGJUN Clusters are supported.
    
-   Fixed an eRDMA quota calculation issue.
    

This upgrade has no negative impact on workloads.

### February 2024

**Version**

**Registry Address**

**Modification Time**

**What's Changed**

**Impact**

v1.7.2

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.7.2

2024-02-28

-   Fixed an issue of slow IP address allocation.
    
-   Fixed an issue where resource prefetching did not take effect.
    

This upgrade has no negative impact on workloads.

v1.7.0

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.7.0

2024-02-18

-   eRDMA is supported.
    
-   Optimized ENI allocation efficiency.
    
-   Optimized kube-apiserver load in IPVLAN mode.
    
-   Elastic IP addresses (EIPs) are no longer supported by Terway.
    
-   The supported Kubernetes version must be 1.24 or later.
    

EIPs are no longer supported by Terway. For more information, see [Migrate EIPs from Terway to ack-extend-network-controller](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/migrate-terway-eip-function-to-ack-extend-network-controller).

If your cluster is large, kube-apiserver load may increase temporarily during the upgrade. Monitor kube-apiserver resource usage.

Dedicated clusters use node RAM roles for OpenAPI authentication. Clusters created before March 1, 2020 may lack the `vpc:DescribeVSwitches` permission, which affects component functionality. For more information, see [Use RBAC to Authorize Operations on Resources in the Cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/grant-rbac-permissions-to-ram-users-or-ram-roles) to add this permission to the node RAM role.

### January 2024

**Version**

**Registry Address**

**Change Time**

**Changes**

**Impact**

v1.6.3

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.6.3

2024-01-24

-   Fixed a Node Condition overwriting issue.
    
-   Fixed an issue where node rules were not cleaned up in policy-based routing mode.
    
-   Fixed an issue where IP addresses were not reclaimed for a long time after stateful applications were released.
    

This upgrade has no negative impact on workloads.

### **November 2023**

**Version**

**Registry Address**

**Change Time**

**Changes**

**Change Impact**

v1.6.1

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.6.1

2023-11-21

-   Fixed an issue where Service backends might not be updated in IPVLAN mode.
    
-   Fixed an issue where duplicate IP addresses were allocated.
    

This upgrade has no negative impact on workloads.

v1.4.9

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.4.9

2023-11-21

Fixed an issue where duplicate IP addresses were allocated.

This upgrade has no negative impact on workloads.

### **October 2023**

**Version**

**Registry Address**

**Change Time**

**Changes**

**Impact**

v1.6.0

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.6.0

2023-10-10

-   [EIPs can be migrated from Terway to ack-extend-network-controller](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/migrate-terway-eip-function-to-ack-extend-network-controller).
    
-   Supports StatefulSet Kind configuration for the terway-controlplane component.
    

This upgrade has no negative impact on workloads.

### **August 2023**

**Version**

**Registry Address**

**Last Modified Time**

**Changes**

**Impact**

v1.5.7

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.5.7

2023-08-24

-   Optimized Terway startup speed.
    
-   Fixed an issue where health checks occasionally timed out.
    

This upgrade has no negative impact on workloads.

### July 2023

**Version Number**

**Registry Address**

**Change Time**

**Changes**

**Impact**

v1.5.6

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.5.6

2023-07-30

[Custom CNI chains can be configured](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/custom-cni-chain).

This upgrade has no negative impact on workloads.

v1.5.5

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.5.5

2023-07-06

Supports [configuring a whitelist for an ENI](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-a-whitelist-for-an-eni).

This upgrade has no negative impact on workloads.

### June 2023

**Version Number**

**Registry Address**

**Change Time**

**Change Content**

**Change Impact**

v1.5.4

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.5.4

2023-06-01

Fixes potential network jitter during the upgrade procedure in IPvlan mode.

This upgrade will not affect services.

v1.4.8

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.4.8

2023-06-01

Fixes potential network jitter during the upgrade procedure in IPvlan mode.

This upgrade will not affect services.

### May 2023

**Version**

**Registry Address**

**Change Time**

**What’s changed**

**Impact**

v1.5.3

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.5.3

2023-05-16

Fixed an issue where you might fail to access an external IP address when Terway 1.4.4 was used.

This upgrade has no negative impact on workloads.

v1.5.2

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.5.2

2023-05-10

-   Fixed an issue where nodes might enter the NotReady state when the Terway upgrade failed.
    
-   Fixed an issue where additional zone spread constraints were injected using webhooks in ENI trunking mode.
    

This upgrade has no negative impact on workloads.

v1.4.6

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.4.6

2023-05-10

Fixed an issue where nodes might enter the NotReady state when the Terway upgrade failed.

This upgrade has no negative impact on workloads.

### April 2023

**Version**

**Registry Address**

**Change Time**

**Change details**

**Impact**

v1.5.1

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.5.1

2023-04-28

-   Kubernetes 1.26 is supported. Terway 1.5.1 and later versions support Kubernetes 1.22 and later.
    
-   Felix is upgraded to 3.24.5.
    

This upgrade has no negative impact on workloads.

### March 2023

**Version**

**Registry Address**

**Change Time**

**Changes**

**Impact**

v1.4.5

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.4.5

2023-03-31

Reduced Role-Based Access Control (RBAC) permissions.

This upgrade has no negative impact on workloads.

v1.4.4

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.4.4

2023-03-14

-   You can modify the configuration of a virtual switch in Component Management.
    
-   Optimized memory usage for components in IPVLAN mode.
    
-   Upgraded Cilium to version 1.12.7.
    
-   Upgraded iptables to version 1.8.8.
    

In IPVLAN mode, if `externalTrafficPolicy=Local` is specified in the configuration of a LoadBalancer Service, the Service routes requests only to the backend Pods deployed on the node where the Service is deployed. To allow the Service to route requests to backend Pods on other nodes, change the Service type to ClusterIP or specify `externalTrafficPolicy=Cluster` in the Service configuration.

### December 2022

**Version**

**Registry Address**

**Change Time**

**Changes**

**Impact**

v1.4.3

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.4.3

2022-12-23

-   Upgraded Cilium to version 1.12.4.
    
-   Fixed an issue where a Pod IP address might be allocated to multiple Pods.
    
-   Changed the component upgrade policy to RollingUpdate.
    

This upgrade has no negative impact on workloads.

### November 2022

**Version**

**Registry Address**

**Change Time**

**Changes**

**Impact**

v1.4.2

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.4.2

2022-11-21

-   Fixed a Terway and local DNS compatibility issue that occurs when ENI Trunking is enabled.
    
-   Fixed a NetworkPolicy (non-IPVLAN mode) and Pod PostStartHook compatibility issue.
    

This upgrade has no negative impact on workloads.

### September 2022

**Version**

**Registry Address**

**Change Time**

**Changes**

**Impact**

v1.4.1

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.4.1

2022-09-28

-   The parameters of the terway-eniip component can be configured on the Add-ons page in the ACK console.
    
-   Fixed an issue where the hairpin access method failed.
    
-   Fixed an issue where IP addresses failed to be allocated when an unexpected allocation order was used by the container runtime to use the CNI plugin.
    

This upgrade has no negative impact on workloads.

### August 2022

**Version**

**Registry Address**

**Modification Time**

**Changes**

**Impact**

v1.4.0

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.4.0

2022-08-29

-   Cilium is upgraded to 1.12.1.
    
-   The Kubernetes version must be 1.20 or later.
    

If you enable IPVLAN mode for a cluster, Cilium-related CRDs are automatically updated when you upgrade the cluster. This might rapidly increase the load on kube-apiserver if the cluster size is large. Monitor kube-apiserver resource usage.

This upgrade has no negative impact on workloads.

### July 2022

**Version number**

**Registry Address**

**Change Time**

**Changes**

**Impact**

v1.3.0

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.3.0

2022-07-22

QoS management is supported for pods. For more information, see [Configure QoS for pods](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-qos-for-pods#task-2234786).

This upgrade has no negative impact on workloads.

### June 2022

**Version**

**Registry Address**

**Change Time**

**Changes**

**Impact**

v1.2.4

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.2.4

2022-06-28

-   Fixed an issue where the portmap plugin did not take effect.
    
-   Fixed an issue where EIPs could not be deleted.
    
-   Fixed an issue where traffic from Services to backend Pods could not be balanced in IPVLAN mode.
    

This upgrade has no negative impact on workloads.

### May 2022

**Version**

**Registry Address**

**Modification Time**

**Changes**

**Impact**

v1.2.3

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.2.3

2022-05-26

-   BGP (Multi-ISP) Pro EIPs and EIP bandwidth plans are supported.
    
-   Fixed an issue where containers failed to pass health checks performed by Kubelet when Cilium network policies were used.
    

This upgrade has no negative impact on workloads.

### March 2022

**Version**

**Registry Address**

**Modification Time**

**What's Changed**

**Impact**

v1.2.2

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.2.2

2022-03-31

Fixed an ARP probe issue in VLAN mode.

This upgrade has no negative impact on workloads.

v1.2.1

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.2.1

2022-03-15

-   Fixed an issue where calico-felix reverted to legacy iptables mode when running on Alibaba Cloud Linux 3.
    
-   Fixed an issue where IP addresses could not be reclaimed when metadata errors occurred.
    

This upgrade has no negative impact on workloads.

### January 2022

**Version**

**Registry Address**

**Modification Time**

**Changes**

**Impact**

v1.2.0

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.2.0

2022-01-11

-   Optimize lock efficiency during CNI execution.
    
-   A Service can be accessed by its backend Pods in IPVLAN mode.
    
-   In IPVLAN mode, if you access an external IP address or a Server Load Balancer (SLB) instance from within a cluster, the traffic is routed to the backend Service. This feature is automatically enabled for newly created clusters. To enable load balancing within an existing cluster in Terway IPVLAN mode, see [How do I enable in-cluster load balancing for ExternalIP and LoadBalancer Services in an existing Terway IPvlan cluster?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#section-75m-g9d-3w4).
    
-   Fixed an issue where false positive alerts were generated in Terway VPC mode.
    
-   Optimized calico-felix performance in large-scale clusters.
    

This upgrade has no negative impact on workloads.

### December 2021

**Version**

**Registry Address**

**Modification Time**

**Changes**

**Impact**

v1.1.1

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.1.1

2021-12-20

-   Improved network interface controller (NIC) resource reclamation, mitigating issues where IPVLANs could not be created due to netns leaks in containerd scenarios.
    
-   An ENI can be associated with multiple security groups. For more information, see [Associate multiple security groups with an ENI](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/associate-multiple-security-groups-with-an-eni#task-2160715).
    

This upgrade has no negative impact on workloads.

### November 2021

**Version**

**Registry Address**

**Modification Time**

**Changes**

**Impact**

v1.1.0

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.1.0

2021-11-22

-   IPv4/IPv6 dual stack is supported.
    
-   Felix is upgraded to v3.20.2.
    
-   CNI is upgraded from 0.3.0 to 0.3.1.
    
-   The deployment template is adapted for Kubernetes 1.22. This version and later versions support Kubernetes 1.18 and later.
    
-   Fixed an issue where network interface controller (NIC) configuration errors occasionally occurred in IPVLAN mode. For more information, see [#261](https://github.com/AliyunContainerService/terway/pull/261/commits).
    
-   Added `100Mi` memory request for the Policy container.
    

-   If Typha is deployed in your cluster to improve the performance of network policies, update Terway to this version. For more information, see [Optimize the scalability of NetworkPolicy in large-scale Terway clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/improve-the-performance-of-the-networkpolicy-feature-for-a-large-ack-cluster-in-terway-mode#task-1917849).
    
-   If Typha is not deployed in your cluster, this upgrade has no negative impact on workloads.
    
-   During a cluster upgrade, if IPvlan mode is not enabled, the calico-felix-related CRDs are updated. This update can cause a temporary increase in the load on the kube-apiserver, especially for large-scale clusters. We recommend that you monitor the status of the kube-apiserver.
    
-   Ensure the node has enough memory to prevent Pods from being evicted by Kubernetes during the upgrade.
    

### September 2021

**Version**

**Registry Address**

**Modification Time**

**Changes**

**Impact**

v1.0.10.443-gaa1bfcc-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.0.10.443-gaa1bfcc-aliyun

2021-09-14

Reduced network latency.

This update applies only to Terway users in exclusive ENI mode. Other modes do not require this update.

This upgrade has no negative impact on workloads.

### August 2021

**Version**

**Registry Address**

**Modification Time**

**Changes**

**Impact**

v1.0.10.398-g63d2e57-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.0.10.398-g63d2e57-aliyun

2021-08-04

-   Fixed an issue where network policies occasionally failed to take effect in inclusive ENI mode.
    
-   Upgraded Cilium to version 1.10.
    

If you enable IPVLAN mode for a cluster, Cilium-related CRDs are automatically updated when you upgrade the cluster. This might rapidly increase the load on kube-apiserver if the cluster size is large. Monitor kube-apiserver resource usage.

This upgrade has no negative impact on workloads.

### July 2021

**Version**

**Registry Address**

**Modification Time**

**What’s Changed**

**Impact**

v1.0.10.390-g5f3c461-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.0.10.390-g5f3c461-aliyun

2021-07-02

-   Fixed an issue where Pod annotations could not be modified when EIPs were used in Terway network mode.
    
-   Fixed an issue where Terway could not start when a dedicated ENI was assigned to each Pod in Terway mode.
    
-   Adapted the network namespace path in containerd containers.
    
-   Alibaba Cloud Linux 3 is supported.
    

This upgrade has no negative impact on workloads.

### May 2021

**Version number**

**Registry Address**

**Change Time**

**Changes**

**Impact**

v1.0.10.368-g2890967-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.0.10.368-g2890967-aliyun

2021-05-24

-   Fixed an issue where the `ResourceInvalid` alert occurred when EIPs were used.
    
-   Supports direct communication between Pods and the node in IPVLAN mode, bypassing VPC. Data is forwarded directly within the node.
    
-   Supports proactively checking and correcting the `ip forwarding` configuration.
    

This upgrade has no negative impact on workloads.

### April 2021

**Version Number**

**Registry Address**

**Change Time**

**Changes**

**Impact**

v1.0.10.333-gfd2b7b8-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.0.10.333-gfd2b7b8-aliyun

2021-04-26

-   Fixed IP address conflicts that occurred when stateful applications used EIPs.
    
-   Hubble can be enabled in IPVLAN mode. For more information about Hubble, see [What is Hubble](https://github.com/cilium/hubble#what-is-hubble).
    

This upgrade has no negative impact on workloads.

### March 2021

**Version**

**Registry Address**

**Modification Time**

**Changes**

**Impact**

v1.0.10.323-g778c128-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.0.10.323-g778c128-aliyun

2021-03-22

-   Optimized the number of OpenAPI calls.
    
-   Optimized event alerting when checking security group configurations.
    

This upgrade has no negative impact on workloads.

### February 2021

**Version**

**Registry Address**

**Modified Time**

**Changes**

**Impact**

v1.0.10.317-g0652857-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.0.10.317-g0652857-aliyun

2021-02-22

-   Fixed Cilium Identity resource leaks.
    
-   Fixed an issue that occasionally occurred in StatefulSet Pod IP management.
    

This upgrade has no negative impact on workloads.

v1.0.10.309-g5314eee-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.0.10.309-g5314eee-aliyun

2021-02-05

-   Removed the logic for proactively fixing security group rules. Only event alerts are used to indicate issues.
    
-   Fixed an issue where Pod IP addresses might be reclaimed and reassigned when nodes were under high load.
    

This upgrade has no negative impact on workloads.

### January 2021

**Version**

**Registry Address**

**Modification Time**

**What's changed**

**Impact**

v1.0.10.301-g0115576-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.0.10.301-g0115576-aliyun

2021-01-21

New features:

-   Custom maximum transmission units (MTUs) are supported.
    
-   Routing based on the host network stack in exclusive ENI mode is supported.
    

Fixed issues:

-   Fixed the packet loss issue caused by the traffic limit feature of Terway.
    
-   Fixed residual IP policies.
    
-   Fixed incorrect counting of the number of IP addresses provided by ENIs.
    

This upgrade has no negative impact on workloads.

### December 2020

**Version**

**Registry Address**

**Modification Time**

**Changes**

**Impact**

v1.0.10.280-gdc2cb6c-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.0.10.280-gdc2cb6c-aliyun

2020-12-25

-   Added proactive checks for Terway, including the following:
    
    -   ENIs and secondary IP addresses of ENIs.
        
    -   Security group consistency.
        
    -   Pod network space configuration.
        
    -   Host network configuration.
        
-   Added support for routing based on the host network stack in IPVLAN mode.
    

This upgrade has no negative impact on workloads.

v1.0.10.263-gdbe50a9-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.0.10.263-gdbe50a9-aliyun

2020-12-03

Fixed a Terway error that occurred in exclusive ENI mode.

This upgrade has no negative impact on workloads.

### November 2020

**Version**

**Registry Address**

**Last Modified**

**Changes**

**Impact**

v1.0.10.261-g8342155-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.0.10.261-g8342155-aliyun

2020-11-27

-   Supports synchronous calls to the ECS API.
    
-   Fixed an issue where error messages were returned when the CNI plugin was used.
    

This upgrade has no negative impact on workloads.

v1.0.10.250-gb7bb10a-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.0.10.250-gb7bb10a-aliyun

2020-11-23

-   Fixed a Pod network issue that occurred when the ENI driver failed to load.
    
-   Fixed a status issue of IP addresses allocated by ENIs when the ENI API was throttled.
    

This upgrade has no negative impact on workloads.

### October 2020

**Version**

**Registry Address**

**Change Time**

**Changes**

**Impact**

v1.0.10.247-g4cb77d0-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.0.10.247-g4cb77d0-aliyun

2020-10-26

ECS instances deployed on dedicated hosts are supported.

This upgrade has no negative impact on workloads.

### September 2020

**Version**

**Registry Address**

**Change Time**

**Changes**

**Impact**

v1.0.10.237-g6a0f948-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.0.10.237-g6a0f948-aliyun

2020-09-16

Optimized ENI binding speed.

This upgrade has no negative impact on workloads.

### August 2020

**Version**

**Registry Address**

**Change Time**

**Changes**

**Impact**

v1.0.10.221-g8d6386a-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.0.10.221-g8d6386a-aliyun

2020-08-11

IPVLAN and eBPF are supported for container networks.

This upgrade has no negative impact on workloads.

v1.0.10.213-g27145cc-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.0.10.213-g27145cc-aliyun

2020-08-04

Fixed a Pod network issue that occurred due to occasional ENI failures.

This upgrade has no negative impact on workloads.

### July 2020

**Version**

**Registry Address**

**Change Time**

**Changes**

**Impact**

v1.0.10.208-gf3144bf-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.0.10.208-gf3144bf-aliyun

2020-07-20

-   Fixed an issue where policy-based routes for nodes in high-density mode were exposed.
    
-   Internal OpenAPI is supported.
    
-   Fixed an issue where Pod IP addresses could not be released when the vSwitch reached its IP address limit.
    
-   Optimized the error message display for CNI failures.
    

This upgrade has no negative impact on workloads.

v1.0.10.211-gef088a4-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.0.10.211-gef088a4-aliyun

2020-07-24

Cluster ID tags can be added to ENIs.

This upgrade has no negative impact on workloads.

### April 2020

**Version**

**Registry Address**

**Modification Time**

**Changes**

**Impact**

v1.0.10.156-g8660a0f-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.0.10.156-g8660a0f-aliyun

2020-04-22

-   Optimized the caching efficiency of Elastic Network Interface (ENI) network resources.
    
-   Upgraded the built-in Felix to version 3.5.8.
    
-   Added reclamation of network resources for Pods in the Completed or Failed state.
    

This upgrade has no negative impact on workloads.

### February 2020

**Version**

**Registry Address**

**Modification Time**

**Changes**

**Impact**

v1.0.10.139-g14a4f84-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.0.10.139-g14a4f84-aliyun

2020-02-12

Fixed an issue where Pod creation requests occasionally timed out.

This upgrade has no negative impact on workloads.

### January 2020

**Version**

**Registry Address**

**Change Time**

**Changes**

**Impact**

v1.0.10.133-g001396b-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.0.10.133-g001396b-aliyun

2020-01-10

-   The NetworkPolicy feature can be disabled.
    
-   ENI multi-IP clusters support IPVLAN for pod network virtualization.
    

This upgrade has no negative impact on workloads.

### December 2019

**Version**

**Registry Address**

**Last Modified**

**Changes**

**Impact**

v1.0.10.122-gd0be015-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.0.10.122-gd0be015-aliyun

2019-12-24

Optimized the efficiency of IP address allocation in inclusive ENI mode.

This upgrade has no negative impact on workloads.

### October 2019

**Version**

**Registry Address**

**Change Time**

**Changes**

**Impact**

v1.0.10.100-g92a3fa5-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.0.10.100-g92a3fa5-aliyun

2019-10-11

Fixed an issue where the host node entered the NotReady state when many jobs concurrently requested resources.

This upgrade has no negative impact on workloads.

### August 2019

**Version**

**Registry Address**

**Modification Time**

**Changes**

**Impact**

v1.0.9.20-g35ae000-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.0.9.20-g35ae000-aliyun

2019-08-23

Kubernetes 1.14.6 is supported.

This upgrade has no negative impact on workloads.

### April 2019

**Version**

**Registry Address**

**Modification Time**

**Changes**

**Impact**

v1.0.9.15-g3957085-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.0.9.15-g3957085-aliyun

2019-04-11

Fixed an issue where the Terway component upgrade occasionally failed.

This upgrade has no negative impact on workloads.

### March 2019

**Version**

**Registry Address**

**Modification Time**

**Changes**

**Impact**

v1.0.9.14-ga0346bb-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/terway:v1.0.9.14-ga0346bb-aliyun

2019-03-28

-   Fixed an issue where Terway failed to obtain ENI information when the meta server was throttled.
    
-   Fixed an issue where the **failed to move veth to host netns: file exists** error was returned when you created a container.
    
-   Added periodic scanning to check the status of ENIs. ENIs that are abnormally released are periodically reclaimed.
    
-   Optimized health checks. TCP port check is performed instead of HTTP path check.
    

This upgrade has no negative impact on workloads.

## Related topics

-   [Use Terway](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-terway#task-1797447)
