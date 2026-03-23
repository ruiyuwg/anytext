Node pools allow you to manage groups of node resources in a cluster. For example, you can use a node pool to manage node labels and taints in a unified manner. To create nodes that use the Windows operating system, you can create a Windows node pool in an ACK cluster. You can also upgrade the kubelet, runtime, and operating system image versions at the node pool level.

## **Limits**

The following table describes the requirements for creating a Windows node pool.

**Limitations**

**Description**

Cluster

-   [An ACK managed cluster is created](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/).
    
    > Windows node pools are supported only in ACK managed clusters. You must create a Windows node pool in an existing cluster. You cannot create a Windows node pool when you create a cluster.
    
-   The cluster version is 1.20.4 or later.
    
    > To upgrade a cluster, see [Manually upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster).
    
-   The cluster network type is Flannel.
    
-   The [kube-flannel-ds-windows](/help/en/ack/product-overview/kube-flannel-ds-windows) version is v0.15.2-aliyun or later.
    

Container runtime

Only containerd 1.6 and later versions support Windows node pools.

> To upgrade the runtime version, see [Upgrade a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-pool-updates).

Node pool type

Only non-managed node pools can be created as Windows node pools.

Instance type

-   Support for Windows node pools varies by instance type. Some instance types do not support Windows node pools. Try multiple times. For example, you can select ecs.g6.xlarge. This instance type supports Windows node pools.
    
