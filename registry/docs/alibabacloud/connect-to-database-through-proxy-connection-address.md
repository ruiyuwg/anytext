In business scenarios such as read/write splitting and processing of highly concurrent read and write operations, we recommend that you use a database proxy endpoint in your application to connect to your ApsaraDB RDS for PostgreSQL instance. This way, the system can allocate requests based on the read/write attribute and read weight that you configured for the database proxy endpoint to reduce the loads on the primary RDS instance. This topic describes how to connect to an RDS instance by using a database proxy endpoint.

## **Prerequisites**

-   The database proxy feature is enabled for your RDS instance. For more information, see [Enable the database proxy feature](/help/en/rds/apsaradb-rds-for-postgresql/enable-and-configure-the-database-proxy-feature-for-an-apsaradb-rds-for-postgresql-instance#task-2199127).
    
-   The connection settings are configured for the database proxy in your RDS instance. For more information, see [Configure the connection settings for a database proxy endpoint](/help/en/rds/apsaradb-rds-for-postgresql/configure-satabase-proxy-connection-address-access-policy).
    

## **Procedure**

### **View and manage the database proxy endpoint and port**

You can view and manage the database proxy endpoint and the port that is associated with the database proxy endpoint for your RDS instance in the ApsaraDB RDS console by using one of the following methods:

#### Perform operations on the **Database Proxy** page

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Database Proxy**.
    
3.  In the **Connection Information** section, view the database proxy endpoint and the port that is associated with the endpoint.
    
    **Note**
    
    -   You can modify the prefix of the database proxy endpoint and the port that is associated with the database proxy endpoint. You can also apply for a public endpoint for the database proxy endpoint. For more information, see [Manage the database proxy endpoints](/help/en/rds/apsaradb-rds-for-postgresql/manage-the-database-proxy-endpoints-of-an-apsaradb-rds-for-postgresql-instance).
        
    -   If you want to configure connection settings for the database proxy endpoint, you can follow the instructions provided in [Configure the connection settings for a database proxy endpoint](/help/en/rds/apsaradb-rds-for-postgresql/configure-satabase-proxy-connection-address-access-policy).
        
    

#### Perform operations on the **Database Connection** page

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Database Connection**.
    
3.  In the **Database Proxy Endpoint** section, view the database proxy endpoint and the port that is associated with the database proxy endpoint.
    
    **Note**
    
    -   On the **Database Connection** page, you can apply for and release a public endpoint.
        
    -   On the **Database Connection** page, you can perform more operations that are related to the database proxy endpoint. For more information, see [Manage the database proxy endpoints](/help/en/rds/apsaradb-rds-for-postgresql/manage-the-database-proxy-endpoints-of-an-apsaradb-rds-for-postgresql-instance).
        
    -   If you want to configure connection settings for the database proxy endpoint, you can follow the instructions provided in [Configure the connection settings for a database proxy endpoint](/help/en/rds/apsaradb-rds-for-postgresql/configure-satabase-proxy-connection-address-access-policy).
        
    

### **Connect to an RDS instance**

After you obtain the database proxy endpoint and the port that is associated with the database proxy endpoint, you can use the endpoint to connect to your RDS instance. For more information, see [Connect to an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/connect-to-an-apsaradb-rds-for-postgresql-instance).

## **References**

-   [Connect to an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/connect-to-an-apsaradb-rds-for-postgresql-instance)
    
-   [Configure the connection settings for a database proxy endpoint](/help/en/rds/apsaradb-rds-for-postgresql/configure-satabase-proxy-connection-address-access-policy)
    

## **Related operations**

**API**

**Description**

[DescribeDBProxy](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describedbproxy-postgresql)

Queries the details of a database proxy.

[DescribeDBProxyEndpoint](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describedbproxyendpoint-postgresql)

Queries the endpoint of a database proxy.

[ModifyDBProxyEndpoint](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifydbproxyendpoint-postgresql)

Modifies the connection settings for a database proxy endpoint.
