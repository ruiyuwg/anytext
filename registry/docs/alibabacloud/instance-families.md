Alibaba Cloud Elastic Compute Service (ECS) organizes instance types into families based on CPU architecture and target workload. This topic explains instance family categories, instance type naming conventions, and the metrics that define each instance type.

## Instance family categories

ECS groups instance families into six categories: x86-based computing, Arm-based computing, ECS Bare Metal Instance, high-performance computing, Super Computing Cluster (SCC), and heterogeneous computing.

**Category**

**Description**

**Processors**

**x86-based computing**

Based on the x86 architecture. Each virtual CPU (vCPU) corresponds to a hyperthread of a processor core. Includes enterprise-level and entry-level (shared) sub-categories.

Intel, AMD, Hygon

**Arm-based computing**

Based on the Arm architecture. Each vCPU corresponds to a physical processor core. Delivers stable performance using dedicated resources.

YiTian 710, Ampere Altra

**ECS Bare Metal Instance**

Combines the strengths of physical machines and ECS instances using virtualization 2.0. Provides direct access to processor and memory resources without virtualization overhead. Retains hardware feature sets such as Intel VT-x and resource isolation capabilities.

Varies by family

**Super Computing Cluster (SCC)**

Built on ECS Bare Metal Instance with high-speed Remote Direct Memory Access (RDMA) interconnections for high-bandwidth, low-latency networking. Has all the benefits of ECS Bare Metal Instance.

Varies by family

**Heterogeneous computing**

Includes Elastic GPU Service (GPU + CPU acceleration), video transcoding instance families, and visual computing instance families. The ebmgi6s visual computing family is based on the Alibaba Cloud SHENLONG architecture and Intel Server GPUs.

GPUs, Field-Programmable Gate Arrays (FPGAs), Intel Server GPUs

### Enterprise-level vs. shared instances

-   **Enterprise-level instance families** suit production workloads of all sizes, including databases, video encoding, and data analytics.
    
-   **Shared instance families** (entry-level) target small and medium-sized websites or individual developers. Shared instance types do not provide stable computing performance but cost less because they share underlying resources.
    

### Arm-based use cases

Arm-based instance families suit containers, microservices, website and application servers, high-performance computing, and CPU-based machine learning.

## Instance families and instance types

An instance family is a group of instance types that share the same processors and target similar workloads. Each instance family contains multiple instance types with different vCPU and memory configurations.

When you create an ECS instance, specify the instance type along with the network type, Elastic Block Storage (EBS) devices, and image.

> For the full list of instance families and their specifications, see [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families).

## Naming conventions

Each instance family name follows the format `ecs.<Instance family>`. Each instance type name follows the format `ecs.<Instance family>.<Instance size>`.

-   **`ecs`** -- the ECS product code.
    
-   **`&lt;Instance family&gt;`** -- consists of a name body and an optional suffix.
    
-   **`&lt;Instance size&gt;`** -- the number of vCPUs, separated from the instance family by a period.
    

The instance family name body contains:

-   **Series letters** (required) -- one or more lowercase letters indicating the workload category (for example, `g` for general-purpose).
    
-   **Generation digit** (required) -- indicates the instance family generation. Higher numbers represent newer, more cost-effective generations (for example, `8`, `7`, `6`, `5`).
    
-   **Suffix letters** (optional) -- one or more lowercase letters indicating processor type or additional capabilities (for example, `ae` for AMD-enhanced).
    

### Instance size reference

The size label maps to vCPU count as follows:

**Size label**

**vCPUs**

**Calculation**

`small`

1

\--

`large`

2

\--

`xlarge`

4

1 x 4

`2xlarge`

8

2 x 4

`3xlarge`

12

3 x 4

`4xlarge`

16

4 x 4

`8xlarge`

32

8 x 4

`16xlarge`

64

16 x 4

`32xlarge`

128

32 x 4

### Worked examples

The following examples show how to decode common instance type names.

#### Example 1: general-purpose, AMD-enhanced

