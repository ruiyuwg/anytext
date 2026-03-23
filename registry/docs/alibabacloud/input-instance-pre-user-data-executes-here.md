This topic describes the configurations for creating an ACK managed cluster in the console. It includes descriptions of configuration items, configuration recommendations, and associated cloud resources.

-   In the **Modifiable after creation** column of the tables, ✓ indicates that the item can be modified after creation, and ✗ indicates that it cannot. Pay close attention to items that cannot be modified.
    
-   Icons and names of cloud resources in the tables, such as ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6025825571/p991664.png)[ECS instance](/help/en/ecs/instance-types), indicate that enabling the configuration will create or use other Alibaba Cloud resources. You can click the resource name to view the billing information for the corresponding product.
    

## Cluster configuration

This section defines the global properties of the cluster, including its version and network configuration. The network configuration defines the underlying communication architecture of the cluster. Some options cannot be changed after creation, so plan carefully.

### Basic configuration

**Configuration item**

**Description**

**Is modification supported?**

**Cluster Name**

Enter a custom cluster name.

✓

**Cluster Specification**

-   Pro Edition: Provides an SLA guarantee and is suitable for enterprise production and testing environments.
    
-   Basic Edition: Has [quotas](/help/en/ack/product-overview/limits#b5010e1088jx9) (each account can create up to two clusters) and is intended only for personal learning and testing.
    

For a detailed comparison, see [Cluster editions](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ack-cluster-overview/).

✓

> Only supports [migrating from Basic Edition to Pro Edition](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/hot-migration-from-ack-standard-clusters-to-ack-pro-clusters)

**Region**

The [region](/help/en/ack/product-overview/supported-regions) where cluster resources (such as ECS instances and cloud disks) are located. The closer the region is to your location and where your resources are deployed, the lower the network latency.

✗

**Kubernetes Version**

Only the latest three [minor versions](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/support-for-kubernetes-versions/#ce8619cc23hhi) are supported. We recommend using the latest available version. For details about ACK version support, see [ACK version support overview](/help/en/ack/product-overview/release-notes-for-kubernetes-versions).

✓

> Supports [manual cluster upgrade](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster) and [automatic cluster upgrade](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/automatically-upgrade-an-ack-cluster)

**Automatic Update**

Enable automatic upgrades to keep the control plane and node pools periodically updated.

> For upgrade policies and instructions, see [Automatically upgrade clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/automatically-upgrade-an-ack-cluster).

✓

**Maintenance Window**

ACK performs automated O&M tasks—such as automatic cluster upgrades and OS CVE vulnerability fixes—only during the defined maintenance window.

✓

> For clarity, the order of the configuration items in the following table may differ slightly from the order in the console.

### **Define Cluster Network Boundary and High Availability (HA) Foundation**

In this section, you define the virtual private cloud (VPC), vSwitches, and security groups to determine the network boundary, high availability, and basic security access policies for the cluster.

**Configuration item**

**Description**

**Can I make modifications?**

**VPC**

The VPC for the cluster. To ensure high availability, we recommend selecting two or more zones.

-   Auto-create: ACK creates a vSwitch in each selected zone.
    
-   Use existing: Select a vSwitch to specify the cluster zone. You can create a new vSwitch or use an existing one.
    

> We recommend using standard private CIDR blocks for the cluster VPC (for example, 10.0.0.0/8, 172.16.0.0/12, or 192.168.0.0/16). If you have special requirements, apply at the [Quota Center](https://quotas.console.alibabacloud.com/white-list-products/csk/quotas) (**Create a cluster using a public CIDR block VPC**).

Cloud resource and billing information: ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1521963671/p991644.png)[VPC](/help/en/vpc/what-is-vpc)

✗

**Security Group**

> When using an existing VPC, you can select **Select Existing Security Group**

This [security group](/help/en/ecs/user-guide/overview-44#concept-o2y-mqw-ydb) applies to the cluster control plane, default node pool, and any node pool without a custom security group.

Compared with basic security groups, enterprise security groups can accommodate a larger number of private IP addresses but do not support intra-group connectivity. For more information, see [Security Group Classification](/help/en/ecs/user-guide/overview-44#069b0be914b2n).

-   Auto-create: All outbound traffic is allowed by default. Inbound rules follow [recommended configurations](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-security-group-rules-to-enforce-access-control-on-ack-clusters#task-2143626). If you modify rules later, ensure inbound access to the `100.64.0.0/10` CIDR block is allowed.
    
    > This CIDR block is used to access other Alibaba Cloud services for operations such as image pulling and querying ECS basic information.
    
-   Use existing: ACK does not add extra access rules to the security group. You must manage security group rules yourself to avoid access issues. For details, see [Configure cluster security groups](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-security-group-rules-to-enforce-access-control-on-ack-clusters#task-2143626).
    

✓

### **Select the pod network model and address planning**

In this section, you configure the container network plugin (CNI). The CNI affects network performance, available features such as NetworkPolicy, and the way IP addresses are managed. You must then plan the communication rules and address system for applications (pods) and Services within the cluster.

We recommend that you plan the network CIDR blocks for your cluster in advance. For more information, see [Network planning for ACK managed clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/kubernetes-cluster-network-planning#concept-izq-sg4-vdb).

**Configuration item**

**Description**

**Is modification supported?**

**Network Plug-in**

The network plugin provides the foundation for pod-to-pod communication in the cluster.

> For a detailed comparison, see [Compare Terway and Flannel container network plugins](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/comparison-between-terway-and-flannel).

-   **Flannel**: A lightweight, open-source community network plugin. In ACK, it integrates deeply with Alibaba Cloud VPC and uses direct VPC route table management for pod communication.
    
    -   Use case: Simple configuration and low resource consumption. Suitable for small-scale clusters (limited by VPC route table quotas), simplified networking, and scenarios that do not require custom container network control.
        
-   **Terway**: A high-performance network plugin developed by Alibaba Cloud that uses Elastic Network Interfaces (ENIs) for pod communication.
    
    -   Use case: Offers eBPF-based network acceleration, NetworkPolicy, and per-pod vSwitch and security group capabilities. Ideal for high-performance computing, gaming, microservices, and other scenarios requiring large-scale nodes, high network performance, and strong security.
        
    -   Pod limit: Each pod consumes one secondary IP address from an ENI. The number of IPs per ENI is limited (depending on the [instance type](/help/en/ecs/user-guide/overview-of-instance-families)). Therefore, the maximum number of pods per node is constrained by ENI and secondary IP quotas.
        
        > When using a shared VPC, only Terway is supported.
        
    
    Terway also provides the following capabilities.
    
    > For details, see [Use the Terway network plugin](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-terway).
    
    -   **DataPathV2**
        
        > Configurable only during cluster creation.
        
        Enable DataPathV2 acceleration mode. Terway uses eBPF technology to optimize traffic forwarding paths, delivering lower latency and higher throughput for network-intensive applications.
        
        Supported only on Alibaba Cloud Linux 3 (all versions), ContainerOS, and Ubuntu with Linux kernel version 5.10 or later. For details, see [Network acceleration](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-terway#0240fff858j64).
        
    -   **NetworkPolicy support**
        
        > In public preview. Apply on the [Quota Center console](https://quotas.console.alibabacloud.com/white-list-products/csk/quotas).
        
        Supports native Kubernetes `NetworkPolicy` to implement pod-level "firewalls" and fine-grained access control rules, enhancing cluster security.
        
    -   **Support for ENI Trunking**
        
        Allows assigning dedicated IPs, vSwitches, and security groups to pods. Suitable for special business scenarios requiring fixed IPs or independent network policy management for specific pods. For details, see [Assign fixed IPs, dedicated vSwitches, and security groups to pods](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-a-static-ip-address-a-separate-vswitch-and-a-separate-security-group-for-each-pod#task-2236831).
        
    

✗

**Container CIDR Block**

> Required only for Flannel.

The IP address pool for assigning pod IPs. This CIDR block must not overlap with the VPC or any existing ACK cluster CIDR blocks in the VPC, and must not overlap with the **Service CIDR**.

✗

**Number of Pods per Node**

> Required only for Flannel.

Defines the maximum number of pods allowed on a single node.

✗

**Pod vSwitch**

> Required only when using the Terway plugin.

The vSwitch used to assign IP addresses to pods. Each pod vSwitch corresponds to a worker node vSwitch, and both must be in the same zone.

**Important**

For the Pod virtual switch, use a subnet mask no larger than /19. The maximum allowed subnet mask is /25. If you use a larger subnet mask, the number of Pod IP addresses that can be allocated in the cluster is severely limited, which affects the cluster’s normal operation.

✓

**Service CIDR**

Also known as Service CIDR, this is the IP address pool for assigning IPs to internal cluster services. This CIDR block must not overlap with the VPC or any existing cluster CIDR blocks in the VPC, and must not overlap with the **Container CIDR Block**.

✗

**IPv6 Dual-stack**

> Supported only for Kubernetes 1.22 or later, only with Terway, and cannot be used together with [eRDMA](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-erdma-in-ack-clusters).

The cluster supports both IPv4 and IPv6 protocols, but communication between worker nodes and the control plane still uses IPv4 addresses. Ensure the following:

-   The cluster VPC supports IPv6 dual-stack.
    
-   When using Terway in shared ENI mode, the [instance type](/help/en/ecs/user-guide/overview-of-instance-families#undefined) of the node must support IPv6 and have the same number of assignable IPv4 and IPv6 addresses.
    

✗

**IPv6 Service CIDR Block**

> Requires IPv6 dual-stack to be enabled.

Configure an IPv6 address range for the Service CIDR block. Use a ULA address (within the `fc00::/7` range) with a prefix length between /112 and /120. We recommend matching the number of available addresses to that of the **Service CIDR**.

✗

**Forwarding Mode**

Select the kube-proxy proxy mode, which determines how cluster Services distribute requests to backend pods.

-   iptables: Uses Linux firewall rules for traffic forwarding. Stable but limited in performance. As the number of Services increases, firewall rules grow exponentially, slowing request processing. Suitable for clusters with few Services.
    
-   IPVS: A high-performance traffic distribution solution that uses hash tables for fast pod targeting, delivering lower latency under heavy Service loads. Suitable for large-scale production clusters or scenarios requiring high network performance.
    

✗

### **Configure cluster public network ingress and egress**

This step defines the bidirectional communication between the cluster and the Internet. This includes the public ingress for cluster management (how to manage the cluster from the Internet using the API server) and the public egress for the cluster (how nodes and applications in the cluster access the Internet, for example, to pull public images). It also covers how to configure the service forwarding mechanism.

**Configuration item**

**Description**

**Is modification supported?**

**Configure SNAT for VPC**

> Do not select this option when using a shared VPC.

Select this option if nodes need public network access (to pull public images or access external services). ACK automatically configures a NAT Gateway and SNAT rules to enable public network access for cluster resources.

-   VPC has no NAT Gateway: ACK automatically creates a NAT Gateway, purchases a new EIP, and configures SNAT rules for the cluster's vSwitches.
    
-   VPC already has a NAT Gateway: ACK determines whether to purchase additional EIPs or configure SNAT rules. If no EIP is available, a new EIP is purchased. If no VPC-level SNAT rule exists, SNAT rules are configured for the cluster's vSwitches.
    

If you do not select this option, you can manually configure a NAT Gateway and SNAT rules after cluster creation. For details, see [Public NAT Gateway](/help/en/nat-gateway/user-guide/use-internet-nat-gateway-for-public-network-access#task-491095).

Cloud resource and billing information: ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1521963671/p991647.png)[NAT Gateway](/help/en/nat-gateway/nat-gateway-billing#concept-z13-hty-ydb), ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1521963671/p991655.png)[EIP](/help/en/eip/billing-overview)

✓

**Access to API Server**

ACK automatically creates a pay-as-you-go private CLB instance as the internal endpoint for the API Server. This CLB instance cannot be reused or deleted. If deleted, the API Server becomes inaccessible and cannot be restored.

> To use an existing CLB instance, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm). After selecting **Use Existing Gateway** for the **VPC**, you can set the **SLB Source** to **Use Existing Gateway**.

You can optionally enable **Expose API server with EIP**.

-   Enabled: Binds an EIP to the private CLB instance of the API Server, allowing public network access to manage the cluster.
    
    > This does not grant public network access to resources inside the cluster. To allow cluster resources to access the public network, select **Configure SNAT for VPC**.
    
-   Disabled: Allows cluster connection and management via KubeConfig only from within the VPC.
    

> To enable this later, see [Enable public network access to API Server](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/control-public-access-to-the-api-server-of-a-cluster).

> Starting December 1, 2024, newly created CLB instances will incur instance fees. For details, see [Adjustment announcement for Classic Load Balancer CLB billing items](/help/en/slb/product-overview/announcement-on-adjustment-of-traditional-load-balancing-clb-billing-items).

Cloud resource and billing information: ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2521963671/p991652.png)[CLB](/help/en/slb/classic-load-balancer/product-overview/billing-overview/), ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1521963671/p991655.png)[EIP](/help/en/eip/billing-overview)

✗

### Advanced configuration

Expand **Advanced Options (Optional)** to configure cluster deletion protection, resource group, and additional settings.

**Configuration item**

**Description**

**Can it be modified?**

**Cluster Deletion Protection**

We recommend enabling this to prevent accidental cluster deletion via the console or OpenAPI.

✓

**Resource Group**

Assign the cluster to the selected [resource group](/help/en/ecs/user-guide/resource-groups#concept-fdn-wtm-cgb) for easier permission management and cost allocation.

> A resource can belong to only one resource group.

✓

**Label**

Bind key-value [tags](/help/en/resource-management/tag/product-overview/tag-overview) to the cluster as cloud resource identifiers.

✓

**Time Zone**

The [time zone](/help/en/ack/product-overview/supported-time-zones) used by the cluster. Defaults to the browser's configured time zone.

✓

**Cluster Domain**

The top-level domain (standard suffix) used by Services in the cluster. Defaults to `cluster.local` but supports custom domains. For considerations when using a custom local domain, see [What should I consider when configuring a custom cluster local domain (ClusterDomain)?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#6f1f2d87f3nh2).

> For example, a Service named my-service in the default namespace has the DNS domain name `my-service.default.svc.cluster.local`.

✗

**Custom Certificate SANs**

By default, the SAN (Subject Alternative Name) field in the API Server certificate includes the cluster local domain, private IP, public EIP, and other fields. To access the cluster through a proxy server, custom domain, or special network environment, add those access addresses to the SAN field.

> To enable this later, see [Customize the cluster API Server certificate SAN](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/customize-the-san-of-the-api-server-certificate-when-you-create-an-ack-cluster#task-2064726).

✓

**Service Account Token Volume Projection**

In traditional mode, pod identity credentials are permanently valid and shared among multiple pods, posing a security risk. When enabled, each pod receives its own temporary identity credentials with configurable expiration and permission limits.

> To enable this later, see [Use ServiceAccount Token volume projection](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/enable-service-account-token-volume-projection#task-2460323).

✗

**Secret Encryption**

> Supported only for Pro Edition clusters.

Uses keys created in Alibaba Cloud [KMS](/help/en/kms/product-overview/what-is-kms) to provide professional-grade encryption for Secret keys, enhancing data security.

> To enable this later, see [Use Alibaba Cloud KMS for Secret encryption at rest](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/use-kms-to-encrypt-kubernetes-secrets-2#task-2568562).

Cloud resource and billing information: ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2521963671/p991656.png)[KMS](/help/en/kms/key-management-service/product-overview/kms-billing)

✓

**RRSA OIDC**

The cluster creates an OIDC Provider. Using temporary OIDC tokens from its ServiceAccount, application pods can call Alibaba Cloud RAM services and assume specified RAM roles, securely obtaining temporary authorization to access cloud resources and implementing least-privilege permission management at the pod level.

> To enable this later, see [Use RRSA to configure ServiceAccount RAM permissions for pod-level permission isolation](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-rrsa-to-authorize-pods-to-access-different-cloud-services).

✗

## Node pool configuration

A node pool is a group of ECS instances that have the same configuration. Node pools provide the runtime environment for your workloads (pods). Some configuration items cannot be changed after creation, but you can create other node pools.

You can skip this step. You can create more node pools later to mix and isolate nodes of different types, such as nodes that use different operating systems, CPU architectures, billing methods, or instance types. For more information, see [Create and manage a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool). You can also [add existing nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-existing-ecs-instances-to-an-ack-cluster) to add purchased ECS instances to the cluster.

### Basic configuration

This section describes the basic information and automated O&M operations for the node pool. In a production environment, we recommend that you select the automated O&M options to reduce the O&M workload and improve stability.

**Configuration item**

**Description**

**Is modification supported?**

**Node Pool Name**

Enter a custom node pool name.

✓

**Container Runtime**

For selection guidance, see [Compare containerd, sandboxed container, and Docker runtimes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/comparison-of-docker-containerd-and-sandboxed-container#task-2455499).

-   containerd (recommended): Community standard, supported for Kubernetes 1.20 and later.
    
-   Sandboxed container: Provides a strongly isolated environment based on lightweight virtualization technology. For procedures and limitations, see [Create and manage sandboxed container node pools](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-pool-management-in-sandboxed-containers).
    
-   Docker (deprecated): Supported only for Kubernetes 1.22 and earlier. Creation is no longer supported.
    

✗

Managed node pool configurations

**Managed Node Pool**

Enable managed node pool to use ACK's [automated O&M capabilities](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-pool-overview/#807e154b6au5m).

> If your business is sensitive to underlying node changes and cannot tolerate node restarts or application pod migrations, we do not recommend enabling this.

> To enable this later, you can [edit the node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool).

✓

**Auto Repair**

ACK automatically monitors node status and performs self-healing tasks when nodes become abnormal. If you select **Restart Faulty Node**, node self-healing may involve draining nodes and replacing disks. For trigger conditions and related events, see [Enable node self-healing](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/auto-repair).

✓

**Automatically fix security vulnerabilities**

[Fix CVE vulnerabilities in node pool OS](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cve-patching), supporting configurable vulnerability fix levels.

Cloud resource and billing information: ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9421963671/p991661.png)[Security Center](/help/en/security-center/product-overview/billing-overview)

✓

**Maintenance Window**

ACK performs automated O&M operations on managed node pools only during the defined maintenance window.

✓

### Instance and image configuration

You can configure nodes based on your application performance and cost requirements, including ECS instance types and operating system environments.

**Configuration item**

**Description**

**Can it be modified?**

**Billing Method**

The default billing method used when scaling out nodes in the node pool.

-   **Pay-As-You-Go**: Can be enabled and released on demand.
    
-   **Subscription**: Requires configuring **Duration** and **Auto Renewal**.
    
-   **Preemptible Instance**: Currently, only spot instances with a protection period are supported. You must also configure the **Upper Price Limit of Current Instance Spec**.
    
    > The instance is created successfully when the real-time price of the specified instance type is below the maximum bid price. After the protection period (1 hour), the system checks the real-time price and inventory every 5 minutes. If the market price exceeds the bid price or inventory is insufficient, the spot instance is released. For usage recommendations, see [Spot instance node pool best practices](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/best-practices-for-preemptible-instance-based-node-pools#task-2188264)
    

To maintain node pool consistency, you cannot change a **Pay-As-You-Go** or **Subscription** node pool to a **Preemptible Instance** node pool, or vice versa.

✓

Instance-related configuration items

When scaling out, nodes are allocated from the configured [ECS instance families](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb). To improve scale-out success rates, select multiple instance types across multiple zones to avoid unavailability or insufficient inventory. The specific instance type used for scaling is determined by the configured **Scaling Policy**.

To ensure business stability and accurate resource scheduling, do not mix GPU and non-GPU instance types in the same node pool.

Configure instance types for scaling in one of two ways:

-   Specific types: Specify exact instance types based on vCPU, memory, family, architecture, and other dimensions.
    
-   Generalized configuration: Select instance types to use or exclude based on attributes (vCPU, memory, etc.) to further improve scale-out success rates. For details, see [Configure node pools using specified instance attributes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-a-node-pool-using-the-specified-instance-attributes).
    

Refer to the console's elasticity strength recommendations for configuration, or [view node pool elasticity strength](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/check-the-scalability-of-a-node-pool#task-2102754) after creation.

> For ACK-unsupported instance types and node configuration recommendations, see [ECS instance type configuration recommendations](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/select-ecs-instances-to-create-the-master-and-worker-nodes-of-an-ack-cluster).

Cloud resource and billing information: ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6025825571/p991664.png)[ECS instance](/help/en/ecs/instance-types), ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9421963671/p991667.png)[GPU instance](/help/en/egs/billing-2)

✓

**Operating System**

> **Marketplace Image** is in phased release.

The default operating system image used when scaling out nodes in the node pool.

-   **Public Image**: Uses [Alibaba Cloud Linux 3 container-optimized](/help/en/alinux/alibaba-cloud-linux-3-container-optimized-images), [ContainerOS](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/containeros-overview/), [Alibaba Cloud Linux 3](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-alibaba-cloud-linux-3), Ubuntu, Windows, and other public OS images. For image details, cgroup versions, and usage limits, see [Operating system](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/overview-of-os-images/#task-2286366).
    
-   **Custom Image**: Uses a custom OS image. For details, see [How to create a custom image from an existing ECS instance and use it to create nodes?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool#7e6cca52c4ze3).
    

> To upgrade or change the operating system later, see [Change operating system](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/replace-the-operating-system).

> Alibaba Cloud Linux 2 and CentOS 7 are no longer maintained. Use supported operating systems. We recommend Alibaba Cloud Linux 3 container-optimized or ContainerOS.

✓

**Security Hardening**

When creating nodes, ACK applies the selected security baseline policy.

-   **Disable**: No security hardening is applied to ECS instances.
    
-   **MLPS Security Hardening**: Alibaba Cloud provides baseline check standards and scanning tools for Alibaba Cloud Linux MLPS 2.0 Level 3 images that comply with classified protection requirements. While ensuring native image compatibility and performance, these images are adapted for MLPS compliance to meet "GB/T22239-2019 Information Security Technology—Cybersecurity Classified Protection Basic Requirements." For details, see [ACK MLPS hardening usage guide](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/ack-reinforcement-based-on-classified-protection#task-2014217).
    
    In this mode, the root user cannot log on remotely via SSH. You can [connect to the instance via VNC in the ECS console](/help/en/ecs/user-guide/log-on-to-an-instance-by-using-vnc#concept-sdk-1jx-wdb) and create a regular user that supports SSH logon.
    
-   **OS Security Hardening**: Supported only for Alibaba Cloud Linux 2 or Alibaba Cloud Linux 3.
    

✗

**Logon Type**

> When selecting **MLPS Security Hardening**, only **Password** is supported.

> ContainerOS supports only **Key Pair** or **Later**. If using a key pair, you must start an administrative container after configuration to use it. For details, see [Manage ContainerOS nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-the-administrative-container-of-containeros).

When creating nodes, ACK pre-configures the specified key pair or password on the instance.

-   **Set during creation**:
    
    -   **Key Pair**: Alibaba Cloud [SSH key pairs](/help/en/ecs/user-guide/ssh-key-pairs/) provide a secure and convenient logon authentication method consisting of a public key and a private key. Supported only for Linux instances.
        
        Configure both the **Username** (**root** or **ecs-user**) and the required **Key Pair**.
        
    -   **Password**: Configure the **Username** (**root** or **ecs-user**) and password.
        
-   **Later**: After instance creation, bind a key pair or reset the instance password yourself. For details, see [Bind SSH key pairs](/help/en/ecs/user-guide/bind-an-ssh-key-pair-to-an-instance#concept-zzt-nl1-ydb) and [Reset instance logon password](/help/en/ecs/user-guide/reset-the-logon-password-of-an-instance#concept-qct-gfl-xdb).
    

✓

### Storage configuration

This section configures the storage resources attached to the nodes, including the system disk for installing the operating system and the data disk for storing container runtime data.

**Configuration item**

**Description**

**Is modification supported?**

**System Disk**

Select a [cloud disk](/help/en/ecs/user-guide/elastic-block-storage-devices) type based on your business needs, including ESSD AutoPL, ESSD, ESSD Entry, and previous-generation disks (SSD and ultra disk). Configure capacity, IOPS, and other parameters.

> Available system disk types depend on the selected [instance family](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb). Disk types not displayed are unsupported.

**ESSD custom performance and encryption capabilities**

-   Supports custom performance levels. Larger disk capacity allows higher performance levels (PL2 for capacities over 460 GiB, PL3 for over 1260 GiB). For details, see [ESSD](/help/en/ecs/user-guide/essds#singledisk).
    
-   Only ESSD system disks support **Encrypted**. By default, Alibaba Cloud uses the service key (Default Service CMK) for encryption. You can also select a custom key (BYOK) pre-created in KMS.
    

Supports selecting **More Disk Categories** to configure disk types different from the primary **System Disk**, improving scale-out success rates. When creating nodes, ACK selects the first matching disk type from the specified order.

Cloud resource and billing information: ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6025825571/p991664.png)[ECS block storage](/help/en/ecs/block-storage-devices#concept-1937442)

✓

**Data Disk**

Select a [cloud disk](/help/en/ecs/user-guide/elastic-block-storage-devices) type based on your business needs, including ESSD AutoPL, ESSD, ESSD Entry, and previous-generation disks (SSD and ultra disk). Configure capacity, IOPS, and other parameters.

> Available data disk types depend on the selected [instance family](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb). Disk types not displayed are unsupported.

**ESSD AutoPL support**

-   Provisioned performance: Decouples disk capacity from performance, allowing flexible configuration of provisioned performance based on actual business needs without changing storage capacity.
    
-   Performance burst: Temporarily boosts performance to handle peak read/write demands until business stabilizes.
    

**ESSD support**

Supports custom performance levels. Larger disk capacity allows higher performance levels (PL2 for capacities over 460 GiB, PL3 for over 1260 GiB). For details, see [ESSD](/help/en/ecs/user-guide/essds#singledisk).

-   When mounting data disks, all cloud disk types support **Encrypted**. By default, Alibaba Cloud uses the service key (Default Service CMK) for encryption. You can also select a custom key (BYOK) pre-created in KMS.
    
-   During node creation, the last data disk is automatically formatted, and `/var/lib/container` is mounted to this disk. `/var/lib/kubelet` and `/var/lib/containerd` are mounted to `/var/lib/container`.
    
    > To customize mount directories, adjust the data disk initialization configuration. You can select only one data disk as the container runtime directory. For details, see [Can I customize directory mounting for data disks in ACK node pools?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-management#77df5d38f07vu)
    
-   For scenarios requiring container image acceleration or rapid large model loading, you can use snapshots to create data disks, improving system response speed and processing capability.
    

You can select **Add Data Disk Type** to configure disk types different from the primary **Data Disk**, improving scale-out success rates. When creating nodes, ACK selects the first matching disk type from the specified order.

> An ECS instance can mount up to 64 data disks. The maximum number of disks supported varies by instance type. You can query the disk quantity limit for an instance type using the DescribeInstanceTypes API (DiskQuantity).

Cloud resource and billing information: ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6025825571/p991664.png)[ECS block storage](/help/en/ecs/block-storage-devices#concept-1937442)

✓

### **Instance quantity configuration**

This configuration item is used to set the initial number of nodes in the node pool after it is created.

**Configuration item**

**Description**

**Can I make modifications?**

**Expected Number of Nodes**

The total number of nodes the node pool should maintain. We recommend configuring at least two nodes to ensure normal operation of cluster components. Adjust the desired node count to scale the node pool in or out. For details, see [Scale node pools](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/scale-a-node-pool-1#reference-2253711).

> If you do not need to create nodes, enter 0 and adjust manually later or [add existing nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-existing-ecs-instances-to-an-ack-cluster).

✓

### Node pool advanced configuration

Expand **Advanced Options (Optional)**, and configure scaling policies, ECS tags, taints, and other settings.

**Configuration item**

**Description**

**Can I make modifications?**

**Scaling Policy**

Configure how the node pool selects instances during scaling.

-   **Priority-based Policy**: Scales based on the vSwitch priority configured in the cluster (vSwitch order from top to bottom indicates decreasing priority). If instances cannot be created in the higher-priority zone, the next priority vSwitch is used automatically.
    
-   **Cost Optimization**: Scales from lowest to highest vCPU unit price.
    
    When the node pool uses **Preemptible Instance**, spot instances are prioritized. You can configure the **Percentage of pay-as-you-go instances (%)** to automatically supplement with pay-as-you-go instances when spot instances cannot be created due to inventory or other reasons.
    
-   **Distribution Balancing**: Distributes ECS instances evenly across multiple zones, but only in multi-zone scenarios. If zone distribution becomes unbalanced due to inventory shortages, you can rebalance.
    

✓

**Use Pay-as-you-go Instances When Spot Instances Are Insufficient**

> Requires selecting spot instances as the billing method.

When enabled, if sufficient spot instances cannot be created due to price or inventory reasons, ACK automatically attempts to create pay-as-you-go instances as a supplement.

Cloud resource and billing information: ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6025825571/p991664.png)[ECS instance](/help/en/ecs/instance-types)

✓

**Enable Supplemental Preemptible Instances**

> Requires selecting spot instances as the billing method.

When enabled, upon receiving a system notification that a spot instance will be reclaimed (5 minutes before reclamation), ACK attempts to scale out new instances for compensation.

-   Compensation successful: ACK drains the old node and removes it from the cluster.
    
-   Compensation failed: ACK does not drain the old node, and the instance is reclaimed after 5 minutes. When inventory is restored or price conditions are met, ACK automatically purchases instances to maintain the desired node count. For details, see [Spot instance node pool best practices](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/best-practices-for-preemptible-instance-based-node-pools).
    

Active release of spot instances may cause business disruptions. To improve compensation success rates, we recommend also enabling **Use Pay-as-you-go Instances When Spot Instances Are Insufficient**.

Cloud resource and billing information: ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6025825571/p991664.png)[ECS instance](/help/en/ecs/instance-types)

✓

**ECS Label**

Add tags to ECS instances automatically created by ACK as cloud resource identifiers. Each ECS instance can have up to 20 tags. To increase this limit, apply on the [Quota Platform](https://quotas.console.alibabacloud.com/products/tag/quotas). Because ACK and ESS occupy some tags, you can specify up to 17 custom tags per instance.

**Expand to view tag usage details**

-   ACK occupies two ECS tags by default.
    
    -   `ack.aliyun.com:<Your cluster ID>`
        
    -   `ack.alibabacloud.com/nodepool-id:<Your node pool ID>`
        
-   ESS occupies one ECS tag by default: `acs:autoscaling:scalingGroupId:<Your node pool scaling group ID>`.
    
-   After enabling [node autoscaling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/auto-scaling-of-nodes), Auto Scaling occupies two ECS tags by default, so the node pool occupies two additional ECS tags: `k8s.io/cluster-autoscaler:true` and `k8s.aliyun.com:true`.
    
-   After enabling [node autoscaling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/auto-scaling-of-nodes), components use ECS tags to record node labels and taints for pre-checking scheduling behavior of scaled-out nodes.
    
    -   Each node label is converted to `k8s.io/cluster-autoscaler/node-template/label/<Label key>:<Label value>`.
        
    -   Each node taint is converted to `k8s.io/cluster-autoscaler/node-template/taint/<Taint key>/<Taint value>:<Taint effect>`.
        

✓

**Taints**

Add key-value [taints](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration?spm=a2c4g.11186623.0.0.76f068derYLXgN) to nodes. A valid taint key includes an optional prefix and a name. If a prefix is specified, separate it from the name with a forward slash (/).

**Expand to view details**

-   **Key**: The name must be 1–63 characters long, start and end with a letter, digit, or character `[a-z0-9A-Z]`, and can contain letters, digits, hyphens (-), underscores (\_), and periods (.).
    
    If a prefix is specified, it must be a [DNS subdomain](https://kubernetes.io/zh-cn/docs/concepts/overview/working-with-objects/names/#dns-subdomain-names), meaning a series of DNS labels separated by periods (.), up to 253 characters long, ending with a forward slash (/).
    
-   **Value**: Can be empty, up to 63 characters long, must start and end with a letter, digit, or character `[a-z0-9A-Z]`, and can contain letters, digits, hyphens (-), underscores (\_), and periods (.).
    
-   **Effect**:
    
    -   **NoSchedule**: Prevents new pods that do not tolerate this taint from being scheduled to the node, but does not affect pods already running.
        
    -   **NoExecute**: Prevents new pods that do not tolerate this taint from being scheduled to the node and evicts any running pods that do not tolerate this taint.
        
    -   **PreferNoSchedule**: ACK tries to avoid scheduling pods to nodes with taints they cannot tolerate, but does not enforce this strictly.
        

✓

**Node Labels**

Add key-value labels to nodes. A valid key includes an optional prefix and a name. If a prefix is specified, separate it from the name with a forward slash (/).

**Expand to view details**

-   Key: The name must be 1–63 characters long, start and end with an alphanumeric character `[a-z0-9A-Z]`, and can contain letters, digits, hyphens (-), underscores (\_), and periods (.).
    
    If a prefix is specified, it must be a [DNS subdomain](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-subdomain-names), meaning a series of DNS labels separated by periods (.), up to 253 characters long, ending with a forward slash (/).
    
    **The following prefixes are reserved by Kubernetes core components and cannot be specified**
    
    -   `kubernetes.io/`
        
    -   `k8s.io/`
        
    -   Prefixes ending with `kubernetes.io/` or `k8s.io/`. For example, `test.kubernetes.io/`.
        
        Exceptions:
        
        -   `kubelet.kubernetes.io/`
            
        -   `node.kubernetes.io`
            
        -   Prefixes ending with `kubelet.kubernetes.io/`.
            
        -   Prefixes ending with `node.kubernetes.io`.
            
        
    
-   Value: Can be empty, up to 63 characters long, must start and end with an alphanumeric character `[a-z0-9A-Z]`, and can contain letters, digits, hyphens (-), underscores (\_), and periods (.).
    

✓

**Set to Unschedulable**

Newly added nodes are set as unschedulable by default when registered to the cluster. Manually adjust the [node scheduling status](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/overview-of-node-management/#1a240c2ce787y) in the node list.

> This setting applies only to clusters running Kubernetes versions earlier than 1.34. For details, see [Kubernetes 1.34 version notes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/kubernetes-1-34-release-notes#b3386a882am8z).

✓

**Container Image Acceleration**

> Supported only for containerd runtime version 1.6.34 or later.

Newly added nodes automatically detect whether container images support on-demand loading. If supported, containers start faster by default using on-demand loading, reducing application startup time. For details, see [Use on-demand loading to accelerate container startup](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/accelerate-container-startup-using-on-demand-container-image-loading).

✓

\[Deprecated\] **CPU Policy**

Specify the [CPU management policy](https://kubernetes.io/docs/tasks/administer-cluster/cpu-management-policies/?spm=5176.2020520152.0.0.49fd16ddxL871D) for kubelet nodes.

-   [None](https://kubernetes.io/zh-cn/docs/tasks/administer-cluster/cpu-management-policies/?spm=5176.2020520152.0.0.49fd16ddxL871D#none-policy): Default policy.
    
-   [Static](https://kubernetes.io/zh-cn/docs/tasks/administer-cluster/cpu-management-policies/?spm=5176.2020520152.0.0.49fd16ddxL871D#static-policy): Allows pods with certain resource characteristics on the node to have enhanced CPU affinity and exclusivity.
    

> We recommend using [Custom node pool kubelet configuration](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/customize-the-kubelet-configurations-of-a-node-pool).

> We recommend that you use [custom kubelet configurations for a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/customize-the-kubelet-configurations-of-a-node-pool).

✗

**Custom Node Name**

Node names consist of a prefix, node IP address, and suffix. When enabled, node names, ECS instance names, and ECS instance hostnames change accordingly.

Example: Node IP address is 192.XX.YY.55, prefix is aliyun.com, suffix is test.

-   Linux node: Node name, ECS instance name, and ECS instance hostname are all aliyun.com192.XX.YY.55test.
    
-   Windows node: Hostname is fixed as the IP address, with `-` replacing `.` in the IP address, and no prefix or suffix included.
    
    Thus, the ECS instance hostname is 192-XX-YY-55, while the node name and ECS instance name are aliyun.com192.XX.YY.55test.
    

**Important**

When the custom node name format depends on truncating part of the IP address, if the VPC CIDR block is large and the truncated IP length (`lenOfIP`) is insufficient, node name conflicts may occur, causing node scale-out failures in [instant node elasticity](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/instant-elasticity) scenarios.

Based on your VPC CIDR block, set the IP truncation length as follows:

-   For large CIDR blocks like 10.0.0.0/8 and 172.16.0.0/12, set `lenOfIP` to at least 9.
    
-   For the 192.168.0.0/16 CIDR block, set `lenOfIP` to at least 6.
    

✗

**Worker RAM Role**

> Supported only for ACK managed clusters

> Specifiable only when creating a new node pool.

Specify a Worker RAM role at the node pool level to reduce security risks from sharing a single Worker RAM role across all nodes.

-   **Default Role**: Uses the default Worker RAM role created for the cluster.
    
-   **Custom**: Uses the specified role as the Worker RAM role. If left empty, the default role is used. For details, see [Use a custom Worker RAM role](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-custom-worker-ram-roles).
    

✗

**Instance Metadata Access Mode**

> Supported only for clusters running Kubernetes 1.28 or later.

Configure the ECS instance metadata access mode. Inside the ECS instance, access the metadata service to obtain instance metadata, including instance ID, VPC information, NIC information, and other instance properties. For details, see [Instance metadata](/help/en/ecs/user-guide/view-instance-metadata/#e5723dd15c22l).

-   **Normal Mode and Security Hardening Mode**: Supports accessing the metadata service using both normal and reinforced modes.
    
-   **Security Hardening Mode**: Supports accessing the metadata service using only reinforced mode. For details, see [Use reinforced mode only to access ECS instance metadata](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/secure-access-to-ecs-instance-metadata).
    

✗

**Pre-defined Custom Data**

Before nodes join the cluster, run the specified instance pre-user [User-Data script](/help/en/ecs/user-guide/manage-the-user-data-of-linux-instances#section-lu5-puw-zsj).

Example: If the pre-user data is `touch /tmp/pre-script`, the combined script execution order on the node is as follows.

```
#!/bin/bash
# Input instance pre-user data executes here
touch /tmp/pre-script

# ACK node initialization script executes here
```

> For the execution logic of this configuration during node initialization, see [Node initialization process overview](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/introduction-to-node-initialization).

✓

**User Data**

After nodes join the cluster, run the specified instance user [User-Data script](/help/en/ecs/user-guide/manage-the-user-data-of-linux-instances#section-lu5-puw-zsj).

Example: If the instance user data is `touch /tmp/post-script`, the combined script execution order on the node is as follows.

```
#!/bin/bash
# ACK node initialization script executes here

# Input instance user data executes here
touch /tmp/post-script
```

> For the execution logic of this configuration during node initialization, see [Node initialization process overview](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/introduction-to-node-initialization).

> Successful cluster creation or node scale-out does not guarantee successful execution of the instance user script. Log on to the node and run `grep cloud-init /var/log/messages` to view execution logs.

✓

**CloudMonitor Agent**

View and monitor node and application status in the [CloudMonitor console](https://cloudmonitor.console.alibabacloud.com/).

This setting applies only to new nodes added to the node pool, not existing nodes.

> To enable this for existing nodes, install it in the [CloudMonitor console](https://cloudmonitor.console.alibabacloud.com/).

Cloud resource and billing information: ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9421963671/p991765.png)[Cloud Monitor](/help/en/cms/cloudmonitor-1-0/product-overview/billing-overview)

✓

**Public IP**

ACK assigns an IPv4 public IP address to nodes.

This setting applies only to new nodes added to the node pool, not existing nodes. To grant public network access to existing nodes, configure and bind an EIP. For details, see [Bind EIP to cloud resources](/help/en/eip/bind-an-eip-to-a-cloud-resource/#task-bh5-dll-vdb).

Cloud resource and billing information: ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6025825571/p991664.png)[ECS public network](/help/en/ecs/public-bandwidth)

✓

**Custom Security Group**

Specify a basic or enterprise security group for the node pool. ACK does not add extra access rules to the security group. You must manage security group rules yourself to avoid access issues. For details, see [Configure cluster security groups](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-security-group-rules-to-enforce-access-control-on-ack-clusters#task-2143626).

> Each ECS instance has a limit on the number of security groups it can join. Ensure sufficient [security group quota](/help/en/ecs/user-guide/limitations#SecurityGroupQuota).

✗

**RDS Whitelist**

Add node IPs to the RDS instance whitelist.

✓

**Deployment Set**

After creating a deployment set in the ECS console [Create deployment set](/help/en/ecs/user-guide/overview-43), specify it for the node pool so that scaled-out nodes are distributed across different physical servers, improving high availability.

By default, a deployment set supports up to `20 * number of zones` (determined by vSwitches), limiting the maximum node count in the node pool. Ensure sufficient quota in the deployment set.

> To enable this later, see [Node pool deployment set best practices](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/best-practices-for-associating-deployment-sets-with-node-pools#task-2170008).

✓

**Resource Pool Policy**

The resource pool strategy used when adding nodes (supported only when **Instance Configuration Mode** is set to **Specify Instance Type**). Resource pools include private pools generated after activating [elastic provisioning](/help/en/ecs/user-guide/overview-of-elasticity-assurance) or capacity reservations ([immediate-effect capacity reservation](/help/en/ecs/user-guide/overview-of-immediate-capacity-reservation) or [scheduled-effect capacity reservation](/help/en/ecs/user-guide/specify-a-time-effective-summary-of-capacity-reservation)) services, along with public pools, for node startup selection.

-   **Private Pool First**: Prioritizes using the specified private pool. If no private pool is specified or the specified private pool lacks capacity, it automatically matches open-type private pools. If no eligible private pool exists, it uses the public pool to create instances.
    
-   **Private Pool Only**: Requires specifying a private pool ID. If the specified private pool lacks capacity, node startup fails.
    
-   **Do Not Use**: Does not use resource pool strategies.
    

✓

**\[Deprecated\] Private Pool Type**

> This configuration item is deprecated. Switch to using **Resource Pool Policy** to specify private pools.

The [private pool](/help/en/ecs/user-guide/private-pools/) resources available for the selected zone and instance type. Types include the following:

-   **Open**: Instances automatically match open-type private capacity pools. If no eligible private pool exists, public pool resources are used for startup.
    
-   **Do Not Use**: Instances do not use any private pool capacity and start directly using public pool resources.
    
-   **Specified**: Requires selecting a private pool ID to restrict instances to use only that private pool capacity for startup. If the private pool is unavailable, instance startup fails.
    

✓

## Component configuration

ACK installs some components by default based on best practices. You can view and confirm them on this page. You can also install, uninstall, or upgrade components after the cluster is created. For more information, see [Manage components](/help/en/ack/manage-system-components).

### Basic configuration

**Configuration item**

**Description**

**Ingress**

Ingress manages how external traffic accesses services inside the cluster. Install it to expose cluster applications or APIs to the public network.

Three instance types are available as cluster Ingress gateways.

**ALB Ingress**

Routes traffic through Alibaba Cloud [Application Load Balancer (ALB)](/help/en/slb/application-load-balancer/product-overview/what-is-alb/), offering rich routing policies, deep integration with cloud products like WAF, and elastic scaling. Suitable for large-scale, high-traffic production workloads or scenarios requiring enterprise-grade reliability.

You can create a new ALB instance or use an existing ALB instance in the current VPC that is not associated with another cluster (only when using an existing VPC).

> To enable this later, see [Create and use ALB Ingress to expose services externally](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-and-use-alb-ingress-to-expose-services-to-the-public#task-2098039).

Cloud resource and billing information: ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2521963671/p991791.png)[ALB billing overview](/help/en/slb/application-load-balancer/product-overview/billing-overview/)

**Nginx Ingress**

Compatible with and optimized from the community Nginx Ingress Controller.

You can create a new CLB instance or use an existing CLB instance in the current VPC that is not associated with another cluster.

> To enable this later, see [Create and use Nginx Ingress to expose services externally](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-nginx-ingress-1).

Cloud resource and billing information: ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2521963671/p991652.png)[CLB](/help/en/slb/classic-load-balancer/product-overview/billing-overview/)

**MSE Ingress**

Implemented based on [MSE cloud-native gateway](/help/en/mse/product-overview/what-is-cloud-native-gateway), providing advanced capabilities like service governance, authentication, and phased releases. Suitable for scenarios requiring fine-grained microservice traffic control.

You can create a new MSE cloud-native gateway instance or use an existing instance in the current VPC that is not associated with another cluster (only when using an existing VPC).

> To enable this later, see [Access Container Service through MSE Ingress](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-mse-ingresses-to-access-applications-in-ack-clusters#task-2229308).

Cloud resource and billing information: ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2521963671/p991794.png)[Standard instance billing overview](/help/en/mse/product-overview/billing-overview-2#concept-2081040)

For a detailed comparison, see [Ingress management](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ingress-management-2/).

**Service Discovery**

Installs [NodeLocal DNSCache](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-nodelocal-dnscache#task-2008363) to cache DNS resolution results on nodes, improving DNS resolution performance and stability and accelerating internal service calls within the cluster.

**Volume Plug-in**

Implements persistent storage based on [CSI storage plugins](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/csi-overview-1/#concept-2005339), supporting Alibaba Cloud cloud disks, NAS, OSS, CPFS, and other storage volumes.

When selecting default creation of [NAS](/help/en/nas/product-overview/what-is-nas) and CNFS, ACK automatically creates a general-purpose NAS file system and manages it using [Container Network File System (CNFS)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cnfs-overview/).

> To create CNFS later, see [Manage NAS file systems through CNFS](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-cnfs-to-manage-nas-file-systems).

Cloud resource and billing information: ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2521963671/p991821.png)[NAS](/help/en/nas/product-overview/overview-1)

**Monitor containers**

Monitors cluster health, resource usage, and application performance through container cluster monitoring services, triggering alerts when anomalies occur.

-   **ACK Cluster Monitoring Pro Edition**: Provides a managed container monitoring service with built-in Grafana dashboards. Data is stored for 90 days by default.
    
    > For billing rules, see [Container monitoring billing](/help/en/arms/observable-visualization-grafana-edition/product-overview/container-cluster-monitoring-pro-version-billing-rule). Additional fees apply for reporting custom metrics or adjusting the base storage duration. For details, see [Prometheus instance billing](/help/en/prometheus/product-overview/billing-description/).
    
-   **ACK Cluster Monitoring Basic Edition**: Provides a free, unmanaged container monitoring service with built-in basic monitoring dashboards. Data is stored for 7 days by default.
    
    > The component defaults to single-replica, consuming 3 vCPUs and 4 GB memory, requiring self-maintenance. Additional fees apply for reporting custom metrics. For details, see [Prometheus instance billing](/help/en/prometheus/product-overview/billing-description/).
    
-   **Disable**: Disables container monitoring services, preventing monitoring of container service status and alert creation.
    

> To enable this later, see [Integrate and configure Alibaba Cloud Prometheus monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-managed-service-for-prometheus-to-monitor-an-ack-cluster).

Cloud resource and billing information: ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2521963671/p991833.png)[Prometheus](/help/en/arms/prometheus-monitoring/product-overview/billing-description/)

**Cost Suite**

Provides cost and resource usage analysis for clusters, namespaces, node pools, and workloads to improve cluster resource utilization and reduce costs.

> To enable this later, see [Cost insights](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cost-insights-1/).

**Log Service**

Use an existing SLS Project or create a new one to collect cluster application logs.

Also enables the cluster API Server audit feature to collect requests to the Kubernetes API and their results.

> To enable this later, see [Collect ACK cluster container logs](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/collect-text-logs-from-ack-clusters-using-daemonset-deployed-logtail-agents#task-1797722), [Use cluster API Server audit feature](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/work-with-cluster-auditing).

-   **Create Ingress Dashboard:** Creates an Ingress Dashboard in the SLS console to collect Nginx Ingress access logs. For details, see [Collect and analyze Nginx Ingress access logs](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/analyze-and-monitor-the-access-log-of-nginx-ingress#task-1796525).
    
-   **Install node-problem-detector and create Event Hub:** Adds an Event Hub in the SLS console to collect all Kubernetes Events in real time. For details, see [Create and use K8s Event Hub](/help/en/sls/create-and-use-an-event-center#task-2389213).
    

Cloud resource and billing information: ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2521963671/p991844.png)[SLS](/help/en/sls/billing-overview#concept-2086667)

**Alerts**

Enables [Container Service alert management](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/alert-management#task-2056339), sending alert notifications to alert contact groups based on data sources from SLS, Managed Service for Prometheus, and Cloud Monitor when cluster anomalies occur.

**Control Plane Logs**

Collects control plane component logs into an SLS Project for in-depth troubleshooting and root cause analysis.

> To enable this later, see [Collect ACK managed cluster control plane component logs](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/collect-control-plane-component-logs-of-ack-managed-cluster#task-2020982).

Cloud resource and billing information: ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2521963671/p991844.png)[SLS](/help/en/sls/billing-overview#concept-2086667)

**Cluster Inspections**

Enables the [cluster inspection feature](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-the-cluster-inspection-feature/#task-2199360) of artificial intelligence for IT operations (AIOps) to regularly scan quotas, resource usage, component versions, and other aspects within the cluster, ensuring configurations follow best practices and exposing potential risks early.

### Advanced configuration

Expand **Advanced Options (Optional)** and select the components that you want to install, such as components for application management, log monitoring, storage, networking, and security.
