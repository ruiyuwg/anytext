The Cloud Controller Manager (CCM) is a Kubernetes component that manages load balancing and enables cross-node communication in Kubernetes clusters. This topic describes the CCM component, usage instructions, and release notes.

## Component overview

The Cloud Controller Manager (CCM) integrates Kubernetes with Alibaba Cloud core services such as the Classic Load Balancer (CLB), Network Load Balancer (NLB), and Virtual Private Cloud (VPC). CCM provides the following capabilities:

-   Manage load balancing
    
    When you set `Type=LoadBalancer` for a service, CCM creates and configures a [Classic Load Balancer (CLB)](/help/en/slb/classic-load-balancer/user-guide/clb-instance/) or [Network Load Balancer (NLB)](/help/en/slb/network-load-balancer/user-guide/overview-of-nlb-instances/). This includes CLB or NLB instances, listeners, and backend server groups. When the service endpoints or cluster nodes change, CCM automatically updates the virtual server group on the CLB or NLB.
    
-   Enable cross-node communication
    
    When Flannel is used as the cluster network plugin, CCM establishes network connectivity between containers and nodes to enable cross-node container communication. Specifically, CCM adds each node’s pod CIDR block to the VPC route table. You do not need to configure this feature manually. Install CCM to use it.
    

## Usage instructions

