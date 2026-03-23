Before creating your cluster, plan its size, network feature requirements, and Virtual Private Cloud (VPC) configuration—including the VPC itself and vSwitches. Also plan cluster-specific network settings, such as the container network interface (CNI) plug-in, pod CIDR block, and service CIDR block. This ensures efficient use of network resources and accommodates future business growth. This topic explains how to plan the network architecture for an ACK managed cluster in an Alibaba Cloud VPC environment.

## Network scale planning

### Region and zone

Within a region, all zones communicate over the internal network. Each zone is isolated from failures in other zones. If one zone fails, the others continue to operate normally. Instances deployed within the same zone have lower network latency for faster user access.

**Consideration**

**Description**

Latency

Deploying resources closer to your end-users reduces network latency and improves access speed.

Service availability

Alibaba Cloud services vary in availability across regions and zones. Ensure that your required cloud services are available in the selected regions and zones.

Cost

The price of a cloud service may vary by region. We recommend selecting a region that fits your budget.

High availability and disaster recovery

For services requiring high disaster recovery capabilities, deploy them across zones within the same region. You can also deploy your services across regions for inter-region disaster recovery.

Compliance

Select a region that complies with the data localization and operational filing policies of your country or region.

A VPC cannot be deployed across regions. To deploy your services across regions, create a VPC in each region and connect them using VPC peering connections or Cloud Enterprise Network (CEN). A vSwitch is a zonal resource. Note of the following:

-   If you use multiple zones due to cloud service availability, reserve sufficient CIDR blocks and consider the potential increased latency caused by inter-zone traffic.
    
-   Some regions offer only one zone, such as China (Nanjing - Local Region, Closing Down). If you require intra-region disaster recovery, carefully consider whether to select such a region.
    

**Note**

For information about regions where ACK is available, see [Available regions](/help/en/ack/product-overview/supported-regions).

### VPC count

A VPC provides a secure and flexible network environment. Different VPCs are completely isolated from each other, while resources within the same VPC can communicate over the private network. Plan the number of VPCs that fits your needs.

**Use case**

Single VPC

-   Your business is small and deployed in one region with no needs for network isolation.
    
-   You are new to VPC and want to learn its features.
    
-   You are cost-conscious and want to avoid the complexity and potential costs of cross-VPC connections.
    

Multiple VPCs

-   Your business is large and deployed in different regions.
    
-   Your services are in one region, but must be isolated.
    
-   Your business architecture is complex, and each unit needs to manage resources independently.
    

**Note**

By default, you can create up to 10 VPCs per region. To increase this quota, go to the [Quota Management page](https://vpc.console.alibabacloud.com/quota) or the [Quota Center](https://quotas.console.alibabacloud.com/products/vpc/quotas?query=vpc_quota_instances_num).

### vSwitch count

A vSwitch is a zonal resource. All cloud resources in a VPC are deployed within vSwitches. Creating vSwitches helps you properly plan IP addresses. All vSwitches in a VPC can communicate with each other by default.

**Consideration**

**Description**

Latency

The latency between zones in the same region is low. However, complex system calls and cross-zone calls may increase the latency.

High availability and disaster recovery

When using a VPC, create at least two vSwitches and deploy them across zones for disaster recovery. Centrally configure and manage security rules, which significantly improves high availability and disaster recovery.

Business scale and division

Create vSwitches by business modules. For example, for a standard web application architecture, create multiple vSwitches to host the web, logic, and data layers.

Plan your vSwitches by referring to the following principles:

-   Create at least two vSwitches and deploy them across zones for failover. When one vSwitch is down, the other takes over and provides disaster recovery.
    
    Note that the network latency may increase due to the complex network topology and cross-zone calls. We recommend enhancing your architecture to balance both high availability and low latency.
    
-   The number of vSwitches depends on your system scale and architecture. Typically, Switches are created by business modules. For example, deploy Internet-facing services in a public vSwitch, while other services are grouped into different vSwitches by their types. This helps to simplify the configuration and lets you manage security rules centrally.
    

**Note**

By default, you can create up to 150 vSwitches per VPC. To increase this quota, go to the [Quota Management page](https://vpc.console.alibabacloud.com/quota) or the [Quota Center](https://quotas.console.alibabacloud.com/products/vpc/quotas?query=vpc_quota_vswitches_num).

### Cluster size

**Node count**

**Use case**

**VPC planning**

**Zone planning**

Fewer than 100 nodes

Non-core business

Single VPC

1 (2 or more are recommended)

100 or more nodes

General workload requiring multiple zones

Single VPC

Two or more

100 or more nodes

Core workload requiring high reliability and multiple regions

Multiple VPCs

2 or more

## Network connectivity planning

### Single cluster in a single VPC

When you create a VPC, its CIDR block is fixed. When you create a cluster, assign a new CIDR block for pods and services. This block must not overlap with the VPC’s CIDR block to avoid conflicts between cluster and VPC network traffic.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4250203771/CAEQUxiBgMDI.MOo4RkiIDA4MDExMmMzOGZmYzRhMTFiMzhjMzk2MDYwNjY4ODFj4553391_20240801095024.466.svg)

### Multiple clusters in a single VPC

You can create multiple clusters in one VPC.

-   The VPC CIDR block is fixed at creation. Each cluster must use non-overlapping CIDR blocks for the VPC, services, and pods.
    
-   Pod CIDR blocks across clusters must not overlap. Service CIDR blocks—virtual networks—may overlap.
    
-   In the default Flannel mode, pod packets route through the VPC. The ACK managed cluster automatically adds routes to each pod CIDR block in the VPC route table.
    

**Note**

In this setup, clusters have partial connectivity. Pods in one cluster can directly access pods and ECS instances in another cluster. However, they cannot access internal services in the other cluster—such as ClusterIP services, which are only accessible inside their own cluster. To expose services, use LoadBalancer services or Ingress.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4250203771/CAEQUxiBgICP9Mio4RkiIDQwOGEwNWU0NjYyYzQxNWRhMDM2MDZmMGY0NDQxYzBm4553391_20240801095024.466.svg)

