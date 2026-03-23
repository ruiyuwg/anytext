Alibaba Cloud Linux 3 Container-optimized images are images optimized for container scenarios based on the default standard images for Alibaba Cloud Linux, which is a cloud-native operating system. Alibaba Cloud Linux 3 Container-optimized images are developed by Alibaba Cloud in-house based on the extensive practical experience of a large number of customers on Container Service for Kubernetes (ACK). Alibaba Cloud Linux 3 Container-optimized images are suitable for container scenarios that require higher business deployment density, faster startup speeds, and higher level of security isolation. You can use Alibaba Cloud Linux 3 Container-optimized images to deploy containerized services.

## Benefits

Alibaba Cloud Linux 3 Container-optimized images provide the following benefits:

-   Agile startup: Alibaba Cloud Linux 3 Container-optimized images are pre-integrated with container runtime software and toolchains and significantly simply the initialization process of Kubernetes cluster nodes. This helps reduce the node initiation time by up to 50% and improve the cluster scaling efficiency.
    
-   Security and reliability: The container runtime software and toolchains pre-integrated into Alibaba Cloud Linux 3 Container-optimized images are thoroughly tested and performance-tuned by Alibaba Cloud to ensure the stability, security, and reliability of container workloads.
    
-   Ready-to-use: Alibaba Cloud Linux 3 Container-optimized images are developed based on the extensive practical experience of global enterprise customers on ACK, contain optimized system-level kernel parameters for key performance metrics of container workloads, such as network throughput, storage I/O, and memory management metrics, and provide best-practice configurations that are rigorously verified.
    

Alibaba Cloud Linux 3 Container-optimized images use [control group (cgroup) v2](https://docs.kernel.org/admin-guide/cgroup-v2.html) and provide Linux kernel features for distributing system resources among cgroups. Cgroup v2 introduces several improvements, including a unified hierarchy design in API, safer subtree delegation to containers, enhanced resource allocation management, and isolation across multiple resources.

In Kubernetes, the kubelet and container runtime interface with Linux cgroups for resource management, such as limiting the amount of CPUs or memory that each container in a pod can use. Kubernetes supports cgroup v2 starting from version 1.25, moves cgroup v1 support into maintenance mode starting from version 1.31, and will remove cgroup v1 support in future versions. Specific community-enhanced features, such as MemoryQoS and Pressure Stall Information (PSI), are fully supported in cgroup v2. For information about cgroup v2, see [About cgroup v2](https://kubernetes.io/docs/concepts/architecture/cgroups/).

## Billing

Alibaba Cloud Linux 3 Container-optimized images are provided free of charge. When you use an Alibaba Cloud Linux 3 Container-optimized image to create an Elastic Compute Service (ECS) instance, you may be charged for other resources used by the instance, such as vCPU, memory, storage, public bandwidth, and snapshots. For information about the billing of ECS resources, see [Billing overview](/help/en/ecs/billing-overview#concept-isb-scd-5db).

## Scenarios

If your business requires a Kubernetes-based containerized deployment, you can use an Alibaba Cloud Linux 3 Container-optimized image to create ECS instances that run Alibaba Cloud Linux 3 Container-optimized Edition as nodes.

## Instructions

When you create an ACK cluster, we recommend that you use Alibaba Cloud Linux 3 Container-optimized images as operating system images on nodes. For more information, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/) and [Create and manage a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool).

When you create a Kubernetes cluster on Alibaba Cloud, use Alibaba Cloud Linux 3 Container-optimized images as operating system images on nodes. For more information, see [Create a subscription instance on the Quick Launch tab](/help/en/ecs/user-guide/create-a-subscription-instance-on-the-quick-launch-tab).

### Compatibility with cgroup v2

Alibaba Cloud Linux 3 Container-optimized images use cgroup v2. Cgroup v1 and cgroup v2 differ in terms of general interfaces and subsystem interfaces. If applications deployed in an operating system that supports cgroup v2, such as Java applications, need to directly access a cgroup filesystem, make sure that your tool versions meet the compatibility requirements of cgroup v1 and cgroup v2. The following table describes the affected software in container scenarios and provides solutions on how to troubleshoot the software.

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