**`ecs.g8ae.4xlarge`**

**Component**

**Value**

**Meaning**

`ecs`

Product code

ECS

`g`

Series

General-purpose (vCPU-to-memory ratio 1:4)

`8`

Generation

8th generation

`ae`

Suffix

AMD-enhanced processors

`4xlarge`

Size

16 vCPUs (4 x 4)

This instance type has 16 vCPUs and 64 GiB of memory (16 x 4 = 64 GiB, based on the 1:4 ratio of general-purpose families).

#### Example 2: compute-optimized, Intel

**`ecs.c8i.2xlarge`**

**Component**

**Value**

**Meaning**

`ecs`

Product code

ECS

`c`

Series

Compute-optimized (vCPU-to-memory ratio 1:2)

`8`

Generation

8th generation

`i`

Suffix

Intel processors

`2xlarge`

Size

8 vCPUs (2 x 4)

#### Example 3: memory-optimized

**`ecs.r7.xlarge`**

**Component**

**Value**

**Meaning**

`ecs`

Product code

ECS

`r`

Series

Memory-optimized (vCPU-to-memory ratio 1:8)

`7`

Generation

7th generation

\*(none)\*

Suffix

No suffix (default processor)

`xlarge`

Size

4 vCPUs (1 x 4)

#### Example 4: Arm-based, YiTian

**`ecs.g8y.2xlarge`**

**Component**

**Value**

**Meaning**

`ecs`

Product code

ECS

`g`

Series

General-purpose (vCPU-to-memory ratio 1:4)

`8`

Generation

8th generation

`y`

Suffix

YiTian 710 Arm processors

`2xlarge`

Size

8 vCPUs (2 x 4)

#### Example 5: GPU-accelerated Bare Metal

**`ecs.ebmgn7ix.32xlarge`**

**Component**

**Value**

**Meaning**

`ecs`

Product code

ECS

`ebm`

Prefix

ECS Bare Metal Instance

`gn`

Series

NVIDIA GPU-accelerated compute-optimized

`7`

Generation

7th generation (Ampere architecture)

`ix`

Suffix

Inference-optimized, with A10 GPUs (24 GB memory each), enhanced AMD CPUs

`32xlarge`

Size

128 vCPUs (32 x 4)

#### Example 6: GPU instance with vCPU-to-GPU ratio suffix

**`ecs.gn7i-c8g1.2xlarge`**

**Component**

**Value**

**Meaning**

`ecs`

Product code

ECS

`gn7i`

Instance family

NVIDIA GPU-accelerated, 7th gen, inference-optimized (A10)

`-c8g1`

Ratio suffix

vCPU-to-GPU ratio of 8:1 (`c` = cores/vCPUs, `g` = GPUs)

`2xlarge`

Size

8 vCPUs (2 x 4)

#### Example 7: economy instance with vCPU-to-memory ratio suffix

**`ecs.e-c1m4.xlarge`**

**Component**

**Value**

**Meaning**

`ecs`

Product code

ECS

`e`

Series

Economy

`-c1m4`

Ratio suffix

vCPU-to-memory ratio of 1:4 (`c` = cores/vCPUs, `m` = memory)

`xlarge`

Size

4 vCPUs (1 x 4)

### Series reference for x86 and Arm instance families

The series letter indicates the workload category and defines the vCPU-to-memory ratio:

**Series**

**Category**

**vCPU-to-memory ratio**

**Suitable for**

`c`

Compute-optimized

1:2

Databases, web servers, high-performance scientific computing, game servers, batch computing, video encoding, machine learning

`g`

General-purpose

1:4

General-purpose applications, databases, websites, Java services, game servers

`u`

Universal

1:1, 1:2, 1:4, 1:8

Price-sensitive enterprise workloads, small to large applications, caches, search clusters

`r`

Memory-optimized

1:8 (most families)

In-memory databases, data analytics, distributed caches (Redis), big data (Kafka, Elasticsearch)

`re`

Memory-enhanced / high memory

