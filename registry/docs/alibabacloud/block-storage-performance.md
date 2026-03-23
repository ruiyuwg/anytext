Block Storage products offer various performance levels and prices. To meet your storage needs, choose the product that best fits your workload and application. This topic describes the performance metrics and specifications for cloud disks, local disks, and elastic ephemeral disks.

**Note**

-   For information about the pricing and billing of different Block Storage products, see [Block Storage billing](/help/en/ecs/block-storage-devices).
    
-   To learn about the features and scenarios of different Block Storage products, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).
    

## Performance metrics

The main performance metrics for Block Storage products include input/output operations per second (IOPS), throughput, and latency. The performance of some Block Storage products is related to their capacity. For example, ESSDs with different performance levels require different capacity ranges.

-   I/O size
    
    I/O size is the amount of data in each read or write operation, such as 4 KiB. It is related to the IOPS and throughput metrics according to the following formula: IOPS × I/O size = Throughput. Therefore, the performance metric you should focus on varies depending on the I/O size of your application.
    
-   IOPS: The number of I/O operations that can be processed per second. It measures the read and write capability of a block storage device. The unit is operations per second.
    
    If your application's I/O pattern involves latency-sensitive random small I/O, such as database applications, focus on IOPS performance.
    
    **Note**
    
    In database applications, data insert, update, and delete operations are frequent. High IOPS ensures that the system runs efficiently even when handling numerous random read and write operations. This prevents performance degradation or increased latency caused by I/O bottlenecks.
    
    Common IOPS metrics
    
    **Metric**
    
    **Description**
    
    **Data access method**
    
    Total IOPS
    
    The total number of I/O operations performed per second.
    
    Discontinuous and continuous access to storage locations on the disk.
    
    Random read IOPS
    
    The average number of random read I/O operations performed per second.
    
    Discontinuous access to storage locations on the disk.
    
    Random write IOPS
    
    The average number of random write I/O operations performed per second.
    
    Sequential read IOPS
    
    The average number of sequential read I/O operations performed per second.
    
    Continuous access to storage locations on the disk.
    
    Sequential write IOPS
    
    The average number of sequential write I/O operations performed per second.
    
-   Throughput: The amount of data that can be successfully transferred per unit of time. The unit is MB/s.
    
    If your application's I/O pattern involves many sequential reads and writes with large I/O sizes, such as database applications, focus on throughput.
    
    **Note**
    
    Offline computing services such as Hadoop involve analyzing and processing petabytes of data. If the system has low throughput, the overall processing time is significantly increased, which affects business efficiency and response time.
    
-   Latency: The time required for a block storage device to process an I/O operation. The unit is s, ms, or μs. High latency can cause application performance degradation or errors.
    
    If your application is sensitive to high latency, such as a database application, focus on latency. Use low-latency products such as ESSD AutoPL disks or ESSDs.
    
-   Capacity: The size of the storage space. The unit is TiB, GiB, MiB, or KiB.
    
    Block Storage capacity is calculated in binary units, where 1,024 is the base. For example, 1 GiB = 1,024 MiB. Capacity is not a performance metric for Block Storage products, but different capacities can achieve different performance levels. The larger the capacity, the higher the data processing capability of the storage device. The I/O performance per unit of capacity is consistent for the same type of Block Storage product. However, disk performance increases linearly with capacity until it reaches the maximum performance limit for a single disk of that type.
    

## Disk performance

The following table compares the performance of different disk types.

**Important**

-   A disk's final performance is limited by both its own specifications and the specifications of the instance to which it is attached. For more information, see [Storage I/O performance](/help/en/ecs/user-guide/storage-i-or-o-performance).
    
-   Standard SSDs, ultra disks, and basic disks are previous-generation products and are being phased out in some regions and zones. We recommend that you use PL0 ESSDs or ESSD Entry disks to replace ultra disks and basic disks, and use ESSD AutoPL disks to replace standard SSDs.
    

**Performance category**

**ESSD series**

**Previous-generation disks**

**ESSD (Zone-redundant)**

**ESSD AutoPL**

**PL3 ESSD**

**PL2 ESSD**

**PL1 ESSD**

**PL0 ESSD**

