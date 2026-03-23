ApsaraDB RDS for MySQL supports cross-zone migration of proxy nodes. You can migrate the proxy nodes of an ApsaraDB RDS for MySQL instance across zones in the same region. We recommend that you migrate the proxy nodes to the zone of the primary RDS instance.

## Prerequisites

-   Your RDS instance meets the following requirements:
    
    -   The RDS instance runs MySQL.
        
    -   The RDS instance runs RDS High-availability Edition or RDS Cluster Edition.
        
    -   The RDS instance uses cloud disks.
        
    -   The database proxy feature is enabled for the RDS instance.
        
    -   The RDS instance is in the Running state.
        
        **Note**
        
        Make sure that the primary RDS instance, its read-only RDS instances, and its proxy node are all in the Running state.
        
-   The RDS instance uses endpoints of the virtual private cloud (VPC) network type. Cross-zone migration is not supported for a database proxy of the classic network type. For more information, see [View and manage instance endpoints and ports](/help/en/rds/apsaradb-rds-for-mysql/view-and-change-the-internal-and-public-endpoints-and-port-numbers-of-an-apsaradb-rds-for-mysql-instance).
    

## Billing rules

You can migrate proxy nodes across zones free of charge.

## Impacts

-   When you migrate proxy nodes across zones, a transient connection that lasts for approximately 30 seconds occurs during the migration.
    
    -   If your RDS instance runs RDS High-availability Edition, you can use the endpoint of the primary RDS instance or a read-only RDS instance to connect your application to the RDS instance. This helps prevent your workloads from being unaffected.
        
    -   If your RDS instance runs RDS Cluster Edition, you can use the read/write endpoint, read-only endpoint, or direct node connection endpoint to connect your application to the RDS instance. This helps prevent your workloads from being unaffected.
        
    
    **Note**
    
    We recommend that you connect your application to the RDS instance by using the preceding endpoints and migrate proxy nodes across zones during off-peak hours.
    
-   Make sure that your application is configured to automatically reconnect to your RDS instance.
    
    **Note**
    
    If your application is not configured to automatically reconnect to your RDS instance, manually reconnect your application to your RDS instance.
    
-   The cross-zone migration causes changes to the virtual IP addresses (VIPs) of your RDS instance. We recommend that you use an endpoint rather than an IP address of your RDS instance to connect your application to your RDS instance.
    
-   After the cross-zone migration, you must immediately delete the cached DNS records from the database client. If the database client runs on a Java virtual machine (JVM), we recommend that you set the time-to-live (TTL) in the JVM configuration to 60 seconds or less. This way, if the VIP that is bound to the in-use endpoint of your RDS instance changes, your application can query the related DNS records again to obtain the new VIP. Then, your application can connect to the new VIP.
    
    **Note**
    
    For more information about how to specify the TTL in the JVM configuration, see [Class InetAddress](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/net/InetAddress.html).
    
-   If the resource inventory in the zone to which you want to migrate proxy nodes is insufficient, the migration may fail.
    
-   Cross-zone migration may cause the nearest access feature to become invalid.
    
    After the cross-zone migration, the new nearest zone can be accessed by default. The original nearest zone can no longer be accessed. If you change the zone of a proxy endpoint to a zone that is different from the default zone, the nearest access to the new zone fails. The following table describes example scenarios.
    
    **Scenario**
    
    **Original proxy node information**
    
    **New proxy node information**
    
    **Current zone of the proxy node**
    
    **Proxy endpoint**
    
    **Nearest access**
    
    **New zone of the proxy node**
    
    **Default zone of the proxy endpoint**
    
    **New zone of the proxy endpoint**
    
    **Nearest access**
    
    Scenario 1:
    
    `Zone A+Zone B` to `Zone A+Zone C`
    
    Zone A
    
    Proxy endpoint a
    
    Zone A
    
    Zone A
    
    Zone A
    
    Zone A
    
    Zone A
    
    Zone C
    
    Invalid
    
    Zone B
    
    Proxy endpoint b
    
    Zone B
    
    Zone C
    
    Zone C
    
    Zone C
    
    Zone C
    
    Zone D
    
    Invalid
    
    Scenario 2:
    
    `Zone A+Zone B` to `Zone C+Zone D`
    
    Zone A
    
    Proxy endpoint a
    
    Zone A
    
    Zone C
    
    Zone C
    
    Zone C
    
    Zone C
    
    Zone E
    
    Invalid
    
    Zone B
    
    Proxy endpoint b
    
    Zone B
    
    Zone D
    
    Zone D
    
    Zone D
    
    Zone D
    
    Zone E
    
    Invalid
    

**Important**

If your primary RDS instance and proxy node reside in different zones and you use a proxy endpoint to connect to the RDS instance, the write performance decreases. We recommend that you specify the same VPC and vSwitch for the primary RDS instance and the proxy node.

## Procedure

1.  Log on to the ApsaraDB RDS console and go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which your RDS instance resides. Then, find the RDS instance and click the instance ID.
    
2.  In the left-side navigation pane, click **Database Proxy** and view the basic information about your database proxy.
    
3.  Click **Cross-zone Migration****.**
    
    **Note**
    
    If **Cross-zone Migration** is not displayed, you must check whether your RDS instance meets the [prerequisites](#d6cb1b20a2g89).
    
4.  In the **Cross-zone Migration of Database Proxy** dialog box, view the zone and network information about the primary RDS instance and the database proxy. Configure the Destination Zone, Destination vSwitch, and Change Time parameters, and click **OK**.
    
    **Important**
    
    During the cross-zone migration, you cannot change the **type** and **specifications** of the database proxy.
    
5.  Read the impacts of the cross-zone migration and click **OK** again.
    

## Related operations

**Operation**

**Description**

[ModifyDBProxyInstance](/help/en/rds/developer-reference/api-rds-2014-08-15-modifydbproxyinstance)

Migrates proxy nodes to a destination zone by specifying vSwitchIds.

## FAQ

-   Does the cross-zone migration of proxy nodes affect the connection to my primary RDS instance?
    
    The cross-zone migration of proxy nodes affects your workloads only if you use a proxy endpoint to connect to your RDS instance. If your RDS instance runs RDS High-availability Edition and you use the endpoint of the primary RDS instance or a read-only RDS instance to connect your application to the RDS instance, your workloads remain unaffected. If your RDS instance runs RDS Cluster Edition and you use the read/write endpoint, read-only endpoint, or direct node connection endpoint to connect your application to the RDS instance, your workloads remain unaffected. We recommend that you connect your application to the RDS instance by using the preceding endpoints and migrate proxy nodes across zones during off-peak hours.
    
-   What are the impacts of the cross-zone migration of proxy nodes?
    
    When you migrate proxy nodes across zones, a transient connection that lasts for approximately 30 seconds occurs during the migration. The duration of the interruption varies based on your business. We recommend that you use the endpoints that are not affected by the migration to connect to your RDS instance and migrate proxy nodes across zones during off-peak hours. For more information, see [Impacts](#eaf477ca34t9k).
