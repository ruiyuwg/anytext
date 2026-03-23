If connections such as short-lived connections are frequently established between your application and ApsaraDB RDS for MySQL instance or the maximum number of connections that is allowed to the RDS instance is reached, you can use connection pooling of the database proxy feature. Connection pooling can reduce the frequency at which your application connects to the RDS instance, the main thread overhead of the RDS instance, and the total number of connections to the RDS instance.

## Select a **connection pooling** type

ApsaraDB RDS for MySQL supports transaction-level connection pooling and session-level connection pooling. You can determine whether to use connection pooling and the type of connection pooling based on your business requirements.

**Type**

**Scenario**

Transaction-level connection pooling (recommend)

Short-lived connections are required in workloads, connections are frequently established, and the number of connections reaches the maximum number of connections supported by an RDS instance.

The limits on transaction-level connection pooling do not affect your workloads. For more information, see [Limits of transaction connection pools](#fd90214e12ooz).

Session-level connection pooling

Short-lived connections are required in workloads, and connections are frequently established. However, the limits on transaction-level connection pooling affect your workloads.

Connection pooling is disabled

Persistent connections are required in workloads, a small number of connections are established, and connection pools, such as Druid, DBCP, c3p0, and HikariCP, are used in your applications.

## Introduction to connection pooling types

## Transaction-level connection pooling (recommended)

### **Scenarios**

-   In most cases, short-lived connections are required in workloads.
    
-   Connections are frequently established.
    
-   The number of connections reaches the maximum number of connections supported by an RDS instance.
    

### **Benefits**

-   Transaction-level connection pooling reduces the frequency at which your application connects to the RDS instance and the main thread overhead of the RDS instance.
    
-   Transaction-level connection pooling reduces the total number of connections to the RDS instance.
    

### **Working principle**

If transaction-level connection pooling is enabled, your client first connects to the database proxy when it initiates a request. The database proxy does not immediately establish a backend connection to the database. When the request needs to be processed, the database proxy searches the connection pool for an available backend connection.

**Note**

If the values of the `user` and `dbname` parameters are the same as the values of specified system variables, the connection is considered available.

-   If an available backend connection exists, the connection is used. After the transaction in the request is complete, the connection is reclaimed by the connection pool.
    
-   If no available backend connections exist, a new backend connection is established.
    

Transaction-level connection pooling allows multiple sessions to share one backend connection. Connections with active transactions occupy backend connections while connections with inactive transactions do not occupy backend connections.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0363107371/CAEQMhiBgMDVsKS4oxkiIDg4N2ViZmY0OTY3OTRmNzliNWVkYTNhMDZkYmQwMDVl4078177_20231213141200.463.svg)

Within a period of time, the same backend connection can process the transactions in multiple **ongoing** sessions. This provides the following benefits:

-   The frequency of connections to the database is reduced.
    
    The backend connection can keep alive for a period of time to reduce the connection frequency and the main thread overhead of the database.
    
-   The total number of connections to the database is reduced.
    
    Multiple ongoing sessions in share a backend connection. This prevents idle connections from occupying backend connection resources and reduces the total number of connections to the database. In an idle connection, the frontend connection becomes inactive when the session is not terminated.
    

**Note**

The database proxy feature does not limit the maximum number of connections. The number varies based on the specifications of your RDS instance.

### **Limits**

-   When you perform one of the following operations, a connection is locked until the connection is closed. This indicates that the connection cannot be reclaimed by its connection pool.
    
    -   Execute the PREPARE statement.
        
    -   Create a temporary table.
        
    -   Modify a user variable.
        
    -   Process large packets, such as a packet of 16 MB or a larger size.
        
    -   Execute the LOCK TABLE statement.
        
    -   Run a multi-statement query.
        
    -   Call a stored procedure.
        
