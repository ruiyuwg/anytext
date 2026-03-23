Instance families with local SSDs (i series) provide vCPU-to-memory ratios of 1:4 and 1:8. They suit scenarios such as online transaction processing (OLTP), relational databases, NoSQL databases (Cassandra, MongoDB), search engines (Elasticsearch), and E-MapReduce big data workloads including storage-compute separation.

**Note**

-   [**View instance availability by region**](https://ecs-buy.alibabacloud.com/instanceTypes/#/instanceTypeByRegion)**:** Instance types may vary by region. We recommend that you check the purchase availability in each region.
    
-   [**View instance type selection guide**](/help/en/ecs/user-guide/best-practices-for-instance-type-selection)**:** First, determine which instance families are suitable for your business scenario. Then, use this topic to select a specific instance type.
    
-   [**View instance metric descriptions**](/help/en/ecs/user-guide/instance-specification-naming-and-classification#ad60bb6239ts8)**:** Read this topic to understand the metrics for instance types.
    
-   [**Use the ECS Price Calculator**](https://www.alibabacloud.com/zh/pricing-calculator?_p_lc=1#/commodity/vm_intl)**:** You can use the price calculator to estimate instance fees.
    

-   [**View instance availability by region**](https://ecs-buy.alibabacloud.com/instanceTypes/#/instanceTypeByRegion)**:** Instance types may vary by region. Check the purchase availability in each region.
    
-   [**View instance type selection guide**](/help/en/ecs/user-guide/best-practices-for-instance-type-selection)**:** Determine which instance families suit your business scenario, then select a specific instance type.
    
-   [**View instance metric descriptions**](/help/en/ecs/user-guide/instance-specification-naming-and-classification)**:** Read this topic to understand the metrics for instance types.
    
-   [**Use the ECS Price Calculator**](https://www.alibabacloud.com/zh/pricing-calculator?_p_lc=1#/commodity/vm_intl)**:** Estimate instance fees with the price calculator.
    

****Intel Xeon Granite Rapids processors****

****Intel Xeon Scalable (Ice Lake) processors****

****Intel Xeon Platinum 8269CY (Cascade Lake) processors****

****Intel Xeon Platinum 8163 (Skylake) processors****

\- i5g, instance family with local SSDs

\- i4, instance family with local SSDs

\- i3g, instance family with local SSDs

\- i2, instance family with local SSDs

\- i5ge, instance family with local SSDs

\- i4g, instance family with local SSDs

\- i3, instance family with local SSDs

\- i2g, instance family with local SSDs

\- i5e, instance family with local SSDs

\- i4r, instance family with local SSDs

\- i2ne, instance family with local SSDs

\- i5, instance family with local SSDs

\- i4p, performance-enhanced instance family with local SSDs

\- i2gne, instance family with local SSDs

## Overview

**Warning**

The durability of data stored on a local disk depends on the reliability of the associated physical machine. A single point of failure (SPOF) risk exists. Data stored on local disks may be lost. Store only temporary data on local disks. For more information, see [Local disks](/help/en/ecs/user-guide/local-disks).

Instances equipped with local SSDs deliver high I/O performance. They suit scenarios that demand high storage I/O performance and require high availability at the application layer, such as NoSQL databases, massively parallel processing (MPP) data warehouses, and distributed file systems.

These instances also suit enterprises that run online services such as gaming, e-commerce, live video streaming, and media. They meet the low-latency, high-IOPS requirements of I/O-intensive applications for block storage devices.

Instances equipped with local SSDs have the following characteristics:

-   Deliver up to hundreds of thousands of low-latency random read/write IOPS for large databases.
    
-   Offer a maximum sequential read/write throughput of several gibibytes per second in big data, parallel computing, and other large dataset scenarios.
    
-   Use local Non-Volatile Memory Express (NVMe) SSDs to deliver hundreds of thousands of random read/write IOPS with single-digit microsecond latency.
    

When you use instances equipped with local SSDs, take note of the following items:

-   Instances equipped with local SSDs do not support instance configuration changes.
    
-   Local disks are tied to specific instance types. The number and capacity of local disks attached to an instance vary based on the instance type. You cannot separately purchase local disks, or detach local disks from instances and then attach the disks to other instances.
    
-   You cannot create snapshots for local disks. To create an image from the system disk and data disks of an instance equipped with local SSDs, create an image by combining the snapshots of both the system disk and data disks. In this case, the data disks must be cloud disks.
    
-   You cannot create images that consist of system disk snapshots and data disk snapshots based on instances equipped with local SSDs.
    
-   You can attach a standard SSD to an instance equipped with local SSDs and extend the capacity of the standard SSD.
    
-   Operations on an instance equipped with local SSDs may affect the data stored on the local SSDs. For more information, see the [Impacts of instance operations on data stored on local disks](/help/en/ecs/user-guide/local-disks) section of the "Local disks" topic.
    

## i5g, instance family with local SSDs

This instance family provides high-performance local NVMe SSDs with high IOPS, high throughput, and low access latency. It uses the Alibaba Cloud Cloud Infrastructure Processing Unit (CIPU) architecture and Intel Xeon 6 processors to deliver stable computing power and a high-performance I/O engine.

-   **Use cases:** Disk-based key-value (KV) databases such as RocksDB and ClickHouse. E-MapReduce for big data, including hot/cold data layering, storage-compute separation, and data lakes. Search engines such as Elasticsearch.
    
-   **Compute:**
    
    -   vCPU-to-memory ratio of 1:4.
        
    -   Powered by Intel Xeon Granite Rapids with a base frequency of 3.2 GHz and an all-core turbo frequency of 3.6 GHz.
        
-   **Storage:**
    
    -   All instances are I/O optimized.
        
    -   Supports [Enterprise SSDs (ESSDs)](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network:**
    
    -   Supports IPv4 and IPv6. For more information, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Supports eRDMA. For more information, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance).
        
    -   Supports jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/).
        
    -   Network performance scales with instance type. Larger instance types provide higher network performance.
        
-   **Security:** Supports the vTPM feature. For more information, see [Overview of trusted computing](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities).
    

### i5g instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Local storage**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.i5g.8xlarge

32

128

1 × 1,919 GB (1 × 1,788 GiB)

16/32

10,000,000

200,000/300,000

10/12

ecs.i5g.16xlarge

64

256

1 × 3,839 GB (1 × 3,576 GiB)

32/None

20,000,000

300,000/None

16/None

## i5ge, instance family with local SSDs

This instance family provides high-performance local NVMe SSDs with high IOPS, high throughput, and low access latency. It uses the Alibaba Cloud CIPU architecture and Intel Xeon 6 processors to deliver stable computing power and a high-performance I/O engine.

-   **Use cases:** Disk-based key-value (KV) databases such as RocksDB and ClickHouse, big data computing with local cache, and online transactions.
    
-   **Compute:**
    
    -   vCPU-to-memory ratio of 1:6.
        
    -   Powered by Intel Xeon Granite Rapids with a base frequency of 3.2 GHz and an all-core turbo frequency of 3.6 GHz.
        
-   **Storage:**
    
    -   All instances are I/O optimized.
        
    -   Supports [Enterprise SSDs (ESSDs)](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network:**
    
    -   Supports IPv4 and IPv6. For more information, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Supports eRDMA. For more information, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance).
        
    -   Supports jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/).
        
    -   Network performance scales with instance type. Larger instance types provide higher network performance.
        
-   **Security:** Supports the vTPM feature. For more information, see [Overview of trusted computing](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities).
    

### i5ge instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Local storage**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.i5ge.3xlarge

12

72

1 × 1,919 GB (1 × 1,788 GiB)

25/40

4,000,000

80,000/200,000

5/10

ecs.i5ge.6xlarge

24

144

1 × 3,839 GB (1 × 3,576 GiB)

50/70

8,000,000

120,000/200,000

7.5/10

ecs.i5ge.12xlarge

48

288

2 × 3,839 GB (2 × 3,576 GiB)

84/None

15,000,000

240,000/None

12/None

ecs.i5ge.24xlarge

96

576

4 × 3,839 GB (4 × 3,576 GiB)

172/None

30,000,000

300,000/None

20/None

## i5e, instance family with local SSDs

This instance family provides high-performance local NVMe SSDs with high IOPS, high throughput, and low access latency. It uses the Alibaba Cloud CIPU architecture and Intel Xeon 6 processors to deliver stable computing power and a high-performance I/O engine.

-   **Use cases:** Relational databases such as MySQL, remote cache services, and cache layer acceleration.
    
-   **Compute:**
    
    -   vCPU-to-memory ratio of 1:8.
        
    -   Powered by Intel Xeon Granite Rapids with a base frequency of 2.9 GHz and an all-core turbo frequency of 3.6 GHz.
        
-   **Storage:**
    
    -   All instances are I/O optimized.
        
    -   Supports [Enterprise SSDs (ESSDs)](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network:**
    
    -   Supports IPv4 and IPv6. For more information, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Supports eRDMA. For more information, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance).
        
    -   Supports jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/).
        
    -   Network performance scales with instance type. Larger instance types provide higher network performance.
        
-   **Security:** Supports the vTPM feature. For more information, see [Overview of trusted computing](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities).
    

### i5e instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Local storage**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.i5e.2xlarge

8

64

1 × 3,840 GB (1 × 3,576 GiB)

20/40

4,000,000

60,000/200,000

4/10

ecs.i5e.4xlarge

16

128

1 × 7,680 GB (1 × 7,152 GiB)

40/80

7,000,000

100,000/200,000

6/10

ecs.i5e.8xlarge

32

256

2 × 7,680 GB (2 × 7,152 GiB)

80/120

14,000,000

150,000/200,000

10/12

ecs.i5e.12xlarge

48

384

3 × 7,680 GB (3 × 7,152 GiB)

120

20,000,000

240,000

12

ecs.i5e.16xlarge

64

512

4 × 7,680 GB (4 × 7,152 GiB)

160

25,000,000

300,000

16

ecs.i5e.32xlarge

128

1,024

8 × 7,680 GB (8 × 7,152 GiB)

320

50,000,000

600,000

32

## i5, instance family with local SSDs

This instance family provides high-performance local NVMe SSDs with high IOPS, high throughput, and low access latency. It uses the Alibaba Cloud CIPU architecture and Intel Xeon 6 processors to deliver stable computing power and a high-performance I/O engine.

-   **Use cases:** Disk-based key-value (KV) databases such as RocksDB and ClickHouse. E-MapReduce for big data with hot and cold data layers. Architectures that separate storage and compute. Data lakes. Other I/O-intensive applications with frequent disk writes, such as message middleware and containers.
    
-   **Compute:**
    
    -   vCPU-to-memory ratio of 1:8.
        
    -   Powered by Intel Xeon Granite Rapids with a base frequency of 3.4 GHz and an all-core turbo frequency of 3.8 GHz.
        
-   **Storage:**
    
    -   All instances are I/O optimized.
        
    -   Supports [Enterprise SSDs (ESSDs)](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network:**
    
    -   Supports IPv4 and IPv6. For more information, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Supports eRDMA. For more information, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance).
        
    -   Supports jumbo frames. For more information, see [Jumbo frames](/help/en/ecs/user-guide/jumbo-frame/).
        
    -   Network performance scales with instance type. Larger instance types provide higher network performance.
        
-   **Security:** Supports the vTPM feature. For more information, see [Overview of trusted computing](/help/en/ecs/user-guide/overview-of-trusted-computing-capabilities).
    

### i5 instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Local storage**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.i5.xlarge

4

32

1 × 960 GB (1 × 894 GiB)

10/20

2,000,000

40,000/200,000

2/10

ecs.i5.2xlarge

8

64

1 × 1,919 GB (1 × 1,788 GiB)

20/40

4,000,000

60,000/200,000

4/10

ecs.i5.4xlarge

16

128

1 × 3,839 GB (1 × 3,576 GiB)

40/80

7,000,000

100,000/200,000

6/10

ecs.i5.8xlarge

32

256

2 × 3,839 GB (2 × 3,576 GiB)

80/120

14,000,000

150,000/200,000

10/12

ecs.i5.12xlarge

48

384

3 × 3,839 GB (3 × 3,576 GiB)

120

20,000,000

240,000

12

ecs.i5.16xlarge

64

512

4 × 3,839 GB (4 × 3,576 GiB)

160

27,000,000

300,000

16

## i4, instance family with local SSDs

This instance family provides high-performance local NVMe SSDs with high IOPS, high throughput, and low latency.

-   **Use cases:** OLTP and high-performance relational databases, NoSQL databases such as Cassandra and MongoDB, and search scenarios that use solutions such as Elasticsearch.
    
-   **Compute:**
    
    -   Powered by 2.7 GHz Intel Xeon Scalable (Ice Lake) processors with an all-core turbo frequency of 3.5 GHz.
        
-   **Storage:**
    
    -   All instances are I/O optimized.
        
    -   Supports [Enterprise SSDs (ESSDs)](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network:**
    
    -   Supports IPv4 and IPv6. For more information, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Supports eRDMA. For more information, see [Enable eRDMA on an enterprise-level instance](/help/en/ecs/user-guide/configure-erdma-on-a-cpu-instance).
        
    -   Network performance scales with instance type. Larger instance types provide higher network performance.
        
-   **OS compatibility:** Compatible with specific operating systems. For more information, see [Compatibility between the i4 instance types and operating systems](/help/en/ecs/compatibility-between-i4-instance-types-with-operating-systems).
    

### i4 instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Local storage**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.i4.large

2

16

1 × 479 GB (1 × 447 GiB)

2.5/15

900,000

20,000/up to 110,000

1.5/6

ecs.i4.xlarge

4

32

1 × 959 GB (1 × 894 GiB)

4/15

1,000,000

40,000/up to 110,000

2/6

ecs.i4.2xlarge

8

64

1 × 1,919 GB (1 × 1,788 GiB)

6/15

1,600,000

50,000/up to 110,000

3/6

ecs.i4.4xlarge

16

128

1 × 3,839 GB (1 × 3,576 GiB)

10/25

3,000,000

80,000/up to 110,000

5/6

ecs.i4.8xlarge

32

256

2 × 3,839 GB (2 × 3,576 GiB)

25/None

6,000,000

150,000/None

8/None

ecs.i4.16xlarge

64

512

4 × 3,839 GB (4 × 3,576 GiB)

50/None

12,000,000

300,000/None

16/None

ecs.i4.32xlarge

128

1,024

8 × 3,839 GB (8 × 3,576 GiB)

100/None

24,000,000

600,000/None

32/None

## i4g, instance family with local SSDs

This instance family provides high-performance local NVMe SSDs with high IOPS, high throughput, and low latency.

-   **Use cases:** OLTP and high-performance relational databases, E-MapReduce big data scenarios such as tiering of hot and cold data, storage-compute separation, and data lakes, and search scenarios that use solutions such as Elasticsearch.
    
-   **Compute:**
    
    -   vCPU-to-memory ratio of 1:4, designed for high-performance databases.
        
    -   Powered by 2.7 GHz Intel Xeon Scalable (Ice Lake) processors with an all-core turbo frequency of 3.5 GHz.
        
-   **Storage:**
    
    -   All instances are I/O optimized.
        
    -   Supports [Enterprise SSDs (ESSDs)](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network:**
    
    -   Supports IPv4 and IPv6. For more information, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Network performance scales with instance type. Larger instance types provide higher network performance.
        

**Note**

This instance family supports only Linux images. Select a Linux image when creating an instance.

### i4g instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Local storage**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.i4g.4xlarge

16

64

1 × 959 GB (1 × 894 GiB)

8/25

3,000,000

100,000

6

ecs.i4g.8xlarge

32

128

1 × 1,919 GB (1 × 1,788 GiB)

16/25

6,000,000

150,000

8

ecs.i4g.16xlarge

64

256

2 × 1,919 GB (2 × 1,788 GiB)

32/None

12,000,000

300,000

16

ecs.i4g.32xlarge

128

512

4 × 1,919 GB (4 × 1,788 GiB)

64/None

24,000,000

600,000

32

## i4r, instance family with local SSDs

This instance family provides high-performance local NVMe SSDs with high IOPS, high throughput, and low latency.

-   **Use cases:** OLTP and high-performance relational databases, NoSQL databases such as Cassandra and MongoDB, and search scenarios that use solutions such as Elasticsearch.
    
-   **Compute:**
    
    -   vCPU-to-memory ratio of 1:8, designed for high-performance databases. This instance family is the most cost-effective option for scenarios such as hot data tiering and data lakes.
        
    -   Powered by 2.7 GHz Intel Xeon Scalable (Ice Lake) processors with an all-core turbo frequency of 3.5 GHz.
        
-   **Storage:**
    
    -   All instances are I/O optimized.
        
    -   Supports [Enterprise SSDs (ESSDs)](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network:**
    
    -   Supports IPv4 and IPv6. For more information, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Network performance scales with instance type. Larger instance types provide higher network performance.
        

### i4r instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Local storage**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.i4r.4xlarge

16

128

1 × 959 GB (1 × 894 GiB)

8/25

3,000,000

100,000

6

ecs.i4r.8xlarge

32

256

1 × 1,919 GB (1 × 1,788 GiB)

16/25

6,000,000

150,000

8

ecs.i4r.16xlarge

64

512

2 × 1,919 GB (2 × 1,788 GiB)

32/None

12,000,000

300,000

16

ecs.i4r.32xlarge

128

1,024

4 × 1,919 GB (4 × 1,788 GiB)

64/None

24,000,000

600,000

32

## i4p, performance-enhanced instance family with local SSDs

This instance family uses Intel Second-generation Optane persistent memory (BPS) to provide ultra-high-performance local disks. For information about how to initialize local disks, see the [Configure persistent memory as a local disk](/help/en/ecs/user-guide/configure-the-usage-mode-of-persistent-memory) section of the "Configure the usage mode of persistent memory" topic.

-   **Use cases:**
    
    -   Gene sequencing applications. For more information, see [Case description](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20220706/misz/客户案例-寻因生物.pdf).
        
    -   On-disk key-value (KV) databases such as RocksDB and ClickHouse.
        
    -   OLTP and high-performance relational databases for write-ahead log (WAL) optimization.
        
    -   NoSQL databases such as Cassandra, MongoDB, and HBase.
        
    -   Search scenarios that use solutions such as Elasticsearch.
        
    -   Other I/O-intensive applications that frequently write data to disks, such as message middleware and containers.
        
-   **Compute:**
    
    -   vCPU-to-memory ratio of 1:4.
        
    -   Powered by third-generation Intel Xeon Scalable (Ice Lake) processors with a base frequency of 2.7 GHz and an all-core turbo frequency of 3.2 GHz.
        
-   **Storage:**
    
    -   All instances are I/O optimized.
        
    -   Supports [Enterprise SSDs (ESSDs)](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network:**
    
    -   Supports IPv4 and IPv6. For more information, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Network performance scales with instance type. Larger instance types provide higher network performance.
        

### i4p instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Persistent memory (GiB)**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Disk baseline/burst IOPS**

**Disk baseline/burst bandwidth (Gbit/s)**

ecs.i4p.2xlarge

8

32

1 × 126

5/10

1,600,000

50,000/up to 110,000

3/6

ecs.i4p.4xlarge

16

64

2 × 126

10/25

3,000,000

80,000/up to 110,000

5/6

ecs.i4p.6xlarge

24

96

3 × 126

12/25

4,500,000

110,000/None

6/None

ecs.i4p.8xlarge

32

128

4 × 126

16/25

6,000,000

150,000/None

8/None

ecs.i4p.16xlarge

64

256

1 × 1,008

32/None

12,000,000

300,000/None

16/None

ecs.i4p.32xlarge

128

512

2 × 1,008

64/None

24,000,000

600,000/None

32/None

## i3g, instance family with local SSDs

This instance family provides high-performance local NVMe SSDs with high IOPS, high throughput, and low latency.

-   **Use cases:** OLTP and high-performance relational databases, NoSQL databases such as Cassandra, MongoDB, and HBase, and search scenarios that use solutions such as Elasticsearch.
    
-   **Compute:**
    
    -   vCPU-to-memory ratio of 1:4, designed for high-performance databases.
        
    -   Powered by 2.5 GHz Intel Xeon Platinum 8269CY (Cascade Lake) processors with a turbo frequency of 3.2 GHz.
        
-   **Storage:**
    
    -   All instances are I/O optimized.
        
    -   Supports [Enterprise SSDs (ESSDs)](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks). For more information, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network:**
    
    -   Supports IPv4 and IPv6. For more information, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Network performance scales with instance type. Larger instance types provide higher network performance.
        

**Note**

This instance family supports only Linux images. Select a Linux image when creating an instance.

### i3g instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Local storage**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.i3g.2xlarge

8

32

1 × 479 GB (1 × 447 GiB)

3/10

1,750,000

52,500

2

ecs.i3g.4xlarge

16

64

1 × 959 GB (1 × 894 GiB)

5/10

3,500,000

84,000

3

ecs.i3g.8xlarge

32

128

2 × 959 GB (2 × 894 GiB)

12/None

7,000,000

157,500

5

ecs.i3g.13xlarge

52

192

3 × 959 GB (3 × 894 GiB)

16/None

12,000,000

252,000

8

ecs.i3g.26xlarge

104

384

6 × 959 GB (6 × 894 GiB)

32/None

24,000,000

500,000

16

## i3, instance family with local SSDs

This instance family provides high-performance local NVMe SSDs with high IOPS, high throughput, and low latency. It also allows damaged disks to be isolated online.

-   **Use cases:** OLTP and high-performance relational databases, NoSQL databases such as Cassandra and MongoDB, and search scenarios that use solutions such as Elasticsearch.
    
-   **Compute:**
    
    -   Powered by 2.5 GHz Intel Xeon Platinum 8269CY (Cascade Lake) processors with a turbo frequency of 3.2 GHz.
        
-   **Storage:**
    
    -   All instances are I/O optimized.
        
    -   Supports [Enterprise SSDs (ESSDs)](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks), standard SSDs, and ultra disks. For more information, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
        
-   **Network:**
    
    -   Supports IPv4 and IPv6. For more information, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Network performance scales with instance type. Larger instance types provide higher network performance.
        

**Note**

This instance family supports only Linux images. Select a Linux image when creating an instance.

### i3 instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Local storage**

**Network baseline/burst bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Disk baseline IOPS**

**Disk baseline bandwidth (Gbit/s)**

ecs.i3.xlarge

4

32

1 × 959 GB (1 × 894 GiB)

1.5/10

1,000,000

40,000

1.5

ecs.i3.2xlarge

8

64

1 × 1,919 GB (1 × 1,788 GiB)

2.5/10

1,600,000

50,000

2

ecs.i3.4xlarge

16

128

2 × 1,919 GB (2 × 1,788 GiB)

5/10

3,000,000

80,000

3

ecs.i3.8xlarge

32

256

4 × 1,919 GB (4 × 1,788 GiB)

10/None

6,000,000

150,000

5

ecs.i3.13xlarge

52

384

6 × 1,919 GB (6 × 1,788 GiB)

16/None

9,000,000

240,000

8

ecs.i3.26xlarge

104

768

12 × 1,919 GB (12 × 1,788 GiB)

32/None

24,000,000

480,000

16

## i2, instance family with local SSDs

This instance family provides high-performance local NVMe SSDs with high IOPS, high throughput, and low latency.

-   **Use cases:** OLTP and high-performance relational databases, NoSQL databases such as Cassandra, MongoDB, and HBase, and search scenarios that use solutions such as Elasticsearch.
    
-   **Compute:**
    
    -   vCPU-to-memory ratio of 1:8, designed for high-performance databases.
        
    -   Powered by 2.5 GHz Intel Xeon Platinum 8163 (Skylake) processors.
        
-   **Storage:**
    
    -   All instances are I/O optimized.
        
    -   Supports standard SSDs and ultra disks.
        
-   **Network:**
    
    -   Supports IPv4 and IPv6. For more information, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Network performance scales with instance type. Larger instance types provide higher network performance.
        

### i2 instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Local storage**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Disk bandwidth (Gbit/s)**

ecs.i2.xlarge

4

32

1 × 959 GB (1 × 894 GiB)

1

500,000

Up to 16

ecs.i2.2xlarge

8

64

1 × 1,919 GB (1 × 1,788 GiB)

2

1,000,000

Up to 16

ecs.i2.4xlarge

16

128

2 × 1,919 GB (2 × 1,788 GiB)

3

1,500,000

Up to 16

ecs.i2.8xlarge

32

256

4 × 1,919 GB (4 × 1,788 GiB)

6

2,000,000

Up to 16

ecs.i2.16xlarge

64

512

8 × 1,919 GB (8 × 1,788 GiB)

10

4,000,000

Up to 16

## i2g, instance family with local SSDs

This instance family provides high-performance local NVMe SSDs with high IOPS, high throughput, and low latency.

-   **Use cases:** OLTP and high-performance relational databases, NoSQL databases such as Cassandra, MongoDB, and HBase, and search scenarios that use solutions such as Elasticsearch.
    
-   **Compute:**
    
    -   vCPU-to-memory ratio of 1:4, designed for high-performance databases.
        
    -   Powered by 2.5 GHz Intel Xeon Platinum 8163 (Skylake) processors.
        
-   **Storage:**
    
    -   All instances are I/O optimized.
        
    -   Supports standard SSDs and ultra disks.
        
-   **Network:**
    
    -   Supports only IPv4.
        
    -   Network performance scales with instance type. Larger instance types provide higher network performance.
        

### i2g instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Local storage**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

ecs.i2g.2xlarge

8

32

1 × 959 GB (1 × 894 GiB)

2

1,000,000

ecs.i2g.4xlarge

16

64

1 × 1,919 GB (1 × 1,788 GiB)

3

1,500,000

ecs.i2g.8xlarge

32

128

2 × 1,919 GB (2 × 1,788 GiB)

6

2,000,000

ecs.i2g.16xlarge

64

256

4 × 1,919 GB (4 × 1,788 GiB)

10

4,000,000

## i2ne, instance family with local SSDs

This instance family provides high-performance local NVMe SSDs with high IOPS, high throughput, and low latency.

-   **Use cases:** OLTP and high-performance relational databases, NoSQL databases such as Cassandra, MongoDB, and HBase, and search scenarios that use solutions such as Elasticsearch.
    
-   **Compute:**
    
    -   vCPU-to-memory ratio of 1:8, designed for high-performance databases.
        
    -   Powered by 2.5 GHz Intel Xeon Platinum 8163 (Skylake) processors.
        
-   **Storage:**
    
    -   All instances are I/O optimized.
        
    -   Supports standard SSDs and ultra disks.
        
-   **Network:**
    
    -   Supports IPv4 and IPv6. For more information, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Network performance scales with instance type. Larger instance types provide higher network performance.
        
    -   Provides a network bandwidth of up to 20 Gbit/s.
        

### i2ne instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Local storage**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

**Disk bandwidth (Gbit/s)**

ecs.i2ne.xlarge

4

32

1 × 959 GB (1 × 894 GiB)

1.5

500,000

Up to 16

ecs.i2ne.2xlarge

8

64

1 × 1,919 GB (1 × 1,788 GiB)

2.5

1,000,000

Up to 16

ecs.i2ne.4xlarge

16

128

2 × 1,919 GB (2 × 1,788 GiB)

5

1,500,000

Up to 16

ecs.i2ne.8xlarge

32

256

4 × 1,919 GB (4 × 1,788 GiB)

10

2,000,000

Up to 16

ecs.i2ne.16xlarge

64

512

8 × 1,919 GB (8 × 1,788 GiB)

20

4,000,000

Up to 16

ecs.i2ne.20xlarge

80

704

10 × 1,919 GB (10 × 1,788 GiB)

25

4,500,000

Up to 16

## i2gne, instance family with local SSDs

This instance family provides high-performance local NVMe SSDs with high IOPS, high throughput, and low latency.

-   **Use cases:** OLTP and high-performance relational databases, NoSQL databases such as Cassandra, MongoDB, and HBase, and search scenarios that use solutions such as Elasticsearch.
    
-   **Compute:**
    
    -   vCPU-to-memory ratio of 1:4, designed for high-performance databases.
        
    -   Powered by 2.5 GHz Intel Xeon Platinum 8163 (Skylake) processors.
        
-   **Storage:**
    
    -   All instances are I/O optimized.
        
    -   Supports standard SSDs and ultra disks.
        
-   **Network:**
    
    -   Supports IPv4 and IPv6. For more information, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).
        
    -   Network performance scales with instance type. Larger instance types provide higher network performance.
        
    -   Provides a network bandwidth of up to 20 Gbit/s.
        

### i2gne instance types

**Instance type**

**vCPU**

**Memory (GiB)**

**Local storage**

**Network baseline bandwidth (Gbit/s)**

**Packet forwarding rate (pps)**

ecs.i2gne.2xlarge

8

32

1 × 959 GB (1 × 894 GiB)

2.5

1,000,000

ecs.i2gne.4xlarge

16

64

1 × 1,919 GB (1 × 1,788 GiB)

5

1,500,000

ecs.i2gne.8xlarge

32

128

2 × 1,919 GB (2 × 1,788 GiB)

10

2,000,000

ecs.i2gne.16xlarge

64

256

4 × 1,919 GB (4 × 1,788 GiB)

20

4,000,000
