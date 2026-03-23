In an ACK dedicated cluster, you can create at least three master nodes for high availability and multiple worker nodes. This provides you with fine-grained control over the cluster infrastructure. However, you must plan, maintain, and upgrade the cluster yourself. This topic describes how to create an ACK dedicated cluster using the console, an API, Terraform, an SDK, or a CLI.

**Important**

Container Service for Kubernetes (ACK) has suspended the creation of ACK dedicated clusters as of August 21, 2024. We recommend that you use ACK Pro clusters in production environments. They provide higher reliability, security, and scheduling efficiency.

-   To create an ACK Pro cluster, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/).
    
-   To migrate an ACK dedicated cluster to an ACK Pro cluster, see [Hot migrate an ACK dedicated cluster to an ACK Pro cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/hot-migration-from-ack-dedicated-clusters-to-ack-pro-clusters).
    

## **Preparations**

Before you create a cluster, make sure that you activated ACK and assigned the ACK system role to your Alibaba Cloud account or RAM user. In addition, make sure that you activated cloud services such as VPC, Server Load Balancer (SLB), and NAT gateway. For more information, see [Quickly create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/getting-started/quick-start-for-first-time-users).

**Note**

If you purchase services such as CLB based on the pay-as-you-go billing method, make sure that the balance of your Alibaba Cloud account is sufficient to avoid overdue payments.

## **Create a cluster**

You can create an ACK cluster using the console, an API, an SDK, Terraform, or a CLI.

### **Console**

#### **Step 1: Log on to the ACK console**

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  In the upper-left corner of the page, select the resource group and region where your target resource resides.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0295238471/p957678.png)
    
3.  On the **Clusters** page, click **Create Kubernetes Cluster**.
    

#### **Step 2: Configure the cluster**

Click the **ACK Dedicated Cluster** tab and configure basic information, network settings, and advanced options for the cluster.

##### **Basic information**

**Parameter**

**Description**

**Cluster Name**

The custom name of the cluster.

**Region**

The [region](/help/en/ack/product-overview/supported-regions) where the cluster is deployed. The closer the selected region is to your users and deployed resources, the lower the network latency and the faster the access speed.

**Kubernetes Version**

The supported Kubernetes versions. We recommend that you use the latest version. For more information, see [Kubernetes versions supported by ACK](/help/en/ack/product-overview/release-notes-for-kubernetes-versions).

##### **Network configuration**

**Parameter**

**Description**

**IPv6 Dual-stack**

If you enable IPv4/IPv6 dual-stack, a dual-stack cluster is created.

**Important**

-   Only clusters that run Kubernetes 1.22 and later support this feature.
    
-   IPv4 addresses are used for communication between worker nodes and the control plane.
    
-   You must select Terway as the container network plugin.
    
-   If you use the shared ENI mode of Terway, the ECS instance type must support IPv6 addresses. To add ECS instances of the specified type to the cluster, the number of IPv4 addresses supported by the ECS instance type must be the same as the number of IPv6 addresses. For more information about ECS instance types, see [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb).
    
-   The VPC used by the cluster must support IPv4/IPv6 dual-stack.
    
-   You must disable IPv4/IPv6 dual stack if you want to use [eRDMA](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-erdma-in-ack-clusters) in a cluster.
    

**VPC**

Configure the VPC of the cluster. You can specify a **Zone** to automatically create a VPC. You can also select an existing VPC in the VPC list.

**Configure SNAT For VPC**

> Do not select this option if you use a shared VPC for the cluster.

After you select this check box, ACK performs the following operations on the newly created or selected VPC:

-   If the VPC does not have a NAT gateway, a NAT gateway will be automatically created and vSwitch-level SNAT rules will be configured for all vSwitches used by the cluster.
    
-   If the VPC already has a NAT gateway:
    
    -   If there are no VPC-level SNAT rules, vSwitch-level SNAT rules will be configured automatically for all vSwitches used by the cluster.
        
    -   If VPC-level SNAT rules already exist, no action will be taken.
        