**ESSD Entry**

**Standard SSD**

**Ultra Disk**

**Basic disk**

Capacity range per disk (GiB)

10 to 65,536

1 to 65,536

1,261 to 65,536

461 to 65,536

20 to 65,536

1 to 65,536

10 to 32,768

20 to 32,768

20 to 32,768

5 to 2,000

Max IOPS

50,000

1,000,000

1,000,000

100,000

50,000

10,000

6,000

25,000②

5,000

Hundreds

Max throughput (MB/s)

350

4,096

4,000

750

350

180

150

300②

140

30 to 40

IOPS formula per disk①

min{1,800 + 50 × Capacity, 50,000}

Baseline performance: max{min{1,800 + 50 × Capacity, 50,000}, 3,000}

Provisioned performance:

Capacity (GiB) <= 3: Provisioned performance cannot be set.

Capacity (GiB) >= 4: \[1, min{(1,000 IOPS/GiB × Capacity - Baseline IOPS), 50,000}\]

Performance burst③: Actual final IOPS - Baseline IOPS - Provisioned IOPS

min{1,800 + 50 × Capacity, 1,000,000}

min{1,800 + 50 × Capacity, 100,000}

min{1,800 + 50 × Capacity, 50,000}

min{1,800 + 12 × Capacity, 10,000}

min{1,800 + 8 × Capacity, 6,000}

min{1,800 + 30 × Capacity, 25,000}

min{1,800 + 8 × Capacity, 5,000}

N/A

Throughput formula per disk (MB/s) ①

min{120 + 0.5 × Capacity, 350}

Baseline performance: max{min{120 + 0.5 × Capacity, 350}, 125}

Provisioned performance: 16 KB × Provisioned IOPS / 1,024

Performance burst③: Actual final throughput - Baseline throughput - Provisioned throughput

min{120 + 0.5 × Capacity, 4,000}

min{120 + 0.5 × Capacity, 750}

min{120 + 0.5 × Capacity, 350}

min{100 + 0.25 × Capacity, 180}

min{100 + 0.15 × Capacity, 150}

min{120 + 0.5 × Capacity, 300}

min{100 + 0.15 × Capacity, 140}

N/A

Data reliability

99.9999999999%

99.9999999%

Average latency of single-path random writes (ms), Block Size=4K

Millisecond-level④

0.2

0.2

0.2

0.2

0.3 to 0.5

1 to 3

0.5 to 2

1 to 3

5 to 10

-   Baseline performance: The maximum IOPS and throughput that come with a disk upon purchase. This performance increases linearly with the disk capacity and varies based on the disk specifications.
    
-   Provisioned performance: Allows you to flexibly configure performance based on your business needs without changing the storage capacity, decoupling capacity from performance.
    
-   ① Notes on the formulas for single-disk performance:
    
    -   Formula for the maximum IOPS of a PL0 ESSD: Starts at 1,800, increases by 12 per GiB, and is capped at 10,000.
        
    -   Formula for the maximum throughput of a PL0 ESSD: Starts at 100 MB/s, increases by 0.25 MB/s per GiB, and is capped at 180 MB/s.
        
-   ② The performance of a standard SSD varies with the block size:
    
    -   When IOPS is constant, a smaller block size results in lower throughput.
        
    -   When throughput is constant, a smaller block size results in higher IOPS.
        
    
    **I/O size (KiB)**
    
    **Max IOPS**
    
    **Throughput (MB/s)**
    
    4
    
    About 25,000
    
    About 100
    
    16
    
    About 17,200
    
    About 260
    
    32
    
    About 9,600
    
    About 300
    
    64
    
    About 4,800
    
    About 300
    
-   ③ In addition to baseline and provisioned performance, ESSD AutoPL disks can provide performance bursts. You can use EBS Lens (CloudLens for EBS) to monitor the details of bursts for ESSD AutoPL disks in real time, including the burst time and burst amount (total burst I/O). For more information, see [Disk analysis](/help/en/ecs/user-guide/cloud-disk-analysis).
    
