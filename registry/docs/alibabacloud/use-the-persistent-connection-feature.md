When O&M operations that trigger switchovers are performed on an ApsaraDB RDS for MySQL instance, the connections between applications and database proxies of the RDS instance are temporarily interrupted. This may cause service interruptions. This topic describes how to configure persistent connection settings for an RDS instance to keep connections alive, prevent service interruptions, improve instance availability, and reduce maintenance costs.

## **Feature description**

Persistent connections are provided by the database proxy feature of ApsaraDB RDS for MySQL. If O&M operations that trigger switchovers are performed on the RDS instance, persistent connections help ensure that the connections between applications and database proxies of the RDS instance are kept alive. In this case, if you use database proxy endpoints to connect your applications to your RDS instance, disconnection errors are not reported. The following figure shows the details.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0370755071/p741752.png)

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0370755071/p741751.png)

### **Implementation**

Database proxy connections are divided into frontend connections between database proxies and clients and backend connections between database proxies and databases. If the backend connections are interrupted during an operation such as switchover, the frontend connections are kept alive. This way, persistent connections are implemented.

If a backend connection is established between a database proxy and an RDS instance, persistent connections are implemented by restoring the connection status of the backend connection after it is interrupted.

The connection status of a backend connection between a database proxy and an RDS instance depends on information such as system variables, user variables, temporary tables, and character set encoding, and the statuses of transactions and PREPARE statements. This topic uses set names utf8mb4 as the connection status to elaborate the implementation of persistent connections in ApsaraDB RDS for MySQL.

#### **Switchover**

This section describes how the database proxy helps ensure persistent connections during a switchover.

**Note**

The following list describes the O&M operations that trigger switchovers:

-   Primary/secondary switchovers
    
-   Update of the minor engine version
    
-   Modifications to the parameters for which a restart is required for the modifications to take effect
    
-   Change of the configuration of a primary RDS instance
    

1.  **Start of switching: Block new connections and requests.**
    
    A database proxy does not support persistent transactions. The database proxy processes sessions based on session statuses.
    
    -   Sessions in active transactions during the blocking: The database proxy forwards requests to the primary RDS instance for processing.
        
    -   Sessions in new transactions during the blocking: The database proxy blocks requests, and the client waits for responses from the servers to the blocked requests.
        
    -   Sessions in active transactions after the blocking: The connection between the client and the database proxy is interrupted, and the RDS instance rolls back the transactions that are not committed.
        
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0370755071/p749206.png)
    
2.  **Switching: Switch the statuses of existing connections.**
    
    The following section describes the statuses of the existing connections that are changed during a switchover:
    
    -   Non-persistent connection: The database proxy terminates the entire connection.
        
    -   Persistent connection: The connections are terminated from the current RDS instance and switched to a new RDS instance.
        
    -   Connection to the original primary RDS instance in the connection pool: The connections are released.
        
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0370755071/p741750.png)
    
3.  **Switched: Re-establish connections.**
    
    Connections that are kept alive after the switchover can be restored after the connection between database proxies and the new primary RDS instance is established.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0370755071/p741754.png)
    

#### **Failover**

If your primary RDS instance fails, the system automatically promotes a secondary RDS instance as the new primary RDS instance and switches your workloads over from the original primary RDS instance to the new primary RDS instance. This primary/secondary switchover is unexpected and referred to as a failover.

The database proxy caches SQL statements that are being executed or are to be forwarded. If your RDS instance fails, the backend connections between the database proxy and databases on the RDS instance are interrupted. If a database proxy detects an instance failover, the connection between the database proxy and the required client is not immediately interrupted. The database proxy forwards failed read requests to an available RDS instance in your database system and restores the connection.

**Important**

The database proxy cannot ensure that the RDS instance can successfully process failed write requests. As a result, persistent connections are not supported for write requests during failovers.

## **Enable persistent connections**

**Note**

