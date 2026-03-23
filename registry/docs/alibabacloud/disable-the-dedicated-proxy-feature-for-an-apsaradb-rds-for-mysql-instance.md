This topic describes how to disable the database proxy feature for an ApsaraDB RDS for MySQL instance. If your RDS instance has a small number of read requests or you no longer use the database proxy feature, you can disable the feature.

## Prerequisites

The database proxy feature is enabled. For more information, see [Enable the database proxy feature](/help/en/rds/apsaradb-rds-for-mysql/enable-and-configure-the-dedicated-proxy-feature-for-an-apsaradb-rds-for-mysql-instance#task-2167178).

## **Usage notes**

If you disable the database proxy feature, issues in the following aspects may occur:

-   **Read/write splitting**: If you use the database proxy feature to implement read/write splitting, the application can no longer automatically distinguish read requests from write requests or forward read requests to read-only RDS instances after your disable the feature. As a result, all requests are sent to the primary RDS instance. This may cause heavy loads on the primary RDS instance and affect the performance and stability of your database system.
    
-   **Connections**: If you use the database proxy endpoint to connect your application to an RDS instance, the application and the RDS instance are disconnected after you disable the database proxy feature.
    
-   **Connection management**: The database proxy feature provides various capabilities, such as connection pool management and persistent connections. If you disable the feature, you must create a program in your application to manage the database connections. This may increase the overheads to establish and destroy connections and affect performance.
    
-   **Security**: The database proxy feature helps ensure data security by using multiple methods such as access control and security policy configuration. If you disable the feature, your RDS instance is exposed and can be exploited by attackers.
    
-   **O&M**: The database proxy feature can be used for monitoring, log collection, and fault detection. After you disable the feature, you may need to use other methods to perform the preceding operations. This increases the O&M complexity and workload.
    
-   **Performance**: A direct database connection shortens the network link and improves communication efficiency within specific areas. However, the optimization capabilities of the database proxy feature, such as query caching and connection reuse, become unavailable. This negatively affects performance in high-concurrency scenarios.
    
-   **Compatibility**: If an application relies on special capabilities or protocol translations provided by the database proxy feature, direct database connections may cause compatibility issues.
    
-   **Failover and high availability**: In specific scenarios, the database proxy feature can be used for fault detection and automatic failover. If you disable the feature, you must manually perform the preceding operations. This affects service availability.
    
-   **Instance connections**: After you disable the database proxy feature, the database proxy endpoint (formerly proxy terminal) is released. Your application cannot connect to the RDS instance by using the internal or public endpoint of the database proxy endpoint and existing connections are interrupted. The endpoints of the RDS instance are not affected.
    
-   If you enable the database proxy feature after you disable the feature, the database proxy endpoints change.
    

## Procedure

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Database Proxy**.
    
3.  In the upper-right corner, click Disable Database Proxy.
    
4.  In the dialog box that appears, click **OK**.
    

## References

-   [Enable the database proxy feature](/help/en/rds/apsaradb-rds-for-mysql/enable-and-configure-the-dedicated-proxy-feature-for-an-apsaradb-rds-for-mysql-instance)
    
-   [Configure the connection settings for a database proxy endpoint](/help/en/rds/apsaradb-rds-for-mysql/configure-access-policies-for-a-database-proxy-endpoint)
    

## Related operations

**Operation**

**Description**

[ModifyDBProxy](/help/en/rds/api-enable-or-disable-the-dedicated-proxy-feature#doc-api-Rds-ModifyDBProxy)

Disables the database proxy feature for an instance. To disable the feature, you must set the **ConfigDBProxyService** parameter to **Shutdown** and configure other parameters based on your business requirements.

[DescribeDBProxy](/help/en/rds/api-query-dedicated-proxy-details#doc-api-Rds-DescribeDBProxy)

Queries the details of a database proxy of an instance.