-   ④ Data written to an ESSD (Zone-redundant) disk is automatically distributed and stored across multiple zones, achieving a recovery point objective (RPO) of 0 through physical replication. However, because data must be synchronously written to multiple zones, the write latency varies between zones in different regions and is higher than that of a PL1 ESSD. You can test the average write latency of an ESSD (Zone-redundant) disk by following the instructions in [Test the performance of block storage devices](/help/en/ecs/user-guide/test-the-performance-of-block-storage-devices).
    

## Local disk performance

**Warning**

**Local disks cannot be created independently. Their data reliability depends on the reliability of the physical server, which introduces the risk of a single point of failure. A single point of failure on a physical server can affect multiple running instances. Storing data on local disks carries a risk of data loss. Do not store business data that must be preserved for a long time on local disks.** For more information about local disks, see [Local disks](/help/en/ecs/user-guide/local-disks)**.**

#### **NVMe SSD local disks**

-   The following table describes the performance of NVMe SSD local disks that are attached to d3c instance family with local SSDs.
    
    **Metric**
    
    **Performance per disk**
    
    **ecs.d3c.3xlarge**
    
    **ecs.d3c.7xlarge**
    
    **ecs.d3c.14xlarge**
    
    Max read IOPS
    
    100,000
    
    100,000
    
    200,000
    
    400,000
    
    Max read throughput
    
    4 GB/s
    
    4 GB/s
    
    8 GB/s
    
    16 GB/s
    
    Max write throughput
    
    2 GB/s
    
    2 GB/s
    
    4 GB/s
    
    8 GB/s
    
    Latency
    
    Microsecond-level (μs)
    
-   The following table describes the performance of NVMe SSD local disks that are attached to the i5e instance family with local SSDs.
    
    **NVMe SSD metric**
    
    **ecs.i5e.2xlarge**
    
    **ecs.i5e.4xlarge**
    
    **ecs.i5e.8xlarge**
    
    **ecs.i5e.12xlarge**
    
    **ecs.i5e.16xlarge**
    
    **ecs.i5e.32xlarge**
    
    Max read IOPS
    
    1,400,000
    
    2,900,000
    
    5,800,000
    
    8,700,000
    
    11,600,000
    
    23,200,000
    
    Max read throughput
    
    7 GB/s
    
    14 GB/s
    
    28 GB/s
    
    42 GB/s
    
    56 GB/s
    
    112 GB/s
    
    Max write throughput
    
    4.5 GB/s
    
    9 GB/s
    
    18 GB/s
    
    27 GB/s
    
    36 GB/s
    
    72 GB/s
    
    Latency
    
    Microsecond-level (μs)
    
-   The following table describes the performance of NVMe SSD local disks that are attached to the i5 instance family with local SSDs.
    
    **NVMe SSD metric**
    
    **ecs.i5.xlarge**
    
    **ecs.i5.2xlarge**
    
    **ecs.i5.4xlarge**
    
    **ecs.i5.8xlarge**
    
    **ecs.i5.12xlarge**
    
    **ecs.i5.16xlarge**
    
    Max read IOPS
    
    700,000
    
    1,400,000
    
    2,900,000
    
    5,800,000
    
    8,700,000
    
    11,800,000
    
    Max read throughput
    
    3.5 GB/s
    
    7 GB/s
    
    14 GB/s
    
    28 GB/s
    
    42 GB/s
    
    56 GB/s
    
    Max write throughput
    
    2 GB/s
    
    4 GB/s
    
    8 GB/s
    
    16 GB/s
    
    24 GB/s
    
    32 GB/s
    
    Latency
    
    Microsecond-level (μs)
    
-   The following table describes the performance of NVMe SSD local disks that are attached to the i5g instance family with local SSDs.
    
    **NVMe SSD metric**
    
    **ecs.i5g.8xlarge**
    
    **ecs.i5g.16xlarge**
    
    Max read IOPS
    
    1,400,000
    
    2,900,000
    
    Max read throughput
    
    7 GB/s
    
    14 GB/s
    
    Max write throughput
    
    4 GB/s
    
    8 GB/s
    
    Latency
    
    Microsecond-level (μs)
    
