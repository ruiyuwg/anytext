When the size of your Container Service for Kubernetes (ACK) cluster cannot meet the pod scheduling requirements, you can use the node scaling features to automatically scale node resources. ACK provides the node auto scaling and node instant scaling solutions. Compared with node auto scaling, node instant scaling is more efficient and easier to use.

## **Before you begin**

To better use the node scaling solutions of ACK and choose the solution that best suits your business, we recommend that you read this topic before you enable the node scaling feature.

Before you read this topic, we recommend that you understand the terms of manual scaling, auto scaling, horizontal scaling, and vertical scaling. For more information, see [Kubernetes official documentation](https://kubernetes.io/docs/concepts/workloads/autoscaling/).

## How node scaling works

Node scaling in Kubernetes differs from the traditional scaling model that is based on resource utilization thresholds. Typically, you need to fix the node scaling issue after you migrate your business from data centers or other orchestration systems to Kubernetes.

The traditional scaling model works based on resource utilization. For example, a cluster contains three nodes. When the CPU utilization and memory usage of the nodes exceed the thresholds, the system adds new nodes to the cluster. However, this model has the following issues.

**How are scaling thresholds determined?**

The resource utilization of hot nodes in the cluster is usually higher than other nodes.

-   If resource scaling is triggered based on the average resource utilization of nodes in the cluster, the resource utilization of hot nodes is spread to other nodes. Consequently, resources cannot be scaled out promptly when the resource utilization of hot nodes exceeds the threshold.
    
-   If resource scaling is triggered based on the highest resource utilization, resource waste usually occurs. This adversely affects the entire cluster.
    

**How are loads reduced after nodes are added?**

In a Kubernetes cluster, pods are the smallest deployable units for applications. Pods are deployed on different nodes. When the resource utilization of a pod is high, even if the node or cluster that hosts the pod is scaled out, the number of pods deployed for the application or the resource limits of the pods remain unchanged. In this case, the loads of the node cannot be balanced to the newly added nodes.

**How is node scaling triggered and performed?**

If resource scaling is triggered based on resource utilization, pods with heavy resource requests and low resource usage may be evicted. When the cluster contains large numbers of the preceding pods, the schedulable resources in the cluster are exhausted. Consequently, some pods become unschedulable.

ACK uses the node scaling (resource layer) and workload scaling (scheduling layer) models to fix the preceding issue. The node scaling feature triggers pod (schedulable unit) scaling based on resource utilization. The following sections describe node scaling in details.

**How are scale-out activities triggered?**

The node scaling model listens to pods that fail to be scheduled to determine if a scale-out activity is needed. When pods fail to be scheduled due to insufficient resources, the node scaling model starts to simulate pod scheduling, selects a node pool with the auto scaling feature enabled and can provide required resources to host these pods, and adds nodes in the node pool to the cluster.

**Note**

The scheduling simulation treats each node pool with the auto scaling enabled as an abstracted node. The instance types specified in the configuration of the node pool are abstracted into the CPU capacity, memory capacity, and GPU capacity of the node. In addition, the labels and taints of the node pool are mapped to the labels and taints of the node. The scheduler adds the abstracted node to the schedulable list during the scheduling simulation. When the scheduling conditions are met, the scheduler calculates the required number of nodes and adds nodes in the node pool to the cluster.

**How are scale-in activities triggered?**

The node scaling model scales in nodes only in node pools with the auto scaling feature enabled. It cannot manage static nodes, including nodes that are not in the node pool with the auto scaling feature enabled. The node scaling model matches each node against the scale-in conditions. When the resource utilization of a node is lower than the scale-in threshold, a scale-in activity is triggered. Then, the node scaling model attempts to simulate pod eviction on the node to check whether the node can be drained. Non-DaemonSet pods in the kube-system namespace and PodDisruptionBudget pods skip the node and choose other candidate nodes. The node is drained before it is removed. After pods on the node are evicted to other nodes, the node is removed.

**How is a node pool selected when multiple node pools with the auto scaling feature enabled exist?**

Choosing between multiple node pools with the auto scaling feature enabled is equivalent to choosing between multiple abstracted nodes. The same scheduling policy is applied. Scores are assigned to node pools with the auto scaling feature enabled. The autoscaler first matches nodes against the scheduling policy and selects nodes based on the affinity policy, such as `node affinity`.

If no proper node can be selected based on the preceding policies, the node auto scaling feature filters nodes based on the least-waste principle. The key of the least-waste principle is to identify the node with the least idle resources after the scale-out activity.

**Note**

When a GPU-accelerated node pool and a CPU-accelerated node pool have the auto scaling feature enabled and both node pools meet the scale-out conditions, the CPU-accelerated node pool is prioritized.

By default, the node instant scaling feature evaluates both instance availability and cost. When multiple instance types are suitable for a scale-out, it prioritizes the one that offers the best combination of sufficient capacity and low price.

**How can I improve the success rate of auto scaling?**

The success rate of auto scaling depends on the following factors:

-   Whether the scheduling conditions are met
    
    After you create a node pool with the auto scaling feature enabled, you need to confirm the pod scheduling policy that suits the node pool. If you cannot confirm the policy, configure `nodeSelector` to select the label of the node pool and perform a scheduling simulation.
    
-   Whether resources are sufficient
    
    After the scheduling simulation is complete, the system automatically selects the node pool with the auto scaling feature enabled and adds nodes in the node pool to the cluster. However, the inventory of Elastic Compute Service (ECS) instance types specified in the node pool configuration affects the success rate of the scale-out activity. Therefore, we recommend that you specify multiple instance types across different zones to improve the success rate.
    

**How can I accelerate auto scaling?**

-   Method 1: Use the swift mode to accelerate auto scaling. After a node pool with the auto scaling feature enabled warms up by completing a scale-out activity and a scale-in activity, the node pool runs in swift mode. For more information, see [Enable node auto scaling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/auto-scaling-of-nodes).
    
-   Method 2: Use a custom image based on Alibaba Cloud Linux 3 to improve the efficiency of resource delivery at the Infrastructure as a Service (IaaS) layer by 50%. For more information, see [Create custom images](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-custom-images).
    

## Scaling solutions: node auto scaling and node instant scaling

Node scaling is a resource-level feature that automatically scales the number of nodes in your cluster. When the cluster's existing capacity is insufficient to schedule new pods, the autoscaler provisions additional nodes to provide the required capacity.

ACK provides two distinct solutions for node scaling.

### **Introduction**

**Important**

-   Only one scaling component can run in a cluster, and the two scaling solutions cannot be used at the same time. For more information about how to enable node scaling, see [Enable node auto scaling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/auto-scaling-of-nodes) and [Enable Node Instant Elasticity](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/instant-elasticity).
    
-   The scaling statistics used in this topic are theoretical values and auto scaling is implemented based on custom images. The actual statistics in your business environment shall prevail. For more information about custom images, see [Create custom images](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-custom-images).
    
-   Both scaling solutions apply to nodes within auto scaling-enabled node pools.
    

**Solution**

**Component**

**Description**

Solution 1: node auto scaling

cluster-autoscaler

The component checks and updates cluster status in a round-robin manner. When scaling conditions are met, the component automatically scales nodes.

Solution 2: node instant scaling

ACK GOATScaler

An event-driven node autoscaler. In large clusters or consecutive scale-out scenarios, the component can ensure efficient resource delivery. A cluster is considered large if either a node pool with the auto scaling feature enabled contains more than 100 nodes, or more than 20 node pools in the cluster have the auto scaling feature enabled. The scaling speed (time taken from the initial scheduling failure to a successful scheduling), success rate, and resource fragment reduction of this component are 45 seconds, 99%, and 30%, respectively. This component is more extensible if it is used with custom scaling policies.

### Solution **comparison**

If a node pool in your cluster has the auto scaling feature enabled and does not use the swift scaling mode, the node instant scaling feature is compatible with the original semantics and behavior of the node pool configuration. In addition, you can seamlessly enable the node instant scaling feature for all types of pods. This section compares node instant scaling with node auto scaling.

**Benefit**

Node auto scaling

Node instant scaling

Scaling speeds and efficiency

A scaling activity requires 60 seconds in standard mode and 50 seconds in swift mode.

You can use event-driven scaling together with Alibaba Cloud ContainerOS to accelerate resource scaling. In this case, each scaling activity requires 35 to 55 seconds.

When the duration of a scaling activity reaches 1 minute, auto scaling encounters a performance bottleneck. The efficiency of auto scaling fluctuates based on the number of node pools and scaling scenarios. For example, if the number of node pools exceeds 100, the duration of a scaling activity is increased to 100 to 150 seconds.

The duration of a scaling activity does not significantly increase when the number of node pools or pods increases. Therefore, this solution is suitable for scenarios that require fast scaling.

This solution uses the round-robin mode and relies on cluster status updates. The minimum latency of auto scaling is 5 seconds.

This solution is event-driven. The latency of auto scaling is 1 to 3 seconds.

Resource scaling success rate

The inventory of cloud resources changes frequently. Due to issues such as the use of different instance types and insufficient inventory, the success rate of node auto scaling is approximately 97%.

You can configure an auto inventory selection policy to filter out insufficient instance types among thousands of Alibaba Cloud instance types based on the predefined filter conditions and priorities, and then select the optimal instance type or add other instance types that meet the scale-out conditions when all of the specified instance types are insufficient. This greatly simplifies the O&M work and increases the success rate of auto scaling to 99%.

Scale-out activities are performed based on the instance types specified in the node pool configuration. When multiple instance types are specified, the instance type with the lowest specifications is preferably selected during a scale-out activity.

You can specify multiple instance types for scale-out activities.

The autoscaler periodically retries when resource scaling fails.

The autoscaler can generate alerts when the specified instance types are insufficient.

Use and O&M

Compared with node auto scaling, node instant scaling is easier to use in the following aspects:

-   Node pool configuration maintenance: The node instant scaling solution can automatically select instances across instance types and zones based on instance attributes to host pending pods. However, when node auto scaling is used, you need to manually maintain node pool configurations to ensure that all pods can be scheduled. Therefore, when the pod configuration is updated, you must update the node pool configuration accordingly.
    
-   Node O&M: Exceptions that occur during scaling activities are notified by pod events. This allows developers to focus on pod lifecycle management.
    
-   Feature extension: Feature extension is supported. For example, both solutions can be used with [Descheduler](https://github.com/kubernetes-sigs/descheduler) to prepare elastic resources. The node instant scaling solution is intrusion-free. It allows you to define custom actions in resource provision policies and node lifecycle management to support secondary development.
    

Scheduling policy

In addition to the scheduling features provided by the node auto scaling solution, the node instant scaling solution also supports the following features:

-   [Topology](https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/): This feature can meet cross-zone high availability requirements.
    
-   [Pod Disruption Budgets](https://kubernetes.io/docs/concepts/workloads/pods/disruptions/#/pod-disruption-budgets): This feature limits the number of pods that can be voluntarily evicted at the same time in a multi-pod application, ensuring application stability during planned disruptions.
    

The node instant scaling solution can reduce the resource fragment rate to 30% by using the [Bin Packing](https://kubernetes.io/docs/concepts/scheduling-eviction/resource-bin-packing/) and [PreBind](https://kubernetes.io/docs/concepts/scheduling-eviction/scheduling-framework/#pre-bind) (custom feature) policies.

### Limits of **node instant scaling**

When you use the node instant scaling solution, you also need to understand the limits of node instant scaling.

-   Node instant scaling does not support the swift mode.
    
-   A node pool can contain up to 180 nodes per scale-out batch.
    
-   Scale-in cannot be disabled for a specific cluster.
    
    **Note**
    
    To disable scale-in for a specific node, see [How do I prevent node instant scaling from removing specific nodes?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-instant-scaling#title-i8u-c40-ffz)
    
-   The node instant scaling solution does not support checking the inventory of preemptible instances. If the **Billing Method** of the node pool is set to preemptible instances and the option to **Use Pay-as-you-go Instances When Spot Instances Are Insufficient** is enabled for the node pool, the pay-as-you-go instance is scaled out even if there is sufficient inventory of preemptible instances.
    

## **Suggestions on selecting a node scaling solution**

Refer to the [Solution comparison](#b4fb6d551dcou) and [Limits of node instant scaling](#78170803f4cw2) sections. If your workload has lower requirements for scaling speed, resource delivery certainty, and O&M cost, and you cannot accept the limitations of node instant scaling, then the node auto scaling may be a suitable choice.

Conversely, if your workload has any of the following requirements, node instant scaling is the recommended solution:

-   As a cluster's size increases, the efficiency of node auto scaling is severely compromised. If you use large clusters, choose node instant scaling because the cluster size has minor impacts on its scaling efficiency. A cluster is considered large if either a node pool with the auto scaling feature enabled contains more than 100 nodes, or more than 20 node pools in the cluster have the auto scaling feature enabled.
    
-   Your business requires faster resource scaling speed. A scaling activity in standard mode of node auto scaling requires 60 seconds and a scaling activity in standard mode of node instant scaling requires only 45 seconds.
    
-   The number of scale-out batches is uncontrollable. A node pool is usually involved in multiple consecutive scale-out activities. In consecutive scaling scenarios, the performance of node auto scaling is compromised and the scaling efficiency frequently fluctuates. However, node instant scaling still requires about 45 seconds to complete a scaling activity.
    

## Usage notes

#### **Quotas and limits**

-   You can add up to 200 custom route entries to a route table of a virtual private cloud (VPC). To increase the quota limit, log on to the [Quota Center console](https://quotas.console.alibabacloud.com/products/vpc/quotas?query=route) and submit an application. For more information about the quotas of other resources and how to increase the quota limits, see the [Dependent cloud service quotas](/help/en/ack/product-overview/limits#section-9sf-skx-0fx) section of the "Quotas and limits" topic.
    
-   We recommend that you properly configure the maximum number of nodes in a node pool with the auto scaling feature enabled. Make sure that the dependent resources and quotas are sufficient for the specified number of nodes, such as the VPC CIDR blocks and vSwitches. Otherwise, scale-out activities may fail. For more information about the maximum number of nodes supported by a node pool with the auto scaling feature enabled, see [Enable node auto scaling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/auto-scaling-of-nodes#step-5pj-lz8-cgl). For more information about how to plan an ACK network, see [Network planning of an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/kubernetes-cluster-network-planning).
    
-   The node scaling feature does not support subscription nodes. If you want to create a node pool with the auto scaling feature enabled, do not set the billing method of the node pool to subscription. If you want to enable the auto scaling feature for an existing node pool, make sure that the node pool does not have subscription nodes.
    
-   The node scaling feature is incompatible with [SideCar Containers](https://kubernetes.io/docs/concepts/workloads/pods/sidecar-containers/). Deploy workloads using Sidecar Containers to node pools with auto scaling disabled.
    

#### **Maintenance of dependent resources**

If elastic IP addresses (EIPs) are associated with ECS nodes added by the node scaling feature, do not directly delete the ECS nodes in the ECS console. Otherwise, the EIPs cannot be automatically released.

## **References**

-   For more information about node auto scaling and node instant scaling and their differences, see [Enable node auto scaling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/auto-scaling-of-nodes) and [Enable Node Instant Elasticity](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/instant-elasticity).
    
-   For more information about the frequently asked questions (FAQ) about node scaling, see [Node autoscaling FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling).
    
    **Expand to view FAQ index about** node auto scaling
    
    **Category**
    
    **Subcategory**
    
    **Link**
    
    Scale-out and scale-in behavior of node autoscaling
    
    [Known limitations](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#0578d5906a4ve)
    
    [Scale-out behavior](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#3d73c9bce2x1y)
    
    -   [What scheduling policies does the cluster-autoscaler component use to determine whether an unschedulable pod can be scheduled to a node pool where autoscaling is enabled?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#5e458ca0fdeyz)
        
    -   [What resources can the cluster-autoscaler component simulate and check?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#9081e1305c7f2)
        
    -   [Why does the node autoscaling component fail to create nodes?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#4bd69dc0fda87)
        
    -   [If a scaling group is configured with multiple instance types, how are the resources of this scaling group calculated during autoscaling?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#29a70230fdx9t)
        
    -   [During autoscaling, how does the system choose among multiple node pools where autoscaling is enabled?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#5679b320fde95)
        
    -   [How do I configure custom resources for a node pool where autoscaling is enabled?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#fff85a7068y34)
        
    -   [Why does enabling auto scaling for a node pool fail?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#b348c46bdcxb1)
        
    
    [Scale-in behavior](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#d965c40777nu9)
    
    -   [Why does the cluster-autoscaler component fail to scale in nodes?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#51d75430fdnp3)
        
    -   [How do I enable or disable eviction for a specific DaemonSet?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#section-kg5-cli-y3i)
        
    -   [What types of pods can prevent the cluster-autoscaler component from removing a node?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#4000d01068gao)
        
    
    [Extension support](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#4d35a60fc8vqv)
    
    [Does the cluster-autoscaler component support CRDs?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#b5fff6905c7fv)
    
    Custom scaling behavior
    
    [Control scaling behavior using pods](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#c3186b2465my5)
    
    -   [How do I delay the scale-out response time of the cluster-autoscaler component for unschedulable pods?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#c7d74de068d5w)
        
    
    [Control scaling behavior using nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#9008f67409m0b)
    
    -   [How do I prevent a node from being scaled in by the cluster-autoscaler component?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#9197847068xlh)
        
    -   [How do I use pod annotations to affect node scale-ins by the cluster-autoscaler component?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#section-mwn-b6z-apt)
        
    
    cluster-autoscaler component
    
    -   [How do I upgrade the cluster-autoscaler component to the latest version?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#bb7882f068f94)
        
    -   [What operations trigger automatic updates of the cluster-autoscaler component?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#60a012b0effpp)
        
    -   [Role authorization for an ACK managed cluster is complete, but node scaling activities still do not work. Why?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#cfae8542e6jyf)
        
    
    **Expand to view FAQ index about** node instant scaling
    
    **Category**
    
    **Subcategory**
    
    **Jump link**
    
    Scaling behavior of node instant scaling
    
    [Known limitations](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-instant-scaling#dbbc106bc8vq9)
    
    [Scale-out behavior](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-instant-scaling#8cdf6cea0camp)
    
    -   [What resource types can node instant scaling simulate?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-instant-scaling#9c9ecbb2acns7)
        
    -   [Does node instant scaling support scaling out nodes of a suitable instance type from a node pool based on pod resource requests?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-instant-scaling#4137b11f51wpg)
        
    -   [If a node pool has multiple instance types, how does node instant scaling select one by default?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-instant-scaling#b075558334gwl)
        
    -   [When using node instant scaling, how can I monitor real-time changes in the instance type inventory of a node pool?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-instant-scaling#4331ccfc84sau)
        
    -   [How can I optimize the node pool configuration to prevent scale-out failures due to insufficient inventory?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-instant-scaling#137ca271cat5s)
        
    -   [Why does node instant scaling fail to add nodes?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-instant-scaling#b273b386cdm60)
        
    -   [How do I configure custom resources for a node pool that has node instant scaling enabled?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-instant-scaling#VvAtw)
        
    
    [Scale-in behavior](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-instant-scaling#3b166483bd2uz)
    
    -   [Why does node instant scaling fail to remove nodes?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-instant-scaling#b30d4d1e9d3o6)
        
    -   [What types of pods can prevent node instant scaling from removing nodes?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-instant-scaling#ed53341b2943s)
        
    
    Custom scaling behavior
    
    [Control scaling behavior using pods](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-instant-scaling#cbf256126a6as)
    
    [How do I control node scale-in using pods?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-instant-scaling#e47756a141fsu)
    
    [Control scaling behavior using nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-instant-scaling#c963086718o0w)
    
    -   [How do I specify which nodes to delete during a scale-in?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-instant-scaling#7f37a07acft6o)
        
    -   [How do I prevent node instant scaling from removing specific nodes?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-instant-scaling#ed6ea25edd6ik)
        
    -   [Can node instant scaling scale in only empty nodes?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-instant-scaling#c34be0edbad6p)
        
    
    [About the node instant scaling component](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-instant-scaling#af50f8b5d0lih)
    
    -   [Are there any operations that trigger the automatic update of the node instant scaling component?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-instant-scaling#ea3469c40bxi6)
        
    -   [Role authorization for an ACK managed cluster is complete, but node scaling activities still do not work. Why?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-instant-scaling#bd96493c2brkn)
