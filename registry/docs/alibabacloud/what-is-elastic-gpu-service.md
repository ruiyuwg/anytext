Elastic GPU Service provides GPU-accelerated computing capabilities and ready-to-use and scalable GPU computing resources. As a member of the Alibaba Cloud elastic computing service family, Elastic GPU Service combines the computing power of GPUs and CPUs to address the challenges in scenarios such as AI, high-performance computing, and professional graphics and image processing. For example, you can use Elastic GPU Service in a parallel computing scenario to significantly accelerate computing.

## Why use Elastic GPU Service?

Elastic GPU Service provides GPU-accelerated instances that are used as computing servers based on GPUs and CPUs. GPUs provide unique benefits in performing complex mathematical and geometric calculations. In specific scenarios such as floating-point and parallel computing, GPUs can provide 100 times the computing power of their CPU counterparts. GPUs support the following features:

-   Have a large number of arithmetic logic units (ALUs) that can be used for large-scale parallel computing.
    
-   Support high-throughput scenarios in which multiple threads run in parallel to process computing tasks.
    
-   Have simple logic control units (LCUs).
    

The following table compares GPU-accelerated instances that are provided by Elastic GPU Service and self-managed GPU-accelerated servers.

**Item**

**GPU-accelerated instance**

**Self-managed GPU-accelerated server**

Flexibility

-   Allows you to create one or more GPU-accelerated instances with ease.
    
-   Supports flexible changes between instance specifications that are configured with different vCPUs, GPUs, and memory, including online upgrades and downgrades.
    
-   Provides adjustable bandwidths.
    

-   Requires an extended subscription period.
    
-   Provides server specifications that cannot be changed.
    
-   Requires a one-off purchase of a bandwidth that cannot be adjusted.
    

Ease of use

-   Provides online web management tools that are easy and convenient to use.
    
-   Provides built-in mainstream operating systems, such as an activated genuine Windows operating system, and supports online switching between operating systems.
    
-   Allows you to purchase and install GPU drivers when you purchase the instance.
    

-   Does not provide online management tools and requires complex maintenance.
    
-   Requires you to install and replace an operating system on your own.
    
-   Requires you to purchase and install GPU drivers on your own.
    

Disaster recovery and backup

-   Uses a triplicate storage mechanism by which three copies of each piece of data are stored. When one copy is corrupted, the data can be restored from the another copy within a short period of time.
    
-   Allows hardware to be automatically recovered when failures occur.
    

-   Requires you to build a disaster recovery environment on your own by using high-cost conventional storage devices.
    
-   Requires you to manually restore corrupted data.
    

Security

-   Effectively defends against Media Access Control (MAC) spoofing and Address Resolution Protocol (ARP) attacks.
    
-   Defends against DDoS attacks by using blackhole filtering and traffic scrubbing.
    
-   Provides additional services such as scanning for port intrusions, trojans, and vulnerabilities.
    

-   Poorly defends against MAC spoofing and ARP attacks.
    
-   Requires traffic scrubbing and blackhole filtering devices at additional costs.
    
-   Usually encounters problems such as port scan issues, trojans, and vulnerabilities.
    

Cost

-   Supports the subscription and pay-as-you-go billing methods. You can select an appropriate billing method based on your business requirements.
    
-   Allows you to purchase on-demand resources without the need to make a large upfront investment.
    

-   Requires you to purchase resources by paying upfront to meet configuration requirements during peak hours.
    
-   Requires a large upfront investment and results in serious resource waste.
    

## GPU-accelerated instance families

An instance is the minimum unit that provides computing services for your business. The computing capability of an instance varies based on the instance type. Elastic Compute Service (ECS) provides a variety of instance families for different business scenarios and use cases. GPU-accelerated instances are a type of ECS instances. You can use GPU-accelerated instances in the same manner as common ECS instances. In addition, GPU-accelerated instances provide GPU acceleration capabilities. When you create GPU-accelerated instances, select instance types from instance families of the enterprise-level heterogeneous computing, ECS Bare Metal Instance, or Super Computing Cluster (SCC) category.

For more information about instance types, see [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb).