-   The following table describes the performance of NVMe SSD local disks that are attached to the i5ge instance family with local SSDs.
    
    **NVMe SSD metric**
    
    **ecs.i5ge.3xlarge**
    
    **ecs.i5ge.6xlarge**
    
    **ecs.i5ge.12xlarge**
    
    **ecs.i5ge.24xlarge**
    
    Max read IOPS
    
    1,400,000
    
    2,900,000
    
    5,800,000
    
    11,800,000
    
    Max read throughput
    
    7 GB/s
    
    14 GB/s
    
    28 GB/s
    
    56 GB/s
    
    Max write throughput
    
    4 GB/s
    
    8 GB/s
    
    16 GB/s
    
    32 GB/s
    
    Latency
    
    Microsecond-level (μs)
    
-   The following table describes the performance of NVMe SSD local disks that are attached to the i4 instance family with local SSDs.
    
    **NVMe SSD metric**
    
    **ecs.i4.large**
    
    **ecs.i4.xlarge**
    
    **ecs.i4.2xlarge**
    
    **ecs.i4.4xlarge**
    
    **ecs.i4.8xlarge**
    
    **ecs.i4.16xlarge**
    
    **ecs.i4.32xlarge**
    
    Max read IOPS
    
    112,500
    
    225,000
    
    450,000
    
    900,000
    
    1,800,000
    
    3,600,000
    
    7,200,000
    
    Max read throughput
    
    0.75 GB/s
    
    1.5 GB/s
    
    3 GB/s
    
    6 GB/s
    
    12 GB/s
    
    24 GB/s
    
    48 GB/s
    
    Max write throughput
    
    0.375 GB/s
    
    0.75 GB/s
    
    1.5 GB/s
    
    3 GB/s
    
    6 GB/s
    
    12 GB/s
    
    24 GB/s
    
    Latency
    
    Microsecond-level (μs)
    
    **Note**
    
    The metrics in the table represent the optimal performance. To achieve this performance, use the latest version of a Linux image, such as [Alibaba Cloud Linux 3](/help/en/alinux/product-overview/release-notes-for-alibaba-cloud-linux). This instance family supports only Linux images.
    
-   The following table describes the performance of NVMe SSD local disks that are attached to the i4g and i4r instance families with local SSDs.
    
    **NVMe SSD metric**
    
    **ecs.i4g.4xlarge and ecs.i4r.4xlarge**
    
    **ecs.i4g.8xlarge and ecs.i4r.8xlarge**
    
    **ecs.i4g.16xlarge and ecs.i4r.16xlarge**
    
    **ecs.i4g.32xlarge and ecs.i4r.32xlarge**
    
    Max read IOPS
    
    250,000
    
    500,000
    
    1,000,000
    
    2,000,000
    
    Max read throughput
    
    1.5 GB/s
    
    3 GB/s
    
    6 GB/s
    
    12 GB/s
    
    Max write throughput
    
    1 GB/s
    
    2 GB/s
    
    4 GB/s
    
    8 GB/s
    
    Latency
    
    Microsecond-level (μs)
    
    **Note**
    
    The metrics in the table represent the optimal performance. To achieve this performance, use the latest version of a Linux image, such as the images described in [Alibaba Cloud Linux 3 image release notes](/help/en/alinux/product-overview/release-notes-for-alibaba-cloud-linux). This instance family supports only Linux images.
    
-   The following table describes the performance of NVMe SSD local disks that are attached to the i3 instance family with local SSDs.
    
    **NVMe SSD metric**
    
    **ecs.i3.xlarge**
    
    **ecs.i3.2xlarge**
    
    **ecs.i3.4xlarge**
    
    **ecs.i3.8xlarge**
    
    **ecs.i3.13xlarge**
    
    **ecs.i3.26xlarge**
    
    Max read IOPS
    
    250,000
    
    500,000
    
    1,000,000
    
    2,000,000
    
    3,000,000
    
    6,000,000
    
    Max read throughput
    
    1.5 GB/s
    
    3 GB/s
    
    6 GB/s
    
    12 GB/s
    
    18 GB/s
    
    36 GB/s
    
    Max write throughput
    
    1 GB/s
    
    2 GB/s
    
    4 GB/s
    
    8 GB/s
    
    12 GB/s
    
    24 GB/s
    
    Latency
    
    Microsecond-level (μs)
    
    **Note**
    
    The metrics in the table represent the optimal performance. To achieve this performance, use the latest version of a Linux image, such as the images described in [Alibaba Cloud Linux 3 image release notes](/help/en/alinux/product-overview/release-notes-for-alibaba-cloud-linux). This instance family supports only Linux images.
    