### Multi-cluster inter-VPC connectivity

Plan inter-VPC connectivity for clusters in the following scenarios.

## Multi-region deployment

A VPC is a regional resource and does not support cross-region deployment. For multi-region systems, use multiple VPCs and clusters. Connect VPCs across regions using [VPC peering connections](/help/en/vpc/vpc-peer-to-peer-connection), [VPN Gateway](/help/en/vpn/product-overview/what-is-vpn-gateway), or [Cloud Enterprise Network (CEN)](/help/en/cen/product-overview/what-is-cen/).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5250203771/CAEQUxiBgMDjlc6o4RkiIDMzMjUwYzkwNmMxYjRlNmViNzdhZDI0MjBiYzEzY2U13794106_20230720103741.872.svg)

## Isolation of multiple business systems

If multiple business systems in one region require strict isolation via VPC—for example, production and staging environments with different security and deployment needs—deploy production and staging clusters in separate VPCs. This provides better logical isolation and security. Connect VPCs in the same region using [VPC peering connections](/help/en/vpc/vpc-peer-to-peer-connection), [VPN Gateway](/help/en/vpn/product-overview/what-is-vpn-gateway), or [Cloud Enterprise Network (CEN)](/help/en/cen/product-overview/what-is-cen/).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5250203771/CAEQUxiBgIChsNGo4RkiIDMzNjhmN2QxMDM2OTQ1NzY5NTkyMWFlNzgxNjg1ZWVm3794106_20230720103741.872.svg)

## Building large-scale business systems

If your architecture is complex and many services and teams need independent VPCs to manage their own clusters and resources, plan multiple VPCs and clusters. This improves flexibility and manageability.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5250203771/CAEQUxiBgMDUpteo4RkiIGI3MGM5NzE2NzA4YzQ1MDliMjRlYjJjNWI1MTFjODMz4537623_20240724152005.068.svg)

**Important**

To avoid routing errors caused by IP conflicts in multi-cluster inter-VPC setups, follow these network planning rules for new clusters:

-   Do not overlap with any VPC CIDR block.
    
-   Do not overlap with any other cluster’s CIDR block.
    
-   Do not overlap with any other cluster’s pod CIDR block.
    
-   Do not overlap with any other cluster’s service CIDR block.
    

### Cloud cluster to on-premises data center connectivity

