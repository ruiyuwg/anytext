PolarDB supports the **Connections-based Load Balancing** and **Active Request-based Load Balancing** policies to balance loads among multiple read-only nodes.

## Load balancing policies

**Note**

A PolarDB cluster endpoint in **Read-only** mode supports two load balancing policies: **Connections-based Load Balancing** and **Active Request-based Load Balancing**. A cluster endpoint in **Read/Write (Automatic Read/Write Splitting)** mode supports only the **Active Request-based Load Balancing** policy.

**Load balancing policy**

**Difference**

**Similarity**

Connections-based load balancing

**Note**

Read requests are automatically scheduled among multiple read-only nodes in the cluster endpoint based on the number of connections to implement load balancing.

-   A connection of an application is established with only one read-only node in the cluster endpoint. The total number of connections that an application can establish is the sum of the maximum numbers of connections to all read-only nodes in the cluster endpoint.
    
-   When a read-only node is deleted from the cluster endpoint, connections to the read-only node are interrupted and then you are reconnected to other read-only nodes.
    
-   Advanced features such as consistency level, transaction splitting, persistent connections, and automatic request distribution between row store and column store nodes are not supported.
    
-   The performance is high because only establishing connections is involved, but no further load balancing.
    

For a cluster endpoint in **Read-only** mode, no requests are forwarded to the primary node regardless of the load balancing policy.

Active requests-based load balancing

**Note**

Read requests are automatically scheduled among multiple read-only nodes in the cluster endpoint based on the number of active requests to implement load balancing.

-   A connection of an application is established with all read-only node in the cluster endpoint. The total number of connections that an application can establish is the minimum value among the maximum numbers of connections to all read-only nodes in the cluster endpoint.
    
-   Advanced features such as consistency level, transaction splitting, persistent connections, and automatic request distribution between row store and column store nodes are supported.
    
-   The performance is low because route resolution and determination for each request are involved.
    
-   Better load balancing capabilities are provided. Even nodes in the cluster uses different specifications, real-time loads can be balanced among nodes.
    

## Primary Node Accepts Read Requests

After you set **Primary Node Accepts Read Requests** to **No**, common read requests are no longer forwarded to the primary node. In a transaction, read requests that require high consistency are still forwarded to the primary node to meet business requirements. If all read-only nodes fail, read requests are forwarded to the primary node. If your workloads do not require high consistency, you can set the consistency level to eventual consistency to reduce the number of read requests that are forwarded to the primary node. You can also use the transaction splitting feature to reduce the number of read requests that are forwarded to the primary node before a transaction is started. However, broadcast requests such as SET and PREPARE requests are forwarded to the primary node.

**Note**

-   The **Primary Node Accepts Read Requests** parameter is available only if the **Read/Write** parameter is set to **Read/Write (Automatic Read/Write Splitting)**. For information about how to modify **Primary Node Accepts Read Requests** settings, see [Configure PolarProxy](/help/en/polardb/polardb-for-mysql/user-guide/configure-polarproxy#task-1580301).
    
-   If your PolarProxy is 1.x.x or 2.5.1 or later, the new **Primary Node Accepts Read Requests** value takes effect immediately.
    
-   If your PolarProxy is 2.x. x and earlier than 2.5.1 and if a persistent connection is used, you must re-establish the connection to validate the new **Primary Node Accepts Read Requests** value. If a short connection is used, the new value takes effect immediately.
    

## Transaction splitting

If the cluster endpoint that is used to connect to the PolarDB cluster is in read/write mode, PolarProxy forwards read and write requests to the primary node and read-only nodes. To ensure data consistency among transactions within a session, PolarProxy sends all requests in transactions of the session to the primary node. For example, database client drivers such as the Java Database Connectivity (JDBC) encapsulate requests in a transaction. In this case, all requests from applications are sent to the primary node. This results in heavy loads on the primary node. However, no requests are sent to read-only nodes. The following figure shows the process.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3773345671/CAEQTxiBgMCPkfiP2BkiIDYwYmJiY2VjYzAwODRmNjNiNDBiM2Q2OTI3NDNkNmMx4208255_20240218112352.415.svg)

