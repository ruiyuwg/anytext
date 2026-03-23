In business scenarios such as read/write splitting and processing of highly concurrent read operations, we recommend that you use a database proxy endpoint in your application to connect to your ApsaraDB RDS for MySQL instance. This way, the system can distribute requests based on the read and write attributes and the read weight that you configure for the database proxy endpoint to reduce the loads on the primary RDS instance. This topic describes how to view, manage, and use database proxy endpoints.

## Prerequisites

The database proxy feature is enabled. For more information, see [Enable the database proxy feature](/help/en/rds/apsaradb-rds-for-mysql/enable-and-configure-the-dedicated-proxy-feature-for-an-apsaradb-rds-for-mysql-instance#task-2167178).

## **Procedure**

### **View and manage the database proxy endpoint and port**

You can view and manage the database proxy endpoint and the port that is associated with the database proxy endpoint for your RDS instance in the ApsaraDB RDS console by using one of the following methods:

## Perform operations on the Database Proxy page

1.  Log on to the ApsaraDB RDS console and go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the instance ID.
    
2.  In the left-side navigation pane, click **Database Proxy**.
    
3.  In the **Connection Information** section, view the database proxy endpoint and the port that is associated with the database proxy endpoint.
    

**Note**

You can modify the prefix of the database proxy endpoint and the port that is associated with the database proxy endpoint. You can also apply for a public endpoint for the database proxy endpoint. For more information, see [Manage database proxy endpoints](/help/en/rds/apsaradb-rds-for-mysql/manage-the-dedicated-proxy-endpoints-of-an-apsaradb-rds-for-mysql-instance).

If you want to configure connection settings for the database proxy endpoint, you can follow the instructions provided in [Configure the connection settings for a database proxy endpoint](/help/en/rds/apsaradb-rds-for-mysql/configure-access-policies-for-a-database-proxy-endpoint).

## Perform operations on the Database Connection page

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the instance ID.
    
2.  In the left-side navigation pane, click **Database Connection**.
    
3.  In the **Database Connection** section, view the database proxy endpoint and the port that is associated with the database proxy endpoint.
    

**Note**

-   On the **Database Connection** page, you modify the database proxy endpoint and the port that is associated with the database proxy endpoint and apply for a public endpoint. To perform more operations, you can go to the **Database Proxy** page. For more information, see [Manage the dedicated proxy endpoints](/help/en/rds/apsaradb-rds-for-mysql/manage-the-dedicated-proxy-endpoints-of-an-apsaradb-rds-for-mysql-instance).
    
-   If you want to configure connection settings for the database proxy endpoint, you can follow the instructions provided in [Configure the connection settings for a database proxy endpoint](/help/en/rds/apsaradb-rds-for-mysql/configure-access-policies-for-a-database-proxy-endpoint).
    

### **Connect to an RDS instance**

After you obtain the database proxy endpoint and the port that is associated with the database proxy, you can use a client, the CLI, or an application to connect to your RDS instance. You cannot use the internal endpoint of the obtained database proxy endpoint to connect to your RDS instance in the Data Management (DMS) console. For more information about connection methods, see the following topics:

-   [Use a client or the CLI to connect to an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/use-a-client-or-cli-to-connect-to-an-apsaradb-rds-for-mysql-instance)
    
-   [Use an application to connect to an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/use-an-application-to-connect-to-an-apsaradb-rds-for-mysql-instance)
    

## **References**

-   [Database connection](/help/en/rds/apsaradb-rds-for-mysql/database-connection-1/)
    
-   [Configure the connection settings for a database proxy endpoint](/help/en/rds/apsaradb-rds-for-mysql/configure-access-policies-for-a-database-proxy-endpoint)
    

## **Related operations**

**Operation**

**Description**

[DescribeDBProxy](/help/en/rds/api-query-dedicated-proxy-details#doc-api-Rds-DescribeDBProxy)

Queries the details about the database proxy of an instance.

[DescribeDBProxyEndpoint](/help/en/rds/api-query-proxy-endpoint#doc-api-Rds-DescribeDBProxyEndpoint)

Queries the database proxy endpoint of an instance.

[ModifyDBProxyEndpoint](/help/en/rds/api-modify-proxy-terminal-settings#doc-api-Rds-ModifyDBProxyEndpoint)

Modifies the connection settings for a database proxy endpoint of an instance.
