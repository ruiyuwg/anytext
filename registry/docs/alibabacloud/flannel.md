Flannel is a Container Network Interface (CNI) plug-in that you can use to create a virtual network for containers based on Virtual Private Cloud (VPC). You can use Flannel to enable internal communication in a Kubernetes cluster. This topic describes the release notes for Flannel.

## Overview

The Flannel network plug-in provided by Container Service for Kubernetes (ACK) allocates the pod CIDR block, which is independent of the VPC CIDR block. In an ACK cluster, Flannel works with the VPC in which the cluster is deployed. Packets are forwarded based on the VPC route table. This improves communication efficiency because no tunneling technologies such as Virtual extensible LAN (VXLAN) are required to encapsulate the packets. For more information, see [Network overview](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/network/#concept-tfy-3kq-wfb).

## Usage notes

Flannel is a simple and stable open source CNI plug-in. You can use Flannel with VPC. This allows your clusters and containers to run in high-performance and stable networks. For more information, see [flannel](https://github.com/flannel-io/flannel?spm=a2c4g.11186623.2.10.28b229747WScYz).

## Release notes

### March 2026

**Version**

**Image address**

**Modification Time**

**Changes**

**Impact**

v0.28.0.6

registry-cn-hangzhou.ack.aliyuncs.com/acs/flannel:v0.28.0.6

March 2, 2026

-   Upgrade the cni-plugin version to support nftables mode switching.
    
-   Fix multiple CVE vulnerabilities.
    

Clusters running Kubernetes 1.35 or later use this updated version. Clusters running Kubernetes earlier than 1.35 continue to use v0.15.1.23-33d25c1-aliyun.

### May 2024

**Version**

**Image address**

**Modification Time**

**What’s Changed**

**Impact**

v0.15.1.23-33d25c1-aliyun

registry-cn-hangzhou.ack.aliyuncs.com/acs/flannel:v0.15.1.23-33d25c1-aliyun

May 20, 2024

The compatibility of Flannel in Windows is improved.

Clusters running Kubernetes 1.26 or later use this updated version. Clusters running Kubernetes earlier than 1.26 continue to use v0.15.1.22-20a397e6-aliyun.

### December 2022

**Version**

**Image address**

**Change Time**

**Change Details**

**Impact**

v0.15.1.22-20a397e6-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/flannel:v0.15.1.22-20a397e6-aliyun

December 6, 2022

The update policy is changed from OnDelete to RollingUpdate.

After you update Flannel to this version, if you manually modify the YAML file of Flannel, the modifications are automatically applied to all Flannel pods in the cluster by performing a rolling update on the pods. You do not need to delete Flannel pods to trigger the recreation of Flannel pods. For more information about the update policy, see [DaemonSet Update Strategy](https://kubernetes.io/docs/tasks/manage-daemon/update-daemon-set/#daemonset-update-strategy).

### October 2022

**Version**

**Image address**

**Change Time**

**Change Details**

**Impact**

v0.15.1.19-d460293f-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/flannel:v0.15.1.19-d460293f-aliyun

October 27, 2022

-   Compatibility with scenarios in which the CNIVersion field is missing is supported.
    
-   The CVE-2021-45079 vulnerability is fixed.
    

This upgrade does not affect business operations.

### September 2022

**Version**

**Image address**

**Modification Time**

**Changes**

**Impact**

v0.15.1.18-6f371e73-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/flannel:v0.15.1.18-6f371e73-aliyun

September 26, 2022

By default, Node Informer is disabled to improve performance.

This upgrade will not affect business operations.

### August 2022

**Version**

**Image address**

**Change Time**

**Content Changes**

**Impact**

v0.15.1.13-941db231-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/flannel:v0.15.1.13-941db231-aliyun

August 29, 2022

The CVE-2022-37434 vulnerability is fixed.

No impact on workloads.

### July 2022

**Version**

**Image address**

**Modification Time**

**Changes**

**Impact**

v0.15.1.11-7e95fe23-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/flannel:v0.15.1.11-7e95fe23-aliyun

July 28, 2022

/var/run is used as the default directory to cache IP addresses. This prevents IP leaks caused by server restarts.

This upgrade will not affect your services.

### May 2022

**Version**

**Image address**

**Modification Time**

**Changes**

**Impact**

v0.15.1.8-1634a106-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/flannel:v0.15.1.8-1634a106-aliyun

May 10, 2022

The CVE-2022-28391 vulnerability is fixed.

No impact on workloads.

### April 2022

**Version Number**

**Registry Address**

**Change Time**

**Changes**

**Impact**

v0.15.1.6-a320565c-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/flannel:v0.15.1.6-a320565c-aliyun

April 8, 2022

An init container that is used to install Flannel is added.

No impact on workloads.

### January 2022

**Version**

**Image address**

**Modification Time**

**Changes**

**Impact**

v0.15.1.5-11d1c700-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/flannel:v0.15.1.5-11d1c700-aliyun

January 25, 2022

Instances that use the ARM64 architecture are supported.

Your services will continue to operate normally during this upgrade.

### December 2021

**Version**

**Image address**

**Modification Time**

**What's Changed**

**Impact**

v0.15.1.4-e02c8f12-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/flannel:v0.15.1.4-e02c8f12-aliyun

December 1, 2021

-   The API version for resources such as Authorization is updated to support Kubernetes 1.22.
    
-   Services can be exposed using the HostPort method.
    
-   By default, the hairpin mode is enabled. By default, the hairpin mode is disabled for Flannel of earlier versions. For more information about how to manually enable the hairpin mode, see the [How do I enable a pod to access a Service that is used to expose the pod?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#section-w3o-3as-8lq) section of the "FAQ about container networks" topic.
    

No impact on workloads.

### May 2021

**Version**

**Registry Address**

**Modification Time**

**Changes**

**Impact**

v0.13.0.1-466064b-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/flannel:v0.13.0.1-466064b-aliyun

May 24, 2021

-   Iptables is supported to enable compatibility with CentOS 8 and Alibaba Cloud Linux 3 and later versions.
    
-   Proactive checks and corrections of IP forwarding configurations are supported.
    

No impact on workloads.

### August 2019

**Version**

**Image address**

**Modification Time**

**Changes**

**Impact**

v0.11.0.2-g6e46593e-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/flannel:v0.11.0.2-g6e46593e-aliyun

August 2, 2019

The issue that source IP addresses are not retained after Flannel is updated is fixed.

This upgrade does not affect your services.

If you encounter a Container Name conflict during the upgrade that causes component upgrade failure, follow the steps in [Troubleshoot component exceptions](/help/en/ack/ack-managed-and-ack-dedicated/support/component-troubleshooting) to resolve it.