Starting January 9, 2024, when you enable the database proxy feature for an ApsaraDB RDS for MySQL instance that meets the requirements in the following "Prerequisites" section, persistent connections are enabled by default. After persistent connections are enabled, you can disable persistent connections at any time.

### **Prerequisites**

#### **Persistent connections during switchovers**

Your RDS instance meets the following requirements:

-   The RDS instance runs MySQL 5.6, MySQL 5.7, or MySQL 8.0.
    
-   The RDS instance runs RDS High-availability Edition or RDS Cluster Edition.
    
-   The RDS instance uses cloud disks or Premium Local SSDs.
    
-   The RDS instance uses general-purpose or dedicated database proxies.
    
-   The database proxy feature is enabled for the RDS instance, and the database proxy version is 1.14.5\_20231207 or later. For more information, see [Enable the database proxy feature](/help/en/rds/apsaradb-rds-for-mysql/enable-and-configure-the-dedicated-proxy-feature-for-an-apsaradb-rds-for-mysql-instance).
    

#### **Persistent connections during failovers**

Your RDS instance meets the following requirements:

-   The RDS instance runs MySQL 5.6, MySQL 5.7, or MySQL 8.0.
    
-   The RDS instance runs RDS High-availability Edition or RDS Cluster Edition.
    
-   The RDS instance uses cloud disks or Premium Local SSDs.
    
-   The RDS instance uses dedicated database proxies.
    
    **Note**
    
    General-purpose database proxies support persistent connections only during switchovers. Dedicated database proxies support persistent connections during switchovers and failovers.
    
-   The database proxy feature is enabled for the RDS instance, and the database proxy version is 2.9.1 or later. For more information, see [Enable the database proxy feature](/help/en/rds/apsaradb-rds-for-mysql/enable-and-configure-the-dedicated-proxy-feature-for-an-apsaradb-rds-for-mysql-instance).
    

### **Procedure**

1.  Log on to the ApsaraDB RDS console and go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which your RDS instance resides, find the RDS instance, and then click the instance ID.
    
2.  In the left-side navigation pane, click **Database Proxy**.
    
3.  In the **Basic Information** section, click **Enabled** to the right of **Persistent Connections**.
    
    **Note**
    
    If you do not find Persistent Connections, your RDS instance does not meet the prerequisites.
    

## **Use persistent connections**

### **Prerequisites**

-   The database proxy feature is enabled for your RDS instance.
    
-   Persistent connections are enabled for your RDS instance.
    

### **Procedure**

1.  Log on to the ApsaraDB RDS console and go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which your RDS instance resides, find the RDS instance, and then click the instance ID.
    
2.  In the left-side navigation pane, click **Database Proxy**.
    
3.  Configure the connection settings for the required database proxy endpoint based on your business requirements. For more information, see [Configure the connection settings for a database proxy endpoint](/help/en/rds/apsaradb-rds-for-mysql/configure-access-policies-for-a-database-proxy-endpoint). Set **Read/Write Attributes** to **Read/Write (Read/Write Splitting)**.
    
4.  Apply for an internal or public endpoint for the required database proxy endpoint based on your business requirements. For more information, see [Manage database proxy endpoints](/help/en/rds/apsaradb-rds-for-mysql/manage-the-dedicated-proxy-endpoints-of-an-apsaradb-rds-for-mysql-instance).
    
5.  You can use the port and internal or public endpoint of the required database proxy endpoint to connect your RDS instance to an application.
    
6.  When O&M operations that trigger switchovers are performed on your RDS instance, the database proxy feature helps ensure persistent connections. This way, the connections that are established by using the database proxy endpoint between the applications and database proxies are kept alive.
    

### **Limits**

During a switchover, persistent connections are not supported in the following scenarios:

-   The MySQL server does not return the entire result set of a connection. For example, if a result set that is 100 MB in size exists, only 50 MB of the result set is returned. The remaining result set is being returned.
    
-   Transactions that are not committed exist.
    
-   The CHANGE USER statement is executed on a connection.
    