-   The following table describes the performance of NVMe SSD local disks that are attached to the i3g instance family with local SSDs.
    
    **NVMe SSD metric**
    
    **ecs.i3g.2xlarge**
    
    **ecs.i3g.4xlarge**
    
    **ecs.i3g.8xlarge**
    
    **ecs.i3g.13xlarge**
    
    **ecs.i3g.26xlarge**
    
    Max read IOPS
    
    125,000
    
    250,000
    
    500,000
    
    750,000
    
    1,500,000
    
    Max read throughput
    
    0.75 GB/s
    
    1.5 GB/s
    
    3 GB/s
    
    4.5 GB/s
    
    9 GB/s
    
    Max write throughput
    
    0.5 GB/s
    
    1 GB/s
    
    2 GB/s
    
    3 GB/s
    
    6 GB/s
    
    Latency
    
    Microsecond-level (μs)
    
    **Note**
    
    The metrics in the table represent the optimal performance. To achieve this performance, use the latest version of a Linux image, such as the images described in [Alibaba Cloud Linux 3 image release notes](/help/en/alinux/product-overview/release-notes-for-alibaba-cloud-linux). This instance family supports only Linux images.
    
-   The following table describes the performance of NVMe SSD local disks that are attached to the i2 and i2g instance families with local SSDs.
    
    **NVMe SSD metric**
    
    **Performance per disk**
    
    **Overall instance performance①**
    
    **ecs.i2.xlarge and ecs.i2g.2xlarge only**
    
    **Other i2 and i2g instance types**
    
    Max capacity
    
    894 GiB
    
    1,788 GiB
    
    8 × 1,788 GiB
    
    Max read IOPS
    
    150,000
    
    300,000
    
    1,500,000
    
    Max read throughput
    
    1 GB/s
    
    2 GB/s
    
    16 GB/s
    
    Max write throughput
    
    0.5 GB/s
    
    1 GB/s
    
    8 GB/s
    
    Latency
    
    Microsecond-level (μs)
    
    ① This overall instance performance applies only to ecs.i2.16xlarge and represents the local storage performance of the largest instance type in the i2 family.
    
-   The following table describes the performance of NVMe SSD local disks that are attached to the i2ne and i2gne instance families with local SSDs.
    
    **NVMe SSD metric**
    
    **ecs.i2ne.xlarge and ecs.i2gne.2xlarge**
    
    **ecs.i2ne.2xlarge and ecs.i2gne.4xlarge**
    
    **ecs.i2ne.4xlarge and ecs.i2gne.8xlarge**
    
    **ecs.i2ne.8xlarge and ecs.i2gne.16xlarge**
    
    **ecs.i2ne.16xlarge**
    
    Max capacity
    
    894 GiB
    
    1,788 GiB
    
    2 × 1,788 GiB
    
    4 × 1,788 GiB
    
    8 × 1,788 GiB
    
    Max read IOPS
    
    250,000
    
    500,000
    
    1,000,000
    
    2,000,000
    
    4,000,000
    
    Max read throughput
    
    1.5 GB/s
    
    3 GB/s
    
    6 GB/s
    
    12 GB/s
    
    24 GB/s
    
    Max write throughput
    
    1 GB/s
    
    2 GB/s
    
    4 GB/s
    
    8 GB/s
    
    16 GB/s
    
    Latency
    
    Microsecond-level (μs)
    
