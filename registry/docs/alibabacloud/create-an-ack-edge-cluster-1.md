This topic describes how to create an ACK Edge cluster in the ACK console. You can use ACK Edge clusters to enable cloud-edge collaboration.

## Prerequisites

-   [ACK is activated](/help/en/ack/ack-managed-and-ack-dedicated/getting-started/quick-start-for-first-time-users#section-l7q-sqk-k17).
    
-   [Auto scaling is enabled](https://www.alibabacloud.com/zh/product/auto-scaling).
    
-   [Resource Access Management (RAM)](https://www.alibabacloud.com/zh/product/ram) is activated.
    

## Limits

**Item**

**Limit**

**Links for increasing quota limits/references**

Networks

ACK clusters support only VPCs.

[What is a VPC?](/help/en/vpc/what-is-vpc)

Cloud resources

ECS

The pay-as-you-go and subscription billing methods are supported. After an ECS instance is created, you can change its billing method from pay-as-you-go to subscription in the ECS console.

[Change the billing method of an ECS instance from pay-as-you-go to subscription](/help/en/ecs/change-the-billing-method-of-an-ecs-instance-from-pay-as-you-go-to-subscription-1#PAYGtoSubs-china)

VPC route entries

By default, you can add at most 200 route entries to the VPC of an ACK cluster that runs Flannel. VPCs of ACK clusters that run Terway do not have this limit. If you want to add more route entries to the VPC of your ACK cluster, request a quota increase for the VPC.

[Quota Center](https://quotas.console.alibabacloud.com/products/vpc/quotas)

Security groups

By default, you can create at most 100 security groups with each account.

[Security groups](/help/en/ecs/user-guide/limitations#SecurityGroupQuota1)

SLB instances

By default, you can create at most 60 pay-as-you-go SLB instances with each account.

[Quota Center](https://quotas.console.alibabacloud.com/products/slb/quotas)

EIP

By default, you can create at most 20 EIPs with each account.

[Quota Center](https://quotas.console.alibabacloud.com/products/eip/quotas)

## Step 1: Log on to the ACK console

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  Move the pointer over **All Resources** at the top of the page and select the resource group that you want to use. After you select a resource group, virtual private clouds (VPCs) and vSwitches that belong to the resource group are displayed. When you create a cluster, only VPCs and vSwitches that belong to the specified resource group are displayed.![资源组](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9948734861/p127165.png)
    
3.  On the **Clusters** page, click **Create Kubernetes Cluster**.
    
4.  On the **Create Cluster** page, click the **ACK Edge** tab.
    

## Step 2: Configure a cluster

On the **ACK Edge** page, configure the basic and advanced settings for the cluster.

### **Basic settings**

**Parameter**

**Description**

**Cluster Name**

The name of the cluster. The name must be 1 to 63 characters in length, and can contain digits, letters, hyphens (-), and underscores (\_). The name must start with a letter or digit.

**Cluster Specification**

Select a cluster type. You can select **Professional** or **Basic**. We recommend that you use ACK Pro clusters in the production environment and test environment. ACK Basic clusters can meet the learning and testing needs of individual users.

**Region**

The [region](/help/en/ack/product-overview/supported-regions) of the cluster.

**Kubernetes Version**

The supported Kubernetes versions. For more information, see [Kubernetes versions supported by ACK](/help/en/ack/product-overview/release-notes-for-kubernetes-versions).

**Maintenance Window**

ACK automatically performs automated O&M operations on managed node pools within the maintenance window. The operations include runtime updates and automatic fixes for CVE vulnerabilities. You can click **Set** to configure the detailed maintenance policies.

### Network settings

**VPC**

Configure the VPC of the cluster. You can specify a **zone** to automatically create a VPC. You can also select an existing VPC in the VPC list.

**Configure SNAT**

If the VPC that you created or selected cannot access the Internet, you can select this check box. This way, ACK automatically creates a NAT gateway and configures SNAT rules.

If you do not select this check box, you can manually configure a NAT gateway and configure SNAT rules to ensure that instances in the VPC can access the Internet. For more information, see [Create and manage an Internet NAT gateway](/help/en/nat-gateway/user-guide/use-internet-nat-gateway-for-public-network-access#task-491095).

**vSwitch**

Select an existing vSwitch from the vSwitch list or click **Create vSwitch** to create a vSwitch. The control plane and the default node pool use the vSwitch that you select. We recommend that you select multiple vSwitches in different zones to ensure high availability.

**Security Group**

> When **VPC** is set to **Select Existing VPC**, you can select the **Select Existing Security Group** option.

You can select **Create Basic [Security Group](/help/en/ecs/user-guide/overview-44#concept-o2y-mqw-ydb)**, **Create Advanced [Security Group](/help/en/ecs/user-guide/overview-44#concept-o2y-mqw-ydb)**, or **Select Existing [Security Group](/help/en/ecs/user-guide/overview-44#concept-o2y-mqw-ydb)**.

-   By default, automatically created security groups allow all outbound traffic. When you modify the security group for business purposes, make sure that traffic destined for `100.64.0.0/10` is allowed. This CIDR block is used to access other Alibaba Cloud services to pull images and query basic ECS information.
    
-   If you select an existing security group, the system does not automatically configure security group rules. This may cause errors when you access the nodes in the cluster. You must manually configure security group rules. For more information, see [Configure security groups for clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-security-group-rules-to-enforce-access-control-on-ack-clusters#task-2143626).
    

**Access to API Server**

**Important**

-   If you delete the default CLB instance, you cannot access the API server.
    
-   Starting from December 1, 2024, an instance fee will be charged for newly created CLB instances. For more information, see [CLB billing adjustments](/help/en/slb/product-overview/announcement-on-adjustment-of-traditional-load-balancing-clb-billing-items).
    

**Warning**

-   Edge nodes interact with the API server in the cloud over the Internet. We recommend that you select **Expose API Server with EIP**. Edge nodes use elastic IP addresses (EIPs) to access the Internet. If you forget to select this check box when you create an edge node, you can bind the EIP to the API server after the cluster is created. For more information, see [Control public access to the API server of a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/control-public-access-to-the-api-server-of-a-cluster).
    
-   You cannot change or unbind an EIP from an ACK Edge cluster.
    

****Network Plug-in****

Select a network plug-in. Flannel and Terway-edge are supported. For more information, see [Network management overview](/help/en/ack/ack-edge/user-guide/network-management-overview/) and [How to choose a network plug-in](/help/en/ack/ack-edge/user-guide/how-to-choose-a-network-plug-in).

-   **Flannel**: a simple and stable open source CNI plug-in. Flannel is an overlay network plug-in that uses the Virtual Extensible LAN (VXLAN) mode.
    
-   **Terway-edge**: a network plug-in developed by ACK.
    
    -   Allocate Alibaba Cloud ENIs to containers in the cloud.
        
    -   On the edge side, the container is assigned an address from a pre-configured CIDR block and forwarded through host routing.
        

**Pod vSwitch**

If you select **Terway-edge** as the network plug-in, you must allocate vSwitches to pods in the cloud node pool. Each pod vSwitch corresponds to a vSwitch of a worker node. The vSwitch of the pod and the vSwitch of the worker node must be in the same zone.

**Edge Container CIDR Block**

The container address is assigned from the CIDR block of the container.

-   If you select the Flannel network plug-in, the IP addresses of containers in the cloud and containers at the edge are assigned from the CIDR block.
    
-   If you set the Terway network plug-in, the IP addresses of containers at the edge are assigned from the CIDR block.
    

****Number of Pods per Node****

The maximum number of pods that can be stored on a single node.

**Service CIDR**

Specify the CIDR block of Services in the cluster. The Service CIDR block must not overlap with the CIDR block of the VPC, the CIDR blocks of the ACK clusters in the VPC, or the pod CIDR block. The Service CIDR block cannot be modified after it is specified. For more information about how to plan CIDR blocks for a cluster, see [Network planning of an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/kubernetes-cluster-network-planning#concept-izq-sg4-vdb).

### **Advanced settings**

Click **Advanced Options (Optional)** to configure the forwarding mode for the cluster.

**Parameter**

**Description**

**Forwarding Mode**

iptables and IP Virtual Server (IPVS) are supported.

-   iptables is a mature and stable kube-proxy mode. In this mode, service discovery and load balancing for Kubernetes Services are configured by using iptables rules. The performance of this mode depends on the size of the Kubernetes cluster. This mode is suitable for Kubernetes clusters that manage a small number of Services.
    
-   IPVS is a high-performance kube-proxy mode. In this mode, service discovery and load balancing for Kubernetes Services are configured by the IPVS module of Linux. This mode is suitable for clusters that manage a large number of Services. We recommend that you use this mode in scenarios where high-performance load balancing is required.
    

Click **Advanced Options (Optional)** to configure the advanced settings for the cluster.

**View advanced settings**

**Parameter**

**Description**

**Deletion Protection**

We recommend that you enable deletion protection in the console or by using API to prevent clusters from being accidentally released.

**Resource Group**

The [resource group](/help/en/ecs/user-guide/resource-groups#concept-fdn-wtm-cgb) to which the cluster belongs. Each resource can belong to only one resource group. You can regard a resource group as a project, an application, or an organization based on your business scenarios.

**Labels**

Add a label to the cluster. Labels are used to identify cloud resources. A label is a key-value pair. The key is required and must be unique. A key must not exceed 64 characters in length. The value is optional. A value must not exceed 128 characters in length.

-   A key or a value cannot start with `aliyun`, `acs:`, `https://`, or `http://`. Keys and values are not case-sensitive.
    
-   The keys of labels that are added to the same resource must be unique. If you add a label with a used key, the label overwrites the label that uses the same key.
    
-   If you add more than 20 labels to a resource, all labels become invalid. You must remove the excessive labels so that the remaining labels can take effect.
    

**Secret Encryption**

If you select **Select Key**, you can use a key that is created in the Key Management Service (KMS) console to encrypt Kubernetes Secrets. For more information about how to configure Secret encryption, see [Use KMS to encrypt secrets in an ACK Edge cluster](/help/en/ack/ack-edge/security-and-compliance/use-kms-to-encrypt-kubernetes-secrets-1).

**RRSA OIDC**

You can enable the RAM Roles for Service Accounts (RRSA) feature for the cluster to implement access control on different pods that are deployed in a cluster. This implements fine-grained API permission control on pods. For more information, see [Use RRSA to authorize different pods to access different cloud services](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-rrsa-to-authorize-pods-to-access-different-cloud-services).

## **Step 3: Configure a node pool**

**Important**

You must configure at least two worker nodes in the on-cloud node pool of an ACK Edge cluster to deploy components.

### Node pool settings

**Parameter**

**Description**

**Node Pool Name**

Specify a node pool name.

**Container Runtime**

Specify the **container runtime** based on the **Kubernetes version**.

-   **containerd** (recommended): supports all Kubernetes versions.
    
-   **docker**: supports Kubernetes 1.22 and earlier.
    

Managed node pool settings

**Managed Node Pool**

Managed node pools provided by ACK support auto repair and auto CVE patching. This significantly reduces your O&M workload and improves node security. You can click **Set** to configure the detailed maintenance policies.

**Auto Recovery Rule**

> This parameter is available after you select Enable for the managed node pool feature.

After you select this option, ACK automatically monitors the status of nodes in the node pool. When exceptions occur on a node, ACK automatically runs auto repair tasks on the node. If you select **Restart Faulty Node**, ACK automatically restarts faulty nodes to resolve node exceptions. In this case, ACK may perform node draining and system disk replacement on faulty nodes. For more information about the conditions that trigger auto repair and auto repair events, see [Enable auto repair for nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/auto-repair).

**Auto Update Rule**

> This parameter is available after you select Enable for the managed node pool feature.

After you select Automatically Update Kubelet and Containerd, the system automatically updates the kubelet when a new version is available. For more information, see [Update a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-pool-updates).

**Auto CVE Patching (OS)**

> This parameter is available after you select Enable for the managed node pool feature.

You can configure ACK to automatically patch high-risk, medium-risk, and low-risk vulnerabilities. For more information, see [Patch OS CVE vulnerabilities for node pools](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cve-patching).

Some patches take effect only after you restart the ECS instances. After you enable **Restart Nodes if Necessary to Patch CVE Vulnerabilities**, ACK automatically restarts nodes on demand. If you do not select this option, you must manually restart nodes.

**Maintenance Window**

> This parameter is available after you select Enable for the managed node pool feature.

Image updates, runtime updates, and Kubernetes version updates are automatically performed during the maintenance window.

Click **Set**. In the **Maintenance Window** dialog box, set the **Cycle**, **Started At**, and **Duration** parameters and click **OK**.

### Instance and image settings

**Parameter**

**Description**

**Billing Method**

The default billing method used when ECS instances are scaled in a node pool. You can select **Pay-As-You-Go**, **Subscription**, or **Preemptible Instance**.

-   If you select the **Subscription** billing method, you must configure the **Duration** parameter and choose whether to enable **Auto Renewal**.
    
-   **Preemptible Instance**: ACK supports only **Preemptible Instance** with a protection period. You must also configure the **Upper Price Limit of Current Instance Spec** parameter.
    
    If the real-time market price of an instance type that you select is lower than the value of this parameter, a [preemptible instance](/help/en/ecs/user-guide/what-is-a-spot-instance#concept-t3p-gv2-5db) of this instance type is created. After the protection period (1 hour) ends, the system checks the spot price and resource availability of the instance type every 5 minutes. If the real-time market price exceeds your bid price or if the resource inventory is insufficient, the preemptible instance is released. For more information, see [Best practices for preemptible instance-based node pools](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/best-practices-for-preemptible-instance-based-node-pools#task-2188264).
    

To ensure that all nodes in a node pool use the same billing method, ACK does not allow you to change the billing method of a node pool from pay-as-you-go or subscription to preemptible instances. For example, you cannot switch the billing method of a node pool between pay-as-you-go or subscription and preemptible instances.

Instance-related parameters

Select the ECS instances used by the worker node pool based on instance types or attributes. You can filter [instance families](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb) by attributes such as vCPU, memory, instance family, and architecture. For more information about how to configure nodes, see [ECS specification recommendations for ACK clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/select-ecs-instances-to-create-the-master-and-worker-nodes-of-an-ack-cluster).

When the node pool is scaled out, ECS instances of the selected instance types are created. The scaling policy of the node pool determines which instance types are used to create new nodes during scale-out activities. Select multiple instance types to improve the success rate of node pool scale-out operations.

If the node pool fails to be scaled out because the instance types are unavailable or the instances are out of stock, you can specify more instance types for the node pool. The ACK console automatically evaluates the scalability of the node pool. You can [check the scalability of the node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/check-the-scalability-of-a-node-pool#task-2102754) when you create the node pool or after you create the node pool.

If you select only GPU-accelerated instances, you can select **Enable GPU Sharing** on demand. For more information, see [cGPU overview](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cgpu-overview/).

**Note**

To use advanced features, such as logging, monitoring, and reverse tunneling in ACK Edge clusters, you must deploy the related components in the cloud. Therefore, you must create at least one ECS instance as a worker node.

**Operating System**

-   **Public Image**: Use public OS images, such as Alibaba Cloud Linux 3 ACK-optimized, [ContainerOS](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/containeros-overview/), [Alibaba Cloud Linux 3](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-alibaba-cloud-linux-3), and Ubuntu public images provided by ACK. For more information, see [OS images](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/overview-of-os-images/#task-2286366).
    
-   **Custom Image**: Use custom OS images. For more information, see [How do I create a custom image from an ECS instance and use the image to create a node?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool#7e6cca52c4ze3)
    

**Note**

-   After you change the OS image of the node pool, the change takes effect only on newly added node. The existing nodes in the node pool still use the original OS image. For more information about how to upgrade or change the operating system, see [Change the operating system](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/replace-the-operating-system).
    
-   To ensure that all nodes in the node pool use the same OS image, ACK allows you to only update the node OS image to the latest version. ACK does not allow you to change the type of OS image.
    

**Security Hardening**

Enable security hardening for the cluster. You cannot modify this parameter after the cluster is created.

-   **Disable**: disables security hardening for ECS instances.
    
-   **MLPS Security Hardening**: Alibaba Cloud provides baselines and the baseline check feature to help you check the compliance of Alibaba Cloud Linux 2 images and Alibaba Cloud Linux 3 images with the level 3 standards of Multi-Level Protection Scheme (MLPS) 2.0. MLPS Security Hardening enhances the security of OS images to meet the requirements of GB/T 22239-2019 Information Security Technology - Baseline for Classified Protection of Cybersecurity without compromising the compatibility and performance of the OS images. For more information, see [ACK security hardening based on MLPS](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/ack-reinforcement-based-on-classified-protection#task-2014217).
    
    **Important**
    
    After you enable MLPS Security Hardening, remote logons through SSH are prohibited for root users. You can use Virtual Network Computing (VNC) to log on to the OS from the ECS console and create regular users that are allowed to log on through SSH. For more information, see [Connect to an instance by using VNC](/help/en/ecs/user-guide/log-on-to-an-instance-by-using-vnc#concept-sdk-1jx-wdb).
    
-   **OS Security Hardening**: You can enable Alibaba Cloud Linux Security Hardening only when the system image is an Alibaba Cloud Linux 2 or Alibaba Cloud Linux 3 image.
    

**Logon Type**

-   **Key Pair**: Alibaba Cloud [SSH key pairs](/help/en/ecs/user-guide/ssh-key-pairs/) provide a secure and convenient method to log on to ECS instances. An SSH key pair consists of a public key and a private key. SSH key pairs support only Linux instances.
    
    Configure the **Username** (select **root** or **ecs-user** as the username) and the **Key Pair** parameters.
    
-   **Password**: The password must be 8 to 30 characters in length, and can contain letters, digits, and special characters.
    
    Configure the **Username** (select **root** or **ecs-user** as the username) and the Password parameters.
    

### Volume settings

**Parameter**

**Description**

**System Disk**

**[ESSD AutoPL](/help/en/ecs/user-guide/essd-autopl-disks#concept-2156400)**, **[Enterprise SSD (ESSD)](/help/en/ecs/user-guide/essds)**, **ESSD Entry**, **Standard SSD**, and **Ultra Disk** are supported. The types of system disks that you can select vary based on the [instance families](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb) that you select. [Disk](/help/en/ecs/user-guide/elastic-block-storage-devices) types that are not displayed in the drop-down list are not supported by the instance types that you select.

**ESSD custom performance and encryption**

-   If you select **Enterprise SSD (ESSD)**, you can set a custom performance level. You can select higher performance levels (PLs) for ESSDs with larger storage capacities. For example, you can select PL 2 for an ESSD with a storage capacity of more than 460 GiB. You can select PL 3 for an ESSD with a storage capacity of more than 1,260 GiB. For more information, see [Capacity and PLs](/help/en/ecs/user-guide/essds#singledisk).
    
-   You can select **Encryption** only if you set the system disk type to **Enterprise SSD (ESSD)**. By default, the **default service CMK** is used to encrypt the system disk. You can also use an existing CMK generated by using Bring Your Own Key (BYOK) in KMS.
    

You can select **More System Disk Types** and select a disk type other than the current one in the **System Disk** section to improve the success rate of system disk creation. The system will attempt to create a system disk based on the specified disk types in sequence.

**Data Disk**

**[ESSD AutoPL](/help/en/ecs/user-guide/essd-autopl-disks#concept-2156400)**, **[Enterprise SSD (ESSD)](/help/en/ecs/user-guide/essds)**, **ESSD Entry**, **SSD**, and **Ultra Disk** are supported. The data disk types that you can select vary based on the [instance families](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb) that you select. [Disk](/help/en/ecs/user-guide/elastic-block-storage-devices) types that are not displayed in the drop-down list are not supported by the instance types that you select.

**ESSD AutoPL Disk**

-   Performance provision: The performance provision feature allows you to configure provisioned performance settings for ESSD AutoPL disks to meet storage requirements that exceed the baseline performance without the need to extend the disks.
    
-   Performance burst: The performance burst feature allows ESSD AutoPL disks to burst their performance when spikes in read/write workloads occur and reduce the performance to the baseline level at the end of workload spikes.
    

**Enterprise SSD (ESSD)**

Configure a custom performance level. You can select higher PLs for ESSDs with larger storage capacities. For example, you can select PL 2 for an ESSD with a storage capacity of more than 460 GiB. You can select PL 3 for an ESSD with a storage capacity of more than 1,260 GiB. For more information, see [Capacity and PLs](/help/en/ecs/user-guide/essds#singledisk).

-   You can select **Encryption** for all disk types when you specify the type of data disk. By default, the **default service CMK** is used to encrypt the data disk. You can also use an existing CMK generated by using BYOK in KMS.
    
-   You can also use snapshots to create data disks in scenarios where container image acceleration and fast loading of large language models (LLMs) are required. This improves the system response speed and enhances the processing capability.
    
-   Make sure that a data disk is mounted to `/var/lib/container` on each node, and `/var/lib/kubelet` and `/var/lib/containerd` are mounted to the `/var/lib/container`. For other data disks on the node, you can perform the [initialization](/help/en/ecs/user-guide/overview-27) operation and customize their mount directories. For more information, see [Can I mount a data disk to a custom directory in an ACK node pool?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-management#77df5d38f07vu)
    

**Note**

Up to 64 data disks can be attached to an ECS instance. The number of disks that can be attached to an ECS instance varies based on the instance type. To query the maximum number of data disks supported by each instance type, call the [DescribeInstanceTypes](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinstancetypes) operation and query the DiskQuantity parameter in the response.

### Number of instances

**Parameter**

**Description**

**Expected Number of Nodes**

The expected number of nodes in the node pool. You can modify the Expected Nodes parameter to adjust the number of nodes in the node pool. The node pool must contain at least two nodes.

### Advanced options

Click **Advanced Options (Optional)** and configure the node scaling policy.

**Parameter**

**Description**

**Scaling Policy**

-   **Priority**: The system scales the node pool based on the priorities of the **vSwitches** that you select for the node pool. The ones you select are displayed in descending order of priority. If Auto Scaling fails to create ECS instances in the zone of the vSwitch with the highest priority, Auto Scaling attempts to create ECS instances in the zone of the vSwitch with the next highest priority.
    
-   **Cost Optimization**: The system creates instances based on the vCPU unit prices in ascending order.
    
    If the **Billing Method** of the node pool is set to **Preemptible Instance**, such instances are preferentially created. You can also set the **Percentage of Pay-as-you-go Instances** parameter. If preemptible instances cannot be created due to reasons such as insufficient stocks, pay-as-you-go instances are automatically created as a supplement.
    
-   **Distribution Balancing**: The even distribution policy takes effect only when you select multiple vSwitches. This policy ensures that ECS instances are evenly distributed among the zones (the vSwitches) of the scaling group. If they are unevenly distributed due to reasons such as insufficient stocks, you can perform a rebalancing operation.
    

**Use Pay-as-you-go Instances When Preemptible Instances Are Insufficient**

> You must set the Billing Method parameter to Preemptible Instance.

After this feature is enabled, if enough preemptible instances cannot be created due to price or inventory constraints, ACK automatically creates pay-as-you-go instances to meet the required number of ECS instances.

**Enable Supplemental Preemptible Instances**

> You must set the Billing Method parameter to Preemptible Instance.

After this feature is enabled, when a system receives a message that preemptible instances are reclaimed, the node pool with auto scaling enabled attempts to create new instances to replace the reclaimed preemptible ones.

Click **Advanced Options (Optional)** and configure ECS tags and taints.

**View advanced settings**

**Parameter**

**Description**

**ECS Tags**

Add tags to the ECS instances that are automatically added during auto scaling. Tag keys must be unique. A key cannot exceed 128 characters in length. Keys and values cannot start with `aliyun` or `acs:`. Keys and values cannot contain `https://` or `http://`.

An ECS instance can have up to 20 tags. To increase the quota limit, submit an application in the [Quota Center console](https://quotas.console.alibabacloud.com/products/tag/quotas). The following tags are automatically added to an ECS node by ACK and Auto Scaling. Therefore, you can add at most 17 tags to an ECS node.

-   The following two ECS tags are added by ACK:
    
    -   `ack.aliyun.com:<Cluster ID>`
        
    -   `ack.alibabacloud.com/nodepool-id:<Node pool ID>`
        
-   The following label is added by Auto Scaling: `acs:autoscaling:scalingGroupId:<Scaling group ID>`.
    

**Note**

-   After you enable auto scaling, the following ECS tags are added to the node pool by default: `k8s.io/cluster-autoscaler:true` and `k8s.aliyun.com:true`.
    
-   The auto scaling component simulates scale-out activities based on node labels and taints. To meet this purpose, the format of node labels is changed to `k8s.io/cluster-autoscaler/node-template/label/Label key:Label value` and the format of taints is changed to `k8s.io/cluster-autoscaler/node-template/taint/Taint key/Taint value:Taint effect`.
    

**Taints**

Add taints to nodes. A **taint** consists of a **key**, a **value**, and an **effect**. A taint key can be prefixed. If you want to specify a prefixed taint key, add a forward slash (/) between the prefix and the remaining content of the key. For more information, see [Taints and tolerations](https://kubernetes.io/zh/docs/concepts/scheduling-eviction/taint-and-toleration?spm=a2c4g.11186623.0.0.76f068derYLXgN). The following limits apply to taints:

-   **Key**: A key must be 1 to 63 characters in length, and can contain letters, digits, hyphens (-), underscores (\_), and periods (.). A key must start and end with a letter or digit.
    
    If you want to specify a prefixed key, the prefix must be a subdomain name. A subdomain name consists of DNS labels that are separated by periods (.), and cannot exceed 253 characters in length. It must end with a forward slash (/). For more information about subdomain names, see [DNS subdomain names](https://kubernetes.io/zh-cn/docs/concepts/overview/working-with-objects/names/#dns-subdomain-names).
    
-   **Value**: A value cannot exceed 63 characters in length, and can contain letters, digits, hyphens (-), underscores (\_), and periods (.). A value must start and end with a letter or digit. You can also leave a value empty.
    
-   You can specify the following **effects** for a taint: **NoSchedule**, **NoExecute**, and **PreferNoSchedule**.
    
    -   **NoSchedule**: If a node has a taint whose **effect** is **NoSchedule**, the system does not schedule pods to the node.
        
    -   **NoExecute**: Pods that do not tolerate this taint are evicted after this taint is added to a node. Pods that tolerate this taint are not evicted after this taint is added to a node.
        
    -   **PreferNoSchedule**: The system attempts to avoid scheduling pods to nodes with taints that are not tolerated by the pods.
        

**Node Labels**

Add labels to nodes. A label is a key-value pair. A label key can be prefixed. If you want to specify a prefixed label key, add a forward slash (/) between the prefix and the remaining content of the key. The following limits apply to labels:

-   Key: The name must be 1 to 63 characters in length, and can contain letters, digits, hyphens (-), underscores (\_), and periods (.). It must start and end with a letter or a digit.
    
    If you want to specify a prefixed label key, the prefix must be a [subdomain name](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-subdomain-names). A subdomain name consists of DNS labels that are separated by periods (.), and cannot exceed 253 characters in length. It must end with a forward slash (/).
    
    **The following prefixes are used by key Kubernetes components and cannot be used in node labels:**
    
    -   `kubernetes.io/`
        
    -   `k8s.io/`
        
    -   Prefixes that end with `kubernetes.io/` or `k8s.io/`. Example: `test.kubernetes.io/`.
        
        However, you can still use the following prefixes:
        
        -   `kubelet.kubernetes.io/`
            
        -   `node.kubernetes.io`
            
        -   Prefixes that end with `kubelet.kubernetes.io/`.
            
        -   Prefixes that end with `node.kubernetes.io`.
            
        
    
-   Value: A value cannot exceed 63 characters in length, and can contain letters, digits, hyphens (-), underscores (\_), and periods (.). A value must start and end with a letter or digit. You can also leave a value empty.
    

**Set to Unschedulable**

After you select this option, new nodes added to the cluster are set to unschedulable. You can change the status in the node list. This setting takes effect only on nodes newly added to the node pool. It does not take effect on existing nodes.

**CPU Policy**

The [CPU management policy](https://kubernetes.io/docs/tasks/administer-cluster/cpu-management-policies/?spm=5176.2020520152.0.0.49fd16ddxL871D) for kubelet nodes.

-   [None](https://kubernetes.io/zh-cn/docs/tasks/administer-cluster/cpu-management-policies/?spm=5176.2020520152.0.0.49fd16ddxL871D#none-policy): The default CPU management policy.
    
-   [Static](https://kubernetes.io/zh-cn/docs/tasks/administer-cluster/cpu-management-policies/?spm=5176.2020520152.0.0.49fd16ddxL871D#static-policy): This policy allows pods with specific resource characteristics on the node to be granted enhanced CPU affinity and exclusivity.
    

**Custom Node Name**

Specify whether to use a **custom node name**. If you choose to use a custom node name, the name of the node, name of the ECS instance, and hostname of the ECS instance are changed.

**Note**

If a Windows instance uses a custom node name, the hostname of the instance is fixed to an IP address. You need to use hyphens (`-`) to replace the periods (`.`) in the IP address. In addition, no prefix or suffix is allowed in the IP address.

A custom node name consists of a prefix, an IP substring, and a suffix.

-   A custom node name must be 2 to 64 characters in length. The name must start and end with a lowercase letter or digit.
    
-   The prefix and suffix can contain letters, digits, hyphens (-), and periods (.). The prefix and suffix must start with a letter and cannot end with a hyphen (-) or period (.). The prefix and suffix cannot contain consecutive hyphens (-) or periods (.).
    
-   The prefix is required due to ECS limits and the suffix is optional.
    

For example, the node IP address is 192.XX.YY.55, the prefix is aliyun.com, and the suffix is test.

-   If the node is a Linux node, the node name, ECS instance name, and ECS instance hostname are aliyun.com192.XX.YY.55test.
    
-   If the node is a Windows node, the ECS instance hostname is 192-XX-YY-55 and the node name and ECS instance name are aliyun.com192.XX.YY.55test.
    

**Custom Node Name**

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

After you create a cluster or add nodes, the execution of the user-data script on a node may fail. We recommend that you log on to a node and run the `grep cloud-init/var/log/messages` command to view the execution log and check whether the execution succeeds or fails on the node.

**CloudMonitor Agent**

After you install CloudMonitor, you can view the monitoring information about the nodes in the [CloudMonitor console](https://cloudmonitor.console.alibabacloud.com/).

This parameter takes effect only on newly added nodes and does not take effect on existing nodes. If you want to install the CloudMonitor agent on an existing ECS node, go to the [CloudMonitor console](https://cloudmonitor.console.alibabacloud.com/).

**Public IP**

Specify whether to assign an IPv4 address to each node. If you clear the check box, no public IP address is allocated. If you select the check box, you must configure the **Bandwidth Billing Method** and **Peak Bandwidth** parameters.

This parameter takes effect only on newly added nodes and does not take effect on existing nodes. If you want to enable an existing node to access the Internet, you must create an EIP and associate the EIP with the node. For more information, see [Associate an EIP with an ECS instance](/help/en/eip/bind-an-eip-to-a-cloud-resource/#task-bh5-dll-vdb).

**Custom Security Group**

You can select **Basic Security Group** or **Advanced Security Group**, but you can select only one security group type. You cannot modify the security groups of node pools or change the type of security group. For more information about security groups, see [Overview](/help/en/ecs/user-guide/overview-44#concept-o2y-mqw-ydb).

**Important**

-   Each ECS instance supports up to five security groups. Make sure that the quota of security groups for your ECS instance is sufficient. For more information about security group limits and how to increase the quota limit of security groups for your ECS instance, see [Security groups](/help/en/ecs/user-guide/limitations#SecurityGroupQuota).
    
-   If you select an existing security group, the system does not automatically configure security group rules. This may cause errors when you access the nodes in the cluster. You must manually configure security group rules. For more information about how to manage security group rules, see [Configure security group rules to enforce access control on ACK clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-security-group-rules-to-enforce-access-control-on-ack-clusters#task-2143626).
    

**RDS Whitelist**

Add node IP addresses to the whitelist of an ApsaraDB RDS instance.

Private Pool Type

Valid values: **Open**, **Do Not Use**, and **Specified**.

-   **Open**: The system automatically matches an open private pool. If no matching is found, resources in the public pool are used.
    
-   **Do Not Use**: No private pool is used. Only resources in the public pool are used.
    
-   **Specified**: Specify a private pool by ID. If the specified private pool is unavailable, ECS instances fail to start up.
    

For more information, see [Private pools](/help/en/ecs/user-guide/private-pools/).

## **Step 4: Configure components**

Click **Next:Component Configurations** to configure the basic and advanced settings for cluster components.

**Parameter**

**Description**

**Cloud-edge Communication Component**

The raven component builds a network channel over the Internet to implement cloud-edge cross-region communication, and supports edge node O&M. If your cluster uses an Express Connect circuit to establish tunnels for cloud-edge network communication, you can uninstall Raven. For more information, see [Cross-region O&M communication component Raven](/help/en/ack/ack-edge/user-guide/cloud-edge-communication-component-raven-overview).

**CloudMonitor Agent**

After you install CloudMonitor, you can view the monitoring information about the nodes in the [CloudMonitor console](https://cloudmonitor.console.alibabacloud.com/).

This parameter takes effect only on newly added nodes and does not take effect on existing nodes. If you want to install the CloudMonitor agent on an existing ECS node, go to the [CloudMonitor console](https://cloudmonitor.console.alibabacloud.com/).

**Log Service**

You can select an existing Simple Log Service (SLS) project or create a project to collect cluster logs. For more information about how to quickly configure SLS when you create an application, see [Collect log data from containers by using Simple Log Service](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/collect-text-logs-from-ack-clusters-using-daemonset-deployed-logtail-agents#task-1797722).

## **Step 5: Confirm cluster configurations**

On the **Confirm Order** page, confirm the configurations of the cluster, including the feature configurations, resource billing information, cloud service dependency check, and service agreement.

ACK Edge clusters incur cluster management fees (applicable only to the Pro edition) and cloud service fees. To review the total estimated costs for your cluster, navigate to the bottom of the cluster creation page. For more information about billing, see [ACK edge clusters billing](/help/en/ack/ack-edge/product-overview/billing-of-ack-edge-clusters).

On the **Confirm Order** page, you can also click **Generate API Request Parameters** in the top-left corner to create Terraform or SDK sample parameters that match your current cluster's configuration.

## **Billing**

For more information about the billing rules of ACK Edge clusters, see [ACK edge clusters billing](/help/en/ack/ack-edge/product-overview/billing-of-ack-edge-clusters).

## References

For more information about how to create an ACK Edge cluster, see the following topics:

-   [Create a cluster by calling an API operation](/help/en/ack/ack-edge/user-guide/create-an-ack-edge-cluster)
    
-   [Use Terraform to create an ACK Edge cluster](/help/en/ack/ack-edge/developer-reference/use-terraform-to-create-an-edge-managed-cluster)
    
-   [Use the ACK SDK to create an ACK Edge cluster](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/java-sdk-call-example)
    
-   [Use Alibaba Cloud CLI to create an ACK Edge cluster](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/create-a-cluster-2)
    

After you create an ACK Edge cluster, you can create node pols in the cluster to facilitate edge node management. For more information, see the following topics:

-   [Node pool management](/help/en/ack/ack-edge/user-guide/overview-of-cell-based-management-at-the-edge/)
    
-   [Add an edge node](/help/en/ack/ack-edge/user-guide/add-an-edge-node#task-1478311)
