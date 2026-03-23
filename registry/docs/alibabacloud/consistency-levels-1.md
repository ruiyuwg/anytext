PolarDB for PostgreSQL (Compatible with Oracle) provides two consistency levels to meet the requirements of different business scenarios: eventual consistency and session consistency. Consistency refers to the consistency feature in atomicity, consistency, isolation, durability (ACID).

## Issues and solutions

Data replication is a simple method used to replicate data from the primary node to read-only nodes in PolarDB. You only need to asynchronously transfer the write-ahead logs (WALs) of the primary node to read-only nodes. Data replication enables read-only nodes to process queries. This reduces loads on the primary node and ensures high availability. If you use read-only nodes to process read requests, the following issues may occur:

-   1\. Typically, the primary database and secondary databases provide different endpoints. When you access different databases, you must modify the code in your applications to change the endpoint that is used to connect to databases.
    
-   2\. Data is asynchronously replicated. Data may not be immediately synchronized to read replicas after a client commits data modifications. Data in read-only nodes may not be up-to-date. In this case, data is not consistent.
    

To resolve the first issue, PolarDB uses PolarProxy as a proxy to perform read/write splitting operations. In most cases, the proxy establishes connections from applications to PolarDB and parses each SQL statement. Write requests such as UPDATE, DELETE, INSERT, and CREATE operations are forwarded to the primary database by the proxy. The SELECT operations are forwarded to secondary databases.

![3](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3246304061/p34631.png)

The read/write splitting feature cannot fix the data inconsistency issue that is caused by a replication delay. If the loads on databases are heavy, the replication delay increases. For example, when you execute DDL statements to add columns to a large table or insert a large amount of data. In this case, you cannot retrieve the most recent data from read-only nodes.

PolarDB synchronizes data between the primary node and read-only nodes by performing asynchronous physical replication. After the data on the primary node is updated, the updates are synchronized to read-only nodes. The replication delay varies based on the write loads on the primary node. The replication delay is just a few milliseconds. The asynchronous replication ensures eventual consistency among the primary and read-only nodes. PolarDB provides the following consistency levels to meet your different consistency requirements:

-   [Eventual consistency](#section-xgc-wzr-aca)
    
-   [Session consistency](#section-lnv-grf-2gb)
    

**Note**

For more information about how to change the consistency level, see [Configure PolarProxy](/help/en/polardb/polardb-for-mysql/user-guide/configure-polarproxy#task-1580301).

## Eventual consistency

-   Description
    
    PolarDB runs in a read/write splitting architecture. Traditional read/write splitting ensures only eventual consistency. The retrieved results from different nodes may be different due to a primary/secondary replication delay. For example, if you repeatedly execute the following statements within a session, the result returned by each SELECT statement may be different. The actual query result depends on the replication delay.
    
    ```
    INSERT INTO t1(id, price) VALUES(111, 96);
    UPDATE t1 SET price = 100 WHERE id=111;
    SELECT price FROM t1;
    ```
    
-   Applicable scenarios
    
    To reduce loads on the primary node and send as a number of read requests as possible to read-only nodes, we recommend that you select eventual consistency.
    

## Session consistency

-   Description
    
    In most cases, requests are split to eliminate data inconsistencies caused by eventual consistency. The requests that require high consistency are sent to the primary node. The requests that require eventual consistency are sent to read-only nodes by using the read/write splitting feature. This increases the loads on the primary node, reduces read/write splitting performance, and makes application development more complex.
    
    To solve the issue, PolarDB supports session consistency. Session consistency is known as causal consistency. Session consistency ensures that the data that is updated before read requests are sent in a session can be obtained. This ensures that data is monotonic.
    
    PolarDB uses PolarProxy to perform read/write splitting operations. PolarProxy tracks redo logs that are applied on each node and records each log sequence number (LSN). When the data in the primary node is updated, PolarDB records the LSN of the new update as a session LSN. When a new read request is received, PolarDB compares the session LSN with the LSN on each node and forwards the request to a node in which the LSN is greater than or equal to the session LSN. This ensures session consistency. PolarDB performs physical replication in an efficient manner.
    
    ![4](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6635746061/p34632.png)
    
    To ensure efficient synchronization, data is being replicated to other read-only nodes when the read-only node returns the result to the client. This way, data is updated on read-only nodes before subsequent read requests are received. In most scenarios, a large number of read requests and a small number of write requests exist. Therefore, this mechanism can ensure session consistency, read/write splitting, and load balancing based on the verification result.
    
-   Applicable scenarios
    
    A higher consistency level of a PolarDB cluster indicates heavier loads on the primary database and lower cluster performance. We recommend that you use session consistency. This consistency level meets the requirements of most application scenarios and minimizes the impact on cluster performance.
    

## Best practices for consistency levels

-   A higher consistency level of a PolarDB cluster indicates lower cluster performance. We recommend that you use session consistency. This consistency level meets the consistency requirements in most of the application scenarios and minimizes the impact on cluster performance.
    
-   If you require high data consistency between different sessions, you can select one of the following solutions:
    
    Use hints to forcibly send specific queries to the primary node.
    
    ```
    /*FORCE_MASTER*/ select * from user;
    ```
    
    **Note**
    
    -   Hints are assigned the highest priority for routing and are not limited by consistency levels or transaction splitting. Before you use hints, evaluate the impacts on your business.
        
    -   Hints cannot contain statements that change environment variables. For example, if you execute the `/*FORCE_SLAVE*/ set names utf8;` statement, errors may occur.
