ApsaraDB RDS for MySQL allows you to configure the nearest access feature for database proxies. If you deploy the database proxies of an ApsaraDB RDS for MySQL instance in multiple zones, you can enable the nearest access feature to connect your application to a database proxy that is deployed in the same zone in which the application is deployed. In this case, the application, the database proxy, and the read-only RDS instance that is associated with the database proxy are in the same zone. This significantly reduces network hops and latency, improves the data read speed, and provides cross-zone disaster recovery capabilities. After you enable the nearest access feature, you can configure the read weights for the primary RDS instance and its read-only RDS instances that are associated with the database proxies.

## **Overview**

If database proxies are deployed in one zone and you disable the nearest access feature, all service traffic is processed by the database proxies that reside in the same zone and then routed to the backend databases. If the database proxies reside in different zones than the zones of the databases, cross-zone communication is triggered and the response time (RT) is increased. The following figure shows an example. ![1.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3927421371/p857973.png)

If database proxies are deployed in two zones and you enable the nearest access feature, only the database proxies deployed in the zone in which the required database proxy endpoint resides can receive, process, and route service traffic. You can add the databases in the same zone to the database proxy endpoint. This ensures that all service traffic is routed in the same zone, which significantly reduce access latency. The following figure shows an example. ![2.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3927421371/p858056.png)

## **Prerequisites**

The RDS instance meets the following requirements:

-   The RDS instance runs MySQL 5.7 or MySQL 8.0.
    
-   The RDS instance runs RDS High-availability Edition or RDS Cluster Edition.
    
-   The RDS instance uses cloud disks.
    
-   The database proxy feature is enabled for the RDS instance and the following settings are configured for the feature. For more information, see [Enable the database proxy feature](/help/en/rds/apsaradb-rds-for-mysql/enable-and-configure-the-dedicated-proxy-feature-for-an-apsaradb-rds-for-mysql-instance).
    
    -   The RDS instance use dedicated database proxies.
        
    -   The dual-zone deployment mode is used for the database proxies of the RDS instance.
        
    -   A total of four database proxies are enabled.
        

## **Billing rules**

You are not charged additional fees when you use the nearest access feature.

## **Usage notes**

-   If you enable the nearest access feature, the following impacts occur on the cross-zone migration of database proxies:
    
    If you enable the nearest access feature and want to migrate database proxies to different zones, you must configure a destination vSwitch for each database proxy endpoint (formerly proxy terminal). After the migration is complete, the settings of each database proxy endpoint remain unchanged. The zone for the nearest access feature is the same as the zone in which the destination vSwitch resides.
    
-   If you enable the nearest access feature, the following impacts occur on the specification change of database proxies:
    
    The nearest access feature is supported only for four dedicated proxies that are deployed in two zones. If you want to use general-purpose database proxies or change the deployment mode of database proxies, you must disable the nearest access feature. For more information, see [Deployment architecture of database proxies](/help/en/rds/apsaradb-rds-for-mysql/what-are-database-proxies#4b2472beact70).
    
-   The nearest access feature has no impacts on the allocation of read weights.
    
    The nearest access feature ensures that the business application, the database proxies, and the read-only RDS instances reside in the same zone. This prevents latency caused by cross-zone access. The proxies forward read requests to RDS instances based on the read weights that you specify for the instances. The forwarding is not affected by the nearest access policies.
    

## Enable or disable the nearest access feature

You can enable or disable the nearest access feature based on your business requirements.

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Database Proxy**.
    
3.  In the **Connection Information** section, find the database proxy endpoint that you want to modify and click **Modify Configuration** in the **Actions** column.
    
4.  In the dialog box that appears, click **Enable** or **Disable** next to the **Nearest Access** parameter.
    

**Note**

After you enable or disable the nearest access feature, the modification takes effect only on new connections to the RDS instance.

## Related operations

Operation

Description

[DescribeDBProxy](/help/en/rds/apsaradb-rds-for-mysql/api-rds-2014-08-15-describedbproxy-mysql)

Queries the detailed database proxy settings of an RDS instance.

[DescribeDBProxyEndpoint](/help/en/rds/apsaradb-rds-for-mysql/api-rds-2014-08-15-describedbproxyendpoint-mysql)

Queries information about a database proxy endpoint.

[ModifyDBProxyEndpoint](/help/en/rds/apsaradb-rds-for-mysql/api-rds-2014-08-15-modifydbproxyendpoint-mysql)

Modifies the connection settings for a database proxy endpoint.
