ApsaraDB RDS for PostgreSQL supports the primary/secondary switchover feature. If the primary ApsaraDB RDS for PostgreSQL instance of your database system fails, the system automatically switches your workloads over from the primary RDS instance to the secondary RDS instance to ensure service availability. After the primary/secondary switchover is complete, the secondary RDS instance becomes the new primary RDS instance, and the endpoint that is used to connect to your database system remains unchanged. This allows your application to automatically connect to the new primary RDS instance. You can also manually switch your workloads over between the primary and secondary RDS instances.

## Prerequisites

Your RDS instance runs RDS High-availability Edition or RDS Cluster Edition.

**Note**

-   In RDS Basic Edition, no secondary RDS instances are provisioned, and the primary/secondary switchover feature is not supported.
    
-   You can disable the automatic primary/secondary switchover feature for a short period of time for RDS instances that run RDS High-availability Edition with cloud disks and RDS Cluster Edition with cloud disks.
    

## Usage notes

-   By default, the automatic primary/secondary switchover feature is enabled. If the primary RDS instance fails, the system automatically switches your workloads over to the secondary RDS instance. For more information about the causes of primary/secondary switchovers, see [Reasons for primary/secondary switchovers](/help/en/rds/apsaradb-rds-for-postgresql/causes-for-primary-secondary-switchovers).
    
-   You can manually switch your workloads over between the primary RDS instance and the secondary RDS instance even if the automatic primary/secondary switchover feature is enabled. You can manually switch your workloads over between the primary RDS instance and the secondary RDS instance for disaster recovery drills. If you use the multi-zone deployment method and want to connect your application to the RDS instance in the zone that is closest to your application, you can also manually switch primary/secondary switchovers over between the primary RDS instance and the secondary RDS instance.
    

**Note**

-   In an RDS for MySQL instance that runs RDS High-availability Edition, data is synchronized between the primary node and the secondary node in real time. You can access only the primary node of the instance. The secondary node runs only as a standby and cannot be directly accessed.
    
-   Read-only RDS instances that run RDS High-availability Edition also support the primary/secondary switchover feature and allow you to view primary/secondary switchover logs.
    

## Impacts

-   A service interruption that lasts about 30 seconds occurs during a primary/secondary switchover. Make sure that your application is configured to automatically reconnect to your database system.
    
    If your application uses an earlier version of the Druid component for connection management, your application may fail to automatically reconnect to your database system after disconnection. We recommend that you upgrade the Druid component to 1.1.16 or later to resolve this issue.
    
-   After a primary/secondary switchover is performed for an RDS instance, the read-only RDS instances that are attached to the RDS instance must re-establish the connections that are used to replicate data to and synchronize incremental data from the RDS instance. As a result, the data on the read-only RDS instances shows latencies of a few minutes.
    
-   A primary/secondary switchover does not cause changes to the endpoints that are used to connect to your RDS instance. However, the IP addresses that are associated with the endpoints may change. If your application uses endpoints to connect to your RDS instance, your application can still run as expected after a primary/secondary switchover.
    
-   A switchover may take longer when an instance fails.
    

## Manually switch primary/secondary switchovers over between the primary RDS instance and the secondary RDS instance

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Service Availability**.
    
3.  In the **Availability Information** section of the page that appears, click **Switch Primary/Secondary Instance**.
    
4.  Configure the Switching Time parameter and click **OK**.
    
    **Note**
    
    During a primary/secondary switchover, operations, such as database and account management and network type change, cannot be performed. We recommend that you select **Switch Within Maintenance Window**.
    

## Disable the automatic primary/secondary switchover feature for a short period of time

By default, the automatic primary/secondary switchover feature is enabled. If the primary node of an RDS instance fails, the system automatically switches your workloads over from the primary node to the secondary node. You can temporarily disable the automatic primary/secondary switchover feature in the following scenarios:

-   A large-scale sales promotion during which you do not want a primary/secondary switchover to affect system availability
    
-   An important application upgrade during which you do not want a primary/secondary switchover to cause unexpected issues
    
-   A major event during which you do not want a primary/secondary switchover to affect system stability
    

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Service Availability**.
    
3.  In the **Availability Information** section, click **Configure Primary/Secondary Switchover**.
    
    **Note**
    
    If **Configure Primary/Secondary Switchover** is not displayed, check whether the RDS instance runs RDS High-availability Edition.
    
4.  Select **Disable Temporarily**, specify the **Deadline** parameter, and then click **OK**.
    
    **Note**
    
    -   When the point in time that is specified by the **Deadline** parameter arrives, the automatic primary/secondary switchover feature is enabled.
        
    -   If you do not specify the Deadline parameter, the automatic primary/secondary switchover feature is disabled for one day by default. You can set the Deadline parameter to 23:59:59 seven days later at most.
        
    
    After the configuration is complete, you can check the deadline after which the automatic primary/secondary failover feature is automatically enabled on the **Service Availability** page.
    

## View primary/secondary failover logs

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Service Availability**.
    
3.  In the **Primary/Secondary Switching Logs** section of the page that appears, select a time range and view the primary/secondary switchover logs that are generated over the selected time range.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4105838961/p726845.png)
    

## FAQ

-   Do I need to manually switch my workloads over from the secondary RDS instance to the primary RDS instance after a primary/secondary switchover?
    
    No, you do not need to manually switch your workloads over from the secondary RDS instance to the primary RDS instance after a primary/secondary switchover. The data in the primary RDS instance is the same as the data in the secondary RDS instance. After a primary/secondary switchover, the secondary RDS instance serves as the new primary RDS instance. No additional operations are required.
    
-   Each time a primary/secondary switchover is performed, my RDS instance does not run as expected 10 minutes after the primary/secondary switchover is complete. What are the possible causes? How do I handle the issue?
    
    If an exception on your RDS instance triggers a primary/secondary switchover to ensure high availability, your application may fail to identify and respond to the changes to the connections. If no timeout periods are specified for socket connections, your application waits for the database to return the results. In most cases, your application is disconnected after hundreds of seconds. During this period, some connections to the database cannot work as expected, and a large number of SQL statements fail to be executed. To avoid invalid connections, we recommend that you configure the **connectTimeout** and **socketTimeout** parameters to prevent your application from waiting for a long period of time due to network errors. This reduces the time required to recover from failures.
    
    You must configure these parameters based on your workloads and usage modes. For online transactions, we recommend that you set **connectTimeout** to 1 to 2 seconds and **socketTimeout** to 60 to 90 seconds. This configuration is for reference only.
    

## Related operations

**Operation**

**Description**

[SwitchDBInstanceHA](/help/en/rds/api-switch-services-between-a-primary-apsaradb-for-rds-instance-and-its-secondary-instance#doc-api-Rds-SwitchDBInstanceHA)

Switches workloads over between primary and secondary nodes.

[ModifyHASwitchConfig](/help/en/rds/api-enable-or-disable-automatic-primary-or-secondary-switchovers#doc-api-Rds-ModifyHASwitchConfig)

Enables or disables the automatic primary/secondary switchover feature for an instance.

[DescribeHASwitchConfig](/help/en/rds/api-query-settings-of-automatic-primary-or-secondary-switchover#doc-api-Rds-DescribeHASwitchConfig)

Queries the settings of the automatic primary/secondary switchover feature for an instance.