To fix this issue, PolarDB provides the transaction splitting feature in the sessions that are at the Read Committed isolation level. This feature ensures data consistency in a session and allows PolarDB to send read requests to read-only nodes to reduce the loads on the primary node. You can reduce the read loads on the primary node without the need to modify the code or configuration of your application. This way, the stability of the primary node is improved. For more information about how to enable transaction splitting, see [Configure PolarProxy](/help/en/polardb/polardb-for-mysql/user-guide/configure-polarproxy#task-1580301).

PolarDB for MySQL allows you to split transactions at two levels: **read request splitting before first write request** (which is selected by default and is the original transaction splitting feature) and **full transaction splitting (read request splitting before and after first write request)**.

-   **Read request splitting before first write request**
    
    PolarProxy sends read requests in a transaction before the first write request to read-only nodes. This reduces loads on the primary node.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3773345671/CAEQUBiBgMDci5qw2BkiIDJkMWU0ZTlmMjRlNjQyNTA4M2Q2OWU2N2RjMTYxMjkz4208255_20240218105558.197.svg)
-   **Full transaction splitting (read request splitting before and after first write request)**
    
    When read request splitting before first write request is used, read requests in a transaction after the first write request are still routed to the primary node. This still causes unbalanced loads. To resolve unbalanced loads, PolarDB for MySQL provides the full transaction splitting feature. This allows all read requests in a transaction to be routed to read-only nodes and returns correct results. This feature further relieves the pressure on the primary node.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3773345671/CAEQTxiBgID0sfuP2BkiIGQ2MGY1YWE0ZWFkOTQ0ZjY4ZmVlZGUwOGI2Y2NjMjYw4208255_20240218110538.608.svg)
    
    All previous write operations must be synchronized to a read-only node before split read requests after first write request can be routed to a read-only node. If session consistency is selected, the system checks whether all previous write operations are synchronized to the read-only nodes in the current session before routing split read requests after first write request. If so, split read requests after first write request can be routed to the read-only nodes in the current session. Otherwise, split read requests after first write request are routed to the primary node. Similarly, if global consistency is selected, the system checks whether all previous write operations are synchronized to the read-only nodes in all sessions before routing split read requests after first write request. If so, split read requests after first write request can be routed to the read-only nodes. Otherwise, split read requests after first write request are routed to the primary node. Full transaction splitting cannot be enabled if eventual consistency is selected.
    
    **Supported versions and limits**
    
    To use the transaction splitting feature, the PolarDB for MySQL cluster must meet the following requirements:
    
    -   The cluster runs one of the following engine versions:
        
        -   PolarDB for MySQL 5.6 with the revision version of 5.6.1.0.29 or later.
            
        -   PolarDB for MySQL 5.7 with the revision version of 5.7.1.0.9 or later.
            
        -   PolarDB for MySQL 8.0.1 with the revision version of 8.0.1.1.18 or later.
            
        -   PolarDB for MySQL 8.0.2.
            
    -   The engine parameter `loose_query_cache_type` must be set to OFF. The default value of this parameter is OFF for PolarDB for MySQL 5.6, 5.7, and 8.0.1 clusters, and is ON for PolarDB for MySQL 8.0.2 clusters. If you modify this parameter, you must restart the PolarDB cluster.
        

**Note**

-   Only transactions in the sessions that are at the Read Committed isolation level can be split. This feature is enabled by default.
    
-   Due to the constraints of read/write consistency, if a read-only node does not meet the consistency requirements, read requests are not routed to the read-only node.
    
-   If your PolarProxy is earlier than 2.4.14, read request splitting before write operations is supported, instead of full transaction splitting.
    
-   If your PolarProxy is 2.4.14 or later, full transaction splitting is enabled, and a persistent connection is used, you must re-establish the connection to use the transaction splitting feature. If a short-lived connection is used, you can use the transaction splitting feature immediately.
    

-   **Disable transaction splitting**
    
    After you disable transaction splitting, all requests in a transaction are routed to the primary node.
    

## Weight-based load balancing

By default, PolarDB for MySQL PolarProxy selects the node that has minimum concurrent requests to route requests. This policy can basically route traffic to different backend nodes in a balanced manner. The load balancing results can be ensured even if backend nodes use different specifications. However, customers have varied business loads and different requirements for traffic distribution.

