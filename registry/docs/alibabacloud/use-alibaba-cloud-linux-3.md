Container Service for Kubernetes (ACK) allows you to create nodes that run the Alibaba Cloud Linux 3 operating system. These nodes use the high-performance kernel of Alibaba Cloud Linux 3 that is optimized for various scenarios. This topic describes the benefits and use scenarios of Alibaba Cloud Linux 3 and how to use it as the operating system image for nodes in ACK clusters.

## **Overview**

Alibaba Cloud Linux is a Linux operating system distribution developed by Alibaba Cloud. It translates achievements from the open source community into enhanced features and maintains excellent quality through a comprehensive quality assurance system. Alibaba Cloud Linux is deeply optimized for Alibaba Cloud infrastructure and provides 10-year enterprise-class support and maintenance to improve user experience. Alibaba Cloud Linux 3 inherits the features of Alibaba Cloud Linux 2, is compatible with Container Service for Kubernetes, and provides the following optimizations:

-   Provides new basic software, applications, and features developed by the community.
    
-   Optimizes compatibility with Container Service for Kubernetes and delivers continuous improvements for cloud computing and user scenarios.
    
-   Provides deep optimizations for 8th generation computing instances, such as Yitian, Sapphire Rapids, and Genoa.
    
-   Offers proprietary OS features, optimizes performance, and improves ease of use.
    
-   Provides detailed release notes to help you understand changes and updates.
    

## **Benefits**

**Benefit**

**Description**

New basic software and new applications

-   Kernel: Linux kernel 5.10 developed by Alibaba Cloud.
    
-   Compiler: The default compilers are GCC 10, LLVM 15, and Rust 1.66. GCC Toolset 12 is also supported.
    
-   Language libraries: glibc 2.32, OpenJDK 1.8, Python 3.8, Golang 1.19, and Node.js 14.21.
    
-   Mainstream applications:
    
    -   Web applications: Nginx 1.20 and HTTPd 2.4.37.
        
    -   Databases: Redis 6.2.7, MySQL 8.0.32, PostgreSQL 13.10, and MariaDB 10.5.16.
        
    -   AI applications: Compatible with the AI ecosystem software repository (epao) from the OpenAnolis community.
        
-   Drivers: CUDA 11.4.4 and NVIDIA Driver 470.199.02.
    
-   Frameworks: TensorFlow 2.5.0 and PyTorch 1.10.1.
    
-   Containers: nvidia-container-toolkit 1.13.1 and libnvidia-container 1.13.1.
    

Optimized integration with ACK and ECS

Alibaba Cloud Linux 3 works with ECS to accelerate the startup of ECS instances and provides built-in environment dependencies. The auto scaling feature of ACK also reduces the time required for creating individual nodes that run Alibaba Cloud Linux 3.

Through in-depth integration with ECS and optimizations of kernel technologies, compilers, and configurations, Alibaba Cloud Linux 3 significantly improves the runtime performance of each node in an ACK cluster. This results in performance improvements of over 30% in scenarios such as big data computing, web servers, databases, and AI.

New operating system technologies to improve user experience in the cloud

-   Completely supports cgroup v2
    
    cgroup v2 is an API for the next-generation Linux cgroup mechanism. It provides unified resource control capabilities for processes or process groups. Compared to cgroup v1, cgroup v2 offers the following improvements:
    
    -   An independent and unified hierarchy
        
    -   A more securely designed tree structure
        
    -   New kernel Pressure Stall Information (PSI) features
        
    -   Enhanced resource allocation and management capabilities
        
    
-   Completely supports Extended Berkeley Packet Filter (eBPF)
    
    -   An improved eBPF programming and debugging experience, including fewer limits on specific instructions, optimized performance, and support for debugging of source code that corresponds to the visible bytecode.
        
    -   Higher performance in Express Data Path (XDP) and kernel debugging.
        
    -   Support for more user-space frameworks, such as BPF skeleton and libbpf-bootstrap, to optimize the BPF programming experience.
        
    -   Better support for networking and security projects (Cilium), including network bandwidth control, traffic encryption, session affinity, routing at the BPF layer, and proxies.
        
    -   A more efficient and lightweight implementation for tools such as BCC and Bpftrace.
        
    
