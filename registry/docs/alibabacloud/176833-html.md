When you create an ACK managed cluster, you need to only configure worker nodes. The master nodes are created and managed by Container Service for Kubernetes (ACK). This reduces O&M costs and allows you to focus on your business applications. This topic describes how to create an ACK managed cluster in the ACK console, by calling API operations, and by using Terraform, SDKs, and CLI.

Before you create an ACK cluster, we recommend that you familiarize yourself with the relevant basic information. For more information, see [Kubernetes concepts](https://kubernetes.io/docs/concepts/), [Product introduction](/help/en/ack/product-overview/product-introduction), and [Clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ack-cluster-overview/).

> The first time you use an ACK managed cluster, you can start with a cube game. For more information, see [Use ACK to deploy a magic cube game application](/help/en/ack/ack-managed-and-ack-dedicated/getting-started/getting-started-with-ack-using-the-ack-console). After you finish with the trial, release resources at the earliest opportunity to avoid unexpected costs.

## **Planning and design**

Before you create a cluster, plan and design the cluster based on your business requirements to ensure that the cluster can run stably, efficiently, and securely. Most ConfigMaps can be adjusted after the cluster is created. However, some ConfigMaps cannot be changed after the cluster is created, especially the configurations related to cluster availability and cluster network. When you make the plan, make sure that the following requirements are met.

**Category**

**Description**

Deployment location

-   Region: Services deployed in a region that is geographically closer to your users are more responsive when your users access the services.
    
-   Zone: We recommend that you configure multiple zones to ensure high availability of the cluster.
    

Version and specification

-   [Kubernetes Version](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/support-for-kubernetes-versions/): The Kubernetes version that you want to use. We recommend that you use the latest version.
    
-   Cluster Specification: Select [Professional or Basic](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ack-cluster-overview/). Pro Edition is more suitable for production environments and provides a service level agreement (SLA). Basic Edition is more suitable for test environments and has limited resource quotas.
    

Network planning

-   Network plug-in: Select Terway or Flannel. If you require high network security, IP Address Manager (IPAM), such as fixed pod IP addresses, and network policies, we recommend that you use Terway. If the cluster size is small, such as less than 500 nodes, and you do not have special network requirements, you can use Flannel. For more information about the differences between Terway and Flannel, see [Comparison between Terway and Flannel container network plug-ins](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/comparison-between-terway-and-flannel).
    
-   [Plan the network of an ACK cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/kubernetes-cluster-network-planning): Configure the virtual private cloud (VPC) CIDR block, vSwitch CIDR block, container CIDR block, and Service CIDR block based on your business scenario and cluster size. Then, specify the IP address range of the cluster and the number of available IP addresses for pods and nodes.
    
-   Access to Internet: Specifies whether the nodes in the cluster can access the Internet. The cluster must have Internet when pulling public images.
    
    For more information, see **Configure SNAT** in [Network configuration](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/description-of-configuration-items-for-ack-managed-clusters#fe52e5211cbuj).
    
-   IPv6 Dual-stack: Specifies whether the cluster supports IPv4 and IPv6. To enable IPv4/IPv6 dual-stack, the VPC where the cluster resides must support dual-stack and you must plan an IPv6 CIDR block.
    
-   [Security group](/help/en/ecs/user-guide/overview-44): The security group to which the cluster belongs and the type of the security group.
    
-   Cluster Domain: The top-level domain name that has a standard suffix used by all Services in the cluster. This allows pods and other resources to access each other by using names instead of IP addresses. The default value is `cluster.local`. For more information about how to configure a custom value, see [What do I need to take note of when I configure the domain name of a cluster?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#6f1f2d87f3nh2)
    

## **Preparations**

Before you create a cluster, make sure that you activated ACK and assigned the ACK system role to your Alibaba Cloud account or RAM user. In addition, make sure that you activated cloud services such as VPC, Server Load Balancer (SLB), and NAT gateway. For more information, see [Quickly create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/getting-started/quick-start-for-first-time-users).

**Note**

If you purchase services such as CLB based on the pay-as-you-go billing method, make sure that the balance of your Alibaba Cloud account is sufficient to avoid overdue payments.

## **Create a cluster**

ACK allows you to create clusters in the ACK console, by calling API operations, and by using SDKs, Terraform, and CLI.

### **Use the ACK console**

#### **Procedure**

**Note**

If you want to use a RAM user to create a cluster in the ACK console, you must grant the corresponding permissions to the RAM user. For more information about how to grant permissions, see [Required permissions for the ACK console](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ack-console-permission-dependencies).

You can create a cluster based on the default cluster configurations in the ACK console. For more information about how to configure parameters in a fine-grained manner, see [ACK Managed Clusters ConfigMap Description](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/description-of-configuration-items-for-ack-managed-clusters). The following figure shows the process overview.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1231222571/CAEQORiBgICiwa7KrBkiIDdiMzBhYjllNTYwNTRkMmI4NTFiZTdjNjdmY2ZlODM24816396_20241218174610.970.svg)

#### **Step 1: Go to the creation page**

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the navigation pane on the left, click **Clusters**.
    
2.  Move the pointer over **All Resources** at the top of the page and select the resource group you want to use.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0295238471/p957678.png)
    
3.  On the **Clusters** page, click **Create Kubernetes Cluster**. On the **ACK Managed Cluster** page, configure the cluster, node pool, and components.
    
    > The auto mode is disabled in the following steps. To enable the auto mode, refer to [Create an ACK managed cluster with auto mode enabled](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-ack-managed-clusters-in-automode).
    

#### **Step 2: Cluster configurations**

**Section**

**Description**

**Example**

Basic configurations

The basic information of the cluster, including the name, specification, region, and version. You can enable automatic updates for the cluster and configure a maintenance window for scheduled execution.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1256377371/p890434.png)

