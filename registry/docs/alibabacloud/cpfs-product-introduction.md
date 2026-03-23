This topic introduces the editions of Cloud Parallel File Storage (CPFS), compares them, and helps you get started.

## **Introduction to CPFS**

CPFS is a fully managed and scalable parallel file system from Alibaba Cloud. It is designed for high-performance computing (HPC) workloads. CPFS provides a unified namespace that allows hundreds or even thousands of compute nodes to access data concurrently. It delivers tens of GB/s in throughput and millions of IOPS, all with sub-millisecond latency.

## CPFS editions

CPFS is available in the following editions:

-   CPFS General-purpose Edition: Ideal for HPC workloads such as AI training, autonomous driving, genomics, film and television rendering, EDA simulation, oil and gas exploration, and meteorological analysis. This edition is optimized for high throughput, high IOPS, and handling massive numbers of files.
    
-   CPFS for Lingjun: Designed for intelligent computing scenarios such as AIGC and autonomous driving.
    
    This edition can only be used with Lingjun resources, general computing resources of PAI, Lingjun resources of the single-tenant version, and Container Compute Service (ACS). It does not support access from ECS instances.
    

## Differences between CPFS for Lingjun and CPFS General-purpose Edition

The following table details the differences between CPFS for Lingjun and the CPFS General-purpose Edition.

**Category**

**Comparison criteria**

**CPFS for Lingjun (invitational preview)**

**CPFS General-purpose Edition**

Positioning

Target customers

Intelligent computing workloads

HPC workloads

Product features

Ultra-high throughput and IOPS with an end-to-end RDMA network

High throughput and IOPS

Purchase method

Requires whitelisting for purchase on the Alibaba Cloud console.

Available for purchase on the Alibaba Cloud console.

Purchase

Available specifications

-   400 MB/s/TiB Baseline
    

-   100 MB/s/TiB Baseline
    
-   200 MB/s/TiB Baseline
    

Usage

Protocol

POSIX

Interoperability between POSIX and NFS v3 protocols

Client

Linux

Linux

Region

-   China (Hangzhou)
    
-   China (Shanghai)
    
-   China (Shenzhen)
    
-   China (Guangzhou)
    
-   China (Beijing)
    
-   China (Ulanqab)
    
-   China (Hong Kong)
    
-   Singapore
    
-   Germany (Frankfurt)
    
-   Thailand (Bangkok)
    
-   Malaysia (Kuala Lumpur)
    
-   Dubai
    

-   China (Hangzhou)
    
-   China (Shanghai)
    
-   China (Beijing)
    

Capacity specifications

-   Starting capacity: 10 TiB
    
-   Maximum capacity: 1 PiB
    

