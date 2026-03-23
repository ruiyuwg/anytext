If your business involves both online transaction processing (OLTP) and online analytical processing (OLAP) services, you can use the cluster endpoint feature of the database proxy to distribute OLAP requests to column store nodes and OLTP requests to row store nodes based on the IMCI feature.

## Background information

PolarDB for MySQL supports the following read-only node types:

-   Read-only row store nodes: process read requests based on the row store feature. Row store nodes provide higher performance when processing OLTP read requests.
    
-   Read-only column store nodes: process read requests based on the column store feature. Column store nodes outperform row store nodes when processing OLAP read requests, such as complex SQL queries and analytic SQL queries.
    

**Note**

By default, a cluster contains one primary node and one read-only row store node. When you add a read-only node, you can choose to add a row store or column store node. For more information, see [Add a read-only column store node](/help/en/polardb/polardb-for-mysql/user-guide/add-a-read-only-column-store-node#task-2175697).

To maximize the performance of SQL queries, you can configure cluster endpoints to distribute OLAP requests to column store nodes and OLTP requests to row store nodes.

Manual request distribution and automatic request distribution are supported.

## Automatic request distribution in OLTP and OLAP mixed scenarios

If the OLAP and OLTP requests are sent by the same application to access databases, read requests of the two types can be automatically distributed to column store nodes or row store nodes based on the number of scanned rows.

**Note**

To implement automatic request distribution among row store and column store nodes, the cluster endpoint must meet one of the following requirements:

-   The read/write mode of the cluster endpoint is set to **Read/Write (Automatic Read/Write Splitting)**.
    
-   The read/write mode of the cluster endpoint is set to **Read-only**, and the load balancing policy is set to **Active requests-based load balancing**.
    

Request distribution rules:

-   OLTP service: includes read and write requests in most cases. All write requests are processed by the primary node. Read requests are processed by the read-only row store nodes or the primary node.
    
-   OLAP service: includes only read requests in most cases. All read requests are processed by the read-only column store nodes.
    

Automatic request distribution solution:

-   Request distribution between the primary node and read-only column store nodes: The primary node can process OLTP read requests because the primary node is also in row store mode. In this solution, write requests and OLTP read requests are distributed to the primary node. OLAP read requests are distributed to the read-only column store nodes.
    
-   Request distribution between the read-only row store nodes and read-only column store nodes: In this solution, write requests are distributed to the primary node, OLTP read requests are distributed to the read-only row store nodes or the primary node, and OLAP read requests are distributed to the read-only column store nodes.
    

Automatic request distribution rules:

-   Requests that fall below the execution cost threshold for SQL statements are distributed to the row store node or the primary node. If multiple row store nodes are available, SLB determines the destination row store nodes.
    
-   Requests that exceed the expected execution cost threshold for SQL statements are distributed to the column store node. If multiple column store nodes are available, SLB determines the destination column store nodes.
    

![混合下分流](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1679411661/p392700.png)

For more information, see [Automatic request distribution among row store and column store nodes](/help/en/polardb/polardb-for-mysql/user-guide/automatic-request-distribution-among-row-store-and-column-store-nodes#task-2175779).

**Note**

The execution cost estimated by the optimizer may significantly deviate from the actual value due to the sampling method used and the sampling precision. As a result, some slow queries may be automatically distributed to row store nodes. To prevent this issue, you can enable adaptive execution plan switching for the system to automatically switch slow queries that are incorrectly distributed to row store nodes to column store nodes. For information about how to enable adaptive execution plan switching, see [Adaptive execution plan switching](/help/en/polardb/polardb-for-mysql/user-guide/adaptive-execution-capability).

## Manual request distribution among row store and column store nodes in OLTP and OLAP separated scenarios

If OLAP and OLTP requests are sent by different applications to access databases, you can configure different cluster endpoints for the applications, and then associate row store and column store nodes to different cluster endpoints to implement request distribution.

Request distribution rules:

-   OLTP service: includes read and write requests in most cases. All write requests are processed by the primary node. Read requests are processed by the read-only row store nodes or the primary node.
    
-   OLAP service: includes only read requests in most cases. All read requests are processed by the read-only column store nodes.
    

Manual request distribution solution (**Read/Write (Automatic Read/Write Splitting)** or **Read-only**)

-   Specify a cluster endpoint that is not associated with read-only column store nodes for the OLTP applications. This way, OLTP read requests are processed by the primary node or the read-only row store nodes.
    
-   Specify a cluster endpoint that is associated only with read-only column store nodes for OLAP applications. This way, OLAP read requests are processed by the read-only column store nodes.
    

![独立](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4902630961/p392701.png)

For more information, see [Manual request distribution among row store and column store nodes](/help/en/polardb/polardb-for-mysql/user-guide/manual-request-distribution-among-row-store-and-column-store-nodes#task-2177925).

## **Related topic**

[Advanced instructions](/help/en/polardb/polardb-for-mysql/user-guide/instructions-for-using-column-index#016f8fe07e6ov)