Similar to [multi-cluster inter-VPC connectivity](#f3c93d46cdn14), some VPC CIDR blocks may route to your on-premises data center (IDC). Pod addresses must not overlap with those routed CIDR blocks. If your IDC needs to access pod addresses, configure routes in the virtual border router (VBR) on the IDC side.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5250203771/CAEQUxiBgMCEqNyo4RkiIGZiZDgxZDU2NzUzNzRlNjdhNWY1YzM3NTk2ODFkYzUy4665263_20240906111922.287.svg)

## Container network plug-in planning

The ACK managed cluster supports two container network interface (CNI) plug-ins: Terway and Flannel. Your choice affects supported features and network configuration. For example, Terway supports NetworkPolicy for policy-based network control, whereas Flannel does not. Terway assigns pod IPs from the VPC, while Flannel uses a virtual CIDR block.

**Important**

You install the container network plug-in when you create the cluster. You cannot change it after cluster creation. Choose the plug-in that matches your network feature requirements.

### Feature planning

**Feature**

**Terway**

**Flannel**

NetworkPolicy (network policy)

Supports [network policies in ACK clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-network-policies).

Not supported.

IPv4/IPv6 dual-stack

Supports [IPv6 Internet bandwidth for pods](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/allocate-ipv6-internet-bandwidth-to-a-pod).

Not supported.

**Note**

ACK uses a modified version of the Flannel plug-in optimized for Alibaba Cloud. It does not track upstream open source changes. For Flannel update history, see [Flannel](/help/en/ack/product-overview/flannel).

Fixed pod IP

Supports [fixed pod IPs with dedicated vSwitches and security groups](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-a-static-ip-address-a-separate-vswitch-and-a-separate-security-group-for-each-pod).

Not supported.

Pod-bound EIP

Supports [attaching dedicated elastic IP addresses (EIPs) to pods](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/associate-an-eip-with-a-pod-1).

Not supported.

Inter-cluster Access

Supported. Pods in different clusters can communicate if their security groups allow the required ports.

Not supported.

For a detailed comparison of Terway and Flannel features, see [Terway vs. Flannel container network plug-ins](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/comparison-between-terway-and-flannel).

### CIDR block planning

## Terway network mode

![terway](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6133809161/p211963.png)

**Terway configuration example**

-   **Terway****Single-zone configuration**
    
    **VPC CIDR block**
    
    **vSwitch CIDR block**
    
    **Pod vSwitch CIDR block**
    
    **Service CIDR block**
    
    **Maximum assignable pod IPs**
    
    192.168.0.0/16
    
    Zone I
    
    192.168.0.0/19
    
    192.168.32.0/19
    
    172.21.0.0/20
    
    8192
    
-   **Terway multi-zone configuration**
    
    **VPC CIDR block**
    
    **vSwitch CIDR block**
    
    **Pod vSwitch CIDR block**
    
    **Service CIDR block**
    
    **Maximum assignable pod IPs**
    
    192.168.0.0/16
    
    Zone I 192.168.0.0/19
    
    192.168.32.0/19
    
    172.21.0.0/20
    
    8192
    
    Zone J 192.168.64.0/19
    
    192.168.96.0/19
    

When configuring Terway, set the following parameters and observe these notes:

-   **Virtual Private Cloud**
    
    -   Use one of these RFC-standard private CIDR blocks—or a subnet—as your VPC’s primary IPv4 CIDR block: 192.168.0.0/16, 172.16.0.0/12, or 10.0.0.0/8. Valid mask lengths range from /8 to /28 (varies by block). Example: `192.168.0.0/16`.
        
        **Note**
        
        To use a public IP range for your VPC CIDR block, request the `ack.white_list/supportVPCWithPublicIPRanges` quota in the [Quota Center](https://quotas.console.alibabacloud.com/white-list-products/csk/quotas).
        
    -   For multi-VPC or hybrid cloud deployments (VPC + on-premises data center), use subnets of RFC-standard private CIDR blocks. Keep the mask length at /16 or shorter. Ensure no CIDR block overlaps between VPCs or between VPCs and your data center.
        
    -   VPCs assign IPv6 CIDR blocks automatically when you enable IPv6. To use IPv6 for containers, choose the Terway plug-in.
        
-   **vSwitch**
    
    vSwitches host ECS instances and handle node-to-node traffic. When you create a vSwitch, its CIDR block must be a subset of the VPC CIDR block (same or smaller, never larger). When configuring:
    
    -   ECS instances in the vSwitch get IPs from this CIDR block. Choose a vSwitch with enough IP addresses.
        
    -   You can create multiple vSwitches in one VPC, but their CIDR blocks must not overlap.
        
    -   The **vSwitch** and its corresponding **pod vSwitch** must be in the same zone.
        
-   **Pod vSwitch**
    
    This vSwitch assigns pod IPs and handles pod traffic. A pod is a Kubernetes concept. Each pod has one IP. When you create the vSwitch, its CIDR block must be a subset of the VPC CIDR block. When configuring:
    
    -   In Terway mode, pods get IPs from this vSwitch CIDR block. Choose a vSwitch with enough IP addresses.
        
    -   This CIDR block must not overlap with the **service CIDR block**.
        
-   **Service CIDR block**
    
    **Important**
    
    You cannot modify the service CIDR block after creation.
    
    In Kubernetes, each Service of type ClusterIP is assigned a unique IP address. When you configure the CIDR block for these addresses, note the following:
    
    -   Service IPs work only inside the Kubernetes cluster. They are not reachable from outside.
        
    -   The service CIDR block must not overlap with the **vSwitch CIDR block**.
        
    -   The service CIDR block must not overlap with the **pod vSwitch CIDR block**.
        
-   **Service IPv6 CIDR block**
    
    After enabling IPv6 dual-stack, configure an IPv6 CIDR block for services. When configuring:
    
    -   Use a Unique Local Address (ULA) in the fc00::/7 range. The prefix length must be between /112 and /120.
        
    -   Match the number of usable addresses in the **service CIDR block**.
        

## Flannel network mode

![Flannel示意图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6133809161/p211964.png)

**Flannel CIDR block configuration example**

**VPC CIDR block**

**vSwitch CIDR block**

**Container CIDR block**

**Service CIDR block**

**Maximum assignable pod IPs**

192.168.0.0/16

192.168.0.0/24

172.20.0.0/16

172.21.0.0/20

65536

When configuring Flannel, set the following parameters and observe these notes:

-   **Virtual Private Cloud**
    
    -   Use one of these RFC-standard private CIDR blocks—or a subnet—as your VPC’s primary IPv4 CIDR block: 192.168.0.0/16, 172.16.0.0/12, or 10.0.0.0/8. Valid mask lengths range from /8 to /28 (varies by block). Example: `192.168.0.0/16`.
        
        **Note**
        
        To use a public IP range for your VPC CIDR block, request the `ack.white_list/supportVPCWithPublicIPRanges` quota in the [Quota Center](https://quotas.console.alibabacloud.com/white-list-products/csk/quotas).
        
    -   For multi-VPC or hybrid cloud deployments (VPC + on-premises data center), use subnets of RFC-standard private CIDR blocks. Keep the mask length at /16 or shorter. Ensure no CIDR block overlaps between VPCs or between VPCs and your data center.
        
    -   VPCs assign IPv6 CIDR blocks automatically when you enable IPv6. To use IPv6 for containers, choose the Terway plug-in.
        
-   **vSwitch**
    
    vSwitches host ECS instances and handle node-to-node traffic. When you create a vSwitch, its CIDR block must be a subset of the VPC CIDR block (same or smaller, never larger). When configuring:
    
    -   ECS instances in the vSwitch get IPs from this CIDR block.
        
    -   You can create multiple vSwitches in one VPC, but their CIDR blocks must not overlap.
        
-   **Container CIDR block**
    
    **Important**
    
    You cannot modify the container CIDR block after creation.
    
    This CIDR block assigns pod IPs and handles pod traffic. A pod is a Kubernetes concept. Each pod has one IP. When configuring:
    
    -   This is a virtual CIDR block—not tied to a vSwitch.
        
    -   This CIDR block must not overlap with the **vSwitch CIDR block**.
        
    -   This CIDR block must not overlap with the **service CIDR block**.
        
    
    For example, if your VPC CIDR block is 172.16.0.0/12, do not use 172.16.0.0/16 or 172.17.0.0/16 for your container CIDR block. These fall within 172.16.0.0/12.
    
-   **Service CIDR block**
    
    **Important**
    
    You cannot modify the service CIDR block after creation.
    
    A service is a Kubernetes concept. The service CIDR block defines the IP range for ClusterIP-type services. Each service gets one IP. When configuring:
    
    -   Service IPs work only inside the Kubernetes cluster. They are not reachable from outside.
        
    -   The service CIDR block must not overlap with the **vSwitch CIDR block**.
        
    -   The service CIDR block must not overlap with the **container CIDR block**.
        

## References

-   Related planning topics:
    
    -   After you use a VPC secondary CIDR block or expand to a new zone for your ACK managed cluster[use VPC secondary CIDR blocks](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-a-vswitch-to-a-cluster-based-on-a-secondary-cidr-block), you must configure corresponding network rules to ensure that services in the new CIDR block operate normally. For example, configure SNAT rules on a NAT Gateway to allow access to Internet resources, such as image pulling, from the new CIDR block, and configure appropriate access rules in the security group.
        
    -   As your business grows, plan a unified account structure to support permission isolation and workload isolation. See [Account planning](/help/en/vpc/vpc-network-planning#a199f7077fj2h).
        
    -   Plan security capabilities by combining network connectivity scenarios and security layers. See [Security capability planning](/help/en/vpc/vpc-network-planning#8c802b37717l5).
        
    -   Plan disaster recovery capabilities based on your business architecture to protect data and ensure continuity. See [Disaster recovery capability planning](/help/en/vpc/vpc-network-planning#2ae807b5b32in).
        
-   Cluster network connectivity:
    
    -   Expose your ACK managed cluster API server to the Internet using an Elastic IP Address (EIP). See [Access the API server from the Internet](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/control-public-access-to-the-api-server-of-a-cluster).
        
    -   If cluster services need to access external Internet resources—such as pulling public images or updating dependency libraries—configure an SNAT gateway for outbound access. See [Enable outbound Internet access for the cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/enable-an-existing-ack-cluster-to-access-the-internet).
        
-   For common network issues with ACK managed clusters, see [Network management FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-network-management#task-1545837).
