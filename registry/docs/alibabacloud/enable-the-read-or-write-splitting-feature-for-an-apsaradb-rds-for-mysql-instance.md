The ApsaraDB RDS for MySQL database proxy supports features such as read/write splitting, persistent connections, nearest access, transaction splitting, connection pooling, and Secure Sockets Layer (SSL) encryption. The database proxy reduces the load on your primary instance and improves instance availability and security. This topic describes how to enable the database proxy for an ApsaraDB RDS for MySQL instance in the ApsaraDB RDS console or using API operations. This topic also explains how to calculate the recommended proxy specifications.

## Prerequisites

To enable the database proxy, your primary instance must meet the following requirements:

-   **The instance runs the High-availability Edition or Cluster Edition and meets the database version requirements in the following table.** The database proxy cannot be enabled for instances that run the Basic Edition. You can upgrade a Basic Edition instance to the [High-availability Edition](/help/en/rds/apsaradb-rds-for-mysql/upgrade-an-apsaradb-rds-for-mysql-instance-from-basic-edition-to-high-availability-edition) or [Cluster Edition](/help/en/rds/apsaradb-rds-for-mysql/upgrade-from-basic-edition-to-cluster-edition).
    
    **Database engine and version**
    
    **Instance edition**
    
    **Minor engine version**
    
    MySQL 8.0
    
    High-availability Edition
    
    20190915 or later
    
    Cluster Edition
    
    No requirements
    
    MySQL 5.7
    
    High-Availability Series
    
    20190925 or later
    
    Cluster Edition
    
    No requirements
    
    MySQL 5.6
    
    High-availability Edition
    
    20200229 or later
    
-   Region: The instance is not in Zone C or Zone D of the China (Hangzhou) region.
    

**Note**