Varies

Workloads requiring very high memory-to-vCPU ratios

`hf`, `hc`, `hg`, `hr`

High clock speed

1:2, 1:4, 1:8

MMO games, high-performance scientific computing, large database systems

`i`

Local SSD-equipped

1:4, 1:8

Online transaction processing (OLTP), NoSQL databases (Cassandra, MongoDB), Elasticsearch, E-MapReduce

`d`

Big data

1:4 (most families)

Hadoop MapReduce, Hadoop Distributed File System (HDFS), Hive, HBase, Kafka

`s`

Shared

Varies

Small and medium-sized websites, individual developers

`t`

Burstable

Varies

Intermittent workloads with baseline + burst capacity

`e`

Economy

Varies

Cost-sensitive workloads

### Suffix reference

Suffixes fall into three categories: processor type, feature enhancement, and role specification.

**Processor suffixes**

**Suffix**

**Meaning**

`y`

In-house Arm-based YiTian 710 processors

`a`

AMD processors

`ae`

AMD-enhanced processors

`i`

Intel processors

`h`

Hygon processors

**Feature suffixes**

**Suffix**

**Meaning**

`re`

RDMA-enhanced

`se`

Storage-enhanced

`ne`, `nex`

Network-enhanced

`t`

Security-enhanced

`p`

Persistent memory-optimized

**Role suffixes**

**Suffix**

**Meaning**

`g`

General-purpose

`r`

Memory-optimized

`c`

Compute-intensive

### Series reference for heterogeneous, Bare Metal, and SCC instance families

These instance families use additional series prefixes:

**Heterogeneous computing series**

**Series**

**Category**

`gn`

NVIDIA GPU-accelerated compute-optimized

`vgn`

NVIDIA GRID vGPU-accelerated dedicated

`sgn`

NVIDIA GRID vGPU-accelerated shared

`gi`

Intel GPU-accelerated compute-optimized

`f`

FPGA-accelerated compute-optimized

**Bare Metal and SCC series**

**Series**

**Category**

`ebmc`, `ebmg`, `ebmr`, `ebmgn`, `ebmhf`

ECS Bare Metal Instance

`sccc`, `sccg`, `scch`, `sccgn`, `scchf`

Super Computing Cluster (SCC)

**GPU generation and model suffixes**

For GPU-accelerated instance families, the digit indicates the GPU architecture, and the suffix letter identifies the GPU model:

**Suffix**

**Architecture**

**GPU model**

**Memory per GPU**

`6v`

Volta or Turing

NVIDIA V100

16 GB

`6e`

Volta or Turing

NVIDIA V100 (second-generation, extended memory)

32 GB

`6i`

Volta or Turing

NVIDIA T4

\--

`6s`

Volta or Turing

Intel Server GPU (sixth-generation SG1)

\--

`7`

Ampere

Varies

\--

`7i`

Ampere

NVIDIA A10

24 GB

`7e`

Ampere

High-memory version of the same GPU model

\--

`7s`

Ampere

NVIDIA A30 (seventh-generation)

\--

> The digit in the suffix (6 or 7) indicates the GPU architecture. The suffix letter identifies the specific GPU model or variant within that architecture generation.

## Instance type metrics

The following metrics appear in instance type specification tables.

### Processor

The physical CPU model powering the instance.

-   **Base frequency** -- the standard clock speed at which the processor runs under typical workloads, without overclocking or special optimization.
    
-   **Turbo frequency** -- the maximum clock speed the processor can temporarily achieve when demand increases.
    

### vCPU

Each vCPU of x86-based instance types corresponds to a hyperthread of a processor core. Each vCPU of Arm-based instance types corresponds to a physical processor core. Enterprise-level instance types in both architectures deliver stable performance using dedicated resources.

### Burst performance (burstable instances only)

-   **Average baseline CPU performance** -- the CPU capacity continuously available to the instance.
    
-   **CPU credits per hour** -- the rate at which the instance earns CPU credits. The credits-per-hour value in instance type tables reflects the total credits earned by all vCPUs on the instance.
    
