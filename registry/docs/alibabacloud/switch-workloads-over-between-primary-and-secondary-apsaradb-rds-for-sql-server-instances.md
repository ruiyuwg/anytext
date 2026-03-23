ApsaraDB RDS for SQL Server provides the primary/secondary switchover feature to ensure high availability. If the primary RDS instance of your database system fails due to system operation errors or hardware failures, the system automatically switches your workloads over from the primary RDS instance to the secondary RDS instance. After the primary/secondary switchover is complete, the secondary RDS instance becomes the new primary RDS instance. The endpoint that is used to connect to your database system remains unchanged. Your application can automatically connect to the new primary RDS instance by using the endpoint. This ensures high availability. You can also manually switch your workloads over between the primary and secondary RDS instances when you need to upgrade, maintain, or troubleshoot your database system.

## Prerequisites

The primary RDS instance runs RDS High-availability Edition or RDS Cluster Edition.

**Note**

-   If you use RDS Cluster Edition, only automatic primary/secondary switchovers are supported. You cannot manually switch workloads over between primary and secondary RDS instances. If you want to manually switch workloads over between primary and secondary RDS instances, contact Alibaba Cloud technical support.
    
-   If you use RDS Basic Edition, no secondary RDS instances are provided. Therefore, RDS Basic Edition does not support the primary/secondary switchover feature.
    

## Feature description

