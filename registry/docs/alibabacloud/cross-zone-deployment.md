Lindorm supports deploying instances across multiple zones, giving your databases built-in disaster recovery at the data center or city level. A multi-zone Lindorm instance maintains independent replicas in each zone, ensures strong or eventual data consistency, and handles fault detection and failover automatically. For workloads that use eventual consistency, clients can read and write from the nearest zone, keeping response times low even during transient disruptions.

## Features

Lindorm uses a distributed architecture that provides high availability. For businesses with stricter availability requirements -- including resilience against server failures, network outages, and city-level disasters -- multi-zone deployment provides:

-   Disaster recovery at the data center or city level.
    
-   Support for both strong and eventual data consistency.
    
-   Automatic fault detection and failover, with no manual intervention required.
    

## Limits

-   Open-source clients, such as the open-source HBase client, do not support multi-zone high-availability deployment.
    
-   Multi-zone deployment applies only to LindormTable. Features that depend on other engines, such as search indexes and columnar indexes, are not supported by multi-zone instances. Features supported by LindormTable, such as secondary indexes, dynamic columns, and wildcard columns, are supported by multi-zone instances.
    
-   The cold storage and hot and cold data separation features are not supported by multi-zone instances.
    

## How multi-zone deployment works

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9070207471/CAEQLxiBgMDn1tmRmBkiIDljYWQyMTg0NDFlYTRkODhiZTZlYTdmYmEzODFjYjc23963382_20230830144006.372.svg)

In a multi-zone deployment, each partition of a wide table has an independent replica in every zone. Lindorm synchronizes data between replicas using its replica consensus protocol, which requires data from at least two replicas. Write-ahead log (WAL) entries are stored in the underlying LindormDFS of Zone C. If Zone A becomes unavailable, the data in Zone C is used to restore data in Zone B.

You can configure each table's consistency level to match your business requirements. Lindorm supports two consistency levels: strong consistency and eventual consistency.

### Strong consistency

When you set a table's consistency level to strong consistency, all reads and writes go through the primary partition. Secondary partitions receive data from the primary partition through the replica consensus protocol. You can always read the most recently written data.

If all servers in the primary zone are terminated or the zone becomes unavailable, Lindorm automatically selects a new primary zone. A brief period is required to promote a secondary zone to the primary zone.

### Eventual consistency

Eventual consistency (also called weak consistency) allows reads and writes on both primary and secondary partitions. The replica consensus protocol synchronizes data written in one zone to the other zones asynchronously. In most cases, synchronization latency is about 100 ms.

Because reads can go to any partition, clients can read and write in the nearest zone. If both your read and write clients are in the same zone, the data they read is the latest data. When a zone becomes unavailable or transient disruptions such as server failures occur, Lindorm automatically routes requests to an available zone. You do not need to wait for a secondary zone to be promoted to the primary zone. This automatic routing reduces latency spikes during read and write operations and maintains high availability.

### Choosing the right consistency level

The default consistency level for new tables is eventual consistency, which meets the requirements of most workloads while providing high availability and minimizing latency spikes. We recommend eventual consistency for most use cases:

-   Data written within the last 100 ms can typically be read.
    
-   Clients can read and write from the nearest zone.
    
-   Partitions in the current zone remain available even if transient disruptions or server shutdowns occur.
    

Choose strong consistency if your business has any of the following requirements:

-   The latest data must be read immediately after it is written.
    
-   Atomic operations such as Increment and CheckAndPut must be used.
    
-   A secondary index must be created for the table.
    

**Note** In strong consistency mode, Lindorm cannot reduce latency spikes by reading from multiple replicas. If the primary zone fails, a period of time is required to promote a secondary zone to the primary zone.

## Comparison with alternative architectures

### Traditional primary/secondary disaster recovery

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8070207471/CAEQLxiBgMDp1dmRmBkiIDUwZGU4ZDM4NTY4OTQwNWFhNjViYWNlNDEzZWQyMzI43963382_20230830144006.372.svg)

In a traditional primary/secondary disaster recovery setup, you purchase two instances -- Primary Instance 1 in Zone A and Secondary Instance 2 in Zone B. Lindorm Tunnel Service (LTS) performs two-way synchronization between the instances. When Primary Instance 1 fails or Zone A becomes unavailable, you switch your connection to Secondary Instance 2 in Zone B.

This approach meets the high-availability needs of many workloads, but it has several drawbacks:

-   **No strong data consistency.** Data synchronization between the primary and secondary instances is asynchronous. Business data reaches Secondary Instance 2 only after it is written to Primary Instance 1. During a failover, applications cannot immediately read the latest data. If your business uses atomic operations such as Increment and CheckAndPut -- which read data before writing -- and the latest data is not yet available, data may become out of order or roll back. When network issues occur in Zone A, data in Zone B remains incomplete for the duration of the synchronization lag until the network in Zone A recovers.
    
