Traditional MySQL databases often struggle with the performance, scaling, and cost challenges of rapid business growth, high concurrency, and massive storage requirements. PolarDB for MySQL Enterprise Edition is a cloud-native Hybrid Transactional/Analytical Processing (HTAP) database that uses a decoupled compute and storage architecture and shared distributed storage. This design provides high elasticity, superior performance, and significant cost savings while remaining 100% compatible with MySQL to handle large-scale business scenarios.

## How it works

PolarDB is a cloud-native database that combines the stability, reliability, high performance, and scalability of commercial databases with the simplicity, openness, and rapid iteration of open-source cloud databases. The product architecture is as follows:

![https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4421235761/p861.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8827021671/p1011660.png)

The architecture of PolarDB for MySQL has the following key characteristics:

-   ### **Decoupled compute and storage**
    
    The database's compute and storage nodes are deployed separately to support elastic scaling in a cloud computing environment. Compute nodes store only metadata and process SQL requests, while data files and Redo Logs are stored on remote distributed storage nodes. This architecture allows compute and storage resources to scale independently and quickly.
    
-   ### **Shared distributed storage**
    
    All compute nodes within a cluster—one Primary Node and multiple Read-only Nodes—share a single copy of data. Adding a Read-only Node does not require data replication, which reduces both cost and time. You pay only for the compute resources. Storage capacity scales automatically and seamlessly online based on data volume, supporting petabyte-scale data.
    
