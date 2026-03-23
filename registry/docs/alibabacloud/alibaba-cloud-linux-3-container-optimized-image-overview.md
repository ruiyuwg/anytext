Alibaba Cloud Linux 3 Container-optimized images are images optimized for container scenarios based on the default standard images for Alibaba Cloud Linux, which is a cloud-native operating system. Alibaba Cloud Linux 3 Container-optimized images are developed by Alibaba Cloud in-house based on the extensive practical experience of a large number of customers on Container Service for Kubernetes (ACK). Alibaba Cloud Linux 3 Container-optimized images are suitable for container scenarios that require higher business deployment density, faster startup speeds, and higher level of security isolation. You can use Alibaba Cloud Linux 3 Container-optimized images to deploy containerized services.

## Benefits

Using Alibaba Cloud Linux 3 Container-optimized Edition provides you with the following benefits:

-   Agile startup: Alibaba Cloud Linux 3 Container-optimized images are pre-integrated with container runtime software and toolchains, significantly simplifying the initialization process of Kubernetes cluster nodes. This reduces node initialization time by up to 50%, effectively improving cluster scaling efficiency.
    
-   Security and reliability: The container runtime software and toolchains pre-integrated into Alibaba Cloud Linux 3 Container-optimized images are thoroughly tested and performance-tuned by Alibaba Cloud to ensure the stability, security, and reliability of container workloads.
    
-   Ready-to-use: Alibaba Cloud Linux 3 Container-optimized Edition is based on rich practical experience accumulated from global enterprise customers using Container Service for Kubernetes. It implements system-level kernel parameter optimizations for key performance metrics of container workloads, such as network throughput, storage I/O, and memory management, providing rigorously verified best practice configurations.
    

Alibaba Cloud Linux 3 Container-optimized Edition uses [cgroup v2](https://docs.kernel.org/admin-guide/cgroup-v2.html) (Control Group 2) and Linux kernel features that allocate system resources between them. cgroup v2 brings several improvements, including a single unified hierarchy design for APIs, safer container subtree delegation, enhanced resource allocation management, and isolation capabilities across multiple resources.

In Kubernetes, kubelet and container runtime use the Linux kernel's cgroup (Control Group) technology for resource management, such as limiting the amount of CPU or memory resources that each container in a Pod can use. Kubernetes supports cgroup v2 starting from version 1.25, moves cgroup v1 into maintenance mode from version 1.31, and will remove support for cgroup v1 in future versions. Some community enhanced features such as MemoryQoS and PSI features will also be fully supported in cgroup v2. For more information about Kubernetes and cgroups, see [About cgroup v2](https://kubernetes.io/docs/concepts/architecture/cgroups/).

## Billing

Alibaba Cloud Linux 3 Container-optimized Edition is a free image. However, when you use this image to create an ECS instance, you need to pay for other resources such as vCPU, memory, storage, public bandwidth, and snapshots. For billing details, see [Billing overview](/help/en/ecs/billing-overview#concept-isb-scd-5db).

## Scenarios

When your business requires containerized deployment through Kubernetes, you can choose Alibaba Cloud Linux 3 Container-optimized Edition as the node operating system to create your ECS instances.

## Instructions

We recommend that you select Alibaba Cloud Linux 3 Container-optimized Edition as the cluster node system image during the configuration process of Container Service for Kubernetes (ACK). For specific steps, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/) and [Create and manage node pools](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool).

When you build your own Kubernetes cluster on Alibaba Cloud, select Alibaba Cloud Linux 3 Container-optimized Edition as the cluster node system image. For specific steps, see [Create a subscription instance on the Quick Launch tab](/help/en/ecs/user-guide/create-a-subscription-instance-on-the-quick-launch-tab).

## **Compatibility with cgroup v2**

Alibaba Cloud Linux 3 Container-optimized Edition uses cgroup v2 (Control Group 2) technology. There are differences between cgroup v2 and cgroup v1 in both general interfaces and subsystem interfaces. If applications deployed in an operating system that supports cgroup v2, such as Java applications, need to directly access a cgroup filesystem, make sure that your tool versions meet the compatibility requirements. The following table describes the affected software in container scenarios and provides solutions.

Affected software

Solution

cAdvisor

If you use cAdvisor as a standalone DaemonSet to monitor pods and containers, update cAdvisor to v0.43.0 or later.

Java applications

Dragonwell: 11.0.16.12, 8.15.16-GA, and later.

OpenJDK/HotSpot: jdk8u372, 11.0.16, 15, and later.

IBM Semeru Runtimes: 8.0.382.0, 11.0.20.0, 17.0.8.0, and later.

IBM Java: 8.0.8.6 and later.

Go applications

Upgrade uber-go/automaxprocs to v1.5.1 or later.

For information about how to migrate to cgroup v2, see [Migrating to cgroup v2](https://kubernetes.io/docs/concepts/architecture/cgroups/#migrating-cgroupv2).
