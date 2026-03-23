This topic describes the architectures, benefits, and scenarios of RDS Cluster Edition for ApsaraDB RDS for MySQL.

## **Introduction to RDS Cluster Edition**

RDS Cluster Edition for ApsaraDB RDS for MySQL uses a high availability (HA) architecture that contains one primary node and multiple secondary nodes and supports compute-storage separation. RDS Cluster Edition provides the following features: automated failover, primary/secondary switchover, readable secondary nodes, node addition and deletion, multi-zone disaster recovery, node-level monitoring, and cluster topology management. RDS Cluster Edition also allows you to use the MySQL group replication (MGR) mode to ensure a recovery point objective (RPO) of 0. An RDS cluster is more cost-effective, flexible, and reliable than a self-managed database.

The following table compares RDS Basic Edition, RDS High-availability Edition, and RDS Cluster Edition for ApsaraDB RDS for MySQL.

**Item**

**RDS Basic Edition**

**RDS High-availability Edition**

**RDS Cluster Edition**

Number of nodes or instances

1

2 (default)

**Note**

In RDS High-availability Edition, one primary instance and one secondary instance are provisioned by default. If you require more instances, you can create read-only instances.

2 to 9

**Note**

In RDS Cluster Edition, one primary node and two secondary nodes are provisioned by default. You can also create an RDS cluster that consists of one primary node and one secondary node. An RDS cluster is referred to as an RDS instance that runs RDS Cluster Edition. After an RDS cluster is created, you can add nodes to the RDS cluster. The RDS cluster can contain a maximum of nine nodes, including one primary node and eight secondary nodes.

Readable secondary instances or nodes

N/A

Not supported

Supported

Endpoint type

Read/write endpoint

Read/write endpoint

-   Read/write endpoint: This type of endpoint is used to connect to the primary node in an RDS cluster to process read and write requests.
    
-   Read-only routing endpoint: This type of endpoint is used to connect to the secondary nodes in an RDS cluster to process read requests.
    

Replication mode

Not supported

Asynchronous replication and semi-synchronous replication

Asynchronous replication, semi-synchronous replication, and MGR

Maximum number of unavailable instances or nodes

0

1

n - 1. n indicates the number of nodes in an RDS cluster.

Number of zones

1

Less than or equal to 2

Less than or equal to the number of nodes in an RDS cluster

## **Architecture**

RDS Cluster Edition is supported for ApsaraDB RDS for MySQL instances that run MySQL 5.7 and MySQL 8.0. An RDS cluster uses the HA architecture of one primary node and multiple secondary nodes. The following figure shows the architecture.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2093475471/CAEQJhiBgMCrhvbH_xgiIGU4MzdmMDQ1ZTZjNTQ4ZjZiODRhMzkzN2VmYTBjMjdh3963382_20230830144006.372.svg)

## **Benefits**

### **More cost-effective**

Secondary nodes in an RDS cluster are readable. You do not need to create read-only RDS clusters. This linearly increases the read capability of the RDS cluster and reduces resource overheads and costs. If you use RDS High-availability Edition and you want to increase the read capability of your RDS instance, you must create read-only RDS instances. Compared with RDS High-availability Edition, RDS Cluster Edition reduces the costs by 40%.

You can use one of the following methods to access the secondary nodes in an RDS cluster:

-   Read-only routing endpoint: You can create a read-only routing endpoint for an RDS cluster free of charge and add multiple secondary nodes to the read-only routing endpoint. Then, you can specify read weights for the secondary nodes to balance loads. For more information, see [View and manage instance endpoints and ports](/help/en/rds/apsaradb-rds-for-mysql/view-and-change-the-internal-and-public-endpoints-and-port-numbers-of-an-apsaradb-rds-for-mysql-instance).
    