-   The FOUND\_ROWS, ROW\_COUNT, and LAST\_INSERT\_ID functions are not supported. You can call these functions, but the results that are returned by these functions may be inaccurate.
    
    -   If the database proxy version that you use is V1.13.11 or later, you can execute the `SELECT FOUND_ROWS()` statement after the `SELECT SQL_CALC_FOUND_ROWS * FROM t1 LIMIT *` statement. This method is no longer recommended by open source MySQL. You can replace the `SELECT FOUND_ROWS()` statement with the `SELECT COUNT(*) FROM tb1` statement. For more information, see [FOUND\_ROWS()](https://dev.mysql.com/doc/refman/8.0/en/information-functions.html#function_found-rows).
        
    -   If the database proxy version that you use is V1.13.11 or later, you can execute the `SELECT LAST_INSERT_ID()` statement after the `INSERT` statement. This ensures the accuracy of query results.
        

### **Usage notes**

-   If you configure the `wait_timeout` parameter, the value of the `wait_timeout` parameter may not take effect on your client. This is because the database proxy selects a connection from the connection pool each time your client initiates a request. When the time that is specified by the `wait_timeout` parameter elapses, only the backend connections are closed and the connections to your client remain open.
    
-   Transaction-level connection pooling matches the following variables in requests: `sql_mode`, `character_set_server`, `collation_server`, and `time_zone`. If a request includes other session-level system variables, you must explicitly execute the SET statement on your client to configure these variables after the connection is established for the request. Otherwise, a connection whose system variables are reconfigured may be selected from the connection pool and reused.
    
-   You can execute the `SELECT CONNECTION_ID()` statement to query the thread ID of a connection to determine whether the connection is reused.
    
-   If an existing connection is reused, the IP address and port number that are returned by the `SHOW PROCESSLIST` statement or the SQL Explorer and Audit feature may differ from the actual IP address and port number of your client. For more information, see [Use the SQL Explorer and Audit feature](/help/en/rds/apsaradb-rds-for-mysql/use-the-sql-explorer-and-audit-feature-on-an-apsaradb-rds-for-mysql-instance#task-2078931).
    
-   The database proxy merges the results that are obtained by the `SHOW PROCESSLIST` statement from all the primary, secondary, and read-only RDS instances. Then, the database proxy returns a result set to your application. If you enable transaction-level connection pooling, the thread ID of the frontend connection differs from the thread ID of the backend connection. As a result, an error may be returned for the kill command even if a process is successfully terminated. In this case, you can execute the `SHOW PROCESSLIST statement` again to check whether the process is terminated.
    

## Session-level connection pooling

### **Scenarios**

-   In most cases, short-lived connections are required in workloads.
    
-   Connections are frequently established.
    

### **Benefits**

Transaction-level connection pooling reduces the frequency at which your application connects to the RDS instance and the main thread overhead of the RDS instance.

### **Working principle**

**Frontend connection and backend connection**

The connection between a client and a database is divided by a database proxy into two parts: frontend connection and backend connection. The frontend connection refers to the connection between the client and the database proxy. The backend connection refers to the connection between the database proxy and the database. A client can be an application.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0363107371/CAEQMhiBgMDzuaS4oxkiIGQyMGZhZTljMzZkYTRiMzBiNDE3YTA0YmVkMGIyN2Iw4078177_20231213145221.551.svg)

**Connection establishment with connection pooling disabled**

If connection pooling is disabled, a frontend connection and a backend connection must be established for each session initiated by the client. This increases the main thread overhead of the database.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0363107371/CAEQMhiBgIChuqS4oxkiIDVjZTcxZDhiZDMyNzQ0YjRiN2JmOTk4ZmE4Nzg1NTI14078177_20231213144544.080.svg)

**How session-level connection pooling works**

If you enable session-level connection pooling, a frontend connection is established when your client initiates a session. Then, the system searches the connection pool for an available backend connection.

**Note**

If the values of the user, clientip, and dbname parameters of a backend connection match, the backend connection is considered available.

-   If an available backend connection exists, the connection is used.
    
-   If no available backend connections exist, a new backend connection is established.
    

After the session ends, the frontend connection is closed and the backend connection is reclaimed by the connection pool. When a new session is initiated, the backend connection can be directly used. This reduces the main thread overhead of the database.

The following figure shows the process of establishing a connection.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0363107371/CAEQMhiBgMCsuqS4oxkiIDU2Zjk5MWM5N2JkNDQ0ZTg4OWQ1MTQxZDZjNzYzOTIy4078177_20231213142657.732.svg)

If you use session-level connection pooling, one session occupies one backend connection. The backend connection is reclaimed by the connection pool only after the session ends.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0363107371/CAEQMhiBgIDUuqS4oxkiIGZkY2IwOGUyZTk1ZjQ0OGNhNWQzMjEwYTgzODJkZGE24078177_20231213131921.455.svg)

### **Limits**

N/A.

### **Usage notes**

Before a session ends, the backend connection of the session cannot be used by other sessions even if the session is idle and no transactions need to be processed. As a result, the total number of connections to the database does not decrease.

## Configure the connection pooling feature

### **Prerequisites**

The database proxy feature is enabled. For more information, see [Enable the database proxy feature](/help/en/rds/apsaradb-rds-for-mysql/enable-and-configure-the-dedicated-proxy-feature-for-an-apsaradb-rds-for-mysql-instance).

### **Usage notes**

