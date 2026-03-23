PolarDB provides eventual consistency and transaction-level read consistency to meet your requirements on the consistency level in different scenarios.

## Architecture

PolarDB runs in a cluster architecture. Each cluster contains a primary node and one or more read-only nodes. Clients can connect to a PolarDB cluster by using two types of endpoints: cluster endpoints and primary endpoints. We recommend that you use the cluster endpoints to enable access to all the nodes in the cluster and implement read/write splitting.

## Read/write splitting of PolarDB for PostgreSQL

Data replication from the primary database to secondary nodes is a simple method. You only need to asynchronously transfer the write-ahead logging (WAL) of the primary database to secondary databases. Data replication enables secondary databases to process queries. This reduces workloads of the primary database and ensures high availability.

However, if read-only nodes are used to process queries, you need to consider the following issues:

-   1\. Clients can connect to the primary database and secondary databases through two endpoints. You must specify the endpoint for connections in your applications.
    
-   2\. PolarDB for PostgreSQL replicates data asynchronously. Data may not be synchronized to read replicas immediately after a client commits data modifications. Therefore, data in read-only nodes may not be up-to-date. This indicates that consistency of data is not guaranteed.
    

To fix issue 1, PolarDB uses the read/write splitting proxy. The proxy establishes connections with clients for the PolarDB for PostgreSQL cluster and parses each query from the clients. It sends write requests, such as UPDATE, DELETE, INSERT, and CREATE, to the primary node. However, read requests such as SELECT are sent to read-only nodes.

![WAL for read/write splitting in PolarDB for PostgreSQL](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4817731461/p99626.png)

However, data inconsistency caused by the synchronization latency is still not resolved. If you execute the SELECT statement to retrieve data from read-only nodes, the returned data may be inconsistent with that stored on the primary node. If the load on a PolarDB for PostgreSQL cluster is light, the synchronization latency can be reduced to less than five seconds. In scenarios that involve a heavy load, the synchronization latency may significantly increase. For example, this occurs when the cluster needs to execute data definition language (DDL) statements to add columns on large tables or insert a large amount of data.

## Eventual consistency and session consistency

-   **Eventual consistency**: PolarDB synchronizes data from the primary database to secondary databases through asynchronous physical replication. Updates to the primary database are replicated to secondary databases. In most cases, data changes are synchronized to secondary databases with a latency of a few milliseconds. The latency is based on the load of write requests on the primary database. This allows you to achieve eventual consistency through asynchronous replication.
    
-   **Session consistency**: Session consistency is used to resolve the issue of data inconsistency that occurs before eventual consistency is reached. Physical replication is fast. Based on this feature, PolarDB forwards queries to the read-only nodes that have completed asynchronous replication. For more information, see [Implementation](#section-xcs-dv7-o28).
    

## Session consistency based on read/write splitting

PolarDB runs in a read/write splitting architecture. Traditional read/write splitting allows you to ensure only eventual consistency. Latency exists in data replication from the primary node to read-only nodes. This may result in different responses that are returned by different nodes for the same query. For example, you can execute the following statements within a session:

```
INSERT INTO t1(id, price) VALUES(111, 96);
UPDATE t1 SET price = 100 WHERE id=111;
SELECT price FROM t1;
```

In this example, the result of the last query may be invalid because PolarDB may send the SELECT request to a read-only node where data has not been updated. To prevent this issue, modify your applications. The most common solution is to divide your workloads. For the workloads that require high consistency, requests are sent to only the primary database. For the workloads that require eventual consistency, write requests are sent to the primary database and read requests are sent to secondary databases. However, this solution makes application development more complex, increases the load on the primary database, and compromises the read/write splitting performance.

To address this issue, PolarDB provides session consistency. Within the same session, read requests are sent to read-only nodes where data has been updated. In this way, statements are used to query only the up-to-date data on read-only nodes.

## Implementation

![Implementation ](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6635746061/p34632.png)

PolarDB uses a middle layer (proxy) to achieve read/write splitting. The proxy tracks Redo logs that are applied on each node and records each log sequence number (LSN). When the data is updated in the primary database, the LSN of the new update is recorded as a session LSN. If a new read request arrives, the proxy compares the session LSN with the LSNs of secondary databases. It forwards the request to a secondary database where the LSN is greater than or equal to the session LSN to achieve session-level consistency. To ensure efficient synchronization, the secondary database returns the result to the client while the replication to other secondary databases are being processed. This allows secondary databases to update data before subsequent read requests arrive. In most scenarios where reads are heavier than writes, this mechanism ensures session consistency, read/write splitting, and load balancing.

## Best practices for consistency level selection

We recommend that you use session consistency. This consistency level only has a minimal effect on cluster performance and supports most scenarios.

The following solution can be applied to reach consistency among sessions:

Use hints to forcibly redirect specific queries to the primary database.

```
/*FORCE_MASTER*/ select * from user;
```
