When you configure a node pool by specifying instance types, scale-out operations may fail because of insufficient inventory or offline instances. To improve the success rate of scale-out operations, you can configure the node pool by specifying instance attributes, such as vCPUs and memory. The node pool automatically selects instance types that meet the specified requirements.

This feature is in a phased release. To use this feature, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).

## **Limits**

-   Familiarize yourself with the [ECS instance types that are not supported by ACK](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/select-ecs-instances-to-create-the-master-and-worker-nodes-of-an-ack-cluster#1d1c2669e28pa).
    
-   This feature does not support GPU instance types.
    
-   If you set the **Billing Method** for a node pool to **Spot Instance**, you can use only the automatic bidding mode (SpotAsPriceGo) when you specify instance attributes. You cannot set a maximum price per instance (SpotWithPriceLimit). For more information, see [Bidding modes](/help/en/ecs/user-guide/what-is-a-spot-instance#541096e146rgm).
    
-   When specifying instance attributes, you must select at least 4 vCPUs and 4 GiB of memory. The **Maximum** value for vCPUs or memory cannot exceed four times the **Minimum** value.
    
-   This feature cannot be used with [node autoscaling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/auto-scaling-of-nodes).
    

## **Procedure**

You can specify configurations such as vCPUs, memory, and the instance types to use or exclude. The node pool selects available instance types that meet the specified criteria to create nodes. If new instance types that meet the filter conditions become available, the node pool automatically includes them in the selection range.

**Note**

-   The instance type selection priority still follows the **Scaling Policy** configuration of the node pool. For more information about the **Scaling Policy** configuration item, see [Create and manage a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool#info-602-lgv-xix).
    
-   If you adjust the instance attribute configuration by editing the node pool, the updated configuration applies only to new nodes. The configuration of existing nodes is not affected.
    

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster to manage and click its name. In the left navigation pane, choose **Nodes** > **Node Pools**.
    
3.  Click **Create Node Pool**. In the **Create Node Pool** dialog box, configure the node pool and set **Instance Configuration Mode** to **Specify Instance Attributes**.
    
    The following table describes only the configuration items for specifying instance attributes. For more information about all configuration items, see [Create and manage a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool).
    
    **Configuration item**
    
    **Description**
    
    **Number of vCPUs**
    
    The minimum and maximum number of vCPU cores. The maximum value cannot be more than four times the minimum value.
    
    **Memory**
    
    The minimum and maximum amount of memory. The maximum value cannot be more than four times the minimum value.
    
    **Instance Family Level**
    
    The level of the instance family. Valid values:
    
    -   Entry-level: This level is lower in cost but cannot guarantee stable instance compute performance. This level is suitable for business scenarios with low CPU utilization.
        
    -   Enterprise-level: This level is suitable for enterprise scenarios that have high requirements for business stability.
        
    
    For information about the differences between the two levels, see [What are enterprise-level instances? What are entry-level instances?](/help/en/ecs/user-guide/instance-faq/#section-2p8-osd-e5y) and [What are the differences between enterprise-level and entry-level instances?](/help/en/ecs/user-guide/instance-faq/#section-cm4-dks-zu1).
    
    **Instance Family Category**
    
    The instance family category, such as general-purpose, compute-optimized, and memory-optimized. For more information about instance families, see [Instance family classification and naming](/help/en/ecs/user-guide/instance-specification-naming-and-classification).
    
    **CPU Architecture**
    
    The CPU architecture of the instance. x86 and Arm are supported.
    
    **Instance Family**
    
    The instance family to use. For more information, see [Instance families](/help/en/ecs/user-guide/overview-of-instance-families).
    
    Instance types to exclude
    
    The instance types to exclude. These instance types are not included in the selection range for scale-out. You can use a wildcard character (\*) to exclude a single instance type or an entire instance family. Examples:
    
    -   ecs.c6.large: Excludes the ecs.c6.large instance type.
        
    -   ecs.c6.\*: Excludes all instance types in the c6 instance family.