PolarDB for MySQL introduces the weight-based load balancing feature. You can configure different weights for nodes. Then, the weight and the number of concurrent requests are referenced for the final routing decision. You can only configure weights in the following two dimensions:

-   **Global dimension**
    
    Your weight settings are valid for all endpoints.
    
-   **Endpoint dimension**
    
    Your weight settings are valid only for the current endpoint and overwrite the weight settings in the global dimension. If you first configure the weights in the global dimension and then configure the weights for a specified endpoint, the weights for the endpoint are actual valid.
    

### **Usage notes**

-   To use this feature, PolarProxy must be 2.8.3 or later.
    
-   Because both the current node load and custom weight are considered, the actual overall ratio may differ a bit from the specified ratio. However, the former will gradually move closer to the latter.
    
-   A serverless cluster does not support weight configuration in the endpoint dimension.
    

### **How it works**

The final weight of each node is dynamically adjusted based on the weight you specify and the number of concurrent requests on each node. A simplified formula can be used:

**Dynamic weight = Custom weight/Number of concurrent requests**

A higher value of the dynamic weight means that the node is more likely to be used to route requests. The weight-based load balancing policy provides a flexible routing method. In reality, business traffic gradually changes based on the weight you specify. More time is required compared with the pure weight-based polling method.

### **Procedure**

**Note**

-   All backend nodes have the same initial weight of 1.
    
-   The weight ranges from 0 to 100.
    
-   If the weight of a node is set to 0, no requests are routed to the node if any of other nodes is available.
    
-   If the cluster contains only one read-only column store node, its weight can be ignored. If the cluster contains multiple read-only column store nodes, IMCI requests are balanced based on the weights of the read-only column store nodes.
    

#### **Configure weights in the global dimension**

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
    
2.  In the upper-left corner, select the region where the cluster is deployed.
    
3.  Find the target cluster and click its ID.
    
4.  In the **Standard Enterprise Edition** or **Dedicated Enterprise Edition section** of the **Basic Information** page, click **Database Proxy Settings**.
    
5.  In the **Database Proxy Settings** dialog box, configure a weight for each node based on your business requirements.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7209909071/p751909.png)
    
6.  Click **OK**.
    

#### **Configure weights in the endpoint-dimension**

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
    
2.  In the upper-left corner, select the region where the cluster is deployed.
    
3.  Find the target cluster and click its ID.
    
4.  In the **Standard Enterprise Edition** or **Dedicated Enterprise Edition section** of the **Basic Information** page, click **Configure** in the upper-right corner of the cluster endpoint or custom endpoint.
    
5.  In the Node Settings section of the **Modify Endpoint Settings** dialog box, select **Configure Node Weight** and set a weight for the node.
    
    ![p751929](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3430915371/p894672.png)
    
6.  Click **OK**.
    

### **Test data**

The following figure shows the actual test data after weights are configured for the nodes.

If the weight ratio for the three node is 1:2:3 (1 for the primary node), expected test results can be obtained. Note that the sysbench oltp\_read\_only test set is used.

![456789](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6880324861/p520206.png)

**Note**

The _pi-bp1d1mtcobuzv\*\*\*\*_ and _pcbp14vvpolardbma23957\*\*\*\*_ internal nodes are not involved in routing requests. Their metrics can be skipped.

## **On-demand connections**

### **Background information**

For endpoints used in **active request-based load balancing**, the full connection method is used by default. After a client initiates a session to PolarProxy, PolarProxy sets up a session (connection) to every node in the endpoint. A 1:N correspondence is formed. Read requests from this client session are routed to other nodes depending on active loads of the current node. Broadcast requests such as **SET** statements are routed to all nodes. If a large number of nodes are created, establishing connection and broadcasting decreases the overall efficiency.

### **How it works**

When the on-demand connection method is used, PolarProxy establishes connections to backend nodes on demand. As long as data consistency is ensured and the primary node can process loads, fewer connections to nodes are established to reduce overheads related to establishing connections and broadcasting. In most cases, a session is connected to one primary node and one read-only node (eventual consistency is provided only). In scenarios with a large number of short-lived connections or broadcast statements, this method can significantly improve performance.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3773345671/CAEQTxiBgICPkfyP2BkiIGY1NzliNjIzZmE3MjRkNGFiZTA0MWZhNzM3NThiN2Rm4150215_20240104144244.556.svg)

