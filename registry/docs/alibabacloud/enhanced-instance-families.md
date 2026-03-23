Enhanced instance families include storage-enhanced, network-enhanced, security-enhanced, and memory-enhanced instance families. Enhanced instance families are designed for scenarios that require higher performance and more stable processing capabilities.

**Note**

-   [**View instance types available in each region**](https://ecs-buy.alibabacloud.com/instanceTypes/#/instanceTypeByRegion)**.** Instance types available for purchase vary based on the region.
    
-   [View instructions for selecting instance types](/help/en/ecs/user-guide/best-practices-for-instance-type-selection) to learn about how to select instance types based on your business scenarios before you read this topic.
    
-   [**View instance type metrics**](/help/en/ecs/user-guide/instance-specification-naming-and-classification#section-e9r-xkf-z15) before you read this topic.
    
-   You can [**use the ECS Price Calculator**](https://www.alibabacloud.com/en/pricing-calculator?_p_lc=1#/commodity/vm_intl) to estimate instance costs.
    

## **Introduction**

-   Storage-enhanced instance families: Compared with instance families of the same generation, storage-enhanced instance families optimize capabilities related to Elastic Block Storage (EBS), such as disk bandwidth and IOPS. Storage-enhanced instance families are more suitable for storage-intensive scenarios.
    
-   Network-enhanced instance families: Network-enhanced instance families are optimized for network-intensive scenarios. The network metrics of network-enhanced instance families are significantly higher than the network metrics of general-purpose instance families of the same generation. This ensures that network-enhanced instance families can meet the requirements of various scenarios. Network-enhanced instance families are especially suitable for scenarios that require higher network performance than general-purpose instance families.
    
-   Security-enhanced instance families: Data security protection is enhanced by using technologies such as trusted computing and confidential computing.
    
-   Memory-enhanced instance families: Compared with memory-optimized instance families (r series), memory-enhanced instance families (re series) offer CPU-to-memory ratios higher than 1:8 and larger memory capacities.
    

**Storage-enhanced instance families**

**Network-enhanced instance families**

**Security-enhanced instance families**

**Memory-enhanced instance families**

-   [g7se, storage-enhanced general-purpose instance family](#g7se)
    
-   [c7se, storage-enhanced compute-optimized instance family](#c7se)
    
-   [r7se, storage-enhanced memory-optimized instance family](#r7se)
    

-   [g8ine network-enhanced general-purpose instance family](#e0e3427390k5b)
    
-   [c8ine, network-enhanced compute-optimized instance family](#bffd7c6ca8o4p)
    
-   [g7nex, network-enhanced general-purpose instance family](#g7nex)
    
-   [c7nex, network-enhanced compute-optimized instance family](#c7nex)
    
-   [g7ne, network-enhanced general-purpose instance family](#g7ne)
    
-   [g5ne, network-enhanced general-purpose instance family](#g5ne)
    

-   [g9it, security-enhanced general-purpose instance family](#g9it)
    
-   [r9it, security-enhanced memory-optimized instance family](#r9it)
    
-   [g7t, security-enhanced general-purpose instance family](#g7t)
    
-   [c7t, security-enhanced compute-optimized instance family](#c7t)
    
-   [r7t, security-enhanced memory-optimized instance family](#r7t)
    
-   [g6t, security-enhanced general-purpose instance family](#g6t)
    
-   [c6t, security-enhanced compute-optimized instance family](#c6t)
    

-   **Recommended instance families**
    
    -   [re8, high-memory instance family](#re8)
        
    -   [re6p, persistent memory-optimized instance family](#re6p)
        
    -   [re6, high-memory instance family](#re6)
        
-   **Not recommended instance families (If the following instance families are sold out, we recommend that you use the preceding recommended instance families.)**
    
    -   [re4, high-memory instance family](#re4)
        
    -   [re4e, high-memory instance family](#re4e)
        

## g8ine network-enhanced general-purpose instance family

-   **Family introduction**: Powered by Alibaba Cloud's new Cloud Infrastructure Processing Unit (CIPU) architecture, this family delivers stable computing power and a more powerful I/O engine.
    
-   **Scenarios**: Network-intensive scenarios that require excellent forwarding performance and a high number of connections. These instances are especially suitable for network access layer gateways and traffic and data forwarding or pre-processing middleware. They can be used as part of a cloud solution in scenarios such as large websites, e-commerce, and AI.
    
-   **Compute**:
    
    -   Processor-to-memory ratio of 1:4.
        
    -   Processor: Intel® Xeon® Emerald Rapids or Intel® Xeon® Sapphire Rapids with a clock speed of at least 2.7 GHz and an all-core turbo frequency of 3.2 GHz. These processors provide stable computing performance.
        
    -   These instances support hyper-threading. Hyper-threading is enabled by default. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
-   **Storage**:
    
    -   These are I/O optimized instances.
        
    -   These instances support the NVMe protocol. For more information, see [Overview of the NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supported disk types: ESSDs, ESSD AutoPL disks, and regional ESSDs. For more information, see [Overview of Elastic Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   For small instance types, disk IOPS and disk bandwidth are burstable.
        
-   **Network**:
    
    -   These instances support IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   The network performance of an instance corresponds to its instance type. A larger instance type provides higher network performance.
        
-   **Security**: These instances support the vTPM feature. For more information, see [Overview of trusted computing](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities).
    

The g8ine instance family includes the instance types and metrics described in the following table.

**Instance type**

**vCPU**

**Memory (GiB)**

**Baseline/Burst network bandwidth (Gbit/s)**

**Connections**

**Multi-queue**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**EBS Multi-queue**

**Baseline/Burst disk IOPS**

**Baseline/Burst disk bandwidth (Gbit/s)**

ecs.g8ine.large

2

8

4/Up to 24

0.6 million

2

3

10

10

1

20,000/Up to 80,000

2/Up to 8

ecs.g8ine.xlarge

4

16

7/Up to 28

1.2 million

4

4

15

15

1

40,000/Up to 80,000

2.5/Up to 8

ecs.g8ine.2xlarge

8

32

12/Up to 35

2 million

8

6

15

15

2

50,000/Up to 80,000

4/Up to 8

ecs.g8ine.4xlarge

16

64

23/Up to 44

3.5 million

16

8

30

30

2

80,000/Up to 100,000

6/Up to 10

ecs.g8ine.8xlarge

32

128

44 / None

7 million

32

8

30

30

4

100,000 / Unlimited

10 or None

## c8ine, network-enhanced compute-optimized instance family

-   **Introduction**: This instance family is built on the new Alibaba Cloud Cloud Infrastructure Processing Unit (CIPU) architecture, which provides stable computing power and a powerful I/O engine.
    
-   **Scenarios**: This instance family is ideal for network-intensive scenarios that require excellent forwarding and connectivity, such as network access layer gateways, traffic and data forwarding, or pre-processing middleware. These instances are also suitable for large websites, E-commerce, and AI applications as part of a cloud solution.
    
-   **Compute**:
    
    -   The vCPU-to-memory ratio is 1:2.
        
    -   Processor: Powered by Intel® Xeon® Emerald Rapids or Intel® Xeon® Sapphire Rapids processors with a base clock speed of 2.7 GHz and an all-core turbo frequency of 3.2 GHz to provide stable computing performance.
        
    -   Hyper-threading is supported and enabled by default. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
-   **Storage**:
    
    -   This is an I/O optimized instance.
        
    -   These instances support the NVMe protocol. For more information, see [Overview of the NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supported disk types: ESSDs, ESSD AutoPL disks, and Regional ESSDs. For more information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Smaller instance types support burstable disk IOPS and bandwidth.
        
-   **Network**:
    
    -   This instance family supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   The network performance of an instance is determined by its instance type. Larger instance types provide higher network performance.
        
-   **Security**: This instance family supports the Trusted Platform Module (vTPM) feature. For more information, see [Overview of trusted computing capabilities](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities).
    

c8ine instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network bandwidth baseline/burst (Gbit/s)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**EBS multi-queue**

**Disk baseline/burst IOPS**

**Disk bandwidth baseline/burst (Gbit/s)**

ecs.c8ine.large

2

4

4/Up to 24

600,000

2

3

10

10

1

20,000/Up to 80,000

2/Up to 8

ecs.c8ine.xlarge

4

8

7/Up to 28

1,200,000

4

4

15

15

1

40,000/Up to 80,000

2.5/Up to 8

ecs.c8ine.2xlarge

8

16

12/Up to 35

2,000,000

8

6

15

15

2

50,000/Up to 80,000

4/Up to 8

ecs.c8ine.4xlarge

16

32

23/Up to 44

3,500,000

16

8

30

30

2

80,000/Up to 100,000

6/Up to 10

ecs.c8ine.8xlarge

32

64

44/none

7,000,000

32

8

30

30

4

100,000/none

10/none

## g7se, storage-enhanced general-purpose instance family

-   **Introduction**: This instance family uses the third-generation SHENLONG architecture and Intel Ice Lake processors to improve storage I/O performance.
    
-   **Supported scenarios**: I/O-intensive scenarios such as large and medium-sized online transaction processing (OLTP) core databases, large and medium-sized NoSQL databases, search and real-time log analytics, and traditional large enterprise-level commercial software such as SAP.
    
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:4.
        
    -   Uses the third-generation Intel® Xeon® Scalable (Ice Lake) processors that deliver a base frequency of 2.9 GHz and an all-core turbo frequency of 3.5 GHz to provide consistent computing performance.
        
    -   Supports Hyper-Threading. By default, Hyper-Threading is enabled. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports the Non-Volatile Memory Express (NVMe) protocol. For more information, see [NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supports [Enterprise SSDs (ESSDs)](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Allows up to 64 data disks to be attached per instance. You can attach up to 16 data disks to an instance when you create the instance. If the instance requires additional data disks, attach more data disks after the instance is created. For more information, see [Attach a data disk](/help/en/ecs/user-guide/attach-a-data-disk#concept-llz-b4c-ydb).
        
    -   Delivers a sequential read/write throughput of up to 64 Gbit/s and up to 1,000,000 IOPS per instance.
        
    -   Provides high storage I/O performance based on large computing capacity. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances provide an ultra-high packet forwarding rate.
        
    -   Provides high network performance based on large computing capacity.
        

g7se instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Maximum attached data disks**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.g7se.large

2

8

1.2/burstable up to 3

450,000

Up to 250,000

2

3

6

6

16

30,000/burstable up to 150,000

3/10

ecs.g7se.xlarge

4

16

2/burstable up to 5

500,000

Up to 250,000

4

4

15

15

16

60,000/burstable up to 150,000

4/10

ecs.g7se.2xlarge

8

32

3/burstable up to 8

800,000

Up to 250,000

8

4

15

15

16

100,000/burstable up to 150,000

6/10

ecs.g7se.3xlarge

12

48

4.5/burstable up to 10

1,200,000

Up to 250,000

8

8

15

15

16

120,000/burstable up to 150,000

8/10

ecs.g7se.4xlarge

16

64

6/burstable up to 10

1,500,000

300,000

8

8

30

30

24

150,000/none

10/none

ecs.g7se.6xlarge

24

96

8/burstable up to 10

2,250,000

450,000

12

8

30

30

24

200,000/none

12/none

ecs.g7se.8xlarge

32

128

10/none

3,000,000

600,000

16

8

30

30

30

300,000/none

16/none

ecs.g7se.16xlarge

64

256

16/none

6,000,000

1,200,000

32

8

30

30

56

500,000/none

32/none

## c7se, storage-enhanced compute-optimized instance family

-   **Introduction**: This instance family uses the third-generation SHENLONG architecture and Intel Ice Lake processors to improve storage I/O performance.
    
-   **Supported scenarios**: I/O-intensive scenarios such as large and medium-sized OLTP core databases, large and medium-sized NoSQL databases, search and real-time log analytics, and traditional large enterprise-level commercial software such as SAP.
    
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:2.
        
    -   Uses the third-generation Intel® Xeon® Scalable (Ice Lake) processors that deliver a base frequency of 2.9 GHz and an all-core turbo frequency of 3.5 GHz to provide consistent computing performance.
        
    -   Supports Hyper-Threading. By default, Hyper-Threading is enabled. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports the Non-Volatile Memory Express (NVMe) protocol. For more information, see [NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Allows up to 64 data disks to be attached per instance. You can attach up to 16 data disks to an instance when you create the instance. If the instance requires additional data disks, attach more data disks after the instance is created. For more information, see [Attach a data disk](/help/en/ecs/user-guide/attach-a-data-disk#concept-llz-b4c-ydb).
        
    -   Delivers a sequential read/write throughput of up to 64 Gbit/s and up to 1,000,000 IOPS per instance.
        
    -   Provides high storage I/O performance based on large computing capacity. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances provide an ultra-high packet forwarding rate.
        
    -   Provides high network performance based on large computing capacity.
        

c7se instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Maximum attached data disks**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.c7se.large

2

4

1.2/burstable up to 3

450,000

Up to 250,000

2

3

6

6

16

30,000/burstable up to 150,000

3/10

ecs.c7se.xlarge

4

8

2/burstable up to 5

500,000

Up to 250,000

4

4

15

15

16

60,000/burstable up to 150,000

4/10

ecs.c7se.2xlarge

8

16

3/burstable up to 8

800,000

Up to 250,000

8

4

15

15

16

100,000/burstable up to 150,000

6/10

ecs.c7se.3xlarge

12

24

4.5/burstable up to 10

1,200,000

Up to 250,000

8

8

15

15

16

120,000/burstable up to 150,000

8/10

ecs.c7se.4xlarge

16

32

6/burstable up to 10

1,500,000

300,000

8

8

30

30

24

150,000/none

10/none

ecs.c7se.6xlarge

24

48

8/burstable up to 10

2,250,000

450,000

12

8

30

30

24

200,000/none

12/none

ecs.c7se.8xlarge

32

64

10/none

3,000,000

600,000

16

8

30

30

30

300,000/none

16/none

ecs.c7se.16xlarge

64

128

16/none

6,000,000

1,200,000

32

8

30

30

56

500,000/none

32/none

## r7se, storage-enhanced memory-optimized instance family

-   **Introduction**: This instance family uses the third-generation SHENLONG architecture and Intel Ice Lake processors to improve storage I/O performance.
    
-   **Supported scenarios**:
    
    -   I/O-intensive scenarios such as large and medium-sized OLTP core databases
        
    -   Large and medium-sized NoSQL databases
        
    -   Search and real-time log analytics
        
    -   Traditional large enterprise-level commercial software such as SAP
        
    -   High-density deployment of containers
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:8.
        
    -   Uses the third-generation Intel® Xeon® Scalable (Ice Lake) processors that deliver a base frequency of 2.9 GHz and an all-core turbo frequency of 3.5 GHz to provide consistent computing performance.
        
    -   Supports Hyper-Threading. By default, Hyper-Threading is enabled. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports the NVMe protocol. For more information, see [NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Allows up to 64 data disks to be attached per instance. You can attach up to 16 data disks to an instance when you create the instance. If the instance requires additional data disks, attach more data disks after the instance is created. For more information, see [Attach a data disk](/help/en/ecs/user-guide/attach-a-data-disk#concept-llz-b4c-ydb).
        
    -   Delivers a sequential read/write throughput of up to 64 Gbit/s and up to 1,000,000 IOPS per instance.
        
    -   Provides high storage I/O performance based on large computing capacity. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high packet forwarding rates.
        
    -   Provides high network performance based on large computing capacity.
        

r7se instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Maximum attached data disks**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.r7se.large

2

16

1.2/burstable up to 3

450,000

Up to 250,000

2

3

6

6

16

30,000/burstable up to 150,000

3/10

ecs.r7se.xlarge

4

32

2/burstable up to 5

500,000

Up to 250,000

4

4

15

15

16

60,000/burstable up to 150,000

4/10

ecs.r7se.2xlarge

8

64

3/burstable up to 8

800,000

Up to 250,000

8

4

15

15

16

100,000/burstable up to 150,000

6/10

ecs.r7se.3xlarge

12

96

4.5/burstable up to 10

1,200,000

Up to 250,000

8

8

15

15

16

120,000/burstable up to 150,000

8/10

ecs.r7se.4xlarge

16

128

6/burstable up to 10

1,500,000

300,000

8

8

30

30

24

150,000/none

10/none

ecs.r7se.6xlarge

24

192

8/burstable up to 10

2,250,000

450,000

12

8

30

30

24

200,000/none

12/none

ecs.r7se.8xlarge

32

256

10/none

3,000,000

600,000

16

8

30

30

30

300,000/none

16/none

ecs.r7se.16xlarge

64

512

16/none

6,000,000

1,200,000

32

8

30

30

56

500,000/none

32/none

## g7nex, network-enhanced general-purpose instance family

-   **Introduction**: This instance family uses the fourth-generation SHENLONG architecture to provide predictable and consistent ultra-high performance. This instance family utilizes fast path acceleration on chips to improve storage performance, network performance, and computing stability by an order of magnitude.
    
-   **Supported scenarios**:
    
    -   Network-intensive scenarios such as Network Functions Virtualization (NFV) or Software-defined Wide Area Network (SD-WAN), mobile Internet, live commenting on videos, and telecom data forwarding
        
    -   Small and medium-sized database systems, caches, and search clusters
        
    -   Enterprise-level applications of various types and sizes
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:4.
        
    -   Uses the third-generation Intel® Xeon® Scalable (Ice Lake) processors that deliver a base frequency of 2.7 GHz and an all-core turbo frequency of 3.5 GHz to provide consistent computing performance.
        
    -   Supports Hyper-Threading. By default, Hyper-Threading is enabled. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Offers burstable disk IOPS and burstable disk bandwidth for low-specification instances and provides high storage I/O performance based on large computing capacity. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   Significantly improves the network throughput and packet forwarding rate per instance. A single instance can deliver a packet forwarding rate of up to 30,000,000 pps.
        
    -   Provides high network performance based on large computing capacity.
        

g7nex instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**EBS queues**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.g7nex.large

2

8

3/burstable up to 20

450,000

2

3

10

10

1

10,000/burstable up to 50,000

1.5/burstable up to 8

ecs.g7nex.xlarge

4

16

5/burstable up to 24

900,000

4

4

15

15

1

20,000/burstable up to 50,000

2/burstable up to 8

ecs.g7nex.2xlarge

8

32

10/burstable up to 32

1,750,000

8

6

15

15

2

25,000/burstable up to 50,000

3/burstable up to 8

ecs.g7nex.4xlarge

16

64

20/burstable up to 40

3,000,000

16

8

30

30

2

40,000/burstable up to 50,000

5/burstable up to 8

ecs.g7nex.8xlarge

32

128

40/none

6,000,000

32

8

30

30

4

75,000/none

8/none

ecs.g7nex.16xlarge

64

256

80/none

8,000,000

32

15

50

50

4

150,000/none

16/none

ecs.g7nex.32xlarge

128

512

160/none

16,000,000

32

15

50

50

4

300,000/none

32/none

**Note**

Each ecs.g7nex.32xlarge instance must have at least two elastic network interfaces (ENIs) that are assigned different network card indexes before the instance can burst its network bandwidth to 160 Gbit/s. If all ENIs on the instance are assigned the same network card index, the instance can burst its network bandwidth only to 100 Gbit/s. For more information, see [AttachNetworkInterface](/help/en/ecs/api-attachnetworkinterface#doc-api-Ecs-AttachNetworkInterface).

## c7nex, network-enhanced compute-optimized instance family

-   **Introduction**: This instance family uses the fourth-generation SHENLONG architecture to provide predictable and consistent ultra-high performance. This instance family utilizes fast path acceleration on chips to improve storage performance, network performance, and computing stability by an order of magnitude.
    
-   **Supported scenarios**:
    
    -   Network-intensive scenarios such as NFV or SD-WAN, mobile Internet, live commenting on videos, and telecom data forwarding
        
    -   Small and medium-sized database systems, caches, and search clusters
        
    -   Enterprise-level applications of various types and sizes
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:2.
        
    -   Uses the third-generation Intel® Xeon® Scalable (Ice Lake) processors that deliver a base frequency of 2.7 GHz and an all-core turbo frequency of 3.5 GHz to provide consistent computing performance.
        
    -   Supports Hyper-Threading. By default, Hyper-Threading is enabled. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   For small instance types, disk IOPS and disk bandwidth are burstable. The storage I/O performance of an instance corresponds to its instance type. A larger instance type provides higher storage I/O performance. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   Network:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   Significantly improves the network throughput and packet forwarding rate per instance. A single instance can deliver a packet forwarding rate of up to 30,000,000 pps.
        
    -   Provides high network performance based on large computing capacity.
        

c7nex instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**EBS queues**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.c7nex.large

2

4

3/burstable up to 20

450,000

2

3

10

10

1

10,000/burstable up to 50,000

1.5/burstable up to 8

ecs.c7nex.xlarge

4

8

5/burstable up to 24

900,000

4

4

15

15

1

20,000/burstable up to 50,000

2/burstable up to 8

ecs.c7nex.2xlarge

8

16

10/burstable up to 32

1,750,000

8

6

15

15

2

25,000/burstable up to 50,000

3/burstable up to 8

ecs.c7nex.4xlarge

16

32

20/burstable up to 40

3,000,000

16

8

30

30

2

40,000/burstable up to 50,000

5/burstable up to 8

ecs.c7nex.8xlarge

32

64

40/none

6,000,000

32

8

30

30

4

75,000/none

8/none

ecs.c7nex.16xlarge

64

128

80/none

8,000,000

32

15

50

50

4

150,000/none

16/none

ecs.c7nex.32xlarge

128

256

160/none

16,000,000

32

15

50

50

4

300,000/none

32/none

**Note**

Each ecs.c7nex.32xlarge instance must have at least two ENIs that are assigned different network card indexes before the instance can burst its network bandwidth to 160 Gbit/s. If all ENIs on the instance are assigned the same network card index, the instance can burst its network bandwidth only to 100 Gbit/s. For more information, see [AttachNetworkInterface](/help/en/ecs/api-attachnetworkinterface#doc-api-Ecs-AttachNetworkInterface).

## g7ne, network-enhanced general-purpose instance family

-   **Introduction**: This instance family significantly improves the network throughput and packet forwarding rate per instance. A single instance can deliver a packet forwarding rate of up to 24,000,000 pps.
    
-   **Supported scenarios**:
    
    -   Network-intensive scenarios such as NFV or SD-WAN, mobile Internet, live commenting on videos, and telecom data forwarding
        
    -   Small and medium-sized database systems, caches, and search clusters
        
    -   Enterprise-level applications of various types and sizes
        
    -   Big data analytics and machine learning
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:4.
        
    -   Uses Intel® Xeon® Platinum 8369HB (Cooper Lake) or Intel® Xeon® Platinum 8369HC (Cooper Lake) processors that deliver a turbo frequency of 3.8 GHz and a clock speed of at least 3.3 GHz to provide consistent computing performance.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   Provides high network performance based on large computing capacity.
        

g7ne instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.g7ne.large

2

8

1.5/10

900,000

450,000

2

3

10

10

10,000

0.75

ecs.g7ne.xlarge

4

16

3/10

1,000,000

900,000

4

4

15

15

20,000

1

ecs.g7ne.2xlarge

8

32

6/15

1,600,000

1,750,000

8

6

15

15

25,000

1.2

ecs.g7ne.4xlarge

16

64

12/25

3,000,000

3,500,000

16

8

30

30

40,000

2

ecs.g7ne.8xlarge

32

128

25/none

6,000,000

6,000,000

32

8

30

30

75,000

5

ecs.g7ne.12xlarge

48

192

40/none

12,000,000

8,000,000

32

8

30

30

100,000

8

ecs.g7ne.24xlarge

96

384

80/none

24,000,000

16,000,000

48

15

50

50

240,000

16

## g5ne, network-enhanced general-purpose instance family

-   **Introduction**: This instance family significantly improves the network throughput and packet forwarding rate per instance.
    
-   **Supported scenarios**:
    
    -   Data Plane Development Kit (DPDK) applications
        
    -   Network-intensive scenarios such as NFV or SD-WAN, mobile Internet, live commenting on videos, and telecom data forwarding
        
    -   Small and medium-sized database systems, caches, and search clusters
        
    -   Enterprise-level applications of various types and sizes
        
    -   Big data analytics and machine learning
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:4.
        
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8163 (Skylake) or 8269CY (Cascade Lake) processors to provide consistent computing performance.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports standard SSDs and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides high network performance based on large computing capacity.
        
        **Note**
        
        To deploy DPDK applications, we recommend that you select instance types in the g5ne instance family.
        

g5ne instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.g5ne.large

2

8

1

400,000

450,000

2

3

10

10

10,000

1

ecs.g5ne.xlarge

4

16

2

750,000

900,000

4

4

15

15

15,000

1

ecs.g5ne.2xlarge

8

32

3.5

1,500,000

1,750,000

8

6

15

15

30,000

1

ecs.g5ne.4xlarge

16

64

7

3,000,000

3,500,000

16

8

30

30

60,000

2

ecs.g5ne.8xlarge

32

128

15

6,000,000

7,000,000

32

8

30

30

110,000

4

ecs.g5ne.16xlarge

64

256

30

12,000,000

14,000,000

32

8

30

30

130,000

8

ecs.g5ne.18xlarge

72

288

33

13,500,000

15,000,000

32

15

50

50

160,000

9

## g9it, security-enhanced general-purpose instance family

-   **Introduction**:
    
    -   Supports Intel® SGX encrypted computing with up to 192 GiB of encrypted memory. This ensures the confidentiality and integrity of critical code and data against malware attacks.
        
    -   Supports SGX technology in virtual machine form factors. You can choose instance types as needed.
        
    -   Hyper-threading is disabled by default, providing exclusive physical cores. This reduces the risk of side-channel attacks. The memory encryption algorithm is upgraded to AES-256.
        
        **Important**
        
        If you use keys (such as SGX sealing keys) that are bound to hardware to encrypt the data of an instance within an Intel SGX enclave, the encrypted data cannot be decrypted after the host of the instance is changed. We recommend that you perform data redundancy and backup at the application layer to ensure application reliability.
        
    -   Leveraging TPM/TCM chips, the boot chain, from the underlying server hardware to the GuestOS, is measured and authenticated. This enables trusted boot.
        
    -   Uses the new Alibaba Cloud CIPU architecture, offloading many virtualization functions to dedicated hardware. This reduces virtualization overhead and delivers stable, predictable, ultra-high performance.
        
-   **Scenarios**:
    
    -   Scenarios involving sensitive information, such as personally identifiable information (PII), healthcare data, financial data, and intellectual property data.
        
    -   Multi-party computation requiring shared confidential data.
        
    -   Blockchain scenarios.
        
    -   Confidential machine learning.
        
    -   Scenarios with high security and trust requirements, such as finance, government, and enterprise applications.
        
    -   Enterprise applications of all types and scales.
        
-   **Compute**:
    
    -   Processor-to-memory ratio is 1:4. Encrypted memory accounts for approximately 50% of the total memory.
        
    -   Processor: Intel® Xeon® Granite Rapids, with a clock speed of 3.2 GHz and an all-core turbo frequency of 3.6 GHz. This provides stable compute performance.
        
-   **Storage**:
    
    -   I/O optimized instances.
        
    -   Supported disk types: [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Elastic Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   The I/O performance of instance storage scales with the compute specifications. Higher specifications provide better I/O performance. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Networking**:
    
    -   Supports IPv4 and IPv6. For more information, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support eRDMA. For information about how to use eRDMA, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   Instance network performance scales with instance specifications. Higher specifications provide stronger network performance.
        

g9it includes the instance types and metric data listed in the following table.

**Instance type**

**vCPUs**

**Memory (GiB)**

**Encrypted memory (GiB)**

**Network bandwidth baseline/burst (Gbit/s)**

**Packet forwarding PPS**

**Supports vTPM**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per NIC**

**IPv6 addresses per NIC**

**Disk baseline/burst IOPS**

**Disk bandwidth baseline/burst (Gbit/s)**

ecs.g9it.large

2

8

4

4/15

1,200,000

Yes

500,000

4

4

15

15

50,000/200,000

2.5/10

ecs.g9it.xlarge

4

16

8

6/15

1,600,000

Yes

500,000

8

4

15

15

60,000/200,000

4/10

ecs.g9it.2xlarge

8

32

16

12/25

3,000,000

Yes

500,000

16

8

30

30

100,000/200,000

6/10

ecs.g9it.4xlarge

16

64

32

20/32

6,000,000

Yes

800,000

32

8

30

30

200,000/300,000

10/12

ecs.g9it.8xlarge

32

128

64

28/36

12,000,000

Yes

2,000,000

64

8

30

30

300,000/400,000

16/24

ecs.g9it.16xlarge

64

256

128

36/50

20,000,000

Yes

4,000,000

64

15

30

30

400,000/650,000

24/28

ecs.g9it.24xlarge

96

384

192

64

24,000,000

Yes

6,000,000

64

15

50

50

500,000/800,000

32

**Note**

-   Intel® Xeon® Granite Rapids supports only Intel SGX DCAP–based remote attestation and does not support Intel EPID–based remote attestation. You may need to adapt your program to use the remote attestation feature normally. For more information about remote attestation, see [attestation-service](https://software.intel.com/content/www/us/en/develop/topics/software-guard-extensions/attestation-services.html).
    
-   Intel SGX depends on host hardware. This instance family does not support hot migration.
    
-   Operations, such as changing instance types and enabling the economical mode, may cause the host of an instance to change. For instances of this instance family, the host change may cause data decryption to fail. Proceed with caution.
    
-   By default, failover is disabled. You can enable failover. For more information, see [Modify instance maintenance attributes](/help/en/ecs/user-guide/modify-instance-maintenance-attributes#task-2449646). Failover causes the host of an instance to change. For instances of this instance family, the host change may cause data decryption to fail. Proceed with caution.
    
-   When you create a security-enhanced instance, you must select a dedicated image to use the security features. For more information, see [Create a trusted instance](/help/en/ecs/user-guide/create-a-security-enhanced-instance#task-2038128).
    
-   The product is in invitational preview. [Submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to request access.
    

## r9it, security-enhanced memory-optimized instance family

-   **Introduction**
    
    -   Supports Intel® SGX encrypted computing with up to 384 GiB of encrypted memory. This protects the confidentiality and integrity of critical code and data from malware attacks.
        
    -   Supports SGX technology in virtual machine form. You can choose instance types flexibly based on your needs.
        
    -   Hyper-threading is disabled by default. Each instance is allocated dedicated physical CPU cores, reducing side-channel attack risks. The memory encryption algorithm is upgraded to AES-256.
        
        **Important**
        
        If you use keys (such as SGX sealing keys) that are bound to hardware to encrypt the data of an instance within an Intel SGX enclave, the encrypted data cannot be decrypted after the host of the instance is changed. We recommend that you perform data redundancy and backup at the application layer to ensure application reliability.
        
    -   Uses TPM/TCM chips to measure and validate the boot chain—from underlying server hardware to GuestOS—enabling trusted boot.
        
    -   Uses Alibaba Cloud’s new Cloud Infrastructure Processing Unit (CIPU) architecture. This offloads many virtualization functions to dedicated hardware, reducing virtualization overhead and delivering stable, predictable high performance.
        
-   **Scenarios**
    
    -   Workloads handling sensitive information such as personally identifiable information, healthcare data, financial data, and intellectual property.
        
    -   Secure multi-party computation where confidential data must be shared.
        
    -   Blockchain applications.
        
    -   Confidential machine learning.
        
    -   High-security, high-trust environments such as finance, government, and enterprise systems.
        
    -   Enterprise-grade applications of all types and scales.
        
-   **Compute**
    
    -   Processor-to-memory ratio is 1:8. Encrypted memory accounts for about 50% of total memory.
        
    -   Processor: Intel® Xeon® Granite Rapids, base clock speed 3.2 GHz, all-core turbo frequency 3.6 GHz. Delivers stable compute performance.
        
-   **Storage**
    
    -   I/O optimized instance.
        
    -   Supported disk types: [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Elastic Block Storage Overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Instance storage I/O performance scales with instance type. Higher-spec instances deliver stronger storage I/O performance. For details, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**
    
    -   Supports IPv4 and IPv6. For IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support eRDMA. For information about how to use eRDMA, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   These instances support jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   Network performance scales with instance type. Higher-spec instances deliver stronger network performance.
        

r9it includes the instance types and metric data listed in the following table.

**Instance type**

**vCPUs**

**Memory (GiB)**

**Encrypted memory (GiB)**

**Baseline/burst network bandwidth (Gbit/s)**

**Packet forwarding rate (PPS)**

**vTPM support**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.r9it.large

2

16

8

4/15

1,200,000

Yes

500,000

4

4

15

15

50,000/200,000

2.5/10

ecs.r9it.xlarge

4

32

16

6/15

1,600,000

Yes

500,000

8

4

15

15

60,000/200,000

4/10

ecs.r9it.2xlarge

8

64

32

12/25

3,000,000

Yes

500,000

16

8

30

30

100,000/200,000

6/10

ecs.r9it.4xlarge

16

128

64

20/32

6,000,000

Yes

800,000

32

8

30

30

200,000/300,000

10/12

ecs.r9it.8xlarge

32

256

128

28/36

12,000,000

Yes

2,000,000

64

8

30

30

300,000/400,000

16/24

ecs.r9it.16xlarge

64

512

256

36/50

20,000,000

Yes

4,000,000

64

15

30

30

400,000/650,000

24/28

ecs.r9it.24xlarge

96

768

384

64

24,000,000

Yes

6,000,000

64

15

50

50

500,000/800,000

32

**Note**

-   Intel® Xeon® Granite Rapids supports only Intel SGX DCAP-based remote attestation—not Intel EPID-based remote attestation. You may need to adapt your application before using remote attestation. For more information, see [attestation-service](https://software.intel.com/content/www/us/en/develop/topics/software-guard-extensions/attestation-services.html).
    
-   Intel SGX depends on host hardware. This instance family does not support hot migration.
    
-   Operations, such as changing instance types and enabling the economical mode, may cause the host of an instance to change. For instances of this instance family, the host change may cause data decryption to fail. Proceed with caution.
    
-   By default, failover is disabled. You can enable failover. For more information, see [Modify instance maintenance attributes](/help/en/ecs/user-guide/modify-instance-maintenance-attributes#task-2449646). Failover causes the host of an instance to change. For instances of this instance family, the host change may cause data decryption to fail. Proceed with caution.
    
-   When you create a security-enhanced instance, you must select a dedicated image to use the security features. For more information, see [Create a trusted instance](/help/en/ecs/user-guide/create-a-security-enhanced-instance#task-2038128).
    
-   This product is in invitational preview. To request access, or [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).
    

## g7t, security-enhanced general-purpose instance family

-   **Introduction**:
    
    -   This instance family supports up to 256 GiB of encrypted memory and confidential computing based on Intel® Software Guard Extensions (SGX) to protect the confidentiality and integrity of essential code and data from malware attacks.
        
    -   This instance family supports Virtual SGX (vSGX) and allows you to select instance types based on your business requirements.
        
        **Important**
        
        If you use keys (such as SGX sealing keys) that are bound to hardware to encrypt the data of an instance within an Intel SGX enclave, the encrypted data cannot be decrypted after the host of the instance is changed. We recommend that you perform data redundancy and backup at the application layer to ensure application reliability.
        
    -   This instance family implements trusted boot based on Trusted Cryptography Module (TCM) or Trusted Platform Module (TPM) chips. During a trusted boot, all modules in the boot chain from the underlying server to the guest operating system are measured and verified.
        
    -   This instance family offloads a large number of virtualization features to dedicated hardware by using the third-generation SHENLONG architecture to provide predictable and consistent ultra-high performance and reduce virtualization overheads.
        
-   **Supported scenarios**:
    
    -   Scenarios that involve sensitive information such as personal identity information, healthcare information, financial information, and intellectual property data
        
    -   Scenarios in which confidential data is shared among multiple parties
        
    -   Blockchain scenarios
        
    -   Confidential machine learning
        
    -   Scenarios that require high security and enhanced trust, such as services for financial organizations, public service sectors, and enterprises
        
    -   Enterprise-level applications of various types and sizes
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:4. About 50% of memory is encrypted.
        
    -   Uses the third-generation Intel® Xeon® Scalable (Ice Lake) processors that deliver a base frequency of 2.7 GHz and an all-core turbo frequency of 3.5 GHz to provide consistent computing performance.
        
    -   Supports Hyper-Threading. By default, Hyper-Threading is enabled. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Provides high storage I/O performance based on large computing capacity. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances provide an ultra-high packet forwarding rate.
        
    -   Provides high network performance based on large computing capacity.
        

g7t instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Encrypted memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Support for vTPM**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.g7t.large

2

8

4

2/burstable up to 10

900,000

Yes

Up to 250,000

2

3

6

6

20,000/burstable up to 110,000

1.5/burstable up to 6

ecs.g7t.xlarge

4

16

8

3/burstable up to 10

1,000,000

Yes

Up to 250,000

4

4

15

15

40,000/burstable up to 110,000

2/burstable up to 6

ecs.g7t.2xlarge

8

32

16

5/burstable up to 10

1,600,000

Yes

Up to 250,000

8

4

15

15

50,000/burstable up to 110,000

3/burstable up to 6

ecs.g7t.3xlarge

12

48

24

8/burstable up to 10

2,400,000

Yes

Up to 250,000

8

8

15

15

70,000/burstable up to 110,000

4/burstable up to 6

ecs.g7t.4xlarge

16

64

32

10/burstable up to 25

3,000,000

Yes

300,000

8

8

30

30

80,000/burstable up to 110,000

5/burstable up to 6

ecs.g7t.6xlarge

24

96

48

12/burstable up to 25

4,500,000

Yes

450,000

12

8

30

30

110,000/none

6/none

ecs.g7t.8xlarge

32

128

64

16/burstable up to 25

6,000,000

Yes

600,000

16

8

30

30

150,000/none

8/none

ecs.g7t.16xlarge

64

256

128

32/none

12,000,000

Yes

1,200,000

32

8

30

30

300,000/none

16/none

ecs.g7t.32xlarge

128

512

256

64/none

24,000,000

Yes

2,400,000

32

15

30

30

600,000/none

32/none

**Note**

-   Intel Ice Lake supports only remote attestation based on Intel Software Guard Extensions Data Center Attestation Primitives (Intel SGX DCAP) and does not support remote attestation based on Intel Enhanced Privacy ID (EPID). You must adapt applications before you can use the remote attestation feature. For more information about remote attestation, see [Strengthen Enclave Trust with Attestation](https://software.intel.com/content/www/us/en/develop/topics/software-guard-extensions/attestation-services.html).
    
-   Intel SGX depends on host hardware. This instance family does not support hot migration.
    
-   Operations, such as changing instance types and enabling the economical mode, may cause the host of an instance to change. For instances of this instance family, the host change may cause data decryption to fail. Proceed with caution.
    
-   By default, failover is disabled. You can enable failover. For more information, see [Modify instance maintenance attributes](/help/en/ecs/user-guide/modify-instance-maintenance-attributes#task-2449646). Failover causes the host of an instance to change. For instances of this instance family, the host change may cause data decryption to fail. Proceed with caution.
    
-   When you create a security-enhanced instance, you must select a dedicated image to use the security features. For more information, see [Create a trusted instance](/help/en/ecs/user-guide/create-a-security-enhanced-instance#task-2038128).
    
-   To use the ecs.g7t.32xlarge instance type, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).
    

## c7t, security-enhanced compute-optimized instance family

-   **Introduction**:
    
    -   This instance family supports up to 128 GiB of encrypted memory and confidential computing based on Intel® SGX to protect the confidentiality and integrity of essential code and data from malware attacks.
        
    -   This instance family supports vSGX and allows you to select instance types based on your business requirements.
        
        **Important**
        
        If you use keys (such as SGX sealing keys) that are bound to hardware to encrypt the data of an instance within an Intel SGX enclave, the encrypted data cannot be decrypted after the host of the instance is changed. We recommend that you perform data redundancy and backup at the application layer to ensure application reliability.
        
    -   This instance family implements trusted boot based on TCM or TPM chips. During a trusted boot, all modules in the boot chain from the underlying server to the guest operating system are measured and verified.
        
    -   This instance family offloads a large number of virtualization features to dedicated hardware by using the third-generation SHENLONG architecture to provide predictable and consistent ultra-high performance and reduce virtualization overheads.
        
-   **Supported scenarios**:
    
    -   Scenarios that involve sensitive information such as personal identity information, healthcare information, financial information, and intellectual property data
        
    -   Scenarios in which confidential data is shared among multiple parties
        
    -   Blockchain scenarios
        
    -   Confidential machine learning
        
    -   Scenarios that require high security and enhanced trust, such as services for financial organizations, public service sectors, and enterprises
        
    -   Enterprise-level applications of various types and sizes
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:2. About 50% of memory is encrypted.
        
    -   Uses the third-generation Intel® Xeon® Scalable (Ice Lake) processors that deliver a base frequency of 2.7 GHz and an all-core turbo frequency of 3.5 GHz to provide consistent computing performance.
        
    -   Supports Hyper-Threading. By default, Hyper-Threading is enabled. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Provides high storage I/O performance based on large computing capacity.
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances provide an ultra-high packet forwarding rate.
        
    -   Provides high network performance based on large computing capacity.
        

c7t instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Encrypted memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Support for vTPM**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.c7t.large

2

4

2

2/burstable up to 10

900,000

Yes

Up to 250,000

2

3

6

6

20,000/burstable up to 110,000

1.5/burstable up to 6

ecs.c7t.xlarge

4

8

4

3/burstable up to 10

1,000,000

Yes

Up to 250,000

4

4

15

15

40,000/burstable up to 110,000

2/burstable up to 6

ecs.c7t.2xlarge

8

16

8

5/burstable up to 10

1,600,000

Yes

Up to 250,000

8

4

15

15

50,000/burstable up to 110,000

3/burstable up to 6

ecs.c7t.3xlarge

12

24

12

8/burstable up to 10

2,400,000

Yes

Up to 250,000

8

8

15

15

70,000/burstable up to 110,000

4/burstable up to 6

ecs.c7t.4xlarge

16

32

16

10/burstable up to 25

3,000,000

Yes

300,000

8

8

30

30

80,000/burstable up to 110,000

5/burstable up to 6

ecs.c7t.6xlarge

24

48

24

12/burstable up to 25

4,500,000

Yes

450,000

12

8

30

30

110,000/none

6/none

ecs.c7t.8xlarge

32

64

32

16/burstable up to 25

6,000,000

Yes

600,000

16

8

30

30

150,000/none

8/none

ecs.c7t.16xlarge

64

128

64

32/none

12,000,000

Yes

1,200,000

32

8

30

30

300,000/none

16/none

ecs.c7t.32xlarge

128

256

128

64/none

24,000,000

Yes

2,400,000

32

15

30

30

600,000/none

32/none

**Note**

-   Intel Ice Lake supports only remote attestation based on Intel Software Guard Extensions Data Center Attestation Primitives (Intel SGX DCAP) and does not support remote attestation based on Intel Enhanced Privacy ID (EPID). You must adapt applications before you can use the remote attestation feature. For more information about remote attestation, see [Strengthen Enclave Trust with Attestation](https://software.intel.com/content/www/us/en/develop/topics/software-guard-extensions/attestation-services.html).
    
-   Intel SGX depends on host hardware. This instance family does not support hot migration.
    
-   Operations, such as changing instance types and enabling the economical mode, may cause the host of an instance to change. For instances of this instance family, the host change may cause data decryption to fail. Proceed with caution.
    
-   By default, failover is disabled. You can enable failover. For more information, see [Modify instance maintenance attributes](/help/en/ecs/user-guide/modify-instance-maintenance-attributes#task-2449646). Failover causes the host of an instance to change. For instances of this instance family, the host change may cause data decryption to fail. Proceed with caution.
    
-   When you create a security-enhanced instance, you must select a dedicated image to use the security features. For more information, see [Create a trusted instance](/help/en/ecs/user-guide/create-a-security-enhanced-instance#task-2038128).
    
-   To use the ecs.c7t.32xlarge instance type, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).
    

## r7t, security-enhanced memory-optimized instance family

-   **Introduction**:
    
    -   This instance family supports up to 512 GiB of encrypted memory and confidential computing based on Intel® SGX to protect the confidentiality and integrity of essential code and data from malware attacks.
        
    -   This instance family supports vSGX and allows you to select instance types based on your business requirements.
        
        **Important**
        
        If you use keys (such as SGX sealing keys) that are bound to hardware to encrypt the data of an instance within an Intel SGX enclave, the encrypted data cannot be decrypted after the host of the instance is changed. We recommend that you perform data redundancy and backup at the application layer to ensure application reliability.
        
    -   This instance family implements trusted boot based on TCM or TPM chips. During a trusted boot, all modules in the boot chain from the underlying server to the guest operating system are measured and verified.
        
    -   This instance family offloads a large number of virtualization features to dedicated hardware by using the third-generation SHENLONG architecture to provide predictable and consistent ultra-high performance and reduce virtualization overheads.
        
-   **Supported scenarios**:
    
    -   Encrypted computing applications for databases
        
    -   Scenarios that involve sensitive information such as personal identity information, healthcare information, financial information, and intellectual property data
        
    -   Scenarios in which confidential data is shared among multiple parties
        
    -   Blockchain scenarios
        
    -   Confidential machine learning
        
    -   Scenarios that require high security and enhanced trust, such as services for financial organizations, public service sectors, and enterprises
        
    -   Enterprise-level applications of various types and sizes
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:8. About 50% of memory is encrypted.
        
    -   Uses the third-generation Intel® Xeon® Scalable (Ice Lake) processors that deliver a base frequency of 2.7 GHz and an all-core turbo frequency of 3.5 GHz to provide consistent computing performance.
        
    -   Supports Hyper-Threading. By default, Hyper-Threading is enabled. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Provides high storage I/O performance based on large computing capacity.
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high packet forwarding rates.
        
    -   Provides high network performance based on large computing capacity.
        

r7t instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Encrypted memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Support for vTPM**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.r7t.large

2

16

8

2/burstable up to 10

900,000

Yes

Up to 250,000

2

3

6

6

20,000/burstable up to 110,000

1.5/burstable up to 6

ecs.r7t.xlarge

4

32

16

3/burstable up to 10

1,000,000

Yes

Up to 250,000

4

4

15

15

40,000/burstable up to 110,000

2/burstable up to 6

ecs.r7t.2xlarge

8

64

32

5/burstable up to 10

1,600,000

Yes

Up to 250,000

8

4

15

15

50,000/burstable up to 110,000

3/burstable up to 6

ecs.r7t.3xlarge

12

96

48

8/burstable up to 10

2,400,000

Yes

Up to 250,000

8

8

15

15

70,000/burstable up to 110,000

4/burstable up to 6

ecs.r7t.4xlarge

16

128

64

10/burstable up to 25

3,000,000

Yes

300,000

8

8

30

30

80,000/burstable up to 110,000

5/burstable up to 6

ecs.r7t.6xlarge

24

192

96

12/burstable up to 25

4,500,000

Yes

450,000

12

8

30

30

110,000/none

6/none

ecs.r7t.8xlarge

32

256

128

16/burstable up to 25

6,000,000

Yes

600,000

16

8

30

30

150,000/none

8/none

ecs.r7t.16xlarge

64

512

256

32/none

12,000,000

Yes

1,200,000

32

8

30

30

300,000/none

16/none

ecs.r7t.32xlarge

128

1,024

512

64/none

24,000,000

Yes

2,400,000

32

15

30

30

600,000/none

32/none

**Note**

-   Intel Ice Lake supports only remote attestation based on Intel Software Guard Extensions Data Center Attestation Primitives (Intel SGX DCAP) and does not support remote attestation based on Intel Enhanced Privacy ID (EPID). You must adapt applications before you can use the remote attestation feature. For more information about remote attestation, see [Strengthen Enclave Trust with Attestation](https://software.intel.com/content/www/us/en/develop/topics/software-guard-extensions/attestation-services.html).
    
-   Intel SGX depends on host hardware. This instance family does not support hot migration.
    
-   Operations, such as changing instance types and enabling the economical mode, may cause the host of an instance to change. For instances of this instance family, the host change may cause data decryption to fail. Proceed with caution.
    
-   By default, failover is disabled. You can enable failover. For more information, see [Modify instance maintenance attributes](/help/en/ecs/user-guide/modify-instance-maintenance-attributes#task-2449646). Failover causes the host of an instance to change. For instances of this instance family, the host change may cause data decryption to fail. Proceed with caution.
    
-   When you create a security-enhanced instance, you must select a dedicated image to use the security features. For more information, see [Create a trusted instance](/help/en/ecs/user-guide/create-a-security-enhanced-instance#task-2038128).
    
-   To use the ecs.r7t.32xlarge instance type, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).
    

## g6t, security-enhanced general-purpose instance family

Features:

-   **Introduction**:
    
    -   This instance family implements trusted boot based on TCM or TPM chips. During a trusted boot, all modules in the boot chain from the underlying server to the guest operating system are measured and verified.
        
    -   This instance family supports the vTPM feature and delivers trusted capabilities at the IaaS layer based on integrity monitoring.
        
    -   This instance family offloads a large number of virtualization features to dedicated hardware by using the third-generation SHENLONG architecture to provide predictable and consistent ultra-high performance and reduce virtualization overheads. This instance family utilizes fast path acceleration on chips to improve storage performance, network performance, and computing stability by an order of magnitude.
        
-   **Supported scenarios**:
    
    -   Scenarios that require high security and enhanced trust, such as services for financial organizations, public service sectors, and enterprises
        
    -   Scenarios where large volumes of packets are received and transmitted, such as live commenting on videos and telecom data forwarding
        
    -   Enterprise-level applications of various types and sizes
        
    -   Websites and application servers
        
    -   Game servers
        
    -   Small and medium-sized database systems, caches, and search clusters
        
    -   Data analytics and computing
        
    -   Computing clusters and memory-intensive data processing
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:4.
        
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8269CY (Cascade Lake) processors that deliver a turbo frequency of 3.2 GHz to provide consistent computing performance.
        
    -   Supports Hyper-Threading. By default, Hyper-Threading is enabled. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Provides high storage I/O performance based on large computing capacity. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high packet forwarding rates.
        
    -   Provides high network performance based on large computing capacity.
        

g6t instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Support for vTPM**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.g6t.large

2

8

1.2/burstable up to 10

900,000

Yes

Up to 250,000

2

3

6

1

20,000

1

ecs.g6t.xlarge

4

16

2/burstable up to 10

1,000,000

Yes

Up to 250,000

4

4

15

1

40,000

1.5

ecs.g6t.2xlarge

8

32

3/burstable up to 10

1,600,000

Yes

Up to 250,000

8

4

15

1

50,000

2

ecs.g6t.4xlarge

16

64

6/burstable up to 10

3,000,000

Yes

300,000

8

8

30

1

80,000

3

ecs.g6t.8xlarge

32

128

10/none

6,000,000

Yes

600,000

16

8

30

1

150,000

5

ecs.g6t.13xlarge

52

192

16/none

9,000,000

Yes

900,000

32

7

30

1

240,000

8

ecs.g6t.26xlarge

104

384

32/none

24,000,000

Yes

1,800,000

32

15

30

1

480,000

16

**Note**

The results for network capabilities are the maximum values obtained from single-item tests. For example, when network bandwidth is tested, no stress tests are performed on the packet forwarding rate or other network metrics.

## c6t, security-enhanced compute-optimized instance family

-   **Introduction**:
    
    -   This instance family implements trusted boots based on TPM chips. During a trusted boot, all modules in the boot chain from the underlying hardware to the guest operating system are measured and verified.
        
    -   This instance family supports integrity monitoring and provides trusted capabilities at the IaaS layer.
        
    -   This instance family offloads a large number of virtualization features to dedicated hardware by using the third-generation SHENLONG architecture to provide predictable and consistent ultra-high performance and reduce virtualization overheads. This instance family utilizes fast path acceleration on chips to improve storage performance, network performance, and computing stability by an order of magnitude.
        
-   **Supported scenarios**:
    
    -   Scenarios that require high security and enhanced trust, such as services for financial organizations, public service sectors, and enterprises
        
    -   Scenarios where large volumes of packets are received and transmitted, such as live commenting on videos and telecom data forwarding
        
    -   Web frontend servers
        
    -   Frontend servers of massively multiplayer online (MMO) games
        
    -   Data analytics, batch processing, and video encoding
        
    -   High-performance scientific and engineering applications
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:2.
        
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8269CY (Cascade Lake) processors that deliver a turbo frequency of 3.2 GHz to provide consistent computing performance.
        
    -   Supports Hyper-Threading. By default, Hyper-Threading is enabled. For more information, see [Change CPU options](/help/en/ecs/user-guide/specify-and-view-cpu-options#concept-2352963).
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Provides high storage I/O performance based on large computing capacity. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Provides ultra-high packet forwarding rates.
        
    -   Provides high network performance based on large computing capacity.
        

c6t instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Support for vTPM**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.c6t.large

2

4

1.2/burstable up to 10

900,000

Yes

Up to 250,000

2

3

6

1

20,000

1

ecs.c6t.xlarge

4

8

2/burstable up to 10

1,000,000

Yes

Up to 250,000

4

4

15

1

40,000

1.5

ecs.c6t.2xlarge

8

16

3/burstable up to 10

1,600,000

Yes

Up to 250,000

8

4

15

1

50,000

2

ecs.c6t.4xlarge

16

32

6/burstable up to 10

3,000,000

Yes

300,000

8

8

30

1

80,000

3

ecs.c6t.8xlarge

32

64

10/none

6,000,000

Yes

600,000

16

8

30

1

150,000

5

ecs.c6t.13xlarge

52

96

16/none

9,000,000

Yes

900,000

32

7

30

1

240,000

8

ecs.c6t.26xlarge

104

192

32/none

24,000,000

Yes

1,800,000

32

15

30

1

480,000

16

**Note**

The results for network capabilities are the maximum values obtained from single-item tests. For example, when network bandwidth is tested, no stress tests are performed on the packet forwarding rate or other network metrics.

## **re8,** high-memory instance family

-   **Introduction**: This family uses the new Alibaba Cloud Cloud Infrastructure Processing Unit (CIPU) architecture to deliver stable and predictable ultra-high performance. It also uses chip-level fast path acceleration to significantly improve storage performance, network performance, and computing stability.
    
-   **Supported scenarios**: In-memory databases such as SAP HANA, high-performance databases, and other memory-intensive enterprise applications.
    
-   **Compute**:
    
    -   Processor-to-memory ratio of 1:17. Maximum memory capacity of 16 TB.
        
    -   Processor: Intel ® Xeon ® Sapphire Rapids processors with a base clock speed of 1.9 GHz and an all-core turbo frequency of 2.9 GHz. Provides stable compute performance.
        
-   **Storage**:
    
    -   This is an I/O optimized instance.
        
    -   Supports the NVMe protocol. For more information, see [NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).
        
    -   Supported disk types: [ESSDs](/help/en/ecs/user-guide/essds) , [ESSD AutoPL disk](/help/en/ecs/user-guide/essd-autopl-disks) , and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
    -   Smaller instance types support burst disk IOPS and bandwidth. The storage I/O performance of an instance depends on its instance type. Instances with higher specifications deliver better storage I/O performance. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance#concept-2367327).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   These instances support eRDMA. For information about how to use eRDMA, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance#task-2128004).
        
    -   Supports the Jumbo Frames feature. For more information, see [Jumbo Frames](/help/en/ecs/user-guide/jumbo-frame/#section-vtb-klu-z5y).
        
    -   实例网络性能与实例规格对应，规格越高网络性能越强。
        
-   **Security**: These instances support the vTPM feature. For more information, see [Overview of trusted computing](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities).
    

re8 instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Base/Burst network bandwidth (Gbit/s)**

**Packet forwarding rate (PPS)**

**NIC Queues**

**Elastic Network Interfaces (ENIs)**

**Private IPv4 addresses per ENI**

**Base disk IOPS**

**Base disk bandwidth (Gbit/s)**

ecs.re8.30xlarge

120

2,048

32/Up to 48

7,500,000

32

15

30

150,000/Up to 300,000

12/Up to 25

ecs.re8.60xlarge

240

4,096

64

15,000,000

32

15

30

300,000

25

ecs.re8.90xlarge

360

6,144

96

22,500,000

64

15

30

400,000

36

ecs.re8.120xlarge

480

8,192

128

30,000,000

64

15

40

600,000

50

ecs.re8.180xlarge

720

12,288

192

45,000,000

64

15

40

900,000

75

ecs.re8.240xlarge

960

16,384

200

50,000,000

64

15

50

1,200,000

100

## re6p, persistent memory-optimized instance family

For answers to commonly asked questions about persistent memory-optimized instances, see [Instance FAQ](/help/en/ecs/user-guide/instance-faq/#concept-gqy-fyx-wgb).

Features:

-   **Introduction**:
    
    -   This instance family uses Intel® OptaneTM persistent memory.
        
        **Important**
        
        The reliability of data stored in persistent memory varies based on the reliability of persistent memory devices and the physical servers to which these devices are attached. Risks of single points of failure exist. To ensure the reliability of application data, we recommend that you implement data redundancy at the application layer and use cloud disks for long-term data storage.
        
    -   This instance family allows persistent memory to be used as memory or as local SSDs on instances of some instance types.
        
        **Note**
        
        For more information, see [Configure the usage mode of persistent memory](/help/en/ecs/user-guide/configure-the-usage-mode-of-persistent-memory#task-1986683).
        
    -   This instance family provides the ecs.re6p-redis.<nx>large instance types for Redis applications.
        
        **Note**
        
        ecs.re6p-redis.<nx>large instance types are exclusively provided for Redis applications. Persistent memory on instances of these instance types is used as memory by default and cannot be re-configured as local SSDs. For information about how to deploy a Redis application, see [Deploy Redis applications on instances with persistent memory](/help/en/ecs/user-guide/deploy-redis-on-persistent-memory-optimized-instances#task-1986409).
        
-   **Supported scenarios**:
    
    -   Redis and other NoSQL databases such as Cassandra and MongoDB
        
    -   Structured databases such as MySQL
        
    -   I/O-intensive applications such as e-commerce, online games, and media applications
        
    -   Search scenarios that use solutions such as Elasticsearch
        
    -   Live video streaming, instant messaging, and room-based online games that require persistent connections
        
    -   High-performance relational databases and OLTP systems
        
-   **Compute**:
    
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8269CY (Cascade Lake) processors that deliver a turbo frequency of 3.2 GHz to provide consistent computing performance.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks), standard SSDs, and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        

re6p instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Persistent memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Connections**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.re6p.large

2

8

31.5

1/3

300,000

Up to 250,000

2

2

6

1

10,000

1

ecs.re6p.xlarge

4

16

63

1.5/5

500,000

Up to 250,000

4

3

10

1

20,000

1.5

ecs.re6p.2xlarge

8

32

126

2.5/none

800,000

Up to 250,000

8

4

20

1

25,000

2

ecs.re6p.13xlarge

52

192

756

12.5/none

3,000,000

900,000

32

7

20

1

100,000

8

ecs.re6p.26xlarge

104

384

1,512

25/none

6,000,000

1,800,000

32

15

20

1

200,000

16.4

ecs.re6p-redis.large

2

8

31.5

1/3

300,000

Up to 250,000

2

2

6

1

10,000

1

ecs.re6p-redis.xlarge

4

16

63

1.5/5

500,000

Up to 250,000

4

3

10

1

20,000

1.5

ecs.re6p-redis.2xlarge

8

32

126

2.5/none

800,000

Up to 250,000

8

4

20

1

25,000

2

ecs.re6p-redis.13xlarge

52

192

756

12.5/none

3,000,000

900,000

32

7

20

1

100,000

8

## re6, high-memory instance family

Features:

-   **Introduction**: This instance family is optimized for high-performance databases, in-memory databases, and enterprise-level memory-intensive applications.
    
-   **Supported scenarios**:
    
    -   High-performance databases and in-memory databases such as SAP HANA
        
    -   Memory-intensive applications
        
    -   Big data processing engines such as Apache Spark and Presto
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:16 (1:15 for some instance types) and up to 3 TiB of memory.
        
    -   Uses 2.5 GHz Intel® Xeon® Platinum 8269CY (Cascade Lake) processors that deliver a turbo frequency of 3.2 GHz to provide consistent computing performance.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks), standard SSDs, and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        

re6 instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.re6.4xlarge

16

256

5

1,800,000

8

7

20

1

25,000

2

ecs.re6.8xlarge

32

512

10

1,800,000

16

7

20

1

50,000

4

ecs.re6.13xlarge

52

768

10

1,800,000

16

7

20

1

50,000

4

ecs.re6.16xlarge

64

1,024

16

3,000,000

32

7

20

1

100,000

8

ecs.re6.26xlarge

104

1,536

16

3,000,000

32

7

20

1

100,000

8

ecs.re6.32xlarge

128

2,048

32

6,000,000

32

15

20

1

200,000

16

ecs.re6.52xlarge

208

3,072

32

6,000,000

32

15

20

1

200,000

16

**Note**

To use the ecs.re6.32xlarge instance type, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).

## re4, high-memory instance family

-   **Introduction**:
    
    -   This instance family is optimized for high-performance databases, in-memory databases, and enterprise-level memory-intensive applications.
        
    -   The ecs.re4.20xlarge and ecs.re4.40xlarge instance types are SAP HANA-certified.
        
-   **Supported scenarios**:
    
    -   High-performance databases and in-memory databases such as SAP HANA
        
    -   Memory-intensive applications
        
    -   Big data processing engines such as Apache Spark and Presto
        
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:12 and up to 1,920 GiB of memory.
        
    -   Uses 2.2 GHz Intel® Xeon® E7 8880 v4 (Broadwell) processors that deliver a turbo frequency of up to 2.4 GHz to provide consistent computing performance.
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports standard SSDs and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        

re4 instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**IPv6 addresses per ENI**

ecs.re4.10xlarge

40

480

8

1,000,000

8

4

10

1

ecs.re4.20xlarge

80

960

15

2,000,000

16

2

10

1

ecs.re4.40xlarge

160

1,920

30

4,000,000

16

2

10

1

## re4e, high-memory instance family

To use the re4e instance family, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).

-   **Introduction**: This instance family is optimized for high-performance databases, in-memory databases, and enterprise-level memory-intensive applications.
    
-   **Compute**:
    
    -   Offers a CPU-to-memory ratio of 1:24 and up to 3,840 GiB of memory.
        
    -   Uses 2.2 GHz Intel® Xeon® E7 8880 v4 (Broadwell) processors that deliver a turbo frequency of up to 2.4 GHz to provide consistent computing performance.
        
-   **Supported scenarios**:
    
    -   High-performance databases and in-memory databases such as SAP HANA
        
    -   Memory-intensive applications
        
    -   Big data processing engines such as Apache Spark and Presto
        
-   **Storage**:
    
    -   Is an instance family in which all instances are I/O optimized.
        
    -   Supports standard SSDs and ultra disks. For information about disks, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network**:
    
    -   Supports IPv4 and IPv6. For information about IPv6 communication, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        

re4e instance types

**Instance type**

**vCPUs**

**Memory (GiB)**

**Network bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**NIC queues**

**ENIs**

**Private IPv4 addresses per ENI**

**Private IPv6 addresses per ENI**

ecs.re4e.40xlarge

160

3,840

30

4,500,000

16

15

10

1
