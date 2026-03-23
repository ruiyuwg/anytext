A global database network (GDN) is a network of PolarDB clusters distributed across multiple regions. In this network, data is synchronized across all clusters, and each cluster can handle read requests. Write requests are forwarded to the primary cluster for processing.

## **Overview**

A global database network (GDN) consists of one primary cluster and multiple secondary clusters. The primary cluster handles all write requests, while the secondary clusters are distributed across different regions to handle local read requests. Data is synchronized across all clusters over low-latency links, forming a single logical database.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2076595671/CAEQUBiBgMDl4u6s2RkiIDZlNjU3MThmMjg4ZTQxNmQ4N2YzNGVjYmEyZGMxNmY45148329_20250507114156.898.svg)

### Data synchronization mechanism

GDN uses asynchronous physical replication to synchronize data across regions. With technologies such as parallel physical log replay, the data replication delay between the primary and secondary clusters is less than 2 seconds. This synchronization method does not impact the performance or stability of the primary cluster and ensures eventual consistency of data across all regions.

### Read/write splitting and request routing

In a GDN, the [database proxy configuration](/help/en/polardb/polardb-for-oracle/create-and-modify-a-custom-cluster-endpoint) of each cluster determines how read and write requests are routed to the primary and secondary clusters. No application modifications are required. Simply connect to a cluster endpoint, and read and write requests are automatically routed as follows:

-   Write requests, such as `INSERT`, `UPDATE`, and `DELETE`, and all requests within a transaction are automatically forwarded to the primary node of the primary cluster for processing.
    
-   Read requests are routed by default to the read-only nodes of the local secondary cluster for low-latency local access. If [session consistency](/help/en/polardb/polardb-for-oracle/consistency-levels-1#title-sdy-xbt-r8x) is enabled, some read requests may also be routed to the primary node of the primary cluster to ensure data consistency.
    

**Click to view detailed forwarding logic**

**Target node**

**Forwarded requests**

Sent only to the primary node of the primary cluster

-   DML operations (such as `INSERT`, `UPDATE`, and `DELETE`)
    
-   DDL operations (such as creating or deleting tables or databases, or altering table schemas)
    
-   `SHOW` commands
    
-   Transaction-related commands such as `BEGIN` and `COMMIT`
    
-   `LISTEN`, `UNLISTEN`, and `NOTIFY` commands
    
-   `ANALYZE` command
    
-   Two-phase commit protocol commands
    
-   Requests within a transaction (behavior may vary based on the transaction splitting configuration)
    
-   Function definitions and calls (behavior may vary based on the user-defined function routing rule configuration)
    
-   Requests that use temporary tables
    
-   Multi-statement `Multi Statements`
    
-   `PREPARE` statements that contain write requests
    

Sent to read-only nodes or the primary node

-   Read requests outside a transaction
    
-   `EXPLAIN` command
    
-   `PREPARE` statements that contain read requests
    

Always sent to all nodes

-   `USE` command
    
-   `DISCARD` and `DEALLOCATE` commands
    

## **Use cases**

**Active geo-redundancy (multi-region deployment)**

You can deploy your business across multiple regions. GDN features, such as low-latency cross-region synchronization, cross-region read/write splitting, and local reads, help maintain a database access latency of less than 2 seconds for applications in each region.

-   **Typical industries**: Games, cross-border E-commerce, local services (food delivery), and new retail (outlets).
    
-   **Business architecture**:
    
    -   For optimal performance, applications in each region connect to their local database. Read requests are handled locally, and write requests are automatically forwarded to the primary cluster for processing.
        
    -   In a GDN, each cluster (both primary and secondary) has an independent cluster endpoint. Applications can connect to the nearest cluster endpoint based on their region to access the database.
        
    -   The node specifications of the secondary clusters in Beijing and Shenzhen must be greater than or equal to the node specifications of the primary cluster in Hangzhou. We recommend that you keep the specifications consistent.
        

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2076595671/CAEQUBiBgICFyu.s2RkiIGVjMGQ2OWMzMDI5OTQ4ZTFhODM3YmUxMjA0NWIzMTYy5148329_20250507135141.418.svg)

**Geo-disaster recovery**

You can use GDN to achieve cross-region high availability, which improves data security and system availability. If the data center of the primary cluster fails, you can manually fail over your services to a secondary cluster to quickly resume operations. GDN supports various architectures, such as three data centers across two regions, four data centers across two regions, and six data centers across three regions.

-   **Typical industries**: Banking, securities, and insurance.
    
