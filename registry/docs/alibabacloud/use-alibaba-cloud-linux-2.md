Container Service for Kubernetes (ACK) allows you to create nodes that run the Alibaba Cloud Linux 2 operating system. These nodes leverage the high-performance kernel of Alibaba Cloud Linux 2 to provide optimized solutions for various scenarios. This topic describes the benefits of using Alibaba Cloud Linux 2 in ACK clusters and the optimizations of Alibaba Cloud Linux 2 that are provided by ACK to meet the requirements in different scenarios.

**Important**

Alibaba Cloud Linux 2 was discontinued at 00:00:00 on March 31, 2024. We recommend that you select [Alibaba Cloud Linux 3](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-alibaba-cloud-linux-3) or [ContainerOS](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/containeros-overview/) as the **operating system** when you create a cluster or node pool. For more information about end-of-life (EOL) of Alibaba Cloud Linux 2, see [\[Product Changes\] Alibaba Cloud Linux 2 and CentOS 7 are discontinued](/help/en/ack/product-overview/announcement-on-stopping-maintenance-of-alibaba-cloud-linux-2-and-centos-7).

## Background Information

Alibaba Cloud Linux 2 is a next-generation proprietary Linux distribution developed by Alibaba Cloud. This operating system provides a safe, stable, and high-performance customized environment for cloud applications. Alibaba Cloud Linux 2 is optimized for the cloud infrastructure and is designed to deliver a better runtime experience. Alibaba Cloud Linux 2 images are free to use, and Alibaba Cloud provides long-term technical support (LTS) for the images.

## Benefits

Alibaba Cloud Linux 2 is developed to make the most of the Alibaba Cloud IaaS platform, and is integrated with various optimizations and features:

-   The Linux distribution with the fastest boot time on Alibaba Cloud.
    
-   Deeply optimized for high-specification virtual machines and bare metal servers. This is ideal for multi-task scenarios that involve large-sized instances.
    
-   Pre-installed with commonly used management software, such as Alibaba Cloud CLI and cloud-init. This reduces the costs of cloud resource management.
    
-   A streamlined kernel that minimizes the attack surface and system resource occupation.
    
-   An optimized technical support system that offers multi-channel technical support on Alibaba Cloud.
    
-   Provides fixes for vulnerabilities at the earliest opportunity based on Common Vulnerabilities and Exposures (CVE).
    
-   Supports live patching of the kernel. This ensures service continuity when vulnerabilities are being fixed.
    

Alibaba Cloud Linux 2 provides the following performance benefits for instances that run Alibaba Cloud Linux 2:

-   Significantly reduces the system boot time of ECS instances, scales out computing resources when system overloading is detected, and reduces the system boot time by 29% compared with CentOS 7.
    
-   Provides multitasking optimizations for ECS instances and improves the performance of large-sized instances by 16%.
    
-   Improves the efficiency of system scheduling by 11%.
    
-   Optimizes the Linux networking stack, providing improved network performance of 7.8% compared with CentOS 7.
    
-   Improves bandwidth stability in scenarios in which frequent Internet access is required. Alibaba Cloud Linux 2 allows you to change the congestion control algorithm of containers to the Bottleneck Bandwidth and Round-trip Propagation Time (BBR) congestion control algorithm. All Alibaba Cloud Linux 2 images come with BBR compiled.
    
-   Optimizes encryption based on the TLS protocol.
    
-   Supports the Budget Fair Queueing (BFQ) I/O scheduler to reduce disk latency.
    

## Optimizations on ACK in different scenarios

Alibaba Cloud provides kernel optimizations to allow containerized workloads to support more container tasks without service interruptions. ACK offers other optimizations to improve the speed and stability of containerized workloads in various scenarios. These optimizations are based on the optimizations provided by Alibaba Cloud Linux 2 and the kernel of this operating system.

-   **IP Virtual Server (IPVS)**
    
    -   Scenario 1: IPVS mode is enabled on high-specification instances that have more than 64 vCPUs and a large number of virtual IP addresses
        
        Problem: In IPVS mode, the estimation timer periodically calculates the transmission rate of each connection. When a large number of connections are established, this operation can occupy the CPU for a long period of time. This delays packet reception and results in a ping time of 200 ms.
        
        Solution: Schedule the IPVS estimation timer to a node and add an sysctl command to disable the IPVS estimation timer.
        
        Effect: The latency caused by the estimation timer no longer exists.
        
    -   Scenario 2: Perform a rolling update
        
        Problem: During a rolling update, if the 5-tuple is unchanged and a new TCP SYN packet matches the connection record in the original IPVS 5-tuple, IPVS drops the SYN packet. However, the SYN packet needs to be sent to the new destination address. This results in SYN packet retransmission and a 1s latency.
        
        Solution: If new conntrack entries exist, release the connections that are in the TIME\_WAIT state in the conntrack table and replace the connections with new connections.
        
        Effect: Network traffic can be switched to real servers almost without latency.
        
-   **CoreDNS**
    
    Scenario 1: A large number of DNS queries result in a full conntrack table
    
    Problem: When applications send DNS requests to query static addresses or ports, the conntrack entry changes to the stream mode. DNS queries use the UDP protocol. UDP is stateless, fast, and requires no prior communications to establish connections. This creates a large number of UDP conntrack entries that are no longer needed. If these UDP conntrack entries are not deleted in a timely manner, the conntrack table may be full. This degrades NAT performance.
    
    Solutions:
    
    -   Conntrack entries are set to stream mode if the UDP connections last more than 2s. This avoids the rapid increase of conntrack entries.
        
    -   Shorten the validity duration of UDP conntrack from 180s to 120s. This reduces the impact of UDP requests on conntrack entries.
        
    
    Effect: In the testing environment, the number of UDP conntrack entries is reduced by 50%.
    
