PolarDB supports the persistent connection feature to prevent temporary service interruptions or connection failures. These issues can be caused by O&M activities, such as specification upgrades, switchovers, and minor version upgrades. The issues can also be caused anomalies such as server malfunctions. Persistent connections can improve the availability of PolarDB.

## Prerequisites

-   The PolarProxy version of the PolarDB cluster is 2.4.7 or later. For more information about how to view the current version of and upgrade PolarProxy, see [Minor version upgrade](/help/en/polardb/polardb-for-mysql/user-guide/upgrade-the-cluster-version#task-2449714).
    
-   A cluster of PolarDB for MySQL 5.6, 5.7, or 8.0 and Cluster Edition.
    
-   Only the traffic that accesses the default cluster endpoint or a custom endpoint that uses the **Active requests-based load balancing** policy supports persistent connections.
    

## Background information

PolarDB supports primary/secondary failovers by using high-availability components. This ensures that the clusters are highly available. However, the failovers may adversely affect your service and cause issues, such as temporary service interruptions or connection failures. Your application may be temporarily disconnected from the cluster in the following scenarios:

-   Switchovers: Switchovers are triggered by O&M activities performed in the console or by the backend controller, such as [specification upgrades](/help/en/polardb/polardb-for-mysql/user-guide/manually-upgrade-or-downgrade-a-polardb-cluster#task-1580301), [Automatic failover and manual failover](/help/en/polardb/polardb-for-mysql/user-guide/automatic-failover-and-manual-failover#task-2317735), and [minor version upgrades](/help/en/polardb/polardb-for-mysql/user-guide/upgrade-the-cluster-version#task-2449714).
    
-   Failovers: Failovers are triggered by anomalies, such as primary node failures or server malfunctions.
    

In most cases, you can restart the application or configure the application with the automatic reconnection mechanism to resolve these issues. However, these issues may not be taken into account in the early stages of the development due to the short development lifecycle. This leads to a large number of exceptions or service interruptions. PolarDB supports the persistent connection feature to prevent connectivity issues caused by O&M activities or anomalies, such as specification upgrades, switchovers, minor version upgrades, or server malfunctions. Persistent connections can improve the availability of PolarDB clusters.

## How persistent connections work

### **Primary node switchover**

Each session in a PolarDB cluster consists of a frontend connection between the application and PolarProxy, and a backend connection between PolarProxy and the backend database. After the persistent connection feature is enabled, when PolarProxy disconnects from the current primary node and connects to a new primary node, the connection (the session shown in the application) between PolarProxy and the application is kept alive. PolarProxy establishes a connection to the new primary node and then restores the session to the state before the switchover is performed. This makes the entire switchover transparent to the application.

![1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8399728161/p251206.png)![2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8399728161/p251207.png)

Typically, a MySQL session includes the following information: system variables, user variables, temporary tables, character set encoding, transaction status, and PREPARE statement status. In this topic, the status of character set encoding is used as an example to demonstrate how the status of a session changes before and after persistent connection is enabled.

A connection is established between the application and PolarProxy and the `set names utf8;` statement is executed. In this case, the session is in the `names=utf8` state. When PolarProxy connects to a new primary node, the session status must remain unchanged. Otherwise, a character set encoding error occurs. To prevent these errors, the session status must be kept unchanged after the switchover is complete.

**Note**

When PolarProxy connects to a new primary node, the original and new databases become temporarily inaccessible to both read and write requests. The downtime depends on the database loads. During the database downtime, PolarProxy stops routing requests to both databases. PolarProxy resumes request distribution based on the following conditions:

-   If the new primary node recovers within 60 seconds, PolarProxy routes requests to the new database.
    
-   If the new primary node fails to recover within 60 seconds, PolarProxy disconnects from the application. The application must reconnect to PolarProxy. This issue also occurs when persistent connection is disabled.
    

### **Read-only node removal**

You can remove a read-only node from the default cluster endpoint or a custom endpoint that uses the **Active requests-based load balancing** policy. If a request is being executed on the read-only node to be removed, and the execution time of this request exceeds 60 seconds after the proxy receives the removal request of the read-only node, the connection that corresponds to this request is disconnected. Other scenarios in which connections cannot be kept alive are listed in Usage notes. After the proxy receives the removal request of a read-only node, all new connections and idle new requests are no longer routed to the node.

## Usage notes

Connections in the following scenarios cannot be kept alive:

-   When PolarProxy connects to a new primary node, temporary tables exist within the session.
    
-   When PolarProxy connects to a new primary node, a result message is in the process of being delivered from the database to PolarProxy. However, PolarProxy has received only a portion of the message. For example, after you execute a **SELECT** statement, a result message of 100 MB in size is returned to PolarProxy. However, PolarProxy receives only 10 MB of the message when the switchover is triggered.
    
-   When PolarProxy connects to a new primary node, transactions in progress exist within the session, such as `begin;insert into;`.
    
-   The cursor or stmt\_send\_long\_data method is used and the request is still being executed when the switchover starts.
    

**Note**

-   When a switchover or node removal starts, PolarProxy waits 60 seconds for the connection to become idle. If the connection becomes idle within 60 seconds, PolarProxy keeps the connection alive. The connection becomes idle when all requests are returned or the transaction ends. This helps keep the connection alive.
    
-   If you remove a read-only node from an endpoint that uses the **Connections-based load balancing** policy, all connections on this node are disconnected. Direct connections to the read-only node are also disconnected when the node is removed.
    

## Performance benchmarking

-   Environment
    
    -   The following cluster is used for benchmarking:
        
        -   A PolarDB for MySQL 8.0 cluster. By default, the cluster contains one primary node and two read-only nodes.
            
        -   The node specification is 4-core 16 GB (polar.mysql.x4.large).
            
    -   Test tool: Sysbench.
        
    -   Test data:
        
        -   20 tables are used in the test. Each table contains 10,000 rows.
            
        -   The degree of parallelism is 20.
            
-   Procedure
    
    Test the ratios of connections that are kept alive in the PolarDB cluster before and after an O&M activity is performed.
    
-   Test result
    
    In the following scenarios, the ratios of connections that are kept alive in the PolarDB cluster are 100%.
    
    **Note**
    
    -   The ratio of connections that are kept alive is 100% only when you upgrade cluster specifications tier by tier, such as from 4 cores to 8 cores. If you upgrade the cluster specifications from 4 cores to 16 cores or higher, a service interruption may occur.
        
    -   If the database proxy node is downgraded when a read-only node is removed, some connections may be closed.
        
    -   In this section, only the minor version upgrade of the database kernel engine is tested. This test does not include the minor version upgrade of the database proxy. During the minor version upgrade of the database proxy, network interruptions may occur.
        
    
    **Scenario**
    
    **Ratio of connections that are kept alive**
    
    Switch to a new primary node
    
    100%
    
    Upgrade the minor version of the database kernel engine
    
    100%
    
    Upgrade cluster specifications
    
    100%
    
    Add or remove nodes
    
    100%