-   **Maximum CPU credit balance** -- the maximum credits the instance can accumulate within a 24-hour period. CPU credits are valid for up to 24 hours.
    

### Memory

-   **Memory** -- stores data for rapid access while the instance runs. Data in memory is lost when the instance shuts down or restarts.
    
-   **Persistent memory** -- can serve as memory or local storage. Listed separately in instance type tables for families that support it.
    
-   **Encrypted memory** -- provided through Intel Software Guard Extensions (SGX) technology.
    

### Network bandwidth

-   **Baseline bandwidth** -- the maximum amount of data that can be transmitted over a network connection in a specific period of time. This is the initial bandwidth setting for the network connection.
    
-   **Burst bandwidth** -- the peak bandwidth the instance can temporarily reach by consuming network burst credits. Available on specific instance types in 6th-generation or later families. No SLA commitment.
    
-   **Full-duplex bandwidth** -- supported on 7th-generation or later families. Inbound and outbound bandwidth each reach their specified values independently, without affecting each other.
    

> All network specifications are measured in a forwarding-only test environment. Actual performance varies based on workload type, packet size, connection type (persistent or short-lived), image version, and networking model. Run stress tests on your actual workload to validate instance type selection.

### Packet forwarding rate (PPS)

The sum of maximum inbound and outbound packet forwarding rates, measured in packets per second (PPS).

> Measured in a forwarding-only test environment. Actual performance may vary.

### Connections

A connection (session) is defined by a 5-tuple: source IP address, destination IP address, source port, destination port, and transport protocol. ECS connection metrics include TCP, UDP, and Internet Control Message Protocol (ICMP) connections.

### NIC queues

The maximum number of network interface controller (NIC) queues supported per Elastic Network Interface (ENI). More NIC queues enable more efficient distribution of network traffic, reducing packet wait times, packet loss, and latency.

### Elastic Network Interfaces (ENIs)

The maximum number of ENIs that can be bound to an instance. Bind secondary ENIs to different instances for flexible, scalable network configurations.

### Elastic RDMA Interfaces (ERIs)

The maximum number of Elastic RDMA Interfaces (ERIs) that can be bound to an instance. ERIs are RDMA-capable ENIs that reuse the networks to which ENIs belong.

### Jumbo frames support

Indicates whether the instance type supports Jumbo Frames. Alibaba Cloud supports jumbo frames with an 8,500-byte Ethernet payload.

### Private IPv4 addresses per ENI

The maximum number of private IPv4 addresses supported per ENI.

### IPv6 addresses per ENI

The maximum number of IPv6 addresses supported per ENI.

### I/O optimization

I/O optimization provides improved network and storage performance for instances and cloud disks.

### Local storage

Local storage (local disks) refers to disks attached to the physical machine hosting the ECS instance. Local storage provides temporary block storage, cannot be separately created, and is measured in GiB.

**Warning**

Local disks are subject to single point of failure (SPOF) risks. The durability of locally stored data depends on the reliability of the physical machine. Do not store persistent business data on local disks.

### Disk bandwidth

-   **Baseline disk bandwidth** -- the sustained disk bandwidth guaranteed by the SLA for cloud disks.
    
-   **Burst disk bandwidth** -- the peak disk bandwidth the instance can temporarily reach. No SLA commitment.
    

### Disk input/output operations per second (IOPS)

-   **Baseline IOPS** -- the sustained IOPS guaranteed by the SLA for cloud disks.
    
-   **Burst IOPS** -- the peak IOPS the instance can temporarily reach. No SLA commitment.
    

### vTPM

Virtual Trusted Platform Module (vTPM) enables trusted computing capabilities. Trusted Platform Modules (TPMs) or Trusted Cryptography Modules (TCMs) on the underlying physical servers serve as trusted computing bases (TCBs), providing tamper-protected, trusted boot for instances. vTPM can be used to measure the critical components of the boot chain of instances.