-   **Container networking**
    
    The Terway network plug-in supports the IPVLAN driver, which improves the network performance in short-packet communications by 40% compared with the traditional bridge interface and policy-based routing (PBR). By default, the BBR congestion control algorithm is compiled in Alibaba Cloud Linux 2. In scenarios in which frequent Internet access is required, you can change the congestion control algorithm of containers to BBR to improve the bandwidth stability of Internet access. This significantly improves the efficiency when containers communicate with the Internet or ACK pulls images from the Internet.
    
-   **Container security**
    
    Alibaba Cloud has established partnerships with the Kata Containers and Clear Linux communities. You can deploy the Kata Containers solution on ECS bare metal instances. ACK also provides optimizations to reduce the boot time of runV containers. This ensures that the Kata Containers solution can work as expected. ACK also provides clusters that run sandboxed containers. This type of cluster offers similar user experience as normal clusters. You can deploy applications in lightweight sandboxed environments to isolate the workloads of multiple tenants. You can also use sandboxed containers to isolate untrusted applications. Sandboxed-Container improves security and has little impact on application performance.
    
-   **AutoScaler**
    
    Alibaba Cloud Linux 2 reduces the system boot time of ECS instances. The average system boot time is reduced by 60% compared with CentOS 7. When the system is overloaded, the auto scaling feature can scale out ECS instances to create more ACK clusters. Then, ACK schedules and starts application instances. Alibaba Cloud Linux 2 also provides quick scale-out of computing resources to handle unexpected traffic spikes.
    
-   **Resource monitoring and control**
    
    The kernel of Alibaba Cloud Linux 2 provides fine-grained resource visualization and control capabilities for containers. The capabilities include PSI pressure metrics, per-cgroup kswapd, and memory priority. In ACK clusters that run Alibaba Cloud Linux 2, you can use CGroup Controllers to adopt the capabilities, implement fine-grained resource configuration, and perform on-the-fly tweaks on top of tools such as BufferIO Control, TCP, CPUSet, Mem, and NUMA. This provides a step-by-step improvement in resource utilization and minimizes the interference between applications.
    
-   **AI and data acceleration**
    
    Alibaba Cloud Linux 2 enables large-sized instances to handle high-performance computing tasks much faster. This operating system also optimizes streaming reads and writes to improve the read and write efficiency for large model files. This significantly accelerates AI-assisted and high-performance computing. The following data is recorded in the staging environment:
    
    -   Test: Use Alluxio to load 1,152 OSS objects that are 144 GB in size over 64 threads. A CentOS instance requires 3 minutes and 25 seconds to complete this operation. An Alibaba Cloud Linux 2 instance requires only 2 minutes and 19.037 seconds to complete this operation. This indicates that Alibaba Cloud Linux 2 is 1.6 times faster than CentOS.
        
    -   Test: Train the ResNet50 model that has a batch size of 128 and cache the data to Alluxio. A CentOS instance equipped with an NVIDIA V100 GPU can achieve a speed of 5,212.00 images/s. In contrast, an Alibaba Cloud Linux 2 instance equipped with an NVIDIA V100 GPU can achieve a speed of 8,746.59 images/s. Alibaba Cloud Linux 2 is 1.7 times faster than CentOS.
        
    
-   **Resource visibility**
    
    Multiple containers can reside on a host server and have direct access to the resources on the host. This results in applications competing for resources. Alibaba Cloud Linux 2 provides optimizations for the cgroup feature of the kernel to improve resource visibility and provide information about the resource usage of individual containers. Resource information such as that from commands such as top, cpuinfo and meminfo are provided to help streamline resource observation and planning.
    
-   **Others**
    
    -   Alibaba Cloud Linux 2 is built on Linux kernel 4.19. ACK integrates Alibaba Cloud Linux 2 with core capabilities and containerization best practices of Alibaba Group.
        
    -   The performance loss of OverlayFS is reduced and the loss caused by containerization in storage is minimized.
        
    -   In most scenarios, sysctls are namespaced. In Kernel 4.19, most sysctls can be separately configured on pods. This allows you to configure different TCP timeout values and retransmit timeout values for different applications. You cannot modify these parameters in CentOS 7. In Alibaba Cloud Linux 2, you can configure these parameters on pods.
        

## Set the node operating system to Alibaba Cloud Linux 2

When you create an ACK cluster in the ACK console, set **Operating System** to **Alibaba Cloud Linux 2.1903**. This way, you can use Alibaba Cloud Linux 2 as the operating system image of the nodes in the cluster. For more information, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/).

**Note**

After you select Alibaba Cloud Linux 2, ACK automatically checks for security patches of Alibaba Cloud Linux 2 and installs the patches when you create the cluster, expand the cluster, or scale the cluster by adding or removing nodes to or from the cluster.

## References

-   [Alibaba Cloud Linux 2 product page](https://www.alibabacloud.com/zh/products/alinux)
    
-   [Alibaba Cloud Kernel official website](https://alibaba.github.io/cloud-kernel/)
