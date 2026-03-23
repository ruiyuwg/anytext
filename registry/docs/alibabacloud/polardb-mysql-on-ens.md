To meet regional compliance requirements or to deploy database services closer to end-users for lower network latency, PolarDB for MySQL offers an edge cloud deployment model, PolarDB for MySQL on ENS. This lightweight service is lightweight-optimized for edge cloud infrastructure and network environments and is deployed on Alibaba Cloud Edge Node Service (ENS). This deployment lets you access high-performance, highly available, cloud-native database services with an experience consistent with the public cloud across a wider range of global locations.

## **Architectural overview**

PolarDB for MySQL on ENS features an architecture optimized for edge environments. It uses an independent storage architecture based on all-flash disks. Each node (one primary node and multiple read-only nodes) has its own dedicated storage space. This design ensures the portability of the database service. It also inherits core capabilities from the public cloud version of PolarDB, such as one primary with multiple read-only nodes and read/write splitting, to ensure high performance and high availability. The service architecture is illustrated in the following figure:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8238733671/CAEQTxiBgICWqKzF1BkiIDQxOTdlYjJhZDBiYTQ5N2M4OTE0ZTM3N2YxNjA2OTJl4975637_20250314151414.352.svg)

-   **One primary, multiple read-only nodes**
    
    PolarDB uses a distributed cluster architecture. A cluster consists of one primary node and up to seven read-only nodes. At least one read-only node is required to ensure high availability. The primary node handles read and write requests. The read-only nodes handle only read requests. PolarDB Cluster Edition also provides a free, transparent, and highly available [load balancing](https://www.aliyun.com/getting-started/what-is/what-is-load-balance) feature with automatic rotation. Through the cluster endpoint, [SQL](https://www.aliyun.com/getting-started/what-is/what-is-sql) requests are automatically forwarded to each node in the PolarDB cluster. This provides aggregated, high-throughput, and concurrent SQL processing capabilities.
    
-   **Compute-storage decoupled architecture**
    
    PolarDB is built on a design philosophy that separates compute and storage, meeting the critical need for elastic scaling in public [cloud computing](https://www.aliyun.com/getting-started/what-is/what-is-cloud-computing) environments. The database compute nodes (Database Engine Servers) only store metadata, while data files, Redo Logs, and other data are stored on remote storage nodes (Database Storage Servers). Compute nodes only need to synchronize Redo Log metadata, which significantly reduces replication latency between the primary and read-only nodes. In the event of a primary node failure, a read-only node can be quickly promoted to become the new primary.
    

## **Core features**

-   **Advanced MySQL compatibility and features**
    
    -   Compatibility: Fully compatible with native MySQL and ApsaraDB RDS for MySQL. You can migrate [MySQL databases](https://www.aliyun.com/getting-started/what-is/what-is-mysql) to a PolarDB for MySQL cluster without changing any application code or configurations.
        
    -   High-value features: Includes one write with multiple reads, stable operations on tables with up to 6 billion rows, DDL operations that complete in seconds, and flashback query.
        
-   **Orca (compatible with Redis protocol)**
    
    -   Based on the PolarDB for MySQL architecture, it uses physical replication to achieve the one write, multiple reads feature. It also supports horizontal and vertical scaling.
        
    -   A single system supports both transactional processing (TP) and persistent key-value (KV) storage, which eliminates the need to purchase separate systems.
        

## **Why choose** PolarDB for MySQL on ENS

-   **Reduced latency with edge proximity**
    
    Edge node networks are physically closer to end users. This placement avoids long-distance data transmission, which significantly reduces database access latency and improves the user experience. In addition, distributed data caching effectively relieves pressure on the central node.
    
-   **Extensive coverage and compliance** For business needs in countries or regions not yet covered by the public cloud, or where data residency laws require data to remain within national borders, PolarDB for MySQL on ENS is an ideal solution. It is also ideal for meeting local legal requirements, such as data residency.
    
    **Note**
    
    Alibaba Cloud ENS is built on more than 3,200 edge nodes from CDN carriers worldwide, covering over 70 countries and regions. It has also deployed over 900 public cloud edge nodes globally.
    
-   **High performance**
    
    Achieve high-performance read/write processing and efficient primary-replica synchronization through a deeply optimized database kernel and physical replication technology based on Redo Logs.
    
-   **High availability and reliability**
    
    -   Based on physical replication, our [Semisynchronous replication](/help/en/polardb/polardb-for-mysql/user-guide/semi-synchronous-data-replication) (Semi-sync) uses efficient Redo Log synchronization between the primary and replica nodes. This process significantly improves the efficiency of semi-synchronous replication, thereby minimizing performance impact on the primary database. Compared to asynchronous replication, the performance loss under high-concurrency workloads is only about 10%.
        
    -   Provide comprehensive security for data access, storage, and management through measures like IP whitelists, VPC networking, and multi-replica data storage.
        
-   **Extreme elasticity** You can add or remove nodes or scale their specifications up or down within minutes. Storage space can be scaled out online without interrupting your services.
    
-   **Lock-free backup** This feature uses storage-layer snapshot technology to back up terabytes of data in minutes. The backup process does not require table locks and has a minimal impact on your services.
    

## **Get started**

To get started, create an ENS network and an edge cluster in the region where you want to deploy the cluster. See [Quick start: Get started with your edge cluster](/help/en/polardb/polardb-for-mysql/polardb-mysql-on-ens-quick-start).