If you do not select this check box, you can manually configure a NAT gateway and configure SNAT rules after creating the cluster to ensure that instances in the VPC can access the Internet. For more information, see [Create and manage an Internet NAT gateway](/help/en/nat-gateway/user-guide/use-internet-nat-gateway-for-public-network-access#task-491095).

**VSwitch**

Select an existing vSwitch from the vSwitch list or click **Create VSwitch** to create a vSwitch. The control plane and the default node pool use the vSwitch that you select. We recommend that you select multiple vSwitches in different zones to ensure high availability.

**Security Group**

> When **VPC** is set to **Use Existing**, you can select the **Select Existing Security Group** option.

You can select **Create Basic [Security Group](/help/en/ecs/user-guide/overview-44#concept-o2y-mqw-ydb)**, **Create Advanced [Security Group](/help/en/ecs/user-guide/overview-44#concept-o2y-mqw-ydb)**, or **Select Existing [Security Group](/help/en/ecs/user-guide/overview-44#concept-o2y-mqw-ydb)**.

-   By default, automatically created security groups allow all outbound traffic. When you modify the security group for business purposes, make sure that inbound traffic from the `100.64.0.0/10` CIDR block is allowed. This CIDR block is used to access other Alibaba Cloud services to pull images and query basic ECS information.
    
-   If you select an existing security group, the system does not automatically configure security group rules. This may cause errors when you access the nodes in the cluster. You must manually configure security group rules. For more information, see [Configure security groups for clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-security-group-rules-to-enforce-access-control-on-ack-clusters#task-2143626).
    

**Access To API Server**

The API server provides various HTTP REST interfaces for managing resource objects (such as pods and Services), including create, read, update, delete, and watch operations.

-   By default, the system creates a pay-as-you-go internal-facing CLB instance for the API server to serve as the internal endpoint of the API server in the cluster.
    
-   To use an existing CLB instance, you must first [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to request whitelist access. After configuring to **Use Existing** **VPC**, you can set **Load Balancer Source** to **Use Existing** and then **Select Existing CLB Instance**.
    

Specify whether to **Expose API Server With EIP**.

-   Expose: If you enable this feature, an EIP is associated with the internal-facing CLB instance used to expose the API server. This way, you can access the API server of the cluster over the Internet.
    
-   Do not expose: No EIP is created. You can use a kubeconfig file to connect to the cluster only from within the VPC and then manage the cluster.
    

**Important**

-   If you delete the default CLB instance, you cannot access the API server.
    
-   After binding an EIP to a CLB instance, the API server can receive requests from the public network. However, resources within the cluster cannot access the public network. To allow resources within the cluster to access the public network to pull public images, select the **Configure SNAT For VPC** check box.
    
-   Starting from December 1, 2024, an instance fee will be charged for newly created CLB instances. For more information, see [CLB billing adjustments](/help/en/slb/product-overview/announcement-on-adjustment-of-traditional-load-balancing-clb-billing-items).
    

**Network Plug-in**

The container network plugin is the foundation for network communication between pods in a cluster.

> For a detailed comparison of the two plugins, see [Comparison of the Terway and Flannel container network plugins](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/comparison-between-terway-and-flannel).

-   **Flannel**: A lightweight, open source network plugin. In ACK, it uses a VPC-native mode that is deeply integrated with Alibaba Cloud VPC. It enables pod-to-pod communication by directly managing VPC route tables.
    
    -   Scenarios: Flannel is simple to configure and consumes few resources. It is suitable for scenarios with a small number of nodes (limited by VPC route table quotas), simplified network configuration requirements, and no need for custom control over the container network.
        
-   **Terway**: A high-performance network plugin developed by Alibaba Cloud. It enables pod-to-pod communication based on Elastic Network Interfaces (ENIs).
    
    -   Scenarios: Terway provides features such as eBPF-based network acceleration, NetworkPolicy, and pod-level vSwitches and security groups. It is suitable for scenarios with high requirements for node scale, network performance, and security, such as high-performance computing (HPC), games, and microservices.
        
    -   Pod quantity limit: Each pod occupies a secondary IP address of an ENI. The number of IP addresses that can be assigned to a single ENI is limited and depends on the [instance type](/help/en/ecs/user-guide/overview-of-instance-families). Therefore, the number of pods that can run on a node is limited by the ENI and secondary IP address quotas of the node.
        
        > When you use a shared VPC, only Terway is supported.
        
    
    Terway also provides the following features.
    
    > For more information about these features, see [Use the Terway network plugin](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-terway).
    
    -   **DataPathV2**
        
        > This can be configured only when you create a cluster.
        
        Enable DataPathv2 acceleration mode. Terway will use eBPF technology to optimize traffic forwarding paths, providing lower latency and higher throughput for network-intensive applications.
        
        This feature is supported only on Alibaba Cloud Linux 3 (all versions), ContainerOS, and Ubuntu, and requires Linux kernel version 5.10 or later. For more information, see [Network acceleration](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-terway#0240fff858j64).
        
    -   **NetworkPolicy Support**
        
        > This feature is in public preview. To use it, apply on the [Quota Center console](https://quotas.console.alibabacloud.com/white-list-products/csk/quotas) page.
        
        Supports native Kubernetes `NetworkPolicy` to act as a firewall between pods. Customize fine-grained access control rules to improve cluster security.
        
    -   **Trunk ENI Support**
        
        Allows you to configure independent IP addresses, vSwitches, and security groups for pods. This is suitable for special business scenarios that require fixed IP addresses or independent network policy management for specific pods. For more information, see [Configure a fixed IP address, an independent vSwitch, and a security group for a pod](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-a-static-ip-address-a-separate-vswitch-and-a-separate-security-group-for-each-pod#task-2236831).
        
    

**Container CIDR Block**

> Configure this parameter only if you select Flannel as the network plug-in.

The **Container CIDR Block** must not overlap with the CIDR block of the VPC, the CIDR blocks of the ACK clusters in the VPC, or the Service CIDR block. The container CIDR block cannot be modified after it is specified. For more information about how to plan CIDR blocks for a cluster, see [Network planning of an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/kubernetes-cluster-network-planning#concept-izq-sg4-vdb).

**Number Of Pods Per Node**

> Configure this parameter only if you select Flannel as the network plug-in.

The maximum number of pods that can be stored on a single node.

**Pod VSwitch**

> Configure this parameter only if you select Terway as the network plug-in.

The vSwitch that is used to assign IP addresses to pods. Each pod vSwitch corresponds to a vSwitch of a worker node. The vSwitch of the pod and the vSwitch of the worker node must be in the same zone.

**Important**

We recommend that you set the subnet mask of the CIDR block of a pod vSwitch to no longer than 19 bits, but the subnet mask must not exceed 25 bits. Otherwise, the cluster network has only a limited number of IP addresses that can be allocated to the pods. As a result, the cluster may not function as expected.

**Service CIDR**

The Service CIDR is a dedicated network address range for assigning IP addresses to Services in the cluster. This CIDR block must not overlap with the CIDR block of the VPC, the CIDR blocks of existing ACK clusters in the VPC, or the container CIDR block. For more information about how to plan CIDR blocks for a cluster, see [Network planning of an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/kubernetes-cluster-network-planning#concept-izq-sg4-vdb).

**IPv6 Service CIDR Block**

> Configure this parameter only if you enable IPv4/IPv6 dual stack.

Configure an IPv6 CIDR block for Services. You must specify a Unique Local Unicast Address (ULA) space within the address range `fc00::/7`. The prefix must be 112 bits to 120 bits in length. We recommend that you specify an IPv6 CIDR block that has the same number of available IP addresses as the Service CIDR block.

For more information about how to plan CIDR blocks for a cluster, see [Network planning of an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/kubernetes-cluster-network-planning#concept-izq-sg4-vdb).

##### **Advanced cluster configuration**

Expand **Advanced Options (Optional)** and configure the service forwarding mode for the cluster.

**Parameter**

**Description**

**Forwarding Mode**

iptables and IPVS are supported.

-   iptables is a mature and stable kube-proxy mode. In this mode, service discovery and load balancing for Kubernetes Services are configured using iptables rules. The performance of this mode depends on the size of the Kubernetes cluster. This mode is suitable for Kubernetes clusters that manage a small number of Services.
    
-   IPVS is a high-performance kube-proxy mode. In this mode, service discovery and load balancing for Kubernetes Services are configured by the IPVS module of Linux. This mode is suitable for clusters that manage many Services. We recommend that you use this mode in scenarios where high-performance load balancing is required.
    

Expand **Advanced Options (Optional)** and configure cluster deletion protection, resource group, and other information.

**Click to view advanced options**

**Parameter**

**Description**

**Deletion Protection**

We recommend that you enable deletion protection in the console or using OpenAPI to prevent clusters from being accidentally released.

**Resource Group**

The [resource group](/help/en/ecs/user-guide/resource-groups#concept-fdn-wtm-cgb) to which the cluster belongs. Each resource can belong to only one resource group. You can regard a resource group as a project, an application, or an organization based on your business scenarios.

**Labels**

Add a [label](/help/en/resource-management/tag/product-overview/tag-overview) to the cluster. Labels are used to identify cloud resources. A label is a key-value pair.

**Time Zone**

The [time zone](/help/en/ack/product-overview/supported-time-zones) of the cluster. By default, the time zone of your browser is selected.

**Cluster Domain**

Configure the cluster domain. The default domain name is `cluster.local`. You can enter a custom domain name. The cluster domain is the top-level domain name (standard suffix) used by all Services in the cluster. For example, the DNS name of the Service named `my-service` in the default namespace is `my-service.default.svc.cluster.local`.

For more information about the usage notes for specifying a custom domain name, see [What do I need to take note of when I configure a cluster domain (ClusterDomain)?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#6f1f2d87f3nh2).

**Custom Certificate SANs**

You can enter custom subject alternative names (SANs) for the API server certificate of the cluster to accept requests from specified IP addresses or domain names. This lets you control access from clients. For more information, see [Customize the SANs of the API server certificate when you create an ACK cluster](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/customize-the-san-of-the-api-server-certificate-when-you-create-an-ack-cluster#task-2064726).

**Service Account Token Volume Projection**

ACK provides **Service Account Token Volume Projection** to reduce security risks when pods use service accounts to access the Kubernetes API server. This feature enables kubelet to request and store the token on behalf of a pod. This feature also lets you configure token properties, such as the audience and validity period. For more information, see [Use ServiceAccount token volume projection](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/enable-service-account-token-volume-projection#task-2460323).

**Node Port Range**

The range of available ports when you create a NodePort Service.

**Cluster CA**

If you select this check box, upload a certificate authority (CA) certificate for the cluster to secure data transmission between the server and the client.

#### **Step 3: Configure master nodes**

Click **Next:Master Configurations** and configure the master nodes.

**Parameter**

**Description**

**Master Node Quantity**

Specify the number of master nodes that you want to deploy in the zones that you select.

**Billing Method**

These billing methods are supported: **Pay-As-You-Go** and **Subscription**. If you select **Subscription**, you must configure the **Duration** parameter and choose whether to enable **Auto Renewal**.

**Instance Type**

Select the [instance family](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb) of the master node. For more information, see [Choose ECS specifications to create master nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/select-ecs-instances-to-create-the-master-and-worker-nodes-of-an-ack-cluster#section-g2v-jry-nfb).

**System Disk**

**[ESSD AutoPL](/help/en/ecs/user-guide/essd-autopl-disks#concept-2156400)**, **[ESSD](/help/en/ecs/user-guide/essds)**, **ESSD Entry**, **Standard SSD**, and **Ultra Disk** are supported. The types of system disks that you can select vary based on the [instance family](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb) that you select. [Disk](/help/en/ecs/user-guide/elastic-block-storage-devices) types that are not displayed in the drop-down list are not supported by the instance types that you select.

**ESSD custom performance and encryption**

-   If you select **ESSD**, you can set a custom performance level. You can select higher performance levels (PLs) for ESSDs with larger storage capacities. For example, you can select PL 2 for an ESSD with a storage capacity of more than 460 GiB. You can select PL 3 for an ESSD with a storage capacity of more than 1,260 GiB. For more information, see [Capacity and PLs](/help/en/ecs/user-guide/essds#singledisk).
    
-   You can select **Encryption** only if you set the system disk type to **ESSD**. By default, the **Default Service CMK** is used to encrypt the system disk. You can also use an existing CMK generated using Bring-Your-Own-Key (BYOK) in KMS.
    

You can select **Configure More System Disk Types** to configure a disk type different from the **System Disk** to improve the scale-out success rate. When an instance is created, the system selects the first matching disk type based on the specified order of disk types to create the instance.

**Deployment Set**

You can [create a deployment set](/help/en/ecs/user-guide/overview-43) in the ECS console and select the deployment set for control plane nodes in the ACK console.

##### **Advanced options**

**Parameter**

**Description**

**Instance Metadata Access Mode**

> This is a whitelist feature. To use it, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm). This feature is supported only for ACK managed clusters

Configure the metadata access mode for ECS instances. You can access the metadata service from within an ECS instance to obtain instance metadata, such as the instance ID, VPC information, and NIC information. For more information, see [Metadata access modes](/help/en/ecs/user-guide/view-instance-metadata/#e5723dd15c22l).

-   **Normal And Enforced Modes**: You can use the normal mode and the enforced mode to access the instance metadata service.
    
-   **Enforced Mode Only**: You can use only the enforced mode to access the instance metadata service. For more information, see [Use the enforced mode to access ECS instance metadata](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/secure-access-to-ecs-instance-metadata).
    

#### **Step 4: Configure the node pool**

Click **Next:Node Pool Configurations** and configure the basic and advanced options for the node pool.

##### **Basic node pool configuration**

**Parameter**

**Description**

**Node Pool Name**

Specify a node pool name.

**Container Runtime**

Specify the **Container Runtime** based on the Kubernetes version. For more information about how to select a container runtime, see [Comparison among containerd, Sandboxed-Container, and Docker](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/comparison-of-docker-containerd-and-sandboxed-container#task-2455499).

-   containerd (recommended): supports all Kubernetes versions.
    
-   Sandboxed-Container: supports Kubernetes 1.31 and earlier.
    
-   Docker (deprecated): supports Kubernetes 1.22 and earlier.
    

##### **Instance and image configuration**

**Parameter**

**Description**

**Billing Method**

The default billing method used when ECS instances are scaled in a node pool. You can select **Pay-As-You-Go**, **Subscription**, or **Spot Instance**.

-   If you select the **Subscription** billing method, you must configure the **Duration** parameter and choose whether to enable **Auto Renewal**.
    
-   **Spot Instance**: Currently, only **Spot Instances** with a protection period are supported. You must also configure the **Maximum Price Per Instance**.
    
    If the real-time market price of an instance type that you select is lower than the value of this parameter, a [spot instance](/help/en/ecs/user-guide/what-is-a-spot-instance#concept-t3p-gv2-5db) of this instance type is created. After the protection period (1 hour) ends, the system checks the spot price and resource availability of the instance type every 5 minutes. If the real-time market price exceeds your bid price or if the resource inventory is insufficient, the spot instance is released. For more information, see [Best practices for preemptible instance-based node pools](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/best-practices-for-preemptible-instance-based-node-pools#task-2188264).
    

To ensure that all nodes in a node pool use the same billing method, ACK does not allow you to change the billing method of a node pool from **Pay-as-you-go** or **Subscription** to **Spot Instances** or from **Spot Instances** to **Pay-as-you-go** or **Subscription**.

Instance-related parameters

Select the ECS instances used by the worker node pool based on instance types or attributes. You can filter [instance families](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb) by attributes such as vCPU, memory, instance family, and architecture. For more information about the instance specifications not supported by ACK and how to configure nodes, see [ECS instance type recommendations](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/select-ecs-instances-to-create-the-master-and-worker-nodes-of-an-ack-cluster).

When the node pool is scaled out, ECS instances of the selected instance types are created. The scaling policy of the node pool determines which instance types are used to create new nodes during scale-out activities. Select multiple instance types to improve the success rate of node pool scale-out operations.

If the node pool fails to be scaled out because the instance types are unavailable or the instances are out of stock, you can specify more instance types for the node pool. The ACK console automatically evaluates the scalability of the node pool. You can [check the scalability of the node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/check-the-scalability-of-a-node-pool#task-2102754) when you create the node pool or after you create the node pool.

**Operating System**

-   **Public Image**: Container Service for Kubernetes provides public images of [Alibaba Cloud Linux 3 Container-optimized](/help/en/alinux/alibaba-cloud-linux-3-container-optimized-images), [Alibaba Cloud Linux 3](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-alibaba-cloud-linux-3), and Red Hat. For more information, see [Operating system](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/overview-of-os-images/#task-2286366).
    
-   **Custom Image**: Use custom OS images created based on Alibaba Cloud Linux 3 or Red Hat. For more information, see [How do I create a custom image based on an existing ECS instance and use the image to create a node?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool#7e6cca52c4ze3).
    

**Note**

For more information about how to upgrade or change the operating system, see [Change the OS](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/replace-the-operating-system).

**Security Hardening**

Enable security hardening for the cluster. You cannot modify this parameter after the cluster is created.

-   **Disable**: disables security hardening for ECS instances.
    
-   **MLPS Security Hardening**: Alibaba Cloud provides baselines and the baseline check feature to help you check the compliance of Alibaba Cloud Linux 2 images and Alibaba Cloud Linux 3 images with the level 3 standards of MLPS 2.0. MLPS Security Hardening enhances the security of OS images to meet the requirements of GB/T 22239-2019 Information Security Technology - Baseline for Classified Protection of Cybersecurity without compromising the compatibility and performance of the OS images. For more information, see [ACK security hardening based on MLPS](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/ack-reinforcement-based-on-classified-protection#task-2014217).
    
    **Important**
    
    After you enable MLPS Security Hardening, remote logons through SSH are prohibited for root users. You can use Virtual Network Computing (VNC) to log on to the OS from the ECS console and create regular users that are allowed to log on through SSH. For more information, see [Connect to an instance using VNC](/help/en/ecs/user-guide/log-on-to-an-instance-by-using-vnc#concept-sdk-1jx-wdb).
    
-   **OS Security Hardening**: You can enable Alibaba Cloud OS Security Hardening only when the system image is an Alibaba Cloud Linux 2 or Alibaba Cloud Linux 3 image.
    

**Logon Type**

-   **Key Pair**: Alibaba Cloud [SSH key pairs](/help/en/ecs/user-guide/ssh-key-pairs/) provide a secure and convenient method to log on to ECS instances. An SSH key pair consists of a public key and a private key. SSH key pairs support only Linux instances.
    
    Configure the **Username** (select **root** or **ecs-user** as the username) and the **Key Pair** parameters.
    
-   **Password**: The password must be 8 to 30 characters in length, and can contain letters, digits, and special characters.
    
    Configure the **Username** (select **root** or **ecs-user** as the username) and the Password parameters.
    

##### **Storage configuration**

**Parameter**

**Description**

**System Disk**

**[ESSD AutoPL](/help/en/ecs/user-guide/essd-autopl-disks#concept-2156400)**, **[ESSD](/help/en/ecs/user-guide/essds)**, **ESSD Entry**, **Standard SSD**, and **Ultra Disk** are supported. The types of system disks that you can select vary based on the [instance family](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb) that you select. [Disk](/help/en/ecs/user-guide/elastic-block-storage-devices) types that are not displayed in the drop-down list are not supported by the instance types that you select.

**ESSD custom performance and encryption**

-   If you select **ESSD**, you can set a custom performance level. You can select higher performance levels (PLs) for ESSDs with larger storage capacities. For example, you can select PL 2 for an ESSD with a storage capacity of more than 460 GiB. You can select PL 3 for an ESSD with a storage capacity of more than 1,260 GiB. For more information, see [Capacity and PLs](/help/en/ecs/user-guide/essds#singledisk).
    
-   You can select **Encryption** only if you set the system disk type to **ESSD**. By default, the **Default Service CMK** is used to encrypt the system disk. You can also use an existing CMK generated using Bring-Your-Own-Key (BYOK) in KMS.
    

You can select **Configure More System Disk Types** to configure a disk type different from the **System Disk** to improve the scale-out success rate. When an instance is created, the system selects the first matching disk type based on the specified order of disk types to create the instance.

**Data Disk**

**[ESSD AutoPL](/help/en/ecs/user-guide/essd-autopl-disks#concept-2156400)**, **[ESSD](/help/en/ecs/user-guide/essds)**, **ESSD Entry**, and previous-generation disks (**Standard SSD** and **Ultra Disk)** are supported. The data disk types that you can select vary based on the [instance family](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb) that you select. [Disk](/help/en/ecs/user-guide/elastic-block-storage-devices) types that are not displayed in the drop-down list are not supported by the instance types that you select.

**ESSD AutoPL Disk**

-   Performance provision: The performance provision feature lets you configure provisioned performance settings for ESSD AutoPL disks to meet storage requirements that exceed the baseline performance without the need to extend the disks.
    
-   Performance burst: The performance burst feature allows ESSD AutoPL disks to burst their performance when spikes in read/write workloads occur and reduce the performance to the baseline level at the end of workload spikes.
    

**ESSD** **support**

Configure a custom performance level. You can select higher PLs for ESSDs with larger storage capacities. For example, you can select PL 2 for an ESSD with a storage capacity of more than 460 GiB. You can select PL 3 for an ESSD with a storage capacity of more than 1,260 GiB. For more information, see [Capacity and PLs](/help/en/ecs/user-guide/essds#singledisk).

-   You can select **Encryption** for all disk types when you specify the type of data disk. By default, the **Default Service CMK** is used to encrypt the data disk. You can also use an existing CMK generated using BYOK in KMS.
    
-   You can also use snapshots to create data disks in scenarios where container image acceleration and fast loading of large language models (LLMs) are required. This improves the system response speed and enhances the processing capability.
    
-   During node creation, the last data disk will be automatically formatted. The system will mount `/var/lib/container` to this disk, while mounting `/var/lib/kubelet` and `/var/lib/containerd` to `/var/lib/container`. To custom mount points, modify the initialization configuration of the data disk. Only one data disk can be selected as the container runtime directory. For usage instructions, see [Can I mount a data disk to a custom directory in an ACK node pool?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-management#77df5d38f07vu)
    

**Note**

Up to 64 data disks can be attached to an ECS instance. The number of disks that can be attached to an ECS instance varies based on the instance type. To query the maximum number of data disks supported by each instance type, call the [DescribeInstanceTypes](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinstancetypes)operation and query the DiskQuantity parameter in the response.

You can select ****Configure More Data Disk Types**** to configure a disk type different from the **Data Disk** to improve the scale-out success rate. When an instance is created, the system selects the first matching disk type based on the specified order of disk types to create the instance.

##### **Instance quantity configuration**

**Parameter**

**Description**

**Expected Nodes**

The expected number of nodes in the node pool. We recommend that you configure at least 2 nodes to ensure that cluster components run as expected. You can configure the Expected Nodes parameter to adjust the number of nodes in the node pool. For more information, see [Scale a node pool](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/scale-a-node-pool-1#reference-2253711).

If you do not want to create nodes in the node pool, set this parameter to 0. You can manually modify this parameter to add nodes later.

##### **Advanced node pool configuration**

Expand **Advanced Options (Optional)** and configure the node scaling policy.

**Parameter**

**Description**

**Scaling Policy**

-   **Priority**: The system scales the node pool based on the priorities of the vSwitches that you select for the node pool. The ones you select are displayed in descending order of priority. If Auto Scaling fails to create ECS instances in the zone of the vSwitch with the highest priority, Auto Scaling attempts to create ECS instances in the zone of the vSwitch with the next highest priority.
    
-   **Cost Optimization**: The system creates instances based on the vCPU unit prices in ascending order.
    
    If the **Billing Method** of the node pool is set to **Spot Instance**, such instances are preferentially created. You can also set the **Percentage Of Pay-as-you-go Instances** parameter. If spot instances cannot be created due to reasons such as insufficient stocks, pay-as-you-go instances are automatically created as a supplement.
    
-   **Distribution Balancing**: The even distribution policy takes effect only when you select multiple vSwitches. This policy ensures that ECS instances are evenly distributed among the zones (the vSwitches) of the scaling group. If they are unevenly distributed due to reasons such as insufficient stocks, you can perform a rebalancing operation.
    

**Use Pay-as-you-go Instances When Spot Instances Are Insufficient**

> You must set the Billing Method parameter to Spot Instance.

After this feature is enabled, if enough spot instances cannot be created due to price or inventory constraints, ACK automatically creates pay-as-you-go instances to meet the required number of ECS instances.

**Enable Supplemental Spot Instances**

> You must set the Billing Method parameter to Spot Instance.

After this feature is enabled, when a system receives a message that spot instances will be reclaimed (5 minutes before reclamation), ACK will attempt to scale out new instances as compensation.

If compensation succeeds, ACK will drain and remove the old nodes from the cluster. If compensation fails, ACK will not drain the old nodes. Active release of spot instances may cause service interruptions. After compensation failure, when inventory becomes available or price conditions are met, ACK will automatically purchase instances to maintain the expected node count. For details, see [Best practices for preemptible instance-based node pools](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/best-practices-for-preemptible-instance-based-node-pools).

To improve compensation success rates, we recommend enabling **Use Pay-as-you-go Instances When Spot Instances Are Insufficient** at the same time.

Expand **Advanced Options (Optional)** and configure ECS tags, taints, and other information.

**Parameter**

**Description**

**ECS Tags**

Add tags to the ECS instances that are automatically added during auto scaling. An ECS instance can have up to 20 tags. To increase the quota limit, submit an application in the [Quota Center console](https://quotas.console.alibabacloud.com/products/tag/quotas). The following tags are automatically added to an ECS node by ACK and Auto Scaling. Therefore, you can add at most 17 tags to an ECS node.

-   The following two ECS tags are added by ACK:
    
    -   `ack.aliyun.com:<Your cluster ID>`
        
    -   `ack.alibabacloud.com/nodepool-id:<Your node pool ID>`
        
-   The following label is added by Auto Scaling: `acs:autoscaling:scalingGroupId:<Your node pool scaling group ID>`.
    

**Note**

-   After you enable auto scaling, the following ECS tags are added to the node pool by default: `k8s.io/cluster-autoscaler:true` and `k8s.aliyun.com:true`.
    
-   The auto scaling component simulates scale-out activities based on node labels and taints. To meet this purpose, the format of node labels is changed to `k8s.io/cluster-autoscaler/node-template/label/Label key:Label value` and the format of taints is changed to `k8s.io/cluster-autoscaler/node-template/taint/Taint key/Taint value:Taint effect`.
    

**Taints**

Add taints to nodes. A **Taint** consists of a **Key**, a **Value**, and an **Effect**. A taint key can be prefixed. If you want to specify a prefixed taint key, add a forward slash (/) between the prefix and the remaining content of the key. For more information, see [Taints and tolerations](https://kubernetes.io/zh/docs/concepts/scheduling-eviction/taint-and-toleration?spm=a2c4g.11186623.0.0.76f068derYLXgN). The following limits apply to taints:

-   **Key**: A key must be 1 to 63 characters in length, and can contain letters, digits, hyphens (-), underscores (\_), and periods (.). A key must start and end with a letter or digit.`[a-z0-9A-Z]`
    
    If you want to specify a prefixed key, the prefix must be a DNS subdomain name. A subdomain name consists of DNS labels that are separated by periods (.), and cannot exceed 253 characters in length. It must end with a forward slash (/). For more information about DNS subdomain names, see [DNS subdomain names](https://kubernetes.io/zh-cn/docs/concepts/overview/working-with-objects/names/#dns-subdomain-names).
    
-   **Value**: A value cannot exceed 63 characters in length, and can contain letters, digits, hyphens (-), underscores (\_), and periods (.). A value must start and end with a letter or digit. You can also leave a value empty.`[a-z0-9A-Z]`
    
-   You can specify the following **Effects** for a taint: **NoSchedule**, **NoExecute**, and **PreferNoSchedule**.
    
    -   **NoSchedule**: If a node has a taint whose **Effect** is **NoSchedule**, the system does not schedule pods to the node.
        
    -   **NoExecute**: Pods that do not tolerate this taint are evicted after this taint is added to a node. Pods that tolerate this taint are not evicted after this taint is added to a node.
        
    -   **PreferNoSchedule**: The system attempts to avoid scheduling pods to nodes with taints that are not tolerated by the pods.
        

**Node Labels**

Add labels to nodes. A label is a key-value pair. A label key can be prefixed. If you want to specify a prefixed label key, add a forward slash (/) between the prefix and the remaining content of the key. The following limits apply to labels:

-   Key: The name must be 1 to 63 characters in length, and can contain letters, digits, hyphens (-), underscores (\_), and periods (.). It must start and end with a letter or a digit.`[a-z0-9A-Z]`
    
    If you want to specify a prefixed label key, the prefix must be a [subdomain name](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-subdomain-names). A subdomain name consists of DNS labels that are separated by periods (.), and cannot exceed 253 characters in length. It must end with a forward slash (/).
    
    **The following prefixes are used by key Kubernetes components and cannot be used in node labels:**
    
    -   `kubernetes.io/`
        
    -   `k8s.io/`
        
    -   Prefixes that end with `kubernetes.io/` or `k8s.io/`. Example: `test.kubernetes.io/`.
        
        The following are the exceptions:
        
        -   `kubelet.kubernetes.io/`
            
        -   `node.kubernetes.io`
            
        -   Prefixes that end with `kubelet.kubernetes.io/`.
            
        -   Prefixes that end with `node.kubernetes.io`.
            
        
    
-   Value: A value cannot exceed 63 characters in length, and can contain letters, digits, hyphens (-), underscores (\_), and periods (.). A value must start and end with a letter or digit. You can also leave a value empty.`[a-z0-9A-Z]`
    

**Set To Unschedulable**

After you select this option, new nodes added to the cluster are set to unschedulable. You can change the status in the node list. This setting takes effect only on nodes newly added to the node pool. It does not take effect on existing nodes.

**CPU Policy**

The [CPU management policy](https://kubernetes.io/docs/tasks/administer-cluster/cpu-management-policies/?spm=5176.2020520152.0.0.49fd16ddxL871D) for kubelet nodes.

-   [None](https://kubernetes.io/zh-cn/docs/tasks/administer-cluster/cpu-management-policies/?spm=5176.2020520152.0.0.49fd16ddxL871D#none-policy): The default policy.
    
-   [Static](https://kubernetes.io/zh-cn/docs/tasks/administer-cluster/cpu-management-policies/?spm=5176.2020520152.0.0.49fd16ddxL871D#static-policy): This policy allows pods with specific resource characteristics on the node to be granted enhanced CPU affinity and exclusivity.
    

**Custom Node Name**

Specify whether to enable **Custom Node Name**. If you enable this feature, the node name, ECS instance name, and ECS instance hostname are changed at the same time.

**Note**

For a Windows instance with a custom node name, its hostname is fixed to its IP address. Hyphens (`-`) are used to replace periods (`.`) in the IP address, and no prefix or suffix is included.

A node name consists of a prefix, the node IP address, and a suffix:

-   A custom node name must be 2 to 64 characters in length. The name must start and end with a lowercase letter or digit.
    
-   The prefix and suffix can contain letters, digits, hyphens (-), and periods (.). The prefix and suffix must start with a letter and cannot end with a hyphen (-) or period (.). The prefix and suffix cannot contain consecutive hyphens (-) or periods (.).
    
-   The prefix is required due to ECS limits and the suffix is optional.
    

For example, if the node IP address is 192.XX.YY.55, the prefix is aliyun.com, and the suffix is test.

-   If the node is a Linux node, the node name, ECS instance name, and ECS instance hostname are all aliyun.com192.XX.YY.55test.
    
-   If the node is a Windows node, the ECS instance hostname is 192-XX-YY-55, and the node name and ECS instance name are aliyun.com192.XX.YY.55test.
    

**Instance Metadata Access Mode**

> This is a whitelist feature. To use it, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm). This feature is supported only for ACK managed clusters

Configure the metadata access mode for ECS instances. You can access the metadata service from within an ECS instance to obtain instance metadata, such as the instance ID, VPC information, and NIC information. For more information, see [Metadata access modes](/help/en/ecs/user-guide/view-instance-metadata/#e5723dd15c22l).

-   **Normal And Enforced Modes**: You can use the normal mode and the enforced mode to access the instance metadata service.
    
-   **Enforced Mode Only**: You can use only the enforced mode to access the instance metadata service. For more information, see [Use the enforced mode to access ECS instance metadata](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/secure-access-to-ecs-instance-metadata).
    

**Pre-defined Custom Data**

> To use this feature, submit an application in the [Quota Center console](https://quotas.console.alibabacloud.com/white-list-products/csk/quotas).

Nodes automatically run predefined scripts before they are added to the cluster. For more information about user-data scripts, see [User-data scripts](/help/en/ecs/user-guide/manage-the-user-data-of-linux-instances#section-lu5-puw-zsj).

For example, if you enter `echo "hello world"`, a node runs the following script:

```
#!/bin/bash
echo "hello world"
[Node initialization script]
```

**User Data**

Nodes automatically run user-data scripts after they are added to the cluster. For more information about user-data scripts, see [User-data scripts](/help/en/ecs/user-guide/manage-the-user-data-of-linux-instances#section-lu5-puw-zsj).

For example, if you enter `echo "hello world"`, a node runs the following script:

```
#!/bin/bash
[Node initialization script]
echo "hello world"
```

**Note**

After you create a cluster or add nodes, the execution of the user-data script on a node may fail. We recommend that you log on to a node and run the `grep cloud-init /var/log/messages` command to view the execution log and check whether the execution succeeds or fails on the node.

**CloudMonitor Agent**

After you install CloudMonitor, you can view the monitoring information about the nodes in the [CloudMonitor console](https://cloudmonitor.console.alibabacloud.com/).

This parameter takes effect only on newly added nodes and does not take effect on existing nodes. If you want to install the CloudMonitor agent on an existing ECS node, go to the [CloudMonitor console](https://cloudmonitor.console.alibabacloud.com/).

**Public IP**

Specify whether to assign an IPv4 address to each node. If you clear the check box, no public IP address is allocated. If you select the check box, you must configure the **Bandwidth Billing Method** and **Peak Bandwidth** parameters.

This parameter takes effect only on newly added nodes and does not take effect on existing nodes. If you want to enable an existing node to access the Internet, you must create an EIP and associate the EIP with the node. For more information, see [Associate an EIP with an ECS instance](/help/en/eip/bind-an-eip-to-a-cloud-resource/#task-bh5-dll-vdb).

**Custom Security Group**

You can select **Basic Security Group** or **Advanced Security Group**, but you can select only one security group type. You cannot modify the security groups of node pools or change the type of security group. For more information about security groups, see [Overview](/help/en/ecs/user-guide/overview-44#concept-o2y-mqw-ydb).

**Important**

-   Each ECS instance supports up to five security groups. Make sure that the quota is sufficient. For more information about security group limits and how to increase the quota limit of security groups for your ECS instance, see [Security groups](/help/en/ecs/user-guide/limitations#SecurityGroupQuota).
    
-   If you select an existing security group, the system does not automatically configure security group rules. This may cause errors when you access the nodes in the cluster. You must manually configure security group rules. For more information about how to manage security group rules, see [Configure security group rules to enforce access control on ACK clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-security-group-rules-to-enforce-access-control-on-ack-clusters#task-2143626).
    

**RDS Whitelist**

Add node IP addresses to the whitelist of an RDS instance.

#### **Step 5: Configure components**

Click **Next:Component Configurations** and configure the components.

**Parameter**

**Description**

**Ingress**

Specify whether to install an Ingress controller. We recommend that you install an Ingress controller if you want to expose Services.

-   **Nginx Ingress**: For more information about NGINX Ingresses, see [Create an NGINX Ingress](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-nginx-ingress-1).
    
-   **ALB Ingress**: For more information about the options for installing ALB Ingresses, see [Manage the ALB Ingress controller](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/manage-the-alb-ingress-controller-1). For more information about how to use ALB Ingresses, see [Create an ALB Ingress](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-and-use-alb-ingress-to-expose-services-to-the-public#task-2098039).
    
-   **MSE Ingress**: For more information about how to use MSE Ingresses to expose Services in ACK clusters, see [Access container services through MSE Ingress](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-mse-ingresses-to-access-applications-in-ack-clusters#task-2229308).
    

**Service Discovery**

Install [NodeLocal DNSCache](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-nodelocal-dnscache#task-2008363), which runs a DNS caching agent to improve the performance and stability of DNS resolution.

**Volume Plug-in**

By default, [CSI](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/csi-overview-1/#concept-2005339) is installed as the volume plug-in. You can also enable **Create Default NAS File Systems And CNFS Dynamic Storage Classes, And Enable The NAS Recycle Bin Feature By Default To Support Fast Data Recovery.** ACK supports Alibaba Cloud disks, NAS file systems, and OSS buckets.

**Container Monitoring**

You can view predefined dashboards and performance metrics using Managed Service for Prometheus. For more information, see [Managed Service for Prometheus](/help/en/ack/serverless-kubernetes/user-guide/enable-prometheus-service).

**Log Service**

You can select an existing SLS project or create a project to collect cluster logs. For more information about how to quickly configure SLS when you create an application, see [Collect log data from containers using Simple Log Service](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/collect-text-logs-from-ack-clusters-using-daemonset-deployed-logtail-agents#task-1797722).

-   **Create Ingress Dashboard:** creates Ingress dashboards in the SLS console to collect the access log of NGINX Ingress. For more information, see [Analyze and monitor the access log of NGINX Ingress](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/analyze-and-monitor-the-access-log-of-nginx-ingress#task-1796525).
    
-   **Install Node-problem-detector And Create Event Center:** adds an event center in the SLS console to collect all events in the cluster in real time. For more information, see [Create and use an event center](/help/en/sls/create-and-use-an-event-center#task-2389213).
    

**Cluster Inspection**

Specify whether to enable the [cluster inspection feature](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-the-cluster-inspection-feature/#task-2199360) for intelligent O&M. You can enable this feature to periodically check the resource quotas, resource usage, and component versions of a cluster and identify potential risks in the cluster.

#### **Step 6: Confirm configurations and billing information**

Click **Next: Confirm**.

On the **Confirm** page, confirm the cluster configuration, including the feature configurations, resource billing details, and the results of the cloud service dependency check. Then, read and agree to the terms of service.

You can view an overview of the cluster fees at the bottom of the page. You can also view the billing documentation for ACK and other products. For more information, see [Billing overview](/help/en/ack/ack-managed-and-ack-dedicated/product-overview/ack-pro-cluster-billing) and [Cloud service fees](/help/en/ack/ack-managed-and-ack-dedicated/product-overview/billing-of-cloud-services).

**Note**

A cluster that contains multiple nodes takes about 10 minutes to create.

On the **Confirm** step, you can also click **Console-to-Code** in the top-left corner to create Terraform or SDK sample parameters that match your current cluster's configuration.

### **API**

#### **Debugging entry point**

[CreateCluster](https://api.alibabacloud.com/api/CS/2015-12-15/CreateCluster)

#### **Sample request**

The following is a sample request to create an ACK dedicated cluster. For a complete list of parameters, see [CreateCluster](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-createcluster).

```
POST /clusters 
<Common request headers>
{
    "cluster_type": "Kubernetes",    // The type of the cluster. Set the value to Kubernetes to create an ACK dedicated cluster. #required
    "name": "ACK_dedicated_cluster",
    "region_id": "cn-hongkong",      // The region where the cluster is deployed. In this example, the cluster is deployed in the China (Hong Kong) region. #required
    "kubernetes_version": "1.32.1-aliyun.1",    // The version of the cluster. Use the latest version. 
    "snat_entry": true,                         // Configure an SNAT rule for the VPC to enable public network access for the cluster.
    "endpoint_public_access": false,            // Do not enable public access to the API server.
    "cloud_monitor_flags": false,               // Do not install the CloudMonitor agent in the cluster.
    "deletion_protection": false,               // Cluster deletion protection is not enabled.
    "proxy_mode": "ipvs",                       // Select the high-performance IPVS mode for kube-proxy.
    "timezone": "Asia/Shanghai",
    "tags": [],
    "addons": [                                 // The components to be installed in the cluster.
        {
            "name": "terway-eniip",             // The network type of the cluster is Terway. This cannot be changed after the cluster is created.
            "config": "{\"IPVlan\":\"false\",\"NetworkPolicy\":\"false\",\"ENITrunking\":\"false\"}"
        },
        {
            "name": "csi-plugin"
        },
        {
            "name": "csi-provisioner"
        },
        {
            "name": "storage-operator",
            "config": "{\"CnfsOssEnable\":\"false\",\"CnfsNasEnable\":\"false\"}"
        },
        {
            "name": "nginx-ingress-controller",
            "disabled": true
        }
    ],
    "node_port_range": "30000-32767",
    "pod_vswitch_ids": [                         // For a Terway cluster, you need to specify the vSwitches for pods because each pod occupies a machine IP address.
        "vsw-j6cwz95vspl56gl******",
        "vsw-j6c1tgut51ude2v******"
    ],
    "login_password": "******",
    "charge_type": "PostPaid",
    "master_instance_charge_type": "PostPaid",
    "cpu_policy": "none",
    "service_account_issuer": "https://kubernetes.default.svc",
    "api_audiences": "https://kubernetes.default.svc",
    "master_count": 3,                         // Set the number of master nodes to 3.
    "master_vswitch_ids": [                    // The list of vSwitches for the master nodes.
        "vsw-j6cwz95vspl56gl******",
        "vsw-j6c1tgut51ude2v******",
        "vsw-j6c1tgut51ude2v******"
    ],
    "master_instance_types": [                 // The instance types for the master nodes.
        "ecs.u1-c1m2.xlarge",
        "ecs.c7.xlarge",
        "ecs.c7.xlarge"
    ],
    "master_system_disk_category": "cloud_essd",      // The system disk for the master nodes is an ESSD.
    "master_system_disk_size": 120,                   // The system disk size is 120 GiB.
    "master_system_disk_performance_level": "PL1",    // The maximum IOPS of a single system disk is 50,000.
    "vpcid": "vpc-j6c6njo385se80n******",             // The VPC ID of the cluster must be determined during network planning and cannot be changed after creation. #required
    "worker_vswitch_ids": [
        "vsw-j6cwz95vspl56gl******",
        "vsw-j6c1tgut51ude2v******"
    ],
    "is_enterprise_security_group": true,
    "ip_stack": "ipv4",
    "service_cidr": "172.16.xx.xx/16",
    "nodepools": [                                                 
        {
            "nodepool_info": {
                "name": "default-nodepool"
            },
            "scaling_group": {
                "system_disk_category": "cloud_essd",
                "system_disk_size": 120,
                "system_disk_performance_level": "PL0",
                "system_disk_encrypted": false,
                "data_disks": [         
                    {
                        "category": "cloud_auto",
                        "size": 200,
                        "encrypted": "false",
                        "bursting_enabled": false
                    }
                ],
                "tags": [],
                "soc_enabled": false,
                "security_hardening_os": false,
                "vswitch_ids": [
                    "vsw-j6cwz95vspl56gl******",
                    "vsw-j6c1tgut51ude2v******"
                ],
                "instance_types": [
                    "ecs.g6.xlarge"
                ],
                "instance_patterns": [],
                "login_password": "******",
                "instance_charge_type": "PostPaid",
                "security_group_ids": [],
                "platform": "AliyunLinux",
                "image_id": "aliyun_3_x64_20G_alibase_20241218.vhd",
                "image_type": "AliyunLinux3",
                "desired_size": 3,               // Create a node pool with an expected node count of 3.
                "multi_az_policy": "BALANCE"
            },
            "kubernetes_config": {
                "cpu_policy": "none",
                "cms_enabled": false,
                "unschedulable": false,
                "runtime": "containerd",        // The container runtime is containerd 1.6.36. This cannot be changed after the cluster is created.
                "runtime_version": "1.6.36"
            }
        }
    ]
}
```

#### **Key parameter descriptions**

When you call the CreateCluster operation to create an ACK dedicated cluster, take note of the following parameters:

**Parameter**

**Description**

**Sample configuration**

cluster\_type

The type of the cluster. When you create an ACK dedicated cluster, you must set this parameter to `Kubernetes`.

"cluster\_type": "Kubernetes"

### **Terraform**

For more information, see [Create an ACK dedicated cluster using Terraform](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/use-terraform-to-create-an-ack-proprietary-cluster).

### **SDK**

For more information, see [Use the Java SDK](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/java-sdk-call-example).

### **CLI**

For more information, see [Create an ACK cluster using the CLI](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/create-a-cluster-2).

## **Related operations**

-   View basic cluster information
    
    On the **Clusters** page, find the cluster that you want to manage and click **Details** in the **Actions** column. Then, click the **Basic Information** and **Connection Information** tabs to view the details of the cluster.
    
    -   **API server Public Endpoint**: The public endpoint of the Kubernetes API server. You can use this endpoint to manage the cluster from your on-premises machine using a tool such as kubectl.
        
        The **Bind** and **Unbind** EIP operations:
        
        -   Bind EIP: You can bind an existing EIP or create and bind a new EIP.
            
            Binding an EIP causes a brief restart of the API server. We recommend that you do not perform operations on the cluster during the restart.
            
        -   Unbind EIP: After you unbind the EIP, the API server is no longer accessible over the internet.
            
            Unbinding an EIP causes a brief restart of the API server. We recommend that you do not perform operations on the cluster during the restart.
            
    -   **API server Internal Endpoint**: The internal endpoint of the Kubernetes API server. This endpoint is accessible only from within the cluster's VPC. This endpoint is the IP address of the internal-facing Server Load Balancer (SLB) instance.
        
-   View cluster logs
    
    Find the cluster that you want to manage and choose **More > Operations > View Logs** in the **Actions** column to go to the **Log Center** page, where you can view the cluster logs.
    
-   View node information of a cluster
    
    You can [obtain the kubeconfig file of a cluster and use kubectl to connect to the cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster#task-ubf-lhg-vdb) and then run the `kubectl get node` command to view the node information of the cluster.
    

## **Quotas and limits**

If the cluster size is large or the account has a large number of resources, follow the quotas and limits specified for ACK clusters. For more information, see [Quotas and limits](/help/en/ack/product-overview/limits).

-   Limits: ACK configuration limits, such as account balance and capacity limit of a cluster, which is the maximum capacity of different Kubernetes resources in a cluster.
    
-   Quota limits and how to increase quotas: Quota limits for ACK clusters and the quota limits of cloud services that ACK depends on, such as ECS or VPC. If you want to increase the quota, see the related topics.