-   The LOAD DATA statement is executed on a connection.
    
-   Temporary tables exist.
    
-   The connection for the subscription to binary logs by using a database proxy endpoint exists.
    
-   The FOUND\_ROWS, ROW\_COUNT, and LAST\_INSERT\_ID functions are not supported. You can call the functions, but the call results may be inaccurate. The use of `SELECT FOUND_ROWS()` is no longer recommended by MySQL. We recommend that you replace `SELECT FOUND_ROWS()` with `SELECT COUNT(*) FROM tb1`. For more information, see [FOUND\_ROWS()](https://dev.mysql.com/doc/refman/8.0/en/information-functions.html#function_found-rows).
    

### **Usage notes**

-   If you execute the `SELECT CONNECTION_ID()` statement to query the thread ID of your connection, the thread ID of the connection may change due to reconnections.
    
-   The IP addresses and port numbers that are displayed in the output of the `SHOW PROCESSLIST` statement or on the **SQL Explorer** page may be different from the IP addresses and port numbers of the client due to reconnections.
    
-   If user-defined variables exist on a connection and the connection is kept alive, the user-defined variables become invalid.
    

## Disable persistent connections

### Prerequisites

Persistent connections are enabled for your RDS instance.

### **Procedure**

1.  Log on to the ApsaraDB RDS console and go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which your RDS instance resides, find the RDS instance, and then click the instance ID.
    
2.  In the left-side navigation pane, click **Database Proxy**.
    
3.  In the **Basic Information** section, click **Disable** to the right of **Persistent Connections**.
    

## **Testing**

This section describes the test on persistent connections during switchovers.

### **Test environment**

-   The following list describes the RDS instance that is used for the test:
    
    -   The RDS instance runs MySQL 8.0 on RDS High-availability Edition.
        
    -   The RDS instance uses the mysql.x2.xlarge.2c instance type. This instance type belongs to the dedicated instance family and provides 8 CPU cores and 16 GB of memory.
        
-   Test tool: Sysbench
    
-   Test data:
    
    -   100 tables are prepared, and each table contains 40,000 entries of data.
        
    -   The number of concurrent threads is 128.
        

### **Test method**

In different O&M scenarios, test the ratios of connections that are kept alive on an RDS instance before and after O&M operations that trigger switchovers are performed.

Execute the following test statement:

```
sysbench --db-driver=mysql --mysql-host=127.X.X.1 --mysql-port=3306 --mysql-user=username --mysql-password='' --tables=100 --table-size=40000 --threads=128 --mysql-db=sbtest --report-interval=5  --time=600 oltp_read_write run
```

**Note**

The following section describes the key parameters in the preceding test statement:

-   db-driver: the database engine.
    
-   mysql-host: the database proxy endpoint.
    
-   tables: the number of tables in the database.
    
-   table-size: the number of entries that each table contains.
    
-   threads: the number of concurrent threads.
    
-   time: the test duration. Unit: seconds.
    

### **Test results**

In the following O&M scenarios, the ratios of connections that are kept alive on the RDS instance are 100%.

**Switchover**

**Ratio of connections that are kept alive**

Update of the minor engine version

100%

Primary/secondary switchovers

100%

Change of the configuration of a primary RDS instance

100%

Modifications to the parameters for which a restart is required for the modifications to take effect

100%

## **Related operations**

**Operation**

**Description**

[ModifyDBProxy](/help/en/rds/api-enable-or-disable-the-dedicated-proxy-feature#doc-api-Rds-ModifyDBProxy)

Modifies the database proxy feature of an instance.

[DescribeDBProxy](/help/en/rds/api-query-dedicated-proxy-details#doc-api-Rds-DescribeDBProxy)

Queries the details of the database proxy of an instance.

## **References**

[Enable the database proxy feature](/help/en/rds/apsaradb-rds-for-mysql/enable-and-configure-the-dedicated-proxy-feature-for-an-apsaradb-rds-for-mysql-instance)