Network settings

Configure the following parameters: IPv6 Dual-stack, VPC, vSwitch, Access to API Server, Security Group, Network Plug-in, and Service CIDR Block.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4782685471/p890435.png)

Advanced options

Configurations related to cluster resource management and security.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1256377371/p890437.png)

For more information about the parameters, see [Cluster configuration](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/description-of-configuration-items-for-ack-managed-clusters#title-mnj-qvn-kgb).

#### **(Optional) Step 3: Configure an elastic node pool**

A node pool is used to group and manage nodes. It is a logical collection of nodes that have the same attributes and is free of charge. A node pool is similar to a configuration template. All nodes added to the node pool are configured based on this template. The node pool that you configure in this step is used as the default node pool for the cluster.

You can skip the creation and configuration of a node pool as prompted. After the cluster is created, you can create more node pools. For more information, see [Create and manage a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool). This way, you can mix and isolate different types of nodes, such as nodes that have different operating systems, CPU architectures, billing methods, and instance types. For more information about how to add purchased ECS instances to the cluster, see [Add existing ECS instances](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-existing-ecs-instances-to-an-ack-cluster).

**Category**

**Description**

**Example**

Basic configurations

The basic information of the node, including the name and container runtime. You can enable a managed node pool.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1256377371/p890438.png)

Instance and image configurations

The billing method, instance type, and operating system of the node. We recommend that you select multiple instance types.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1256377371/p890439.png)

Volume settings

The system and data disks used by the node. System disks are used to install and run the operating system. Data disks are used to persist business data.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9268899371/p918055.png)

Instance quantity configurations

The number of instances that you want to maintain in the node pool, the capacity of preemptible instances, and the compensation configuration. This parameter is supported only if the billing method is preemptible instances.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1256377371/p901981.png)

Advanced options

Advanced configurations, such as ECS tags, node labels, and taints.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0843860471/p901982.png)