-   The following table describes the performance of NVMe SSD local disks that are attached to the i1 instance family with local SSDs.
    
    **NVMe SSD metric**
    
    **Performance per disk**
    
    **Overall instance performance ②**
    
    Max capacity
    
    1,456 GiB
    
    2,912 GiB
    
    Max IOPS
    
    240,000
    
    480,000
    
    Write IOPS ①
    
    min{165 × Capacity, 240,000}
    
    2 × min{165 × Capacity, 240,000}
    
    Read IOPS ①
    
    Max read throughput
    
    2 GB/s
    
    4 GB/s
    
    Read throughput ①
    
    min{1.4 × Capacity, 2,000} MB/s
    
    2 × min{1.4 × Capacity, 2,000} MB/s
    
    Max write throughput
    
    1.2 GB/s
    
    2.4 GB/s
    
    Write throughput ①
    
    min{0.85 × Capacity, 1,200} MB/s
    
    2 × min{0.85 × Capacity, 1,200} MB/s
    
    Latency
    
    Microsecond-level (μs)
    
    ① Notes on the formulas for single-disk performance:
    
    -   Example of the formula for the write IOPS of a single NVMe SSD local disk: 165 IOPS per GiB, with a cap of 240,000 IOPS.
        
    -   Example of the formula for the write throughput of a single NVMe SSD local disk: 0.85 MB/s per GiB, with a cap of 1,200 MB/s.
        
    
    ② This overall instance performance applies only to ecs.i1.14xlarge and represents the local storage performance of the largest instance type in the i1 family.
    

#### **SATA HDD local disks**

The following table describes the performance of SATA HDD local disks.

**SATA HDD metric**

**d1, d1ne**

**d2c**

**d2s**

**d3s**

**Performance per disk**

**Overall instance performance**

**Performance per disk**

**Overall instance performance**

**Performance per disk**

**Overall instance performance**

**Performance per disk**

**Overall instance performance**

Max capacity

5,500 GiB

154,000 GiB

3,700 GiB

44,400 GiB

7,300 GiB

219,000 GiB

11,100 GiB

355,200 GiB

Max throughput

190 MB/s

5,320 MB/s

190 MB/s

2,280 MB/s

190 MB/s

5,700 MB/s

260 MB/s

8,320 MB/s

Latency

Millisecond-level (ms)

**Note**

This overall instance performance applies only to the ecs.d1.14xlarge, ecs.d1ne.14xlarge, ecs.d2c.24xlarge, ecs.d2s.20xlarge, and ecs.d3s.16xlarge instance types. It represents the local storage performance of the largest instance type in each respective family.

## **Elastic ephemeral disk performance**

**Note**

You can customize the capacity of elastic ephemeral disks for temporary data storage. For more information about elastic ephemeral disks, see [Elastic ephemeral disks](/help/en/ecs/user-guide/elastic-ephemeral-disks)**.**

Two categories of elastic ephemeral disks are available: standard and premium. Standard elastic ephemeral disks are suitable for scenarios with large data volumes and high throughput needs, while premium elastic ephemeral disks are suitable for scenarios requiring small capacity but high IOPS. The following table describes the performance of each type:

**Metric**

**Standard elastic ephemeral disks**

**Premium elastic ephemeral disks**

Single-disk capacity range (GiB)

64 to 8,192

64 to 8,192

Maximum read IOPS per disk

Either 100 times the capacity or 820,000, whichever is smaller

Either 300 times the capacity or 1,000,000, whichever is smaller

Maximum write IOPS per disk

Either 20 times the capacity or 160,000, whichever is smaller

Either 150 times the capacity or 500,000, whichever is smaller

Maximum read throughput per disk (MB/s)

Either 0.8 times the capacity or 4,096, whichever is smaller

Either 1.6 times the capacity or 4,096, whichever is smaller

Maximum write throughput per disk (MB/s)

Either 0.4 times the capacity or 2,048, whichever is smaller

Either the capacity or 2,048, whichever is smaller

Write I/O density①

20

150

Read I/O density①

100

300

①: I/O density = IOPS / disk capacity, unit: IOPS/GiB, indicating the IOPS capability per GiB.

## Test **Block Storage** performance

You can test the performance of Block Storage using the following methods:

