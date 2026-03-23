This topic describes how to configure a database proxy. You can enable features such as read/write splitting, transaction splitting, and different consistency levels by creating or modifying a cluster endpoint.

## Create a custom cluster endpoint

1.  Log on to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). In the navigation pane on the left, click **Clusters**. Select the **region** of the cluster and click the cluster ID to open the cluster details page.
    
2.  On the **Basic Information** page, find the **Database Connections** section and click **Create Custom Cluster Endpoint**.
    
3.  In the **Create Custom Cluster Endpoint** dialog box, set the following parameters.
    
    **Configuration item**
    
    **Description**
    
    **Network Information**
    
    PolarDB provides a private endpoint for each cluster endpoint by default. To modify the endpoint or apply for a public endpoint, see [Modify an endpoint](/help/en/polardb/polardb-for-oracle/modify-or-delete-an-endpoint-1#section-tjy-2tj-600) and [Apply for an endpoint](/help/en/polardb/polardb-for-oracle/view-or-apply-for-an-endpoint#section-1s0-slk-iio).
    
    **Cluster Settings**
    
    **Read/Write**
    
    The read/write mode for this endpoint. Options are **Read-only** and **Read/Write (Automatic Read/Write Splitting)**.
    
    **Note**
    
    You can modify the read/write mode after you create a custom endpoint. The change applies only to new connections. Existing connections retain their original mode.
    
    **Endpoint Name**
    
    Enter a name for the cluster endpoint.
    
    **Node Settings**
    
    **Available Nodes** and **Selected Nodes**
    
    From the **Available Nodes** box on the left, select the nodes that you want to add to this endpoint for processing read requests. Click the ![1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1601809161/p253985.png) icon to move them to the **Selected Nodes** box on the right.
    
    **Note**
    
    -   **Available Nodes** include the primary node and all read-only nodes.
        
    -   The node selection does not affect the read/write mode. If the read/write mode is set to **Read/Write (Automatic Read/Write Splitting)**, write requests are always sent to the primary node, regardless of whether you select it.
        
    -   PolarDB lets you create a cluster endpoint with a single node. However, if the read/write mode is **Read-only**, you cannot create a single-node cluster endpoint that contains only the primary node.
        
    
    **Automatically Associate New Nodes**
    
    Specifies whether to automatically add new nodes to the endpoint.
    
    **Load Balancing Settings**
    
    **Load Balancing Policy**
    
    -   If the read/write mode is **Read-only**, this is the scheduling policy for processing read requests across multiple nodes. Options are **Load balancing based on the number of connections** and **Load balancing based on the number of active requests**.
        
    -   If the read/write mode is **Read/Write (Automatic Read/Write Splitting)**, this is the scheduling policy for processing read requests across multiple nodes. The default is **Load balancing based on the number of active requests**. This setting cannot be changed.
        
    
    **Primary Node Accepts Read Requests**
    
    If you enable this feature, query SQL statements are sent only to read-only nodes. This reduces the load on the primary node and ensures its stability. For more information about primary node protection, see [Read/write splitting](/help/en/polardb/polardb-for-oracle/read-or-write-splitting-3#task-2557138).
    
    **Note**
    
    This setting is available only when the read/write mode is **Read/Write (Automatic Read/Write Splitting)**.
    
    **Transaction Splitting**
    
    Enable or disable transaction splitting. For more information about transaction splitting, see [Transaction splitting](/help/en/polardb/polardb-for-oracle/transaction-splitting#task-2038574).
    
    **Note**
    
    This setting is available only when the read/write mode is **Read/Write (Automatic Read/Write Splitting)**.
    
    **Consistency Settings**
    
    **Consistency Level**
    
    -   If the read/write mode is **Read/Write (Automatic Read/Write Splitting)**, options are **Eventual Consistency (Weak)**, **Session Consistency (Medium)**, and **Global Consistency (Strong)**. For more information, see [Consistency level](/help/en/polardb/polardb-for-oracle/consistency-levels-1#concept-vvz-lzg-1gb).
        
    -   If the read/write mode is **Read-only**, the default consistency level is **Eventual Consistency (Weak)**. This setting cannot be changed.
        
    
    **Note**
    
    -   Changes to the consistency level take effect immediately for all connections.
        
    -   **Global Consistency (Strong)** is supported for PolarDB for PostgreSQL and PolarDB for PostgreSQL (compatible with Oracle 2.0). The minor engine version must be 2.0.14.11.22.0 or later. For more information about this feature, see [Global consistency](/help/en/polardb/polardb-for-oracle/global-consistency).
        
    
    **Global Consistency Timeout**
    
    The timeout period for a read-only node to wait for data synchronization to ensure consistency. The value ranges from 1 to 1,000,000. Unit: ms. The default value is 100.
    
    **Note**
    
    This setting is available only when the **Consistency Level** is set to **Global Consistency (Strong)**.
    
    **Global Consistency Timeout Policy**
    
    The policy to execute when a read-only node times out. The valid values are:
    
    -   **Send Requests to Primary Node (Default)**.
        
    -   **Return Error Messages Due to Timeout**
        
    -   **Automatic Downgrade to Inconsistent Read Due to Timeout**
        
    
    **Note**
    
    This setting is available only when the **Consistency Level** is set to **Global Consistency (Strong)**.
    
    **Connection Pool Settings**
    
    **Connection Pool**
    
    You can select **Off** (default) or **Transaction-level**. You can use the transaction-level connection pooling feature to reduce database load caused by many connections. For more information, see [Transaction-level connection pooling](/help/en/polardb/polardb-for-oracle/transaction-level-connection-pool).
    
4.  Click **OK**.
    

## Modify a cluster endpoint

1.  Log on to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). In the navigation pane on the left, click **Clusters**. Select the **region** of the cluster and click the cluster ID to open the cluster details page.
    
2.  On the **Basic Information** page, navigate to the **Database Connections** section. Find the cluster endpoint that you want to modify and click **Configure**.
    
3.  In the **Modify Endpoint Settings** dialog box, you can set the [related parameters](#139da3757ercd).
    
4.  Click **OK**.
    

## Release a custom cluster endpoint

**Note**

-   You can release only custom cluster endpoints. Default cluster endpoints cannot be released.
    
-   After a custom cluster endpoint is released, it cannot be recovered. You must update the endpoint in your client immediately.
    

1.  Log on to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). In the navigation pane on the left, click **Clusters**. Select the **region** of the cluster and click the cluster ID to open the cluster details page.
    
2.  On the **Basic Information** page, navigate to the **Database Connections** section. Find the custom cluster endpoint that you want to release and click **Release**.
    
3.  In the dialog box that appears, click **OK**.
    

## Related API operations

**API**

**Description**

[CreateDBClusterEndpoint](/help/en/polardb/api-polardb-2017-08-01-createdbclusterendpoint)

Create a custom cluster endpoint.

[DescribeDBClusterEndpoints](/help/en/polardb/api-polardb-2017-08-01-describedbclusterendpoints)

Query cluster endpoints.

[DeleteDBClusterEndpoint](/help/en/polardb/api-polardb-2017-08-01-deletedbclusterendpoint)

Release a custom cluster endpoint.
