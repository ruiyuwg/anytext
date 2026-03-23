After you enable the database proxy feature for an ApsaraDB RDS for PostgreSQL instance, the system generates a default proxy endpoint. You can create additional proxy endpoints, modify endpoint prefixes and ports, apply for or release public endpoints, and delete proxy endpoints that you no longer need.

## Prerequisites

Before you begin, make sure that you have:

-   The database proxy feature enabled. For more information, see [Enable the database proxy feature](/help/en/rds/apsaradb-rds-for-postgresql/enable-and-configure-the-database-proxy-feature-for-an-apsaradb-rds-for-postgresql-instance)
    

## Limits

**Item**

**Limit**

Database proxy endpoints per instance

Up to 7

Internal (VPC) endpoints per proxy endpoint

1 (automatically allocated; cannot be deleted)

Public endpoints per proxy endpoint

1

Endpoint prefix length

2 to 40 characters; lowercase letters, digits, and hyphens (-); must start with a lowercase letter

Public endpoint prefix length

2 to 40 characters; lowercase letters, digits, and hyphens (-); must start with a lowercase letter

Port range

1000 to 65534

Default proxy endpoint

Cannot be deleted

> Database proxy endpoints were formerly known as proxy terminals.

## Create a database proxy endpoint

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region of your RDS instance and click the instance ID.
    
2.  In the left-side navigation pane, click **Database Proxy**.
    
3.  In the **Connection Information** section, click **Create Proxy Endpoint**.
    
4.  In the dialog box, configure the connection settings. > **Note:** For more information about the connection settings, see [Configure the connection settings for a database proxy endpoint](/help/en/rds/apsaradb-rds-for-postgresql/configure-satabase-proxy-connection-address-access-policy).
    
5.  Click **OK**.
    

After the proxy endpoint is created, the system allocates a virtual private cloud (VPC) internal endpoint for it. The allocation may take a few moments to complete. This internal endpoint cannot be deleted.

## Modify a database proxy endpoint

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region of your RDS instance and click the instance ID.
    
2.  In the left-side navigation pane, click **Database Proxy**.
    
3.  In the **Connection Information** section, find the proxy endpoint and click the ![edit icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9161864071/p739439.png) icon to its right.
    
4.  In the dialog box, modify the **Endpoint** prefix or the **Port** number, then click **OK**. > **Note:** The **Endpoint Type** value cannot be modified.
    

## Apply for or release a public endpoint

Each database proxy endpoint supports one public endpoint. You can release the public endpoint but cannot release the internal endpoint.

### Apply for a public endpoint

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region of your RDS instance and click the instance ID.
    
2.  In the left-side navigation pane, click **Database Proxy**.
    
3.  In the **Connection Information** section, find the proxy endpoint and click **Apply for Public Endpoint** in the **Public Endpoint/Port** column.
    
4.  Configure the **Database Proxy Endpoint** prefix and **Port**, then click **OK**.
    

### Release a public endpoint

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region of your RDS instance and click the instance ID.
    
2.  In the left-side navigation pane, click **Database Proxy**.
    
3.  In the **Connection Information** section, find the proxy endpoint and click **Release Public Endpoint** in the **Public Endpoint/Port** column.
    

## Delete a database proxy endpoint

> The default database proxy endpoint that is generated when you enable the database proxy cannot be deleted.

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region of your RDS instance and click the instance ID.
    
2.  In the left-side navigation pane, click **Database Proxy**.
    
3.  Find the proxy endpoint and click **Delete Connection** in the Actions column. In the confirmation message, click **OK**.
    

## References

-   [Configure the connection settings for a database proxy endpoint](/help/en/rds/apsaradb-rds-for-postgresql/configure-satabase-proxy-connection-address-access-policy)
    
-   [Use a database proxy endpoint to connect to an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/connect-to-database-through-proxy-connection-address)
    

## API reference

**Operation**

**Description**

[DescribeDBProxy](/help/en/rds/developer-reference/api-rds-2014-08-15-describedbproxy)

Queries the details of a database proxy

[DescribeDBProxyEndpoint](/help/en/rds/developer-reference/api-rds-2014-08-15-describedbproxyendpoint)

Queries information about a database proxy endpoint

[CreateDBProxyEndpointAddress](/help/en/rds/developer-reference/api-rds-2014-08-15-createdbproxyendpointaddress)

Creates a database proxy endpoint

[ModifyDBProxyEndpointAddress](/help/en/rds/developer-reference/api-rds-2014-08-15-modifydbproxyendpointaddress)

Modifies a database proxy endpoint

[DeleteDBProxyEndpointAddress](/help/en/rds/developer-reference/api-rds-2014-08-15-deletedbproxyendpointaddress)

Deletes a database proxy endpoint
