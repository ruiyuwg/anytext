This topic describes the ACK NodeLocal DNSCache component, its usage, and its changelog.

## Component introduction

ACK NodeLocal DNSCache is a DNS local cache solution based on the open source project NodeLocal DNSCache. The Helm Chart for ACK NodeLocal DNSCache is named ack-node-local-dns. After you install the component, ACK creates the following resources:

> In the navigation pane on the left of the cluster details page, choose **Applications** > **Helm** to view all resources created by ack-node-local-dns.

-   ack-node-local-dns-admission-controller (Deployment): A dynamic DNSConfig injection controller. By default, it is deployed with two anti-affinity replicas to ensure high availability.
    
-   node-local-dns (DaemonSet): The actual DNS local cache component. It runs on each node to provide local DNS cache services.
    

The controller monitors pod creation requests and dynamically modifies the DNSConfig of pods. This allows pods to use the acceleration capabilities of the local DNS cache and improves DNS parsing performance.

## Usage instructions

After you install the component, you can connect application pods to the DNS local cache. For more information, see [Use the NodeLocal DNSCache component](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-nodelocal-dnscache#task-2008363).

## Changelog

### **September 2025**

**Version number**

**Image URL**

**Change time**

**Changes**

**Impact**

1.6.1

-   Cache component: registry.cn-hangzhou.aliyuncs.com/acs/k8s-dns-node-cache:v1.22.28.1
    
-   Controller: registry.cn-hangzhou.aliyuncs.com/acs/node-local-dns-admission-controller:v1.1.5
    

September 22, 2025

-   Optimization:
    
    -   Removed the `aliyun` suffix from image tags.
        
    
    -   Modified the default configurations of the `node-local-dns` DaemonSet:
        
        -   Added a node affinity rule to prevent scheduling to nodes that run the Windows operating system.
            
        -   Added annotations for Prometheus metrics collection.
            

This upgrade does not affect your services.

### **June 2025**

**Version number**

**Image URL**

**Change time**

**Changes**

**Impact**

1.6.0

-   Cache component: registry.cn-hangzhou.aliyuncs.com/acs/k8s-dns-node-cache:v1.22.28.1-5f96b759-aliyun
    
-   Controller: registry.cn-hangzhou.aliyuncs.com/acs/node-local-dns-admission-controller:v1.1.5-aliyun
    

June 09, 2025

-   You can now configure the default DNS cache injection policy in the console. If default injection is enabled, you do not need to configure the custom tag `node-local-dns-injection=enabled`. The DNS cache policy is automatically injected into newly created pods.
    
-   Pods scheduled to virtual nodes can use the DNS cache. This requires [ACK Virtual Node](/help/en/ack/product-overview/ack-virtual-node) component v2.4.0 or later.
    

This upgrade does not affect your services.

### April 2024

**Version number**

**Image URL**

**Change time**

**Changes**

**Impact**

1.5.9

-   Cache component: registry.cn-hangzhou.aliyuncs.com/acs/k8s-dns-node-cache:v1.22.28.1-5f96b759-aliyun
    
-   Controller: registry.cn-hangzhou.aliyuncs.com/acs/node-local-dns-admission-controller:v1.1.4-aliyun
    

April 02, 2024

Fixed an issue where the admission webhook certificate might not match.

This upgrade does not affect your services.

### March 2024

**Version number**

**Image URL**

**Change time**

**Changes**

**Impact**

1.5.8

-   Cache component: registry.cn-hangzhou.aliyuncs.com/acs/k8s-dns-node-cache:v1.22.28.1-5f96b759-aliyun
    
-   Controller: registry.cn-hangzhou.aliyuncs.com/acs/node-local-dns-admission-controller:v1.1.3-aliyun
    

March 21, 2024

Upgraded the cache component to the community version v1.22.28 to fix the "bufsize size too small" issue.

This upgrade does not affect your services.

### December 2023

**Version number**

**Image URL**

**Change time**

**Changes**

**Impact**

1.5.7

-   Cache component: registry.cn-hangzhou.aliyuncs.com/acs/k8s-dns-node-cache:v1.21.4.8-4864567-aliyun
    
-   Controller: registry.cn-hangzhou.aliyuncs.com/acs/node-local-dns-admission-controller:v1.1.3-aliyun
    

December 06, 2023

Fixed an issue where the address of the kube-dns service was missing from the webhook injection.

This upgrade does not affect your services.

### April 2023

**Version number**

**Image URL**

**Change time**

**Changes**

**Impact**

1.5.6

-   Cache component: registry.cn-hangzhou.aliyuncs.com/acs/k8s-dns-node-cache:v1.21.4.8-4864567-aliyun
    
-   Controller: registry.cn-hangzhou.aliyuncs.com/acs/node-local-dns-admission-controller:v1.1.2-aliyun
    

April 21, 2023

Optimized the scheduling affinity configuration of the admission webhook deployment to improve availability.

This upgrade does not affect your services.

1.5.5

-   Cache component: registry.cn-hangzhou.aliyuncs.com/acs/k8s-dns-node-cache:v1.21.4.8-4864567-aliyun
    
-   Controller: registry.cn-hangzhou.aliyuncs.com/acs/node-local-dns-admission-controller:v1.1.2-aliyun
    

April 07, 2023

Optimized the scheduling affinity configuration of the admission webhook deployment to improve availability.

The scheduling policy was adjusted. If all schedulable nodes in a cluster are in a single zone, the admission webhook deployment replicas may fail to be scheduled. This can cause the component upgrade to fail. To ensure availability, scale out your cluster and distribute the schedulable nodes across multiple zones. This allows the admission webhook deployment replicas to be scheduled.

### January 2023

**Version number**

**Image URL**

**Change time**

**Changes**

**Impact**

1.5.4

-   Cache component: registry.cn-hangzhou.aliyuncs.com/acs/k8s-dns-node-cache:v1.21.4.8-4864567-aliyun
    
-   Controller: registry.cn-hangzhou.aliyuncs.com/acs/node-local-dns-admission-controller:v1.1.2-aliyun
    

January 30, 2023

Fixed the CVE-2021-46848 security issue.

This upgrade does not affect your services.

### October 2022

**Version number**

**Image URL**

**Change time**

**Changes**

**Impact**

1.5.3

-   Cache component: registry.cn-hangzhou.aliyuncs.com/acs/k8s-dns-node-cache:v1.21.4.7-eef3c59-aliyun
    
-   Controller: registry.cn-hangzhou.aliyuncs.com/acs/node-local-dns-admission-controller:v1.1.2-aliyun
    

October 27, 2022

Fixed security issues such as CVE-2021-33574 and CVE-2022-23219.

This upgrade does not affect your services.

### September 2022

**Version number**

**Image URL**

**Change time**

**Changes**

**Impact**

1.5.2

-   Cache component: registry.cn-hangzhou.aliyuncs.com/acs/k8s-dns-node-cache:v1.21.4.6-76dcd52-aliyun
    
-   Controller: registry.cn-hangzhou.aliyuncs.com/acs/node-local-dns-admission-controller:v1.1.2-aliyun
    

September 13, 2022

Fixed security issues such as CVE-2022-1664, CVE-2022-1292, and CVE-2022-2068.

This upgrade does not affect your services.

### July 2022

**Version number**

**Image URL**

**Change time**

**Changes**

**Impact**

1.5.1

-   Cache component: registry.cn-hangzhou.aliyuncs.com/acs/k8s-dns-node-cache:v1.21.4.3-a38fc90-aliyun
    
-   Controller: registry.cn-hangzhou.aliyuncs.com/acs/node-local-dns-admission-controller:v1.1.2-aliyun
    

July 26, 2022

-   Changed the serialization method for communication between NodeLocal DNSCache and the API server.
    
-   Fixed a TLS CVE.
    

This upgrade does not affect your services.

### February 2022

**Version number**

**Image URL**

**Change time**

**Changes**

**Impact**

1.5.0

-   Cache component: registry.cn-hangzhou.aliyuncs.com/acs/k8s-dns-node-cache:v1.21.4.3-a38fc90-aliyun
    
-   Controller: registry.cn-hangzhou.aliyuncs.com/acs/node-local-dns-admission-controller:v1.1.1-aliyun
    

February 22, 2022

-   Supports the ARM64 architecture.
    
-   Supports the `serve_stale` disaster recovery mode.
    
-   Supports adaptive iptables calls. This is compatible with CentOS 8, Alibaba Cloud Linux 3, and later versions.
    

This upgrade does not affect your services.

### November 2021

**Version number**

**Image URL**

**Change time**

**Changes**

**Impact**

1.4.0

-   Cache component: registry.cn-hangzhou.aliyuncs.com/acs/k8s-dns-node-cache:v1.15.13-6-7e6778ac
    
-   Controller: registry.cn-hangzhou.aliyuncs.com/acs/node-local-dns-admission-controller:v1.1.0-b1bd0e8-aliyun
    

November 24, 2021

Updated the APIVersion of MutatingWebhookConfiguration to support Kubernetes v1.22.

This upgrade does not affect your services.

### September 2021

**Version number**

**Image URL**

**Change time**

**Changes**

**Impact**

1.3.5

-   Cache component: registry.cn-hangzhou.aliyuncs.com/acs/k8s-dns-node-cache:v1.15.13-6-7e6778ac
    
-   Controller: registry.cn-hangzhou.aliyuncs.com/acs/node-local-dns-admission-controller:v1.0.3-8fe673f-aliyun
    

September 23, 2021

Added a default CPU limit of 1 core for the controller to enhance security.

This upgrade does not affect your services.

1.3.4

-   Cache component: registry.cn-hangzhou.aliyuncs.com/acs/k8s-dns-node-cache:v1.15.13-6-7e6778ac
    
-   Controller: registry.cn-hangzhou.aliyuncs.com/acs/node-local-dns-admission-controller:v1.0.2-8b46b2f-aliyun
    

September 16, 2021

Added a default memory resource limit. Images are now pulled from the internal network by default.

This upgrade does not affect your services.

### April 2021

**Version number**

**Image URL**

**Change time**

**Changes**

**Impact**

1.3.3

-   Cache component: registry.cn-hangzhou.aliyuncs.com/acs/k8s-dns-node-cache:v1.15.13-6-7e6778ac
    
-   Controller: registry.cn-hangzhou.aliyuncs.com/acs/node-local-dns-admission-controller:v1.0.2-8b46b2f-aliyun
    

April 21, 2021

The component was first published.

This upgrade does not affect your services.
