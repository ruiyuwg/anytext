Alibaba Cloud Container Service for Kubernetes (ACK) reserves part of each node’s resources for Kubernetes components and system processes. This ensures stable operation of the operating system kernel, system services, and Kubernetes daemon processes. As a result, a node’s total capacity differs from its allocatable resources. ACK uses a default resource reservation policy. You can also customize resource reservations by configuring kubelet.

## **Limits**

Custom node resource reservation is supported only in clusters running Kubernetes version 1.20 or later. To upgrade your cluster, see [Manually upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster).

## Scope of impact

### **Custom** resource reservation and its **scope of impact**

To change resource reservation values, see [Configure kubelet for a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/customize-the-kubelet-configurations-of-a-node-pool#task-2250476). After you update the configuration, the change applies immediately to existing nodes in the node pool. New nodes—including nodes added during scaling operations or using the **Add Existing Node** feature—also use the updated configuration.

**Important**

-   **Do not** manually edit the kubelet configuration file on the command line. Doing so may cause configuration conflicts and unexpected behavior during node pool O&M.
    
-   Increasing resource reservation reduces allocatable resources. On nodes with high resource usage, this may trigger pod eviction. Set values carefully.
    

### **Default** resource reservation scope of impact

ACK may update the default resource reservation values over time. After an update, new reservation values apply automatically to nodes when you perform node-level configuration changes—for example, upgrading the cluster, upgrading the node pool, or modifying custom kubelet parameters for the node pool. If you do not perform such O&M actions, existing nodes in the node pool retain the previous reservation values to maintain stability.

## View node allocatable resources

Run the following command to view a node’s total capacity and allocatable resources.

```
kubectl describe node [NODE_NAME] | grep Allocatable -B 7 -A 6
```

Expected output:

```
Capacity:
  cpu:                4                 # Total CPU cores on the node.
  ephemeral-storage:  123722704Ki       # Total ephemeral storage on the node, in KiB.
  hugepages-1Gi:      0
  hugepages-2Mi:      0
  memory:             7925980Ki         # Total memory on the node, in KiB.
  pods:               64
Allocatable:
  cpu:                3900m             # Allocatable CPU cores.
  ephemeral-storage:  114022843818      # Allocatable ephemeral storage, in bytes.
  hugepages-1Gi:      0
  hugepages-2Mi:      0
  memory:             5824732Ki         # Allocatable memory, in KiB.
  pods:               64
```

## Compute node allocatable resources

Use this formula to calculate allocatable resources:`Allocatable = Capacity − Reserved − Eviction threshold`

Formula details:

-   Total resources correspond to the `Capacity` field in the output of the query node command.
    
-   For details about reserved resources, see [Resource reservation policy details](#section-e50-gjg-8gn).
    
-   For details about eviction thresholds, see [Node-pressure eviction](https://kubernetes.io/zh/docs/concepts/scheduling-eviction/node-pressure-eviction/).
    

## Resource reservation policy details

Reserved resources depend on several factors:

-   Higher-spec ECS instances typically run more pods. To maintain performance, ACK reserves more resources for Kubernetes components on these nodes.
    
-   Windows nodes require extra resources for the Windows operating system and Windows Server components. So they reserve more resources than Linux nodes. For more information, see [Create and manage Windows node pools](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-windows-node-pool#section-ijf-b1n-sm4).
    

ACK calculates reserved resources based on CPU and memory ranges. The total reserved amount equals the sum of reserved amounts across all ranges. In Kubernetes 1.28, ACK optimized the reservation algorithm to reduce CPU and memory reservations. We recommend upgrading your cluster. See [Manually upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster).

Reserved resources include resources for Kubernetes components (kubeReserved) and system processes (systemReserved). Each accounts for 50% of total reserved resources. For example, on a 4-core node: in clusters running Kubernetes 1.28 or later, ACK reserves 80 millicores total—40 millicores for kubeReserved and 40 millicores for systemReserved. In clusters running Kubernetes 1.20 through 1.27, ACK reserves 100 millicores total—50 millicores for kubeReserved and 50 millicores for systemReserved.

### **CPU resource reservation policy**

## Kubernetes 1.28 and later

The following diagram shows the total CPU reservation for compute nodes.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3038282771/CAEQVBiBgMCQwZKT5hkiIGYyMWI3ZTY0MWYzYzQ2YmI5YWIzNTE2MzRmNzc1NmQ33963382_20230830144006.372.svg)

For a 32-core node, total CPU reservation is calculated as follows:

`1000 × 6% + 1000 × 1% + 1000 × 2 × 0.5% + (32000 − 4000) × 0.25% = 150 millicores`

## Kubernetes 1.20 through 1.27

The following diagram shows the total CPU reservation for compute nodes.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3038282771/CAEQVBiBgMDwrpeT5hkiIDM2NGQwOTZlNGJhYzQ2MDNiZTU4NTQ5NGU3MmYzMWZl3963382_20230830144006.372.svg)

For a 32-core node, total CPU reservation is calculated as follows:

`100 + (32000 − 4000) × 2.5% = 800 millicores`

### Memory resource reservation policy

## Kubernetes 1.28 and later

This formula calculates total memory reservation.

`Total memory reservation = min(11 × ($max_num_pods) + 255, 25% × node memory)`. The final value is the smaller of `11 × ($max_num_pods) + 255` and `25% of node memory`.

-   `$max_num_pods`: Maximum number of pods supported on the node.
    
    **Note**
    
    Different network plug-ins support different maximum pod counts per node. For details and calculation methods, see [Maximum pods per node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/adjusting-the-number-of-node-pods#efbe8fb830ayv).
    
    > You can log on to the [Container Service Management Console](https://cs.console.alibabacloud.com) and view the maximum pod count on the **Nodes** page.
    
    -   Terway: `Maximum pods per node = Maximum container-network pods + Host-network pods`.
        
    -   Flannel: Set by you when creating the cluster.
        
    
-   `Node memory`: Actual usable memory, in MiB.
    

For example, if your cluster uses Terway with shared ENI and multiple IP addresses, and your node is an ecs.g7.16xlarge instance with 256 GiB of memory, then the maximum pod count is `(8 − 1) × 30 + 3 = 213`. Total memory reservation is `min(11 × (210 + 3) + 255, 256 × 1024 × 25%) = 2598 MiB`.

## Kubernetes 1.20 through 1.27

The following diagram illustrates the total reserved memory for a compute node.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3038282771/CAEQVBiBgIDgkZqT5hkiIDVkNmI4MDkxZGZlZTQ3MDJhMWJlYTcxNDk4MjczODJm3963382_20230830144006.372.svg)

For a node with 256 GiB of memory, total memory reservation is calculated as follows:

`4 × 25% + (8 − 4) × 20% + (16 − 8) × 10% + (128 − 16) × 6% + (256 − 128) × 2% = 11.88 GiB`

## Example default resource reservations for ACK nodes

**Note**

For details about ECS instance types, see [Instance families](/help/en/ecs/user-guide/overview-of-instance-families).

**Total node resources**

**Reserved resources (Kubernetes 1.28 and later)**

**Reserved resources (Kubernetes 1.20 through 1.27)**

Sample instance type

CPU (cores)

Memory

(GiB)

Maximum Pods per Node

(using the Terway inclusive ENI mode as an example)

CPU

(milicore)

Memory

(MiB)

CPU (millicores)

Memory (MiB)

ECS c7 instance types

2

4

15

70

420

100

1024

4

8

48

80

783

100

1843

8

16

48

90

783

200

2662

16

32

213

110

2598

400

3645

32

64

213

150

2598

800

5611

64

128

213

230

2598

1600

9543

128

256

423

390

4908

2400

12164

ECS ebmc7a instance types

256

512

453

710

5238

3040

17407

## **FAQ**

### **How do I view total CPU and memory on a node?**

#### **CPU**

Run this command to view total CPU cores.

```
cat /proc/cpuinfo | grep processor
```

Expected output:

```
processor       : 0
processor       : 1
processor       : 2
processor       : 3
```

#### **Memory**

Run this command to view total memory.

```
cat /proc/meminfo | grep MemTotal
```

Expected output:

```
MemTotal:        7660952 kB
```

### **Why is available memory less than the instance type specification?**

The memory size in the instance type specification includes all memory, including memory used by the operating system. So real-time available memory is always less than the specification. For more information, see [After purchasing an instance, why does the displayed memory differ from the instance type specification?](/help/en/ecs/user-guide/instance-faq/#section-h0l-nl7-tck).

## **References**

-   To configure custom resource reservations and eviction thresholds—and learn related best practices—see [Configure kubelet for a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/customize-the-kubelet-configurations-of-a-node-pool#task-2250476).
    
-   You can set resource requests for application pods based on allocatable resources. The sum of requests for all application pods on a node must not exceed that node’s allocatable resources. Otherwise, pods fail to schedule due to insufficient capacity. ACK provides a [resource profiling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/resource-profiling) feature for native Kubernetes workloads. It analyzes historical resource usage to help you set accurate pod requests. For step-by-step instructions, see [Create a Deployment](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-stateless-application-by-using-a-deployment).