To create a file system up to 20 PiB, [submit a ticket](https://smartservice.console.alibabacloud.com/service/create-ticket-intl?activeTab=1).

-   Starting capacity: 3,600 GiB
    
-   Maximum capacity: 1 PiB
    

Performance

Throughput

-   Read throughput: min{400 \* Capacity (TiB), 400,000} MB/s
    
-   Write throughput: min{200 \* Capacity (TiB), 200,000} MB/s
    

To increase throughput to 2 TB/s, [submit a ticket](https://smartservice.console.alibabacloud.com/service/create-ticket).

-   100 MB/s/TiB Baseline: min{0.1 \* Capacity (GiB), 30,000} MB/s
    
-   200 MB/s/TiB Baseline: min{0.2 \* Capacity (GiB), 45,000} MB/s
    
    To increase throughput to 100,000 MB/s, [submit a ticket](https://smartservice.console.alibabacloud.com/service/create-ticket).
    

IOPS

-   Read IOPS: min{6,800 \* Capacity (TiB), 6,800,000}
    
-   Write IOPS: min{2,300 \* Capacity (TiB), 2,300,000}
    

To increase IOPS to 30,000,000, [submit a ticket](https://smartservice.console.alibabacloud.com/service/create-ticket).

-   100 MB/s/TiB Baseline: min{15 \* Capacity (GiB), 3,600,000}
    
-   200 MB/s/TiB Baseline: min{30 \* Capacity (GiB), 7,200,000}
    
    To increase IOPS to 10,000,000, [submit a ticket](https://smartservice.console.alibabacloud.com/service/create-ticket).
    

Average latency for a single 4 KB read

0.25 ms

-   100 MB/s/TiB Baseline: 0.6 ms
    
-   200 MB/s/TiB Baseline: 0.4 ms
    

Average latency for a single 4 KB write

0.6 ms

-   100 MB/s/TiB Baseline: 0.8 ms
    
-   200 MB/s/TiB Baseline: 0.6 ms
    

Elasticity

Elastic scale-out

Supported

Supported

Elastic scale-in

Not supported

Not supported

Scaling method

Manual

Manual

Scaling step size

10 TiB

1,200 GiB

Security

ACL-based access control

Not supported

Supported

Server-side encryption

Not supported

Supported

Encryption in transit

Not supported

Supported

Stability

Subdirectory mounting

Not supported

Supported

Dataflow

Supported

Supported

Backup

Supported

Supported

Locally redundant storage

Supported

Supported

Zone-redundant storage

Not supported

Supported only for the 100 MB/s/TiB Baseline

Cost

Billing method

Pay-as-you-go

Pay-as-you-go

## Get started with CPFS

**Action**

**CPFS for Lingjun (invitational preview)**

**CPFS General-purpose Edition**

Learn about CPFS

-   [What is CPFS for Lingjun (invitational preview)?](/help/en/cpfs/bmcpfs/product-overview/what-is-cpfs-for-lingjun)
    
-   [Specifications](/help/en/cpfs/bmcpfs/product-overview/product-specifications)
    
-   [Limits](/help/en/cpfs/bmcpfs/product-overview/limit-bmcpfs)
    
-   [Billing](/help/en/cpfs/bmcpfs/product-overview/billing-description)
    

-   [What is CPFS General-purpose Edition?](/help/en/cpfs/what-is-cpfs)
    
-   [Specifications](/help/en/cpfs/cpfsonecs/product-overview/product-specifications)
    
-   [Limits](/help/en/cpfs/cpfsonecs/product-overview/limits-1)
    
-   [CPFS billing](/help/en/cpfs/cpfsonecs/product-overview/billable-items)
    

Activate CPFS

[Create a file system](/help/en/cpfs/bmcpfs/user-guide/create-a-file-system)

[Create a file system](/help/en/cpfs/cpfsonecs/user-guide/create-a-cpfs-file-system-1)

Mount a CPFS file system

-   [Mount a CPFS for Lingjun file system in PAI](/help/en/cpfs/bmcpfs/user-guide/mount-cpfs-for-lingjun-on-pai)
    
-   [Mount a CPFS for Lingjun file system in ACS](/help/en/cpfs/bmcpfs/user-guide/acs-mount-cpfs-smart-computing-version-file-system)
    

-   [Mount a CPFS file system on an ECS instance](/help/en/cpfs/cpfsonecs/user-guide/mount-a-cpfs-file-system-on-an-ecs-instance/)
    
-   [Mount a CPFS file system by using a container](/help/en/cpfs/cpfsonecs/user-guide/use-a-container-to-mount-a-cpfs-file-system/)
    

Use CPFS

Query file system details

[Query file system details](/help/en/cpfs/bmcpfs/user-guide/querying-file-system-details)

[Query file system details](/help/en/cpfs/cpfsonecs/user-guide/view-the-details-of-a-file-system)

Scale out a file system

[Scale out a file system](/help/en/cpfs/bmcpfs/user-guide/expansion-of-file-system-bmcpfs)

[Scale out a file system](/help/en/cpfs/cpfsonecs/user-guide/scale-up-a-file-system)

Protocol service

Not supported

[Protocol service](/help/en/cpfs/cpfsonecs/user-guide/protocol-service-overview/)

Dataflow

[CPFS for Lingjun dataflow (invitational preview)](/help/en/cpfs/bmcpfs/user-guide/cpfs-for-lingjun-data-flow-overview/)

[Dataflow overview](/help/en/cpfs/cpfsonecs/user-guide/data-flow-overview/)

Monitoring and alerts

[Data monitoring](/help/en/cpfs/data-monitoring-1)

[Overview](/help/en/cpfs/cpfsonecs/user-guide/cpfs-monitoring-overview/)

Access control

Not supported

[Access control](/help/en/cpfs/cpfsonecs/user-guide/access-control/)

Log management

[Log management](/help/en/cpfs/bmcpfs/user-guide/precautions-for-use/)

Not supported

Data backup

[Data backup](/help/en/cpfs/bmcpfs/user-guide/cpfs-for-lingjun-data-backup/)

[Data backup](/help/en/cpfs/cpfs-data-backup/)

Zone-redundant storage

Not supported

[Storage redundancy](/help/en/cpfs/cpfsonecs/user-guide/storage-redundancy)

Call the API

[List of operations by function](/help/en/cpfs/bmcpfs/developer-reference/api-nas-2017-06-26-overview-bmcpfs)

[List of operations by function](/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-overview-cpfs)
