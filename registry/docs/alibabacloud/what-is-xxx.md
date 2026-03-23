PAI-Lingjun (also known as PAI-Lingjun AI Computing Service) delivers large-scale heterogeneous computing power for high-performance AI training and HPC workloads. This fully managed service provides a highly scalable, high-performance intelligent computing infrastructure with built-in optimization for distributed training, eliminating the complexity of building and maintaining compute nodes, storage systems, and RDMA networks. Designed for large-scale AI scenarios including computer vision, natural language processing, recommendation systems, and large language models (LLMs), PAI-Lingjun serves industries such as autonomous driving, financial services, pharmaceutical research, scientific computing, and enterprise SaaS applications with flexible pay-as-you-go pricing.

## Service architecture

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5406213771/CAEQUxiBgICKqJGL3hkiIDgxODdjMjA2MDBkOTQ4MDJiNTFiOGEzZDIwMmRiZDg43963382_20230830144006.372.svg)

-   PAI-Lingjun provides a fully integrated hardware-software computing cluster solution. The hardware layer comprises Panjiu servers, high-performance networks, distributed storage, and comprehensive cluster management capabilities. The software stack delivers resource orchestration, intelligent operations management, AI acceleration libraries, cloud-native workload scheduling, and a complete development platform supporting mainstream frameworks including PyTorch and TensorFlow.
    
-   The core hardware components of PAI-Lingjun are Panjiu servers and a high-performance RDMA network:
    
    -   Panjiu servers developed by Alibaba Cloud deliver optimal hardware performance through multi-layer configuration optimization across CPU, memory, storage, and GPU subsystems.
        
    -   The network architecture employs Fat-Tree topologies with support for TCP/IP and RDMA protocols. PAI-Lingjun operates separate 25 Gbps and 100 Gbps networks: the 25 Gbps network handles in-band server management, while the 100 Gbps network with multiple NICs enables high-throughput AI training communication. Dual-uplink networking provides high availability—each NIC connects to two independent switches with automatic failover to maintain network connectivity during link failures.
        
-   The software architecture provides a layered stack of capabilities, from resource management at the foundation layer through acceleration libraries, ML/DL frameworks, development environments, to workload orchestration at the application layer.
    
    -   PAI-Lingjun uses Docker containerization for resource partitioning and scheduling, with native compatibility for Kubernetes orchestration.
        
    -   The Apsara Infrastructure Management Framework provides real-time monitoring and operational management of cluster infrastructure, including compute, network, and storage resources.
        
    -   Acceleration libraries are custom-optimized for PAI-Lingjun cluster communication, delivering enhanced performance for distributed training workloads.
        
    -   The platform provides a web-based interface for job submission and log monitoring, with native support for PyTorch, TensorFlow, and other mainstream AI frameworks.
        

## Why choose PAI-Lingjun

PAI-Lingjun delivers enterprise-grade intelligent computing clusters with the following capabilities:

-   **Computing as a service.** Delivers high-performance heterogeneous computing with elastic scalability supporting tens of thousands of GPUs, single-cluster network throughput up to 4 Pbps, and ultra-low latency of 2 microseconds.
    
-   **High resource efficiency.** Achieves 3x improvement in resource utilization and maintains over 90% parallel computing efficiency for distributed workloads.
    
-   **Unified computing pool.** Enables seamless integration and unified scheduling of AI and HPC workloads across a shared computing infrastructure.
    
-   **Comprehensive monitoring and management.** Provides an enterprise operations platform purpose-built for heterogeneous computing, delivering end-to-end visibility from hardware resources through workload performance to utilization metrics.
    

## Benefits

-   **Accelerate AI innovation.** Full-stack performance optimization improves iteration efficiency for compute-intensive workloads by more than 2x.
    
-   **Maximize ROI.** Intelligent scheduling of pooled heterogeneous computing resources ensures optimal utilization, increasing efficiency up to 3x compared to traditional deployments.
    
-   **Scale without limits.** Meets the demanding computational requirements of large language models and large-scale simulations, ensuring that innovation is never constrained by available computing resources.
    
-   **Complete visibility and control.** Manage heterogeneous computing resource allocation with continuous monitoring and optimization capabilities for sustained performance.
    

## **Scenarios**

PAI-Lingjun is purpose-built for large-scale distributed AI workloads including computer vision, natural language processing, recommendation systems, and large language models (LLMs), serving industries such as autonomous driving, financial services, pharmaceutical research, scientific computing, and enterprise SaaS applications.

-   Large-scale distributed training.
    
    -   Ultra-large-scale GPU computing power system.
        
        Full peer-to-peer networking architecture with complete resource pooling integrates seamlessly with Platform for AI (PAI), supporting PyTorch, TensorFlow, Caffe, Keras, XGBoost, and MXNet for AI training and inference at any scale.
        
    -   AI infrastructure.
        
        -   **Smooth scale-out.** Delivers linear performance scaling to meet GPU computing requirements at any scale, from small clusters to massive deployments.
            
        -   **Intelligent data acceleration.** Actively prefetches training data to optimize data I/O for AI workloads, significantly improving training efficiency.
            
        -   **Maximum resource utilization.** Fine-grained control of heterogeneous resources improves resource turnover and overall cluster efficiency.
            
-   Autonomous driving.
    
    -   Rich deployment and scheduling policies.
        
        Multiple GPU scheduling policies ensure efficient task execution. Cloud Parallel File Storage (CPFS) combined with RDMA networking delivers high-throughput data access for training workloads. OSS tiered storage reduces costs for archived datasets.
        
    -   Supports both training and simulation scenarios.
        
        Unified computing infrastructure supports both training and simulation workloads, improving iteration efficiency and reducing data migration costs through integrated workflows.
        
