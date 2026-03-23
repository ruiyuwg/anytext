Terway is an open source Container Network Interface (CNI) plug-in developed by Alibaba Cloud. Terway integrates with Virtual Private Cloud (VPC) and lets you use standard Kubernetes network policies to control communication between containers.

## **Before you begin**

Before you use the Terway network plug-in, read this topic to better understand how Terway works.

Before you read this topic, review [Networking overview](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/network/) and [Comparison between Terway and Flannel](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/comparison-between-terway-and-flannel) to learn the basic concepts of container network plug-ins and help you select a plug-in.

Plan the CIDR blocks for your cluster before you create it. For more information, see [ACK managed cluster network planning](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/kubernetes-cluster-network-planning).

## **Billing**

Terway is free of charge. However, Terway pods are deployed on each node and consume a small amount of node resources. For more information about the billing of Alibaba Cloud services that are used by ACK, see [Cloud resource fees](/help/en/ack/ack-managed-and-ack-dedicated/product-overview/billing-of-cloud-services#table-gz7-ea0-ocw).

## **Important notes**

The Terway configuration file `eni-config` contains many system parameters. Do not modify or delete unsupported fields. Otherwise, network interruptions may occur or pods may fail to be created. For a list of configuration parameters that you can modify, see [Custom Terway configuration parameters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/terway-configuration-parameters).

Terway components use Custom Resource Definitions (CRDs) to track resource status. If you accidentally modify system resources, network interruptions may occur or pod creation may fail.

**Resource name**

**Resource type**

**Can users manage the CRD?**

**Can users manage the CR?**

podnetworkings.network.alibabacloud.com

User resource

No

Yes

podenis.network.alibabacloud.com

System resource

No

No

networkinterfaces.network.alibabacloud.com

System resource

No

No

nodes.network.alibabacloud.com

System resource

No

No

noderuntimes.network.alibabacloud.com

System resource

No

No

\*.cilium.io

System resource

No

No

\*.crd.projectcalico.org

System resource

No

No

## **How to calculate the maximum number of pods per node**

When you use the Terway network plug-in, the maximum number of pods per node depends on the number of Elastic Network Interfaces (ENIs) that the Elastic Compute Service (ECS) instance type supports. Terway sets a minimum limit on the number of pods per node. A node must meet this limit to successfully join a cluster. For more information, see the following table.

**Terway mode**

**Maximum number of pods per node**

**Example**

**Maximum number of pods per node that support static IP addresses, separate vSwitches, and separate security groups**

Shared ENI mode

([Number of ENIs supported by the ECS instance type](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb) - 1) × Number of private IP addresses supported by an ENI.

(EniQuantity - 1) × EniPrivateIpAddressQuantity

**Note**

A node can join a cluster only if the maximum number of pods per node is greater than 11.

For example, the general-purpose ecs.g7.4xlarge instance type supports 8 ENIs, and each ENI supports 30 private IP addresses. The maximum number of pods per node is (8 - 1) × 30 = 210.

**Important**

The maximum number of pods that can use ENIs on a node is a fixed value determined by the instance type. Modifying the `maxPods` parameter affects only the maximum number of pods that use the `hostNetwork` mode.

0

Shared ENI + Trunk ENI

Single-node Trunk Pod quota:

Total number of network interfaces supported by the ECS instance type - Number of ENIs supported by the ECS instance type.

EniTotalQuantity - EniQuantity

Exclusive ENI mode

ECS instances:

[Number of ENIs supported by the ECS instance type](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb) - 1.

EniQuantity - 1

Lingjun instances:

[Create and manage Lingjun ENIs](/help/en/pai/user-guide/create-and-manage-lingjun-enis) - 1.

LeniQuota - 1

**Note**

A node can join a cluster only if the maximum number of pods per node is greater than 6.

For example, the general-purpose ecs.g7.4xlarge instance type supports 8 ENIs. The maximum number of pods per node is (8 - 1) = 7.

[Number of ENIs supported by the ECS instance type](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb) - 1.

EniQuantity - 1

**Note**

Lingjun instances are not supported.

**Important**

In Terway v1.11.0 and later versions, you can configure node pools to run in exclusive ENI mode or shared ENI mode. Both types of node pools can exist in the same cluster. For more information, see [Terway release notes](/help/en/ack/product-overview/terway).

### **View the maximum number of pods supported by a node**

-   Method 1: When you create a node pool in the ACK console, you can find the maximum number of pods that an instance type supports in the **Instance type** section, under **Terway compatibility (supported pods)**.
    
-   Method 2: Obtain the required data and then manually calculate the maximum number of pods that an ECS instance type supports.
    
    -   Check the [Instance family overview](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb) to find the number of ENIs that the instance type supports.
        
    -   You can query the information using [OpenAPI Explorer](https://next.api.aliyun.com/api/Ecs/2014-05-26/DescribeInstanceTypes?lang=JAVA&params=%7B%22InstanceTypes%22:%5B%22ecs.c1.large%22%5D%7D&tab=DOC). Specify the instance type of an existing node in the `InstanceTypes` parameter and click **Initiate call**. In the response, `EniQuantity` indicates the maximum number of ENIs that the instance type supports. `EniPrivateIpAddressQuantity` indicates the number of private IP addresses that each ENI supports. `EniTotalQuantity` indicates the total number of network interfaces that the instance type supports.
        

## **Install Terway when you create a cluster**

You can select Terway as the network plug-in only when you create a cluster. You cannot change the plug-in after the cluster is created.

1.  Log on to the [Container Service Management Console](https://cs.console.alibabacloud.com) . In the navigation pane on the left, click **Clusters**.
    
2.  On the **Clusters** page, click **Create Kubernetes Cluster**.
    
3.  Configure the key network parameters for Terway. For more information about other cluster parameters, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/#task-skz-qwk-qfb).
    
    **configuration item**
    
    **Description**
    
    **IPv6 Dual-stack**
    
    Select **Enable** to create a dual-stack cluster that supports IPv4 and IPv6.
    
    > Supported only for Kubernetes 1.22 or later, only with Terway, and cannot be used together with [eRDMA](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-erdma-in-ack-clusters).
    
    The cluster supports both IPv4 and IPv6 protocols, but communication between worker nodes and the control plane still uses IPv4 addresses. Ensure the following:
    
    -   The cluster VPC supports IPv6 dual-stack.
        
    -   When using Terway in shared ENI mode, the [instance type](/help/en/ecs/user-guide/overview-of-instance-families#undefined) of the node must support IPv6 and have the same number of assignable IPv4 and IPv6 addresses.
        
    
    **VPC**
    
    The VPC used by the cluster.
    
    **Network Plug-in**
    
    Select **Terway**.
    
    **DataPath V2**
    
    Select this option to enable DataPath V2 acceleration. After enabling DataPath V2, Terway uses a traffic forwarding path different from the standard shared ENI mode to improve network performance. For more information about features, see [Network acceleration](#0240fff858j64).
    
    **Note**
    
    -   For new clusters with Kubernetes 1.34 or later and DataPath V2 enabled, kube-proxy no longer runs on Terway nodes.
        
        -   This mode includes built-in support for portmap, eliminating the need to configure the portmap plug-in. See [Configure a custom CNI chain](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/custom-cni-chain).
            
    -   DataPath V2 supports only the following operating system images and requires Linux kernel version 5.10 or later:
        
        -   Alibaba Cloud Linux 3 (all versions)
            
        -   ContainerOS
            
        -   Ubuntu
            
    -   When enabled, the Terway policy container consumes an additional 0.5 cores and 512 MB of resources on each worker node. This resource consumption increases as the cluster size grows. In the default Terway configuration, the policy container has a CPU limit of 1 core and no memory limit.
        
    -   In DataPath V2 mode, connection tracking (conntrack) data for container networks is stored in eBPF maps. Similar to Linux's native conntrack mechanism, eBPF conntrack implements Least Recently Used (LRU) eviction. When map capacity is reached, the oldest connections are automatically evicted to store new ones. Configure parameters based on your workload scale to prevent exceeding connection limits. For details, see [Optimize conntrack configurations in Terway](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/optimize-conntrack-configuration-in-terway-mode).
        
    
    **Support for NetworkPolicy**
    
    Select this option to enable Kubernetes-native `NetworkPolicy`.
    
    **Note**
    
    -   Starting with Terway v1.9.2, NetworkPolicies for new clusters are implemented using extended Berkeley Packet Filter (eBPF). DataPath V2 is also enabled in the data plane.
        
    -   The feature that lets you manage `NetworkPolicy` using the console is in public preview. To use this feature, you must submit an application in the [Quota Center console](https://quotas.console.alibabacloud.com/white-list-products/csk/quotas).
        
    
    **Support for ENI trunking**
    
    Select this option to enable ENI trunking. You can assign a static IP address, a separate vSwitch, and a separate security group to each pod.
    
    **Note**
    
    -   You can select ENI trunking for an ACK managed cluster without submitting an application. To enable ENI trunking for an ACK dedicated cluster, you must submit an application in the [Quota Center console](https://quotas.console.alibabacloud.com/white-list-products/csk/quotas).
        
    -   For new ACK managed clusters with Kubernetes 1.31 or later, ENI trunking is enabled by default.
        
    
    **vSwitch**
    
    The CIDR block of the vSwitch used by cluster nodes. Select at least three vSwitches across different zones to ensure high cluster availability.
    
    **Pod vSwitch**
    
    The CIDR block of the vSwitch used by pods. This block can overlap with the vSwitch CIDR block used by nodes.
    
    **Service CIDR**
    
    The CIDR block used by Services. This block must not overlap with the node or pod CIDR blocks.
    
    **IPv6 Service CIDR**
    
    Configure this after enabling IPv6 dual-stack.
    

## **Terway modes**

Review the following sections to learn about the differences between Terway modes and how they work.

### **Shared ENI mode and exclusive ENI mode**

When assigning IP addresses to pods, Terway operates in one of two modes: **Shared ENI mode** or **Exclusive ENI mode**.

**Important**

-   In Terway v1.11.0 and later versions, you can configure individual node pools to run in shared ENI mode or exclusive ENI mode. This selection is no longer available during cluster creation.
    
-   The primary ENI on the node is allocated to the node OS. The remaining ENIs are managed by Terway to configure the pod network. Do not manually configure these ENIs. For more information about how to manage ENIs, see [Configure a filter for ENIs](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-a-whitelist-for-an-eni).
    

**Comparison item**

**Shared ENI mode**

**Exclusive ENI mode**

Pod IP address management

ENI allocation

Multiple pods share an ENI.

Each pod is assigned a dedicated ENI on the node.

Pod density

Pods can be deployed with high density because a single node can support hundreds of pods.

Low. A standard instance type supports only a single-digit number of pods.

Network architecture

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8946772771/CAEQTxiBgIDm_eWN2BkiIDYwNDQ2MjhlMTJkZTRhZGRiMmUxMTNkNWRjZTVjODNl4510372_20240703110536.235.svg)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8946772771/CAEQTxiBgIDcr4KO2BkiIGJhYTAyMjhlOWRlZTRlMmY4ZDU5ZjcyOTM4ODQzOGVm4098345_20231201145536.954.svg)

Data link

When a pod accesses another pod or serves as a backend for a Service, traffic passes through the network protocol stack of the node.

When a pod accesses a Service, traffic passes through the protocol stack of the node OS. However, when a pod accesses another pod or serves as a backend for a Service, the attached ENI bypasses the network protocol stack of the node for higher performance.

Use cases

Suitable for common Kubernetes use cases.

Provides network performance similar to that of traditional virtual machines. This mode is suitable for applications that require high network throughput or low latency.

Network acceleration

DataPath V2 network acceleration is supported. For more information, see [Network acceleration](#0240fff858j64).

Network acceleration is not supported. However, exclusive ENI resources provide excellent network performance.

Support for NetworkPolicy

Kubernetes-native `NetworkPolicy` is supported. This provides policy-based access control. For more information, see [Support for NetworkPolicy](#623b5fa98bs23).

`NetworkPolicy` is not supported.

Node-level network configuration

Supported. See [Node-level network configuration](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-network-settings-for-individual-nodes-in-a-terway-cluster).

Supported. See [Node-level network configuration](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-network-settings-for-individual-nodes-in-a-terway-cluster).

Access control

If ENI trunking is enabled, you can assign static IP addresses, separate security groups, and separate vSwitches to pods. For more information, see [Configure a static IP address, a separate vSwitch, and a separate security group for a pod](#9b147d2c6530x).

You can assign static IP addresses, separate security groups, and separate vSwitches to pods.

### **Network acceleration**

If you use the Terway shared ENI mode, you can enable network acceleration. After you enable network acceleration, Terway uses a traffic forwarding path that is different from the standard shared ENI mode to achieve higher performance. Terway currently supports DataPath V2 acceleration. For more information, see the following description.

**Important**

-   DataPath V2 is an upgraded version of the earlier IPVLAN + eBPF acceleration mode. When you create a cluster with Terway 1.8.0 or later, only DataPath V2 is supported.
    
-   The DataPath V2 and IPVLAN + eBPF acceleration modes apply only to node pools that run in shared ENI mode. They do not affect node pools that run in exclusive ENI mode.
    

**DataPath V2 feature**

**Description**

Applicable Terway version

Clusters created with Terway 1.8.0 or later.

Network architecture

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8946772771/CAEQTxiBgIC.14GO2BkiIGNiN2YwODU5ZTJiMzQwODA5YWU0ODRhNDU4NzEwZmUx4510372_20240703110934.293.svg)

Accelerated data link

-   When a pod accesses a Service, eBPF resolves the Service address to the address of a backend pod.
    
-   When a pod accesses a pod on another node, eBPF bypasses the network protocol stacks of both nodes.
    
-   When a pod accesses another pod on the same node, the node protocol stack is bypassed and traffic is forwarded internally.
    

Performance optimization

-   The pod network forwarding process on the host is simplified. Pod network performance is nearly identical to host network performance, and latency is reduced by 30% compared to the standard mode.
    
-   Service networking uses eBPF instead of the kube-proxy mode. Traffic bypasses iptables or IPVS on the host, greatly reducing request latency. Network performance is less affected in large-scale clusters, and scalability improves.
    
-   Pod network policies (`NetworkPolicy`) use eBPF instead of iptables. This avoids generating large numbers of iptables rules on the host and reduces the impact of network policies on network performance.
    

Usage method

When creating a cluster, set **Network Plug-in** to **Terway** and select **DataPath V2**.

Usage notes

-   Kernel version ≥ 5.10. Alibaba Cloud Linux OS images are recommended.
    
-   Sandboxed container runtime is not yet supported.
    
-   Limitations for network policies (`NetworkPolicy`):
    
    -   CIDR selectors do not support pod CIDR block control. To control pod access, use pod label selectors.
        
    -   The except keyword in CIDR selectors is not fully supported. Avoid using it.
        
    -   Using Egress-type `NetworkPolicy` prevents access to pods in the host network and to node IP addresses in the cluster.
        
-   Cluster-internal access to SLB instances associated with LoadBalancer Services may cause loopback issues and connectivity failures. For more information, see [Why am I unable to access an SLB instance?](/help/en/slb/why-am-i-unable-to-access-an-slb-instance#concept-wzy-kyc-xdb)
    
-   IPv6 hairpin access is not supported.
    
-   NodePort limitations:
    
    -   If you access a service with `ExternalTrafficPolicy=Local`, traffic may fail. Set `ExternalTrafficPolicy=Cluster` instead.
        
    -   When using `ExternalTrafficPolicy=Cluster`, SNAT is applied to the source address. Available port range is **32768–65535**.
        

In older clusters, you may have selected the IPVLAN + eBPF acceleration mode. For more information, see the following description.

**IPVLAN + eBPF acceleration mode**

**IPVLAN + eBPF feature**

**Description**

Applicable Terway version

Clusters created with Terway 1.7.0 or earlier.

Network architecture

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8946772771/CAEQTxiBgICQvZOO2BkiIGQ1YWQwMTc4MDU3ZTRlZjViYjU3NWMwNjMyOGYzMmJh4510372_20240703111004.296.svg)

Accelerated data link

-   When a pod accesses a Service, eBPF resolves the Service address to the address of a backend pod within the pod's network namespace.
    
-   When a pod accesses another pod, IPVLAN bypasses the network protocol stacks of both nodes.
    

Usage method

When creating a cluster, set **Network Plug-in** to **Terway** and select **Pod IPVLAN**.

### **Access control**

The Terway shared ENI mode supports fine-grained network traffic management in clusters using `NetworkPolicy` and ENI trunking. The Terway exclusive ENI mode also supports some traffic control capabilities.

## Support for NetworkPolicy

-   Node pools that run in Terway exclusive ENI mode do not support `NetworkPolicy`.
    
-   Node pools that run in Terway shared ENI mode support Kubernetes-native `NetworkPolicy`. You can define rules to control network traffic between pods.
    
    When you create a cluster, set **Network Plug-in** to **Terway** and select **Support for NetworkPolicy** to enable `NetworkPolicy`. For more information, see [Use network policies in ACK clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-network-policies).
    
    **Note**
    
    The feature that lets you manage `NetworkPolicy` using the console is in public preview. To use this feature, you must submit an application in the [Quota Center console](https://quotas.console.alibabacloud.com/white-list-products/csk/quotas).
    

## Configure a static IP address, a separate vSwitch, and a separate security group for a pod

-   Node pools that run in Terway exclusive ENI mode support the assignment of static IP addresses, separate vSwitches, and separate security groups to each pod. This enables fine-grained traffic management, traffic isolation, network policy configuration, and IP address management.
    
-   ENI trunking is an option for node pools that run in Terway shared ENI mode. If ENI trunking is enabled, you can assign static IP addresses, separate vSwitches, and separate security groups to each pod.
    
    When you create a cluster, set **Network Plug-in** to **Terway** and select **Support for ENI trunking**. For more information, see [Configure a fixed IP address, a separate vSwitch, and a separate security group for a pod](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-a-static-ip-address-a-separate-vswitch-and-a-separate-security-group-for-each-pod).
    
    **Note**
    
    -   You can select ENI trunking for an ACK managed cluster without submitting an application. To enable ENI trunking for an ACK dedicated cluster, you must submit an application in the [Quota Center console](https://quotas.console.alibabacloud.com/white-list-products/csk/quotas).
        
    -   For new ACK managed clusters with Kubernetes 1.31 or later, ENI trunking is enabled by default.
        
    -   After you enable ENI trunking, the terway-eniip and terway-controlplane components are installed.
        
    

## **Scale limits**

Terway manages node network interfaces and IP addresses by calling cloud product OpenAPIs. For information about OpenAPI usage limits, see the documentation of the corresponding cloud product.

-   **Shared ENI mode:** The maximum number of nodes that can be allocated in parallel is 500.
    
-   **Exclusive ENI/Trunk ENI mode:** The maximum number of pods that can be allocated in parallel is 100.
    

> These quotas cannot be adjusted.

## **Data plane configuration requirements**

The network functionality of Terway relies heavily on the precise order and integrity of kernel-level configurations. Uncoordinated modifications to `IP Rule`, `IP Route`, or `eBPF` hooks by external components, such as priority changes, rule overrides, or program unloads, may cause severe failures, such as pod network outages, policy failures, or traffic hijacking. You must strictly validate all third-party component integrations to avoid conflicts.

### **TC filter rules**

**Interface**

**Direction**

**Program**

**Priority**

**Function**

ethx

toContainer

VLAN Untag

20000

Remove VLAN tag

ethx

toContainer

cil\_from\_netdev

25000

Cilium service/network policy

veth

toContainer

cil\_to\_container

25000

Cilium service/network policy

veth

fromContainer

cil\_from\_container

25000

Cilium service/network policy

ethx

fromContainer

cil\_to\_netdev

25000

Cilium service/network policy

ethx

fromContainer

VLAN Tag

50001

Add VLAN tag

### **IP Rule rules**

**Direction**

**Priority**

**Routing table**

toContainer

512

1000 + linkIndex (eni index)

fromContainer

512

1000 + linkIndex (eni index)

## **FAQ**

### **How do I determine whether Terway is in exclusive ENI mode or shared ENI mode?**

-   In Terway v1.11.0 and later, the shared ENI mode is used by default. To enable the exclusive ENI mode, see [Configure the exclusive ENI network mode for a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-a-node-pool-level-container-network).
    
-   In Terway v1.11.0 and earlier, you can select the exclusive ENI mode or shared ENI mode during cluster creation. After the cluster is created, you can use the following methods to identify the mode:
    
    -   Exclusive ENI mode: In the kube-system namespace, the name of the Terway DaemonSet is `terway-eni`.
        
    -   Shared ENI mode: In the kube-system namespace, the name of the Terway DaemonSet is `terway-eniip`.
        

### **Can I change the CNI plug-in for an existing ACK cluster?**

The network plugin is a fundamental component selected during cluster creation. To switch plugins, you must create a new cluster with the desired CNI plugin and migrate your workloads.

## References

-   For the release notes of the Terway plug-in, see [Terway](/help/en/ack/product-overview/terway).
    
-   For more information about how to troubleshoot container networking issues, see [Container networking FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks).
    
-   In a Terway network, if the IP addresses in a vSwitch are insufficient or you need to add vSwitches for pod CIDR blocks, you must expand the vSwitches. For more information, see [Modify pod vSwitches](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/increase-pod-vswitches-in-a-terway-cluster).