-   CCM creates and configures a [Classic Load Balancer (CLB)](/help/en/slb/classic-load-balancer/user-guide/clb-instance/) or [Network Load Balancer (NLB)](/help/en/slb/network-load-balancer/user-guide/overview-of-nlb-instances/) for services. This includes CLB or NLB instances, listeners, and backend server groups. For more information, see [Considerations for configuring load balancing for services](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/considerations-for-configuring-a-loadbalancer-type-service-1#task-1941987).
    
-   CCM supports multiple annotations to provide rich load balancing capabilities on Alibaba Cloud. For detailed usage instructions, see [Configure Classic Load Balancer (CLB) using annotations](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-annotations-to-the-yaml-file-of-a-service-to-configure-clb-instances#task-1425948) and [Configure Network Load Balancer (NLB) using annotations](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-nlb-instances-by-using-annotations).
    
-   To resolve CCM upgrade check failures, see and [Cloud Controller Manager (CCM) upgrade check failure](https://www.alibabacloud.com/help/zh/kb-articles/latest/how-can-i-troubleshoot-a-check-failure-that-occurs-before-i-update-the-ccm).
    

## Release notes

### **January 2026**

**Version**

**Image address**

**Change Time**

**Changes**

**Impact**

v2.13.0

registry-cn-hangzhou.ack.aliyuncs.com/acs/cloud-controller-manager:v2.13.0

January 30, 2026

New features:

-   CLB supports extended domain name certificates for HTTPS listeners using the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-domain-extensions` annotation.
    
-   NLB supports extended certificates for TCPSSL listeners using the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-additional-cert-ids` annotation.
    
-   NLB supports cross-AZ forwarding using the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-cross-zone-enabled` annotation. This feature is enabled by default.
    

Optimizations:

-   Optimize Elastic Network Interface (ENI) attachment logic to prevent ENI attachment failures on other pods when some pods fail to attach ENIs.
    
-   When creating an internal-facing CLB without specifying a vSwitch, CCM randomly selects an available vSwitch from the cluster.
    

This upgrade does not affect your business.

### **December 2025**

**Version**

**Image address**

**Change Time**

**Changes**

**Impact**

v2.12.4

registry-cn-hangzhou.ack.aliyuncs.com/acs/cloud-controller-manager:v2.12.4

December 11, 2025

New features:

-   Support Pod ReadinessGate Webhook and enable it by default for new clusters. For usage instructions, see [Ensure smooth Pod updates by configuring Readiness Gate](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-a-readiness-gate-to-ensure-smooth-pod-updates).
    

Bug fixes:

-   Fix an issue where associated server groups are not automatically cleaned up when deleting an NLB service.
    

This upgrade does not affect your business.

### **November 2025**

**Version**

**Image address**

**Change Time**

**Changes**

**Impact**

v2.12.3

registry-cn-hangzhou.ack.aliyuncs.com/acs/cloud-controller-manager:v2.12.3

November 19, 2025

New features:

-   Support Lingjun nodes: Automatically clean up Lingjun node resources in the cluster after Lingjun instances are released.
    

Optimizations:

-   When CLB fails because no ENI is found for a backend pod IP, the error log now includes the specific pod name (`targetRef`) and node information.
    

Bug fixes:

-   Fixed an issue that caused a panic during the Service synchronization process when querying NLB information or when an asynchronous task call failed.
    

This upgrade does not affect your business.

### **September 2025**

**Version**

**Image address**

**Change Time**

**Changes**

**Impact**

v2.12.1

registry-cn-hangzhou.ack.aliyuncs.com/acs/cloud-controller-manager:v2.12.1

September 11, 2025

**Important**

Starting from this version, the billing method for newly created CLB instances changes from PayBySpec to PayByCLCU. Existing CLB instances are unaffected. For details, see [Announcement: Default load balancer type and billing method changes for new services and Nginx Ingress Controllers](/help/en/ack/product-overview/product-change-announcement-on-new-service-and-nginx-ingress-controller).

-   New features:
    
    -   The billing method for newly created CLB instances changes from PayBySpec to PayByCLCU.
        
    -   Ignore hybrid cloud nodes.
        
    -   Ignore services that directly attach pod ENIs to load balancer backends for Terway clusters created after August 10, 2020.
        
-   Optimizations:
    
    -   Improve CLB and NLB processing speed and performance.
        
    -   When NLB OpenAPI calls are rate limited, CCM retries the call multiple times.
        
    -   Optimize metrics related to service, Ingress, and node synchronization time.
        
    -   Change the retry wait time for `readinessGate` from exponential backoff to a fixed value.
        
-   Bug fixes:
    
    -   Fix an issue where health check ports cannot be automatically set to the backend `targetPort` when NLB listeners use port ranges and health checks are manually configured.
        
    -   Fix an issue where ECS + ECI/ACS hybrid deployments fail to attach ECI/ACS instances or incorrectly set backend weights.
        

This upgrade does not affect your business.

### **July 2025**

**Version**

**Image address**

**Modification Time**

**Changes**

**Impact**

v2.11.4

registry-cn-hangzhou.ack.aliyuncs.com/acs/cloud-controller-manager:v2.11.4

July 17, 2025

-   Bug fix
    
    -   Fix an issue where NLB listener port ranges fail to create when using the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-listener-port-range` annotation.
        

This upgrade does not affect your business.

### **June 2025**

**Version**

**Image address**

**Change Time**

**Changes**

**Impact**

v2.11.3

registry-cn-hangzhou.ack.aliyuncs.com/acs/cloud-controller-manager:v2.11.3

June 27, 2025

-   New features
    
    -   Support ECS metadata hardening mode.
        
-   Optimizations:
    
    -   Skip the OpenAPI call to add servers when creating an empty server group.
        
-   Bug fixes
    
    -   Fix an issue where adding servers fails when the service configuration uses a port name for targetPort and only some pods are selected.
        

This upgrade does not affect your business.

### May 2025

**Version**

**Image address**

**Change Time**

**Changes**

**Impacts**

v2.11.2

registry-cn-hangzhou.ack.aliyuncs.com/acs/cloud-controller-manager:v2.11.2

May 29, 2025

-   Optimizations:
    
    -   Optimize server group synchronization logic to reduce OpenAPI calls.
        

This upgrade does not affect your business.

v2.11.1

registry-cn-hangzhou.ack.aliyuncs.com/acs/cloud-controller-manager:v2.11.1

May 15, 2025

-   New features:
    
    -   Support ignoring backend server weight updates using the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-ignore-weight-update` annotation.
        
    -   CLB supports multiple ACL IDs to configure multiple access control policy groups.
        
    -   NLB supports listener port ranges using the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-listener-port-range` annotation.
        
    -   Support custom NLB OpenAPI endpoints using the `NLB_ENDPOINT` environment variable.
        
-   Optimizations:
    
    -   Optimize node join and route addition speed to reduce OpenAPI calls.
        
    -   Parallelize listener and server group synchronization for services to reduce per-service synchronization time.
        
    -   When calling the OpenAPI to create an NLB instance without specifying an EIP instance ID or IPv4 private IP address, pass a null pointer instead of an empty string.
        
    -   Use `NextToken` instead of `PageSize` for pagination when calling the [DescribeNetworkInterfaces](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describenetworkinterfaces) API.
        
-   Bug fixes:
    
    -   Fix an issue where NLB does not retry when pods are not ready for services using ReadinessGate.
        

This upgrade does not affect your business.

### March 2025

**Version**

**Registry Address**

**Change Time**

**Changes**

**Impact**

v2.10.4

registry-cn-hangzhou.ack.aliyuncs.com/acs/cloud-controller-manager:v2.10.4

March 24, 2025

-   New features:
    
    -   Disable source and destination IP address checking for primary ENIs of newly added ECS instances in the cluster. For details, see [Announcement: Default disablement of source/destination IP checking for new ECS instances in ACK clusters](/help/en/ack/product-overview/announcement-on-default-disabling-of-source-destination-ip-verification-for-new-ecs-instances-in-clusters).
        

This upgrade does not affect your business.

### **January 2025**

**Version**

**Image address**

**Modification Time**

**Changes**

**Impact**

v2.10.2

registry-cn-hangzhou.ack.aliyuncs.com/acs/cloud-controller-manager:v2.10.2

January 20, 2025

-   New features:
    
    -   Support adding the `node.alibabacloud.com/spot-strategy` label to identify whether a node is a Spot instance.
        
-   Optimizations:
    
    -   When multiple listeners of the same service share a server group, synchronize the server group only once.
        
-   Bug fixes:
    
    -   Fix an issue where LB instances fail to create when a `LoadBalancer` service changes to another type and then back to `LoadBalancer`.
        
    -   Fix an error where pods cannot be found when updating Pod Readiness status.
        
    -   When updating LB instance tags, ignore system tags that start with `acs:`.
        

This upgrade does not affect your business.

### **October 2024**

**Version**

**Image address**

**Change Time**

**Changes**

**Impact**

v2.10.0

registry-cn-hangzhou.ack.aliyuncs.com/acs/cloud-controller-manager:v2.10.0

October 21, 2024

**Important**

Starting from this version, changes to the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-additional-resource-tags` annotation take effect on both newly created and reused LB instances. Do not modify LB tags in the console when using this annotation. Before upgrading to this version, verify that LB tags match the annotation values.

-   New features:
    
    -   Support readinessGate capability.
        
    -   Support modifying tags for existing LB instances using the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-additional-resource-tags` annotation.
        
    -   Support retaining LB instances after service deletion using the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-preserve-lb-on-delete` annotation.
        
    -   Support adding the `node.alibabacloud.com/nodepool-id` and `node.alibabacloud.com/instance-charge-type` labels to nodes.
        
    -   NLB supports specifying the ALPN policy for a `TCPSSL` listener using the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-alpn` and `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-alpn-policy` annotations.
        
-   Optimizations:
    
    -   Upgrade the base image to Alpine 3.18.
        
    -   Optimize log output by adding `reconcileID`.
        
-   Bug fixes:
    
    -   Fix an issue where NLB services are incorrectly managed by the CLB controller.
        

This upgrade does not affect your business.

### **May 2024**

**Version**

**Image address**

**Modified Time**

**Changes**

**Impact**

v2.9.1

registry-cn-hangzhou.ack.aliyuncs.com/acs/cloud-controller-manager-amd64:v2.9.1

May 10, 2024

**Important**

Starting from this version, newly created CLB and NLB instances and their associated resources (such as server groups) belong to the resource group of the cluster by default. Existing CLB and NLB instances are unaffected.

-   New features:
    
    -   When creating new CLB or NLB instances, use the cluster's resource group ID by default.
        
    -   CLB supports enabling the `X-Forwarded-SLBPort` request header using the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-xforwardedfor-slbport` annotation.
        
    -   CLB supports enabling the `X-Forwarded-Client-srcport` request header using the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-xforwardedfor-clientsrcport` annotation.
        
    -   NLB supports specifying an Internet Shared Bandwidth package ID using the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-bandwidth-package-id` annotation.
        
    -   New NLB instances have deletion protection and configuration read-only mode enabled by default.
        
    -   NLB supports reusing server groups using the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-vgroup-port` annotation. This annotation takes effect only when reusing an existing NLB.
        
    -   When multiple services reuse the same NLB, set traffic weights for the current service using the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-weight` annotation. This annotation takes effect only when reusing an existing vServer group.
        
    -   Support reusing NLB across VPCs in the same region.
        
    -   Dual-stack NLB supports attaching IPv6 backends using the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-backend-ip-version: ipv6` annotation.
        
    -   Dual-stack NLB supports specifying IPv6 public or private network types using the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-ipv6-address-type` annotation.
        
    -   NLB supports passing `VpcId`, `PrivateLinkEpId`, and `PrivateLinkEpsId` information to backend servers through the Proxy Protocol using the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-ppv2-pvl-ep-id-enabled`, `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-ppv2-pvl-eps-id-enabled`, and `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-ppv2-pvl-vpc-id-enabled` annotations.
        
    -   In dual-stack clusters, ECS IPv6 addresses are automatically added to nodes.
        
-   Optimizations:
    
    -   Use `EndpointSlice` instead of `Endpoint` for endpoint discovery by default.
        
    -   Add validation for empty route table IDs.
        
    -   Add validation for OpenAPI return values in reuse scenarios.
        
    -   Use the `resourceVersion=0` parameter when initiating list requests.
        
-   Bug fixes:
    
    -   Fix an issue where the `NetworkUnavailable` status is not set during node initialization in Flannel network mode.
        
    -   Fix an issue where NLB server group ownership is incorrect when using the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-resource-group-id` annotation to specify a resource group.
        

This upgrade does not affect your business.

### October 2023

**Version**

**Image address**

**Change Time**

**Changes**

**Impact**

v2.8.1

registry-cn-hangzhou.ack.aliyuncs.com/acs/cloud-controller-manager-amd64:v2.8.1

October 16, 2023

-   New features:
    
    -   Support Addon Token authorization mode.
        
    -   NLB supports creating IP-based server groups using the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-server-group-type` annotation. For NLB server group categories and descriptions, see [NLB server groups](/help/en/slb/network-load-balancer/user-guide/overview-of-nlb-server-groups).
        
-   Optimizations:
    
    -   Directly access the API server to avoid dirty data caused by caching mechanisms.
        
    -   NLB: Optimize server group creation logic to prevent occasional duplicate server group creation.
        
    -   CLB: Add IP address validation when attaching pod ENIs to CLB. The IP address must be in the cluster VPC.
        

This upgrade does not affect your business.

### June 2023

**Version**

**Image address**

**Modification Time**

**Changes**

**Impact**

v2.7.0

registry-cn-hangzhou.ack.aliyuncs.com/acs/cloud-controller-manager-amd64:v2.7.0

June 21, 2023

-   New features:
    
    Support specifying an IP address for internal-facing load balancers using the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-ip` annotation.
    
-   Optimizations:
    
    -   Optimize CLB and NLB server group synchronization logic to reduce synchronization failures caused by quota limits.
        
    -   Update the service hash calculation method to reduce hash value changes during cluster upgrades.
        
-   Bug fixes:
    
    -   Fix an issue where service configurations cannot be updated after setting the EIP annotation.
        
    -   Fix an issue where HTTP protocol cannot be set for other ports after setting the ForwardPort annotation.
        

This upgrade does not affect your business.

### March 2023

**Version**

**Image address**

**Modification Time**

**Changes**

**Impact**

v2.6.0

registry-cn-hangzhou.ack.aliyuncs.com/acs/cloud-controller-manager-amd64:v2.6.0

March 2, 2023

-   New features:
    
    -   The `alpha.service-controller.kubernetes.io/exclude-balancer` label for excluding nodes from LB backends is deprecated. Use the new `node.kubernetes.io/exclude-from-external-load-balancers` label instead.
        
    -   LB supports configuring TCP and UDP protocols for the same listener.
        
    -   CLB supports disabling TCP and UDP health checks using the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-switch` annotation.
        
    -   CLB supports configuring the ProxyProtocol for TCP and UDP listeners using the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-proxy-protocol` annotation.
        
        **Important**
        
        This feature does not support online smooth migration. To switch to ProxyProtocol, stop your applications and upgrade. Configure with caution.
        
    -   CLB validates certificate validity periods when synchronizing HTTPS listeners. Synchronization fails if the certificate expires.
        
    -   NLB supports assigning security groups using the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-security-group-ids` annotation.
        
-   Optimizations:
    
    -   Switch the CCM leader election resource lock from endpointsleases to leases to reduce primary/secondary switchover.
        
    -   Optimize load balancer synchronization logic. Continue updating virtual server groups even if load balancer attributes (such as name or resource group) fail to update.
        
    -   Optimize node change detection to reduce service synchronization frequency.
        
-   Bug fixes:
    
    Fix occasional misidentification of nodes as NotReady.
    

This upgrade does not affect your business.

### October 2022, March 2023, August 2023, and June 2024

**Version**

**Image address**

**Modification Time**

**Changes**

**Impact**

v2.5.1

registry.cn-hangzhou.aliyuncs.com/acs/cloud-controller-manager-amd64:v2.5.1

October 12, 2022

-   New features:
    
    -   ACK supports creating Network Load Balancer (NLB) resources for services of the loadBalancer type whose loadBalancerClass is `alibabacloud.com/nlb`. This feature is supported only in Kubernetes 1.24 and later versions. For more information, see [What is Network Load Balancer (NLB)](/help/en/slb/network-load-balancer/product-overview/what-is-nlb/#concept-2223473).
        
    -   ACK supports creating different cloud resources based on the `spec.loadBalancerClass` field of a service. If unset, CLB is created by default. If set to `alibabacloud.com/nlb`, NLB is created. Supported only on Kubernetes 1.24 and later.
        
-   Optimizations:
    
    -   Fix an issue where reused IPv6 SLB instances cannot be deleted.
        
    -   Fix occasional node deletion failures.
        
    -   Set the OpenAPI call protocol to HTTPS by default.
        

This upgrade does not affect your business.

v2.4.5

registry-cn-hangzhou.ack.aliyuncs.com/acs/cloud-controller-manager-amd64:v2.4.5

June 27, 2024

Optimizations:

-   Update the service hash calculation method to reduce hash value changes during cluster upgrades.
    

This upgrade does not affect your business.

v2.4.4

registry-cn-hangzhou.ack.aliyuncs.com/acs/cloud-controller-manager-amd64:v2.4.4

August 7, 2023

Optimizations:

-   Optimize CLB server group synchronization logic to reduce synchronization failures caused by quota issues.
    
-   CLB validates certificate validity periods when synchronizing HTTPS listeners. Synchronization fails if the certificate expires.
    
-   Optimize load balancer synchronization logic. Continue updating virtual server groups even if load balancer attributes (such as name or resource group) fail to update.
    

This upgrade does not affect your business.

v2.4.3

registry.cn-hangzhou.aliyuncs.com/acs/cloud-controller-manager-amd64:v2.4.3

March 2, 2023

Fix occasional misidentification of nodes as NotReady.

This upgrade does not affect your business.

v2.4.2

registry.cn-hangzhou.aliyuncs.com/acs/cloud-controller-manager-amd64:v2.4.2

October 12, 2022

Optimizations:

-   Fix an issue where reused IPv6 SLB instances cannot be deleted.
    
-   Fix occasional node deletion failures.
    

This upgrade does not affect your business.

### **June 2022**

**Version**

**Image address**

**Modification Time**

**Changes**

**Impact**

v2.4.0

registry.cn-hangzhou.aliyuncs.com/acs/cloud-controller-manager-amd64:v2.4.0

June 20, 2022

-   New features:
    
    -   Support setting the billing method for load balancer instances using the annotation: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-instance-charge-type`.
        
    -   Support setting security policies for load balancer instances using the annotation: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-tls-cipher-policy`. Supported only for HTTPS.
        
    -   When adding nodes, CCM automatically adds the `node.spec.providerID` field if it is empty.
        
    -   Support adding the `service.k8s.alibaba/loadbalancer-id` label to LoadBalancer services to display the associated load balancer instance ID.
        
-   Optimizations:
    
    -   Nodes with the ToBeDeletedByClusterAutoscaler taint are not added to load balancer backends.
        
    -   Fix an issue where conflicting routes cannot be deleted when route CIDR blocks are identical.
        
    -   Optimize concurrent route synchronization to reduce false positives.
        

This upgrade does not affect your business.

### **March 2022**

**Version**

**Image address**

**Change Time**

**Changes**

**Impact**

v2.3.0

registry.cn-hangzhou.aliyuncs.com/acs/cloud-controller-manager-amd64:v2.3.0

March 21, 2022

-   New features:
    
    -   Support setting hostnames for services using the annotation: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-hostname`.
        
    -   Support setting connection timeout for load balancer listeners using the annotation: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-established-timeout`. Supported only for TCP.
        
    -   Support setting request timeout for load balancer listeners using the annotation: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-request-timeout`. Supported only for HTTP and HTTPS.
        
    -   Support setting health check methods for load balancers using the annotation: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-health-check-method`. Supported only for HTTP health checks.
        
-   Optimizations:
    
    -   Validate server group format when reusing existing server groups.
        
    -   Optimize vSwitch selection logic to prevent empty default vSwitches.
        
    -   Optimize server group synchronization logic to reduce OpenAPI calls.
        

This upgrade does not affect your business.

### **November 2021**

**Version**

**Image address**

**Change Time**

**Changes**

**Impact**

v2.1.0

registry.cn-hangzhou.aliyuncs.com/acs/cloud-controller-manager-amd64:v2.1.0

November 22, 2021

-   New features:
    
    -   Support configuring whether to obtain the SLB listener protocol from the X-Forwarded-Proto header using the annotation: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-xforwardedfor-proto`.
        
    -   Support setting connection idle timeout using the annotation: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-idle-timeout`.
        
    -   Support enabling HTTP2 using the annotation: `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-http2-enabled`.
        
-   Optimizations:
    
    Support setting `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-weight` to 0. This is useful for traffic switching between clusters.
    
-   Bug fixes:
    
    -   Fix an issue where CLB listeners cannot be created for large numbers of pods.
        
    -   Fix an issue where CLB does not synchronize updates to service TargetPort.
        

This upgrade does not affect your business.

### **September 2021**

**Version**

**Image address**

**Modification Time**

**Changes**

**Impact**

v2.0.1

registry.cn-hangzhou.aliyuncs.com/acs/cloud-controller-manager-amd64:v2.0.1

September 2, 2021

-   New features:
    
    -   Support reusing existing virtual server groups using the annotation: service.beta.kubernetes.io/alibaba-cloud-loadbalancer-vgroup-port. This annotation takes effect only when reusing existing SLB instances. For instructions, see [Deploy services across clusters by reusing existing load balancers](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-the-ccm-to-deploy-services-across-clusters#task-2129459).
        
    -   When multiple services reuse the same SLB, set traffic weights for the current service using the annotation: service.beta.kubernetes.io/alibaba-cloud-loadbalancer-weight. This annotation takes effect only when reusing existing virtual server groups. For instructions, see [Deploy services across clusters by reusing existing load balancers](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-the-ccm-to-deploy-services-across-clusters#task-2129459).
        
    -   Support managing SLB graceful connection termination using the annotation: service.beta.kubernetes.io/alibaba-cloud-loadbalancer-connection-drain. Supported only for TCP and UDP.
        
    -   Support setting SLB graceful connection termination timeout using the annotation: service.beta.kubernetes.io/alibaba-cloud-loadbalancer-connection-drain-timeout. Supported only for TCP and UDP.
        
    -   Support String-type TargetPort.
        
    -   Add Finalizer for LoadBalancer services.
        
-   Optimizations:
    
    -   Upgrade the base image to Alpine 3.13.
        
    -   Change the Prometheus metrics port from 10258 to 8080.
        
    -   Synchronize node labels periodically.
        

This upgrade does not affect your business.

### **April 2021**

**Version**

**Image address**

**Modification Time**

**Changes**

**Impact**

v1.9.3.380-gd6d0962-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/cloud-controller-manager-amd64:v1.9.3.380-gd6d0962-aliyun

April 20, 2021

-   Fix an issue where the default server group cannot be updated.
    
-   When the SLB backend is empty, emit an alert event.
    

This upgrade does not affect your business.

### **March 2021**

**Version**

**Image address**

**Change Time**

**Changes**

**Impact**

v1.9.3.378-g42eac35-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/cloud-controller-manager-amd64:v1.9.3.378-g42eac35-aliyun

March 8, 2021

New features:

-   Support adding ECS instances outside the cluster to virtual server groups.
    
-   When reusing existing SLB instances, add the `kubernetes.reused.by.user` tag to the SLB by default.
    

Optimizations:

-   Adjust the number of concurrent service processing threads to optimize service processing speed.
    
-   Optimize virtual-node handling logic to ignore service synchronization triggered by virtual-node state changes.
    
-   The `service.beta.kubernetes.io/exclude-node` label for excluding nodes is deprecated. Use the new `service.alibabacloud.com/exclude-node` label instead.
    
-   When reusing existing SLB instances, add resource group validation. The resource group ID in the annotation must match the SLB's resource group ID. Otherwise, reuse fails.
    
-   Optimize event content for better readability.
    
-   Optimize annotation priority settings for new and old versions. When both new and old versions of the same annotation exist on a service, the new version takes precedence.
    

Bug fixes:

-   Fix an issue where route deletion fails due to missing node configurations.
    
-   Optimize node initialization logic to fix missing taints. During node initialization, prevent business pods from being scheduled to nodes before routes are created.
    

This upgrade does not affect your business.

### **December 2020**

**Version**

**Image address**

**Modification Time**

**Changes**

**Impact**

v1.9.3.339-g9830b58-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/cloud-controller-manager-amd64:v1.9.3.339-g9830b58-aliyun

December 18, 2020

-   Support adding hashes to LoadBalancer services to ensure that when CCM restarts and the service is unchanged, only the virtual server group backend is synchronized—not the LoadBalancer configuration or listener configuration.
    
-   Optimize SLB OpenAPI calls to reduce rate limiting risks.
    

This upgrade does not affect your business.

### **September 2020**

**Version**

**Registry Address**

**Change Time**

**Changes**

**Impact**

v1.9.3.316-g8daf1a9-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/cloud-controller-manager-amd64:v1.9.3.316-g8daf1a9-aliyun

September 29, 2020

-   Fix occasional failures to update SLB virtual server groups.
    
-   Update the health check port from 10252 to 10258.
    

This upgrade does not affect your business.

### **August 2020**

**Version**

**Image address**

**Change Time**

**Changes**

**Impact**

v1.9.3.313-g748f81e-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/cloud-controller-manager-amd64:v1.9.3.313-g748f81e-aliyun

August 10, 2020

-   New features:
    
    -   Support SLB deletion protection using the annotation: service.beta.kubernetes.io/alibaba-cloud-loadbalancer-delete-protection. Deletion protection is enabled by default for new SLB instances.
        
    -   Support SLB configuration read-only mode using the annotation: service.beta.kubernetes.io/alibaba-cloud-loadbalancer-modification-protection. Configuration read-only mode is enabled by default for new SLB instances.
        
    -   Support specifying the resource group for SLB instances using the annotation: service.beta.kubernetes.io/alibaba-cloud-loadbalancer-resource-group-id. This takes effect only at creation and cannot be modified later.
        
    -   Support specifying SLB names using the annotation: service.beta.kubernetes.io/alibaba-cloud-loadbalancer-name.
        
    -   Change Alibaba Cloud OpenAPI calls from public network to internal network to remove CCM's public network dependency (supported in all regions).
        
    -   For SLB instances created by LoadBalancer services, add the `ack.aliyun.com: {your-cluster-id}` tag by default (applies only to new clusters).
        
    -   Support community provider ID naming: `<cloudProvider>://<optional>/<segments>/<provider id>`.
        
    -   For LoadBalancer services in new Terway clusters, attach pods directly to SLB backends by default. For new Terway-mode ACK clusters, if the service type is LoadBalancer, attach pod ENI IPs directly to SLB backends to improve network performance (String-type TargetPort is not supported for LoadBalancer services).
        
    
-   Optimizations:
    
    -   Upgrade the base image to Alpine 3.11.6.
        
    -   Updating listeners also updates virtual server groups.
        
    -   Optimize SLB APIs to reduce SLB creation time.
        
    

This upgrade does not affect your business.

### **June 2020**

**Version**

**Image address**

**Change Time**

**Changes**

**Impact**

v1.9.3.276-g372aa98-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/cloud-controller-manager-amd64: v1.9.3.276-g372aa98-aliyun

June 11, 2020

-   New features:
    
    -   Restrict reusing SLB instances attached to the cluster API server for LoadBalancer services.
        
    -   Add Prometheus metrics (ccm\_node\_latencies\_duration\_milliseconds, ccm\_route\_latencies\_duration\_milliseconds, ccm\_slb\_latencies\_duration\_milliseconds) to expose CCM synchronization latency.
        
    -   Expose service and LoadBalancer synchronization processes as events.
        
    
-   Optimizations:
    
    -   Optimize weight calculation in Local mode (set externalTraffic: Local) to balance loads across pods. For details, see [How do I automatically set node weights in Local mode?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-faq#section-7xa-hpn-yfw).
        
    -   Optimize cloud product API calls to improve efficiency and reduce rate limiting risks.
        
    -   When nodes have the service.beta.kubernetes.io/exclude-node label, do not delete associated routes when deleting nodes.
        
-   Bug fixes:
    
    -   Fixed the issue where you could not set the persistence timeout annotation to 0 when updating a Service.
        
    -   Fixed an issue where the bandwidth could not be set to 100 using an annotation when updating a Service.
        

This upgrade does not affect your business.

### **March 2020**

**version number**

**Image address**

**Modification Time**

**Changes**

**Impact**

v1.9.3.239-g40d97e1-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/cloud-controller-manager-amd64: v1.9.3.239-g40d97e1-aliyun

March 5, 2020

-   New features:
    
    For LoadBalancer services, CCM supports attaching both ECS nodes and Elastic Network Interfaces (ENIs) to SLB backends.
    
-   Optimizations:
    
    -   Change Alibaba Cloud OpenAPI calls from public network to internal network to remove CCM's public network dependency (not supported in Beijing, Shanghai, or Dubai yet).
        
    -   Replace the VPC route query API with DescribeRouteEntryList to avoid performance issues when querying hundreds of entries in a short time.
        

This upgrade does not affect your business.

### **December 2019**

**Version**

**Image address**

**Change Time**

**Changes**

**Impact**

v1.9.3.220-g24b1885-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/cloud-controller-manager-amd64: v1.9.3.220-g24b1885-aliyun

December 31, 2019

-   Configure vSwitch IDs. CloudConfig supports the `:vswitchid1,:vswitchid2` format.
    
-   When OpenAPI calls are rate limited, add backoff before retrying. Rejoin the reconcile queue after 30–180 seconds.
    
-   Set the number of reconcile worker threads to 2 to maximize OpenAPI QPS quota usage and improve reconcile speed.
    
-   Fix a crash caused by concurrent map reads and writes in the aliyungo SDK.
    
-   When nodes are removed from the Kubernetes cluster, CCM automatically deletes corresponding VPC route table entries.
    
-   Fix an issue where HTTP forward port configuration cannot be changed due to port forwarding dependencies.
    
-   If the SLB backend type is ECS, skip serverip field validation when updating SLB backend servers. This avoids backend attachment failures caused by OpenAPI serverip default value changes.
    
-   Add VPC route table entries for nodes only when node status is known.
    
-   CCM no longer adds NAT IP addresses to node metadata. This fixes occasional connectivity issues between the API server and kubelet.
    
-   Call the start listener OpenAPI only when the listener status is inactive to avoid OpenAPI rate limiting.
    

This upgrade does not affect your business.

### **November 2019**

**Version**

**Image address**

**Change Time**

**Changes**

**Impact**

v1.9.3.193-g6cddde4-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/cloud-controller-manager-amd64:v1.9.3.193-g6cddde4-aliyun

November 19, 2019

-   Support adding the label: service.beta.kubernetes.io/exclude-node to nodes to exclude them from CCM management.
    
-   Support batch-attaching Terway-network pods to SLB backends.
    
-   Limit node weights to at least 1 in Local mode (set externalTrafficPolicy=Local).
    
-   Fix duplicate virtual server group creation caused by concurrency.
    
-   Fix dirty data issues when setting node weights caused by caching.
    

This upgrade does not affect your business.

### **September 2019**

**Version**

**Image address**

**Change Time**

**Changes**

**Impact**

v1.9.3.164-g2105d2e-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/cloud-controller-manager-amd64:v1.9.3-164-g2105d2e-aliyun

September 11, 2019

-   Support updating certificates using the annotation: service.beta.kubernetes.io/alibaba-cloud-loadbalancer-cert-id.
    
-   Support HTTP-to-HTTPS port forwarding using the annotation: service.beta.kubernetes.io/alibaba-cloud-loadbalancer-forward-port.
    
-   Support creating SLB instances with ACLs using the annotation: service.beta.kubernetes.io/alibaba-cloud-loadbalancer-acl-status, service.beta.kubernetes.io/alibaba-cloud-loadbalancer-acl-id, and service.beta.kubernetes.io/alibaba-cloud-loadbalancer-acl-type.
    
-   Support removing unschedulable nodes using the annotation: service.beta.kubernetes.io/alibaba-cloud-loadbalancer-remove-unscheduled-backend.
    
-   In Terway network mode, support attaching pods directly to SLB backends using the annotation: service.beta.kubernetes.io/backend-type: "eni" to improve network forwarding performance.
    
-   In Local mode (set externalTrafficPolicy=Local), services automatically set node weights based on the number of pods on each node.
    

This upgrade does not affect your business.

### **April 2019**

**Version**

**Image address**

**Modification Time**

**Changes**

**Impact**

v1.9.3.105-gfd4e547-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/cloud-controller-manager-amd64:v1.9.3.105-gfd4e547-aliyun

April 15, 2019

-   Support multiple VPC route tables. Allow configuring multiple route tables for clusters through configuration files.
    
-   Fix an issue where HTTP protocol configuration updates do not take effect.
    

This upgrade does not affect your business.

### **March 2019**

**Version**

**Image address**

**Change Time**

**Changes**

**Impact**

v1.9.3.81-gca19cd4-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/cloud-controller-manager-amd64:v1.9.3.81-gca19cd4-aliyun

March 20, 2019

-   Managed Kubernetes and Dedicated Kubernetes support reusing existing SLB instances not created by Kubernetes.
    
-   CCM supports custom Kubernetes node names. It no longer depends strictly on Kubernetes NodeName.
    
-   Fix compatibility issues between CCM 1.8.4 and Kubernetes 1.11.5. Upgrade CCM to the latest version.
    

This upgrade does not affect your business.

### **December 2018**

**Version**

**Image address**

**Change Time**

**Changes**

**Impact**

v1.9.3.59-ge3bc999-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/cloud-controller-manager-amd64:v1.9.3.59-ge3bc999-aliyun

December 26, 2018

-   Support multiple Kubernetes services reusing the same SLB.
    
    -   SLB instances created by Kubernetes services cannot be reused (this may cause accidental SLB deletion). Only manually created SLB instances (in the console or via OpenAPI) can be reused.
        
    -   Multiple services reusing the same SLB cannot have identical frontend listener ports, or port conflicts occur.
        
    -   When reusing SLB, use listener names and virtual server group names as identifiers. Do not rename listeners or virtual server groups.
        
    -   You can rename SLB instances.
        
    -   Cross-cluster SLB reuse is not supported.
        
-   Change VPC route table operations from parallel to sequential to fix VPC rate limiting issues.
    

This upgrade does not affect your business.

### **August 2018**

**Version**

**Registry Address**

**Change Time**

**Changes**

**Impact**

v1.9.3.10-gfb99107-aliyun

registry.cn-hangzhou.aliyuncs.com/acs/cloud-controller-manager-amd64:v1.9.3.10-gfb99107-aliyun

August 15, 2018

-   Support specifying the primary zone for automatically created SLB instances using the annotation: service.beta.kubernetes.io/alibaba-cloud-loadbalancer-master-zoneid.
    
-   Support specifying the secondary zone for automatically created SLB instances using the annotation: service.beta.kubernetes.io/alibaba-cloud-loadbalancer-slave-zoneid.
    
    **Note**
    
    This parameter is invalid in regions that do not support primary/secondary zone SLB instances.
    
-   When specifying an existing SLB, support overriding SLB listeners using the annotation: service.beta.kubernetes.io/alibaba-cloud-loadbalancer-force-override-listeners. When set to true, existing listeners on the SLB are deleted.
    
-   Support specifying bandwidth for pay-by-bandwidth SLB instances using the annotation: service.beta.kubernetes.io/alibaba-cloud-loadbalancer-bandwidth. Multiple listeners share this bandwidth.
    

This upgrade does not affect your business.

### **June 2018**

**Version**

**Image address**

**Change Time**

**Changes**

**Impact**

v1.9.3

registry.cn-hangzhou.aliyuncs.com/acs/cloud-controller-manager-amd64:v1.9.3

June 25, 2018

-   Support selecting worker nodes as backend servers using the annotation: service.beta.kubernetes.io/alibaba-cloud-loadbalancer-backend-label.
    
-   Support specifying SLB instance types (such as shared-resource or dedicated-resource) using the annotation: service.beta.kubernetes.io/alibaba-cloud-loadbalancer-spec.
    
-   Support `externalTraffic: Local` mode. Only attach nodes where pods are scheduled as SLB backends.
    
-   Automatically manage SLB backends when cluster nodes are added or removed.
    
-   Automatically manage SLB backends when node labels change.
    
-   Support session stickiness.
    
-   For services created with existing SLB instances, CCM no longer manages listeners. You must add listeners manually.
    

This upgrade does not affect your business.
