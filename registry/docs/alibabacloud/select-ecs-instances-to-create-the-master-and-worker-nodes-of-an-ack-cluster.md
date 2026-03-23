Select appropriate Elastic Compute Service (ECS) instance types for your cluster nodes to ensure cluster stability and reliability. This topic describes the recommended ECS instance specifications for creating an Alibaba Cloud Container Service for Kubernetes (ACK) cluster.

## Cluster specification planning

Using many small ECS instances to create an ACK cluster can cause the following issues:

-   Network limitations: Small worker nodes have limited network resources.
    
-   Resource capacity: To ensure cluster stability and reliability, the system reserves some node resources, such as CPU, memory, and disk, for cluster management and infrastructure components. This reservation can significantly reduce the available resources on small ECS instances, which affects cluster performance and availability. For more information about the node resource reservation policy of ACK, see [Node resource reservation policy](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/resource-reservation-policy).
    
-   Resource fragmentation: When resources on a small ECS instance are allocated to a container, the remaining resources can become fragmented and unusable. These leftover resources cannot be used to create new containers or recover failed ones, which leads to resource waste. For example, if a node can allocate CPU only in whole units and an application requires only a small amount of CPU, the remaining CPU resources on that unit may be wasted.
    

Using large ECS instances provides the following benefits:

-   Improved network performance: Large instances have high network bandwidth, which is ideal for high-bandwidth applications. In addition, more containers can communicate within a single ECS instance, which reduces cross-node network traffic.
    
-   Efficient image pulling: On a large instance, an image is pulled only once and can then be used by multiple containers. In contrast, a cluster with many small ECS instances requires the same image to be pulled multiple times. This process takes longer when you scale the cluster by adding new instances and delays the response.
    

For more information about how to select ECS instance types, see the following sections.

## Select worker node specifications

-   Use node specifications with a minimum of 4 CPU cores and 8 GB of memory.
    
-   Calculate the total number of CPU cores required for daily use and determine the availability requirements for the cluster.
    
    For example, assume a cluster requires a total of 160 CPU cores and must tolerate a 10% fault rate. In this case, you can select at least 10 ECS instances with 16 CPU cores each. The peak operating load must not exceed 144 CPU cores (160 × 90%). If the required fault tolerance is 20%, you can select at least 5 ECS instances with 32 CPU cores each. The peak operating load must not exceed 128 CPU cores (160 × 80%). This configuration ensures that if one ECS instance fails, the remaining instances can still support your services.
    
    If your cluster's daily scale reaches about 1,000 CPU cores, you can use ECS Bare Metal Instances. For more information, see [Scenarios and benefits of ECS Bare Metal Instances](#section-qyd-lwp-1gb).
    
-   Determine the CPU-to-memory ratio, such as 1:2 or 1:4, based on the resource requirements of your pods. For memory-intensive applications, such as Java applications, consider using instance types with a 1:8 ratio.
    
-   To maintain service stability and ensure accurate resource scheduling, do not mix GPU-accelerated and non-GPU instance types in the same node pool.
    
