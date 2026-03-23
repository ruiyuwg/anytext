You can change the vSwitch for an ApsaraDB RDS for SQL Server instance by modifying the vSwitch configuration in the ApsaraDB RDS console or by calling an API operation.

**Note**

To switch the vSwitch for an instance that runs a different database engine, see the following topics:

-   [Switch the VPC or vSwitch for an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/change-the-vpc-and-vswitch-for-an-apsaradb-rds-for-mysql-instance#task-2134447)
    
-   [Switch the vSwitch for an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/switch-an-apsaradb-rds-for-postgresql-instance-to-a-different-vswitch#task-2134447)
    

## Prerequisites

The storage type of the instance is enterprise SSD (ESSD) or standard SSD. This operation is also supported for serverless instances.

## Impacts

-   When your RDS instance is being switched to a different vSwitch, you may encounter a network interruption that lasts approximately 30 seconds. Make sure that your application is configured to automatically reconnect to your RDS instance.
    
-   Switching the vSwitch changes the virtual IP address (VIP). It's better to connect to your instance using its [endpoint](/help/en/rds/apsaradb-rds-for-sql-server/view-and-change-the-internal-and-public-endpoints-and-port-numbers-of-an-apsaradb-rds-for-sql-server-instance#concept-fbd-ypv-ydb) instead of its IP address in your application.
    
-   VIP changes disrupts RDS connections to [Data Management (DMS)](/help/en/dms/product-overview/what-is-dms#task-1919582) and [Data Transmission Service (DTS)](/help/en/dts/product-overview/what-is-dts#concept-26592-zh) , which will resume automatically once the change is complete.
    
-   Client-side caching can cause data to become read-only. Clear the cache to enable write operations.
    

## Procedure

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left navigation pane, click **Database Connection**, and then click **Switch vSwitch**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2645658571/p862112.png)
    
3.  Select a vSwitch and click **OK**.
    
    **Note**
    
    -   You can switch the instance only to a vSwitch that is in the same zone. To create a VPC or vSwitch, go to the VPC console.
        
    -   Only ApsaraDB RDS for SQL Server 2008 R2 instances that use cloud disks support VPC changes. Other instance versions do not support VPC switching. If your instance does not support direct VPC changes, you must [purchase a new ApsaraDB RDS instance](/help/en/rds/apsaradb-rds-for-sql-server/create-an-apsaradb-rds-for-sql-server-instance-1), select the destination VPC during the purchase, and then [migrate the data to the new instance](/help/en/rds/apsaradb-rds-for-sql-server/migrate-data-between-apsaradb-rds-for-sql-server-instances#concept-fxm-bhp-ydb).
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2645658571/p862114.png)
    
4.  In the dialog box, review the risks of the switch and click **OK**.
    

## **References**

-   To switch the instance to a vSwitch in a different zone, see [Migrate an instance across zones](/help/en/rds/apsaradb-rds-for-sql-server/migrate-an-apsaradb-rds-for-sql-server-instance-across-zones).
    
-   You can also switch the vSwitch of an instance by calling the [SwitchDBInstanceVpc - Switch the VPC and vSwitch for an RDS instance](/help/en/rds/apsaradb-rds-for-sql-server/api-rds-2014-08-15-switchdbinstancevpc-sqlserver) API operation.
