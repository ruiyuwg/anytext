RDS automatically triggers a primary/secondary switchover if the primary node of an instance fails or if an emergency fix is applied to the secondary node to mitigate a potential risk. During a switchover, the roles of the primary and secondary nodes are swapped. After the switchover, the instance endpoint remains unchanged, and your application automatically connects to the new primary node, which was the former secondary node. This process ensures high availability. You can also manually trigger a primary/secondary switchover.

## Prerequisites

-   If the instance is a standard instance, it must belong to one of the following editions:
    
    -   High-availability series
        
    -   RDS Enterprise Edition
        
    -   Cluster Edition
        
    
    **Note**
    
    Basic Series instances do not have a secondary node and therefore do not support primary/secondary switchover.
    
-   If the instance is a read-only instance, it must belong to the high-availability series and use the cloud disk storage class.
    

## Background information

-   Automatic switchover: This feature is enabled by default. If the primary node fails, RDS automatically switches workloads to the secondary node. For more information about what triggers a primary/secondary switchover, see [Reasons for primary/secondary switchover](/help/en/rds/apsaradb-rds-for-mysql/reasons-for-primary-or-secondary-switchovers#concept-2021355).
    
-   Manual switchover: Even if automatic switchover is enabled, you can manually perform a primary/secondary switchover. Manual switchover is useful for disaster recovery drills or for scenarios such as connecting from the nearest zone in a multi-zone deployment.
    

**Note**

-   For high-availability series instances, data is synchronized in real time between the primary and secondary nodes. You can access only the primary node. The secondary node serves only as a backup and does not handle application traffic.
    
-   Read-only instances that belong to the high-availability series also support primary/secondary database switchover and allow you to view switchover logs.
    

For information about primary/secondary switchover for other database engines, see the following topics:

-   [SQL Server primary/secondary switchover](/help/en/rds/apsaradb-rds-for-sql-server/switch-workloads-over-between-primary-and-secondary-apsaradb-rds-for-sql-server-instances#concept-ftz-42j-wdb)
    
-   [PostgreSQL automatic or manual primary/secondary switchover](/help/en/rds/apsaradb-rds-for-postgresql/switch-workloads-over-between-primary-and-secondary-apsaradb-rds-for-postgresql-instances#concept-ftz-42j-wdb)
    
-   [MariaDB primary/secondary switchover](/help/en/rds/apsaradb-rds-for-mariadb/switch-over-workloads-between-primary-and-secondary-apsaradb-rds-for-mariadb-instances#concept-ftz-42j-wdb)
    

## Impact

-   A primary/secondary switchover causes a service interruption that typically lasts for 15 seconds or less. You must ensure that your application has an automatic reconnection mechanism.
    
    If your application uses an older version of the Druid component for database connection management, it might fail to automatically reconnect after a disconnection. To avoid this issue, you can upgrade the Druid component to version 1.1.16 or later.
    
-   If the primary instance has attached read-only instances, the read-only instances may experience a data delay of several minutes after the switchover. This is because RDS must rebuild the replication task and synchronize incremental data.
    
-   A primary/secondary switchover does not change the instance endpoint, but the underlying IP address might change. We recommend that you use the endpoint to ensure that your application can continue to run as expected during the switchover.
    
-   If the instance experiences a severe failure, the switchover may take longer than usual.
    

## Manually switch primary and secondary nodes

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the navigation pane on the left, click **Service Availability**.
    
3.  In the **Availability Information** section, click **Switch Primary/Secondary Instance**.
    
4.  Select a switchover time and click **Confirm**.
    
    **Important**
    
    During a primary/secondary switchover, you cannot perform operations such as managing databases and accounts or changing the network type. We recommend that you select **Switch immediately using current settings**.
    
    For Cluster Edition instances, you can also perform a primary/secondary switchover from the instance topology diagram on the **Basic Information** page.
    

## Temporarily disable automatic primary/secondary switchover

Automatic switchover is **enabled** by default. When the primary node fails, RDS automatically switches to the secondary node. You can temporarily disable automatic switchover for the following scenarios:

-   To avoid any impact on system availability during major sales promotions.
    
-   To prevent a switchover from introducing unexpected variables during critical application upgrades.
    
-   During major events or stability assurance periods, you do not want a primary/standby switchover to affect system stability.
    

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the navigation pane on the left, click **Service Availability**.
    
3.  In the **Availability Information** section, click **Automatic Primary/Secondary Switchover**.
    
    **Note**
    
    If the **Automatic Primary/Secondary Switchover** button is not displayed, make sure that your instance meets the prerequisites described in this topic.
    
4.  Select **Temporarily Disable**, set the **Disable Until** time, and then click **Confirm**.
    
    **Note**
    
    -   Automatic primary/secondary switchover is automatically re-enabled after the specified **Disable Until** time.
        
    -   The default disable period is one day. You can set a disable period of up to seven days. The disable period ends at 23:59:59 on the last day.
        
    

After you complete the configuration, you can view the expiration time of the temporary disablement on the **Service Availability** page.

## View primary/secondary switchover logs

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the navigation pane on the left, click **Service Availability**.
    
3.  In the **Primary/Secondary Switchover Logs** section, specify a time range to query the logs.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4105838961/p726845.png)
    

## FAQ

-   Q: Can I access the secondary node?
    
    A: You can access the secondary nodes of Cluster Edition instances only. The secondary nodes of other instance editions are not accessible.
    
-   Q: After a primary/secondary switchover, do I need to manually switch back to the original primary node?
    
    A: No. Data on the primary and secondary nodes is fully synchronized. After the switchover, the former secondary node becomes the new primary node. No additional action is required.
    
-   Q: After a primary/standby switchover, the instance status has not returned to Running for more than 10 minutes. What are the possible causes, and how can you resolve the issue?
    
    When an abnormal event triggers a high-availability (HA) switchover in RDS, the application's persistent connections might not detect changes in the connection status. If you do not configure a socket timeout value, the application waits indefinitely for the database to return a result, typically timing out after several hundred seconds. During this period, some database connections become unavailable, and SQL statements fail frequently. To avoid invalid connections, we recommend configuring **connectTimeout** and **socketTimeout** to prevent indefinite waiting during network errors, thereby reducing downtime.
    
    Set timeout values based on your workload and usage patterns. For online transaction processing (OLTP) scenarios, we recommend setting **connectTimeout** to 1–2 seconds and **socketTimeout** to 60–90 seconds. These values are for reference only.
    

## Related APIs

**API**

**Description**

[Switch primary/secondary nodes](/help/en/rds/api-switch-services-between-a-primary-apsaradb-for-rds-instance-and-its-secondary-instance#doc-api-Rds-SwitchDBInstanceHA)

Switches the primary and secondary nodes of an RDS instance.

[Configure automatic primary/secondary switchover](/help/en/rds/api-enable-or-disable-automatic-primary-or-secondary-switchovers#doc-api-Rds-ModifyHASwitchConfig)

Enables or disables automatic primary/secondary switchover for an RDS instance.

[Query primary/secondary switchover settings](/help/en/rds/api-query-settings-of-automatic-primary-or-secondary-switchover#doc-api-Rds-DescribeHASwitchConfig)

Retrieves the automatic primary/secondary switchover configuration for an RDS instance.