-   **Low resource utilization on the secondary instance.** The secondary instance sits idle most of the time and only handles traffic during a failover.
    
-   **Manual failover required.** The database administrator must monitor the primary instance and decide when to switch workloads to the secondary instance. You need to define and implement your own failover logic and solution, which adds complexity to your business.
    

Multi-zone deployment resolves all of these issues.

### Feature comparison

The following table compares multi-zone high-availability deployment, primary/secondary disaster recovery, and Paxos-based or Raft-based consensus protocols.

**Feature**

**Multi-zone high-availability deployment**

**Primary/secondary disaster recovery**

**Paxos-based or Raft-based consensus protocol**

**Strong consistency**

**Eventual consistency**

Data loss (RPO)

**0**

**< 100 ms**

< 1s

0

Service recovery (RTO)

**1 minute**

**10s to 30s**

Determined by the time required to perform the failover

30 seconds to 3 minutes

Access response time

Access data in the primary zone. Reads and writes may cross zones.

Access data in the nearest zone. Reads and writes go to multiple zones, reducing **latency spikes**.

Access data in the primary zone. Reads and writes may cross zones.

Access data in the primary zone. Reads and writes may cross zones.

Ease of use

**No impact on business applications.**

**No impact on business applications.**

Business transformation required. An external synchronization link is provided. You switch links based on your business requirements.

No impact on business applications.

Minimum number of zones for logs

3

2

2

3

Minimum number of zones for data

2

2

2

3

Compared with traditional primary/secondary disaster recovery and Paxos-based or Raft-based consensus protocols, multi-zone deployment offers **more flexible data access**, **shorter service recovery time**, and **greater ease of use**.

**Note** With multi-zone high-availability deployment, Lindorm handles fault detection and failover for wide tables automatically, regardless of whether the table uses strong or eventual consistency. This process is fully transparent to users. You connect to a single Lindorm instance to read and write data -- there is no need to build middleware to manage connections across multiple instances. - If your business does not require strong consistency, we recommend that you select a multi-zone Lindorm instance and set the table consistency level to eventual consistency. - If your business requires strong consistency, we recommend that you select a multi-zone Lindorm instance and set the table consistency level to strong consistency.

## Purchase a multi-zone Lindorm instance

You can purchase a multi-zone Lindorm instance in the Lindorm console. For more information, see [Create an instance](/help/en/lindorm/user-guide/create-an-instance-1).

## Use a multi-zone Lindorm instance

### Create a table and configure the consistency level

**Note** The HBase API and HBase Shell do not ensure data consistency. If you use the HBase API to access LindormTable and create a table through the HBase API or HBase Shell, the table's consistency level defaults to eventual consistency. You can modify the CONSISTENCY attribute by following the steps below.

1.  Use Lindorm-cli to connect to LindormTable and run SQL statements. For more information, see [Use Lindorm-cli to connect to and use LindormTable](/help/en/lindorm/user-guide/use-lindorm-cli-to-connect-to-and-use-lindormtable).
    
2.  Configure the CONSISTENCY attribute for the table.
    
    -   Set the consistency level to strong consistency when you create a table: \`\` `CREATE TABLE dt ( p1 INT, p2 INT, c1 VARCHAR, c2 BIGINT, PRIMARY KEY(p1) ) WITH (CONSISTENCY='strong');` \`\`
        
    -   Set the consistency level to eventual consistency when you create a table: \`\` `CREATE TABLE dt2 ( p1 INT, p2 INT, c1 VARCHAR, c2 BIGINT, PRIMARY KEY(p1) ) WITH (CONSISTENCY='eventual');` \`\`
        
    -   Change an existing table's consistency level to eventual consistency: \`\` `ALTER TABLE dt SET CONSISTENCY='eventual';` \`\`
        
    -   Change an existing table's consistency level to strong consistency: \`\` `ALTER TABLE dt2 SET CONSISTENCY='strong';` \`\`
        

### Write data to a wide table

Multi-zone instances work the same way as single-zone instances for writing data. Connect to LindormTable and write data to a wide table. For more information, see [Use Lindorm-cli to connect to and use LindormTable](/help/en/lindorm/user-guide/use-lindorm-cli-to-connect-to-and-use-lindormtable).

### Import data to a wide table

-   To import data through an API, obtain the Lindorm instance endpoint from the Lindorm console and use that endpoint to import data. This works the same way for multi-zone instances.
    
-   If you use BulkLoad to import data to a multi-zone instance, you must import a copy of data in each zone. If you have questions about importing data, contact [technical support](/help/en/lindorm/support/expert-support#concept-1940738).
