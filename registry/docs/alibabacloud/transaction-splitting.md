This topic describes the transaction splitting feature of PolarDB for PostgreSQL (Compatible with Oracle) clusters and shows you how to enable transaction splitting.

## Background information

If you use a PolarDB for PostgreSQL (Compatible with Oracle) cluster endpoint in read/write mode, the proxy forwards read and write requests to the primary node and read-only nodes. To ensure read/write consistency of transactions in a session, the proxy sends all transaction requests in the session to the primary node.

For example, some database client drivers, such as the Java Database Connectivity (JDBC) driver, encapsulate all requests in transactions by default. In this case, all requests from applications are sent to the primary node. This results in heavy loads on the primary node and low loads on read-only nodes, as shown in the following figure.

![Transaction splitting unavailable](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6588494161/p232628.png)

To fix the preceding issue, PolarDB provides the transaction splitting feature that can be used to ensure read/write consistency. This feature reduces the loads on the primary node by sending read requests in transactions to read-only nodes.

## Background information

**Basic transaction splitting**

To reduce the loads on the primary node, PolarProxy sends read requests that are received before the first write request in a transaction is sent to read-only nodes. Uncommitted data in transactions cannot be queried from read-only nodes. To ensure data consistency in transactions, all read and write requests that are received after the first write request are still forwarded to the primary node. For more information about how to enable basic transaction splitting, see [Enable transaction splitting](#section-rap-7ez-4mk).

![Basic transaction splitting](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6588494161/p232629.png)

## Benefits

This feature allows you to transfer the read loads from the primary node to read-only nodes without modifying application code or configurations. This makes the primary node more stable.

## Precautions

-   Only transactions that use the Read Committed isolation level can be split.
    
-   If you enable basic transaction splitting and the consistency level is not set to **eventual consistency**, the proxy sends the read requests that are received before the first write request in a transaction to read-only nodes only after read-only nodes synchronize all data from the primary node. Otherwise, the proxy still sends read requests to the primary node. For more information about consistency levels, see [Consistency levels](/help/en/polardb/polardb-for-oracle/consistency-levels-1#concept-2557122).
    

## Enable transaction splitting

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
    
2.  In the upper-left corner, select the region in which the cluster is deployed.
    
3.  Find the cluster and click its ID.
    
4.  In the **Cluster Endpoints** section, click **Modify**.
    
5.  Click **On** next to **Transaction Splitting**.
    
    **Note**
    
    The transaction splitting feature takes effect on only new connections. To enable the feature to take effect on existing connections, close the existing connections and establish the connections again.
    
    ![Enable transaction splitting](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6588494161/p232865.png)
    
6.  Click **OK**.
    

## Related API operations

**Operation**

**Description**

[ModifyDBClusterEndpoint](/help/en/polardb/polardb-for-oracle/api-modifydbclusterendpoint-2#doc-api-polardb-ModifyDBClusterEndpoint)

Modifies the attributes of a PolarDB cluster endpoint. For example, you can modify the following attributes: read/write mode, consistency level, transaction splitting, and offload read requests from the primary node. You can also specify whether to associate the specified cluster endpoint with newly added nodes.