-   The connection pooling feature does not support IP-specific permissions for an account. If you enable the connection pooling feature and grant access permissions on a database or table to an account that uses different IP addresses, a permission error may occur. For example, an account has permissions on database\_a when it logs on from the 192.xx.xx.1 IP address, but the account does not have permissions on database\_a when it logs on from the 192.xx.xx.2 IP address. In this case, permission errors may occur when the existing connections are reused.
    
-   The connection pooling feature that is provided in the database proxy of your database system does not affect the connection pools that is provided in your application. If your application provides a connection pool, you do not need to enable the connection pooling feature for your database system.
    
-   The connection pooling feature cannot solve the problem of connection accumulation that is caused by a large number of slow SQL queries. We recommend that you optimize related SQL statements or troubleshoot the issue on the RDS instance.
    
-   If the database proxy version is earlier than 2.9.1, you cannot configure connection pooling for the database proxy endpoint that has the read-only attribute. If the database proxy version is 2.9.1 or later, you can configure connection pooling for the database proxy endpoint that has the read/write or read-only attribute.
    

### **Procedure**

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Database Proxy**.
    
3.  In the **Connection Information** section, enable the connection pooling feature by using one of the following methods:
    
    **Note**
    
    -   By default, the connection pooling feature is disabled.
        
    -   After the connection pooling type is changed, the modification takes effect only for new connections.
        
    
    -   Method 1: Move the pointer over the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2113655071/p748277.png) icon to the right of the database proxy endpoint for which you want to configure connection pooling. In the dialog box that appears, click **Enable Transaction-level Connection Pooling** or **Enable Session-level Connection Pooling**. In the dialog box that appears, click **OK**.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2113655071/p748177.png)
        
    -   Method 2: Find the database proxy endpoint for which you want to configure connection pooling and click **Modify Configuration** in the **Actions** column. In the dialog box that appears, select the required type of the connection pool to the right of **Connection Pooling**.
        
        **Note**
        
        If the connection pooling feature is enabled, you can change the connection pool type.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2113655071/p743064.png)
        

## Related operations

**Operation**

**Description**

[DescribeDBProxy](/help/en/rds/developer-reference/api-rds-2014-08-15-describedbproxy)

Queries the details about the dedicated proxy of an ApsaraDB RDS instance.

[DescribeDBProxyEndpoint](/help/en/rds/apsaradb-rds-for-mysql/api-rds-2014-08-15-describedbproxyendpoint-mysql)

Queries the information about a database proxy endpoint.

[ModifyDBProxyEndpoint](/help/en/rds/apsaradb-rds-for-mysql/api-rds-2014-08-15-modifydbproxyendpoint-mysql)

Modifies the connection settings for a database proxy endpoint.

## **Terms**

-   short-lived connection: a connection that is open only for a short period of time. For example, a connection is established for a PHP application to execute a simple query, and then closed. The advantage is that connection resources are not occupied for a long period of time. The disadvantage is that a connection must be established each time a client initiates a request. This increases main thread overhead of your database.
    
-   persistent connection: a connection that is open for a long period of time. For example, a web server or an application server establishes a number of connections to the MySQL server and keeps the connections open until the web server or the application server stops. The advantage is that connections are established at a low frequency, which reduces the main thread overhead. The disadvantage is that the connection resources are occupied for a long period of time.
    

## **FAQ**

What is the maximum number of connections for enabling the connection pooling feature?

If the number of connections may exceed the maximum number of connections that are supported by your RDS instance, we recommend that you enable transaction-level connection pooling.

How long can the connections in the connection pool be kept alive?

The connections in the connection pool can be kept alive for 10 seconds.

Does the connection pooling feature affect instance performance?

After the connection pooling feature is enabled, instance performance is improved by about 10% in short-lived connection scenarios.

What are the differences between transaction-level connection pooling and session-level connection pooling?

Transaction-level connection pooling not only reduces the main thread overhead of an RDS instance, but also reduces the total number of connections to the RDS instance.

Session-level connection pooling can only reduce the main thread overhead of the RDS instance, but cannot reduce the total number of connections to the RDS instance.

How does transaction-level connection pooling work differently from session-level connection pooling?

**Type**

**Sessions share backend connections**

**Time when backend connections are used**

**Time when backend connections are reclaimed**

**Mapping between sessions and backend connections**

Transaction-level connection pooling

Yes

A transaction is being processed.

A transaction is complete. The session may not end.

N:1

Session-level connection pooling

No

A session is being created.

A session ends.

N:N

The database proxy is disconnected from my application. Does the disconnection occur because both the application and the database proxy are using the connection pooling feature?

The cause of the disconnection varies based on actual conditions. It is not necessarily caused by the application and the database proxy using the connection pooling feature.
