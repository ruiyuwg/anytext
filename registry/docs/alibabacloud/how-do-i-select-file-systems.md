Select the right Alibaba Cloud file storage service based on your workload requirements for performance, security, capacity, and cost.

## Selection overview

Consider the following key factors when selecting an Alibaba Cloud file storage service:

-   Performance
    
    -   For workloads with a high volume of read and write requests and low-latency requirements, select an Extreme NAS file system.
        
    -   If your application processes many files and requires high throughput, select a CPFS for Lingjun file system.
        
-   Security and stability
    
    -   For data that requires high stability, access control, and data encryption, select a General-purpose NAS file system.
        
    -   For data that requires backups, select a General-purpose NAS file system or an Extreme NAS file system.
        
-   Capacity and scalability
    
    -   For data that requires a large storage capacity, select a General-purpose capacity NAS file system.
        
    -   For workloads that require frequent elastic scale-out and scale-in, select a General-purpose NAS file system.
        

Prices vary based on the file system type and specifications. Select a file storage service that meets your needs and budget to avoid wasting resources or exceeding your budget.

**Important**

The storage class of a file system cannot be changed after creation. For more information about file system limits, see [Limits for File Storage NAS](/help/en/nas/product-overview/limits#concept-2371449) .

## File system selection

**Selection reference**

**General-purpose NAS**

**Extreme NAS**

**CPFS**

**CPFS for Lingjun**

**Storage-optimized**

**Advanced**

**Performance**

**100 MB/s**

**200 MB/s**

**400 MB/s**

Scenarios

Cost-sensitive file sharing workloads that have low requirements for response latency, such as database backups, log storage, Windows user directories, and Linux home directories.

Latency-sensitive file sharing workloads that require low response latency, such as data persistence for containers, AI training data storage, industrial simulation, and genetic computing.

Latency-sensitive file sharing workloads that require low response latency, such as Linux or Windows enterprise applications, container PersistentVolumes (PVs), web content management, and genetic computing.

Latency-sensitive Linux enterprise applications, CI/CD staging environments, high-performance web services, online education services, and online game services.

I/O-intensive workloads that require high throughput, high IOPS, and massive numbers of files. Examples include HPC, AI training, autonomous driving, genetic computing, film and television rendering, EDA simulation, oil and gas exploration, and weather analysis.

Intelligent computing scenarios such as AIGC and autonomous driving. Compatible with Container Compute Service (ACS), PAI Lingjun resources, PAI general computing resources, and PAI Lingjun resources (single-tenant) only. Access from ECS instances is not supported.

Features

Protocols and clients

-   Protocols: NFS, SMB
    
-   Clients: Linux, Windows
    

-   Protocols: NFS, SMB
    
-   Clients: Linux, Windows
    

-   Protocols: NFS, SMB
    
-   Clients: Linux, Windows
    

-   Protocol: NFS
    
-   Client: Linux
    

-   Protocols: POSIX, NFS
    
-   Client: Linux
    

-   Protocols: POSIX, NFS
    
-   Client: Linux
    

-   Protocol: POSIX
    
-   Client: Linux
    

Storage capacity

0 to 10 PiB

0 to 1 PiB

0 to 1 PiB

100 GiB to 256 TiB

3.6 TiB to 1 PiB

3.6 TiB to 1 PiB

10 TiB to 1 PiB

Maximum number of files

1 billion

1 billion

1 billion

500 million

-   Versions earlier than CPFS 2.3.0: 1.4 billion
    
-   CPFS 2.3.0 and later: 4 billion
    

-   Versions earlier than CPFS 2.3.0: 1.4 billion
    
-   CPFS 2.3.0 and later: 4 billion
    

10 billion

Performance

Average 4 KB single-stream read latency

10 ms

2 ms

2 ms

-   Standard: 1.2 ms
    
-   Advanced: 0.3 ms
    

0.6 ms

0.4 ms

0.25 ms

Average 4 KB single-stream write latency

10 ms

2 ms

2 ms

-   Standard: 1.2 ms
    
-   Advanced: 0.3 ms
    

0.8 ms

0.6 ms

0.6 ms

Throughput (peak)

-   Initial read/write throughput: 150 MB/s
    
-   Throughput growth rate: 0.15 MB/s per GiB
    
-   Read limit: 10 GB/s
    
-   Write limit: 5 GB/s
    

-   Initial read/write throughput: 300 MB/s
    
-   Throughput growth rate: 0.3 MB/s per GiB
    
-   Read limit: 20 GB/s
    
-   Write limit: 5 GB/s
    

-   Initial read/write throughput: 600 MB/s
    
-   Throughput growth rate: 0.6 MB/s per GiB
    
-   Read limit: 20 GB/s
    
-   Write limit: 5 GB/s
    

-   Standard: Read + Write 1.2 GB/s
    
-   Advanced: Read + Write 4 GB/s
    

Read + Write 20 GB/s

To increase the throughput capacity, [submit a ticket](https://smartservice.console.alibabacloud.com/service/create-ticket).

-   Read limit: 400 GB/s
    
    Up to 2 TB/s. To increase the read throughput capacity, [submit a ticket](https://smartservice.console.alibabacloud.com/service/create-ticket-intl?activeTab=1).
    
-   Write limit: 200 GB/s
    

Maximum IOPS

15,000

30,000

30,000

200,000

1,500,000

2,800,000

-   Read: 6,800,000
    
    Up to 30,000,000. To increase the read IOPS, [submit a ticket](https://smartservice.console.alibabacloud.com/service/create-ticket-intl?activeTab=1).
    
-   Write: 2,300,000
    

Scalability

Scale-in

Supported

Supported

Supported

Not supported

Not supported

Not supported

Not supported

Scale-out

Supported

Supported

Supported

Supported

Supported

Supported

Supported

Scaling method

Automatic scaling

Automatic scaling

Automatic scaling

Manual scaling

Manual scaling

Manual scaling

Manual scaling

Scaling step size

4 KiB

4 KiB

4 KiB

1 GiB

-   China (Ulanqab): 2,400 GiB
    
-   Other regions: 1,200 GiB
    

10 TiB

Maximum file system size: 5 PiB. To request a larger capacity, [submit a ticket](https://smartservice.console.alibabacloud.com/service/create-ticket-intl?activeTab=1).

Security

Server-side encryption

Supported

Supported

Supported

Supported

Supported

Supported

Not supported

Encryption in transit

Supported

Supported

Supported

Not supported

Supported

Supported

Not supported

AD domain control (SMB)

Supported

Supported

Supported

Not supported

Not supported

Not supported

Not supported

ACL-based access control

Supported

Supported

Supported

Not supported

Supported

Supported

Not supported

Stability

Quotas

NFS

Supported

Supported

Supported

Not supported

Not supported

Not supported

Not supported

SMB

Supported

Supported

Supported

Subdirectory mounting

NFS

Supported

Supported

Supported

Not supported

Supported

Supported

Not supported

SMB

Not supported

Not supported

Not supported

Not supported

Not supported

Not supported

Recycle bin

Supported

Supported

Supported

Not supported

Not supported

Not supported

Not supported

Lifecycle management

Supported

Supported

Supported

Not supported

Not supported

Not supported

Not supported

Backups

Supported

Supported

Supported

Supported

Supported

Supported

Supported

Snapshots

Not supported

Not supported

Not supported

-   Standard: Not supported
    
-   Advanced: Supported
    

Not supported

Not supported

Not supported

Locally redundant storage

Supported

Supported

Supported

Supported

Supported

Supported

Supported

Zone-redundant storage (Multi-AZ)

Not supported

Not supported

Not supported

Not supported

Supported

Not supported

Not supported

Cost

Pay-as-you-go (USD/GiB/month)

0.06

0.13

0.30

-   Standard: 0.30
    
-   Advanced: 0.30
    

0.83

1.4

0.244

Resource plans

Supported

Supported

Supported

Supported

Supported

Supported

Not supported

SCU

Supported

Not supported

Supported

Not supported

Not supported

Not supported

Not supported

Storage plans

New purchases not supported

Not supported

New purchases not supported

Not supported

Not supported

Not supported

Not supported

Subscription

Not supported

Not supported

Not supported

New purchases not supported

New purchases not supported

New purchases not supported

Not supported

**Note**

The pay-as-you-go prices in the preceding table are for reference only and reflect the pricing in Chinese mainland regions as of July 18, 2024. Actual prices in the Chinese mainland and other regions are subject to the latest prices on the official pricing pages. For more information about NAS file system billing, see [NAS Pricing](https://www.alibabacloud.com/product/nas/pricing?_p_lc=1&spm=a2796.7960336.8215766810.3.3555b91annQzii#table_payg-0). For more information about CPFS file system billing, see [CPFS Pricing](https://www.alibabacloud.com/zh/product/cpfs/pricing?_p_lc=1&spm=a2796.7960336.8215766810.4.6b62b91awmUIko).
