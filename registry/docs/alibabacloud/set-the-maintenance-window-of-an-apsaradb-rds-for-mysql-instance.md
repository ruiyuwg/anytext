This topic describes how to configure a maintenance window for an ApsaraDB RDS for MySQL instance. After you configure a maintenance window for your RDS instance, the backend system maintains your RDS instance during the maintenance window. This ensures the stability of your RDS instance. The default maintenance window spans from 02:00 to 06:00. We recommend that you set the maintenance window to an off-peak hour as needed. This helps prevent interruptions to your workloads.

For more information about how to configure the maintenance window of an RDS instance that runs another database engine, see the following topics:

-   [Set the maintenance window of an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/set-the-maintenance-window-of-an-apsaradb-rds-for-sql-server-instance#concept-xqk-jcj-wdb)
    
-   [Set the maintenance window of an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/set-the-maintenance-window-of-an-apsaradb-rds-for-postgresql-instance#concept-xqk-jcj-wdb)
    
-   [Set the maintenance window of an ApsaraDB RDS for MariaDB instance](/help/en/rds/apsaradb-rds-for-mariadb/set-the-maintenance-window-of-an-apsaradb-rds-instance#concept-xqk-jcj-wdb)
    

## Usage notes

-   Before the maintenance starts, the system sends emails to the contacts that are associated with your Alibaba Cloud account. We recommend that you check your email box on a regular basis to obtain up-to-date information.
    
-   When the maintenance window arrives, your RDS instance enters the **Maintaining Instance** state. This ensures a smooth maintenance process. When the RDS instance is in this state, database access and query operations such as performance monitoring are not affected. However, except for account management, database management, and IP address whitelist configuration, modification operations such as upgrade, downgrade, and restart are temporarily unavailable.
    
-   During the maintenance window, one or two instance switchovers occur. Make sure that your application is configured to automatically reconnect to your RDS instance. For more information about the impacts of an instance switchover, see [Impacts of an instance switchover](/help/en/rds/apsaradb-rds-for-mysql/untitled-document-1701914031929).
    

## Modify the maintenance window of a single RDS instance

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the **Configuration Information** section, click **Settings** to the right of **Maintenance Window**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5232682571/p986696.png)
    
3.  Select an appropriate **Start Time** and **End Time** for the maintenance window, and click **Yes**.
    
    **Note**
    
    The time zone of the displayed maintenance window is the same as the time zone of the computer used to log on to the ApsaraDB RDS console.
    

## Modify the maintenance window of multiple RDS instances at a time

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/rdsList/basic). In the left-side navigation pane, click **Instances**. In the top navigation bar, select the region in which the RDS instance resides.
    
2.  Select the check boxes to the left of the target instances, and click **Modify Maintenance Window** at the bottom of the page.
    
3.  In the dialog box that appears, select an appropriate maintenance window, and click **OK**.
    
    **Note**
    
    The time zone of the displayed maintenance window is the same as the time zone of the computer used to log on to the ApsaraDB RDS console.
    

## Related operations

You can modify the maintenance window of an RDS instance using the API operation [ModifyDBInstanceMaintainTime](/help/en/rds/developer-reference/api-rds-2014-08-15-modifydbinstancemaintaintime).
