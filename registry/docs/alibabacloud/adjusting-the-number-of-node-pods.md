When your Container Service for Kubernetes (ACK) cluster runs out of pod capacity, you need to add more pods. The maximum number of pods per node depends on the network plug-in and the Elastic Compute Service (ECS) instance type. This limit is fixed by the instance type in Terway mode and by cluster creation settings in Flannel mode, and cannot be adjusted in most cases. This topic explains how pod limits are calculated for each network plug-in and how to increase pod capacity.

## Pod limits by network plug-in

### Terway

In Terway mode, the pod limit per node is determined by the number of elastic network interfaces (ENIs) that the ECS instance type provides. The formula varies by Terway mode:

**Terway mode**

**Maximum pods per node (node network)**

**Example (ecs.g7.4xlarge: 8 ENIs, 30 IPs per ENI)**

**Maximum pods with static IP addresses, separate vSwitches, and separate security groups**

Shared ENI

(EniQuantity - 1) x EniPrivateIpAddressQuantity

(8 - 1) x 30 = **210**

0

Shared ENI + Trunk ENI

EniTotalQuantity - EniQuantity

Depends on instance type

Depends on instance type

Exclusive ENI

EniQuantity - 1

(8 - 1) = **7**

EniQuantity - 1

Where:

-   `EniQuantity`: the number of ENIs provided by the ECS instance type.
    
-   `EniPrivateIpAddressQuantity`: the number of private IP addresses provided by each ENI.
    
-   `EniTotalQuantity`: the maximum number of network interfaces supported by the ECS instance type.
    

**Important**

The maximum number of ENI-bound pods is a fixed value determined by the instance type. Modifying the `maxPods` parameter only changes the limit for pods in `hostNetwork` mode -- it does not affect ENI-bound pods.

**Minimum pod requirements:**

**Terway mode**

**Minimum pod limit for a node to join the cluster**

Shared ENI

Greater than 11

Exclusive ENI

Greater than 6

**Host network pods:**

The default maximum number of host network pods is 3. Do not modify this value. Changing it may cause IP address allocation failures for new pods.

For more information about Terway, see [Work with Terway](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-terway).

### Flannel

In Flannel mode, the pod limit per node is set during cluster creation and cannot be changed afterward. The default maximum is 256 pods per node and can be increased for specific cluster types.

For more information, see [Work with Flannel](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-flannel).

## How to increase pod capacity

The following methods increase the total number of pods in a cluster. Not all methods increase the per-node pod limit.

**Method**

**Applies to**

**Per-node limit change**

**Impact**

Scale out the node pool (recommended)

Terway and Flannel

No

No impact on running workloads

Upgrade instance specifications

Terway only

Yes

Requires ECS restart; temporary service interruption

Recreate the cluster

Flannel only

Yes

Requires redeploying all workloads

### Scale out the node pool (recommended)

Add nodes to the cluster by manually or automatically scaling out the node pool. This has no impact on running workloads.

For instructions, see [Manually scale a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/scale-a-node-pool) and [Node scaling](/help/en/doc-detail/2746875.html).

**Note**

If the cluster contains too many nodes, availability and performance may degrade. For sizing guidance, see [Suggestions on using large-scale clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/suggestions-on-how-to-work-with-large-ack-pro-clusters).

### Upgrade instance specifications

**Applies to:** Terway only

Upgrade the ECS instance type of worker nodes to one that provides more ENIs. A larger instance type supports more ENI-bound pods per node. The pod limit does not increase linearly with instance specifications -- it depends on the ENI count of the [instance family](/help/en/ecs/user-guide/overview-of-instance-families).

**Process:**

1.  Assess workload impact and determine whether redundant nodes are required.
    
2.  Drain the target node and remove it from the cluster.
    
3.  Upgrade the instance specifications during off-peak hours. An ECS instance restart is required, which causes a temporary service interruption.
    
4.  Re-add the node to the cluster.
    

For details, see [Upgrade or downgrade the configurations of a worker node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/upgrade-the-configurations-of-a-worker-node). For billing information, see [Overview of instance configuration changes](/help/en/ecs/user-guide/overview-of-instance-configuration-changes). For instructions on removing and adding nodes, see [Remove a node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/remove-a-node-11) and [Add existing ECS instances](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-existing-ecs-instances-to-an-ack-cluster).

### Recreate the cluster with a new pod CIDR block

**Applies to:** Flannel only

Because Flannel pod limits are fixed at cluster creation, the only way to change the per-node limit is to create a new cluster with a different **Number of Pods per Node** value. This requires redeploying all workloads to the new cluster.

For instructions, see [Work with Flannel](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-flannel).

## FAQ

### How do I check the maximum pods supported by a node in Terway mode?

**Method 1 -- Console UI:** When creating a node pool, switch to the **Specify Instance Type** mode in the instance configuration section. The **Terway Mode (Supported Pods)** column appears in the **Instance Type** table. This column is not visible in the default **Specify Instance Attributes** mode.

**Method 2 -- API:** Call the [DescribeInstanceTypes](https://next.api.alibabacloud.com/api/Ecs/2014-05-26/DescribeInstanceTypes?lang=JAVA&params=%7B%22InstanceTypes%22:%5B%22ecs.c1.large%22%5D%7D&tab=DOC) operation in OpenAPI Explorer. Set the `InstanceTypes` parameter to the target instance type and click **Initiate Call**. The response includes `EniQuantity` (number of ENIs) and `EniPrivateIpAddressQuantity` (private IPs per ENI). Use the formula from the [Terway](#c025c016f400m) section to calculate the pod limit.

Alternatively, look up the ENI count in [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families).

### How do I check the pod limit for a specific node?

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the target cluster and click its name. In the left navigation pane, choose **Nodes** > **Nodes**.
    
3.  On the **Nodes** page, find the **Quota** column. This value equals the maximum number of pods that the node supports.
    

### Why is the pod limit reached right after cluster creation?

Cluster components such as CoreDNS, kube-proxy, and Terway run as pods and consume part of the pod quota. If many components are installed, a significant number of pods are created before you deploy any workloads. To free up capacity, use one of the methods in the [How to increase pod capacity](#7614b63998bl4) section.

### Can I increase the pod limit by manually modifying the ENI count or pod quota?

No. In Terway mode, the pod limit is determined by the ECS instance type. Manually increasing the pod quota beyond what the instance type supports causes new pods to fail due to IP address exhaustion. This also triggers errors in cluster inspections and upgrade prechecks.

To fix this, remove the misconfigured node and re-add it to the cluster. See [Remove a node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/remove-a-node-11) and [Add existing ECS instances](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-existing-ecs-instances-to-an-ack-cluster).

### Why do two nodes with the same CPU and memory have different pod limits?

Pod limits depend on the ENI count of the [instance family](/help/en/ecs/user-guide/overview-of-instance-families), not on CPU or memory specifications. Two instance types with identical vCPU and memory may belong to different instance families and provide different numbers of ENIs. In Flannel mode, the default per-node limit is 256 and can be increased for specific cluster types.
