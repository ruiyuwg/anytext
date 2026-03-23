Lindorm Tunnel Service (LTS) moves data into, out of, and between Lindorm databases. LTS supports full and incremental data migration, real-time change tracking, data lake archiving, cross-cluster synchronization, and backup and restore.

## Core capabilities

**Capability**

**Description**

Cloud-native and distributed

Runs on Elastic Compute Service (ECS) instances with horizontal scaling. Add nodes on demand for on-demand resource configuration.

Single-step configuration

Configure data migration, import, change tracking, and archiving in one step. Select a source, a destination, and the columns to synchronize. LTS automatically replicates the schema and runs full and incremental synchronization.

Built-in safety checks

LTS minimizes the impact on source and destination systems. Automatic network connectivity and security checks before a task starts. Real-time monitoring of synchronization latency and destination storage usage during the task, with throttling and alerts. Data verification after the task completes.

Optimized for HBase and Cassandra

File-level data processing delivers up to 10x throughput compared to API-layer migration. CPU, cache, memory, and network I/O are optimized to reduce transfer costs.

## Supported data paths

**Source**

**Destination**

**Use cases**

**References**

HBase

LindormTable

Seamless data migration between existing clusters and new clusters, cluster upgrades, online and offline workload decoupling, primary/secondary disaster recovery, and active geo-redundancy

[Synchronize full and incremental data](/help/en/lindorm/user-guide/synchronize-full-and-incremental-data#topic-2069479)

MaxCompute / Hive

LindormTable

Offline query acceleration, pushing data warehouse details and metrics to Lindorm for online queries

Contact technical support

### Real-time change tracking

Lindorm Stream provides real-time incremental data change subscriptions in Lindorm. For details, see [Lindorm Stream](/help/en/doc-detail/197494.html#topic-2020800).

### Deprecated features

The following features are no longer available for LTS instances purchased after the dates shown. If your instance was purchased before the cutoff date, you can still use the feature.

**Feature**

**Cutoff date**

**Alternative**

ApsaraDB RDS to LindormTable (full and incremental import)

March 10, 2023

Use DMS to synchronize data. See [Import full data and incremental data from ApsaraDB RDS](/help/en/lindorm/user-guide/rds-full-incremental-synchronization) for existing instances.

LindormTable to MaxCompute (full and incremental export)

June 16, 2023

See [Export full data to MaxCompute](/help/en/lindorm/user-guide/export-full-data-to-maxcompute#topic-2069491) and [Archive incremental data to MaxCompute](/help/en/lindorm/user-guide/archive-incremental-data-to-maxcompute#topic-2069500) for existing instances

Simple Log Service (SLS) LogHub subscription (incremental import)

June 16, 2023

See [Import incremental data from SLS](/help/en/lindorm/user-guide/incremental-import-through-log-service#concept-2560430) for existing instances

## Use cases

### Cluster migration

Migrate data from HBase to Lindorm, switch cluster networks (for example, from the classic network to a Virtual Private Cloud (VPC)), move data across regions, or decouple workloads between clusters -- all without service interruption.

**How it works:**

1.  LTS reads historical data directly from the HDFS of the source cluster without interacting with the source HBase or Lindorm service. Production workloads remain unaffected.
    
2.  In the same task, LTS synchronizes real-time incremental data so the destination stays current.
    
3.  After migration completes, LTS verifies data accuracy and confirms consistent partitions through automatic schema synchronization.
    

**Performance:**

-   Each node migrates data at up to 100 MB/s. Add nodes to scale linearly for terabyte- or petabyte-scale data volumes.
    
-   File-level processing reduces data usage by more than 50% compared to API-layer migration.
    
-   Built-in retry logic, real-time progress monitoring, and failure alerts keep the process stable.
    

### Online and offline workload decoupling

Synchronize online business data in real time to Hadoop Distributed File System (HDFS) or Object Storage Service (OSS). Analyze the data with Spark or MapReduce without affecting online query performance.

### Primary/secondary disaster recovery

Set up two-way data synchronization between an active cluster and a standby cluster. If the active cluster fails, switch to the standby cluster to minimize downtime. After recovery, use LTS to synchronize incremental data from the standby cluster back to the active cluster.

### Historical data archiving from ApsaraDB RDS

As transaction data grows in ApsaraDB RDS, performance bottlenecks and rising costs become common. LTS synchronizes data from ApsaraDB RDS to LindormTable in real time to separate hot data from cold data.

LindormTable provides automatic horizontal scaling, high-concurrency queries, multi-dimensional indexing, and lightweight analytics. Lindorm Stream tracks data changes in sequence. LTS also synchronizes data from LindormTable to other analytics systems for deeper analysis.

> ApsaraDB RDS to Lindorm synchronization is only available for LTS instances purchased before March 10, 2023. For newer instances, use Data Management (DMS) instead.
