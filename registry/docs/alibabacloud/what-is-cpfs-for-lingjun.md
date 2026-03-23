CPFS for Lingjun is Alibaba Cloud's high-performance parallel file system built for AI workloads. It delivers up to 2 TB/s throughput and sub-millisecond latency through RDMA networking and tiered caching.

> This product is currently in Invitational Preview.

## Why CPFS for Lingjun

AI workloads like large model training, AIGC, and autonomous driving demand extreme I/O performance. CPFS for Lingjun meets these requirements:

**Capability**

**Specification**

Throughput

Up to 2 TB/s (single file system)

IOPS

Up to 30 million

Latency

Sub-millisecond, consistent

File capacity

Up to 10 billion files

Metadata OPS

Over 100,000 per second

OSS integration

Up to 100 GB/s when combined with OSS

**Cost optimization**: Tiered data flow with OSS reduces storage costs.

**Data protection**: Supports log audit and Cloud Backup.

For detailed specifications, see [Product specifications](/help/en/cpfs/bmcpfs/product-overview/product-specifications).

## CPFS for Lingjun vs. General-Purpose edition

**Item**

**CPFS for Lingjun**

**General-Purpose edition**

Max throughput

2 TB/s

100 GB/s

Max IOPS

30 million

10 million

Mount targets

PAI, ACS

PAI, ACS, ECS

Protocols

POSIX

POSIX, NFS v3

For a complete comparison, see [CPFS product introduction](/help/en/cpfs/cpfs-product-introduction).

## Supported compute resources

CPFS for Lingjun works with:

-   PAI Lingjun resources
    
-   PAI general computing resources
    
-   PAI Lingjun resources (single-tenant edition)
    
-   Container Compute Service (ACS)
    

> ECS instances created in the ECS console cannot mount CPFS for Lingjun.

For other limits, see [Limits](/help/en/cpfs/bmcpfs/product-overview/limit-bmcpfs).

## Available regions

China (Hangzhou), China (Shanghai), China (Shenzhen), China (Guangzhou), China (Beijing), China (Ulanqab), China (Hong Kong), Singapore, Germany (Frankfurt), Thailand (Bangkok), Malaysia (Kuala Lumpur), Dubai

## Billing

-   No charges until you create a file system.
    
-   To stop billing, release the file system. Data is permanently deleted.
    
-   See [Billing overview](/help/en/cpfs/bmcpfs/product-overview/product-billing/) for details.
    

## Next steps

**Task**

**Link**

View specifications

[Product specifications](/help/en/cpfs/bmcpfs/product-overview/product-specifications)

Check limits

[Limits](/help/en/cpfs/bmcpfs/product-overview/limit-bmcpfs)

Create a file system

[Create a file system](/help/en/cpfs/bmcpfs/user-guide/create-a-file-system)

Mount from PAI

[Mount in PAI](docs/cpfs-lingjun-mount-pai)

Mount from ACS

[Mount in ACS](docs/cpfs-lingjun-mount-acs)
