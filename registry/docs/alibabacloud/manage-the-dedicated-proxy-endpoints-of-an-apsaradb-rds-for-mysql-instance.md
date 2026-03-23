After you enable the database proxy feature for an ApsaraDB RDS for MySQL instance, clients must use a database proxy endpoint to access the database. This topic describes the types of database proxy endpoints and explains how to configure them, including internal and public endpoints.

## **Prerequisites**

[The database proxy is enabled](/help/en/rds/apsaradb-rds-for-mysql/enable-and-configure-the-dedicated-proxy-feature-for-an-apsaradb-rds-for-mysql-instance).

## Endpoint types

-   There are three types of endpoints: **internal endpoint (virtual private cloud (VPC))**, **internal endpoint (classic network)**, and **public endpoint**.
    
-   When you [enable the database proxy](/help/en/rds/apsaradb-rds-for-mysql/enable-and-configure-the-dedicated-proxy-feature-for-an-apsaradb-rds-for-mysql-instance#task-2167178), one database proxy endpoint is created by default. When you add a new database proxy endpoint, an internal endpoint (VPC) is created by default. You can then request a public endpoint.
    

**Note**

A single ApsaraDB RDS for MySQL instance supports 1 to 7 database proxy endpoints. For each database proxy endpoint, you can request one internal endpoint (VPC) and one public endpoint.

-   Starting from December 7, 2023, Alibaba Cloud no longer lets you create new database proxy endpoints of the classic network type. Existing proxies with internal endpoints (classic network) can continue to be used. However, if you release an internal endpoint (classic network), you cannot request it again. For more information, see [\[Deprecation/Offline\] ApsaraDB RDS for MySQL database proxy stops supporting new internal endpoints (classic network)](/help/en/rds/apsaradb-rds-for-mysql/classic-network-type-endpoints-can-no-longer-be-created-for-the-database-proxies-of-apsaradb-rds-for-mysql-instances).
    

## Set a proxy endpoint

### **Add proxy endpoint (formerly proxy terminal)**

**Note**

-   After you enable the database proxy, you can add database proxy endpoints and configure different access policies as needed.
    
-   A single ApsaraDB RDS for MySQL instance supports 1 to 7 database proxy endpoints.
    
-   The following shows the structure of a database proxy endpoint, using `rm-*****.rwlb.cn-chengdu.rds.aliyuncs.com:3306` as an example:
    
    -   `rm-*****`: The prefix of the endpoint. You can customize this prefix. The prefix must start with a lowercase letter, be 2 to 40 characters in length, and can contain letters, digits, and hyphens (-).
        
    -   `rwlb`: The identifier for the read/write splitting proxy.
        
    -   `cn-chengdu`: The region.
        
    -   `rds.aliyuncs.com`: The domain name for the Alibaba Cloud RDS service.
        
    -   `3306`: The default port for MySQL.
        

1.  Go to the [RDS Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. Select a region at the top, and then click the ID of the target instance.
    
2.  In the navigation pane on the left, click **Database Proxy**.
    
3.  At the top of the **Connection Information** section, click **Add Database Proxy Endpoint**.
    
4.  In the dialog box that appears, configure the access policy for the database proxy endpoint and click **OK**. For more information, see [Configure a database proxy endpoint access policy](/help/en/rds/apsaradb-rds-for-mysql/configure-access-policies-for-a-database-proxy-endpoint#64f24cd0813ri).
    

### **Switch the vSwitch for a database proxy endpoint**

1.  Go to the [RDS Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. Select a region at the top, and then click the ID of the target instance.
    
2.  In the navigation pane on the left, click **Database Proxy**.
    
3.  In the **Connection Information** section, under **Network Information** for the target database proxy endpoint, click **Switch VSwitch**.
    
    **Important**
    
    -   Only cloud disk instances support switching the vSwitch for a database proxy endpoint. Local disk instances do not support this feature.
        
    -   When you switch the vSwitch, the database proxy connection experiences a transient disconnection that lasts about 30 seconds. Services connected directly through the instance endpoint are not affected. Switch the vSwitch during off-peak hours or temporarily switch your application connections to the endpoint of the primary or a read-only instance. Ensure your application has an automatic reconnection mechanism. If it does not, manually reconnect the application to the database proxy.
        
    
4.  In the dialog box that appears, select a **Target VSwitch** and a **Change Time**, and then click **OK**.
    

### **Modify a proxy endpoint or port**

1.  Go to the [RDS Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. Select a region at the top, and then click the ID of the target instance.
    
2.  In the navigation pane on the left, click **Database Proxy**.
    
3.  In the **Connection Information** section, click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0997694071/p737609.png) icon next to the target database proxy endpoint.
    
4.  In the dialog box that appears, set the connection address prefix and **Port**, and then click **OK**.
    

**Note**

If you upgraded your database proxy from a shared proxy to a Dedicated proxy, the suffix of the database proxy endpoint changes the first time you modify it.

### **Release a database proxy endpoint**

1.  Go to the [RDS Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. Select a region at the top, and then click the ID of the target instance.
    
2.  In the navigation pane on the left, click **Database Proxy**.
    
3.  Click **Delete Connection** next to the target database proxy endpoint. In the dialog box that appears, click **OK**.
    

**Note**

-   You must retain at least one database proxy endpoint.
    
-   This operation deletes the entire database proxy endpoint, including its ID, internal endpoint, and public endpoint.
    

## Configure a public endpoint for the database proxy

### **Request a public endpoint**

You can request a public endpoint from the **Database Proxy** page or the **Database Connection** page:

#### **Database Proxy page**

1.  Go to the [RDS Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. Select a region at the top, and then click the ID of the target instance.
    
2.  In the navigation pane on the left, click **Database Proxy**.
    
3.  In the **Connection Information** section, find the target database proxy endpoint. In the **Public Endpoint/Port** column, click **Request Public Endpoint**.
    
4.  In the dialog box, set the public endpoint prefix and **Port**, and then click **OK**.
    

#### **Database Connection page**

1.  Go to the [RDS Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. Select a region at the top, and then click the ID of the target instance.
    
2.  In the navigation pane on the left, click **Database Connection**.
    
3.  In the **Database Proxy Endpoint** section, click **Apply for Public Endpoint**. Set the public endpoint prefix and **Port**, and then click **OK**.
    

**Note**

-   You can request only one public endpoint for each database proxy endpoint.
    
-   Endpoint prefix: The prefix must start with a lowercase letter, be 2 to 40 characters in length, and contain only letters, digits, and hyphens (-).
    
-   Port range: 1000 to 5999.
    

### **Release a public endpoint**

You can release the resource from the following two pages:

#### **Database Proxy page**

1.  Go to the [RDS Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. Select a region at the top, and then click the ID of the target instance.
    
2.  In the navigation pane on the left, click **Database Proxy**.
    
3.  Next to the public IP address that you want to release, click **Release Public Endpoint**. In the dialog box that appears, click **OK**.
    

#### **Database Connection page**

1.  Go to the [RDS Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. Select a region at the top, and then click the ID of the target instance.
    
2.  In the navigation pane on the left, click **Database Connection**.
    
3.  In the **Database Proxy Connection** section, next to the public endpoint that you want to release, click **Release Public Endpoint**. In the dialog box that appears, click **OK**.
    

## References

-   [Configure an access policy for a database proxy endpoint](/help/en/rds/apsaradb-rds-for-mysql/configure-access-policies-for-a-database-proxy-endpoint)
    
-   [View and manage instance endpoints and ports](/help/en/rds/apsaradb-rds-for-mysql/view-and-change-the-internal-and-public-endpoints-and-port-numbers-of-an-apsaradb-rds-for-mysql-instance)
    

## Related API operations

**API**

**Description**

[DescribeDBProxy](/help/en/rds/api-query-dedicated-proxy-details#doc-api-Rds-DescribeDBProxy)

Queries the details of the database proxy for an RDS instance.

[DescribeDBProxyEndpoint](/help/en/rds/api-query-proxy-endpoint#doc-api-Rds-DescribeDBProxyEndpoint)

Queries the information about the proxy endpoint of the database proxy for an RDS instance.

[ModifyDBProxyEndpoint](/help/en/rds/api-modify-proxy-terminal-settings#doc-api-Rds-ModifyDBProxyEndpoint)

Modifies the settings of the proxy endpoint of the database proxy for an RDS instance.

[CreateDBProxyEndpointAddress](/help/en/rds/api-create-proxy-endpoint#doc-api-Rds-CreateDBProxyEndpointAddress)

Creates an endpoint for a database proxy.

[ModifyDBProxyEndpointAddress](/help/en/rds/api-modify-proxy-endpoint#doc-api-Rds-ModifyDBProxyEndpointAddress)

Modifies an endpoint of a database proxy.

[DeleteDBProxyEndpointAddress](/help/en/rds/api-delete-proxy-endpoint#doc-api-Rds-DeleteDBProxyEndpointAddress)

Deletes an endpoint of a database proxy.