## Benefits

-   **Extensive service coverage**
    
    Elastic GPU Service supports large-scale deployment in 17 regions around the world. Elastic GPU Service also provides flexible delivery methods such as auto provisioning and auto scaling to meet your sudden business demands.
    
-   **Superior computing power**
    
    Elastic GPU Service provides GPUs that have superior computing power. When you use Elastic GPU Service together with a high-performance CPU platform, a GPU-accelerated instance can provide mixed-precision computing performance of up to 1,000 trillion floating point operations per second (TFLOPS).
    
-   **Excellent network performance**
    
    GPU-accelerated instances use virtual private clouds (VPCs) that support up to 4.5 million packets per second (Mpps) and 32 Gbit/s of internal bandwidth. You can use GPU-accelerated instances together with Super Computing Cluster (SCC) to provide a Remote Direct Memory Access (RDMA) network that has up to 50 Gbit/s of bandwidth between nodes. This meets the low-latency and high-bandwidth requirements when data is transmitted between nodes.
    
-   **Flexible purchase methods**
    
    Elastic GPU Service supports various billing methods, such as the subscription and pay-as-you-go billing methods, preemptible instances, reserved instances, and storage capacity units (SCUs). To prevent inefficient use of resources, you can select a billing method based on your business requirements.
    

You can use Elastic GPU Service together with DeepGPU provided by Alibaba Cloud. DeepGPU provides enhanced GPU computing capabilities and can help you manage Alibaba Cloud resources in a more convenient and efficient manner. For more information, see [DeepGPU](/help/en/egs/benefits-1#bceb2f10574he).

## Billing

You are charged for Elastic GPU Service resources in the same manner as ECS resources. The billable resources in Elastic GPU Service include computing resources (vCPUs, GPUs, and memory), images, Elastic Block Storage (EBS) devices, public bandwidth, and snapshots.

The following billing methods are supported:

-   Subscription: You pay for resources based on a specific subscription duration before you use the resources.
    
-   Pay-as-you-go: You pay for resources after you use the resources. You can purchase and release resources based on your business requirements.
    
-   Preemptible instance: You bid for available computing resources to create preemptible instances. Compared with pay-as-you-go instances, preemptible instances provide savings. However, preemptible instances may be reclaimed.
    
-   Reserved instance: Reserved instances are coupons that are used together with pay-as-you-go instances. When you purchase a reserved instance, you must use instances that have specific configurations, such as the specified instance type, region, and zone, to make savings. Reserved instances are applied to offset the bills of computing resources.
    
-   Savings plan: Savings plans are a flexible pricing model that offers lower prices for pay-as-you-go instances. Savings plans can be applied to ECS resources such as computing resources and disks, and offer savings on the pay-as-you-go rate on these resources in exchange for a commitment to use a specific amount (measured in USD/hour) within a specific timeframe.
    
-   Storage capacity unit (SCU): SCUs are resource plans that offer lower prices for pay-as-you-go storage resources. When you purchase SCUs, you make a commitment to use storage resources of a specific type and capacity in exchange for a lower price. SCUs can be applied to EBS devices, File Storage NAS (NAS) file systems, and Object Storage Service (OSS) buckets.
    

For more information, see [Billing for Elastic GPU Service](/help/en/egs/billing-2#concept-2426781).

## Related tools

DeepGPU provided by Alibaba Cloud can help you use GPU resources in an efficient manner. The following table describes the tools included in DeepGPU.

**Note**

For more information about DeepGPU, see [What is DeepGPU?](/help/en/egs/what-is-deepgpu/)

**Tool**

**Description**

[cGPU](/help/en/egs/what-is-cgpu)

cGPU is a container sharing technology provided by Alibaba Cloud to isolate virtual GPUs (vGPUs) based on kernels. cGPU can split and allocate a single GPU to multiple isolated containers.

[FastGPU](/help/en/egs/what-is-fastgpu#concept-2041879)

FastGPU is a toolkit provided by Alibaba Cloud to build AI computing tasks. This tool provides interfaces and command lines for you to conveniently build AI computing tasks on Alibaba Cloud IaaS resources.