-   Using persistent memory-optimized instances
    
    Worker nodes that are persistent memory-optimized instances, such as [re6p](/help/en/ecs/user-guide/overview-of-instance-families#re6p), use a hybrid memory architecture that includes both regular memory and persistent memory. To implement persistent storage, see [Non-volatile memory volumes](/help/en/ack/nvm-volume-overview/). For more information about persistent memory-optimized instances, see [Instance families](/help/en/ecs/user-guide/overview-of-instance-families).
    

## Select master node specifications

When you create an ACK cluster, core components such as etcd, kube-apiserver, and kube-controller run on the master nodes. For production ACK dedicated clusters, you must select appropriate master node specifications to ensure cluster stability. The required specifications depend on the cluster size, and larger clusters require higher specifications.

**Note**

Cluster size can be measured in several ways, such as by the number of nodes, pods, deployment frequency, or access volume. For simplicity, this topic measures cluster size by the number of nodes.

You can use small ECS instances for personal testing and learning. For production clusters, select master node specifications from the following table to maintain the master node load at a safe level.

**Number of nodes**

**Recommended master node specifications**

1 to 5 nodes

4 CPU cores, 8 GB memory (Specifications of 2 CPU cores and 4 GB memory or lower are not recommended)

6 to 20 nodes

4 CPU cores, 16 GB memory

21 to 100 nodes

8 CPU cores, 32 GB memory

100 to 200 nodes

16 CPU cores, 64 GB memory

200 to 500 nodes (Assess the blast radius risk)

64 CPU cores, 128 GB memory

## Scenarios and benefits of ECS Bare Metal Instances

ECS Bare Metal Instance is an innovative computing service developed by Alibaba Cloud based on state-of-the-art virtualization 2.0 technology. Virtualization 2.0 endows ECS bare metal instances with the elasticity of virtual machines (ECS instances), the performance and features of physical machines, and full support for nested virtualization.

ECS Bare Metal Instances are ideal for dedicated compute resources, encrypted computing, and building hybrid clouds. For more information about ECS Bare Metal Instances and supported instance families, see [Overview of ECS Bare Metal Instances](/help/en/ecs/user-guide/elastic-bare-metal-server-overview).

Typical scenarios for ECS Bare Metal Instances include the following:

-   Your cluster scales to approximately 1,000 CPU cores daily. A single ECS Bare Metal Instance provides at least 96 CPU cores. In large-scale scenarios, you can create a cluster using only 10 or 11 ECS Bare Metal Instances.
    
-   You need to rapidly scale the number of containers. For example, during E-commerce sales promotions, ECS Bare Metal Instances deliver better performance than physical servers with the same specifications. They can provide millions of vCPUs of compute capacity to handle traffic spikes.
    

## **Unsupported ECS instance types**

### **General limits**

For cluster stability and security reasons, ACK does not support using the instance types in the following table as worker or master nodes.

**Unsupported instance family or group**

**Example of unsupported instance type**

**Description**

**Notes**

t5, burstable instance family

ecs.t5-lc2m1.nano

The instance performance is unstable and may cause cluster instability.

None.

t6, burstable instance family

ecs.t6-c4m1.large

The instance performance is unstable and may cause cluster instability.

None.

Instance types with fewer than 4 vCPU cores

ecs.g6.large

The instance specifications are too low and may cause cluster instability.

To use low-specification ECS instance types for clusters and node pools, submit a request in [Quota Center](https://quotas.console.alibabacloud.com/white-list-products/csk/quotas).

c6t, security-enhanced compute-optimized instance family

ecs.c6t.large

Not supported.

None.

g6t, security-enhanced general-purpose instance family

ecs.g6t.large

Not supported.

None.

Super Computing Cluster (SCC) instance family

ecs.sccg7.32xlarge

Not supported.

None.

**Note**

For more information about the GPU-accelerated instance families supported by ACK clusters, see [GPU-accelerated instance families supported by ACK](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/overview-5/#a8527995a0ih5).

### **Limits of the Terway network plugin**

If you use the Terway network plugin, the maximum number of pods that a single node can run depends on the number of Elastic Network Interfaces (ENIs) that the node's ECS instance type supports. Therefore, the supported ECS instance types vary based on the Terway mode. For more information, see [Use the Terway network plugin](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-terway).

-   **Shared ENI mode** or **Shared ENI + Trunk ENI mode**: The pod limit for a single node must be greater than 11. The formula is: `(<a baseurl="t71560_v1_6_0.xdita" data-node="9548" data-root="84794" data-tag="xref" href="t9548.xdita#concept-sx4-lxv-tdb" id="7dec22dd9eofr">Number of ENIs supported by the ECS instance type</a> - 1) × Number of private IPs supported by a single ENI > 11`.
    
    For example, the ecs.g6.large instance type supports 2 ENIs, and a single ENI supports 6 private IPv4 addresses. The pod limit for a single node is `(2 - 1) × 6 = 6`. Therefore, this instance type cannot be used.
    
-   **Exclusive ENI mode**: The pod limit for a single node must be greater than 6. The formula is: `<a baseurl="t71560_v1_6_0.xdita" data-node="9548" data-root="84794" data-tag="xref" href="t9548.xdita#concept-sx4-lxv-tdb" id="027def5f024gd">Number of ENIs supported by the ECS instance type</a> - 1 > 6`.
    
    For example, the ecs.g6.xlarge instance type supports 3 ENIs. The pod limit for a single node is `3 - 1 = 2`. Therefore, this instance type cannot be used.
