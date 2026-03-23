If the type, specification, and deployment mode of the database proxy for your ApsaraDB RDS for MySQL instance do not meet your business requirements or a number of proxy nodes on the RDS instance remain idle, you can modify database proxy configurations. This topic describes how to change the type, specification, and deployment mode of the database proxy for an RDS instance in the ApsaraDB RDS console and by calling an API operation. This topic also describes how to calculate the recommended specification of a proxy node.

## Prerequisites

The database proxy feature is enabled. For more information, see [Enable the database proxy feature](/help/en/rds/apsaradb-rds-for-mysql/enable-and-configure-the-dedicated-proxy-feature-for-an-apsaradb-rds-for-mysql-instance#task-2167178).

## Usage notes

-   If you change the type, specification, and deployment mode of the database proxy for your RDS instance, the database proxy feature is unavailable for 30 to 120 seconds. Make sure that your application is configured to automatically reconnect to the RDS instance.
    
-   If you change the type or specification of the database proxy multiple times within a short period of time, the system retains only the sessions on the database proxy with the original specifications before the most recent change.
    
-   When you change the type or specification of the database proxy, you cannot migrate the database proxy across zones. During the change, you can increase or reduce the number of zones. If you increase the number of zones, the deployment mode is changed from Deployment mode 3 to Deployment mode 2 or Deployment mode 1. If you reduce the number of zones, the deployment mode is changed from Deployment mode 2 or Deployment mode 1 to Deployment mode 3. For more information, see [Proxy deployment architecture](/help/en/rds/apsaradb-rds-for-mysql/what-are-database-proxies#4b2472beact70).
    
-   If you change the deployment mode from dual-zone deployment (Zone A + Zone B) to single-zone deployment (Zone A), you must delete the database proxy endpoint of Zone B. For more information, see [Manage database proxy endpoints](/help/en/rds/apsaradb-rds-for-mysql/manage-the-dedicated-proxy-endpoints-of-an-apsaradb-rds-for-mysql-instance).
    
-   The nearest access feature is supported only for Deployment mode 1 for the dedicated database proxy. If you want to use a general-purpose database proxy or change the deployment mode, you must disable the nearest access feature. For more information, see [Configure the nearest access feature](/help/en/rds/apsaradb-rds-for-mysql/nearby-access).
    
-   Relationship between the specification of the database proxy and the specifications of proxy nodes: `Specification of a database proxy = Specifications of all proxy nodes`. For example, four dedicated database proxy nodes are deployed in Zone A and Zone B, the number of proxy nodes in each zone is 2, and the number of CPU cores for a single proxy node is 1 in Zone A and is 2 in Zone B. `The specification for the database proxy equals the specifications of the proxy zones`. In this example, the specification for the database proxy is 6 CPU cores. The value is obtained based on the following calculation: 1 × 2 + 2 × 2 = 6.
    
-   Relationship between the number of proxy nodes and the specification of the database proxy: `Number of proxy nodes = Specifications of the database proxy/Unit specification of a proxy node`. The unit specification of a proxy node is fixed as 2 CPU cores. For example, if the specification of the database proxy is 6 CPU cores, the number of proxy nodes is 3. The value is obtained based on the following calculation: `6/2 = 3`.
    

## **Impacts of database proxy configuration modification**

ApsaraDB RDS for MySQL supports three deployment modes and allows you to switch between the deployment modes. If you change the deployment mode, the numbers of zones and proxy nodes also change. The following figures show the deployment modes.

-   Deployment mode 1
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7286722371/p861611.png)
    
-   Deployment mode 2
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7286722371/p861615.png)
    
-   Deployment mode 3
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7286722371/p861616.png)
    

**Change type**

**Zone change**

**Proxy node change**

Deployment mode 1 to Deployment mode 2

Unchanged.

Reduced.

A proxy node is separately removed from Zone A and Zone B.

Deployment mode 1 to Deployment mode 3

A zone is removed. You can select the zone that you want to retain. We recommend that you retain the zone in which the primary RDS instance resides.

Reduced.

Two proxy nodes are removed from Zone B.

Deployment mode 2 to Deployment mode 1

Unchanged.

Increased.

A proxy node is separately added to Zone A and Zone B.

Deployment mode 2 to Deployment mode 3

A zone is removed. You can select the zone that you want to retain. We recommend that you retain the zone in which the primary RDS instance resides.

Unchanged.

A proxy node is added to Zone A. A proxy node is removed from Zone B.

Deployment mode 3 to Deployment mode 1

A zone is added.

Increased.

The number of proxy nodes in Zone A remains unchanged. Two proxy nodes are added to Zone B.

Deployment mode 3 to Deployment mode 2

A zone is added.

Unchanged.

A proxy node is removed from Zone A. A proxy node is added to Zone B.

## Procedure

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Database Proxy**.
    
3.  In the **Basic Information** section of the page that appears, click **Modify Configuration**. In the dialog box that appears, configure the **Proxy Type**, **Deployment Method**, **Total Number of Nodes**, **Zone**, **CPU Cores for Single Proxy Node**, and **Update Time** parameters and click **OK**.
    
    **Note**
    
    -   For more information about the differences between general-purpose database proxies and dedicated database proxies, see [What are database proxies?](/help/en/rds/apsaradb-rds-for-mysql/what-are-database-proxies#171b5a307fbvc)
        
    -   The following table describes the formulas that can be used to calculate the recommended specifications of a single proxy node.
        
        **Proxy type**
        
        **RDS instance on RDS High-availability Edition**
        
        **RDS instance on RDS Cluster Edition**
        
        General-purpose
        
        `(Number of CPU cores of the primary RDS instance + Number of CPU cores of all read-only RDS instances that belong to the primary RDS instance)/4`. The result is rounded up.
        
        `(Number of CPU cores of the primary node + Number of CPU cores of all secondary nodes that belong to the primary node)/4`. The result is rounded up.
        
        Dedicated
        
        `(Number of CPU cores of the primary RDS instance + Number of CPU cores of all read-only RDS instances that belong to the primary RDS instance)/8`. The result is rounded up.
        
        `(Number of CPU cores of the primary node + Number of CPU cores of all secondary nodes that belong to the primary node)/8`. The result is rounded up.
        
        For example, your RDS instance runs RDS High-availability Edition, the primary RDS instance provides 8 CPU cores, and a read-only RDS instance that provides 4 CPU cores and a read-only RDS instance that provides 6 CPU cores are attached to the primary RDS instance. In this case, the recommended specification of a proxy node is 3 CPU cores. The value is obtained based on the following calculation: `(8 + 4 + 6)/8 = 3`.
        
    
4.  In the **Configurations Before and After Specification Change** dialog box, verify the information and click **OK**.
    

## Related operations

**Operation**

**Description**

[ModifyDBProxyInstance](/help/en/rds/api-modify-settings-of-a-dedicated-proxy#doc-api-Rds-ModifyDBProxyInstance)

Modifies the database proxy settings of an instance.

[DescribeDBProxy](/help/en/rds/api-query-dedicated-proxy-details#doc-api-Rds-DescribeDBProxy)

Queries the details about the proxy nodes of an instance.