-   Database proxy: You can enable the database proxy feature for an RDS cluster to implement read/write splitting on the primary and secondary nodes in the RDS cluster. Compared with the read-only routing endpoint, the database proxy feature supports advanced capabilities, including automatic read/write splitting, persistent connections, connection pooling, latency threshold, and transaction splitting. For more information, see [Enable the dedicated proxy feature](/help/en/rds/apsaradb-rds-for-mysql/enable-and-configure-the-dedicated-proxy-feature-for-an-apsaradb-rds-for-mysql-instance#task-2167178) and [What are database proxies?](/help/en/rds/apsaradb-rds-for-mysql/what-are-database-proxies)
    
    **Note**
    
    -   Starting June 25, 2024, if you create a primary RDS instance that runs RDS Cluster Edition, the general-purpose database proxies are included by default at no additional cost. For more information, see [Billing rules for database proxies](/help/en/rds/apsaradb-rds-for-mysql/billing-rules-for-the-dedicated-proxy-feature-of-apsaradb-rds-for-mysql) and [What are database proxies?](/help/en/rds/apsaradb-rds-for-mysql/what-are-database-proxies).
        
    -   If you have higher requirements on the stability of database proxies, you can change the proxy type from general-purpose to dedicated. For more information, see [Change the database proxy type and number of database proxies](/help/en/rds/apsaradb-rds-for-mysql/change-the-database-proxy-type-and-the-number-of-database-proxies-of-an-apsaradb-rds-for-mysql-instance) and [What are database proxies?](/help/en/rds/apsaradb-rds-for-mysql/what-are-database-proxies#171b5a307fbvc)
        
    -   You can disable the dedicated proxy feature at any time. For more information, see [Disable the dedicated proxy feature](/help/en/rds/apsaradb-rds-for-mysql/disable-the-dedicated-proxy-feature-for-an-apsaradb-rds-for-mysql-instance).
        
    

### **More flexible**

-   Flexible node deployment
    
    Compared with RDS Basic Edition and RDS High-availability Edition, RDS Cluster Edition supports node topology management. After you create an RDS cluster, you can add or delete nodes based on your business requirements in a more cost-effective manner. For more information, see [Add a node to an ApsaraDB RDS for MySQL cluster](/help/en/rds/apsaradb-rds-for-mysql/add-a-node-to-an-apsaradb-rds-for-mysql-cluster#task-2270210) and [Delete a node from an ApsaraDB RDS for MySQL cluster](/help/en/rds/apsaradb-rds-for-mysql/delete-a-node-from-an-apsaradb-rds-for-mysql-cluster).
    
-   Node-level monitoring
    
    RDS Cluster Edition supports node-level monitoring. You can view the status of each node in an RDS cluster.
    

### **More reliable**

-   Cross-zone disaster recovery
    
    In RDS High-availability Edition, one primary instance and one secondary instance are provisioned to ensure HA. In RDS Cluster Edition, all secondary nodes in an RDS cluster can be used for disaster recovery. We recommend that you deploy secondary nodes in different zones to achieve cross-zone disaster recovery.
    
-   Strong data consistency
    
    If more than three nodes are deployed in an RDS cluster, the MGR mode can be used for the RDS cluster. MGR is developed based on Paxos, a distributed consensus protocol. Before a transaction is committed on the primary node, the system sends the data of the transaction to secondary nodes and ensures that a majority of secondary nodes receive the data. Compared with semi-synchronous replication and asynchronous replication, MGR ensures strong data consistency and higher data security.
    
-   More reliable secondary nodes
    
    The Alibaba Cloud technical team uses cloud native technologies to perform in-depth optimizations on ApsaraDB RDS. This improves the reliability of the secondary nodes in RDS clusters.
    
    -   The RDS high-availability system is reconstructed. This reduces the time that is required to detect faults on the secondary nodes from minute-granularity to second-granularity.
        
    -   The single-digit second backup feature that is provided by Elastic Block Storage (EBS) is used. This reduces the time that is required to restore data from dozens of minutes to 1 minute and allows a secondary node to recover from faults within 10 minutes in 99% of use cases.
        
    -   If the latency on a secondary node exceeds 7,200 seconds (2 hours), the secondary node uses the automatic rebuilding method to resolve latency-related issues.
        

## **Scenarios**

RDS Cluster Edition is suitable for large and medium-sized enterprises whose production databases need to process a large number of read requests during peak hours or need to perform intelligent data analysis. These enterprises include online retailers, automobile enterprises, education enterprises, and Enterprise Resource Planning (ERP) service providers.

## **Scenarios of RDS Cluster Edition for ApsaraDB RDS for MySQL**

**Item**

**Description**

Configuration of an RDS cluster

-   [Add a node to an ApsaraDB RDS for MySQL cluster](/help/en/rds/apsaradb-rds-for-mysql/add-a-node-to-an-apsaradb-rds-for-mysql-cluster#task-2270210)
    
-   [Delete a node from an ApsaraDB RDS for MySQL cluster](/help/en/rds/apsaradb-rds-for-mysql/delete-a-node-from-an-apsaradb-rds-for-mysql-cluster#task-2270211)
    
-   [View and manage instance endpoints and ports](/help/en/rds/apsaradb-rds-for-mysql/view-and-change-the-internal-and-public-endpoints-and-port-numbers-of-an-apsaradb-rds-for-mysql-instance)
    

Upgrade of an RDS instance to RDS Cluster Edition

-   [Upgrade the RDS edition from RDS High-availability Edition to RDS Cluster Edition](/help/en/rds/apsaradb-rds-for-mysql/upgrade-an-apsaradb-rds-for-mysql-instance-from-rds-high-availability-edition-to-rds-cluster-edition#main-2272489)
    
-   [Upgrade the RDS edition from RDS Basic Edition to RDS Cluster Edition](/help/en/rds/apsaradb-rds-for-mysql/upgrade-from-basic-edition-to-cluster-edition#main-2325077)
    

Data migration to an RDS instance that runs RDS Cluster Edition

-   [Migrate data from an ApsaraDB RDS for MySQL instance on RDS Enterprise Edition to an ApsaraDB RDS for MySQL instance on RDS Cluster Edition](/help/en/rds/apsaradb-rds-for-mysql/migrate-data-from-an-apsaradb-rds-for-mysql-enterprise-edition-instance-to-an-apsaradb-rds-for-mysql-cluster-edition-instance#task-2282614)
    

MGR

-   [MGR overview](/help/en/rds/apsaradb-rds-for-mysql/introduction-to-the-mgr-mode#main-2319897)
    
-   [Use the MGR mode](/help/en/rds/apsaradb-rds-for-mysql/use-the-mgr-mode-on-an-apsaradb-rds-for-mysql-cluster#main-2319366)
    

Database proxy

-   [Enable the dedicated proxy feature](/help/en/rds/apsaradb-rds-for-mysql/enable-and-configure-the-dedicated-proxy-feature-for-an-apsaradb-rds-for-mysql-instance)
    
-   [What are database proxies?](/help/en/rds/apsaradb-rds-for-mysql/what-are-database-proxies)
    
-   [Configure access policies for a database proxy endpoint](/help/en/rds/apsaradb-rds-for-mysql/configure-access-policies-for-a-database-proxy-endpoint)
    

## Create an RDS cluster

For more information about how to create an RDS cluster that runs RDS Cluster Edition, see [Step 1: Create an ApsaraDB RDS for MySQL instance and configure databases](/help/en/rds/apsaradb-rds-for-mysql/step-1-create-an-apsaradb-rds-for-mysql-instance-and-configure-databases).