-   [Test the performance of block storage devices](/help/en/ecs/user-guide/test-the-performance-of-block-storage-devices#task-2363356)
    
-   [Test the IOPS performance of an ESSD](/help/en/ecs/user-guide/test-the-iops-performance-of-an-essd#task-2363356)
    

## **Troubleshoot slow disk reads/writes or high I/O**

You can view the monitoring information of your disks in the ECS console, EBS console, or CloudMonitor console to determine whether the current disk performance meets your business requirements or has reached a performance bottleneck. For more information, see [View monitoring information for a disk](/help/en/ecs/user-guide/view-the-monitoring-data-of-a-disk).

1.  Check whether the disk uses the pay-as-you-go billing method. If it does, the disk's I/O speed is limited when your account has an overdue payment. The speed is restored after you add funds to your account.
    
    Note: **If you do not renew a pay-as-you-go disk within 15 days after your payment becomes overdue, the disk is automatically released, and its data cannot be recovered.**
    
2.  For Linux systems, see [Troubleshoot high disk I/O usage on a Linux instance](/help/en/ecs/support/troubleshooting-and-solution-for-high-disk-i-o-load-in-linux-system) to identify the programs that consume high IOPS.
    
3.  When you import data, the performance of both the client and the server affects the read and write speeds.
    
4.  You can [use the atop tool to monitor Linux system metrics](/help/en/ecs/user-guide/use-the-atop-tool-to-monitor-linux-system-metrics) on the server. This tool continuously monitors the usage of various resources on the server. By default, resource usage information is recorded in the /var/log/atop directory. You can use the atop logs to help locate the problem.
    
5.  If the disk performance does not meet your business needs, you can try to improve it. For more information, see [How to improve disk performance](#e21866b5b71u9).
    

## **How to improve cloud disk performance**

If the current disk performance does not meet your business requirements, you can try the following methods to improve it:

**Important**

A disk's final performance is limited by both its own specifications and the specifications of the instance to which it is attached. Therefore, if the IOPS and bandwidth limits of the instance type are lower than the performance limits of the disk, upgrading only the disk will not improve its performance. You must also upgrade the instance type. For information about the limits that instance types impose on disks, see [Instance families](/help/en/ecs/user-guide/overview-of-instance-families).

Scenarios

Method to improve performance

If your disk type, such as a standard SSD, can no longer meet the higher IOPS or throughput demands of your growing business, you can change to a higher-performance disk type, such as a PL1 ESSD. This lets you achieve higher IOPS and better response times. This method is suitable for applications that have strict storage performance requirements and are experiencing significant growth in business scale or access volume.

[Change the category of a disk](/help/en/ecs/user-guide/change-the-category-of-a-disk)

If you are using an ESSD, you can adjust its performance level based on changes in your business workload.

[Modify the performance level of an ESSD](/help/en/ecs/user-guide/modify-the-performance-levels-of-essds)

If you are using an ESSD AutoPL disk, you can set provisioned performance or enable performance bursting to improve the disk's performance.

[Modify the performance configuration of an ESSD AutoPL disk](/help/en/ecs/user-guide/modify-the-performance-configurations-of-an-essd-autopl-disk)

If your business requires not only higher IOPS but also more storage space, you can scale out the disk. For some disk types, such as PL1 ESSDs, the baseline IOPS increases with capacity, enhancing the disk's processing capability and improving its performance. This is suitable for applications with continuously growing data volumes and high requirements for both storage capacity and IOPS. For example, the IOPS of a PL1 ESSD is calculated by the formula: min{1,800 + 50 × Capacity, 50,000}. A 40 GiB PL1 ESSD has 3,800 IOPS. If you scale it out to 100 GiB, the IOPS increases to 6,800.

[Scale out a disk](/help/en/ecs/user-guide/resize-cloud-disks/)

To manage and optimize storage resource allocation more flexibly while improving disk performance, you can use Logical Volume Manager (LVM). LVM lets you distribute data across multiple logical volumes to process read and write operations in parallel, which improves overall disk performance. This method is especially suitable for multi-threaded applications and databases that require high-concurrency access.

[Create a logical volume](/help/en/ecs/user-guide/use-lvm-to-create-a-logical-volume)

To improve IOPS and throughput while ensuring data redundancy, you can create a Redundant Array of Independent Disks (RAID) array. For example, you can use RAID 0 to increase read and write speeds, or use RAID 1 or RAID 10 to improve performance while providing data redundancy.

[Create a RAID array](/help/en/ecs/user-guide/create-a-raid-array-for-a-linux-instance)
