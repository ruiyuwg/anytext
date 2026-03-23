Data Transmission Service (DTS) provides five instance classes for data migration instances. Each class determines the maximum incremental data migration throughput, measured in rows per second (RPS).

**Important**

Instance classes are for reference only and are not used as criteria for service level agreement (SLA) evaluation.

## Instance classes and maximum RPS

**Instance class**

**Maximum RPS**

small

2,000

medium

5,000

large

6,000

xlarge

7,000

2xlarge

11,000

**Note**

Actual RPS varies based on network conditions, source and destination instance performance, and latency. These values are not covered by the DTS SLA.

### Conditions for reaching maximum RPS

The maximum RPS values above require all of the following conditions:

-   The source instance generates at least as many row changes per second as the maximum RPS of the data migration instance.
    
-   The destination instance write performance can sustain the maximum RPS.
    
-   The network latency between the DTS server and the source or destination instance is less than 2 milliseconds.
    

## Performance benchmark

DTS can migrate data to the destination instance within seconds. However, migration latency may increase due to high workload on the source instance, low transmission network bandwidth, network latency, or poor write performance on the destination instance. DTS does not guarantee latency in seconds for data migration tasks.

### Test environment

Create an incremental data migration task between two ApsaraDB RDS for MySQL instances, then perform stress testing on the source instance to measure incremental data migration performance. Both the source and destination instances use identical specifications.

**Configuration**

**Value**

Specification

rds.mys2.8xlarge

Memory

48,000 MB

Maximum connections

2,000

Maximum queries per second (QPS)

18,000

Maximum input/output operations per second (IOPS)

14,000

### Test model

**Parameter**

**Value**

Table quantity

20

Primary key

Each table has a primary key

Record size

1 KB

Transaction structure

Average of 2 DML operations and 1 COMMIT operation per transaction

DML ratio (INSERT:UPDATE:DELETE)

3:1:2

### Test results

**Source region**

**Destination region**

**Network latency (ms)**

**Instance class**

**RPS**

China (Hangzhou)

China (Hangzhou)

0.26

small

2,566

China (Hangzhou)

China (Hangzhou)

0.26

medium

4,726

China (Hangzhou)

China (Hangzhou)

0.26

large

6,378

China (Hangzhou)

China (Qingdao)

26

small

2,469

China (Hangzhou)

China (Qingdao)

26

medium

4,856

China (Hangzhou)

China (Qingdao)

26

large

5,439

China (Hangzhou)

China (Beijing)

26

small

2,533

China (Hangzhou)

China (Beijing)

26

medium

5,038

China (Hangzhou)

China (Beijing)

26

large

6,829

China (Hangzhou)

US (Silicon Valley)

175

small

1,753

China (Hangzhou)

US (Silicon Valley)

175

medium

2,837

China (Hangzhou)

US (Silicon Valley)

175

large

3,884

Singapore

US (Silicon Valley)

198

small

1,104

Singapore

US (Silicon Valley)

198

medium

1,724

Singapore

US (Silicon Valley)

198

large

2,256

**Note**

These results reflect maximum performance under the test conditions described above. Maximum performance cannot be guaranteed in the following cases: the table to be migrated does not have a primary key, the network latency is high, an update hotspot exists, or the source and destination instances have performance bottlenecks.

## Key terms

**Term**

**Description**

Instance class

Determines the incremental data migration performance of a data migration instance. DTS provides different instance classes with varying throughput capabilities.

Table quantity

The total number of tables in the test model.

Record size

The size of each data record that is incrementally migrated.

RPS

Rows per second -- the number of rows incrementally migrated to the destination table per second. For example, if a data migration instance migrates 5,000 rows to the destination table per second, its RPS is 5,000.

**Note**

-   If an SQL statement contains operations on multiple rows of data, DTS identifies the operations as multiple data records. If you perform INSERT, UPDATE, and DELETE operations on a data record multiple times, DTS also identifies the operations as multiple data records.
    
-   DTS identifies each COMMIT operation as a data record.