-   AI for Science.
    
    -   Push the limits of innovation.
        
        Ultra-large-scale RDMA networking with advanced flow control technology achieves microsecond-level end-to-end latency. Linear scaling supports parallel computing across tens of thousands of GPUs.
        
    -   Integrate ecosystems and expand the boundaries of innovation.
        
        Unified scheduling of HPC and AI workloads provides a collaborative foundation for scientific research, promoting ecosystem integration and technology convergence.
        
    -   Cloud-based research, inclusive computing power.
        
        Cloud-native containerized ecosystem enables deep resource sharing for AI and HPC applications, democratizing access to intelligent computing resources.
        

## Features

-   **High-speed RDMA network architecture.** Built on Alibaba Cloud's extensive RDMA research since 2016, delivering enterprise-grade network performance.
    
    Alibaba Cloud operates large-scale RDMA networks across its data centers. Leveraging extensive deployment experience, we developed a high-performance RDMA protocol with end-to-end collaboration and HPCC congestion control, implemented via intelligent NIC hardware offloading. This architecture reduces network latency, increases I/O throughput, and mitigates performance degradation from network failures or packet loss.
    
-   **Alibaba Collective Communication Library (ACCL).** PAI-Lingjun integrates ACCL for high-performance collective communication. Combined with network switch hardware, ACCL delivers congestion-free communication for AI clusters with tens of thousands of GPUs. ACCL features intelligent GPU-NIC matching, automatic physical topology discovery, and topology-aware congestion-free algorithms. This eliminates network congestion, maximizes communication efficiency, and enhances distributed training scalability. At 10,000+ GPU scale, ACCL achieves over 80% linear cluster efficiency; at 100+ GPU scale, computational efficiency exceeds 95%, meeting over 80% of production workload requirements.
    
-   **KSpeed data preloading acceleration.** PAI-Lingjun leverages high-performance RDMA networking and ACCL to deliver KSpeed, an intelligent data I/O optimization solution for high-performance data preloading. In storage-compute decoupled architectures common to AI, HPC, and big data workloads, loading large training datasets often creates efficiency bottlenecks. KSpeed improves data I/O performance by orders of magnitude.
    
-   **eGPU virtualization technology.** To address challenges including large-scale AI workload demands, high GPU hardware costs, and low cluster utilization, PAI-Lingjun provides eGPU container virtualization. eGPU improves cluster GPU utilization through the following capabilities:
    
    -   Flexible partitioning based on both VRAM and computing power.
        
    -   Support for multiple specifications.
        
    -   Dynamic creation and destruction.
        
    -   Hot upgrades.
        
    -   User-mode technology for higher reliability.
        

## **Limits on PAI-Lingjun networks**

**Limitations**

**Limit**

**Method to increase quota**

Maximum number of Lingjun CIDR blocks that can be created by a single account in the same region

8

For more information, see [Manage quotas](/help/en/pai/user-guide/manage-quotas).

Maximum number of Lingjun subnets that can be created in a single Lingjun CIDR block

16

For more information, see [Manage quotas](/help/en/pai/user-guide/manage-quotas).

Maximum number of Lingjun nodes in a single Lingjun subnet

1000

Not applicable

Maximum number of Lingjun nodes in a single Lingjun CIDR block

1000

Not applicable

CIDR blocks that can be configured for Lingjun CIDR blocks and Lingjun subnets

You can use custom CIDR blocks other than `100.64.0.0/10`, `224.0.0.0/4`, `127.0.0.0/8`, or `169.254.0.0/16` and their subnets as Lingjun CIDR blocks.

Not applicable

Maximum number of Lingjun connection instances that can be created by a single account in the same region

16

Not applicable

Maximum number of IPv4 routes that a single Lingjun connection instance can learn from the public cloud

50

Not applicable

Maximum number of IPv6 routes that a single Lingjun connection instance can learn from the public cloud

25

Not applicable

Maximum number of Lingjun Hub instances that can be created by a single account in the same region

4

For more information, see [Manage quotas](/help/en/pai/user-guide/manage-quotas).

Maximum number of Lingjun Hub instances that can be connected to a single Lingjun CIDR block

1

For more information, see [Manage quotas](/help/en/pai/user-guide/manage-quotas).

Maximum number of Lingjun Hub instances that can be connected to a single Lingjun connection instance

1

For more information, see [Manage quotas](/help/en/pai/user-guide/manage-quotas).

Maximum number of Lingjun connection instances that can be connected to a single Lingjun Hub instance

32

For more information, see [Manage quotas](/help/en/pai/user-guide/manage-quotas).

Maximum number of Lingjun nodes in all Lingjun CIDR blocks within the same region that a single Lingjun Hub instance can support

2000

Not applicable

Maximum number of routing policy entries that can be configured for a single Lingjun Hub instance

100

Not applicable

Maximum number of secondary private IP addresses supported by a single Lingjun NIC

3

For more information, see [Manage quotas](/help/en/pai/user-guide/manage-quotas).

## Product specifications and activation

-   **Activation:** PAI-Lingjun AI Computing Service is currently in public preview. Alibaba Cloud sales representatives provide purchase links and administrator console accounts to qualified users. For activation instructions, see [Activate Lingjun](/help/en/pai/user-guide/cluster-management).
    
-   **Billing:** PAI-Lingjun AI Computing Service supports installment and subscription billing models. For billing details, see [Billing](/help/en/pai/user-guide/billing-2#main-2245072).