-   **Business architecture (example: three data centers across two regions):**
    
    -   The Beijing region is the primary region and uses a dual-zone deployment that spans AZ1 and AZ2.
        
    -   The Shanghai region is the disaster recovery region and uses a single-zone deployment.
        
    -   By default, the application connects to the database in AZ1 of the Beijing region for local reads and writes. If AZ1 fails, the application first switches to AZ2 in Beijing. If both AZ1 and AZ2 fail, the application fails over to the disaster recovery cluster in Shanghai.
        

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2076595671/CAEQUBiBgIDNmvCs2RkiIDZkOGFmOTI4MDllNTQxNjM4YjQxYmJmMWJkNjIzYTky5148329_20250507135141.418.svg)

**Note**

A failover between the primary and secondary clusters in a GDN can be completed within 10 minutes. In tests, this process was completed in under 5 minutes. During the failover, your application may experience transient connection errors for up to 160 seconds. Perform failovers during off-peak hours and ensure that your application has a reconnection mechanism.

## Benefits

-   **Cross-region deployment**: You can extend your deployment from a single city to multiple regions without changing your application code.
    
-   **Cross-region read/write splitting and local reads**: In a GDN, read requests are handled by the local secondary cluster, and write requests are forwarded to the primary cluster.
    
-   **Flexible configuration**: The primary and secondary clusters have independent configurations, such as node specifications, whitelists, and parameter values.
    
-   **Low-latency cross-region synchronization**: Asynchronous physical replication and parallel replay technologies minimize the cross-region replication delay between the primary and secondary clusters. Data is synchronized across all clusters with a replication delay of less than 2 seconds. This significantly reduces read latency for applications in regions that do not host the primary cluster.
    

## Limits

### **Cluster versions**

-   Database engine: Oracle-compatible 2.0
    
-   Edition: Enterprise Edition
    
-   [High-availability Mode](/help/en/polardb/polardb-for-postgresql/deploy-a-cluster-across-zones-and-change-the-primary-zone): Single zone (with hot standby storage cluster disabled)
    

### **Supported regions**

GDN is available in more than 10 regions worldwide, including the Chinese mainland, China (Hong Kong), and other regions outside the Chinese mainland.

**Primary cluster region**

**Secondary cluster region**

All regions in the Chinese mainland

The same region as the primary cluster, or any other region in the Chinese mainland.

For example, if the primary cluster is in China (Hangzhou), the secondary cluster can be in China (Hangzhou) or any other region in the Chinese mainland.

**Note**

If you have other region requirements, [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/createIndex) to contact us.

Regions outside the Chinese mainland

China (Hong Kong), Japan (Tokyo), South Korea (Seoul), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), Philippines (Manila), Thailand (Bangkok), Germany (Frankfurt), US (Silicon Valley), US (Virginia), and UK (London).

**Important**

For regions outside the Chinese mainland, you must sign the [Cross-Border Data Transfer Compliance Agreement](https://page-intl.aliyun.com/form/act866838213/index.htm) before you create a secondary cluster.

### **Feature limits**

-   Clusters in a GDN do not support the [serverless feature](/help/en/polardb/polardb-for-oracle/serverless/).
    
-   Clusters in a GDN do not support the database and table restoration feature.
    

### **Other limits**

-   A GDN can consist of one primary cluster and up to four secondary clusters.
    
-   The primary cluster and secondary clusters must have the same database engine version: Oracle-compatible 2.0.
    
-   The node specifications of a secondary cluster must be greater than or equal to those of the primary cluster. We recommend that you keep the specifications consistent.
    
-   A cluster can belong to only one GDN.
    

## Billing

Cross-region data transfer for GDN is currently free of charge. You only need to pay the [fees](/help/en/polardb/polardb-for-oracle/billable-items) for each PolarDB cluster.

## Quick start

1.  [Create a global database network](/help/en/polardb/polardb-for-oracle/create-a-global-database-network#title-2nv-njo-br3): You can select an [eligible](#2d5f22ee988hd) cluster to serve as the primary cluster of the GDN.
    
2.  [Add a secondary cluster](/help/en/polardb/polardb-for-oracle/adding-and-managing-slave-clusters#title-gmh-abk-rgm): You can go to the [PolarDB purchase page](https://polardb-buy.alibabacloud.com/cusBuy/Prepaid) to add a secondary cluster to the GDN that you created.
    
    **Note**
    
    You can only create new secondary clusters. You cannot add an existing cluster as a secondary cluster.
    
3.  [Connect to the GDN](/help/en/polardb/polardb-for-oracle/connect-to-the-global-database-network): In a GDN, each cluster (both primary and secondary) has an independent cluster endpoint. You can connect to the nearest cluster endpoint based on your application's region to access the database.