-   Provides page cache limits and supports cgroup-level limits
    
    The Linux operating system controls and manages the memory usage of process groups through the Memory Control Group (memcg) mechanism. It sets memory limits for each process group (or task group) to avoid resource waste. If the memcg reaches the memory upper limit, the system triggers memory reclaim for the memcg, which may affect the performance of the current process. The Linux system provides the [memcg backend asynchronous reclaim](/help/en/alinux/user-guide/memcg-backend-asynchronous-reclaim) feature. However, this feature has limited support for handling unexpected spikes of memory requests. In some tasks, such as Spark computing, the page cache usually occupies a large amount of memory, most of which is used by dirty pages. The slow reclaim of dirty pages can lead to unexpected out of memory (OOM). To ensure the stability of services and reduce unexpected OOM errors, it is important to limit the use of the page cache.
    
    Alibaba Cloud Linux 3 provides the page cache limit feature that allows you to limit the use of the page cache at the memcg level, including the root group. You can set an upper limit for the page cache and asynchronously or synchronously reclaim the page cache that exceeds the upper limit. This prevents larger-than-expected amounts of memory from being used for page cache and improves system stability and reliability. For more information, see [Page Cache Limit feature](/help/en/alinux/user-guide/page-cache-restriction-feature).
    

Sophisticated platform for AI development

-   Alibaba Cloud Linux 3 introduces the AI ecosystem software repository (epao) from the OpenAnolis community to allow you to install mainstream NVIDIA GPU drivers and CUDA acceleration libraries with a few clicks. The installation is much faster and eliminates the need to select driver versions.
    
-   The epao repository supports mainstream AI frameworks such as TensorFlow and PyTorch, and automatically installs dependencies for the corresponding AI framework during installation. You can quickly develop AI tasks with the Python environment without additional compilation.
    
-   All components that provide AI capabilities have passed compatibility tests. You can install the AI components with one click. You do not need to modify the system dependencies in the environment configuration. This improves the stability of the components.
    
-   AI optimizations are made for CPUs from different platforms, such as Intel and AMD, to better utilize the hardware.
    

Others

Alibaba Cloud Linux 3 provides various system optimizations:

-   Supports transparent conversion from the TCP/IP protocol stack to Remote Direct Memory Access (RDMA).
    
-   Provides optimization solutions for memory bloat issues caused by the use of Transparent Enormous Pages (THP).
    
-   Provides multiple accelerators for Intel 8th generation SPR instances.
    

For more information, see [Release notes for Alibaba Cloud Linux 3](/help/en/alinux/product-overview/release-notes-for-alibaba-cloud-linux).

## **Usage notes**

-   In Alibaba Cloud Linux 3, iptables are incompatible with nftables. If you use the iptables component, network performance might be compromised.
    
-   Alibaba Cloud Linux 3 may use a partial hostname as the Domain Name System (DNS) search domain, which may increase the frequency of DNS resolutions.
    
-   When you use Alibaba Cloud Linux 3, make sure that the installed components and clusters meet the following minimum version requirements.
    
    **Component or cluster**
    
    **Minimum version**
    
    Cluster
    
    1.20.4
    
    ACK NodeLocal DNSCache
    
    1.5.0
    
    Flannel
    
    v0.13.0.1-466064b-aliyun
    
    Terway
    
    v1.0.10.390-g5f3c461-aliyun
    

## **Install Alibaba Cloud Linux 3 on nodes in ACK clusters**

When you create an ACK cluster in the ACK console, set **Operating System** to **Alibaba Cloud Linux 3.2104** to install Alibaba Cloud Linux 3 on the nodes in the cluster. For more information, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/).

**Note**

If you select Alibaba Cloud Linux 3, ACK will automatically detect and install security patches of Alibaba Cloud Linux 3 during cluster creation, node scaling operations, node pool expansion, and auto scaling events.

## **References**

-   [Operating system](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/overview-of-os-images/)
    
-   [Release notes for Alibaba Cloud Linux 3](/help/en/alinux/product-overview/release-notes-for-alibaba-cloud-linux)
