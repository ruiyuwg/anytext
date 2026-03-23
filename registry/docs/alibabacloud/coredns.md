CoreDNS is the default DNS service discovery plugin for ACK clusters and ACK Edge clusters. ACK serverless clusters also support CoreDNS for service discovery. This topic describes the CoreDNS component, explains how to use it, and lists its change log.

## Component description

CoreDNS is a component in Kubernetes clusters responsible for DNS resolution. It resolves both custom service domain names within the cluster and external domain names. The CoreDNS project is hosted by the [Cloud Native Computing Foundation (CNCF)](https://cncf.io/). For more information about CoreDNS, see [CoreDNS: DNS and Service Discovery](https://coredns.io/).

CoreDNS is available in two editions: unmanaged and managed. For more information, see [DNS for service discovery](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-discovery-dns-1/#task-2038513).

> For more information about the mapping between CoreDNS versions and cluster versions, see [CoreDNS version in Kubernetes](https://github.com/coredns/deployment/blob/master/kubernetes/CoreDNS-k8s_version.md).

## Notes

-   The DNS configuration of application pods also affects DNS resolution. For more information, see [Configure DNS policies and resolve domain names](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-dns-resolution#task-1985778).
    
-   Before you upgrade unmanaged CoreDNS, note the following items:
    
    -   Review the CoreDNS upgrade instructions. For more information, see [Unmanaged CoreDNS automatic upgrade](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-ack-to-automatically-update-coredns#task-2093043).
        
    -   Back up the `coredns` ConfigMap in the kube-system namespace.
        
-   CoreDNS service unavailability can severely affect other services in the cluster.
    
    -   Unmanaged CoreDNS: To ensure the availability of CoreDNS, see [Suggestions for deploying stable and high-performance unmanaged CoreDNS](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-coredns-for-high-availability).
        
    -   Managed CoreDNS: Alibaba Cloud Container Service for Kubernetes (ACK) ensures its availability. For more information, see [Performance of managed CoreDNS](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/coredns-managed-edition-performance-description).
        

## Change log

### **Unmanaged edition**

**Version number**

**Applicable clusters**

**Registry Address**

**Change time**

**Changes**

**Impact**

v1.12.1.3

For clusters of v1.27 and later.

registry.{{.Region}}.aliyuncs.com/acs/coredns:v1.12.1.3

November 5, 2025

-   Optimization:
    
    -   Added [matchLabelKeys]( https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/ ) to topologySpreadConstraints. This prevents CoreDNS pods from being concentrated in a single zone after a rolling upgrade of the component, which is not the expected behavior. For more information, see [Use scheduling policies to achieve high availability for CoreDNS](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-coredns-for-high-availability#ff8b04098exbi).
        

This upgrade does not affect your services.

v1.12.1.2

For clusters of v1.21 and later.

registry.{{.Region}}.aliyuncs.com/acs/coredns:v1.12.1.2

October 10, 2025

-   Optimization:
    
    -   Removed the `aliyun` suffix from the component version number.
        
    -   Optimized the default `serve_stale` configuration of the `cache` plugin to `serve_stale 30s verify`.
        

This upgrade does not affect your services.

v1.12.1.1-4035d7a99-aliyun

For clusters of v1.21 and later.

registry.{{.Region}}.aliyuncs.com/acs/coredns:v1.12.1.1-4035d7a99-aliyun

July 22, 2025

Updated to community [v1.12.1](https://github.com/coredns/coredns/releases/tag/v1.12.1).

-   Added the [multisocket](https://coredns.io/plugins/multisocket/) plugin.
    
-   Increased the canonical name (CNAME) lookup limit from 7 to 10.
    
-   plugin/kubernetes: Fixed an issue where deleted pods were resolved due to DeletionTimestamp ([#7119](https://github.com/coredns/coredns/issues/7119)) ([#7131](https://github.com/coredns/coredns/pull/7131)).
    
-   plugin/kubernetes: Reverted "Only create pointer (PTR) records for endpoints with a defined hostname ( [#6898](https://github.com/coredns/coredns/pull/6898) )".
    
-   plugin/forward: Added the `failfast_all_unhealthy_upstreams` option. This returns `servfail` when all upstream servers are down.
    
-   The `serve_stale` configuration is enabled by default for the `cache` plugin. When an upstream DNS server is unavailable, CoreDNS can respond with an expired cache (the time to live (TTL) of this response is 0) and asynchronously try to get the latest address for the domain name.
    

This upgrade does not affect your services.

v1.11.3.5-5321daf49-aliyun

For clusters of v1.21 and later.

registry.{{.Region}}.aliyuncs.com/acs/coredns:v1.11.3.5-5321daf49-aliyun

March 19, 2025

-   Updated the base image to fix related security vulnerabilities.
    
-   Added support for Lingjun node pools. CoreDNS pods are not scheduled to Lingjun nodes.
    

This upgrade does not affect your services.

v1.11.3.2-f57ea7ed6-aliyun

For clusters of v1.21 and later.

registry.{{.Region}}.aliyuncs.com/acs/coredns:v1.11.3.2-f57ea7ed6-aliyun

October 21, 2024

-   CoreDNS now supports the [Firewall](https://github.com/coredns/policy) plugin, and the Forward plugin can execute the next plugin based on the return code.
    
-   You can now customize the topology constraint options for CoreDNS component deployments on the **Operations** > **Add-ons** page of the console.
    

This upgrade does not affect your services.

v1.9.3.16-4341f22f-aliyun

For ACK serverless clusters of v1.20.4 and later only.

registry.{{.Region}}.aliyuncs.com/acs/coredns:v1.9.3.16-4341f22f-aliyun

May 9, 2023

The default memory request for CoreDNS container scheduling is increased to 4 GiB to prevent CoreDNS from being scheduled to shared instances. You can customize the memory size in the component configuration.

The upgrade may result in the use of higher Elastic Container Instance (ECI) specifications when creating CoreDNS.

v1.9.3.10-7dfca203-aliyun

For clusters of v1.20.4 and later.

registry.{{.Region}}.aliyuncs.com/acs/coredns:v1.9.3.10-7dfca203-aliyun

April 3, 2023

-   Optimized zone-level anti-affinity scheduling.
    
-   Reduced the possibility of pod eviction in elastic node scenarios.
    

Due to scheduling policy adjustments, if all schedulable nodes in the cluster are in a single zone, CoreDNS replicas may fail to be scheduled and the component upgrade may fail. To ensure DNS availability, scale out your cluster and distribute the schedulable nodes across multiple zones to ensure that CoreDNS replicas can be scheduled and run.

v1.9.3.6-32932850-aliyun

For clusters of v1.20.4 and later.

registry.{{.Region}}.aliyuncs.com/acs/coredns:v1.9.3.6-32932850-aliyun

August 25, 2022

-   Supports delivering Kubernetes events.
    
-   In ACK serverless clusters, the default CPU request is changed to 2 cores.
    

This upgrade does not affect your services.

v1.9.3.2-8850b5e7-aliyun

For clusters of v1.20.4 and later.

registry.{{.Region}}.aliyuncs.com/acs/coredns:v1.9.3.2-8850b5e7-aliyun

August 3, 2022

Supports one-click enabling of CoreDNS log collection in the log center.

This upgrade does not affect your services.

v1.9.3.1-5e7ba42d-aliyun

For clusters of v1.20.4 and later.

registry.{{.Region}}.aliyuncs.com/acs/coredns:v1.9.3.1-5e7ba42d-aliyun

July 11, 2022

-   Fixed several issues and added some features. For more information, see [CoreDNS-1.9.3 Release](https://coredns.io/2022/05/27/coredns-1.9.3-release/).
    
-   Supports ACK One multi-cluster services.
    

This upgrade does not affect your services.

v1.8.4.5-2ce07fd2-aliyun

For clusters of v1.20.4 and later.

registry.{{.Region}}.aliyuncs.com/acs/coredns:v1.8.4.5-2ce07fd2-aliyun

April 8, 2022

Optimized the CoreDNS scheduling affinity configuration to allow all cluster nodes to be elastic scaling nodes.

This upgrade does not affect your services.

v1.8.4.3-644f4735-aliyun

For clusters of v1.20.4 and later.

registry.{{.Region}}.aliyuncs.com/acs/coredns:v1.8.4.3-644f4735-aliyun

February 22, 2022

-   Disabled caching for resolution results of the ServError type.
    
-   Changed the anti-affinity scheduling by hostname from preferred to required. This enforces node-level anti-affinity scheduling.
    

Because replica anti-affinity is enforced at the node level, some CoreDNS replicas will be in the Pending state if the number of CoreDNS replicas is greater than the number of nodes. Before you upgrade to this version, scale out the cluster nodes or scale in the CoreDNS replicas.

v1.8.4.2-7d597cff-aliyun

For clusters of v1.20.4 and later.

registry.{{.Region}}.aliyuncs.com/acs/coredns:v1.8.4.2-3a376cc-aliyun

January 10, 2022

-   Added support for custom parameters.
    
-   Enabled resolution logs by default.
    

This upgrade does not affect your services.

v1.8.4.1-3a376cc-aliyun

For clusters of v1.20.4 and later.

registry.{{.Region}}.aliyuncs.com/acs/coredns:v1.8.4.1-3a376cc-aliyun

October 26, 2021

-   Supports watching EndpointSlices resources.
    
-   Supports DNS queries using IPv6 addresses.
    

This upgrade does not affect your services.

v1.7.0.0-f59c03d-aliyun

For clusters of v1.14.8 and later.

registry.{{.Region}}.aliyuncs.com/acs/coredns:v1.7.0.0-f59c03d-aliyun

July 8, 2021

-   Modified the default graceful shutdown time for CoreDNS and the container memory limit in the CoreDNS deployment.
    
-   Updated metric names. If your monitoring system depends on CoreDNS metrics, make sure to modify them. For more information, see [Metric Changes](https://coredns.io/2020/06/15/coredns-1.7.0-release/#metric-changes).
    
-   Fixed an issue where the Forward plugin used only the first upstream DNS server.
    
-   Removed compatibility for the deprecated Upstream plugin. If the Corefile configuration contains the Upstream plugin, it is safely and automatically deleted during the upgrade.
    

If you have modified the /etc/resolv.conf DNS configuration file on an Elastic Compute Service (ECS) instance, upgrading or recreating a CoreDNS pod will cause it to use the modified /etc/resolv.conf file. Before you upgrade, make sure that all DNS servers in the configuration are working correctly.

1.6.7.edge (Discontinued)

\-

registry.{{.Region}}.aliyuncs.com/acs/coredns:1.6.7.edge

April 23, 2021

Built based on community version 1.6.7. For more information, see [CoreDNS-1.6.7 Release](https://coredns.io/2020/01/28/coredns-1.6.7-release/).

This upgrade does not affect your services.

v1.7.0

\-

registry.{{.Region}}.aliyuncs.com/acs/coredns:1.7.0

March 18, 2021

-   Removed compatibility for the deprecated Upstream plugin. If the Corefile configuration contains the Upstream plugin, it is safely and automatically deleted during the upgrade.
    
-   Updated metric names. If your monitoring system depends on CoreDNS metrics, make sure to modify them. For more information, see [Metric Changes](https://coredns.io/2020/06/15/coredns-1.7.0-release/#metric-changes).
    
-   Fixed an issue where the Forward plugin used only the first upstream DNS server.
    

If you have modified the /etc/resolv.conf DNS configuration file on an ECS instance, upgrading or recreating a CoreDNS pod will cause it to use the modified /etc/resolv.conf file. Before you upgrade, make sure that all DNS servers in the configuration are working correctly.

v1.6.7 (Discontinued)

\-

registry.{{.Region}}.aliyuncs.com/acs/coredns:1.6.7

November 28, 2018

Built based on community version 1.6.7. For more information, see [CoreDNS-1.6.7 Release](https://coredns.io/2020/01/28/coredns-1.6.7-release/).

This upgrade does not affect your services.

### **Managed edition**

**Version number**

**Applicable clusters**

**Registry Address**

**Change time**

**Changes**

**Impact**

v1.12.1.2

For clusters of v1.21 and later.

registry.{{.Region}}.aliyuncs.com/acs/coredns:v1.12.1.2

October 10, 2025

-   Optimization:
    
    -   Updated to community [v1.12.1](https://github.com/coredns/coredns/releases/tag/v1.12.1).
        
    -   In clusters where the IPv6 dual-stack feature is not enabled, queries for AAAA records directly return `nodata`.
        
    -   The [multisocket plugin is enabled by default to enhance performance](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/dns-best-practice#708c3f86e8e7n).
        

This upgrade does not affect your services.

v1.11.3.2-f57ea7ed6-aliyun

For clusters of v1.21 and later.

registry.{{.Region}}.aliyuncs.com/acs/coredns:v1.11.3.2-f57ea7ed6-aliyun

October 21, 2024

-   CoreDNS now supports the [Firewall](https://github.com/coredns/policy) plugin, and the Forward plugin can execute the next plugin based on the return code.
    
-   You can now customize the topology constraint options for CoreDNS component deployments on the **Operations** > **Add-ons** page of the console.
    

This upgrade does not affect your services.

v1.9.3.10-7dfca203-aliyun

For clusters of v1.20.4 and later.

registry.{{.Region}}.aliyuncs.com/acs/coredns:v1.9.3.10-7dfca203-aliyun

April 3, 2023

-   Optimized zone-level anti-affinity scheduling.
    
-   Reduced the possibility of pod eviction in elastic node scenarios.
    

Due to scheduling policy adjustments, if all schedulable nodes in the cluster are in a single zone, CoreDNS replicas may fail to be scheduled and the component upgrade may fail. To ensure DNS availability, scale out your cluster and distribute the schedulable nodes across multiple zones to ensure that CoreDNS replicas can be scheduled and run.