In the preceding figure, if the PolarDB cluster contains only one primary node and three read-only nodes and data consistency is not considered, the following efficiency results concerning request routing and data reading in the three scenarios are obtained:

-   **Non-on-demand connections**
    
    A session causes PolarProxy to establish connections to the four nodes, and broadcast statements are routed to the four nodes.
    
-   **On-demand connections for read-only sessions**
    
    A session causes PolarProxy to establish a connection to one read-only node. Read-only requests (including broadcast requests) are routed only to this read-only node. This significantly improves data reading efficiency.
    
-   **On-demand connections for read/write sessions**
    
    A session causes PolarProxy to establish a connection to one read-only node and a connection to one primary node. The broadcast request is routed to only the two nodes. This also significantly improves data reading efficiency.
    

### **Scenarios**

-   A large number of read-only nodes
    
-   Short-lived connections
    
-   A large number of broadcast statements (for example, in the PHP short-lived connection scenario, the first statement of a session is generally the `SET NAMES utf8mb4` statement)
    
-   Most queries using short PREPARE statements
    

### **Limits**

-   PolarProxy must be 2.8.34 or later. For more information about how to view PolarProxy version of a cluster, see [Check the version number](/help/en/polardb/polardb-for-mysql/polarproxy-release-notes-1#section-vo5-vgs-y45).
    
-   When you execute the `SHOW PROCESSLISTS` statement to view the number of connected nodes, not all connections may be displayed.
    
-   When you execute **KILL** statement to terminate specified connections, not the specified connections to all nodes may be terminated.
    

### **Performance test**

#### **Test environment**

-   Nodes: one primary node and seven read-only nodes
    
-   SQL statements used: `SET NAMES utf8mb4` and `SELECT 1`
    
-   Test tool: Sysbench. The same number of concurrent requests are sent each time.
    
-   Test scenarios: the connection pool feature is disabled, the connection pool feature is enabled at the session level, and the connection pool feature is enabled at the transaction level. Each scenario is divided into two parts: The on-demand connection featured is disabled in the first part, and the on-demand connection feature is enabled in the second part.
    

#### **Test results**

-   Performance test results when the connection pool feature is disabled:
    
    -   The following figure shows changes in the CPU utilization of the nodes. After the on-demand connection feature is enabled, the CPU utilization of the nodes decreases by more than 60%.
        
        ![不打开连接池.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7831019071/p755298.png)
        
    -   The following figure shows changes in the total connections to the nodes. After the on-demand connection feature is enabled, the total connections to the nodes decrease by more than 80%.
        
        ![总连接数.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7831019071/p755299.png)
        
    -   The following figure shows changes in the overall QPS. After the on-demand connection feature is enabled, the overall QPS increases by 35%.
        
        ![QPS.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7831019071/p755301.png)
        
-   Performance test results in the scenario where the connection pool is enabled at the session level:
    
    -   The following figure shows changes in the CPU utilization of the nodes. After the on-demand connection feature is enabled, the CPU utilization of the nodes decreases by 50% to 60%.
        
        ![会话级_CPU消耗.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7831019071/p755302.png)
        
    -   The following figure shows changes in the total connections to the nodes. After the on-demand connection feature is enabled, the total connections to the nodes decrease by 60%.
        
        ![会话级_总连接数.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6831019071/p755304.png)
        
    -   The following figure shows changes in the overall QPS. After the on-demand connection feature is enabled, the overall QPS increases by 30%.
        
        ![会话级_QPS.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7831019071/p755305.png)
        
-   Performance test results when the connection pool feature is enabled at the transaction level:
    
    -   The following figure shows changes in the CPU utilization of the nodes. After the on-demand connection feature is enabled, the CPU utilization of the nodes decreases by 60%.
        
        ![事务级_CPU.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7831019071/p755307.png)
        
    -   The following figure shows changes in the total connections to the nodes. After the on-demand connection feature is enabled, the total connections of the nodes decrease by 50%.
        
        ![事务级_CPU.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7831019071/p755308.png)
        
    -   The following figure shows changes in the overall QPS. After the on-demand connection feature is enabled, the overall QPS increases by 260%.
        
        ![事务级_QPS.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7831019071/p755311.png)