-   Automatic primary/secondary switchover: By default, the automatic primary/secondary switchover feature is enabled. If the primary node of your RDS instance fails, the system automatically switches your workloads over to the secondary node. For more information about the causes of primary/secondary switchovers, see [Reasons for primary/secondary switchovers](/help/en/rds/apsaradb-rds-for-mysql/reasons-for-primary-or-secondary-switchovers#concept-2021355).
    
-   Manual primary/secondary switchover: You can also manually switch your workloads over between the primary node and the secondary node of your RDS instance when the automatic primary/secondary switchover feature is enabled. You can perform manual primary/secondary switchovers for disaster recovery drills. You can also perform manual primary/secondary switchovers if you use the multi-zone deployment method and want to connect your application to the RDS instance in the zone that is closest to your application.
    

**Note**

Data is synchronized between the primary RDS instance and the secondary RDS instance in real time. You can access only the primary RDS instance. The secondary RDS instance runs only as a standby.

## Limits

Serverless RDS instances do not support manual primary/secondary switchovers. For more information, see [Overview](/help/en/doc-detail/604344.html#main-2272489). If a serverless RDS instance fails, the system automatically switches workloads over between primary and secondary serverless RDS instances.

## Usage notes

The primary/secondary synchronization mechanism of ApsaraDB RDS for SQL Server ensures full data synchronization between the primary RDS instance and secondary RDS instance of your database system. However, not all parameter settings of the ALTER LOGIN statement are synchronized. Only the settings of the SID, login\_name, and password parameters in the ALTER LOGIN statement are synchronized. ApsaraDB RDS for SQL Server uses the default values for all the other parameters in the ALTER LOGIN statement. For more information, see [ALTER LOGIN (Transact-SQL)](https://docs.microsoft.com/en-us/sql/t-sql/statements/alter-login-transact-sql?view=sql-server-ver15).

## Impacts

-   A service interruption that lasts about 30 seconds occurs during a primary/secondary switchover. Make sure that your application is configured to automatically reconnect to your database system.
    
    If your application uses an earlier version of the Druid component for connection management, your application may fail to automatically reconnect to your database system after disconnection. We recommend that you upgrade the Druid component to 1.1.16 or later to resolve this issue.
    
-   After a primary/secondary switchover is performed for an RDS instance, the read-only RDS instances that are attached to the RDS instance must re-establish the connections that are used to replicate data to and synchronize incremental data from the RDS instance. As a result, the data on the read-only RDS instances shows latencies of a few minutes.
    
-   A primary/secondary switchover does not cause changes to the endpoints that are used to connect to your RDS instance. However, the IP addresses that are associated with the endpoints may change. If your application uses endpoints to connect to your RDS instance, your application can still run as expected after a primary/secondary switchover.
    
-   A switchover may take longer when an instance fails.
    

## Perform a manual primary/secondary switchover

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Service Availability**.
    
3.  In the **Availability Information** section of the page that appears, click **Switch Primary/Secondary Instance**.
    
4.  Specify the time at which you want to perform a primary/secondary switchover. Then, click **OK**.
    
    **Note**
    
    You cannot perform specific operations during a primary/secondary switchover. For example, you cannot manage databases and accounts or change the network type. We recommend that you select **Within Specified Time Range**.
    

## Disable automatic primary/secondary switchovers for a short period of time

### **Scenarios**

By default, the automatic primary/secondary switchover feature is enabled. If the primary node of an RDS instance fails, the system automatically switches your workloads over from the primary node to the secondary node. You can temporarily disable the automatic primary/secondary switchover feature in the following scenarios:

-   A large-scale sales promotion during which you do not want a primary/secondary switchover to affect system availability
    
-   An important application upgrade during which you do not want a primary/secondary switchover to cause unexpected issues
    
-   A major event during which you do not want a primary/secondary switchover to affect system stability
    

### **Procedure**

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Service Availability**.
    
3.  In the **Availability Information** section, click **Automatic Primary/Secondary Switchover**.
    
    **Note**
    
    If you cannot find **Automatic Primary/Secondary Switchover**, check whether the RDS instance meets all prerequisites.
    
4.  Select **Temporarily Disable**, configure the **Deadline** parameter, and then click **OK**.
    
    **Note**
    
    -   When the date and time specified by the **Deadline** parameter arrives, the automatic primary/secondary switchover feature is automatically enabled.
        
    -   If you do not configure the Deadline parameter, the automatic primary/secondary switchover feature is disabled for one day by default. You can set the Deadline parameter to 23:59:59 seven days later at most.
        
    

After the configuration is complete, you can check the deadline after which the automatic primary/secondary failover feature is automatically enabled on the **Service Availability** page.

## View primary/secondary switchover logs

**Note**

You can view primary/secondary switchover logs only when the primary RDS instance runs SQL Server 2008 R2 with Premium Local SSDs.

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Service Availability**.
    
3.  In the **Primary/Secondary Switching Logs** section of the page that appears, select a time range and view the primary/secondary switchover logs that are generated over the selected time range.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4105838961/p726845.png)
    

## FAQ

### **Do I need to manually switch my workloads over from the secondary RDS instance to the primary RDS instance after a primary/secondary switchover?**

No, you do not need to manually switch your workloads over from the secondary RDS instance to the primary RDS instance after a primary/secondary switchover. The data in the primary RDS instance is the same as the data in the secondary RDS instance. After a primary/secondary switchover, the secondary RDS instance serves as the new primary RDS instance. No additional operations are required.

### **Each time a primary/secondary switchover is performed, my RDS instance does not run as expected** **10 minutes** **after the primary/secondary switchover is complete. What are the possible causes? How do I resolve the issue?**

If an exception on your RDS instance triggers a primary/secondary switchover to ensure high availability, your application may fail to identify and respond to the changes to the persistent connections. If no timeout periods are specified for socket connections, your application waits for the database to return the results. In most cases, your application is disconnected after hundreds of seconds. During this period, some connections to the database cannot work as expected, and a large number of SQL statements fail to be executed. To avoid invalid connections, we recommend that you configure the **connectTimeout** and **socketTimeout** parameters to prevent your application from waiting for a long period of time due to network errors. This reduces the time required to recover from failures.

You must configure these parameters based on your workloads and usage modes. For online transactions, we recommend that you set the **connectTimeout** parameter to 1 to 2 seconds and the **socketTimeout** parameter to 60 to 90 seconds. This configuration is for reference only.

## Related operations

**Operation**

**Description**

[SwitchDBInstanceHA](/help/en/rds/api-switch-services-between-a-primary-apsaradb-for-rds-instance-and-its-secondary-instance#doc-api-Rds-SwitchDBInstanceHA)

Switches workloads over between primary and secondary nodes.

[ModifyHASwitchConfig](/help/en/rds/api-enable-or-disable-automatic-primary-or-secondary-switchovers#doc-api-Rds-ModifyHASwitchConfig)

Enables or disables the automatic primary/secondary switchover feature for an instance.

[DescribeHASwitchConfig](/help/en/rds/api-query-settings-of-automatic-primary-or-secondary-switchover#doc-api-Rds-DescribeHASwitchConfig)

Queries the settings of the automatic primary/secondary switchover feature for an instance.