For more information about the parameters, see [Node pool configuration](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/description-of-configuration-items-for-ack-managed-clusters#title-5mw-tg7-s16).

#### **Step 4: Configure components**

In addition to system components, ACK also provides multiple types of functional components to leverage features, such as cluster networking, observability, and cost optimization.

**Note**

By default, ACK installs specific components based on best practices. You can check and confirm the components in this step. You can also install, uninstall, and update the components after the cluster is created. For more information, see [Manage components](/help/en/ack/manage-system-components).

**Section**

**Description**

**Example**

Basic components

Network, storage, and monitoring components.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1256377371/p901983.png)

More components

Components used in scenarios such as application management, log monitoring, and storage.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1256377371/p901984.png)

For more information about the parameters, see [Component configuration](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/description-of-configuration-items-for-ack-managed-clusters#title-qhs-z2q-yk8).

#### **Step 5: Confirm the configurations and billing information**

On the **Confirm Order** page, confirm the configurations of the cluster, including the feature configurations, resource billing information, cloud service dependency check, and service agreement.

You are charged a cluster management fee (only for Pro Edition) and a cloud resource fee for an ACK managed cluster. In the lower part of the page, you can view the billing overview of the cluster and the billing documents of ACK and other services. For more information, see [Billing overview](/help/en/ack/ack-managed-and-ack-dedicated/product-overview/ack-pro-cluster-billing) and [Cloud resource fee](/help/en/ack/ack-managed-and-ack-dedicated/product-overview/billing-of-cloud-services).

On the **Confirm** step, you can also click **Console-to-Code** in the top-left corner to create Terraform or SDK sample parameters that match your current cluster's configuration.

### **API**

#### **Debugging**

[Debugging](https://api.alibabacloud.com/api/CS/2015-12-15/CreateCluster)

#### **Sample requests**

The following sample request is used to create an ACK managed Pro cluster. For more information about the parameters, see [CreateCluster](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-createcluster).

```
POST /clusters 
<Common request headers>
{
    "name": "ACK managed cluster",            
    "cluster_type": "ManagedKubernetes",  //Use this parameter together with profile and cluster_spec to set the cluster type to ACK managed Pro cluster. #required
    "profile": "Default",                    
    "cluster_spec": "ack.pro.small",         
    "kubernetes_version": "1.32.1-aliyun.1",  //The Kubernetes version of the created cluster. We recommend that you select the latest Kubernetes version.    
    "region_id": "cn-hongkong",   //The region to which the cluster belongs is the China (Hong Kong) region. #required
    "snat_entry": true,           // Configure SNAT rules for the VPC in which you want to deploy the cluster to enable Internet access for the cluster. 
    "endpoint_public_access": false,  //The Internet access of the API server is disabled for the cluster. 
    "deletion_protection": true,  //Enable deletion protection for the cluster. 
    "proxy_mode": "ipvs", // Set the proxy mode to IP Virtual Server (IPVS), which is a high-performance mode. 
    "tags": [],
    "timezone": "Asia/Shanghai",
    "addons": [                  //The installed cluster components. 
        {
            "name": "terway-controlplane",
            "config": "{\"ENITrunking\":\"true\"}"
        },
        {
            "name": "terway-eniip",  //The network plug-in of the cluster is Terway. After the cluster is created, you cannot modify this parameter. 
            "config": "{\"IPVlan\":\"false\",\"NetworkPolicy\":\"false\",\"ENITrunking\":\"true\"}"
        },
        {
            "name": "csi-plugin"
        },
        {
            "name": "managed-csiprovisioner"
        },
        {
            "name": "storage-operator",
            "config": "{\"CnfsOssEnable\":\"false\",\"CnfsNasEnable\":\"false\"}"
        },
        {
            "name": "nginx-ingress-controller",
            "disabled": true
        },
        {
            "name": "ack-node-local-dns"
        }
    ],
    "enable_rrsa": false,
    "os_type": "Linux",
    "platform": "AliyunLinux",
    "image_type": "AliyunLinux3",
    "pod_vswitch_ids": [         //If Terway is installed in the cluster, configure this parameter to specify a vSwitch for the pod. Each pod in the cluster uses a separate IP address. 
        "vsw-j6cht66iul7h61x******",
        "vsw-j6c5ne6mxgnx3g5******"
    ],
    "charge_type": "PostPaid",
    "vpcid": "vpc-j6cc1ddlp4rzs7v******",   //The VPC of the cluster must be determined during network planning. After the cluster is created, you cannot change the VPC. #required
    "service_cidr": "192.168.xx.xx/16",     //The Service CIDR block of the cluster. #required
    "vswitch_ids": [                        //Select multiple vSwitches to ensure high availability of the cluster. #required
        "vsw-j6cht66iul7h61x******",
        "vsw-j6c5ne6mxgnx3g5******"
    ],
    "ip_stack": "ipv4",                     //Set the IP stack type to IPv4. 
    "logging_type": "SLS",
    "cpu_policy": "none",
    "service_account_issuer": "https://kubernetes.default.svc",
    "api_audiences": "https://kubernetes.default.svc",
    "is_enterprise_security_group": true,
    "maintenance_window": {    //Set the maintenance window of the cluster to 01:00 to 04:00 every Wednesday. 
        "enable": true,
        "duration": "3h",
        "weekly_period": "Thursday",
        "maintenance_time": "2025-03-03T01:00:00.000+08:00",
    },
    "operation_policy": {
        "cluster_auto_upgrade": {
            "enabled": true,
            "channel": "stable"
        }
    },
    "controlplane_log_ttl": "30",
    "controlplane_log_components": [
        "apiserver",
        "kcm",
        "scheduler",
        "ccm",
        "controlplane-events",
        "alb"
    ],
    "nodepools": [
        {
            "nodepool_info": {         //Node pool settings. 
                "name": "default-nodepool"        
            },
            "scaling_group": {
                "system_disk_category": "cloud_essd",   //Select an Enterprise SSD (ESSD) as the system disk of the node pool. 
                "system_disk_size": 120,                //Set the system disk size to 120 GiB. 
                "system_disk_performance_level": "PL0", //The maximum IOPS of a system disk is 10000. 
                "system_disk_encrypted": false,
                "data_disks": [],
                "tags": [],
                "soc_enabled": false,
                "security_hardening_os": false,
                "vswitch_ids": [
                    "vsw-j6cht66iul7h61x******",
                    "vsw-j6c5ne6mxgnx3g5******"
                ],
                "instance_types": [
                    "ecs.c6.xlarge",
                    "ecs.c7.xlarge"
                ],
                "instance_patterns": [],
                "login_password": "",
                "instance_charge_type": "PostPaid",
                "security_group_ids": [],
                "platform": "AliyunLinux",
                "image_id": "aliyun_3_x64_20G_alibase_20241218.vhd",
                "image_type": "AliyunLinux3",
                "desired_size": 3,        //Create a node pool in which the expected number of nodes is 3. 
                "rds_instances": [],
                "multi_az_policy": "BALANCE"
            },
            "kubernetes_config": {
                "cpu_policy": "none",
                "cms_enabled": true,
                "unschedulable": false,
                "runtime": "containerd",    //Set the container runtime to containerd 1.6.36. After the cluster is created, you cannot modify this parameter. 
                "runtime_version": "1.6.36"
            },
            "node_config": {
                "image_acceleration_config": {
                    "enable_image_acceleration": false
                }
            },
            "management": {
                "enable": true,
                "auto_repair": true,
                "auto_repair_policy": {
                    "restart_node": true
                },
                "auto_upgrade": true,
                "auto_upgrade_policy": {
                    "auto_upgrade_kubelet": true,
                    "auto_upgrade_os": false
                },
                "auto_vul_fix": true,
                "auto_vul_fix_policy": {
                    "vul_level": "asap",
                    "restart_node": true
                },
                "rolling_policy": {
                    "max_parallelism": 10
                }
            }
        }
    ]
}
```

#### **Major parameters**

When you call the CreateCluster operation to create an ACK managed cluster, configure the following parameters:

**Parameter**

**Description**

**Parameter combination**

cluster\_type

The type of the cluster. When you create an ACK managed cluster, set this parameter to `ManagedKubernetes`.

**Create an** ACK managed Pro cluster

-   "cluster\_type": "ManagedKubernetes"
    
-   "profile": "Default"
    
-   "cluster\_spec": "ack.pro.small"
    

**Create an** ACK managed Basic cluster

-   "cluster\_type": "ManagedKubernetes"
    
-   "profile": "Default"
    
-   "cluster\_spec": "ack.standard"
    

profile

The subtype of the cluster. When you create an ACK managed cluster, set this parameter to `Default`.

cluster\_spec

The specifications of the cluster.

-   `ack.pro.small`: Specifies to create an ACK managed Pro cluster.
    
-   `ack.standard`: Specifies to create an ACK managed Basic cluster.
    

### **Terraform**

For more information, see [Use Terraform to create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/use-terraform-to-create-an-ack-managed-cluster).

### **SDK**

For more information, see [Example on how to use ACK SDK for Java](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/java-sdk-call-example).

### **CLI**

For more information, see [Create a cluster](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/create-a-cluster-2).

## **What to do next**

-   Application deployment: You can create and manage workloads, such as Deployments, StatefulSets, and Jobs. For more information, see [Deploy a workload](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/deploying-workloads/).
    
-   Service discovery and network management
    
    -   [Service](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-management/): provides a fixed access portal for a group of pods to allow intra-cluster access and Internet access.
        
    -   [Ingress](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ingress-management-2/#concept-2021501): You can use Ingresses to configure different forwarding rules. For example, you can forward requests to different Services based on domain names or access paths for load balancing.
        
    -   [DNS-based service discovery](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-discovery-dns-1/): provides domain name resolution services for workloads in a cluster. This way, services in the cluster can access each other by using service names without the need for specific IP addresses.
        
-   Observability: allows you to collect cluster logs, monitor alerts, and diagnose cluster status. For more information about the observability solutions provided by ACK in terms of infrastructure, containers, and workloads, see [Observability](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/observability-overview/).
    
-   [Storage](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/csi-overview-1/): The CSI plug-in is used to meet storage requirements such as persistent storage of application data, storage of sensitive and configuration data, and dynamic provisioning of storage resources.
    
-   [Auto scaling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/auto-scaling-overview/) configurations: If business resource requirements are difficult to predict or periodically change, such as for web applications, game services, and online education, we recommend that you enable auto scaling. This feature includes workload scaling , such as HPA, CronHPA, and VPA, and computing resource scaling, such as node auto scaling and instant node elasticity .
    
-   Fine-grained authorization
    
    For more information about how to grant fine-grained permissions on basic resources (Alibaba Cloud services that ACK depends on) and cluster internal resources (Kubernetes resources), ACK provides multiple permission management solutions based on RAM and the native RBAC mechanism of Kubernetes. For more information, see [Authorization](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/authorization-overview/).
    

## **Quotas and limits**

If the cluster size is large or the account has a large number of resources, follow the quotas and limits specified for ACK clusters. For more information, see [Quotas and limits](/help/en/ack/product-overview/limits).

-   Limits: ACK configuration limits, such as account balance and capacity limit of a cluster, which is the maximum capacity of different Kubernetes resources in a cluster.
    
-   Quota limits and how to increase quotas: Quota limits for ACK clusters and the quota limits of cloud services that ACK depends on, such as ECS or VPC. If you want to increase the quota, see the related topics.
    

## **FAQ**

For more information about how to troubleshoot issues when you use ACK clusters, see [Troubleshooting](/help/en/ack/ack-managed-and-ack-dedicated/support/troubleshooting-10/) and [FAQ](/help/en/ack/ack-managed-and-ack-dedicated/support/faq).

#### **Can I create a cluster with zero nodes?**

Yes, you can. If you want to skip node creation or add purchased ECS instances to a cluster after the cluster is created, you can set the **Expected Nodes** parameter to 0 during the configuration. This also sets the number of instances in the cluster to 0. Then, configure the other required parameters. You can update the configurations of a node pool or create more node pools. For more information, see [Create and manage a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool). For more information about how to add an existing ECS instance to a cluster, see [Add existing ECS instances to an ACK cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-existing-ecs-instances-to-an-ack-cluster).

#### **How do I add purchased ECS instances to a cluster?**

ACK allows you to manually or automatically add existing ECS instances to a node pool. When you add an existing node to a node pool in Auto mode, the OS of the ECS instance is changed to the OS used by the node pool and the original system disk of the node is released. To retain the operating system of the ECS instance, you can manually add the ECS instance. For more information about the operations and usage notes, see [Add existing ECS instances to an ACK cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-existing-ecs-instances-to-an-ack-cluster).

We recommend that the ECS instances and the node pool that you want to add have the same or similar configurations, such as the billing method, disk configurations, and instance type. This facilitates centralized management of subsequent nodes.

#### **Can I add a pay-as-you-go instance to a subscription node pool?**

Yes, you can. For more information, see [Add existing ECS instances](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-existing-ecs-instances-to-an-ack-cluster). However, if the billing method of the node pool is subscription, all nodes added to the node pool are subscription nodes. We recommend that you create different node pools to manage different types of nodes, such as nodes that have different billing methods, disk configurations, and instance types. For more information, see [Create and manage a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool).

#### **Why is the number of pods insufficient when a cluster is created?**

This error message appears due to one of the following reasons:

-   Consumed by components: Cluster components are deployed in pods. The pods consume node resources. Specific components may require multiple pods. If you install a large number of components in the cluster, a large number of pods are created for the components.
    
-   Small-sized instances: In Terway mode, the maximum number of pods supported by a node varies based on the number of elastic network interfaces (ENIs) provided by the [instance family](/help/en/ecs/user-guide/overview-of-instance-families). Although the maximum number of pods supported by a node is not directly related to the CPU and memory, ECS instances that have lower specifications support a smaller number of ENIs and the maximum number of pods per node is also smaller.
    

When the number of pods on a node reaches the upper limit, new pods fail to be scheduled. This affects service performance. You can increase the number of pods that can be used by scaling out the node pool to add more available nodes or by updating nodes to increase the maximum number of pods per node. For more information, see [Increase the maximum number of pods in a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/adjusting-the-number-of-node-pods).

#### **Why are the available CPU and memory resources of a node less than those of the instance type that I purchased?**

ACK reserves a specific amount of node resources to run Kubernetes components and system processes. This ensures that the operating system kernel, system services, and Kubernetes daemons can run as expected. However, this causes the amount of allocatable resources of a node to differ from the resource capacity of the node. For more information, see [Resource reservation policy](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/resource-reservation-policy).

## **References**

-   When you use an ACK cluster, service failures may occur due to improper operations. For more information, see [Usage notes and instructions on high-risk operations](/help/en/ack/product-overview/before-you-start).
    
-   For more information about how to connect to the cluster, see [Obtain the kubeconfig file of a cluster and use kubectl to connect to the cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster#task-2076136).
    
-   Outdated Kubernetes versions may have security and stability issues. We recommend that you update your clusters to the latest version. For more information, see [Manually update ACK clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster#task-1664343) and [Automatically update a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/automatically-upgrade-an-ack-cluster).
    
-   For more information about how to pull cross-region container images that reside outside the Chinese mainland, see [Using GA instances for cross-domain accelerated pulling of container images](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cross-domain-accelerated-pulling-container-images).
    
-   If you have questions about the services, [contact us](/help/en/ack/ack-managed-and-ack-dedicated/support/contact-us).
