You can modify the read and write attributes of a database proxy endpoint based on your business requirements. If you do not want to use the default read weight settings, you can modify the settings. This topic describes how to modify the read and write attributes of a database proxy endpoint for your ApsaraDB RDS for PostgreSQL instance and configure the read weight settings of read-only RDS instances.

## **Prerequisites**

-   The database proxy feature is enabled for your RDS instance. For more information, see [Enable the database proxy feature](/help/en/rds/apsaradb-rds-for-postgresql/enable-and-configure-the-database-proxy-feature-for-an-apsaradb-rds-for-postgresql-instance#task-2199127).
    
-   Your RDS instance has a read-only RDS instance. Before you can configure the read and write attributes of a database proxy endpoint to implement read/write splitting, you must create a read-only RDS instance for your RDS instance. For more information, see [Create a read-only ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/create-a-read-only-apsaradb-rds-for-postgresql-instance#concept-gsm-zz1-ygb).
    

## **Read and write attributes**

**Note**

The IP address whitelist of the database proxy is consistent with the IP address whitelist of the primary RDS instance. If the IP address whitelist of the primary RDS instance is updated, the IP address whitelist of the database proxy is also updated.

The read and write attributes can be **Read/Write** and **Read-only**.

-   **Read/Write**: This attribute is used to support read/write splitting. Read/write splitting helps linearly scale the workload processing capabilities of your database system.
    
    If you select this attribute, make sure that the database proxy endpoint that you use is connected to the primary RDS instance and at least one read-only RDS instance, and the database proxy endpoint forwards all write requests to the primary RDS instance. A database proxy endpoint is formerly known as a proxy terminal.
    
-   **Read-only**: This attribute is used to process read-only requests, such as report queries.
    
    If you select this attribute, make sure that the database proxy endpoint that you use is connected to at least one read-only RDS instance, and the database proxy endpoint does not forward requests to the primary RDS instance.
    
    If you select the **Read-only** attribute for a database proxy endpoint, the system distributes new connections to the read-only RDS instances that are connected to the database proxy endpoint in turn. In this case, each client connection is distributed to one read-only RDS instance, and the primary RDS instance is not involved. The total number of available connections is the sum of connections to all read-only RDS instances that are connected to the database proxy endpoint.
    

## **Processing logic based on the read and write attributes**

**Read and write attribute**

**Method to specify read weight**

**Weight of a primary RDS instance**

**Normal case**

**After the last read-only RDS instance is deleted**

**After all read-only RDS instances are faulty**

Read-only

**Automatic** or **custom**

You cannot specify a read weight for your primary RDS instance.

-   Primary RDS instance: does not process read or write requests. In this case, no request forwarding is performed.
    
-   Connection settings of a database proxy endpoint: processes only read requests.
    

-   Primary RDS instance: does not process read or write requests. In this case, no request forwarding is performed.
    
-   Connection settings of a database proxy endpoint: does not process read or write requests. In this case, a connection error occurs.
    

-   Primary RDS instance: does not process read or write requests. In this case, no request forwarding is performed.
    
-   Connection settings of a database proxy endpoint: does not process read or write requests. In this case, a connection error occurs.
    

Read/write

Automatic

A weight that is equal to 0

For more information, see [Rules of read weight allocation by the system](/help/en/rds/apsaradb-rds-for-postgresql/default-read-weights#concept-2191079).

-   Primary RDS instance: processes only write requests.
    
-   Connection settings of a database proxy endpoint: processes read and write requests.
    

-   Primary RDS instance: processes read and write requests.
    
-   Connection settings of a database proxy endpoint: processes read and write requests.
    

-   Primary RDS instance: processes read and write requests.
    
-   Connection settings of a database proxy endpoint: processes read and write requests.
    

Custom

A weight that is greater than 0

-   Primary RDS instance: processes read and write requests.
    
-   Connection settings of a database proxy endpoint: processes read and write requests.
    

-   Primary RDS instance: processes read and write requests.
    
-   Connection settings of a database proxy endpoint: processes read and write requests.
    

-   Primary RDS instance: processes read and write requests.
    
-   Connection settings of a database proxy endpoint: processes read and write requests.
    

A weight that is equal to 0

-   Primary RDS instance: processes only write requests.
    
-   Connection settings of a database proxy endpoint: processes read and write requests.
    

-   Primary RDS instance: processes read and write requests.
    
-   Connection settings of a database proxy endpoint: processes read and write requests.
    

-   Primary RDS instance: processes read and write requests.
    
-   Connection settings of a database proxy endpoint: processes read and write requests.
    

**Note**

-   No request forwarding: indicates that the primary RDS instance is not involved in read-only request forwarding.
    
-   Connection error: indicates that an error is reported if read and write requests cannot be processed in the connection settings of a database proxy endpoint with the Read-only attribute.
    
-   In read/write mode, if the weight of the primary RDS instance is set to 0, read requests are not forwarded to the primary RDS instance. If the read-only RDS instances of the primary RDS instance are faulty, a forceful hint is specified, or transaction splitting is enabled, the read requests are forwarded to the primary RDS instance.
    

## **Procedure**

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Database Proxy**.
    
3.  In the **Connection Information** section, find the database proxy endpoint that you want to modify in the **Proxy Endpoint (Terminal) ID** column and click **Modify Configuration** in the Actions column.
    
4.  In the dialog box that appears, set **Read/Write Attributes** to **Read/Write (Read/Write Splitting)** or **Read-only (Primary Instance Not Connected to Receive Write Requests)**.
    
5.  Set **Read Weight Allocation** to **Automatic** or **Custom**.
    
    -   **Automatic**: The system automatically assigns a read weight to each RDS instance in your database system based on the specifications of the RDS instance. After you create a read-only RDS instance, the system automatically assigns a read weight to the read-only RDS instance and adds the read-only RDS instance to the read/write splitting link. You do not need to manually specify a read weight for the read-only RDS instance. For more information, see [Default read weights](/help/en/rds/apsaradb-rds-for-postgresql/default-read-weights#concept-2191079).
        
    -   **Custom**: You must specify the read weight of each read-only RDS instance. Valid values: 0 to 10000. After you create a read-only RDS instance, the system sets the read weight of the read-only RDS instance to 0. You must modify the read weight of the new read-only RDS instance.
        
    
    **Note**
    
    -   A higher read weight indicates more read requests that need to be processed. For example, if the primary RDS instance has 3 read-only RDS instances whose read weights are 100, 200, and 200 and the read weight of the primary RDS instance is 0, the primary RDS instance processes only write requests and its read-only RDS instances process read requests at a ratio of `1:2:2`.
        
    -   After you reconfigure this parameter, the new read weights immediately take effect and no transient connections occur. The existing connections also remain valid. Only the requests that are sent over new connections are forwarded based on the new weights.
        
    -   After the read-only RDS instances are released, the read weights automatically become invalid.
        
    -   If your RDS instance fails or the data replication latency exceeds the specified threshold, the read weights automatically become invalid. After your RDS instance runs as expected, the read weights become valid again.
        
    -   You can add `/*FORCE_MASTER*/` to the SQL statement for the read request. This way, the request is forwarded to the primary RDS instance. If you want the read request to be forwarded to a read-only instance, you can add `/*FORCE_SLAVE*/` to the SQL statement for the request.
        
        Example:
        
        ```
        /*FORCE_MASTER*/ SELECT * FROM table_name;
        ```
        
    

## **Related operations**

**Operation**

**Description**

[DescribeDBProxy](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describedbproxy-postgresql)

Queries the details of a database proxy.

[DescribeDBProxyEndpoint](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describedbproxyendpoint-postgresql)

Queries the details of a database proxy endpoint for a database proxy.

[ModifyDBProxyEndpoint](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifydbproxyendpoint-postgresql)

Modifies the read and write attributes and read weight of a database proxy endpoint.
