ACK One registered clusters provide the node pool feature that helps you manage Elastic Compute Service (ECS) instances that are added to the clusters in groups. A node pool is a logical collection of one or multiple nodes. You can manage and maintain the nodes in a node pool in a centralized manner. For example, you can centrally upgrade and configure auto scaling for the nodes in a node pool. You can also group computing resources into different node pools to achieve resource isolation. For example, you can create separate node pools for different types of workloads or create different node pools to manage nodes with different attributes.

## Node pool

You can consider a node pool as a configuration template that is applied to all nodes that are added to the node pool. You can create one or more node pools of different types and configurations in a Container Service for Kubernetes (ACK) cluster. The configurations of a node pool consist of node attributes, such as the node specifications, zones, operating system, labels, and taints. You can configure node attributes when you create a node pool or modify node attributes after the node pool is created. For more information about how to create a node pool, see [Create a node pool](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/user-guide/create-and-manage-node-pools).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6949682471/CAEQORiBgMDDsLqsrhkiIDEzZDZkZWJiN2Q5OTRmYmY4MDY3MDNjNDRlZjM4MGRk4916193_20250206161716.523.svg)

A single node pool simplifies management and configuration, while multiple node pools enable refined resource isolation and mixed deployment of different node types.

**Single node pool**

**Multiple node pools**

Manage computing resources for multiple teams or various workloads through a single node pool, simplifying operations and maintenance. A single node pool can support the following features.

-   Manage computing resources for multiple teams simultaneously.
    
-   Configure multiple instance types, such as regular Elastic Compute Service (ECS) instances, GPU-accelerated instances, elastic bare metal instances, and high-performance computing optimized instances, to meet the needs of different workloads.
    
-   Distribute nodes across multiple zones to improve high availability.
    

> Currently, mixing instances of different operating system types and CPU architectures (Arm and x86) is not supported.

Create multiple node pools to provide independent computing resources for different workloads or teams, thereby avoiding resource contention and potential security risks. Suitable for the following scenarios.

-   Tenant isolation, providing independent computing resources for different teams, and facilitating billing management.
    
-   Isolation of machines with different hardware specifications (such as CPU architecture, GPU, FPGA, etc.) to ensure the reasonable allocation of hardware resources.
    
-   Enhance security isolation for sensitive applications.
    
-   Deploy different operating systems.
    

By utilizing multiple node pools, you can prioritize different node pools through scheduling policies to enhance resource and cost management. Consider the following scenarios:

-   Manage the priority order of computing resources with varying costs, such as preemptible instances and subscription instances, to minimize expenses.
    
-   Allocate various instance types based on workload requirements, including the proportion of x86 and Arm architectures utilized.
    

## Node pool creation procedure

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6949682471/CAEQLBiBgIC2vLuiixkiIDQ5OTAyZGI2ZGM3MzRkN2U4NTQzMjA0ZjFiZTBmYmFk4536399_20240718143455.658.svg)

## Basic features of node pools

The node pools in ACK One registered clusters provide the following features to facilitate node management.

**Feature**

**Description**

[Create custom scripts for node pools](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/user-guide/create-a-node-pool)

-   A custom script ensures that the node pool in a registered cluster can synchronize node status as normal for cloud resource scheduling.
    
-   A custom script must obtain environment variables issued by the registered cluster.
    

[Create and manage node pools](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/user-guide/create-and-manage-node-pools)

-   Support creating node pools through the console, configuring basic information, network configuration, instance specifications, storage configuration, expected number of nodes, etc.
    
-   Support adjusting some configurations of existing node pools. For the configuration items that can be edited and the operation notes, see the document for details.
    
-   If nodes are no longer needed, you can delete the node pool. Whether the expected number of nodes is enabled and the billing mode of the node pool will affect the behavior of node release.
    
-   Support viewing node pool details, including basic configuration information, resource dashboard, node list, scaling activities, etc.
    

[Manually scale node pools](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/user-guide/manually-scale-node-pools)

-   Support manually adjusting the expected number of nodes in the node pool to achieve scaling, keeping the number of nodes at the expected quantity and saving resource costs.
    
    Some non-standard operations such as removal, modification, and release may cause the node pool to not scale as expected. See the document for details.
    
-   Support configuring node auto scaling solutions. When the capacity planning of the cluster cannot meet the scheduling of application pods, automatically scale node resources.
    

[Manage node labels and taints](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/manage-taints-and-tolerations)

You can use labels and taints to manage and schedule resources in Kubernetes clusters. Labels can be used to identify and classify Kubernetes resources, such as nodes. Taints can be used by nodes to repel specific pods.

[Remove nodes from a node pool](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/user-guide/remove-nodes)

You can remove nodes that are no longer needed from a node pool. To prevent unexpected issues during node removal, we recommend that you remove nodes based on the standard removal procedure.

## Node pool billing

While using node pools and their automated O&M capabilities is free, the cloud resources within the node pool, such as ECS instances, incur charges from the respective cloud products.

-   For more information about the billing rules of ECS instances, see [Billing overview](/help/en/ecs/billing-overview).
    
    To change the billing type of existing nodes in the node pool, see [Change the billing method of an instance from pay-as-you-go to subscription](/help/en/ecs/change-the-billing-method-of-an-ecs-instance-from-pay-as-you-go-to-subscription-1#PAYGtoSubs-china). Note that changing the billing type of the node pool only affects newly added nodes and does not alter the billing type of existing nodes.
    
-   For details on scaling group billing, see [Billing overview](/help/en/auto-scaling/product-overview/billing-rules#concept-nw2-h3m-qfb).
    

## **Related terms**

Familiarize yourself with the following concepts and terms related to node pools before using them for the first time:

-   Scaling group: ACK leverages the [Auto Scaling](/help/en/auto-scaling/product-overview/what-is-auto-scaling) service for node pool expansion (scale-out) and reduction (scale-in) activities. Each node pool is directly associated with a single [scaling group](/help/en/auto-scaling/user-guide/scaling-group-overview#concept-25880-zh) instance. A scaling group consists of one or more ECS instances, which serve as worker nodes.
    
-   Scaling configuration: Node pools use scaling configurations to manage node properties at the foundational level. Auto Scaling configurations serve as templates for ECS instances during auto scaling, automatically creating instances based on these templates when scaling activities are triggered.
    
-   Scaling activity: Each node addition or removal in a node pool initiates a scaling activity. The system automatically completes all scaling actions and logs the activity, allowing you to review historical scaling records through the scaling activities of node pool.
    
-   Replace system disk: Some node pool operations, such as adding existing nodes or updating the container runtime, involve reinitializing nodes by replacing the system disk. This process does not alter node-specific properties like name, instance ID, or IP, but it does erase data on the system disk. Attached data disks remain unaffected.
    
    When ACK conducts disk replacement, it initiates node drainage to relocate pods from the affected node to other available nodes, adhering to the [PDB](https://kubernetes.io/docs/concepts/workloads/pods/disruptions/#pod-disruption-budgets). To maintain high service availability, we recommend that you implement a multi-replica deployment strategy, spreading workloads over several nodes, and to set up PDB for critical services to manage the simultaneous disruption of pods.
    
-   In-place upgrade: An alternative to disk replacement, this method updates and replaces necessary components directly on the original node without reinitializing it or affecting the data present on the node.