-   The instance type must have at least 4 vCPUs and 8 GB of memory.
    
    -   Windows containers are not subject to an out-of-memory (OOM) kill when their memory usage exceeds the limit. Since May 2021, in ACK clusters of version 1.16 or later, newly added Windows nodes reserve a specific amount of resources (1.5 vCPUs, 2.5 GB of RAM, and 3 GB of disk space) at startup. This ensures the stable operation of the Windows operating system, kubelet, and container runtime. For more information about resource reservation, see [Node resource reservation policy](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/resource-reservation-policy).
        
        > The resource reservation mechanism can reduce or prevent Windows nodes from becoming completely unavailable due to the over-allocation of Windows workloads. However, if a memory leak occurs in a Windows container application, the Windows node may still crash.
        
    -   Windows containers have a small footprint.For more information, see [Memory requirements for Windows containers](https://docs.microsoft.com/en-us/virtualization/windowscontainers/deploy-containers/system-requirements#memory-requirements).
        
    

The following table describes the limits on using Windows node pools.

**Limits**

**Description**

Operating system

Windows node pools support Windows Server 2019, Windows Server 2022, and Windows Server Core, Version 2022.

> The ACK console supports Windows Server 2019, Windows Server 2022, and Windows Server Core, Version 2022. If you want to use Windows Server Core, Version 2004, select the latest image ID from the ECS [2023](/help/en/ecs/user-guide/release-notes-for-2023#concept-orn-h2x-dgb) public image release records to create the node pool.

Number of nodes

By default, you can add a maximum of 100 nodes to a cluster. To add more nodes, [submit a ticket in the Quota Center](https://quotas.console.alibabacloud.com/products/csk/quotas).

Elastic Compute Service

When you add existing ECS instances, make sure that the ECS instances in your virtual private cloud (VPC) are associated with elastic IP addresses (EIPs), or a NAT Gateway is configured for the VPC. Make sure that the nodes can access the Internet. Otherwise, the ECS instances fail to be added. For more information about the notes and steps for adding existing ECS instances, see [Add existing nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-existing-ecs-instances-to-an-ack-cluster).

## Create a Windows node pool

### **Console**

You cannot create the default node pool (default-nodepool) as a Windows node pool. For more information, see [Limits](#4181b6b036ju2). You must create a Windows node pool after you create the cluster.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the cluster that you want to manage and choose **Nodes** > **Node Pools** in the navigation pane on the left.
    
3.  On the **Node Pools** page, click **Create Node Pool** and follow the on-screen instructions.
    
    For more information about the parameters, see [Create and manage node pools](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool). The following table describes some of the parameters.
    
    **Parameter**
    
    **Description**
    
    **Configure Managed Node Pool**
    
    Select Disable.
    
    **Container Runtime**
    
    Select containerd.
    
    ****Instance Type****
    
    -   Support for Windows node pools varies by instance type. Some instance types do not support Windows node pools. You need to try multiple times. For example, you can select ecs.g6.xlarge. This instance type supports Windows node pools.
        
    -   Select an instance type with at least 4 vCPUs and 8 GB of memory.
        
    -   Select an instance type that does not use an Elastic GPU Service architecture.
        
        For more information about instance types, see [Instance families](/help/en/ecs/user-guide/overview-of-instance-families).
        
    
    **Expected Nodes**
    
    The number of nodes that you want the node pool to maintain. After you specify this value, the node pool automatically scales out or scales in to maintain the specified number of nodes.
    
    **Operating System**
    
    Select a Windows operating system.
    
    **ECS Tags**
    
    Add tags to the ECS instances.
    
    **Node Labels**
    
    Add labels to the cluster nodes.
    
    On the **Node Pools** page, the Windows node pool is created when its **Status** changes to **Active**.
    

### **API**

You can invoke the [CreateClusterNodePool](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-createclusternodepool) operation to create a Windows node pool and configure parameters, such as the number of nodes and node specifications. The following code provides an example of the parameters.

```
{
  "ClusterId": "ca8ed83XXXXXXXXXXXX5ec197",          // The cluster ID.
  "body": { 
    "nodepool_info": {
      "name": "nodepool-fXXXXXx",                    // The name of the node pool.
      "resource_group_id": "rg-acfmXXXXXXXXsjpq"     // The ID of the resource group to which the cluster belongs. This parameter is used to isolate resources.  
    },
    "scaling_group": {
      "vswitch_ids": [                               // The virtual switches of the cluster nodes. This parameter is required when you create a managed cluster that has no nodes. 
        "vsw-bp1XXXXXXXXXXXXX1xm84",
        "vsw-bp1XXXXXXXXXXXX2v6x0a",
        "vsw-bp1XXXXXXXXXXXXXjkxbo"
      ],
      "data_disks": [                                // The configurations of data disks on worker nodes, such as the disk type, disk size, and other settings.
        {
          "category": "cloud_essd",
          "size": 120,
          "encrypted": "false",
          "performance_level": "PL0"
        }
      ],
      "vpc_id": "vpc-bpXXXXXXXXXXXXXXXmgb6",         // The ID of the cluster VPC.
      "instance_charge_type": "PostPaid",            // The billing method of the nodes. Valid values: PrePaid (subscription) and PostPaid (pay-as-you-go). Default value: PostPaid.
      "internet_max_bandwidth_out": 1,               // The maximum outbound bandwidth of the public IP address of a node. Unit: Mbit/s. Valid values: 1 to 100.
      "soc_enabled": false,                          // Specifies whether to enable MLPS 2.0 security hardening. Valid values: true and false.
      "security_hardening_os": false,                // Specifies whether to enable Alibaba Cloud OS security hardening. Valid values: true and false. Default value: false.
      "instance_types": [                            // The instance types.
        "ecs.g6.xlarge"
      ],
      "instance_patterns": [                         // The instance property configurations.
        {
          "Cores": 4,
          "Memory": 16,
          "burst_performance_option": "Exclude",     // Specifies whether the instance type is a burstable instance.  
          "excluded_instance_types": [               // The instance types that you want to exclude.
            "ecs.c6t.*"
            // ...
          ],
          "instance_type_families": [                // The instance families that you want to specify.  
            "ecs.g6"
            // ...
          ]
        }
      ],
      "login_password": "XXXXXX",
      "login_as_non_root": false,
      "system_disk_category": "cloud_essd",
      "system_disk_size": 40,
      "system_disk_performance_level": "PL0",
      "system_disk_encrypted": false,
      "multi_az_policy": "BALANCE",                // The scaling policy for the ECS instances in the multi-zone scaling group.
      "platform": "WindowsServer2022",
      "image_id": "win2022_21H2_x64_dtc_en-us_40G_container_alibase_20240220.vhd",
      "image_type": "WindowsServer2022",
      "desired_size": 1
    },
    "kubernetes_config": {                         // The cluster configurations.
      "cms_enabled": true,                         // Specifies whether to install the CloudMonitor agent on ECS nodes. After the CloudMonitor agent is installed, you can view the monitoring information about the created ECS instances in the CloudMonitor console. We recommend that you enable this feature.
      "unschedulable": false,                      // Specifies whether to set the scaled-out nodes to unschedulable. Valid values: true and false.
      "runtime": "containerd",                   
      "runtime_version": "2.1.1"                   // Only containerd 1.6 and later versions support Windows node pools.
    },
    "auto_scaling": {                              // The configurations of the auto scaling feature for the node pool. Valid values: true (enables auto scaling) and false (disables auto scaling).
      "enable": false
    },
    "tee_config": {                                // The configurations of the confidential computing node pool. Valid values: true (enables confidential computing) and false (disables confidential computing).
      "tee_enable": false
    },
    "node_config": {                               // The node configurations.    
      "image_acceleration_config": {
        "enable_image_acceleration": false
      }
    }
  }
}
```

### **Terraform**

For more information, see [Terraform overview](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/terraform-overview). You can create a Windows node pool and configure parameters, such as the number of nodes and node specifications. The following code provides an example of the parameters.

```
provider "alicloud" {
  region = "cn-beijing"
}

resource "alicloud_cs_kubernetes_node_pool" "pool" {
  cluster_id = "c1f801474ea46417d8e83cc482******"
  data_disks {
    category          = "cloud_essd"
    encrypted         = "false"
    performance_level = "PL0"
    size              = 120
  }
  
  desired_size          = 1
  image_id              = "win2019_1809_x64_dtc_en-us_40G_container_alibase_20240220.vhd"
  image_type            = "Windows"
  install_cloud_monitor = true
  instance_charge_type  = "PostPaid"     // The billing method of the nodes. Valid values: PrePaid (subscription) and PostPaid (pay-as-you-go). Default value: PostPaid.
  instance_types = [
    "ecs.g8i.xlarge"
  ]
  internet_max_bandwidth_out = 0        // The maximum outbound public bandwidth. Unit: Mbit/s. Valid values: 1 to 100.
  login_as_non_root          = false
  multi_az_policy            = "BALANCE"
  node_pool_name             = "nodepool-8liYZX"
  password                   = "**********"
  platform                   = "WindowsServer2019"
  resource_group_id          = "rg-acfmvnjn2*****"
  runtime_name               = "containerd"
  runtime_version            = "2.1.5"      // The container runtime version. Only containerd 1.6 and later versions support Windows node pools.
  scaling_config {
    enable      = false
    is_bond_eip = false
  }
  security_hardening_os         = false
  soc_enabled                   = false     // Specifies whether to enable MLPS 2.0 security hardening. Valid values: true and false.
  system_disk_category          = "cloud_essd"
  system_disk_encrypted         = false     // Specifies whether to encrypt the system disk. Valid values: true and false.
  system_disk_performance_level = "PL0"
  system_disk_size              = 40
  tee_config {
    tee_enable = false
  }
  unschedulable = false
  vswitch_ids = [
    "vsw-2ze9k65q3wn23wy*****",
    "vsw-2zekovpspoxgn44*****",
    "vsw-2ze54z91jw267e1*****"
  ]
}
```

## **Upgrade a Windows node pool**

Upgrading a node pool involves upgrading the kubelet and the container runtime. Before you upgrade a node pool, make sure that you have [upgraded the control plane](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster#14258900925vv) to the target version.

-   Kubelet upgrade: Upgrades the kubelet of nodes in the node pool to the same version as the control plane.
    
-   Container runtime upgrade: When a new version of the container runtime is released, you can upgrade the container runtime of the nodes to the latest version.
    

For more information about the procedure and related notes, see [Upgrade a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-pool-updates). When you configure the upgrade method, you must select the option to upgrade the Windows node pool by replacing the system disks of the nodes.

## **Upgrade the operating system image of a Windows node pool**

For more information, see [Replace the operating system](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/replace-the-operating-system). You can upgrade the operating system image of the node pool to the latest version to benefit from new features, optimizations, and bug fixes.

> For more information about the latest image versions, see [Operating systems](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/overview-of-os-images/).

## **References**

-   For more information about how to deploy applications on Windows nodes, see [Create a Windows application](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-windows-application).
    
-   If your business requires Windows nodes and experiences unpredictable traffic spikes, we recommend that you use Windows virtual nodes and schedule pods to the virtual nodes. For more information, see [(Invitational preview) Schedule pods to Windows virtual nodes](/help/en/eci/create-a-windows-based-pod).