-   ### **Single-primary, multiple-replica architecture**
    
    A Cluster Edition cluster contains one primary node and up to 15 read-only nodes. The primary node handles write requests, and the read-only nodes handle read requests. The built-in [read/write splitting](/help/en/polardb/polardb-for-mysql/user-guide/read-or-write-splitting-2#concept-hbh-m45-j2b) mechanism automatically forwards SQL requests to the appropriate nodes. This provides high concurrency processing capabilities.
    
-   ### **Data consistency and high availability**
    
    -   Data reliability: Data on storage nodes is stored in multiple replicas, and the Parallel-Raft protocol ensures strong consistency.
        
    -   Failover: The primary node and read-only nodes use an active-active high availability mechanism. If the primary node fails, the system automatically fails over to a read-only node in under 10 seconds (RTO < 10s), ensuring zero data loss (RPO=0) and quick service recovery.
        
-   ### **High-speed network interconnect**
    
    Compute and storage nodes are interconnected through a high-speed network and use the Remote Direct Memory Access (RDMA) protocol, which reduces I/O latency and performance bottlenecks.
    

## Core features

-   ### Enhanced MySQL compatibility
    
    -   PolarDB for MySQL is 100% compatible with native MySQL and Alibaba Cloud ApsaraDB RDS for MySQL. You can migrate your existing MySQL databases to PolarDB for MySQL without changing any application code or configurations.
        
    -   It also provides high-value features such as a single-writer/multi-reader or multi-writer/multi-reader architecture, shared storage, stable performance for tables with up to 6 billion rows, DDL operations in seconds, seamless primary-replica switchover, and Flashback Query.
        
-   ### **Native HTAP**
    
    Supports both transaction processing and real-time analytics on the same dataset without requiring ETL.
    
-   ### **Multiple primary nodes for writing**
    
    In [Multi-master Cluster (Limitless) Edition](/help/en/polardb/polardb-for-mysql/user-guide/multi-master-cluster-database-or-table/#title-l78-bdj-l3j), all nodes can process read and write requests. Write throughput scales linearly as you add nodes. Node switchover takes 5 to 10 seconds, and in-progress transactions are not interrupted.
    
-   ### **Global active-active and geo-disaster recovery**
    
    Supports cross-region deployment for regional disaster recovery. The recovery cluster can serve read and write traffic during normal operation to improve resource utilization. Data synchronization latency between clusters is under 2 seconds, with support for minute-level failover.
    
-   ### **Lock-free backup**
    
    Leverages the snapshot technology of distributed storage to back up terabytes of data in minutes. This process does not require table locking and has minimal impact on your business.
    
-   ### Security
    
    Provides multiple security measures to protect data access, storage, and management, including IP Allowlist, network isolation using a Virtual Private Cloud (VPC), and SSL-encrypted data links.
    

## Use cases

### Handle fluctuating traffic with ease and reduce costs on demand

For use cases with significant traffic peaks and valleys, such as e-commerce promotions or online course launches, traditional database solutions often require provisioning for peak load, leading to high costs.  
**Recommended solution:** Use PolarDB's Serverless capabilities for dynamic scaling in seconds and node addition or removal in minutes. You can automatically or manually adjust compute resources to match your actual workload. Storage space is pay-as-you-go and scales automatically without manual configuration, helping you optimize storage costs.

### Ensure system stability with second-level failover

Systems in finance, government, and core enterprise ERP require high business continuity and cannot tolerate service interruptions or data loss from single points of failure.  
**Recommended solution:** Use the PolarDB Cluster Edition and configure at least one Read-only Node. This architecture, built on shared storage and multi-copy data replication across availability zones, ensures an automatic failover with an RTO of less than 10 seconds and zero data loss (RPO=0) if the Primary Node fails. For scenarios requiring geo-disaster recovery, you can use the Global Database Network (GDN) to achieve minute-level failover in the event of a regional failure.

### Modernize MySQL with zero code changes

As your business grows, systems built on traditional MySQL may face performance bottlenecks and scaling difficulties.  
**Recommended solution:** Migrate your existing MySQL database to PolarDB. PolarDB is 100% compatible with MySQL 5.6, 5.7, and 8.0, so most applications can be migrated smoothly with no code changes. After migration, applications experience significant performance improvements compared to open-source MySQL, due to the high-speed RDMA network and distributed shared storage. You can also use features like Lock-free Backup to complete backups of terabyte-scale data in minutes without impacting online services.

### Generate dynamic reports with real-time data analytics

Enterprises often need to perform real-time analysis on business data to support operational decisions, but the traditional "transactional database + analytical database" architecture suffers from data synchronization delays and high maintenance costs.  
**Recommended solution:** Use PolarDB's native HTAP capabilities. Within the same cluster, you can use the Primary Node for transactions and a Read-only Node for analytics to achieve read/write splitting. Data is available for analysis immediately after being written, eliminating ETL and enabling real-time analytics without analytical workloads interfering with transactional performance.

## Editions

PolarDB for MySQL Enterprise Edition offers different editions to meet specific use case requirements. See [Editions](/help/en/polardb/polardb-for-mysql/enterprise-edition-product-series#concept-1948721).

**Product series**

**Write nodes**

**Use cases**

Cluster Edition

Single primary node

Ideal for general-purpose, read-intensive scenarios, offering high availability and read scaling.

Multi-master Cluster

Multiple write nodes

Designed for write-intensive scenarios. All nodes process read and write requests, and write performance scales linearly.

## Billing

PolarDB billing is based on charges for compute nodes, storage space, and backup storage, and is designed to optimize your costs.

-   Compute costs
    
    -   You are billed based on node specifications and usage duration. You can add or remove nodes and temporarily scale specifications up or down in minutes.
        
    -   When you add a Read-only Node, you only pay for the compute costs because the storage is shared.
        
-   Storage costs
    
    -   PSL4/PSL5 storage automatically scales based on actual data volume and is billed on a pay-as-you-go basis, eliminating the need for upfront capacity planning.
        
    -   PSL4 storage supports [smart-SSD](/help/en/polardb/polardb-for-mysql/terminology#section-a6o-r5h-mrb), which can reduce storage costs by about 40% without degrading performance.
        

For more information about billing, see [Product Billing](/help/en/polardb/polardb-for-mysql/polardb-mysql-product-billing/#827bab6069m3t).

## **How to get started with PolarDB**

Manage PolarDB for MySQL clusters, including creating clusters, databases, and accounts, using the following methods:

-   [Console](https://polardb.console.alibabacloud.com/): Provides a graphical web interface for easy operation.
    
-   [CLI](/help/en/cli/what-is-alibaba-cloud-cli): All operations available in the console can also be performed using the CLI.
    
-   [SDK](/help/en/polardb/polardb-for-mysql/download-the-sdk#concept-287130): All operations available in the console can also be performed using the SDK.
    
-   [API](/help/en/polardb/api-polardb-2017-08-01-overview): All operations available in the console can also be performed using the API.
    

After creating a PolarDB for MySQL cluster, connect to it using the following methods:

-   DMS: Use [DMS to connect to a PolarDB cluster](/help/en/polardb/polardb-for-mysql/user-guide/connect-to-a-cluster#section-wxq-bql-v2b) and perform database development tasks in a web-based interface.
    
-   Client: Connect to your PolarDB for MySQL cluster using common database client tools such as Navicat and MySQL Workbench.
