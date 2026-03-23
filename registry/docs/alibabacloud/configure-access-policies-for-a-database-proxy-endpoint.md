After you enable the database proxy feature for an ApsaraDB RDS for MySQL instance, you may need to modify the default connection settings for database proxy endpoints based on your business requirements. A database proxy endpoint is formerly named as a proxy terminal. This topic describes the parameters for the connection settings for a database proxy endpoint and how to configure the parameters.

## Prerequisites

The database proxy feature is enabled. For more information, see [Enable the database proxy feature](/help/en/rds/apsaradb-rds-for-mysql/enable-and-configure-the-dedicated-proxy-feature-for-an-apsaradb-rds-for-mysql-instance).

## **Configure the connection settings for a database proxy endpoint**

**Note**

You can connect to an RDS instance by using internal and public endpoints of different proxy endpoints based on your business requirements.

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Database Proxy**.
    
3.  In the **Connection Information** section, find the database proxy endpoint for which you want to configure connection settings in the Proxy Endpoint (Terminal) ID column and click **Modify Configuration** in the Actions column.
    
4.  In the dialog box that appears, modify the related connection settings for the database proxy endpoint based on your business requirements. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Connection Description**
    
    The custom description of the database proxy endpoint. The description can be up to 30 characters in length.
    
    **Network and Zone**
    
    The zone and vSwitch of the database proxy.
    
    **Read/Write Attribute**
    
    The read and write attributes of the database proxy endpoint (formerly proxy terminal).
    
    -   **Read/Write (Read/Write Splitting)**: The database proxy endpoint connects to the primary RDS instance and its read-only RDS instances, and can receive write requests. This is the default value.
        
    -   **Read-only (Primary Instance Not Connected to Receive Write Requests)**: The database proxy endpoint connects only to read-only RDS instances and cannot receive write requests.
        
    
    **Note**
    
    -   After you modify the read and write attributes of a database proxy endpoint, the modification takes effect only for new connections to the database proxy endpoint. Existing connections to the database proxy endpoint remain unchanged. For more information, see [Configure the read and write attributes and the read weight of the database proxy](/help/en/rds/apsaradb-rds-for-mysql/configure-read-write-attributes-and-read-weights) and [What is read/write splitting?](/help/en/rds/apsaradb-rds-for-mysql/what-is-read-or-write-splitting#concept-2021010)
        
    -   If you use RDS Cluster Edition, you can use the primary and secondary nodes in your RDS cluster to implement read/write splitting.
        
    
    **Nearest Access**
    
    Specifies whether to enable the nearest access feature. We recommend that you enable the nearest access feature to reduce access latency and improve performance. For more information, see [Configure the nearest access feature](/help/en/rds/apsaradb-rds-for-mysql/nearby-access).
    
    **Connection Pooling**
    
    The type of the connection pool. For more information, see [Configure the connection pooling feature](/help/en/rds/apsaradb-rds-for-mysql/set-the-connection-pool-type-of-an-apsaradb-rds-for-mysql-instance#task-2357903).
    
    -   **Transaction-level Connection Pooling**: We recommend that you select this option.
        
        -   In most cases, short-lived connections are required in workloads.
            
        -   Connections are frequently established.
            
        -   The number of connections is greater than the maximum number of connections supported by an RDS instance.
            
        
        In the preceding scenarios, if the limits on the transaction-level connection pooling feature do not affect your workloads, we recommend that you select this option. For more information, see [Limits of transaction connection pools](/help/en/rds/apsaradb-rds-for-mysql/set-the-connection-pool-type-of-an-apsaradb-rds-for-mysql-instance#fd90214e12ooz).
        
    -   **Session-level Connection Pooling**
        
        -   In most cases, short-lived connections are required in workloads.
            
        -   Connections are frequently established.
            
        
        In the preceding scenarios, if the limits on the transaction-level connection pooling feature affect your workloads, you can select this option instead. For more information, see [Limits of transaction connection pools](/help/en/rds/apsaradb-rds-for-mysql/set-the-connection-pool-type-of-an-apsaradb-rds-for-mysql-instance#fd90214e12ooz).
        
    -   **Disable Connection Pooling**: This option is selected by default.
        
        -   In most cases, persistent connections are required in workloads.
            
        -   The number of connections is small.
            
        -   Connection pools such as Druid, DBCP, c3p0, and HikariCP, are used in your applications.
            
        
        In the preceding scenarios, you do not need to use a connection pool.
        
    
    **Note**
    
    If the database proxy version of your RDS instance is earlier than 2.9.1, this parameter is available only when the Read/Write Attribute parameter is set to **Read/Write (Read/Write Splitting)**. If the database proxy version of your RDS instance is 2.9.1 or later, no limits are imposed.
    
    **Latency Threshold**
    
    The maximum latency that is allowed for data replication from the primary RDS instance to its read-only RDS instances. Valid values: 0 to 3600. Unit: seconds.
    
    The read-only RDS instances may replicate data from the primary RDS instance at a specific latency. The latency varies based on the status of the SQL statements that are executed. We recommend that you set this parameter to a value that is greater than or equal to 30.
    
    **Note**
    
    -   If the database proxy version of your RDS instance is earlier than 2.9.1, you can configure the connection pooling setting only for a database proxy endpoint that is set to **read/write**. If the database proxy version of your RDS instance is 2.9.1 or later, no limits are imposed.
        
    -   When the latency of data replication to a read-only RDS instance is less than the value of this parameter and the read weight of the read-only RDS instance is not 0, the system forwards read requests to the read-only RDS instance.
        
    -   You can select **Disable** for this parameter. In this case, read requests are distributed to read-only instances regardless of the latency of the read requests.
        
    -   If you select **Read/Write (Read/Write Splitting)** for **Read/Write Attributes**, the value of this parameter is 30 seconds by default. If you select **Read-only (Primary Instance Not Connected to Receive Write Requests)** for **Read/Write Attributes**, this parameter is disabled by default.
        
    
    **Transaction Splitting**
    
    The transaction splitting capability. The value is fixed as **Enabled**. After transaction splitting is enabled, the system forwards the read requests prior to write operations in transactions to the read-only RDS instances. This way, the loads on the primary RDS instance are reduced.
    
    **Note**
    
    This parameter appears only when you set the Read/Write Attribute parameter to **Read/Write (Read/Write Splitting)**. For more information, see [Use the transaction splitting feature](/help/en/rds/apsaradb-rds-for-mysql/use-the-transaction-splitting-feature-on-an-apsaradb-rds-for-mysql-instance).
    
    **Read Weight Allocation**
    
    The method that is used to assign read weights.
    
    -   **Automatic Distribution**: The system automatically assigns a read weight to each RDS instance in your database system based on the specifications of the RDS instance. After you create a read-only RDS instance, the system automatically assigns a read weight to the read-only RDS instance for the read-only RDS instance to process read requests.
        
    -   **Custom**: You must specify a read weight for each read-only RDS instance. Valid values: 0 to 10000. The read-only RDS instances process read requests based on the specified read weights. The default read weight of a new read-only RDS instance is 0. You must modify the read weight of the new read-only RDS instance.
        
    
    **Note**
    
    -   The nearest access feature ensures that requests are forwarded from your application to the database proxy. The read weight configuration ensures that requests are forwarded from the database proxy to the backend databases, which is not affected by the nearest access feature. You must use the two features together to minimize access latency.
        
    -   A higher read weight indicates more read requests that need to be processed. For example, if the primary RDS instance has 3 read-only RDS instances whose read weights are 100, 200, and 200 and the read weight of the primary RDS instance is 0, the primary RDS instance processes only write requests and its read-only RDS instances process read requests at a ratio of 1:2:2.
        
    -   You cannot specify weights for read-only RDS instances whose data replication latencies are specified. For more information, see Set the data replication latency of a read-only ApsaraDB RDS for MySQL instance [Configure a data replication latency for a read-only ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/set-the-data-replication-latency-of-a-read-only-apsaradb-rds-for-mysql-instance#task-dk2-kjq-p2b)
        
    -   After you modify this parameter, the new read weights immediately take effect. The modification does not cause service unavailability. The existing connections also remain valid. Only the requests that are sent over new connections are forwarded based on the new weights.
        
    -   If you use RDS Cluster Edition, the read weights that you specify indicate the read weights of the primary and secondary nodes in the RDS cluster.
        
    -   If you use RDS High-availability Edition, you must create at least one read-only RDS instance before you can specify read weights.
        
    -   For more information about how to configure read and write attributes, see [Configure the read and write attributes and the read weight of the database proxy](/help/en/rds/apsaradb-rds-for-mysql/configure-read-write-attributes-and-read-weights).
        
    
5.  Click **OK**.
    

**Note**

You can configure persistent connection settings for a database proxy based on your business requirements. If you configure the settings such as enabling or disabling persistent connections, the setting takes effect on all database proxy endpoints of the RDS instance. Persistent connections retain the connections between the application and the database proxy of the RDS instance when an instance switchover occurs or the RDS instance fails. If your application connects to the database system by using the database proxy endpoint, no disconnection errors occur. For more information, see [Configure persistent connection settings](/help/en/rds/apsaradb-rds-for-mysql/use-the-persistent-connection-feature).

## References

-   [Enable the database proxy feature](/help/en/rds/apsaradb-rds-for-mysql/enable-and-configure-the-dedicated-proxy-feature-for-an-apsaradb-rds-for-mysql-instance)
    
-   [What is read/write splitting?](/help/en/rds/apsaradb-rds-for-mysql/what-is-read-or-write-splitting)
    
-   [Use a database proxy endpoint to connect to an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/use-a-proxy-endpoint-to-connect-to-an-apsaradb-rds-for-mysql-instance)
    

## Related operations

**Operation**

**Description**

[DescribeDBProxy](/help/en/rds/api-query-dedicated-proxy-details#doc-api-Rds-DescribeDBProxy)

Queries the details about the database proxy of an instance.

[DescribeDBProxyEndpoint](/help/en/rds/api-query-proxy-endpoint#doc-api-Rds-DescribeDBProxyEndpoint)

Queries the connection settings for a database proxy endpoint that is connected to an instance.

[ModifyDBProxyEndpoint](/help/en/rds/api-modify-proxy-terminal-settings#doc-api-Rds-ModifyDBProxyEndpoint)

Modifies the settings of a database proxy endpoint that is connected to an instance.
