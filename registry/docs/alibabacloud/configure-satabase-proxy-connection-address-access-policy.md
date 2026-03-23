To use the database proxy feature in business scenarios such as read/write splitting and processing of highly concurrent read operations, you can configure different connection settings for database proxy endpoints. This way, you can connect to your ApsaraDB RDS for PostgreSQL instance by using the database proxy endpoint with the required connection settings to meet your business requirements.

## Prerequisites

The database proxy feature is enabled. For more information, see [Enable the database proxy feature](/help/en/rds/apsaradb-rds-for-postgresql/enable-and-configure-the-database-proxy-feature-for-an-apsaradb-rds-for-postgresql-instance#task-2199127).

## **Usage notes**

A read-only RDS instance is created for your RDS instance. If no read-only RDS instances are created for your RDS instance, you can enable the database proxy feature for the RDS instance but cannot configure connection settings for a database proxy endpoint. For more information, see [Create a read-only ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/create-a-read-only-apsaradb-rds-for-postgresql-instance#concept-gsm-zz1-ygb).

## Procedure

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Database Proxy**.
    
3.  In the **Connection Information** section, find the database proxy endpoint for which you want to configure connection settings in the **Proxy Endpoint (Terminal) ID** column and click **Modify Configuration** in the **Actions** column.
    
4.  In the dialog box that appears, modify the related connection settings for the database proxy endpoint based on your business requirements.
    
    **Parameter**
    
    **Description**
    
    **Connection Description**
    
    The custom description of the database proxy endpoint. The description can be up to 30 characters in length.
    
    **Read/Write Attributes**
    
    The read and write attributes of the database proxy endpoint.
    
    -   **Read/Write (Read/Write Splitting)**: The database proxy endpoint connects to the primary RDS instance and its read-only RDS instances, and can receive write requests. This is the default value.
        
    -   **Read-only (Primary Instance Not Connected to Receive Write Requests)**: The database proxy endpoint connects only to read-only RDS instances and cannot receive write requests.
        
    
    **Note**
    
    -   After you modify the read and write attributes of a database proxy endpoint, the modification takes effect only for new connections to the database proxy endpoint. Existing connections to the database proxy endpoint remain unchanged. For more information, see [Configure the read and write attributes and the read weight of the database proxy](/help/en/rds/apsaradb-rds-for-postgresql/configure-read-write-attributes-and-read-weights) and [What is read/write splitting?](/help/en/rds/apsaradb-rds-for-postgresql/what-is-read-write-separation)
        
    -   You must have a read-only RDS instance before you can configure the read and write attributes for a database proxy endpoint and use the read/write splitting capability. For more information, see [Create a read-only ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/create-a-read-only-apsaradb-rds-for-postgresql-instance#concept-gsm-zz1-ygb).
        
    
    **Latency Threshold**
    
    The maximum latency that is allowed for data replication from the primary RDS instance to its read-only RDS instances. Valid values: 0 to 3600. Unit: seconds.
    
    The read-only RDS instances may replicate data from the primary RDS instance at a specific latency. The latency varies based on the status of the SQL statements that are executed. We recommend that you set this parameter to a value that is greater than or equal to 30.
    
    **Note**
    
    -   This parameter appears only when you set the **Read/Write Attributes** parameter to **Read/Write (Read/Write Splitting)**.
        
    -   If the latency of data replication to a read-only RDS instance exceeds the value of this parameter, the system no longer forwards read requests to the read-only RDS instance regardless of the read weight of the read-only RDS instance.
        
    
    **Transaction Splitting**
    
    The transaction splitting capability. The value is fixed as **Enabled**. After transaction splitting is enabled, the system forwards the read requests prior to write operations in transactions to the read-only RDS instances. This way, the loads on the primary RDS instance are reduced.
    
    **Note**
    
    Transaction splitting cannot be disabled. For more information, see [Transaction splitting](/help/en/rds/apsaradb-rds-for-postgresql/transaction-split).
    
    **Read Weight Allocation**
    
    The method that is used to assign read weights.
    
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
        
    
5.  Click **OK**.
    

## **References**

-   [Enable the database proxy feature](/help/en/rds/apsaradb-rds-for-postgresql/enable-and-configure-the-database-proxy-feature-for-an-apsaradb-rds-for-postgresql-instance)
    
-   [What are database proxies?](/help/en/rds/apsaradb-rds-for-postgresql/what-are-database-proxies)
    
-   [Use a database proxy endpoint to connect to an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/connect-to-database-through-proxy-connection-address)
    

## Related operations

**Operation**

**Description**

[DescribeDBProxy](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describedbproxy-postgresql)

Queries the details of a database proxy.

[DescribeDBProxyEndpoint](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describedbproxyendpoint-postgresql)

Queries the endpoint of a database proxy.

[ModifyDBProxyEndpoint](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifydbproxyendpoint-postgresql)

Modifies the connection settings for a database proxy endpoint.