You can view the preceding information on the **Basic Information** page of your instance. In the **Configuration Information** section, if the **Upgrade Minor Engine Version** button is displayed, you can click it to view the current version. If the button is not displayed, your instance is already running the latest version. For more information, see [Upgrade the minor engine version](/help/en/rds/apsaradb-rds-for-mysql/update-the-minor-engine-version-of-an-apsaradb-rds-for-mysql-instance#concept-gnx-vgj-wdb11).

## Billing

-   General-purpose database proxies are free of charge.
    
-   Dedicated database proxies are billed on a pay-as-you-go basis. For more information, see [Database proxy fees](/help/en/rds/apsaradb-rds-for-mysql/billing-rules-for-the-dedicated-proxy-feature-of-apsaradb-rds-for-mysql#reference-2020987).
    

## Limits

The database proxy does not support the compression protocol.

## **Usage notes**

-   For Cluster Edition instances, you can use the primary and secondary nodes of the instance to implement a read/write splitting architecture.
    
-   For High-availability Edition instances, if you want to implement read/write splitting, you must [create a read-only ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/create-a-read-only-apsaradb-rds-for-mysql-instance) and enable the database proxy.
    
-   After you enable the database proxy, do not migrate the primary RDS instance to a different zone. If you migrate the primary instance, the instance and the database proxy will be in different zones. This increases database access latency and response times.
    
    **Note**
    
    If a primary/secondary failover occurs on the RDS instance because of a service failure, you can [manually switch over the primary and secondary nodes](/help/en/rds/apsaradb-rds-for-mysql/switch-workloads-over-between-primary-and-secondary-apsaradb-rds-for-mysql-instances#section-buo-04t-9l8) or [migrate the proxy to another zone](/help/en/rds/apsaradb-rds-for-mysql/migration-agent-availability-zone). This ensures that the primary zone of the RDS instance is the same as the proxy zone to minimize access latency.
    

## Procedure

**Note**

This section describes how to enable or disable the database proxy feature from the instance details page. You can also enable the database proxy feature when you create a read-only instance. For more information, see [Create a read-only ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/create-a-read-only-apsaradb-rds-for-mysql-instance#concept-ghp-wq5-vdb).

### **Enable the database proxy**

1.  Go to the [RDS Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select a region. Then, click the ID of the target instance.
    
2.  In the navigation pane on the left, click **Database Proxy**.
    
3.  Under the target proxy type, click **Enable Now**.
    
4.  In the **Enable Database Proxy** dialog box, configure the parameters described in the following table.
    
    **Parameter**
    
    **Description**
    
    **Proxy Type**
    
    The proxy type. Valid values: General-purpose and Dedicated. For more information, see [Proxy types](/help/en/rds/apsaradb-rds-for-mysql/what-are-database-proxies#171b5a307fbvc).
    
    **Deployment Method**
    
    Both single-zone and dual-zone deployments are supported. For more information, see [Agent Deployment Architecture](/help/en/rds/apsaradb-rds-for-mysql/what-are-database-proxies#4b2472beact70).
    
    **Note**
    
    We recommend that you use dual-zone deployment for the database proxy to ensure cross-zone disaster recovery and improve system availability.
    
    ****Total number of nodes****
    
    A database proxy instance consists of multiple proxy nodes and supports the following:
    
    -   2: for single-zone or dual-zone deployment
        
    -   4: for dual-zone deployment
        
    
    **Zone**
    
    The zone where the proxy nodes are located. We recommend that you select the same zone for the database proxy and the RDS instance.
    
    **CPU Cores per Proxy Node**
    
    **Important**
    
    -   Proxy nodes in the same zone must have the same specifications.
        
    -   If you deploy two proxy nodes in a dual-zone deployment, the two nodes must have the same specifications.
        
    
    -   General-purpose: 1 to 8 cores.
        
    -   Dedicated: 1 to 16 cores.
        
    
    Use the following instructions to select the appropriate specifications for a single proxy node.
    
    **Database Proxy Endpoint Zone**
    
    When you enable the proxy, a proxy endpoint is created by default. You must specify a zone for the proxy endpoint. We recommend that you select the same zone as the primary zone of the primary RDS instance.
    
    How to select appropriate specifications for a single proxy node
    
    We recommend that you calculate the specifications for a single proxy node as follows:
    
    **Proxy type**
    
    **High-availability Edition instance**
    
    **Cluster Edition instance**
    
    General-purpose
    
    `(Number of CPU cores of the primary instance + Total number of CPU cores of all its read-only instances)/4`. Round up the result.
    
    `(Number of CPU cores of the primary node + Total number of CPU cores of all its secondary nodes)/4`. Round up the result.
    
    Dedicated
    
    `(Number of CPU cores of the primary instance + Total number of CPU cores of all its read-only instances)/8`. Round up the result.
    
    `(Number of CPU cores of the primary node + Total number of CPU cores of all its secondary nodes)/8`. Round up the result.
    
    For example, you have a High-availability Edition instance. The primary instance has 8 CPU cores. Two read-only nodes are attached to the primary instance. One has 4 CPU cores and the other has 6 CPU cores. The recommended number of CPU cores for a single proxy node is `(8 + 4 + 6) / 8 = 3`.
    
5.  Click **OK**.
    
    If the **Database Proxy** tab displays the basic and connection information, the database proxy is enabled.
    
    **Category**
    
    **Parameter**
    
    **Description**
    
    **Basic Information**
    
    **Primary Instance**
    
    The ID of the ApsaraDB RDS for MySQL instance.
    
    **Proxy Instance Status**
    
    The running status of the proxy instance.
    
    **Proxy Type**
    
    The proxy type. Valid values: General-purpose and Dedicated. For more information about the differences between general-purpose and dedicated proxies, see [Proxy types](/help/en/rds/apsaradb-rds-for-mysql/what-are-database-proxies#171b5a307fbvc).
    
    **Zone**
    
    The zone of the proxy instance. This is the same zone as the primary zone of the primary instance.
    
    **Proxy Specifications**
    
    The current proxy specifications.
    
    -   The relationship between proxy specifications and single-node specifications is: `Proxy specifications = Sum of all proxy node specifications`.
        
    -   The relationship between the number of proxy nodes and proxy specifications is: `Number of proxy nodes = Proxy specifications / Specifications of a single proxy node`
        
    
    **Proxy Version**
    
    The minor engine version of the proxy.
    
    **Note**
    
    For more information about the updates in each minor version, see [Database proxy minor version release notes](/help/en/rds/apsaradb-rds-for-mysql/release-notes-of-dedicated-proxy-versions). To upgrade the minor engine version of the database proxy, see [Upgrade the minor engine version of a database proxy](/help/en/rds/apsaradb-rds-for-mysql/upgrade-the-dedicated-proxy-version-of-an-apsaradb-rds-for-mysql-instance).
    
    **Node Type**
    
    **Node ID**
    
    The ID of the proxy node.
    
    **Zone**
    
    The zone where the proxy node is located.
    
    **Agent Node CPU Cores**
    
    The specifications of a single proxy node.
    
    **Connection Information**
    
    **Proxy Endpoint (Terminal) ID**
    
    -   Each ApsaraDB RDS for MySQL instance supports one to seven proxy endpoints. You can create one internal endpoint and one public endpoint for each proxy endpoint. You can also configure different access policies for each proxy endpoint.
        
    -   When you enable the proxy, one proxy endpoint is automatically allocated. You can use it directly. To modify the configuration, see [Configure access policies for a database proxy endpoint](/help/en/rds/apsaradb-rds-for-mysql/configure-access-policies-for-a-database-proxy-endpoint).
        
    
    **Read/Write Attributes**
    
    -   **Read/Write (Read/Write Splitting)** (Default): Connects to both the primary instance and read-only instances. Accepts write requests.
        
    -   **Read-only (Does not connect to the primary instance and cannot accept write requests)**: Connects only to read-only instances. Does not accept write requests.
        
    
    For more information, see [Set read/write attributes and read weights](/help/en/rds/apsaradb-rds-for-mysql/configure-read-write-attributes-and-read-weights).
    
    **Nearest Access**
    
    The nearest access feature is supported only for deployments with four proxy nodes in a dual-zone deployment. For more information, see [Set up nearest access](/help/en/rds/apsaradb-rds-for-mysql/nearby-access).
    
    **Network Information**
    
    The zone, VPC, and vSwitch information of the proxy.
    
    You can change the vSwitch. Before you change the vSwitch, make sure you understand the [impacts](/help/en/rds/apsaradb-rds-for-mysql/change-the-vpc-and-vswitch-for-an-apsaradb-rds-for-mysql-instance#section-xyy-xzz-x0j). Click **Switch vSwitch**, select the **Destination VSwitch** and **Change Time**, and then click **OK**.
    
    **Internal Endpoint/Port**
    
    -   This internal endpoint is bound to the proxy endpoint ID. You can use this endpoint to connect to the ApsaraDB RDS for MySQL instance from an internal network and use database proxy features. For more information, see [Configure access policies for a database proxy endpoint](/help/en/rds/apsaradb-rds-for-mysql/configure-access-policies-for-a-database-proxy-endpoint).
        
    -   You can click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7854183071/p739396.png) icon next to the endpoint to modify the endpoint prefix and port number. For more information, see [Set database proxy endpoints](/help/en/rds/apsaradb-rds-for-mysql/manage-the-dedicated-proxy-endpoints-of-an-apsaradb-rds-for-mysql-instance).
        
    
    **Public Endpoint and Port**
    
    The public endpoint and port of the proxy.
    
    You can use this endpoint to connect to the ApsaraDB RDS for MySQL instance from the internet and use database proxy features.
    
    **Note**
    
    -   The database proxy provides an internal endpoint by default. You can also request a public endpoint.
        
    -   After you request a public endpoint, you can click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7854183071/p739396.png) icon next to the endpoint to modify the endpoint prefix and port number. For more information, see [Set database proxy endpoints](/help/en/rds/apsaradb-rds-for-postgresql/manage-the-database-proxy-endpoints-of-an-apsaradb-rds-for-postgresql-instance#task-2199206).
        
    

### (Optional) **Disable the database proxy**

#### **Usage notes**

Disabling the database proxy may have the following impacts:

-   **Read/write splitting stops working:** If you use the database proxy for read/write splitting, applications can no longer route read requests to read-only instances after the proxy is disabled. All requests are sent to the primary instance. This can overload the primary instance and negatively affect database performance and stability.
    
-   **Connections fail:** If you use the database proxy to connect to the database, applications that access the database through the proxy endpoint are disconnected after the proxy is disabled.
    
-   **Connection management issues:** The Alibaba Cloud database proxy provides features such as connection pool management and persistent connections. After the proxy is disabled, you must implement connection management on the application side. This may increase the overhead of creating and destroying connections and negatively affect performance.
    
-   **Security risks:** The database proxy acts as a security barrier and provides features such as access control and security policies. Disabling the proxy may directly expose the database instance, which increases the risk of attacks.
    
-   **Increased O&M complexity:** The proxy typically provides features such as monitoring, log collection, and fault detection. After the proxy is disabled, you may need to implement these features by other means. This increases O&M complexity and workload.
    
-   **Performance impact:** Although connecting directly to the database can reduce a network hop and improve local communication efficiency, you lose the optimization capabilities of the proxy, such as query caching and connection reuse. This can negatively affect performance in high-concurrency scenarios.
    
-   **Compatibility issues:** If your application relies on special features or protocol transformations provided by the proxy, a direct connection may cause compatibility issues.
    
-   **Failover and high availability:** In some scenarios, the database proxy may participate in fault detection and automatic failover. If the proxy is disabled, you must handle these situations manually. This affects service high availability.
    
-   **Database connections:** Disabling the database proxy deletes the proxy endpoint. Applications can no longer connect to the database instance through the internal or public proxy endpoint. Existing connections are terminated. The endpoints of the ApsaraDB RDS for MySQL instance are not affected.
    
-   If you re-enable the proxy after disabling it, the proxy endpoint changes.
    

#### **Procedure**

1.  Go to the [RDS Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select a region. Then, click the ID of the target instance.
    
2.  In the navigation pane on the left, click **Database Proxy**.
    
3.  In the upper-right corner of the page, click **Disable Database Proxy**.
    
4.  Click **OK**.
    

## Related API operations

**API**

**Description**

[ModifyDBProxy](/help/en/rds/api-enable-or-disable-the-dedicated-proxy-feature#doc-api-Rds-ModifyDBProxy)

When you enable the database proxy feature for an ApsaraDB RDS for MySQL instance, you must set the **ConfigDBProxyService** parameter to **Startup**. Configure other parameters as needed.

[DescribeDBProxy](/help/en/rds/api-query-dedicated-proxy-details#doc-api-Rds-DescribeDBProxy)

Queries the details of the database proxy for an ApsaraDB RDS for MySQL instance.
